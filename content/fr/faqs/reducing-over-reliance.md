---
title: "Comment éviter que les étudiants ne dépendent excessivement de l'IA ?"
created: "2026-09-22T19:14:32-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 80
type: faq
foundations: [cognitive-offloading, reducing-ai-misuse]
pedagogy: [desirable-difficulties, help-seeking, metacognition, self-regulated-learning]
methods: [mixed-methods-research]
ethics: [trust-calibration]
research_method: [literature review, experiment]
audience: [instructors, instructional designers]
level: [higher ed, secondary, k 12]
source_updated: "2026-10-28T11:14:24-04:00"
translation_of: faqs/reducing-over-reliance
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

Un étudiant réussit parfaitement le problème à faire à la maison et laisse la moitié de l'examen en blanc. Quelqu'un rend un rapport de laboratoire qu'il est incapable de vous expliquer, ou un bloc de code qu'il ne peut pas déchiffrer ligne par ligne. Un collègue veut faire interdire l'outil dans le cours de première année et vous pesez ce que cela coûte aux étudiants qui s'appuient le plus dessus.

L'essentiel : la dépendance excessive est surtout un problème de placement. Les dispositifs qui la réduisent placent la tentative de l'étudiant avant l'outil, configurent l'IA pour qu'elle donne des indices au lieu de répondre, font de la vérification un livrable obligatoire et préservent un moment noté où l'outil est absent.

## La version courte

**1.** Placez les idées, l'hypothèse ou le brouillon de l'étudiant devant l'outil avant que celui-ci ne s'ouvre.

**2.** Configurez l'IA pour qu'elle donne des indices, pose des questions et fournisse des exemples partout où c'est la compétence visée que vous notez.

**3.** Faites de la vérification un livrable avec sa propre ligne dans le devoir.

**4.** Gardez le moment noté sans outil, et comparez le travail assisté à ce moment-là.

**5.** Calez l'invite de réflexion sur la phase de la tâche qu'elle peut encore modifier.

**6.** Regardez qui votre dispositif laisse de côté, selon les connaissances préalables plutôt que selon la moyenne.

## Décider si vous avez un problème ou seulement un usage intensif

La décharge cognitive est le transfert d'une exigence cognitive vers un outil externe, ce qui libère des ressources mentales limitées pour d'autres travaux. [[cognitive-offloading-metacognitive-review-2026|Guo et Ye (2026)]] examinent ce construit à travers le modèle dynamique de la [[metacognition|métacognition]] de Nelson et Narens, où la surveillance de la difficulté déclenche la décision de décharger vers une stratégie interne ou externe. La décharge est un choix d'[[self-regulated-learning|autorégulation]], et la défaillance qui mérite votre inquiétude est le [[trust-calibration|calibrage de la confiance]] ; le volume seul vous apprend peu.

[[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] modélise la dépendance comme trois actions : résoudre seul, accepter la réponse de l'IA sans la vérifier, ou l'utiliser puis vérifier. Le calibrage échoue dans les deux sens. La dépendance excessive consiste à accepter une production erronée, et la sous-dépendance à écarter une IA utile après qu'elle s'est trompée. La dépendance excessive collective est une population qui a abandonné la vérification, et comme la dépendance brute diverge du regret, un usage intensif est compatible avec de bons résultats. L'étudiant qui vérifie chaque réponse de l'IA contre vos documents n'est pas votre problème. Celui qui rend le premier brouillon d'un modèle en est un.

[[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] décrivent le mécanisme comme une « fluidité à la demande » : une production cohérente et assurée qui contourne les [[desirable-difficulties|difficultés souhaitables]] de la récupération, de l'élaboration et de la génération par lesquelles les connaissances se consolident. Leur paradoxe de la performance veut que le travail assisté paraisse fluide et que les étudiants réussissent sur le moment en retenant moins, ce qu'ils appellent une illusion de compétence. Ils nomment la paresse métacognitive (d'après Fan et al. 2024), où la commodité laisse les apprenants abdiquer des processus autorégulateurs qu'ils ont besoin de développer.

Les distinguer dans votre propre cours demande une comparaison plutôt qu'un chiffre. Cherchez un travail meilleur que le travail antérieur de l'étudiant et pire que son explication de ce travail : un problème solide suivi d'un examen faible, un rapport poli que l'étudiant ne sait pas discuter, une réponse correcte qu'il ne peut pas reproduire sur un problème similaire. Aucun schéma isolé ne prouve quoi que ce soit. Deux ou trois ensemble justifient de changer le dispositif.

L'essentiel de ce que vous pouvez mesurer ici relève de l'[[self-report-measures|auto-déclaration]]. [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] a interrogé 666 participants britanniques avec 50 entretiens et a trouvé l'usage de l'IA corrélé négativement à l'[[critical-thinking|esprit critique]] (r = -0.68), la décharge jouant un rôle médiateur partiel (effet total b = -0.42 ; b indirect = -0.25). [[genai-over-reliance-learning-2026|Gao, Sun et Khan (2026)]] ont utilisé des données d'enquête décalées en trois vagues auprès de 623 étudiants chinois, complétées par des entretiens d'enseignants, et ont constaté qu'un usage efficace de l'IA augmente en même temps la performance d'apprentissage durable et la dépendance excessive. Les deux dispositifs sont corrélationnels, et tous deux le disent.

Les instruments comportementaux sont plus minces. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE (Alam, 2026)]] est une auto-vérification purement navigateur, sans preuve de fiabilité ni de validité, et ses auteurs alertent sur la validité des items. Les items enregistrent quand et à quelle fréquence l'IA entre dans un flux de travail, non si le raisonnement propre de l'étudiant est resté engagé ; un étudiant qui étaye délibérément avec l'IA tôt dans le travail sera donc honnêtement noté comme déchargeur. PAUSE cite aussi l'Offloading Score de Padmakumar et al. (2026), qui estime la fraction d'effort déchargée à partir de journaux comportementaux (n = 40 développeurs). Ce que vous voulez savoir, c'est ce que l'étudiant sait faire sans aide.

## Placer la tentative de l'étudiant avant l'outil

La séquence testée la plus claire est « réfléchir d'abord, ChatGPT ensuite ». [[think-first-chatgpt-later-2026|Wong et Qiu (2026)]] ont réparti N = 196 étudiants entre un travail indépendant, un usage libre de ChatGPT et une condition régulée : générer ses propres idées, collaborer avec ChatGPT pour les améliorer et les évaluer, puis affiner et rendre seul une solution. Le groupe en usage libre a produit un travail plus créatif sur la tâche assistée, puis est retombé au niveau humain seul sur une tâche ultérieure plus difficile réalisée sans ChatGPT. Le groupe régulé n'a montré aucun avantage immédiat et a surpassé les deux autres groupes en créativité indépendante par la suite.

Les données de prompts expliquent l'écart. Dans le groupe régulé, 88.6% des prompts étaient collaboratifs, et c'était le seul type de prompt significativement corrélé à l'originalité indépendante ultérieure. Dans le groupe en usage libre, 70.9% des prompts étaient non collaboratifs et 59.6% demandaient simplement à ChatGPT de générer des idées d'emblée. Le même outil, sollicité de deux façons, a produit deux apprenants différents.

Sur votre feuille de consignes, cela devient une instruction d'ordre : idées, hypothèses ou brouillon d'abord, puis l'outil. Une phrase en haut de la page suffit, à condition que l'étape suivante recueille ce que l'étudiant a écrit.

Deux détails de classe décident si la séquence tient. Le premier est le temps. Si la phase indépendante se déroule hors classe, certains étudiants ouvriront l'outil d'abord et noteront les idées ensuite. Le second est le recueil. Si rien n'est rendu à cette phase, la séquence n'existe que sur le papier. Une demi-page de notes, recueillie à la fin du cours, suffit à rendre l'ordre réel.

## Configurer l'outil pour qu'il donne des indices au lieu de répondre

[[brcic-effortless-trap-productive-struggle-2026|Brcic et Frljic (2026)]] donnent la version la plus nette de l'argument du placement. Un assistant IA sans garde-fou a laissé des lycéens environ 17% moins bons à un examen sans aide que des pairs n'ayant aucun outil. Le même modèle reconstruit pour retenir les réponses a effacé le préjudice, et un tuteur bien conçu a à peu près doublé l'apprentissage. Leur diagnostic est utilisable dans tout cours : si laisser entrer l'IA rend la tâche sans effort, l'outil est au mauvais endroit.

[[zohar-bloom-inzlicht-against-frictionless-ai-2026|Zohar, Bloom et Inzlicht (2026)]] donnent une forme à cet argument. Ils soutiennent que le lien entre effort et sens est un U inversé, de sorte que la cible est un gradient : retirer les obstacles écrasants et préserver les luttes qui produisent la compréhension et l'appropriation, l'assistance venant en supplément. Leur argument est un commentaire conceptuel sans nouvelles données, et la relation en U inversé repose sur un seul point d'appui empirique sans être quantifiée : personne ne peut donc vous dire où se situe l'optimum pour un apprenant donné.

En pratique, cela signifie une IA sous garde-fou au milieu de la tâche, là où les indices, les exemples résolus et les exercices font le travail, et une vérification sécurisée à la fin. Cela transforme aussi une politique d'usage de l'IA en règle de placement par compétence, plus facile à écrire et à défendre qu'une liste d'interdits.

Un indice est une question sur la prochaine étape de l'étudiant, un exemple résolu d'un problème similaire ou un renvoi au passage pertinent. Une réponse est une phrase finie que l'étudiant peut copier-coller. La plupart des agents conversationnels généralistes produisent la seconde par défaut, dans une prose fluide qui ressemble à de l'aide, et c'est pourquoi la configuration compte plus que les intentions de l'étudiant.

## Exiger la vérification et la rendre visible

La vérification est le levier le moins coûteux qui bénéficie d'un vrai appui causal. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] a constaté que rendre la vérification visible déclenchait une contre-cascade vers une vérification quasi complète : la dépendance excessive tombait à 0.00 et le regret à 0.07. Réduire la friction du contrôle était le levier le plus faible du même modèle, parce que la barrière est sociale et non mécanique. Un lien vers la bibliothèque ne fait pas vérifier une affirmation à un étudiant.

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et ses collègues (2026)]] ont trouvé que les étudiants qui font déjà cela correctement confrontent la production aux documents du cours, aux pairs ou aux enseignants lorsque l'exactitude est incertaine. C'est un comportement que vous pouvez exiger. Ajoutez une ligne au devoir : ce que vous avez vérifié, et contre quoi. Lisez-la dans la note, et la norme devient visible pour toute la classe plutôt que pour les quelques consciencieux.

Cette ligne vous donne aussi de quoi relancer. Quand un étudiant écrit qu'il a vérifié une affirmation contre le texte du cours, vous pouvez demander à quelle page. Quand il écrit qu'il a comparé avec un pair, vous pouvez demander ce que le pair a dit. Cela coûte une phrase. C'est la question de relance qui fait que les étudiants traitent cela comme un travail.

La vérification a aussi besoin d'un périmètre. Vérifier qu'une affirmation correspond au texte du cours est un acte différent de relire une phrase pour sa grammaire, et c'est le premier cas où le modèle échoue le plus souvent. Dites lequel la ligne demande, sinon vous obtiendrez de la relecture.

## Montrer un échec confiant

Proposez une tâche dont le modèle donne la réponse avec assurance et à tort, puis faites vérifier cette réponse par la classe contre le texte du cours. Cela porte parce que l'erreur arrive avec la même voix que les réponses correctes. Ajoutez les preuves ensuite : un assistant sans garde-fou a laissé les étudiants environ 17% moins bons à un examen sans aide, et des étudiants disposant de GPT-4 ont résolu plus de problèmes avec l'outil et moins bien réussi que les témoins une fois celui-ci retiré (PAUSE rapporte Bastani et al., 2025). La même source ajoute que Liu et al. (2026) ont trouvé que l'assistance réduisait la persévérance dans des essais contrôlés randomisés (N = 1.222).

Choisissez un échec modeste et vérifiable, comme une citation qui n'existe pas, une date fausse ou un calcul qui ne tombe pas juste. Demandez ensuite à la classe d'écrire la correction et le contrôle qu'elle a utilisé pour la trouver. Cette correction écrite est l'artefact, et elle vous dit si les étudiants savent faire le contrôle sans que vous soyez derrière eux.

## Garder le moment noté sans outil

La production assistée est un mauvais indicateur de la capacité, donc au moins un moment noté doit se dérouler sans l'outil. La tâche ultérieure sans assistance de [[think-first-chatgpt-later-2026|Wong et Qiu (2026)]] est cette mesure. Leur groupe humain seul a aussi reculé sur la relance plus difficile, ce qui écarte la version simple du remède : retirer l'outil sans soutenir l'apprenant n'est pas une intervention.

L'alternance des modes est étayée. PAUSE rapporte le résultat de la quatrième session de Kosmyna et al. (2025), où les participants en mode cerveau seul qui ont ensuite utilisé ChatGPT ont surpassé les utilisateurs prolongés de LLM. La responsabilisation passe aussi par l'explication : Makransky et al. (2025) ont trouvé qu'un chatbot tuteur qui invitait les étudiants à relier les idées et à expliquer leur raisonnement produisait de meilleures performances d'évaluation qu'un enseignement traditionnel.

Pour un cours, alternez : travail assisté en entraînement, travail sans assistance là où cela compte. Lisez la pièce assistée comme un relevé de performance dans de bonnes conditions, et la pièce sans assistance comme la preuve de l'apprentissage. Les comparer est aussi la conversation la plus utile que vous puissiez avoir avec un étudiant qui ne comprend pas sa note.

La contrainte est le calendrier. Un moment sans outil demande une salle, un horaire et une tâche qui y tient, donc la version la moins coûteuse est un court travail en classe rattaché à un devoir que vous avez déjà posé. Un examen séparé est un engagement plus lourd et généralement inutile pour une première tentative.

La pièce sans assistance gagne un second usage : rendez-la au début de l'unité suivante, et vous verrez tous les deux ce qui a survécu à la coupure.

## Distinguer l'aide instrumentale de l'aide exécutive

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg, Feldman-Maggor et Wong (2026)]] ont interrogé 20 étudiants universitaires en STEM et trouvé un processus en quatre étapes : décider si une aide est nécessaire, choisir une source, choisir le type d'aide et juger l'aide reçue. Les étudiants les plus solides préféraient l'aide instrumentale, c'est-à-dire les indices et les explications, à l'aide exécutive, c'est-à-dire les solutions directes. La même étude avertit que l'usage des LLM pour le débogage ou la programmation interlangue peut contourner la [[problem-solving|résolution de problèmes]] indépendante même quand les étudiants ne demandent jamais de réponse.

Cela correspond proprement à la [[cognitive-offloading|décharge cognitive]]. L'usage instrumental est la décharge duplicative qui tient quand l'outil disparaît, parce que l'étudiant encode encore le raisonnement. L'usage exécutif est la décharge substitutive qui s'effondre quand le stock externe est retiré. [[cognitive-offloading-metacognitive-review-2026|Guo et Ye (2026)]] tracent la frontière exactement en ces termes : retirez le stock et les déchargeurs substitutifs déclinent fortement, tandis que les déchargeurs duplicatifs conservent leur exactitude grâce à l'encodage interne.

Inscrivez la distinction dans le devoir. Demandez aux étudiants d'étiqueter chaque usage de l'IA comme instrumental ou exécutif, exigez au moins un prompt collaboratif et notez le raisonnement qu'ils ont ajouté après la réponse. Dans la condition d'usage libre de Wong et Qiu, la dérive par défaut allait vers l'usage exécutif sans que personne ne décide de dériver.

Toute décharge n'est pas suspecte. PAUSE cite Hong et al. (2025), où décharger délibérément des tâches rédactionnelles d'ordre inférieur pour libérer l'attention au profit de l'analyse et de la révision a produit des gains d'esprit critique plus importants. Le test est de savoir si la partie déchargée est la compétence que vous notez.

Ces étiquettes diagnostiquent aussi votre tâche. Si la majorité d'une classe déclare un usage exécutif, le devoir l'invite, quoi que dise la politique, et le changement suivant relève de la tâche plutôt que de la formulation de la règle.

## Caler l'invite sur la phase

Une rétroaction qui vise une croyance stable fonctionne avant le début d'une tâche. Une rétroaction sur l'exactitude et la difficulté immédiates fonctionne pendant la tâche. [[cognitive-offloading-metacognitive-review-2026|Guo et Ye (2026)]] appellent cela l'appariement du moment et de la composante, ce qui explique pourquoi une réflexion due à la fin d'un projet change si peu : à ce stade, les choix sont faits.

[[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] recommandent des invites métacognitives intégrées qui font s'arrêter, réfléchir et évaluer sa compréhension en cours de travail, en parallèle d'un enseignement à charge réduite (Load Reduction Instruction), qui gère la charge cognitive tout en permettant une indépendance progressive. Une prédiction d'une minute avant une unité difficile, écrite et comparée ensuite, tient dans cette fenêtre et ne coûte rien à noter.

La formulation de l'invite compte moins que sa position. Avant une unité, demandez ce que l'étudiant s'attend à trouver difficile et pourquoi. Pendant, demandez sur quelle étape il bloque et ce qu'il a essayé. Une réflexion de fin de projet enregistre surtout ce qui s'est passé, et c'est pourquoi elle change si peu. Gardez la prédiction sur la même page que le travail, pour que la comparaison finale ne coûte aucun classement.

## Attendre que le risque se concentre

[[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] situent le risque dans les connaissances préalables et l'autorégulation et nomment un **écart métacognitif d'équité** : bien utiliser l'IA exige des ressources dont les novices manquent, si bien que les étudiants qui ont le plus besoin de s'exercer sont les plus susceptibles de déléguer l'apprentissage lui-même. Ils rapportent que 80% des étudiants australiens utilisent déjà l'IA et que deux tiers des enseignants du début du secondaire aussi (OCDE 2025).

L'âge et l'habitude vont dans le même sens. [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] a trouvé que les participants de 17 à 25 ans montraient une dépendance à l'IA et une décharge plus élevées et un esprit critique plus faible que ceux de 46 ans et plus, et que le niveau d'études prédisait un meilleur esprit critique quel que soit l'usage de l'IA (r = +0.34), avec une interaction significative indiquant que le niveau d'études atténue l'effet négatif. [[genai-over-reliance-learning-2026|Gao, Sun et Khan (2026)]] ont trouvé que la polychronicité, tendance au multitâche, modère le chemin, les étudiants très polychrones étant plus à risque.

Pour une section, cela plaide pour surveiller de plus près les étudiants les moins bien préparés, et pour vérifier si votre propre tâche a créé les conditions où la vérification s'arrête. Une tâche exigeante associée à un modèle performant est la combinaison que le modèle de Biswas signale comme la plus génératrice de regret, et il est facile de la créer par accident.

Le contexte compte autant que la personne, et votre cours en contrôle une partie. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] montre que la difficulté de la tâche et la qualité de l'IA fixent la ligne de base : la dépendance excessive passe d'environ 0.02 à 0.38 avec la difficulté, et sur les tâches difficiles elle atteint 0.38 avec une IA médiocre contre 0.16 avec une bonne IA. Le regret maximal vient d'une IA de haute qualité sur des tâches difficiles (0.441), parce que les agents surdéfèrent et s'appuient rarement sur eux-mêmes. La preuve sociale aggrave le tout : quand l'usage visible passe de 0 à 0.6, la vérification s'effondre de 0.29 à 0.002. La vérification s'arrête exactement là où le modèle est le plus fort et la tâche la plus difficile, ce qui est rarement là où un enseignant regarde en premier.

## Décider du poids à accorder aux données

Rien dans ce corpus ne teste si une intervention précise contre la dépendance excessive tient d'un contexte ou d'un semestre à l'autre. Le « réfléchir d'abord » repose sur une seule expérience avec N = 196. Le résultat sur la rétention des réponses vient de la synthèse de [[brcic-effortless-trap-productive-struggle-2026|Brcic et Frljic (2026)]] et non d'un essai qui lui soit propre. L'argument de la friction est un commentaire conceptuel sans nouvelles données. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] énonce les limites du modèle : qualité de l'IA exogène et stationnaire, réseau fixe, vérification stylisée. Estimer les valeurs réelles demanderait des traces longitudinales des taux de vérification par tâche, de la force de la preuve sociale et de la façon dont la confiance se met à jour après un usage vérifié plutôt que non vérifié.

La mesure reste le maillon faible. Les dispositifs d'enquête dominent, et [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] comme [[genai-over-reliance-learning-2026|Gao, Sun et Khan (2026)]] appellent à des suivis longitudinaux et expérimentaux. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE]] n'a aucune psychométrie et a été conçu pour des adultes. La possibilité de combler l'écart d'équité par l'enseignement est théorique plutôt que démontrée.

Il vous reste un pari raisonnable, fait à peu de frais. Changez un devoir, conservez la mesure sans aide et vérifiez si l'écart entre travail assisté et travail non assisté se resserre. Ne reconstruisez pas un cours sur la force de ces chiffres.

## Ce que les enseignants comprennent mal

**Les étudiants qui l'utilisent le plus sont ceux qui sont en difficulté.** La fréquence est ce que les enquêtes capturent et ce que les tableaux de bord affichent, et ce n'est pas le construit. Un étudiant qui vérifie chaque réponse et cite vos documents peut utiliser l'IA quotidiennement et aller bien. Un étudiant qui rend la première production une fois par semaine a le problème.

**Une interdiction supprime le risque.** Les résultats les plus solides ici viennent du placement, et le bras humain seul de l'expérience de Wong et Qiu a aussi reculé sur la relance plus difficile. Retirer l'outil sans soutenir l'apprenant laisse la difficulté où elle était.

**Une vérification moins coûteuse réglera la vérification.** Rendre le contrôle plus facile était le levier le plus faible du modèle de Biswas, parce que l'obstacle est social. Un meilleur détecteur de plagiat ne fait pas lire la source à un étudiant.

**Un tableau de bord d'usage me dit qui décharge.** Les items de PAUSE enregistrent quand et à quelle fréquence l'IA entre dans un flux de travail, et les auteurs signalent eux-mêmes le problème de validité. Un étayeur prudent est noté comme déchargeur, donc agir sur ces chiffres punit les étudiants que vous voulez garder.

**La fluidité et la satisfaction montrent que le dispositif fonctionne.** C'est l'illusion que [[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] décrivent dans leur paradoxe de la performance : le travail paraît fluide et les étudiants réussissent sur le moment en retenant moins. La performance sans aide et le [[transfer-of-learning|transfert]] différé sont les mesures qui répondent à la question.

**Enseignez la littératie en IA aux étudiants et le problème disparaîtra.** [[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] avertissent que surinvestir dans une littératie en IA destinée aux étudiants pourrait être une mauvaise allocation, vu ce qui manque aux novices.

## Ce qui va vous revenir

**« Ce n'est que de la bonne pédagogie sous un nom nouveau. »** En partie. L'étayage, la rétroaction formative et la lutte productive sont des idées anciennes. Ce qui est plus récent, c'est l'ordre : la vérification visible a battu la vérification moins coûteuse, et les deux moments à protéger sont la première tentative difficile et le contrôle final sans aide. Faites les choses familières dans le nouvel ordre.

**« Je ne peux pas faire la police. »** Vous ne pouvez pas, et les données disent de ne pas essayer. Le placement a produit le résultat le plus solide. Concevez la tâche pour que l'usage de l'outil au mauvais moment apparaisse dans le travail lui-même, sous forme de réponse que l'étudiant ne sait pas expliquer ou d'étape de vérification manquante.

**« Mon cours est trop grand pour une unité séquencée. »** Les leviers peu coûteux passent à l'échelle : une ligne de vérification, une prédiction d'une minute et le déplacement du contrôle noté vers une salle sans IA. L'élément coûteux, une unité entièrement séquencée en « réfléchir d'abord », peut commencer par un seul devoir. Régénérez un problème en deux moitiés, assistée et non assistée, et voyez ce que l'écart vous dit.

**« Mes étudiants sont des novices. Ils ont besoin de l'aide. »** Ils ont plus besoin d'indices que de réponses, et le résultat sur l'équité en est la raison. Les étudiants qui ont le moins de connaissances préalables sont les plus susceptibles de déléguer le raisonnement, et un outil qui retient les réponses garde l'exercice là où il doit être.

**« Les étudiants les plus faibles ne vont-ils pas simplement échouer au contrôle sans aide ? »** Parfois oui, et ce résultat est une information plutôt qu'un verdict. Un contrôle sans outil que la majorité d'une classe échoue dit que l'entraînement portait la performance, ce qui est précisément ce que vous aviez besoin de savoir. Pesez-le comme une preuve, réenseignez ce qu'il révèle et proposez une seconde tentative sur une tâche parallèle. Aucune étude ici ne teste si un réenseignement après un contrôle sans aide échoué récupère l'apprentissage : cette partie relève de votre jugement professionnel.

**« Certains de mes étudiants utilisent l'IA comme un étayage honnête. Dois-je les en empêcher ? »** Non. Un étudiant qui lit un indice, essaie l'étape et vérifie le résultat pratique la décharge duplicative qui survit au retrait de l'outil. Ce que vous voulez, c'est une tâche qui garde cet usage disponible et rend la version exécutive moins récompensée, ce qui dépend de ce que la tâche recueille et de ce que la grille rémunère.

**« Les données sont minces, alors pourquoi changer quoi que ce soit ? »** Elles sont minces à des endroits précis, que les limites ci-dessus nomment. Ce qui est constant d'une étude à l'autre, c'est la direction : le placement, la vérification visible et une mesure sans aide. Un devoir changé, avec le résultat sans assistance conservé, est un pari assez petit pour être couru sur cette base.

## Que faire cette semaine

**1.** Ajoutez une ligne de vérification au prochain devoir : une phrase nommant ce que l'étudiant a vérifié et contre quoi.

**2.** Déplacez le contrôle noté vers un moment sans outil, et notez celui-là.

**3.** Placez la première tentative difficile avant l'outil, et recueillez les idées, l'hypothèse ou le brouillon qui en sort.

**4.** Changez le réglage de l'outil que vous recommandez pour qu'il donne des indices plutôt que des réponses, et dites aux étudiants que c'est ce que vous avez fait.

**5.** Faites tourner en direct un échec confiant de l'IA, faites-le repérer par les étudiants contre le texte du cours, et conservez la correction qu'ils ont écrite.

## Où aller ensuite

La question voisine, celle de savoir si l'IA produit un apprentissage, est traitée dans [[does-ai-help-students-learn]]. [[reduce-ai-cheating]] traite l'intégrité et les limites de la détection, et [[redesign-assessment-ai-era]] couvre l'architecture d'évaluation que cette page suppose. Pour les idées sous-jacentes, voir [[cognitive-offloading]], [[metacognition]] et [[desirable-difficulties]].
