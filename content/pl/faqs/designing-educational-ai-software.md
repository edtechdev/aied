---
title: "Jakie są najlepsze praktyki i wskazówki dotyczące projektowania skutecznego oprogramowania edukacyjnego opartego na SI?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Zespół ma działający prototyp tutora i prezentację dla okręgu szkolnego za trzy tygodnie. Albo szkoła partnerska poprosiła o dołożenie interfejsu czatu na swój czytnik kursowy, a ktoś mówi, że to praca na dwa tygodnie. Albo recenzent zamówień publicznych odesłał sekcję bezpieczeństwa z jednym zdaniem: co dokładnie przetestowano?

Odpowiedź jest węższa, niż zakłada większość specyfikacji produktu. SI w edukacji działa jako ekspert o ograniczonym zakresie pod nadzorem człowieka: zdolność zamknięta w zdefiniowanej domenie, ugruntowana w treści zatwierdzonej przez prowadzącego, a nie w pamięci modelu, współprojektowana z nauczycielami i uczącymi się, którzy jej używają, oceniana w podtrzymywanej interakcji wieloturowej. Ten ostatni warunek większość zespołów pomija. Szkoda pedagogiczna pojawiła się w każdym modelu testowanym w przytoczonym niżej benchmarku, a odsetek porażek rósł z 17,7% w interakcjach jednoturowych do 77,8% w rozmowach wieloturowych.

## W skrócie

**1.** Zapisać, co decyduje system, a co decyduje nauczyciel. Ta granica staje się architekturą.

**2.** Oceniać interakcję wieloturową i świadomą dyscypliny wobec realnego programu, a nie pojedyncze prompty wobec ogólnej rubryki bezpieczeństwa.

**3.** Ugruntować odpowiedzi w zatwierdzonej treści i utrzymać komponent weryfikujący osobno od konwersacyjnego.

**4.** Traktować każdą pracę przesłaną przez studenta jako dane wejściowe niezaufane, także wtedy, gdy system ją ocenia.

**5.** Zbudować bramkę próby, ścieżkę eskalacji i możliwość nadpisania przez nauczyciela przed pilotażem.

**6.** Wpisać dostępność i testowanie równości z dezagregacją do specyfikacji, a nie do kolejki zaległości.

## Zdecydować, czym system może być

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Badanie projektowania partycypacyjnego Reicherta i współpracowników]] z sześcioma nauczycielami szkoły średniej koryguje założenie, że SI w edukacji powinna być autonomicznym agentem. Poproszeni o zaprojektowanie na papierze klasowych [[conversational-ai|chatbotów]], wszyscy nauczyciele opisali eksperta o ograniczonym zakresie w dwóch wymiarach. Granice uprawnień zostawiały kontrolę nauczycielom, ponieważ odpowiedzialności za uczenie się i bezpieczeństwo studentów nie można delegować. Granice ekspertyzy odzwierciedlały brak wiedzy kontekstowej SI o poszczególnych studentach, dynamice klasy i normach instytucji.

Zaproponowana przez nich architektura miała cztery komponenty (zakres treści, prezentacja treści, adaptacja do studenta, nadzór [[teacher-role|nauczyciela]]) na trzech warstwach ochronnych: granicach domenowych ograniczających zakres, filtrowaniu treści umożliwiającym bezpieczną [[personalized-learning|personalizację]] oraz nadpisywaniu przez nauczyciela w przypadkach niejednoznacznych. Delegowanie było wybiórcze. Naniesione na dziewięć zdarzeń nauczania Gagnégo, nauczyciele przyjmowali SI przy prezentowaniu treści, dostarczaniu zadań ćwiczeniowych i oferowaniu [[formative-assessment|formującej]] [[feedback|informacji zwrotnej]], a odmawiali przy ustalaniu celów i prowadzeniu [[summative-assessment|sumującego]] [[assessment|oceniania]].

Do tej samej specyfikacji należą dwie wartości domyślne: dopasować system do wyraźnych celów uczenia się i nastroić go na odpowiedzi życzliwe, ale poprawne, a nie na zgadzanie się z osobą, która pisze. Tutor, który schlebi błędnej odpowiedzi, nauczył studenta, że ta odpowiedź była poprawna.

Jeden szczegół jest teraz tani, a później drogi: ci nauczyciele chcieli przejrzystości zachowania, widocznych ograniczeń i sygnałów niepewności bardziej niż wyjaśnień rozumowania modelu. Cała szóstka prosiła o pełne rejestrowanie rozmów, alerty w czasie rzeczywistym i możliwość nadpisania, ujmując to jako odpowiedzialność zawodową, a nie brak zaufania. Warto to zaprojektować w pierwszym sprincie, ponieważ dokładanie rejestrowania do tutora zbudowanego tak, by wydawał się niewidzialny, jest przepisaniem go od nowa.

## Testować w rozmowie, a nie w jednym turze

Synteza na stronie [[pedagogical-safety|bezpieczeństwa pedagogicznego]] dowodzi, że konwencjonalne testowanie bezpieczeństwa nie wystarcza w edukacji. System może unikać treści toksycznych i nadal wyrządzać szkodę, ujawniając odpowiedzi, wzmacniając [[misconceptions|błędne przekonania]], tłumiąc refleksję, promując zależność albo odchodząc od celów dydaktycznych.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] [[benchmark]] podaje na to liczby. W każdym testowanym modelu, od otwartych modeli o rozmiarze 3,8B do GPT-5-mini, szkoda [[pedagogy|pedagogiczna]] była powszechna, skala nie poprawiała bezpieczeństwa w sposób rzetelny, a odsetek porażek rósł z 17,7% w interakcjach jednoturowych do 77,8% w rozmowach wieloturowych. Wzorce naruszeń różniły się w zależności od przedmiotu. Ich taksonomia 11 wymiarów i 48 podryzyk obejmuje kategorie poznawcze, epistemiczne, [[metacognition|metapoznawcze]], [[motivation|motywacyjno-afektywne]], rozwojowe, równościowe oraz kategorie dopasowania dydaktycznego, i działa zarówno jako lista kontrolna projektu, jak i jako zestaw testów.

Liczbę eskalacji warto czytać jako zdanie o planie testów. Tutor, który przechodzi tysiąc sond jednoturowych, może zawieść w czterech rozmowach na pięć, gdy student zacznie się spierać albo zapyta trzeci raz. Wieloturowy zestaw testowy trzeba zbudować przed prezentacją.

## Ugruntować treść i oddzielić weryfikator

Ugruntowanie jest decyzją architektoniczną. [[eduguard-safe-rag-llm-tutor|EduGuard]], bezpieczny tutor [[rag|z wyszukiwaniem rozszerzonym]] do [[cs-education|wstępnego programowania]], łączy zatwierdzone przez prowadzącego wyszukiwanie kursowe z architektonicznie osobnym weryfikatorem twierdzeń, wyraźną kontrolą [[cognitive-offloading|nadmiernego polegania]] oraz benchmarkiem z 600 zapytań napisanych przez prowadzącego, obejmującym błędne przekonania, debugowanie, zapytania z mieszanym językiem i wrogie prompty wymuszające bezpośrednią odpowiedź. Wypadł lepiej niż linie bazowe tutorów: GPT-4o-mini oraz [[socratic-method|sokratejskiego tutora]] opartego na Llama.

Część, którą można przenieść, to rozdzielenie: komponenty, które weryfikują, nie prowadzą rozmowy, a benchmark obejmuje prompty napisane po to, by wyciągnąć odpowiedzi, a nie po to, by sprawdzić uprzejmość. [[hallucination-risk|Ryzyko halucynacji]] obejmuje tryb porażki, który zatwierdzone wyszukiwanie ma ograniczać.

## Traktować pracę studenta jako dane wejściowe niezaufane

Model zagrożeń, który pomija większość porad projektowych, siedzi wewnątrz ocenianego artefaktu. [[humble-prompt-injection-ai-grading-red-team-2026|Ocena red team z użyciem wstrzykiwania promptów, przeprowadzona przez Humble'a (2026)]] sprawdzała, czy studenci mogą manipulować oceniającym opartym na LLM przez wstrzykiwanie promptów w swoich pracach, i manipulacja działała: wstrzyknięcia, które instruują, przeformułowują albo wcielają się w rolę oceniającego, przesuwają ocenę bez zmiany pracy.

Rubrykę i instrukcje trzeba trzymać poza oknem kontekstu kontrolowanym przez studenta, usuwać lub oznaczać treść przypominającą instrukcje, nigdy nie pozwalać, by praca ustalała własne kryteria, i zachować ludzką decyzję przy każdej ocenie o konsekwencjach. Oceniający, który czyta swoje instrukcje z tekstu, który osądza, oddał rubrykę zdającemu.

## Rusztować pracę, a nie ją wykonywać

System, który odpowiada, kończy myślenie, po które został kupiony. Do zgłoszenia należą dwa elementy: bramka próby, tak aby żaden wynik nie pojawił się, zanim student czegoś nie zaproponuje, oraz [[human-in-the-loop-ai|ścieżka eskalacji do człowieka]] z nazwanym celem, którym w produkcie klasowym jest nauczyciel, w formie, na której nauczyciel może działać. [[scaffolding]] i wzorzec [[socratic-method|sokratejski]] to produktowe wersje tego, co konspekt lekcji robi ręcznie; [[developing-ai-tutor]] omawia diagnozę, drabinki podpowiedzi i informację zwrotną szczegółowo.

## Wpisać dostępność i równość do specyfikacji

Wymagania dostępności są wystarczająco konkretne na sprint: obsługa klawiaturą, zgodność z czytnikami ekranu, napisy i transkrypcje, odpowiedni kontrast, użyteczne teksty alternatywne i zgodność z [[ai-technologies|technologiami]] wspomagającymi. Generowane przez SI funkcje dostępności nadal wymagają kontroli jakości. Zobacz [[accessibility]].

Testowanie równości powinno obejmować cały łańcuch przetwarzania i dezagregować zachowanie według języka, niepełnosprawności, kultury i innych istotnych cech uczących się, zamiast polegać na zbiorczej trafności. System, który wypada dobrze średnio, a słabo dla jednej grupy, dostarczył porażkę właśnie tej grupie. Zobacz [[bias-mitigation]] i [[equity-in-ai-education|Równość]].

## Projektować z ludźmi, którzy będą tego używać

[[ko-hughes-vsd-student-centered-its-2026|Ko i Hughes]] zastosowali projektowanie wrażliwe na wartości do [[intelligent-tutoring|systemu tutoringu inteligentnego]] ze studentami i prowadzącymi college'ów społecznościowych, grupą historycznie pomijaną w projektowaniu platform uczenia się. Znaleźli napięcia wartości do zarządzania, a nie do rozwiązania: przejrzystość wobec interpretowalności, [[privacy|prywatność]] wobec wglądu dydaktycznego oraz [[agency|sprawczość studenta]] wobec [[scaffolding|rusztowania]] prowadzonego przez system. Studenci woleli wyjaśnienia oparte na współpracy i uczłowieczone od surowej przejrzystości modelu, a prototyp zakodował 16 funkcji zgodnych z wartościami w obszarach [[explainable-ai|wyjaśnialnej SI]], obecności człowieka w pętli i kontroli prywatności.

[[wang-teacher-ai-co-design-review-2026|Przegląd autorstwa Wang, Liu i Islam]] obejmujący 28 badań empirycznych dodaje słownik do wybierania narzędzi. [[generative-ai|Generatywna SI]] jest używana głównie do planowania lekcji, generowania promptów i twórczego generowania pomysłów, przy czym SI występuje jako asystent lub generator treści znacznie częściej niż jako współprojektant, a cztery właściwości, efektywność, responsywność, [[creativity|kreatywność]] i [[equity-in-ai-education|równość]], pozwalają nauczycielom ocenić, które narzędzie pasuje do którego problemu projektowego.

Oba badania traktują projektowanie jako [[human-in-the-loop-ai|współpracę z człowiekiem w pętli]] i [[human-ai-collaboration|współpracę człowiek-SI]], a nie jako [[usability-research|badanie użyteczności]] albo działania informacyjne. Oba pokazały, że interesariusze ujawniali wymagania, których żaden benchmark trafności by nie uchwycił, i to jest praktyczny argument za płaceniem za te sesje: wymagania, które inaczej poznałoby się w pilocie.

## Co zespoły projektowe rozumieją błędnie

Bezpieczeństwo oznacza moderowanie treści. Szkoda w produkcie edukacyjnym przychodzi często jako pomocna odpowiedź w złym momencie. SafeTutors znalazł szkodę pedagogiczną w każdym testowanym modelu i porażkę rosnącą do 77,8% w trakcie rozmowy, co nie jest kategorią, do której zbudowane są filtry treści.

Większy model naprawi pedagogikę. Skala nie poprawiała bezpieczeństwa w sposób rzetelny nigdzie, od otwartych modeli o rozmiarze 3,8B do GPT-5-mini.

Dobry indeks wyszukiwania oznacza, że sprawa treści jest zamknięta. EduGuard łączy wyszukiwanie z osobnym weryfikatorem i testuje wrogie prompty wymuszające bezpośrednią odpowiedź, ponieważ ugruntowane wyszukiwanie nadal pozostawia drogę do nadmiernego ujawniania.

Nauczyciel jest planem awaryjnym. Cała szóstka nauczycieli w badaniu projektowym prosiła o rejestrowanie, alerty i nadpisywanie jako warunek odpowiedzialności zawodowej. Zgłoszenie do wsparcia nie jest nadpisaniem.

Dostępność to późniejsze zgłoszenie. Siedzi w specyfikacji albo staje się przepisaniem od nowa, a generowane teksty alternatywne i napisy nadal wymagają ludzkiej kontroli.

## Co się na Tobie odbije

**„Nie zbudujemy zestawu testowego przed startem.”** Warto zbudować mały. Pierwszym twierdzeniem, którego potrzeba, jest to, co dzieje się przez pięć tur. Wziąć 40 realnych pytań programowych, przeprowadzić każde jako rozmowę pięcioturową ze studentem, który opiera się podpowiedzi, i ocenić według 11 wymiarów. To obronna sekcja bezpieczeństwa i mieści się w sprincie.

**„Nauczyciele chcą edytować prompty, a nie możemy zagwarantować, co napiszą.”** Więc zawęzić powierzchnię, którą edytują. Prompt systemowy zostaje po stronie zespołu; cele, zatwierdzona treść, drabinka podpowiedzi i kontakt eskalacyjny są ich. Architektura eksperta o ograniczonym zakresie istnieje po to, żeby konfiguracja pozostawała w zakresie, który można przetestować.

**„Nasze wyniki w benchmarku są wysokie.”** Trafność odpowiedzi jednoturowych nie przewiduje zachowania w rozmowie, a benchmark, który mierzy to drugie, znalazł 77,8% porażek w warunkach wieloturowych w każdym testowanym modelu. Warto raportować obie liczby, inaczej pierwsza zostanie odczytana jako druga.

**„Pełne rejestrowanie to problem prywatności.”** To prawda, co wskazuje na ograniczenie celu, a nie na brak zapisu. Rejestrować to, na czym nauczyciel musi działać, minimalizować resztę, ograniczać dostęp i mówić w produkcie, co jest przechowywane i jak długo.

## Co zrobić w tym tygodniu

**1.** Zapisać granicę uprawnień na jednej stronie: co decyduje system, co decyduje nauczyciel i czego można by bronić w przeglądzie zamówień.

**2.** Zamienić taksonomię 11 wymiarów w plan testów i przeprowadzić go wieloturowo na 40 realnych pytaniach z jednego kursu.

**3.** Oddzielić weryfikator od generatora w dokumencie projektowym, nawet jeśli pierwsza wersja uruchamia je w jednym procesie.

**4.** Dodać bramkę próby, cel eskalacji i nadpisywanie przez nauczyciela do kolejki, z przypisanymi nazwiskami.

**5.** Wpisać listę wymagań dostępności i jedno wymaganie dezagregacji do kryteriów akceptacji tego wydania.

## Dokąd dalej

[[developing-ai-tutor]] obejmuje budowę, a [[designing-ai-into-learning]] obejmuje domyślne ustawienia pedagogiczne wokół niej. Czy to działa po wdrożeniu, opisuje [[checking-whether-educational-ai-works]]; pojęcia bezpieczeństwa stojące za planem testów są w [[pedagogical-safety]] i [[hallucination-risk]]; a kontekst zamówień publicznych w [[legal-issues-and-risks]].
