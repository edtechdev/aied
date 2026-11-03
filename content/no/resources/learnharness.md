---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "En gratis skrivebordsapp (AGPL-3.0) der AI-agenter måler hva en lærende allerede forstår, planlegger veien mot målet, underviser ett resonnementsteg om gangen og tilpasser øvingen, med en kunnskapsgraf senere økter leser."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**LearnHarness** er en skrivebordsapplikasjon for [[agentic-ai|agentassistert]] læring som organiserer en leksjon rundt [[prior-knowledge|det en lærende allerede forstår]] snarere enn rundt en temaliste. Prosjektet beskriver fire grep: **måle**, å sondere begrepene målet avhenger av for å finne hvor forståelsen stopper; **planlegge**, å utlede et avhengighetskart mot målet og vise det som et leksjonskart; **undervise**, å arbeide ett resonnementsteg om gangen gjennom en rytme med forutsi–forklare–sjekke, slik at forvirring repareres før noe bygges på den; og **øve**, en strøm av oppgaver rettet mot den lærendes egne vanskeligheter.

## Hva du kan gjøre med den

Det særegne inndatafeltet er tenkefeltet: lærende skriver eller dikterer resonnementet og usikkerheten sin i stedet for bare å svare, noe prosjektet behandler som måten agenten ser for seg resonnering på, snarere enn en protokoll over rett og galt. Den kan også undersøke spørsmål i bakgrunnen, generere visuelle forklaringer og bygge interaktive demonstrasjoner.

Det som akkumuleres, er en [[knowledge-graph|kunnskapsgraf]] av påstander og resonnementskjeder, lenket tilbake til øktene de kom fra og lest av senere undervisnings- og øvingsagenter som kontekst; notater kan importeres. Prosjektet sier at grafen lagrer ideer og forbindelser, ikke vurderinger av evne.

## Hvem den er for

Selvstendige lærende som arbeider med vanskelig stoff, og undervisere eller utviklere som vil se hvordan en agentnativ [[intelligent-tutoring|AI-veileder]] ser ut når ledetekstene og tilstanden kan inspiseres. Den er skrevet i TypeScript, kjøres fra kildekoden, og testene er dokumentert som deterministiske, uten modellkall.

## Merknader og forbehold

Gratis dekker programvaren, ikke inferensen: lærende tar med egne leverandørnøkler, et abonnement, en lokal Claude Code-CLI eller et hvilket som helst OpenAI-kompatibelt endepunkt, og betaler leverandøren uten påslag; en live måler anslår bare kjente API-kostnader. Oppføringer, chatter og nøkler blir liggende på maskinen som vanlige filer, men prosjektet advarer om at lokal lagring ikke betyr offline behandling, siden modellforespørsler, valgfri diktering og nettforskning alle når eksterne tjenester. Windows x64-installatøren er usignert, så Windows vil advare. Ingen effektstudie er rapportert, så saken hviler på oppgitt begrunnelse snarere enn målte utfall; repoet hadde omkring 4 800 stjerner da det ble sjekket 2. november 2026.

## Tilknyttede begreper

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
