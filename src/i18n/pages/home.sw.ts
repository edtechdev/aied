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

const sw: HomeStrings = {
  title: 'Mwanzo',
  h1: 'Hifadhi ya Maarifa ya Akili Bandia katika Elimu',
  introHtml: `Karibu katika <strong>Hifadhi ya Maarifa ya Akili Bandia katika Elimu</strong> — rasilimali ya bure na ya mali ya umma kuhusu <a href="/aied/concepts/ai-education/">akili bandia katika elimu</a>, kwa watu wanaofundisha, wanaosoma, wanaobuni, au wanaosimamia utekelezaji wake. Inatoa muhtasari wa utafiti wa hivi karibuni wa wazi katika kurasa fupi zilizopangwa unazoweza kusoma na kuzitekeleza. Maelezo juu ya jinsi inavyotengenezwa: kurasa huzalishwa na kusasishwa na wakala wa Akili Bandia, kwa mwongozo wa uhariri kutoka kwa msanidi wa tovuti. Kila madai yanataja karatasi inayokihimili, hivyo vyanzo vipo kwa ukaguzi.`,
  navHeading: 'Kuvinjari tovuti',
  navHtml: `Vinjari fahirisi ya mada kwa mada kwenye upau wa kushoto kuona jinsi fani inavyopangwa, au <a href="/aied/search">tafuta</a> hifadhi yote ya maarifa ikiwa tayari una mada akilini. Kurasa za makala zinatoa muhtasari wa karatasi moja kwenye kusudi lake, mbinu zake, na matokeo yake, pamoja na nukuu kamili na viungo kwa kazi zinazohusiana; kurasa za dhana zinakusanya yale utafiti unayosema kuhusu wazo moja na kuunganisha masomo yanayoihimili. Ukipendelea kuanzia swali, <a href="/aied/faq">fahirisi ya Maswali</a> inakusanya yale wageni wanaouliza kwanza, kuanzia sera ya AI katika kozi hadi iwapo kutumia viganja vya AI; ukipendelea kuanzia zana, <a href="/aied/resources">ukurasa wa rasilimali</a> unaorodhesha zana za bure, mkusanyiko na vifaa unavyoweza kwenda na kuzitumia, kila moja ikisema ni nani aliyeitengeneza na gharama yake. Ramani ya dhana juu inaonyesha kinachoungana na nini; <a href="/aied/concepts/ai-education/">Akili Bandia katika Elimu</a> ni ukurasa wa ramani unaoiandama, ukiikusanya dhana katika mada kuu kama darini.`,
  chatHeading: 'Zungumza na hifadhi ya maarifa',
  chatHtml: `Kila kitu hapa pia kinachapishwa kama faili zinazosomeka na mashine, hivyo unaweza kuelekeza chatbot au wakala wako wa AI unayependelea kwenye hifadhi ya maarifa na kupata majibu yanayoihamisha badala ya kubashiri — <a href="/aied/ai">viagizo vipo hapa</a>. Kurasa mpya zinaonekana katika <a href="/aied/journal">jarida</a>, ambalo lina <a href="/aied/rss.xml">mlipuko wa RSS</a> ikiwa unataka kufuatilia. Kwa usomaji wa nje ya mtandao, chukua <a href="/aied/aied.epub">EPUB</a> au <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Pointi za kuanzia zinazopendekezwa kwa hadhira',
  startingIntro: 'Hapa chini kuna baadhi ya dhana zinazopendekezwa za kuanzia katika hifadhi hii ya maarifa.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Dhana muhimu',
      html: `<a href="/aied/concepts/ai-literacy/">Ujuzi wa AI</a>, <a href="/aied/concepts/misconceptions/">mawazo ya upotofu kuhusu AI</a>, <a href="/aied/concepts/agentic-ai/">AI ya wakala</a>, <a href="/aied/concepts/cognitive-offloading/">kupunguza mzigo wa kiakili</a>, na <a href="/aied/concepts/interpreting-and-applying-aied-research/">jinsi ya kufasiri na kutumia utafiti huu</a>: yale matokeo yanayoweza kuyategemeza na yale hayawezi, na kwa nini utafiti mmoja mara chache hutatua swali.`,
    },
    {
      id: 'instructors',
      heading: 'Wafundishi',
      html: `<a href="/aied/concepts/teacher-role/">Jukumu la kufundisha linalobadilika</a>, <a href="/aied/concepts/learning-design/">muundo wa kujifunza</a>, <a href="/aied/concepts/assessment/">tathmini</a>, <a href="/aied/concepts/feedback/">maoni</a>, <a href="/aied/concepts/academic-integrity/">uadilifu wa kitaaluma</a>, <a href="/aied/concepts/framing-ai-use-for-students/">kuweka mipaka ya matumizi ya AI</a> na <a href="/aied/concepts/reducing-ai-misuse/">kupunguza matumizi mabaya</a>. Kwa zana, ushahidi, na mifano katika somo lako, tazama <a href="/aied/concepts/discipline-specific-aied/">AI katika fani yako</a>.`,
    },
    {
      id: 'developers',
      heading: 'Wasanidi',
      html: `<a href="/aied/concepts/educational-technology-developers/">Kujenga kwa elimu</a>, <a href="/aied/concepts/ai-technologies/">teknolojia zinazoiandama</a>, <a href="/aied/concepts/intelligent-tutoring/">ufundishaji wa akili</a>, <a href="/aied/concepts/multimodal/">AI ya modaliti nyingi</a>, <a href="/aied/concepts/student-modeling/">kuunda mfano wa mwanafunzi</a>, na <a href="/aied/concepts/llm-training-and-fine-tuning/">kufunza na kurekebisha mfano kwa ufundishaji</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Wasimamizi',
      html: `<a href="/aied/concepts/administrator/">Jukumu la msimamizi</a>, <a href="/aied/concepts/governance/">utawala wa AI</a>, <a href="/aied/concepts/educational-policy-ai/">sera ya taasisi</a>, <a href="/aied/concepts/legal-issues-and-risks/">masuala ya kisheria na hatari</a>, na <a href="/aied/concepts/change-management/">usimamizi wa mabadiliko</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Watafiti',
      html: `<a href="/aied/concepts/research-methods-aied/">Mbinu za utafiti katika AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">nadharia na mifumo</a>, <a href="/aied/concepts/ai-ed-evaluation/">kutathmini muingiliano wa AI katika elimu</a>, <a href="/aied/concepts/educational-measurement/">upimaji wa elimu</a>, <a href="/aied/concepts/learning-gains/">kupima faida za kujifunza</a>, na <a href="/aied/concepts/limitations-in-aied-research/">vizingiti vinavyovuka mipaka ya hifadhi hii ya ushahidi</a>.`,
    },
  ],
  statsHeading: 'Kilicho katika hifadhi ya maarifa',
  statsIntro:
    'Kila ukurasa hapa una tarehe, na hifadhi ya maarifa inakua kadiri utafiti mpya wa wazi unavyochapishwa na kupitiwa. Idadi zilizo chini zinasomwa kutoka maudhui ya sasa; tarehe ni sasisho la karibuni la ukurasa.',
  conceptMap: {
    title: 'Ramani ya dhana ya Akili Bandia katika Elimu',
    desc:
      'Ramani ya mduara yenye Akili Bandia katika Elimu katikati, iliyounganishwa kwa dhana kumi na mbili za kiwango cha juu: ' +
      'Kuunda Mfano, Kujifunza, Usawa, Maoni, Ujuzi wa AI, Tathmini, Fani, ' +
      'Mbinu za Kufundisha, Maadili, Teknolojia, Tathmini, na Utafiti. Chagua nodi yoyote kufungua ukurasa wake.',
    navLabel: 'Dhana za Akili Bandia katika Elimu',
    center: 'Akili Bandia katika Elimu',
    nodes: {
      'student-modeling': 'Kuunda Mfano',
      'learning-theories': 'Kujifunza',
      'equity-in-ai-education': 'Usawa',
      feedback: 'Maoni',
      'ai-literacy': 'Ujuzi wa AI',
      assessment: 'Tathmini',
      'discipline-specific-aied': 'Fani',
      pedagogy: 'Mbinu za Kufundisha',
      ethics: 'Maadili',
      'ai-technologies': 'Teknolojia',
      'ai-ed-evaluation': 'Tathmini ya AIED',
      'research-methods-aied': 'Utafiti',
    },
  },
  toc: [
    { text: 'Kuvinjari tovuti', slug: 'navigating-the-site', depth: 2 },
    { text: 'Zungumza na hifadhi ya maarifa', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Pointi za kuanzia zinazopendekezwa kwa hadhira', slug: 'starting-points', depth: 2 },
    { text: 'Dhana muhimu', slug: 'essential-concepts', depth: 3 },
    { text: 'Wafundishi', slug: 'instructors', depth: 3 },
    { text: 'Wasanidi', slug: 'developers', depth: 3 },
    { text: 'Wasimamizi', slug: 'administrators', depth: 3 },
    { text: 'Watafiti', slug: 'researchers', depth: 3 },
    { text: 'Kilicho katika hifadhi ya maarifa', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default sw;
