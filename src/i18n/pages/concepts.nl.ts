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

const nl: ConceptsStrings = {
  title: 'Concepten',
  h1: 'Concepten',
  introHtml:
    'Alle conceptpagina\'s van de site, in dezelfde secties als de linkerzijbalk. Elke pagina zegt wat een idee in AI en onderwijs betekent, wat het onderzoek erover vond en op welke studies ze steunt. <a href="/aied/concepts/ai-education/">AI in het onderwijs</a> is het overkoepelende concept dat ze verbindt.',
  browseHtml:
    'De conceptpagina\'s zijn er ook als <a href="/aied/aied.epub">EPUB</a> of <a href="/aied/aied.pdf">PDF</a> om offline te lezen. Wil je liever beginnen bij een vraag, een artikel, een tool, een zoekopdracht of je eigen assistent, kijk dan bij de <a href="/aied/faq">FAQ</a>, het <a href="/aied/journal">journaal</a>, de <a href="/aied/resources">bronnen</a>, <a href="/aied/search">zoeken</a> of de <a href="/aied/ai">AI-pagina</a>.',
  countTemplate: '{count} conceptpagina\'s, gegroepeerd in {strands} secties.',
  empty: 'Nog geen conceptpagina\'s.',
};

export default nl;
