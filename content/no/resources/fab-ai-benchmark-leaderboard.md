---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Et modell-leaderboard for utdanningsbenchmarks rettet mot lav- og mellominntektsland, som dekker pedagogikk, grunnleggende lese- og skriveferdigheter, SEND, visuell matematikk og flerspråklig ytelse, med kolonner for pris og åpne vekter."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Fab AI evaluerer modeller på utdanningsoppgaver som betyr noe der budsjetter, båndbredde og språkdekning er begrenset i [[global-south|lav- og mellominntektslandene]] benchmarken er bygget for, og publiserer resultatene som et sorterbart leaderboard i stedet for en artikkel. Kjernetabellen scorer en pedagogikkbenchmark sammen med SEND, visuell matematikk og visuell resonnering, med egne faner for flerspråklig pedagogikk, grunnleggende lese- og skriveferdigheter og vurdering av høytlesing.

## Hva du kan gjøre med den

Sammenlign rundt 300 modeller på pedagogikkpoeng som for tiden løper fra de lave nittiårene ned til 21%, og sorter deretter etter det et utdanningsdepartement faktisk må veie: pris per million tokens, antall parametere, åpne vekter og utgivelsesdato. Spredningen i bunnen er den nyttige delen. Åpne modeller under 2B ligger mellom 21% og 43% på pedagogikkbenchmarken, mens frontiermodeller ligger i de lave nittiårene, noe som gjør «kan vi kjøre dette offline på billig maskinvare» til en kvantifisert avveining i stedet for en gjetning.

Fanen for [[multilingual-learning|flerspråklig]] pedagogikk er grunnen til å bokmerke siden. De fleste utdanningsbenchmarks er kun på engelsk, og spørsmålet om en modells pedagogikk overlever oversettelse, er akkurat det spørsmålet et departement i et flerspråklig system trenger svar på. Dataene kan lastes ned som CSV, slik at sammenligningene kan kjøres på nytt lokalt.

## Hvem den er for

Beslutningstakere og innkjøpsteam som velger modeller for nasjonale systemer, forskere som studerer [[digital-divide|tilgangskløften]] i AI-støttet utdanning, og utviklere som trenger et pedagogikkmål som ikke er en engelskspråklig eksamen.

## Merknader og forbehold

Et leaderboard måler modeller på benchmarkens egne oppgaver: en høy pedagogikkpoengsum er dokumentasjon om de elementene, ikke om et klasserom. Priskolonnen blander priser på input- og output-tokens i forholdet 3:1, noe som er et modelleringsvalg og ikke hva en bestemt utrulling vil koste. Dekningen av språk og av lokalt hostede modeller endrer seg etter hvert som nye modeller dukker opp, og de lave poengsummene for små modeller gjenspeiler delvis oppgaveformatet like mye som evnen. Innrammingen til Fab AI handler eksplisitt om lav- og mellominntektsland, så elementsettet til benchmarken gjenspeiler den konteksten og bør ikke leses som en generell utdanningsrangering. Sjekk utgivelsesdatoer: flere oppføringer er eldre enn den nåværende modellgenerasjonen.

## Tilknyttede begreper

- [[benchmark]] — den bredere klassen av instrumenter denne tilhører
- [[digital-divide]] — begrensningen kolonnene for pris og åpne vekter finnes for å synliggjøre
- [[equity-in-ai-education]] — det politiske spørsmålet leaderboardet gir informasjon til
