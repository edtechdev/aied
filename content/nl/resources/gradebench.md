---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Een openbaar leaderboard waarop frontiermodellen echte handgeschreven STEM-antwoorden van universiteiten beoordelen aan de hand van de rubricitems die de docent heeft geselecteerd."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
contributors: [editor]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

GradeBench stelt een gerichte, nuttige vraag over [[automated-assessment|geautomatiseerde beoordeling]]: als een student een handgeschreven antwoord geeft, de docent een rubric heeft, er een referentieoplossing is en de docent bepaalde rubricitems heeft geselecteerd, selecteert een frontiermodel dan dezelfde items? De gouden labels zijn echte rubricselecties van docenten en onderwijsassistenten uit tentamens en quizzes, niet opnieuw beoordeelde modeluitvoer.

## Wat u ermee kunt doen

Lees het leaderboard voordat u de nauwkeurigheidsclaim van een leverancier van beoordelingssoftware vertrouwt, en lees de taakopbouw voordat u het leaderboard vertrouwt. De [[benchmark]] omvat 464 taken uit 125 vragen, verspreid over 45 [[higher-ed|universitaire]] vakken aan meer dan tien instellingen, beperkt tot open tentamen- en quizvragen die een professor of onderwijsassistent regel voor regel heeft beoordeeld, en met de nadruk op deelpunten — taken met volledige punten en taken met nul punten zijn elk gemaximeerd op 5%, omdat modellen die makkelijk vinden.

Het huidige leaderboard blijft ruim onder de menselijke overeenstemming: het beste model haalt 57.3% exacte rubricovereenkomst, en de site zet nauwkeurigheid af tegen de kosten per 1,000 antwoorden, waarbij een model dat 0.8 punten achterligt ongeveer een zevende zo veel kost. Die kostenas is het praktisch nuttige deel, omdat beoordelen een kwestie van grote aantallen is.

Voor een tweede, onafhankelijk gebouwd instrument, zie de [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) van de Learning Design Alliance, die is verpakt als een open repository in plaats van een gehost leaderboard en wordt samengevat in [[porcaro-ai-grading-benchmark-2026|het onderzoek van Porcaro]].

## Voor wie het is

Docenten die beslissen of ze een beoordelingstool cijfers ongecontroleerd laten vrijgeven, beoordelingsprofessionals die inkoopvereisten opstellen, en onderzoekers die een doel op rubricniveau nodig hebben in plaats van een correlatie met essaybeoordeling.

## Opmerkingen en kanttekeningen

GradeBench wordt uitgegeven door Pensive, een commercieel AI-beoordelingsplatform, dus de benchmark en het product delen een eigenaar; de taakopbouw is gedocumenteerd en verdedigbaar, maar beschouw de framing als die van de leverancier. Het bestrijkt STEM-tentamens met rubrics van minstens vier items, waardoor essays, korte antwoorden en discussieberichten worden uitgesloten — de formats waarin het meeste beoordelingswerk in de [[humanities-education|geesteswetenschappen]] gebeurt. Exacte rubricovereenkomst is een strikte maatstaf: twee beoordelaars kunnen het oneens zijn over een item en allebei gelijk hebben over de student. De scores beschrijven modelversies die beschikbaar waren in november 2026 en zullen verschuiven.

## Gerelateerde concepten

- [[automated-assessment]] — de praktijk die de benchmark meet
- [[assessment-validity]] — het criterium waarvoor een leaderboardscore een proxy is
- [[benchmark]] — de bredere klasse instrumenten waartoe dit behoort
