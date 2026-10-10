---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "Une Agent Skill open source et un éditeur de navigateur privé qui transforment dix-huit règles pour une écriture plus claire en modes brouillon, réécriture et relecture pour la prose."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**Clarity** associe une Agent Skill à un éditeur de navigateur, tous deux construits autour de dix-huit règles pour une écriture qui « gagne son lecteur ». La Skill s'installe dans des agents de codage tels que Claude Code et Codex avec `npx skills add addyosmani/clarity`, puis fonctionne en trois modes : le mode relecture critique un brouillon et laisse le fichier intact, le mode réécriture modifie un brouillon sur place, et le mode entretien pose d'abord des questions à l'auteur et coécrit à partir des réponses. Le [[feedback|retour]] qu'un auteur reçoit vise la substance avant le style. Les règles demandent à qui le texte est destiné et ce que ces lecteurs savent déjà, exigent des affirmations plutôt que des sujets et des précisions plutôt que des abstractions, et traitent le remplissage comme un problème de non-savoir de la finalité du texte plutôt que comme un problème de vocabulaire.

L'éditeur de navigateur s'exécute localement dans la page et ne téléverse aucun brouillon. Il signale les marques de la prose produite par une machine, la lisibilité et les manques de substance, ce qui le rend utile pour relire un texte qu'une [[generative-ai|IA générative]] a produit avant qu'il n'atteigne un lecteur. Le projet affirme explicitement que l'objectif est une écriture qui reste reconnaissable comme celle de son propre auteur, plutôt qu'une prose fabriquée pour échapper à la [[ai-literacy|détection d'IA]], distinction que les enseignants reconnaîtront lorsqu'ils fixeront une politique sur l'[[writing-education|écriture]] assistée par IA.

## Ce qu'il faut savoir avant de l'adopter

Le dépôt publie un protocole d'évaluation, des échantillons avant-après dans `samples/` et des fichiers de référence derrière la Skill, si bien qu'un évaluateur peut examiner comment les règles se comportent plutôt que d'accepter une affirmation sur parole ; la présente page ne restitue aucun résultat mesuré. L'auteur est Addy Osmani, la licence est MIT, et le travail est indépendant plutôt que le produit d'une institution. Il est jeune et actif : créé en août 2026, 54 commits, trois versions dont la dernière en version 0.2.1 en septembre, et environ 250 étoiles lors de la vérification en septembre 2026. Trois contributeurs ont fait aboutir des modifications. Les instructions de la Skill se chargent dans un agent que le lecteur fait déjà tourner, si bien que les réserves habituelles sur le [[prompt-engineering|ingénierie des invites]] s'appliquent : la qualité de la critique dépend du brouillon qui lui est remis.

## Concepts liés
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
