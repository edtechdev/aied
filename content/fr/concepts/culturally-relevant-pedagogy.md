---
title: "Pédagogie culturellement pertinente"
created: "2026-05-08T10:44:35-04:00"
updated: "2026-10-10T03:24:44-04:00"
type: concept
foundations: [ai-literacy, curriculum-design]
technology: [generative-ai, intelligent-tutoring, llm]
ethics: [equity-in-ai-education, inclusive-learning]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/culturally-relevant-pedagogy
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

> **Pédagogie culturellement pertinente** — introduite par Gloria Ladson-Billings (1995), elle place au centre de la [[curriculum-design|conception des programmes]] les références culturelles des élèves marginalisés. Elle repose sur trois piliers : la **réussite scolaire** (des exigences rigoureuses qui honorent l'identité culturelle), la **compétence culturelle** (une conscience critique de la culture et du pouvoir) et la **[[critical-pedagogy|conscience sociopolitique]]** (donner aux élèves le pouvoir de contester des systèmes inéquitables). À mesure que les outils d'IA entrent dans les classes, la pédagogie culturellement pertinente est devenue un prisme central pour évaluer si l'[[generative-ai|IA]] amplifie ou efface les savoirs culturels non dominants.

## Questions à examiner

- La pédagogie culturellement pertinente repose sur la réussite scolaire, la compétence culturelle et la conscience sociopolitique. Lequel de ces piliers est le plus difficile à atteindre avec des outils d'IA — et pourquoi ?
- Une étude a montré que 94% des plans de leçon générés par l'IA ne contenaient aucun contenu multiculturel discernable, et que presque aucun n'atteignait le niveau de la transformation ou de l'action sociale. Si l'IA produit par défaut des résultats monoculturels, à qui revient la responsabilité d'injecter les perspectives manquantes ?
- Les données d'entraînement de l'IA sont majoritairement occidentales et anglophones. Que signifie, pour un système, « marginaliser activement » des façons de connaître — et en quoi cela diffère-t-il du simple manque d'accès ?
- L'apprentissage de l'IA ancré dans la communauté propose que les épistémologies vécues des apprenants eux-mêmes constituent l'étalon d'évaluation des productions de l'IA, le refus et la non-utilisation étant traités comme des réponses valides. Comment placeriez-vous le savoir communautaire comme juge de la pertinence et du tort d'une IA ?
- Des données culturellement ancrées peuvent améliorer considérablement la pertinence d'une IA — un jeu de données sur les savoirs indiens a fait passer un petit modèle de près de zéro à un niveau rivalisant avec un modèle généraliste bien plus grand. Si de meilleures données sont la solution, qui devrait les construire et les détenir ?
- Une étude transculturelle a montré que des comportements d'usage de l'IA identiques étaient jugés [[ethics|éthiques]] dans un pays et non éthiques dans un autre, indépendamment de la politique écrite. Qu'est-ce que cela vous apprend sur la tentative de gouverner l'usage de l'IA par des règles uniformes ?

## Introduction

### Le rôle à double tranchant de l'IA dans la pédagogie culturellement pertinente

L'IA peut aider les enseignants à rendre l'enseignement culturellement adapté, mais ses productions par défaut risquent aussi de **renforcer les récits dominants** lorsqu'on les laisse sans consigne.

- **Soutien aux enseignants :** Wang et al. (2025) ont conçu **CulturAIEd**, un système [[llm|LLM]]-powered qui aide les enseignants du [[k-12|primaire et secondaire]] à concevoir des activités de [[ai-literacy|littératie en IA]] culturellement adaptées, en combinant des informations démographiques sur les élèves avec des consignes guidées par une grille de critères (une liste de vérification CRT intégrée à la génération). Dans un pilote mené auprès de quatre enseignants, il a **renforcé la confiance des enseignants** dans le repérage d'occasions d'adaptation culturelle et dans la modification d'activités existantes, 78% d'entre eux jugeant les suggestions de l'IA utiles pour diversifier les supports. L'outil cible directement les obstacles de temps, de formation et de ressources qui bloquent la mise en œuvre de la pédagogie culturellement pertinente.
- **Risque de productions monoculturelles :** [[civic-education-ai-lesson-plans|Trust et al. (2025)]] ont analysé 310 plans de leçon d'éducation civique générés par l'IA (2,230 activités) : **94% ne contenaient aucun contenu multiculturel discernable**, et, parmi les 144 qui en contenaient, 137 se situaient au niveau « Additive » le plus bas — **un seul atteignait « Transformation » et aucun n'atteignait « Social Action ».** Les trois [[conversational-ai|agents conversationnels]] produisaient des modèles de leçon structurellement identiques et monoculturels. C'est la preuve concrète que l'IA produit par défaut des programmes homogénéisés si les [[teacher-ai-competency|enseignants]] n'interviennent pas activement.

### La marginalisation épistémique dans les systèmes d'IA

Au-delà de la génération de leçons, la pédagogie culturellement pertinente rejoint une critique plus profonde : les données d'entraînement et les processus de conception de l'IA encodent des cadres épistémiques occidentaux et anglophones qui marginalisent d'autres façons de connaître.

- **Colonialité épistémique :** Tali-Otmani (2026) soutient que les systèmes d'IA générative ne sont pas épistémiquement neutres — des données d'entraînement majoritairement centrées sur l'Occident **marginalisent activement les savoirs minorisés**, produisant une « double marginalisation » pour les apprenants en situation de handicap, dont les épistémologies sont à la fois sous-représentées dans les données d'entraînement et exclues de la conception. Cela étend la conversation sur l'[[equity-in-ai-education|équité]] de l'*accès* à la question de *dont le savoir est validé*.
- **Redistribuer l'autorité épistémique :** [[ojeda-ramirez-community-based-ai-learning|Ojeda-Ramirez, Gyles & Peppler (2026)]] proposent l'**apprentissage de l'IA ancré dans la communauté**, un cadre qui repositionne les épistémologies vécues et communautaires des apprenants comme étalon d'évaluation des productions de l'IA. Ses trois engagements — l'**ajustement fin épistémique**, la **redistribution de l'autorité** et le **discernement [[situated-learning|situé]]** — calibrent la confiance en fonction des histoires locales et de l'expertise communautaire, traitant le refus et la non-utilisation stratégique comme des réponses valides de pédagogie culturellement pertinente à l'IA.

### Données culturellement ancrées et évaluation

Un ensemble de travaux issus de la base de connaissances traite des lacunes de *contenu* et d'*évaluation* sous-jacentes à la pédagogie culturellement pertinente.

- **Données d'entraînement non occidentales :** IKS-Instruct fournit un **jeu de données d'instructions [[multilingual-learning|multilingue]] de 24,795 exemples** pour enseigner à des [[teacher-role|enseignants]] de LLM les systèmes de savoirs indiens (Indian Knowledge Systems) dans sept [[language-learning|langues]] et selon 41 techniques [[pedagogy|pédagogiques]]. Un modèle 7B compact ajusté au domaine a atteint un score médian de 6.39 attribué par les juges (contre 6.54 pour un modèle généraliste bien plus grand) — tandis que le modèle de base obtenait un score **proche de zéro** sur les dimensions spécifiques aux IKS, ce qui montre à quel point des données culturellement ancrées améliorent la pertinence.
- **Repères de référence du [[global-south|Sud global]] :** le repère **NSMQ Riddles** puise 1.8K devinettes scientifiques et mathématiques dans 11 ans du National Science and Maths Quiz du Ghana — l'un des premiers repères de [[benchmark|référence]] éducatifs du Sud global — et a montré que les LLM les plus avancés **obtiennent de moins bons résultats que les meilleurs candidats étudiants**, exposant un biais géographique dans la façon dont les modèles sont évalués.
- **La culture avant la politique :** une enquête transculturelle menée auprès d'étudiants en [[cs-education|informatique]] canadiens et sud-coréens a montré que **c'était la culture, et non le texte de la politique, qui déterminait les perceptions de l'éthique de l'usage de l'IA** — des comportements identiques étant jugés différemment selon les cohortes, ce qui renforce la nécessité d'une communication culturellement informée plutôt que de règles abstraites.
- **La navigation culturelle est le domaine où le soutien de l'IA est le plus faible :** les étudiants internationaux ont évalué l'IA conversationnelle au plus haut pour la grammaire, la structure et le résumé (moyenne 4.27) et au plus bas pour la navigation culturelle (moyenne 3.49) ([[international-students-conversational-ai-adaptation|Nourian et al. (2026)]]).
- **L'adaptation culturelle comme gestes de conception :** [[culturally-aware-student-stress-chatbot-2026|Bashir et Afzal (2026)]] opérationnalisent la pertinence culturelle dans un système d'IA de soutien au [[well-being]] ([[culturally-aware-student-stress-chatbot-2026|Sukoon]]) à travers trois gestes : une évaluation bilingue de 20 questions avec des libellés parallèles en anglais et en ourdou ; une invite système demandant au modèle de répondre en cohérence avec les normes sociales et culturelles pakistanaises et d'employer des expressions en ourdou et en ourdou romanisé le cas échéant ; et une sensibilité explicite aux facteurs de stress localement saillants (attentes familiales, pression financière, relations hiérarchiques entre enseignants et étudiants). Leur justification est empirique autant qu'éthique — l'[[explainable-ai|importance des variables]] plaçait la relation enseignant-étudiant au deuxième rang des prédicteurs du stress — mais ils concèdent que l'adaptation réside dans l'invite plutôt que dans le pipeline de traitement du langage naturel, et que l'adéquation culturelle n'a été évaluée que par des tests informels, et non par les étudiants que le système cible.

### Conseils pratiques

En s'appuyant sur les articles mêmes de la base de connaissances, les éducateurs et les concepteurs peuvent appliquer la pédagogie culturellement pertinente à l'IA :

- **Traitez l'IA comme un générateur de brouillons, non comme une autorité.** Les résultats de Trust et al. sur l'éducation civique montrent que les enseignants doivent injecter la pensée [[critical-thinking|d'ordre supérieur]] et les perspectives multiculturelles que l'IA omet ; le [[human-in-the-loop-ai|jugement humain]] reste essentiel pour l'authenticité culturelle et l'alignement communautaire.
- **Superposez un contexte démographique et culturel dans les invites et les outils.** CulturAIEd et [[connected-ai-lesson-planning-vietnam|ConnectED]] (un système vietnamien de planification des leçons aligné sur le programme) montrent que des modèles d'invites structurés et localement ancrés, associés à des contrôles de validation par l'enseignant, améliorent l'adéquation culturelle par rapport à une génération générique.
- **Placez le savoir communautaire comme étalon d'évaluation.** Suivant l'apprentissage de l'IA ancré dans la communauté, faites juger par les apprenants les productions de l'IA à l'aune de critères localement ancrés de pertinence, de tort et d'utilité, et honorez les contextes où le refus ou la non-utilisation est le bon choix.
- **Adoptez et évaluez des jeux de données culturellement ancrés.** IKS-Instruct et NSMQ Riddles illustrent que des données non occidentales, propres à un [[discipline-specific-aied|domaine]], améliorent significativement à la fois la pertinence et l'honnêteté de l'évaluation.

## Concepts liés

- [[equity-in-ai-education]]
- [[curriculum-design]]
- [[ai-literacy]]
- [[k-12]]
- [[teacher-ai-competency]]
- [[teacher-role]]
- [[bias-mitigation]]
- [[critical-pedagogy]]
- [[human-in-the-loop-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[language-learning]]
- [[cs-education]]
- [[pedagogy]] — Parapluie : pédagogies et stratégies d'enseignement dans l'IA en éducation

## Articles liés

- [[llm-cultural-relevance-k12]] — Les LLM au service d'une pédagogie culturellement pertinente de la maternelle à la terminale
- [[civic-education-ai-lesson-plans]] — Plans de leçon générés par l'IA en éducation civique
- [[ojeda-ramirez-community-based-ai-learning]] — Apprentissage de l'IA ancré dans la communauté
- [[genai-minoritized-knowledges-disability]] — L'IA générative et la marginalisation des savoirs minorisés
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles : repère de référence ghanéen en STIM
- [[cross-cultural-student-perceptions-genai-computing]] — Perceptions transculturelles de l'usage de l'IA générative
- [[international-students-conversational-ai-adaptation]] — Les étudiants internationaux et l'IA conversationnelle
- [[connected-ai-lesson-planning-vietnam]] — ConnectED : planification des leçons au Vietnam
- [[culturally-aware-student-stress-chatbot-2026]] — Un chatbot culturellement sensible alimenté par l'IA pour la détection du stress et le soutien au bien-être parmi des étudiants universitaires pakistanais, utilisant le TAL et l'apprentissage automatique
