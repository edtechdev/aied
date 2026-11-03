---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "En AI-undervisningsassistent som først og fremst kjører lokalt, og som gjør din egen læreplan om til redigerbare undervisningsutkast, studentmateriale og lysbilder med en modell du velger selv."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**Claw-ED** er en undervisningsassistent som først og fremst kjører lokalt, og som lager undervisningsopplegg ut fra dine egne læreplanmaterialer. En lærer importerer kildene sine, ber om et opplegg og får redigerbare utkast sammen med studentrettet materiale og lysbilder, generert med den modellen læreren selv velger framfor én fast leverandør.

## Hva du kan gjøre med den

Arbeidsflyten går fra import via utkast og gjennomgang til eksport, og utkastene behandles som utgangspunkter læreren redigerer, ikke som ferdige utdelinger. Undervisningsjobber settes i kø og kan gjenopptas, så en lang generering som feiler kan fortsette i stedet for å startes på nytt, og genererte artefakter kan lastes ned. Den eksponerer også verktøyene sine for en [[agentic-ai|agent]] gjennom en MCP-server og kan kobles til Google Drive, slik at en skole kan knytte den til eksisterende lagring og timeplanlegging.

Prosjektet er bevisst modellagnostisk. Det dokumenterer lokale Ollama-modeller, rimelige OpenRouter-ruter og vertede alternativer side om side, og modellguiden er datert, noe som gjør det klart at anbefalingene er katalogbaserte utgangspunkter og ikke lærervurderte kvalitetsdommer.

## Merknader og forbehold

Programvaren er gratis og [[open-source|åpen kildekode]] under MIT-lisensen for den opprinnelige koden, selv om tredjepartskomponenter beholder egne vilkår, og å kjøre den betyr å betale for egen modellinferens hvis du bruker en vertet modell. Prosjektet kaller seg en lærergjennomgått beta og sier rett ut i README-en at det å passere CI ikke etablerer undervisningskvalitet på tvers av levende modeller, som er den riktige måten å lese en grønn testpakke i dette feltet: den verifiserer programvaren, ikke [[pedagogy|pedagogikken]]. Den vedlikeholdes av MacxLabs og tar imot lærergjennomgåtte eksempelopplegg som bidrag.

## Tilknyttede begreper

[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
