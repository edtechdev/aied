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

const hr: SearchStrings = {
  title: 'Pretraga',
  h1: 'Pretraga',
  intro: 'Pretražujte članke i pojmove. Upotrijebite filtre za sužavanje rezultata.',
  corpusIntro:
    'Sve u bazi znanja može se pretraživati — uključujući FAQ-ove i stranice s besplatnim alatima i resursima. Trenutno sadrži:',
  placeholder: 'Pretraži članke, pojmove i FAQ-ove...',
  filterLabels: {
    page_type: 'Tip',
    discipline: 'Disciplina',
    level: 'Razina',
    audience: 'Predviđena publika',
    research_method: 'Dizajn studije',
    page_kind: 'Vrsta stranice',
  },
};

export default hr;
