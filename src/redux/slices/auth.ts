import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TAuthState = any;

// ----------------------------------------------------------------------
const initialState: TAuthState = {
  isInitialized: false,
  isAuthenticated: false,

  user: undefined,
  claims: undefined,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // called on every user state change, eg. login, reg, logout
    // init: (state: TAuthState, action: PayloadAction<TAuthInit>) => {
    //   const { user, claims } = action.payload;
    //   state.user = user;
    //   state.claims = claims;
    //   state.isInitialized = true;
    //   state.isAuthenticated = !!user;
    // },
    // updateUser: (state: TAuthState, action: PayloadAction<User.UpdateRes>) => {
    //   const { user } = action.payload;
    //   state.user = user;
    // },
    // updateClaims: (state: TAuthState, action: PayloadAction<ParsedToken>) => {
    //   const claims = action.payload;
    //   state.claims = claims;
    // },
    // logout: (state: TAuthState) => {
    //   state.isAuthenticated = false;
    //   state.user = undefined;
    //   state.claims = undefined;
    // },
  },
});

export default slice.reducer;
// export const updateUserRes = slice.actions.updateUser;
// export const { init } = slice.actions;

// ----------------------------------------------------------------------
// export function init(payload: TAuthInit) {
//   return async () => {
//     const { user } = payload;

//     // set user init state
//     dispatch(slice.actions.init(payload));
//     // initiate the org (app) loading
//     dispatch(orgInit({ userId: user?.id }));

//     // firebase analytics setUserId is not here because we want to capture it earlier before
//     // any firebase event is fired
//     Sentry.setUser(user ? { id: user.id, email: user.email } : null);
//   };
// }

// export function refreshToken() {
//   return async () => {
//     if (firebaseAuth?.currentUser) {
//       const { claims } = await firebaseAuth.currentUser.getIdTokenResult(true);
//       await dispatch(slice.actions.updateClaims(claims));
//     }
//   };
// }

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

// export function logout() {
//   return async () => {
//     await auth.logout();
//     dispatch(slice.actions.logout());
//     dispatch(orgLogout());
//     dispatch(donationLogout());
//     analytics.setUserId();
//     Sentry.setUser(null);
//   };
// }
