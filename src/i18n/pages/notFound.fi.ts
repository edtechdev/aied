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

const fi: NotFoundStrings = {
  title: 'Sivua ei löytynyt',
  h1: 'Sivua ei löytynyt',
  messageHtml:
    'Emme löytäneet pyytämääsi sivua. Linkki, jota pitkin tulit tänne, saattaa olla vanhentunut, tai sivua on saatettu nimetä uudelleen. Voit aloittaa alusta <a href=\"/aied/\">etusivulta</a>.',
  searchHtml:
    'Tai hae koko tietopankista alta. Jokainen artikkeli, käsite, UKK ja resurssi on indeksoitu, ja suodattimet voivat rajata hakua tieteenalan, tason, kohderyhmän tai tutkimusmenetelmän mukaan.',
};

export default fi;
