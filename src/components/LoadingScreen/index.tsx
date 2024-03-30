import { LoaderCircle } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <LoaderCircle className="h-10 w-10 text-primary animate-spin " />
    </div>
  );
};

export default LoadingScreen;
