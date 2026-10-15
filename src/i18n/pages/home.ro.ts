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
  introHtml: `Bun venit la <strong>Baza de cunoștințe despre inteligența artificială în educație</strong> — o resursă gratuită, în domeniul public, despre <a href="/aied/concepts/ai-education/">inteligența artificială în educație</a>, pentru cei care predau, studiază, proiectează sau administrează educația. Ea distilează cercetarea recentă cu acces deschis în pagini scurte, structurate, pe care le poți cita și aplica. O notă despre modul în care este realizată: paginile sunt generate și actualizate de un agent AI, cu îndrumare editorială din partea dezvoltatorului site-ului. Fiecare afirmație indică lucrarea din spatele ei, așa că sursele pot fi verificate.`,
  navHeading: 'Navigarea pe site',
  navHtml: `Explorează indexul pe categorii din bara laterală din stânga pentru a vedea cum este organizat domeniul, sau <a href="/aied/search">caută</a> în întreaga bază de cunoștințe dacă ai deja o temă în minte. Paginile de articole condensate o lucrare în scopul, metodele și concluziile sale, cu citarea completă și linkuri către lucrări conexe; paginile de concepte adună ce spune cercetarea despre o idee și leagă studiile din spatele ei. Dacă preferi să pornești de la o întrebare, <a href="/aied/faq">indexul FAQ</a> adună cele mai frecvente întrebări ale vizitatorilor, de la politica AI a unui curs până la dacă ar trebui folosite detectoarele AI; dacă preferi să pornești de la un instrument, <a href="/aied/resources">pagina de resurse</a> listează instrumente, colecții și instrumente de măsurare gratuite pe care le poți folosi imediat, fiecare indicând cine a realizat-o și ce costă. Harta conceptuală de mai sus arată ce se leagă de ce; <a href="/aied/concepts/ai-education/">Inteligența artificială în educație</a> este pagina-hartă din spatele ei, grupând conceptele în circa o duzină de categorii cuprinzătoare.`,
  chatHeading: 'Discută cu baza de cunoștințe',
  chatHtml: `Tot ce se află aici este publicat și ca fișiere lizibile de mașini, așa că poți îndrepta chatbotul sau agentul AI preferat către baza de cunoștințe și să obții răspunsuri care o citează în loc să ghicească — <a href="/aied/ai">prompturile sunt aici</a>. Paginile noi apar în <a href="/aied/journal">jurnal</a>, care are un <a href="/aied/rss.xml">flux RSS</a> dacă vrei să urmărești evoluția. Pentru citire offline, ia <a href="/aied/aied.epub">EPUB</a> sau <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Puncte de plecare recomandate, pe categorii de public',
  startingIntro: 'Mai jos sunt câteva concepte recomandate de la care poți începe în această bază de cunoștințe.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Concepte fundamentale',
      html: `<a href="/aied/concepts/ai-literacy/">Cultura despre AI</a>, <a href="/aied/concepts/misconceptions/">neînțelegeri despre AI</a>, <a href="/aied/concepts/agentic-ai/">AI agentic</a>, <a href="/aied/concepts/cognitive-offloading/">descărcare cognitivă</a> și <a href="/aied/concepts/interpreting-and-applying-aied-research/">cum să interpretezi și să aplici această cercetare</a>: ce pot și ce nu pot susține concluziile, și de ce un singur studiu rareori rezolvă o întrebare.`,
    },
    {
      id: 'instructors',
      heading: 'Cadre didactice',
      html: `<a href="/aied/concepts/teacher-role/">Rolul didactic în schimbare</a>, <a href="/aied/concepts/learning-design/">proiectarea învățării</a>, <a href="/aied/concepts/assessment/">evaluarea</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">integritatea academică</a>, <a href="/aied/concepts/framing-ai-use-for-students/">încadrarea utilizării AI</a> și <a href="/aied/concepts/reducing-ai-misuse/">reducerea utilizării abuzive</a>. Pentru instrumente, dovezi și exemple din propria disciplină, vezi <a href="/aied/concepts/discipline-specific-aied/">AI în propria disciplină</a>.`,
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
    'Fiecare pagină de aici este datată, iar baza de cunoștințe crește pe măsură ce cercetări noi cu acces deschis sunt publicate și analizate. Numerele de mai jos sunt citite din conținutul actual; data este cea mai recentă actualizare a unei pagini.',
  conceptMap: {
    title: 'Harta conceptuală a inteligenței artificiale în educație',
    desc:
      'O hartă radială cu inteligența artificială în educație în centru, conectată la douăsprezece concepte de nivel superior: ' +
      'Modelare, Învățare, Echitate, Feedback, Cultură despre AI, Evaluare, Discipline, Pedagogie, ' +
      'Etică, Tehnologii, Evaluare AIEd și Cercetare. Selectează orice nod pentru a-i deschide pagina.',
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
