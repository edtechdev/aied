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
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const it: ConceptsStrings = {
  title: 'Concetti',
  h1: 'Concetti',
  introHtml:
    'Tutte le pagine concetto del sito, nelle stesse sezioni della barra laterale sinistra. Ognuna dice che cosa significa un’idea nell’IA e nell’educazione, che cosa ha trovato la ricerca e su quali studi si basa. <a href=\"/aied/concepts/ai-education/\">IA nell’educazione</a> è l’ombrello che le tiene insieme.',
  browseHtml:
    'Le pagine concetto sono disponibili anche come <a href=\"/aied/aied.epub\">EPUB</a> o <a href=\"/aied/aied.pdf\">PDF</a> per la lettura offline. Per partire da una domanda, un articolo, uno strumento, una ricerca o il proprio assistente, vedi le <a href=\"/aied/faq\">FAQ</a>, il <a href=\"/aied/journal\">diario</a>, le <a href=\"/aied/resources\">risorse</a>, la <a href=\"/aied/search\">ricerca</a> o la <a href=\"/aied/ai\">pagina IA</a>.',
  countTemplate: '{count} pagine concetto, raggruppate in {strands} sezioni.',
  strandBlurbs: {
    'Foundations of AI in education':
      'La visione d’insieme del campo stesso: che cosa è l’IA nell’educazione, come si è evoluta e quali temi trasversali (alfabetizzazione all’IA, collaborazione uomo-IA, agentività) plasmano ogni altra sezione.',
    'Learning and instruction':
      'Come l’IA sostiene l’insegnamento e l’apprendimento, attraverso le pedagogie, le teorie dell’apprendimento e i processi centrati sullo studente in cui l’IA opera.',
    'Technologies and techniques':
      'Il livello tecnico: i modelli e i metodi di IA che alimentano la tecnologia educativa, e i sistemi di modellazione dello studente e di tutoring costruiti su di essi.',
    'AI in the disciplines':
      'Come l’IA si applica alle materie accademiche e ai livelli di istruzione: la copertura disciplinare del campo.',
    'Assessment and measurement':
      'Come l’IA valuta gli studenti e al tempo stesso ridefinisce il modo in cui valutiamo i sistemi di IA e il loro impatto.',
    'Equity, ethics, and responsible use':
      'Equità, accesso e responsabilità sono centrali per l’IA nell’educazione.',
  },
  empty: 'Ancora nessuna pagina concetto.',
};

export default it;
