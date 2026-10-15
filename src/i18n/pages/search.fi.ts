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

const fi: SearchStrings = {
  title: 'Haku',
  h1: 'Haku',
  intro: 'Hae artikkeleista ja käsitteistä. Rajaa tuloksia suodattimilla.',
  corpusIntro:
    'Kaikki tietopankin sisällöstä on haettavissa — mukaan lukien UKK:t ja ilmaisten työkalujen ja resurssien sivut. Se sisältää tällä hetkellä:',
  placeholder: 'Hae artikkeleita, käsitteitä ja UKK:ita...',
  filterLabels: {
    page_type: 'Tyyppi',
    discipline: 'Tieteenala',
    level: 'Taso',
    audience: 'Kohderyhmä',
    research_method: 'Tutkimuksen suunnittelu',
    page_kind: 'Sivun laji',
  },
};

export default fi;
