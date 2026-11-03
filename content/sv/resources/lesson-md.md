---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Ett öppet textformat för blockbaserade e-learninglektioner, plus en agentskill som skriver lektioner, bedömningar och hela kursbuntar i formatet."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**LESSON.md** är ett öppet format för blockbaserat e-learninginnehåll: en Markdown-fil med YAML-frontmatter och `:::`-direktiv för text, bilder och kunskapskontroller, läsbar för en människa och tolkningsbar för vilket verktyg som helst. Det finns eftersom kursinnehåll vanligen är inlåst i ett enda författarverktyg, och eftersom [[llm|stora språkmodeller]] bara kan hjälpa till med lektioner de faktiskt kan läsa.

## Vad du kan göra med det
Skriv en lektion i valfri textredigerare och importera den till vilket verktyg som helst som stöder formatet, utan kopiera-klistra in och omformatering. Interaktiva delar – flervalskontroller med begränsat antal försök och återkoppling på svarsnivå – uttrycks som enkla egenskaper i stället för i ett grafiskt gränssnitt. En medföljande `ASSESSMENT.md` i en bunts rot blir kursens poängsatta [[assessment|bedömning]]. Projektet levererar också en `lesson-md`-skill som lär Claude, Codex eller en annan [[agentic-ai|agent]] formatet, så att beskriva en kurs på vanligt språk ger lektioner, bedömningar och en fullständig bunt.

## Vem det är för
Instruktionsdesigners och kurskapare som vill att innehållet ska överleva ett verktygsbyte, e-leverantörer som vill ha ett import- och exportformat deras användare redan förstår, och alla som bygger AI-stött författande ovanpå ett läsbart format. Bidragsgivare inkluderar Dan Bashaw på LXD Integral, och formatet har en offentlig ändringslogg fram till v1.8.

## Anslutna begrepp

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
