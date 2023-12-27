import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@header": path.resolve(
        __dirname,
        "./src/components/screens/afisha/Header/"
      ),
    },
  },
});
