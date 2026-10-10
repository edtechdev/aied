---
title: "Psychologie cognitive"
created: "2026-08-27T10:52:12-04:00"
updated: "2026-10-10T03:05:33-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
translation_of: concepts/cognitive-psychology
source_updated: "2026-09-26T01:51:49-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La psychologie cognitive / le cognitivisme** — la famille de théories qui expliquent l'apprentissage par des processus mentaux internes — attention, perception, mémoire, raisonnement et métacognition — plutôt que par le seul comportement observable. Dans le champ de l'[[ai-education|IA en éducation]], les postulats cognitivistes sous-tendent les contributions les plus distinctives du domaine : les systèmes d'[[intelligent-tutoring|tutorat intelligent]] qui modélisent les connaissances de l'apprenant, le [[knowledge-tracing|traçage des connaissances]] et le [[cognitive-diagnosis|diagnostic cognitif]] qui suivent ce qu'un apprenant sait, les conceptions de [[feedback|rétroaction]] fondées sur le diagnostic des erreurs, et toute la famille de la [[student-modeling|modélisation de l'apprenant et de l'enseignement adaptatif]]. Le cognitivisme est le terrain médian entre le [[behaviorism|behaviorisme]] (l'apprentissage comme changement comportemental) et le [[constructivist|constructivisme]] (l'apprentissage comme construction active de sens), et c'est la lentille théorique la plus étroitement liée à la métaphore informatique de l'esprit qui a animé les débuts de l'AIED.

## Questions à examiner

- Lorsque vous pensez à l'« apprentissage », imaginez-vous un changement dans ce que quelqu'un fait, ou un changement dans ce qu'il sait et peut retrouver ? En quoi cette distinction pourrait-elle changer la manière dont vous jugez si un outil de tutorat par IA fonctionne réellement ?
- Le tutorat par IA est construit sur une « métaphore informatique » — traiter l'esprit comme un système de traitement de l'information doté de limites de mémoire. Où cette métaphore vous semble-t-elle puissante, et où pourrait-elle manquer quelque chose d'important sur la façon dont les humains apprennent ?
- Un outil d'IA rend une tâche apparemment sans effort : il explique l'étape suivante, réduit la friction, et l'apprenant réussit brillamment pendant qu'il l'utilise. Cela compte-t-il comme un [[teacher-role|enseignement]] réussi ? Comment sauriez-vous si l'apprenant sait désormais le faire sans l'outil ?
- La théorie de la charge cognitive distingue la charge intrinsèque, la charge extrinsèque et la charge pertinente (germane). Si vous conceviez un assistant d'IA, quel type de charge essaieriez-vous délibérément de réduire, et lequel vous garderiez-vous soigneusement de supprimer ?
- Si un apprenant sait qu'il peut déléguer mémoire et raisonnement à une IA, quand est-ce une stratégie intelligente et quand est-ce un raccourci qui empêche silencieusement l'apprentissage ? Qu'est-ce qui fait la différence ?
- Le cognitivisme postule que les connaissances peuvent être décomposées en composantes et suivies au fil du temps. Que pourrait-on perdre lorsqu'on réduit la compréhension d'un apprenant à un ensemble de composantes de connaissances traçables ?

## Introduction

La psychologie cognitive est la tradition théorique de l'apprentissage qui traite l'apprentissage comme un changement des représentations mentales internes — concepts, schémas et procédures détenus en mémoire — plutôt que comme un changement du comportement observable. Son vocabulaire de traitement de l'information (attention, encodage, récupération, mémoire de travail bornée) a fourni à la fois le langage diagnostique de la difficulté d'apprentissage et l'architecture sous-jacente de l'[[intelligent-tutoring|tutorat intelligent]] et du [[knowledge-tracing|traçage des connaissances]] : des systèmes qui infèrent l'état interne d'un apprenant et s'y adaptent. Elle reste le cadre de référence de la [[metacognition|métacognition]], des [[desirable-difficulties|difficultés souhaitables]] et de l'[[self-regulated-learning|apprentissage autorégulé]] dans l'ensemble de cette base de connaissances.

## Core ideas

- **L'apprentissage est un changement des représentations mentales internes.** Le cognitivisme soutient que l'apprentissage implique l'acquisition, le stockage et la réorganisation des connaissances en mémoire — concepts, schémas et procédures — et pas seulement un changement de la réponse observable. Ce qu'un apprenant *sait et peut retrouver* compte, et pas seulement ce qu'il fait.
- **La métaphore du traitement de l'information (informatique).** L'esprit est traité comme un système de traitement de l'information doté de capacités et de goulots d'étranglement — [[item-response-theory|mesure]] de l'aptitude latente, limites de la mémoire de travail, encodage et récupération — ce qui est précisément le modèle qui a rendu le tutorat par IA (un programme informatique qui modélise la cognition de l'apprenant et s'y adapte) naturellement adapté.
- **L'attention et la mémoire sont bornées.** La mémoire de travail a une capacité limitée ; un apprentissage durable exige un encodage en mémoire à long terme par la répétition, l'élaboration et la [[retrieval-spacing-interleaving|pratique de récupération]]. Cela rattache le cognitivisme à la [[research-methods-aied|recherche]] sur le [[cognitive-offloading|délestage cognitif]] (la délégation de la mémoire et du traitement à des outils externes) et à l'« écart entre performance et apprentissage » lorsque l'IA court-circuite la récupération et la pratique.
- **La métacognition régule la cognition.** La [[metacognition|métacognition]] — surveiller et contrôler sa propre pensée — est un construit distinctivement cognitiviste, et elle explique pourquoi le calibrage, par les apprenants, du moment où il faut compter sur l'IA importe pour l'apprentissage (voir [[cognitive-offloading|délestage cognitif]] et [[self-regulated-learning|apprentissage autorégulé]]).
- **Les connaissances sont décomposables et traçables.** L'AIED cognitiviste postule que les connaissances de l'apprenant peuvent être représentées comme des composantes et suivies au fil du temps — le fondement du [[knowledge-tracing|traçage des connaissances]], du [[cognitive-diagnosis|diagnostic cognitif]] et de l'[[item-response-theory|théorie de la réponse à l'item]].

## Cognitivism and AI in education

### The cognitivist lineage of AIED

Le cognitivisme est sans doute la théorie la plus responsable de l'existence même de l'IA en éducation. Les premiers tuteurs cognitifs (par ex. les tuteurs fondés sur ACT-R d'Anderson) ont [[embodied-learning|incarné]] le postulat que l'apprentissage pouvait être modélisé comme des règles de production et qu'un système pouvait tracer les règles qu'un apprenant avait maîtrisées. Cela a produit l'architecture canonique qui définit encore le domaine : un modèle du domaine, un [[student-modeling|modèle de l'étudiant]] qui suit l'état des connaissances de l'apprenant, et un modèle [[pedagogy|pédagogique]] qui adapte l'enseignement — tous d'origine cognitiviste. Le [[knowledge-tracing|traçage des connaissances]] moderne (bayésien, par apprentissage profond et fondé sur l'IRT) et le [[cognitive-diagnosis|diagnostic cognitif]] poursuivent cette tradition. Le même postulat sous-tend l'[[intelligent-tutoring|tutorat intelligent]], l'[[adaptive-learning|apprentissage adaptatif]] et l'[[personalized-learning|apprentissage personnalisé]], regroupés dans la base de connaissances sous le parapluie de la [[student-modeling|modélisation de l'apprenant et de l'enseignement adaptatif]].

### Cognitive load and the design of instruction

La théorie de la charge cognitive (CLT) est le cadre cognitiviste le plus largement appliqué en [[learning-design|conception pédagogique]] : elle distingue la charge intrinsèque (complexité de la tâche), la charge extrinsèque (friction de présentation) et la charge pertinente (effort de construction de schémas). Une IA bien conçue devrait réduire la charge extrinsèque tout en préservant le traitement pertinent ; une IA mal intégrée réduit les trois, laissant des tâches achevées mais un apprentissage vide. Le cadrage par la mémoire de travail de la CLT est aussi central dans les débats sur le [[cognitive-offloading|délestage cognitif]] — la question de savoir si l'IA réduit la charge extrinsèque nocive ou court-circuite le traitement pertinent qui produit l'apprentissage.

La théorie cognitive de l'apprentissage multimédia (CTML) de Mayer applique les mêmes postulats sur la mémoire de travail aux matériaux eux-mêmes, et ses préconisations sont exceptionnellement concrètes : les apprenants réussissent mieux avec des mots et des images ensemble qu'avec des mots seuls, lorsque le matériel extrinsèque est exclu, lorsqu'une leçon est segmentée et au rythme de l'utilisateur plutôt que présentée comme une unité continue, lorsque les mots et les images correspondants apparaissent à proximité et au même moment, et lorsque la narration est conversationnelle et d'une voix humaine amicale plutôt que formelle ou générée par une machine.

### Cognitivism vs. behaviorism and constructivism

- **Contre le [[behaviorism|behaviorisme]] :** le behaviorisme explique l'apprentissage comme un changement comportemental observable par le renforcement et les exercices répétitifs ; le cognitivisme insiste sur les représentations internes et les états mentaux tracés. La pratique de l'IA montre souvent un écart de « constructivisme de nom, behaviorisme de fait », mais les conceptions cognitivistes (modélisation de l'étudiant, traçage des connaissances) se distinguent des exercices et de la rétroaction purement behavioristes parce qu'elles *représentent les connaissances inférées de l'apprenant et s'y adaptent* plutôt que de se contenter de renforcer les réponses.
- **Contre le [[constructivist|constructivisme]] :** le constructivisme soutient que les [[learners|apprenants]] construisent activement du sens par l'expérience ; le cognitivisme met l'accent sur l'encodage exact de connaissances (souvent pré-structurées) et de compétences. La lignée cognitiviste de l'AIED (domaines structurés, composantes de connaissances explicites) est parfois critiquée par les constructivistes comme trop behavioriste ou trop axée sur la transmission, tandis que le cognitivisme rétorque que représenter et tracer les connaissances est précisément ce qui rend possible un enseignement véritablement adaptatif.
- **Contre les [[learning-sciences|sciences de l'apprentissage]] :** le cognitivisme fournit les mécanismes que ce champ met en conception — mémoire de travail, encodage, récupération, composantes de connaissances décomposables — mais n'est pas lui-même orienté vers la conception. Il explique comment l'apprentissage se produit ; les sciences de l'apprentissage demandent comment construire des environnements dans lesquels il se produit et soumettent ces conceptions à une épreuve empirique.

### The AI-era tension: cognitivism's boundary is under pressure

L'[[generative-ai|IA générative]] étend et met au défi le cognitivisme à la fois. Elle l'étend en rendant les représentations des connaissances plus puissantes (les LLM comme moteurs de connaissances traçables via le [[knowledge-tracing|traçage des connaissances]] et adaptables via la [[student-modeling|modélisation de l'apprenant]]). Elle le met au défi en compliquant l'endroit où la cognition « se trouve » : lorsque l'IA effectue le raisonnement, la mémoire et même des fonctions apparentées à la métacognition, le postulat cognitiviste que l'apprentissage est un traitement interne dans l'esprit individuel est ébranlé — comme le soutiennent la [[distributed-cognition|cognition distribuée]], la [[ai-cognitive-partner-co-regulation-learning|co-régulation]] et les cadrages post-humanistes, la cognition peut être distribuée entre systèmes humains et artificiels. Or la question cognitiviste demeure la question centrale du domaine : *l'apprenant intériorise-t-il la connaissance, ou l'outil la détient-il ?* C'est la question du délestage cognitif et de l'écart entre performance et apprentissage dans sa forme la plus pure.

## Implications for design and research

1. **Concevoir pour l'intériorisation, et pas seulement pour la performance.** L'AIED cognitiviste devrait être évaluée sur la question de savoir si l'apprenant peut retrouver et appliquer les connaissances *sans* l'outil — et non sur la performance assistée. C'est l'[[ai-misuse-learning-harm|écart entre performance et apprentissage]] et le motif de la mesure du [[transfer-of-learning|transfert]] non assisté.
2. **Représenter l'apprenant, ne pas seulement répondre.** Attachez une [[student-modeling|modélisation de l'apprenant]] et un [[knowledge-tracing|traçage des connaissances]] structurés au dialogue d'IA afin que le système s'adapte aux connaissances inférées plutôt que de répondre avec fluidité mais aveuglément. ([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **Respecter les limites de la mémoire de travail.** Appliquez la théorie de la charge cognitive à l'expérience utilisateur de l'IA : réduisez la charge extrinsèque (friction, interfaces surchargées) tout en préservant le traitement pertinent ([[desirable-difficulties|lutte productive]], pratique de récupération) plutôt que de minimiser toute demande cognitive.
4. **Calibrer la métacognition.** Parce que la [[metacognition|métacognition]] gouverne le moment où les apprenants choisissent de déléguer, enseigner le calibrage (savoir ce qu'on peut réellement faire sans aide) constitue une réponse cognitiviste à la dépendance excessive (voir [[cognitive-offloading|délestage cognitif]]).

## Concepts liés

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — les constats de rétention sur lesquels repose cette famille de pratiques

## Articles liés

- [[cognitive-shift-ai-education]] — Le virage cognitif dans l'IA en éducation
- [[cogtax-cognitive-taxonomy]] — Une taxonomie cognitive pour l'usage de l'IA
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Agents LLM pédagogiques ancrés dans le traçage des connaissances
- [[nie-personavlm-long-term-personalization-2026]] — Modélisation et mémoire de l'étudiant par LLM
- [[ai-cognitive-partner-co-regulation-learning]] — L'IA comme partenaire cognitif dans l'apprentissage co-régulé
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: thinking as human–AI interaction
