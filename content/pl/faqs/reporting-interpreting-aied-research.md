---
title: "Jakie są najlepsze praktyki raportowania i interpretowania badań nad SI w edukacji?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Wersja robocza ma w abstrakcie liczbę, która trafia do nagłówka, a recenzent właśnie zapytał, co właściwie robiła grupa kontrolna. Albo to recenzent trzyma metaanalizę, której łączny efekt wynosi 0,67, a sekcja metod zajmuje półtorej strony. Albo wydział pisze wytyczne, jak pracownicy mają raportować badania nad SI, i chce czegoś konkretniejszego niż „stosować się do standardów”.

O większości takich przypadków rozstrzyga sześć pominięć: jaki system SI został użyty, do czego był skonfigurowany, jaką rolę pedagogiczną odegrał, czy ludzie projektowali jego wynik albo go recenzowali, co właściwie uchwyciła miara wyniku oraz co autorzy zrobili z obciążeniem, kosztem i ograniczeniami. Gdy ich brakuje, uczciwym werdyktem jest „nie do oceny”, i jest to werdykt inny niż „obalone”.

## W skrócie

**1.** Opisywać SI jako interwencję, a nie dostawcę. Model, wersja, konfiguracja, prompty, rola oraz to, kto projektował wynik i kto go recenzował.

**2.** Nazywać uzasadnienie pedagogiczne i aktywne porównanie. Nazwa produktu nie jest metodą, a nauczanie prowadzone jak dotychczas nie jest uczciwą grupą kontrolną.

**3.** Dopasowywać miarę do twierdzenia, w tym to, czy wynik mierzono z opóźnieniem i bez pomocy.

**4.** Raportować niepewność, którą analiza rzeczywiście ma: efekty zależne, wariancję między badaniami, przedziały predykcji, liczebności podgrup, obciążenie publikacyjne.

**5.** Walidować każdy zautomatyzowany osąd, ze wskazanym złotym standardem i wskazaną osobą rozstrzygającą.

**6.** Raportować przeciwwagi: zarządzanie, koszt obliczeń, własne użycie SI, wyniki zerowe i wyłącznie sprawdzone cytowania.

## Opisywać SI jako interwencję, którą da się odtworzyć

To kontrola, której nie przechodzi większość zgłoszeń. Framework RAISE (*Reporting AI Studies in Education*, Allison 2026) to lista kontrolna z 30 pozycjami w dziesięciu domenach tematycznych, a jego twierdzenie diagnostyczne jest konkretne: zgłoszenia rutynowo pomijają, którego modelu użyto, jak go skonfigurowano, jaką rolę odegrał i czy ludzie projektowali jego wyniki albo je recenzowali. Recenzentowi zostają wtedy cztery pytania bez odpowiedzi. Co dokładnie robiła SI? Czy była konieczna? Czy to jest replikowalne? Czy twierdzenia o uczeniu się są wiarygodne?

RAISE prowadzi od uzasadnienia edukacyjnego przez specyfikację na poziomie API, interakcję uczącego się z SI, dostępność i dopasowanie kulturowe, uczestników i środowisko, udział człowieka, projekt, etykę, przejrzystość i powtarzalność, aż do ograniczeń. Towarzysząca mu Macierz etyki i ryzyka obejmuje ryzyka dla [[agency|autonomii]] uczącego się, [[equity-in-ai-education|równości]], [[governance|zarządzania]] danymi i przejrzystości algorytmicznej. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah i Gašević (2026)]] proponują uproszczoną alternatywę. TEP-AIED składa przejrzystość, etykę i pedagogikę w jedną współzależną strukturę, dostarcza tabelę wytycznych przypisaną do siedmiu sekcji artykułu i prosi autorów o dodanie podsekcji Metody zatytułowanej „Transparency, Ethics, and Pedagogy Considerations”. Ich powód jest praktyczny: RAISE jest wszechstronny i zbyt drobiazgowy do rutynowego użytku empirycznego. Informacja ta mieści się w ramach [[ai-use-disclosure|ujawniania użycia SI]] i to ona czyni twierdzenia o [[privacy|prywatności]] i [[ethics|etyce]] sprawdzalnymi.

Uzasadnienie edukacyjne stoi w RAISE na pierwszym miejscu, bo SI nie jest neutralnym narzędziem. Wartość zależy od zgodności między problemem uczenia się, uzasadnieniem teoretycznym i odwzorowaniem celów na miary wyników. [[oneill-presumed-effective-meta-analysis-2026|O’Neill (2026)]] stwierdził, że wszystkie poza dwiema z 14 audytowanych metaanaliz definiowały interwencję jako narzędzie, ChatGPT albo GenAI, albo ogólnie „SI”. Nazwa produktu nie jest [[pedagogy|pedagogiką]]. Traktowanie kontaktu z ChatGPT jako jednej wspólnej interwencji jest porównywalne z metaanalizą efektów „papieru”.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich i in. (2025)]] przedstawiają ten sam argument dla badań pierwotnych. Audytując podzbiór porównań stojących za głośną metaanalizą, stwierdzili, że tylko 21% miało dobrze zdefiniowaną interwencję, grupę kontrolną i trafną miarę uczenia się. Raportowana wielkość efektu (g = 0,7) przewyższała też efekt celowo zbudowanych [[intelligent-tutoring|inteligentnych systemów tutoringowych]] (0,66), a ta luka jest sygnałem ostrzegawczym: interwencja, która bije tutoring zbudowany celowo, jest prawdopodobnie wiązką różnych rzeczy pod jedną etykietą.

Test sprowadza się do jednego pytania: czy kompetentny czytelnik odtworzyłby interwencję wyłącznie z sekcji metod i dostał to samo?

## Zdecydować, do czego miara uprawnia

W audycie dowodowym O’Neilla obejmującym 46 losowo wybranych badań pierwotnych 28 (61%) budziło zastrzeżenia co do trafności. Najczęstsza była niezgodność zmiennej zależnej (n = 15), następnie niezgodność zmiennej niezależnej (n = 11), problemy z projektem eksperymentalnym (n = 7), problemy z ekstrakcją danych (n = 6), brak grupy kontrolnej (n = 6) i nielosowy przydział do grup (n = 6). Wielowymiarowe wyniki rutynowo łączono tak, jakby były wymienne, wtłaczając wyniki testów, jakość prac domowych, [[motivation|motywację]], [[self-efficacy|poczucie własnej skuteczności]], postawy i [[student-engagement|zaangażowanie]] w jedną liczbę „osiągnięć akademickich”.

Zapobiegają temu dwa nawyki raportowania. Trzeba podać, jaki konstrukt mierzy narzędzie i że zostało zwalidowane dla tej populacji; [[self-report-measures|miary samoopisowe]] pokazują, gdzie miary oparte na percepcji rozchodzą się z zachowaniem, a [[assessment-validity|trafność oceniania]] obejmuje trafność konstruktową. Potem trzeba raportować wynik, który nie zależy od przekonania uczącego się o pomocy. Natychmiastowe wykonanie zadania przy wsparciu nie jest [[learning-gains|przyrostem uczenia się]], a [[cognitive-offloading|odciążanie poznawcze]] to mechanizm, który najwiarygodniej te dwie rzeczy rozdziela. [[verification-quality-reliance-calibration-genai-2026|Mini przegląd z 2026 roku obejmujący 493 rekordy i 14 badań priorytetowych]] nie znalazł ani jednego badania, które mierzyłoby powodzenie weryfikacji i następującą po niej decyzję o poleganiu razem, wobec niezależnie rozstrzygniętego standardu jakości wyniku, a niewiele wykraczało poza natychmiastowe wykonanie w stronę odroczonego zapamiętania albo [[transfer-of-learning|transferu]].

W dyskusji trzeba jawnie podać sufit. Badanie, które mierzyło quiz rozwiązywany przy otwartym narzędziu, może uzasadniać twierdzenie o wykonaniu wspomaganym. Nie może uzasadniać twierdzenia o tym, czego studenci się nauczyli, a to zdanie kosztuje jedną linijkę.

## Raportować niepewność, którą analiza rzeczywiście ma

W syntezach trzeba raportować sposób traktowania efektów zależnych, wariancję między badaniami, przedziały predykcji i ocenę obciążenia publikacyjnego. Samo I² nie wykona tej pracy. O’Neill stwierdził, że raportowana heterogeniczność była poważna wszędzie, gdzie ją podano: od 77,2% do 94,4% w 13 metaanalizach, przy 12 powyżej 80%, i nigdy nie została wyjaśniona: żadna analiza moderatorów nie osiągnęła minimalnej liczebności podgrupy wynoszącej dziesięć badań. Dwanaście metaanaliz traktowało zależne wielkości efektu z tego samego badania jako niezależne, co zawyża pozorny zasób dowodów. Tylko cztery raportowały wariancję między badaniami (τ²), a tylko dwie przedział predykcji, i oba przedziały obejmowały zero. Obciążenie publikacyjne nie zostało w tym zestawie nigdzie ocenione w sposób trafny.

Liczby heterogeniczności wymagają podania modelu, bo I² zależy od precyzji. [[limitations-in-aied-research|Ograniczenia badań nad SI w edukacji]] dokumentują jedną syntezę przy I² = 82,98% w modelu efektów stałych i 15,75% w modelu efektów losowych. Czytelnik, który dostaje tylko pierwszą liczbę, nie potrafi ocenić, jak niespójny jest korpus. Trzeba raportować τ² i przedział predykcji obok niej, co jest też konwencją, o którą prosi [[meta-analysis-systematic-review|literatura przeglądowa]].

Potem trzeba zdyskontować własny nagłówek. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš i in. (2026)]] połączyli 1 840 wielkości efektu z 67 metaanaliz i stwierdzili, że po zamodelowaniu obciążenia publikacyjnego przeciętny efekt spada do około jednej trzeciej opublikowanej mediany (SMD = 0,196 wobec 0,67), z przedziałem predykcji od -1,521 do +1,908. Ten przedział rozciąga się od istotnej szkody do istotnej korzyści dla hipotetycznego nowego badania. To najbardziej użyteczna liczba w artykule i ta, którą najłatwiej pomija się w abstrakcie.

## Powiedzieć, jak daleko sięga twierdzenie

Uczciwość i zakres zawodzą w ten sam sposób: duży efekt znaczy mniej, niż wygląda. Jedenaście z 14 audytowanych metaanaliz nie wyznaczyło granicy populacji, więc „studenci” obejmowali dzieci i osoby kształcące się na kierunkach medycznych. Jeden kurs, jedna instytucja, jedna dyscyplina albo jeden kraj nie uprawniają do twierdzenia ogólnego, a wyniki dla jednego narzędzia rzadko przenoszą się na inne.

Trzy wyjaśnienia tłumaczą większość dużych efektów i każde z nich da się zaraportować. Nowość to jedno. Dodatkowy czas na zadaniu to drugie. Trzecim jest warunek porównawczy, który otrzymał nauczanie prowadzone jak dotychczas, a nie aktywną kontrolę. Trzeba raportować, co właściwie robiła grupa kontrolna, ile czasu spędziło każde ramię i jak nowe było narzędzie. Trzeba też podać granicę populacji, bo efekty różnią się między grupami uczących się, a niepodana granica pozwala jednej połączonej liczbie zastępować je wszystkie; [[differential-effects-across-learner-groups|Zróżnicowane efekty między grupami uczących się]] przedstawiają ten rozrzut.

Narzędzie trzeba traktować jak ruchomy cel. Systemy własnościowe zmieniają się bez ostrzeżenia, więc ustalenie jest związane z wersją modelu, a [[benchmark|wynik porównawczy]], który zachwycał w jednym wydaniu, może nie utrzymać się w następnym. Dlatego wersja i data dostępu należą do sekcji metod, i to nie tylko ze względu na powtarzalność.

## Walidować zautomatyzowane osądy

[[ai-ed-evaluation|Ewaluacja w AIED]] coraz częściej przekazuje ocenianie modelom, co czyni procedurę walidacji częścią wyniku, a nie aneksem. Khan Academy w opisie metryk swojego [[intelligent-tutoring|tutora SI]] podaje, że zaangażowanie poznawcze ocenia sędzia [[llm|LLM]] skalibrowany wobec ludzkich ekspertów pedagogicznych na poziomie F1 0,83, a ruchy metryk pochodziły z ponad 40 eksperymentów na żywo w ciągu pięciu miesięcy, a nie z ewaluacji offline ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi i in. 2026]]). [[machines-misread-pedagogical-quality|Tseng i in. (2026)]] pokazują, że niezgodność człowieka i maszyny co do jakości [[formative-assessment|pytań pretestowych]] jest systematyczna, a nie losowa, oraz że operacjonalizacja rubryki ma większe znaczenie niż promptowanie zaczynające od uzasadnienia.

Zgodność z ludzkimi koderami to coś innego niż jakość, a raportowanie jej tak, jakby była jakością, jest celem recenzentów. [[agreement-not-quality-llm-coding-verification|Liu i in. (2026)]] zlecił niezależnemu ekspertowi ocenę 855 par zestawów kodów w warunkach niewiedzy o źródle. Zgodność człowiek-LLM wyniosła średnio 0,30 w mierze Jaccarda wobec 0,52 dla zgodności między ludźmi, podczas gdy niewidzący źródła weryfikator preferował kodowanie ludzkie i maszynowe w nierozróżnialnym tempie (51,5% wobec 48,5%, p = 0,537). Trzeba raportować cel kalibracji, złoty standard i to, kto rozstrzygał niezgodność. Te trzy elementy pozwalają czytelnikowi zdecydować, ile wagi może nieść zautomatyzowany wynik.

## Ujawniać koszty i własne użycie

Przegląd wszystkich artykułów konferencyjnych AIED 2025 wykazał wzorzec przyjmowania LLM-ów bez ujawniania: większość projektów używała LLM-ów, a zużycie zasobów albo ślad węglowy raportowała zaledwie garstka. Ten artykuł dostarcza otwartą metodę z narzędziami pomiarowymi dla sprzętu lokalnego i chmurowego oraz wzór do szacowania kosztu obliczeniowego modeli najnowszej generacji, których liczby parametrów nie są ujawniane. Jego argument brzmi: niereportowanie tych kosztów samo w sobie jest problemem etycznym. Zarządzanie danymi, zgoda, dostępność i dopasowanie kulturowe należą do tego samego akapitu (pozycje RAISE; [[universal-design-for-learning|projektowanie uniwersalne w uczeniu się]], [[accessibility|dostępność]]). [[equity-ethics-pedagogical-safety-research|Równość, etyka i bezpieczeństwo pedagogiczne]] zawiera pełniejsze omówienie.

Własne użycie SI w procesie badawczym wymaga takiego samego ujawnienia. [[prisma-llm-ai-assisted-systematic-reviews-2026|Analiza PRISMA-LLM Zabalety i Lin]] obejmująca 888 artykułów o automatyzacji przeglądów pokazuje, jak nierówne jest to raportowanie. Od 2023 roku 38,0% artykułów o oprogramowaniu i produktach nie raportowało żadnej ewaluacji, wobec 9,3% artykułów o LLM-ach. Średnia bogactwa raportowania wyniosła 6,3 dla artykułów o LLM-ach i 3,3 dla artykułów o oprogramowaniu i produktach. 84,1% użycia LLM-ów opierało się na systemach własnościowych lub hostowanych, a tylko 4,9% na modelach z otwartymi wagami. Ich framework rozdziela ujawnienie implementacji od ewaluacji wrażliwej na skutki w pięciu poziomach ujawniania, co jest wykonalnym szablonem opisu tego, co narzędzie robiło wewnątrz przeglądu.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai i Chan (2026)]] dodają obraz od strony autorów. Spośród 28 badaczy na studiach doktoranckich 27 używało generatywnej SI przy generowaniu pomysłów, przeglądzie literatury, wyjaśnianiu, przetwarzaniu danych, programowaniu, [[writing-education|pisaniu akademickim]], redakcji i tłumaczeniu. Kalibrowali użycie według wagi konsekwencji i norm dyscyplinowych. Polityki ich instytucji dotyczyły nauczania i oceniania, a nie praktyki badawczej, co pozostawia decyzję o raportowaniu autorowi.

## Publikować wynik zerowy i sprawdzać każde cytowanie

[[citation-errors-hallucinations-computing-education-2026|Denny i in. (2026)]] zweryfikowali 30 sfabrykowanych odnośników w 14 artykułach, przy czym na jednym sympozjum technicznym ich liczba wzrosła z 3 w 2025 roku do 17 w 2026 roku, czyli 2,3% artykułów w tamtejszym tomie. Pisanie wspomagane LLM-em czyni wiarygodne wymyślone cytowanie tanim w produkcji, i dlatego sprawdzanie musi się odbywać przed zgłoszeniem, a nie po przyjęciu.

Przeciwwagi w tym audycie mają znaczenie, gdy się go cytuje. Większość oznaczonych odnośników była nieszkodliwa: 229 to niezgodności metadanych ACM, przy których PDF był poprawny, a 188 to prawidłowe warianty bibliograficzne. Liczba sfabrykowanych jest świadomie dolnym oszacowaniem, a nieszkodliwa większość nie jest błędem zaokrąglenia. Trzeba zweryfikować każdą pozycję, której nie da się sprawdzić osobiście.

Raportowanie wyników zerowych i negatywnych to druga połowa uczciwej bazy dowodowej. Bartoš i in. znaleźli silne dowody na tłumienie wyników zerowych (każdy test Eggera p < 0,0001) i skrajną heterogeniczność (τ = 0,869), przy czym żadna podgrupa według wyniku, dziedziny, poziomu ani roli SI nie pokazywała spójnych korzyści. Nie znaleźli też różnicy między badaniami opublikowanymi przed styczniem 2023 roku i po nim, co podważa twierdzenie, że to nowoczesne narzędzia generatywne konkretnie przynoszą korzyści.

## Co badacze rozumieją tu błędnie

**„Wielkość efektu jest właściwością modalności.”** Nie ma efektu SI w edukacji, który dałoby się zaraportować. Wszystkie poza dwiema audytowane metaanalizy definiowały interwencję nazwą narzędzia, tylko 21% audytowanych porównań miało zdefiniowaną interwencję, kontrolę i trafną miarę, a łączny g = 0,7 leżał powyżej celowo zbudowanego tutoringu inteligentnego przy 0,66. Wielkość efektu należy do projektu, populacji i okazji pomiaru.

**„Połączona średnia mówi, co stanie się z moimi studentami.”** Średnia opisuje zbiór badań i nic w niej nie przesądza o pojedynczej sali. Skorygowana o obciążenie przeciętna wynosi SMD = 0,196, a jej przedział predykcji biegnie od -1,521 do +1,908. Raportowana heterogeniczność przekracza 80% w 12 z 13 metaanaliz, a żadna podgrupa w większej puli nie pokazała spójnych korzyści. Zmiany na poziomie studenta nie da się zidentyfikować z żadnej z tych liczb.

**„Wynik zerowy znaczy, że narzędzie nie działa.”** Wynik zerowy to stwierdzenie o projekcie przy danej precyzji, a brak wykrywalnego efektu w jednym badaniu jest faktem o tym badaniu. Skorygowany o obciążenie SMD = 0,196 pochodzi z literatury, w której każdy test Eggera był istotny, więc obronne odczytanie korpusu to przeciętna mała i niepewna. Żadna podgrupa według wyniku, dziedziny, poziomu ani roli SI w większej puli też nie pokazała spójnych korzyści. Udokumentowanym problemem tej literatury jest tłumienie.

**„Jedno badanie to rozstrzyga.”** Wskaźniki bazowe mówią inaczej. 61% sprawdzonych badań pierwotnych budziło zastrzeżenia co do trafności, jeden kurs albo jedna instytucja nie uprawniają do twierdzenia ogólnego, a system własnościowy jest ruchomym celem związanym z wersją modelu. Pojedyncze badanie to punkt danych z przypisanym projektem.

**„Wysoka zgodność z ludzkimi koderami znaczy, że model ocenia właściwą rzecz.”** Zgodność człowiek-LLM wyniosła 0,30 wobec 0,52 między ludźmi, a niewidzący źródła weryfikator nie odróżnił dwóch zestawów kodów przy 51,5% wobec 48,5%. Zgodność mierzy spójność z koderem, a jakość to osobne pytanie, które wymaga złotego standardu i osoby rozstrzygającej.

## Zarzuty, które można usłyszeć

**„Recenzenci chcą nowości, a nie szczegółów metody.”** Czasopisma idą w drugą stronę. RAISE i TEP-AIED dają redaktorom konstrukt, którego można wymagać, a podsekcja Metody w TEP-AIED jest wejściem o niskim progu. To szczegół metody zamienia artykuł nie do oceny w artykuł, który można cytować.

**„Nie ma na to miejsca.”** Pięć poziomów ujawniania to poziomy raportowania, a nie poziomy ryzyka, więc głębokość ewaluacji może zmieścić się w jednym lub dwóch zdaniach. Wersja, prompty i rola mieszczą się w krótkim akapicie. Koszt i zarządzanie mieszczą się w jednym zdaniu o ograniczeniach.

**„Wszyscy tak raportują.”** Liczby mówią, że problemem jest norma: 61% sprawdzonych badań pierwotnych z zastrzeżeniami co do trafności, 12 z 13 metaanaliz powyżej 80% heterogeniczności, 38,0% artykułów o oprogramowaniu i produktach bez żadnej ewaluacji.

**„Nasze narzędzie jest własnościowe, więc nie można podać modelu.”** Trzeba raportować wersję, datę dostępu, konfigurację, użyte prompty, rolę i zabezpieczenia. Jeśli dostawca tego nie ujawnia, to ograniczenie należy do sekcji ograniczeń jako granica twierdzenia.

**„Raportowanie wyników zerowych nam zaszkodzi.”** Tłumione wyniki zerowe to udokumentowany mechanizm stojący za skorygowaną przeciętną SMD = 0,196. Ich publikowanie jest tym, co utrzymuje czytelność wyniku dodatniego.

## Co zrobić w tym tygodniu

**1.** Zestawić abstrakt z sekcją metod i usunąć każde twierdzenie, którego metoda nie uzasadnia. Jedno zdanie o suficie miary zwykle wystarcza.

**2.** Dodać akapit specyfikacji: model, wersja, data dostępu, konfiguracja, prompty, rola oraz to, kto projektował wynik i kto go recenzował.

**3.** Przenieść τ², przedział predykcji i ocenę obciążenia publikacyjnego z aneksu do wyników albo powiedzieć wprost, że ich nie obliczono.

**4.** Zapisać granicę populacji i warunek kontrolny w opisie projektu, w tym ile czasu spędziło każde ramię.

**5.** Zweryfikować każdy odnośnik, którego nie przeczytano osobiście, i sprawdzić najpierw pole autora.

## Dokąd dalej

[[research-methods-aied|Metody badań nad SI w edukacji]] obejmują wybory projektowe leżące pod tymi decyzjami o raportowaniu, a [[limitations-in-aied-research|Ograniczenia badań nad SI w edukacji]] to katalog typów błędów z przypisanymi liczbami. [[interpreting-and-applying-aied-research|Interpretowanie i stosowanie badań nad SI w edukacji]] to strona czytelnika tego samego problemu, [[does-ai-help-students-learn|dowody na trwałe uczenie się]] to cel, do którego zmierza większość tych miar, [[evaluating-ai-interventions-methods|ocena interwencji z SI]] obejmuje miary i projekty porównawcze, a [[checking-whether-educational-ai-works|sprawdzanie, czy edukacyjna SI działa]] to krótsza wersja pytania. Luki, których ta literatura nie wypełniła, opisuje [[research-gaps-aied|luka badawcza w AIED]].
