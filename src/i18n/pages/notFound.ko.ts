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

const ko: NotFoundStrings = {
  title: '페이지를 찾을 수 없습니다',
  h1: '페이지를 찾을 수 없습니다',
  messageHtml:
    '요청하신 페이지를 찾을 수 없습니다. 이곳으로 연결된 링크가 오래되었거나 페이지 이름이 변경되었을 수 있습니다. <a href="/aied/">홈</a>에서 다시 시작할 수 있습니다.',
  searchHtml:
    '또는 아래에서 지식베이스 전체를 검색해 보세요. 모든 글, 개념, FAQ, 자료가 색인되어 있으며, 필터로 분야, 수준, 대상, 연구 방법별로 검색 범위를 좁힐 수 있습니다.',
};

export default ko;
