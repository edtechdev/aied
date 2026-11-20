---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Et offentlig leaderboard der frontiermodeller vurderer ekte håndskrevne STEM-svar fra universitetet mot rubrikkelementene underviseren har valgt."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

GradeBench stiller et smalt, nyttig spørsmål om [[automated-assessment|automatisert vurdering]]: gitt en students håndskrevne svar, underviserens rubrikk, en referanseløsning og rubrikkelementene underviseren faktisk valgte, velger en frontiermodell de samme elementene? Fasitene er ekte rubrikkvalg gjort av undervisere og undervisningsassistenter på eksamener og quizer, ikke modelldata som er vurdert på nytt.

## Hva du kan gjøre med den

Les leaderboardet før du stoler på nøyaktighetspåstandene til en leverandør av vurderingsverktøy, og les oppgavekonstruksjonen før du stoler på leaderboardet. Denne [[benchmark]] omfatter 464 oppgaver hentet fra 125 spørsmål på tvers av 45 [[higher-ed|universitets]]emner ved mer enn ti institusjoner, begrenset til åpne eksamens- og quizoppgaver som en professor eller undervisningsassistent har gått gjennom linje for linje, og med vekt på delpoeng — oppgaver med full pott og null poeng er hver begrenset til 5%, fordi modeller finner dem lette.

Dagens leaderboard topper langt under menneskelig enighet: den beste modellen når 57.3% eksakt rubrikktreff, og nettstedet plotter nøyaktighet mot kostnad per 1,000 svar, der en modell som ligger 0.8 poeng bak, koster omtrent en sjudel så mye. Kostnadsaksen er den praktisk nyttige delen, siden vurdering er en volumoperasjon.

For et annet, uavhengig bygget instrument, se [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) fra Learning Design Alliance, som er pakket som et åpent repository i stedet for et hostet leaderboard, og som er oppsummert i [[porcaro-ai-grading-benchmark-2026|Porcaros studie]].

## Hvem den er for

Undervisere som vurderer om de skal la et vurderingsverktøy slippe karakterer uten gjennomgang, vurderingsprofesjonelle som skriver innkjøpskrav, og forskere som trenger et mål på rubrikknivå i stedet for en korrelasjon med essayvurdering.

## Merknader og forbehold

GradeBench publiseres av Pensive, en kommersiell AI-vurderingsplattform, så benchmarken og produktet deler eier; oppgavekonstruksjonen er dokumentert og forsvarlig, men behandle innrammingen som leverandørens. Den dekker STEM-eksamener med rubrikker på minst fire elementer, noe som utelater essays, kortsvar og diskusjonsinnlegg — formatene der det meste av vurderingsarbeidet i [[humanities-education|humaniora]] skjer. Eksakt rubrikktreff er et strengt mål: to sensorer kan være uenige om et element og begge ha rett om studenten. Poengsummene beskriver modellversjoner som var tilgjengelige i november 2026, og vil endre seg.
