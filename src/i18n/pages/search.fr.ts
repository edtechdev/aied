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

const en: SearchStrings = {
  title: "Recherche",
  h1: "Recherche",
  intro: "Recherchez parmi les articles et les concepts. Utilisez les filtres pour affiner les résultats.",
  corpusIntro:
    "Tout le contenu de la base de connaissances est interrogeable, y compris les FAQ et les pages d'outils et de ressources gratuits. Elle contient actuellement :",
  placeholder: "Rechercher des articles, des concepts et des FAQ...",
  filterLabels: {
    page_type: "Type",
    discipline: "Discipline",
    level: "Niveau",
    audience: "Public visé",
    research_method: "Type d'étude",
    page_kind: "Type de page",
  },
};

export default en;
