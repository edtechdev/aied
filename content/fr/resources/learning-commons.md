---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-05T18:24:57-05:00"
type: resource
summary: "Une infrastructure d'IA ouverte issue de l'initiative éducative de Mark Zuckerberg et Priscilla Chan : un graphe de connaissances des référentiels, des programmes et des données de science de l'apprentissage, des évaluateurs pour juger les sorties de LLM, et des agent skills agnostiques du modèle pour les workflows enseignants."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**Learning Commons** publie trois outils ouverts pour poser des fonctionnalités d'IA sur un contenu de programme réel — un **[[knowledge-graph|graphe de connaissances]]** des référentiels académiques, des programmes et de la recherche en science de l'apprentissage, une bibliothèque d'**Evaluators** pour juger le texte généré, et des **[[agentic-ai|Agent Skills]]** agnostiques du modèle pour les workflows enseignants courants — et exploite une plateforme qui ajoute Curriculum Sync pour charger des programmes dans un [[edtech-platform|système de gestion de l'apprentissage]].

## Ce que vous pouvez en faire

**Aligner un contenu généré sur un référentiel.** Le Knowledge Graph modélise les référentiels, les [[curriculum-design|programmes]] et la recherche comme des entités et des relations sous un schéma partagé. Un produit peut chercher le référentiel auquel un item devrait s'aligner, parcourir les relations de prérequis ou ancrer le contenu d'un tuteur dans le programme qu'il est censé enseigner, sans construire ni maintenir son propre pipeline de données.

**Noter la sortie générée avant que les étudiants ne la voient.** Les **Evaluators** mesurent des attributs de la [[llm|sortie d'un LLM]] — complexité textuelle, [[feedback]], alignement sur les référentiels et compétences durables — et sont livrés sous forme de SDK Python et TypeScript sur npm et PyPI. En pratique, ils fonctionnent comme une vérification de régression lorsqu'un prompt ou un modèle change, comme une comparaison entre modèles candidats, ou comme un filtre sur les items et les explications générés.

**Empaqueter un workflow enseignant.** Les **Agent Skills** regroupent des instructions, des références et des garde-fous dans un format ouvert et agnostique du modèle : une vérification de la compréhension, une différenciation graduée des leçons, un plan de cours aligné sur les référentiels et la préparation de cours. Elles peuvent être intégrées à un cadre d'agents ou lues comme des modèles éprouvés du degré de structure dont un workflow de classe fiable a besoin.

**Déplacer un programme dans un système de gestion de l'apprentissage.** Curriculum Sync est l'étape de la plateforme qui transforme une carte de référentiels en quelque chose qu'un cours peut réellement utiliser dans le SGA.

## À qui cela s'adresse

Aux développeurs qui intègrent des fonctions d'IA dans des produits de programme et d'[[assessment|évaluation]], et aux équipes chargées des programmes ou des référentiels qui fournissent les données auxquelles ces produits s'alignent. Les [[teacher-role|enseignants]] peuvent utiliser les Agent Skills seuls, mais le cadrage du dépôt lui-même est celui d'une infrastructure pour ceux qui livrent des outils.

## Remarques et réserves

Le fait d'être [[open-source|open source]] ne rend pas les données ouvertes. Le code du Knowledge Graph et des Evaluators est sous MIT et celui des Agent Skills sous Apache-2.0, tandis que chaque jeu de données porte sa propre étiquette d'accès — Open, Open + Gated ou Gated — et les contenus Gated ne sont pas couverts par les licences ouvertes que cite le dépôt ; vérifiez donc le catalogue avant de présumer d'un droit de réutilisation. Le contenu des prompts des évaluateurs est CC BY 4.0, mais les corpus annotés CLEAR et PERSUADE 2.0 qu'il utilise sont sous CC BY-NC-SA 4.0. La plateforme et les jeux de données qui la sous-tendent exigent un compte.

## Concepts liés

- [[curriculum-design]] — le graphe existe pour aligner les contenus générés sur des référentiels et des programmes
- [[open-source]] — du code MIT et Apache-2.0 avec une licence de données par jeu de données
- [[educational-nlp]] — les évaluateurs sont une couche de mesure textuelle appliquée aux sorties de LLM
- [[agentic-ai]] — des skills qui empaquettent un workflow pour qu'un modèle l'exécute
- [[edtech-platform]] — Curriculum Sync charge des programmes dans un système de gestion de l'apprentissage
- [[llm]] — la cible de l'évaluation et le consommateur des skills
