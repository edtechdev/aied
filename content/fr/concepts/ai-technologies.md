---
title: "Technologies de l'IA"
created: "2026-08-19T18:10:00-04:00"
updated: "2026-11-13T19:05:00-05:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
translation_of: concepts/ai-technologies
source_updated: "2026-11-13T00:25:09-05:00"
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

> **Les technologies** — les modèles, architectures et méthodes qui font fonctionner les systèmes d'IA en éducation, et le concept parapluie de la couche technique. Là où la [[pedagogy|pédagogie]] et les [[learning-theories|théories de l'apprentissage]] portent sur la manière dont l'enseignement et l'apprentissage se produisent, et l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]] sur le point de savoir si l'IA fonctionne, le fil *technique* couvre les systèmes d'IA ([[llm|grands modèles de langue]], [[generative-ai|IA générative]], [[multimodal|modèles multimodaux]], [[educational-robotics|robots]]) et les techniques employées pour les construire, les contrôler et les déployer ([[prompt-engineering|ingénierie des invites]], [[rag|génération augmentée par la recherche documentaire]], [[reinforcement-learning|apprentissage par renforcement]], [[educational-nlp|TAL éducatif]], [[knowledge-graph|graphes de connaissances]], [[agentic-ai|orchestration agentique]]).

## Questions à examiner

- Bien enseigner ne suppose pas de savoir construire un LLM, mais les choix de modèle et de recherche documentaire qui sous-tendent un outil d'IA décident néanmoins de ce qu'il peut faire dans votre classe. Quelle est une manière dont la technologie sous-jacente d'un outil d'IA pourrait discrètement changer la façon dont vos étudiants apprennent, même si vous ne voyez jamais le code ?
- Une hypothèse courante est que le modèle est toute l'histoire — mais des techniques comme la génération augmentée par la recherche documentaire (RAG) et l'ingénierie des invites existent précisément pour contrôler et ancrer les productions des LLM. Avant de poursuivre la lecture, lorsque vous demandez à une IA d'être « plus exacte » ou d'« utiliser cette source », que croyez-vous qu'il se passe réellement sous le capot ?
- La RAG est décrite comme une technique centrale pour réduire l'hallucination et améliorer la sécurité. Pourquoi pensez-vous qu'aller chercher des connaissances pertinentes pour « ancrer » la réponse d'une IA importerait davantage pour l'éducation que pour, disons, une conversation informelle — et que pourrait-il mal se passer si cet ancrage échouait ?
- Les choix techniques incarnent des hypothèses pédagogiques : un tuteur construit sur une sollicitation socratique raisonne avec les apprenants, tandis qu'un modèle générateur de réponses peut simplement livrer les solutions. Pouvez-vous vous rappeler un outil d'IA que vous avez utilisé et qui semblait « supposer » une philosophie d'enseignement particulière — et cela concordait-il avec la manière dont vous vouliez réellement enseigner ou apprendre ?
- Au-delà de l'exactitude brute, les systèmes d'IA devraient être évalués sur la fiabilité, la pédagogie et l'équité. Quelle métrique phare soupçonnez-vous que la plupart des gens (y compris beaucoup d'éducateurs) retiennent par défaut pour juger si un outil d'IA « fonctionne », et pourquoi cette métrique pourrait-elle cacher plus qu'elle ne révèle ?
- L'IA agentique est décrite comme faisant passer l'IA « d'un outil qui répond aux invites à un collaborateur proactif ». Comment un système qui initie et orchestre de lui-même des flux de travail en plusieurs étapes pourrait-il changer ce dont vous, en tant qu'enseignant ou apprenant, êtes responsable — et qui le tient pour responsable ?

## Introduction

L'[[ai-education|IA en éducation]] fonctionne sur une pile technique spécifique, et la comprendre importe pour les [[teacher-role|éducateurs]] et les chercheurs, même lorsqu'ils ne construisent pas eux-mêmes les systèmes — parce que les choix techniques façonnent ce que l'IA peut et ne peut pas faire dans la classe, les risques qu'elle porte, et la manière de l'évaluer. La couche technique couvre les systèmes d'IA, les techniques qui les adaptent et les contrôlent, et la manière dont elle se relie à la pédagogie, à l'évaluation et à l'évaluation.

## Les systèmes d'IA en éducation

- **Les grands modèles de langue (LLM).** L'épine dorsale computationnelle de la plupart des [[ai-education|AIED]] modernes — les [[llm|LLM]] produisent un texte semblable à celui d'un humain pour le tutorat, l'évaluation et la génération de contenu, et sont la technologie la plus référencée dans le champ. L'[[llm-training-and-fine-tuning|entraînement et l'ajustement fin]] adaptent les LLM généraux à un usage éducatif.
- **L'IA générative.** La catégorie plus large de systèmes qui produisent du texte, du code, des images et d'autres contenus — l'[[generative-ai|IA générative]] (portée principalement par les LLM) est la technologie qui sous-tend la vague actuelle de recherche en [[ai-education|AIED]]. Voir aussi les [[multimodal|modèles multimodaux]] (texte, image, audio) et la [[simulation|simulation]].
- **Les robots et les systèmes [[embodied-learning|incarnés]].** Les [[educational-robotics|robots en éducation]] ajoutent une présence incarnée et souvent [[community-of-inquiry|sociale]] — des kits programmables pour la [[computational-thinking|pensée informatique]] et des robots humanoïdes ou sociaux pour le tutorat, la [[storytelling-in-education|narration]] et le jeu de rôle. La robotique est un fil technique distinct qui recoupe l'[[agentic-ai|IA agentique]] et la conception [[human-in-the-loop-ai|avec intervention humaine]].
- **Les systèmes fondés sur les connaissances.** Les [[knowledge-graph|graphes de connaissances]] et le [[educational-nlp|TAL éducatif]] représentent et traitent le savoir du domaine, de plus en plus combinés aux LLM pour un tutorat ancré et explicable.

## Les techniques et les méthodes

- **L'ingénierie des invites.** L'[[prompt-engineering|ingénierie des invites]] est la manière dont les éducateurs et les développeurs façonnent les productions des LLM — le mécanisme principal par lequel le délestage et le contrôle sont accomplis dans les interactions avec les LLM.
- **La génération augmentée par la recherche documentaire (RAG).** La [[rag|RAG (génération augmentée par récupération)]] ancre les productions des LLM dans des connaissances retrouvées, réduisant l'hallucination et améliorant l'exactitude — une technique centrale pour un déploiement éducatif [[pedagogical-safety|sûr]].
- **L'apprentissage par renforcement.** L'[[reinforcement-learning|apprentissage par renforcement]] entraîne des agents à optimiser leur comportement au fil du temps ; il est employé dans les [[adaptive-learning|systèmes adaptatifs]] et l'[[game-based-learning|apprentissage par le jeu]].
- **L'orchestration agentique.** Les systèmes d'[[agentic-ai|IA agentique]] planifient et exécutent des flux de travail en plusieurs étapes — orchestrant souvent plusieurs agents spécialisés (voir les [[agentic-ai|systèmes multi-agents]]) — et refaçonnent l'IA, d'un outil qui répond aux invites vers un collaborateur proactif.
- **La pile d'agents éducatifs accuse un retard sur la pointe.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] ont cartographié 474 études et ont constaté que les modèles de la série GPT et LangChain étaient dominants, tandis que l'orchestration d'outils gouvernée, la mémoire persistante et la planification à long horizon étaient largement absentes — et que seulement 138 des 474 (29%) puisaient dans la théorie éducative.
- **L'entraînement et l'adaptation des modèles.** L'[[llm-training-and-fine-tuning|entraînement des LLM et leur ajustement fin]], l'[[educational-llm-alignment|alignement éducatif]] et l'[[cstutorbench-slm-tutors|adaptation par de petits modèles de langue]] rendent les modèles généraux propres à l'éducation — bien que les preuves placent la [[rag|recherche documentaire]] et la [[prompt-engineering|rédaction d'invites]] devant l'entraînement dans l'ordre de décision, puisqu'une invite bien ancrée coûte moins cher qu'un modèle adapté.

## Comment la couche technique se relie au champ

Le fil technique est inséparable des autres thèmes du champ :

- **Pédagogie :** les choix techniques incarnent des hypothèses pédagogiques — un [[intelligent-tutoring|tuteur]] construit sur une sollicitation [[socratic-method|socratique]] raisonne avec les apprenants, tandis qu'un modèle générateur de réponses peut se rabattre par défaut sur la fourniture directe (voir les [[pedagogy|pédagogies et stratégies d'enseignement]]).
- **Évaluation :** l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]] et les [[benchmark|repères de référence]] déterminent si les systèmes d'IA fonctionnent réellement ; l'[[assessment|évaluation]] et l'[[automated-assessment|évaluation automatisée]] recourent à la pile technique pour noter et générer.
- **Usage responsable :** les techniques techniques sont centrales pour la [[reducing-ai-misuse|réduction des usages abusifs de l'IA]] — l'ancrage par la [[rag|RAG (génération augmentée par récupération)]], les [[guardrails|garde-fous]], l'[[scaffolding|étayage]] par [[prompt-engineering|rédaction d'invites]], et la [[human-in-the-loop-ai|supervision humaine]] façonnent le point de savoir si l'IA soutient ou sape l'apprentissage ([[cognitive-offloading]], [[hallucination-risk]]).

**L'attention de la recherche se concentre sur une tranche étroite de l'écosystème d'outils.** En cartographiant 85 outils d'IA face à la littérature STEM et d'ingénierie, [[beyond-chatgpt-stem-ai-tool-mapping-2026|Terkowsky et al. (2026)]] n'en ont trouvé que 36 visibles dans la recherche au total, l'[[conversational-ai|IA conversationnelle]] et les LLM représentant 73.7% des 927 connexions articles-outils, avec 23 publications dans un contexte de laboratoire établi.

## Implications pour l'IA en éducation

- **La littératie technique soutient l'usage critique :** comprendre les modèles et les techniques sous-jacents aide les éducateurs et les apprenants à bien utiliser l'IA et à l'évaluer de façon critique (voir l'[[ai-literacy|littératie en IA]]).
- **Choisir la technologie selon l'intention pédagogique :** le système et la technique d'IA devraient suivre la [[pedagogy|stratégie d'enseignement]], et non l'inverse.
- **Évaluer la couche technique :** la recherche sur l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]] et les [[benchmark|repères de référence]] évalue les systèmes d'IA sur la fiabilité, la pédagogie et l'[[equity-in-ai-education|équité]], et pas seulement sur l'exactitude phare.
- **Les robots et les agents font partie de la pile :** les systèmes [[educational-robotics|incarnés]] et [[agentic-ai|agentiques]] étendent le répertoire technique au-delà du texte — et apportent leurs propres considérations de conception et de sécurité.

## Idées fausses courantes

**« Le modèle est toute l'histoire. »** Des techniques comme la génération augmentée par récupération et la rédaction d'invites existent précisément pour contrôler et ancrer la production d'un LLM, et l'architecture autour du modèle détermine souvent s'il est utilisable dans une classe. Deux systèmes bâtis sur le même modèle peuvent différer entièrement en fiabilité à cause de ce qui les entoure.

**« La maturité technique du champ est établie. »** La cartographie est mince là où cela compte : sur **474 études**, les modèles de la série GPT et LangChain dominaient tandis que **l'orchestration d'outils gouvernée, la mémoire persistante et la planification à long horizon étaient largement absentes**, et seulement **138 des 474 (29%)** puisaient dans la théorie éducative. La pile utilisée est bien plus étroite que celle dont le champ a besoin.

**« Les choix techniques relèvent du technologue, pas de l'éducateur. »** On peut être un excellent éducateur sans savoir construire un LLM et que ses choix techniques façonnent néanmoins ce que l'IA peut ou ne peut pas faire dans sa classe. Qu'un système ancre ses réponses dans le matériel du cours est une décision aux conséquences pédagogiques que quelqu'un doit prendre.

**« Un modèle plus capable résoudra les lacunes du champ. »** L'orchestration, la mémoire et la planification à long horizon sont des problèmes d'architecture plutôt que de capacité — l'absence documentée porte sur des systèmes qui gouvernent leur propre usage d'outils dans le temps, ce qu'un meilleur modèle n'apporte pas de lui-même.

## Concepts liés

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## Articles liés
- [[beyond-chatgpt-stem-ai-tool-mapping-2026]] — Visibilité dans la recherche de 85 outils d'IA en éducation STEM et d'ingénierie (Terkowsky et al. 2026)

- [[agentic-ai-education-scoping-review]] — Revue de cadrage de l'IA agentique en éducation
- [[genai-meta-analysis-programming-learning]] — Méta-analyse de l'effet de GenAI sur la productivité et l'apprentissage en programmation
- [[cstutorbench-slm-tutors]] — Repères de référence pour le tutorat par petits modèles de langue
- [[educational-llm-alignment]] — Aligner les LLM pour l'éducation
- [[eduguard-safe-rag-llm-tutor]] — Poser des garde-fous aux tuteurs LLM fondés sur la RAG
- [[hazra-safetutors-pedagogical-safety-2026]] — Sécurité des tuteurs d'IA et préjudices
- [[elbench-education-llm-benchmark-2026]] — Repère de référence pour LLM éducatifs
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Le robot social génératif Teachy Mini
- [[benzion-ai-physics-simulations-virtual-lab]] — Simulations de physique générées par LLM pour la classe
