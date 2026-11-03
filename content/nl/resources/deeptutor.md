---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "De opensource-release van het agentische tutorframework DeepTutor: één werkruimte voor tutoring, vraaggeneratie, beheersingsoefening, onderzoek en visualisatie, met inspecteerbaar geheugen van de lerende."
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
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**DeepTutor** is de opensource-implementatie van het tutorframework dat in [[intelligent-tutoring|de DeepTutor-studie]] is geëvalueerd, en het is ruim voorbij de reikwijdte van dat artikel gegroeid tot een algemene, agent-native leeromgeving. Tutoring, probleemoplossing, quizgeneratie, beheersingsoefening, onderzoek en visualisatie delen één capability-runtime en één sessiecontext, zodat het leerprofiel dat tijdens het oplossen van problemen wordt opgebouwd, de uitleg en oefenitems daarna bepaalt.

## Wat u ermee kunt doen

Tien modi — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading en Immersive Watching — draaien op dezelfde runtime en putten uit herbruikbare kennisbanken, boeken, schetsen, notebooks, vragenbanken en persona's. Retrieval is bewust multi-engine: geversioneerde RAG-bibliotheken boven LlamaIndex, PageIndex, GraphRAG, LightRAG of een externe LightRAG-server, plus een zelfgehoste WeKnora-basis, een Tencent IMA- of MarginNote-bibliotheek, of een gekoppelde Obsidian-vault. Geheugen is inspecteerbaar in plaats van ondoorzichtig: L1-sporen, L2-samenvattingen en L3-synthese zijn zichtbaar en bewerkbaar, met een Memory Graph die elke samenvatting koppelt aan het bewijs erachter. Een `deeptutor`-binary geeft een terminal-REPL en streamt NDJSON voor elke agent die het als hulpmiddel wil aansturen, en een EduHub-gemeenschap verspreidt installeerbare skills.

## Voor wie het is

Docenten en onderzoekers in het hoger onderwijs die een inzetbare versie willen van het framework waarover het artikel rapporteert, ontwikkelaars die op een pluggable runtime bouwen, en zelfstandig lerenden die bereid zijn een eigen instantie te draaien. Documentatie staat op deeptutor.info.

## Opmerkingen

Gelicentieerd onder Apache 2.0, op versie 1.6.9 per september 2026 met ongeveer 40.000 GitHub-sterren. De gepubliceerde evaluatie erachter — 10,8% gemiddelde verbetering op gepersonaliseerde maten ten opzichte van sterke baselines en 29,4% sterker algemeen agentisch redeneren over vijf backbone-modellen, op de TutorBench-benchmark — wordt samengevat op [[zhao-deeptutor-agentic-personalized-tutoring-2026|de artikelpagina]], waarvan de beperkingen hier ook gelden. Zoals bij elke opensource-AI-stack levert u zelf de sleutels van de modelaanbieder, en een desktop- of serverimplementatie verwacht Python 3.11 en Node.

## Gerelateerde concepten
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
