---
title: "IA multimodale"
connected_resources: [drawsplat]
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T04:00:01-04:00"
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
translation_of: concepts/multimodal
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

> **IA multimodale (Multimodal AI)** — des [[ai-technologies|systèmes d'IA]] qui traitent, comprennent ou génèrent du contenu à travers de multiples modalités — texte, images, audio, vidéo et données structurées — et les questions éducatives que ces systèmes soulèvent. Dans l'[[ai-education|IA en éducation]], l'IA multimodale apparaît dans trois rôles distincts : comme le *contenu d'apprentissage* que les apprenants créent et avec lequel ils s'engagent ([[multimodal-learning-genai|apprentissage multimodal]]), comme la *frontière de capacité* des systèmes de tutorat qui doivent interpréter diagrammes et graphiques ([[syal-multimodal-dialogue-stem-2026|tutorat multimodal]]), et comme le *signal d'évaluation* utilisé pour évaluer la compréhension ([[multimodal-item-parameter-estimation-2026|mesure multimodale]]).

## Questions à examiner

- Pensez à un graphique, un diagramme des forces ou un schéma que vous avez eu du mal à expliquer en mots. Qu'est-ce que cette expérience suggère au sujet des limites d'un [[intelligent-tutoring|tuteur d'IA]] purement textuel qui tenterait d'aider sur des problèmes riches en images ?
- Un tuteur de [[physics-education|physique]] répond à des problèmes textuels environ 96 % du temps, mais tombe à environ 74 % sur des problèmes qui inscrivent du sens dans des diagrammes. Avant de lire, que pensez-vous qui cause cette « interférence multimodale » — et pouvez-vous imaginer une correction qui n'implique pas de réentraîner le modèle ?
- Vous avez probablement généré à la fois du texte et des images avec des outils d'IA. Avez-vous constaté que « [[prompt-engineering|solliciter]] des images » diffère de la sollicitation de texte ? Quelles compétences les étudiants pourraient-ils avoir besoin pour traduire une idée abstraite en une invite visuelle précise ?
- L'IA multimodale peut noter des dissertations, générer de la rétroaction avec narration audio, et même reconstruire les statistiques d'items d'examen à partir d'items associant images et texte. Qu'indique (ou quels risques pose) le passage de l'évaluation purement textuelle à l'évaluation multimodale pour l'[[bias-mitigation|équité]] et la validité ?
- Comment le fait que le soutien de l'IA soit moins fiable sur les problèmes mêmes, très riches en diagrammes, qui construisent une compréhension profonde des [[stem-education|STIM]] pourrait-il créer un écart d'[[equity-in-ai-education|équité]] entre apprenants ? Qui est le plus touché ?
- Les systèmes multimodaux peuvent traduire du texte en audio ou en visuel pour soutenir un apprentissage inclusif, mais ils permettent aussi une détection fine de ce qui se passe en classe. Où se situe la frontière entre l'accès multimodal utile et la surveillance ?

## Introduction

La multimodalité dans l'IA désigne la capacité de travailler à travers différentes formes représentationnelles plutôt que le texte seul. Les systèmes modernes d'[[generative-ai|IA générative]] et de [[llm|grands modèles de langue]] acceptent et produisent de plus en plus des images, de l'audio et de la vidéo en plus du texte, ouvrant de nouvelles possibilités et de nouveaux risques pour l'éducation. Ancrée dans la théorie sémiotique sociale, qui soutient que le sens se construit à travers les modes — et pas seulement les mots — l'IA multimodale change la manière dont l'[[teacher-role|enseignement]], l'apprentissage et l'évaluation sont conçus et évalués.([[multimodal-learning-genai]])

## Les trois visages de l'IA multimodale en éducation

### 1. Apprentissage multimodal et création de contenu

L'IA multimodale permet aux apprenants de produire et de s'engager avec du contenu à travers le texte, l'image, l'audio et la vidéo. Le guide d'un éducateur sur l'apprentissage multimodal avec l'IA générative positionne ces outils comme un partenaire « cyber-social » : ils complètent — mais ne peuvent pas remplacer — la construction de sens par l'humain.([[multimodal-learning-genai]])

- **La [[ai-literacy|littératie en IA]] dans les contextes multimodaux** est stratifiée : sensibilisation de base aux plateformes multimodales, co-création et [[critical-thinking|évaluation critique]] intermédiaires des productions, et conception avancée d'activités et d'évaluations multimodales.([[multimodal-learning-genai]])
- **La sollicitation multimodale** est elle-même une pratique épistémique exigeante. Les étudiants qui sollicitent des images aussi bien que du texte découvrent que « la littératie des invites diffère entre la sollicitation de texte et celle d'images » — traduire un sens abstrait en invites multimodales lisibles par la machine exige un vocabulaire visuel précis et expose les limites et les biais du système.([[multimodal-prompting-ai-literacy]])
- **L'évaluation multimodale** passe des dissertations aux artefacts associant texte, image, audio et vidéo, les éducateurs utilisant l'IA pour [[scaffolding|étayer]] la création et la rétroaction plutôt que pour remplacer la production propre de l'apprenant.([[multimodal-learning-genai]])
- **La composition multimodale par l'apprenant comme étayage de la pensée critique comporte un compromis.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] montrent que le fait de demander à des élèves du primaire supérieur de transformer des récits écrits en images et courtes vidéos générées par l'IA a soutenu des gains durables en interprétation, analyse, évaluation et explication — mais pas en inférence. Parce que les visuels rendaient explicite le sens de l'histoire, les étudiants ont rapporté un moindre besoin d'inférer le sens implicite du seul texte ; la collaboration entre pairs, et non l'outil multimodal, a rétabli des occasions d'inférence. La valeur de l'IA multimodale comme partenaire de construction de sens est donc propre à chaque dimension et dépend d'une [[learning-design|conception pédagogique]] qui réintroduise délibérément le travail inférentiel et [[self-regulated-learning|autorégulé]] que l'externalisation peut court-circuiter.
- **La [[writing-education|composition]] multimodale par l'apprenant comme littératie critique en IA.** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss et al. (2026)]] analysent 22 messages d'intérêt public vidéo de 90 secondes à 3 minutes réalisés par des élèves de terminale sur des questions d'[[ethics|éthique]] de l'IA choisies par eux — la surveillance via des ordinateurs portables régulés par l'école et des « laissez-passer » électroniques, le [[privacy|consentement éclairé]], et l'accusation algorithmique punitive — comme une [[ai-literacy|littératie critique en IA]] mise en acte par la composition à travers l'image animée, le son, le texte et les corps mêmes des étudiants. Dans les sept films, le préjudice était représenté comme émergeant de l'enchevêtrement homme-machine plutôt que de l'outil seul (un « harceleur IA » anthropomorphisé était joué par un acteur humain dans trois des sept), et 15 des 18 réponses de fin d'unité disaient que la composition avait changé leur compréhension de l'éthique de l'IA. Les auteurs soutiennent que les produits multimodaux *démontrent* et *communiquent* à la fois une compétence critique — des artefacts productifs, des réflexions et un discours civique peuvent servir de preuves d'[[assessment|évaluation]] que la littératie purement textuelle manque structurement à grande échelle.

### 2. Tutorat multimodal et frontière de capacité

Lorsque des tuteurs fondés sur les grands modèles de langue doivent résoudre des problèmes qui inscrivent du sens dans des graphiques, des diagrammes des forces, des schémas ou des tableaux, leur exactitude se dégrade fortement — c'est l'**effet d'interférence multimodale**.([[syal-multimodal-dialogue-stem-2026]])

- Sur des problèmes de physique OpenStax, une exactitude purement textuelle d'environ 96 % tombe à **environ 74 %** sur les problèmes riches en images, de manière cohérente entre les familles de modèles.([[syal-multimodal-dialogue-stem-2026]])
- **Les erreurs de traitement visuel** — les échecs à extraire de l'information des graphiques ou des diagrammes — dominent la taxonomie des erreurs et constituent le mode de défaillance le plus corrigeable.
- Une intervention simple de dialogue structuré (faire décrire au modèle ce qu'il voit, ne corriger que les mauvaises lectures *observables* sans révéler la physique, puis relancer) rétablit l'exactitude à **environ 95 %** sans aucun réentraînement.([[syal-multimodal-dialogue-stem-2026]])
- C'est une **préoccupation d'équité** : les étudiants qui travaillent sur des problèmes riches en images — précisément les problèmes qui construisent une compréhension conceptuelle profonde en STIM — reçoivent actuellement un soutien de l'IA moins fiable que ceux qui travaillent sur des exercices purement textuels.
- **Construire une aide visuelle est plus difficile que d'en lire une.** Sur GeoVAD-Bench, fournir un diagramme auxiliaire d'expert faisait monter l'exactitude (de +3,3 à +7,0 points), mais laisser les modèles construire leur propre ligne auxiliaire élargissait l'écart de 10,0 à 13,5 points — deux modèles obtenaient un score pire que sans aucun raisonnement visuel ([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]).
- **La frontière est un profil, et non un niveau — et l'imagerie artistique se situe hors de la région que les modèles traitent bien, comme l'[[language-learning|apprentissage des langues]].** [[muse-vlm-artistic-image-benchmark-2026|MUSE (Zhu et al., 2026)]] évalue 30 modèles vision-langage ouverts et propriétaires sur 12 tâches portant sur 1 174 œuvres d'art commandées, et la dispersion des capacités selon les dimensions est plus large que ne le suggère tout score agrégé : la classification de scène est quasi mûre (23 des 30 modèles au-dessus de 75,0, médiane 81,0) tandis que la détection des émotions plafonne à 39,5 et que les tâches ouvertes qui exigent des modèles qu'ils *articulent* leurs preuves obtiennent 50,90 (identification des indices visuels) et 49,18 (inférence de la cause de l'émotion) en similarité sémantique. Le raisonnement compositionnel et dépendant du point de vue échoue le plus durement — là où la vérité terrain ne spécifie aucune relation latérale ou verticale définie, 90,0 % et 73,3 % des modèles en affirment une malgré tout, seulement 43,3 % placent correctement la fille en profondeur, et aucun modèle ne résout les trois dimensions d'un seul item. Les défaillances se propagent aussi en cascade : un personnage mal ancré est ensuite justifié par un raisonnement fluide bâti à partir de sémantiques visuelles voisines (papillons, oiseaux), ce qui est le résultat le plus dangereux en tutorat parce que l'explication se lit comme compétente. Pour l'apprentissage des langues fondé sur les images, cela plaide pour une validation au niveau des dimensions sur l'imagerie qu'un cours utilise réellement, plutôt que pour l'importation d'un score multimodal général, et pour l'extension du point de contrôle d'ancrage décrit plus bas — décrire ce qui est vu, et où, avant de raisonner à partir de cela — aux contenus artistiques [[situated-learning|situés]] ([[muse-vlm-artistic-image-benchmark-2026]]).

L'implication pratique de conception est un **point de contrôle d'ancrage visuel** dans le tutorat multimodal : une étape délibérée où le système décrit ce qu'il voit avant de tenter une solution, donnant à l'étudiant ou à un superviseur humain la possibilité de corriger les erreurs perceptives.([[syal-multimodal-dialogue-stem-2026]])

[[ai-assisted-physics-lab-report-assessment-2026|Abreu et al. (2026)]] ajoutent une contrainte préalable : une équation, un graphique ou une unité peuvent apparaître dans un compte rendu sans jamais être extraits du document traité, si bien qu'un désaccord avec l'enseignant peut être un échec d'extraction plutôt qu'un échec de raisonnement — ce qui fait du format de remise une partie de la conception de l'évaluation.

### 3. Évaluation et mesure multimodales

L'IA multimodale élargit à la fois le *contenu* de l'évaluation et le *signal* utilisé pour la noter.

- **Les systèmes de rétroaction multimodaux** intègrent du texte structuré, des références à des diapositives et une narration audio en flux continu. Dans une étude, la [[ai-feedback-quality|rétroaction multimodale par l'IA]] égalait la rétroaction des éducateurs pour l'apprentissage tout en les *surpassant significativement* sur les perceptions des étudiants.([[multimodal-ai-feedback-learning]])
- **L'estimation multimodale des paramètres d'items** utilise des grands modèles de langue multimodaux ajustés pour reconstruire des courbes caractéristiques d'items (IRT / 3PL) directement à partir des probabilités d'option prédites sur des items associant image et texte, reliant l'IA multimodale à l'[[educational-measurement|mesure en éducation]] et à l'[[item-response-theory|théorie de la réponse à l'item]].([[multimodal-item-parameter-estimation-2026]])
- **L'évaluation des modèles éducatifs vision-langage** et la [[mllm-scientific-visualization-literacy|littératie des grands modèles de langue multimodaux]] étendent la boîte à outils d'évaluation du champ au raisonnement multimodal et à la [[visualization|visualisation]].([[drawedumath-vlm-struggling-students-2026]])([[mllm-scientific-visualization-literacy]])
- **La notation multimodale de la [[chemistry-education|chimie]] manuscrite expose une frontière de capacité dépendante du format :** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros et Kortemeyer]] ont noté, page par page et par rapport à des images de barème, un examen final de chimie générale manuscrit de 296 étudiants avec un grand modèle de langue multimodal doté de capacités de raisonnement, notant de manière fiable les réponses textuelles et les équations de réaction chimique (F1 normalisé le plus élevé) mais les dessins et les graphiques *moins bien que le hasard* — les quadrillages de fond distraient visuellement la vision de l'IA et les diagrammes scientifiques/structures chimiques restent difficiles à interpréter — ce qui renforce que la vision de l'IA multimodale n'est pas robuste face à un travail riche en représentations et se déploie au mieux avec un [[human-in-the-loop-ai|renvoi humain]] des items graphiques ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **La reconnaissance des construits et le jugement comparatif sont des compétences séparables.** [[cfes-p24-multimodal-slide-auditing-2026|Ma et al. (2026)]] expriment six principes de l'apprentissage multimédia sous forme de modifications réversibles de diapositives accompagnées de témoins simulés d'équivalence visuelle, et constatent que les deux modèles ont récupéré chaque opération, principe et réparation (8 sur 8) tandis que la calibration de la gravité échouait entièrement (0 sur 8) — un score composite masquerait quelle couche échoue.

- **Des gains d'équité peuvent être validés jusqu'à exister.** Un estimateur multimodal de l'attention n'a battu une référence purement visuelle que modestement, et son régulariseur ciblé sur l'écart de MAE selon le genre a réduit l'écart de validation de 0,02 à 0,005 tout en augmentant l'écart et l'erreur du pire groupe sur des sujets réservés — si bien qu'une validation répétée au niveau des sujets et consciente des sous-groupes est requise avant le déploiement ([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).
- **La notation multimodale peut reproduire un résultat de sélection même là où la notation au niveau des items prend du retard.** En notant 10 364 pages manuscrites d'Olympiades et d'université, un grand modèle de langue égalait les totaux des correcteurs à r = 0,93–0,96 et plaçait les mêmes cinq étudiants dans l'équipe de l'Olympiade, alors que l'accord par partie n'atteignait que 70 % : preuve d'un second correcteur, et non d'un notateur de référence ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **La génération de diagrammes est une frontière de capacité, et non un problème résolu.** Sur un repère de physique à 15 246 questions qui note des productions multimodales, la synthèse ou la modification de diagrammes de physique structurés s'est révélée plus difficile que la réponse, et les modèles de pointe sont restés sous 70 % de maîtrise stricte — ce qui montre que la *production* visuelle accuse un retard sur la *compréhension* visuelle ([[omniphys-multimodal-physics-benchmark-2026|Chen et al., 2026]]).

## L'IA multimodale pour l'apprentissage des langues et accessible

Les systèmes multimodaux élargissent aussi l'accès et l'[[personalized-learning|apprentissage personnalisé]]. Les outils d'apprentissage audio-[[video-education|vidéo]] guidés par l'IA adaptent la vitesse de lecture, produisent des résumés vidéo multimodaux et soutiennent la pratique de la prononciation.([[ai-guided-learning-audiovideo-2026]]) Les graphes de connaissances multimodaux raisonnent à travers images et texte pour des tâches éducatives,([[multimodal-knowledge-graph-educational-reasoning]]) et des représentations multimodales améliorent l'[[inclusive-learning|apprentissage inclusif]] en traduisant l'information d'un mode à l'autre (par exemple, du texte à l'audio ou au visuel). Les applications par domaine incluent la notation et le diagnostic des mathématiques manuscrites,([[llm-cognitive-diagnosis-handwritten-math]]) le [[affective-tutoring|tutorat affectif]] avec des signaux multimodaux,([[multimodal-affective-its-presentation]])([[kar-mathbuddy-affective-math-tutoring-2025]]) l'apprentissage texte-image dans des domaines spécialisés,([[nuclear-diffusion-text-to-image-learning-2026]]) et la détection en classe multimodale respectueuse de la vie privée.([[privacy-aware-classroom-incident-recognition-2026]]) Bird (2026) démontre une forme interne au texte de multimodalité : en fusionnant un transformateur ELECTRA ajusté avec une analyse de caractéristiques de linguistique computationnelle pour classer la littérature anglaise par Key Stage du Royaume-Uni, où le modèle fusionné (F1 0,996) a largement surpassé toutes les références unimodales — ce qui montre que combiner des formes représentationnelles, même à l'intérieur du texte, peut surpasser les approches à modèle unique.

## Défis et implications de conception

1. **Combler le fossé multimodal.** Les systèmes de tutorat multimodaux devraient inclure un ancrage visuel et des étayages de dialogue structuré plutôt que de présumer que les capacités de vision sont robustes.([[syal-multimodal-dialogue-stem-2026]])
2. **Traiter la sollicitation multimodale comme une compétence enseignable.** Les programmes de littératie en IA doivent aborder la sollicitation propre à chaque modalité, la cohérence entre les modes, et l'évaluation critique des productions multimodales.([[multimodal-prompting-ai-literacy]])
3. **Préserver la construction de sens par l'humain.** L'IA multimodale devrait augmenter, et non remplacer, la construction et l'évaluation du sens par l'apprenant à travers les modes.([[multimodal-learning-genai]])
4. **Étendre l'évaluation à la validité multimodale.** L'[[assessment-validity|évaluation de la validité]], les biais et la fiabilité doivent être examinés lorsque l'IA note ou génère des artefacts multimodaux.([[multimodal-item-parameter-estimation-2026]])([[ai-ed-evaluation]])
5. **Surveiller l'équité et la vie privée.** Le soutien peu fiable sur les problèmes riches en images et les exigences de données de la détection multimodale portent tous deux des implications d'équité et de vie privée.([[syal-multimodal-dialogue-stem-2026]])([[privacy-aware-classroom-incident-recognition-2026]])
6. **Adapter le pipeline au contenu.** Le grand modèle de langue multimodal d'un assistant de laboratoire de cybersécurité traitait mieux les diapositives visuelles denses, tandis qu'un pipeline OCR-plus-grands-modèles-de-langue offrait une valeur pédagogique comparable sur des diapositives centrées sur le texte pour un coût computationnel significativement plus faible.([[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel et al. (2025)]])

## Concepts liés

- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — Parapluie : technologies et techniques d'IA (modèles, entraînement de grands modèles de langue, robotique, RAG, agentique)
- [[virtual-and-augmented-reality]] — le geste, la voix et l'entrée spatiale comme canaux d'apprentissage
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]
## Articles liés

- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — La composition de messages d'intérêt public vidéo sur l'éthique de l'IA comme pédagogie de littératie critique en IA (Burriss et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Modélisation transformer multimodale sensible à l'équité pour l'estimation en temps réel de l'attention des étudiants
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — Performance des modèles vision-langage sur les travaux mathématiques manuscrits d'étudiants (DrawEduMath, Lucy et al. 2026)
- [[multimodal-learning-genai]] — Guide de l'éducateur sur l'apprentissage multimodal avec l'IA générative (modèle MMLD-AI)
- [[syal-multimodal-dialogue-stem-2026]] — L'effet d'interférence multimodale et la récupération par dialogue structuré en STIM
- [[multimodal-ai-feedback-learning]] — La rétroaction multimodale par l'IA égale les éducateurs sur l'apprentissage, les dépasse sur les perceptions
- [[multimodal-prompting-ai-literacy]] — La sollicitation multimodale des étudiants comme travail épistémique dans la littératie en IA
- [[multimodal-item-parameter-estimation-2026]] — Estimation des paramètres d'items IRT avec des grands modèles de langue multimodaux
- [[ai-guided-learning-audiovideo-2026]] — Soutien à l'apprentissage audio-vidéo guidé par l'IA
- [[multimodal-knowledge-graph-educational-reasoning]] — Graphes de connaissances multimodaux pour le raisonnement éducatif
- [[mllm-scientific-visualization-literacy]] — La littératie des grands modèles de langue multimodaux pour la visualisation scientifique
- [[multimodal-affective-its-presentation]] — Les signaux multimodaux dans le tutorat intelligent affectif
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Tutorat mathématique multimodal affectif
- [[llm-cognitive-diagnosis-handwritten-math]] — Diagnostic cognitif des mathématiques manuscrites par grands modèles de langue
- [[nuclear-diffusion-text-to-image-learning-2026]] — L'apprentissage texte-image dans l'enseignement du génie nucléaire
- [[privacy-aware-classroom-incident-recognition-2026]] — Détection multimodale en classe respectueuse de la vie privée
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — Enseignement multimodal par OCR en cybersécurité
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24 : évaluer comparativement les grands modèles de langue multimodaux pour l'audit de diapositives
- [[ai-grading-handwritten-physics-2026]] — Notation par IA d'évaluations de physique manuscrites (Olympiade)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — La composition multimodale par l'IA et la pensée critique dans l'écriture au primaire (Lu et al. 2027)
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Au-delà de la génération et de l'exactitude : diagnostiquer et améliorer la chaîne de pensée visuelle pour la résolution de problèmes de géométrie
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE : 12 tâches portant sur 1 174 œuvres d'art montrent la capacité des modèles vision-langage comme un profil propre à chaque dimension, la plus faible en interprétation affective et en raisonnement spatial dépendant du point de vue (Zhu et al. 2026)
- [[ai-assisted-physics-lab-report-assessment-2026]] — Évaluation assistée par IA des comptes rendus de travaux pratiques de physique : potentiel, limites et soutien à la pratique enseignante
