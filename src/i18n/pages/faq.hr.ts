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

const hr: FaqStrings = {
  title: 'FAQ',
  h1: 'Često postavljana pitanja',
  introHtml:
    'Ovaj odjeljak odgovara na česta pitanja o <strong>AI u edukaciji</strong> — što istraživanja pokazuju o tome kako AI utječe na poučavanje i učenje, te kako nastavnici, instruktori i dizajneri nastave mogu primijeniti te dokaze u praksi. Svaki odgovor izvlači nalaze iz istraživanja sažetih u ovoj bazi znanja, povezujući pitanje s relevantnim pojmovima i člancima za dublje čitanje.',
  assistantHtml:
    'Imate pitanje na koje ovdje nema odgovora? Pitajte vlastitog AI asistenta pomoću stranice <a href="/aied/ai">Upotreba ove baze znanja s vlastitim AI asistentom</a>, koja objašnjava kako usmjeriti agenta na cijeli katalog za utemeljene, citirane odgovore.',
  empty: 'Još nema FAQ-a.',
};

export default hr;
