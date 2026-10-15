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

const pl: HomeStrings = {
  title: 'Strona główna',
  h1: 'Baza wiedzy o sztucznej inteligencji w edukacji',
  introHtml: `Witamy w <strong>Bazie wiedzy o sztucznej inteligencji w edukacji</strong> — bezpłatnym zasobie w domenie publicznej o <a href="/aied/concepts/ai-education/">sztucznej inteligencji w edukacji</a>, przeznaczonym dla osób, które uczą, studiują, projektują lub zarządzają nią. Sprowadza ona najnowsze badania otwartego dostępu do krótkich, uporządkowanych stron, które można przeczytać i wykorzystać w praktyce. Uwaga o tym, jak jest tworzona: strony są generowane i aktualizowane przez agenta AI, pod redakcyjnym nadzorem twórcy witryny. Każde twierdzenie wskazuje artykuł naukowy, który za nim stoi, więc źródła można zweryfikować.`,
  navHeading: 'Jak poruszać się po witrynie',
  navHtml: `Przeglądaj indeks według działów w lewym panelu bocznym, aby zobaczyć, jak jest zorganizowana ta dziedzina, lub <a href="/aied/search">przeszukaj całą bazę wiedzy</a>, jeśli masz już temat na myśli. Strony artykułów streszczają jeden artykuł naukowy — jego cel, metody i wyniki — wraz z pełnym cytatem i linkami do pokrewnych prac; strony pojęć gromadzą to, co badania mówią o jednej idei, i linkują do leżących u ich podstaw badań. Jeśli wolisz zacząć od pytania, <a href="/aied/faq">indeks FAQ</a> zbiera te, które zadają odwiedzający w pierwszej kolejności, od polityki kursu w kwestii AI po pytanie, czy warto używać detektorów AI; jeśli wolisz zacząć od narzędzia, <a href="/aied/resources">strona zasobów</a> wymienia bezpłatne narzędzia, zbiory i instrumenty, z których możesz od razu korzystać — każdy z podaniem autorów i kosztów. Powyższa mapa pojęć pokazuje, co z czym jest powiązane; <a href="/aied/concepts/ai-education/">AI w edukacji</a> to strona mapy leżąca u jej podstaw, grupująca pojęcia w około tuzin działów nadrzędnych.`,
  chatHeading: 'Rozmawiaj z bazą wiedzy',
  chatHtml: `Cała zawartość jest również publikowana w postaci plików czytelnych maszynowo, więc możesz skierować do niej swojego ulubionego chatbota AI lub agenta i otrzymywać odpowiedzi, które cytują bazę zamiast zgadywać — <a href="/aied/ai">polecenia znajdziesz tutaj</a>. Nowe strony pojawiają się w <a href="/aied/journal">dzienniku</a>, który ma <a href="/aied/rss.xml">kanał RSS</a>, jeśli chcesz być na bieżąco. Do czytania offline pobierz <a href="/aied/aied.epub">EPUB</a> lub <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Rekomendowane punkty wyjścia według grupy odbiorców',
  startingIntro:
    'Poniżej znajdują się rekomendowane pojęcia, od których warto zacząć w tej bazie wiedzy.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Podstawowe pojęcia',
      html: `<a href="/aied/concepts/ai-literacy/">alfabet AI</a>, <a href="/aied/concepts/misconceptions/">błędne wyobrażenia o AI</a>, <a href="/aied/concepts/agentic-ai/">AI agentowe</a>, <a href="/aied/concepts/cognitive-offloading/">odciążanie poznawcze</a> oraz <a href="/aied/concepts/interpreting-and-applying-aied-research/">jak interpretować i wykorzystywać te badania</a>: czego wyniki mogą i czego nie mogą udowodnić i dlaczego pojedyncze badanie rzadko rozstrzyga pytanie.`,
    },
    {
      id: 'instructors',
      heading: 'Nauczyciele i wykładowcy',
      html: `<a href="/aied/concepts/teacher-role/">zmieniająca się rola nauczyciela</a>, <a href="/aied/concepts/learning-design/">projektowanie nauczania</a>, <a href="/aied/concepts/assessment/">ocena</a>, <a href="/aied/concepts/feedback/">informacja zwrotna</a>, <a href="/aied/concepts/academic-integrity/">uczciwość akademicka</a>, <a href="/aied/concepts/framing-ai-use-for-students/">ramy korzystania z AI</a> i <a href="/aied/concepts/reducing-ai-misuse/">ograniczanie nadużyć</a>. Narzędzia, dowody i przykłady z Twojej dziedziny znajdziesz w <a href="/aied/concepts/discipline-specific-aied/">AI w Twojej dziedzinie</a>.`,
    },
    {
      id: 'developers',
      heading: 'Twórcy oprogramowania',
      html: `<a href="/aied/concepts/educational-technology-developers/">tworzenie dla edukacji</a>, <a href="/aied/concepts/ai-technologies/">leżące u podstaw technologie</a>, <a href="/aied/concepts/intelligent-tutoring/">inteligentne tutoring</a>, <a href="/aied/concepts/multimodal/">AI multimodalna</a>, <a href="/aied/concepts/student-modeling/">modelowanie ucznia</a> oraz <a href="/aied/concepts/llm-training-and-fine-tuning/">trenowanie i dostosowywanie modelu do nauczania</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administratorzy',
      html: `<a href="/aied/concepts/administrator/">rola administratora</a>, <a href="/aied/concepts/governance/">zarządzanie AI</a>, <a href="/aied/concepts/educational-policy-ai/">polityka instytucjonalna</a>, <a href="/aied/concepts/legal-issues-and-risks/">kwestie prawne i ryzyka</a> oraz <a href="/aied/concepts/change-management/">zarządzanie zmianą</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Badacze',
      html: `<a href="/aied/concepts/research-methods-aied/">metody badawcze w AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teorie i ramy teoretyczne</a>, <a href="/aied/concepts/ai-ed-evaluation/">ocena interwencji AI w edukacji</a>, <a href="/aied/concepts/educational-measurement/">pomiar w edukacji</a>, <a href="/aied/concepts/learning-gains/">mierzenie efektów uczenia się</a> oraz <a href="/aied/concepts/limitations-in-aied-research/">ograniczenia tej bazy dowodów</a>.`,
    },
  ],
  statsHeading: 'Co znajduje się w bazie wiedzy',
  statsIntro:
    'Każda strona jest opatrzona datą, a baza wiedzy rośnie wraz z publikowaniem i weryfikacją nowych badań otwartego dostępu. Poniższe liczby odczytują się z aktualnej zawartości; data to najnowsza aktualizacja strony.',
  conceptMap: {
    title: 'Mapa pojęć AI w edukacji',
    desc:
      'Mapa radialna z AI w edukacji w centrum, połączonym z dwunastoma pojęciami najwyższego poziomu: ' +
      'modelowanie, uczenie się, równość, informacja zwrotna, alfabet AI, ocena, ' +
      'dyscypliny, pedagogika, etyka, technologie, ocena i badania. Wybierz dowolny węzeł, aby otworzyć jego stronę.',
    navLabel: 'Pojęcia AI w edukacji',
    center: 'AI w edukacji',
    nodes: {
      'student-modeling': 'Modelowanie',
      'learning-theories': 'Uczenie się',
      'equity-in-ai-education': 'Równość',
      feedback: 'Informacja zwrotna',
      'ai-literacy': 'Alfabet AI',
      assessment: 'Ocena',
      'discipline-specific-aied': 'Dyscypliny',
      pedagogy: 'Pedagogika',
      ethics: 'Etyka',
      'ai-technologies': 'Technologie',
      'ai-ed-evaluation': 'Ocena badań',
      'research-methods-aied': 'Badania',
    },
  },
  toc: [
    { text: 'Jak poruszać się po witrynie', slug: 'navigating-the-site', depth: 2 },
    { text: 'Rozmawiaj z bazą wiedzy', slug: 'chat-with-the-knowledge-base', depth: 2 },
    {
      text: 'Rekomendowane punkty wyjścia według grupy odbiorców',
      slug: 'starting-points',
      depth: 2,
    },
    { text: 'Podstawowe pojęcia', slug: 'essential-concepts', depth: 3 },
    { text: 'Nauczyciele i wykładowcy', slug: 'instructors', depth: 3 },
    { text: 'Twórcy oprogramowania', slug: 'developers', depth: 3 },
    { text: 'Administratorzy', slug: 'administrators', depth: 3 },
    { text: 'Badacze', slug: 'researchers', depth: 3 },
    { text: 'Co znajduje się w bazie wiedzy', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default pl;
