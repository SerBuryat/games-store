import { defineConfig } from 'astro/config';
import tunnel from "astro-tunnel";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tunnel(), mdx()]
});