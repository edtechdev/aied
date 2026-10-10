---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "Un ensemble open source de onze compétences Claude Code qui auditent un cours par rapport à la base de preuves du design pédagogique, en étiquetant chaque recommandation selon son niveau de preuve."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**idstack** est une collection open source de onze compétences pour un [[learning-design|design pédagogique]] fondé sur les preuves, distribuée comme plugin Claude Code avec une extension compagnon en panneau latéral Chrome. Plutôt que de rédiger un cours, les compétences en font l'audit : elles classent les objectifs selon la taxonomie révisée de Bloom, vérifient l'alignement constructif entre objectifs, activités et évaluations, signalent les problèmes de charge cognitive et examinent l'accessibilité par rapport aux WCAG 2.1 AA et à l'Universal Design for Learning. Chaque recommandation porte un niveau de preuve, de T1 pour les méta-analyses et essais randomisés à T5 pour l'avis d'expert. Le projet déclare que ses citations puisent à 108 études évaluées par les pairs réparties dans onze domaines de recherche ; ce chiffre est l'affirmation propre du projet, et sa bibliographie est publiée en Markdown, si bien qu'un évaluateur peut la contrôler.

Les cours entrent par une connexion à l'API Canvas, un fichier IMS Common Cartridge, un paquet SCORM, un export PDF d'un outil de création ou des documents collés. Un manifeste de projet partagé retient le cours d'une session à l'autre, et une compétence de pipeline enchaîne les étapes de conception en sautant le travail achevé. Les examens rendent compte par rapport aux huit normes Quality Matters et au cadre de la Community of Inquiry, en distinguant présence enseignante, sociale et cognitive, puis classent les recommandations par gravité.

## Ce qu'il faut savoir avant de l'adopter

Le plugin exige Claude Code et un shell bash pour l'installation ; PowerShell et cmd ne peuvent pas exécuter le script d'installation, et Python 3 est recommandé pour les tendances de score. Les données de cours restent dans le dossier du projet sur la machine propre du lecteur, et n'en sortent que par une intégration que l'utilisateur invoque, tel qu'un appel à l'API Canvas. L'inférence en direct de l'extension Chrome nécessite la propre clé d'API Google AI Studio, gratuite, du lecteur, bien qu'un mode simulation le démontre sans. Le projet se qualifie lui-même de bêta en version 3.5.1.0 et avertit de ruptures de compatibilité entre versions mineures, et il est publié sur le compte GitHub savvides plutôt que par un auteur nommé.

## Concepts liés
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
