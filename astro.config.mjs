import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';
import { VitePWA } from 'vite-plugin-pwa';

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
  vite: {
    plugins: [
      VitePWA({
        // The site lives under https://edtechdev.github.io/aied/
        base: '/aied/',
        registerType: 'autoUpdate',
        // NOTE: vite-plugin-pwa's generateSW hook does not run under Astro 7's
        // build pipeline (that's what the @vite-pwa/astro wrapper normally fixes,
        // but it only supports Astro <=5). The service worker itself (sw.js +
        // precache + runtime caching) is therefore generated in a dedicated
        // post-build step by generate-sw.mjs (wired into the `build` script).
        // This plugin still emits manifest.webmanifest, registerSW.js, and the
        // `virtual:pwa-register` module used by src/pwa.ts for registration.
        manifest: {
          name: 'AI Ed Wiki',
          short_name: 'AI Ed Wiki',
          description: 'A knowledge base on artificial intelligence in education.',
          lang: 'en',
          start_url: '/aied/',
          scope: '/aied/',
          display: 'standalone',
          background_color: '#0d1418',
          theme_color: '#15212b',
          icons: [
            { src: '/aied/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/aied/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
            { src: '/aied/pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          ],
        },
      }),
    ],
  },
});
