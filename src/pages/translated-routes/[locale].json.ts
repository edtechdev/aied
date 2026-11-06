/**
 * One JSON file per locale: the site-relative routes that have a translated
 * content page in this locale.
 *
 * StarredPages needs this list to send a saved star to its localized URL. The
 * list used to be embedded in every page's `data-translated` attribute, which
 * was ~8 KB per page (≈79 MB across the corpus). It is small once per locale and
 * fetched only by the starred panel, after first paint.
 */
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import siteConfig from '../../config/siteConfig';
import { translationMapFrom } from '../../i18n/config';

export async function getStaticPaths() {
  return siteConfig.i18n.locales.map((l) => ({ params: { locale: l.code } }));
}

export async function GET({ params }: APIContext) {
  const translations = await getCollection('translations');
  const map = translationMapFrom(translations as any);
  const routes = map[params.locale ?? ''] ?? [];
  return new Response(JSON.stringify(routes), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
