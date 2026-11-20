---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Een open-source MCP-server waarmee Claude, Cursor, Codex en andere agents kunnen lezen en handelen in Canvas LMS — tools voor studenten, docenten en onderwijsontwerpers, met afgeschermde schrijfacties en optionele anonimisering van leerlinggegevens."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**Canvas MCP** is een open-source Model Context Protocol-server van Vishal Sachdev die een AI-client verbindt met een Canvas LMS-instantie: de agent kan het komende werk van een student opvragen, de opdrachten en inzendingen van een cursus lezen, een klas berichten of een cursus controleren op toegankelijkheid, allemaal via tools die de server aanbiedt in plaats van via ad hoc screenscraping.

## Wat u ermee kunt doen

De server levert drie families tools. Studietools beantwoorden 'wat deze week moet worden ingeleverd', 'heb ik alles ingeleverd', 'hoeveel quizpogingen heb ik nog' tegen Canvas' eigen `self`-endpoints. Docenttools tonen en maken opdrachten, lezen inzendingen, beoordelen in bulk, versturen gesprekken en halen opdrachtanalyses op. Tools voor onderwijsontwerp dekken kwaliteitscontroles van cursussen en WCAG-toegankelijkheidsscans. In totaal zijn maximaal 128 tools beschikbaar, al registreert het standaardprofiel er minder en verhogen functiegebonden tools het aantal. Bovenop de tools bundelen acht agentskills recepten van meerdere stappen — een weekplanning, een ochtendcontrole van de cursusgezondheid, een beslisboom voor bulkbeoordeling, een pijplijn voor peerreview, een cursusaudit vóór het semester — installeerbaar in meer dan 40 agents via `skills.sh`.

## Voor wie het is

Docenten die willen dat een agent het routinematige lezen en berichten rond een cursus afhandelt, en [[institutional-ai-infrastructure|institutionele teams]] die afwegen wat een agent die met de LMS is verbonden werkelijk kan bereiken. Onderwijsontwerpers krijgen hier het dichtstbijzijnde alternatief voor een geautomatiseerde cursusbeoordeling. Het project is een uitgewerkt voorbeeld van [[agentic-ai|agentieke tooling]] op het niveau van de LMS van één instelling in plaats van een generieke chatbot.

## Opmerkingen en kanttekeningen

De installatie is lokaal: Python 3.11 of nieuwer, een Canvas-API-token en -URL, en een MCP-client, met een dubbelklikbare extensie voor Claude Desktop. De publieke gehoste server is buiten gebruik gesteld, dus een gedeelde uitrol betekent zelf hosten achter de eigen authenticatie van de instelling. Schrijftools zijn afgeschermd — HTTP-servers zijn alleen-lezen tenzij schrijftools uitdrukkelijk zijn toegestaan, verwijderingen vereisen bevestigingstokens, en code-uitvoering draait in een sandbox die bij falen dichtgaat. Privacycontroles zijn opt-in: anonimisering van antwoorden, e-mailmaskering en PII-filtering moeten worden aangezet, en de README benadrukt zorgvuldig dat deze FERPA-verplichtingen kunnen ondersteunen zonder naleving vast te stellen, wat afhangt van de uitrol en de AI-aanbieder. De server heeft geen telemetrie, maar Canvas en de gekozen client houden hun eigen logs bij. Het project is MIT-gelicenseerd, wordt actief ontwikkeld, en de eigen gidsen zijn de autoriteit over actuele toolnamen en configuratie.
