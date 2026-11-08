---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Otwarta infrastruktura AI dla produktów edukacyjnych: graf wiedzy o standardach i programach nauczania, ewaluatory do oceniania danych wyjściowych LLM, niezależne od modelu umiejętności agentowe dla przepływów pracy nauczyciela oraz Curriculum Sync do wczytywania programów nauczania do systemu zarządzania uczeniem się."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**Learning Commons** publikuje trzy otwarte narzędzia do nakładania funkcji AI na rzeczywiste treści programowe — **[[knowledge-graph|Knowledge Graph]]** obejmujący standardy akademickie, programy nauczania i badania nad nauką o uczeniu się, bibliotekę **Evaluators** do oceny generowanego tekstu oraz niezależne od modelu **[[agentic-ai|Agent Skills]]** dla typowych przepływów pracy nauczyciela — i prowadzi platformę, która dodaje Curriculum Sync do wczytywania programów nauczania do [[edtech-platform|systemu zarządzania uczeniem się]].

## Co możesz z nim zrobić

**Dopasuj wygenerowane treści do standardu.** Knowledge Graph modeluje standardy, [[curriculum-design|programy nauczania]] i badania jako encje i relacje w ramach jednego wspólnego schematu. Produkt może wyszukać standard, na który powinien wskazywać element, przejść relacje warunków wstępnych albo osadzić treści korepetytora w programie, którego ma uczyć — bez budowania i utrzymywania własnego potoku danych.

**Oceń wygenerowane dane wyjściowe, zanim zobaczą je uczniowie.** **Evaluators** mierzą atrybuty [[llm|danych wyjściowych LLM]] — złożoność tekstu, [[feedback]], zgodność ze standardami i trwałe umiejętności — i są dostarczane jako zestawy SDK dla Pythona i TypeScriptu w npm i PyPI. W praktyce działają jako kontrola regresji przy zmianie promptu lub modelu, jako porównanie kandydujących modeli albo jako filtr generowanych elementów i wyjaśnień.

**Spakuj przepływ pracy nauczyciela.** **Agent Skills** łączą instrukcje, odniesienia i zabezpieczenia w otwartym, niezależnym od modelu formacie: sprawdzenie zrozumienia, wielopoziomowe różnicowanie lekcji, plan lekcji zgodny ze standardami i przygotowanie lekcji. Można je wstawić do frameworka agentowego albo czytać jako opracowane szablony pokazujące, ile struktury potrzebuje niezawodny przepływ pracy w klasie.

**Przenieś program nauczania do systemu zarządzania uczeniem się.** Curriculum Sync to krok platformowy, który zamienia mapę standardów w coś, z czego kurs może faktycznie korzystać w LMS.

## Dla kogo

Deweloperzy budujący funkcje AI w produktach do programów nauczania i [[assessment|oceniania]] oraz zespoły programowe lub standardów, które dostarczają dane, do których te produkty są dopasowywane. [[teacher-role|Nauczyciele]] mogą używać Agent Skills samodzielnie, ale rama samego repozytorium to infrastruktura dla osób dostarczających narzędzia.

## Uwagi i zastrzeżenia

Otwartość w [[open-source|kodzie źródłowym]] nie czyni danych otwartymi. Kod Knowledge Graph i Evaluators jest na licencji MIT, a Agent Skills na Apache-2.0, podczas gdy każdy zbiór danych ma własną etykietę dostępu — Open, Open + Gated lub Gated — a treści Gated nie są objęte otwartymi licencjami, na które powołuje się repozytorium, więc sprawdź katalog zbiorów danych, zanim założysz prawa do ponownego użycia. Treść promptów Evaluators jest na CC BY 4.0, ale wykorzystywane przez nie anotowane korpusy CLEAR i PERSUADE 2.0 są na CC BY-NC-SA 4.0. Platforma i stojące za nią zbiory danych wymagają konta.

## Powiązane pojęcia

- [[curriculum-design]] — graf istnieje, by dopasowywać wygenerowane treści do standardów i programów nauczania
- [[open-source]] — kod MIT i Apache-2.0 z licencjonowaniem danych per zbiór
- [[educational-nlp]] — ewaluatory to warstwa pomiaru tekstu nad danymi wyjściowymi LLM
- [[agentic-ai]] — umiejętności, które pakują przepływ pracy do wykonania przez model
- [[edtech-platform]] — Curriculum Sync wczytuje programy nauczania do systemu zarządzania uczeniem się
- [[llm]] — cel oceny i odbiorca umiejętności
