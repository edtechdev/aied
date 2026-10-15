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

const no: SearchStrings = {
  title: 'Søk',
  h1: 'Søk',
  intro: 'Søk i artikler og begreper. Bruk filtrene for å innsnevre resultatene.',
  corpusIntro:
    'Alt i kunnskapsbasen er søkbart — inkludert FAQ-en og sidene med gratis verktøy og ressurser. Den inneholder i dag:',
  placeholder: 'Søk i artikler, begreper og FAQ …',
  filterLabels: {
    page_type: 'Type',
    discipline: 'Fagområde',
    level: 'Nivå',
    audience: 'Tiltenkt målgruppe',
    research_method: 'Studiedesign',
    page_kind: 'Sidetype',
  },
};

export default no;
