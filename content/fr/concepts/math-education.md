---
title: L'enseignement des mathématiques
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T03:05:32-04:00"
type: concept
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring]
discipline: [math education, stem education]
audience: [learners, instructors]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/math-education
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'enseignement des mathématiques** — l'étude de la manière dont les élèves apprennent les mathématiques et de la façon dont l'IA peut soutenir leur enseignement, couvrant le tutorat affectif, le diagnostic cognitique à partir de travaux manuscrits, l'évaluation du [[desirable-difficulties|effort productif]], les comportements de recherche d'aide, la collaboration enseignant-IA pour la génération visuelle et les trajectoires d'[[student-ai-interaction|interaction élève-IA]]. L'enseignement des mathématiques est le domaine de [[research-methods-aied|recherche]] [[discipline-specific-aied|spécifique à une discipline]] le plus actif de cette base de connaissances, avec 32 articles qui explorent collectivement comment l'IA peut soutenir — et parfois saper — l'apprentissage mathématique, des fractions élémentaires jusqu'à l'enseignement supérieur.

## Questions à examiner

- Les problèmes mathématiques ont des réponses clairement justes et exigent pourtant un raisonnement riche, ce qui explique pourquoi les mathématiques constituent un banc d'essai privilégié pour le tutorat par IA. Lorsque vous butez sur un problème de mathématiques, quel type d'aide vous aide réellement à apprendre — une réponse, un indice ou une question — et vers lequel l'IA risque-t-elle de s'orienter par défaut ?
- La recherche montre que les tuteurs IA choisissent souvent par défaut une aide excessive, poussant rarement à la rigueur même lorsque les élèves y sont prêts. Si vous concevez un tuteur, comment décidez-vous quand retenir l'aide pour préserver l'« effort productif » qui construit la compréhension ?
- La page montre que les élèves qui demandent des indices trop tôt ou les parcourent superficiellement ont tendance à apprendre moins. Vous est-il arrivé de solliciter un indice par impatience plutôt que par effort authentique ? Qu'est-ce que cela révèle sur la manière dont le soutien de l'IA peut saper plutôt qu'appuyer l'apprentissage ?
- Les systèmes de diagnostic cognitique par IA hallucinent parfois des preuves et attribuent excessivement les erreurs, et même les modèles les plus performants peinent à lire les travaux manuscrits réels des élèves. Quelle confiance accorderiez-vous à un tuteur qui diagnostique vos erreurs à partir de vos brouillons ?
- Les LLM inversent leurs réponses selon des formulations mathématiquement équivalentes du problème — le même problème présenté différemment change le résultat. Qu'est-ce que cela implique quant à l'utilisation de l'IA pour noter ou diagnostiquer la compréhension mathématique ?

## Introduction

L'enseignement des mathématiques est devenu un domaine primordial pour la recherche sur l'[[ai-education|IA en éducation]], parce que les problèmes mathématiques ont des réponses clairement justes et exigent pourtant un raisonnement riche — ce qui les rend idéaux pour étudier l'efficacité du tutorat, la validité de l'évaluation et la manière dont les outils d'IA interagissent avec la cognition et l'affect des élèves. Les articles de cette base de connaissances révèlent à la fois la promesse des tuteurs mathématiques par IA et des difficultés persistantes : un sur-étayage qui sape l'effort productif, l'hallucination dans le diagnostic cognitif, et la difficulté d'équilibrer assistance de l'IA et apprentissage authentique.

### Principaux thèmes de recherche

**Le tutorat mathématique par IA et l'étayage** forment le plus grand regroupement, avec quatre articles examinant comment les tuteurs IA soutiennent ou sapent l'apprentissage des mathématiques. **[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]** démontre que l'ajout d'une sensibilité affective — la détection des émotions de l'élève à partir du texte et des expressions faciales — produit un avantage de +23 points de taux de victoire en tutorat mathématique, reliant l'[[affective-computing|informatique affective]] à l'[[affective-tutoring|étayage affectif]]. **[[zhang-tutormoments-2026|TutorMoments]]** évalue 462 transcriptions annotées par des enseignants issues du tutorat mathématique des niveaux 2 à 7 et constate que les modèles frontière penchent par défaut vers une aide excessive, poussant rarement à la rigueur même lorsque les élèves y sont prêts — remettant directement en cause l'alignement entre l'utilité de l'IA et les principes d'[[scaffolding|étayage]]. **[[lak2026-hint-button-unproductive-use|An et al.]]** ont analysé 999 élèves sur trois semestres dans le tuteur intelligent *Decimal Point*, constatant que les demandes d'indices prématurées et la lecture superficielle des indices prédisent systématiquement une réduction des [[learning-gains|gains d'apprentissage]], même après contrôle du [[prior-knowledge|niveau de connaissances préalables]] — un résultat qui relie la [[help-seeking|recherche d'aide]] aux [[learning-analytics|analytiques d'apprentissage]].

**Le soutien socio-émotionnel peut acheter de l'efficience plutôt que de la réussite.** L'ajout d'une couche de pleine conscience par LLM à un tuteur d'algèbre de septième année a laissé l'apprentissage et l'anxiété mathématique d'état inchangés entre les groupes (42 élèves sur 252 analysés après perturbations), et pourtant les élèves en condition de pleine conscience ont atteint un apprentissage comparable en moins de temps et avec moins d'indices demandés ([[mindful-llm-math-tutoring-2026|Rief et al., 2026]]).

**Le [[cognitive-diagnosis|diagnostic cognitif]] et l'évaluation** explorent la capacité de l'IA à évaluer la pensée mathématique. [[razavi-powers-item-difficulty-llm-2026|Razavi et Powers (2026)]] ajoutent une étude de difficulté des items à grande échelle couvrant les mathématiques et la lecture : sur 5 170 items de la maternelle à la 5e année calibrés selon le modèle IRT de Rasch, les évaluations de difficulté en zero-shot de GPT-4o ont corrélé modérément à fortement avec les difficultés réelles (r = 0,83 en mathématiques, r = 0,81 en lecture) mais de manière inégale selon les niveaux, tandis qu'une approche fondée sur des caractéristiques (caractéristiques extraites par LLM puis introduites dans des modèles arborescents) a atteint des corrélations allant jusqu'à r = 0,87, le niveau scolaire et le nombre de mots étant les prédicteurs dominants. L'étude propose un flux de travail pratique en sept étapes pour les professionnels du test et met en garde contre une généralisation incertaine au-delà des mathématiques et de la lecture du primaire. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** a évalué 18 LLM sur 3 036 verdicts diagnostiques annotés par des enseignants issus de travaux mathématiques manuscrits, constatant que tous les modèles performent très mal (F1 < 0,5) avec une sur-attribution systématique et une hallucination des preuves — reliant le [[knowledge-tracing|suivi des connaissances]], le [[hallucination-risk|risque d'hallucination]] et les défis d'évaluation [[multimodal|multimodale]]. **[[representation-robustness-llm-math-problem-solving|Nath et al.]]** ont montré que la [[problem-solving|résolution de problèmes]] mathématiques par [[llm|LLM]] est très sensible à la représentation de surface — les modèles inversent la justesse selon des formulations équivalentes du problème — soulevant des inquiétudes de [[assessment-validity|validité de l'évaluation]] pour la notation mathématique par IA.

**[[automated-scoring-economics-math-items-nigeria-2026|Olaoye, Owolabi et Olaoye (2026)]]** proposent une voie contrastée d'évaluation des réponses mathématiques : leur logiciel de correction automatique de dissertations longues note des items mathématiques à réponse longue d'un examen d'économie de fin de secondaire par similarité sémantique avec le barème WAEC, sans entraînement sur des copies corrigées, et s'accorde avec 12 correcteurs humains à une corrélation intra-classe de 0,863 (mesures moyennes) avec des coefficients de Pearson allant de 0,604 à 0,864. L'accord se situe là où les notes sont les plus basses — le logiciel a attribué en moyenne 5,94 sur 20 contre 5,97 pour les correcteurs, chaque examinateur n'a corrigé que 84 des 1 008 copies, et les auteurs attribuent ces scores faibles à la méconnaissance par les candidats des réponses informatisées.

**L'[[student-engagement|engagement des élèves]] et la culture de l'IA** examinent la manière dont les élèves interagissent avec les outils mathématiques par IA. **[[epistemic-proactivity-math|Abdelghani et al.]]** ont retracé les trajectoires temporelles de l'interaction élève-IA dans l'apprentissage des mathématiques, identifiant un chemin de développement allant du [[prompt-engineering|prompting]] superficiel à la « proactivité épistémique » — une poursuite active et [[self-directed-learning|autodirigée]] de la compréhension conceptuelle. Cela relie la [[ai-literacy|littératie de l'IA]], la [[metacognition|métacognition]] et l'[[self-regulated-learning|apprentissage autorégulé]]. **[[ai-powered-personalized-learning-elementary-fractions-2026|Holman]]** a constaté que les plateformes adaptatives par IA amélioraient significativement la compréhension des fractions chez les élèves ayant des difficultés d'apprentissage des mathématiques, reliant l'[[personalized-learning|apprentissage personnalisé]] à l'[[adaptive-learning|apprentissage adaptatif]].

**Le soutien aux enseignants** explore les outils d'IA destinés aux enseignants de mathématiques. **Le jeu de rôle avec élève simulé** sert aussi la pratique enseignante : [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang et Zhang (2025)]] ont conçu *Student GPT*, un [[conversational-ai|chatbot]] personnalisé basé sur ChatGPT qui jouait le rôle d'un élève de collège porteur d'[[misconceptions|idées fausses]] courantes sur le raisonnement proportionnel, offrant aux futurs enseignants de mathématiques du secondaire un exercice à faible risque de diagnostic et de guidage de la pensée des élèves vers des solutions correctes — illustrant l'[[generative-ai|IA générative]] appliquée à la [[simulation|simulation]] comme complément aux plateformes coûteuses comme TeachLivE pour construire des connaissances du contenu pédagogique sur les idées fausses des élèves.

La seule synthèse à l'échelle du domaine de cette base de connaissances est une revue PRISMA 2021-2025 de 42 études dépouillées à partir de 922 notices (kappa de Cohen = 0,88), et elle ajoute une catégorie que les regroupements de la page ne comportent pas autrement : l'automatisation destinée aux enseignants, où MATH41 soutient la production rapide de tâches mathématiques pour des apprenants de niveaux différents et où le modèle hybride CognifyNet analyse les schémas d'activité des élèves afin que les éducateurs puissent détecter les difficultés émergentes de manière précoce. La même revue situe l'angle mort du domaine — avec l'éducation à 60 % et l'informatique à 28 % des domaines d'étude, une seule étude relevait de la psychologie, laissant l'impact émotionnel, la confiance et l'éthique comparativement sous-explorés — et insiste sur le fait que la capacité technique ne doit pas être assimilée à une efficacité en classe démontrée. ([[ai-mathematics-education-prisma-review-2026]])

**Les mathématiques dans l'enseignement supérieur** explorent l'impact de l'IA sur la pratique mathématique avancée. **[[genai-runaway-object-math-higher-ed|Bui et al.]]** ont appliqué la théorie [[sociocultural-learning|socioculturelle]] à l'[[generative-ai|IA générative]] en mathématiques universitaires, analysant l'IA comme un « objet emballé » qui transforme la pratique académique d'une manière qui dépasse les normes [[governance|institutionnelles]] et pédagogiques.

**Le tutorat par LLM et la [[learning-design|conception pédagogique]]** forment un regroupement émergent de deux études de 2026 qui affinent la base de preuves en enseignement des mathématiques. [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu et Sun (2026)]] ont développé un système de tutorat par LLM guidé par des règles pour les problèmes écrits de mathématiques du primaire, dont l'architecture à trois couches (diagnostic → sélection de l'intention → génération de réponse contrainte) a amélioré la cohérence interactionnelle et réduit la divulgation prématurée de réponses dans un pilote de classe de 5e année à 40 élèves — preuve que les domaines mathématiques procéduraux exigent des [[guardrails|garde-fous structurés par des règles]] sur un étayage LLM par ailleurs stochastique. [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao et Wang (2026)]] ont appliqué un modèle de classe intelligente à des étudiants en M.Ed. de mathématiques et constaté des gains statistiquement significatifs (p < .05) dans la conception d'objectifs pédagogiques selon les dimensions des programmes, des manuels et des conditions des élèves.

La conception des prompts est elle-même un levier mesurable : sur le banc d'essai MathDial, un « prompt de tuteur » socratique informé pédagogiquement a augmenté Success@N et fortement réduit Telling@N par rapport à un prompt de base, à la fois pour GPT-4o et GPT-4o-mini ([[chudziak-ai-math-tutoring-platform|Chudziak & Kostka (2025)]]).

**L'[[generative-ai|IA générative]] pour les tâches de modélisation mathématique** étend le volet génération au-delà des exercices routiniers. Une plateforme alimentée par l'IA, développée selon l'approche ADDIE, a utilisé la variation directe en mathématiques du secondaire comme sujet illustratif, répondant au manque de temps et de ressources des enseignants pour concevoir des tâches de modélisation de haute qualité : les outils existants produisent typiquement des problèmes écrits conventionnels ou des exercices routiniers, tandis que la plateforme visait à générer des ressources favorisant les compétences de modélisation mathématique, ancrées dans des principes de conception établis et la [[prompt-engineering|génération augmentée par récupération]].

- **Chaîne de pensée visuelle : le [[agency|fossé d'autonomie]] en géométrie.** GeoVAD-Bench diagnostique les aides visuelles intermédiaires plutôt que les réponses finales sur 600 problèmes de construction auxiliaire (200 faciles, 200 moyens, 200 difficiles), et trouve un schéma constant : fournir le diagramme auxiliaire de référence améliore modestement la précision (+3,3, +3,0, +7,0 points sur trois modèles), tandis que laisser le modèle construire lui-même sa ligne auxiliaire sur le chemin de la réponse correcte élargit le fossé de 10,0 à 13,5 points, deux modèles performant moins bien que lorsqu'ils n'avaient aucun raisonnement visuel du tout. Quatre catégories d'erreurs de processus ont rendu compte de 93,1 % et 89,7 % des échecs attribués. Pour l'enseignement de la [[problem-solving|résolution de problèmes]], le résultat est que l'étayage diagrammatique doit être entraîné et évalué séparément de la précision des réponses. ([[geovad-bench-visual-chain-of-thought-geometry-2026]])

- **Les problèmes sensibles à l'IA perdent du temps d'étude et de la rétention.** Un panel de dix ans portant sur 3,2 millions d'interactions ALEKS a montré que le temps d'apprentissage consacré aux problèmes écrits textuels — ceux qui se transcrivent le plus aisément en prompts d'IA — a chuté de 26,9 % après la sortie de ChatGPT, tandis que les items de rétention sous surveillance ont enregistré une baisse de 25 % des chances de réponse correcte ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).

- **Les élèves valorisent le retour immédiat, mais les plateformes de pratique optionnelles restent inutilisées.** Sur 157 élèves, [[genai-practice-platform-maths-feedback-2026|Chen et al. (2026)]] ont vu 95 inscriptions et seulement 34 tentatives de résolution d'une question ; les utilisateurs ont évalué l'engagement au plus haut (79 % d'accord) alors que seulement 42 % préféraient la plateforme au cahier de problèmes existant.

- **L'IA peut augmenter la réussite tout en élargissant un écart entre les sexes.** Dans une quasi-expérience de six semaines auprès de 115 élèves nigérians de fin de secondaire, le retour par ChatGPT a augmenté la réussite en équations du second degré par rapport à l'enseignement conventionnel (29,18 contre 24,06), et pourtant les élèves de sexe masculin ont surpassé les élèves de sexe féminin (30,95 contre 25,16) malgré l'absence de différence de sexe en auto-efficacité — une mise en garde d'équité pour le soutien mathématique par IA ([[ai-generated-responses-achievement-self-efficacy-2026|Oladayo & Diri, 2026]]).

### Connexions avec les concepts liés

L'enseignement des mathématiques s'inscrit dans le domaine plus large de l'[[stem-education|éducation STEM]] avec des liens distincts avec l'[[intelligent-tutoring|tutorat intelligent]] et le [[intelligent-tutoring|tutorat par IA]] à travers la forte tradition des tuteurs cognitifs et de la recherche sur les tuteurs intelligents en mathématiques, avec l'[[scaffolding|étayage]] à travers la littérature sur l'effort productif et l'utilisation d'indices, avec l'[[affective-computing|informatique affective]] à travers l'anxiété mathématique et le tutorat sensible aux émotions, avec le [[knowledge-tracing|suivi des connaissances]] et la [[assessment-validity|validité de l'évaluation]] à travers la recherche sur le diagnostic cognitif et l'évaluation, et avec le [[teacher-role|rôle de l'enseignant]] à travers la collaboration enseignant-IA dans l'enseignement des mathématiques. Le lien avec le [[k-12|primaire et secondaire]] est particulièrement fort — nombre d'articles mathématiques concernent des contextes K-12 — tandis que les liens avec l'[[higher-ed|enseignement supérieur]] émergent dans la formation des enseignants et la pratique mathématique avancée.

## Implications pour les enseignants de mathématiques

- **Traiter le tutorat par IA comme un levier de recherche d'aide, non comme un correctif de capacité.** La [[lak2026-hint-button-unproductive-use|recherche sur l'utilisation d'indices]] montre que les demandes d'indices prématurées et la lecture superficielle prédisent des gains moindres — la conception du *quand et du comment* les élèves sollicitent l'aide de l'IA importe donc plus que la capacité brute du tuteur. Encouragez les élèves à tenter avant de demander, et présentez l'aide au moment du besoin plutôt que sur demande.
- **Protéger l'effort productif.** [[zhang-tutormoments-2026|TutorMoments]] constate que les modèles penchent par défaut vers une aide excessive, poussant rarement à la rigueur ; configurez le soutien de l'IA pour qu'il étaye plutôt qu'il ne résolve, et surveillez la substitution de réponses qui érode le raisonnement.
- **Ne pas traiter le diagnostic par IA comme une vérité établie.** [[llm-cognitive-diagnosis-handwritten-math|MathCog]] montre que les LLM performent mal dans le diagnostic de la pensée mathématique (F1 < 0,5) avec sur-attribution et preuves hallucinées ; utilisez le diagnostic par IA comme une suggestion à vérifier contre le travail réel de l'élève.
- **Se méfier de la fragilité au format de surface dans la notation par IA.** La [[representation-robustness-llm-math-problem-solving|sensibilité à la représentation]] signifie que des problèmes équivalents peuvent inverser les réponses de l'IA — un risque de validité pour l'évaluation mathématique par IA ; préférez la [[human-in-the-loop-ai|revue humaine]] pour les notations à enjeux élevés.
- **Utiliser l'IA pour abaisser le seuil de la pratique personnalisée.** Les [[ai-powered-personalized-learning-elementary-fractions-2026|plateformes adaptatives]] ont amélioré la compréhension des fractions chez les élèves ayant des difficultés d'apprentissage des mathématiques ; déployez sélectivement les outils adaptatifs par IA pour les apprenants ayant besoin d'un soutien différencié.
- **Garder l'enseignant aux commandes des supports pédagogiques générés par IA.** Le [[teacher-control-ai-generation-math-visuals|contrôle enseignant des visuels IA]] soutient un cadre qui équilibre l'efficience de l'IA et la justesse pédagogique.

## Concepts liés

- [[stem-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[k-12]]
- [[higher-ed]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[help-seeking]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[assessment-validity]]
- [[multimodal]]
- [[hallucination-risk]]
- [[cognitive-offloading]]
- [[teacher-role]]
- [[educational-development]]
- [[generative-ai]]
- [[discipline-specific-aied]]
- [[teacher-education]]

## Articles liés
- [[ai-mathematics-education-prisma-review-2026]] — Intelligence artificielle dans l'enseignement des mathématiques : une revue systématique de littérature fondée sur PRISMA (2021-2025)
- [[automated-scoring-economics-math-items-nigeria-2026]] — Correction logicielle automatisée des items mathématiques de l'examen de fin de secondaire en économie à l'aide d'un modèle de similarité contextuelle
- [[mindful-llm-math-tutoring-2026]] — Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutorat virtuel avec apprentissage assisté par ordinateur : une expérience d'adoption et d'apprentissage
- [[making-ai-tutoring-productive-mastery-math-2026]] — Rendre le tutorat par IA productif : pratique mathématique fondée sur la maîtrise
- [[chudziak-ai-math-tutoring-platform]] — Plateforme de tutorat mathématique alimentée par l'IA (Chudziak & Kostka 2025)
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[zhang-tutormoments-2026]]
- [[lak2026-hint-button-unproductive-use]]
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[representation-robustness-llm-math-problem-solving]]
- [[epistemic-proactivity-math]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[teacher-control-ai-generation-math-visuals]]
- [[ai-tpack-preservice-math-teachers]]
- [[genai-runaway-object-math-higher-ed]]
- [[generative-ai-reduced-study-time-math]] — Plateforme de maîtrise ALEKS : les problèmes textuels sont les plus sensibles à l'IA
- [[mujib-ai-ibl-creative-math-2026]] — Apprentissage par investigation assisté par l'IA et performance mathématique créative
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[rhaimi-productivemath-2025]] — ProductiveMath : l'IA au service de la conception de problèmes d'échec productif
- [[preferred-scaffolding-ai-mathematical-modeling]] — Preferred scaffolding in AI-supported mathematical modeling
- [[instructional-design-proficiency-masters-math-2026]] — Modèle de classe intelligente et boucle D-T-E améliorant la maîtrise de la conception pédagogique des étudiants en M.Ed. en mathématiques (Zhu et al. 2026)
- [[rule-integrated-llm-tutoring-primary-math-2026]] — Étayage guidé par des règles ou ad hoc dans un système de tutorat par LLM pour les mathématiques du primaire (Looi et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Plateforme alimentée par l'IA générant des problèmes de modélisation mathématique (ADDIE, RAG)
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[gpt4-handwritten-math-exam-grading-2026]] — Correction par GPT-4 de réponses manuscrites semi-ouvertes d'examens universitaires de mathématiques
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — annotation sémantique des concepts de connaissance et séquencement d'exercices par apprentissage par renforcement sur des corpus mathématiques K-12
- [[misconception-acquisition-dynamics-llms-2026]] — dynamiques d'entraînement aux fausses règles d'algèbre dans les modèles de langage
- [[genai-practice-platform-maths-feedback-2026]] — Plateforme de pratique GenAI optionnelle dans une classe de maths de 157 élèves : retour immédiat valorisé, adoption limitée à 34 utilisateurs actifs
- [[ai-generated-responses-achievement-self-efficacy-2026]] — Assessing the Influence of AI-Generated Responses on Academic Achievement: An Ethical Perspective and Self-Efficacy
