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
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const sk: FaqStrings = {
  title: 'Často kladené otázky',
  h1: 'Často kladené otázky',
  introHtml:
    'Táto sekcia odpovedá na bežné otázky o <strong>AI v edukácii</strong> — čo výskum hovorí o tom, ako AI ovplyvňuje výučbu a učenie sa, a ako pedagógovia, vyučujúci a dizajnéri výučby môžu tieto dôkazy uplatniť v praxi. Každá odpoveď destiluje zistenia z výskumu zhrnutého v tejto vedeckej databáze a spája otázku s príslušnými pojmami a článmi na hlbšie čítanie.',
  assistantHtml:
    'Máte otázku, na ktorú tu niet odpovede? Opýtajte sa svojho vlastného AI asistenta pomocou stránky <a href="/aied/ai">Použite túto vedeckú databázu so svojím vlastným AI asistentom</a>, ktorá ukazuje, ako nasmerovať agenta na úplný katalóg pre podložené, citované odpovede.',
  empty: 'Zatiaľ žiadne často kladené otázky.',
  sectionHeadings: {
    "Start here": "Začnite tu",
    "Course and institutional policy": "Politika predmetu a inštitúcie",
    "Designing courses and activities": "Navrhovanie kurzov a aktivít",
    "Assessment, feedback and integrity": "Hodnotenie, spätná väzba a integrita",
    "How students learn and use AI": "Učenie a používanie AI študentmi",
    "Particular learners, access and wellbeing": "Špecifickí študenti, prístup a pohoda",
    "Careers and AI literacy": "Kariéra a AI gramotnosť",
    "Building and evaluating educational AI": "Tvorba a hodnotenie vzdelávacej AI",
    "Research practice": "Výskumná prax",
  },
  sectionBlurbs: {
    "Start here": "Dve široké otázky, ktoré stoja za prečítanie pred tými konkrétnymi, bez ohľadu na to, akú rolu máte.",
    "Course and institutional policy": "Pre vyučujúcich, ktorí píšu pravidlá, ktoré budú študenti čítať, a pre administrátorov a pracovníkov rozvoja výučby, ktorí ich nastavujú na úrovni programu.",
    "Designing courses and activities": "Pre každého, kto rozhoduje, kde AI vstúpi do zadania, semestra alebo online kurzu, a pre vyučujúcich, ktorí chcú späť čas, ktorý im AI mala ušetriť.",
    "Assessment, feedback and integrity": "Najväčšia skupina, pretože práve tu je dôkaz najostrejší a následky dopadajú na študijný záznam študenta.",
    "How students learn and use AI": "Pre otázky, čo študenti skutočne získajú, čo môžu stratiť a ako udržať učenie u nich.",
    "Particular learners, access and wellbeing": "Pre vyučujúcich a podporných pracovníkov, ktorí prispôsobujú návrh tomu, kto je skutočne v triede, a pre administrátorov, ktorí myslia na tých, ktorí tam nie sú.",
    "Careers and AI literacy": "Pre tvorcov kurikula a vedúcich programov, ktorí odpovedajú študentom, ktorí sa pýtajú, načo je to všetko dobré.",
    "Building and evaluating educational AI": "Pre vývojárov, dizajnérov výučby a výskumníkov, ktorí nasadzujú AI tútora, simuláciu alebo platformu do skutočného kurzu.",
    "Research practice": "Pre výskumníkov, ktorí v tejto oblasti podávajú správy, recenzujú alebo plánujú prácu.",
  },
};

export default sk;
