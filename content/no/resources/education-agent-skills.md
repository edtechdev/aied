---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Et bibliotek med 165 evidensforankrede agentferdigheter som dekker pedagogikk, læringsvitenskap, læreplan og vurdering, pakket for Claude, Codex og Hermes."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**Education Agent Skills** er et bibliotek med 165 agentferdigheter for lærere, skoleledere og folk som bygger verktøy for utdanning. Ferdighetene er gruppert i tjue domener som spenner over pedagogikk, læringsvitenskap, [[curriculum-design|læreplan]], vurdering og regenerering, og hver av dem er skrevet for å lastes av en [[agentic-ai|agent]] snarere enn å leses som et dokument.

## Hva du kan gjøre med det

Ferdighetene installeres i Claude Code, Codex og Hermes, enten som en plugin eller ved å kopiere mappene, så det samme biblioteket virker på flere agentflater. En hostet MCP-server eksponerer samlingen som verktøy for agenter som ikke kan installere ferdigheter lokalt, og repoet leverer både et register og en ferdigbygd pakke, slik at serveren kan betjene samlingen uten å lese de enkelte filene ved distribusjon.

Prosjektets særegne påstand er forankringen: ferdighetene siterer evidensen de hviler på, og repoets egen historikk viser at disiplinen håndheves snarere enn bare påstås, blant annet en sammenslått rettelse som fjernet en attribusjon uten dekning og korrigerte beskrivelsen av en testet sikringsmekanisme i en sitert studie.

## Merknader og forbehold

De pedagogiske ferdighetene, dokumentasjonen og læreplanmaterialene er lisensiert under CC BY-SA 4.0, så gjenbruk og tilpasning er åpne mens avledede verk må bære samme lisens. To operasjonelle detaljer betyr noe hvis du distribuerer det. Det hostede MCP-endepunktet krever tokens i stedet for å være åpent for alle, og fordi serveren betjener et innsjekket øyeblikksbilde snarere enn SKILL.md-filene, vil en ferdighet du legger til uten å bygge og sjekke inn pakken på nytt, ikke vises på den levende serveren selv etter en ny distribusjon. Biblioteket er bygget av Gareth Manning, en pedagog og læreplansdesigner, og lisensvilkårene gjelder det pedagogiske innholdet spesifikt.

## Tilknyttede begreper

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]
