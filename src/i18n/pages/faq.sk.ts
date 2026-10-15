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

const sk: FaqStrings = {
  title: 'Často kladené otázky',
  h1: 'Často kladené otázky',
  introHtml:
    'Táto sekcia odpovedá na bežné otázky o <strong>AI v edukácii</strong> — čo výskum hovorí o tom, ako AI ovplyvňuje výučbu a učenie sa, a ako pedagógovia, vyučujúci a dizajnéri výučby môžu tieto dôkazy uplatniť v praxi. Každá odpoveď destiluje zistenia z výskumu zhrnutého v tejto vedeckej databáze a spája otázku s príslušnými pojmami a článmi na hlbšie čítanie.',
  assistantHtml:
    'Máte otázku, na ktorú tu niet odpovede? Opýtajte sa svojho vlastného AI asistenta pomocou stránky <a href="/aied/ai">Použite túto vedeckú databázu so svojím vlastným AI asistentom</a>, ktorá ukazuje, ako nasmerovať agenta na úplný katalóg pre podložené, citované odpovede.',
  empty: 'Zatiaľ žiadne často kladené otázky.',
};

export default sk;
