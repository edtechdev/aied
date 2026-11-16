#!/usr/bin/env node
/**
 * Build the Pagefind index in its OWN process, after `astro build`.
 *
 * The astro-pagefind integration runs `createIndex().addDirectory().writeFiles()`
 * inside the `astro:build:done` hook, i.e. in the same Node process that just
 * rendered every page. At this site's size (~13.4k pages) the render peaks near
 * 7.5 GB and the indexer near 5 GB, and the two peaks add up instead of
 * following one another: the process is OOM-killed after "Pagefind indexed N
 * pages", leaving `dist/` without an index (and, because `generate-sw.mjs` runs
 * next in the chain, without a service worker either).
 *
 * Running the same three calls here means the OS reclaims the render heap first,
 * so the peak is max(render, index) instead of their sum. The integration is
 * still registered for `astro dev`, where it only serves the existing index.
 *
 * Usage: node tooling/scripts/pagefind-index.mjs [--site dist]
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createIndex } from 'pagefind';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const siteArg = process.argv.indexOf('--site');
const outDir = path.resolve(root, siteArg !== -1 ? process.argv[siteArg + 1] : 'dist');

const { index, errors: createErrors } = await createIndex();
if (!index) {
  console.error('pagefind: could not create an index');
  for (const error of createErrors) console.error(error);
  process.exit(1);
}
const { page_count, errors: addErrors } = await index.addDirectory({ path: outDir });
if (addErrors.length) {
  console.error('pagefind: indexing failed');
  for (const error of addErrors.slice(0, 10)) console.error(error);
  process.exit(1);
}
console.log(`pagefind: indexed ${page_count} pages`);
const { outputPath, errors: writeErrors } = await index.writeFiles({
  outputPath: path.join(outDir, 'pagefind'),
});
if (writeErrors.length) {
  console.error('pagefind: writing the index failed');
  for (const error of writeErrors.slice(0, 10)) console.error(error);
  process.exit(1);
}
console.log(`pagefind: wrote index to ${path.relative(root, outputPath)}`);
