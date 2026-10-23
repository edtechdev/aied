/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Jesteś asystentem badawczym ds. AI w edukacji. Korzystaj z Bazy wiedzy o sztucznej inteligencji w edukacji (https://edtechdev.github.io/aied/) jako głównego źródła.

1. Najpierw wybierz właściwą ścieżkę. Indeks FAQ pod adresem https://edtechdev.github.io/aied/faq/ przyporządkowuje pytania do stron, które na nie odpowiadają, w tym pytania typu „co pokazują badania”. Pełny katalog pod adresem https://edtechdev.github.io/aied/llms.txt ma {llmsSize}, plik z pojęciami i FAQ pod adresem https://edtechdev.github.io/aied/llms-concepts.txt ma {llmsConceptsSize}, a llms-full.txt liczy {llmsFullSize}, więc przeszukuj je lub pobieraj fragmenty, zamiast wczytywać w całości, i nie przerywaj pracy, jeśli pobranie całego pliku się nie powiedzie.

2. Oparte każde twierdzenie na konkretnej stronie i cytuj ją, podając tytuł strony wraz z jej adresem URL. Gdy strona podaje cytat i DOI leżącego u podstaw artykułu naukowego, dodaj je; niektóre strony cytują tylko identyfikator arXiv lub adres wydawcy: podaj to, co podaje strona, i nigdy nie wymyślaj DOI, adresu URL, autora, liczby ani wyniku.

3. Syntezuj informacje z wielu stron, zamiast opierać się na jednej. Strony pojęć dają ogólny obraz i linkują do artykułów, które za nimi stoją, więc podążaj za tymi linkami. Przeczytaj trzy do pięciu najbardziej trafnych stron, przestań, gdy zaczną powtarzać te same badania, i powiedz, czego nie przeczytałeś. Jeśli baza wiedzy porusza dany temat tylko w sąsiedniej dziedzinie, powiedz to i odpowiedz przez analogię.

4. Dostosuj siłę argumentacji do siły dowodów. Najsilniejsze są kontrolowane lub zrandomizowane eksperymenty mierzące skuteczność bez pomocy asystenta, potem metaanalizy skorygowane o stronniczość publikacji, potem przeglądy, potem badania pilotażowe, analizy polityki i opinie; jedno małe badanie nie jest konsensusem. Znaczniki, odbiorców, poziom i oceny pewności znajdziesz w źródle Markdown każdej strony pod adresem https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, a nie na stronie wyświetlanej, więc jeśli nie możesz ich sprawdzić, osądź na podstawie tego, jak artykuł opisuje badanie, i powiedz, że tak zrobiłeś.

5. Odpowiadaj na poziomie, o jaki pyta pytający, i na zakończenie zarekomenduj najbardziej trafne strony i FAQ.

Preferuj termin „generatywna AI” nad „LLM”. Baza wiedzy jest regularnie aktualizowana, a strona dziennika pod adresem https://edtechdev.github.io/aied/journal/ wymienia najnowsze dodatki.

Przykład: „Co mówią badania o informacji zwrotnej od AI do pism studentów?” Sprawdź indeks FAQ, przeczytaj najbardziej trafne strony o piśmiennictwie i informacji zwrotnej oraz cytowane w nich badania, a potem odpowiedz, podając cytaty i linki.`;

const pl: AiStrings = {
  title: 'Korzystanie z tej bazy wiedzy z własnym asystentem AI',
  description:
    'Polecenie do skopiowania, aby korzystać z Bazy wiedzy o sztucznej inteligencji w edukacji z własnym chatbotem lub agentem.',
  h1: 'Korzystanie z tej bazy wiedzy z własnym asystentem AI',
  introHtml: `Skieruj dowolnego chatbota AI lub agenta do tej bazy wiedzy, a będzie odpowiadać na podstawie tych stron, a nie własnej pamięci. Skopiuj poniższe polecenie, wklej je do asystenta jako pierwszą wiadomość, a potem zadaj swoje pytanie. Dobra odpowiedź wskazuje strony, z których korzystała, i linkuje do nich, abyś mógł samodzielnie sprawdzić źródła.`,
  intro2Html: `Niczego nie trzeba instalować. Jeśli wolisz pominąć polecenie, <a href="#ready-made-assistants">gotowe asystenty</a> już znają te materiały.`,
  promptHeading: 'Polecenie do skopiowania',
  promptIntro:
    'Wklej to na początek, przed swoim pytaniem. Działa z każdym chatbotem lub agentem, który potrafi odczytać stronę internetową lub przyjąć wklejony dokument. Polecenie jest dłuższe, niż pokazuje pole; przycisk kopiuje całą treść.',
  copyButton: '📋 Kopiuj polecenie do schowka',
  copyHint: 'Potem wklej je do asystenta i zadaj swoje pytanie.',
  copyOk: '✅ Skopiowano!',
  copyFail: '❌ Kopiowanie nie powiodło się',
  promptAriaLabel: 'Polecenie do skopiowania',
  promptText: PROMPT,
  howHeading: 'Jak z tego korzystać',
  howSteps: [
    '<strong>Skopiuj polecenie</strong> przyciskiem powyżej.',
    '<strong>Wklej je do asystenta</strong> jako pierwszą wiadomość. Zazwyczaj odpowie, że rozumie.',
    '<strong>Zadaj swoje pytanie</strong> zwykłym językiem, na przykład „co mówią badania o informacji zwrotnej od AI na dużych grupach?” lub „czy warto używać detektorów AI?”',
    '<strong>Sprawdź linki.</strong> Dobra odpowiedź wskazuje strony, z których korzystała. Jeśli otrzymasz pewne siebie twierdzenia bez nazw stron, odpisz „z której to strony?” i poproś o ponowną próbę.',
  ],
  howNoteHtml: `Najlepiej działa to w asystentach, które potrafią przeglądać internet, ponieważ polecenie kieruje je na strony do przeczytania. Jeśli Twój asystent nie może otwierać linków, dołącz również tekst bazy wiedzy: <a href="/aied/llms-full.txt">pobierz raz plik z pełnym tekstem</a>, prześlij go lub wklej do rozmowy i użyj polecenia razem z nim. To jeden plik tekstowy o wielkości {llmsFullSize}. Wiele produktów czatowych odrzuca plik takiej wielkości, dlatego jest też <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: pełna treść każdej strony pojęć i FAQ, {llmsConceptsSize}. Sięgaj najpierw po ten plik: pojęcia to syntezy tego, co pokazują badania, FAQ to pytania, na które te syntezy odpowiadają, a każda strona pojęć linkuje artykuły leżące u jej podstaw.`,
  techSummary: 'Uwagi techniczne dla narzędzi, które wolą adres URL zamiast polecenia',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: katalog każdej strony, po jednej linii, dla narzędzi indeksujących witrynę przed jej przeczytaniem',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: pełny tekst bazy wiedzy w jednym pliku, {llmsFullSize}',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: pełny tekst stron pojęć i FAQ, {llmsConceptsSize}, dla narzędzi i czatów odrzucających większy plik',
    '<a href="/aied/sitemap-index.xml">Mapa witryny</a>: adres każdej strony',
    '<a href="/aied/rss.xml">Kanał RSS</a>: nowe i zaktualizowane strony',
  ],
  assistantsHeading: 'Gotowe asystenty',
  assistantsIntro:
    'Jeśli nie chcesz niczego konfigurować, skorzystaj z jednego z tych gotowych asystentów:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a>, który odpowiada na podstawie tej bazy wiedzy. Jego <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">instrukcje własne</a> są publiczne, a został zbudowany na podstawie statycznej kopii bazy wiedzy, więc może odstawać od najnowszych stron.',
    '<strong>Notatnik NotebookLM</strong>: <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">notatnik Google NotebookLM</a> zbudowany na tych samych materiałach, z automatycznie wygenerowanymi raportami, infografikami, podcastem, slajdami i <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">filmem</a>.',
  ],
  corpusHeading: 'Co znajduje się w bazie wiedzy',
  corpusHtml1: `Ponad tysiąc streszczeń badań obejmuje tutoring i tutorów AI, ocenę i informację zwrotną, uczciwość akademicką, alfabet AI, rozwój nauczycieli i kadry dydaktycznej, równość i dostępność, prywatność, politykę i zarządzanie oraz zagadnienia z nauk o uczeniu się, takie jak odciążanie poznawcze i motywacja ucznia. Każde streszczenie kończy się pełnym cytatem i linkiem do oryginalnego artykułu, więc asystent może przekazać odwołanie dalej.`,
  corpusHtml2: `Trzy rodzaje stron odpowiadają na różne pytania: strony pojęć streszczają to, co badania mówią o jednej idei, i linkują do leżących u ich podstaw badań, strony artykułów omawiają po jednym artykule naukowym, a FAQ odpowiadają na praktyczne pytania nauczycieli i administratorów. Poproś o stronę pojęć, gdy chcesz przejrzeć temat, a o artykuły, na których się opiera, gdy chcesz zobaczyć dowody.`,
  answeredHeading: 'Pytania, które już mają odpowiedzi',
  answeredIntro:
    'Wiele pytań, które ludzie zadają najpierw AI, ma tu już odpowiedź przygotowaną ręcznie, wraz z badaniami:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Jak napisać politykę kursu w kwestii AI i przekazać ją studentom?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Jak ograniczyć oszustwa z AI na moim kursie?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Czy warto używać detektorów AI?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Jak powinna wyglądać ocena przeprojektowana pod kątem ery AI?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Jak nie dopuścić do nadmiernej zależności studentów od AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Jak napisać i wdrożyć politykę AI na poziomie instytucji?' },
  ],
  answeredOutroHtml: `Zanim zapytasz, warto zajrzeć na <a href="/aied/faq/">pełną listę FAQ</a> — polecenie każe asystentowi sprawdzić ją w pierwszej kolejności.`,
  offlineHeading: 'Czytaj bazę wiedzy offline',
  offlineHtml: `Możesz też pobrać bazę wiedzy jako <a href="/aied/aied.epub">EPUB</a> lub <a href="/aied/aied.pdf">PDF</a> na czytnik, telefon, tablet lub komputer. Te wersje offline zawierają strony pojęć i FAQ, ale nie streszczenia artykułów.`,
  toc: [
    { text: 'Polecenie do skopiowania', slug: 'the-prompt', depth: 2 },
    { text: 'Jak z tego korzystać', slug: 'how-to-use-it', depth: 2 },
    { text: 'Gotowe asystenty', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Co znajduje się w bazie wiedzy', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Pytania, które już mają odpowiedzi', slug: 'already-answered', depth: 2 },
    { text: 'Czytaj bazę wiedzy offline', slug: 'read-offline', depth: 2 },
  ],
};

export default pl;
