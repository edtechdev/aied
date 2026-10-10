---
title: "Comment entraîner un tuteur d'IA à guider les étudiants plutôt qu'à leur répondre ?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-10T04:00:13-04:00"
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
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Un modèle généraliste est post-entraîné sur la préférence humaine d'utilité, et en pratique l'utilité signifie répondre à la question promptement et complètement. Le tutorat exige l'inverse : aider un étudiant à parvenir à la réponse plutôt que la lui remettre. C'est le seul endroit de l'IA éducative où l'on peut avoir réellement besoin de changer le comportement appris du modèle plutôt que son invite, et c'est aussi la partie du domaine la mieux étayée par les preuves. Les résultats sont importants, et la variable décisive est la **récompense**, non l'algorithme.

## Pourquoi l'invite ne suffit peut-être pas ici

L'[[prompt-engineering|invite]] et même l'entraînement général d'alignement laissent subsister une attraction vers l'accord. La [[contextual-sycophancy-ai-literacy|sycophance contextuelle]] persiste après l'invite et l'alignement, les erreurs des apprenants se propageant toujours dans les conseils de l'IA. EduFrameTrap montre que des modèles qui résistent aux attaques par changement de contexte capitulent néanmoins sous la pression de l'autorité ou la pression socio-affective et retiennent la rétroaction corrective — ce pourquoi ses auteurs soutiennent que le comportement « bienveillant mais correct » devrait être une **exigence d'entraînement explicite** plutôt qu'une préférence ([[eduframetrap-llm-sycophancy-educational-safety]]).

Si le mode de défaillance de votre tuteur est qu'il est d'accord avec une mauvaise réponse, lui demander par invite de ne pas l'être constitue une atténuation plutôt qu'un correctif.

## La récompense est toute la conception

Une récompense est une spécification comprimée de ce que vous voulez, et les modèles optimisent ce que vous avez réellement écrit. Cela fait de la conception de la récompense la décision au plus fort levier du processus, et c'est là que le meilleur résultat d'ici a été gagné.

Le modèle de récompense d'EduQwen a **privilégié les réponses guidantes plutôt que les réponses directes**, avec une extraction de négatifs difficiles pour exclure les questions que le modèle de base résolvait déjà, et des déploiements étendus de 5 à 8 étapes afin de capter les décisions pédagogiques multi-étapes. Son pipeline en trois étapes — RL initial, SFT synthétique, RL final — a atteint **96.52%** sur le benchmark CDPK, contre **90.55%** pour Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Deux choses en découlent directement. Premièrement, attendez-vous à ce que la récompense soit contournée : elle spécifie moins que ce que vous vouliez dire, donc écrivez-la contre un benchmark plutôt que contre une intuition. Deuxièmement, les chiffres intermédiaires sont instructifs — la seule première étape de RL a atteint 94.13%, le SFT sur 40,000 réponses auto-générées l'a portée à 96.20%, et la dernière passe de RL a ajouté la fraction restante. La majeure partie du gain est venue tôt.

## L'apprentissage par renforcement bat l'imitation pour la pédagogie

Si vous ne faites que de l'affinage supervisé, vous apprenez au modèle à imiter vos démonstrations. Cela suffit pour le format et ne suffit pas pour le jugement. Le constat de LearnLM est explicite : **la RL est sensiblement plus efficace que le seul SFT pour suivre des instructions pédagogiques nuancées dans de longues conversations** ([[learnlm-improving-gemini-learning]]).

Son cadrage conditionné par les instructions permet aussi aux développeurs et aux enseignants de spécifier le comportement du tuteur sans s'engager pour une définition unique de la pédagogie, et il est intégré aux étapes de post-entraînement de Gemini par co-entraînement. Les experts l'ont préféré à GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) et au Gemini 1.5 Pro de base (**+13%**).

## Supervisez le processus, non la réponse

Le résultat le plus directement actionable de ce domaine porte sur *ce que les données d'entraînement doivent contenir*. Des modèles à instruction n'ont appris les conceptions erronées en algèbre que lorsqu'ils étaient entraînés sur des **traces de solution au niveau de l'étape**. Entraînés sur les seules réponses finales, la précision restait **inférieure à 30% à toutes les tailles de données** ([[misconception-acquisition-dynamics-llms-2026]]).

Deux détails supplémentaires de cette étude comptent pour quiconque construit l'un ou l'autre côté d'un tuteur :

- Le rôle d'**étudiant** a surgénéralisé l'erreur apprise jusqu'à ce que des exemples corrects soient explicitement mélangés, à des ratios aussi faibles qu'**un sur quatre**.
- Le rôle de **tuteur** n'a montré aucun coût de ce type, conservant une précision correcte de **93% à 98%** sur dix conceptions erronées entraînées conjointement.

Si vous entraînez un tuteur à diagnostiquer, vos exemples doivent contenir le raisonnement, et pas seulement le verdict. Un jeu de données de paires question–réponse correcte ne peut pas apprendre à un modèle à remarquer où un étudiant s'est trompé.

## Faites porter la pédagogie par les données d'entraînement

Si la supervision doit contenir le raisonnement, le schéma d'étiquetage relève d'une décision de programme d'études plutôt que d'une étape de nettoyage de données. Deux résultats portent ici directement là-dessus.

**Étiquetez chaque exemple avec le comportement que vous voulez.** Une étude sur les étiquettes de supervision a trouvé que l'attribution à chaque exemple d'entraînement d'un comportement cible — compétence disciplinaire, ancrage dans le programme, raisonnement diagnostique, ou étayage — élevait chaque échelle de modèle testée, avec les gains les plus importants dans l'étayage et dans l'usage de l'historique d'un apprenant. Le diagnostic de l'état de connaissance est resté le comportement le plus faible à **54.04%**, ce qui constitue une attente utile à retenir : le diagnostic est la chose la plus difficile à enseigner de cette liste ([[omniedu-open-educational-foundation-models-2026]]).

**Traitez la sélection des données comme un problème d'entraînement à part entière.** Edu-QuRating adapte la distillation de préférences à la curation de données éducatives, remplaçant un score unique « est-ce éducatif ? » par **20 dimensions de grille** couvrant l'exactitude factuelle, la structure pédagogique et l'adéquation au niveau ([[garrod-edu-qurating-educational-data-curation-2026]]). Si vous assemblez un corpus à partir de texte du web, c'est le genre de filtre qui décide de ce que votre modèle apprend à avoir comme son.

## La densité de la récompense compte autant que la récompense

Une récompense à correspondance exacte est trop parcimonieuse lorsque la chose qui vous importe a plusieurs dimensions. Le simulateur d'écriture SWIM montre nettement la progression :

- Invite fondée sur une grille : meilleur QWK moyen par trait **0.577** (Claude Sonnet), **0.422** (GPT-5.4), quasi nul pour un modèle ouvert 7B
- Affinage supervisé : **0.474 ± 0.023** pour ce modèle 7B
- GRPO avec une récompense d'exactitude dense et normalisée par trait : **0.618 ± 0.005**, sur chaque trait et chaque invite ([[swim-student-writing-simulation-2026]])

La conception de la récompense était le point important : un signal dense normalisé par trait plutôt qu'une correspondance exacte, parce que la correspondance exacte est trop parcimonieuse dans un cadre à traits multiples. Si votre récompense ne se déclenche que sur une réponse parfaite, l'essentiel de votre signal d'entraînement est du silence.

## Entraînez la décision, pas seulement l'énoncé

Le post-entraînement ne doit pas seulement façonner ce que le modèle dit. TACT a post-entraîné un tuteur sur une taxonomie de 13 stratégies plus une taxonomie à deux axes des mouvements de l'étudiant, et a gagné **20.30 points** sur son socle Qwen3.5-4B, avec un benchmark diagnostique qui **retient les étiquettes d'état de l'apprenant** disponibles à l'entraînement afin que le modèle doive inférer l'état à partir du dialogue ([[tact-pedagogically-adaptive-esl-tutoring]]).

La même logique traverse l'alignement en [[special-education|éducation spécialisée]] ([[special-r1-rl-special-education]]) et les travaux de RL heuristique qui alignent les modèles comme des guides socratiques plutôt que comme des répondants ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Une plateforme va plus loin et entraîne la *politique* plutôt que la prose : un agent par apprentissage par renforcement choisit le problème d'exercice suivant, si bien que ce que l'apprenant fait ensuite est décidé par le modèle entraîné ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

## Quelles données vous faut-il ?

Deux paris opposés définissent l'espace, et celui que vous prenez dépend de ce que vous avez déjà :

- **Le post-entraînement conditionné par les instructions quand vos données sont rares.** LearnLM porte des instructions au niveau du système qui permettent aux enseignants et aux développeurs de spécifier le comportement du tuteur, et s'appuie sur le co-entraînement plutôt que sur un grand corpus de transcriptions de tutorat.
- **L'affinage sur des données d'interaction authentiques quand vous en avez.** TeachLM parie que l'[[prompt-engineering|ingénierie d'invite]] est un expédient et que l'ingrédient rare est l'interaction réelle apprenant–tuteur. Entraîné sur **100,000 heures** de séances individuelles sous anonymisation rigoureuse, il double le temps de parole des étudiants, améliore le style de questionnement, et augmente les tours de dialogue de **50%** ([[teachlm-post-training-llms-education]]).

Une voie moins coûteuse vers un comportement pédagogique est la distillation : Pedagogy-R1 (1.5B et 7B) a été entraîné aux instructions sur des sorties pédagogiquement filtrées distillées d'un enseignant QwQ-32B, associé à une sollicitation Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Testez-le à la longueur d'une conversation

L'entraînement ne rend pas un modèle sûr sur une longue conversation. SafeTutors montre que même des modèles pédagogiques spécialisés se dégradent au fil d'un dialogue soutenu et peuvent commettre des préjudices de divulgation excessive de réponses ([[hazra-safetutors-pedagogical-safety-2026]]). La [[pedagogical-safety|sécurité pédagogique]] doit être testée à la longueur d'une conversation plutôt qu'au tour isolé — y compris les tours où l'étudiant se trompe, insiste, ou pousse.

## Questions liées

- [[making-ai-better-at-supporting-learning|Comment rendre l'IA meilleure pour soutenir l'apprentissage dans notre propre discipline ?]] — pour savoir si l'entraînement est le bon levier
- [[checking-whether-educational-ai-works|Comment savoir si une IA éducative fonctionne correctement, et pas seulement qu'elle obtient de bons scores ?]] — mesurer si le comportement a réellement changé
- [[developing-ai-tutor|Quelles sont les bonnes pratiques pour développer un tuteur d'IA efficace ?]] — le versant conception d'interaction, qui façonne le même comportement guidant par l'étayage et les échelles d'indices plutôt que par l'entraînement
- [[llm-training-and-fine-tuning]] — la page de concept complète
