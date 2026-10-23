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

const cs: HomeStrings = {
  title: 'Domů',
  h1: 'Znalostní báze AI ve vzdělávání',
  introHtml: `Vítejte ve znalostní bázi AI ve vzdělávání, volně dostupném zdroji ve veřejné sféře o <a href="/aied/concepts/ai-education/">umělé inteligenci ve vzdělávání</a>, určeném lidem, kteří učí, studují, navrhují ji nebo spravují. Shrnuje a syntetizuje aktuální vzdělávací výzkum s otevřeným přístupem. Stránky píše a aktualizuje AI agent s redakčním vedením od vývojáře webu.`,
  navHeading: 'Orientace na webu',
  navHtml: `Prohlédněte si index v levém postranním panelu, uspořádaný podle témat, nebo <a href="/aied/search">prohledejte</a> nějaké téma. Stránky článků shrnují jeden výzkum do jeho cíle, metod a zjištění; stránky pojmů shromažďují, co výzkum říká o jednom tématu, a odkazují studie za ním. Chcete-li začít od otázky, <a href="/aied/faq">FAQ</a> pokrývá to, na co se návštěvníci ptají nejčastěji, například zásady AI v kurzu nebo zda používat detektory AI. Chcete-li začít od nástroje, <a href="/aied/resources">stránka zdrojů</a> uvádí bezplatné nástroje a sbírky, u každého je uvedeno, kdo jej vytvořil a kolik stojí. Mapa výše seskupuje obor do dvanácti témat a <a href="/aied/concepts/ai-education/">AI ve vzdělávání</a> je jejím centrálním uzlem.`,
  chatHeading: 'Chat se znalostní bází',
  chatHtml: `Celá znalostní báze je publikována i jako strojově čitelné soubory, takže k ní můžete nasměrovat AI chatbota nebo agenta a dostat odpovědi, které citují stránky. <a href="/aied/ai">Výzvy jsou zde</a>. Nové stránky přibývají v <a href="/aied/journal">deníku</a>, který má <a href="/aied/rss.xml">RSS kanál</a>. Pro čtení offline si stáhněte <a href="/aied/aied.epub">EPUB</a> nebo <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Doporučená východiska podle cílové skupiny',
  startingIntro: 'Začněte skupinou, která odpovídá vaší roli.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Základní pojmy',
      html: `<a href="/aied/concepts/ai-literacy/">AI gramotnost</a>, <a href="/aied/concepts/misconceptions/">mylné představy o AI</a>, <a href="/aied/concepts/agentic-ai/">agentní AI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitivní odlehčení</a> a <a href="/aied/concepts/interpreting-and-applying-aied-research/">jak interpretovat a aplikovat tento výzkum</a>, včetně toho, proč jedna studie otázku jen málokdy rozhodne.`,
    },
    {
      id: 'instructors',
      heading: 'Vyučující',
      html: `<a href="/aied/concepts/teacher-role/">Měnící se role učitele</a>, <a href="/aied/concepts/learning-design/">návrh výuky</a>, <a href="/aied/concepts/assessment/">hodnocení</a>, <a href="/aied/concepts/feedback/">zpětná vazba</a>, <a href="/aied/concepts/academic-integrity/">akademická integrita</a>, <a href="/aied/concepts/framing-ai-use-for-students/">rámování používání AI</a> a <a href="/aied/concepts/reducing-ai-misuse/">omezování zneužívání</a>. Nástroje a příklady pro váš obor najdete v <a href="/aied/concepts/discipline-specific-aied/">AI ve vašem oboru</a>.`,
    },
    {
      id: 'developers',
      heading: 'Vývojáři',
      html: `<a href="/aied/concepts/educational-technology-developers/">Tvorba pro vzdělávání</a>, <a href="/aied/concepts/ai-technologies/">technologie pod nimi</a>, <a href="/aied/concepts/intelligent-tutoring/">inteligentní výuka</a>, <a href="/aied/concepts/multimodal/">multimodální AI</a>, <a href="/aied/concepts/student-modeling/">modelování žáka</a> a <a href="/aied/concepts/llm-training-and-fine-tuning/">trénování a adaptace modelu pro výuku</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administrátoři',
      html: `<a href="/aied/concepts/administrator/">Role administrátora</a>, <a href="/aied/concepts/governance/">vládnutí AI</a>, <a href="/aied/concepts/educational-policy-ai/">institucionální politika</a>, <a href="/aied/concepts/legal-issues-and-risks/">právní otázky a rizika</a> a <a href="/aied/concepts/change-management/">management změn</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Badatelé',
      html: `<a href="/aied/concepts/research-methods-aied/">Výzkumné metody v AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teorie a rámce</a>, <a href="/aied/concepts/ai-ed-evaluation/">hodnocení intervence AI ve vzdělávání</a>, <a href="/aied/concepts/educational-measurement/">vzdělávací měření</a>, <a href="/aied/concepts/learning-gains/">měření pokroku v učení</a> a <a href="/aied/concepts/limitations-in-aied-research/">obecné limity této důkazní báze</a>.`,
    },
  ],
  statsHeading: 'Co znalostní báze obsahuje',
  statsIntro:
    'Každá stránka je datována a údaje níže odrážejí, co je publikováno právě teď; datum „poslední aktualizace“ na konci seznamu je nejnovější úprava.',
  conceptMap: {
    title: 'Mapa pojmů AI ve vzdělávání',
    desc:
      'Radiální mapa s AI ve vzdělávání ve středu, spojená s dvanácti základními pojmy: ' +
      'Modelování, Učení, Rovnost, Zpětná vazba, AI gramotnost, Hodnocení, Obory, Pedagogika, ' +
      'Etika, Technologie, Hodnocení AIEd a Výzkum.',
    navLabel: 'Pojmy AI ve vzdělávání',
    center: 'AI ve vzdělávání',
    nodes: {
      'student-modeling': 'Modelování',
      'learning-theories': 'Učení',
      'equity-in-ai-education': 'Rovnost',
      feedback: 'Zpětná vazba',
      'ai-literacy': 'AI gramotnost',
      assessment: 'Hodnocení',
      'discipline-specific-aied': 'Obory',
      pedagogy: 'Pedagogika',
      ethics: 'Etika',
      'ai-technologies': 'Technologie',
      'ai-ed-evaluation': 'Hodnocení AIEd',
      'research-methods-aied': 'Výzkum',
    },
  },
  toc: [
    { text: 'Orientace na webu', slug: 'navigating-the-site', depth: 2 },
    { text: 'Chat se znalostní bází', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Doporučená východiska podle cílové skupiny', slug: 'starting-points', depth: 2 },
    { text: 'Základní pojmy', slug: 'essential-concepts', depth: 3 },
    { text: 'Vyučující', slug: 'instructors', depth: 3 },
    { text: 'Vývojáři', slug: 'developers', depth: 3 },
    { text: 'Administrátoři', slug: 'administrators', depth: 3 },
    { text: 'Badatelé', slug: 'researchers', depth: 3 },
    { text: 'Co znalostní báze obsahuje', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default cs;
