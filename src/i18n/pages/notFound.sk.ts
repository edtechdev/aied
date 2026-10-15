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

const sk: NotFoundStrings = {
  title: 'Stránka sa nenašla',
  h1: 'Stránka sa nenašla',
  messageHtml:
    'Stránku, ktorú ste požadovali, sa nám nepodarilo nájsť. Odkaz, ktorý vás sem priviedol, môže byť zastaraný, alebo stránka mohla byť premenovaná. Môžete začať znova z <a href="/aied/">domovskej stránky</a>.',
  searchHtml:
    'Alebo prehľadajte celú vedeckú databázu nižšie. Každý článok, pojem, často kladená otázka a zdroj je indexovaný a filtre zúžia vyhľadávanie podľa disciplíny, úrovne, cieľovej skupiny alebo výskumnej metódy.',
};

export default sk;
