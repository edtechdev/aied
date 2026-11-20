---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Et model-leaderboard til uddannelsesbenchmarks rettet mod lav- og mellemindkomstlande, der dækker pædagogik, grundlæggende literacy, SEND, visuel matematik og flersproget præstation, med kolonner for pris og åbne vægte."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Fab AI evaluerer modeller på uddannelsesopgaver, der betyder noget, hvor budgetter, båndbredde og sprogdækning er begrænsede i de [[global-south|lav- og mellemindkomstlande]], benchmarket er bygget til, og publicerer resultaterne som et sorterbart leaderboard snarere end en artikel. Kernetabellen scorer et pædagogik-benchmark side om side med SEND, visuel matematik og visuel ræsonneren, med separate faner for flersproget pædagogik, grundlæggende literacy og højtlæsningsvurdering.

## Hvad du kan gøre med det

Sammenlign omkring 300 modeller på pædagogikscorer, der i øjeblikket løber fra de lave halvfemsere ned til 21 %, og sorter derefter efter det, et undervisningsministerium faktisk skal veje: pris pr. million tokens, parametertal, åbne vægte og udgivelsesdato. Spredningen i bunden er den nyttige del. Åbne modeller under 2B ligger mellem 21 % og 43 % på pædagogik-benchmarket, mens frontier-modeller ligger i de lave halvfemsere, hvilket gør »kan vi køre dette offline på billig hardware« til et kvantificeret bytte snarere end et gæt.

Fanen med [[multilingual-learning|flersproget]] pædagogik er grunden til at bogmærke siden. De fleste uddannelsesbenchmarks er kun på engelsk, og spørgsmålet om, hvorvidt en models pædagogik overlever oversættelse, er præcis det spørgsmål, et ministerium i et flersproget system har brug for at få besvaret. Dataene kan downloades som CSV, så sammenligningerne kan køres igen lokalt.

## Hvem det er til

Politiske beslutningstagere og indkøbsteams, der vælger modeller til nationale systemer, forskere, der undersøger [[digital-divide|adgangskløften]] i AI-understøttet uddannelse, og udviklere, der har brug for et pædagogikmål, som ikke er en engelsksproget eksamen.

## Noter og forbehold

Et leaderboard måler modeller på benchmarkets egne opgaver: en høj pædagogikscore er evidens om de punkter, ikke om et klasseværelse. Priskolonnen blander input- og output-tokenpriser i et 3:1-forhold, hvilket er et modelleringsvalg og ikke, hvad nogen bestemt implementering vil koste. Dækningen af sprog og af lokalt hostede modeller flytter sig, efterhånden som nye modeller dukker op, og de lave scorer for små modeller afspejler delvist opgaveformatet lige så meget som evnen. Fab AIs indramning handler eksplicit om lav- og mellemindkomstlande, så benchmarkets opgavesæt afspejler den kontekst og bør ikke læses som en generel uddannelsesrangering. Tjek udgivelsesdatoer: flere poster går forud for den nuværende modelgeneration.
