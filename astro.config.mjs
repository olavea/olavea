import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// contentCollectionCache: true,
// https://astro.build/config
export default defineConfig({
  site: "https://hal4.netlify.app/",
  integrations: [tailwind(), sitemap()],
  experimental: {
    contentLayer: true,
  },
});
