/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
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

const it: ConceptsStrings = {
  title: 'Concetti',
  h1: 'Concetti',
  introHtml:
    'Tutte le pagine concetto del sito, nelle stesse sezioni della barra laterale sinistra. Ognuna dice che cosa significa un’idea nell’IA e nell’educazione, che cosa ha trovato la ricerca e su quali studi si basa. <a href="/aied/concepts/ai-education/">IA nell’educazione</a> è l’ombrello che le tiene insieme.',
  browseHtml:
    'Le pagine concetto sono disponibili anche come <a href="/aied/aied.epub">EPUB</a> o <a href="/aied/aied.pdf">PDF</a> per la lettura offline. Per partire da una domanda, un articolo, uno strumento, una ricerca o il proprio assistente, vedi le <a href="/aied/faq">FAQ</a>, il <a href="/aied/journal">diario</a>, le <a href="/aied/resources">risorse</a>, la <a href="/aied/search">ricerca</a> o la <a href="/aied/ai">pagina IA</a>.',
  countTemplate: '{count} pagine concetto, raggruppate in {strands} sezioni.',
  empty: 'Ancora nessuna pagina concetto.',
};

export default it;
