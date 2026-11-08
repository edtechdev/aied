---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Et gratis nettleserverktøy som kjører en skriftlig, tidsbegrenset variant av en muntlig kodeforsvarssamtale for hver student på et programmeringsemne, og foreslår poeng med siterte belegg til godkjenning."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Code Viva kjører en skriftlig, tidsbegrenset versjon av en [[oral-assessment|viva]] for hver student på et programmeringsemne, omkring femten til tjue minutter hver, uten en underviser til stede. Verktøyet leser innlevert kode og commit-historikk, skriver fire til seks spørsmål om studentens egne funksjoner, navn og commits, og gir hver student en personlig lenke å svare fra.

## Hva du kan gjøre med det

Innleveringer kommer fra en Gradescope-eksport, en Canvas-nedlasting som zip, en zip med én mappe per student, eller GitHub Classroom med et lesetoken. Underviseren setter øktlengde, antall spørsmål og frist, markerer utvidet tid til 1,25x–3x, og leser, redigerer eller erstatter de genererte spørsmålene før lenkene sendes. Spørsmålene dekker rekursjonens basistilfeller, kantvakter, valg av datastruktur, ugjennomsiktige variabelnavn, skala og sporing, setninger fra oppgaveteksten, og commit-mønstre som én bulkcommit eller en sen nattlig commit. Svarene kommer tilbake som en svarkode, og gjennomgangsskjermen viser hver transkripsjon ved siden av en foreslått poengsum fra 0 til 3 med setningene den hviler på, pluss en flaggkø ordnet etter hvor mye en samtale er berettiget. Resultatene eksporteres til CSV, og elleve demokurs lar en leser prøve hele løkken på oppdiktede data.

## Hvem det er for

Undervisere på programmeringsemner som vil ha belegg for at en student kan forklare sin egen kode, og som heller vil snakke med en kort liste studenter enn med alle; commit-spørsmålene gjør det til en form for [[process-oriented-assessment|prosessorientert vurdering]].

## Merknader og forbehold

Alt kjører i nettleseren: emnet ligger i lokal lagring med en JSON-eksport, spørsmålene reiser i den delen av en lenke nettlesere ikke sender til servere, og svarene kommer bare tilbake som koder studentene velger å sende, så ingen studentdata når en tredjepart. Spørsmålsgeneratoren er regelbasert snarere enn modelldrevet. Etter verktøyets egen beskrivelse er kodeleseren heuristisk, så uvanlig formatering eller makroer kan skjule en funksjon, og en poengsum kan belønne kjennskap til vokabularet snarere enn forståelse av koden, som er grunnen til at poengsummene er forslag en underviser godkjenner, og til at det anbefaler å holde innsatsen lav. Ingen lisens og ingen kildekoderepositorium er publisert, og fordi lenkene bærer spørsmålene, blir de noen kilobyte lange – nok til å brytes i en meldingsboks i et læringsadministrasjonssystem.

## Tilknyttede begreper

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
