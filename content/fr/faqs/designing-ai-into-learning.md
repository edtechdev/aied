---
title: "Comment l'IA doit-elle être conçue dans l'expérience d'apprentissage ?"
created: "2026-09-22T12:00:00-04:00"
updated: "2026-09-22T12:00:00-04:00"
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
translation_of: faqs/designing-ai-into-learning
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---
*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Comment l'IA doit-elle être conçue dans l'expérience d'apprentissage ?


**Partez de l'objectif et du processus d'apprentissage, et non de la fonctionnalité d'IA.** Le concept de [[pedagogy|pédagogies et stratégies d'enseignement]] de la base de connaissances souligne qu'une même IA peut servir d'appui, d'interlocuteur [[socratic-method|socratique]], de partenaire de rétroaction, de [[simulation]] ou de générateur de réponses selon la conception pédagogique. Ce qui compte, c'est de savoir si la configuration préserve l'activité qui produit l'apprentissage visé.

## Un schéma par défaut solide

Un schéma par défaut solide est le suivant : **l'apprenant essaie → l'IA soutient → l'apprenant évalue ou révise → l'apprenant démontre sa compréhension.** Plus concrètement :

- Préserver l'[[productive-failure|échec productif]] lorsqu'il sert l'apprentissage.
- Demander une prédiction ou une solution initiale avant d'afficher l'aide de l'IA.
- Privilégier les questions, les indices, les exemples, les contre-arguments et la rétroaction plutôt que l'achèvement immédiat.
- Exiger la vérification des affirmations qui ont des conséquences.
- Intégrer des occasions d'expliquer et d'[[learning-by-teaching|enseigner pour apprendre]].
- Réduire progressivement le soutien à mesure que la compétence se développe.
- Conserver quelques occasions sans IA pour que les apprenants puissent évaluer ce qu'ils savent faire seuls.

La synthèse [[reducing-ai-misuse|Reducing AI Misuse]] recommande précisément des séquences « réfléchir d'abord, IA ensuite, revenir sur son travail » et des points de contrôle délibérés de l'évaluation.

## Adapter le rôle de l'IA au niveau d'engagement cognitif

[[thermomix-genai-education-analogy-2026|l'analogie de la machine de cuisine de Rummel, Nachtigall et Panadero]] reformule la question de conception : au lieu de se demander *si* les apprenants utilisent l'[[generative-ai|IA générative]], elle demande *comment* cet usage façonne ce qu'ils deviennent. La transposition de quatre usages d'un appareil de cuisine connecté à des cas d'apprentissage, à travers les cadres [[icap-framework|ICAP]] et [[samr-model|SAMR]], donne une échelle de conception : externaliser entièrement un travail, sans révision ni [[critical-thinking|engagement critique]], relève de la substitution passive et fait courir le risque d'une [[cognitive-offloading|perte de compétences et d'une dépendance excessive]] ; affiner les [[prompt-engineering|invites]] et vérifier les productions par recoupement exige des [[prior-knowledge|connaissances préalables]] et de l'[[self-regulated-learning|autorégulation]] (actif / augmentation) ; utiliser l'IA pour produire des idées, structurer et évaluer un travail original relève du constructif / de la modification ; et l'IA comme véritable partenaire de dialogue pour la co-construction et une [[feedback|rétroaction]] adaptative relève de l'interactif / de la redéfinition. L'implication pour la conception est directe : le même outil permet de contourner l'activité à un barreau de l'échelle et de l'étayer au suivant. Il faut donc préciser le mode visé plutôt que d'accorder un accès général.

## Séquencer la conception, ne pas se contenter d'autoriser l'outil

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec et Horvat]] ont analysé la séquence prévue de 29 064 activités d'enseignement et d'apprentissage dans 554 cours et ont mis au jour une grammaire de conception visible : les activités de type acquisition constituent le point d'entrée le plus courant et le plus grand type isolé (plus de 20 %), le type d'apprentissage suit le niveau visé de Bloom (l'acquisition passe d'environ 50 % au niveau 1 à environ 20 % au niveau 6, la production dépasse 20 % aux niveaux 5 et 6) et la transition la plus forte est évaluation → discussion (0,332). Deux enseignements pour la conception avec l'IA : l'IA a sa place là où la séquence prévoit un type d'activité précis, et non ajoutée en fin de parcours ; et parce que la rétroaction apparaissait groupée avec la [[collaborative-learning|collaboration]], le [[group-work|travail en groupe]] et la présence de l'[[teacher-role|enseignant]], les dispositifs entre pairs et synchrones créent les moments de [[feedback|rétroaction]] dans lesquels le soutien de l'IA doit s'insérer plutôt que les remplacer.

[[refrain-amplify-genai-curriculum-2026|le cadre « retenir, puis amplifier » de Torres-Sahli et de ses collègues]] porte cette logique au niveau du programme : retenir un outil génératif tant qu'une capacité se forme, puis le rétablir une fois que l'étudiant sait le diriger, juger ce qu'il lui renvoie et en répondre, avec à chaque bascule un point de contrôle difficile à falsifier. Les appareils sont régis par un critère qui distingue la formation de la [[cognitive-offloading|décharge cognitive]] : ils sont autorisés là où ils soutiennent un travail engageant, exclus là où ils captent l'attention. Cela transforme les décisions de décharge en une question de [[curriculum-design|programme]] et de [[governance|gouvernance]] qui précède, et ne suit pas, la conception à l'échelle du cours.

## L'alignement constructif vient en premier

[[mcinnes-salvaging-constructive-alignment-genai-2026|l'analyse de discours de McInnes et de ses collègues]] portant sur 14 textes d'orientation pour l'enseignement supérieur avertit que les conseils formulés en termes d'efficacité, qui consistent à utiliser l'IA générative pour rédiger les acquis, les grilles d'évaluation et les plans de cours, produisent un alignement qui *semble* aligné tout en négligeant la moitié « constructive » : des acquis, des activités et une [[assessment|évaluation]] générés comme des éléments distincts plutôt qu'interdépendants. Leur remède est une re-séquence, non une interdiction : les enseignants devraient comprendre l'alignement constructif assez bien pour orienter, interroger et rejeter les productions de l'IA avant de leur déléguer la moindre part, car une habitude d'acceptation superficielle fondée sur la plausibilité constitue exactement le défaut d'évaluation contre lequel ils mettent en garde leurs étudiants. Là où l'IA est utilisée, ils plaident pour des systèmes encadrés par l'institution et [[rag|augmentés par la recherche documentaire]], configurés selon les politiques et les normes de qualité locales plutôt que selon des réglages génériques entraînés sur l'internet.

## Le principe plus général

Le principe plus général du [[finkelstein-principled-ai-education-2025|cadre Principled AI Education Framework]] veut que la technologie augmente, plutôt qu'elle ne remplace, les capacités humaines que l'éducation cherche à développer. Voir aussi [[learning-design|conception pédagogique]], [[active-learning|apprentissage actif]] et [[scaffolding|étayage]].

Pour les réglages pédagogiques par défaut qui déterminent si une interaction conçue préserve l'apprentissage, voir [[reduce-ai-cheating]] et [[redesign-assessment-ai-era]] ; pour la manière dont les mêmes principes contraignent le logiciel lui-même, voir [[designing-educational-ai-software]], et pour leur transposition dans l'architecture d'un tuteur, voir [[developing-ai-tutor]].