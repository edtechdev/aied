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

const ro: SearchStrings = {
  title: 'Căutare',
  h1: 'Căutare',
  intro: 'Caută în articole și concepte. Folosește filtrele pentru a restrânge rezultatele.',
  corpusIntro:
    'Tot ce se află în baza de cunoștințe poate fi căutat — inclusiv FAQ-urile și paginile de instrumente și resurse gratuite. În prezent conține:',
  placeholder: 'Caută articole, concepte și FAQ...',
  filterLabels: {
    page_type: 'Tip',
    discipline: 'Disciplină',
    level: 'Nivel',
    audience: 'Public țintă',
    research_method: 'Modelul studiului',
    page_kind: 'Tipul paginii',
  },
};

export default ro;
