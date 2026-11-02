---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "Une application de bureau gratuite et open source (AGPL-3.0) dans laquelle des agents IA mesurent ce qu'un apprenant comprend déjà, planifient une carte de dépendances vers l'objectif, enseignent une étape de raisonnement à la fois et adaptent l'exercice — avec un graphe de connaissances persistant de propositions et de chaînes de raisonnement que les sessions ultérieures lisent au lieu de repartir de zéro."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**LearnHarness** est une application de bureau pour l'apprentissage [[agentic-ai|assisté par agent]] qui organise une leçon autour de [[prior-knowledge|ce qu'un apprenant comprend déjà]] plutôt qu'autour d'une liste de sujets. Le projet décrit quatre mouvements : **mesurer**, en sondant les idées dont dépend l'objectif pour trouver où la compréhension s'arrête ; **planifier**, en dérivant une carte de dépendances vers l'objectif et en la présentant comme une carte de leçon ; **enseigner**, en travaillant une étape de raisonnement à la fois selon un rythme prédire–expliquer–vérifier, afin que les confusions soient réparées avant que quoi que ce soit ne se construise dessus ; et **s'exercer**, avec un flux de problèmes ciblés sur les difficultés propres à l'apprenant.

## Ce que vous pouvez en faire

L'entrée distinctive est le champ de pensée : les apprenants écrivent ou dictent leur raisonnement et leur incertitude au lieu de seulement répondre, ce que le projet traite comme la façon dont l'agent se représente le raisonnement plutôt qu'un registre juste/faux. L'application peut aussi rechercher des questions en arrière-plan, générer des explications visuelles et construire des démonstrations interactives.

Ce qui s'accumule est un [[knowledge-graph|graphe de connaissances]] de propositions et de chaînes de raisonnement, relié à ses sessions d'origine et lu par les agents d'enseignement et d'exercice ultérieurs comme contexte ; des notes peuvent être importées. Le projet précise que le graphe stocke des idées et des connexions, non des évaluations de capacité.

## À qui il s'adresse

Aux apprenants autonomes qui travaillent sur des contenus difficiles, ainsi qu'aux enseignants ou aux développeurs qui veulent voir à quoi ressemble un [[intelligent-tutoring|tuteur IA]] natif de l'agent quand ses invites et son état sont inspectables. Il est écrit en TypeScript, s'exécute depuis les sources, et ses tests sont documentés comme déterministes, sans appels au modèle.

## Notes et réserves

La gratuité couvre le logiciel, pas l'inférence : les apprenants apportent leurs clés de fournisseur, un abonnement, une CLI Claude Code locale ou tout point de terminaison compatible OpenAI, et paient le fournisseur sans marge ; un compteur en direct estime uniquement les coûts d'API connus. Les enregistrements, les conversations et les clés restent sur la machine sous forme de fichiers simples, mais le projet avertit que le stockage local ne signifie pas un traitement hors ligne, puisque les requêtes au modèle, la dictée optionnelle et la recherche web atteignent toutes des services externes. L'installeur Windows x64 n'est pas signé, donc Windows affichera un avertissement. Aucune étude d'efficacité n'est rapportée, si bien que l'argument repose sur la justification énoncée plutôt que sur des résultats mesurés ; le dépôt comptait environ 4 800 étoiles lors de la vérification du 2 novembre 2026.

## Concepts liés

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
