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
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
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
  strandBlurbs: {
    'Foundations of AI in education':
      "La vue d'ensemble du domaine lui-même : ce qu'est l'IA en éducation, comment elle a évolué, et les thèmes transversaux (littératie en IA, collaboration humain-IA, agentivité) qui façonnent toutes les autres thématiques.",
    'Learning and instruction':
      "Comment l'IA soutient l'enseignement et l'apprentissage, à travers les pédagogies, les théories de l'apprentissage et les processus centrés sur l'apprenant dans lesquels elle opère.",
    'Technologies and techniques':
      "La couche technique : les modèles et méthodes d'IA qui font fonctionner les technologies éducatives, et les systèmes de modélisation de l'apprenant et de tutorat construits sur eux.",
    'AI in the disciplines':
      "Comment l'IA s'applique aux différentes disciplines académiques et aux niveaux d'enseignement : la couverture du domaine par discipline.",
    'Assessment and measurement':
      "Comment l'IA évalue les apprenants et transforme aussi la façon dont nous évaluons les systèmes d'IA et leur impact.",
    'Equity, ethics, and responsible use':
      "L'équité, l'accès et la responsabilité sont au cœur de l'IA en éducation.",
  },
  empty: 'Aucune page de concept pour le moment.',
};

export default fr;
