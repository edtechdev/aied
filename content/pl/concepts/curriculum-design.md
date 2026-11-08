---
title: "Projektowanie programu nauczania"
created: "2026-06-02T10:44:35-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks, learning-commons]
updated: "2026-11-08T07:31:21-05:00"
translation_of: "concepts/curriculum-design"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

> **Projektowanie programu nauczania** — proces planowania i strukturyzowania tego, czego się uczy, w obrębie kursów, programów i instytucji, obejmujący cele uczenia się, sekwencjonowanie treści, strategie oceniania i progresję umiejętności. W erze SI projektowanie programu musi równoważyć wiedzę fundamentalną z nowymi kompetencjami w zakresie SI, decydując nie tylko o tym, czego uczniowie się uczą, ale i o tym, jak uczą się pracować z narzędziami SI i krytycznie je oceniać.

## Pytania do rozważenia

- Projektowanie programu nauczania pyta, czego uczniowie powinni się uczyć na poziomie programu, podczas gdy projektowanie uczenia się pyta, jak — na poziomie kursu. Gdy SI przekształca dyscyplinę, która z tych dwóch warstw powinna Twoim zdaniem zmienić się pierwsza?
- Ponieważ [[generative-ai|generatywna SI]] automatyzuje pracę na poziomie implementacji, niektórzy twierdzą, że programy nauczania muszą przesunąć się ku projektowaniu systemów, abstrakcji i [[critical-thinking|krytycznej ocenie]]. Co Twoim zdaniem uczniowie straciliby, gdyby umiejętności niskopoziomowe zostały zmarginalizowane?
- Przeprojektowanie programu w erze SI często ramuje się jako równowagę między biegłością w narzędziach a wiedzą fundamentalną. Gdzie widziałeś, jak ta równowaga przechyla się zbyt daleko w jedną stronę?
- Ramy SAIL traktują kompetencje w zakresie SI jako rusztowane przez całe życie i zaprojektowane tak, by adresować głębsze „podziały cyfrowe" wykraczające poza dostęp. Czym osadzenie kompetencji w zakresie SI w całym programie różni się od dodania jednego kursu o SI?
- Jeśli każda dyscyplina potrzebuje teraz osadzonych w niej kompetencji SI, kto odpowiada za zmianę programu — wykładowcy, programy czy instytucje — i czego edukatorzy potrzebują, by odnieść w tym sukces?
- Program nauczania to sekwencja umiejętności rozłożona na lata, a nie tylko lista tematów. Jak ta dłuższa perspektywa zmienia to, czy „jednostka o kompetencjach w zakresie SI" faktycznie się utrzymuje?

## Wprowadzenie

Projektowanie programu nauczania dotyczy *czego* w edukacji na poziomie programu i uzupełnia [[learning-design|projektowanie uczenia się]], które dotyczy *jak* na poziomie kursu. Artykuły w tej bazie wiedzy badają, jak SI przekształca programy nauczania w różnych dyscyplinach — od inżynierii oprogramowania po architekturę i edukację ekologiczną — oraz jak edukatorzy projektują programy, które osadzają kompetencje w zakresie SI bez poświęcania dyscyplinarnych fundamentów.

### Kluczowe motywy badawcze

**Przeprojektowywanie programów nauczania dla ery SI** to centralne wyzwanie. **[[reshaping-cs-education-genai|Lee i wsp.]]** zsyntetyzowali ustalenia z międzynarodowych warsztatów o przekształcaniu studiów licencjackich na [[cs-education|informatyce]], argumentując, że gdy GenAI automatyzuje programowanie na poziomie implementacji, programy muszą przesunąć się ku projektowaniu systemów, abstrakcji i krytycznej ocenie — przy jednoczesnym zmniejszeniu wagi niskopoziomowych szczegółów implementacji. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** sformalizował agentową inżynierię oprogramowania jako odrębną dyscyplinę z 21-modułowym programem skoncentrowanym na „ewolucji intencji" i dyscyplinie praktyka potrzebnej do zarządzania [[agentic-ai|agentami SI]]. Oba nawiązują do [[ai-literacy|kompetencji w zakresie SI]] i [[scaffolding|rusztowania]].

Ujmując zmianę jako systemową, a nie addytywną, [[rewriting-curriculum-genai-pedagogy-2026|Sabani i wsp. (2026)]] triangulują [[meta-analysis-systematic-review|przegląd zakresowy]], mapowanie bibliometryczne 209 rekordów, 36 artykułów i dziesięć wywiadów z liderami akademickimi, wyróżniając pięć przesunięć — w tym przejście od transmisji wiedzy do rozwoju zdolności oraz od lokalnego eksperymentowania do zarządzania instytucjonalnego.

**Mapowanie i analiza programu** wykorzystuje SI do rozumienia istniejących programów. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng i wsp.]]** przeanalizowali 23 sylabusy kursów inżynierii oprogramowania wspieranej SI, identyfikując wspólne motywy — [[prompt-engineering|inżynierię promptów]], przegląd kodu z SI, [[ethics|względy etyczne]] — i wyprowadzając wskazówki projektowe, które kładą nacisk na równowagę między biegłością w narzędziach a wiedzą fundamentalną. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** stosuje metody obliczeniowe do porównywania struktur kursów informatycznych między instytucjami.

Ważenie zmienia to, co raportuje analiza programu: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath i wsp. (2026)]] zleciło GPT-o3-mini rozdzielenie 100% na siedem kompetencji oczekiwanych w przedsiębiorstwach dla każdego z 48 zadań oceniających, uzyskując alfę Krippendorffa 0,81 wobec wag ekspertów, ale zgodność stawała się ujemna dla umiejętności, których opisy nigdy nie wyrażają wprost (-0,19).

**Struktura modułowa przeżywa aktualne treści.** Powtarza się wzorzec, w którym dziedzina porusza się szybciej niż cykl przeglądu: stabilny rdzeń [[ai-literacy|kompetencji w zakresie SI]], krytycznej oceny, wykrywania stronniczości i [[ethics|etyki]], z treściami specjalistycznymi i lokalnie dostępnymi narzędziami dołączanymi jako moduły i rewidowanymi co sześć do dwunastu miesięcy ([[bursic-ai-residency-education-curriculum-2026|Bursic i wsp. (2026)]]). Podany przypadek to [[medical-education|edukacja medyczna]] na poziomie podyplomowym, ale zasada się uogólnia: program zobowiązuje się do kompetencji, które przetrwają rotację narzędzi, i planuje wymianę warstwy narzędziowej.

**Integracja kompetencji w zakresie SI** osadza kompetencje SI w dyscyplinach. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** dostarcza rusztowane ramy kompetencji w zakresie SI stosowalne na wszystkich poziomach wieku i etapach edukacji, adresujące drugi i trzeci poziom [[digital-divide|podziałów cyfrowych]]. **[[tracing-genai-literacy-interaction-patterns]]** bada, jak kompetencje w zakresie SI rozwijają się przez wzorce interakcji. **[[hingle-collaborative-ai-literacy-2025]]** eksploruje współpracujące podejścia do tworzenia programu kompetencji w zakresie SI, łącząc się z [[collaborative-learning|uczeniem współpracującym]].

LearnAI pokazuje, jak wygląda wersja osadzona: szeroka warstwa ekspozycji z krótkimi prezentacjami w 18 istniejących kursach w pięciu dyscyplinach (293 studentów), połączona z opcjonalnymi sesjami współtworzenia jeden na jeden prowadzonymi przez przeszkolonych studenckich tutorów rówieśniczych, dzięki czemu uczniowie o różnym poziomie umiejętności spotykają zadania SI na swoim poziomie ([[learnai-just-in-time-ai-cocreation-university-2026|Qu i wsp. (2026)]]).

Integracja w praktyce pozostaje w tyle za ramami. [[critical-media-literacy-education-2026|Santos-Albardía i wsp. (2025)]] stwierdzili, że tylko 13,8% przebadanych studentów edukacji i dziennikarstwa powiedziało, że ich zajęcia obejmowały krytyczną analizę mediów, wobec 97,8%, którzy uznali ją za ważną, a ich wywiady z ekspertami wiązały tę lukę z [[teacher-education|kształceniem nauczycieli]], które przedkłada umiejętności techniczne i dydaktyczne nad edukację medialną.

Przegląd PRISMA 39 badań STEAM (2016–2025) wykazał podobną nierównowagę w elementach kompetencji w zakresie SI: wdrożenia rozwijały kompetencje techniczne — podstawowe pojęcia SI, [[computational-thinking|myślenie obliczeniowe]], [[statistics-and-data-science-education|kompetencje w zakresie danych]] — a zaniedbywały świadomość etyczną, wyobraźnię twórczą oraz tworzenie, zarządzanie i projektowanie z SI, więc praktyczną odpowiedzią jest audyt każdej jednostki pod ich kątem ([[niri-steam-ai-literacy-review-2026|Niri i wsp., 2026]]).

[[student-experience|Głos ucznia]] to kolejne wejście projektowe: 84% ze 166 studentów ostatniego roku kierunków biznesowych chciało, by GenAI była nauczana w ich modułach, a 85% uznawało ją za niezbędną dla zatrudnialności, podczas gdy tylko 7% uczyło się o niej na swojej uczelni ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

Przegląd 42 badań nad [[ai-education|edukacją o SI]] przed studiami wyższymi wskazuje, że programy przesuwają się od treści technicznych ku modelom opartym na kompetencjach, budowanym na ramach takich jak AI4K12 i Five Big Ideas in AI, przy czym [[ai-literacy|kompetencje w zakresie SI]] są traktowane jako kompetencja międzydyscyplinarna, a standaryzowane narzędzia do ich oceny wciąż nie istnieją ([[caruana-pre-university-ai-education-slr-2026|Caruana i wsp. (2026)]]).

Wykładowcy i pracodawcy zgadzali się co do wagi tylko jednej z 26 umiejętności związanych z SI — ustalania realistycznych oczekiwań wobec pracy wspieranej SI — a zaledwie trzy z 26 były nauczane przez połowę lub więcej wykładowców, co jest dowodem raportu na lukę w umiejętnościach związanych z SI między szkolnictwem wyższym a pracodawcami ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

Projektowanie aktywności ML w K-12 pozostaje na powierzchni: przegląd stojący za ramami ICE-T wykazał, że niewidoczne użycie, interakcja przyciskami i wdrożenie modelu odpowiadają za niemal 60% zakodowanych aktywności uczenia nadzorowanego, otwarte tworzenie pojawiło się tylko dwa razy, a perspektywy techniczna i społeczna współwystępowały w zaledwie około 3% aktywności ([[icet-ml-education-trust-2026|Haritz i wsp., 2026]]).

**Innowacja programowa [[discipline-specific-aied|specyficzna dla dyscypliny]]** stosuje projektowanie programu do konkretnych dziedzin. **[[genai-architecture-education]]** bada, jak generatywna SI przekształca [[pedagogy|pedagogikę]] projektowania architektonicznego. **[[talebzadeh-ai-green-education-2026]]** analizuje integrację SI w programach edukacji ekologicznej. **[[connected-ai-lesson-planning-vietnam]]** i **[[llm-cultural-relevance-k12]]** dotyczą [[culturally-relevant-pedagogy|projektowania programu uwzględniającego kontekst kulturowy]].

**Osadź SI w dyscyplinie, a nie obok niej.** Trzypoziomowy (wprowadzający, aplikacyjny, zaawansowany) program SI wpiął [[machine-learning|uczenie maszynowe]] w istniejące tematy inżynierii cieplnej w ramach 39,1-godzinnego kursu, zamiast dodawać fakultety informatyczne, unikając dodatkowego obciążenia studentów inżynierii mechanicznej i udostępniając otwarcie swój sylabus, dane i kod ([[mechanical-engineering-ai-curriculum-2026|Li i wsp. (2026)]]).

Przypadek dziennikarstwa pokazuje wariant „najpierw wartości": triadyczne rusztowanie wartości–procesy–kompetencje przesunęło studentów od relacjonowania wyłącznie ludzkiego ku pracy zintegrowanej z SI, a jednak 8 z 9 (89%) zgłosiło pewność w decyzjach etycznych, podczas gdy pozycje ankiety o autorstwie i stronniczości sugerowały jedynie powierzchowne rozumienie ([[ying-genai-journalism-assessment-2026|Ngu & Weller (2026)]]).

**Ramy [[governance|instytucjonalne]]** adresują zmianę programu w skali. **[[finkelstein-principled-ai-education-2025]]** i **[[finkelstein-principled-ai-education-2025]]** dostarczają zasad integracji SI w programach edukacyjnych. **[[ai-adoption-training-public-sector]]** bada bariery adopcji programu SI w edukacji sektora publicznego.

**Sekwencjonowanie SI w całym programie.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli i wsp.]] proponują ramy „najpierw powstrzymaj, potem wzmocnij", które sekwencjonują generatywną SI na poziomie programu: wstrzymaj narzędzie generatywne, gdy kształtuje się zdolność, a następnie przywróć je, aby tę zdolność wzmocnić, gdy student potrafi już nią kierować i oceniać jej zwroty. Ramy, rządzone kryterium formowania versus odciążania (czy odcinek pracy buduje zdolność, czy tylko przeprowadza ją przez narzędzie), wiążą projektowanie programu z [[cognitive-offloading|odciążaniem poznawczym]], [[self-regulated-learning|samoregulacją uczenia się]] i [[academic-integrity|uczciwością akademicką]], z trudnymi do podrobienia punktami kontrolnymi na każdym zawiasie między powstrzymaniem a wzmocnieniem.

Dźwignią dla najwyższych etapów nie jest większa liczba kursów: w 89 sponsorowanych projektach capstone awans z [[career-development-and-readiness|poziomu gotowości zawodowej]] 6 do 7 był warunkowany doświadczeniem osadzonym w przemyśle — kooperacjami i projektami Manufacturing Extension Partnership — więc stopnie potrzebują uczenia zintegrowanego z pracą, a nie kolejnego fakultetu technicznego ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith i wsp. (2026)]]).

Programowym skutkiem zdolności modeli jest to, że projektowanie odporne na SI wygasa. Edukatorzy informatyki opisywali kalibrowanie zadań wobec tego, czego modele jeszcze nie potrafiły, i obserwowanie, jak kalibracja traci ważność — zadania jednego z nauczycieli cyberbezpieczeństwa wymagały prawdziwego [[problem-solving|rozwiązywania problemów]] siedem lub osiem miesięcy wcześniej, a potem były po prostu rozwiązywane — przy czym facylitator szacował okres przydatności na około jeden semestr. Strukturalne ustalenie warsztatu jest takie, że niemal każda adaptacja została wykonana przez pojedynczego wykładowcę w ramach jednego kursu, bez koordynacji instytucjonalnej, której wymagałaby trwała odpowiedź programowa ([[computing-assessment-genai-workshop-report-2026|Akbar i wsp., 2026]]).

**Dopasowanie całego kursu, gdy generatywna SI jest dozwolona.** Przeprojektowanie z 2026 r. wprowadzającego kursu [[physics-education|fizyki]] jądrowej i cząstek ([[ai-particle-physics-education-redesign-2026|Mikhasenko i wsp.]]) zintegrowało trzy typy aktywności o odrębnych rolach — wykłady dla pojęć i notacji, ćwiczenia dla standardowej praktyki analitycznej oraz pracę domową jako eksploracyjny, „badawczo ukształtowany" komponent nietypowo trudnych, wielometodowych problemów. Zgłoszona trudność (niezadeklarowany warunek wstępny z programowania, niewystarczający czas na zrozumienie, a nie tylko uzyskanie odpowiedzi, oraz niedopasowanie między wykładami, ćwiczeniami, pracą domową a [[summative-assessment|egzaminem]]) pokazuje, że dopuszczenie generatywnej SI wymusza pracę nad spójnością programu w całym kursie, a nie zmianę jednego typu zadania; ich zalecana struktura utrzymuje eksploracyjną pracę z dozwoloną SI jako zadania zaawansowane z dodatkowymi punktami, podczas gdy pisemny egzamin bez pomocy wyznacza ocenę.

**Głębokość dopasowania, a nie częstość użycia, odróżnia wzorce integracji.** W 17 przypadkach modułów biznesowych sześć osadziło GenAI systematycznie w całym nauczaniu, uczeniu się i ocenianiu (konstruktywnie), dziewięć zrobiło to niespójnie (mieszanie), a dwa sporadycznie (ad hoc); przypadki konstruktywne raportowały najsilniejsze wyniki zaangażowania, zdolności i trafności programowej ([[zhou-constructive-alignment-genai-business-2026|Zhou i wsp. (2026)]]).

**Porada o dopasowaniu konstruktywnym pod krytycznym osądem.** Tam, gdzie powyższe źródła raportują dopasowanie w praktyce, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes i wsp. (2026)]] czytają samą poradę jako dyskurs. Ich [[qualitative-research|krytyczna analiza dyskursu]] 14 tekstów szarej literatury opublikowanych od listopada 2022 do kwietnia 2025 — głównie stron instytucjonalnych i rozdziałów z centralnie usytuowanych [[educational-development|jednostek uczenia się i nauczania]] — wykazała, że dopasowanie konstruktywne przedstawiano jako problem efektywności: generatywna SI była „skutecznym i wydajnym sposobem szkicowania rubryk", który może „usprawnić proces", antropomorfizowana jako „ekspert edukacyjny i asystent", „partner sparingowy" lub „inteligentny asystent w projektowaniu dydaktycznym", podczas gdy kadra akademicka dostarczała jedynie „wiedzy przedmiotowej", a narzędzie brało na siebie „ciężką pracę tworzenia celów uczenia się, organizowania treści kursu... i dopasowywania komponentów kursu". Przepisy promptów „kopiuj-wklej" i numerowane szablony ramowały dopasowanie konstruktywne jako standaryzowalny produkt, generując trzy tryby porażki: performatywność (dopasowanie, które tylko wygląda na dopasowane), wymazanie usytuowanego i krytycznego kontekstu oraz płytkie dopasowanie, które utożsamia dopasowanie z wymiarem konstruktywnym. Ich remedium zmienia kolejność przepływu pracy projektowania programu — edukatorzy muszą rozumieć dopasowanie konstruktywne wystarczająco dobrze, by kierować wynikiem SI, oceniać go i odrzucać, zanim jakąkolwiek jego część delegują — i ogranicza każde narzędzie do instytucjonalnego agenta [[rag|z wyszukiwaniem wspomaganym]], ugruntowanego w lokalnej polityce, rubrykach i atrybutach absolwenta, z rolą „liminalnego tutora", która rozszerza, a nie zastępuje relację z [[educational-development|developerem]].

**Generowanie zadań modelowania zgodnych z programem.** Platformy oparte na SI mogą adresować brak czasu i zasobów nauczycieli na projektowanie wysokiej jakości zadań [[math-education|modelowania matematycznego]], generując problemy zgodne z programem i rekomendacje pedagogiczne ugruntowane w zasadach projektowych i [[rag|generowaniu wspomaganym wyszukiwaniem]] — podejście zilustrowane bezpośrednią proporcjonalnością w matematyce szkoły średniej ([[ai-modeling-problem-generation-platform-2026]]). Same lektury kursowe są dziś także celem generowania: Sidorkin (2026) zastąpił komercyjny podręcznik cotygodniowymi lekturami generowanymi przez SI na studiach podyplomowych z przywództwa edukacyjnego, i choć studenci ocenili je jako użyteczne, a 75 procent zgodziło się, że nauczyli się więcej niż na porównywalnym kursie, 4 487 stron logów zawierało cytowania w stylu APA tylko na około 0,80 procenta stron, a nazwę kampusu lub systemu łączono z kategorycznymi twierdzeniami o polityce na około 1,03 procenta stron bez weryfikowalnego źródła. Lekcja dla materiałów programowych jest taka, by traktować generowane lektury jako produkcję roboczą pod przeglądem wykładowcy, zaplanować nakład pracy wykładowcy na projektowanie promptów i weryfikację oraz wprowadzać sprawdzone źródła do asystenta, zamiast pozostawiać uczniom wnioskowanie o jakości źródeł z kontekstu.

**Wspierane SI planowanie lekcji na warstwie programu wchodzącego do klasy.** W punkcie, w którym program staje się wyuczoną lekcją, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo i Tahir (2025)]] eksperymentalnie porównali plany tworzone przez nauczycieli z planami wspieranymi przez ChatGPT w [[stem-education|STEAM]] i [[arts-design-and-media-education|edukacji artystycznej]] dzieci, stwierdzając, że plany wspierane SI zostały ocenione istotnie wyżej przez sześciu profesorów-ekspertów (mediana 20,5 wobec 17,6, p = 0,002, duży efekt). Pokazują, że zysk zależy od sposobu delegowania: zalecana metoda uzupełnia luki treściowe w samodzielnie nakreślonej lekcji (zachowując projektową [[agency|autonomię]] nauczyciela), zamiast delegować cały plan. Wnoszą też szablon promptu Rola–Instrukcje–Cel końcowy dla odtwarzalnego generowania pod kontrolą jakości — dowód, że planowanie lekcji z SI jest najsilniejsze, gdy jest osadzone w decyzjach programowych nauczyciela, a nie je zastępuje. W edukacji przyrodniczej walidacja ekspercka dochodzi do podobnego werdyktu o projektowaniu platformy: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli i Yildirim (2026)]] poprosili jedenastu specjalistów [[science-education|edukacji przyrodniczej]] o ocenę ChatGPT-4 i narzędzia skoncentrowanego na edukacji (Teacher's Buddy) na planach szóstej klasy zgodnych z zrewidowanym programem Turcji i modelem uczenia [[design-based-research|opartego na projektowaniu]] Engineering. Platforma edukacyjna uzyskała wyższe oceny we wszystkich ośmiu kryteriach jakości — w tym na etapach intensywnych informacji zwrotnych i w dopasowaniu do programu — co jest dowodem, że osadzenie struktury pedagogicznej w SI daje lepiej dopasowany wynik. Jednak część ekspertów wolała plan ogólnego przeznaczenia za jego silniejszy nacisk społeczno-emocjonalny, a 7 z 11 uznało plany za „możliwe do zastosowania po korekcie", a nie gotowe do użycia. Wybór platformy i ramowania promptu, a nie tylko sama SI, kształtuje to, jak dobrze generowane plany pasują do standardów programowych i modeli procesu.

Struktura, a nie fraza promptu, czyni generowanie SI niezawodnym w produkcji: pipeline Curriculum-as-Code [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] agresywnie przycinał kontekst i generował materiały sekcja po sekcji w 28 kontekstach projektowych, co skróciło czas przygotowania wykładowcy z około ośmiu do dwóch godzin na jednostkę i nie pozostawiło żadnych pojęciowych ani matematycznych [[hallucination-risk|halucynacji]] do wychwycenia przez [[human-in-the-loop-ai|człowieka w pętli]].

### Powiązania z pokrewnymi koncepcjami

Projektowanie programu nauczania łączy się bezpośrednio z [[learning-design|projektowaniem uczenia się]] — program określa co, nauczanie określa jak. Łączy się z [[ai-literacy|kompetencjami w zakresie SI]], ponieważ osadzanie kompetencji SI jest głównym wyzwaniem programowym, z [[teacher-role|nauczaniem]] i [[educational-development|rozwojem edukacyjnym]], ponieważ zmiana programu wymaga przygotowania edukatorów, oraz z [[scaffolding|rusztowaniem]], ponieważ dobrze zaprojektowane programy rusztują rozwój umiejętności w kursach i latach. Powiązania z [[higher-ed|szkolnictwem wyższym]] i [[k-12]] odzwierciedlają znaczenie projektowania programu na różnych poziomach edukacji.

**Wybór jednych ram kompetencji w zakresie SI oznacza wybór słownika, którego nikt nie zestawił.** W przeglądzie zakresowym 50 ram K-12 [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach i wsp. (2026)]] stwierdzili, że definicje kompetencji zbiegają się w wymiarach poznawczym, afektywnym, behawioralnym, etycznym i społecznym, podczas gdy etykiety i konstrukty się nie pokrywały. Tylko ramy ABCE zbliżyły się do wspólnej tradycji pomiaru, zweryfikowanej w Hongkongu, Szanghaju i na Tajwanie, a progresję między poziomami klas proponowano wielokrotnie i nigdzie nie przetestowano.

## Częste błędne wyobrażenia

- **„[[llm|LLM]] potrafi zmapować program nauczania, skoro raz zweryfikowano go z wysoką rzetelnością."** GPT-o3-mini rozdzielił **100% na siedem kompetencji oczekiwanych w przedsiębiorstwach dla każdego z 48 zadań oceniających**, osiągając **alfę Krippendorffa 0,81** wobec wag ekspertów — a **zgodność** załamywała się na konkretnych umiejętnościach. Wysoka ogólna rzetelność przy nierównej zgodności to wzorzec, który trzeba sprawdzić, zanim zaufa się mapowaniu.
- **„Osadzenie kompetencji w zakresie SI oznacza dodanie kursu."** LearnAI pokazuje formę osadzoną: **szeroka warstwa ekspozycji z krótkimi prezentacjami w 18 istniejących kursach w pięciu dyscyplinach (293 studentów)**. Ekspozycja została rozłożona na cały program, a nie zebrana w jedną jednostkę.
- **„Studenci przychodzą już zdolni do krytycznej oceny mediów."** Tylko **13,8% przebadanych studentów edukacji i dziennikarstwa** powiedziało, że ich zajęcia obejmowały krytyczną analizę mediów, wobec **97,8%, którzy uznali ją za ważną**. Luka między cenieniem umiejętności a jej nauczaniem jest programowym otwarciem.

## Połączone koncepcje

- [[pedagogical-partnerships]] — Partnerstwa pedagogiczne
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Parasol: pedagogiki i strategie nauczania w edukacji z SI
- [[recommender-systems-and-learning-paths]]

## Połączone artykuły

- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Weighted, expert-validated skill mapping for accreditation
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Critical discourse analysis of GenAI-for-constructive-alignment guidance (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Addressing Trust in AI Systems through Education: A Didactic Perspective
- [[refrain-amplify-genai-curriculum-2026]] — Refrain-then-amplify curriculum framework for sequencing GenAI (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Project-Based AI Education Curriculum in Thermal Engineering
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Workforce Readiness Level framework for smart manufacturing in the AI era
- [[rewriting-curriculum-genai-pedagogy-2026]] — Rewriting the curriculum: GenAI-driven pedagogical change
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — AI Skills Framework: 26 assessable skills for curriculum mapping
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Just-in-Time AI Co-Creation Across Disciplines
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[niri-steam-ai-literacy-review-2026]] — STEAM education for AI literacy: systematic review
- [[caruana-pre-university-ai-education-slr-2026]] — Preparing learners and teachers for an AI-driven future: SLR of pre-university AI education (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Report from an online workshop on computing assessment in the age of generative AI
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - competency frameworks converge on five dimensions without a shared vocabulary or crosswalk
- [[bursic-ai-residency-education-curriculum-2026]] — Barriers to integrating AI into residency curricula: qualitative interviews with twelve physician leaders
