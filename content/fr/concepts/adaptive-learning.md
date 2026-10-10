---
title: "Apprentissage adaptatif"
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T02:17:25-04:00"
type: concept
pedagogy: [scaffolding]
technology: [cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
confidence: high
translation_of: concepts/adaptive-learning
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

> **L'apprentissage adaptatif** — des systèmes éducatifs pilotés par l'IA qui ajustent le contenu, le rythme et les stratégies d'enseignement en fonction des caractéristiques et des performances individuelles de l'apprenant. L'apprentissage adaptatif est l'objectif opérationnel d'une grande part de la [[research-methods-aied|recherche]] en [[ai-education|IA en éducation]] : utiliser des [[student-modeling|modèles de l'apprenant]] pour personnaliser l'enseignement.

## Questions à examiner

- Les termes « adaptatif », « personnalisé », « individualisé » et « sur mesure » sont souvent employés indifféremment — mais la recherche suggère qu'ils ne désignent pas la même chose. Que supposez-vous que chacun de ces mots signifie, et en quoi ces suppositions pourraient-elles être fausses ?
- Un système adaptatif ajuste le contenu et la difficulté d'après un modèle de ce que vous savez. Que pourrait-il se passer de fâcheux si ce modèle repose sur des signaux superficiels ou peu fiables de votre apprentissage ?
- Un constat clé est que les systèmes qui infèrent la maîtrise à partir des réponses correctes peuvent interrompre l'entraînement trop tôt — avant que vous n'appreniez quand vous abstenir. Pouvez-vous penser à une compétence pour laquelle être « correct » à répétition vous a néanmoins laissé mal préparé à une situation réelle ?
- Une sur-adaptation peut supprimer la lutte productive dont les étudiants ont besoin pour apprendre en profondeur. Si l'IA rend les choses plus faciles dès que vous butez, que perd exactement l'apprenant ?
- La méta-analyse suggère que c'est le mécanisme d'adaptation — et non la génération d'outils particulière — qui produit les [[learning-gains|gains d'apprentissage]]. Si le « comment » importe plus que « quel outil », que devriez-vous rechercher en choisissant un logiciel adaptatif ?
- Les tuteurs fondés sur les LLM peuvent désormais adapter le langage et le style d'explication, et pas seulement la difficulté. Quand la personnalisation de la manière dont une chose est expliquée aide-t-elle l'apprentissage, et quand peut-elle saper discrètement l'autonomie propre de l'apprenant ?

## Introduction

### Mécanismes fondamentaux

- **Boucle mesurer-modéliser-adapter :** le [[knowledge-tracing|traçage des connaissances]] estime ce que l'étudiant sait, la [[student-modeling|modélisation de l'apprenant]] représente l'apprenant, et le système adapte la difficulté, le contenu et la [[feedback|rétroaction]] en conséquence.
- **Personnalisation à grande échelle :** les systèmes d'[[personalized-learning|apprentissage personnalisé]] recourent à des algorithmes adaptatifs pour servir des parcours d'apprentissage uniques à chaque étudiant. [[deeptutor]] et les [[ai-powered-personalized-learning-elementary-fractions-2026|tuteurs de fractions pour l'élémentaire]] illustrent la personnalisation adaptative en pratique.
- **Séquençage du contenu :** le [[adaptive-pretesting-retention|prétest adaptatif]] et les [[adapt-adaptive-lesson-plan-transformer|transformateurs de plans de cours]] optimisent l'ordre et le type de contenu présenté.
- **Intégration aux STI :** les [[intelligent-tutoring|systèmes de tutorat intelligent]] constituent la plateforme canonique de l'apprentissage adaptatif, combinant diagnostic et adaptation.
- **Profilage et diagnostic pilotés par l'AutoML :** les modèles éducatifs traditionnels peinent à traiter des données de comportement d'apprentissage hétérogènes et multi-sources, ce qui limite le profilage des apprenants et le développement de modèles de diagnostic. Un cadre de recherche neuronale cognitive personnalisée piloté par l'[[reinforcement-learning|apprentissage automatique]] intègre des données éducatives [[multimodal|multimodales]] à des méthodes hétérogènes, produisant des modèles de diagnostic adaptés à des profils d'apprenants hétérogènes et permettant une analyse dynamique plutôt que statique des processus d'apprentissage.

### Données probantes sur l'efficacité

La base de connaissances documente des données probantes contrastées : les systèmes adaptatifs améliorent les résultats lorsque l'adaptation est fondée sur des [[student-modeling|modèles de l'apprenant]] fiables, mais une adaptation mal calibrée peut nuire à l'apprentissage. La [[personalized-learning|recherche sur la personnalisation]] distingue l'adaptation efficace de la personnalisation superficielle. Des [[khalifeh-redefining-personalized-learning-ai-2026|revues systématiques]] constatent que les apprentissages « adaptatif », « personnalisé », « individualisé » et « sur mesure » sont employés de façon incohérente — de sorte que les tailles d'effet dépendent fortement de la manière dont l'adaptation est opérationnalisée, et le champ appelle à un cadre unifié.

Une revue PRISMA 2020, qui a passé au crible 959 enregistrements pour retenir 22 interventions dans l'enseignement supérieur, compte les parcours adaptatifs et les systèmes de recommandation parmi les principales applications de l'IA, mais la plupart des études ont amélioré la pratique existante plutôt que de la transformer ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

**C'est l'ancrage pédagogique, et non la capacité technique, qui pilote l'adaptation.** Une revue de 15 ans portant sur 127 études de tutorat intelligent constate que la plupart des systèmes sont construits autour de ce que la technologie peut faire plutôt qu'autour d'un principe pédagogique énoncé, et situe le gain moyen des STI à environ 20%, contre jusqu'à 98% pour le tutorat humain ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

C'est l'adoption, et non le mécanisme d'adaptation, qui constituait la contrainte déterminante dans un essai contrôlé randomisé mené sur deux ans dans un district : la réduction de l'inscription à une seule étape a fait passer l'adoption dès la première session d'environ 45% à 83%, sur la seule base de changements de conception, et les gains en intention de traiter ont crû à mesure que l'adoption augmentait ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos et al. (2026)]]).


Une revue conforme à PRISMA de 44 études constate que la littérature sur l'engagement est biaisée vers l'engagement comportemental et la plus mince sur l'engagement agentique, et rend compte d'un effet de nouveauté — l'engagement déclinant dans le temps dans les études longitudinales portant sur ALEKS et W-Pal, une fois passée la nouveauté de l'outil ([[simon-student-engagement-adaptive-learning-2026|Simon, Zeng & Fryer (2026)]]).
### L'ère de l'IA : l'adaptation fondée sur les LLM et ses risques

L'[[generative-ai|IA générative]] a étendu ce que les systèmes adaptatifs peuvent faire — tuteurs conversationnels [[agentic-ai|agentiques]], contenus ancrés dans la [[rag|génération augmentée par la recherche documentaire]], et [[llm|tutorat]] piloté par les LLM adaptent non seulement la difficulté des problèmes, mais aussi le langage et le style d'explication (par exemple [[learnmate2-llm-adaptive-learning|LearnMate-2]], [[deeptutor]], le [[chudziak-ai-math-tutoring-platform|tutorat adaptatif multi-agents]]). Cependant, l'adaptation fondée sur les LLM introduit de nouveaux risques : sans [[student-modeling|modèles de l'apprenant]] fiables, l'adaptation peut reposer sur des signaux superficiels ; la sur-adaptation peut réduire la lutte productive dont les étudiants ont besoin (voir les [[desirable-difficulties|difficultés souhaitables]], le [[cognitive-offloading|délestage cognitif]]) ; et l'équilibre entre personnaliser et préserver l'[[agency|autonomie]] de l'apprenant est une question de conception ouverte (voir l'[[agentic-ai|IA agentique]]). Une variante de l'adaptation demandée par l'apprenant fonctionne sans aucun [[student-modeling|modèle de l'apprenant]] : dans le cours de deuxième cycle de Sidorkin (2026), les lectures ne s'ajustaient que lorsque les étudiants posaient des questions de suivi pour les recadrer, les approfondir, les simplifier ou les contextualiser, et les demandes orientées vers la compréhension produisaient de façon fiable un étayage plus dense (3.4x à 8.7x plus de marqueurs définitionnels que le texte de référence), ce qui explique pourquoi l'exigence d'au moins trois questions de suivi par lecture a transformé le matériel en interaction. Cela reporte aussi le fardeau de l'adaptation sur l'apprenant : l'adaptation n'a lieu ici que si l'étudiant sait quoi demander.

### Rapport avec l'apprentissage personnalisé et le tutorat intelligent

L'apprentissage adaptatif est fréquemment confondu avec l'[[personalized-learning|apprentissage personnalisé]], mais les deux diffèrent. **L'apprentissage adaptatif** est le *mécanisme* — l'ajustement en temps réel du contenu, du rythme et de la difficulté d'après un modèle de l'apprenant. **L'apprentissage personnalisé** est l'*objectif plus large* consistant à adapter toute l'expérience d'apprentissage à un individu, dont l'adaptation en temps réel constitue une mise en œuvre. Les systèmes adaptatifs sont le *moyen* canonique de la personnalisation. Le [[intelligent-tutoring|tutorat intelligent]] est la *plateforme* classique : les STI combinent le diagnostic (modélisation de l'apprenant, traçage des connaissances) à l'adaptation, et les tuteurs fondés sur les LLM s'adaptent de manière conversationnelle. Avec l'[[personalized-learning|apprentissage personnalisé]], l'apprentissage adaptatif est un membre du versant applicatif de la famille [[student-modeling|modélisation de l'apprenant et enseignement adaptatif]] — consommant les représentations de l'apprenant que produisent la [[student-modeling|modélisation de l'apprenant]], le [[knowledge-tracing|traçage des connaissances]] et le [[cognitive-diagnosis|diagnostic cognitif]].

### Données probantes de la recherche

- **Données probantes [[meta-analysis-systematic-review|méta-analytiques]] sur les outils adaptatifs et d'IA.** [[burneo-can-edtech-close-learning-gaps-2026|Une méta-analyse de la Banque mondiale]] portant sur 14 [[rct|essais contrôlés randomisés]] regroupe l'apprentissage assisté par ordinateur adaptatif, le tutorat intelligent et l'IA générative sur une échelle commune, et estime un gain d'apprentissage moyen d'environ 0.125 écart-type, sans différence significative entre les deux générations de technologie — la preuve que c'est le mécanisme d'adaptation, et non la génération d'outils particulière, qui produit les gains.
- **Algorithmes adaptatifs comparés dans des domaines dynamiques.** La [[graph-its-adaptive-algorithms-2026|recherche sur les STI fondés sur les graphes]] compare plusieurs algorithmes d'apprentissage adaptatif (dont la propagation bayésienne des connaissances et la logique floue intuitionniste) dans un cadre de représentation des connaissances fondé sur les graphes pour des programmes dynamiques.

- **L'apprentissage par renforcement comme mécanisme d'adaptation, cartographié empiriquement.** [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] synthétisent 89 études sur l'apprentissage par renforcement en éducation et constatent que l'adaptation se divise en mécanismes liés au contenu (séquençage pédagogique et planification du contenu, n = 53) et en mécanismes liés à l'accompagnement (indices, [[feedback|rétroaction]], sélection d'activités, n = 36) — l'apprentissage par renforcement montrant une supériorité statistiquement significative sur les lignes de base plus souvent pour l'adaptation liée à l'accompagnement que pour la planification du contenu. Ils recommandent l'apprentissage par renforcement sans modèle pour l'apprentissage adaptatif et mettent en garde : l'apprentissage par renforcement classique a surpassé l'apprentissage par renforcement profond dans les études examinées.
- **L'adaptabilité fondée sur la correction peut interrompre l'entraînement trop tôt.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren et Stamper (2026)]] ont constaté que les systèmes adaptatifs qui infèrent la maîtrise de la correction risquent de mettre fin à l'entraînement avant que les apprenants ne rencontrent des contextes où l'action apprise devrait être retenue — laissant une surgénéralisation trompeuse non détectée. Ils recommandent d'inclure des tâches de détection du « ne pas agir » avant que les règles d'arrêt fondées sur la maîtrise ne se déclenchent, afin que l'adaptation teste la compréhension conditionnelle (savoir quand retenir une action), et pas seulement la correction.
- **Une série de réussites n'est pas un apprentissage durable.** Dans une expérience de terrain menée auprès de 6,000 collégiens, une règle de maîtrise fondée sur trois bonnes réponses consécutives, soutenue par l'IA, a augmenté d'environ 28.7 points de pourcentage le niveau de réussite défini par la plateforme sans améliorer le résultat d'un test différé une semaine plus tard ; les métriques de maîtrise doivent donc être validées par rapport à un apprentissage différé plutôt que de s'y substituer ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos et al. (2026)]]).
- **Adapter le *type* d'engagement cognitif, et pas seulement la difficulté.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi et al. (2026)]] ont constaté que des politiques BKT et d'apprentissage par renforcement profond attribuant des exemples résolus guidés (actifs) ou bogués (constructifs) surpassaient toutes deux l'attribution aléatoire dans un tuteur de logique réunissant 113 étudiants (post-test 72.3 et 72.5 contre 65.7), le BKT servant le mieux les étudiants à faibles connaissances préalables et l'APR ceux à connaissances élevées.
- **Plus de rétroaction n'est pas une meilleure rétroaction.** Dans un cours de stochastique adaptatif de huit semaines (194 étudiants), la rétroaction directive, informative et transformative a été reçue différemment, et la rétroaction transformative a été associée à une surcharge cognitive plutôt qu'à une meilleure régulation — l'adaptativité doit correspondre à la phase et au besoin de l'apprenant, et non maximiser la densité de rétroaction ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh & Fromm (2026)]]).
- **Les profils d'engagement comme cibles d'adaptation.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] ont suivi 315 apprenants en ligne construisant 822 modèles dans VERA et ont classé leur engagement en profils d'observation, de construction et d'exploration, constatant que les apprenants tendent à progresser d'un comportement centré sur la construction vers une exploration plus complète et fondée sur les hypothèses, tandis que l'observation persiste à travers les phases. Ils soutiennent que la conception adaptative et personnalisée devrait reconnaître ces profils et cibler la rétroaction (par exemple en recommandant des modèles similaires ou en soutenant une compréhension conceptuelle plus profonde) pour faire passer les observateurs de surface vers une modélisation plus intégrative et de cycle complet.
- **Une mémoire qui est lue mais pas écrite n'est pas de l'adaptation.** Le contrôle à mémoire figée de CoLearn servait des items fixes tout en lisant encore le profil de l'apprenant, et la part des items visant une compétence réellement faible est tombée de 0.72 à 0.57, l'erreur finale de maîtrise devenant supérieure à celle de la condition adaptative ([[colearn-agentic-tutor-co-learning-loop-2026|He et al. (2026)]]).
- **Le gain venait du séquençage, et non d'un tuteur plus intelligent.** [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung et al. (2026)]] ont entraîné un tuteur personnalisé par apprentissage par renforcement guidé par les LLM et l'ont déployé dans un cours de Python de cinq mois réunissant dix [[k-12|lycées]] de Taipei, répartissant au hasard 770 étudiants entre des séquences de problèmes adaptatives et des séquences fixes allant du facile au difficile. Le séquençage adaptatif a élevé de 0.156 écart-type le score à l'[[summative-assessment|examen final]] en présentiel et sans assistance (0.150 écart-type avec variables de contrôle) — tandis que l'analyse de médiation attribuait l'effet presque entièrement à l'engagement (0.185 écart-type via le temps sur la tâche, 0.149 écart-type via les tentatives) plutôt qu'à un matériel plus facile ou plus difficile, les gains étant les plus forts pour les débutants et les établissements de rang inférieur. Le levier adaptatif était l'ordre de la pratique, et non la qualité de la conversation.
- **Garder les décisions de maîtrise fondées sur des règles et cantonner l'apprentissage automatique au suivi.** Un programme de STIM adaptatif de huit semaines destiné à 30 élèves de sixième gouvernait les parcours par une maîtrise fondée sur des règles, tandis que l'apprentissage automatique suivait la performance, ce qui gardait l'adaptation auditable ; mais en l'absence de prétest et avec une seule classe par condition, ses gains constituent un modèle pilote à valider localement ([[bin-bakheet-adaptive-ai-stem-deep-learning-2026|Bin Bakheet et al., 2026]]).
- **Adapter l'attribut critique, et non la moyenne faible.** La modélisation par transitions des états de connaissances a classé la pensée analytique comme la plus difficile à acquérir et la plus facile à perdre — probabilité de transition ascendante la plus faible, 0.31, et probabilité de transition descendante la plus élevée, 0.22-0.23 — faisant du réentraînement de l'attribut signalé une cible d'adaptation plus fine que la maîtrise globale ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).
- **L'adaptation à partir des séquences de processus, et non des scores agrégés.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela & Cukurova (2026)]] ont dérivé des règles d'étayage en minant l'*ordre* des tours de parole de 65 étudiants en triades, faisant passer l'apprentissage adaptatif de mesures comportementales ou de performance agrégées vers des séquences de processus individuelles ; l'étayage maximal a augmenté le comportement centré sur la tâche, mais aussi le guidage scripté, et la conception reste non testée.

## Concepts liés

- [[online-teaching-and-learning]] — Enseignement et apprentissage en ligne
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[learning-analytics]]
- [[higher-ed]]
- [[k-12]]
- [[formative-assessment]]
- [[behaviorism]]
- [[ai-technologies]] — Parapluie : technologies et techniques d'IA (modèles, entraînement de LLM, robotique, RAG, agentique)
- [[recommender-systems-and-learning-paths]]
## Articles liés
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Surgénéralisation trompeuse : la maîtrise adaptative peut interrompre l'entraînement avant que les apprenants ne sachent quand retenir une action (An, McLaren & Stamper 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — Le tutorat par IA n'est pas un monolithe : ce que nous savons réellement (note du Stanford SCALE/NSSA)
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[simon-student-engagement-adaptive-learning-2026]] — Revue systématique de l'engagement étudiant dans les plateformes d'apprentissage adaptatif
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutorat virtuel avec apprentissage assisté par ordinateur : une expérience sur l'adoption et l'apprentissage
- [[making-ai-tutoring-productive-mastery-math-2026]] — Rendre le tutorat par IA productif : la pratique des mathématiques fondée sur la maîtrise
- [[chudziak-ai-math-tutoring-platform]] — Tutorat de mathématiques adaptatif et personnalisé multi-agents (Chudziak & Kostka 2025)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redéfinir l'apprentissage personnalisé : revue systématique
- [[deeptutor]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]] — IA de tutorat calibrée sur la disponibilité de l'apprenant par opposition aux agents conversationnels généraux
- [[context-based-ai-secondary-chemistry-2026]] — Enseignement 7E contextualisé enrichi par l'IA en chimie au secondaire
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Programme de STIM adaptatif fondé sur l'IA pour un apprentissage en profondeur
- [[graph-its-adaptive-algorithms-2026]] — Tutorat intelligent fondé sur les graphes pour des domaines dynamiques (2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnostic cognitif bayésien pour des parcours d'apprentissage personnalisés
- [[adaptive-scaffolding-cognitive-engagement-its]] — Étayage ICAP adaptatif dans un STI (BKT contre APR)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Méta-analyse regroupant outils adaptatifs et outils enrichis par l'IA sur 14 essais contrôlés randomisés
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Revue systématique : les parcours adaptatifs parmi les principaux cas d'usage de l'intégration de l'IA dans l'enseignement supérieur
- [[an-goel-self-directed-modeling-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Le séquençage adaptatif des problèmes bat le séquençage fixe : +0.156 écart-type à un examen sans assistance, médiatisé par l'engagement plutôt que par la difficulté (Chung et al. 2026)
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn : un tuteur agentique qui apprend à connaître son apprenant dans une boucle d'apprentissage conjoint humain-IA
