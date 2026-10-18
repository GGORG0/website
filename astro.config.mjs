// @ts-check
import { defineConfig, fontProviders } from "astro/config";

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
  ],
});
