---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Un système de création open source des Generative AI Labs de Wharton qui transforme un entretien structuré avec un enseignant en une simulation d'apprentissage exécutable et adaptative, dotée de ses propres agents mentor, entraînement et rétroaction."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

Primer est un [[open-source|système open source]] pour construire une [[simulation|simulation]] pédagogique en décrivant une leçon à une IA plutôt qu'en la programmant. Le jugement de l'enseignant détermine ce que la simulation enseigne : un entretien fait émerger ce que l'enseignant sait de la leçon et des étudiants, un document de conception rend ces connaissances vérifiables, et rien n'est construit avant que l'enseignant ne l'approuve.

## Ce que vous pouvez en faire

L'entretien pose une question à la fois : la leçon, le niveau et les connaissances préalables des étudiants, les idées fausses courantes, l'approche de l'enseignant et la manière dont la réussite sera évaluée. Les enseignants peuvent parler ou écrire, et téléverser des programmes, des plans de cours ou des grilles d'évaluation. En retour vient un document de conception qui couvre les objectifs, le déroulé du scénario, les personnages, les enjeux et la logique d'adaptation ; l'enseignant le révise et l'approuve comme un plan de cours. Cinq agents le construisent ensuite : Intake, Design, Casting Director, Image Generation et Experience Builder, qui assemble le résultat pour un seul étudiant ou une classe entière.

À l'exécution, trois agents font face à l'étudiant. Un mentor active les connaissances préalables et fait émerger les idées fausses. Un agent d'entraînement joue un interlocuteur de jeu de rôle ou un élève en teachback, où l'étudiant explique un concept et révise son explication lorsqu'on le questionne. Un agent de rétroaction travaille à partir de la transcription, en discutant de moments précis et de la façon dont l'apprentissage se prolonge au-delà du scénario. Chaque agent a un personnage dans l'univers et une couche pédagogique qui suit les objectifs et recueille des preuves, et l'enseignant reçoit des rapports individuels et agrégés.

## À qui cela s'adresse

Les enseignants, les concepteurs pédagogiques et les responsables du développement du corps enseignant peuvent décrire une leçon en détail sans vouloir en écrire le code. Les chercheurs qui étudient la conception avec l'enseignant dans la boucle ou les [[agentic-ai|flux de travail multi-agents]] disposent d'un système fonctionnel à inspecter, et les développeurs peuvent l'étendre, car les prompts, les modèles, les listes de contrôle, les patrons d'orchestration et le code TypeScript sont tous open source.

## Remarques et réserves

Les auteurs présentent Primer comme un prototype expérimental plutôt qu'un produit de classe éprouvé. Il n'a pas été évalué comme intervention pédagogique en classe, et personne ne l'a examiné au regard de la FERPA, de la COPPA, des lois nationales sur la vie privée des élèves ou des politiques de district ; un établissement qui l'utilise avec des étudiants assume donc cette vérification. Le logiciel est sous licence MIT et gratuit, mais faire tourner une simulation exige un accès à un modèle, qui coûte de l'argent. Parce qu'il est indépendant du modèle et fonctionne sur des modèles locaux ou à poids ouverts, il peut être déployé là où les règles de confidentialité sont plus strictes. Un livre blanc sur l'architecture et les prompts est lié depuis la page du projet. Le dépôt comptait 98 étoiles et 16 forks lors de la vérification en novembre 2026.

## Concepts liés

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
