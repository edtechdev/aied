---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Et offentlig leaderboard over AI-tekstdetektorer som er scoret på RAID, en benchmark bygget for å teste robusthet mot modeller, domener, dekodingsinnstillinger og adversarielle angrep."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

RAID er benchmarken bak de fleste seriøse påstandene om [[ai-detection|AI-tekstdeteksjon]], og leaderboardet er stedet å sjekke om den publiserte nøyaktigheten til en detektor overlever en endring av modell, domene, dekodingsinnstilling eller bevisst angrep. Oppføringer scores på testsettet og kan sendes inn av alle som følger innsendingsprosessen til repositoryet.

## Hva du kan gjøre med den

Filtrer etter domene — abstracts, bøker, nyheter, poesi, oppskrifter, Reddit, anmeldelser, wiki — etter dekodingsstrategi (greedy eller sampling), etter repetisjonsstraff og etter adversarielt angrep, inkludert mellomrom, homoglyfer, synonymutskifting, parafrasering, zero-width-mellomrom og sletting av artikler. Sammenlign deretter en detektor på tvers av måltall: AUROC, TPR ved en falsk-positiv-rate på 5%, og TPR ved 1%.

Det filtersettet er poenget. En detektor som scorer nær 1.000 samlet, kan falle fra hverandre når teksten er parafrasert eller kildemodellen endres, og leaderboardet lar deg se fallet før en institusjon bygger en [[academic-integrity|regelbrudd]]sak på det. Kolonnen med 1% falske positiver betyr mest i utdanning, fordi en feilrate på 1% på institusjonsskala betyr hundrevis av studenter som feilaktig anklages.

## Hvem den er for

Forskere som evaluerer deteksjonsmetoder, administratorer som skriver retningslinjer som kan vise til en detektor, og undervisere som vil ha et konkret svar på «kan dette oppdages?» før de sier det i en emneplan.

## Merknader og forbehold

Benchmarken måler deteksjon av maskingenerert tekst, ikke regelbrudd: en student som bruker AI til å planlegge, lage en disposisjon eller revidere, produserer tekst detektorene ikke er bygget for å fange opp, og en student som [[language-learning|skriver på et andrespråk]] er en kjent falsk-positiv-risiko som et leaderboard ikke kan vise. RAID er et forskningsartefakt som vedlikeholdes av et akademisk team; dekningen følger generatormodellene i testsettet, så nyere modeller kan være underrepresentert til benchmarken oppdateres. Leaderboardet rangerer detektorer, ikke leverandørenes praksis for datahåndtering, og en høy AUROC sier ingenting om hvorvidt det er lovlig eller etisk å sende studentarbeid til den tjenesten i din jurisdiksjon.

## Tilknyttede begreper

- [[ai-detection]] — metodefamilien benchmarken evaluerer
- [[academic-integrity]] — den politiske konteksten der detektorpoengsummer brukes
- [[benchmark]] — den bredere klassen av instrumenter denne tilhører
