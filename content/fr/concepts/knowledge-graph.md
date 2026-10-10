---
title: "Graphe de connaissances"
created: "2026-08-09T16:55:17-04:00"
updated: "2026-10-10T03:26:10-04:00"
type: concept
foundations: [ai-education, curriculum-design]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, student-modeling]
confidence: high
translation_of: concepts/knowledge-graph
source_updated: "2026-10-09T09:25:11-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Graphe de connaissances (knowledge graph)** — une représentation structurée de concepts et de leurs relations, utilisée pour modéliser les connaissances d'un domaine, la compréhension de l'apprenant et les dépendances d'apprentissage dans les systèmes d'[[ai-education|IA en éducation]]. Les graphes de connaissances permettent aux systèmes d'IA de raisonner sur ce que les étudiants savent, ce qu'ils doivent apprendre ensuite, et sur la manière dont les concepts sont liés entre eux.

## Questions à examiner

- Un graphe de connaissances ne capte pas seulement des concepts, mais aussi leurs relations — prérequis, similarité, hiérarchie. Pourquoi savoir comment les concepts sont liés pourrait-il être plus utile à un système adaptatif qu'une liste plate de compétences ?
- À quoi ressemblent les relations de prérequis dans un domaine comme le vôtre ? Pouvez-vous penser à un sujet pour lequel les étudiants butent régulièrement parce qu'il leur manque un concept fondamental que le graphe révélerait ?
- La page décrit l'utilisation des graphes de connaissances pour détecter les lacunes de connaissances — les cas où les apprenants n'ont pas acquis les concepts fondamentaux. Comment la mise en évidence d'une telle lacune pourrait-elle changer ce qu'un tuteur d'IA décide d'enseigner ensuite ?
- Les graphes de connaissances peuvent être construits manuellement ou automatiquement par des LLM à partir de textes éducatifs. Quels sont les risques de laisser une IA construire la structure conceptuelle sur laquelle un tuteur raisonnera ensuite ?
- Si les graphes de connaissances fournissent la structure de domaine sur laquelle les agents d'IA raisonnent, qu'advient-il de la confiance et de l'exactitude lorsque le graphe lui-même contient une erreur ou une relation biaisée ?
- Un graphe de connaissances est présenté comme l'ossature structurelle qui rend possible un diagnostic fin et des parcours personnalisés. Dans votre propre [[teacher-role|enseignement]] ou votre propre conception, que faudrait-il qu'un graphe de connaissances de votre discipline capte — et que laisserait-il de côté ?

## Introduction

Les graphes de connaissances constituent l'ossature structurelle de nombreux systèmes éducatifs intelligents. À la différence des listes plates de compétences ou de concepts, les graphes de connaissances captent les relations de prérequis, la similarité et l'organisation hiérarchique — autant d'éléments essentiels pour l'[[adaptive-learning|apprentissage adaptatif]], le [[knowledge-tracing|traçage des connaissances]] et la [[student-modeling|modélisation de l'apprenant]].

## Comment les graphes de connaissances sont utilisés en AIED

Les graphes de connaissances constituent un mécanisme structurel récurrent dans les [[research-methods-aied|recherches]] en AIED de la base de connaissances, au service de plusieurs rôles distincts :

- Les modèles de **[[knowledge-tracing|traçage des connaissances]]** utilisent des graphes de concepts pour propager les estimations de compétence des étudiants à travers les compétences apparentées, ce qui améliore la précision de prédiction lorsque les données sont peu nombreuses.
- Les systèmes de **[[student-modeling|modélisation de l'apprenant]]** exploitent les graphes de connaissances pour représenter ce que les apprenants savent d'une manière sémantiquement signifiante, ce qui rend possible un diagnostic fin.
- Les plateformes d'**[[adaptive-learning|apprentissage adaptatif]]** utilisent des graphes de prérequis pour séquencer les contenus et recommander des parcours de [[personalized-learning|apprentissage personnalisé]].
- **Le choix de l'algorithme sur le graphe change les résultats.** Dans G4L, la propagation de la maîtrise à travers un Evolving Knowledge Space Graph avec propagation bayésienne des connaissances a produit +24% de connaissances mesurées (0.717 → 0.887), contre +5% pour la Knowledge Space Theory et +1% pour le Weighted Distance Dependent Induction ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).
- Les cadres de **[[cognitive-diagnosis|diagnostic cognitif]]** comme [[xie-hillm-cd-2026|HiLLM-CD]] construisent des arbres de concepts à partir de textes éducatifs à l'aide de LLM, ce qui supprime l'annotation manuelle.
- **Tutorat augmenté par un graphe de connaissances :** [[quantum-education-its|ITAS]] utilise un graphe de connaissances de concepts quantiques (avec des relations de prérequis explicites) pour piloter un système de tutorat multi-agents, parcourant le graphe pour sélectionner les sujets suivants lorsque la matière est contre-intuitive.
- **Modélisation des curricula et des cours :** [[coursegraph-cs-course-comparison-2026|CourseGraph]] compare les structures de cours d'informatique entre établissements à l'aide de représentations graphiques ; [[learnity-graphs-lifelong-learning-framework-2026|les graphes Learnity]] modélisent les parcours de [[lifelong-learning|formation tout au long de la vie]].
- **Apprentissage des relations de prérequis :** [[proprl-prerequisite-relation-learning|ProPrL]] apprend les relations de prérequis entre concepts, formalisant les arêtes que les graphes de connaissances encodent.
- **Détection des lacunes de connaissances :** [[knowledge-gap-detection-ai-tas|la détection des lacunes de connaissances]] utilise un raisonnement fondé sur les graphes dans les assistants pédagogiques à base d'IA afin d'identifier les points où les apprenants n'ont pas les concepts fondamentaux.
- **Raisonnement [[multimodal|multimodal]] et explicable :** les [[multimodal-knowledge-graph-educational-reasoning|graphes de connaissances multimodaux]] étendent la structure de graphe à travers les modalités de contenu ; les [[fair-explainable-edu-recommendations|recommandations équitables et explicables]] combinent des plongements issus de graphes de connaissances avec une modélisation séquentielle (un cadre hybride HKG-GRU).
- **Graphes structurés pédagogiquement pour la recommandation de ressources :** [[hybrid-cf-kg-recommendation-multimodal-teaching-2026|Liu, Sun & Song (2026)]] décomposent chaque entité de ressource pédagogique en quatre dimensions pédagogiques (contexte d'enseignement, niveau cognitif, caractéristique technologique, adaptabilité culturelle), calculent une similarité sémantique dépendant de l'utilisateur sur ces dimensions, et la fusionnent avec le filtrage collaboratif via un coefficient sensible à la compétence et à la progression — encodant la structure pédagogique directement dans le signal de recommandation plutôt qu'en traitant les ressources comme de simples articles de consommation.
- **Bases de connaissances à base d'ontologies :** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova (2026)]] propose une architecture de base de connaissances hybride et stratifiée fondée sur la logique de descriptions, qui remplace les modèles classiques d'ITS à ontologie unique par des **systèmes d'ontologies mises en correspondance** — en y ajoutant des connaissances implicites procédurales (à base de règles), probabilistes/floues et extraites par apprentissage automatique — ainsi qu'un cadre de métadonnées pour décrire, découvrir et réutiliser les ontologies éducatives.
- **[[scaffolding|Étayage]] et écriture :** [[veriforge-narrative-drafting-scaffolding-2026|Veriforge]] et le [[visual-query-tracer-declarative-logic-learning|traçage visuel de requêtes]] appliquent une structure fondée sur les graphes à la rédaction narrative et à l'apprentissage de la logique déclarative.
- **Graphes littéraires curatés par des humains, et ce qu'un audit expose :** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] met en graphe des prémisses littéraires — 1,455 enregistrements d'axiomes, 1,464 correspondances vers 149 œuvres, et 472 relations typées — avec des [[llm|modèles de langue]] proposant des formulations candidates que des curateurs humains ont sélectionnées et fondées. Son audit recalculé est aussi instructif que sa structure : chaque point d'ancrage se résout et aucun doublon ni auto-lien ne subsiste, et pourtant 1,448 des 1,455 axiomes correspondent à exactement une œuvre (la réutilisation entre œuvres est donc rare), la taxonomie de contextes ne parvient pas à séparer ses deux types de contextes, et aucun enregistrement de provenance ne survit, ce qui laisse l'instantané incapable de reconstruire son propre pipeline. La validité structurelle n'est pas la qualité interprétative, et un graphe curaté sans provenance ne peut être ni audité ni rafraîchi.

## Construction de graphes de connaissances pilotée par les LLM

Des travaux récents explorent l'utilisation des [[llm|LLM]] pour construire automatiquement des graphes de connaissances à partir de contenus éducatifs. Le cadre [[xie-hillm-cd-2026|HiLLM-CD]] emploie des pipelines multi-agents à base de LLM pour générer des liens exercice-concept et des arbres de concepts hiérarchiques, réduisant la dépendance à l'annotation experte. Cela rejoint les applications plus larges de l'[[generative-ai|IA générative]] à la conception de programmes et à l'organisation automatisée des contenus, ainsi que la [[rag|génération augmentée par la recherche documentaire]], où une connaissance structurée en graphe peut améliorer la qualité de la recherche par rapport à une recherche par similarité plate.

## Relations avec d'autres concepts

Les graphes de connaissances sont liés au [[learning-design|design pédagogique]] (définir quoi enseigner), à la [[curriculum-design|conception de programmes]] (comment le séquencer) et aux [[learning-analytics|analytiques de l'apprentissage]] (extraire des informations des données d'interaction des étudiants). Ils sont fondamentaux pour les systèmes de [[intelligent-tutoring|tutorat intelligent]], qui ont besoin de représentations structurées des domaines éducatifs. À mesure que les agents d'IA se généralisent dans l'éducation, les graphes de connaissances fournissent la structure de domaine sur laquelle raisonnent les [[agentic-ai|systèmes agentiques]] — un schéma observé dans [[quantum-education-its|ITAS]] et dans les assistants pédagogiques de détection des lacunes de connaissances.

## Connected Concepts

- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[learning-analytics]]
- [[curriculum-design]]
- [[learning-design]]
- [[generative-ai]]
- [[llm]]
- [[rag]]
- [[agentic-ai]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)
- [[recommender-systems-and-learning-paths]]
## Connected Articles

- [[incipit-axiom-grounded-scaffolding-literary-creation-2026]] — A curator-built graph of 1,455 literary axioms with a structural audit and no provenance record (Liu & Zhao 2026)
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[learnity-graphs-lifelong-learning-framework-2026]] — Learnity graphs for lifelong learning
- [[veriforge-narrative-drafting-scaffolding-2026]] — Veriforge: narrative-drafting scaffolds
- [[quantum-education-its]] — Quantum education intelligent tutoring (ITAS)
- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal knowledge graphs for educational reasoning
- [[coursegraph-cs-course-comparison-2026]] — CourseGraph: CS course comparison
- [[proprl-prerequisite-relation-learning]] — ProPrL: prerequisite-relation learning
- [[knowledge-gap-detection-ai-tas]] — Knowledge-gap detection in AI teaching assistants
- [[visual-query-tracer-declarative-logic-learning]] — Visual query tracer for declarative logic learning
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations
- [[hybrid-cf-kg-recommendation-multimodal-teaching-2026]] — Hybrid CF–KG cross-domain recommendation for multimodal teaching resources
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-driven cognitive diagnosis
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
