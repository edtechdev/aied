---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Een modelleaderboard voor onderwijsbenchmarks gericht op lage- en middeninkomenslanden, met aandacht voor pedagogiek, basisgeletterdheid, SEND, visuele wiskunde en meertalige prestaties, en met kolommen voor prijs en open gewichten."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
contributors: [editor]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Fab AI evalueert modellen op onderwijstaken die ertoe doen waar budgetten, bandbreedte en taaldekking beperkt zijn in de [[global-south|lage- en middeninkomenslanden]] waarvoor de benchmark is gebouwd, en publiceert de resultaten als een sorteerbaar leaderboard in plaats van een paper. De kerntabel scoort een pedagogiekbenchmark naast SEND, visuele wiskunde en visueel redeneren, met aparte tabbladen voor meertalige pedagogiek, basisgeletterdheid en de beoordeling van hardop lezen.

## Wat u ermee kunt doen

Vergelijk ongeveer 300 modellen op pedagogiekscores die momenteel lopen van de lage negentig tot 21%, en sorteer vervolgens op wat een onderwijsministerie daadwerkelijk moet afwegen: prijs per miljoen tokens, aantal parameters, open gewichten en releasedatum. De spreiding aan de onderkant is het nuttige deel. Open modellen onder de 2B zitten tussen 21% en 43% op de pedagogiekbenchmark, terwijl frontiermodellen in de lage negentig zitten, waardoor "kunnen we dit offline draaien op goedkope hardware" een gekwantificeerde afweging wordt in plaats van een gok.

Het tabblad [[multilingual-learning|meertalige]] pedagogiek is de reden om de pagina te bookmarken. De meeste onderwijsbenchmarks zijn alleen Engelstalig, en de vraag of de pedagogiek van een model een vertaling overleeft, is precies de vraag die een ministerie in een meertalig systeem beantwoord moet krijgen. De data zijn downloadbaar als CSV, zodat de vergelijkingen lokaal opnieuw kunnen worden uitgevoerd.

## Voor wie het is

Beleidsmakers en inkoopteams die modellen kiezen voor nationale systemen, onderzoekers die [[digital-divide|de toegangskloof]] in AI-ondersteund onderwijs bestuderen, en ontwikkelaars die een pedagogiekdoel nodig hebben dat geen Engelstalig examen is.

## Opmerkingen en kanttekeningen

Een leaderboard meet modellen op de eigen taken van de benchmark: een hoge pedagogiekscore is bewijs over die items, niet over een klaslokaal. De prijskolom mengt input- en outputtokenprijzen in een verhouding van 3:1, wat een modelleerkeuze is en niet wat een specifieke implementatie zal kosten. De dekking van talen en van lokaal gehoste modellen verschuift naarmate nieuwe modellen verschijnen, en de lage scores voor kleine modellen weerspiegelen deels het taakformaat net zo goed als de capaciteit. De framing van Fab AI gaat expliciet over lage- en middeninkomenslanden, dus de itemset van de benchmark weerspiegelt die context en mag niet worden gelezen als een algemene onderwijsranglijst. Controleer releasedata: verschillende vermeldingen dateren van vóór de huidige modelgeneratie.

## Gerelateerde concepten

- [[benchmark]] — de bredere klasse instrumenten waartoe dit behoort
- [[digital-divide]] — de beperking die de kolommen voor prijs en open gewichten zichtbaar moeten maken
- [[equity-in-ai-education]] — de beleidsvraag waarvoor het leaderboard informatie levert
