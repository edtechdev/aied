---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Et offentligt leaderboard over AI-tekstdetektorer scoret på RAID, et benchmark bygget til at teste robusthed over for modeller, domæner, dekodningsindstillinger og adversarielle angreb."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

RAID er benchmarket bag de fleste seriøse påstande om [[ai-detection|detektion af AI-tekst]], og dets leaderboard er stedet at tjekke, om en detektors publicerede nøjagtighed overlever et skift af model, domæne, dekodningsindstilling eller bevidst angreb. Poster scores på testsættet og kan indsendes af enhver, der følger repositoryts indsendelsesproces.

## Hvad du kan gøre med det

Filtrér efter domæne — abstracts, bøger, nyheder, poesi, opskrifter, Reddit, anmeldelser, wiki — efter dekodningsstrategi (greedy eller sampling), efter repetitionsstraf og efter adversarielt angreb, herunder whitespace, homoglyffer, synonymerstatning, parafrasering, zero-width-mellemrum og artikelsletning. Sammenlign derefter en detektor på tværs af metrikker: AUROC, TPR ved en falsk-positiv-rate på 5 % og TPR ved 1 %.

Det filtersæt er pointen. En detektor, der scorer nær 1,000 samlet, kan falde fra hinanden, når teksten er blevet parafraseret, eller kildemodellen skifter, og leaderboardet lader dig se faldet, før en institution baserer en sag om [[academic-integrity|akademisk uredelighed]] på det. Kolonnen med 1 % falske positive betyder mest i uddannelse, fordi en fejlrate på 1 % i institutionel skala betyder hundredevis af uretmæssigt anklagede studerende.

## Hvem det er til

Forskere, der evaluerer detektionsmetoder, administratorer, der skriver politik, som måske henviser til en detektor, og undervisere, der vil have et konkret svar på »kan dette detekteres?«, før de siger det i en kursusbeskrivelse.

## Noter og forbehold

Benchmarket måler detektion af maskingenereret tekst, ikke uredelighed: en studerende, der bruger AI til at planlægge, skitsere eller revidere, producerer tekst, som detektorerne ikke blev bygget til at fange, og en studerende, der [[language-learning|skriver på et andet sprog]], er en kendt falsk-positiv-risiko, som et leaderboard ikke kan vise. RAID er et forskningsartefakt vedligeholdt af et akademisk team; dækningen følger generatormodellerne i dets testsæt, så nyere modeller kan være underrepræsenterede, indtil benchmarket opdateres. Leaderboardet rangerer detektorer, ikke deres leverandørers datahåndteringspraksis, og en høj AUROC siger intet om, hvorvidt det er lovligt eller etisk forsvarligt at indsende studerendes arbejde til den tjeneste i din jurisdiktion.
