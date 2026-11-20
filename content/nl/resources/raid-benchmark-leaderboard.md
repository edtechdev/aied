---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Een openbaar leaderboard van AI-tekstdetectoren, gescoord op RAID, een benchmark die is gebouwd om robuustheid te testen tegen modellen, domeinen, decodeerinstellingen en adversariële aanvallen."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
contributors: [editor]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

RAID is de benchmark achter de meeste serieuze claims over [[ai-detection|AI-tekstdetectie]], en het leaderboard is de plek om te controleren of de gepubliceerde nauwkeurigheid van een detector een verandering van model, domein, decodeerinstelling of bewuste aanval overleeft. Vermeldingen worden gescoord op de testset en kunnen worden ingediend door iedereen die het indieningsproces van de repository volgt.

## Wat u ermee kunt doen

Filter op domein — abstracts, boeken, nieuws, poëzie, recepten, Reddit, reviews, wiki — op decodeerstrategie (greedy of sampling), op repetition penalty en op adversariële aanval, waaronder witruimte, homoglyfen, synoniemvervanging, parafrasering, zero-width-spaties en het verwijderen van lidwoorden. Vergelijk vervolgens een detector op verschillende metrics: AUROC, TPR bij een false-positive-rate van 5% en TPR bij 1%.

Die filterset is precies het punt. Een detector die geaggregeerd bijna 1.000 scoort, kan instorten zodra de tekst is geparafraseerd of het bronmodel verandert, en het leaderboard laat u die daling zien voordat een instelling er een [[academic-integrity|wangedrag]]zaak op bouwt. De kolom met 1% false-positives is het belangrijkst in het onderwijs, omdat op institutionele schaal een foutpercentage van 1% honderden ten onrechte beschuldigde studenten betekent.

## Voor wie het is

Onderzoekers die detectiemethoden evalueren, bestuurders die beleid schrijven dat mogelijk naar een detector verwijst, en docenten die een concreet antwoord willen op "kan dit worden gedetecteerd?" voordat ze dat in een syllabus zeggen.

## Opmerkingen en kanttekeningen

De benchmark meet de detectie van machinegegenereerde tekst, niet wangedrag: een student die AI gebruikt om te plannen, een outline te maken of te reviseren, produceert tekst die de detectoren niet zijn gebouwd om te betrappen, en een student die [[language-learning|in een tweede taal schrijft]] is een bekend false-positief-risico dat een leaderboard niet kan tonen. RAID is een onderzoeksartefact dat wordt onderhouden door een academisch team; de dekking volgt de generatormodellen in de testset, dus nieuwere modellen kunnen ondervertegenwoordigd zijn totdat de benchmark wordt ververst. Het leaderboard rangschikt detectoren, niet de datahandelingspraktijken van hun leveranciers, en een hoge AUROC zegt niets over de vraag of het indienen van studentenwerk bij die dienst rechtmatig of ethisch is in uw rechtsgebied.
