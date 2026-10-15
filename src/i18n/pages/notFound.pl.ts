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

const pl: NotFoundStrings = {
  title: 'Nie znaleziono strony',
  h1: 'Nie znaleziono strony',
  messageHtml:
    'Nie mogliśmy znaleźć strony, o którą prosiłeś. Link, którym tu trafiłeś, może być nieaktualny, a strona mogła zostać przemianowana. Możesz zacząć od nowa od <a href="/aied/">strony głównej</a>.',
  searchHtml:
    'Albo przeszukaj całą bazę wiedzy poniżej. Zindeksowany jest każdy artykuł, pojęcie, FAQ i zasób, a filtry pozwalają zawęzić wyniki według dyscypliny, poziomu, odbiorców lub metody badawczej.',
};

export default pl;
