import { defineConfig } from "vite";

export default defineConfig({
  base: "./personal-website",
  build: {
    minify: "terser",
  },
});
