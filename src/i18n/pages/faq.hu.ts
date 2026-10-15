/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
}

const hu: FaqStrings = {
  title: 'GYIK',
  h1: 'Gyakran Ismételt Kérdések',
  introHtml:
    'Ez a szakasz a <strong>mesterséges intelligencia oktatási alkalmazásairól</strong> szóló gyakori kérdésekre ad választ — hogyan befolyásolja az AI a tanítást és a tanulást a kutatási eredmények szerint, és hogyan válthatják az oktatók, a tanárok és a tanulmánytervezők ezt a bizonyítékot gyakorlattá. Minden válasz ebben a tudásbázisban összefoglalt kutatási eredményekből építkezik, és a kérdést a mélyebb olvasáshoz vezető releváns fogalmakhoz és cikkekhez kapcsolja.',
  assistantHtml:
    'Van olyan kérdése, amelyre itt nem kap választ? Kérdezze meg a saját AI-asszisztensét a <a href=\"/aied/ai\">Tudásbázis használata a saját AI-asszisztensével</a> oldal segítségével, amely megmutatja, hogyan irányíthat egy ügynököt a teljes katalógusra megalapozott, hivatkozásos válaszokért.',
  empty: 'Még nincs GYIK.',
};

export default hu;
