---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Asystent nauczania działający lokalnie, który zamienia własne materiały programowe w edytowalne szkice lekcji, materiały dla studentów i slajdy, z użyciem wybranego modelu."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**Claw-ED** to asystent nauczania działający w pierwszej kolejności lokalnie, który szkicuje lekcje na podstawie własnych materiałów programowych. Nauczyciel importuje swoje źródła, prosi o lekcję i dostaje edytowalne szkice wraz z materiałami dla studentów i slajdami, generowane modelem, który wybierze, a nie jednym ustalonym dostawcą.

## Co można z nim zrobić

Przepływ pracy prowadzi od importu przez szkic i przegląd do eksportu, a szkice są traktowane jako punkty wyjścia do edycji przez nauczyciela, nie jako gotowe materiały. Zadania lekcji są kolejkowane i wznawialne, więc długie generowanie, które się nie powiedzie, można wznowić zamiast zaczynać od nowa, a wytworzone artefakty można pobrać. Projekt udostępnia też swoje narzędzia [[agentic-ai|agentowi]] przez serwer MCP i potrafi łączyć się z Google Drive, więc szkoła może wpiąć go w istniejące przechowywanie i planowanie.

Projekt jest celowo niezależny od modelu. Dokumentuje obok siebie lokalne modele Ollama, tanie trasy OpenRouter i opcje hostowane, a jego przewodnik po modelach jest datowany, co jasno pokazuje, że rekomendacje są punktami wyjścia opartymi na katalogu, a nie ocenami jakości wystawionymi przez nauczycieli.

## Uwagi i zastrzeżenia

Oprogramowanie jest bezpłatne i [[open-source|otwartoźródłowe]] na licencji MIT w zakresie własnego kodu, choć komponenty zewnętrzne zachowują własne warunki, a uruchomienie oznacza opłacenie własnego wnioskowania modelu, jeśli używa się modelu hostowanego. Projekt określa się jako beta recenzowana przez nauczycieli i mówi wprost w README, że przejście jego CI nie ustala jakości nauczania na żywych modelach — i tak właśnie należy czytać zielony zestaw testów w tej dziedzinie: weryfikuje oprogramowanie, a nie [[pedagogy|pedagogikę]]. Projekt utrzymuje MacxLabs i przyjmuje przykładowe lekcje sprawdzone przez nauczycieli jako wkład.

## Powiązane pojęcia

[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
