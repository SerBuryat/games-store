import { defineConfig } from 'astro/config';
import tunnel from "astro-tunnel";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tunnel(),
    mdx(),
    react(),
    tailwind({
      nesting: true,
    })
  ]
});