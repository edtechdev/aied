---
title: "Cadre ICAP"
created: "2026-08-14T04:33:38-04:00"
updated: "2026-10-10T03:05:35-04:00"
type: concept
connected_faqs: [designing-ai-into-learning]
foundations: [learning-design]
pedagogy: [active-learning, cognitive-psychology, collaborative-learning, learning-theories]
technology: [educational-nlp, learning-analytics]
confidence: high
translation_of: concepts/icap-framework
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Le cadre ICAP** (Interactive–Constructive–Active–Passive) — une taxonomie de l'engagement cognitif élaborée par Michelene Chi, qui classe le comportement de l'apprenant en quatre modes de changement des connaissances, ordonnés du moins au plus cognitivement engagé : *passif*, *actif*, *constructif* et *interactif*. Dans le domaine de l'IA en éducation, ICAP fournit à la fois une cible de conception (construire des outils qui suscitent un engagement constructif et interactif plutôt qu'une consommation passive) et une grille d'évaluation (mesurer si les apprenants et les systèmes d'IA sont réellement engagés dans les modes supérieurs).([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])

## Questions à examiner

- Songez à la dernière fois où vous avez « appris » quelque chose en regardant une vidéo ou en lisant. Le cadre ICAP qualifierait cela de passif. Que retenez-vous réellement d'une exposition passive, par rapport à ce que vous en retenez en l'expliquant à quelqu'un d'autre ?
- ICAP ordonne l'engagement du passif à l'actif, puis au constructif, puis à l'interactif. Où les outils d'IA que vous avez utilisés ont-ils tendance à maintenir les apprenants — et le fait de cliquer à travers des exercices adaptatifs compte-t-il comme un réel engagement ou comme une simple activité ?
- La page soutient que le déplacement le plus lourd de conséquences est celui de l'Actif vers le Constructif — produire des explications ou de nouveaux artefacts plutôt que se contenter d'appliquer des connaissances. Pourquoi produire quelque chose de nouveau pourrait-il être l'étape qui transforme réellement la compréhension ?
- Une étude a montré que les experts humains surpassent de loin les modèles d'IA pour l'étiquetage des niveaux d'engagement. Si les systèmes automatisés sous-estiment systématiquement l'engagement, comment devrions-nous traiter les métriques d'« engagement » générées par l'IA ?
- ICAP montre qu'un outil qui répond à votre place vous maintient passif, tandis qu'un outil qui incite et qui questionne vous pousse vers un engagement constructif et interactif. Quel choix de conception feriez-vous pour vos apprenants ?
- Le cadre est utilisé à la fois comme cible de conception et comme grille d'évaluation. Comment pourriez-vous utiliser ICAP dans votre propre enseignement ou conception pour déterminer si les apprenants sont réellement engagés, et pas simplement actifs ?

## Introduction

ICAP repose sur l'hypothèse que *ce que font les apprenants* détermine la quantité et la nature de ce qu'ils apprennent. Le cadre de Chi postule qu'à mesure que l'engagement passe du passif à l'actif, puis au constructif, puis à l'interactif, la nature du changement des connaissances s'approfondit — de l'emmagasinement, à l'attention, à l'intégration des nouvelles connaissances aux connaissances antérieures, jusqu'à la co-création de connaissances par le dialogue. Cela fait d'ICAP un puissant outil d'analyse pour l'IA en éducation, où la question centrale de conception est de savoir si l'assistance par l'IA soutient ou déplace l'engagement cognitif des apprenants.

## Les quatre modes

| Mode | Comportement de l'apprenant | Nature du changement des connaissances |
|------|------------------------------|---------------------------------------|
| **Interactive** | Dialogue avec un autre apprenant ou agent, co-construction du sens ; par exemple défendre une position, [[collaborative-learning|résolution collaborative de problèmes]] | Co-création de nouvelles connaissances par une activité conjointe et réciproque |
| **Constructive** | Production d'une sortie nouvelle au-delà de ce qui est donné ; par exemple s'auto-expliquer, comparer, réfléchir, dessiner | Intégration des nouvelles informations aux connaissances antérieures pour produire une compréhension inédite |
| **Active** | Manipulation du matériau ou action sur celui-ci ; par exemple prendre des notes, souligner, s'arrêter pour réfléchir | Attention portée aux informations et emmagasinement de celles-ci, parfois sans intégration profonde |
| **Passive** | Réception d'informations sans action manifeste ; par exemple écouter un exposé, lire | Emmagasinement d'informations, avec un traitement ultérieur limité |

## ICAP dans l'IA en éducation

### Une cible de conception pour les outils d'IA

ICAP recadre la question centrale de conception pour l'IA en éducation : un outil d'IA qui *répond à la place de* l'apprenant le maintient dans les modes passif et actif, tandis qu'un outil qui *incite, questionne et [[scaffolding|étaye]]* peut pousser les apprenants vers un engagement constructif et interactif. Cela aligne ICAP sur la pédagogie [[constructivist]] et sur la recherche sur l'[[active-learning]].([[multimodal-learning-genai]])([[hingle-collaborative-ai-literacy-2025]])

### Une grille d'évaluation pour les agents d'IA

ICAP sert aussi de cadre de mesure. Dans une étude, les chercheurs ont étendu ICAP à une échelle de 7 points pour caractériser l'engagement cognitif dans le dialogue collaboratif, puis ont comparé des annotateurs humains entraînés à un étiquetage fondé sur des LLM (apprentissage en contexte, sollicitation sans exemple et agents réflexifs). La fiabilité interjuges humaine (kappa = 0.906–0.998) dépassait largement celle de l'annotation par LLM (kappa = 0.541–0.609), ce qui souligne le rôle d'ICAP — et ses limites actuelles — dans la mesure automatisée de l'engagement pour les chaînes de traitement de la [[learning-analytics]].([[icap-cognitive-engagement-llm-agents]])

### Guider l'animation du dialogue collaboratif

Parce que l'engagement interactif est le mode le plus élevé d'ICAP, le cadre aide à situer la valeur de l'animation par l'IA dans la [[collaborative-learning|discussion collaborative en ligne]]. Les recherches sur le [[llm-facilitation-timing-online-discussions|moment d'intervention de l'animation par LLM]] montrent que *le moment où* une IA intervient dans une discussion détermine si elle soutient ou interrompt la co-construction interactive de connaissances — une mise en garde fondée sur ICAP selon laquelle les agents de modération autonomes doivent être calibrés vers une retenue proche de l'humaine, plutôt que vers une animation trop empressée.

### ICAP et la conception de l'analytique de l'apprentissage

ICAP fonde les critiques adressées aux métriques d'« engagement » superficielles : interagir avec un tableau de bord en cliquant sur des filtres est un engagement *actif*, et non *interactif*. Les conceptions efficaces en analytique de l'apprentissage suscitent l'auto-évaluation et le dialogue bidirectionnel, plutôt que de se contenter d'afficher des données — une implication tirée directement du cadre de Chi.([[interactive-learning-dashboards-engagement]])

### La transition Actif→Constructif comme étape décisive

Bien qu'ICAP décrive une hiérarchie, le déplacement le plus lourd de conséquences pour l'apprentissage est le saut des modes *Actif* à *Constructif* (Chi & Boucher, 2023). L'engagement actif (appliquer des connaissances à des scénarios similaires mais non identiques) prépare les apprenants, mais c'est l'engagement constructif — produire des explications, des résumés ou de nouveaux artefacts — qui les rend capables de créer de nouvelles connaissances. C'est là l'enjeu crucial pour l'IA en éducation : un outil qui maintient les apprenants dans le mode Actif (par exemple cliquer à travers des exercices adaptatifs) peut sembler productif, mais ne les pousse jamais vers la génération constructive qui produit une compréhension durable. Les interventions collaboratives et axées sur la littératie qui étayent délibérément le saut Actif→Constructif tendent à montrer les gains les plus forts.([[hingle-collaborative-ai-literacy-2025]])

### ICAP comme signal d'étayage adaptatif dans les tuteurs intelligents

Les modes d'ICAP peuvent être opérationnalisés comme des *états cibles* parmi lesquels un tuteur adaptatif choisit pour étayer l'engagement cognitif, sur la base d'un modèle d'étudiant évolutif. Dans un tuteur intelligent fondé sur la logique, [[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al.]] choisissaient dynamiquement entre un mode d'exemple résolu « Guidé » *Actif* et un mode d'exemple « Buggy » *Constructif*. En comparant le traçage bayésien des connaissances (BKT) à l'apprentissage profond par renforcement (DRL) et à une référence non adaptative sur 113 étudiants, les deux politiques adaptatives amélioraient la performance au post-test — mais de manière différenciée : le BKT donnait les gains les plus importants aux étudiants à connaissances antérieures faibles (les aidant à rattraper leur retard), tandis que le DRL produisait les scores de post-test les plus élevés parmi les étudiants à connaissances antérieures fortes. Cela démontre concrètement que *personnaliser* efficacement le mode ICAP d'un tuteur intelligent dépend de la modélisation des connaissances actuelles de l'apprenant — et qu'aucun mode unique ni aucune méthode adaptative unique ne convient à chaque apprenant. Cela relie directement la hiérarchie ICAP à la conception de l'[[adaptive-learning]] et du [[knowledge-tracing]].

### ICAP comme modèle d'état cognitif pour générer des agents à l'allure humaine

Au-delà de la sélection des modes de tâche, ICAP a été intégré directement dans le *modèle cognitif* d'un agent éducatif génératif. [[cogevolution-student-cognitive-evolution-agent-2026|CogEvolution]] construit un « perceptron de profondeur cognitive » fondé sur ICAP, qui projette les entrées sur une distribution de probabilité répartie entre les quatre niveaux d'ICAP, en fusionnant celle-ci avec des mises à jour d'état inspirées de l'évolution et avec la récupération mnésique fondée sur la théorie de la réponse aux items, afin de simuler l'évolution cognitive d'un étudiant (y compris des transitions telles que confusion → insight). Des ablations montrent que le retrait du module de perception ICAP effondre la capacité de l'agent à distinguer apprentissage superficiel et apprentissage profond — ce qui prouve que la taxonomie ICAP peut servir de mesure fine et interne de l'engagement cognitif pour la [[simulating-students|simulation d'étudiants]], et pas seulement de grille d'évaluation externe.

### ICAP comme ancrage de l'évaluation de l'interaction réflexive avec l'IA générative

L'accent mis par ICAP sur l'engagement génératif et processuel a été repris par des cadres d'évaluation qui évaluent *la manière dont* les étudiants apprennent avec l'IA générative. [[assessing-student-drive-framework-2025|Le cadre DRIVE]] aligne explicitement son construit central — l'interaction réflexive profonde avec les sorties de l'IA générative — sur le type d'engagement génératif qu'ICAP identifie comme menant à un apprentissage plus profond, et l'utilise pour distinguer la consommation superficielle du retravail efforté et réflexif des contenus générés par l'IA. Cela positionne ICAP comme un ancrage théorique pour concevoir et mesurer des interactions d'apprentissage significatives avec l'[[generative-ai|IA générative]], plutôt que pour se contenter de suivre l'usage.

## Implications pour la conception et la recherche

1. **Concevoir pour les modes supérieurs.** Les outils d'IA devraient inciter les apprenants à générer, à expliquer et à dialoguer — une activité constructive et interactive — plutôt que de délivrer des contenus passifs ou d'agir comme des machines à réponses.([[multimodal-learning-genai]])
2. **Engager les apprenants dans l'ensemble des modes.** Un enseignement efficace de la [[ai-literacy|littératie en IA]] engage les apprenants à plusieurs niveaux d'ICAP — exposition passive, manipulation active, génération constructive et dialogue interactif — en sélectionnant le mode qui correspond à l'objectif d'apprentissage.([[hingle-collaborative-ai-literacy-2025]])
3. **Mesurer l'engagement honnêtement.** ICAP donne aux chercheurs et aux concepteurs un vocabulaire commun pour distinguer le réel engagement cognitif de la simple activité — un correctif à la notion superficielle d'[[student-engagement]].([[icap-cognitive-engagement-llm-agents]])
4. **Surveiller l'écart d'annotation entre humains et LLM.** Si des systèmes automatisés sont utilisés pour coder l'engagement, leur déficit systématique par rapport à des humains entraînés doit être pris en compte.([[icap-cognitive-engagement-llm-agents]])

## Concepts liés

- [[active-learning]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[learning-analytics]]
- [[constructivist]]
- [[learning-design]]
- [[metacognition]]
- [[ai-literacy]]
- [[human-in-the-loop-ai]]
- [[limitations-in-aied-research]]

## Articles liés

- [[icap-cognitive-engagement-llm-agents]] — Cadre ICAP étendu pour la mesure de l'engagement par annotation humaine et par LLM
- [[hingle-collaborative-ai-literacy-2025]] — Littératie en IA collaborative à travers les quatre modes d'ICAP
- [[interactive-learning-dashboards-engagement]] — ICAP comme critique de l'engagement superficiel en analytique de l'apprentissage
- [[multimodal-learning-genai]] — ICAP et engagement cognitif dans la conception d'apprentissages multimodaux
- [[llm-facilitation-timing-online-discussions]] — Moment d'intervention de l'animation par LLM dans les discussions collaboratives en ligne
- [[adaptive-scaffolding-cognitive-engagement-its]] — Étayage ICAP adaptatif dans un tuteur intelligent (BKT contre DRL)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — Modèle de profondeur cognitive ICAP dans un agent génératif de simulation d'étudiants
- [[assessing-student-drive-framework-2025]] — Évaluation ancrée dans ICAP de l'interaction réflexive avec l'IA générative
