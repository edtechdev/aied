// Route predicates for the generated service worker.
//
// These functions are serialized with Function.prototype.toString() by
// workbox-build, so each one must be fully self-contained. They may use
// `self` (the ServiceWorkerGlobalScope) but must not call module-scope
// helpers or close over build-time variables. The base path is derived from
// self.registration.scope at runtime.

/** Same-origin PDF/EPUB and llms*.txt downloads: never cached, never HTML. */
export function isDownloadRoute({ url }) {
  const base = new URL(self.registration.scope).pathname.replace(/\/$/, '');
  if (url.origin !== self.location.origin) return false;
  if (url.pathname !== base && !url.pathname.startsWith(base + '/')) return false;
  return /\.(pdf|epub)$/i.test(url.pathname) || /\/llms[^/]*\.txt$/i.test(url.pathname);
}

/** Pagefind result payloads with content-hashed filenames. */
export function isPagefindFragment({ url }) {
  const base = new URL(self.registration.scope).pathname.replace(/\/$/, '');
  if (url.origin !== self.location.origin) return false;
  return /\/pagefind\/(fragment|index|filter)\//.test(url.pathname.slice(base.length));
}

/** Pagefind bootstrap, manifest, CSS, and JS (including unversioned entries). */
export function isPagefindRoute({ url }) {
  const base = new URL(self.registration.scope).pathname.replace(/\/$/, '');
  if (url.origin !== self.location.origin) return false;
  return url.pathname.startsWith(base + '/pagefind/');
}

/** Astro's content-hashed immutable build assets. */
export function isHashedAsset({ url }) {
  const base = new URL(self.registration.scope).pathname.replace(/\/$/, '');
  if (url.origin !== self.location.origin) return false;
  return url.pathname.startsWith(base + '/_astro/');
}

/** Unhashed local fonts, images, and icons. */
export function isLocalAsset({ url }) {
  const base = new URL(self.registration.scope).pathname.replace(/\/$/, '');
  if (url.origin !== self.location.origin) return false;
  return /^\/(fonts|images|icons)\//.test(url.pathname.slice(base.length));
}

/** Same-origin HTML navigations only; assets and downloads never match. */
export function isHtmlNavigation({ url, request }) {
  if (request.mode !== 'navigate') return false;
  if (url.origin !== self.location.origin) return false;
  const base = new URL(self.registration.scope).pathname.replace(/\/$/, '');
  return url.pathname === base || url.pathname.startsWith(base + '/');
}
