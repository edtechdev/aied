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

const en: NotFoundStrings = {
  title: 'Page Not Found',
  h1: 'Page Not Found',
  messageHtml:
    'We could not find the page you asked for. The link that brought you here may be out of date, or the page may have been renamed. You can start again from the <a href="/aied/">home page</a>.',
  searchHtml:
    'Or search the whole knowledge base below. Every article, concept, FAQ and resource is indexed, and the filters narrow a search by discipline, level, audience or research method.',
};

export default en;