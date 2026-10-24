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

const es: ConceptsStrings = {
  title: 'Conceptos',
  h1: 'Conceptos',
  introHtml:
    'Todas las páginas de concepto del sitio, en las mismas secciones que la barra lateral izquierda. Cada una explica qué significa una idea en IA y educación, qué encontró la investigación sobre ella y en qué estudios se basa. <a href="/aied/concepts/ai-education/">IA en la educación</a> es el paraguas que las une.',
  browseHtml:
    'Las páginas de concepto también están disponibles como <a href="/aied/aied.epub">EPUB</a> o <a href="/aied/aied.pdf">PDF</a> para leer sin conexión. Para empezar en cambio desde una pregunta, un artículo, una herramienta, una búsqueda o tu propio asistente, consulta las <a href="/aied/faq">preguntas frecuentes</a>, el <a href="/aied/journal">diario</a>, los <a href="/aied/resources">recursos</a>, la <a href="/aied/search">búsqueda</a> o la <a href="/aied/ai">página de IA</a>.',
  countTemplate: '{count} páginas de concepto, agrupadas en {strands} líneas temáticas.',
  strandBlurbs: {
    'Foundations of AI in education':
      'La mirada global al propio campo: qué es la IA en la educación, cómo ha evolucionado y los temas transversales (alfabetización en IA, colaboración entre humanos e IA, agencia) que dan forma a las demás líneas temáticas.',
    'Learning and instruction':
      'Cómo la IA apoya la enseñanza y el aprendizaje, a través de las pedagogías, las teorías del aprendizaje y los procesos centrados en el estudiantado en los que opera la IA.',
    'Technologies and techniques':
      'La capa técnica: los modelos y métodos de IA que impulsan la tecnología educativa, y los sistemas de modelado del estudiantado y de tutoría construidos sobre ellos.',
    'AI in the disciplines':
      'Cómo se aplica la IA en las disciplinas y en los distintos niveles educativos: la cobertura de áreas temáticas del campo.',
    'Assessment and measurement':
      'Cómo la IA evalúa al estudiantado y, a la vez, transforma la forma en que evaluamos los sistemas de IA y su impacto.',
    'Equity, ethics, and responsible use':
      'La equidad, el acceso y la responsabilidad son centrales para la IA en la educación.',
  },
  empty: 'Aún no hay páginas de concepto.',
};

export default es;
