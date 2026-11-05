---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Otwarta infrastruktura AI od inicjatywy edukacyjnej Marka Zuckerberga i Priscilli Chan: graf wiedzy o standardach, programach nauczania i danych z nauki o uczeniu się, ewaluatory do oceny danych wyjściowych LLM oraz niezależne od modelu umiejętności agentowe dla przepływów pracy nauczyciela."
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**Learning Commons** to inicjatywa edukacyjna Marka Zuckerberga i Priscilli Chan, uruchomiona w 2025 roku, aby przenieść prace Chan Zuckerberg Initiative nad nauką o uczeniu się do infrastruktury, na której faktycznie budowane są produkty edtech. Jej argument jest infrastrukturalny, a nie pedagogiczny: badania istnieją, standardy akademickie istnieją i istnieją wysokiej jakości programy nauczania, ale tkwią w odrębnych systemach, więc deweloperzy budują na tym, do czego najłatwiej dotrzeć. Organizacja publikuje trzy otwarte narzędzia na GitHubie — Knowledge Graph, zestaw Evaluators oraz [[agentic-ai|Agent Skills]] — i prowadzi platformę, która dodaje Curriculum Sync do wczytywania programów nauczania do [[edtech-platform|systemu zarządzania uczeniem się]].

## Co możesz z nim zrobić

**Knowledge Graph** modeluje standardy akademickie, programy nauczania i badania nad nauką o uczeniu się jako encje i relacje w ramach jednego wspólnego schematu, dzięki czemu narzędzie może dopasować wygenerowane treści do standardu bez budowania własnego potoku danych. **Evaluators** mierzą atrybuty [[llm|danych wyjściowych LLM]] przez pryzmat nauki o uczeniu się — złożoność tekstu, [[feedback]], zgodność ze standardami akademickimi i trwałe umiejętności — i są dostarczane z zestawami SDK dla Pythona i TypeScriptu, opublikowanymi w npm i PyPI, do oceniania wygenerowanych treści lub porównywania kandydujących modeli. **Agent Skills** pakują instrukcje, odniesienia i zabezpieczenia dla typowych przepływów pracy nauczyciela w otwartym, niezależnym od modelu formacie: sprawdzenie zrozumienia, wielopoziomowe różnicowanie lekcji, plany lekcji zgodne ze standardami i przygotowanie lekcji. W praktyce to graf czyni pozostałe dwa wiarygodnymi: dopasowanie treści jest tezą, a graf jest odniesieniem, wobec którego się ją sprawdza.

## Dla kogo

Deweloperzy budujący funkcje AI w produktach [[curriculum-design|programowych]] i oceniających oraz zespoły programowe lub standardów, które dostarczają dane, do których te produkty są dopasowywane. Nauczyciele mogą używać umiejętności agentowych samodzielnie, ale rama samego repozytorium to infrastruktura dla osób dostarczających narzędzia.

## Uwagi i zastrzeżenia

Otwartość w [[open-source|kodzie źródłowym]] nie czyni danych otwartymi. Kod Knowledge Graph jest na licencji MIT, a każdy zbiór danych ma własną etykietę dostępu — Open, Open + Gated lub Gated — a treści Gated są wyraźnie wyłączone z otwartych licencji, na które powołuje się repozytorium, więc sprawdź katalog zbiorów danych, zanim założysz prawa do ponownego użycia. Kod Evaluators jest na licencji MIT, a jego treść promptów na CC BY 4.0, ale wykorzystywane przez niego anotowane korpusy CLEAR i PERSUADE 2.0 są na CC BY-NC-SA 4.0. Platforma i stojące za nią zbiory danych wymagają konta. Aktywność repozytorium odczytana 2026-11-04: 167 gwiazdek dla Knowledge Graph, 88 dla Evaluators, 41 dla Agent Skills. Inicjatywa jest finansowana przez CZI, a jej ujęcie problemu jest ujęciem fundatora.

## Powiązane pojęcia

- [[curriculum-design]] — graf istnieje, by dopasowywać wygenerowane treści do standardów i programów nauczania
- [[open-source]] — kod MIT i Apache-2.0 z licencjonowaniem danych per zbiór
- [[educational-nlp]] — ewaluatory to warstwa pomiaru tekstu nad danymi wyjściowymi LLM
- [[agentic-ai]] — umiejętności, które pakują przepływ pracy do wykonania przez model
- [[edtech-platform]] — Curriculum Sync wczytuje programy nauczania do systemu zarządzania uczeniem się
- [[llm]] — cel oceny i odbiorca umiejętności
