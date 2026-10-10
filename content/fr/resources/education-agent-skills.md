---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "Une bibliothèque de 165 compétences d'agent fondées sur des preuves couvrant la pédagogie, les sciences de l'apprentissage, les programmes et l'évaluation, empaquetées pour Claude, Codex et Hermes."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
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

**Education Agent Skills** est une bibliothèque de 165 compétences d'agent pour les enseignants, les chefs d'établissement et les personnes qui construisent des outils éducatifs. Les compétences sont regroupées en vingt domaines couvrant la pédagogie, les sciences de l'apprentissage, le [[curriculum-design|programme]], l'évaluation et la régénération, et chacune est écrite pour être chargée par un [[agentic-ai|agent]] plutôt que lue comme un document.

## Ce que vous pouvez en faire

Les compétences s'installent dans Claude Code, Codex et Hermes, soit comme plugin, soit en copiant les dossiers, si bien que la même bibliothèque fonctionne sur plusieurs surfaces d'agent. Un serveur MCP hébergé expose la collection comme outils pour les agents qui ne peuvent pas installer de compétences localement, et le dépôt fournit à la fois un registre et un paquet précompilé, de sorte que le serveur peut servir la collection sans lire les fichiers individuels au moment du déploiement.

La revendication distinctive du projet est son ancrage : les compétences citent les preuves sur lesquelles elles reposent, et l'historique propre du dépôt montre que cette discipline est appliquée plutôt qu'affirmée, y compris une correction fusionnée qui a retiré une attribution non étayée et corrigé la description d'une protection testée dans une étude citée.

## Remarques et réserves

Les compétences éducatives, la documentation et les supports de programme sont sous licence CC BY-SA 4.0, si bien que la réutilisation et l'adaptation sont ouvertes tandis que les œuvres dérivées doivent porter la même licence. Deux détails opérationnels comptent si vous la déployez. Le point de terminaison MCP hébergé exige des jetons plutôt que d'être ouvert à tous, et parce que le serveur sert un instantané validé plutôt que les fichiers SKILL.md, une compétence que vous ajoutez sans reconstruire et valider le paquet n'apparaîtra pas sur le serveur actif, même après un redéploiement. La bibliothèque est construite par Gareth Manning, enseignant et concepteur de programmes, et les conditions de licence s'appliquent spécifiquement au contenu éducatif.

## Concepts liés
[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]]
