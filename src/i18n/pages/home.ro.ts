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

const ro: HomeStrings = {
  title: 'Acasă',
  h1: 'Baza de cunoștințe despre inteligența artificială în educație',
  introHtml: `Bun venit la Baza de cunoștințe despre inteligența artificială în educație, o resursă gratuită, în domeniul public, despre <a href="/aied/concepts/ai-education/">inteligența artificială în educație</a>, pentru cei care predau, studiază, proiectează sau administrează educația. Ea rezumă și sintetizează cercetarea educațională recentă cu acces deschis. Un agent AI scrie și actualizează paginile, cu îndrumare editorială din partea dezvoltatorului site-ului.`,
  navHeading: 'Navigarea pe site',
  navHtml: `Explorează indexul din bara laterală din stânga, organizat pe categorii, sau <a href="/aied/search">caută</a> o temă. Paginile de articole condensează o lucrare în scopul, metodele și concluziile sale; paginile de concepte adună ce spune cercetarea despre o idee și leagă studiile din spatele ei. Pentru a porni de la o întrebare, <a href="/aied/faq">FAQ</a> acoperă ce întreabă vizitatorii cel mai des, cum ar fi politica AI a unui curs sau dacă ar trebui folosite detectoarele AI. Pentru a porni de la un instrument, <a href="/aied/resources">pagina de resurse</a> listează instrumente și colecții gratuite, cu cine a realizat fiecare și cât costă. Harta de mai sus grupează domeniul în douăsprezece categorii, cu <a href="/aied/concepts/ai-education/">Inteligența artificială în educație</a> ca nod central.`,
  chatHeading: 'Discută cu baza de cunoștințe',
  chatHtml: `Întreaga bază de cunoștințe este publicată și ca fișiere lizibile de mașini, așa că poți îndrepta un chatbot sau agent AI către ea și primi răspunsuri care citează paginile. <a href="/aied/ai">Prompturile sunt aici</a>. Paginile noi intră în <a href="/aied/journal">jurnal</a>, care are un <a href="/aied/rss.xml">flux RSS</a>. Pentru citire offline, descarcă <a href="/aied/aied.epub">EPUB</a> sau <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Puncte de plecare recomandate, pe categorii de public',
  startingIntro: 'Începe cu grupul care corespunde rolului tău.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Concepte fundamentale',
      html: `<a href="/aied/concepts/ai-literacy/">Cultura despre AI</a>, <a href="/aied/concepts/misconceptions/">neînțelegeri despre AI</a>, <a href="/aied/concepts/agentic-ai/">AI agentic</a>, <a href="/aied/concepts/cognitive-offloading/">descărcare cognitivă</a> și <a href="/aied/concepts/interpreting-and-applying-aied-research/">cum să interpretezi și să aplici această cercetare</a>, inclusiv de ce un singur studiu rareori rezolvă o întrebare.`,
    },
    {
      id: 'instructors',
      heading: 'Cadre didactice',
      html: `<a href="/aied/concepts/teacher-role/">Rolul didactic în schimbare</a>, <a href="/aied/concepts/learning-design/">proiectarea învățării</a>, <a href="/aied/concepts/assessment/">evaluarea</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">integritatea academică</a>, <a href="/aied/concepts/framing-ai-use-for-students/">încadrarea utilizării AI</a> și <a href="/aied/concepts/reducing-ai-misuse/">reducerea utilizării abuzive</a>. Pentru instrumente și exemple specifice disciplinei tale, vezi <a href="/aied/concepts/discipline-specific-aied/">AI în propria disciplină</a>.`,
    },
    {
      id: 'developers',
      heading: 'Dezvoltatori',
      html: `<a href="/aied/concepts/educational-technology-developers/">Construirea pentru educație</a>, <a href="/aied/concepts/ai-technologies/">tehnologiile de bază</a>, <a href="/aied/concepts/intelligent-tutoring/">tutoriatul inteligent</a>, <a href="/aied/concepts/multimodal/">AI multimodal</a>, <a href="/aied/concepts/student-modeling/">modelarea învățăceilor</a> și <a href="/aied/concepts/llm-training-and-fine-tuning/">antrenarea și adaptarea unui model pentru predare</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administratori',
      html: `<a href="/aied/concepts/administrator/">Rolul de administrator</a>, <a href="/aied/concepts/governance/">guvernanța AI</a>, <a href="/aied/concepts/educational-policy-ai/">politica instituțională</a>, <a href="/aied/concepts/legal-issues-and-risks/">aspecte juridice și riscuri</a> și <a href="/aied/concepts/change-management/">managementul schimbării</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Cercetători',
      html: `<a href="/aied/concepts/research-methods-aied/">Metode de cercetare în AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teorii și cadre teoretice</a>, <a href="/aied/concepts/ai-ed-evaluation/">evaluarea unei intervenții de inteligență artificială în educație</a>, <a href="/aied/concepts/educational-measurement/">măsurarea în educație</a>, <a href="/aied/concepts/learning-gains/">măsurarea câștigurilor de învățare</a> și <a href="/aied/concepts/limitations-in-aied-research/">limitele transversale ale acestui corpus de dovezi</a>.`,
    },
  ],
  statsHeading: 'Ce conține baza de cunoștințe',
  statsIntro:
    'Fiecare pagină este datată, iar numerele de mai jos reflectă ce este publicat chiar acum; data „ultimei actualizări” de la sfârșitul listei este cea mai recentă modificare.',
  conceptMap: {
    title: 'Harta conceptuală a inteligenței artificiale în educație',
    desc:
      'O hartă radială cu inteligența artificială în educație în centru, conectată la douăsprezece concepte de nivel superior: ' +
      'Modelare, Învățare, Echitate, Feedback, Cultură despre AI, Evaluare, Discipline, Pedagogie, ' +
      'Etică, Tehnologii, Evaluare AIEd și Cercetare.',
    navLabel: 'Concepte despre inteligența artificială în educație',
    center: 'Inteligența artificială în educație',
    nodes: {
      'student-modeling': 'Modelare',
      'learning-theories': 'Învățare',
      'equity-in-ai-education': 'Echitate',
      feedback: 'Feedback',
      'ai-literacy': 'Cultură despre AI',
      assessment: 'Evaluare',
      'discipline-specific-aied': 'Discipline',
      pedagogy: 'Pedagogie',
      ethics: 'Etică',
      'ai-technologies': 'Tehnologii',
      'ai-ed-evaluation': 'Evaluare AIEd',
      'research-methods-aied': 'Cercetare',
    },
  },
  toc: [
    { text: 'Navigarea pe site', slug: 'navigating-the-site', depth: 2 },
    { text: 'Discută cu baza de cunoștințe', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Puncte de plecare recomandate, pe categorii de public', slug: 'starting-points', depth: 2 },
    { text: 'Concepte fundamentale', slug: 'essential-concepts', depth: 3 },
    { text: 'Cadre didactice', slug: 'instructors', depth: 3 },
    { text: 'Dezvoltatori', slug: 'developers', depth: 3 },
    { text: 'Administratori', slug: 'administrators', depth: 3 },
    { text: 'Cercetători', slug: 'researchers', depth: 3 },
    { text: 'Ce conține baza de cunoștințe', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default ro;
