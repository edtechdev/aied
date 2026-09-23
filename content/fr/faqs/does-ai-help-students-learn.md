---
title: "Utiliser l'IA aide-t-il réellement mes étudiants à apprendre ?"
created: "2026-09-22T19:14:45-04:00"
updated: "2026-09-22T19:14:45-04:00"
weight: 90
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [active-learning]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation]
translation_of: faqs/does-ai-help-students-learn
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Utiliser l'IA aide-t-il réellement mes étudiants à apprendre ?

**Oui, elle le peut, mais un meilleur travail produit avec l'IA n'est pas nécessairement la preuve d'un meilleur apprentissage.** La recherche documente de véritables bénéfices d'apprentissage, des effets négligeables et des préjudices pour l'apprentissage. La question importante n'est pas simplement de savoir si les étudiants utilisent l'IA, mais **ce que l'IA les aide à faire, quel travail de réflexion reste de leur responsabilité et ce qu'ils savent faire ensuite**.

La base de connaissances appelle **écart performance-apprentissage** la distinction entre un travail réussi assisté par l'IA et une capacité effectivement acquise. Un étudiant peut rendre une dissertation plus solide ou résoudre davantage d'exercices avec l'IA tout en ne devenant pas meilleur, et parfois pire, pour accomplir un travail comparable de façon autonome. À l'inverse, une rétroaction, des exemples et un tutorat bien conçus peuvent améliorer la performance ultérieure sans IA. Voir [[learning-gains|Learning Gains]] et [[cognitive-offloading|Cognitive Offloading]].

## Que montre réellement la recherche ?

### Certaines interventions assistées par l'IA améliorent l'apprentissage

Un point de départ large est [[burneo-can-edtech-close-learning-gaps-2026|Can EdTech Close Learning Gaps? Global Evidence from Digital Interventions]]. Cette synthèse de la Banque mondiale portant sur 14 études randomisées menées dans dix économies a estimé un effet d'apprentissage moyen positif de **0.125 écart-type** pour les technologies éducatives adaptatives et intégrant l'IA. Elle combine toutefois des [[adaptive-learning|systèmes adaptatifs]] antérieurs avec des outils d'[[generative-ai]] générative. Elle n'a trouvé aucun avantage statistiquement établi pour les outils génératifs plus récents, tout en reconnaissant une incertitude considérable dans cette comparaison. Le résultat soutient le potentiel de ces interventions, et non l'affirmation qu'un [[conversational-ai|agent conversationnel]] quel qu'il soit améliorera l'apprentissage.

Des données plus précises montrent pourquoi la [[learning-design|conception pédagogique]] compte. Dans [[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design in higher education]], une étude randomisée multi-site portant sur 1,176 étudiants de première année a comparé la [[peer-assessment|rétroaction par les pairs]], la rétroaction directe de l'IA, l'auto-évaluation suivie d'une rétroaction de l'IA, et une séquence hybride combinant auto-évaluation, rétroaction des pairs et critique de l'IA.

Les conceptions réflexives et hybrides ont produit un **transfert différé sans IA** plus fort que la rétroaction directe de l'IA. Les étudiants ont ensuite mieux réussi une nouvelle tâche d'argumentation scientifique, et pas seulement le devoir en cours de révision. Ces conditions exigeaient toutefois une activité évaluative supplémentaire et potentiellement plus de temps. L'étude soutient la **conception complète de la rétroaction**, sans démontrer qu'un seul de ses composants, ou l'IA elle-même, a causé cet avantage.

### L'IA peut améliorer la performance d'entraînement tout en nuisant à l'apprentissage

La mise en garde la plus claire vient de [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning: Evidence from high school mathematics]].

Dans cette expérience de terrain randomisée portant sur près de 1,000 étudiants, une interface d'IA de style généraliste a augmenté les scores d'entraînement assisté de **48% par rapport au groupe témoin**, mais les étudiants ont ensuite obtenu **17% de moins aux examens non assistés**. Un tuteur configuré avec des indications et des aides conçues par l'enseignant a largement évité cette pénalité. Fait crucial, il **n'a pas produit d'amélioration statistiquement significative de la performance aux examens non assistés par rapport au groupe témoin**. Éviter un préjudice n'est pas la même chose que démontrer un apprentissage supplémentaire. Ces pourcentages décrivent cette intervention et ce contexte particuliers, et non des effets universels de l'usage de l'IA.

L'implication est pratique : juger un outil d'IA sur les devoirs rendus, les bonnes réponses d'entraînement ou la satisfaction des étudiants peut donner une image trompeuse de sa valeur éducative. La satisfaction et le sentiment d'apprentissage sont des [[self-report-measures|mesures auto-déclarées]], et la base de connaissances documente à quel point elles peuvent s'écarter de l'apprentissage mesuré.

Une étude de terrain plus large et plus longue pointe dans la même direction à grande échelle. [[stromberg-generative-ai-learning-penalty-secondary-2026|The Generative AI Learning Penalty]] a suivi 26,811 élèves chinois du secondaire (classes 7–12) pendant 30 mois en exploitant un déploiement échelonné de l'IA. Les scores de devoirs ont augmenté de **18%** et le temps d'achèvement a diminué de **30%** (de 64 à 45 minutes), tandis que les scores aux examens mensuels à livres fermés ont chuté de **20%** en six mois et les scores aux examens d'entrée à forts enjeux de **18–24%** par rapport à la base, mais seulement après environ deux ans. Les pertes se concentraient chez les quelque **81%** d'utilisateurs de l'IA dont le comportement indiquait une externalisation des devoirs ; les utilisateurs qui maintenaient un temps de devoirs comparable à celui des non-utilisateurs apprenaient à peu près aussi efficacement. La divergence entre les performances aux devoirs et aux examens est l'écart performance-apprentissage inscrit à l'échelle d'une cohorte nationale, et le décalage de deux ans signifie que les évaluations courtes sous-estiment systématiquement le coût.

### L'accès et les garde-fous ne suffisent pas

Une expérience scolaire randomisée de deux ans, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away: AI Tutoring with Khanmigo]], a trouvé des gains modestes en [[math-education|mathématiques]] dans 18 collèges. Pourtant, les élèves s'engageaient rarement dans de véritables conversations de tutorat. Les auteurs ont noté que les gains ressemblaient à ceux associés à une pratique structurée sans IA. Comme l'intervention combinait pratique individualisée et [[intelligent-tutoring|tutorat par IA]], elle n'isolait pas proprement la contribution supplémentaire de la composante IA. Qu'un tuteur compétent soit disponible est différent du fait que les élèves l'utilisent de façon productive.

L'expérience plus récente [[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] offre une leçon apparentée. Parmi plus de 6,000 élèves de collège utilisant NUMI, le soutien de l'IA améliorait la reprise après les erreurs mais ralentissait la progression dans les questions. Une règle de maîtrise exigeant trois bonnes réponses consécutives augmentait le succès défini par la plateforme sans, à elle seule, améliorer l'apprentissage une semaine plus tard. Le signal le plus fort en faveur d'un apprentissage différé apparaissait lorsque l'IA était intégrée au flux de travail de maîtrise, mais les gains étaient **marginalement statistiquement significatifs et concentrés sur un matériel particulier effectivement travaillé**. Ce document de travail apporte des données suggestives en faveur d'une approche soigneusement structurée, et non une recette largement démontrée.

### C'est l'usage que les étudiants font de l'outil, et pas seulement l'accès à celui-ci, qui détermine le résultat

La même technologie produit des apprentissages différents selon la manière dont l'interaction est structurée. Dans [[yan-cognitive-outsourcing-genai-assessments-2026|une étude qualitative portant sur 38 étudiants de licence]] lors de devoirs de dissertation non surveillés, l'engagement s'étendait sur un spectre allant de l'[[cognitive-offloading|externalisation cognitive]] à la **réaffectation cognitive**, c'est-à-dire au déplacement de l'effort d'une récupération de bas niveau vers l'[[critical-thinking|évaluation critique]]. La plupart des étudiants (n = 31) avaient l'intention d'utiliser l'IA générative comme assistant d'apprentissage, pourtant **76.32%** s'appuyaient sur un dialogue à tour unique de type demander, obtenir la réponse, s'arrêter et **78.94%** utilisaient l'outil avant ou après la rédaction plutôt que tout au long de la tâche, produisant un paradoxe d'efficacité : de la commodité gagnée au prix du travail cognitif qui construit les schémas (« la vitesse à laquelle on l'oublie est aussi très grande »). Seuls 8 étudiants travaillaient comme partenaires cognitifs par un dialogue soutenu et itératif.

La leçon [[pedagogy|pédagogique]] est que les autorisations ou les interdictions générales laissent dans les deux cas les étudiants deviner. Ce qui a changé les comportements, c'est un accompagnement propre à la tâche, indiquant quel travail cognitif les étudiants doivent conserver et quelle assistance de l'IA était appropriée ; c'est la direction de conception développée dans [[reduce-ai-cheating]].

### Moins d'effort ne signifie pas automatiquement moins d'apprentissage

Ce serait aussi une erreur de conclure que l'IA n'aide que lorsqu'elle fait travailler les étudiants davantage ou qu'elle ne montre jamais un exemple complet.

Dans les expériences préenregistrées rapportées dans [[coach-not-crutch-ai-writing|Coach not crutch]], des adultes qui s'entraînaient à réviser des lettres de motivation avec l'IA produisaient ensuite une meilleure écriture sans IA que ceux qui s'entraînaient seuls, tout en dépensant moins d'effort. Les bénéfices persistaient lors d'un suivi à un jour. Une autre expérience a montré que consulter un exemple révisé par l'IA produisait des bénéfices comparables à un entraînement avec l'outil. Il s'agissait de tâches d'écriture brèves et délimitées, et non de preuves d'une amélioration durable dans tous les types d'écriture, mais elles montrent que les exemples peuvent soutenir l'apprentissage plutôt que nécessairement s'y substituer.

**L'objectif n'est donc pas la difficulté maximale. Il est de préserver ou d'améliorer l'activité d'apprentissage qui développe la capacité visée.**

### Le schéma se répète en enseignement de l'informatique

[[kumar-genai-computing-education-systematic-review-2026|Une revue systématique de 72 études en enseignement de l'informatique]] retrouve la même structure dans son résultat le plus robuste. L'IA générative augmente de façon fiable l'achèvement à court terme et réduit le temps consacré à la tâche (36 études), et pas une seule étude du corpus ne documente d'effet négatif sur la performance immédiate ; pourtant ces gains « ne se transfèrent pas à la performance autonome » (21 études). Les étudiants assistés par Codex ont accompli deux fois plus de tâches pendant l'apprentissage mais n'ont pas mieux réussi que les témoins aux post-tests sans IA. Les [[prior-knowledge|connaissances préalables]] modèrent tout : les étudiants bien préparés convertissent l'assistance en compétence durable, tandis que les étudiants insuffisamment préparés risquent de l'utiliser comme une béquille qui supprime la pratique dont ils ont besoin. L'exigence de conception centrale de la revue est la **vérification** (lire, tester, modifier, expliquer et critiquer la production de l'IA), érigée en composante notée et observable du travail plutôt qu'en aspiration laissée à la discrétion de chacun.

## Un principe de conception utile : étayer, ne pas se substituer

Les synthèses [[scaffolding]] et [[active-learning|Active Learning]] de la base de connaissances mettent l'accent sur un soutien qui aide les apprenants à comprendre, à s'entraîner, à évaluer et, à terme, à réussir avec moins d'assistance.

« Étayer, ne pas se substituer » est un principe utile, mais il doit s'appliquer à l'**objectif d'apprentissage** et non mécaniquement à chaque fonctionnalité d'IA. Un exemple entièrement résolu peut être quelque chose dont les étudiants apprennent ; une séquence d'indices peut malgré tout devenir quelque chose qu'ils parcourent sans réfléchir. La distinction importante réside dans ce que l'apprenant fait de l'assistance. Voir [[cognitive-offloading|Cognitive Offloading]] et [[help-seeking]].

Pour une activité destinée à développer une capacité autonome, une routine de départ raisonnable est la suivante :

1. **Établir la pensée de l'apprenant.** Demander une première tentative, une prédiction, un brouillon, une explication ou une interprétation d'un exemple approprié.
2. **Fournir une assistance ciblée.** Utiliser l'IA pour un indice, une explication, un exemple contrasté ou une rétroaction ciblée sur la difficulté.
3. **Exiger une réponse à l'assistance.** Demander à l'étudiant d'expliquer, de réviser, de vérifier ou de justifier qu'il accepte ou rejette la suggestion.
4. **Vérifier une nouvelle application avec moins de soutien.** Demander à l'étudiant de résoudre un problème comparable ou d'appliquer l'idée dans un contexte différent.

Il s'agit d'un point de départ pédagogique, et non d'une séquence validée universellement. La quantité et le moment du soutien devraient refléter les connaissances préalables des étudiants et la tâche. Voir [[reducing-ai-misuse|Reducing AI Misuse]] et [[prior-knowledge|Prior Knowledge]].

### Rendre explicite la réflexion conservée

Pour les mathématiques, un enseignant peut demander aux étudiants de soumettre leur tentative de solution avant de demander de l'aide, puis utiliser une invite telle que : « Identifie la première étape que je devrais reconsidérer, donne-moi un indice utile et demande-moi de réessayer. » La vérification qui suit devrait exiger une nouvelle solution et une explication, et non la reproduction de la réponse de l'IA. Cela applique les recommandations de [[scaffolding]] et de [[help-seeking]].

Pour l'écriture, un enseignant peut faire évaluer aux étudiants leur brouillon au regard d'une grille d'évaluation avant de recevoir la critique de l'IA, puis leur demander d'expliquer quelles suggestions ils ont acceptées, modifiées ou rejetées. Si la construction d'un argument est l'objectif, une prose générée par l'IA ne devrait pas se substituer à la preuve que l'étudiant sait construire un argument. Si l'évaluation de révisions alternatives est l'objectif, comparer des exemples complets peut être approprié. Voir [[writing-education|Writing Education]] et [[feedback-literacy|Feedback Literacy]].

Ce sont des applications de conception issues des données probantes. Elles devraient malgré tout être évaluées dans le cours concerné plutôt que présumées efficaces parce qu'elles paraissent pédagogiquement sensées.

## Comment savoir si l'IA aide dans mon cours ?

La page [[ai-ed-evaluation|AI Ed Evaluation]] recommande de séparer la qualité de la production de l'IA, l'expérience qu'en font les étudiants et leur apprentissage réel. Une évaluation pratique exige davantage qu'une enquête de satisfaction ou qu'une comparaison des notes aux devoirs.

**Préciser d'abord la capacité visée.** Décider ce que les étudiants devraient comprendre ou savoir faire après l'activité. « Produire un rapport soigné » est différent de « sélectionner des preuves appropriées », « expliquer une relation causale » ou « détecter une conclusion non étayée ». L'évaluation devrait révéler la capacité que vous entendez développer. Voir [[educational-measurement|Educational Measurement]].

**Mesurer avant, après et plus tard.** Utiliser une brève tâche de référence, une vérification immédiate de l'apprentissage et une application différée. Inclure à la fois une tâche comparable et, le cas échéant, une tâche qui change le contexte ou exige une application différente. Lorsque l'objectif est une compétence autonome, retirer l'assistance de l'IA qui pourrait accomplir cette compétence à la place de l'étudiant. Une vérification réussie immédiatement après l'entraînement est utile, mais n'établit pas la rétention sur plusieurs mois ni le transfert entre domaines. Voir [[learning-gains|Learning Gains]] et [[transfer-of-learning|Transfer of Learning]].

**Utiliser une comparaison significative.** Lorsque c'est possible, comparer l'activité assistée par l'IA avec une alternative sans IA bien conçue, à contenu, temps d'enseignement et occasions d'entraînement similaires. Une simple amélioration avant-après ne peut pas établir que l'IA a causé le gain ; les étudiants pourraient progresser grâce au reste de l'[[teacher-role|enseignement]]. Pour des affirmations causales plus solides, consulter [[research-methods-aied|Efficacy Research Methods]] lors de la conception de la comparaison.

**Observer comment les étudiants utilisent l'aide.** Rechercher des explications, des tentatives de correction d'erreurs, des révisions justifiées et des vérifications, et non seulement des connexions, des comptages de messages ou des questions terminées. Ces observations peuvent aider à expliquer un résultat, mais ne devraient pas remplacer une mesure de l'apprentissage. Voir [[help-seeking]] et [[student-ai-interaction|Student–AI Interaction]].

**Vérifier ce qu'un tableau de bord mesure réellement.** Dans [[zhang-platform-scores-miss-ai-teaching-agents-2026|une évaluation de huit agents pédagogiques d'IA]] en [[medical-education|éducation médicale]], le classement des agents selon le score propre à la plateforme divergeait d'une grille d'évaluation de la qualité pédagogique validée par des experts (l'agent classé troisième par la plateforme arrivait dernier sur la qualité selon la grille), parce que le score de la plateforme suivait la performance des étudiants pendant l'interaction, et non le comportement pédagogique de l'agent. Une métrique intégrée est une hypothèse à valider, et non une preuve d'apprentissage. Voir [[evaluating-ai-interventions-methods|Evaluating AI Interventions: Methods]] pour les mesures et les plans de comparaison qui rendent une telle vérification crédible.

Une qualification importante : **tout résultat d'apprentissage légitime ne doit pas nécessairement être démontré sans IA**. Un cours peut enseigner délibérément un travail efficace assisté par l'IA. Dans ce cas, évaluer la capacité des étudiants à sélectionner, vérifier, réviser et défendre leur usage de l'IA, en plus des fondations autonomes qu'exige la discipline. [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] propose cette distinction entre capacité autonome, performance augmentée par l'IA et responsabilité de vérification. Il s'agit d'un cadre d'évaluation conceptuel, et non d'une solution validée pour tous les cours.

## Vérifier qui en bénéficie, et ce que le bénéfice coûte

Une amélioration moyenne peut masquer des étudiants qui en reçoivent peu ou qui rencontrent de nouveaux obstacles. La synthèse [[digital-divide|Digital Divide]] distingue l'accès à un outil des compétences nécessaires pour l'utiliser et des résultats finalement obtenus.

Pour une évaluation en classe, examiner les résultats en fonction de points de départ pertinents tels que les connaissances préalables, les besoins linguistiques et les exigences d'accessibilité. Fournir un accompagnement plutôt que de supposer que les étudiants savent déjà comment obtenir et évaluer une rétroaction utile. Lors de l'évaluation de l'apprentissage autonome, retirer l'assistance qui fournit la réflexion visée, et non les aménagements nécessaires pour accéder à la tâche. Voir [[ai-literacy|AI Literacy]], [[equity-in-ai-education|Equity in AI Education]] et [[accessibility]].

Examiner aussi la rétroaction que les étudiants reçoivent réellement. Une réponse fluide peut mal diagnostiquer leur difficulté, renforcer une erreur ou offrir une réponse alors qu'un autre type de soutien était nécessaire. Utiliser des supports alignés sur le cours, conserver un accès à une aide humaine et éviter de collecter plus d'informations sur les étudiants que l'activité ne l'exige. Ces préoccupations se rattachent directement à [[ai-feedback-quality|AI Feedback Quality]], [[pedagogical-safety|Pedagogical Safety]] et [[privacy]].

## En résumé

**L'IA peut aider les étudiants à apprendre, mais ni l'accès, ni une production soignée, ni l'étiquette de « tuteur » n'établissent qu'elle le fait.** Les données probantes sont les plus solides lorsqu'une conception pédagogique précisée est évaluée face à une alternative significative à l'aide de mesures des capacités que les étudiants sont censés développer. La rétention à long terme, le transfert large et la généralisation entre apprenants et contextes restent des incertitudes importantes. Voir [[limitations-in-aied-research|Limitations in AIEd Research]].

La question la plus utile pour un enseignant est la suivante :

> **Après cette activité assistée par l'IA, que mes étudiants peuvent-ils comprendre, expliquer, juger ou faire qu'ils ne pouvaient pas faire auparavant, et quelles preuves montrent cette amélioration ?**