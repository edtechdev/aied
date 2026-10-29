---
title: "Comment les agents d'IA peuvent-ils aider les étudiants et les enseignants ?"
created: "2026-09-22T19:12:18-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
source_updated: "2026-10-28T11:29:19-04:00"
translation_of: faqs/ai-agents-support-students-instructors
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

Une démonstration commerciale dure quarante minutes. L'agent lit le programme, rédige le quiz de la semaine prochaine, signale trois étudiants qui n'ont pas ouvert la lecture et propose de leur écrire. Votre vice-recteur veut une décision de licence avant la fin du mois.

Un [[agentic-ai|agent]] planifie, appelle des outils, conserve le contexte, découpe le travail en sous-tâches et s'adapte au fil des tours, ce qui va plus loin qu'un [[conversational-ai|agent conversationnel]]. Les rôles côté étudiant et côté enseignant que cela ouvre sont réels. Les preuves ne montrent pas que plus d'autonomie produit plus d'apprentissage : dans la seule étude comparative directe disponible ici, un agent et un agent conversationnel arrivent à égalité. Placez l'autonomie là où une personne vérifie la sortie, laissez la planification à l'apprenant, et notez la qualité de l'enseignement selon votre propre grille.

## La version courte

**1.** Nommez le travail avant le produit.

**2.** Commencez côté enseignant, là où un enseignant inspecte déjà le travail.

**3.** Traitez l'autonomie supplémentaire comme un coût jusqu'à ce que les preuves disent le contraire.

**4.** Laissez la planification et le jugement à l'apprenant, car c'est ce que le devoir existe pour construire.

**5.** Notez l'agent selon votre grille, et planifiez une vérification sans assistance avant la fin du pilote.

## Choisissez le travail avant de choisir l'agent

[[agentic-workflows-education|Agentic Workflows in Education]] nomme quatre capacités récurrentes : la réflexion, la planification, l'usage d'outils et la collaboration multi-agents. Chacune ajoute un coût à côté de la possibilité, en [[explainable-ai|interprétabilité]], en coordination, en [[trust-calibration|confiance]], en latence et en supervision.

Les rôles côté étudiant vont du tutorat et de la planification d'étude [[adaptive-learning|adaptatifs]] au retour [[formative-assessment|formatif]], à la [[problem-solving|résolution de problèmes]] guidée et à la génération d'exercices, jusqu'aux recommandations de prérequis et à l'[[metacognition|amorçage métacognitif]] réflexif par [[prompt-engineering|invites]]. Les rôles côté enseignant couvrent le développement de matériel, la [[automated-question-generation|génération de questions]] et leur validation, le tri des rétroactions, la [[learning-analytics|analytique]] de cours, la conception pédagogique, la recherche de ressources et l'orchestration de sous-agents spécialisés.

Deux d'entre eux sont plus sûrs en premier, parce que tous deux produisent un artefact qu'une personne lit avant les étudiants : un générateur de questions associé à un validateur, et une rédaction que l'enseignant retouche.

## Commencez là où un humain vérifie déjà le travail

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], premier [[rct|essai contrôlé randomisé]] d'un système humain-IA en tutorat en direct, fournissait à des tuteurs débutants des conseils en temps réel tirés du raisonnement de tuteurs expérimentés, sur 900 tuteurs et environ 1.800 étudiants. Les étudiants des tuteurs ayant accès à l'outil avaient 4 points de pourcentage de plus de chances de maîtriser les sujets, l'écart montant à 9 points chez les tuteurs les moins bien notés, dont les étudiants ont rattrapé ceux des tuteurs mieux notés du groupe témoin. Cela coûtait environ 20 \$ par tuteur et par an, et l'analyse de plus de 550.000 messages de tutorat montrait des tuteurs passant de la donnée de réponses à la pose de questions guides. C'est de l'IA qui augmente l'[[teacher-role|enseignant]].

L'agent n'a pas enseigné à l'étudiant. Il alimentait un humain en pleine conversation, et l'humain décidait quoi dire. Une personne dans la boucle et un résultat proche du travail sont ce qui rend le résultat transposable à un autre cours.

## Ne supposez pas que plus d'autonomie achète plus d'apprentissage

[[ilieva-agentic-genai-higher-education-2026|Une étude portant sur 130 étudiants d'un cours de commerce en ligne]] a constaté que les agents conversationnels comme les agents d'[[generative-ai|IA générative]] étaient mieux notés que l'[[online-teaching-and-learning|apprentissage en ligne]] traditionnel sur l'apprentissage et la [[personalized-learning|personnalisation]], sans différence significative entre l'agent conversationnel et l'agent. Autonomie ajoutée, valeur ajoutée nulle sur ces mesures.

Le cadre de cette étude traite les agents comme des partenaires d'apprentissage bornés et supervisés par des humains, les objectifs, les points de contrôle et les décisions finales restant aux personnes. [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] en fait une règle de [[governance|gouvernance]] : l'autonomie ne devrait pas dépasser la maturité des preuves ni la solidité d'un contrôle humain responsable, et les preuves sont les plus fortes sur les résultats au niveau de l'artefact, les plus faibles sur l'[[learning-gains|apprentissage]] durable et l'[[equity-in-ai-education|équité]].

Le risque côté apprenant va dans le même sens. Un agent qui planifie et surveille à la place d'un étudiant supprime la pratique qui construit l'[[self-regulated-learning|autorégulation]] et invite à la [[cognitive-offloading|décharge cognitive]]. [[agentic-ai-pedagogical-best-practice-2026|Les recommandations de bonnes pratiques]] demandent une friction intentionnelle, un [[scaffolding|étayage]] qui s'estompe et une [[human-in-the-loop-ai|supervision humaine]]. Les [[desirable-difficulties|difficultés désirables]] ont des exemples de mise en œuvre. Les agents à conflit constructif, qui contestent une conception faible, ont amélioré les résultats de conception dans la recherche recensée. Les [[simulating-students|pairs simulés]] soutiennent l'[[collaborative-learning|apprentissage collaboratif]] et le questionnement [[socratic-method|socratique]], et les [[medical-education|enseignements cliniques]] fondés sur la [[simulation|mise en situation]] permettent aux apprenants de s'entraîner là où une erreur coûte peu.

Le test vaut pour tous : après la séance, que sait faire l'étudiant que l'agent faisait avant ? Céder le jugement coûte à l'étudiant la [[agency|pratique]] de l'exercer.

## Confrontez l'agent à votre propre jugement

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Huit agents d'enseignement par IA déployés dans un cursus de médecine]] ont été classés différemment par les scores générés par la plateforme et par une grille experte indépendante. L'agent classé troisième par la plateforme est arrivé dernier sur la qualité de l'enseignement. Les scores de plateforme indexent la performance des étudiants, qui évolue pour des raisons sans rapport avec l'enseignement.

Demandez ce que compte un chiffre de tableau de bord, qui a écrit la grille derrière, et à quoi ressemblerait un score faible dans le travail d'un étudiant. La [[pedagogical-safety|sécurité pédagogique]] relève de la même revue, car une chaîne d'[[pedagogical-agent|agents]] rend difficile de dire quel composant est responsable quand une réponse est fausse.

## Prévoyez l'arrêt

Les essais randomisés montrent qu'une brève assistance par l'IA peut déprimer la performance ultérieure sans assistance, et l'intervalle qui suit le retrait, le [[cognitive-washout-ai-skill-decay-2026|lessivage cognitif]], n'est presque jamais mesuré. La synthèse derrière cette page s'appuie sur une [[meta-analysis-systematic-review|revue de portée]] de 474 études et constate que le travail se concentre sur l'[[higher-ed|enseignement supérieur]], les [[stem-education|STIM]], les dispositifs de court terme et le tutorat textuel, une minorité seulement s'ancrant explicitement dans une théorie de l'apprentissage. Un pilote qui s'arrête avec la licence a mesuré la mauvaise fenêtre.

## Ce que les administrateurs comprennent mal

Un agent est un agent conversationnel amélioré, donc l'amélioration devrait se voir dans les résultats. Dans la comparaison à 130 étudiants, les deux conditions d'IA battent l'apprentissage en ligne et aucune ne bat l'autre.

Le tableau de bord classe la qualité de l'enseignement. Il classe la performance des étudiants, et huit agents ont produit un classement qui inversait la troisième et la dernière place par rapport à une grille experte.

L'autonomie est la fonctionnalité à acheter. La règle de proportionnalité va dans l'autre sens, et les preuves sont les plus minces là où l'autonomie est la plus grande.

L'accès comble l'écart d'équité. Un accès inégal à des systèmes agentiques capables peut l'élargir, et un agent reproduit à grande échelle les biais des données d'entraînement.

## Ce qui va vous retomber dessus

**« Les étudiants vont simplement le laisser faire le travail. »** Certains le feront, et l'architecture décide de la facilité. Les agents qui planifient et rédigent à la place de l'étudiant y invitent. Les agents qui exigent une tentative, puis posent une question, non.

**« L'évaluation de l'éditeur dit que ça marche. »** Demandez ce que compte le chiffre. Si c'est la performance des étudiants mesurée par la plateforme, elle mesure les étudiants autant que l'agent.

**« Personne ne peut dire quel agent est responsable dans une chaîne. »** Vrai de la plupart des déploiements actuels. Nommez un responsable de la chaîne, consignez quel composant a produit quelle sortie, et gardez un point de contrôle humain avant que quoi que ce soit atteigne un dossier étudiant.

## À faire cette semaine

**1.** Écrivez le travail et le résultat sur lequel vous le jugerez, une phrase chacun, avant le prochain appel avec l'éditeur.

**2.** Notez la sortie d'un agent selon votre grille sur dix travaux réels d'étudiants, et conservez les notes.

**3.** Ajoutez au plan de pilote une tâche sans assistance, datée et attribuée à un responsable.

## Où aller ensuite

[[developing-ai-tutor]] couvre la construction côté étudiant, de l'objectif à l'échelle d'aide, et [[evaluating-ai-interventions-methods]] traite de la question de savoir si le dispositif a fonctionné. [[intelligent-tutoring]] et [[ai-literacy]] fournissent le vocabulaire de conception que cette page présuppose.
