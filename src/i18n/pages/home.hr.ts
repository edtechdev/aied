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

const hr: HomeStrings = {
  title: 'Početna',
  h1: 'Baza znanja o umjetnoj inteligenciji u edukaciji',
  introHtml: `Dobrodošli u <strong>Bazu znanja o umjetnoj inteligenciji u edukaciji</strong> — besplatni resurs u javnoj domeni o <a href="/aied/concepts/ai-education/">umjetnoj inteligenciji u edukaciji</a>, za ljude koji poučavaju, uče, projektiraju ili upravljaju njome. Destilira nedavna istraživanja otvorenog pristupa u kratke, strukturirane stranice koje možete pročitati i primijeniti. Napomena o tome kako je nastala: stranice generira i ažurira AI agent, uz uredničke smjernice razvojnog programera stranice. Svaka tvrdnja navodi rad iza sebe, pa izvore možete provjeriti.`,
  navHeading: 'Navigacija stranicom',
  navHtml: `Pregledavajte indeks po područjima u lijevoj bočnoj traci kako biste vidjeli kako je područje organizirano, ili <a href="/aied/search">pretražite</a> cijelu bazu znanja ako već imate temu na umu. Stranice članaka sažimaju jedan rad u njegovu svrhu, metode i nalaze, s punom citacijom i poveznicama na povezani rad; stranice pojmova okupljaju ono što istraživanje kaže o jednoj ideji i povezuju studije iza njih. Ako biste radije počeli od pitanja, <a href="/aied/faq">indeks FAQ-a</a> prikuplja ona koja posjetitelji postavljaju prva, od politike AI na kolegiju do toga treba li koristiti detektore AI-ja; ako biste radije počeli od alata, <a href="/aied/resources">stranica resursa</a> navodi besplatne alate, zbirke i instrumente koje možete odmah koristiti, a za svaki piše tko ga je izradio i koliko košta. Karta pojmova iznad pokazuje što je s čim povezano; <a href="/aied/concepts/ai-education/">Umjetna inteligencija u edukaciji</a> je stranica karte iza nje, koja grupira pojmove u oko desetak osnovnih područja.`,
  chatHeading: 'Razgovaraj s bazom znanja',
  chatHtml: `Sve ovdje objavljeno je i u strojno čitljivim datotekama, pa svoj omiljeni AI chatbot ili agent možete usmjeriti na bazu znanja i dobiti odgovore koji je citiraju umjesto da nagađaju — <a href="/aied/ai">prompti su ovdje</a>. Nove stranice pojavljuju se u <a href="/aied/journal">časopisu</a>, koji ima <a href="/aied/rss.xml">RSS kanal</a> ako želite pratiti što je novo. Za čitanje bez interneta, preuzmite <a href="/aied/aied.epub">EPUB</a> ili <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Preporučene polazne točke po publici',
  startingIntro: 'U nastavku su neki preporučeni pojmovi od kojih možete početi u ovoj bazi znanja.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Osnovni pojmovi',
      html: `<a href="/aied/concepts/ai-literacy/">AI pismenost</a>, <a href="/aied/concepts/misconceptions/">zablude o AI-ju</a>, <a href="/aied/concepts/agentic-ai/">agentski AI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitivno rasterećenje</a> i <a href="/aied/concepts/interpreting-and-applying-aied-research/">kako tumačiti i primjenjivati ovo istraživanje</a>: što nalazi mogu i ne mogu poduprijeti, i zašto jedna studija rijetko razrješava pitanje.`,
    },
    {
      id: 'instructors',
      heading: 'Nastavnici',
      html: `<a href="/aied/concepts/teacher-role/">Promjena uloge nastavnika</a>, <a href="/aied/concepts/learning-design/">projektiranje učenja</a>, <a href="/aied/concepts/assessment/">procjena</a>, <a href="/aied/concepts/feedback/">povratne informacije</a>, <a href="/aied/concepts/academic-integrity/">akademski integritet</a>, <a href="/aied/concepts/framing-ai-use-for-students/">okvirivanje upotrebe AI-ja</a> i <a href="/aied/concepts/reducing-ai-misuse/">smanjenje zlouporabe</a>. Za alate, dokaze i primjere iz vlastitog područja, pogledajte <a href="/aied/concepts/discipline-specific-aied/">AI u vlastitoj disciplini</a>.`,
    },
    {
      id: 'developers',
      heading: 'Razvojni programeri',
      html: `<a href="/aied/concepts/educational-technology-developers/">Razvoj za edukaciju</a>, <a href="/aied/concepts/ai-technologies/">tehnologije pod površinom</a>, <a href="/aied/concepts/intelligent-tutoring/">inteligentno podučavanje</a>, <a href="/aied/concepts/multimodal/">multimodalni AI</a>, <a href="/aied/concepts/student-modeling/">modeliranje učenika</a> i <a href="/aied/concepts/llm-training-and-fine-tuning/">obuka i prilagodba modela za poučavanje</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administratori',
      html: `<a href="/aied/concepts/administrator/">Uloga administratora</a>, <a href="/aied/concepts/governance/">upravljanje AI-jem</a>, <a href="/aied/concepts/educational-policy-ai/">institucionalna politika</a>, <a href="/aied/concepts/legal-issues-and-risks/">pravna pitanja i rizici</a> i <a href="/aied/concepts/change-management/">upravljanje promjenama</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Istraživači',
      html: `<a href="/aied/concepts/research-methods-aied/">Metode istraživanja u AIED-u</a>, <a href="/aied/concepts/theories-and-frameworks/">teorije i okviri</a>, <a href="/aied/concepts/ai-ed-evaluation/">procjena intervencije AI-ja u edukaciji</a>, <a href="/aied/concepts/educational-measurement/">edukacijsko mjerenje</a>, <a href="/aied/concepts/learning-gains/">mjerenje obrazovnih dobitaka</a> i <a href="/aied/concepts/limitations-in-aied-research/">presjek ograničenja ove baze dokaza</a>.`,
    },
  ],
  statsHeading: 'Što baza znanja sadrži',
  statsIntro:
    'Svaka stranica ovdje je datirana, a baza znanja raste kako se objavljuju i pregledavaju nova istraživanja otvorenog pristupa. Brojevi u nastavku čitaju se iz trenutnog sadržaja; datum je najnovije ažuriranje stranice.',
  conceptMap: {
    title: 'Karta pojmova umjetne inteligencije u edukaciji',
    desc:
      'Radijalna karta s Umjetnom inteligencijom u edukaciji u središtu, povezana s dvanaest osnovnih pojmova: ' +
      'Modeliranje, Učenje, Pravednost, Povratne informacije, AI pismenost, Procjena, Discipline, Pedagogija, ' +
      'Etika, Tehnologije, Procjena AIED-a i Istraživanje. Odaberite bilo koji čvor da otvorite njegovu stranicu.',
    navLabel: 'Pojmovi umjetne inteligencije u edukaciji',
    center: 'Umjetna inteligencija u edukaciji',
    nodes: {
      'student-modeling': 'Modeliranje',
      'learning-theories': 'Učenje',
      'equity-in-ai-education': 'Pravednost',
      feedback: 'Povratne informacije',
      'ai-literacy': 'AI pismenost',
      assessment: 'Procjena',
      'discipline-specific-aied': 'Discipline',
      pedagogy: 'Pedagogija',
      ethics: 'Etika',
      'ai-technologies': 'Tehnologije',
      'ai-ed-evaluation': 'Procjena AIED-a',
      'research-methods-aied': 'Istraživanje',
    },
  },
  toc: [
    { text: 'Navigacija stranicom', slug: 'navigating-the-site', depth: 2 },
    { text: 'Razgovaraj s bazom znanja', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Preporučene polazne točke po publici', slug: 'starting-points', depth: 2 },
    { text: 'Osnovni pojmovi', slug: 'essential-concepts', depth: 3 },
    { text: 'Nastavnici', slug: 'instructors', depth: 3 },
    { text: 'Razvojni programeri', slug: 'developers', depth: 3 },
    { text: 'Administratori', slug: 'administrators', depth: 3 },
    { text: 'Istraživači', slug: 'researchers', depth: 3 },
    { text: 'Što baza znanja sadrži', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default hr;
