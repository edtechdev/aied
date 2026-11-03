---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Den öppna källkodsutgåvan av det agentiska handledningsramverket DeepTutor: en arbetsyta för handledning, frågegenerering, färdighetsträning, research och visualisering, med inspekterbart minne."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**DeepTutor** är den öppna källkodsimplementationen av det handledningsramverk som utvärderas i [[intelligent-tutoring|DeepTutor-studien]], och det har vuxit långt förbi artikelns omfång till en allmän agentnativ lärarbetsyta. Handledning, problemlösning, quizgenerering, färdighetsträning, research och visualisering delar en körningsmiljö för förmågor och en sessionskontext, så den elevprofil som byggs medan problem löses påverkar de förklaringar och övningsuppgifter som följer.

## Vad du kan göra med det

Tio lägen – Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading och Immersive Watching – körs på samma runtime och hämtar från återanvändbara kunskapsbaser, böcker, utkast, anteckningsböcker, frågebanker och personas. Hämtningen är medvetet multi-motor: versionerade RAG-bibliotek över LlamaIndex, PageIndex, GraphRAG, LightRAG eller en fjärransluten LightRAG-server, plus en självhostad WeKnora-bas, ett Tencent IMA- eller MarginNote-bibliotek, eller ett länkat Obsidian-valv. Minnet är inspekterbart snarare än ogenomskinligt: L1-spår, L2-ytliga sammanfattningar och L3-syntes är synliga och redigerbara, med en minnesgraf som kopplar varje sammanfattning till evidensen bakom den. En `deeptutor`-binär ger en terminal-REPL och strömmar NDJSON för varje agent som vill driva den som ett verktyg, och en EduHub-gemenskap distribuerar installerbar skills.

## Vem det är för

Lärare och forskare inom högre utbildning som vill ha en driftsättbar version av ramverket som artikeln rapporterar om, utvecklare som bygger på en utbytbar runtime, och självstyrda lärar som är beredda att köra en egen instans. Dokumentationen finns på deeptutor.info.

## Anteckningar

Licensierad under Apache 2.0, i version 1.6.9 i september 2026 med ungefär 40 000 stjärnor på GitHub. Den publicerade utvärderingen bakom – 10,8 % genomsnittlig förbättring på personaliserade mått mot starka baslinjer och 29,4 % starkare allmänt agentiskt resonemang över fem basmodeller, på TutorBench-benchmarken – sammanfattas på [[zhao-deeptutor-agentic-personalized-tutoring-2026|artikelsidan]], vars begränsningar gäller även här. Som med varje öppen AI-stack levererar du själv nycklar till modellleverantören, och en skrivbords- eller serverdriftsättning förutsätter Python 3.11 och Node.

## Anslutna begrepp
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
