---
title: "Enseignement de la chimie"
created: "2026-08-19T12:55:00-04:00"
updated: "2026-10-10T03:05:33-04:00"
type: concept
foundations: [ai-literacy, philosophy-of-ai-in-education]
technology: [generative-ai]
assessment: [assessment]
discipline: [chemistry education, stem education]
level: [higher ed, k 12, teacher education]
confidence: high
translation_of: concepts/chemistry-education
source_updated: "2026-09-03T15:00:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'enseignement de la chimie** — l'étude de la manière dont les étudiants apprennent la chimie et de la façon de l'enseigner plus efficacement, englobant l'[[generative-ai|IA générative]] dans la conception de laboratoire et d'expériences, l'[[formative-assessment|évaluation formative]] médiatisée par l'IA, l'enseignement contextualisé et fondé sur l'enquête, l'exactitude technique des [[llm|LLM]] sur les tâches de chimie, et la philosophie de l'expérimentation à l'ère de l'IA. La recherche sur l'enseignement de la chimie s'attache aux exigences propres à la discipline — des concepts abstraits et submicroscopiques, une notation symbolique et représentationnelle (formules, SMILES, spectres) et la pratique concrète du laboratoire — qui en font un contexte riche et distinctif pour étudier comment l'IA soutient et met au défi l'apprentissage.

## Questions à examiner

- La chimie associe des concepts abstraits et submicroscopiques, une notation symbolique spécialisée et la pratique concrète du laboratoire. Avant de lire, laquelle de ces trois exigences distinctes pensez-vous que l'IA traite bien, et laquelle pourrait-elle avoir du mal à traiter — d'autant que la page avertit de l'échec des LLM sur les tâches quantitatives rigoureuses et de raisonnement spatial ?
- Une étude a fait concevoir des protocoles de travaux pratiques par les étudiants avec l'IA, les mettre en œuvre concrètement et les faire valider par des professionnels — augmentant significativement la confiance expérimentale et la pensée critique tout en faisant évoluer le rôle du personnel de la démonstration vers l'accompagnement. Qu'est-ce qui distingue cette « IA pour la conception expérimentale » du simple fait de demander des réponses à l'IA ?
- Les preuves systématiques montrent que les LLM peuvent définir des termes de chimie fondamentaux mais se comportent mal sur les tâches quantitatives rigoureuses, peinent sur le raisonnement spatial (comme la RMN) et font preuve de trop de confiance. Si une IA vous donne avec assurance une réponse fausse à un problème de chimie difficile, comment la détecteriez-vous — et quelle compétence cette détection exige-t-elle ?
- La recherche propose d'attribuer à l'IA des rôles distincts selon le niveau de réussite — un tuteur Patient pour les élèves faibles, un Coach Personnel pour le niveau intermédiaire, et un Partenaire de Discussion Intellectuelle pour les élèves forts. Pourquoi, à votre avis, un même outil d'IA devrait-il jouer des rôles différents selon les étudiants, et qu'est-ce que cela exige de l'enseignant humain ?
- La page avertit d'une « dérive épistémique » — le recours à des algorithmes opaques détachant l'enquête scientifique de la compréhension causale. Si l'IA prédit un résultat expérimental, quand cette prédiction vous aide-t-elle à comprendre la chimie, et quand remplace-t-elle silencieusement la compréhension elle-même ?

## Introduction

L'enseignement de la chimie est devenu un domaine fertile pour la recherche sur l'IA en éducation parce que la chimie associe un **contenu conceptuel abstrait**, une **représentation symbolique spécialisée** et une **pratique physique de laboratoire**. Les outils d'IA (notamment ChatGPT et les agents conversationnels) sont utilisés pour expliquer des sujets complexes, soutenir le travail de laboratoire et la conception d'expériences, fournir une [[feedback|rétroaction]] et une [[formative-assessment|évaluation formative]] personnalisées, et [[simulation|simuler]] des expériences. Dans le même temps, la recherche documente les **limites techniques** des [[llm|LLM]] sur les tâches de chimie rigoureuses et le risque de **dérive épistémique** et de dépendance excessive.

### Key research themes

**L'IA au service du laboratoire et de la conception d'expériences** constitue une force distinctive de la recherche sur l'enseignement de la chimie. **[[ai-supported-experimental-design-chemistry-2026|Yim et Lui]]** ont intégré des [[conversational-ai|chatbots]] d'IA à un laboratoire de chimie analytique de deuxième cycle : les étudiants ont utilisé l'IA pour **concevoir des protocoles de travaux pratiques**, les ont mis en œuvre concrètement et les ont fait valider par des professionnels de la certification — améliorant significativement la confiance expérimentale et les compétences de [[critical-thinking|pensée critique]] et de résolution de problèmes tout en faisant évoluer le rôle du personnel de la démonstration « livre de recettes » vers l'accompagnement. Le volet de la [[philosophy-experimentation-ai-chemistry-2026|philosophie de l'expérimentation]] examine comment l'IA redessine l'épistémologie, l'ontologie (les prédictions de l'IA dans un espace « liminal ») et la méthodologie des expériences de chimie, et avertit d'un **[[agency|déplacement de l'autonomie]]** et d'une dépendance excessive.

**L'enseignement contextualisé et fondé sur l'enquête** utilise l'IA au sein de [[pedagogy|pédagogies]] structurées. **[[context-based-ai-secondary-chemistry-2026|Abdikayumova et Madybekova]]** ont combiné le **modèle d'enseignement 7E** avec les simulations PhET et le tutorat par ChatGPT pour la chimie de 10e année, constatant une réussite et un engagement significativement plus élevés qu'avec l'enquête seule ou l'enseignement conventionnel — démontrant la synergie de la contextualisation, de l'enquête structurée et de l'IA adaptative. Cela rejoint les cadres [[constructivist|constructivistes]] et d'[[personalized-learning|apprentissage personnalisé]].

**L'évaluation formative médiatisée par l'IA et la collaboration humain–IA.** **[[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom et al.]]** ont constaté que les [[teacher-role|enseignants]] de sciences en formation perçoivent des rôles distincts, fondés sur le niveau de réussite : l'enseignant humain comme expert adaptatif (Simplificateur/Approfondisseur), et ChatGPT comme outil personnalisé d'apprentissage autorégulé passant du *Patient [[intelligent-tutoring|tuteur]]* (élèves faibles) au *Coach Personnel* (intermédiaires) puis au *Partenaire de Discussion Intellectuelle* (forts) — proposant un **écosystème d'apprentissage synergique enseignant–IA**. Cela fait progresser la recherche sur la [[human-ai-collaboration|collaboration humain-IA]], l'[[formative-assessment|évaluation formative]] et l'[[self-regulated-learning|apprentissage autorégulé]].

**L'exactitude technique et la littératie critique en IA.** Les preuves systématiques montrent que les [[llm|LLM]] peuvent définir des termes de chimie fondamentaux mais se comportent mal sur les tâches quantitatives rigoureuses, peinent sur le raisonnement spatial (par ex. la RMN), font preuve de trop de confiance et sont sensibles à la notation ([[ai-science-chemistry-education-systematic-review-2025|Erümit et Özdemir Sarıalioğlu]] ; les constats de ChemBench/QCBench dans la [[unesco-ai-guidelines-chemical-education-2026|perspective UNESCO]]). Cela fait de **l'engagement évaluatif face aux productions de l'IA** — interroger, vérifier et recouper par rapport aux principes chimiques — un objectif d'apprentissage central, rejoignant l'[[ai-literacy|IA literacy]], la [[critical-thinking|pensée critique]] et la [[reducing-ai-misuse|réduction des usages abusifs]].

**L'éthique, les politiques et la dérive épistémique.** La [[unesco-ai-guidelines-chemical-education-2026|perspective des lignes directrices de l'UNESCO]] avertit de la **dérive épistémique** — le recours à des algorithmes opaques détachant l'enquête scientifique de la compréhension causale — et appelle à passer de la diffusion de contenus à la **création de connaissances**, à une littératie chimique critique en IA, à une évaluation priorisant le raisonnement humain, et à la réduction de l'écart d'accès mondial.

### Connexions aux concepts apparentés

L'enseignement de la chimie se situe dans le domaine plus large des [[stem-education|STIM]] et partage beaucoup avec la [[physics-education|physique]] (pratique de laboratoire, concepts abstraits, résolution de problèmes) tout en ayant des connexions distinctives : à l'[[assessment|évaluation]] et à l'[[formative-assessment|évaluation formative]] par l'évaluation médiatisée par l'IA ; à la [[simulation|simulation]] et à l'apprentissage en laboratoire par les expériences virtuelles ; à la [[teacher-education|formation des enseignants]] par la recherche sur les enseignants de sciences en formation et le développement professionnel ; à l'[[educational-policy-ai|IA dans l'éducation]] et à l'[[ethics|éthique]] par la [[governance|gouvernance]] de l'IA dans les STIM ; et à la [[philosophy-of-ai-in-education|philosophie de l'IA en éducation]] par l'épistémologie et l'ontologie de l'expérimentation. Les concepts d'[[ai-literacy|IA literacy]] et de [[reducing-ai-misuse|réduction des usages abusifs]] sont essentiels pour la dimension d'usage responsable, et l'[[higher-ed|enseignement supérieur]] et le [[k-12|primaire et secondaire]] rendent compte des niveaux auxquels se situe la recherche sur l'IA en chimie.

## Implications for chemistry instructors

- **Exploiter l'IA pour la conception d'expériences, et pas seulement pour les réponses.** [[ai-supported-experimental-design-chemistry-2026|Yim et Lui]] montrent que faire concevoir des protocoles de travaux pratiques par les étudiants avec l'IA et les valider concrètement bâtit la confiance et la pensée critique tout en faisant passer le personnel de la démonstration à l'accompagnement — un modèle pour les cours de laboratoire.
- **Exiger un engagement évaluatif face aux productions de l'IA.** Les preuves systématiques constatent que les [[llm|LLM]] sont faibles en chimie quantitative rigoureuse, en raisonnement spatial (RMN) et trop confiants — faites de l'interrogation et du recoupement de l'IA par rapport aux principes chimiques un objectif d'apprentissage explicite.
- **Attribuer des rôles d'IA distincts et sensibles au niveau.** La [[instructor-ai-roles-chatgpt-formative-assessment-2026|recherche sur les rôles enseignant–IA]] constate que l'enseignant humain joue l'expert adaptatif et ChatGPT un outil personnalisé passant du Patient tuteur (élèves faibles) au Coach puis au Partenaire de Discussion Intellectuelle (élèves forts) — différenciez le soutien selon le niveau des étudiants.
- **Combiner l'IA avec une pédagogie structurée et contextualisée.** Le dispositif [[context-based-ai-secondary-chemistry-2026|7E + PhET + ChatGPT]] a surpassé l'enquête seule et l'enseignement conventionnel, montrant que l'IA fonctionne mieux à l'intérieur d'un modèle d'instruction établi.
- **Rester vigilant face à la dérive épistémique et à la dépendance excessive.** La recherche sur la [[philosophy-experimentation-ai-chemistry-2026|philosophie de l'expérimentation]] et les orientations de l'UNESCO avertissent qu'une IA opaque peut détacher l'enquête de la compréhension causale — préservez une évaluation priorisant le raisonnement humain et l'autonomie des étudiants.
- **Noter sélectivement les travaux manuscrits ouverts.** Dans un examen final de chimie générale manuscrit réunissant 296 étudiants, un LLM multimodal notait de façon fiable les réponses textuelles et les équations de réactions chimiques, mais moins bien que le hasard les schémas et les graphiques (les grilles de fond distraient visuellement la vision de l'IA) ; associer un filtre de risque fondé sur l'[[item-response-theory|IRT]] et [[human-in-the-loop-ai|déférer]] les items graphiques à des humains a rendu l'automatisation défendable pour un usage [[summative-assessment|sommative]] ([[cvengros-grading-handwritten-chemistry-ai-2026]]).

## Connected Concepts

- [[stem-education]]
- [[physics-education]]
- [[discipline-specific-aied]]
- [[generative-ai]]
- [[ai-literacy]]
- [[assessment]]
- [[formative-assessment]]
- [[feedback]]
- [[human-ai-collaboration]]
- [[self-regulated-learning]]
- [[constructivist]]
- [[personalized-learning]]
- [[simulation]]
- [[critical-thinking]]
- [[reducing-ai-misuse]]
- [[cognitive-offloading]]
- [[ethics]]
- [[educational-policy-ai]]
- [[teacher-education]]
- [[philosophy-of-ai-in-education]]
- [[higher-ed]]
- [[k-12]]
- [[agency]]
- [[biology-education]] — L'enseignement de la biologie et l'IA : assistants d'enseignement en laboratoire, littératie en IA en biologie, pensée critique, outils spécialisés

## Connected Articles

- [[ai-science-chemistry-education-systematic-review-2025]] — Revue systématique de l'IA dans l'enseignement des sciences et de la chimie
- [[unesco-ai-guidelines-chemical-education-2026]] — Traduire les lignes directrices de l'UNESCO sur l'IA pour l'enseignement de la chimie
- [[context-based-ai-secondary-chemistry-2026]] — Contexte + IA en chimie au secondaire (7E)
- [[ai-supported-experimental-design-chemistry-2026]] — Conception expérimentale assistée par IA en chimie pratique
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Rôles de l'enseignant et de l'IA dans l'évaluation formative enrichie par ChatGPT
- [[philosophy-experimentation-ai-chemistry-2026]] — Philosophie de l'expérimentation en chimie avec l'IA
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
