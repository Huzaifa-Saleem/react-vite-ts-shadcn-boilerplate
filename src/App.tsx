import { useEffect } from "react";

// ----------------------------------------------------------------------
import "./index.css";

// ----------------------------------------------------------------------
// import { ProgressBarStyle } from '@components/ProgressBar'; // TODO: fix this
import ScrollToTop from "@components/ScrollToTop";
import MotionLazyContainer from "@components/animate/MotionLazyContainer";
import NotistackProvider from "@components/NotistackProvider";
import ErrorPage from "./ErrorPage";
import { useSelector } from "@redux/store";
import Router from "./routes";

// ----------------------------------------------------------------------
const fallbackComponent = <ErrorPage />;
// ----------------------------------------------------------------------
function App() {
  const { hasError } = useSelector((s) => s.app);

  useEffect(() => {
    // auth.onStateChange();
  }, []);

  if (hasError) return fallbackComponent;

  return (
    <MotionLazyContainer>
      <NotistackProvider>
        {/* <ProgressBarStyle /> */}
        <ScrollToTop />
        <Router />
      </NotistackProvider>
    </MotionLazyContainer>
  );
}

export default App;
