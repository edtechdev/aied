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

const hu: JournalStrings = {
  title: 'Napló',
  h1: 'Napló',
  introTemplate:
    'A tudásbázisban lévő összes {articles} cikk, {concepts} fogalom, {faqs} GYIK és {resources} forrás fordított időrendű indexe. {rss}',
  rssLabel: 'Iratkozzon fel az RSS-hírcsatornára a legújabb kiegészítésekért.',
  pageSingular: 'oldal',
  pagePlural: 'oldal',
};

export default hu;
