/**
 * The search interface's filter bar, in one place.
 *
 * The 404 page renders the same interface as `/search`, so its labels have to be
 * available to two callers: the component that renders them, and the small map the
 * 404 page carries so it can re-label a missing locale path in the browser (a static
 * host serves ONE error document, so the locale cannot be chosen at build time).
 * Keeping the computation here is what stops the two from drifting.
 */
import { FACET_FIELDS, FACET_DISPLAY_ORDER } from '../data/facetVocab';
import { strings } from '.';
import { taxonomyHeading } from './config';

export interface SearchFilterLabel {
  /** The `filter` the Pagefind dropdown binds to. */
  filter: string;
  /** The visible label, in the locale's own language where it has one. */
  label: string;
}

/**
 * User-visible chrome for the custom search interface.
 *
 * Localization rule (from the search implementation plan): new strings get an
 * English default and are ONLY replaced by an existing, reviewed translation.
 * Unreviewed generated translations are never shipped, so non-English locales
 * see English chrome until a human editor translates it in the locale files.
 */
export interface SearchChrome {
  labels: Record<string, string>;
  /** Enum value -> display label maps per facet (page_type, page_kind). */
  valueLabels: Record<string, Record<string, string>>;
  /** Empty-state starter searches (English corpus queries; empty for other locales). */
  starterQueries: string[];
}

const CHROME_LABELS: Record<string, string> = {
  search: 'Search the knowledge base',
  submit: 'Search',
  clear_query: 'Clear the query',
  share: 'Share this search',
  more_filters: 'More filters',
  fewer_filters: 'Fewer filters',
  clear_filters: 'Clear filters',
  clear_all: 'Clear all',
  load_more: 'Load more results',
  summary: 'Showing {shown} of {total} results',
  none: 'No results for \u00ab{query}\u00bb',
  none_filtered: 'No results match the selected filters.',
  error: 'Search failed',
  retry: 'Retry',
  searching: 'Searching\u2026',
  loaded: 'Results loaded',
  retrying: 'Retrying\u2026',
  note: 'Note: ',
  copied: 'Search link copied to clipboard',
  copy_manually: 'Copy the link below',
  share_url: 'Shareable search URL',
  skip_results: 'Skip to results',
  empty_title: 'Start a search',
  empty_hits: 'No results \u2014 try removing a filter or rephrasing the question.',
  suggestions: 'Try one of these starting searches',
  concepts: 'Browse concepts',
  faqs: 'Browse FAQs',
  resources: 'Browse resources',
  chip_remove: 'Remove filter',
  nojs_title: 'Search requires JavaScript',
  nojs_text: 'JavaScript is needed for the interactive search. In the meantime you can browse:',
  searching_language: 'Searching {language} pages.',
  english_fallback: 'Search English pages',
};

export const PAGE_TYPE_VALUE_LABELS: Record<string, string> = {
  concept: 'Concept',
  faq: 'FAQ',
  article: 'Research summary',
  resource: 'Resource',
  newsletter: 'Newsletter',
  page: 'Page',
};

export const PAGE_KIND_VALUE_LABELS: Record<string, string> = {
  framework: 'Framework',
  synthesis: 'Synthesis',
  evaluation: 'Evaluation',
};

const EN_STARTER_QUERIES = [
  'How can I reduce AI cheating?',
  'AI literacy activities',
  'Redesign online assignments',
  'Can AI grade student writing?',
  'How to evaluate an educational chatbot',
];

export function searchChrome(locale: string): SearchChrome {
  return {
    labels: { ...CHROME_LABELS },
    valueLabels: { page_type: PAGE_TYPE_VALUE_LABELS, page_kind: PAGE_KIND_VALUE_LABELS },
    starterQueries: locale === 'en' ? EN_STARTER_QUERIES : [],
  };
}

export function searchFilterBar(locale: string): SearchFilterLabel[] {
  const s = strings(locale).search;
  // Facet values that are concept slugs read poorly in a filter dropdown as
  // 'self-regulated-learning'; map them to their concept page titles for display.
  const labelsMap: Record<string, string> = Object.fromEntries(
    FACET_FIELDS.map((f) => [f.field as string, f.label as string]),
  );
  return [
    { filter: 'page_type', label: s.filterLabels.page_type },
    { filter: 'discipline', label: s.filterLabels.discipline },
    { filter: 'level', label: s.filterLabels.level },
    { filter: 'audience', label: s.filterLabels.audience },
    { filter: 'research_method', label: s.filterLabels.research_method },
    ...(FACET_DISPLAY_ORDER as readonly string[]).map((field) => ({
      filter: field,
      label: taxonomyHeading(labelsMap[field] || field, locale),
    })),
    { filter: 'page_kind', label: s.filterLabels.page_kind },
  ];
}
