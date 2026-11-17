---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Un serveur MCP open source qui permet à Claude, Cursor, Codex et à d'autres agents de lire et d'agir dans Canvas LMS — des outils pour les étudiants, les enseignants et les concepteurs pédagogiques, avec des actions d'écriture restreintes et une anonymisation facultative des données étudiantes."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**Canvas MCP** est un serveur Model Context Protocol open source de Vishal Sachdev qui relie un client d'IA à une instance Canvas LMS : l'agent peut lister le travail à venir d'un étudiant, lire les devoirs et les rendus d'un cours, envoyer des messages à une classe ou auditer l'accessibilité d'un cours, le tout au moyen des outils exposés par le serveur plutôt que par une extraction improvisée de l'écran.

## Ce que vous pouvez en faire

Le serveur embarque trois familles d'outils. Les outils étudiants répondent à « qu'est-ce qui est à rendre cette semaine », « ai-je tout rendu », « combien de tentatives de quiz me reste-t-il » à partir des endpoints `self` de Canvas. Les outils enseignants listent et créent des devoirs, lisent les rendus, notent en masse, envoient des conversations et extraient les analytiques des devoirs. Les outils de conception pédagogique couvrent les contrôles de qualité de cours et les analyses d'accessibilité WCAG. Jusqu'à 128 outils sont disponibles au total, même si le profil par défaut en enregistre moins et que les outils conditionnés par des fonctionnalités optionnelles relèvent le compte. Au-delà des outils, huit compétences d'agent empaquettent des recettes en plusieurs étapes — un plan hebdomadaire, un contrôle matinal de la santé d'un cours, un arbre de décision de notation en masse, un pipeline de relecture par les pairs, un audit de cours avant le semestre — installables dans plus de 40 agents via `skills.sh`.

## À qui cela s'adresse

Aux enseignants qui veulent qu'un agent prenne en charge la lecture et la messagerie de routine autour d'un cours, et aux [[institutional-ai-infrastructure|équipes institutionnelles]] qui évaluent ce qu'un agent connecté au LMS peut réellement atteindre. Les concepteurs pédagogiques y trouvent ce qui s'approche le plus d'une revue de cours automatisée. Le projet est un exemple concret d'[[agentic-ai|outillage agentique]] à l'échelle du LMS d'un établissement plutôt que celle d'un chatbot générique.

## Remarques et réserves

L'installation est locale : Python 3.11 ou plus récent, un jeton et une URL d'API Canvas, et un client MCP, avec une extension à double-clic pour Claude Desktop. Le serveur hébergé public a été retiré, si bien qu'un déploiement partagé suppose un auto-hébergement derrière l'authentification de l'établissement. Les outils d'écriture sont restreints : les serveurs HTTP sont en lecture seule, sauf si les outils d'écriture sont explicitement autorisés, les suppressions exigent des jetons de confirmation, et l'exécution de code tourne dans un bac à sable qui échoue en mode fermé. Les contrôles de confidentialité sont optionnels : l'anonymisation des réponses, le masquage des courriels et le filtrage des PII doivent être activés, et le README précise avec soin qu'ils peuvent appuyer des obligations FERPA sans établir de conformité, laquelle dépend du déploiement et du fournisseur d'IA. Le serveur n'embarque aucune télémétrie, mais Canvas et le client choisi conservent leurs propres journaux. Le projet est sous licence MIT, activement développé, et ses propres guides font autorité sur les noms d'outils et la configuration actuels.

## Concepts liés

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
