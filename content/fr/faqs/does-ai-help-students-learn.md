---
title: "Utiliser l'IA aide-t-il réellement mes étudiants à apprendre ?"
created: "2026-09-22T19:14:45-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 90
audience: [instructors]
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [active-learning]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation]
source_updated: "2026-10-28T11:06:17-04:00"
translation_of: faqs/does-ai-help-students-learn
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

Un étudiant vous dit que le tuteur IA est la raison pour laquelle il a enfin compris la matière, et vous n'avez aucun moyen de vérifier cette affirmation. Ou un pilote atterrit sur votre bureau avec une enquête de satisfaction et une capture d'écran de notes qui montent, et quelqu'un veut une décision sur la licence avant la fin du mois. Ou vous êtes devant une classe en vous demandant si l'outil que vous venez de leur dire d'ouvrir les aide à s'entraîner ou les aide à éviter de s'entraîner.

La réponse courte : oui, l'IA peut aider les étudiants à apprendre, et aucune des choses que vous êtes le plus susceptible de voir ne l'établit : de meilleurs devoirs, des rendus plus rapides, des étudiants heureux, ou un produit appelé tuteur. Ce qui sépare les cas où l'apprentissage progresse de ceux où il ne progresse pas, c'est la conception de l'activité et le résultat que vous avez choisi de mesurer.

## La version courte

**1.** Nommez d'abord la capacité, puis décidez quelles preuves montreraient qu'elle a changé.

**2.** Mesurez la même capacité plus tard, l'outil retiré, car c'est la seule mesure qui répond à votre question.

**3.** Placez la tentative de l'étudiant avant l'aide, et exigez une réponse à cette aide ensuite.

**4.** Notez la vérification : ce qu'ils ont contrôlé, ce qu'ils ont rejeté, ce qu'ils ont modifié.

**5.** Regardez les résultats par connaissances préalables, car la moyenne cache les étudiants que la conception fait échouer.

## Décider ce que vous appelez apprendre avant de regarder la moindre preuve

« L'IA aide-t-elle les étudiants à apprendre » n'est pas une seule question. Elle en regroupe au moins trois : l'outil augmente-t-il la performance tant qu'il est ouvert, construit-il une capacité qui persiste quand il est fermé, et change-t-il qui finit par détenir cette capacité. Un rapport de fournisseur, une enquête de pilote et un essai randomisé peuvent tous être honnêtes et répondre néanmoins à des questions différentes.

Écrivez la capacité avant l'activité. « Produire un rapport soigné » est un résultat différent de « sélectionner des preuves pertinentes », « expliquer une relation causale » ou « détecter une conclusion non étayée ». L'évaluation doit révéler la capacité que vous entendez développer, ce qui est l'argument de la [[educational-measurement|mesure en éducation]] et le point de départ de l'[[ai-ed-evaluation|évaluation en IA et éducation]].

Le corpus soutient deux affirmations à la fois, et tenir les deux est la discipline que cette page demande. Une synthèse de la Banque mondiale, [[burneo-can-edtech-close-learning-gaps-2026|Can EdTech Close Learning Gaps?]], a regroupé 14 études randomisées dans dix économies et estimé un effet d'apprentissage moyen positif de 0.125 écart-type pour les technologies éducatives adaptatives et activées par l'IA. Elle a aussi combiné des [[adaptive-learning|systèmes adaptatifs]] antérieurs avec des outils d'[[generative-ai|IA générative]], n'a trouvé aucun avantage statistiquement établi pour les outils génératifs plus récents, et a reconnu une incertitude considérable dans cette comparaison. Le résultat soutient le potentiel de ces interventions, pas l'affirmation qu'un [[conversational-ai|chatbot]] quelconque améliorera l'apprentissage. Une moyenne positive, autrement dit, est compatible avec une très grande variation et avec l'absence d'avantage démontré pour la chose que vous envisagez réellement.

Les études les plus utiles sont celles qui font varier la conception à l'intérieur d'une même expérience. [[genai-feedback-design-multisite-experiment|Une étude randomisée multisite]] portant sur 1.176 étudiants de première année a comparé la [[peer-assessment|rétroaction par les pairs]], la rétroaction directe par IA, l'auto-évaluation suivie d'une rétroaction par IA, et une séquence hybride d'auto-évaluation, de rétroaction par les pairs et de critique par IA. Les conditions réflexive et hybride ont produit un [[transfer-of-learning|transfert différé sans IA]] plus fort que la rétroaction directe par IA : les étudiants réussissaient mieux sur une nouvelle tâche d'argumentation scientifique, pas seulement sur la dissertation qu'ils révisaient. Ces conditions exigeaient aussi plus de travail évaluatif et probablement plus de temps, si bien que l'étude soutient la conception complète de la rétroaction plutôt qu'une de ses composantes.

## Vérifier si le gain survit au retrait de l'outil

C'est la vérification la plus informative dont vous disposez, et c'est celle qu'il est le plus facile d'omettre d'un pilote.

La mise en garde la plus claire du corpus est une expérience de terrain randomisée portant sur près de 1.000 lycéens, [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]. Une interface de type généraliste a augmenté les scores de pratique assistée de 48% par rapport au contrôle, et les mêmes étudiants ont ensuite obtenu 17% de moins aux examens sans aide. Un tuteur configuré avec des consignes et des indices conçus par l'enseignant a largement évité cette pénalité. Il n'a pas produit d'amélioration statistiquement significative de la performance aux examens sans aide par rapport au groupe contrôle. Éviter un préjudice et démontrer un apprentissage supplémentaire sont deux accomplissements distincts.

À l'échelle nationale, la même scission apparaît avec un décalage. [[stromberg-generative-ai-learning-penalty-secondary-2026|The Generative AI Learning Penalty]] a suivi 26.811 élèves chinois du secondaire, de la 7e à la 12e année, sur 30 mois, en utilisant une adoption échelonnée. Les scores de devoirs ont augmenté de 18% et le temps de réalisation a chuté de 30%, de 64 à 45 minutes. Les scores aux examens mensuels à livre fermé ont chuté de 20% en six mois, et les scores aux examens d'entrée à enjeux élevés ont chuté de 18-24% de la référence, mais seulement après environ deux ans. Les pertes se concentraient chez les quelque 81% d'utilisateurs dont le comportement indiquait une externalisation des devoirs, tandis que les étudiants qui maintenaient un temps de devoirs comparable à celui des non-utilisateurs apprenaient à peu près aussi efficacement. Deux choses s'ensuivent pour votre cours : la divergence entre performance aux devoirs et performance aux examens est l'[[learning-gains|écart performance-apprentissage]] dans une cohorte nationale, et le décalage de deux ans signifie qu'une évaluation sur un semestre sous-estimera systématiquement le coût.

L'enseignement de l'informatique montre la même structure. La [[kumar-genai-computing-education-systematic-review-2026|revue systématique de 72 études]] a trouvé que l'IA générative augmentait de façon fiable l'achèvement à court terme et réduisait le temps passé sur la tâche dans 36 études, sans qu'une seule étude du corpus documente un effet négatif sur la performance immédiate, et ces gains « ne se transfèrent pas à la performance indépendante » dans 21 études. Les étudiants assistés par Codex ont accompli deux fois plus de tâches pendant l'apprentissage et n'ont pas mieux réussi que les contrôles aux post-tests sans IA.

Se pose ensuite la question de savoir si les étudiants utilisent l'aide. Une expérience scolaire randomisée de deux ans dans 18 collèges, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]], a trouvé des gains modestes en [[math-education|mathématiques]], et les étudiants s'engageaient rarement dans des conversations de tutorat substantielles. Les auteurs ont noté que les gains ressemblaient à ceux rapportés pour une pratique structurée sans IA, et la conception combinait pratique individualisée et [[intelligent-tutoring|tutorat par IA]], si bien qu'elle n'isolait pas la contribution de la composante IA. Un tuteur compétent disponible est un fait différent d'étudiants qui l'utilisent de façon productive.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] ajoute une leçon plus nette à partir de plus de 6.000 élèves de collège utilisant NUMI. Le soutien par IA améliorait la reprise après erreur et ralentissait la progression dans les questions. Une règle de maîtrise fondée sur trois bonnes réponses consécutives augmentait la réussite telle que définie par la plateforme sans, à elle seule, améliorer l'apprentissage une semaine plus tard. Le signal d'apprentissage différé le plus fort est apparu lorsque l'IA était intégrée au flux de travail de maîtrise, et ces gains étaient marginalement significatifs statistiquement et concentrés sur une matière particulière déjà pratiquée. C'est une preuve suggestive en faveur d'une approche structurée, pas une recette prouvée.

## Construire l'activité pour que l'étudiant fasse la pensée qui compte

La [[learning-design|conception pédagogique]] compte plus que le modèle utilisé. La conception qui survit à ces résultats comporte quatre temps : une tentative, une aide visant la difficulté, quelque chose que l'étudiant fait de cette aide, et une nouvelle application avec l'accompagnement retiré.

**1.** Demandez une tentative initiale, une prédiction, un brouillon, une explication ou une interprétation.

**2.** Offrez une assistance ciblée : un indice, une explication, un exemple contrasté ou une rétroaction précise sur le point où ils se sont arrêtés.

**3.** Exigez une réponse à l'assistance. Ils l'expliquent, la révisent avec elle, la vérifient, ou justifient de l'accepter ou de la rejeter.

**4.** Vérifiez sur un problème comparable ou dans un contexte différent, avec l'accompagnement retiré.

C'est un point de départ pédagogique plutôt qu'une séquence validée, et la quantité et le moment appropriés de l'accompagnement dépendent des étudiants et de la tâche. Cela reflète ce que soulignent les synthèses sur l'[[scaffolding|étayage]] et l'[[active-learning|apprentissage actif]] : un accompagnement qui aide les apprenants à comprendre, pratiquer, évaluer et finalement performer avec moins d'aide.

Appliquez le principe à l'objectif, pas mécaniquement à chaque fonctionnalité. « Étayer, ne pas se substituer » est une bonne règle avec un piège à l'intérieur. Un exemple entièrement résolu peut être quelque chose dont les étudiants apprennent, et une séquence d'indices peut tout de même devenir quelque chose qu'ils cliquent sans réfléchir. Ce qui compte, c'est ce que l'apprenant fait de l'assistance, raison pour laquelle la [[cognitive-offloading|décharge cognitive]] et la [[help-seeking|recherche d'aide]] se situent aux extrémités opposées de ce que le même outil peut produire.

Le contre-exemple mérite d'être gardé en vue, parce qu'il vous empêche de transformer l'effort en indicateur de l'apprentissage. Dans les expériences préenregistrées rapportées dans [[coach-not-crutch-ai-writing|Coach not crutch]], les adultes qui s'étaient entraînés à réviser des lettres de motivation avec l'IA produisaient ensuite une meilleure écriture sans IA que ceux qui s'étaient entraînés seuls, et ils y dépensaient moins d'effort. Les bénéfices persistaient à un suivi d'un jour, et une seconde expérience a trouvé que regarder un exemple révisé par IA produisait des bénéfices comparables à un entraînement avec l'outil. Il s'agissait de tâches d'écriture brèves et délimitées, pas de preuves d'une amélioration durable dans toute l'écriture. Elles montrent bien que moins d'effort n'est pas automatiquement moins d'apprentissage, et que le but est de préserver l'activité d'apprentissage, pas de maximiser la difficulté.

## Rendre visible dans ce que vous notez la pensée qui est retenue

La façon dont les étudiants utilisent l'outil compte plus que le fait de l'avoir. Dans [[yan-cognitive-outsourcing-genai-assessments-2026|une étude qualitative de 38 étudiants de licence]] lors d'évaluations de dissertations sans surveillance, l'engagement allait de l'[[cognitive-offloading|externalisation cognitive]] à la réaffectation cognitive, le déplacement de l'effort de la récupération de bas niveau vers l'[[critical-thinking|évaluation critique]]. La plupart des étudiants, 31 sur 38, entendaient utiliser l'IA générative comme assistant d'apprentissage. En pratique, 76.32% s'appuyaient sur un dialogue à tour unique — demander, obtenir la réponse, arrêter — et 78.94% utilisaient l'outil avant ou après la rédaction plutôt que tout au long de la tâche. Seuls 8 étudiants travaillaient comme partenaires cognitifs par un dialogue soutenu et itératif. Ce spectre, de l'externalisation à la réaffectation, est ce que décrit l'[[student-ai-interaction|interaction étudiant-IA]]. Un participant a décrit l'effet ainsi : « la vitesse à laquelle on l'oublie est aussi très rapide ».

La leçon [[pedagogy|pédagogique]] est que les autorisations générales et les interdictions générales laissent également les étudiants deviner. Ce qui a changé les comportements, selon le compte rendu de cette étude, c'est un accompagnement propre à la tâche indiquant quel travail cognitif les étudiants devaient retenir et quelle assistance était appropriée, la direction de conception développée dans [[reduce-ai-cheating]] et [[reducing-ai-misuse]].

Faites donc de la pensée retenue un artefact que vous pouvez noter. En mathématiques, demandez la solution tentée avant que l'aide soit sollicitée, puis faites utiliser aux étudiants une consigne du type « identifie la première étape que je devrais reconsidérer, donne-moi un indice utile, et demande-moi de réessayer », et exigez une nouvelle solution accompagnée d'une explication plutôt que la reproduction de la réponse de l'IA. En écriture, faites évaluer aux étudiants leur brouillon contre la grille avant de demander une critique, puis faites-leur expliquer quelles suggestions ils ont acceptées, modifiées ou rejetées. Si la construction d'arguments est l'objectif, la prose de l'IA ne peut pas tenir lieu de preuve que l'étudiant sait construire un argument. Si l'évaluation de révisions alternatives est l'objectif, comparer des exemples complets est approprié. Les pages sur l'[[writing-education|enseignement de l'écriture]] et la [[feedback-literacy|littératie en rétroaction]] contiennent le détail.

L'exigence de conception de la revue est le même geste au niveau du cours : la vérification — lire, tester, modifier, expliquer et critiquer la production de l'IA — rendue composante notée et observable plutôt qu'aspiration laissée à la discrétion de l'étudiant. Et tout résultat légitime n'a pas à être démontré sans IA. Un cours peut enseigner délibérément un travail efficace soutenu par l'IA, auquel cas vous évaluez la capacité de l'étudiant à sélectionner, vérifier, réviser et défendre son usage de l'outil, à côté des fondations indépendantes que la discipline exige. [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] propose cette distinction à trois volets entre capacité indépendante, performance augmentée par l'IA et responsabilité de vérification. C'est un cadre conceptuel, pas un instrument validé.

## Vérifier à qui l'outil profite et qui il laisse discrètement de côté

Une amélioration moyenne peut masquer des étudiants qui n'ont rien gagné ou qui ont rencontré un nouvel obstacle. La synthèse sur la [[digital-divide|fracture numérique]] sépare l'accès à un outil de la compétence nécessaire pour l'utiliser et de la question de savoir qui finit par obtenir un résultat utile, et les trois comptent pour un cours.

Les [[prior-knowledge|connaissances préalables]] modèrent tout dans la revue sur l'informatique : les étudiants bien préparés convertissent l'assistance en compétence durable, tandis que les étudiants mal préparés risquent de l'utiliser comme béquille qui supprime la pratique dont ils ont besoin. L'étude de cohorte nationale montre la même concentration à sa manière, les pertes d'apprentissage se situant chez les 81% dont le comportement de devoirs indiquait une externalisation.

Pour une évaluation de classe, détaillez les résultats par connaissances préalables, besoins linguistiques et exigences d'accessibilité plutôt que de rapporter une moyenne de cours. Apprendre aux étudiants à obtenir et à évaluer une rétroaction utile fait partie de la [[ai-literacy|littératie en IA]], et cela n'arrive pas avec la licence. Quand vous évaluez l'apprentissage indépendant, retirez l'assistance qui fournit la pensée visée et laissez les aménagements qui donnent accès à la tâche, ce qui est la distinction dont dépendent à la fois [[accessibility|l'accessibilité]] et l'[[equity-in-ai-education|équité en IA et éducation]].

Inspectez aussi la rétroaction que les étudiants reçoivent réellement. Une réponse fluide peut mal diagnostiquer la difficulté, renforcer une erreur ou livrer une réponse là où un autre type de soutien était nécessaire. Utilisez des supports alignés sur le cours, gardez une voie vers l'aide humaine, et ne collectez pas plus d'informations sur les étudiants que l'activité n'en exige. [[ai-feedback-quality|Qualité de la rétroaction par IA]], [[pedagogical-safety|sécurité pédagogique]] et [[privacy|vie privée]] couvrent les détails.

## Ne pas faire confiance au tableau de bord, y compris au vôtre

Les métriques de plateforme sont les preuves les plus faciles à porter dans une décision d'achat, et les plus faciles à surinterpréter. Dans [[zhang-platform-scores-miss-ai-teaching-agents-2026|une évaluation de huit agents pédagogiques à IA]] en [[medical-education|éducation médicale]], les classements selon le score propre à la plateforme divergeaient d'une grille de qualité pédagogique validée par des experts. L'agent classé troisième par la plateforme était dernier sur la qualité selon la grille, parce que le score de la plateforme suivait la performance des étudiants pendant l'interaction plutôt que le comportement pédagogique de l'agent. Une métrique intégrée est une hypothèse à valider.

Le même scepticisme s'applique aux preuves que vous produisez vous-même. Une enquête de satisfaction mesure la satisfaction, et l'apprentissage perçu est une [[self-report-measures|mesure auto-déclarée]] dont le corpus documente l'écart considérable avec l'apprentissage mesuré. Les notes de devoirs mesurent le devoir. Ni l'une ni les autres ne vous disent ce qu'un étudiant saura faire dans trois semaines avec l'outil fermé, et [[evaluating-ai-interventions-methods]] expose les conceptions de comparaison qui vous en rapprochent.

## Ce que les enseignants comprennent mal ici

**« De meilleures notes au devoir signifient qu'ils ont plus appris. »** Les deux peuvent aller dans des directions opposées. L'expérience sur les garde-fous a augmenté la pratique assistée de 48% tandis que les examens sans aide baissaient de 17%, et la cohorte nationale a vu les scores de devoirs monter de 18% tandis que les examens à livre fermé baissaient de 20% en six mois. Aucun de ces schémas n'apparaîtrait dans un carnet de notes qui n'enregistre que la remise finale.

**« C'est un tuteur, donc c'est sûr. »** Tuteur est une étiquette, et les résultats derrière l'étiquette sont mitigés. Le tuteur configuré par l'enseignant évitait la pénalité à l'examen sans battre le contrôle aux examens sans aide. Khanmigo a produit des gains modestes qui ressemblaient à une pratique structurée, avec peu de tutorat substantiel. L'IA de NUMI ralentissait la progression dans les questions. Un tuteur peut retenir les solutions et absorber tout de même la pratique.

**« Si c'est plus facile, cela ne leur apprend rien. »** Faux dans les deux sens, et c'est pourquoi l'effort est un mauvais indicateur. Coach not crutch a trouvé moins d'effort avec une meilleure écriture sans IA le lendemain, donc la facilité n'est pas le signe distinctif. Ce qui sépare les cas, c'est de savoir si l'étudiant a fait la pensée que nomme l'objectif, et c'est une question de conception, pas un réglage de difficulté.

**« Une règle générale, ou une meilleure invite, corrige leur façon de l'utiliser. »** L'étude sur 38 étudiants a trouvé la plupart des étudiants en mode « demander et arrêter » à tour unique, précisément dans les conditions où on leur avait dit que l'IA était un assistant d'apprentissage. Ce qui a modifié les comportements, c'est un accompagnement propre à la tâche et une exigence notée de vérification. Une ligne de politique et une invite habile en sont toutes deux des ingrédients, et aucune ne s'y substitue.

**« Le score de la plateforme, ou l'enquête de satisfaction, me dit que ça marche. »** L'évaluation des huit agents a trouvé un classement de plateforme qui s'inversait sous une grille experte. La satisfaction et l'apprentissage perçu sont des auto-déclarations. Les deux valent d'être recueillis comme informations de processus, et aucun n'est une mesure de l'apprentissage.

**« L'accès, c'est le problème d'équité, et nous avons résolu l'accès. »** L'accès est l'une des trois lignes, avec la compétence et la question de qui obtient un résultat utile. Les connaissances préalables décident si l'aide devient compétence ou béquille, et les pertes de la cohorte nationale se concentraient dans le groupe dont le comportement suggérait une substitution, pas dans le groupe sans appareils.

## Ce qui va vous revenir dessus

**« Mes étudiants disent que ça les aide. »** Cela aide probablement avec le travail sous leurs yeux, et c'est là le résultat, pas sa réfutation. Demandez-leur ce qu'ils savent faire sur une tâche similaire avec l'outil fermé, et vous obtenez la réponse qui compte.

**« Les études se contredisent, alors pourquoi agir sur l'une d'elles ? »** Elles se contredisent rarement une fois que vous alignez le résultat mesuré par chacune. Les résultats positifs tendent à mesurer la performance assistée, la satisfaction ou une activité bien structurée avec des vérifications différées ; les négatifs mesurent une performance sans aide plus tard. La synthèse de Burneo rend l'incertitude explicite : 0.125 écart-type en moyenne sur 14 essais, aucun avantage établi pour les outils génératifs plus récents. Une amélioration avant-après ne peut pas montrer que l'IA a causé le gain, puisque les étudiants progressent par le reste de l'[[teacher-role|enseignement]], et [[research-methods-aied|les méthodes de recherche sur l'efficacité]] exposent les conceptions de comparaison qui vous en rapprochent. Agissez sur les affirmations de conception, qui se répliquent, et restez ouvert sur la taille de l'effet, qui ne se réplique pas.

**« J'ai 200 étudiants. Je ne peux pas faire d'évaluations différées. »** Vous avez besoin d'une courte tâche de référence et d'un item différé, pas d'une étude. Utilisez le même type de tâche trois semaines plus tard sans l'outil, gardez la version de l'an dernier de l'examen comme comparaison grossière, et échantillonnez les travaux qui semblent incohérents avec les remises antérieures. Cela suffit pour voir un gain assisté de 48% à côté d'une perte sans aide de 17% si cela se produit dans votre cours.

**« Khanmigo a obtenu un résultat positif, donc le tutorat fonctionne. »** Il a obtenu des gains modestes en mathématiques dans 18 collèges, dans une conception qui réunissait pratique individualisée et tutorat par IA, alors que les étudiants tenaient rarement des conversations de tutorat substantielles. Lisez-le comme la preuve qu'un environnement de pratique bien structuré peut produire de petits gains, pas comme la preuve que la composante IA les a causés.

**« Je ne peux pas l'interdire et je ne peux pas le surveiller. »** Exact sur les deux points, et ni l'un ni l'autre n'est nécessaire. La question de conception est ce que votre activité rend facile. Si la vérification est notée, que la déclaration ne coûte rien et que la vérification sans aide existe, la plupart des étudiants prennent le chemin que vous avez construit.

**« Je n'enseigne pas l'IA. Ce n'est pas ma discipline. »** L'interférence se produit à l'intérieur de votre discipline, à l'étape où l'IA accomplit la pratique que votre cours existe pour fournir. C'est pourquoi le remède est un changement de devoir plutôt qu'une nouvelle unité.

## À faire cette semaine

**1.** Prenez une activité que vous menez déjà et écrivez la phrase de capacité : ce qu'un étudiant devrait savoir faire ensuite, l'outil fermé.

**2.** Ajoutez une référence de deux minutes au début et le même type d'item trois semaines plus tard. Notez les deux sans IA dans la salle.

**3.** Changez une consigne que vous donnez aux étudiants, de « explique ceci » à « donne-moi un indice, puis pose-moi une question », et exigez une tentative révisée avant qu'ils passent à la suite.

**4.** Ajoutez un artefact de vérification noté : une courte note sur ce qu'ils ont contrôlé, ce qu'ils ont rejeté et ce qu'ils ont modifié.

**5.** Détaillez le résultat par connaissances préalables pour les étudiants dont vous savez déjà qu'ils sont en difficulté, et lisez la rétroaction par IA qu'un échantillon d'entre eux a reçue.

## Où aller ensuite

[[evaluating-ai-interventions-methods]] couvre les mesures et les conceptions de comparaison derrière les vérifications ci-dessus, et [[ai-ed-evaluation]] est le guide pratique d'évaluation. [[how-ai-impacts-students]] prend le versant de l'expérience étudiante, [[top-10-findings-ai-education-instructors]] compresse les mêmes preuves en décisions pour les enseignants, et [[limitations-in-aied-research]] est le compte rendu honnête de ce que cette littérature ne peut pas encore vous dire. Si votre question est devenue une question d'évaluation, [[reduce-ai-cheating]] est la page suivante.
