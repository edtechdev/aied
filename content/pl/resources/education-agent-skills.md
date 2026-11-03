---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Biblioteka 165 umiejętności agentowych opartych na dowodach, obejmujących pedagogikę, nauki o uczeniu się, program i ocenianie, przygotowana dla Claude, Codex i Hermesa."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
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

**Education Agent Skills** to biblioteka 165 umiejętności agentowych dla nauczycieli, liderów szkół i osób budujących narzędzia edukacyjne. Umiejętności są pogrupowane w dwadzieścia domen obejmujących pedagogikę, nauki o uczeniu się, [[curriculum-design|program nauczania]], ocenianie i regenerację, a każda jest napisana tak, by ładował ją [[agentic-ai|agent]], a nie czytał człowiek jako dokument.

## Co można z nim zrobić

Umiejętności instalują się w Claude Code, Codex i Hermesie, jako wtyczka albo przez skopiowanie katalogów, więc ta sama biblioteka działa na kilku powierzchniach agentowych. Hostowany serwer MCP udostępnia zbiór jako narzędzia dla agentów, które nie mogą instalować umiejętności lokalnie, a repozytorium dostarcza zarówno rejestr, jak i gotowy pakiet, żeby serwer mógł serwować zbiór bez czytania poszczególnych plików w momencie wdrożenia.

Wyróżniającym twierdzeniem projektu jest jego ugruntowanie: umiejętności cytują dowody, na których się opierają, a własna historia repozytorium pokazuje, że ta dyscyplina jest egzekwowana, a nie tylko deklarowana — w tym połączona poprawka, która usunęła niepoparte przypisanie i skorygowała opis przetestowanego zabezpieczenia w cytowanym badaniu.

## Uwagi i zastrzeżenia

Umiejętności edukacyjne, dokumentacja i materiały programowe są objęte licencją CC BY-SA 4.0, więc ponowne użycie i adaptacja są otwarte, ale utwory zależne muszą nosić tę samą licencję. Dwa szczegóły operacyjne mają znaczenie przy wdrożeniu. Hostowany punkt końcowy MCP wymaga tokenów, a nie jest otwarty dla wszystkich, a ponieważ serwer serwuje zatwierdzoną migawkę, a nie pliki SKILL.md, umiejętność dodana bez przebudowania i zatwierdzenia pakietu nie pojawi się na żywym serwerze nawet po ponownym wdrożeniu. Bibliotekę zbudował Gareth Manning, edukator i projektant programów, a warunki licencji dotyczą konkretnie treści edukacyjnych.

## Powiązane pojęcia

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]
