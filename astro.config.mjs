import { defineConfig } from 'astro/config';
import tunnel from "astro-tunnel";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tunnel(), mdx(), react(), tailwind({
    nesting: true
  })],
  adapter: node({
    mode: "standalone"
  })
});