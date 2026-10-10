---
title: "La modélisation de l'apprenant et l'enseignement adaptatif"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T03:41:12-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, simulating-students, student-modeling]
confidence: high
translation_of: concepts/student-modeling
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

> **La modélisation de l'apprenant et l'enseignement adaptatif (Learner modeling and adaptive instruction)** — le parapluie de la manière dont l'IA représente les apprenants (ce qu'ils savent, ressentent et ont besoin) et dont elle utilise ces représentations pour adapter l'[[teacher-role|enseignement]]. La famille couvre la couche de *modélisation* — la **modélisation de l'apprenant**, le [[knowledge-tracing|traçage des connaissances]], le [[cognitive-diagnosis|diagnostic cognitif]] et la [[simulating-students|simulation d'étudiants]] — et les *systèmes adaptatifs* qui consomment ces modèles — le [[intelligent-tutoring|tutorat intelligent]], l'[[adaptive-learning|apprentissage adaptatif]] et l'[[personalized-learning|apprentissage personnalisé]]. La question commune : *comment un système sait-il ce qu'un apprenant sait, et que devrait-il enseigner ensuite ?*

## Questions à examiner

- La question parapluie que pose cette page est la suivante : comment un système sait-il ce qu'un apprenant sait, et que devrait-il enseigner ensuite ? Avant de poursuivre votre lecture, par où commenceriez-vous pour représenter « ce qu'un apprenant sait » dans une machine ?
- La modélisation de l'apprenant couvre le traçage des connaissances (suivi des connaissances dans le temps), le diagnostic cognitif (cartographie des compétences maîtrisées) et la simulation d'étudiants (apprenants synthétiques). À quoi, selon vous, chaque approche est-elle bonne — et quel est le risque d'erreur de chacune ?
- Tout système d'IA adaptatif dépend d'un certain modèle de l'apprenant. Si un modèle vaut ce que valent les preuves qui l'alimentent, quelles preuves pensez-vous que les systèmes d'IA détiennent réellement sur un étudiant, et quelles choses importantes à son sujet demeurent invisibles ?
- Un modèle peut saisir ce qu'un étudiant réussit ou rate, mais pas pourquoi, ni ce qu'il ressent. Comment un modèle de l'apprenant pourrait-il induire un système adaptatif en erreur d'une manière qui nuit à l'étudiant plutôt que de l'aider ?
- Si vous conceviez un tuteur adaptatif, que voudriez-vous que son modèle de vous-même comprenne — et que voudriez-vous lui interdire explicitement de présumer ?

## Introduction

La modélisation de l'apprenant est la représentation computationnelle des apprenants ; l'enseignement adaptatif est ce que les systèmes font de cette représentation. Chaque système d'IA adaptatif en éducation dépend d'un certain modèle de l'apprenant — ne serait-ce qu'un modèle léger — et chaque modèle de l'apprenant existe pour éclairer une décision pédagogique. Cette page est le parapluie de ce pipeline : les méthodes de modélisation, les systèmes qui agissent sur les modèles, et leurs relations.

## La couche de modélisation

Ces concepts répondent à la question « que sait, que ressent et de quoi a besoin cet apprenant ? » — le versant représentation de la famille.

- **La modélisation de l'apprenant (student modeling)** — la pratique générale de représentation des caractéristiques de l'apprenant (connaissances, compétences, états [[affective-computing|affectifs]], [[student-engagement|engagement]], préférences) sous forme computationnelle. C'est le terme parapluie au sein de cette couche, englobant toutes les manières de représenter un apprenant.
- **Le [[knowledge-tracing|traçage des connaissances]]** — la pratique spécifique de modélisation des connaissances cognitives *au fil du temps*, en suivant la performance sur les exercices et en prédisant la maîtrise future. Il formalise la dynamique temporelle de l'apprentissage — quand les connaissances sont acquises, quand elles se dégradent, et comment les concepts se relient.
- **Le [[cognitive-diagnosis|diagnostic cognitif]]** — l'[[assessment|évaluation]] fine des compétences ou des composantes de connaissances spécifiques qu'un apprenant a maîtrisées, produisant un profil de maîtrise qui soutient une remédiation ciblée.
- **La [[simulating-students|simulation d'étudiants]]** — la génération d'apprenants *synthétiques* à la demande, plutôt que la représentation d'un apprenant réel, afin que la [[pedagogy|pédagogie]] et les systèmes d'IA puissent être testés ou entraînés hors ligne.
- **Un formalisme causal pour les modèles de l'apprenant.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] remplacent les réseaux bayésiens à portes bruitées par des modèles causaux structurels issus d'experts, faisant des indices des variables endogènes explicites afin que le modèle puisse demander ce qu'un étudiant aurait répondu sans l'aide qu'il a utilisée — légèrement moins prédictif, mais capable de contre-factuels que des modèles associatifs ne peuvent exprimer.

L'étude de [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] montre qu'une représentation fidèle n'exige pas la famille de modèles la plus complexe : un modèle d'étudiant fondé sur un arbre de décision léger et intrinsèquement interprétable — construit à partir des caractéristiques d'interaction avec les contenus de cours plutôt qu'à partir d'une riche télémétrie — prédit la progression au niveau du module dans les grands cours en ligne de [[cs-education|programmation]] (85–91% d'exactitude) et distingue les profils d'[[student-engagement|engagement]] à risque et désengagé, désengagé mais performant, et engagé et performant, soutenant l'alerte précoce des [[learning-analytics|analytiques de l'apprentissage]] à grande échelle.

Un modèle prédictif de l'apprenant peut reposer sur la structure de l'inscription plutôt que sur les données de traçage : TRACE encode chaque semestre comme un panier non ordonné de cours et prédit conjointement l'ensemble des cours et les notes, réduisant l'erreur de prédiction des notes à 0.1339 de MAE — 46.4% sous un modèle fondé uniquement sur les notes — sur 5,326 étudiants et dix ans ([[trace-course-grade-prediction-2026|Savala (2026)]]).

Les modèles d'étudiant peuvent aussi être construits à partir des seules traces comportementales et soutenir néanmoins l'adaptation. [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] ont dérivé trois profils d'engagement — Observation, Construction et Exploration — des parcours de clics de 315 apprenants en ligne construisant 822 modèles écologiques dans VERA, sans aucune donnée démographique ou contextuelle, et ont montré que ces profils prédisent la qualité des modèles (l'Exploration produit les modèles les plus complexes et les plus diversifiés, tandis que l'Observation est dominée par des modèles copiés plutôt qu'originaux). De telles caractérisations au niveau de l'engagement sont les modèles d'étudiant grossiers que la couche d'[[adaptive-learning|enseignement adaptatif]] peut consommer pour cibler la rétroaction.

La modélisation affective de l'apprenant est une dimension supplémentaire : un tuteur de mathématiques a déduit l'émotion du texte conversationnel et de l'expression faciale, puis a associé l'état agrégé à des stratégies de tutorat, mais la fusion multimodale n'a atteint que 60% d'exactitude par rapport aux annotations des participants eux-mêmes, faisant de la lecture de l'affect le maillon le plus faible du pipeline ([[kar-mathbuddy-affective-math-tutoring-2025|Kar et al. (2025)]]).

[[cross-subject-validity-delayed-start|Gutterman et al. (2026)]] ont constaté qu'un signal de démarrage retardé enregistré pendant la pratique des mathématiques prédisait les résultats en anglais, les retardataires chroniques (plus de 13 minutes) montrant des gains plus faibles (β = -.11 écart-type en ELA) même après contrôle des [[prior-knowledge|connaissances antérieures]] et du temps consacré à la tâche — ainsi, les modèles d'étudiant comportementaux peuvent se transférer d'une matière à l'autre sans réentraînement par cours, même si leurs seuils de coupure doivent être redéfinis.

## La couche d'enseignement adaptatif

Ces concepts répondent à la question « que faut-il enseigner ensuite ? » — le versant application qui consomme les modèles de l'apprenant.

- **Le [[intelligent-tutoring|tutorat intelligent]]** — des systèmes qui utilisent les modèles d'étudiant et les estimations de maîtrise pour sélectionner les problèmes et fournir un guidage pas à pas, l'application classique de la modélisation de l'apprenant.
- **L'[[adaptive-learning|apprentissage adaptatif]]** — des systèmes qui ajustent les contenus, le rythme ou la difficulté en réponse au modèle de l'apprenant.
- **L'[[personalized-learning|apprentissage personnalisé]]** — l'adaptation plus large de l'enseignement, des contenus et des parcours aux caractéristiques et préférences individuelles de l'apprenant.

## Comment les membres se relient

Les concepts forment un pipeline plutôt qu'une concurrence : la **modélisation de l'apprenant** est la représentation parapluie ; le [[knowledge-tracing|traçage des connaissances]] et le [[cognitive-diagnosis|diagnostic cognitif]] sont des méthodes de modélisation spécifiques qui l'alimentent ; la [[simulating-students|simulation]] *génère* des apprenants plutôt qu'elle ne représente des apprenants réels ; et le [[intelligent-tutoring|tutorat intelligent]], l'[[adaptive-learning|apprentissage adaptatif]] et l'[[personalized-learning|apprentissage personnalisé]] sont les systèmes qui consomment ces modèles pour adapter l'enseignement.

**La modélisation de l'apprenant comparée à la simulation d'étudiants** est la distinction essentielle à garder en tête. La modélisation de l'apprenant consiste à **représenter un apprenant réel** — construire un modèle *à partir* des données d'un étudiant réel afin qu'un système adaptatif puisse agir sur cet individu. La simulation d'étudiants, en revanche, **génère un apprenant synthétique** à la demande pour tenir lieu d'apprenants réels, afin que la pédagogie et l'IA puissent être évaluées ou entraînées hors ligne. Les deux sont étroitement liées plutôt qu'interchangeables : les étudiants simulés *intègrent* typiquement un modèle d'étudiant (un état épistémique, un ensemble de [[misconceptions|idées fausses]] ou un profil d'engagement) et puisent dans les mêmes construits que le [[knowledge-tracing|traçage des connaissances]] et le [[cognitive-diagnosis|diagnostic cognitif]] formalisent. Leurs finalités divergent — la modélisation de l'apprenant sert l'adaptation en direct en éclairant des décisions sur une personne réelle, tandis que la [[simulation|simulation]] fabrique des apprenants pour tester les systèmes (et de plus en plus pour auditer l'IA, par exemple [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]) plutôt que pour agir sur un individu réel.

**Le traçage des connaissances comparé à la modélisation de l'apprenant** est l'autre confusion fréquente. Le traçage des connaissances modélise spécifiquement les connaissances cognitives au fil du temps ; la modélisation de l'apprenant est la pratique plus large couvrant tous les aspects d'un apprenant (état affectif, engagement, préférences). Le traçage des connaissances est un *type de* modélisation de l'apprenant centré sur la dimension cognitive-temporelle. Les construits du traçage des connaissances alimentent aussi les [[simulating-students|étudiants simulés]] — l'état cognitif d'un apprenant simulé est souvent formalisé avec les mêmes dynamiques de maîtrise et de dégradation que modélise le traçage des connaissances, si bien que la simulation est une manière de *générer* les états de connaissance que les méthodes de traçage *déduisent* normalement de données de réponses réelles.

**Ancrer le traçage sur le [[curriculum-design|programme]] renforce le modèle.** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] montrent qu'un modèle de l'apprenant gagne en fidélité lorsque le traçage est lié à une structure explicite de programme plutôt qu'appris purement à partir des données : leur traçage des connaissances fondé sur les résultats (OKT) traite les acquis du cours en pédagogie par objectifs comme les concepts de connaissance à tracer, fournit les relations entre concepts par le biais de « correspondances d'affinité » OBE validées par des experts entre acquis de cours et acquis de programme (une alternative explicite à l'attention implicite ou à la propagation de messages sur graphe), et utilise un module à mémoire augmentée pour modéliser la manière dont l'atteinte d'un acquis en impacte d'autres. Sur des données réelles de programme d'ingénierie, il a battu les références DKT, DKVMN, EKT et SimpleKT (89.81% d'AUC), illustrant le fait que la couche de modélisation peut exploiter la structure propre du programme pour représenter les apprenants plus fidèlement.

**Le tutorat intelligent comparé à l'apprentissage adaptatif/personnalisé** se situe du côté application : le tutorat intelligent est le système qui sélectionne les problèmes et guide pas à pas ; l'apprentissage adaptatif ajuste les contenus et le rythme ; l'apprentissage personnalisé est l'adaptation la plus large de l'ensemble de l'expérience d'apprentissage. Les trois sont les « consommateurs » de la couche de modélisation.

## Le défi de validité partagé

Dans toute la famille, le défi de validité déterminant est le même : la représentation de l'apprenant doit **refléter fidèlement l'état réel de l'apprenant** plutôt que les hypothèses par défaut du système. Pour la **modélisation de l'apprenant** et le [[knowledge-tracing|traçage des connaissances]], cela signifie que le modèle doit réellement capter ce qu'un apprenant sait ([[ai-ed-evaluation|évaluation]] et [[assessment-validity|validité de la mesure]]). Pour la [[simulating-students|simulation]], cela signifie que l'apprenant synthétique doit faire preuve d'imperfections réalistes plutôt que de la pleine compétence du modèle ou d'une adhésion [[ai-sycophancy|sycophantique]]. Les systèmes adaptatifs qui consomment des modèles défectueux héritent de cette erreur et la propagent.

Les modèles qui déduisent l'état de l'apprenant à partir du jeu ont atteint des AUC de 0.848–0.913, alors que seulement deux des 55 études examinées les avaient audités pour détecter d'éventuels biais démographiques et qu'une seule avait étudié les résultats différentiels selon la capacité de l'apprenant ([[ai-game-based-learning-systematic-review-2026|Kaşarcı et Yurt (2026)]]).

Certains signaux visés peuvent ne pas être du tout récupérables à partir du dialogue : le pilote du cadre Learning Context a récupéré les idées fausses à 91.4% et l'anxiété à 100%, mais la conscience professionnelle à seulement 68.6% et la compétence langagière à 60%, si bien qu'un modèle sensible au contexte devrait capter les traits qui émergent lentement plutôt que d'attendre que le dialogue les révèle ([[learning-context-framework-context-aware-ai-education-2026|Liu et al. (2026)]]).

[[edumirror-educational-social-dynamics|Lin et al. (2026)]] mettent au jour une circularité dans la manière dont de tels apprenants synthétiques sont validés : leurs agents EduMirror administrent a posteriori des questionnaires psychométriques et lisent l'accord avec la représentation interne des valeurs de l'agent comme une validité psychologique, mais, le Surveyor mesurant des dimensions déjà encodées dans ce système de valeurs, le contrôle est une vérification de cohérence plutôt qu'une validation indépendante.

**L'exactitude n'est pas toujours un signal fidèle.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren et Stamper (2026)]] montrent qu'un modèle de l'apprenant déduisant la maîtrise des actions correctes peut dénaturer l'état réel de l'apprenant : les apprenants qui font preuve de *surgénéralisation trompeuse* semblent avoir maîtrisé alors qu'ils omettent une contrainte d'application critique, si bien que les systèmes adaptatifs peuvent interrompre prématurément la pratique. Les modèles de l'apprenant devraient évaluer la compréhension conditionnelle — y compris le fait de savoir si l'apprenant sait quand s'abstenir d'agir — et pas seulement l'exactitude de l'action.

Les idées fausses cachées révèlent le même échec par l'autre versant : [[correct-answer-trap-misconceptions|Imran et Bulathwela (2026)]] ont constaté qu'un classificateur affiné repérait 57.4% des réponses correctes obtenues par un raisonnement erroné, et qu'à une prévalence de 1.6%, même un modèle de raisonnement précis à 83.6% laissait 8 fausses alertes par détection — ainsi, les signaux de maîtrise fondés sur l'exactitude sont à la fois incomplets et coûteux à réparer.

**La manière dont un modèle est validé est elle-même une question de validité.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan et Carvalho (2025)]] montrent que des modèles de l'apprenant populaires (BKT, BKT avec oubli, AFM) semblent capter l'apprentissage humain seulement lorsqu'ils sont ajustés rétroactivement sur un jeu de données complet couvrant plusieurs sessions ; sous une validation croisée fondée sur le temps (en avance) — prédisant une session future à partir des sessions antérieures, comme ces modèles sont réellement déployés — ils surestiment la performance, manquent l'[[retrieval-spacing-interleaving|effet d'espacement]] et classent mal les conditions de pratique. Les modèles augmentés de l'oubli et ceux sans oubli ayant performé à peu près également d'une session à l'autre, les auteurs concluent que l'oubli est souvent absorbé dans les paramètres de l'apprenant plutôt que véritablement représenté. La leçon pour la famille est qu'une représentation fidèle de l'apprenant doit être validée de la manière dont elle est utilisée — et que confondre la performance du moment avec la rétention à long terme produit des modèles qui semblent exacts tout en dénaturant les apprenants.

## La modélisation à l'ère des LLM

Des avancées récentes utilisent les [[llm|LLM]] pour une modélisation plus riche. Le [[xie-hillm-cd-2026|cadre HiLLM-CD]] représente les étudiants sous forme d'arbres de compétence ; les [[multimodal-knowledge-graph-educational-reasoning|approches multimodales]] construisent des représentations de connaissances fondées sur des preuves à partir de sources de données diverses ; [[inside-llm-student-simulator-reasoning-2026|les LLM simulent désormais des étudiants avec raisonnement]]. Les LLM rendent possible la construction automatisée de modèles à partir de textes éducatifs et une [[simulating-students|simulation d'étudiants]] de plus haute fidélité, réduisant la dépendance à l'annotation par des experts — tout en aiguisant les préoccupations de fidélité évoquées plus haut. Les signaux du modèle de l'apprenant *fondent* aussi le raisonnement des LLM : [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] ont constaté que fournir à GPT-4 l'estimation de compétence issue du [[knowledge-tracing|traçage bayésien]] d'un étudiant, accompagnée de la structure de l'interface du tuteur, améliorait fortement son diagnostic d'erreur (l'identification des erreurs logiques passant de 40% à 81% sur la factorisation ; environ 87.8% dans l'ensemble), tandis que les problèmes en plusieurs étapes et les réponses contenant plusieurs erreurs demeuraient les cas les plus faibles — preuve que coupler un modèle formel de l'apprenant à un LLM renforce, mais ne garantit pas, une inférence solide sur un étudiant réel. [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] montre à quoi ressemble une version persistante de ce couplage : la maîtrise et les idées fausses extraites sont stockées par couple (apprenant, matière) plutôt que sous forme de journaux par session, si bien que les preuves s'accumulent d'une session à l'autre, et la mémoire est écrite par une fonction d'observation notée par un LLM tout en restant inspectable par l'apprenant grâce à des barres de maîtrise et à une étiquette désignant ce que chaque question générée a été choisie pour sonder. Ses témoins rendent explicite l'étape d'écriture — la mémoire étant lue mais n'étant plus mise à jour, la part des items visant une compétence réellement faible est tombée de 0.72 à 0.57 — et il préserve intacte la réserve formulée sur cette page : la maîtrise stockée est la croyance de l'agent sur l'apprenant, non une mesure de ses connaissances.

Le langage peut remplacer les plongements d'identifiants comme représentation : PLCD construit des schémas de concepts et des graphes de processus d'exercice dérivés de LLM comme a priori, atteignant 83.51% d'exactitude sur XES3G5M, avec les gains les plus importants au démarrage à froid — 4.60 points d'ACC par rapport à KCD pour les nouveaux concepts et 4.00 pour les nouveaux exercices — là où les modèles fondés sur les identifiants n'ont pas d'historique ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

La qualité d'un simulateur se décompose en deux axes : un pipeline « constituer un réservoir puis spécialiser » qui entraîne des comportements partagés avant un adaptateur par étudiant a atteint une fidélité comportementale de 0.51 et une réactivité au guidage de 0.91 aux échecs, contre 0.23 et 0.72 pour une référence de jeu de rôle de pointe, montrant qu'un simulateur doit à la fois correspondre à un étudiant et être pilotable ([[studentsim-llm-student-simulators|Yang et al. (2026)]]).

Les scores de risque peuvent être exacts tout en étant non étayés : [[at-risk-students-ml-prediction|Gheisari et Salarian (2026)]] ont atteint 99% d'exactitude dans la prédiction de l'abandon à partir des dossiers d'inscription et de performance, mais sur les 1,027 données nettoyées d'une seule institution, sans validation externe, sans intervention testée, et en renvoyant les audits d'équité à des travaux futurs — le score soutient un triage, non un verdict sur un étudiant.

Un modèle de l'apprenant qui ne fait que prédire le risque ne suffit pas à l'aide à la décision : le couplage d'un modèle de risque calibré avec un recours par programmation en nombres entiers sur des actions discrètes — validé au regard de contraintes de calendrier, de budget, d'immuabilité et de disponibilité — a produit des plans d'intervention compacts là où l'optimisation seule acceptait des plans inexécutables ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge (2026)]]).

Un estimateur en boîte noire peut aussi être distillé en un petit modèle auto-explicatif : un pipeline en deux étapes transforme un estimateur ajusté et son interprétation a posteriori en un « mentoré » de 2 milliards de paramètres qui renvoie une estimation accompagnée d'une narration, audité pour sa fidélité plutôt que pour sa fluidité ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## Connexions avec d'autres concepts

La modélisation de l'apprenant et l'enseignement adaptatif alimentent les [[learning-analytics|analytiques de l'apprentissage]] ([[visualization|tableaux de bord]] et interventions), l'[[formative-assessment|évaluation formative]] (évaluation fondée sur les analytiques) et la [[feedback|rétroaction]] (ce que le système dit à l'apprenant). Ils se relient à l'[[ai-education|IA en éducation]] comme fil central de l'IA pour l'éducation.

## Concepts liés

- [[learners]] — Les apprenants : le parapluie des concepts du côté de l'apprenant
- [[explainable-ai]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[llm]]
- [[higher-ed]]
- [[ai-education]]
- [[simulating-students]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — les modèles sous-tendant la prédiction du risque et le ciblage du soutien

## Articles liés

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Surgénéralisation trompeuse : l'adaptation fondée sur la maîtrise peut interrompre la pratique avant que les apprenants ne sachent quand s'abstenir d'agir (An, McLaren & Stamper 2026)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[yasir-llm-tutoring-agents-2026]] — Les tuteurs LLM rejettent à l'excès les variantes valides et valident à l'excès les réponses incorrectes (Yasir et al. 2026)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[at-risk-students-ml-prediction]]
- [[correct-answer-trap-misconceptions]]
- [[cross-subject-validity-delayed-start]]
- [[edumirror-educational-social-dynamics]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[xie-hillm-cd-2026]]
- [[inside-llm-student-simulator-reasoning-2026]]
- [[trace-course-grade-prediction-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[studentsim-llm-student-simulators]] — StudentSim: Training LLM-based Student Simulators
- [[predicting-attrition-competitive-programming]] — Predicting Student Attrition in Competitive Programming
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Traçage des connaissances fondé sur les acquis et cartographie d'affinité
- [[an-goel-self-directed-modeling-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Beyond ID Embeddings: Process-Grounded Language Modeling for Cognitive Diagnosis
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — état compact de l'apprenant et traceur calibré comme environnement de recommandation
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[ai-game-based-learning-systematic-review-2026]] — L'évaluation furtive a atteint des AUC de 0.848–0.913, mais les audits de biais étaient quasi absents sur 55 études
