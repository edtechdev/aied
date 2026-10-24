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

const ro: ConceptsStrings = {
  title: 'Concepte',
  h1: 'Concepte',
  introHtml:
    'Toate paginile de concepte din site, în aceleași secțiuni ca bara laterală din stânga. Fiecare spune ce înseamnă o idee din AI și educație, ce a arătat cercetarea despre ea și pe ce studii se bazează. <a href="/aied/concepts/ai-education/">Inteligența artificială în educație</a> este umbrela care le leagă.',
  browseHtml:
    'Paginile de concepte apar și ca <a href="/aied/aied.epub">EPUB</a> sau <a href="/aied/aied.pdf">PDF</a> pentru lectură offline. Pentru a porni de la o întrebare, o lucrare, un instrument, o căutare sau propriul asistent, vezi <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">jurnalul</a>, <a href="/aied/resources">resursele</a>, <a href="/aied/search">căutarea</a> sau <a href="/aied/ai">pagina AI</a>.',
  countTemplate: '{count} pagini de concepte, grupate în {strands} secțiuni.',
  strandBlurbs: {
    'Foundations of AI in education':
      'Privirea de ansamblu asupra domeniului în sine: ce este AI în educație, cum a evoluat și temele transversale (alfabetizare în AI, colaborare om-AI, agenție) care modelează toate celelalte secțiuni.',
    'Learning and instruction':
      'Cum AI sprijină învățarea și predarea, prin pedagogiile, teoriile învățării și procesele orientate spre cursant în care AI funcționează.',
    'Technologies and techniques':
      'Stratul tehnic: modelele și metodele AI care stau la baza tehnologiei educaționale, plus sistemele de modelare a învățăceilor și de tutorat construite pe ele.',
    'AI in the disciplines':
      'Cum este aplicat AI în diverse discipline și niveluri educaționale: acoperirea ariilor tematice ale domeniului.',
    'Assessment and measurement':
      'Cum AI îi evaluează pe învățăcei și, totodată, remodelează modul în care evaluăm sistemele AI și impactul lor.',
    'Equity, ethics, and responsible use':
      'Echitatea, accesul și responsabilitatea sunt centrale pentru AI în educație.',
  },
  empty: 'Încă nu există pagini de concepte.',
};

export default ro;
