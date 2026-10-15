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

const da: NotFoundStrings = {
  title: 'Siden blev ikke fundet',
  h1: 'Siden blev ikke fundet',
  messageHtml:
    'Vi kunne ikke finde den side, du bad om. Det link, der førte dig hertil, kan være forældet, eller siden kan have skiftet navn. Du kan starte forfra fra <a href=\"/aied/\">forsiden</a>.',
  searchHtml:
    'Eller søg i hele vidensbasen nedenfor. Hver artikel, hvert begreb, hver FAQ og hver ressource er indekseret, og filtrene indsnævrer en søgning efter fag, niveau, målgruppe eller forskningsmetode.',
};

export default da;
