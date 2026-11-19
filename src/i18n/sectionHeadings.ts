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
  ar: { connectedConcepts: 'المفاهيم المرتبطة', connectedArticles: 'المقالات المرتبطة' },
  he: { connectedConcepts: 'מושגים מחוברים', connectedArticles: 'מאמרים מחוברים' },
  hi: { connectedConcepts: 'संबंधित अवधारणाएँ', connectedArticles: 'संबंधित लेख' },
  ru: { connectedConcepts: 'Связанные концепции', connectedArticles: 'Связанные статьи' },
  uk: { connectedConcepts: 'Пов’язані поняття', connectedArticles: 'Пов’язані статті' },
  it: { connectedConcepts: 'Concetti collegati', connectedArticles: 'Articoli collegati' },
  tr: { connectedConcepts: 'Bağlı kavramlar', connectedArticles: 'Bağlı makaleler' },
  pl: { connectedConcepts: 'Powiązane pojęcia', connectedArticles: 'Powiązane artykuły' },
  bn: { connectedConcepts: 'সংযুক্ত ধারণা', connectedArticles: 'সংযুক্ত নিবন্ধ' },
  ur: { connectedConcepts: 'منسلک تصورات', connectedArticles: 'منسلک مضامین' },
  id: { connectedConcepts: 'Konsep terkait', connectedArticles: 'Artikel terkait' },
  vi: { connectedConcepts: 'Khái niệm liên quan', connectedArticles: 'Bài viết liên quan' },
  nl: { connectedConcepts: 'Gerelateerde concepten', connectedArticles: 'Gerelateerde artikelen' },
  sv: { connectedConcepts: 'Anslutna begrepp', connectedArticles: 'Anslutna artiklar' },
  da: { connectedConcepts: 'Relaterede begreper', connectedArticles: 'Relaterede artikler' },
  fi: { connectedConcepts: 'Liittyvät käsitteet', connectedArticles: 'Liittyvät artikkelit' },
  no: { connectedConcepts: 'Tilknyttede begreper', connectedArticles: 'Tilknyttede artikler' },
  ro: { connectedConcepts: 'Concepte conexe', connectedArticles: 'Articole conexe' },
  hu: { connectedConcepts: 'Kapcsolódó fogalmak', connectedArticles: 'Kapcsolódó cikkek' },
  cs: { connectedConcepts: 'Související pojmy', connectedArticles: 'Související články' },
  bg: { connectedConcepts: 'Свързани понятия', connectedArticles: 'Свързани статии' },
  sk: { connectedConcepts: 'Prepojené pojmy', connectedArticles: 'Prepojené články' },
  hr: { connectedConcepts: 'Povezani pojmovi', connectedArticles: 'Povezani članci' },
  el: { connectedConcepts: 'Συνδεδεμένες έννοιες', connectedArticles: 'Συνδεδεμένα άρθρα' },
  sw: { connectedConcepts: 'Dhana Zilizounganishwa', connectedArticles: 'Makala Zilizounganishwa' },
};

/**
 * Recognised variants of the connected headings, per locale.
 *
 * The corpus was translated in waves, and later waves sometimes chose a different but
 * equally standard phrasing ("Verbonden concepten" beside "Gerelateerde concepten",
 * "Dhana Zilizounganishwa" beside "Dhana zinazohusiana"). The renderer matches a
 * heading by its exact text after lowercasing, so a variant missing from this table
 * loses the connected-list styling even though the page is translated. Only variants
 * that occur on enough pages to be a convention belong here; a one-off invention is a
 * page to fix, not an alias to accept. One line per locale keeps
 * check-translated-headings.py able to parse this block.
 */
export const CONNECTED_ALIASES: Record<string, Partial<Record<'connectedConcepts' | 'connectedArticles', string[]>>> = {
  ja: { connectedConcepts: ['関連概念', '関連する構成概念', 'つながる概念'], connectedArticles: ['関連記事', '関連論文', 'つながる記事'] },
  ko: { connectedConcepts: ['연결된 개념들'], connectedArticles: ['연결된 글들'] },
  ar: { connectedConcepts: ['مفاهيم مرتبطة', 'المفاهيم المتصلة', 'المفاهيم المترابطة', 'مفاهيم مترابطة'], connectedArticles: ['مقالات مرتبطة', 'المقالات المتصلة', 'المقالات المترابطة', 'مقالات مترابطة'] },
  he: { connectedConcepts: ['מושגים מקושרים', 'מושגים קשורים'], connectedArticles: ['מאמרים מקושרים', 'מאמרים קשורים'] },
  hi: { connectedConcepts: ['संबद्ध अवधारणाएँ', 'जुड़ी अवधारणाएँ', 'संबद्ध संकल्पनाएँ'] },
  ru: { connectedConcepts: ['Связанные понятия', 'Связанные концепты'] },
  nl: { connectedConcepts: ['Verbonden concepten'], connectedArticles: ['Verbonden artikelen'] },
  da: { connectedConcepts: ['Forbundne begreber'], connectedArticles: ['Forbundne artikler'] },
  fi: { connectedConcepts: ['Liittyvät konseptit'] },
  no: { connectedConcepts: ['Tilknyttede begrep', 'Beslektede begreper'], connectedArticles: ['Beslektede artikler'] },
  ro: { connectedConcepts: ['Concepte conectate'], connectedArticles: ['Articole conectate'] },
  hu: { connectedConcepts: ['Összefüggő fogalmak'], connectedArticles: ['Összefüggő cikkek'] },
  cs: { connectedConcepts: ['Související koncepty'] },
  bg: { connectedConcepts: ['Свързани концепции'] },
  sk: { connectedConcepts: ['Prepojené koncepty', 'Súvisiace koncepty'], connectedArticles: ['Súvisiace články'] },
  hr: { connectedConcepts: ['Povezani koncepti'] },
  pl: { connectedConcepts: ['Połączone koncepcje'], connectedArticles: ['Połączone artykuły'] },
  sw: { connectedConcepts: ['Dhana zinazohusiana', 'Dhana Zinazohusiana'], connectedArticles: ['Makala zinazohusiana', 'Makala Zinazohusiana'] },
};

/** The connected headings for one locale, falling back to English. */
export function connectedHeadings(locale: string): ConnectedHeadings {
  return CONNECTED_HEADINGS[locale] ?? CONNECTED_HEADINGS.en;
}

/** Every locale's pair, lowercased — the renderer accepts all of them. */
export function allConnectedHeadings(): Record<string, 'concept' | 'article'> {
  const out: Record<string, 'concept' | 'article'> = {};
  for (const [locale, { connectedConcepts, connectedArticles }] of Object.entries(CONNECTED_HEADINGS)) {
    out[connectedConcepts.toLowerCase()] = 'concept';
    out[connectedArticles.toLowerCase()] = 'article';
    const aliases = CONNECTED_ALIASES[locale];
    if (!aliases) continue;
    for (const label of aliases.connectedConcepts ?? []) out[label.toLowerCase()] = 'concept';
    for (const label of aliases.connectedArticles ?? []) out[label.toLowerCase()] = 'article';
  }
  return out;
}

/** Canonical heading plus every accepted variant, for one locale and kind. */
export function acceptedConnectedLabels(locale: string, kind: 'connectedConcepts' | 'connectedArticles'): string[] {
  const canonical = connectedHeadings(locale);
  const aliases = CONNECTED_ALIASES[locale]?.[kind] ?? [];
  return [canonical[kind], ...aliases];
}
