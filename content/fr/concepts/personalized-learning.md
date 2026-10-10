---
title: Apprentissage personnalisé
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-10T03:05:30-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/personalized-learning
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

> **Apprentissage personnalisé** — l'adaptation des expériences éducatives à des [[student-modeling|profils d'apprenants]] individuels, incluant les connaissances préalables, le rythme d'apprentissage, les préférences et les états [[affective-computing|affectifs]]. L'IA rend possible la personnalisation à grande échelle, bien que l'écart entre la *personnalisation du système* et la *personnalisation perçue par l'apprenant* demeure un problème de mesure ouvert. Aux côtés de l'[[adaptive-learning|apprentissage adaptatif]] et du [[intelligent-tutoring|tutorat intelligent]], c'est l'un des membres côté application de la famille [[student-modeling|modélisation de l'apprenant et enseignement adaptatif]] — qui consomment les modèles d'apprenant pour adapter l'enseignement.

## Questions à examiner

- Quand vous pensez à l'« apprentissage personnalisé », imaginez-vous un contenu adapté au rythme d'un apprenant, ou à ses objectifs choisis ? La page dit que ces deux visions sont profondément différentes (résultats uniformes par des chemins variés contre résultats diversifiés). Laquelle valorisez-vous le plus, et pourquoi ?
- La page distingue l'apprentissage personnalisé (l'objectif) de l'apprentissage adaptatif (un mécanisme). Pouvez-vous imaginer une personnalisation sans adaptation en temps réel — et compte-t-elle tout de même ?
- Un système peut s'adapter sans que l'apprenant ne se sente jamais reconnu. Quand avez-vous vécu le fait d'être « personnalisé » sans vous sentir réellement connu ? Quelle est la différence ?
- La page souligne qu'une surpersonnalisation peut enfermer des apprenants dans des filières à faibles attentes. Comment une adaptation par l'IA bien intentionnée pourrait-elle abaisser accidentellement le plafond d'un apprenant ?
- La personnalisation exige des données détaillées sur l'apprenant ; la vie privée exige une minimisation des données. Où situez-vous la limite entre « assez de données pour s'adapter » et « tellement que l'apprenant est exposé » ?
- Que faudrait-il qu'une IA retienne de vous d'une session à l'autre pour personnaliser réellement votre apprentissage — et quels sont les risques qu'elle retienne ces choses ?

## Introduction

L'adaptation des expériences éducatives à des profils d'apprenants individuels, incluant les [[prior-knowledge|connaissances préalables]], le rythme d'apprentissage, les préférences et les états affectifs. L'IA rend possible la personnalisation à grande échelle, bien que l'écart entre la *personnalisation du système* et la *personnalisation perçue par l'apprenant* demeure un problème de mesure ouvert.

- **[[mishra-control-vs-agency-history-2025|Mishra et al.]]** distinguent deux formes de personnalisation aux racines historiques profondes — des résultats uniformes atteints par des chemins variés (des machines à [[teacher-role|enseigner]] de Skinner au tutorat de maîtrise façon Khan Academy) contre des résultats diversifiés choisis par l'apprenant — ce qui recouvre la tension du champ entre contrôle et agentivité.

## Architectures pour la personnalisation pilotée par l'IA

### Mémoire longitudinale (PersonaVLM → Éducation)

Nie et al. (2026) ont développé une architecture de mémoire à long terme [[multimodal|multimodale]] (PersonaVLM) qui maintient la cohérence du persona d'une interaction à l'autre. Transposée à l'éducation, elle permet à des systèmes de tutorat de se souvenir des [[misconceptions|conceptions erronées]] d'un apprenant, de ses explications préférées et de son historique de progression d'une session à l'autre — comblant un déficit critique chez les tuteurs [[conversational-ai|conversationnels]] sans état.

### Socle de personnalisation natif pour agents (DeepTutor)

Ma et al. (2026) conçoivent chaque fonctionnalité de [[deeptutor]] pour partager un socle de personnalisation commun, plutôt que de boulonner la personnalisation sur des outils réactifs. Cette architecture assure une cohérence intermodale : le même profil d'apprenant pilote la [[problem-solving|résolution de problèmes]], la [[automated-question-generation|génération de questions]] et l'écriture collaborative.

### Personnalisation sociale multi-agents (MAIC)

Yu et al. (2024) personnalisent non seulement le contenu mais aussi le *contexte social*. Des archétypes de camarades de classe (Class Clown, Deep Thinker, Note Taker, Inquisitive Mind) créent des dynamiques d'apprentissage entre pairs variées, adaptées aux besoins individuels des apprenants.

### AutoML pour les portraits d'apprenants

La personnalisation est un objectif central pour améliorer la qualité éducative, or le traitement de données de comportement d'apprentissage hétérogènes et multi-sources reste un défi. Un cadre de recherche d'architecture neuronale cognitive personnalisée, piloté par de l'[[reinforcement-learning|apprentissage automatique]] automatisé, construit des portraits d'apprenants et génère des modèles de diagnostic pour des profils d'apprenants hétérogènes, en intégrant des données multimodales pour dépasser les résultats statiques d'examen.

Une base de connaissances statique ne peut pas personnaliser : les ontologies évoluent lentement et gèrent mal l'incertitude, aussi l'architecture adapte-t-elle la représentation au type de connaissance — déclaratif aux ontologies, procédural aux règles, incertain aux ontologies floues ou probabilistes, implicite à l'analytique et à l'apprentissage automatique — et préfère-t-elle un système de petites ontologies mappées à un modèle monolithique unique ([[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova, 2026]]).

## Relation avec l'apprentissage adaptatif et le tutorat intelligent

L'apprentissage personnalisé est souvent confondu avec l'[[adaptive-learning|apprentissage adaptatif]], mais ce n'est pas la même chose. **L'apprentissage adaptatif** désigne le *mécanisme* — un système ajustant contenu, rythme et difficulté en temps réel sur la base d'un modèle d'apprenant. **L'apprentissage personnalisé** est l'*objectif plus large* — adapter l'expérience d'apprentissage complète (contenu, parcours, rythme, préférences, objectifs) à un individu, dont l'adaptation en temps réel n'est qu'une implémentation. Les systèmes adaptatifs sont un *moyen* d'atteindre la personnalisation, mais celle-ci peut aussi passer par des profils d'apprenant statiques, des parcours fondés sur le choix, ou un accompagnement par un tuteur humain qui ne s'adapte pas en temps réel.

Une revue PRISMA 2020 de 22 interventions en enseignement supérieur place le soutien à l'apprentissage personnalisé et les parcours adaptatifs parmi les cas d'usage dominants de l'IA, bien que la plupart des implémentations aient amélioré la pratique existante plutôt que de la transformer ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

Le [[intelligent-tutoring|tutorat intelligent]] se situe entre les deux : les ITS sont les plateformes *adaptatives* canoniques qui dispensent un enseignement personnalisé via une modélisation structurée de l'élève, tandis que les tuteurs fondés sur les [[llm]] personnalisent de manière conversationnelle. Les trois sont les membres côté application de la famille [[student-modeling|modélisation de l'apprenant et enseignement adaptatif]] — ils consomment les représentations de l'apprenant produites par la [[student-modeling|modélisation de l'élève]], le [[knowledge-tracing]] et le [[cognitive-diagnosis]] pour décider quoi enseigner ensuite. La distinction importe pour l'évaluation : les études qui qualifient indifféremment un système d'« adaptatif », de « personnalisé » ou d'« individualisé » (voir plus bas) peuvent masquer si le bénéfice revendiqué vient de l'adaptation en temps réel, du choix de l'apprenant ou de l'adaptation du contenu.

## Problèmes de mesure

- **Personnalisation du système contre personnalisation perçue** — Un système peut s'adapter sans que l'apprenant se sente reconnu
- **Validité longitudinale** — Les bénéfices de la personnalisation peuvent s'effriter si les profils deviennent obsolètes ou surajustés
- **Risques d'[[equity-in-ai-education|iniquité]]** — La surpersonnalisation peut enfermer des apprenants dans des filières à faibles attentes

- **Risques de biais** — Conditionner sur les attributs des élèves peut encoder des stéréotypes : à texte constant, les retours destinés à des élèves identifiés par la race, la langue ou un handicap devenaient plus louangeurs et moins critiques ([[marked-pedagogies-linguistic-bias-writing-feedback|Tan, Phalen & Demszky (2026)]]).

## Personnalisation et évaluation

La personnalisation et l'[[assessment|évaluation]] sont étroitement couplées dans l'apprentissage piloté par l'IA. La personnalisation adaptative dépend d'une mesure [[formative-assessment|formatif]] continue de ce que sait un apprenant (via [[knowledge-tracing]], [[student-modeling]] et [[cognitive-diagnosis]]) pour décider quoi adapter ensuite — la fiabilité du signal d'[[assessment|évaluation]] contraint donc directement la qualité de la personnalisation. Réciproquement, quand l'[[summative-assessment|évaluation sommative]] est personnalisée élève par élève, l'[[bias-mitigation|équité]] et la comparabilité deviennent plus difficiles à établir. La [[research-methods-aied|recherche]] de la base de connaissances met en garde contre la suradaptation à des signaux superficiels ou bruyants : des systèmes [[adaptive-learning|adaptatifs]] qui mésurent un apprenant peuvent personnaliser de manière à réduire l'apprentissage plutôt qu'à le soutenir, et les élèves nés avec l'IA dont l'auto-évaluation est peu fiable (un « référentiel cognitif absent ») sont plus difficiles à modéliser avec précision.

## Personnalisation à l'ère de l'IA

La preuve la plus forte que cette préoccupation n'est pas hypothétique vient d'une [[personalization-paradox-adaptive-learning-emotions-2026|étude longitudinale à trois vagues portant sur 486 étudiants chinois de premier cycle (Li, Lin & Qiu, 2026)]], qui a montré que plus les étudiants percevaient leur environnement d'IA adaptatif comme personnalisé, plus leur [[self-regulated-learning|apprentissage autorégulé]] était faible — le « paradoxe de la personnalisation ». Les variations des émotions académiques portaient l'essentiel de l'effet : la rencontre de l'environnement adaptatif prédisait moins de plaisir et plus d'anxiété et d'ennui, et ces changements émotionnels expliquaient ensemble environ la moitié de l'association entre personnalisation et réduction de l'autorégulation. La [[ai-literacy|littératie en IA]] amortissait ces dégâts, affaiblissant l'association émotionnelle négative jusqu'à la non-significativité à haut niveau de littératie. La personnalisation semble donc acheter une adaptation au prix de l'activité [[regulation|régulatoire]] propre de l'apprenant, et l'étude désigne l'expérience émotionnelle — et pas seulement la charge cognitive — comme le canal par lequel ce coût est payé.

Là où le diagnostic qui sous-tend un parcours est validé, la personnalisation paie en réduisant la charge plutôt qu'en couvrant davantage : la remédiation par plus court chemin a nécessité en moyenne 3,82 étapes et a réduit le temps d'étude de 22,0 % (57,6 contre 73,8 minutes), la charge cognitive portant 53,7 % de l'effet au post-test ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).

La preuve pour l'outil peut elle-même être négative à petite échelle : dans un essai de cinq jours sur les fractions en élémentaire (n final = 22), le groupe témoin a montré des gains de compréhension significativement plus élevés que le groupe Mathbot adaptatif par IA, et les auteurs signalent comme limites les confusions de niveau scolaire, le devinage et le coût des licences — une étiquette « adaptative » n'a aucun effet ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman (2024)]]).

L'apprentissage par renforcement est un mécanisme distinct de personnalisation, et [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] en dressent le bilan empirique : leur revue [[meta-analysis-systematic-review|PRISMA]] de 89 études de RL en éducation constate que la personnalisation par RL se concentre dans l'[[higher-ed|enseignement supérieur]] et l'[[math-education|éducation mathématique]], l'adaptation étant mise en œuvre principalement comme planification de contenu (n = 53) ou personnalisation liée au guidage, comme les indices et les retours (n = 36). Ils rapportent que les politiques de RL battent le plus souvent les lignes de base non adaptatives sur l'adaptation liée au guidage et sur les variables [[affective-computing|affectives]] (63 % des études testées), et que le gain d'apprentissage — surtout le gain d'apprentissage normalisé — était la source de récompense la plus efficace — des indications pratiques pour concevoir des signaux de récompense qui personnalisent vers un apprentissage authentique plutôt que vers l'[[student-engagement|engagement]].

[[ai-coaching-rl-skill-development|Wang et al. (2026)]] montrent que l'objectif de récompense est lui-même un choix de personnalisation : un coach RL entraîné sur la compétence indépendante de l'apprenant a réduit le temps par tour de 27,9 % (p = 0,005) là où l'effacement fondé sur des règles ne produisait aucun changement fiable, et les auteurs soutiennent que les agents de codage optimisés pour la performance à la tâche n'ont aucune incitation à prendre en compte ce que l'humain retient.

Bernstein et Sibia (2026) affinent une distinction entre personnalisation par intérêt et personnalisation par expertise : les analogies GenAI adaptées à l'intérêt étaient rapportées comme plus engageantes et plus mémorables mais pas uniformément plus dignes de confiance, et certains étudiants préféraient l'explication technique générique même quand l'analogie correspondait à leur intérêt déclaré, par souci d'autonomie et d'exhaustivité ([[student-reception-genai-analogies-computing-2026]]). Leur recommandation de conception est de personnaliser par la structure du domaine source et de demander aux étudiants ce qu'ils savent déjà, pas seulement ce qui les intéresse, car la familiarité avec un domaine source est ce qui permet à un apprenant d'inspecter l'analogie — et de donner aux apprenants le contrôle de la personnalisation via un menu d'analogies, une adhésion explicite, ou l'offre conjointe des versions générique et personnalisée. Sidorkin (2026) documente un autre appariement au niveau des supports de cours plutôt que des explications individuelles : des lectures hebdomadaires générées à la demande pour un cours de leadership éducatif de deuxième cycle étaient adaptées à la fois selon l'intérêt (secteur, rôle professionnel, exemples locaux) et le niveau de compréhension (rythme, définitions, profondeur), et les journaux produits partageaient un squelette commun (similarité cosinus TF-IDF de 0,50 à 0,61), qu'il lit comme un gabarit à curseurs ajustables plutôt qu'une réécriture intégrale par apprenant. Le même corpus montre que l'adaptation était structurelle mais d'intensité inégale : les marqueurs d'adaptation au niveau des artefacts atteignaient en moyenne 52,24 pour 10 000 mots et variaient de 38,74 à 74,29 selon les journaux, tandis que les invites orientées vers la compréhension produisaient 3,4x à 8,7x plus d'[[scaffolding|étayage]] définitionnel que le texte explicatif de référence.

Un troisième axe de personnalisation est l'*objectif*, et c'est l'entrée que les planificateurs d'IA traitent le plus mal. [[personapath-personalized-learning-paths-2026|Liu et al. (2026)]] ont associé 2 000 personas d'apprenants synthétiques à un graphe de prérequis de 347 manuels et 4 092 concepts, et demandé à dix LLM de planifier, étape par étape, les connaissances qu'un apprenant devrait étudier pour atteindre une unité cible énoncée. Les modèles ont produit des programmes structurellement solides — DeepSeek-V3.1 atteignait 90,9 % en validité des prérequis et d'absence d'hallucination — tout en échouant à les adapter à l'apprenant : l'adaptativité plafonnait à 44,7 %, le taux de réussite final de DeepSeek-V3.1 était de 29,5 % en éducation de base et 14,6 % en enseignement supérieur, et le retrait du champ de maîtrise du persona coûtait jusqu'à 26,1 points de pourcentage d'adaptativité en laissant la validité presque inchangée. Générer le parcours entier en une seule passe au lieu de façon interactive augmentait la validité jusqu'à 30,8 points tout en réduisant l'adaptativité de 28,8. L'affirmation « personnalisé » porte sur la réponse à l'état d'un apprenant, et la variable d'état est précisément ce dont ces planificateurs peuvent le plus facilement se passer — un pendant computationnel au problème de mesure évoqué plus haut.

Un quatrième axe est l'*audience* plutôt que l'apprenant individuel : [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] régénère un cours existant pour un groupe professionnel nommé (santé, finance ou énergie), et ses évaluateurs experts ont noté les versions cadrées par l'industrie 0,32 point plus haut en profondeur de personnalisation (3,97 contre 3,65) tandis que le calage à l'audience restait en retrait (3,52). Adapter à une cohorte plutôt qu'à un apprenant est une forme de personnalisation moins coûteuse et plus maniable, mais la grille qui l'a mesurée évaluait l'adéquation jugée, non les résultats d'apprentissage.

La personnalisation peut l'emporter sur un présentateur humain : dans un grand cours en ligne (493 répondants), les étudiants ont classé les vidéos personnalisées générées par IA au-dessus des vidéos humaines non personnalisées (rang moyen 2,26 contre 2,69) et 88,4 % ont classé une vidéo personnalisée en première position, contre 73,8 % pour les vidéos humaines ([[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]]).

## Micro-personnalisation conditionnée par invite

[[prompt-engineering-personalization-ai-teaching-assistant-2026|Basu, Kakar & Goel (2026)]] montrent que l'écart entre personnalisation du système et personnalisation perçue peut être traité au niveau de la réponse. Leur cadre pour le tuteur Jill Watson [[llm]]/[[rag]] combine des préférences choisies par l'apprenant (abstraction, verbosité, perception, traitement, compréhension) avec une demande cognitive inférée par le système ([[cognitive-diagnosis|taxonomie de Bloom]]) pour produire 96 micro-profils adaptés à chaque interaction via un [[prompt-engineering|conditionnement structuré par invite]] — sans réentraînement, sans rédaction [[discipline-specific-aied|spécifique au domaine]]. C'est un hybride d'[[adaptive-learning|adaptabilité]] (sélection des préférences pilotée par l'apprenant) et d'adaptivité (évaluation cognitive pilotée par le système), montrant que la personnalisation de la *façon* dont le contenu est présenté peut être à la fois évolutive et perceptible pour les apprenants.

## Ambiguïté terminologique

Un problème récurrent est que l'« apprentissage personnalisé » est un terme générique large et faiblement défini. Des revues systématiques ([[khalifeh-redefining-personalized-learning-ai-2026|Khalifeh et al., 2026]]) constatent que l'[[adaptive-learning|apprentissage adaptatif]], l'enseignement individualisé, l'apprentissage personnalisé sur mesure et l'apprentissage personnalisé sont employés indifféremment, sans définition universellement acceptée — source d'ambiguïté conceptuelle qui complique la synthèse de la recherche et la pratique fondée sur les données probantes. Le champ appelle de plus en plus à un cadre et une définition unifiés pour que « personnalisé » désigne une affirmation précise et étayée par des preuves plutôt qu'une étiquette vague (point renforcé par la [[limitations-in-aied-research|critique de la base de connaissances sur l'usage faible des construits]]).

## Concepts liés

- [[adaptive-learning]] — Systèmes adaptatifs qui ajustent contenu, rythme et difficulté à l'apprenant en temps réel
- [[intelligent-tutoring]] — Systèmes de tutorat qui modélisent l'apprenant et dispensent un enseignement individualisé
- [[student-modeling]] — Représentation des connaissances, compétences et états de l'apprenant qui pilotent l'adaptation
- [[knowledge-tracing]] — Inférence de la maîtrise des composantes de connaissance à partir de la performance au fil du temps
- [[cognitive-diagnosis]] — Diagnostic des connaissances et attributs latents de l'apprenant à partir des réponses
- [[scaffolding]] — Soutien et effacement calibrés sur les besoins individuels de l'apprenant
- [[student-experience]] — L'expérience vécue de la personnalisation par l'apprenant
- [[learning-analytics]] — Mesure de l'apprentissage fondée sur les données qui informe l'adaptation
- [[formative-assessment]] — Évaluation continue qui signale quoi adapter ensuite
- [[summative-assessment]] — Évaluation finale dont la comparabilité est compliquée par la personnalisation
- [[generative-ai]] — Personnalisation conversationnelle fondée sur les LLM
- [[edtech-platform]] — Plateformes qui dispensent l'apprentissage personnalisé à grande échelle
- [[higher-ed]] — Contexte d'enseignement supérieur pour la personnalisation
- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[recommender-systems-and-learning-paths]]
## Articles liés
- [[bespoke-industry-personalized-lecture-videos-2026]] — Régénération de vidéos de cours personnalisées par industrie à partir d'une transcription source : adaptation au niveau de l'audience, notée par des experts du domaine (Puech et al. 2026)
- [[prompt-engineering-personalization-ai-teaching-assistant-2026]] — Micro-personnalisation par ingénierie d'invites d'un assistant d'enseignement IA (Basu, Kakar & Goel 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (note du Stanford SCALE/NSSA)
- [[mishra-control-vs-agency-history-2025]] — Distingue deux formes de personnalisation (résultats uniformes contre diversifiés)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefining personalized learning : revue systématique
- [[deeptutor]] — Socle de personnalisation natif pour agents appliqué au tutorat
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Modèle de connaissance hybride à couches fondé sur une ontologie pour l'apprentissage en ligne personnalisé
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — Apprentissage adaptatif personnalisé pour les fractions en élémentaire
- [[ai-coaching-rl-skill-development]] — Encadrement par apprentissage par renforcement pour le développement de compétences
- [[personalized-ai-generated-videos-preference-2026]] — Les étudiants préfèrent les vidéos personnalisées générées par IA aux vidéos humaines non personnalisées (Tomlinson et al. 2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnostic cognitif bayésien pour des parcours d'apprentissage personnalisés
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Rôles de l'enseignant et de l'IA dans l'évaluation formative augmentée par ChatGPT
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies : biais dans les retours automatisés personnalisés
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Revue systématique : les parcours adaptatifs et les systèmes de recommandation sont un cas d'usage majeur d'intégration de l'IA dans l'enseignement supérieur
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[personalization-paradox-adaptive-learning-emotions-2026]] — Paradoxe de la personnalisation : la personnalisation adaptative perçue est liée à un apprentissage autorégulé plus faible via les émotions académiques, amorti par la littératie en IA (Li, Lin & Qiu 2026)
- [[personapath-personalized-learning-paths-2026]] — PersonaPath : les planificateurs LLM atteignent 90,9 % de validité mais aucun modèle ne dépasse 44,7 % d'adaptativité dans la personnalisation de parcours vers un objectif d'apprenant énoncé (Liu et al. 2026)
