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

const en: ConceptsStrings = {
  title: 'Concepts',
  h1: 'Concept pages',
  introHtml:
    'Every concept page on the site, in the same sections as the left sidebar. Each one says what an idea in AI and education means, what the research found about it, and which studies it draws on. <a href="/aied/concepts/ai-education/">AI in Education</a> is the umbrella that ties them together.',
  browseHtml:
    'The concept pages also come as an <a href="/aied/aied.epub">EPUB</a> or <a href="/aied/aied.pdf">PDF</a> for reading offline. To start from a question, a paper, a tool, a search, or your own assistant instead, see the <a href="/aied/faq">FAQ</a>, the <a href="/aied/journal">journal</a>, the <a href="/aied/resources">resources</a>, <a href="/aied/search">search</a>, or the <a href="/aied/ai">AI page</a>.',
  countTemplate: '{count} concept pages, grouped into {strands} sections.',
  empty: 'No concept pages yet.',
};

export default en;
