---
title: "La recherche sur l'utilisabilité"
created: "2026-08-24T02:15:00-04:00"
updated: "2026-10-10T03:41:12-04:00"
type: concept
connected_faqs: [designing-educational-ai-software]
research_method: [system development, user study, interviews]
page_kind: [evaluation]
confidence: high
methods: [usability-research]
translation_of: concepts/usability-research
source_updated: "2026-09-30T07:37:28-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La recherche sur l'utilisabilité (Usability research)** — l'étude empirique de la manière dont les utilisateurs interagissent avec un système logiciel, et de son utilisabilité, de son utilité et de l'expérience utilisateur (UX). Issue de l'interaction humain-machine (HCI), la recherche sur l'utilisabilité évalue si un outil éducatif fondé sur l'IA est utilisable, apprenable, efficace et satisfaisant — les qualités qui déterminent si les apprenants l'adoptent réellement et en tirent profit. Elle se distingue de l'[[qualitative-research|enquête qualitative]] sur les phénomènes d'apprentissage et de l'[[quantitative-research|efficacité quantitative]], tout en leur étant complémentaire : la recherche sur l'utilisabilité se concentre sur l'*interaction entre la personne et le système*, et non sur les résultats d'apprentissage en soi.

## Questions à examiner

- Vous souvenez-vous d'un outil logiciel — éducatif ou non — pédagogiquement solide ou réellement puissant, que vous avez pourtant cessé d'utiliser parce qu'il était déroutant ou frustrant ? Cet échec est précisément ce que la recherche sur l'utilisabilité cherche à expliquer avant qu'il ne coûte de l'apprentissage.
- Une hypothèse répandue veut que l'efficacité éducative d'un outil se juge à l'amélioration des gains d'apprentissage. Mais la page soutient qu'un outil peut être inutilisable tout en semblant « fonctionner » dans un essai, ou utilisable tout en échouant à enseigner. Pourquoi une étude montrant des gains d'apprentissage pourrait-elle néanmoins manquer le fait que l'outil est pénible à utiliser dans la pratique ?
- Avant d'aborder les méthodes, comment vous y prendriez-vous pour découvrir si un tuteur IA est déroutant, frustrant ou sujet aux erreurs pour les apprenants ? Que feriez-vous ou observeriez-vous réellement — et qu'est-ce que le propre rapport de satisfaction d'un utilisateur manquerait, qu'une observation attentive capterait ?
- La pensée à voix haute est une méthode centrale : les utilisateurs énoncent leurs pensées pendant qu'ils travaillent, exposant en temps réel la confusion et les modèles mentaux. Si vous étiez un apprenant utilisant un outil d'IA, que pourriez-vous articuler de votre confusion qu'une simple enquête du type « l'avez-vous aimé ? » ne capterait jamais ?
- La page note que la satisfaction auto-déclarée peut diverger de la performance objective — les gens peuvent dire adorer un outil qui les ralentit secrètement, ou sous-estimer un outil qui les aide réellement. Où avez-vous vu cet écart entre ce que les gens disent et ce que montre leur comportement ?
- La recherche sur l'utilisabilité vous dit si un outil est utilisable, non s'il enseigne. Si vous évaluez un outil d'apprentissage fondé sur l'IA, comment combineriez-vous les preuves d'utilisabilité avec les preuves d'apprentissage — et qu'est-ce qu'un outil réussissant les deux pourrait encore ne pas accomplir ?

## Introduction

La recherche sur l'utilisabilité et l'UX répond à des questions telles que : les étudiants peuvent-ils comprendre comment utiliser ce tuteur IA ? L'outil d'IA est-il déroutant, frustrant ou sujet aux erreurs ? S'adapte-t-il au flux de travail des enseignants ou des apprenants ? Ces questions sont un préalable à — et parfois la cause cachée de — la présence ou de l'absence de [[learning-gains|gains d'apprentissage]] mesurés dans les études d'efficacité. Un outil d'IA pédagogiquement solide mais inutilisable échouera dans la pratique ; les preuves d'utilisabilité expliquent pourquoi.

## Méthodes centrales

- **Les protocoles de pensée à voix haute.** Les utilisateurs verbalisent leurs pensées pendant qu'ils accomplissent des tâches, révélant en temps réel la compréhension, la confusion et les modèles mentaux. [[code-anchor-multi-view-visualization|Une étude des visualisations de code à vues multiples]] et [[learn-framework-responsible-genai-pbl-2026|le cadre LEARN]] utilisent la pensée à voix haute pour comprendre comment les apprenants donnent un sens aux outils assistés par l'IA ; [[feedback-futures-genai|les futurs de la rétroaction]] examinent comment les apprenants traitent la rétroaction générée par l'IA.
- **Les études d'utilisateurs.** Des évaluations structurées par tâches mesurent l'efficacité, les taux d'erreur, la satisfaction et l'achèvement. [[rhaimi-productivemath-2025|ProductiveMath]] évalue l'utilisabilité d'une application fondée sur l'IA générative pour soutenir un enseignement de l'échec productif ; [[supplynet-visual-exploratory-learning|SupplyNet]] mène une étude d'utilisateurs d'un outil visuel d'apprentissage exploratoire ; [[llm-chatbots-cs-multiple-choice|les chatbots LLM pour les questions à choix multiples en informatique]] évaluent la qualité de l'interaction.
- **Les entretiens et l'observation.** Les entretiens d'utilisabilité qualitatifs et l'observation captent l'expérience utilisateur, les préférences et les points de friction. [[icub-humanoid-storytelling-llm-hri-2025|Une étude d'utilisabilité d'un robot humanoïde conteur d'histoires]] recourt à une évaluation structurée pour demander si des parents laisseraient le robot interagir avec un enfant ; [[genai-architectural-design-studios|l'IA dans les ateliers de design]] observe et interroge des étudiants utilisant l'IA dans un travail de conception authentique.
- **L'évaluation systématique de l'utilisabilité.** L'évaluation heuristique, le parcours cognitif et les mesures d'UX par questionnaire (par exemple le SUS) évaluent systématiquement l'utilisabilité au regard de critères établis.

## Comment la recherche sur l'utilisabilité apparaît dans la base de connaissances

- **L'évaluation des outils d'apprentissage fondés sur l'IA.** [[rhaimi-productivemath-2025|ProductiveMath]], [[supplynet-visual-exploratory-learning|SupplyNet]] et [[anvil-ai-educational-animations|les animations éducatives]] sont évalués pour leur utilisabilité et leur UX.
- **L'interaction humain-robot et l'[[conversational-ai|IA conversationnelle]].** [[icub-humanoid-storytelling-llm-hri-2025|L'étude du robot humanoïde conteur]] est une étude d'utilisabilité explicite de l'interaction propulsée par les [[llm|LLM]] ; [[conversational-ai-agents-umbrella-review-2026|une revue parapluie des agents d'IA conversationnelle]] identifie l'utilisabilité et la qualité de l'interaction comme un thème récurrent.
- **La conception et l'affinage.** Les constats d'utilisabilité alimentent la conception itérative (voir le [[design-thinking|design thinking]] et la [[learning-design|conception pédagogique]]), améliorant les outils avant ou parallèlement aux tests d'efficacité.
- **Un instrument unique à travers les contextes, et le plafond qui le limite.** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] ont maintenu constants le domaine, la tâche et l'instrument, tandis que le niveau éducatif variait, de sorte que les notations par 144 étudiants de 893 réponses de rétroaction et 237 rapports comparent les contextes plutôt que les disciplines — et seule l'exactitude perçue différait selon les niveaux. L'étude nomme aussi la limite de ce type d'évaluation par les utilisateurs : de 72.2 à 86.4 pour cent des étudiants se situaient en moyenne au moins à 4 sur 5, et les auteurs déclarent que leurs différences non significatives n'établissent pas l'équivalence, aucune marge n'ayant été fixée à l'avance.
- **La conception de la notation rapportée comme partie du constat.** [[bespoke-industry-personalized-lecture-videos-2026|Puech et al. (2026)]] ont fait juger par 25 experts appariés au domaine 92 cours régénérés au regard d'un référentiel ancré à « la qualité d'un cours MOOC standard », en assignant chaque vidéo à un seul évaluateur (k = 1) afin de répartir le panel sur une plus grande part du corpus plutôt que de collecter des notations répétées. Le compromis est modélisé plutôt que dissimulé : un modèle à intercepts aléatoires attribue environ 35 pour cent de la variance résiduelle à l'évaluateur (ICC = 0.35) et les intervalles sont regroupés par évaluateur, ce qui permet à un panel d'experts de rapporter « 87 pour cent au niveau ou au-dessus du seuil » avec une fourchette honnête.

## Relation avec les autres familles de recherche

La recherche sur l'utilisabilité partage ses méthodes de collecte de données avec la [[qualitative-research|recherche qualitative]] (entretiens, observation, pensée à voix haute), mais diffère par sa *finalité* : la recherche qualitative interprète le sens et l'expérience pour construire de la compréhension et de la théorie, tandis que la recherche sur l'utilisabilité évalue un artefact au regard de critères d'utilisabilité et d'UX. Elle recoupe aussi l'[[ai-ed-evaluation|évaluation de l'IA en éducation]] (estimer si un système fonctionne) et la [[educational-measurement|mesure]] (quantifier les construits d'utilisabilité). La base de connaissances traite l'utilisabilité comme un volet méthodologique distinct mais connecté — pertinent pour la [[human-ai-collaboration|collaboration humain-IA]], l'[[student-experience|expérience étudiante]] et la conception d'outils d'apprentissage efficaces fondés sur l'IA. Voir les [[research-methods-aied|méthodes de recherche]] pour comprendre comment elle s'insère dans le paysage méthodologique plus large.

## Forces et limites

- **Forces :** identifie directement les barrières d'utilisabilité qui bloquent l'adoption et l'apprentissage ; produit des recommandations de conception actionnables ; complète la recherche d'efficacité et la recherche qualitative en expliquant *pourquoi* un outil fonctionne ou échoue à l'usage ; relativement rapide et peu coûteuse comparée à de grandes expérimentations.
- **Limites :** les constats d'utilisabilité n'établissent pas d'effets sur l'apprentissage (un outil utilisable peut encore échouer à enseigner) ; les petits échantillons et les cadres propres à une tâche limitent la généralisabilité ; la satisfaction auto-déclarée peut diverger de la performance objective ; dépendance à l'égard du chercheur et de la conception des tâches.

## Concepts liés

- [[research-methods-aied]]
- [[qualitative-research]]
- [[human-ai-collaboration]]
- [[student-experience]]
- [[ai-ed-evaluation]]
- [[learning-design]]
- [[design-thinking]]
- [[intelligent-tutoring]]

## Articles liés

- [[icub-humanoid-storytelling-llm-hri-2025]] — A usability study of an LLM-powered storytelling humanoid
- [[rhaimi-productivemath-2025]] — ProductiveMath: usability of a generative-AI app
- [[supplynet-visual-exploratory-learning]] — SupplyNet user study
- [[anvil-ai-educational-animations]] — Usability of AI-generated educational animations
- [[code-anchor-multi-view-visualization]] — Think-aloud study of multi-view code visualizations
- [[learn-framework-responsible-genai-pbl-2026]] — LEARN framework and think-aloud evaluation
- [[feedback-futures-genai]] — How learners process AI-generated feedback
- [[llm-chatbots-cs-multiple-choice]] — LLM chatbots for CS multiple-choice questions
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents
