// generate-sw.mjs
// Post-build step: generate the service worker for the PWA with workbox-build.
// We generate sw.js explicitly (rather than relying on vite-plugin-pwa's
// generateSW hook, which does not fire under Astro 7's build pipeline) so the
// result is deterministic and reads from the final dist/ output.
import { generateSW } from 'workbox-build';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(rootDir, 'dist');

const { count, size, warnings } = await generateSW({
  globDirectory: distDir,
  globPatterns: ['**/*.{js,css,svg,png,webp,ico,xml,json,txt}'],
  globIgnores: [
    '**/pagefind/**',
    '**/llms-full.txt',
    '**/llms.txt',
    '**/*.html',
    '**/og-concept-map.png',
    '**/sw.js',
    '**/workbox-*.js',
    '**/registerSW.js',
  ],
  // App-shell navigation fallback for the SPA-ish docs layout
  navigateFallback: '/aied/',
  navigateFallbackDenylist: [/\/pagefind\//],
  // runtime caching for pages + pagefind search index
  runtimeCaching: [
    {
      urlPattern: /\/aied\//,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'aied-pages',
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
        networkTimeoutSeconds: 5,
      },
    },
    {
      urlPattern: /\/pagefind\//,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'aied-pagefind',
        expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
  ],
  // Output
  swDest: path.join(distDir, 'sw.js'),
  // Keep the precache list reasonably small but useful offline.
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  cleanupOutdatedCaches: true,
  sourcemap: false,
});

console.log(
  `Generated sw.js: precached ${count} files (${(size / 1024 / 1024).toFixed(2)} MB)`
);
if (warnings && warnings.length) {
  console.warn('workbox warnings:', warnings);
}
