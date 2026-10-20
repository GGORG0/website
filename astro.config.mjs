// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Recursive",
      cssVariable: "--font-recursive",
      weights: ["100 1000"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Noto Color Emoji",
      cssVariable: "--font-emoji",
      weights: [400],
      styles: ["normal"],
      subsets: ["emoji"],
    },
  ],

  integrations: [icon()],
});
