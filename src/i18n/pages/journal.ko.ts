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

const ko: JournalStrings = {
  title: '저널',
  h1: '저널',
  introTemplate:
    '지식베이스에 수록된 문서 {articles}편, 개념 {concepts}개, FAQ {faqs}개, 리소스 {resources}개를 최신순으로 정리한 색인입니다. {rss}',
  rssLabel: '새로 추가된 항목을 RSS 피드로 구독하십시오.',
  pageSingular: '페이지',
  pagePlural: '페이지',
};

export default ko;