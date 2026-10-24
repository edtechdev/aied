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

const sv: ConceptsStrings = {
  title: 'Begrepp',
  h1: 'Begrepp',
  introHtml:
    'Alla begreppssidor på webbplatsen, i samma avsnitt som i sidofältet till vänster. Varje sida säger vad en idé inom AI och utbildning innebär, vad forskningen kom fram till om den och vilka studier den bygger på. <a href="/aied/concepts/ai-education/">AI i utbildningen</a> är paraplyet som binder dem samman.',
  browseHtml:
    'Begreppssidorna finns också som <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a> för läsning offline. Vill du i stället börja från en fråga, en artikel, ett verktyg, en sökning eller din egen assistent, se <a href="/aied/faq">vanliga frågor</a>, <a href="/aied/journal">journalen</a>, <a href="/aied/resources">resurserna</a>, <a href="/aied/search">sökningen</a> eller <a href="/aied/ai">AI-sidan</a>.',
  countTemplate: '{count} begreppssidor, grupperade i {strands} avsnitt.',
  empty: 'Inga begreppssidor än.',
};

export default sv;
