---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Open source-udgivelsen af det agentbaserede vejledningsframework DeepTutor: ét arbejdsrum til vejledning, spørgsmålsgenerering, mestringstræning, research og visualisering med inspicerbar elevhukommelse."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**DeepTutor** er open source-implementeringen af det vejledningsframework, der evalueres i [[intelligent-tutoring|DeepTutor-studiet]], og det er vokset godt ud over den artikels omfang til et generelt agentnativt læringsarbejdsrum. Vejledning, problemløsning, quizgenerering, mestringstræning, research og visualisering deler én capability-runtime og én sessionskontekst, så den elevprofil, der bygges under problemløsningen, betinger de forklaringer og øvelsesopgaver, der følger.

## Hvad du kan gøre med det

Ti tilstande — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading og Immersive Watching — kører på samme runtime og trækker på genanvendelige vidensbaser, bøger, udkast, notesbøger, spørgsmålsbanker og personaer. Retrieval er med vilje multi-engine: versionerede RAG-biblioteker over LlamaIndex, PageIndex, GraphRAG, LightRAG eller en ekstern LightRAG-server plus en selvhostet WeKnora-base, et Tencent IMA- eller MarginNote-bibliotek eller et tilknyttet Obsidian-vault. Hukommelsen er inspicerbar snarere end uigennemsigtig: L1-spor, L2-overfladesummeringer og L3-syntese er synlige og redigerbare, med en Memory Graph, der linker hver summering til den evidens, der ligger bag. En `deeptutor`-binær giver en terminal-REPL og streamer NDJSON til enhver agent, der vil drive den som et værktøj, og et EduHub-fællesskab distribuerer installerbare færdigheder.

## Hvem det er til

Undervisere og forskere i videregående uddannelse, der vil have en deployerbar version af det framework, artiklen rapporterer om, udviklere der bygger på en pluggable runtime, og selvstændige lærere, der er villige til at køre deres egen instans. Dokumentationen ligger på deeptutor.info.

## Noter

Licenseret under Apache 2.0, i version 1.6.9 pr. september 2026 med omkring 40.000 GitHub-stjerner. Den offentliggjorte evaluering bag det — 10,8 % gennemsnitlig forbedring på personaliserede målinger over stærke baselines og 29,4 % stærkere generel agentbaseret ræsonnering på tværs af fem backbone-modeller, på TutorBench-benchmarket — er opsummeret på [[zhao-deeptutor-agentic-personalized-tutoring-2026|artikelsiden]], hvis begrænsninger også gælder her. Som med enhver open source-AI-stak leverer du selv nøgler til modeludbydere, og en desktop- eller serverudrulning forventer Python 3.11 og Node.

## Relaterede begreper
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
