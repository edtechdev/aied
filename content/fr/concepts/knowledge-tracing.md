---
title: "Traçage des connaissances"
created: "2026-06-23T10:44:35-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-09T09:50:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Traçage des connaissances** — la modélisation de ce que les apprenants savent au fil du temps, par le suivi de leur performance sur les exercices et la prédiction de leur maîtrise future. C'est le fil de modélisation le plus riche de la base de connaissances, couvrant les approches bayésiennes, d'apprentissage profond et renforcées par les [[llm|grands modèles de langue]] pour suivre les connaissances de l'étudiant à mesure qu'elles évoluent.

## Questions à examiner

- Le traçage des connaissances modélise ce que vous savez au fil du temps à partir de votre performance sur les exercices, en suivant quand les connaissances sont acquises et quand elles se dégradent. Que peuvent révéler vos réponses sur la question de savoir si vous « savez » vraiment quelque chose ou si vous l'avez simplement réussi cette fois ?
- Cette page avertit que « la maîtrise n'est pas l'exactitude » — un apprenant peut sembler maîtriser une compétence tout en l'appliquant systématiquement de travers lorsqu'une condition cachée est violée. Quand avez-vous vu quelqu'un (ou vous-même) donner l'impression de comprendre quelque chose alors qu'il ne le comprenait pas en réalité ?
- Si le traçage des connaissances alimente des systèmes adaptatifs qui décident de ce qu'il faut enseigner ensuite, qu'est-ce qui tourne mal lorsque le modèle prend des réponses correctes pour une véritable maîtrise et fait progresser un étudiant trop tôt ?
- Le traçage des connaissances prend de nombreuses formes — bayésienne, neuronale, hypergraphique, fondée sur le dialogue, renforcée par les grands modèles de langue. Quels compromis attendriez-vous entre un modèle transparent que vous pouvez expliquer et un modèle puissant mais opaque ?
- Cette page relie le traçage des connaissances aux étudiants simulés — générant les états de connaissance que le traçage infère normalement de données réelles. Comment la simulation d'apprenants pourrait-elle aider à tester un tuteur avant qu'il ne rencontre de vrais étudiants ?
- Puisque les connaissances se dégradent avec le temps, que devrait faire un système adaptatif de la « maîtrise » passée d'un étudiant une fois qu'il l'a oubliée ? Comment concevriez-vous pour l'oubli, plutôt que de présumer que les connaissances persistent ?

## Introduction

Le traçage des connaissances transforme les réponses brutes aux exercices en estimations de ce qu'un étudiant a maîtrisé et de ce qu'il lui reste à apprendre. À la différence du simple suivi de l'exactitude, le traçage des connaissances modélise la dynamique temporelle de l'apprentissage — quand les connaissances sont acquises, quand elles se dégradent, et comment les concepts se rapportent les uns aux autres.

### Les approches représentées dans la base de connaissances

- **Les approches bayésiennes :** [[stanbkt-bayesian-knowledge-tracing]] normalise les implémentations de BKT, tandis que [[mbp-kt-meta-behavioral-knowledge-tracing]] incorpore des signaux méta-comportementaux
- **BKT à preuves faibles avec une fonction d'observation par grand modèle de langue :** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et coll., 2026)]] conserve la structure du BKT mais remplace l'observation binaire correct/incorrect — l'entrée standard du BKT — par une observation continue : un évaluateur [[llm|grand modèle de langue]] émet des preuves de maîtrise graduées accompagnées d'un poids de confiance, fusionnées dans une postérieure rétrécie par la confiance et filtrées de sorte qu'une réponse clairement fausse ne peut augmenter l'estimation, ce qui fait de la mise à jour une variante qui généralise le BKT standard plutôt qu'une réduction stricte de celui-ci. La fiabilité de cette fonction d'observation dépend de l'apprenant : les preuves moyennes ont séparé nettement les niveaux d'aptitude (0.25 faible / 0.67 moyen / 0.77 fort), tandis que la corrélation intra-niveau avec la maîtrise réelle n'était que d'environ r = 0.15 / 0.48 / 0.41, laissant l'état tracé comme la croyance d'un agent au sujet de l'apprenant plutôt que comme une mesure calibrée.
- **Les modèles neuronaux et hybrides :** [[neural-symbolic-knowledge-tracing]] combine le raisonnement symbolique avec les [[machine-learning|réseaux de neurones]] ; [[explainable-probabilistic-kt]] fait progresser les modèles probabilistes interprétables
- **Les réseaux de mémoire hypergraphiques :** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] augmente le traçage fondé sur la mémoire (DKVMN) d'un raisonnement par hypergraphes temporels, modélisant les interactions dynamiques d'ordre supérieur entre les concepts qui co-apparaissent au sein de questions multi-compétences
- **Le traçage des connaissances fondé sur le dialogue :** [[huang-interpretable-knowledge-tracing-2026]] adapte le traçage des connaissances au tutorat conversationnel
- **Renforcé par les grands modèles de langue :** [[xie-hillm-cd-2026|HiLLM-CD]] emploie les grands modèles de langue pour la construction automatisée d'arbres conceptuels et l'inférence hiérarchique de compétence
- **Le traçage des connaissances sémantique et orienté vers la recommandation :** [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec (Ozyurt, Almaci, Feuerriegel et Sachan, 2025)]] ancre l'*entrée* plutôt que l'architecture : un grand modèle de langue annote chaque question avec des étapes de solution et des concepts de connaissance alignés sur les Common Core State Standards for Mathematics, l'apprentissage contrastif aligne les enchâssements de question, d'étape de solution et de concept (les faux négatifs étant éliminés par un pré-regroupement des variantes de concept telles que « interpréter un diagramme à barres » et « lire des informations dans un graphique à barres »), et une perte de calibration des KC permet au traceur de prédire directement un état de connaissance au niveau du concept, au lieu de l'inférer en faisant tourner le modèle sur chaque question de ce concept. Le traceur calibré sert ensuite d'environnement d'apprentissage par renforcement pour la recommandation d'exercices, où une estimation de valeur fondée sur le modèle initialise le critique à partir du traceur lui-même. Sur quatre tâches de XES3G5M, moyennées sur 2 048 étudiants de test, les lignes de base sans apprentissage par renforcement ont donné des gains de connaissance marginaux ou négatifs, les méthodes continues fondées sur la valeur ont battu les méthodes fondées sur la politique, et l'estimation de valeur fondée sur le modèle les a améliorées de manière constante — le plus nettement sur la tâche de concept le plus faible, où la cible change à chaque étape. Les gains rapportés sont des pourcentages d'amélioration maximale des connaissances, non des résultats d'apprentissage, et le pipeline dépend des étapes de solution générées, dont le traceur hérite la qualité.
- **Le traçage des connaissances fondé sur les résultats (OKT) :** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et coll. (2026)]] tracent les connaissances des étudiants au sein de systèmes d'éducation fondée sur les résultats en traitant **les résultats de cours comme les concepts de connaissance eux-mêmes**, et en substituant aux relations conceptuelles dérivées de l'attention ou des graphes des « correspondances d'affinité » d'éducation fondée sur les résultats validées par des experts entre résultats de cours et résultats de programme. Un réseau neuronal augmenté de mémoire (MANN) modélise la manière dont l'atteinte de chaque résultat affecte les autres, et un ajustement fin de BERT adapté au domaine enrichit les enchâssements des résultats (avec une ossature GRU qui bat le LSTM). Sur des données en direct de LMS d'un programme d'[[engineering-education|ingénierie]] (2 416 étudiants, 966 résultats), l'OKT a atteint 89.81% d'AUC — surpassant DKT, DKVMN, EKT et SimpleKT — tout en ne donnant que des résultats compétitifs sur ASSISTments, ce qui confirme que l'avantage est lié à la structure de [[curriculum-design|programme]] propre à l'éducation fondée sur les résultats.

- **Le traçage fondé sur des instantanés seuls.** [[skill-acquisition-without-temporal-info|Nagai et coll. (2026)]] induisent un pseudo-ordre temporel à partir des relations d'inclusion entre les ensembles de compétences des apprenants, traitant les ensembles de compétences qui s'étendent comme une progression d'apprentissage, de sorte que des instantanés pris à un seul moment restent traçables — mais la formulation présuppose que les compétences ne sont jamais perdues, si bien que les déploiements pour des apprenants qui régressent nécessitent d'abord un mécanisme d'oubli explicite.

### Relations avec d'autres concepts

Le traçage des connaissances est étroitement lié à la [[student-modeling|modélisation de l'étudiant]] — tandis que le traçage des connaissances modélise spécifiquement les connaissances cognitives au fil du temps, la modélisation de l'étudiant est la pratique plus large qui consiste à représenter tous les aspects d'un apprenant (état [[affective-computing|affectif]], [[student-engagement|engagement]], préférences). Le traçage des connaissances alimente les systèmes d'[[adaptive-learning|apprentissage adaptatif]] et d'[[personalized-learning|apprentissage personnalisé]] qui ont besoin de savoir quoi enseigner ensuite, ainsi que les plateformes d'[[intelligent-tutoring|tutorat intelligent]] qui emploient les estimations de maîtrise pour sélectionner les problèmes appropriés. Il se relie à l'[[learning-analytics|analytique de l'apprentissage]] pour la conception de tableaux de bord et d'interventions, et au [[cognitive-diagnosis|diagnostic cognitif]] pour l'[[assessment|évaluation]] fine des compétences. Les construits du traçage des connaissances éclairent aussi les [[simulating-students|étudiants simulés]] — l'état cognitif d'un apprenant simulé est souvent formalisé avec la même dynamique de maîtrise et de dégradation que modélise le traçage des connaissances, si bien que la [[simulation|simulation]] est une manière de *générer* les états de connaissance que les méthodes de traçage *infèrent* normalement de données de réponses réelles.

**Une réserve de portée : le traçage estime la maîtrise du domaine, non la cognition d'ordre supérieur.** Une revue de 15 ans portant sur 127 études de tutorat intelligent montre que le traçage bayésien et le traçage par apprentissage profond se sont améliorés sur la période, tout en restant incapables de modéliser les processus cognitifs d'ordre supérieur, la métacognition ou la motivation — les états qu'un système adaptatif aurait le plus besoin de cibler ([[zerkouk-comprehensive-review-its-2025|Zerkouk et coll. (2025)]]).

**Une réserve : la maîtrise n'est pas l'exactitude.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren et Stamper (2026)]] montrent que l'hypothèse à deux états du BKT (acquis/non acquis) peut être violée par la *sur-généralisation trompeuse* — les apprenants peuvent sembler maîtriser une compétence tout en l'appliquant systématiquement de travers lorsqu'une contrainte d'application cachée est violée. Cela plaide pour un traçage de la compréhension conditionnelle (savoir *quand s'abstenir* d'une action), et pas seulement de l'exactitude des actions, lorsque les estimations de maîtrise pilotent les règles d'arrêt [[adaptive-learning|adaptatives]].

**Une réserve apparentée concerne la *manière dont* les modèles de traçage sont validés par rapport à la manière dont ils sont déployés.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan et Carvalho (2025)]] ont ajusté le BKT, le BKT avec oubli et le modèle à facteurs additifs sur un ensemble de données d'apprentissage successif sur plusieurs sessions, et ont montré qu'ils reproduisaient les tendances d'apprentissage lorsqu'ils étaient ajustés rétroactivement sur l'ensemble des sessions (AUC acceptable d'environ 0.74–0.79) ; mais en **validation croisée temporelle** — entraînement sur une session pour prédire la suivante, le cadre appliqué réaliste — les trois modèles surestimaient la performance future d'environ 47–58%, ne parvenaient pas à capter l'[[desirable-difficulties|effet d'espacement]], et pouvaient même prédire le mauvais ordre entre les conditions de pratique. Fait révélateur, les modèles *sans* mécanisme d'oubli explicite ont performé à peu près aussi bien que les versions augmentées de l'oubli à mesure que les sessions s'accumulaient, ce qui suggère que l'oubli était partiellement absorbé dans d'autres paramètres (par exemple les ordonnées à l'origine propres à chaque étudiant dans l'AFM) plutôt que réellement modélisé. Les auteurs relient cela à la distinction entre apprentissage et performance : les modèles populaires confondent la forte performance du moment avec la forte probabilité de rétention à long terme. L'implication pratique est qu'un traceur qui semble bon sur un ajustement rétrospectif peut tromper les systèmes adaptatifs qui consomment ses estimations de maîtrise, ce qui plaide pour une évaluation en marche avant et pour des modèles qui tiennent compte de l'intervalle de rétention, de l'espacement et de l'oubli entre sessions.

**Une autre réserve concerne la règle probatoire qui alimente la mise à jour.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] a fait tourner quatre règles de mise à jour sur des séquences d'événements ASSISTments 2012–13 identiques, ne différant que par la manière dont elles notaient les lignes achevées avec de l'aide, sur une moitié confirmatoire de 12 716 étudiants et 985 813 événements notés. Lire une ligne ayant bénéficié d'un indice ou d'une nouvelle tentative comme une première tentative ratée prédisait le mieux la performance ultérieure sans aide (AUC regroupée de 0.658) ; créditer toute achèvement la prédisait le moins bien (0.604), à peine au-dessus d'une constante qui ne connaît que la difficulté de la compétence (0.595). Le même choix régit le décompte de la maîtrise : créditer les achèvements déclarait maîtrisées 93.9% des 113 428 paires étudiant-compétence, contre 72.8% sous la règle stricte, et les paires que la règle indulgente déclarait en avance sur la règle stricte ont abouti à 70.9% d'exactitude sans aide contre 85.7% là où les deux s'accordaient, sous le taux de base de 0.744. Un état tracé est donc en partie une fonction de la convention de notation, et pas seulement de l'apprenant seul ; aussi une estimation de maîtrise consommée par une porte [[adaptive-learning|adaptative]] devrait-elle porter la règle qui l'a produite.

**Une réserve de capacité : les modèles de langue généraux tracent les connaissances à peine au-dessus d'une ligne de base triviale.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et coll. (2026)]] ont publié FoundationalASSIST, qui restaure le texte intégral des questions, les réponses que les étudiants ont réellement données et leurs choix de distracteurs, que les ensembles de données de traçage antérieurs avaient écartés, et ont testé quatre [[llm|grands modèles de langue]] de pointe comme traceurs en zero-shot. Le meilleur, GPT-OSS-120B, a atteint 56.2 pour cent contre les 51.3 pour cent que marque déjà une règle prédisant toujours « correct » (AUC-ROC 0.559), sans amélioration provenant d'historiques plus longs, et Llama-3.3-70B s'est révélé exact 85.4 pour cent du temps lorsqu'un étudiant répondait correctement, mais seulement 12.6 pour cent lorsqu'il se trompait — la preuve qu'un modèle du commerce trace l'optimisme plutôt que la compréhension ; aussi la compétence apparente d'un traceur doit-elle être lue au regard de la ligne de base triviale que sa tâche permet.

- **Un grand modèle de langue à passage unique peut tracer les connaissances avant que des apprenants ne soient enregistrés.** Interrogé comme une seule question dactylographiée, sans données de plateforme cible, Jev a atteint une AUC moyenne de .706, au-dessus du meilleur des 28 modèles de traçage profond entraînés sur 8 apprenants (.689), et en avance jusqu'à ce que le traçage supervisé le rattrape à 64-128 apprenants ([[system-one-llm-knowledge-tracing-2026|Lee et Park, 2026]]).

## Concepts liés

- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — fine-grained mastery estimation feeding support decisions

## Articles liés

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — semantically grounded tracing with KC-calibrated states, used as an RL environment for recommendation
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[crediting-assisted-work-inflates-mastery-2026]] — Which evidence rule decides a mastery claim (Srivastava 2026)
- [[system-one-llm-knowledge-tracing-2026]] — A single-pass LLM traces knowledge above deep models trained on 8 learners, at a fraction of the cost (Lee & Park 2026)
