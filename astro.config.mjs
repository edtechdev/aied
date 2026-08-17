import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://edtechdev.github.io',
  base: '/aied',
  output: 'static',
  trailingSlash: 'never',
  redirects: {
    '/use-with-ai': '/aied/ai',
  },
  integrations: [pagefind(), sitemap()],
});