/**
 * Copy for the journal page (`/aied/journal`): a reverse-chronological index of
 * everything added to the knowledge base. The entries come from the content
 * collections; the counts, labels and RSS line are here.
 */
export interface JournalStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /**
   * Intro sentence. `{articles}`, `{concepts}`, `{faqs}` and `{resources}` are
   * replaced with the current counts and `{rss}` with the feed link, so a
   * translation can put them in its own word order.
   */
  introTemplate: string;
  /** Text of the link to the RSS feed. */
  rssLabel: string;
  /** Word after a count of 1, e.g. "1 page". */
  pageSingular: string;
  /** Word after any other count, e.g. "12 pages". */
  pagePlural: string;
}

const cs: JournalStrings = {
  title: 'Deník',
  h1: 'Deník',
  introTemplate:
    'Index v obráceném chronologickém pořadí všech {articles} článků, {concepts} pojmů, {faqs} FAQ a {resources} zdrojů v znalostní bázi. {rss}',
  rssLabel: 'Přihlaste se k odběru RSS kanálu a sledujte nové přírůstky.',
  pageSingular: 'stránka',
  pagePlural: 'stránek',
};

export default cs;
