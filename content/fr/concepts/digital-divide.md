---
title: "La fracture numérique"
created: "2026-08-13T18:07:54-04:00"
updated: "2026-10-10T03:05:32-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13]
type: concept
foundations: [ai-education, ai-literacy]
ethics: [accessibility, equity-in-ai-education]
confidence: high
translation_of: concepts/digital-divide
source_updated: "2026-10-04T16:06:05-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La fracture numérique** — la répartition inégale de l'accès aux technologies numériques (et de plus en plus à celles fondées sur l'[[ai-technologies|IA]]), des compétences pour les utiliser et des bénéfices qu'elles procurent, entre individus, communautés et nations. En éducation à l'IA, la fracture numérique est une préoccupation centrale d'équité : l'[[generative-ai|IA générative]] remodèle rapidement l'apprentissage, et l'écart entre ceux qui peuvent l'utiliser efficacement et de manière critique et ceux qui ne le peuvent pas menace d'aggraver les inégalités éducatives existantes.

## Questions à examiner

- La fracture numérique est souvent décrite en trois niveaux : l'accès, les compétences, et ceux qui en bénéficient réellement. À quel niveau pensez-vous que la plupart des gens se situent lorsqu'ils disent « combler la fracture numérique » — et en quoi cela pourrait-il être incomplet ?
- Donner à chaque étudiant un appareil et un accès à Internet ne signifie pas automatiquement qu'ils peuvent utiliser l'IA efficacement ou de manière critique. Qu'est-ce qui distingue le fait d'avoir accès du fait de pouvoir en bénéficier ?
- L'IA ajoute de nouvelles couches à l'inégalité : le biais algorithmique peut nuire de manière disproportionnée aux [[learners]] marginalisés, et la littératie en IA elle-même détermine si la technologie élargit ou réduit les écarts. En quoi cela diffère-t-il des fractures des technologies antérieures ?
- La fracture s'étend aussi à QUELLES communautés, langues et perspectives sont représentées dans les systèmes d'IA et servies par eux. En quoi la représentation est-elle elle-même une forme d'accès — ou d'exclusion ?
- Si combler la fracture est « une question de justice et de participation », qui en porte la responsabilité : les plateformes, les écoles, les gouvernements, ou tous ensemble — et à quoi ressemblerait une répartition équitable des bénéfices de l'IA ?

## Introduction

La fracture numérique est communément comprise comme opérant à **trois niveaux** (van Deursen & van Dijk, 2014) : la fracture de *premier niveau* concerne l'accès aux technologies et aux infrastructures (connectivité, appareils, environnements favorables) ; la fracture de *deuxième niveau* concerne les compétences et aptitudes (la capacité inégale à utiliser les outils de manière efficace et significative) ; et la fracture de *troisième niveau* concerne les résultats et les bénéfices (qui bénéficie réellement de l'usage de la technologie, l'IA pouvant exacerber les disparités sociales, culturelles et économiques). Considérer la littératie en IA à travers le prisme de [[framing-ai-use-for-students|Cadrer l'IA]] rend clair que l'équité exige davantage que de combler l'écart des appareils et des infrastructures — elle exige de bâtir les compétences permettant d'utiliser l'IA efficacement et de manière critique, afin que ses bénéfices soient répartis équitablement plutôt qu'ils ne renforcent les inégalités existantes.

### Comment la fracture numérique apparaît dans la recherche

- **La littératie en IA comme mécanisme d'équité :** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|le cadre SAIL]] a été explicitement conçu pour traiter les fractures de deuxième et de troisième niveau, en fournissant un parcours étayé et indépendant de l'âge pour une littératie en IA équitable à tous les stades de l'éducation, fondé sur l'argument que la littératie en IA est inséparable de l'équité et de la participation.

- **Politique et infrastructures :** l'[[oecd-digital-education-outlook-2026|OECD Digital Education Outlook 2026]] situe la fracture numérique dans la [[educational-policy-ai|politique éducative]] nationale, en examinant comment l'accès aux technologies numériques et à l'IA varie et ce que les systèmes peuvent faire pour combler les écarts.
- **L'usage responsable et la littératie en [[prompt-engineering|incitation]] :** la [[aaai2026-prompting-literacy-k12|recherche sur la littératie en prompting en K-12]] traite la fracture de deuxième niveau en [[teacher-role|enseignant]] aux étudiants les compétences pour utiliser les [[conversational-ai|agents conversationnels]] d'IA de manière responsable, en reconnaissant que l'accès seul ne confère pas la capacité de bien [[ai-literacy|utiliser l'IA]].
- **L'habileté à formuler constitue à elle seule une fracture de deuxième niveau.** Sur MedQA, l'exactitude augmentait avec la sophistication du prompt (82.4 % pour une formulation de faible littératie contre 83.4 % pour une formulation d'expert), et un Prompt Equity Transformer réécrivant les requêtes en une formulation équivalente et plus claire comblait l'écart — déplaçant le fardeau d'un prompting efficace de l'apprenant vers le système ([[prompt-privilege-equitable-ai-access-2026|Jin et al. (2026)]]).

- **Représentation et silence structurel :** la [[structural-silence-underrepresented-language-ai-2026|recherche sur les langues sous-représentées]] met en lumière comment la fracture numérique s'étend à *quelles* communautés, langues et perspectives sont représentées dans les systèmes d'IA et servies par eux — une dimension culturelle et épistémique de l'inégalité.

- **L'alternance codique est une exclusion à elle seule.** La plupart des outils de cours par LLM supposent un flux audio anglais monolingue et une connexion Internet fiable, ce qui exclut les classes mêlant l'anglais et une langue familiale ; les données indiennes UDISE+ situent l'accès à Internet dans les écoles près de 54 % avec un écart urbain-rural de 24 points, et un compagnon bilingue répond par une transcription sur appareil et un stockage local d'abord ([[bilingual-llm-lecture-companion-srl-2026|Malhotra, 2026]]).

### L'IA creuse (et peut combler) les fractures

L'IA ajoute de nouvelles couches aux implications d'équité de la technologie. Le biais algorithmique peut affecter de manière disproportionnée les apprenants issus de communautés marginalisées, et la [[ai-literacy|littératie en IA]] — la capacité à comprendre, évaluer de manière critique et atténuer les biais et les risques de l'IA — est elle-même un facteur clé pour déterminer si l'IA élargit ou réduit les écarts. La [[research-methods-aied|recherche]] montre que les éducateurs dotés d'une plus grande littératie en IA sont plus efficaces pour identifier et atténuer les résultats biaisés. La fracture numérique à l'ère de l'IA n'est donc pas simplement un problème technique d'approvisionnement, mais une question de justice et de participation : qui peut accéder à l'IA, qui peut l'utiliser de manière critique, et qui en bénéficie.

Un courant ancien de la littérature retrace la manière dont le concept lui-même est passé de l'accès à l'**équité numérique**, désormais définie selon quatre dimensions — littératie numérique, abordabilité, contenus sensibles aux groupes et disponibilité des infrastructures — et lit l'IA grand public comme une nouvelle vague de la fracture favorisant les utilisateurs déjà capables d'auditer la production des machines ([[mechanical-compliance-human-flourishing-ai-literacy-2026|Rose (2026)]]).

**La personnalité, pas seulement le statut socioéconomique, façonne la fracture de l'ère de l'IA.** [[ai-divide-ses-personality-primary-education-2026|Wang et al. (2026)]] ont analysé les données d'enquête et de registre national portant sur **4 497 élèves de sixième** aux Pays-Bas, en séparant deux voies de médiation — l'usage de l'IA et la littératie numérique — reliant l'origine et la personnalité de l'étudiant à la [[learning-gains|performance académique]]. Leur constat clé recadre la fracture classique : c'est la **littératie numérique, et non l'intensité d'usage de l'IA, qui médiatise** le lien entre personnalité et performance, et une nouvelle fracture des compétences numériques émerge, davantage mue par les **traits de personnalité que par le statut socioéconomique**. Les avantages du statut socioéconomique sur la performance opéraient indépendamment de l'[[student-engagement|engagement]] envers l'IA. Cela complique le cadrage de la fracture numérique par l'accès et le statut socioéconomique, en pointant la formation des compétences et le soutien dispositionnel comme des leviers pertinents pour l'équité, aux côtés de l'accès aux appareils et aux outils.

**La fracture possède une couche métacognitive.** Parce que tirer parti de l'IA de manière productive exige des connaissances antérieures et de l'autorégulation, les étudiants qui les possèdent déjà en bénéficient le plus, tandis que ceux qui ont le plus besoin de pratique délèguent l'apprentissage lui-même — un « écart d'équité métacognitive » qui peut creuser les écarts de réussite même à accès égal ([[lodge-loble-cognitive-offloading-2026|Lodge & Loble (2026)]]).

L'enseignement scolaire structuré de l'IA est un catalyseur psychologique mais pas un égalisateur cognitif : sur 752 élèves du secondaire inférieur à Hong Kong, un programme d'un an a réduit les écarts de confiance et de motivation tout en laissant intacts les écarts objectifs de littératie en IA entre apprenants à forte et faible agentivité ([[school-ai-education-readiness-gaps-agency-2026|Liang et al. (2026)]]).
**La fracture opère aussi au niveau institutionnel.** [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] montrent que dans le système d'enseignement supérieur du Nigeria, la capacité d'intégration de l'IA se concentre dans les institutions plus anciennes et de la région du Sud-Ouest, et se compose par des liens de réseau mutuellement renforçants (collaborations internationales × partenariats industriels, r = 0.74) — ce qui signifie que les « laissés-pour-compte » institutionnels (typiquement les universités d'État plus récentes) font face à des barrières structurelles pour entrer dans les réseaux mêmes qui les aideraient à rattraper leur retard. L'inégalité numérique est ainsi reproduite non seulement entre apprenants individuels, mais aussi entre les structures [[governance|institutionnelles]] qui déterminent qui peut participer à une économie de la connaissance transformée par l'IA.

**La fracture a aussi une géographie, et le mentorat en est le mécanisme.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]] documentent une asymétrie de reprise dans la participation à la FIRST LEGO League en Indiana : les participations urbaine et rurale ont toutes deux chuté lors de la saison 2020 à distance, mais seule la participation urbaine s'est rétablie, la participation rurale restant proche de son niveau d'après-2020 jusqu'en 2025–2026. Le mécanisme qu'ils nomment est l'accès au mentorat technique — des personnes disposant d'assez de connaissances en programmation et en [[educational-robotics|robotique]] pour lancer et soutenir une équipe — que les écoles rurales peuvent ne pas avoir, même lorsque élèves et enseignants sont intéressés, ce qui en fait une condition préalable du parcours robotique et d'IA plutôt qu'une de ses caractéristiques. Leur réponse est d'ingénier la propagation de ce mentorat : des centres universitaires primaires forment des étudiants de premier cycle et accueillent des ateliers, des programmes scolaires matures deviennent des centres secondaires qui mentoratent les écoles voisines, et une simulation de Markov spatiale sur les 1 925 écoles publiques de l'Indiana projette 992 programmes après 40 ans sous des hypothèses modérées, contre 161 sans ARC, dont 341 programmes ruraux contre 60. Lue aux côtés du résultat sur les réseaux institutionnels ci-dessus, la configuration est que les fractures persistent à travers *la structure de qui peut fournir l'expertise, et où* — et que la fournir délibérément, plutôt que de présumer la proximité d'une université, est le levier politique.

**Accès et hiérarchie épistémique sont des problèmes différents.** [[beyond-the-algorithm-academic-developers-digital-mediators-2026|Sithole (2026)]] distingue nettement les deux, à partir d'entretiens avec des [[educational-development|développeurs académiques]] de deux Institutions historiquement défavorisées d'Afrique du Sud : l'inégalité numérique est distributive — appareils, connectivité, budgets, littératie numérique — et répondable en principe par une redistribution, tandis que la **colonialité algorithmique** est épistémique et persiste même en conditions d'accès complet, parce qu'elle réside dans ce que les systèmes encodent et dans le savoir qu'ils centrent. Les participants à l'étude vivent les deux à la fois, décrivant le fait de se voir « demandé de bâtir un avenir numérique sur des fondations analogiques » : les fondations nomment le registre matériel de la fracture, et l'avenir importé arrive pré-chargé des hypothèses épistémiques des contextes qui l'ont conçu. L'implication pratique pour le travail sur l'équité est que combler un écart d'accès ne déstabilise pas par lui-même la hiérarchie — les deux phénomènes opèrent à des registres différents et exigent des réponses différentes.

**Une conception peut contourner l'écart d'appareils au lieu d'attendre qu'il se comble.** [[rodrigues-aied-unplugged-numeracy-2026|Rodrigues et al. (2026)]] testent si des étudiants qui ne touchent jamais un ordinateur peuvent malgré tout recevoir un soutien de type tutorat intelligent, en recourant à un paradigme qu'ils appellent l'« AIED unplugged », dans lequel l'enseignant est le proxy entre l'apprenant et le système : les étudiants continuent à travailler avec papier et crayon, l'enseignant photographie leurs solutions sur un smartphone, et le système renvoie des listes d'exercices personnalisées, une notation automatisée et une rétroaction spécifique aux erreurs. Leur quasi-expérience en grappes sur 19 classes d'écoles publiques brésiliennes est, selon eux, la première évaluation quasi-expérimentale d'un tel système dans des classes authentiques plutôt que sur un prototype, et l'application tournait sur les téléphones personnels des enseignants, sous la connectivité intermittente typique de ces écoles. La conception est donc une stratégie d'équité distincte de celles décrites ci-dessus : plutôt que de combler la fracture de premier niveau des appareils et de la bande passante avant que le tutorat par IA ne puisse atteindre quiconque, ou d'élever les compétences de deuxième niveau comme ticket d'entrée, elle atteint les étudiants avec lesquels l'IA n'interagit jamais directement. La même étude montre toutefois que cette voie n'est pas exempte de la fracture qu'elle contourne. L'avantage d'apprentissage sur la pratique habituelle se rattachait à la formation des enseignants plutôt qu'à la technologie — les conditions de formation et de système complet ne différaient pas sur les gains — et l'effet indirect positif du système sur l'apprentissage opérait par la *réduction de l'effort des enseignants*, une charge de travail plus lourde étant associée à des gains plus faibles. Contourner l'écart d'accès ne dissout donc pas le problème d'équité ; il déplace la contrainte limitante vers la capacité et le temps des enseignants.
- **La contrainte matérielle pourrait être en train de se dissoudre, sans que l'écart d'accès se comble.** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]] soutiennent que la contrainte limitante pour un apprentissage des langues [[equity-in-ai-education|équitable]] est désormais logicielle plutôt que matérielle : la pile complète synthèse–reconnaissance–traduction tient sous 4 Go, des mesures communautaires situent un modèle 3B à 4–9 tokens par seconde sur un ordinateur monocarte à 80 dollars, et cinq ans de pratique quotidienne coûtent environ 18 dollars d'électricité contre 1 200 dollars pour un abonnement en nuage et 2 600 dollars pour un tutorat hebdomadaire.

- **La compression de modèles est une autre voie vers du matériel contraint.** Un tuteur adaptatif en pidgin nigérian, affiné sur un corpus de 416 343 entrées, conservait la structure sémantique et la cohérence en 8 bits, tandis que les versions en 4 et 5 bits réduisaient la latence d'inférence avec une dégradation seulement minimale de la qualité pédagogique, et des locuteurs natifs en vérifiaient l'acceptabilité culturelle plutôt que les seules métriques ([[multilingual-adaptive-learning-nigeria-2026|Nwogo et al., 2026]]).

- **Un laboratoire simulé peut reproduire la facture d'équipement qu'il visait à éviter.** Une [[meta-analysis-systematic-review|revue systématique]] de 11 études de jumeaux numériques dans l'enseignement supérieur en STIM a trouvé des coûts matériels de 2000 à 15 000 dollars par nœud de poste de travail fonctionnel dans quatre études, avec des entités physiques plafonnant l'accès à 1-3 étudiants simultanés dans cinq, et aucune étude incluse n'a produit d'analyse de retour sur investissement ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-Gonzalez et al. (2026)]]). La revue compare ce coût d'entrée à celui de bancs d'essai physique de caractérisation allant de 30 000 dollars à plus de 150 000 dollars.

### Connexions aux concepts associés

La fracture numérique est une préoccupation centrale de la recherche sur l'[[equity-in-ai-education|équité en IA]], étroitement liée à l'[[ai-literacy]] (positionnée comme un mécanisme central pour traiter les barrières structurelles), à l'[[ethics|éthique]] et à l'[[bias-mitigation|atténuation des biais]] (puisque le biais algorithmique affecte de manière disproportionnée les groupes marginalisés). Elle se rattache à l'[[ai-education|IA en éducation]] et à l'[[higher-ed|enseignement supérieur]] comme cadres où se manifestent les écarts d'accès et de capacité, et se rapporte à l'[[student-experience|expérience étudiante]] en ce qu'elle détermine qui peut participer de manière significative à un apprentissage façonné par l'IA.

## Concepts liés

- [[differential-effects-across-learner-groups]]
- [[remote-proctoring]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[ethics]]
- [[bias-mitigation]]
- [[ai-education]]
- [[higher-ed]]
- [[student-experience]]
- [[parents-and-families]]
## Articles liés
- [[adeniranye-ai-integration-nigerian-higher-education-2026]] — Structures institutionnelles, inégalité numérique et intégration de l'IA dans l'enseignement supérieur nigérian
- [[ai-divide-ses-personality-primary-education-2026]] — SES, personality, and AI divides in primary education (Wang et al. 2026)
- [[rodrigues-aied-unplugged-numeracy-2026]] — AIED unplugged: teacher-as-proxy tutoring reaches students with no device (Rodrigues et al. 2026)
- [[school-ai-education-readiness-gaps-agency-2026]] — School AI education narrows psychological but not cognitive readiness gaps
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — The Scaffolded AI literacy (SAIL) framework
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[aaai2026-prompting-literacy-k12]] — Teaching Responsible Use of AI Chatbots to K-12 Students
- [[structural-silence-underrepresented-language-ai-2026]] — Structural Silence and Underrepresented Languages
- [[sec-ai-literacy-narrative-review-2026]] — Social-Emotional Competence in AI Literacy
- [[bilingual-llm-lecture-companion-srl-2026]]
- [[multilingual-adaptive-learning-nigeria-2026]] — AI-Based Adaptive Learning Platform for Multilingual Low-Resource Contexts
- [[ai-science-chemistry-education-systematic-review-2025]] — Systematic review of AI in science/chemistry education
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO AI guidelines translated to chemical education; epistemic drift
- [[lodge-loble-cognitive-offloading-2026]] — AI, cognitive offloading and implications for education (Lodge & Loble 2026)
- [[mechanical-compliance-human-flourishing-ai-literacy-2026]] — Socialist humanist AI literacy + fair use
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: rural robotics access follows mentorship geography, not device access (Jacobson et al. 2026)
- [[beyond-the-algorithm-academic-developers-digital-mediators-2026]] — Digital inequality as distributive problem vs. algorithmic coloniality as epistemic one, in South African HDIs

- [[llmersion-local-first-language-learning-2026]] — LLMersion: A Local-First AI Agent Framework for Low-Cost Home Language Learning toward Educational Equity
- [[caee-digital-twins-stem-education-systematic-review-2026]] — Digital twin labs carry an equipment bill that bounds concurrent access
