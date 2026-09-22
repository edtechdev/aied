---
title: "Quelles lacunes notables existe-t-il dans la littérature de recherche sur l'IA en éducation ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-09-22T19:10:56-04:00"
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/research-gaps-aied
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Quelles lacunes notables existe-t-il dans la littérature de recherche sur l'IA en éducation ?

Les lacunes les plus lourdes de conséquences en IA en éducation (AIED) concernent **la question de savoir si des conceptions pédagogiques particulières produisent des bénéfices durables, pour qui, par quels mécanismes et sous quelles conditions, et non simplement si l'IA peut accomplir des tâches éducatives**. La base de connaissances documente des interventions prometteuses en même temps que des faiblesses persistantes en matière de mesure, d'inférence causale, de généralisabilité, de mise en œuvre et de reproductibilité. Il s'agit souvent de lacunes dans la *force, la spécificité ou l'applicabilité* des preuves plutôt que d'une absence totale de recherche. Voir [[limitations-in-aied-research|Limitations de la recherche en IAED]].

Les lacunes diffèrent aussi selon les domaines. Les preuves concernant les [[intelligent-tutoring|systèmes de tutorat intelligent]] établis, les [[learning-analytics|analytiques]] prédictifs, l'[[generative-ai|IA générative]] et les agents autonomes ne devraient pas être traitées comme interchangeables. De même, utiliser l'IA pour soutenir l'apprentissage et enseigner aux gens *à propos* de l'IA impliquent des questions de recherche liées mais distinctes, comme l'explique la vue d'ensemble [[ai-education|IA en éducation]].

## 1. Isoler ce que l'IA ajoute au-delà d'un bon enseignement

Il existe des expériences rigoureuses en classe, de sorte que la lacune ne se décrit plus adéquatement par « il nous faut des essais randomisés ». Une question plus précise est de savoir **si la composante d'IA ajoute de la valeur au-delà d'une pratique supplémentaire, de meilleurs supports, une rétroaction opportune ou un soutien pédagogique accru**.

Par exemple, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment]] rapporte des gains de réussite modestes dans 18 collèges, en même temps qu'un engagement substantiel limité avec le tuteur. Les auteurs notent que les gains ressemblaient à ceux associés à une pratique structurée sans IA. Cela établit des preuves sur un dispositif pédagogique mis en œuvre, mais n'isole pas proprement la contribution incrémentale de sa composante d'IA.

Le problème sous-jacent est conceptuel autant qu'empirique. « ChatGPT » nomme un outil, pas une méthode, et [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] examinent 19 comparaisons « ChatGPT en éducation » pour montrer ce que cela coûte : 4 seulement (21%) précisent les trois éléments que sont un traitement reproductible, un contrôle opérationnalisé et une mesure valide de l'apprentissage (74% un traitement bien défini, 42% un contrôle bien défini, 53% un résultat d'apprentissage). Leur point plus large est que, lorsque de nouvelles activités, une nouvelle rétroaction ou une nouvelle conception d'interface accompagnent la nouvelle IA, le médium et la méthode sont confondus et aucun effet ne peut être attribué à l'IA.

La recherche a donc besoin de davantage de comparaisons avec des alternatives solides et réalistes sans IA, en maintenant le programme, les occasions de pratique et le soutien aussi constants que possible. Des réplications indépendantes devraient tester si les bénéfices survivent à des changements d'établissement, d'enseignant, de matière et de modèle. Comme le souligne [[research-methods-aied|Méthodes de recherche sur l'efficacité]], différentes méthodes répondent à différentes questions : les études [[qualitative-research|qualitatives]] et [[design-based-research|fondées sur la conception]] aident à expliquer la mise en œuvre, tandis que des expériences correctement conçues renforcent les affirmations causales.

## 2. Suivre l'apprentissage durable et la capacité indépendante dans le temps

Un travail amélioré pendant l'usage de l'IA n'est pas nécessairement la preuve d'un apprentissage qui persiste après la fin de l'assistance. Les synthèses sur les [[learning-gains|gains d'apprentissage]] et la [[cognitive-offloading|décharge cognitive]] distinguent à plusieurs reprises la performance assistée des connaissances retenues, du raisonnement indépendant et du transfert vers des tâches inconnues.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] illustre le problème de mesure. Dans une expérience randomisée portant sur plus de 6,000 élèves de collège, une règle de maîtrise de trois bonnes réponses consécutives augmentait la réussite définie par la plateforme sans, à elle seule, produire de gains d'apprentissage détectables une semaine plus tard. Les preuves les plus solides au test différé apparaissaient lorsque l'IA était intégrée au flux de maîtrise, et elles se concentraient sur le matériel pratiqué.

**La lacune restante concerne les trajectoires de capacité, et non simplement un post-test supplémentaire.** Les études devraient examiner la rétention sur plusieurs mois, le transfert entre tâches, la performance après le retrait de l'assistance et l'exactitude avec laquelle les apprenants jugent ce qu'ils savent. Elles devraient aussi distinguer l'échec d'acquisition d'une compétence de la détérioration d'une compétence déjà établie. La recherche sur la décharge devrait tester quand la délégation soutient ces trajectoires et quand elle déplace la pratique nécessaire pour les développer.

## 3. Expliquer quelles composantes pédagogiques fonctionnent, et pourquoi

« Apprentissage soutenu par l'IA » combine souvent plusieurs changements : une nouvelle rétroaction, une réflexion supplémentaire, une discussion entre pairs, des séquences de tâches différentes et des incitations d'évaluation modifiées. Un dispositif réussi n'établit pas quelles composantes sont nécessaires ni quel mécanisme a produit le bénéfice.

L'expérience multi-sites [[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design in higher education]] constitue un progrès utile. Parmi 1,176 étudiants de première année, les conceptions de rétroaction réflexive et hybride surpassaient la [[ai-feedback-quality|rétroaction par IA]] directe sur le transfert différé sans IA. La condition hybride combinait auto-évaluation, [[peer-assessment|rétroaction entre pairs]] et critique par l'IA. Cela soutient l'idée d'étudier comment la rétroaction est organisée et utilisée, plutôt que de traiter l'accès comme l'intervention.

D'autres études devraient isoler la contribution et le moment des tentatives indépendantes initiales, de l'auto-explication, de l'apport des pairs, de la rétroaction corrective, des indices et de l'estompage de l'assistance. Elles devraient tester comment ces composantes interagissent avec les [[prior-knowledge|connaissances préalables]] et la difficulté de la tâche.

La lacune théorique qui l'accompagne est tout aussi importante : **nommer une [[learning-theories|théorie de l'apprentissage]] n'est pas la même chose que la tester.** La recherche devrait relier une prédiction théorique à un comportement précis du système et à un processus d'apprentissage mesurable. La médiation statistique peut éclairer cette explication, mais n'établit pas à elle seule un mécanisme causal. Voir [[theory-development-aied|Développement théorique en IA en éducation]] et [[scaffolding]].

## 4. Valider les mesures, les jugements automatisés et les apprenants simulés

Des construits comme « l'engagement », la [[critical-thinking|pensée critique]], la « littératie en IA » et la [[personalized-learning|personnalisation]] sont mesurés de manière incohérente. Les auto-déclarations peuvent décrire des perceptions et des expériences, mais ne peuvent pas remplacer une compétence démontrée. L'exactitude technique, la qualité d'une production jugée par des experts et l'apprentissage des étudiants représentent aussi des cibles d'évaluation différentes. Ces distinctions sont centrales pour la [[educational-measurement|mesure en éducation]] et l'[[ai-ed-evaluation|évaluation en IAED]].

Une lacune particulièrement importante concerne les [[ai-technologies|systèmes d'IA]] utilisés pour évaluer d'autres systèmes d'IA. Dans [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]], les [[simulating-students|étudiants simulés]] abandonnaient souvent les [[misconceptions|conceptions erronées]] qui leur étaient assignées après une rétroaction corrective, que celle-ci traite ou non la conception erronée. Leurs réponses pouvaient donc faire paraître efficace un enseignement inefficace. Un entraînement ciblé améliorait la mesure de fidélité de l'étude, mais une amélioration sur cette mesure n'équivaut pas à une validation contre l'apprentissage humain.

La recherche doit établir quels scores automatisés et quels comportements simulés prédisent les résultats avec de vrais apprenants, y compris des apprenants et des contextes non utilisés lors du développement. Les jugements humains exigent aussi un examen attentif : l'accord entre évaluateurs n'est pas automatiquement la preuve que le bon construit est évalué.

**La lacune est la validation de la chaîne d'évaluation, du comportement du modèle au jugement [[pedagogy|pédagogique]], puis à la réponse de l'apprenant et au résultat éducatif.**

## 5. Établir la validité de l'évaluation quand l'IA peut produire et évaluer les preuves

L'IA crée deux problèmes d'évaluation liés : elle peut aider à produire le travail évalué, et elle peut influencer la façon dont ce travail est noté.

L'[[ai-agents-complete-lms-assessment-validity-2026|étude de la base de connaissances sur des agents d'IA accomplissant des tâches évaluées dans un LMS]] documente des agents naviguant dans un cours de premier cycle réel et accomplissant des activités évaluées. Ces démonstrations établissent une capacité qui remet en question les hypothèses sur les preuves produites par les étudiants ; elles n'établissent pas la prévalence d'un tel usage et n'invalident pas toute évaluation asynchrone.

La question de recherche est **quelles conceptions d'évaluation soutiennent encore des conclusions défendables sur l'apprenant**. Les [[eportfolio|portfolios]], les réflexions, les remises par étapes et les journaux d'activité devraient eux-mêmes être validés plutôt que présumés établir la paternité ou la compréhension. Les études devraient examiner des combinaisons de preuves par rapport à une compétence observée indépendamment, en tenant compte de l'accessibilité, de la charge de travail, de la confidentialité et de l'anxiété des étudiants. Voir [[assessment-validity|Validité de l'évaluation]].

Pour l'[[automated-assessment|notation automatisée]], [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] rapporte des désaccords systématiques entre des modèles prêts à l'emploi et des évaluateurs humains. Ses résultats dépendent de la configuration, mais montrent pourquoi la cohérence interne est insuffisante.

Une distinction conceptuelle utile vient de [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] : évaluer ce que les apprenants doivent faire seuls, ce qu'ils peuvent accomplir avec l'IA et ce qu'ils doivent vérifier et défendre. C'est un cadre proposé qui exige une validation empirique, et non une solution d'évaluation établie.

[[karr-ai-detection-humanization-2026|Karr et al. (2026)]] quantifient pourquoi la détection est une impasse. Sur 642 résumés anglais publiés, deux détecteurs d'IA commerciaux à τ = 0.50 signalaient une édition légère par IA conforme aux consignes dans 38–80% des cas, signalaient des originaux de 2023–25 non modifiés dans 9–15% des cas (hors [[stem-education|STEM]] bien au-dessus du STEM, p < 0.001), et, après humanisation, repéraient moins de 4% des réécritures étiquetées par IA (taux de faux négatifs > 96%). Un score qui pénalise une assistance honnête tout en manquant l'évasion ne peut pas fonder une conclusion défendable sur l'apprenant ; la lacune qu'il expose, ce sont des conceptions et des preuves de processus qui ne dépendent pas d'un tel score.

## 6. Montrer que la littératie en IA se traduit en comportements responsables

La recherche sur les interventions en littératie en IA est suffisamment substantielle pour soutenir une synthèse. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education: A Meta-Analysis of Effects and Moderators]] inclut 59 études et 7,211 participants. Elle rapporte un effet moyen positif, mais une variation substantielle entre les études et un large intervalle de prédiction qui englobe zéro. Les résultats centrés sur les connaissances montraient des effets plus forts que les compétences, les attitudes ou l'éthique.

La lacune la plus nette n'est donc pas simplement de développer davantage de cadres de compétences. Il s'agit de déterminer **si un enseignement de littératie change la façon dont les gens agissent lorsqu'ils utilisent l'IA**.

Les apprenants peuvent-ils reconnaître des affirmations non étayées, vérifier les sources, rejeter des suggestions trompeuses, repérer un assentiment inapproprié et choisir quand ne pas déléguer ? Ces comportements persistent-ils sous pression temporelle et se transfèrent-ils à des systèmes et des disciplines inconnus ?

La recherche devrait combiner des évaluations fondées sur la performance avec des observations de décisions réelles et un suivi différé. Elle devrait distinguer les connaissances conceptuelles, la maîtrise opérationnelle et le jugement critique plutôt que de les traiter comme interchangeables. Les synthèses sur la [[ai-literacy|littératie en IA]] et le [[trust-calibration|calibrage de la confiance]] fournissent des points de départ utiles pour ces distinctions.

## 7. Comprendre la généralisabilité et l'équité des résultats, et pas seulement l'équité de l'accès

Les résultats d'un cours, d'un établissement, d'une langue ou d'une population d'apprenants donnés fournissent souvent des bases limitées pour des décisions ailleurs. La synthèse [[limitations-in-aied-research|Limitations de la recherche en IAED]] identifie cela comme un problème récurrent. Davantage de preuves sont nécessaires sur la manière dont les effets pédagogiques varient selon les stades de développement, les disciplines, les connaissances préalables, le handicap, la langue et les conditions de ressources.

La recherche sur l'équité doit aussi distinguer l'accès, les compétences et les résultats. La synthèse sur la [[digital-divide|fracture numérique]] montre clairement que fournir des appareils ou un accès aux outils n'établit pas une capacité égale d'en bénéficier.

Par exemple, [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] a suivi 752 élèves du premier cycle du secondaire à Hong Kong. Les écarts de préparation psychologique se réduisaient, tandis que les différences sur un test objectif de littératie en IA persistaient. Tous les groupes progressaient, mais l'amélioration globale n'éliminait pas les inégalités. Comme les profils d'apprentissage antérieurs n'étaient pas assignés au hasard, l'étude n'établit pas leurs effets causaux.

La couverture de la base de connaissances elle-même montre où les preuves au niveau des groupes sont minces et inégales. [[differential-effects-across-learner-groups|Effets différentiels selon les groupes d'apprenants]] compte la littérature selon les populations qu'elle étudie : les apprenants en langue seconde et multilingues et les étudiants en situation de handicap sont les filons les plus profonds, le genre et la neurodiversité viennent ensuite, tandis que les étudiants de première génération et les étudiants internationaux n'ont qu'une seule étude chacun dans ce corpus, que les étudiants doués et à haut rendement sont pratiquement non étudiés en tant que groupe, et que les apprenants réfugiés, immigrés et déplacés n'apparaissent dans aucune. Une base de preuves de cette forme ne peut pas répondre aux questions d'équité par agrégation ; elle doit être échantillonnée délibérément.

**La priorité de recherche est d'identifier quelles conceptions réduisent les différences de capacité démontrée, de participation et d'agentivité.** Les études devraient examiner les résultats et les charges des sous-groupes, et pas seulement les gains moyens. La recherche sur l'accessibilité devrait distinguer la suppression des obstacles à la participation du remplacement d'une capacité que l'apprenant est censé développer. Voir [[equity-in-ai-education|Équité en IA en éducation]] et [[accessibility]].

Les capacités varient aussi à l'intérieur d'un même système national d'une manière que les catégories de gouvernance ne saisissent pas. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] ont noté l'intégration de l'IA dans 45 universités nigérianes et ont constaté une adoption globale seulement modérée (M = 4.79, étendue 1.83–7.83 sur une échelle de 10 points), le type d'établissement ne prédisant pas l'intégration une fois l'âge et la géographie contrôlés (âge β = 0.43 ; localisation dans le Sud-Ouest β = 0.31). Les capacités internes étaient corrélées entre elles à r = 0.79–0.80 et les collaborations internationales aux partenariats avec l'industrie à r = 0.74, de sorte que les établissements bien connectés accumulent des avantages cumulatifs. La lacune consiste à tester quelles conceptions de renforcement des capacités modifient les résultats dans des établissements plus récents et moins connectés.

## 8. Déterminer comment le contrôle doit être partagé entre apprenants, enseignants et agents

À mesure que les systèmes d'IA planifient, initient des actions, maintiennent une mémoire et coordonnent des outils, la question éducative devient plus précise que de savoir si la collaboration humain-IA est bénéfique : **qui devrait contrôler quelles parties du processus d'apprentissage, et quand ce contrôle devrait-il changer ?**

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] cartographie 474 études et identifie une validation longitudinale limitée, des concentrations dans l'[[higher-ed|enseignement supérieur]] et les STEM, et une faible intégration de la théorie éducative. Seules 29% des études examinées s'appuyaient explicitement sur une théorie éducative, un constat qui porte sur ce corpus, et non sur toute la recherche en IAED.

La recherche devrait comparer des configurations dans lesquelles les apprenants ou les agents initient l'aide, fixent des objectifs, sélectionnent des stratégies, suivent les progrès et prennent les décisions finales. Elle devrait tester si le soutien peut être retiré progressivement à mesure que la compétence se développe et si les apprenants conservent la capacité de contester le système.

Les synthèses sur l'[[agentic-ai|IA agentique]] et la [[human-ai-collaboration|collaboration humain-IA]] soulèvent aussi des questions sur l'intervention et la responsabilité de l'[[teacher-role|enseignant]] dans des environnements multi-agents. Une autonomie accrue devrait être évaluée comme un choix de conception pédagogique, et non présumée représenter un progrès éducatif.

## 9. Relier la sécurité pédagogique et relationnelle à de véritables conséquences éducatives

La sécurité éducative s'étend au-delà de l'exactitude factuelle, des contenus offensants ou des requêtes interdites. Un tuteur peut fournir une réponse correcte tout en sapant l'occasion pour l'apprenant de raisonner, en renforçant une conception erronée sous-jacente ou en encourageant une dépendance inappropriée. Voir [[pedagogical-safety|Sécurité pédagogique]].

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors: Pedagogical Safety in AI Tutoring]] identifie des défaillances telles qu'une divulgation excessive de la réponse et l'abandon de l'étayage, avec nettement plus de défaillances lors de tests multi-tours. Ce sont des résultats de [[benchmark|référentiel]] obtenus dans des conditions de test spécifiées, et non des estimations de la prévalence ou de la gravité des préjudices dans les classes.

La question non résolue est de savoir comment ces défaillances affectent de vrais apprenants sur un usage prolongé. Lesquelles produisent une confusion temporaire, des conceptions erronées persistantes, une motivation réduite ou une capacité indépendante affaiblie ? Quelles protections réduisent ces risques sans refus excessif ni frustration ?

Une recherche à plus long terme devrait aussi examiner la confiance, la disposition à chercher de l'aide humaine, l'[[agency|agentivité de l'apprenant]] et les relations avec les pairs et les enseignants. Ces questions sont particulièrement importantes pour les enfants et exigent des études adaptées au développement qui relient le comportement du système à des résultats éducatifs et relationnels.

## 10. Expliquer comment la mise en œuvre, le développement des enseignants et les coûts façonnent les résultats

La capacité technique n'établit pas qu'un outil sera utilisé de manière productive ni qu'un développement professionnel améliorera l'apprentissage des étudiants. Le maillon manquant va souvent de **la préparation des enseignants, à travers une pratique de classe modifiée, jusqu'aux résultats des étudiants**.

Dans [[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]], une étude multiniveau portant sur 46 enseignants et 2,832 étudiants a constaté que les connaissances pédagogiques de l'IA étaient associées aux perceptions et aux intentions des étudiants, mais qu'aucune des composantes mesurées des connaissances des enseignants n'était directement associée aux gains de connaissances des étudiants en matière d'IA. Ces associations n'établissent pas qu'une intervention de formation particulière causerait un meilleur apprentissage.

La recherche devrait étudier quelles combinaisons d'accompagnement, d'[[curriculum-design|alignement curriculaire]], de routines de révision, de planification et de soutien institutionnel produisent des améliorations durables. Elle devrait observer l'enseignement tel qu'il est mis en œuvre, et pas seulement la confiance des enseignants ou leur intention d'adopter. Voir [[teacher-ai-competency|Compétence des enseignants en IA]] et [[educational-development|développement pédagogique]].

La comparaison coût-efficacité est une autre priorité. Les évaluations devraient inclure la vérification, la correction, la formation, la supervision, la maintenance et le temps de mise en œuvre, et pas seulement les coûts d'abonnement ou d'usage des modèles, et comparer une offre soutenue par l'IA à des alternatives réalistes. La question pertinente est le bénéfice éducatif que l'ensemble du dispositif apporte pour les ressources qu'il exige.

## 11. Évaluer la gouvernance, la confidentialité et la participation significative

Les principes [[ethics|éthiques]] et les cadres de gouvernance sont nécessaires, mais leur existence n'établit pas qu'ils changent les pratiques ou protègent les apprenants.

[[agarwal-ethical-values-norms-aied-2026|Identifying the Ethical Values and Norms for Artificial Intelligence in Education]] examine 25 articles et constate que les utilisateurs finaux sont largement passifs dans la littérature éthique examinée, la voix des étudiants étant pratiquement absente. Il identifie aussi des tensions entre les valeurs et des asymétries de pouvoir entre les parties prenantes. Cela décrit la littérature examinée ; il ne faut pas en généraliser l'idée que les étudiants ne participent jamais à la conception en IAED.

La lacune de recherche concerne **quels dispositifs de gouvernance font une différence mesurable**. La participation des étudiants et des enseignants change-t-elle les achats, la conception des outils, les règles d'évaluation ou les recours après des erreurs ? Les procédures de révision humaine repèrent-elles les erreurs lourdes de conséquences ? Des alternatives à l'usage de l'IA sont-elles réellement disponibles ?

La recherche sur la confidentialité devrait de même examiner la valeur éducative des données collectées en plus, plutôt que de présumer que le suivi plus détaillé des apprenants est justifié. Les études peuvent comparer des conceptions minimisant les données à des alternatives plus intrusives, en évaluant à la fois l'apprentissage et l'autonomie de l'apprenant. Voir [[governance|Gouvernance de l'IA]] et [[privacy]].

## 12. Construire des études reproductibles et des preuves cumulatives fiables

L'IAED affronte un problème de reproductibilité particulièrement difficile. Les études peuvent omettre les invites, les versions de modèle, les paramètres, le code ou les détails pédagogiques ; les systèmes propriétaires peuvent aussi changer pendant ou après une intervention. Ces questions sont documentées dans [[limitations-in-aied-research|Limitations de la recherche en IAED]].

La reproductibilité exige de décrire le dispositif pédagogique autant que le modèle : les tâches d'apprentissage, les sources de contenu, les actions autorisées, l'interface, le soutien de l'enseignant, les conditions d'évaluation et les changements pendant le déploiement. Les chercheurs devraient distinguer le fait de reproduire une configuration du fait de tester si son principe pédagogique se transfère à une autre. La discussion sur la notification dans [[research-methods-aied|Méthodes de recherche sur l'efficacité]] répond à ce besoin de descriptions transparentes.

La synthèse des preuves exige un soin comparable. La page sur la [[meta-analysis-systematic-review|méta-analyse et la revue systématique]] met en évidence les études primaires faibles, le biais de publication, les interventions hétérogènes et les résultats incompatibles comme limites aux conclusions regroupées.

Un « effet de l'IA » moyen unique peut masquer les distinctions dont les éducateurs ont le plus besoin. Les revues devraient séparer la performance assistée de l'apprentissage indépendant, distinguer les types d'intervention et les conditions de comparaison, et rendre auditables les décisions de codage et d'analyse. Les résultats nuls, les mises en œuvre échouées et les conditions limites sont des contributions essentielles à cette base de preuves cumulatives.

La littérature de synthèse est elle-même une lacune. [[oneill-presumed-effective-meta-analysis-2026|l'audit médico-légal d'O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|méta-analyses]] à fort impact a constaté qu'aucune ne fournissait une base valide pour ses affirmations : aucun construit cohérent (un outil traité comme une intervention unique et des résultats multidimensionnels regroupés), une évaluation invalide du biais de publication dans les 14, un I² rapporté entre 77.2% et 94.4% dans chaque analyse qui le rapportait (12 des 13 au-dessus de 80%), et 61% des études primaires vérifiées au hasard présentant des problèmes de validité. Ces 14 analyses avaient accumulé plus de 2,000 citations en environ 16 mois, et une méta-analyse rétractée était encore citée comme faisant autorité dans 60% des articles citants postérieurs à la rétractation sans mentionner celle-ci. L'adoption non critique ne se limite pas aux travaux rétractés : dans un échantillon de 14 articles citant une autre méta-analyse auditée, dont le résumé annonçait un effet important de « l'éducation à l'IA » qui mesurait en réalité l'enseignement de l'IA aux étudiants, seuls 2 la citaient de manière appropriée, tandis que 8 la lisaient comme une preuve que l'intégration de l'IA améliore l'apprentissage et que 4 étaient erronés d'une autre manière. Les recommandations de l'audit ciblent directement cette chaîne : demander aux revues d'exiger une transparence complète des données pour les méta-analyses (protocoles de recherche, caractéristiques codées des études, statistiques extraites et code d'analyse), demander aux rédacteurs en chef de ne pas traiter un palmarès de publications comme une preuve de compétence en évaluation, et demander que les rétractations soient rendues visibles partout où un article est découvert, exporté ou cité. La reproductibilité couvre donc l'intégrité de la chaîne de synthèse, et pas seulement celle des études individuelles.

Les enseignants qui veulent la version de classe de ces préoccupations, à savoir quelles mesures et quels plans de comparaison utiliser, peuvent suivre les conseils de méthode dans [[evaluating-ai-interventions-methods]].

## Conclusion générale

Le besoin de recherche central n'est pas simplement davantage d'études montrant que les étudiants aiment l'IA, que les enseignants gagnent du temps ou que le travail soutenu par l'IA obtient de meilleurs scores. Ce sont des preuves plus solides répondant à la question suivante :

> Quelle conception pédagogique, pour quels apprenants, dans quel contexte, par quel mécanisme, produit quelles capacités humaines durables, et avec quelle distribution des bénéfices, des coûts et des préjudices ?

Répondre à cette question exige des méthodes complémentaires : des expériences bien spécifiées, un suivi longitudinal, des évaluations validées, une investigation qualitative et fondée sur la conception, un échantillonnage centré sur l'équité et une synthèse transparente. L'objectif est une base de preuves qui explique non seulement si une intervention a fonctionné, mais pourquoi elle a fonctionné, où elle peut échouer et ce que les éducateurs peuvent raisonnablement transposer dans un autre contexte.