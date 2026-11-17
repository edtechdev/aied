---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "En open source MCP-server, der lader Claude, Cursor, Codex og andre agenter læse og handle inde i Canvas LMS — værktøjer til studerende, undervisere og undervisningsdesignere, med skrivehandlinger gatede og valgfri anonymisering af elevdata."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Canvas MCP** er en open source Model Context Protocol-server af Vishal Sachdev, der forbinder en AI-klient med en Canvas LMS-instans: agenten kan liste en studerendes kommende arbejde, læse et kursus' opgaver og afleveringer, sende beskeder til en klasse eller auditere et kursus for tilgængelighed, alt sammen gennem værktøjer, som serveren stiller til rådighed, frem for ad hoc-skrabning af skærmen.

## Hvad du kan gøre med det

Serveren leverer tre familier af værktøjer. Studerendeværktøjer besvarer »hvad skal afleveres i denne uge«, »har jeg afleveret alt«, »hvor mange quizforsøg har jeg tilbage« mod Canvas' egne `self`-endpoints. Underviserværktøjer lister og opretter opgaver, læser afleveringer, bulkbedømmer, sender samtaler og henter opgaveanalyse. Undervisningsdesignerværktøjer dækker kursuskvalitetstjek og WCAG-tilgængelighedsscanninger. Op til 128 værktøjer er tilgængelige i alt, selv om standardprofilen registrerer færre, og funktionsgatede værktøjer hæver antallet. Oven på værktøjerne pakker otte agentfærdigheder flertrinsopskrifter — en ugeplan, et morgenkursustjek, et beslutningstræ for bulkbedømmelse, en peer-review-pipeline, en kursusaudit før semesterstart — installérbare i 40+ agenter gennem `skills.sh`.

## Hvem den er for

Undervisere, der vil have en agent til at klare den rutinemæssige læsning og beskedudveksling omkring et kursus, og [[institutional-ai-infrastructure|institutionelle teams]], der vurderer, hvad en agent koblet til LMS'et faktisk kan nå. Undervisningsdesignere får det tætteste her på en automatiseret kursusgennemgang. Projektet er et gennemarbejdet eksempel på [[agentic-ai|agentisk værktøj]] på niveau med én institutions LMS frem for en generisk chatbot.

## Noter og forbehold

Opsætningen er lokal: Python 3.11 eller nyere, et Canvas API-token og en URL samt en MCP-klient, med en dobbeltklikbar udvidelse til Claude Desktop. Den offentligt hostede server er blevet pensioneret, så en delt udrulning betyder selvhosting bag institutionens egen autentificering. Skriveværktøjer er gatede — HTTP-servere er skrivebeskyttede, medmindre skriveværktøjer udtrykkeligt tillades, sletninger kræver bekræftelsestokens, og kodekørsel foregår i en sandbox, der fejler lukket. Privatlivskontroller er opt-in: anonymisering af svar, maskering af e-mail og PII-filtrering skal aktiveres, og README'et er omhyggeligt med, at disse kan understøtte FERPA-forpligtelser uden at etablere overensstemmelse, hvilket afhænger af udrulning og AI-udbyderen. Der er ingen telemetri i serveren, men Canvas og den valgte klient fører deres egne logs. Projektet er MIT-licenseret, aktivt udviklet, og dets egne guider er autoriteten for aktuelle værktøjsnavne og konfiguration.

## Relaterede begreper

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
