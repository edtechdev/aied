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

const hr: NotFoundStrings = {
  title: 'Stranica nije pronađena',
  h1: 'Stranica nije pronađena',
  messageHtml:
    'Nismo mogli pronaći stranicu koju ste tražili. Poveznica koja vas je dovela ovdje možda je zastarjela, ili je stranica preimenovana. Možete početi ispočetka s <a href="/aied/">početne stranice</a>.',
  searchHtml:
    'Ili pretražite cijelu bazu znanja u nastavku. Svaki članak, pojam, FAQ i resurs su indeksirani, a filtri sužavaju pretragu po disciplini, razini, publici ili metodi istraživanja.',
};

export default hr;
