---
title: "Open source"
created: "2026-07-28T10:44:35-04:00"
updated: "2026-11-05T18:23:46-05:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [agentic-ai, ai-education, curriculum-design]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, edtech-platform, open-source]
assessment: [automated-assessment]
ethics: [privacy]
audience: [software developers, instructors, administrators, researchers]
discipline: [stem education, writing education]
confidence: medium
connected_resources: [claw-ed, education-agent-skills, lesson-md, liascript, onmicro-ai, vibes-diy]
methods: [benchmark]
translation_of: concepts/open-source
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-01"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Open source** — l'usage, dans l'[[ai-education|IA en éducation]], de *modèles, de code, de données et de contenu* sous licence ouverte. L'ouverture est le principal contrepoids de la base de connaissances à l'enfermement chez un fournisseur et à l'[[privacy|exposition des données]] : des modèles à poids ouverts peuvent tourner sur le matériel du campus pour satisfaire aux obligations de la FERPA, du RGPD et de la loi européenne sur l'IA, des corpus sous licence ouverte peuvent être indexés et ajustés finement sans l'autorisation d'un éditeur, et la publication ouverte de repères de référence et de jeux de données rend la [[research-methods-aied|recherche]] réplicable. Les charges sont tout aussi réelles : l'infrastructure et l'assurance de la [[pedagogical-safety|sécurité]], une maintenance qui survit à la subvention, et une qualité que l'ouverture ne garantit pas par elle-même.

## Questions à examiner

- « Open source » est souvent entendu comme « gratuit et facile ». Laquelle des quatre couches ci-dessous — modèles, code, données ou contenu — coûte réellement le plus cher à votre institution à adopter, et pourquoi ?
- Les poids ouverts rendent possible le déploiement local, mais quelqu'un doit encore héberger, corriger et évaluer le système. Qui devrait être propriétaire de ce travail après la fin du projet initial, et qui le paie ?
- Une étude rapportée ici a trouvé un modèle ouvert de 32B surpassant un système propriétaire bien plus grand en connaissance pédagogique, tandis qu'une autre a trouvé chaque modèle ouvert testé sous la référence humaine en littératie de la visualisation scientifique. Comment décidez-vous quel repère est le bon pour votre décision ?
- Un corpus unique sous licence ouverte est ce qui permet à une école de faire tourner un assistant sur site sur ses propres supports de cours. Quelles obligations cela comporte-t-il — envers les auteurs originaux, envers les étudiants dont les données sont indexées, et envers la licence elle-même ?
- Si l'[[generative-ai|IA générative]] peut produire un cours en moins d'une demi-heure pour quelques dollars, quelle est la raison d'être restante des ressources éducatives ouvertes — le coût, la liberté de licence, l'assurance qualité, ou autre chose ?
- Les institutions devraient-elles traiter l'adoption de l'open source comme une décision d'approvisionnement, une décision d'infrastructure, ou une décision pédagogique ? Que se casse-t-il si on la traite comme une seule d'entre elles ?

## Introduction

Lâchement, « ouvert » en IA éducative signifie que quatre sortes d'artefacts sont disponibles pour l'inspection, la réutilisation et la modification : les **poids de modèles**, le **code source**, les **données et instruments d'évaluation**, et le **contenu éducatif**. Les articles de la base de connaissances se regroupent de manière inégale sur ces couches, et le tableau qui en résulte est plus utile que le slogan : l'ouverture achète des choses précises — contrôle local, auditabilité, réplicabilité et clarté juridique — et elle coûte des choses précises — infrastructure, expertise, maintenance, et une charge d'assurance qualité qui se déplace du fournisseur vers l'institution.

### Modèles ouverts et poids ouverts

Les poids ouverts importent le plus là où les données des étudiants ne peuvent pas quitter le campus. [[lata-ferpa-compliant-local-llm-autograder|LaTA]] est un correcteur automatique local-[[llm|LLM]] conforme à la FERPA, prêt à l'emploi, pour des travaux de [[stem-education|STIM]] de deuxième cycle universitaire, construit sur des barèmes et des solutions de référence rédigés par les enseignants, à coût marginal nul par remise. [[programming-its|SCRIPT]], un système de [[intelligent-tutoring|tutorat]] en Python de l'université de Bielefeld, évite délibérément les **API commerciales de grands modèles de langue** et auto-héberge un modèle Llama-70B à poids ouverts pour satisfaire au RGPD et à la loi européenne sur l'IA (qui classe certains usages de l'IA en éducation comme à haut risque), en séparant les journaux d'adresses IP du système de tutorat, en utilisant des noms d'utilisateur pseudonymes, et en enregistrant les frappes au clavier uniquement avec un consentement explicite — un choix que les auteurs créditent aussi d'un impact environnemental plus faible et d'une meilleure reproductibilité.

La qualité n'est plus le prix automatique de l'ouverture. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] applique l'[[reinforcement-learning|apprentissage par renforcement]] (DAPO) et l'ajustement fin supervisé à une famille de modèles ouverts, en extrayant 440 négatifs difficiles, en générant 40 000 réponses synthétiques réduites à 1 050 exemples ordonnés par difficulté, et en atteignant **96,52 %** sur le repère de pédagogie — au-dessus des 90,55 % de Gemini-3 Pro — avec 32B de paramètres denses. [[aiawe-automated-writing-evaluation|AiAWE]] parvient à des conclusions similaires pour l'[[automated-essay-scoring|évaluation automatisée de l'écriture]] : un Gemma-3-27B-it à poids ouverts adapté par LoRA surpasse LLaMA-3.3-70B et une référence GPT-3.5 ajustée sur 480 dissertations TOEFL et tourne sur un serveur de qualité grand publique, avec le constat subsidiaire frappant que le nombre de paramètres n'est *pas* un prédicteur fiable de la performance en aval sous adaptation LoRA. La contre-preuve mérite autant de place : [[mllm-scientific-visualization-literacy|un repère de six grands modèles de langue multimodaux]] (trois fermés, trois ouverts) a trouvé chaque modèle à code source ouvert sous la référence humaine en littératie de la [[visualization|visualisation]] scientifique, tandis que Gemini dépassait la moyenne humaine sur plusieurs sous-ensembles. L'ouverture élève le plafond du contrôle, et non celui de la capacité.

OmniEdu publie tout le pipeline plutôt que seulement les poids : une supervision équilibrée en capacités sur un mélange de 69 999 exemples a élevé chaque échelle d'une famille ouverte K–12 de 4B/9B/27B — le modèle de 4B réglé a gagné 55 points de taux de victoire à l'étayage sur MathTutorBench par rapport à sa base — tandis que le diagnostic de l'état des connaissances restait sa capacité la plus faible à 54,04 % ([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### Outils ouverts, tuteurs et infrastructure de recherche

Le cas le plus clair en faveur du code ouvert est la réplication. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] — le premier système de tutorat adaptatif entièrement ouvert construit sur des principes de STI — associe une **base de code sous licence MIT** à une **bibliothèque de contenu Creative Commons (CC BY)** issue des manuels d'algèbre OpenStax, plus le [[knowledge-tracing|traçage des connaissances]], des tests A/B et la prise en charge de LTI ; son objectif de conception explicite est qu'un chercheur puisse mener une expérience puis publier l'ensemble du cadre, du contenu et de la plateforme de bout en bout sous forme de lien vers un dépôt. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] fait le même argument au niveau de la méthode, remplaçant les estimations ponctuelles par maximisation de l'espérance par une inférence bayésienne complète (HMC, inférence variationnelle, Pathfinder, optimisation) dans un paquet Python ouvert qui expose l'incertitude dont dépendent les comparaisons A/B d'interventions adaptatives. [[deeptutor]] publie un cadre complet de tutorat [[agentic-ai|agentique]] doté d'une mémoire d'apprenant en forêt de traces — sous Apache 2.0, et, fin 2026, un espace de travail d'apprentissage complet plutôt que seulement les pipelines que son article évalue comparativement — et le générateur de cours OpenMAIC de [[mooc-to-maic|MAIC]] est livré sous MIT aux côtés de l'étude qui l'évalue, si bien qu'un cours peut être généré, auto-hébergé et inspecté plutôt que seulement lu ; [[vismatic-secure-sandbox-cs-education|VISMATIC]] publie son bac à sable conteneurisé pour la surveillance orientée vers le processus, afin que d'autres institutions puissent adopter le modèle d'intégrité plutôt que la version qu'en donne le fournisseur. Le code ouvert porte aussi la charge de transparence : les scripts des invites de tutorat conscient de l'affect de [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] sont publiés pour inspection et poursuite du travail de [[llm-training-and-fine-tuning|formation pédagogique]]. L'infrastructure ouverte fixe le point de référence de ce que les agents éducatifs devraient faire : la [[agentic-ai-education-scoping-review|revue de cadrage de 474 études sur l'IA agentique]] de la base de connaissances utilise un projet d'agent à code source ouvert en croissance rapide comme sa « frontière...

### Repères ouverts, jeux de données et transparence des méthodes

Plusieurs contributions sont ici une *infrastructure d'évaluation* ouverte plutôt que des systèmes. [[cdpk-pedagogy-benchmark-llms|Le Pedagogy Benchmark]] (CDPK + SEND, construit à partir de véritables items d'examens d'[[teacher-role|enseignants]] chiliens) couvre 97 modèles : le modèle ouvert DeepSeek R1 a atteint 86,65 % contre un top 10 constitué surtout de modèles de raisonnement fermés, et la frontière coût–exactitude s'est déplacée d'environ 50 % à environ 82 % à \$0,10 par million de jetons d'entrée entre avril 2024 et juin 2025. Le modèle ouvert Qwen-3 8B à 3,5 ¢ a presque égalé le meilleur modèle fermé d'avril 2024 pour un coût plus de 400 fois inférieur. La performance chute fortement en dessous d'environ 8B de paramètres, ce qui constitue une contrainte pratique de dimensionnement pour les déploiements sur le campus. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] publie un jeu de données, un schéma et un prototype pour l'évaluation fondée sur les traces d'un tutorat multi-agent socialement intelligent (540 participants, 360 séances, 1 440 épisodes de tâches). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] montre le cas culturel des données ouvertes : 24 795 paires instruction–réponse dans sept langues et 41 techniques pédagogiques tirées de sources védiques et classiques, alignées sur le [[curriculum-design|programme]] du CBSE, ce qui a permis à un modèle compact de 7B d'approcher un modèle de référence généraliste bien plus grand (score médian des juges 6,39 contre 6,54) pour une fraction du coût de déploiement. Les [[benchmark|repères]] rédigés par des étudiants sont une autre voie vers l'ouverture : [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]] curate 80 tâches académiques de long terme issues de 230 candidatures soumises par des étudiants (couvrant plus de 25 domaines professionnels, dont 16 exigeant des GPU CUDA, exécutées dans des bacs à sable Docker isolés) et étend un écosystème ouvert d'agents à l'évaluation de niveau académique. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]] soutiennent que l'ouverture est aussi une obligation [[sustainability|environnementale]] : en examinant tous les articles d'AIED 2025, ils ont trouvé une régularité d'« adoption des grands modèles de langue sans divulgation » et y ont répondu par une méthodologie de mesure à code source ouvert — des outils logiciels plus une formule qui estim...

### Là où le contenu ouvert rencontre le code ouvert

Les ressources éducatives ouvertes ont leur propre page, [[open-education]], parce que l'argument y est pédagogique et guidé par les licences plutôt qu'infrastructurel. Ce qui appartient à cette page est la couture où les deux ouvertures se rencontrent, et elle est plus étroite qu'il n'y paraît.

La couture est une contrainte de compatibilité de licences. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] associe une base de code sous licence MIT à une bibliothèque de contenu sous CC BY issue de manuels d'algèbre OpenStax, ce qui signifie que les termes du code et ceux du contenu doivent être maintenus compatibles par la conception, et qu'une licence permissive sur l'un ne fournit pas l'autre. La couture apparaît aussi lorsqu'un corpus sous licence ouverte est ce qui rend licite l'exploitation d'un système sur site : [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] indexent 82 documents de ressources éducatives ouvertes dans un assistant de base de connaissances sur un GPU grand publique de 12 Go, et toute l'histoire est une histoire d'open source sur la quantification, l'[[hallucination-risk|hallucination]] et la provenance, plutôt qu'un argument sur les manuels.

Ce que cette page ne fait pas, c'est plaider pour la ressource. Savoir si un manuel écrit par une machine est ouvert par défaut, si une licence survit à un remix généré, et si la pédagogie ouverte enseigne quelque chose de mesurable sont des questions pour [[open-education]], et ce sont les questions dont traite réellement la littérature actuelle du champ.

### Bénéfices et charges

- **Bénéfices.** Souveraineté des données et conformité réglementaire ([[privacy]], [[regulation]]) par l'hébergement local ; contrôle des coûts, puisque l'inférence locale n'a pas de frais par requête et que les modèles ouverts approchent la qualité propriétaire pour une fraction du prix ([[singh-eduqwen-pedagogical-rl-2026]]) ; reproductibilité, parce que le cadre, les invites, le contenu et les données peuvent être livrés avec l'article ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]) ; auditabilité et examen de sécurité sous la [[governance|gouvernance institutionnelle]] ; et la capacité d'ajuster finement pour une [[pedagogy|pédagogie]] particulière ou pour la base de connaissances d'une communauté particulière ([[iks-instruct-dataset-indian-knowledge]]).
- **Charges.** L'hébergement local exige du matériel et une expertise que beaucoup d'institutions n'ont pas ; la qualité et la [[pedagogical-safety|sécurité]] ne sont pas garanties d'emblée — les modèles ouverts peuvent rester sous les références humaines sur des littératies spécifiques ([[mllm-scientific-visualization-literacy]]) et la quantification fait monter les taux d'hallucination à moins d'être atténuée ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]) ; quelqu'un doit maintenir le système après la publication ([[programming-its]] documente une petite équipe d'étudiants en doctorat, une exposition de sécurité en cours de traitement, et une charge de conformité substantielle) ; et une licence ouverte est une permission, et non un produit fonctionnel — la maintenance qui garde un système publié utilisable retombe sur les [[educational-technology-developers|concepteurs de technologies éducatives]] qui l'ont construit, et leur financement et leurs incitations décident si un dépôt bifurcable, un produit maintenu, ou ni l'un ni l'autre est ce qu'une institution hérite à la fin de la subvention.

### Mettre l'ouverture en pratique

- **Pour les enseignants et les institutions :** vérifiez la licence du *contenu* aussi bien que celle du code avant d'adopter un système — du code MIT sur des manuels sous CC BY est réutilisable, mais une licence permissive ne garantit pas que les parcours de tutorat, les banques d'items ou les traductions existent. Préférez les modèles ouverts lorsque les données des étudiants ne peuvent légalement pas quitter le campus ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), mais évaluez comparativement le modèle sur *votre* tâche plutôt que de vous fier à des classements généraux ([[cdpk-pedagogy-benchmark-llms]]). Budgétez quelqu'un pour faire tourner et évaluer le système après le pilote.
- **Pour les développeurs et les chercheurs :** livrez l'ensemble — la publication de bout en bout d'OATutor (code, contenu, harnais d'expérimentation) est la norme de réplicabilité que cette littérature ne cesse de récompenser. Publiez les invites et les schémas d'extraction aux côtés des poids ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). Rapportez le calcul et le carbone ([[aied-carbon-footprint-reporting]]). Ancrez les assistants dans des corpus sous licence ouverte afin que la provenance soit vérifiable et l'adaptation licite ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Utilisez l'ajustement fin conscient de la quantification plutôt que la quantification simple si l'exactitude et l'énergie comptent toutes deux, et gardez les licences du code et du contenu compatibles.

## Idées fausses courantes

**« Poids ouverts, code source ouvert, contenu ouvert et pédagogie ouverte sont la même ouverture. »** Ce sont quatre choses différentes et elles échouent indépendamment. Les arguments sur la ressource et sur la pratique vivent sur [[open-education]] ; cette page couvre les artefacts qu'un constructeur livre et licence. Les *poids* ouverts permettent le déploiement local ; le *code source* ouvert permet la modification ; le *contenu* ouvert permet la réutilisation et l'adaptation ; la *pédagogie* ouverte concerne qui décide de ce qui est enseigné. Un modèle à poids ouverts et à pipeline d'entraînement propriétaire, enveloppé dans un outil à interface fermée et une bibliothèque de contenu tous droits réservés, est « ouvert » au sens d'une des quatre acceptions et fermé dans les trois autres.

Le mot lui-même est contesté en amont. [[deimann-rethinking-openness-ai-2026|Deimann et Lukács (2026)]] observent que le débat sur l'ouverture est arrivé à l'IA par la communauté de l'open source, la première définition de l'IA open source ayant été publiée en 2024, et ils soutiennent que l'ouverture y fonctionne comme un imaginaire plutôt que comme une propriété : une aspiration que les institutions adoptent dans leur langage tandis que le régime environnant reste intact. C'est une mise en garde utile pour cette page, parce qu'une licence est une propriété et qu'un mouvement n'en est pas une.

**« Ouvert signifie moins cher. »** Les poids ouverts rendent le déploiement local possible, mais **quelqu'un doit encore héberger, corriger et évaluer le système** — et ce quelqu'un doit survivre à la subvention qui a financé le travail. Les charges nommées dans cette littérature sont concrètes : infrastructure, assurance de [[pedagogical-safety|sécurité]] et maintenance. Le coût total peut dépasser des frais de licence, et les institutions qui traitent l'ouverture comme une économie découvrent fréquemment l'obligation de maintenance après la dispersion du personnel du projet.

**« Les modèles de pointe fermés sont simplement meilleurs, si bien que les alternatives ouvertes sont un pis-aller. »** L'écart est plus étroit que cette hypothèse ne le suppose. Dans [[cdpk-pedagogy-benchmark-llms|le Pedagogy Benchmark]] (CDPK + SEND, construit à partir de véritables items d'examens d'enseignants chiliens) couvrant 97 modèles, le modèle à poids ouverts **DeepSeek R1 a atteint 86,65 %**, contre un top 10 composé surtout de modèles de raisonnement fermés — et la comparaison coût–exactitude va plus loin encore dans la direction ouverte. L'argument restant en faveur de l'ouverture porte donc sur le contrôle et l'auditabilité, non sur un sacrifice de capacité.

**« Publier les poids, c'est publier le travail. »** Les contributions ouvertes les plus fortes publient le pipeline. OmniEdu publie une supervision équilibrée en capacités sur un mélange de 69 999 exemples plutôt que les seuls poids finaux, élevant chaque échelle d'une famille ouverte K–12 de 4B/9B/27B, le modèle de 4B réglé gagnant **55 points** de performance d'[[scaffolding|étayage]] sur MathTutorBench ; [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] documente de même sa procédure de RL et d'ajustement fin, y compris 440 négatifs difficiles extraits et 40 000 réponses générées. Des poids sans la recette reproduisent un résultat sans reproduire la méthode.

## Concepts liés

- [[open-education]]
- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[adaptive-learning]]
- [[edtech-platform]]
- [[privacy]]
- [[regulation]]
- [[governance]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[benchmark]]
- [[knowledge-tracing]]
- [[rag]]
- [[pedagogical-safety]]
- [[sustainability]]
- [[research-methods-aied]]
- [[writing-education]]
- [[academic-integrity]]
- [[educational-technology-developers]]

## Articles liés

- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Assistant de base de connaissances d'IA fondé sur des ressources éducatives ouvertes et déployé sur site sur du matériel de qualité grand publique (Shen et al. 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — Tuteur adaptatif sous licence MIT doté d'une bibliothèque de contenu OpenStax sous CC BY (Pardos et al. 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — Modèle pédagogique ouvert de 32B surpassant des systèmes propriétaires bien plus grands (Singh et al. 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — Correcteur automatique local fondé sur les grands modèles de langue et conforme à la FERPA, prêt à l'emploi
- [[programming-its]] — Grand modèle de langue à poids ouverts auto-hébergé pour la conformité au RGPD et à la loi européenne sur l'IA dans un STI en Python
- [[aiawe-automated-writing-evaluation]] — Modèle à poids ouverts adapté par LoRA pour l'évaluation automatisée de l'écriture
- [[stanbkt-bayesian-knowledge-tracing]] — Paquet Python ouvert pour le traçage des connaissances pleinement bayésien
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — Cadre de tutorat agentique entièrement à code source ouvert doté d'une mémoire d'apprenant
- [[vismatic-secure-sandbox-cs-education]] — Bac à sable conteneurisé ouvert pour l'évaluation orientée vers le processus
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Tuteur de mathématiques conscient de l'affect doté d'une base de code ouverte
- [[cdpk-pedagogy-benchmark-llms]] — Repère de pédagogie ouvert sur 97 modèles et frontière coût–exactitude
- [[astra-multi-agent-tutoring-benchmark-2026]] — Jeu de données et prototype ouverts pour l'évaluation multi-agent fondée sur les traces
- [[mllm-scientific-visualization-literacy]] — Modèles ouverts sous la référence humaine en littératie de la visualisation
- [[iks-instruct-dataset-indian-knowledge]] — Jeu de données multilingue ouvert pour un enseignement ancré culturellement
- [[aied-carbon-footprint-reporting]] — Méthode à code source ouvert pour rapporter le coût environnemental des grands modèles de langue
- [[egai-power-systems-education]] — Bibliothèque ouverte de modules exécutables pour l'IA en ingénierie
- [[mooc-to-maic]] — La génération de cours pilotée par les grands modèles de langue et l'évolution de l'économie de la production de cours
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu : modèles de fondation ouverts pour l'apprentissage et l'enseignement
