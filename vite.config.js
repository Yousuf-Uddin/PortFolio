import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@projects": path.resolve("./src/assets"),
      "@comp": path.resolve("./src/Components"),
      "@pages": path.resolve("./src/Pages"),
      "@aos": path.resolve("./src/aos"),
    }
  },
  base: "/PortFolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
  }
});
