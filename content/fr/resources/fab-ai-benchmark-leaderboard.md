---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Un classement de modèles pour des benchmarks éducatifs destinés aux pays à revenu faible et intermédiaire, couvrant la pédagogie, la littératie fondamentale, le SEND, les mathématiques visuelles et la performance multilingue, avec des colonnes de prix et de poids ouverts."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

Fab AI évalue des modèles sur des tâches éducatives qui comptent là où les budgets, la bande passante et la couverture linguistique sont contraints, dans les [[global-south|pays à revenu faible et intermédiaire]] pour lesquels le benchmark est conçu, et publie les résultats sous forme de classement triable plutôt que d'article. Le tableau principal note un benchmark de pédagogie aux côtés du SEND, des mathématiques visuelles et du raisonnement visuel, avec des onglets séparés pour la pédagogie multilingue, la littératie fondamentale et l'évaluation de la lecture à voix haute.

## Ce que vous pouvez en faire

Comparez environ 300 modèles sur des scores de pédagogie qui vont actuellement d'un peu plus de quatre-vingt-dix pour cent à 21 %, puis triez selon ce qu'un ministère de l'Éducation doit réellement peser : prix par million de tokens, nombre de paramètres, poids ouverts et date de sortie. L'écart en bas du classement est la partie utile. Les modèles ouverts de moins de 2B se situent entre 21 % et 43 % sur le benchmark de pédagogie tandis que les modèles de pointe se situent à un peu plus de quatre-vingt-dix pour cent, ce qui transforme « pouvons-nous faire tourner cela hors ligne sur du matériel bon marché » en un arbitrage chiffré plutôt qu'en une supposition.

L'onglet de pédagogie [[multilingual-learning|multilingue]] est la raison de mettre la page en favori. La plupart des benchmarks éducatifs sont uniquement en anglais, et la question de savoir si la pédagogie d'un modèle survit à la traduction est exactement la question à laquelle un ministère dans un système multilingue a besoin de répondre. Les données sont téléchargeables en CSV, si bien que les comparaisons peuvent être relancées localement.

## À qui cela s'adresse

Les décideurs et les équipes d'achat qui choisissent des modèles pour des systèmes nationaux, les chercheurs qui étudient [[digital-divide|les inégalités d'accès]] dans l'éducation assistée par l'IA, et les développeurs qui ont besoin d'une cible pédagogique qui ne soit pas un examen en langue anglaise.

## Remarques et réserves

Un classement mesure des modèles sur les tâches propres au benchmark : un score de pédagogie élevé est une preuve concernant ces items, pas concernant une salle de classe. La colonne de prix mélange les prix des tokens d'entrée et de sortie selon un ratio de 3:1, ce qui est un choix de modélisation et non ce que coûtera un déploiement particulier. La couverture des langues et des modèles hébergés localement évolue à mesure que de nouveaux modèles apparaissent, et les scores bas des petits modèles reflètent en partie le format des tâches autant que la capacité. Le cadrage de Fab AI porte explicitement sur les pays à revenu faible et intermédiaire, si bien que l'ensemble d'items du benchmark reflète ce contexte et ne doit pas être lu comme un classement général de l'éducation. Vérifiez les dates de sortie : plusieurs entrées sont antérieures à la génération actuelle de modèles.
