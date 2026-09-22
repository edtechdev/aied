---
title: "Comment les agents d'IA peuvent-ils aider les étudiants et les enseignants ?"
created: "2026-09-22T19:12:18-04:00"
updated: "2026-09-22T19:12:18-04:00"
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Comment les agents d'IA peuvent-ils aider les étudiants et les enseignants ?

**Les agents d'IA peuvent dépasser la réponse à une question en un seul tour** en planifiant, en utilisant des outils, en mémorisant un contexte pertinent, en coordonnant des sous-tâches et en adaptant leur soutien au fil d'une séquence d'interactions. Pour les étudiants, les rôles plausibles incluent le tutorat adaptatif, la planification des études, la rétroaction [[formative-assessment|formative]], la [[problem-solving|résolution de problèmes]] guidée, la génération d'exercices, la simulation, les recommandations de prérequis et l'[[prompt-engineering|invitation]] réflexive ou métacognitive. Pour les enseignants, les agents peuvent aider à élaborer des supports, à [[automated-question-generation|générer des questions]] et à les valider, à trier les rétroactions, à analyser les [[learning-analytics|données d'apprentissage]] d'un cours, à conduire des flux de conception pédagogique, à retrouver des ressources et à orchestrer des agents spécialisés.

## Des capacités agentiques récurrentes

L'article [[agentic-workflows-education|Agentic Workflows in Education]] décrit quatre capacités agentiques récurrentes : **la réflexion, la planification, l'usage d'outils et la collaboration multi-agents**. Chacune ouvre des possibilités mais introduit aussi des difficultés d'[[explainable-ai|interprétabilité]], de coordination, de confiance, de latence et de supervision.

## Ce que les agents d'IA font bien (implications positives)

- **Un soutien durable et adaptatif.** Contrairement aux [[conversational-ai|agents conversationnels]] d'un seul tour, les agents peuvent maintenir une conversation d'apprentissage sur de nombreux échanges, en se souvenant de ce que l'apprenant sait, en adaptant la difficulté et en séquençant un [[scaffolding]] en plusieurs étapes. Cela soutient un apprentissage [[adaptive-learning|adaptatif]] et [[personalized-learning|personnalisé]] à grande échelle.
- **Des enseignants déchargés.** Les agents peuvent rédiger des supports, générer et valider des questions (par exemple un couple générateur + validateur), trier les rétroactions et orchestrer des sous-agents spécialisés, libérant les enseignants pour des interactions à plus forte valeur.
- **Une interaction riche et une [[desirable-difficulties|friction productive]].** Les classes multi-agents et les pairs simulés créent des dynamiques variées (discours entre pairs, désaccord constructif, jeu de rôles) qui soutiennent l'[[collaborative-learning|apprentissage collaboratif]] et l'[[socratic-method|interrogation socratique]]. Des agents conçus pour contester plutôt que pour acquiescer peuvent pousser les apprenants vers une remise en question plus profonde (les agents de conflit constructif ont amélioré les résultats de conception dans la recherche).
- **Une pratique et une simulation à faible risque.** Les [[simulation|simulations]] fondées sur des agents ([[simulating-students|étudiants simulés]], scénarios [[medical-education|cliniques]]) permettent aux apprenants de s'exercer dans des environnements sûrs et répétables avant l'application réelle.

## Risques et réserves principaux (implications négatives)

- **Trop d'automatisation peut vider l'apprentissage.** Plus un agent automatise, moins l'apprenant fournit de travail cognitif. Les agents proactifs peuvent laisser les étudiants en consommateurs passifs, affaiblissant les processus coûteux qui construisent un apprentissage durable et augmentant le [[cognitive-offloading|risque de dépendance excessive]].
- **Un engagement métacognitif réduit.** Si les agents prennent en charge la planification et le suivi, les apprenants peuvent ne pas développer la [[metacognition]] et l'[[self-regulated-learning|autorégulation]] que l'éducation cherche à construire. Les agents devraient susciter ces processus, non les remplacer.
- **Une confiance mal placée et des lacunes de vérification.** Les agents autonomes peuvent produire des résultats plausibles mais non validés ; les apprenants et les enseignants peuvent [[trust-calibration|leur faire trop confiance]]. Une vérification robuste et l'[[ai-literacy]] deviennent plus importantes à mesure que les agents gagnent en [[agency|autonomie]].
- **Opacité et responsabilité.** Les systèmes multi-agents compliquent la [[human-in-the-loop-ai|supervision humaine]] : quel agent est responsable d'une erreur, et où un humain intervient-il ? Les défaillances de coordination et la dérive des personas peuvent miner la fiabilité et la [[pedagogical-safety]].
- **[[equity-in-ai-education|Équité]] et biais.** Les agents peuvent reproduire à grande échelle les biais des données d'entraînement, et un accès inégal à des systèmes agentiques performants peut creuser les inégalités.

## Ce que les données montrent jusqu'ici

Des résultats concrets, et des mises en garde, s'accumulent. [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], le premier [[rct|essai contrôlé randomisé]] d'un système humain-IA en tutorat en direct, a fourni à des tuteurs novices des conseils experts en temps réel issus du raisonnement de tuteurs expérimentés : sur **900 tuteurs et environ 1,800 étudiants**, les étudiants de tuteurs ayant accès à l'outil étaient **4 points de pourcentage plus susceptibles de maîtriser les sujets**, un écart qui montait à **9 p.p.** chez les tuteurs les moins bien évalués, dont les étudiants rejoignaient ceux des tuteurs mieux évalués du groupe témoin. Cela coûtait environ **\$20 par tuteur et par an**, et l'analyse de **plus de 550,000 messages de tutorat** a montré que les tuteurs évoluaient vers des questions guidantes plutôt que vers des réponses données d'emblée : un cas clair d'IA qui augmente le [[teacher-role|rôle de l'enseignant]] au lieu de le remplacer.

Mais « agentique » n'est pas automatiquement meilleur. [[ilieva-agentic-genai-higher-education-2026|Une étude menée auprès de 130 étudiants dans un cours de commerce électronique]] a constaté que les agents conversationnels d'[[generative-ai]] comme les agents d'IA générative étaient tous deux mieux notés que l'[[online-teaching-and-learning|apprentissage en ligne]] traditionnel pour l'enrichissement de l'apprentissage et la [[personalized-learning|personnalisation]], mais **aucune différence statistiquement significative entre la condition agent conversationnel et la condition agent** n'apparaissait : davantage d'autonomie ne s'est donc pas traduit par davantage de valeur d'apprentissage. Le cadre proposé (Agentic GAI-Supported Learning Framework) traite en conséquence les agents comme des **partenaires d'apprentissage délimités et supervisés par des humains**, dont les objectifs, les points de contrôle et les décisions finales restent réservés aux humains.

Deux autres mises en garde comptent. Premièrement, le **retrait** : les essais randomisés montrent que même une brève assistance par IA peut déprimer la performance non assistée qui suit, et l'intervalle après le retrait, nommé [[cognitive-washout-ai-skill-decay-2026|cognitive washout]], est presque entièrement non mesuré, de sorte que la durabilité des [[learning-gains|gains d'apprentissage]] assistés par un agent reste inconnue. Deuxièmement, l'**évaluation** : [[zhang-platform-scores-miss-ai-teaching-agents-2026|le déploiement de huit agents d'enseignement de l'IA dans un cursus médical]] a montré que les scores produits par la plateforme classaient les agents différemment d'une grille d'évaluation experte indépendante (l'agent classé troisième par la plateforme arrivait dernier sur la qualité d'enseignement) parce que les scores de la plateforme indexent la performance des étudiants plutôt que la qualité d'enseignement de l'[[pedagogical-agent|agent]]. La revue de [[governance]] [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] ajoute une règle de proportionnalité : **l'autonomie ne devrait pas dépasser la maturité des preuves ni la solidité d'un contrôle humain responsable**, en notant que les preuves sont les plus fortes pour les résultats au niveau des artefacts et les plus faibles pour l'apprentissage durable et l'équité. Pour savoir comment en concevoir un, voir [[developing-ai-tutor]] ; pour savoir comment évaluer s'il fonctionne, voir [[evaluating-ai-interventions-methods]].

## L'état des preuves

La base de preuves est encore émergente. La synthèse [[agentic-ai|Agentic AI in Education]] de la base de connaissances s'appuie sur une [[meta-analysis-systematic-review|revue de portée]] de 474 études, mais note une forte concentration dans l'[[higher-ed|enseignement supérieur]], les [[stem-education|STIM]], les dispositifs à court terme et le tutorat textuel ; seule une minorité des travaux examinés ancre explicitement ses systèmes dans la théorie éducative, et une validation rigoureuse en classe sur le long terme reste limitée.

L'avertissement de conception clé est donc de ne pas assimiler une plus grande autonomie à un meilleur apprentissage. [[agentic-ai-pedagogical-best-practice-2026|Agentic AI and Pedagogical Best Practice]] recommande une friction intentionnelle, un étayage dynamique et une supervision humaine pour que l'initiative de l'agent ne supprime pas la planification, le suivi, le jugement et l'effort de l'apprenant. Voir aussi [[intelligent-tutoring|Intelligent Tutoring]] et [[human-in-the-loop-ai|Human-in-the-Loop AI]].