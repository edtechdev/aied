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

const zh: JournalStrings = {
  title: '日志',
  h1: '日志',
  introTemplate:
    '本知识库全部 {articles} 篇文章、{concepts} 个概念、{faqs} 条常见问题和 {resources} 个资源的倒序索引。{rss}',
  rssLabel: '订阅 RSS，获取最新增补内容。',
  pageSingular: '个页面',
  pagePlural: '个页面',
};

export default zh;