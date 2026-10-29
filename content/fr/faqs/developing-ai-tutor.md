---
title: "Quelles sont les bonnes pratiques pour développer un tuteur d'IA efficace ?"
created: "2026-09-22T19:14:32-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
source_updated: "2026-10-28T11:21:07-04:00"
translation_of: faqs/developing-ai-tutor
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

Votre tuteur est à trois semaines d'un pilote. La discussion fonctionne, le modèle explique proprement une dérivée, et la démonstration interne a recueilli des applaudissements. Puis quelqu'un du centre d'enseignement pose la question pour laquelle votre spécification n'a aucun champ : après un semestre avec cet objet, les étudiants sauront-ils résoudre un problème quand il n'est pas dans la salle ? Ce que vous avez, c'est une liste de fonctionnalités. Ce que vous n'avez pas, c'est une phrase disant ce que l'apprenant doit savoir faire seul à la fin.

Un tuteur est une politique enveloppant un [[conversational-ai|agent conversationnel]], et c'est la politique qui décide si l'apprentissage a lieu. Nommez le travail cognitif que l'apprenant doit fournir, faites en sorte que le système l'exige (une tentative avant l'aide, une échelle d'indices qui s'estompe, une vérification que le modèle ne peut pas falsifier), et évaluez tuteur éteint. La qualité du modèle règle la qualité ressentie de la conversation. La politique décide de ce que l'étudiant saura faire en juin.

## La version courte

**1.** Écrivez l'objectif comme une affirmation sur la performance sans aide, puis dérivez chaque fonctionnalité de cette phrase. Si une fonctionnalité ne peut pas y être rattachée, c'est une fonctionnalité de démonstration.

**2.** Construisez le modèle de l'apprenant à partir de preuves que vous pouvez consigner, et stockez chaque diagnostic comme une hypothèse assortie d'une valeur de confiance, non comme un fait.

**3.** Figez l'échelle d'aide dans le code, avec des barreaux nommés, et faites payer à l'apprenant quelque chose pour chaque descente par l'interface.

**4.** Ancrez le contenu dans vos propres matériaux et confiez la vérification de l'arithmétique, de l'algèbre et du code à des outils déterministes qui ne peuvent pas halluciner.

**5.** Testez les défaillances pédagogiques sur des conversations entières : fuite de réponses, flagornerie, renforcement des conceptions erronées, dérive pédagogique.

**6.** Mesurez avec une phase de retrait et un test différé, pas avec un score de satisfaction.

## Écrivez l'objectif comme une affirmation sur la performance sans aide

Trois listes, écrites avant que quiconque choisisse un modèle :

- Ce que les apprenants devraient savoir ou savoir faire ensuite.
- Le travail cognitif qu'ils doivent fournir eux-mêmes.
- Ce que le tuteur peut faire à leur place.

La littérature sur l'[[intelligent-tutoring|tutorat intelligent]] établit que l'efficacité dépend de la conception [[pedagogy|pédagogique]] plutôt que de la seule capacité du modèle, et la défaillance se construit facilement par accident. Un tuteur optimisé pour « finir le problème » sapera un tuteur optimisé pour « apprendre à résoudre le problème » tout en passant tous les tests fonctionnels que vous écrirez, parce que les deux produisent des réponses finales correctes. La différence se situe dans ce que l'étudiant a fait entre la question et la réponse.

La deuxième liste est l'endroit où les équipes de développement deviennent concrètes. Prenez une étiquette de maîtrise comme « maîtrise de la dérivée » et refusez qu'elle signifie produire la dérivée correcte. Décomposez-la : reconnaître quand une dérivée est pertinente, l'interpréter comme un taux de variation instantané, choisir la règle, exécuter la procédure, expliquer pourquoi le choix était juste, vérifier le caractère raisonnable du résultat, et l'appliquer à un problème inconnu. Chacun de ces points est une chose distincte à consigner, et chacun implique une réponse différente quand il manque. Cette décomposition est aussi la défense contre le [[correct-answer-trap-misconceptions|piège de la bonne réponse]], où un apprenant atteint la bonne réponse par un raisonnement fautif et où votre analytique enregistre une réussite. [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] et [[zhang-tutormoments-2026|When Help is Unhelpful]] décrivent tous deux des versions de cette défaillance en production.

## Construisez le modèle de l'apprenant avant la conversation

Le modèle de l'apprenant contient deux types d'état : des estimations par concept (limites : en cours, règle de la puissance : maîtrisée, règle du produit : en cours, règle de la chaîne : non démontrée) et des hypothèses de conception erronée avec les preuves et le niveau de confiance de chacune. Gardez-les séparés. L'estimation par concept est ce qui pilote le choix de la difficulté. L'hypothèse est ce qui pilote la question suivante.

Soyez prudent quand vous laissez un [[llm|grand modèle de langue]] poser le diagnostic seul. Les travaux d'[[benchmark|évaluation comparative]] ont montré que des tuteurs fondés sur un LLM pouvaient reconnaître un raisonnement manifestement correct tout en rejetant parfois des solutions valables ou en acceptant un raisonnement incorrect. Un modèle qui repère le bon cas et se trompe sur le cas ambigu échoue précisément auprès des étudiants qui ont besoin d'aide. Pour les domaines à enjeux, l'architecture qui tient est **diagnostic structuré plus dialogue souple du LLM**, le dispositif que décrit [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]] : votre propre détecteur établit ce que l'étudiant a probablement fait, et le modèle écrit la conversation autour de ce constat.

Donnez au diagnostic une séquence explicite que le modèle ne peut pas sauter : détecter, vérifier, répondre. Le modèle peut proposer une [[misconceptions|conception erronée]] à titre d'hypothèse, puis doit la vérifier contre le travail réel de l'étudiant ou une question ciblée avant que le tuteur y réponde. Sans cette étape, le système invente des preuves et tuteurise ensuite l'étudiant sur une erreur qu'il n'a pas commise, ce qui est à la fois inutile et légèrement insultant.

Les preuves qui valent d'être consignées, dans un ordre approximatif d'utilité : les tentatives récentes avec leurs étapes intermédiaires, les connaissances démontrées par concept, le comportement de recherche d'aide (qui est en soi un signal de confiance) et la confiance auto-déclarée là où vous la recueillez. Adaptez la difficulté et l'assistance à partir de ce dossier, et traitez la dernière invite de l'apprenant comme une entrée parmi d'autres. Une invite isolée est un mauvais estimateur de ce qu'un étudiant sait, et un tuteur qui y réagit tressautera.

## Figez l'échelle d'aide, puis faites en payer le coût par l'interface

Écrivez les barreaux avant d'écrire une invite, car l'échelle est une décision produit avec des états nommés, et un réglage de ton ne peut pas l'exprimer. Une séquence viable :

1. Tentative autonome.
2. Question métacognitive sur ce que l'étudiant a déjà essayé.
3. Indice conceptuel.
4. Identification de la règle pertinente.
5. Mise en place d'une partie du problème.
6. Étape intermédiaire résolue.
7. Solution résolue.
8. L'étudiant explique la solution.
9. L'étudiant résout seul un problème comparable.

L'étayage s'estompe à mesure que la compétence augmente, et c'est le mécanisme au cœur de l'[[scaffolding|étayage]]. Voir une solution résolue ne démontre pas la maîtrise : toute séance qui atteint le septième barreau vous doit le neuvième avant de compter comme complète.

La preuve causale justifiant de construire l'échelle vient d'une expérience de terrain dans laquelle une interface GPT sans garde-fous augmentait la performance assistée en mathématiques et réduisait la performance ultérieure à l'examen sans aide. Un tuteur donnant des indices supprimait largement cette pénalité d'apprentissage ([[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]). La contrainte est architecturale. Le même modèle, doté d'un comportement d'aide différent, a produit des résultats opposés sur la mesure qui compte.

Une expérience de terrain randomisée de plus grande ampleur, menée auprès de plus de 6.000 collégiens sur une plateforme de pratique fondée sur la maîtrise, montre à quoi ressemble l'échelle dans les journaux. Les étudiants assignés au soutien par IA progressaient plus lentement et tentaient moins de questions, et ils répondaient plus justement. Le mécanisme le plus net était l'exactitude de la tentative suivante après une erreur : il fallait moins de tentatives pour revenir à une réponse correcte. Ce schéma est un ralentissement productif, et c'est la signature qu'une échelle d'indices est censée laisser ([[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]]).

La même étude fournit un avertissement sur vos propres tableaux de bord. Exiger trois bonnes réponses d'affilée augmentait fortement la maîtrise telle que définie par la plateforme sans produire de gains détectables au test différé une semaine plus tard. Les preuves les plus fortes au test différé n'apparaissaient que là où l'IA était intégrée au flux de travail de maîtrise (coefficient 0.085), non là où elle était disponible en accès autonome. Si votre indicateur de réussite est un compteur de séries, vous livrerez un système qui optimise la série.

La friction de l'interface relève de la même passe de conception. Des indices illimités derrière un bouton visible transforment toute l'échelle en raccourci, et les demandes d'indices prématurées avec une lecture superficielle sont associées à de moindres [[learning-gains|gains d'apprentissage]]. Remplacer `[Indice][Indice][Indice][Voir la réponse]` par les questions « qu'avez-vous essayé ? » et « quelle partie vous bloque ? » (choisir une règle, poser l'équation, faire l'algèbre, comprendre le concept) coûte un écran et oriente l'étudiant vers le barreau dont il a réellement besoin. Cela vous donne aussi les données de journal qui vous disent quel barreau il saute habituellement.

## Confiez les parties vérifiables à un vérificateur

Ancrez la génération dans un matériel approuvé par l'enseignant : sections de manuel, notes de cours, exemples résolus, terminologie, méthodes approuvées, notation, règles de devoir, politiques et ressources [[curriculum-design|curriculaires]]. La génération augmentée par recherche documentaire sur ce corpus réduit le [[hallucination-risk|risque d'hallucination]] sans l'éliminer, comme l'expose [[rag]]. Exposez les citations ou la provenance dans l'interface là où un étudiant pourrait vérifier une affirmation, car c'est la citation qui rend l'ancrage auditable après coup.

L'ancrage rend aussi un service que les indicateurs d'exactitude manquent. Un cours a des méthodes approuvées, et un tuteur qui introduit une technique mathématiquement valide que le cours n'utilise pas a enseigné à l'étudiant quelque chose pour lequel il sera pénalisé. La recherche documentaire dans la couche du cours est ce qui maintient le tuteur à l'intérieur de l'ensemble des méthodes.

Pour les domaines dont les réponses sont formellement vérifiables, ajoutez des outils déterministes : calculatrices, systèmes de calcul formel, exécution de code, graphes de connaissances, validateurs à base de règles et solveurs [[discipline-specific-aied|propres à la discipline]]. La division du travail est la partie importante. Le LLM assure l'explication et le dialogue. Le moteur symbolique vérifie l'équivalence algébrique, les dérivées, les intégrales, les solutions d'équations, les points critiques et les approximations numériques. Une étape intermédiaire fausse que le vérificateur attrape devient un moment de tutorat. Une étape intermédiaire fausse que rien n'attrape devient une conception erronée que l'étudiant emporte à l'examen.

## Exigez que l'apprenant agisse sur la rétroaction

Une rétroaction qui dit « Correct », « Incorrect » ou « Bon travail » est un événement de notation déguisé en interface d'enseignement. La base de connaissances traite la [[feedback|rétroaction]] comme une boucle de fourniture et d'appropriation : une rétroaction soutient l'apprentissage quand les étudiants la comprennent et agissent sur elle, et c'est la seconde moitié que les systèmes sautent habituellement. Construisez le tuteur pour nommer l'étape de raisonnement concernée, dire ce qui doit être reconsidéré, donner une action concrète à faire ensuite, et demander à l'apprenant de prédire ou d'expliquer avant que la rétroaction soit révélée.

La séquence qui porte cela est : l'apprenant d'abord, l'IA ensuite, l'apprenant de nouveau. L'étudiant produit, choisit, justifie, évalue ou réfléchit ; le tuteur répond ; l'étudiant fait quelque chose de la réponse. Concevez la structure des tours de sorte que ce ne soit pas facultatif. Un système où le modèle peut produire trois paragraphes en réponse à une question apprend à l'étudiant à demander et à lire.

L'objectif à long terme est l'intériorisation. Les apprenants devraient finir par mener eux-mêmes le questionnement et les stratégies de [[problem-solving|résolution de problèmes]] du tuteur, ce qui est l'argument de l'[[agency|autonomie]] et la raison pour laquelle l'échelle a un dernier barreau où le tuteur se taît.

## Concevez pour ce qui se passe au quarantième tour

La sécurité pédagogique est une suite de tests distincte de la sécurité ordinaire d'un agent conversationnel, et la plupart des équipes livrent avec la seconde seulement. La toxicité et la résistance au détournement de consignes ne vous disent rien de la question de savoir si le tuteur donnera la réponse à un étudiant qui la demande deux fois, s'il approuvera une méthode fausse parce que l'étudiant semblait sûr de lui, s'il dérivera hors de l'ensemble des méthodes du cours au fil d'une longue séance, ou s'il poussera un apprenant vers la [[cognitive-offloading|décharge cognitive]]. La [[ai-sycophancy|flagornerie]] est celle qui passe en premier, parce que l'accord se lit comme de la bienveillance et que vos données de préférence la récompensent.

Testez la fuite de réponses, le renforcement des conceptions erronées, l'accord excessif, une difficulté inappropriée, la décharge cognitive, les traitements biaisés, la perte d'autonomie de l'apprenant, la dérive pédagogique et l'excès de confiance dans des explications incorrectes. Lancez les tests sur des conversations longues, et non sur des tours isolés, car les défaillances pédagogiques s'accumulent : les dix premiers tours peuvent être exemplaires et le onzième défaire la séance. Un tuteur doit être bienveillant et exact en même temps, y compris quand l'apprenant insiste sur une conception erronée. [[pedagogical-safety]] et [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]] exposent la taxonomie des défaillances.

## Placez l'architecture des données dans le même document de conception

Ne collectez que les données d'apprenants pédagogiquement nécessaires, et soyez capable de dire pourquoi chaque champ existe. Là où vous conservez une mémoire persistante ou un [[student-modeling|modèle de l'apprenant]], rendez sa finalité visible pour l'apprenant, donnez-lui un contrôle approprié, protégez les informations sensibles, définissez la conservation et orientez les décisions à conséquence vers un enseignant ou un autre point de contrôle [[human-in-the-loop-ai|humain]]. Un modèle de l'apprenant qui accumule discrètement une estimation de confiance qu'un étudiant ne voit jamais est un problème de protection des données et un problème pédagogique.

Auditez le comportement selon les origines linguistiques, les niveaux de capacité, les contextes culturels, les besoins d'[[accessibility|accessibilité]] et les niveaux de [[prior-knowledge|connaissances préalables]] et d'expérience de l'IA. Une performance différentielle sur un même objectif est un bogue auquel un étudiant est attaché, et il n'apparaîtra pas dans votre chiffre d'exactitude agrégé.

Une décision d'accessibilité mérite sa propre ligne : ne faites pas d'une [[prompt-engineering|ingénierie des invites]] sophistiquée un prérequis à un bon enseignement. Si le tuteur n'enseigne bien que lorsqu'un étudiant écrit une invite soignée, vous avez construit un système qui avantage les étudiants qui savent déjà parler aux modèles. Le tuteur devrait aider les apprenants à formuler des questions productives, ce qui est aussi une compétence de [[metacognition|métacognition]] qui vaut la peine d'être acquise.

## Instrumentez l'intervalle de retrait

Les indicateurs de séance ne vous diront pas si le dispositif fonctionne. L'exactitude des réponses, la longueur des conversations, la préférence des étudiants, la satisfaction, l'achèvement des tâches et l'[[student-engagement|engagement]] augmentent tous pour des systèmes qui n'enseignent rien, parce que les étudiants aiment l'aide et que l'aide est facile à mesurer. Évaluez la performance sans aide, la rétention différée, le transfert à de nouveaux problèmes, la correction des conceptions erronées, l'indépendance de l'apprenant, l'appropriation de la rétroaction et les [[differential-effects-across-learner-groups|effets différenciés selon les groupes d'apprenants]]. [[ai-ed-evaluation]] contient les méthodes, et [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]] soutient que le comportement est le construit à mesurer.

Deux études affinent la règle contre l'[[self-report-measures|auto-déclaration]] et les horizons courts. Un pilote mené avec 38 étudiants débutants en programmation a trouvé une forte association entre l'usage de l'[[generative-ai|IA générative]] et l'apprentissage *perçu* (rs=0.802, p<0.001), tandis que les indicateurs de progression autonome sans soutien de l'enseignant obtenaient les scores les plus bas. Les auteurs nomment cet écart illusion de compétence et dette épistémique, et c'est précisément l'écart qu'un indicateur de satisfaction récompense ([[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]]).

Plus fondamentalement, la plupart des évaluations s'arrêtent au moment où l'assistance cesse. [[cognitive-washout-ai-skill-decay-2026|Cognitive washout dynamics]] nomme l'intervalle post-retrait non mesuré et formalise quatre issues : rebond élastique, plateau partiel, étayage latent et sur-récupération. Sa courbe de lessivage porte une constante de temps de récupération, un terme de complétude de la récupération et un indice d'hystérésis comparant l'effort de réapprentissage à l'effort initial. La réversibilité déterminant la gravité, le cadre soutient que la pratique sans aide programmée devrait être dosée selon la courbe de récupération plutôt que débattue par principe. Votre plan d'évaluation a besoin d'une phase de retrait autant que d'un post-test immédiat, et [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|les preuves randomisées selon lesquelles une brève assistance déprime la performance ultérieure sans aide]] sont la raison de la programmer tôt.

## Donnez aux enseignants quelque chose à retoucher

Avant le déploiement, faites tester par des éducateurs des profils d'apprenants réalistes, des conceptions erronées courantes, des cas limites, des invites adverses, des réponses ambiguës et de longues conversations de tutorat. Consignez les défaillances pédagogiques et réinjectez-les dans les invites système, les politiques de tutorat, les sources de connaissances, les [[guardrails|garde-fous]], les règles du modèle de l'apprenant et le choix du modèle. Une réponse fluide peut rester pédagogiquement fausse, et un enseignant est le seul relecteur capable de le voir.

[[teacher-intervention-k12-ai-based-instruction-2026|La revue systématique de Lee portant sur 29 études en K-12]] décrit en quoi consiste cette supervision et où elle se défait. L'intervention de l'[[teacher-role|enseignant]] est un cycle répétitif en quatre phases : surveillance, jugement, intervention et orchestration. Les alertes de l'IA, les [[visualization|tableaux de bord]] et les scores automatisés « ne mènent pas automatiquement à une action pédagogique ». La stratégie enseignante la plus solide que trouve la revue est la traduction pédagogique : sélectionner, réviser, compléter, résumer ou supprimer la rétroaction de l'agent conversationnel plutôt que de la transmettre telle quelle.

Deux avertissements de conception en découlent, et tous deux contredisent la feuille de route habituelle. Plus d'informations fournies par l'IA n'est pas mieux : les systèmes qui émettent continuellement des diagnostics surchargeaient les enseignants et détournaient leur attention de leur propre observation. Priorisez ce qui vaut la peine d'être traité, rendez-le interprétable, et proposez des recommandations sous une forme que l'enseignant peut accepter, modifier, différer ou rejeter. Plus de soutien à l'enseignant n'est pas mieux non plus : retarder l'intervention pour laisser les étudiants travailler seuls est en soi une expertise. Les conditions structurelles, c'est-à-dire le temps de consulter les données, la taille de classe et la capacité d'atteindre physiquement les groupes qui ont besoin d'aide, font partie de l'intervention plutôt que de la logistique de fond. Un tableau de bord conçu pour un enseignant sans heure libre ne s'ouvre pas.

## Cas un : un tuteur de calcul différentiel, où la vérification coûte peu

Un tuteur de calcul différentiel de première année d'université devrait élever ce que les étudiants savent résoudre et expliquer seuls une fois qu'il est retiré, et non maximiser les problèmes correctement terminés. Le tutorat en mathématiques est particulièrement vulnérable au sur-étayage, à l'usage prématuré des indices et au diagnostic erroné du raisonnement de l'étudiant, et les trois sont visibles dans vos journaux si vous regardez ([[math-education]]).

**Ancrage et vérification.** Une construction en six couches : matériaux du cours et politiques de l'enseignant, puis une couche de recherche documentaire, puis un moteur de problèmes et un modèle de l'apprenant aux côtés d'un vérificateur symbolique et d'un moteur de diagnostic, puis une couche de politique pédagogique, puis la génération conversationnelle, puis l'étudiant, puis retour au modèle de l'apprenant. Le vérificateur est la raison pour laquelle cette conception est traitable. Il décide si une expression est équivalente, si une dérivée est correcte, si une intégrale est évaluée, si un point critique est trouvé, et il le fait sans demander l'avis du modèle.

**Une interaction.** Pour dériver $f(x)=(x^2+1)\sin x$, un agent conversationnel classique révèle la réponse. Un tuteur orienté apprentissage raisonne en interne que l'étudiant a dérivé les deux composantes mais multiplié les résultats, une [[misconceptions|conception erronée]] possible de type règle du produit prise pour $f'g'$, et pose d'abord une question diagnostique : quelle règle s'applique quand deux fonctions sont multipliées ? Puis l'étudiant écrit la règle du produit symboliquement, pose $u$ et $v$, et seulement ensuite le tuteur vérifie l'expression finale. Notez la part du tutorat qui s'est jouée avant que la moindre prose du modèle atteigne l'étudiant.

**Représentations multiples.** Reliez les procédures symboliques à la formule, au graphique, au tableau, à une interprétation verbale et à un contexte physique de taux de variation. L'aisance procédurale et la compréhension conceptuelle se ressemblent sur une copie correcte et divergent sur le problème de transfert.

**Le tableau de bord.** Exposez des preuves agrégées plutôt que des jugements opaques : « règle du produit, 62% de maîtrise démontrée ; schémas courants, 18% omettent un terme, 11% multiplient les dérivées ». Les diagnostics individuels sortent sous forme d'hypothèses avec les preuves qui les soutiennent, ce qui est aussi ce qui les rend relisibles par un enseignant (l'[[explainable-ai|explicabilité]] compte davantage pour l'enseignant que pour l'étudiant ici).

**Le plan d'évaluation.** Performance avec le tuteur, performance sur des problèmes comparables sans lui, rétention différée, transfert à des problèmes inconnus, qualité de l'explication conceptuelle, correction des conceptions erronées, [[help-seeking|recherche d'aide]] appropriée par opposition à prématurée, fuite de réponses, taux de faux positifs et de faux négatifs du diagnostic, et résultats différenciés. La comparaison qui décide du projet est celle entre performance assistée et performance ultérieure sans aide. Un étudiant qui passe de 60% à 95% avec le tuteur et reste à 60% seul n'a pas été tuteurisé.

## Cas deux : un coach de rédaction, où l'étape décide de la permission

L'écriture n'a pas de réponse unique correcte, si bien que la vérification relève du jugement et que le travail de conception se déplace vers la mise en étapes. La base de connaissances pense l'écriture comme un processus cognitif, social et rhétorique, ce qui signifie qu'un système d'écriture par IA peut soutenir l'apprentissage et peut aussi éliminer exactement la réflexion que le devoir existait pour développer ([[writing-education]], [[coach-not-crutch-ai-writing]]).

**Un modèle de capacités.** Suivez l'argumentation (précision de la thèse, alignement affirmation-preuves, contre-argument), l'organisation (focalisation des paragraphes, progression logique, transitions), les preuves (pertinence des sources, intégration, interprétation), la révision (révision globale et au niveau de la phrase, évaluation de la rétroaction) et le style (clarté, grammaire, voix). Chacun devient un signal distinct dans le modèle de l'apprenant, ce qui est la condition même d'une rétroaction ciblée.

**Ancrez le coach dans le devoir.** Recherchez les consignes, la grille de l'enseignant, les lectures du cours, les exigences de citation, les conventions de genre, les exemples de l'enseignant et la politique d'usage de l'IA, afin que la rétroaction puisse dire « la grille de votre enseignant vous demande de relier chaque affirmation majeure à des preuves tirées d'au moins deux lectures du cours » au lieu d'inventer des attentes génériques. Le conseil générique est la défaillance par défaut d'un outil d'écriture non ancré, et les étudiants le repèrent en deux séances.

**Fixez les permissions par étape.** L'implication de l'IA à différentes étapes affecte différemment le sentiment de propriété. Le soutien à la planification réduit moins la propriété que le soutien à la rédaction, et la rédaction générée par l'IA produit la baisse la plus forte ([[ai-writing-support-stage-ownership-2026|From Planning to Revision]]). Ce résultat se traduit directement en un tableau de permissions. À la planification, le coach pose des questions, compare des positions, conteste des présupposés et critique des plans, et ne génère pas l'argument. À la rédaction, l'apprenant produit d'abord la prose et le coach développe plutôt qu'il ne prend la main. À la révision, le coach diagnostique et s'arrête là : affirmations floues, preuves manquantes, preuves qui ne soutiennent pas l'affirmation, problèmes d'organisation, brouillon confronté à la grille. À la correction, après la révision, il traite la grammaire, la ponctuation, la concision et la mise en forme des citations.

**Une interaction travaillée.** Pour une dissertation sur l'obligation de suivre des [[online-teaching-and-learning|cours en ligne]], un système générique réécrit le paragraphe de l'étudiant en prose polie et fait le travail intellectuel. Un coach dit ce qui fonctionne, nomme le problème principal (le paragraphe donne des raisons mais n'explique jamais pourquoi elles justifient une obligation à l'échelle de l'université), pose une question de révision et demande à l'étudiant de terminer une phrase dans ses propres mots. L'argument reste là où il doit être.

**Une rétroaction priorisée.** Une force à préserver, un problème à fort impact, une question qui exige le jugement de l'auteur, un objectif de révision concret. Pas quarante commentaires. Un étudiant qui reçoit quarante commentaires les trie par longueur, et ce tri n'a rien à voir avec ce qui compte.

**Faites juger la rétroaction par l'étudiant.** La [[feedback-literacy|littératie de la rétroaction]] est un objectif d'apprentissage à part entière. Demandez périodiquement à l'apprenant s'il est d'accord avec une suggestion et pourquoi, et laissez-le la rejeter. La sortie est un [[evaluative-judgment|jugement évaluatif]] plutôt qu'une conformité, et c'est aussi la seule défense contre un coach qui se trompe avec assurance.

**Préservez la voix.** Distinguez les erreurs, les problèmes de clarté, les choix rhétoriques et les préférences de style, et laissez les deux derniers tranquilles. Un coach qui « corrige » les choix rhétoriques homogénéise l'écriture vers le style que le modèle préfère, et il fait le plus de dégâts chez les scripteurs [[multilingual-learning|plurilingues]] et les traditions rhétoriques non standard (la [[ai-feedback-quality|qualité de la rétroaction par IA]] est la version générale de ce problème).

**Apprenez des révisions.** Conservez l'historique des révisions et non seulement les dissertations finales. Un schéma répété « preuve introduite mais non interprétée » qui s'améliore sur trois dissertations est le signal le plus utile qu'un système d'écriture puisse avoir, et il est gratuit.

**Évaluation.** Qualité de l'écriture assistée puis de l'écriture ultérieure sans aide, capacité à repérer les faiblesses d'un texte inconnu, qualité des révisions, appropriation de la rétroaction, capacité à expliquer ses révisions, propriété du texte, dépendance à la prose de l'IA, préservation de la voix, biais selon les dialectes et chez les scripteurs plurilingues, alignement avec le jugement de l'enseignant et transfert différé. La conception qui répond à cette question a trois bras : écrire seul, faire générer le texte par l'IA, et un coach. Les trois groupes écrivent ensuite une nouvelle dissertation sans IA. Si le groupe IA générative gagne en situation assistée et perd sans elle, le système a amélioré la performance plutôt que l'apprentissage. Les schémas à l'échelle de la classe que montre le tableau de bord (41% ont besoin d'aide sur le lien affirmation-preuves) sont un signal d'[[formative-assessment|évaluation formative]] pour l'enseignant.

## Comparer les deux constructions

| Question de conception | Tuteur de calcul différentiel | Coach de rédaction |
|---|---|---|
| Objet d'apprentissage principal | Concepts mathématiques et résolution de problèmes | Argumentation et processus d'écriture |
| Vérification | Souvent vérifiable objectivement | Exige habituellement un jugement contextuel |
| Outils déterministes | Moteur de calcul symbolique, calculatrice | Contrôles de grammaire, de citation, de grille |
| Rôle principal de l'IA | Diagnostiquer et étayer le raisonnement | Diagnostiquer et étayer la révision |
| Risque majeur | Donner la solution | Écrire le texte à la place de l'apprenant |
| Action de l'apprenant qui compte | Résoudre et expliquer | Rédiger, évaluer et réviser |
| Modèle de l'apprenant | Concepts, procédures, conceptions erronées | Argumentation, preuves, organisation, révision |
| Garde-fou clé | Tentative avant la solution | Prose de l'étudiant avant la réécriture par l'IA |
| Test de transfert | Nouveaux problèmes de calcul sans IA | Nouvelle tâche d'écriture sans IA |
| Critère de réussite | Raisonnement mathématique autonome | Écriture autonome et jugement évaluatif |

Les deux systèmes utilisent le même ensemble de [[ai-technologies|technologies d'IA]] et incarnent des politiques pédagogiques différentes, parce que les disciplines exigent des formes de pensée différentes. La règle qui se généralise est d'identifier l'activité cognitive qui produit l'apprentissage et de concevoir l'IA pour soutenir cette activité sans l'accomplir. Cette règle primant sur tout modèle, toute invite, tout cadre d'agents ou toute interface particulière.

## Ce que les équipes de développement comprennent mal

La pédagogie vit dans l'invite système, donc une invite soignée est une conception pédagogique. Une invite est une couche d'une politique qui comprend aussi les preuves que vous collectez, le barreau que l'interface propose, ce que le vérificateur contrôle et ce que le tableau de bord affiche. Une invite bien écrite posée sur un modèle de l'apprenant qui ne stocke rien produira un tuteur fluide sans mémoire de l'étudiant, et l'échelle repartira à chaque séance.

Un meilleur modèle corrigera le diagnostic. Le résultat d'évaluation comparative cité plus haut a trouvé des tuteurs LLM reconnaissant un raisonnement correct tout en rejetant des solutions valables et en acceptant des raisonnements incorrects, ce qui est un schéma d'erreur que l'échelle ne répare pas visiblement. Le diagnostic structuré existe parce que le jugement du modèle est la partie que vous ne pouvez pas auditer.

La satisfaction et l'achèvement prouvent que la conception fonctionne. Ils prouvent que les étudiants ont reçu de l'aide. Le pilote mené avec 38 étudiants en programmation a trouvé un apprentissage perçu fortement associé à l'usage tandis que la progression autonome obtenait les scores les plus bas, et l'étude sur la maîtrise a trouvé qu'une exigence de série augmentait la maîtrise de plateforme sans gain au test différé. Intégrez la mesure de retrait au pilote, sinon vous apprendrez la mauvaise leçon avec efficacité.

La recherche documentaire rend les réponses fiables. Elle réduit le [[hallucination-risk|risque d'hallucination]] et laisse intacte le reste de la surface de défaillance : un passage retrouvé peut être mal lu, une technique valide peut être fausse pour ce cours, et le modèle peut encore se tromper avec assurance sur une étape qu'il a lui-même dérivée. La recherche documentaire est un plancher.

Réussir la suite de sécurité signifie que le dispositif est sûr pour les étudiants. Les tests de sécurité ordinaires couvrent la toxicité et les détournements de consignes. Les défaillances pédagogiques qui comptent ici, la fuite de réponses, la flagornerie et la dérive, lui sont invisibles, et elles s'accumulent sur une conversation au lieu d'apparaître en un seul tour.

L'engagement est l'objectif. La longueur des conversations et le nombre de séances sont les indicateurs les plus faciles à instrumenter, ce qui explique qu'on les promeuve au rang d'objectifs. L'argument de l'[[scaffolding|étayage]] dit que la séance idéale raccourcit à mesure que l'étudiant progresse : une hausse de l'engagement est donc tout aussi susceptible d'être un symptôme.

## Ce qui va vous retomber dessus

**« Nous livrons dans six semaines et c'est un trimestre de travail. »** L'essentiel de l'architecture coûte peu. Une porte de tentative, une échelle configurée, une recherche documentaire sur des notes que vous avez déjà et un schéma de journal avec un champ de retrait, c'est quelques jours de travail. Les postes coûteux (modèle de l'apprenant, vérificateur, tableau de bord) peuvent démarrer derrière un drapeau de fonctionnalité pour un seul cours, et le pilote est plus informatif avec les parties peu coûteuses faites.

**« Les étudiants adorent et l'achèvement est en hausse. »** Ces deux faits sont compatibles avec un système qui répond bien aux questions et n'enseigne rien. L'étude à 6.000 étudiants a trouvé une progression plus lente et moins de questions tentées en même temps qu'une meilleure exactitude : une baisse de l'achèvement n'est donc pas automatiquement une mauvaise nouvelle non plus. Publiez la performance sans aide à côté des chiffres d'engagement et laissez les deux se contredire en public.

**« Nous ne pouvons pas mener un essai randomisé. »** Vous pouvez mener une comparaison intra-étudiant sans essai : le même objectif, assisté pendant l'unité, testé sans aide deux semaines plus tard, avec le score assisté publié à côté. Cette conception répond à la question produit et ne demande aucun bras témoin. Ce qu'elle ne peut pas vous dire, c'est le contrefactuel pour les étudiants qui n'ont jamais utilisé le tuteur.

**« Le modèle est une API d'éditeur, le comportement d'aide ne dépend donc pas de nous. »** Les barreaux vivent dans votre couche d'orchestration, et le résultat de l'expérience sur les garde-fous venait d'un changement de ce que le tuteur avait le droit de dire, non d'un changement de modèle. Attendez-vous à ce que le post-entraînement de l'éditeur tire vers une réponse empressée, car c'est la serviabilité qui a été optimisée, et placez la retenue dans votre propre code.

**« Les enseignants n'utiliseront pas un tableau de bord de plus. »** Ils n'utiliseront pas celui qui émet des diagnostics en continu, dont la revue K-12 a montré qu'il détournait l'attention de leur propre observation. Donnez-leur un petit nombre de signaux interprétables, un moyen d'accepter ou de rejeter chaque recommandation, et du temps dans la semaine pour les regarder.

**« Nous n'avons pas d'experts disciplinaires dans l'équipe. »** Alors le tuteur enseignera une méthode générique et la notation du cours dérivera en un semestre. Un expert de la matière pendant deux jours au moment de la conception, pour écrire la liste des conceptions erronées et celle des méthodes approuvées, est le poste le moins coûteux du projet et celui que les équipes coupent en premier.

## À faire cette semaine

**1.** Écrivez la phrase sur la performance sans aide pour le pilote et mettez-la dans la spécification, au-dessus de la liste des fonctionnalités.

**2.** Ajoutez une porte de tentative et consignez-la. Enregistrez si l'étudiant a tenté avant le premier indice, et quel barreau il a atteint.

**3.** Remplacez le bouton d'indice par la question sur le point de blocage, et consignez la réponse comme une catégorie.

**4.** Planifiez une vérification sans aide deux semaines après l'unité et inscrivez-la au calendrier avec un responsable.

**5.** Réservez deux jours avec un enseignant de la discipline pour écrire la liste des conceptions erronées et celle des méthodes approuvées.

## Où aller ensuite

[[designing-educational-ai-software]] couvre les règles au niveau logiciel qu'un tuteur doit satisfaire, et [[designing-ai-into-learning]] traite de la place du tuteur dans une séquence de cours. [[evaluating-ai-interventions-methods]] et [[checking-whether-educational-ai-works]] traitent de la question de savoir si le dispositif fonctionne. Si votre problème est que le modèle répond trop volontiers, [[making-ai-better-at-supporting-learning]] et [[training-ai-tutors-to-guide-rather-than-answer]] travaillent le versant entraînement de la même question.
