---
title: "Apprenants"
created: "2026-09-18T03:20:00-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
translation_of: concepts/learners
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Synthèse :** les apprenants sont le public premier de l'[[ai-education|IA en éducation]] — les élèves de l'[[k-12|enseignement primaire et secondaire]], les étudiants de l'[[higher-ed|enseignement supérieur]] et les apprenants de l'[[adult-learning|apprentissage des adultes]], dont le travail, la compréhension et le sentiment de soi sont désormais façonnés par l'IA. Cette page est le parapluie de la couverture du côté apprenant dans la base de connaissances : ce que les apprenants vivent (l'[[student-experience|expérience étudiante]]), qui ils deviennent (l'[[learner-identity|identité de l'apprenant]]), ce qu'ils choisissent encore (l'[[agency|autonomie]]), la manière dont ils interagissent réellement avec l'outil (l'[[student-ai-interaction|interaction étudiant-IA]]), si leur effort et leur [[self-regulated-learning|autorégulation]] tiennent sous l'effet de l'IA (le [[cognitive-offloading|délestage cognitif]]), et la manière dont les systèmes d'IA les modélisent (la [[student-modeling|modélisation de l'étudiant]]). Le résultat récurrent de cette recherche est que le même outil aide et nuit à des apprenants différents de manières différentes — les gains se concentrent là où les [[prior-knowledge|connaissances préalables]], la [[ai-literacy|littératie en IA]] et les habitudes de vérification sont déjà présentes, et le renversement se concentre là où l'IA se substitue à la pensée que la tâche était censée construire.

## Questions à examiner

- Quels apprenants, dans votre propre contexte, un nouvel outil d'IA atteindrait-il en premier, et lesquels laisserait-il de côté — et sur quoi fondez-vous cette intuition ?
- La recherche rapporte souvent que les étudiants *croient* que l'IA les a aidés, alors que les mesures sans assistance ne montrent aucun gain, ou une perte. Si le propre récit d'un apprenant est une donnée probante peu fiable, quelle donnée probante accepteriez-vous qu'un apprentissage a eu lieu ?
- Les apprenants sont décrits ici à la fois comme des personnes qui utilisent l'IA et comme des objets que les modèles d'IA modélisent (les [[student-modeling|modèles d'apprenant]], le [[knowledge-tracing|traçage des connaissances]], les [[simulating-students|étudiants simulés]]). Où un modèle d'apprenant devrait-il éclairer l'enseignement, et où devrait-il cesser d'être digne de confiance ?
- L'[[self-regulated-learning|autorégulation]] et les [[prior-knowledge|connaissances préalables]] décident si le soutien de l'IA devient un apprentissage ou une substitution. Est-ce un déficit de l'apprenant à corriger, un problème de conception à résoudre, ou un problème d'évaluation à régler ?
- Si un groupe d'apprenants obtient de mauvais résultats avec un outil d'IA, les concepteurs de l'outil sont généralement les derniers à l'apprendre. À quoi ressemblerait réellement, dans votre établissement, une routine permettant d'entendre les apprenants avant et après le déploiement ?
- L'[[agency|autonomie de l'apprenant]] et l'[[learner-identity|identité de l'apprenant]] sont en jeu aux côtés de la réussite. Lequel refuseriez-vous d'échanger contre des [[learning-gains|gains de score]] mesurables — et votre conception de l'évaluation rendrait-elle ce refus visible ?

## Introduction

Les apprenants apparaissent dans cette base de connaissances sous deux visages très différents, et les confondre est à l'origine de la majeure partie de la confusion du domaine. Dans le premier, les apprenants sont des **personnes qui utilisent l'IA** : ils posent des questions, acceptent ou résistent aux réponses, perdent ou gardent leurs repères, et font le récit d'expériences de soutien, de culpabilité, d'anxiété et de dépendance. Dans le second, les apprenants sont des **objets que les systèmes d'IA modélisent** : une estimation de compétence dans le [[knowledge-tracing|traçage des connaissances]], un état latent dans le [[cognitive-diagnosis|diagnostic cognitif]], ou un [[simulating-students|étudiant simulé]] qui tient lieu d'étudiant réel. Les données probantes sur le premier proviennent d'enquêtes, d'entretiens, d'analyse de journaux et d'expériences ; les données probantes sur le second proviennent de la machinerie de la mesure elle-même — et un modèle d'apprenant est une affirmation, non un apprenant.

Cette page est le point d'entrée pour les deux. Elle rassemble les concepts du côté apprenant que couvre la base de connaissances, explique comment ils se rapportent les uns aux autres, et renvoie aux études qui les sous-tendent. La page [[stakeholders|acteurs de l'éducation]] couvre l'autre face du même domaine — les [[teacher-role|enseignants]], les [[administrator|administrateurs]], les concepteurs et les décideurs publics — et les deux pages sont faites pour être lues ensemble.

## Qui compte comme un apprenant

La base de connaissances traite les apprenants sur toute l'étendue de l'éducation formelle : les élèves de l'[[k-12|enseignement primaire et secondaire]], les étudiants [[higher-ed|universitaires]], les apprenants de l'[[vocational-education|enseignement et de la formation professionnels]] et de la [[professional-training|formation professionnelle]], les apprenants [[adult-learning|adultes]] et [[lifelong-learning|tout au long de la vie]], y compris les [[special-education|apprenants en situation de handicap]], les apprenants [[neurodiversity|neurodivergents]] et les apprenants [[multilingual-learning|multilingues]]. Deux conventions importent. Premièrement, « apprenants » et « étudiants » ne sont pas interchangeables de manière utile : *étudiants* désigne un rôle institutionnel, *apprenants* désigne une activité, et une personne peut être l'un sans être l'autre (un salarié en [[professional-training|formation en milieu de travail]] est un apprenant mais non un étudiant). Deuxièmement, les apprenants ne sont pas un groupe homogène, et l'hétérogénéité est précisément ce que la recherche ne cesse de mettre au jour — les [[prior-knowledge|connaissances préalables]], l'[[self-regulated-learning|autorégulation]], la langue, l'accès et la situation de handicap changent tous la question de savoir si un outil d'IA aide.

## Ce que les apprenants vivent

L'[[student-experience|expérience étudiante]] est l'une des dimensions les plus étudiées de l'IA en éducation, et sa leçon centrale est que les effets sont mixtes plutôt qu'uniformes. [[student-perceptions-ai-study-productivity-2026|Les travaux d'enquête sur la productivité des études]] montrent que les apprenants rapportent de véritables gains d'efficacité — 92.3% ont dit que l'IA avait amélioré leur compréhension — aux côtés d'un écart que les chiffres-phares dissimulent : seulement 38.5% ont dit qu'elle avait réduit leur temps d'étude global, et la moitié ont rapporté s'appuyer parfois sur l'IA au lieu d'essayer d'apprendre de manière indépendante. [[uneven-impact-generative-ai-student-learning-2026|Les analyses des schémas de dépendance]] vont plus loin : les étudiants ayant différents niveaux de [[ai-literacy|littératie en IA]] et d'habileté évaluative se retrouvent dans des relations qualitativement différentes avec l'outil, de sorte que la même politique de cours produit des résultats différents pour des apprenants différents — du soutien pour certains, de la substitution pour d'autres. [[genai-student-experiences-uk-he-survey-2026|Les étudiants décrivent l'attrait du moindre effort]] dans leurs propres mots, ce que les pages sur l'[[academic-integrity|intégrité académique]] et les [[misconceptions|idées fausses]] traitent comme un problème de conception et de politique plutôt que comme un problème moral.

L'affect court parallèlement au récit cognitif : l'[[anxiety-and-stress|anxiété et le stress]] et le [[well-being|bien-être]] documentent l'anxiété d'être dépassé, d'être accusé de manquement, et l'anxiété quant à la valeur du diplôme poursuivi. Les modèles mentaux que les apprenants se font de l'IA — ce qu'ils pensent qu'elle est et ce qu'ils pensent qu'elle sert — sont en amont de la question de savoir s'ils l'emploient bien, ce qui explique pourquoi les [[misconceptions|idées fausses]] et la [[framing-ai-use-for-students|manière dont l'usage de l'IA est présenté aux étudiants]] apparaissent tout au long de la recherche du côté apprenant.

Les récits des apprenants compliquent aussi le récit de l'intégrité qui cadre une si grande part de la politique du côté apprenant. [[mulisa-students-genai-integrity-perspectives-2026|Des entretiens menés auprès de 27 étudiants de premier cycle d'une université éthiopienne]] montrent un usage quasi universel de l'IA générative accompagné d'une lecture [[ethics|éthique]] véritablement divisée — la plupart créditant les outils d'avoir élevé leur réussite, une minorité qualifiant l'usage dans les travaux de cours de manquement, et presque tous rapportant un terrain de jeu inégal où les utilisateurs d'IA marquent au-dessus des travailleurs indépendants diligents, l'un décrivant l'effet comme la mort de leur sens du travail appliqué. Le versant étudiant de la procédure de manquement est plus mince dans la littérature que le versant étudiant de l'usage, mais [[munoz-misconduct-allegation-evidence-2026|l'analyse des dossiers de 1 162 allégations liées à l'IA générative]] montre ce que les apprenants affrontent lorsque la réponse institutionnelle arrive : la donnée probante le plus souvent citée est celle du type le plus faiblement noté, aucun seuil probatoire minimal ne régit la question de savoir si une affaire progresse, et les étudiants dont les affaires reposent sur des preuves minces sont poussés vers l'appel.

## Identité, autonomie et paternité de l'œuvre

La recherche du côté apprenant ne porte pas seulement sur les résultats. L'[[learner-identity|identité de l'apprenant]] demande qui un apprenant devient en relation avec une discipline et avec l'IA, et les données probantes vont dans les deux sens : un usage bien conçu peut étayer l'appartenance disciplinaire, tandis que l'externalisation peut éroder le sentiment que le travail est le sien. L'[[agency|autonomie]] demande ce que l'apprenant contrôle encore. La base de connaissances traite les deux comme véritablement en jeu, et non comme des adjoints souples à la réussite : un apprenant qui produit un résultat correct avec l'IA et ne reconnaît plus le raisonnement qui le sous-tend a perdu quelque chose que la note n'enregistre pas. La question de la paternité de l'œuvre est celle où les apprenants eux-mêmes peinent le plus : [[mulisa-students-genai-integrity-perspectives-2026|les étudiants interrogés sur l'IA générative et l'intégrité]] revendiquaient l'originalité parce qu'aucun autre auteur n'existait — « Si ce n'est pas mon idée originale, alors à qui est-elle ? » — tandis que d'autres concluaient que le travail ne les représentait pas, et que l'un raisonnait jusqu'à reconnaître l'outil comme un co-auteur qu'il ne pouvait pas être, étant donné que l'IA n'est pas une personne.

## Interagir avec l'IA : ce que les apprenants font réellement

La page [[student-ai-interaction|interaction étudiant-IA]] rassemble ce que les apprenants demandent à l'IA, la manière dont leurs invites et leurs dialogues évoluent, et pourquoi la qualité de l'interaction prédit mieux les [[learning-gains|résultats d'apprentissage]] que l'accès. [[student-llm-interaction-taxonomy-review-2026|Une revue de cadrage rapide de 46 catégorisations tirées de 33 études]] montre que ce corpus de données probantes est conceptuellement fragmenté — les études diffèrent par la source des données, le schéma de catégories et l'unité d'analyse, de sorte que l'« interaction de qualité » n'est pas encore un construit comparable entre elles, et l'appel de la revue porte sur une taxonomie convergente de l'usage des [[llm|grands modèles de langue]] orienté vers l'apprentissage, plutôt que sur l'affirmation qu'une telle taxonomie existe. [[student-ai-conversations-cognitive-engagement-2026|Les études sur le contenu des dialogues]] montrent que les étudiants se disciplinent de manières caractéristiques, l'engagement allant du sondage et de la mise à l'épreuve des affirmations à l'acceptation de la première réponse plausible. La [[help-seeking|recherche d'aide]] fournit le cadre antérieur : demander de l'aide est une compétence, et demander au mauvais aideur de la mauvaise manière est un mode de défaillance connu que l'IA ne supprime pas.

## Effort, autorégulation et écart entre performance et apprentissage

C'est ici que les données probantes du côté apprenant sont les plus lourdes de conséquences, parce qu'elles séparent ce que les apprenants *peuvent faire avec l'IA* de ce qu'ils *peuvent faire sans elle*.

Le [[cognitive-offloading|délestage cognitif]] rassemble les données probantes sur la dépendance excessive ; [[genai-performance-vs-learning|performance et apprentissage avec l'IA générative]] énonce le point méthodologique central selon lequel la performance assistée et la capacité sans assistance doivent être mesurées séparément ; les [[layer-sensitive-cognitive-offloading-writing-2026|études de l'écriture sensibles aux couches]] séparent le délestage de surface, structurel, d'idées et de raisonnement, et trouvent la performance soutenue la plus élevée dans la condition la moins bornée, aux côtés de la performance indépendante la plus faible huit semaines plus tard ; et le [[shaw-nave-cognitive-surrender-2026|récit de l'abandon cognitif de Shaw et Nave]] nomme la disposition qui rend la délégation habituelle plutôt que stratégique. La [[metacognitively-discordant-completion-genai-2026|discordance métacognitive]] documente le cas intermédiaire inconfortable — les apprenants qui remarquent qu'ils ne comprennent pas et soumettent quand même — et la [[verification-quality-reliance-calibration-genai-2026|recherche sur la vérification]] montre que « vérifier » est lui-même une compétence graduée, non une habitude binaire. Du côté de la conception, les [[desirable-difficulties|difficultés productives]] et la [[reducing-ai-misuse|réduction des usages abusifs de l'IA]] rassemblent les interventions qui restaurent l'effort que la tâche était censée exiger.

## Les apprenants comme modèles

Les concepts du côté apprenant ayant la plus longue filiation technique sont ceux qui représentent l'apprenant au système. La [[student-modeling|modélisation de l'étudiant]] couvre la famille : le [[knowledge-tracing|traçage des connaissances]] estimant l'acquisition de compétences au fil du temps, le [[cognitive-diagnosis|diagnostic cognitif]] localisant des idées fausses spécifiques, et les systèmes adaptatifs et d'[[personalized-learning|apprentissage personnalisé]] qui consomment ces estimations. Les [[simulating-students|étudiants simulés]] et [[simulating-students-llm-review-2026|sa revue]] traitent la [[simulation|simulation]] comme une manière de tester des [[intelligent-tutoring|tuteurs]] et de générer des données lorsque de vrais apprenants ne sont pas disponibles — un substitut explicitement provisoire, non un remplacement. Deux mises en garde traversent cette littérature : les estimations des modèles sont des inférences tirées du comportement, sensibles à la manière dont les items et les interfaces sont construits, et [[demographic-signals-llm-student-assessment-2026|les études sur les signaux démographiques]] montrent que les systèmes d'évaluation peuvent capter des indicateurs de substitution de l'identité de l'apprenant (la langue, l'origine) qui n'ont jamais été destinés à faire partie du construit. Les [[self-report-measures|mesures auto-déclarées]] couvrent le problème en miroir du côté de la recherche : ce que les apprenants disent de leur propre apprentissage diverge souvent de ce qu'ils peuvent faire.

## L'équité entre apprenants

Parce que les bénéfices suivent l'avantage préalable, le travail du côté apprenant est indissociable de l'[[equity-in-ai-education|équité dans l'IA en éducation]]. La [[digital-divide|fracture numérique]] et l'accès aux offres payantes des modèles façonnent qui obtient les outils les plus puissants ; les préoccupations de [[bias-mitigation|justice]] régissent la manière dont les modèles appris traitent différents groupes ; l'[[inclusive-learning|apprentissage inclusif]], l'[[accessibility|accessibilité]], l'[[special-education|éducation spécialisée]] et la [[neurodiversity|neurodiversité]] couvrent les apprenants dont les besoins sont ignorés par la conception par défaut. La leçon pratique de cette recherche est que « l'IA aide les étudiants » n'est pas un résultat — le résultat est toujours *quels* étudiants, dans *quelles* conditions, avec *quelles* connaissances préalables et quel accès. Deux groupes portent une part distinctive de ce risque. [[wright-transcription-not-generation-2026|Wright (2026)]] soutient que les interdictions rédigées autour de l'« [[generative-ai|IA générative]] » plutôt qu'autour de la fonction captent des outils de transcription qui convertissent le format d'un travail que l'apprenant a déjà rédigé, de sorte que les faux positifs qui en résultent retombent le plus durement sur les apprenants en situation de handicap qui dépendent de la synthèse vocale et de l'OCR, y compris là où l'OCR assistée par l'IA a remplacé des logiciels d'assistance abandonnés ; [[harerimana-remote-proctoring-nursing-scoping-2026|une revue de cadrage sur la surveillance à distance des examens]] porte le même constat au sujet des conditions d'évaluation, montrant que la connectivité, le coût des données et la défaillance des appareils décident de qui peut être évalué — un constat d'équité plutôt qu'un constat technique, et un constat concentré dans les pays à revenu faible et intermédiaire.

## Où se situe cette page

À lire avec la page [[stakeholders|acteurs de l'éducation]] pour les personnes autour de l'apprenant, et avec la [[pedagogy|pédagogie]] et la [[learning-design|conception pédagogique]] pour ce que les enseignants font de ces résultats. L'[[assessment|évaluation]] détermine quelles capacités de l'apprenant sont jamais rendues visibles ; les [[limitations-in-aied-research|limites de la recherche en AIED]] expliquent pourquoi une si grande part des données probantes du côté apprenant est de court terme, auto-déclarée et menée sur des échantillons de commodité ; et les [[misconceptions|idées fausses]] sont le point d'entrée habituel pour les apprenants eux-mêmes.

## Concepts liés

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — How learners perceive, interact with, and are affected by AI
- [[learner-identity]] — Who learners are becoming in relation to a discipline and to AI
- [[agency]] — What learners still control and choose
- [[student-ai-interaction]] — What learners actually ask AI and how dialogues evolve
- [[cognitive-offloading]] — Over-reliance and the substitution of AI for thinking
- [[self-regulated-learning]] — Planning, monitoring, and adjusting one's own learning
- [[help-seeking]] — Asking for help well, and the failure modes when learners do not
- [[metacognition]] — Knowing what one does and does not understand
- [[motivation]] — Why learners persist or stop
- [[self-efficacy]] — Learners' confidence in their own capability
- [[student-engagement]] — Behavioral, emotional, and cognitive engagement
- [[prior-knowledge]] — The background knowledge that decides whether support becomes learning
- [[student-modeling]] — Representing the learner inside the system
- [[knowledge-tracing]] — Estimating skill acquisition over time
- [[simulating-students]] — LLM-simulated learners as provisional stand-ins
- [[ai-literacy]] — The capability that decides whether learners use AI well
- [[equity-in-ai-education]] — Who benefits and who is left out
- [[well-being]] — Anxiety, stress, and the affective cost of AI-mediated study
- [[misconceptions]] — The mental models learners bring to AI
- [[stakeholders]] — The other side of the same field: teachers, leaders, designers
- [[assessment]] — Which learner capabilities are ever made visible

## Articles liés

- [[uneven-impact-generative-ai-student-learning-2026]] — Reliance patterns and evaluation literacy split student outcomes
- [[student-perceptions-ai-study-productivity-2026]] — Learners report efficiency gains alongside dependency concerns
- [[student-llm-interaction-taxonomy-review-2026]] — A taxonomy of learning-oriented student-LLM interaction
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-specific patterns in student-AI chat
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Assisted performance gains without independent capability
- [[genai-performance-vs-learning]] — Why assisted performance and unassisted learning must be measured apart
- [[shaw-nave-cognitive-surrender-2026]] — Cognitive surrender as a disposition, not an accident
- [[metacognitively-discordant-completion-genai-2026]] — Learners who notice they do not understand and submit anyway
- [[verification-quality-reliance-calibration-genai-2026]] — Verification quality and reliance calibration
- [[simulating-students-llm-review-2026]] — Simulated students: architecture, mechanisms, and limits
- [[stanbkt-bayesian-knowledge-tracing]] — Parameter estimation in Bayesian knowledge tracing
- [[demographic-signals-llm-student-assessment-2026]] — Implicit and explicit demographic signals in LLM-based assessment
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI literacy, engagement, and psychological capital
- [[genai-student-experiences-uk-he-survey-2026]] — Students describe the pull of least effort
- [[mulisa-students-genai-integrity-perspectives-2026]] — Students on whether GenAI is a cheating tool or a learning partner
- [[munoz-misconduct-allegation-evidence-2026]] — What misconduct allegation files actually contain as evidence
- [[wright-transcription-not-generation-2026]] — Over-inclusive AI rules and the students they catch
- [[sharma-judgment-visible-genai-assessment-2026]] — Integrity as evaluative judgment rather than compliance
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Remote proctoring's emotional and equity costs for students
