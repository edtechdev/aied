---
title: "Premier cycle universitaire"
created: "2026-11-15T11:52:55-05:00"
updated: "2026-11-15T11:52:55-05:00"
type: concept
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
assessment: [formative-assessment, assessment, learning-gains]
technology: [generative-ai, conversational-ai, intelligent-tutoring, llm]
level: [undergraduate, higher ed]
confidence: medium
translation_of: concepts/undergraduate-education
source_updated: "2026-11-15T06:35:59-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-15"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Synthèse :** Le premier cycle universitaire est le lieu où l'IA rencontre les plus grands effectifs et l'[[assessment|évaluation]] la plus standardisée : des cours d'introduction de première et deuxième année où un enseignant forme plusieurs centaines d'étudiants selon une grille commune. Les essais à ce niveau se divisent selon la conception plutôt que selon le modèle. Un tuteur construit à partir de la pédagogie propre à un cours a battu l'[[active-learning|apprentissage actif]] en classe, tandis qu'un assistant de cours bien ancré, déployé sans intégration pédagogique, a fait baisser les notes et la participation. Les données les plus solides portent sur la [[feedback|rétroaction]] à grande échelle, les [[help-seeking|dispositifs d'aide]] [[scaffolding|d'étayage]], le matériel d'étude vérifié et les relances qui déplacent les échéances administratives ; les plus faibles sur l'idée qu'un assistant général accroît ce que les étudiants savent faire sans aide.

## Questions à examiner

- Si un tuteur augmente de deux points et demi les notes de devoirs mais ne déplace pas l'examen, qu'a acheté le cours ?
- Les notes ont baissé dans un cours où six étudiants sur sept n'ont jamais ouvert le [[conversational-ai|chatbot]]. Qu'a changé la seule disponibilité ?
- Qu'est-ce qui est le plus défendable dans un cours de 600 étudiants : détecter les travaux rédigés par l'IA, ou changer ce que le travail doit contenir ?
- Que peut supposer un cours de première année sur les habitudes d'IA que les étudiants ont acquises au secondaire ?
- Quand l'unité de conception est une cohorte de 900 plutôt qu'un apprenant, quelles affirmations de [[personalized-learning|personnalisation]] survivent ?

## Introduction

Les études de premier cycle sont des cursus de bachelor : cours magistraux, sections, laboratoires et cours de service, évalués en continu et cumulés en un diplôme. Les étudiants sont des adultes qui choisissent leur temps d'étude, enseignés en cohortes bien plus grandes que n'importe quelle classe scolaire. Ils ne sont pas encore chercheurs, et aucun directeur de recherche n'est chargé de former leur jugement, ce qui sépare ce cycle des études supérieures.

L'échelle est la contrainte déterminante. Un cours d'introduction en [[physics-education|physique]], en économie ou en [[cs-education|programmation]] peut inscrire plusieurs centaines à quelques milliers d'étudiants, avec des assistants d'enseignement qui corrigent chacun des dizaines de dissertations ou de preuves. Le volume de rétroaction, la disponibilité de l'aide et le coût de remarquer un étudiant en difficulté sont les problèmes de conception récurrents. La question qui décide si l'IA a aidé n'est pas de savoir si le système a produit une réponse, mais ce que les étudiants ont encore fait lorsqu'il l'a produite.

## Ce que les données probantes mesurent à ce niveau

Les essais au premier cycle sont faciles à compter et difficiles à comparer. Le résultat est généralement une note de cours, un test rédigé par l'enseignant ou une grille appliquée à une production.

- **L'effet agrégé est positif et dépend de la durée.** Trente-cinq études expérimentales et quasi expérimentales couvrant 175 tailles d'effet ont produit g = 0.53 pour les étudiants de premier cycle et g = 0.46 pour la [[learning-gains|performance académique]] ([[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]]). L'effet académique est passé de g = 5.07 pour les interventions de quatre semaines ou moins à g = 0.01 au-delà de douze semaines, avec une hétérogénéité supérieure à 96 %.

- **La [[educational-measurement|mesure]] différée est l'exception.** Un test surprise 45 jours après un cours de commerce de 120 étudiants est l'une des rares mesures de rétention ici : les étudiants assistés par l'IA ont obtenu 57.5 % contre 68.5 %, d = 0.68, après avoir étudié 3.2 heures contre 5.8 ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]]).

- **La production notée est l'unité de preuve habituelle.** Cela importe pour la [[assessment-validity|validité de l'évaluation]] : une dissertation notée par grille ou une suite de tests réussie peut s'améliorer sans que la capacité que le cours existe pour construire progresse.

## Tutorat et aide en grands effectifs

Le résultat positif le plus marquant vient d'un tuteur construit à partir de la pédagogie propre à un cours, non d'un assistant général.

- **Un tuteur conçu a battu l'apprentissage actif du cours lui-même.** Dans Physical Sciences 2 à Harvard, 194 étudiants ont suivi les deux mêmes leçons deux fois, une en classe et une avec un tuteur sur mesure. Le post-test médian était de 4.5 contre 3.5, le temps sur la tâche de 49 minutes contre environ 60, et l'effet modélisé de 0.63 ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025]]). Le tuteur encodait sept pratiques pédagogiques et utilisait des solutions rédigées par l'enseignant.

- **La même technologie sans intégration pédagogique a perdu du terrain.** Un assistant GPT-4o ancré dans le cours a atteint 2,379 étudiants auprès de 30 [[teacher-role|enseignants]]. Dans des sections du même cours, les notes finales ont baissé de 4.12 points (0.37 SD) et les participations enregistrées d'environ 0.90 SD ; 15 % des étudiants l'ont utilisé, pour environ quatre sessions ([[liu-course-integrated-ai-tutoring-rct-2026]]). Les étudiants de première génération ont perdu 0.50 SD contre 0.22 pour leurs pairs.

- **Un chatbot de recherche documentaire sur mesure peut ne rien produire.** Dans un cours de marketing de 454 étudiants randomisé à l'intérieur des sections, aucun effet groupe par temps n'est apparu sur l'intérêt, l'[[self-efficacy|auto-efficacité]], l'engagement ou le score au test. Les étudiants se connectaient 0.89 fois par semaine et évaluaient leur plaisir à 80/100 ([[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]]).

- **La conception de l'interaction déplace les résultats plus que le choix du modèle.** HelpCoach n'intervenait que sur les questions vagues : 57.3 % des premiers jets posaient une question spécifique contre 40.5 %, et la rétention une semaine plus tard était de 1.9 contre 0.3 sur 6 ([[helpcoach-ai-help-seeking-scaffolding-2026]]).

## L'écart entre le score et l'apprentissage

Quatre dispositifs séparent le score à la tâche assistée de ce que les étudiants pouvaient faire sans aide, et ils s'accordent sur la direction.

- **CS1 : les scores d'exercices montaient, les connaissances conceptuelles non.** Dans un cours de Java de 275 étudiants, les utilisateurs de [[generative-ai|ChatGPT]] obtenaient 71.84 % à l'exercice contre 29.85 % pour les étudiants recourant à des ressources web ordinaires, tandis que les gains de connaissances avant-après étaient de 0.71, 0.85 et 0.83 point sans interaction temps par groupe ([[bassner-performance-learning-dissociation-ai-programming-2026]]).

- **Cours de preuves : les gains aux devoirs n'atteignaient pas l'examen.** À Carnegie Mellon, 153 étudiants disposant d'un chatbot et d'une interface de rétroaction sur les preuves ont obtenu 2.56 points de plus aux devoirs. L'examen suivant, passé sans IA, ne montrait aucune différence significative, et chaque tranche de 100 messages supplémentaires au chatbot était associée à 3.02 points de moins à l'examen suivant ([[ai-proof-learning-cognitive-offloading-2026]]).

- **Rétroaction : meilleures révisions, post-test stable.** Dans un cours d'économie de 354 étudiants, la rétroaction médiée par l'IA a amélioré la qualité des révisions à d = 0.50 sur 1,366 dissertations, et le post-test en aveugle était de 0.59 contre 0.56 ([[lu-ai-mediated-feedback-feedbackwriter-rct-2026]]).

- **Le schéma d'usage décidait si le gain survivait au retrait.** Un chatbot standard a élevé de 6.7 points (0.27 SD) les scores à un test sans aide chez 211 étudiants de Middlebury, et cet effet a persisté. Les 32 % qui l'utilisaient pour automatiser le travail ont gagné 0.54 SD sur les dissertations pendant sa disponibilité et 0.02 SD une fois retiré ([[contractor-learning-impact-generative-ai-2026]]).

Le mécanisme habituellement invoqué est le [[cognitive-offloading|délestage cognitif]] : l'outil exécute le processus que la tâche était censée susciter. Ce qui suit est un ordonnancement plutôt qu'une interdiction — une tentative d'abord, l'aide ensuite, et un jugement noté sans l'outil.

## Ce que les étudiants déclarent sur eux-mêmes

Les enquêtes à ce niveau demandent aux étudiants ce qu'ils ont gagné, et leurs réponses s'accordent mal avec ce qu'ils disent avoir fait. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] ont interrogé 1,477 répondants dans le Sonora, au Mexique, dont 765 étudiants universitaires. Leur indice d'engagement repose sur trois comportements déclarés — lire, modifier et ajouter ses propres idées — et il n'a que très peu bougé avec une seule auto-évaluation de l'apprentissage sur 0–10, à une corrélation agrégée de 0.052. Les étudiants universitaires utilisaient ChatGPT plus que les lycéens et évaluaient leur apprentissage à peine plus haut. Les auteurs lisent ce résultat comme un avertissement sur la [[assessment-validity|validité de l'évaluation]] plutôt que comme un verdict sur l'apprentissage, puisque aucun résultat n'a été mesuré.

Lorsque les prédicteurs sont eux aussi auto-déclarés, un modèle décrit un état d'esprit plus qu'un mécanisme. [[kumar-chatgpt-academic-assignments-2025|Kumar et al. (2025)]] ont modélisé les chemins vers la performance auto-déclarée aux devoirs chez 304 étudiants de deux universités du Karnataka. La littératie numérique atteignait β = 0.393 et l'utilité perçue β = 0.259, tandis que la conscience éthique ne prédisait pas la performance (β = −0.006, p = .924). Performance, littératie et éthique étaient toutes auto-évaluées, si bien que le chemin le plus fort dit que les étudiants qui s'estiment numériquement lettrés estiment aussi leur travail plus haut. Le résultat nul sur l'éthique reste le plus utile : les auteurs le lisent comme une éthique qui façonne la conduite plutôt que les notes, et recommandent d'évaluer directement la divulgation et la citation.

La comparaison entre niveaux fait apparaître le premier cycle comme inégal plutôt qu'uniformément bas. [[zaripova-genai-self-regulation-neuroai-competence-2026|Zaripova et al. (2026)]] ont comparé 381 étudiants d'une université technique d'Ouzbékistan sur un sous-échantillon équilibré de 302. Les étudiants de premier cycle moyennaient 3.527 sur l'échelle d'éthique contre 4.627 pour les étudiants de troisième cycle, avec d = 1.47 pour l'éthique et l'autonomie académique. La charge cognitive perçue ne différait pas selon le niveau (p = .296). Les distributions portent le point de conception : les écarts-types des étudiants de troisième cycle sur l'éthique et l'autorégulation valaient environ un tiers de ceux du premier cycle, tandis que les étudiants de premier cycle atteignaient le minimum de l'échelle. Une cohorte de première année réunit donc des étudiants qui évaluent critiquement une production à côté d'étudiants qui déclarent presque rien de cette disposition.

Lus ensemble, ces enquêtes montrent ce que l'[[self-report-measures|auto-déclaration]] peut et ne peut pas établir. Elles établissent la distribution et le concept de soi — à quel point une cohorte est dispersée, comment les étudiants s'évaluent — et non l'apprentissage. Les données de performance ci-dessus sont ce qui sépare les deux, du test de rétention à 57.5 % contre 68.5 % au gain de 0.54 SD qui disparaît au retrait du chatbot. Les gains auto-déclarés et les prédicteurs auto-déclarés exigent donc la même prudence dans des directions opposées. Un gain mesuré par auto-évaluation peut être de la compétence ou de la confiance, et un prédicteur mesuré de la même façon peut suivre le résultat parce qu'un seul instrument a produit les deux. Le test est de savoir si un dispositif change quelque chose que l'étudiant fait : un brouillon révisé, une source vérifiée, un usage divulgué.

## Écriture, rétroaction et intégrité

L'écriture est le lieu où l'usage de l'IA est le plus visible et où le contrat d'évaluation est le plus faible, parce qu'une copie fluide ne porte aucune trace du processus qui la sous-tend.

- **La [[ai-feedback-quality|rétroaction par IA]] égalait les enseignants sur la dissertation et perdait sur la relation.** Chez 312 scripteurs de première année, la qualité de la dissertation révisée augmentait de d = 0.60 avec la rétroaction par IA et de d = 0.59 avec celle de l'enseignant, équivalentes dans une marge fixée d'avance. La [[motivation|motivation intrinsèque]] était de 4.90 contre 5.16, un écart de d = 0.31 médié par le sentiment d'appartenance perçu ([[liu-ai-generated-teacher-feedback-writing-motivation-rct-2026]]).

- **Les exigences de processus ont élevé l'adoption sans entamer la qualité.** Dans un cours d'informatique de première année d'environ 570 étudiants, l'adoption volontaire est restée près de deux tiers jusqu'à ce qu'un flux « brouillon avant l'IA » avec une [[reflection|réflexion]] notée et un formulaire de divulgation la porte à 93 %. L'usage de l'IA ne prédisait pas la qualité de la dissertation une fois l'écriture antérieure contrôlée ([[shakil-scaffolding-genai-ethical-essay-2026]]).

- **La sortie d'un détecteur sert de triage, non de jugement.** Argus a noté six sessions d'un cours CS2 de Purdue : score H moyen de 1.1 en 2020 contre 11.9 en 2026, et 45.7 % des 584 étudiants ont été signalés après examen manuel. Les étudiants signalés moyennaient 61.9 % aux examens surveillés contre 73.5 %, pour une médiane de 1.5 minute de relecture par étudiant ([[argus-academic-integrity-genai-2026]]).

- **L'erreur des détecteurs disqualifie l'adjudication.** Sept détecteurs appliqués à 91 dissertations TOEFL écrites par des locuteurs non natifs de l'anglais moyennaient un taux de faux positifs de 61.22 %, et 97 % étaient signalées par au moins un ([[ragab-ai-integrity-verification-model-2026]]). Ce qui suit est une évaluation supervisée des compétences aux points de progression, déplaçant la charge vers la politique d'[[academic-integrity|intégrité académique]] plutôt que vers le logiciel.

## La première année : transition, accompagnement et soutien

Les étudiants de première année arrivent avec des habitudes formées à l'école et peu de légitimité pour questionner une réponse plausible. Les outils qui leur sont destinés font surtout un travail administratif.

- **Les habitudes arrivent avant le scepticisme.** Chez 1,598 étudiants de 12 à 25 ans, l'usage déclaré est passé de 1.24 à 1.77 sur une échelle de 0 à 4 entre 12 et 17 ans, tandis que la fiabilité jugée ne bougeait pas. À l'université, l'usage s'est aplati et déplacé vers la traduction ; une forte prudence sur les tâches de recherche atteignait 23.3 % en quatrième année contre 10.1 % en première ([[cuenca-rodriguez-genai-use-caution-trajectories-2026]]).

- **Le matériel vérifié a aidé les étudiants qui en avaient besoin.** Dans un cours d'économie de première année, 170 étudiants ayant accès à des podcasts et des guides d'étude générés par l'IA et vérifiés par un assistant d'enseignement ont obtenu 2.34 points de plus sur un examen de 50 points. Les trois quarts de ce gain se situaient dans le quintile inférieur, la part sous 60 % baissait de 24.7 points, et la vérification coûtait 1.8 minute de personnel par étudiant ([[verified-study-materials-learning-gains-2026]]).

- **La relance d'accompagnement déplace les échéances, pas les notes.** Un chatbot textuel dans deux grands [[online-teaching-and-learning|cours en ligne]] a augmenté de 4 points la part obtenant A ou B et de 2 points la participation aux tutorats, sur 2,483 étudiants ([[chatbot-outreach-course-performance-2026]]). À 8,708 étudiants sur huit semestres, un service similaire a déplacé l'inscription de 34 points et laissé la moyenne générale et la persistance inchangées ([[mata-sustaining-ai-enabled-student-support-2026]]).

- **Les modèles d'alerte précoce relèvent de l'accompagnement, non de la discipline.** Les traces LMS des huit premières semaines de 52 étudiants en programmation prédisaient les événements de risque ultérieurs en examen à AUC 0.763 ; l'auteur présente le score comme une invite au soutien ([[akcapinar-ai-cheating-risk-lms-prediction-2026]]).

## Connexions

Le premier cycle se situe entre deux cycles étudiés avec des méthodes différentes. L'[[secondary-education|enseignement secondaire]] suppose une fréquentation obligatoire, un adulte qui médiatise l'outil et la classe comme unité de déploiement. L'enseignement au premier cycle suppose des apprenants qui fixent leurs propres horaires et traite le cours comme unité. L'[[higher-ed|enseignement supérieur]] est le cadre plus large — [[governance|gouvernance]], [[educational-development|développement pédagogique]], achats et programmes professionnels — et l'essentiel des données sur l'exactitude de la notation et la [[educational-policy-ai|politique institutionnelle]] s'y trouve. Les [[graduate-education|études de cycle supérieur]] déplacent l'unité de travail du cours vers la recherche supervisée, où la question devient le jugement. L'[[education-levels|ensemble des cycles]] présente la série complète.

## Implications pour la pratique

**Pour les enseignants**

- **Enseignez l'interaction, pas l'outil.** Une seule séance de 45 minutes sur ce que le modèle rate a fait passer la part de réponses fausses révisées correctement de 41.3 % à 69.3 % ([[structured-genai-training-physics-problem-solving-rct-2026]]).
- **Donnez du poids noté à la performance sans aide.** Tous les dispositifs qui séparaient les deux ont trouvé que la production assistée s'améliorait d'abord ; notez un travail sans IA.
- **Exigez une tentative avant l'aide.** L'interface « tentative d'abord » du cours de preuves de Carnegie Mellon n'entraînait aucune pénalité à l'examen ; le chatbot ouvert, si.

**Pour les responsables de cours et de programmes**

- **Traitez un chatbot de cours comme une intervention [[pedagogy|pédagogique]].** La même technologie n'a produit aucun effet mesurable dans un cours randomisé et a fait baisser les notes dans un autre.
- **Budgétez le travail de vérification.** Le matériel d'étude vérifié coûtait 1.8 minute de personnel par étudiant et produisait son plus grand gain chez les étudiants les plus faibles.
- **Surveillez les [[differential-effects-across-learner-groups|effets par sous-groupe]] avant de généraliser.** Le différentiel de première génération dans l'essai à 2,379 étudiants était le préjudice le plus important et invisible dans une moyenne de cours.

**Pour les chercheurs**

- **Rapportez un résultat sans aide et un résultat différé,** sinon un effet sur la production sera lu comme un effet sur l'apprentissage.
- **Pré-spécifiez une marge d'équivalence** lorsque vous affirmez que la rétroaction par IA vaut celle de l'enseignant.

## Idées fausses courantes

- **« Un chatbot de cours est une infrastructure neutre. »** Dans l'essai à 2,379 étudiants, 15 % des étudiants ont utilisé l'outil et les notes ont baissé de 0.37 SD, avec une participation en recul de 0.90 SD.
- **« Un score d'exercice plus élevé signifie plus d'apprentissage. »** Les utilisateurs de ChatGPT obtenaient 71.84 % contre 29.85 % à un exercice de CS1, tandis que les gains conceptuels étaient statistiquement identiques entre les bras.
- **« Les détecteurs peuvent trancher un cas d'intégrité. »** Sept détecteurs moyennaient 61.22 % de faux positifs sur des dissertations de locuteurs non natifs de l'anglais, et 97 % étaient signalées par au moins un.
- **« Un usage quotidien signifie que la [[ai-literacy|littératie en IA]] peut être supposée. »** L'usage déclaré montait chaque année du secondaire tandis que la fiabilité jugée restait plate ; la prudence sur les tâches de recherche n'apparaissait qu'en quatrième année.

## Concepts liés

- [[scaffolding]] — tuteurs qui donnent d'abord un indice contre moteurs de réponses
- [[help-seeking]] — poser une question spécifique est une compétence que l'interface peut enseigner
- [[feedback-literacy]] — ce que les étudiants font d'un commentaire décide s'il change le travail
- [[self-regulated-learning]] — planifier, surveiller et évaluer sans l'outil
- [[desirable-difficulties]] — la lutte qu'un assistant sans restriction supprime
- [[process-oriented-assessment]] — noter la trace plutôt que la production
- [[self-report-measures]] — ce qu'une enquête capture, et pourquoi ce n'est pas un résultat d'apprentissage
- [[ai-detection]] — pourquoi la sortie d'un classifieur est une preuve à examiner, non une conclusion
- [[learning-analytics]] — les traces LMS comme signal précoce pour la relance
- [[student-support-and-success]] — accompagnement, relance et limites du nudging
- [[equity-in-ai-education]] — qui gagne lorsque le matériel est vérifié avant diffusion
- [[writing-education]] — le contrat d'évaluation dans les cours fondés sur la dissertation
- [[stem-education]] — les séquences d'introduction en physique, informatique et ingénierie

## Articles liés

- [[guardrails-ai-teaching-assistants-programming-2026]] — dans un essai 2×2 avec 132 étudiants en Python, l'assistant socratique avec contexte complet était jugé le moins soutenant
- [[genai-use-changing-institutional-policy-physics-2026]] — la conception des tâches, non le niveau de politique, déterminait quelles fonctions de GenAI les étudiants utilisaient
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — 130 étudiants de premier cycle ; les notes prises sans ChatGPT étaient plus diverses et plus intégratives
- [[li-who-benefits-llms-prompt-engineering-equity-2026]] — la structure de l'invite, non l'accès, portait le gain ; un étayage en cinq parties élevait la qualité notée de 3.32 à 4.60
- [[llm-math-homework-offloading-traces-2026]] — 23 étudiants de première année ; 53 des 59 copies reproduisaient le produit du modèle ou ne le révisaient que dans la forme
- [[patrick-ai-higher-order-thinking-systematic-review-2025]] — 31 études et 1,585 étudiants ; l'intégrité est le point où les préoccupations des éducateurs et des étudiants divergent
- [[genai-reliance-human-agency-collaborative-learning-2026]] — 342 étudiants sur trois vagues ; la dépendance intra-individuelle prédisait une agentivité ultérieure plus faible
- [[genai-cognitive-offloading-learner-agency-review-2026]] — 123 études ; des schémas qui soutiennent l'agentivité et d'autres qui l'érodent coexistent
- [[ai-enabled-course-development-first-year-adjustment-2026]] — 551 étudiants de première année déclaraient une forte approbation à côté d'une tension auto-déclarée élevée
- [[thulin-chatbot-mental-health-students-2026]] — 15.4 % avaient utilisé un chatbot pour un motif de santé mentale, et cet usage suivait les obstacles à l'accès aux soins
- [[torres-peralta-perceived-learning-engagement-homework-2026]] — 1,477 répondants ; apprentissage auto-évalué et indice d'engagement à trois comportements corrélés à 0.052
- [[kumar-chatgpt-academic-assignments-2025]] — 304 étudiants ; la littératie numérique prédisait la performance auto-déclarée à β = 0.393, la conscience éthique à β = −0.006
- [[zaripova-genai-self-regulation-neuroai-competence-2026]] — les étudiants de premier cycle moyennaient 3.527 en éthique contre 4.627 pour ceux de troisième cycle, avec une dispersion bien plus large
