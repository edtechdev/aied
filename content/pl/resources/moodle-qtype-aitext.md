---
title: "Typ pytania AI Text w Moodle"
created: "2026-11-12T11:09:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Otwarty typ pytania Moodle (GPL v3), który ocenia odpowiedzi w formie swobodnego tekstu za pomocą dużego modelu językowego według promptu przypisanego do pytania i opcjonalnego schematu oceniania, używając OpenAI, Azure lub samodzielnie hostowanego modelu Ollama i pokazując informację zwrotną AI człowiekowi oceniającemu."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Większość integracji quizów AI wysyła każdą odpowiedź do ustalonego wywołania oceniającego. Ten typ pytania Moodle robi odwrotnie: prowadzący pisze rubrykę. Każde pytanie zawiera **prompt** mówiący modelowi, jak ocenić odpowiedź, oraz opcjonalny **schemat oceniania** opisujący, jak przyznawane są punkty, więc zadanie „napisz zdanie w czasie przeszłym” może określić dziesięć punktów za brak błędów, zero za złamaną gramatykę i jeden punkt mniej za każdy błąd ortograficzny. Model zwraca ocenę i [[feedback|informację zwrotną]], a prowadzący może zobaczyć tę informację obok odpowiedzi przy ocenianiu ręcznym.

## Co można z nim zrobić

Dodaj pytanie AIText do dowolnego quizu Moodle, napisz prompt i schemat oceniania, a prompty testuj za pomocą **testera promptów** AJAX w formularzu edycji, zamiast przechodzić przez kolejne próby podglądu. Ocenianie odbywa się przez dwa towarzyszące zachowania pytań (natychmiastowe i odroczone), które trzeba zainstalować razem z typem pytania, co izoluje ocenianie AI od podstawowych zachowań Moodle; istniejące próby korzystające z przestarzałego zachowania `interactivecountback` migrują przy aktualizacji. Jeśli model jest nieosiągalny, ocenianie degraduje się zamiast zgłaszać błąd, więc próba nie przepada. Ponieważ pytanie jest natywnym typem quizu, wyniki trafiają do dziennika ocen jak każda inna pozycja — czego zespół kursu potrzebuje, zanim uzna [[automated-assessment|automatyczne ocenianie]] za pilotaż, a nie demonstrację.

Projekt umieszcza też rubrykę tam, gdzie rozstrzyga się [[ai-feedback-quality|jakość informacji zwrotnej]]: w prompcie napisanym przez prowadzącego, a nie w domyślnym ustawieniu dostawcy. To uczciwe użycie narzędzia — kryteria, które można sprawdzić i poprawić — choć oznacza też, że pułapem jakości jest rubryka, a niejasny prompt daje niejasne ocenianie. Instytucje sięgają po nie przy niskostawkowych, częstych sprawdzeniach, na których opiera się [[formative-assessment|ocenianie kształtujące]], gdzie człowiek inaczej czytałby czterdzieści krótkich odpowiedzi na noc.

## Dla kogo

Administratorzy i deweloperzy Moodle, którzy już prowadzą witrynę; prowadzący, którzy chcą oceniania AI bez osobnej platformy lub komercyjnej licencji; oraz badacze, którzy potrzebują kontrolowanego potoku oceniania do badań. Wymaga Moodle 4.5 lub nowszego i dostępu API do modelu — OpenAI lub Azure przez podsystem AI Moodle albo samodzielnie hostowanej instancji Ollama przez Local AI Manager, co trzyma tekst studentów na lokalnej infrastrukturze. Wtyczkę utrzymuje Marcus Green, jest w sklepie z wtyczkami Moodle i miała 33 gwiazdki i 36 forków, gdy weryfikowano tę stronę.

## Uwagi i zastrzeżenia

Otwarty kod na licencji GPL v3 lub późniejszej, ale bezpłatny nie znaczy bezpłatny w działaniu: ktoś płaci za API modelu, a jakość oceniania zależy od wyboru modelu i projektu promptu. Odpowiedzi w swobodnym tekście opuszczają serwer Moodle, gdy używa się zdalnego dostawcy, więc umowa o danych instytucji rządzi tym, co można wysłać; trasa z samodzielnie hostowaną Ollamą istnieje dla witryn, które nie mogą wysyłać pracy studentów na zewnątrz. Repozytorium nie podaje żadnego opublikowanego badania dokładności ani zgodności, więc wtyczki nie należy wdrażać przy założeniu, że ocenianie przez LLM jest równoważne ocenianiu przez człowieka — [[assessment-validity|trafność]] trzeba ustalić lokalnie wobec ocen ludzi, zanim jakakolwiek ocena będzie miała wagę. Towarzyszące zachowania są twardą zależnością: sama instalacja typu pytania pozostawia pytania bez możliwości oceny.

## Powiązane pojęcia

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
