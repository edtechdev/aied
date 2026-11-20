---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Een veldgids voor docenten over het bouwen van een statische onderwijssite met een AI-codeerassistent: drie Markdown-instructiebestanden voor ontwerp, beveiliging en leerlingprivacy, met leesbare gidsen en een downloadbaar pakket."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**The Vibe-Coding Center** is Miguel Guhlins gratis veldgids voor een docent die met een AI-codeerassistent een kleine statische onderwijssite wil [[vibe-coding|vibe-coden]] — een exit ticket, een quiz, een klasportfolio — zonder daarbij een blootgestelde API-sleutel of leerlinggegevens mee te leveren.

## Wat u ermee kunt doen

Drie instructiebestanden dragen de begeleiding: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` en `securevcc.md`. Download ze naar de hoofdmap van een project, vul de projectsjabloon in en vraag de assistent ze alle drie te lezen en toe te passen; de gids zegt uitdrukkelijk dat aanwezigheid geen activering is, dus de bestanden moeten in het verzoek worden genoemd. Leesbare gidsen leggen elk bestand uit, inclusief een doorloop 'Three Essential Checks Before You Share': minder leerlinggegevens verzamelen, een blootgestelde API-sleutel opsporen en het ontwerp van een tool laten passen bij de leertaak. Het complete pakket voegt de site zelf, een promptpakket, een publicatiecontrole en herbouwscripts toe, met een SHA-256-manifest voor de download.

De bijbehorende pagina met [EduSynth Hub-voorbeelden](https://mguhlin.github.io/funquiz/examples.html) toont de resultaten als werkende statische tools in plaats van screenshots: een generator voor exit tickets die een vraag op een gekozen niveau van de SOLO-taxonomie schrijft, een studentenportfolio dat één HTML-bestand op GitHub Pages is, en een doorzoekbare bibliotheek met professionaliseringsmateriaal, allemaal client-side draaiend zonder LMS-login.

## Voor wie het is

Docenten en [[learning-design|onderwijsontwerpers]] in het basis-, voortgezet en hoger onderwijs die kunnen beschrijven welke tool ze willen en bereid zijn te controleren wat de assistent heeft opgeleverd. Het past ook bij een vakgroep die één gedeelde checklist wil voordat iemand een tool voor studenten publiceert, en bij docenten die [[ai-literacy|AI-geletterdheid]] onderwijzen via bouwen in plaats van via kritiek.

## Opmerkingen en kanttekeningen

Het centrum is begeleiding, geen nalevingsproduct: de site doet geen conformiteitsclaim voor zijn eigen WCAG 2.2 AA-doel, beantwoordt 'maakt het gebruik van deze bestanden mijn site conform?' met nee, en zegt dat een technische beoordeling de autorisatie van de school of een juridische toets niet vervangt. De beveiligingsplank wijst naar axe-core, Gitleaks, ZAP en Playwright; dat zijn verwijzingen in plaats van meegeleverde software, en de invasieve ervan zijn bedoeld voor een wegwerpdoel of een uitdrukkelijk geautoriseerd doel. Lezen vereist geen account. Het herbouwen van de HTML-pagina's vereist Python en `markdown-it-py`, wat een bouwafhankelijkheid is en geen bezoekersafhankelijkheid. De repository is MIT-gelicenseerd, terwijl artwork van derden en de gelinkte projecten hun eigen voorwaarden houden, gedocumenteerd in `CREDITS.md`.
