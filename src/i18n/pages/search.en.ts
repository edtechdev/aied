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

const en: SearchStrings = {
  title: 'Search',
  h1: 'Search',
  intro: 'Search across articles and concepts. Use the filters to narrow results.',
  corpusIntro:
    'Everything in the knowledge base is searchable — including the FAQs and the free tools and resources pages. It currently holds:',
  placeholder: 'Search articles, concepts, and FAQs...',
  filterLabels: {
    page_type: 'Type',
    discipline: 'Discipline',
    level: 'Level',
    audience: 'Intended audience',
    research_method: 'Study design',
    page_kind: 'Page kind',
  },
};

export default en;