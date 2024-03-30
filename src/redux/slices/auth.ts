import { supabaseClient } from "@/supabase/app";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TAuthInit, UserDataT, UserT, UserTableT } from "@typedefs/auth";
import { dispatch } from "@redux/store";
import { enqueueSnackbar } from "notistack";
import { LoginData, RegisterData } from "@/schemas/auth";
import PATHS from "@routes/paths";

type TAuthState = {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user?: UserDataT;
};

// ----------------------------------------------------------------------
const initialState: TAuthState = {
  isInitialized: false,
  isAuthenticated: false,

  user: undefined,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // called on every user state change, eg. login, reg, logout
    init: (state: TAuthState, action: PayloadAction<TAuthInit>) => {
      const { user } = action.payload;
      state.user = user;
      state.isInitialized = true;
      state.isAuthenticated = !!user;
    },
    updateUser: (
      state: TAuthState,
      action: PayloadAction<{ user: UserDataT }>
    ) => {
      const { user } = action.payload;
      state.user = user;
    },

    logout: (state: TAuthState) => {
      state.isAuthenticated = false;
      state.user = undefined;
    },
  },
});

export default slice.reducer;
export const updateUserRes = slice.actions.updateUser;
export const { init } = slice.actions;

// ----------------------------------------------------------------------
export function refreshToken() {
  return async () => {
    try {
      const { data } = await supabaseClient.auth.getUser();

      if (data.user?.id) {
        const { data: UserData, error } = await supabaseClient
          .from("users")
          .select("*, company:company_id(*)")
          .eq("kinde_id", data.user?.id)
          .single();

        if (error) {
          throw error;
        }
        dispatch(slice.actions.init({ user: UserData as UserDataT }));
      } else {
        throw Error("No Session found");
      }
    } catch (error) {
      // ---LOGOUT USER-----------------------------
      dispatch(slice.actions.logout());
    }
  };
}

// ---REGISTER USER-----------------------------
export async function register(
  data: RegisterData,
  navigate: (path: string) => void
) {
  try {
    // ---LOGIN USER-----------------------------
    const { data: returnData, error } = await supabaseClient.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
      },
    });

    if (error) {
      throw error;
    }

    const { data: userData, error: errorUser } = await supabaseClient
      .from("users")
      .insert<UserTableT["Insert"]>({
        company_id: null,
        email: returnData?.user?.email,
        firstname: returnData.user?.user_metadata?.firstName,
        kinde_id: returnData?.user?.id,
        lastname: returnData.user?.user_metadata?.firstName,
      })
      .select("*")
      .single();

    if (errorUser) {
      throw errorUser;
    }

    dispatch(slice.actions.init({ user: userData as UserDataT }));

    navigate(PATHS.login);

    enqueueSnackbar("We have sent you an email to verify your account.", {
      variant: "success",
    });
  } catch (error) {
    enqueueSnackbar(error.message, { variant: "error" });
  }
}

// ---LOGIN USER-----------------------------
export async function login(data: LoginData, navigate: (path: string) => void) {
  try {
    const { data: returnData, error } =
      await supabaseClient.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

    if (error) {
      throw error;
    }

    const { data: userData, error: errorUser } = await supabaseClient
      .from("users")
      .select("*")
      .eq("kinde_id", returnData?.user?.id)
      .single();

    if (errorUser) {
      throw errorUser;
    }

    dispatch(slice.actions.init({ user: userData }));
    navigate(PATHS.root);

    enqueueSnackbar("Logged in successfully", { variant: "success" });
  } catch (error) {
    enqueueSnackbar(error.message, { variant: "error" });
  }
}

export async function loginWithGoogle() {
  try {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: import.meta.env.VITE_APP_BASE_URL_UI + PATHS.validate,
      },
    });

    if (error) {
      throw error;
    }

    const { data: userSession } = await supabaseClient.auth.getUser();

    if (userSession.user?.id) {
      const { data: userData, error: errorUser } = await supabaseClient
        .from("users")
        .select("*")
        .eq("kinde_id", userSession.user?.id)
        .single();

      if (errorUser) {
        await supabaseClient.from("users").insert({
          company_id: null,
          email: userSession.user?.email,
          firstname: userSession.user?.user_metadata?.firstName,
          kinde_id: userSession.user?.id,
          lastname: userSession.user?.user_metadata?.lastName,
        });
      }
    }

    dispatch(refreshToken());
    enqueueSnackbar("Logged in successfully", { variant: "success" });
  } catch (error) {
    console.error("error", error);
    enqueueSnackbar(error.message, { variant: "error" });
  }
}

// export function updateUser(action: User.UpdateReq) {
//   return async () => {
//     try {
//       const { data } = await fn.userUpdate(action);
//       analytics.user.update();
//       dispatch(slice.actions.updateUser(data));
//       return data.user;
//     } catch (e) {
//       throw e;
//     }
//   };
// }

export function logout() {
  return async () => {
    console.log("logout");
    await supabaseClient.auth.signOut();
    dispatch(slice.actions.logout());
  };
}
