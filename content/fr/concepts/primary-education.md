---
title: "Enseignement primaire"
created: "2026-11-15T11:52:55-05:00"
updated: "2026-11-23T14:30:00-05:00"
type: concept
pedagogy: [scaffolding, game-based-learning, self-regulated-learning, social-emotional-learning]
technology: [adaptive-learning, intelligent-tutoring, conversational-ai, generative-ai]
level: [primary education, k 12]
confidence: medium
translation_of: concepts/primary-education
source_updated: "2026-11-22T14:15:40-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-15"
    agent: hermes-agent
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-23"
    agent: hermes-agent
connected_concepts: [developmental-psychology, math-education, reading-education, writing-education, digital-divide, equity-in-ai-education, teacher-role, curriculum-design, privacy, assessment]
connected_articles: [ai-elementary-language-education-review-2026, guo-ai-literacy-developmental-paces-2026, yu-k12-ai-education-ai-literacy-meta-analysis-2026, yim-ai-literacy-primary-schools-review-2025, barokah-ai-elementary-science-review-2026, karampa-students-game-designers-ai-literacy-2026, llm-comparative-judgment-writing-screening-2026, melo-llm-classroom-observation-teach-2026, age-tiered-ai-literacy-guidebooks-2026, horowitz-kraus-children-chatgpt-cognitive-control-2026, tutor-case-bench-challenging-behaviors-2026, llm-simulating-student-scientific-thinking-2026, human-ai-complementarity-social-emotional-learning-2026]
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Synthèse :** L'IA dans l'enseignement primaire sert surtout à différencier l'entraînement en littératie précoce et en numératie, à rédiger des supports pour les enseignants et à offrir aux enfants un interlocuteur à interroger. Les études les mieux contrôlées montrent de petits gains qui dépendent de l'orchestration par l'[[teacher-role|enseignant]] plutôt que du modèle, et un essai conçu pour isoler l'[[adaptive-learning|adaptativité]] n'a trouvé aucun avantage à celle-ci. Cette page couvre ce que les données probantes soutiennent en matière de tutorat, de lecture, d'écriture et de [[ai-literacy|littératie en IA]], et pourquoi un déploiement à l'échelle de la classe change ce que signifie une bonne pratique entre cinq et onze ans.

## Questions à examiner

- Un système de tutorat améliore les scores sur les mots enseignés mais pas le vocabulaire standardisé. Sur quel résultat une école devrait-elle fonder son achat ?
- Lors d'un essai en deuxième année, le tuteur adaptatif n'a pas fait mieux que la séquence fixe. Si l'adaptativité n'est pas l'ingrédient actif, quel est-il, et comment le testeriez-vous ?
- Dans une étude, les enfants ont fait [[trust|confiance]] à un chatbot à peu près autant qu'à un enseignant ou à un ami. Que changerait dans votre classe le fait de supposer un tel niveau de confiance ?
- La plupart des déploiements dans le primaire se font à l'échelle de la classe : un écran partagé, un enseignant qui saisit des invites, des enfants qui regardent. Qu'est-ce que cela rend possible que des appareils pour tous ne permettent pas ?

## Introduction

L'enseignement primaire couvre environ cinq à onze ans, l'âge où les enfants apprennent à décoder le texte, à raisonner avec les nombres et à travailler dans une salle avec un seul adulte. L'IA atteint ce cycle par des logiciels d'entraînement qui s'ajustent aux réponses de l'enfant, par des outils destinés aux enseignants qui rédigent des plans et des [[feedback|rétroactions]], et par des [[conversational-ai|agents conversationnels]] que les enfants interpellent directement. Le troisième a les données les plus faibles et l'exposition la plus directe.

Les enfants ont des compétences limitées au clavier, une [[metacognition]] en développement et une forte tendance à traiter un système fluide comme une personne savante. Les salles de classe comptent moins d'appareils que d'enfants, si bien que l'unité réaliste est un poste, un écran partagé ou un flux de travail médié par l'enseignant plutôt qu'un tuteur par élève. Les adultes portent aussi une responsabilité juridique et développementale qu'aucun contrat de fournisseur ne transfère.

## Ce que la base de données probantes peut soutenir

- **La littérature est vaste mais peu profonde.** Une revue de 31 études sur l'IA en [[language-learning|apprentissage des langues]] à l'école élémentaire, de 2013 à 2025, a trouvé des travaux concentrés sur l'oral, la littératie et le vocabulaire, la grammaire, la compréhension orale et la langue des signes étant à peine étudiées. La plupart étaient [[qualitative-research|qualitatives]] ou [[mixed-methods-research|à méthodes mixtes]], avec des échantillons moyens et sans indication de niveau scolaire.

- **L'essai le plus solide en langues au primaire reste modeste.** Une [[meta-analysis-systematic-review|revue de portée]] de 119 rapports sur les outils médiés par l'IA en anglais au primaire comprenait un [[rct|essai randomisé]] en grappes avec 217 apprenants d'anglais [[multilingual-learning|plurilingues]] de deuxième année. Elle a trouvé une taille d'effet de .38 sur les mots enseignés et des effets non significatifs sur le vocabulaire standardisé et la [[reading-education|compréhension en lecture]] ([[li-zhou-ai-tools-primary-english-scoping-review-2026|Li et Zhou, 2026]]).

- **Une plateforme de fractions personnalisée n'a pas battu l'enseignement ordinaire.** Sur cinq jours, le groupe en enseignement habituel a réalisé des gains de compréhension des fractions significativement plus grands que le groupe Mathbot. L'échantillon final était de 22 élèves après attrition et retrait des valeurs aberrantes, et le groupe de comparaison était un niveau en dessous du groupe traité ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman, 2024]]).

- **Les effets agrégés du tutorat sont faibles et fragiles.** Une méta-analyse de 18 expériences et de 11 [[intelligent-tutoring|systèmes de tutorat intelligent]] dans des écoles américaines de la maternelle à la 12e année a trouvé g = 0.271. Les effets se maintenaient à g = 0.266 à l'élémentaire, tombaient à g = 0.146 dans les études incluant des écoles rurales, et chutaient à un g = 0.110 non significatif au-delà de six mois ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).

L'effet moyen est positif, faible et sensible au contexte, à la durée et au résultat choisi.

## Tutorat et entraînement adaptatif

- **L'adaptativité seule n'a rien apporté.** Une expérience de terrain a donné à 132 élèves de deuxième année 30 minutes sur l'une de deux versions du même tuteur de mathématiques, identiques en contenu, interface, rétroaction et indices. Seule la sélection des tâches différait. Les scores au post-test ne différaient pas, F(1, 124) = 0.32, p = .574, pas plus que l'effort ou le plaisir déclarés ([[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley, Berner et Schmalfeldt, 2026]]).

- **C'est la formation, non le système, qui a produit le gain.** Dans 19 classes d'écoles publiques brésiliennes, les élèves enseignés par des enseignants formés ont surpassé les témoins dans la condition formation (15.15 points) comme dans la condition formation plus système (12.31). L'ajout du système n'a produit aucun gain supplémentaire, −4.33, IC à 95 % [−17.29, 7.23], et les enseignants ont dit que photographier le travail et corriger les erreurs de reconnaissance ajoutait du temps ([[rodrigues-aied-unplugged-numeracy-2026|Rodrigues et al., 2026]]).

- **Le dosage suivait la progression en lecture, et le dosage était une décision de l'enseignant.** Dans une école à charte, des élèves de première et de deuxième année ont été répartis selon les minutes enregistrées en groupes à dosage élevé, faible ou nul. Le dosage élevé a dépassé le dosage faible à g = 0.56 ; élevé contre aucun atteignait g = 0.65 mais p = .026, au-delà du seuil corrigé de .025. Les élèves sous le 25e percentile montraient g = 0.89 ([[burns-ai-tutor-reading-growth-2026|Burns et Morton, 2026]]).

Le système n'est jamais tout le traitement. Un enseignant décide qui l'utilise, pendant combien de temps et ce qui se passe lorsqu'il échoue.

## Lecture, écriture et rétroaction

- **La rétroaction améliorait l'écriture lorsque les enseignants en discutaient.** eRevise a fourni aux élèves de cinquième et sixième année une [[ai-feedback-quality|rétroaction automatisée]] sur l'usage des preuves dans un texte argumentatif. Sur 34 enseignants et 609 élèves dans huit paroisses de Louisiane, les scores par critère se sont améliorés par la seule rétroaction, et les classes où les enseignants répondaient de manière substantielle ont davantage progressé. Les explications conceptuelles de l'usage des preuves sont passées de 18.1 % à 41.9 % ([[correnti-erevise-validity-argument-formative-assessment-2026|Correnti et al., 2026]]).

- **La rétroaction adaptative a battu des consignes génériques bien faites.** Dans une expérience intra-sujet préenregistrée, 155 élèves allemands de cinquième et sixième année ont révisé six plans courts, trois avec une rétroaction de LLM sur leur propre texte et trois avec des consignes rédigées par des experts, appariées sur la structure, le ton et la longueur. La qualité médiane des plans est passée de 2 à 3 avec les consignes génériques et de 2 à 5 avec la rétroaction adaptative ([[ai-feedback-adaptivity-children-plans-2026|Sukjaitham et al., 2026]]).

- **Un programme d'écriture de neuf semaines avec l'[[generative-ai|IA générative]] a modifié l'affect, pas la profondeur.** Avec 301 élèves de 5e et 6e année dans l'est de la Chine répartis par classe, le programme a élevé le soi idéal d'écriture en langue seconde et la résilience académique et amélioré l'usage de la langue. Il n'a pas modifié l'état d'esprit de croissance, l'engagement cognitif ou métacognitif, ni l'organisation, et les effets étaient faibles : êta-carré partiel de .030 pour la [[motivation]] et de .014 pour l'usage de la langue ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]).

- **Dépister l'écriture par comparaisons de modèles a battu la notation par grille à grande échelle.** Sept LLM ont jugé en comparaison par paires des textes informatifs de la 3e à la 6e année plutôt que de les noter sur des scores absolus de grille ; les notes convergeaient avec les notations des chercheurs (r = .59–.73), les notes moyennées sur trois vagues classaient la compétence en ELA avec un AUC de .82–.86, et les modèles plus coûteux n'ajoutaient guère de validité ([[llm-comparative-judgment-writing-screening-2026|Mercer & Reed, 2026]]).

Une rétroaction contingente sur la tentative propre de l'enfant fait ce que des consignes génériques ne peuvent pas faire, et le gain s'accroît lorsqu'un adulte reprend ce que la rétroaction a soulevé.

## Littératie en IA et usage des chatbots par les enfants

- **Les enfants font vite confiance à un chatbot bien élevé.** Soixante-trois enfants de 6 à 14 ans ont utilisé un chatbot à sujet délimité dans une école publique américaine. Cinquante-deux pour cent faisaient généralement confiance à ses réponses, 35 % lui faisaient confiance comme à un enseignant ou à un ami, et environ un tiers se confieraient à lui. Les enfants testaient sa crédibilité avec des questions dont ils connaissaient déjà la réponse ([[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed et Martin, 2025]]).

- **La connaissance de l'IA croît avec l'âge ; le jugement de sécurité non.** Chez 71 enfants de 10 à 16 ans, les connaissances fondamentales sur l'IA augmentaient avec l'âge, β = 0.17. Les notes sur l'importance de la sécurité de l'IA (M = 2.51) et sur la sûreté actuelle de l'IA (M = 2.77) se regroupaient près du milieu d'une échelle en quatre points, sans effet de l'âge. Un enfant de 12 ans raisonnait ainsi : « s'ils sont de bons amis, il n'espionne pas tant » ([[children-ai-safety-misconceptions-2026|Leisten et al., 2026]]).

- **Enseigner l'IA produit de grands gains [[self-report-measures|auto-déclarés]].** Une méta-analyse de 16 études qui enseignaient l'IA elle-même a regroupé 57 tailles d'effet issues de 3,837 élèves de la maternelle à la 12e année à g = 0.892, avec une hétérogénéité de I² = 94.68 %.

- **Une échelle auto-déclarée validée existe pour la fin du primaire.** Le questionnaire de [[self-assessment|auto-évaluation]] de littératie en IA, en 15 items, couvre l'apprentissage de l'IA, son fonctionnement et la vie avec l'IA pour les classes de 4e à 6e, avec CFI = .994 et alpha = .934. Ses auteurs précisent qu'il mesure une compétence perçue, non démontrée ([[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan et Srikoon, 2025]]).

La littératie en IA ici n'est pas un [[curriculum-design|programme]] rendu plus simple. Un cadre pour un enfant de neuf ans et un pour un adolescent de dix-sept ans diffèrent par nature : le plus jeune a besoin d'histoires, d'[[metaphors-and-analogies|analogies]] et de fabrication, tandis que l'aîné peut critiquer un système et rendre compte d'une décision.

Les années du primaire portent le moins de preuves de toutes les bandes : cinq des 118 études examinées couvrent la petite enfance jusqu'au début du primaire, contre vingt-sept pour la fin du primaire, et aucun des neuf instruments validés ne consigne le processus de travail avec l'IA ([[guo-ai-literacy-developmental-paces-2026|Guo et al., 2026]]).

## Ce que contient la littératie en IA, et ce que les études mesurent

Une revue de 2025 de 25 études empiriques au primaire précise le contenu de cette affirmation : le construit qu'elle cartographie comporte quatre fils, enseignés en proportions très inégales. [[yim-ai-literacy-primary-schools-review-2025|Yim et Su (2025)]] ont trouvé la littératie numérique pour interagir avec l'IA dans 19 des 25 études, la pensée computationnelle dans 10, l'éthique de l'IA dans 10, et la littératie critique des données dans seulement 5.

Une unité de programmation n'atteint donc qu'un fil sur quatre. Le fil qui permettrait à un enfant de neuf ans de voir comment les données d'entraînement façonnent ce que dit un classifieur est celui que la littérature omet le plus souvent. Yim et Su lisent ce schéma comme un cadrage technique qui relègue les implications sociétales à un rôle secondaire.

L'enseignement suit une logique constructionniste, mais avec des agents plutôt qu'avec du papier. Les agents apparaissaient dans 15 des 25 études, les dispositifs centrés sur logiciel dans 8, et les activités débranchées dans 3 ; Teachable Machine, Jibo, Cozmo et Alexa permettaient aux enfants d'entraîner un modèle sans écrire de code. Sur les 16 études nommant un cadre, 8 utilisaient le constructionnisme ou le constructivisme et 6 le modèle ARCS. Les auteurs questionnent la séquence courante qui enseigne la programmation fondée sur des règles avant l'apprentissage fondé sur les données, puisque l'apprentissage automatique demande à l'enfant de sélectionner des exemples plutôt que d'écrire des règles.

Ce qui compte comme preuve est plus mince que ce qui est enseigné. Les enquêtes apparaissaient dans 19 des 25 études, souvent sous forme d'items ponctuels sur la disposition ou l'intention, et seulement 15 des 25 rapportaient un résultat d'apprentissage. Les entretiens (11) et les [[rubrics|grilles d'évaluation]] de productions (8) étaient les lieux où la compréhension conceptuelle apparaissait. C'est la base sous l'échelle validée d'[[self-assessment|auto-évaluation]] citée plus haut : un instrument solide pour la compétence perçue, dans une littérature qui teste rarement la compétence démontrée.

Une carte systématique de la recherche en sciences à l'élémentaire arrive au même problème depuis un autre corpus. Sur 103 publications indexées dans Scopus de 2023 au début de 2026, [[barokah-ai-elementary-science-review-2026|Barokah, Hermita et Putra (2026)]] ont trouvé des résultats qui s'élargissent vers le territoire affectif et régulateur tandis que les résultats épistémiques restent minces. Peu d'études demandaient si les enfants pouvaient séparer l'observation de l'inférence ou juger les limites d'une affirmation produite par l'IA. Leur avertissement sur l'évaluation est propre à ce cycle : les tâches de performance de la fin du primaire produisent des explications partielles, des dessins et des gestes, et un correcteur qui marque comme fausse une réponse développementalement productive supprime la valeur formative. Les contributeurs des deux littératures se concentrent en Chine, aux États-Unis et à Hong Kong, et la revue au primaire ajoute un écart de genre, les garçons déclarant plus de confiance et de préparation (Dai et al., 2020, cité dans Yim et Su).

## Décisions de conception qui comptent à ce niveau

- **Déployer à l'échelle de la classe, non de l'appareil.** Un écran partagé avec un enseignant qui saisit les invites garde les productions sous relecture adulte, et un flux médié par l'enseignant peut atteindre des élèves qui ne touchent jamais l'outil. Le dispositif brésilien débranché en est le cas le plus clair : papier et crayon pour les enfants, un appareil photo et un serveur pour l'enseignant.

- **Compter le travail de vérification.** Dans l'essai de numératie, les enseignants appréciaient les listes d'exercices prêtes à l'emploi mais citaient la photographie, l'attente et la correction des erreurs de reconnaissance comme coût. La charge de travail était associée négativement aux gains, le plus nettement pour la demande mentale, −2.569.

- **Garder le moment comportemental du ressort de l'adulte.** Sur 923 dialogues ancrés dans des cas tirés de la littérature sur l'éducation spécialisée, le meilleur des 11 tuteurs n'atteignait une intervention documentée que dans 43.3 % des plans à long terme, se rabattant sur la réassurance là où un cas prescrivait de vérifier d'abord le travail ([[tutor-case-bench-challenging-behaviors-2026|Park et al., 2026]]).

- **Former avant de généraliser.** Seuls 19.2 % des 302 enseignants du primaire turcs interrogés avaient reçu une formation à l'IA, et la formation et la fréquence d'usage étaient les variables les plus systématiquement associées à des perceptions favorables. La volonté (M = 3.98) dépassait nettement l'expérience (M = 3.00) ([[cigerci-primary-teachers-perceptions-ai-mathematics-2026|Ciğerci et Uygun, 2026]]).

- **Un observateur d'IA est une entrée pour le jugement professionnel, pas une évaluation.** Sur 12 vidéos de classe primaire notées selon le cadre TEACH Primary, huit points d'arrivée LLM ont divergé des experts certifiés au-delà de 55 % d'accord exact, les exécutions répétées variaient fortement, et les modèles fiables étaient souvent les moins exacts — parce qu'ils créditaient les indices verbaux explicites plutôt que l'[[self-regulated-learning|autorégulation]] soutenue de l'élève ([[melo-llm-classroom-observation-teach-2026|Melo et al., 2026]]).

- **Protéger la frontière entre savoir personnel et savoir partagé.** Les plans de cours générés peuvent ressembler à une pratique collectivement validée sans porter aucune caution communautaire. Le risque pèse le plus lourd sur les novices, dont les connaissances [[pedagogy|pédagogiques]] de contenu sont encore en formation ([[webb-pck-genai-2026|Webb et al., 2026]]).

- **Décider où vivent les données avant de choisir le modèle.** Un petit [[llm|modèle de langue]] de 1 à 13 milliards de paramètres hébergé par l'école, joignable seulement sur le réseau scolaire avec trafic sortant interdit, échange de la profondeur de raisonnement contre une confidentialité architecturale. Le test est de savoir si les responsables peuvent expliquer et contrôler ce qu'il advient des données des enfants ([[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar et Iqbal, 2026]]).

- **Traiter les compétences, non l'accès, comme le levier d'[[equity-in-ai-education|équité]].** Chez 4,497 élèves de 6e année aux Pays-Bas, la littératie numérique plutôt que l'intensité de l'usage de l'IA médiatisait le lien entre l'origine et les [[learning-gains|résultats]] ([[ai-divide-ses-personality-primary-education-2026|Wang et al., 2026]]).

## Connexions

L'enseignement primaire s'inscrit dans le [[k-12]] et hérite de ses problèmes de [[educational-policy-ai|politique]] et de capacité enseignante, mais les contraintes développementales lui sont propres. La littérature voisine sur la [[early-childhood-elementary-ai-education|petite enfance]] couvre le préscolaire et les premières années scolaires, où dominent le jeu et l'[[scaffolding|étayage]] adulte. L'[[secondary-education|enseignement secondaire]] prend le relais vers onze ans, lorsque les départements disciplinaires et les [[summative-assessment|examens]] remplacent la classe à enseignant unique.

## Implications pour la pratique

**Pour les enseignants**

- Fixez d'abord l'objectif de langue ou de mathématiques, puis choisissez la fonction de l'outil. Le soutien de l'IA fonctionnait lorsqu'il entrait dans une tâche plutôt que de la remplacer.
- Faites de l'entraînement adaptatif un poste court et consigné, et vérifiez les minutes par enfant, non l'adoption par classe.
- Demandez aux enfants ce qu'est un chatbot et qui peut voir ce qu'ils tapent avant de les laisser en utiliser un.

**Pour les chefs d'établissement**

- Chiffrez la deuxième et la troisième année de toute décision d'hébergement local : correctifs, sauvegarde et technicien responsable.
- Placez un relecteur nommé sur chaque plan ou série de commentaires rédigés par l'IA qui circule, et prévoyez le temps de relecture.
- Jugez un outil de lecture ou de mathématiques sur des mesures standardisées et proximales ensemble.

**Pour les chercheurs**

- Rapportez le dosage, le niveau scolaire et le soutien à la mise en œuvre à côté des tailles d'effet ; la plupart des études au primaire omettent l'un des trois.
- Séparez l'outil du flux de travail adulte dans la conception ; les effets de la formation et du système étaient indistinguables dans l'essai qui testait les deux.
- Mesurez le processus, pas seulement les scores au post-test. Les journaux de questions, les traces de révision et les grilles de dialogue capturent ce que les échelles auto-déclarées ne peuvent pas.

## Idées fausses courantes

- **« Adaptatif veut dire meilleur. »** L'adaptativité nomme un mécanisme, pas un résultat : le tuteur de deuxième année qui ajustait la difficulté des tâches laissait des scores au post-test statistiquement indistinguables de la séquence fixe, F(1, 124) = 0.32, p = .574.

- **« Un gain sur les items enseignés par le programme prouve l'apprentissage. »** Dans l'essai d'anglais au primaire, l'avantage apparaissait sur les mots couverts par l'intervention et disparaissait sur le vocabulaire standardisé et la compréhension en lecture.

- **« Les enfants abordent les chatbots avec un scepticisme sain. »** La confiance s'est formée vite dans l'étude citée : une majorité acceptait les réponses du système, et plus d'un tiers le traitait comme un enseignant ou un ami.

- **« Les jeunes enfants reçoivent une version plus facile du même programme de littératie en IA. »** Ce qui change entre les cycles est le type de tâche, non sa difficulté : histoires et fabrication tôt, critique et responsabilité plus tard.
