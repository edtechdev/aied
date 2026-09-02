import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';
import { VitePWA } from 'vite-plugin-pwa';
import { readFileSync } from 'node:fs';

// Single source of truth for site-wide metadata (title, short name, URLs,
// editor, colors). Read here for the PWA manifest; TS components import the
// same file via src/config/siteConfig.ts.
const siteConfig = JSON.parse(readFileSync(new URL('./site.config.json', import.meta.url), 'utf-8'));

// https://astro.build/config
// `site` must be the origin (no path) — Astro appends `base` itself; the
// config's `url` is the full site root (origin + basePath).
const origin = siteConfig.url.replace(new RegExp(`${siteConfig.basePath}$`), '');
export default defineConfig({
  site: origin,
  base: siteConfig.basePath,
  output: 'static',
  trailingSlash: 'ignore',
  redirects: {
    '/use-with-ai': '/aied/ai',
  },
  integrations: [pagefind(), sitemap()],
  vite: {
    plugins: [
      VitePWA({
        // The site lives under https://edtechdev.github.io/aied/
        base: `${siteConfig.basePath}/`,
        registerType: 'autoUpdate',
        // NOTE: vite-plugin-pwa's generateSW hook does not run under Astro 7's
        // build pipeline (that's what the @vite-pwa/astro wrapper normally fixes,
        // but it only supports Astro <=5). The service worker itself (sw.js +
        // precache + runtime caching) is therefore generated in a dedicated
        // post-build step by generate-sw.mjs (wired into the `build` script).
        // This plugin still emits manifest.webmanifest, registerSW.js, and the
        // `virtual:pwa-register` module used by src/pwa.ts for registration.
        manifest: {
          name: siteConfig.name,
          short_name: siteConfig.shortName,
          description: siteConfig.description,
          lang: siteConfig.lang,
          start_url: `${siteConfig.basePath}/`,
          scope: `${siteConfig.basePath}/`,
          display: 'standalone',
          background_color: siteConfig.theme.background,
          theme_color: siteConfig.theme.primary,
          icons: [
            { src: `${siteConfig.basePath}/pwa-192x192.png`, sizes: '192x192', type: 'image/png' },
            { src: `${siteConfig.basePath}/pwa-512x512.png`, sizes: '512x512', type: 'image/png' },
            { src: `${siteConfig.basePath}/pwa-maskable-512x512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          ],
        },
      }),
    ],
  },
});
