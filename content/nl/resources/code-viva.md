---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Een gratis browsertool die voor elke student in een programmeercursus een schriftelijke, getimede versie van een mondelinge codeverdediging afneemt, met voorgestelde scores en aangehaald bewijs ter goedkeuring door de docent."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Code Viva voert voor elke student in een programmeercursus een schriftelijke, getimede versie van een [[oral-assessment|viva]] uit, ongeveer vijftien tot twintig minuten per student, zonder docent in het lokaal. De tool leest de ingeleverde code en commitgeschiedenis van een student, schrijft vier tot zes vragen over de eigen functies, namen en commits van die student, en geeft elke student een persoonlijke link om vanuit te antwoorden.

## Wat u ermee kunt doen

Inzendingen komen uit een Gradescope-export, een Canvas-downloadzip, een zip met een map per student, of GitHub Classroom met een leestoken. De docent stelt sessieduur, aantal vragen en deadline in, markeert verlengde tijd op 1,25x tot 3x, en leest, bewerkt of vervangt de gegenereerde vragen voordat links worden verstuurd. Vragen gaan over basisgevallen bij recursie, randvoorwaarden, keuzes van datastructuren, ondoorzichtige variabelenamen, schaal en tracing, zinnen uit de opdrachtspecificatie, en commitpatronen zoals één grote commit of een commit laat op de avond. Antwoorden komen terug als een responscode, en het beoordelingsscherm toont elk transcript naast een voorgestelde score van 0 tot 3 met de zinnen waarop die rust, plus een wachtrij met markeringen, geordend naar hoeveel een gesprek gerechtvaardigd is. Resultaten exporteren naar CSV, en elf democursussen laten een lezer de hele lus op verzonnen data uitproberen.

## Voor wie het is

Docenten van programmeercursussen die bewijs willen dat een student de eigen code kan uitleggen, en die liever met een korte lijst studenten praten dan met allemaal; de commitvragen maken het een vorm van [[process-oriented-assessment]].

## Opmerkingen en kanttekeningen

Alles draait in de browser: de cursus staat in lokale opslag met een JSON-export, vragen reizen mee in het deel van een link dat browsers niet naar servers sturen, en antwoorden komen alleen terug als codes die studenten zelf versturen, zodat geen studentgegevens een derde partij bereiken. De vraaggenerator is regelgebaseerd en niet modelgestuurd. Volgens de tool zelf is zijn codelezer heuristisch, dus ongebruikelijke opmaak of macro's kunnen een functie verbergen, en een score kan het kennen van de woordenschat belonen in plaats van het begrijpen van de code; daarom zijn scores voorstellen die een docent goedkeurt en daarom adviseert de tool de inzet laag te houden. Er is geen licentie en geen bronrepository gepubliceerd, en omdat links de vragen meedragen, worden ze een paar kilobyte groot — lang genoeg om in een berichtvak van een leeromgeving te passen.

## Gerelateerde concepten

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
