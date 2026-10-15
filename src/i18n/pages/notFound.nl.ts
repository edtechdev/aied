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

const nl: NotFoundStrings = {
  title: 'Pagina niet gevonden',
  h1: 'Pagina niet gevonden',
  messageHtml:
    'We konden de pagina die je vroeg niet vinden. De link die je hierheen heeft gebracht kan verouderd zijn, of de pagina kan hernoemd zijn. Je kunt opnieuw beginnen bij de <a href="/aied/">startpagina</a>.',
  searchHtml:
    'Of doorzoek hieronder de hele kennisbank. Elk artikel, elk concept, elke FAQ en elke bron is geïndexeerd, en de filters verfijnen een zoekopdracht op vakgebied, niveau, doelgroep of onderzoeksmethode.',
};

export default nl;
