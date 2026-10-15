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

const sk: SearchStrings = {
  title: 'Hľadať',
  h1: 'Hľadať',
  intro: 'Hľadajte v článkoch a pojmoch. Pomocou filtrov zúžite výsledky.',
  corpusIntro:
    'Všetko vo vedeckej databáze je prehľadávateľné — vrátane často kladených otázok a stránok s bezplatnými nástrojmi a zdrojmi. V súčasnosti obsahuje:',
  placeholder: 'Hľadajte články, pojmy a často kladené otázky...',
  filterLabels: {
    page_type: 'Typ',
    discipline: 'Disciplína',
    level: 'Úroveň',
    audience: 'Zamýšľaný okruh čitateľov',
    research_method: 'Návrh štúdie',
    page_kind: 'Druh stránky',
  },
};

export default sk;
