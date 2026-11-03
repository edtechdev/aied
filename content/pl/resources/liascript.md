---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Otwarty dialekt Markdowna, który zamienia plik tekstowy w interaktywny kurs w przeglądarce, z quizami i uruchamialnym kodem, oraz wieloagentowy asystent do budowania kursów."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**LiaScript** to rozszerzony dialekt Markdowna wraz z interpreterem. Jeden plik tekstowy staje się interaktywnym kursem: ten sam dokument można czytać jako narrację, odtwarzać jako slajdy albo przechodzić jako kurs, wszystko w przeglądarce. Do napisania i przeczytania takiego pliku nic nie trzeba instalować.

## Co można z nim zrobić

Quizy przybierają formy, których nauczyciel oczekuje, w tym wybór odpowiedzi, pytania macierzowe, pole tekstowe, listy rozwijane i teksty z lukami, pisane bezpośrednio w Markdownie. Bloki kodu można uczynić edytowalnymi i uruchamialnymi na potrzeby samouczków [[cs-education|programowania]], a system makr opakowuje biblioteki JavaScript w bloki wielokrotnego użytku, więc interaktywne diagramy nie wymagają kodu od każdego autora. Kurs jest hostowany tam, gdzie autor już trzyma tekst, bez usługi, do której się przywiązuje, a wszystko działa po stronie klienta, więc wczytany kurs działa offline. LiaScript Exporter pakuje kurs jako SCORM dla Moodle'a, ILIAS-a i innych [[edtech-platform|systemów zarządzania uczeniem się]].

## Agent dydaktyczny do budowania kursów

Projekt publikuje też **[agenta dydaktycznego](https://github.com/LiaScript/teaching-agent)** do tworzenia kursów LiaScript, na licencji Boost Software License 1.0. Cztery agenty — do nauczania, projektowania wizualnego, przeglądu z perspektywy uczącego się i publikowania — pracują wokół jednego pliku projektu trzymającego stan kursu, w przepływie najpierw-definiuj: cele, odbiorcy i dydaktyka są ustalane, zanim powstanie jakikolwiek materiał, a potem następują bramki walidacji. Szkic można przejrzeć z perspektywy nazwanej persony uczącego się, by sprawdzić [[cognitive-offloading|obciążenie poznawcze]] i zakładaną wcześniejszą wiedzę. Agent nie zależy od edytora i generuje konfiguracje dla Claude Code, Copilota, Codexa, Cursora albo czatu webowego z jednej specyfikacji, a repozytorium służy zarazem jako opracowany przykład, mieszcząc sześciojednostkowy kurs o unijnej dyrektywie NIS2 i dokument opisujący, jak powstał.

## Uwagi i zastrzeżenia

LiaScript jest bezpłatny, bez płatnego planu i bez wymogu konta, i rozwijany otwarcie na licencji BSD-3-Clause, więc instytucje mogą go hostować samodzielnie i modyfikować. Funkcję Live Classroom warto obejrzeć, zanim oprze się na niej na skalę, ponieważ synchronizacja w czasie rzeczywistym korzysta ze współdzielonej usługi, a nie wyłącznie z lokalnego renderowania. Agent dydaktyczny jest młody i słabo przyjęty, więc należy traktować go jako działający prototyp, a nie wspierany produkt.

## Powiązane pojęcia

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
