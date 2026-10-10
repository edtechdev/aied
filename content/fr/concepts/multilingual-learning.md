---
title: "Apprentissage multilingue"
connected_resources: [mglearn]
created: "2026-08-19T09:55:00-04:00"
updated: "2026-10-10T04:00:01-04:00"
type: concept
technology: [llm]
ethics: [culturally-relevant-pedagogy, digital-divide, equity-in-ai-education, global-south, inclusive-learning, multilingual-learning]
discipline: [language learning]
confidence: medium
translation_of: concepts/multilingual-learning
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

> L'apprentissage multilingue dans l'IA éducative concerne la manière dont les [[ai-technologies|Technologies de l'IA]] éducatives et les systèmes fondés sur les grands modèles de langue soutiennent les apprenants à travers les langues, les dialectes et les contextes linguistiques à faibles ressources — ainsi que les risques d'exclusion linguistique lorsque les systèmes d'IA sont construits d'abord pour les langues dominantes.

## Questions à examiner

- La plupart des modèles d'IA sont entraînés d'abord sur des langues à fortes ressources comme l'anglais. Si vous pensez, étudiez ou êtes évalué dans une autre langue, en quoi cela pourrait-il vous désavantager systématiquement — même si l'outil semble « fonctionner » en anglais ?
- La page avertit qu'un biais monolingue non traité dans l'IA creuse la fracture numérique et sape l'équité, en particulier dans les pays du Sud global. Qu'exige une véritable équité au-delà de la simple traduction du contenu de l'IA dans une autre langue ?
- L'évaluation automatisée peut présenter un biais linguistique, pénalisant les locuteurs non natifs même pour un même raisonnement. Si vous mettiez en œuvre une notation par IA, que vérifieriez-vous pour vous assurer qu'elle est équitable entre les langues, et pas seulement exacte dans une seule ?
- La page montre que des langues à faibles ressources peuvent être servies en ajustant finement des modèles sur des corpus curatés, même sous des contraintes matérielles pratiques. Quels compromis attendriez-vous entre l'efficience et la fidélité avec laquelle le modèle traite une langue à faibles ressources ?
- L'IA multilingue doit aller au-delà de la traduction pour refléter une pédagogie culturellement pertinente — un contenu linguistiquement *et* contextuellement approprié. Comment un contenu parfaitement traduit pourrait-il néanmoins échouer auprès d'un apprenant s'il ignore le contexte et la culture locaux ?

## Introduction

L'apprentissage multilingue concerne l'éducation des apprenants qui étudient ou pensent dans des langues autres que les langues dominantes, et c'est une dimension d'équité centrale de l'IA en éducation : l'[[generative-ai|IA générative]] est massivement entraînée et réglée sur des langues à fortes ressources, ce qui peut désavantager systématiquement tous les autres. Le thème s'étend du travail technique (adapter des modèles à des langues à faibles ressources et à des corpus dialectaux, la [[rag|recherche documentaire]] dans des langues non dominantes), aux préoccupations pédagogiques (l'[[culturally-relevant-pedagogy|enseignement ancré localement]]), en passant par l'équité structurelle (qui peut accéder à une IA éducative utile) — ce qui le rend inséparable de la [[digital-divide|fracture numérique]] et de l'[[equity-in-ai-education|équité]].

## Vue d'ensemble

L'apprentissage multilingue est une dimension d'équité centrale de l'[[ai-education|IA en éducation]]. L'IA générative et les [[llm|grands modèles de langue]] sont massivement entraînés et réglés sur des langues à fortes ressources, ce qui peut désavantager systématiquement les apprenants qui étudient ou pensent dans d'autres langues. Le thème s'étend des défis techniques (adapter des modèles à des langues à faibles ressources, à des corpus dialectaux, à la [[rag|RAG (génération augmentée par récupération)]] dans des langues non dominantes), aux préoccupations [[pedagogy|pédagogiques]] (enseignement culturellement pertinent et ancré localement), en passant par l'équité structurelle (qui accède à une IA éducative utile).

## Approches techniques

- **Ajustement fin pour les langues à faibles ressources :** Nwogo et al. (2026) ont [[multilingual-adaptive-learning-nigeria-2026|ajusté finement un grand modèle de langue ajusté aux instructions sur un corpus curaté de pidgin nigérian]] au sein d'une plateforme d'[[adaptive-learning|apprentissage adaptatif]], et ont analysé systématiquement les compromis de quantification (4/5/8 bits) entre fidélité sémantique et efficience computationnelle — montrant que des langues à faibles ressources peuvent être servies sous des contraintes matérielles pratiques. Voir aussi le [[bilingual-llm-lecture-companion-srl-2026|compagnon de cours bilingue fondé sur les grands modèles de langue]] pour l'[[self-regulated-learning|apprentissage autorégulé]].
- **Équité des corpus et des données :** construire des corpus curatés (par exemple, le pidgin nigérian, les systèmes de savoirs indiens via [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]]) est une stratégie récurrente pour permettre la production des modèles dans les langues des apprenants.
- **Contextes vocaux d'abord et oraux :** les [[kutti-ai-voice-first-learning-companion|compagnons d'apprentissage vocaux d'abord]] et les [[structural-silence-underrepresented-language-ai-2026|analyses du silence structurel]] traitent les contextes où l'IA fondée sur le texte échoue pour les locuteurs de langues sous-représentées.

## Équité et pédagogie

L'IA multilingue doit aller au-delà de la traduction pour refléter la [[culturally-relevant-pedagogy|pédagogie culturellement pertinente]] — en générant un contenu linguistiquement et contextuellement approprié. Des études sur la [[llm-cultural-relevance-k12|pertinence culturelle des grands modèles de langue dans le primaire et le secondaire]] et sur l'[[scaffolding-critical-engagement-genai-minority-students|engagement critique envers l'IA générative chez les étudiants issus de minorités]] montrent que l'alignement linguistique et culturel détermine si les étudiants en bénéficient réellement. Non traité, le biais monolingue dans l'IA creuse la [[digital-divide|fracture numérique]] et sape l'[[equity-in-ai-education|équité]] dans les pays du [[global-south|Sud global]].

## Biais d'évaluation

Les préoccupations multilingues affectent aussi l'[[automated-assessment|évaluation automatisée]] : [[ai-scoring-language-bias-physics|la notation par IA peut présenter un biais linguistique]] (par exemple, en [[physics-education|physique]]), pénalisant les locuteurs non natifs. Garantir que les outils d'évaluation sont équitables entre les langues fait partie de l'[[assessment-validity|évaluation de la validité]].

Le jugement comparatif fondé sur les grands modèles de langue est un cas où le biais suivait la référence humaine plutôt que le modèle : les scores pour les écrits informationnels des niveaux 3 à 6 convergeaient avec les barèmes des chercheurs (r = ,59–,73) et montraient des profils de biais prédictif pour les apprenants multilingues similaires à ceux de la notation humaine, sans aucune preuve qu'une plus grande capacité ou un coût plus élevé du modèle améliorait la validité ([[llm-comparative-judgment-writing-screening-2026|Mercer et Reed (2026)]]).

## Implications pour les enseignants en contextes multilingues

- **Étendez l'IA aux langues des apprenants, et pas seulement à l'anglais.** Ajustez finement ou configurez des modèles pour des langues à faibles ressources et non dominantes ([[multilingual-adaptive-learning-nigeria-2026|plateforme de pidgin nigérian]]) plutôt que d'imposer des outils uniquement anglophones ; associez l'IA à la [[rag|RAG (génération augmentée par récupération)]] et à des corpus locaux lorsque c'est possible.
- **Protégez l'évaluation du biais linguistique.** [[ai-scoring-language-bias-physics|La notation par IA]] peut pénaliser les locuteurs non natifs — utilisez une évaluation sensible à la langue ou modérée par un humain pour protéger l'[[assessment-validity|évaluation de la validité]] et l'[[equity-in-ai-education|équité]].
- **Reflétez la culture et le contexte, pas seulement la traduction.** L'IA multilingue doit aller au-delà de la traduction vers la [[culturally-relevant-pedagogy|pédagogie culturellement pertinente]] — générez un contenu linguistiquement et contextuellement approprié ([[llm-cultural-relevance-k12|pertinence culturelle dans le primaire et le secondaire]]).
- **Associez l'IA à des structures de soutien multilingues.** Utilisez des modes vocaux d'abord et oraux ([[kutti-ai-voice-first-learning-companion|compagnons vocaux d'abord]]) là où l'IA fondée sur le texte échoue, et soutenez l'[[self-regulated-learning|autorégulation]] dans les contextes bilingues ([[bilingual-llm-lecture-companion-srl-2026|compagnon de cours bilingue]]).
- **Surveillez la fracture numérique.** Le biais monolingue dans l'IA creuse la [[digital-divide|fracture numérique]] et sape l'accès dans les pays du [[global-south|Sud global]] — planifiez des infrastructures et un accès équitables en même temps que le choix de l'outil.

## Concepts liés

- [[differential-effects-across-learner-groups]]
- [[language-learning]]
- [[llm]]
- [[equity-in-ai-education]]
- [[global-south]]
- [[digital-divide]]
- [[culturally-relevant-pedagogy]]
- [[inclusive-learning]]
- [[generative-ai]]

## Articles liés

- [[llm-comparative-judgment-writing-screening-2026]] — Validité du jugement comparatif par grands modèles de langue pour le dépistage universel en écriture
- [[multilingual-adaptive-learning-nigeria-2026]] — Plateforme d'apprentissage adaptatif fondée sur l'IA pour le Nigeria
- [[bilingual-llm-lecture-companion-srl-2026]] — Compagnon de cours bilingue fondé sur les grands modèles de langue
- [[structural-silence-underrepresented-language-ai-2026]] — Le silence structurel : les langues sous-représentées
- [[llm-cultural-relevance-k12]] — La pertinence culturelle des grands modèles de langue dans le primaire et le secondaire
- [[scaffolding-critical-engagement-genai-minority-students]] — L'engagement critique envers l'IA générative chez les étudiants issus de minorités
- [[iks-instruct-dataset-indian-knowledge]] — IKS-Instruct : jeu de données sur les systèmes de savoirs indiens
- [[kutti-ai-voice-first-learning-companion]] — Compagnon d'apprentissage vocal d'abord
- [[ai-scoring-language-bias-physics]] — Le biais linguistique de la notation par IA en physique
