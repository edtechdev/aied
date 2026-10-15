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

const bg: NotFoundStrings = {
  title: 'Страницата не е намерена',
  h1: 'Страницата не е намерена',
  messageHtml:
    'Не успяхме да намерим страницата, която търсите. Връзката, която ви е довела тук, може да е остаряла, или страницата може да е преименувана. Можете да започнете отначало от <a href="/aied/">началната страница</a>.',
  searchHtml:
    'Или потърсете в цялата база знания по-долу. Всички статии, понятия, ЧЗВ и ресурси са индексирани, а филтрите ограничават търсенето по дисциплина, ниво, аудитория или метод на изследване.',
};

export default bg;
