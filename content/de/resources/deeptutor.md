---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-10-10T09:50:22-04:00"
type: resource
summary: "Die Open-Source-Veröffentlichung des agentischen Tutor-Frameworks DeepTutor: ein Arbeitsbereich für Tutoring, Fragenerzeugung, Meisterschaftsübungen, Forschung und Visualisierung, mit einsehbarem Gedächtnis der Lernenden."
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
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**DeepTutor** ist die Open-Source-Implementierung des in [[intelligent-tutoring|der DeepTutor-Studie]] evaluierten Tutor-Frameworks, und es ist weit über den Rahmen jener Arbeit hinaus zu einem allgemeinen agent-nativen Lernarbeitsbereich gewachsen. Tutoring, Problemlösen, Quiz-Erzeugung, Meisterschaftsübungen, Forschung und Visualisierung teilen eine gemeinsame Fähigkeiten-Runtime und einen gemeinsamen Sitzungskontext, sodass das beim Problemlösen aufgebaute Lernendenprofil die folgenden Erklärungen und Übungsaufgaben prägt.

## Was man damit tun kann

Zehn Modi – Chat, Fragen stellen, Quiz, Forschung, Visualisieren, Lösen, Kursstudium, Meisterschaftspfad, immersives Lesen und immersives Schauen – laufen auf derselben Runtime und greifen auf wiederverwendbare Wissensbasen, Bücher, Entwürfe, Notizbücher, Fragensammlungen und Personas zurück. Die Suche ist bewusst multi-engine: versionierte RAG-Bibliotheken über LlamaIndex, PageIndex, GraphRAG, LightRAG oder einen entfernten LightRAG-Server, dazu eine selbst gehostete WeKnora-Basis, eine Tencent-IMA- oder MarginNote-Bibliothek oder ein verknüpfter Obsidian-Tresor. Das Gedächtnis ist einsehbar statt opak: L1-Spuren, L2-Oberflächenzusammenfassungen und L3-Synthesen sind sichtbar und bearbeitbar, wobei ein Memory Graph jede Zusammenfassung mit der dahinterliegenden Evidenz verknüpft. Eine `deeptutor`-Binärdatei bietet ein Terminal-REPL und streamt NDJSON für jeden Agenten, der das Werkzeug als Werkzeug steuern will, und eine EduHub-Community verteilt installierbare Skills.

## Für wen es gedacht ist

Lehrende und Forschende in der Hochschulbildung, die eine einsetzbare Version des in der Studie beschriebenen Frameworks wollen, Entwickelnde, die auf einer erweiterbaren Runtime aufbauen, und selbstgesteuert Lernende, die bereit sind, eine eigene Instanz zu betreiben. Die Dokumentation liegt auf deeptutor.info.

## Anmerkungen

Lizenziert unter Apache 2.0, bei Version 1.6.9 ab September 2026 mit etwa 40.000 GitHub-Sternen. Die veröffentlichte Evaluation dahinter – 10.8% durchschnittliche Verbesserung bei personalisierten Metriken gegenüber starken Baselines und 29.4% stärkere allgemeine agentische Schlussfolgerung über fünf Backbone-Modelle hinweg, auf dem TutorBench-Benchmark – ist auf [[deeptutor|der Artikelseite]] zusammengefasst, deren Grenzen auch hier gelten. Wie bei jedem Open-Source-KI-Stack liefern Sie selbst die Zugangsschlüssel der Modellanbieter, und eine Desktop- oder Server-Bereitstellung erwartet Python 3.11 und Node.

## Verbundene Konzepte

[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
