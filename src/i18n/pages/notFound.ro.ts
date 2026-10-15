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

const ro: NotFoundStrings = {
  title: 'Pagină negăsită',
  h1: 'Pagină negăsită',
  messageHtml:
    'Nu am putut găsi pagina cerută. Este posibil ca linkul care te-a adus aici să fie depășit sau ca pagina să fi fost redenumită. Poți începe din nou de la <a href="/aied/">pagina principală</a>.',
  searchHtml:
    'Sau caută în întreaga bază de cunoștințe mai jos. Fiecare articol, concept, FAQ și resursă este indexat, iar filtrele restrâng căutarea după disciplină, nivel, public sau metodă de cercetare.',
};

export default ro;
