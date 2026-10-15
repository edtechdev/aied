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

const nl: FaqStrings = {
  title: 'FAQ',
  h1: 'Veelgestelde vragen',
  introHtml:
    'Deze sectie beantwoordt veelgestelde vragen over <strong>AI in het onderwijs</strong> — wat het onderzoek zegt over hoe AI lesgeven en leren beïnvloedt, en hoe docenten, instructeurs en ontwerpers van onderwijs dat bewijs in de praktijk kunnen brengen. Elk antwoord destilleert resultaten uit het onderzoek dat in deze kennisbank is samengevat, en verbindt de vraag met de relevante concepten en artikelen voor verdere lectuur.',
  assistantHtml:
    'Staat je vraag er niet bij? Vraag het aan je eigen AI-assistent via de pagina <a href="/aied/ai">Gebruik deze kennisbank met je eigen AI-assistent</a>, die laat zien hoe je een agent op de volledige catalogus richt voor onderbouwde antwoorden met bronvermeldingen.',
  empty: 'Nog geen FAQ\'s.',
};

export default nl;
