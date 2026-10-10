---
title: "Agent pédagogique"
created: "2026-08-08T11:47:01-04:00"
updated: "2026-10-10T04:00:01-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/pedagogical-agent
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

> **Synthèse** : les agents [[pedagogy|pédagogiques]] sont des interfaces conversationnelles pilotées par l'IA, intégrées dans des environnements d'apprentissage, qui utilisent des stratégies pédagogiques (sollicitation, affirmation, étayage) pour soutenir l'[[student-engagement|engagement de l'apprenant]], la réflexion et la métacognition. Les conceptions varient des simples fournisseurs d'information aux partenaires de dialogue interactifs qui s'adaptent aux états de l'apprenant.

## Questions à examiner

- Pensez à un moment où un agent conversationnel ou un tuteur vous a donné une réponse parfaite qui ne vous a rien appris. Qu'est-ce qui fait qu'une IA « enseigne » plutôt qu'elle ne se contente de « résoudre » — et pourquoi un score à un repère pourrait-il ne pas capter cette différence ?
- La page trouve que les scores de « résolution » et les scores de « pédagogie » des tuteurs ne corrèlent que faiblement d'un modèle à l'autre. Qu'est-ce que cela devrait vous apprendre sur l'évaluation d'un tuteur d'IA quant à sa capacité à répondre aux questions ?
- Certaines conceptions donnent à l'IA des rôles distincts — Enseignant, Camarade de classe, Mentor — et maintiennent même un parent au centre (comme dans ParaTutor). Dans votre expérience, donner à un agent un rôle clair change-t-il la manière dont les [[learners|apprenants]] interagissent avec lui ?
- De véritables étudiants « contournent » souvent le cadrage pédagogique d'un agent conversationnel lorsque les objectifs de l'agent s'opposent à ceux de l'apprenant. Pourquoi un apprenant pourrait-il rationnellement ignorer un bon étayage, et qu'est-ce que cela implique pour l'hypothèse « si on le construit, ils s'engageront » ?
- Préféreriez-vous apprendre avec une IA qui vous dit des choses, une qui vous pose des questions, ou une qui anime une discussion de groupe ? Comment votre préférence façonne-t-elle ce que vous pensez qu'un « agent pédagogique » devrait être ?
- D'un simple fournisseur d'information à une flotte d'agents spécialisés orchestrant tout un cours — où, à votre avis, résident la valeur (et le risque) du tutorat conversationnel par l'IA ?

## Introduction

Un agent pédagogique est un composant d'IA interactif au sein d'un système d'apprentissage qui engage les apprenants par le dialogue, des questions ou des invites pour soutenir les processus cognitifs et [[metacognition|métacognitifs]]. À la différence des [[visualization|tableaux de bord]] passifs ou de la rétroaction statique, les agents pédagogiques emploient des stratégies de tutorat fondées sur les preuves — comme solliciter l'auto-[[assessment|évaluation]] de l'apprenant avant de fournir une [[feedback|rétroaction]], ou [[scaffolding|étayer]] la [[problem-solving|résolution de problèmes]] par un dialogue socratique. Le parapluie couvre désormais tout, d'un [[intelligent-tutoring|tuteur intelligent]] conversationnel unique à des flottes d'[[agentic-ai|agents]] spécialisés par rôle qui font cours, mentorisent, animent la collaboration et orchestrent même la génération de cours, le tout ancré dans des décennies de [[research-methods-aied|recherche]] sur les systèmes de tutorat intelligent.

## Comment les agents pédagogiques sont étudiés dans la base de connaissances

**Conception et architecture des agents conversationnels.** Un fil récurrent est la manière dont les agents sont structurés, et pas seulement les modèles qui les alimentent. Le [[conversational-ai-tutors-framework|cadre des tuteurs d'IA conversationnels]] soutient que des [[ai-technologies|Technologies de l'IA]] éprouvées des STI — [[knowledge-tracing|traçage des connaissances]], détection de l'affect, [[student-modeling|modélisation de l'apprenant]] — devraient ancrer les tuteurs génératifs, en conservant l'ossature diagnostique tandis que l'[[generative-ai|IA générative]] fournit un dialogue flexible. Les conceptions multi-agents poussent plus loin : [[mooc-to-maic|MAIC]] remplace le [[online-teaching-and-learning|MOOC]] par « une vidéo pour N étudiants » par une salle de classe pilotée par les [[llm|grands modèles de langue]] et peuplée d'agents Enseignant, Assistant, Camarade de classe et Analyste, afin de délivrer un [[personalized-learning|apprentissage personnalisé]] à grande échelle, tandis que [[lecturaagents-multi-agent-teaching|LecturaAgents]] ajoute un ProfessorAgent [[embodied-learning|incarné]] dont l'algorithme TASA aligne les actions d'[[teacher-role|enseignement]] visibles (écriture manuscrite, mise en évidence) sur les profils d'apprenants. Le tutorat parent–enfant devient même un problème à deux agents dans [[paratutor-parent-child-tutoring|ParaTutor]], où un étayage à rôles séparés maintient le parent au centre au lieu de laisser un agent conversationnel générique les déplacer. La même logique fondée sur les rôles apparaît dans [[instructional-agents-multi-agent-course-gen|Instructional Agents]], où des agents Enseignants, Concepteur, Assistant d'enseignement et Directeur de programme collaborent à travers ADDIE pour générer des supports de cours.

Un usage complémentaire des agents fondés sur les rôles cible la pratique de l'[[teacher-education|enseignant]] plutôt que l'apprentissage des étudiants : [[educasim-cs1-instructional-practice|Mohne et al. (2026)]] associent des personas d'étudiants pédagogiques, une mémoire ancrée dans le matériel réel du cours, et un oracle locuteur de type grand-modèle-de-langue-juge afin que des instructeurs novices répètent une séance en petits groupes — 254 séances optionnelles durant en moyenne environ 16 minutes chacune, à environ \\$0,05–\\$0,10 par séance.

**Comportement d'enseignement contre comportement de résolution.** Un constat empirique central est que la production de réponses n'est pas un soutien à l'apprentissage. [[measuring-llm-tutors-teach-vs-solve|Mesurer si les tuteurs fondés sur les grands modèles de langue enseignent ou résolvent]] montre que les scores de résolution et de pédagogie sur les repères de tutorat ne corrèlent que faiblement (r = 0,421 sur huit modèles), ce qui plaide pour que les repères rapportent séparément des critères orientés vers la pédagogie — questions guidantes, indices calibrés, étayage non divulgateur. Cela s'accorde avec les preuves sur [[stanford-evidence-base-ai-k12-2026|l'IA spécifique au tutorat contre l'IA générale]] : des tuteurs conçus pédagogiquement, dotés de [[guardrails|garde-fous]], atténuent les chutes de scores à l'examen et la suppression du raisonnement que produisent les agents conversationnels généralistes bruts, préservant les [[desirable-difficulties|difficultés souhaitables]] et la lutte productive plutôt que de les court-circuiter. Or les repères peuvent surestimer l'efficacité des tuteurs même étayés en conditions réelles. [[rethinking-scaffolding-llm-tutors|Repenser l'étayage dans les tuteurs fondés sur les grands modèles de langue]] constate que de véritables étudiants contournent fréquemment le cadrage pédagogique d'un agent conversationnel, une réponse rationnelle à un décalage entre les objectifs de l'agent et ceux de l'apprenant — si bien que l'appropriation doit être évaluée, et non présumée.

**Rôle dans le tutorat et la collaboration.** Les agents sont de plus en plus positionnés non comme des donneurs de réponses, mais comme des animateurs et des médiateurs. Le [[niari-ai-pedagogical-mediator-collaborative-learning|cadre de médiateur pédagogique de Niari]] reconçoit l'IA dans l'[[collaborative-learning|apprentissage collaboratif]] comme un médiateur interactionnel, épistémique et réglementaire — étayant la participation et la [[regulation|régulation]] partagée sans déplacer l'autonomie de l'enseignant ni de l'[[agency|apprenant]]. Concrètement, [[golrang-propact-pair-programming-2026|le tutorat collaboratif par l'IA (ProPACT)]] traite la collaboration elle-même comme l'objet de l'enseignement, prévoyant les défaillances dyadiques jusqu'à 30 secondes à l'avance et délivrant des étayages minimalement intrusifs qui préservent la [[metacognition|métacognition]]. [[embodied-inquiry-ai-facilitator-physics-2026|L'enquête incarnée avec l'IA comme animatrice]] montre qu'une IA peut compléter la construction manuelle de modèles en facilitant l'application d'un modèle construit, tandis que la [[robot-assisted-language-learning-meta-analysis-2026|méta-analyse sur l'apprentissage des langues assisté par la robotique]] constate que les résultats dépendent davantage de la manière dont un agent robotique est positionné dans l'enseignement (interaction fondée sur le groupe) que de sa sophistication technique. La question de savoir si le *rôle* que joue un agent suffit, ou s'il doit aussi *adapter son comportement*, est posée par [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]] : une étude du [[k-12|primaire]] sur la « conversation autour d'un livre » a trouvé qu'un compagnon fixe de « pair étudiant » soutenait des interactions plus longues tout en supprimant l'autonomie des étudiants et en heurtant un « plafond [[affective-computing|affectif]] » (faible réflexion émotionnelle et tournée vers l'avenir), ce qui plaide pour que l'*étiquetage* des rôles soit associé à une logique d'interaction adaptée au *rôle*, plutôt qu'à une conception monolithique à rôle unique.

[[ethics-training-agents-group-ethics-discussion-2026|Les agents de formation à l'éthique (Seo et al., 2026)]] montrent ce qui se produit lorsqu'on demande à un agent pédagogique d'animer plutôt que d'enseigner : un animateur fondé sur les grands modèles de langue qui gérait la prise de parole (empilement avec des fenêtres de levée de main de 15 secondes), la gestion du temps (passage automatique d'une étape à la conclusion au bout de 9 minutes), et la résumé par lots incrémentiel a réduit la charge cognitive des participants et leur a donné le sentiment que la discussion était « sur les rails » — un participant l'a opposé favorablement à ChatGPT, qui « peut souvent sembler désorganisé ou rendre difficile de voir la progression des idées ». La même étude expose le plafond des agents fondés sur des personas : les trois agents d'orientation [[ethics|éthique]] distincts ont été jugés significativement sous les pairs humains sur la contribution, la diversité et l'influence (Kruskal-Wallis p < ,001), et les participants ont demandé des productions orientées vers le processus (« comment l'agent raisonne ») plutôt que vers la conclusion.

**Là où les agents conversationnels sont (et ne sont pas) utilisés — le tableau de la revue parapluie.** La [[conversational-ai-agents-umbrella-review-2026|revue parapluie des agents d'IA conversationnels]] (Ganguly et al. 2025, 34 revues) quantifie l'utilisation de l'IA conversationnelle : le soutien à l'enseignement et à l'apprentissage (97,1 % des revues), le soutien psychologique et [[motivation|motivationnel]] (91,2 %), et le développement métacognitif et personnel (88,2 %) occupent la tête, tandis que le soutien administratif (50 %), la recherche et la gestion de l'information (52,9 %), et le soutien sanitaire/médical (41,2 %) sont à la traîne. Elle signale aussi que la recherche sur l'[[conversational-ai|IA conversationnelle]] manque d'orientations de conception de bout en bout, de méthodes d'[[usability-research|utilisabilité]] propres à l'IA conversationnelle, et de stratégies concrètes d'orchestration en classe pour le rôle de l'enseignant — ce qui renforce que la conception des agents pédagogiques doit être ancrée dans l'IHC, fondée sur les preuves et attentive à l'[[ai-literacy|littératie en IA]].([[conversational-ai-agents-umbrella-review-2026]])

**L'orientation du rôle est une variable de conception, et non un choix stylistique.** La [[wang-teacher-student-centered-agents-physics-2026|comparaison d'agents de physique]] (Wang et al. 2026, 59 apprenants) isole le rôle spécifié par l'invite en maintenant fixes le modèle, la plateforme et la température : un agent centré sur l'enseignant, ancré dans une source de manuel bornée et répondant du point de vue de l'instructeur, contre un agent centré sur l'étudiant, configuré avec la connaissance de la compréhension des étudiants et scripté pour diagnostiquer les idées fausses, nommer le concept, et [[transfer-of-learning|transférer]] à un cas analogue. Le rôle centré sur l'étudiant l'a emporté sur chaque résultat mesuré — performance au post-test, charge cognitive extrinsèque plus faible et charge cognitive pertinente plus élevée, expérience de flux, et empathie perçue — bien que l'agent centré sur l'enseignant fût celui qui était optimisé pour l'exactitude et la fidélité au manuel. Cela fait du *rôle et du schéma d'interaction* un paramètre de conception de premier ordre aux côtés du choix de l'[[prompt-engineering|invite]] et du modèle, et montre que l'empathie peut être conçue à partir de la structure conversationnelle plutôt qu'à partir d'un modèle entraîné différemment ([[affective-computing]]).

**L'intention de l'auteur ne garantit pas la pédagogie mise en acte.** Lorsque 27 enseignants du collège ont configuré un outil de rédaction d'agent conversationnel destiné aux enseignants, une évaluation de 108 notations de critères au niveau des agents a trouvé que les réponses générées s'alignaient bien mieux sur la réactivité (88,9 %) et la persona (81,5 %) que sur les règles (70,4 %) ou la finalité déclarée (59,3 %), ce que les auteurs cadrent par les formes pédagogiques du golfe d'exécution et du golfe d'évaluation de Norman — des commandes configurables seules ne rendaient pas visible dans le comportement de l'agent l'intention pédagogique de l'enseignant ([[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]]).

**Les agents dans les cadres immersifs et de réalité étendue.** [[aclime-pedagogical-agents-extended-reality-2026|Ross et Kaspar (2026)]] étendent le concept à la [[virtual-and-augmented-reality|réalité étendue]] (RA, virtualité augmentée et RV) avec ACLIME, un cadre conceptuel qui — à la différence de CAMIL, CATLM-VR et TICOL — garde l'agent à l'intérieur du modèle. Il nomme deux modes d'interaction tirés de la littérature : le tuteur, qui offre guidage, encouragement, questionnement réflexif et explications, et le partenaire de jeu de rôle, qui occupe un rôle défini à l'intérieur d'un scénario tel qu'un habitant local lors d'une sortie sur le terrain consacrée au changement climatique ou une contrepartie négociante dans une formation en entreprise. Le corps de l'agent (de la tête seule au corps entier) et son comportement sont traités comme des surfaces de conception : réalisme visuel contre réalisme comportemental, contrôle souple par l'IA contre scriptage rigide fondé sur des règles, parole synthétisée contre parole préenregistrée, et canaux non verbaux incluant le regard, le geste et la proxémie. On soutient que l'immersion et l'interactivité fondée sur le corps multiplient les indices sociaux derrière la [[community-of-inquiry|présence sociale]] — le réalisme comportemental, et non le réalisme visuel, étant proposé comme le prédicteur décisif — tandis que le corps virtuel propre de l'apprenant ajoute une dimension d'[[embodied-learning|incarnation]] (propriété du corps, autonomie du corps virtuel propre, auto-localisation) et l'effet Protée. Le compromis explicite du cadre est cognitif : l'immersion et la simple présence de l'agent peuvent élever la charge cognitive même lorsque l'interaction sociale avec l'agent l'abaisse par l'effet de mémoire de travail collective, et une couche temporelle (familiarisation, maturation des relations homme–agent, déclin de la nouveauté, apparition du mal des transports cybernétique) est ajoutée aux variables de conception habituelles. Son statut est délibérément provisoire : presque aucun travail empirique ne teste encore les agents pédagogiques dans les médias immersifs, et les [[learning-gains|résultats d'apprentissage]] de long terme comme les caractéristiques des apprenants se situent hors du modèle.

**Évaluation et repères de référence.** Mesurer un agent pédagogique exige de tester la pédagogie, et non le contenu. [[teaching-monster-pck-benchmark-2026|Le Teaching Monster Challenge]] évalue comparativement le savoir pédagogique disciplinaire en demandant à des agents d'adapter une leçon à une persona d'apprenant spécifiée, constatant que les systèmes sont forts sur le contenu mais faibles pour l'adapter — et révélant que les grands modèles de langue juges classent mal les systèmes forts. [[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]] évalue des agents sur le jugement pédagogique professionnel, le tutorat multitours [[situated-learning|situé]], et l'achèvement de flux de travail de type tableau blanc, montrant que les modèles n'atteignent pas les normes professionnelles de l'enseignement. [[ai-generated-interactive-fiction-education-2026|La fiction interactive générée par l'IA]] ajoute un angle d'évaluation par la conception : la cohérence et l'intégration des quiz, et non la capacité de génération, limitent l'utilité pour l'[[student-experience|expérience étudiante]].
**Mettre à l'épreuve la robustesse de la persona sur plusieurs tours.** [[adversarial-stress-testing-role-playing-agents|Shouqi et al. (2026)]] ont mené six attaques escaladantes contre des agents de jeu de rôle avec un Juge automatisé : le test à stratégies multiples a réduit la robustesse de 0,17 à 0,20 par rapport à une référence à stratégie unique, et les défaillances critiques se regroupaient après les tours 5 à 6, si bien que les évaluations courtes ou à tour unique surestiment la stabilité de la persona et l'adhésion éthique.

## Orientations pratiques

Concevez pour l'autonomie de l'apprenant, et non pour la commodité du modèle. Privilégiez les garde-fous propres au tutorat — [[scaffolding|étayage]], indices, [[socratic-method|questionnement socratique]], ciblage des [[misconceptions|idées fausses]] — plutôt que la génération brute de réponses, puisque la résolution et l'enseignement divergent. Distribuez le soutien selon le rôle de l'utilisateur (parent contre enfant, pair contre pair) plutôt que par une interface générique unique, et traitez la collaboration comme une cible valide pour l'étayage. Ne présumez pas que les étudiants s'approprieront l'étayage ; évaluez l'appropriation dans des contextes réels. Intégrez une [[human-in-the-loop-ai|supervision humaine]] à la rédaction — comme le fait [[ai-tutor-authoring-promptdecipher|PromptDecipher]] en faisant du contrôle qualité par l'enseignant des réponses de l'agent une activité de premier ordre — et choisissez des dorsales moins coûteuses là où la qualité tient. Rapportez séparément les scores d'enseignement et de résolution, et validez le contenu généré avec les utilisateurs plutôt que de présumer que la génération équivaut à l'utilité.

La préférence de l'apprenant est un mauvais indicateur indirect de la qualité de l'étayage : des étudiants en modélisation mathématique assistée par l'IA obtenaient les meilleurs résultats avec les rôles de Pair et d'Assistant enseignant, tout en jugeant les rôles plus directifs de Tuteur et d'Excellent étudiant les plus élevés sur l'utilité et le sentiment d'efficacité personnelle ([[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang et Yang (2026)]]).
Une revue de 46 études sur les agents d'IA dans l'apprentissage collaboratif assisté par ordinateur distingue l'étayage cognitif, l'animation sociale et l'orchestration pédagogique, et constate que les gains cognitifs sont cohérents tandis que les résultats comportementaux, sociaux et émotionnels dépendent du contexte — si bien que la fonction de l'agent devrait être choisie en fonction du résultat qu'elle vise à produire ([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]).

## Connexions aux concepts liés

Les agents pédagogiques se situent à l'intersection de l'[[intelligent-tutoring|tutorat intelligent]] (leur ossature diagnostique faite de [[knowledge-tracing|traçage des connaissances]] et de modélisation de l'apprenant) et de l'[[generative-ai|IA générative]]/des [[llm|grands modèles de langue]] (leur moteur de délivrance). Ils opérationnalisent l'[[scaffolding|étayage]] et la [[feedback|rétroaction]], visent la [[metacognition|métacognition]] et l'[[self-regulated-learning|apprentissage autorégulé]], et ciblent de plus en plus l'[[collaborative-learning|apprentissage collaboratif]]. Les préoccupations de sécurité reviennent à travers la [[pedagogical-safety|sécurité pédagogique]], la qualité de la rédaction, et le risque que les agents [[cognitive-offloading|délestent]] l'apprentissage plutôt qu'ils ne le soutiennent. Tout cela est évalué à travers l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]] et les [[benchmark|repères de référence]], qui doivent mesurer l'enseignement, et pas seulement la résolution.

De manière cruciale, les agents pédagogiques sont jugés sur leurs [[learning-gains|gains d'apprentissage]], et non sur la fluidité de leurs réponses. Les preuves de la base de connaissances sont que les agents produisent des gains durables lorsqu'ils sont conçus comme des coachs propres au tutorat, dotés de garde-fous — [[stanford-evidence-base-ai-k12-2026|l'IA spécifique au tutorat surpasse systématiquement les agents conversationnels généralistes]] — et peuvent nuire à l'apprentissage lorsqu'ils se substituent à l'effort de l'apprenant ([[generative-ai-guardrails-harm-learning|l'ECR sur les garde-fous]], [[jost-llm-programming-education-learning-outcomes|la dépendance aux grands modèles de langue et les notes]]). Mesurer les [[learning-gains|gains d'apprentissage]] d'un agent exige donc des mesures de résultats sans assistance et transférables, et non la performance au sein de l'outil.

Une meilleure rétroaction n'est pas la même chose qu'un meilleur apprentissage : personnaliser un agent avec des bases de connaissances et un flux de travail a fait monter l'exactitude et la spécificité de la rétroaction mais a laissé inchangés les comportements autorégulateurs, les expériences d'apprentissage et les résultats, et son avantage de gains n'est apparu que sous une rétroaction directive ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

## Concepts liés

- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## Articles liés

- [[wang-teacher-student-centered-agents-physics-2026]] — Le rôle d'agent centré sur l'étudiant surpasse le rôle centré sur l'enseignant sur la performance, la charge, le flux et l'empathie (Wang et al. 2026)
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME : cadre conceptuel pour les agents pédagogiques en RA/RV — tuteur contre partenaire de jeu de rôle, réalisme, présence, charge cognitive (Ross & Kaspar 2026)
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim : agents étudiants génératifs pour la pratique pédagogique
- [[conversational-ai-agents-umbrella-review-2026]] — Revue parapluie des agents d'IA conversationnels en éducation
- [[conversational-agents-novice-programmers-scoping-2025]] — Revue de cadrage des agents conversationnels pour les programmeurs novices
- [[ba-ai-agents-cscl-review-2026]] — Revue des agents d'IA dans l'apprentissage collaboratif assisté par ordinateur
- [[kim-ai-productive-failure-adult-2026]] — Concevoir des systèmes d'IA pour soutenir l'apprentissage fondé sur l'échec productif
- [[preferred-scaffolding-ai-mathematical-modeling]] — L'étayage préféré dans la modélisation mathématique assistée par l'IA
- [[llm-adaptive-programming-error-explanations-2026]] — Explications adaptatives par grands modèles de langue des erreurs de programmation
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Compagnon d'IA adapté au rôle pour la conversation autour d'un livre au primaire ; plafond affectif des agents à rôle fixe (Liao 2026)
- [[ethics-training-agents-group-ethics-discussion-2026]] — Agents de formation à l'éthique : animer l'éducation éthique en groupe par le jeu de rôle et la discussion pour la réflexion et l'exploration éthiques

- [[teachers-configure-educational-chatbots-2026]] — Enseignera-t-il comme prévu ? Comment les enseignants configurent les agents conversationnels d'IA éducatifs

- [[agent-type-feedback-style-self-directed-learning-2026]] — L'agent personnalisé a élevé la qualité de la rétroaction mais ni l'autorégulation ni les résultats ; avantage de gains seulement sous rétroaction directive
