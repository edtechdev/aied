---
title: "Enseignement de la lecture"
created: "2026-11-05T02:16:00-05:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding, motivation, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
assessment: [assessment, assessment-validity]
ethics: [neurodiversity, accessibility]
audience: [instructors, curriculum designers, researchers]
level: [primary education, k 12, higher ed]
confidence: medium
connected_faqs: [ai-support-reading-comprehension]
updated: "2026-11-13T19:05:00-05:00"
translation_of: "concepts/reading-education"
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-05"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Enseignement de la lecture** — l'enseignement et l'évaluation de la lecture : la compréhension, la fluidité, le vocabulaire et la motivation à lire, ainsi que la conception de textes à la difficulté adaptée à un lecteur. Dans [[ai-education|l'IA en éducation]], la littérature suit quatre lignes : les outils qui soutiennent les lecteurs pendant qu'ils lisent, les outils qui évaluent la lecture, les outils qui adaptent ou génèrent du texte pour le niveau d'un lecteur, et la question de mesure qui sous-tend les trois autres — ce qui rend un texte difficile, et si la **lisibilité** le capture. La lecture est un domaine à part entière, distinct de l'[[language-learning|apprentissage des langues]] (l'acquisition d'une autre langue), de l'[[english-education|enseignement de l'anglais]] (EAP/EFL/ESL, qui porte sa propre veine lecture-et-lisibilité) et de l'[[writing-education|enseignement de l'écriture]] (la composition de textes) : elle porte sur la rencontre du lecteur avec le texte. Les preuves sont prometteuses mais inégales — plusieurs pilotes, une poignée d'instruments validés, et peu de comparaisons contrôlées. Lorsqu'il n'existe qu'une petite étude, les preuves sont rapportées comme telles.

## Questions à examiner

- Lorsqu'un outil d'IA aide un étudiant à comprendre un passage, qu'est-ce que l'étudiant a appris — le contenu, une stratégie de lecture, ou comment demander la réponse à l'outil ? Laquelle de ces choses voulez-vous évaluer ?
- Les formules de lisibilité comptent les mots et les longueurs de phrases. Qu'est-ce que cela manque de l'expérience qu'un lecteur fait d'un texte, et que mesureriez-vous à la place ?
- Si l'IA peut réécrire n'importe quel texte au niveau de lecture d'un étudiant, le niveau lui-même cesse-t-il d'importer — ou l'étudiant doit-il quand même rencontrer des textes difficiles tôt ou tard ?
- Qui bénéficie d'une évaluation de lecture générée automatiquement : la charge de travail de l'[[teacher-role|enseignant]], la motivation de l'étudiant, ou la validité du score ? Les trois peuvent-elles s'améliorer à la fois ?
- La difficulté de lecture est aussi une question d'accessibilité. En quoi les outils destinés aux lecteurs en difficulté, aux apprenants [[multilingual-learning|multilingues]] et aux étudiants neurodivergents devraient-ils différer d'un assistant de lecture à usage général ?

## Introduction

L'enseignement de la lecture est une veine jeune de la recherche sur l'IA en éducation. La plupart des études sont petites et récentes, et elles se regroupent autour du texte plutôt qu'autour des lecteurs : générer un passage, le simplifier, le noter ou juger sa difficulté. La question qui les relie est de savoir si une machine peut dire à quel point un texte sera difficile pour un lecteur particulier, et si elle peut agir sur ce jugement sans retirer le travail que la lecture est censée accomplir.

Quatre lignes de travail apparaissent :

- **Soutenir le lecteur** pendant la lecture, y compris les outils motivationnels et compagnons.
- **Évaluer la lecture**, par des passages générés, des quiz et un [[ai-feedback-quality|retour d'information IA]] sur le travail de lecture.
- **Adapter et générer des textes** à un niveau cible, de la simplification aux supports différenciés.
- **Mesurer la lisibilité et la difficulté du texte**, la couche dont dépendent les trois autres.

## Soutenir les lecteurs pendant la lecture

Lire avec [[generative-ai|l'IA générative]] produit des résultats de compréhension incohérents — des gains dans une étude, aucun [[transfer-of-learning|transfert de connaissances]] dans une autre — et l'instrument AIR a été construit sur l'hypothèse que la variance réside dans les raisons pour lesquelles les lecteurs se tournent vers l'outil. Brann, Etgar et Sidi ont développé et validé une échelle de 21 items avec quatre motifs : orienté tâche, bien-être, traduction et moindre effort ([[air-scale-motivations-ai-reading-2026|Brann et al., 2026]]). Leurs preuves proviennent de 425 étudiants de l'enseignement supérieur britannique dans l'échantillon exploratoire et de 414 dans l'échantillon confirmatoire, avec des indices d'ajustement à CFI .95 et RMSEA .056. La distinction importe pour la pratique : un lecteur qui utilise l'outil pour terminer une tâche est dans une posture différente de celui qui l'utilise pour éviter l'effort, et le moindre effort est le motif que les auteurs signalent comme celui à surveiller pour un traitement superficiel.

C'est un résultat de mesure, pas une étude de résultats, et la distinction importe. Aucun [[rct|essai contrôlé]] d'un compagnon de lecture ne montre encore de gains de compréhension durables.

## Évaluer la lecture

L'évaluation de la lecture est l'endroit où l'IA apparaît le plus souvent comme un outil d'économie de travail. L'étude de cas pratique d'Almirabi a construit l'évaluation motivationnelle de la lecture médiée par l'IA autour de six quiz à choix multiples avec 53 étudiants d'EFL arabophones de premier cycle, passant d'un passage de manuel à des passages générés par l'IA, et d'une passation en ligne non surveillée à un papier surveillé ([[almirabi-ai-reading-assessment-motivation-2026|Almirabi, 2026]]). Les scores sont passés de 69.4 % au quiz de manuel à une moyenne de cycle de 76.5 %, l'agrégat d'IA étant 4.2 points au-dessus du quiz de manuel une fois les quiz non surveillés exclus. L'auteur est explicite sur le fait que la source du passage, la passation, la surveillance et la séquence n'ont pas été isolées et que la [[motivation]] n'a jamais été mesurée, si bien que les données sont compatibles avec un bénéfice motivationnel plutôt qu'une preuve de celui-ci.

Une deuxième étude va dans l'autre direction, traitant le retour d'information de l'IA comme un processus centré sur l'étudiant plutôt que comme une commodité de notation. Dans une quasi-expérience de deux mois avec 200 élèves de septième année à Shenzhen, un [[feedback|retour d'information]] soutenu par ChatGPT sur la lecture en chinois a produit un gain de 30.40 points sur une mesure de retour d'information et de 17.95 sur l'orientation vers le retour d'information, contre des baisses dans la classe de retour d'information conventionnel ([[chatgpt-feedback-orientation-chinese-reading-2026|Chen et al., 2026]]). Le mécanisme revendiqué est la [[feedback-literacy|littératie du retour d'information]], pas la compréhension, et la question de l'[[assessment|évaluation]] — si les scores signifient la même chose selon les conditions — reste ouverte.

## Lisibilité : ce qui rend un texte difficile

La lisibilité est la mesure la plus ancienne dans ce domaine et celle que l'IA déstabilise le plus. Un score Flesch–Kincaid ou Lexile estime la difficulté à partir de caractéristiques de surface, principalement la longueur des mots et des phrases. CLARA a été construit sur l'objection que deux histoires avec le même score peuvent exiger un travail cognitif, linguistique et socio-émotionnel différent : sa taxonomie développementale de 122 étiquettes a atteint une précision de chevauchement de 0.904 contre les références d'âge des éditeurs et un accord de 0.81 avec les classements d'éducateurs en aveugle, contre 0.603 pour la formule FKGL ([[clara-developmental-appropriateness-children-stories-2026|Yin et al., 2026]]). Le problème de [[assessment-validity|validité]] est le point central — une formule peut être fiable et mesurer quand même la mauvaise chose.

Deux autres études élargissent l'écart. Bird fusionne la classification par transformateur avec des caractéristiques de linguistique computationnelle pour placer la littérature anglaise à un Key Stage britannique, atteignant un F1 de 0.996 et conditionnant le résultat comme un outil pour les enseignants ([[bird-multimodal-educational-literature-2026|Bird, 2026]]). Clark et al. descendent entièrement sous la surface, mesurant des constructions aux coûts de traitement connus — les n-grammes de basse fréquence, les dépendances longues, les noms empilés, les verbes dénominaux, les sujets inanimés, les relatives objets réduites — et constatant que les modèles récents les sur-utilisent par rapport à leurs propres paraphrases préservant le sens et aux lignes de base humaines ([[clark-ai-generated-language-readability-2026|Clark et al., 2026]]). La lisibilité, sur la base de ces preuves, est une propriété des exigences de traitement du texte et de qui l'a produit, et non seulement de ses statistiques de longueur.

La conséquence pratique est qu'un score de niveau scolaire est une garantie faible sur n'importe quel texte, et une garantie particulièrement faible sur un texte écrit par l'IA.

La perception du public cible est désormais mesurable directement. [[thome-perceived-text-complexity-student-profiles-2025|Thome et al., 2025]] ont constitué un ensemble de 3,954 annotations de 193 lycéens allemands évaluant des phrases de guides d'orientation et de Wikipédia, et constaté que les lecteurs contredisaient la formule : 72.8% des annotations étaient « très facile » ou « facile » malgré des scores Flesch-Reading-Ease faibles de l'échantillon. L'analyse SHAP d'un modèle fondé sur les profils a montré que des caractéristiques des lecteurs pilotaient cette perception — langue parlée à la maison la plus influente (0.09), devant le genre (0.08) et la compétence en allemand auto-estimée (0.07) — si bien qu'un score de niveau scolaire manque non seulement les exigences de traitement du texte, mais aussi l'expérience de lecture dont il est question.


## Adapter et générer des textes

Le plus grand groupe d'études génère ou réécrit du texte pour un lecteur. Trois approches diffèrent par ce qu'elles contrôlent :

- **Génération contrôlée par niveau.** L'[[llm-training-and-fine-tuning|affinage]] de trois modèles 8B sur un [[curriculum-design|programme]] de lecture pour enfants conçu par des experts et des histoires de GPT-4o et Llama 3.3 70B a surpassé les deux modèles zero-shot plus grands sur les métriques de difficulté, avec des problèmes de sécurité négligeables ([[llm-children-reading-story-generation|Li et al., 2026]]).
- **Supports différenciés.** Un flux de travail GenAI à rôle prescrit pour les supports de lecture [[english-education|EAP]] a amélioré les résultats principalement en ajoutant des couches de soutien spécifiques à la maîtrise — gloses, découpage de phrases, indices rhétoriques, prompts critiques — plutôt qu'en changeant la complexité au niveau du passage, avec le plus grand effet chez les apprenants de haute maîtrise (d = 1.40) ([[genai-differentiated-eap-reading-materials-2026|Gao, 2026]]).
- **Lectures de cours sur mesure.** Un cours de troisième cycle a remplacé son manuel par des lectures à la demande adaptées à l'intérêt et au niveau de compréhension ; 24 étudiants les ont jugées utiles et 75 % ont convenu qu'ils avaient appris davantage, tandis que l'analyse des artefacts a trouvé une traçabilité manquante et des citations incohérentes ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]).

La simplification est la quatrième variante, et son goulot d'étranglement est l'évaluation plutôt que la génération. MuTSE associe un pipeline de génération prompt-par-modèle à un moteur d'alignement sémantique à plusieurs niveaux afin que les simplifications puissent être comparées et notées selon des critères pédagogiquement significatifs au lieu d'un seul chiffre de lisibilité ([[text-simplification-its|Roscan et al., 2026]]).

## Lecteurs, interfaces et accès

La lecture est aussi une question d'accès. AIRRI rend le matériel de devoir sous forme d'images perturbées pour déjouer les pipelines capture-d'écran-vers-[[llm|LLM]], et ses auteurs rapportent honnêtement le coût de lisibilité : les superpositions de rayures ont été jugées lisibles par les quatre experts en design et en typographie interrogés, tandis que l'erreur d'extraction atteignait 100 % ([[airri-machine-resistant-reading-interface-2026|Airri et al., 2026]]). Le compromis entre lisibilité machine et lisibilité humaine est une décision de conception avec un prix d'accessibilité.

Pour les apprenants dyslexiques, une revue guidée par [[meta-analysis-systematic-review|PRISMA]] de 72 études de 2018 à 2024 trouve l'IA utilisée pour la détection, le [[assistive-technology|soutien par technologies d'assistance]] et l'[[personalized-learning|apprentissage personnalisé]], mais avec une base de preuves fragmentée et peu de validation expérimentale ; l'IA générative y est minimalement représentée ([[dabaghi-ai-dyslexia-education-review-2026|Dabaghi et al., 2026]]). La difficulté de lecture est l'endroit où la [[neurodiversity|neurodiversité]] et l'[[accessibility|accessibilité]] rencontrent le programme général de lecture, et non un sujet séparé.

## Ce que les preuves montrent et ne montrent pas

La veine est riche en mesures et pauvre en résultats. Il existe des instruments validés (AIR), des modèles de difficulté validés (CLARA, Bird) et un ensemble croissant d'outils de génération et de simplification. Il existe très peu d'études contrôlées qui relient une intervention de lecture à des gains de compréhension, et plusieurs des études d'évaluation confondent la source du passage avec la passation ou la surveillance. Les tailles d'échantillon sont petites : 53 étudiants dans le cas d'évaluation de la lecture, 24 dans l'étude des lectures sur mesure, 200 élèves de septième année dans la plus grande quasi-expérience. Les preuves documentent un espace de conception, pas un effet établi.

La fluidité au début du primaire est l'exception jusqu'ici : dans une école, les élèves de première et deuxième année qui consignaient au moins 10 minutes par semaine pendant 6 semaines ont surpassé leurs pairs à faible dose (g = 0.56), un contraste de dosage plutôt qu'un essai ([[burns-ai-tutor-reading-growth-2026|Burns et Morton (2026)]]).

[[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et ses collègues (2026)]] ont testé si un chatbot aide les lecteurs dans une expérience préenregistrée auprès de 344 élèves de Year 10 dans sept écoles secondaires anglaises. Chaque élève lisait deux passages d'histoire avec un LLM, avec la prise de notes, ou avec les deux ; trois jours plus tard, la prise de notes seule dépassait le LLM en rétention littérale (d = 0.44), en compréhension (d = 0.38) et en rappel libre (d = 0.21). LLM + notes regagnait du terrain sur les deux premiers mais pas sur le rappel libre (beta = -0.08, p = .854). Les élèves jugeaient le LLM plus facile, plus utile et plus agréable tout en obtenant des scores plus faibles, et 25,63 % de ceux de la condition combinée copiaient plus de 70 % de sa formulation dans leurs notes.

## Idées fausses courantes

- **« Un score de lisibilité vous dit si un texte est approprié. »** Un score mesure des caractéristiques de surface ; la comparaison de CLARA avec FKGL et les caractéristiques de traitement de Clark et al. montrent toutes deux combien de la difficulté il laisse de côté.
- **« Un texte généré par l'IA est plus facile parce qu'il est généré pour un niveau. »** Les preuves vont dans l'autre sens pour la sortie des modèles : les modèles de pointe sur-utilisent des constructions associées à un coût de compréhension.
- **« Lire avec l'IA est un seul comportement. »** L'échelle AIR trouve quatre motifs distincts, et ils prédisent différents types d'utilisation.
- **« Si l'IA peut réécrire le texte, le niveau de lecture n'a plus d'importance. »** La différenciation change le soutien autour d'un passage plus que la complexité structurelle du passage, ce qui est une intervention différente de l'abaissement de son niveau.

## Concepts liés

- [[ai-education]] — le parapluie sous lequel ce domaine se situe
- [[language-learning]] — la lecture en L2 se recoupe, mais l'acquisition y est l'objet
- [[writing-education]] — le versant composition de la littératie
- [[english-education]] — la lecture et la lisibilité en EAP/EFL/ESL
- [[educational-nlp]] — la couche de mesure du texte dont dépend la lisibilité
- [[assessment]] — l'évaluation de la lecture et la validité des scores
- [[motivation]] — pourquoi les lecteurs utilisent l'IA, et ce que cela fait au traitement
- [[scaffolding]] — les couches de soutien dans les supports de lecture différenciés
- [[neurodiversity]] — la dyslexie et la difficulté de lecture
- [[accessibility]] — le texte lisible par l'humain contre le texte lisible par la machine
- [[generative-ai]] — la technologie derrière les textes générés et adaptés

## Articles liés

- [[kreijkes-llm-note-taking-reading-comprehension-2026]] — Usage du LLM, prise de notes et compréhension en lecture au secondaire : la comparaison randomisée
- [[air-scale-motivations-ai-reading-2026]] — une échelle validée des motifs de lecture avec la GenAI
- [[almirabi-ai-reading-assessment-motivation-2026]] — l'évaluation de la lecture médiée par l'IA dans une classe d'EFL
- [[genai-differentiated-eap-reading-materials-2026]] — les supports de lecture EAP différenciés
- [[llm-children-reading-story-generation]] — les histoires de lecture pour enfants contrôlées par niveau
- [[text-simplification-its]] — l'évaluation de la simplification de texte pour le tutorat
- [[clara-developmental-appropriateness-children-stories-2026]] — la difficulté développementale au-delà des formules de lisibilité
- [[bird-multimodal-educational-literature-2026]] — classer la littérature par Key Stage
- [[clark-ai-generated-language-readability-2026]] — pourquoi le langage généré par l'IA est plus difficile à lire
- [[sidorkin-ai-generated-course-readings-2026]] — les lectures de cours générées par l'IA sur mesure
- [[airri-machine-resistant-reading-interface-2026]] — les interfaces de lecture résistantes à la machine et leur coût de lisibilité
- [[chatgpt-feedback-orientation-chinese-reading-2026]] — le retour d'information ChatGPT dans la lecture au secondaire
- [[dabaghi-ai-dyslexia-education-review-2026]] — l'IA pour les apprenants dyslexiques
