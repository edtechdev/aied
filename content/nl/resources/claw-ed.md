---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Een local-first AI-assistent voor docenten die uw eigen curriculum omzet in bewerkbare lesontwerpen, leerlingenmateriaal en slides, met een model dat u zelf kiest."
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
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**Claw-ED** is een local-first onderwijsassistent die lessen ontwerpt op basis van uw eigen curriculummateriaal. Een docent importeert de bronnen, vraagt om een les, en krijgt bewerkbare ontwerpen plus materiaal voor studenten en slides, gegenereerd met het model dat de docent kiest in plaats van met één vaste leverancier.

## Wat u ermee kunt doen

De werkstroom loopt van importeren via ontwerpen en nakijken naar exporteren, en ontwerpen worden behandeld als uitgangspunten die een docent bewerkt, niet als kant-en-klare hand-outs. Lessentaken staan in een wachtrij en zijn herstelbaar, zodat een lange generatie die mislukt kan worden hervat in plaats van opnieuw gestart, en gegenereerde artefacten kunnen worden gedownload. Het stelt zijn hulpmiddelen ook beschikbaar aan een [[agentic-ai|agent]] via een MCP-server en kan verbinding maken met Google Drive, zodat een school het kan aansluiten op bestaande opslag en planning.

Het project is bewust model-agnostisch. Het documenteert lokale Ollama-modellen, budgetroutes via OpenRouter en gehoste opties naast elkaar, en de modelgids is gedateerd, wat duidelijk maakt dat de aanbevelingen catalogusgebaseerde uitgangspunten zijn en geen door docenten beoordeelde kwaliteitsoordelen.

## Opmerkingen en kanttekeningen

De software is gratis en [[open-source|open source]] onder de MIT-licentie voor de oorspronkelijke code, al houden componenten van derden hun eigen voorwaarden, en het draaien betekent betalen voor uw eigen modelinferentie als u een gehost model gebruikt. Het project noemt zichzelf een door docenten nagekeken bèta en zegt ronduit in zijn README dat het slagen van de CI de onderwijskwaliteit over live modellen niet aantoont; dat is de juiste manier om naar een groene testsuite in dit veld te kijken: die verifieert de software, niet de [[pedagogy]]. Het wordt onderhouden door MacxLabs en accepteert door docenten nagekeken voorbeeldlessen als bijdragen.

## Gerelateerde concepten
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
