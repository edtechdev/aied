/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const fr: ConceptsStrings = {
  title: 'Concepts',
  h1: 'Concepts',
  introHtml:
    "Toutes les pages de concepts du site, dans les mêmes sections que la barre latérale de gauche. Chacune dit ce que signifie une idée en IA et éducation, ce que la recherche a trouvé à son sujet et sur quelles études elle s'appuie. <a href=\"/aied/concepts/ai-education/\">L'IA en éducation</a> est le thème fédérateur qui les relie.",
  browseHtml:
    "Les pages de concepts existent aussi en <a href=\"/aied/aied.epub\">EPUB</a> ou en <a href=\"/aied/aied.pdf\">PDF</a> pour la lecture hors ligne. Pour partir plutôt d'une question, d'un article, d'un outil, d'une recherche ou de votre propre assistant, voir l'<a href=\"/aied/faq\">FAQ</a>, le <a href=\"/aied/journal\">journal</a>, les <a href=\"/aied/resources\">ressources</a>, la <a href=\"/aied/search\">recherche</a> ou la <a href=\"/aied/ai\">page IA</a>.",
  countTemplate: '{count} pages de concepts, réparties en {strands} thématiques.',
  empty: 'Aucune page de concept pour le moment.',
};

export default fr;
