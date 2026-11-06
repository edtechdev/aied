---
title: "Apprentissage par le jeu"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-11-05T18:53:37-05:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-01"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'apprentissage par le jeu (game-based learning, GBL)** — l'utilisation des jeux eux-mêmes (numériques ou physiques) comme support et contexte d'apprentissage, où les mécaniques, les défis et la progression du jeu portent les contenus éducatifs. Les apprenants apprennent *en* jouant. De manière connexe, la **ludification (gamification)** applique des éléments de conception de jeux (points, badges, niveaux, classements) à des activités d'apprentissage qui ne sont pas des jeux, sans les transformer en jeux complets. Dans l'enseignement de l'IA et de la [[educational-robotics|robotique]], les deux approches sont utilisées pour rendre les contenus techniques engageants et motivants.

## Questions à examiner

- L'apprentissage par le jeu utilise le jeu lui-même comme support d'apprentissage — on apprend *en* jouant. La ludification se contente de superposer des points, des badges et des niveaux à une activité qui n'est pas un jeu. Selon vous, quelle différence ces deux approches font-elles réellement sur l'apprentissage, par opposition à l'engagement à court terme ?
- Une revue comparative a montré que l'apprentissage par le jeu était plus répandu dans les contextes informels, tandis que la ludification dominait les salles de classe formelles et favorisait l'apprentissage par projets. Pourquoi, à votre avis, chaque approche a-t-elle trouvé un terrain différent — et qu'est-ce que cela nous apprend sur le contexte où chacune fonctionne le mieux ?
- La ludification s'appuie sur la théorie de l'autodétermination — [[agency|autonomie]], compétence, affiliation. Si la motivation consiste à satisfaire ces besoins, pourquoi un système de points et de badges peut-il réussir ou échouer selon la manière dont il façonne l'effort perçu et l'attention ?
- La [[research-methods-aied|recherche]] suggère que le bénéfice motivationnel des dispositifs ludiques et assistés par IA dépend de la manière dont ils façonnent la charge perçue et l'attention, et non de la ludification seule. Quand avez-vous vu un jeu ou des badges stimuler l'engagement sans améliorer réellement l'apprentissage — ou l'inverse ?

## Introduction

Le GBL s'appuie sur les théories de la [[motivation]], de l'[[student-engagement|engagement des apprenants]] et de l'[[active-learning|apprentissage actif]] : les jeux procurent une motivation intrinsèque, une rétroaction immédiate et des contextes de problèmes authentiques. Il recoupe la [[simulation]], l'[[project-based-learning|apprentissage par projets]] et la [[educational-robotics|robotique éducative]]. Le GBL est particulièrement pertinent pour la [[educational-robotics|robotique éducative]], la [[computational-thinking|pensée computationnelle]] et l'[[cs-education|enseignement de l'informatique]], où les jeux peuvent rendre concrets et ludiques des concepts techniques abstraits.

### Comment le GBL apparaît dans la recherche de la base de connaissances

- **Éducation à la robotique :** [[game-based-gamified-robotics-education-review-2026|une revue systématique comparative]] de l'apprentissage par le jeu et de la ludification dans l'éducation à la robotique a montré que le GBL était plus répandu dans les contextes informels, tandis que la ludification dominait les salles de classe formelles et favorisait l'[[project-based-learning|apprentissage par projets]].
- **Jeux médiés par des robots :** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] est un jeu de rôle médié par un robot destiné à une intervention contre le harcèlement, et [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] utilise la [[storytelling-in-education|narration numérique]] interactive pour stimuler la motivation.
- **Agents [[conversational-ai|conversationnels]] d'IA dans les jeux de simulation :** Wenzel, Geiger et Liening (2026) dérivent le cadre CAIS-GBL — quatre principes de conception et quinze caractéristiques de conception pour les agents conversationnels d'IA dans l'apprentissage par le jeu numérique — de méta-exigences théoriques couvrant l'engagement cognitif, motivationnel, [[affective-computing|affectif]] et [[sociocultural-learning|socioculturel]], avec une posture d'[[equity-in-ai-education|équité]] dès la conception. Leur agent instancié (Lara), dans un jeu de simulation d'entreprise, a été positivement accueilli pour la présence cognitive et [[community-of-inquiry|sociale]] et pour le soutien à l'[[self-regulated-learning|apprentissage autorégulé]], comblant le manque fréquent de rétroaction [[formative-assessment|formatif]] et de réflexion structurée dans les jeux de simulation.

- **Efficacité de l'IA appliquée au GBL :** une [[meta-analysis-systematic-review|méta-analyse]] portant sur 55 études d'apprentissage par le jeu assisté par IA fait état de gains en connaissances, en motivation intrinsèque et en engagement affectif, mais seulement 4 études (7%) franchissaient sa barre de haute qualité et seulement 4 (7%) étaient des [[rct|ECR]] ([[ai-game-based-learning-systematic-review-2026|Kaşarcı et Yurt, 2026]]). L'efficacité tenait à l'alignement du mécanisme d'IA sur une [[learning-theories|théorie de l'apprentissage]] explicite.
- **L'[[generative-ai|IAG]] comme auteur du jeu, non comme joueur :** [[xie-genai-mystery-game-legal-education-2026|Xie et coll. (2026)]] ont fait rédiger par un modèle sept personnages et le matériau narratif d'un jeu de rôle d'enquête hors ligne, et le jeu a ensuite battu le cours magistral du même enseignant dans un essai randomisé de 42 participants par bras (*η*² partiel = 0.566). Les étudiants n'ont jamais utilisé l'IA : l'effet appartient donc au format.

- **Les étudiants comme concepteurs de jeux plutôt que comme joueurs :** [[karampa-students-game-designers-ai-literacy-2026|Karampa et coll. (2026)]] ont fait concevoir à 22 élèves du primaire de 8 à 12 ans un jeu de plateau d'évasion augmenté sur la désinformation, en empilant l'[[project-based-learning|apprentissage par projet]], la [[design-thinking|pensée design]] et le cadre d'escape room Room2Educ8. La [[ai-literacy|littératie en IA]] composite sur un questionnaire DigComp 3.0 de 20 items est passée de 3.684 à 4.309 sur une échelle en 5 points, t(21) = −21.086, p < .001, les cinq domaines de compétence progressant. La classe a produit 11 propositions avec des invites d'IA et les a fusionnées en un seul jeu constructible. [[self-report-measures|Auto-déclaration]], une seule classe, et aucun groupe témoin.

- **Scinder l'IA en un coach de dialogue et un moteur de difficulté.** Un environnement Roblox amélioré par l'IA pour la pensée computationnelle au secondaire supérieur associait un personnage non joueur GPT-4, limité à deux ou trois phrases et interdit de donner des réponses, à un moteur fondé sur des règles qui fixait la difficulté à partir du temps de résolution et du taux d'erreur ([[hengsawat-ai-game-based-learning-computational-thinking-2026|Hengsawat, Junruang et Kanjug, 2026]]).

### Ludification

La **ludification** est l'application d'éléments de conception de jeux (points, badges, niveaux, classements, défis, barres de progression) à des contextes non ludiques afin de motiver et d'engager les utilisateurs. Contrairement à l'apprentissage par le jeu — où l'apprentissage se produit *au travers d'un* jeu — la ludification superpose des mécaniques de jeu à une activité d'apprentissage existante sans en faire un jeu complet. Elle est utilisée en éducation pour stimuler la motivation, l'[[student-engagement|engagement des apprenants]] et la persévérance, et elle est largement appliquée dans les contextes formels de salle de classe.

La ludification s'appuie sur la théorie motivationnelle, en particulier la [[self-determination-theory]] (qui soutient l'autonomie, la compétence et l'affiliation) et sur les cadres de changement comportemental. Elle a montré une synergie particulière avec l'[[project-based-learning|apprentissage par projets]] dans des domaines appliqués comme la robotique. Dans la recherche de la base de connaissances :

- **Éducation à la robotique :** la revue comparative a montré que la ludification dominait les salles de classe formelles en éducation à la robotique (p < .001) et favorisait fortement l'[[project-based-learning|apprentissage par projets]] (p = .009), tandis que l'apprentissage par le jeu était plus courant dans les contextes informels.
- **Engagement et motivation :** la ludification est utilisée à travers la base de connaissances pour accroître l'engagement et la motivation des apprenants dans les contextes d'IA, de [[cs-education|programmation]] et d'apprentissage [[stem-education|STIM]]. La recherche [[genai-motivation-engagement-2026|IA générative, motivation et engagement]] examine comment les éléments ludiques se combinent à l'IA pour soutenir l'intérêt des apprenants. Deux études de 2026 prolongent ces travaux en comparant des conditions ludifiées et assistées par IA à un enseignement traditionnel : [[nasa-tlx-workload-gamified-ai-2026|une étude NASA-TLX]] a mesuré la charge perçue dans des conditions d'apprentissage traditionnel, ludifié et assisté par IA, et [[arcs-motivational-ergonomics-gamified-ai-2026|une étude ARCS]] a examiné l'« ergonomie » motivationnelle dans l'apprentissage ludifié et assisté par IA, avec des implications pour la [[professional-training|formation en milieu professionnel]]. Ensemble, elles montrent que le bénéfice motivationnel des dispositifs ludiques et assistés par IA dépend de la manière dont ils façonnent la [[motivation|charge perçue]], la charge de travail et l'attention (par exemple les dimensions attention/pertinence du modèle ARCS), et non de la ludification seule.

Le GBL et la ludification se relient ensemble à la [[educational-robotics|robotique éducative]], à l'[[student-engagement|engagement des apprenants]], à la [[motivation]], à la [[self-determination-theory|théorie de l'autodétermination]], à l'[[active-learning|apprentissage actif]], à la [[simulation]], à l'[[project-based-learning|apprentissage par projets]] et à la [[computational-thinking|pensée computationnelle]].

## Idées fausses courantes

**« L'apprentissage par le jeu assisté par l'IA dispose d'une base de preuves solide. »** La synthèse qui porte cette affirmation est à la fois vaste et mince. Une **revue systématique de 55 études** trouve des effets positifs sur les connaissances, la motivation intrinsèque et l'engagement affectif — mais seules **4 études (7%) atteignent son seuil de haute qualité**. Un effet positif regroupé tiré d'un corpus où 93% des études passent sous la barre de qualité de la revue elle-même est une hypothèse accompagnée d'une littérature, non un constat sur lequel concevoir.

**« Des effets positifs sur la motivation et sur les connaissances se renforcent mutuellement. »** Ils sont mesurés séparément et, dans la littérature plus large, programmés séparément : [[student-engagement|l'engagement et la réussite]] évoluent selon des calendriers différents, si bien qu'un jeu qui élève la motivation intrinsèque a démontré un seul résultat. Traiter le résultat motivationnel comme une corroboration du résultat cognitif gonfle un constat en deux parties en une affirmation plus forte que la conception ne la soutient.

**« Si un jeu engage les étudiants, l'apprentissage découle du plaisir. »** Le plaisir est le mécanisme de livraison de la répétition qu'un jeu rend tolérable, non le mécanisme de l'apprentissage. Un jeu qui ajoute de l'engagement sans ajouter de pratique productive a ajouté la partie qui n'a jamais manqué.

## Implications pour la pratique

**Pour les enseignants**

- Demandez ce que le jeu fait répéter aux étudiants, et non s'ils l'apprécient. La répétition de la bonne opération est le mécanisme ; le plaisir est ce qui rend la répétition tolérable.
- Traitez les résultats motivationnels et cognitifs comme des affirmations distinctes, et ne laissez pas une hausse de la motivation intrinsèque être rapportée comme une preuve d'apprentissage.
- Vérifiez la qualité au regard de la barre de la revue avant d'adopter un titre sur la foi d'une synthèse positive : seules 7% des études l'atteignent.

**Pour les développeurs**

- Instrumentez les résultats d'apprentissage séparément de l'engagement et de l'affect, et publiez les deux.
- Construisez d'abord la pratique productive, la couche de jeu ensuite ; une couche de jeu posée sur une pratique faible a automatisé la partie qui n'a jamais été rare.

**Pour les chercheurs**

- Élevez la qualité de conception du champ plutôt que son volume ; un taux de haute qualité de 7% est la contrainte déterminante de ce qui peut être conclu.

- **La rétroaction conversationnelle dans une simulation accroît la charge utile sans réduire la charge extrinsèque.** Dans un jeu de simulation d'entreprise de cinq semaines avec **234 étudiants**, les utilisateurs réguliers d'un agent conversationnel de rétroaction fondé sur GPT-4o déclaraient une **charge cognitive utile significativement plus élevée** que les utilisateurs ayant accès sans s'engager (β = −.468, p < .001) et que le contrôle à rétroaction statique (β = −.253, p = .028) — tandis que **la charge extrinsèque ne montrait aucun effet** dans l'une ou l'autre spécification (F(1, 219) = 0.499, p = .481). Les deux charges **ont décliné au fil des cinq semaines** (extrinsèque β = −.388, p < .001), un effet de nouveauté mesuré sur la charge cognitive plutôt que sur l'engagement ([[wenzel-conversational-ai-feedback-cognitive-load-game-2026|Wenzel, Geiger et Liening, 2026]]). Le point de conception est que la rétroaction portait la [[personalized-learning|personnalisation]], la signalisation, la segmentation et la structure de feed-forward sur 19 indicateurs concrets — la surface conversationnelle seule n'est pas le traitement.

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
- [[bots-blocks-project-based-robotics-education-2026]] — Bots et blocs : un cours de robotique par projets
- [[white-wu-robotics-ai-education-2026]] — La robotique et l'IA en éducation
- [[genai-motivation-engagement-2026]] — L'IA générative, la motivation et l'engagement
- [[nasa-tlx-workload-gamified-ai-2026]] — Charge NASA-TLX dans les conditions ludifiées/IA
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS : motivation et ludification assistée par IA
- [[xie-genai-mystery-game-legal-education-2026]] — Un jeu de rôle d'enquête écrit par l'IAG comparé au cours magistral en formation juridique (Xie et coll. 2026)

- [[hengsawat-ai-game-based-learning-computational-thinking-2026]] — Conception et validation préliminaire d'un environnement d'apprentissage par le jeu amélioré par l'IA pour la pensée computationnelle
- [[karampa-students-game-designers-ai-literacy-2026]] — Des élèves du primaire conçoivent un jeu de plateau d'évasion ; la littératie en IA progresse en un seul atelier
