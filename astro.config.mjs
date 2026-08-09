import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://edtechdev.github.io',
  base: '/aied',
  output: 'static',
  trailingSlash: 'never',
});