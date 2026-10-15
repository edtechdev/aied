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
  introHtml: `Vítejte v <strong>znalostní bázi AI ve vzdělávání</strong> — volně dostupném zdroji v <a href="/aied/concepts/ai-education/">veřejné sféře o umělé inteligenci ve vzdělávání</a>, určeném lidem, kteří učí, studují, navrhují ji nebo spravují. Shrnuje aktuální výzkum s otevřeným přístupem do krátkých, strukturovaných stránek, které můžete přečíst a podle nich jednat. Poznámka k jejímu vzniku: stránky generuje a aktualizuje AI agent s redakčním vedením od vývojáře webu. Každý údaj uvádí studii, na které stojí, takže zdroje můžete ověřit.`,
  navHeading: 'Orientace na webu',
  navHtml: `Prohlédněte si index podle témat v levém postranním panelu a uvidíte, jak je obor uspořádán, nebo <a href="/aied/search">prohledejte</a> celou znalostní bázi, pokud už máte konkrétní téma na mysli. Stránky článků shrnují jeden výzkum do jeho cíle, metod a zjištění, s úplnou citací a odkazy na související práce; stránky pojmů shromažďují, co výzkum říká o jednom tématu, a odkazují studie za ním. Pokud chcete raději začít od otázky, <a href="/aied/faq">index FAQ</a> shromažďuje ty, na které se návštěvníci ptají nejčastěji, od zásad AI v kurzu až po to, zda používat detektory AI; pokud chcete raději začít od nástroje, <a href="/aied/resources">stránka zdrojů</a> uvádí bezplatné nástroje, sbírky a instrumenty, které můžete rovnou použít, přičemž každý uvádí, kdo jej vytvořil a kolik stojí. Mapa pojmů výše ukazuje, co s čím souvisí; <a href="/aied/concepts/ai-education/">AI ve vzdělávání</a> je stránka mapy za ní, seskupující pojmy do zhruba tuctu nadřazených témat.`,
  chatHeading: 'Chat se znalostní bází',
  chatHtml: `Vše zde je publikováno i jako strojově čitelné soubory, takže můžete nasměrovat svého preferovaného AI chatbota nebo agenta na znalostní bázi a dostat odpovědi, které ji citují místo hádání — <a href="/aied/ai">výzvy jsou zde</a>. Nové stránky se objevují v <a href="/aied/journal">deníku</a>, který má <a href="/aied/rss.xml">RSS kanál</a>, pokud chcete sledovat novinky. Pro čtení offline si vezměte <a href="/aied/aied.epub">EPUB</a> nebo <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Doporučená východiska podle cílové skupiny',
  startingIntro: 'Níže najdete doporučené pojmy, kterými v této znalostní bázi můžete začít.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Základní pojmy',
      html: `<a href="/aied/concepts/ai-literacy/">AI gramotnost</a>, <a href="/aied/concepts/misconceptions/">mylné představy o AI</a>, <a href="/aied/concepts/agentic-ai/">agentní AI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitivní odlehčení</a> a <a href="/aied/concepts/interpreting-and-applying-aied-research/">jak interpretovat a aplikovat tento výzkum</a>: co zjištění mohou a nemohou podpořit a proč jedna studie otázku jen málokdy rozhodne.`,
    },
    {
      id: 'instructors',
      heading: 'Vyučující',
      html: `<a href="/aied/concepts/teacher-role/">Měnící se role učitele</a>, <a href="/aied/concepts/learning-design/">návrh výuky</a>, <a href="/aied/concepts/assessment/">hodnocení</a>, <a href="/aied/concepts/feedback/">zpětná vazba</a>, <a href="/aied/concepts/academic-integrity/">akademická integrita</a>, <a href="/aied/concepts/framing-ai-use-for-students/">rámování používání AI</a> a <a href="/aied/concepts/reducing-ai-misuse/">omezování zneužívání</a>. Nástroje, důkazy a příklady pro váš obor najdete v <a href="/aied/concepts/discipline-specific-aied/">AI ve vašem oboru</a>.`,
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
    'Každá stránka zde je datována a znalostní báze roste, jak se publikuje a reviduje nový výzkum s otevřeným přístupem. Údaje níže se čtou z aktuálního obsahu; datum je nejnovější aktualizace stránky.',
  conceptMap: {
    title: 'Mapa pojmů AI ve vzdělávání',
    desc:
      'Radiální mapa s AI ve vzdělávání ve středu, spojená s dvanácti základními pojmy: ' +
      'Modelování, Učení, Rovnost, Zpětná vazba, AI gramotnost, Hodnocení, Obory, Pedagogika, ' +
      'Etika, Technologie, Hodnocení AIEd a Výzkum. Vyberte libovolný uzel a otevřete jeho stránku.',
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
