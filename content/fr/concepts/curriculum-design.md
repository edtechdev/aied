---
title: "La conception de programme d'études"
created: "2026-06-02T10:44:35-04:00"
updated: "2026-10-10T03:05:32-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
translation_of: concepts/curriculum-design
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

> **La conception de programme d'études** — le processus de planification et de structuration de ce qui est enseigné à travers les cours, les programmes et les institutions, y compris les objectifs d'apprentissage, le séquencement des contenus, les stratégies d'évaluation et la progression des compétences. À l'ère de l'IA, la conception de programme doit équilibrer les connaissances fondamentales et les compétences émergentes en IA, en déterminant non seulement ce que les étudiants apprennent, mais aussi comment ils apprennent à travailler avec les outils d'IA et à les évaluer de manière critique.

## Questions à examiner

- La conception de programme demande ce que les étudiants devraient apprendre au niveau du cursus, tandis que la conception de l'apprentissage demande comment, au niveau du cours. Lorsque l'IA remodèle une discipline, laquelle de ces deux couches devrait selon vous changer en premier ?
- À mesure que l'[[generative-ai|IA générative]] automatise les travaux de niveau implémentation, certains soutiennent que les programmes doivent se déplacer vers la conception de systèmes, l'abstraction et l'[[critical-thinking|évaluation critique]]. Que perdraient selon vous les étudiants si les compétences de bas niveau étaient dépriorisées ?
- La refonte des programmes à l'ère de l'IA est souvent présentée comme un équilibre entre la maîtrise des outils et les connaissances fondamentales. Où avez-vous vu cet équilibre pencher trop loin dans une direction ?
- Le cadre SAIL traite la littératie en IA comme un étayage réparti selon les âges et conçu pour traiter des « fractures numériques » plus profondes que l'accès. En quoi intégrer la littératie en IA dans tout un programme diffère-t-il de l'ajout d'un seul cours d'IA ?
- Si chaque discipline a désormais besoin de compétences en IA intégrées en son sein, qui est responsable du changement de programme — les enseignants, les programmes ou les institutions — et de quoi les éducateurs ont-ils besoin pour y parvenir ?
- Un programme est une séquence de compétences sur plusieurs années, et pas seulement une liste de sujets. Comment cette perspective plus longue change-t-elle la question de savoir si une « unité de littératie en IA » laisse réellement une trace ?

## Introduction

La conception de programme traite du *quoi* de l'éducation au niveau du cursus, en complément de l'[[learning-design]] qui traite du *comment* au niveau du cours. Les articles de cette base de connaissances explorent comment l'IA remodèle les programmes dans toutes les disciplines — du génie logiciel à l'architecture en passant par l'éducation verte — et comment les éducateurs conçoivent des programmes qui intègrent la littératie en IA sans sacrifier les fondamentaux disciplinaires.

### Thèmes clés de la recherche

**Repenser les programmes pour l'ère de l'IA** est le défi central. **[[reshaping-cs-education-genai|Lee et al.]]** ont synthétisé les résultats d'ateliers internationaux sur la refonte de l'[[cs-education|enseignement de l'informatique]] de premier cycle, en soutenant qu'à mesure que l'IA générative automatise la programmation de niveau implémentation, les programmes doivent se déplacer vers la conception de systèmes, l'abstraction et l'évaluation critique — tout en dépriorisant les détails d'implémentation de bas niveau. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** a formalisé le génie logiciel agentique comme une discipline distincte, avec un programme de 21 modules centré sur l'« évolution de l'intention » et la discipline de praticien requise pour piloter des [[agentic-ai|agents d'IA]]. Ces deux approches se rattachent à l'[[ai-literacy]] et au [[scaffolding]].

En examinant le changement comme systémique plutôt qu'additif, [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]] triangulent une revue de cadrage, une cartographie bibliométrique de 209 références, 36 articles et dix entretiens de responsables académiques en cinq glissements — dont le passage de la transmission de connaissances au développement de capacités, et de l'expérimentation locale à la gouvernance institutionnelle.

**La cartographie et l'analyse de programme** utilisent l'IA pour comprendre les programmes existants. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]** ont analysé 23 syllabi de cours de génie logiciel assistés par l'IA, en identifiant des thèmes communs — [[prompt-engineering|l'ingénierie de prompts]], la revue de code avec l'IA, les [[ethics|considérations éthiques]] — et en dérivant des recommandations de conception qui insistent sur l'équilibre entre maîtrise des outils et connaissances fondamentales. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** applique des méthodes computationnelles pour comparer les structures de cours d'informatique entre institutions.

**L'intégration de la littératie en IA** intègre les compétences en IA dans toutes les disciplines. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** fournit un cadre de littératie en IA étayé, applicable à tous les âges et à tous les stades éducatifs, traitant les [[digital-divide|fractures numériques]] de deuxième et de troisième niveau. **[[tracing-genai-literacy-interaction-patterns]]** examine comment la littératie en IA se développe à travers les patrons d'interaction. **[[hingle-collaborative-ai-literacy-2025]]** explore des approches collaboratives du développement de programme de littératie en IA, en lien avec l'[[collaborative-learning]].

LearnAI montre à quoi ressemble une version intégrée : une large couche d'exposition faite de courtes présentations insérées dans 18 cours existants répartis sur cinq disciplines (293 étudiants), associée à des séances de co-création individuelles optionnelles animées par des tuteurs pairs étudiants de premier cycle formés, afin que des apprenants de niveaux mélangés abordent les tâches d'IA à leur propre niveau ([[learnai-just-in-time-ai-cocreation-university-2026|Qu et al. (2026)]]).

L'intégration dans la pratique est en retard sur les cadres. [[critical-media-literacy-education-2026|Santos-Albardía et al. (2025)]] ont constaté que seulement 13.8 % des étudiants en éducation et en journalisme interrogés déclaraient que leurs cours abordaient l'analyse médiatique critique, contre 97.8 % qui la jugeaient importante, et leurs entretiens d'experts attribuaient l'écart à une formation des enseignants qui privilégie les compétences techniques et pédagogiques au détriment de l'éducation aux médias.

Une revue PRISMA de 39 études STEAM (2016–2025) a trouvé un déséquilibre parallèle dans les éléments de littératie en IA : les implémentations développaient des littératies techniques — concepts fondamentaux de l'IA, pensée computationnelle, littératie des données — tout en sous-développant la conscience éthique, l'imagination créative, ainsi que la création, la gestion et la conception avec l'IA ; auditer chaque unité au regard de ces éléments est donc la réponse pratique ([[niri-steam-ai-literacy-review-2026|Niri et al., 2026]]).

La voix des étudiants est une autre entrée de conception : 84 % de 166 étudiants en commerce en dernière année souhaitaient que l'IA générative soit enseignée dans leurs unités et 85 % la jugeaient essentielle pour l'employabilité, tandis que seulement 7 % en avaient appris quelque chose de la part de leur université ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

Une revue de 42 études sur l'éducation à l'IA avant l'université montre des programmes qui passent de contenus techniques vers des modèles fondés sur les compétences, bâtis sur des cadres tels que AI4K12 et les Five Big Ideas in AI, l'[[ai-literacy]] étant traitée comme une compétence transversale tandis que des instruments standardisés pour l'évaluer restent absents ([[caruana-pre-university-ai-education-slr-2026|Caruana et al. (2026)]]).

Les enseignants et les employeurs ne se sont accordés sur l'importance que d'une seule des 26 compétences en IA — fixer des attentes réalistes pour le travail augmenté par l'IA — et seulement trois des 26 étaient enseignées par la moitié ou plus des enseignants, ce qui constitue la preuve avancée par le rapport d'un écart de compétences en IA entre l'enseignement supérieur et les employeurs ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

La conception des activités d'apprentissage automatique en K-12 reste en surface : une revue derrière le cadre ICE-T a trouvé que l'usage invisible, l'interaction par bouton et le déploiement de modèle représentent près de 60 % des activités d'apprentissage supervisé codées, que la création ouverte n'apparaissait que deux fois, et que les perspectives technique et sociétale ne co survenaient que dans environ 3 % des activités ([[icet-ml-education-trust-2026|Haritz et al., 2026]]).

**L'innovation de programme [[discipline-specific-aied|spécifique au domaine]]** applique la conception de programme à des champs particuliers. **[[genai-architecture-education]]** explore comment l'IA générative remodèle la [[pedagogy|pédagogie]] de la conception architecturale. **[[talebzadeh-ai-green-education-2026]]** examine l'intégration de l'IA dans les programmes d'éducation verte. **[[connected-ai-lesson-planning-vietnam]]** et **[[llm-cultural-relevance-k12]]** traitent de la [[culturally-relevant-pedagogy|conception de programme culturellement adaptée]].

**Intégrer l'IA dans la discipline plutôt qu'à côté d'elle.** Un programme d'IA à trois niveaux (introductif, application, avancé) a incorporé l'apprentissage automatique dans des sujets existants de thermique tout au long d'un cours de 39.1 heures, plutôt que d'ajouter des cours optionnels d'informatique, évitant ainsi une charge supplémentaire pour les étudiants en génie mécanique, et a publié ouvertement son syllabus, ses données et son code ([[mechanical-engineering-ai-curriculum-2026|Li et al. (2026)]]).

Un cas en journalisme montre la variante « valeurs d'abord » : un étayage triadique valeurs–processus–compétences a fait passer les étudiants du reportage purement humain au travail intégrant l'IA, et pourtant 8 sur 9 (89 %) déclaraient confiance dans leurs décisions éthiques, tandis que les items d'enquête sur l'auctorialité et les biais ne révélaient qu'une compréhension superficielle ([[ying-genai-journalism-assessment-2026|Ngu et Weller (2026)]]).

**Les cadres [[governance|institutionnels]]** traitent du changement de programme à grande échelle. **[[finkelstein-principled-ai-education-2025]]** et **[[finkelstein-principled-ai-education-2025]]** fournissent des principes pour intégrer l'IA dans les programmes éducatifs. **[[ai-adoption-training-public-sector]]** examine les obstacles à l'adoption de programmes d'IA dans l'éducation du secteur public.

**Séquencer l'IA dans le cursus.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]] proposent un cadre « retenir, puis amplifier » qui séquence l'IA générative au niveau du programme : suspendre un outil génératif pendant qu'une capacité se forme, puis le rétablir pour amplifier cette capacité une fois que l'étudiant peut la diriger et juger ses retours. Régi par un critère formation-contre-délestage (si un segment de travail construit une capacité ou se contente de la faire passer par l'outil), le cadre relie la conception de programme à la [[cognitive-offloading]], à l'[[self-regulated-learning]] et à l'[[academic-integrity]], avec des points de contrôle difficiles à simuler à chaque charnière retenir-amplifier.

Le levier pour les stades les plus élevés n'est pas un supplément de cours : sur 89 projets de fin d'études sponsorisés, le passage du niveau de préparation à l'emploi 6 au niveau 7 était conditionné par une expérience intégrée dans l'industrie — stages en alternance et projets du Manufacturing Extension Partnership — de sorte que les diplômes exigent un apprentissage intégré au travail plutôt qu'un nouveau cours technique optionnel ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al. (2026)]]).

Une conséquence au niveau du programme de la capacité des modèles est que la conception résistante à l'IA expire. Des enseignants en informatique ont décrit le calibrage de leurs devoirs au regard de ce que les modèles ne pouvaient pas encore faire, puis l'obsolescence de ce calibrage — les problèmes d'un instructeur en cybersécurité exigeaient une véritable [[problem-solving|résolution de problèmes]] sept ou huit mois plus tôt, puis étaient simplement résolus — un animateur estimant la durée de conservation à environ un semestre. La conclusion structurelle de l'atelier est que presque chaque adaptation était faite par un enseignant individuel dans un seul cours, sans la coordination institutionnelle qu'exigerait une réponse curriculaire durable ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026]]).

**L'alignement de tout le cours lorsque l'IA générative est permise.** Une refonte en 2026 d'un cours introductif de [[physics-education|physique]] nucléaire et des particules ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]]) a intégré trois types d'activités aux rôles distincts — les cours magistraux pour les concepts et la notation, les travaux dirigés pour la pratique analytique standard, et les devoirs comme composante exploratoire « en forme de recherche » de problèmes inhabituellement difficiles et multiméthodes. Les frictions rapportées (un prérequis de programmation non déclaré, un temps insuffisant pour comprendre plutôt que seulement obtenir des réponses, et un désalignement entre cours magistraux, travaux dirigés, devoirs et [[summative-assessment|examen]]) illustrent que permettre l'IA générative impose un travail d'alignement sur l'ensemble du programme plutôt qu'un changement sur un seul type de devoir ; leur structure recommandée maintient le travail exploratoire autorisé par l'IA comme tâches avancées bonifiées, tandis que l'examen écrit sans assistance détermine la note.

**La profondeur d'alignement, non la fréquence d'usage, distingue les patrons d'intégration.** Sur 17 cas de modules de gestion, six intégraient l'IA générative systématiquement dans l'enseignement, l'apprentissage et l'évaluation (constructif), neuf le faisaient de façon incohérente (hybride) et deux de façon sporadique (ad hoc) ; les cas constructifs rapportaient les meilleurs résultats d'engagement, de capacité et de pertinence curriculaire ([[zhou-constructive-alignment-genai-business-2026|Zhou et al. (2026)]]).

**Les conseils d'alignement constructif sous examen critique.** Là où les sources ci-dessus rendent compte de l'alignement dans la pratique, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al. (2026)]] lisent la recommandation elle-même comme un discours. Leur [[qualitative-research|analyse critique du discours]] de 14 textes de littérature grise publiés de novembre 2022 à avril 2025 — pour l'essentiel des pages institutionnelles et des chapitres issus d'[[educational-development|unités d'apprentissage et d'enseignement]] en position centrale — a montré l'alignement constructif présenté comme un problème d'efficacité : l'IA générative y était « un moyen efficace et efficient de rédiger des grilles » qui pouvait « rationaliser le processus », anthropomorphisée comme « un expert pédagogique et un assistant », un « partenaire d'entraînement » ou un « assistant intelligent en conception pédagogique », tandis que le personnel académique ne fournissait que des « expertises disciplinaires » et que l'outil prenait en charge « le gros œuvre de l'élaboration des objectifs d'apprentissage, de l'organisation des contenus de cours ... et de l'alignement des composantes du cours ». Des recettes de prompts par copier-coller et des modèles numérotés faisaient de l'AC un produit standardisable, produisant trois modes d'échec : la performativité (un alignement qui n'a que l'apparence de l'être), l'effacement du contexte situé et critique, et un AC superficiel qui confond l'alignement avec la dimension constructive. Leur remède reséquence le flux de travail de conception de programme — les éducateurs doivent comprendre l'AC assez bien pour diriger, évaluer et rejeter la production de l'IA avant d'en déléguer la moindre part — et borne tout outil à un agent [[rag|à recherche augmentée]] institutionnel, fondé sur la politique locale, les grilles et les attributs de diplômés, avec un rôle de « tuteur liminal » qui prolonge plutôt qu'il ne remplace la relation avec l'[[educational-development|développeur]].

**Générer des tâches de modélisation alignées sur le programme.** Des plateformes dotées d'IA peuvent répondre au manque de temps et de ressources des enseignants pour concevoir des tâches de modélisation [[math-education|mathématique]] de haute qualité, en générant des problèmes alignés sur le programme et des recommandations pédagogiques fondés sur des principes de conception et sur la génération [[rag|à recherche augmentée]] — une approche illustrée par la variation directe en mathématiques au secondaire ([[ai-modeling-problem-generation-platform-2026]]). Les lectures de cours sont elles-mêmes devenues une cible de génération : Sidorkin (2026) a remplacé un manuel commercial par des lectures hebdomadaires générées par l'IA dans un cours de master sur le leadership éducatif, et bien que les étudiants les aient jugées utiles et que 75 pour cent aient déclaré avoir appris davantage que dans un cours comparable, les 4 487 pages de journaux ne portaient de citations dans le texte au format APA que sur environ 0.80 pour cent des pages, et associaient un campus ou un système nommé à des affirmations politiques assertives sur environ 1.03 pour cent des pages sans source vérifiable. La leçon sur les matériaux de programme est de traiter les lectures générées comme une production préliminaire soumise à la revue de l'enseignant, de budgéter le travail de l'enseignant pour la conception des prompts et la vérification, et de rassembler des sources validées dans l'assistant plutôt que de laisser les étudiants inférer la qualité des sources du contexte.

**La planification de leçon assistée par l'IA au niveau où le programme entre en classe.** Au point où un programme devient une leçon enseignée, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo et Tahir (2025)]] ont comparé expérimentalement des plans produits par les enseignants à des plans assistés par ChatGPT dans l'éducation artistique [[stem-education|STEAM]] pour enfants, constatant que les plans assistés par l'IA étaient significativement mieux notés par six professeurs experts (médiane de 20.5 contre 17.6, p = .002, effet important). Ils montrent que le gain dépend de la manière dont l'enseignant délègue : la méthode recommandée comble les lacunes de contenu dans une leçon esquissée par l'enseignant lui-même (préservant l'[[agency|autonomie]] de conception de l'enseignant) plutôt que de déléguer le plan entier, et ils apportent un modèle de prompt Rôle–Instructions–Objectif final pour une génération reproductible et contrôlée en qualité — la preuve que la planification de leçon assistée par l'IA est la plus forte lorsqu'elle est intégrée aux décisions de programme de l'enseignant, et non substituée à celles-ci. Dans l'enseignement des sciences, la validation par des experts rend un verdict parallèle sur la conception de plateforme : [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli et Yildirim (2026)]] ont demandé à onze spécialistes de l'[[science-education]] d'évaluer ChatGPT-4 et un outil centré sur l'éducation (Teacher's Buddy) sur des plans de sixième alignés sur le programme révisé de Turquie et sur le modèle d'apprentissage par [[design-based-research|conception]] (Design-Based Learning). La plateforme centrée sur l'éducation obtenait de meilleurs scores sur les huit critères de qualité — y compris les stades intensifs en rétroaction et l'alignement sur le programme — la preuve qu'intégrer une structure pédagogique dans une IA produit une sortie mieux alignée ; pourtant certains experts préféraient encore le plan généraliste pour son accent plus fort sur le socio-affectif, et 7 sur 11 jugeaient les plans « applicables avec corrections » plutôt que directement utilisables. Le choix de la plateforme et du cadrage du prompt, et pas seulement celui de l'IA, façonne la manière dont les plans générés s'alignent sur les standards de programme et les modèles de processus.

C'est la structure, non la formulation du prompt, qui rend fiable la rédaction par l'IA en production : le pipeline Curriculum-as-Code de [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] élaguait agressivement le contexte et générait les matériaux section par section sur 28 contextes de projet, ce qui a réduit le temps de préparation de l'enseignant d'environ huit à deux heures par séquence, et n'a laissé aucune hallucination conceptuelle ou mathématique à la revue humaine.

### Connexions aux concepts associés

La conception de programme se rattache directement à l'[[learning-design]] — le programme définit le quoi, l'enseignement définit le comment. Elle se rattache à l'[[ai-literacy]] parce que l'intégration des compétences en IA est un défi curriculaire central, au [[teacher-role]] et à l'[[educational-development]] parce que le changement de programme exige la préparation des éducateurs, et au [[scaffolding]] parce que des programmes bien conçus étayent le développement des compétences sur plusieurs cours et plusieurs années. Les connexions à l'[[higher-ed]] et au [[k-12]] reflètent la pertinence de la conception de programme à tous les niveaux éducatifs.

## Concepts liés
- [[pedagogical-partnerships]] — Les partenariats pédagogiques
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Parapluie : les pédagogies et stratégies d'enseignement en IA éducative
- [[recommender-systems-and-learning-paths]]
## Articles liés
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Analyse critique du discours des recommandations sur l'alignement constructif avec l'IA générative (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Addressing Trust in AI Systems through Education: A Didactic Perspective
- [[refrain-amplify-genai-curriculum-2026]] — Cadre curriculaire « retenir puis amplifier » pour séquencer l'IA générative (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Project-Based AI Education Curriculum in Thermal Engineering
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Workforce Readiness Level framework for smart manufacturing in the AI era
- [[rewriting-curriculum-genai-pedagogy-2026]] — Rewriting the curriculum: GenAI-driven pedagogical change
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — AI Skills Framework: 26 assessable skills for curriculum mapping
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Just-in-Time AI Co-Creation Across Disciplines
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[niri-steam-ai-literacy-review-2026]] — STEAM education for AI literacy: systematic review
- [[caruana-pre-university-ai-education-slr-2026]] — Preparing learners and teachers for an AI-driven future: SLR of pre-university AI education (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Plateforme dotée d'IA générant des problèmes de modélisation mathématique (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Report from an online workshop on computing assessment in the age of generative AI
