import { m } from "framer-motion";
import React, { forwardRef } from "react";

// ----------------------------------------------------------------------
type IconButtonProps = React.ComponentPropsWithRef<"button">;

const IconButtonAnimate = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...other }, ref) => (
    <AnimateWrap size="medium">
      {/* TODO */}
      {/* <IconButton size={size} ref={ref} {...other}> */}
      {children}
      {/* </IconButton> */}
    </AnimateWrap>
  )
);

export default IconButtonAnimate;

// ----------------------------------------------------------------------

type AnimateWrapProp = {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
};

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

function AnimateWrap({ size, children }: AnimateWrapProp) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <m.div
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
    >
      {children}
    </m.div>
  );
}
