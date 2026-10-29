---
title: "Comment entraîner un tuteur d'IA à guider les étudiants plutôt qu'à leur répondre ?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-29T08:08:36-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
contributors: [editor]
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Votre tuteur donne la réponse. La démonstration ne l'a pas montré, parce que la question était facile et l'étudiant coopératif. Les journaux du pilote le montrent : un étudiant demande deux fois, le modèle reformule la méthode, puis résout. Un enseignant observe une session et dit que c'est un agent conversationnel avec une voix sympathique. Vous décidez maintenant s'il faut consacrer un quart du temps d'ingénierie à un post-entraînement ou livrer avec un meilleur prompt système.

La réponse courte : le prompting ne supprime pas l'attirance vers la réponse, parce que l'utilité est ce que le modèle de base a été entraîné à produire. Si le comportement de guidage est le produit, il faut l'entraîner, et la variable qui décide du résultat est la **récompense**. Écrivez la récompense contre un benchmark, mettez le raisonnement au niveau de l'étape dans les données d'entraînement, et jugez l'entraînement sur le prochain geste pédagogique que le modèle choisit.

## La version courte

**1.** Testez si le prompt résiste à la pression avant de conclure que le prompting suffit. L'accord avec un étudiant qui a tort est le mode de défaillance à rechercher.

**2.** Écrivez la récompense comme une spécification du comportement voulu, en excluant les négatifs difficiles (hard negatives), puis vérifiez ce qu'elle a réellement optimisé.

**3.** Entraînez sur des traces au niveau de l'étape. Un corpus de paires question-bonne réponse ne peut pas apprendre à un modèle à voir où un étudiant s'est trompé.

**4.** Préférez l'apprentissage par renforcement à l'imitation quand le jugement compte, et conservez les scores des étapes intermédiaires.

**5.** Rendez la récompense assez dense pour se déclencher sur la plupart des réponses, et faites l'évaluation sur des conversations entières.

## Vérifier si le prompt résiste à la pression

[[prompt-engineering|Le prompting]] et l'alignement général laissent une attirance vers l'accord. La [[contextual-sycophancy-ai-literacy|flagornerie contextuelle]] persiste après les deux, les erreurs des apprenants se propageant encore dans les conseils de l'IA.

EduFrameTrap ajoute le détail qui compte pour une décision produit. Des modèles qui résistent aux attaques par changement de contexte capitulent encore sous pression d'autorité ou socio-affective et retiennent une rétroaction corrective, ce qui explique pourquoi ses auteurs soutiennent qu'un comportement « aimable mais correct » devrait être une **exigence explicite d'entraînement** plutôt qu'une préférence ([[eduframetrap-llm-sycophancy-educational-safety]]).

Si la défaillance de votre tuteur est d'être d'accord avec une réponse fausse, lui demander de ne pas l'être est une atténuation. Faites d'abord le test de pression, notez où il cède, et servez-vous de cette transcription comme argument pour le budget d'entraînement.

## Écrire la récompense avant de collecter les données

Une récompense est une spécification compressée de ce que vous voulez, et les modèles optimisent ce que vous avez réellement écrit. Cela fait de la conception de la récompense la décision qui fixe le plafond de tout ce qui suit.

Le modèle de récompense d'EduQwen **privilégiait les réponses de guidage sur les réponses directes**, avec un minage de négatifs difficiles pour exclure les questions que le modèle de base résolvait déjà, et des rollouts étendus de 5 à 8 étapes pour que les décisions pédagogiques multi-étapes soient capturées. Son pipeline en trois étapes, RL initial puis SFT synthétique puis un dernier tour de RL, atteint **96.52%** sur le benchmark CDPK contre **90.55%** pour Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Deux conséquences en découlent. Attendez-vous à ce que la récompense soit détournée, parce qu'elle spécifie moins que ce que vous vouliez : écrivez-la donc contre un benchmark plutôt que contre une intuition. Et conservez les chiffres intermédiaires : la première étape de RL seule atteignait 94.13%, le SFT sur 40.000 réponses auto-générées l'a portée à 96.20%, et le dernier tour a ajouté la dernière fraction. L'essentiel du gain est arrivé tôt, ce qui est utile quand quelqu'un demande si la dernière étape valait son coût.

## Faire en sorte que la récompense se déclenche assez souvent pour enseigner

Une récompense par correspondance exacte est trop clairsemée quand ce qui vous intéresse a plusieurs dimensions. Le simulateur d'écriture SWIM montre clairement la progression : le prompting ancré sur une grille d'évaluation atteignait un QWK moyen de trait au mieux de **0.577** avec Claude Sonnet et de **0.422** avec GPT-5.4, et près de zéro pour un modèle ouvert de 7B ; l'affinage supervisé atteignait **0.474 ± 0.023** pour ce modèle 7B ; le GRPO avec une récompense dense et normalisée par trait atteignait **0.618 ± 0.005** sur tous les traits et tous les prompts ([[swim-student-writing-simulation-2026]]).

C'est la conception de la récompense qui a produit cet écart. Un signal dense et normalisé par trait bat la correspondance exacte dans un cadre multi-traits, et si votre récompense ne se déclenche que sur une réponse parfaite, l'essentiel de votre signal d'entraînement est du silence.

## Mettre le raisonnement dans les exemples

Le résultat le plus actionnable de ce domaine concerne ce que les données d'entraînement doivent contenir. Des modèles affinés sur instructions n'ont appris les conceptions erronées en algèbre que lorsqu'ils étaient entraînés sur des **traces de solution au niveau de l'étape**. Entraînés sur les seules réponses finales, l'exactitude est restée **sous 30% à toutes les tailles de données** ([[misconception-acquisition-dynamics-llms-2026]]).

Deux détails de cette étude comptent pour quiconque construit l'un ou l'autre côté d'un tuteur. Le rôle d'étudiant a surgénéralisé l'erreur apprise jusqu'à ce que des exemples corrects soient mélangés à des ratios aussi bas que **un sur quatre**. Le rôle de tuteur n'a montré aucun coût de ce type, tenant une exactitude correcte de **93% à 98%** sur dix conceptions erronées entraînées conjointement.

Un jeu de données de paires question-bonne réponse ne peut pas apprendre à un modèle à remarquer où un étudiant s'est trompé. Si vous entraînez un tuteur à diagnostiquer, les exemples doivent contenir le raisonnement.

## Choisir le signal d'entraînement qui correspond au jugement

L'affinage supervisé apprend au modèle à imiter vos démonstrations. Cela suffit pour le format et ne suffit pas pour le jugement. LearnLM énonce le résultat explicitement : **le RL est nettement plus efficace que le SFT seul pour suivre des instructions pédagogiques nuancées dans de longues conversations** ([[learnlm-improving-gemini-learning]]).

Son cadrage conditionné par les instructions permet aux développeurs et aux enseignants de spécifier le comportement du tuteur sans s'engager sur une définition unique de la pédagogie, et le co-entraînement l'intègre aux étapes de post-entraînement de Gemini. Les experts l'ont préféré à GPT-4o (**+31%**), à Claude 3.5 Sonnet (**+11%**) et à Gemini 1.5 Pro de base (**+13%**).

La lecture pratique : si votre défaillance est un ton erroné ou un format manquant, le SFT est la voie la moins coûteuse. Si votre défaillance est de choisir le mauvais geste pédagogique au douzième tour, le signal doit récompenser le choix.

## Étiqueter chaque exemple avec le comportement qu'il enseigne

Si la supervision doit contenir le raisonnement, le schéma d'étiquetage est une décision de programme. Une étude des étiquettes de supervision a trouvé qu'attribuer à chaque exemple d'entraînement un comportement cible, parmi la compétence disciplinaire, l'ancrage dans le programme, le raisonnement diagnostique et l'étayage, augmentait les scores à toutes les tailles de modèle testées, les gains les plus importants portant sur l'étayage et sur l'usage de l'historique d'un apprenant. Le diagnostic de l'état des connaissances restait le comportement le plus faible à **54.04%** ([[omniedu-open-educational-foundation-models-2026]]). Le diagnostic est l'élément le plus difficile de cette liste, donc prévoyez-le dans le budget.

La sélection des données est un problème d'entraînement à part entière. Edu-QuRating adapte la distillation de préférences à la curation de données éducatives, en remplaçant un score unique « est-ce éducatif ? » par **20 dimensions de grille** couvrant l'exactitude factuelle, la structure pédagogique et la pertinence de niveau ([[garrod-edu-qurating-educational-data-curation-2026]]). Si vous assemblez un corpus à partir de texte du web, ce filtre décide de ce à quoi votre modèle apprendra à ressembler.

## Choisir le pari de données que vous pouvez vous offrir

Deux paris opposés définissent l'espace, et celui que vous prenez dépend de ce que vous avez déjà.

Quand vos données sont rares, c'est le post-entraînement conditionné par les instructions qui porte le comportement. LearnLM utilise des instructions au niveau du système qui permettent aux enseignants et aux développeurs de spécifier le comportement du tuteur, et s'appuie sur le co-entraînement plutôt que sur un grand corpus de transcriptions de tutorat.

Quand vous disposez de données d'interaction authentiques, l'affinage sur ces données l'emporte. TeachLM parie que l'[[prompt-engineering|ingénierie de prompts]] n'est qu'une solution provisoire et que l'ingrédient rare est l'interaction réelle apprenant-tuteur. Entraîné sur **100.000 heures** de séances individuelles sous anonymisation rigoureuse, il double le temps de parole des étudiants, améliore le style de questionnement et augmente les tours de dialogue de **50%** ([[teachlm-post-training-llms-education]]).

Une voie moins coûteuse est la distillation. Pedagogy-R1, en 1.5B et 7B, a été affiné sur instructions à partir de productions filtrées pédagogiquement et distillées d'un enseignant QwQ-32B, associé à un prompting Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Entraîner la décision que l'étudiant rencontre ensuite

Le post-entraînement ne façonne pas nécessairement que ce que le modèle dit. TACT a post-entraîné un tuteur sur une taxonomie de 13 stratégies et une taxonomie de gestes d'étudiant à deux axes, et a gagné **20.30 points** sur son socle Qwen3.5-4B, avec un benchmark diagnostique qui **retient les étiquettes d'état de l'apprenant** disponibles pendant l'entraînement, obligeant le modèle à inférer l'état à partir du dialogue ([[tact-pedagogically-adaptive-esl-tutoring]]).

La même logique traverse l'alignement en [[special-education|éducation spécialisée]] ([[special-r1-rl-special-education]]) et les travaux de RL heuristique qui alignent les modèles comme guides socratiques plutôt que comme répondeurs ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Une plateforme va plus loin et entraîne la politique plutôt que la prose : un agent d'apprentissage par renforcement choisit le prochain exercice, de sorte que ce que l'apprenant fait ensuite est décidé par le modèle entraîné ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Ce dernier cas est le test qui dit si vous avez conçu un tuteur ou un générateur de texte. Si la seule sortie du modèle est de la prose, la pédagogie vit dans votre code d'orchestration. Si le modèle choisit la tâche suivante, la pédagogie est dans les poids.

## Le tester à l'échelle d'une conversation

L'entraînement ne rend pas un modèle sûr sur une longue conversation. SafeTutors montre que même des modèles pédagogiques spécialisés se dégradent au fil d'un dialogue soutenu et peuvent commettre des préjudices de divulgation excessive de réponses ([[hazra-safetutors-pedagogical-safety-2026]]). La [[pedagogical-safety|sécurité pédagogique]] doit être mesurée à l'échelle de la conversation, y compris les tours où l'étudiant a tort, insiste ou fait pression.

## Ce que les équipes d'entraînement comprennent mal

Plus de prompting finira par tenir. La flagornerie persiste après le prompting et l'alignement, et la pression d'autorité rouvre le comportement qu'un test de changement de contexte avait fermé. La transcription de votre propre test de pression est la preuve de cela dans votre produit.

Le chiffre du classement est le résultat. 96.52% sur CDPK décrit la performance sur les tâches pédagogiques d'un benchmark. Vos étudiants rencontrent votre programme, votre notation et un étudiant bloqué depuis vingt minutes.

Plus de données est la réponse quand les traces sont minces. Les réponses finales, à toute taille de données, maintenaient l'exactitude sur les conceptions erronées sous 30%. Ce qui a changé le résultat, c'est le raisonnement au niveau de l'étape dans les exemples ; la taille du corpus ne l'a jamais fait bouger.

Le rôle d'étudiant est la partie difficile, donc entraînez-le en dernier. L'étudiant a surgénéralisé les erreurs apprises jusqu'à ce que des exemples corrects apparaissent à un sur quatre. Le rôle de tuteur tenait de 93% à 98% dans les mêmes conditions, ce qui suggère que le tuteur est la moitié la plus facile à entraîner et que c'est le simulateur qu'il faut vérifier.

Le point de contrôle final est le résultat. La première étape de RL atteignait 94.13% et le SFT l'a portée à 96.20%, donc l'essentiel du mouvement s'est produit avant le dernier tour. Conservez les scores par étape : ils disent quelle étape a gagné le gain et laquelle vous pourriez couper la prochaine fois.

## Ce qui va vous revenir

**« Nous ne pouvons pas nous offrir le RL. »** Commencez alors par les parties qui ne coûtent rien : des traces au niveau de l'étape dans vos données, une étiquette de comportement cible pour chaque exemple, et une récompense que vous avez écrite en mots avant de l'écrire en code. La comparaison SWIM montre le SFT seul portant un modèle 7B à 0.474, ce qui est un vrai gain et reste en deçà de 0.618.

**« Le modèle de notre fournisseur refuse déjà de donner des réponses. »** Le post-entraînement des fournisseurs optimise l'utilité, et le refus de répondre n'est pas ce que les scores d'utilité récompensent. Testez le comportement dans vos propres conversations ; la réponse est dans la transcription, pas dans la fiche du modèle.

**« La distillation nous amène l'essentiel du chemin. »** Pedagogy-R1 est une distillation en 1.5B et 7B et c'est un point de départ raisonnable. Ce qu'elle hérite, c'est la pédagogie de l'enseignant, y compris ce que cet enseignant a raté, et vous aurez besoin d'un benchmark pour voir quelles parties ont été transférées.

**« Les tests de longue conversation coûtent trop cher pour être fréquents. »** Faites-le une fois par changement de modèle, avec un script fixe et un ensemble fixe de tours adverses, et différez les transcriptions. Le coût est dans l'écriture du script la première fois.

**« L'enseignant a dit que cela ressemble à un agent conversationnel. »** C'est un constat sur la forme de la conversation, et la forme de la conversation est une politique. Comptez combien de tours passent avant que le modèle cède une étape.

## Que faire cette semaine

**1.** Faites le test de pression : réponse fausse, étudiant qui insiste, étudiant qui invoque une autorité, étudiant qui demande la réponse. Conservez la transcription.

**2.** Écrivez votre récompense en trois phrases de français, puis vérifiez si votre code mesure ces trois choses.

**3.** Auditez un échantillon de vos exemples d'entraînement pour le raisonnement au niveau de l'étape. Rapportez la part qui contient une étape erronée et son diagnostic.

**4.** Ajoutez une étiquette de comportement cible par exemple, en commençant par l'étayage, et journalisez la distribution.

**5.** Mettez les scores des étapes intermédiaires dans la fiche du modèle à côté du score final.

## Où aller ensuite

[[making-ai-better-at-supporting-learning|Comment rendre l'IA meilleure à soutenir l'apprentissage dans notre propre discipline ?]] demande si l'entraînement est le bon levier, et [[developing-ai-tutor]] couvre le pendant en conception d'interaction, qui obtient le même comportement de guidage par l'étayage et des échelles d'indices plutôt que par des gradients. [[checking-whether-educational-ai-works]] couvre la mesure du changement effectif du comportement, et [[llm-training-and-fine-tuning]] est la page conceptuelle derrière tout cela.
