---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Een open, platte-tekstformaat voor blokgebaseerde eLearning-lessen, plus een agentskill die lessen, toetsen en complete cursusbundels in dat formaat schrijft."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**LESSON.md** is een open formaat voor blokgebaseerde eLearning-inhoud: een Markdown-bestand met YAML-frontmatter en `:::`-richtlijnen voor tekst, afbeeldingen en kenniscontroles, leesbaar voor een mens en parseerbaar voor elk hulpmiddel. Het bestaat omdat cursusinhoud meestal opgesloten zit in één authoringtool, en omdat [[llm|grote taalmodellen]] alleen kunnen helpen met lessen die ze werkelijk kunnen lezen.

## Wat u ermee kunt doen
Een les schrijven in elke teksteditor en importeren in elk hulpmiddel dat het formaat ondersteunt, zonder kopiëren en herformatteren. Interactieve onderdelen — meerkeuze-kenniscontroles met pogingslimieten en feedback per antwoord — worden uitgedrukt als eenvoudige eigenschappen in plaats van via een GUI. Een bijbehorend `ASSESSMENT.md` in de hoofdmap van een bundel wordt de gescoorde [[assessment]] van de cursus. Het project levert ook een `lesson-md`-skill die Claude, Codex of een andere [[agentic-ai|agent]] het formaat leert, zodat een cursus in gewone taal beschrijven lessen, toetsen en een volledige bundel oplevert.

## Voor wie het is
Onderwijsontwerpers en cursusmakers die willen dat hun inhoud een toolwissel overleeft, eLearning-leveranciers die een import- en exportformaat willen dat hun gebruikers al begrijpen, en iedereen die AI-ondersteund schrijven bouwt op een leesbaar formaat. Bijdragers zijn onder meer Dan Bashaw van LXD Integral, en het formaat heeft een openbare changelog tot v1.8.

## Gerelateerde concepten

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
