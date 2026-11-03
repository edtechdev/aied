---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "En gratis open source-desktopapp (AGPL-3.0), hvor AI-agenter måler elevens forforståelse, planlægger en afhængighedskort til målet, underviser ét ræsonnementstrin ad gangen og tilpasser træningen, med en vedvarende vidensgraf bag."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**LearnHarness** er en desktopapplikation til [[agentic-ai|agentassisteret]] læring, der organiserer en lektion omkring [[prior-knowledge|det, en elev allerede forstår]], snarere end omkring en emneliste. Projektet beskriver fire træk: **mål**, at undersøge de idéer, målet afhænger af, for at finde, hvor forståelsen slipper; **planlæg**, at udlede et afhængighedskort til målet og vise det som et lektionskort; **undervis**, at arbejde ét ræsonnementstrin ad gangen gennem en forudsig–forklar–tjek-rytme, så forvirring repareres, før noget bygges oven på den; og **træn**, en strøm af opgaver målrettet elevens egne vanskeligheder.

## Hvad du kan gøre med det

Det særprægede input er tænkefeltet: elever skriver eller dikterer deres ræsonnement og usikkerhed i stedet for kun at svare, hvilket projektet behandler som den måde, agenten forestiller sig ræsonnement på, frem for en rigtig/forkert-registrering. Den kan også undersøge spørgsmål i baggrunden, generere visuelle forklaringer og bygge interaktive demonstrationer.

Det, der akkumuleres, er en [[knowledge-graph|vidensgraf]] af påstande og ræsonnementskæder, linket tilbage til deres kildesessioner og læst af senere undervisnings- og træningsagenter som kontekst; noter kan importeres. Projektet siger, at grafen lagrer idéer og forbindelser, ikke vurderinger af evne.

## Hvem det er til

Selvstændige lærere, der arbejder med vanskeligt stof, og undervisere eller udviklere, der vil se, hvordan en agentnativ [[intelligent-tutoring|AI-vejleder]] ser ud, når dens prompts og tilstand er inspicerbare. Det er TypeScript, kører fra kilden, og dets tests er dokumenteret som deterministiske uden modelkald.

## Noter og forbehold

Gratis dækker softwaren, ikke inferensen: elever medbringer udbydernøgler, et abonnement, en lokal Claude Code-CLI eller et hvilket som helst OpenAI-kompatibelt endpoint og betaler udbyderen uden avance; en live måler estimerer kun kendte API-omkostninger. Registreringer, chats og nøgler bliver på maskinen som almindelige filer, men projektet advarer om, at lokal lagring ikke betyder offline behandling, da modelanmodninger, valgfri diktering og webresearch alle når eksterne tjenester. Windows x64-installationsprogrammet er usigneret, så Windows vil advare. Der rapporteres ingen effektundersøgelse, så argumentet hviler på angivet begrundelse snarere end målte resultater; repositoriet havde omkring 4.800 stjerner, da det blev tjekket 2. november 2026.

## Relaterede begreper

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
