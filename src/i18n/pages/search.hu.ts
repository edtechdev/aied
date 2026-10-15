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

const hu: SearchStrings = {
  title: 'Keresés',
  h1: 'Keresés',
  intro: 'Keressen cikkek és fogalmak között. A szűrőkkel szűkítheti a találatokat.',
  corpusIntro:
    'A tudásbázisban minden kereshető — beleértve a GYIK-eket és az ingyenes eszközöket és forrásokat tartalmazó oldalakat. Jelenleg ez található benne:',
  placeholder: 'Cikkek, fogalmak és GYIK keresése…',
  filterLabels: {
    page_type: 'Típus',
    discipline: 'Szakterület',
    level: 'Szint',
    audience: 'Célközönség',
    research_method: 'Tanulmány tervezése',
    page_kind: 'Oldal típusa',
  },
};

export default hu;
