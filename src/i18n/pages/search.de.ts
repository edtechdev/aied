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

const de: SearchStrings = {
  title: 'Suche',
  h1: 'Suche',
  intro: 'Durchsuchen Sie Artikel und Konzepte. Nutzen Sie die Filter, um die Ergebnisse einzugrenzen.',
  corpusIntro:
    'Alles in der Wissensbasis ist durchsuchbar – einschließlich der FAQs und der Seiten mit kostenlosen Werkzeugen und Ressourcen. Sie enthält derzeit:',
  placeholder: 'Artikel, Konzepte und FAQs durchsuchen …',
  filterLabels: {
    page_type: 'Typ',
    discipline: 'Fach',
    level: 'Niveau',
    audience: 'Zielgruppe',
    research_method: 'Studiendesign',
    page_kind: 'Seitenart',
  },
};

export default de;