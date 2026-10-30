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

const cs: FaqStrings = {
  title: 'FAQ',
  h1: 'Často kladené otázky',
  introHtml:
    'Tato sekce odpovídá na běžné otázky o <strong>AI ve vzdělávání</strong> — co výzkum říká o tom, jak AI ovlivňuje výuku a učení, a jak pedagogové, vyučující a návrháři výuky mohou tyto důkazy uvést do praxe. Každá odpověď destiluje zjištění z výzkumu shrnutého v této znalostní bázi a spojuje otázku s příslušnými pojmy a články pro hlubší čtení.',
  assistantHtml:
    'Máte otázku, na kterou tu není odpověď? Zeptejte se svého vlastního asistenta AI pomocí stránky <a href="/aied/ai">Použití této znalostní báze s vlastním asistentem AI</a>, která ukazuje, jak nasměrovat agenta na úplný katalog, aby odpovídal na základě zdrojů a citací.',
  empty: 'Zatím žádná FAQ.',
  sectionHeadings: {
    "Start here": "Začněte zde",
    "Course and institutional policy": "Politika kurzu a instituce",
    "Designing courses and activities": "Navrhování kurzů a aktivit",
    "Assessment, feedback and integrity": "Hodnocení, zpětná vazba a integrita",
    "How students learn and use AI": "Učení a používání AI studenty",
    "Particular learners, access and wellbeing": "Různí studenti, přístup a pohoda",
    "Careers and AI literacy": "Kariéra a gramotnost v oblasti AI",
    "Building and evaluating educational AI": "Stavba a hodnocení vzdělávací AI",
    "Research practice": "Výzkumná praxe",
  },
  sectionBlurbs: {
    "Start here": "Dvě široké otázky, které stojí za to si přečíst před těmi konkrétními, ať máte jakoukoli roli.",
    "Course and institutional policy": "Pro vyučující, kteří píší pravidla, jež budou studenti číst, a pro administrátory a pracovníky rozvoje výuky, kteří je nastavují na úrovni programu.",
    "Designing courses and activities": "Pro každého, kdo rozhoduje, kde AI vstoupí do úkolu, semestru nebo online kurzu, a pro vyučující, kteří chtějí zpět čas, který jim AI měla ušetřit.",
    "Assessment, feedback and integrity": "Největší skupina, protože právě tady je důkaz nejostřejší a následky dopadají na studijní záznam studenta.",
    "How students learn and use AI": "Pro otázky, co studenti skutečně získají, co mohou ztratit a jak udržet učení u nich.",
    "Particular learners, access and wellbeing": "Pro vyučující a podpůrné pracovníky, kteří přizpůsobují návrh tomu, kdo je skutečně v učebně, a pro administrátory, kteří myslí na ty, kdo tam nejsou.",
    "Careers and AI literacy": "Pro návrháře kurikula a vedoucí programů, kteří odpovídají studentům ptajícím se, k čemu to všechno je.",
    "Building and evaluating educational AI": "Pro vývojáře, návrháře výuky a výzkumníky, kteří nasazují AI tutora, simulaci nebo platformu do skutečného kurzu.",
    "Research practice": "Pro výzkumníky, kteří v tomto oboru podávají zprávy, recenzují nebo plánují práci.",
  },
};

export default cs;
