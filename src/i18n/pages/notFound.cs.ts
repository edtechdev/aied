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

const cs: NotFoundStrings = {
  title: 'Stránka nenalezena',
  h1: 'Stránka nenalezena',
  messageHtml:
    'Nemohli jsme najít stránku, o kterou jste požádali. Odkaz, kterým jste se sem dostali, může být zastaralý, nebo mohla být stránka přejmenována. Můžete začít znovu od <a href="/aied/">domovské stránky</a>.',
  searchHtml:
    'Nebo prohledejte celou znalostní bázi níže. Indexován je každý článek, pojem, FAQ a zdroj a filtry umožňují zúžit hledání podle oboru, úrovně, cílové skupiny nebo výzkumné metody.',
};

export default cs;
