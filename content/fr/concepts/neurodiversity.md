---
title: "Neurodiversité"
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-10T03:28:37-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-guidance-children-under-13, ai-disabled-neurodivergent-learners]
audience: [learners, instructors, instructional designers]
level: [special education, higher ed, k 12]
confidence: high
translation_of: concepts/neurodiversity
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Neurodiversité** — le cadrage selon lequel les différences neurologiques telles que l'autisme, le TDAH, la dyslexie et la dyspraxie sont des variations naturelles de la [[cognitive-psychology|cognition humaine]] plutôt que des déficits à corriger. En éducation, une approche affirmative de la neurodiversité conçoit des environnements d'apprentissage qui accueillent et exploitent ces différences plutôt que d'imposer la conformité à une norme cognitive unique.

## Questions à examiner

- La page présente la neurodiversité comme des différences neurologiques étant des variations naturelles plutôt que des déficits à corriger. Comment ce changement de cadrage modifie-t-il ce que devrait être « aider » un apprenant autiste, TDAH ou dyslexique dans votre propre contexte ?
- Imaginez un outil d'IA générative qui produit de longues réponses très textuelles. Quels apprenants neurodivergents pourrait-il aider, et quels apprenants pourrait-il désavantager — et pouvez-vous penser à des choix de conception qui feraient pencher la balance dans un sens ou dans l'autre ?
- Une IA qui réduit la [[cognitive-offloading|charge cognitive]] peut soutenir les apprenants qui ont du mal avec les fonctions exécutives ou les attentes sociales, alors qu'une IA qui encourage la dépendance peut les saper. Où placez-vous la frontière entre soutien et dépendance excessive pour un apprenant donné ?
- La page avertit que les outils d'IA qui supposent un style de communication dominant peuvent reconduire les inégalités. Vous souvenez-vous d'un moment où un outil ou une salle de classe « taille unique » a supposé que tout le monde apprenait de la même manière, et de ce qu'il négligeait ?
- Comment le neurotype d'un apprenant pourrait-il changer la manière dont ses signaux comportementaux sont interprétés dans les analytiques de l'apprentissage ? Quel risque apparaît lorsque l'IA lit l'[[student-engagement|engagement]] ou la difficulté sans savoir comment fonctionne un cerveau particulier ?
- Les données probantes les plus solides de cette page portent sur un changement de conception général qui a aidé tout le monde et réduit un écart, et non sur un outil construit pour un seul diagnostic. Pourquoi des changements universels pourraient-ils surpasser ceux conditionnés au diagnostic — et qu'est-ce que cela implique quant à la manière dont vous dépenseriez un budget d'accessibilité limité ?

## Introduction

Le paradigme de la neurodiversité déplace l'objectif du travail sur l'[[special-education|éducation spécialisée]] et l'[[accessibility|accessibilité]], de « réparer l'apprenant » vers « adapter l'environnement ». Il recoupe la [[universal-design-for-learning|conception universelle de l'apprentissage]] et l'[[inclusive-learning|apprentissage inclusif]] mais met l'accent sur l'affirmation de l'identité et une conception fondée sur les forces plutôt que sur l'accommodement comme compensation.

À l'ère de l'IA, ce cadrage devient un critère de conception plutôt qu'un slogan. L'[[generative-ai|IA générative]] offre une promesse réelle pour les apprenants neurodivergents — des moyens alternatifs d'engagement, de représentation et d'expression, un soutien aux fonctions exécutives, et une réduction de la charge extrinsèque — et un risque réel, puisque les outils qui supposent un style de communication dominant, conditionnent le soutien à un diagnostic formel, ou encouragent la dépendance peuvent désavantager précisément les apprenants qu'ils prétendent servir. Cette page dresse la carte de ce que montrent réellement les données probantes, catégorie par catégorie, et des points où elles s'épuisent.

## Ce que couvre la recherche

Deux revues définissent la forme du champ, et toutes deux décrivent une fragmentation plutôt qu'une consolidation.

[[assistive-tech-neurodivergent-higher-ed-review-2026|Une revue de cadrage PRISMA-ScR (Rempel et al., 2026)]] a interrogé cinq bases de données et une décennie de publications (2015–2025), passant au crible 766 références pour retenir 40 études empiriques sur les technologies d'assistance numériques destinées aux étudiants neurodivergents dans l'[[higher-ed|enseignement supérieur]]. Le champ s'est réorganisé autour de l'[[generative-ai|IA générative]] — 15 des 40 études — les formats immersifs arrivant en deuxième position avec 11. Sa critique centrale est une critique de conception : l'accommodement individuel et les outils spécifiques à un neurotype, organisés autour du diagnostic formel, ne peuvent pas traiter les différences fonctionnelles qui traversent les neurotypes, si bien qu'elle recommande à la place une conception universelle et un développement participatif. Elle note également que les outils les plus immersifs sont les moins extensibles.

[[dabaghi-ai-dyslexia-education-review-2026|La revue interdisciplinaire sur l'IA et la dyslexie (Dabaghi, D'Urso et Sciarrone, 2026)]] couvre la période 2018–2024 sur 72 études et montre que l'IA est employée pour la détection, le soutien à l'assistance et la [[personalized-learning|personnalisation]], ces trois volets évoluant en parallèle plutôt qu'en intégration, et le champ étant davantage mû par l'opportunité technologique que par une théorie éducative consolidée. Ses travaux de détection (EEG, oculométrie, modèles de [[machine-learning|apprentissage automatique]]) montrent une promesse diagnostique pour l'intervention précoce mais nécessitent souvent un équipement spécialisé et des conditions contrôlées, ce qui limite l'emploi dans les classes ordinaires. C'est le test pratique que ce pan entier ne cesse d'échouer : le soutien doit être intégré au cours que l'étudiant suit réellement.

## Autisme et TDAH dans la classe

[[neurodivergent-computing-students|Une enquête portant sur 24 étudiants neurodivergents en informatique (autistes et/ou TDAH) et 20 pairs neurotypiques]], accompagnée de quatre entretiens approfondis, a révélé un inconfort significatif face aux devoirs dépourvus de structure claire ou porteurs d'attentes ambiguës — et les mêmes structures qui conviennent aux apprenants neurotypiques dans l'[[active-learning|apprentissage actif]] collaboratif peuvent exclure les pairs neurodivergents. Les auteurs la présentent comme préliminaire et parmi les premières études à centrer les voix neurodivergentes dans l'[[cs-education|enseignement de l'informatique]], ce qui mesure aussi combien peu de données probantes existent.

[[adhd-video-segmentation-computing-education|L'étude sur la segmentation vidéo (Pimenova, Begel et collègues, 2026)]] constitue le résultat individuel le plus solide de cette page. En traitant les [[video-education|vidéos pédagogiques]] comme un problème de traitement a posteriori — les segmentant en blocs d'une seule instruction, avec des pauses fixes pour réduire la charge extrinsèque — elle a amélioré la performance de tout le monde dans un dispositif intra-participants (17 TDAH, 10 non-TDAH), et les erreurs et hésitations des participants TDAH ont chuté jusqu'à la parité avec leurs pairs non-TDAH. Un changement égalisateur qui n'exige ni diagnostic, ni divulgation, ni outil séparé constitue la démonstration la plus probante disponible de [[universal-design-for-learning|conception universelle de l'apprentissage]] par transformation automatisée des contenus.

## Troubles spécifiques de l'apprentissage, dyslexie et délestage cognitif

[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] ont mutualisé 29 études (quasi-)expérimentales d'interventions fondées sur l'IA pour des étudiants en situation de handicap et trouvé un effet positif global moyen (g de Hedges = 0.588, IC à 95% [0.349, 0.826]) sur 239 tailles d'effet issues de 41 échantillons indépendants. Deux détails importent davantage que le chiffre phare. Le premier est que l'effet varie selon la catégorie de handicap : les étudiants présentant des troubles spécifiques de l'apprentissage, des handicaps intellectuels et développementaux, ou sourds montraient un effet plus élevé (g = 0.952) que les étudiants présentant un trouble du spectre de l'autisme (g = 0.368), bien que les auteurs rapportent cette différence comme statistiquement non significative. Le second est le biais de publication : le test d'Egger était significatif (β = 2.837, p < .001) et la méthode trim-and-fill a ramené l'estimation mutualisée à g = 0.2694, toujours positive. Les « étudiants neurodivergents » ne constituent pas une population unique, et un effet mutualisé transversal aux catégories n'est pas une promesse faite à aucune d'elles.

Le versant du risque a sa propre littérature. [[seung-basham-cognitive-offloading-swld-2026|Seung et Basham (2026)]] soutiennent que l'IA générative a transformé le délestage cognitif, d'une aide à l'étude périphérique en une délégation de processus cognitifs d'ordre supérieur, avec des implications particulièrement conséquentes pour les étudiants présentant des troubles de l'apprentissage — les apprenants les plus susceptibles de se voir proposer le raccourci et les moins susceptibles d'en bénéficier si le processus délégué constituait l'enjeu de la tâche.

## Fonctions exécutives et dépendance

[[genai-reliance-executive-functioning-2026|Klarin, Hoff et Daukantaitė (2026)]] définissent la dépendance de manière étroite — préférer l'IA générative à son propre effort ou au soutien de l'enseignant, plus la difficulté à entamer le travail scolaire sans elle — et la testent dans deux échantillons communautaires suédois d'adolescents (849 élèves du premier cycle du secondaire, n analytique = 735, et 898 élèves du second cycle, n analytique = 839). Les difficultés de fonctionnement exécutif agissaient sur la dépendance par l'intermédiaire de l'utilité perçue et de l'usage habituel dans les deux échantillons, avec de petits effets indirects (β = .10, IC à 95% [.06, .14] dans l'échantillon du premier cycle ; β = .08, IC à 95% [.04, .12] dans l'échantillon du second cycle). La lecture pratique : les étudiants qui ont le plus besoin d'un soutien à l'initiation sont précisément ceux pour lesquels un outil commode devient le plus facilement la voie par défaut plutôt qu'une option parmi d'autres — et les tailles d'effet sont ici suffisamment petites pour qu'il s'agisse d'un enjeu de conception, non d'un diagnostic.

## Précautions de conception

- **Un soutien conditionné au diagnostic exclut les apprenants qu'il ne nomme pas.** La critique de la revue de cadrage s'applique directement à la manière dont les fonctionnalités d'IA sont déployées : si une fonctionnalité se déverrouille avec une lettre d'accommodement, les apprenants présentant des différences fonctionnelles mais aucun diagnostic ne la voient jamais.
- **Les outils peuvent exclure de manière épistémique, et pas seulement mal.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] soutient que les données d'entraînement anglophones et centrées sur l'Occident marginalisent les manières de savoir non hégémoniques, et place la situation des apprenants handicapés au centre de cette critique — avertissant qu'une IA « inclusive » peut néanmoins encoder la question de savoir quels savoirs comptent.
- **Les signaux comportementaux sont lus par des systèmes qui ne connaissent pas l'apprenant.** L'interprétation de l'[[student-engagement|engagement]], de la difficulté ou de l'attention dans les [[learning-analytics|analytiques de l'apprentissage]] et la [[student-modeling|modélisation de l'apprenant]] suppose un schéma normatif de réponse ; voir [[differential-effects-across-learner-groups|Effets différentiels selon les groupes d'apprenants]] pour les données probantes d'équité relatives à cette hypothèse.
- **La dépendance est un résultat de conception, non un manquement de l'apprenant.** Étant donné le chemin de dépendance décrit plus haut, la question à poser de toute fonctionnalité d'IA est de savoir si elle se substitue au processus d'ordre supérieur que le devoir existe pour construire — le point que font Seung et Basham pour les troubles de l'apprentissage.

## Là où les données probantes sont minces

- **Presque tout ici relève du groupe unique.** La méta-analyse sur le handicap n'a pas de comparateur neurotypique, si bien qu'elle établit que les interventions ont aidé, et non qu'elles ont aidé ce groupe différemment.
- **Les échantillons sont petits.** Vingt-quatre étudiants et quatre entretiens dans l'étude en informatique ; 17 et 10 dans l'étude vidéo sur le TDAH ; 72 études dans la revue sur la dyslexie, avec des volets toujours découplés.
- **Les frontières entre catégories diffèrent d'une étude à l'autre,** si bien que la comparaison inter-études d'un neurotype « identique » est limitée — et les différences entre catégories dans la méta-analyse sont rapportées comme non significatives.
- **Les propres évaluateurs du champ le décrivent comme mû par la technologie,** ce qui signifie que les données probantes d'intervention sont minces précisément là où les recommandations de conception sont les plus solides.

## Connections

La neurodiversité est liée à l'[[special-education|éducation spécialisée]], à l'[[inclusive-learning|apprentissage inclusif]], à la [[universal-design-for-learning|conception universelle de l'apprentissage]] et à l'[[equity-in-ai-education|équité dans l'IA en éducation]]. Elle informe à la fois la manière dont l'IA est déployée pour l'[[student-experience|expérience étudiante]] et la manière dont les évaluations et les programmes de littératie sont conçus pour être équitables face à la variabilité cognitive. Pour savoir comment ces résultats se situent aux côtés d'autres groupes d'apprenants — langue, genre, statut socioéconomique, géographie — voir [[differential-effects-across-learner-groups|Effets différentiels selon les groupes d'apprenants]].

## Concepts liés

- [[special-education]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[equity-in-ai-education]]
- [[differential-effects-across-learner-groups]]
- [[student-experience]]
- [[personalized-learning]]
- [[learning-analytics]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[student-modeling]]

## Articles liés

- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: a scoping review of digital assistive technologies for neurodivergent students in higher education
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 studies of AI for students with disabilities, and an effect that differs by category
- [[adhd-video-segmentation-computing-education]] — Temporal video segmentation that brought ADHD participants to parity
- [[neurodivergent-computing-students]] — 24 neurodivergent computing students on structure, ambiguity, and collaboration
- [[genai-reliance-executive-functioning-2026]] — Executive-functioning difficulties, perceived usefulness, and the route to AI reliance
- [[seung-basham-cognitive-offloading-swld-2026]] — GenAI cognitive offloading for students with learning disabilities
- [[dabaghi-ai-dyslexia-education-review-2026]] — AI to help people with dyslexia in education
- [[genai-minoritized-knowledges-disability]] — Generative AI and the marginalization of minoritized knowledges
- [[tactile-statistical-graphs-accessibility]] — Tactile Statistical Graphs for Accessibility
- [[ai-learning-tools-engineering-education-needs]] — Designing Needs- and Attention-Aware AI Learning Tools
