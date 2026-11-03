---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Otwartoźródłowa umiejętność agentowa i prywatny edytor w przeglądarce, które zamieniają osiemnaście zasad klarownego pisania w tryby tworzenia, przepisywania i recenzji tekstu."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**Clarity** łączy umiejętność agentową z edytorem w przeglądarce, oba zbudowane wokół osiemnastu zasad pisania, które „zasługuje na swojego czytelnika”. Umiejętność instaluje się w agentach kodujących, takich jak Claude Code i Codex, poleceniem `npx skills add addyosmani/clarity`, a potem działa w trzech trybach: tryb recenzji krytykuje szkic i nie rusza pliku, tryb przepisywania edytuje szkic w miejscu, a tryb wywiadu najpierw zadaje piszącemu pytania i współtworzy tekst z odpowiedzi. [[feedback|Informacja zwrotna]], którą dostaje piszący, jest nakierowana na treść przed stylem. Zasady pytają, dla kogo jest tekst i co ta osoba już wie, domagają się twierdzeń zamiast tematów i konkretów zamiast abstrakcji oraz traktują watę słowną jako problem z nieznajomością celu tekstu, a nie z zasobu słownictwa.

Edytor w przeglądarce działa lokalnie na stronie i nie wysyła szkicu; wskazuje znamiona prozy pisanej maszynowo, czytelność i luki w treści, co czyni go użytecznym do przeglądania tekstu wytworzonego przez [[generative-ai|generatywną SI]], zanim dotrze on do czytelnika. Projekt wyraźnie mówi, że celem jest pisanie, które pozostaje rozpoznawalnie własne autora, a nie proza zbudowana tak, by przejść [[ai-detection|detekcję SI]] — tę różnicę wykładowcy rozpoznają, gdy ustalają politykę dotyczącą [[writing-education|nauczania pisania]] wspomaganego SI.

## Co warto wiedzieć przed wdrożeniem

Repozytorium publikuje protokół ewaluacji, próbki przed i po w katalogu `samples/` oraz pliki referencyjne stojące za umiejętnością, więc recenzent może sprawdzić, jak zasady działają, zamiast przyjmować twierdzenie na wiarę; ta strona nie powtarza żadnego zmierzonego wyniku. Autorem jest Addy Osmani, licencja to MIT, a praca jest niezależna, a nie produktem jakiejkolwiek instytucji. Projekt jest młody i aktywny: powstał w sierpniu 2026, ma 54 commity, trzy wydania z najnowszym w wersji 0.2.1 z tego września i około 250 gwiazdek w chwili sprawdzania we wrześniu 2026. Zmiany wniosło trzech współtwórców. Instrukcje umiejętności ładują się do agenta, którego czytelnik już używa, więc obowiązują zwykłe zastrzeżenia [[prompt-engineering|inżynierii promptów]]: jakość krytyki zależy od szkicu, który się jej poda.

## Powiązane pojęcia

[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
