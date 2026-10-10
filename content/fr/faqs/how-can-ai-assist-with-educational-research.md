---
title: "Comment l'IA peut-elle assister la recherche en éducation ?"
created: "2026-10-05T11:23:36-04:00"
updated: "2026-10-10T04:00:13-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
contributors: [editor]
translation_of: faqs/how-can-ai-assist-with-educational-research
source_updated: "2026-10-05T14:14:11-04:00"
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Comment l'IA peut-elle assister la recherche en éducation ?

L'IA peut retirer du travail réel d'un projet de recherche en éducation — trouver de la littérature, filtrer des milliers de résumés, rédiger du code d'analyse, résumer des réponses ouvertes, resserrer un manuscrit. Ce qu'elle ne peut pas faire, c'est porter la responsabilité de ce que le projet conclut. Le tableau honnête, et celui que les preuves étayent, est une division du travail plutôt qu'une passation de relais : confier l'automatisation à la charge procédurale, vérifier chaque sortie, et garder les décisions interprétatives entre des mains humaines ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]).

Cette page porte sur l'IA en tant qu'*instrument* du travail de recherche — recherche, filtrage, synthèse, codage, analyse et rédaction, y compris la recherche menée par un praticien sur son propre enseignement. La question de savoir si une *intervention* d'IA particulière aide les apprenants est une autre question, traitée par les FAQ liées en fin de page et par [[ai-assisted-educational-research|AI-Assisted Educational Research]]. Une bonne part de ce qui suit tient honnêtement de la mise en garde : la base de preuves est mince, et plusieurs modes de défaillance sont silencieux.

## La version courte

**1.** Décidez par écrit, avant le début du projet, quelles tâches de recherche peuvent utiliser l'IA et lesquelles ne le peuvent pas. Dans [[dai-chan-responsible-genai-research-ai-literacy-2026|l'étude par groupes de discussion de Dai et Chan (2026)]], les chercheurs ont calibré l'usage selon les enjeux et la centralité intellectuelle plutôt que par une autorisation générale — plus lourd sur le travail procédural à faible enjeu, prudent là où la contribution académique était centrale.

**2.** Maintenez l'automatisation sur la charge procédurale. Le filtrage est là où elle aide le plus ; l'extraction de données, la conciliation et la synthèse sont restées aux relecteurs humains dans la seule équipe qui ait rapporté son flux de travail ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]).

**3.** Vérifiez chaque sortie contre un standard humain, et dites qui a arbitré. L'accord entre un modèle et un codeur humain — ou entre deux modèles — est une mesure de ressemblance, non une preuve que le codage est juste ([[agreement-not-quality-llm-coding-verification]]).

**4.** Fixez vos grilles et vos codebooks avant que l'analyse automatisée ne s'exécute ; les construits, les grilles de codage et les données d'entraînement sont des décisions humaines, non des sorties de modèle ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]).

**5.** Vérifiez à la main chaque référence que vous citez, en particulier les champs d'auteurs, quand l'IA a touché à la rédaction ([[citation-errors-hallucinations-computing-education-2026|Denny et al., 2026]]).

**6.** Journalisez les invites, les versions de modèle et les versions de corpus, divulguez le rôle de l'IA, et budgétez du temps pour la vérification et la documentation — pour la plupart des équipes, c'est du travail *ajouté*, non retiré.

## Où l'IA fait réellement gagner du travail — et où elle en ajoute

### Recherche et repérage documentaire

La recherche générative résume, recommande, synthétise et dialogue, ce qui ébranle l'hypothèse selon laquelle le système trouve les sources tandis que l'interprétation reste au lecteur ([[genai-academic-search-workshop]]). C'est une manière rapide de *localiser* de la littérature candidate. Deux mises en garde issues de cet atelier : la capacité est inégale — les chercheurs très cités étaient reconstruits à un rythme environ deux fois supérieur à celui de leurs pairs moins cités — et une bibliothécaire a rapporté un écart de confiance dans lequel les étudiants faisaient trop confiance à la recherche générative tandis que le corps professoral s'en méfiait. Utilisez-la pour la découverte, puis vérifiez chaque source vous-même.

### Filtrage et revues systématiques

Les revues systématiques sont le domaine où l'automatisation a le plus progressé. Des outils tels qu'ASReview, SWIFT-Review, Covidence, AIScreenR et MetaMate ont réduit la charge procédurale principalement au niveau du filtrage des résumés, tandis que l'extraction et la synthèse restaient humaines ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]). Écrivez des règles de décision pour les cas limites avant que le filtrage ne commence, conservez des catégories « peut-être », et consignez chaque arbitrage dans un journal partagé afin que le même jugement soit appliqué de façon cohérente.

### Codage et analyse qualitatifs

L'[[qualitative-research|analyse qualitative]] est l'étape où l'interprétation *est* le produit. L'IA peut passer à l'échelle une première analyse des réponses ouvertes, mais elle déplace votre rôle du codage vers la validation des sorties du modèle, et elle change les compétences que la tâche exige ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]). Déléguez par code plutôt qu'en bloc : [[agreement-not-quality-llm-coding-verification|une étude de vérification en aveugle]] a classé 15 des 72 items du codebook comme exigeant manifestement une expertise humaine, 12 comme mieux servis par un modèle, et 16 comme se prêtant à un tri fondé sur la confiance.

### Analyse de données

Les fonctions de mesure automatisées peuvent paraître précises et prédictives tout en restant opaques, ce qui explique pourquoi l'IA explicable compte ici : elle peut révéler si un modèle suit la compréhension sémantique ou seulement les mots-clés ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]). Traitez tout score automatisé comme une hypothèse à valider contre une mesure liée à la capacité que vous comptez étudier. Pour les mesures elles-mêmes, voir [[evaluating-ai-interventions-methods]].

### Rédaction, citation et relecture

La rédaction, la structuration et la relecture sont les usages que font déjà la plupart des chercheurs — 27 des 28 chercheurs en troisième cycle de [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai et Chan (2026)]] utilisaient la GenAI quelque part dans le flux de travail, y compris la rédaction académique et la traduction. La seule étape non négociable est la vérification des références.

### Faire tourner le flux de travail : journaux, divulgation et budget d'effort

[[persistent-ai-agents-academic-research|Une étude de cas de 115 jours menée par un seul investigateur]] sur un agent de recherche persistant a trouvé que le schéma dominant était l'expansion de la capacité plutôt qu'une substitution de main-d'œuvre avérée : à mesure que la mémoire et les procédures s'accumulaient, le périmètre du travail délégué augmentait plutôt que l'apport humain ne diminuait. C'est l'attente réaliste. Conservez les journaux des invites et des réponses ainsi que les versions de corpus — une liste de thèmes générée avec fluidité paraît inévitable bien avant que son travail de preuve ait commencé ([[chain-behind-claim-warrantability-2026|Holster, 2026]]) — et divulguez le rôle de l'IA comme une démarche, non comme une case à cocher.

## Conseils pratiques pour les chercheurs-praticiens

La scholarship of teaching and learning et la recherche menée en classe — un enseignant qui étudie son propre cours, souvent à petite échelle — constituent le fil le plus mince du corpus. [[ai-assisted-educational-research|AI-Assisted Educational Research]] l'énonce comme une lacune plutôt que comme un résultat : la recherche menée par des praticiens assistée par l'IA est plausiblement répandue et presque pas documentée, et les preuves issues de l'automatisation des revues et de la bibliométrie ne tranchent pas la question de savoir comment un enseignant devrait étudier son propre enseignement. Ce qui se transmet est une disposition plutôt qu'un résultat.

**1.** Utilisez l'IA là où votre contexte local n'est pas la variable : chercher dans la littérature de votre discipline, transcrire et résumer vos propres enregistrements, et rédiger des instruments ou un texte de consentement.

**2.** Gardez pour vous les gestes interprétatifs — ce qui compte comme un thème, ce que signifie le commentaire d'un étudiant, ce que vos données de classe permettent d'étayer — et indiquez dans le compte rendu quels gestes le modèle a faits et lesquels vous avez faits ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

**3.** Prédéfinissez vos critères et gardez-les visibles, car une petite étude locale ne peut pas se remettre d'un construit défini après l'arrivée des données.

**4.** Rapportez le rôle de l'IA, la vérification que vous avez menée, et les limites d'un dispositif portant sur un seul cours et un seul investigateur. Ne présentez pas un compte rendu de flux de travail comme s'il s'agissait d'un résultat d'efficacité.

**5.** Traitez la simulation d'une cohorte comme une option avancée plutôt que comme un réglage par défaut : les apprenants simulés tendent à couvrir le quadrant le plus facile du comportement réel des étudiants et sont rarement validés après usage ([[simulating-students]]). Voir [[making-simulated-students-behave-like-learners]] avant de faire confiance au verdict d'un simulateur.

## Réserves et questions à examiner

### Références fabriquées et erreurs de citation

La rédaction assistée par l'IA rend peu coûteuse la production d'une citation plausible inventée, et les défaillances sont disproportionnées dans les champs d'auteurs — le champ qui porte le crédit. Dans un audit de 723,930 publications et de 15,872,533 références, [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] ont vérifié 30 références fabriquées dans 14 articles d'enseignement de l'informatique, tous de 2025 et 2026 ; 17 des 30 étaient des hybrides associant un titre réel à des auteurs fabriqués ou incorrects, et le compte vérifié lors d'un colloque technique est passé de 3 en 2025 à 17 en 2026, apparaissant dans 2.3% des articles des actes de cette année. Leur compte est délibérément une borne inférieure, et les vérificateurs automatisés héritent des défauts des métadonnées qu'ils traitent comme vérité de référence. Vérifiez chaque citation vous-même, et les auteurs en premier.

### Le décalage de restitution et d'audit

L'adoption a devancé la restitution. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta et Lin (2026)]] ont analysé 888 articles sur l'automatisation des revues : depuis 2023, 38.0% des articles sur des logiciels et des produits ne rapportaient aucune évaluation, contre 9.3% des articles sur les LLM, et l'accès aux modèles était massivement propriétaire (84.1%). Même une évaluation globale favorable n'impliquait pas l'aptitude à la délégation — 52% des 118 articles LLM à résultats uniquement positifs rapportaient encore une inquiétude quant au fait que le flux de travail tombait en dessous du niveau exigé par son rôle. Leur cadre, PRISMA-LLM, sépare la divulgation de la mise en œuvre de l'évaluation sensible aux conséquences, et traite ses cinq niveaux comme des paliers de divulgation plutôt que des paliers de risque. L'enseignement pratique est que la profondeur d'évaluation d'un flux de travail doit être *énoncée*, et non supposée : nommez le système, la version, les invites, ce que les humains ont vérifié, et là où il a échoué.

### L'accord n'est pas une preuve de qualité

Un accord élevé avec des codeurs humains — ou entre deux modèles — est régulièrement rapporté comme s'il établissait la justesse. Ce n'est pas le cas. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] ont fait juger par un expert indépendant 855 paires de jeux de codes en aveugle de la source : l'accord humain–LLM (Jaccard moyen 0.30) tombait bien en dessous de l'accord humain–humain (0.52), alors que le vérificateur en aveugle préférait le codage humain et le codage machine à des taux indistinguables (51.5% contre 48.5%, p = 0.537). Parfois le consensus humain encodait un biais partagé que le vérificateur rejetait en faveur du modèle. Adoptez la vérification en aveugle, rapportez la vérité de référence et qui a arbitré, et aiguillez par code plutôt que de traiter le pipeline comme un cadre unique de relecture humaine.

### Validité de construit lorsqu'une mesure automatisée devient un instrument

Lorsque la sortie d'un modèle *devient* l'instrument de recherche, la question de mesure devient une question de validité de construit. [[ai-methodologies-science-education-research-2026|Martin et al., 2026]] formulent cela à travers le problème de la mesure nomique de Chang : mesurer une grandeur exige une loi la reliant à quelque chose d'observable, or cette loi ne peut pas être testée sans déjà connaître la grandeur. Les fonctions de mesure dérivées de l'IA émergent des données d'entraînement et de l'optimisation plutôt que du chercheur, si bien qu'elles peuvent paraître précises tout en restant opaques — et la comparabilité doit s'étendre aux populations étudiantes, parce que l'apprentissage automatique tend à coder les idées canoniques mieux que les manières diverses dont les étudiants expriment des idées plus faibles. Un score automatisé commode peut aussi indexer le mauvais construit : dans [[zhang-platform-scores-miss-ai-teaching-agents-2026|une évaluation de huit agents d'enseignement par IA]], l'agent classé troisième selon le score propre à la plateforme arrivait dernier sur une grille validée par des experts. Le désaccord homme–machine est systématique plutôt qu'aléatoire, et l'opérationnalisation de la grille compte souvent plus que l'artisanat des invites ([[machines-misread-pedagogical-quality|Tseng et al., 2026]]).

### Vous restez redevable de l'interprétation

Quelqu'un doit pouvoir répondre d'une étude exclue, d'un thème codé, ou d'une affirmation de prévalence. Les modèles pré-entraînés ajoutent une couche de dépendance épistémique — leurs données d'entraînement, leur affinage et leurs objectifs peuvent être inconnus — et, parce qu'ils émergent de réseaux sociotechniques, la responsabilité devient difficile à attribuer : un « problème des mains nombreuses » ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]). Nommer le rôle de l'IA dans la méthode fait partie de la réponse, mais ne transfère pas la redevabilité. Gardez le cheminement interprétatif inspectable, contestable et révisable ([[chain-behind-claim-warrantability-2026|Holster, 2026]]), et gardez un humain désigné redevable de chaque décision conséquente.

### Vie privée et consentement pour les données étudiantes dans les outils tiers

Les données de classe et d'étudiants qui transitent par des outils tiers portent des obligations de consentement, de gouvernance et de confidentialité qui précèdent tout argument d'efficience. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta et Lin (2026)]] ont constaté que l'accès aux modèles était massivement propriétaire (84.1%), ce qui signifie que le texte des étudiants quitte typiquement votre établissement. Ne collectez que ce que la finalité éducative exige, rendez transparents l'usage des données et les limites de l'outil, vérifiez si les données des apprenants servent à entraîner les modèles du fournisseur, et préférez les données locales ou synthétiques là où la sensibilité est élevée. Le traitement complet de ces obligations — avec l'équité, l'accessibilité et la sécurité pédagogique — se trouve dans [[equity-ethics-pedagogical-safety-research]].

## Ce que les preuves n'établissent pas encore

- **Aucune comparaison directe.** Le travail de référence pose la comparaison entre méthodes assistées par l'IA et méthodes traditionnelles comme un travail futur ; aucune étude ici ne montre qu'une méthodologie d'IA produit des conclusions plus valides ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]).
- **Des dispositifs minces partout.** Les preuves consistent en une proposition de cadre, un compte rendu réflexif d'une équipe, un rapport d'atelier, une étude par groupes de discussion et de la bibliométrie observationnelle — pas un essai contrôlé d'une méthode assistée par l'IA. Les affirmations de déplacement de rôle et d'expansion de la capacité proviennent de comptes rendus portant sur un seul site et un seul investigateur.
- **Un décalage de restitution, non un audit de la pratique.** PRISMA-LLM lit le silence au niveau des articles ; un flux de travail sans évaluation dans son article peut encore être validé dans un rapport de produit, un protocole ou un dépôt.
- **La recherche des praticiens est sous-représentée.** Le corpus ne permet pas d'étayer des affirmations sur la manière dont les enseignants devraient utiliser l'IA pour étudier leur propre pratique.
- **Les outils sont une cible mouvante.** Un résultat portant sur un flux de travail de 2025 décrit une génération de systèmes qui peut ne plus exister sous cette forme, si bien que la reproductibilité doit être liée à une version de modèle et à une date.

## Questions liées

- [[evaluating-ai-interventions-methods|Quelles mesures et quelles méthodes de recherche un enseignant peut-il utiliser pour évaluer des interventions liées à l'IA ?]] — la question de conception méthodologique dont dépendent les flux de travail assistés par l'IA
- [[reporting-interpreting-aied-research|Quelles sont les bonnes pratiques pour rapporter et interpréter la recherche sur l'IA en éducation ?]] — comment rapporter le système d'IA, la mesure, et votre propre usage de l'IA
- [[research-gaps-aied|Quelles sont les lacunes notables de la littérature de recherche sur l'IA en éducation ?]] — là où les preuves manquent ou sont faibles
- [[equity-ethics-pedagogical-safety-research|Comment la recherche sur l'IA en éducation devrait-elle intégrer l'équité, l'accessibilité, la vie privée, l'éthique et la sécurité pédagogique ?]] — les obligations autour des données étudiantes et de la sécurité
- [[ai-assisted-educational-research]] — la page de concept complète sur l'IA comme instrument du travail de recherche
- [[making-simulated-students-behave-like-learners|Comment faire en sorte qu'un étudiant simulé se comporte comme un apprenant réel ?]] — avant d'utiliser un simulateur comme instrument de recherche
