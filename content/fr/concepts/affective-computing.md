---
title: "Informatique affective"
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-10T02:17:25-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, learning-analytics, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/affective-computing
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'informatique affective** en éducation utilise des signaux physiologiques et comportementaux pour percevoir l'émotion de l'apprenant et adapter l'enseignement — voir [[affective-text-wearable-student-health]], [[multimodal-affective-its-presentation]] et [[kar-mathbuddy-affective-math-tutoring-2025]]. La base de connaissances documente aussi les risques émotionnels de l'[[student-ai-interaction|interaction avec l'IA]], notamment [[sycophantic-ai-social-interaction-2026]] et [[shame-guilt-ai-regulation-computing-education]].

## Questions à examiner

- Si un ordinateur pouvait percevoir que vous êtes frustré, déconcerté ou ennuyé, et adapter son [[teacher-role|enseignement]] à votre humeur, en quoi cela pourrait-il améliorer votre apprentissage — et en quoi pourrait-il se tromper sur vous ?
- Le tutorat tenant compte des émotions peut stimuler l'engagement, mais une automatisation qui semble empathique comporte des risques : dépendance excessive, dépendance parasociale et inquiétudes en matière de vie privée liées à un suivi continu. Où passe la frontière entre être compris et être surveillé ?
- Une IA qui vous affirme et vous « comprend » peut faire du bien — mais la [[research-methods-aied|recherche]] montre qu'une telle IA peut déplacer les relations réelles et éroder le jugement critique. En quoi se sentir soutenu diffère-t-il d'être réellement soutenu dans un contexte d'apprentissage ?
- L'expression faciale et le texte peuvent tous deux signaler une émotion. Un tuteur devrait-il adapter son enseignement à votre état émotionnel — et à quels types d'inférences émotionnelles voudriez-vous qu'il réagisse, plutôt qu'il n'en tienne jamais compte ?
- Si l'IA soulage votre frustration en réduisant trop facilement la difficulté, vous pourriez cesser de lutter de manière productive — or la lutte est souvent le lieu où se produit l'apprentissage profond. Comment un tuteur devrait-il décider quand réconforter et quand stimuler ?
- Un suivi affectif continu soulève de véritables questions de vie privée. Dans quelles conditions accepteriez-vous qu'une IA lise vos émotions afin d'adapter votre apprentissage ?

## Introduction

### Percevoir l'émotion pour adapter l'enseignement

L'informatique affective vise à rendre les systèmes d'IA conscients des émotions, afin qu'ils puissent répondre à ce que ressentent les apprenants, et pas seulement à ce qu'ils font. En éducation, cela signifie percevoir la frustration, la confusion, la confiance, l'ennui ou l'engagement, et adapter l'enseignement en conséquence. [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] illustre cette approche en modélisant l'affect à partir de deux modalités — le texte conversationnel et l'expression faciale en temps réel — et en faisant correspondre l'état émotionnel agrégé à des stratégies [[pedagogy|pédagogiques]] avant de rédiger les [[prompt-engineering|invites]] adressées au tuteur.


Les signaux eux-mêmes sont ambigus : un seul canal expressif ne permet pas de distinguer de manière fiable la détresse, l'effort, l'embarras, la fatigue ou la présentation stratégique de soi, sans la personne, la tâche, la culture et la situation qui les ont produits — une « interprétation contextuelle insuffisante » — si bien qu'un classificateur qui ne lit que le signal visible risque de produire des recommandations plausibles mais pédagogiquement erronées ([[ai-emotion-regulation-sport-exercise-2026|Zhang et al. (2026)]]).

- **Soutien émotionnel et réflexif des LLM en mathématiques au collège :** [[mindful-llm-math-tutoring-2026|Rief et al. (2026)]] ont greffé la pleine conscience sur un [[intelligent-tutoring|tuteur]] d'algèbre destiné à des élèves de 7e année, par le biais de conversations dynamiques, d'exercices de respiration et d'un langage de rétroaction attentif aux erreurs. Dans un petit [[rct|essai contrôlé randomisé]] en classe (42 participants ayant mené l'étude à terme sur 252), la version attentive est parvenue à un apprentissage de l'algèbre comparable en moins de temps et avec moins d'indices demandés que le seul soutien cognitif — une efficacité d'apprentissage plus élevée et une [[help-seeking|recherche d'aide]] plus équilibrée — bien que la réduction de l'anxiété en mathématiques mesurée par l'échelle état n'ait pas différé significativement entre les conditions.

### Les bénéfices et les risques

Le tutorat tenant compte des émotions peut produire des gains mesurables, mais la même sophistication comporte des risques :

- **Bénéfices.** Prendre en compte l'état émotionnel peut améliorer l'[[student-engagement|engagement]] et les résultats ; les apprenants qui se sentent compris persévèrent plus longtemps, et reconnaître précocement la frustration permet d'ajuster à temps l'[[scaffolding|étayage]] ou l'[[adaptive-learning|apprentissage adaptatif]].
- **Risques.** Une automatisation qui semble empathique peut favoriser le [[cognitive-offloading|délestage cognitif]] et la dépendance parasociale, masquer un véritable désengagement [[metacognition|métacognitif]], et soulever des inquiétudes en matière de [[privacy|vie privée]] du fait d'un suivi affectif continu. La [[ai-sycophancy|sycophancie de l'IA]] est un risque affectif central : une IA qui flatte sur le plan émotionnel et qui affirme au lieu de mettre au défi peut éroder le jugement critique et même déplacer les véritables relations humaines — [[sycophantic-ai-social-interaction-2026|Ibrahim et al.]] montrent qu'une IA sycophante a conduit les utilisateurs à chercher des conseils personnels auprès de l'IA presque aussi souvent qu'auprès d'amis proches et de membres de leur famille, avec une satisfaction moindre dans les interactions réelles. La [[ai-fatigue-academic-contexts|fatigue liée à l'IA dans les contextes académiques]] et les [[ai-campus-wellbeing-tools|outils de bien-être sur le campus fondés sur l'IA]] relient en outre l'IA affective au [[well-being|bien-être]] de l'apprenant.

- **L'engagement n'est pas un indicateur de substitution de l'apprentissage.** Une étude de perception cérébrale a constaté qu'une interface contrainte et adaptative a accru l'engagement cognitif (p = .018), tandis que l'agent conversationnel sans restriction a produit des gains d'apprentissage plus élevés (p < .03, d > 0.80) : un signal d'affect ou d'engagement peut donc éloigner du résultat qu'il est censé servir ([[socratic-nuclear-ai-learning|Clin Deffarges et al. (2026)]]).

### L'informatique affective et l'AIED au sens large

L'informatique affective se situe à l'intersection du [[affective-tutoring|tutorat affectif]] (son application pédagogique), de la [[student-modeling|modélisation de l'apprenant]] (représenter l'apprenant entier, y compris ses émotions) et de l'[[learning-analytics|analytique de l'apprentissage]] (dériver des signaux des données de l'apprenant). Elle est liée à la conception des [[intelligent-tutoring|systèmes de tutorat intelligent]] et à la [[pedagogical-safety|sécurité pédagogique]] — le principe selon lequel l'IA doit soutenir, et non manipuler, l'émotion de l'apprenant.

- **Suivi des émotions en classe, en temps réel et en périphérie.** [[emotion-aware-classroom-iot-monitoring-2026|Nguyen et al. (2026)]] ont construit un système d'évaluation de la qualité de la classe tenant compte des émotions, qui fait entrer l'informatique affective dans des contextes authentiques et à grande échelle. Conçu pour des **dispositifs IoT et de périphérie**, le système traite la répartition de charge et la latence tout en coordonnant plusieurs agents pour capter en temps réel les schémas émotionnels et d'engagement des élèves. Il a été évalué sur le **Classroom Emotion Dataset** (1,500 images étiquetées et 300 vidéos de classe issues de vraies classes vietnamiennes du primaire et du secondaire), avec une attention portée à l'interaction affective multi-personnes en conditions réelles — une démonstration du passage de la reconnaissance des émotions, de modèles de laboratoire à un suivi de classe déployable, accompagnée des considérations de vie privée et de [[pedagogical-safety|sécurité pédagogique]] qu'un tel suivi soulève.
- **Agents d'évaluation émotionnellement intelligents.** [[aivaluate-anxiety-assessment-2026|AIvaluate]], un [[conversational-ai|agent conversationnel]] émotionnellement intelligent augmenté par [[llm|LLM]], a réduit l'anxiété et la pression sociale des étudiants pendant des évaluations fondées sur la performance, tout en préservant l'[[usability-research|utilisabilité]].
- **L'empathie conçue par l'invite, et non par la perception.** Le soutien affectif n'exige pas la détection de l'affect : [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] ont obtenu une grande différence de *perception de l'empathie* (21.27 contre 18.24 ; r = 0.53) entre deux agents d'IA de [[physics-education|physique]] qui ne différaient que par le rôle et les mouvements conversationnels spécifiés dans l'invite — des ouvertures par prise de perspective (« Vous posez cette question parce que… »), un diagnostic des [[misconceptions|idées fausses]], et une vérification de la compréhension à la fin de chaque tour — le modèle, la plateforme et la température restant constants. Cela constitue un utile contrepoids à l'informatique affective fondée sur les capteurs : la qualité émotionnelle perçue d'un [[pedagogical-agent|agent pédagogique]] peut être conçue dans le script d'interaction, tout en rappelant aussi aux concepteurs que l'empathie perçue est un construit auto-déclaré plutôt qu'une preuve d'une authentique compréhension affective ([[student-ai-interaction]]).
- **Des alertes qui signalent un enseignant au lieu d'adapter un tuteur.** [[ai-emotional-alerts-teachers-mathematics-classroom-2026|Swidan (2026)]] a déployé Dash4Emotion dans une classe de géométrie du lycée, où des rectangles encadrés de rouge marquaient les élèves considérés comme éprouvant une émotion négative ; sur vingt épisodes identifiés (cinq rapportés), ce qui a fait changer l'engagement est la réaction de l'enseignant à une alerte, et non l'alerte elle-même. L'enjeu de conception est que la perception de l'affect peut alimenter une décision humaine au lieu du prochain geste d'un tuteur adaptatif — avec la mise en garde propre à l'étude : elle ne rend compte d'aucune validation de la détection des expressions faciales, si bien que le signal est une invitation à l'interprétation par l'enseignant plutôt qu'une preuve de l'état intérieur d'un élève.
## Concepts liés
- [[anxiety-and-stress]]
- [[cognitive-offloading]]
- [[student-experience]]
- [[k-12]]
- [[feedback]]
- [[intelligent-tutoring]]
- [[learning-design]]
- [[affective-tutoring]]
- [[student-modeling]]
- [[math-education]]
- [[open-source]]
- [[llm-training-and-fine-tuning]]
- [[ai-sycophancy]]
- [[social-emotional-learning]] — Apprentissage socioémotionnel
## Articles liés
- [[ai-emotional-alerts-teachers-mathematics-classroom-2026]] — Réagir aux alertes émotionnelles générées par l'IA : l'intervention des enseignants et l'engagement des élèves dans la classe de mathématiques
- [[wang-teacher-student-centered-agents-physics-2026]] — La perception de l'empathie par les rôles d'agents conçus par l'invite dans l'apprentissage de la physique (Wang et al. 2026)
- [[mindful-llm-math-tutoring-2026]] — Au-delà de la résolution de problèmes : les grands modèles de langue pour un soutien émotionnel et réflexif dans l'apprentissage des mathématiques
- [[emotion-aware-classroom-iot-monitoring-2026]] — Évaluation de la qualité de la classe tenant compte des émotions par un suivi en temps réel fondé sur l'IoT (Nguyen et al. 2026)
- [[ai-campus-wellbeing-tools]]
- [[ai-fatigue-academic-contexts]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[sycophantic-ai-social-interaction-2026]]
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate : évaluation de l'anxiété des étudiants augmentée par les LLM (2026)
- [[socratic-nuclear-ai-learning]] — Socrate est devenu nucléaire : comparer les stratégies d'interaction pour l'IA dans l'apprentissage

- [[ai-emotion-regulation-sport-exercise-2026]] — Recadrer la régulation des émotions assistée par l'IA : les signaux ont besoin de contexte, non d'une interprétation autonome
