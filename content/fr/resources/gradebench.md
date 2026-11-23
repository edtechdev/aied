---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-23T14:30:00-05:00"
type: resource
summary: "Un classement public de modèles de pointe qui notent de vraies réponses STEM universitaires manuscrites selon les éléments de grille sélectionnés par l'enseignant."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-23"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

GradeBench pose une question étroite et utile sur l'[[automated-assessment|évaluation automatisée]] : étant donné la réponse manuscrite d'un étudiant, la [[rubrics|grille d'évaluation]] de l'enseignant, une solution de référence et les éléments de grille que l'enseignant a réellement sélectionnés, un modèle de pointe sélectionne-t-il les mêmes éléments ? Les étiquettes de référence sont de véritables sélections d'éléments de grille par des enseignants et des assistants d'enseignement, issues d'examens et de quiz, et non des sorties de modèle re-notées.

## Ce que vous pouvez en faire

Lisez le classement avant de faire confiance à la revendication de précision d'un fournisseur de notation, et lisez la construction des tâches avant de faire confiance au classement. Le [[benchmark]] contient 464 tâches tirées de 125 questions réparties sur 45 cours [[higher-ed|universitaires]] dans plus de dix établissements, limitées aux items d'examen et de quiz à réponse libre qu'un professeur ou un assistant d'enseignement a examinés ligne par ligne, et orientées vers le crédit partiel — les tâches à note maximale et à note nulle sont plafonnées à 5 % chacune, car les modèles les trouvent faciles.

Le classement actuel plafonne bien en dessous de l'accord entre humains : le meilleur modèle atteint 57,3 % de correspondance exacte de grille, et le site met en regard la précision et le coût pour 1 000 réponses, où un modèle en retard de 0,8 point coûte environ un septième de ce prix. Cet axe de coût est la partie pratiquement utile, car la notation est une opération de volume.

Pour un second instrument, construit indépendamment, voir l'[AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) de la Learning Design Alliance, présenté comme un dépôt ouvert plutôt qu'un classement hébergé et résumé dans [[porcaro-ai-grading-benchmark-2026|l'étude de Porcaro]].

## À qui cela s'adresse

Les enseignants qui décident de laisser ou non un outil de notation publier des notes sans relecture, les professionnels de l'évaluation qui rédigent des exigences d'achat, et les chercheurs qui ont besoin d'une cible au niveau de la grille plutôt que d'une corrélation de notation d'essais.

## Remarques et réserves

GradeBench est publié par Pensive, une plateforme commerciale de notation par IA, si bien que le benchmark et le produit partagent le même propriétaire ; la construction des tâches est documentée et défendable, mais considérez le cadrage comme celui du fournisseur. Il couvre les examens STEM dont les grilles comptent au moins quatre éléments, ce qui exclut les essais, les réponses courtes et les messages de discussion — les formats où se déroule l'essentiel de la notation en [[humanities-education|humanités]]. La correspondance exacte de grille est une métrique stricte : deux correcteurs peuvent être en désaccord sur un élément et avoir tous deux raison au sujet de l'étudiant. Les scores décrivent les versions de modèles disponibles en novembre 2026 et évolueront.
