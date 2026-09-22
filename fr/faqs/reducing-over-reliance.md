---
title: "Comment éviter que les étudiants ne dépendent excessivement de l'IA ?"
created: "2026-09-22T19:14:32-04:00"
updated: "2026-09-22T19:14:32-04:00"
weight: 80
type: faq
foundations: [cognitive-offloading, reducing-ai-misuse]
pedagogy: [desirable-difficulties, help-seeking, metacognition, self-regulated-learning]
methods: [mixed-methods-research]
ethics: [trust-calibration]
research_method: [literature review, experiment]
audience: [instructors, instructional designers]
level: [higher ed, secondary, k 12]
translation_of: faqs/reducing-over-reliance
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Comment éviter que les étudiants ne dépendent excessivement de l'IA ?

Vous avez des travaux notés qui se lisent mieux que ce que l'étudiant sait expliquer. Ils réussissent parfaitement la série d'exercices à faire à la maison et restent muets à l'examen. Les notes ont cessé de prédire ce qu'ils comprennent, et vous soupçonnez l'outil de faire la réflexion à leur place.

Vous avez probablement raison, et il s'agit d'un problème de conception, non de surveillance. **La dépendance excessive n'est pas la même chose qu'un usage fréquent, et les interventions qui la réduisent sont surtout des conceptions de tâches plutôt que des restrictions d'accès.** Un apprentissage durable se construit par la récupération, l'élaboration et la génération, et l'IA générative peut fournir le produit de ces processus sans les exiger.

L'essentiel : placez la tentative de l'étudiant avant l'outil, protégez les moments où l'outil est absent, rendez la vérification visible plutôt que simplement disponible, et évaluez quelque chose que l'étudiant fait sans aide.

## Ce qu'est réellement la dépendance excessive, et comment savoir que vous avez un problème

La décharge cognitive est le transfert d'exigences cognitives vers des outils externes, ce qui libère des ressources mentales limitées pour un traitement de plus haut niveau. [[cognitive-offloading-metacognitive-review-2026|Guo et Ye (2026)]] examinent ce construit à travers le modèle [[metacognition|métacognitif]] dynamique de Nelson et Naren, dans lequel le suivi de la difficulté éclaire la décision de décharger vers une stratégie interne ou externe. La décharge est un choix d'[[self-regulated-learning|autorégulation]] plutôt qu'un défaut ; l'échec est un [[trust-calibration|mauvais calibrage]], non un problème de volume.

[[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] modélise la dépendance comme trois actions (résoudre seul, accepter la réponse de l'IA sans vérification, ou l'utiliser et vérifier) et définit symétriquement les deux erreurs de calibrage : la dépendance excessive consiste à accepter une production erronée, la dépendance insuffisante à écarter une IA utile après qu'elle s'est trompée. La dépendance excessive collective correspond à une population qui abandonne la vérification, et comme la dépendance brute diverge du regret, une dépendance élevée n'est pas automatiquement nuisible. L'étudiant qui vérifie chaque réponse de l'IA dans vos supports n'est pas votre problème ; celui qui rend le premier brouillon d'un modèle l'est.

L'essentiel de ce que vous pouvez mesurer relève de l'[[self-report-measures|auto-déclaration]]. [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] a interrogé 666 participants britanniques avec 50 entretiens et a trouvé que l'usage de l'IA était corrélé négativement à la [[critical-thinking|pensée critique]] (r = −0.68), la décharge servant partiellement de médiateur (effet total b = −0.42 ; b indirect = −0.25). [[genai-over-reliance-learning-2026|Gao, Sun et Khan (2026)]] ont utilisé des données d'enquête à trois vagues avec décalage temporel auprès de 623 étudiants chinois, complétées par des entretiens avec des enseignants, et ont trouvé qu'un usage efficace de l'IA augmente à la fois la performance d'apprentissage durable *et* la dépendance excessive. Les deux plans d'étude sont corrélationnels, et les deux le disent.

Les instruments comportementaux sont plus rares. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE (Alam, 2026)]] est une auto-évaluation utilisable uniquement dans un navigateur, sans preuve de fiabilité ni de validité, et son avertissement principal porte sur la validité des items : ceux-ci enregistrent quand et à quelle fréquence l'IA intervient dans un flux de travail, et non si le raisonnement propre de l'étudiant est resté engagé, si bien qu'un étudiant qui s'étaye délibérément avec l'IA dès le début obtiendra honnêtement un score de décharge. Elle cite aussi l'Offloading Score de Padmakumar et al. (2026), qui estime la fraction d'effort déchargée à partir de journaux comportementaux (n = 40 développeurs). La fréquence d'usage n'est pas le construit ; ce que l'étudiant sait faire sans aide l'est.

## Comment l'IA déplace le travail qui produit l'apprentissage

[[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] formulent le risque comme une « fluidité à la demande » : une production cohérente et assurée qui contourne les [[desirable-difficulties|difficultés désirables]] (récupération, élaboration, génération) par lesquelles les connaissances se consolident. Leur **paradoxe de la performance** : un travail assisté par IA paraît fluide et les étudiants réussissent bien sur le moment tout en retenant moins, ce qui crée une illusion de compétence. Ils nomment **paresse métacognitive** (d'après Fan et al. 2024) le fait que la commodité permet aux apprenants d'abdiquer les processus d'autorégulation qu'ils ont besoin de développer. [[cognitive-offloading-metacognitive-review-2026|Guo et Ye (2026)]] ajoutent une frontière de conception : la décharge **substitutive** remplace le traitement interne, tandis que la décharge **duplicative** le complète ; si l'on retire le stockage externe, les personnes qui déchargent de façon substitutive chutent fortement, alors que celles qui déchargent de façon duplicative conservent leur exactitude grâce à un encodage interne.

Les preuves causales sont ici les plus nettes. [[brcic-effortless-trap-productive-struggle-2026|Brcic et Frljic (2026)]] rapportent qu'un assistant IA sans garde-fous a laissé les élèves du secondaire environ 17% moins bons à un examen sans aide que des camarades sans outil, que le même modèle reconfiguré pour refuser de donner les réponses a effacé ce préjudice, et qu'un tuteur bien conçu a à peu près doublé l'apprentissage. Leur diagnostic : si laisser l'IA entrer rend la tâche sans effort, elle est au mauvais endroit. PAUSE ajoute des résultats concordants : Bastani et al. (2025) ont trouvé que les étudiants disposant de GPT-4 résolvaient plus de problèmes avec l'outil mais réussissaient moins bien que les témoins une fois celui-ci retiré, et Liu et al. (2026) ont trouvé que l'assistance réduisait aussi la persévérance dans des essais contrôlés randomisés (N = 1,222).

## Ce qui modifie réellement le comportement des étudiants, par ordre de rendement

**1. Refuser ou rationner ce que la tâche est censée construire (rendement maximal, coût modéré).** Le levier dont l'empreinte causale est la plus large est un outil qui refuse de répondre : une IA sous garde-fous (indices, exemples, entraînement) dans les phases intermédiaires, la vérification finale sécurisée à la fin. Cela fait d'une politique d'usage de l'IA une règle de placement par compétence plutôt qu'une liste d'interdictions. [[zohar-bloom-inzlicht-against-frictionless-ai-2026|Zohar, Bloom et Inzlicht (2026)]] soutiennent que le lien entre effort et sens suit une courbe en U inversé : la cible est donc un gradient, qui supprime les obstacles écrasants tout en préservant les difficultés qui produisent la compréhension et l'appropriation, l'assistance venant en complément et non en substitut.

**2. Séquencer l'assistance au lieu de la restreindre (rendement élevé, coût élevé, révision nécessaire).** La structure la plus solidement testée est « réfléchir d'abord, ChatGPT ensuite ». [[think-first-chatgpt-later-2026|Wong et Qiu (2026)]] ont fait travailler N = 196 étudiants seuls, avec un accès libre à ChatGPT, ou dans une condition encadrée : générer ses propres idées, collaborer avec ChatGPT pour les améliorer et les évaluer, puis affiner et rendre une solution de façon autonome. Le groupe en usage libre a produit un travail plus créatif sur la tâche assistée, mais est retombé au niveau d'un travail purement humain sur une tâche ultérieure plus difficile réalisée sans ChatGPT ; le groupe encadré n'a montré aucun avantage immédiat mais a surpassé les deux autres sur la créativité autonome par la suite. L'analyse des processus a montré que 88.6% de ses invites étaient collaboratives, le seul type d'invite significativement corrélé à l'originalité autonome ultérieure.

**3. Rendre la vérification visible et obligatoire (rendement élevé, coût faible).** [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] a trouvé que rendre la vérification visible déclenchait une contre-cascade aboutissant à une vérification quasi complète (dépendance excessive 0.00, regret descendu à 0.07), tandis que réduire la friction de la vérification était le levier le plus faible, car il ne contrecarre pas l'attrait social pour un usage non vérifié. Une phrase de vérification des sources exigée vaut mieux qu'un lien vers la bibliothèque. Vérifier la production par rapport aux supports de cours, aux pairs ou aux enseignants quand l'exactitude est incertaine est ce que [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et ses collègues (2026)]] ont observé chez les étudiants les plus forts.

**4. Synchroniser les invites de réflexion avec la phase qu'elles peuvent influencer (rendement modéré, coût faible).** [[cognitive-offloading-metacognitive-review-2026|Guo et Ye (2026)]] en déduisent un principe d'appariement entre le moment et la composante : une rétroaction visant des croyances stables fonctionne avant une tâche, tandis qu'une rétroaction immédiate sur l'exactitude et la difficulté propres à la tâche fonctionne pendant celle-ci. [[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] recommandent des invites métacognitives intégrées qui font s'arrêter, réfléchir et s'auto-évaluer les apprenants, ainsi qu'un enseignement de réduction de la charge qui gère le fardeau cognitif tout en permettant une autonomie progressive. Une prédiction d'une minute avant la tâche ne coûte rien et tombe exactement dans cette fenêtre.

**5. Exiger la récupération, l'explication et le transfert sans aide (rendement élevé, coût modéré).** Le produit assisté est un mauvais indicateur de la capacité réelle ; le moment noté doit en inclure un où l'outil est absent. La tâche ultérieure sans aide de [[think-first-chatgpt-later-2026|Wong et Qiu (2026)]] constitue cette mesure, et même leur groupe purement humain a reculé sur la suite plus difficile : le travail solo sans étayage n'était donc pas la réponse non plus. Alterner les modes dispose de soutiens : PAUSE rapporte le résultat de Kosmyna et al. (2025) à la quatrième séance, où les participants en mode « cerveau seul » qui ont ensuite utilisé ChatGPT ont surpassé les utilisateurs réguliers de LLM. La responsabilisation passe par l'explication : Makransky et al. (2025) ont trouvé qu'un agent conversationnel de tutorat qui incitait les étudiants à relier les idées et à expliquer leur raisonnement produisait de meilleures performances d'évaluation qu'un enseignement traditionnel.

## Ce qui ne fonctionne pas, et ce qui se retourne contre vous

- **La réduction de la friction.** Rendre la vérification moins coûteuse est le levier le plus faible du modèle de Biswas ; la barrière est sociale, non mécanique. Un meilleur détecteur de plagiat ne fait pas vérifier un étudiant.
- **L'interdiction ou la surveillance généralisée.** Les preuves plaident pour le placement, non pour la prohibition : l'outil n'est pas la variable, c'est sa place dans la tâche qui l'est.
- **Le travail solo sans étayage.** Le groupe purement humain de [[think-first-chatgpt-later-2026|Wong et Qiu (2026)]] a lui aussi reculé sur la suite plus difficile. Retirer l'outil sans soutenir l'apprenant n'est pas une intervention.
- **Le comptage des usages et les attitudes déclarées.** Les items de PAUSE enregistrent quand et à quelle fréquence l'IA intervient dans un flux de travail, et non si le raisonnement est resté engagé ; un utilisateur qui s'étaye soigneusement obtient donc un score de décharge. Agir sur ces chiffres pénalise les étudiants que vous voulez aider.
- **La satisfaction et la fluidité comme preuves.** Elles constituent l'illusion. Préférez la performance sans aide et le [[transfer-of-learning|transfert]] différé.
- **S'appuyer sur la littératie IA côté étudiants plutôt que soutenir les enseignants.** [[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] avertissent qu'un surinvestissement de ce côté peut être une mauvaise allocation.

## Reconcevoir la tâche pour que la dépendance soit le chemin le plus difficile

Quatre gestes portent l'essentiel du poids, aucun n'exigeant de politique institutionnelle.

**Conception de la tâche.** Demandez les propres idées, hypothèses ou un brouillon approximatif de l'étudiant avant que l'outil ne voie la tâche. Dans la condition encadrée de Wong et Qiu, la séquence était fixe : générer ses propres idées, collaborer avec ChatGPT pour les améliorer et les évaluer, puis affiner et rendre une solution de façon autonome. Configurez les outils pour qu'ils donnent des indices plutôt que des réponses partout où la compétence visée est ce que la tâche mesure.

**Exigences de vérification.** Faites de la vérification un livrable : vérification des sources, comparaison entre pairs, contrôle par l'enseignant, inscrits dans le devoir plutôt que supposés. Des normes de vérification visibles comptent plus qu'une vérification moins coûteuse.

**Démonstration en classe des modes de défaillance.** Faites la démonstration en direct : donnez une tâche, laissez les étudiants la résoudre avec une réponse d'IA assurée mais fausse, puis faites-leur vérifier cette réponse dans le texte du cours. Ajoutez les preuves : un assistant sans garde-fous a laissé les étudiants environ 17% moins bons à un examen sans aide, et les étudiants disposant de GPT-4 résolvaient plus de problèmes avec l'outil mais réussissaient moins bien que les témoins une fois celui-ci retiré. Une défaillance démontrée enseigne plus que dix avertissements.

**Révision de l'évaluation.** Gardez la première tentative difficile et la vérification finale sans aide exemptes d'IA (les deux moments que [[brcic-effortless-trap-productive-struggle-2026|Brcic et Frljic (2026)]] identifient comme protégés) et notez celle qui se fait sans aide. Demandez aux étudiants d'expliquer leur raisonnement et de travailler sur une tâche parallèle ou transférée, et lisez le produit assisté comme une performance, non comme un apprentissage. Lorsque la compétence visée est l'analyse plutôt que la mécanique, décharger la partie d'ordre inférieur peut servir la partie d'ordre supérieur : PAUSE cite Hong et al. (2025), où décharger délibérément des tâches rédactionnelles d'ordre inférieur pour libérer l'attention au profit de l'analyse et de la révision a produit de plus grands gains de pensée critique.

## Recherche d'aide saine contre décharge nuisible

Les preuves distinguent clairement ces deux cas, et votre grille d'évaluation devrait faire de même. [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg, Feldman-Maggor et Wong (2026)]] ont interrogé 20 étudiants universitaires en STEM et ont trouvé un processus en quatre étapes (décider si une aide est nécessaire, choisir une source, choisir le type d'aide, juger l'aide reçue) dans lequel les étudiants les plus forts privilégient l'aide *instrumentale* (indices, explications) plutôt que l'aide *exécutive* (solutions directes). Ils avertissent que recourir aux LLM pour déboguer ou pour programmer dans une autre langue peut contourner la [[problem-solving|résolution de problèmes]] autonome, même lorsque les étudiants évitent de demander des réponses.

L'usage instrumental (indices, exemples, explications, débogage que l'on corrige ensuite soi-même) correspond à la décharge duplicative qui tient bon quand l'outil disparaît. L'usage exécutif (prendre la production et la rendre) correspond à la décharge substitutive qui s'effondre. L'usage libre tend vers la seconde : dans l'expérience de [[think-first-chatgpt-later-2026|Wong et Qiu (2026)]] (N = 196), 70.9% des invites du groupe en usage libre n'étaient pas collaboratives et 59.6% demandaient simplement à ChatGPT de générer des idées directement. Le groupe encadré montre la signature inverse : 88.6% d'invites collaboratives, le seul type corrélé à l'originalité autonome ultérieure. Inscrivez cette distinction dans le devoir, exigez une invite collaborative et notez le raisonnement que les étudiants ajoutent.

## Qui est le plus exposé, et quand

[[lodge-loble-cognitive-offloading-2026|Lodge et Loble (2026)]] situent le risque du côté des connaissances préalables et de l'autorégulation, et nomment un **fossé métacognitif d'équité** : bien tirer parti de l'IA exige des ressources que les novices n'ont pas, si bien que les étudiants qui ont le plus besoin de s'entraîner sont les plus susceptibles de déléguer l'apprentissage lui-même. Ils rapportent que 80% des étudiants australiens utilisent déjà l'IA et que deux tiers des enseignants du début du secondaire le font aussi (OCDE 2025). [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] a trouvé que les participants de 17–25 ans montraient une dépendance à l'IA et une décharge plus élevées et une pensée critique plus faible que ceux de 46 ans et plus, et que le niveau d'études prédit une meilleure pensée critique indépendamment de l'usage de l'IA (r = +0.34), avec une interaction significative indiquant qu'il atténue l'effet négatif. [[genai-over-reliance-learning-2026|Gao, Sun et Khan (2026)]] ont trouvé que la polychronicité, une tendance au multitâche, modère ce chemin, les étudiants très polychrones étant davantage à risque.

Le contexte compte autant que la personne, et c'est là que votre cours peut agir. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] montre que la difficulté de la tâche et la qualité de l'IA fixent la ligne de base (la dépendance excessive passe d'environ 0.02 à 0.38 avec la difficulté ; sur les tâches difficiles, 0.38 avec une IA médiocre contre 0.16 avec une bonne IA) et que le regret le plus élevé vient d'une IA *de grande qualité* sur des tâches difficiles (0.441), parce que les agents s'en remettent trop à elle et s'appuient rarement sur eux-mêmes : c'est avec un modèle capable sur une tâche exigeante que la vérification s'arrête. L'exposition des pairs l'amplifie : lorsque la preuve sociale visible passe de 0 à 0.6, la vérification s'effondre de 0.29 à 0.002.

## « Mais... » : trois objections

**« Ce n'est que de la bonne pédagogie. »** En partie : il s'agit d'étayage, de rétroaction formative et de difficulté productive. Mais la vérification visible l'emportait sur une vérification moins coûteuse, et les deux moments protégés sont la première tentative difficile et la vérification finale sans aide. Faites les gestes familiers, dans le nouvel ordre.

**« Je ne peux pas le surveiller. »** Vous ne le pouvez pas, et les preuves indiquent que vous ne devriez pas essayer. Le résultat le plus solide ici vient du placement, non de la prohibition. Concevez la tâche pour que la présence de l'outil au mauvais moment se voie dans le travail lui-même (une réponse inexplicable, une étape de vérification manquante) plutôt que de compter sur la surveillance.

**« Mon cours est trop grand. »** Les leviers les moins coûteux passent à l'échelle. Une ligne de vérification exigée, une prédiction d'une minute avant la tâche et le déplacement de la vérification notée dans une salle sans IA coûtent quelques minutes par section. Le geste coûteux, une unité entièrement séquencée en mode « réfléchir d'abord », peut commencer par un seul devoir. Reprenez une série d'exercices et scindez-la en une moitié assistée et une moitié sans aide, puis regardez ce que l'écart vous dit.

## Ce qui n'est pas encore établi (à lire avant de vous engager)

Aucune étude de ce corpus ne teste si une intervention particulière contre la dépendance excessive tient dans différents contextes ou semestres. La conception « réfléchir d'abord » repose sur une seule expérience (N = 196), et le résultat sur le refus de répondre vient de la synthèse de [[brcic-effortless-trap-productive-struggle-2026|Brcic et Frljic (2026)]] plutôt que d'un essai qui lui soit propre. L'argument sur la friction est un commentaire conceptuel sans nouvelles données, dont la relation en U inversé repose sur un seul ancrage empirique et n'est pas quantifiée ; l'endroit où se situe l'optimum pour un apprenant donné n'est donc pas précisé.

[[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] énonce les limites de son modèle (qualité de l'IA exogène et stationnaire, réseau fixe, vérification stylisée) et nomme ce que des travaux futurs devraient estimer à partir de traces longitudinales : les taux de vérification par tâche, la force de la preuve sociale et la manière dont la confiance se met à jour après un usage vérifié ou non. La mesure reste le maillon le plus faible : les plans d'étude dominants sont des enquêtes, et [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] comme [[genai-over-reliance-learning-2026|Gao, Sun et Khan (2026)]] appellent à des suivis longitudinaux et expérimentaux. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE]] n'a aucune qualité psychométrique et a été conçu pour des adultes. La possibilité de combler le fossé d'équité par l'enseignement est théorique plutôt que démontrée.

## Votre liste d'actions pour cette semaine

1. Ajoutez une étape de vérification au prochain devoir : une phrase indiquant ce que l'étudiant a vérifié et par rapport à quoi.
2. Déplacez la vérification notée vers un moment sans IA, et notez celle-là.
3. Placez la première tentative difficile avant l'outil : idées, hypothèses ou brouillon avant que l'IA ne voie la tâche.
4. Configurez l'outil que vous recommandez pour qu'il donne des indices plutôt que des réponses.
5. Démontrez en direct un échec assuré de l'IA et faites-le repérer par les étudiants dans le texte du cours.
6. Ajoutez une prédiction d'une minute avant une unité difficile.
7. Remplacez une question de quiz par une question « expliquez votre raisonnement » sur le même contenu.
8. Demandez aux étudiants d'étiqueter leur usage de l'IA comme instrumental ou exécutif, et notez le raisonnement qu'ils ont ajouté.
9. Lisez le travail assisté comme une performance, non comme un apprentissage, et comparez-le à la vérification sans aide.
10. Traitez l'engagement et la satisfaction comme des indicateurs faibles, et préférez la performance sans aide et le [[transfer-of-learning|transfert]] différé.

## En quoi cette page diffère des FAQ voisines

[[does-ai-help-students-learn]] demande si l'IA produit un apprentissage et expose l'écart entre performance et apprentissage ; [[reduce-ai-cheating]] couvre l'intégrité, les limites de la détection et la sécurité des évaluations. Cette page suppose que les étudiants peuvent utiliser l'IA honnêtement et demande quelles conceptions gardent le raisonnement de l'apprenant dans la boucle.

Pour la recherche environnante, voir [[does-ai-help-students-learn]] et [[redesign-assessment-ai-era]], ainsi que les pages de concepts [[cognitive-offloading]], [[metacognition]] et [[desirable-difficulties]].