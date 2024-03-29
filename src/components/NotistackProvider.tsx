import { ReactNode, useRef } from "react";

import { IconifyIcon } from "@iconify/react";
import {
  SnackbarProvider,
  SnackbarKey,
  MaterialDesignContent,
} from "notistack";

import { IconButtonAnimate } from "./animate";

// ----------------------------------------------------------------------
type Props = {
  children: ReactNode;
};

export default function NotistackProvider({ children }: Props) {
  const notistackRef = useRef<any>(null);
  const onClose = (key: SnackbarKey) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <>
      <SnackbarProvider
        ref={notistackRef}
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={3500}
        variant="success" // Set default variant
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        iconVariant={{
          info: <SnackbarIcon icon={"eva:info-fill"} color="info" />,
          success: (
            <SnackbarIcon
              icon={"eva:checkmark-circle-2-fill"}
              color="success"
            />
          ),
          warning: (
            <SnackbarIcon icon={"eva:alert-triangle-fill"} color="warning" />
          ),
          error: <SnackbarIcon icon={"eva:alert-circle-fill"} color="error" />,
        }}
        Components={{
          default: StyledMaterialDesignContent,
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
          info: StyledMaterialDesignContent,
          warning: StyledMaterialDesignContent,
        }}
        // With close as default
        action={(key) => (
          <IconButtonAnimate onClick={onClose(key)} style={{ padding: "0.5" }}>
            {/* <Iconify icon={"eva:close-fill"} /> */}
          </IconButtonAnimate>
        )}
      >
        {children}
      </SnackbarProvider>
    </>
  );
}

// ----------------------------------------------------------------------
type SnackbarIconProps = {
  icon: IconifyIcon | string;
  color: "info" | "success" | "warning" | "error";
};

function SnackbarIcon({ icon, color }: SnackbarIconProps) {
  return (
    <span
      style={{
        marginRight: 1.5,
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        justifyContent: "center",
        color: `${color}.main`,
      }}
    >
      {/* <Iconify icon={icon} /> */}
    </span>
  );
}

// ----------------------------------------------------------------------
type MaterialDesignContent = {
  sx?: any;
};
const StyledMaterialDesignContent = (props: MaterialDesignContent) => {
  return {
    color: "inherit",
    backgroundColor: "inherit",
    padding: "0.75rem 1.5rem",
    borderRadius: 1.5,
    boxShadow: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ...props.sx,
  };
};
