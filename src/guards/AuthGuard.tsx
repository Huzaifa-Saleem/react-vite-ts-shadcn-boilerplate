import { useState } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

// import useAuth from '@hooks/useAuth';
import Login from "@pages/auth/Login";
import LoadingScreen from "@components/LoadingScreen";

// ----------------------------------------------------------------------
export default function AuthGuard() {
  //   const { isAuthenticated, isInitialized } = useAuth();

  // Hardcoded for demo // TODO: Replace with your own authentication
  const isAuthenticated = false;
  const isInitialized = true;

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <Outlet />;
}
