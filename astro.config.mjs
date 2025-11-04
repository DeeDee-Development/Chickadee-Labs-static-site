import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://chickadee.family',
  // Allow both /foo and /foo/ to work without redirects
  trailingSlash: 'ignore',
  integrations: [
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: [],
        },
      ],
      sitemap: true, // Automatically adds sitemap reference
    }),
  ],
});
