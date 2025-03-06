import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// contentCollectionCache: true,
// https://astro.build/config
export default defineConfig({
  site: "https://olavea.com/",
  integrations: [tailwind(), sitemap()],

  experimental: {
    contentLayer: true,
  },

  output: "hybrid",
  adapter: netlify(),
});
