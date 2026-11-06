---
title: "L'apprentissage socioculturel"
created: "2026-07-28T10:44:35-04:00"
updated: "2026-11-05T18:33:20-05:00"
type: concept
foundations: [agency, human-ai-collaboration]
pedagogy: [constructivist, learning-theories, scaffolding, sociocultural-learning]
technology: [generative-ai]
confidence: high
translation_of: concepts/sociocultural-learning
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

> **L'apprentissage socioculturel** — la famille de théories, enracinées dans l'œuvre de Vygotsky, qui soutient que l'apprentissage et le développement naissent de la participation sociale et sont médiatisés par les outils culturels, le langage et l'interaction avec des personnes plus savantes. La cognition est distribuée entre les personnes, les artefacts et les environnements, plutôt que de résider uniquement dans les individus. Dans l'[[ai-education|IA en éducation]], la théorie socioculturelle cadre la manière dont l'[[generative-ai|IA générative]] fonctionne comme une nouvelle sorte d'*agent de médiation* — un outil qui à la fois médiatise l'activité et génère des contributions contingentes à l'interaction — et cadre la conception de l'[[scaffolding|étayage]], de la zone proximale de développement (ZPD), de l'apprentissage en apprentissage (apprenticeship) et des communautés de pratique. Voir [[generative-ai-mediational-agent-sociocultural-2026]].

## Questions à examiner

- La zone proximale de développement de Vygotsky est l'écart entre ce que vous pouvez faire seul et ce que vous pouvez faire avec de l'aide. Rappelez un moment où une indication arrivée à point nommé vous a permis d'accomplir quelque chose que vous ne pouviez faire seul — qu'est-ce qui rendait cette aide efficace, et quand aurait-elle pu trop en dévoiler ?
- La page affirme que la pensée humaine est « médiatisée » par des outils culturels comme le langage et l'écriture, qui réorganisent notre manière de raisonner. Si c'est vrai, comment devrions-nous considérer un [[conversational-ai|agent conversationnel]] d'IA comme une nouvelle sorte d'outil de pensée — et comment pourrait-il changer ce que « savoir » signifie ?
- La théorie socioculturelle dit que la cognition est distribuée entre les personnes, les artefacts et les environnements, plutôt qu'à l'intérieur de têtes individuelles. Cela correspond-il à votre expérience de la manière dont vous accomplissez réellement les choses, et qu'est-ce que cela signifierait pour la conception de l'apprentissage si c'est vrai ?
- Si l'apprentissage se produit d'abord entre les personnes et seulement ensuite au sein de l'individu, quels sont les risques d'un tuteur IA qui permet à un élève d'interagir surtout avec une machine plutôt qu'avec des pairs ou un humain plus savant ?
- Comment décideriez-vous du degré de soutien qu'un tuteur IA devrait fournir pour qu'un apprenant progresse sans que la réponse lui soit simplement livrée ?

## Introduction

### Le concept

La théorie socioculturelle (Vygotsky, 1978 ; Luria ; Leontiev) soutient que les fonctions mentales supérieures se développent par la participation à une activité culturellement organisée. À la différence des approches qui situent l'apprentissage uniquement dans le traitement de l'information par l'individu, la perspective socioculturelle souligne que :

- **La médiation est fondamentale.** Les humains pensent avec et à travers des outils culturels — langage, écriture, schémas, [[ai-technologies|Technologies de l'IA]] — qui réorganisent leur manière de raisonner, de mémoriser et de résoudre des problèmes (Wertsch, 1991). Ces outils ne transmettent pas simplement de l'information ; ils remodèlent la cognition et la participation.
- **L'apprentissage est social.** Les fonctions mentales supérieures apparaissent d'abord entre les personnes (de manière intersubjective, dans l'interaction) et seulement ensuite au sein de l'individu. L'apprentissage naît de la participation avec des [[teacher-role|enseignants]], des pairs et des communautés — dans des processus comme l'[[scaffolding|étayage]], l'apprentissage en apprentissage et le mouvement à travers la ZPD.
- **La [[distributed-cognition|cognition est distribuée]].** Le travail cognitif est réparti entre les personnes, les artefacts et les environnements (Hutchins ; Clark & Chalmers ; Pea), plutôt que contenu dans l'esprit individuel. La [[distributed-cognition|cognition distribuée]], l'[[situated-learning|apprentissage situé]] et les communautés de pratique prolongent le courant socioculturel.

### La zone proximale de développement (ZPD)

La ZPD (Vygotsky) est le concept socioculturel le plus largement appliqué dans le [[intelligent-tutoring|tutorat par IA]] : l'espace entre ce qu'un apprenant peut faire seul et ce qu'il peut faire avec une assistance. L'apprentissage se produit le plus efficacement lorsque l'enseignement cible cette zone — assez exigeant pour pousser le développement, assez soutenu pour permettre de progresser. C'est le fondement théorique de l'[[scaffolding|étayage]] : un soutien temporaire et ajustable, retiré à mesure que la compétence grandit. Dans l'IA en éducation, la ZPD cadre la question centrale de conception : combien de soutien un [[intelligent-tutoring|tuteur IA]] devrait-il fournir pour que l'apprentissage progresse sans que la réponse soit dévoilée — voir [[stanford-evidence-base-ai-k12-2026]].

Une aide produite par une machine peut tomber à l'intérieur de cette zone. Dans une étude randomisée portant sur 274 [[adult-learning|apprenants adultes]] dans quatre sous-domaines des mathématiques, des indices de solutions rédigées générés par ChatGPT ont produit un gain pré-post de 17,00 % contre 1,85 % sans indices, tandis que les indices rédigés par des tuteurs humains produisaient 11,62 % ; les deux conditions d'aide n'étaient pas statistiquement séparables ([[chatgpt-hints-human-tutor-learning-gains-2024|Pardos et Bhandari, 2024]]). Le taux d'erreur nuance l'équivalence : 32 % des indices générés échouaient aux contrôles de qualité jusqu'à ce que l'[[prompt-engineering|invite d'auto-cohérence]] ramène ce taux près de zéro dans les trois sous-domaines d'algèbre et à 13 % en statistique. Un autre plus savant qui se trompe une fois sur trois reste un agent de médiation, ce qui explique pourquoi la contribution de la machine doit être vérifiée avant qu'un apprenant ne s'appuie dessus.

### L'apprentissage socioculturel dans l'IA en éducation

La théorie socioculturelle façonne la [[research-methods-aied|recherche]] en AIED de plusieurs manières distinctes :

- **L'IA comme agent de médiation.** L'IA générative complique la distinction socioculturelle entre moyens de médiation et interaction sociale : elle médiatise à la fois l'activité *et* génère des contributions contingentes sensibles au contexte qui façonnent l'interaction, sans posséder d'intentionnalité, d'appartenance sociale ni de redevabilité. Warschauer, Tate et Ritchie (2026) proposent l'*agent de médiation* comme catégorie hybride, et en dérivent des habitudes de participation plaçant l'humain d'abord (primauté de la cognition humaine, [[student-engagement|engagement]] intentionnel, agentivité de supervision, vigilance épistémique, [[self-regulated-learning|autorégulation]] réflexive) pour préserver l'[[agency|agentivité de l'apprenant]]. ([[generative-ai-mediational-agent-sociocultural-2026]])

- **Un compte rendu du rôle régulateur de l'IA sensible au stade.** [[ai-cognitive-partner-co-regulation-learning|Un cadre développemental de la corégulation humain-IA]] attribue à l'IA quatre rôles — étai, soutien métacognitif, mémoire externe et partenaire de décision — et les situe par stade : régulation externe structurée dans la [[early-childhood-elementary-ai-education|petite enfance]], partenaire [[metacognition|métacognitif]] dans l'enfance moyenne et l'adolescence, et collaborateur sur la cognition complexe à l'âge adulte.
- **Un étayage calibré sur la ZPD.** Les [[intelligent-tutoring|tuteurs IA]] devraient calibrer dynamiquement l'aide pour qu'elle se situe dans la zone de chaque apprenant. [[stanford-evidence-base-ai-k12-2026]] montre comment des tuteurs ajustés au niveau de l'apprenant surpassent une assistance générique ; l'[[adaptive-learning|apprentissage adaptatif]] et [[golrang-propact-pair-programming-2026]] opérationnalisent la ZPD en ajustant la difficulté et les indices ; et des cadres fondés sur des principes comme [[finkelstein-principled-ai-education-2025]] soutiennent que le soutien devrait être retiré à mesure que la compétence grandit.
- **Le signal pour sortir de la zone est l'intention visée, non la profondeur.** Un tuteur qui intensifie et estompe son aide décision par décision a concédé 65,0 % du temps après un tour portant sur une décision *différente*, soit le double du taux observé pour les tours visant la décision soutenue, et la profondeur de la réponse n'ordonnait pas les résultats ([[adaptive-scaffolding-contingency-comet-tutor-2026|Hou et coll. (2026)]]). Le retrait suppose un apprenant qui répond : la prise en compte est tombée de 37,0 % après la première demande à 21,8 % après la troisième, si bien qu'un silence n'atteste pas de la disponibilité à apprendre.
- **Une quatrième zone : ce que le modèle sait.** [[scan-framework-task-assignment-generative-ai-2025|Tsim et Gutoreva (2025)]] prolongent le diagramme de Vygotsky plutôt que la boucle de tutorat, en ajoutant une zone *connue de l'[[generative-ai|IA générative]]* à la ZPD et en en déduisant quatre sous-zones qui classent ce à quoi une tâche devrait être confiée : Substitute (aucune connaissance spécifique à la tâche, si bien que la compétence générale du modèle la porte), Aid (connaissance partielle, augmentée), Complement (assez de connaissances pour superviser la production du modèle), et Non-negotiable (assez pour la faire seul, si bien que la délégation n'ajoute pas grand-chose). L'[[scaffolding|étayage]] s'exprime comme une affectation de tâches plutôt que comme une livraison d'indices, et une boucle [[metacognition|métacognitive]] d'évaluation, de réflexion et d'apprentissage en temps réel est ce qui déplace une tâche entre les sous-zones au fil du temps.
- **Apprentissage en apprentissage et communauté.** Les idées socioculturelles fondent l'apprentissage cognitif en apprentissage, le modelage, l'accompagnement et l'effacement progressif ; les communautés de pratique cadrent l'apprentissage comme un mouvement vers une participation plus pleine aux pratiques d'une communauté.
- **Contexte culturel et [[governance|institutionnel]].** Le courant socioculturel, proche du [[constructivist|constructivisme]], insiste sur le fait que la dimension culturelle façonne ce qui compte comme savoir, qui fait autorité et ce que l'effort signifie — voir le cadrage apprenants–contextes–cultures de la [[young-people-learning-generative-ai-rapid-review-2026|revue rapide de Sydney sur le PreK-12]].
- **Valider les mesures du discours exige les jeunes dont le discours est mesuré.** Recontextualiser les définitions des gestes discursifs (talk moves) avec quatre élèves focaux a augmenté le F1 de classification des [[llm|LLM]] de +0.104 pour Claim et de +0.23 pour Question, et les interprétations des élèves eux-mêmes divergeaient des cadrages adultes et du modèle — une limite structurelle de la classification fondée sur le texte, et non un problème de taille des données ([[youth-enter-chat-llm-student-talk-2026|Santos-Deonizio et al. (2026)]]).

### Connexion avec la charge cognitive et la métacognition

Le courant socioculturel est étroitement couplé à la théorie de la [[cognitive-offloading|charge cognitive]] (le soutien devrait gérer la charge sans éliminer l'effort productif) et à la [[metacognition|métacognition]] (les apprenants dans la zone surveillent et régulent activement leur compréhension). [[stanford-evidence-base-ai-k12-2026]] synthétise les données du [[k-12|primaire et secondaire]] montrant que les outils d'IA fonctionnent le mieux lorsqu'ils maintiennent les apprenants dans la ZPD plutôt que de répondre à leur place, et la recherche sur [[human-in-the-loop-ai|l'humain dans la boucle]] examine comment le soutien humain et celui de l'IA définissent conjointement la zone de l'apprenant.

- **L'IA générative comme agent de médiation (2026) :** en s'appuyant sur la médiation vygotskienne, un article théorique propose de recadrer l'IA générative non pas simplement comme un outil ou un moyen de médiation, mais comme un *agent de médiation* qui participe activement à l'activité d'apprentissage, brouillant la frontière outil-contre-interaction sociale centrale dans la théorie socioculturelle ([[generative-ai-mediational-agent-sociocultural-2026]]). Cela positionne les modèles génératifs comme des coparticipants plutôt que comme des instruments passifs, avec des implications pour la manière dont la médiation, l'[[agency|agentivité]] et la relation apprenant-IA sont théorisées dans les [[learning-sciences|sciences de l'apprentissage]].

## Idées fausses courantes

**« La théorie socioculturelle porte sur les facteurs sociaux de l'apprentissage, en complément de la cognition individuelle. »** L'affirmation plus forte est que la cognition est **répartie entre les personnes, les artefacts et les environnements** plutôt que logée dans des têtes individuelles. Dans cette vue, une IA n'est pas une aide externe ajoutée à la cognition d'un apprenant ; elle est une composante du système dans lequel la cognition s'exécute, ce qui change ce qu'il faut mesurer.

**« Si la cognition est répartie, l'évaluation individuelle mesure la mauvaise chose. »** Cela change l'interprétation plutôt que d'abolir la mesure. Ce que l'évaluation saisit dépend de ce qui est présent dans le système à ce moment-là, ce qui explique pourquoi les performances assistée et non assistée divergent — ce sont les mesures de configurations différentes.

**« Ajouter un outil à un groupe ne change que son efficacité. »** Cela change la division du travail, qui est l'unité que la théorie analyse. Un groupe qui adresse la plupart de ses questions à un agent a redistribué le travail cognitif même lorsque la production reste inchangée.

**« La cognition distribuée implique que l'individu ne compte pas. »** Elle implique que la contribution de l'individu ne peut être lue à partir de la seule performance individuelle ; l'unité d'analyse est le système d'activité, non la personne isolée.

## Concepts liés

- [[scaffolding]]
- [[constructivist]]
- [[learning-theories]]
- [[activity-theory-aied]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[human-ai-collaboration]]
- [[desirable-difficulties]]
- [[adaptive-learning]]
- [[human-in-the-loop-ai]]
- [[k-12]]
- [[intelligent-tutoring]]

## Articles liés
- [[youth-enter-chat-llm-student-talk-2026]] — Quand les jeunes entrent dans le chat : validation de mesures du discours étudiant fondées sur les LLM
- [[generative-ai-mediational-agent-sociocultural-2026]] — L'IA générative comme agent de médiation
- [[golrang-propact-pair-programming-2026]] — Collaborative AI tutoring
- [[finkelstein-principled-ai-education-2025]] — Principled AI education frameworks
- [[stanford-evidence-base-ai-k12-2026]] — Stanford evidence base for AI in K-12
- [[young-people-learning-generative-ai-rapid-review-2026]] — Revue rapide de Sydney sur l'IA générative au préscolaire et en K-12
- [[ai-cognitive-partner-co-regulation-learning]] — L'IA comme partenaire cognitif et co-régulation
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — Des indices rédigés par un LLM égalaient les indices de tuteurs humains sur les gains d'apprentissage en mathématiques (Pardos et Bhandari 2024)
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Estomper selon ce que vise le tour de l'apprenant, non selon la profondeur de la réponse
