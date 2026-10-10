---
title: "Effets différentiels selon les groupes d'apprenants"
created: "2026-09-19T06:20:00-04:00"
updated: "2026-10-10T03:24:44-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-01T10:47:53-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Effets différentiels selon les groupes d'apprenants** — ce que la recherche sur l'[[ai-education|IA en éducation]] découvre quant à la manière dont l'*usage* de l'IA et ses *effets* diffèrent selon les types d'apprenants : les [[special-education|élèves en situation de handicap]] et les élèves [[neurodiversity|neurodivergents]], les apprenants de langue seconde et les apprenants [[multilingual-learning|multilingues]], les filles et les garçons, les élèves minorisés, les élèves issus de milieux à faible revenu, les élèves ruraux, les étudiants de première génération, les étudiants internationaux et les [[adult-learning|apprenants adultes]]. Le schéma qu'il faut retenir est inégal dans deux directions à la fois : certains fils disposent de données probantes réelles (handicap, langue) tandis que d'autres sont presque vides (première génération, internationaux, réfugiés), et même les fils solides établissent rarement qu'un *groupe* diffère — ils établissent qu'un outil a aidé ou nui à un échantillon de ce groupe, ce qui est une affirmation différente. Cette page cartographie ce qui existe, ce qu'il montre, et les raisons méthodologiques pour lesquelles une moyenne de groupe n'est pas une prédiction à propos d'un apprenant.

## Questions à examiner

- Votre outil fonctionne surtout pour les élèves de votre classe, et un sous-groupe de cinq a éprouvé des difficultés. Une différence de sous-groupe de cette ampleur serait-elle seulement détectable dans une étude de ce type — et voudriez-vous modifier l'outil pour toute la classe sur cette base ?
- Les recherches sur les élèves en situation de handicap font état d'effets qui varient selon la catégorie de handicap. Si deux catégories se situent à des tailles d'effet très différentes dans une même [[meta-analysis-systematic-review|méta-analyse]], qu'est-ce que cela dit du fait de traiter le « handicap » comme un groupe unique dans une décision de conception ?
- Plusieurs études montrent que des outils d'IA ne diffèrent *pas* selon le genre dans leurs effets, tandis que d'autres travaux montrent que la [[ai-feedback-quality|rétroaction par l'IA]] et l'écriture assistée par l'IA reproduisent *bien* les stéréotypes de genre lorsque des personas ou des invites les portent. Comment les deux peuvent-ils être vrais à la fois ?
- La plupart des travaux sur l'équité testent des personas d'étudiants simulés plutôt que de véritables apprenants, parce que les attributs démographiques réels ne sont pas accessibles au modèle au moment de l'inférence dans la plupart des déploiements. Qu'est-ce qu'un audit contrefactuel de personas peut établir, et que ne peut-il pas établir ?
- En passant en revue les fils de cette page, quels groupes d'apprenants sont réellement représentés dans les études qui sous-tendent la validation de votre outil — et que feriez-vous d'un groupe absent ?
- Une intervention qui élève les résultats pour tous tout en comblant un écart (en aidant le plus les élèves qui étaient en retard) a une histoire d'équité différente de celle d'une intervention qui élève la moyenne. Lorsque vous évaluez un pilote, mesurez-vous l'écart ou la moyenne ?

## Introduction

Deux questions se cachent dans la phrase « est-ce que l'IA fonctionne pour *ce type* d'étudiant ? ». La première porte sur les effets : un outil produit-il des résultats différents selon les groupes ? La seconde porte sur l'usage : différents groupes adoptent-ils, accèdent-ils ou interagissent-ils différemment avec un même outil, ce qui peut façonner les résultats sans aucun effet différentiel. Cette page traite des deux, groupe par groupe, et dit franchement où s'arrête la littérature.

Elle n'est délibérément pas un doublon de ses voisines. L'[[equity-in-ai-education|Équité dans l'IA en éducation]] porte le cadre normatif et structurel — accès, représentation et équité des résultats, et l'argument sur ce que l'IA en éducation *devrait* faire. L'[[inclusive-learning|Apprentissage inclusif]] porte le cadre de conception, y compris la [[universal-design-for-learning|Conception universelle de l'apprentissage]]. La [[digital-divide|Fracture numérique]] couvre les couches de l'accès et des compétences. [[neurodiversity]], l'[[special-education|Enseignement spécialisé]], l'[[accessibility]] et l'[[multilingual-learning|Apprentissage multilingue]] approfondissent des groupes uniques. Ce qui reste à cette page, c'est la carte transversale des données probantes et la question d'appréciation : comment ces effets sont estimés, quels groupes sont étudiés du tout, et ce qu'un constat au niveau du groupe vous autorise à faire.

## Comment les différences entre groupes sont rapportées, et pourquoi la plupart ne peuvent pas l'être

**Une étude à groupe unique n'est pas une étude d'effets différentiels.** La majeure partie de la littérature dans ce domaine mesure un groupe en l'absence de groupe de comparaison. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] ont regroupé 29 études (quasi-)expérimentales sur l'IA au service d'élèves en situation de handicap et ont trouvé un effet positif moyen (g de Hedges = 0.588, IC à 95% [0.349, 0.826]) — sans comparateur neurotypique. Cela vous dit qu'une intervention a aidé, non qu'elle a aidé ce groupe différemment.

**Les analyses de sous-groupes sont généralement trop petites pour répondre à la question.** Le [[ai-tutoring-micro-rct-gcse-science-2026|micro-ECR en sciences de niveau GCSE]] est exceptionnellement explicite : son interaction traitement × statut était de 0.57 point (IC à 95% de −2.25 à 3.39), avec des estimations stratifiées de g = 0.28 (IC à 95% de −0.04 à 0.59) pour un groupe et g = 0.35 (IC à 95% de 0.18 à 0.52) pour l'autre. Un intervalle de sous-groupe qui recouvre zéro est une question pour un pilote local, non un fondement pour une règle valant pour toute une classe.

**Les attributs démographiques sont généralement simulés.** Les données démographiques réelles des apprenants sont rarement jointes aux entrées des modèles, aussi les audits fournissent-ils des personas à la place. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto et Hovy (2026)]] ont fait fonctionner six modèles ajustés par instructions sur trois tâches éducatives, dans des conditions de paramètre par défaut, de persona explicite et d'historique implicite — 192,480 appels d'inférence — et ont constaté que tant les personas explicites que les historiques de conversation *implicites* modifient le comportement du modèle. Leur distinction mérite d'être retenue : la conscience des différences entre apprenants peut être souhaitable (ajuster la rétroaction à la langue première d'un apprenant), alors que cette même sensibilité est un tort lorsqu'elle déplace le jugement porté sur des travaux identiques.

**Les correctifs d'équité ne se généralisent pas forcément.** [[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]] ont réduit les écarts d'erreur ciblés selon le genre et l'âge dans l'estimation de l'attention des étudiants sur des données de [[assessment-validity|validation]], mais ces gains ne se sont pas transférés de manière constante à des sujets hors échantillon ni à des découpages répétés au niveau des sujets.

**Les étiquettes de groupe masquent la variation qu'elles recouvrent.** Dans la même méta-analyse sur le handicap, les élèves présentant des troubles spécifiques de l'apprentissage, des déficiences intellectuelles et développementales, ou qui sont sourds ont montré un effet plus fort (g = 0.952) que les élèves présentant un trouble du spectre de l'autisme (g = 0.368) — une différence que les auteurs rapportent comme non statistiquement significative sur 239 tailles d'effet issues de 41 échantillons indépendants. Le « handicap » n'est pas un groupe unique, et l'« apprenant de L2 » non plus.

## Handicap et neurodivergence

C'est le fil le plus profond de la base de connaissances, et celui où le rapport est le plus solide.

- **Les effets sont réels mais inégalement répartis selon le résultat.** Chez [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]], la [[learning-gains|réussite scolaire]] a montré l'effet le plus fort (k = 80, g = 0.929), devant les compétences de la vie quotidienne et autres (g = 0.766) et les compétences socioémotionnelles (k = 144, g = 0.382). Un biais de publication était présent (test d'Egger, β = 2.837, p < .001) ; la méthode trim-and-fill a ramené l'estimation regroupée à g = 0.2694, laquelle demeurait statistiquement significative. Lisez l'effet phare et l'effet ajusté du biais ensemble.
- **Le champ s'est réorganisé autour de l'[[generative-ai|IA générative]].** La [[assistive-tech-neurodivergent-higher-ed-review-2026|revue de cadrage des technologies d'assistance numérique pour les étudiants neurodivergents]] a examiné 766 références pour retenir 40 études empiriques, dont 15 utilisaient l'IA générative et 11 des formats immersifs. Ce fil est petit et récent plutôt que mature.
- **Certains soutiens de l'IA égalisent plutôt qu'ils ne différencient.** [[adhd-video-segmentation-computing-education|Pimenova, Begel et collègues]] ont segmenté des [[video-education|vidéos pédagogiques]] en fragments d'une seule instruction, avec des pauses fixes, dans une étude intra-participants (17 TDAH, 10 non-TDAH) ; tous ont progressé, et les erreurs et hésitations des participants TDAH ont chuté au niveau de leurs pairs non-TDAH. C'est la forme de preuve la plus solide disponible pour la [[universal-design-for-learning|Conception universelle de l'apprentissage]] par transformation automatisée des contenus : un changement général qui comble un écart, plutôt qu'un correctif ciblé par groupe.
- **Ce que les étudiants neurodivergents disent avoir besoin est souvent banal.** [[neurodivergent-computing-students|Une enquête menée auprès de 24 étudiants en informatique neurodivergents et de 20 pairs neurotypiques]], complétée par quatre entretiens, a mis au jour un inconfort significatif face aux devoirs dépourvus de structure claire ou porteurs d'attentes ambiguës — un aménagement qui ne coûte rien à fournir.
- **Les choix de conception peuvent aussi exclure sur le plan épistémique.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] soutient que des données d'entraînement anglophones et centrées sur l'Occident marginalisent des façons de connaître non hégémoniques et placent la situation des apprenants en situation de handicap au centre de cette critique.

## Langue : apprenants de langue seconde, multilingues et apprenants d'anglais

Par le nombre d'articles, c'est le fil le plus large, et il se divise nettement entre effets des outils et torts causés par les outils.

- **Les effets des outils sont prometteurs et bruités.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang et Zou (2026)]] ont réalisé une méta-analyse de 11 études (17 tailles d'effet, N = 595) sur l'[[language-learning|apprentissage des langues]] assisté par robot et ont trouvé un effet global positif (g = 0.83, IC à 95% [0.46, 1.21]) avec une forte hétérogénéité (I² = 84.4%) ; sur six modérateurs testés, seul le type d'interaction robot-apprenant était significatif. Un socle de données probantes de cette taille soutient un [[benchmark|repère]] provisoire, non une décision d'achat.
- **L'infrastructure elle-même est inégale avant tout usage d'outil.** [[structural-silence-underrepresented-language-ai-2026|Roy et Roy (2026)]] documentent le fossé des corpus en prenant le bengali pour cas : moins de 0.5% des contenus web mondiaux contre environ 49.5% pour l'anglais, alors que les locuteurs du bengali représentent près de 4% de la population mondiale.
- **La langue d'enseignement change les résultats chez 294 étudiants de l'enseignement supérieur.** La même revue rapporte que des contenus en langue étrangère donnaient des résultats inférieurs à un enseignement en langue maternelle, et qu'un enseignement de l'[[cs-education|programmation]] bilingue surpassait un enseignement uniquement en anglais.
- **Les détecteurs pénalisent les rédacteurs de langue seconde.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge et Mesbah (2026)]] ont testé Turnitin et Originality sur 192 textes : un détecteur classait correctement 48 textes sur 48 rédigés par des professionnels, mais classait mal quatre des 48 textes d'étudiants d'anglais langue étrangère (91.6%). L'asymétrie est le point essentiel — l'erreur frappe le groupe dont l'écriture est déjà examinée à la loupe.

## Genre

La recherche sur le genre se divise ici entre la question de savoir si les outils traitent les apprenants différemment, et celle de savoir si les apprenants sont exposés à des outils porteurs de stéréotypes.

- **Une conception délibérément neutre du point de vue du genre n'a montré aucune différence selon le genre.** [[ada-female-coded-chatbot-gender-stereotypes-2026|Une étude quasi expérimentale portant sur 195 élèves de neuvième année]] a testé ADA, un [[conversational-ai|chatbot]] à codage féminin ancré dans la figure d'Ada Lovelace : l'intérêt situationnel a augmenté dans les deux genres, sans différence selon le genre en matière de réponse émotionnelle, de charge cognitive ou de réussite scolaire. Un persona de modèle de rôle peut être construit sans déclencher la menace du stéréotype.
- **Mais le contenu des invites transfère le biais dans le travail des étudiants.** [[gender-bias-transfer-llm-writing|Une étude contrôlée menée auprès de 123 participants]] a fait rédiger aux étudiants des essais de projet de carrière pour des profils appariés ne différant que par le genre, dans des conditions sans IA, avec IA neutre et avec IA porteuse de biais de genre ; la condition biaisée a transféré un langage différencié selon le genre dans l'écriture des étudiants et a supprimé asymétriquement l'[[agency]] des femmes. Les chercheurs ont d'abord confirmé l'effet sur 1,600 essais générés.
- **L'espace et le cadrage importent autant que l'outil.** [[all-girls-genai-makerspace-gender-equity-2026|Une étude de cas sur un atelier de fabrication d'IA générative réservé aux filles]] a montré que les filles appréciaient le cadre non mixte comme plus sûr et plus détendu, et met en garde contre la « girlification » — une adaptation superficielle qui laisse les rapports de pouvoir intacts.
- **La sensibilité du modèle est une propriété du modèle, non une constante.** Dans [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]], cinq tuteurs allant de 7B à 70B ont été audités sur neuf niveaux démographiques : Qwen2.5-7B dépassait le seuil de biais |r| ≥ 0.10 dans 7 des 12 cellules domaine-par-dimension, tandis que LLaMA-3.1-8B le dépassait une seule fois. Un entraînement propre à la pédagogie a réduit certains biais et en a augmenté d'autres.
- **Un correctif à axe unique peut laisser un groupe plus mal loti :** les étudiants de genre divers, regroupés dans une catégorie « Unknown Gender », présentaient les taux de vrais positifs les plus faibles sous chaque méthode d'équité, et aucune méthode à axe unique n'a amélioré leur traitement — c'est la variation des étiquettes de groupe notée plus haut, à l'intérieur d'un modèle prédictif d'alerte précoce plutôt que d'un tuteur ([[fairness-theatre-early-warning-systems-2026|McConvey et al. (2026)]]).

## Race, ethnicité et élèves minorisés

Ce fil est faible en nombre d'articles et fort en mécanisme, parce que les données probantes portent sur ce que l'IA fait *avec* un attribut démographique une fois qu'elle en dispose.

- **La [[personalized-learning|personnalisation]] est un vecteur de biais.** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] montre que des outils de rétroaction en écriture fondés sur les [[llm]] se déplacent vers des éloges alignés sur les stéréotypes et retiennent leur critique lorsque la rétroaction est personnalisée à partir de la race, de la langue, du handicap, du niveau de réussite ou de la [[motivation|motivation]] d'un étudiant — sur des essais identiques.
- **L'indice démographique peut être implicite.** L'audit contrefactuel ci-dessus a montré que les historiques de conversation, et pas seulement les personas explicites, déplaçaient les comportements de notation et de rétroaction — le même résultat de [[demographic-signals-llm-student-assessment-2026|192,480 appels d'inférence]], et une raison pour laquelle une règle de divulgation portant sur les données démographiques *déclarées* est insuffisante.
- **Les écarts liés à la migration et à la langue peuvent dominer.** Dans EduFair-Bench, le modèle 70B conjuguait les plus grands écarts de langue et d'immigration avec les plus petits écarts de pédagogie : un tuteur qui paraît pédagogiquement fort peut donc être celui qui est le plus sensible à ce que l'étudiant semble être.
- **Exclusion épistémique, et pas seulement erreur :** voir [[genai-minoritized-knowledges-disability|la marginalisation des savoirs minorisés]] ci-dessus.

## Statut socioéconomique, géographie et âge

- **La littératie numérique, et non l'usage de l'IA, est le médiateur.** [[ai-divide-ses-personality-primary-education-2026|Wang et collègues (2026)]] ont modélisé des données d'enquête et de registre national portant sur 4,497 élèves de sixième année aux Pays-Bas et ont montré que le lien entre traits de personnalité et réussite scolaire passait par la littératie numérique plutôt que par l'intensité d'usage de l'IA, les différences de littératie numérique étant davantage déterminées par la personnalité que par le statut socioéconomique — l'avantage lié au statut socioéconomique opérant indépendamment de l'engagement envers l'IA. Le cadrage classique fondé sur le seul statut socioéconomique est incomplet.
- **La géographie peut être la contrainte déterminante.** Le récit d'[[arc-hubs-k12-ai-robotics-rural-2026|ARC]] sur la robotique et l'éducation à l'IA dans le [[k-12|primaire et secondaire]] rapporte que la participation rurale à la FIRST LEGO League a chuté pendant la saison 2020 en distanciel et ne s'est jamais rétablie, tandis que la participation urbaine s'est progressivement rétablie, et identifie le mentorat technique local et soutenu — et non les kits ni le [[curriculum-design|programme]] — comme la contrainte distribuée géographiquement.
- **Les apprenants adultes constituent un cas de conception distinct,** traité par l'[[adult-learning|Apprentissage des adultes]] et par les travaux de la base de connaissances sur l'andragogie plutôt que par des études portant sur la maternelle à la terminale.
- **L'accès continue de conditionner tout le reste :** voir [[digital-divide|Fracture numérique]] et le constat que l'[[access-not-enough-ai-tutoring-2026|accès au tutorat par l'IA ne suffit pas]] sans intégration [[pedagogy|pédagogique]].

## Là où les données probantes manquent

Le constat honnête de cette revue tient à la minceur de certains groupes. Chacun d'eux constitue un manque réel dans le socle de données probantes, et non un manque de cette page.

- **Les étudiants de première génération :** une étude rapporte une différence d'usage plutôt qu'un effet. Dans [[student-ai-inquiry-types-cs2-2026|une étude d'enquête en CS2]], les étudiants en cours de cycle traitaient l'IA comme un partenaire actif de [[problem-solving|résolution de problèmes]], tandis que les étudiants de première génération adoptaient un rôle confirmatoire, orienté vers la validation, et posaient moins de questions dans l'ensemble.
- **Les étudiants de première génération : la première estimation d'effet, et elle va dans le mauvais sens.** L'[[rct|essai contrôlé randomisé]] de [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] portant sur un [[intelligent-tutoring|tuteur d'IA]] intégré au cours fournit ce qui manque à l'entrée ci-dessus — un effet différentiel mesuré plutôt qu'un schéma d'usage. Sur l'échantillon complet, l'effet de l'accès au tuteur sur les notes finales était de 2.87 points (0.28 écart-type) plus négatif pour les étudiants de première génération, ce qui implique −5.10 points (−0.50 écart-type) pour eux contre −2.23 points (−0.22 écart-type) pour leurs pairs ; l'effet différentiel était plus fort dans l'échantillon apparié exact (−3.89 points, −0.35 écart-type), et les étudiants de première génération ont aussi perdu davantage de points de devoirs et de consultations de pages de la plateforme. L'étude ne rapporte aucun mécanisme et sa précision varie selon le résultat, mais la direction est inverse du récit de réduction de l'écart : les étudiants ayant le moins d'accès préalable au soutien scolaire ont porté le coût mesuré le plus élevé.
- **Les étudiants internationaux :** une étude de [[mixed-methods-research|méthodes mixtes]] (enquête n = 60, entretiens n = 14) sur le [[international-students-conversational-ai-adaptation|soutien à l'adaptation interculturelle]].
- **Les élèves doués et à haut niveau :** pratiquement non étudiés comme groupe dans ce corpus.
- **Les apprenants réfugiés, immigrés et déplacés :** aucune étude.
- **Le genre est encore analysé comme binaire** dans la plupart des travaux ci-dessus, et les catégories de handicap varient selon les études, si bien que la comparaison inter-études du « même » groupe a des limites.

## Utiliser ces données probantes sans surajuster une étiquette de groupe

- **Traitez les moyennes de groupe comme des hypothèses sur une population, jamais comme des prédictions sur une personne.** Chaque affirmation différentielle ci-dessus est un énoncé distributionnel.
- **Demandez-vous si vos apprenants figuraient dans l'échantillon de validation** avant de vous fier à l'inclusivité revendiquée d'un outil ; les fils sur la neurodivergence et sur la langue montrent tous deux que la représentation dans le développement est l'exception.
- **Préférez les dispositifs égalisateurs lorsque les données probantes le permettent.** Le résultat de la segmentation vidéo pour le TDAH — tout le monde progresse, l'écart se comble — est un objectif mieux adapté à une classe générale qu'un module complémentaire ciblé par groupe.
- **Soyez prudent avec une personnalisation qui consomme des attributs démographiques.** Le constat des [[marked-pedagogies-linguistic-bias-writing-feedback|pédagogies marquées]] porte directement sur ce mécanisme, et il s'applique aux points de contact sur le [[well-being|bien-être]], aux tuteurs [[affective-computing|affectifs]] et aux [[recommender-systems-and-learning-paths|systèmes de recommandation]] qui profilent les apprenants.
- **Testez localement, sur le groupe qui vous importe, avec un résultat mesuré sans l'outil.** Voir [[interpreting-and-applying-aied-research|Interpréter et appliquer la recherche en IA en éducation]] pour les habitudes d'appréciation et [[research-methods-aied|Méthodes de recherche en IA en éducation]] pour les dispositifs qui rendent un test local défendable.

## Concepts liés

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## Articles liés

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 études sur l'IA au service d'élèves en situation de handicap : g = 0.588, et g = 0.269 après ajustement du biais
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 766 références ramenées à 40 études, dont 15 portant sur l'IA générative
- [[adhd-video-segmentation-computing-education]] — Un changement général de conception qui a amené les participants TDAH à parité
- [[neurodivergent-computing-students]] — 24 étudiants neurodivergents sur la structure, l'ambiguïté et la collaboration
- [[genai-minoritized-knowledges-disability]] — Marginalisation épistémique dans l'IA, avec le handicap pour cas
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0.83 avec I² = 84.4% dans un petit socle de données probantes sur la L2
- [[structural-silence-underrepresented-language-ai-2026]] — Moins de 0.5% des contenus web pour le bengali contre 49.5% pour l'anglais
- [[hadra-ai-detector-accuracy-efl-2026]] — Les détecteurs classent mal l'écriture en anglais langue étrangère tout en notant parfaitement les textes professionnels
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — Un test à 195 élèves de modèles de rôle à codage féminin, sans différence selon le genre
- [[gender-bias-transfer-llm-writing]] — Des invites porteuses de biais de genre se transférant dans les essais des étudiants
- [[all-girls-genai-makerspace-gender-equity-2026]] — Espace non mixte apprécié, avec une mise en garde contre la girlification
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — L'équité des tuteurs variant selon le modèle, le domaine et la dimension comportementale
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Rétroaction alignée sur les stéréotypes sur des essais identiques
- [[demographic-signals-llm-student-assessment-2026]] — 192,480 appels : les personas explicites comme les historiques implicites déplacent les modèles
- [[student-attention-estimation-fairness-2026]] — Une régularisation d'équité qui ne s'est pas généralisée
- [[ai-divide-ses-personality-primary-education-2026]] — 4,497 étudiants : c'est la littératie numérique, et non l'usage de l'IA, qui médiatise l'écart
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Une participation rurale qui ne s'est jamais rétablie, et le mentorat comme contrainte
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Une interaction de sous-groupe dont l'intervalle de confiance croise zéro
- [[student-ai-inquiry-types-cs2-2026]] — Le seul constat d'usage du corpus portant sur la première génération
- [[international-students-conversational-ai-adaptation]] — La seule étude du corpus portant sur les étudiants internationaux
- [[liu-course-integrated-ai-tutoring-rct-2026]] — La première estimation d'effet du corpus pour les étudiants de première génération : l'accès au tuteur leur a coûté 0.50 écart-type de note finale contre 0.22 pour leurs pairs (Liu et al. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre : évaluer les interventions d'équité a posteriori dans les systèmes d'alerte précoce contrôlés par un fournisseur
