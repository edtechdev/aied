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

const hu: NotFoundStrings = {
  title: 'Az oldal nem található',
  h1: 'Az oldal nem található',
  messageHtml:
    'Nem találtuk meg a kért oldalt. Előfordulhat, hogy a hozzánk irányító link elavult, vagy az oldalt átneveztük. Újrakezdheti a <a href=\"/aied/\">kezdőlapról</a>.',
  searchHtml:
    'Vagy keressen az egész tudásbázisban az alábbi űrlappal. Minden cikk, fogalom, GYIK és forrás indexelve van, és a szűrők szakterület, szint, közönség vagy kutatási módszer szerint szűkítik a keresést.',
};

export default hu;
