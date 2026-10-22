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
