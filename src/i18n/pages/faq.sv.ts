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

const sv: FaqStrings = {
  title: 'Vanliga frågor',
  h1: 'Vanliga frågor',
  introHtml:
    'Det här avsnittet besvarar vanliga frågor om <strong>AI i utbildningen</strong> — vad forskningen säger om hur AI påverkar undervisning och lärande, och hur lärare, instruktörer och utbildningsdesigners kan omsätta den evidensen i praktik. Varje svar destillerar resultat från den forskning som sammanfattas i den här kunskapsbasen och kopplar frågan till relevanta begrepp och artiklar för vidare läsning.',
  assistantHtml:
    'Har du en fråga som inte besvaras här? Fråga din egen AI-assistent med hjälp av sidan <a href="/aied/ai">Använd den här kunskapsbasen med din egen AI-assistent</a>, som visar hur du riktar en agent mot hela katalogen för grundade svar med källhänvisningar.',
  empty: 'Inga vanliga frågor ännu.',
};

export default sv;
