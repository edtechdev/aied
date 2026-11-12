---
title: "Moodle-spørsmålstypen AI Text"
created: "2026-11-12T11:33:00-05:00"
updated: "2026-11-12T12:16:00-05:00"
type: resource
summary: "En åpen kildekode-spørsmålstype for Moodle (GPL v3) som vurderer fritekstsvar med en stor språkmodell mot en prompt per spørsmål og et valgfritt vurderingsskjema, med OpenAI, Azure eller en selvdriftet Ollama-modell, og viser AI-ens tilbakemelding til en menneskelig vurderer."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

De fleste AI-integrasjoner for quiz sender hvert svar til et fast vurderingskall. Denne Moodle-spørsmålstypen gjør det motsatte: underviseren skriver vurderingskriteriene. Hvert spørsmål bærer en **prompt** som forteller modellen hvordan svaret skal evalueres, og et valgfritt **vurderingsskjema** som beskriver hvordan poeng gis, slik at en oppgave som «skriv en setning i preteritum» kan angi ti poeng for ingen feil, null for brutt grammatikk og ett poengs trekk per skrivefeil. Modellen returnerer en poengsum og [[feedback|tilbakemelding]], og en underviser kan se tilbakemeldingen ved siden av svaret når den vurderer for hånd.

## Hva du kan gjøre med den

Legg til et AIText-spørsmål i en hvilken som helst Moodle-quiz, skriv prompten og vurderingsskjemaet, og test prompts med en AJAX-**prompttester** i redigeringsskjemaet i stedet for å gå gjennom forhåndsvisningsforsøk. Vurderingen kjører gjennom to medfølgende spørsmålsatferder (umiddelbar og utsatt) som må installeres sammen med spørsmålstypen, noe som holder AI-vurderingen isolert fra Moodles kjerneatferder; eksisterende forsøk som brukte den eldre atferden `interactivecountback`, migreres ved oppgradering. Hvis modellen ikke er tilgjengelig, degraderer vurderingen i stedet for å gi feil, slik at et forsøk ikke går tapt. Fordi spørsmålet er en innebygd quiztype, havner resultatene i karakterboken som en hvilken som helst annen post – noe et emneteam trenger før det kan behandle [[automated-assessment|automatisk poengsetting]] som en pilot i stedet for en demo.

Designet legger også vurderingskriteriene der [[ai-feedback-quality|tilbakemeldingskvaliteten]] avgjøres: i prompten, skrevet av underviseren, i stedet for i en leverandørstandard. Det er den ærlige bruken av verktøyet – kriterier du kan granske og revidere – men det betyr også at kvalitetstaket er vurderingsskjemaet, og en vag prompt gir vag vurdering. Institusjoner griper til den for de lavrisiko, hyppige kontrollene som [[formative-assessment|formativ vurdering]] er avhengig av, der et menneske ellers ville lest førti korte svar på en kveld.

## Hvem den er for

Moodle-administratorer og utviklere som allerede driver nettstedet, undervisere som vil ha AI-vurdering uten en separat plattform eller kommersiell lisens, og forskere som trenger en kontrollerbar vurderingspipeline å studere. Den krever Moodle 4.5 eller senere og API-tilgang til en modell – enten OpenAI eller Azure via Moodles AI-undersystem, eller en selvdriftet Ollama-instans via Local AI Manager, som holder studentteksten på lokal infrastruktur. Programtillegget vedlikeholdes av Marcus Green, ligger på Moodles programtilleggsmarkedsplass og hadde 33 stjerner og 36 forks da denne siden ble verifisert.

## Merknader og forbehold

Åpen kildekode under GPL v3 eller senere, men gratis betyr ikke gratis å drifte: noen betaler for modellens API, og kvaliteten på vurderingen avhenger av modellvalg og promptdesign. Fritekstsvar forlater Moodle-serveren når en ekstern leverandør brukes, så institusjonens dataavtale styrer hva som kan sendes; den selvdriftede Ollama-veien finnes for nettsteder som ikke kan sende studentarbeid ut. Repoet oppgir ingen publisert nøyaktighets- eller samsvarsstudie, så programtillegget bør ikke innføres med antakelsen om at LLM-vurdering tilsvarer menneskelig vurdering – [[assessment-validity|validitet]] må fastslås lokalt mot menneskelige poeng før noen karakterpoeng veier noe. De medfølgende atferdene er en hard avhengighet: å installere bare spørsmålstypen etterlater spørsmål uten vurdering.

## Tilknyttede begreper

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
