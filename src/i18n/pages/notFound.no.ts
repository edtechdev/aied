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

const no: NotFoundStrings = {
  title: 'Siden ble ikke funnet',
  h1: 'Siden ble ikke funnet',
  messageHtml:
    'Vi fant ikke siden du ba om. Lenken som førte deg hit kan være utdatert, eller siden kan ha fått nytt navn. Du kan starte på nytt fra <a href="/aied/">startsiden</a>.',
  searchHtml:
    'Eller søk i hele kunnskapsbasen nedenfor. Alle artikler, begreper, FAQ og ressurser er indeksert, og filtrene kan innsnevre søket etter fagområde, nivå, målgruppe eller studiedesign.',
};

export default no;
