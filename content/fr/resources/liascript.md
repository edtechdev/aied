---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "Un dialecte Markdown ouvert qui transforme un simple fichier texte en cours interactif dans le navigateur, avec quiz et code exécutable, plus un assistant multi-agents pour construire des cours avec lui."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-09-24T04:57:47-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**LiaScript** est un dialecte Markdown étendu accompagné d'un interpréteur pour ce dialecte. Un simple fichier texte devient un cours interactif : le même document peut être lu comme un récit, projeté comme des diapositives, ou parcouru comme un cours, le tout dans le navigateur. Rien n'a besoin d'être installé pour en écrire un ou pour en lire un.

## Ce que vous pouvez en faire

Les quiz prennent les formes qu'un enseignant attend, notamment choix multiple, questions à matrice, saisie de texte, listes déroulantes et textes à trous, rédigés directement en Markdown. Les blocs de code peuvent être rendus modifiables et exécutables pour des tutoriels de [[cs-education|programmation]], et un système de macros enveloppe des bibliothèques JavaScript dans des blocs réutilisables, si bien que les schémas interactifs n'exigent aucun code de chaque auteur. Un cours est hébergé là où l'auteur conserve déjà son texte, sans service auquel être enferré, et tout s'exécute côté client, si bien qu'un cours chargé fonctionne hors ligne. Le LiaScript Exporter en empaquette un en SCORM pour Moodle, ILIAS et d'autres [[edtech-platform|systèmes de gestion de l'apprentissage]].

## L'agent d'enseignement pour construire des cours

Le projet publie aussi un **[agent d'enseignement](https://github.com/LiaScript/teaching-agent)** pour créer des cours LiaScript, sous licence Boost Software License 1.0. Quatre agents pour l'enseignement, le design visuel, l'examen par l'apprenant et la publication travaillent autour d'un unique fichier de projet contenant l'état du cours, selon un flux « définir d'abord » : objectifs, public et didactique sont arrêtés avant que le moindre matériel ne soit écrit, et des portes de validation suivent. Un brouillon peut être examiné depuis un persona d'apprenant nommé pour vérifier la [[cognitive-offloading|charge cognitive]] et les connaissances préalables supposées. L'agent est agnostique de l'éditeur, générant des configurations pour Claude Code, Copilot, Codex, Cursor ou un dialogue web à partir d'une seule spécification, et le dépôt sert aussi d'exemple concret, contenant un cours de six unités sur la directive NIS2 de l'UE et un document décrivant sa production.

## Remarques et réserves

LiaScript est gratuit, sans offre payante ni exigence de compte, et est développé au grand jour sous BSD-3-Clause, si bien que les institutions peuvent l'auto-héberger et le modifier. La fonctionnalité Live Classroom mérite un examen avant de s'y fier à grande échelle, puisque la synchronisation en temps réel utilise un service partagé plutôt qu'un rendu purement local. L'agent d'enseignement est jeune et peu adopté ; traitez-le comme un prototype fonctionnel plutôt que comme un produit pris en charge.

## Concepts liés
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]]
