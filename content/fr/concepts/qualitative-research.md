---
title: Recherche qualitative
created: "2026-08-24T02:00:00-04:00"
updated: "2026-11-06T04:16:35-05:00"
type: concept
research_method: [interviews, case study]
confidence: high
methods: [qualitative-research, research-methods-aied]
translation_of: concepts/qualitative-research
source_updated: "2026-11-05T22:30:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-01"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Recherche qualitative** — la famille des méthodes empiriques qui étudient la manière dont les gens *vivent, interprètent et donnent sens* aux phénomènes, typiquement à travers des mots, des observations et des artefacts plutôt que des nombres. Dans l'[[ai-education|IA en éducation]], les méthodes qualitatives révèlent *comment* les étudiants et les enseignants vivent réellement les [[generative-ai|outils d'IA]] — les significations, tensions, préjudices et mécanismes que les mesures standardisées manquent. Parce que le domaine de l'IA en éducation évolue rapidement et que ses effets sont souvent médiatisés par le contexte, la perception et des construits contestés comme la [[trust|confiance]] et l'[[agency|agence]], le travail qualitatif est essentiel aux côtés des conceptions [[quantitative-research|quantitatives]] (voir [[research-methods-aied]]).

## Questions à examiner

- Une enquête vous dit que 40 % des étudiants se méfient d'un [[intelligent-tutoring|tuteur IA]] ; un groupe de discussion vous dit *pourquoi* ils s'en méfient. Quel chiffre vous semble le plus exploitable, et qu'est-ce que le « pourquoi » ajoute que le pourcentage ne peut pas ?
- Les résultats qualitatifs ne sont généralement pas généralisables statistiquement, et pourtant ils sont souvent « conceptuellement généralisables » — des mécanismes et des dynamiques qui se transfèrent ailleurs. Avant de lire, que signifie pour un résultat d'être généralisable en concept mais pas en statistique ?
- Cette page met en garde contre le fait que l'*accord* de codage entre humains et LLM n'est pas la même chose que la *qualité* de codage lorsque le consensus humain n'est pas une vérité de référence. Avez-vous déjà traité « deux évaluateurs sont d'accord » comme une preuve que quelque chose était correct ? Quand l'accord est-il un signal de vérité, et quand n'est-il qu'une erreur partagée ?
- Si l'IA peut désormais assister le codage qualitatif à grande échelle, cela menace-t-il la profondeur interprétative qui rend la recherche qualitative précieuse, ou cela automatise-t-il simplement sa corvée ? Comment décideriez-vous lequel des deux se produit dans une étude donnée ?
- Le travail qualitatif donne une place centrale aux voix sous-représentées — étudiants issus de minorités ethniques, non-utilisateurs sceptiques — que les grandes enquêtes manquent souvent. Pensez à une affirmation sur l'IA en éducation que vous avez entendue. L'expérience de qui n'est probablement *pas* capturée par le chiffre phare ?
- Choisissez un construit contesté qui vous tient à cœur — la confiance, l'agence ou le préjudice. Avant de lire, esquissez comment vous l'étudieriez avec des mots et des observations plutôt qu'avec des nombres, et notez ce que vous perdriez en procédant ainsi.

## Introduction

La recherche qualitative n'est pas une méthode unique mais une famille organisée par ce qu'elles étudient et par la manière dont les données probantes sont recueillies et analysées. Ce qui les unit est l'accent mis sur la production de sens, le contexte et la profondeur plutôt que sur l'ampleur et le contrôle causal. Les résultats qualitatifs ne sont typiquement **pas** généralisables au sens statistique, mais ils sont souvent *conceptuellement généralisables* — révélant des mécanismes, des catégories et des dynamiques qui se transfèrent à d'autres contextes. Dans le corpus de la base de connaissances, le travail qualitatif est prééminent pour l'étude de l'acceptation de l'IA, de la confiance, du préjudice, de la pratique [[teacher-role|enseignante]] et des processus d'apprentissage.

## Les principales approches qualitatives

### L'analyse thématique
L'analyse thématique identifie, code et interprète des régularités (« thèmes ») dans des données qualitatives — typiquement des transcriptions d'entretiens ou de groupes de discussion, des réponses ouvertes d'enquête ou des documents. C'est l'approche la plus largement utilisée dans les études qualitatives de la base de connaissances. Les entretiens et les réponses ouvertes sont eux-mêmes des [[self-report-measures|données d'auto-déclaration]], si bien qu'ils partagent les limites quant à ce qui peut être affirmé sur les comportements — voir cette page pour savoir où les données d'auto-déclaration sont solides et où elles s'effondrent. [[fouad-bentley-trust-utility-gap-physics-2026|Une étude de l'écart entre confiance et utilité en physique]] utilise l'analyse thématique de données d'entretiens étudiants pour faire émerger un scepticisme et des préférences d'adoption propres au [[discipline-specific-aied|domaine]] ; [[genai-teacher-feedback-comparison|une comparaison du retour de l'IA générative et du retour de l'enseignant]] analyse les perceptions d'utilité et de fiabilité des étudiants ; et [[ai-adult-learning-guidelines-dis2026|des recommandations pour l'apprentissage adulte par l'IA]] font dériver des principes de conception du codage thématique d'apports d'experts et d'apprenants. [[ai-changing-teaching-workflows|Comment l'IA change les flux de travail enseignants]] s'appuie sur l'analyse thématique des récits d'éducateurs.

La fiabilité du codage peut devenir une procédure continue plutôt qu'un contrôle ponctuel. [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] codent 304 énoncés de repérage à l'α de Krippendorff = .803, suivent l'accord sur cinq cas chevauchants (κ regroupé = 0,937) et recodent les énoncés contestés chaque fois que l'accord tombe sous un seuil de recalibration de 0,85 avant de reprendre ; les énoncés codés entrent ensuite dans une [[network-analysis|analyse de réseaux épistémiques]] qui modélise quelles dimensions cooccurrent plutôt qu'une liste plate de thèmes.

[[ober-prompt-engineering-interview-transcripts-2026|Ober et al. (2026)]] illustrent une variante hybride où la modélisation thématique étaye l'analyse thématique et les étiquettes générées par LLM affinent le livre de codes. Sur six groupes de discussion réunissant 13 enseignants, le pipeline humain est passé d'un livre de codes version 1 à six thèmes préliminaires de théorie ancrée, puis à une version 2 affinée, ajoutant une catégorie « enseignement », séparant la priorisation des compétences entières de celle des sous-compétences et rendant explicites les dimensions sociales et contextuelles. Deux implémentations de GPT-4, ChatGPT-4o et Copilot, ont étiqueté les thèmes avec des différences seulement mineures — étiquettes identiques sur 33,3 % (7 sur 21) des grappes H de communication et 43,8 % (7 sur 16) de celles de littératie numérique — et l'examen humain n'a décelé aucune hallucination.

### La théorie ancrée
La théorie ancrée construit une théorie *à partir des données* plutôt qu'elle ne teste un cadre a priori, en utilisant un codage itératif (ouvert → axial → sélectif) jusqu'à saturation théorique. Elle est idéale pour construire une nouvelle théorie sur des phénomènes émergents de l'IA en éducation. [[liu-tool-tutor-crutch-programming-2026|Liu et al.]] développent une théorie ancrée de l'*outil, tuteur ou béquille* — une typologie à trois modes de la manière dont les étudiants [[scaffolding|soutiennent]] ou délestent cognitivement sur l'IA en [[cs-education|formation à la programmation]] — théorisant directement le [[cognitive-offloading]]. [[favero-critical-ai-tutors-empower-enslave-2025|Une étude en théorie ancrée des tuteurs IA critiques]] examine si de tels tuteurs autonomisent ou asservissent les apprenants. [[genai-feedback-design-multisite-experiment|La conception centrée sur l'humain des retours de l'IA générative]] utilise une analyse ancrée sur une étude multisites. Voir aussi [[theory-development-aied]] pour comprendre comment de telles théories ancrées alimentent la construction théorique du domaine.

### La phénoménologie et la phénoménographie
Les approches phénoménologiques étudient l'*expérience vécue* d'un phénomène — ce que cela fait que d'apprendre avec l'IA — tandis que la phénoménographie étudie les *manières qualitativement différentes* dont les gens vivent et comprennent un phénomène (produisant des « catégories de description »). [[absent-cognitive-baseline-2026|The Absent Cognitive Baseline]] s'appuie sur les expériences vécues par les étudiants de l'[[self-assessment|auto-évaluation]] sous IA pour théoriser un manque structurel ; [[metacognitively-discordant-completion-genai-2026|une étude phénoménologique]] saisit l'expérience consistant à achever un travail avec l'IA tout en sachant consciemment qu'on ne le comprend pas ; et [[genai-runaway-object-math-higher-ed|une étude interprétative et socioculturelle]] analyse comment l'IA générative devient un « objet emballé » dans la pratique académique des [[math-education|mathématiques]].

### L'analyse de discours
L'analyse de discours examine comment le langage en usage construit le sens, les identités et le pouvoir — en analysant le discours de classe, le texte écrit ou les séquences interactionnelles. [[nspa-neuro-symbolic-pedagogical-alignment-2026|NSPA]] conduit une *analyse de discours* de classe sur longue durée (ici assistée par ordinateur) pour atténuer le biais dialectal dans la compréhension de l'interaction en classe ; [[scaffolding-critical-engagement-genai-minority-students|une étude portant sur des étudiants préparatoires issus de minorités ethniques]] analyse le *discours* collaboratif dans des tâches de [[prompt-engineering]]. L'analyse de discours fait le pont entre l'interprétation qualitative et les méthodes computationnelles lorsqu'elle est combinée à l'[[educational-nlp]].

[[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal (2026)]] montre comment le codage du discours devient auditable lorsqu'il est rendu sous forme de règles dénombrables : sur 366 résumés et 91 405 tokens, une association ne compte que lorsqu'un acteur précède un prédicat à moins de six mots d'intervalle, et la proximité nominale est exclue si bien que « [[governance|gouvernance de l'IA]] » ne compte jamais comme preuve que l'IA gouverne — une approximation fondée sur des règles, et non une analyse de dépendances, dont les limites la conception énonce.

### Les observations et l'ethnographie
Les études par observation regardent le comportement en contexte ; l'ethnographie étend cela à une étude soutenue et immersive d'un terrain, souvent avec le chercheur comme observateur participant. [[trio-ethnography-llm-programming-education|Une trio-ethnographie]] de l'enseignement de la programmation assisté par LLM retrace l'évolution des interprétations des étudiants ; [[zha-ai-literacy-biology-case-study|une étude de cas en classe]] observe l'intégration de l'[[ai-literacy]] en [[biology-education|biologie]]. Les méthodes d'observation capturent le comportement *réel* (ce que les apprenants font avec l'IA) plutôt que le comportement déclaré — complétant les enquêtes d'auto-déclaration qui dominent la [[educational-measurement|mesure quantitative]] des attitudes.

### Les études de cas
Une étude de cas est une investigation approfondie d'un cas borné (un cours, une institution, un seul apprenant) utilisant de multiples sources de données. [[drummond-genai-business-schools-framework-2026|Une étude de cas en école de commerce]] génère un cadre d'enseignement et d'apprentissage informé par les étudiants pour l'IA générative ; [[zha-ai-literacy-biology-case-study|une étude de cas en biologie]] documente l'intégration de la littératie IA. Les études de cas échangent l'ampleur contre la profondeur et sont fortes pour la génération de théorie et l'insight transférable plutôt que pour la généralisation. [[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]] proposent une étude de cas qualitative portant sur 21 étudiants de premier cycle malvoyants dans trois universités palestiniennes, utilisant l'analyse thématique d'entretiens semi-structurés pour montrer comment l'IA générative fonctionne comme une [[assistive-technology|technologie d'assistance]] pour l'[[inclusive-learning|apprentissage inclusif]] — un exemple de recherche par étude de cas faisant émerger des mécanismes (adaptation personnalisée, augmentation de l'enseignant, parité éducative) que les mesures quantitatives manquent.
- Une variation choisie n'est pas une variation trouvée : trois apprenants d'anglais langue étrangère, retenus parmi 241 étudiants interrogés pour leurs différences de niveau, de genre et d'historique avec l'IA générative, ont suivi des trajectoires émotionnelles nettement divergentes sur trois tâches, et pourtant des cas de variation maximale ne peuvent pas estimer la fréquence d'une trajectoire ([[wu-efl-emotional-dynamics-genai-writing-2026|Wu, Yang et Lin (2026)]]).

[[ai-emotional-alerts-teachers-mathematics-classroom-2026|Swidan (2026)]] triangule la vidéo, les journaux propres du système d'alerte et des entretiens de rappel par stimulus pour un enseignant et huit étudiants, montrant qu'un signal affectif n'acquérait de sens qu'à travers la réponse de l'enseignant ; le codage épisodique en deux étapes par un auteur unique, sans codage indépendant ni détection d'affect validée, marque la limite de ce qu'une analyse de cas à un seul codeur peut garantir.

### Les entretiens et les groupes de discussion
Les **entretiens** semi-structurés et les **groupes de discussion** sont les instruments de collecte de données primaires de toutes les approches ci-dessus. Ils suscitent des récits riches et contextualisés. Le corpus qualitatif de la base de connaissances s'appuie largement sur des entretiens (par ex., [[genai-expertise-pathways-sysadmin|les trajectoires d'expertise]]) et des groupes de discussion (par ex., [[t2i-competence-paradox-2026|le paradoxe de compétence en texte-à-image]], [[ai-adult-learning-guidelines-dis2026]]). La qualité dépend d'une conception soigneuse des questions, d'un échantillonnage visant la variation et d'une analyse rigoureuse.

## Comment la recherche qualitative apparaît dans la base de connaissances

- **Mécanisme et processus.** Le travail qualitatif révèle *pourquoi* l'IA aide ou nuit. [[same-ai-different-pathways]] utilise des volets qualitatifs pour déballer les mécanismes de l'apprentissage [[sociocultural-learning|médiatisé par l'IA]] selon les contextes
- **Confiance, agence et identité.** Les construits contestés et subjectifs sont souvent mieux étudiés qualitativement. [[t2i-competence-paradox-2026]] fait émerger comment des étudiants en art et design négocient l'aisance, le risque et l'identité créative ; [[genai-runaway-object-math-higher-ed]] saisit le rôle de l'IA dans la recomposition de l'identité et de la pratique académiques.
- **Équité et voix sous-représentées.** Le travail qualitatif donne une place centrale aux perspectives souvent exclues des grandes enquêtes — [[scaffolding-critical-engagement-genai-minority-students|les étudiants issus de minorités ethniques]], [[becker-chatgpt-typology-physics-2026|les non-utilisateurs sceptiques]]. Cela rejoint l'[[equity-in-ai-education]].
- **Construction de typologies et de taxonomies.** [[becker-chatgpt-typology-physics-2026|Une typologie qualitative de l'adoption de ChatGPT]] distingue les utilisateurs pragmatiques des non-utilisateurs sceptiques — des catégories qui éclairent la conception ultérieure des instruments d'enquête.
- **Codage comparable d'un document à l'autre.** [[genai-governance-australian-higher-ed-2026|Poudyal (2026)]] applique 15 vignettes fixes aux politiques publiques de 20 universités pour produire 300 classifications comparables, et rapporte qu'un second codeur indépendant n'en a retrouvé que 57,3 % (κ = 0,395) — rendant visible la fragilité du schéma de codage au lieu de laisser l'accord inexprimé.

## L'IA et l'analyse qualitative

Un développement récent distinctif est l'usage des [[llm|LLM]] pour assister le codage qualitatif. Les données probantes de la base de connaissances sont prudentes : [[human-vs-llm-ordered-coding]] montre que le codage par LLM et le codage humain divergent, les erreurs se propageant à travers l'analyse temporelle ; [[agreement-not-quality-llm-coding-verification|Agreement Is Not Quality]] montre que l'*accord* de codage entre humains et LLM n'est pas la même chose que la *qualité* de codage lorsque le consensus humain n'est pas une vérité de référence. Le codage assisté par LLM peut mettre à l'échelle et accélérer l'analyse qualitative, mais ses sorties requièrent une vérification par le [[human-in-the-loop-ai|jugement humain]] — une intersection importante de la recherche qualitative avec l'[[educational-nlp]] et l'[[ai-ed-evaluation]].

[[keith-llm-prompting-human-coding-theory-concepts-essays-2026|Keith et al. (2026)]] rapportent les premiers résultats quantifiés positifs d'un codage par un seul LLM : sur quatre modèles, cinq invites zero-shot et 8 040 lignes, humains et modèles corrélaient à r = 0,75 pour les jugements de classement. L'accord se dégradait à r = 0,56, l'erreur estimée par concept passant de 0,11 à 0,27 lorsque les modèles jugeaient si une définition était correcte, tandis que le biais allait de 0,027 pour le classement à 0,254 pour la définition correcte. L'identité du modèle, et non le raffinement des invites, déterminait la correspondance avec les codeurs humains — dans cette tâche binaire bien définie, l'invite zero-shot atteignait un accord élevé lorsque le modèle était bien choisi.

**Le problème de la sortie fluide et la « warrantability ».** [[chain-behind-claim-warrantability-2026|Holster (2026)]] précise pourquoi l'exactitude et la divulgation sont des normes insuffisantes pour le travail qualitatif assisté par l'IA. Parce que les LLM réorganisent des corpus en quelques minutes en sujets fluides, citations et affirmations de prévalence, ils peuvent dissimuler la voie analytique qui les a produits — et les gens ont tendance à évaluer comme plus vraie une sortie facilement traitable et fluide. Holster propose la **warrantability** comme complément à l'exactitude et à la divulgation : une interprétation assistée par l'IA est justifiable lorsque la voie allant des données sources à l'affirmation demeure *inspectable, contestable et révisable*. Sa machinerie constructive est celle des **lentilles sémantiques** (réorganisations documentées d'un corpus à travers des niveaux d'abstraction) et d'un répertoire relatif aux affirmations d'**artefacts de justification** — des tables de sujets reliées aux sources, des piles de lentilles et des rivières de preuves — conçus dans les outils afin qu'une analyse fluide produise aussi un enregistrement de trajectoire retraçable. Cela étend au-delà de l'ère générative la tradition du domaine en matière de piste d'audit et donne aux évaluateurs quelque chose de concret à contrer au-delà d'une interprétation finale.
- **La fiabilité n'est pas l'exactitude dans le codage LLM [[agentic-ai|multi-agents]].** Un pipeline fondé sur la littérature, dans lequel deux codeurs IA codaient indépendamment, débattaient puis réconciliaient leurs désaccords, a produit un accord inter-codeurs supérieur au kappa de Cohen de 0.85 sur chaque ensemble de données et chaque étiquette, tandis que le F1 par critère allait de 0.31 à 0.89 (moyenne 0.68, écart-type 0.16) — un accord élevé entre des agents qui avaient tous deux tort. Des livres de codes plus longs (t = -11.702) et des extraits plus similaires (t = -9.249) réduisaient l'exactitude initiale, et les tours de discussion corrélaient positivement avec l'exactitude (t = 7.997), tandis que les conflits correctement résolus et les modes de collaboration corrélaient négativement (t = -9.720 et -8.420) : la convergence est donc un faible indicateur substitutif de la justesse. L'implication pratique est que le codage assisté par l'IA exige une adjudication au niveau de la liste de contrôle contre une référence humaine, plutôt qu'un accord entre agents comme signal de qualité. ([[llm-qualitative-coding-consensus-2026]])

Un classifieur BERT affiné est devenu le premier codeur automatisé à atteindre une fiabilité inter-codeurs de niveau humain : [[ye-fine-tuned-bert-coding-comparison-gpt4-2026|Ye et al. (2026)]] rapportent un kappa de Cohen de 0,85 contre des codeurs humains sur l'ensemble doublement codé hors échantillon (N = 134), contre 0,83 entre les deux codeurs humains. BERT atteignait aussi une exactitude de 0,93, une précision de 0,92, un rappel de 0,98 et un F1 de 0,95, et se généralisait à des dissertations d'une autre équipe de recherche avec un kappa de 0,86 (n = 150). Les auteurs y joignent un flux de travail entraîner–valider–appliquer–réentraîner qui garde un échantillon humain doublement codé comme contrôle de fiabilité permanent.

[[zambrano-llm-human-ai-codebook-development-2026|Zambrano et al. (2026)]] montrent que GPT-4o peut générer des livres de codes ancrés dans la théorie à partir de sa seule base de connaissances, couvrant les trois phases cycliques de Zimmerman et trois des quatre étapes de Winne et Hadwin. L'utilisabilité relevait encore du raffinement humain : deux codeurs humains ont fusionné des propositions chevauchantes, comme Planning versus Goal Setting et Monitoring versus Evaluation, et le livre de codes final sur l'apprentissage autorégulé s'est stabilisé à 11 construits, sans exemples inventés. Le flux de travail est une collaboration plutôt qu'une délégation : le modèle propose, les humains fusionnent et renomment.

## Forces et limites

- **Forces :** un insight écologique et conceptuel profond ; fait émerger des phénomènes, risques et mécanismes inattendus ; essentiel pour la construction théorique (voir [[theory-development-aied]]) ; saisit le sens, le contexte et les construits contestés ; donne une place centrale aux perspectives sous-représentées ; fort pour l'étude de phénomènes évoluant rapidement là où les mesures standardisées sont à la traîne.
- **Limites :** généralisabilité statistique limitée ; caractère interprétatif et dépendant du chercheur (problèmes de fiabilité) ; petits échantillons ; soutien plus faible aux affirmations causales ; résultats difficiles à synthétiser d'une étude à l'autre ; exigeant en temps et en travail.

Les méthodes qualitatives et quantitatives sont complémentaires, et non rivales — voir [[research-methods-aied]] pour comprendre comment elles contrastent et se triangulent, et les [[mixed-methods-research|méthodes mixtes]] pour les conceptions qui les combinent.

## Idées fausses courantes

**« Les résultats qualitatifs ne sont pas généralisables parce que les échantillons sont petits. »** Ils ne sont généralement pas généralisables *statistiquement* et sont souvent généralisables *conceptuellement* — les mécanismes et les dynamiques qu'ils identifient se transfèrent à d'autres contextes même lorsque les fréquences ne se transfèrent pas. Un groupe de discussion qui explique pourquoi les étudiants se méfient d'un tuteur a produit un mécanisme qu'une enquête ne peut pas produire, et l'écarter faute d'intervalle de confiance revient à écarter la part qui voyage.

**« L'IA peut désormais faire l'analyse qualitative, donc la méthode passe à l'échelle. »** Elle met à l'échelle le codage, pas l'interprétation. Là où le corpus montre que cela fonctionne bien, c'est parce que la tâche de codage avait d'abord été rendue comparable — une étude a appliqué **15 vignettes fixes** aux politiques publiques de **20 universités** pour produire **300 classifications comparables**, ce qui relève d'une conception par instrument structuré plutôt que d'une interprétation ouverte. L'insight du travail qualitatif réside dans la construction des catégories, et c'est ce qu'un modèle hérite plutôt qu'il ne produit.

**« La saturation est une propriété du nombre de participants. »** C'est une propriété de l'analyse : on s'arrête quand les nouvelles données cessent de produire de nouveaux codes. Deux études de taille identique peuvent être également éloignées de la saturation, ce qui explique pourquoi un rapport qui cite un nombre de participants comme preuve de suffisance n'a rien démontré sur la couverture.

**« Les résultats quantitatifs et qualitatifs sont en concurrence. »** Ils répondent à des questions différentes : une enquête vous dit combien d'étudiants se méfient d'un tuteur, et des entretiens vous disent pourquoi. Les traiter comme des récits rivaux de la même chose produit le faux choix que les sections de revue ne cessent de reproduire.

## Concepts liés
- [[research-methods-aied]]
- [[mixed-methods-research]]
- [[quantitative-research]]
- [[theory-development-aied]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[educational-measurement]]
- [[educational-nlp]]
- [[ai-ed-evaluation]]
- [[equity-in-ai-education]]
- [[trust]]
- [[agency]]
- [[cognitive-offloading]]
- [[self-report-measures]]

## Articles liés
- [[chain-behind-claim-warrantability-2026]] — la norme de warrantability pour l'analyse qualitative assistée par l'IA
- [[liu-tool-tutor-crutch-programming-2026]] — Tool, Tutor, or Crutch : une théorie ancrée de la programmation assistée par l'IA
- [[trio-ethnography-llm-programming-education]] — Une trio-ethnographie de l'évolution de l'interprétation en programmation assistée par LLM
- [[absent-cognitive-baseline-2026]] — Theorizing a structural gap in AI-native students' self-assessment
- [[t2i-competence-paradox-2026]] — Le paradoxe de compétence dans l'usage de l'IA générative texte-image
- [[fouad-bentley-trust-utility-gap-physics-2026]] — Trust–utility gap in physics education
- [[genai-teacher-feedback-comparison]] — Comparer la rétroaction de l'IA générative et celle de l'enseignant : perceptions des étudiants
- [[hazra-safetutors-pedagogical-safety-2026]] — Sécurité des tuteurs d'IA et préjudices pédagogiques
- [[zha-ai-literacy-biology-case-study]] — Étude de cas d'une intégration de la littératie en IA dans un cours de biologie
- [[becker-chatgpt-typology-physics-2026]] — Une typologie qualitative de l'adoption de ChatGPT en physique
- [[scaffolding-critical-engagement-genai-minority-students]] — Collaborative discourse in prompt engineering among ethnic-minority students
- [[human-vs-llm-ordered-coding]] — Comparer le codage ordonné humain et par LLM de données qualitatives
- [[agreement-not-quality-llm-coding-verification]] — L'accord n'est pas la qualité dans le codage qualitatif par LLM
- [[same-ai-different-pathways]] — Démonter les mécanismes de l'apprentissage médié par l'IA selon les contextes
- [[drummond-genai-business-schools-framework-2026]] — Un cadre d'IA générative informé par les étudiants par étude de cas
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Tuteurs critiques en IA : émanciper ou asservir
- [[genai-runaway-object-math-higher-ed]] — L'IA générative comme objet emballé dans les mathématiques de l'enseignement supérieur
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners

- [[wu-efl-emotional-dynamics-genai-writing-2026]] — L'engagement émotionnel des apprenants d'anglais langue étrangère dans l'écriture assistée par IA générative : une étude de cas multiples longitudinale
