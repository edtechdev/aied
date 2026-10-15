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

const bn: JournalStrings = {
  title: 'জার্নাল',
  h1: 'জার্নাল',
  introTemplate:
    'নলেজ বেসের সব {articles}টি নিবন্ধ, {concepts}টি ধারণা, {faqs}টি প্রশ্নোত্তর ও {resources}টি রিসোর্সের বিপরীত-কালানুক্রমিক সূচক। {rss}',
  rssLabel: 'নতুন যোগ হওয়ার জন্য RSS ফিড সাবস্ক্রাইব করুন।',
  pageSingular: 'পৃষ্ঠা',
  pagePlural: 'পৃষ্ঠা',
};

export default bn;
