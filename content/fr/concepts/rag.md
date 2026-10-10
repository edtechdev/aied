---
title: RAG (génération augmentée par récupération)
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
technology: [generative-ai, intelligent-tutoring, knowledge-graph, llm, llm-training-and-fine-tuning, edtech-platform]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
connected_resources: [gemini-notebook]
translation_of: concepts/rag
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La RAG (Retrieval-Augmented Generation)** — une architecture d'IA qui combine la recherche d'information à la génération de texte, permettant aux [[llm|LLM]] d'ancrer leurs réponses dans des sources de connaissances externes plutôt que de s'appuyer uniquement sur les données d'entraînement. Dans l'éducation, la RAG traite le problème de l'hallucination, rend possible un tutorat ancré dans le [[curriculum-design|curriculum]] et alimente des [[intelligent-tutoring|tuteurs IA]] spécifiques à un domaine.

## Questions à examiner

- Vous avez probablement déjà vu un [[conversational-ai|agent conversationnel]] d'IA affirmer avec assurance quelque chose de faux. Qu'est-ce que le fait d'« ancrer » la réponse d'un modèle dans des documents externes change à ce mode de défaillance, et quels nouveaux modes de défaillance cela pourrait-il introduire ?
- La RAG récupère des matériaux pertinents et les transmet au générateur. Avant de lire, quelles hypothèses cela fait-il sur la qualité des contenus récupérés — et sur la question de savoir si le texte récupéré est réellement ce qu'il convient d'enseigner ?
- La page oppose la RAG à l'affinage : la récupération ancre les réponses dans des sources à jour sans réentraînement, tandis que l'affinage intègre des comportements. Si vous construisiez un tuteur aligné sur le curriculum, à laquelle des deux approches feriez-vous confiance pour l'exactitude, et à laquelle pour le style d'enseignement ?
- La RAG est présentée comme la principale réponse à l'hallucination dans l'éducation. Mais considérez ceci : si la source de récupération contient elle-même des erreurs, ou si elle est obsolète, la RAG peut-elle encore halluciner ? Où la garantie d'« ancrage dans des contenus vérifiés » pourrait-elle se rompre dans la pratique ?
- Pour un développeur ou un enseignant : que faut-il qu'un tuteur « sache » au-delà des contenus du manuel — la pédagogie, quand retenir les réponses, comment sonder la compréhension ? Où la RAG seule échouerait-elle à le fournir, et avec quoi la combineriez-vous ?

## Introduction

### Comment la RAG est utilisée dans l'éducation

- **Récupération propre à un domaine, sensible à la notation :** [[algorag-rag-theoretical-cs-education-2026|AlgoRAG]] indexe des manuels, 847 diapositives de cours, 312 exercices résolus, 156 canevas de démonstration détaillés et 89 fiches de complexité pour des cours théoriques de [[cs-education|sciences informatiques]], en ajoutant la reconnaissance d'entités mathématiques et un reclassement sensible à la notation ; il a répondu aux 179 questions d'examen rédigées par l'enseignant dans le délai de 240 secondes (moyenne de 38,0 secondes), mais a produit un BLEU-4 = 0,0000 et un score de grille de 0,7620, ce qui illustre à la fois la valeur de l'architecture et les limites des métriques utilisées pour la juger.
- **Réduction des hallucinations :** [[eduguard-safe-rag-llm-tutor|EduGuard]] et [[eduzone-llm-safety-k12|EduZone]] utilisent la RAG pour maintenir les réponses des tuteurs IA ancrées dans des contenus éducatifs vérifiés, réduisant le [[hallucination-risk|risque d'hallucination]].
- **L'ancrage ne vaut que ce que vaut l'inspection des sources :** seul 1 participant sur 12 a remarqué une carte de source délibérément inadaptée, de sorte qu'une étiquette de provenance peut agir comme un sceau d'autorité plutôt que comme une invitation à vérifier le matériau récupéré ([[veriforge-narrative-drafting-scaffolding-2026|Sun et coll. (2026)]]).
- **Tutorat ancré dans le curriculum :** [[retrieval-augmented-tutoring-algorithm-kite|KITE]] récupère les matériaux pédagogiques pertinents pour éclairer ses réponses de tutorat, assurant l'alignement sur les contenus du cours.
- **Déploiement sur site pour un contrôle institutionnel :** CourseChat fait tourner un tuteur RAG multi-cours pour la [[business-education|formation en gestion]] de premier cycle sur des hôtes edge locaux, avec une base de données vectorielle locale et un modèle 8B servi par Ollama, ce qui garde les matériaux de cours et le dialogue des étudiants sur l'infrastructure du campus ; le choix du modèle est devenu une décision conjointe de matériel et de service lorsque des candidats plus volumineux ont échoué à un critère de latence ([[on-premises-rag-tutoring-business-education-2026|CourseChat]]).
- **Indexation des manuels et des matériaux :** l'[[book-level-synthetic-textbook-organization|organisation synthétique de manuels]] indexe les contenus éducatifs pour la récupération. [[structrag-diagram-reasoning-ai-tutoring|StructRAG]] étend la récupération aux diagrammes structurés.
- **Intégration à la chaîne d'entraînement :** l'[[llm-training-and-fine-tuning|entraînement des LLM pédagogiques]] utilise la RAG pour ancrer la formation des tuteurs dans les meilleures pratiques éducatives.
- **Soutien académique propre au cours :** [[course-specific-rag-help-seeking-higher-ed-2026|Beacon]] récupère dans les matériaux pédagogiques approuvés d'un unique module de programmation pour servir les étudiants qui hésitent à aborder un enseignant, et 89% des 15 étudiants évaluateurs ont jugé ses réponses fortement alignées sur les matériaux du cours ; l'enjeu de conception est que l'ancrage constitue une réponse institutionnelle au décalage entre les [[llm|LLM]] généralistes et les attentes au niveau du module.
- **Structure au moment de l'ingestion versus récupération au moment de la requête :** [[wiki-llm-indexing-ml-classes-2026|Wright (2026)]] a compilé le même corpus du cours d'apprentissage automatique DS3001 en sept pages de concepts wiki entre-référencées portant des citations de sources, et l'a confronté à une référence RAG vectorielle ajustée fondée sur une récupération par découpage et vectorisation. Sur 59 questions rédigées par des humains, le wiki compilé a mieux répondu que l'index ajusté (9,95 contre 9,05 sur 10, avec un intervalle de confiance bootstrap sur la différence excluant zéro) et s'est plus souvent appuyé sur le matériau que le répondant avait réellement vu (98% contre 81%), les deux écarts triplant à peu près sur les questions qui exigeaient du matériau de plus d'une page (scores inter-pages 9,93 contre 8,14, là où le taux d'ancrage de la RAG tombait de 87% à 64%). L'écart d'ancrage n'était pas un échec de récupération : seules 2 des 11 réponses non ancrées de la RAG vectorielle étaient des ratés de récupération, tandis que les 9 autres avaient en contexte les extraits pertinents et ajoutaient quand même des détails non étayés — la preuve que la structure au moment de l'ingestion contraint l'élaboration, et pas seulement l'accès.

### RAG et affinage

La RAG joue un rôle complémentaire de l'affinage des [[llm|LLM]] — la récupération fournit un ancrage à jour et propre au domaine sans réentraînement, tandis que l'affinage intègre des comportements [[pedagogy|pédagogiques]]. Les recherches de la base de connaissances explorent les deux approches et leur combinaison.

## Concepts liés

- [[llm]]
- [[generative-ai]]
- [[hallucination-risk]]
- [[knowledge-graph]]
- [[edtech-platform]]
- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[pedagogical-safety]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Ensemble : technologies et techniques d'IA (modèles, entraînement des LLM, robotique, RAG, agentic)

## Articles liés

- [[eduguard-safe-rag-llm-tutor]]
- [[eduzone-llm-safety-k12]]
- [[retrieval-augmented-tutoring-algorithm-kite]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[book-level-synthetic-textbook-organization]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG : génération augmentée par récupération pour l'enseignement théorique de l'informatique — un cadre d'évaluation complet pour l'analyse d'algorithmes et la théorie de la complexité
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Réduire les obstacles au soutien académique : évaluation d'un système RAG propre au cours pour traiter les disparités de demande d'aide dans l'enseignement supérieur
- [[wiki-llm-indexing-ml-classes-2026]] — Potentiel d'apprentissage amélioré dans les cours d'apprentissage automatique par l'indexation wiki de LLM
- [[on-premises-rag-tutoring-business-education-2026]] — Tutorat RAG multi-cours sur site pour la formation en gestion
