import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff, LucideIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: "password" | string;
  iconDisable?: boolean;
  prefix?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, iconDisable, type, ...props }, ref) => {
    const [inputType, setInputType] = React.useState(false);
    const [iconState, setIconState] = React.useState(false);

    const toggleInputState = () => {
      setInputType((prevState) => !prevState);
      setIconState((prevState) => !prevState);
    };
    return (
      <div className="relative">
        {icon === "password" && (
          <button
            type="button"
            className="absolute right-3 top-[5px]"
            onClick={toggleInputState}
            disabled={iconDisable}
          >
            {iconState ? (
              <Eye className="w-4 text-gray-400" />
            ) : (
              <EyeOff className="w-4 text-gray-400" />
            )}
          </button>
        )}
        <input
          type={inputType ? "text" : type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
