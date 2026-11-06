// generate-sw.mjs
// Post-build step: generate the service worker for the PWA with workbox-build.
// We generate sw.js explicitly (rather than relying on vite-plugin-pwa's
// generateSW hook, which does not fire under Astro 7's build pipeline) so the
// result is deterministic and reads from the final dist/ output.
//
// Routing contract (offline routing plan, 2026-11-06):
// - no SPA/app-shell navigateFallback: every navigation keeps its own URL
// - ordered routes: downloads -> Pagefind -> static assets -> HTML navigations
// - HTML navigations are NetworkFirst and fall back to a dedicated offline page
//   only when the network fails and that exact URL is not cached
// - every non-document request type fails in its own path, never as HTML
import { generateSW } from 'workbox-build';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { appendFileSync, existsSync, readFileSync, statSync } from 'node:fs';
import {
  isDownloadRoute,
  isHashedAsset,
  isHtmlNavigation,
  isLocalAsset,
  isPagefindFragment,
  isPagefindRoute,
} from './src/lib/sw/routes.mjs';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(rootDir, 'dist');
const siteConfig = JSON.parse(readFileSync(path.join(rootDir, 'site.config.json'), 'utf8'));
const basePath = siteConfig.basePath.replace(/\/$/, '');

// The standalone fallback is the only HTML we precache. It must exist:
// silently generating a worker that promises a fallback it cannot serve is
// worse than failing the build.
const offlinePath = path.join(distDir, 'offline', 'index.html');
if (!existsSync(offlinePath)) {
  throw new Error(`offline fallback missing: ${offlinePath} (build src/pages/offline.astro first)`);
}
const offlineRevision = createHash('sha1').update(readFileSync(offlinePath)).digest('hex');
const offlineBytes = statSync(offlinePath).size;
const offlineUrl = `${basePath}/offline/index.html`;

// Base-path helper used inside serialized route predicates. Workbox receives
// urlPattern.toString(), so these functions must not close over build-time
// variables; derive the base from self.registration.scope at runtime.

const { count, size, warnings } = await generateSW({
  globDirectory: distDir,
  // Deliberately tiny install set: the offline fallback only. Page HTML,
  // translations, exports, sitemaps, and the search index are cached on
  // demand by the runtime routes below.
  globPatterns: [],
  additionalManifestEntries: [{ url: 'offline/index.html', revision: offlineRevision }],
  // No navigateFallback: that would turn every navigation into the cached
  // app shell instead of fetching the requested article.
  clientsClaim: true,
  cleanupOutdatedCaches: true,
  maximumFileSizeToCacheInBytes: 1024 * 1024,
  runtimeCaching: [
    // 1. Same-origin bulk downloads: never cache, never serve HTML.
    {
      urlPattern: isDownloadRoute,
      handler: 'NetworkOnly',
      method: 'GET',
    },
    // 2a. Pagefind immutable result/index payloads: content-hashed names,
    // safe to serve cache-first. A miss fails in the search path; it never
    // reaches the HTML fallback.
    {
      urlPattern: isPagefindFragment,
      handler: 'CacheFirst',
      method: 'GET',
      options: {
        cacheName: 'aied-search-v1',
        cacheableResponse: { statuses: [200] },
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // 2b. Pagefind bootstrap/manifest/CSS/JS: unversioned entry points use
    // NetworkFirst so a deploy is picked up; hashed fragments are above.
    {
      urlPattern: isPagefindRoute,
      handler: 'NetworkFirst',
      method: 'GET',
      options: {
        cacheName: 'aied-search-v1',
        cacheableResponse: { statuses: [200] },
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
        networkTimeoutSeconds: 5,
      },
    },
    // 3a. Astro's content-hashed build assets are immutable.
    {
      urlPattern: isHashedAsset,
      handler: 'CacheFirst',
      method: 'GET',
      options: {
        cacheName: 'aied-static-v1',
        cacheableResponse: { statuses: [200] },
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // 3b. Unhashed local assets (fonts, images, icons): revalidate in the
    // background rather than pinning a stale copy for a month.
    {
      urlPattern: isLocalAsset,
      handler: 'StaleWhileRevalidate',
      method: 'GET',
      options: {
        cacheName: 'aied-static-v1',
        cacheableResponse: { statuses: [200] },
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // 4. Same-origin HTML navigations only. NetworkFirst returns the actual
    // requested page; the dedicated fallback is used only when the network
    // fails and that exact URL is not cached. 404/410/5xx are passed through
    // and never cached.
    {
      urlPattern: isHtmlNavigation,
      handler: 'NetworkFirst',
      method: 'GET',
      options: {
        cacheName: 'aied-html-v2',
        cacheableResponse: { statuses: [200] },
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
        networkTimeoutSeconds: 5,
        precacheFallback: { fallbackURL: offlineUrl },
      },
    },
    // 5. Everything else: no route. Do not turn unrelated failures into HTML.
  ],
  swDest: path.join(distDir, 'sw.js'),
  sourcemap: false,
});

// Remove only caches this app owned before the repaired routing policy.
// Never touch other projects hosted on the same origin.
appendFileSync(
  path.join(distDir, 'sw.js'),
  `\nself.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const obsolete = ['aied-pages', 'aied-pagefind'];
    const names = await caches.keys();
    await Promise.all(names.filter((name) => obsolete.includes(name)).map((name) => caches.delete(name)));
  })());
});
`,
);

if (offlineBytes > 1024 * 1024) {
  throw new Error(`precache is ${(offlineBytes / 1024).toFixed(0)} KiB, over the 1 MiB budget`);
}
console.log(
  `Generated sw.js: precached ${count} files (${(offlineBytes / 1024).toFixed(1)} KiB), ` +
    `fallback ${offlineUrl}, base ${basePath}`,
);
if (warnings && warnings.length) {
  console.warn('workbox warnings:', warnings);
}
