---
title: "Intelligente leerboeken bouwen"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCreary's opensource-gids voor het bouwen van intelligente leerboeken: online leerboeken met zoeken, navigatie, woordenlijsten, quizzen, conceptgrafen en ingebouwde simulaties, met MkDocs Material en generatieve AI."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking, misconceptions]
pedagogy: [active-learning, constructivist, self-directed-learning]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

De site **Intelligent Textbooks** is de stapsgewijze gids van Dan McCreary voor het bouwen van *intelligente leerboeken* — online leerboeken die verder gaan dan statische pdf's door zoeken, sitenavigatie, een woordenlijst van termen, een inhoudsopgave, quizbeheer, gerenderde formules, previews voor sociale media, linkcontrole en een eenvoudig te visualiseren **conceptgraaf** toe te voegen die alle concepten in een cursus en hun afhankelijkheden toont. De gids betoogt dat veel cursussen vandaag baat hebben bij hoogwaardige online leerboeken met deze kenmerken, en laat zien hoe u ze bouwt met het buildsysteem [MkDocs](http://mkdocs.com/) in combinatie met het Material-thema en generatieve AI om de inhoud te maken en te onderhouden.

De bepalende zet is dat het leerboek *in Markdown wordt geschreven en door AI wordt gegenereerd*, een concrete toepassing van het patroon van [[vibe-coding|AI-ondersteund schrijven]] op [[curriculum-design|cursusinhoud]]: in plaats van een grote site met de hand te onderhouden, beschrijft u de cursus en laat u generatieve AI de pagina's produceren en onderhouden, terwijl de toolchain navigatie, zoeken en de conceptgraaf afhandelt. Een bijbehorende [Claude Code Skills](https://dmccreary.github.io/ibook-skills/)-bibliotheek beweert meer dan 90% van de taken te automatiseren die nodig zijn om een leerboek van niveau 2 uit een cursusbeschrijving te bouwen.

## Een bijbehorende bron: MicroSims

De natuurlijke metgezel van deze gids is McCreary's **MicroSims**-bibliotheek op <https://dmccreary.github.io/microsims/> (bron: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), die de interactieve simulaties levert die een intelligent leerboek insluit. Een *MicroSim* (micro-simulatie) is een eenvoudige interactieve simulatie die met AI wordt gegenereerd om docenten te helpen een concept uit te leggen, en die kan worden ingesloten in een intelligent leerboek of elke site die een `iframe` accepteert. MicroSims vallen om drie redenen op: **AI-ondersteunde generatie** (gestandaardiseerde ontwerppatronen zetten een beschrijving van een simulatie in natuurlijke taal om in een deelbaar artefact), **universele insluiting** (één HTML-`iframe`-element zet er een op elke pagina) en **transparante, aanpasbare code** (geen black box — één klik opent de sim in een webeditor, en een Creative Commons-licentie laat de meeste docenten ze zonder licentiekosten gebruiken). De term werd in 2023 bedacht door Valerie Lockhart nadat zij ontdekte dat docenten en studenten simulaties konden bouwen met de p5.js JavaScript-bibliotheek met weinig of geen training.

Het project publiceert ook een JSON Schema voor MicroSim-metadata, zodat AI-hulpmiddelen doorzoekbare beschrijvingen kunnen genereren, met een gefacetteerd MicroSim-register op de planning. Een onderzoeksartikel dat het kader beschrijft — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — staat op arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Voorbeeldsimulaties zijn onder meer Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula en een grafiek van aandelenrendementen, elk live op de site.

## Voor wie het is

Docenten en onderwijsontwerpers die een cursusleerboek willen bouwen of onderhouden, vooral in het hoger onderwijs en beroepsopleidingen, plus onderwijsontwikkelaars en iedereen die generatieve AI gebruikt om onderwijsinhoud te schrijven. Het past bij docenten die vertrouwd zijn met een Markdown-en-Git-werkstroom (of bereid zijn die te leren) en die willen dat de AI de site-infrastructuur afhandelt — zoeken, navigatie, conceptgraaf — zodat zij zich op de didactiek kunnen richten.

## Opmerkingen en kanttekeningen

Dit is een gids en toolchain uit de praktijk, geen peerreviewde studie — hij presenteert een werkstroom en zijn eigen onderwijskundige onderbouwing ("intelligente leerboeken leiden studenten door concepten op hun zoektocht naar kennis") in plaats van bewijs van leeruitkomsten. Het MicroSim-onderzoeksartikel komt het dichtst bij empirische onderbouwing, en het is zelf gepubliceerd op arXiv. Beide projecten zijn opensource (de intelligent-textbooks-repo meldt een MIT-licentie en 38 sterren; MicroSims meldt een Creative Commons-licentie en 13 sterren) en worden actief onderhouden. Conceptgrafen en een woordenlijst-eerst-structuur zijn echt nuttig voor vindbaarheid, maar de gids veronderstelt een tamelijk technische werkstroom — MkDocs, Git en generatieve-AI-tooling — wat voor sommige docenten een drempel kan zijn. Op het moment van opname staat het register voor MicroSims nog alleen op de planning, dus het vinden van een specifieke bestaande simulatie leunt op het zoeken en navigeren van de site zelf.

## Gerelateerde concepten

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
