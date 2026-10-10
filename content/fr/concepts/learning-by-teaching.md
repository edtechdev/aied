---
title: "Apprendre en enseignant"
created: "2026-08-14T10:45:34-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
pedagogy: [active-learning, learning-by-teaching, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring]
assessment: [feedback]
discipline: [cs education]
confidence: high
translation_of: concepts/learning-by-teaching
source_updated: "2026-10-01T18:49:55-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Apprendre en enseignant (LbT)** — le cadre pédagogique, fondé sur l'effet protégé, dans lequel les étudiants approfondissent leur compréhension en expliquant la matière à un pair, à un tutoré ou à un agent. Des décennies de travaux sur le LbT et le tutorat par les pairs montrent que le fait d'expliquer des concepts, d'anticiper les malentendus et de répondre aux questions consolide la compréhension et soutient le transfert. À l'ère de l'IA, les **agents enseignables** — et, de plus en plus, les **grands modèles de langue configurés comme tutorés novices** — opérationnalisent le LbT à grande échelle, positionnant les étudiants comme des enseignants qui doivent expliquer, corriger et combler les lacunes.

## Questions à examiner

- Rappelez-vous un moment où vous n'avez vraiment compris quelque chose qu'après l'avoir expliqué à quelqu'un d'autre. Que se passait-il mentalement — et pourquoi l'enseignement produit-il, selon vous, une compréhension plus profonde que le simple fait d'étudier seul ?
- Une opinion courante veut que l'enseignement soit réservé aux experts, et que les novices n'aient rien à offrir. Or, « apprendre en enseignant » repose sur la prémisse inverse : se préparer à enseigner vous force à organiser le savoir et à trouver vos propres lacunes. Comment cela recadre-t-il la question de savoir qui bénéficie de l'enseignement ?
- Cette page décrit les « agents enseignables » — des logiciels que les étudiants enseignent dans le cadre de leur apprentissage. Avec un grand modèle de langue, vous pouvez configurer un chatbot en tutoré novice faillible qui pose des questions et fait des erreurs. Que faudrait-il concevoir dans un tel tutoré pour qu'il améliore réellement l'apprentissage, au lieu de simplement bavarder ?
- Un défi est l'« ingénierie de la faillibilité » : les modèles d'IA sont entraînés à donner des réponses expertes et fluides, ce qui est l'opposé du novice en difficulté que le paradigme apprendre en enseignant recherche. Pourquoi un tutoré sujet aux erreurs pourrait-il être plus efficace pour l'apprentissage qu'un tutoré correct ?
- Un agent enseignable fondé sur ChatGPT a amélioré l'apprentissage, mais sa tendance à générer du code correct a limité la pratique de la correction d'erreurs. Comment un outil qui donne toujours la bonne réponse pourrait-il léser l'apprenant qui a besoin de s'exercer à repérer et à corriger les erreurs ?
- Si vous deviez concevoir une activité d'apprentissage en enseignant pour votre propre classe, qu'est-ce qui rendrait la tâche d'enseignement *contraignante* au point que les étudiants y investissent un véritable effort, au lieu de copier-coller une réponse ?

## Introduction

Apprendre en enseignant est le constat, généralement attribué à l'effet protégé, selon lequel se préparer à enseigner — et expliquer réellement à une autre personne ou à un agent enseignable — produit un traitement plus profond que le fait d'étudier seul. Les exigences de l'enseignement forcent les apprenants à organiser le savoir, à anticiper les [[misconceptions|malentendus]] et à générer des explications, ce qui met au jour les lacunes de leur propre compréhension et renforce la [[metacognition|métacognition]]. L'IA entre dans cette idée par les deux bouts : les [[intelligent-tutoring|systèmes de tutorat]] et les agents enseignables peuvent jouer l'étudiant, tandis qu'une littérature croissante demande ce qu'il advient de l'apprentissage lorsque c'est la machine, et non l'apprenant, qui fournit l'explication (l'[[generative-ai|IA générative]], l'[[cs-education|enseignement de l'informatique]]).

## L'effet protégé

Apprendre en enseignant repose sur le constat que se préparer à enseigner et expliquer réellement à une autre personne produit un traitement plus profond que le fait d'étudier seul. Les exigences de l'enseignement — articuler des idées, anticiper les malentendus et répondre aux questions — forcent les apprenants à organiser le savoir, à identifier les lacunes de leur propre compréhension et à générer des explications qui soutiennent la rétention et le transfert. Les bénéfices sont les plus évidents dans les contextes d'[[collaborative-learning|apprentissage collaboratif]] et dans les domaines bien structurés qui se prêtent aux agents enseignables (par exemple Betty's Brain). L'effet protégé nomme le mécanisme : les étudiants déploient davantage d'efforts et réfléchissent plus profondément lorsqu'ils se sentent responsables d'enseigner quelque chose, de sorte qu'ils clarifient les [[misconceptions|idées fausses]] et comblent les lacunes par l'explication et la [[metacognition|métacognition]].

## Les agents enseignables : du fondé sur des règles au conversationnel

Les **agents enseignables** sont les systèmes logiciels par lesquels l'apprentissage en enseignant est opérationnalisé — un apprenant enseigne un système dans le cadre de son apprentissage. Les agents enseignables traditionnels étaient fondés sur des règles ou sur la recherche documentaire, et ne pouvaient répondre qu'à un nombre limité de commandes ; leur limitation principale était l'incapacité de mener un dialogue en langage naturel. Les [[llm|grands modèles de langue]] changent cela : ils peuvent adopter souplement des rôles par l'[[prompt-engineering|ingénierie des invites]] — y compris le rôle d'un « tutoré » qui pose des questions ou fait des erreurs — et mener un dialogue ouvert, rendant le LbT possible dans des domaines moins structurés (l'écriture, le vocabulaire) que ce n'était le cas auparavant.

Le corpus de données probantes de la base de connaissances rattache ce déplacement aux **agents enseignables conversationnels fondés sur les grands modèles de langue** :

- **ChatGPT comme agent enseignable** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et coll.]]) soutient le LbT en programmation, améliorant les gains de connaissance, la capacité de programmation et l'[[self-regulated-learning|apprentissage autorégulé]] — bien que sa tendance à générer du code correct limite la pratique de la correction d'erreurs.
- **Explique à grande échelle** ([[explique-teachable-agent-algorithms-546-students-2026|Wang et coll.]]) a déployé un agent enseignable par IA (Algorithm Apprentice) auprès de 546 étudiants sur un semestre de 11 semaines, montrant que le dialogue orienté vers l'explication prédit moins de soumissions de quiz incorrectes, tandis que la réutilisation de contenus externes en prédit davantage.
- **L'enseignement du vocabulaire** ([[teaching-ai-vocabulary-lbt-llms-2026|Uchida et coll.]]) a employé un grand modèle de langue comme étudiant pour générer des questions dynamiques, améliorant la rétention à 3 et à 7 jours.

## Ingénierie de la faillibilité : les grands modèles de langue comme tutorés novices

Un défi de conception central pour les agents enseignables fondés sur les grands modèles de langue tient à ce que ces modèles sont entraînés à produire par défaut des réponses de niveau expert et fluides — l'opposé du novice faillible que le paradigme du LbT recherche. Faire d'un grand modèle de langue un bon tutoré requiert une **ingénierie de la faillibilité** :

- **Les erreurs générées peuvent passer pour authentiques.** Dans une étude d'annotation en aveugle, des experts ont classé à tort 164 des 196 (83.7%) soumissions Java générées par un grand modèle de langue comme écrites par des humains, de sorte qu'un tutoré peut fournir des bogues réalistes à déboguer, et pas seulement du code correct ([[simulating-students-java-programming-errors-llms|Keramati et coll. (2026)]]).

- **[[prompting-teachability-novice-personas-lbt-2026|Les invites pour l'enseignabilité]]** (Miller et Bosch) ont montré que les invites fondées sur des contraintes, qui forcent explicitement la production d'erreurs (par exemple, « réponds incorrectement » ou « trompe-toi sur 2 à 3 points »), suscitent un comportement de novice de manière bien plus fiable que les invites fondées sur le persona, sur les idées fausses ou sur l'incertitude.
- **[[socrates-students-instructors-llms-lbt-2025|Les lacunes de connaissance ingéniées]]** (Yang et coll.) conçoivent des problèmes que le grand modèle de langue ne peut résoudre sans des connaissances que seul l'étudiant possède, ce qui rend l'enseignement nécessaire et contre la dépendance passive de l'usage du grand modèle de langue comme tuteur.
- **Les contraintes d'apprenti d'Explique** (Wang et coll.) demandent au tutoré de (a) rester un novice, (b) continuer à demander des clarifications jusqu'à ce que l'explication de l'étudiant soit exacte, et (c) ne jamais révéler l'explication cible — et de *résister* aux étudiants qui essaient d'inverser les rôles et de faire expliquer le tutoré en retour.
- **Le désapprentissage comme voie vers la faillibilité au niveau des poids.** Le désapprentissage automatique supprime 16 composants de connaissance ciblés dans Mistral-7B, faisant tomber l'exactitude d'environ 0.75 à un taux d'oubli de 10% à moins de 0.5 à 40%, tandis que le modèle de base se maintenait près de 0.85. Les connaissances supprimées sont revenues par réapprentissage supervisé et par dialogue guidé par un entraîneur, de sorte que le niveau de connaissance du tutoré est un cadran plutôt qu'une affirmation ([[simulating-novice-students-machine-unlearning-2026|Song, Guo et Lin (2026)]]).

## Questionnement, autorégulation et apprentissage actif

Deux affordances supplémentaires reviennent à travers la base de connaissances :

- **Les questions identifient les lacunes de connaissance.** Les systèmes de LbT emploient les questions générées par l'apprenant pour exposer les lacunes et renforcer la compréhension, et les [[teaching-ai-vocabulary-lbt-llms-2026|questions générées par les grands modèles de langue]] remplacent les générateurs rigides fondés sur des modèles types.
- **Le réenseignement fait apparaître ce que la clarification manque.** Dans un système de révision post-cours réunissant 22 participants, le réenseignement réflexif d'un agent Pair a constamment exposé les écarts entre ce que les apprenants croyaient avoir compris et ce qu'ils pouvaient articuler, que la clarification fondée sur le cours seule n'avait pas révélés ([[knowloop-confusion-to-consolidation-2026|Fang et Reidsma (2026)]]).
- **Le LbT [[scaffolding|étaye]] l'auto-[[regulation|régulation]].** Enseigner à un [[conversational-ai|agent conversationnel]] favorise le [[self-efficacy|sentiment d'efficacité personnelle]] et la mise en œuvre de stratégies d'apprentissage autorégulé, et relie le LbT aux [[desirable-difficulties|difficultés souhaitables]] — l'acte exigeant d'expliquer et de corriger est lui-même une lutte productive que la suppression des frictions par l'IA effacerait par ailleurs.
- **Ce qui prédit l'apprentissage du tuteur est la construction de connaissances, non les connaissances préalables.** Sur 23 tuteurs de collège, la part des réponses qui construisaient le savoir plutôt qu'elles ne le reformulaient a prédit les scores au post-test conceptuel (β = .138, p < 0.05), tandis que les scores aux tests antérieurs n'ont pas prédit qui les produisait, et les tuteurs à faibles connaissances préalables qui construisaient le savoir ont terminé au même niveau que leurs pairs à connaissances préalables élevées ([[knowledge-building-tutor-learning-2026|Ameen et coll., 2026]]).

## Pourquoi cela compte dans l'IA en éducation

Apprendre en enseignant est le contrepoint constructif et [[active-learning|actif]] au schéma dominant du grand modèle de langue comme tuteur. Là où un tuteur donne des réponses (et risque la [[cognitive-offloading|dépendance excessive]]), un dispositif de LbT fait de l'étudiant l'enseignant, forçant l'explication, la détection des lacunes et la construction de connaissances. Cela positionne le LbT comme une stratégie clé pour transformer l'[[generative-ai|IA générative]] d'une béquille en un outil d'apprentissage plus profond, et le relie aux [[desirable-difficulties|difficultés souhaitables]], à l'[[active-learning|apprentissage actif]] et à la [[pedagogy|pédagogie]] [[constructivist|constructionniste]].

## Mettre l'apprentissage en enseignant en pratique

### Les patrons de conception d'un tutoré par IA

La [[research-methods-aied|recherche]] ci-dessus converge vers quelques patrons réutilisables pour transformer un grand modèle de langue expert par défaut en un tutoré productif :

- **Les invites de novice fondées sur des contraintes (les plus fiables).** Plutôt que de demander au modèle de « faire semblant d'être un étudiant confus », forcez explicitement la faillibilité et une boucle d'enseignement, par exemple : *« Tu es un étudiant novice qui apprend [concept]. Demande-moi de te l'enseigner. Pose des questions de clarification et trompe-toi délibérément sur 2 à 3 points au cours de notre conversation. N'énonce jamais toi-même la réponse correcte — attends que j'explique, puis dis-moi si j'ai été clair. »*
- **La garde de l'enseignement inversé.** Ajoutez une règle selon laquelle le tutoré doit *refuser* de réexpliquer la réponse lorsque l'étudiant essaie d'inverser les rôles : *« Si je te demande de résoudre le problème ou d'expliquer le concept, rappelle-moi que c'est moi l'enseignant et demande-moi plutôt de l'expliquer. »* Explique montre que cette résistance est ce qui préserve l'interaction de LbT.
- **Les lacunes de connaissance ingéniées.** Structurez la tâche de sorte que le modèle *ne puisse pas* répondre sans des informations que seul l'étudiant détient — le savoir de l'étudiant devient alors véritablement nécessaire, et non facultatif. Cela convertit l'interaction, d'un bavardage facultatif en un enseignement requis.
- **Un critère de réussite externe.** Donnez à l'enseignement une conséquence réelle — un quiz de gardien qui ne se déverrouille qu'après que l'étudiant a enseigné avec succès (Explique), ou une plateforme de jugement de code dont l'étudiant doit faire passer la production de l'agent (Chen). La responsabilité est ce qui soutient un effort authentique et empêche tout l'exercice de devenir une case à cocher.

### Conseils pour les enseignants

- **Rendez la tâche d'enseignement contraignante, et non un remplissage.** Les données probantes les plus solides sur l'[[student-engagement|engagement]] proviennent d'activités qui importent — Explique a placé un quiz noté derrière l'exercice d'enseignement ; Chen a lié la production du tutoré à la réussite d'une plateforme de jugement. Si l'enseignement est purement facultatif, les étudiants sauteront rationnellement la partie difficile.
- **Donnez aux étudiants un protocole d'enseignement, et pas seulement une fenêtre de dialogue.** Étayez l'interaction avec une structure — « explique le concept → donne un exemple concret → réponds aux questions du tutoré → vérifie la compréhension » — afin que le dialogue ouvert devienne une séquence d'enseignement délibérée, plutôt qu'une conversation sans but.
- **Traitez de front le déversement de contenu.** Explique a montré que le copier-coller direct de contenus externes est passé de moins de 15% à 30–35% des interactions à la fin du semestre. Expliquez aux étudiants pourquoi coller vainc la finalité de l'exercice, et envisagez une étape de responsabilisation (par exemple, « explique le malentendu de l'agent dans tes propres mots »).
- **Associez le LbT à la pratique du débogage.** Parce que l'IA écrit du code correct, les étudiants peuvent perdre la pratique de la correction d'erreurs. Demandez délibérément au tutoré de *mal implémenter* quelque chose, ou faites suivre la séance d'enseignement d'une tâche de recherche de bogues, afin que le débogage reste dans la boucle.
- **Surveillez le gradient d'effort.** Attendez-vous à ce que la nouveauté s'estompe ; prévoyez de varier les concepts cibles, d'ajouter du défi, ou de faire tourner le [[teacher-role|rôle d'enseignant]] entre les étudiants, afin de soutenir l'effort cognitif sur toute la durée du trimestre.

### Conseils pour les développeurs

- **Préférez les contraintes fortes au seul persona.** Inviter le modèle à l'« incertitude » ou à « un persona d'étudiant » n'est pas fiable ; forcez explicitement les erreurs et une boucle de clarification. (Voir [[prompting-teachability-novice-personas-lbt-2026]].)
- **Construisez un critère d'achèvement.** Définissez *quand l'étudiant a assez expliqué* (Explique employait une fonction-outil d'un grand modèle de langue rattachée aux objectifs d'apprentissage du concept), afin que l'interaction s'achève sur la compréhension, et non sur une limite de temps ou un nombre de tours fixe.
- **Journalisez et codez le dialogue.** Explique employait la détection du nombre de mots par minute ainsi qu'un codage sémantique par grand modèle de langue pour classer les interactions en usage détaillé / minimal / de contenus externes — c'est ce signal qui permet de détecter le contournement et le déclin de l'engagement avant qu'ils ne deviennent un problème.
- **Donnez aux enseignants un tableau de bord.** Les taux d'achèvement et les schémas [[qualitative-research|qualitatifs]] des interactions d'enseignement permettent à un humain d'intervenir lorsque l'effort diminue (les enseignants d'Explique suivaient exactement cela).

### Implications et questions ouvertes

- **Le LbT est un antidote évolutif à la dépendance excessive à l'IA** — il inverse le rôle tuteur/étudiant et maintient l'apprenant cognitivement actif, ce qui importe davantage à mesure que l'IA devient plus fluide et plus « serviable ».
- **La faillibilité est une fonctionnalité, non un bogue.** Un tutoré *trop* correct supprime la correction d'erreurs et la détection des lacunes qui font fonctionner le LbT ; concevez pour la lutte productive, et non contre elle.
- **Des questions ouvertes demeurent :** Comment les interactions de LbT se soutiennent-elles au-delà d'un semestre, une fois la nouveauté entièrement estompée ? Le LbT se transfère-t-il à des domaines non informatiques, moins structurés, à la même échelle ? Le codage automatisé du dialogue peut-il devenir un moniteur d'engagement pratique et en temps réel pour les enseignants ? Et comment garder le rôle d'enseignant porteur de sens pour *chaque* étudiant, plutôt que pour une minorité motivée ?

## Concepts liés

- [[pedagogical-patterns]] — Explaining to an AI tutee: the best-evidenced sequence in the knowledge base
- [[generative-ai]]
- [[active-learning]]
- [[constructivist]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[cs-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education

## Articles liés

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent for 546 students
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[socrates-students-instructors-llms-lbt-2025]] — Students as instructors of LLMs (Socrates)
- [[teaching-ai-vocabulary-lbt-llms-2026]] — Vocabulary learning by teaching AI
- [[knowloop-confusion-to-consolidation-2026]] — Teach-back consolidation in a conversational review system
- [[simulating-novice-students-machine-unlearning-2026]] — machine unlearning to hold a tutee at a novice knowledge level, and relearning through teaching dialogue
- [[simulating-students-java-programming-errors-llms]] — Simulating student errors with LLMs
- [[knowledge-building-tutor-learning-2026]] — knowledge-building responses, not prior knowledge, predict tutor learning
