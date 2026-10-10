---
connected_resources: [teacherserver]
title: "Génération automatisée de questions"
created: "2026-05-08T10:44:35-04:00"
updated: "2026-10-10T03:05:33-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La génération automatisée de questions (AQG)** — l'usage de l'IA, en particulier du traitement automatique des langues et des [[llm|grands modèles de langue (LLM)]], pour produire automatiquement des items d'[[assessment|évaluation éducative]] (questions à choix multiples, réponses courtes, textes à trous, code et questions de performance) à partir d'un matériau source ou d'objectifs d'apprentissage. L'AQG rend possible l'évaluation à grande échelle — produire des quiz [[formative-assessment|formatifs]], des exercices adaptatifs et des items d'entraînement — mais la qualité varie énormément selon les types d'items et exige une validation pour éviter les questions hallucinées ou mal calibrées. C'est un composant central de l'[[automated-assessment|évaluation automatisée]] et un levier clé de l'[[adaptive-learning|apprentissage adaptatif]] et de l'[[personalized-learning|apprentissage personnalisé]].

## Questions à examiner

- La génération automatisée de questions produit des items d'évaluation à partir d'un matériau source, à grande échelle — mais cette page avertit que la qualité varie énormément selon les types d'items. Avant de lire, quel type d'item devineriez-vous que l'IA produit le plus sûrement : les questions à choix multiples, les réponses courtes ou le code — et pourquoi ?
- Le défi central est le contrôle de la qualité : les LLM peuvent générer des questions factuellement incorrectes. Un pipeline a réduit l'hallucination de 62% en ajoutant une boucle de génération puis de validation-affinage. Pourquoi, à votre avis, demander à l'IA de valider ses propres questions les améliorerait-elle réellement plutôt que de simplement entériner ses propres productions ?
- La [[research-methods-aied|recherche]] montre que les questions générées peuvent pencher vers les niveaux inférieurs de la pensée (la mémorisation) à moins d'être explicitement conçues pour des objectifs de niveau supérieur. Si vous utilisiez l'IA pour construire des items d'entraînement, comment sauriez-vous s'ils entraînent une compréhension véritable ou seulement la mémorisation ?
- Le calibrage de la difficulté compte : les estimations de difficulté de l'IA sont fortement corrélées à la performance des étudiants, mais la page met en garde contre un usage abusif à enjeux élevés. Quand une question que l'IA juge de « bonne difficulté » serait-elle néanmoins la mauvaise question à poser à un apprenant donné ?
- La génération sensible à l'[[accessibility|accessibilité]] construit des questions adaptées aux apprenants sourds et malentendants, affinées en partenariat avec la communauté cible. Que suggère cet exemple sur la raison pour laquelle la génération de questions ne peut pas être traitée comme un problème purement technique ou relevant du seul contenu ?

## Introduction

La génération automatisée de questions importe parce que les items d'évaluation sont coûteux à créer à la main, et que l'IA peut les produire rapidement et à grande échelle. Cependant, la recherche de la base de connaissances montre que les items générés doivent être validés du point de vue de l'exactitude, de la pertinence et de la difficulté, et que les différents types d'items (QCM, réponses courtes, code) varient quant à la fiabilité avec laquelle ils peuvent être générés. L'AQG se situe donc à l'intersection de l'[[generative-ai|IA générative]], du [[educational-nlp|TAL éducatif]] et de la [[educational-measurement|mesure en éducation]].

## Approaches to question generation

La recherche de la base de connaissances illustre plusieurs approches :

- **Les pipelines générer-puis-valider :** [[generate-then-validate-question-gen|Generate-Then-Validate]] introduit une boucle de génération → validation → affinage qui réduit l'hallucination des LLM de 62% par rapport à la génération directe, atteignant 89% d'exactitude sur les jeux de données [[stem-education|STIM]] et une amélioration de 23% de la pertinence. L'étape de validation filtre les items invalides ou de faible qualité, et les items échoués déclenchent une régénération avec des invites correctives.
- **La génération fondée sur le traçage des connaissances :** [[kt4eqg-personalized-question-generation|KT4EQG]] génère des questions d'exercice personnalisées guidées par le [[knowledge-tracing|traçage des connaissances]], adaptant les items à l'état des connaissances de chaque apprenant plutôt qu'en générant des questions génériques.
- **Les distracteurs liés à des idées fausses comme étiquettes diagnostiques :** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] associe chaque distracteur à une seule idée fausse extraite par exploration et marque exactement une option correcte, si bien qu'un item est généré avec ses cibles diagnostiques intégrées et peut ensuite être noté de manière déterministe sans appel au [[llm|LLM]] — environ 7.6 secondes et à peu près \\$0.005 par tour sur le déploiement réel des auteurs, contre environ 32 secondes et \\$0.015 pour un tour de réponse courte notée par LLM. La liaison ne vaut que ce que valent les étiquettes d'idées fausses sous-jacentes, puisque les [[misconceptions|idées fausses]] extraites correspondaient aux idées fausses cibles avec un F1 ≈ 0.56, et ses choix d'items servaient une compétence réellement faible 0.72 du temps.
- **La génération sensible à la profondeur cognitive :** [[llm-educational-question-cognitive-depth|Évaluer la profondeur cognitive des questions générées par LLM]] examine si les items générés sollicitent la [[critical-thinking|pensée de haut niveau]] (création, évaluation) ou seulement la mémorisation, rejoignant la taxonomie de Bloom et la [[educational-measurement|mesure en éducation]].
- **Les problèmes de cas à erreurs intégrées pour une évaluation répétée :** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al. (2026)]] ont généré de nouveaux problèmes de raisonnement diagnostique hiérarchique (HDR) — de courts cas portant des erreurs délibérément intégrées que les étudiants doivent trouver et expliquer — et ont constaté que les items rédigés par GPT-4o égalaient ceux rédigés par des humains sur la cohérence interne (α de Cronbach = 0.78 dans les deux cas) et la difficulté, les tests exacts de Fisher ne trouvant aucune différence significative de distribution des scores sur 100 participants. Le format associe une exigence de [[critical-thinking|pensée de haut niveau]] à une réponse contrainte, si bien que les réponses convergent et la notation devient reproductible. La motivation générative est la réutilisation des items : réutiliser un même cas invite à la mémorisation et à la réutilisation des réponses, alors que des cas générés structurellement équivalents mais contextuellement différents suppriment le biais d'item lors d'une nouvelle mesure.
- **Les pipelines [[pedagogy|pédagogiques]] :** [[slidesqaqa-pedagogical-question-generation|Génération de questions-réponses à partir de diaporamas]] utilise un pipeline à plusieurs étapes pour produire des questions pédagogiquement solides à partir des supports de cours.
- **La génération sensible à l'accessibilité :** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]] conçoivent un système de génération de questions fondé sur les LLM pour les [[inclusive-learning|apprenants sourds et malentendants]], introduisant des stratégies de questions visuelles et émotionnelles qui visent les moments de difficulté visuelle ou émotionnelle dans une vidéo, et affinant itérativement les questions avec la communauté cible pour garantir l'accessibilité linguistique.
- **Les systèmes fondés sur la RAG avec intervention humaine :** [[code-gen|CODE-GEN]] combine la [[rag|génération augmentée par la recherche documentaire]] et une revue [[human-in-the-loop-ai|avec intervention humaine]] pour produire des évaluations à choix multiples [[automated-assessment|automatisées]].
- **Les [[benchmark|référentiels]] et l'évaluation :** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] fournit un référentiel d'énigmes scientifiques et mathématiques pour évaluer les systèmes de génération de questions et de raisonnement.

## Validation and quality

Le défi central de l'AQG est le **contrôle de la qualité** :

- **Évaluer le processus de résolution, et non l'énoncé :** [[proiqa-math-item-quality-assessment-2026|ProIQA]] soutient que l'examen de la qualité d'un item devrait suivre ce que fait un expert — simuler la solution — et construit un arbre de raisonnement généré par LLM pour chaque item, vérifié quant à son exactitude mathématique à 90.38–97.80%, puis encode sa structure de dépendance avec un réseau de neurones sur graphe [[machine-learning|d'apprentissage automatique]] en plus d'une vue portant sur le seul énoncé. Il rapporte des gains moyens de 7.5% sur la deuxième meilleure méthode en évaluation des concepts, 6.3% en estimation de la difficulté et 19.5% en évaluation des compétences, et son analyse d'erreurs nomme un mode de défaillance à surveiller : un arbre de raisonnement logiquement correct mais structurellement superficiel fait paraître facile un item difficile.
- **Le risque d'hallucination :** les LLM peuvent générer des questions factuellement incorrectes. [[generate-then-validate-question-gen|Generate-Then-Validate]] montre qu'une phase de validation dédiée réduit fortement ce risque, et le [[hallucination-risk|risque d'hallucination]] est une préoccupation reconnue partout.
- **Le calibrage de la difficulté :** les questions générées doivent être calibrées sur une difficulté appropriée. La [[llm-difficulty-calibration-programming-exams-2026|recherche sur le calibrage de la difficulté]] montre que les estimations de difficulté de l'IA sont fortement corrélées à la performance des étudiants (par ex. rho ≈ −0.87), ce qui permet une meilleure sélection des items — tout en mettant en garde contre un [[ai-misuse-learning-harm|usage abusif]] à enjeux élevés. [[razavi-powers-item-difficulty-llm-2026|Razavi et Powers (2026)]] prolongent ce travail aux items de mathématiques et de lecture du CM1–CM2 (N = 5170) calibrés selon le modèle IRT de Rasch : les évaluations de difficulté en zéro-coup de GPT-4o étaient modérément à fortement corrélées aux difficultés réelles (r = 0.83 en mathématiques, r = 0.81 en lecture) mais variaient selon le niveau scolaire, alors qu'une approche fondée sur les caractéristiques — caractéristiques cognitives et linguistiques extraites par LLM et introduites dans des modèles arborescents — atteignait des corrélations allant jusqu'à r = 0.87. L'extraction structurée de caractéristiques de cette étude (par ex. complexité syntaxique, [[cognitive-offloading|charge cognitive]], caractère trompeur des distracteurs) et son flux de travail pratique en sept étapes offrent un patron pour calibrer les items générés, tandis que son constat de restriction d'étendue pour les premiers niveaux et ses réserves de généralisabilité mettent en garde contre un usage à enjeux élevés.
- **Les étiquettes de difficulté générées peuvent constituer un échec de validité de construit, et non une erreur de calibrage.** Sur 378 items générés, les étiquettes Facile/Moyen/Difficile du modèle suivaient le niveau de Bloom co-généré avec elles (ρ=0.90) et la forme de surface — la longueur moyenne de l'énoncé passant de 15.9 à 22.1 à 30.2 mots — mais ne corrélaient avec la difficulté empirique des items qu'à ρ=0.06 sur 7.888 réponses de 54 étudiants, d'où la nécessité de calibrer les métadonnées générées sur les données de réponses plutôt que de faire confiance aux étiquettes co-générées ([[student-llm-use-ai-question-difficulty-data-science-2026|An et Wang (2026)]]).
- **La validation psychométrique de terrain à grande échelle :** [[assessing-quality-ai-generated-exams-field-2025|Évaluer des examens générés par IA]] valide un pipeline d'AQG à affinage itératif (générer→juger→réviser, de type Self-Refine) dans 91 classes universitaires réelles (environ 1.686 étudiants). L'analyse [[item-response-theory|IRT]] bayésienne hiérarchique 2PL montre que les questions générées par l'IA sont à la hauteur des items d'examens standardisés rédigés par des experts — un peu plus faciles (β̄ = −0.45 contre 0.35) mais légèrement plus discriminantes (ᾱ = 1.3 contre 1.2), avec un pic d'information de test plus élevé (fiabilité 0.79 contre 0.72) — démontrant que l'AQG peut produire à grande échelle des évaluations adaptées au cours et psychométriquement solides.
- Une parité psychométrique moyenne peut masquer des insuffisances au niveau des items : une revue de cadrage de 153 rapports sur l'enseignement médical a constaté que la génération d'items par IA égalait parfois la difficulté et la discrimination humaines, alors que dans une comparaison en physiologie seuls 9 des 40 items de ChatGPT remplissaient tous les critères idéaux contre 19 des 40 items du corps professoral ([[genai-medical-education-transformation-review-2026|Zhao et al. (2026)]]).
- **La reconnaissabilité dans un examen réel, et ce que la revue retire effectivement :** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] ont placé 30 QCM générés par IA et 30 QCM de l'examen national d'agrément dans un examen noté sur tablette passé par 119 étudiants en [[medical-education|médecine]] de cinquième année, les items d'IA ayant été rédigés à partir des supports du cours par ChatGPT-4o et Gemini 1.5 Pro via un panel d'experts qui en a accepté 82% et en a éliminé 18.2% comme inutilisables. L'attribution de source par les étudiants ne différait pas entre les deux types d'items, et la difficulté des items, la distribution des distracteurs et l'alignement perçu sur le programme étaient statistiquement indistinguables — un résultat de *reconnaissance* plutôt qu'un résultat de qualité, et la raison pour laquelle les auteurs décrivent le bénéfice du flux de travail comme un déplacement de l'effort des éducateurs, de la rédaction vers la revue, plutôt que sa suppression. Une différence exploratoire a subsisté : les items de Gemini étaient plus difficiles que les items de l'examen d'agrément (p = 0.028), alors que ceux de ChatGPT ne l'étaient pas (p = 0.984).
- **La dépendance à la tâche :** la fiabilité de la génération varie selon le type d'item. La [[cong-confidence-asag-2026|notation des réponses courtes]] et l'[[self-referential-l2-writing-llm-assessment|évaluation analytique de l'écriture]] montrent que les items à réponse ouverte et les items d'écriture sont plus difficiles à générer et à noter de façon fiable que les items structurés.
- **La qualité cognitive :** l'[[llm-educational-question-cognitive-depth|évaluation de la profondeur cognitive]] montre que les items générés peuvent pencher vers les niveaux inférieurs de la pensée à moins d'être explicitement conçus pour des objectifs de niveau supérieur.
- **L'étiquetage automatique du niveau cognitif ne se transpose pas aux items générés.** Un classificateur de la taxonomie de Bloom entraîné sur une banque d'items curatée s'effondrait sur les questions générées par IA — macro F1 de 0.88 en distribution à 0.48 et 0.20 hors distribution — parce que les items générés comptent en moyenne bien plus de mots (18.2 contre 9.3) et ne partagent que 10.5% en médiane de leurs verbes déclencheurs de Bloom avec le corpus curaté, contre 35.1% pour un ensemble plus proche ; le réentraînement sur des données hors distribution étiquetées constituait le gain individuel le plus important, avec un seuil d'environ N > 1.000 échantillons étiquetés ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

## Role in adaptive and personalized learning

L'AQG est un levier clé de l'[[adaptive-learning|apprentissage adaptatif]] et de l'[[personalized-learning|apprentissage personnalisé]] : elle produit les grandes banques d'items dont se nourrissent les tuteurs adaptatifs et — combinée au [[knowledge-tracing|traçage des connaissances]] ou à la [[student-modeling|modélisation de l'apprenant]] — peut générer des items adaptés aux états de connaissance des apprenants individuels ([[kt4eqg-personalized-question-generation|KT4EQG]]). [[taklif-ai-interest-based-personalized-assignments|La personnalisation fondée sur les intérêts]] montre que l'AQG peut aussi adapter les questions aux intérêts des étudiants, et pas seulement à la difficulté.

## Implications for AI in education

- **Générer puis valider :** associez toujours la génération à une étape de validation/affinage pour contrôler l'hallucination et garantir la pertinence.
- **Assortir le type d'item à la fiabilité :** utilisez l'AQG pour les types d'items structurés (QCM, textes à trous, code) où elle est la plus fiable, et appliquez une validation rigoureuse aux items à réponse ouverte et d'écriture.
- **Concevoir pour la profondeur cognitive :** les invites et les pipelines doivent viser la pensée de haut niveau, et pas seulement la mémorisation, pour soutenir un apprentissage véritable.
- **Calibrer la difficulté :** utilisez les estimations de difficulté de l'IA pour sélectionner des items d'un défi approprié, avec une validation solide avant tout usage à enjeux élevés.
- **Personnaliser via les modèles d'apprenant :** combinez l'AQG au traçage des connaissances et aux modèles d'intérêts pour générer des items adaptatifs et individualisés.

## Concepts liés

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## Articles liés

- [[genai-medical-education-transformation-review-2026]] — Revue de cadrage de 153 rapports sur l'enseignement médical portant sur la génération d'items par IA comparée à la qualité des items du corps professoral
- [[assessing-quality-ai-generated-exams-field-2025]] — Validation de terrain à grande échelle de la qualité des examens générés par IA via l'IRT
- [[generate-then-validate-question-gen]] — Génération de questions de type Generate-Then-Validate
- [[kt4eqg-personalized-question-generation]] — Génération personnalisée de questions par traçage des connaissances
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Génération de questions par LLM pour les apprenants sourds et malentendants
- [[llm-educational-question-cognitive-depth]] — Profondeur cognitive des questions générées par LLM
- [[slidesqaqa-pedagogical-question-generation]] — Génération pédagogique de questions-réponses à partir de diaporamas
- [[code-gen]] — CODE-GEN : génération de questions avec intervention humaine fondée sur la RAG
- [[nsmq-riddles-science-math-benchmark]] — Référentiel NSMQ Riddles
- [[taklif-ai-interest-based-personalized-assignments]] — Devoirs personnalisés fondés sur les intérêts
- [[llm-difficulty-calibration-programming-exams-2026]] — Calibrage de la difficulté fondé sur les LLM
- [[self-referential-l2-writing-llm-assessment]] — Évaluation analytique de l'écriture auto-référentielle
- [[cross-dataset-bloom-question-classification]] — Classification des questions selon Bloom entre jeux de données
- [[llm-chatbots-cs-multiple-choice]] — Chatbots LLM et items à choix multiples d'informatique
- [[socratic-tests-conversational-assessment]] — Tests socratiques : évaluation conversationnelle
- [[llm-turing-test-italian-legal-exams-2026]] — Test de Turing par LLM dans des examens de droit italiens
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[automated-constructive-assessment-hdr-llm-2026]] — Automating Constructive Assessment with Large Language Models: Toward Scalable and Repeated Evaluation of Practical Competence
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Les étudiants ne pouvaient distinguer les QCM générés par IA des items d'examen d'agrément dans un examen noté, et 18.2% des items générés ont été éliminés en revue (Vogt et al. 2026)
