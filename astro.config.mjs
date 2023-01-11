import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

import tokyoNight from "./tokyo-night.json" assert { type: "json" };
import tokyoNightStorm from "./tokyo-night-storm.json" assert { type: "json" };

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), alpinejs()],
  markdown: {
    shikiConfig: { theme: tokyoNightStorm },
  },
});
