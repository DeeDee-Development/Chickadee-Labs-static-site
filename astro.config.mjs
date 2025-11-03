import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://chickadee.family',
  // Allow both /foo and /foo/ to work without redirects
  trailingSlash: 'ignore',
});
