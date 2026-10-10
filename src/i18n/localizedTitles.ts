/**
 * Localized titles for content-collection pages.
 *
 * The `translations` collection holds one entry per translated page, keyed
 * `<locale>/<collection>/<slug>.md`. A list that enumerates the ENGLISH
 * collections (the FAQ index, the sidebar, starred pages, the connected lists
 * on a translated page) must show the translated title wherever the page has a
 * translation and fall back to the English title otherwise. Reading the English
 * collection alone renders the right links with the wrong language, which is
 * exactly what a reader notices first.
 *
 * `localizedTitles` returns an EMPTY map for the default locale, so the English
 * output is unaffected: the same code path renders English as it always did.
 */
import { getCollection } from 'astro:content';
import { DEFAULT_LOCALE } from './config';

/** Keyed `<collection>/<slug>` (e.g. `faqs/designing-ai-into-learning`). */
export type LocalizedTitles = Map<string, string>;

export async function localizedTitles(
  locale: string | undefined,
): Promise<LocalizedTitles> {
  const titles: LocalizedTitles = new Map();
  if (!locale || locale === DEFAULT_LOCALE) return titles;

  const translations = await getCollection('translations');
  for (const entry of translations) {
    const [entryLocale, collection, file] = entry.id.split('/');
    if (entryLocale !== locale || !collection || !file) continue;
    titles.set(`${collection}/${file.replace(/\.md$/, '')}`, entry.data.title);
  }
  return titles;
}

/** The translated title for `<collection>/<slug>`, or `fallback` if untranslated. */
export function localizedTitle(
  titles: LocalizedTitles,
  collection: string,
  slug: string,
  fallback: string,
): string {
  return titles.get(`${collection}/${slug}`) ?? fallback;
}


/**
 * Localized title AND summary for content-collection pages, for lists that show
 * both (the resources index). Same key shape as `LocalizedTitles`. Reading the
 * English collection alone renders a translated listing in English, which is what
 * a reader on a translated page notices first.
 */
export type LocalizedFields = Map<string, { title: string; summary?: string }>;

export async function localizedFields(
  locale: string | undefined,
): Promise<LocalizedFields> {
  const fields: LocalizedFields = new Map();
  if (!locale || locale === DEFAULT_LOCALE) return fields;

  const translations = await getCollection('translations');
  for (const entry of translations) {
    const [entryLocale, collection, file] = entry.id.split('/');
    if (entryLocale !== locale || !collection || !file) continue;
    fields.set(`${collection}/${file.replace(/\.md$/, '')}`, {
      title: entry.data.title,
      summary: entry.data.summary,
    });
  }
  return fields;
}

/** The localized title/summary for `<collection>/<slug>`, falling back to English. */
export function localizedField(
  fields: LocalizedFields,
  collection: string,
  slug: string,
  fallback: { title: string; summary?: string },
): { title: string; summary?: string } {
  const hit = fields.get(`${collection}/${slug}`);
  if (!hit) return fallback;
  return { title: hit.title ?? fallback.title, summary: hit.summary ?? fallback.summary };
}
