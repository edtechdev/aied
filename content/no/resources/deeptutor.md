---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Åpen kildekode-utgivelsen av det agentiske veiledningsrammeverket DeepTutor: ett arbeidsområde for veiledning, spørsmålsgenerering, mestringstrening, forskning og visualisering, med et minne om den lærende som kan inspiseres."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**DeepTutor** er åpen kildekode-implementeringen av veiledningsrammeverket som ble evaluert i [[intelligent-tutoring|DeepTutor-studien]], og det har vokst godt forbi artikkelens omfang til et generelt agentnativt læringsarbeidsområde. Veiledning, problemløsning, quizgenerering, mestringstrening, forskning og visualisering deler én kjøretidskapabilitet og én øktkontekst, så læringsprofilen som bygges mens problemer løses, betinger forklaringene og øvingsoppgavene som følger.

## Hva du kan gjøre med det

Ti modi – Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading og Immersive Watching – kjører på samme kjøretid og trekker på gjenbrukbare kunnskapsbaser, bøker, utkast, notatbøker, spørsmålsbanker og personaer. Gjenfinningen er bevisst flermotorisk: versjonerte RAG-biblioteker over LlamaIndex, PageIndex, GraphRAG, LightRAG eller en ekstern LightRAG-server, pluss en selvhostet WeKnora-base, et Tencent IMA- eller MarginNote-bibliotek, eller et tilkoblet Obsidian-hvelv. Minnet kan inspiseres snarere enn å være ugjennomsiktig: L1-spor, L2-overflatesammendrag og L3-syntese er synlige og redigerbare, med en minnegraf som knytter hvert sammendrag til belegget bak det. En `deeptutor`-binær gir en terminal-REPL og strømmer NDJSON for enhver agent som vil styre den som et verktøy, og et EduHub-fellesskap distribuerer installerbare ferdigheter.

## Hvem det er for

Undervisere og forskere i høyere utdanning som vil ha en distribuerbar versjon av rammeverket artikkelen rapporterer om, utviklere som bygger på en pluggbar kjøretid, og selvstyrte lærende som er villige til å drive sin egen instans. Dokumentasjonen ligger på deeptutor.info.

## Merknader

Lisensiert under Apache 2.0, i versjon 1.6.9 per september 2026 med omkring 40 000 GitHub-stjerner. Den publiserte evalueringen bak – 10,8 % gjennomsnittlig forbedring på personaliserte målinger over sterke baselines og 29,4 % sterkere generell agentisk resonnering på tvers av fem grunnmodeller, på TutorBench-benkmarken – er oppsummert på [[zhao-deeptutor-agentic-personalized-tutoring-2026|articlesiden]], hvis begrensninger også gjelder her. Som med enhver AI-stack med åpen kildekode leverer du selv nøkler til modellleverandører, og en distribusjon på skrivebord eller server forventer Python 3.11 og Node.

## Tilknyttede begreper

[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
