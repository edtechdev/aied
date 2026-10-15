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

const ro: FaqStrings = {
  title: 'FAQ',
  h1: 'Întrebări frecvente',
  introHtml:
    'Această secțiune răspunde la întrebări frecvente despre <strong>inteligența artificială în educație</strong> — ce spune cercetarea despre modul în care AI afectează predarea și învățarea, și cum pot educatorii, cadrele didactice și designerii instrucționali să pună acele dovezi în practică. Fiecare răspuns distilează concluzii din cercetarea rezumată în această bază de cunoștințe, legând întrebarea de conceptele și articolele relevante pentru aprofundare.',
  assistantHtml:
    'Ai o întrebare la care nu se răspunde aici? Întreabă-ți propriul asistent AI folosind pagina <a href="/aied/ai">Folosește această bază de cunoștințe cu propriul asistent AI</a>, care arată cum să îndrepți un agent către catalogul complet pentru răspunsuri fundamentate și citate.',
  empty: 'Niciun FAQ încă.',
};

export default ro;
