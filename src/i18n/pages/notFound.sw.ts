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

const sw: NotFoundStrings = {
  title: 'Ukurasa Haupatikani',
  h1: 'Ukurasa Haupatikani',
  messageHtml:
    'Hatukuweza kupata ukurasa ulioomba. Kiungo kilichokuleta hapa kinaweza kuwa cha zamani, au ukurasa unaweza kuwa umebadilishwa jina. Unaweza kuanza upya kutoka <a href="/aied/">ukurasa wa nyumbani</a>.',
  searchHtml:
    'Au tafuta hifadhi yote ya maarifa hapa chini. Kila makala, dhana, FAQ na rasilimali imefanyiwa faharasa, na vichujio hupunguza utafutaji kwa fani, ngazi, hadhira au mbinu ya utafiti.',
};

export default sw;
