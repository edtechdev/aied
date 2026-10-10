---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "La collection open source de Matt Pocock de petites compétences d'agent composables, comprenant une compétence d'enseignement multi-sessions, une compétence de questionnement implacable, et des conseils pour rédiger des documents qu'un agent peut suivre."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**Skills for Real Engineers** est le répertoire de compétences d'agent publié par Matt Pocock : de petits fichiers d'instructions composables qui s'installent dans Claude Code, Codex ou un autre agent, écrits pour être adaptés plutôt qu'adoptés entiers. La majeure partie de la collection sert le travail logiciel, mais plusieurs compétences sont des instruments éducatifs construits pour enseigner et questionner plutôt que pour coder.

L'exemple le plus clair est `teach`, qui se déroule sur plusieurs sessions et traite le répertoire de travail comme un espace d'enseignement à état, si bien que les progrès d'un apprenant et ses questions ouvertes persistent d'une conversation à l'autre au lieu de repartir de zéro. `grill-me` et sa primitive sous-jacente `grilling` interrogent l'utilisateur sans relâche sur un plan jusqu'à ce que chaque branche soit résolue, ce qui est du [[socratic-method|questionnement socratique]] comme procédure réutilisable plutôt que comme humeur conversationnelle. `wait-what` répond au moment où un message n'atterrit pas en le reformulant en langage courant avec le contexte manquant, un geste que tout enseignant reconnaît pour avoir vu une explication manquer sa cible la première fois. `writing-for-agents` couvre la manière de rédiger des documents qu'un agent peut suivre, ce qui est désormais la forme pratique de la rédaction d'instructions pour du matériel de cours à base d'[[pedagogical-agent|agent pédagogique]] IA [[prompt-engineering|ingénierie des invites]]. `to-questionnaire` convertit une décision en questionnaire pour celui qui peut y répondre, `handoff` compacte une conversation en un document dont un autre agent peut partir, et `wizard` génère une visite guidée interactive pour les étapes que seule une personne peut accomplir.

## Ce qu'il faut savoir avant de l'adopter

Tout est [[open-source|open source]] sous MIT et libre à prendre comme point de départ pour une [[ai-literacy|culture de l'IA]] ou une [[self-directed-learning|étude autodirigée]] locales. L'adoption est large et rapide : environ 270 000 étoiles et 23 000 forks lors de la vérification en septembre 2026, avec le commit le plus récent le 18 septembre 2026. La réserve tient à la portée. Les compétences supposent un contexte de travail d'[[human-ai-collaboration|ingénieur]], elles sont organisées en rubriques ingénierie, productivité, obsolète et en cours, si bien que certaines entrées sont explicitement inachevées ou retirées, et le README sert aussi d'inscription à une lettre d'information. Traitez les compétences d'enseignement et de questionnement comme la partie transférable, et attendez-vous à devoir réécrire n'importe laquelle d'elles avant d'en mettre une devant des élèves.

## Concepts liés
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
