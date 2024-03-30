import { Suspense, lazy, ElementType } from "react";
import { Routes, Route } from "react-router-dom";
//
import PATHS from "@routes/paths";
import LoadingScreen from "@components/LoadingScreen";

// ----------------------------------------------------------------------
import AuthGuard from "@/guards/AuthGuard";
import Register from "@pages/auth/Register";

// ----------------------------------------------------------------------
const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------
const Dashboard = Loadable(lazy(() => import("@pages/Dashboard")));
const Login = Loadable(lazy(() => import("@pages/auth/Login")));

// ----------------------------------------------------------------------
export default function Router() {
  return (
    <Routes>
      {/* safety exit route */}
      {/* <Route path={PATHS.logout} element={<Logout />} /> */}

      {/* PUBLIC routes */}
      <Route path={PATHS.login} element={<Login />} />
      <Route path={PATHS.register} element={<Register />} />
      {/* <Route element={<GuestGuard />}>
        <Route path={PATHS.resetPassword} element={<ResetPassword />} />
        <Route path={PATHS.newPassword} element={<NewPassword />} />
        <Route path={PATHS.verify} element={<VerifyCode />} />
      </Route> */}

      {/* AUTH routes */}

      <Route path={PATHS.root} element={<AuthGuard />}>
        <Route path={PATHS.root} element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
