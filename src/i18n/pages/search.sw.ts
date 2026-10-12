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

const sw: SearchStrings = {
  title: 'Tafuta',
  h1: 'Tafuta',
  intro: 'Tafuta katika makala na dhana. Tumia vichujio kupunguza matokeo.',
  corpusIntro:
    'Kila kitu kilicho katika hifadhi ya maarifa kinaweza kutafutwa — ikijumuisha FAQ na kurasa za zana na rasilimali za bila malipo. Kwa sasa ina:',
  placeholder: 'Tafuta makala, dhana na FAQ...',
  filterLabels: {
    page_type: 'Aina',
    discipline: 'Fani',
    level: 'Ngazi',
    audience: 'Hadhira inayokusudiwa',
    research_method: 'Mbinu ya utafiti',
    page_kind: 'Aina ya ukurasa',
  },
};

export default sw;
