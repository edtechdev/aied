---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "En åpen kildekode-MCP-server som lar Claude, Cursor, Codex og andre agenter lese og handle i Canvas LMS – verktøy for studenter, undervisere og læringsdesignere, med skrivehandlinger låst og valgfri anonymisering av studentdata."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**Canvas MCP** er en åpen kildekode-server for Model Context Protocol av Vishal Sachdev som kobler en AI-klient til en Canvas LMS-instans: agenten kan liste opp en students kommende arbeid, lese oppgavene og innleveringene i et kurs, sende melding til en klasse eller gjøre en tilgjengelighetsrevisjon av et kurs, alt gjennom verktøy som serveren eksponerer i stedet for ad hoc-skraping av skjermen.

## Hva du kan gjøre med den

Serveren leverer tre familier av verktøy. Studentverktøy svarer på «hva forfaller denne uken», «har jeg levert alt», «hvor mange quizforsøk har jeg igjen» mot Canvas' egne `self`-endepunkter. Underviserverktøy lister opp og oppretter oppgaver, leser innleveringer, massevurderer, sender samtaler og henter oppgaveanalyse. Verktøy for læringsdesignere dekker kurskvalitetssjekker og WCAG-tilgjengelighetsskann. Opptil 128 verktøy er tilgjengelige totalt, men standardprofilen registrerer færre, og verktøy bak funksjonsflagg øker antallet. På toppen av verktøyene pakker åtte agentferdigheter flertrinns oppskrifter – en ukeplan, en morgenlig kurshelsesjekk, et beslutningstre for massevurdering, en pipeline for fagfellevurdering, en kursrevisjon før semesteret – som kan installeres i over 40 agenter gjennom `skills.sh`.

## Hvem den er for

Undervisere som vil at en agent skal håndtere den rutinemessige lesingen og meldingsutvekslingen rundt et kurs, og [[institutional-ai-infrastructure|institusjonelle team]] som vurderer hva en agent koblet til LMS-et faktisk kan nå. Læringsdesignere får her det nærmeste man kommer en automatisert kursgjennomgang. Prosjektet er et gjennomarbeidet eksempel på [[agentic-ai|agentisk verktøybruk]] på nivået til én institusjons LMS snarere enn en generisk chatbot.

## Merknader og forbehold

Oppsettet er lokalt: Python 3.11 eller nyere, et Canvas API-token og en URL, og en MCP-klient, med en dobbeltklikkbar utvidelse for Claude Desktop. Den offentlige hostede serveren er lagt ned, så en delt distribusjon betyr selvdrift bak institusjonens egen autentisering. Skriveverktøy er låst – HTTP-servere er skrivebeskyttet med mindre skriveverktøy er uttrykkelig tillatt, slettinger krever bekreftelsestokener, og kodekjøring går i en sandkasse som lukker seg ved feil. Personvernkontrollene er ikke på som standard: anonymisering av svar, maskering av e-post og PII-filtrering må slås på, og README-en er nøye med at disse kan støtte FERPA-forpliktelser uten å etablere samsvar, som avhenger av distribusjonen og AI-leverandøren. Det er ingen telemetri i serveren, men Canvas og den valgte klienten fører sine egne logger. Prosjektet er MIT-lisensiert, aktivt utviklet, og dets egne guider er autoriteten på gjeldende verktøynavn og konfigurasjon.
