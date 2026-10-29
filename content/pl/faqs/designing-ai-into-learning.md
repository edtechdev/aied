---
title: "Jak zaprojektować SI jako część doświadczenia uczenia się?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/designing-ai-into-learning
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

W konspekcie modułu jest wiersz z napisem „aktywność z SI” i nikt nie potrafi powiedzieć, co ten wiersz zastępuje. Albo prowadzący poprosił o dodanie chatbota do kursu, który już działa, a zadaniem jest umieszczenie go tak, żeby nie zepsuć tej części, która sprawiała, że kurs działał.

Warto zacząć od celu uczenia się i od aktywności, która ten cel wytwarza. Ten sam model może być rusztowaniem, partnerem w [[socratic-method|metodzie sokratejskiej]], czytelnikiem szkiców, [[simulation|symulacją]] albo maszyną do odpowiedzi, a to, który z nich się dostaje, zależy od projektu, a nie od modelu. Trzeba nazwać tryb, który się buduje, umieścić próbę uczącego się przed pojawieniem się jakiejkolwiek pomocy i zostawić w kursie co najmniej jedną ścieżkę, która działa bez narzędzia.

## W skrócie

**1.** Napisać zdanie o tym, co uczący się potrafi zrobić bez narzędzia, i sprawdzać względem niego każdą funkcję SI.

**2.** Ułożyć interakcję w sekwencję: próba uczącego się, wsparcie SI, ocena lub poprawa po stronie uczącego się, demonstracja.

**3.** Nazwać tryb na drabinie ICAP. Obejście i rusztowanie mogą być tym samym narzędziem na różnych szczeblach.

**4.** Umieścić SI tam, gdzie sekwencja kursu już przewiduje konkretną aktywność, a nie na końcu jako dodatek.

**5.** Wstrzymać narzędzie, dopóki jakaś zdolność się kształtuje, a potem je przywrócić w punkcie kontrolnym, którego student nie jest w stanie sfingować.

## Zdecydować, co uczący się robi bez narzędzia

[[pedagogy|Pedagogiki i strategie nauczania]] w bazie wiedzy dostarczają testu: czy konfiguracja zachowuje aktywność, która wytwarza zamierzone uczenie się? Odpowiedź trzeba zapisać na papierze, zanim ktokolwiek wybierze funkcję.

[[finkelstein-principled-ai-education-2025|Ramy zasad edukacji z SI]] formułują ogólną regułę: technologia powinna wzmacniać, a nie wypierać ludzkie zdolności, które edukacja zamierza rozwijać. Zapisane jako test dla modułu oznacza to nazwanie zdolności, nazwanie aktywności, która ją buduje, i pytanie, czy SI znajduje się wewnątrz tej aktywności, czy obok niej.

## Próba przed pomocą

Domyślny wzorzec, który wytrzymuje kontakt z realnymi zajęciami: **próba uczącego się, wsparcie SI, ocena lub poprawa po stronie uczącego się, demonstracja zrozumienia.**

W praktyce oznacza to proszenie o wstępną prognozę lub rozwiązanie, zanim pojawi się jakakolwiek pomoc, i przedkładanie pytań, podpowiedzi, przykładów, kontrargumentów i [[feedback|informacji zwrotnej]] nad natychmiastowe wykonanie zadania. Warto zachować [[productive-failure|produktywną porażkę]] tam, gdzie służy ona uczeniu się. Trzeba wymagać weryfikacji twierdzeń, które mają konsekwencje, wbudować wyjaśnianie i [[learning-by-teaching|uczenie przez nauczanie]], a wsparcie wycofywać w miarę wzrostu kompetencji. Warto też zostawić trochę pracy bez SI, żeby uczący się mogli skalibrować to, co potrafią sami.

Synteza [[reducing-ai-misuse|Ograniczanie niewłaściwego użycia SI]] zaleca ten sam kształt: najpierw myślenie, potem SI, potem refleksja, z celowymi punktami kontrolnymi oceny.

## Nazwać tryb, dla którego się projektuje

[[thermomix-genai-education-analogy-2026|Analogia maszyny kuchennej Rummela, Nachtigalla i Panadero]] przenosi pytanie z tego, czy uczący się korzystają z [[generative-ai|generatywnej SI]], na to, jak to użycie kształtuje to, kim się stają. Przeniesiona na [[icap-framework|ICAP]] i [[samr-model|SAMR]] daje drabinę. Pełne zlecenie zadania na zewnątrz, bez poprawy i bez [[critical-thinking|krytycznego namysłu]], to bierne podstawienie (Passive substitution), które grozi [[cognitive-offloading|utratą umiejętności i nadmiernym poleganiem]]. [[prompt-engineering|Dopracowywanie promptów]] i krzyżowe sprawdzanie wyników wymagają [[prior-knowledge|wcześniejszej wiedzy]] i [[self-regulated-learning|samoregulacji]], czyli trybu aktywnego albo Augmentation. Używanie SI do burzy mózgów, planowania i oceny oryginalnej pracy to tryb konstruktywny albo Modification. SI jako prawdziwy partner dialogu przy wspólnym tworzeniu i adaptacyjnej informacji zwrotnej to tryb interaktywny albo Redefinition.

Wniosek jest bezpośredni. To samo narzędzie jest obejściem na jednym szczeblu i [[scaffolding|rusztowaniem]] na następnym, więc dokument projektowy powinien nazywać zamierzony tryb.

## Umieścić narzędzie tam, gdzie sekwencja przewiduje aktywność

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec i Horvat]] przeanalizowali zaplanowaną sekwencję 29 064 aktywności nauczania i uczenia się w 554 kursach i znaleźli widoczną gramatykę projektu. Aktywności typu przyswajania są najczęstszym punktem wejścia i największym pojedynczym typem, powyżej 20%. Typ uczenia się podąża za zamierzonym poziomem Blooma: przyswajanie spada z około 50% na poziomie 1 do około 20% na poziomie 6, a wytwarzanie rośnie powyżej 20% na poziomach 5 i 6. Najsilniejszym przejściem w danych jest przejście od oceniania do dyskusji, o wartości 0,332.

Z tego wynikają dwie lekcje dla projektowania SI. Narzędzie trzeba umieścić tam, gdzie sekwencja przewiduje dany typ aktywności. A ponieważ informacja zwrotna skupiała się razem ze [[collaborative-learning|współpracą]], [[group-work|pracą grupową]] i obecnością [[teacher-role|nauczyciela]], struktury rówieśnicze i synchroniczne są miejscem, w które wsparcie SI powinno się włączać, a nie miejscem, które powinno zastępować.

## Zdecydować, co wstrzymać i kiedy to przywrócić

[[refrain-amplify-genai-curriculum-2026|Ramy „najpierw wstrzymać, potem wzmocnić” Torres-Sahli i współpracowników]] przenoszą to na poziom programu. Trzeba wstrzymać narzędzie generatywne, dopóki zdolność się kształtuje, a potem je przywrócić, gdy student potrafi nim kierować, oceniać to, co zwraca, i za to odpowiadać, z trudnym do sfingowania punktem kontrolnym na każdym zawiasie.

Urządzenia podlegają kryterium kształtowania kontra [[cognitive-offloading|odciążania]]: są dozwolone tam, gdzie wspierają zaangażowaną pracę, i wykluczone tam, gdzie wyczerpują uwagę. To zamienia decyzje o odciążaniu w pytanie o [[curriculum-design|program nauczania]] i [[governance|zarządzanie]], które pojawia się przed projektowaniem kursu, a nie po nim.

## Sprawdzić, czy dopasowanie jest rzeczywiste

[[mcinnes-salvaging-constructive-alignment-genai-2026|Analiza dyskursu McInnesa i współpracowników]] obejmująca 14 dokumentów z wytycznymi dla szkolnictwa wyższego ostrzega, że porady ujęte w języku efektywności, takie jak używanie generatywnej SI do szkicowania efektów uczenia się, rubryk i konspektów kursów, dają [[assessment|dopasowanie]], które wygląda na dopasowane, a zaniedbuje konstruktywną połowę. Efekty, aktywności i oceny powstają jako pozycje odrębne, a nie współzależne.

Ich rozwiązaniem jest zmiana kolejności. Nauczyciele akademiccy powinni rozumieć konstruktywne dopasowanie wystarczająco dobrze, żeby kierować wynikami SI, przesłuchiwać je i odrzucać, zanim powierzą mu jakąkolwiek część pracy, bo przyjęcie czegoś, co na powierzchni wygląda wiarygodnie, jest tym samym błędem oceny, przed którym ostrzegają studentów. Tam, gdzie SI jest używana, autorzy argumentują za systemami ograniczonymi instytucjonalnie i [[rag|wspieranymi przez wyszukiwanie]], skonfigurowanymi wokół lokalnej polityki i standardów jakości, a nie wokół ogólnych ustawień domyślnych wytrenowanych na internecie.

## Co projektanci nauczania rozumieją błędnie

Dodanie SI liczy się jako interwencja. Uczenie się zmienia aktywność, którą wykonuje student, a SI jest jednym elementem otoczenia tej aktywności. Dobrze umieszczona podpowiedź i dobrze umieszczona odpowiedź mogą działać na tym samym modelu i dawać przeciwne efekty uczenia się.

Napisanie zgody to praca projektowa. Zgoda określa, co jest dozwolone. Nie określa sekwencji, trybu ani punktu kontrolnego, a te trzy rzeczy decydują, czy aktywność przetrwa.

Efektywność jest celem przeprojektowania. Szkicowanie efektów i rubryk z modelem jest szybkie, a analiza 14 dokumentów pokazała, że wynik może wyglądać na dopasowany, podczas gdy jego części przestają się wzajemnie wspierać.

## Co się na Tobie odbije

**„Studenci i tak będą z tego korzystać, więc projektowanie wokół tego jest naiwne.”** Będą, i to jest argument za określeniem trybu i za nauczaniem go. Moduł, który nazywa tryb, daje studentowi coś, do czego może się dostosować.

**„Nie ma czasu na zmianę kolejności całego kursu.”** Wtedy trzeba zmienić kolejność jednego modułu i jednego zaliczenia. Zawias „najpierw wstrzymać, potem wzmocnić” to jeden punkt kontrolny, a sekwencja „najpierw myślenie” to trzy instrukcje na jednej karcie.

**„Nasza funkcja SI ma już zabezpieczenia.”** Zabezpieczenia ograniczają to, co mówi model. Nie decydują o tym, czy uczący się najpierw podjął próbę, czy wsparcie słabnie ani czy istnieje ścieżka bez SI. To decyzje projektowe w kursie, a nie ustawienia w produkcie.

## Co zrobić w tym tygodniu

**1.** Napisać zdanie o wyniku bez pomocy dla modułu i umieścić je nad listą aktywności.

**2.** Oznaczyć zamierzony tryb ICAP przy każdej aktywności z SI w konspekcie.

**3.** Przenieść jedną aktywność z SI tak, żeby uczący się najpierw podjął próbę rozwiązania problemu.

**4.** Wybrać jedną ścieżkę przez moduł bez SI i oznaczyć ją dla studentów.

**5.** Nazwać jeden zawias, na którym narzędzie jest wstrzymane, i punkt kontrolny, który je przywraca.

## Dokąd dalej

[[learning-design|Projektowanie nauczania]], [[active-learning|Aktywne uczenie się]] i [[scaffolding|rusztowanie]] niosą słownik projektowy. Jeśli chodzi o domyślne ustawienia na poziomie interakcji, które decydują, czy zaprojektowana aktywność zachowuje uczenie się, zobacz [[reduce-ai-cheating|Jak ograniczyć oszukiwanie z użyciem SI?]] i [[redesign-assessment-ai-era|Jak przeprojektować ocenianie w erze SI?]]. [[designing-educational-ai-software|Projektowanie edukacyjnego oprogramowania z SI]] opisuje, jak te same zasady ograniczają samo oprogramowanie, a [[developing-ai-tutor|Jak opracować skutecznego korepetytora z SI?]] przekłada je na architekturę korepetytora.
