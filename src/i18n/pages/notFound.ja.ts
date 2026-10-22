/**
 * Copy for the 404 page (`/aied/404.html`). The page is otherwise the search
 * page, so the only strings it adds are the heading and the two ways out.
 */
export interface NotFoundStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** First paragraph. May contain inline HTML and links. */
  messageHtml: string;
  /** Second paragraph, pointing at the search form below. */
  searchHtml: string;
}

const ja: NotFoundStrings = {
  title: 'ページが見つかりません',
  h1: 'ページが見つかりません',
  messageHtml:
    'お探しのページは見つかりませんでした。ここに至ったリンクが古くなっているか、ページ名が変更された可能性があります。<a href="/aied/">ホーム</a>からやり直してください。',
  searchHtml:
    'または、下でナレッジベース全体を検索してください。すべての記事・概念・FAQ・リソースが検索対象で、フィルターで分野、レベル、対象、研究方法ごとに絞り込めます。',
};

export default ja;
