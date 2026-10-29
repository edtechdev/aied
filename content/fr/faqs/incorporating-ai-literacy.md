---
title: "Comment intégrer la littératie en IA dans mon cours ?"
created: "2026-09-22T19:14:32-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 86
foundations: [ai-literacy, cognitive-offloading, learning-design]
assessment: [assessment]
level: [higher ed]
audience: [instructors, instructional designers]
source_updated: "2026-10-28T11:06:17-04:00"
translation_of: faqs/incorporating-ai-literacy
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

L'évaluation de votre programme affirme que les diplômés ont besoin de littératie en IA, et personne ne vous a dit ce que cela signifie pour le trimestre que vous enseignez réellement. Ou bien le cours dont vous avez hérité comporte une séance intitulée « outils d'IA » que personne ne peut justifier, et vous devez décider si vous la gardez. Ou bien vous avez vu un étudiant coller un prompt, accepter la première réponse et rendre, et vous voulez que le prochain devoir interrompe cela.

La conclusion : ajoutez une étape à un travail que vous notez déjà, où les étudiants s'engagent d'abord sur leur propre réponse, la comparent avec celle de l'outil et défendent ce qu'ils ont gardé. Une littératie qui dure est disciplinaire, répétée, et évaluée comme un jugement plutôt que récitée comme une définition.

## La version courte

**1.** Rattachez le travail à une tâche que vous notez déjà. Un module autonome en semaine deux est la version la plus faible de cette idée.

**2.** Faites produire une réponse aux étudiants avant que l'outil n'en produise une, et faites de la comparaison le devoir.

**3.** Notez l'évaluation et la réparation de la production de l'IA, pas sa génération. Cette compétence ne se transfère pas d'elle-même.

**4.** Nommez les erreurs que l'IA commet dans votre discipline, dans la langue de votre discipline, et répétez l'exercice plus d'une fois.

**5.** Évaluez le jugement par un cas, pas la confiance par un questionnaire.

## N'ajoutez pas une leçon, ajoutez une étape à un travail que vous notez déjà

Le réflexe institutionnel par défaut est un module autonome, généralement en début de trimestre, sur le fonctionnement des grands modèles de langue et sur la rédaction de prompts. La synthèse sur la [[ai-literacy|littératie en IA]] plaide pour un autre agencement : les étudiants développent une littératie plus utile lorsqu'ils utilisent, interrogent, vérifient, critiquent et décident à propos de l'IA à l'intérieur de tâches authentiques du cours, et de façon répétée. Le mouvement vers l'évaluation critique est le plus évident là où ces expériences sont soutenues et intégrées plutôt que dispensées une seule fois ([[ai-literacy-continuum-higher-education|A Practical Five-Stage Continuum for AI Literacy in Higher Education]]).

Les preuves [[quantitative-research|quantitatives]] pointent dans la même direction. Une [[liu-ai-literacy-interventions-meta-analysis-2026|méta-analyse de 59 interventions de littératie en IA]] a trouvé les effets les plus grands pour les pédagogies intégrées et réflexives. Elle avertit aussi que les interventions centrées sur les connaissances montrent des effets *mesurés* plus grands que celles qui visent les compétences, les attitudes ou l'éthique. Gardez-le en tête quand vous choisissez quoi mesurer.

L'autre raison de construire sur le travail existant est la charge de travail. Une synthèse de 2026 portant sur 72 études empiriques de l'[[generative-ai|IA générative]] en [[cs-education|enseignement de l'informatique]] constate que le résultat le plus solide et le plus répliqué du corpus est que l'IA augmente de façon fiable l'achèvement à court terme et réduit le temps passé sur la tâche, sur 36 études. Ces gains « ne se transfèrent pas à la performance autonome », selon 21 études. Les étudiants achèvent davantage en comprenant moins, à moins que l'engagement critique envers la production ne soit structurellement exigé ([[kumar-genai-computing-education-systematic-review-2026|Generative AI in computing education: a systematic review and a framework for responsible integration]]).

Le bénéfice dépend aussi des [[prior-knowledge|connaissances préalables]]. Les étudiants bien préparés convertissent l'aide de l'IA en compétence durable. Les étudiants mal préparés risquent de l'utiliser comme une béquille qui supprime l'[[productive-failure|échec productif]]. La recommandation par défaut de la revue est un accès progressif : d'abord des fondations sans IA, puis un usage guidé avec des tâches d'explication obligatoires, puis une critique réflexive. Cette séquence s'insère bien plus facilement dans un cours existant qu'une unité nouvelle. Le [[learning-design|design pédagogique]] est l'endroit où régler ce phasage, et le [[curriculum-design|design curriculaire]] en est la version au niveau du programme.

## Faites-les s'engager avant que l'outil ne réponde

Réfléchir d'abord, l'IA ensuite. Demandez aux étudiants de former une interprétation, une solution, un argument, une prédiction ou un brouillon initial avant de consulter quoi que ce soit. Ils comparent ensuite leur réflexion avec la production, nomment les accords et les écarts, vérifient les affirmations et décident de ce qu'ils adoptent. Cela empêche l'outil de se substituer au travail cognitif que le devoir existe pour développer, ce qui est la préoccupation derrière [[cognitive-offloading]] et [[ai-misuse-learning-harm]] : la performance immédiate peut s'améliorer tandis que l'apprentissage autonome souffre.

Ce qui se passe sans cette structure est bien documenté. L'étude présage-processus-produit de Yan et al. auprès de 38 étudiants de licence a constaté que 76.32% s'appuyaient sur le schéma à un seul tour — demander, obtenir une réponse, s'arrêter — et que 78.94% n'intégraient l'IA générative qu'avant de commencer ou après avoir rédigé. Même les étudiants orientés vers la maîtrise se rabattaient sur des processus de surface. Les auteurs appellent ce résultat un paradoxe d'efficacité, où la vitesse est gagnée au prix du travail cognitif qui construit les schémas, et citent un étudiant : « la vitesse à laquelle on oublie est très rapide aussi ». Ils situent la cause dans un vide institutionnel, où les enseignants interdisent la copie mais enseignent rarement un usage productif ([[yan-cognitive-outsourcing-genai-assessments-2026|From cognitive outsourcing to reallocation]]).

Exiger des artefacts de processus est la solution la moins coûteuse. L'historique du dialogue, une note de réflexion, un journal de révision : chacun rend le flux de travail visible, donne à la [[metacognition|métacognition]] quelque chose à quoi s'attacher, et transforme l'[[self-regulated-learning|autorégulation]] en objet notable. Cela vous donne aussi la preuve qui manquerait à une conversation sur une fraude.

## Mettez des points sur la critique

Les étudiants peuvent annoter une réponse d'IA pour des erreurs factuelles, des affirmations non étayées, des biais, des perspectives manquantes, une confiance inappropriée ou un raisonnement disciplinaire faible. Ils peuvent la confronter aux lectures, aux preuves empiriques, aux normes professionnelles ou à la [[assessment|grille d'évaluation]] du cours.

Le schéma autour duquel bâtir une tâche est une production plausible mais imparfaite, plus un étudiant dans le fauteuil du critique ou de l'éditeur. Trouver les erreurs est l'une des voies les plus fiables vers la calibration et la [[critical-thinking|pensée d'ordre supérieur]].

Traitez cela comme une compétence que vous enseignez, car elle n'arrive pas avec les connaissances de la matière. Dans la synthèse sur l'enseignement de l'informatique, les étudiants réussissaient significativement *moins bien* à corriger du code généré par IA qu'à des tâches d'[[summative-assessment|examen]] de programmation classiques. C'est la preuve directe que l'évaluation et la réparation d'une production ne se transfèrent pas automatiquement depuis la compétence disciplinaire générale, et que sans enseignement les étudiants rendront du travail incorrect sans le remarquer. La revue intègre cela dans son cadre VIE (Vérification, Implémentation, Équité) et soutient que l'engagement critique devrait être une composante notée et observable du travail de l'étudiant, en l'appelant « le mécanisme commun qui relie chaque intervention efficace du corpus ».

Version pratique : une ligne de grille pour l'erreur que vous attendiez qu'ils repèrent, une pour la réparation, une pour la justification. Si la critique ne rapporte aucun point, elle se réduit à trois phrases à la sortie.

## Rendez-la spécifique à votre discipline, et répétez-la

Les règles génériques du type « vérifiez les [[hallucination-risk|hallucinations]] de l'IA » sont plus faibles que le fait de montrer aux étudiants à quoi ressemble une production non fiable dans votre discipline. Des références fabriquées en histoire. Des hypothèses invalides en économie. Des interprétations trompeuses de preuves expérimentales en [[biology-education|biologie]]. Des décisions de conception mal justifiées en ingénierie. Une écriture superficiellement fluide mais méthodologiquement faible en psychologie.

Écrivez cette liste vous-même, à partir de vos propres corrections, avant le début du trimestre. Cinq exemples de votre discipline feront plus de travail qu'une liste de contrôle générale, et ils servent aussi de banque d'erreurs pour la tâche de critique décrite plus haut.

La répétition est l'autre moitié. Un exercice en semaine trois produit un étudiant qui a fait l'exercice. Le même exercice dans trois devoirs, sur des matériaux différents, produit une habitude, et les cas de ce corpus qui montrent une intégration [[discipline-specific-aied|spécifique à la discipline]] sont ceux où la pratique revient à travers un cours plutôt que de tenir dans une seule séance.

## Empruntez les modèles qui existent déjà dans votre discipline

Vous n'avez pas à inventer la conception. Plusieurs sont documentées, et chacune est assez petite pour être copiée.

Les étudiants en économie résolvent d'abord un problème, obtiennent une réponse d'IA générative, la comparent à leur raisonnement, critiquent l'IA, réfléchissent, puis discutent avec leurs pairs ([[beck-genai-literacy-economics-hands-on|Fostering Generative AI Literacy in Economics]]).

Les étudiants en psychologie évaluent un communiqué de presse généré par ChatGPT à l'aune d'une grille du cours, en identifient les faiblesses et le révisent, ce qui développe la littératie disciplinaire et la littératie de la rétroaction dans la même tâche ([[richmond-nicholls-genai-psych-feedback-ai-literacies|Using Generative AI to Promote Psychological, Feedback, and AI Literacies]]).

La biologie intègre les activités dans l'apprentissage disciplinaire plutôt que d'enseigner un sujet technique séparé ([[zha-ai-literacy-biology-case-study|Integrating AI Literacy Education in a Biology Class]]). Les cours de bases de données et de conception utilisent l'analyse d'échec comme activité d'apprentissage, les étudiants analysant les erreurs générées par l'IA et itérant sur les prompts et les solutions ([[pedagogy-ai-mistakes|The Pedagogy of AI Mistakes]]). Le modèle LearnAI intègre une co-création avec l'IA juste à temps à travers les disciplines au lieu de faire tourner un module générique ([[learnai-just-in-time-ai-cocreation-university-2026|LearnAI: Just-in-Time AI Co-Creation Across Disciplines]]).

Une mise en garde vient avec un chiffre. Un cours d'introduction à la physique des particules reconçu autorisait l'IA générative comme partenaire explicite sur des problèmes de type recherche, et un examen écrit sans aide a donné une moyenne de 20.6 sur 80, avec seulement deux étudiants atteignant 40 ([[ai-particle-physics-education-redesign-2026|AI in particle physics education]]). La performance assistée et les connaissances mobilisables de façon autonome sont des accomplissements distincts. Les auteurs plaident pour enseigner la littératie en IA tôt — y compris la vérification et le fait de traiter l'IA comme un enseignant plutôt que comme un copieur — parallèlement à une pratique sans aide dédiée. L'[[physics-education|enseignement de la physique]] en présente le dossier complet.

Il existe aussi une version où les étudiants fabriquent quelque chose pour un public réel. Burriss et al. ont fait composer à 22 élèves de onzième année des messages de service public vidéo sur les questions d'[[ethics|éthique]] de l'IA qu'ils vivaient : la surveillance en milieu scolaire, les « laissez-passer » électroniques et l'accusation algorithmique de [[academic-integrity|plagiat]]. L'unité s'appuyait sur la littératie posthumaniste critique et la [[multimodal|composition multimodale]]. Les élèves ont représenté le préjudice comme émergeant d'une responsabilité humain-machine enchevêtrée plutôt que d'un outil malfaisant, ont retourné le récit de la triche vers la dépendance excessive des adultes à une IA défaillante, et ont conclu sur l'[[agency|autonomie]] (« la solution est à notre portée »). Les auteurs placent la [[storytelling-in-education|narration]] et la production collaborative au centre d'une [[critical-pedagogy|pédagogie critique de la littératie en IA]], et soutiennent que composer *à propos* de l'IA pour un public réel développe une compétence critique que les échelles de compétences ne peuvent pas voir ([[burriss-multimodal-composition-critical-ai-literacy-2026|« Young Scholar[s] on the Beat »]]). Cette affirmation est un argument tiré d'une seule unité avec 22 élèves : lisez-la comme une idée de conception, pas comme une taille d'effet.

## Gardez-la sociale là où c'est peu coûteux

La collaboration est le moyen le moins coûteux d'élever la demande cognitive d'une tâche avec l'IA. Le [[icap-framework|ICAP framework]] fait passer les étudiants de l'exposition passive à un engagement actif, constructif et interactif. En pratique : des binômes comparent des prompts, des groupes débattent du caractère fiable d'une réponse, des équipes révisent conjointement une production, ou un étudiant explique à un autre pourquoi une suggestion a été rejetée.

Les preuves soutiennent les conceptions cognitivement [[active-learning|actives]] et [[collaborative-learning|collaboratives]] ([[hingle-collaborative-ai-literacy-2025|Systematic Review of Collaborative Learning Activities for Promoting AI Literacy]]). Le coût est une structure de discussion, pas une nouvelle évaluation.

## Évaluez le jugement par une tâche

Les étudiants surestiment leur capacité à évaluer l'IA, et un item de confiance [[self-report-measures|auto-déclarée]] confirmera l'erreur plutôt que de l'exposer. La base de connaissances documente un écart significatif entre la littératie en IA auto-déclarée et celle fondée sur la performance, et recommande une évaluation par la performance ([[ai-literacy-assessment-misalignment|AI Literacy Assessment: Self-Reported vs Performance Misalignment]] ; [[jin-glat-genai-literacy-assessment|GLAT]]).

Au lieu d'un item de confiance, donnez-leur quelque chose à faire : détecter une erreur, vérifier une source, améliorer une production, expliquer une limite, justifier pourquoi un usage particulier de l'IA est approprié pour une tâche particulière.

Les scénarios fonctionnent bien comme instrument, et ils sont faciles à écrire. [[reed-ai-literacy-ethical-judgment-scenarios-2026|Reed et al. (2026)]] ont soumis des vignettes à des étudiants de licence : utiliser l'IA pour améliorer la grammaire de son propre brouillon, générer des termes de recherche avant de faire soi-même la lecture, rendre un journal de réflexion généré par IA sans apport personnel, retoucher à peine un devoir généré. Les étudiants convergeaient sur les cas évidents et divergeaient le plus là où l'outil faisait une partie du travail intellectuel. Cette divergence est exactement la frontière sur laquelle votre politique s'appuie silencieusement, donc faire passer les vignettes vous dit où votre cours doit dire quelque chose d'explicite. Cela mesure aussi le jugement sur un cas plutôt qu'une maîtrise dans l'abstrait.

## Décidez ce que le cours ne peut pas corriger

Quelques limites valent d'être énoncées avant que quelqu'un d'autre ne les soulève.

Le [[prompt-engineering|prompt engineering]] n'est pas la littératie en IA. Les étudiants peuvent devenir techniquement compétents tout en restant mauvais juges de la production, et certaines dimensions de la littératie en IA orientées vers les compétences sont positivement associées à une dépendance déclarée à l'IA. Un entraînement opérationnel sans [[regulation|autorégulation]], sans confiance académique et sans [[self-regulated-learning|soutien métacognitif]] peut augmenter la dépendance plutôt que la réduire.

L'interaction est une compétence que l'outil ne fournit pas. La démonstration en huit tours de Brunnström et Palmqvist, avec un « étudiant naïf » utilisant un [[conversational-ai|agent conversationnel]] à un examen à faire à la maison, a trouvé une production par défaut « polie mais pédagogiquement mince », et qu'il fallait huit tours d'interventions de l'apprenant (« simplifie », « c'est trop, tu peux condenser ? ») pour atteindre une boucle d'apprentissage utilisable. Ils nomment cette capacité la littératie de l'interaction avec l'IA, c'est-à-dire la capacité à piloter, évaluer et apprendre d'une interaction itérative. Leur conclusion sur l'équité est la plus tranchante : parce qu'un usage non guidé impose une compétence inégalement distribuée, l'IA générative « peut être plus bénéfique aux étudiants déjà avantagés » ([[brunnstrom-ai-interaction-literacy-srl-2026|AI-interaction literacy]] ; [[how-ai-impacts-students|Quel est l'impact de l'IA sur les étudiants ?]]). Enseigner l'interaction est une mesure d'équité autant qu'un choix [[pedagogy|pédagogique]].

Mieux prompter ne corrige pas le modèle. Dans la recherche sur la flagornerie contextuelle, l'enseignement de la littératie en IA et du prompt engineering réduisait la reprise directe des erreurs des utilisateurs sans empêcher complètement ces erreurs de se propager dans les conseils ultérieurs ([[contextual-sycophancy-ai-literacy|The Hidden Cost of Contextual Sycophancy]] ; [[ai-sycophancy|AI Sycophancy]]). Les étudiants doivent savoir que l'instruction change ce qu'ils obtiennent, pas ce qu'est le système.

L'[[equity-in-ai-education|équité]] traverse tout cela. Les étudiants arrivent avec un accès différent aux outils payants, une expérience différente du prompt, des parcours linguistiques différents et une confiance numérique différente. Exiger un usage sophistiqué sans accès équitable ni soutien fondamental transforme l'exposition antérieure en avantage académique, et l'accès, les compétences et les résultats sont des dimensions distinctes de la fracture numérique ([[digital-divide|digital divide]]). Avant de concevoir une tâche qui exige un outil payant, vérifiez qui, dans la salle, en a réellement un.

## Ce que les enseignants ratent à ce sujet

La littératie en IA, c'est enseigner le prompt. Le prompt est la partie visible. Les étudiants peuvent devenir techniquement compétents avec ces outils tout en restant mauvais juges de ce qui en sort, et le résultat sur la dépendance cité plus haut va dans le même sens.

Une séance suffit à couvrir le sujet. Une séance peut introduire le vocabulaire. Les preuves en faveur d'une pratique répétée sur du matériel réel de cours sont plus solides, et la méta-analyse de 59 interventions a trouvé les effets les plus grands là où le travail était intégré et réflexif.

Les étudiants qui utilisent ces outils tous les jours savent déjà évaluer une production. Yan et al. ont trouvé 76.32% de 38 étudiants de licence dans un schéma à un seul tour, et la synthèse sur l'informatique a trouvé les étudiants significativement moins bons pour corriger du code généré par IA que pour des tâches d'examen de programmation ordinaires. La familiarité avec l'interface n'est pas la calibration.

L'activité doit porter sur l'outil. Les conceptions les plus solides portent sur la discipline, avec l'outil à l'intérieur. Des étudiants en économie critiquant une solution d'IA, des étudiants en psychologie révisant un communiqué généré : l'objet d'étude reste la matière.

L'évaluation critique se transfère depuis les connaissances de la matière. Elle ne le fait pas, et c'est pourquoi le résultat en informatique compte. Un étudiant capable d'écrire du code correct n'est pas automatiquement capable de diagnostiquer du code incorrect écrit par quelqu'un d'autre, et le même écart apparaît en prose.

La confiance est un indicateur utilisable. L'auto-déclaration et la performance divergent dans cette littérature, et la divergence est assez systématique pour que la base de connaissances recommande des mesures de performance. Demandez une démonstration.

## Ce qui va vous revenir dessus

**« Il n'y a pas de place dans un programme chargé. »** Alors n'ajoutez pas de contenu. Rattachez une étape de critique à un devoir existant et comptez-la une fois. Les conceptions en économie et en psychologie décrites plus haut prennent le devoir que les étudiants avaient déjà et changent ce qu'ils font de la production de l'IA.

**« Mes étudiants savent déjà utiliser ChatGPT. »** Ils connaissent l'interface. Le chiffre de 76.32% en un seul tour est à quoi ressemble l'aisance sans enseignement, et c'est le schéma que votre cours est censé interrompre.

**« Leur apprendre à utiliser l'IA ne fera qu'encourager un usage plus important. »** C'est possible, et la version honnête de ce risque se trouve dans la littérature : un entraînement orienté vers les compétences sans soutien métacognitif est associé à une dépendance déclarée plus grande. C'est un argument pour associer l'entraînement à la réflexion et à une pratique sans aide, ce à quoi sert l'accès progressif.

**« La réflexion et la critique sont trop subjectives pour être notées. »** Elles sont subjectives quand la grille dit « réfléchi ». Elles deviennent notables quand vous nommez l'erreur à repérer, la réparation et la justification, ce qui est le même geste que n'importe quelle autre ligne de grille.

**« Nos étudiants sont mal préparés, donc l'IA va creuser l'écart. »** Les preuves soutiennent cette inquiétude. Les connaissances préalables conditionnent la conversion de l'aide de l'IA en compétence, et l'étude sur l'interaction conclut que les outils peuvent favoriser les étudiants déjà avantagés. L'accès progressif, les fondations sans IA et l'enseignement de l'interaction sont les réponses que le corpus propose, et chacune est quelque chose que vous pouvez mettre en place ce trimestre.

**« C'est le travail de la bibliothèque, ou du centre d'écriture. »** Ces services peuvent enseigner l'évaluation générique. Seul votre cours peut enseigner à quoi ressemble un argument faible dans votre discipline, et c'est la version que les étudiants emportent dans vos devoirs.

## Quoi faire cette semaine

**1.** Choisissez un devoir que vous enseignez déjà et ajoutez-y une étape d'engagement préalable : un plan, une prédiction ou un brouillon avant l'ouverture de tout outil.

**2.** Notez par écrit les trois erreurs que l'IA commet le plus souvent dans votre discipline, en utilisant des exemples tirés de vos propres corrections.

**3.** Transformez l'une d'elles en tâche de critique avec trois lignes de grille : la repérer, la réparer, justifier la réparation.

**4.** Remplacez une question de confiance dans votre prochain questionnaire ou ticket de sortie par un scénario de deux phrases et demandez ce que l'étudiant ferait.

**5.** Décidez et énoncez la règle d'accès pour votre cours, y compris quels outils sont autorisés et si l'un d'eux exige un compte payant.

## Où aller ensuite

[[ai-literacy-evidence|Quelles sont les preuves sur les interventions de littératie en IA dans l'enseignement supérieur ?]] est l'évaluation honnête de la solidité de cette base et de l'endroit où elle s'amincit. [[how-ai-impacts-students]] couvre le versant étudiant, [[verify-ai-output]] couvre l'habitude de vérification dont les étudiants ont besoin, et [[ai-literacy-assessment-misalignment]] est l'endroit où aller si vous construisez la mesure plutôt que la leçon. [[cognitive-offloading]] explique le mécanisme sous-jacent à la règle de l'engagement préalable.
