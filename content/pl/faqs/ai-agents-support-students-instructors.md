---
title: "Jak agenci SI mogą wspierać studentów i prowadzących?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T15:22:01-04:00"
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Pokaz dostawcy trwa czterdzieści minut. Agent czyta sylabus, pisze szkic quizu na następny tydzień, oznacza troje studentów, którzy nie otworzyli lektury, i proponuje wysłanie do nich maila. Prorektor chce decyzji o licencji do końca miesiąca.

[[agentic-ai|Agent]] planuje, wywołuje narzędzia, utrzymuje kontekst, dzieli pracę na podzadania i dostosowuje się w kolejnych turach, czyli robi więcej niż [[conversational-ai|chatbot]]. Role po stronie studenta i po stronie prowadzącego, które się przez to otwierają, są realne. Dowody nie pokazują, by większa autonomia dawała więcej uczenia się: w jedynym tu badaniu bezpośredniego porównania agent i chatbot zremisowały. Autonomię trzeba umieścić tam, gdzie człowiek sprawdza wynik, planowanie zostawić uczącemu się i oceniać jakość nauczania własną rubryką.

## W skrócie

**1.** Nazwać zadanie przed produktem.

**2.** Zacząć od strony prowadzącego, gdzie nauczyciel i tak sprawdza pracę.

**3.** Traktować dodaną autonomię jako koszt, dopóki dowody nie powiedzą inaczej.

**4.** Zostawić planowanie i osądzanie uczącemu się, bo to one mają powstać w wyniku zadania.

**5.** Ocenić agenta własną rubryką i zaplanować sprawdzenie bez pomocy, zanim pilotaż się skończy.

## Wybrać zadanie, zanim wybierze się agenta

[[agentic-workflows-education|Przepływy pracy agentowej w edukacji]] wymieniają cztery powracające zdolności: refleksję, planowanie, użycie narzędzi i współpracę wielu agentów. Każda z nich dodaje koszt obok możliwości, w [[explainable-ai|wyjaśnialności]], koordynacji, [[trust-calibration|zaufaniu]], opóźnieniu i nadzorze.

Role po stronie studenta rozciągają się od [[adaptive-learning|adaptacyjnej]] tutoryzacji i planowania nauki, przez [[formative-assessment|kształtującą]] informację zwrotną, prowadzone [[problem-solving|rozwiązywanie problemów]] i generowanie ćwiczeń, po rekomendacje dotyczące wiedzy wstępnej i refleksyjne [[metacognition|metapoznawcze]] [[prompt-engineering|promptowanie]]. Role po stronie prowadzącego obejmują tworzenie materiałów, [[automated-question-generation|generowanie pytań]] i ich walidację, triaż informacji zwrotnej, [[learning-analytics|analitykę]] kursu, projektowanie dydaktyczne, wyszukiwanie zasobów i orkiestrację wyspecjalizowanych podagentów.

Dwie z tych ról są bezpieczniejsze na wczesnym etapie, bo obie dają produkt, który człowiek czyta przed studentami: generator pytań połączony z walidatorem oraz szkic, który nauczyciel redaguje.

## Zacząć tam, gdzie człowiek już sprawdza pracę

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], pierwsze [[rct|randomizowane badanie kontrolowane]] systemu człowiek-SI w tutoryzacji na żywo, dawał początkującym tutorom wskazówki w czasie rzeczywistym czerpane z rozumowania doświadczonych tutorów, w skali 900 tutorów i około 1 800 studentów. Studenci tutorów z dostępem mieli o 4 punkty procentowe większą szansę opanowania tematów, a u najniżej ocenianych tutorów różnica rosła do 9 punktów, przy czym ich studenci dogonili studentów lepiej ocenianych tutorów z grupy kontrolnej. Koszt wynosił około 20 dolarów na tutora rocznie, a analiza ponad 550 000 wiadomości tutoryzacyjnych pokazała, że tutory przechodzili od podawania odpowiedzi do zadawania pytań prowadzących. To SI wzmacniająca [[teacher-role|nauczyciela]].

Agent nie uczył studenta. Zasilał człowieka w środku rozmowy, a człowiek decydował, co powiedzieć. Osoba w pętli i wynik bliski samej pracy to to, co czyni rezultat przenośnym na inny kurs.

## Nie zakładać, że więcej autonomii kupuje więcej uczenia się

[[ilieva-agentic-genai-higher-education-2026|Badanie 130 studentów kursu e-commerce]] wykazało, że zarówno chatbota, jak i agentów opartych na [[generative-ai|generatywnej SI]] oceniono wyżej niż tradycyjne [[online-teaching-and-learning|e-learning]] pod względem uczenia się i [[personalized-learning|personalizacji]], bez istotnej różnicy między chatbotem a agentem. Więcej autonomii, zero dodatkowej wartości na tych miarach.

Ramy tego badania traktują agentów jako ograniczonych, nadzorowanych przez człowieka partnerów uczenia się, przy czym cele, punkty kontrolne i decyzje końcowe zostają u ludzi. [[beyond-agent-label-agentic-ai-governance-2026|Poza etykietą agenta]] czyni z tego zasadę [[governance|zarządzania]]: autonomia nie powinna przekraczać dojrzałości dowodów ani siły odpowiedzialnej kontroli człowieka, a dowody są najmocniejsze na poziomie produktów, a najsłabsze przy trwałym [[learning-gains|uczeniu się]] i [[equity-in-ai-education|równości]].

Ryzyko po stronie uczącego się biegnie w tym samym kierunku. Agent, który planuje i monitoruje za studenta, usuwa praktykę budującą [[self-regulated-learning|samoregulację]] i zaprasza [[cognitive-offloading|odciążanie]]. [[agentic-ai-pedagogical-best-practice-2026|Wskazówki dobrych praktyk]] proszą o zamierzone tarcie, [[scaffolding|rusztowanie]], które wygasa, i [[human-in-the-loop-ai|nadzór człowieka]]. [[desirable-difficulties|Produktywne tarcie]] ma działające przykłady. Agenci konstruktywnego konfliktu, którzy spierają się ze słabym projektem, poprawiali wyniki projektowe w przeglądanych badaniach. [[simulating-students|Symulowani rówieśnicy]] wspierają [[collaborative-learning|uczenie się we współpracy]] i sondowanie [[socratic-method|sokratejskie]], a [[medical-education|kliniczne]] [[simulation|symulacje]] pozwalają uczącym się ćwiczyć tam, gdzie błąd jest tani.

Test dla każdej z nich: co po sesji student potrafi zrobić sam z tego, co wcześniej robił agent? Oddanie osądu kosztuje studenta [[agency|praktykę]] korzystania z niego.

## Sprawdzić agenta wobec własnego osądu

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Osiem agentów dydaktycznych SI wdrożonych w programie nauczania medycyny]] zostało uszeregowanych różnie przez wyniki generowane przez platformę i przez niezależną rubrykę ekspercką. Agent sklasyfikowany przez platformę na trzecim miejscu wypadł ostatni pod względem jakości nauczania. Wyniki platformy indeksują osiągnięcia studentów, które zmieniają się z powodów niemających nic wspólnego z nauczaniem.

Warto zapytać, co liczy liczba na pulpicie, kto napisał rubrykę, która za nią stoi, i jak niski wynik wyglądałby w pracy studenta. [[pedagogical-safety|Bezpieczeństwo pedagogiczne]] należy do tego samego przeglądu, bo łańcuch [[pedagogical-agent|agentów]] utrudnia wskazanie, który komponent odpowiada, gdy odpowiedź jest błędna.

## Zaplanować wyłączenie

Randomizowane badania pokazują, że krótka pomoc SI może obniżać późniejsze wyniki bez pomocy, a okres po wycofaniu wsparcia, czyli [[cognitive-washout-ai-skill-decay-2026|wymywanie poznawcze]], jest niemal całkowicie niezmierzony. Synteza stojąca za tą stroną opiera się na [[meta-analysis-systematic-review|przeglądzie zakresu]] 474 badań i stwierdza, że prace skupiają się na [[higher-ed|szkolnictwie wyższym]], [[stem-education|STEM]], układach krótkoterminowych i tutoryzacji tekstowej, a tylko mniejszość jest wyraźnie zakorzeniona w teorii edukacji. Pilotaż, który kończy się wraz z licencją, zmierzył niewłaściwe okno.

## Co administracja rozumie tu błędnie

Agent to ulepszony chatbot, więc ulepszenie powinno być widoczne w wynikach. W porównaniu na 130 studentach oba warunki z SI pobiły e-learning i żaden nie pobił drugiego.

Pulpit szereguje jakość nauczania. Szereguje osiągnięcia studentów, a osiem agentów dało ranking, który odwrócił trzecie i ostatnie miejsce wobec rubryki eksperckiej.

Autonomia to funkcja, którą warto kupić. Zasada proporcjonalności biegnie odwrotnie, a dowody są najcieńsze tam, gdzie autonomia jest największa.

Dostęp zamyka lukę równościową. Nierówny dostęp do zdolnych systemów agentowych może ją poszerzać, a agent odtwarza stronniczość danych treningowych w skali.

## Co się na Tobie odbije

**„Studenci po prostu pozwolą mu wykonać pracę.”** Część pozwoli, a architektura decyduje, jak łatwo. Agenci, którzy planują i szkicują za studenta, do tego zapraszają. Agenci, którzy wymagają próby, a potem zadają pytanie, nie.

**„Ewaluacja dostawcy mówi, że to działa.”** Trzeba zapytać, co liczy ta liczba. Jeśli to mierzone przez platformę osiągnięcia studentów, mierzy studentów w takim samym stopniu jak agenta.

**„Nikt nie potrafi powiedzieć, który agent odpowiada w łańcuchu.”** To prawda o większości obecnych wdrożeń. Warto wskazać właściciela łańcucha, logować, który komponent wytworzył który wynik, i utrzymać punkt kontrolny z człowiekiem, zanim cokolwiek trafi do dokumentacji studenta.

## Co zrobić w tym tygodniu

**1.** Zapisać zadanie i wynik, po którym będzie się je oceniać, po jednym zdaniu, przed następną rozmową z dostawcą.

**2.** Ocenić wynik jednego agenta własną rubryką na dziesięciu rzeczywistych pracach studentów i zachować oceny.

**3.** Dodać do planu pilotażu zadanie bez pomocy, z datą i osobą odpowiedzialną.

## Dokąd dalej

[[developing-ai-tutor|Tworzenie tutora SI]] omawia budowę skierowaną do studenta, od celu po drabinkę pomocy, a [[evaluating-ai-interventions-methods|Metody ewaluacji interwencji ze SI]] mówi, czy to zadziałało. [[intelligent-tutoring|Inteligentne tutorowanie]] i [[ai-literacy|Kompetencje w zakresie SI]] dostarczają słownictwa projektowego, które ta strona zakłada.
