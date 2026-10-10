---
title: "Diagnostic cognitif"
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-10T03:05:33-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Le diagnostic cognitif** — l'inférence de l'état latent des connaissances d'un apprenant — les concepts, compétences et idées fausses précises qu'il possède ou qui lui manquent — à partir de ses réponses ou de son comportement. C'est la contrepartie, du côté de l'évaluation, du [[knowledge-tracing|traçage des connaissances]], centrée sur la caractérisation de *ce que* sait un étudiant plutôt que sur la seule prédiction de sa performance suivante.

## Questions à examiner

- Le diagnostic cognitif infère l'état latent des connaissances d'un apprenant — les concepts, compétences et idées fausses précises qu'il possède ou qui lui manquent — à partir de ses réponses, plutôt que de se contenter de prédire sa note suivante. Avant de lire, quelle différence attendriez-vous entre « prédire la note d'un étudiant » et « diagnostiquer ce qu'il ne comprend réellement pas » ?
- Une idée clé est le « piège de la bonne réponse » — lorsqu'une réponse juste masque un raisonnement erroné. Vous est-il arrivé d'être convaincu qu'un étudiant avait compris quelque chose parce qu'il avait trouvé la bonne réponse, pour découvrir ensuite une idée fausse sous-jacente ? Comment un diagnostic pourrait-il faire apparaître cela là où une note ne le pourrait pas ?
- La page distingue le diagnostic cognitif (un instantané statique et fin de ce que l'apprenant détient actuellement) du traçage des connaissances (la dynamique temporelle de la maîtrise au fil du temps). Pourquoi un tuteur intelligent aurait-il besoin des deux — pour savoir ce qui est faux et pour savoir quoi enseigner ensuite ?
- Un principe de conception ici est de séparer le diagnostic de la rétroaction : les tuteurs LLM confirment les étapes correctes mais rejettent à l'excès des raisonnements valides et valident à l'excès des erreurs, et un diagnostic exact ne produit pas de façon fiable une rétroaction actionnable. Pourquoi savoir ce qui est faux pourrait-il néanmoins ne pas produire une prochaine étape utile ?
- Le diagnostic à l'ère des LLM s'étend des questions à choix multiples aux travaux ouverts, manuscrits et conversationnels. Que pourrait-il se produire de fâcheux si une IA diagnostique une idée fausse à partir d'un travail qu'elle ne peut pas pleinement comprendre — et comment vérifieriez-vous que le diagnostic lui-même est digne de confiance ?

## Introduction

Alors que le traçage des connaissances estime généralement une maîtrise scalaire au fil du temps, le diagnostic cognitif produit un profil plus granulaire : quelles composantes de connaissances sont maîtrisées, lesquelles sont fragiles, et quelles idées fausses sont présentes. Ce profil est le substrat de l'[[personalized-learning|apprentissage personnalisé]], du [[intelligent-tutoring|tutorat intelligent]] et de l'[[adaptive-learning|apprentissage adaptatif]].

### How cognitive diagnosis works

- **Les modèles diagnostiques :** des modèles psychométriques (souvent rattachés à l'[[item-response-theory|théorie de la réponse à l'item]] et à la [[educational-measurement|mesure en éducation]]) infèrent des états latents de compétences à partir de configurations de réponses correctes et incorrectes, parfois par des modèles de diagnostic cognitif qui rattachent les items à plusieurs composantes de connaissances.
- **La recherche automatique de modèles :** parce qu'aucun modèle diagnostique unique ne convient à chaque apprenant, les approches fondées sur l'[[machine-learning|AutoML]] (par ex. la recherche d'architecture cognitive neuronale personnalisée) génèrent des modèles diagnostiques pour des profils d'apprenants hétérogènes — intégrant des données éducatives [[multimodal|multimodales]] pour permettre une analyse dynamique des processus d'apprentissage et un diagnostic cognitif propre à chaque apprenant, plutôt que de s'appuyer sur des résultats d'[[summative-assessment|examen]] statiques et de simples indicateurs statistiques ([[personalized-neural-cognitive-architecture-search-2026]]).
- **Les données de réponse :** le diagnostic s'appuie sur les réponses aux évaluations, aux indices, à la [[help-seeking|recherche d'aide]] et au temps passé sur la tâche — des signaux plus riches que les scores bruts.
- **Le diagnostic fondé sur les LLM :** les approches plus récentes utilisent les [[llm|grands modèles de langue]] pour diagnostiquer à partir de travaux ouverts ou manuscrits, et pour identifier les [[misconceptions|idées fausses]] précises derrière une erreur (par ex. le « piège de la bonne réponse » où une réponse juste masque un raisonnement erroné). Deux résultats de 2026 bornent la portée de ce diagnostic. [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] a supervisé le raisonnement diagnostique comme l'une des quatre capacités d'une famille ouverte de 4B/9B/27B, et le diagnostic de l'état des connaissances est resté sa capacité mesurée la plus faible — 54.04% à 27B et 53.55% à 9B, si proches que tripler les paramètres n'a pas comblé l'écart — alors que le notateur LLM de [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] était corrélé à la maîtrise réelle à r = 0.68 sur les réponses regroupées mais seulement à r ≈ 0.15 au sein du palier de capacités le plus faible (r ≈ 0.48 pour les mixtes, 0.41 pour les forts), si bien que la fiabilité diagnostique suit le niveau de capacité de l'apprenant autant que celui du modèle.
- **Diagnostiquer les erreurs courantes à l'échelle de la cohorte, et non une réponse à la fois.** [[llm-common-modeling-mistakes-formalisms-2026|Killich et al. (2026)]] inversent la direction habituelle : plutôt que de diagnostiquer l'erreur d'un seul apprenant, un [[llm]] propose des transformations candidates de correction de bugs qui rattachent les formalisations incorrectes à des formalisations correctes sur l'ensemble d'un jeu de données éducatif, et chaque candidate est validée algorithmiquement avant d'être conservée. Sur 6.106 paires de formalisations correctes et incorrectes de logique propositionnelle, le flux de travail a découvert 248 grappes de transformations expliquant 5.156 paires (84.44%), contre 4.370 (71.57%) pour les erreurs choisies à la main de l'état de l'art précédent, et il a retrouvé les erreurs qu'un expert du domaine avait identifiées manuellement dans la littérature. Le regroupement classe les candidates en groupes à transformation unique, à transformations équivalentes et hiérarchiques, et le graphe de corrélation résultant peut être visualisé pour les enseignants ; le même pipeline s'est transféré à la logique modale et aux expressions régulières, où une seule transformation de disjonction en conjonction couvrait 98.80% de sa grappe de 334 paires. C'est une voie d'accès à l'inventaire des idées fausses dont un modèle diagnostique a besoin avant de pouvoir être ajusté.
- **La récupération de la solution correcte, et non la simulation d'erreur, est le goulot d'étranglement.** Les modèles ont construit une solution dans 95.2% des traces de distracteurs et simulé une idée fausse Eedi précise avec une exactitude de 0.92, or fournir la réponse correcte a tout de même augmenté la correspondance avec les distracteurs humains (0.52 → 0.56) — la défaillance se situe en amont, dans la récupération de la solution ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen et al. (2026)]]).
- **Le diagnostic au niveau des résultats dans les programmes d'OBE :** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] diagnostiquent quels résultats de cours un apprenant a atteints dans une éducation fondée sur les résultats (Outcome-Based Education) en traitant les résultats comme des concepts de connaissance, en fournissant les relations entre concepts par des correspondances d'affinité OBE validées par des experts entre résultats de cours et de programme (une alternative explicite aux relations d'attention ou de graphe apprises implicitement), et en utilisant un module augmenté de mémoire pour estimer l'impact de l'atteinte d'un résultat sur les autres — surpassant les références DKT, DKVMN, EKT et SimpleKT (89.81% AUC) sur des données réelles de programmes d'ingénierie.
- **Diagnostiquer à partir d'instruments construits pour autre chose.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] montrent qu'un modèle de diagnostic cognitif peut extraire des informations au niveau des objectifs à partir d'items jamais conçus pour le diagnostic. En rattachant les items FCI, FMCE et EMCS à 14 objectifs d'apprentissage fins en mécanique introductoire et en ajustant DINA sur 24.394 réponses post-test issues de 807 cours, ils ont constaté un bon ajustement pour deux des trois instruments (FCI RMSEA² = 0.033 ; EMCS = 0.022) et une exactitude de classification au moins égale au référentiel formatif à faibles enjeux pour 19 des 22 combinaisons objectif–évaluation. La structure des attributs, et non la qualité des items, était la contrainte déterminante : le codage expert a survécu presque intact à l'examen du modèle — DINA a proposé de réviser seulement 14% des 754 codages item–objectif et les codeurs en ont adopté 20 (2.7%) — or le modèle n'a pas pu séparer trois objectifs d'énergie *conceptuellement imbriqués* (Potential Energy 0.675, Conserve Energy 0.705, Kinetic Energy 0.745) parce que deux quelconques d'entre eux partageaient environ 70% de leurs items (recouvrement de Jaccard 0.67–0.73), violant l'hypothèse d'indépendance conjonctive de DINA, alors que les objectifs sur la quantité de mouvement du même instrument atteignaient 0.820–0.917. Des attributs plus fins s'ajustaient aussi mieux, et non moins bien : la structure à 14 objectifs a amélioré l'ajustement du modèle par rapport à la structure antérieure à quatre grandes compétences de la même équipe, sur les trois instruments. C'est le recouvrement des items, et non l'erreur de codage, qui plafonne la finesse avec laquelle la maîtrise peut être séparée.
- **Le DINA bayésien pour les parcours d'apprentissage personnalisés :** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng et Huang (2026)]] intègrent un modèle DINA bayésien (entraîné sur le jeu de données EdNet, N=5.000) à la théorie des espaces de connaissances et à un algorithme de plus court chemin de remédiation pour générer des parcours d'apprentissage personnalisés, et éprouvent empiriquement le rôle médiateur de la [[cognitive-offloading|charge cognitive]] par les transitions d'états d'un modèle de Markov caché (validées sur 120 étudiants) — traitant à la fois le problème de convergence lié à la parcimonie des modèles DINA traditionnels et le mécanisme psychologique non éprouvé derrière l'efficacité des parcours personnalisés.
- **Un diagnostic ancré dans le langage en lieu et place des plongements d'identifiants.** [[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]] remplacent les identifiants discrets d'étudiants, d'exercices et de concepts par des schémas de concepts construits par LLM et des preuves ancrées dans le processus, calibrant l'état postérieur de chaque étudiant à partir des registres de réponses. Sur trois jeux de données de [[math-education|mathématiques]] issues de [[online-teaching-and-learning|plateformes]], le cadre atteint 83.51% ACC / 85.37% AUC sur XES3G5M et 87.16% ACC sur MOOC, le gain se concentrant exactement là où les modèles classiques de diagnostic cognitif se dégradent : les nouveaux concepts (+4.60 ACC par rapport à KCD) et les entrées manquantes de la matrice Q (+4.52). Retirer les preuves structurées fait s'effondrer l'exactitude sur MOOC de 87.16% à 78.95%, si bien que l'amélioration vient de la structure dérivée du langage plutôt que de l'échelle du modèle. ([[process-grounded-language-cognitive-diagnosis-2026]])

## Why it matters

Un diagnostic exact permet à l'enseignement de viser les écarts réels plutôt qu'un score global d'« aptitude » — rendant possible une [[automated-assessment|évaluation automatisée]] qui explique *pourquoi* un étudiant s'est trompé et des systèmes de [[feedback|boucle de rétroaction]] qui remédient à des [[student-modeling|états de connaissances]] précis. Un mauvais diagnostic produit l'inverse : un enseignement visant les mauvais concepts. C'est pourquoi l'[[psychometrically-aware-ai|IA consciente de la psychométrie]] met l'accent sur la validité diagnostique aux côtés de l'exactitude prédictive.

### Relationship to knowledge tracing and intelligent tutoring

Le diagnostic cognitif se situe au cœur de l'architecture du [[intelligent-tutoring|tutorat intelligent]] et constitue la contrepartie, du côté de l'évaluation, du [[knowledge-tracing|traçage des connaissances]] :

- **Diagnostic contre traçage — deux vues temporelles complémentaires.** Le [[knowledge-tracing|traçage des connaissances]] suit la *dynamique temporelle* de la maîtrise — estimant comment un état scalaire de connaissances évolue à travers les exercices et prédisant la réponse suivante. Le diagnostic cognitif produit l'*instantané statique et fin* des composantes de connaissances, compétences ou idées fausses qu'un apprenant détient actuellement. Un tuteur a besoin des deux : le traçage des connaissances pour séquencer ce qu'il faut enseigner ensuite, le diagnostic cognitif pour savoir *ce qui* est réellement faux. Les modèles diagnostiques fondés sur l'[[item-response-theory|IRT]] et la [[educational-measurement|mesure]], et les modèles de diagnostic cognitif qui rattachent les items à plusieurs composantes, instancient le volet diagnostique.
- **Le diagnostic à l'ère des LLM.** Les [[llm|LLM]] étendent le diagnostic des réponses à choix multiples aux travaux ouverts, manuscrits et conversationnels, identifiant les [[misconceptions|idées fausses]] précises derrière une erreur (par ex. le « piège de la bonne réponse » où une réponse juste masque un raisonnement erroné). [[xie-hillm-cd-2026|HiLLM-CD]] utilise les LLM pour la construction automatique d'arbres de concepts et l'inférence hiérarchique de compétences, reliant diagnostic et traçage. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] poussent plus loin en fédérant le diagnostic sur plusieurs API de LLM commerciaux avec une confidentialité différentielle ε-locale, montrant qu'un diagnostic exact et préservant la vie privée est possible sans qu'aucun modèle ne voie les données brutes des étudiants.
- **Séparer le diagnostic de la rétroaction est un principe de conception.** Les tuteurs LLM confirment de façon fiable les étapes correctes mais rejettent à l'excès des raisonnements valides et valident à l'excès des erreurs — et un diagnostic exact ne produit pas de façon fiable une [[feedback|rétroaction]] actionnable. La conception d'un système de tutorat intelligent devrait donc séparer une composante diagnostique de la composante de rétroaction/d'[[scaffolding|étayage]] ([[yasir-llm-tutoring-agents-2026]]).

## Connections

Le diagnostic cognitif rejoint le [[knowledge-tracing|traçage des connaissances]], la [[student-modeling|modélisation de l'apprenant]], la [[educational-measurement|mesure en éducation]] et l'[[assessment|évaluation]]. Ses éclairages alimentent le [[intelligent-tutoring|tutorat intelligent]] et l'[[adaptive-learning|apprentissage adaptatif]], et les travaux de l'ère des LLM le relient à l'identification des idées fausses dans le [[intelligent-tutoring|tutorat par IA]].

## Concepts liés

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## Articles liés

- [[llm-cognitive-diagnosis-handwritten-math]] — Référentiel pour les LLM en diagnostic des compétences cognitives à partir d'écrits mathématiques manuscrits
- [[correct-answer-trap-misconceptions]] — Le piège de la bonne réponse
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[llm-student-misconception-identification]] — Identification par LLM des idées fausses des étudiants
- [[student-math-competence-clustering]] — Regroupement pour la modélisation de la compétence mathématique des étudiants
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — Cognitive Agent Compilation for Explicit Problem Solver Modeling
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: diagnosing from simulated learners
- [[huang-interpretable-knowledge-tracing-2026]] — Traçage des connaissances interprétable
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM concept trees + hierarchical proficiency inference
- [[yasir-llm-tutoring-agents-2026]] — Séparer le diagnostic de la rétroaction dans les tuteurs LLM
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnostic cognitif bayésien pour les parcours d'apprentissage personnalisés
- [[personalized-neural-cognitive-architecture-search-2026]] — AutoML personalized neural cognitive architecture search for learner profiles
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Traçage des connaissances fondé sur les résultats avec correspondance d'affinité
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Diagnostic fédéré préservant la vie privée sur plusieurs LLM hétérogènes
- [[llm-common-modeling-mistakes-formalisms-2026]] — Mining common modeling mistakes at scale with LLM-generated, algorithmically validated bug-fixing transformations (Killich et al. 2026)
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: DINA-based diagnosis of 14 learning objectives from existing physics concept inventories (Le et al. 2026)
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — Annotation des concepts de connaissance par LLM et états de connaissance calibrés au niveau des concepts
- [[llm-distractor-generation-student-reasoning-2026]] — les distracteurs fondés sur les idées fausses comme tâche de conception d'items diagnostiques
- [[misconception-acquisition-dynamics-llms-2026]] — l'endroit où l'erreur entre dans la solution est le goulot d'étranglement du diagnostic
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Open Foundation Models for Learning and Teaching
