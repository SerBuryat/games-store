import { defineConfig } from 'astro/config';
import tunnel from "astro-tunnel";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tunnel(), mdx(), react()]
});