---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Et gratis browserværktøj, der kører en skriftlig, tidsbegrænset version af en mundtlig kodeforsvarssamtale for hver studerende på et programmeringskursus og foreslår karakterer med citeret evidens til underviserens godkendelse."
url: https://code-viva.pisan.me/
author: "Code Viva"
author_url: https://code-viva.pisan.me/
resource_type: [software]
access: [free]
last_verified: "2026-11-04"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Code Viva kører en skriftlig, tidsbegrænset version af en [[oral-assessment|viva]] for hver studerende på et programmeringskursus, cirka femten til tyve minutter hver, uden en underviser til stede. Den læser en studerendes indsendte kode og commit-historik, skriver fire til seks spørgsmål om den studerendes egne funktioner, navne og commits og giver hver studerende et personligt link at svare fra.

## Hvad du kan gøre med det

Indsendelser kommer fra et Gradescope-eksport, et Canvas-download-zip, et zip med én mappe pr. studerende eller GitHub Classroom med et læsetoken. Underviseren sætter sessionens længde, antal spørgsmål og deadline, markerer forlænget tid fra 1,25x til 3x og læser, redigerer eller erstatter de genererede spørgsmål, før links sendes. Spørgsmålene dækker rekursionens basistilfælde, kantvagter, valg af datastruktur, uigennemsigtige variabelnavne, skala og tracing, sætninger fra opgavebeskrivelsen og commit-mønstre som ét samlet eller et natteligt commit. Svarene kommer tilbage som en responskode, og gennemlæsningsskærmen viser hver transskription ved siden af en foreslået score fra 0 til 3 med de sætninger, den hviler på, plus en flagkø ordnet efter, hvor meget en samtale er berettiget. Resultater eksporteres til CSV, og elleve demokurser lader en læser prøve hele løkken på opdigtede data.

## Hvem det er til

Undervisere på programmeringskurser, der vil have evidens for, at en studerende kan forklare sin egen kode, og som hellere vil tale med en kort liste af studerende end med dem alle; commit-spørgsmålene gør det til en form for [[process-oriented-assessment]].

## Noter og forbehold

Alt kører i browseren: kurset ligger i local storage med en JSON-eksport, spørgsmål rejser i den del af et link, som browsere ikke sender til servere, og svar kommer kun tilbage som koder, de studerende selv vælger at sende, så ingen studerendedata når en tredjepart. Spørgsmålsgeneratoren er regelbaseret snarere end modeldrevet. Efter værktøjets egen beskrivelse er dets kodelæser heuristisk, så usædvanlig formatering eller makroer kan skjule en funktion, og en score kan belønne kendskab til vokabularet snarere end forståelse af koden, hvilket er grunden til, at scorer er forslag, en underviser godkender, og til at det råder til at holde indsatsen lav. Der er ikke offentliggjort nogen licens eller noget kilderepositorium, og fordi links bærer spørgsmålene, løber de op i nogle få kilobyte, langt nok til at ombryde i en beskedboks i et læringssystem.

## Relaterede begreper

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
