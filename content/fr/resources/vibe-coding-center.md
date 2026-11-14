---
title: "Vibe-Coding Center"
created: "2026-11-13T20:20:00-05:00"
updated: "2026-11-13T20:20:00-05:00"
type: resource
summary: "Un guide de terrain pour les éducateurs qui veulent construire un site éducatif statique avec un assistant de codage IA : trois fichiers d'instructions Markdown pour la conception, la sécurité et la vie privée des étudiants, accompagnés de guides lisibles et d'un lot téléchargeable."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**The Vibe-Coding Center** est le guide de terrain gratuit de Miguel Guhlin pour un enseignant qui veut [[vibe-coding|vibe-coder]] un petit site éducatif statique avec un assistant de codage IA — un ticket de sortie, un quiz, un portfolio de classe — sans y joindre une clé d'API exposée ni des données d'étudiants.

## Ce que vous pouvez en faire

Trois fichiers d'instructions portent les conseils : `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` et `securevcc.md`. Téléchargez-les dans la racine d'un projet, remplissez le modèle de brief de projet, puis demandez à l'assistant de lire et d'appliquer les trois ; le guide précise que leur présence ne vaut pas activation, si bien que les fichiers doivent être nommés dans la demande. Des guides lisibles expliquent chacun d'eux, dont un parcours « Trois vérifications essentielles avant de partager » : collecter moins de données sur les étudiants, inspecter une clé d'API exposée et adapter la conception d'un outil à sa tâche d'apprentissage. Le lot complet ajoute le site lui-même, un pack de prompts, une revue de lancement et des scripts de reconstruction, avec un manifeste SHA-256 pour le téléchargement.

La page complémentaire d'[exemples de l'EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) montre les résultats sous forme d'outils statiques fonctionnels plutôt que de captures d'écran : un générateur de tickets de sortie qui rédige une question à un niveau choisi de la taxonomie SOLO, un portfolio étudiant qui tient en un seul fichier HTML sur GitHub Pages, et une bibliothèque de ressources de développement professionnel interrogeable, le tout fonctionnant côté client sans connexion à un LMS.

## À qui cela s'adresse

Aux enseignants et aux [[learning-design|concepteurs pédagogiques]] qui travaillent de la maternelle au secondaire ou dans l'enseignement supérieur et qui peuvent décrire l'outil qu'ils veulent et acceptent de vérifier ce que l'assistant a produit. Cela convient aussi à un département qui veut une liste de contrôle commune avant que quiconque publie un outil destiné aux étudiants, et aux enseignants qui enseignent la [[ai-literacy|littératie en IA]] par la construction plutôt que par la critique.

## Remarques et réserves

Le centre est un accompagnement, non un produit de conformité : le site ne revendique aucune conformité à sa propre cible WCAG 2.2 AA, répond « non » à la question « l'utilisation de ces fichiers rend-elle mon site conforme ? », et précise qu'une revue d'ingénierie ne remplace ni l'autorisation de l'école ni une revue juridique. Le volet sécurité renvoie à axe-core, Gitleaks, ZAP et Playwright ; ce sont des références plutôt que des logiciels fournis, et les outils invasifs sont destinés à une cible jetable ou explicitement autorisée. La lecture ne demande aucun compte. Reconstruire les pages HTML exige Python et `markdown-it-py`, une dépendance de construction et non une dépendance pour le visiteur. Le dépôt est sous licence MIT, tandis que les illustrations de tiers et les projets liés conservent leurs propres conditions, documentées dans `CREDITS.md`.

## Concepts liés

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
