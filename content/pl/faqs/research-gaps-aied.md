---
title: "Jakie są istotne luki w literaturze naukowej o SI w edukacji?"
created: "2026-08-24T14:10:00-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Do terminu złożenia wniosku grantowego zostało osiem dni, a sekcja tła wymaga jednego zdania o tym, czego ta dziedzina jeszcze nie wie. Albo współpracownik powiedział komisji, że tutoring z SI podnosi wyniki, powołując się na dwuletni eksperyment w 18 gimnazjach, a teraz trzeba powiedzieć, co to badanie może udźwignąć. Albo trzeba wybrać temat rozprawy i każda jego wersja wydaje się już opracowana.

Istotne luki dotyczą siły, swoistości i stosowalności. SI potrafi wykonywać zadania edukacyjne; otwarte pytania dotyczą tego, czy konkretny projekt daje trwałą korzyść, komu, przez jaki mechanizm i w jakich warunkach. To rozróżnienie rozstrzyga dwie sprawy na biurku: co badać dalej i czego w międzyczasie przestać twierdzić. [[limitations-in-aied-research|Ograniczenia w badaniach nad SI w edukacji]] to katalog stojący za tą stroną. Dowody dotyczące [[intelligent-tutoring|systemów tutoringu inteligentnego]], predykcyjnej [[learning-analytics|analityki uczenia się]], [[generative-ai|generatywnej SI]] i agentów autonomicznych również nie są wymienne, a badania nad wykorzystaniem SI do wspierania uczenia się różnią się od badań nad uczeniem ludzi o SI, co wyjaśnia przegląd [[ai-education|SI w edukacji]].

## W skrócie

**1.** Należy porównać SI z silną alternatywą bez SI, przy programie nauczania, ćwiczeniu i wsparciu utrzymanych na stałym poziomie, a następnie wskazać, co SI dodała.

**2.** Należy mierzyć odroczone wyniki osiągane bez pomocy i zaznaczyć, że wynik osiągany z pomocą nie jest przyrostem w uczeniu się.

**3.** Należy podać, który element pakietu wykonał pracę i na jaki mechanizm się powołujemy.

**4.** Należy zwalidować każdy wynik automatyczny i każdego symulowanego uczącego się wobec rzeczywistych uczących się, także tych spoza próby rozwojowej.

**5.** Należy wskazać granicę populacji, ponieważ uśredniony wynik zbiorczy nie odpowiada na pytanie o równość.

**6.** Należy opisać układ na tyle dokładnie, by ktoś inny mógł go odtworzyć.

## Wybór porównania, które izoluje SI

Rygorystyczne eksperymenty klasowe istnieją, więc zdanie „potrzebujemy badań randomizowanych” nie nazywa już tej luki. Ostrzejsze pytanie brzmi, czy komponent SI wnosi wartość ponad dodatkowe ćwiczenie, lepsze materiały, terminową informację zwrotną lub większe wsparcie dydaktyczne.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] opisuje skromne przyrosty wyników w 18 gimnazjach przy ograniczonym merytorycznym zaangażowaniu w tutoring, a autorzy zauważają, że przyrosty przypominały te z ustrukturyzowanego ćwiczenia bez SI. To dowód dotyczący wdrożonego pakietu i nie pozwala wyizolować tego, co dodała zawarta w nim SI.

Problem u podłoża jest zarówno pojęciowy, jak i empiryczny. „ChatGPT” nazywa narzędzie, a nie metodę. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich i wsp. (2025)]] przejrzeli 19 porównań z użyciem ChatGPT w edukacji: tylko w 4 z nich (21%) określono wszystkie trzy elementy, czyli powtarzalne oddziaływanie, zoperacjonalizowaną grupę kontrolną i trafną miarę uczenia się (74% dobrze zdefiniowane oddziaływanie, 42% dobrze zdefiniowana kontrola, 53% wynik uczenia się). Gdy nowa SI pojawia się razem z nowymi aktywnościami, nową informacją zwrotną lub nowym projektem interfejsu, środek i metoda są uwikłane razem i żaden efekt nie należy do SI.

Co by to rozstrzygnęło: porównania z realistycznymi alternatywami bez SI przy programie, możliwościach ćwiczenia i wsparciu utrzymanych tak stałych, jak to możliwe, a do tego niezależne replikacje w różnych instytucjach, u różnych nauczycieli, w różnych przedmiotach i na różnych modelach. Metody odpowiadają tu na różne pytania. Prace [[qualitative-research|jakościowe]] i [[design-based-research|oparte na projektowaniu]] wyjaśniają wdrożenie, a dobrze zaprojektowane eksperymenty dźwigają twierdzenia przyczynowe, co przedstawia strona [[research-methods-aied|Metody badań nad skutecznością]].

## Pomiar uczenia się po odłożeniu narzędzia

Lepsza praca w trakcie korzystania z SI nie jest dowodem na uczenie się, które przetrwa koniec pomocy. Syntezy [[learning-gains|Przyrosty w uczeniu się]] i [[cognitive-offloading|Odciążanie poznawcze]] nieustannie wyznaczają tę samą granicę między wynikiem osiąganym z pomocą, zachowaną wiedzą, samodzielnym rozumowaniem i transferem.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] pokazuje problem pomiaru w randomizowanym eksperymencie z ponad 6 000 uczniów gimnazjów. Reguła opanowania wymagająca trzech poprawnych odpowiedzi z rzędu podniosła sukces definiowany przez platformę, nie dając sama z siebie wykrywalnych przyrostów w uczeniu się po tygodniu. Najsilniejszy dowód z odroczonego testu pojawił się wtedy, gdy SI działała wewnątrz procesu opanowania i skupiała się na materiale objętym ćwiczeniem.

Pozostała luka dotyczy trajektorii zdolności i jeden dodany test końcowy jej nie zamyka. Nikt nie ustalił retencji w skali miesięcy, transferu między zadaniami, wyników po wycofaniu pomocy ani trafności, z jaką uczący się oceniają własną wiedzę, a dziedzina nie oddzieliła niepowodzenia w nabywaniu umiejętności od pogarszania się umiejętności już ugruntowanej. Badania nad odciążaniem wciąż muszą pokazać, kiedy delegowanie wspiera te trajektorie, a kiedy wypiera ćwiczenie, które je buduje.

## Ustalenie, który element pakietu wykonał pracę

„Uczenie się wspierane przez SI” zwykle łączy kilka zmian: nową informację zwrotną, dodaną refleksję, dyskusję rówieśniczą, inne sekwencje zadań, zmienione zachęty w ocenianiu. Pakiet, który się udaje, nie mówi, które komponenty były konieczne.

[[genai-feedback-design-multisite-experiment|Projekt informacji zwrotnej GenAI zorientowany na człowieka]] to realny postęp w tej kwestii. Wśród 1 176 studentów pierwszego roku studiów licencjackich projekty refleksyjne i hybrydowe przewyższyły bezpośrednią [[ai-feedback-quality|informację zwrotną od SI]] pod względem odroczonego transferu bez SI. Warunek hybrydowy łączył samoocenę, [[peer-assessment|informację zwrotną rówieśniczą]] i krytykę SI. To oddziela sposób organizowania i wykorzystania informacji zwrotnej od tego, czy studenci mają do niej dostęp w ogóle.

Wciąż otwarte pozostaje, jaki jest wkład i moment pierwszych samodzielnych prób, samoobjaśniania, wkładu rówieśników, informacji zwrotnej korygującej, podpowiedzi i wycofywania pomocy oraz jak każdy z tych elementów współdziała z [[prior-knowledge|wcześniejszą wiedzą]] i trudnością zadania.

Równolegle biegnie luka teoretyczna. Nazwanie [[learning-theories|teorii uczenia się]] nie jest jej testowaniem. Badanie potrzebuje przewidywania teoretycznego powiązanego z konkretnym zachowaniem systemu i mierzalnym procesem uczenia się, a mediacja statystyczna zasila to wyjaśnienie, nie ustalając mechanizmu przyczynowego. [[theory-development-aied|Rozwój teorii w SI w edukacji]] i [[scaffolding|rusztowanie]] rozwijają ten wątek dalej.

## Walidacja miary przed interpretacją

Konstrukty takie jak zaangażowanie, [[critical-thinking|myślenie krytyczne]], kompetencje w zakresie SI i [[personalized-learning|personalizacja]] są w tej literaturze mierzone niekonsekwentnie. Samoopisy opisują postrzeganie; nie mogą zastąpić wykazanej kompetencji. Trafność techniczna, jakość wyników oceniana przez ekspertów i uczenie się studentów to trzy różne cele ewaluacji. [[educational-measurement|Pomiar edukacyjny]] i [[ai-ed-evaluation|Ewaluacja SI w edukacji]] traktują te rozróżnienia jako podstawowe.

Jedna luka tkwi wewnątrz problemu pomiaru: [[ai-technologies|systemy SI]] używane do oceny innych systemów SI. W tekście [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]] [[simulating-students|symulowani studenci]] często porzucali przypisane im [[misconceptions|błędne przekonania]] po informacji zwrotnej korygującej, niezależnie od tego, czy informacja ta odnosiła się do błędnego przekonania, więc ich odpowiedzi mogły sprawiać, że nieskuteczne nauczanie wyglądało na udane. Ukierunkowane szkolenie poprawiło stosowaną w badaniu miarę wierności, a poprawa w tej mierze nie jest walidacją wobec ludzkiego uczenia się.

Brakuje walidacji całego łańcucha ewaluacji, od zachowania modelu, przez [[pedagogy|osąd pedagogiczny]], po reakcję uczącego się i wynik edukacyjny, na uczących się i w warunkach nieużywanych podczas tworzenia. Ludzki osąd wymaga takiej samej kontroli, ponieważ zgodność między oceniającymi nie jest dowodem, że zmierzono właściwy konstrukt.

## Ustalenie, co ocenianie może jeszcze poświadczyć

SI tworzy dwa powiązane problemy oceniania: pomaga wytworzyć ocenianą pracę i może wpływać na to, jak ta praca jest punktowana.

[[ai-agents-complete-lms-assessment-validity-2026|Badanie agentów SI wykonujących oceniane zadania na platformie LMS]] z tej bazy wiedzy dokumentuje, jak agenci poruszali się po działającym kursie licencjackim i kończyli oceniane aktywności. Pokazuje to zdolność, która podważa założenia o dowodach wytwarzanych przez studentów. Nie przesądza jednak, jak powszechne jest takie użycie, i nie unieważnia oceniania asynchronicznego jako kategorii.

Pytanie badawcze brzmi, które projekty wciąż pozwalają na obronne wnioski o uczącym się. [[eportfolio|Portfolio]], refleksje, etapowe oddawanie prac i dzienniki aktywności wymagają walidacji jako dowody, a nie założenia, że ustalają autorstwo lub zrozumienie. Badania powinny testować kombinacje dowodów wobec niezależnie zaobserwowanej kompetencji, uwzględniając dostępność, obciążenie pracą, prywatność i niepokój studentów. Szczegóły zawiera strona [[assessment-validity|Trafność oceniania]].

W przypadku [[automated-assessment|oceniania automatycznego]] tekst [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] opisuje systematyczną niezgodność między modelami w konfiguracji domyślnej a ludzkimi oceniającymi. Wyniki dotyczą konkretnych konfiguracji i pokazują, dlaczego spójność wewnętrzna nie może dźwigać twierdzenia o trafności.

[[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] proponuje osobne ocenianie tego, co uczący się muszą zrobić samodzielnie, co mogą osiągnąć z SI i co muszą zweryfikować i obronić. To rama czekająca na walidację empiryczną.

Wykrywanie to najwyraźniejsza ślepa uliczka w tym obszarze. [[karr-ai-detection-humanization-2026|Karr i wsp. (2026)]] uruchomili dwa komercyjne detektory przy τ = 0,50 na 642 opublikowanych streszczeniach w języku angielskim. Zgodną z wytycznymi lekką redakcję z użyciem SI oznaczano w 38-80% przypadków. Niezmienione oryginały z lat 2023-25 oznaczano w 9-15%, przy czym prace spoza [[stem-education|STEM]] znacznie częściej niż prace z STEM, przy p < 0,001. Po humanizacji narzędzia wychwyciły mniej niż 4% przepisanych tekstów oznaczonych jako SI, co daje odsetek wyników fałszywie negatywnych powyżej 96%. Wynik, który karze uczciwą pomoc i nie zauważa unikania, nie może stanowić podstawy wniosku o uczącym się.

## Koniec z czytaniem wyników kompetencji jako dowodu zachowania

Badania nad interwencjami w zakresie kompetencji w SI są na tyle liczne, że można je syntetyzować. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education]] obejmuje 59 badań i 7 211 uczestników, podaje dodatni efekt średni, a jednocześnie znaczną zmienność przy szerokim przedziale predykcji obejmującym zero. Wyniki dotyczące wiedzy okazały się silniejsze niż umiejętności, postawy czy etyka.

Ostrzejsza luka dotyczy tego, czy nauczanie kompetencji zmienia to, co ludzie robią, gdy korzystają z SI, i kolejne ramy kompetencji jej nie zamkną. Czy uczący się potrafią rozpoznać niepoparte twierdzenia, zweryfikować źródła, odrzucić mylące sugestie, zauważyć niestosowną zgodę i wybrać, kiedy nie delegować? Czy cokolwiek z tego utrzymuje się pod presją czasu i czy przenosi się na nieznane systemy i dziedziny?

Rozstrzygnięcie tego wymaga oceniania opartego na wykonaniu, połączonego z obserwacją rzeczywistych decyzji i odroczoną kontrolą, przy rozdzieleniu wiedzy pojęciowej, biegłości operacyjnej i osądu krytycznego zamiast ich łączenia. Rozróżnienia dostarczają [[ai-literacy|Kompetencje w zakresie SI]] i [[trust-calibration|Kalibracja zaufania]].

## Raportowanie, kogo wynik pomija

Wyniki z jednego kursu, instytucji, języka lub populacji uczących się rzadko uprawniają decyzje gdzie indziej, a synteza [[limitations-in-aied-research|Ograniczenia w badaniach nad SI w edukacji]] traktuje ten problem jako powracający. To, jak efekty różnią się w zależności od etapu rozwoju, dziedziny, wcześniejszej wiedzy, niepełnosprawności, języka i warunków zasobowych, pozostaje w dużej mierze niezmierzone.

Badania nad równością muszą też oddzielić dostęp, umiejętności i wyniki. Synteza [[digital-divide|Przepaść cyfrowa]] jasno mówi, że urządzenia i dostęp do narzędzi nie dają równej zdolności czerpania korzyści. [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] objęło 752 uczniów szkół średnich I stopnia w Hongkongu: luki w gotowości psychologicznej zmniejszyły się, a różnice w obiektywnym teście kompetencji w SI utrzymały się. Każda grupa się poprawiła, a nierówność nie zniknęła. Profile wcześniejszego uczenia się nie były przydzielane losowo, więc ich rola przyczynowa pozostaje nieznana.

Pokrycie jest cienkie w konkretnych miejscach. [[differential-effects-across-learner-groups|Zróżnicowane efekty między grupami uczących się]] liczy literaturę według populacji: najgłębsze wątki dotyczą uczących się drugiego języka i uczących się wielojęzycznych oraz studentów z niepełnosprawnościami, następnie płci i neuroróżnorodności, studenci pierwszego pokolenia i studenci zagraniczni mają w tej bazie po jednym badaniu, uczniowie zdolni i osiągający wysokie wyniki są praktycznie niezbadani, a uczący się będący uchodźcami, imigrantami i osobami wysiedlonymi nie pojawiają się w żadnym badaniu. Baza dowodów o takim kształcie nie może odpowiedzieć na pytanie o równość przez agregację.

Zdolności różnią się także wewnątrz jednego systemu krajowego. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye i wsp. (2026)]] ocenili integrację SI na 45 uniwersytetach nigeryjskich i stwierdzili umiarkowane ogólne przyjęcie (M = 4,79, zakres od 1,83 do 7,83 w skali 10-punktowej), przy czym typ instytucji nie przewidywał integracji po kontroli wieku i położenia geograficznego (wiek β = 0,43; położenie na południowym zachodzie β = 0,31). Zdolności wewnętrzne korelowały ze sobą na poziomie r = 0,79-0,80, a współprace międzynarodowe z partnerstwami z przemysłem na poziomie r = 0,74, więc instytucje dobrze skomunikowane kumulują narastające przewagi. To, jakie projekty budowania zdolności zmieniają wyniki w instytucjach nowszych i słabiej skomunikowanych, pozostaje nieprzetestowane.

Priorytetem badawczym jest wskazanie projektów, które zmniejszają różnice w wykazywanej zdolności, uczestnictwie i [[agency|sprawczości]], przy raportowaniu wyników i obciążeń podgrup obok średnich przyrostów. Dostępność niesie własne nierozstrzygnięte pytanie: czy projekt usuwa barierę uczestnictwa, czy zastępuje zdolność, którą uczący się ma rozwinąć. Zobacz strony [[equity-in-ai-education|Równość w edukacji z SI]] i [[accessibility|dostępność]].

## Wskazanie, kto sprawuje kontrolę i kiedy się ona zmienia

Gdy systemy planują, inicjują działania, przechowują pamięć i koordynują narzędzia, pytanie edukacyjne staje się pytaniem o to, kto powinien kontrolować które części procesu uczenia się i kiedy ta kontrola powinna się przesunąć.

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] mapuje 474 badania i stwierdza ograniczoną walidację longitudinalną, koncentrację w [[higher-ed|szkolnictwie wyższym]] i w STEM oraz słabą integrację z teorią edukacji: tylko 29% przejrzanych badań odwoływało się wprost do teorii edukacji, co jest ustaleniem o tym korpusie, a nie o całym dorobku AIED.

Pytania otwarte same się nasuwają. Czy pomoc inicjowana przez uczącego się daje inne wyniki niż pomoc inicjowana przez agenta? Czy wsparcie można wycofywać wraz z rozwojem kompetencji bez strat? Czy uczący się zachowują zdolność kwestionowania systemu? Syntezy [[agentic-ai|SI agentowa]] i [[human-ai-collaboration|Współpraca człowieka z SI]] dodają kwestię interwencji [[teacher-role|nauczyciela]] i odpowiedzialności w układach wieloagentowych, w których nikt nie ustalił, kto odpowiada za decyzję agenta. Większa autonomia jest wyborem projektowym w pedagogice, którego baza dowodowa dopiero powstaje.

## Testowanie awarii bezpieczeństwa na rzeczywistych uczących się

Bezpieczeństwo edukacyjne wykracza poza trafność faktyczną i zakazane prośby. Tutor może udzielić poprawnej odpowiedzi, odbierając uczącemu się okazję do rozumowania, utrwalając błędne przekonanie lub budując zależność. Konstrukt ten opisuje strona [[pedagogical-safety|Bezpieczeństwo pedagogiczne]].

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] wskazuje awarie, w tym nadmierne ujawnianie odpowiedzi i porzucanie rusztowania, przy czym awarii było znacznie więcej w testach wieloturówych. To ustalenia z [[benchmark|testów porównawczych]] w określonych warunkach, a nie szacunki, jak często szkoda występuje w klasach.

Nie wiadomo, co się dzieje, gdy te awarie spotykają rzeczywistych uczących się przy dłuższym używaniu. Nie zmierzono, które dają przejściową dezorientację, które utrwalone błędne przekonania, które obniżają motywację, a które osłabiają samodzielność. Nikt też nie ustalił, które zabezpieczenia zmniejszają te ryzyka bez nadmiernej odmowy lub frustracji. Prace długoterminowe wymagają także traktowania jako wyników zaufania, gotowości do szukania ludzkiej pomocy, [[agency|sprawczości uczącego się]] oraz relacji z rówieśnikami i nauczycielami. W przypadku dzieci wymaga to badań odpowiednich dla etapu rozwoju, łączących zachowanie systemu z wynikami edukacyjnymi i relacyjnymi.

## Oddzielenie przyjęcia narzędzia od jego wdrożenia

Zdolność techniczna nie oznacza, że narzędzie jest dobrze używane, a rozwój zawodowy nie dociera automatycznie do studentów. Brakujące ogniwo zwykle biegnie od przygotowania nauczycieli, przez zmienioną praktykę w klasie, do wyników studentów.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]] to badanie wielopoziomowe obejmujące 46 nauczycieli i 2 832 studentów. Wiedza pedagogiczna o SI była powiązana z postrzeżeniami i intencjami studentów, a żaden z mierzonych komponentów wiedzy nauczyciela nie był bezpośrednio powiązany z przyrostem wiedzy studentów o SI. Takie powiązania nie dowodzą, że interwencja szkoleniowa spowodowałaby lepsze uczenie się.

Otwarte pytanie brzmi, które kombinacje coachingu, [[curriculum-design|zgodności z programem]], rutynowych przeglądów, harmonogramowania i wsparcia instytucjonalnego dają trwałą poprawę, a badania muszą obserwować rzeczywiste nauczanie, a nie pewność siebie nauczycieli czy ich zamiar przyjęcia narzędzia. Teren ten obejmują strony [[teacher-ai-competency|Kompetencje nauczycieli w zakresie SI]] i [[educational-development|Rozwój edukacyjny]].

Drugą luką jest porównawcza efektywność kosztowa. Ewaluacje powinny liczyć czas weryfikacji, korekty, szkolenia, nadzoru, utrzymania i wdrożenia obok kosztów subskrypcji i korzystania z modeli oraz porównywać ofertę wspieraną przez SI z realistycznymi alternatywami. Pytanie warte odpowiedzi brzmi, jaką korzyść edukacyjną daje cały układ w stosunku do pochłanianych zasobów.

## Traktowanie dokumentów zarządzania jako deklaracji intencji

Zasady [[ethics|etyczne]] i ramy zarządzania są konieczne, a ich istnienie nie dowodzi, że zmieniają praktykę lub chronią uczących się.

[[agarwal-ethical-values-norms-aied-2026|Agarwal i wsp.]] przejrzeli 25 artykułów i stwierdzili, że odbiorcy końcowi są w literaturze etycznej w dużej mierze bierni, a głosy studentów zasadniczo nieobecne, obok napięć między wartościami i asymetrii władzy między interesariuszami. To opis przejrzanej literatury, a nie twierdzenie, że studenci nigdy nie biorą udziału w projektowaniu AIED.

Brakuje dowodów na to, które rozwiązania w zarządzaniu przynoszą mierzalną różnicę. Czy udział studentów i nauczycieli zmienia zakupy, projekt narzędzia, zasady oceniania lub środki naprawcze po błędzie? Czy procedury przeglądu przez człowieka wychwytują błędy o poważnych skutkach? Czy alternatywy dla korzystania z SI są rzeczywiście dostępne dla osób, którym zaleca się z niej korzystać? Badania nad prywatnością mają równoległą lukę: wartość edukacyjna dodatkowego zbierania danych jest zwykle zakładana, a projekty minimalizujące dane rzadko porównywano z bardziej ingerującymi pod względem uczenia się i autonomii uczącego się. Zobacz strony [[governance|Zarządzanie SI]] i [[privacy|prywatność]].

## Uczynienie badania odtwarzalnym

AIED ma niezwykle trudny problem odtwarzalności. Badania pomijają prompty, wersje modeli, ustawienia, kod i szczegóły dydaktyczne, a systemy zastrzeżone mogą się zmieniać w trakcie interwencji lub po niej. Wzorzec ten dokumentuje [[limitations-in-aied-research|Ograniczenia w badaniach nad SI w edukacji]].

Odtworzenie badania oznacza opisanie układu dydaktycznego, a nie tylko modelu: zadań uczenia się, źródeł treści, dozwolonych działań, interfejsu, wsparcia nauczyciela, warunków oceniania i wszystkiego, co zmieniło się w trakcie wdrożenia. Odtworzenie jednej konfiguracji i sprawdzenie, czy jej zasada pedagogiczna przenosi się na inną, to dwa odrębne osiągnięcia, a wytyczne raportowania w [[research-methods-aied|Metodach badań nad skutecznością]] dotyczą obu.

Synteza wymaga takiej samej staranności. [[meta-analysis-systematic-review|Metaanaliza i przegląd systematyczny]] wymienia słabe badania pierwotne, stronniczość publikacyjną, niejednorodne interwencje i nieporównywalne wyniki jako ograniczenia wniosków zbiorczych, a jedna średnia „efektu SI” ukrywa rozróżnienia potrzebne osobom uczącym. Przeglądy powinny oddzielać wynik osiągany z pomocą od samodzielnego uczenia się, rozróżniać typy interwencji i warunki porównania oraz czynić decyzje kodowe audytowalnymi.

Literatura syntetyzująca sama jest luką. [[oneill-presumed-effective-meta-analysis-2026|Kryminalistyczny audyt O'Neilla (2026)]] obejmujący 14 [[meta-analysis-systematic-review|metaanaliz]] o dużym wpływie wykazał, że żadna z nich nie dawała ważnej podstawy dla swoich twierdzeń. Brak spójnego konstruktu: narzędzie traktowane jako jedna interwencja, wielowymiarowe wyniki łączone razem. Stronniczość publikacyjną oceniono nieprawidłowo we wszystkich 14. Podawane I² wynosiło od 77,2% do 94,4% w każdej analizie, która je podawała, przy czym w 12 z 13 było wyższe niż 80%. 61% losowo sprawdzonych badań pierwotnych budziło zastrzeżenia co do trafności. Te 14 analiz zebrało ponad 2 000 cytowań w ciągu około 16 miesięcy, a wycofana metaanaliza była wciąż cytowana jako autorytatywna w 60% prac cytujących ją po wycofaniu, bez wzmianki o tym fakcie. Spośród 14 prac cytujących inną audytowaną metaanalizę, której streszczenie reklamowało duży efekt „edukacji z SI”, a która w rzeczywistości mierzyła uczenie studentów o SI, tylko 2 zacytowały ją właściwie, 8 odczytało ją jako dowód, że integracja SI poprawia uczenie się, a 4 były błędne w inny sposób. Audyt postuluje, by czasopisma wymagały pełnej przejrzystości danych w metaanalizach (protokołów wyszukiwania, zakodowanych cech badań, wyodrębnionych statystyk, kodu analitycznego), by redaktorzy nie traktowali dorobku publikacyjnego jako dowodu kompetencji recenzenckiej oraz by wycofania były widoczne wszędzie tam, gdzie artykuł jest odnajdywany, eksportowany lub cytowany. Odtwarzalność obejmuje łańcuch syntezy, a nie tylko pojedyncze badanie.

Osoby uczące, które chcą wersji na poziomie klasy, mogą przejść do [[evaluating-ai-interventions-methods|metod ewaluacji interwencji z SI]].

## Co badacze i nauczyciele akademiccy rozumieją tu błędnie

**W dziedzinie brakuje badań.** Brakuje badań odpowiednio opisanych. Istnieją eksperymenty wieloośrodkowe, badania randomizowane z tysiącami studentów i 14 metaanaliz o dużym wpływie. Tylko 21% audytowanych porównań definiowało oddziaływanie, kontrolę i wynik na tyle dobrze, by przypisać efekt.

**Nazwanie teorii jest jej testowaniem.** Powołanie się na teorię uczenia się to decyzja o sposobie ujęcia problemu. Test wymaga przewidywania, zachowania systemu, które je realizuje, oraz miary procesu, która mogłaby wypaść odwrotnie.

**Zwalidowany wynik automatyczny to zwalidowany wynik uczenia się.** Zgodność z ludzkimi koderami ustala spójność z tymi koderami. Symulowani studenci poprawili się w mierze wierności, nie będąc zwalidowanymi wobec ludzkiego uczenia się, a łańcuch od zachowania modelu do wyniku pozostaje niezbudowany.

**Dostęp to równość.** W badaniu hongkońskim luki w gotowości psychologicznej zmniejszyły się, a różnice w obiektywnym teście utrzymały, i każda grupa się poprawiła, przy nierówności, która nie zniknęła. Urządzenia i licencje zmieniają to, kto może dotrzeć do narzędzia.

**Większa autonomia to postęp.** Większa niezależność agentów jest wyborem projektowym. Przy 29% z 474 badań nad SI agentową odwołujących się do teorii edukacji i ograniczonej walidacji longitudinalnej nikt nie pokazał, że przeniesienie kontroli na system poprawia uczenie się.

## Zarzuty, które można usłyszeć

**„Luka polega po prostu na tym, że potrzebujemy więcej badań randomizowanych.”** Jest ich teraz dużo, a problem leży wyżej niż etykiety projektu: badanie pakietu, który łączy nową informację zwrotną, nowe zadania i nowy interfejs, nie może nic przypisać SI. Praca tkwi w warunku porównania.

**„Nie mogę prowadzić kilkuletniej kontroli odroczonej.”** Wtedy wystarczy zmierzyć jeden odroczony moment bez pomocy i powiedzieć, jaki odstęp obejmuje. Tydzień to realne ustalenie, a badanie nad regułą opanowania uzyskało swój wynik po tygodniu dzięki osadzeniu SI w procesie pracy i skupieniu się na materiale objętym ćwiczeniem.

**„Randomizacja w moim kursie jest niemożliwa.”** Prace oparte na projektowaniu i jakościowe odpowiadają na pytania o wdrożenie, na które badania eksperymentalne nie odpowiadają, i dziedzina potrzebuje obu. Tam, gdzie losowy przydział jest możliwy, nadal dźwiga on twierdzenie przyczynowe.

**„Zbiorczy rozmiar efektu już mówi mi, co działa.”** 14 audytowanych metaanaliz definiowało oddziaływanie jako narzędzie, łączyło nieporównywalne wyniki i podawało I² powyżej 80% w 12 z 13 analiz, które je podawały. Liczba zbiorcza opisuje zbiór badań z problemem konstruktu.

**„Symulowani studenci są tańsi, więc ich walidacja może poczekać.”** W badaniu nad schlebianiem symulowani studenci porzucali błędne przekonania niezależnie od tego, czy informacja zwrotna się do nich odnosiła, co jest właśnie trybem awarii, który sprawia, że nieskuteczny tutor wygląda na skutecznego.

## Co zrobić w tym tygodniu

**1.** Zapisz w jednym zdaniu warunek porównania badania, które planujesz. Jeśli jest to zwykła praktyka, zmień go, zanim zmienisz cokolwiek innego.

**2.** Dodaj do projektu jedną odroczoną miarę bez pomocy i nazwij jej odstęp w sekcji metody.

**3.** Wpisz granicę populacji do opisu projektu, a potem do streszczenia, aby twierdzenie nie mogło wyjść dalej niż próba.

**4.** Weź najmocniejsze twierdzenie z bieżącego szkicu i usuń wersję, której miara nie udźwignie. Zdanie o pułapie zachowaj.

**5.** W przypadku każdego wyniku automatycznego lub symulowanego uczącego się w badaniu wskaż standard ludzki i osobę rozstrzygającą, zanim rozpocznie się zbieranie danych.

## Dokąd dalej

[[reporting-interpreting-aied-research|Raportowanie i interpretacja badań nad SI w edukacji]] to strona raportowa odpowiadająca tej stronie, a [[research-methods-aied|Metody badań w SI w edukacji]] omawiają wybory projektowe stojące za każdą luką. [[evaluating-ai-interventions-methods|Ewaluacja interwencji z SI]] zajmuje się miarami i projektami porównań, [[checking-whether-educational-ai-works|Sprawdzanie, czy edukacyjna SI działa]] to krótsza wersja pytania o skuteczność, a [[does-ai-help-students-learn|Czy SI pomaga studentom się uczyć]] zbiera to, co wiadomo o trwałym uczeniu się. [[theory-development-aied|Rozwój teorii w SI w edukacji]] i [[equity-ethics-pedagogical-safety-research|Równość, etyka i bezpieczeństwo pedagogiczne w badaniach]] rozwijają wątki teorii i równości dalej.
