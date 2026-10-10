---
title: "Recherche d'aide"
created: "2026-08-06T10:20:04-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, llm]
connected_faqs: [reducing-over-reliance, study-with-ai]
audience: [learners]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/help-seeking
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Recherche d'aide** — le processus par lequel l'apprenant reconnaît un besoin d'assistance et la demande de manière stratégique, et la manière dont ce processus se déroule dans les environnements d'apprentissage soutenus par l'IA. Dans l'[[ai-education|IA en éducation]], la recherche d'aide est centrale pour la question de savoir si les outils d'IA soutiennent ou sapent l'apprentissage : la *qualité* de la recherche d'aide (quand, comment et ce que les apprenants demandent) façonne fortement les résultats, et les tuteurs par IA, les indices et les agents [[pedagogy|pédagogiques]] sont conçus précisément pour susciter une recherche d'aide productive plutôt qu'une recherche de réponses.([[lak2026-hint-button-unproductive-use]])([[ai-fallibility-warning-help-seeking]])

Une sollicitation proactive peut accroître la recherche d'aide sans aucune modification des matériels d'apprentissage. Une expérience pré-enregistrée menée dans des cours de premier cycle à fort effectif a envoyé des messages aux étudiants par l'intermédiaire d'un agent conversationnel académique et a montré un plus grand recours au tutorat et à l'enseignement complémentaire ; l'analyse de médiation a attribué 17.8% de l'effet sur les notes à cette recherche d'aide accrue (p = 0.041) ([[chatbot-outreach-course-performance-2026]]).

## Questions à examiner

- Lorsque vous butez sur un obstacle, avez-vous tendance à demander une réponse directe ou des indications qui vous aident à trouver par vous-même ? Que pensez-vous que chaque choix fait à ce que vous retenez réellement ?
- La recherche montre que les étudiants entendent souvent apprendre avec l'IA mais se rabattent par défaut sur la demande de la réponse — un « écart entre intention et comportement » lié à une moins bonne performance. Pourquoi de bonnes intentions s'effondrent-elles si facilement en recherche de réponses ?
- Un « bouton d'indices » persistant peut transformer une tâche d'apprentissage en exercice de copie, en signalant que l'aide est toujours là. Vous souvenez-vous d'un moment où une aide disponible trop facilement vous a fait sauter la réflexion que vous deviez faire ?
- Une étude a montré que le simple fait d'avertir les étudiants qu'une IA pouvait se tromper a accru leur recherche d'aide. Comment un scepticisme sain pourrait-il changer la manière dont les étudiants s'engagent avec un tuteur, par rapport à une confiance aveugle ?
- Les étudiants en difficulté sont souvent les moins susceptibles de chercher de l'aide sans y être invités. Si les étudiants qui ont le plus besoin de soutien ne se manifestent pas, comment les outils d'IA et les enseignants devraient-ils réagir ?
- Cette page propose de retarder les indices et de déplacer la question de conception du « s'il faut » au « comment » fournir de l'aide. À quoi ressemblerait une expérience d'aide bien conçue pour vos apprenants — et qu'est-ce qui les inciterait réellement à l'utiliser ?

## Introduction

La recherche d'aide est un construit bien établi dans la recherche sur l'apprentissage, étroitement lié à l'[[self-regulated-learning|apprentissage autorégulé]] et à la [[metacognition|métacognition]] : elle requiert que les apprenants surveillent leur propre compréhension, reconnaissent une lacune, décident qu'une aide est nécessaire, et formulent une demande efficace. Avec l'essor des tuteurs d'[[generative-ai|IA générative]], la recherche d'aide a pris une importance nouvelle — et de nouveaux modes de défaillance. Les apprenants ont souvent l'*intention* d'utiliser l'IA pour apprendre, mais se rabattent par défaut sur la demande de réponses directes, un écart que la recherche de cette base de connaissances documente à travers les domaines et les groupes d'âge. Le modèle classique suppose qu'une demande porte sur un savoir que celui qui demande ne possède pas. La demande de soutien opérationnel complique cette hypothèse : sur 4 093 requêtes, au moins 20.4% portaient sur l'état d'un travail en attente plutôt que sur un savoir, une classe qu'un assistant lié à la recherche documentaire n'a servie que 1.3% du temps [[student-query-demand-hybrid-ai-support-2026|Gupta et coll. (2026)]].([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

## Recherche d'aide productive et improductive

La distinction centrale dans la littérature oppose la recherche d'aide qui soutient l'apprentissage et la recherche d'aide qui le contourne.

### Les comportements de recherche d'aide improductive

La recherche de cette base de connaissances identifie des schémas concrets et observables de recherche d'aide improductive, en particulier dans les [[intelligent-tutoring|systèmes de tutorat intelligent]] :

- **Les demandes d'indices prématurées** — demander de l'aide avant toute tentative de solution. Même les étudiants incertains apprennent davantage en tentant d'abord.([[lak2026-hint-button-unproductive-use]])
- **La lecture superficielle des indices** — parcourir les indices trop rapidement pour les lire (repérée à un seuil d'environ 4 mots par seconde), sautant souvent directement à l'indice final qui révèle la réponse.([[lak2026-hint-button-unproductive-use]])
- **La recherche de réponses plutôt que la recherche d'apprentissage** — demander à l'IA de produire la réponse plutôt que d'expliquer ou de guider. Dans une étude portant sur 98 élèves de neuvième année utilisant un tuteur d'IA générative, les interactions étaient dominées par des requêtes instrumentales, avec presque aucun suivi ni évaluation de leur propre apprentissage — bien que les étudiants eussent choisi au préalable un soutien étayé. Cet **écart entre intention et comportement** était associé à une performance *plus faible* au test postérieur et à une charge cognitive extrinsèque plus élevée.([[regulating-ai-tutor-adolescent-srl]])
- **Consulter l'IA avant toute tentative indépendante ou source humaine.** [[uneven-impact-generative-ai-student-learning-2026|Manikonda et coll. (2026)]] mesurent directement cet ordre comme une **dépendance précoce** — consulter l'IA générative avant toute pensée indépendante, recherche traditionnelle ou recours à un enseignant — et le trouvent associé à un impact négatif plus grand (β = .402, p = .004) ainsi qu'à un bénéfice académique (β = .301, p < .001) parmi 118 étudiants inscrits à des cours liés à l'IA. L'association avec le préjudice était absente à faible [[ai-literacy|littératie évaluative]] et la plus forte à forte littératie évaluative (b = .688 à +1 écart-type, p < .001), de sorte que les étudiants les plus capables de juger les productions de l'IA ont déclaré le coût le plus élevé à les consulter d'abord : le choix de *qui interroger en premier* comporte un inconvénient que l'habileté à évaluer la réponse ne compense pas. Cela montre aussi qu'employer l'IA pour organiser, évaluer et décomposer les problèmes — une dépendance **cognitive** plutôt que précoce — est le schéma associé à un impact positif ; le mode de défaillance de la recherche d'aide est donc un problème de séquencement, et non le fait de demander en soi.
- **Demander de manière soutenue sans rétablissement** — Demander est productif au début, mais pas indéfiniment : les demandes d'aide sont le type d'impasse le plus rétablissable au moment de l'apparition (47.0%), mais tombent le plus bas une fois que l'assistance échoue (12.5% à une profondeur de six ou plus), de sorte que la persistance, et non la demande elle-même, est le signal qui vaut la peine d'être suivi [[guided-ai-tutor-impasse-resolution-2026|Ahtisham et coll. (2026)]].
- **Les étudiants en difficulté sont les moins susceptibles de chercher de l'aide sans y être invités** — le versant engagement de la recherche d'aide. Dans [[one-click-away-khanmigo-two-year-school-experiment-2026|un essai contrôlé randomisé de deux ans sur Khanmigo (Oreopoulos et Low 2026)]], même avec un accès libre et un temps de pratique obligatoire, l'étudiant en difficulté médian n'a envoyé de message au tuteur par IA que dans environ 17% des sessions d'erreur, la plupart du temps avec des réponses brutes ou des clics — ce qui est cohérent avec le constat de l'économie de l'éducation selon lequel les interventions qui dépendent de l'initiative atteignent le moins les étudiants qui en bénéficieraient le plus. [[virtual-tutoring-computer-assisted-learning-takeup-2026|TWiK (Oreopoulos et coll. 2026)]] montre que le recours est très sensible à la réduction des frictions (le recours en première session est passé de 45% à 83% après simplification de l'inscription), mais l'entrée n'est pas égale à une participation soutenue (la présence est restée intermittente).

### Pourquoi la recherche d'aide improductive nuit à l'apprentissage

La **perspective des affordances** explique un mécanisme clé : lorsqu'une interface rend l'aide constamment et visiblement disponible (par exemple un « bouton d'indices » persistant), elle signale aux apprenants que l'aide est toujours là, créant une affordance involontaire qui peut réduire la tâche à un exercice de copie. L'accès rapide aux indices finals contourne la construction active de schémas que l'apprentissage requiert.([[lak2026-hint-button-unproductive-use]])

### La qualité de la recherche d'aide est mesurable

Deux indicateurs simples et interprétables — les demandes d'indices prématurées et la lecture superficielle des indices — sont calculables à partir des journaux de tutorat standard et sont associés de manière constante à une réduction des [[learning-gains|gains d'apprentissage]] d'un semestre à l'autre, même après contrôle des [[prior-knowledge|connaissances préalables]]. Cela les rend praticables pour les tableaux de bord de [[learning-analytics|analytique de l'apprentissage]] et de [[visualization|visualisation]], ainsi que pour l'intervention en temps réel, contrairement aux détecteurs complexes de « contournement du système » fondés sur l'apprentissage automatique.([[lak2026-hint-button-unproductive-use]])

## Concevoir des systèmes d'IA qui favorisent une recherche d'aide productive

### Étayer la manière dont les étudiants demandent

Une formation explicite à la **recherche d'aide axée sur le raisonnement** — demander des indices étape par étape et des vérifications plutôt que des réponses finales — produit de meilleurs résultats qu'une confiance acritique. Dans une étude quasi expérimentale en statistique de premier cycle, un accès guidé aux grands modèles de langue (avec formation à la recherche d'aide axée sur le raisonnement) a conduit à une performance indépendante plus forte et à une meilleure calibration de l'autoévaluation qu'un accès non restreint aux grands modèles de langue. La leçon : **l'accès aux grands modèles de langue seul est une intervention incomplète** ; le défi de conception est d'étayer *la manière dont* les étudiants emploient l'IA pour qu'elle fonctionne comme un partenaire de raisonnement plutôt que comme un outil à obtenir des réponses.([[guided-llm-scaffolding-independent-learning]])

Le coût de l'interaction relève de la même question. [[penquiry-pen-based-llm-qa-2026|Rhee et coll. (2026)]] identifient une **barrière référentielle** et une **barrière expressive** qui empêchent les apprenants au stylo de demander quoi que ce soit à un [[llm|grand modèle de langue]] : désigner une région d'un schéma ou un terme d'une équation ne peut s'exprimer en prose dactylographiée, et l'effort de formulation survient exactement au moment où une question est la plus fragile. Leur système Penquiry résout la référence en accrochant les marques d'encre aux éléments du document et développe les mots-clés d'encre épars en requêtes complètes par autocomplétion ; deux études itératives de 16 participants chacune ont montré que la surcharge cognitive et physique de la demande d'information avait significativement baissé. La question de savoir si un coût de demande plus faible produit une recherche d'aide *meilleure* ou simplement davantage de recherche d'aide reste ouverte, et les auteurs proposent une autocomplétion temporellement adaptative — vérification fondamentale en début de session, invites de plus haut niveau ensuite — comme une voie menant d'une friction réduite à un [[scaffolding|retrait du soutien]] plutôt qu'à une béquille permanente.

L'étayage peut aussi être délivré à l'intérieur de la tâche plutôt qu'avant elle. [[helpcoach-ai-help-seeking-scaffolding-2026|Jin et coll. (2026)]] ont construit HelpCoach, un module complémentaire des interfaces de dialogue qui évalue avec quelle spécificité un étudiant demande de l'aide et invite à une révision lorsqu'une question est trop vague, rendant explicites la composante de connaissance et le type d'étayage. Dans une étude entre sujets menée auprès de 40 étudiants de l'enseignement supérieur apprenant la programmation web, les participants à HelpCoach ont rédigé une proportion significativement plus élevée de questions spécifiques dans leurs premiers brouillons qu'un groupe de référence formé avant la tâche (57.3% contre 40.5%) et ont retenu significativement plus de connaissances une semaine plus tard (d = 1.100), tandis que la différence de spécificité sur la troisième tâche n'était plus significative (43.7% contre 32.1%). Les auteurs mettent en garde : le gain de rétention ne peut pas encore être attribué à des réponses de chatbot plus ciblées.

Un troisième levier sur le coût de la demande est la *provenance* de l'aide. [[course-specific-rag-help-seeking-higher-ed-2026|Gray et Hobbs (2026)]] ont construit Beacon, un assistant fondé sur la [[rag|recherche augmentée par la recherche documentaire]], propre à un cours et ancré dans les matériels approuvés d'un seul module de programmation, et l'ont évalué avec 15 étudiants en informatique et quatre enseignants-chercheurs. 89% des participants ont jugé ses réponses fortement alignées sur les matériels du cours et 66.7% ont dit qu'il soutenait plutôt qu'il ne remplaçait leur apprentissage, bien que seulement environ la moitié à 60% aient rapporté des gains de compréhension ou de confiance. La motivation est la barrière que documente cette section : 62,5% de ces étudiants ont déclaré éviter parfois de demander de l'aide alors qu'ils en avaient besoin, et 75% ont rapporté de l'anxiété lorsqu'un sujet ne leur paraissait pas clair ; un canal privé, ancré dans le module, est donc proposé comme un premier échelon avant d'aller voir un enseignant. Les enseignants-chercheurs interrogés ont maintenu vivant le contre-argument — ils valorisaient le fait que Beacon ne livrait pas les solutions complètes et s'inquiétaient que des outils non restreints laissent les étudiants sauter une étape de développement — c'est pourquoi la conception gagne sa place en refusant d'accomplir le travail.

### Calibrer la confiance par la transparence

Une expérience de classe menée auprès de 252 étudiants a montré qu'**avertir les étudiants de la faillibilité de l'IA augmentait la recherche d'aide** dans un système de tutorat en mathématiques. La transparence sur les erreurs possibles du système a amélioré l'engagement des apprenants avec le système — reliant la recherche d'aide à la [[trust-calibration|calibration de la confiance]] et au [[hallucination-risk|risque d'hallucination]].([[ai-fallibility-warning-help-seeking]])

### Repenser la délivrance des indices et des étayages

Plutôt que de retirer l'aide, la recherche recommande de repenser la manière dont elle est délivrée :

- **La disponibilité différée des indices** — exiger un temps d'engagement minimal ou des tentatives de solution avant que les indices (en particulier les indices finals) ne soient accessibles.([[lak2026-hint-button-unproductive-use]])
- **Passer du *s'il faut* au *comment*** — la question clé de conception est de savoir comment structurer la délivrance des indices conformément aux principes de lutte productive, et non s'il faut fournir des indices du tout.([[lak2026-hint-button-unproductive-use]])

### Le problème du recours dans les tuteurs à grands modèles de langue

Les étudiants du monde réel **contournent fréquemment le [[scaffolding|étayage]] d'un [[conversational-ai|agent conversationnel]]** — pas nécessairement de manière nuisible, mais souvent parce qu'il existe un décalage entre le cadrage pédagogique du chatbot et les objectifs d'apprentissage propres de l'étudiant. Les pipelines d'évaluation doivent donc mesurer non seulement si un tuteur étaye, mais si les étudiants *exploitent* cet étayage, au lieu de présumer qu'ils le feront.([[rethinking-scaffolding-llm-tutors]])

## Recherche d'aide et apprentissage autorégulé

La recherche d'aide fait partie intégrante de l'[[self-regulated-learning|apprentissage autorégulé]] : une recherche d'aide productive requiert que les apprenants surveillent leur compréhension, jugent quand une aide est nécessaire, et sélectionnent les sources appropriées. Dans les contextes d'IA générative, cela devient encore plus exigeant, puisque les étudiants doivent aussi exercer leur [[agency|autonomie]] sur l'IA et maintenir une vigilance épistémique plutôt que de s'en remettre à elle. La recherche de cette base de connaissances soutient le besoin de [[scaffolding|supports]] qui favorisent un usage de l'IA plus [[agentic-ai|agentique]] et épistémiquement proactif, et souligne le risque de [[cognitive-offloading|dépendance excessive]] et de [[cognitive-offloading|délestage cognitif]] lorsque la recherche d'aide se dégrade en recherche inconditionnelle de réponses.([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

### La recherche d'aide médiée par les grands modèles de langue comme processus en quatre étapes

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et coll. (2026)]] montrent que, dans l'étude quotidienne des STIM, la recherche d'aide par grands modèles de langue n'est pas un acte unique, mais un processus stratifié et dépendant du contexte en quatre étapes : (1) *décider si une aide est nécessaire* — les étudiants tentent d'abord les tâches de manière indépendante pour préserver la valeur d'apprentissage ; (2) *choisir à qui demander* — ChatGPT comme premier pas à faible barrière, puis les pairs pour la négociation conceptuelle, puis les enseignants pour les questions complexes ou à fort enjeu ; (3) *déterminer le type d'aide* — des indices et des explications à l'[[problem-solving|résolution de problèmes]] étayée, en passant par la rationalisation du travail routinier et l'extension de l'apprentissage ; et (4) *juger l'aide reçue* — exercer une confiance sélective et vérifier les productions de l'IA par rapport aux travaux de cours ou avec des humains. De manière cruciale, les étudiants ont privilégié la **recherche d'aide instrumentale** (améliorer la compréhension) à la **recherche d'aide exécutive** (obtenir des solutions), une distinction que les auteurs proposent d'adapter en de nouveaux items de mesure de l'autorégulation pour les grands modèles de langue.

En [[english-education|rédaction]] entièrement en ligne, la disponibilité de l'outil n'est pas le goulot d'étranglement. [[reed-resource-literacy-genai-composition-2026|Reed (2026)]] a observé que les étudiants en difficulté n'étaient pas ceux qui manquaient de soutien, mais ceux qui ne reconnaissaient pas quand une aide était nécessaire, quelle ressource convenait à la tâche, ou comment juger la rétroaction une fois arrivée — et la production fluide de l'[[generative-ai|IA générative]] est facilement prise pour un soutien faisant autorité. Sa réponse a consisté à rendre la recherche d'aide *structurée* plutôt que simplement disponible : des points de contact obligatoires qui décodent les exigences de la tâche, cartographient les ressources avec justification, comparent les sources de rétroaction, et bouclent la boucle par une réflexion.

### Rendre visible le contexte comportemental : TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron et coll. (2026)]] s'attaquent au précurseur comportemental de la recherche d'aide dans l'[[cs-education|enseignement de la programmation assisté par l'IA]] : les tuteurs humains s'adaptent au comportement observable des apprenants, et pas seulement à leurs demandes explicites, mais les tuteurs par IA manquent de ce contexte. **TutorTrace** est un ensemble de données et un pipeline qui rendent le contexte comportemental des apprenants calculable en temps réel à partir de la télémétrie de bas niveau de l'environnement de développement intégré (quatre déploiements, N=480 ; environ 180 000 événements, 13 633 segments comportementaux, 27 métriques), dérivant une taxonomie de l'activité de l'apprenant *avant* la première requête à l'IA, *entre* les requêtes consécutives, et *sur l'ensemble de* la session. Cela permet aux systèmes de classer si une requête traduit une recherche d'aide **guidée** (précédée d'un travail indépendant) ou une recherche d'aide **dépendante** (sans travail indépendant) — AUROC=.717 en prédiction sur données retenues — et de prédire les requêtes imminentes (AUROC=.726). Une évaluation préliminaire en classe a montré que des invites sensibles au comportement ont réduit de 50.0% à 20.7% les intervalles entre requêtes sans travail indépendant. Cela relie la télémétrie de l'[[learning-analytics|analytique de l'apprentissage]] au [[intelligent-tutoring|tutorat adaptatif]], montrant que le contexte comportemental peut être opérationnalisé à grande échelle pour étayer *la manière dont* les étudiants cherchent de l'aide, plutôt que de simplement répondre à leurs questions explicites.

## Implications pour la conception et la recherche

1. **Concevez délibérément les affordances de la recherche d'aide.** Des boutons d'aide persistants et visibles peuvent permettre des stratégies de contournement ; retardez l'accès et structurez la délivrance pour soutenir la [[desirable-difficulties|lutte productive]].([[lak2026-hint-button-unproductive-use]])
2. **Étayez la recherche d'aide elle-même.** Formez les apprenants aux demandes axées sur le raisonnement (indices étape par étape, vérification) plutôt que de présumer que l'accès équivaut à un bon usage.([[guided-llm-scaffolding-independent-learning]])
3. **Employez la transparence pour calibrer la confiance.** Avertir de la faillibilité de l'IA peut accroître la recherche d'aide appropriée et l'engagement.([[ai-fallibility-warning-help-seeking]])
4. **Mesurez le recours, pas seulement l'étayage.** Évaluez si les étudiants s'engagent réellement avec le cadrage pédagogique, et pas seulement si le tuteur le fournit.([[rethinking-scaffolding-llm-tutors]])
5. **Soutenez le suivi et l'autonomie.** Les étayages de la recherche d'aide devraient renforcer la [[metacognition|métacognition]] et l'[[self-regulated-learning|apprentissage autorégulé]], en se gardant de la [[cognitive-offloading|dépendance excessive]].

## Concepts liés

- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[cognitive-offloading]]
- [[learning-analytics]]
- [[k-12]]
- [[higher-ed]]
- [[socratic-method]]
- [[pedagogical-agent]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[affective-tutoring]]
- [[feedback]]
- [[active-learning]]
- [[agentic-ai]]
- [[student-support-and-success]] — institutional outreach and support allocation, beyond in-course help-seeking

## Articles liés

- [[penquiry-pen-based-llm-qa-2026]] — Penquiry: A Pen-based Interactive In-situ Q&A System Leveraging LLMs
- [[tutortrace-learner-behavioral-states-2026]]
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[lak2026-hint-button-unproductive-use]] — Premature hint requests and superficial hint reading predict lower learning gains in an ITS
- [[ai-fallibility-warning-help-seeking]] — Warning about AI fallibility increases help-seeking in a math tutoring system
- [[regulating-ai-tutor-adolescent-srl]] — The intention-behavior gap in adolescent GenAI help-seeking and self-regulated learning
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM scaffolding improves reasoning-focused help-seeking and independent learning
- [[rethinking-scaffolding-llm-tutors]] — The scaffolding/student-uptake mismatch in real-world LLM tutor deployments
- [[uneven-impact-generative-ai-student-learning-2026]] — Early reliance: consulting GenAI before independent thought, search, or an instructor predicts both benefit and harm (Manikonda et al. 2026)
- [[reed-resource-literacy-genai-composition-2026]] — Resource literacy in online composition: the bottleneck is recognizing when help is needed (Reed 2026)
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Scaffolding Targeted AI Help-Seeking During Problem-Solving
- [[guided-ai-tutor-impasse-resolution-2026]] — Examining Variation in How Guided AI Tutors Resolve Student Impasses
- [[student-query-demand-hybrid-ai-support-2026]] — What Students Actually Ask: Demand Structure and Automation Potential in a Hybrid Support System
