---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "La publication open source du cadre de tutorat agentique DeepTutor : un espace de travail unique pour le tutorat, la génération de questions, la pratique vers la maîtrise, la recherche et la visualisation, avec une mémoire d'apprenant inspectable."
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
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**DeepTutor** est l'implémentation open source du cadre de tutorat évalué dans [[intelligent-tutoring|l'étude DeepTutor]], et il a largement dépassé la portée de cet article pour devenir un espace de travail d'apprentissage général fondé sur les agents. Tutorat, résolution de problèmes, génération de quiz, pratique vers la maîtrise, recherche et visualisation partagent un même moteur de capacités et un même contexte de session, si bien que le profil d'apprenant construit pendant la résolution de problèmes conditionne les explications et les exercices qui suivent.

## Ce que vous pouvez en faire

Dix modes — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading et Immersive Watching — s'exécutent sur le même moteur, en s'appuyant sur des bases de connaissances réutilisables, des livres, des brouillons, des carnets, des banques de questions et des personas. La recherche est délibérément multi-moteurs : des bibliothèques RAG versionnées sur LlamaIndex, PageIndex, GraphRAG, LightRAG ou un serveur LightRAG distant, plus une base WeKnora auto-hébergée, une bibliothèque Tencent IMA ou MarginNote, ou un coffre Obsidian relié. La mémoire est inspectable plutôt qu'opaque : les traces L1, les résumés de surface L2 et la synthèse L3 sont visibles et modifiables, avec un graphe de mémoire reliant chaque résumé aux preuves qui le fondent. Un binaire `deeptutor` offre un REPL de terminal et diffuse des flux NDJSON pour tout agent qui souhaite le piloter comme un outil, et une communauté EduHub distribue des compétences installables.

## À qui cela s'adresse

Aux enseignants et chercheurs de l'enseignement supérieur qui veulent une version déployable du cadre décrit dans l'article, aux développeurs qui construisent sur un moteur enfichable, et aux apprenants autodirigés disposés à faire tourner leur propre instance. La documentation se trouve sur deeptutor.info.

## Remarques

Sous licence Apache 2.0, en version 1.6.9 à septembre 2026, avec environ 40 000 étoiles sur GitHub. L'évaluation publiée qui le soutient — 10,8 % d'amélioration moyenne sur les métriques personnalisées par rapport à de solides lignes de base et 29,4 % de raisonnement agentique général plus fort sur cinq modèles de référence, sur le benchmark TutorBench — est résumée sur [[deeptutor|la page de l'article]], dont les limites s'appliquent également ici. Comme pour toute pile IA open source, vous fournissez les clés des fournisseurs de modèles, et un déploiement sur poste de travail ou serveur attend Python 3.11 et Node.

## Concepts liés
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
