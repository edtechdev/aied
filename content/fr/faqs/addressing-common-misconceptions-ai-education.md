---
title: "Comment aborder les idées fausses courantes sur l'IA en éducation ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-10-29T08:08:36-04:00"
foundations: [academic-integrity, ai-literacy, cognitive-offloading, reducing-ai-misuse, teacher-role, teacher-ai-competency]
pedagogy: [misconceptions, refutation-text]
technology: [prompt-engineering]
assessment: [ai-detection, assessment-validity, feedback-literacy]
ethics: [equity-in-ai-education, pedagogical-safety, trust-calibration]
weight: 95
audience: [instructors, instructional designers, administrators, policymakers, learners, researchers, parents and families]
institutions: [governance]
source_updated: "2026-10-28T11:34:12-04:00"
translation_of: faqs/addressing-common-misconceptions-ai-education
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

Votre vice-recteur veut une fiche d'une page sur les « mythes de l'IA » pour la réunion de faculté du printemps. Ou bien un membre du conseil d'administration a lu que les agents conversationnels détruisent l'esprit critique et veut une position pour vendredi. Ou bien c'est vous qui devez expliquer par écrit pourquoi le département ne se contentera pas d'interdire l'outil, et vous avez épuisé toutes les façons de dire qu'une interdiction n'est pas une pédagogie.

Chaque croyance de cette page part de quelque chose qu'une personne raisonnable a observé. Une prose fluide se lit effectivement comme exacte. Un devoir soigné ressemble effectivement à un apprentissage. Un tuteur qui répond à la question donne effectivement l'impression d'aider, et une politique contenant le mot « interdit » donne effectivement l'impression d'une décision. La correction qui fonctionne nomme ce que l'observation ne peut pas vous dire, puis remet à la personne un test qu'elle peut faire dès lundi.

La réponse à donner à un collègue, d'un seul souffle : l'effet pédagogique de l'IA dépend de qui l'utilise, pour quelle tâche, quel travail cognitif l'outil accomplit, quelle responsabilité reste à la personne, et comment l'apprentissage est évalué. La confiance, la rapidité, l'engagement et l'achèvement de la tâche sont des caractéristiques de l'usage. Aucune d'elles ne prouve que la capacité a changé.

## La version courte

**1.** Rendez compte de ce qu'un apprenant sait faire outil fermé, et désignez cette mesure comme celle qui compte.

**2.** Rédigez la condition d'usage de l'IA étape par étape de la tâche, en nommant l'acte plutôt que l'outil.

**3.** Jugez un tuteur, une fonction de rétroaction ou une plateforme à ce que l'étudiant fait après la réponse.

**4.** Achetez des preuves plutôt que des promesses de capacités : résultats sans aide, résultats par sous-groupe, tests de sécurité multi-tours.

**5.** Quand vous corrigez une croyance, remplacez-la par un meilleur modèle et par une activité qui laisse la personne constater l'échec de l'ancien.

## Décider ce qui compte comme preuve d'apprentissage

Cinq croyances déterminent si le reste de cette page a une importance. Chacune prend un signal réel et y lit une conclusion que ce signal ne peut pas porter.

### « Ils ont mieux réussi avec l'outil ouvert, donc ils ont plus appris. »

Dans une expérience de terrain menée auprès de près de 1 000 lycéens en [[math-education|mathématiques]], un accès libre à l'IA générative a amélioré la performance pendant la pratique assistée et réduit la performance ultérieure à l'examen sans assistance. Une version encadrée par des garde-fous, fournissant des indices plutôt que des réponses complètes, a éliminé le [[ai-misuse-learning-harm|préjudice d'apprentissage]] observé ([[generative-ai-guardrails-harm-learning|Generative AI Without Guardrails Can Harm Learning]]). Les deux résultats sont réels, et ils portent sur des mesures différentes : une seule d'entre elles est la mesure qu'un relevé de notes atteste. L'étude vous donne une orientation et aucune taille d'effet pour votre cours.

Les étudiants font la même inférence sur leur propre travail, et la réponse est la même : le produit montre ce que l'étudiant et l'outil ont produit ensemble. Quatre questions posées fenêtre de discussion fermée vous disent ce qui s'est passé. Savent-ils expliquer le raisonnement ? Résoudre un problème semblable ? Repérer les faiblesses de la réponse générée ? Transposer l'idée dans un nouveau contexte ? Si les réponses honnêtes sont non, vous regardez une performance assistée sous le nom d'apprentissage. Placez l'une de ces quatre exigences dans l'[[assessment]] et dites-le dans la grille d'évaluation.

### « Les étudiants aiment la rétroaction, donc la rétroaction fonctionne. »

La satisfaction est une preuve d'acceptabilité. Les étudiants préfèrent une rétroaction immédiate, encourageante, détaillée et facile à suivre, et une réponse peut réunir ces quatre propriétés tout en étant inexacte, générique, mal hiérarchisée ou orientée vers un autre objectif que le vôtre. Les questions qui tranchent sont ternes et méritent d'être écrites : est-elle exacte, diagnostique-t-elle le problème réel, est-elle assez précise pour agir, est-elle calibrée pour cet apprenant, l'étudiant l'utilise-t-il, la révision s'améliore-t-elle, la performance indépendante ultérieure s'améliore-t-elle. Les deux dernières sont celles qu'une enquête de satisfaction ne peut pas atteindre. [[ai-feedback-quality|AI Feedback Quality]] et [[feedback-literacy|Feedback Literacy]] portent le détail, et le geste pratique consiste à lire vingt réponses au regard de votre propre objectif avant de généraliser quoi que ce soit.

### « L'effet moyen était positif, donc l'intervention aide les étudiants. »

Les moyennes masquent exactement la variation qui décide d'une question d'équité. Les effets diffèrent selon les connaissances préalables, l'âge, la discipline, la langue, le handicap, les compétences métacognitives, l'accès, la mise en œuvre par l'enseignant et le type d'usage de l'IA. Un petit gain moyen peut masquer un bénéfice réel pour un groupe et un préjudice pour un autre ; un gain important peut dépendre de conditions que votre établissement ne peut pas reproduire. Demandez des estimations par sous-groupe avec leur incertitude, la fidélité de la mise en œuvre, ce que les étudiants ont réellement fait dans l'outil, et le schéma d'attrition. [[limitations-in-aied-research|Limitations of the AIED Evidence Base]] et [[research-methods-aied|Research Methods in AIED]] exposent les comparaisons qui vous rapprochent de la réponse, et [[equity-in-ai-education|Equity in AI Education]] explique pourquoi le tableau par sous-groupe constitue le résultat.

### « Ils ont déclaré avoir beaucoup appris. »

L'auto-déclaration mesure la perception, l'acceptation, l'anxiété et le [[self-efficacy|sentiment d'efficacité personnelle]], et elle excelle dans ces quatre domaines. Ce n'est pas une mesure d'une capacité démontrée, car on peut être confiant et se tromper, ou compétent et manquer de confiance. La synthèse du wiki sur la recherche en littératie en IA des enseignants rapporte un écart substantiel entre l'auto-évaluation et la performance mesurée, et les enseignants qui y figurent surestimaient considérablement leur compétence ([[ai-literacy-assessment-misalignment|AI Literacy Assessment: Self-Reported vs. Performance Misalignment]]). Associez chaque auto-déclaration à une tâche : identifier une erreur dans une sortie, vérifier une source, choisir une stratégie d'usage, repérer un biais ou une complaisance, réviser une réponse défaillante, calibrer sa confiance sur l'exactitude. Un seul de ces items dans une enquête transforme une opinion en résultat.

### « Un étudiant simulé est un substitut bon marché d'un étudiant réel. »

La simulation est utile pour prototyper, éprouver en charge et générer des scénarios, et elle ne constitue pas une preuve sur l'apprentissage humain tant qu'elle n'a pas été validée auprès de personnes. Un modèle peut imiter le langage de la confusion sans la persistance, la motivation, les connaissances préalables, l'émotion ou la trajectoire développementale d'un apprenant, et les recherches résumées dans le wiki ont constaté que des étudiants simulés abandonnaient une conception erronée assignée après une correction minimale, ce qui fait douter qu'ils représentent le changement conceptuel ([[simulating-students|Simulating Students]], [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]]). Servez-vous-en pour trouver les défauts de votre invite avant que de vrais étudiants y soient confrontés, puis considérez toute affirmation sur les apprenants comme non validée.

## Fixer la condition d'usage de l'IA à l'étape qui porte l'apprentissage

Les règles échouent quand elles portent sur un outil et réussissent quand elles portent sur un acte. Les croyances ci-dessous sont celles qui maintiennent les politiques dans le flou.

### « Tout usage de l'IA est de la triche. »

La croyance symétrique est pire : que l'usage de l'IA ne peut pas être de la triche puisque aucune personne n'a été copiée. L'intégrité dépend de la finalité du travail, des règles de l'enseignant, de la part du travail accompli par l'outil, de l'attribution ou non de l'usage, et du point de savoir si l'IA a remplacé la capacité évaluée. Le remue-méninges est autorisé dans un travail, exigé dans un autre et disqualifiant dans un troisième, et les trois sont défendables ([[academic-integrity|Academic Integrity]]). Le geste pédagogique consiste à mettre cinq questions devant les étudiants avant qu'ils ouvrent quoi que ce soit : que ce travail doit-il démontrer que je sais faire, quelle aide est autorisée, suis-je encore l'auteur et le décideur, puis-je défendre le travail remis, et dois-je le déclarer. [[ai-use-disclosure|AI Use and Disclosure Statements]] montre à quoi ressemble un formulaire de déclaration utilisable.

### « Si personne ne peut le détecter, il n'y a pas d'inconvénient. »

La détection répond à une autre question que celle qui importe. Une externalisation non détectée laisse malgré tout un étudiant incapable d'expliquer le travail, de répondre à une relance, de l'adapter ou de faire sans l'outil, et l'écart ressort plus tard dans un [[summative-assessment|examen]], un processus d'agrément professionnel, un stage ou un premier emploi. Les notes s'éloignent de la capacité alors que les deux ont l'air intactes. C'est un problème de certification avant d'être un problème de discipline, ce qui est l'argument de [[assessment-validity|Assessment Validity]] et de [[authentic-assessment|Authentic Assessment]]. Pour un étudiant, le recadrage utile est que la note est une affirmation sur lui, et que cette affirmation doit survivre à la pièce suivante où elle sera testée.

### « Le problème, c'est la fréquence d'utilisation. »

La fréquence ne vous dit rien. Un étudiant peut utiliser l'IA quotidiennement pour comparer des explications, générer des exercices et obtenir de la rétroaction tout en restant cognitivement actif, et un autre peut l'utiliser une fois pour produire l'argument que le travail existait à susciter. La question qui les départage est la couche de pensée déléguée et le point de savoir si l'étudiant sait encore accomplir cette couche seul, distinction que [[student-ai-interaction|student-AI interaction]] documente en détail. La correction grammaticale est très loin des affirmations, des preuves et des contre-arguments d'une dissertation. Le geste consiste à rendre la couche explicite dans la tâche : nommez la pensée que le cours enseigne, autorisez l'aide partout ailleurs, et vérifiez la couche nommée sans aide.

### « Un achèvement plus rapide signifie un apprentissage plus efficace. »

L'IA supprime le travail de forme, la confusion de mise en page et la répétition, ce qui est un gain. Elle supprime aussi la récupération en mémoire, la planification, la rédaction, la correction et la révision par lesquelles la compétence se forme, ce qui est la perte. La distinction qui résiste au contact d'un travail réel est celle entre décharge cognitive de soutien et décharge cognitive de substitution : l'une libère l'attention pour une pensée plus difficile, l'autre accomplit la pensée que vous étiez censé apprendre ([[cognitive-offloading|Cognitive Offloading]], [[reducing-ai-misuse|Reducing AI Misuse]]). Une séquence qui empêche la seconde d'advenir est courte. Faites une tentative, consultez l'outil pour des indices, des exemples ou une comparaison, révisez selon votre propre jugement, puis produisez une brève explication sans aide. La difficulté n'est pas le but ; préserver le travail cognitif l'est.

### « Une interdiction générale est la règle la plus sûre et la plus juste. »

Les conditions sans IA sont justes quand la performance indépendante est la capacité évaluée : certains examens, la pratique fondamentale, les vérifications de compétence professionnelle. Une interdiction universelle est un autre instrument, et elle pousse l'usage sous terre, est difficile à appliquer de manière cohérente et bloque la [[ai-literacy|littératie en IA]] dont les étudiants ont besoin après la fin du cours. Quatre conditions au niveau de la tâche couvrent davantage de terrain : IA exigée, IA autorisée avec déclaration, IA restreinte à des fonctions nommées, IA interdite parce que l'aide invaliderait l'affirmation d'apprentissage. Les étudiants suivent des limites qu'ils comprennent, donc la règle doit porter sa raison et rester cohérente entre le plan de cours, la consigne du travail, la rétroaction et la notation. [[framing-ai-use-for-students|Framing AI Use for Students]] et [[educational-policy-ai|Educational AI Policy]] sont les modèles.

## Jugez un tuteur à ce que l'étudiant fait ensuite

Un système qui produit la réponse et un système qui produit un apprenant sont des produits différents, et la sortie ne décrit jamais que le premier.

### « Donnez aux étudiants un tuteur puissant et l'apprentissage s'améliorera. »

L'accès n'est pas une conception pédagogique. Le même modèle soutient l'apprentissage quand il exige d'abord une tentative, donne des indices plutôt que des solutions, demande un raisonnement, corrige les conceptions erronées, estompe progressivement son aide et se termine par une vérification sans aide. Il le sape quand il répond immédiatement, fait la planification et récompense la recherche de réponse. La valeur réside dans l'enveloppe [[pedagogy|pédagogique]], ce qui est l'argument de [[learning-design|Learning Design]] et la logique de conception derrière [[scaffolding|l'étayage]]. Avant de déployer un tuteur, faites-vous passer une leçon par lui et comptez combien de fois il vous laisse éviter de penser.

### « Un tuteur qui donne la bonne réponse est un bon tuteur. »

L'exactitude est nécessaire et insuffisante. Une réponse exacte peut arriver trop tôt, révéler trop et contourner les [[desirable-difficulties|difficultés souhaitables]] qui font tenir la récupération en mémoire. Un tuteur plus fort diagnostique avant d'intervenir, demande plutôt que dit, donne le plus petit indice utile, exige une explication, répond à l'erreur précise, estompe son aide et vérifie la performance sans aide plus tard. Évaluez-le à ce que les étudiants remarquent, tentent, expliquent, révisent et finissent par faire seuls, ce qui est la norme de [[intelligent-tutoring|Intelligent Tutoring Systems]] et de [[pedagogical-safety|Pedagogical Safety]].

### « Plus d'automatisation et de personnalisation, c'est mieux. »

La [[personalized-learning|personnalisation]] peut soutenir l'apprentissage et peut devenir une adaptation excessive. Quand le système planifie, surveille, décide de ce qui importe et accomplit les étapes difficiles, l'étudiant devient plus rapide et moins autonome, et l'[[self-regulated-learning|autorégulation]] est ce qui quitte discrètement la pièce. Le problème de conception est de retirer les obstacles inutiles tout en préservant l'effort lié à l'objectif. Les fonctions qui tiennent : tentatives obligatoires, invites d'explication, indices différés, aide ajustable, estompage de l'étayage, réflexion sur les recommandations du système, pratique périodique sans aide et moyen visible de le contourner. [[agentic-ai|Agentic AI]] et [[agency|autonomie]] traitent de ce qui se passe quand le système commence à prendre les décisions.

### « Un modèle plus grand rend un tuteur plus sûr. »

La capacité générale et la qualité pédagogique sont des propriétés distinctes, et un modèle plus grand peut résoudre des problèmes plus difficiles tout en échouant à choisir une stratégie, à retenir une réponse, à s'ajuster à un niveau de développement, à préserver l'[[productive-failure|échec productif]], à signaler l'incertitude ou à rester dans vos objectifs d'apprentissage. Une étude de conception participative menée avec six enseignants du secondaire est l'énoncé le plus clair de l'origine réelle de la sécurité. Les enseignants ont conçu indépendamment des « experts bornés » : une capacité étroite dans un domaine défini sous supervision humaine, avec deux lignes qu'ils ne franchiraient pas (l'autorité, parce que la responsabilité de l'apprentissage des élèves ne peut pas être déléguée, et l'expertise, parce que le modèle ne connaît pas les élèves individuels ni les normes de la classe) et trois couches protectrices (limites de domaine, contenu filtré avec refus standardisés, et reprise en main par l'enseignant). Ils ont demandé une journalisation complète des conversations et des alertes en temps réel plutôt que de meilleures explications de la part du modèle ([[reichert-human-centered-llm-chatbot-design-teachers-2026|bounded-expert chatbot design]]). Le périmètre et la supervision ont fait le travail que l'échelle ne pouvait pas faire. [[learning-theories|Learning Theories]] et [[llm-training-and-fine-tuning|LLM Training and Fine-Tuning]] couvrent le versant conception.

### « Plus de rétroaction, c'est une meilleure rétroaction. »

Le volume est la chose la plus facile à augmenter et la moins corrélée au progrès. Une réponse qui commente chaque point peut ensevelir le seul changement qui compte, et elle peut arriver au mauvais moment, être générique ou fausse. Une rétroaction mérite sa longueur en identifiant la prochaine étape la plus importante pour cet apprenant à ce point de la tâche. Mesurez si les étudiants la comprennent, savent en juger la qualité, révisent grâce à elle, perdent la conception erronée et réussissent mieux plus tard sans elle. [[feedback|Feedback]] et [[feedback-literacy|Feedback Literacy]] exposent la séquence, et le test pratique est de savoir si un étudiant peut dire en une phrase ce qu'il fera autrement.

### « L'IA détruit l'esprit critique. »

Elle peut remplacer l'esprit critique ou en devenir l'objet, et le travail décide lequel. Une tâche affaiblit l'[[student-engagement|engagement]] quand les étudiants demandent une interprétation toute faite et l'acceptent, et le renforce quand ils prédisent avant de consulter, comparent leur raisonnement à celui du modèle, traquent les affirmations non étayées, améliorent une réponse faible, choisissent entre des options et expliquent pourquoi ils ont écarté une recommandation. La distinction utile est le rôle que joue l'outil : entraîneur, contradicteur ou source à évaluer, plutôt que substitut du raisonnement de l'apprenant. [[critical-thinking|Critical Thinking]] et [[learning-design|Learning Design]] portent les conceptions de tâches.

## Décider ce qu'un fournisseur doit vous montrer avant de signer

C'est ici qu'une conception erronée devient un contrat pluriannuel. Aucune des questions ci-dessous n'exige d'expertise technique, et toutes exigent d'être posées avant la date de renouvellement plutôt qu'après.

### « Acheter une plateforme avancée transformera l'enseignement. »

Une plateforme fournit des capacités. L'amélioration exige un alignement entre le [[curriculum-design|programme]], l'évaluation, le développement professionnel du corps enseignant, le soutien technique, l'accessibilité, la protection des données, la gouvernance, la charge de travail et l'évaluation locale, et sans cela un établissement achète un système sophistiqué qui est utilisé de façon incohérente, duplique le travail, alourdit la charge des enseignants ou produit une démonstration impressionnante sans gain mesurable. Précisez six choses avant l'achat : le problème pédagogique, les utilisateurs et cas d'usage visés, les résultats considérés comme une réussite, les données collectées, la supervision humaine requise et les conditions dans lesquelles vous modifieriez ou arrêteriez l'usage. [[administrator|AI from the Administrator Perspective]] et [[ai-ed-evaluation|AI Ed Evaluation]] sont les cadres à emporter en réunion.

### « Le score au benchmark prouve son efficacité pédagogique. »

Un benchmark mesure la performance dans les conditions du benchmark. Un modèle peut résoudre des problèmes difficiles, rédiger des explications fluides et obtenir une bonne note sur une grille d'évaluation de tutorat tout en échouant à améliorer la rétention, le [[transfer-of-learning|transfert]], l'[[self-regulated-learning|autorégulation]] ou l'équité des résultats. Gardez les résultats de benchmark séparés de la fiabilité technique, de la qualité pédagogique, de la sécurité, de l'[[usability-research|utilisabilité]], de la charge de mise en œuvre, de l'adoption en classe et des [[learning-gains|gains d'apprentissage]] sans aide. Seule une expérimentation sur le terrain avec de vrais apprenants, une condition de comparaison pertinente et une mesure de résultat sensée répond à la question que vous tranchez réellement ([[benchmark]]). Les chercheurs doivent la même discipline dans l'autre sens : dites quel maillon de cette chaîne une étude occupe.

### « C'est fiable, donc les notes sont valides. »

La fiabilité est la constance, la validité est le point de savoir si l'interprétation et l'usage de la note sont justifiés, et les deux peuvent fortement diverger. Un vaste benchmark britannique a noté 761 véritables dissertations de psychologie de niveau licence et a constaté que les notes de l'IA et celles des humains concordaient sur la classe de mention seulement 35-65% du temps (63% dans un établissement, 53% dans un second, 35% dans un troisième), tandis que la fiabilité de renotation était quasi parfaite, avec des corrélations intra-classe allant jusqu'à 1.00. Les trois modèles s'accordaient bien plus étroitement entre eux qu'avec les humains (ICC 0.91) et concordaient sur la classe pour 56% des copies quand tous les trois devaient être d'accord. Les notes se sont comprimées vers le milieu (score de compression 0.47-0.82), si bien que le système était le moins exact exactement aux frontières qui séparent une mention très bien d'une mention bien, ou une réussite d'un échec. Sa rétroaction était trois à huit fois plus longue que la moyenne humaine de 100-200 mots ([[opraise-automated-marking-ai-assessment-2026|automated marking of university essays]]). Demandez la couverture du construit, la comparaison avec le jugement humain, la performance par sous-groupe, les schémas d'erreur, l'incertitude et les conséquences de l'usage, ce qui est l'argument de [[educational-measurement|Educational Measurement]] et de [[automated-assessment|Automated Assessment]].

### « Une seule conversation bien conduite montre que le tuteur est sûr. »

Les préjudices pédagogiques s'accumulent au fil d'une interaction. Un système peut répondre correctement à une invite puis, au fil des tours, commencer à fournir des réponses, renforcer une conception erronée, encourager la dépendance ou sortir de son rôle de tuteur. Le benchmark SafeTutors résumé dans le wiki a constaté une forte augmentation des défaillances de sécurité pédagogique lorsque les systèmes étaient évalués sur plusieurs tours plutôt que sur un seul échange ([[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]]). Exigez des conversations soutenues, des erreurs répétées d'étudiants, des tentatives d'obtention de réponse directe, des scénarios émotionnels et relationnels, des invites adversariales et une mesure de la dépendance dans le temps. Ce type de preuve issue de benchmarks n'est pas une estimation de l'apprentissage en classe, et c'est le minimum sur lequel une affirmation de sécurité devrait reposer.

### « La relecture humaine est un correctif temporaire en attendant que les modèles s'améliorent. »

La relecture est une fonction de responsabilité, non une fonction de correction d'erreur, parce que quelqu'un doit décider si une sortie convient à un apprenant, un cours, une culture ou une décision lourde de conséquences particuliers, interpréter l'exception, fournir le contexte que le modèle n'a pas et répondre du résultat. Un dispositif sérieux nomme qui relit, quelles preuves cette personne voit, quand la relecture a lieu, de combien de temps elle dispose, si elle peut passer outre, qui est responsable de l'action finale et comment un étudiant fait appel. Un relecteur sans temps, sans autorité ou sans information est une signature ([[human-in-the-loop-ai|Human-in-the-Loop AI]]).

### « L'accessibilité, la vie privée et l'équité peuvent s'ajouter une fois le produit de base fonctionnel. »

Ce sont des exigences de conception. Le mode de saisie, le niveau de lecture, les hypothèses linguistiques, les exigences matérielles, la conservation des données, la personnalisation et les biais du modèle décident qui peut utiliser le système et qui en subit le préjudice, et un ajout après coup tend à améliorer l'interface tout en laissant intacts le flux de travail, le modèle de données et la logique de décision. Associez tôt les apprenants et les enseignants concernés, testez avec des utilisateurs divers, collectez le minimum, proposez des solutions de remplacement accessibles et examinez les résultats différenciés. Un système dont les bénéfices sont inaccessibles ou inégalement répartis n'est pas pédagogiquement efficace, quelle que soit sa moyenne ([[accessibility]], [[universal-design-for-learning|Universal Design for Learning]], [[privacy]]).

### « Un agent conversationnel est sûr pour les enfants s'il bloque les contenus toxiques. »

La modération de contenu couvre les mots et les sujets interdits. Un système poli peut malgré tout répondre trop vite, renforcer une conception erronée, encourager une dépendance affective, collecter des données inappropriées, offrir des conseils inadaptés au développement, poser des hypothèses inaccessibles, se substituer à un soutien humain et réduire l'effort productif. Les produits destinés aux enfants exigent une évaluation de la sécurité des contenus, de la sécurité pédagogique, de la vie privée, de l'accessibilité, de l'influence relationnelle et des effets d'un usage répété, ce qui est la norme de [[k-12|K-12 AI Education]] et de [[pedagogical-safety|Pedagogical Safety]].

## Décider ce que vous accepterez comme preuve de la capacité de l'étudiant

Vous n'établirez jamais comment un fichier a été produit. Vous pouvez établir, à faible coût, si l'étudiant sait faire ce que le fichier semble montrer, et c'est la seule affirmation qu'une note doit soutenir.

### « Les enseignants expérimentés reconnaissent un travail généré par l'IA. »

Pas de manière assez fiable pour traiter un soupçon comme une preuve. Un texte généré peut être retouché, mêlé à une écriture humaine, traduit, reformulé ou produit par plusieurs systèmes, et le jugement humain s'infléchit selon le style d'écriture, l'origine linguistique, le handicap et les attentes sur la façon dont un étudiant particulier devrait s'exprimer. Les détecteurs partagent le problème et y ajoutent les faux positifs comme les faux négatifs, ce qui explique qu'un signalement justifie un examen plus attentif et jamais une conclusion ([[ai-detection|AI Detection]]). La vérification est l'alternative défendable : demandez à l'étudiant d'expliquer le raisonnement, de discuter les sources, de réviser un passage, d'appliquer l'idée à un cas nouveau ou de montrer des traces du processus. Chacune de ces options évalue directement la compréhension, et chacune est peu coûteuse.

### « La détection et la surveillance à distance résoudront le problème d'intégrité. »

La détection estime si un artefact ressemble à un travail produit par une machine. L'éducation a besoin de preuves que l'apprenant détient la capacité, et les chiffres du côté de la détection sont désormais assez précis pour être cités en commission. Une analyse de justice procédurale rapporte qu'aucun des quatorze premiers outils de détection n'atteignait 80% d'exactitude, que la reformulation ou une légère retouche divise à peu près par deux une exactitude déjà modeste, et que les outils classent systématiquement à tort les rédacteurs non anglophones natifs, parce que les traits lus comme des signaux d'IA caractérisent aussi une écriture compétente en langue seconde. Dans une étude de terrain dissimulée, 94% des copies entièrement générées par IA injectées dans des examens en ligne en direct, dans cinq modules de psychologie, sont passées inaperçues, et le travail de l'IA a en moyenne obtenu de meilleures notes que les vrais étudiants. L'université Vanderbilt a désactivé son détecteur sous licence après n'avoir pas réussi à valider un taux de faux positifs annoncé de 1%, taux qui implique environ 750 étudiants mal étiquetés sur 75.000 copies annuelles ([[teichmann-detecting-undetectable-misconduct-2026|undetectable misconduct]]). La surveillance à distance ajoute des coûts de vie privée, d'accessibilité, d'anxiété et d'équité sans établir davantage l'apprentissage. La stratégie durable est une combinaison : attentes expliquées, conditions sans IA là où elles ont leur place, traces du processus et travail par étapes, vérification orale ou écrite, déclaration spécifique à la tâche, [[assessment|refonte de l'évaluation]] et procédures relues par des humains avec une voie de recours. [[remote-proctoring|Remote Proctoring]] et [[reduce-ai-cheating|How Can We Reduce AI Cheating?]] apportent le détail opérationnel.

### « Un travail soigné démontre une compétence professionnelle. »

Il démontre la performance d'une personne plus un outil. La compétence se voit à la capacité de formuler le problème, d'énoncer les hypothèses, de vérifier les preuves, de saisir une erreur subtile, de s'adapter quand les conditions changent, de défendre la recommandation et d'exercer un jugement essentiel sans aide inappropriée. L'usage responsable de l'IA est lui-même une compétence professionnelle légitime, si bien que la tâche consiste à séparer l'usage efficace de l'outil de l'apparence d'expertise que l'outil fournit ([[career-development-and-readiness|Career Development and Readiness]]).

### « La littératie en IA, c'est savoir rédiger une bonne invite. »

L'art de l'invite est une compétence opérationnelle parmi d'autres. Le périmètre qui compte pour un enseignant ou un salarié est plus large : ce que les [[ai-technologies|systèmes d'IA]] peuvent et ne peuvent pas faire de manière fiable, comment évaluer l'exactitude et le biais, comment l'IA affecte la validité de l'évaluation, quand la décharge devient un déplacement, les exigences de vie privée et d'accessibilité, comment l'usage s'inscrit dans la discipline, et quand ne pas l'utiliser du tout. La synthèse du wiki a constaté que les enseignants surestimaient substantiellement leur compétence en IA lorsque les auto-déclarations étaient comparées à des mesures de performance, et que la compétence démontrée prédisait bien mieux l'intégration en classe que la confiance ([[ai-literacy-assessment-misalignment|AI Literacy Assessment: Self-Reported vs. Performance Misalignment]]). Les techniques d'invite vieillissent aussi plus vite que le jugement. Enseignez le [[prompt-engineering|Prompt Engineering]] comme une compétence et évaluez la [[teacher-ai-competency|Teacher AI Competency]] comme la compétence plus large.

### « Les connaissances disciplinaires fondamentales sont obsolètes puisque l'IA peut les retrouver. »

La supervision dépend de l'expertise qu'une automatisation lourde décourage de construire. Sans connaissances du domaine, une personne ne peut pas voir la conclusion fausse plausible, la contrainte manquante, la recommandation dangereuse, la comparaison invalide, la référence fabriquée, l'hypothèse biaisée ou la situation où l'outil ne devrait pas être cru du tout ([[prior-knowledge|Prior Knowledge]], [[trust-calibration|Trust Calibration]]). Les programmes peuvent reconsidérer ce qui est mémorisé et quels outils restent disponibles. Retirer le fondement parce que l'outil peut produire une réponse retire la base pour juger la réponse.

### « Enseigner un usage critique et éthique de l'IA coûte en productivité. »

Une automatisation non vérifiée produit des reprises, des incidents de sécurité, des décisions discriminatoires, une exposition juridique, un dommage réputationnel et une fausse confiance, et chacun de ces éléments est un coût que le chiffre de productivité n'a pas compté. L'employé qui vaut la peine d'être recruté est celui qui répartit le travail entre les personnes et les outils tout en tenant la qualité, la confidentialité, la responsabilité et le jugement professionnel. C'est un argument de productivité, formulé dans la direction que le bilan comptable manque habituellement ([[human-ai-collaboration|Human-AI Collaboration]], [[governance|AI Governance]]).

## Répondre à ce que croient les étudiants

Les étudiants arrivent avec des théories de travail, et la plupart ont été construites à partir de quelque chose que l'outil a réellement fait. Corriger la théorie fait partie de l'enseignement, et cela demande un meilleur modèle plutôt qu'un avertissement.

### « Si la réponse semble assurée et détaillée, elle est probablement juste. »

L'assurance et la fluidité sont des propriétés du langage généré, non des preuves de vérification. Le modèle prédit un texte plausible et ne confronte pas les affirmations aux preuves, si bien qu'il peut inventer des sources, se tromper sur les faits, perdre le contexte et répéter une conception erronée dans une prose excellente. Traitez la sortie comme une hypothèse et inspectez ce dont la réponse dépend : les sources, le calcul, la comparaison avec les supports de cours. Le test à enseigner est de savoir si l'étudiant accepterait la même affirmation d'une personne inconnue qui n'apporterait aucune preuve ([[hallucination-risk|Hallucination Risk]]).

### « L'IA me comprend et sait ce que je veux dire. »

Elle réagit au langage, utilise la conversation et retient parfois des informations, ce qui suffit à donner une impression personnelle. Elle n'a ni intention, ni expérience, ni sollicitude, ni compréhension contextuelle, et la conséquence pratique est qu'elle peut être d'accord parce que l'invite suggérait une réponse. C'est la [[ai-sycophancy|complaisance de l'IA]], et c'est le mode de défaillance auquel les étudiants s'attendent le moins. Demandez-lui de nommer les faiblesses du raisonnement, d'apporter des contre-preuves et de dire ce qui rendrait sa réponse fausse, puis vérifiez indépendamment. L'accord n'est pas une confirmation.

### « Une bonne invite devrait produire la bonne réponse. »

La sortie est sensible à l'invite et souvent non déterministe, si bien que de petits changements de formulation, de contexte, d'exemples ou d'hypothèses déplacent substantiellement la réponse, et redemander n'est pas vérifier. Cinq réponses similaires peuvent partager une seule prémisse erronée. L'itération productive clarifie le but et les contraintes, expose les hypothèses, demande des variantes, teste contre les preuves et vérifie si la réponse survit à un changement du problème. C'est une compétence, et une compétence inégalement répartie. La démonstration d'un étudiant naïf utilisant un agent conversationnel sur une question d'examen à faire à la maison est restée « soignée mais pédagogiquement mince » au niveau multistructurel de la taxonomie SOLO, et atteindre une boucle d'apprentissage utilisable a demandé huit tours d'intervention méta-niveau : signaler la surcharge, demander une simplification, resserrer le périmètre. Les auteurs nomment cette capacité **littératie d'interaction avec l'IA**, c'est-à-dire la capacité à piloter, évaluer et apprendre d'une interaction itérative, et ils notent la pointe d'équité : parce qu'un usage non guidé impose une compétence de gestion de l'interaction inégalement répartie, l'IA générative « pourrait être plus bénéfique aux étudiants déjà avantagés » ([[brunnstrom-ai-interaction-literacy-srl-2026|AI-interaction literacy]]). Pour les exigences d'[[regulation|autorégulation]] qui se trouvent en dessous, voir [[developing-ai-tutor|How Do We Develop an Effective AI Tutor?]].

### « Les jeunes sont déjà compétents en IA parce qu'ils sont des natifs du numérique. »

La familiarité avec les produits numériques n'est pas la capacité d'évaluer l'IA. Un étudiant peut ouvrir un agent conversationnel, générer une image et demander une réponse tout en étant incapable de vérifier une affirmation, de repérer une preuve fabriquée, de détecter un biais ou une complaisance, de protéger des informations personnelles, de décider ce qu'il ne faut pas déléguer ou d'expliquer comment l'IA a façonné le travail. Le wiki résume des recherches dans lesquelles la confiance avec la technologie quotidienne ne se transposait pas au raisonnement algorithmique, à la création technologique ou à l'évaluation critique de l'IA ([[digital-literacy-illusion|The Illusion of Competence]]). La littératie s'enseigne et se démontre ; l'âge et la fréquence d'usage ne la confèrent pas.

### « Les étudiants qui utilisent l'IA sont paresseux ou malhonnêtes. »

Un certain mésusage existe, et l'étiquetage moral en explique peu et en prévient moins encore. Les décisions sont façonnées par la valeur du travail, la pression du temps, la confiance, les normes du groupe, la clarté des politiques, la peur de l'échec, l'accès antérieur et le point de savoir si le travail paraît lié à quelque chose qui compte pour l'étudiant, et les étudiants établissent des distinctions entre remue-méninges, révision, explication et génération de texte intégral qu'une règle générale efface. La réponse qui change les comportements combine des attentes claires, une évaluation porteuse de sens, un enseignement de l'usage responsable, une voie de déclaration, une vérification de l'apprentissage et une responsabilisation proportionnée. Traiter tout usage comme un défaut de caractère le pousse vers le secret, où vous perdez à la fois l'information et la conversation.

## Répondre à ce que croient les familles et le public

Les questions venues de l'extérieur de l'établissement sont plus simples et les réponses doivent être plus courtes, parce qu'elles seront répétées en réunion du conseil sans les nuances.

### « L'IA va-t-elle révolutionner l'éducation ou la détruire ? »

Les deux affirmations exagèrent ce que la technologie fait par elle-même. L'IA peut élargir l'accès à l'explication, à la traduction, à la pratique, à la rétroaction et aux aides à l'apprentissage, et elle peut ajouter la désinformation, le risque pour la vie privée, le biais, la dépendance excessive et de nouveaux problèmes d'intégrité. La conception, l'enseignement, les décisions institutionnelles et les responsabilités que les apprenants conservent décident quelle liste s'allonge ([[ai-education|AI in Education]]). La question qui mérite d'être posée à un conseil est plus étroite et a une réponse : pour quels apprenants, quelles tâches et quels résultats, dans quelles conditions, cet usage produit-il plus de bénéfices que de préjudices.

### « L'IA, c'est à peu près une autre calculatrice. »

La comparaison vaut pour une propriété, puisque les deux déchargent du travail, et elle échoue sur le périmètre. Une calculatrice accomplit une opération définie ; l'IA générative produit des explications, des arguments, des plans, des résumés de sources, du code, de la rétroaction et des travaux entiers, son fonctionnement est bien moins transparent, et sa sortie peut être persuasive et fausse ([[generative-ai|Generative AI]]). C'est pourquoi la décision de délégation est plus fine. Décharger un calcul de routine peut libérer un apprenant pour interpréter ; décharger l'interprétation supprime la leçon.

### « Une IA empathique se soucie de l'étudiant. »

Le système peut produire un langage qui semble attentif et soutenant, et cela peut aider un apprenant à formuler un problème ou à persévérer dans une tâche à faible enjeu. L'apparence de sollicitude n'est ni sollicitude, ni responsabilité, ni devoir de protection, et un modèle peut mal comprendre la situation, renforcer le cadrage de l'utilisateur ou répondre maladroitement tout en ayant l'air bienveillant ([[conversational-ai|Conversational AI]]). Les étudiants doivent savoir quand ils parlent à un système, ce qui est conservé, et quand il devrait les orienter vers un adulte qualifié.

### « L'IA rendra les enseignants inutiles. »

Automatiser des tâches n'est pas remplacer la fonction éducative. Rédiger des exemples, produire des supports préliminaires, répondre à des questions de routine et aider à la rétroaction peuvent tous passer à un outil. Interpréter les besoins des apprenants, construire des relations, maintenir une classe intellectuellement et émotionnellement sûre, contextualiser les savoirs disciplinaires, exercer un jugement [[ethics|éthique]] et décider quand une réponse générée est inappropriée restent à une personne. Le rôle évolue vers celui d'orchestrateur, de concepteur d'apprentissage, de guide disciplinaire et de décideur responsable, ce qui est un changement du travail professionnel plutôt que sa disparition ([[teacher-role|Teaching]]).

## Là où se trompent les personnes qui pilotent tout cela

Les conceptions erronées ci-dessus appartiennent au public auquel la page s'adresse. Celles-ci appartiennent aux personnes qui rédigent la note, et elles expliquent pourquoi les bonnes corrections ne passent pas.

### « Piloté par les données signifie objectif. »

Le biais entre par les données d'entraînement, les étiquettes, les définitions des résultats, les invites, les hypothèses linguistiques, les choix d'accessibilité, les seuils de décision et la façon dont le personnel lit la sortie. Le jugement humain est aussi biaisé, ce qui ne prouve pas que le jugement automatisé soit neutre ; l'automatisation peut cacher le biais derrière une interface et l'appliquer à grande échelle ([[bias-mitigation|Bias Mitigation]]). Pour les décisions lourdes de conséquences, exigez une analyse de la performance par sous-groupe, une documentation des conditions d'entraînement et de validation, un rendu de l'incertitude, une relecture humaine effective, une procédure d'appel, une surveillance après déploiement et une enquête sur les préjudices différenciés.

### « Un compte par étudiant résout l'équité. »

L'égalité d'accès est la première de trois lignes. Les étudiants diffèrent par les connaissances préalables, l'expérience de l'IA, la langue, l'accès pour les personnes handicapées, la qualité de l'équipement, le temps disponible, la confiance et la capacité d'évaluer une sortie, et les étudiants plus expérimentés utilisent l'outil pour étendre leur apprentissage tandis que les étudiants plus faibles ou moins métacognitifs acceptent une sortie erronée ou délèguent la pratique dont ils ont le plus besoin. Planifiez l'accès, puis la compétence, puis les résultats : qui peut l'utiliser de manière fiable, qui peut l'utiliser et l'évaluer, qui en bénéficie réellement et qui rencontre un préjudice nouveau ([[digital-divide|Digital Divide]], [[metacognition|Metacognition]]).

### « Une politique unique à l'échelle de l'établissement mettra fin à l'incertitude. »

Un texte de politique ne crée pas une compréhension partagée. Étudiants et personnels lisent les attentes à partir des orientations institutionnelles, des normes de programme, des plans de cours, des consignes de travail, des commentaires des enseignants, du comportement des pairs et des applications antérieures, et quand ces sources se contredisent, les gens inventent leurs propres règles. L'architecture qui fonctionne relie des principes à l'échelle de l'établissement à des attentes de programme, des politiques de cours, des consignes de travail, des exemples traités et des procédures transparentes de déclaration et de relecture, avec la raison pédagogique attachée à chaque restriction. Une règle qui dit seulement « autorisé » ou « interdit » laisse le jugement à qui est le plus sûr de lui.

### « La réticence du corps enseignant est un déficit de formation. »

Parfois c'en est un. La disposition à intégrer est aussi une question de charge de travail, d'[[learner-identity|identité professionnelle]], de valeurs disciplinaires, de doutes sur la validité de l'évaluation, de soutien institutionnel mince, d'incertitude sur la vie privée et d'un jugement raisonné selon lequel une application particulière ne sert pas les étudiants. Le développement doit donc couvrir la compétence pratique, l'intégration pédagogique, le sens et l'identité, le temps, la politique, l'usage [[discipline-specific-aied|propre à la discipline]] et l'option d'une non-adoption réfléchie. Une démonstration ponctuelle de fonctionnalités ne résout pas un changement professionnel et organisationnel ([[educational-development|Educational Development]]).

### « Dire aux gens les faits corrects suffit. »

Les conceptions erronées sont souvent des modèles mentaux stables et plausibles plutôt que des lacunes, et l'expérience propre d'une personne ne cesse de les confirmer : la sortie semble assurée, le travail paraît bon, la tâche s'est terminée plus vite. Les faits qui contredisent un modèle assorti d'une explication fonctionnelle sont écartés. Ce qui les remplace est un meilleur modèle plus une manière de l'appliquer, ce qui est la séquence de réfutation de [[refutation-text|Refutation Text]] et la synthèse de [[misconceptions|Misconceptions about AI]].

### « Corriger quelqu'un, c'est lui dire qu'il avait tort. »

La honte produit la défensive et la dissimulation, et des messages comme « seuls les étudiants paresseux utilisent l'IA » ou « quiconque fait confiance à un agent conversationnel est un naïf » attaquent l'identité plutôt que la croyance. Traitez la croyance et ses conséquences : reconnaissez pourquoi elle semblait raisonnable, montrez une contradiction comme une erreur assurée, invitez à une prédiction avant de révéler la correction, laissez les gens comparer une performance assistée et une performance sans aide, donnez-leur une stratégie pour la fois suivante et confortez le nouveau modèle dans plusieurs activités. Les gens révissent plus volontiers leur pensée quand la révision ne leur coûte pas leur dignité.

## Remplacer la croyance par une meilleure

La mécanique est assez courte pour être utilisée en réunion de faculté. Nommez la croyance, dites pourquoi elle paraît vraie, rejetez-la clairement, expliquez la défaillance, donnez le meilleur modèle et remettez une application.

La version travaillée, que vous pouvez adapter à n'importe quel item de cette page :

> **Conception erronée :** « Un bon travail généré par l'IA montre que l'étudiant a appris. »
> **Réfutation :** « Ce n'est pas nécessairement vrai. Le produit montre ce que l'étudiant et l'IA ont produit ensemble, mais il ne révèle pas quel raisonnement l'étudiant a accompli. »
> **Remplacement :** « L'apprentissage est mieux démontré quand l'étudiant peut expliquer, transférer, adapter et reproduire la capacité. »
> **Application :** « Faites suivre le travail assisté par l'IA d'une explication, d'une soutenance orale, d'une trace du processus ou d'une application sans aide. »

Le remplacement porte le poids. Retirer une conception erronée sans fournir une meilleure explication laisse la personne sans rien pour penser, et l'ancienne croyance revient la fois suivante où l'expérience la confirme.

Les expériences font plus que les descriptions. Celles qui changent une croyance sont celles qui rendent son échec visible : demandez aux gens de trouver une référence fabriquée présentée avec assurance ; comparez plusieurs réponses contradictoires à une même invite ; faites résoudre un problème sans aide après une pratique assistée ; faites observer au modèle la reprise d'une hypothèse incorrecte ; comparez un tuteur qui donne la réponse et un tuteur qui donne des indices ; auditez les sorties sur différents noms, dialectes ou scénarios ; faites défendre une recommandation de l'IA à l'aide des preuves d'origine. Chacune transforme un avertissement en quelque chose que la personne a vu se produire, et chacune donne l'occasion de s'exercer à la vérification, au [[trust-calibration|calibrage de la confiance]] et à la décision de décharge.

## Ce qui va vous revenir

### « Nous avons déjà acheté le détecteur, et la licence n'est pas remboursable. »

Alors utilisez-le comme un signal parmi d'autres dans un processus qui peut survivre à un appel, et budgétez le taux d'erreur au lieu de le nier. Au taux de faux positifs que Vanderbilt n'a pas pu valider, 1% de 75.000 copies représente 750 étudiants mal étiquetés, et l'analyse de justice procédurale indique que les outils classent à tort les rédacteurs non anglophones natifs. Un score de détecteur est une allégation. Une explication consignée est une trace.

### « Nos étudiants ne feraient jamais cela. »

Le résultat de 94% non détectés vient de copies injectées dans des examens en ligne en direct, ce qui n'est pas une histoire de malfaiteurs. L'essentiel de la pression tient à l'ambiguïté et au temps, et la question pratique est de savoir quel chemin votre travail rend le plus facile. Si la vérification est notée, si la déclaration ne coûte rien et s'il existe une vérification sans aide, la plupart des étudiants prennent le chemin que vous avez construit.

### « Le fournisseur nous a montré un benchmark et une étude de cas élogieuse. »

Demandez ce que le benchmark mesurait et si un étudiant a appris quoi que ce soit outil fermé. Un score sur une grille d'évaluation de tutorat et un gain d'apprentissage en classe sont des affirmations différentes, et un pilote sans condition de comparaison ne peut pas vous dire laquelle vous avez. Le même scepticisme s'applique à votre propre tableau de bord.

### « Les enseignants ont juste besoin de plus de formation. »

Les enseignants ont substantiellement surestimé leur compétence en IA lorsque l'auto-déclaration a rencontré la performance, donc la formation doit être évaluée sur ce que les gens savent faire plutôt que sur ce qu'ils disent savoir. Elle doit aussi couvrir le sens, la charge de travail et l'option de refuser, sans quoi les personnes les plus fondées à résister seront celles qui comprennent le mieux le problème.

### « Les parents n'accepteront rien d'autre qu'une interdiction. »

Les parents demandent si la chose devant leur enfant est sûre et si le diplôme signifie quelque chose. Répondez directement à ces deux questions, avec les questions de sécurité pédagogique plutôt qu'avec le filtre de contenu, et l'argument de l'interdiction perd sa force. La question du conseil est plus étroite que le gros titre et plus facile à défendre.

### « Nous ne pouvons pas organiser des soutenances orales pour un cours magistral de cette taille. »

Alors n'en organisez pas une par étudiant. Faites expliquer le raisonnement par écrit, discutez les sources dans une courte note enregistrée, faites réviser un passage, faites appliquer l'idée à un cas nouveau ou lisez les traces du processus que vous collectez déjà. Échantillonnez les copies qui semblent incohérentes avec le travail antérieur. La vérification est une habitude intégrée au cours, non un événement séparé pour chaque étudiant.

### « Rien de tout cela n'est notre sujet. »

L'interférence se produit à l'intérieur de la discipline, à l'étape où l'outil accomplit la pratique que le cours existe pour fournir. C'est pourquoi la réponse est un changement de travail et une phrase de politique plutôt qu'une nouvelle unité sur l'IA.

## Que faire cette semaine

**1.** Prenez les trois croyances que vous entendez le plus et rédigez chacune comme une réfutation : la croyance, pourquoi elle paraît vraie, la correction, le remplacement, l'application. Une page, sans références.

**2.** Ajoutez un item sans aide à une [[assessment|évaluation]] que vous faites déjà passer, et donnez-lui assez de poids pour que le résultat signifie quelque chose.

**3.** Réécrivez la clause sur l'IA d'un cours pour qu'elle nomme l'acte et l'étape, et choisissez l'une des quatre conditions pour chaque phase du travail.

**4.** Avant la prochaine décision de renouvellement ou de pilote, demandez un tableau par sous-groupe, un journal de sécurité multi-tours et une mesure de résultat sans aide. Si l'un des trois manque, dites-le par écrit.

**5.** Animez une activité de vingt minutes qui fait échouer une conception erronée dans la salle, en utilisant une référence fabriquée ou deux réponses contradictoires à la même invite.

## Où aller ensuite

[[misconceptions|Misconceptions about AI]] est la synthèse derrière cette page, et [[refutation-text|Refutation Text]] est la méthode pour l'utiliser devant un auditoire. [[reduce-ai-cheating|How Can We Reduce AI Cheating?]] traite les décisions d'intégrité, [[redesign-assessment-ai-era|How Should Assessment Be Redesigned for the AI Era?]] traite ce qu'une note peut soutenir, et [[ai-ed-evaluation|AI Ed Evaluation]] est le guide pour juger un pilote ou une plateforme. Côté enseignement, [[teacher-ai-competency|Teacher AI Competency]] et [[ai-literacy|AI Literacy]] couvrent ce que les personnes dans la salle doivent savoir faire.

L'idée à retenir, dans la forme que vous pouvez dire à voix haute : l'IA est une ressource cognitive faillible, non une autorité, non un esprit, et non une preuve que l'apprentissage a eu lieu. L'usage responsable tient une personne pour responsable, préserve la pensée que l'apprentissage exige, vérifie ce qui compte et juge le succès sur une capacité durable et équitable plutôt que sur la fluidité, la rapidité, l'engagement ou une tâche achevée.
