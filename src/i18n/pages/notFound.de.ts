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

const de: NotFoundStrings = {
  title: 'Seite nicht gefunden',
  h1: 'Seite nicht gefunden',
  messageHtml:
    'Wir konnten die von Ihnen angeforderte Seite nicht finden. Der Link, der Sie hierher geführt hat, ist möglicherweise veraltet, oder die Seite wurde umbenannt. Sie können von der <a href="/aied/">Startseite</a> aus neu beginnen.',
  searchHtml:
    'Oder durchsuchen Sie unten die gesamte Wissensbasis. Jeder Artikel, jedes Konzept, jede FAQ und jede Ressource ist erfasst, und die Filter grenzen eine Suche nach Fachgebiet, Stufe, Zielgruppe oder Forschungsmethode ein.',
};

export default de;
