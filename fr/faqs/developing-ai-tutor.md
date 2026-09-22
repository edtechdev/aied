---
title: "Quelles sont les bonnes pratiques pour développer un tuteur d'IA efficace ?"
created: "2026-09-22T19:14:32-04:00"
updated: "2026-09-22T19:14:32-04:00"
weight: 74
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
translation_of: faqs/developing-ai-tutor
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Quelles sont les bonnes pratiques pour développer un tuteur d'IA efficace ?

Un tuteur d'IA efficace doit être conçu comme **un système d'apprentissage, et non comme un [[conversational-ai|agent conversationnel]] générateur de réponses**. Le thème le plus fort de l'ensemble de la base de connaissances est que la structure [[pedagogy|pédagogique]] (diagnostic, étayage, rétroaction, autonomie de l'apprenant et évaluation) compte au moins autant que le modèle sous-jacent. Les deux exemples détaillés ci-dessous (un tuteur de calcul différentiel et un coach de rédaction) montrent comment une même architecture de base doit être façonnée par ce que la discipline exige de l'apprenant.

## 1. Partir d'objectifs d'apprentissage explicites et définir la tâche de l'apprenant

Avant de choisir un modèle, précisez :

- Ce que les apprenants devraient savoir ou être capables de faire ensuite.
- Le travail cognitif qu'ils doivent accomplir eux-mêmes.
- Ce avec quoi le tuteur peut apporter son aide.

Un tuteur optimisé pour « terminer le problème » peut facilement saper un tuteur optimisé pour « apprendre à résoudre le problème ». Le concept d'[[intelligent-tutoring]] souligne que l'efficacité dépend de la conception pédagogique et non de la seule capacité du modèle.

## 2. Diagnostiquer avant de prescrire

Maintenez un modèle de l'apprenant fondé sur des indices tels que les connaissances démontrées, les [[misconceptions]], les tentatives récentes, le comportement de recherche d'aide et, le cas échéant, la confiance. Adaptez la difficulté et l'aide à partir de ces indices plutôt que de réagir simplement à la dernière invite de l'apprenant. Restez prudent quant au fait de laisser un [[llm]] poser un diagnostic seul : l'[[benchmark|évaluation comparative]] a montré que les tuteurs fondés sur un LLM pouvaient reconnaître un raisonnement manifestement correct tout en rejetant parfois des solutions valides ou en acceptant un raisonnement incorrect. Pour les domaines à enjeux, une architecture utile est **diagnostic structuré + dialogue LLM souple**. Voir [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]].

## 3. Utiliser une échelle d'indices plutôt que de donner immédiatement la solution

Une séquence de tutorat utile est la suivante : demander une tentative, sonder le raisonnement de l'apprenant, donner un petit indice, donner un indice conceptuel plus fort, montrer une étape partielle, fournir une solution détaillée seulement lorsque c'est justifié, puis demander à l'apprenant d'expliquer ou d'appliquer l'idée de façon autonome. L'aide doit **s'estomper à mesure que la compétence progresse**. C'est central dans le concept d'[[scaffolding]]. Une expérience de terrain importante a montré qu'une interface GPT sans garde-fous augmentait la performance en mathématiques assistée mais réduisait la performance ultérieure à l'examen sans aide, tandis qu'un tuteur donnant des indices supprimait largement cette pénalité d'apprentissage : voir [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]].

Une expérience de terrain randomisée plus vaste, menée auprès de plus de 6,000 élèves du collège sur une plateforme d'entraînement fondée sur la maîtrise, a retrouvé la même signature avec plus de détail : les élèves affectés au soutien par IA progressaient plus lentement et tentaient moins de questions, mais répondaient plus justement et, mécanisme le plus clair, amélioraient leur correction à la tentative suivante après une erreur, en ayant besoin de moins de tentatives pour revenir à une bonne réponse. Il s'agit d'un **ralentissement productif**, et non d'une captation de réponses, et c'est le comportement qu'une échelle d'indices est censée produire. La même étude apporte une mise en garde sur les indicateurs indirects : exiger trois bonnes réponses consécutives faisait fortement grimper la maîtrise telle que définie par la plateforme sans produire de gains détectables à un test différé une semaine plus tard, et les preuves les plus solides sur ce test différé n'apparaissaient que là où l'IA se trouvait à l'intérieur du flux de travail de maîtrise (coefficient 0.085) plutôt que comme un accès autonome. Voir [[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]].

## 4. Rendre la rétroaction précise, immédiate, exploitable et liée au raisonnement

Évitez les rétroactions qui se contentent de dire « Correct », « Incorrect » ou « Bon travail ». Le tuteur devrait plutôt identifier l'étape de raisonnement concernée, expliquer ce qui doit être reconsidéré, donner à l'apprenant quelque chose de concret à faire ensuite et, lorsque c'est pertinent, demander à l'apprenant de prédire ou d'expliquer avant de révéler la rétroaction. La base de connaissances traite la [[feedback]] comme une **boucle complète de fourniture et d'appropriation** : une rétroaction ne soutient l'apprentissage que lorsque les étudiants la comprennent et agissent sur elle.

## 5. Ancrer le contenu factuel au lieu de faire confiance à la mémoire du LLM

Utilisez la génération augmentée par recherche documentaire à partir de sources fiables telles que des manuels approuvés par l'enseignement, des notes de cours, des exemples résolus, des politiques et des ressources de [[curriculum-design|programme]], et exposez des citations ou la provenance lorsque c'est utile. Pour les domaines dont les réponses sont formellement vérifiables, ajoutez des outils déterministes : calculatrices, systèmes de calcul formel, exécution de code, graphes de connaissances, validateurs à base de règles et solveurs [[discipline-specific-aied|propres à la discipline]]. La RAG peut réduire le [[hallucination-risk|risque d'hallucination]], sans toutefois l'éliminer : voir [[rag|Retrieval-Augmented Generation]].

## 6. Concevoir pour la métacognition et l'autonomie de l'apprenant

Demandez régulièrement à l'apprenant de produire, choisir, justifier, évaluer ou réfléchir. Un principe de conception utile est **l'apprenant d'abord → l'IA ensuite → l'apprenant de nouveau**. L'objectif à long terme est que les apprenants intériorisent le questionnement et les stratégies de [[problem-solving|résolution de problèmes]] du tuteur au lieu de devenir dépendants de lui. Voir [[agency|autonomie de l'apprenant]] et [[scaffolding]].

## 7. Traiter la sécurité pédagogique comme distincte de la sécurité ordinaire d'un agent conversationnel

Les tests de sécurité d'un tuteur éducatif devraient inclure davantage que la toxicité et la résistance au détournement de consignes. Testez la fuite de réponses, le renforcement des conceptions erronées, l'accord excessif ou la [[ai-sycophancy|flagornerie]], une difficulté inappropriée, la [[cognitive-offloading|décharge cognitive]], les traitements biaisés, la perte d'autonomie de l'apprenant, la dérive pédagogique et l'excès de confiance dans des explications incorrectes. Un tuteur doit être **bienveillant mais exact**, y compris lorsque l'apprenant persiste dans une conception erronée, et les tests devraient inclure des conversations longues, car les défaillances pédagogiques peuvent s'accumuler sur plusieurs interactions. Voir [[pedagogical-safety]] et [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]].

## 8. Intégrer la vie privée, l'accessibilité et l'équité dans l'architecture

Ne collectez que les données d'apprenants pédagogiquement nécessaires. Lorsqu'une mémoire persistante ou une [[student-modeling|modélisation de l'apprenant]] est utilisée, rendez sa finalité transparente, donnez aux apprenants un contrôle approprié, protégez les informations sensibles, définissez des politiques de conservation et prévoyez une supervision par l'enseignant ou une [[human-in-the-loop-ai|intervention humaine]] pour les situations à enjeux. Auditez le comportement du tuteur selon les origines linguistiques, les niveaux de capacité, les contextes culturels, les besoins d'[[accessibility]] et les différents niveaux de [[prior-knowledge|connaissances préalables]] et d'expérience de l'IA. Ne faites pas d'un [[prompt-engineering|prompting]] sophistiqué un prérequis à un bon enseignement : le tuteur lui-même devrait aider les apprenants à formuler des questions productives.

## 9. Mesurer l'apprentissage, pas seulement la qualité de l'agent conversationnel

Des indicateurs comme l'exactitude des réponses, la longueur des conversations, la préférence des étudiants, la satisfaction, l'achèvement des tâches et l'[[student-engagement|engagement]] ne suffisent pas à eux seuls. Évaluez plutôt la performance sans aide, la rétention différée, le transfert à de nouveaux problèmes, la correction des conceptions erronées, l'indépendance de l'apprenant, l'appropriation de la rétroaction et les [[differential-effects-across-learner-groups|effets différenciés selon les groupes d'apprenants]]. La question critique est de savoir si les apprenants peuvent réussir une fois le tuteur retiré. Voir [[ai-ed-evaluation]] et [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]].

Deux études récentes durcissent cette règle face aux [[self-report-measures|mesures auto-déclarées]] et aux horizons courts. Une étude pilote menée auprès de 38 étudiants débutants en programmation a trouvé une forte association entre l'usage de l'[[generative-ai|IA générative]] et l'apprentissage *perçu* (rs=0.802, p<0.001), tandis que les indicateurs de progrès autonome sans soutien de l'enseignant obtenaient les scores les plus faibles : c'est l'écart qui, selon les auteurs, produit une illusion de compétence et une dette épistémique, et exactement l'écart que récompensent les indicateurs de satisfaction. Voir [[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]].

Plus fondamentalement, la plupart des évaluations s'arrêtent au moment où l'aide prend fin. [[cognitive-washout-ai-skill-decay-2026|La dynamique de lessivage cognitif]] nomme cet intervalle non mesuré qui suit le retrait de l'aide et formalise quatre issues possibles (rebond élastique, plateau partiel, échafaudage latent et sur-récupération), avec un modèle de courbe de lessivage dont les paramètres incluent la constante de temps de récupération, la complétude de la récupération et un indice d'hystérésis comparant l'effort de réapprentissage à l'effort initial. Parce que la réversibilité détermine la gravité, le cadre soutient qu'une pratique sans aide et planifiée devrait être dosée selon la courbe de récupération plutôt que débattue sur le plan moral. Un plan d'évaluation de tuteur devrait donc inclure une phase de retrait, et pas seulement un post-test immédiat. Voir [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|the randomized evidence that brief assistance depresses later unassisted performance]].

## 10. Garder les enseignants ou les experts du domaine dans la boucle d'assurance qualité

Avant le déploiement, faites tester par des enseignants des profils d'apprenants réalistes, des conceptions erronées courantes, des cas limites, des invites adverses, des réponses ambiguës et des conversations de tutorat longues. Consignez les défaillances pédagogiques et servez-vous en pour réviser les invites système, les politiques de tutorat, les sources de connaissances, les [[guardrails|garde-fous]], les règles du modèle de l'apprenant et le choix du modèle. La supervision humaine reste importante, car une réponse de tutorat fluide peut rester pédagogiquement inappropriée ou incorrecte.

[[teacher-intervention-k12-ai-based-instruction-2026|La revue systématique de Lee portant sur 29 études en K-12]] montre en quoi consiste réellement cette supervision et où elle se brise. L'intervention de l'[[teacher-role|enseignant]] est un cycle répétitif en quatre phases : suivi, jugement, intervention et orchestration ; les alertes d'IA, les [[visualization|tableaux de bord]] et les scores automatisés « ne conduisent pas automatiquement à une action pédagogique » ; et la principale stratégie enseignante est la *traduction pédagogique*, qui consiste à sélectionner, réviser, compléter, résumer ou supprimer la rétroaction d'un agent conversationnel plutôt qu'à la transmettre telle quelle. Deux avertissements de conception en découlent. Plus d'informations fournies par l'IA n'est pas mieux : les systèmes qui émettent en continu des diagnostics surchargeaient les enseignants et détournaient leur attention de leur propre observation ; il faut donc hiérarchiser ce qui mérite une action et le rendre interprétable, et proposer des recommandations sous une forme que les enseignants peuvent accepter, modifier, différer ou rejeter. Plus de soutien aux enseignants n'est pas mieux non plus : retarder l'intervention pour que les étudiants travaillent de façon autonome est en soi une expertise, et les conditions structurelles (temps pour examiner les données, taille des classes, possibilité d'atteindre physiquement les groupes qui ont besoin d'aide) font partie de l'intervention plutôt que de la logistique de fond.

## Une architecture utile pour un tuteur d'IA

Une architecture de production solide peut se représenter ainsi : objectif d'apprentissage → indices sur l'apprenant / modèle de l'apprenant → politique pédagogique → contenu ancré et validé → génération conversationnelle → réponse de l'apprenant → modèle de l'apprenant mis à jour (et retour au début). La sécurité, la vie privée, l'accessibilité, la supervision des enseignants et l'évaluation devraient entourer toute cette boucle.

## Le critère de réussite le plus important

L'indicateur de développement le plus important n'est pas « l'IA a-t-elle résolu le problème ? » mais **« après avoir interagi avec l'IA, l'apprenant peut-il résoudre seul un problème comparable ? »** Les preuves de ce principe sont les plus solides dans les domaines d'apprentissage structurés comme les mathématiques et la programmation ; la généralisation à des domaines plus ouverts reste plus incertaine, ce qui rend l'évaluation propre à chaque domaine indispensable.

Pour savoir où un tuteur se situe dans une séquence de cours plutôt que de manière isolée, voir [[designing-ai-into-learning]] ; pour les règles de conception au niveau logiciel qu'un tuteur doit respecter, voir [[designing-educational-ai-software]] ; et pour la manière d'évaluer l'intervention qui en résulte, voir [[evaluating-ai-interventions-methods]].

---

## Exemple 1 : concevoir un tuteur d'IA en calcul différentiel

Prenons un tuteur de calcul différentiel de première année d'université. Son objectif devrait être d'accroître ce que les étudiants peuvent résoudre et expliquer **de façon autonome après le retrait du tuteur**, et non de maximiser le nombre de problèmes correctement terminés. Le tutorat en mathématiques est particulièrement vulnérable au sur-étayage, à l'usage prématuré des indices et au diagnostic incorrect du raisonnement des étudiants. Voir [[math-education]], [[zhang-tutormoments-2026|When Help is Unhelpful]], [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] et [[scaffolding]].

**Objectifs d'apprentissage.** Le tuteur pourrait maintenir une carte conceptuelle (fonctions et graphiques → taux de variation → limites → dérivée comme limite → règles de dérivation → applications → primitives → intégrales définies → théorème fondamental). Pour chaque concept, il devrait distinguer plusieurs types de maîtrise. Par exemple, « maîtriser la dérivée » ne devrait pas signifier simplement produire la bonne dérivée ; cela pourrait inclure reconnaître quand une dérivée est pertinente, l'interpréter comme un taux de variation instantané, choisir la bonne règle, exécuter la procédure, expliquer pourquoi elle est pertinente, vérifier le caractère raisonnable du résultat et l'appliquer à un problème inédit. Cela aide à prévenir le [[correct-answer-trap-misconceptions|piège de la bonne réponse]], où un apprenant atteint la bonne réponse par un raisonnement fautif.

**Architecture du système.** Une conception pratique en six couches : supports de cours + politiques de l'enseignant → couche de recherche documentaire / RAG → (moteur d'exercices → modèle de l'apprenant) et (vérificateur symbolique → moteur de diagnostic) → politique pédagogique → LLM conversationnel → étudiant → modèle de l'apprenant mis à jour.

1. **Couche d'ancrage dans le cours :** recherche dans des supports approuvés par l'enseignant (sections de manuel, notes de cours, exemples résolus, terminologie, méthodes approuvées, notation, règles des devoirs) pour que le tuteur n'introduise jamais de techniques mathématiquement valides mais inadaptées au cours.
2. **Couche de vérification mathématique :** utilise un système de calcul formel pour vérifier l'équivalence algébrique, les dérivées, les intégrales, les solutions d'équations, les points critiques et les approximations numériques ; le LLM gère l'explication et le dialogue tandis que le système déterministe gère la vérification mathématique.
3. **Couche du modèle de l'apprenant :** maintient des estimations par concept (par exemple : limite : en développement, règle de puissance : maîtrisée, règle du produit : en développement, règle de la chaîne : non démontrée) ainsi que des hypothèses de conceptions erronées avec leurs preuves et leur niveau de confiance. L'IA devrait traiter une conception erronée comme une **hypothèse** et non comme un fait établi, car les LLM peuvent halluciner des preuves ou déduire incorrectement des conceptions erronées : un processus **détecter → vérifier → répondre** est nécessaire.

**Une interaction de tutorat.** Pour dériver $f(x)=(x^2+1)\sin x$, un agent conversationnel classique révélerait peut-être immédiatement la réponse. Un tuteur orienté vers l'apprentissage raisonne plutôt en interne : l'étudiant a dérivé les deux composantes mais semble avoir multiplié leurs dérivées (possible conception erronée de la règle du produit comme $f'g'$), il pose donc d'abord une question de diagnostic (« quelle règle utilisez-vous lorsque deux fonctions sont multipliées ? »), puis fait écrire à l'étudiant la règle du produit sous forme symbolique, puis définit $u$ et $v$, et ne vérifie l'expression finale qu'après que l'étudiant l'a reconstruite.

**Une politique d'aide progressive.** L'aide peut s'adapter via une échelle de niveaux : tentative autonome → question [[metacognition|métacognitive]] → indice conceptuel → identification de la règle pertinente → mise en place d'une partie du problème → étape intermédiaire résolue → solution détaillée → explication par l'étudiant → résolution autonome d'un problème de transfert. Voir une solution détaillée ne démontre pas la maîtrise ; après une aide substantielle, le tuteur devrait donc faire tenter à l'apprenant un problème comparable sans aide.

**Éviter l'usage improductif des indices.** L'interface ne devrait pas faire des indices illimités un raccourci sans friction, car les demandes prématurées d'indices et la lecture superficielle des indices sont associées à de moindres [[learning-gains|gains d'apprentissage]]. Au lieu de `[Indice][Indice][Indice][Afficher la réponse]`, le système pourrait demander « qu'avez-vous essayé ? » et « quelle partie vous bloque ? » (choisir une règle, poser l'équation, faire l'algèbre, comprendre le concept, autre chose) et fournir une aide ciblée.

**Soutenir le calcul conceptuel.** Le tuteur devrait relier les procédures symboliques à de multiples représentations (formule, graphique, tableau, interprétation verbale, contexte physique de taux de variation) afin de distinguer la fluidité procédurale de la compréhension conceptuelle.

**Tableau de bord enseignant.** Le système devrait exposer des preuves agrégées plutôt que des jugements opaques de l'IA, par exemple « règle du produit : 62 % de maîtrise démontrée ; schémas courants : 18 % omettent un terme, 11 % multiplient les dérivées », avec les diagnostics individuels présentés comme des hypothèses appuyées par des preuves.

**Plan d'évaluation.** Mesurez la performance pendant l'usage du tuteur, la performance sur des problèmes comparables sans lui, la rétention différée, le transfert à des problèmes inédits, la qualité de l'[[explainable-ai|explication]] conceptuelle, la correction des conceptions erronées, la [[help-seeking|recherche d'aide]] appropriée par rapport à la recherche prématurée, la fuite de réponses, les taux de faux positifs et de faux négatifs du diagnostic et les [[differential-effects-across-learner-groups|résultats différenciés]]. La comparaison clé est la performance **avec** le tuteur contre la performance **sans** lui ensuite : un étudiant qui passe de 60 % à 95 % avec de l'aide mais reste à 60 % seul n'a pas bénéficié d'un tutorat efficace.

---

## Exemple 2 : concevoir un coach de rédaction par IA

Un coach de rédaction par IA exige une conception différente, car la rédaction n'a pas une seule réponse objectivement correcte. L'objectif est d'aider l'apprenant à mieux planifier, rédiger, évaluer et réviser ses propres textes. La base de connaissances présente la rédaction comme un **processus cognitif, social et rhétorique**, ce qui signifie qu'un système de rédaction par IA peut soutenir l'apprentissage mais aussi éliminer exactement la réflexion que le travail était censé développer. Voir [[writing-education]], [[ai-writing-support-stage-ownership-2026|From Planning to Revision]], [[coach-not-crutch-ai-writing|Coach not Crutch]] et [[feedback]].

**Objectifs d'apprentissage.** Le modèle de l'apprenant du coach pourrait suivre l'argumentation (précision de la thèse, alignement entre affirmation et preuve, contre-argument), l'organisation (unité du paragraphe, progression logique, transitions), les preuves (pertinence des sources, intégration des preuves, interprétation), la révision (révision globale et au niveau de la phrase, évaluation de la rétroaction) et le style (clarté des phrases, grammaire, voix de l'auteur), en suivant des **capacités** de rédaction et non seulement une note de dissertation.

**Ancré dans le devoir.** Recherchez la consigne du devoir, la grille d'évaluation de l'enseignant, les lectures du cours, les exigences de citation, les conventions du genre, les exemples de l'enseignant et la politique d'usage de l'IA, afin que la rétroaction puisse faire référence au devoir réel (« la grille de votre enseignant vous demande de relier chaque affirmation importante à des preuves tirées d'au moins deux lectures du cours ») plutôt que d'inventer des attentes génériques.

**Traiter différemment les étapes de la rédaction.** L'implication de l'IA à différentes étapes affecte différemment le sentiment de propriété : le soutien à la planification réduit moins la propriété que le soutien à la rédaction, et la rédaction générée par l'IA produit la plus forte baisse de propriété. Un coach peut donc accorder des permissions différentes selon l'étape : à la planification, il peut poser des questions, comparer des positions, remettre en question des postulats et critiquer des plans, mais éviter de générer tout l'argument ; à la rédaction, l'apprenant produit d'abord la prose (le coach aide à développer, il ne prend pas la main) ; à la révision, le coach peut identifier des affirmations peu claires, signaler des preuves manquantes, vérifier si les preuves étayent une affirmation, détecter des problèmes d'organisation et comparer un brouillon à la grille, en **diagnostiquant avant de réécrire** ; à la correction (après la révision), il peut soutenir la grammaire, la ponctuation, la concision et le formatage des citations.

**Exemple d'interaction.** Pour une dissertation sur l'obligation de suivre des [[online-teaching-and-learning|cours en ligne]], un système générique pourrait réécrire le paragraphe de l'étudiant en une prose soignée et faire ainsi le travail intellectuel. Un coach de rédaction dit plutôt ce qui fonctionne, nomme le problème principal (le paragraphe donne des raisons mais n'explique pas pourquoi elles justifient une obligation à l'échelle de l'université), pose une question de révision et demande à l'étudiant de compléter une phrase avec ses propres mots, en laissant la construction de l'argument à l'apprenant.

**La rétroaction doit être hiérarchisée.** Chaque cycle de rétroaction pourrait contenir une force à préserver, un problème à fort impact, une question nécessitant le jugement du rédacteur et un objectif de révision concret, plutôt que de submerger l'apprenant de dizaines de commentaires.

**Faire évaluer par l'étudiant la [[ai-feedback-quality|rétroaction de l'IA]].** La [[feedback-literacy|littératie de la rétroaction]] est elle-même un objectif d'apprentissage ; le coach devrait régulièrement demander si l'apprenant est d'accord avec une suggestion et pourquoi, et permettre à l'apprenant de rejeter la rétroaction de l'IA, afin de développer le **[[evaluative-judgment|jugement évaluatif]]** et non l'obéissance.

**Préserver la voix de l'auteur.** Le coach devrait distinguer les erreurs, les problèmes de clarté, les choix rhétoriques et les préférences de style, et ne devrait pas « corriger » automatiquement ces deux dernières catégories, sous peine d'homogénéiser l'écriture vers le style que préfère le modèle, en particulier pour les rédacteurs [[multilingual-learning|plurilingues]] et les styles rhétoriques non standard.

**Un modèle de l'apprenant fondé sur l'historique des révisions.** Plutôt que de ne stocker que les dissertations finales, le système peut apprendre des révisions de l'étudiant (par exemple un schéma répété « preuve introduite mais non interprétée » qui s'améliore d'une dissertation à l'autre), en s'adaptant à partir de preuves d'apprentissage.

**Implication de l'enseignant.** L'enseignant contrôle la grille, les objectifs du devoir, les formes autorisées d'aide par IA, la collecte des sources, les attentes en matière de citation, l'autorisation ou non d'une rédaction générative et le moment où une relecture humaine est exigée. Un tableau de bord enseignant pourrait montrer des schémas à l'échelle de la classe (par exemple 41 % ont besoin d'aide sur le lien entre affirmation et preuve) comme signal d'[[formative-assessment|évaluation formative]].

**Évaluer le coach de rédaction.** Mesurez la qualité des écrits assistés par IA puis sans IA, la capacité à identifier les faiblesses d'un texte inconnu, la qualité des révisions, l'appropriation de la rétroaction, la capacité à expliquer ses révisions, le sentiment de propriété des étudiants, la dépendance à la prose de l'IA, la préservation de la voix, les biais selon les dialectes, les rédacteurs plurilingues et les groupes, l'alignement avec le jugement de l'enseignant et le transfert différé. Une expérience révélatrice compare un groupe qui écrit seul, un groupe où l'IA génère ou révise le texte et un groupe avec coach, tous réalisant ensuite une nouvelle dissertation sans IA : si le groupe assisté par IA obtient les meilleures performances en pratique mais de faibles performances sans IA, le système a amélioré la performance et non l'apprentissage.

---

## Comparaison des deux conceptions

| Question de conception | Tuteur de calcul | Coach de rédaction |
|---|---|---|
| Objet d'apprentissage principal | Concepts mathématiques et résolution de problèmes | Argumentation et processus de rédaction |
| Vérification | Souvent vérifiable objectivement | Exige généralement un jugement contextuel |
| Outils déterministes | Moteur mathématique symbolique / calculatrice | Vérifications de grammaire, de citation, de grille |
| Rôle principal de l'IA | Diagnostiquer et étayer le raisonnement | Diagnostiquer et étayer la révision |
| Risque majeur | Donner la solution | Écrire le texte à la place de l'apprenant |
| Action importante de l'apprenant | Résoudre et expliquer | Rédiger, évaluer et réviser |
| Modèle de l'apprenant | Concepts, procédures, conceptions erronées | Argumentation, preuves, organisation, révision |
| Garde-fou clé | Tenter avant de voir la solution | Prose de l'étudiant avant toute réécriture par l'IA |
| Test de transfert | Nouveaux problèmes de calcul sans IA | Nouvelle tâche de rédaction sans IA |
| Critère de réussite | Raisonnement mathématique autonome | Rédaction autonome et jugement évaluatif |

Les deux systèmes utilisent beaucoup des mêmes [[ai-technologies|technologies]] d'IA mais incarnent **des politiques pédagogiques différentes, parce que les disciplines exigent des formes de pensée différentes**. Le principe commun : **identifier l'activité cognitive qui produit l'apprentissage et concevoir l'IA pour soutenir cette activité sans la retirer à l'apprenant**, en préservant le raisonnement mathématique pour le calcul et la paternité, la prise de décision rhétorique, l'évaluation et la révision pour la rédaction. Ce principe est plus fondamental que tout modèle, invite, cadre d'agent ou interface particuliers.