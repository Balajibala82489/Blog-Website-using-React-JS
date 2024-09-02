import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base="/Blog-Website-React-JS/"
  server: {
    port: 5001,
  },
});
