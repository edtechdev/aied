---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "En lokalförst AI-lärarassistent som förvandlar din egen läroplan till redigerbara lektionsutkast, elevmaterial och bildspel med en modell du väljer."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**Claw-ED** är en lokalförst lärarassistent som skriver lektionsutkast utifrån dina egna läroplansmaterial. En lärare importerar sina källor, ber om en lektion och får redigerbara utkast tillsammans med elevmaterial och bildspel, genererade med vilken modell läraren än väljer i stället för en fast leverantör.

## Vad du kan göra med den

Arbetsflödet löper från import via utkast och granskning till export, och utkasten behandlas som utgångspunkter som läraren redigerar snarare än färdiga kopior. Lektionsjobb köas och kan återställas, så en lång generering som misslyckas kan återupptas i stället för att startas om, och genererade artefakter kan laddas ner. Den exponerar också sina verktyg för en [[agentic-ai|agent]] via en MCP-server och kan ansluta till Google Drive, så en skola kan koppla in den i befintlig lagring och schemaläggning.

Projektet är medvetet modellagnostiskt. Det dokumenterar lokala Ollama-modeller, budgetalternativ via OpenRouter och hostade alternativ sida vid sida, och dess modellguide är daterad, vilket tydligt visar att rekommendationerna är katalogbaserade utgångspunkter snarare än lärares egna kvalitetsbedömningar.

## Anteckningar och förbehåll

Programvaran är gratis och [[open-source|öppen källkod]] under MIT-licensen för sin egen kod, även om tredjepartskomponenter behåller sina egna villkor, och att köra den innebär att betala för sin egen modellinferens om du använder en hostad modell. Projektet kallar sig en lärargranskad beta och säger rakt ut i sin README att godkänd CI inte fastställer undervisningskvalitet över levande modeller, vilket är rätt sätt att läsa en grön testsvit i det här området: den verifierar programvaran, inte [[pedagogy|pedagogiken]]. Den underhålls av MacxLabs och tar emot lärargranskade exempellektioner som bidrag.

## Anslutna begrepp
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
