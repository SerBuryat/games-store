import { defineConfig } from 'astro/config';

import tunnel from "astro-tunnel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tunnel(), icon()]
});