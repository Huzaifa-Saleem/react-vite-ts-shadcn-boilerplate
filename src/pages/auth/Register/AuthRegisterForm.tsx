import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
// ----------------------------------------------
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import google from "@/assets/icons/google.svg";
import PATHS from "@routes/paths";
import { RegisterData } from "@typedefs/auth";

// ----------------------------------------------
type AuthFormProps = {
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleGoogleSignIn: () => void;
  isLoading: boolean;
  setData: React.Dispatch<React.SetStateAction<RegisterData>>;
  data: RegisterData;
  error: string;
};

// ----------------------------------------------
export default function AuthRegisterForm({
  handleOnSubmit,
  isLoading,
  data,
  handleGoogleSignIn,
  setData,
  error,
}: AuthFormProps) {
  return (
    <Card className="w-[400px] p-5">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-center ">
          Sign Up
        </CardTitle>
        <div className="flex items-center justify-center text-center text-md text-slate-500">
          <p className="max-w-[200px]">
            Sign up to access your account and manage your Campaigns
          </p>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <form onSubmit={handleOnSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="Max"
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <Label htmlFor="email">Email</Label>
            <Input
              className=" py-5"
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              className=" py-5"
              id="password"
              type="password"
              icon="password"
              value={data.password}
              placeholder="Password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Link
              className="text-slate-500 text-sm underline pb-3 text-end cursor-pointer"
              to={PATHS.resetPassword}
            >
              Forgot password
            </Link>
          </div>{" "}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <Button isLoading={isLoading} type="submit" className="w-full py-5">
            Sign Up
          </Button>
          <Button
            isLoading={isLoading}
            variant="outline"
            className="w-full py-5"
            onClick={handleGoogleSignIn}
          >
            <span>
              <ReactSVG src={google} className=" mr-2" />
            </span>
            Sign up with Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
