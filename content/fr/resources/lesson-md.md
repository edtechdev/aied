---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "Un format ouvert en texte brut pour des leçons d'eLearning à blocs, plus une compétence d'agent qui rédige des leçons, des évaluations et des paquets de cours entiers dans ce format."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**LESSON.md** est un format ouvert pour du contenu d'eLearning à blocs : un fichier Markdown avec frontmatter YAML et des directives `:::` pour le texte, les images et les vérifications de connaissances, lisible par une personne et analysable par tout outil. Il existe parce que le contenu de cours est d'ordinaire enfermé dans un unique outil de création, et parce que les [[llm|grands modèles de langage]] ne peuvent aider pour des leçons qu'ils peuvent réellement lire.

## Ce que vous pouvez en faire

Rédigez une leçon dans n'importe quel éditeur de texte et importez-la dans tout outil qui prend en charge le format, sans copier-coller ni reformatage. Les pièces interactives — vérifications de connaissances à choix multiple avec limites de tentatives et retour au niveau de chaque réponse — sont exprimées comme de simples propriétés plutôt qu'en interface graphique. Un `ASSESSMENT.md` compagnon à la racine d'un paquet devient l'[[assessment|évaluation notée]] du cours. Le projet fournit aussi une compétence `lesson-md` qui enseigne le format à Claude, Codex ou un autre [[agentic-ai|agent]], si bien que décrire un cours en langage courant renvoie des leçons, des évaluations et un paquet complet.

## À qui cela s'adresse

Aux concepteurs pédagogiques et créateurs de cours qui veulent que leur contenu survive à un changement d'outil, aux fournisseurs d'eLearning qui veulent un format d'import et d'export que leurs utilisateurs comprennent déjà, et à quiconque construit une création assistée par IA au-dessus d'un format lisible. Parmi les contributeurs figure Dan Bashaw de LXD Integral, et le format possède un journal des modifications public allant jusqu'à la v1.8.

## Concepts liés
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
