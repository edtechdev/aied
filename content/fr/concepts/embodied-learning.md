---
title: "Apprentissage incarné"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-10T03:24:44-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [active-learning, embodied-learning, situated-learning]
technology: [educational-robotics]
confidence: high
translation_of: concepts/embodied-learning
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'apprentissage incarné** — le principe [[pedagogy|pédagogique]] selon lequel l'apprentissage est ancré dans l'expérience corporelle, l'interaction physique et le contexte sensorimoteur de l'apprenant. Les démarches incarnées soutiennent que la cognition n'est pas purement abstraite, mais façonnée par le corps et son interaction avec l'environnement. Dans l'[[ai-education|IA en éducation]], l'incarnation se réalise au moyen de [[educational-robotics|robots éducatifs]] et de [[educational-robotics|robots sociaux]], dont la présence physique ancre des concepts abstraits (tels que la logique d'un programme ou les compétences sociales) dans un comportement observable et manipulable.

## Questions à examiner

- Nous pensons souvent que l'apprentissage se produit « dans la tête », le corps se contentant de transporter le cerveau. Et si l'apprentissage était réellement ancré dans l'expérience corporelle et l'interaction avec l'environnement ? Quelle est la matière que vous avez apprise et qui semblait requérir votre corps — et aurait-elle pu s'apprendre purement de façon abstraite ?
- Les démarches incarnées affirment qu'un agent physique et manipulable aide les apprenants à relier des idées abstraites à des résultats concrets — voir un programme faire bouger un robot, par exemple. Quand avez-vous remarqué que faire quelque chose de physique avait fait enfin « cliquer » un concept abstrait ?
- Certains [[research-methods-aied|chercheurs]] traitent le geste comme une preuve de compréhension — suivant les mouvements des mains des étudiants parallèlement à leur parole pour évaluer la saisie conceptuelle. Si les mains d'un étudiant « savent » le concept avant ses mots, qu'est-ce que cela pourrait impliquer quant à la manière dont nous devrions évaluer l'apprentissage ?
- Une critique émergente met en cause une IA « désincarnée » qui opère sur des symboles abstraits, soutenant que l'IA devrait être conçue autour d'une intelligence incarnée pour soutenir la pensée des apprenants plutôt que de la déléguer. Pensez-vous qu'une IA qui n'a jamais eu de corps puisse pleinement soutenir l'apprentissage incarné ?

## Introduction

L'apprentissage incarné est étroitement apparenté à l'[[active-learning|apprentissage actif]], à l'[[experiential-learning|apprentissage expérientiel]] et aux théories situées ou [[constructivist|constructivistes]]. L'affirmation clé est qu'un agent physique et manipulable aide les apprenants à relier des idées abstraites à des résultats concrets — un programme qui fait bouger un robot, ou un jeu de rôle avec un robot physique — de façons qu'une interaction purement fondée sur l'écran peut ne pas permettre. La robotique est l'incarnation la plus claire de l'IA en éducation, donnant aux apprenants quelque chose à voir, à toucher et à observer.

### Comment l'apprentissage incarné apparaît dans la recherche de la base de connaissances

- **La programmation ancrée :** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] ancre la [[cs-education|programmation à blocs]] dans une exécution robotique incarnée, créant une boucle serrée d'écriture, d'exécution, d'observation et de révision, de sorte que les apprenants voient leur code devenir un comportement.
- **L'interaction sociale robotique :** les [[educational-robotics|robots sociaux]] employés pour la [[storytelling-in-education|narration]] ([[motibo-digital-storytelling-robots-motivation-2026|MotiBo]], [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]), le jeu de rôle ([[remind-robot-mediated-roleplay-antibullying-2026|REMind]]) et la langue des signes ([[pepper-robot-sign-language-lis-2025|Pepper]]) offrent une interaction sociale incarnée qui soutient l'apprentissage relationnel et [[social-emotional-learning|émotionnel]].
- **Les traits d'incarnation ne sont pas ce qui pilote les résultats.** Une méta-analyse de 11 études RALL (N = 595, g = 0.83, I² = 84.4%) a montré que la morphologie du robot, la modalité, l'autonomie et le rôle social ne modéraient pas l'apprentissage de la L2 ; les formats en groupe battaient le tête-à-tête : c'est donc la position du robot, et non son incarnation, qui portait l'effet ([[robot-assisted-language-learning-meta-analysis-2026|Wang et al. (2026)]]).
- **L'incarnation et l'écriture créative :** la [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|recherche sur l'intégration robot-LLM en écriture créative]] examine comment l'incarnation affecte l'interaction et les résultats des apprenants.
- **L'interaction humain-robot :** la recherche sur l'[[educational-robotics|IHR]] ([[task-context-trust-educational-hri-2026|confiance]], [[human-autonomy-agency-hri-review-2025|agence]]) examine comment l'incarnation physique façonne la confiance, l'[[student-engagement|engagement]] et l'[[agency|autonomie]].
- **Le geste comme preuve de compréhension :** [[multimodal-embodied-cognition-oral-explanations-2026|Morphew et collègues]] intègrent le suivi des gestes par vision par ordinateur à l'analyse de la parole par [[llm]] pour montrer que la compréhension conceptuelle des statistiques chez les étudiants en ingénierie s'exprime à la fois par la parole et par le geste. Les gestes explicatifs à forte confiance se regroupent autour de concepts spécifiques (surtout la moyenne), et un couplage étroit entre geste et parole signale un propos conceptuel cohérent, tandis que la divergence marque des idées en développement — ce qui positionne l'action incarnée comme une preuve dans l'[[assessment-validity|évaluation]], via l'analytique de l'apprentissage [[multimodal|multimodale]], et pas seulement comme un mécanisme d'apprentissage.

### L'intelligence incarnée et la critique de l'IA désincarnée

Un second fil, plus théorique, de la recherche de la base de connaissances sur l'incarnation porte sur le rôle du *corps* dans l'apprentissage [[sociocultural-learning|médié par l'IA]] — non pas par des robots physiques, mais par la question de savoir si des [[ai-technologies|systèmes d'IA]] eux-mêmes sont (ou peuvent être) incarnés. Ces travaux mettent en cause la domination des modèles d'IA symboliques et désincarnés, bâtis sur un traitement abstrait de l'information :

- **L'IA incarnée comme principe de conception.** Le cadre **E3-HOT** soutient que, pour soutenir l'agence cognitive des apprenants et leur [[critical-thinking|pensée d'ordre supérieur]] (plutôt que d'encourager la [[cognitive-offloading|délégation cognitive]]), l'IA devrait être conçue autour d'une *intelligence incarnée* — ancrage situationnel, participation incarnée et création cognitive — au sein d'un environnement d'apprentissage intégrant le virtuel et le réel.([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])
- **Les limites de l'[[generative-ai|IA générative]] désincarnée.** Des travaux post-cognitivistes soutiennent que les systèmes actuels d'IA générative manquent de proprioception, d'agence multimodale et de pratique incarnée, et plaident pour une « IA incarnée » ancrée dans la situationnalité, l'émergence et le couplage sensorimoteur, en proposant une chorégraphie perceptivo-[[affective-computing|affective]] pour l'interaction humain–[[student-ai-interaction|IA]].([[videla-embodied-ai-education-choreography]])
- **L'incarnation, la situationnalité et la construction sociale.** Dans l'[[science-education|apprentissage des sciences]], les outils d'IA fonctionnent comme des « artefacts de médiation » qui permettent des communautés de pratique numériques et le franchissement de frontières, reliant l'enquête incarnée et authentique à des contextes réels et interdisciplinaires.([[li-ai-science-situated-learning-teachers-2025]]) Cela rattache l'incarnation à l'[[situated-learning|apprentissage situé]] et à la [[distributed-cognition|cognition distribuée]].

L'apprentissage incarné rejoint la [[educational-robotics|robotique éducative]], la [[educational-robotics|robotique éducative]], la [[educational-robotics|robotique éducative]], l'[[active-learning|apprentissage actif]], l'[[experiential-learning|apprentissage expérientiel]], l'[[situated-learning|apprentissage situé]], la [[distributed-cognition|cognition distribuée]], la [[computational-thinking|pensée informatique]] et l'[[social-emotional-learning|apprentissage socioémotionnel]].

## Concepts liés

- [[educational-robotics]]
- [[active-learning]]
- [[experiential-learning]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[computational-thinking]]
- [[social-emotional-learning]]
- [[learning-theories]]
- [[multimodal]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — la modalité qui tente d'exploiter directement l'incarnation

## Articles liés

- [[multimodal-embodied-cognition-oral-explanations-2026]] — Un cadre multimodal pour la cognition incarnée dans les explications orales
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Favoriser un apprentissage durable par l'intelligence incarnée (E3-HOT)
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[pepper-robot-sign-language-lis-2025]] — Pepper et la langue des signes
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — L'intégration robot-LLM en écriture créative
- [[robot-assisted-language-learning-meta-analysis-2026]] — Méta-analyse de l'apprentissage incarné des langues assisté par robot et renforcé par l'IA
- [[vargas-situated-learning-ai-review-2024]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[videla-embodied-ai-education-choreography]]
