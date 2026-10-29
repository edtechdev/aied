---
title: "Comment savoir si une IA éducative fonctionne correctement, et pas seulement qu'elle obtient de bons scores ?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-29T08:08:36-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
contributors: [editor]
translation_of: faqs/checking-whether-educational-ai-works
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

Le rapport d'évaluation d'un fournisseur arrive avec un seul chiffre en tête : accord avec des correcteurs humains, 0.84. Ou bien votre pilote se termine vendredi et les preuves consistent en une enquête de satisfaction plus une ligne de banc d'essai recopiée des notes de version du modèle. En réunion, quelqu'un demande si le système fonctionne, et vous avez un chiffre qui ressemble à une réponse.

La réponse courte : les scores que vous voyez le plus souvent mesurent une ressemblance, et la ressemblance est une affirmation plus faible que « ceci enseigne » ou même que « cette rétroaction est lisible ». Décidez ce que chaque chiffre est autorisé à prouver, notez chaque production que votre système génère, et transformez l'exactitude en règle avec un seuil, une personne et une économie attachés. Un chiffre sur lequel personne ne peut agir n'est pas une preuve.

## La version courte

**1.** Écrivez une phrase qui nomme ce qui vous importe, puis choisissez une mesure qui lit cette chose. Un recouvrement de mots ne vous dira pas si le raisonnement est juste.

**2.** Évaluez chaque production séparément. Un bon score de notation ne dit rien du module de rétroaction qui se trouve à côté.

**3.** Faites noter une cinquantaine de productions par une personne et comparez ces notes avec celles de votre vérificateur automatique. Là où les deux divergent, c'est le vérificateur qui passe l'examen.

**4.** Remplacez « exactitude 0.84 » par une règle : en dessous de ce niveau de confiance, un humain lit la réponse. Rapportez le seuil, la part de travail qu'il économise et ce que l'accord est devenu.

**5.** Testez la sécurité sur des conversations entières, et vérifiez tout étudiant simulé avant de croire ce qu'il dit de votre tuteur.

## Décider ce que le chiffre est autorisé à prouver

Deux familles de chiffres dominent cette littérature. Les deux mesurent à quel point votre production ressemble à autre chose, ce qui est une affirmation plus faible que l'exactitude.

**Les scores de similarité** (ROUGE et BLEU) comparent la formulation de la réponse de votre système à la formulation d'une réponse de référence. Un modèle qui écrit quelque chose de proche du texte attendu obtient un bon score, même lorsque son raisonnement est faux, ou lorsqu'un étudiant pourrait atteindre la bonne réponse par une voie qui n'enseigne rien.

**Les scores d'accord** (QWK, kappa quadratique pondéré) mesurent à quel point les notes du modèle s'alignent sur celles d'un humain. Un modèle peut reproduire la note finale du correcteur tout en se trompant sur le pourquoi, et le pourquoi est la partie dont l'étudiant apprend.

Un étudiant peut atteindre une réponse fausse par une voie fausse qui ressemble à une voie juste, et aucun score de similarité ne le remarque. Si le raisonnement est ce qui vous importe, la mesure doit le lire : une grille appliquée par une personne, ou une vérification écrite pour cette étape particulière.

L'assistant du cours Linear Control Systems rapporte cela correctement. Sa meilleure configuration atteignait un score de similarité de **0.4093** face à des réponses de référence, l'amélioration étant mesurée de façon fiable au-dessus de zéro, et les auteurs déclarent clairement que les chiffres mesurent la formulation et le format ([[lora-finetuned-control-systems-course-qa-2026]]). Le score n'impressionne pas et l'article reste utile, parce qu'il dit ce que le score couvre.

## Noter chaque production séparément

Dans le projet WrAFT, un modèle affiné atteignait un score d'accord de **0.84** avec des correcteurs humains sur 360 essais TOEFL mis de côté. C'est un résultat solide pour la notation. Le modèle du même projet, entraîné à rédiger de la rétroaction, produisait une sortie tronquée et non analysable, tandis que le simple fait de solliciter un autre modèle produisait une rétroaction que les enseignants préféraient ([[wraft-automated-writing-evaluation-argumentative-2026]]).

La base de connaissances porte la même défaillance sous une seconde forme : un déploiement dont le module de notation obtenait de bons scores et dont la rétroaction arrivait coupée en pleine phrase et illisible. Rien dans le chiffre vedette ne le disait.

Dressez donc la liste des productions que votre système génère, puis donnez à chacune sa propre mesure et sa propre condition de réussite. La notation, le texte de rétroaction, le choix des indices et les refus de sécurité échouent de manières différentes, et un score au niveau d'un module ne voit pas au-delà de son propre module.

## Placer une personne là où le modèle doute

Une corrélation vous dit que le modèle a généralement raison. Elle ne vous dit pas quoi faire les fois où il a tort. Le résultat du routage par confiance est le modèle le plus net de la base de connaissances, et il est assez court pour être recopié.

La confiance s'est révélée un signal d'alerte fiable : lorsque le modèle doutait, il avait plus de chances de se tromper (**β = -0.602, p < .001**). L'équipe a envoyé à un humain les **20%** de réponses les moins sûres. Cette seule règle a fait passer l'accord avec les notes humaines de **0.78 à 0.82** et réduit le travail de notation manuelle d'environ **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Regardez ce que contient le rapport : un seuil, une personne et une économie. « Accord 0.84 » ne contient rien de tout cela, et c'est pourquoi il est difficile d'agir dessus et facile de le contester.

## Vérifier votre vérificateur automatique contre une personne

Beaucoup d'équipes utilisent désormais un second modèle pour juger le premier. L'arrangement est raisonnable et le second modèle n'a pas automatiquement raison.

Une étude qui a fait rédiger par un modèle de pointe des indices pour un [[intelligent-tutoring|système de tutorat intelligent]] a trouvé qu'environ **35%** d'entre eux étaient trop généraux, incorrects, ou donnaient la réponse, et que les contrôles de qualité automatisés du modèle lui-même étaient en désaccord avec le jugement humain sur lesquels étaient mauvais ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Version pratique : prenez un échantillon d'une cinquantaine de productions, faites-les noter par une personne, et comparez avec les notes de votre vérificateur. Là où les deux divergent, vous avez appris quelque chose sur le vérificateur. Conservez l'échantillon et le tableau des désaccords, car c'est aussi la pièce qui répond à un évaluateur qui demande comment vous le savez.

## Mesurer la quantité elle-même quand la tâche le permet

Le correctif le plus net consiste à entraîner le modèle sur la même quantité que celle que vous comptez mesurer. Un modèle affiné a été entraîné à reproduire les propriétés statistiques de questions de test : la difficulté de chaque item, sa capacité à séparer les étudiants forts des plus faibles. Il a appris ces régularités plutôt qu'on les lui a dites ([[multimodal-item-parameter-estimation-2026]]). Comme la cible était une propriété de l'évaluation elle-même, l'évaluation pouvait porter sur cette propriété plutôt que sur la formulation.

Rapportez la progression autant que le point d'arrivée. Le simulateur de rédaction SWIM publiait le score de chaque étape côte à côte : invite fondée sur une grille **0.577**, affinage **0.474 ± 0.023**, apprentissage par renforcement **0.618 ± 0.005** ([[swim-student-writing-simulation-2026]]). Un lecteur peut voir dans ce tableau si l'entraînement a fait quelque chose. Un seul chiffre final ne le lui dit pas, et il cache une étape où le modèle affiné faisait moins bien que l'invite.

## Comparer à quelque chose d'extérieur à votre projet

Obtenez d'abord une référence, y compris une référence peu coûteuse. Le modèle de l'assistant de cours sans ancrage obtenait un score inférieur à une simple recherche par mots-clés, le genre de résultat qui change la feuille de route et qui coûte une journée à trouver.

Un banc d'essai extérieur vous dit ensuite si votre chiffre vaut quelque chose. Sur le banc d'essai pédagogique CDPK, EduQwen atteignait **96.52%** contre **90.55%** pour Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Le Pedagogy Benchmark, construit à partir d'examens réels de développement professionnel des enseignants et couvrant **97 modèles**, a trouvé une exactitude allant de **28% à 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

Sur une tâche portant sur l'enseignement, les modèles allaient de médiocre à bon : un résultat de banc d'essai place donc votre système quelque part dans une plage large.

## Tester la sécurité sur une conversation entière

La plupart des tests de sécurité vérifient un seul échange. Les préjudices qui comptent en tutorat s'accumulent. SafeTutors a constaté que même des modèles conçus spécifiquement pour enseigner se dégradent au fil d'une longue conversation et peuvent révéler des réponses qu'ils devraient retenir ([[hazra-safetutors-pedagogical-safety-2026]]).

Faites tourner la vérification sur des conversations complètes, et écrivez délibérément les tours de test : l'étudiant qui se trompe, celui qui insiste, celui qui tente de faire sortir le modèle de son rôle. Un tuteur qui tient pendant dix tours et cède au onzième échoue au test qui compte, et une suite de tests tour par tour le notera comme propre.

## Vérifier l'étudiant simulé avant de lui faire confiance

Générer des étudiants simulés au lieu de recruter de vrais étudiants rend l'évaluation bien moins coûteuse. Un étudiant simulé est aussi un instrument de mesure, et il peut se tromper comme se trompent les instruments : trop coopératif, trop fluide, trop prompt à accepter un indice.

Le test le plus direct de la base de connaissances a comparé des étudiants simulés et des étudiants sollicités par invite à **382 dialogues mis de côté** issus de la plus grande collection publique de dialogues réels de mathématiques entre étudiants et tuteurs, à l'aide de sept mesures couvrant la langue, le comportement et la pensée ([[simulated-students-tutoring-dialogues-2026]]). D'autres travaux attaquent le réalisme par d'autres angles : [[inside-llm-student-simulator-reasoning-2026|INSIDE]] entraîne des modèles à la fois à agir et à penser comme des étudiants, et les profils conscients de l'historique conditionnent la simulation sur le passé d'un étudiant plutôt que sur une persona figée ([[history-aware-student-simulation]]).

Si votre dispositif de test est un étudiant simulé, validez le simulateur contre de vraies transcriptions avant de le laisser noter votre tuteur.

## Ce que les équipes d'évaluation comprennent mal

Un score d'accord élevé signifie que le système est exact. Il signifie que le système note comme le correcteur auquel vous vous êtes comparé, sur les essais sur lesquels vous vous êtes comparé. Le 0.84 de WrAFT venait avec une rétroaction qui ne s'analysait pas.

Un chiffre peut tenir lieu de produit. Les équipes livrent un tableau de bord avec « exactitude 0.84 » dans le coin et aucun champ pour le module de rétroaction, la politique d'indices ou le comportement de refus. Le score au niveau du module est le chiffre le plus facile à calculer et la chose la moins informative à rapporter.

Un banc d'essai extérieur tranche la question de savoir si l'outil fonctionne. L'étendue de 28% à 89% du Pedagogy Benchmark dit que la famille de tâches est difficile et inégalement servie. Votre position dans cette plage est un fait sur votre modèle. Ce que vos étudiants savent faire ensuite est un autre fait.

Un modèle qui en juge un autre est un substitut peu coûteux aux notations humaines. Il est peu coûteux. Le chiffre de 35% et le désaccord sur les indices mauvais décrivent ce qu'un juge jamais vérifié laissera passer.

Les étudiants simulés rendent l'évaluation gratuite. Ils la rendent peu coûteuse, et ils déplacent le coût vers la validation. La comparaison sur 382 dialogues existe parce que l'instrument avait besoin d'être calibré.

## Les objections qui vous reviendront

**« Nous n'avons pas d'annotateurs pour cela. »** Cinquante productions notées suffisent pour commencer. Notez-les vous-même si personne n'est libre, et gardez la feuille.

**« Notre score de banc d'essai bat Gemini. »** Oui, sur CDPK, sur les invites que ce banc d'essai utilise. Mettez la mesure sans aide à côté.

**« Notre juge automatisé est d'accord avec nos évaluateurs humains. »** Vous avez alors une corrélation sur un échantillon. Demandez sur quelles productions il était en désaccord et lisez-les, car c'est là que vit la défaillance.

**« Nous ne pouvons pas mener une évaluation complète avant le lancement. »** Faites les trois vérifications peu coûteuses : une production notée séparément, cinquante productions notées par une personne, une passe de sécurité sur une conversation entière. Les éléments coûteux peuvent suivre le pilote.

**« Le système n'est qu'une démonstration, l'évaluation est prématurée. »** Une démonstration est l'endroit le moins coûteux pour découvrir que votre chiffre mesure la formulation. Une fois qu'une feuille de route y est attachée, le même constat coûte plus cher à traiter.

## À faire cette semaine

**1.** Écrivez la phrase unique que votre évaluation est censée étayer. Mettez-la en tête du document d'évaluation.

**2.** Listez chaque production que le système génère et donnez à chacune une ligne, une mesure et une condition de réussite.

**3.** Sortez cinquante productions, notez-les vous-même, et placez vos notes à côté de celles du vérificateur.

**4.** Calculez la distribution de confiance et écrivez la règle de routage avec un chiffre dedans, plus le nom de la personne qui lit ce qui passe en dessous.

**5.** Menez une conversation de sécurité où l'étudiant se trompe, objecte deux fois et demande la réponse.

## Où aller ensuite

[[making-ai-better-at-supporting-learning|Comment rendre l'IA meilleure à soutenir l'apprentissage dans notre propre discipline ?]] couvre le versant conception du même problème. [[training-ai-tutors-to-guide-rather-than-answer]] traite la voie de l'entraînement vers un comportement de tutorat, et [[evaluating-ai-interventions-methods]] est la version destinée aux enseignants de cette question, avec [[reporting-interpreting-aied-research]] comme version destinée aux chercheurs. Les méthodes relèvent de [[ai-ed-evaluation]] et de [[llm-training-and-fine-tuning]].
