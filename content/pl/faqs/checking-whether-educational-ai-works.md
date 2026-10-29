---
title: "Skąd wiadomo, że edukacyjna SI działa poprawnie, a nie tylko dobrze ocenia?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T15:22:01-04:00"
translation_of: faqs/checking-whether-educational-ai-works
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

Raport ewaluacyjny dostawcy przychodzi z jedną liczbą na górze: zgodność z ludzkimi oceniającymi, 0,84. Albo pilotaż kończy się w piątek, a dowody to ankieta satysfakcji plus jedna linia z benchmarku przepisana z not wydania modelu. Na spotkaniu ktoś pyta, czy system działa, i jest pod ręką liczba, która brzmi jak odpowiedź.

Krótka odpowiedź: wyniki, które widać najczęściej, mierzą podobieństwo, a podobieństwo to słabsze twierdzenie niż „to uczy”, a nawet niż „ta informacja zwrotna jest czytelna”. Trzeba zdecydować, co każda liczba może udowodnić, oceniać każdy wynik, który system produkuje, i zamienić trafność w regułę z progiem, osobą i oszczędnością. Liczba, na której nikt nie może zadziałać, nie jest dowodem.

## W skrócie

**1.** Należy napisać jedno zdanie nazywające to, co ma znaczenie, a potem wybrać miarę, która to odczytuje. Pokrywanie się słów nie powie, czy rozumowanie jest poprawne.

**2.** Oceniać każdy wynik osobno. Wysoki wynik oceniania nie mówi nic o module informacji zwrotnej obok.

**3.** Zlecić osobie ocenę około pięćdziesięciu wyników i porównać te oceny z automatycznym sprawdzaczem. Tam, gdzie się różnią, przedmiotem testu jest sprawdzacz.

**4.** Zastąpić „trafność 0,84” regułą: poniżej tego poziomu pewności odpowiedź czyta człowiek. Raportować próg, udział pracy, który oszczędza, i to, czym stała się zgodność.

**5.** Testować bezpieczeństwo w całych rozmowach i sprawdzać każdego symulowanego studenta, zanim zaufa się temu, co mówi o tutorze.

## Zdecydować, co liczba może udowodnić

W tej literaturze dominują dwie rodziny liczb. Obie mierzą, jak blisko wynik jest czegoś innego, a to słabsze twierdzenie niż poprawność.

**Wyniki podobieństwa** (ROUGE i BLEU) porównują brzmienie odpowiedzi systemu z brzmieniem odpowiedzi referencyjnej. Model, który pisze coś bliskiego oczekiwanemu tekstowi, wypada dobrze, nawet gdy jego rozumowanie jest błędne albo gdy student mógłby dojść do poprawnej odpowiedzi drogą, która niczego nie uczy.

**Wyniki zgodności** (QWK, kwadratowa kappa ważona) mierzą, jak blisko oceny modelu układają się względem ocen człowieka. Model może zgadzać się z oceniającym co do końcowej oceny, myląc się co do przyczyny, a przyczyna jest tym, z czego student się uczy.

Student może dojść do błędnej odpowiedzi drogą błędną, która wygląda na poprawną, i żaden wynik podobieństwa tego nie zauważy. Jeśli rozumowanie jest tym, co ma znaczenie, miara musi je odczytywać: rubryka stosowana przez osobę albo sprawdzenie napisane dla tego konkretnego kroku.

Asystent kursu Linear Control Systems raportuje to we właściwy sposób. Jego najlepsza konfiguracja osiągnęła wynik podobieństwa **0,4093** wobec odpowiedzi referencyjnych, przy poprawie mierzonej rzetelnie powyżej zera, a autorzy mówią wprost, że liczby mierzą brzmienie i format ([[lora-finetuned-control-systems-course-qa-2026|asystent kursu Linear Control Systems]]). Wynik nie robi wrażenia, a artykuł i tak jest użyteczny, bo mówi, co ten wynik obejmuje.

## Oceniać każdy wynik osobno

W projekcie WrAFT dostrojony model osiągnął wynik zgodności **0,84** z ludzkimi oceniającymi na 360 odłożonych esejach TOEFL. To mocny wynik w ocenianiu. Model z tego samego projektu trenowany do pisania informacji zwrotnej produkował tekst ucięty i nie do sparsowania, podczas gdy samo promptowanie innego modelu dawało informację zwrotną, którą nauczyciele preferowali ([[wraft-automated-writing-evaluation-argumentative-2026|projekt WrAFT dotyczący automatycznej oceny esejów argumentacyjnych]]).

Ta baza wiedzy niesie tę samą porażkę w drugiej formie: wdrożenie, w którym moduł oceniania wypadł dobrze, a informacja zwrotna przychodziła ucięta w połowie zdania i nieczytelna. Nic w liczbie z nagłówka o tym nie mówiło.

Trzeba więc wypisać wyniki, które system produkuje, i każdemu dać własną miarę i własny warunek zaliczenia. Ocenianie, tekst informacji zwrotnej, dobór podpowiedzi i odmowy ze względów bezpieczeństwa zawodzą na różne sposoby, a wynik na poziomie modułu nie widzi poza własny moduł.

## Postawić człowieka tam, gdzie model nie jest pewien

Korelacja mówi, że model zwykle ma rację. Nie mówi, co zrobić w tych przypadkach, gdy jej nie ma. Wynik dotyczący kierowania według pewności to najczystszy szablon w bazie wiedzy i jest na tyle krótki, że można go skopiować.

Pewność okazała się rzetelnym sygnałem ostrzegawczym: gdy model był niepewny, częściej się mylił (**β = -0,602, p < 0,001**). Zespół przekazywał człowiekowi **20%** odpowiedzi o najniższej pewności. Ta jedna reguła podniosła zgodność z ludzkimi ocenami z **0,78 do 0,82** i zmniejszyła ręczną pracę przy ocenianiu o około **80%** ([[know-when-to-trust-ai-scoring-reliability-2026|kiedy można ufać ocenianiu przez SI]]).

Warto spojrzeć, co zawiera ten raport: próg, osobę i oszczędność. „Zgodność 0,84” nie zawiera żadnego z tych elementów, i dlatego trudno na niej działać, a łatwo się o nią spierać.

## Sprawdzić automatyczny sprawdzacz wobec człowieka

Wiele zespołów używa dziś drugiego modelu do oceny pierwszego. Układ jest rozsądny, ale drugi model nie ma racji automatycznie.

Badanie, w którym model najnowszej generacji tworzył podpowiedzi do [[intelligent-tutoring|inteligentnego systemu tutoringowego]], wykazało, że około **35%** z nich było zbyt ogólnych, błędnych albo zdradzało odpowiedź, a własne automatyczne kontrole jakości modelu nie zgadzały się z ludzkim osądem co do tego, które były złe ([[reddig-maclellan-personalized-feedback-llm-2026|personalizowana informacja zwrotna z LLM]]).

Wersja praktyczna: wziąć próbkę około pięćdziesięciu wyników, zlecić ich ocenę osobie i porównać z ocenami sprawdzacza. Tam, gdzie się rozchodzą, uzyskuje się wiedzę o sprawdzaczu. Warto zachować próbkę i tabelę niezgodności, bo to także ten artefakt, który odpowiada recenzentowi pytającemu, skąd to wiadomo.

## Mierzyć samą wielkość, gdy zadanie na to pozwala

Najczystsze rozwiązanie to trenować model na tej samej wielkości, którą zamierza się mierzyć. Dostrojony model trenowano do odtwarzania właściwości statystycznych pytań testowych: jak trudna jest każda pozycja, jak dobrze oddziela silniejszych od słabszych studentów. Nauczył się tych wzorców, zamiast dostać je wprost ([[multimodal-item-parameter-estimation-2026|multimodalne szacowanie parametrów pozycji]]). Ponieważ celem była właściwość samego testu, ewaluacja mogła dotyczyć tej właściwości, a nie brzmienia.

Raportować zarówno kolejne etapy, jak i punkt końcowy. Symulator pisania SWIM opublikował wyniki każdego etapu obok siebie: promptowanie z rubryką **0,577**, dostrajanie **0,474 ± 0,023**, uczenie ze wzmocnieniem **0,618 ± 0,005** ([[swim-student-writing-simulation-2026|symulacja pisania studenta SWIM]]). Z tej tabeli czytelnik widzi, czy trening cokolwiek dał. Pojedyncza końcowa liczba tego nie powie i ukrywa etap, na którym dostrojony model wypadł gorzej niż prompt.

## Porównywać z czymś spoza własnego projektu

Najpierw punkt odniesienia, także tani. Model asystenta kursu bez ugruntowania wypadł poniżej zwykłego wyszukiwania po słowach kluczowych, a to ten rodzaj wyniku, który zmienia plan rozwoju i kosztuje dzień, żeby go znaleźć.

Zewnętrzny benchmark mówi potem, czy ta liczba jest w ogóle coś warta. W benchmarku pedagogicznym CDPK EduQwen osiągnął **96,52%** wobec **90,55%** Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026|EduQwen i uczenie ze wzmocnieniem pedagogicznym]]). Pedagogy Benchmark, zbudowany z prawdziwych egzaminów doskonalenia zawodowego nauczycieli i obejmujący **97 modeli**, wykazał trafność od **28% do 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre i in., 2025]]).

W zadaniu o nauczaniu modele rozciągały się od słabych do dobrych, więc wynik benchmarku umieszcza system gdzieś wewnątrz szerokiego zakresu.

## Testować bezpieczeństwo w całej rozmowie

Większość testów bezpieczeństwa sprawdza pojedynczą wymianę. Szkody, które w tutoringu mają znaczenie, kumulują się. SafeTutors wykazał, że nawet modele zbudowane specjalnie do nauczania pogarszają się w długiej rozmowie i mogą ujawniać odpowiedzi, które powinny zatrzymać ([[hazra-safetutors-pedagogical-safety-2026|SafeTutors i bezpieczeństwo pedagogiczne]]).

Sprawdzenie trzeba przeprowadzić na pełnych rozmowach i celowo napisać tury testowe: student, który się myli, ten, który naciska dalej, i ten, który próbuje wyperswadować modelowi jego rolę. Tutor, który trzyma się przez dziesięć tur i ugina się w jedenastej, nie przechodzi testu, który ma znaczenie, a zestaw sprawdzający każdą odpowiedź osobno oceni go jako czysty.

## Sprawdzić symulowanego studenta, zanim zaufa się jego osądom

Generowanie symulowanych studentów zamiast rekrutowania prawdziwych czyni ewaluację znacznie tańszą. Symulowany student jest też narzędziem pomiarowym i może być błędny tak, jak mylą się narzędzia: zbyt ugodowy, zbyt płynny, zbyt szybki w przyjmowaniu podpowiedzi.

Najbardziej bezpośredni test w bazie wiedzy porównał symulowanych i promptowanych studentów z **382 odłożonymi dialogami** z największego publicznego zbioru prawdziwych dialogów matematycznych studenta z tutorem, przy siedmiu miarach obejmujących język, zachowanie i myślenie ([[simulated-students-tutoring-dialogues-2026|symulowani studenci w dialogach tutoringowych]]). Inne prace naciskają na realizm z różnych stron: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] trenuje modele, żeby zarówno działały, jak i myślały jak studenci, a profile uwzględniające historię uzależniają symulację od przeszłości studenta, a nie od stałej persony ([[history-aware-student-simulation|symulacja studenta świadoma historii]]).

Jeśli stanowisko testowe opiera się na symulowanym studencie, trzeba zwalidować symulator na prawdziwych transkrypcjach, zanim pozwoli mu się oceniać tutora.

## Co zespoły ewaluacyjne rozumieją błędnie

Wysoki wynik zgodności oznacza, że system jest poprawny. Oznacza, że system ocenia tak jak oceniający, z którym go porównano, na esejach, na których go porównano. Wynik 0,84 w WrAFT przyszedł razem z informacją zwrotną, której nie dało się sparsować.

Jedna liczba może reprezentować produkt. Zespoły wypuszczają pulpit z „trafnością 0,84” w rogu i bez pola na moduł informacji zwrotnej, politykę podpowiedzi albo zachowanie przy odmowie. Wynik na poziomie modułu jest najłatwiejszą liczbą do policzenia i najmniej informującą rzeczą do zaraportowania.

Zewnętrzny benchmark rozstrzyga, czy narzędzie działa. Rozrzut Pedagogy Benchmark od 28% do 89% mówi, że ta rodzina zadań jest trudna i obsługiwana nierówno. Pozycja w tym zakresie jest faktem o modelu. To, co studenci potrafią potem, jest innym faktem.

Model oceniający model jest tanim zastępstwem ludzkich ocen. Jest tani. Liczba 35% i niezgodność co do tego, które podpowiedzi były złe, pokazują, co przepuści sędzia, którego nigdy nie sprawdzono.

Symulowani studenci czynią ewaluację darmową. Czynią ją tanią i przenoszą koszt do walidacji. Porównanie na 382 dialogach istnieje, bo narzędzie wymagało kalibracji.

## Co się na Tobie odbije

**„Nie ma do tego anotatorów.”** Pięćdziesiąt ocenionych wyników wystarcza na start. Warto ocenić je osobiście, jeśli nikt inny nie jest wolny, i zachować arkusz.

**„Nasz wynik w benchmarku bije Gemini.”** Bije, na CDPK, przy promptach, których ten benchmark używa. Trzeba dołożyć obok miarę bez wsparcia.

**„Nasz automatyczny sędzia zgadza się z naszymi ludzkimi oceniającymi.”** Wtedy jest jedna korelacja na jednej próbie. Warto zapytać, na których wynikach się nie zgodził, i przeczytać je, bo tam mieszka porażka.

**„Nie można przeprowadzić pełnej ewaluacji przed wdrożeniem.”** Warto zrobić trzy tanie rzeczy: jeden wynik oceniony osobno, pięćdziesiąt wyników ocenionych przez osobę i jedno przejście bezpieczeństwa na długość rozmowy. Drogie pozycje mogą poczekać do końca pilotażu.

**„System to tylko demo, więc ewaluacja jest przedwczesna.”** Demo jest najtańszym miejscem, żeby odkryć, że liczba mierzy brzmienie. Gdy dołączy się do niego plan rozwoju, to samo odkrycie kosztuje więcej we wdrożeniu.

## Co zrobić w tym tygodniu

**1.** Zapisać jednodaniowe twierdzenie, które ewaluacja ma uzasadniać. Umieścić je na górze dokumentu ewaluacji.

**2.** Wypisać każdy wynik, który system produkuje, i dać każdemu wiersz, miarę i warunek zaliczenia.

**3.** Wyciągnąć pięćdziesiąt wyników, ocenić je osobiście i położyć własne oceny obok ocen sprawdzacza.

**4.** Policzyć rozkład pewności i zapisać regułę kierowania z liczbą w środku oraz nazwisko osoby, która czyta to, co spada poniżej.

**5.** Przeprowadzić jedną rozmowę bezpieczeństwa, w której student się myli, dwa razy naciska i prosi o odpowiedź.

## Dokąd dalej

[[making-ai-better-at-supporting-learning|Jak poprawić wsparcie uczenia się przez SI we własnym przedmiocie?]] obejmuje stronę projektową tego samego problemu. [[training-ai-tutors-to-guide-rather-than-answer|Trenowanie tutorów SI, by prowadzili, a nie odpowiadali]] zajmuje się drogą treningową do zachowania tutoringowego, a [[evaluating-ai-interventions-methods|ocena interwencji z SI]] to wersja tego pytania dla nauczycieli, podczas gdy [[reporting-interpreting-aied-research|raportowanie i interpretowanie badań nad SI w edukacji]] to wersja dla badaczy. Metody leżą pod [[ai-ed-evaluation|ewaluacją w AIED]] i [[llm-training-and-fine-tuning|trenowaniem i dostrajaniem LLM-ów]].
