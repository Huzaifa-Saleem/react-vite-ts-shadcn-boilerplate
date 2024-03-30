import { supabaseClient } from "@/supabase/app";
import LoadingScreen from "@components/LoadingScreen";
import { logout, refreshToken } from "@redux/slices/auth";
import { useDispatch } from "@redux/store";
import PATHS from "@routes/paths";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

interface Props {}

const index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createUser = async () => {
    const { data: userSession } = await supabaseClient.auth.getUser();

    if (userSession.user?.id) {
      const { data: userData, error: errorUser } = await supabaseClient
        .from("users")
        .select("*")
        .eq("kinde_id", userSession.user?.id)
        .single();

      if (errorUser) {
        const { error: newUserError } = await supabaseClient
          .from("users")
          .insert({
            company_id: null,
            email: userSession.user?.email,
            firstname: userSession.user?.user_metadata?.firstName,
            kinde_id: userSession.user?.id,
            lastname: userSession.user?.user_metadata?.lastName,
          });

        if (newUserError) {
          dispatch(logout());
          navigate(PATHS.login);
        }
      }
    }

    dispatch(refreshToken());
    navigate(PATHS.root);
  };

  useEffect(() => {
    createUser();
  }, []);

  return <LoadingScreen />;
};

export default index;
