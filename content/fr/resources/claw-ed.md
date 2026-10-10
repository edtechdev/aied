---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "Un assistant pédagogique IA « local-first » qui transforme votre propre programme en brouillons de leçons modifiables, en supports pour les élèves et en diapositives, à l'aide d'un modèle que vous choisissez."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**Claw-ED** est un assistant pédagogique « local-first » qui rédige des leçons à partir de vos propres supports de programme. Un enseignant importe ses sources, demande une leçon et obtient des brouillons modifiables accompagnés de supports destinés aux élèves et de diapositives, générés avec le modèle que l'enseignant choisit plutôt qu'avec un fournisseur fixe.

## Ce que vous pouvez en faire

Le flux de travail va de l'importation au brouillon, à la relecture et à l'exportation, et les brouillons sont traités comme des points de départ qu'un enseignant modifie plutôt que comme des documents finis. Les tâches de leçon sont mises en file d'attente et récupérables, si bien qu'une génération longue qui échoue peut être reprise au lieu d'être relancée, et les artefacts générés peuvent être téléchargés. L'outil expose aussi ses fonctions à un [[agentic-ai|agent]] via un serveur MCP et peut se connecter à Google Drive, si bien qu'un établissement peut l'intégrer à son stockage et à sa planification existants.

Le projet est délibérément agnostique du modèle. Il documente côte à côte des modèles Ollama locaux, des routes OpenRouter économiques et des options hébergées, et son guide de modèles est daté, ce qui rend clair que les recommandations sont des points de départ fondés sur un catalogue plutôt que des jugements de qualité notés par des enseignants.

## Remarques et réserves

Le logiciel est gratuit et [[open-source|open source]] sous licence MIT pour son code original, bien que les composants tiers conservent leurs propres conditions, et l'utiliser implique de payer votre propre inférence de modèle si vous employez un modèle hébergé. Le projet se qualifie lui-même de bêta relue par des enseignants et dit franchement dans son README que le passage de son CI n'établit pas la qualité pédagogique à travers les modèles en production, ce qui est la bonne manière de lire une suite de tests verte dans ce domaine : elle vérifie le logiciel, pas la [[pedagogy|pédagogie]]. Il est maintenu par MacxLabs et accepte comme contributions des leçons modèles relues par des enseignants.

## Concepts liés
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
