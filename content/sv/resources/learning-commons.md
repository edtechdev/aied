---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Öppen AI-infrastruktur för utbildningsprodukter: en kunskapsgraf över standarder och läroplaner, evaluatorer för att poängsätta LLM-utdata, modellagnostiska agentfärdigheter för lärararbetsflöden och Curriculum Sync för att ladda in läroplaner i ett lärhanteringssystem."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**Learning Commons** publicerar tre öppna verktyg för att bygga AI-funktioner ovanpå verkligt läroplansinnehåll – en **[[knowledge-graph|Knowledge Graph]]** över akademiska standarder, läroplaner och inlärningsvetenskaplig forskning, ett bibliotek med **Evaluators** för att bedöma genererad text och modellagnostiska **[[agentic-ai|Agent Skills]]** för vanliga lärararbetsflöden – och driver en plattform som lägger till Curriculum Sync för att ladda in läroplaner i ett [[edtech-platform|lärhanteringssystem]].

## Vad du kan göra med den

**Anpassa genererat innehåll till en standard.** Knowledge Graph modellerar standarder, [[curriculum-design|läroplaner]] och forskning som entiteter och relationer under ett gemensamt schema. En produkt kan slå upp den standard som en post ska rikta sig mot, följa förkunskapsrelationer eller förankra en tutors innehåll i den läroplan den ska undervisa, utan att bygga och underhålla sin egen datapipeline.

**Poängsätt genererad utdata innan eleverna ser den.** **Evaluators** mäter egenskaper hos [[llm|LLM-utdata]] – textkomplexitet, [[feedback]], standardanpassning och varaktiga färdigheter – och levereras som Python- och TypeScript-SDK:er på npm och PyPI. I praktiken fungerar de som en regressionskontroll när en prompt eller modell ändras, som en jämförelse mellan kandidatmodeller eller som ett filter på genererade poster och förklaringar.

**Paketera ett lärararbetsflöde.** **Agent Skills** samlar instruktioner, referenser och skyddsräcken i ett öppet, modellagnostiskt format: en förståelsekontroll, nivåindelad lektionsdifferentiering, en standardanpassad lektionsplan och lektionsförberedelse. De kan släppas in i ett agentramverk eller läsas som färdiga mallar för hur mycket struktur ett tillförlitligt klassrumsarbetsflöde behöver.

**Flytta en läroplan till ett lärhanteringssystem.** Curriculum Sync är plattformssteget som gör en standardkarta till något en kurs faktiskt kan använda i LMS:et.

## Vem den är för

Utvecklare som bygger AI-funktioner i läroplane- och [[assessment|bedömningsprodukter]], och de läroplan- eller standardteam som levererar de data produkterna anpassas till. [[teacher-role|Lärare]] kan använda Agent Skills på egen hand, men repots egen inramning är infrastruktur för dem som levererar verktyg.

## Anteckningar och förbehåll

Att vara [[open-source|öppen källkod]] gör inte data öppna. Koden för Knowledge Graph och Evaluators är MIT och Agent Skills är Apache-2.0, medan varje dataset bär sin egen åtkomstetikett – Open, Open + Gated eller Gated – och Gated-innehåll täcks inte av de öppna licenser som repot hänvisar till, så kontrollera datasetkatalogen innan du antar återanvändningsrättigheter. Promptinnehållet i Evaluators är CC BY 4.0, men de annoterade korpusarna CLEAR och PERSUADE 2.0 som den använder är CC BY-NC-SA 4.0. Plattformen och datamängderna bakom den kräver ett konto.

## Anslutna begrepp

- [[curriculum-design]] — grafen finns för att anpassa genererat innehåll till standarder och läroplaner
- [[open-source]] — MIT- och Apache-2.0-kod med datalicensiering per dataset
- [[educational-nlp]] — evaluatorerna är ett textmätningslager över LLM-utdata
- [[agentic-ai]] — färdigheter som paketerar ett arbetsflöde för en modell att utföra
- [[edtech-platform]] — Curriculum Sync laddar läroplaner i ett lärhanteringssystem
- [[llm]] — målet för utvärderingen och konsumenten av färdigheterna
