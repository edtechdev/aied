/**
 * slug -> display title for every concept, article and FAQ, in one locale.
 *
 * This used to be inlined into every page as a `data-titles` attribute on the
 * starred-pages component. The map holds 2,035 entries and is ~315 KB, so it made
 * up about 64% of every page and duplicated ~2 GB across the 6,618 pages that
 * carried it — most of the deploy artifact. It is now served as one JSON file per
 * locale (see src/pages/titles/[locale].json.ts) and fetched by the starred
 * script, which is client-side already (the list is built from localStorage).
 *
 * Kept here rather than in the route so the layout can still render the
 * pre-seeded starred titles inline: the four DEFAULT_STARRED entries are needed
 * on first paint, before the fetch resolves.
 */
import { getCollection } from 'astro:content';
import { localizedTitle, localizedTitles } from '../i18n/localizedTitles';

export async function buildPageTitles(
  locale: string | undefined,
): Promise<Record<string, string>> {
  const [concepts, articles, faqs, localized] = await Promise.all([
    getCollection('concepts'),
    getCollection('articles'),
    getCollection('faqs'),
    localizedTitles(locale),
  ]);

  const titles: Record<string, string> = {};
  for (const c of concepts) {
    const slug = c.id.replace(/\.md$/, '');
    titles[slug] = localizedTitle(localized, 'concepts', slug, c.data.title);
  }
  for (const a of articles) {
    const slug = a.id.replace(/\.md$/, '');
    titles[slug] = localizedTitle(localized, 'articles', slug, a.data.title);
  }
  for (const f of faqs) {
    const slug = f.id.replace(/\.md$/, '');
    titles[slug] = localizedTitle(localized, 'faqs', slug, f.data.title);
  }
  return titles;
}
