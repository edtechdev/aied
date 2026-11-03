---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Otwartoźródłowy zestaw jedenastu umiejętności Claude Code, które audytują kurs wobec bazy dowodów z projektowania nauczania i oznaczają każdą rekomendację poziomem dowodów."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**idstack** to otwartoźródłowy zbiór jedenastu umiejętności do [[learning-design|projektowania nauczania]] opartego na dowodach, rozprowadzany jako wtyczka Claude Code z towarzyszącym rozszerzeniem Chrome w panelu bocznym. Zamiast szkicować kurs, umiejętności go audytują: klasyfikują cele według zrewidowanej taksonomii Blooma, sprawdzają zgodność konstruktywną między celami, aktywnościami i ocenianiem, oznaczają problemy z obciążeniem poznawczym i przeglądają dostępność wobec WCAG 2.1 AA oraz Universal Design for Learning. Każda rekomendacja ma poziom dowodów, od T1 dla metaanaliz i badań z randomizacją po T5 dla opinii ekspertów. Projekt podaje, że jego cytowania opierają się na 108 recenzowanych badaniach z jedenastu dziedzin badawczych; ta liczba jest twierdzeniem samego projektu, a bibliografia jest opublikowana w Markdownie, więc recenzent może ją sprawdzić.

Kursy wchodzą przez połączenie z API Canvas, plik IMS Common Cartridge, pakiet SCORM, eksport PDF z narzędzia autorskiego albo wklejone dokumenty. Wspólny manifest projektu pamięta kurs między sesjami, a umiejętność potokowa łączy etapy projektowe, pomijając ukończoną pracę. Przeglądy raportują wobec ośmiu standardów Quality Matters i ram Community of Inquiry, rozdzielając obecność dydaktyczną, społeczną i poznawczą, a potem szeregują rekomendacje według wagi.

## Co warto wiedzieć przed wdrożeniem

Wtyczka wymaga Claude Code i powłoki bash do instalacji; PowerShell i cmd nie uruchomią skryptu instalacyjnego, a Python 3 jest zalecany do śledzenia trendów ocen. Dane kursu zostają w katalogu projektu na maszynie czytelnika i opuszczają ją tylko przez integrację, którą użytkownik sam wywoła, na przykład zapytanie do API Canvas. Wnioskowanie na żywo w rozszerzeniu Chrome wymaga własnego, bezpłatnego klucza API Google AI Studio, choć tryb symulacji pokazuje je bez klucza. Projekt określa się jako beta w wersji 3.5.1.0 i ostrzega przed zmianami łamiącymi zgodność między wersjami minor, a jest publikowany na koncie savvides na GitHubie, a nie przez nazwanego autora.

## Powiązane pojęcia

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
