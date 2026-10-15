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

const nl: SearchStrings = {
  title: 'Zoeken',
  h1: 'Zoeken',
  intro: 'Zoek in artikelen en concepten. Gebruik de filters om resultaten te verfijnen.',
  corpusIntro:
    'Alles in de kennisbank is doorzoekbaar — inclusief de FAQ\'s en de pagina\'s met gratis tools en bronnen. Het bevat momenteel:',
  placeholder: 'Zoek artikelen, concepten en FAQ\'s...',
  filterLabels: {
    page_type: 'Type',
    discipline: 'Vakgebied',
    level: 'Niveau',
    audience: 'Beoogde doelgroep',
    research_method: 'Onderzoeksopzet',
    page_kind: 'Soort pagina',
  },
};

export default nl;
