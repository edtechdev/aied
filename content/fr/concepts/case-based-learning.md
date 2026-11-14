---
title: "Apprentissage par cas"
created: "2026-11-07T13:10:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [problem-based-learning, productive-failure]
technology: [generative-ai, simulation, intelligent-tutoring]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
updated: "2026-11-13T19:05:00-05:00"
translation_of: "concepts/case-based-learning"
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Synthèse** : L'apprentissage par cas enseigne à travers des cas particuliers : une présentation de patient, un litige, une décision d'entreprise, un épisode de classe, ou une paire d'exemples contrastés. Le cas fournit le contexte, les faits et l'ambiguïté ; l'enseignant conçoit les questions et la discussion qui le transforment en apprentissage. L'approche est une [[pedagogy|pédagogie]] emblématique de l'enseignement du droit et de la gestion, où la méthode des cas et le [[socratic-method|questionnement socratique]] organisent depuis longtemps la classe, ainsi que de la [[medical-education|formation aux professions de santé]], où les cas cliniques et les patients simulés offrent une pratique contrôlée. Son mécanisme d'apprentissage recoupe celui de l'[[problem-based-learning|apprentissage par problèmes]] et de l'[[productive-failure|échec productif]], mais ce n'est pas la même chose : les cas sont généralement des récits délimités dotés d'un espace de problème conçu, tandis que l'apprentissage par problèmes part d'un problème mal structuré que les étudiants investiguent. Les nouvelles preuves sur l'IA sont prometteuses mais étroites. Une étude de faisabilité portant sur cinq cas périopératoires a constaté qu'un [[llm|LLM]] ancré répondait de manière appropriée à 99.3% (543/547) des questions des stagiaires et ne produisait aucun contenu fabriqué. Une étude de faisabilité en sciences infirmières a constaté que [[generative-ai|ChatGPT]] réduisait le temps de création d'un cas de 106 à 71 minutes sans changement mesurable de la qualité de la discussion. Une [[meta-analysis-systematic-review|méta-analyse]] de six essais randomisés a constaté que l'apprentissage par problèmes et par cas assisté par l'IA améliorait les connaissances et la satisfaction, mais seuls deux essais testaient l'apprentissage par cas et la revue n'a jamais analysé les formats séparément. La littérature manque encore d'une étude qui isole la qualité du cas, la facilitation de la discussion et les résultats d'apprentissage dans un même dispositif.

## Questions à examiner

- Qu'est-ce qui fait d'un cas un cas, plutôt qu'un long problème énoncé en mots ou une histoire assortie d'un questionnaire ?
- En quoi l'apprentissage par cas diffère-t-il de l'apprentissage par problèmes, et pourquoi cette différence importe-t-elle pour la manière dont l'IA devrait être utilisée ?
- Quelles parties d'une discussion de cas devraient être planifiées à l'avance, et lesquelles devraient être laissées au jugement en direct de l'enseignant ?
- Quand l'IA génère un cas, que faut-il vérifier avant que les étudiants ne le voient ? Quand les étudiants discutent d'un cas avec un [[intelligent-tutoring|tuteur IA]], que faut-il protéger ?
- Pourquoi les cas sont-ils si courants dans l'enseignement du droit et de la gestion, et que perdraient ces disciplines si les cas étaient remplacés par des résumés ou des simulations ?
- Quelles preuves montreraient que l'enseignement par cas fonctionne, plutôt que le fait que les étudiants ont apprécié le cas ou bien noté la discussion ?

## Introduction

Un cas est une situation particulière et délimitée. Il réunit des acteurs, des faits, des contraintes, et généralement une décision ou un diagnostic à atteindre. Le cas ne porte pas sa propre leçon. La leçon vient des questions qu'un enseignant pose, des comparaisons que les étudiants font et du raisonnement qu'ils extériorisent dans la discussion. C'est pourquoi l'enseignement par cas est une pratique de conception, et pas seulement un genre de matériel de lecture.

Le terme recouvre une famille de techniques. **L'apprentissage par cas** désigne généralement des cas structurés utilisés pour appliquer des connaissances et développer un raisonnement clinique ou professionnel. La **méthode des cas** est la tradition juridique et gestionnaire qui enseigne à travers des décisions de juridictions d'appel ou des situations managériales, souvent avec un questionnement socratique. Les **études de cas** peuvent désigner des cas pédagogiques, mais la même expression nomme aussi un [[research-methods-aied|devis de recherche]] ; une étude de cas portant sur une école n'est pas une leçon fondée sur un cas. Les **cas contrastés** affinent la perception en demandant aux apprenants de comparer deux exemples ou plus qui diffèrent sur une caractéristique que l'enseignant veut leur faire remarquer. La **discussion de cas** est la couche de facilitation qui transforme un cas écrit en raisonnement collectif.

Ces techniques recoupent l'[[problem-based-learning|apprentissage par problèmes]], l'[[inquiry-based-learning|apprentissage par l'investigation]], la [[simulation]] et l'[[productive-failure|échec productif]], et les frontières ne sont pas toujours nettes en pratique. La distinction qui compte est fonctionnelle : une conception fondée sur un cas part d'un cas qui a été sélectionné ou écrit dans un but pédagogique, et l'enseignant l'utilise pour rendre visible une manière particulière de raisonner.

## Ce qui compte comme apprentissage par cas

La première distinction est avec l'apprentissage par problèmes. L'apprentissage par problèmes (ABP) part d'un problème mal structuré et demande aux étudiants d'identifier ce qu'ils doivent apprendre, de le rechercher et de revenir avec une solution. Le problème peut être un cas, mais la caractéristique déterminante est l'investigation dirigée par l'étudiant. L'apprentissage par cas commence plus souvent par un cas préparé et un ensemble défini d'objectifs d'apprentissage ; l'enseignant peut diriger l'analyse, attribuer des rôles ou utiliser le cas pour illustrer une décision. L'ABP et l'apprentissage par cas partagent la facilitation et le contexte, mais ils répartissent le contrôle différemment. Cela importe pour l'IA : une IA qui génère un cas soutient une conception d'apprentissage par cas, tandis qu'une IA qui accompagne des étudiants en tutorat à travers un problème ouvert est plus proche de l'ABP.

La deuxième distinction est avec l'étude de cas de recherche. Une étude de cas [[qualitative-research|qualitative]] est une méthode pour étudier un système délimité. Un cas pédagogique est un artefact conçu. Le même mot apparaît dans les deux, et de nombreuses études utilisent l'étude de cas comme méthode de recherche sans enseigner par cas. Une page de concept doit garder le sens pédagogique séparé, faute de quoi le décompte des preuves gonfle.

La troisième distinction est entre les formats de cas. Un cas narratif complet peut courir sur plusieurs pages et exiger une préparation substantielle. Une courte vignette peut tenir dans une seule séance ou dans une évaluation. Un ensemble de cas contrastés apparie délibérément des exemples qui diffèrent sur une caractéristique cible. Un cas simulé peut être interactif, avec un patient standardisé, un [[conversational-ai|agent conversationnel]] ou un [[virtual-and-augmented-reality|environnement virtuel]] qui répond à l'apprenant. Le format change le travail cognitif : les cas longs exigent synthèse et priorisation, les vignettes testent la reconnaissance, les cas contrastés soutiennent la discrimination, et les simulations ajoutent la prise de décision en temps réel.

## Pourquoi les cas fonctionnent

Les cas sont un pont entre le savoir abstrait et le jugement situé. Ils donnent aux apprenants un contexte dans lequel les concepts ont des conséquences, et ils rendent visibles les [[prior-knowledge|connaissances antérieures]] : les étudiants doivent remarquer ce que le cas permet, ce qu'il laisse ambigu, et quels principes s'appliquent. En formation professionnelle, c'est précisément l'intérêt. L'[[legal-education|enseignement du droit]] utilise les cas et le dialogue socratique pour apprendre aux étudiants à lire une autorité, à distinguer les motifs de décision et à raisonner à partir de la jurisprudence. L'[[business-education|enseignement de la gestion]] utilise les cas pour exercer l'analyse sous incertitude, souvent avec une décision qui n'a pas de bonne réponse unique. La formation aux professions de santé utilise les cas cliniques pour répéter le diagnostic, la prise en charge et la communication avant que de vrais patients ne soient en danger.

Le mécanisme n'est pas simplement « des exemples du monde réel ». Un cas peut être réaliste et n'enseigner que très peu si la discussion ne demande jamais aux étudiants de discriminer, de justifier ou de comparer. Les conceptions les plus solides utilisent les cas pour créer un espace de problème avant l'explication, ce qui est le lien avec l'[[productive-failure|échec productif]] : les étudiants tentent un cas, rencontrent les limites de leur modèle actuel, puis reçoivent un enseignement qui comble l'écart. Les cas contrastés affinent cela davantage. Quand deux cas diffèrent sur une caractéristique qui compte, les apprenants peuvent voir la caractéristique plutôt que l'histoire de surface. L'étude existante d'un cours d'IA générative de trois semaines destiné à 78 étudiants d'un programme préparatoire issus de minorités ethniques a utilisé le [[teacher-role|modelage par l'enseignant]] avec des cas contrastés pour faire passer les étudiants de la copie efficace vers la cocréation critique ([[scaffolding-critical-engagement-genai-minority-students]]). C'est une conception de comparaison de cas, et non un test de l'apprentissage par cas en droit ou en gestion, mais elle montre le mécanisme dans une vraie classe.

Les cas portent aussi une dimension sociale. Une discussion de cas rend le raisonnement public : les étudiants proposent des interprétations, entendent des alternatives et révisent. Les questions de l'enseignant font le travail qu'un manuel ne peut pas faire. C'est pourquoi remplacer un cas par un résumé ou un cours magistral peut conserver le contenu tout en perdant l'apprentissage. C'est aussi pourquoi une IA qui répond aux questions du cas à la place de l'étudiant peut court-circuiter la discussion même lorsque ses réponses sont exactes.

## Ce que l'IA change

Les nouvelles preuves se regroupent autour de trois usages : générer des cas, mettre en œuvre des cas et synthétiser les preuves.

**Générer des cas.** [[higashitsuji-chatgpt-case-creation-nursing-2025|Higashitsuji, Otsuka et Watanabe (2025)]] ont comparé la création manuelle et la création assistée par ChatGPT de cas par huit enseignants en sciences infirmières. Le temps de création médian est passé de 106.0 à 71.0 minutes, une différence statistiquement significative, tandis que la charge perçue et la qualité de la discussion ne montraient aucun changement significatif. L'étude est un essai de faisabilité avec neuf étudiants et un plan croisé non randomisé en aveugle, si bien qu'elle étaye une économie de temps plausible plutôt qu'une équivalence. La question de conception importante n'est pas de savoir si un modèle peut produire un cas. Elle est de savoir si le cas généré préserve le raisonnement clinique que l'enseignant visait, et si quelqu'un le vérifie avant que les étudiants ne l'utilisent.

**Mettre en œuvre des cas.** [[trewren-ai-perioperative-case-based-learning-2026|Trewren et coll. (2026)]] ont construit cinq cas périopératoires, les ont chargés dans une plateforme LLM personnalisée et ont demandé à quatre stagiaires en anesthésie de les interroger comme des évaluations de patients. Sur 547 paires question-réponse, 99.3% (543/547) ont été jugées appropriées et aucune n'était fabriquée ; les quatre échecs étaient des refus de rapporter une information que le cas contenait. C'est la preuve qu'un modèle ancré peut tenir un cas ensemble sous questionnement. Ce n'est pas la preuve que les stagiaires ont appris davantage qu'avec une discussion de cas conventionnelle, et l'étude n'a pas comparé les deux.

**Synthétiser les preuves.** [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025|Wei et coll. (2025)]] ont passé en revue six essais contrôlés randomisés d'ABP et d'apprentissage par cas assistés par l'IA en formation médicale et dentaire. Quatre essais sont entrés dans la méta-analyse des connaissances, qui rapporte une amélioration de 46% avec une faible hétérogénéité ; trois ont produit un score de satisfaction regroupé de 0.7. Le raisonnement clinique n'a pas pu être regroupé parce que les essais utilisaient des instruments différents. Seuls deux des six essais testaient l'apprentissage par cas, et la revue n'a pas analysé l'ABP et l'apprentissage par cas séparément. Le résultat est encourageant pour les conceptions de cas et de problèmes soutenues par l'IA, mais il ne nous dit pas quelles caractéristiques du cas ont produit le gain.

Les revues environnantes ajoutent du contexte sans ajouter d'estimation propre à l'apprentissage par cas. [[hardie-genai-nursing-scoping-review-2026|Hardie et coll. (2026)]] ont trouvé l'apprentissage par cas à l'intérieur du thème de la simulation d'une revue de 103 études en sciences infirmières, et non comme l'une de ses quatre catégories nommées. [[lorteau-sarro-ai-legal-education-2025|Lorteau et Sarro (2025)]] décrivent l'IA comme un complément à l'enseignement socratique et aux simulations juridiques interactives, mais leur revue de 82 travaux n'analyse pas la méthode des cas comme intervention. [[csaszar-ai-management-education-2026|Csaszar et coll. (2026)]] ne traitent explicitement pas de l'enseignement par cas ; leurs seules références aux cas sont incidentes, et ils notent que certaines études de cas ont été remplacées par des simulations de gestion. L'enseignement de la gestion et l'enseignement du droit fournissent donc la justification institutionnelle des cas, et non les preuves de résultats. Les conceptions adjacentes de type cas incluent les [[ai-standardized-patient-scaffolding-medical-2026|patients standardisés étayés par un LLM]] et la [[genai-medical-education-transformation-review-2026|revue de la formation médicale]] qui compte l'apprentissage par cas parmi ses catégories d'application.

## Concevoir et faciliter des cas avec l'IA

- **Écrire le cas autour d'une décision ou d'une discrimination.** Un cas sans choix conséquent devient une lecture. Précisez ce que les étudiants doivent remarquer, décider ou justifier, puis construisez les faits et les ambiguïtés autour de cette cible.
- **Vérifier les cas générés à l'aune du raisonnement visé.** L'IA peut produire des détails cliniques ou juridiques fluides mais structurellement faux. Faites relire les faits, les omissions et le chemin de raisonnement par un expert de la discipline avant que le cas n'atteigne les étudiants.
- **Conserver l'ambiguïté du cas.** Un cas généré qui résout toutes les tensions enseigne la reconnaissance, pas le jugement. Préservez l'information incomplète et les interprétations concurrentes qui rendent la discussion nécessaire.
- **Recourir à des cas contrastés lorsque la cible est la discrimination.** Appariez des cas qui diffèrent sur la caractéristique que les étudiants doivent remarquer, et demandez-leur d'expliquer la différence plutôt que de simplement classer chacun d'eux.
- **Protéger la discussion de la livraison de réponses.** Si un tuteur IA est disponible pendant le travail sur le cas, limitez-le à des questions, des indices ou du jeu de rôle. Une IA qui fournit le diagnostic ou la conclusion juridique retire le travail cognitif que le cas existe pour créer.
- **Évaluer le raisonnement, pas le rappel du cas.** Demandez une justification, un diagnostic différentiel, une comparaison ou une note de décision. Un questionnaire sur les faits du cas peut être réussi alors que le raisonnement sous-jacent reste absent.
- **Traiter la facilitation de l'enseignant comme partie de la conception.** La séquence des questions, le moment de l'explication et la gestion d'une fausse route ne sont pas de la décoration. Ils déterminent si le cas devient un échec productif ou un échec confus.

## Limites des preuves
Les preuves sont minces d'une manière spécifique. L'étude périopératoire teste si un modèle ancré peut répondre à des questions sur cinq cas, et non si l'enseignement par cas améliore l'apprentissage. L'étude en sciences infirmières teste le temps de création de cas et la qualité de la discussion avec neuf étudiants. La méta-analyse regroupe six essais, dont seuls deux testaient l'apprentissage par cas, et son résultat sur les connaissances mélange ABP et apprentissage par cas. Les revues juridiques et gestionnaires décrivent des usages et des contextes institutionnels ; elles n'isolent pas les effets de la méthode des cas. L'étude sur les cas contrastés est une évaluation de cours, et non une comparaison contrôlée de formats de cas.

Il existe aussi un risque conceptuel. Un cas peut être mémorable parce qu'il est vivant, et non parce qu'il a produit de la compréhension. Une discussion peut sembler productive parce que les étudiants ont parlé, et non parce qu'ils ont raisonné. Le champ a besoin de conceptions qui séparent le cas de la facilitation, le format du contenu disciplinaire, et l'engagement immédiat du transfert différé. D'ici là, l'affirmation honnête est que les cas sont une pédagogie professionnelle bien établie avec un soutien plausible de l'IA, et non que les cas assistés par l'IA ont un avantage d'apprentissage démontré.

## Idées fausses courantes

- **« L'apprentissage par cas n'est que l'apprentissage par problèmes avec une histoire. »** L'ABP est une investigation dirigée par l'étudiant à partir d'un problème mal structuré. L'apprentissage par cas part généralement d'un cas préparé et d'une cible pédagogique plus définie.
- **« Un cas réaliste enseigne par lui-même. »** Le réalisme fournit le contexte. Ce sont les questions, les comparaisons et les tâches de justification qui fournissent l'apprentissage.
- **« Les cas générés par l'IA sont prêts à l'emploi. »** Les cas générés peuvent être fluides, plausibles et faux. Ils exigent une relecture experte et une vérification du raisonnement qu'ils invitent.
- **« Si les étudiants apprécient la discussion, le cas a fonctionné. »** L'engagement n'est pas le transfert. Le résultat doit être mesuré sur une tâche que les étudiants ne pouvaient pas accomplir auparavant.

## Concepts liés

- [[problem-based-learning]]
- [[productive-failure]]
- [[inquiry-based-learning]]
- [[pedagogical-patterns]]
- [[simulation]]
- [[professional-training]]
- [[legal-education]]
- [[business-education]]
- [[medical-education]]
- [[nursing-education]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[assessment]]
- [[higher-ed]]

## Articles liés

- [[trewren-ai-perioperative-case-based-learning-2026]] — Un LLM ancré a tenu cinq cas périopératoires sans fabriquer de contenu
- [[higashitsuji-chatgpt-case-creation-nursing-2025]] — ChatGPT a réduit le temps de création de cas en sciences infirmières sans différence de qualité mesurée
- [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025]] — Six essais contrôlés randomisés d'ABP et d'apprentissage par cas assistés par l'IA ; seuls deux testaient l'apprentissage par cas
- [[scaffolding-critical-engagement-genai-minority-students]] — Modelage par l'enseignant avec des cas contrastés dans un cours d'IA générative
- [[ai-standardized-patient-scaffolding-medical-2026]] — L'apprentissage par cas aux côtés de patients virtuels et simulés
- [[genai-medical-education-transformation-review-2026]] — L'apprentissage par cas et le raisonnement clinique parmi les catégories d'application de la revue
- [[hardie-genai-nursing-scoping-review-2026]] — L'apprentissage par cas à l'intérieur du thème de la simulation d'une revue en sciences infirmières
- [[lorteau-sarro-ai-legal-education-2025]] — L'IA complète l'enseignement socratique et les simulations juridiques
- [[csaszar-ai-management-education-2026]] — Les études de cas et les simulations de l'enseignement de la gestion, sans analyse de la méthode des cas
