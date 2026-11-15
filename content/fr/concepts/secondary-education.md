---
title: "Enseignement secondaire"
created: "2026-11-15T11:52:55-05:00"
updated: "2026-11-15T11:52:55-05:00"
type: concept
pedagogy: [help-seeking, student-engagement, self-regulated-learning, metacognition]
technology: [generative-ai, intelligent-tutoring, llm]
level: [secondary, middle school, k 12]
confidence: medium
translation_of: concepts/secondary-education
source_updated: "2026-11-15T06:35:09-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-15"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Synthèse :** L'enseignement secondaire est le cycle où l'usage de l'[[generative-ai|IA générative]] est ordinaire et où les [[learning-gains|gains d'apprentissage]] mesurés sont plus petits que ce qu'on en affirme. Un essai de deux ans dans des collèges ordinaires a produit environ 0.06–0.08 SD par an, et la [[meta-analysis-systematic-review|méta-analyse]] du [[intelligent-tutoring|tutorat intelligent]] en K-12 environ g = 0.27, parce que l'[[student-engagement|engagement]] et la [[help-seeking|recherche d'aide]] bornent l'effet plutôt que la capacité du modèle. Les élèves préfèrent l'outil qui fait davantage du travail cognitif, et les [[ai-detection|détecteurs]] séparent des essais entiers mais pas des phrases. Les données vont de la révision d'examen à l'[[writing-education|écriture]] et à l'autorité d'auteur, jusqu'à la notation, la détection et les années de collège où l'usage devance le scepticisme.

## Questions à examiner

- Un tuteur se trouve à un clic, et pourtant l'élève médian lui a demandé de l'aide dans 17 % des sessions contenant une erreur. Qu'est-ce qui rend la demande moins coûteuse que l'omission dans votre classe ?
- Les élèves ont préféré le [[conversational-ai|chatbot]] à la prise de notes et ont moins appris avec lui. Comment repéreriez-vous ce piège avant que le test ne le fasse ?
- Les détecteurs atteignent F1 0.96 sur des essais entiers, 0.88 sur des phrases, et perdent un tiers de leur rappel après une réécriture. Quelle politique d'intégrité survit à cela ?
- Presque tous les essais au secondaire durent de quatre à douze semaines et portent sur un test d'unité. Qu'est-ce qui justifierait une adoption départementale sur une année entière ?
- L'usage déclaré passe de 12 à 17 tandis que la [[trust|confiance]] dans les productions reste plate. Où, entre la 6e et la 9e année, enseigneriez-vous la vérification ?

## Introduction

L'enseignement secondaire couvre environ 11 à 18 ans — le collège, puis le lycée — et trois traits du contexte façonnent ce que l'IA peut y faire. La fréquentation est obligatoire, les enseignants sont des spécialistes disciplinaires qui peuvent voir 150 élèves par semaine, et les [[assessment|évaluations]] qui comptent sont externes : GCSE, [[summative-assessment|examens]] nationaux et PISA à 15 ans.

Les mêmes élèves adoptent le plus vite. En Suisse, 84 % des 14–19 ans déclarent un usage régulier de l'IA générative, une part plus élevée que dans n'importe quelle tranche d'âge adulte. Un usage quasi universel, des examens externes et un adulte responsable de plusieurs classes expliquent pourquoi la littérature se concentre sur la révision, la notation, les devoirs et l'intégrité plutôt que sur la refonte du [[curriculum-design|programme]].

## Ce que la recherche mesure

- **Les gains du tutorat intelligent sont modestes et s'amenuisent avec la distance.** Dix-huit expériences américaines sur 11 systèmes se regroupaient à g = 0.271, presque identiques à l'élémentaire (0.266) et au collège (0.256). Les effets tombaient à 0.146 là où des écoles rurales étaient incluses et à 0.110 non significatif au-delà de six mois ; les résultats de fin d'année (0.155) valaient un tiers des post-tests immédiats (0.460) ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).

- **Les revues en STIM rapportent des effets plus grands sous un contrôle de qualité plus faible.** Trente-cinq études expérimentales et quasi expérimentales se regroupaient à g = 0.670, avec le lycée à 1.099 et le collège à 0.392. Les auteurs n'ont appliqué aucun instrument d'évaluation formel, et l'hétérogénéité en effets fixes atteignait I² = 82.98 % ([[ai-supported-instruction-stem-meta-analysis-2026|Doğan et al., 2026]]).

- **Les gains de [[motivation|motivation]] sont plus faibles ici qu'à l'université.** Sur 42 études contrôlées (56 tailles d'effet, 6,059 élèves), l'effet agrégé sur la motivation était g = 0.764, mais les études au secondaire moyennaient 0.360 contre 0.886 dans l'[[higher-ed|enseignement supérieur]], avec I² = 93.7 % ([[genai-learning-motivation-meta-analysis-2026|Fang et al., 2026]]).

- **Un essai typique est court et utilise un test construit localement.** Une évaluation en sciences du GCSE a randomisé 929 élèves dans trois matières, retenu 644 au post-test, et rapporté g = 0.33 sur un test de 35 points aligné sur le programme que ses auteurs qualifient de provisoire ([[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al., 2026]]).

## Tutorat, révision et le problème de l'engagement

- **L'accès n'est pas l'usage.** Dans 18 collèges du Tennessee, Khanmigo a élevé les résultats en mathématiques de 0.06–0.08 SD par an pour environ 15 \$ par élève, proche du gain obtenu avec la même pratique Khan Academy sans IA. Quatre-vingt-seize pour cent des élèves l'ont essayé, mais l'élève médian lui a écrit dans 17 % des sessions contenant une erreur ([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos et Low, 2026]]).

- **Une personne dans la salle change l'expérience de la difficulté.** Chez 149 élèves de 12e année travaillant au-dessus du niveau du programme, le stress était rapporté par 32.0 % des élèves cherchant sur le web ouvert, 19.2 % des utilisateurs d'un tuteur GenAI et 5.8 % de ceux accompagnés d'un tuteur humain. Aucun résultat d'apprentissage n'a été mesuré ([[ennion-human-tutoring-genai-tutoring-search-2026|Ennion et McLellan, 2026]]).

- **Un soutien sensible à l'affect peut accroître l'[[anxiety-and-stress|anxiété]] qu'il cible.** Dans deux classes de [[chemistry-education|chimie]] de 9e année exécutant la même séquence de laboratoire de 16 semaines, l'anxiété augmentait avec la [[feedback|rétroaction]] émotionnelle de l'IA (F = 4.60, p = 0.035) et restait stable avec l'enseignant seul. Les élèves ne pouvaient pas dire si les conseils apaisants du système ou la procédure de l'enseignant faisaient autorité ([[liu-chemistry-lab-emotional-feedback-2026|Liu, Li et Zhang, 2026]]).

## Écriture, lecture et autorité d'auteur

- **Les élèves préfèrent l'activité qui fait le travail à leur place.** Dans sept écoles anglaises, 405 élèves de 10e année ont lu deux passages d'histoire et ont été testés trois jours plus tard, sans document. La prise de notes a battu l'usage du chatbot d'environ 0.5 SD en rétention et 0.4 en compréhension, mais les élèves jugeaient le chatbot plus facile et plus agréable ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).

- **La rétroaction ne change l'écriture que chez les élèves disposés à en tenir compte.** Chacun des 1,507 élèves du secondaire a reçu un message standardisé et dix minutes pour réviser ; l'engagement comportemental et les attitudes instrumentales ont fait passer la performance du 46e au 54e percentile, tandis que l'[[technology-acceptance-model|utilité perçue]] ne médiatisait rien ([[jansen-argumentative-writing-feedback-receptivity-2026|Jansen et al., 2026]]).

- **Un assistant contraint peut maintenir les élèves dans le travail de pensée.** Dans une unité bilingue sur la photosynthèse, 122 élèves de 7e année ont produit 6,788 tours avec un assistant invité à retenir ses réponses ; 59 % ont atteint une agentivité épistémique partagée, et il n'a donné de réponse directe dans aucun des 1,049 tours audités. Environ 20 % des interactions impliquaient de copier du texte ou de soutirer une réponse ([[chang-shared-epistemic-agency-gai-scientific-writing-2026|Chang et al., 2026]]).

## Évaluation, intégrité et pression des examens

- **L'accord de notation peut être élevé et rester biaisé.** Un correcteur [[llm]] commercial atteignait les notes de [[physics-education|physique]] du GCSE AQA à κ pondéré quadratique = 0.885 sur 71 items contestés, mais sur-notait de 0.30 point en moyenne et de 6 points sur une question ([[ai-marking-accuracy-gcse-physics-2026|Bozdag et Qiu, 2026]]).

- **Un kappa ne montre pas si un correcteur peut être manipulé.** Sur 22 modèles sollicités, 14 relevaient une note de plus de 5 % de l'échelle lorsque la réponse portait une note, un de 83.2 %, et décrire l'élève comme fort relevait la note dans 28 des 66 paires modèle-tâche ([[porcaro-ai-grading-benchmark-2026|Porcaro, 2026]]).

- **La détection repère des essais, pas des phrases.** Avec les journaux de frappe et de presse-papiers de 2,429 élèves allemands de 15 ans, les classifieurs séparaient le texte IA du texte humain à macro-F1 0.96, mais le F1 au niveau de la phrase tombait à 0.88 et le rappel IA chutait de 0.92 à 0.60 après une réécriture dans le style d'un élève ([[schaller-ai-text-detection-authentic-writing-2026|Schaller et al., 2026]]).

- **Les élèves raisonnent sur l'intégrité de façon conditionnelle.** Chez 133 élèves hongkongais de 14 à 16 ans, l'acceptabilité dépendait du but de l'usage (62.4 %), de l'impact sur l'apprentissage (54.1 %) et de l'intention (51.9 %), non de l'usage de l'IA en soi ([[chan-rethinking-aigiarism-secondary-integrity-2026|Chan, 2026]]).

## Le décalage entre adoption et données probantes, et la refonte de l'évaluation

L'usage à ce niveau est quasi universel ; les données probantes en sont surtout une description. [[perez-montesdeoca-genai-secondary-systematic-review-2026|Pérez-Montesdeoca et al. (2026)]] ont synthétisé 33 études : 26 décrivaient comment la technologie était utilisée contre 7 qui examinaient un changement chez les élèves, et seulement 21 recueillaient des données de classe originales. Presque toutes étaient initiées par des enseignants et menées isolément, ce que le chiffre de 84 % d'adoption masque : des enseignants individuels qui expérimentent, non des départements qui reconçoivent.

Ce que la revue établit est conditionnel. La rétroaction était l'application la plus solide, une rétroaction lexicale ciblée doublant presque les scores dans une étude incluse, tandis que la délégation complète rétrécissait l'apprentissage et que comparer ou rejeter la production l'approfondissait. L'exactitude suivait la difficulté de la tâche plutôt que la matière : BingChat et Bard atteignaient 92.11 % sur des questions de biologie de base, tous les outils tombaient sous 20 % sur les items d'ordre supérieur, et la notation automatisée atteignait 50.8 % d'accord avec des évaluateurs humains. Les enquêtes pointent la profondeur plutôt que le dosage, puisque [[wu-genai-secondary-innovation-digital-literacy-2026|Wu et Zhang (2025)]] ont trouvé que la profondeur d'usage suivait la capacité d'innovation auto-évaluée alors que la fréquence non, dans un plan transversal où les chemins ne font que reformuler les corrélations.

L'adoption suit l'intention ; l'anxiété agit ensuite. [[zhang-ai-learning-tools-tpb-high-school-2026|Zhang et An (2026)]] ont trouvé l'[[anxiety-and-stress|anxiété liée à l'IA]] sans lien avec l'intention (β = 0.056, p = 0.123) mais négative pour les trois comportements, le plus fortement pour l'application des productions (β = −0.247), dans un modèle où l'utilité menait et où les attentes des adultes primaient sur la capacité. La mesure est aussi de qualité pilote : [[schicchi-high-school-genai-attitudes-scale-2026|Schicchi et Taibi (2026)]] ont retenu trois facteurs d'une échelle d'attitudes de 19 items sur 93 élèves, sans modèle confirmatoire.

C'est pourquoi la question de l'évaluation devient ce qu'un produit fini certifie encore. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] ont trouvé l'apprentissage perçu presque sans lien avec un indice d'engagement portant sur la lecture, la modification et l'ajout à la production (corrélation agrégée 0.052), et [[cho-chatgpt-high-school-gpa-2025|Cho (2025)]] a examiné des associations avec la moyenne générale de 0.31 en écriture et 0.18 en mathématiques, qui sont surtout des comparaisons entre utilisateurs et non-utilisateurs. Recueillez l'invite, la réponse préliminaire et les révisions, et notez le processus plutôt que la page.

## Collège et début de l'adolescence

- **L'usage se consolide avant que le scepticisme n'apparaisse.** Chez 1,598 élèves de 12 à 25 ans, l'usage moyen est passé de 1.24 à 1.77 sur une échelle de 0 à 4 entre 12 et 17 ans, et le nombre d'activités fortement utilisées de 1.76 à 3.48, tandis que la fiabilité perçue ne changeait pas ([[cuenca-rodriguez-genai-use-caution-trajectories-2026|Cuenca-Rodríguez et al., 2026]]).

- **Un atelier de deux heures modifie un comportement que les auto-déclarations manquent.** Chez 116 élèves français de 8e et 9e année, ceux qui y ont participé acceptaient moins souvent des invites sous-spécifiées (51.5 % contre 66.7 %) et posaient une question de suivi après une réponse faible dans 59.2 % des cas contre 27.9 % ; leurs auto-déclarations de littératie en IA ne prédiisaient ni l'un ni l'autre ([[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc et al., 2026]]).

- **Le but de l'usage pèse plus que la fréquence.** Chez 12,191 élèves de 15 ans dans quatre régions chinoises, glisser vers un usage orienté vers l'apprentissage valait 5.8 points PISA à fréquence fixe, tandis que glisser vers le résumé et la rédaction en coûtait 6.6 ([[wu-genai-scientific-literacy-china-2026|Wu et al., 2026]]).

- **Les gains de motivation au début de l'adolescence ont un coût relationnel.** Chez 2,464 élèves allemands de 7e et 8e année, ChatGPT dans un apprentissage par compétences était associé à plus de satisfaction d'autonomie et de compétence mais à un sentiment d'appartenance plus faible ([[student-motivation-need-satisfaction-genai-sdt-2026|Schweder et al., 2026]]).

## Connexions

Le secondaire se situe entre l'[[primary-education|enseignement primaire]] et l'[[undergraduate-education|premier cycle universitaire]], et partage les préoccupations du [[k-12]] sur la [[teacher-role|capacité enseignante]] et l'[[equity-in-ai-education|équité]]. Ce qui le distingue est la combinaison d'examens externes et d'un enseignement disciplinaire spécialisé, qui pousse l'IA vers la révision, la notation et le soutien aux travaux de cours. Cela rend la [[assessment-validity|validité]] et l'[[automated-assessment|notation automatisée]] plus centrales ici que dans les années du primaire, où domine la [[developmental-psychology|pertinence développementale]]. L'autre fil distinctif est l'[[self-regulated-learning|apprentissage autorégulé]] : les adolescents reçoivent l'outil avant d'avoir le jugement pour l'utiliser, si bien que la [[metacognition]] et le [[cognitive-offloading|délestage]] décident si un gain apparaît.

## Implications pour la pratique

**Pour les enseignants**

- Placez le tuteur là où l'erreur se produit. Le chiffre de 17 % est un problème de conception, non un déficit de l'élève : exigez une question ou une explication avant le problème suivant, et vérifiez l'échange plutôt que la connexion.
- Séquencez les outils d'écriture au lieu de les présenter ensemble : requête, fermeture du chatbot, puis écriture. Un quart des élèves copiaient lorsque les deux étaient ouverts en même temps.
- Décidez avant le cours quelle autorité prévaut lorsqu'un système sensible à l'affect contredit votre procédure, et dites-le aux élèves.

**Pour les chefs d'établissement**

- Établissez le budget à partir de l'usage réel. Une licence à 15 \$ n'est pas un programme ; l'effet dépend de l'emploi du temps, des [[prompt-engineering|invites]] de l'enseignant et du suivi des progrès.
- Fixez les attentes à 0.06–0.08 SD par an pour le tutorat en classe ordinaire et à environ 0.27 pour le tutorat intelligent. Ne promettez de l'un ni de l'autre la réduction des écarts.
- Tenez les sorties des détecteurs hors des conclusions de faute. Exigez des brouillons, un historique de versions ou une [[oral-assessment|soutenance orale]], car les scores sur le texte entier bougent sous une seule réécriture.

**Pour les chercheurs**

- Rapportez la détection au niveau de la phrase comme à celui du texte, et placez les résultats de sondage à côté des statistiques d'accord.
- Mesurez ce pour quoi les élèves ont utilisé l'outil, pas seulement la fréquence. Le but séparait un écart PISA de 12 points à fréquence égale.
- Testez la durabilité au-delà de quatre semaines, avec des résultats de fin d'année ou externes. Les post-tests immédiats surestiment les effets du tutorat d'environ un facteur trois.

## Idées fausses courantes

- **« Un tuteur IA enseigne dès que les élèves y ont accès. »** Quatre-vingt-seize pour cent des élèves ont essayé Khanmigo ; l'élève médian lui a demandé de l'aide dans 17 % des sessions où une erreur survenait. La disponibilité et le dosage sont des variables différentes.

- **« Un fort accord avec les examinateurs signifie qu'un correcteur est fiable. »** Quatorze modèles sur 22 pouvaient être déplacés de plus de 5 % de l'échelle par une note dans la réponse, et une étiquette sur l'élève faisait monter les notes dans 28 des 66 paires modèle-tâche.

- **« La détection peut dire quelles phrases l'IA a écrites. »** Le F1 au niveau de la phrase tombait à 0.88, le rappel à 0.60 après une réécriture dans le style d'un élève, et le texte écrit après usage d'un chatbot sans matériel copié était lu comme humain dans 94.6 % des cas.

- **« Une [[ai-literacy|littératie en IA]] critique peut attendre l'université. »** L'usage monte chaque année de 12 à 17 ans tandis que la fiabilité perçue reste plate, et un atelier de deux heures en 8e et 9e année modifiait le comportement d'invite et de suivi deux jours plus tard.

## Concepts liés

- [[k-12]] — le cycle parent couvrant l'enseignement primaire et secondaire.
- [[primary-education]] — le cycle précédent, où domine la pertinence développementale.
- [[undergraduate-education]] — le cycle suivant, où prennent le relais les grands cours et l'accompagnement.
- [[intelligent-tutoring]] — la classe de systèmes derrière la plupart des essais de résultats au secondaire.
- [[academic-integrity]] — le cadre politique et de raisonnement pour les travaux assistés par l'IA.
- [[ai-detection]] — les méthodes sur le texte et les schémas de réponse, et leurs limites.
- [[automated-assessment]] — notation et scoring, y compris l'acheminement humain qui les rend utilisables.
- [[assessment-validity]] — ce qu'un score ou un référentiel peut soutenir.
- [[ai-literacy]] — les connaissances et les habitudes de régulation qui séparent l'usage de la compréhension.
- [[help-seeking]] — le comportement qui décide si un tuteur est utilisé au moment de la difficulté.

## Articles liés

- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — essai en grappes de deux ans dans 18 collèges du Tennessee.
- [[ai-tutoring-micro-rct-gcse-science-2026]] — essai randomisé multisite de quatre semaines sur Medly en sciences du GCSE.
- [[leite-its-k12-meta-analysis-2025]] — 18 expériences américaines de tutorat intelligent et leur décroissance dans le temps.
- [[ai-supported-instruction-stem-meta-analysis-2026]] — 35 études sur l'enseignement des STIM assisté par l'IA, par niveau.
- [[genai-learning-motivation-meta-analysis-2026]] — 42 études contrôlées sur la motivation, avec le secondaire comme sous-groupe.
- [[kreijkes-llm-note-taking-reading-comprehension-2026]] — expérience de lecture préenregistrée dans sept écoles anglaises.
- [[jansen-argumentative-writing-feedback-receptivity-2026]] — 1,507 élèves, un message de rétroaction et des gains de révision.
- [[chang-shared-epistemic-agency-gai-scientific-writing-2026]] — 122 élèves de 7e année écrivant avec un assistant qui retient ses réponses.
- [[clerc-ai-literacy-workshop-llm-regulation-2026]] — atelier de deux heures en 8e et 9e année, mesuré par le comportement.
- [[cuenca-rodriguez-genai-use-caution-trajectories-2026]] — 1,598 élèves de 12 à 25 ans ; l'usage monte avant la prudence.
- [[schaller-ai-text-detection-authentic-writing-2026]] — étude PISA 2025 sur les frappes, détection au niveau du texte et de la phrase.
- [[chan-rethinking-aigiarism-secondary-integrity-2026]] — 133 élèves hongkongais raisonnant sur le but et l'intention.
- [[ai-marking-accuracy-gcse-physics-2026]] — correcteur commercial confronté aux notes AQA et à un panel d'enseignants.
- [[porcaro-ai-grading-benchmark-2026]] — 22 modèles testés pour la manipulation, les effets d'étiquette et l'accord.
- [[wu-genai-scientific-literacy-china-2026]] — littératie scientifique PISA 2025 et but d'usage du chatbot.
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — 2,464 élèves allemands de 7e et 8e année.
- [[perez-montesdeoca-genai-secondary-systematic-review-2026]] — revue PRISMA de 33 études ; 26 études d'usage contre 7 études d'impact.
- [[wu-genai-secondary-innovation-digital-literacy-2026]] — 500 élèves de la 7e à la 12e année ; profondeur d'usage et capacité auto-évaluées.
- [[zhang-ai-learning-tools-tpb-high-school-2026]] — 513 élèves de Hangzhou ; l'anxiété à l'étape de l'action, non de l'intention.
- [[schicchi-high-school-genai-attitudes-scale-2026]] — échelle d'attitudes de 19 items sur 93 élèves italiens ; mesure pilote.
- [[torres-peralta-perceived-learning-engagement-homework-2026]] — 1,477 répondants ; apprentissage perçu contre indice d'engagement.
- [[cho-chatgpt-high-school-gpa-2025]] — associations avec la moyenne générale par matière, type d'établissement et statut socioéconomique.
