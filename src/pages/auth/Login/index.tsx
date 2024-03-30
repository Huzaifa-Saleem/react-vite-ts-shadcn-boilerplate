import React from "react";
// ----------------------------------------------
import AuthLoginForm from "./AuthLoginForm";
import AuthHeader from "../_components/AuthHeader";

import { enqueueSnackbar } from "notistack";
import { LoginData, LoginDataSchema } from "@/schemas/auth";
import { supabaseClient } from "@/supabase/app";
import { login, loginWithGoogle, refreshToken } from "@redux/slices/auth";
import { dispatch } from "@redux/store";
import { useNavigate } from "react-router";

export default function Login() {
  // ---STATE-----------------------------
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState<LoginData>({
    email: "",
    password: "",
  });

  // ---HOOKS-----------------------------
  const navigate = useNavigate();

  // ---USE EFFECT-----------------------------
  React.useEffect(() => {
    setIsLoading(false);
    setError("");
  }, []);

  // ---HANDLERS-----------------------------
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // ---VALIDATE DATA-----------------------------
      LoginDataSchema.parse(data);

      // ---LOGIN USER-----------------------------
      await login(data, navigate);
    } catch (error) {
      // ---HANDLE ZOD ERROR-----------------------------
      if (error?.errors?.[0]?.message) {
        setError(error.errors[0].message);
        enqueueSnackbar(error.errors[0].message, { variant: "error" });
      }

      // ---HANDLE SUPABASE ERROR-----------------------------
      else {
        setError(error.message);
        enqueueSnackbar(error.message, { variant: "error" });
      }
    }
  };

  // ---GOOGLE SIGN IN-----------------------------
  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      // ---SIGN IN WITH GOOGLE-----------------------------
      await loginWithGoogle();
    } catch (error) {
      console.error("error", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <main className="h-[100vh] flex flex-col items-center justify-center">
      <AuthHeader />
      <AuthLoginForm
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
