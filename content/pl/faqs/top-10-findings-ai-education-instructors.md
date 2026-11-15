---
title: "Jakie są 10 najważniejszych wniosków z badań nad SI w edukacji, o których powinni wiedzieć nauczyciele akademiccy?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
updated: "2026-11-14T18:10:00-05:00"
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Te dziesięć badań odnosi się bezpośrednio do decyzji podejmowanych przez nauczycieli: co zadawać, jak to oceniać, jakie narzędzia kupować, jak je budować i jak stwierdzić, czy doszło do uczenia się. Każdy wpis podaje badanie, jego wynik i praktykę, którą zmienia.

## Dziesięć badań

**1. Zwykły dostęp do chatbota obniżył wyniki egzaminów o 17% ([[generative-ai-guardrails-harm-learning|Bastani i wsp., 2025]]).**

Prawie 1 000 uczniów szkół średnich w Turcji, w około 50 klasach, przerobiło trzy sesje matematyczne na tym samym materiale. Jedna grupa miała podczas ćwiczeń zwykłe okno czatu GPT-4. Jedna miała tutora zbudowanego na tym samym modelu, z [[guardrails|barierami ochronnymi]] napisanymi przez nauczycieli: podpowiedziami zamiast odpowiedzi, z poprawnym rozwiązaniem i typowymi błędami umieszczonymi w instrukcji. Grupa kontrolna nie miała SI. Każda sesja kończyła się [[summative-assessment|egzaminem bez dostępu do materiałów]] obejmującym podobne zadania, przy wyłączonym narzędziu.

Grupa ze zwykłym czatem uzyskała podczas ćwiczeń wynik o 48% wyższy od grupy kontrolnej, a na egzaminie o 17% niższy. Uczniowie, którzy nigdy nie korzystali z SI, wypadli lepiej od nich. Grupa z barierami ochronnymi poprawiła się podczas ćwiczeń o 127% i na egzaminie osiągnęła wynik równy wynikowi grupy kontrolnej. Szkoda zniknęła i nie pojawiła się w jej miejsce żadna przewaga w uczeniu się. Zapisy czatu wyjaśniają ten podział: grupa bez barier prosiła o odpowiedzi i na tym kończyła, a grupa z barierami próbowała rozwiązywać zadania, prosiła o podpowiedzi i poprawiała się już w pierwszej sesji.

Dla nauczycieli „SI dozwolona” nie jest polityką. Interfejs decyduje o tym, czy narzędzie staje się kanałem podpowiedzi, czy maszyną do odpowiedzi, a ogólny chatbot domyślnie wybiera to drugie. Okno czatu pozostawione otwarte podczas ćwiczeń kosztuje uczniów, którzy najbardziej na nim polegają.

Osoby zarządzające mogą zestawić ten sam wynik z argumentem zakupowym, że silniejszy model rozwiązuje problem pedagogiki. Model był identyczny w obu ramionach badania.

Zobacz też: [[training-ai-tutors-to-guide-rather-than-answer|Trenowanie tutora, by prowadził, a nie odpowiadał]]

**2. Tutor zbudowany na pedagogice kursu pokonał klasę z aktywnym uczeniem się, w krótszym czasie ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin i wsp., 2025]]).**

Physical Sciences 2 to wprowadzający kurs fizyki na Harvardzie dla studentów kierunków przyrodniczych. Jesienią 2023 r. 194 studentów w badaniu naprzemiennym przeszło dwie lekcje dwukrotnie: raz na zajęciach kursu z [[active-learning|aktywnym uczeniem się]], a raz z tutorem zbudowanym dla tego kursu, z testami przed i po każdej wersji.

Studenci uczyli się więcej z tutorem. Mediana wyniku testu końcowego wyniosła 4,5 wobec 3,5, mediana [[learning-gains|przyrostów uczenia się]] była ponad dwukrotnie wyższa niż w klasie, a oszacowania kwantylowe efektu wynosiły od 0,73 do 1,3 odchylenia standardowego. Mediana czasu z tutorem wynosiła 49 minut, a w klasie około 60 minut, i 83% oceniło jego wyjaśnienia jako równie dobre lub lepsze niż wyjaśnienia nauczycieli. Oceny zaangażowania i motywacji wzrosły. Przyjemność i nastawienie na rozwój nie różniły się.

Wynik opiera się na projekcie. Tutor stosował te same posunięcia co klasa: rozwiązane przykłady, stopniowane podpowiedzi, polecenia samowyjaśniania, sekwencję zgodną z badaniami nad tym, jak uczy się fizyki. Porównanie dotyczyło aktywnego uczenia się, a nie wykładu, więc częsty zarzut, że wszystko bije wykład, tu nie ma zastosowania.

Osoby odpowiedzialne za rozwój kadry mają tu najsilniejszy dostępny argument, że projektowanie tutora jest pracą nad programem, a nie zakupem. Dla zespołów produktowych poprzeczka jest konkretna: dorównać klasie z aktywnym uczeniem się, w krótszym czasie, tymi samymi posunięciami dydaktycznymi.

Zobacz też: [[developing-ai-tutor|Najlepsze praktyki tworzenia tutora SI]]

**3. Tutoring SI dorównał tutoringowi ekspertów ([[studentbench-ai-human-tutoring-gre-2026|Northcutt i wsp., 2026]]).**

StudentBench połączyło 2 469 sesji tutoringowych z 2 383 dorosłymi przygotowującymi się do GRE, wykorzystując 13 tutorów SI zbudowanych na 12 modelach, tutorów ludzkich na żywo i kontrolę wideo. Wynikiem był przyrost uczenia się w zadaniach Quantitative i Verbal.

Połączony tutoring SI był statystycznie równoważny tutoringowi ekspertów ludzkich, w granicach jednej czwartej odchylenia standardowego, a oba przewyższyły kontrolę o około sześć punktów procentowych: 6,86 w Quantitative i 5,47 w Verbal, czyli około półtora do dwóch dodatkowych poprawnych odpowiedzi na sekcję. Tutorzy SI zostali ocenieni niżej za planowanie lekcji i tworzenie zadań ćwiczeniowych, w czym tutorzy ludzcy wypadli lepiej.

Dla osób zarządzających arytmetyka kadrowa zmienia się w przypadku dobrze określonego przygotowania do testów. Gdy licencjonowany tutor dorównuje tutorowi ludzkiemu w granicach jednej czwartej odchylenia standardowego, decyzja dotyczy kosztu i zasięgu, a skuteczność przestaje być pytaniem. Badacze zauważą granicę: równoważność nie jest wyższością, a test standaryzowany to najłatwiejszy wynik do dorównania dla maszyny.

Osoby odpowiedzialne za rozwój kadry mogą przyjrzeć się temu, gdzie tutorzy ludzcy zachowali przewagę: diagnozowaniu, czego uczący się potrzebuje dalej, i budowaniu wynikającej z tego sekwencji.

Zobacz też: [[intelligent-tutoring|Inteligentny tutoring]]

**4. Robienie notatek pokonało pytanie chatbota, trzy dni później ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes i wsp., 2026]]).**

Kreijkes i współpracownicy przeprowadzili wstępnie zarejestrowany eksperyment w siedmiu angielskich szkołach średnich. 405 uczniów dziesiątej klasy przeszło dwa z trzech warunków na tekście historycznym: chatbota, który mógł odpowiadać na pytania o tekst, robienie notatek albo oba. Trzy dni później uczniowie pisali testy bez dostępu do materiałów sprawdzające dosłowne zapamiętanie, rozumienie i [[retrieval-spacing-interleaving|swobodne przypominanie]].

Notatki pokonały chatbota we wszystkich trzech miarach, o około pół odchylenia standardowego w zapamiętywaniu i blisko cztery dziesiąte w rozumieniu. Notatki plus chatbot pokonały samego chatbota w dwóch z trzech miar i nie dały nic w swobodnym przypominaniu, a same notatki były silniejsze niż połączenie. W warunku łączonym około jedna czwarta uczniów skopiowała odpowiedzi chatbota do notatek. Uczniowie nadal oceniali chatbota jako łatwiejszego, bardziej pomocnego i przyjemniejszego niż pisanie.

Nauczyciele mają tu bezpośredni dowód, że asystent czytania może zastąpić czytanie. Jeśli celem zadania jest zrozumienie tekstu, [[writing-education|pisanie jest rozumieniem]], a narzędzie, które odpowiada na pytania o tekst, usuwa ćwiczenie. Notatki należy zachować. Jeśli chatbot jest dozwolony, trzeba prosić o coś, czego nie dostarczy: porównanie, zakwestionowanie tekstu albo streszczenie napisane po zamknięciu narzędzia.

Zobacz też: [[ai-support-reading-comprehension|Wsparcie SI w rozumieniu tekstu]]

**5. Czas nauki spadł o 27%, a wraz z nim zapamiętywanie ([[generative-ai-reduced-study-time-math|Rismanchian i wsp., 2026]]).**

Dziesięcioletni panel z platformy ALEKS, obejmujący 3,2 mln interakcji uczenia się i 12,2 mln czasów odpowiedzi w testach plasujących, pokazuje, co uczniowie robili po pojawieniu się ChatGPT. Projekt porównuje typy zadań, które można wkleić do chatbota (tekstowe zadania z treścią), z typami wymagającymi manipulowania wykresem wewnątrz platformy, w ramach tego samego programu nauczania.

Czas na zadaniach podatnych na SI spadł o 2,8% na kwartał wśród studentów, o 26,9% w ciągu jedenastu kwartałów. U uczniów szkół średnich spadł o 31,3%, u uczniów starszych klas szkoły podstawowej o 9,0%, a u piątoklasistów nie zaobserwowano wykrywalnej zmiany. Spadek zniknął całkowicie pod [[remote-proctoring|nadzorem egzaminacyjnym]], co jest rozstrzygającym testem: gdy narzędzie było niedostępne, uczniowie spędzali tyle samo czasu co wcześniej. Nadzorowane zadania sprawdzające zapamiętywanie wykazały skumulowany spadek o 25% szansy na poprawną odpowiedź.

Gradient wieku jest sygnałem projektowym dla zespołów produktowych. Zmienia się czas ćwiczeń i zmienia się najbardziej tam, gdzie zadanie najłatwiej przekazać. Dla nauczycieli czas poświęcony na zadanie to tani wczesny sygnał ostrzegawczy: kohorta, która kończy te same zadania znacznie szybciej, prawdopodobnie nie uczy się tego samego.

Zobacz też: [[reducing-over-reliance|Ograniczanie nadmiernego polegania na SI]]

**6. Oceny za zadania domowe wzrosły o 18%, a egzaminy bez dostępu do materiałów spadły o 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg i wsp., 2026]]).**

26 811 uczniów klas 7-12 w Chinach, obserwowanych przez 30 miesięcy, z generatywną SI wdrażaną w różnych momentach w poszczególnych kohortach. Oceny za zadania domowe wzrosły o 18%, a czas ich wykonania spadł o 30%, z 64 do 45 minut. Miesięczne egzaminy bez dostępu do materiałów spadły o 20% średniej wyjściowej w ciągu sześciu miesięcy, a egzaminy wstępne decydujące o przyjęciu spadły o 18% do 24% po około dwóch latach.

Chronologia pokazuje mechanizm. Około 81% użytkowników SI kończyło zadania domowe szybciej niż najszybszy uczeń niekorzystający z SI, a potem wypadało słabo na egzaminach. Mniejszość, która utrzymała czas pracy domowej porównywalny z osobami niekorzystającymi z SI, uczyła się równie dobrze jak wszyscy. Straty były największe w naukach społecznych, następnie w naukach ścisłych, następnie w językach, i większe u uczniów osiągających wysokie wyniki.

Ukończenie zadania domowego jest słabym wskaźnikiem osiągnięć, a luka pojawia się w ciągu sześciu miesięcy, długo przed zmianą wyników egzaminów wstępnych. Nauczyciele mogą działać wcześniej: oceniane dowody należy gromadzić bez dostępu do materiałów, a pracę domową traktować jako ćwiczenie, którego czas wykonania jest widoczny.

Zobacz też: [[checking-whether-educational-ai-works|Sprawdzanie, czy edukacyjna SI działa]]

**7. Każdy testowany tutor zawiódł pod względem pedagogicznym, a im dłuższa rozmowa, tym gorzej ([[hazra-safetutors-pedagogical-safety-2026|Hazra i wsp., 2026]]).**

SafeTutors przetestował 11 tutorów, od modeli otwartych o 3,8B do 72B oraz GPT-5-mini, w matematyce, fizyce i chemii, wobec taksonomii 11 wymiarów i 48 podryzyk zaczerpniętych z [[learning-theories|nauki o uczeniu się]]. Kategorie błędów są pedagogiczne: zbytnie ujawnianie odpowiedzi, wzmacnianie błędnych przekonań i porzucanie [[scaffolding|rusztowania]]. Każdy z nich wygląda na pomocny w danej chwili, bo uczeń szybko otrzymuje poprawną odpowiedź.

Każdy model wykazał rozległe szkody pedagogiczne. Większe modele nie były wiarygodnie bezpieczniejsze, a ogólna pomocność korelowała tylko słabo z bezpieczeństwem pedagogicznym. Wskaźniki szkód wzrosły z 17,7% w wymianach jednorundowych do 77,8% w rozmowach trwających od pięciu do ośmiu rund.

Jednorundowe oceny nie są dowodem bezpiecznego tutora i zespoły produktowe powinny tak projektować swoje testy. Model, który przechodzi jednorazową kontrolę pomocności i bezpieczeństwa, może zawodzić w większości rzeczywistej rozmowy. Osoby zarządzające, które kupują tutora, potrzebują trzech odpowiedzi: czy powstrzymuje rozwiązania, czy sonduje błędne przekonania i czy wytrzymuje całą sesję. Demonstracja dostawcy obejmująca jedną wymianę nie daje żadnej z nich.

Zobacz też: [[pedagogical-safety|Bezpieczeństwo pedagogiczne]]

**8. Sprawy naruszeń opierają się na słabszych dowodach, niż sugerują oskarżenia ([[munoz-misconduct-allegation-evidence-2026|Munoz i wsp., 2026]]).**

Munoz i współpracownicy zakodowali każdą sprawę naruszenia z udziałem generatywnej SI na jednym australijskim uniwersytecie w ciągu trzech lat: 1 162 sprawy zawierające 1 855 pozycji dowodowych, każdą ocenioną pod kątem trafności, wiarygodności i siły wnioskowania.

Oskarżenia dotyczące generatywnej SI wzrosły z 11,9% spraw o naruszenia w 2023 r. do 36,9% w 2025 r., podczas gdy całkowita liczba spraw pozostała na tym samym poziomie. 58 spraw, 5% całości spraw z GenAI, opierało się wyłącznie na twierdzeniu, bez żadnej pozycji dowodowej. Wyniki detektorów były rzadkie i słabe: raporty Turnitin lub podobieństwa nie miały siły wnioskowania w 73 pozycjach, a samodzielne wyniki GPTZero miały niską wiarygodność w 69. Najsilniejsze dowody pochodziły ze śledztwa, a nie z oskarżenia: ustne przyznanie się w rozmowie wystąpiło w 410 pozycjach, z których 97,2% stanowiło silny dowód. [[hallucination-risk|Sfabrykowane odniesienia]] były największą zmianą strukturalną, 22,3% pozycji, rosnąc z 10,4% w 2023 r. do 30,0% w 2025 r.

Dla osób zarządzających lekcja jest proceduralna. Sprawa zbudowana na wyniku detektora nie przetrwa odwołania, a śledztwo rozpoczęte od narzędzia, a nie od rozmowy, daje słabą dokumentację. Nauczyciele mogą działać wobec artefaktu, który pojawia się stale: sfabrykowane odniesienia są częste, a sprawdzenie źródeł jest tanie.

Zobacz też: [[should-we-use-ai-detectors|Korzystanie z detektorów SI]]

**9. Pewność nauczycieli co do własnych kompetencji w zakresie SI ledwo odpowiada zmierzonej umiejętności ([[ai-literacy-assessment-misalignment|Zhang i wsp., 2026]]).**

288 nauczycieli szkół podstawowych i średnich wypełniło samoopisową ankietę kompetencji w zakresie SI oraz obiektywną miarę wykonania opartą na tych samych ramach: Koncepcja, Wykorzystanie, Ocena i Etyka. Korelacje między nimi wynosiły od 0,07 do 0,24.

Analiza profili utajonych wyłoniła sześć grup. 43 nauczycieli oceniało siebie konsekwentnie wysoko, uzyskując niższe wyniki na miarze obiektywnej. 59 wykazało odwrotność. Pozostali skupili się wokół średniej albo podzielili według wcześniejszego doświadczenia z SI.

Dla osób odpowiedzialnych za rozwój kadry [[self-assessment|samoocena]] nie jest analizą potrzeb. Ankieta pytająca nauczycieli o pewność siebie nadmiernie wesprze pewnych siebie i zbyt słabo obsłuży cichych, a te grupy nie są tymi kompetentnymi i tymi, którzy mają trudności. Krótkie zadania sprawdzające wykonanie pozwalają je rozdzielić. Badacze powinni traktować niskie korelacje jako ostrzeżenie pomiarowe: każde badanie [[ai-literacy|kompetencji w zakresie SI]] oparte na [[self-report-measures|samoopisie]] mierzy pewność siebie.

Zobacz też: [[faculty-development-ai|Rozwój kadry, który zmienia praktykę]]

**10. Ocenianie przez SI karze uczniów, którzy piszą słabiej ([[ai-scoring-language-bias-physics|Feser i Tschisgale, 2026]]).**

Wyjaśnienia fizyczne 116 uczniów szkół średnich zostały ocenione przez 9 podejść uczenia maszynowego i 2 podejścia z dużymi modelami językowymi, a następnie porównane z ocenami ekspertów. Zgodność z ekspertami wynosiła od 67,2% do 78,4%, co brzmi akceptowalnie, dopóki nie rozłoży się błędów.

Każde podejście zaniżało rozumienie pojęciowe w przypadku wyjaśnień o niższej jakości językowej. Stronniczość szła w jedną stronę: lepsze pisanie nie było zawyżane. Wzorzec odzwierciedla to, co raportowano dla samych nauczycieli fizyki, co sugeruje, że trudność polega na wnioskowaniu o rozumieniu z prozy, zarówno dla ludzi, jak i dla modeli.

Osoby oceniające i zespoły produktowe muszą raportować wskaźniki zaniżeń według jakości językowej, a nie tylko ogólną zgodność z ekspertami, ponieważ średnia ukrywa grupę, która ponosi szkodę. Przy ocenianiu [[multilingual-learning|uczących się wielojęzycznie]] odpowiedzi o niskiej jakości językowej należy kierować do [[human-in-the-loop-ai|przeglądu przez człowieka]] albo projektować zadania niezależne od prozy.

Zobacz też: [[ai-grading-fairness-reliability|Sprawiedliwe i rzetelne ocenianie przez SI]]

## Co łączy te dziesięć badań

Trzy z tych badań mierzą dwie rzeczy naraz: co uczniowie wytwarzają z narzędziem i co potrafią bez niego. Bastani, Rismanchian i Strömberg wszyscy stwierdzają rozbieżność między nimi, a tylko miara bez pomocy zachowuje się jak uczenie się. Cztery zależą od wyboru projektu, a nie od modelu: bariery ochronne u Bastaniego, pedagogika wbudowana w tutora Kestina, pisanie, które Kreijkes pozostawił w zadaniu, oraz wielorundowe warunki testowane przez SafeTutors. Trzy badają system wokół narzędzia: dowody wykorzystywane w sprawach naruszeń, sposób mierzenia kompetencji nauczycieli i założenia językowe w [[automated-assessment|automatycznym ocenianiu]]. StudentBench ustala równoważność na teście standaryzowanym, jedynym wyniku, w którym maszyna najłatwiej dorównuje człowiekowi. Bastani pojawia się w dwóch grupach, bo dostarcza zarówno luki, jak i rozwiązania projektowego.

To zostawia trzy pytania warte zabrania do każdej decyzji o kursie lub produkcie. Co uczeń powinien potrafić, gdy narzędzia nie ma? O co zadanie prosi go, gdy narzędzie jest otwarte? Jaki dowód pokazałby różnicę miesiąc później?

## Gdzie te dowody są cienkie

Te badania dzielą [[limitations-in-aied-research|ograniczenia badań nad SI w edukacji]] jako całości. Dwa największe osadzono w Turcji i Chinach, trzy w Stanach Zjednoczonych, jedno w Anglii, jedno w Australii, a badanie oceniania w Niemczech. Jedno jest testem porównawczym modeli komercyjnych, a nie badaniem terenowym. Dominuje matematyka w szkole średniej, następnie fizyka i informatyka. Bardzo niewiele badań dotyczy na dużą skalę [[humanities-education|pisania w humanistyce]], kształcenia zawodowego albo uczniów z niepełnosprawnościami.

Tylko panel chiński i panel ALEKS obserwują uczniów dłużej niż dwa lata po wdrożeniu, a autorzy chińscy argumentują, że krótsze badania systematycznie zaniżają długofalową szkodę w uczeniu się. Sześć z tych wyników to przeddruki lub prace robocze, które nie przeszły pełnej recenzji: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang i Feser. Badania Bastaniego, Kestina, Kreijkesa i Munoz są opublikowane w recenzowanych czasopismach.

Wyniki zerowe i negatywne są w tej literaturze rzadkie, więc opublikowana literatura prawdopodobnie zawyża, jak często SI pomaga. Te badania są najlepszym obecnym wskazaniem w dziesięciu decyzjach i żadne z nich nie rozstrzyga pytania.

## Dokąd dalej

[[does-ai-help-students-learn|Czy SI pomaga studentom się uczyć?]] to szerszy przegląd dowodów stojących za tymi twierdzeniami. [[redesign-assessment-ai-era|Jak przeprojektować ocenianie w erze SI?]] rozwija część dotyczącą oceniania. W sprawach uczciwości [[reduce-ai-cheating|Jak ograniczyć oszukiwanie z użyciem SI?]] omawia dowody procesowe i politykę. Jeśli chodzi o wnioski dotyczące rozwoju zawodowego, [[faculty-ai-competencies|Jakie kompetencje w zakresie SI potrzebuje kadra akademicka?]] jest stroną towarzyszącą, a [[addressing-common-misconceptions-ai-education|Jak rozprawić się z częstymi nieporozumieniami o SI w edukacji?]] zajmuje się zarzutami, które prawdopodobnie usłyszy się od kolegów.
