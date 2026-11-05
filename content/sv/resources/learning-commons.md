---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Öppen AI-infrastruktur från Mark Zuckerbergs och Priscilla Chans utbildningsinitiativ: en kunskapsgraf över standarder, läroplaner och inlärningsvetenskapliga data, evaluatorer för att bedöma LLM-utdata och modellagnostiska agentfärdigheter för lärararbetsflöden."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**Learning Commons** är Mark Zuckerbergs och Priscilla Chans utbildningsinitiativ, lanserat 2025 för att föra Chan Zuckerberg Initiatives arbete med inlärningsvetenskap in i den infrastruktur som edtech-produkter faktiskt byggs på. Dess argument är infrastrukturellt snarare än pedagogiskt: forskning finns, akademiska standarder finns och högkvalitativa läroplaner finns, men de ligger i separata system, så utvecklare bygger på det som är enklast att nå. Organisationen publicerar tre öppna verktyg på GitHub – en Knowledge Graph, en uppsättning Evaluators och [[agentic-ai|Agent Skills]] – och driver en plattform som lägger till Curriculum Sync för att ladda in läroplaner i ett [[edtech-platform|lärhanteringssystem]].

## Vad du kan göra med den

**Knowledge Graph** modellerar akademiska standarder, läroplaner och inlärningsvetenskaplig forskning som entiteter och relationer under ett gemensamt schema, så att ett verktyg kan anpassa genererat innehåll till en standard utan att bygga sin egen datapipeline. **Evaluators** mäter egenskaper hos [[llm|LLM-utdata]] genom en inlärningsvetenskaplig lins – textkomplexitet, [[feedback]], anpassning till akademiska standarder och varaktiga färdigheter – och levereras med Python- och TypeScript-SDK:er, publicerade på npm och PyPI, för att poängsätta genererat innehåll eller jämföra kandidatmodeller. **Agent Skills** paketerar instruktioner, referenser och skyddsräcken för vanliga lärararbetsflöden i ett öppet, modellagnostiskt format: en förståelsekontroll, nivåindelad lektionsdifferentiering, standardanpassade lektionsplaner och lektionsförberedelse. I praktiken är grafen det som gör de andra två trovärdiga: innehållsanpassning är påståendet, och grafen är referensen det kontrolleras mot.

## Vem den är för

Utvecklare som bygger AI-funktioner i [[curriculum-design|läroplan]]- och bedömningsprodukter, och de läroplan- eller standardteam som levererar de data produkterna anpassas till. Lärare kan använda agentfärdigheterna på egen hand, men repots egen inramning är infrastruktur för dem som levererar verktyg.

## Anteckningar och förbehåll

Att vara öppen i [[open-source|källkod]] gör inte data öppna. Koden för Knowledge Graph är MIT, medan varje dataset bär sin egen åtkomstetikett – Open, Open + Gated eller Gated – och Gated-innehåll täcks uttryckligen inte av de öppna licenser som repot hänvisar till, så kontrollera datasetkatalogen innan du antar återanvändningsrättigheter. Evaluator-koden är MIT och dess promptinnehåll CC BY 4.0, men de annoterade korpusarna CLEAR och PERSUADE 2.0 som den använder är CC BY-NC-SA 4.0. Plattformen och datamängderna bakom den kräver ett konto. Repoaktivitet enligt avläsning 2026-11-04: 167 stjärnor för Knowledge Graph, 88 för Evaluators, 41 för Agent Skills. Initiativet finansieras av CZI, och dess inramning av problemet är finansiärens egen.

## Anslutna begrepp

- [[curriculum-design]] — grafen finns för att anpassa genererat innehåll till standarder och läroplaner
- [[open-source]] — MIT- och Apache-2.0-kod med datalicensiering per dataset
- [[educational-nlp]] — evaluatorerna är ett textmätningslager över LLM-utdata
- [[agentic-ai]] — färdigheter som paketerar ett arbetsflöde för en modell att utföra
- [[edtech-platform]] — Curriculum Sync laddar läroplaner i ett lärhanteringssystem
- [[llm]] — målet för utvärderingen och konsumenten av färdigheterna
