---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**Learning Commons** est l'initiative éducative de Mark Zuckerberg et Priscilla Chan, lancée en 2025 pour porter le travail de science de l'apprentissage de la Chan Zuckerberg Initiative jusque dans l'infrastructure sur laquelle les produits edtech sont réellement construits. Son argument est infrastructurel plutôt que pédagogique : la recherche existe, les référentiels académiques existent et les programmes de qualité existent, mais ils vivent dans des systèmes séparés, si bien que les développeurs construisent sur ce qui est le plus facile d'accès. L'organisation publie trois outils ouverts sur GitHub — un Knowledge Graph, un ensemble d'Evaluators et des [[agentic-ai|Agent Skills]] — et exploite une plateforme qui ajoute Curriculum Sync pour charger des programmes dans un [[edtech-platform|système de gestion de l'apprentissage]].

## Ce que vous pouvez en faire

Le **Knowledge Graph** modélise les référentiels académiques, les programmes et la recherche en science de l'apprentissage comme des entités et des relations sous un schéma partagé, de sorte qu'un outil peut aligner un contenu généré sur un référentiel sans construire son propre pipeline de données. Les **Evaluators** mesurent des attributs de la [[llm|sortie d'un LLM]] à travers le prisme de la science de l'apprentissage — complexité textuelle, [[feedback]], alignement sur les référentiels académiques et compétences durables — et sont livrés avec des SDK Python et TypeScript, publiés sur npm et PyPI, pour noter un contenu généré ou comparer des modèles candidats. Les **Agent Skills** empaquettent des instructions, des références et des garde-fous pour des workflows enseignants courants dans un format ouvert et agnostique du modèle : une vérification de la compréhension, une différenciation graduée des leçons, des plans de cours alignés sur les référentiels et la préparation de cours. En pratique, le graphe rend les deux autres crédibles : l'alignement des contenus est l'affirmation, et le graphe est la référence à laquelle elle est confrontée.

## À qui cela s'adresse

Aux développeurs qui intègrent des fonctions d'IA dans des produits de [[curriculum-design|programme]] et d'évaluation, et aux équipes chargées des programmes ou des référentiels qui fournissent les données auxquelles ces produits s'alignent. Les enseignants peuvent utiliser les agent skills seuls, mais le cadrage du dépôt lui-même est celui d'une infrastructure pour ceux qui livrent des outils.

## Remarques et réserves

Un [[open-source|code]] ouvert ne rend pas les données ouvertes. Le code du Knowledge Graph est sous MIT, tandis que chaque jeu de données porte sa propre étiquette d'accès — Open, Open + Gated ou Gated — et les contenus Gated ne sont explicitement pas couverts par les licences ouvertes que cite le dépôt ; vérifiez donc le catalogue avant de présumer d'un droit de réutilisation. Le code des évaluateurs est MIT et le contenu de ses prompts CC BY 4.0, mais les corpus annotés CLEAR et PERSUADE 2.0 qu'il utilise sont sous CC BY-NC-SA 4.0. La plateforme et les jeux de données qui la sous-tendent exigent un compte. Activité des dépôts au 2026-11-04 : 167 étoiles pour le Knowledge Graph, 88 pour Evaluators, 41 pour Agent Skills. L'initiative est financée par CZI, et sa formulation du problème est celle du financeur lui-même.

## Concepts liés

- [[curriculum-design]] — le graphe existe pour aligner les contenus générés sur des référentiels et des programmes
- [[open-source]] — du code MIT et Apache-2.0 avec une licence de données par jeu de données
- [[educational-nlp]] — les évaluateurs sont une couche de mesure textuelle appliquée aux sorties de LLM
- [[agentic-ai]] — des skills qui empaquettent un workflow pour qu'un modèle l'exécute
- [[edtech-platform]] — Curriculum Sync charge des programmes dans un système de gestion de l'apprentissage
- [[llm]] — la cible de l'évaluation et le consommateur des skills
