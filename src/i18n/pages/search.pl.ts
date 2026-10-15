/**
 * Search page copy, per locale. The filter-bar labels are translated; the facet
 * values that come from the content (disciplines, levels, concept slugs) are
 * content, not chrome, so they stay as authored on the (English) page they
 * describe — the convention for untranslated content.
 */
export interface SearchStrings {
  title: string;
  h1: string;
  intro: string;
  corpusIntro: string;
  placeholder: string;
  filterLabels: {
    page_type: string;
    discipline: string;
    level: string;
    audience: string;
    research_method: string;
    page_kind: string;
  };
}

const pl: SearchStrings = {
  title: 'Szukaj',
  h1: 'Szukaj',
  intro: 'Przeszukaj artykuły i pojęcia. Użyj filtrów, aby zawęzić wyniki.',
  corpusIntro:
    'Wszystko w bazie wiedzy jest przeszukiwalne — łącznie z FAQ oraz stronami bezpłatnych narzędzi i zasobów. Obecnie zawiera ona:',
  placeholder: 'Szukaj artykułów, pojęć i FAQ…',
  filterLabels: {
    page_type: 'Typ',
    discipline: 'Dziedzina',
    level: 'Poziom',
    audience: 'Docelowi odbiorcy',
    research_method: 'Typ badania',
    page_kind: 'Rodzaj strony',
  },
};

export default pl;
