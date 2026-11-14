---
title: Psychologie du développement
created: "2026-11-12T14:20:00-05:00"
updated: "2026-11-13T19:05:00-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [research-methods-aied]
contributors: [editor]
translation_of: concepts/developmental-psychology
source_updated: "2026-11-13T01:00:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La psychologie du développement** — l'étude de la manière dont les capacités cognitives, langagières, sociales, émotionnelles et motivationnelles changent avec l'âge, et des contraintes que ces changements imposent à ce qu'un apprenant peut faire et au soutien dont il a besoin. Dans l'[[ai-education|IA en éducation]], elle fournit la question qui se cache derrière toute affirmation sur l'âge : non pas « cet outil fonctionne-t-il ? » mais « fonctionne-t-il pour un esprit à ce stade, faisant cette chose précise ? ». Elle explique pourquoi le même outil d'[[generative-ai|IA générative]] est une aide à l'étude raisonnable pour une personne de 20 ans et un risque développemental pour un enfant de 7 ans, et pour marquer où ces affirmations reposent sur une hypothèse plutôt que sur un résultat mesuré.

## Questions à examiner

- Deux apprenants utilisent le même agent conversationnel pour la même tâche. Que vous ferait vérifier la psychologie du développement avant de qualifier l'interaction d'appropriée : l'âge seul, ou quelque chose de plus précis ?
- L'expression « adapté à l'âge » revient sans cesse dans les recommandations sur l'IA. De quelles preuves auriez-vous besoin avant d'accepter cette étiquette, et sur quoi repose-t-elle habituellement à la place ?
- La fonction exécutive, la [[metacognition|métacognition]] et l'[[self-regulated-learning|autorégulation]] se développent de façon inégale. Si un outil régule à la place de l'apprenant, quelle capacité est soutenue et quelle capacité est déplacée ?
- La plupart des études ici mesurent les apprenants une seule fois. Que peut dire une mesure unique du développement, et que ne peut-elle pas dire ?
- Le jeu est un médium développemental, non une pause dans l'apprentissage. Quand un jouet doté d'IA prend en charge le récit, qu'est-ce que l'enfant pratique encore ?
- L'adolescence est présentée à la fois comme une fenêtre de risque et comme une occasion de conception. Laquelle les preuves soutiennent-elles ?

## Introduction

La psychologie du développement se trouve sous plusieurs concepts voisins sans être aucun d'entre eux. La [[cognitive-psychology|psychologie cognitive]] explique les mécanismes (mémoire de travail, charge, biais, récupération) mais ne dit rien de la manière dont ces mécanismes changent avec l'âge. L'[[early-childhood-elementary-ai-education|éducation de la petite enfance et du primaire]] est une page de niveau : elle couvre le préscolaire et l'école primaire comme contextes, et sa note de périmètre dit explicitement que ses préoccupations sont propres au développement sans fournir le compte rendu développemental. Les [[parents-and-families|parents et les familles]] couvrent le foyer comme contexte. Ce qu'aucune ne fait, c'est traiter le développement lui-même comme cadre explicatif : la raison pour laquelle une conception adaptée à une tranche d'âge échoue dans une autre, et la raison pour laquelle les affirmations sur les effets à long terme sur un esprit en développement sont si difficiles à établir.

Ce cadre compte davantage en éducation avec l'IA que dans la plupart des domaines, parce que les outils d'IA sont généralement évalués sur des adultes puis déployés vers le bas. Un agent conversationnel testé avec des étudiants de premier cycle atteint un enfant de 12 ans par une licence scolaire ; une application de génération d'histoires conçue pour les premiers lecteurs arrive dans les classes ; les jouets dotés d'IA entrent dans le jeu avant que quiconque ait demandé ce qu'ils font au jeu. Les revues arrivent sans cesse à la même conclusion par des chemins différents : les preuves développementales sont minces, les mécanismes sont plausibles, et les recommandations s'écrivent avant la recherche.

## Les stades et les capacités comme contraintes de conception

L'usage le plus concret de la psychologie du développement ici est celui d'une contrainte de conception, non d'une étiquette posée sur les apprenants. CLARA, un système construit à l'université d'Auckland, refuse de prédire directement l'âge d'un enfant. Il décompose une histoire en exigences cognitives, langagières et socio-émotionnelles à l'aide d'une taxonomie développementale de 122 étiquettes, puis agrège les étiquettes activées en une estimation du stade de développement. Le choix de conception est l'argument : ce qui rend un texte adapté n'est pas un nombre mais les exigences précises qu'il place sur des capacités précises.

Les ressources graduées par âge font le même point du côté du curriculum. Le guide d'application de l'apprentissage de l'IA de Taïwan a été construit en deux éditions : l'une pour les apprenants de 9 à 12 ans avec des activités étayées, sur plateforme et non génératives, et une édition avancée pour les 13 à 18 ans avec des applications authentiques, un raisonnement éthique et un usage supervisé de l'IA générative. La gradation est développementale sur le fond, pas seulement en difficulté : l'édition la plus jeune évite les outils génératifs plutôt que de les simplifier.

Le risque, dans tous ces dispositifs, est que les tranches deviennent des proxys grossiers. Un enfant de cinq ans et un adolescent de quinze ans diffèrent par bien plus que la distance entre deux étiquettes d'âge, et une même tranche peut contenir des enfants dont les capacités divergent de plusieurs années.

## La fonction exécutive comme construit opératoire

Là où les preuves deviennent précises sur le mécanisme, il aboutit généralement à la fonction exécutive : les processus qui planifient, inhibent, déplacent et gardent l'information assez longtemps pour l'utiliser. La question développementale est de savoir lequel de ces processus un outil donné soutient, et si le soutien survit à l'outil. La séparation par Vasileiou et coll. entre compensation, étayage et développement est l'énoncé le plus net de la distinction, et le compte rendu de Klarin sur la dépendance des adolescents nomme le mode d'échec : les capacités déplacées sont encore en formation. Le construit, sa mesure et les preuves de dépendance ont désormais leur propre page, [[executive-function|fonction exécutive]].

## L'adolescence comme cas distinct

L'adolescence reçoit un traitement propre parce que les capacités en question sont sociales autant que cognitives. L'enquête de Hu et coll. auprès de 2 023 adolescents aux États-Unis et à Hong Kong les classe selon ce dont ils parlent aux agents conversationnels plutôt que selon la quantité : une orientation instrumentale vers la résolution de problèmes et l'information, une orientation de divulgation de soi centrée sur les sentiments et les relations, et un troisième groupe ne rapportant ni l'une ni l'autre. La lecture développementale est que la même technologie rencontre une période où les relations entre pairs et le travail identitaire sont les tâches centrales, si bien qu'un outil offrant une divulgation illimitée et non jugeante n'est pas une aide à l'étude neutre.

L'article théorique de Fu et Zhao l'étend en un construit, la « connexion à l'intelligence artificielle », défini comme un lien perçu psychologiquement réel mais éthiquement asymétrique, parce que la machine peut simuler la réciprocité sans aucune capacité de soin. Il ne rapporte aucune donnée, et il le dit ; sa valeur est l'avertissement qu'une relation ressentie n'est pas la preuve d'un bénéfice développemental.

## Le jeu comme médium développemental

La littérature sur les jouets dotés d'IA est l'endroit où la psychologie du développement travaille le plus et dispose du moins de preuves. La revue de Xu, Girouard et Shi soutient que les jouets dotés d'IA redistribuent l'autonomie dans le jeu : le contrôle du récit, du dialogue, de la relation et de l'information passe de l'enfant seul à l'interaction enfant-jouet. La redistribution peut contraindre le jeu lorsque le jouet l'organise, ou le permettre lorsqu'il répond comme une ressource pour l'imagination et l'enquête menées par l'enfant. Savoir laquelle des deux se produit est une question de conception et d'interaction, et la revue dit explicitement que les preuves développementales ne sont pas encore là.

AI-Play, un cadre de jeu non connecté pour le préscolaire et la maternelle, prend la voie inverse : il enseigne des concepts d'IA par le jeu sans placer d'appareil devant l'enfant, en soutenant que la tâche développementale à cet âge est la représentation et le jeu symbolique, non l'interaction avec un système.

## Implications pour la pratique

Les enseignants peuvent lire le profil d'exigences d'un outil plutôt que la tranche d'âge figurant sur son emballage. La question à poser est de savoir quelles capacités une tâche sollicite : la quantité de texte qu'un apprenant doit garder en mémoire, le niveau de lecture que suppose l'interface, la charge de contenu social ou émotionnel que porte l'interaction. Un outil génératif qui produit un texte fluide suppose un lecteur capable de le juger, et cette capacité arrive plus tard que la lecture fluide.

Les concepteurs de programmes et de curriculum peuvent emprunter la logique de gradation du guide taïwanais. Son édition la plus jeune maintient des activités étayées et non génératives, et son édition avancée autorise un usage supervisé de l'IA générative avec un raisonnement éthique associé. La différence entre les éditions tient aux outils que les apprenants peuvent utiliser, non à la difficulté des fiches d'exercices. Intégrer cette distinction dans une séquence de cours est plus défendable que d'appliquer une politique d'outils unique à tous les niveaux.

Les responsables d'établissement et de programme peuvent traiter une affirmation d'« adaptation à l'âge » comme une question en trois parties : quelle capacité la tâche exige, à quel stade se trouve l'apprenant, et quelles preuves relient les deux. Les études de réception et la documentation des fournisseurs répondent rarement à la troisième.

Le personnel de soutien et les familles peuvent observer ce qu'un jouet doté d'IA fait au jeu. Regardez qui fournit l'histoire. Quand le jouet décide de l'intrigue, l'enfant la suit ; quand le jouet répond à l'idée de l'enfant, l'enfant mène. Cette différence est visible en quelques minutes d'observation, et elle compte davantage à cet âge que la couverture de contenu du jouet.

## Limites des preuves

Trois limites reviennent dans les études examinées ici.

La première est la conception. La plupart des études sont des enquêtes transversales ou de petites expériences, mesurées une seule fois. Elles peuvent montrer que des groupes d'âge diffèrent ; elles ne peuvent montrer que l'IA a modifié une trajectoire développementale. La revue de portée de Niu et coll. sur l'IA générative et la pensée créative des enfants a filtré 6 401 enregistrements et retenu 24 sources de preuves, une base mince pour une affirmation vaste, et la revue le rapporte comme tel. Une revue intégrative de 118 études sur la littératie en IA de la maternelle à la 12e année n'a trouvé aucune étude suivant les mêmes apprenants d'un niveau scolaire à l'autre ; sa progression en quatre bandes est donc un ordre inféré à partir de cohortes différentes plutôt qu'une trajectoire que quiconque aurait observée ([[guo-ai-literacy-developmental-paces-2026]]).

La deuxième est l'attribution. Un gain d'apprentissage mesuré avec l'outil présent peut être une performance assistée plutôt qu'un changement de capacité, ce qui est la même distinction qui sépare l'étayage du développement.

La troisième est le temps. Le développement se déploie sur des années, et les outils changent plus vite que cela. Les recommandations par âge du Compass Collaborative le disent explicitement : elles qualifient leurs entrées d'hypothèses construites par raisonnement abductif à partir de la science développementale établie et de la recherche précoce sur l'IA, et indiquent que des preuves stabilisées pourraient demander une décennie.

## Le problème de mesure derrière « adapté à l'âge »

Les documents de politique et d'achat emploient « adapté à l'âge » comme s'il s'agissait d'une propriété d'un produit. Dans la recherche, c'est une relation entre un outil, une capacité et une tâche. L'approche taxonomique de CLARA est une tentative de rendre cette relation opératoire ; les éditions graduées du guide en sont une autre. Ni l'une ni l'autre ne tranche la question plus difficile de savoir qui décide de la suffisance, et les revues qui examinent les ressources graduées par âge évaluent la réception (831 participants dans l'étude de Wang, Chuang et Wu) plutôt que le résultat développemental.

## Idées fausses courantes

- **« Adapté à l'âge signifie une seule étiquette d'âge. »** CLARA estime un stade à partir des exigences qu'un texte place sur des capacités précises, et les deux éditions du guide diffèrent par les outils qu'elles autorisent, pas seulement par le niveau de lecture.
- **« La psychologie du développement ne concerne que les jeunes enfants. »** L'adolescence et l'âge adulte sont aussi des périodes développementales ; les littératures sur la dépendance et la divulgation de soi portent précisément sur les adolescents parce que ces capacités sont encore en formation.
- **« Si deux groupes d'âge diffèrent, le développement l'explique. »** Les différences d'âge transversales confondent cohorte, curriculum, accès aux appareils et contexte. Seules les conceptions qui suivent les mêmes apprenants peuvent séparer le changement de la différence.
- **« Un outil qui soutient la performance développe la capacité. »** La compensation, l'étayage et le développement sont des fonctions distinctes ; seule la dernière est censée persister une fois l'outil retiré.
- **« Les jouets dotés d'IA sont des matériaux de jeu neutres. »** L'argument de la redistribution de l'autonomie dit le contraire : la réactivité du jouet façonne qui fait l'imagination.

## Concepts liés

- [[cognitive-psychology]]
- [[early-childhood-elementary-ai-education]]
- [[parents-and-families]]
- [[metacognition]]
- [[executive-function]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[well-being]]
- [[creativity]]
- [[ai-literacy]]
- [[longitudinal-research]]
- [[research-methods-aied]]

## Articles liés

- [[guo-ai-literacy-developmental-paces-2026]] — 118 études sur la littératie en IA de la maternelle à la 12e année : une progression en quatre bandes, sans aucune étude suivant les mêmes apprenants d'un niveau à l'autre (Guo, Ali & Wong, 2026)
- [[ai-toys-child-development-2026]] — Les jouets dotés d'IA redistribuent l'autonomie dans le jeu (Xu, Girouard & Shi)
- [[clara-developmental-appropriateness-children-stories-2026]] — Notation de l'adaptation développementale à partir d'une taxonomie de 122 étiquettes
- [[niu-genai-children-creative-thinking-cognitive-development-review-2026]] — Revue de portée sur l'IA générative et la pensée créative des enfants
- [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026]] — Compensation, étayage et développement comme trois fonctions de l'outil
- [[genai-reliance-executive-functioning-2026]] — La dépendance des adolescents à l'IA générative comme préférence sur l'effort
- [[horowitz-kraus-children-chatgpt-cognitive-control-2026]] — Enfants et adultes conversant avec ChatGPT dans le scanner
- [[adolescent-chatbot-self-disclosure-help-seeking-2026]] — Ce que les adolescents divulguent aux agents conversationnels, non la quantité d'usage
- [[ai-connectedness-adolescent-mental-health-2026]] — La connexion à l'IA comme lien éthiquement asymétrique (théorie)
- [[ai-play-framework-early-childhood-2026]] — Littératie de l'IA par le jeu non connecté au préscolaire et à la maternelle
- [[age-tiered-ai-literacy-guidebooks-2026]] — Deux éditions graduées par âge d'un guide de littératie de l'IA
- [[preservice-early-childhood-genai-magnetism-2026]] — De futurs éducateurs de la petite enfance concevant avec l'IA générative
- [[pergantis-chatbots-executive-functions-systematic-review-2025]] — Entraînement par agents conversationnels des fonctions exécutives, dix études
- [[sharma-chatgpt-dependency-executive-dysfunction-stress-2026]] — Dépendance, stress et dysfonctionnement exécutif chez les étudiants universitaires
