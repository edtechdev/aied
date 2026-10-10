---
title: "Apprenants adultes"
created: "2026-08-06T10:43:53-04:00"
updated: "2026-10-10T02:17:25-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [professional-training]
research_method: [system development]
level: [adult learning, higher ed]
confidence: medium
methods: [usability-research]
technology: [edtech-platform]
translation_of: concepts/adult-learning
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'apprentissage des adultes** — la théorie et la pratique de l'éducation des adultes (andragogie), et la manière dont les outils et technologies d'IA peuvent être conçus pour soutenir l'[[agency|autonomie]], l'expérience préalable et la pertinence réelle des apprenants adultes. Exploré à travers 13 articles de cette base de connaissances.

## Questions à examiner

- La théorie de l'apprentissage des adultes suppose que les apprenants sont autodirigés, s'appuient sur leur expérience de vie et recherchent une pertinence concrète. Mais si l'IA accomplit une grande partie du travail cognitif, un apprenant qui réalise une tâche sans aide visible prouve-t-il réellement qu'il l'a dirigée ? Qu'est-ce qui vous convaincrait qu'il l'a fait ?
- L'indépendance comportementale à l'égard d'un outil ne garantit plus que l'apprenant a dirigé l'apprentissage. Si vous conceviez une IA pour des apprenants adultes, que rechercheriez-vous pour confirmer une authentique autodirection plutôt qu'une discrète délégation ?
- Les lignes directrices de conception pour les outils d'IA destinés aux adultes insistent sur l'insertion dans une vie bien remplie — compatible avec le mobile, fonctionnant hors ligne, reliée à des problèmes réels. Lesquelles de ces caractéristiques importent le plus pour votre propre apprentissage, et que coûte à l'apprenant un outil qui les ignore ?
- Les apprenants adultes étudient souvent au travail ou à la maison, si bien que la diffusion en ligne domine — apportant de la souplesse mais aussi des risques de délestage et des questions d'intégrité. Comment la commodité de l'assistance par l'IA interagit-elle avec l'objectif d'un apprentissage durable pour un adulte très occupé ?
- La recherche a constaté qu'aucun système d'IA pour l'apprentissage des adultes ne satisfaisait à lui seul toutes les lignes directrices de conception — l'écosystème complet était nécessaire. Qu'est-ce que cela suggère quant à l'attente qu'un seul outil réponde aux besoins de chaque apprenant ?
- Pour les apprenants adultes marginalisés et neurodivergents, l'équité tient peut-être moins à l'accès aux outils qu'au soin relationnel de l'éducateur. En quoi positionner l'humain comme le lieu du soin change-t-il la manière dont vous concevriez ou adopteriez un outil d'IA ?

## Introduction

Ancré dans le modèle andragogique de Knowles, l'apprentissage des adultes suppose que les apprenants sont autodirigés, s'appuient sur leur expérience de vie, sont motivés par des buts immédiats et pratiques, et en retirent le plus grand bénéfice lorsque l'apprentissage se relie à leurs rôles concrets. Ces hypothèses importent pour la conception de l'IA, car l'IA générative peut désormais participer à presque toutes les étapes de l'apprentissage — l'identification des besoins, la fixation des objectifs, l'interprétation de l'information, la production de résultats et l'évaluation de la performance. Lorsque l'IA accompare une si grande part du travail cognitif, l'indépendance comportementale à l'égard de l'outil ne garantit plus que l'apprenant a réellement dirigé l'apprentissage. La recherche de cette base de connaissances recadre en conséquence l'autodirection comme un objectif de conception actif plutôt que comme une hypothèse par défaut, et évalue l'IA destinée à l'apprentissage des adultes au regard de critères tels que la propriété de l'objectif, le contrôle de la délégation et la récupérabilité cognitive.

## Données probantes issues des articles liés

- **Andragogie et délégation cognitive à GenAI.** [[andragogy-cognitive-delegation-genai-2026|Hyoung (2026)]] revisite les six hypothèses andragogiques de Knowles sous l'angle de la délégation cognitive médiée par l'IA, soutenant que réaliser une tâche sans aide visible de l'IA ne prouve pas une autodirection signifiante. Il en dérive cinq dimensions analytiques — propriété du besoin et de l'objectif, contrôle de la délégation, calibration épistémique, récupérabilité et transfert cognitifs, et autonomie motivationnelle — reliant l'apprentissage des adultes au [[cognitive-offloading|délestage cognitif]] et à l'[[self-regulated-learning|apprentissage autorégulé]] pour évaluer si les apprenants demeurent authentiquement autodirigés à l'ère de l'[[generative-ai|IA générative]].
- **Lignes directrices de conception pour les outils d'IA destinés à l'apprentissage des adultes.** S'appuyant sur les données de déploiement longitudinal du National AI Institute for Adult Learning and Online Education (AI-ALOE), l'article de DIS 2026 [[ai-adult-learning-guidelines-dis2026|synthétise 19 lignes directrices de conception empiriquement fondées]] pour les technologies d'apprentissage des adultes pilotées par l'IA. Dérivées d'environ 1,600 déclarations de parties prenantes portant sur sept systèmes déployés, ces lignes directrices couvrent la présence cognitive, sociale et pédagogique (un cadrage en termes de communauté d'enquête) et insistent sur le fait que les outils doivent s'insérer dans une vie adulte bien remplie (compatibles avec le mobile, fonctionnant hors ligne), relier le contenu à des problèmes du monde réel, personnaliser de manière signifiante, fournir un soutien et une rétroaction substantiels, et être transparents sur les données. Aucun système n'a satisfait à toutes les lignes directrices ; l'écosystème complet de l'AI-ALOE était nécessaire pour les couvrir.
- **Les contextes de l'apprentissage des adultes, à distance et tout au long de la vie.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties et al.]] montrent comment l'Open University a conçu et évalué un assistant d'IA intégré (AIDA) à travers six études de recherche par la conception ; les étudiants qui l'utilisaient passaient deux fois plus de temps sur le cours, bien que l'étude avertisse que la capacité technique doit être accompagnée d'une [[governance|gouvernance]] et d'une préparation organisationnelle. [[ai-lifelong-learning-policy|Theodora et Tselios]] présentent le double rôle de l'IA dans l'apprentissage des adultes et l'[[lifelong-learning|apprentissage tout au long de la vie]] comme à la fois un facilitateur d'une éducation personnalisée et extensible et une source de risque d'équité et de gouvernance, appelant à une politique inclusive et centrée sur l'humain. [[community-centered-ai-education-adults|Une étude de cas du Midwest]] a co-conçu un programme de littératie en IA pour 54 adultes d'une communauté mal desservie, constatant qu'une éducation à l'IA orientée vers l'équité pour les adultes doit traiter les lacunes fondamentales de [[ai-literacy|littératie numérique]], bâtir la [[trust|confiance]] autour de la protection des données, et se relier à l'expérience vécue. Le cadre [[sovereign-hive-titl-further-education-2026|« Sovereign Hive » / Tutor-in-the-Loop de Herron]] traite l'équité de GenAI dans l'enseignement supérieur de formation continue comme une régulation de l'atmosphère plutôt que comme un simple accès aux outils, positionnant l'éducateur comme le lieu du soin relationnel et cognitif pour les apprenants adultes marginalisés et [[neurodiversity|neurodivergents]].

## Liens avec les concepts apparentés

L'apprentissage des adultes se situe à l'intersection de plusieurs concepts étroitement liés dans cette base de connaissances. L'[[higher-ed|enseignement supérieur]] fournit le contexte institutionnel dans lequel se déroule une grande part de l'apprentissage des adultes et de l'apprentissage à distance, tandis que la [[professional-training|formation professionnelle]] couvre sa dimension liée au monde du travail et l'[[lifelong-learning|apprentissage tout au long de la vie]] sa dimension d'éducation continue. L'[[vocational-education|enseignement et la formation professionnels]] est le concept voisin qui nomme un métier plutôt qu'un apprenant : l'apprentissage des adultes décrit ce que les apprenants apportent à tout contexte — autodirection, expérience préalable, buts pratiques immédiats — tandis que l'EFP désigne la préparation initiale et proche de la pratique à un métier ou à un rôle technique nommé, jugée par la compétence démontrée avec les équipements et encadrée par les systèmes de qualification plutôt que par des dispositions andragogiques. L'[[online-teaching-and-learning|enseignement et l'apprentissage en ligne]] sont le médium de diffusion dominant pour les apprenants adultes — qui étudient souvent au travail ou à la maison — si bien que ses affordances (accès 24h/24 et 7j/7, soutien asynchrone) et ses risques ([[academic-integrity|intégrité]], [[cognitive-offloading|délestage]]) sont centraux pour la conception de l'apprentissage des adultes. L'[[self-regulated-learning|apprentissage autorégulé]] et l'[[agency|autonomie]] nomment les capacités de l'apprenant que l'IA doit protéger plutôt qu'éroder, et le [[cognitive-offloading|délestage cognitif]] saisit le mécanisme par lequel l'IA peut les soutenir ou les saper. L'[[inclusive-learning|apprentissage inclusif]] et l'[[equity-in-ai-education|équité]] dans l'IA en éducation cadrent les obligations d'équité des outils d'IA destinés aux adultes, l'[[human-in-the-loop-ai|IA avec intervention humaine]] nomme le patron de conception qui maintient les humains responsables, et l'[[scaffolding|étayage]] décrit le soutien gradué que de tels outils devraient fournir.

## Implications pour les enseignants et les concepteurs de l'éducation des adultes

- **Concevoir l'IA comme un étayage de l'autodirection, et non comme un substitut.** L'indépendance comportementale à l'égard de l'outil ne prouve pas que l'apprenant a dirigé l'apprentissage — protégez la propriété de l'objectif, le contrôle de la délégation et la récupérabilité cognitive ([[andragogy-cognitive-delegation-genai-2026|andragogie et délégation cognitive]]).
- **S'insérer dans une vie adulte bien remplie.** Rendez les outils asynchrones, mobiles et capables de fonctionner hors ligne, et reliez le contenu à des problèmes du monde réel ([[ai-adult-learning-guidelines-dis2026|lignes directrices de l'AI-ALOE]]).
- **Garder un humain dans la boucle.** Positionnez l'éducateur comme le lieu du soin relationnel et cognitif, en particulier pour les apprenants adultes marginalisés et [[neurodiversity|neurodivergents]] ([[sovereign-hive-titl-further-education-2026|Tutor-in-the-Loop]]).
- **Traiter la littératie numérique fondamentale et la confiance dans les données.** Bâtissez l'[[ai-literacy|littératie en IA]] et la [[trust|confiance]] autour de la protection des données avant d'attendre une adoption ([[community-centered-ai-education-adults|éducation communautaire à l'IA]]).
- **Fonder l'IA sur la science de l'apprentissage et l'andragogie, et privilégier une personnalisation profonde.** Appliquez la théorie andragogique et reliez le contenu à des problèmes du monde réel ; privilégiez une personnalisation profonde (séquençage des tâches, calibration de la difficulté) à une adaptation superficielle.
- **Faire de la transparence et des fonctionnalités communautaires des dimensions de premier rang.** La transparence des pratiques de données et les fonctionnalités sociales ou communautaires comptent parmi les dimensions les plus négligées et pourtant les plus valorisées des outils d'IA destinés aux adultes.
- **Traiter la fiabilité technique et structurelle comme une condition préalable.** L'engagement dépend autant d'une infrastructure stable et inclusive que de la qualité pédagogique — des plateformes instables ou excluantes sapent une conception par ailleurs solide.

- **Principes de conception de l'IA pour l'andragogie.** [[kim-ai-andragogy-2026|Kim et al. (2026)]] constatent que les apprenants adultes valorisent l'IA comme agent d'apprentissage collaboratif et en dérivent trois principes de conception de l'IA pour l'andragogie : l'humain dans la boucle (modèles mentaux partagés, cocréation humain-IA), la conception émotionnelle (calibration du recours à l'IA, communication empathique) et l'adaptabilité (adaptation continue, interopérabilité). Leurs onze prototypes de scénarios rattachent également chaque principe andragogique à une affordance concrète de l'IA : des [[intelligent-tutoring|tuteurs d'IA]] et des [[learning-by-teaching|agents enseignables]] pour l'implication, des outils de suivi et d'[[learning-analytics|analytique]] pour l'autonomie et l'auto-évaluation, des [[conversational-ai|agents conversationnels]] empathiques et des [[simulation|simulations]] pour l'expérience, des bibliothèques de cas et des générateurs de questions d'ordre supérieur pour le travail centré sur les problèmes, et des planificateurs d'IA et des conseillers en carrière pour la pertinence.
- **Préserver la lutte productive.** L'étude sur l'échec productif du même groupe rattache le soutien de l'IA aux deux phases de l'échec productif et conclut que la conception ne doit pas résoudre la lutte : les agents conversationnels agissent comme des partenaires de réflexion non directifs pendant la génération et l'exploration, puis soutiennent la comparaison, la réorganisation et le transfert pendant la consolidation ([[kim-ai-productive-failure-adult-2026|Kim et al. (2026)]]).

## Concepts liés

- [[self-directed-learning]]
- [[online-teaching-and-learning]] — Enseignement et apprentissage en ligne
- [[higher-ed]]
- [[professional-training]]
- [[vocational-education]]
- [[lifelong-learning]]
- [[inclusive-learning]]
- [[agency]]
- [[self-regulated-learning]]
- [[generative-ai]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[trust]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[governance]]
- [[formative-assessment]]
- [[rct]]
- [[active-learning]]
- [[discipline-specific-aied]]

## Articles liés

- [[ai-adult-learning-guidelines-dis2026]] — Lignes directrices pour concevoir des technologies d'IA au service de l'apprentissage des adultes
- [[andragogy-cognitive-delegation-genai-2026]] — Que reste-t-il d'autodirigé ? Revisiter l'andragogie à travers la délégation cognitive dans l'apprentissage des adultes médié par l'IA générative
- [[ai-lifelong-learning-policy]] — L'intelligence artificielle dans l'apprentissage tout au long de la vie : opportunités et défis de la politique d'éducation des adultes
- [[sovereign-hive-titl-further-education-2026]] — Le « Sovereign Hive » et le cadre Tutor-in-the-Loop (TITL) pour l'équité dans l'enseignement supérieur de formation continue
- [[community-centered-ai-education-adults]] — Co-concevoir une éducation à l'IA centrée sur la communauté pour les adultes : une étude de cas du Midwest
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — De nouveaux systèmes d'apprentissage pour les établissements d'enseignement à distance ? Une revue de six études sur la mise en œuvre d'AIDA
- [[institutional-governance-ai-universities]] — Fragmentation des politiques ou alignement institutionnel ? La gouvernance institutionnelle de l'IA dans les universités et les écoles de commerce
- [[generative-ai-enhanced-learning-experiences-for-computational-thinking-a-systema]] — Expériences d'apprentissage enrichies par l'IA générative pour la pensée computationnelle : une revue de cadrage systématique et des lignes directrices de conception
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Cartographier le programme émergent du génie logiciel assisté par l'IA par l'analyse des programmes de cours
- [[learner-ai-interaction-patterns-oop]] — Patrons d'interaction entre apprenants et IA et performance académique dans un cours de programmation orientée objet
- [[dot-framework-survey-2026]]
- [[kim-ai-productive-failure-adult-2026]] — Concevoir des systèmes d'IA pour soutenir l'apprentissage fondé sur l'échec productif
- [[kim-ai-andragogy-2026]] — Les applications de l'IA au service de l'andragogie (Kim et al. 2026)
