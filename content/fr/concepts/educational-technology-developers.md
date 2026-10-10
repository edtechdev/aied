---
connected_resources: [playlab]
title: "Les développeurs de technologie éducative"
created: "2026-09-17T15:20:00-04:00"
updated: "2026-10-10T03:24:44-04:00"
type: concept
foundations: [educational-development, learning-design]
technology: [learning-analytics, edtech-platform, open-source]
audience: [instructional designers, software developers, learning analytics designers, institutions, educational technology developers]
page_kind: [evaluation]
confidence: high
methods: [design-based-research]
translation_of: concepts/educational-technology-developers
source_updated: "2026-09-17T15:20:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Les développeurs de technologie éducative** — les personnes et les organisations qui construisent la technologie éducative : concepteurs de produits, développeurs de logiciels, ingénieurs de l'apprentissage, concepteurs d'analytique de l'apprentissage, et les entreprises d'edtech, les laboratoires universitaires et les projets [[open-source|libres]] dans lesquels ils travaillent. Dans l'IA en éducation, c'est le rôle qui transforme une capacité de modèle en quelque chose qu'un enseignant ou un apprenant peut réellement utiliser, et il porte des décisions qu'aucune étape ultérieure ne peut défaire : sur quelles données une affirmation de conception repose, dans quelle mesure un pipeline d'[[learning-analytics|analytique]] ou un système d'[[intelligent-tutoring|tutorat]] est ancré dans les matériaux sous licence de l'institution elle-même, si les enseignants et les apprenants sont inclus dans la conception, quelles hypothèses de [[learning-design|conception pédagogique]] sont inscrites dans les valeurs par défaut, et ce qu'il advient du produit après la fin du financement. À travers les rapports de systèmes et les études de déploiement de la base de connaissances, la leçon récurrente est que le contexte de déploiement, et non le modèle, constitue généralement la contrainte déterminante.

## Questions à examiner

- Si les méta-analyses affirmant que « l'IA améliore l'apprentissage » reposent sur une méthodologie invalide, comme l'a constaté l'audit de [[oneill-presumed-effective-meta-analysis-2026]], sur quelles données une feuille de route produit est-elle réellement autorisée à s'appuyer ?
- Les explications d'un algorithme devraient-elles être rédigées dans le langage curriculaire de l'enseignant, même lorsque cela coûte plus d'effort de conception que d'exposer les importances de variables — et qui paie cet effort ?
- Lorsqu'un outil est co-conçu avec des étudiants, quel verdict décide : les gains d'apprentissage mesurés, ou les 96% qui ont dit vouloir le conserver ?
- Un déploiement sur site, sous licence ouverte, est-il un choix technique ou un choix de gouvernance — et les exigences de transparence devraient-elles devenir une condition d'achat ?
- Que doit un développeur à une institution lorsque la subvention s'achève : un produit maintenu, un dépôt bifurcable, ou un énoncé franc disant que le système n'a jamais été une intervention validée ?

## Introduction

Le développeur se situe un niveau au-dessous de la plateforme. [[edtech-platform]] décrit le système déployé et la partie prenante qu'il devient une fois dans une école ou une université ; cette page porte sur les personnes qui décident de ce que fait ce système. La distinction importe parce que les constats au niveau de la plateforme — faible adoption, biais d'équité, friction d'approvisionnement — sont généralement des conséquences de choix de conception faits plus tôt, par quelqu'un qui n'a jamais rencontré les apprenants.

Le rôle se distingue aussi de ses voisins. Le [[learning-design|conception pédagogique]] et la [[curriculum-design|conception de programmes]] conçoivent un cours pour une cohorte connue ; un développeur de technologie conçoit un produit que de nombreux cours, enseignés par des gens qu'il n'a jamais rencontrés, utiliseront — c'est pourquoi les valeurs par défaut, la configurabilité et la documentation portent un poids pédagogique. L'[[educational-development|développement éducatif]] soutient le personnel enseignant d'une institution depuis l'intérieur ; les développeurs se tiennent à l'extérieur ou aux côtés, fournissant les outils que ce personnel est ensuite invité à adopter. Et la [[design-based-research|recherche fondée sur la conception]] est le standard de données probantes que l'on demande de plus en plus à ces développeurs de satisfaire : itératif, contextuel, et rapporté avec ses propres limites.

### Qui construit l'IA éducative

**Des laboratoires de recherche bâtissant une infrastructure publique.** [[oatutor-open-source-adaptive-tutor-2023|OATutor]] a été construit à l'UC Berkeley comme le premier système de tutorat adaptatif entièrement à code ouvert fondé sur des principes de [[intelligent-tutoring|STI]] : une base de code sous licence MIT assortie d'une bibliothèque d'algèbre sous licence Creative Commons, d'une estimation de maîtrise par [[knowledge-tracing|traçage bayésien des connaissances]], d'une infrastructure de tests A/B et d'une prise en charge de LTI. Sa raison d'exister est une décision de conception — des plates-formes propriétaires avaient cantonné la recherche sur l'[[adaptive-learning|apprentissage adaptatif]] à des systèmes fermés — et sa voie d'élaboration en est une autre : 16 créateurs ont produit un cours d'algèbre de niveau collège en six mois, après 2.27 heures de formation.

**Les bâtisseurs de modèles.** [[learnlm-improving-gemini-learning]] reformule l'amélioration d'un modèle pour l'apprentissage comme un [[prompt-engineering|suivi d'instructions pédagogiques]] : le comportement est fixé par application au moyen d'instructions système, plutôt que par une définition unique de la [[pedagogy|pédagogie]], et des experts relecteurs l'ont préféré de +31% à GPT-4o et de +13% à Gemini de base. Le point pratique est que la pédagogie est trop dépendante du contexte pour être définie globalement ; la capacité utile est l'adhésion aux instructions qu'un développeur écrit, mesurée par des scénarios au niveau de la conversation plutôt que par des [[benchmark|repères]] à tour unique.

**Les architectes de modèles de connaissances.** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] soutient que l'[[personalized-learning|apprentissage personnalisé]] a besoin de plus qu'une ontologie statique, et propose des systèmes d'ontologies cartographiées, accompagnés de règles et d'analytiques, à la place de l'architecture classique à quatre modèles des STI, ainsi qu'un cadre de réutilisation en huit classes de métadonnées visant à réduire le coût de chaque nouvelle construction.

**Les ingénieurs d'infrastructure et de mesure.** [[a4l-analytics-pipeline]] décrit un pipeline modulaire, agnostique quant au domaine, pour les données d'interaction des apprenants, validé sur trois assistants d'IA éducatifs, où des méthodes construites pour un domaine se sont étendues à un autre — une infrastructure d'[[learning-analytics|analytique de l'apprentissage]] réutilisable plutôt qu'un tableau de bord pour un seul cours. [[stanbkt-bayesian-knowledge-tracing]] montre le cas complémentaire : une réimplémentation bayésienne a produit une prédiction *identique* à celle de l'outil établi fondé sur une estimation ponctuelle (AUC 0.711), ne différant que par le coût et par des intervalles crédibles qui rendent interprétable une comparaison de conditions.

**Les bâtisseurs au sein des institutions.** [[moodle-ai-tutoring-deep-learning]] intègre le tutorat par LLM dans un LMS existant plutôt que d'expédier un outil autonome, abaissant le seuil d'adoption que la littérature sur les STI nomme comme une raison pour laquelle les systèmes échouent en pratique. [[savvy-student-attention-video-learning]] transforme des signaux d'attention multimodaux en une interface que les enseignants peuvent lire avant de publier une vidéo. [[instructional-agents-multi-agent-course-gen|Instructional Agents]] automatise les trois premières phases de l'ADDIE au moyen d'agents spécialisés par rôle, et son ablation est une leçon de conception : la référence à agent unique a obtenu les moins bons scores, Full Co-Pilot a battu Autonomous de 0.5 à 0.9 points, et l'absence de différence de qualité entre les moteurs a fait du moins coûteux le choix par défaut.

### Sur quoi une affirmation de conception peut reposer

**Le socle de données probantes est plus faible qu'il n'y paraît.** [[oneill-presumed-effective-meta-analysis-2026]] a audité 14 méta-analyses affirmant que l'IA améliore l'éducation et n'a trouvé aucune dont les affirmations étaient justifiées : toutes sauf deux définissaient le traitement comme un outil plutôt que comme une intervention pédagogique, 61% des 59 études primaires examinées présentaient des problèmes de validité, l'hétérogénéité était élevée partout où elle était rapportée, les analyses de modérateurs manquaient de puissance, et le biais de publication n'était jamais évalué de façon valable. Une méta-analyse rétractée était encore citée comme faisant autorité par 60% des articles ultérieurs échantillonnés. Pour un développeur, « l'IA améliore l'apprentissage » est une affirmation de catégorie de produit, non un intrant de conception.

**Rapportez l'incertitude et le coût total, et pas seulement l'exactitude.** Pour [[stanbkt-bayesian-knowledge-tracing|StanBKT]], l'inférence bayésienne n'achète rien en prédiction et tout en capacité à dire quels effets étaient crédibles. [[shen-sustainable-ai-knowledge-base-cs-education-2026]] rapporte les ablations de recherche documentaire, l'ajustement conscient de la quantification, la VRAM, l'énergie par requête et l'hallucination mesurées au regard de ressources ouvertes retrouvées — avec la mise en garde des auteurs eux-mêmes selon laquelle le système n'est pas un tuteur validé. C'est la discipline d'[[ai-ed-evaluation|évaluation]] qui rend une affirmation de déploiement vérifiable.

### La co-conception avec les enseignants et les apprenants

**Les explications doivent parler le langage de l'enseignant.** [[xai-teachers-trust-edtech-recommendations-2026]] a mené une expérience intra-sujet auprès de 41 enseignants de chimie sur un outil de recommandation par apprentissage automatique : la compréhensibilité, la [[trust|confiance]] et l'acceptation corrélaient positivement, et des explications ancrées dans le domaine, formulées dans le langage des programmes, produisaient une compréhensibilité, une [[trust-calibration|confiance]] apprise et une acceptation significativement plus élevées que des explications fondées sur l'importance des variables. La confiance était aussi dynamique — plusieurs enseignants ont dit que seule l'expérience de classe la réglerait — et l'acceptation dépendait de l'alignement pédagogique et de la réduction de la charge de travail.

**La co-conception à l'échelle institutionnelle.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]], à l'Open University, a été construit au moyen de six études fondées sur la conception, sur 18 mois, avec 498 étudiants et 20 membres du personnel. Environ 20% étaient initialement sceptiques ; après un usage pratique, 96% voulaient le conserver, et un ECR exploratoire a montré un temps d'usage double, mais aucune différence significative sur les données de processus d'apprentissage. Les facteurs favorables étaient organisationnels — parrainage par la direction, collaboration entre unités, itération informée par les données — avec des lacunes dans les capacités de pensée systémique.

### Approvisionnement, ouverture et après la fin du financement

[[shen-sustainable-ai-knowledge-base-cs-education-2026]] fournit les intrants dont une décision d'approvisionnement a besoin : un plancher matériel de 12 Go de VRAM, un plafond d'exactitude pour un modèle de classe 7B, l'énergie par requête, et un ordonnancement des choix — la recherche documentaire d'abord (sans elle, le modèle obtenait 52.3%, sous une référence TF-IDF), puis l'ajustement fin, puis la compression consciente de la quantification ; la licence ouverte est la condition préalable pour servir un corpus localement. [[reclaiming-epistemic-agency-co-agency-2026]] formule la même décision comme une question de gouvernance : les exigences de transparence font de l'achat une gouvernance épistémologique, la contestabilité et la provenance deviennent des conditions, et les districts disposant des capacités les plus faibles font face à l'exigence la plus élevée. [[credential-cognitive-stewardship-ai-assessment]] ajoute que la gouvernance par le fournisseur n'apparaissait que dans 29% des 30 paquets de politiques audités, qui spécifiaient bien plus aisément ce que l'IA pouvait faire que ce qu'il restait comme preuves d'apprentissage. [[genai-mindtool-generative-learning]] pose la question de conception — le produit encourage-t-il un apprentrentissage *avec* l'outil, ou délègue-t-il le travail cognitif — et [[vocabulary-difficulty-prediction]] montre l'arbitrage en miniature : le modèle boîte noire le mieux classé (r > 0.91) était moins explicable que le modèle interprétable (r > 0.77).

## Concepts liés

- [[edtech-platform]]
- [[learning-design]]
- [[curriculum-design]]
- [[design-based-research]]
- [[educational-development]]
- [[open-source]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[teacher-ai-competency]]
- [[technology-acceptance-model]]
- [[universal-design-for-learning]]
- [[assessment-validity]]
- [[ai-ed-evaluation]]
- [[governance]]
- [[educational-policy-ai]]
- [[sustainability]]
- [[privacy]]

## Articles liés

- [[oatutor-open-source-adaptive-tutor-2023]]
- [[moodle-ai-tutoring-deep-learning]]
- [[learnlm-improving-gemini-learning]]
- [[savvy-student-attention-video-learning]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[oneill-presumed-effective-meta-analysis-2026]]
- [[a4l-analytics-pipeline]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[instructional-agents-multi-agent-course-gen]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]]
- [[credential-cognitive-stewardship-ai-assessment]]
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[genai-mindtool-generative-learning]]
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]]
- [[vocabulary-difficulty-prediction]]
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]]
