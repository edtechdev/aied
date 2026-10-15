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

const nl: JournalStrings = {
  title: 'Journaal',
  h1: 'Journaal',
  introTemplate:
    'Index in omgekeerd chronologische volgorde van alle {articles} artikelen, {concepts} concepten, {faqs} FAQ\'s en {resources} bronnen in de kennisbank. {rss}',
  rssLabel: 'Abonneer je op de RSS-feed voor de nieuwste toevoegingen.',
  pageSingular: 'pagina',
  pagePlural: 'pagina\'s',
};

export default nl;
