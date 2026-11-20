---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Et offentligt leaderboard for frontier-modeller, der bedømmer virkelige håndskrevne universitets-STEM-svar mod de rubric-punkter, underviseren valgte."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

GradeBench stiller et snævert, nyttigt spørgsmål om [[automated-assessment|automatiseret bedømmelse]]: givet en studerendes håndskrevne svar, underviserens rubric, en referenceløsning og de rubric-punkter, underviseren faktisk valgte, vælger en frontier-model så de samme punkter? Guldlabelsene er virkelige rubric-valg truffet af undervisere og undervisningsassistenter på eksamener og quizzes, ikke genbedømt modeloutput.

## Hvad du kan gøre med det

Læs leaderboardet, før du stoler på nogen bedømmelsesleverandørs påstand om nøjagtighed, og læs opgavekonstruktionen, før du stoler på leaderboardet. Dette [[benchmark]] rummer 464 opgaver trukket fra 125 spørgsmål på tværs af 45 kurser på [[higher-ed|universitetsniveau]] ved mere end ti institutioner, begrænset til eksamens- og quizopgaver med frie svar, som en professor eller undervisningsassistent har gennemgået linje for linje, og vægtet mod delvis point — opgaver med fuld point og nul point er loftet til 5 % hver, fordi modellerne finder dem lette.

Det nuværende leaderboard topper langt under menneskelig enighed: den bedste model når 57,3 % eksakt rubric-match, og siden plotter nøjagtighed mod pris pr. 1.000 svar, hvor en model, der ligger 0,8 point bagud, koster omkring en syvendedel så meget. Den omkostningsakse er den praktisk nyttige del, eftersom bedømmelse er en volumenoperation.

For et andet, uafhængigt bygget instrument, se [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) fra Learning Design Alliance, som er pakket som et åbent repository snarere end et hostet leaderboard og er sammenfattet i [[porcaro-ai-grading-benchmark-2026|Porcaros undersøgelse]].

## Hvem det er til

Undervisere, der beslutter, om et bedømmelsesværktøj må frigive karakterer uden gennemgang, evalueringsprofessionelle, der skriver indkøbskrav, og forskere, der har brug for et mål på rubric-niveau snarere end en korrelation med essay-scoring.

## Noter og forbehold

GradeBench udgives af Pensive, en kommerciel AI-bedømmelsesplatform, så benchmarket og produktet deler ejer; opgavekonstruktionen er dokumenteret og forsvarlig, men behandl indramningen som leverandørens. Den dækker STEM-eksamener med rubrics på mindst fire punkter, hvilket udelukker essays, korte svar og diskussionsindlæg — de formater, hvor det meste bedømmelse i [[humanities-education|humaniora]] finder sted. Eksakt rubric-match er en streng metrik: to bedømmere kan være uenige om et punkt og begge have ret om den studerende. Scorerne beskriver modelversioner, der er tilgængelige i november 2026, og de vil flytte sig.

## Relaterede begreper

- [[automated-assessment]] — den praksis, benchmarket måler
- [[assessment-validity]] — det kriterium, en leaderboard-score er en proxy for
- [[benchmark]] — den bredere klasse af instrumenter, dette hører til
