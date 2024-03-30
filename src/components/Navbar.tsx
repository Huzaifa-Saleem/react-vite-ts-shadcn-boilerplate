import useAuth from "@hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Gift, LogOut, Receipt, Users } from "lucide-react";
// import { UpdateButton } from "../upgradeButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <nav className="w-full flex items-ceneter justify-between px-10 py-3 bg-primary">
      <Link to="/">
        <img src="assets/images/white_logo.png" alt="logo" className="h-10" />
      </Link>
      <div className="flex items-center space-x-5 text-white/90">
        <p className="text-nowrap text-sm">Free trial</p>

        {/* -------------------------------------- */}
        {/* {user?.id === user?.company?.company_owner && <UpdateButton />} */}
        {/* -------------------------------------- */}

        <DropdownMenu>
          <DropdownMenuTrigger className="w-full outline-none border-none focus:outline-none ">
            <img
              src={
                user?.photoURL
                  ? user.photoURL
                  : "assets/images/dummy_profile.png"
              }
              alt="logo"
              height={36}
              width={36}
              className="rounded-full cursor-pointer border border-white/30 p-[1px]"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuItem>
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "assets/images/dummy_profile.png"
                }
                alt="logo"
                height={16}
                width={16}
                className="mr-3 rounded-full cursor-pointer"
              />{" "}
              {user?.firstname + " " + user?.lastname || ""}
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuLabel className="text-black/20">
              Settings
            </DropdownMenuLabel>

            <Link to="/settings">
              <DropdownMenuItem>
                <Gift size={16} className="mr-2 text-primary" />
                What&apos;s New
              </DropdownMenuItem>
            </Link>
            <Link to="/settings">
              <DropdownMenuItem>
                <Users size={16} className="mr-2 text-primary" />
                Teammates
              </DropdownMenuItem>
            </Link>
            <Link to="/settings">
              <DropdownMenuItem>
                <Receipt size={16} className="mr-2 text-primary" />
                Billing
              </DropdownMenuItem>{" "}
            </Link>

            <DropdownMenuItem onClick={logout}>
              <LogOut size={16} className="mr-2 text-primary" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
