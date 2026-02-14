// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mide73924.github.io/Data-Structures/",
  // base: '/micheldeo/',  // <--- this ensures all built assets use the correct subpath

  vite: {
    plugins: [tailwindcss()],
  },
})