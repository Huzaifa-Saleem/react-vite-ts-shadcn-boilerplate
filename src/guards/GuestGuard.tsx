import { Navigate, Outlet } from "react-router-dom";

// import useAuth from '@hooks/useAuth';
import PATHS from "@routes/paths";
import LoadingScreen from "@components/LoadingScreen";
import useAuth from "@hooks/useAuth";

// ----------------------------------------------------------------------
export default function GuestGuard() {
  const { isAuthenticated, isInitialized } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={PATHS.root} />;
  }

  // if (!isInitialized) {
  //   return <LoadingScreen />;
  // }

  return <Outlet />;
}
