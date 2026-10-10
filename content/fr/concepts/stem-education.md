---
title: "L'enseignement des STIM"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T03:24:45-04:00"
type: concept
foundations: [computational-thinking]
technology: [intelligent-tutoring]
assessment: [automated-assessment]
discipline: [cs education, math education, physics education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/stem-education
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'enseignement des STIM** — l'enseignement des sciences, des technologies, de l'ingénierie et des mathématiques (science, technology, engineering, and mathematics) est le domaine le plus courant de la [[research-methods-aied|recherche]] sur l'[[ai-education|IA en éducation]] dans la base de connaissances. La structuration des savoirs en STIM, la clarté des réponses justes et fausses, et la nature computationnelle du domaine en font un terrain d'essai idéal pour le [[intelligent-tutoring|tutorat par IA]] et l'évaluation.

## Questions à examiner

- Les STIM sont le domaine le plus courant de la recherche sur l'IA en éducation parce que leurs savoirs sont structurés et comportent des réponses clairement justes ou fausses. Pensez-vous que cela fait des STIM l'endroit le plus facile pour enseigner avec l'IA — ou peut-être l'endroit où les limites de l'IA sont le plus aisément masquées ?
- La page cite des recherches montrant que l'adoption de l'IA dans les écoles est « stratifiée par discipline » — normalisée en informatique, fortement prohibée en mathématiques. Pourquoi pensez-vous que la culture disciplinaire façonne si fortement l'acceptation de l'IA, et quelles en sont les conséquences pour les élèves ?
- Si un élève en mathématiques utilise l'IA surtout pour vérifier des solutions et obtenir des explications, est-ce un étai ou une béquille ? Qu'est-ce qui détermine la différence, et où traceriez-vous la limite ?
- Étant donné que les problèmes de STIM ont souvent des réponses vérifiables, quels usages de l'IA en STIM pensez-vous qui construisent réellement la compréhension, par opposition à ceux qui ne produisent qu'un résultat d'apparence correcte ?
- Comment les qualités mêmes qui font des STIM un terrain idéal pour le tutorat par IA — des réponses claires, l'exactitude calculable — pourraient-elles occulter les parties des sciences et de l'ingénierie qui sont désordonnées, ouvertes et fondées sur le jugement ?

## Introduction

### Les STIM comme domaine principal de l'AIED

- **Mathématiques :** la recherche sur l'[[math-education|enseignement des mathématiques]] couvre l'[[generative-ai-reduced-study-time-math|impact de l'IA générative sur l'apprentissage des mathématiques]], le [[ai-powered-personalized-learning-elementary-fractions-2026|tutorat sur les fractions à l'école élémentaire]] et le [[student-math-competence-clustering|regroupement par compétences]].
- **Physique :** l'[[physics-education|enseignement de la physique]] comprend les [[becker-chatgpt-typology-physics-2026|études de typologie de l'usage de ChatGPT]], les [[hashmi-socratic-physics-chatbot-2025|agents conversationnels socratiques en physique]] et l'[[ai-scoring-language-bias-physics|analyse des biais de notation]].
- **Informatique :** l'[[cs-education|enseignement de l'informatique]] est le sous-domaine des STIM le plus étudié — [[code-review-genai-cs1|la revue de code]], les [[debugtracker-classroom-debugging|outils de débogage]] et les études sur [[prompt-problems-nl-programming-mistakes|la formulation d'invites]].
- **Ingénierie :** les [[concept-catalyst-engineering-scaffolds|étais en ingénierie]], les [[structured-ai-demonstrations-engineering-mechanics|démonstrations de mécanique]] et l'[[ai-engineering-education-balancing-act|équilibrage des programmes]] apportent l'IA à l'[[engineering-education|enseignement de l'ingénierie]].
- **Étayer la recherche de premier cycle :** [[ai-information-extraction-undergraduate-thesis-2026|An et ses collègues (2026)]] pilotent un système d'IA qui convertit les publications de recherche en jeux de données structurés et comparables pour la réalisation de mémoires de premier cycle dans quatre écoles de STIM. Les résultats (20 étudiants, 80 documents) ont montré une extraction de plus de 90% des paramètres expérimentaux, une réduction d'environ 65% du temps de revue de littérature, et une augmentation de 50% de la capacité des étudiants à identifier les variables expérimentales influentes — preuve de la manière dont une [[higher-ed|recherche de premier cycle]] étayée par l'[[generative-ai|IA]] peut renforcer la littératie de recherche et la cognition épistémique dans l'enseignement des STIM.
- **Enseignement soutenu par la simulation :** dans l'éducation STIM fondée sur les drones, des étais de [[simulation]] co-conçus par des [[teacher-role|enseignants]] et l'IA ont été évalués contre un [[curriculum-design|programme]] pratique identique, auprès de 30 élèves du secondaire, pour tester si un enseignement soutenu par la simulation produit de meilleurs [[learning-gains|résultats d'apprentissage]]. Le rôle de l'IA générative était d'accélérer la création de contenu, tandis que l'implication des enseignants préservait la validité pédagogique et la pertinence contextuelle.
- **Planification assistée par l'IA dans l'éducation artistique STEAM :** une étude expérimentale portant sur des enseignants d'arts STEAM pour enfants ([[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo et Tahir 2025]]) a montré que les plans de cours assistés par ChatGPT surpassaient ceux générés par les enseignants sur la qualité évaluée par des experts (médiane 20.5 contre 17.6, p = .002, effet important, six professeurs évaluateurs), les enseignants déclarant des gains en efficacité et en intégration interdisciplinaire (61% donnant une note de 4 ou plus). Le résultat passait par la méthode de délégation de l'enseignant — le plus utilement en demandant à ChatGPT de combler les lacunes de contenu d'une leçon esquissée par l'enseignant lui-même — ce qui renforce le point récurrent que l'IA élève le travail STIM/STEAM lorsque l'enseignant structure la tâche et évalue de manière critique les productions, plutôt que de remettre tout le plan au modèle.

### L'efficacité de l'enseignement soutenu par l'IA en STIM, en synthèse

La plus grande synthèse quantitative à ce jour pour ce domaine — 35 études expérimentales et quasi expérimentales publiées entre 2005 et 2025 ([[ai-supported-instruction-stem-meta-analysis-2026|Doğan, Kılıç, Kalınkara et Talan, 2026]]) — situe l'enseignement STIM soutenu par l'IA à un g de Hedges de 0.670 (IC à 95% [0.491, 0.848]), la variance entre études étant traitée par un modèle à effets aléatoires. La ventilation par niveau est la partie informative : les effets étaient les plus importants au lycée (g = 1.099) et progressivement plus faibles à l'université (0.578), à l'école élémentaire (0.465) et au [[k-12|collège]] (0.392), tandis que les différences par domaine disciplinaire que l'auto-image des STIM laissait prévoir — sciences (0.676) et mathématiques (0.650) devant technologie et ingénierie (0.501) — n'étaient pas statistiquement significatives (Q = 4.85, df = 2, p = 0.088). La durée ne s'est pas comportée comme une dose : la bande la plus forte était d'un à deux mois (g = 0.833), les interventions les plus courtes de cinq heures ou moins atteignaient encore 0.621, et la bande la plus faible (g = 0.256) n'était pas significative. Lu en regard du scepticisme documenté sur les [[learning-gains|gains d'apprentissage]], la lecture raisonnable est que l'enseignement STIM soutenu par l'IA produit un effet réel mais modéré, et dépendant du niveau, et non un effet uniforme.

Une revue par domaine disciplinaire de 18 études (2014–2024) précise sur quoi ces effets sont mesurés : les résultats de l'IA dans l'enseignement des sciences et de la chimie se concentraient sur des mesures de processus d'apprentissage (n = 9) plutôt que sur la réussite, et la base de données probantes penche vers les enseignants en formation (44.4%), avec une seule étude en collège et deux au lycée ([[ai-science-chemistry-education-systematic-review-2025|Erümit et Özdemir Sarıalioğlu (2025)]]).

### Pourquoi les STIM dominent

La représentation structurée des savoirs en STIM, la vérifiabilité des réponses et l'alignement sur la pensée computationnelle en font l'ajustement le plus naturel pour le tutorat par IA. La recherche sur la [[computational-thinking|pensée computationnelle]] explore explicitement cet alignement.

### Nouvelles données de la recherche de IJ STEM Education 2025–26

Un lot concentré d'études de 2026 de l'*International Journal of STEM Education* précise la manière dont l'IA opère à travers les sous-domaines et les niveaux des STIM :

- **Une [[governance|gouvernance]] propre à chaque [[discipline-specific-aied|discipline]] façonne l'[[student-ai-interaction|usage de l'IA par les élèves]].** Une étude transversale portant sur 416 élèves tchèques du secondaire ([[lnenicka-secondary-students-genai-stem-2026]]) a montré que l'adoption de l'IA est *stratifiée par discipline* plutôt qu'unifiée : l'informatique et l'économie normalisent l'[[generative-ai|IA générative]] comme ressource collaborative, tandis que les mathématiques (65.9% de prohibition) et les sciences naturelles (55.3%) montrent une forte prohibition perçue cooccurrente d'une faible clarté des règles et d'un usage clandestin persistant. Les élèves utilisent surtout l'IA comme un étai instrumental (explication, vérification de solutions) plutôt que comme un substitut, mais un déficit d'[[critical-thinking|évaluation critique]] émerge : la forte modification des invites éclipse la vérification factuelle externe, déplaçant le comportement vers le [[cognitive-offloading|délégation cognitive]]. Cela plaide pour des recommandations *sensibles à la discipline* plutôt que pour des interdictions générales.
- **L'IA comme co-chercheuse dans les STIM fondés sur l'investigation.** Une quasi-expérience portant sur 97 élèves de CE2 ([[dai-chatbots-problem-posing-primary-2026]]) a montré que des [[conversational-ai|agents conversationnels]] d'IA générative surpassaient significativement les moteurs de recherche pour la [[problem-based-learning|formulation de problèmes]] scientifiques en [[inquiry-based-learning|apprentissage par investigation]], améliorant la qualité des questions, produisant une structure de [[network-analysis|réseau épistémique]] (ENA) plus intégrée, et abaissant la charge cognitive. Une [[meta-analysis-systematic-review|revue systématique]] de ChatGPT pour l'apprentissage par investigation en STEAM ([[jiang-chatgpt-inquiry-steam-review-2026]], 24 études) confirme que ChatGPT soutient la formulation de questions, la conception de l'investigation, la [[problem-solving|résolution de problèmes]] et la réflexion — mais comporte des risques de dépendance excessive, d'[[hallucination-risk|hallucination]] et de conclusions superficielles lorsque les productions sont traitées comme faisant autorité.
- **Le STEAM est un chemin inégal vers la littératie en IA.** Une revue systématique PRISMA de 39 études ([[niri-steam-ai-literacy-review-2026]]) a montré que les mises en œuvre STEAM développent surtout des littératies techniques (concepts fondamentaux de l'IA, pensée computationnelle, littératie des données) tout en sous-développant la sensibilisation [[ethics|éthique]], l'imagination créative, et la création, la gestion et la conception avec l'IA. Les disciplines technologiques sont en tête ; les arts, l'ingénierie et le STEAM intégré sont en retard — ce qui indique que la littératie en IA en STIM est actuellement déséquilibrée vers l'habileté technique au détriment d'un façonnement responsable de l'IA.
- **Les programmes STIM adaptatifs fondés sur l'IA peuvent soutenir l'apprentissage profond.** Un pilote randomisé par grappes en sciences de sixième ([[bin-bakheet-adaptive-ai-stem-deep-learning-2026]], N = 30) a montré qu'un programme STIM adaptatif fondé sur l'IA (contenu personnalisé, maîtrise fondée sur des règles, rétroaction en temps réel) produisait d'importantes tailles d'effet en faveur du groupe expérimental sur l'explication, l'interprétation, l'application et la génération d'idées — bien que le devis à deux classes appelle une interprétation prudente.
- **L'acceptation par les enseignants est hétérogène et façonnée par la discipline.** Une analyse de profils latents portant sur 128 enseignants en formation initiale ([[chen-preservice-teachers-chatgpt-lpa-2026]]) a trouvé quatre profils d'acceptation de ChatGPT (Pragmatic Evaluators, Technology Pioneers, Resistant Skeptics, Environmental Observers), les enseignants de STIM étant concentrés dans les Technology Pioneers et les enseignants hors STIM dans les profils résistants — et les Resistant Skeptics montrant une forte facilité d'usage mais une faible intention, ce qui exige une formation différenciée à la [[ai-literacy|littératie en IA]].
- **Évaluation et processus cognitifs dans les STIM intégrant l'IA.** Le [[zhang-ct-ai-training-test-2026|CTAT]] (34 items, validé par TRI) fournit un instrument valide pour évaluer la [[computational-thinking|pensée computationnelle]] dans des contextes d'entraînement de l'IA, révélant que les élèves éprouvent le plus de difficultés avec la représentation des données, le séquencement des opérateurs logiques et les structures de boucle. Une étude de théorie ancrée sur la programmation assistée par IA ([[liu-tool-tutor-crutch-programming-2026]]) montre que les apprenants oscillent entre la « Domain Mastery » et la « Tool Mastery » à travers des boucles d'[[scaffolding|étayage]] et de délégation (Offloading), avec un calibrage [[metacognition|métacognitif]] atténué lors d'une délégation routinière — un compte rendu au niveau du processus de la tension entre performance et apprentissage.

## Implications pour les enseignants de STIM

- **Choisissez une IA appropriée à la discipline.** Les STIM couvrent les mathématiques (tutorat), la physique ([[socratic-method|dialogue socratique]], [[simulation]]), l'informatique (génération et revue de code) et l'ingénierie (conception, monde du travail) — choisissez des outils adaptés à la [[pedagogy|pédagogie]] signature de chaque sous-domaine, plutôt que de supposer qu'un agent conversationnel général convient à tous.
- **Utilisez l'avantage de l'ajustement structuré de l'IA, mais protégez le raisonnement.** La vérifiabilité des réponses en STIM fait de ce domaine le plus accessible à l'IA ; gardez-vous de la dépendance excessive et du remplacement des réponses en intégrant l'IA à des flux de travail structurés et orientés vers la maîtrise.
- **Intégrez la littératie en IA à travers les cours de STIM.** Des études ([[zha-ai-literacy-biology-case-study|biologie]], [[ai-tpack-preservice-math-teachers|formation des enseignants de mathématiques]]) montrent que le contexte STIM soutient l'apprentissage de l'IA — intégrez les concepts d'IA là où ils surgissent naturellement, plutôt que de les isoler.
- **Surveillez l'[[equity-in-ai-education|équité]] et l'accès dans l'adoption de l'IA.** Les outils d'IA pour les STIM ne sont pas neutres ; surveillez les biais de notation, l'accès lié à la [[digital-divide|fracture numérique]] et une conception [[culturally-relevant-pedagogy|culturellement pertinente]] au fur et à mesure de leur déploiement.

## Concepts liés
- [[learner-identity]] — des identités d'apprenant disciplinaires, professionnelles, créatives et académiques en évolution
- [[business-education]]
- [[cs-education]]
- [[math-education]]
- [[physics-education]]
- [[computational-thinking]]
- [[k-12]]
- [[higher-ed]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[personalized-learning]]
- [[llm]]
- [[discipline-specific-aied]]
- [[teacher-education]]
- [[chemistry-education]] — L'enseignement de la chimie et l'IA : laboratoires, évaluation formative, limites des LLM, philosophie de l'expérimentation
- [[biology-education]] — L'enseignement de la biologie et l'IA : assistants de laboratoire, littératie en IA en biologie, pensée critique, outils spécialisés

## Articles liés
- [[ai-pedagogical-accompaniment-amico]] — Accompagnement pédagogique fondé sur l'IA soutenant l'identité STIM
- [[lnenicka-secondary-students-genai-stem-2026]] — Ce que les élèves du secondaire font réellement avec les outils d'IA générative à travers les STIM
- [[dai-chatbots-problem-posing-primary-2026]] — Agents conversationnels d'IA générative et formulation de problèmes en sciences à l'école primaire
- [[jiang-chatgpt-inquiry-steam-review-2026]] — ChatGPT pour l'apprentissage par investigation en STEAM
- [[niri-steam-ai-literacy-review-2026]] — L'éducation STEAM pour la littératie en IA : revue systématique
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Programme STIM adaptatif fondé sur l'IA pour l'apprentissage profond
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — Profils d'acceptation de ChatGPT chez les enseignants en formation initiale
- [[zhang-ct-ai-training-test-2026]] — Test de pensée computationnelle dans l'entraînement de l'IA (CTAT)
- [[liu-tool-tutor-crutch-programming-2026]] — Outil, tuteur ou béquille : théorie ancrée de la programmation assistée par IA
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Cadre Workforce Readiness Level pour la fabrication intelligente à l'ère de l'IA
- [[becker-chatgpt-typology-physics-2026]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[concept-catalyst-engineering-scaffolds]]
- [[generative-ai-reduced-study-time-math]]
- [[avraamidou-ai-colonization-science-education]]
- [[ai-science-chemistry-education-systematic-review-2025]] — Revue systématique de l'IA dans l'enseignement des sciences et de la chimie
- [[astor-computational-thinking-meta-review-2026]] — La pensée computationnelle comme compétence du 21e siècle à travers les STIM
- [[ai-information-extraction-undergraduate-thesis-2026]] — Extraction d'informations assistée par IA soutenant le mémoire de premier cycle et l'apprentissage fondé sur la recherche (An et al. 2026)
- [[simulation-assisted-drone-learning-stem-2026]] — Apprentissage avec drones assisté par la simulation et étais co-conçus par l'enseignant et l'IA
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Effet regroupé de l'enseignement STIM soutenu par l'IA sur 35 études, avec les plus grands gains au lycée (Doğan et al. 2026)
