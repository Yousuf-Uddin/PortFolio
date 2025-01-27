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
      "@aos": path.resolve("./src/aos/dist"),
    }
  },
  base: "/PortFolio/",
  build: {
    rollupOptions: {
      external: [
        "react", // ignore react stuff
        "react-dom",
      ],
    }
  },
})
