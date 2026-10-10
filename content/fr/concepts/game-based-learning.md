---
title: "Apprentissage par le jeu"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-10T03:05:32-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'apprentissage par le jeu (game-based learning, GBL)** — l'utilisation des jeux eux-mêmes (numériques ou physiques) comme support et contexte d'apprentissage, où les mécaniques, les défis et la progression du jeu portent les contenus éducatifs. Les apprenants apprennent *en* jouant. De manière connexe, la **ludification (gamification)** applique des éléments de conception de jeux (points, badges, niveaux, classements) à des activités d'apprentissage qui ne sont pas des jeux, sans les transformer en jeux complets. Dans l'enseignement de l'IA et de la [[educational-robotics|robotique]], les deux approches sont utilisées pour rendre les contenus techniques engageants et motivants.

## Questions à examiner

- L'apprentissage par le jeu utilise le jeu lui-même comme support d'apprentissage — on apprend *en* jouant. La ludification se contente de superposer des points, des badges et des niveaux à une activité qui n'est pas un jeu. Selon vous, quelle différence ces deux approches font-elles réellement sur l'apprentissage, par opposition à l'engagement à court terme ?
- Une revue comparative a montré que l'apprentissage par le jeu était plus répandu dans les contextes informels, tandis que la ludification dominait les salles de classe formelles et favorisait l'[[project-based-learning|apprentissage par projets]]. Pourquoi, à votre avis, chaque approche a-t-elle trouvé un terrain différent — et qu'est-ce que cela nous apprend sur le contexte où chacune fonctionne le mieux ?
- La ludification s'appuie sur la théorie de l'autodétermination — [[agency|autonomie]], compétence, affiliation. Si la motivation consiste à satisfaire ces besoins, pourquoi un système de points et de badges peut-il réussir ou échouer selon la manière dont il façonne l'effort perçu et l'attention ?
- La [[research-methods-aied|recherche]] suggère que le bénéfice motivationnel des dispositifs ludiques et assistés par IA dépend de la manière dont ils façonnent la charge perçue et l'attention, et non de la ludification seule. Quand avez-vous vu un jeu ou des badges stimuler l'engagement sans améliorer réellement l'apprentissage — ou l'inverse ?

## Introduction

Le GBL s'appuie sur les théories de la [[motivation]], de l'[[student-engagement|engagement des apprenants]] et de l'[[active-learning|apprentissage actif]] : les jeux procurent une motivation intrinsèque, une rétroaction immédiate et des contextes de problèmes authentiques. Il recoupe la [[simulation]], l'[[project-based-learning|apprentissage par projets]] et la [[educational-robotics|robotique éducative]]. Le GBL est particulièrement pertinent pour la [[educational-robotics|robotique éducative]], la [[computational-thinking|pensée computationnelle]] et l'[[cs-education|enseignement de l'informatique]], où les jeux peuvent rendre concrets et ludiques des concepts techniques abstraits.

### Comment le GBL apparaît dans la recherche de la base de connaissances

- **Éducation à la robotique :** [[game-based-gamified-robotics-education-review-2026|une revue systématique comparative]] de l'apprentissage par le jeu et de la ludification dans l'éducation à la robotique a montré que le GBL était plus répandu dans les contextes informels, tandis que la ludification dominait les salles de classe formelles et favorisait l'[[project-based-learning|apprentissage par projets]].
- **Jeux médiés par des robots :** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] est un jeu de rôle médié par un robot destiné à une intervention contre le harcèlement, et [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] utilise la [[storytelling-in-education|narration numérique]] interactive pour stimuler la motivation.
- **Agents [[conversational-ai|conversationnels]] d'IA dans les jeux de simulation :** Wenzel, Geiger et Liening (2026) dérivent le cadre CAIS-GBL — quatre principes de conception et quinze caractéristiques de conception pour les agents conversationnels d'IA dans l'apprentissage par le jeu numérique — de méta-exigences théoriques couvrant l'engagement cognitif, motivationnel, [[affective-computing|affectif]] et [[sociocultural-learning|socioculturel]], avec une posture d'[[equity-in-ai-education|équité]] dès la conception. Leur agent instancié (Lara), dans un jeu de simulation d'entreprise, a été positivement accueilli pour la présence cognitive et [[community-of-inquiry|sociale]] et pour le soutien à l'[[self-regulated-learning|apprentissage autorégulé]], comblant le manque fréquent de rétroaction [[formative-assessment|formative]] et de réflexion structurée dans les jeux de simulation.

- **Efficacité de l'IA appliquée au GBL :** une revue systématique de 55 études sur l'apprentissage par le jeu assisté par IA met en évidence des effets positifs sur les connaissances, la motivation intrinsèque et l'engagement affectif, mais seulement 4 études (7%) atteignent son seuil de haute qualité et seulement 4 (7%) étaient des [[rct|ECR]] ([[ai-game-based-learning-systematic-review-2026|Kaşarcı et Yurt, 2026]]). L'efficacité tenait à l'alignement du mécanisme d'IA sur une [[learning-theories|théorie de l'apprentissage]] explicite.

### Ludification

La **ludification** est l'application d'éléments de conception de jeux (points, badges, niveaux, classements, défis, barres de progression) à des contextes non ludiques afin de motiver et d'engager les utilisateurs. Contrairement à l'apprentissage par le jeu — où l'apprentissage se produit *au travers d'un* jeu — la ludification superpose des mécaniques de jeu à une activité d'apprentissage existante sans en faire un jeu complet. Elle est utilisée en éducation pour stimuler la motivation, l'[[student-engagement|engagement des apprenants]] et la persévérance, et elle est largement appliquée dans les contextes formels de salle de classe.

La ludification s'appuie sur la théorie motivationnelle, en particulier la [[self-determination-theory]] (qui soutient l'autonomie, la compétence et l'affiliation) et sur les cadres de changement comportemental. Elle a montré une synergie particulière avec l'[[project-based-learning|apprentissage par projets]] dans des domaines appliqués comme la robotique. Dans la recherche de la base de connaissances :

- **Éducation à la robotique :** la revue comparative a montré que la ludification dominait les salles de classe formelles en éducation à la robotique (p < .001) et favorisait fortement l'[[project-based-learning|apprentissage par projets]] (p = .009), tandis que l'apprentissage par le jeu était plus courant dans les contextes informels.
- **Engagement et motivation :** la ludification est utilisée à travers la base de connaissances pour accroître l'engagement et la motivation des apprenants dans les contextes d'IA, de [[cs-education|programmation]] et d'apprentissage [[stem-education|STIM]]. La recherche [[genai-motivation-engagement-2026|IA générative, motivation et engagement]] examine comment les éléments ludiques se combinent à l'IA pour soutenir l'intérêt des apprenants. Deux études de 2026 prolongent ces travaux en comparant des conditions ludifiées et assistées par IA à un enseignement traditionnel : [[nasa-tlx-workload-gamified-ai-2026|une étude NASA-TLX]] a mesuré la charge perçue dans des conditions d'apprentissage traditionnel, ludifié et assisté par IA, et [[arcs-motivational-ergonomics-gamified-ai-2026|une étude ARCS]] a examiné l'« ergonomie » motivationnelle dans l'apprentissage ludifié et assisté par IA, avec des implications pour la [[professional-training|formation en milieu professionnel]]. Ensemble, elles montrent que le bénéfice motivationnel des dispositifs ludiques et assistés par IA dépend de la manière dont ils façonnent la [[motivation|charge perçue]], la charge de travail et l'attention (par exemple les dimensions attention/pertinence du modèle ARCS), et non de la ludification seule.

Le GBL et la ludification se relient ensemble à la [[educational-robotics|robotique éducative]], à l'[[student-engagement|engagement des apprenants]], à la [[motivation]], à la [[self-determination-theory|théorie de l'autodétermination]], à l'[[active-learning|apprentissage actif]], à la [[simulation]], à l'[[project-based-learning|apprentissage par projets]] et à la [[computational-thinking|pensée computationnelle]].

## Concepts liés

- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — Parapluie : pédagogies et stratégies d'enseignement en éducation à l'IA
- [[virtual-and-augmented-reality]] — la pratique immersive et ludique se recoupent dans leur conception et leurs données probantes

## Articles liés

- [[ai-game-based-learning-systematic-review-2026]] — Revue systématique de 55 études sur l'apprentissage par le jeu assisté par IA : des résultats positifs, une base de données probantes mince
- [[game-based-gamified-robotics-education-review-2026]] — Enseignement de la robotique par le jeu et ludifié
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[genai-motivation-engagement-2026]] — Generative AI, Motivation, and Engagement
- [[nasa-tlx-workload-gamified-ai-2026]] — Charge NASA-TLX dans les conditions ludifiées/IA
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS : motivation et ludification assistée par IA
