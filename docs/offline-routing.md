# Offline routing and navigation fallback

Date: 2026-11-06

## Required behavior

Every navigation keeps the identity of the requested URL. The service worker
fetches the requested page when online. When the network fails it serves that
exact URL from the HTML runtime cache if present; otherwise it serves the
standalone `/aied/offline/` page. It never substitutes the home page for an
article, concept, FAQ, resource, or translated page.

## Worker generation

`generate-sw.mjs` still runs as the post-build orchestrator and uses
`workbox-build`'s `generateSW` (Workbox 7.4.1). The app-shell
`navigateFallback` was removed; `generateSW` is sufficient because Workbox 7
supports route predicate functions and `options.precacheFallback`.

The precache contains only `offline/index.html` (content-hashed revision).
The build fails if that file is missing or if precache exceeds 1 MiB.

## Route order

Workbox uses the first matching route.

1. Same-origin PDF/EPUB and `llms*.txt` downloads: `NetworkOnly`.
2. Pagefind:
   - `pagefind/fragment/`, `pagefind/index/`, `pagefind/filter/`: `CacheFirst`
     (`aied-search-v1`, 200 entries / 30 days).
   - other `pagefind/*` bootstrap and manifest files: `NetworkFirst`
     (`aied-search-v1`, 5 s timeout).
3. Static assets:
   - `/_astro/` content-hashed assets: `CacheFirst` (`aied-static-v1`).
   - `/fonts/`, `/images/`, `/icons/`: `StaleWhileRevalidate`
     (`aied-static-v1`).
4. Same-origin HTML navigations (`request.mode === 'navigate'`) inside the
   site base: `NetworkFirst` (`aied-html-v2`, 200 entries / 30 days, 5 s
   timeout, 200 responses only) with `precacheFallback` to
   `/aied/offline/index.html`.
5. Everything else: no route, no HTML substitution.

Query strings are part of the cache key; `q` and filter parameters are not
stripped. Fragments stay client-side. Cross-origin URLs and `/aied-other/`
paths are rejected by the predicates.

## Cache migration

On activation the worker deletes only the two obsolete app caches from the
old policy: `aied-pages` and `aied-pagefind`. It does not touch other caches
on `edtechdev.github.io`, `localStorage`, or starred pages.

Cache names:

- `aied-html-v2` — visited HTML documents
- `aied-static-v1` — hashed build assets and unhashed local assets
- `aied-search-v1` — Pagefind bootstrap and fragments

## Offline page

`src/pages/offline.astro` is self-contained (inline CSS/JS, system font, no
images or Pagefind), `noindex`, excluded from the sitemap, and
`data-pagefind-ignore`. Retry reloads the attempted location, not the
`/offline/` route. One English fallback keeps the original localized URL in
the address bar.

## Known limitations

- A first-ever visit while offline cannot be served by a worker that was
  never installed.
- Browser storage eviction can remove previously visited pages.
- Offline search only covers Pagefind fragments already cached; a new query
  can require uncached fragments and will report a search error rather than
  zero results.
- `NetworkFirst`'s 5 s timeout can return a cached page or the fallback before
  a slow network request completes; it is not a guaranteed 5 s abort.
- Old tabs may hold older hashed assets after a deploy; a reload/reconnect is
  the recovery path.

## Validation (2026-11-06)

Local production build served at `http://127.0.0.1:4321/aied/` (secure
localhost), Chromium, service worker active and controlling the page.

Passed:

- Direct online article/concept navigation kept the requested page (Kestin H1,
  Academic Integrity H1), not the home shell.
- Visited article reloaded offline from `aied-html-v2` with the same H1.
- Unvisited concept offline showed the dedicated fallback with the attempted
  URL intact; the fallback was not written into that URL's cache entry.
- Retry after the server returned loaded the requested concept and cached it.
- Online missing URL returned the site 404 (`Page Not Found`), not the offline
  page, and was not cached.
- With the server down, Pagefind, CSS, and PDF fetches rejected with
  `TypeError: Failed to fetch`; no HTML substitution.
- Old-cache migration: seeded `aied-pages`, `aied-pagefind`, and an unrelated
  cache; activation removed the two app caches and kept the unrelated one.
- Generated worker: 6 routes in the intended order; one precache entry
  (`offline/index.html`, 2.0 KiB); fallback plugin points at
  `/aied/offline/index.html`.

Not run: two-build update with an old tab open; Firefox smoke test; real mobile
device. These remain release checks, not claims.

## Test matrix

Automated predicate tests: `node --test tests/service-worker/routes.test.mjs`
(cross-origin rejection, `/aied-other/`, downloads, Pagefind split, hashed vs
unhashed assets, navigation mode/base boundary).

Browser production checks still required with the generated worker:

- controlled direct navigation to article/concept/FAQ/resource/translated URL
- same URL offline after a visit; unvisited URL shows fallback with URL intact
- Retry after reconnect; 404/5xx not cached as article HTML
- Pagefind/CSS/JS/font failures never return HTML
- PDF/EPUB/llms downloads bypass the worker cache
- two-build update with an existing worker and old tabs
