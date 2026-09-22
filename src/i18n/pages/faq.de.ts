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

const de: FaqStrings = {
  title: 'FAQ',
  h1: 'Häufig gestellte Fragen',
  introHtml:
    'Dieser Abschnitt beantwortet häufige Fragen zu <strong>KI in der Bildung</strong> – dazu, was die Forschung über die Wirkung von KI auf Lehren und Lernen sagt und wie Lehrende, Dozierende und Instructional Designer diese Belege in die Praxis umsetzen können. Jede Antwort verdichtet Ergebnisse der Forschung, die in dieser Wissensbasis zusammengefasst ist, und verknüpft die Frage mit den relevanten Konzepten und Artikeln für eine vertiefte Lektüre.',
  assistantHtml:
    'Sie haben eine Frage, die hier nicht beantwortet wird? Stellen Sie sie Ihrem eigenen KI-Assistenten mit der Seite <a href="/aied/ai">Diese Wissensbasis mit Ihrem eigenen KI-Assistenten nutzen</a>, die zeigt, wie Sie einen Agenten auf den vollständigen Katalog richten, um belegte Antworten mit Quellenangaben zu erhalten.',
  empty: 'Noch keine FAQs.',
};

export default de;