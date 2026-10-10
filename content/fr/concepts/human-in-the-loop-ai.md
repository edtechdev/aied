---
title: "Humain dans la boucle"
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-10T03:26:16-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/human-in-the-loop-ai
source_updated: "2026-10-03T03:00:33-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Humain dans la boucle** — le patron de conception dans lequel les [[ai-technologies|systèmes d'IA]] éducatifs entrelacent stratégiquement la génération automatisée et le jugement d'un expert humain, préservant la qualité et la sécurité [[pedagogy|pédagogiques]] tout en permettant la montée en charge de la production. Plutôt que d'automatiser pleinement l'évaluation, la rétroaction ou l'enseignement, l'humain dans la boucle maintient un humain (enseignant, expert de la discipline ou apprenant) dans la boucle de décision là où son jugement a la valeur marginale la plus élevée — pour évaluer la qualité, trancher les cas limites et protéger l'[[agency|autonomie]] et la sécurité de l'apprenant. La question de conception centrale n'est pas *s'il faut* inclure des humains, mais *où*, dans le pipeline, leur supervision est la plus précieuse et la moins remplaçable.

## Questions à examiner

- La question de conception centrale de l'humain dans la boucle n'est pas de savoir s'il faut inclure des humains, mais où, dans le pipeline, leur jugement a le plus de valeur. Dans un système d'évaluation ou de rétroaction par l'IA, à quel moment insisteriez-vous pour qu'un humain reste dans la boucle ?
- Les études sur la génération de questions par l'IA ([[automated-question-generation|génération automatisée de questions]]) ont montré que les ordinateurs traitent bien la clarté et la validité, mais que des humains restent nécessaires pour des distracteurs signifiants et une bonne rétroaction. Pourquoi certains pans du jugement éducatif résistent-ils à l'automatisation ?
- Une évaluation a montré que trois LLM produisaient des recommandations d'accompagnement étudiant incohérentes et peu sensibles aux besoins — concluant qu'un jugement humain reste nécessaire avant que l'IA ne se prononce sur les étudiants. Lorsqu'une IA « recommande » un accompagnement pour un étudiant en difficulté, que peut-il se passer de fâcheux si aucun humain ne l'examine ?
- La page suggère que les humains et les algorithmes repèrent différents types de problèmes — automatiser ce qui est précisément vérifiable, préserver le jugement là où la nuance est irremplaçable. Où se situe, dans votre propre pratique, la frontière entre les deux ?
- Maintenir un humain dans la boucle est présenté comme une protection de l'autonomie et de la sécurité de l'apprenant, et pas seulement de la qualité. Comment une automatisation complète pourrait-elle modifier insidieusement le sentiment qu'ont les étudiants de savoir qui est responsable de leurs apprentissages ?
- Si l'IA devient plus autonome, la supervision humaine est décrite comme un garde-fou de sécurité central. À quel niveau d'autonomie de l'IA vous sentiriez-vous mal à l'aise — et qu'est-ce que ce malaise vous apprend sur l'endroit où doit se situer la supervision ?

## Introduction

L'humain dans la boucle est une réponse aux limites et aux risques d'une IA pleinement autonome en éducation ([[ai-education|l'IA en éducation]]) : les systèmes automatisés peuvent générer à grande échelle mais sont dépourvus du jugement contextuel, [[ethics|éthique]] et pédagogique qu'apportent les enseignants et les experts. Deux mises en œuvre récentes illustrent des architectures distinctes :

L'accompagnement prescriptif est un domaine où la supervision humaine est de plus en plus considérée comme non optionnelle. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] ont testé si trois LLM pouvaient recommander des plans d'accompagnement étudiant à partir d'indicateurs d'[[learning-analytics|analytiques d'apprentissage]] et ont trouvé une sensibilité limitée aux besoins ainsi qu'une forte incohérence entre modèles — concluant que le jugement humain dans la boucle reste nécessaire avant de pouvoir déployer de façon sûre et éthique un conseil prescriptif fondé sur un [[llm|LLM]].

Une troisième architecture place le jugement humain *en amont* du modèle plutôt qu'au niveau de ses sorties. Dans l'étude de [[lee-learner-question-types-ai-education-2026|Lee, Atif et Kang (2026)]] sur la classification des questions d'apprenants, trois experts de niveau doctoral ont gouverné l'ensemble du pipeline : ils ont affiné les définitions opérationnelles de chaque rôle [[constructivist|constructiviste]], étiqueté indépendamment jusqu'à ce que le kappa de Fleiss passe de 0.60 à 0.83 après résolution des divergences, et validé les items rétro-traduits et paraphrasés utilisés pour équilibrer l'ensemble d'entraînement.

## CODE-GEN : génération de QCM avec un humain dans la boucle

Duan et al. (2026) ont construit un système [[rag|RAG]] [[agentic-ai|agentique]] avec deux agents :
- **Agent générateur** — Produit des questions de programmation à choix multiples alignées sur les objectifs d'apprentissage du cours
- **Agent validateur** — Évalue la qualité selon sept dimensions pédagogiques

**Évaluation :** 6 experts du domaine ont jugé 288 questions générées par l'IA. Taux de succès validés par l'humain : **79.9%–98.6%** selon les dimensions.

**Dimensions où l'IA est forte (charge humaine faible) :**
- Clarté des questions, validité du code, alignement sur les concepts, validité de la bonne réponse

**Dimensions exigeant un humain (charge humaine élevée) :**
- Conception de distracteurs pédagogiquement signifiants
- [[feedback|Rétroaction]] explicative de haute qualité

Enseignement stratégique : l'effort humain doit être concentré là où le jugement pédagogique est irremplaçable ; la vérification computationnelle peut être entièrement automatisée.

## MAIC : génération de scripts avec un humain dans la boucle

Yu et al. (2024) ont déployé une salle de classe multi-agents (agent [[teacher-role|enseignant]], agent assistant pédagogique, archétypes de camarades de classe) à l'université Tsinghua, avec plus de 500 étudiants et plus de 100,000 traces d'apprentissage. Des enseignants participent à la génération des scripts et à la supervision, garantissant que l'augmentation par l'IA à grande échelle ne déplace pas l'expertise pédagogique.

## PedaCo : double filtrage pour la génération de vidéos par l'IA

Kim, Baek et Kwak (2026) étendent l'humain dans la boucle à la [[video-education|génération de vidéos pédagogiques par l'IA]] via **PedaCo** (Pedagogical Co-creation), un pipeline doté de deux couches de filtrage complémentaires qui matérialisent une *résistance de principe* ancrée dans la théorie cognitive de l'apprentissage multimédia de Mayer (CTML). La **première couche** place l'humain au stade du script : un LLM rédige un script, un relecteur fondé sur l'IA signale les violations potentielles de la CTML (par exemple, « la scène 3 introduit des termes techniques sans explication préalable »), et l'enseignant décide de l'accepter, de le réviser ou de le régénérer. La **deuxième couche** applique des métriques automatisées après la synthèse sur la cohérence, la redondance, la contiguïté temporelle, la modalité et la qualité d'image, que l'enseignant examine ensuite. Dans une étude intra-sujet (23 enseignants), l'approche fondée sur l'examen a amélioré tous les principes de la CTML (note moyenne 3.07→3.86, p<.01), les enseignants évaluant l'efficacité de production à 4.26/5 — la friction étant perçue comme productive, et non comme une charge. Le principe de conception reprend la synthèse de la base de connaissances sur l'humain dans la boucle : les humains et les algorithmes repèrent des problèmes de nature *différente*, de sorte que les systèmes les plus efficaces automatisent là où la vérification computationnelle est précise (la synchronisation temporelle) et préservent le jugement humain là où la nuance pédagogique est irremplaçable (le ton, l'adéquation au public).

Le placement peut importer davantage que la présence : des praticiens ont jugé un outil de création d'histoires sociales très utilisable (SUS 86.8) tout en signalant que l'examen arrivait trop tard, parce que les contraintes culturelles et cliniques fixées avant la génération — un abaya plutôt qu'une tenue de rue occidentale — sont plus difficiles à rattraper en modifiant la sortie a posteriori ([[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]]).

## Pourquoi l'humain dans la boucle importe à l'ère de l'IA

La conception avec un humain dans la boucle est devenue centrale dans les discussions de la base de connaissances sur l'[[agentic-ai|IA agentique]] et sur l'[[reducing-ai-misuse|usage responsable de l'IA]], pour plusieurs raisons convergentes :
- **Sécurité pédagogique.** [[pedagogical-safety|La sécurité pédagogique]] exige qu'une IA dotée d'une véritable autorité pédagogique conserve une supervision humaine, afin que les erreurs, les biais ou les sorties nuisibles soient interceptés avant d'atteindre les apprenants. Cela vaut particulièrement pour les agents autonomes qui [[agentic-ai|poursuivent des objectifs de façon proactive]].
- **La supervision est rare dans la pratique, pas seulement en théorie.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] ont constaté qu'une gouvernance intégrée robuste et une supervision humaine dans la boucle ne se manifestaient que rarement dans les 474 systèmes d'IA agentique éducative examinés, alors même que l'autonomie sur tâche unique et la collaboration multi-agents progressaient — l'écart entre le principe de conception et la pratique déployée.
- **Validité et contrôle qualité.** L'humain dans la boucle constitue un garde-fou qualité pour l'[[automated-assessment|évaluation automatisée]] et la génération — les humains tranchent là où la notation automatisée est peu fiable (voir la [[research-methods-aied|recherche]] sur la [[llms-do-not-grade-essays-like-humans-2026|correction automatisée de dissertations par les LLM]]) et valident les items générés. Une [[meta-analysis-systematic-review|revue systématique]] guidée par PRISMA portant sur 42 études de notation et de rétroaction (2023–2025) aboutit explicitement à la même conclusion : les LLM égalent les évaluateurs humains sur des tâches courtes et bien structurées mais ne peuvent pas entièrement remplacer le jugement humain sur des travaux complexes, ouverts ou subjectifs, et l'efficacité de notation la plus élevée est atteinte dans des systèmes hybrides combinant une notation pilotée par l'IA avec la supervision et la vérification de l'enseignant ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] montrent concrètement où se situe cette frontière : ChatGPT-5 a égalé les enseignants sur les items objectifs d'examens de pharmacie (CCC 0.935–1.000) mais s'est montré peu fiable sur les items à réponse courte et les dissertations, même lorsqu'on lui fournissait une grille, ce qui conduit les auteurs à recommander une notation hybride avec examen humain pour les travaux complexes, subjectifs ou à enjeux élevés.
 La répétition ne remplace pas cette supervision : en corrigeant à nouveau des productions identiques sur cinq jours différents, le même modèle n'a reproduit ses propres résultats qu'à un alpha de Krippendorff de 0.625, la variation se concentrant dans les notes moyennes, les A et les F étant absents des décomptes des cinq sessions ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **Autonomie de l'apprenant.** Maintenir un humain dans la boucle préserve l'[[agency|autonomie]] et soutient l'[[self-regulated-learning|apprentissage autorégulé]], en contrant la [[cognitive-offloading|dépendance excessive]] que peut induire une assistance pleinement autonome.
- **Les étudiants situent eux-mêmes l'humain du côté des enjeux élevés.** Parmi 93 étudiants de premier cycle, 81.7% préféraient une notation humaine pour un travail final comptant pour 40% de la note, 75 sur 93 souhaitaient que l'IA assiste les évaluateurs plutôt qu'elle ne les remplace, et 69 voulaient que toute notation par l'IA fasse l'objet d'un examen humain ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]]).
- **Confiance et calibration.** Une supervision humaine transparente soutient la [[trust-calibration|calibration de la confiance]] — apprenants et enseignants savent qu'un humain qualifié se tient derrière le système.
- **Des critères visibles avant l'examen augmentent l'accord.** [[calibrating-trustworthiness-llm-education-2026|Coscia et al. (2026)]] ont constaté que le fait de présenter aux évaluateurs des métriques de fiabilité pendant qu'ils comparaient les réponses des LLM faisait passer l'accord inter-évaluateurs de l'alpha de Krippendorff 0.3987 à 0.4931, tandis que l'ajout de mesures supplémentaires accroissait la charge cognitive sans contrepartie.
- **Autonomie bornée comme architecture, et non comme clause de style.** Le cadre AGAI-HE de [[ilieva-agentic-genai-higher-education-2026|Ilieva et al. (2026)]] pour un soutien à l'apprentissage fondé sur l'[[agentic-ai|IA agentique]] intègre la supervision au modèle lui-même, comme troisième couche à côté de la couche de flux pédagogique et de la couche de soutien agentique : il définit l'usage acceptable de l'IA, les frontières pédagogiques, les règles de [[privacy|confidentialité]], les [[ai-use-disclosure|obligations de divulgation]], la vérification des sources, les points de contrôle de l'enseignant, les mécanismes d'[[academic-integrity|intégrité]] et la responsabilité humaine finale, et exige que toute fonction agentique se rattache à une exigence d'apprentissage, à une finalité d'évaluation ou à un contrôle de gouvernance. C'est une matérialisation concrète du principe selon lequel l'humain dans la boucle est une propriété de conception du système plutôt qu'une déclaration de politique — et l'étude de perception menée par les auteurs auprès de 130 étudiants rappelle que l'ajout d'une orchestration agentique sous cette supervision n'a pas, en soi, été perçu comme un meilleur soutien à l'apprentissage qu'un agent conversationnel.
- **La fréquence à laquelle l'humain regarde est elle-même une décision de conception.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] distingue la *fréquence* de la supervision de son placement : une supervision humaine à haute fréquence, qui examine chaque sortie de l'IA avant qu'elle n'atteigne les étudiants, offre un contrôle qualité, une détection rapide des erreurs, une responsabilité et une calibration continue, mais peut annuler l'efficacité même qui motivait l'automatisation et créer un goulot d'étranglement aux périodes de pointe de correction ; une supervision à basse fréquence, qui contrôle des échantillons et n'examine que les cas signalés, passe à l'échelle et raccourcit les délais, mais fait courir le risque que des erreurs se propagent sans être détectées d'un rendu à l'autre, affaiblit la responsabilité et crée un problème d'[[equity-in-ai-education|équité]] si certains étudiants bénéficient d'un examen humain plus approfondi que d'autres. Plutôt que de prescrire une réponse universelle, le cadre exige que ce compromis soit explicité au regard des tolérances à l'erreur propres à chaque discipline, du caractère [[formative-assessment|formatif]] ou [[summative-assessment|sommative]] de l'évaluation, de la taille de la cohorte et des ressources institutionnelles — et fixe une position par défaut opposée à celle de l'argument d'efficacité habituel : commencer par une supervision à haute fréquence et ne la réduire que lorsque des preuves substantielles démontrent une fiabilité, une sécurité et une équité acceptables, de sorte qu'il revienne à celui qui veut *moins* de supervision de le démontrer. L'article avertit également que les principes d'une telle supervision peuvent déplacer l'effort du personnel plutôt que le réduire, laissant les gains nets d'efficacité comme une question empirique ouverte.
- Une supervision humaine déployée peut signifier un simple aiguillage par approbation plutôt qu'un jugement de qualité : dans un système de requêtes hybride, le champ d'acceptation n'encodait que la question de savoir si le résolveur différait du demandeur, et aucune mesure n'évaluait la qualité des réponses ([[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]]).

## Où l'humain dans la boucle apparaît dans la recherche de la base de connaissances

- **Évaluation et notation automatisées :** les systèmes à humain dans la boucle combinent génération et notation par l'IA avec validation humaine, pour la correction de réponses courtes ([[cong-confidence-asag-2026]]), l'évaluation d'auto-explications ([[llm-automated-assessment-student-self-explanations]]) et la [[automated-essay-scoring|correction de dissertations]] ([[psyscore-essay-scoring-zpd-feedback]]). [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] matérialisent ce dispositif dans la correction manuscrite de [[chemistry-education|chimie]] générale, à enjeux élevés : comme la fiabilité d'un LLM [[multimodal|multimodal]] varie selon le format de réponse (les réponses textuelles et les réactions chimiques sont fiables, tandis que le dessin et les graphiques obtiennent des scores inférieurs au hasard) et que les faux positifs ne sont pas détectés par les étudiants, ils convertissent les scores bruts de l'IA en une politique sélective d'acceptation ou de renvoi à l'humain au moyen de filtres de confiance — des seuils de crédit partiel, un seuil de risque fondé sur la [[item-response-theory|théorie de réponse aux items (IRT)]], et l'exclusion par type de problème — renvoyant aux humains les items incertains et graphiques, une approche que les auteurs rattachent aux cadres [[regulation|réglementaires]] qui désignent l'IA dans l'[[assessment|évaluation éducative]] comme présentant un risque élevé et imposent une supervision humaine documentée.
- **Systèmes de rétroaction :** imposer une supervision humaine documentée.
- **Notation opérationnelle avec un humain dans la boucle dans une évaluation nationale (2026) :** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] matérialisent l'humain dans la boucle à l'échelle institutionnelle dans l'examen Acredita EB en Uruguay. Comme les erreurs du correcteur fondé sur un LLM sont systématiquement conservatrices (sous-notation), le flux de travail recourt à une logique de points de décision qui aiguille l'examen humain précisément vers les candidats dont le résultat d'admission dépend de l'épreuve de rédaction — les réponses admises par l'IA sont acceptées avec confiance, tandis que les réponses refusées par l'IA (15.3–16.5% des cas) sont vérifiées par des évaluateurs experts, ce qui réduit d'au moins 50% la charge de correction complète, avec un risque résiduel d'admission erronée par l'IA de seulement 0.2–0.6%. C'est l'humain dans la boucle comme stratégie d'allocation de ressources : les humains tranchent précisément là où le biais conservateur de l'IA modifierait autrement des décisions à enjeux élevés.
- **Déduire le seuil de renvoi à l'humain de la résolution propre de la grille (2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] fixent la tolérance entre l'IA et l'enseignant à 0.5 points — le plus grand écart qui ne peut pas faire changer un rendu de bande d'ancrage — et escaladent les valeurs aberrantes à 0.8 points, envoyant 11 rendus sur 362 (3.0%) en examen humain avant la diffusion de la rétroaction.
- **L'accord entre annotateurs ne constitue pas une vérité terrain humaine.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] font entrer l'annotation par modèles dans la couche d'audit sans jamais la valider contre des étiquettes de référence humaines, laissant l'accord inter-modèles (médiane 0.401) servir de proxy à la qualité des assertions, ce qui permet à des erreurs partagées entre modèles de survivre. Leur conception garde à la supervision un rôle diagnostique plutôt que décoratif : parce que les jugements intermédiaires sont explicites, un examinateur peut voir quels comportements se sont déclenchés et distinguer un comportement mal lu d'une règle qui encode mal le construit.
- **Systèmes de rétroaction :** la conception d'une rétroaction avec un humain dans la boucle apparaît dans les [[becerra-aicofe-feedback-2026|systèmes de rétroaction collaborative]] et la [[cong-confidence-asag-2026|correction de réponses courtes sensible à la confiance]].
- **Soutien à la collaboration en classe.** [[breideband-community-builder-cobi-2026|CoBi]] maintient l'enseignant comme humain examinateur dans un système d'IA qui détecte les discours de petit groupe valorisants : les enseignants ont explicitement préféré un examen avant et après l'action à un affichage en direct qui les aurait mis « sur la sellette », et c'est précisément la rétroaction agrégée au niveau de la classe (plutôt qu'au niveau individuel) qui permet au système de naviguer entre [[privacy|confidentialité]], surveillance et [[agency|autonomie]] étudiante.
- **Génération de questions et de contenus :** au-delà de CODE-GEN, l'humain dans la boucle guide la génération de questions pour l'évaluation et l'[[scaffolding|étayage]] ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **Systèmes agentiques et multi-agents :** à mesure que l'IA devient plus autonome, la supervision humaine est un [[agentic-ai|garde-fou de conception]] central ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Aiguillage selon la conséquence de la décision, et non selon l'incertitude du modèle (2026).** [[human-in-the-loop-ai-scoring-national-assessment-2026|Une étude opérationnelle de 2026]] du test national d'accréditation Acredita EB en Uruguay (deux sessions, environ 5,000 à 6,000 candidats chacune) montre à quoi ressemble une conception avec un humain dans la boucle lorsqu'elle est pilotée par les conséquences des décisions plutôt que par l'incertitude du modèle. Un correcteur GPT-5 s'accordait avec les évaluateurs experts sur 60 à 80% des 15 items de la grille mais était systématiquement conservateur, produisant des écarts « admis par l'humain / refusé par l'IA » dans 15.3% (2024) et 16.5% (2025) des comparaisons d'admission, et presque jamais l'inverse. Le cadre retient donc les résultats d'admission par l'IA tels quels et aiguille vers l'examen d'un expert tout résultat de refus par l'IA susceptible de changer la décision pour un candidat — après avoir d'abord écarté les candidats dont l'admission ne peut pas dépendre de l'épreuve de rédaction — réduisant d'au moins 50% les réponses nécessitant une correction humaine complète. Une seconde conception de 2026 trace la frontière par l'autre côté : dans une plateforme multi-agents de patients standardisés par l'IA ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]), la supervision humaine est réservée à ce que l'IA est jugée incapable de décider, les enseignants et les patients standardisés humains fournissant l'interprétation contextuelle, la remédiation et les jugements de niveau de préparation, le système n'étant explicitement pas autorisé à déterminer seul la [[medical-education|compétence clinique]].

## Synthèse

La conception avec un humain dans la boucle n'est pas seulement une mesure de sécurité — c'est une **stratégie d'allocation de ressources**. La question frontière n'est pas *s'il faut* inclure des humains, mais *où*, dans le pipeline, leur jugement a la valeur marginale la plus élevée. Les systèmes à humain dans la boucle les plus efficaces concentrent l'expertise humaine rare là où les systèmes automatisés sont les plus faibles (conception des distracteurs, rétroaction explicative, arbitrage des cas limites, jugement éthique) et automatisent le reste — préservant qualité, sécurité et confiance tout en permettant la montée en charge de la production.
- **La supervision humaine persiste dans le travail assisté par l'IA.** La [[scaffolding-systematic-reviews-2026|recherche sur les revues systématiques]] a montré que les outils d'automatisation réduisaient les charges procédurales (le tri, par exemple) mais que les décisions interprétatives exigeaient encore une supervision humaine substantielle ; la [[kim-ai-andragogy-2026|recherche en andragogie]] fait de l'humain dans la boucle (modèles mentaux partagés, co-création) un principe central de conception de l'IA.
- **L'humain dans la boucle à l'échelle institutionnelle.** Qin (2026) décrit comment l'université Lingnan a développé un modèle éducatif avec un humain dans la boucle qui met au premier plan le raisonnement éthique, le jugement critique et la responsabilité sociale, tout en démocratisant l'accès à l'[[generative-ai|IA générative]]. Le modèle positionne les humains comme le lieu du jugement et des valeurs, même lorsque l'IA est intégrée à l'ensemble du [[curriculum-design|curriculum]] — une matérialisation [[governance|institutionnelle]] concrète des principes de l'humain dans la boucle dans l'[[higher-ed|enseignement supérieur]].
- **Les apprenants comme humain dans la boucle de leur propre tutorat.** La [[ko-hughes-vsd-student-centered-its-2026|conception sensible aux valeurs]] menée avec des étudiants de community college a produit toute une famille de fonctionnalités d'humain dans la boucle tournées vers l'apprenant pour un tuteur intelligent (contrôle sur la réévaluation et la relecture, objectifs et rythme personnalisés, marque-pages pour la révision, confirmation de la confiance avant la maîtrise, et contrôle du niveau d'implication de l'IA), positionnant l'étudiant comme un contrôleur actif de la boucle de tutorat plutôt que comme un consommateur passif des décisions adaptatives. L'étude a également montré les enseignants partagés sur la question de savoir si un tel contrôle de l'apprenant pouvait nuire à l'intégrité du parcours d'apprentissage guidé par le système — un exemple de la question plus large d'allocation de ressources : où le jugement humain (de l'apprenant ou de l'enseignant) apporte-t-il le plus de valeur ?
- **L'escalade de l'IA vers l'expert est un geste d'humain dans la boucle.** Le cadre SCAN attribue les tâches à quatre modes d'IA générative selon la distance de l'apprenant, et interprète un [[student-engagement|engagement]] passif à l'intérieur d'une tâche d'IA correctement attribuée comme un signal de désapprentissage justifiant de faire passer l'apprenant de l'IA à une assistance experte, avec un humain comme auditeur épistémique ([[ai-teammate-task-distribution-medical-training-2026|Tsim et al. (2026)]]).
- **Supervision des conseils d'adoption de l'IA.** Parce que les systèmes d'[[conversational-ai|IA conversationnelle]] consultés par des utilisateurs sceptiques peuvent être prédisposés à encourager l'adoption, une supervision humaine et une évaluation indépendante sont essentielles. Un audit montrant que la plupart des modèles de pointe réorientent le personnel sceptique du [[k-12|K-12]] vers l'[[student-engagement|engagement]] souligne la nécessité de conseils sur l'IA transparents et auditables, plutôt qu'une confiance acritique.

## Concepts liés

- [[pedagogical-patterns]] — Où se situe l'examen humain dans des séquences éprouvées, et ce qui n'a jamais été testé isolément
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — le jugement humain dans un flux d'accompagnement automatisé

## Articles liés

- [[lee-learner-question-types-ai-education-2026]] — Classification des questions étiquetée par des experts : les humains gouvernent l'étiquetage, l'augmentation et l'analyse d'erreurs (Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — La supervision humaine et la gouvernance comme troisième couche de la conception de cours en GAI agentique (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Conception sensible aux valeurs d'un tuteur intelligent centré sur l'étudiant (les apprenants dans la boucle de tutorat)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Notation assistée par l'IA avec un humain dans la boucle dans une évaluation nationale de l'écrit à grande échelle (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — Cadre SCAN : repenser la répartition des tâches avec l'IA dans la formation médicale (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — Les LLM ne corrigent pas les dissertations comme le font les humains (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — Applications de l'IA au soutien de l'andragogie (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Étayer les revues systématiques par le mentorat et l'IA (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — Notation et rétroaction assistées par l'IA sous supervision de l'enseignant
- [[lopez-pernas-llm-appropriate-student-support-2026]] — L'IA peut-elle apporter un accompagnement adapté à des profils d'étudiants variés ? Une évaluation à grande échelle
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Évaluation d'un système multi-agents fondé sur de grands modèles de langage et orienté vers l'étayage pour la formation à l'entretien clinique
- [[tripartite-feedback-framework-ai-assessment-2026]] — Cadre tripartite : classer la rétroaction selon son statut épistémique et les cinq principes de frontière pour l'implication de l'IA (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — Intervention par histoire sociale assistée par l'IA en éducation spécialisée : la conception d'AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors : schémas fondés sur des assertions pour un codage auditable des dialogues éducatifs
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — De la classification de sentiments à une rétroaction exploitable et responsable : une revue de portée et une cartographie des preuves sur le traitement du langage naturel dans l'évaluation de l'enseignement par les étudiants, 2015–2026
- [[llm-grading-assistants-public-health-2026]] — Des exécutions identiques de notation par LLM à des jours différents ne se reproduisent qu'à un alpha de Krippendorff de 0.625
- [[when-students-prefer-ai-scoring-feedback-2026]] — Les étudiants de premier cycle préfèrent une notation humaine pour les travaux à enjeux élevés et l'IA comme assistante, non comme remplaçante
- [[student-query-demand-hybrid-ai-support-2026]] — Ce que les étudiants demandent réellement : structure de la demande et potentiel d'automatisation dans un système d'accompagnement hybride
