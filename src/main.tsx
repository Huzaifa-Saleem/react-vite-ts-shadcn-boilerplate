// scroll bar
import "simplebar-react/dist/simplebar.min.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { store, persistor } from "./redux/store";

import App from "./App";

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (import.meta.env.PROD) {
  console.log("Env:", import.meta.env.MODE);
  console.log("Release:", import.meta.env.VITE_APP_RELEASE);
}

// don't use unless on dev stage / localhost
const DebugRouter = ({ children }: { children: any }) => {
  const location = useLocation();
  if (import.meta.env.NODE_ENV === "development") {
    console.log(
      `Route: ${location.pathname}${location.search}, State: ${JSON.stringify(
        location.state
      )}`
    );
  }

  return children;
};

root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="">
        {/* <DebugRouter> */}
        <App />
        {/* </DebugRouter> */}
      </BrowserRouter>
    </PersistGate>
  </ReduxProvider>
);
