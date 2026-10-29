---
title: "Jak SI może wspierać badania edukacyjne?"
created: "2026-10-05T11:23:36-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/how-can-ai-assist-with-educational-research
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Współautor chce akapitu w sekcji metod o narzędziach SI, których zespół użył. Albo stos do przesiewania jest dłuższy, niż pozwala termin. Albo recenzent zapytał uprzejmie, czy transkrypcje czytał człowiek, i nie ma pewności, jaka jest uczciwa odpowiedź.

Krótka odpowiedź na to spotkanie: SI może przejąć wyszukiwanie, pierwsze przesiewanie, wstępną selekcję kodowania i pisanie szkiców, a nie może przejąć odpowiedzialności za wnioski projektu. Warto zdecydować, które zadania są dla niej otwarte, zanim projekt się zacznie, weryfikować wyniki wobec standardu ludzkiego z imiennie wskazaną osobą rozstrzygającą spory i prowadzić zapis wystarczający, by osoba z zewnątrz mogła odtworzyć, co się stało. Większość zespołów odkrywa, że godziny na weryfikację i zapisy to praca dodana, a nie odjęta.

## W skrócie

**1.** Zapisać, które zadania badawcze mogą korzystać z SI, a które nie, zanim ruszy pierwsze wyszukiwanie. Sortować według stawki, a nie według narzędzia.

**2.** Automatyzację skierować na przesiewanie. Ekstrakcję danych, uzgadnianie i syntezę zostawić ludziom.

**3.** Ustalić księgę kodową i rubrykę, zanim zautomatyzowane przejście dotknie danych.

**4.** Zdecydować, co znaczy weryfikacja i kto ją podpisuje. Zgodność między modelem a koderem jest miarą podobieństwa, a nie wynikiem jakości.

**5.** Zweryfikować ręcznie każdą referencję, zaczynając od autorów, zawsze gdy SI dotknęła tekstu.

**6.** Zapisywać prompty, wersje modeli i wersje korpusu oraz zaplanować na to godziny.

## Zdecydować, czego SI może dotknąć, przed startem projektu

Decyzja o zakresie należy do pliku projektu, a nie do czyjejś pamięci. W badaniu fokusowym [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai i Chan (2026)]] badacze, którzy się nad tym zastanawiali, kalibrowali użycie według stawki i centralności intelektualnej: więcej w pracy proceduralnej o niskiej stawce, ostrożnie tam, gdzie wkład naukowy był centralny. Dwudziestu siedmiu z 28 badaczy na poziomie doktoranckim w tym badaniu używało GenAI gdzieś w przebiegu pracy, w tym do pisania akademickiego i tłumaczenia, więc dla większości zespołów pytaniem jest, gdzie przebiega granica, a nie czy w ogóle istnieje.

Granicę warto zapisać jako listę z rozstrzygnięciem przy każdym zadaniu: przegląd literatury, przesiewanie abstraktów, ekstrakcja, kodowanie jakościowe, analiza statystyczna, pisanie szkiców, formatowanie referencji. To badanie trzeba czytać jako mapę tego, co badacze relacjonowali, że robią. To relacja z badania fokusowego, a nie wynik o skuteczności.

## Automatyzować przesiewanie, a syntezę zostawić w zespole

Przeglądy systematyczne to obszar, w którym automatyzacja zaszła najdalej. Narzędzia takie jak ASReview, SWIFT-Review, Covidence, AIScreenR i MetaMate zmniejszają obciążenie proceduralne głównie na etapie przesiewania abstraktów, podczas gdy ekstrakcja danych, uzgadnianie i synteza pozostały przy ludzkich recenzentach w jednym zespole, który opisał swój przebieg pracy ([[scaffolding-systematic-reviews-2026|Wang i in., 2026]]).

Większość korzyści pochodzi z dwóch decyzji projektowych. Reguły decyzyjne dla przypadków granicznych trzeba napisać przed rozpoczęciem przesiewania i utrzymywać kategorię „może” ze wspólnym dziennikiem rozstrzygnięć, żeby ta sama ocena była stosowana do tego samego rodzaju rekordu. Bez dziennika reguła drugiego recenzenta i reguła pierwszego rozchodzą się po cichu, a lista wykluczeń przestaje być odtwarzalna.

## Ustalić księgę kodową, zanim model cokolwiek przeczyta

[[qualitative-research|Analiza jakościowa]] to etap, na którym produktem jest interpretacja. Konstrukty, rubryki kodowania i dane treningowe są decyzjami ludzi, a nie wynikami modelu ([[ai-methodologies-science-education-research-2026|Martin i in., 2026]]), co znaczy, że księgę kodową trzeba ustalić, zanim nad korpusem przejdzie zautomatyzowane przejście. Alternatywą jest schemat kodowania napisany wokół tego, co model przypadkiem wydobył, a wtedy tematy opisują czytanie danych przez narzędzie.

Delegowanie może być drobniejsze niż wszystko albo nic. [[agreement-not-quality-llm-coding-verification|Jedno badanie weryfikacji na ślepo]] zaklasyfikowało 15 z 72 pozycji księgi kodowej jako wyraźnie wymagające ludzkiej ekspertyzy, 12 jako lepiej obsługiwane przez model i 16 jako nadające się do selekcji opartej na pewności. Warto posortować własne pozycje w ten sposób, a oszczędność pracy wyląduje tam, gdzie jest bezpieczna.

## Zdecydować, co znaczy weryfikacja i kto ją podpisuje

Wysoka zgodność między modelem a ludzkim koderem bywa raportowana tak, jakby ustalała poprawność. Nie ustala. [[agreement-not-quality-llm-coding-verification|Liu i in. (2026)]] zlecili niezależnemu ekspertowi ocenę 855 par zestawów kodów bez dostępu do źródła. Zgodność człowiek-LLM (średni Jaccard 0,30) była wyraźnie niższa niż zgodność człowiek-człowiek (0,52), a mimo to weryfikator na ślepo preferował kodowanie ludzi i maszyn w stopniu nieodróżnialnym (51,5% wobec 48,5%, p = 0,537). W niektórych przypadkach ludzki konsensus kodował wspólną stronniczość, którą weryfikator odrzucił na rzecz modelu.

Krok weryfikacji wymaga więc standardu złotego, który nie jest ani wynikiem modelu, ani zgodnością kodera z tym wynikiem, plus imiennie wskazanej osoby, która rozstrzygnęła spory. Warto raportować jedno i drugie. Statystyka podobieństwa opisuje, jak blisko siebie leżą dwa odczyty, i nie mówi nic o tym, czy którykolwiek z nich jest trafny.

## Szukać szybko, a potem sprawdzić każde źródło samodzielnie

Wyszukiwanie generatywne streszcza, rekomenduje, syntetyzuje i prowadzi rozmowę, co podważa dawniejszy układ, w którym system lokalizuje, a czytelnik interpretuje ([[genai-academic-search-workshop]]). Warto traktować je jako narzędzie odkrywania. Raport z warsztatu niesie dwie ostrożności: możliwości są nierówne, a badaczy o wysokiej cytowalności odtwarzano mniej więcej dwa razy częściej niż mniej cytowanych rówieśników, oraz bibliotekarz opisał lukę zaufania, w której studenci nadmiernie ufali wyszukiwaniu generatywnemu, a kadra mu nie ufała.

Weryfikacja referencji to miejsce, w którym staje się to niepodlegające negocjacji, a porażki skupiają się w polu autorów, czyli tam, gdzie zapisuje się uznanie. [[citation-errors-hallucinations-computing-education-2026|Denny i in. (2026)]] przeanalizowali 723 930 publikacji i 15 872 533 referencji i zweryfikowali 30 sfabrykowanych referencji w 14 pracach z edukacji informatycznej, wszystkie z lat 2025 i 2026. Siedemnaście z tych 30 było hybrydami: prawdziwy tytuł przypisany do sfabrykowanych lub błędnych autorów. Zweryfikowana liczba na jednym sympozjum technicznym wzrosła z 3 w 2025 roku do 17 w 2026, w 2,3% prac w materiałach z tego roku. Ich suma jest świadomie dolnym ograniczeniem, a automatyczne sprawdzarki dziedziczą wady metadanych, które traktują jako prawdę. Sprawdzać autorów najpierw.

## Traktować wynik automatyczny jako hipotezę do sprawdzenia

Automatyczne funkcje pomiarowe mogą wyglądać precyzyjnie i predykcyjnie, pozostając nieprzejrzyste. [[ai-methodologies-science-education-research-2026|Martin i in.]] ujmują to za pomocą problemu pomiaru nomicznego Changa: zmierzenie wielkości wymaga prawa wiążącego ją z czymś obserwowalnym, a tego prawa nie da się sprawdzić bez uprzedniego poznania tej wielkości. Funkcje pomiarowe wyprowadzone przez SI wyłaniają się z danych treningowych i optymalizacji, a nie z badacza, więc praca nad wyjaśnialnością ma znaczenie dla pokazania, czy model śledzi rozumienie semantyczne, czy tylko słowa kluczowe.

Porażka jest konkretna. W [[zhang-platform-scores-miss-ai-teaching-agents-2026|ocenie ośmiu agentów nauczających opartych na SI]] agent sklasyfikowany na trzecim miejscu przez własny wynik platformy zajął ostatnie miejsce na rubryce zwalidowanej przez ekspertów. Niezgodność człowiek-maszyna jest systematyczna, a nie losowa, a operacjonalizacja rubryki często waży więcej niż kunszt promptu ([[machines-misread-pedagogical-quality|Tseng i in., 2026]]). Zanim wynik automatyczny stanie się narzędziem pomiaru, trzeba go zwalidować wobec miary powiązanej ze zdolnością, którą zamierza się badać. Same miary są omówione w [[evaluating-ai-interventions-methods]].

## Napisać sekcję metod tak, by osoba z zewnątrz mogła ją przeaudytować

Wdrażanie wyprzedziło raportowanie. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta i Lin (2026)]] przeanalizowali 888 prac o automatyzacji przeglądów: od 2023 roku 38,0% prac o oprogramowaniu i produktach nie raportowało żadnej ewaluacji, wobec 9,3% prac o LLM, a dostęp do modeli był w przeważającej mierze własnościowy (84,1%). Przychylna ocena ogólna nie oznaczała też gotowości do delegowania, ponieważ 52% ze 118 prac o LLM raportujących wyłącznie pozytywne wyniki zgłaszało jednak zastrzeżenie, że przebieg pracy nie osiąga progu wymaganego dla jego roli. Ich rama PRISMA-LLM oddziela ujawnienie implementacji od ewaluacji wrażliwej na konsekwencje i traktuje swoje pięć poziomów jako poziomy ujawniania, a nie poziomy ryzyka.

Wersja praktyczna: nazwać system i jego wersję, prompty, wersję korpusu, to, co sprawdził człowiek, i miejsce, w którym zawiodło. Warto prowadzić dzienniki promptów i odpowiedzi, ponieważ płynna wygenerowana lista tematów wygląda na nieuniknioną długo przedtem, nim zacznie się jej praca dowodowa ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Godziny też trzeba zaplanować. [[persistent-ai-agents-academic-research|115-dniowe studium przypadku jednego badacza]] nad trwałym agentem badawczym pokazało, że najsilniejszym wzorcem była rozbudowa zdolności, a nie udowodnione zastąpienie pracy: w miarę jak gromadziła się pamięć i procedury, zakres delegowanej pracy rósł, a wkład człowieka się nie zmniejszał.

## Prowadzić dociekanie praktyków według tych samych zasad w mniejszej skali

Osoba prowadząca zajęcia, która bada własny kurs, pracuje w najcieńszym wątku korpusu. [[ai-assisted-educational-research|Badania edukacyjne wspierane przez SI]] ujmuje to jako lukę, a nie jako ustalenie: dociekanie praktyków wspierane przez SI jest prawdopodobnie powszechne i prawie nieudokumentowane, a dowody z automatyzacji przeglądów i bibliometrii nie rozstrzygają, jak prowadzący powinien badać własne nauczanie.

Co się przenosi, to zestaw dyspozycji:

Korzystać z SI tam, gdzie własne otoczenie nie jest zmienną. Przeszukiwanie literatury własnej dziedziny, transkrybowanie i streszczanie własnych nagrań oraz pisanie szkiców narzędzi badawczych lub tekstów zgody kwalifikują się do tego.

Zachować ruchy interpretacyjne. Co liczy się jako temat, co znaczy komentarz studenta i co uzasadnia dowód z własnej sali, to decyzje osoby prowadzącej, a opis powinien mówić, które ruchy wykonał model, a które człowiek ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Zdefiniować kryteria z góry i trzymać je widoczne. Małe badanie lokalne nie naprawi konstruktu zdefiniowanego po dotarciu danych.

Raportować rolę SI, przeprowadzoną weryfikację i ograniczenia projektu z jednym kursem i jednym badaczem. Opis przebiegu pracy nie jest wynikiem o skuteczności.

Traktować symulowanie kohorty jako opcję zaawansowaną, a nie domyślną. Symulowani uczący się pokrywają zwykle najłatwiejszy kwadrant rzeczywistych zachowań studentów i rzadko są walidowani po użyciu ([[simulating-students]]). Warto przeczytać [[making-simulated-students-behave-like-learners]], zanim zaufa się werdyktowi symulatora.

## Co badacze rozumieją tu błędnie

Zgodność z ludzkim koderem oznacza, że kodowanie jest trafne. Zgodność człowiek-LLM w badaniu na ślepo wyniosła 0,30 Jaccarda wobec 0,52 dla człowiek-człowiek, a weryfikator na ślepo nie potrafił odróżnić tych dwóch źródeł kodowania przy 51,5% wobec 48,5%. Zgodność odnotowuje, że dwóch czytelników się zbiegło, także wtedy, gdy zbiegli się na tej samej stronniczości.

Sprawdzarka referencji zastępuje sprawdzanie referencji. 30 sfabrykowanych referencji w audycie Denny'ego obejmuje 17 hybryd, w których tytuł był prawdziwy, a autorzy nie, czyli dokładnie ten przypadek, z którym sprawdzarka wytrenowana na metadanych radzi sobie najgorzej, ponieważ to metadane są błędne.

Przychylna ewaluacja czyni przebieg pracy odpowiednim dla danej roli. Ze 118 prac o LLM raportujących wyłącznie pozytywne wyniki 52% zgłaszało jednak zastrzeżenie, że przebieg pracy nie osiąga progu wymaganego przez jego rolę. Głębokość ewaluacji warto czytać wobec zadania, które się jej powierza.

Kunszt promptu jest główną dźwignią jakości. Operacjonalizacja rubryki często waży więcej niż kunszt promptu w zgodności człowiek-maszyna, a ocena ośmiu agentów uplasowała ten sam system na trzecim i na ostatnim miejscu w zależności od tego, czyją rubrykę zastosowano.

SI zdejmuje pracę z projektu. Studium przypadku z 115 dni wykazało, że delegowany zakres rósł wraz z gromadzeniem się pamięci agenta. Weryfikacja, rozstrzyganie i zapisy to godziny, które rosną razem z nim.

## Co się na Tobie odbije

**„Mój współautor już tak robi i nikt się nie skarżył.”** Brak skarg nie jest ustaleniem o trafności. Pytanie o ujawnienie jest osobne od pytania o jakość, a liczba 38,0% dla nieocenianych prac o oprogramowaniu mówi, że milczenie dziedziny jest powszechne.

**„Dwa modele się zgodziły, więc kodowanie jest ustalone.”** Dwa modele dzielące dane treningowe dzielą też swoje błędy. Weryfikator na ślepo w badaniu Liu preferował kodowanie maszynowe przy 48,5%, a to, co czyniło tę liczbę interpretowalną, to niezależny sędzia, nie sama zgodność.

**„Nie możemy przeaudytować modelu własnościowego, więc nie ma czego raportować.”** PRISMA-LLM prosi o ujawnienie implementacji jako poziom odrębny od głębokości ewaluacji. System, wersja, prompty, to, co sprawdzili ludzie, i miejsce porażki są raportowalne także dla modelu zamkniętego.

**„Komisja etyczna nigdy tego nie zatwierdzi.”** Dostęp do modeli był własnościowy w 84,1% zbadanych prac, co znaczy, że teksty studentów zwykle opuszczają instytucję. Warto zbierać tylko to, czego wymaga cel edukacyjny, sprawdzić, czy dane uczących się trenują modele dostawcy, i preferować dane lokalne lub syntetyczne tam, gdzie wrażliwość jest wysoka. [[equity-ethics-pedagogical-safety-research]] omawia obowiązki w pełnym zakresie.

**„To będzie wolniejsze niż zrobienie tego ręcznie.”** W małym projekcie często tak jest. Argument za tym rozwiązaniem opiera się na skali, a argument przeciw przecenianiu go opiera się na tej samej relacji z 115 dni.

## Co zrobić w tym tygodniu

**1.** Zapisać listę zadań z rozstrzygnięciem przy każdej pozycji i umieścić ją tam, gdzie cały zespół ją widzi.

**2.** Dodać reguły decyzyjne dla przypadków granicznych i dziennik rozstrzygnięć do protokołu przesiewania, zanim ruszy następna partia.

**3.** Wybrać jeden wynik automatyczny, na którym już się polega, i zwalidować go wobec oceny ludzkiej na próbce, której jeszcze nie oglądano.

**4.** Przeczytać ostatni wysłany maszynopis i sprawdzić ręcznie każde nazwisko autora na liście referencji.

**5.** Dodać wiersz „gdzie SI zawiodła” do szablonu metod, żeby nawyk ujawniania był zapisany raz.

## Dokąd dalej

Pytania towarzyszące to [[evaluating-ai-interventions-methods]] o tym, jak mierzyć interwencję, [[reporting-interpreting-aied-research]] o raportowaniu systemu i własnego użycia SI oraz [[research-gaps-aied]] o tym, gdzie literatura jest cienka. [[equity-ethics-pedagogical-safety-research]] obejmuje dane studentów, a [[ai-assisted-educational-research]] jest pełną stroną pojęcia, na której opiera się ta strona.
