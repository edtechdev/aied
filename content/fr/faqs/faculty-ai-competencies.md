---
title: "Quelles compétences les enseignants doivent-ils posséder à l'égard de l'IA ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 70
foundations: [ai-literacy, educational-development, teacher-role, teacher-ai-competency]
audience: [faculty developers, instructors]
level: [adult learning]
source_updated: "2026-10-28T11:29:19-04:00"
translation_of: faqs/faculty-ai-competencies
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

Le comité de développement pédagogique dispose d'un créneau en janvier et le vice-recteur veut qu'il porte sur l'IA. Ou bien vous dirigez le centre d'enseignement, et trois départements ont demandé « un atelier sur l'IA », ce qui se révèle vouloir dire trois choses différentes. Ou bien vous utilisez ces outils depuis un an et vous voulez savoir ce qui vous manque encore avant de reconstruire un cours autour d'eux.

L'essentiel : la technique de l'invite en est la plus petite partie. Les enseignants doivent savoir juger ce qu'un modèle peut et ne peut pas faire, concevoir des tâches et des évaluations autour de ce jugement, et savoir quand l'écarter entièrement d'un cours. La confiance est un mauvais indicateur pour tout cela : construisez donc le programme autour de la performance et des disciplines plutôt qu'autour d'une démonstration d'outil.

## La version courte

**1.** Définissez la compétence en quatre dimensions, et ajoutez une couche pédagogique pour quiconque évalue des étudiants.

**2.** Évaluez par la performance plutôt que par un questionnaire. La littératie auto-évaluée et la capacité démontrée divergent.

**3.** Mettez les disciplines dans la salle. L'expertise disciplinaire ne se transfère pas à l'intégration technologique.

**4.** Enseignez explicitement les domaines technologiques, car ce sont ceux qui mesurent bas même chez des enseignants confiants.

**5.** Traitez le « quand ne pas utiliser cet outil » comme une compétence, et donnez aux enseignants la couverture nécessaire pour refuser.

## Définissez la compétence avant de réserver la salle

La synthèse [[ai-literacy|littératie en IA]] de la base de connaissances identifie quatre dimensions, et elles constituent un programme utile parce que chacune exige un type de séance différent :

- **Compréhension fondamentale** des capacités et des limites de l'IA.
- **Compétence pratique** dans l'usage des outils d'IA.
- **[[critical-thinking|Évaluation critique]]** de l'exactitude, des biais, de la pertinence et de l'incertitude.
- **Conscience [[ethics|éthique]] et institutionnelle** portant sur des questions telles que l'intégrité, la vie privée, l'[[equity-in-ai-education|équité]] et la [[governance|gouvernance]].

Pour les enseignants, ces dimensions exigent une couche pédagogique par-dessus. Les enseignants devraient être capables de décider quel travail cognitif les étudiants doivent conserver, de choisir des usages de l'IA qui servent les objectifs d'apprentissage, de concevoir une évaluation valide à l'ère de l'IA, d'apprendre aux étudiants à vérifier et à réguler leur propre usage, de reconnaître le [[hallucination-risk|risque d'hallucination]], la dépendance excessive et la [[ai-sycophancy|flagornerie]], et de savoir quand le [[human-in-the-loop-ai|jugement humain]] doit l'emporter sur l'automatisation.

Ils ont aussi besoin d'une compréhension des systèmes suffisante pour évaluer comment des flux de travail assistés par l'[[generative-ai|IA générative]] s'articulent. Un atelier qui enseigne un outil isolé produit des enseignants capables de faire une démonstration de cet outil et incapables de vous dire ce qui casse quand on le branche dans un processus de notation. [[teacher-ai-competency|Teacher AI Competency]] et [[educational-development|Faculty Development]] portent la version longue de cet argument.

Écrivez la liste avant de planifier les séances. Quatre dimensions plus une couche pédagogique suffisent à justifier quatre séances plutôt qu'une, et à dire à un chef de département laquelle des quatre concerne réellement sa demande.

## Évaluez la performance plutôt que la confiance

La littératie en IA [[self-report-measures|auto-déclarée]] peut diverger fortement de la capacité démontrée, et c'est l'avertissement le plus pratique de cette littérature pour quiconque pilote du développement pédagogique. Un questionnaire de confiance à la fin d'un atelier mesure ce que l'atelier a fait ressentir.

La recherche sur les flux de travail enseignants à [[agentic-ai|agents multiples]] ajoute une seconde raison de tester plutôt que de demander : la pensée systémique, les convictions pédagogiques et l'[[self-efficacy|efficacité personnelle]] interagissent dans l'intégration de l'IA, si bien qu'une même séance produit des effets différents sur deux enseignants de même formation disciplinaire. Cela plaide pour une programmation différenciée, et contre l'atelier outil unique pour tous que la plupart des établissements proposent.

La version peu coûteuse de l'évaluation par la performance est une tâche, non un instrument. Demandez à chaque participant d'apporter un devoir, de le réviser avec le modèle pendant la séance, puis de défendre la révision devant un collègue : qu'est-ce qui a changé, qu'évalue-t-elle maintenant, sur quoi l'étudiant ne peut-il plus être noté. Cela prend vingt minutes et vous apprend plus que n'importe quelle échelle d'appréciation de fin de journée.

## Attendez-vous à ce que le point faible soit l'intégration

Des travaux récents sur l'enseignement supérieur chiffrent les endroits où la compétence des enseignants est forte et ceux où elle se défait. [[sutedjo-faculty-genai-tpack-21-2026|Une enquête auprès de 127 enseignants d'une grande université de recherche américaine]], utilisant l'instrument [[tpack|TPACK]]-21, a trouvé une connaissance [[pedagogy|pédagogique]] du contenu perçue comme élevée (M = 4.70) et une [[tpack|connaissance du contenu]] proche du plafond (M = 5.15). Les domaines intégrant la technologie étaient nettement plus bas : connaissance technopédagogique (M = 2.62), connaissance technologique du contenu (M = 2.75) et TPACK global (M = 2.55, le plus bas des sept).

Lisez cet écart correctement. Ce sont des personnes qui connaissent leur discipline et savent l'enseigner, et qui ne savent pas faire d'un modèle une partie de l'une ou de l'autre. L'expertise disciplinaire ne prédisait pas la connaissance de l'intégration de l'IA générative (corrélations CK de r = .11 à .15, toutes non significatives), si bien qu'un programme ne peut pas supposer que la maîtrise de la matière se transfère. Il doit construire la compétence par un travail délibéré et [[discipline-specific-aied|propre à la discipline]].

Un dernier résultat oriente la conception. Les trois domaines intégrant la technologie corrélaient de r = .81 à .91, ce qui suggère qu'ils pourraient fonctionner comme une seule capacité d'intégration de l'IA générative. Si cela se vérifie, enseignez-la comme un socle commun plutôt que comme trois compétences distinctes avec trois séances distinctes.

## Concevez les séances autour d'un cours réel

Ce que la formation peut et ne peut pas faire apparaît clairement dans [[pishtari-teacher-ai-training-learning-design-2026|une étude intra-sujets menée avec 13 enseignants du supérieur]]. Donner aux enseignants un [[conversational-ai|agent conversationnel]] a nettement amélioré la qualité de leur [[learning-design|conception d'apprentissage]], la part atteignant au moins deux tâches de Bloom d'ordre supérieur passant de **41.7% à 91.7%** (p = .01). L'effort cognitif perçu a chuté fortement, la médiane passant de 6.33 à 3.33 (p = .004). La formation à l'[[prompt-engineering|ingénierie des invites]] pédagogiques ajoutée par-dessus **n'a pas amélioré davantage la qualité** et a légèrement augmenté l'effort.

Trois conséquences en découlent, et la troisième est celle que les programmes sautent.

L'accès change facilement le [[teacher-role|comportement d'enseignement]]. Donnez aux enseignants un modèle capable et une tâche réelle, et le travail devant eux s'améliore en une séance.

La capacité plus profonde demande plus qu'un atelier. La couche d'ingénierie des invites a ajouté de l'effort et aucune qualité mesurée. Apprendre aux gens à mieux écrire des invites est une compétence, et au vu de ces données ce n'est pas ce qui contraint la qualité de la conception.

Les gains de qualité ne prouvent pas que la pratique a été intériorisée. Treize enseignants ont bien reconçu une tâche, outil ouvert. Savaient-ils le refaire un semestre plus tard, sans l'outil, c'est une autre question, à laquelle l'étude ne répond pas. Intégrez un suivi au programme plutôt que de supposer que le gain a persisté.

## Couvrez les volets du rôle au-delà de l'enseignement

La compétence est aussi une question institutionnelle, et la plupart des référentiels n'en traitent qu'une partie. [[crompton-faculty-technology-integration-standards-2026|Une recherche par la conception menée avec 114 participants dans 28 établissements américains et 11 pays]] a produit six standards d'intégration technologique couvrant tout le rôle universitaire : enseignant, coordonnateur, responsable, chercheur, apprenant et contributeur. La raison que donnent les auteurs pour les construire est la partie utile. Les référentiels existants ([[tpack|TPACK]], [[samr-model|SAMR]]) et les standards des éducateurs (ISTE, UNESCO, DigCompEdu) s'adressent aux enseignants du [[k-12|primaire et du secondaire]] ou ne couvrent que la dimension d'enseignement.

Pour un responsable de développement pédagogique, cela reformule la demande. Un département qui demande un atelier sur l'IA pour ses enseignants pose une question sur un rôle sur six. Les coordonnateurs du même département prennent des décisions de programme, ses chercheurs écrivent avec ces outils, et ses responsables approuvent des achats. Une séance ne peut pas servir les six, et prétendre le contraire est la manière dont un programme finit avec une forte affluence et aucun changement de pratique.

## Faites une place au refus

L'adoption résiste à un cadrage purement technique, et la résistance est souvent un jugement plutôt qu'un manque. [[dai-genai-frenemy-teaching-autonomy-2026|Une enquête auprès de 287 enseignants dans 27 pays]] a produit un modèle affiné expliquant **79.8% de la variance** de l'intention comportementale. L'[[agency|autonomie]] perçue à l'égard de l'intelligence artificielle n'influençait l'intention qu'indirectement, par l'utilité perçue. **L'aversion au risque était un prédicteur négatif significatif** (−.163), et les enseignants s'inquiétaient bien davantage de la [[cognitive-offloading|dépendance excessive]] et des risques d'[[academic-integrity|intégrité]] chez les étudiants que de leur propre usage.

[[ai-integrated-teaching-identity-tensions|Des entretiens avec deux universitaires expérimentés]] décrivent ce que cette inquiétude donne de l'intérieur : des **tensions identitaires** récurrentes entre pédagogie et plateforme, éducateur et animateur, soin et conformité, traversées par une sélectivité fondée sur des valeurs [[pedagogy|pédagogiques]].

La compétence inclut donc le jugement professionnel sur le moment où ne pas utiliser l'IA, et un programme incapable de le dire à voix haute sera lu comme un argumentaire de vente par exactement les enseignants dont vous voulez le plus le jugement dans la salle. Deux universitaires expérimentés constituent une base de preuves mince pour une affirmation large ; traitez le résultat identitaire comme la description d'une tension réelle plutôt que comme un effet mesuré, et laissez-le orienter le ton des séances.

## Ce que les responsables de développement pédagogique comprennent mal

Un atelier sur les invites est un programme de compétence en IA. Il couvre une dimension sur quatre, et dans l'étude à 13 enseignants la couche d'ingénierie des invites a ajouté de l'effort sans ajouter de qualité mesurée.

Des enseignants confiants sont des enseignants compétents. L'auto-déclaration diverge de la capacité démontrée, et l'enquête auprès de 127 enseignants a trouvé une connaissance du contenu proche du plafond à côté d'un TPACK global à 2.55. La confiance suit l'expertise disciplinaire, qui est précisément ce que ces enseignants possèdent déjà.

Les experts disciplinaires trouveront seuls l'intégration. La connaissance du contenu ne prédisait pas la connaissance de l'intégration dans cette enquête. La corrélation était non significative, et c'est ce résultat qui justifie une programmation propre à chaque discipline plutôt qu'une invitation générale.

Un référentiel suffira pour tout le monde. Le standard à six rôles existe parce que TPACK, SAMR et les grands standards des éducateurs couvrent les enseignants du primaire et du secondaire, ou la seule dimension d'enseignement.

La résistance est un manque de connaissances à combler. L'aversion au risque prédisait négativement l'intention, et le travail sur l'identité décrit des enseignants raisonnant à partir de valeurs pédagogiques. Une partie de ce qui ressemble à de la réticence est une position défendable sur la dépendance excessive des étudiants.

## Ce qui va vous retomber dessus

**« Nous n'avons pas le temps du personnel pour un développement fondé sur la performance. »** Alors ne construisez pas un programme. Construisez un exercice à l'échelle d'une tâche : apportez un devoir, révisez-le avec le modèle, défendez la révision. C'est la version en vingt minutes, et elle produit une preuve de capacité qu'un questionnaire de satisfaction ne produit pas.

**« Nos enseignants utilisent déjà ces outils, la formation arrive après eux. »** L'usage n'est pas le construit. L'enquête auprès de 127 enseignants décrit des personnes à forte connaissance du contenu et de la pédagogie et à faible connaissance de l'intégration technologique, et l'étude à 13 enseignants montre une qualité de conception qui bouge avec l'accès tandis que la couche d'ingénierie des invites n'ajoutait rien. Aucun des deux résultats ne dit que les enseignants devant vous ont intégré quoi que ce soit.

**« C'est un problème de formation informatique. »** Le modèle d'intention place l'utilité, et non la capacité technique, sur le chemin de l'adoption, et l'aversion au risque le longe. L'obstacle est le jugement sur les étudiants et sur la discipline, et c'est pourquoi ces séances reviennent au centre d'enseignement.

**« Les référentiels de compétences sont de la paperasse. »** C'est une carte pour un créneau en janvier. Les quatre dimensions vous disent ce qu'il faut laisser de côté, et les six rôles vous disent à quel public une demande s'adresse réellement.

## À faire cette semaine

**1.** Écrivez les quatre dimensions et la couche pédagogique sur une page, et marquez celles que votre offre actuelle couvre.

**2.** Remplacez le formulaire de satisfaction de fin de séance par une tâche : un devoir révisé et défendu.

**3.** Demandez à deux départements un cours réel et un devoir réel sur lesquels travailler, plutôt qu'une invitation générale.

**4.** Ajoutez un segment sur le moment où tenir l'IA hors d'une tâche, et dites clairement que refuser un usage précis est un jugement professionnel légitime.

**5.** Décidez lequel des six rôles votre prochaine séance sert, et nommez le public dans l'invitation.

## Où aller ensuite

Le pendant côté étudiant est [[incorporating-ai-literacy]], et [[ai-literacy-evidence]] traite de la solidité de ce corpus de preuves sur la littératie. Pour la synthèse de la recherche destinée aux enseignants, voir [[top-10-findings-ai-education-instructors]] ; [[teacher-ai-competency|Teacher AI Competency]] et [[educational-development|Faculty Development]] portent la matière des référentiels, et [[course-ai-policy]] est le document que la plupart de ce travail de développement finit par produire.
