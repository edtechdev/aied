---
title: Connaissances antérieures
created: "2026-08-22T01:20:00-04:00"
updated: "2026-10-10T03:24:46-04:00"
type: concept
foundations: [learning-design]
pedagogy: [constructivist, learning-theories, metacognition, prior-knowledge, scaffolding]
technology: [personalized-learning, student-modeling]
confidence: high
translation_of: concepts/prior-knowledge
source_updated: "2026-10-01T18:49:55-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Connaissances antérieures** — les connaissances, compétences, croyances et modèles mentaux existants qu'un apprenant apporte à une nouvelle tâche d'apprentissage. C'est le prédicteur le plus puissant de l'apprentissage ultérieur : l'information nouvelle est interprétée à travers — et intégrée à — ce que l'apprenant sait déjà, si bien qu'un enseignement qui active et s'appuie sur les connaissances antérieures produit un apprentissage plus solide et plus durable qu'un enseignement qui traite chaque apprenant comme une page blanche. Dans l'[[ai-education|IA en éducation]], les connaissances antérieures sont centrales pour le [[student-modeling]] (adapter l'[[personalized-learning|enseignement]] à l'état actuel de l'apprenant), pour le principe [[constructivist]] selon lequel la connaissance est activement construite par-dessus les modèles mentaux existants, et pour le risque que des outils d'IA qui pré-récupèrent et font remonter des contenus contournent la [[retrieval-spacing-interleaving|pratique de récupération]] qui active les connaissances antérieures.

## Questions à examiner

- Qu'avez-vous appris en profondeur, et qu'avez-vous eu du mal à apprendre ? Quelle part de la différence tenait à ce que vous saviez déjà au moment de commencer ?
- Avoir des connaissances antérieures ne suffit pas — il faut les récupérer et les relier activement. Quand le fait de vous rappeler ce que vous saviez déjà (ou l'échec à le faire) a-t-il changé la qualité de votre apprentissage de quelque chose de nouveau ?
- Cette page dit que les connaissances antérieures peuvent *interférer* lorsqu'elles sont fausses (une idée fausse). Pouvez-vous penser à une croyance que vous entreteniez et qui a rendu plus difficile l'apprentissage d'une information nouvelle et correcte ?
- Une IA générative qui pré-récupère les réponses peut contourner la pratique de récupération qui active les connaissances antérieures. Comment un outil conçu pour vous aider à apprendre pourrait-il en réalité vous empêcher de vous rappeler ce que vous savez ?
- Si une IA doit estimer votre état de connaissances antérieures pour personnaliser, que se passe-t-il lorsque cette estimation est fausse ? À quel point êtes-vous confiant qu'un système puisse savoir avec précision ce que vous savez déjà ?
- En quoi « activer les connaissances antérieures » diffère-t-il du simple fait de poser une question aux étudiants avant d'[[teacher-role|enseigner]] ? Qu'est-ce qui rendrait cette activation propre à approfondir l'apprentissage qui suit ?

## Introduction

L'activation des connaissances antérieures est l'un des résultats les plus robustes des [[learning-sciences|sciences de l'apprentissage]] : les apprenants n'absorbent pas la matière nouvelle dans le vide, ils la projettent sur des schémas existants, et la qualité de cette projection détermine la rétention et le [[transfer-of-learning|transfert]]. Le concept sous-tend les organisateurs avancés d'Ausubel, l'activation des connaissances antérieures avant tout nouvel enseignement, la pratique de récupération comme forme d'activation et de renforcement de ce qui est connu, et l'[[assessment|évaluation diagnostique]] de ce que les apprenants savent déjà. À l'ère de l'IA, les connaissances antérieures ont gagné en urgence parce que l'[[generative-ai|IA générative]] peut soit *soutenir* l'activation (en [[prompt-engineering|invitant]] les apprenants à se rappeler et à relier ce qu'ils savent), soit la *contourner* entièrement (en fournissant instantanément une réponse ou un contenu pré-récupéré que l'apprenant n'a jamais eu à récupérer ni à intégrer).

## Le rôle des connaissances antérieures

- **C'est le prédicteur le plus puissant de l'apprentissage.** Des décennies de [[research-methods-aied|recherche]] montrent que ce qu'un apprenant sait déjà est corrélé aux [[learning-gains|résultats d'apprentissage]] plus fortement que presque tout autre facteur, parce que l'information nouvelle est encodée relativement aux modèles mentaux existants. Les systèmes d'IA qui s'adaptent à l'état de connaissances antérieures de chaque apprenant recèlent donc une promesse particulière d'efficience et de [[transfer-of-learning|transfert]].
- **L'activation importe, pas seulement la possession.** Avoir des connaissances antérieures ne suffit pas — elles doivent être activement récupérées et reliées à la matière nouvelle. C'est pourquoi « activer les connaissances antérieures » est un geste [[pedagogy|pédagogique]] standard, et pourquoi la pratique de récupération (se rappeler ce que l'on sait avant d'y ajouter) améliore l'apprentissage au-delà d'une simple ré-exposition.
- **Elles ne prédisent pas toujours qui accomplit le travail qui produit l'apprentissage.** Dans une étude de cinq jours sur l'apprentissage par l'enseignement auprès de 23 tuteurs de collège, les scores aux tests antérieurs n'ont pas prédit la part de réponses de construction de connaissances qu'un tuteur produisait, et les tuteurs à faibles connaissances antérieures qui construisaient des connaissances ont fini statistiquement au niveau de leurs pairs à fortes connaissances antérieures ([[knowledge-building-tutor-learning-2026|Ameen et al., 2026]]).
- **Elles façonnent l'interprétation.** Les apprenants interprètent l'information nouvelle à travers ce qu'ils croient déjà. Lorsque ces croyances sont fausses ([[misconceptions]]), les connaissances antérieures peuvent *interférer* avec l'apprentissage, ce qui explique pourquoi l'enseignement doit faire émerger et traiter les idées fausses plutôt que de présupposer un point de départ neutre.
- **Elles animent la modélisation de l'étudiant.** Pour personnaliser, un système d'IA doit estimer l'état de connaissances antérieures de l'apprenant — le fondement du [[knowledge-tracing|traçage des connaissances]], de la modélisation de l'étudiant et du [[scaffolding]] adaptatif. La qualité de ces estimations détermine si l'adaptation est véritablement utile ou trompeuse.
- **Le contenu de connaissance détermine quel processus la pratique recrute.** Le fait que l'apprentissage repose sur la mémoire ou sur l'induction est fixé par la structure de connaissances antérieures de la cible : [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger et Carvalho (2025)]] suivent le cadre [[learning-theories|KLI]] pour distinguer les composants de connaissance à conditions et réponses constantes (les faits, acquis par la mémoire et la pratique de récupération) de ceux à conditions et réponses variables (les compétences, acquises par l'induction et la généralisation à des entrées nouvelles) — ce qui explique pourquoi le dosage optimal d'exemples résolus et de pratique diffère entre contenu factuel et contenu de compétence.

## Les connaissances antérieures à l'ère de l'IA

L'IA générative a fait des connaissances antérieures une considération centrale de conception plutôt qu'une variable d'arrière-plan :

- **Le risque de contournement.** L'[[agentic-ai-pedagogical-best-practice-2026|IA agentique proactive]] qui pré-récupère et fait remonter des contenus peut contourner la pratique de récupération qui active les connaissances antérieures — l'apprenant n'a jamais à se rappeler ni à intégrer ce qu'il sait avant de recevoir une réponse. C'est l'un des six risques pédagogiques identifiés dans le cadre de bonnes pratiques pour l'éducation [[agentic-ai|agentique]], et cela rejoint directement l'[[cognitive-offloading|hyper-dépendance]] et le principe des [[desirable-difficulties]] selon lequel un traitement exigeant soutient l'apprentissage durable.
- **Les connaissances antérieures façonnent le schéma du délestage, pas seulement les résultats.** Dans une étude d'écriture de synthèse, le groupe à fortes connaissances et faible délestage a rédigé 80 % de sa dissertation, contre 2 % pour le groupe au délestage le plus lourd (moyenne de 25,1 consignes) ; le volume de consignes suivait donc les connaissances antérieures plutôt que l'effort ([[cognitive-offloading-llm-synthesis-writing|Poquet et al. (2026)]]).
- **L'écart de bénéfice se creuse.** Parce qu'un usage productif de l'IA dépend de ce qu'un apprenant sait déjà, les étudiants dotés de connaissances antérieures plus solides l'exploitent mieux, tandis que les novices sont les plus susceptibles de la traiter comme un substitut — un risque distributionnel qui peut creuser les écarts de réussite même lorsque l'accès est égal ([[lodge-loble-cognitive-offloading-2026|Lodge & Loble (2026)]]).
- **L'amorçage et l'activation comme conception.** Les [[genai-mindtool-generative-learning|approches GenAI comme mindtool]] « amorcent délibérément la tâche d'apprentissage » en activant les connaissances antérieures et la curiosité par des questions incitatives, des visuels générés par l'IA et des analogies (par ex., « Que savez-vous déjà des écosystèmes ? ») avant d'introduire un contenu nouveau — modélisant la trajectoire de récupération-et-intégration plutôt que celle de la fourniture de réponses.
- **Modélisation de l'étudiant et mémoire.** Les systèmes d'IA modélisent de plus en plus l'état de connaissances antérieures des apprenants et leur mémoire longitudinale (par ex., en intégrant l'état de connaissances antérieures et les courbes d'oubli dans la mémoire du tutorat), permettant la répétition espacée et la révision adaptative qui s'appuient sur ce que chaque apprenant sait déjà. ([[nie-personavlm-long-term-personalization-2026]])
- **Un levier de personnalisation-adaptation.** Parce que les apprenants diffèrent largement par leurs connaissances antérieures, l'adaptation doit être accordée à l'individu — un argument central en faveur d'un [[personalized-learning]] et d'un [[scaffolding]] adaptatif qui rencontrent les apprenants à leur état réel actuel plutôt qu'à une hypothèse de moyenne de classe.

## Implications pour la conception de l'IA en éducation

1. **Activer avant de fournir.** Concevoir les interactions avec l'IA de manière à inviter les apprenants à récupérer et à formuler ce qu'ils savent déjà avant de fournir un contenu ou des réponses nouveaux — préservant la pratique de récupération plutôt qu'en la contournant.
2. **Modéliser l'état de connaissances antérieures de l'apprenant.** Bâtir la modélisation de l'étudiant et l'adaptation sur les connaissances antérieures estimées (et leurs idées fausses), et non sur une uniformité présupposée, afin de rendre la personnalisation véritablement réactive.
3. **Faire émerger et traiter les idées fausses.** Lorsque les connaissances antérieures sont incorrectes, elles interfèrent ; l'enseignement devrait susciter et corriger les idées fausses plutôt que d'ajouter un contenu nouveau par-dessus des fondations défectueuses.
4. **Peser le compromis de friction.** Activer les connaissances antérieures ajoute une difficulté souhaitable (récupération, intégration) que les réglages par défaut suppresseurs de friction de l'IA tendent à effacer — une tension à gérer délibérément plutôt qu'à laisser l'automatisation la résoudre par défaut.

## Concepts liés
- [[learners]] — Les apprenants : le parapluie des concepts du côté de l'apprenant
- [[constructivist]]
- [[personalized-learning]]
- [[student-modeling]]
- [[misconceptions]]
- [[icap-framework]]
- [[knowledge-tracing]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[transfer-of-learning]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]
- [[learning-theories]]
- [[productive-failure]] — Productive Failure
- [[retrieval-spacing-interleaving]] — comment ce qu'un apprenant sait déjà détermine ce que la pratique de récupération peut faire

## Articles liés

- [[agentic-ai-pedagogical-best-practice-2026]] — La tension entre automatisation et apprentissage (risque lié à l'activation des connaissances antérieures)
- [[genai-mindtool-generative-learning]] — L'IA générative comme mindtool : amorçage et activation des connaissances antérieures
- [[nie-personavlm-long-term-personalization-2026]] — Modélisation et mémoire de l'étudiant par LLM
- [[lodge-loble-cognitive-offloading-2026]] — Lodge & Loble sur le délestage cognitif
- [[cognitive-offloading-llm-synthesis-writing]] — Le délestage cognitif dans l'écriture de synthèse par LLM
- [[bridging-instructional-design-framework-math]] — Un cadre de conception pédagogique pour les mathématiques
- [[knowledge-building-tutor-learning-2026]] — la construction de connaissances plutôt que les connaissances antérieures prédit l'apprentissage des tuteurs, et les tuteurs à faibles connaissances antérieures qui construisent des connaissances rattrapent leur retard
- [[rachatasumrit-example-problem-ratio-2026]]
