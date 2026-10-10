---
title: "IA explicable"
created: "2026-09-07T10:15:00-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'IA explicable (XAI) en éducation** est la conception et l'étude de la mise en lisibilité des décisions d'un système d'IA pour les acteurs éducatifs concernés — les [[learners|apprenants]], les enseignants, les [[administrator|administrateurs]], les [[parents-and-families|parents]], les chercheurs et les [[stakeholders|décideurs publics]]. La distinction centrale que le champ s'obstine à faire valoir : expliquer le **contenant enseigné** (pourquoi un fait est vrai) n'est pas la même chose qu'expliquer la **décision d'un système d'IA** (pourquoi telle activité a été attribuée à tel apprenant, pourquoi telle réponse a été jugée incorrecte, quelles preuves étayent une prédiction de risque). L'éducation apporte des besoins d'explicabilité qui lui sont propres — des données d'apprentissage bruitées, des explications qui peuvent directement soutenir la [[metacognition|métacognition]] et l'[[self-regulated-learning|apprentissage autorégulé]], et des acteurs qui exigent des types d'explication fondamentalement différents. La question de conception opératoire est celle de la **qualité de l'explication**, et non de la simple disponibilité d'une explication : une explication techniquement présente mais illisible, trompeuse ou mal ajustée à son public peut faire plus de mal que pas d'explication du tout.

## Questions à examiner

- Lorsqu'un [[intelligent-tutoring|tuteur par IA]] vous dit pourquoi un indice a été donné, explique-t-il le *contenu enseigné* ou la *décision du système* ? Pouvez-vous nommer trois exemples de chacun dans votre propre usage de l'IA éducative ?
- Qui a besoin d'explications en éducation — et les apprenants, les enseignants et les décideurs publics en ont-ils besoin du *même* type ? À quoi chacun emploierait-il une explication ?
- Un système d'IA signale qu'un étudiant risque d'abandonner. Que doit savoir un [[teacher-role|enseignant]] pour agir en conséquence, par rapport à ce que l'étudiant doit savoir ? La même explication convient-elle aux deux ?
- Cette page soutient que la *qualité* de l'explication compte davantage que sa *disponibilité*. Qu'est-ce qui fait échouer une explication techniquement présente — vous souvenez-vous d'un moment où une explication était là, mais inutile, ou pire, trompeuse ?
- La [[trust-calibration|confiance]] et l'explication sont liées mais non identiques. Pourquoi une explication fluide et assurée pourrait-elle créer une confiance *fausse* dans un système défaillant — et comment détecteriez-vous que cela se produit ?

## Introduction

L'[[ai-education|IA explicable en éducation]] nomme l'attente croissante que les systèmes d'IA employés dans les salles de classe ne soient pas des boîtes noires. Parce que l'IA en éducation affecte des décisions à conséquences — les notes, les signaux de risque, les [[recommender-systems-and-learning-paths|parcours d'apprentissage]], les recommandations de ressources — les acteurs concernés exigent de plus en plus de connaître non seulement *ce que* le système a conclu, mais *pourquoi*. L'éducation aiguise cette attente en deux questions distinctes : expliquer le contenu enseigné, et expliquer le processus de décision du système d'IA lui-même. Les confondre est une erreur de catégorie aux conséquences pratiques : une IA qui explique parfaitement une réponse de [[physics-education|physique]] ne donne pourtant ni à l'étudiant ni à l'enseignant aucun éclairage sur les raisons pour lesquelles le *système* les a classés à risque, a recommandé une activité donnée, ou a jugé une réponse incorrecte.

## Expliquer le contenu enseigné ou expliquer la décision du système

La contribution fondatrice du champ — le [[xai-education-framework|cadre XAI-ED]] (Khosravi et coll., 2022) — insiste sur le fait que l'éducation a des besoins d'explicabilité *distincts* de ceux de la XAI à usage général. Le principal d'entre eux est la scission entre deux cibles d'explication :

- Les **explications du contenu enseigné** clarifient le *contenu* : pourquoi un indice répond à une [[misconceptions|idée fausse]], pourquoi une réponse est incorrecte, comment un résultat de physique découle de principes. Ce sont des explications [[pedagogy|pédagogiques]] qui soutiennent le [[scaffolding|étayage]], la [[feedback|rétroaction]] et la [[metacognition|métacognition]].
- Les **explications de la décision du système** clarifient *le modèle* : pourquoi telle activité a été attribuée à tel apprenant, pourquoi le système prédit que tel étudiant est à risque, quelles preuves étayent une prédiction de traçage des connaissances ou d'[[learning-analytics|analytique de l'apprentissage]]. Ce sont des explications de transparence qui soutiennent la [[trust-calibration|calibration de la confiance]], l'[[bias-mitigation|atténuation des biais]] et la reddition de comptes.

La distinction importe parce que ces explications servent des acteurs et des finalités différents. Un apprenant qui demande « pourquoi ceci est-il jugé faux ? » a surtout besoin de l'explication du *contenu enseigné* ; un enseignant qui décide s'il faut agir sur un signal de risque, ou un décideur public qui audite les biais, a besoin de l'explication de la *décision du système*. Concevoir une explication unique qui serve les deux est rarement possible — c'est pourquoi la conception multi-acteurs est un thème central du cadre XAI-ED.

## Qui a besoin d'explications : la conception multi-acteurs

- Les **apprenants** ont besoin d'explications qui soutiennent leur propre apprentissage et leur autorégulation — pourquoi un indice a été donné, pourquoi leur réponse a été jugée incorrecte, pourquoi telle ressource est recommandée (soutenant l'[[self-regulated-learning|apprentissage autorégulé]]). Les [[student-perspectives-ai-writing-grading-2026|données sur le point de vue des étudiants]] montrent que les apprenants tracent une ligne nette entre accepter la *rétroaction* de l'IA (utile pour la révision) et céder l'*autorité de notation* (réservée à l'enseignant humain) — une posture calibrée et ajustée à la fonction, activée par la transparence sur l'implication de l'IA. [[ko-hughes-vsd-student-centered-its-2026|Les travaux de conception sensible aux valeurs menés auprès d'étudiants de community college]] aiguisent ce point : les étudiants ont préféré des explications *collaboratives et humanisées* (par exemple, « l'IA pourrait être incertaine ici, alors vérifions cela ensemble ») à la confiance brute du modèle ou à la transparence technique, parce que la transparence seule a peu de valeur à moins de soutenir directement leur apprentissage. L'étude a mis au jour une tension entre transparence et interprétabilité qui pousse la conception de l'explication vers des sémantiques tournées vers l'apprenant plutôt que vers les sorties d'importance des variables.
- Les **enseignants** ont besoin d'explications qui éclairent l'intervention — quels étudiants sont à risque et *pourquoi*, sur quelles preuves. Les [[xai-teachers-trust-edtech-recommendations-2026|études sur l'explicabilité auprès des enseignants]] montrent que les explications [[discipline-specific-aied|propres au domaine]] et rédigées dans le [[curriculum-design|langage des programmes]] construisent plus efficacement l'acceptation et une confiance calibrée que les explications génériques fondées sur l'importance des variables ; pourtant, les enseignants veulent encore une expérience réelle en classe avant de s'y fier pleinement — l'explication seule ne confère pas la [[trust-calibration|calibrage]].
- Les **développeurs et les chercheurs** ont besoin d'explications pour déboguer le comportement du modèle et détecter les [[bias-mitigation|biais]] — en faisant apparaître les variables qui pilotent les prédictions.
- Les **administrateurs et les décideurs publics** ont besoin d'explications pour la reddition de comptes, la [[privacy|vie privée]] et la conformité à la [[regulation|réglementation]] (par exemple le droit à l'explication), et pour auditer si les décisions pilotées par l'IA sont équitables et conformes à l'[[equity-in-ai-education|équité]].

## Approches et formats

Le cadre XAI-ED répertorie les principales modalités d'explication : **visuelles** (cartes thermiques, arbres de décision), **textuelles** (justifications en langage naturel), **fondées sur des exemples** (contrefactuels, plus proches voisins), classements par **importance des variables**, **extraction de règles** et **simplification du modèle**. Il associe aussi ces approches à des classes de modèles :

- Les modèles en **boîte blanche** (arbres de décision, modèles linéaires, fondés sur des règles) sont interprétables par nature.
- Les modèles en **boîte noire** ([[machine-learning|réseaux de neurones]], ensembles) requièrent des méthodes d'explication a posteriori.
- Les approches en **boîte de verre** tentent d'équilibrer précision et transparence.

La base de données probantes concrète de l'AIED couvre l'ensemble de ces modalités. Le **[[knowledge-tracing|traçage des connaissances]] interprétable** rend les modèles de connaissance de l'apprenant directement inspectables ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). Les **substituts auto-explicatifs** distillent un modèle en boîte noire en un petit [[llm|modèle de langue]] interprétable pour l'[[learning-analytics|analytique de l'apprentissage]] ([[distilling-self-explaining-lm-learning-analytics-2026]]). Les **explications contrefactuelles** — « que faudrait-il changer pour obtenir un résultat différent » — soutiennent l'aide à la décision éducative et les recours possibles ([[sc2r-counterfactual-recourse-educational-2026]]). L'**analytique de l'apprentissage fédérée et explicable** montre que la qualité de l'explication peut se dégrader (la calibration se dégrade) même lorsque la stabilité du classement se maintient, ce qui souligne que les explications ne sont pas une propriété figée mais une sortie du système qu'il faut mesurer ([[villegas-ch-federated-explainable-learning-analytics-2026]]). Et les **tuteurs intelligents [[affective-computing|affectifs]] interprétables** démontrent des explications dans le tutorat [[affective-tutoring|sensible aux émotions]] ([[multimodal-affective-its-presentation]]).

## La qualité de l'explication, non sa disponibilité

Une leçon récurrente traverse l'ensemble des données probantes : **avoir une explication ne suffit pas** ; l'explication doit convenir à son public, être exacte et calibrée sur les enjeux. Le cadre XAI-ED nomme explicitement les écueils :

- **La surcharge d'explication** — trop d'informations submerge l'utilisateur et annule le bénéfice.
- **Les explications trompeuses** — les explications a posteriori peuvent ne pas refléter le raisonnement réel du modèle, donnant une fausse confiance.
- **Le biais de confirmation** — les utilisateurs se concentrent sélectivement sur les explications qui confirment leurs croyances existantes.
- **La confiance excessive** — des explications fluides peuvent créer une fausse confiance dans des systèmes défaillants, alimentant la [[cognitive-offloading|dépendance excessive]] (l'envers de la [[trust-calibration|calibration de la confiance]]).
- **Le contournement du système** — les étudiants peuvent exploiter les explications pour échapper à l'apprentissage réel.

La qualité de l'explication a aussi une dimension d'équité : une explication techniquement présente mais illisible pour un acteur donné — ou qui occulte le [[bias-mitigation|biais]] d'une prédiction — manque sa finalité. C'est pourquoi la question de conception est celle de la *qualité et de l'ajustement*, et pourquoi la conception d'explications centrée sur l'humain et propre à chaque acteur est indissociable de la génération technique des explications. Une XAI efficace est un acte de communication conçu pour les besoins cognitifs du destinataire, et pas seulement un artefact technique.

L'explication n'est pas toujours un facteur d'égalisation. Dans une expérience par vignettes 2 × 2 menée auprès de 250 élèves de septième, une justification écrite d'une note de mathématiques a augmenté l'acceptation et l'équité perçue dans les deux conditions, mais a élargi plutôt que réduit l'écart entre les décisions prises par un [[teacher-role|enseignant]] et celles prises par l'IA ([[decision-making-agent-student-decision-acceptance-2026|Zhang et coll. (2026)]]).

Deux mises en garde aiguisent encore ce constat, que la contribution la plus récente du wiki sur le sujet place au centre. Premièrement, la machinerie d'explication n'est pas elle-même neutre : des méthodes a posteriori comme LIME et SHAP peuvent être infidèles au comportement réel du modèle, de sorte qu'une explication techniquement présente peut tromper plutôt qu'informer ([[lund-socially-accountable-data-science-xai-2026|Lund et coll. 2026]], s'appuyant sur Chuan et coll. 2024). Deuxièmement, **l'explication n'est pas la reddition de comptes**. Un exposé des variables qui ont piloté une prédiction ne révèle ni si ces variables étaient appropriées à l'usage, ni si les données d'entraînement étaient représentatives, ni si la conception du système traduisait un jugement solide ; les explications peuvent créer l'apparence de la transparence tout en laissant intactes les conditions structurelles qui ont produit une décision (Mittelstadt et coll. 2019). Pour l'éducation, cela signifie que la question à continuer de poser n'est pas de savoir si une explication a été produite, mais si la personne qui la reçoit — un étudiant, un enseignant, un conseiller — pouvait la comprendre, agir en conséquence, ou contester la décision qui la sous-tend. La même défaillance de lisibilité apparaît du côté de la sécurité de l'[[automated-assessment|évaluation automatisée]] : [[humble-prompt-injection-ai-grading-red-team-2026|le test d'intrusion mené par Humble (2026) sur un outil de notation par IA]] a montré que celui-ci désactivait silencieusement le dialogue après avoir bloqué une injection d'invite et — bien qu'il eût annoncé qu'il ne suivrait jamais les instructions embarquées — les suivait dans six exécutions supplémentaires sur le même fichier, ne laissant à l'utilisateur aucun signal fiable sur lequel fonder sa confiance.

**L'explicabilité par la conception** est une réponse au problème de fidélité des méthodes a posteriori. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang et Fang (2025)]] paramètrent un décodeur d'explication par la même représentation fusionnée et la même note prédite qui décident de l'[[assessment|évaluation]], de sorte qu'une note faible sur un questionnement [[formative-assessment|formatif]] produit une justification nommant l'insuffisance des questions de sondage, et l'associent à une attention à double volet portant sur les références des programmes et sur les gestes propres à la grille disciplinaire. L'alignement de l'attention sur la grille atteint 78.0% contre 41.7% pour GPT-4 en zero-shot et 32.1% pour BERT, et la fidélité est sondée par suppression contrefactuelle des passages critiques pour la grille, parallèlement à des évaluations humaines sur une liste de contrôle ancrée dans la grille, ce qui donne un score de crédibilité de l'explication de 0.78 — une augmentation de 0.31 par rapport à BERT-base. L'audit montre aussi où l'affirmation architecturale s'amincit : sur les indices émotionnels, le modèle alloue 28.4% du poids d'attention contre 15.2% pour un expert (alignement 0.53), avec un cas d'échec attribuant 28% au token « frustrated », ce que les auteurs lisent comme un surajustement à l'affect plutôt qu'à la pédagogie, et qu'ils désignent comme un axe d'amélioration. Intégrer les explications dans le chemin de décision les rend plus fidèles que les justifications a posteriori ; cela ne les rend pas correctes.

## Enseigner l'explicabilité comme pratique de reddition de comptes

Si la qualité de l'explication décide de l'utilité de la XAI, alors produire des explications doit s'enseigner comme une habitude professionnelle plutôt que se démontrer comme une capacité. [[lund-socially-accountable-data-science-xai-2026|Lund et ses collègues (2026)]] proposent de le faire selon quatre piliers — l'**obligation de répondre** (l'obligation de donner des raisons à ceux qui sont affectés), la **responsabilité** (le préjudice anticipé sur l'ensemble du cycle de vie, et non défendu après coup), l'**application** (des conséquences à l'intérieur du cours) et la **réflexivité** (l'examen documenté de ses propres présupposés) — chacun avec ses propres travaux et son propre coût en classe.

Pour l'explicabilité spécifiquement, les travaux qui comptent sont ceux qui forcent l'explication à sortir du carnet de notes : des fiches de modèle notées au même titre que les métriques de précision, et des audits d'explication structurés dans lesquels les étudiants appliquent des outils d'interprétabilité à leurs propres modèles, puis en présentent les résultats à un public sans bagage technique partagé. L'application est le pilote le plus souvent absent des cours voisins de l'éthique et celui qui rend le reste plus que symbolique — des grilles qui récompensent la documentation responsable, des projets pouvant être renvoyés en révision pour des motifs [[ethics|éthiques]], et une [[peer-assessment|révision par les pairs]] conduite selon des critères de reddition de comptes et pas seulement techniques. L'article reconnaît honnêtement que les outils diffèrent fortement en coût : les fiches de modèle et les déclarations de positionnement ne requièrent aucun nouveau logiciel et ne risquent qu'une conformité superficielle, tandis que les panels de pairs et la mobilisation des acteurs exigent une coordination et une adhésion institutionnelle — c'est pourquoi il recommande une adoption par étapes plutôt qu'un engagement de type tout ou rien. Voir [[curriculum-design]] pour savoir où ces éléments s'insèrent dans un programme.

## Concepts liés

- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]

## Articles liés

- [[lund-socially-accountable-data-science-xai-2026]] — A four-pillar framework (answerability, responsibility, enforcement, reflexivity) for teaching XAI as accountability practice (Lund et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Value-sensitive design of student-centered ITS (collaborative vs. raw explanations)
- [[xai-education-framework]] — XAI-ED: the foundational framework for explainable AI in education (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Domain-specific explanations build teachers' trust and acceptance (Feldman-Maggor et al. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — Student perspectives on transparent AI-assisted assessment (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[explainable-probabilistic-kt]] — Explainable knowledge tracing via probabilistic embeddings
- [[neural-symbolic-knowledge-tracing]] — Neural-symbolic knowledge tracing
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling black-box models into self-explaining LMs for learning analytics
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving risk modeling
- [[sc2r-counterfactual-recourse-educational-2026]] — Semantics-constrained counterfactual recourse for educational decision support
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations
- [[multimodal-affective-its-presentation]] — Interpretable closed-loop ITS for multimodal affective feedback
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Explaining ChatGPT adoption in higher education
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Explainable-by-design LLM framework: dual-lens attention and score-parameterized explanations for automated teacher assessment (Li et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injection in AI-mediated grading, where detection was never reported to the user (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions

- [[decision-making-agent-student-decision-acceptance-2026]] — Teacher- versus AI-made grading decisions: a written rationale widened the fairness gap

## Citation

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.
