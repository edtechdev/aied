---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "En MCP-server med öppen källkod som låter Claude, Cursor, Codex och andra agenter läsa och agera inuti Canvas LMS – verktyg för studenter, lärare och lärandedesigners, med grindade skrivåtgärder och valfri anonymisering av studentdata."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**Canvas MCP** är en MCP-server (Model Context Protocol) med öppen källkod av Vishal Sachdev som kopplar en AI-klient till en Canvas LMS-instans: agenten kan lista en students kommande arbete, läsa en kurs uppgifter och inlämningar, skicka meddelanden till en klass eller granska en kurs för tillgänglighet, allt genom verktyg som servern exponerar i stället för ad hoc-skrapning av skärmen.

## Vad du kan göra med den

Servern levererar tre familjer av verktyg. Studentverktyg svarar på ”vad ska göras den här veckan”, ”har jag lämnat in allt”, ”hur många quizförsök har jag kvar” mot Canvas egna `self`-endpoints. Lärarverktyg listar och skapar uppgifter, läser inlämningar, massbetygsätter, skickar meddelanden och hämtar analys av uppgifter. Verktyg för lärandedesign omfattar kurskvalitetskontroller och WCAG-tillgänglighetsskanningar. Upp till 128 verktyg finns totalt, även om standardprofilen registrerar färre och funktionsgrindade verktyg höjer antalet. Ovanpå verktygen paketerar åtta agentskills flerstegsrecept – en veckoplan, en morgonkontroll av kursens hälsa, ett beslutsträd för massbetygsättning, en pipeline för kamratgranskning, en kursgranskning före terminsstart – installeringsbara i 40+ agenter via `skills.sh`.

## Vem den är för

Lärare som vill att en agent sköter den rutinmässiga läsningen och meddelandena kring en kurs, och [[institutional-ai-infrastructure|institutionella team]] som utvärderar vad en agent kopplad till LMS:et faktiskt kan nå. Lärandedesigners får det närmaste man kommer en automatiserad kursgranskning här. Projektet är ett genomarbetat exempel på [[agentic-ai|agentiska verktyg]] på nivån för en institutions LMS snarare än en allmän chattbot.

## Anteckningar och förbehåll

Installationen är lokal: Python 3.11 eller senare, en Canvas-API-token och -URL samt en MCP-klient, med ett dubbelklickbart tillägg för Claude Desktop. Den publika hostade servern har avvecklats, så en delad driftsättning innebär självdrift bakom institutionens egen autentisering. Skrivverktyg är grindade – HTTP-servrar är skrivskyddade om inte skrivverktyg uttryckligen tillåts, borttagningar kräver bekräftelsetoken och kodexekvering körs i en sandlåda som faller stängt. Integritetskontrollerna är opt-in: anonymisering av svar, maskering av e-post och PII-filtrering måste aktiveras, och README är noga med att dessa kan stödja FERPA-skyldigheter utan att fastställa efterlevnad, vilket beror på driftsättningen och AI-leverantören. Det finns ingen telemetri i servern, men Canvas och den valda klienten för sina egna loggar. Projektet är MIT-licensierat, aktivt utvecklat och dess egna guider är auktoriteten för aktuella verktygsnamn och konfiguration.

## Anslutna begrepp

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
