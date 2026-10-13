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

const uk: NotFoundStrings = {
  title: 'Сторінку не знайдено',
  h1: 'Сторінку не знайдено',
  messageHtml:
    'Не вдалося знайти сторінку, яку ви запросили. Можливо, посилання, що привело вас сюди, застаріло, або сторінку перейменовано. Можна почати спочатку з <a href="/aied/">домашньої сторінки</a>.',
  searchHtml:
    'Або пошукайте по всій базі знань нижче. Кожна стаття, концепція, поширене питання та ресурс проіндексовано, а фільтри звужують пошук за дисципліною, рівнем, аудиторією або методом дослідження.',
};

export default uk;
