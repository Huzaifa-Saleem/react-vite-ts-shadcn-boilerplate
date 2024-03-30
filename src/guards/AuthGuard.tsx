import { useState, ReactNode } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

// import useAuth from '@hooks/useAuth';
import Login from "@pages/auth/Login";
import LoadingScreen from "@components/LoadingScreen";
import useAuth from "@hooks/useAuth";

// ----------------------------------------------------------------------
type AuthGuardProps = {
  children?: ReactNode;
};

// ----------------------------------------------------------------------
export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isInitialized } = useAuth();

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

  return children ? <>{children}</> : <Outlet />;
}
