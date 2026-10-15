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

const no: FaqStrings = {
  title: 'FAQ',
  h1: 'Ofte stilte spørsmål',
  introHtml:
    'Denne delen besvarer vanlige spørsmål om <strong>AI i utdanning</strong> — hva forskningen sier om hvordan AI påvirker undervisning og læring, og hvordan lærere, instruktører og instruksjonsdesignere kan omsette den kunnskapen til praksis. Hvert svar destillerer funn fra forskningen som er oppsummert i denne kunnskapsbasen, og kobler spørsmålet til relevante begreper og artikler for videre lesing.',
  assistantHtml:
    'Har du et spørsmål som ikke er besvart her? Spør din egen AI-assistent via siden <a href="/aied/ai">Bruk denne kunnskapsbasen med din egen AI-assistent</a>, som viser hvordan du peker en agent mot hele katalogen for å få forankrede svar med kilder.',
  empty: 'Ingen FAQ ennå.',
};

export default no;
