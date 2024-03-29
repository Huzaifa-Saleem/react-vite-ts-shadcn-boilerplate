import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// NOTE: mode = development / production
// preview mode not in use atm
export default defineConfig(({ mode }) => {
  // NOTE: local envs - the ones passed to the app via direct env (starting with VITE_APP...)
  return {
    base: "/",
    plugins: [react(), viteTsconfigPaths()],
    server: {
      open: false,
      port: 3000,
    },
    build: {
      sourcemap: true,

      rollupOptions: {
        // https://github.com/vitejs/vite/issues/15012#issuecomment-1815854072
        onLog(level, log, handler) {
          if (
            log.cause &&
            (log.cause as any).message ===
              `Can't resolve original location of error.`
          ) {
            return;
          }
          handler(level, log);
        },
      },
    },
  };
});
