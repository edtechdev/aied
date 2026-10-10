---
title: "Recherche éducative assistée par IA"
created: "2026-10-05T10:45:00-04:00"
updated: "2026-10-10T02:17:25-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
translation_of: concepts/ai-assisted-educational-research
source_updated: "2026-10-05T14:14:11-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Synthèse :** la recherche éducative assistée par IA est l'usage de l'IA comme instrument du propre travail savant du champ — rechercher et extraire de la littérature, trier des enregistrements pour des revues, coder des données qualitatives, analyser des données, rédiger et réviser des manuscrits, et la réflexion qui demande ce que ces outils font au savoir produit. Elle se distingue de la recherche *sur* l'IA en éducation : les dispositifs utilisés pour étudier si l'IA aide les apprenants relèvent des [[research-methods-aied|méthodes de recherche]], l'appréciation des systèmes d'IA relève de l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]], et la lecture d'une étude isolée en AIED relève de [[interpreting-and-applying-aied-research|la manière de lire et d'appliquer une recherche en AIED]]. Cette page couvre le flux de travail propre du chercheur et l'enquête du praticien-chercheur — la recherche sur l'enseignement et l'apprentissage et la recherche en classe — ainsi que les enjeux épistémiques lorsque l'automatisation entre dans l'une ou l'autre. Ses preuves sont minces et récentes : une proposition de cadre, le compte rendu réflexif d'une équipe de revue, une petite étude par groupes de discussion, deux études bibliométriques, un rapport d'atelier et des études de cas menées par un seul chercheur. Elle décrit une direction d'évolution plutôt qu'une pratique établie, et le volet de la recherche des praticiens est le plus mince de tous.

## Questions à examiner

- Qui compte comme chercheur ici : l'universitaire financé, l'étudiant diplômé, le chargé de cours qui étudie sa propre classe ? Lesquels la description des preuves décrit-elle réellement ?
- Un triage par IA a exclu une étude de votre revue. Qui est responsable de cette décision — le fournisseur, l'outil, le protocole, ou vous ?
- Lorsqu'un modèle résume des sources que vous n'avez pas lues, quelle part du travail savant avez-vous cessé d'accomplir ?
- Un apprenant simulé peut tester un tuteur sur de nombreux profils. Que vérifieriez-vous avant de croire son verdict sur les vrais étudiants ?
- L'enquête des praticiens est généralement locale et de petite taille. Ses preuves devraient-elles satisfaire au critère d'un essai financé, ou être pesées différemment parce que le contexte en est l'essentiel ?
- Si l'IA a aidé à rédiger un article, que devrait-on en dire aux lecteurs, et où cette divulgation devrait-elle figurer ?

## Introduction

La recherche éducative assistée par IA est le champ qui retourne les outils d'IA contre son propre travail. L'objet d'étude n'est pas un apprenant utilisant un tuteur d'IA, mais un chercheur utilisant un modèle pour chercher, trier, extraire, coder, analyser ou écrire. Ce qui change est le flux de travail du chercheur et, plus discrètement, les critères selon lesquels sa production compte comme preuve.

Cette page ne porte délibérément pas sur la recherche *sur* l'IA en éducation. Les questions portant sur le point de savoir si un tuteur d'IA améliore l'apprentissage sont traitées par les [[research-methods-aied|méthodes de recherche]], l'appréciation des systèmes d'IA par l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]], et la lecture prudente d'une étude isolée par [[interpreting-and-applying-aied-research|la manière de lire et d'appliquer une recherche en AIED]] et par [[limitations-in-aied-research|les limites transversales de ces données probantes]]. Les deux littératures sont souvent confondues, et les affirmations relatives aux outils de la seconde sont fréquemment empruntées pour soutenir la première.

Le champ couvert va de la recherche bibliographique au triage, au codage, à l'analyse et à l'écriture, et inclut la réflexion épistémologique qui demande ce que l'automatisation fait au savoir qu'un champ produit. Il inclut aussi la recherche des praticiens : la recherche sur l'enseignement et l'apprentissage et l'enquête en classe, où un enseignant étudie sa propre pratique. Ce volet est la partie la plus faible de cette page, et les sections ci-dessous le disent plutôt que de l'édulcorer.

## Comment l'IA entre dans le flux de travail de la recherche

Les récits d'usage sont plus cohérents que les preuves d'effet. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai et Chan (2026)]] ont interrogé 28 étudiants de troisième cycle en recherche, en sept groupes de discussion, dans un établissement, et ont constaté que 27 des 28 utilisaient l'IA générative à un moment de leur recherche : idéation, revue de littérature, explication, traitement des données, programmation, rédaction académique, révision et traduction.

Leurs participants étaient calibrés plutôt que crédules. Ils associaient les outils aux tâches selon les enjeux perçus et les exigences intellectuelles, utilisaient l'IA plus lourdement dans les travaux procéduraux à faible enjeu, et demeuraient prudents là où la contribution savante était centrale. Ils maintenaient aussi une supervision humaine tout au long du processus, traitant le modèle comme un assistant qui pouvait être « trompeur » ou « tout à fait faux ».

Le constat relatif aux politiques est celui qui est pratique. Les orientations institutionnelles existantes portaient sur l'enseignement, l'apprentissage et l'évaluation, et les participants les éprouvaient comme abstraites et mal alignées sur la pratique de la recherche. Les auteurs proposent des lignes directrices orientées vers les chercheurs, bâties sur un cadre de littératie en IA à quatre dimensions, comme étayage du développement plutôt que comme livre de règles.

L'étude porte sur un seul établissement, un groupe autosélectionné de 28 personnes et des récits auto-déclarés ; les étudiants ont pu sous-déclarer leur usage pour des raisons d'intégrité. Elle décrit comment un groupe capable utilise ces outils, non ce que cet usage produit.

## Recherche et extraction bibliographiques

Un rapport d'atelier dresse un agenda plutôt qu'il ne le mesure. L'atelier CHIIR 2026 sur l'IA générative et la recherche académique a réuni des chercheurs en interaction humaine avec l'information et en extraction, et son rapport décrit des systèmes conçus pour l'extraction de documents qui résument désormais, recommandent, synthétisent et conversent — ébranlant l'hypothèse selon laquelle le système localise les sources tandis que l'interprétation reste du côté de l'utilisateur.

Une présentation éclair a testé comment les modèles reconstruisent les chercheurs. Confrontés à la vérité de terrain d'OpenAlex et de Google Scholar portant sur 1,596 auteurs sources répartis sur 10 disciplines et 8 régions du monde, les chercheurs très cités étaient reconstruits à un rythme environ deux fois supérieur à celui de leurs pairs moins cités, avec un test portant sur DeepSeek R1, Llama 4 Scout et Mixtral 8×7B.

Une bibliothécaire a fait état d'une « lacune de confiance » : les étudiants se fiaient souvent trop à la recherche générative, tandis que les enseignants s'en méfiaient, et les ateliers à session unique étaient jugés insuffisants pour une littératie durable. Le fil de conception auquel les participants revenaient le plus était la « friction » — maintenir les utilisateurs engagés dans le travail critique, parfois inconfortable, d'où vient l'apprentissage.

Le rapport porte sur un événement unique et autosélectionné, et consigne largement des opinions, des principes de conception et des questions de recherche. Ses chiffres appartiennent à des présentations individuelles plutôt qu'à l'atelier, et rien en lui ne montre que la recherche académique assistée par l'IA améliore ou nuit à l'apprentissage.

## Triage et automatisation des revues systématiques

Les revues systématiques sont le domaine où l'automatisation a le plus progressé, et où ses limites se manifestent. [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] réfléchissent à la revue d'une équipe interdisciplinaire et rendent compte que l'automatisation a réduit le fardeau procédural principalement au niveau du triage des résumés — des outils tels qu'ASReview, SWIFT-Review, Covidence, AIScreenR et MetaMate — tandis que l'extraction de données, la réconciliation et la synthèse restaient du ressort des évaluateurs humains. Le mentorat et la discussion entre pairs ont fonctionné comme une infrastructure méthodologique, et non comme une courtoisie.

Leur conclusion est une division du travail plutôt qu'une passation de relais : affecter l'automatisation à la charge procédurale, vérifier chaque production, et garder les décisions interprétatives humaines. Le compte rendu est la réflexion d'une équipe, sans condition de comparaison, si bien que ses stratégies sont décrites plutôt que testées.

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta et Lin (2026)]] quantifient le problème de reporting sur 888 articles portant sur l'automatisation des revues, comportant 14,726 éléments d'annotation. Depuis 2023, 38.0% des articles sur les logiciels et les produits ne rendaient compte d'aucune évaluation, contre 9.3% des articles sur les LLM. L'écart survit à la stratification : dans le triage et la sélection, les articles sur les logiciels comportaient en moyenne 3.2 éléments d'évaluation substantiels, avec 39.3% n'en rendant compte d'aucun, tandis que les articles sur les LLM en comportaient en moyenne 7.3, avec un taux d'absence d'évaluation de 3.8%.

Une évaluation favorable n'impliquait pas l'aptitude à la délégation. Sur 118 articles portant sur les LLM avec des évaluations exclusivement positives, 52% rendaient compte d'au moins une préoccupation indiquant que le flux de travail restait en deçà du critère requis pour son rôle. L'accès aux modèles était massivement propriétaire : 84.1% de l'usage des LLM reposaient sur des systèmes propriétaires ou hébergés, 11.0% était mixte, et seulement 4.9% portait sur des poids ouverts.

À partir de ces régularités, les auteurs dérivent PRISMA-LLM, un cadre à trois couches dont les cinq niveaux de mise en œuvre sont des paliers de divulgation plutôt que des paliers de risque. C'est une proposition offerte à l'épreuve, non une extension officielle entérinée par le comité exécutif de PRISMA. Le silence au niveau de l'article, préviennent-ils, n'est pas la preuve que la validation est absente — elle peut résider dans un rapport de produit, un protocole ou un dépôt.

## Codage et analyse qualitatifs

L'analyse qualitative est l'étape où l'interprétation est le produit, ce qui rend la délégation plus difficile à justifier. La page sur la [[qualitative-research|recherche qualitative]] rassemble les preuves du corpus sur le codage assisté par l'IA, notamment des études montrant que la concordance entre humains et modèles n'est pas la même chose que la qualité du codage, et que les erreurs peuvent se propager en cascade dans l'analyse temporelle. Cette littérature traite le modèle comme une aide à la mise à l'échelle, dont les productions exigent une vérification par confrontation au jugement humain.

[[ai-methodologies-science-education-research-2026|Martin et al. (2026)]] décrivent directement ce changement de rôle. À mesure que des modèles de codage automatisé sont appliqués, le chercheur passe du codage des données des étudiants à la validation des productions du modèle ; lorsque des modèles non supervisés regroupent le raisonnement, l'algorithme accomplit l'analyse exploratoire initiale. Les chercheurs, soutiennent-ils, ont de plus en plus besoin de compétences en science des données, aux côtés de l'expertise qualitative, quantitative et théorique.

Leur cadre fournit aussi la vérification qui importe ici : l'IA explicable peut révéler si le codage automatisé suit la compréhension sémantique ou seulement les mots-clés. Un pipeline de codage qui s'accorde aux étiquettes humaines peut néanmoins lire la mauvaise chose.

## L'analyse des données et les enjeux épistémiques

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen et Graulich (2026)]] mettent en cause la production de savoir du champ elle-même, et leur article est la colonne vertébrale de cette page. Ancré dans le récit que Hasok Chang (2004) donne de l'itération épistémique — des stades successifs de savoir qui se bâtissent les uns sur les autres en vue de finalités épistémiques — ils établissent un parallèle avec le développement du thermomètre sur environ 150 ans et soutiennent que le champ se trouve peut-être aujourd'hui à l'intérieur d'une itération comparable.

Leur inquiétude centrale est épistémique plutôt que technique. Le problème de la mesure nomique de Chang énonce que mesurer une quantité requiert une loi la reliant à quelque chose d'observable, or cette loi ne peut être testée empiriquement sans déjà connaître la quantité. Les fonctions de mesure dérivées de l'IA, qui émergent des données d'entraînement et de l'optimisation plutôt que du chercheur, peuvent intensifier ce problème plutôt que le résoudre, parce qu'elles peuvent sembler précises et prédictives tout en restant opaques.

Le cadre comporte sept phases : le cadrage du problème ; l'instrumentation et la mesure ; l'expérimentation et l'inférence fondée sur les preuves ; les comparaisons et la réplication ; la construction de normes et de consensus ; la mise en œuvre et ses conséquences ; et l'affinement continu. Les auteurs les présentent comme des dimensions analytiques qui peuvent se répéter, se chevaucher ou être absentes, non comme une séquence validée.

La comparabilité est la phase dont l'arête est la plus vive en matière d'équité. Le principe de Regnault exige qu'un instrument donne la même lecture dans les mêmes conditions et que des instruments d'un même type s'accordent — mais la comparabilité doit s'étendre aux populations étudiantes, et l'apprentissage automatique tend à mieux coder les idées canoniques que les manières diverses dont les étudiants expriment des idées plus faibles.

Ils nomment aussi un problème d'obligation de rendre compte. Les chercheurs utilisent des modèles pré-entraînés dont ils peuvent ignorer les données d'entraînement, l'ajustement fin et les objectifs, ce qui ajoute une couche de dépendance épistémique ; parce que ces systèmes émergent de réseaux sociotechniques, la responsabilité devient difficile à attribuer — un « problème des mains multiples ».

L'honnêteté nécessaire est que l'article ne rend compte d'aucune donnée et n'établit aucun effet sur l'apprentissage. Il ne montre pas que les méthodologies d'IA améliorent la recherche ou produisent des conclusions plus valides ; cette comparaison est posée comme un travail à venir, et les auteurs reconnaissent que leur hypothèse « pourrait bien se révéler incorrecte ».

## Rédaction de la recherche, citation et intégrité

L'écriture est le lieu où l'assistance de l'IA est la plus visible et où ses échecs ont le plus de conséquences, parce qu'une référence est une affirmation de responsabilité. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] ont audité l'intégralité de l'ACM Digital Library — 723,930 publications et 15,872,533 références — et ont tracé 113,588 références issues de 5,225 articles d'enseignement de l'informatique publiés à partir de 2021.

Ils ont vérifié manuellement 828 enregistrements suspects et ont trouvé 30 références contenant des informations bibliographiques vérifiablement fabriquées, réparties sur 14 articles, tous de 2025 et 2026. Au SIGCSE Technical Symposium, le nombre est passé de 3 dans les actes de 2025 à 17 en 2026, apparaissant dans 2.3% des articles des actes de 2026. Dix-sept des 30 étaient des hybrides associant un titre réel à des auteurs fabriqués ou incorrects.

Leur décompte est une borne inférieure délibérée, et ils présentent le problème comme partagé plutôt que résolu par le logiciel. Les auteurs devraient vérifier chaque œuvre citée, en particulier lorsque l'IA générative a été employée dans la rédaction ; les évaluateurs ne peuvent pas auditer chaque référence, si bien que les lieux de publication adoptent des vérifications ciblées ; les éditeurs devraient améliorer les métadonnées. La détection automatisée hérite des défauts des métadonnées qu'elle traite comme vérité de terrain.

Les effets d'échelle de l'écriture assistée par l'IA apparaissent dans une seconde étude bibliométrique. [[ai-assisted-writing-research-teams|Wang et al. (2026)]] ont analysé 147,074 publications des revues du portefeuille de PLoS et de Nature depuis 2020 et ont associé l'écriture assistée par l'IA à des équipes plus petites et à dominance junior. Au passage extrême de l'absence d'assistance à une assistance pleine par l'IA, la taille des équipes était inférieure de 22.1% dans PLoS et de 45.5% dans Nature (Poisson β = −0.250 et −0.607, tous deux p < 0.01).

L'impact n'a manifestement pas pâti. Environ 7.34% des articles de PLoS assistés par l'IA et 7.40% de ceux de Nature ont atteint les 5% supérieurs du FWCI, au-dessus des deux groupes de comparaison rédigés par des humains, et les comparaisons appariées ont montré une probabilité plus élevée de 3.0% et 2.7% d'atteindre les 5% supérieurs du FWCI (tous deux p < 0.01). Les données sont observationnelles, si bien que les auteurs se refusent à des affirmations causales fortes.

## Les agents persistants dans l'environnement de recherche

Au-delà des invites uniques, des agents persistants sont en cours d'intégration dans l'espace de travail de la recherche elle-même. [[persistent-ai-agents-academic-research|Alzahrani (2026)]] rend compte d'une étude de cas d'un seul chercheur sur 115 jours, portant sur un agent doté d'une mémoire durable, de fichiers locaux, d'outils externes, de routines programmées et de rôles délégués, fonctionnant dans l'espace de travail d'un médecin-chercheur.

Les résultats descriptifs sont importants. La télémétrie récupérable de l'agent principal comportait 75,671 enregistrements dédoublonnés sur 96 jours actifs, soit une fraction de jours actifs de 0.835 ; l'espace de travail comportait 502 fichiers liés à la mémoire, 17 répertoires d'agents configurés et 57 fichiers de compétences. Un sous-ensemble strict de 25 jours en mai comportait 627 événements achevés par le modèle et 73,950,305 jetons enregistrés, dont 82.9% étaient des lectures de cache, avec environ US\$1,961 de dépenses système observées.

La principale contribution de l'étude est un cadre de mesure — PARE-M — construit parce que les résultats qu'un agent persistant est censé soutenir, tels que la gouvernance et le coût par artefact, sont invisibles aux repères de référence épisodiques. Son constat négatif central est que le volume agrégé des interactions n'a pas démontré une réduction de l'apport humain : à mesure que la mémoire et les procédures s'accumulaient, la portée du travail délégué s'étendait, si bien que la régularité la plus forte est l'expansion de la capacité plutôt qu'une substitution de la main-d'œuvre prouvée.

Les limites sont celles qu'invite une étude de cas unique auto-observée. Un seul chercheur était à la fois utilisateur, concepteur, source de données, analyste et bénéficiaire, sans groupe témoin, sans période de référence et sans codeur indépendant pour les événements de gouvernance.

## Les apprenants simulés comme instruments de recherche et d'évaluation

La [[simulating-students|simulation d'étudiants]] est la page de la base de connaissances consacrée à la technique et au phénomène : comment construire un apprenant synthétique dont l'état de connaissances et les erreurs sont assez fidèles pour tenir lieu de personne. Cette page traite le même dispositif comme un instrument de recherche et d'évaluation — à quoi sert un apprenant synthétique *en tant que* tel lorsqu'une intervention, un instrument, un repère de référence ou un tuteur doit être testé à une échelle ou dans des conditions que de vrais apprenants ne peuvent fournir.

L'usage le plus clair est l'évaluation d'un tuteur dans le temps. [[educlaw-bench-pedagogical-llm-agents-2026|Lee et al. (2026)]] placent un tuteur agent dans une relation de 30 jours avec un apprenant simulé dont les réponses sont pilotées par sa maîtrise, issue d'un modèle de traçage des connaissances entraîné sur des données d'étudiants réels. En évaluant 10 adaptateurs d'agents, chaque adaptateur a plafonné en 5 à 10 jours, bien en deçà d'une référence d'apprentissage idéal, un résultat qu'une évaluation à session unique ne peut atteindre. Une vérification de calibration confrontée à l'exactitude observée des sondes épouse la diagonale (ECE 0.049, Brier 0.033 sur 1.19 million de tentatives).

La fidélité est la condition préalable, et elle est mesurable. [[beagle-grounded-learner-emulation-2026|Wang et al. (2026)]] rendent compte d'une divergence comportementale par rapport aux traces d'étudiants réels de DKL = 0.31, contre 0.53 pour la meilleure ligne de base, et dans un test de Turing à 71 évaluateurs, leurs traces étaient statistiquement indiscernables des données d'étudiants réels (52.8% d'exactitude, d′ = 0.15). Le défaut à éviter est le biais de compétence : les modèles sollicités par une invite résolvent la tâche trop bien pour tenir lieu de novices.

L'état de croyance est la part qui est facile à falsifier. [[llm-student-simulation-misconception-faithfulness|Do, Sonkar et Sachan (2026)]] ont montré que, sur sept modèles allant de 4B à 120B paramètres, les simulateurs abandonnaient une idée fausse assignée et résolvaient de nouveau à partir de leurs connaissances internes à des rythmes quasi uniformes, sous rétroaction ciblée, mal alignée et générique. Ils le quantifient par un Selective Flip Score et élèvent la fidélité jusqu'à +0.56 par l'entraînement, ce qui est le point : donner un persona à un modèle par une invite ne construit pas un apprenant.

Les apprenants simulés servent aussi de banc d'essai contrôlé pour les instruments d'évaluation eux-mêmes. [[llm-judged-helpfulness-pedagogy-signal|Fan et al. (2026)]] ont associé chacune de trois bases de tuteurs à un même apprenant simulé faible, dans le cadre d'un protocole préenregistré, et ont constaté que les grilles d'utilité d'usage général portent peu de signal pédagogique, sept politiques s'étalant sur 2.3 points de pédagogie jugée à l'intérieur d'une bande de 0.25 point d'utilité jugée. Les tours de parole révélant la réponse étaient suivis d'un travail étudiant indépendant moindre sur chaque base.

La mise en garde a sa place sur cette page. Le verdict d'un simulateur ne vaut que ce que vaut le simulateur, et sa couverture tend vers les apprenants les plus faciles.

## La recherche des praticiens : SoTL et enquête en classe

C'est le volet que le corpus documente le moins. La recherche sur l'enseignement et l'apprentissage et la recherche en classe sont des enquêtes de praticiens — un enseignant étudiant son propre cours, souvent à petite échelle, souvent sous forme d'auto-étude — et les pages rassemblées ici ne fournissent pas un compte rendu fondé sur la recherche de l'usage de l'IA dans ce mode.

Les preuves les plus proches sont adjacentes plutôt que directement pertinentes. Les étudiants de troisième cycle de [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai et Chan (2026)]] apprenaient à être chercheurs, et n'étudiaient pas leur propre enseignement. L'équipe de [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] a mené une revue interdisciplinaire formelle, non un projet local. Les études bibliométriques décrivent des disciplines et des éditeurs, non des classes.

L'énoncé honnête est donc une lacune plutôt qu'un constat. L'enquête des praticiens assistée par l'IA est plausiblement répandue et presque non documentée dans ce corpus ; une page qui présenterait les preuves relatives à l'automatisation des revues et les preuves bibliométriques comme si elles tranchaient de la manière dont un chargé de cours devrait utiliser l'IA pour étudier son propre enseignement outrepasserait sa compétence.

Ce qui peut être transposé est une disposition plutôt qu'un résultat : nommer le rôle de l'IA dans les méthodes, garder les décisions interprétatives humaines, et rendre compte de ce qui a été vérifié et de ce qui ne l'a pas été.

## Ce que les preuves n'établissent pas encore

- **Aucune comparaison directe.** Martin et al. posent la comparaison entre méthodes assistées par l'IA et méthodes traditionnelles comme un travail à venir. Aucun article de référence ne montre qu'une méthodologie d'IA produit des conclusions plus valides.
- **Des dispositifs minces de bout en bout.** Les piliers sont une proposition de cadre, le compte rendu réflexif d'une équipe, un rapport d'atelier, une étude par groupes de discussion et des données bibliométriques observationnelles. Aucun n'est un essai contrôlé d'une méthode assistée par l'IA.
- **Une lacune de reporting, et non un audit de la pratique.** PRISMA-LLM lit le silence au niveau de l'article ; un flux de travail sans évaluation dans son article peut encore être validé ailleurs.
- **La recherche des praticiens est sous-représentée.** Seule une poignée de pages ici mentionnent la recherche sur l'enseignement et l'apprentissage ou la recherche en classe, si bien que le corpus ne peut fonder des affirmations sur les enseignants étudiant leur propre pratique.
- **Une cible mouvante.** Les outils s'améliorent plus vite que la publication, si bien qu'un constat portant sur un flux de travail de 2025 décrit une génération de systèmes qui peuvent ne plus exister sous cette forme.

## Concepts liés

- [[research-methods-aied]] — le parapluie des dispositifs utilisés pour étudier l'IA en éducation
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## Articles liés

- [[ai-methodologies-science-education-research-2026]] — un cadre réflexif en sept phases portant sur la manière dont les méthodologies d'IA peuvent transformer la recherche en enseignement des sciences (Martin et al., 2026)
- [[scaffolding-systematic-reviews-2026]] — le récit d'une équipe de revue interdisciplinaire sur le mentorat et l'intégration sélective de l'IA (Wang et al., 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — comment 28 étudiants de troisième cycle ont utilisé GenAI dans l'ensemble du flux de travail de recherche, et les lignes directrices qu'ils suggèrent (Dai & Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — un audit à l'échelle du champ des références fabriquées dans la littérature d'enseignement de l'informatique (Denny et al., 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — un cadre de reporting pour les revues systématiques assistées par l'IA, et la lacune d'obligation de rendre compte qu'il documente (Zabaleta & Lin, 2026)
- [[genai-academic-search-workshop]] — un rapport de l'atelier CHIIR 2026 sur l'IA générative et la recherche académique (Liu, Arguello, Hoeber et al., 2026)
- [[persistent-ai-agents-academic-research]] — une étude de cas d'un seul chercheur portant sur un agent persistant dans un espace de travail de recherche (Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — des preuves bibliométriques que l'écriture assistée par l'IA accompagne des équipes de recherche plus petites et plus jeunes (Wang et al., 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — un repère de référence de 30 jours qui évalue des agents tuteurs face à un apprenant simulé (Lee et al., 2026)
- [[beagle-grounded-learner-emulation-2026]] — un simulateur neuro-symbolique qui reproduit la véritable lutte du novice (Wang et al., 2026)
- [[llm-student-simulation-misconception-faithfulness]] — pourquoi les simulateurs abandonnent une idée fausse sous toute rétroaction, et comment l'entraînement y remédie (Do, Sonkar & Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — un audit préenregistré qui utilise un apprenant simulé faible fixe pour tester si l'utilité mesure la pédagogie (Fan et al., 2026)

## Citation

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.
