import React from "react";
import { RegisterData } from "@typedefs/auth";
//
import AuthHeader from "../_components/AuthHeader";
import AuthRegisterForm from "./AuthRegisterForm";
import { RegisterDataSchema } from "@/schemas/auth";
import { supabaseClient } from "@/supabase/app";
import { enqueueSnackbar } from "notistack";
import { register } from "@redux/slices/auth";
import { useNavigate } from "react-router";

export default function Register() {
  // ---STATE-----------------------------
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState<RegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // ---HOOKS-----------------------------
  const navigate = useNavigate();

  // ---HANDLERS-----------------------------
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // ---VALIDATE DATA-----------------------------
      RegisterDataSchema.parse(data);

      // ---REGISTER USER-----------------------------
      register(data, navigate);
    } catch (error) {
      // ----------------------------------------------
      if (error?.errors?.[0]?.message) {
        setError(error.errors[0].message);
        enqueueSnackbar(error.errors[0].message, { variant: "error" });
      }
    }

    setIsLoading(false);
  };

  // ---GOOGLE SIGN IN-----------------------------
  const handleGoogleSignIn = async () => {
    try {
      // ---SIGN IN WITH GOOGLE-----------------------------
      const { error, data: returnData } =
        await supabaseClient.auth.signInWithOAuth({
          provider: "google",
        });

      // ---HANDLE ERROR-----------------------------
      if (error) {
        throw error;
      }

      console.log("returnData", returnData);

      enqueueSnackbar("Logged in successfully", { variant: "success" });
    } catch (error) {
      console.error("error", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <main className="h-[100vh] flex flex-col items-center justify-center">
      <AuthHeader />
      <AuthRegisterForm
        handleOnSubmit={handleOnSubmit}
        isLoading={isLoading}
        data={data}
        error={error}
        setData={setData}
        handleGoogleSignIn={handleGoogleSignIn}
      />
    </main>
  );
}
