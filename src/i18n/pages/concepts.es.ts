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

const es: ConceptsStrings = {
  title: 'Conceptos',
  h1: 'Conceptos',
  introHtml:
    'Todas las páginas de concepto del sitio, en las mismas secciones que la barra lateral izquierda. Cada una explica qué significa una idea en IA y educación, qué encontró la investigación sobre ella y en qué estudios se basa. <a href="/aied/concepts/ai-education/">IA en la educación</a> es el paraguas que las une.',
  browseHtml:
    'Las páginas de concepto también están disponibles como <a href="/aied/aied.epub">EPUB</a> o <a href="/aied/aied.pdf">PDF</a> para leer sin conexión. Para empezar en cambio desde una pregunta, un artículo, una herramienta, una búsqueda o tu propio asistente, consulta las <a href="/aied/faq">preguntas frecuentes</a>, el <a href="/aied/journal">diario</a>, los <a href="/aied/resources">recursos</a>, la <a href="/aied/search">búsqueda</a> o la <a href="/aied/ai">página de IA</a>.',
  countTemplate: '{count} páginas de concepto, agrupadas en {strands} líneas temáticas.',
  empty: 'Aún no hay páginas de concepto.',
};

export default es;
