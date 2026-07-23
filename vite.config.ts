import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Optimize bundle size
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'vendor': [
            'react',
            'react-dom',
            'framer-motion',
          ],
          // Split UI components
          'ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-dropdown-menu',
          ],
        },
        // Optimize chunk file names
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|gif|svg/.test(ext)) {
            return `images/[name]-[hash][extname]`;
          } else if (/woff|woff2|ttf|otf|eot/.test(ext)) {
            return `fonts/[name]-[hash][extname]`;
          } else if (ext === 'css') {
            return `css/[name]-[hash][extname]`;
          }
          return `[name]-[hash][extname]`;
        },
      },
    },
    // Optimize CSS
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
  },

  server: {
    host: true,
    port: 3000,
    strictPort: false,
  },
});
