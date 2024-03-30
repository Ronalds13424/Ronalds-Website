import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()] as (UserConfig["plugins"])[],
});
