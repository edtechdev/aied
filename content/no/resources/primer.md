---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Et åpen kildekode-forfattersystem fra Whartons Generative AI Labs som gjør et strukturert intervju med en underviser om til en kjørbar, adaptiv læringssimulering med egne mentor-, øvings- og tilbakemeldingsagenter."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Primer er et [[open-source|åpen kildekode-system]] for å bygge en pedagogisk [[simulation|simulering]] ved å beskrive en leksjon for en AI i stedet for å programmere den. Underviserens skjønn avgjør hva simuleringen lærer bort: et intervju henter fram det underviseren vet om leksjonen og studentene, et designdokument gjør kunnskapen etterprøvbar, og ingenting bygges før underviseren godkjenner det.

## Hva du kan gjøre med det

Intervjuet stiller ett spørsmål om gangen: leksjonen, studentenes nivå og forkunnskaper, vanlige misoppfatninger, underviserens tilnærming og hvordan måloppnåelse skal vurderes. Undervisere kan snakke eller skrive, og laste opp emneplaner, leksjonsplaner eller vurderingskriterier. Det som kommer tilbake, er et designdokument som dekker mål, scenarioflyt, figurer, innsats og adaptasjonslogikk, som underviseren reviderer og godkjenner slik vedkommende ville gjort med en leksjonsplan. Fem agenter bygger det deretter: Intake, Design, Casting Director, Image Generation og Experience Builder, som setter sammen resultatet for én student eller en hel klasse.

Ved kjøring møter tre agenter studenten. En mentor aktiverer forkunnskaper og bringer misoppfatninger fram i dagen. En øvingsagent spiller en rollespillmotpart eller en teachback-elev, der studenten forklarer et begrep og reviderer forklaringen når studenten blir spurt. En tilbakemeldingsagent arbeider ut fra transkripsjonen og drøfter konkrete øyeblikk og hvordan læringen bæres videre utover scenariet. Hver agent har en figur i simuleringsverdenen og et undervisningslag som følger mål og samler belegg, og underviseren får individuelle og aggregerte rapporter.

## Hvem det er for

Undervisere, instruksjonsdesignere og fakultetsutviklere kan beskrive en leksjon i detalj uten å ville skrive kode for den. Forskere som studerer forfatterskap med underviseren i løkken eller [[agentic-ai|arbeidsflyter med flere agenter]], får et fungerende system å granske, og utviklere kan utvide det, fordi promptene, malene, sjekklistene, orkestreringsmønstrene og TypeScript-koden alle er åpen kildekode.

## Merknader og forbehold

Forfatterne kaller Primer en eksperimentell prototype, ikke et gjennomprøvd klasseromsprodukt. Det er ikke evaluert som et læringstiltak i klasserom, og ingen har gjennomgått det mot FERPA, COPPA, delstatlig personvernlov for studenter eller distriktspolicy, så en institusjon som bruker det med studenter, eier den gjennomgangen. Programvaren har MIT-lisens og er gratis, men å kjøre en simulering krever modelltilgang, som koster penger. Fordi den er modelluavhengig og kjører på lokale eller åpne vektmodeller, kan den tas i bruk der personvernreglene er strengere. En whitepaper om arkitekturen og promptene er lenket fra prosjektsiden. Da den ble sjekket i november 2026, hadde repoen 98 stjerner og 16 forks.

## Tilknyttede begreper

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
