---
title: "Comment l'IA peut-elle assister la recherche en éducation ?"
created: "2026-10-05T11:23:36-04:00"
updated: "2026-10-29T08:08:36-04:00"
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
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Votre coauteur veut un paragraphe dans la section des méthodes sur les outils d'IA que l'équipe a utilisés. Ou bien la pile de dépistage est plus longue que ce que l'échéance permet. Ou bien un évaluateur a demandé, poliment, si une personne a lu les transcriptions, et vous n'êtes pas sûr de ce qu'est la réponse honnête.

La réponse courte pour cette réunion : l'IA peut prendre la recherche documentaire, une première passe de dépistage, le tri du codage et la rédaction, et elle ne peut pas porter la responsabilité de ce que le projet conclut. Décidez quelles tâches lui sont ouvertes avant le début du projet, vérifiez les productions selon une norme humaine avec une personne nommée qui arbitre, et consignez assez pour qu'un tiers puisse reconstituer ce qui s'est passé. La plupart des équipes constatent que les heures de vérification et de journalisation sont du travail ajouté plutôt que retiré.

## La version courte

**1.** Écrivez quelles tâches de recherche peuvent recourir à l'IA et lesquelles ne le peuvent pas, avant la première recherche. Classez par enjeux plutôt que par outil.

**2.** Placez l'automatisation sur le dépistage. Gardez l'extraction des données, la réconciliation et la synthèse chez des personnes.

**3.** Arrêtez le livre de codes et la grille avant qu'une passe automatisée ne touche aux données.

**4.** Décidez ce que vérifier veut dire et qui le signe. L'accord entre un modèle et un codeur est une mesure de similarité, pas un résultat de qualité.

**5.** Vérifiez chaque référence à la main, en commençant par les auteurs, chaque fois que l'IA a touché à l'écriture.

**6.** Journalisez les prompts, les versions de modèle et les versions de corpus, et budgétez les heures que cela demande.

## Décidez ce que l'IA peut toucher avant le début du projet

La décision de périmètre a sa place dans le fichier de projet plutôt que dans la mémoire de quelqu'un. Dans l'[[dai-chan-responsible-genai-research-ai-literacy-2026|étude par groupes de discussion de Dai et Chan (2026)]], les chercheurs qui y avaient réfléchi calibraient l'usage selon les enjeux et la centralité intellectuelle : plus lourd sur le travail procédural à faibles enjeux, prudent là où la contribution savante était centrale. Vingt-sept des 28 chercheurs postdoctoraux de cette étude avaient utilisé l'IA générative quelque part dans leur flux de travail, y compris pour la rédaction académique et la traduction, de sorte que pour la plupart des équipes la question est de savoir où se situe la ligne, non si elle existe.

Écrivez la ligne sous forme de liste avec un verdict pour chaque tâche : recherche bibliographique, dépistage des résumés, extraction, codage qualitatif, analyse statistique, rédaction, mise en forme des références. Lisez cette étude comme une carte de ce que les chercheurs déclarent faire. C'est un compte rendu de groupes de discussion, pas un résultat d'efficacité.

## Placez l'automatisation sur le dépistage et gardez la synthèse dans l'équipe

Les revues systématiques sont le domaine où l'automatisation a le plus avancé. Des outils comme ASReview, SWIFT-Review, Covidence, AIScreenR et MetaMate réduisent la charge procédurale principalement au dépistage des résumés, tandis que l'extraction des données, la réconciliation et la synthèse restaient aux évaluateurs humains dans la seule équipe qui ait décrit son flux de travail ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]).

L'essentiel du bénéfice vient de deux décisions de conception. Écrivez des règles de décision pour les cas limites avant le début du dépistage, et tenez une catégorie « peut-être » avec un journal d'arbitrage partagé, afin que le même jugement s'applique au même type d'enregistrement. Sans ce journal, la règle du second évaluateur et celle du premier divergent en silence, et la liste des exclusions cesse d'être reproductible.

## Arrêtez le livre de codes avant que le modèle ne lise quoi que ce soit

[[qualitative-research|L'analyse qualitative]] est l'étape où l'interprétation est le produit. Les construits, les grilles de codage et les données d'entraînement sont des décisions humaines plutôt que des productions de modèle ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]), ce qui signifie que le livre de codes doit être arrêté avant qu'une passe automatisée ne parcoure le corpus. L'alternative est un schéma de codage écrit autour de ce que le modèle a fait émerger, et les thèmes décrivent alors la lecture de vos données par l'outil.

La délégation peut être plus fine que tout ou rien. [[agreement-not-quality-llm-coding-verification|Une étude de vérification en aveugle]] a classé 15 des 72 items du livre de codes comme exigeant manifestement une expertise humaine, 12 comme mieux servis par un modèle et 16 comme adaptés à un tri fondé sur la confiance. Classez vos propres items de cette façon et l'économie de travail tombe là où elle est sûre.

## Décidez ce que vérifier veut dire et qui le signe

Un accord élevé entre un modèle et un codeur humain est rapporté comme s'il établissait la correction. Il ne l'établit pas. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] ont fait juger par un expert indépendant 855 ensembles de codes appariés, en aveugle de la source. L'accord humain-LLM (Jaccard moyen 0.30) se situait bien en dessous de l'accord humain-humain (0.52), pourtant le vérificateur aveugle préférait le codage humain et le codage machine à des taux qu'il ne pouvait pas distinguer (51.5% contre 48.5%, p = 0.537). Dans certains cas, le consensus humain encodait un biais partagé que le vérificateur rejetait en faveur du modèle.

L'étape de vérification a donc besoin d'un étalon qui ne soit ni la production du modèle ni l'accord du codeur avec elle, plus une personne nommée qui a arbitré les désaccords. Rapportez les deux. Une statistique de similarité décrit à quel point deux lectures se ressemblent, et elle ne dit rien de la justesse de l'une ou de l'autre.

## Cherchez vite, puis vérifiez chaque source vous-même

La recherche générative résume, recommande, synthétise et converse, ce qui déstabilise l'ancien agencement où le système localise et le lecteur interprète ([[genai-academic-search-workshop]]). Traitez-la comme un outil de découverte. Le rapport d'atelier porte deux mises en garde : la capacité est inégale, les chercheurs très cités étant reconstruits à environ deux fois le taux de leurs pairs moins cités, et une bibliothécaire a décrit un déficit de confiance où les étudiants faisaient trop confiance à la recherche générative tandis que le corps enseignant s'en méfiait.

La vérification des références est l'endroit où cela devient non négociable, et les défaillances se concentrent dans le champ des auteurs, celui qui porte le crédit. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] ont audité 723.930 publications et 15.872.533 références et vérifié 30 références fabriquées dans 14 articles d'enseignement de l'informatique, tous de 2025 et 2026. Dix-sept des 30 étaient des hybrides : un titre réel associé à des auteurs fabriqués ou incorrects. Le compte vérifié dans un colloque technique est passé de 3 en 2025 à 17 en 2026, soit 2.3% des articles de ce colloque cette année-là. Leur total est une borne inférieure délibérée, et les vérificateurs automatisés héritent des défauts des métadonnées qu'ils traitent comme vérité de référence. Vérifiez les auteurs d'abord.

## Traitez un score automatisé comme une hypothèse à tester

Les fonctions de mesure automatisée peuvent sembler précises et prédictives tout en restant opaques. [[ai-methodologies-science-education-research-2026|Martin et al.]] cadrent cela avec le problème de la mesure nomique de Chang : mesurer une grandeur exige une loi qui la relie à quelque chose d'observable, et cette loi ne peut être testée sans connaître déjà la grandeur. Les fonctions de mesure issues de l'IA émergent des données d'entraînement et de l'optimisation plutôt que du chercheur, de sorte que le travail d'explicabilité compte pour montrer si un modèle suit une compréhension sémantique ou seulement des mots-clés.

La défaillance est concrète. Dans [[zhang-platform-scores-miss-ai-teaching-agents-2026|une évaluation de huit agents d'enseignement par IA]], l'agent classé troisième par le score de la plateforme elle-même était dernier sur une grille validée par des experts. Le désaccord humain-machine est systématique plutôt qu'aléatoire, et l'opérationnalisation de la grille compte souvent plus que l'habileté du prompt ([[machines-misread-pedagogical-quality|Tseng et al., 2026]]). Avant qu'un score automatisé ne devienne votre instrument, validez-le contre une mesure liée à la capacité que vous comptez étudier. Pour les mesures elles-mêmes, voir [[evaluating-ai-interventions-methods]].

## Rédigez la section des méthodes pour qu'un tiers puisse l'auditer

L'adoption a devancé la déclaration. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta et Lin (2026)]] ont analysé 888 articles sur l'automatisation des revues : depuis 2023, 38.0% des articles portant sur des logiciels et des produits ne rapportaient aucune évaluation, contre 9.3% des articles sur les LLM, et l'accès aux modèles était massivement propriétaire (84.1%). Une évaluation globale favorable n'impliquait pas non plus l'aptitude à la délégation, puisque 52% des 118 articles sur les LLM à résultats uniquement positifs rapportaient encore une inquiétude sur le fait que le flux de travail restait sous la barre exigée par son rôle. Leur cadre PRISMA-LLM sépare la déclaration de la mise en œuvre de l'évaluation sensible aux conséquences, et traite ses cinq niveaux comme des paliers de déclaration plutôt que des paliers de risque.

La version pratique : nommez le système et sa version, les prompts, la version du corpus, ce qu'une personne a vérifié et où cela a échoué. Tenez des journaux de prompts et de réponses, car une liste de thèmes générée et fluide paraît inévitable bien avant que son travail probatoire ait commencé ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Budgétez aussi les heures. [[persistent-ai-agents-academic-research|Une étude de cas de 115 jours menée par un seul chercheur]] sur un agent de recherche persistant a trouvé que le schéma le plus marqué était une expansion de capacité plutôt qu'une substitution de travail démontrée : à mesure que la mémoire et les procédures s'accumulaient, le périmètre du travail délégué grandissait sans que l'apport humain diminue.

## Menez l'enquête professionnelle avec les mêmes règles à plus petite échelle

Si vous êtes un enseignant qui étudie son propre cours, vous travaillez dans le fil le plus mince du corpus. [[ai-assisted-educational-research|AI-Assisted Educational Research]] l'énonce comme une lacune plutôt que comme un résultat : l'enquête professionnelle assistée par IA est plausiblement répandue et presque non documentée, et les preuves sur l'automatisation des revues et la bibliométrie ne tranchent pas la manière dont un enseignant devrait étudier son propre enseignement.

Ce qui se transpose est un ensemble de dispositions :

Utilisez l'IA là où votre contexte local n'est pas la variable. Chercher la littérature de votre champ, transcrire et résumer vos propres enregistrements, et rédiger des instruments ou des formules de consentement relèvent tous de ce cas.

Gardez les gestes interprétatifs. Ce qui compte comme un thème, ce que signifie le commentaire d'un étudiant et ce que vos preuves de classe autorisent sont à vous de décider, et le compte rendu devrait dire quels gestes le modèle a faits et lesquels vous avez faits ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Prédéfinissez vos critères et gardez-les visibles. Une petite étude locale ne se remet pas d'un construit défini après l'arrivée des données.

Rapportez le rôle de l'IA, la vérification que vous avez faite et les limites d'un dispositif à un seul cours et un seul chercheur. Un compte rendu de flux de travail n'est pas un résultat d'efficacité.

Traitez la simulation d'une cohorte comme une option avancée plutôt que comme un réglage par défaut. Les apprenants simulés tendent à couvrir le quadrant le plus facile du comportement étudiant réel et sont rarement validés après usage ([[simulating-students]]). Lisez [[making-simulated-students-behave-like-learners]] avant de faire confiance au verdict d'un simulateur.

## Ce que les chercheurs ratent à ce sujet

Un accord avec un codeur humain signifie que le codage est juste. L'accord humain-LLM dans l'étude en aveugle était de 0.30 en Jaccard contre 0.52 pour humain-humain, et le vérificateur aveugle ne pouvait pas distinguer les deux sources de codage, à 51.5% contre 48.5%. L'accord enregistre que deux lecteurs ont convergé, y compris lorsqu'ils ont convergé sur le même biais.

Un vérificateur de références remplace la vérification des références. Les 30 références fabriquées de l'audit de Denny incluent 17 hybrides où le titre était réel et les auteurs ne l'étaient pas, ce qui est exactement le cas qu'un vérificateur entraîné sur des métadonnées traite le plus mal, puisque les métadonnées sont précisément ce qui est faux.

Une évaluation favorable rend un flux de travail apte à votre rôle. Sur 118 articles sur les LLM à résultats uniquement positifs, 52% rapportaient encore une inquiétude sur le fait que le flux de travail restait sous la barre exigée par son rôle. Lisez la profondeur de l'évaluation à l'aune du travail que vous lui confiez.

L'habileté du prompt est le principal levier de qualité. L'opérationnalisation de la grille compte souvent plus que l'habileté du prompt dans l'accord humain-machine, et l'évaluation à huit agents classait le même système troisième et dernier selon la grille appliquée.

L'IA retire du travail du projet. L'étude de cas de 115 jours a trouvé un périmètre délégué qui grandissait à mesure que la mémoire de l'agent s'accumulait. La vérification, l'arbitrage et la journalisation sont les heures qui augmentent avec lui.

## Ce qui va vous revenir dessus

**« Mon coauteur fait déjà cela et personne ne s'est plaint. »** L'absence de plaintes n'est pas un résultat sur la validité. La question de la déclaration est distincte de la question de la qualité, et le chiffre de 38.0% pour les articles logiciels non évalués dit que le silence du champ est généralisé.

**« Deux modèles étaient d'accord entre eux, donc le codage est réglé. »** Deux modèles qui partagent des données d'entraînement partagent leurs erreurs. Le vérificateur aveugle de l'étude de Liu préférait le codage machine à 48.5%, et ce qui rendait ce chiffre interprétable était un juge indépendant, pas l'accord lui-même.

**« Nous ne pouvons pas auditer un modèle propriétaire, donc il n'y a rien à rapporter. »** PRISMA-LLM demande une déclaration de mise en œuvre comme palier distinct de la profondeur d'évaluation. Le système, la version, les prompts, ce que les humains ont vérifié et où cela a échoué sont tous déclarables pour un modèle fermé.

**« Le comité d'éthique n'approuvera jamais cela. »** L'accès aux modèles était propriétaire dans 84.1% des articles examinés, ce qui signifie que le texte des étudiants quitte généralement votre établissement. Ne collectez que ce que la finalité pédagogique exige, vérifiez si les données des apprenants entraînent les modèles du fournisseur, et privilégiez des données locales ou synthétiques là où la sensibilité est élevée. [[equity-ethics-pedagogical-safety-research]] couvre les obligations dans leur intégralité.

**« Ce sera plus lent que de le faire à la main. »** Pour un petit projet, c'est souvent le cas. L'argument en faveur repose sur le périmètre à grande échelle, et l'argument contre l'exagération repose sur le même compte rendu de 115 jours.

## Quoi faire cette semaine

**1.** Écrivez la liste des tâches avec un verdict à côté de chaque item, et placez-la là où toute l'équipe peut la voir.

**2.** Ajoutez les règles de décision pour les cas limites et le journal d'arbitrage à votre protocole de dépistage avant le début du prochain lot.

**3.** Choisissez une production automatisée sur laquelle vous vous appuyez déjà et validez-la contre un jugement humain sur un échantillon que vous n'avez pas encore regardé.

**4.** Relisez le dernier manuscrit que vous avez soumis et vérifiez à la main chaque nom d'auteur de la liste de références.

**5.** Ajoutez une ligne « où l'IA a échoué » à votre modèle de section des méthodes, pour que l'habitude de déclaration soit écrite une fois pour toutes.

## Où aller ensuite

Les questions compagnes sont [[evaluating-ai-interventions-methods]] sur la manière de mesurer une intervention, [[reporting-interpreting-aied-research]] sur la déclaration du système et de votre propre usage de l'IA, et [[research-gaps-aied]] sur les endroits où la littérature est mince. [[equity-ethics-pedagogical-safety-research]] couvre les données des étudiants, et [[ai-assisted-educational-research]] est la page de concept complète derrière celle-ci.
