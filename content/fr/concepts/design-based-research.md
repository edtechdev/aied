---
title: "La recherche par conception"
created: "2026-08-24T02:30:00-04:00"
updated: "2026-10-10T03:05:32-04:00"
type: concept
research_method: [literature review]
confidence: high
methods: [design-based-research, research-methods-aied]
translation_of: concepts/design-based-research
source_updated: "2026-09-30T07:37:28-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La recherche par conception (DBR)** — une approche méthodologique qui conçoit, met en œuvre et affine de manière itérative une intervention éducative dans des contextes authentiques, en cyclant entre théorie, conception et pratique réelle pour produire à la fois un artéfact utilisable et des principes de conception validés. Dans le champ de [[ai-education|l'IA en éducation]], la DBR est la méthode de choix pour développer des environnements d'apprentissage dotés d'IA, des modèles [[pedagogy|pédagogiques]] et des programmes de formation des enseignants qui doivent fonctionner dans la réalité chaotique des classes — échangeant le contrôle causal des [[rct|expériences]] contre l'authenticité écologique et l'affinage itératif.

## Questions à examiner

- La recherche par conception conçoit, met en œuvre et affine de manière itérative une intervention dans des classes réelles, en cyclant entre théorie et pratique. En quoi cela diffère-t-il fondamentalement d'une expérience contrôlée — et pourquoi un chercheur de terrain pourrait-il la préférer ?
- La DBR échange délibérément le contrôle causal contre l'authenticité écologique. Si vous ne pouvez pas affirmer avec certitude CE qui a causé un gain d'apprentissage, que vaut encore ce savoir ?
- La DBR produit deux choses à la fois : un artéfact utilisable et des principes de conception validés. Lequel de ces deux résultats compte le plus pour vous — un outil qui fonctionne, ou un principe applicable ailleurs ?
- Une force de la DBR est sa forte pertinence pratique ; une limite est que ses résultats sont liés au contexte et difficiles à généraliser. Quand accorderiez-vous assez de confiance à un résultat de DBR pour l'appliquer dans un cadre très différent ?
- Sans une mesure de résultat contrôlée et sans assistance, les gains d'apprentissage observés en DBR peuvent refléter le même problème de « performance gonflée par l'IA » qu'elle étudie. Comment concevriez-vous une étude DBR pour que ses gains rapportés signifient réellement un apprentissage, et non une performance assistée ?

## Introduction

La DBR est une tradition de *conception*, non une tradition de données : elle ne rentre pas proprement dans l'opposition [[quantitative-research|quantitatif]] / [[qualitative-research|qualitatif]] / expérimental. Elle combine délibérément des éléments des trois — en recueillant à la fois des données de résultat et de processus sur des cycles itératifs — pour répondre à *« comment concevoir cet environnement d'apprentissage doté d'IA pour qu'il fonctionne en pratique ? »* plutôt qu'à *« est-ce que X cause Y ? »*. Elle est étroitement liée à l'[[learning-design]] (qui spécifie le processus de conception) et à l'[[usability-research|évaluation de l'utilisabilité]] (qui alimente l'affinage), mais s'en distingue par son caractère soutenu, théoriquement piloté et multi-cycles, et par son double objectif d'améliorer la pratique *et* de produire de la théorie.

## Le cycle DBR

La DBR n'est pas une conception unique mais une boucle itérative, comprenant typiquement :

1. **L'analyse des besoins** — comprendre le problème, le contexte et les apprenants dans des situations authentiques.
2. **La conception** — articuler une intervention et sa justification théorique sous-jacente.
3. **L'implémentation** — déployer l'intervention dans une classe ou un programme réel.
4. **L'affinage** — analyser les données, réviser la conception et itérer (souvent sur plusieurs cycles).
5. **La production de théorie et d'artéfact** — produire à la fois une intervention utilisable et des principes de conception généralisables ou un modèle validé.

L'exemple canonique en AIEd est l'[[ai-assisted-collaborative-learning-model-dbr|étude du modèle d'apprentissage collaboratif assisté par IA (AACL)]], qui a mené un cycle DBR en quatre phases — analyse des besoins, conception du modèle, une implémentation en classe de huit semaines avec des étudiants de premier cycle indonésiens, et affinage du modèle — en itérant sur un cycle d'apprentissage en quatre stades (identification du problème → investigation [[collaborative-learning|collaboratif]] assistée par IA → [[problem-solving]] collaborative → réflexion et présentation).

## Comment la DBR apparaît dans la base de connaissances

- **Développer des modèles d'apprentissage.** L'[[ai-assisted-collaborative-learning-model-dbr|étude du modèle AACL]] utilise la DBR pour développer et évaluer un modèle d'apprentissage collaboratif assisté par l'IA visant la [[critical-thinking|pensée critique]] et la résolution de problèmes dans l'[[higher-ed|enseignement supérieur]].
- **Construire une formation des enseignants à la littératie en IA.** [[genai-literacy-training-teacher-education-dbr-2026|Le et al.]] développent et évaluent une intervention DBR de formation à la littératie en [[generative-ai|IA générative]] pour des étudiants en [[teacher-education]] ; [[human-centered-ai-teacher-educators-2026|Baran et al.]] utilisent la DBR entre 2023 et 2025 pour concevoir un apprentissage professionnel centré sur la littératie critique en [[ai-literacy|IA]], fondé sur les principes de l'IA centrée sur l'humain.
- **Concevoir des standards [[governance|institutionnels]].** [[crompton-faculty-technology-integration-standards-2026|Crompton et al.]] utilisent la DBR sur deux macro-cycles itératifs et 114 participants pour développer six standards d'intégration technologique pour les enseignants.
- **L'implémentation itérative d'un système.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties et al.]] décrivent six études DBR itératives (18 mois, 498 participants) mettant en œuvre l'assistant IA AIDA de l'Open University selon une approche par systèmes embarqués.
- **Le [[scaffolding]] et la conception d'intervention.** L'[[critical-thinking-genai-scaffolding|étayage de la pensée critique par l'IA générative]] et d'autres études de développement d'intervention utilisent la DBR pour concevoir et affiner des étayages fondés sur l'IA.
- **La [[curriculum-design|conception de programme]] guidée par les jeunes et les experts.** [[science-integrated-ai-literacy-curriculum-dbr-2026|Moore et al. (2026)]] utilisent un processus DBR de deux ans avec un conseil consultatif de jeunes et d'experts en IA pour concevoir un programme de littératie en [[ai-literacy|IA]] / apprentissage automatique intégré aux sciences pour le lycée, en affinant la conception d'une cohorte à l'autre et en mesurant les gains de connaissances en apprentissage automatique — un exemple de DBR comme co-conception participative intégrant la voix des jeunes au cycle de conception.
- **Le co-affinage itératif d'une grille comme DBR.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] illustrent le caractère d'affinage itératif de la DBR appliqué à l'instrument d'évaluation lui-même : ils ont traité la grille comme un artéfact de conception révisable et ont traversé un co-affinage avec un [[llm|LLM]] — en clarifiant les descripteurs de performance et en acceptant explicitement des indicateurs implicites d'apprentissage — ce qui a élevé l'accord LLM-humain sur 80 affiches de conception d'étudiants de 54.75 % à 81.25 % (alpha de Cronbach 0.393 → 0.798). L'étude positionne la grille comme une interface médiatrice entre l'intention pédagogique humaine et l'inférence machine, et son [[prompt-engineering|incitation]] sensible aux rôles (enseignant, évaluateur par les pairs, évaluateur de subvention) montre comment les choix de conception façonnent la production évaluative — une démonstration de type DBR que l'instrument d'évaluation, et pas seulement l'intervention, est un objet de conception.
- **Co-concevoir la littératie en IA dès la petite enfance.** [[play-ai-pre-k-kindergarten-ai-literacy-2026|Lee (2026)]] utilise la DBR pour co-concevoir, tester et affiner le programme Play With AI (PL-AI) sur des cycles itératifs avec deux enseignants de maternelle et deux enseignants de jardin d'enfants, en s'appuyant sur des enquêtes d'enseignants, 32 heures de vidéo de classe, des notes de terrain et des transcriptions de réunions de conception. L'étude documente comment la DBR soutient l'affinage itératif d'activités de littératie en IA adaptées au développement et produit des principes de conception transférables (jeu [[embodied-learning|incarné]], codage tangible, dialogue guidé, co-conception avec les enseignants).
- **La revue par des experts comme preuve d'affinage — et une déclaration de portée honnête.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong et al. (2026)]] soumettent leur programme de robotique initial en quatre volets à cinq experts qui l'évaluent sur huit dimensions, puis révisent en réponse : l'implémentation indépendante de PPO est déplacée vers une extension et un prérequis Python est ajouté après que quatre des cinq experts ont signalé la charge cognitive. La dispersion motive les révisions autant que les moyennes — le contexte motivant atteignait en moyenne 4.00 avec un écart-type de 1.73 et une note isolée de 1/5 — et les auteurs énoncent clairement que le cadre révisé reste non évalué en attente de données d'étudiants.
- **La triangulation, et la limite qu'elle ne peut franchir.** [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al. (2026)]] font passer un modèle de rotation des rôles par cinq phases de DBR — analyse du problème, conception pédagogique, implémentation, évaluation, affinage — sur huit semaines avec 62 participants, en triangulant journaux réflexifs, entretiens, notes d'observation et productions d'étudiants avec vérification par les participants. La leçon de conception tient à ce que les auteurs revendiquent pour elle : sans mesure de compétence pré/post et sans groupe de comparaison, ils présentent les preuves comme un engagement pendant l'intervention plutôt que comme des gains de compétence démontrés, ce qui est exactement la frontière qu'une conception DBR multi-sources peut et ne peut pas franchir.

## Forces et limites

- **Forces :** forte validité écologique et pertinence pratique ; produit à la fois des artéfacts utilisables et de la théorie ; réactive à la complexité des classes réelles et à l'évolution des outils d'IA ; bien adaptée au développement d'un modèle et à son affinage sur la base de preuves d'implémentation authentiques ; saisit comment une intervention fonctionne réellement (ou échoue) en pratique.
- **Limites :** faible validité interne (peu ou pas de groupes témoins) ; les résultats sont liés au contexte et difficiles à généraliser ; des échéances longues ; il est difficile d'isoler l'élément de conception qui a causé un résultat — la DBR démontre la faisabilité et l'amélioration, mais ne peut attribuer les gains d'apprentissage à un mécanisme spécifique.

La DBR échange le contrôle causal des [[rct|expériences]] contre l'authenticité écologique et l'affinage itératif : ses preuves sont les plus fortes comme preuve de concept et comme guide de conception plutôt que comme efficacité causale. Lire les gains d'apprentissage observés en DBR exige la même [[limitations-in-aied-research|prudence]] que pour d'autres dispositifs — sans une mesure de résultat contrôlée et sans assistance, les gains peuvent refléter le même facteur de confusion de performance gonflée par l'IA que celui documenté au sujet des [[learning-gains|gains d'apprentissage]].

## Relation aux autres méthodes

La DBR est la méthode emblématique des [[learning-sciences|sciences de l'apprentissage]] — le champ interdisciplinaire qui étudie l'apprentissage et la conception des environnements d'apprentissage, et qui traite la construction d'une intervention et son étude comme une seule activité plutôt que deux. Elle est complémentaire, et non rivale, des autres méthodes de recherche (voir [[research-methods-aied]] pour l'ensemble du paysage). Là où les [[rct|expériences]] établissent la causalité et où les enquêtes [[quantitative-research|quantitatives]] établissent l'ampleur, la DBR établit la *faisabilité et le savoir de conception* — si une intervention peut être construite pour fonctionner dans une pratique authentique, et quels principes de conception la soutiennent. Elle s'associe fréquemment à l'[[usability-research|évaluation de l'utilisabilité]] (pour affiner l'interface) et aux [[qualitative-research|méthodes qualitatives]] (pour comprendre comment les apprenants vivent l'intervention). Un programme DBR abouti culmine typiquement dans un [[rct|essai d'efficacité]] ou une étude d'[[educational-measurement|mesure]] qui teste les effets causaux de l'intervention développée à grande échelle.

## Concepts liés

- [[research-methods-aied]]
- [[rct]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[usability-research]]
- [[learning-design]]
- [[educational-measurement]]
- [[learning-gains]]
- [[limitations-in-aied-research]]
- [[theory-development-aied]]
- [[learning-sciences]]

## Articles liés

- [[ai-assisted-collaborative-learning-model-dbr]] — DBR pour un modèle d'apprentissage collaboratif assisté par IA
- [[genai-literacy-training-teacher-education-dbr-2026]] — DBR pour la formation à la littératie en IA dans la formation des enseignants
- [[crompton-faculty-technology-integration-standards-2026]] — DBR pour les standards d'intégration technologique des enseignants
- [[human-centered-ai-teacher-educators-2026]] — Human-centered AI for teacher educators (DBR)
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — Six DBR studies implementing AIDA at the Open University
- [[critical-thinking-genai-scaffolding]] — DBR for GenAI critical-thinking scaffolding
- [[science-integrated-ai-literacy-curriculum-dbr-2026]] — DBR for a science-integrated AI literacy curriculum (Moore et al. 2026)
- [[play-ai-pre-k-kindergarten-ai-literacy-2026]] — Play With AI (PL-AI): play-centered AI literacy curriculum for pre-K and kindergarten (Lee 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
