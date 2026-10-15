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

const sv: SearchStrings = {
  title: 'Sök',
  h1: 'Sök',
  intro: 'Sök i artiklar och begrepp. Använd filtren för att begränsa resultaten.',
  corpusIntro:
    'Allt i kunskapsbasen är sökbart — inklusive de vanliga frågorna och sidorna med kostnadsfria verktyg och resurser. Den innehåller för närvarande:',
  placeholder: 'Sök artiklar, begrepp och vanliga frågor...',
  filterLabels: {
    page_type: 'Typ',
    discipline: 'Ämnesområde',
    level: 'Nivå',
    audience: 'Avsedd målgrupp',
    research_method: 'Studiedesign',
    page_kind: 'Sidtyp',
  },
};

export default sv;
