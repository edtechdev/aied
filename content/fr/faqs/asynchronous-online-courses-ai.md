---
title: "Comment concevoir et animer des cours en ligne asynchrones quand l'IA peut faire le travail ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 68
type: faq
foundations: [academic-integrity, cognitive-offloading, learning-design]
pedagogy: [community-of-inquiry, online-teaching-and-learning, self-regulated-learning, student-engagement]
technology: [generative-ai]
assessment: [assessment]
methods: [meta-analysis-systematic-review, rct, mixed-methods-research, design-based-research]
ethics: [guardrails]
audience: [instructors, instructional designers]
level: [higher ed, adult learning]
source_updated: "2026-10-28T11:34:12-04:00"
translation_of: faqs/asynchronous-online-courses-ai
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

Le trimestre s'ouvre et rien ne se passe à une heure fixe. Vous publiez la lecture de la première semaine, la consigne de discussion, le premier cas, puis vous attendez de voir ce qui revient. Ce qui revient est fluide, dans le sujet, et ne vous dit rien de l'étudiant qui l'a envoyé. Il n'y a pas de salle où entrer, pas de visage à lire un mardi à 10 h 15, et pas de question de relance à poser pendant que l'étudiant est encore devant vous.

La réponse à donner à un collègue : dans un cours asynchrone, tout ce qu'une salle de classe fournit gratuitement doit être construit exprès. Faites porter la note sur le processus plutôt que sur le fichier final, conservez une mesure que l'étudiant produit sans outils et sans aide, contraignez l'IA que vous mettez à disposition et gardez-la à l'intérieur du cours, et traitez le calendrier comme une décision de conception. Pour tout devoir, demandez-vous ce qu'un étudiant devrait encore faire si un modèle produisait l'artefact à sa place.

## La version courte

**1.** Notez le processus. Un journal de décisions, un brouillon par étapes ou un paragraphe d'auto-explication montrent un raisonnement que la copie finale masque.

**2.** Conservez une mesure non assistée dans toute évaluation qui certifie une compétence. L'écart de rétention observé dans les données de population ci-dessous se referme dès que la surveillance des examens est en place.

**3.** Utilisez l'[[asynchronous-oral-assessment-2026|évaluation orale asynchrone]] là où les enjeux justifient le travail de production : consignes juste à temps, courts enregistrements que l'étudiant ne peut pas retravailler, grilles intégrées, transcriptions générées automatiquement.

**4.** Configurez toute IA que vous fournissez pour suggérer plutôt que répondre, et intégrez-la au cours au lieu de renvoyer par un lien vers quelque chose de générique.

**5.** Espacez les grandes échéances et ouvrez une fenêtre de 7-8 jours avant chacune. C'est le préavis que les données d'interaction vous donnent.

**6.** Notez le mouvement dans une discussion : une position assumée, une contestation, un réexamen documenté.

## Décidez de ce que votre devoir démontre

Un cours asynchrone est exposé pour une raison structurelle. Sa preuve d'apprentissage est la copie rendue, et les copies rendues coûtent désormais peu à produire.

Les démonstrations sortent entièrement l'étudiant de l'image. Dans un cours de psychologie de licence en présentiel, des agents autonomes se sont connectés au système de gestion de l'apprentissage, ont lu les supports du cours et ont réalisé des travaux évalués sans surveillance, sans qu'aucun étudiant n'intervienne. Deux quiz ont été terminés en environ **12 minutes** et en **moins de 5 minutes**, tous deux avec un score de **10/10**. Sur un message de discussion, l'agent a exploité les messages de ses pairs puis inventé une histoire de vie crédible à la première personne pour leur répondre. Le relevé plus large des auteurs couvre au moins **15 exécutions d'agents documentées** sur Canvas, Moodle et Brightspace, avec **sept outils d'agents**. Leur cadrage compte pour votre plan de cours : c'est un problème de [[assessment-validity]] avant d'être un problème d'[[academic-integrity|intégrité]], parce que l'achèvement par un agent supprime l'hypothèse que le travail rendu vient de la personne dont l'apprentissage est évalué ([[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou et El-Haddad, 2026]]).

Les preuves causales sur ce que l'outil fait à l'apprentissage sont tout aussi directes. Dans un essai randomisé portant sur environ 1.000 lycéens en mathématiques, une aide par IA sans garde-fou a augmenté la performance à l'entraînement de **48%** et réduit les scores d'examen en salle, sans aide et sans documents, de **17%**. Les étudiants sans accès ont surpassé ceux qui y avaient accès. Un tuteur [[guardrails|sous garde-fous]] qui donnait des indices plutôt que des réponses a éliminé le préjudice. La contrainte a décidé du résultat.

Les données de population vont dans le même sens. Sur **3.2 millions d'interactions ALEKS**, le temps d'étude consacré aux problèmes sensibles à l'IA a chuté de **26.9%** après la mise à disposition publique de ChatGPT, avec une **baisse de 25% de la probabilité de répondre correctement aux items de rétention surveillés**. L'effet a disparu dès que la surveillance a été en place. Cette disparition est la partie utile pour la conception de cours, puisqu'elle situe le raccourci hors plateforme et montre que le préjudice vit dans des conditions que vous fixez.

Il y a un échec plus discret contre lequel concevoir. L'[[metacognitively-discordant-completion-genai-2026|achèvement métacognitivement discordant]] nomme l'état qui consiste à rendre un travail correct et complet tout en sachant intimement que la compréhension n'est jamais arrivée. Dans une salle de classe, vous pourriez le repérer à une hésitation. Dans un cours asynchrone, la copie rendue est le seul canal, et une copie correcte se lit comme une réussite. La conception de l'[[assessment|évaluation]] est votre premier levier.

## Placez la preuve dans le processus

Si le produit fini ne prouve rien, la preuve doit venir de la manière dont le travail a été fait ou d'une condition que l'étudiant ne peut pas déléguer.

**Les artefacts qui révèlent le processus** sont le changement le moins coûteux, et ils fonctionnent à grande échelle : remises par étapes avec un journal de décisions intermédiaire obligatoire, une auto-explication d'un paragraphe jointe à chaque réponse, une annotation d'une source, un plan révisé après rétroaction. Ces artefacts saisissent [[cognitive-offloading|le raisonnement]] plutôt que son résidu, et ils coûtent relativement peu à parcourir pour l'enseignant.

**L'évaluation orale asynchrone** porte le plus de poids là où une compétence doit être certifiée. [[asynchronous-oral-assessment-2026|Pentland, Lowenthal et Krier (2026)]] ont évalué des évaluations en ligne qui fournissent les consignes juste à temps, font enregistrer aux étudiants de brèves réponses à la webcam, limitées dans le temps et qu'ils ne peuvent pas revoir, et notent selon des grilles intégrées pendant que les transcriptions se génèrent automatiquement. Sur deux études, un pilote de comptabilité intermédiaire et un cours d'analyse de données, les étudiants ont obtenu de meilleurs scores qu'aux examens à choix multiples en présentiel. La différence était significative dans la seconde étude et une tendance positive mais non significative dans la première, avec des corrélations modérées entre formats qui soutiennent une [[assessment-validity|validité]] convergente. Les étudiants ont déclaré se préparer différemment, mobiliser davantage de stratégies d'étude [[active-learning|actives]] et considérer le format comme professionnellement pertinent. Pour un cours sans heure commune, c'est l'équivalent structurel le plus proche : la réflexion se produit en direct, à un moment et dans un lieu choisis par l'étudiant, pour un coût administratif qui n'augmente pas avec la taille de la promotion.

**Une mesure non assistée** a sa place dans tout cours dont la note certifie des connaissances. Le résultat ALEKS est l'argument : avec la surveillance en place, l'écart de rétention a disparu. Dites aux étudiants pourquoi cette condition existe. Ce raisonnement a sa place dans [[course-ai-policy|votre politique d'IA du cours]].

## Décidez où l'outil se trouve dans la séquence

Une fois le produit devenu une preuve peu fiable, l'ordre du travail fait partie de la conception de l'évaluation.

[[brcic-effortless-trap-productive-struggle-2026|Brcic et Frljic (2026)]] placent le positionnement au centre de l'argument : autoriser ou interdire est un faux choix, et la question de conception qui compte est **où se trouve l'outil**. Les preuves causales qu'ils rassemblent montrent que le résultat bascule sur le seul positionnement. Le même assistant sans garde-fou qui laissait les lycéens environ **17% moins bons** à un examen sans aide n'a fait aucun mal une fois reconstruit pour retenir ses réponses, et un [[intelligent-tutoring|tuteur]] bien conçu a à peu près **doublé** l'apprentissage. Leur cadre en six gestes pour placer l'outil (amorcer, sonder, pointer, rattacher, renforcer, tester) est un menu utilisable. Gardez leur diagnostic : *si laisser entrer l'IA rend la tâche facile, elle est au mauvais endroit.* Un mauvais positionnement laisse une illusion d'apprentissage qui s'effondre à la tâche sans aide, l'état que décrit l'[[metacognitively-discordant-completion-genai-2026|achèvement métacognitivement discordant]].

Inscrite dans un devoir, cette idée vous donne une séquence imprimable sur la feuille :

**Réfléchir, s'engager, utiliser l'IA, critiquer, réviser, expliquer.**

Les étudiants tentent le travail intellectuel et s'engagent sur une interprétation, une prédiction, un plan ou une décision initiale. Puis le modèle entre en jeu, pour une rétroaction, des alternatives, des contre-arguments ou une critique. Ensuite les étudiants jugent ce qu'il a produit, révisent et expliquent ce qui a changé et pourquoi. L'étape d'engagement est ce qui rend le reste évaluable. Un étudiant qui ne s'est pas engagé n'a rien à réviser, et un artefact qu'un modèle a écrit de toutes pièces n'a aucun historique de révision.

La surcorrection à éviter : collecter chaque prompt et documenter chaque frappe produit de la charge de travail sans preuve. Demandez les points de décision que vous liriez vraiment : quelles preuves ont été retenues, quelle alternative rejetée, ce qui a changé après la critique.

## Associez la tâche indéfendable à un jumeau

L'option structurelle ici est d'arrêter de choisir entre une tâche pédagogiquement solide et une tâche défendable. [[roe-assessment-twins-2026|Roe, Perkins et Giray (2026)]] proposent des **jumeaux d'évaluation** : associer la tâche vulnérable à l'IA, un essai ou une analyse à faire à la maison, à une seconde tâche moins vulnérable qui évalue les *mêmes* résultats, programmée assez près pour permettre une vérification croisée, et notée de façon interdépendante. Leur cartographie parcourt les six brins de preuve de validité de Messick, et leur processus de conception comporte trois étapes : identifier les vulnérabilités, aligner les résultats et choisir le jumeau, puis élaborer une notation qui relie les deux. L'analyse à la maison garde sa valeur pour une enquête approfondie. Le jumeau peut être une courte variante de cas, l'explication d'une décision clé, ou une brève défense orale ou multimédia.

La question compagne est celle de la propriété du travail. [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani et Buckingham Shum]] soutiennent que la coécriture avec l'IA générative sape plusieurs formes de preuve de validité, et proposent l'**intégrité de coécriture** comme source de preuve de validité à part entière, violée quand un étudiant rend un contenu généré par l'IA qu'il ne comprend pas. Pour vérifier la propriété à grande échelle, ils rendent compte de travaux sur un **AI Viva** : un agent conversationnel qui mène un viva voce hybride, en posant des questions de compréhension dont le type et la complexité sont contrôlables, validé en profondeur par des enseignants experts et des spécialistes de l'évaluation. Pesez cela contre la surveillance de tout. Une défense orale de son propre raisonnement passe à l'échelle là où la surveillance d'une salle ne le fait pas, et elle produit des preuves de compréhension.

## Décidez ce que l'IA que vous fournissez a le droit de faire

Ce qui compte, c'est la différence entre une IA intégrée et contrainte et un agent conversationnel détaché. Les deux produisent des résultats différents.

L'[[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|assistant AIDA de l'Open University]] est le cas intégré le mieux documenté : six études itératives de conception fondée sur la recherche sur 18 mois, avec 498 étudiants et 20 membres du personnel, dans un établissement qui sert plus de 200.000 apprenants dans plus de 50 pays. Dans un essai randomisé exploratoire, les étudiants qui utilisaient AIDA ont passé **deux fois plus de temps** et visité plus de pages de leur cours que le groupe témoin, et **96%** souhaitaient que l'assistant soit disponible dans leurs études formelles. L'expérience du même établissement avec un agent conversationnel externe et détaché est allée dans l'autre sens.

[[lock-integrating-ai-online-learning-higher-ed-2025|La revue de Lock, Arteaga et Johnson (2025)]], 63 références dans 32 pays, ajoute une condition sociale : les étudiants qui utilisaient ChatGPT *à côté* d'un tutorat assuré par l'enseignant percevaient de plus grands [[learning-gains]] que ceux qui l'utilisaient seuls. Un assistant complète l'enseignant ou il remplace la relation, et une seule de ces deux choses est une conception de cours.

Deux mises en garde méritent du poids. L'échec de KhanMigo n'était pas technique. Les apprenants ne se sont pas engagés avec l'agent conversationnel et les preuves de gains étaient limitées, ce qui pointe vers la [[governance|préparation organisationnelle]] et l'adéquation pédagogique. Le côté enseignant n'est pas prêt non plus : dans une comparaison de la formation des enseignants sud-africains, le TPACK auto-déclaré pour l'enseignement des sciences intégrant l'IA était de **64.0%** dans une université en présentiel contre **47.4%** dans une université à distance, la connaissance pédagogique étant le domaine le plus faible dans les deux cas ([[online-teaching-and-learning]]). Déployer un assistant dans un cours asynchrone ne forme pas les personnes qui doivent juger sa production.

## Notez le mouvement dans une discussion

Les forums de discussion sont l'endroit où un cours asynchrone construit une [[community-of-inquiry|communauté]] ou devient discrètement une boîte de dépôt.

Le moment est la partie difficile. [[llm-facilitation-timing-online-discussions|Tsirmpas et ses collègues]] ont construit le corpus PEFK pour comparer des jeux de données de facilitation, puis ont mené la première enquête sur le *moment* de la facilitation avec des facilitateurs humains experts et des juges LLM. Les humains étaient plus prudents à intervenir. Les LLM étaient excessivement empressés. Les deux étaient plus certains en jugeant qu'une facilitation n'était **pas** nécessaire qu'en jugeant qu'elle l'était. Les modèles classifieurs entraînés ont surpassé les dispositifs LLM, et même alors les jeux de données existants plafonnaient la performance. Lecture pratique : gardez la modération autonome hors du chemin critique, et si vous utilisez l'IA dans une discussion, configurez-la pour rester silencieuse par défaut.

Les résumés aident les étudiants à naviguer dans un forum sans les faire participer. Avec 128 étudiants universitaires sur trois itérations, [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao et Cukurova (2026)]] ont constaté que les résumés de discussion générés par IA élargissaient l'exposition aux contributions des pairs et renforçaient la connexité du réseau, ces liens faibles que la théorie du capital social appelle le pontage, en abaissant l'effort nécessaire pour trouver des messages significatifs. Ils n'ont pas empêché l'activité de consultation de décliner au fil du cours. Le résumé est un [[scaffolding|étai]] de navigation.

La structure qui tient est une séquence plutôt qu'un fil : **position, contestation, réexamen.** Les étudiants s'engagent sur une interprétation ancrée dans le matériel du cours, puis rencontrent une autre perspective, un contre-exemple ou une critique, puis expliquent si et comment leur raisonnement a bougé. Ce que vous notez, c'est le mouvement entre les idées. Un message rendu plus deux réponses a cessé de le démontrer au moment où un agent a pu exploiter les messages d'un pair et usurper l'histoire de vie d'un camarade sur commande.

Parce que ce qu'un agent imite est un comportement de surface, vos propres contributions deviennent la ressource rare. Répondre mécaniquement à des dizaines de messages individuels est la forme la plus faible de présence enseignante ; synthétiser à travers la discussion est la plus forte : *trois hypothèses reviennent sans cesse dans vos analyses ; plusieurs d'entre vous lisent cette preuve différemment ; cet argument est convaincant jusqu'à ce que nous introduisions ce contre-exemple.* C'est de l'[[teacher-role|orchestration]] plutôt que de la production de messages.

La question de cadre sous-jacente aux deux est la responsabilité. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim et Anderson (2026)]] soutiennent que l'IA générative déstabilise l'hypothèse de la [[community-of-inquiry]] selon laquelle les indicateurs de présence peuvent être attribués à des humains. Ils traitent l'IA générative comme une condition épistémique et les présences comme des accomplissements sociotechniques dont la relation à la qualité de l'enquête dépend de l'endroit où se situe la responsabilité humaine. Concrètement, décidez et déclarez qui est responsable de quoi dans chaque échange, au lieu de supposer que la présence surgit parce qu'un forum existe.

## Maintenez le trimestre en mouvement sans salle où entrer

Les formats auto-rythmés supposent l'[[self-regulated-learning|autorégulation]] et l'enseignent rarement. Les preuves sur les comportements réellement corrélés au maintien dans la tâche sont d'une utilité pratique inhabituelle.

En interrogeant 530 étudiants universitaires par exploration de règles d'association et classification, [[decreasing-digital-distraction-college-online-learning-2026|Shi et al. (2026)]] ont constaté que les comportements d'apprentissage autorégulé — **fixation d'objectifs, structuration de l'environnement et gestion du temps** — co-occurrent le plus systématiquement avec une faible distraction numérique, avec l'[[student-engagement|engagement]] apprenant-enseignant et apprenant-contenu et la compétence technique. Le recours à l'aide des pairs et l'engagement apprenant-apprenant apparaissaient *moins* souvent dans les profils à faible distraction. Structurez l'environnement et l'emploi du temps avant de concevoir une nouvelle activité de groupe.

L'autorégulation n'est pas non plus un trait fixe. Sur un semestre complet avec 75 étudiants de première année, [[song-genai-learning-partner-srl-over-time-2026|Song et al. (2026)]] l'ont trouvée fonctionnant à la fois comme aptitude stable et comme état fluctuant. Les bases individuelles sont restées stables tandis que les connaissances métacognitives et le [[well-being|bien-être]] ont décliné de façon systémique au fil du trimestre, sous l'effet d'exigences curriculaires comme les grandes échéances d'évaluation. Regrouper les échéances peut être un choix administratif efficace, et c'est aussi une taxe mesurable sur l'autorégulation dont votre format dépend.

La fenêtre d'intervention est connaissable. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries et Koprinska (2025)]] ont montré qu'un apprentissage automatique interprétable appliqué aux journaux d'interaction avec le contenu prédit la progression au niveau du module et signale les abandons jusqu'à **7-8 jours avant les échéances de module** dans des cours de programmation en ligne à grande échelle. C'est un préavis suffisant pour envoyer une relance précise à un étudiant précis, ce qui vaut mieux que découvrir l'échec au moment de la notation. Pour les apprenants [[adult-learning|adultes]] et à distance, les lignes directrices de conception d'AI-ALOE ajoutent la contrainte qui compte le plus : accès mobile, capacité hors ligne et disponibilité asynchrone réelle, car ces apprenants étudient dans des fragments de temps entre d'autres obligations.

## Décidez ce qu'il faut automatiser dans la production

Deux usages ont des preuves raisonnables derrière eux, et les deux visent la charge de travail des enseignants.

**Le coût de production.** [[mooc-to-maic|MAIC]] reformule la diffusion du MOOC « une vidéo pour N étudiants » en « N agents pour un étudiant », en utilisant des agents spécialisés enseignant, assistant, camarade et analyste sur une fondation de modèle partagée. Ses auteurs rapportent une réduction de la production d'un cours d'environ **25.000 dollars et 60 heures** par MOOC à **moins de 2 dollars et 30 minutes**, piloté à Tsinghua sur deux cours avec **plus de 100.000 enregistrements d'apprentissage provenant de plus de 500 étudiants**, et publié en logiciel libre sous le nom OpenMAIC. Le média personnalisé est la même idée au niveau de l'actif : dans un grand cours en ligne, [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] ont constaté que les étudiants préféraient des vidéos personnalisées générées par IA à des vidéos non personnalisées enregistrées par un humain, l'effet de personnalisation l'emportant sur la valeur accordée à un présentateur humain.

**La navigation dans le forum.** L'étai de résumé décrit plus haut a réduit le coût de localisation des bonnes contributions sans ajouter à la charge de lecture de l'enseignant.

Trois tâches vous restent : décider si un texte est la pensée propre de l'étudiant, juger si une discussion a besoin d'une intervention, et calibrer la difficulté. Le matériel généré a aussi besoin d'une relecture pédagogique avant de porter des crédits. Une production bon marché est une question distincte d'une conception solide.

## Nommez le rôle de l'IA et vérifiez que l'étudiant en a encore un

« Les étudiants peuvent utiliser l'IA » est une spécification trop large pour concevoir contre elle. Nommer le rôle est ce qui rend une activité concevable, et les rôles ont des conséquences pour la présence : une étude sur l'IA générative en formation au marketing distingue **tuteur, coéquipier et outil**, montre que chacun influence différemment la présence enseignante, sociale et cognitive, et énumère les expositions éthiques familières que sont la confidentialité des données, le plagiat, la dépendance et l'équité de l'évaluation ([[genai-marketing-education-roles-2026|GenAI in Marketing Education]]). Le même modèle peut être un questionneur socratique avant un devoir, un critique après un premier brouillon, une partie prenante simulée pendant une analyse de cas, un opposant dont l'argument doit être réfuté, un tuteur donnant des indices pendant l'entraînement, ou un éditeur appelé une fois le raisonnement de fond constitué. Ce sont des activités différentes, et les confondre est la façon dont « l'IA est autorisée » en vient à signifier « rien n'a été conçu ».

Le [[scaffolding]] fournit le test. L'aide doit aider les apprenants à faire ce qu'ils ne peuvent pas encore faire seuls, et doit s'estomper à mesure que la compétence se développe. Un modèle qui continue de fournir des solutions complètes fait la tâche. Pour chaque activité assistée par IA, vous devriez pouvoir terminer cette phrase sans hésiter :

*Le travail de l'IA ici est _____, tandis que le travail de l'étudiant est ________.*

Si le second blanc contient peu de réflexion, l'activité doit être reconçue.

## Demandez-leur de juger une réponse qu'ils n'ont pas écrite

La [[ai-literacy|littératie en IA]] couvre l'évaluation critique, le jugement [[metacognition|métacognitif]] et le fait de savoir quand se passer de l'outil. La confiance auto-déclarée est un piètre indicateur de la compétence démontrée.

Un changement que tout cours asynchrone peut adopter immédiatement : **donnez parfois vous-même la production de l'IA aux étudiants.** Remettez deux réponses concurrentes et demandez laquelle est la plus solide et pourquoi. Demandez l'affirmation la plus faible, l'hypothèse manquante, la source invérifiable, l'explication plausible mais néanmoins fausse. Demandez quelle preuve les ferait changer d'avis.

Formulée ainsi, la capacité évaluée est de savoir si un étudiant peut reconnaître une réponse qui mérite confiance, ce qui est plus proche de ce que la discipline exige et bien plus difficile à déléguer. Les [[verify-ai-output|pratiques de vérification]] sont là où la technique se loge. Ce qui compte ici, c'est de placer l'évaluation à l'intérieur de la tâche notée au lieu de la laisser comme conseil dans une annonce de module.

## Ce que les concepteurs pédagogiques ratent dans les cours asynchrones

La copie rendue est le problème, donc c'est la copie rendue qu'il faut corriger. C'est aussi le seul canal dont vous disposez, et c'est pourquoi resserrer l'artefact seul change peu. Ajoutez un second canal : un relevé de processus, une explication enregistrée, une mesure sans aide.

La flexibilité signifie que l'étudiant maîtrise le rythme. Le format suppose l'autorégulation, et l'étude semestrielle auprès de 75 étudiants montre des connaissances métacognitives et un bien-être en déclin à mesure que les échéances se regroupent. Le rythme est une décision de conception que vous prenez pour eux.

Un forum, c'est de la participation, donc je compte les messages. La démonstration d'agent ci-dessus a produit un message qui exploitait les pairs et inventait une histoire de vie ; un comptage ne peut pas le distinguer d'un bon message. Les résumés de Hao et Cukurova ont amélioré la navigation et laissé l'activité de consultation décliner malgré tout.

Ajouter un assistant rend le cours intégré à l'IA. AIDA était conçu sur mesure, intégré et itéré sur six études ; un agent conversationnel externe dans le même établissement est allé dans l'autre sens, et les apprenants de KhanMigo ne se sont tout simplement pas engagés.

La preuve de processus signifie tout documenter. Collecter chaque prompt et chaque frappe produit de la paperasse et peu d'autre chose. La version qui vaut la peine d'être notée demande quelques points de décision : quelles preuves ont été retenues, quelle alternative rejetée, ce qui a changé après la critique.

## Ce qui va vous revenir dessus

**« Ce sont des adultes qui ont choisi un cours asynchrone. S'ils laissent l'IA l'écrire, c'est leur décision. »** L'argument du choix tiendrait si le cours ne certifiait rien. Il certifie. Les preuves ALEKS montrent un raccourci qui produit une apparence de compétence qui ne survit pas à une vérification surveillée, et le coût tombe plus tard, dans le cours suivant, l'examen d'agrément ou l'emploi. Il y a un enjeu d'équité : les apprenants les plus susceptibles de décharger sont souvent ceux qui ont le moins de temps, le groupe même que le cours asynchrone existe pour servir.

**« La détection est la réponse. »** La détection est contestée, et le résultat de la surveillance montre pourquoi la conception l'emporte sur la police : le préjudice a disparu quand les conditions ont changé. La détection porte aussi des coûts de faux positifs et transforme l'enseignement en course aux armements. Reconcevez la tâche et conservez une mesure non assistée. Voir [[reduce-ai-cheating]] et [[redesign-assessment-ai-era]].

**« La présence enseignante est impossible à distance, donc l'asynchrone est intrinsèquement inférieur. »** La présence dans un cours asynchrone se conçoit. La reconceptualisation du CoI exposée plus haut dit que ses indicateurs sont des accomplissements sociotechniques à l'ère de l'IA générative, et l'essai AIDA a doublé le temps passé sur la tâche dans un cours qui n'avait aucune réunion synchrone.

**« La surveillance des examens relève de la surveillance tout court et je ne l'imposerai pas. »** Position défendable, et elle laisse des options ouvertes. Les artefacts qui révèlent le processus, l'évaluation orale asynchrone et l'AI Viva saisissent le raisonnement sans surveiller la salle de quiconque. Si vous recourez malgré tout à une condition surveillée, inscrivez-la au plan de cours, expliquez le raisonnement et limitez-la aux évaluations qui certifient une compétence.

**« Alors rendez tout synchrone et surveillé. »** Beaucoup d'étudiants choisissent l'étude asynchrone pour des raisons d'emploi, de responsabilités de soin, de handicap ou de géographie. La détection porte elle aussi ses coûts d'équité : les outils qui signalent les scripteurs non natifs produisent de façon disproportionnée des faux positifs qui pénalisent un travail honnête ([[ai-detection]]). L'alternative proportionnée est un petit nombre de moments de vérification dans un cours par ailleurs flexible : une courte explication enregistrée, une application personnalisée, une réponse à une question choisie par l'enseignant, une trace de décision annotée, une vérification individuelle à faible enjeu. La vérification devrait élever la validité de vos preuves et conserver la flexibilité qui rendait le format digne d'être proposé.

## Ce que les preuves ne tranchent pas

La [[ai-distance-education-systematic-review-2026|revue systématique de l'IA dans l'enseignement à distance]] (56 articles, 2020-2025) couvre la personnalisation (24 études), l'évaluation et la rétroaction (19), l'interaction humain-IA (17) ainsi que la gouvernance et l'équité, et conclut que la base est à court terme et transversale, avec peu de travail longitudinal. La [[ai-student-engagement-online-learning-review-2025|revue de l'IA et de l'engagement étudiant dans l'apprentissage en ligne]] (24 études) se limite à une seule base de données, ne traite que l'engagement et confond les contextes synchrones et asynchrones, de sorte que ses conclusions ne sont pas spécifiques à l'asynchrone. L'évaluation orale asynchrone repose sur deux études dans deux cours. MAIC est un pilote. Les jeux de données sur le moment de la facilitation plafonnent la performance même avec des classifieurs entraînés. Aucune étude citée ici ne suit une cohorte asynchrone assez longtemps pour montrer si une évaluation reconçue produit un apprentissage durable ou seulement de meilleures preuves de cet apprentissage. Tout cela est assez solide pour changer votre prochain cours et trop mince pour justifier une position de politique.

## Quoi faire cette semaine

**1.** Choisissez votre évaluation la plus décisive et ajoutez-y une condition que l'étudiant réalise sans aide. Dites-lui pourquoi elle existe.

**2.** Prenez le devoir que l'IA termine désormais de bout en bout et réécrivez-le pour que le processus soit l'artefact : un journal de décisions, un brouillon par étapes, une auto-explication, une comparaison de deux tentatives.

**3.** Convertissez une évaluation majeure en défense orale asynchrone avec des grilles intégrées, et fixez l'autorisation d'IA tâche par tâche dans le plan de cours, là où les étudiants le liront vraiment.

**4.** Espacez les grandes échéances et bloquez une fenêtre de 7-8 jours avant l'échéance pour contacter les étudiants dont les données d'interaction se sont taries.

**5.** Passez trois questions sur votre devoir le plus faible. Un système d'IA pourrait-il réaliser cette activité sans que l'étudiant comprenne la matière ? Quelle activité cognitive est censée produire l'apprentissage ici ? Quelle preuve montrera que l'étudiant a réellement réalisé cette activité ? Si la première réponse est oui et que les deux autres sont difficiles à donner, le problème se situe dans la conception de l'apprentissage, et aucune formulation de la politique ne le corrigera.

**Où aller ensuite :** les règles au niveau du cours ont leur place dans [[course-ai-policy]] ; la refonte de l'évaluation est traitée dans [[redesign-assessment-ai-era]] ; le problème de dépendance qui la sous-tend dans [[reducing-over-reliance]] ; la charge de travail des enseignants et ce que l'IA en retire réellement dans [[ai-save-instructor-time]] ; et la vue au niveau de la conception de l'intégration de l'IA dans une expérience d'apprentissage dans [[designing-ai-into-learning]].
