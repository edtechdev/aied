---
title: "Les méthodes de recherche en AIED"
created: "2026-08-13T05:48:37-04:00"
updated: "2026-10-10T03:05:31-04:00"
type: concept
foundations: [ai-education]
assessment: [educational-measurement]
research_method: [experiment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, rct, research-methods-aied]
translation_of: concepts/research-methods-aied
source_updated: "2026-10-05T10:25:44-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Les méthodes de recherche en AIED (Research methods in AIED)** — l'ensemble des dispositifs empiriques, des stratégies de collecte de données et des techniques analytiques que les chercheurs emploient pour étudier l'[[ai-education|IA en éducation]] : si et comment les outils d'IA soutiennent (ou nuisent à) l'apprentissage, et dans quelles conditions. Le corpus de la base de connaissances couvre les méthodes expérimentales, par sondage, qualitatives, par la conception, les repères de calcul et les méthodes de revue. Chacune a des forces et des limites distinctes, et choisir entre elles implique des compromis entre validité interne (confiance dans les affirmations causales), validité externe (généralisabilité), validité écologique (authenticité du monde réel) et la faisabilité d'étudier des outils d'IA en évolution rapide.

## Questions à examiner

- La tension centrale de la page : les dispositifs les plus solides pour l'inférence causale (les expériences randomisées) sont les plus difficiles à mettre en œuvre dans de véritables classes, tandis que les cadres les plus authentiques offrent un contrôle causal plus faible. Si vous deviez décider si un [[intelligent-tutoring|tuteur d'IA]] aide l'apprentissage, laquelle de ces deux défaillances préféreriez-vous subir — et pourquoi ?
- Avant de lire, pouvez-vous nommer la différence entre validité interne, externe et écologique ? La page soutient que tout dispositif fait des compromis entre elles. Comment une étude rigoureusement causale pourrait-elle néanmoins ne presque rien vous apprendre d'utile sur une véritable classe ?
- Un repère montre qu'une IA obtient un score élevé en exactitude, mais la page insiste : une grande exactitude au repère n'implique pas l'efficacité éducative. Pourquoi un système qui « réussit le test » pourrait-il néanmoins échouer à aider les étudiants à apprendre — et quel type de preuve manque ?
- La recherche par la conception itère sur une intervention réelle mais ne peut attribuer les gains à un mécanisme spécifique, tandis qu'un essai contrôlé randomisé isole les causes mais se déroule dans des conditions artificielles. Compte tenu du rythme rapide du changement en IA, combien de temps pensez-vous qu'un essai contrôlé randomisé rigoureux demeure pertinent avant que l'outil qu'il a testé ne soit obsolète ?
- Le consensus d'experts par la méthode Delphi établit un accord entre experts, non un effet empirique. Quand est-il légitime de construire un cadre de compétences à partir de ce que les experts croient, plutôt qu'à partir de données sur ce qui fonctionne — et comment le distingueriez-vous dans la pratique ?
- La page préconise la triangulation — combiner évaluation par repères, expériences, mesure et travail qualitatif pour juger à la fois si un outil fonctionne et comment. Avant de lire, à quel endroit d'une affirmation comme « cette IA améliore l'apprentissage » chaque méthode serait-elle nécessaire pour vous convaincre ?

## Introduction

La tension centrale de la recherche en AIED est que les dispositifs les plus solides pour l'inférence causale — les expériences randomisées — sont souvent les plus difficiles à mettre en œuvre avec des outils d'IA authentiques dans de véritables classes, tandis que les cadres les plus authentiques (déploiements sur le terrain, études de cas, analyses de données de journalisation) offrent un contrôle causal plus faible. Aucune méthode unique ne résout cela ; le champ avance par la triangulation entre méthodes, et en étant explicite sur le type d'affirmation que chaque dispositif peut supporter. Chaque méthode porte aussi des limites transversales — généralisabilité, validité de la mesure, rythme rapide du changement en IA, reproductibilité, et usage faible de la théorie — que les lecteurs doivent peser ; voir [[limitations-in-aied-research]].

Le sujet de la page est la méthode plutôt que les résultats. Les [[learning-sciences|sciences de l'apprentissage]] sont le champ de fond que ces méthodes servent : là où cette page traite de la manière dont une étude devrait être conçue, mesurée et rapportée, cette page traite de ce que le champ a établi sur la façon dont les personnes apprennent et dont les environnements d'apprentissage devraient être conçus, et elle traite les approches par la conception et les méthodes mixtes comme les approches signatures des sciences de l'apprentissage plutôt que comme deux options parmi d'autres.

Adjacente à cette page se trouve la [[ai-assisted-educational-research|recherche éducative assistée par IA]], qui couvre l'IA comme instrument du propre travail du champ : recherche bibliographique, tri, automatisation des revues, codage qualitatif, analyse et rédaction. Son périmètre inclut la recherche menée par des praticiens comme la scholarship of teaching and learning, et elle reste distincte des dispositifs que décrit cette page.

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen et Graulich (2026)]] soumettent la production de connaissances du champ lui-même au même examen, en utilisant le problème de mesure nomique de Chang (2004) : mesurer une quantité exige une loi la reliant à quelque chose d'observable, or cette loi ne peut être testée empiriquement sans déjà connaître la quantité. Ils soutiennent que les fonctions de mesure dérivées de l'IA, qui émergent des données d'entraînement et de l'optimisation plutôt que du chercheur, pourraient l'intensifier plutôt que le résoudre. De telles fonctions peuvent sembler précises tout en demeurant épistémiquement opaques, si bien que le rôle du chercheur se déplace vers l'interprétation et la validation des sorties computationnelles. Leur cadre réflexif en sept phases (cadrage du problème ; instrumentation et mesure ; expérimentation et inférence fondée sur les données probantes ; comparaisons et réplication ; construction de normes et consensus ; mise en œuvre et ses conséquences ; et raffinement continu) est proposé comme une aide analytique, non une méthode validée, et ils soutiennent que la comparabilité doit s'étendre à travers les populations étudiantes plutôt qu'aux sous-ensembles qu'un modèle sert bien.

### La rigueur du rapport et le modèle TEP-AIED

La qualité du rapport des études sur l'IA en éducation constitue elle-même une question de recherche. [[tep-aied-model-reporting-2026|Le modèle TEP-AIED (Hwang, Xie, Wah et Gasevic, 2026)]] offre un cadre structuré pour présenter la recherche sur l'IA en éducation avec rigueur, organisant les composantes essentielles d'un rapport d'étude — cadrage du problème en termes de théorie, de technologie et d'éducation, conception, données, analyse et résultats — afin que lecteurs et évaluateurs puissent apprécier si les affirmations sont étayées et si le travail est reproductible. Il répond aux faiblesses chroniques du champ en matière de rapport (descriptions vagues des outils, versions de modèles non énoncées, détails d'évaluation omis) que documente la page des [[limitations-in-aied-research|limites]]. Les cadres de rapport comme TEP-AIED se situent aux côtés des listes de contrôle de rapport établies (par exemple, les recommandations de style [[rct|CONSORT]] pour les essais, celles de style PRISMA pour les revues) comme part du mouvement plus large du champ vers la [[educational-measurement|transparence méthodologique]] et la reproductibilité.

[[raise-framework-ai-education-reporting-2026|RAISE (Allison, 2026)]] aborde le même problème dans la direction opposée — comme une liste de contrôle plutôt qu'une structure narrative. Il énonce **30 items répartis sur dix domaines thématiques** (justification éducative et ancrage théorique, spécification du système d'IA, rôle et interaction de l'IA, [[accessibility|accessibilité]] et adaptation culturelle, cadre et participants, implication humaine, conception et évaluation de l'étude, éthique et fiabilité, transparence et reproductibilité, et limites et implications), avec une version éditable et une **matrice d'éthique et de risque** annexe couvrant l'[[agency|autonomie]] de l'apprenant, l'[[equity-in-ai-education|équité]] d'accès, la [[governance|gouvernance]] des données et la transparence algorithmique. Les deux cadres se répondent directement : TEP-AIED caractérise RAISE comme complet mais lui reproche son ampleur, soutenant que « son ampleur et sa granularité peuvent le rendre complexe et moins accessible pour les applications empiriques routinières », tandis que le propre cadrage de RAISE est qu'il n'impose aucune méthode ni aucun modèle et exige seulement que les choix soient rendus visibles. Lus ensemble, ils marquent le compromis dans cette littérature — la liste de contrôle d'audit plus complète face au récit plus sobre en trois dimensions — et ils convergent sur les mêmes non-négociables : nommer et versionner le système d'IA, divulguer les invites et la conception des interactions, définir les conditions de traitement et de comparaison, rapporter l'examen éthique et l'atténuation des risques, et énoncer si les résultats mesurent la performance, la rétention ou le transfert. Pour qu'une étude soit jugée selon ces termes, l'instrument de rapport doit être adopté au moment de la conception plutôt qu'assemblé au stade du manuscrit, ce sur quoi les deux cadres insistent. L'analyse historique au niveau du corpus est elle-même un choix méthodologique assorti d'obligations de transparence : [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian et Doroudi]] situent chaque article dans leur cadre AI×Ed sur la base d'un jugement des auteurs portant sur les résumés et les textes intégraux, et reconnaissent explicitement que ce n'est pas une syst... [tronqué]

### Les dispositifs expérimentaux et quasi expérimentaux

Une **étude d'efficacité** teste si une intervention produit son effet d'apprentissage escompté, en employant typiquement des dispositifs expérimentaux ou quasi expérimentaux qui comparent les résultats avec et sans l'intervention. Les expériences assignent aléatoirement les apprenants à des conditions (par exemple, tuteur d'IA contre tuteur humain, ou étayé par l'IA contre non assisté) pour estimer les effets causals sur des résultats comme les gains d'apprentissage, l'[[student-engagement|engagement]] ou la motivation. **Les essais contrôlés randomisés** sont l'étalon-or pour la validité interne. [[access-not-enough-ai-tutoring-2026|Une étude de terrain randomisée sur le soutien humain allié au tutorat par IA]] et [[genai-can-harm-teaching-rct-2026|un essai contrôlé randomisé sur l'IA générative dans l'enseignement]] utilisent l'assignation pour isoler les effets causals. Les dispositifs **quasi expérimentaux** (pré/post, inter-sujets, ou groupes appariés sans randomisation) sont plus faisables dans des classes intactes mais plus faibles sur les affirmations causales.
- **La validation de l'instrument et les vérifications de référence précèdent l'estimation de l'effet.** [[genai-cognitive-scaffold-geometric-reasoning-2026|Davor (2026)]] a comparé deux classes intactes de lycée ghanéen (86 étudiants, 43 par groupe) sur l'IA générative comme étayage de la géométrie, en dimensionnant l'échantillon par une analyse G*Power et en éprouvant le Geometry Reasoning and Proof Test jusqu'à une fidélité de dichotomie de Spearman-Brown de 0,859 avant l'étude. Les groupes ne différaient pas significativement au pré-test, et une ANCOVA ajustant sur la performance antérieure conservait l'effet de groupe (F(1, 83) = 50,30, p < ,001, η² partiel = ,377). En l'absence d'assignation aléatoire, la fidélité du pilote et la vérification d'équivalence des références sont ce qui rend interprétable la comparaison ajustée.

- **Forces :** inférence causale la plus solide ; mesure nette des résultats ; soutient l'estimation de la taille d'effet et les affirmations d'efficacité.
- **Limites :** coûteux et lent ; des conditions artificielles peuvent réduire la validité écologique ; des outils d'IA en évolution rapide font vite dater les longues expériences ; de petits échantillons sont souvent sous-puissants pour détecter des effets signifiants ; des contraintes [[ethics|éthiques]] pèsent sur le retrait d'outils potentiellement utiles.
- **Exemples :** [[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]], [[agent-voice-accents-k12-group-learning]], [[ai-use-critical-thinking-medical-students-2026]].
- **La pré-enregistrement s'applique aux analyses secondaires, pas seulement aux essais.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] a fait tourner quatre règles de mise à jour du [[knowledge-tracing|traçage des connaissances]] sur des journaux ASSISTments identiques (12 716 étudiants, 985 813 événements notés) ne différant que dans la manière dont elles notent les lignes avec indice, a gardé scellée la moitié confirmatoire jusqu'à ce qu'existe un fichier contenant l'URL de l'enregistrement, et a rapporté que les quatre prédictions pré-enregistrées se vérifiaient. Accorder le crédit de toute complétion prédisait la performance ultérieure sans aide à peine au-dessus d'une constante de difficulté de compétence (AUC poolé 0,604 contre 0,595) tout en déclarant 93,9% des paires étudiant–compétence maîtrisées contre 72,8% sous une règle stricte. Lorsqu'un même journal permet plusieurs conclusions, fixer l'analyse à l'avance est ce qui rend crédible la comparaison.

### Les études par sondage et modélisation par équations structurelles

Les sondages transversaux mesurent les attitudes, perceptions, motivations, [[self-efficacy|sentiment d'efficacité personnelle]] et [[technology-acceptance-model|acceptation technologique]] auto-déclarés, souvent modélisés par régression ou modélisation par équations structurelles (SEM/PLS-SEM) pour tester les relations et médiateurs hypothétiques. Ces études dominent le corpus de la base de connaissances, en particulier pour les questions d'acceptation, de motivation et de mécanismes psychologiques.

- **Forces :** grands échantillons ; couverture large et peu coûteuse ; peuvent tester des modèles médiationnels complexes de mécanismes psychologiques ; faisables pour étudier des attitudes difficiles à observer.
- **Limites :** les données transversales ne peuvent établir la causalité ; biais de méthode commune et d'auto-déclaration ; l'échantillonnage de commodité limite la généralisabilité ; les médiateurs sont inférés de la covariance, non de la manipulation.

L'instrument lui-même mérite un examen distinct. Ce qu'un questionnaire, un entretien ou un journal peut et ne peut pas établir — et l'écart documenté entre ce que les personnes rapportent et ce qu'elles font — est rassemblé sur [[self-report-measures]].
- **Exemples :** [[acceptance-ai-english-tools-2026]], [[genai-motivation-engagement-2026]], [[ai-autonomous-learning-accomplishment-2026]], [[genai-over-reliance-learning-2026]], [[ai-use-critical-thinking-medical-students-2026]].

### Les méthodes qualitatives

Les entretiens, les groupes de discussion et l'analyse thématique produisent des comptes rendus riches et contextuels de la manière dont les étudiants et les enseignants vivent les outils d'IA, des significations qu'ils y attachent, et des tensions et préjudices que les mesures standardisées manquent. La [[hazra-safetutors-pedagogical-safety-2026|recherche sur la sécurité des tuteurs d'IA]] et [[ai-changing-teaching-workflows|la manière dont l'IA change les flux de travail enseignants]] reposent largement sur des données probantes qualitatives. Voir la page de concept dédiée [[qualitative-research]] pour le traitement complet des approches qualitatives — analyse thématique, théorie ancrée, phénoménologie/phénoménographie, analyse du discours, observations et ethnographie, études de cas, et entretiens/groupes de discussion — chacune avec des exemples issus de la base de connaissances.

- **Forces :** une perspicacité écologique et conceptuelle profonde ; fait émerger des phénomènes, des risques et des mécanismes inattendus ; essentielle pour la construction de théorie et pour l'étude de construits contestés comme la confiance, l'[[agency|autonomie]] et la paternité.
- **Limites :** généralisabilité limitée ; caractère interprétatif et dépendant du chercheur ; petits échantillons ; soutien plus faible des affirmations causales ; les résultats peuvent être difficiles à synthétiser entre études.
- **Exemples :** [[hazra-safetutors-pedagogical-safety-2026]], [[ai-changing-teaching-workflows]], [[scaffolding-critical-engagement-genai-minority-students]].

### Les dispositifs à méthodes mixtes

Les études à méthodes mixtes combinent des volets quantitatifs et qualitatifs — souvent séquentiellement (par exemple, QUAL→QUAN→qual) — afin que les données qualitatives expliquent ou contextualisent les résultats quantitatifs. [[genai-over-reliance-learning-2026|Une étude à méthode mixte sur l'IA générative et l'apprentissage durable]] associe des sondages en trois vagues à des entretiens d'éducateurs ; [[t2i-competence-paradox-2026|l'étude sur le paradoxe de la compétence]] emploie des groupes de discussion d'enseignants, un sondage étudiant et des entretiens de suivi.

- **Forces :** la triangulation accroît la confiance ; ampleur quantitative plus profondeur qualitative ; peut expliquer des résultats inattendus et faire le pont entre mécanisme et ampleur.
- **Limites :** complexité, intensité de ressources et exigence méthodologique ; l'intégration peut être superficielle si elle n'est pas soigneusement conçue ; elle hérite encore des faiblesses de chaque volet (par exemple, l'auto-déclaration).
- **Exemples :** [[genai-over-reliance-learning-2026]], [[t2i-competence-paradox-2026]], [[same-ai-different-pathways]], [[fouad-bentley-trust-utility-gap-physics-2026]].

### La recherche par la conception (DBR)

La recherche par la conception conçoit, met en œuvre et affine itérativement une intervention éducative dans des contextes authentiques, cyclant entre théorie, conception et pratique du monde réel. Elle est proéminente dans la base de connaissances pour le développement d'environnements d'apprentissage par IA et de modèles [[pedagogy|pédagogiques]]. Voir la page de concept dédiée [[design-based-research]] pour le cycle complet de la recherche par la conception, ses exemples, et ses forces et limites. Un exemple canonique en AIED est l'étude du modèle d'[[collaborative-learning|apprentissage collaboratif]] assisté par IA ([[ai-assisted-collaborative-learning-model-dbr|Putra et coll.]]), qui a déroulé un cycle de recherche par la conception en quatre phases — analyse des besoins, conception du modèle, mise en œuvre en classe sur huit semaines, et raffinement du modèle — en itérant sur un cycle d'apprentissage en quatre étapes (identification du problème → enquête collaborative assistée par IA → [[problem-solving|résolution de problèmes]] collaborative → réflexion et présentation). D'autres exemples développent la [[teacher-education|formation des enseignants]] à l'[[ai-literacy|IA littératie]] ([[genai-literacy-training-teacher-education-dbr-2026]]) et l'[[scaffolding|étayage]] par [[generative-ai|IA générative]] de la [[critical-thinking|pensée critique]] ([[critical-thinking-genai-scaffolding]]).

- **Forces :** validité écologique et pertinence pratique élevées ; produit à la fois des artefacts utilisables et de la théorie ; réactive à la complexité des classes réelles et à l'évolution des outils d'IA ; bien adaptée au développement d'un modèle et à son affinage sur la base de données probantes de mise en œuvre authentiques.
- **Limites :** faible validité interne (peu ou pas de groupes témoins) ; les résultats sont liés au contexte et difficiles à généraliser ; des échéances longues ; il est difficile d'isoler l'élément de conception qui a causé un résultat — la recherche par la conception démontre la faisabilité et l'amélioration mais ne peut attribuer les gains d'apprentissage à un mécanisme spécifique.
- **Exemples :** [[ai-assisted-collaborative-learning-model-dbr]], [[genai-literacy-training-teacher-education-dbr-2026]], [[critical-thinking-genai-scaffolding]], [[human-centered-ai-teacher-educators-2026]].

La recherche par la conception échange le contrôle causal des [[rct|expériences]] contre l'authenticité écologique et l'affinage itératif : c'est le bon outil pour les questions du type « comment concevons-nous cet environnement d'apprentissage par IA pour qu'il fonctionne dans la pratique ? », et ses données probantes sont les plus solides comme preuve de concept et comme guide de conception plutôt que comme efficacité causale. Lire les gains d'apprentissage issus d'une recherche par la conception exige la même [[limitations-in-aied-research|prudence]] que pour d'autres dispositifs — sans mesure de résultat témoin et non assistée, les gains peuvent refléter le même facteur de confusion de performance gonflée par l'IA documenté sous [[learning-gains|gains d'apprentissage]].

### Les revues systématiques et les méta-analyses

Les revues synthétisent la base de données probantes plutôt que de mener une nouvelle expérience. Les revues systématiques et de portée appliquent un protocole transparent pour rechercher, filtrer, évaluer et synthétiser un corpus d'études ; les méta-analyses poolent en outre les tailles d'effet entre études pour produire une estimation résumée pondérée et tester des modérateurs. [[zerkouk-comprehensive-review-its-2025|Une revue complète des systèmes de tutorat intelligent]] et [[genai-higher-education-systematic-review-2026|une revue systématique de l'IA générative dans l'enseignement supérieur]] illustrent l'approche.

- **Forces :** synthèse efficiente d'une littérature vaste et fragmentée ; la méta-analyse produit des estimations d'effet poolées et détecte des modérateurs ; essentielle pour la pratique fondée sur les données probantes et l'identification des lacunes.
- **Limites :** dépendent de la qualité des études incluses (entrée de déchets, sortie de déchets) ; biais de publication ; des méthodes et des mesures de résultats hétérogènes rendent la synthèse difficile ; vieillissement rapide compte tenu de la vitesse du changement en IA.
- **Réserve de méta-recherche (2026) :** les critiques de la base de synthèse en AIED montrent que de nombreuses méta-analyses anciennes sont minées par l'incohérence des construits, l'hétérogénéité non résolue, la dépendance non traitée entre tailles d'effet, et l'évaluation invalide du biais de publication — ce qui gonfle les tailles d'effet phares de l'IA (voir [[bartos-ai-learning-meta-meta-analysis-2026]], [[oneill-presumed-effective-meta-analysis-2026]], et [[weidlich-chatgpt-effect-search-cause-2025]]). Traitez les tailles d'effet poolées en AIED comme des bornes supérieures.
- **Exemples :** [[zerkouk-comprehensive-review-its-2025]], [[genai-higher-education-systematic-review-2026]], [[chatgpt-critical-creative-thinking-review]], [[zerkouk-comprehensive-review-its-2025]], [[agentic-ai-education-scoping-review]].

Voir la page de concept dédiée [[meta-analysis-systematic-review]] pour un traitement plus complet de la revue systématique et de la méta-analyse dans l'IA en éducation — y compris leur relation aux dispositifs primaires, le rapport PRISMA, et leurs forces et limites.

### L'évaluation computationnelle et par repères

L'évaluation computationnelle évalue directement les [[ai-technologies|systèmes d'IA]] — contre des repères, des étiquettes de vérité terrain, ou des jugements humains — plutôt que d'étudier les apprenants humains. Cela inclut les [[benchmark|repères]], les approches de [[llm|grand modèle de langue]] comme juge. C'est la méthode la plus proche de l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]] (voir la distinction ci-dessous).

- **Forces :** rapide, évolutive, reproductible ; permet la comparaison directe de modèles et de versions de système ; essentielle pour le développement de systèmes et l'assurance qualité.
- **Limites :** mesure la sortie du système, non l'apprentissage — une grande exactitude au repère n'implique pas l'efficacité éducative ; la qualité de la vérité terrain et des grilles est elle-même contestée ; elle peut manquer la qualité pédagogique que perçoivent les humains. [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian et Doroudi]] soutiennent que la flexibilité en langage naturel des grands modèles de langue rend les métriques purement techniques insuffisantes, exigeant des approches d'évaluation inspirées de l'humain — des [[simulating-students|étudiants simulés]], des tests d'[[teacher-role|enseignant]] par IA, et des analyses de sciences comportementales auparavant réservées aux sujets humains — pour juger la qualité pertinente pour l'apprentissage, et que l'étude prudente des grands modèles de langue peut produire des éclairages sur l'apprentissage humain.
- **Des participants disjoints, et non des partages aléatoires, empêchent les fuites dans l'évaluation des détecteurs.** [[detecting-gpt-assisted-writing-stylometric-2026|Kumar et coll. (2026)]] ont construit un détecteur stylométrique d'[[ai-detection|IA]] à partir de 90 auteurs qui produisaient chacun un échantillon sans aide et un échantillon paraphrasé, gardant chaque fenêtre issue d'un participant dans un seul pli afin que le style de l'auteur ne puisse pas fuir à travers la division, et en écartant entièrement 18 personnes. La forêt aléatoire atteignait ROC-AUC 0,870 avec F1 0,842, mais signalait 4 des 18 documents rédigés indépendamment comme assistés par GPT (22,2%) ; les auteurs traitent ce taux de faux positifs comme le résultat pertinent pour le déploiement et cadrent le modèle comme une aide à la décision plutôt qu'un criblage automatisé de faute.
- **Exemples :** [[teachbench-llm-teaching-evaluation]], [[jeon-isd-agent-bench-2026]], [[ground-truth-reliability-aied]], [[cong-confidence-asag-2026]], [[drawedumath-vlm-struggling-students-2026]].
- **Les normes de rapport pour les pipelines automatisés, et les repères audités.** Deux articles de 2026 étendent la responsabilité méthodologique au-delà de l'étude elle-même. PRISMA-LLM cartographie 888 articles d'automatisation de revues et 14 726 annotations, constatant que 38,0% des articles sur les logiciels ou produits ne rapportaient aucune évaluation contre 9,3% des articles sur les grands modèles de langue, et que 52% des évaluations de grands modèles de langue à résultats positifs uniquement laissaient un critère exigeant non satisfait, et propose un rapport identifiant où, dans le flux de travail de la revue, l'automatisation est intervenue ([[prisma-llm-ai-assisted-systematic-reviews-2026]]). Un audit de nouvelle correction par des experts de six repères de [[physics-education|physique]] montre le même problème au niveau de l'instrument : sur 250 rejets audités, seuls 12 (4,80%) étaient des erreurs de modèle authentiques, tandis que 143 étaient des défauts d'items et 95 des erreurs de correcteur ([[frontier-models-physics-benchmark-audit-2026]]). Les deux soutiennent que les évaluations computationnelles ont besoin d'un budget d'erreur audité avant que leurs résultats soient lus comme des résultats sur les apprenants ou les modèles.
- **Intégrer la vérification de l'accord humain au développement des détecteurs, pas après.** [[baker-taylorizable-process-textual-detector-development-2026|Baker et collègues (2026)]] énoncent un processus en sept étapes pour les détecteurs textuels de construits cognitifs — sélection du jeu de données, définition du construit, rédaction du manuel de codage, vérification de l'accord inter-évaluateurs par des humains, raffinement des catégories, construction du détecteur, et application — afin que la fiabilité sur les étiquettes codées par des humains précède tout déploiement de [[llm|grand modèle de langue]] comme juge. Cela exige des métriques d'accord corrigées du hasard (κ de Cohen ou de Fleiss, α de Krippendorff), une validation croisée au niveau de l'étudiant, et l'analyse des erreurs par sous-groupe comme normes minimales, et soutient que la mésure erronée devient une source de préjudice dès lors que de tels [[educational-nlp|détecteurs]] résident à l'intérieur de plateformes déployées.

### Autres dispositifs : longitudinaux, études de cas et de simulation

Au-delà des grandes familles, la base de connaissances emploie des dispositifs **longitudinaux** qui suivent les apprenants dans le temps ([[ai-lms-middle-school-longitudinal|une étude longitudinale d'un système de gestion de l'apprentissage]]), des études de **cas et en milieu naturel** d'usages authentiques ([[ai-in-the-wild-college|l'analyse à grande échelle d'interactions réelles d'étudiants]]), et des études de [[simulation|simulation]] dans lesquelles des grands modèles de langue se substituent à des étudiants ou des patients ([[llm-student-simulation-teacher-insights|les grands modèles de langue comme apprenants simulés]], [[simulation]]). Ces dispositifs échangent l'ampleur ou le contrôle contre le réalisme et l'accès à des phénomènes autrement difficiles à observer.

### Les méthodes de consensus d'experts : la technique Delphi

La méthode Delphi est une technique structurée pour établir un **consensus d'experts** sur une question dont la réponse n'est pas encore connue empiriquement — le plus souvent utilisée dans la base de connaissances pour développer des cadres, des listes de compétences et des définitions sur lesquels praticiens et chercheurs peuvent s'accorder. Dans une étude Delphi, un panel d'experts répond à des vagues successives de questionnaires ; après chaque vague, un résumé anonymisé des réponses du groupe est renvoyé, et les experts révisent leurs réponses jusqu'à ce que le groupe converge vers un accord (typiquement défini par un seuil préétabli, par exemple 75%). C'est une manière de construire la validité de construit et le consensus professionnel par consultation itérative et anonymisée plutôt que par un sondage ou un vote unique.

- **Forces :** produit un consensus issu d'un panel d'experts diversifié sans les pressions du groupe en personne (l'anonymat réduit les effets de dominance) ; bien adaptée à la définition de construits, de compétences et de cadres lorsqu'aucune mesure validée n'existe ; les vagues itératives permettent aux experts de raffiner et de converger ; faisable là où des expériences complètes ou de grands échantillons sont impraticables.
- **Limites :** le consensus reflète le jugement d'experts, non les données probantes empiriques — il établit un accord, non un effet ; les résultats dépendent de la [[writing-education|composition]] du panel et du seuil de consensus (subjectif) ; le processus peut être lent sur plusieurs vagues ; le jugement d'un panel unique peut ne pas se généraliser.
- **Exemples :** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|l'étude du cadre SAIL]] (trois vagues, 17 experts, affinant les niveaux de compétence en littératie en IA), [[hcap-human-centric-ai-pedagogy-framework-2026|l'étude du cadre HCAP]] (trois vagues, 30 enseignants, définissant 25 compétences d'enseignant en IA), [[ai-literacy-heptagon-2026|l'heptagone de la littératie en IA]] (qui a employé un apport/consensus d'experts aux côtés d'une revue guidée par PRISMA), et.

La méthode Delphi est souvent combinée à d'autres méthodes — par exemple, le consensus d'experts peut servir à valider un cadre (comme dans SAIL et HCAP) qui est ensuite testé ou mis en œuvre par la recherche par la conception ou des études par sondage. Elle se situe aux côtés des approches qualitatives et de jugement d'experts et contribue à la [[educational-measurement|validité]] des instruments fondés sur des cadres.

### Recherche contre évaluation : connexions et distinctions

La recherche et l'évaluation sont étroitement liées mais distinctes. La **recherche** pose des questions généralisables sur la manière dont l'IA affecte l'apprentissage — « l'étayage améliore-t-il les résultats d'apprentissage ? » — et vise à construire une théorie et des données probantes qui se transfèrent au-delà de l'étude spécifique. L'**évaluation** (voir [[ai-ed-evaluation]]) apprécie si un outil ou un système d'IA *spécifique* fonctionne — s'il est exact, fiable, pédagogiquement solide et propre à l'usage — contre des repères, des grilles ou des critères définis par les parties prenantes. La recherche met l'accent sur la validité interne et la généralisation ; l'évaluation met l'accent sur la qualité du système et la prise de décision locale.

Les frontières s'estompent : les études par repères sont de l'évaluation qui peut alimenter la recherche, et les instruments d'évaluation (grilles, ensembles de vérité terrain, cadres de validité) dépendent des préoccupations de [[educational-measurement|mesure en éducation]] et d'[[assessment-validity|validité de l'évaluation]] que la recherche clarifie. Inversement, les résultats de recherche sur ce qui soutient l'apprentissage devraient éclairer la manière dont les outils d'IA sont [[ai-ed-evaluation|évalués]]. La base de connaissances les traite comme complémentaires : l'évaluation computationnelle et par repères ([[benchmark|repères]], [[ai-ed-evaluation|évaluation]]) nous dit si un système d'IA est techniquement solide, tandis que la recherche d'efficacité et par sondage ([[rct|essais contrôlés randomisés]]) nous dit s'il aide les personnes à apprendre.

### Choisir entre les méthodes

Le choix de la méthode suit la question de recherche. Les questions d'effet causal favorisent les expériences ([[rct|essais contrôlés randomisés]]) ; les questions de mécanisme et de perception favorisent les sondages et le travail qualitatif ; les questions de qualité de système favorisent l'évaluation computationnelle ([[benchmark|repères]], [[ai-ed-evaluation|évaluation]]) ; les questions de synthèse favorisent les revues et méta-analyses ; les questions de conception favorisent la recherche par la conception ; et les questions portant sur ce sur quoi les experts s'accordent quant à ce qu'un construit, une compétence ou un cadre devrait contenir favorisent les méthodes de consensus d'experts comme la technique Delphi. Compte tenu de l'hétérogénéité du champ et de la vitesse du changement en IA, le corpus de la base de connaissances reflète un mouvement délibéré vers la triangulation — combinant évaluation computationnelle, efficacité, données probantes qualitatives et consensus d'experts pour juger à la fois si un outil fonctionne et s'il aide l'apprentissage.

Il est tout aussi important de lire toute étude singulière avec la conscience des **limites transversales** qui affectent la recherche en AIED dans son ensemble — contraintes méthodologiques, rythme rapide du changement en IA contre lenteur de la publication, lacunes de reproductibilité et de pratique FAIR, dépendance à l'égard d'outils propriétaires, et usage faible ou non critique de la théorie. Voir [[limitations-in-aied-research]].

## Contraster les grandes traditions de recherche

Les trois grandes traditions de recherche — [[quantitative-research|quantitative]], [[qualitative-research|qualitative]] et expérimentale — diffèrent fondamentalement par ce qu'elles peuvent affirmer, ce qu'elles sacrifient, et le moment où chacune est appropriée. Comprendre ces contrastes est essentiel tant pour concevoir que pour lire la recherche sur l'IA en éducation.

### Ce que chaque tradition établit

| Dimension | Quantitatif / sondage | Qualitatif | Expérimental |
|---|---|---|---|
| Question centrale | Combien ? Comment lié ? | Que signifie-t-ce ? Comment est-ce vécu ? | X cause-t-il Y ? |
| Données primaires | Nombres, échelles, auto-déclaration | Mots, observations, artefacts | Mesures de résultats selon les conditions assignées |
| Cible d'inférence | Schémas, corrélations, médiation | Sens, mécanismes, catégories | Effets causals |
| Validité interne | Faible (corrélationnelle) | Faible (pas de contrôle) | Forte (assignation aléatoire) |
| Validité externe | Forte (grands échantillons) | Limitée (petits, liés au contexte) | Modérée (conditions contrôlées) |
| Validité écologique | Modérée | Élevée | Plus faible (conditions artificielles) |

- **La [[quantitative-research|recherche quantitative]]** mesure et modélise les relations entre variables — sondages, SEM/PLS-SEM, mesure, suivi longitudinal. Elle fournit l'ampleur, la précision et la généralisabilité mais ne peut établir la causalité à partir de données transversales et hérite des limites de [[educational-measurement|mesure]] (y compris le biais d'auto-déclaration).
- **La [[qualitative-research|recherche qualitative]]** interprète le sens et l'expérience — entretiens, groupes de discussion, analyse thématique, théorie ancrée, phénoménographie, analyse du discours, observation/ethnographie, études de cas. Elle fournit la profondeur, le mécanisme et la construction de théorie (voir [[theory-development-aied]]) mais une généralisabilité limitée et un soutien causal faible.
- **Les dispositifs expérimentaux et quasi expérimentaux** (voir [[rct|essais contrôlés randomisés]]) estiment les effets causals par assignation aléatoire ou comparaison appariée — l'étalon-or pour la validité interne, au prix du coût, de la vitesse et de la validité écologique.

### Les liens de mesure et de méthodes mixtes

Le travail quantitatif dépend de la [[educational-measurement|mesure en éducation]] — des instruments fiables et valides pour les construits étudiés. Le travail qualitatif révèle les mécanismes et les significations que ces instruments peuvent manquer. Le travail **expérimental** estime si une intervention *cause* les résultats que les instruments mesurent. Les trois sont des couches complémentaires : les instruments quantifient les construits, les expériences établissent la causalité, et le travail qualitatif explique le *comment et le pourquoi* derrière les nombres.

Les [[mixed-methods-research|dispositifs à méthodes mixtes]] combinent intentionnellement des volets quantitatifs et qualitatifs afin que leurs forces compensent les faiblesses de l'autre — ampleur quantitative plus profondeur qualitative, la triangulation accroissant la confiance.

### La recherche d'utilisabilité et en IHM

Un volet méthodologique distinct — la [[usability-research|recherche d'utilisabilité et en IHM]] — évalue la manière dont les utilisateurs interagissent avec un système d'IA : son utilisabilité, son utilité, son apprenabilité et l'expérience utilisateur, en employant des protocoles de pensée à voix haute, des études utilisateurs structurées, des entretiens et de l'observation. C'est ce qui est le plus proche de l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]] et cela répond à une question *préalable* : même un outil pédagogiquement solide échoue s'il est inutilisable. La recherche d'utilisabilité partage les méthodes de collecte de données avec la recherche qualitative mais vise à évaluer un artefact plutôt qu'à interpréter le sens.

### Avantages et limites selon les traditions

- **Quantitatif/sondage :** avantages — grands échantillons, couverture large, teste des médiateurs complexes, efficient. Limites — pas de causalité, biais d'auto-déclaration, échantillonnage de commodité, les instruments peuvent mesurer le mauvais construit.
- **Qualitatif :** avantages — perspicacité profonde, fait émerger des phénomènes et des préjudices inattendus, essentiel pour la construction de théorie, centre les voix sous-représentées. Limites — généralisabilité limitée, dépendance au chercheur, petits échantillons, soutien causal faible, difficile à synthétiser.
- **Expérimental :** avantages — inférence causale la plus solide, mesure nette des résultats, estimation de la taille d'effet. Limites — coûteux/lent, conditions artificielles, la rapidité du changement en IA date les résultats, petits échantillons sous-puissants, contraintes éthiques.
- **À méthodes mixtes :** avantages — triangulation, ampleur + profondeur, explique les résultats inattendus. Limites — complexité, intensité de ressources, l'intégration peut être superficielle, hérite des faiblesses de chaque volet.
- **Utilisabilité/IHM :** avantages — identifie les barrières à l'adoption, conseils de conception actionnables, rapide et peu coûteux. Limites — n'établit pas les effets d'apprentissage, petits échantillons, la satisfaction auto-déclarée peut induire en erreur.

Dans la pratique, la recherche sur l'IA en éducation tombe rarement proprement dans une seule tradition. Les données probantes les plus solides triangulent : une évaluation computationnelle ou d'utilisabilité établit qu'un système fonctionne, une expérience établit qu'il cause l'apprentissage, les instruments quantitatifs mesurent les construits, et le travail qualitatif révèle les mécanismes et les significations — répondant ensemble à la fois à *si* un outil aide l'apprentissage et à *comment et pourquoi*.

## Concepts liés

- [[interpreting-and-applying-aied-research]]
- [[ai-ed-evaluation]]
- [[rct]]
- [[benchmark]]
- [[meta-analysis-systematic-review]]
- [[ai-assisted-educational-research]] — Recherche éducative assistée par IA
- [[educational-measurement]]
- [[assessment-validity]]
- [[simulation]]
- [[ai-education]]
- [[higher-ed]]
- [[limitations-in-aied-research]]
- [[learning-gains]]
- [[theory-development-aied]] — Le développement théorique dans l'IA en éducation
- [[qualitative-research]] — La recherche qualitative
- [[quantitative-research]] — La recherche quantitative
- [[mixed-methods-research]] — La recherche à méthodes mixtes
- [[design-based-research]] — La recherche par la conception
- [[usability-research]] — La recherche d'utilisabilité
- [[self-report-measures]]
- [[learning-sciences]]

## Articles liés

- [[ai-methodologies-science-education-research-2026]] — Un cadre d'itération épistémique en sept phases pour réfléchir à la manière dont les méthodologies d'IA peuvent transformer la recherche en éducation scientifique (Martin et coll., 2026)
- [[access-not-enough-ai-tutoring-2026]] — L'accès ne suffit pas : le soutien humain améliore l'engagement envers le tutorat par IA
- [[genai-can-harm-teaching-rct-2026]] — L'IA générative peut nuire à l'enseignement
- [[genai-over-reliance-learning-2026]] — De l'amélioration à la dépendance excessive : une étude à méthode mixte
- [[acceptance-ai-english-tools-2026]] — L'acceptation des outils d'apprentissage des langues assisté par IA
- [[hazra-safetutors-pedagogical-safety-2026]] — La sécurité des tuteurs d'IA et les préjudices pédagogiques
- [[zerkouk-comprehensive-review-its-2025]] — Revue complète des systèmes de tutorat intelligent
- [[ai-assisted-collaborative-learning-model-dbr]] — Recherche par la conception pour un modèle d'apprentissage collaboratif assisté par IA
- [[teachbench-llm-teaching-evaluation]] — TeachBench : évaluer la capacité d'enseignement des grands modèles de langue
- [[ground-truth-reliability-aied]] — Moderniser la vérité terrain : quatre glissements vers la fiabilité et la validité
- [[llm-student-simulation-teacher-insights]] — Les grands modèles de langue peuvent-ils simuler efficacement des apprenants humains ?
- [[raise-framework-ai-education-reporting-2026]] — RAISE : 30 items en dix domaines pour un rapport transparent des études sur l'IA en éducation (Allison 2026)
- [[ai-lms-middle-school-longitudinal]] — Système de gestion de l'apprentissage intégrant l'IA : une étude longitudinale
- [[ai-in-the-wild-college]] — L'IA en milieu naturel : analyse à grande échelle d'interactions authentiques
- [[same-ai-different-pathways]] — Même IA, voies différentes : déballer les mécanismes
- [[tep-aied-model-reporting-2026]] — Le modèle TEP-AIED pour rapporter la recherche sur l'IA en éducation avec rigueur (Hwang, Xie, Wah et Gasevic 2026)
- [[t2i-competence-paradox-2026]] — Le paradoxe de la compétence : l'IA générative texte-image en art et design
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT dans l'éducation : un effet à la recherche d'une cause
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Méta-méta-analyse de l'effet de l'IA sur l'apprentissage
- [[oneill-presumed-effective-meta-analysis-2026]] — Présumé efficace : audit d'une méta-analyse en AIED défectueuse
- [[synthetic-educational-data-structural-fidelity-2026]] — Ce que les métriques de fidélité manquent : une vérification structurelle des données éducatives synthétiques
