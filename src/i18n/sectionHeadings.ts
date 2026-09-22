/**
 * The two "connected" section headings, per locale.
 *
 * `CONNECTED_SECTION_KIND` in `lib/pageTypeIcons.ts` matches these headings by their
 * exact text to mark a list as a connected list (list styling + the page-kind icon on
 * each entry). Translated pages use translated headings, so the English-only table
 * stopped matching on every locale and those lists silently lost their styling.
 *
 * Translators must use these exact strings as the last two section headings of a
 * translated concept, FAQ or resource page. `tooling/scripts/check-translated-headings.py`
 * fails the build's gate if a page drifts from them.
 */
export interface ConnectedHeadings {
  /** Heading of the concept list, e.g. "Connected concepts". */
  connectedConcepts: string;
  /** Heading of the article list, e.g. "Connected articles". */
  connectedArticles: string;
}

export const CONNECTED_HEADINGS: Record<string, ConnectedHeadings> = {
  en: { connectedConcepts: 'Connected concepts', connectedArticles: 'Connected articles' },
  es: { connectedConcepts: 'Conceptos conectados', connectedArticles: 'Artículos conectados' },
  fr: { connectedConcepts: 'Concepts liés', connectedArticles: 'Articles liés' },
  zh: { connectedConcepts: '关联概念', connectedArticles: '关联文章' },
  de: { connectedConcepts: 'Verbundene Konzepte', connectedArticles: 'Verbundene Artikel' },
  ja: { connectedConcepts: '関連する概念', connectedArticles: '関連する記事' },
  ko: { connectedConcepts: '연결된 개념', connectedArticles: '연결된 문서' },
  pt: { connectedConcepts: 'Conceitos conectados', connectedArticles: 'Artigos conectados' },
  ar: { connectedConcepts: 'المفاهيم المتصلة', connectedArticles: 'المقالات المتصلة' },
  he: { connectedConcepts: 'מושגים מחוברים', connectedArticles: 'מאמרים מחוברים' },
};

/** The connected headings for one locale, falling back to English. */
export function connectedHeadings(locale: string): ConnectedHeadings {
  return CONNECTED_HEADINGS[locale] ?? CONNECTED_HEADINGS.en;
}

/** Every locale's pair, lowercased — the renderer accepts all of them. */
export function allConnectedHeadings(): Record<string, 'concept' | 'article'> {
  const out: Record<string, 'concept' | 'article'> = {};
  for (const { connectedConcepts, connectedArticles } of Object.values(CONNECTED_HEADINGS)) {
    out[connectedConcepts.toLowerCase()] = 'concept';
    out[connectedArticles.toLowerCase()] = 'article';
  }
  return out;
}
