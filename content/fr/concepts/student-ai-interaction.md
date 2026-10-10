---
title: "L'interaction élève-IA"
created: "2026-08-20T02:55:00-04:00"
updated: "2026-10-10T03:24:45-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, learning-analytics, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
translation_of: concepts/student-ai-interaction
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

> **L'interaction élève-IA** — les schémas, processus et travail cognitif qui caractérisent la manière dont les apprenants s'engagent avec des systèmes d'[[generative-ai|IA générative]] pendant l'apprentissage et la [[problem-solving|résolution de problèmes]]. La [[research-methods-aied|recherche]] caractérise ici ce que les élèves demandent à l'IA, comment les invites et les dialogues évoluent, et comment la qualité de l'interaction se relie aux [[learning-gains|résultats d'apprentissage]], à la [[cognitive-offloading|délégation cognitive]] et à l'[[agency|agentivité]].

## Questions à examiner

- Pensez aux dernières invites que vous (ou un élève) avez écrites à une IA. Décririez-vous la plupart d'entre elles comme des demandes de la réponse, ou comme des demandes faites à l'IA d'expliquer, de sonder ou d'évaluer ? Que soupçonnez-vous que ce schéma fait à l'apprentissage ?
- La recherche montre qu'un petit sous-ensemble de types de questions rend compte de la plupart des demandes des élèves, et que les questions changent à mesure que la tâche progresse. Pourquoi pensez-vous que le questionnement des élèves se rétrécit, et qu'est-ce que cela suggère quant à la manière dont ils utilisent l'outil ?
- La page affirme que les invites superficielles de recherche de réponse sont associées à une réduction de l'apprentissage et à une dépendance excessive, tandis que l'interaction réflexive et orientée vers la vérification soutient la compréhension. Que pensez-vous qui distingue une « bonne » invite d'une « mauvaise » — et cela relève-t-il de la responsabilité de l'élève ou de la conception de l'outil ?
- Si la qualité de l'interaction est façonnée par le contexte de la tâche et par l'étayage, plutôt que d'être un trait fixe de l'élève, comment un cours ou un outil pourrait-il être repensé pour susciter un éventail plus large et plus productif de demandes ?
- Comment sauriez-vous si le dialogue fluide d'un élève avec l'IA traduit un apprentissage réel ou une simple délégation habile — et que vérifieriez-vous pour le découvrir ?

## Introduction

L'interaction élève-IA est la surface observable de l'[[student-engagement|engagement]] des apprenants envers l'IA générative — les questions qu'ils posent, les invites qu'ils écrivent, la manière dont ils négocient et vérifient les productions de l'IA, et comment ces schémas se déplacent selon les étapes de la tâche et dans le temps. Elle se situe à l'intersection de la [[student-experience|expérience étudiante]], de l'[[prompt-engineering|ingénierie des invites]] et des [[learning-analytics|analyse des apprentissages]], et elle est centrale dans les débats sur la question de savoir si l'usage de l'IA en éducation représente un apprentissage réel ou une [[cognitive-offloading|dépendance excessive]]. Là où la [[human-ai-collaboration|collaboration humain-IA]] cadre la division de haut niveau du travail cognitif entre les personnes et les modèles, l'interaction élève-IA est la mise en œuvre concrète et mesurable de cette relation — les demandes, invites et gestes de négociation spécifiques que les apprenants font instant après instant.

### Ce que les élèves demandent à l'IA

Un courant central de la recherche mesure les **types et la qualité des demandes des élèves**. Des études appliquent des taxonomies de types de questions — par exemple la taxonomie en 18 types de Graesser et al. — pour classer les interactions élève-IA, en utilisant souvent des classificateurs few-shot pour mettre l'analyse à l'échelle de centaines ou de milliers d'interactions. Les résultats indiquent qu'un petit sous-ensemble de types de questions rend compte de la majorité des demandes des élèves, et que les questions que posent les élèves **changent sensiblement à mesure que la tâche progresse** (par exemple [[student-ai-inquiry-types-cs2-2026]]). Cette dépendance à la tâche compte : la qualité de l'interaction n'est pas un trait fixe de l'élève, elle est façonnée par le contexte du problème, l'[[scaffolding|étayage]] et les affordances de l'outil d'IA. Aux âges les plus jeunes, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]] ont constaté que des enfants (âgés de 6 à 14 ans) testaient activement la crédibilité d'un [[conversational-ai|agent conversationnel]] en posant des questions dont ils connaissaient la réponse (par exemple « how big is a t rex ») — une expression d'auto-agentivité épistémique — tandis que l'enfant modal ne posait que 1 à 3 questions et qu'un élève de première année remarquable en posait 21, ce qui souligne combien la variation développementale et individuelle façonne les questions que posent les apprenants.

Les taxonomies elles-mêmes ne s'accordent pas encore : sur 46 catégorisations issues de 33 études, des étiquettes similaires nomment des phénomènes différents, si bien que la revue propose l'*épisode d'interaction* — un échange délimité dans le temps et dirigé par un but — comme unité couvrant l'acquisition de connaissances, la rétroaction évaluative, le guidage stratégique, la demande dialogique, le raffinement d'artefacts et la corégulation ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).

En complément de ces études taxonomiques, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] caractérisent la *forme dialogique* des demandes des élèves. Parmi 38 [[higher-ed|étudiants de premier cycle]] rédigeant des essais argumentatifs sans surveillance, 76.32% utilisaient un schéma en un seul tour consistant à demander, obtenir une réponse et s'arrêter — collant typiquement le titre de l'évaluation sans préciser leurs besoins, et resoumettant des invites identiques en cas d'insatisfaction — et 78.94% ne touchaient à l'[[generative-ai|IA générative]] qu'au début (idées, contexte) ou à la fin (polissage, longueur) d'une tâche, la gardant séparée de la lecture et de l'[[writing-education|écriture]] indépendante ; seuls 23.68% soutenaient un dialogue itératif d'aller-retour avec des questions de suivi et leur propre raisonnement. Les auteurs situent ces schémas sur un spectre allant de la **délégation cognitive** (cognitive outsourcing) à la **réallocation cognitive** (cognitive reallocation) — l'analogue à l'ère de l'IA générative des approches superficielles par opposition aux approches [[metacognition|profondes]] de l'apprentissage — notant que la plupart des élèves concevaient l'outil comme un moteur de recherche amélioré, ce qui les cantonnait à l'extrémité de la délégation.

En recadrant ces schémas comme un travail épistémique, une analyse de 200 sessions de co-programmation a trouvé que 78.8% des interactions élève-IA générative reposaient sur des visées et des stratégies de non-maîtrise telles que la délégation ou la recherche de vérification, et que seules 11.1% combinaient des visées orientées vers la maîtrise avec une justification épistémique ([[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]]).

Le codage de 50 échanges échantillonnés donne une typologie à trois voies du même comportement : [[three-pathways-student-ai-interaction-2026|Zahra (2026)]] a classé 46% comme Passive Review, où le modèle agit comme un oracle et où la production est acceptée avec peu d'examen critique, 18% comme Direct Question, et 36% comme Strategic Dialogue, en associant la distribution à un argument de conception privilégiant la contrainte d'abord (kappa = .48 entre codeurs). Une enquête sur sept devoirs portant sur 211 étudiants en informatique parvient à la même conclusion par l'autre bout : [[student-llm-use-cs-subfields-2026|Nizamani et al. (2026)]] ont mesuré l'adoption des LLM de 89.6% en algorithmique à 15.2% en génie logiciel et ont attribué cet écart à la complexité du devoir, à la vérifiabilité et à l'étayage plutôt qu'au sous-domaine.

### Qualité de l'interaction et apprentissage

Un courant complémentaire relie la *forme* de l'interaction à l'apprentissage. Les invites superficielles ou habituellement étroites (demander à l'IA de produire la réponse plutôt que d'expliquer, de sonder ou d'évaluer) sont associées à une réduction de l'apprentissage et à une dépendance accrue, tandis que l'interaction réflexive et orientée vers la vérification soutient la [[metacognition|métacognition]] et une compréhension durable. Cela relie l'interaction élève-IA directement à la conception de l'[[intelligent-tutoring|tutorat intelligent]] : des systèmes peuvent être construits pour susciter un éventail plus large et plus productif de demandes et pour étayer la formulation de questions plutôt que de se contenter de répondre. L'interaction n'a pas besoin de passer du tout par des invites de recherche de réponse — lorsque l'IA critique le travail propre des élèves, l'échange devient un dialogue réflexif et orienté vers la vérification : dans [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]], les réponses des apprenants à la [[feedback|rétroaction]] d'un [[llm|LLM]] sur leurs essais montraient de la réflexion dans 92.7% des cas, de l'acceptation dans 93.6%, et une réfutation active des affirmations du LLM dans 87.8% des cas (κ interévaluateurs = 0.81–0.89), et leur réponse à la [[ai-feedback-quality|qualité de la rétroaction]] s'améliorait au fil des itérations en tant que compétence apprenable. Le versant réflexif de l'interaction n'a pas besoin de passer par une invite directe — dans [[breideband-community-builder-cobi-2026|CoBi]], les élèves se sont engagés avec des visualisations à l'échelle de la classe de leurs propres paroles [[collaborative-learning|collaboratives]] produites par l'IA, et ont délibéré sur les moments où les classifications de l'IA semblaient erronées, transformant les classifications apparentes erronées en occasions de calibrer leur compréhension des capacités et des limites de l'IA ([[trust-calibration|calibrage de la confiance]]) plutôt que d'accepter purement ses productions. Le lien entre forme d'interaction et apprentissage a toutefois une limite : [[page-cognitive-partnership-cycle-human-ai-2026|Page (2026)]] distingue l'*itération conversationnelle* de l'*itération cognitive*, au motif qu'un apprenant peut raffiner une production sur de nombreux tours tandis que le modèle mental qui la sous-tend reste inchangé, si bien que la preuve de l'apprentissage est un changement dans la position cognitive de l'apprenant plutôt que la longueur ou la fluidité de l'échange — le nombre de tours n'est pas un indicateur indirect de la profondeur de l'engagement.

C'est l'interaction, et non l'outil, qui fixe le cheminement : dans une expérience de terrain portant sur près de 1,000 élèves en mathématiques au lycée, un accès libre à GPT-4 a élevé les scores de pratique de 48% mais a fait chuter les scores à l'examen sans assistance de 17%, tandis que le même modèle restreint à des indices conçus par l'enseignant a élevé la pratique de 127% et a largement effacé le déficit ([[naim-bypass-offload-scaffold-llm-learning-2026|Lee, 2026]]).

C'est la manière dont les étudiants formulaient leurs invites, et non leur quantité, qui suivait le succès : l'AI Query Efficiency et l'AI-Driven Problem-Solving étaient les prédicteurs les plus forts de la performance académique sur 128 étudiants en ingénierie, et le sont restés après contrôle de la moyenne générale ([[isaza-chatgpt-engineering-prompting-2026|Isaza Dominguez et al. (2026)]]).

Le contexte comportemental est un signal distinct de la question elle-même : dans les quatre déploiements de TutorTrace (480 apprenants, environ 180,000 événements dans l'environnement de développement intégré), conditionner l'aide à l'état comportemental récent d'un apprenant a fait chuter les intervalles entre des demandes ne comportant aucun travail indépendant de 50.0% à 20.7%, et les demandes imminentes étaient prévisibles à partir du seul comportement (AUROC = .726) ([[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]]).

La densité n'est pas le mécanisme : alterner les étudiants entre la voix et le texte a presque doublé les tours de dialogue par minute (1.34 contre 0.75) sans changer la maîtrise hebdomadaire, et les auteurs lisent les 26 secondes médianes de délibération du canal tapé avant la première frappe comme l'acte d'encodage lui-même ([[ai-tutor-modality-randomized-field-experiment-2026|Yang, Van Alstyne et Dellarocas (2026)]]).

Une boucle de vérification peut malgré tout rester superficielle : une analyse séquentielle à décalage d'un déploiement d'agent LLM de quatre semaines dans un cours de bases de données de premier cycle a trouvé un cycle significatif Question–Évaluation–Question, mais de fortes boucles d'auto-transition au sein d'états d'ordre inférieur, et seulement 3.92% des interactions atteignant une cognition d'ordre supérieur ([[li-dbagent-llm-educational-agent-cs-2026|Li et al. (2026)]]).

Bernstein et Sibia (2026) documentent un schéma de filtrage itératif dans la manière dont les étudiants de CS2 traitent les explications de l'IA générative ([[student-reception-genai-analogies-computing-2026]]) : ils les recoupent avec leurs notes de cours, exigent la provenance (« I would be a lot more doubtful... without one »), et sondent par des questions de suivi à la recherche d'incohérences plutôt que de rendre un jugement unique d'acceptation ou de rejet. Les étudiants lisent aussi les explications selon les connaissances et le profil qu'ils supposaient aux lecteurs visés — des [[prior-knowledge|connaissances préalables]] supposées au-delà du programme, des références par défaut au sport et aux jeux vidéo (« the more male-dominated side of computing »), et une répétition excessive fonctionnaient toutes comme des signaux au sujet du lecteur imaginé, l'excès d'étayage étant lu comme condescendant plutôt que simplement inefficace.

Consulter l'IA au bon *moment* d'une tâche compte autant que la formulation de l'invite individuelle : dans la même étude, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] ont constaté que la minorité orientée vers la réallocation alternait travail indépendant et consultation de l'IA générative, et déclarait un effort total inchangé mais une focale déplacée — déplaçant les ressources de la recherche vers la vérification de la qualité argumentative et de l'équilibre, et écrivant des notes de réflexion après les séances pour contrer une rétention superficielle — tandis que les apprenants ayant des visées de maîtrise mais une faible [[ai-literacy|littératie en IA]] tombaient dans un « paradoxe de l'efficacité », déléguant « not by intention, but by default ».

### De l'interaction à la pédagogie

Caractériser l'interaction élève-IA éclaire la [[learning-design|conception pédagogique]] : les enseignants peuvent remarquer quand les schémas de questionnement des élèves sont étroits ou superficiels, et concevoir des interventions qui élargissent la demande ; le [[teacher-role|rôle de l'enseignant]] se déplace vers l'accompagnement des élèves pour qu'ils interagissent productivement avec l'IA. Cela fonde aussi les programmes de [[ai-literacy|littératie en IA]] qui traitent la formulation efficace d'invites et la vérification comme des compétences apprenables plutôt que comme des capacités innées.

Des leviers de conception peuvent modifier ce comportement par défaut : dans un cours de physique asynchrone d'environ 70 étudiants, l'artefact évalué était la transcription du dialogue plutôt qu'une réponse, mais de nombreux étudiants posaient malgré tout de longues listes de questions sans répondre aux relances socratiques du modèle — le mode d'échec que les critères avaient été écrits pour attraper ([[context-prompts-physics-assignments-2026|Rodriguez & Wulff (2026)]]).

Les invites rédigées par les enseignants sont un tel levier, mais la rigueur mise en œuvre est en retard sur la cible : sur 1,479 conversations, 38% n'atteignaient pas le niveau de profondeur des connaissances (Depth-of-Knowledge) visé par l'enseignant, ce chiffre approchant 50% au niveau DOK 3, tandis que des lignes d'arrivée explicites réduisaient cet écart de 0.22 niveau et qu'une garde-fou de type « pas de réponses directes » réduisait de 8.5 points de pourcentage les taux de réponses finales données par l'IA ([[teacher-authored-prompts-student-ai-dialogue|Liu et al. (2026)]]).

Le non-usage est lui-même un schéma d'interaction que la [[pedagogy|pédagogie]] doit anticiper. [[zou-is-this-a-trap-student-teachers-genai-2026|Zou et al. (2026)]], étudiant 85 [[teacher-education|étudiants en enseignement]] dans trois cours où l'usage de l'IA générative dans l'[[assessment|évaluation]] était explicitement autorisé, ont constaté que 62.4% (53 sur 85) refusaient de l'utiliser, bien en dessous de l'adoption de 79–83% observée dans des enquêtes comparables au Royaume-Uni et en Australie, et que l'usage des adoptants était superficiel et correctif plutôt que génératif (relecture 43.8%, vérifications de clarté 34.4%, génération de texte seulement 18.8%). Leurs choix suivaient la conception de l'évaluation et la culture institutionnelle plutôt que la difficulté technique : 41.5% des non-adoptants craignaient d'être accusés à tort de [[academic-integrity|plagiat]], et neuf des onze personnes interrogées lisaient la politique permissive elle-même comme un possible « piège ». L'écart entre 32 utilisateurs déclarés à l'enquête et 28 auto-déclarations montre que l'interaction avec l'IA telle que les étudiants la *déclarent* est façonnée par les conséquences sur les notes — une réserve de mesure pour les comptes rendus fondés sur les learning analytics de l'interaction élève-IA.

## La discipline et l'engagement cognitif dans la conversation élève-IA

- **Engagement cognitif associé à la discipline dans la conversation élève-IA.** Chang et Li (2026) analysent les invites des élèves à l'IA dans 116 cours selon un devis intra-personne et interdisciplinaire, montrant que les conversations élève-IA traduisent un engagement cognitif **associé à la discipline** plutôt que des styles d'interaction individuels fixes. Environ 62% des invites encodaient une demande cognitive d'ordre supérieur dans l'ensemble, mais les profils selon les niveaux de Bloom différaient fortement par discipline : les cours de [[stem-education|STIM]] suscitaient des invites à prédominance « Appliquer » (20.8%), les cours de langue à prédominance « Comprendre » (31.7%), et les cours de sciences sociales à prédominance « Créer » (33.8%). Des comparaisons appariées intra-personne ont confirmé que les mêmes étudiants produisaient significativement plus d'invites d'ordre supérieur dans les cours de sciences sociales que dans les cours de STIM (n groupé = 16, p < .001), et la variation au niveau du cours excédait la variation au niveau de l'étudiant — un argument fort pour que les assistants d'enseignement par IA soient conçus et évalués en tenant compte du contexte disciplinaire.

## Concepts liés
- [[learners]] — Les apprenants : le parapluie des concepts du côté de l'apprenant
- [[human-ai-collaboration]]
- [[student-experience]]
- [[prompt-engineering]]
- [[learning-analytics]]
- [[cognitive-offloading]]
- [[intelligent-tutoring]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[llm]]
- [[ai-literacy]]

## Articles liés
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Délégation cognitive contre réallocation cognitive dans les évaluations élève-IA générative sans surveillance (Yan et al. 2026)
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — « Is this a trap? » : le non-adoption de l'IA générative dans les évaluations par les étudiants en enseignement (Zou et al. 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
- [[student-llm-interaction-taxonomy-review-2026]] — Student-LLM Interaction Taxonomy Review
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts in Student-AI Dialogue
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy
- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): LLM Integration in CS2
- [[li-dbagent-llm-educational-agent-cs-2026]] — Agent éducatif fondé sur les LLM (DBagent) dans l'enseignement de l'informatique
- [[isaza-chatgpt-engineering-prompting-2026]] — Comportements de formulation d'invites et d'intégration enregistrés
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — Bypass, Offload, or Scaffold: A Conceptual Model of How Large Language Models Shape Learning
- [[ai-tutor-modality-randomized-field-experiment-2026]] — When AI Tutors Speak: Evidence from a Randomized Field Experiment
- [[context-prompts-physics-assignments-2026]] — Devoirs de physique générés par l'IA à l'aide d'invites contextuelles
- [[three-pathways-student-ai-interaction-2026]] — Typologie Three Pathways de l'interaction élève-IA : 46% Passive Review, 18% Direct Question, 36% Strategic Dialogue
