import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://edtechdev.github.io',
  base: '/aied',
  output: 'static',
  trailingSlash: 'never',
  integrations: [pagefind()],
});