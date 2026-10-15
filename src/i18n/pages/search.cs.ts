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

const cs: SearchStrings = {
  title: 'Hledat',
  h1: 'Hledat',
  intro: 'Prohledávejte články a pojmy. Pomocí filtrů zúžíte výsledky.',
  corpusIntro:
    'Vše v znalostní bázi je prohledávatelné — včetně FAQ a stránek bezplatných nástrojů a zdrojů. V současné době obsahuje:',
  placeholder: 'Hledat články, pojmy a FAQ...',
  filterLabels: {
    page_type: 'Typ',
    discipline: 'Obor',
    level: 'Úroveň',
    audience: 'Cílová skupina',
    research_method: 'Typ studie',
    page_kind: 'Druh stránky',
  },
};

export default cs;
