import { matchPath } from "react-router-dom";

// ----------------------------------------------------------------------
const PATHS = {
  root: "/",

  // auth
  login: "/login",
  validate: "/auth/validate",
  logout: "/logout",
  register: "/register",
  verify: "/verify",
  resetPassword: "/reset-password",
  newPassword: "/new-password",
  confirmEmail: "/confirm-email/:tokenId",

  // general
  account: "/account",
  permissionDenied: "/permission-denied",
  p404: "/404",

  // org protected
};

export default PATHS;

// ----------------------------------------------------------------------
export function getPath(
  baseRoute: string,
  dataMap: { [key: string]: string | undefined | null }
): string {
  let route = baseRoute;

  Object.keys(dataMap).forEach((key) => {
    const value = dataMap[key];
    if (value) {
      route = route.replace(`:${key}`, value);
    }
  });

  return route;
}

// ----------------------------------------------------------------------
export function isExternalLink(path: string) {
  return path.includes("http");
}

// ----------------------------------------------------------------------
export function getActive(path: string, pathname: string) {
  const isMatch = !!matchPath({ path, end: false }, pathname);
  return isMatch;
}
