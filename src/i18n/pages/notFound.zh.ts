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

const zh: NotFoundStrings = {
  title: '找不到页面',
  h1: '找不到页面',
  messageHtml:
    '我们找不到您请求的页面。带您来到这里的链接可能已经过期，或者页面已被重命名。您可以从<a href="/aied/">首页</a>重新开始。',
  searchHtml:
    '也可以在下方搜索整个知识库。所有文章、概念、常见问题（FAQ）和资源都已建立索引，筛选器可按学科、学段、受众或研究方法缩小搜索范围。',
};

export default zh;
