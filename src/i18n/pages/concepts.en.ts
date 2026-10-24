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
  /** What this page is, and how to read it. May contain inline HTML and links. */
  introHtml: string;
  /** How a concept page is structured. */
  structureHtml: string;
  /** Where to go instead, and how this list relates to the sidebar. */
  browseHtml: string;
  /** Count line above the strands. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const en: ConceptsStrings = {
  title: 'Concepts',
  h1: 'Concept pages',
  introHtml:
    'Concept pages are the synthesis layer of this knowledge base. Each one takes a single idea in AI and education, gathers what the research summarized on the site says about it, and links to the studies behind every claim. This page lists all of them, in the same sections and groups as the index in the left sidebar, so a section can be read straight through or a single page picked out and linked to directly. <a href="/aied/concepts/ai-education/">AI in Education</a> is the umbrella page that ties the strands together.',
  structureHtml:
    'Every concept page is laid out the same way. A short definition at the top says what the idea means in this field and where its boundaries are. Questions to consider follow, then an introduction, then sections that organize what the studies found: which uses help learning, which displace it, for whom, at what level, and where the evidence thins out. Each page ends with the concepts it sits beside and the article summaries it draws on, so a claim can be traced back to the paper behind it. Pages are revised as new studies are ingested rather than frozen at the date they were written, which is why the updated date on a page is usually later than its created date.',
  browseHtml:
    'A page that spans several sections sits under the section that owns it, so browse outward from the closest fit rather than expecting the same page under every heading. To start from a question instead, the <a href="/aied/faq">FAQ</a> answers what visitors ask first. To start from a paper, the <a href="/aied/journal">journal</a> lists every summary by date, and <a href="/aied/search">search</a> filters by strand, purpose, level and audience.',
  countTemplate: '{count} concept pages, grouped into {strands} sections.',
  empty: 'No concept pages yet.',
};

export default en;
