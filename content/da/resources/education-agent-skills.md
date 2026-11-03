---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Et bibliotek med 165 evidensforankrede agentfærdigheder, der dækker pædagogik, læringsvidenskab, pensum og evaluering, pakket til Claude, Codex og Hermes."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Education Agent Skills** er et bibliotek med 165 agentfærdigheder til lærere, skoleledere og folk, der bygger undervisningsværktøjer. Færdighederne er grupperet i tyve domæner, der spænder over pædagogik, læringsvidenskab, [[curriculum-design|pensum]], evaluering og regeneration, og hver af dem er skrevet til at blive indlæst af en [[agentic-ai|agent]] snarere end læst som et dokument.

## Hvad du kan gøre med det

Færdighederne installeres i Claude Code, Codex og Hermes, enten som et plugin eller ved at kopiere mapperne, så det samme bibliotek virker på flere agentflader. En hostet MCP-server stiller samlingen til rådighed som værktøjer for agenter, der ikke kan installere færdigheder lokalt, og repositoriet leverer både et register og en færdigbygget bundle, så serveren kan servere samlingen uden at læse de enkelte filer ved udrulning.

Projektets særkende er dets forankring: færdighederne citerer den evidens, de hviler på, og repositoriets egen historik viser disciplinen blive håndhævet snarere end blot påstået, herunder en flettet rettelse, der fjernede en ubegrundet tilskrivning og korrigerede beskrivelsen af en testet beskyttelsesforanstaltning i et citeret studie.

## Noter og forbehold

Undervisningsfærdighederne, dokumentationen og pensummaterialerne er licenseret CC BY-SA 4.0, så genbrug og tilpasning er åbne, mens afledte værker skal bære samme licens. To driftsdetaljer betyder noget, hvis du udruller det. MCP-endpointet kræver tokens i stedet for at være åbent for alle, og fordi serveren serverer et committet snapshot snarere end SKILL.md-filerne, vil en færdighed, du tilføjer uden at genopbygge og committe bundlen, ikke dukke op på den live server, selv efter en ny udrulning. Biblioteket er bygget af Gareth Manning, en underviser og pensumdesigner, og licensvilkårene gælder specifikt for undervisningsindholdet.

## Relaterede begreper

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]
