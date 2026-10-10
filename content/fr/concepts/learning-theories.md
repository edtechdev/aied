---
title: "Théories de l'apprentissage"
created: "2026-08-16T03:36:31-04:00"
updated: "2026-10-10T03:41:10-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories, metacognition, self-regulated-learning]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_faqs: [research-gaps-aied]
translation_of: concepts/learning-theories
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Théories de l'apprentissage** — la famille de cadres qui expliquent comment l'apprentissage se produit, et le concept parapluie des idées théoriques de la base de connaissances. Dans l'[[ai-education|IA en éducation]], les théories de l'apprentissage façonnent à la fois la conception des systèmes d'IA (la pédagogie qu'ils incarnent) et la manière dont le champ interprète si l'IA « fonctionne » : le même outil peut être un étayage sous l'hypothèse [[constructivist|constructiviste]], un moteur de renforcement sous le [[behaviorism|béhaviorisme]], ou un risque de charge cognitive sous la théorie de la charge cognitive.

## Questions à examiner

- Pensez à un tuteur IA ou à un système adaptatif que vous avez utilisé ou observé. Quelles hypothèses faisait-il sur la manière dont les gens apprennent — récompensait-il les bonnes réponses (béhaviorisme), construisait-il la compréhension (constructivisme), ou gérait-il l'effort mental (charge cognitive) ? Ses concepteurs ont-ils jamais énoncé ces hypothèses ?
- La page décrit un écart récurrent : le discours professe le constructivisme tandis que les implémentations d'IA adoptent par défaut des mécaniques de forage et de rétroaction. Où avez-vous vu un outil prétendre soutenir l'apprentissage profond alors qu'il ne fait que renforcer des réponses de surface ?
- Le même outil d'IA peut apparaître comme un succès sous une théorie et comme un échec sous une autre — des devoirs notés gonflés se lisent comme de l'apprentissage sous le béhaviorisme mais comme un échec à construire une compréhension durable sous le constructivisme. Quelle grille de lecture est la plus juste pour juger si les étudiants ont réellement appris ?
- Parce que chaque tuteur IA incarne une théorie, que ses concepteurs le disent ou non, la question « est-ce que cela fonctionne ? » est peut-être la mauvaise question. Quelle est la meilleure question à poser à propos d'une IA éducative, étant donné les théories qu'elle pourrait incarner ?
- L'IA générative pousse les éducateurs à envisager de nouvelles théories — comme l'apprentissage comme co-construction itérative entre humains et IA, ou l'IA comme partenaire cognitif tout au long de la vie. L'essor de l'IA exige-t-il véritablement de nouvelles théories de l'apprentissage, ou les théories existantes suffisent-elles encore ?
- La mesure des gains d'apprentissage est elle-même « chargée de théorie » : un instrument construit sur une théorie peut ne pas capturer les gains qu'une autre prédit. Comment deux chercheurs engagés dans des théories différentes pourraient-ils regarder les mêmes données et parvenir à des conclusions opposées sur l'efficacité d'un outil d'IA ?

## Introduction

C'est le concept parapluie du fil théorique de la base de connaissances. Les théories de l'apprentissage se situent au cœur de l'IA en éducation parce que chaque tuteur IA, chaque système adaptatif et chaque outil de rétroaction incarne des hypothèses sur la manière dont les gens apprennent — que les concepteurs les énoncent ou non. La base de connaissances documente ces théories individuellement et les traite comme la lentille conceptuelle à travers laquelle la conception et les effets de l'IA sont évalués. Le champ de recherche qui teste ces cadres fait l'objet d'une page distincte : les [[learning-sciences|sciences de l'apprentissage]] étudient l'apprentissage de manière empirique — expériences, essais en classe et recherche par la conception — et traitent une théorie comme quelque chose à confirmer ou à infirmer, alors que cette page rassemble les cadres eux-mêmes ; les deux expressions sont maintenues distinctes dans cette base de connaissances, le singulier « science de l'apprentissage » désignant ce fil théorique.

### Le paysage des théories de l'apprentissage

La base de connaissances documente plusieurs familles de théories de l'apprentissage, chacune avec ses propres concepts :

- **Théories classiques de l'apprentissage.** Le [[behaviorism|béhaviorisme]] (l'apprentissage comme changement comportemental observable par le renforcement et le forage) et le [[constructivist|constructivisme]] (l'apprentissage comme construction active des connaissances) sont les deux pôles qui reviennent le plus souvent dans la recherche sur l'IA. Le champ présente fréquemment un écart « constructivisme de nom, béhaviorisme de fait », où le discours professe la construction tandis que les implémentations d'IA adoptent par défaut des mécaniques de forage et de rétroaction.([[ai-vocational-education-training-review]]) Le [[cognitive-psychology|cognitivisme]] est le troisième pôle classique — l'apprentissage comme changement des représentations mentales internes — et la théorie la plus responsable des contributions signatures de l'AIED ([[knowledge-tracing|traçage des connaissances]], [[cognitive-diagnosis|diagnostic cognitif]], [[student-modeling|modélisation de l'apprenant]], [[intelligent-tutoring|tutorat intelligent]]).
- **Théories socioculturelles et développementales.** L'[[sociocultural-learning|apprentissage socioculturel]] soutient que l'apprentissage et le développement naissent de la participation sociale et sont médiés par des outils culturels et des pairs plus savants — englobant la [[sociocultural-learning|zone proximale de développement]], le [[scaffolding|étayage]], l'apprentissage en apprentissage, les communautés de pratique et la [[distributed-cognition|cognition distribuée]]. À l'ère de l'IA, l'[[generative-ai|IA générative]] est de plus en plus présentée comme un *agent médiationnel* qui médie à la fois l'activité et génère des contributions contingentes à l'interaction.([[generative-ai-mediational-agent-sociocultural-2026]])
- **Cognition et architecture cognitive.** La [[cognitive-psychology|psychologie cognitive / cognitivisme]] est le parapluie de cette famille : la théorie de la charge cognitive (comment les limites de la mémoire de travail façonnent l'instruction), la théorie du double processus (traitement intuitif rapide ou délibératif lent), et la [[metacognition|métacognition]] (surveillance et régulation de son propre apprentissage) expliquent les mécanismes *internes* que les outils d'IA engagent ou contournent.
- **Motivation et autodirection.** La [[self-determination-theory|théorie de l'autodétermination]] (autonomie, compétence, relations), l'[[self-efficacy|auto-efficacité]] (confiance en ses propres capacités), l'[[self-regulated-learning|apprentissage autorégulé]] (fixation d'objectifs, surveillance et ajustement), et la [[motivation|motivation]] expliquent pourquoi les apprenants s'engagent avec l'IA comme ils le font.
- **Contexte et activité d'apprentissage.** L'[[experiential-learning|apprentissage expérientiel]], l'[[active-learning|apprentissage actif]], l'[[project-based-learning|apprentissage par projets]], l'[[collaborative-learning|apprentissage collaboratif]], le [[transfer-of-learning|transfert d'apprentissage]], les [[desirable-difficulties|difficultés souhaitables]] et l'[[embodied-learning|apprentissage incarné]] décrivent les types d'activité et de contexte qui produisent un apprentissage durable.

### Théories de l'apprentissage et gains d'apprentissage

Les théories de l'apprentissage sont en fin de compte évaluées par leurs résultats, et le concept de [[learning-gains|gains d'apprentissage]] de la base de connaissances est l'endroit où la théorie rencontre les données probantes. Chaque théorie fait une prédiction différente sur ce qui *compte* comme apprentissage et sur la manière de le mesurer : le béhaviorisme prédit des gains de performance observables sur les tâches de forage et de rétroaction ; le constructivisme prédit une compréhension plus profonde qui se transfère à des problèmes nouveaux ; la théorie socioculturelle prédit des gains de participation et de résolution de problèmes médiée ; et la théorie de la charge cognitive prédit des gains seulement lorsque l'instruction respecte les limites de la mémoire de travail. C'est pourquoi la mesure des [[learning-gains|gains d'apprentissage]] est chargée de théorie — un instrument construit sur une théorie peut ne pas capturer les gains qu'une autre prédit. À l'ère de l'IA, la divergence marquée entre la performance assistée par l'IA et les [[learning-gains|gains d'apprentissage]] non assistés (voir [[generative-ai-reduced-study-time-math]], [[stromberg-generative-ai-learning-penalty-secondary-2026]]) peut être lue à travers cette lentille : une lecture béhavioriste voit les devoirs notés gonflés comme un succès, tandis qu'une lecture constructiviste, centrée sur la compréhension durable, voit les mêmes données probantes comme un échec à apprendre. Relier les théories à l'[[ai-ed-evaluation|évaluation]] et aux [[learning-gains|résultats mesurés]] est donc essentiel pour décider quelle lentille théorique un système d'IA donné satisfait réellement.

### Pourquoi les théories de l'apprentissage comptent pour l'IA en éducation

Les théories de l'apprentissage comptent pour trois raisons :

- **Elles prédisent les effets de l'IA.** Qu'un outil d'IA améliore ou nuise à l'apprentissage dépend du mécanisme qu'il active. Un tuteur qui donne les réponses nuit sous une grille constructiviste (il contourne la construction), est neutre sous le béhaviorisme (il renforce), et soulève des préoccupations de charge cognitive (il décharge plutôt qu'il ne construit). Les concepts de [[cognitive-offloading|délestage cognitif]] et d'[[cognitive-offloading|hyper-dépendance]] de la base de connaissances captent le versant risque de cette question.
- **Elles exposent l'écart théorie-pratique.** Les travaux empiriques constatent à maintes reprises que les implémentations d'IA incarnent des théories différentes de celles que le discours revendique — notamment un langage constructiviste associé à des mécaniques béhavioristes de forage.([[ai-vocational-education-training-review]]) Évaluer l'IA exige donc de se demander *quelle* théorie un système incarne réellement, et pas seulement s'il « fonctionne ».
- **Elles sont activement repensées.** L'IA générative [[prompt-engineering|pousse]] les éducateurs à revisiter la question de savoir si les théories classiques suffisent. Le [[generativism-learning-theory|génératisme]] propose que l'apprentissage à l'ère de l'IA se produise de plus en plus par une co-construction itérative entre apprenants humains et systèmes d'IA, étendant plutôt que remplaçant les quatre théories classiques (béhaviorisme, cognitivisme, constructivisme, connexionnisme).([[generativism-learning-theory]])

### Nouvelles orientations théoriques issues des travaux récents en AIED

Des travaux théoriques récents étendent le fil classique dans plusieurs directions, chacun recentrant la relation humain–IA plutôt que de traiter l'IA comme un outil neutre :

- **Corégulation humain–IA.** Un cadre développemental positionne l'IA non comme un instrument externe mais comme un **partenaire cognitif** de [[regulation|corégulation]] qui corégule la pensée, l'apprentissage et la maîtrise de soi tout au long de la vie.([[ai-cognitive-partner-co-regulation-learning]]) S'appuyant sur les fonctions exécutives, la [[metacognition|métacognition]], la cognition distribuée et le développement socioculturel, il assigne à l'IA quatre rôles — étayage, soutien métacognitif, mémoire externe / système de [[cognitive-offloading|délestage cognitif]], et partenaire de décision — le cadre étant le plus pertinent à partir de l'enfance moyenne.
- **Ensemble Cognition.** Un cadre [[philosophy-of-ai-in-education|philosophique]] reconceptualise la pensée comme émergeant d'interactions dynamiques entre agents humains et artificiels plutôt que comme résidant uniquement dans les esprits individuels.([[ensemble-cognition-philosophy-ai-education]]) Il remet en cause le « paradigme de la conscience » (les hypothèses d'autonomie, de conscience et de stabilité) et articule cinq caractéristiques — agence distribuée, centralité dynamique, orchestration cognitive, intégération multi-représentationnelle et commutation sensible au contexte — tout en distinguant l'**agence fonctionnelle** de l'IA de la responsabilité morale.
- **Croissance [[self-directed-learning|autodirigée]] / A2PL.** Une extension de l'[[self-regulated-learning|apprentissage autodirigé]] intègre l'IA générative aux [[learning-analytics|analytiques de l'apprentissage]] pour cultiver la **croissance autodirigée**, opérationnalisée par le modèle Aspire to Potentials for Learners (A2PL).([[self-directed-growth-generative-ai-learning-analytics]]) Elle reconfigure les aspirations de l'apprenant (humaniste), la pensée complexe (constructiviste) et l'auto-évaluation (pragmatique) en une compétence unique, positionnant l'IA générative comme un étayage collaboratif non prescriptif plutôt qu'un fournisseur de contenu.
- **Sur-généralisation trompeuse.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren et Stamper (2026)]] étendent la tradition ACT-R / Knowledge-Learning-Instruction en théorisant quand l'exactitude observée masque une compréhension conditionnelle incomplète : les apprenants compilent une production sur-généralisée qui omet une contrainte d'application tout en performant correctement — un mode d'échec que les systèmes adaptatifs de maîtrise, et même l'instruction traditionnelle, peuvent manquer à moins de tester *quand s'abstenir* d'une action.
- **Théorie KLI exécutable.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger et Carvalho (2025)]] ancrent le cadre Knowledge-Learning-Instruction dans un modèle computationnel exécutable (le cadre Apprentice Learner avec un mécanisme de mémoire de type ACT-R) qui reproduit une interaction de croisement dans les données humaines : la pratique pure favorise la mémoire des faits verbatim (en retardant l'oubli) tandis que la pratique intégrant des exemples favorise l'induction de compétences généralisables. Parce que la théorie KLI lie la connaissance constante (faits) aux processus de mémoire et la connaissance variable (compétences) à l'induction, le résultat est une interaction contenu–traitement prédite plutôt qu'une contradiction entre les recommandations sur les tests et sur les exemples travaillés — et le succès du modèle seulement en présence d'un mécanisme de mémoire démontre que la pratique et les exemples jouent des rôles distincts et complémentaires.
- **L'incarnation comme défi ontologique au paradigme de l'IA.** [[videla-embodied-ai-education-choreography|Videla, Penny et Ross (2026)]] soutiennent qu'un fossé ontologique sépare la cognition incarnée et énactive de l'idiome représentationnel qu'incarne l'IA, de sorte que l'IA devrait être décentrée comme centre épistémique plutôt que traitée comme un outil neutre.

### Comment la base de connaissances organise ce fil

Plutôt que de traiter les théories de l'apprentissage comme une philosophie abstraite, la base de connaissances ancre chacune dans la recherche en IA en éducation qui l'utilise. Les pages [[constructivist|constructivisme]] et [[behaviorism|béhaviorisme]] documentent comment les conceptions d'IA incarnent (ou trahissent) chaque théorie ; la théorie de la charge cognitive, l'[[self-regulated-learning|apprentissage autorégulé]], la [[metacognition|métacognition]] et le [[transfer-of-learning|transfert d'apprentissage]] relient la théorie à des mécanismes et résultats spécifiques de l'IA. Cela reflète la manière dont la base de connaissances traite d'autres domaines parapluies comme la [[feedback|rétroaction]] et l'[[assessment|évaluation]] — un système cohérent de concepts en interaction plutôt que des pages isolées.

### Théories de l'apprentissage et « éducation à propos de l'IA »

Les théories de l'apprentissage apparaissent aussi comme contenu dans les programmes de [[ai-literacy|littératie en IA]] : les apprenants étudient le béhaviorisme, le cognitivisme, le constructivisme et le connexionnisme pour comprendre les hypothèses [[pedagogy|pédagogiques]] derrière les outils qu'ils utilisent.([[generativism-learning-theory]]) Enseigner ce fil donne aux étudiants (et aux éducateurs) le vocabulaire pour critiquer pourquoi un produit d'IA est construit comme il l'est — et si ses mécaniques servent l'objectif d'apprentissage visé.

- **L'agent médiationnel.** Warschauer, Tate et Ritchie (2026) soutiennent que l'IA générative rompt la distinction socioculturelle entre moyens médiationnels et interaction sociale, proposant l'*agent médiationnel* — un système qui médie à la fois l'action et génère des contributions contingentes et non imputables, occupant un espace hybride entre un outil et un partenaire social. Cela produit cinq habitudes de participation centrées sur l'humain (primauté de la cognition humaine, [[student-engagement|engagement]] intentionnel, agence de supervision, vigilance épistémique, autorégulation réflexive).([[generative-ai-mediational-agent-sociocultural-2026]])

### Théories proposées pour l'ère de l'IA

Aux côtés des familles classiques, la base de connaissances documente des théories écrites spécifiquement pour l'apprentissage avec des systèmes d'IA, et celles-ci portent les implications de conception que les théories plus anciennes laissent ouvertes. L'[[yan-agentivism-learning-theory-ai-2026|agentivisme (Yan et Gašević 2026)]] en est un exemple de portée moyenne : il définit l'apprentissage comme une croissance durable de la capacité humaine plutôt que comme l'accomplissement réussi d'une tâche, nomme quatre mécanismes (agence déléguée, surveillance et vérification épistémiques, intériorisation reconstructive, et transfert sous soutien réduit), et énonce six propositions testables, parmi lesquelles que le soutien d'IA préservant la responsabilité de l'apprenant dans le cadrage des problèmes, la fixation des critères et la justification produit un apprentissage plus fort qu'un soutien qui livre les réponses.

La **Symbiose pédagogique** d'[[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]] formule une affirmation ontologique plus forte : l'apprenant est une entité *post-humaine* dont la cognition est hybride plutôt qu'assistée par l'outil, organisée par quatre principes : délestage et augmentation cognitifs, co-construction épistémique, symbiose métacognitive, et formation dynamique de l'identité ; opérationnalisée par une grille de portfolio symbiotique et un rôle d'enseignant « chorégraphe cognitif » ; elle est explicitement non testée.

## Concepts liés

- [[behaviorism]]
- [[cognitive-psychology]]
- [[constructivist]]
- [[metacognition]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[self-determination-theory]]
- [[self-efficacy]]
- [[motivation]]
- [[sociocultural-learning]]
- [[scaffolding]]
- [[transfer-of-learning]]
- [[learning-gains]]
- [[desirable-difficulties]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[embodied-learning]]
- [[cognitive-offloading]]
- [[learning-design]]
- [[learning-sciences]]
- [[philosophy-of-ai-in-education]]
- [[ai-education]]
- [[pedagogy]] — Parapluie : pédagogies et stratégies d'enseignement en IA éducative

## Articles liés

- [[yan-agentivism-learning-theory-ai-2026]] — Une théorie de l'apprentissage de portée moyenne pour l'interaction humain-IA, avec quatre mécanismes et six propositions testables (Yan et Gašević 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Sur-généralisation trompeuse : la maîtrise adaptative peut arrêter la pratique avant que les apprenants ne sachent quand s'abstenir d'une action (An, McLaren et Stamper 2026)
- [[airis-hybrid-human-ai-cognition-2026]] — AI-Augmented Inquiry and Regulation in Hybrid Systems (AIRIS)
- [[voicu-ai-interpretive-cognition-ssh-2026]]
- [[ai-cognitive-partner-co-regulation-learning]] — Positionne l'IA comme partenaire cognitif dans la corégulation humain-IA ; cadre développemental sur l'ensemble de la vie
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition : un cadre philosophique qui reconceptualise la pensée comme interaction humain–IA
- [[self-directed-growth-generative-ai-learning-analytics]] — Croissance autodirigée et modèle A2PL étendant l'apprentissage autodirigé avec l'IA générative
- [[generativism-learning-theory]] — Propose une nouvelle théorie de l'apprentissage pour l'ère de l'IA générative, revisitant les quatre classiques
- [[ai-vocational-education-training-review]] — Écart théorie-pratique constructivisme/béhaviorisme documenté dans l'IA pour l'EFP
- [[genai-educational-outcomes-meta-analysis]]
- [[elsayed-pedagogical-symbiosis-posthuman-learner]]
- [[videla-embodied-ai-education-choreography]]
- [[generative-ai-mediational-agent-sociocultural-2026]] — Generative AI as a Mediational Agent
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Language Learning
- [[rachatasumrit-example-problem-ratio-2026]]
