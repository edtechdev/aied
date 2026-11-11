---
title: "Model SAMR"
created: "2026-09-10T09:50:00-04:00"
type: concept
foundations: [educational-development, learning-design, teacher-ai-competency]
technology: [ai-technologies, technology-acceptance-model]
page_kind: [framework]
audience: [instructors, curriculum designers, researchers]
level: [k 12, higher ed]
confidence: high
updated: "2026-11-08T07:31:21-05:00"
translation_of: "concepts/samr-model"
source_updated: "2026-11-02T09:55:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
pedagogy: [tpack]
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

> **Model SAMR** — rama integracji technologii opracowana przez Rubena Puentedurę, która klasyfikuje stopień, w jakim technologia przekształca uczenie się, na czterech poziomach: **Podstawienie, Rozszerzenie, Modyfikacja i Redefinicja**. Dwa niższe poziomy (Podstawienie, Rozszerzenie) *wzmacniają* istniejące zadanie — technologia robi to, co robiono wcześniej, lepiej lub wygodniej; dwa wyższe (Modyfikacja, Redefinicja) *przekształcają* je — samo zadanie zmienia się w coś, co wcześniej nie było możliwe. W [[ai-education|edukacji ze SI]] SAMR jest standardową soczewką do pytania, czy [[generative-ai|generatywna SI]] służy stopniowemu ulepszaniu istniejącej praktyki, czy rekonceptualizacji uczenia się, i funkcjonuje obok [[tpack|TPACK]] jako sposób opisu, *jak* nauczyciele integrują technologię, a nie *dlaczego* ją akceptują.

## Pytania do rozważenia

- Kiedy SI trafia do kursu, czy jest to Podstawienie ([[conversational-ai|chatbot]] zastępuje pole wyszukiwania), czy Redefinicja (zadanie staje się możliwe, choć wcześniej nie było)? Co decyduje o tym, który poziom jest właściwy — i czy transformacja zawsze jest celem?
- SAMR i [[technology-acceptance-model|modele adopcji technologii]] odpowiadają na różne pytania: teoria adopcji pyta, *dlaczego* nauczyciel lub instytucja akceptuje narzędzie; SAMR pyta, *jak głęboko* narzędzie zmienia uczenie się. Na które pytanie faktycznie odpowiada dane badanie integracji SI?
- [[meta-analysis-systematic-review|Przegląd systematyczny]] integracji SI w [[higher-ed|szkolnictwie wyższym]] wykazał, że większość zastosowań lokowała się na poziomie Podstawienia lub Rozszerzenia, a tylko jedno badanie zbliżało się do Redefinicji. Jeśli to typowe, co mówi to o luce między potencjałem SI a jej rzeczywistością w klasie?
- SAMR jest często przywoływany w [[teacher-education|kształceniu nauczycieli]] i [[educational-development|doskonaleniu zawodowym]], aby pomóc edukatorom planować wykorzystanie technologii. Czy klasyfikowanie poziomu SAMR lekcji zmienia to, co nauczyciel faktycznie robi, czy jest to głównie opisowa etykieta?
- Krytycy twierdzą, że SAMR — podobnie jak [[tpack|TPACK]] — opiera się na humanistycznej ontologii, która traktuje poznanie jako niezmieniane przez technologię, i że nie mówi nic o władzy, własności danych ani równości. Czy soczewka poziomu integracji wystarcza, czy integracja w erze SI potrzebuje bardziej krytycznej ramy?

## Wprowadzenie

SAMR opisuje głębokość technologicznego przekształcenia zadań uczenia się. Jego cztery poziomy tworzą rosnącą skalę od wzmocnienia do transformacji: **Podstawienie** (narzędzie zastępuje inne bez zmiany funkcjonalnej — chatbot w miejsce wyszukiwarki), **Rozszerzenie** (narzędzie zastępuje i ulepsza — sprawdzanie pisowni w edytorze tekstu zamiast maszyny do pisania), **Modyfikacja** (zadanie jest istotnie przeprojektowane — uczniowie współpracują w czasie rzeczywistym nad wspólnym szkicem wygenerowanym przez SI) i **Redefinicja** (nowe, wcześniej niepojęte zadania stają się możliwe — uczący się współtworzą z modelem generatywnym w sposób, który nie ma odpowiednika bez SI). Model jest szeroko stosowany w [[ai-technologies|technologiach edukacyjnych]] i [[research-methods-aied|badaniach edukacyjnych]], a także w [[educational-development|doskonaleniu zawodowym nauczycieli]], jako słownik do planowania i oceny integracji technologii, i jest standardowym towarzyszem [[tpack|TPACK]] oraz ram [[technology-acceptance-model|adopcji technologii]] — choć odpowiada na inne pytanie niż każda z nich.

## Co oznaczają cztery poziomy

- **Wzmocnienie (dolna połowa):** Podstawienie i Rozszerzenie ulepszają istniejące zadanie bez zmiany jego natury. Większość rutynowego użycia SI — [[automated-question-generation|generowanie pytań]], szybkie generowanie tekstu, streszczanie — lokuje się tutaj: jest szybsze i wygodniejsze, ale nie zmienia tego, o co prosi się uczącego się.
- **Transformacja (górna połowa):** Modyfikacja i Redefinicja zmieniają samo zadanie. [[vibe-coding|Vibe coding]], ko-konstrukcja z modelem w czasie rzeczywistym i adaptacyjny dialog interaktywny to zadania, które nie były możliwe przed generatywną SI, i reprezentują transformacyjny koniec skali.

SAMR jest często łączony z [[icap-framework|ramą ICAP]], ponieważ oba porządki się pokrywają: cztery scenariusze od gotowania do uczenia się w [[thermomix-genai-education-analogy-2026|Rummel, Nachtigall i Panadero (2026)]] mapują tryby [[student-engagement|zaangażowania]] ICAP na poziomy SAMR — ICAP *Pasywne* z SAMR *Podstawienie*, *Aktywne* z *Rozszerzenie*, *Konstruktywne* z *Modyfikacja* i *Interaktywne* z *Redefinicja* — ilustrując progresję od pasywnego delegowania do interaktywnej ko-konstrukcji.

## Dowody z bazy wiedzy

- **Integracja SI w szkolnictwie wyższym jest w dużej mierze przyrostowa, a nie transformacyjna.** [[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh i wsp. (2026)]], w przeglądzie systematycznym PRISMA obejmującym 22 badania interwencyjne wybrane z 959 rekordów, ocenili integrację SI modelem SAMR i stwierdzili, że większość badań skupiała się na poziomie **Podstawienia lub Rozszerzenia**, mniej na Modyfikacji, a tylko jedno zbliżało się do Redefinicji. SI wprowadzano zazwyczaj, by ulepszyć istniejącą praktykę — z dominacją [[automated-assessment|automatyzacji oceniania]] i [[personalized-learning|wsparcia uczenia się spersonalizowanego]] — a nie by rekonceptualizować programy nauczania czy [[learning-gains|efekty uczenia się]].
- **SAMR jest częstą soczewką analityczną w zmianach [[curriculum-design|programu nauczania]] napędzanych przez GenAI.** [[rewriting-curriculum-genai-pedagogy-2026|Sabani i wsp. (2026)]] mapują pięć przesunięć programowych (od statycznego do dynamicznego, od transmisji do zdolności, od lokalnego do [[governance|instytucjonalnego]]) na ugruntowane soczewki, w tym SAMR i konstruktywne dostosowanie, używając modelu do wyjaśnienia [[pedagogy|pedagogicznych]] mechanizmów, przez które GenAI przekształca program nauczania.
- **SAMR i TPACK zakotwiczają standardy integracji technologii przez nauczycieli.** [[crompton-faculty-technology-integration-standards-2026|Crompton i wsp. (2026)]] sytuują swoje sześć standardów technologicznych dla wykładowców wobec istniejących ram — [[tpack]], RAT, SAMR, SETI — i standardów (ISTE, UNESCO, DigCompEdu), z których większość dotyczy edukatorów [[k-12]] albo tylko [[teacher-role|nauczycielskiej]] części roli wykładowcy, pozostawiając lukę w rozwoju kadry akademickiej.
- **SAMR jest celem krytyki posthumanistycznej.** [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]] krytykuje modele TPACK, SAMR i [[ai-literacy|kompetencji w zakresie SI]] za wspólną humanistyczną ontologię, która zakłada ograniczonego uczącego się, którego poznanie zasadniczo nie zmienia się pod wpływem zapośredniczenia technologicznego, i twierdzi, że te instrumentalistyczne ramy nie mogą ująć konstytutywnej roli SI w poznaniu.
- **Rama integracji, nie rama władzy.** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]] ocenia SAMR obok TPACK i innych ram integracji i stwierdza, że żadna nie ujmuje sprawiedliwej władzy, własności danych ani odpowiedzialności, co motywuje alternatywną ekologiczną ramę współsprawczości.
- **Użycie przez studentów także mapuje się na SAMR, a informacja zwrotna obejmuje wszystkie poziomy.** Zakodowanie deklaracji GenAI 31–36 studentów na zajęciach z [[physics-education|fizyki]] umieściło uczenie się na poziomie podstawienia–rozszerzenia, formatowanie na podstawieniu, a wykonywanie zadań na modyfikacji–redefinicji, podczas gdy informacja zwrotna — sprawdzanie, doprecyzowywanie, weryfikowanie — pojawiała się na wszystkich czterech poziomach ([[genai-use-changing-institutional-policy-physics-2026|Quince i Faulconer (2026)]]).
- **Głębokość i inkluzja to osobne osie.** [[jita-ai-mathematics-classrooms-inclusion-2026|Jita, Jita i Omoniyi (2026)]] łączą SAMR z [[universal-design-for-learning|uniwersalnym projektowaniem uczenia się (UDL)]] w 38 źródłach i twierdzą, że zadania na poziomie Redefinicji wciąż mogą wykluczać studentów, których język, urządzenie lub łączność nie pasują do projektu.

## SAMR, TPACK i adopcja technologii: czym się różnią

Trzy ramy są często mylone, ale odpowiadają na odrębne pytania:

- **[[technology-acceptance-model|Modele adopcji technologii]]** (TAM, UTAUT) wyjaśniają, *dlaczego* jednostka lub instytucja akceptuje technologię i dalej jej używa — postrzeganą użyteczność, łatwość użycia i wpływ społeczny.
- **[[tpack|TPACK]]** opisuje *wiedzę*, której nauczyciel potrzebuje do skutecznej integracji technologii — współgranie wiedzy technologicznej, pedagogicznej i przedmiotowej, rozszerzone w erze SI do AI-TPACK/GenAI-TPACK.
- **SAMR** klasyfikuje, *jak głęboko* technologia przekształca zadanie uczenia się, od wzmocnienia do redefinicji.

SAMR najlepiej rozumieć jako soczewkę głębokości integracji używaną w planowaniu i ewaluacji, uzupełniającą teorię adopcji (która wyjaśnia przyjęcie) i TPACK (który wyjaśnia kompetencję nauczyciela). W erze SI najowocniej używać go do pytania, czy generatywna SI służy wzmocnieniu istniejących zadań, czy umożliwieniu zadań prawdziwie nowych — rozróżnienie, które przewija się przez badania bazy wiedzy nad ocenianiem i programem nauczania.

## Implikacje dla praktyki

- **Używaj SAMR do stawiania pytania o głębokość, nie do narzucania transformacji.** Wzmocnienie nie jest z natury gorsze; wiele rutynowych zastosowań SI to uzasadnione Podstawienia. Model jest diagnostyczny — wyjaśnia, co dane użycie faktycznie zmienia.
- **Łącz go z ICAP.** SAMR opisuje, czym staje się *zadanie*; ICAP opisuje, w jaki sposób *angażuje się* uczący się. Użyte razem odróżniają powierzchowne podstawienie od głębokiej interaktywnej ko-konstrukcji.
- **Uzupełnij go soczewkami adopcji i równości.** SAMR nie mówi nic o tym, dlaczego narzędzie jest przyjmowane ani kto korzysta. Łącz go z [[technology-acceptance-model|modelami adopcji]] i analizą [[equity-in-ai-education|równości]], aby etykieta głębokości nie zastępowała [[critical-thinking|krytycznej oceny]].
- **Traktuj dowody integracji przyrostowej jako ustalenie, nie porażkę.** Jeśli większość integracji SI skupia się na Podstawieniu/Rozszerzeniu, zadaniem projektowym nie jest wymuszanie Redefinicji, lecz uznanie, że transformacyjne użycie wymaga innych projektów zadań, a nie tylko lepszych narzędzi.

## Częste błędne wyobrażenia

**„Wyżej na SAMR to lepsze nauczanie".** SAMR jest soczewką do pytania, czy SI *rekonceptualizuje* uczenie się, czy *ulepsza* istniejącą praktykę; nie jest rankingiem jakości, a Redefinicja nie jest właściwą odpowiedzią na każde zadanie. Podstawienie, które usuwa nieproduktywny krok, jest sukcesem ocenianym po uczeniu się, a nie po poziomie, który zajmuje.

**„Adopcja SI wspina się po drabinie".** Rozkład koncentruje się na dole. Przegląd systematyczny integracji SI w [[higher-ed|szkolnictwie wyższym]] wykazał, że **większość zastosowań lokowała się na Podstawieniu lub Rozszerzeniu, a tylko jedno badanie zbliżało się do Redefinicji**. Praktyczne użycie SAMR w tej literaturze jest więc w dużej mierze diagnostyczne — nazywa to, gdzie dziedzina faktycznie jest.

**„SAMR i TPACK to rywalizujące ramy".** Opisują różne rzeczy: SAMR opisuje *stopień przekształcenia* zadania, podczas gdy [[tpack|TPACK]] opisuje *wiedzę*, której nauczyciel potrzebuje do dobrej integracji technologii. Nauczyciel może mieć wysokie TPACK i nadal działać na poziomie Podstawienia — dlatego obie ramy stosuje się razem, a nie wybiera między nimi.

**„Narzędzie transformacyjne na jednym poziomie jest transformacyjne na wszystkich".** To samo narzędzie generatywne może wspierać Podstawienie w jednym kursie i Redefinicję w innym, ponieważ poziom jest właściwością projektu zadania, a nie technologii. Przypisywanie poziomu narzędziu prowadzi do decyzji adopcyjnych w miejsce decyzji projektowych.

## Połączone koncepcje

- [[ai-education]] — Edukacja ze SI (parasol)
- [[tpack]] — Wiedza technologiczno-pedagogiczno-przedmiotowa (TPACK)
- [[technology-acceptance-model]] — Modele adopcji technologii
- [[icap-framework]] — Rama ICAP zaangażowania poznawczego
- [[ai-technologies]] — Technologie i techniki SI
- [[teacher-ai-competency]] — Kompetencje nauczycieli w zakresie SI
- [[educational-development]] — Rozwój edukacyjny
- [[learning-design]] — Projektowanie uczenia się
- [[k-12]] — Edukacja K-12
- [[higher-ed]] — Szkolnictwo wyższe
- [[generative-ai]] — Generatywna SI

## Połączone artykuły

- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Integracja SI w szkolnictwie wyższym oceniona modelem SAMR: głównie Podstawienie/Rozszerzenie
- [[thermomix-genai-education-analogy-2026]] — ICAP i SAMR mapujące cztery scenariusze od gotowania do uczenia się
- [[rewriting-curriculum-genai-pedagogy-2026]] — SAMR wśród soczewek zmiany programu nauczania napędzanej przez GenAI
- [[crompton-faculty-technology-integration-standards-2026]] — SAMR wśród ram informujących standardy technologiczne dla wykładowców
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — Posthumanistyczna krytyka humanistycznej ontologii SAMR
- [[reclaiming-epistemic-agency-co-agency-2026]] — Milczenie SAMR o władzy, własności danych i odpowiedzialności
- [[genai-use-changing-institutional-policy-physics-2026]] — Użycie GenAI przez studentów wobec zmieniających się polityk instytucjonalnych: funkcje użycia mapowane na poziomy SAMR (Quince i Faulconer 2026)
- [[jita-ai-mathematics-classrooms-inclusion-2026]] — AI in Mathematics Classrooms: A Synergistic Strategy for Diversity and Inclusivity
