import { supabaseClient } from "@/supabase/app";
import { logout, refreshToken } from "@redux/slices/auth";
import { useDispatch, useSelector } from "@redux/store";
import PATHS from "@routes/paths";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isInitialized, isAuthenticated, user } = useSelector((s) => s.auth);

  const getUser = async () => {
    const { data } = await supabaseClient.auth.getUser();
    console.log(data);
    if (data) {
      dispatch(refreshToken());
    } else {
      dispatch(logout());
      navigate(PATHS.login);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      getUser();
    }
  }, []);

  return {
    isInitialized,
    isAuthenticated,
    user,
    logout: useCallback(() => dispatch(logout()), [dispatch]),
  };
};

export default useAuth;
