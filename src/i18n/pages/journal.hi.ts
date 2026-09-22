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

const hi: JournalStrings = {
  title: 'जर्नल',
  h1: 'जर्नल',
  introTemplate:
    'ज्ञान आधार में {articles} लेख, {concepts} अवधारणाएँ, {faqs} सामान्य प्रश्न और {resources} संसाधन का उल्टे कालक्रम में सूचकांक। {rss}',
  rssLabel: 'नई प्रविष्टियों के लिए RSS फ़ीड की सदस्यता लें।',
  pageSingular: 'पृष्ठ',
  pagePlural: 'पृष्ठ',
};

export default hi;