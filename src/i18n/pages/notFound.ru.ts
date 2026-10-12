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

const ru: NotFoundStrings = {
  title: 'Страница не найдена',
  h1: 'Страница не найдена',
  messageHtml:
    'Мы не смогли найти запрошенную вами страницу. Возможно, ссылка, по которой вы сюда перешли, устарела, или страницу переименовали. Вы можете начать заново с <a href="/aied/">главной страницы</a>.',
  searchHtml:
    'Или воспользуйтесь поиском по всей базе знаний ниже. Все статьи, концепции, вопросы FAQ и ресурсы проиндексированы, а фильтры позволяют сузить поиск по дисциплине, уровню, целевой аудитории или дизайну исследования.',
};

export default ru;
