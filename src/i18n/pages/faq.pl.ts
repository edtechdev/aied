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

const pl: FaqStrings = {
  title: 'FAQ',
  h1: 'Często zadawane pytania',
  introHtml:
    'Ta sekcja odpowiada na najczęstsze pytania o <strong>AI w edukacji</strong> — co badania mówią o tym, jak AI wpływa na nauczanie i uczenie się, i jak nauczyciele, wykładowcy i projektanci dydaktyki mogą wykorzystać te dowody w praktyce. Każda odpowiedź destyluje wyniki badań streszczonych w tej bazie wiedzy, łącząc pytanie z odpowiednimi pojęciami i artykułami do pogłębionej lektury.',
  assistantHtml:
    'Masz pytanie, na które tu nie ma odpowiedzi? Zapytaj własnego asystenta AI, korzystając ze strony <a href="/aied/ai">Korzystanie z tej bazy wiedzy z własnym asystentem AI</a>, która pokazuje, jak skierować agenta do pełnego katalogu, aby odpowiadał w oparciu o źródła i cytaty.',
  empty: 'Brak jeszcze FAQ.',
};

export default pl;
