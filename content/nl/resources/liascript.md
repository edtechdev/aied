---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Een open Markdown-dialect dat een plat tekstbestand in de browser in een interactieve cursus verandert, met quizzen en uitvoerbare code, plus een multi-agent-assistent om cursussen mee te bouwen."
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
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**LiaScript** is een uitgebreid Markdown-dialect plus een interpreter ervoor. Eén plat tekstbestand wordt een interactieve cursus: hetzelfde document kan als verhaal worden gelezen, als slides worden afgespeeld, of als cursus worden doorgewerkt, allemaal in de browser. Er hoeft niets te worden geïnstalleerd om er een te schrijven of te lezen.

## Wat u ermee kunt doen

Quizzen komen in de vormen die een docent verwacht, waaronder meerkeuze, matrixvragen, tekstinvoer, dropdowns en gatenteksten, direct in Markdown geschreven. Codeblokken kunnen bewerkbaar en uitvoerbaar worden gemaakt voor [[cs-education|programmeer]]tutorials, en een macrosysteem verpakt JavaScript-bibliotheken in herbruikbare blokken zodat interactieve diagrammen geen code van elke auteur vereisen. Een cursus wordt gehost waar de auteur al tekst bewaart, zonder dienst waaraan u vastzit, en alles draait client-side, zodat een geladen cursus offline werkt. De LiaScript Exporter verpakt er een als SCORM voor Moodle, ILIAS en andere [[edtech-platform|leermanagementsystemen]].

## De onderwijsagent voor het bouwen van cursussen

Het project publiceert ook een **[onderwijsagent](https://github.com/LiaScript/teaching-agent)** voor het schrijven van LiaScript-cursussen, onder de Boost Software License 1.0. Vier agenten voor onderwijs, visueel ontwerp, beoordeling door lerenden en publicatie werken rond één projectbestand dat de cursustoestand bevat, met een define-first-werkstroom: doelen, doelgroep en didactiek worden vastgesteld voordat er materiaal wordt geschreven, en validatiepoorten volgen. Een schets kan worden beoordeeld vanuit een benoemde persona van een lerende om [[cognitive-offloading|cognitieve belasting]] en veronderstelde voorkennis te controleren. De agent is editor-agnostisch en genereert configuraties voor Claude Code, Copilot, Codex, Cursor of een webchat vanuit één specificatie, en de repository dient tegelijk als uitgewerkt voorbeeld, met een cursus van zes eenheden over de EU NIS2-richtlijn en een document dat beschrijft hoe die is gemaakt.

## Opmerkingen en kanttekeningen

LiaScript is gratis, zonder betaalde laag en zonder accountvereiste, en wordt in de openheid ontwikkeld onder BSD-3-Clause, zodat instellingen het zelf kunnen hosten en aanpassen. De functie Live Classroom verdient een blik voordat u er op schaal op vertrouwt, omdat realtime synchronisatie een gedeelde dienst gebruikt in plaats van puur lokale rendering. De onderwijsagent is jong en weinig gebruikt, dus behandel hem als een werkend prototype en niet als een ondersteund product.

## Gerelateerde concepten

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
