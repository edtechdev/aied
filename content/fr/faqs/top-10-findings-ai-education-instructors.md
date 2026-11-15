---
title: "Quels sont les 10 principaux résultats de la recherche sur l'IA en éducation que les enseignants devraient connaître ?"
created: "2026-09-22T19:14:36-04:00"
updated: "2026-11-14T18:10:00-05:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
source_updated: "2026-11-14T18:10:00-05:00"
translation_of: faqs/top-10-findings-ai-education-instructors
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Ces dix études portent directement sur les décisions que prennent les enseignants : quoi assigner, comment l'évaluer, quels outils acheter, comment les construire et comment savoir si l'apprentissage a eu lieu. Chaque entrée donne l'étude, son résultat et la pratique qu'elle modifie.

## Les dix études

**1. Un simple accès à un chatbot a fait chuter les notes d'examen de 17% ([[generative-ai-guardrails-harm-learning|Bastani et coll., 2025]]).**

Près de 1,000 lycéens en Turquie, dans environ 50 classes, ont suivi trois séances de mathématiques sur le même contenu. Un groupe disposait d'une simple fenêtre de chat GPT-4 pendant la pratique. Un autre avait un tuteur construit sur le même modèle avec des [[guardrails|garde-fous]] écrits par l'enseignant : des indices à la place des réponses, avec la solution correcte et les erreurs courantes intégrées dans l'invite. Le groupe témoin n'avait pas d'IA. Chaque séance se terminait par un [[summative-assessment|examen à livre fermé]] sur des problèmes similaires, l'outil ayant disparu.

Le groupe avec le chat simple a obtenu 48% de plus que le groupe témoin pendant la pratique et 17% de moins que lui à l'examen. Les étudiants qui n'ont jamais touché à l'IA ont surpassé ces élèves. Le groupe avec garde-fous a gagné 127% en pratique et est resté au même niveau à l'examen. Le préjudice a disparu, et aucun avantage d'apprentissage n'est apparu à sa place. Les journaux de conversation expliquent la différence : le groupe sans garde-fous demandait des réponses et s'arrêtait, tandis que le groupe avec garde-fous tentait les problèmes, demandait des indices et progressait dès la première séance.

Pour les enseignants, « l'IA autorisée » n'est pas une politique. L'interface décide si l'outil devient un canal d'indices ou une machine à réponses, et un chatbot généraliste choisit par défaut la seconde option. Une fenêtre de chat laissée ouverte pendant la pratique pénalise les étudiants qui s'y appuient le plus.

Les administrateurs peuvent opposer le même résultat à l'argument d'achat selon lequel un modèle plus puissant corrige la pédagogie. Le modèle était identique dans les deux branches.

Voir aussi : [[training-ai-tutors-to-guide-rather-than-answer|Former un tuteur à guider plutôt qu'à répondre]]

**2. Un tuteur construit sur la pédagogie du cours a battu la classe en apprentissage actif, en moins de temps ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et coll., 2025]]).**

Physical Sciences 2 est le cours d'introduction à la physique de Harvard destiné aux étudiants en sciences de la vie. À l'automne 2023, 194 étudiants d'un essai croisé ont suivi chacune des deux leçons à deux reprises, une fois dans la classe en [[active-learning|apprentissage actif]] du cours et une fois avec un tuteur conçu pour le cours, avec des pré-tests et des post-tests autour de chaque version.

Les étudiants ont appris davantage avec le tuteur. Le post-test médian était de 4.5 contre 3.5, les [[learning-gains|gains d'apprentissage]] médians étaient plus du double de ceux de la classe, et les estimations par quantile de l'effet allaient de 0.73 à 1.3 écart-type. Ils ont passé une médiane de 49 minutes avec le tuteur contre environ 60 minutes en classe, et 83% ont jugé ses explications aussi bonnes ou meilleures que celles de leurs enseignants. Les notes d'engagement et de motivation ont augmenté. Le plaisir et l'état d'esprit de développement n'ont pas différé.

Le résultat tient à la conception. Le tuteur exécutait les mêmes gestes que la classe : exemples résolus, indices progressifs, invites d'auto-explication, une séquence qui suit la recherche sur la façon dont on apprend la physique. La comparaison portait sur l'apprentissage actif, non sur le cours magistral, si bien que l'objection courante selon laquelle n'importe quoi bat un cours magistral ne s'applique pas.

Les responsables du développement pédagogique disposent ici de l'argument le plus solide disponible : la conception d'un tuteur est un travail curriculaire, non un achat. Pour les équipes produit, la barre est concrète : égaler une classe en apprentissage actif, en moins de temps, avec les mêmes gestes pédagogiques.

Voir aussi : [[developing-ai-tutor|Bonnes pratiques pour développer un tuteur IA]]

**3. Le tutorat par IA a égalé des tuteurs humains experts ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et coll., 2026]]).**

StudentBench a regroupé 2,469 séances de tutorat avec 2,383 adultes préparant le GRE, en utilisant 13 tuteurs IA construits sur 12 modèles, des tuteurs humains en direct et un groupe témoin vidéo. Le résultat mesuré était le gain d'apprentissage sur des items quantitatifs et verbaux.

Le tutorat par IA regroupé était statistiquement équivalent au tutorat humain expert, à un quart d'écart-type près, et les deux dépassaient le groupe témoin d'environ six points de pourcentage : 6.86 en quantitatif et 5.47 en verbal, soit environ une réponse correcte et demie à deux de plus par section. Les tuteurs IA ont été jugés plus faibles sur la planification de leçon et la création d'exercices, ce que les tuteurs humains faisaient mieux.

Pour les administrateurs, l'arithmétique des effectifs change pour une préparation à un test bien spécifiée. Quand un tuteur sous licence égale un tuteur humain à un quart d'écart-type près, la décision porte sur le coût et la couverture, et l'efficacité cesse d'être la question. Les chercheurs noteront la limite : l'équivalence n'est pas la supériorité, et un test standardisé est le résultat le plus facile pour une machine à égaler.

Les responsables du développement pédagogique peuvent regarder où les tuteurs humains gardaient un avantage : diagnostiquer ce dont un apprenant a besoin ensuite, et construire la séquence qui en découle.

Voir aussi : [[intelligent-tutoring|Tutorat intelligent]]

**4. Prendre des notes a battu le recours à un chatbot, trois jours plus tard ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et coll., 2026]]).**

Kreijkes et ses collègues ont mené une expérience préenregistrée dans sept établissements secondaires anglais. 405 élèves de Year 10 ont suivi deux de trois conditions sur un texte d'histoire : un chatbot qui pouvait répondre à des questions à son sujet, la prise de notes, ou les deux. Trois jours plus tard, ils ont passé des tests à livre fermé portant sur la rétention littérale, la compréhension et le [[retrieval-spacing-interleaving|rappel libre]].

Les notes ont battu le chatbot sur les trois mesures, d'environ un demi écart-type sur la rétention et de près de quatre dixièmes sur la compréhension. Les notes plus le chatbot ont battu le chatbot seul sur deux des trois mesures et n'ont rien apporté au rappel libre, et les notes seules étaient plus fortes que la combinaison. Dans la condition combinée, environ un quart des élèves ont copié la sortie du chatbot dans leurs notes. Les élèves ont néanmoins jugé le chatbot plus facile, plus utile et plus agréable que l'écriture.

Les enseignants ont ici une preuve directe qu'un assistant de lecture peut remplacer la lecture. Si le but du devoir est de comprendre un texte, [[writing-education|l'écriture est la compréhension]], et un outil qui répond à des questions sur le passage supprime la pratique. Gardez les notes. Si vous autorisez le chatbot, demandez quelque chose qu'il ne peut pas fournir : une comparaison, une contestation du texte, ou un résumé écrit après la fermeture de l'outil.

Voir aussi : [[ai-support-reading-comprehension|Soutien de l'IA à la compréhension en lecture]]

**5. Le temps d'étude a chuté de 27%, et la rétention avec lui ([[generative-ai-reduced-study-time-math|Rismanchian et coll., 2026]]).**

Un panel de dix ans de la plateforme ALEKS, couvrant 3.2 millions d'interactions d'apprentissage et 12.2 millions de temps de réponse à des évaluations de positionnement, montre ce que les étudiants ont fait après l'arrivée de ChatGPT. La conception compare des types de problèmes qui peuvent être collés dans un chatbot (problèmes écrits en mots) à des types qui exigent de manipuler un graphique dans la plateforme, au sein du même curriculum.

Le temps consacré aux problèmes sensibles à l'IA a chuté de 2.8% par trimestre chez les étudiants du supérieur, soit 26.9% sur onze trimestres. Les lycéens ont chuté de 31.3%, les collégiens de 9.0%, et les élèves de cinquième année du primaire n'ont montré aucun changement détectable. La baisse a entièrement disparu sous [[remote-proctoring|surveillance à distance]], ce qui est le test décisif : l'outil indisponible, les étudiants passaient l'ancien temps. Les items de rétention sous surveillance ont montré une baisse cumulative de 25% des chances d'une réponse correcte.

Le gradient par âge est un signal de conception pour les équipes produit. Le temps de pratique est la variable qui bouge, et elle bouge le plus là où la tâche est la plus facile à déléguer. Pour les enseignants, le temps passé sur la tâche est un signal d'alerte précoce peu coûteux : une cohorte qui termine les mêmes problèmes beaucoup plus vite n'apprend probablement pas la même chose.

Voir aussi : [[reducing-over-reliance|Réduire la dépendance excessive à l'IA]]

**6. Les notes de devoirs ont augmenté de 18% tandis que les examens à livre fermé ont chuté de 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et coll., 2026]]).**

26,811 élèves de la 7e à la 12e année en Chine, suivis pendant 30 mois, avec une adoption de l'IA générative à des moments différents selon les cohortes. Les notes de devoirs ont augmenté de 18% et le temps d'achèvement a chuté de 30%, de 64 à 45 minutes. Les examens mensuels à livre fermé ont chuté de 20% de la moyenne de référence en six mois, et les examens d'entrée à enjeux élevés de 18% à 24% après environ deux ans.

La chronologie montre le mécanisme. Environ 81% des utilisateurs d'IA terminaient leurs devoirs plus vite que l'élève non utilisateur le plus rapide, puis réussissaient mal aux examens. La minorité qui maintenait un temps de devoirs comparable à celui des non-utilisateurs apprenait aussi bien que quiconque. Les pertes étaient les plus fortes en sciences sociales, puis en STEM, puis en langues, et plus fortes chez les élèves à haut rendement.

L'achèvement des devoirs est un piètre indicateur de réussite, et l'écart apparaît en six mois, bien avant que les résultats des examens d'entrée ne bougent. Les enseignants peuvent agir plus tôt : gardez les preuves notées à livre fermé, et traitez le travail à la maison comme une pratique dont le temps d'achèvement est visible.

Voir aussi : [[checking-whether-educational-ai-works|Vérifier si l'IA éducative fonctionne]]

**7. Tous les tuteurs testés ont échoué sur la pédagogie, et échoué davantage au fil d'une conversation ([[hazra-safetutors-pedagogical-safety-2026|Hazra et coll., 2026]]).**

SafeTutors a testé 11 tuteurs, de modèles à poids ouverts de 3.8B à 72B plus GPT-5-mini, en mathématiques, physique et chimie, contre une taxonomie de 11 dimensions et 48 sous-risques tirés des [[learning-theories|sciences de l'apprentissage]]. Ses catégories d'échec sont pédagogiques : divulgation excessive de la réponse, renforcement des conceptions erronées et abandon de l'[[scaffolding|étayage]]. Chacune paraît utile sur le moment, parce que l'étudiant obtient rapidement une réponse correcte.

Tous les modèles ont montré un préjudice pédagogique large. Les modèles plus grands n'étaient pas plus sûrs de façon fiable, et l'utilité générale n'était que faiblement corrélée à la sécurité pédagogique. Les taux de préjudice sont passés de 17.7% dans les échanges à un tour à 77.8% dans des conversations de cinq à huit tours.

Les évaluations à un seul tour ne prouvent pas qu'un tuteur est sûr, et les équipes produit devraient concevoir leurs tests en conséquence. Un modèle qui réussit une vérification ponctuelle d'utilité et de sécurité peut échouer sur la majeure partie d'une conversation réelle. Les administrateurs qui achètent un tuteur ont besoin de trois réponses : retient-il les solutions, sonde-t-il les conceptions erronées, et tient-il sur une séance. Une démonstration fournisseur d'un seul échange n'en fournit aucune.

Voir aussi : [[pedagogical-safety|Sécurité pédagogique]]

**8. Les cas d'inconduite reposent sur des preuves plus minces que ne le suggèrent les accusations ([[munoz-misconduct-allegation-evidence-2026|Munoz et coll., 2026]]).**

Munoz et ses collègues ont codé tous les cas d'inconduite liés à l'IA générative dans une université australienne sur trois ans : 1,162 cas portant 1,855 éléments de preuve, chacun évalué pour sa pertinence, sa crédibilité et sa force inférentielle.

Les allégations d'IA générative sont passées de 11.9% des cas d'inconduite en 2023 à 36.9% en 2025, tandis que le volume total de cas est resté stable. 58 cas, 5% du total GenAI, reposaient sur la seule affirmation, sans aucun élément de preuve. La sortie de détecteur était rare et faible : les rapports Turnitin ou de similarité n'avaient aucune force inférentielle dans 73 éléments, et la sortie autonome de GPTZero avait une faible crédibilité dans 69. La preuve la plus forte venait de l'enquête plutôt que de l'allégation, avec des aveux en entretien oral dans 410 éléments à 97.2% forts. Les [[hallucination-risk|références fabriquées]] constituaient le plus grand changement structurel, 22.3% des éléments, passant de 10.4% en 2023 à 30.0% en 2025.

Pour les administrateurs, la leçon est procédurale. Un cas construit sur un score de détecteur ne survivra pas à un appel, et une enquête qui commence par l'outil plutôt que par l'entretien produit des dossiers faibles. Les enseignants peuvent agir sur l'artefact qui ne cesse d'apparaître : les références fabriquées sont courantes, et une vérification des références coûte peu.

Voir aussi : [[should-we-use-ai-detectors|Utiliser des détecteurs d'IA]]

**9. La confiance des enseignants dans leur culture de l'IA suit à peine leur compétence mesurée ([[ai-literacy-assessment-misalignment|Zhang et coll., 2026]]).**

288 enseignants de la maternelle à la terminale ont rempli une enquête d'auto-évaluation sur la culture de l'IA et une mesure objective de performance construite sur le même cadre : Concept, Usage, Évaluation et Éthique. Les corrélations entre les deux allaient de 0.07 à 0.24.

Une analyse de profils latents a trouvé six groupes. 43 enseignants se classaient systématiquement haut tout en obtenant des scores plus bas à la mesure objective. 59 montraient l'inverse. Les autres se regroupaient près de la moyenne ou se divisaient selon l'expérience préalable de l'IA.

Pour les responsables du développement pédagogique, l'[[self-assessment|auto-évaluation]] n'est pas une analyse des besoins. Une enquête qui demande aux enseignants à quel point ils sont confiants financera excessivement les confiants et servira mal les discrets, et ces groupes ne sont pas les compétents et les personnes en difficulté. De courtes tâches de performance les séparent. Les chercheurs devraient traiter les faibles corrélations comme un avertissement de mesure : toute étude de la [[ai-literacy|culture de l'IA]] fondée sur l'[[self-report-measures|auto-déclaration]] mesure la confiance.

Voir aussi : [[faculty-development-ai|Un développement pédagogique qui change les pratiques]]

**10. La notation par IA pénalise les étudiants qui écrivent moins bien ([[ai-scoring-language-bias-physics|Feser et Tschisgale, 2026]]).**

Les explications de physique de 116 élèves du secondaire ont été notées par 9 approches d'apprentissage automatique et 2 approches de grands modèles de langage, puis comparées à des notes d'experts humains. L'accord avec les experts allait de 67.2% à 78.4%, ce qui semble acceptable jusqu'à ce qu'on décompose les erreurs.

Chaque approche sous-estimait la compréhension conceptuelle pour les explications de moindre qualité linguistique. Le biais allait dans un seul sens : une écriture plus forte n'était pas surestimée. Le schéma reflète ce qui a été rapporté pour les enseignants de physique eux-mêmes, ce qui suggère que la difficulté réside dans l'inférence de la compréhension à partir de la prose, pour les personnes comme pour les modèles.

Le personnel d'évaluation et les équipes produit doivent déclarer les taux de sous-estimation par qualité de langue, et pas seulement l'accord global avec les experts, car la moyenne cache le groupe qui est pénalisé. Pour toute personne qui note des [[multilingual-learning|apprenants multilingues]], orientez les réponses de faible qualité linguistique vers la [[human-in-the-loop-ai|relecture humaine]] ou concevez des tâches qui ne dépendent pas de la prose.

Voir aussi : [[ai-grading-fairness-reliability|Notation par IA juste et fiable]]

## Ce que les dix ont en commun

Trois des études mesurent deux choses à la fois : ce que les étudiants produisent avec l'outil, et ce qu'ils savent faire sans lui. Bastani, Rismanchian et Strömberg constatent tous une divergence, et seule la mesure sans aide se comporte comme un apprentissage. Quatre reposent sur un choix de conception plutôt que sur le modèle : les garde-fous chez Bastani, la pédagogie intégrée au tuteur de Kestin, l'écriture que Kreijkes a maintenue dans la tâche, et le cadre multi-tours testé par SafeTutors. Trois examinent le système autour de l'outil, c'est-à-dire les preuves utilisées dans les cas d'inconduite, la façon dont la compétence des enseignants est mesurée, et les hypothèses linguistiques de la [[automated-assessment|notation automatisée]]. StudentBench établit la parité sur un test standardisé, le seul résultat où une machine peut le plus facilement égaler une personne. Bastani apparaît dans deux groupes parce qu'il fournit à la fois l'écart et la correction de conception.

Cela laisse trois questions à emporter dans toute décision de cours ou de produit. Que devrait savoir faire l'étudiant quand l'outil a disparu ? Que demande-t-on à l'activité de faire pendant qu'il est ouvert ? Quelle preuve montrerait la différence un mois plus tard ?

## Où ces preuves sont minces

Ces études partagent les [[limitations-in-aied-research|limites de la recherche en IA en éducation]] dans son ensemble. Deux des plus grandes se déroulent en Turquie et en Chine, trois aux États-Unis, une en Angleterre, une en Australie, et l'étude de notation en Allemagne. L'une est un banc d'essai de modèles commerciaux plutôt qu'une étude de terrain. Les mathématiques du secondaire dominent, suivies de la physique et de l'informatique. Très peu d'études portent à grande échelle sur [[humanities-education|l'écriture en sciences humaines]], sur la formation professionnelle ou sur les étudiants en situation de handicap.

Seuls le panel chinois et le panel ALEKS observent les étudiants plus de deux ans après l'adoption, et les auteurs chinois soutiennent que les études plus courtes sous-estiment systématiquement la pénalité à long terme. Six de ces résultats sont des préprints ou des documents de travail qui n'ont pas terminé l'examen par les pairs : StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang et Feser. Les études de Bastani, Kestin, Kreijkes et Munoz sont publiées dans des revues à comité de lecture.

Les résultats nuls et négatifs sont rares dans cette littérature, si bien que le corpus publié surestime probablement la fréquence à laquelle l'IA aide. Ces études constituent la meilleure orientation actuelle sur dix décisions, et aucune ne tranche une question.

## Où aller ensuite

[[does-ai-help-students-learn|L'IA aide-t-elle les étudiants à apprendre ?]] est la revue de preuves plus large qui sous-tend ces affirmations. [[redesign-assessment-ai-era|Comment repenser l'évaluation à l'ère de l'IA ?]] va plus loin sur le volet de l'évaluation. Pour les cas d'intégrité, [[reduce-ai-cheating|Comment réduire la triche par IA ?]] couvre les preuves de processus et la politique. Pour les résultats sur le développement professionnel, [[faculty-ai-competencies|De quelles compétences en IA les enseignants ont-ils besoin ?]] est la page compagne, et [[addressing-common-misconceptions-ai-education|Comment répondre aux idées fausses courantes sur l'IA en éducation ?]] traite les objections que vous entendrez probablement de vos collègues.
