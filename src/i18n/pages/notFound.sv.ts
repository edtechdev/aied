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

const sv: NotFoundStrings = {
  title: 'Sidan hittades inte',
  h1: 'Sidan hittades inte',
  messageHtml:
    'Vi kunde inte hitta sidan du bad om. Länken som förde dig hit kan vara inaktuell, eller så kan sidan ha bytt namn. Du kan börja om från <a href="/aied/">startsidan</a>.',
  searchHtml:
    'Eller sök i hela kunskapsbasen nedan. Varje artikel, begrepp, vanlig fråga och resurs är indexerad, och filtren begränsar en sökning till ämnesområde, nivå, målgrupp eller forskningsmetod.',
};

export default sv;
