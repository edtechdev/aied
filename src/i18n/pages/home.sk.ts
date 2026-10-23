/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const sk: HomeStrings = {
  title: 'Domov',
  h1: 'Vedecká databáza o AI v edukácii',
  introHtml: `Vitajte vo vedeckej databáze o AI v edukácii, slobodnom zdroji vo verejnej doméne o <a href="/aied/concepts/ai-education/">umelej inteligencii v edukácii</a> pre ľudí, ktorí učia, študujú, navrhujú alebo spravujú. Zhrňuje a syntetizuje nedávny vzdelávací výskum s otvoreným prístupom. Stránky píše a aktualizuje agent AI s redakčným usmernením od vývojára webu.`,
  navHeading: 'Orientácia na webe',
  navHtml: `Prehliadajte index v ľavom bočnom paneli, ktorý je usporiadaný po vláknach, alebo <a href="/aied/search">prehľadajte</a> tému. Stránky článkov zhrňujú jednu prácu do jej účelu, metód a zistení; stránky pojmov zhromažďujú to, čo výskum hovorí o jednej myšlienke, a odkazujú na štúdie, ktoré sú za ňou. Ak chcete začať od otázky, <a href="/aied/faq">často kladené otázky</a> pokrývajú to, na čo sa návštevníci pýtajú ako prví, napríklad politiku AI v kurze alebo to, či používať detektory AI. Ak chcete začať od nástroja, <a href="/aied/resources">stránka zdrojov</a> uvádza bezplatné nástroje a kolekcie, s uvedením, kto každý z nich vytvoril a koľko stojí. Mapa vyššie zoskupuje oblasť do dvanástich vlákien, pričom <a href="/aied/concepts/ai-education/">AI v edukácii</a> je centrálny uzol.`,
  chatHeading: 'Chatujte s vedeckou databázou',
  chatHtml: `Celá vedecká databáza je publikovaná aj ako strojovo čitateľné súbory, takže na ňu môžete nasmerovať AI chatbota alebo agenta a získať odpovede, ktoré citujú stránky. <a href="/aied/ai">Výzvy sú tu</a>. Nové stránky pribúdajú v <a href="/aied/journal">zozname noviniek</a>, ktorý má <a href="/aied/rss.xml">RSS kanál</a>. Na čítanie offline si stiahnite <a href="/aied/aied.epub">EPUB</a> alebo <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Odporúčané východiská podľa cieľovej skupiny',
  startingIntro: 'Začnite skupinou, ktorá zodpovedá vašej role.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Základné pojmy',
      html: `<a href="/aied/concepts/ai-literacy/">Počítačová gramotnosť v oblasti AI</a>, <a href="/aied/concepts/misconceptions/">mylné predstavy o AI</a>, <a href="/aied/concepts/agentic-ai/">agentné AI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitívne odľahčenie</a> a <a href="/aied/concepts/interpreting-and-applying-aied-research/">ako interpretovať a aplikovať tento výskum</a>, vrátane toho, prečo jedna štúdia zriedka rozhodne otázku.`,
    },
    {
      id: 'instructors',
      heading: 'Vyučujúci',
      html: `<a href="/aied/concepts/teacher-role/">Meniaca sa rola vyučujúceho</a>, <a href="/aied/concepts/learning-design/">návrh učenia</a>, <a href="/aied/concepts/assessment/">hodnotenie</a>, <a href="/aied/concepts/feedback/">spätná väzba</a>, <a href="/aied/concepts/academic-integrity/">akademická integrita</a>, <a href="/aied/concepts/framing-ai-use-for-students/">rámcovanie používania AI</a> a <a href="/aied/concepts/reducing-ai-misuse/">znižovanie zneužívania</a>. Nástroje a príklady špecifické pre váš predmet nájdete na stránke <a href="/aied/concepts/discipline-specific-aied/">AI vo vašom vlastnom odbore</a>.`,
    },
    {
      id: 'developers',
      heading: 'Vývojári',
      html: `<a href="/aied/concepts/educational-technology-developers/">Tvorba pre edukáciu</a>, <a href="/aied/concepts/ai-technologies/">technológie pod tým</a>, <a href="/aied/concepts/intelligent-tutoring/">inteligentné doučovanie</a>, <a href="/aied/concepts/multimodal/">multimodálne AI</a>, <a href="/aied/concepts/student-modeling/">modelovanie študenta</a> a <a href="/aied/concepts/llm-training-and-fine-tuning/">trénovanie a prispôsobenie modella na výučbu</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Správcovia',
      html: `<a href="/aied/concepts/administrator/">Rola správcu</a>, <a href="/aied/concepts/governance/">riadenie AI</a>, <a href="/aied/concepts/educational-policy-ai/">inštitucionálna politika</a>, <a href="/aied/concepts/legal-issues-and-risks/">právne otázky a riziká</a> a <a href="/aied/concepts/change-management/">riadenie zmien</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Výskumníci',
      html: `<a href="/aied/concepts/research-methods-aied/">Výskumné metódy v AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teórie a rámce</a>, <a href="/aied/concepts/ai-ed-evaluation/">hodnotenie intervencie AI v edukácii</a>, <a href="/aied/concepts/educational-measurement/">edukačné meranie</a>, <a href="/aied/concepts/learning-gains/">meranie vzdelávacích výnosov</a> a <a href="/aied/concepts/limitations-in-aied-research/">cezotázkové limity tejto dôkaznej základne</a>.`,
    },
  ],
  statsHeading: 'Čo je vo vedeckej databáze',
  statsIntro:
    'Každá stránka je datovaná a nižšie uvedené počty odzrkadľujú, čo je práve teraz publikované; dátum „naposledy aktualizované“ na konci zoznamu je najnovšia úprava.',
  conceptMap: {
    title: 'Konceptuálna mapa AI v edukácii',
    desc:
      'Radiálna mapa s AI v edukácii v strede, prepojená s dvanástimi pojmami najvyššej úrovne: ' +
      'Modelovanie, Učenie, Rovnosť, Spätná väzba, Počítačová gramotnosť v oblasti AI, Hodnotenie, Disciplíny, ' +
      'Pedagogika, Etika, Technológie, Hodnotenie AIED a Výskum.',
    navLabel: 'Pojmy AI v edukácii',
    center: 'AI v edukácii',
    nodes: {
      'student-modeling': 'Modelovanie',
      'learning-theories': 'Učenie',
      'equity-in-ai-education': 'Rovnosť',
      feedback: 'Spätná väzba',
      'ai-literacy': 'Počítačová gramotnosť v oblasti AI',
      assessment: 'Hodnotenie',
      'discipline-specific-aied': 'Disciplíny',
      pedagogy: 'Pedagogika',
      ethics: 'Etika',
      'ai-technologies': 'Technológie',
      'ai-ed-evaluation': 'Hodnotenie AIED',
      'research-methods-aied': 'Výskum',
    },
  },
  toc: [
    { text: 'Orientácia na webe', slug: 'navigating-the-site', depth: 2 },
    { text: 'Chatujte s vedeckou databázou', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Odporúčané východiská podľa cieľovej skupiny', slug: 'starting-points', depth: 2 },
    { text: 'Základné pojmy', slug: 'essential-concepts', depth: 3 },
    { text: 'Vyučujúci', slug: 'instructors', depth: 3 },
    { text: 'Vývojári', slug: 'developers', depth: 3 },
    { text: 'Správcovia', slug: 'administrators', depth: 3 },
    { text: 'Výskumníci', slug: 'researchers', depth: 3 },
    { text: 'Čo je vo vedeckej databáze', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default sk;
