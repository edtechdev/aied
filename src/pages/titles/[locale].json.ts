/**
 * One JSON file per locale: slug -> display title for every concept, article and
 * FAQ.
 *
 * This exists because the map used to be inlined into every page. It holds 2,035
 * entries (~315 KB), so it was ~64% of each page and duplicated ~2 GB across the
 * 6,618 pages that carried it — the largest single cost in the deploy artifact.
 * Served statically instead, it is fetched once per locale and cached by the
 * browser; the starred script merges it into its labels when it arrives.
 *
 * `src/layouts/BaseLayout.astro` still inlines the four DEFAULT_STARRED titles so
 * the pre-seeded list renders before the fetch completes.
 */
import type { APIContext } from 'astro';
import siteConfig from '../../config/siteConfig';
import { buildPageTitles } from '../../lib/pageTitles';

export async function getStaticPaths() {
  return siteConfig.i18n.locales.map((l) => ({ params: { locale: l.code } }));
}

export async function GET({ params }: APIContext) {
  const titles = await buildPageTitles(params.locale);
  return new Response(JSON.stringify(titles), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Content changes with the corpus, so let a CDN revalidate rather than
      // serving a stale title map indefinitely.
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
