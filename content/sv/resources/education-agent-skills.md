---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Ett bibliotek med 165 evidensgrundade agentskills som täcker pedagogik, lärvetenskap, läroplan och bedömning, paketerade för Claude, Codex och Hermes."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**Education Agent Skills** är ett bibliotek med 165 agentskills för lärare, skolledare och personer som bygger utbildningsverktyg. Skillarna är grupperade i tjugo domäner som spänner över pedagogik, lärvetenskap, [[curriculum-design|läroplan]], bedömning och regenerering, och var och en är skriven för att laddas av en [[agentic-ai|agent]] snarare än läsas som ett dokument.

## Vad du kan göra med det

Skillarna installeras i Claude Code, Codex och Hermes, antingen som ett plugin eller genom att kopiera mapparna, så samma bibliotek fungerar på flera agentytor. En hostad MCP-server exponerar samlingen som verktyg för agenter som inte kan installera skills lokalt, och förrådet levererar både ett register och ett färdigbyggt paket så att servern kan betjäna samlingen utan att läsa de enskilda filerna vid driftsättning.

Projektets särskiljande anspråk är dess förankring: skillarna citerar den evidens de vilar på, och förrådets egen historik visar att disciplinen upprätthålls snarare än påstås, inklusive en sammanslagen rättelse som tog bort en obelagd tillskrivning och korrigerade beskrivningen av en prövad skyddsåtgärd i en citerad studie.

## Anteckningar och förbehåll

De pedagogiska skillarna, dokumentationen och läroplansmaterialet är licensierade under CC BY-SA 4.0, så återanvändning och anpassning är öppen medan bearbetningar måste bära samma licens. Två operativa detaljer spelar roll om du driftsätter det. MCP-slutpunkten kräver tokens i stället för att vara öppen för alla, och eftersom servern betjänar en incheckad ögonblicksbild snarare än SKILL.md-filerna kommer en skill du lägger till utan att bygga om och checka in paketet inte att synas på den live-servern ens efter en ny driftsättning. Biblioteket är byggt av Gareth Manning, lärare och läroplansdesigner, och licensvillkoren gäller det pedagogiska innehållet specifikt.

## Anslutna begrepp

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]
