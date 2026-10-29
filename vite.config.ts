import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, "VITE_");

  return {
    base: env.VITE_BASE_PATH || "/",

    plugins: [react(), tailwindcss()],

    resolve: {
      alias: {
        "@": path.resolve(root, "src"),
        "@shared": path.resolve(root, "shared"),
        "@assets": path.resolve(root, "attached_assets"),
      },
    },

    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: true, // Slå av igjen etter feilsøking hvis du ikke trenger source maps.
    },

    server: {
      host: true,
      port: 3000,
    },
  };
});
