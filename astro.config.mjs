import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import solidJs from "@astrojs/solid-js"

export default defineConfig({
  site: "https://daimond113.github.io",
  integrations: [
    tailwind(),
    sitemap(),
    prefetch({
      selector: "a",
    }),
    solidJs(),
  ],
  vite: {
    resolve: {
      alias: {
        three: "three/src/Three.js",
      },
    },
  },
})
