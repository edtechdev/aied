---
title: "L'évaluation sommative"
created: "2026-08-19T17:30:00-04:00"
updated: "2026-10-10T03:24:45-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/summative-assessment
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'évaluation sommative** — l'évaluation utilisée pour mesurer et certifier ce qu'un apprenant a appris à la fin d'une unité, d'un cours ou d'un programme, par opposition à l'[[formative-assessment|évaluation formative]] qui soutient l'apprentissage durant l'enseignement. L'évaluation sommative prend typiquement la forme d'examens à enjeux élevés — écrits, oraux, surveillés ou à livre fermé — qui attribuent des notes, conditionnent le passage à l'étape suivante et certifient la compétence. À l'ère de l'IA, l'évaluation sommative est devenue un champ de bataille central autour de l'[[academic-integrity|intégrité académique]] et de la validité : l'[[generative-ai|IA générative]] peut gonfler la performance sur des tâches non surveillées ou à réaliser à la maison, ce qui fait du choix du format d'évaluation sommative — et de la manière dont il résiste à la substitution par l'IA — une décision de conception cruciale.

## Questions à examiner

- L'évaluation sommative certifie ce qu'un élève a appris à la fin d'un cours, tandis que l'évaluation formative soutient l'apprentissage pendant celui-ci. Où avez-vous vu la frontière entre les deux se brouiller, et pourquoi importe-t-il qu'elles remplissent des fonctions différentes ?
- La page présente l'IA générative comme remodelant l'évaluation sommative dans deux directions à la fois : l'IA note les examens, et les élèves utilisent l'IA pour échapper à la mesure fondée sur l'examen. Laquelle de ces deux pressions pensez-vous constituer la plus grande menace pour la validité, et pourquoi ?
- Si les tâches non surveillées ou à faire à la maison perdent leur validité parce que l'IA peut produire les réponses, qu'est-ce que cela implique pour la manière dont les évaluations devraient être conçues — et qu'est-ce qui pourrait être sacrifié dans le processus ?
- La [[research-methods-aied|recherche]] citée dans la page montre que les LLM ne notent pas les essais de la même manière que les humains. Si la notation automatisée est rapide et cohérente mais note différemment, est-ce un problème d'[[bias-mitigation|équité]], une opportunité, ou les deux ?
- Que signifie un résultat à enjeux élevés (une note, une attestation, une admission) si le travail qui le sous-tend aurait pu être produit par l'IA ? Comment concevriez-vous une évaluation à laquelle vous pourriez réellement faire confiance ?

## Introduction

L'évaluation sommative remplit une fonction fondamentalement différente de l'évaluation formative : elle mesure et certifie la réussite plutôt qu'elle ne guide les prochaines étapes. Elle comprend les tests de fin d'unité, les examens finaux, les tests standardisés et à enjeux élevés (par exemple les examens d'entrée), les soutenances orales et les évaluations de performance cumulatives. Parce que les résultats sommatifs ont des conséquences réelles (notes, passage à l'étape suivante, attestations, admission à l'université), ils font face à des pressions particulières à l'ère de l'IA — à la fois comme *cibles* de la notation automatisée et comme mesures *vulnérables* que les élèves peuvent chercher à contourner à l'aide de l'IA générative.

## Les enjeux de l'ère de l'IA : validité et intégrité

Les recherches de la base de connaissances documentent la manière dont l'IA générative a fondamentalement remodelé le paysage de l'évaluation sommative dans deux directions : l'IA est utilisée pour **noter** les examens à grande échelle, et l'IA peut être utilisée par les élèves pour **échapper** à la mesure examinée de leur propre apprentissage.

- **L'IA comme correcteur.** L'évaluation sommative repose de plus en plus sur la [[automated-assessment|notation automatisée]] des examens, des essais et des réponses courtes. [[llms-do-not-grade-essays-like-humans-2026|La recherche sur la notation des essais par les LLM]] montre que les [[llm|LLM]] ne notent pas les essais de la même manière que les humains, ce qui soulève des questions de validité et d'équité pour la notation automatisée à enjeux élevés. [[llm-automated-assessment-student-self-explanations|L'évaluation par les LLM des auto-explications des élèves]] et [[cong-confidence-asag-2026|la correction automatique des réponses courtes]] explorent la fiabilité de la notation par les LLM dans des contextes sommatifs, tandis que les [[psyscore-essay-scoring-zpd-feedback|cadres psychométriquement conscients]] cherchent à maintenir la notation automatisée digne de confiance et adaptative. Un examen manuscrit de chimie générale portant sur 296 élèves illustre pourquoi une supervision sélective est nécessaire : la concordance d'un LLM multimodal avec la notation des assistants d'enseignement sur le score total était élevée (R² = 0.91), or la fiabilité au niveau des items variait fortement selon le format, et les faux positifs (l'IA créditant des réponses réellement fausses) tendent à passer inaperçus parce que les élèves les contestent rarement — si bien qu'un correcteur IA uniforme du type « tout noter » n'est pas défendable pour un usage à enjeux élevés sans renvoi fondé sur le niveau de confiance à des humains ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **La concordance des résultats peut survivre à une notation imprécise au niveau des items.** Comparée à des notes officielles modérées, un LLM multimodal notant 10,364 pages manuscrites de l'Olympiade de physique et de l'université corrélait à r = 0.93–0.96 et retrouvait la même équipe internationale de cinq élèves, bien que la concordance exacte au niveau des sous-questions n'atteigne que 70% — un correcteur se juge aux décisions qu'il éclaire ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **L'IA comme échappatoire.** Parce que l'IA générative peut produire des réponses à des questions écrites, les tâches sommatives non surveillées et à faire à la maison perdent leur validité : [[generative-ai-reduced-study-time-math|les mesures surveillées et sans assistance sont essentielles]], parce que la performance non surveillée est gonflée par l'IA, et les [[generative-ai-guardrails-harm-learning|outils encadrés (indice plutôt que réponse)]] peuvent éliminer la pénalité à l'examen que cause une IA sans garde-fous. La quasi-expérience de [[chirikov-ai-grade-inflation-2026|Chirikov (2026)]] portant sur plus de 500,000 notes rend le mécanisme concret : après la sortie de ChatGPT, les cours comportant davantage de tâches exposées à l'IA ont vu la part des notes A augmenter de 13 points de pourcentage, et l'effet s'est concentré dans les **cours riches en devoirs** (16 points de pourcentage supplémentaires dans l'estimation par triple différence) — une preuve directe que ce sont les devoirs non surveillés, et non de véritables [[learning-gains|gains d'apprentissage]], qui sont le lieu où l'IA gonfle les résultats sommatifs.
- **Des examens générés par l'IA.** [[assessing-quality-ai-generated-exams-field-2025|Une étude de terrain à grande échelle]] et la [[ai-vs-human-assessment-efl-tpck-2026|recherche sur l'évaluation en anglais langue étrangère]] examinent si l'IA peut *générer* des examens et des tâches d'évaluation de haute qualité — un usage émergent de l'IA dans la conception d'évaluations sommatives.

## Les formats d'évaluation sommative résistants à l'IA

Un thème clé de la base de connaissances est que **le format de l'évaluation sommative détermine sa résistance à l'IA** — plus une tâche exige une performance en direct, en présentiel et sondée individuellement, plus il est difficile pour les élèves d'y substituer l'IA à leur propre apprentissage.

- **Les examens oraux et les évaluations orales.** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] soutient que l'examen oral est un format d'évaluation sommative à la fois de basse technicité et intrinsèquement résistant à l'IA : son dialogue interactif en temps réel teste la compréhension, la [[critical-thinking|pensée critique]] et le raisonnement plutôt que la mémorisation, empêche les élèves d'utiliser l'IA pour générer et mémoriser des réponses, et reflète la pratique professionnelle. Les [[socratic-tests-conversational-assessment|tests socratiques]] et les [[code-review-genai-cs1|entretiens de revue de code]] prolongent cette logique dans une évaluation sommative dynamique, conversationnelle et fondée sur l'entretien.
- **Les mesures à livre fermé, surveillées et sans assistance.** Des [[generative-ai-reduced-study-time-math|données probantes]] et des [[stromberg-generative-ai-learning-penalty-secondary-2026|données de terrain à grande échelle]] montrent que les examens surveillés à livre fermé — et non les devoirs ou les travaux à la maison gonflés par l'IA — constituent le signal fiable de l'apprentissage réel lorsque les élèves utilisent l'IA. Les cadres d'[[responsible-assessment-ai-era-stanford-2026|évaluation responsable]] intègrent ces mesures sans assistance dans une refonte guidée par la validité. Lorsque les examens restent en ligne, la [[remote-proctoring|surveillance à distance]] reprend ce rôle, et les deux revues que le corpus consacre à la surveillance automatisée relèvent des préoccupations de vie privée et d'[[bias-mitigation|équité]] à côté des gains en matière de détection ([[automated-online-exam-proctoring-decade-review-2026]], [[academic-dishonesty-automated-proctoring-ai-2026]]).
- **Associer une tâche vulnérable à un jumeau confirmatoire.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] conservent une tâche vulnérable à l'IA générative pour sa valeur d'apprentissage, mais l'associent à une seconde tâche évaluant les mêmes résultats, rendant la note interdépendante au moyen d'un seuil de confirmation ou d'une pondration, de sorte que le jumeau certifie le résultat.

## L'évaluation sommative standardisée à enjeux élevés

L'évaluation sommative à enjeux élevés — examens d'entrée, tests standardisés et certification — porte des conséquences disproportionnées et constitue un centre d'intérêt de l'ère de l'IA. [[stromberg-generative-ai-learning-penalty-secondary-2026|L'étude sur la pénalité d'apprentissage liée à l'IA générative]] a mesuré les résultats aux examens d'entrée au lycée (Zhongkao) et à l'université (Gaokao), constatant que les scores aux examens d'entrée chutaient de 18–24% après un usage prolongé de l'IA. [[brcic-effortless-trap-productive-struggle-2026|The Effortless Trap]] et les recherches sur la [[genai-performance-vs-learning|performance par opposition à l'apprentissage]] avertissent que les gains sur des tâches assistées par l'IA ne se transfèrent pas aux mesures à enjeux élevés et sans assistance.

## Le sommatif et le formatif à l'ère de l'IA

La littérature sur l'évaluation de la base de connaissances souligne systématiquement que l'[[assessment|évaluation]] est plus efficace lorsqu'elle combine des fonctions [[formative-assessment|formatives]] et sommatives — mais l'ère de l'IA aiguise la distinction. Parce que l'IA gonfle la performance sur des tâches à faible enjeu, non surveillées et dont le processus est masqué, **les mesures sommatives (en particulier surveillées, à livre fermé, en présentiel) deviennent le contrôle crucial** de la question de savoir si l'apprentissage a réellement eu lieu. Cela motive une refonte de l'évaluation qui garde des tâches sommatives authentiques et résistantes à l'IA (examens oraux, entretiens de revue de code, examens surveillés, [[eportfolio|portfolios]] fondés sur le processus) comme ancrage de l'[[academic-integrity|intégrité]], tout en utilisant l'évaluation formative pour soutenir l'apprentissage en cours de route. Voir l'[[authentic-assessment|évaluation authentique]] pour la réponse constructive en matière de conception.

## Implications pour l'IA en éducation

- **Le format d'évaluation sommative est un levier de validité et d'intégrité :** les formats sommatifs résistants à l'IA (oral, surveillé, à livre fermé, en présentiel) préservent le lien entre la performance évaluée et l'apprentissage réel.
- **Les mesures surveillées et sans assistance sont le signal fiable :** lorsque les élèves utilisent l'IA, ce sont les examens sommatifs sans assistance — et non les devoirs — qui révèlent l'apprentissage réel.
- **La notation automatisée exige un examen psychométrique :** utiliser des LLM pour noter des examens à enjeux élevés requiert une évaluation de la fiabilité, de l'équité et de la validité, et pas seulement de l'exactitude.
 L'erreur de notation dépend aussi de la note : sur 32 productions d'examen de santé publique, les LLM évitaient les extrémités de l'échelle — aucun E ni F n'apparaissait en mode rapide — tandis que le meilleur modèle concordait exactement avec la note humaine dans 50.0% des cas et à ±1 note près dans 90.6% des cas ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **L'IA peut aussi générer des examens :** la génération d'examens et de tâches assistée par l'IA est une application émergente de conception sommative qui a elle-même besoin d'une évaluation de qualité.
- **Repensez la finalité de la notation, et pas seulement le format.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais et Galy (2026)]] critiquent la notation sommative traditionnelle et référencée à la norme pour ce qu'elle encourage un apprentissage superficiel et fragmenté, laisse aux élèves peu de contrôle et de transparence, nuit à la [[motivation]] intrinsèque, alimente le stress et l'[[well-being|anxiété]], et perpétue les inégalités tout en évaluant largement le rappel plutôt que l'application au monde réel. Ils positionnent la réévaluation, la [[mastery-learning|notation fondée sur les standards]] et le dénotation (ungrading) comme des innovations centrées sur la notation qui peuvent adoucir la pratique dominée par le sommatif, tout en reconnaissant qu'elles restent marginales dans l'enseignement de la gestion en raison d'obstacles normatifs — la notation sur une courbe, la signalisation externe (classements, stages, accréditation) et l'état d'esprit instrumental des élèves — et recommandent une expérimentation progressive accompagnée d'un soutien institutionnel.

## Concepts liés

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## Articles liés
- [[llm-grading-assistants-public-health-2026]] — Les correcteurs LLM compriment l'échelle des notes et évitent les extrêmes dans l'évaluation d'essais à enjeux élevés

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Réexamen des examens oraux comme évaluation sommative authentique et résistante à l'IA
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — La pénalité d'apprentissage liée à l'IA générative : données probantes issues d'examens surveillés et à livre fermé
- [[chirikov-ai-grade-inflation-2026]] — Le déplacement des tâches par l'IA comme mécanisme d'inflation des notes ; les cours riches en devoirs (Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — Achèvement plus rapide, moins d'apprentissage : les mesures surveillées sont essentielles
- [[generative-ai-guardrails-harm-learning]] — L'IA générative sans garde-fous nuit à l'apprentissage
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans
- [[llm-automated-assessment-student-self-explanations]] — LLMs for automated assessment of student self-explanations
- [[cong-confidence-asag-2026]] — Automatic short-answer grading
- [[psyscore-essay-scoring-zpd-feedback]] — Psychometrically-aware trait-adaptive essay scoring
- [[socratic-tests-conversational-assessment]] — Socratic tests: dynamic, conversational, multimodal assessment
- [[code-review-genai-cs1]] — Code review interviews in CS1
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[test-driven-ai-assisted-learning]] — Test-driven AI-assisted learning
- [[genai-oop-programming-assessments-2026]] — GenAI performance on object-oriented programming assessments
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: productive struggle and the illusion of learning
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated versus human-developed assessment tasks in EFL
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
