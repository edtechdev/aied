---
title: "Jakich miar i metod badawczych może użyć nauczyciel akademicki do oceny interwencji związanych z SI?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
audience: [instructors, researchers, faculty developers]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/evaluating-ai-interventions-methods
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

Pilot przeprowadzono w dwóch grupach, zebrano ankietę na koniec jednostki i za trzy tygodnie jest zebranie kadry, na którym ktoś zapyta, czy to zadziałało. Albo recenzent zapytał, jaki był warunek porównawczy, a druga grupa robiła coś innego. Tak czy inaczej: co liczyłoby się tu jako dowód?

Dopasować metodę do twierdzenia. Ankieta mówi, czy studentom podobała się aktywność. To, czy się nauczyli, wymaga miary wykonania, a to, czy zysk wywołała SI, wymaga warunku porównawczego.

## W skrócie

**1.** Zapisać twierdzenie w jednym zdaniu, z nazwanym wynikiem. „Studenci, którzy korzystali z tutora, uzyskali wyższe wyniki na egzaminie bez wsparcia” jest sprawdzalne.

**2.** Przeprowadzić pomiar wyjściowy, interwencję, bezpośredni pomiar końcowy i późniejszy pomiar wykonany bez SI.

**3.** Opisać warunek porównawczy równie starannie jak zabieg, nawet gdy jest to dotychczasowa praktyka.

**4.** Mierzyć wykonanie wspierane i samodzielne uczenie się osobno, a każdą opublikowaną średnią traktować jako hipotezę o własnej grupie.

## Wybrać metodę, którą pytanie przetrwa

Strona [[research-methods-aied|Metody badawcze w AIED]] wylicza, co daje każda opcja. Eksperymenty randomizowane dają najsilniejsze wnioskowanie przyczynowe. Quasi-eksperymentalne projekty przed/po lub z dopasowanymi grupami pasują do istniejących grup i wspierają słabsze twierdzenia. [[qualitative-research|Jakościowe]] wywiady, grupy fokusowe, obserwacje i analiza artefaktów ujawniają mechanizmy i nieoczekiwane doświadczenie. [[mixed-methods-research|Metody mieszane]] łączą dowód wyniku z wyjaśnieniem. [[design-based-research|Badania oparte na projektowaniu]] pasują do nauczyciela dopracowującego interwencję w kolejnych iteracjach.

Wspomagana przez SI analiza jakościowa należy do tej listy pod warunkiem. Reorganizuje korpus wywiadów w kilka minut, więc [[chain-behind-claim-warrantability-2026|uzasadnialność]] znaczy tyle samo co trafność: trzeba zapisać udokumentowane reorganizacje, które pozwalają czytelnikowi sprawdzić, zakwestionować i zrewidować drogę od danych do twierdzenia.

Ankieta to [[self-report-measures|miara samoopisowa]]: właściwa dla postaw, niewłaściwa dla uczenia się.

## Nazwać warunek porównawczy

Trzy warunki czynią twierdzenie przyczynowe interpretowalnym: precyzyjnie opisany zabieg, dobrze zdefiniowany warunek porównawczy i trafna miara trwałego uczenia się. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich i wsp. (2025)]] zaaudytowali 19 porównań ChatGPT w edukacji wobec tych kryteriów. Cztery (21%) spełniały wszystkie trzy. Zabieg był dobrze zdefiniowany w 74%, grupa kontrolna w 42%, a wynik kwalifikował się jako uczenie się w 53%.

Wzorzec porażki łatwo odtworzyć. [[generative-ai|Narzędzie ogólnego przeznaczenia]] wprowadzone razem z nowymi aktywnościami, nowym sprzężeniem zwrotnym lub przeprojektowanym interfejsem myli medium z metodą, a istotny wynik należy do przeprojektowania.

## Mierzyć wyniki, na których faktycznie zależy

Synteza [[ai-ed-evaluation|Ocena w edukacji z SI]] zaleca samodzielny przyrost uczenia się, odroczone zatrzymanie wiedzy, transfer na nowe zadanie, jakość rozumowania, [[misconceptions|błędne wyobrażenia]], wykorzystanie sprzężenia zwrotnego i wyniki podgrup. Zaangażowanie, satysfakcja, dzienniki użycia SI, [[self-efficacy|samoocena skuteczności]] i [[technology-acceptance-model|postrzegana użyteczność]] są rozsądnymi miarami wtórnymi i słabymi substytutami uczenia się. Obciążenie pracą i oszczędność czasu liczą się jako wyniki wdrożeniowe, czyli inne pytanie.

Minimum w skali grupy to pomiar wyjściowy, interwencja, bezpośredni pomiar końcowy i późniejszy pomiar bez wsparcia. Gdzie można, dodać warunek porównawczy: dotychczasową praktykę, brak SI, nieograniczoną SI wobec SI z rusztowaniem albo dwa alternatywne projekty. Oceniać wykonanie wspierane i bez wsparcia na osobnych instrumentach, bo jedna rubryka je zmiesza.

## Czytać każdą liczbę jako hipotezę

Przeciętny efekt z literatury jest słabym przewodnikiem po jednej sali. [[oneill-presumed-effective-meta-analysis-2026|Audyt O'Neill (2026)]] obejmujący 14 [[meta-analysis-systematic-review|metaanaliz]] o wysokim wpływie stwierdził, że żadna nie dawała ważnej podstawy dla swoich twierdzeń. Złączone [[learning-gains|„wyniki akademickie”]] mieszały wyniki testów, motywację, [[self-efficacy|samoocenę skuteczności]] i postawy w jedno oszacowanie. Heterogeniczność była skrajna: I² wynosiło od 77,2% do 94,4% w 13 analizach, które je podawały, a 12 z nich leżało powyżej 80%. Wszystkie 14 oceniały [[limitations-in-aied-research|stronniczość publikacyjną]] niepoprawnie, a 61% losowo sprawdzonych badań pierwotnych miało problemy z trafnością. Cztery analizy podały wariancję między badaniami, dwie podały przedział predykcyjny i oba przedziały obejmowały zero.

Wygodny wynik może mierzyć niewłaściwy konstrukt. W [[zhang-platform-scores-miss-ai-teaching-agents-2026|ocenie ośmiu agentów nauczających opartych na SI]] agent sklasyfikowany na trzecim miejscu według własnego wyniku platformy zajął ostatnie miejsce w rubryce zwalidowanej przez ekspertów, bo wyniki platformy indeksowały wykonanie studenta w trakcie interakcji. Metrykę z panelu trzeba traktować jako hipotezę.

## Co nauczyciele akademiccy rozumieją błędnie

**Ankieta satysfakcji mierzy uczenie się.** Mierzy satysfakcję, którą synteza Ocena w edukacji z SI wymienia jako miarę wtórną obok wyników uczenia się.

**Przyrost przed/po pokazuje, że interwencja zadziałała.** Pokazuje, że wyniki wzrosły. To, czy miara liczyła się jako uczenie się, jest osobnym pytaniem, a audyt znalazł kwalifikujący wynik uczenia się w 53% porównań, które przejrzał.

**Opublikowane wielkości efektu przenoszą się na moją grupę.** 14 metaanaliz O'Neill nie mogło wesprzeć twierdzeń na nich zbudowanych, a oba podane przedziały predykcyjne obejmowały zero.

**Analityka platformy mierzy jakość nauczania.** Agent z trzeciego miejsca u Zhanga był ostatni w rubryce eksperckiej.

## Co się na Tobie odbije

**„Mamy już ewaluacje na koniec kursu”.** Mierzą kurs i odbywają się po semestrze, w którym potrzebna była odpowiedź.

**„Grupa porównawcza jest niemożliwa na istniejącym kursie”.** Porównać z zeszłoroczną wersją tego samego zadania albo z drugą grupą i uczciwie opisać różnicę. Projekty quasi-eksperymentalne są słabsze i wciąż informatywne, gdy alternatywą jest twierdzenie bez porównania.

**„Wielkość efektu w metaanalizie jest duża”.** Na którym wyniku, w czyjej grupie? Oba przedziały predykcyjne, które znalazła O'Neill, obejmowały zero.

**„Nasz panel pokazuje silne zaangażowanie”.** Zaangażowanie to miara wtórna na liście Ocena w edukacji z SI. Obok niej trzeba postawić miarę uczenia się bez wsparcia.

## Co zrobić w tym tygodniu

**1.** Zapisać twierdzenie jako jedno zdanie i podkreślić wynik.

**2.** Wpisać do kalendarza późniejszy pomiar bez wsparcia, po interwencji, a nie w tym samym tygodniu.

**3.** Napisać jeden akapit opisujący warunek porównawczy, z takim samym detalem jak zabieg.

**4.** Wyciągnąć liczby z platformy, które już są, i oznaczyć każdą jako wynik artefaktu albo wynik uczenia się.

**5.** Poprosić jednego kolegę, by przeczytał projekt i powiedział, co jeszcze zmieniło się w ciągu semestru.

## Dokąd dalej

[[does-ai-help-students-learn|Czy SI pomaga studentom się uczyć?]] streszcza to, co pokazują dowody o wynikach, a [[research-gaps-aied|Luki badawcze w AIED]] obejmują miejsca, gdzie dowody rzednieją. [[checking-whether-educational-ai-works|Skąd wiadomo, że edukacyjna SI działa poprawnie?]] to wersja tego pytania dla osób budujących lub kupujących system.
