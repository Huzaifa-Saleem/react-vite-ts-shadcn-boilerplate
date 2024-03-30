import "./index.css";

// ----------------------------------------------------------------------
// import { ProgressBarStyle } from '@components/ProgressBar'; // TODO: fix this
import ScrollToTop from "@components/ScrollToTop";
import MotionLazyContainer from "@components/animate/MotionLazyContainer";
import ErrorPage from "./ErrorPage";
import { useSelector } from "@redux/store";
import Router from "./routes";
import { SnackbarProvider } from "notistack";

// ----------------------------------------------------------------------
const fallbackComponent = <ErrorPage />;
// ----------------------------------------------------------------------
function App() {
  const { hasError } = useSelector((s) => s.app);

  if (hasError) return fallbackComponent;

  return (
    <MotionLazyContainer>
      <SnackbarProvider />
      {/* <ProgressBarStyle /> */}
      <ScrollToTop />
      <Router />
    </MotionLazyContainer>
  );
}

export default App;
