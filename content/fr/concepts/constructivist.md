---
connected_resources: [vibes-diy]
title: "Le constructivisme"
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-10T03:05:32-04:00"
type: concept
foundations: [learning-design]
pedagogy: [active-learning, collaborative-learning, experiential-learning, learning-theories, scaffolding, self-regulated-learning]
technology: [generative-ai]
confidence: high
translation_of: concepts/constructivist
source_updated: "2026-09-30T10:54:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Le constructivisme** — la [[learning-theories|théorie de l'apprentissage]] selon laquelle la connaissance est activement construite par l'apprenant à travers l'expérience, la réflexion et l'interaction, plutôt que reçue passivement d'un enseignant ou d'un système. Dans le champ de [[ai-education|l'IA en éducation]], le constructivisme fonde l'engagement de conception selon lequel les outils d'IA doivent soutenir la construction du savoir par les apprenants eux-mêmes — [[prompt-engineering|incitation]], questionnement et [[scaffolding]] — plutôt que d'accomplir à leur place le [[cognitive-offloading|travail cognitif]].([[ai-vocational-education-training-review]])([[genai-mindtool-generative-learning]])

## Questions à examiner

- Vous est-il déjà arrivé d'« apprendre » quelque chose en cours pour réaliser ensuite que vous n'étiez pas réellement capable de l'expliquer ou de l'utiliser ? Que manquait-il — et qu'est-ce que cela nous dit sur la manière dont se forme une véritable compréhension ?
- Le constructivisme affirme que la connaissance se construit, qu'elle ne se transmet pas. Si c'est vrai, que se passe-t-il lorsqu'un tuteur IA se contente de fournir la bonne réponse ?
- L'expression « constructivisme de nom, [[behaviorism]] de fait » décrit des outils d'IA qui se réclament de [[active-learning|l'apprentissage actif]] mais qui, en réalité, ne proposent que des exercices répétitifs. Avez-vous déjà observé cet écart ? Comment le détecteriez-vous dans un outil que vous évaluez ?
- Le constructionnisme de Papert affirme que l'on apprend le plus puissamment en construisant des artéfacts partageables. À l'ère de l'IA, un cadre l'énonce ainsi : « l'IA écrit le code, mais l'étudiant écrit le modèle. » Que construit réellement un étudiant lorsque l'IA prend en charge la mécanique ?
- Certains outils d'IA pratiquent le « refus génératif » — ils retiennent les réponses et posent des questions à la place. Quand un refus délibéré serait-il plus précieux pédagogiquement qu'une réponse fournie ?
- Si la connaissance se construit, alors la littératie en IA ne s'apprend pas en assistant à des cours sur l'IA — elle s'apprend en utilisant, en critiquant et en construisant avec l'IA. Qu'est-ce que cela implique quant à la manière dont la littératie en IA devrait vous être enseignée, ou l'être à vos étudiants ?

## Introduction

Le constructivisme est une famille de théories plutôt qu'une doctrine unique, mais sa thèse centrale est partagée : les apprenants n'absorbent pas le sens, ils le construisent. Dans cette perspective, la compréhension n'est pas l'accumulation de faits transmis, mais l'organisation active de l'expérience en modèles mentaux. Cela a des implications directes sur la manière dont l'IA en éducation devrait être conçue, évaluée et enseignée — et cela aide à expliquer à la fois la promesse et le risque de l'[[generative-ai|IA générative]] en classe.

**[[mishra-control-vs-agency-history-2025|Mishra et al.]]** opposent le constructionnisme de Papert (Logo, les micro-mondes, le débogage comme apprentissage) aux tuteurs cognitifs d'Anderson, comme autant de visions concurrentes de l'autonomie créative et du contrôle systématique dans l'histoire de l'AIED.

## Idées centrales

- **La connaissance se construit, elle ne se transmet pas.** Les apprenants bâtissent leur compréhension en agissant sur le monde, en réconciliant les informations nouvelles avec leurs [[prior-knowledge|connaissances antérieures]] et en réfléchissant aux résultats. Un tuteur IA qui se contente de fournir les bonnes réponses contourne l'activité constructive qui produit une compréhension durable.([[generative-refusal-ai-tools-for-thought]])
- **Les connaissances antérieures façonnent les nouveaux apprentissages.** Les idées nouvelles sont interprétées à travers les modèles mentaux existants de l'apprenant ; l'enseignement doit donc mettre au jour et s'appuyer sur ce que les apprenants savent déjà — un principe directement pertinent pour les [[misconceptions]] et pour les tuteurs IA qui s'adaptent à l'apprenant.
- **L'interaction sociale soutient la construction.** Un courant majeur — le constructivisme social — soutient que le sens se co-construit par le dialogue, la collaboration et l'activité culturellement [[situated-learning|située]]. Cela rattache le constructivisme à l'[[collaborative-learning]] et aux démarches de type [[socratic-method]] dans lesquelles l'IA interroge plutôt qu'elle ne dicte.([[ai-agents-constructive-conflict-design-education-2026]])
- **La construction est visible dans l'activité.** Les apprenants révèlent (et consolident) leur compréhension en générant, en expliquant et en produisant — c'est pourquoi le [[icap-framework|cadre ICAP]] classe l'[[student-engagement|engagement]] « constructif » et « interactif » au-dessus des modes « actif » et « passif ».([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])

Une limite de la théorie est qu'elle présuppose une agentivité épistémique centrée sur l'humain, ce qui ne lui permet pas de rendre compte d'une IA qui simule le raisonnement et co-construit le sens ; le supplément proposé est la co-agentivité épistémique, dans laquelle les apprenants traitent la production de l'IA comme contestable et conservent la souveraineté épistémique sur ce qui vaut comme connaissance ([[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Samuel (2026)]]).

## Constructionnisme

Le **constructionnisme** est la branche du constructivisme associée à Seymour Papert, qui ajoute une thèse spécifique : l'apprentissage est le plus puissant lorsque les apprenants construisent des *artéfacts externes et partageables* — des objets physiques ou numériques qu'ils conçoivent, réalisent et déboguent. Là où le constructivisme piagétien se concentre sur la construction mentale interne de la connaissance, le constructionnisme soutient que cette construction est mieux soutenue et rendue visible par la fabrication de quelque chose de tangible (Harel & Papert, 1991). Dans l'[[history-of-aied|histoire de l'AIED]], le constructionnisme incarne le pôle de l'« autonomie » dans la tension centrale du champ entre contrôle et autonomie, face aux tuteurs cognitifs structurés d'Anderson.

- **Logo et les micro-mondes.** Papert a co-développé Logo (1967) avec son emblématique « tortue » — un micro-monde de programmation où les enfants explorent la géométrie et d'autres idées puissantes en commandant et en débogant un agent visible. Le débogage est réinterprété comme une part naturelle et précieuse de l'apprentissage, non comme un échec.([[mishra-control-vs-agency-history-2025]])
- **La construction plutôt que l'instruction.** Le constructionnisme critique l'« instructionnisme » — l'hypothèse selon laquelle [[teacher-role|enseigner]] est le transfert efficace de la connaissance — et positionne au contraire les apprenants comme des [[agentic-ai|agents autonomes]] qui construisent leur compréhension par des projets et de l'expérimentation (Papert, 1980, *Mindstorms*).
- **Une filiation vers l'[[edtech-platform|EdTech]] moderne.** L'accent mis par Logo sur la création concrète et manuelle sous-tend l'[[game-based-learning]], l'[[project-based-learning]], la [[educational-robotics|robotique]] éducative (LEGO Mindstorms, [[cs-education|Scratch]], les briques programmables) et, plus largement, le mouvement maker.
- **L'héritage constructionniste dans l'IA.** Le constructionnisme implique que les outils d'IA doivent servir de **matériaux avec lesquels construire** — des outils de pensée et des co-constructeurs créatifs que l'apprenant dirige — plutôt que d'instructeurs fournisseurs de réponses. C'est l'ancêtre direct du cadrage [[genai-mindtool-generative-learning|mindtool]] que la base de connaissances donne de l'IA générative, ainsi que des engagements de conception qui préservent l'[[agency|agentivité de l'apprenant]] sur le processus d'apprentissage.([[educational-robotics-pathways-2026]])

- **Le constructionnisme à l'ère de l'IA générative : apprendre en écrivant le modèle, pas le code.** L'arrivée d'une IA générant du code a *renouvelé* le constructionnisme comme réponse de conception plutôt qu'elle ne l'a affaibli. Le cadre **Code-to-Learn with Generative AI (CtL-GenAI)** de Gousopoulos synthétise le constructionnisme, la théorie de la charge cognitive, l'[[self-regulated-learning]], le modèle d'engagement [[icap-framework|ICAP]], l'[[productive-failure|échec productif]] et l'étayage [[sociocultural-learning|socioculturel]] pour des lycéens construisant des logiciels avec l'IA. Sa thèse organisatrice — **« l'IA écrit le code, mais l'étudiant écrit le modèle »** — recadre la cible de la construction : lorsque l'IA générative accomplit le travail syntaxe d'écriture du code, la construction de l'apprenant se déplace vers l'élaboration et le débogage du *modèle conceptuel* que le code exprime. CtL-GenAI définit l'auctorialité du modèle comme un construit à quatre facettes et à niveaux ordonnés porteurs d'indicateurs observables, et formalise un modèle de mesure falsifiable à crédit partiel pour tester si un tel apprentissage se produit réellement.([[code-to-learn-genai-artifact-construction-2026]])([[ai-writes-code-student-writes-model-2026]]) C'est le « fabrique quelque chose de partageable et débogue-le » classique du constructionnisme, mis à jour pour que l'artéfact que l'étudiant fabrique et sur lequel il réfléchit soit un modèle mental rendu visible, et non plus seulement du code source — et cela associe la théorie à un programme de mesure explicite, de sorte que la thèse devient empiriquement testable.

Le constructionnisme est donc à la fois une théorie de l'apprentissage et une critique : il soutient que la finalité de l'éducation n'est pas de reproduire les structures de savoir existantes mais d'autonomiser les apprenants pour qu'ils les construisent et les transforment — une position aux implications claires sur la question de savoir si l'IA en éducation renforce ou conteste les hiérarchies établies.

## Le constructivisme et l'IA en éducation

### L'IA au service de l'apprentissage constructiviste

Une IA bien conçue peut permettre la construction à grande échelle. Les systèmes d'[[intelligent-tutoring]] et de [[intelligent-tutoring|tutorat par IA]] peuvent poser des problèmes et guider la [[help-seeking]] au lieu de livrer les réponses ; les environnements de [[simulation]] et d'[[game-based-learning]] permettent aux apprenants de bâtir et de tester des modèles mentaux ; et les activités d'[[project-based-learning]] et d'[[experiential-learning]] soutenues par l'IA donnent aux apprenants des tâches de construction authentiques. Le patron de conception central est le **[[scaffolding]]** — un soutien calibré qui s'estompe à mesure que la compétence grandit — plutôt que l'achèvement.([[conversational-ai-tutors-framework]])([[embodied-inquiry-ai-facilitator-physics-2026]])

Classer les *questions que posent les apprenants* est une manière de voir la construction se produire, et d'agir sur elle. [[lee-learner-question-types-ai-education-2026|Lee, Atif & Kang (2026)]] répartissent 434 questions authentiques d'apprenants, issues de 11 étudiants en informatique répartis sur 12 cours, en trois rôles instructionnels constructivistes — transmetteur de connaissance, facilitateur et co-apprenant — et entraînent quatre transformateurs à les reconnaître. DeBERTa classait les questions de type transmetteur de connaissance factuelle avec 96.67 % de précision, mais les questions de facilitateur avec seulement 78.79 %, et chaque modèle confondait le plus souvent les deux rôles d'ordre supérieur : détecter une investigation dialogique et exploratoire est bien plus difficile que détecter une recherche d'information. Parce que la typologie traite les questions comme des indices diagnostiques d'engagement épistémique plutôt que comme de simples entrées, elle soutient un geste de conception proprement constructiviste — lorsqu'un apprenant ne pose de façon répétée que des questions factuelles, le système peut l'inviter à un questionnement réflexif et exploratoire qui développe la [[metacognition]] et l'investigation critique, au lieu de répondre à la profondeur qu'implique sa question.

### Le risque du « constructivisme de nom, behaviorisme de fait »

Les travaux empiriques mettent régulièrement au jour un écart entre les objectifs constructivistes affichés et les implémentations réelles en IA. Une [[meta-analysis-systematic-review|revue systématique]] de l'IA dans l'enseignement et la formation professionnels, par exemple, a constaté que les théories constructivistes sont affichées dans le discours de la formation professionnelle tandis que **les conceptions behavioristes d'exercices répétitifs dominent dans la pratique**, et a mis en garde contre un « piège de Turing » éducatif — utiliser l'IA pour reproduire l'enseignement humain plutôt que pour l'augmenter.([[ai-vocational-education-training-review]])

Ce schéma se généralise à tout le champ :

- Lorsque l'IA générative rédige, raisonne ou code à la place des étudiants, l'apprenant perd le processus de pensée constructive que la tâche était censée développer — l'inquiétude centrale de la [[cognitive-offloading]] et de la [[cognitive-offloading|sur-dépendance]].([[generative-refusal-ai-tools-for-thought]])
- Les implémentations d'IA qui privilégient la rétroaction adaptative et l'efficacité desservent fréquemment les objectifs d'autonomie de l'apprenant, de réflexion critique et de décision autonome qu'implique le constructivisme.([[ai-vocational-education-training-review]])

### Le piège du nom : la production de l'IA générative n'est pas l'apprentissage génératif

Une confusion récurrente dans le champ repose sur une collision de noms. **L'IA générative** désigne une classe de *technologie* — des modèles qui produisent du texte, des images ou du code. **L'apprentissage génératif** (la théorie de l'apprentissage génératif de Wittrock) désigne une *activité de l'apprenant* — l'apprenant produit activement du sens en construisant des connexions entre les informations nouvelles et les connaissances antérieures, au moyen de stratégies telles que le résumé, la cartographie, le dessin, l'auto-évaluation et l'auto-explication. Les deux ne sont pas la même chose, et les confondre a de réelles conséquences [[pedagogy|pédagogiques]] : une IA qui *produit* un résumé ou une carte pour l'étudiant est l'opposé de l'étudiant qui *accomplit* l'acte d'apprentissage génératif. [[genai-mindtool-generative-learning|Dabbagh & Fake (2026)]] s'appuient directement sur cette distinction, en soutenant qu'un outil de pensée fondé sur l'IA générative ne soutient l'apprentissage génératif que lorsque c'est l'*apprenant* qui pilote l'activité constructive — générer une carte mentale avec l'assistance de l'IA est de l'apprentissage génératif ; faire générer la carte entièrement par l'IA n'en est pas, aussi fluide ou correcte que soit la production.

La question décisive est de savoir **qui accomplit la production de sens** :
- L'étudiant construit-il une explication, ou se contente-t-il d'en recevoir une ?
- L'IA invite-t-elle l'apprenant à relier des idées, ou lui fournit-elle les connexions ?
- L'artéfact (résumé, carte, code, modèle) est-il le *produit* de la construction de l'apprenant, ou un substitut à celle-ci ?

Cela reflète la hiérarchie [[icap-framework|ICAP]] — l'engagement constructif et interactif l'emporte sur l'actif et le passif — mais l'affine : un outil peut produire une sortie visiblement « d'apparence constructive » tandis que l'apprenant demeure dans un mode *passif* ou *actif*. Évaluer un outil d'IA générative au regard de l'apprentissage génératif signifie donc inspecter là où l'effort constructif se situe réellement, et non vérifier la présence d'une production générative. C'est le même piège du constructivisme-de-nom / behaviorisme-de-fait, appliqué au cas spécifique de la génération : l'[[ai-writes-code-student-writes-model-2026|auctorialité du modèle]] (l'IA écrit le code, l'étudiant écrit le modèle) en est une résolution concrète — l'apprenant construit le *modèle conceptuel* même lorsque l'IA fournit l'artéfact de surface.

### Réponses de conception ancrées dans le constructivisme

- **Le refus génératif** — des outils d'IA qui retiennent stratégiquement le texte généré et posent des questions à la place, restituant à l'utilisateur une [[desirable-difficulties|friction cognitive]] afin que le travail d'articulation lui-même bâtisse la compréhension.([[generative-refusal-ai-tools-for-thought]])
- **Des outils de pensée plutôt que des machines à réponses** — utiliser l'IA générative comme un [[genai-mindtool-generative-learning]] que l'apprenant pilote, plutôt que comme un outil qui remplace l'apprenant.([[genai-mindtool-generative-learning]])
- **Le conflit constructif** — des agents d'IA adversariaux qui mettent au défi la conception ou le raisonnement d'un apprenant, en provoquant un réexamen et une construction plus approfondie d'alternatives, dans la tradition du tutorat socratique.([[ai-agents-constructive-conflict-design-education-2026]])

- **Une opposition simulée n'est pas une opposition.** Une contre-position que l'on peut faire surgir à la demande mais qui ne résiste jamais répète la chorégraphie du dialogue tout en retenant ce qui la rend puissante : elle n'a ni incarnation, ni enjeu, ni exposition à une conséquence, de sorte qu'à la différence d'un autre humain elle n'offre aucune voie de réparation ([[synthetic-position-self-authorship-2026|Du et al. (2026)]]).
- **La rétroaction interne par la comparaison** — faire comparer aux apprenants leur propre travail à des exemples de référence générés par l'IA, de sorte que l'acte de comparaison lui-même génère l'apprentissage.([[ai-internal-feedback-evaluative-judgments]])
- **L'incitation sensible au type de question** — classer les questions des apprenants en rôles constructivistes pour que le système puisse délibérément faire progresser un étudiant de la recherche d'information vers une investigation exploratoire et dialogique, au lieu de refléter la profondeur cognitive qu'implique sa question. Parce que les intentions de facilitateur et de co-apprenant restent confondues pour les classifieurs automatiques, cette conception maintient un humain dans la validation de la catégorisation avant qu'elle ne pilote la [[feedback]] ou le [[scaffolding]].([[lee-learner-question-types-ai-education-2026]])
- **La communauté comme standard d'évaluation** — les apprenants conçoivent quelque chose de réel pour leur communauté en utilisant l'IA comme ressource de conception, tandis que les savoirs de la communauté et ses praticiens servent de standard pour juger du résultat, laissant place à la limite, au refus ou au non-usage stratégique lorsque l'engagement critique l'exige.([[ojeda-ramirez-community-based-ai-learning|Ojeda-Ramirez, Gyles & Peppler (2026)]])

## Le constructivisme et « l'éducation à l'IA »

Le constructivisme façonne aussi la manière dont la littératie en IA elle-même est enseignée. Si la connaissance se construit, alors la littératie en IA ne s'acquiert pas par des cours sur les modèles, mais en utilisant, critiquant et construisant activement avec l'IA — en produisant des artéfacts, en interrogeant les sorties et en réfléchissant à l'interaction.([[hingle-collaborative-ai-literacy-2025]]) Cela positionne l'[[ai-literacy]] comme une compétence active et participative plutôt que comme un corpus de connaissances passives, et rattache le constructivisme à la [[critical-thinking]] et à l'[[agency]] dans les rencontres des apprenants avec l'IA.

## Implications pour la conception et la recherche

1. **Préserver l'activité constructive.** L'IA devrait étayer la pensée propre de l'apprenant — l'inviter, le questionner, le soutenir — plutôt que l'accomplir à sa place. Les concepteurs devraient se demander si l'outil accroît ou remplace l'effort constructif de l'apprenant.([[generative-refusal-ai-tools-for-thought]])
2. **Utiliser le prisme [[icap-framework|ICAP]].** ICAP classe l'engagement en modes constructif, interactif, actif et passif — utilisez-le pour évaluer si les interactions avec l'IA suscitent réellement les modes constructif et interactif plutôt qu'une consommation passive. Les concepteurs devraient privilégier les modes les plus profonds (constructif et interactif) lorsque l'objectif d'apprentissage le justifie.([[hingle-collaborative-ai-literacy-2025]])
3. **Aligner théorie et implémentation.** Les chercheurs devraient dépasser la question de savoir si l'IA « fonctionne » pour examiner *comment* elle incarne une théorie de l'apprentissage, en traquant l'écart entre constructivisme de nom et behaviorisme de fait.([[ai-vocational-education-training-review]])
4. **Étudier l'autonomie de l'apprenant et le transfert.** Les engagements constructivistes impliquent d'évaluer non seulement les gains immédiats aux tests, mais aussi la capacité des apprenants à transférer et à appliquer de manière autonome leur compréhension construite.([[research-methods-aied]])

## Concepts liés
- [[community-of-inquiry]] — Communauté d'investigation (fondée sur le pragmatisme constructiviste/deweyen)
- [[cognitive-psychology]] — Le cognitivisme, troisième pôle classique de la théorie de l'apprentissage
- [[active-learning]]
- [[learning-by-teaching]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[collaborative-learning]]
- [[experiential-learning]]
- [[project-based-learning]]
- [[embodied-learning]]
- [[learning-design]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[agency]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[misconceptions]]
- [[learning-theories]]
- [[behaviorism]]
- [[chemistry-education]] — L'enseignement de la chimie et l'IA : travaux pratiques, évaluation formative, limites des LLM, philosophie de l'expérimentation
- [[theory-development-aied]] — Le développement théorique en IA en éducation
- [[productive-failure]]
## Articles liés
- [[lee-learner-question-types-ai-education-2026]] — Les questions des apprenants classées en trois rôles constructivistes : transmetteur, facilitateur, co-apprenant (Lee, Atif & Kang 2026)
- [[mishra-control-vs-agency-history-2025]] — Positionne le constructionnisme (Papert) face aux tuteurs cognitifs dans l'histoire de l'AIED
- [[code-to-learn-genai-artifact-construction-2026]] — Code-to-Learn avec l'IA générative : cadre constructionniste de construction d'artéfacts
- [[ai-writes-code-student-writes-model-2026]] — L'auctorialité du modèle : théorie et programme de mesure pour l'apprentissage par la construction avec l'IA générative
- [[ai-vocational-education-training-review]] — Constructivisme affiché mais IA behavioriste dominante dans la formation professionnelle ; le « piège de Turing »
- [[generative-refusal-ai-tools-for-thought]] — Des outils d'IA qui retiennent la génération pour protéger la pensée constructive
- [[genai-mindtool-generative-learning]] — L'IA générative comme outil de pensée soutenant la construction par l'apprenant
- [[ai-agents-constructive-conflict-design-education-2026]] — Des agents d'IA adversariaux provoquant un réexamen constructif
- [[hingle-collaborative-ai-literacy-2025]] — La littératie collaborative en IA et le cadre d'engagement ICAP
- [[ai-internal-feedback-evaluative-judgments]] — La comparaison assistée par IA générant des jugements évaluatifs
- [[icap-cognitive-engagement-llm-agents]] — ICAP et engagement cognitif avec des agents LLM
- [[conversational-ai-tutors-framework]] — Le dialogue d'étayage dans les tuteurs IA
- [[embodied-inquiry-ai-facilitator-physics-2026]] — L'investigation incarnée avec un facilitateur IA
- [[beyond-detection-authentic-assessment-ai-2025]] — L'évaluation authentique et la construction des connaissances
- [[teacher-ai-teaming-five-levels]] — Les niveaux de collaboration enseignant-IA dans la conception
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — La co-agentivité épistémique entre apprenant et machine
- [[ojeda-ramirez-community-based-ai-learning]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[educational-robotics-pathways-2026]] — Pathways to Learning AI-Powered Educational Robotics (2026)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution : agent génératif simulant l'évolution cognitive des étudiants

- [[synthetic-position-self-authorship-2026]] — Les contre-positions simulées par l'IA répètent la forme du dialogue mais en retiennent la résistance qui impose la révision
