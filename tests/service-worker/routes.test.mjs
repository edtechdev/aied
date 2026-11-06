import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isDownloadRoute,
  isHashedAsset,
  isHtmlNavigation,
  isLocalAsset,
  isPagefindFragment,
  isPagefindRoute,
} from '../../src/lib/sw/routes.mjs';

const ORIGIN = 'https://edtechdev.github.io';
globalThis.self = {
  registration: { scope: `${ORIGIN}/aied/` },
  location: { origin: ORIGIN },
};

const u = (path, origin = ORIGIN) => ({ url: new URL(path, origin), request: { mode: 'navigate' } });

test('download route matches PDF, EPUB, and llms variants only', () => {
  assert.equal(isDownloadRoute(u('/aied/export/aied.pdf?x=1')), true);
  assert.equal(isDownloadRoute(u('/aied/export/aied.epub')), true);
  assert.equal(isDownloadRoute(u('/aied/llms-full.txt?q=1')), true);
  assert.equal(isDownloadRoute(u('/aied/llms.es-concepts.txt')), true);
  assert.equal(isDownloadRoute(u('/aied/articles/foo/')), false);
  assert.equal(isDownloadRoute(u('/aied-other/aied.pdf')), false);
  assert.equal(isDownloadRoute(u('/elsewhere/aied.pdf')), false);
});

test('Pagefind fragments and bootstrap are distinguished', () => {
  assert.equal(isPagefindFragment(u('/aied/pagefind/fragment/en_abc.pf_fragment')), true);
  assert.equal(isPagefindFragment(u('/aied/pagefind/index/en_abc.pf_index')), true);
  assert.equal(isPagefindFragment(u('/aied/pagefind/filter/en_abc.pf_filter')), true);
  assert.equal(isPagefindFragment(u('/aied/pagefind/pagefind.js')), false);
  assert.equal(isPagefindRoute(u('/aied/pagefind/pagefind.js')), true);
  assert.equal(isPagefindRoute(u('/aied/pagefind/pagefind-entry.json')), true);
  assert.equal(isPagefindRoute(u('/aied-other/pagefind/pagefind.js')), false);
});

test('static asset routes reject other origins and out-of-base paths', () => {
  assert.equal(isHashedAsset(u('/aied/_astro/app.abc123.js')), true);
  assert.equal(isHashedAsset(u('/aied-other/_astro/app.js')), false);
  assert.equal(isLocalAsset(u('/aied/fonts/site.woff2')), true);
  assert.equal(isLocalAsset(u('/aied/images/logo.png')), true);
  assert.equal(isLocalAsset(u('/aied/_astro/app.js')), false);
  assert.equal(isLocalAsset(u('/fonts/site.woff2', 'https://evil.example')), false);
});

test('HTML navigation route requires navigate mode, same origin, and base boundary', () => {
  assert.equal(isHtmlNavigation(u('/aied/articles/foo/')), true);
  assert.equal(isHtmlNavigation(u('/aied/')), true);
  assert.equal(isHtmlNavigation(u('/aied')), true);
  assert.equal(isHtmlNavigation(u('/aied-other/')), false);
  assert.equal(isHtmlNavigation(u('/aied/', 'https://evil.example')), false);
  assert.equal(
    isHtmlNavigation({ url: new URL('/aied/articles/foo/', ORIGIN), request: { mode: 'no-cors' } }),
    false,
  );
});
