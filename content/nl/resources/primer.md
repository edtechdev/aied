---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Een opensource-auteursysteem van de Generative AI Labs van Wharton dat een gestructureerd interview met een docent omzet in een uitvoerbare, adaptieve leersimulatie met eigen mentor-, oefen- en feedbackagenten."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Primer is een [[open-source|opensource-systeem]] om een onderwijs-[[simulation|simulatie]] te bouwen door een les aan een AI te beschrijven in plaats van die te programmeren. Het oordeel van de docent bepaalt wat de simulatie onderwijst: een interview haalt naar boven wat de docent over de les en de studenten weet, een ontwerpdocument maakt die kennis controleerbaar, en er wordt niets gebouwd voordat de docent het goedkeurt.

## Wat u ermee kunt doen

Het interview stelt één vraag tegelijk: de les, het niveau en de voorkennis van de studenten, veelvoorkomende misvattingen, de aanpak van de docent en hoe succes wordt beoordeeld. Docenten kunnen spreken of typen en syllabi, lesplannen of rubrics uploaden. Wat terugkomt is een ontwerpdocument over doelen, verloop van het scenario, personages, inzet en adaptatielogica, dat de docent herziet en goedkeurt zoals een lesplan. Vijf agenten bouwen het vervolgens: Intake, Design, Casting Director, Image Generation en Experience Builder, die het resultaat samenstelt voor één student of een hele klas.

Tijdens de uitvoering staan drie agenten tegenover de student. Een mentor activeert voorkennis en brengt misvattingen aan het licht. Een oefenagent speelt een rolspeltegenhanger of een teachback-leerling, waarbij de student een concept uitlegt en de uitleg herziet wanneer er doorgevraagd wordt. Een feedbackagent werkt vanuit het transcript en bespreekt specifieke momenten en hoe het leren buiten het scenario doorwerkt. Elke agent heeft een personage in de simulatiewereld en een onderwijskundige laag die doelen volgt en bewijs verzamelt, en de docent krijgt individuele en geaggregeerde rapporten.

## Voor wie het is

Docenten, onderwijskundig ontwerpers en faculty developers kunnen een les tot in detail beschrijven zonder er code voor te willen schrijven. Onderzoekers die auteurschap met de docent in de lus of [[agentic-ai|multi-agentworkflows]] bestuderen, krijgen een werkend systeem om te inspecteren, en ontwikkelaars kunnen het uitbreiden, omdat de prompts, sjablonen, checklists, orkestratiepatronen en TypeScript-code allemaal opensource zijn.

## Opmerkingen en kanttekeningen

De auteurs noemen Primer een experimenteel prototype, geen getoetst klasproduct. Het is niet als leerinterventie in klaslokalen geëvalueerd en niemand heeft het beoordeeld op FERPA, COPPA, staatsrecht voor studentprivacy of districtsbeleid, dus een instelling die het met studenten gebruikt, draagt die beoordeling. De software heeft een MIT-licentie en is gratis, maar een simulatie draaien vereist modeltoegang, en dat kost geld. Omdat het modelonafhankelijk is en op lokale of open-weightmodellen draait, kan het worden ingezet waar privacyregels strenger zijn. Een whitepaper over de architectuur en prompts is vanaf de projectpagina gelinkt. Bij controle in november 2026 had de repository 98 sterren en 16 forks.

## Gerelateerde concepten

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
