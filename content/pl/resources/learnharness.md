---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Bezpłatna aplikacja desktopowa (AGPL-3.0), w której agenci SI mierzą dotychczasowe rozumienie, planują mapę zależności do celu, uczą krok po kroku i dostrajają ćwiczenia, prowadząc trwały graf wiedzy."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**LearnHarness** to aplikacja desktopowa do uczenia się [[agentic-ai|wspomaganego przez agentów]], która organizuje lekcję wokół [[prior-knowledge|tego, co uczący się już rozumie]], a nie wokół listy tematów. Projekt opisuje cztery ruchy: **mierzenie**, czyli sondowanie pojęć, od których zależy cel, by znaleźć granicę rozumienia; **planowanie**, czyli wyprowadzenie mapy zależności do celu i pokazanie jej jako mapy lekcji; **nauczanie**, czyli pracę po jednym kroku rozumowania w rytmie przewidź–wyjaśnij–sprawdź, żeby niejasności były naprawiane, zanim cokolwiek się na nich oprze; oraz **ćwiczenie**, czyli strumień zadań celowanych w trudności samego uczącego się.

## Co można z nim zrobić

Wyróżniającym wejściem jest pole myślenia: uczący się piszą lub dyktują swoje rozumowanie i niepewność, a nie tylko odpowiadają, co projekt traktuje jako sposób, w jaki agent wyobraża sobie rozumowanie, a nie zapis dobrze/źle. Aplikacja potrafi też badać pytania w tle, generować wyjaśnienia wizualne i budować interaktywne demonstracje.

To, co się kumuluje, to [[knowledge-graph|graf wiedzy]] twierdzeń i łańcuchów rozumowania, powiązany z sesjami źródłowymi i czytany przez późniejszych agentów nauczania i ćwiczenia jako kontekst; notatki można importować. Projekt mówi, że graf przechowuje idee i powiązania, a nie oceny zdolności.

## Dla kogo

Uczący się samodzielnie, którzy pracują nad trudnym materiałem, oraz wykładowcy i deweloperzy, którzy chcą zobaczyć, jak wygląda [[intelligent-tutoring|korepetytor SI]] rodem z agentów, gdy jego prompty i stan można przejrzeć. Projekt jest w TypeScript, uruchamia się ze źródeł, a jego testy są opisane jako deterministyczne, bez wywołań modeli.

## Uwagi i zastrzeżenia

Darmowość obejmuje oprogramowanie, nie wnioskowanie: uczący się przynoszą klucze dostawcy, subskrypcję, lokalny CLI Claude Code albo dowolny punkt końcowy zgodny z OpenAI, i płacą dostawcy bez marży; licznik na żywo szacuje tylko znane koszty API. Zapisy, czaty i klucze zostają na maszynie jako zwykłe pliki, ale projekt ostrzega, że lokalne przechowywanie nie oznacza przetwarzania offline, ponieważ zapytania do modeli, opcjonalne dyktowanie i badanie sieciowe sięgają do usług zewnętrznych. Instalator dla Windows x64 jest niepodpisany, więc Windows ostrzeże. Nie opisano badania skuteczności, więc argument opiera się na deklarowanym uzasadnieniu, a nie na zmierzonych wynikach; w chwili sprawdzania 2 listopada 2026 repozytorium miało około 4 800 gwiazdek.

## Powiązane pojęcia

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
