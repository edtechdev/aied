---
title: "Comment l'IA doit-elle être conçue dans l'expérience d'apprentissage ?"
created: "2026-09-22T12:00:00-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
source_updated: "2026-10-28T11:26:02-04:00"
translation_of: faqs/designing-ai-into-learning
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Le plan du module comporte une ligne intitulée « activité IA » et personne ne sait ce qu'elle remplace. Ou bien un enseignant a demandé d'ajouter un agent conversationnel à un cours qui fonctionne déjà, et votre travail consiste à le placer sans casser ce qui faisait fonctionner ce cours.

Partez de l'objectif d'apprentissage et de l'activité qui le produit. Le même modèle peut être un étayage, un partenaire [[socratic-method|socratique]], un lecteur de brouillons, une [[simulation]] ou une machine à réponses, et celui que vous obtenez dépend de la conception plutôt que du modèle. Nommez le mode que vous construisez, placez la tentative de l'apprenant avant que l'aide n'apparaisse, et conservez au moins un parcours dans le cours qui fonctionne sans l'outil.

## La version courte

**1.** Écrivez la phrase sur ce que les apprenants sauront faire ensuite sans l'outil, et vérifiez chaque fonction d'IA à son aune.

**2.** Séquencez l'interaction : l'apprenant tente, l'IA soutient, l'apprenant évalue ou révise, l'apprenant démontre.

**3.** Nommez le mode sur l'échelle ICAP. Contournement et étayage peuvent être le même outil à des barreaux différents.

**4.** Placez l'IA là où la séquence du cours prévoit déjà une activité précise, non à la fin comme un bonus.

**5.** Retirez l'outil pendant qu'une capacité se forme, puis rétablissez-le à un point de contrôle que l'étudiant ne peut pas simuler.

## Décider ce que l'apprenant fait sans l'outil

La notion de [[pedagogy|Pedagogies and Teaching Strategies]] de la base de connaissances fournit le test : la configuration préserve-t-elle l'activité qui produit l'apprentissage visé ? Répondez par écrit, avant que quiconque choisisse une fonctionnalité.

[[finkelstein-principled-ai-education-2025|The Principled AI Education Framework]] énonce la règle générale : la technologie devrait augmenter plutôt que déplacer les capacités humaines que l'éducation entend développer. Formulée comme test pour un module, cela signifie nommer la capacité, nommer l'activité qui la construit, et demander si l'IA se trouve à l'intérieur de cette activité ou à côté.

## Placer la tentative avant l'aide

Le schéma par défaut qui résiste au contact d'une classe réelle : **l'apprenant tente, l'IA soutient, l'apprenant évalue ou révise, l'apprenant démontre sa compréhension.**

En pratique, cela signifie demander une prédiction ou une solution initiale avant que toute assistance apparaisse, et privilégier les questions, les indices, les exemples, les contre-arguments et la [[feedback|rétroaction]] plutôt que l'achèvement immédiat. Préservez l'[[productive-failure|échec productif]] là où il sert l'apprentissage. Exigez la vérification des affirmations lourdes de conséquences, intégrez l'explication et le [[learning-by-teaching|rappel par l'enseignement]], et estompez l'aide à mesure que la compétence grandit. Conservez du travail sans IA pour que les apprenants puissent calibrer ce qu'ils savent faire seuls.

La synthèse [[reducing-ai-misuse|Reducing AI Misuse]] recommande la même forme : une séquence réflexion d'abord, IA ensuite, puis retour réflexif, avec des points de contrôle délibérés pour l'évaluation.

## Nommer le mode pour lequel vous concevez

[[thermomix-genai-education-analogy-2026|L'analogie du robot de cuisine de Rummel, Nachtigall et Panadero]] déplace la question : non pas si les apprenants utilisent l'[[generative-ai|IA générative]], mais comment cet usage façonne ce qu'ils deviennent. Projetée sur [[icap-framework|ICAP]] et [[samr-model|SAMR]], elle donne une échelle. Externaliser entièrement un travail sans révision ni [[critical-thinking|engagement critique]] est une substitution passive, et cela risque la [[cognitive-offloading|perte de compétence et la dépendance excessive]]. [[prompt-engineering|Affiner les invites]] et recouper les sorties mobilise des [[prior-knowledge|connaissances préalables]] et de l'[[self-regulated-learning|autorégulation]], ce qui correspond à l'actif ou à l'augmentation. Utiliser l'IA pour remuer des idées, esquisser et évaluer un travail original est constructif ou une modification. L'IA comme véritable partenaire de dialogue pour la co-construction et une rétroaction adaptative est interactif ou une redéfinition.

L'implication est directe. Le même outil est un contournement à un barreau et un [[scaffolding|étayage]] au suivant, si bien que le document de conception doit nommer le mode visé.

## Le placer là où la séquence prévoit une activité

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec et Horvat]] ont analysé la séquence prévue de 29.064 activités d'enseignement et d'apprentissage dans 554 cours et ont trouvé une grammaire de conception visible. Les activités de type acquisition sont le point d'entrée le plus fréquent et le plus grand type unique, au-dessus de 20%. Le type d'apprentissage suit le niveau de Bloom visé, l'acquisition passant d'environ 50% au niveau 1 à environ 20% au niveau 6, et la production dépassant 20% aux niveaux 5 et 6. La transition la plus forte des données est celle de l'évaluation vers la discussion, à 0.332.

Deux leçons en découlent pour la conception de l'IA. Placez l'outil là où la séquence prévoit un type d'activité. Et comme la rétroaction se regroupait avec la [[collaborative-learning|collaboration]], le [[group-work|travail de groupe]] et la présence du [[teacher-role|enseignant]], les structures entre pairs et synchrones sont l'endroit où le soutien de l'IA doit se brancher, non celui où elle doit se substituer.

## Décider ce qu'il faut retirer, et quand le rétablir

[[refrain-amplify-genai-curriculum-2026|Le cadre « retenir, puis amplifier » de Torres-Sahli et de ses collègues]] porte cela au niveau du programme. Retirez un outil génératif pendant qu'une capacité se forme, puis rétablissez-le une fois que l'étudiant sait le piloter, juger ce qu'il renvoie et en répondre, avec un point de contrôle difficile à simuler à chaque articulation.

Les dispositifs sont régis par un critère de formation contre [[cognitive-offloading|décharge]] : autorisés là où ils soutiennent un travail engagé, exclus là où ils drainent l'attention. Cela transforme les décisions de décharge en une question de [[curriculum-design|programme]] et de [[governance|gouvernance]] qui précède la conception au niveau du cours plutôt que de la suivre.

## Vérifier que l'alignement est réel

[[mcinnes-salvaging-constructive-alignment-genai-2026|L'analyse de discours de McInnes et de ses collègues]] portant sur 14 documents d'orientation de l'enseignement supérieur avertit que des conseils formulés en termes d'efficacité, comme l'usage de l'IA générative pour rédiger des objectifs, des grilles d'évaluation et des plans de cours, produisent un [[assessment|alignement]] qui paraît aligné tout en négligeant la moitié constructive. Les objectifs, les activités et les évaluations sont générés comme des éléments distincts plutôt que comme des éléments interdépendants.

Leur remède est le reséquençage. Les enseignants devraient comprendre l'alignement constructif assez bien pour piloter, interroger et rejeter une sortie d'IA avant d'en déléguer une partie, car accepter une surface plausible est exactement la défaillance évaluative contre laquelle ils mettent leurs étudiants en garde. Là où l'IA est utilisée, ils plaident pour des systèmes [[rag|augmentés par récupération]] et bornés par l'institution, configurés selon les politiques et les normes de qualité locales plutôt que selon des réglages génériques entraînés sur internet.

## Ce que les concepteurs pédagogiques comprennent mal

Ajouter l'IA compte comme l'intervention. Ce qui change l'apprentissage est l'activité que l'étudiant accomplit, et l'IA n'est qu'une partie du dispositif. Un indice bien placé et une réponse bien placée peuvent tourner sur le même modèle et produire des apprentissages opposés.

Rédiger l'autorisation, c'est le travail de conception. Une autorisation fixe ce qui est permis. Elle ne fixe ni la séquence, ni le mode, ni le point de contrôle, et ces trois éléments décident si l'activité survit.

L'efficacité est le but de la refonte. Rédiger des objectifs et des grilles avec un modèle est rapide, et l'analyse des 14 documents a constaté que le résultat peut paraître aligné alors que les parties cessent de se soutenir mutuellement.

## Ce qui va vous revenir

**« Les étudiants l'utiliseront de toute façon, donc concevoir autour est naïf. »** Ils l'utiliseront, et c'est l'argument pour spécifier le mode et l'enseigner. Un module qui nomme le mode donne à l'étudiant quelque chose à respecter.

**« Nous n'avons pas le temps de reséquencer tout un cours. »** Alors reséquencez un module et une évaluation. L'articulation « retenir puis amplifier » est un point de contrôle, et la séquence réflexion d'abord tient en trois consignes sur une feuille.

**« Notre fonction d'IA comporte déjà des garde-fous. »** Les garde-fous contraignent ce que dit le modèle. Ils ne décident pas si l'apprenant a tenté d'abord, si l'aide s'estompe ou s'il existe un parcours sans IA. Ce sont des décisions de conception dans votre cours, non des réglages dans le produit.

## Que faire cette semaine

**1.** Rédigez la phrase sur la performance sans aide pour le module et placez-la au-dessus de la liste des activités.

**2.** Marquez le mode ICAP visé à côté de chaque activité d'IA dans le plan.

**3.** Déplacez une activité d'IA pour que l'apprenant tente le problème d'abord.

**4.** Choisissez un parcours sans IA dans le module et signalez-le aux étudiants.

**5.** Nommez une articulation où l'outil est retiré, et le point de contrôle qui le rétablit.

## Où aller ensuite

[[learning-design|Instructional Design]], [[active-learning|Active Learning]] et [[scaffolding]] portent le vocabulaire de la conception. Pour les valeurs par défaut au niveau de l'interaction qui décident si une activité conçue préserve l'apprentissage, voir [[reduce-ai-cheating]] et [[redesign-assessment-ai-era]]. [[designing-educational-ai-software]] couvre la façon dont les mêmes principes contraignent le logiciel lui-même, et [[developing-ai-tutor]] les traduit dans l'architecture d'un tuteur.
