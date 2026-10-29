---
title: "Comment l'IA peut-elle m'aider à donner de meilleures rétroactions à grande échelle ?"
created: "2026-09-22T19:12:18-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
source_updated: "2026-10-28T11:29:19-04:00"
translation_of: faqs/ai-feedback-at-scale
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

C'est la sixième semaine. Vous avez une pile de brouillons, une grille à laquelle vous croyez, et la suspicion grandissante qu'un tiers de vos commentaires est survolé puis oublié. Un collègue mentionne qu'un outil commente désormais chaque brouillon dans l'heure. La réunion de département attend une réponse : est-ce une amélioration, ou une façon plus rapide de produire du texte que personne ne lit ?

Réponse courte à donner à un collègue : la rétroaction par IA gagne sa place sur la couverture, la rapidité et la cohérence, dans une bande étroite. Le travail linguistique de niveau relecture et les commentaires de premier passage guidés par une grille valent d'être automatisés. La portée est la partie bon marché. Dans une expérience randomisée par grappes portant sur 1.176 étudiants de première année, les conceptions réflexives et hybrides ont battu la critique directe par IA sur le [[transfer-of-learning|transfert]] différé et sans IA. Dans une expérience randomisée sur dissertation portant sur 70 étudiants, une rétroaction par IA mieux notée n'a produit pas de meilleures révisions que celle d'un enseignant expérimenté. Ce que l'étudiant fait d'un commentaire décide du résultat, et la [[feedback-literacy|littératie en rétroaction]] sépare les étudiants qui gagnent de ceux qui copient.

## La version courte

**1.** Décidez ce qui compte comme réussite avant de piloter quoi que ce soit : la qualité de la révision et la performance différée sans aide, pas la fluidité des commentaires.

**2.** Triez vos propres commentaires en corrections de niveau linguistique et en jugements de niveau interprétatif. Seule la première catégorie est candidate à l'automatisation.

**3.** Organisez les sources par étapes. Auto-évaluation d'abord, rétroaction par les pairs ensuite, critique par IA en troisième. Deux sources placées côte à côte produisent une reprise passive.

**4.** Donnez votre grille au modèle et faites-le raisonner étape par étape. Une consigne nue produit une sortie générique.

**5.** Gardez le message final, le ton et tout ce qui devient un document avec un humain.

**6.** Budgetez les heures que vous passerez à supprimer et à calibrer, et comparez-les aux heures que vous avez libérées.

## Décider ce qui compte comme réussite avant de piloter quoi que ce soit

La métrique tentante est la qualité de ce que le modèle écrit. C'est aussi la métrique qui trompe.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] ont réparti au hasard 70 étudiants rédigeant des dissertations argumentatives en persan en trois groupes. Une invite de chaîne de raisonnement a produit une rétroaction significativement mieux notée (M = 12.90) qu'une invite zéro-shot (M = 11.25, p = .01) et que celle d'un enseignant humain expérimenté (M = 11.20, p = .008). Le groupe chaîne de raisonnement n'a pas révisé ses dissertations significativement plus que le groupe avec rétroaction de l'enseignant, qui obtenait des gains comparables. De meilleurs commentaires, les mêmes révisions. Si votre critère de réussite est la qualité des commentaires, cette étude se lit comme une réussite. Si c'est ce qui a changé dans la dissertation, non.

Deux autres signaux flattent un pilote qui se passe mal, alors fixez-les à l'avance. La satisfaction des étudiants en est un. Dans le pilote universitaire de Deakin rapporté par [[tubino-adachi-ai-automated-feedback-literacy|Tubino et Adachi (2022)]], des notes moyennes positives coexistaient avec des erreurs signalées par les étudiants, si bien qu'une enquête à visages souriants n'est pas une preuve d'exactitude. L'usage est l'autre. L'outil de Deakin était facultatif, et l'usage atteignait en moyenne environ 13% des étudiants de licence et 12% des étudiants de master, alors que près de 4.000 étudiants y avaient accès. Les étudiants proactifs et à haut rendement l'utilisaient davantage. Voilà ce que rapporte le simple fait de rendre un outil disponible.

La mesure de résultat qui tient est la qualité de la révision plus la performance différée sans IA. Des remises multiples le même jour sont une trace utilisable de l'engagement effectif d'un étudiant. Elles ne prouvent pas qu'il a appris quelque chose.

## Trier ses commentaires avant de les automatiser

Prenez votre dernier jeu de commentaires et séparez-le en deux : les corrections de phrases, et les jugements sur la pensée. Cette séparation vous dit quoi automatiser, et elle est plus étroite que ne le laissent entendre les fournisseurs.

Le pilote de Deakin a été mené en 2021 avec l'outil de rétroaction automatisée par IA de FeedbackFruits, sur 29 unités et près de 4.000 étudiants. Il travaille sur des traits de texte micro : longueur des phrases, ponctuation, grammaire, structure du texte. Cela soutient l'étape de relecture, où l'enseignant fixe les paramètres, l'étudiant utilise l'outil de façon autonome, et la rétroaction arrive à temps pour être actionnable. C'est la division du travail qui passe à l'échelle, pas le modèle.

Les commentaires de niveau interprétatif sont là où vivent les modes de défaillance. [[learner-centered-feedback-ai|Aldino et al. (2026)]] ont recueilli les problèmes côté enseignants auprès de 21 enseignants du supérieur : ton incohérent (n = 7), désinformation potentielle (n = 5) et problèmes de confiance (n = 5). Leur effort de révision est allé à supprimer les louanges exagérées et les suggestions génériques plutôt qu'à ajouter du contenu. Cette liste est votre travail de relecture, et c'est là que passent les heures.

## Organiser les sources par étapes au lieu de les empiler

Les preuves de conception les plus solides viennent d'une expérience de terrain multisite, longitudinale et randomisée par grappes : 1.176 étudiants de première année dans 48 sections de 4 universités et 3 domaines [[stem-education|scientifiques]], randomisés au niveau de la section en conditions pairs seuls, GenAI directe, GenAI réflexive et hybride ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

La condition réflexive exigeait une auto-évaluation avant la critique par IA. L'hybride enchaînait auto-évaluation, puis rétroaction par les pairs, puis critique par GenAI. L'hybride a produit les gains de qualité argumentative les plus élevés et l'avantage le plus clair sur l'apprentissage conceptuel. Les conditions réflexive et hybride ont toutes deux produit une meilleure reprise de la rétroaction et plus d'[[self-regulated-learning|apprentissage autorégulé]] que la GenAI directe, et toutes deux l'ont surpassée sur le transfert différé sans IA. La GenAI directe a bien élevé la qualité argumentative immédiate au-dessus de la rétroaction par les pairs, ce qui est son avantage, et elle l'a fait avec un transfert plus faible.

Le mécanisme explique pourquoi le séquençage compte plus que l'outil. La critique directe invite à une reprise passive : l'étudiant lit un verdict et l'applique. Les conceptions réflexive et hybride forcent l'étudiant à interpréter le commentaire, à le comparer aux critères, à juger de sa pertinence puis à réviser. La valeur éducative dépend moins de l'accès à l'IA que de la question de savoir si l'environnement de rétroaction préserve l'[[agency|autonomie de l'apprenant]] et le [[evaluative-judgment|jugement évaluatif]] pendant la révision.

La rétroaction par les pairs gagne sa propre place dans la séquence. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen et Yan (2026)]] ont suivi deux classes d'anglais parallèles (N = 118 étudiants de première année en Chine ; GenAI n = 56, pairs n = 62) à travers trois cycles d'auto-évaluation sur un semestre. L'étayage par GenAI a amélioré la littératie en rétroaction légèrement mais significativement par rapport à la relecture par des pairs humains (ANCOVA p = 0.049, ηp² = 0.03). Les étudiants du groupe GenAI affinaient leurs invites de façon itérative et vérifiaient ou contestaient les sorties inexactes. Les étudiants du groupe pairs choisissaient leurs sources par commodité sociale et voyaient leur jugement évaluatif déformé par le biais d'amitié. La relecture par les pairs conservait une valeur distincte pour la conscience du public, ce qui explique pourquoi les auteurs proposent des conceptions multi-étapes avec rétroaction anonyme entre pairs plutôt qu'un remplacement.

L'avantage de Gu et al. était faible, et ils le lisent comme réel mais non transformateur à lui seul. L'étayage de l'enseignant, les lignes directrices d'invite et les fiches de travail ont fait le travail de soutien.

## Donner une grille au modèle, puis lui faire montrer ses étapes

La génération référencée à une grille est la partie automatisable.

Le gain de qualité de Farrokhnia et al. venait d'une invite de chaîne de raisonnement qui faisait parcourir au modèle une évaluation étape par étape contre une grille d'argumentation, et non d'une consigne nue de donner une rétroaction. Gu et al. ont donné à leur groupe GenAI ChatGPT-4o avec des grilles préentraînées et des lignes directrices d'invite, ce qui rendait la sortie vérifiable contre des critères énoncés. Dans les deux cas, l'invite est l'endroit où vos critères entrent dans le système, et la trace de raisonnement est ce qui vous permet de voir si le modèle les a appliqués.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson et Yan (2025)]] font de la qualité de l'invite la charnière de tout le processus. Des invites vagues produisent une sortie générique et inutile, et les commentaires générés peuvent être hallucinés, biaisés ou redondants, ce qui renvoie le jugement évaluatif au lecteur. La calibration est plus nette encore. Chez Farrokhnia et al., la qualité de la rétroaction par GenAI était significativement associée à la force du brouillon initial de l'étudiant, tandis que la qualité de la rétroaction de l'enseignant ne l'était pas. L'enseignant calibrait plus régulièrement. Le volume passe à l'échelle. La calibration, non.

## Garder le dernier mot et le document du côté humain

[[becerra-aicofe-feedback-2026|Becerra, Palma et Cobos (2026)]] décrivent AICoFE, qui fait tourner trois modèles affinés indépendamment (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) sur des scores de grille et des observations qualitatives pour produire des commentaires de brouillon indépendants. L'enseignant compose ensuite le message final en sélectionnant des phrases ou des paragraphes, avec une légende indiquant quel modèle a contribué à quoi. Le modèle rédige. L'enseignant délivre, et le livrable est signé par une personne qui a lu le brouillon.

Aldino et al. trouvent le même schéma « assister puis vérifier » dans la pratique ordinaire. La composante d'apprentissage automatique signalait le plus souvent comme manquant « Atteint l'objectif d'apprentissage » (20 des 21 enseignants l'avaient omis ; 16 ont accepté le signalement) et « Relation étudiant-enseignant » (14 omis ; 12 acceptés). Les enseignants décidaient de chaque suggestion selon leur jugement professionnel, ce qui est l'intérêt de les mettre dans la boucle.

Douze des 21 enseignants d'Aldino et al. ont fait d'autres révisions au niveau des phrases, et le schéma dominant était la calibration du ton : atténuer les louanges (f = 11), supprimer des suggestions (f = 9), supprimer des encouragements (f = 8). Les révisions se concentraient sur la dimension relationnelle, en particulier la relation étudiant-enseignant (f = 24). Ils protégeaient l'authenticité et la voix professionnelle, et ce travail ne s'automatise pas.

## Apprendre aux étudiants à lire le commentaire

La littératie en rétroaction est un prérequis, et elle est inégalement répartie.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths et Lodge (2026)]] ont fait faire à 32 étudiants de psychologie une tâche de dissertation de 25 minutes enregistrée à l'écran, avec un accès illimité à ChatGPT, puis leur ont fait revoir l'enregistrement lors d'un entretien stimulé par la vidéo. La littératie en rétroaction était le seul prédicteur positif significatif de la note de dissertation (β = 0.46, p = .017). La fréquence d'usage de la GenAI, la [[trust|fiabilité de la source]] et les [[prior-knowledge|connaissances préalables]] ne prédisaient pas la performance, un point que [[feedback-futures-genai|Zhan, Wood, Carless et Yan (2026)]] formulent aussi dans l'éditorial de leur numéro spécial. Moins d'un tiers des étudiants comparaient la sortie de l'IA à une autre source internet. La moitié exprimait un évitement délibéré de l'IA pour des raisons d'[[academic-integrity|intégrité académique]] ou parce qu'ils voulaient la dissertation dans leurs propres mots. La plupart demandaient une rétroaction au niveau de la tâche, qui se transfère mal à d'autres tâches.

Les extrêmes sont visibles dans la paire de rédacteurs IELTS que décrivent Zhan et al. Une étudiante à faible littératie écrivait une invite vague, obtenait une rétroaction générique, la croyait ou la surcopieait, et s'engageait superficiellement. Un étudiant à forte littératie écrivait une invite référencée aux critères, relançait, recoupait les sources et suivait ses révisions. La différence tenait à l'instruction et à l'habitude, pas à l'accès à l'outil.

Dites directement aux étudiants que les commentaires du modèle peuvent être hallucinés, biaisés ou redondants, et que c'est l'étudiant qui est responsable de la révision. Présentez la sortie comme une opinion provisoire à juger plutôt qu'une réponse à copier. Demandez ensuite la comparaison, puisque moins d'un tiers des étudiants la font spontanément.

## Ce que les enseignants comprennent mal ici

Plus de commentaires signifie plus de rétroaction. Les commentaires sont bon marché à produire et coûteux à absorber, et la contrainte se situe du côté de l'étudiant dans la boucle. Les commentaires par IA mieux notés de Farrokhnia et al. n'ont produit pas plus de révision que ceux de l'enseignant.

Un meilleur modèle corrigera la sortie générique. Les défaillances de l'outil de Deakin étaient des défaillances de périmètre : des traits de niveau phrastique, une bande étroite de relecture. Zhan et al. situent le remède dans l'invite, la grille ou l'humain, pas dans un modèle plus grand. La paire de rédacteurs IELTS en est la démonstration ; même outil, habitudes différentes, résultats différents.

Rendre l'outil disponible, c'est l'intervention. L'usage atteignait environ 13% des étudiants de licence et 12% des étudiants de master quand l'outil était facultatif. Le reste de la question de conception porte sur ce qui se passe pour les 87% autres.

Le gain de temps est automatique. Interrogés sur ce que l'outil de rétroaction par IA leur apportait, 21 enseignants n'ont cité le gain de temps que rarement (n = 2). Ils citaient bien plus souvent la réflexion (n = 14), l'amélioration de la langue et de la structure (n = 11) et l'identification des composantes manquantes (n = 10). L'édition (f = 32) et la suppression (f = 27) dominaient leur travail de révision, l'ajout étant rare (f = 8). Ce qui apparaît, c'est un brouillon et une invite diagnostique. Ce qui apparaît aussi, c'est du travail de relecture, de calibration et de vérification. [[ai-save-instructor-time|La question de la charge de travail]] est celle que l'on promet le plus souvent de faire disparaître, et la GenAI redistribue le travail enseignant plutôt qu'elle ne le supprime.

Les notes de satisfaction vous disent que les commentaires sont exacts. Dans le pilote de Deakin, des notes moyennes positives coexistaient avec des erreurs signalées par les étudiants. Échantillonnez la sortie contre votre propre lecture des mêmes brouillons et notez où le modèle était générique, faux ou flatteur.

## Ce qui va vous revenir dessus

**« La rétroaction par IA n'est pas personnelle. »** Souvent vrai, et c'est la raison de garder le dernier mot humain. AICoFE existe parce que la prose générique d'un modèle n'est pas ce qu'un étudiant devrait recevoir : l'enseignant sélectionne, modifie et signe le message final. Les 21 enseignants d'Aldino et al. ont réécrit le ton pour la même raison. La personnalisation est votre travail dans cette conception, et le modèle fait le travail de préparation.

**« Mes étudiants ne liront de toute façon pas la rétroaction. »** Ils lisent moins que nous l'espérons, et les preuves disent que le remède est la conception plutôt que le volume. La reprise dans le pilote de Deakin atteignait environ 13% et 12%. Les commentaires mieux notés de Farrokhnia et al. n'ont produit aucune révision supplémentaire. Ce qui a fait bouger les choses, c'est un séquençage qui force l'engagement — auto-évaluation, puis rétroaction par les pairs, puis critique par IA — plus trois cycles de révision sur un semestre qui ont produit des différences mesurables de littératie en rétroaction.

**« Ce n'est pas ce que les étudiants paient. »** Alors empêchez l'IA de devenir la seule voix qu'ils entendent de vous. La version défendable donne aux étudiants plus de moments de rétroaction pendant que vous passez vos heures sur les parties intensives en jugement : le dernier mot, la calibration, les commentaires qui portent votre autorité. Ce que les étudiants perdent dans un déploiement négligent, c'est la cohérence entre critères, commentaires et résultat. Spécifiez la complémentarité par le séquençage, la comparaison, l'édition et la gouvernance, et l'objection perd sa force. Laissez deux sources côte à côte et elle la garde.

**« Je n'ai pas le temps de relire tout ce que le modèle écrit. »** Alors ne relisez pas tout. Automatisez la bande où les erreurs sont bon marché à repérer, le travail linguistique au niveau des phrases, et échantillonnez la sortie de niveau interprétatif contre des brouillons que vous avez déjà notés. Les chiffres d'Aldino vous disent quoi chercher : le ton, la désinformation, les louanges exagérées, la redondance.

## À faire cette semaine

**1.** Triez votre dernier jeu de commentaires en corrections de niveau linguistique et en jugements de niveau interprétatif, et comptez chaque pile.

**2.** Écrivez l'invite référencée à la grille et étape par étape que vous donneriez à un modèle, et testez-la sur trois brouillons que vous avez déjà notés.

**3.** Échantillonnez la sortie contre vos propres commentaires et notez où le modèle était générique, faux ou flatteur.

**4.** Organisez un devoir en auto-évaluation, puis rétroaction par les pairs, puis critique par IA, et dites aux étudiants que l'IA est une opinion provisoire qu'ils sont censés contester.

**5.** Demandez une comparaison avec une seconde source ou avec les critères, puisque moins d'un tiers des étudiants le fait spontanément.

**6.** Notez quelle part de la rétroaction finale vient du modèle et quelle part vous avez modifiée. Le suivi de curation d'AICoFE est le modèle de ce registre.

**7.** Surveillez la fracture expert-novice. Les enseignants ayant plus de cinq ans d'expérience rapportaient plus de problèmes avec la sortie de l'outil que leurs collègues moins expérimentés, qui valorisaient l'étayage. Si vos collègues expérimentés voient plus de défaillances que vous, c'est une information sur votre propre calibration.

## Où aller ensuite

[[feedback]] est le concept chapeau de tout le système : la fourniture, la boucle, la reprise et le contexte d'évaluation. [[ai-feedback-quality|La qualité de la rétroaction par IA]] couvre ce qui rend les commentaires générés exacts, utiles, opportuns et pédagogiquement solides, et cette page est le milieu pratique, sur les combinaisons de ces éléments qui produisent une meilleure rétroaction à l'échelle.

Les questions sur ce qu'une note devrait signifier une fois l'IA impliquée, y compris la substitution de construit, les preuves de processus authentifiées et les règles d'intégrité, relèvent de [[redesign-assessment-ai-era|repenser l'évaluation à l'ère de l'IA]] et de [[assessment-validity|la validité de l'évaluation]] plutôt que d'ici. Pour le cas particulier de l'enseignement de l'écriture, voir [[writing-instruction-ai-best-practices|les bonnes pratiques pour l'enseignement de l'écriture dans le contexte de l'IA]].
