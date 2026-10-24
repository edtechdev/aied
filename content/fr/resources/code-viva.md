---
title: "Code Viva"
created: "2026-10-24T10:37:31-04:00"
updated: "2026-10-24T10:37:31-04:00"
type: resource
summary: "Un outil web gratuit qui fait passer une version écrite et chronométrée d'une soutenance orale de code à chaque étudiant d'un cours de programmation, en proposant des notes appuyées sur des citations que l'enseignant approuve."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-24"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

Code Viva conduit une version écrite et chronométrée d'une [[oral-assessment|soutenance orale]] pour chaque étudiant d'un cours de programmation, environ quinze à vingt minutes chacun, sans enseignant dans la salle. Il lit le code soumis par un étudiant et l'historique de ses commits, rédige quatre à six questions sur les fonctions, les noms et les commits de cet étudiant, et donne à chaque étudiant un lien personnel pour y répondre.

## Ce que vous pouvez en faire

Les soumissions proviennent d'un export Gradescope, d'un zip téléchargé depuis Canvas, d'un zip avec un dossier par étudiant, ou de GitHub Classroom avec un jeton de lecture. L'enseignant fixe la durée de session, le nombre de questions et l'échéance, marque le temps supplémentaire à 1,25x ou 3x, et lit, modifie ou remplace les questions générées avant d'envoyer les liens. Les questions portent sur les cas de base de la récursion, les gardes de bord, les choix de structures de données, les noms de variables opaques, l'échelle et le traçage, les phrases de l'énoncé du devoir, et les schémas de commits tels qu'un commit unique massif ou tard dans la nuit. Les réponses reviennent sous forme de code de réponse, et l'écran de revue affiche chaque transcription à côté d'une note proposée de 0 à 3 avec les phrases sur lesquelles elle repose, plus une file de signalements ordonnée selon la mesure dans laquelle une conversation se justifie. Les résultats s'exportent en CSV, et onze cours de démonstration permettent au lecteur d'essayer toute la boucle sur des données inventées.

## À qui cela s'adresse

Aux enseignants de cours de programmation qui veulent une preuve qu'un étudiant sait expliquer son propre code, et qui préfèrent parler à une courte liste d'étudiants plutôt qu'à tous ; les questions sur les commits en font une forme d'[[process-oriented-assessment|évaluation centrée sur le processus]].

## Remarques et réserves

Tout s'exécute dans le navigateur : le cours réside dans le stockage local avec un export JSON, les questions voyagent dans la partie d'un lien que les navigateurs n'envoient pas aux serveurs, et les réponses ne reviennent que sous forme de codes que les étudiants choisissent d'envoyer, si bien qu'aucune donnée étudiante n'atteint un tiers. Le générateur de questions est fondé sur des règles plutôt que piloté par un modèle. De l'aveu de l'outil, son lecteur de code est heuristique, si bien qu'un formatage inhabituel ou des macros peuvent masquer une fonction, et qu'une note peut récompenser la connaissance du vocabulaire plutôt que la compréhension du code, ce qui explique pourquoi les notes sont des propositions que l'enseignant approuve et pourquoi il conseille de garder les enjeux faibles. Aucune licence et aucun dépôt source ne sont publiés, et comme les liens portent les questions, ils atteignent quelques kilo-octets, assez longs pour être insérés dans une zone de message d'un système de gestion de l'apprentissage.

## Concepts liés

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
