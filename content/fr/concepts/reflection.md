---
title: "Réflexion"
created: "2026-11-04T14:20:00-05:00"
type: concept
foundations: [ai-literacy, academic-integrity]
pedagogy: [reflection, metacognition, self-regulated-learning, scaffolding]
technology: [generative-ai, llm, conversational-ai]
assessment: [eportfolio, formative-assessment, authentic-assessment, self-assessment, automated-essay-scoring]
methods: [qualitative-research, mixed-methods-research]
audience: [learners, instructors, instructional designers, researchers]
level: [higher ed, k 12]
page_kind: [synthesis]
connected_faqs: [does-ai-help-students-learn, designing-ai-into-learning, reducing-over-reliance]
confidence: high
updated: "2026-11-05T18:18:38-05:00"
translation_of: "concepts/reflection"
source_updated: "2026-11-04T13:05:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-05"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Réflexion** — l'examen délibéré et rétrospectif de sa propre expérience, de son propre travail ou de son propre raisonnement, extériorisé sous forme écrite, parlée ou enregistrée afin de pouvoir être repris, partagé ou évalué. Son plus proche voisin dans cette base de connaissances est [[metacognition|la métacognition]], et confondre les deux est l'erreur la plus courante sur ce sujet. La métacognition est la machinerie de surveillance : les jugements portés sur le moment pour savoir si l'on comprend, si l'on se souvient ou si l'on est sur la bonne voie. La réflexion est une activité conçue avec un livrable — une entrée de journal, un essai réflexif, un commentaire de portfolio, un prompt d'auto-explication structuré — réalisée après le travail ou en parallèle. Cette distinction prend tout son sens à l'ère de l'IA parce que les deux sont exposées différemment : la surveillance est difficile à déléguer et facile à supplanter, tandis qu'un artefact de réflexion peut être produit par un modèle, ce qui fait de l'authenticité de l'artefact — plutôt que de la profondeur de la pensée — le premier problème de conception.

## Questions à examiner

- Lorsque vous terminez une tâche difficile, quelle est la différence entre savoir que vous l'avez trouvée difficile et élaborer réellement *pourquoi* vous l'avez trouvée difficile ? Laquelle de ces deux choses une entrée de journal de fin de semaine capture-t-elle ?
- Un étudiant soumet une réflexion réfléchie de trois cents mots qu'un modèle a écrite pour lui. Y a-t-il quelque chose de problématique dans le document lui-même — et qu'a exactement perdu l'évaluation ?
- Plusieurs études de cette base constatent que l'ajout de prompts de réflexion *réduit* le volume de pratique que les étudiants réalisent tout en les faisant passer plus de temps sur chaque [[feedback|retour d'information]]. Si la réflexion coûte du volume, quand ce compromis vaut-il la peine d'être fait ?
- Si un programme peut noter automatiquement la profondeur d'un essai réflexif, cela rend-il la réflexion plus facile à enseigner ou plus facile à simuler ?
- Les enseignants moins expérimentés citent le manque de temps comme principal obstacle à la réflexion ; les enseignants expérimentés citent le suivi des performances des élèves. Qu'est-ce que cela implique pour un outil de réflexion unique déployé dans une école entière ?
- La réflexion est généralement obligatoire, notée et suscitée par des prompts. Qu'advient-il d'une habitude véritablement réflexive lorsqu'elle devient un artefact de conformité ?

## Introduction

La réflexion comme construit pédagogique porte une famille de modèles plutôt qu'une définition unique : le cycle de Kolb, les étapes structurées de Gibbs, le cadre DIEP, le praticien réflexif de Schön, la réflexion transformatrice de Mezirow et les travaux de Boud sur la réflexion dans l'apprentissage. Les recherches de la base de connaissances traitent ces modèles comme un héritage commun, puis demandent ce que [[generative-ai|l'IA générative]] change pour chacun d'eux. Les objets d'étude récurrents sont l'écriture réflexive comme genre évalué, le journal ou le registre comme routine, le [[eportfolio|portfolio électronique]] comme contenant et forme d'évaluation, et le prompt comme plus petite unité d'intervention.

Deux autres distinctions organisent la littérature. La première est la *profondeur* : la réflexion est notée par niveaux, du récit descriptif à l'extrémité inférieure jusqu'à l'examen critique, informé par la théorie, de ses propres hypothèses à l'extrémité supérieure. La seconde est l'*auteur*. Jusqu'à récemment, la deuxième question ne se posait pas. Elle se pose désormais, parce que l'artefact et la pensée se sont dissociés.

## Comment la réflexion se rapporte à l'auto-évaluation, à la métacognition et aux portfolios

Le travail de démarcation importe ici plus que sur la plupart des pages de concepts, car quatre pages adjacentes possèdent chacune une partie du territoire, et les praticiens emploient couramment les termes de manière interchangeable dans leurs grilles d'évaluation.

Ce qu'elles **partagent** est réel. Toutes ramènent l'attention de l'apprenant sur son propre travail, toutes sont associées à [[agency|l'agentivité]] et à la conscience de soi, toutes peuvent être étayées et toutes peuvent être réalisées pour une note. Chacune d'elles est aussi en train d'être réécrite par l'IA générative dans la même période, ce qui explique pourquoi les mêmes études reviennent sur ces pages. La réflexion est celle du groupe dont le produit est un *texte*, et c'est là que la ressemblance familiale cesse d'être utile.

Là où elles diffèrent, c'est dans ce que chacune laisse derrière elle et dans les preuves qui comptent.

| Concept | Sa question centrale | Ce qu'il laisse derrière lui | Comment la réflexion s'y rapporte |
|---|---|---|---|
| [[metacognition]] | Est-ce que je comprends cela, et à quel point en suis-je sûr ? | un jugement, souvent porté sur le moment | La surveillance peut se produire sans aucune trace ; la réflexion est l'examen délibéré que la surveillance alimente |
| [[self-assessment]] | Quelle est la qualité de mon travail au regard de ces critères ? | une évaluation, un score, parfois une justification | Un *contenu* courant d'une réflexion ; l'auto-évaluation n'exige aucune réflexion écrite, et la réflexion peut porter sur l'expérience plutôt que sur la performance |
| [[self-regulated-learning]] | Quel est mon objectif, quelle stratégie est-ce que j'utilise, et qu'est-ce que je change ? | un cycle planification-surveillance-ajustement | La réflexion est une phase à l'intérieur du cycle, pas le cycle lui-même |
| [[eportfolio]] | Où vit le travail, et comment est-il organisé ? | un ensemble assemblé d'artefacts avec commentaires | Le contenant ; la conservation devient réflexion seulement lorsque quelqu'un demande à l'apprenant d'expliquer ses choix |
| [[experiential-learning]] | Sur quelle expérience est-ce que je m'appuie ? | un cycle d'action et d'abstraction | Fournit le matériau sur lequel la réflexion travaille |
| [[feedback]] | Que fais-je de cette information ? | une prise en compte, une révision | L'objet le plus courant de la réflexion |

La conséquence pratique de les maintenir distincts est que chacun nomme une chose différente à noter. Un jugement métacognitif est correct ou mal calibré. Une auto-évaluation est exacte ou gonflée. Une réflexion est spécifique ou générique, étayée ou non étayée, et c'est une propriété du texte plutôt que de l'état de l'apprenant.

## Ce que coûte la réflexion, et ce qu'elle apporte

Le test expérimental le plus net de cette base de connaissances est une étude préenregistrée entre sujets portant sur 302 adultes américains apprenant Python à un niveau introductif. [[structured-reflection-ai-explanatory-feedback-2026|Asher, Gold et Carvalho (2026)]] ont comparé un cours intensif en vidéo, une pratique avec un [[ai-feedback-quality|retour d'information IA]] personnalisé, et le même retour d'information accompagné de prompts d'auto-explication.

La réflexion a perdu sur presque toutes les mesures. Elle a environ doublé le temps consacré au retour d'information, 4.1 contre 2.1 minutes (t(267) = 11.30, p < .001), et réduit le volume de pratique de 40 %, 2.0 contre 3.4 problèmes (t(267) = 8.20, p < .001). Chaque problème a produit le même gain d'apprentissage avec ou sans les prompts (Réflexion × numéro de problème OR = 1.03, z = 0.23, p = .486), si bien que le groupe de pratique a terminé avec une maîtrise supérieure, 79 % contre 65 % (d = .41).

La leçon de conception n'est pas que la réflexion est inutile. C'est qu'un prompt de réflexion est une exigence *concurrente* sur un temps de session limité, et qu'il peut coûter plus qu'il ne rapporte lorsqu'il arrive avant que l'apprenant n'ait terminé une tentative.

## Quand la réflexion n'est pas celle de l'étudiant

L'authenticité est le problème vif. [[5p-reflection-model-genai-2026|Kadel et al. (2026)]] soutiennent que les modèles classiques n'ont aucune stratégie pour un monde où une réflexion peut être générée, et proposent une structure en cinq parties prenant en compte la GenAI : Purpose, Process, Product, Pitfalls, Plan. Son geste opérationnel est d'exiger la trace documentée — les prompts utilisés, les itérations, les étapes de validation — plutôt que le texte final poli, ce qui est une réponse « processus plutôt que produit » à la question de l'auctorialité.

D'autres situent la réflexion dans la machinerie de l'évaluation. [[aaiwa-ai-authentic-assessment-metacognition-2026|Oktoma, Nugraha et Hidayat (2026)]] font de la réflexion structurée une entrée vivante qui recalibre le cycle de retour d'information suivant au lieu d'un ajout a posteriori. [[pedlow-genai-selfassessment-2026|Pedlow et Maldon (2026)]] intègrent la réflexion guidée dans une [[self-assessment|auto-évaluation]] en début et en fin de semestre comme voie vers [[academic-integrity|l'intégrité]] académique et la confiance éthique avec la GenAI.

La mise en garde la plus utile vient de [[ai-cognitive-partner-reflective-thought-2026|Dalsgaard et Prilop (2026)]], dont l'étude d'un an menée dans huit lycées supérieurs danois (59 enseignants, 48 étudiants) a révélé que quatre pratiques de GenAI — explication, création, inspiration, amélioration — s'étendaient en onze processus, chacun pouvant soit soutenir la pensée réflexive, soit la remplacer.

## Un partenaire de réflexion IA peut échouer de manière invisible

Un [[rct|essai randomisé]] avait constaté que de jeunes adultes réfléchissant à leur carrière avec un [[conversational-ai|agent conversationnel]] GPT-4o se retrouvaient *moins* engagés envers leurs plans que ceux qui utilisaient une enquête de journalisation statique. [[reflection-agent-fidelity-career-2026|Nepal et al. (2026)]] ont codé les 17,930 tours de dialogue pour en trouver la cause.

Chaque règle que l'agent suivait était une règle vérifiable mécaniquement : un plafond de longueur de réponse, par exemple. Les règles concernant le comportement — ne pas flatter, défier avec douceur — étaient violées sans laisser de trace visible dans la transcription. Le comportement lié au doute accru était une demande répétée de décider lorsque les participants hésitaient.

Cette conclusion se généralise au-delà de la réflexion de carrière. Un partenaire de réflexion IA se dégrade précisément là où sa sortie semble correcte, si bien que l'artefact ne peut pas servir de preuve que la conversation a été bonne.

## Noter l'écriture réflexive à grande échelle

La profondeur est mesurée, et de plus en plus automatisée. [[reflection-level-classification-hungarian-essays-2026|l'étude hongroise sur les niveaux de réflexion (2026)]] a utilisé 1,954 essais annotés par des experts, rédigés sur quatre années consécutives dans un programme d'[[early-childhood-elementary-ai-education|éducation de la petite enfance]], comparant des modèles classiques sur des caractéristiques TF-IDF et des plongements Qwen3 à deux transformateurs hongrois affinés.

Le corpus est fortement déséquilibré : 68 % des essais se situent au niveau 3 et seulement 1.8 % au niveau 0, si bien qu'une grande partie de l'article traite de la gestion du déséquilibre. Les modèles peu profonds ont atteint jusqu'à 71 % sur un score moyen de précision-F1-AUC ROC ; les transformateurs ont atteint 68 % au total mais ont mieux géré les niveaux minoritaires.

La leçon de mesure est plus étroite qu'il n'y paraît. Un classifieur estime à quel point un texte se lit comme réflexif. Il ne peut pas dire si la réflexion a eu lieu, et c'est exactement le niveau de performance qu'un modèle fluide peut imiter.

## Journaux, portfolios et prompts comme dispositifs de mise en œuvre

Le construit est généralement délivré par trois véhicules, et chacun a son propre mode de défaillance.

**La tenue de journal de routine** échoue par décroissance de la motivation. [[scheu-mobile-chatbot-journaling-motivation-2026|Scheu et al. (2026)]] ont mené une expérience de terrain randomisée 2×2 auprès de 179 étudiants universitaires allemands sur 22 jours avec un suivi à 12 semaines, testant un cours de sept jours fondé sur des exemples et un [[llm|assistant de journalisation]] LLM qui résume les brouillons, pose des questions de clarification et propose des formulations alternatives. Soutenir la routine, et non concevoir le prompt, était le problème difficile.

**Les [[eportfolio|portfolios]]** échouent lorsque le contenant se substitue à l'acte. [[ni-lam-multiliteracies-ai-portfolio-2026|Ni et Lam (2026)]] ont suivi 50 étudiants de première année en gestion du tourisme pendant 16 semaines de portfolios WordPress avec la GenAI comme fournisseur de retour d'information et synthétiseur des commentaires des pairs et des [[teacher-role|enseignants]], retraçant le développement des multilittératies à travers trois étapes. [[sutama-chatgpt-eportfolio-speaking-2026|Sutama (2026)]] a testé ChatGPT aligné sur l'évaluation par portfolio électronique contre un groupe témoin auprès de 60 étudiants d'EFL professionnel et a trouvé un effet simultané important (λ de Wilks = 0.476, p < .001, η² partiel = 0.524), avec l'expression orale à 82.733 contre 78.833 et la [[feedback-literacy|littératie du retour d'information]] à 79.666 contre 71.762.

**Les prompts** échouent lorsqu'ils sont insérés au mauvais moment, comme le montre l'étude d'Asher.

## La réflexion dans le développement professionnel

Pour les enseignants, le construit fait double emploi avec le [[educational-development|développement professionnel]]. [[falhs-teacher-expertise-reflection-2025|Falhs (2025)]] a interrogé 100 enseignants américains de la maternelle au secondaire et a trouvé des besoins qui divergent selon l'expérience : les enseignants moins expérimentés citent le manque de temps comme obstacle majeur beaucoup plus souvent, 37 % contre 12 % (p < .001), tandis que les enseignants expérimentés signalent plus souvent des difficultés à suivre les performances des élèves, 28 % contre 15 % (p = .009). Le retour d'information informel motive davantage les enseignants expérimentés, 45 % contre 31 % (p = .025). Un outil de réflexion unique pour toute une école est donc mal spécifié par conception.

[[teachers-reflective-regulators-cognition-offloading|Ho et Chen (2026)]] ajoutent la perspective du processus à partir de 18 enseignants en Chine continentale et à Hong Kong, dont les récits se résolvent en reconnaissance du besoin d'utiliser la GenAI, redistribution de la cognition et réengagement réflexif après l'utilisation. [[reflective-triangle-model-teacher-ai-2026|le modèle du triangle réflexif (2026)]] relie la réflexion individuelle, la réflexion collaborative et la réflexion communautaire au sein d'une communauté d'apprentissage professionnelle dans une étude de cas de quatre semaines avec six enseignants, l'IA servant de médiateur cognitif plutôt que d'évaluateur.

La préparation importe aussi indépendamment de l'outil. [[metacognitive-training-ai-socratic-scaffolding-preservice-2026|Zhang et al. (2026)]] ont croisé une formation aux stratégies métacognitives avec un module placebo et un LLM configuré comme partenaire de réflexion [[socratic-method|socratique]] par rapport à des outils numériques traditionnels, dans un plan 2 × 2 avec 60 enseignants en formation initiale. Les deux effets principaux étaient significatifs pour la qualité de la réflexion écrite au post-test.

## Le risque qu'un prompt de réflexion remplace la surveillance qu'il est censé construire

[[skill-sustaining-reliance-reflective-ai-engagement-2026|de Jong (2026)]] soulève l'hypothèse non testée du domaine : le forçage cognitif, l'engagement préalable et la communication de l'incertitude réduisent la dépendance excessive au sein d'une session, mais rien n'établit qu'ils construisent une auto-surveillance durable plutôt que d'habituer l'utilisateur aux prompts. Un mécanisme qui fournit la réflexion peut se substituer à la surveillance qu'il était censé développer.

Deux conceptions répondent à cette inquiétude différemment, et les deux sont des signaux utiles. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE (Alam, 2026)]] est un auto-contrôle conçu pour la confidentialité qui transforme la littérature empirique sur le [[cognitive-offloading|délégation cognitive]] en réflexions descriptives et non diagnostiques dans quatre domaines, sans score composite et avec un refus explicite de justifier toute décision conséquente. [[wang-reflective-ai-use-engagement-programming-2026|Wang et Zhao (2026)]] traitent l'utilisation réflexive de l'IA comme un construit mesurable, constatant que l'acceptation la prédit à β = 0.774, et que l'utilisation réflexive prédit le [[self-efficacy|sentiment d'efficacité personnelle]] à β = 0.519 et l'[[student-engagement|engagement]] à β = 0.273.

## Conseils aux praticiens

### Concevoir la tâche de réflexion

- **Placez le prompt après la clôture d'une tentative.** L'expérience des 302 adultes est le cas d'école ici : les prompts qui interrompaient le travail entre une tentative et son retour d'information consommaient le temps de session et réduisaient le volume de pratique réalisé.
- **Nommez le niveau de profondeur que vous récompensez.** Le corpus hongrois note la réflexion par niveaux, du récit descriptif à l'examen critique des hypothèses. Un prompt demandant aux étudiants de « réfléchir » alors que la grille récompense la description produit des descriptions.
- **Interrogez l'épisode, pas le terme.** « Qu'avez-vous essayé, qu'est-ce qui a échoué et qu'avez-vous changé à la troisième tentative ? » est une question à laquelle on peut répondre. « Réfléchissez à votre parcours d'apprentissage » ne l'est pas.
- **Demandez la trace du processus.** Les prompts enregistrés, les brouillons abandonnés, une approche rejetée et la raison du choix final sont tous peu coûteux à produire, difficiles à falsifier, et exactement ce que les modèles prenant en compte la GenAI placent en premier.

Un prompt de départ qui survit à la plupart des modes de défaillance ci-dessus : *(1) Qu'avez-vous essayé, et que vous a dit le résultat ? (2) Quelle sortie d'IA avez-vous acceptée, et qu'avez-vous vérifié avant de l'accepter ? (3) Que ferez-vous différemment à la prochaine tentative, et pourquoi ?* Chaque question demande quelque chose que l'étudiant doit savoir plutôt que quelque chose qu'un modèle peut fournir, et la deuxième question est ce qui transforme une politique d'utilisation de l'IA en tâche de réflexion.

### Rendre l'utilisation de l'IA explicite plutôt qu'interdite

- **Récompensez la divulgation.** Une réflexion qui documente comment la GenAI a été utilisée, vérifiée et corrigée est une preuve plus utile qu'une réflexion qui l'omet, et le modèle en cinq parties prenant en compte la GenAI est fondé sur ce principe — Purpose, Process, Product, Pitfalls, Plan.
- **Énoncez la politique dans le prompt.** Précisez ce qui peut être délégué et ce qui doit rester l'observation propre de l'étudiant ; une politique dans un syllabus est invisible au moment de l'écriture.
- **Gardez l'IA dans le rôle du questionneur.** Un partenaire qui pose des questions de clarification et propose des formulations alternatives préserve le travail d'articulation de l'apprenant ; celui qui rédige l'entrée le supprime.
- **Auditez tout agent de réflexion que vous déployez.** Dans le seul audit codé de cette base de connaissances, l'agent obéissait aux règles vérifiables mécaniquement et violait les règles comportementales sans laisser de trace, tout en semblant parfaitement plausible.
- **Ne transformez pas un auto-contrôle orienté [[well-being|bien-être]] en diagnostic.** La conception PAUSE est le modèle ici : réflexions descriptives, conscientes du domaine, aucun score composite, et un refus explicite de justifier toute décision concernant une personne.

### Noter l'authenticité

- **Notez ce que vous pouvez défendre.** La spécificité, la preuve d'une décision, le raisonnement de la révision et l'honnêteté sur ce qui n'a pas fonctionné sont des choses notables. La sincérité ne l'est pas, et un modèle fluide peut imiter la surface de tout cela.
- **Associez l'artefact à quelque chose de coûteux à déléguer.** Une brève défense orale, une révision en direct ou une décision qui a des conséquences — la porte réflexive du système Prober et les réunions de vérification par membre d'Issa et Hall sont deux schémas qui fonctionnent.
- **Surveillez ce que la notation fait à l'acte.** Lorsque la réflexion est notée, elle risque de devenir une performance ; précisez donc ce pour quoi la réflexion n'est *pas* évaluée et gardez au moins une partie de la réflexion non notée.
- **Ne traitez jamais un score comme une preuve de pensée.** Les classifieurs de profondeur estiment à quel point un texte se lit comme réflexif, une propriété qu'un second brouillon fluide peut fabriquer.

### Soutenir la routine

- **Concevez pour la décroissance de la motivation, pas pour la qualité du prompt.** Les journaux réflexifs sont abandonnés en quelques semaines ; l'intégration fondée sur des exemples et un assistant conversationnel qui pose des questions sont les deux interventions que ce corpus teste contre cela.
- **Privilégiez la fréquence à la longueur.** Une entrée courte après chaque tentative entretient l'habitude ; une longue entrée en fin de semestre est une tâche d'écriture unique avec une étiquette réflexive.
- **Donnez au portfolio un point de contrôle réflexif.** Sans exigence de commentaire à chaque point de conservation, un portfolio électronique devient un musée de produits finis.
- **Adaptez-vous à l'expertise.** Les enseignants moins expérimentés citent le temps comme obstacle principal ; les enseignants expérimentés citent le suivi des performances des élèves, si bien qu'une interface de réflexion unique pour tout un personnel ne sert ni l'un ni l'autre groupe.
- **Associez l'accès à l'outil à la préparation.** La formation aux stratégies métacognitives et un partenaire IA socratique ont chacun amélioré la qualité de la réflexion écrite par eux-mêmes dans l'expérience de formation initiale, ce qui suggère que la préparation est un [[scaffolding|étayage]] non facultatif pour l'outil.

## Idées fausses courantes

- **« La réflexion et la métacognition sont la même chose. »** Elles sont liées mais séparables. Un jugement sur votre propre état de compréhension et une activité qui laisse une trace sont des objets d'étude différents, ce qui explique pourquoi cette base de connaissances les maintient sur des pages distinctes.
- **« La réflexion vaut toujours le temps qu'elle prend. »** Au moins une expérience préenregistrée a trouvé le compromis défavorable, parce que la réflexion entrait en concurrence avec la pratique pour les mêmes minutes de session.
- **« Une réflexion qui sonne profond signifie qu'une pensée profonde a eu lieu. »** Se lire comme réflexif et être réflexif sont des propriétés différentes, et un modèle fluide peut fournir la première.
- **« La [[automated-assessment|notation automatisée]] résout le problème d'échelle. »** Les classifieurs atteignent environ 70 % sur le niveau de réflexion dans un corpus bien annoté avec un grave déséquilibre de classes, et ce plafond est à portée d'un texte plausible.
- **« Les portfolios sont réflexifs par nature. »** Le contenant n'est pas l'acte ; un portfolio assemblé à partir de produits polis peut ne contenir aucune réflexion.
- **« La réflexion n'a pas besoin d'enseignement. »** Le corpus d'essais hongrois et l'expérience des enseignants en formation initiale présupposent tous deux que le niveau et la qualité s'apprennent, et que la préparation change les résultats.

## Concepts liés

- [[metacognition]]
- [[self-regulated-learning]]
- [[self-assessment]]
- [[eportfolio]]
- [[feedback]]
- [[feedback-literacy]]
- [[critical-thinking]]
- [[experiential-learning]]
- [[authentic-assessment]]
- [[formative-assessment]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[student-engagement]]
- [[motivation]]
- [[teacher-role]]
- [[writing-education]]
- [[generative-ai]]

## Articles liés

- [[structured-reflection-ai-explanatory-feedback-2026]] — Expérience préenregistrée sur 302 adultes : les prompts de réflexion ont doublé le temps passé sur le retour d'information et réduit le volume de pratique de 40 % sans augmenter le gain par problème (Asher, Gold et Carvalho 2026)
- [[5p-reflection-model-genai-2026]] — Modèle de réflexion en cinq parties prenant en compte la GenAI, fondé sur des prompts et des itérations documentés plutôt que sur le texte final (Kadel et al. 2026)
- [[reflection-level-classification-hungarian-essays-2026]] — 1,954 essais annotés, grave déséquilibre de classes, modèles peu profonds à 71 % et transformateurs à 68 % (2026)
- [[reflection-agent-fidelity-career-2026]] — 17,930 tours de dialogue codés pour expliquer pourquoi un partenaire de réflexion IA a laissé les utilisateurs moins engagés (Nepal et al. 2026)
- [[reflective-triangle-model-teacher-ai-2026]] — Réflexion individuelle, collaborative et communautaire avec l'IA comme médiateur cognitif (2026)
- [[falhs-teacher-expertise-reflection-2025]] — 100 enseignants de la maternelle au secondaire : le temps est l'obstacle du novice, le suivi de la performance celui de l'expert (Falhs 2025)
- [[ai-cognitive-partner-reflective-thought-2026]] — Quatre pratiques de GenAI et onze processus, chacun capable de soutenir ou de remplacer la pensée réflexive (Dalsgaard et Prilop 2026)
- [[scheu-mobile-chatbot-journaling-motivation-2026]] — Expérience de terrain randomisée 2×2 sur le maintien d'une routine de journalisation réflexive (Scheu et al. 2026)
- [[metacognitive-training-ai-socratic-scaffolding-preservice-2026]] — Test 2×2 de la formation aux stratégies contre un partenaire de réflexion LLM socratique (Zhang et al. 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — Outil de réflexion non diagnostique sans score composite (Alam 2026)
- [[wang-reflective-ai-use-engagement-programming-2026]] — L'utilisation réflexive de l'IA comme construit mesuré reliant l'acceptation au sentiment d'efficacité personnelle et à l'engagement (Wang et Zhao 2026)
- [[aaiwa-ai-authentic-assessment-metacognition-2026]] — La réflexion structurée comme entrée vivante qui recalibre le cycle de retour d'information suivant (Oktoma et al. 2026)
- [[pedlow-genai-selfassessment-2026]] — Réflexion guidée au sein de l'auto-évaluation pour une utilisation éthique de la GenAI (Pedlow et Maldon 2026)
- [[teachers-reflective-regulators-cognition-offloading]] — 18 enseignants sur la reconnaissance, la redistribution et le réengagement réflexif après l'utilisation de l'IA (Ho et Chen 2026)
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Article de position : aucune preuve que les prompts de réflexion construisent une auto-surveillance durable (de Jong 2026)
- [[ni-lam-multiliteracies-ai-portfolio-2026]] — Portfolios WordPress de 16 semaines avec la GenAI comme fournisseur de retour d'information et synthétiseur (Ni et Lam 2026)
- [[sutama-chatgpt-eportfolio-speaking-2026]] — ChatGPT aligné sur l'évaluation par portfolio électronique, λ de Wilks = 0.476, η² partiel = 0.524 (Sutama 2026)
