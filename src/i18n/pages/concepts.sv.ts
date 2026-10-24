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

const sv: ConceptsStrings = {
  title: 'Begrepp',
  h1: 'Begrepp',
  introHtml:
    'Alla begreppssidor på webbplatsen, i samma avsnitt som i sidofältet till vänster. Varje sida säger vad en idé inom AI och utbildning innebär, vad forskningen kom fram till om den och vilka studier den bygger på. <a href="/aied/concepts/ai-education/">AI i utbildningen</a> är paraplyet som binder dem samman.',
  browseHtml:
    'Begreppssidorna finns också som <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a> för läsning offline. Vill du i stället börja från en fråga, en artikel, ett verktyg, en sökning eller din egen assistent, se <a href="/aied/faq">vanliga frågor</a>, <a href="/aied/journal">journalen</a>, <a href="/aied/resources">resurserna</a>, <a href="/aied/search">sökningen</a> eller <a href="/aied/ai">AI-sidan</a>.',
  countTemplate: '{count} begreppssidor, grupperade i {strands} avsnitt.',
  strandBlurbs: {
    'Foundations of AI in education':
      'Paraplyvyn över själva fältet: vad AI inom utbildningen är, hur det har utvecklats och de övergripande teman (AI-kompetens, samarbete mellan människa och AI, handlingskraft) som formar varje annan gren.',
    'Learning and instruction':
      'Hur AI stöder lärande och undervisning, genom de pedagogiker, lärandeteorier och processer riktade mot den lärande som AI verkar inom.',
    'Technologies and techniques':
      'Det tekniska lagret: de AI-modeller och metoder som driver utbildningstekniken, och de system för modellering av den lärande och handledning som bygger på dem.',
    'AI in the disciplines':
      'Hur AI tillämpas över akademiska ämnen och utbildningsnivåer: fältets täckning av ämnesområden.',
    'Assessment and measurement':
      'Hur AI både bedömer den lärande och förändrar hur vi utvärderar AI-system och deras påverkan.',
    'Equity, ethics, and responsible use':
      'Rättvisa, tillgång och ansvar är centrala för AI inom utbildningen.',
  },
  empty: 'Inga begreppssidor än.',
};

export default sv;
