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

const vi: JournalStrings = {
  title: 'Nhật ký',
  h1: 'Nhật ký',
  introTemplate:
    'Chỉ mục theo thứ tự thời gian ngược của tất cả {articles} bài viết, {concepts} khái niệm, {faqs} FAQ và {resources} tài nguyên trong cơ sở tri thức. {rss}',
  rssLabel: 'Đăng ký nguồn cấp RSS để nhận các bổ sung mới nhất.',
  pageSingular: 'trang',
  pagePlural: 'trang',
};

export default vi;
