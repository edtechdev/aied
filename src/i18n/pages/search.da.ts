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

const da: SearchStrings = {
  title: 'Søg',
  h1: 'Søg',
  intro: 'Søg på tværs af artikler og begreber. Brug filtrene til at indsnævre resultaterne.',
  corpusIntro:
    'Alt i vidensbasen er søgbart — inklusive FAQ\'erne og siderne med gratis værktøjer og ressourcer. Den indeholder i øjeblikket:',
  placeholder: 'Søg i artikler, begreber og FAQ\'er...',
  filterLabels: {
    page_type: 'Type',
    discipline: 'Fagområde',
    level: 'Niveau',
    audience: 'Tiltænkt målgruppe',
    research_method: 'Studietype',
    page_kind: 'Sidetype',
  },
};

export default da;
