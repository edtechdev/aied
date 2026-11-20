---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "En offentlig topplista över AI-textdetektorer som poängsätts på RAID, ett benchmark byggt för att testa robusthet mot modeller, domäner, avkodningsinställningar och adversariella angrepp."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

RAID är benchmarket bakom de flesta seriösa anspråk om [[ai-detection|detektering av AI-text]], och dess topplista är stället att kontrollera om en detektors publicerade noggrannhet överlever ett byte av modell, domän, avkodningsinställning eller avsiktligt angrepp. Poster poängsätts på testmängden och kan lämnas in av vem som helst som följer repositoriets inlämningsprocess.

## Vad du kan göra med den

Filtrera efter domän – abstracts, böcker, nyheter, poesi, recept, Reddit, recensioner, wiki – efter avkodningsstrategi (greedy eller sampling), efter repetitionsstraff och efter adversariellt angrepp, inklusive blanksteg, homoglyfer, synonymbyte, parafrasering, nollbreddsmellanslag och borttagning av artiklar. Jämför sedan en detektor över mått: AUROC, TPR vid en falskt positiv-andel på 5 % och TPR vid 1 %.

Den filteruppsättningen är poängen. En detektor som totalt sett poängsätter nära 1,000 kan rasa när texten har parafraserats eller källmodellen byts, och topplistan låter dig se fallet innan en institution bygger ett [[academic-integrity|förseelseärende]] på det. Kolumnen för 1 % falskt positiva spelar störst roll i utbildning, eftersom en felmarginal på 1 % i institutionell skala betyder hundratals felaktigt anklagade studenter.

## Vem den är för

Forskare som utvärderar detekteringsmetoder, administratörer som skriver policy som kan hänvisa till en detektor, och lärare som vill ha ett konkret svar på ”kan detta detekteras?” innan de säger det i en kursplan.

## Anteckningar och förbehåll

Benchmarket mäter detektering av maskingenererad text, inte förseelser: en student som använder AI för att planera, disponera eller revidera producerar text som detektorerna inte byggdes för att fånga, och en student som [[language-learning|skriver på ett andraspråk]] är en känd falskt positiv-risk som en topplista inte kan visa. RAID är en forskningsartefakt som underhålls av ett akademiskt team; täckningen följer generatormodellerna i dess testmängd, så nyare modeller kan vara underrepresenterade tills benchmarket uppdateras. Topplistan rankar detektorer, inte deras leverantörers datahantering, och en hög AUROC säger inget om huruvida det är lagligt eller etiskt att lämna in studentarbeten till den tjänsten i din jurisdiktion.
