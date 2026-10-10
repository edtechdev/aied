---
title: "Soutien aux étudiants et réussite"
created: "2026-10-01T20:31:35-04:00"
updated: "2026-10-10T03:05:58-04:00"
type: concept
foundations: [ai-education, human-ai-collaboration]
pedagogy: [help-seeking, student-experience, student-engagement]
technology: [learning-analytics, conversational-ai, machine-learning, student-modeling, recommender-systems-and-learning-paths, generative-ai]
assessment: [learning-gains]
methods: [rct, quantitative-research]
institutions: [change-management, educational-policy-ai, governance]
ethics: [equity-in-ai-education, privacy]
audience: [administrators, institutions, researchers, instructors]
level: [higher ed, undergraduate]
confidence: high
connected_faqs: [ai-agents-support-students-instructors, institutional-ai-policy]
translation_of: concepts/student-support-and-success
source_updated: "2026-10-03T01:40:50-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Soutien aux étudiants et réussite (Student Support and Success)** — le travail institutionnel consistant à aider les étudiants à rester, à progresser et à terminer : **conseil, assistance administrative, démarchage, orientation vers des services, et allocation d'un soutien rare**. C'est la page de ce que les institutions *font aux* étudiants plutôt que de ce qui se produit *à l'intérieur* d'un cours. L'[[higher-ed|enseignement supérieur]] est le parapluie plus large du secteur, et la [[student-experience|expérience étudiante]] couvre la manière dont l'IA se traduit dans l'expérience propre de l'étudiant ; les [[learning-gains|gains d'apprentissage]] mesurent si l'apprentissage a eu lieu. Le constat distinctif de cette base de connaissances est que le soutien par l'IA fait avancer de façon fiable l'**accomplissement des tâches** — une action datée et binaire que l'étudiant contrôle et que l'institution peut observer — tout en laissant largement intacts la **persévérance, les crédits et l'obtention du diplôme**. Distinguer ces résultats est l'objet de cette page.

## Questions à examiner

- Quel résultat cherchez-vous à faire évoluer ? Un rappel d'inscription et un programme de rétention sont des interventions différentes, appuyées sur des données probantes différentes, et la recherche présentée ici suggère que l'une n'achète pas l'autre.
- Si un modèle signale un étudiant comme étant à risque, que se passe-t-il ensuite ? Qui agit, avec quelles capacités, et qu'est-ce qui rendrait la recommandation réalisable et pas seulement exacte ?
- La capacité de soutien est finie. Lorsque l'IA la classe ou l'alloue, qu'advient-il des étudiants qu'un conseiller humain aurait de toute façon remarqués ?
- Qui est responsable lorsqu'un message automatisé, une orientation vers un service ou un score de risque se trompe ? L'étudiant subit la conséquence ; l'institution détient le système.
- Vos données de soutien voyagent-elles ? Le partage entre services est ce qui rend le ciblage possible, et c'est aussi la raison la plus fréquente pour laquelle le ciblage s'interrompt silencieusement.

## Introduction

Le soutien aux étudiants se situe du côté institutionnel de la relation. Son travail est le conseil, le démarchage, l'orientation vers des services et l'allocation de capacités humaines et financières finies ; son corpus probant est fait de dossiers administratifs, d'événements d'inscription, de crédits acquis, et du fait qu'un étudiant revienne ou non. L'IA générative est entrée sur ce territoire plus tardivement qu'elle n'est entrée dans l'enseignement, et une grande partie de la littérature présentée ici porte sur des systèmes **non génératifs** — agents conversationnels par SMS, modèles d'alerte précoce, prédiction fédérée du risque — les outils génératifs arrivant comme conseillers, assistants et répondants fondés sur une base de connaissances.

La distinction qui organise cette page est celle entre **ce qu'une incitation peut faire** et **ce qu'une trajectoire exige**. Les technologies de soutien excellent dans une décision datée et binaire : inscrivez-vous avant cette date, remplissez ce formulaire, démarrez Early Start. Elles éprouvent bien plus de difficulté face aux résultats cumulatifs — la persévérance, les crédits, l'obtention du diplôme — que façonnent l'enseignement, les finances, l'emploi, les circonstances familiales et la préparation antérieure. Les données probantes les plus solides de la base de connaissances à ce sujet proviennent d'une évaluation randomisée sur quatre ans qui a fortement fait progresser l'inscription et nullement l'obtention du diplôme.

## Les fonctions de soutien

La recherche se regroupe en cinq fonctions, et les frontières entre ces groupes importent parce qu'elles portent des données probantes différentes.

**Démarchage et communication.** Les institutions envoient des messages aux étudiants à grande échelle, et les évaluations les plus solides testent si cela change quoi que ce soit. Une étude randomisée sur quatre ans de CSUNny, un agent conversationnel non génératif par SMS de la California State University, Northridge, a suivi deux cohortes de premier cycle (N = 8 708) sur huit semestres ([[mata-sustaining-ai-enabled-student-support-2026|Mata, Russell & Page, 2026]]). Un rappel d'inscription envoyé le 31 juillet 2018 a rendu les étudiants traités 34 points de pourcentage plus susceptibles de s'inscrire avant le 16 août, et seulement 2 points plus susceptibles avant le 15 septembre ; les rappels Early Start ont produit 11 points d'inscription supplémentaire au 7 juin et 20 points au 22 juin. La réceptivité s'est maintenue : les taux annuels de désabonnement n'ont jamais dépassé 4 %. Un essai multi-semestres pré-enregistré à la Georgia State University a poussé les étudiants de deux grands cours asynchrones (N = 1 568 et N = 915) avec deux à trois messages personnalisés par semaine, augmentant de quatre points de pourcentage les chances d'obtenir un A ou un B contre 61 % chez les témoins, et déplaçant les taux de DFW (D, F, W) d'environ trois points dans chaque cours ([[chatbot-outreach-course-performance-2026|Meyer et al., 2026]]).

**Conseil et planification des études.** La prédiction des cours et des notes fournit l'intrant de la planification — un modèle prédit conjointement les cours qu'un étudiant suivra et les notes qu'il obtiendra ([[trace-course-grade-prediction-2026|Savala, 2026]]), et un autre prédit la progression au niveau des modules dans de grands cours de programmation en ligne au moyen d'un arbre de décision intrinsèquement interprétable ([[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska, 2026]]). Le crédit de transfert est un problème de conseil à part entière : CourseGraph modélise le contenu des cours sous forme de graphes de connaissances afin d'évaluer les équivalences de cours externes pour les étudiants mobiles ([[coursegraph-cs-course-comparison-2026|Nijdam et al., 2026]]). Au niveau institutionnel, une revue de 155 études sur l'IA et la prestation de services dans l'enseignement supérieur a montré que l'analytique de l'apprentissage était l'application la plus courante, avec 46 études (29,7 %), devant les agents conversationnels et assistants virtuels avec 31 (20,0 %) et l'analytique prédictive avec 29 (18,7 %) ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga, 2026]]).

**Orientation vers les services et allocation du soutien.** La prédiction n'est pas un plan, et l'écart entre les deux est l'endroit où siège la critique la plus vive du champ. SC2R le formalise comme l'**écart d'actionnabilité** : un score de risque ne devient un soutien à la décision que lorsque ses recommandations sont sémantiquement réalisables et vérifiables par la machine — contraintes par le calendrier, le budget, l'immuabilité et la disponibilité, et pas seulement valides du point de vue du modèle ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge, 2026]]). La question de savoir si les modèles peuvent bien allouer le soutien est empiriquement contestée : invités à recommander des plans de soutien pour 4 500 vignettes synthétiques d'étudiants, trois LLM ont montré une sensibilité limitée aux besoins des étudiants et une forte incohérence d'un modèle à l'autre ([[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al., 2026]]).

**Accès au soutien académique.** Les systèmes de récupération spécifiques à un cours visent les étudiants les moins susceptibles de solliciter un humain. Beacon, construit à partir des matériaux approuvés d'un seul module de programmation, a obtenu des évaluations de pertinence élevées (89 %) et a été jugé par la plupart des étudiants comme soutenant plutôt que remplaçant leur apprentissage (66,7 %), dans une petite évaluation portant sur 15 étudiants et 4 académiques ([[course-specific-rag-help-seeking-higher-ed-2026|Zhou et al., 2026]]). Le recours au tutorat est un problème en soi : un essai randomisé sur deux ans d'une couche de tutorat virtuel destinée aux étudiants en difficulté a dû tester le recours séparément de l'apprentissage, parce qu'atteindre les étudiants qui ont besoin de soutien n'est pas la même chose que le leur fournir ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Fryer et al., 2026]]).

**Assistance administrative.** Le leadership et l'administration sont étudiés comme un domaine d'application propre, avec une taxonomie en dix domaines cartographiant les points d'atterrissage de l'IA dans le leadership éducatif ([[sposato-ai-educational-leadership-taxonomy-2025|Sposato, 2025]]). Les services gérés par l'institution débordent du conseil vers la santé : un cadre intégré de bien-être sur le campus associe la prévention — améliorer la façon dont la rétroaction est recueillie — à l'intervention par la détection des problèmes de santé mentale ([[ai-campus-wellbeing-tools|Tang, 2026]]). L'attestation des acquis est adjacente : lorsqu'un agent peut accomplir un cours au nom d'un étudiant, une attestation qui dit « obtenu » perd son sens, ce qui transforme les registres d'achèvement en un problème de conception ([[credentials-carry-evidence-ai-agents-2026|Srivastava, 2026]]).

## De la prédiction au soutien

La prédiction du risque — systèmes d'alerte précoce, modèles d'abandon, classificateurs de risque — relève de l'[[learning-analytics|analytique de l'apprentissage]] dans cette base de connaissances, et cette page traite l'*analytique prédictive* comme la même chose. Les travaux de modélisation sont substantiels : des classificateurs supervisés identifient les étudiants avant leur retrait à partir des performances académiques, de données démographiques et de registres d'inscription ([[at-risk-students-ml-prediction|Gheisari & Salarian, 2026]]) ; un cadre à double couche combine les journaux comportementaux de Codeforces (n = 1 816) avec des données d'enquête psychographique issues de dix universités pour prédire l'attrition en programmation compétitive ([[predicting-attrition-competitive-programming|Alam et al., 2026]]) ; et une architecture fédérée prédit la performance et l'abandon à travers les institutions sans partager les données brutes des étudiants, atteignant une AUC de 0,918 sur OULAD contre 0,925 en centralisé ([[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al., 2026]]). Une vision d'« éducation de précision » étend cette logique aux jumeaux numériques des étudiants et à une « réussite étudiante préventive » ([[precision-education-student-digital-twins-2026|Han et al., 2026]]).

Ce qui relève *d'ici* est l'étape qui suit le score : l'**allocation du soutien**. Deux constats en fixent les limites. D'abord, la séparation entre classement et calibration — les modèles fédérés de risque ont conservé leur AUC sous décalage distributionnel tandis que leur calibration se dégradait fortement, si bien qu'un modèle qui classe encore correctement les étudiants peut se tromper sur la probabilité que chacun a besoin d'aide. Ensuite, l'étude sur les facteurs favorisants : une analyse Delphi internationale et une analyse AHP/SNAP sur le passage de l'analytique de l'apprentissage à l'intervention ont identifié sept facteurs favorisants et classé l'**orientation stratégique institutionnelle** au premier rang (priorité 0,2072) et comme le plus influent sur les autres (PageRank 0,2430), situant le goulot d'étranglement dans la planification institutionnelle plutôt que dans les modèles ([[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić, 2026]]). Le regroupement comportemental de 14 003 dossiers d'étudiants en six profils, rattachés à des objets d'apprentissage recommandés, est la couche de recommandation vers laquelle cela pointe ([[najem-behavioral-clustering-adaptive-learning-recommendation-2026|Najem et al., 2026]]).

Un résultat relatif à l'intégrité rejoint ce même pipeline. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]] prédit le risque de tricherie assistée par l'IA à partir des traces du LMS en début de semestre (AUC 0,763) et recommande de n'agir sur ce risque que par un démarchage à faible enjeu, le seuil de décision étant choisi pour la portée plutôt que pour l'accusation : en l'abaissant à 0,30, on identifiait 21 des 23 étudiants à haut risque, avec une précision de 60 %.

## L'échelle des résultats : ce que chaque mesure signifie réellement

Le mot « réussite » recouvre au moins cinq mesures différentes, et le soutien par l'IA ne les fait pas évoluer également. Les distinguer est la chose la plus utile que cette page puisse faire.

- **L'accomplissement des tâches** est une action unique, datée et binaire que l'étudiant contrôle et que l'institution observe en quelques jours — s'inscrire avant une échéance, déposer un formulaire, s'inscrire à Early Start. C'est là que les incitations fonctionnent, et les effets peuvent être importants et immédiats (34 points de pourcentage, puis 2, dans le rappel d'inscription de CSUN).
- **Les crédits (unités inscrites et acquises)** sont cumulatifs et dépendent de l'offre de cours, du séquencement et du nombre de sessions qu'un étudiant peut se payer. Dans l'évaluation de CSUN, aucun effet significatif du traitement n'est apparu sur les unités inscrites, acquises ou cumulativement acquises.
- **La persévérance** est la continuation d'une session à l'autre — l'inscription selon la séquence des semestres — et elle n'a pas bougé non plus, avec un N de 8 708 et une puissance permettant de détecter des effets de 0,05 écart-type ou plus.
- **La rétention** est le taux institutionnel que produit la persévérance, et elle est généralement rapportée au niveau du programme ou de la cohorte. Les taux de DFW au niveau du cours sont ce qui s'apparente le plus à un indicateur avancé dans cette littérature, et ils ont évolué modestement (−3 points de pourcentage dans chaque cours de l'essai de Georgia State).
- **L'obtention du diplôme** est le résultat terminal, pluriannuel. La moyenne d'obtention du diplôme au sein du groupe témoin à la quatrième année était de 0,190 dans l'étude CSUN, et l'effet du traitement sur ce résultat n'était pas statistiquement significatif.

L'explication que donnent les auteurs de ce schéma est l'affirmation centrale de la page : un rappel agit sur une décision discrète et de court terme, tandis que la persévérance et la moyenne générale sont cumulatives et façonnées par l'enseignement, les finances, l'emploi, les circonstances familiales et la préparation antérieure. Ils concluent qu'une communication passant par un outil de ce type, **à elle seule**, peut être insuffisante pour les faire évoluer — et que les résultats nuls sont précis plutôt que sous-alimentés en puissance. L'inscription précoce conserve malgré tout une valeur institutionnelle pour la planification des effectifs et des locaux, même là où les résultats d'apprentissage n'évoluent pas.

## Équité et risques d'agir sur un score

Les systèmes de soutien agissent sur les étudiants, ce qui rend leurs modes de défaillance différents de ceux d'un tuteur. Un test de résistance de six interventions d'équité a posteriori sur un système d'alerte précoce contrôlé par un fournisseur, reproduit et construit à partir de 168 550 dossiers d'étudiants, a montré que ces interventions ne tenaient pas la promesse d'équité qu'elles affichaient ([[fairness-theatre-early-warning-systems-2026|McConvey et al., 2026]]). Une revue menée par des défenseurs des étudiants organise la surface de risque autour des admissions, du recrutement et de l'aide financière, et des **services de réussite étudiante** — les domaines où l'IA institutionnelle pèse le plus directement sur les étudiants ([[students-at-stake-ai-deployment-risks-2026|Student Defense, 2026]]). La confidentialité et l'équité sont ici structurelles plutôt qu'accessoires : l'apprentissage fédéré existe parce que le partage des dossiers d'étudiants entre institutions est inacceptable, et la composante humaine de la boucle dans le programme de CSUN — les administrateurs répondant à ce que l'agent conversationnel ne pouvait pas traiter, puis réintégrant la réponse dans sa base de connaissances — est ce qui, selon les auteurs, permet d'atteindre les étudiants qui ignorent le courriel et le téléphone.

## Les conditions institutionnelles

La durabilité, dans cette littérature, est une propriété organisationnelle, et non technique. Le programme de CSUN a survécu quatre ans parce que le canal était détenu de manière centrale, supervisé conjointement par le bureau des études de premier cycle et le bureau du registraire, et rédigé par un seul spécialiste de la communication afin d'assurer une voix cohérente. Son ciblage s'est dégradé pour une raison tout aussi organisationnelle : parce que les données des étudiants n'étaient pas centralisées, un rappel d'aide financière exigeait qu'un bureau identifie les non-déclarants et qu'un autre transmette le sous-ensemble, et cette friction était suffisamment lourde pour que les campagnes ciblées passent de 36 % de l'ensemble des campagnes en AY2018-19 à 6 % en AY2022-23. L'endroit où le travail est réalisé, qui détient les données, et si la coordination entre unités est soutenable, déterminent ce qu'un système de soutien peut réellement faire — c'est pourquoi cette page porte le [[change-management|management du changement]], la [[governance|gouvernance]] et la [[educational-policy-ai|politique éducative et IA]] comme facettes plutôt que de traiter le déploiement comme une décision informatique.

## Connexions avec les concepts liés

Le soutien aux étudiants se rattache à la [[student-experience|expérience étudiante]] comme contrepartie tournée vers l'étudiant — les mêmes technologies vues du côté de l'étudiant plutôt que de celui de l'institution — et à la [[help-seeking|recherche d'aide]] pour le mécanisme par lequel les étudiants qui ont besoin de soutien l'obtiennent effectivement ; le démarchage et les assistants spécifiques à un cours sont deux tentatives pour abaisser le coût de la demande. L'[[learning-analytics|analytique de l'apprentissage]] détient la prédiction qui alimente l'allocation, la [[student-modeling|modélisation de l'apprenant]] et le [[knowledge-tracing|suivi des connaissances]] les modèles sous-jacents, et [[recommender-systems-and-learning-paths|les systèmes de recommandation et les parcours d'apprentissage]] la couche de recommandation. Elle se relie au [[well-being|bien-être]] à travers les systèmes de santé mentale et de prévention sur le campus, au [[career-development-and-readiness|développement de carrière et à la préparation]] comme le résultat qui suit l'achèvement, à l'[[equity-in-ai-education|équité]] et à la [[privacy|confidentialité]] à travers les risques d'agir sur des scores, et à l'[[administrator|administration]], aux [[stakeholders|parties prenantes]] et au [[change-management|management du changement]] comme les rôles et les processus qui décident si l'ensemble se pérennise. Les [[learning-gains|gains d'apprentissage]] sont le nœud de mesure adjacent : les résultats de cette page sont administratifs plutôt que pédagogiques, et les deux n'évoluent pas ensemble.

## Concepts liés

- [[higher-ed]] — le parapluie sectoriel sous lequel se situe cette page
- [[student-experience]] — la manière dont l'IA se traduit dans l'expérience propre de l'étudiant
- [[learning-gains]] — si l'apprentissage a eu lieu, le résultat pédagogique que cette page ne mesure pas
- [[learning-analytics]] — prédiction, alerte précoce et analytique prédictive
- [[student-modeling]] — la couche de modélisation sous la prédiction du risque
- [[knowledge-tracing]] — estimation fine des compétences et de la maîtrise
- [[recommender-systems-and-learning-paths]] — recommander des cours, des ressources et des parcours
- [[help-seeking]] — comment les étudiants en viennent à demander du soutien
- [[well-being]] — santé mentale sur le campus, prévention et intervention
- [[career-development-and-readiness]] — le résultat qui suit l'achèvement
- [[administrator]] — le rôle qui détient et fait fonctionner les systèmes de soutien
- [[stakeholders]] — qui a une voix au chapitre sur les décisions institutionnelles en matière d'IA
- [[change-management]] — pérenniser le programme après le pilote
- [[governance]] — politique et supervision de l'IA institutionnelle
- [[educational-policy-ai]] — le contexte politique du déploiement institutionnel
- [[equity-in-ai-education]] — qui le système atteint et qui il manque
- [[privacy]] — dossiers des étudiants, partage de données et approches fédérées
- [[human-in-the-loop-ai]] — le jugement humain à l'intérieur d'un flux de soutien automatisé
- [[rct]] — le plan derrière les données probantes les plus solides présentées ici

## Articles liés

- [[mata-sustaining-ai-enabled-student-support-2026]] — évaluation randomisée sur quatre ans d'un agent conversationnel de soutien universitaire : l'accomplissement des tâches a évolué, ni l'obtention du diplôme ni la moyenne générale
- [[chatbot-outreach-course-performance-2026]] — essai de démarchage multi-semestres pré-enregistré : taux de A/B plus élevés, déplacements modestes des DFW, une exception démographique
- [[lopez-pernas-llm-appropriate-student-support-2026]] — 4 500 vignettes synthétiques : sensibilité limitée aux besoins des étudiants et incohérence entre modèles dans les recommandations de soutien
- [[sc2r-counterfactual-recourse-educational-2026]] — l'écart d'actionnabilité : le recours doit être réalisable et vérifiable, et pas seulement valide au regard du modèle
- [[fairness-theatre-early-warning-systems-2026]] — six interventions d'équité a posteriori sur un système d'alerte précoce fournisseur construit à partir de 168 550 dossiers
- [[at-risk-students-ml-prediction]] — classificateurs supervisés identifiant les étudiants avant leur retrait
- [[predicting-attrition-competitive-programming]] — journaux comportementaux et enquête psychographique prédisant l'attrition
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — modélisation fédérée du risque entre institutions sans partager les données brutes des étudiants
- [[precision-education-student-digital-twins-2026]] — les jumeaux numériques et la « réussite étudiante préventive » comme vision
- [[learning-analytics-to-educational-interventions-2026]] — sept facteurs favorisants pour refermer la boucle entre l'analytique et l'intervention
- [[course-specific-rag-help-seeking-higher-ed-2026]] — un assistant spécifique à un cours visant à abaisser le coût de la demande d'aide
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — le recours au tutorat testé séparément de l'apprentissage
- [[najem-behavioral-clustering-adaptive-learning-recommendation-2026]] — six profils comportementaux rattachés à des objets d'apprentissage recommandés
- [[trace-course-grade-prediction-2026]] — prédiction conjointe des cours et des notes pour la planification
- [[zhang-ml-student-progress-programming-2026]] — prédiction interprétable de la progression au niveau des modules
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — 155 études sur l'IA, le leadership et la prestation de services dans l'enseignement supérieur
- [[sposato-ai-educational-leadership-taxonomy-2025]] — taxonomie en dix domaines de l'IA dans le leadership éducatif
- [[students-at-stake-ai-deployment-risks-2026]] — la surface de risque du côté étudiant : admissions et aide financière, services de réussite étudiante et enseignement
- [[ai-campus-wellbeing-tools]] — soutien au bien-être sur le campus couvrant la prévention et l'intervention
- [[coursegraph-cs-course-comparison-2026]] — équivalence de cours pour le crédit de transfert et la mobilité
- [[credentials-carry-evidence-ai-agents-2026]] — ce que signifie un registre d'achèvement lorsqu'un agent peut faire le travail
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — Prédire tôt le risque de tricherie assistée par l'IA, et l'arbitrage sur le seuil pour un démarchage à faible enjeu
