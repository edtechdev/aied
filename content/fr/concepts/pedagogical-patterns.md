---
title: "Patrons pédagogiques"
created: "2026-09-30T16:20:00-04:00"
updated: "2026-10-10T04:00:01-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy, scaffolding]
assessment: [formative-assessment, peer-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, k 12]
confidence: high
connected_faqs: [designing-ai-into-learning]
contributors: [editor]
translation_of: concepts/pedagogical-patterns
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Patrons pédagogiques (Pedagogical Patterns)** — les *séquences ordonnées* d'activités que la recherche de cette base de connaissances a testées, avec attention aux endroits où l'[[generative-ai|IA générative]] entre dans la séquence et où le [[human-in-the-loop-ai|jugement humain]] doit demeurer. Là où la [[pedagogy|pédagogie]] catalogue les approches ([[active-learning|apprentissage actif]], [[problem-based-learning|apprentissage par problèmes]], [[collaborative-learning|apprentissage collaboratif]]) et que la [[learning-design|conception pédagogique]] décrit comment un cours est conçu, cette page catalogue ce que les étudiants et les enseignants font réellement, dans quel ordre, et ce qui s'est produit lorsqu'on l'a essayé. PAIRR — brouillon, revue par les pairs, revue par l'IA, réflexion, révision — en est l'exemple le mieux documenté, et le patron qui le sous-tend revient à travers les disciplines : l'effort d'abord, l'IA ensuite, le jugement humain aux enjeux.

## Questions à examiner

- Un patron est une *séquence*, et non un outil. Prenez un devoir que vous enseignez et écrivez l'ordre des gestes que fait un étudiant. À quel endroit de cet ordre l'IA aiderait-elle, et à quel endroit ferait-elle le travail que l'étudiant est censé faire ?
- Plusieurs patrons ici donnent délibérément à l'IA un rôle *faible* — des indices plutôt que des réponses, des questions plutôt que des corrections. Pourquoi un tuteur délibérément moins serviable produirait-il un meilleur apprentissage, et qu'est-ce que cela implique au sujet des outils d'IA que votre institution achète ?
- Le patron le mieux étayé de cette page ([[learning-by-teaching|apprendre en enseignant]] à une IA) demande aux étudiants d'expliquer, et il améliore la qualité de l'explication et des questions mais *pas* la remémoration objective. Si vous l'adoptiez, que changeriez-vous à votre manière d'évaluer ?
- Lorsque la [[ai-feedback-quality|rétroaction de l'IA]] était de meilleure qualité que celle de l'enseignant, les étudiants ne révisaient pas davantage. Qu'est-ce que cela suggère au sujet de la différence entre produire de la rétroaction et amener les étudiants à l'utiliser ?
- Les contextes changent la réponse : certains patrons ont été testés en ligne et de manière asynchrone, d'autres en face à face avec un laboratoire. Lesquels pourriez-vous mener dans votre propre cadre sans nouveaux outils, et lesquels exigeraient une infrastructure que vous n'avez pas ?
- Presque chaque patron ici garde un humain au point du jugement — notation, vérification ou interprétation. Est-ce un choix de conception, une nécessité fondée sur les preuves, ou une limite de ce qui a été testé jusqu'ici ?

## Introduction

La pédagogie répond à la question *comment devrions-nous enseigner* ; cette page répond à une question plus étroite et plus opérationnelle : **dans quel ordre les gestes devraient-ils se produire, et où l'IA appartient-elle dans cet ordre ?** La distinction importe parce que le même outil produit des résultats opposés selon sa position dans une séquence. Un assistant fondé sur l'IA générative placé avant qu'un étudiant ne tente un problème déprime de manière fiable la performance ultérieure sans assistance ; placé après une tentative, avec des indices plutôt que des réponses, la même classe de systèmes supprime ce préjudice.

Chaque patron ci-dessous est rapporté avec un statut probant, parce que la couverture de la base de connaissances est inégale et que la différence importe à quiconque décide quoi adopter :

- **Testé** — au moins un article rapporte un test contrôlé ou comparatif.
- **Mitigé** — testé, mais sans témoin, avec des résultats contradictoires, ou avec la variable testée enchevêtrée à autre chose.
- **Propositions de conception** — l'idée n'apparaît que comme une proposition ou un cadre, sans test rapporté. Celles-ci sont rassemblées séparément à la fin de la page, dans *Propositions de conception (pas encore testées)*, et ne constituent pas des preuves.

Les patrons sont regroupés par la fonction qu'ils servent dans une leçon : placer l'effort avant l'aide, associer la rétroaction de l'IA à la rétroaction humaine, vérifier la compréhension plutôt que la production, faire de l'apprenant l'enseignant, structurer la collaboration, et confronter une [[misconceptions|idée fausse]] spécifique. Les contextes (en ligne, en face à face, hybrides) et les disciplines sont rapportés avec chacun, et résumés à la fin.

## Les patrons qui placent l'effort avant l'aide

Ces patrons partagent une affirmation structurelle : l'apprenant doit s'engager dans une tentative avant que l'IA ne contribue. C'est la règle de conception la plus constamment étayée dans la base de connaissances.

### Récupérer ou tenter avant que l'IA ne réponde

**Preuves : testé.** La séquence est : tenter depuis la mémoire, recevoir un enseignement ou un exemple, s'exercer en séances espacées, consulter l'IA seulement après s'être engagé dans une tentative, recevoir une rétroaction contingente à la réponse qui sonde l'idée fausse, et n'avancer qu'une fois que la réponse montre un engagement adéquat.

Une condition de récupération espacée adaptative a produit les scores de post-test les plus élevés (M = 78,19) et a significativement surpassé l'étude assistée par l'IA dirigée par l'apprenant (M = 67,28, d = 0,92, p = ,003) sur 89 étudiants dans un cours de statistiques hybride, tandis que l'espacement fixe était statistiquement indiscernable de l'adaptatif ([[adaptive-pretesting-retention|Akgun et Toker, 2026]]). Le cas contrasté est décisif : dans un [[rct|essai randomisé]] portant sur 120 étudiants, le groupe qui étudiait *avec* un accès sans restriction à ChatGPT retenait moins lors d'un test surprise 45 jours plus tard — 57,5 % de réponses correctes contre 68,5 % pour les apprenants traditionnels, t(83) = −3,19, p = ,002, d = 0,68 — et avait aussi étudié environ 45 % moins, le désavantage survivant à une covariable de temps d'étude ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui, 2025]]). Une expérience de terrain randomisée préenregistrée dans un MBA en ligne a trouvé que les gains suivaient les *semaines achevées* plutôt que les minutes d'exposition (+2,00 points par semaine de tutorat achevée supplémentaire, p = ,018), ce qui se lit comme le fait que la [[retrieval-spacing-interleaving|pratique espacée]] importe plus que le temps total ([[ai-tutor-modality-randomized-field-experiment-2026|Yang et al., 2026]]).

### Échec productif : tenter avant l'enseignement

**Preuves : mitigées, et plus minces que sa réputation.** Les étudiants tentent un problème ciblant un concept qui ne leur a pas été enseigné, le tuteur retient la solution et sollicite de multiples tentatives, l'aide ne vient que lorsqu'elle est strictement nécessaire, et la consolidation suit avec une comparaison et un enseignement direct.

La seule étude de terrain qui teste la séquence complète avec un tuteur piloté a porté sur 17 étudiants du secondaire à Singapour : la condition pilotée a atteint un score d'échec productif plus élevé, significatif pour la cohérence des problèmes (p = ,046), et les étudiants ont produit en moyenne 2,6 représentations par séance (p = ,05), mais **aucun résultat d'apprentissage n'a été mesuré** ([[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al., 2025]]). Le soutien le plus fort est indirect et provient d'une expérience randomisée en sujets intérieurs portant sur 26 étudiants, où l'[[scaffolding|étayage]] à réponse immédiate a performé significativement *moins bien* que les rôles de pair, d'assistant d'enseignement et de tuteur sur l'abstraction de modèles (β = −0,692, p = ,015 ; β = −1,039, p < ,001 ; β = −0,769, p = ,005) alors même que les étudiants *préféraient* le tuteur directif — la préférence allait à l'encontre de la compétence ([[preferred-scaffolding-ai-mathematical-modeling|Zhu et al., 2026]]).

### Analyse des erreurs et exemples erronés

**Preuves : mitigées.** Les étudiants diagnostiquent une erreur dans un artefact — un diagramme généré par l'IA violant l'intégrité référentielle, une requête qui abandonne une jointure, un fragment de code d'un [[llm|grand modèle de langue]] — reçoivent des indices qui les forcent à inférer la correction plutôt qu'on ne la leur remette, la réparent, et réfléchissent à quelles parties de la production étaient indignes de confiance.

Une étude pré-post portant sur 13 étudiants dans un cours de bases de données en ligne est passée de 4,25 à 6,83 sur 7 (t(12) ≈ 5,10, p < ,001, d = 1,49) en utilisant des cycles hebdomadaires de critique et d'affinage bâtis sur des cas délibérés de défaillance de l'IA, mais en l'absence de groupe témoin le gain ne peut être séparé du [[curriculum-design|programme d'études]] ni de l'enseignant ([[pedagogy-ai-mistakes|Hosseini, 2026]]). Une [[meta-analysis-systematic-review|revue systématique]] de 72 études sur l'enseignement de l'informatique rapporte que l'analyse des erreurs est une compétence *distincte* : les étudiants performaient significativement moins bien à corriger du code généré par des grands modèles de langue qu'à des tâches d'examen de programmation traditionnelles ([[kumar-genai-computing-education-systematic-review-2026|Kumar et al., 2026]]). Aucun article de la base de connaissances ne rapporte un test contrôlé de l'enseignement par exemples erronés en tant que tel.

### Exemples travaillés avec auto-explication

**Preuves : mitigées — les deux moitiés divergent.** Un exemple travaillé est présenté avec des justifications manquantes à compléter, ou avec des erreurs à trouver ; l'étudiant le complète ou le répare, explique son raisonnement, puis tente le problème suivant.

L'attribution adaptative d'exemples guidés et bogués a battu l'attribution aléatoire par type de problème dans une étude de classe portant sur 113 étudiants (post-test M = 72,3 et 72,5 contre 65,7 pour le témoin, A = ,58, p = ,005 et p = ,002), et la variante par [[knowledge-tracing|traçage des connaissances]] a réduit l'écart de réussite de 77,1 % pour les étudiants à faibles [[prior-knowledge|connaissances préalables]] (β = 9,4, p = ,001) ([[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al., 2026]]). Mais *ajouter* l'étape d'auto-explication à une rétroaction élaborée par l'IA a perdu sur toutes les mesures dans une expérience préenregistrée portant sur 302 participants : elle a doublé le temps de rétroaction (4,1 contre 2,1 min, p < ,001), réduit de 40 % les problèmes achevés (2,0 contre 3,4, p < ,001), produit aucun gain par épisode (OR = 1,03, p = ,486), et abaissé la maîtrise en fin de séance (65 % contre 79 %, d = ,41, p < ,001) ([[structured-reflection-ai-explanatory-feedback-2026|Asher et al., 2025]]).

## Les patrons qui associent la rétroaction de l'IA à la rétroaction humaine

Le constat le plus répliqué de la base de connaissances sur la rétroaction de l'IA est qu'elle fonctionne mieux *combinée* à la rétroaction humaine que seule — et que sa qualité n'est pas ce qui détermine si les étudiants l'utilisent.

### PAIRR : revue par les pairs et par l'IA avec réflexion

**Preuves : mitigées (largement mis en œuvre, non contrôlé).** Les étudiants lisent et réfléchissent à la manière dont l'IA et la rétroaction fonctionnent, rédigent un brouillon, donnent et reçoivent une revue par les pairs, sollicitent l'IA pour une rétroaction fondée sur des critères sur le même brouillon, comparent les deux de manière critique, rédigent un plan de révision, révisent, et réfléchissent à quelle rétroaction a changé quoi.

La plus grande étude à ce jour sur l'usage de la rétroaction de l'IA par des étudiants de premier cycle a suivi 654 étudiants dans dix cours d'écriture et trois cours de [[stem-education|STIM]] à forte intensité d'écriture : 58 % préféraient la rétroaction combinée de ChatGPT et des [[peer-assessment|pairs]], 36 % les seuls pairs et seulement 6 % la seule IA ; 75 % trouvaient les deux similaires et mutuellement renforçantes ; la rétroaction de l'IA était jugée « trop générale » par 31 % tandis que la rétroaction des pairs était plus spécifique pour 28 % ; et seulement 5,3 % montraient une confiance excessive dans la rétroaction de l'IA ([[pairr-ai-peer-review-2025|Sperber et al., 2025]]). Le modèle a aussi été mis en œuvre dans un cours d'écriture commerciale de deuxième cycle universitaire auprès de 34 étudiants, où environ un quart des réflexions codées exprimaient un scepticisme à l'égard de la rétroaction de l'IA ou relevvaient des inexactitudes ([[gift-ai-pairr-business-writing-2025|MacArthur et al., 2025]]). Les deux rapportent des données de perception ; aucun n'a de condition témoin, ce qui explique pourquoi le patron est *mitigé* plutôt que *testé*.

### Rétroaction combinée des pairs et de l'IA

**Preuves : testé.** Les preuves comparatives proviennent de l'extérieur du programme PAIRR. Une quasi-expérience portant sur 122 étudiants chinois d'anglais langue étrangère a trouvé que la rétroaction intégrée IA-plus-pairs élevait l'[[student-engagement|engagement]] comportemental, affectif et cognitif par rapport à la seule rétroaction des pairs (tous p < ,001 ; η² partiel = 0,28, 0,28, 0,32) et améliorait l'écriture sur les quatre dimensions de l'IELTS (F(1,119) = 42,68, p < ,001, η² partiel = 0,26), le plus fort sur la réalisation de la tâche (d = 1,41) — sans post-test différé, si bien que la durabilité n'est pas mesurée ([[ai-peer-feedback-l2-writing-engagement-2026|Liu, 2026]]). Dans une étude randomisée portant sur 45 étudiants enseignants en 12 groupes, la rétroaction des pairs soutenue par l'IA générative a battu la simple rétroaction des pairs sur l'argumentation, et la variante *étayée par l'invite* a le mieux performé sur des éléments avancés tels que les données de réfutation et la prise en compte du point de vue adverse ([[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al., 2026]]).

### Critique par l'IA puis révision

**Preuves : testé — avec un nul important.** Rédiger un brouillon, solliciter l'IA pour une rétroaction fondée sur le barème, évaluer de manière critique cette rétroaction par rapport au barème et aux sources, rédiger un plan de révision, réviser, et réfléchir.

Une expérience factorielle contrôlée 2 × 2 portant sur 120 étudiants en anglais a trouvé que le gain de qualité d'écriture était le plus élevé pour le groupe formé à la fois au filtrage et à l'appréciation (M = 7,92), contre 6,10, 4,56 et 3,10 pour les autres conditions, la révision profonde passant de 28 % à 48 % et l'avantage persistant sur un nouveau sujet et après le retrait du soutien de l'IA ([[rethinking-ai-writing-feedback-literacy|Dai, 2026]]). Le nul est la partie instructive : dans une expérience randomisée à trois groupes portant sur 70 étudiants, la rétroaction de l'IA sollicitée par chaîne de pensée était significativement de *meilleure qualité* que la rétroaction de l'IA en zéro-coup (p = ,01) et que la rétroaction de l'enseignant (p = ,008), et pourtant cet avantage de qualité **ne s'est pas traduit par de plus grands gains de révision** — la rétroaction de l'enseignant produisait une amélioration comparable ([[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al., 2026]]).

### Revue par un humain dans la boucle des productions de l'IA

**Preuves : mitigées — l'étape de revue est rarement la variable testée.** L'IA génère une production de brouillon, des agents vérificateurs automatisés la contrôlent pour le réalisme, la lisibilité ou l'[[hallucination-risk|hallucination]], les contrôles échoués renvoient en boucle pour affinage, et un enseignant révise, corrige et accepte ou écarte avant que quoi que ce soit n'atteigne les étudiants.

Une boucle à quatre agents avec 8 enseignants a produit 212 problèmes dont 166 ont été acceptés tels quels, et les contrôles de réalisme ont fonctionné comme prévu (10 problèmes de réalisme signalés, 20 modifications de quantité ou d'unité, aucune erreur de mathématiques trouvée dans un problème final) — mais l'adéquation à l'intérêt était le point faible, les étudiants rejetant le sujet dans 160 des 422 réponses ([[walkington-teachers-multi-agent-personalized-problem-generation-2026|Walkington et al., 2026]]). Un outil de rétroaction avec éducateur dans la boucle, évalué par 30 enseignants, n'est jamais tombé sous 4,1/5 sur neuf items et a réduit le temps médian par devoir de 10 à 30 minutes à moins de 5, mais les auteurs reconnaissent l'absence d'évaluation par les étudiants, si bien qu'aucune affirmation d'apprentissage n'est étayée ([[zhao-learnlens-feedback-educators-loop|Zhao et al., 2025]]). Une expérience d'équipe rouge rend concrets les enjeux : 2 des 5 injections d'invites ont changé une note sans être détectées, à 100 % (9/9) et 94 % (17/18), laissant l'enseignant comme seul véritable contrôle de la production de la [[automated-assessment|notation par IA]] ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]).

## Les patrons qui vérifient la compréhension plutôt que la production

Parce que l'IA peut produire un artefact compétent, ces patrons déplacent l'évaluation vers des preuves que l'artefact ne peut fournir à lui seul.

### Vérification orale et par soutenance

**Preuves : testé comme format, mais les résultats portent sur les scores et l'affect plutôt que sur l'apprentissage.** Un devoir de programmation est remis avec l'IA autorisée, suivi dans les 48 heures d'une revue orale obligatoire de 15 minutes du code, dans laquelle l'étudiant explique le programme et exécute en direct des tests d'intégration, notée à 70 % sur la revue et à 30 % sur le barème.

Une quasi-expérience de trois semestres portant sur 96 étudiants n'a trouvé aucun changement statistiquement significatif de la performance à l'examen malgré les nouvelles politiques (environ 2 % d'amélioration sur un examen), tandis que le rapport des caractères collés au total passait de 61,0 % à 68,1 % (p < 0,0001) ; 90 % des étudiants ont dit que les revues les motivaient à mieux comprendre leur code et 65 % qu'elles les aidaient à éviter une dépendance excessive ([[code-review-genai-cs1|Fowles et al., 2026]]). Des réponses orales enregistrées de manière asynchrone ont produit des scores significativement plus élevés que le choix multiple en personne (médiane de mi-parcours 92,5 contre 70, p < ,001 ; médiane finale 94,2 contre 86,4, p = ,002) avec seulement des corrélations modérées entre formats (τ = ,44 et ,25) — et les auteurs avertissent qu'il s'agit de *différences de scores de format, et non de preuves de gains d'apprentissage*, le comportement de triche n'étant pas mesuré ([[asynchronous-oral-assessment-2026|Pentland et al., 2026]]). La direction n'est pas uniformément positive : les étudiants étaient plus calmes dans une soutenance par conversation (M = 6,50 contre 5,86, p = ,028) mais jugeaient la soutenance en face à face significativement meilleure pour comprendre leur propre travail (p = ,004) ([[aivaluate-anxiety-assessment-2026|Yusuf et al., 2026]]).

### Points de contrôle échelonnés et preuves de processus

**Preuves : mitigées — aucun test contrôlé du mécanisme lui-même.** Les travaux de cours se déroulent en modules échelonnés, chacun se terminant par un point de contrôle qui vérifie à la fois la production *et* l'approche — un résultat correct obtenu par codage en dur est rejeté — avec un contrôle préalable à l'avancement qui renvoie l'apprenant aux étapes sautées.

Une étude de cas portant sur 5 étudiants diplômés dans un cours d'information quantique à rythme libre a consigné 75 interactions et confirmé que le double point de contrôle portant sur la production et l'approche fonctionnait comme prévu, sans groupe témoin ([[quantum-education-its|Elhaimeur et Chrisochoides, 2026]]). Un pilote de 27 participants utilisant des points de contrôle à arrêt bloquant a rapporté des gains significatifs de [[self-efficacy|sentiment d'efficacité personnelle]] dans les dix domaines de compétence évalués (p < 0,001) dans un dispositif pré-post en sujets intérieurs où les gains ne peuvent être séparés des effets de pratique ([[agentic-education-coding|Naboulsi, 2026]]). Une quasi-expérience de trois ans portant sur 248 étudiants en [[engineering-education|ingénierie biomédicale]] a trouvé des taux de A plus élevés après l'ajout d'un apprentissage par problèmes à quatre modules avec jalons et barèmes (66,4 % contre 39,1 %, Δ = +27,3 points, p = 0,042), persistant après exclusion de l'année touchée par la pandémie, mais la comparaison est historique et non randomisée ([[pbl-biomedical-engineering-genai-2026|Nnamdi et al., 2026]]).

## Les patrons qui font de l'apprenant l'enseignant

### Apprendre en enseignant à un élève d'IA

**Preuves : testé, et c'est le patron le mieux étayé de cette page.** L'étudiant étudie le contenu, puis l'explique à une IA sollicitée pour tenir une posture de novice qui ne révèle jamais l'explication cible ; l'IA demande des explications, des exemples et un raisonnement de vérification, séquencés de l'ordre inférieur à l'ordre supérieur, et persiste jusqu'à ce que l'explication soit satisfaisante.

Une quasi-expérience portant sur 68 enseignants en formation initiale a trouvé que le fait d'expliquer à un apprenant novice doté d'IAG obtenait un score plus élevé sur la définition de la classe renversée (M = 4,18 contre 3,29, p < 0,001, r = 0,474) et sur ses activités (M = 4,91 contre 3,06, p < 0,001, r = 0,642), générait des questions plus nombreuses et de meilleure qualité (les deux p < 0,001) — mais ne montrait **aucune différence de groupe sur les questions objectives** (M = 23,18 contre 21,57, p = 0,416) ([[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al., 2026]]). Une expérience de laboratoire randomisée portant sur 41 étudiants a trouvé des scores de test de connaissances plus élevés (ajustés 11,86 contre 10,53, F = 35,54, η² = 0,74) et un code plus clair et plus lisible, mais **aucune différence dans l'exactitude du code** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al., 2024]]). Un déploiement de 11 semaines sur 546 étudiants a trouvé que chaque acte d'apprentissage profond supplémentaire était associé à une diminution de 2,7 % des tentatives de quiz attendues (IRR 0,973, p < ,001), la comparaison étant confondue par le temps sur tâche et par la montée, en fin de semestre, du contournement consistant en une réutilisation de contenu externe de 30 à 35 % ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al., 2026]]). La forme constante : des gains en explication et en travail génératif, et non en remémoration objective.

## Les patrons qui structurent la collaboration

### Rôles scriptés avec une IA partagée

**Preuves : testé, mais dans des cadres contrôlés ou non contrôlés plutôt que dans des salles de classe ordinaires.** Deux apprenants partagent une seule IA et se voient attribuer des rôles explicites avec des règles de rotation ; l'IA est configurée pour prendre un rôle selon le besoin et sa production va à l'ensemble du groupe. Dans une variante de programmation en binôme, l'IA partagée modélise l'attention et l'effort conjoints de la dyade, prévoit une défaillance jusqu'à 30 secondes à l'avance, et fait monter les étayages en paliers, allant de ne rien faire jusqu'à un indice directif.

Une expérience en sujets intérieurs portant sur 26 dyades a trouvé que la condition avec rétroaction atteignait un plus grand succès de débogage (t[49,96] = −13,51, p < ,0001) et terminait plus vite (t[44,70] = 4,39, p < ,0001), bien qu'elle ait exigé du matériel d'oculométrie binoculaire et de pupillométrie et n'ait pas testé le transfert à un travail en binôme sans surveillance ([[golrang-propact-pair-programming-2026|Golrang et al., 2026]]). Une quasi-expérience portant sur 58 étudiants diplômés en 16 groupes a trouvé que la conception des rôles élevait les scores de contenu des cartes conceptuelles de 3,65 à 4,59 sur une échelle SOLO de 1 à 5 (z = 3,771, p < 0,001) tandis que les décomptes de nœuds et de branches restaient stables — mais en l'absence de groupe témoin, les effets de pratique ne peuvent être exclus ([[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al., 2026]]).

### Discussion assistée par l'IA

**Preuves : mitigées — la seule implémentation directe est une description de cas.** Les étudiants analysent un scénario et répondent de manière indépendante à des questions guidées, sollicitent ChatGPT avec une invite standardisée sur les mêmes questions, évaluent les réponses de l'IA pour l'exactitude par rapport aux leurs, affinent leur réponse, et concluent par une discussion à l'échelle de la classe.

L'activité d'économie exploite délibérément une erreur de l'IA — ChatGPT qualifie de « parfaitement élastique » le comportement dépeint dans la chanson, alors que la bonne réponse est inélastique — faisant de la validation de la production de l'IA le cœur de la discussion ([[beck-genai-literacy-economics-hands-on|Beck et Brodersen, 2025]]). Elle rapporte des impressions d'enseignant, et non un résultat mesuré. Une séquence testée de discussion collaborative avec 67 étudiants en formation des enseignants a trouvé que le groupe expérimental surpassait un témoin par cours magistral (M = 51,45 contre 43,89, p = 0,001, g = 0,839) avec une co-régulation en hausse (p = 0,043, g = 0,512) — mais l'IA servait à *concevoir* la technique, et non à animer la discussion ([[ccct-cooperative-learning-technique|Tutal, 2026]]).

## Les patrons qui confrontent une idée fausse spécifique

### Réfutation et changement conceptuel

**Preuves : testé — avec des résultats directement contradictoires.** Solliciter la croyance spécifique de l'apprenant, présenter un [[refutation-text|texte de réfutation]] ou un dialogue d'IA personnalisé qui la confronte, s'engager avec la contre-preuve et l'explication correcte, réénoncer la conception correcte, puis retester après un délai.

Une expérience préenregistrée portant sur 375 adultes a trouvé que le dialogue d'IA personnalisé sur les idées fausses produisait des réductions de croyance immédiates significativement plus importantes qu'à la fois la réfutation de type manuel et le dialogue d'IA neutre, persistant à 10 jours mais convergeant avec la réfutation de type manuel au bout de 2 mois ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett et Tangen, 2026]]). Une quasi-expérience de Solomon à quatre groupes portant sur 413 élèves de 3e a trouvé l'inverse : les textes de changement conceptuel écrits par des experts et générés par l'IA étaient tous deux significativement plus efficaces que le dialogue interactif avec ChatGPT, qui ne montrait aucun avantage significatif par rapport au témoin, et les gains étaient presque exclusivement limités aux étudiants à haute performance ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdogan, 2025]]). Le deuxième article signale explicitement le conflit et l'attribue à la [[prompt-engineering|conception des invites]] et au domaine. Le texte de réfutation lui-même a battu le témoin dans les deux cas.

## Contextes et disciplines

Le patron détermine ce que le contexte exige, et plusieurs patrons n'ont été testés que dans un seul cadre :

- **En ligne et asynchrone.** La récupération et l'espacement, les variantes socratiques, les exemples travaillés avec auto-explication, l'usage étayé par l'invite, l'[[oral-assessment|évaluation orale]] asynchrone, et les déploiements d'apprentissage en enseignant. Les cadres asynchrones rendent la *séquence* porteuse de sens, parce que le système ne peut pas voir si l'étudiant a tenté d'abord.
- **En face à face et hybrides.** L'[[productive-failure|échec productif]], l'analyse des erreurs, les variantes renversées, la revue orale de code, la collaboration scriptée, et les études de changement conceptuel. Le temps de classe est souvent réalloué plutôt que remplacé — dans le patron de revue orale, les cours magistraux ont été déplacés vers la vidéo afin que le temps de classe puisse accueillir les entretiens.
- **Disciplines représentées dans les preuves testées.** L'[[writing-education|écriture]] et l'[[language-learning|apprentissage des langues]] (PAIRR, rétroaction combinée des pairs et de l'IA, critique par l'IA puis révision), les [[math-education|mathématiques]] (récupération et espacement, échec productif, exemples travaillés, analyse des erreurs), l'[[cs-education|informatique]] (assistants socratiques, analyse des erreurs, revue orale de code, apprentissage en enseignant, travail en binôme scripté), la [[medical-education|médecine]] (étayage socratique dans les entretiens cliniques), la [[teacher-education|formation des enseignants]] (argumentation scriptée, apprentissage en enseignant), la [[business-education|gestion]] (tutorat MBA renversé), et les cadres de [[physics-education|physique]], d'[[science-education|enseignement des sciences]] et d'[[vocational-education|enseignement professionnel]] pour les études de changement conceptuel et d'évaluation orale.

## Ce que les preuves n'étayent pas encore

Énoncé clairement, parce que ce sont les constats les plus susceptibles d'être discrètement abandonnés :

- **Une meilleure rétroaction de l'IA ne produit pas davantage de révision.** Une rétroaction par chaîne de pensée de meilleure qualité a battu la rétroaction de l'enseignant sur la qualité et n'a produit aucun avantage de révision (Farrokhnia et al., 2026).
- **Le [[socratic-method|questionnement socratique]] n'est pas automatiquement meilleur.** Un essai randomisé portant sur 132 étudiants a trouvé que l'assistant socratique avec contexte complet était jugé significativement *moins bon* pour soutenir l'achèvement de la tâche que toutes les autres configurations (rang moyen 48,63, μ = 3,53, contre 4,27, 4,16 et 4,12 ; χ²(3) = 12,14, p = ,007), avec le plus fort usage externe de grands modèles de langue (23 %) et le moins de réponses de compréhension complète (48 % contre 67 %) ([[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al., 2026]]) — tandis qu'un ECR médical a trouvé qu'un système [[agentic-ai|multi-agents]] contenant un tuteur socratique battait son témoin sur les scores d'examen et de communication ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]).
- **Les étudiants préfèrent le rôle le moins efficace.** Le tutorat directif était préféré tandis que l'étayage à réponse immédiate déprimait l'abstraction de modèles (Zhu et al., 2026).
- **Les formats de vérification changent les scores sans démontrer l'apprentissage.** Les formats oraux ont élevé les scores et réduit l'[[anxiety-and-stress|anxiété]] tandis qu'une étude trouvait le face à face meilleur pour la compréhension, et aucune étude n'a mesuré la triche.
- **Aucun test contrôlé n'isole la revue humaine des productions de l'IA**, et le mécanisme de point de contrôle n'a jamais été testé comme variable manipulée.
- **L'échec productif et l'analyse des erreurs reposent sur des études petites et non contrôlées** (n = 17 et n = 13) qui mesurent la fidélité à la stratégie ou l'[[self-report-measures|auto-déclaration]] plutôt que les résultats d'apprentissage.

## Propositions de conception (pas encore testées)

Les patrons ci-dessous proviennent d'un guide pour le corps professoral fourni par le mainteneur de la base de connaissances (*AI-Ready Course Design*, septembre 2026). Ce guide énonce explicitement que ses exemples sont des **propositions de conception, et non des interventions testées**, et aucun article de cette base de connaissances ne les teste. Ils sont consignés ici comme des idées de conception qui valent la peine d'être essayées et évaluées, et ne doivent pas être lus comme des preuves.

- **Argument + trace de révision** (composition, lettres). Remplacez une remise composée d'une seule dissertation par une thèse initiale, deux passages de source annotés, une dissertation révisée et une note de décision de 150 mots ; autorisez la critique par l'IA après le premier brouillon. Évaluez le lien affirmation–preuve et une suggestion acceptée ou rejetée justifiée par rapport aux sources.
- **Données + affirmation raisonnée** (sciences, cours de laboratoire). Remplacez un compte rendu de laboratoire poli par des observations brutes, un graphique, une note d'incertitude et une explication reliant les résultats à une affirmation ; l'IA peut critiquer une interprétation fournie, et les étudiants vérifient cette critique par rapport à leurs données.
- **Tentative + analyse d'erreurs** (précalcul, calcul différentiel et intégral). Remplacez des devoirs constitués de seules réponses par une tentative initiale, l'analyse d'une solution travaillée défectueuse, et une explication corrigée ; les indices ne sont autorisés qu'après la tentative. C'est la forme conçue du patron d'analyse des erreurs ci-dessus, et elle hérite de la base de preuves faible de ce patron.
- **Position + contestation + reconsidération** (psychologie, sociologie). Remplacez « publier une fois, répondre deux fois » par une affirmation fondée sur un cas utilisant un concept du cours ; un pair fournit un contre-exemple et l'auteur révise ou défend avec des preuves.
- **Projet + contrôle lié** (gestion, professions de santé). Associez une recommandation autorisant l'IA pour une organisation fictive ou un cas de patient à une brève explication de deux décisions clés et à une réponse face à une contrainte modifiée ; publiez la relation de notation entre les deux composantes.
- **Plan + essai + adaptation** (réussite universitaire). Remplacez une réflexion générique sur la gestion du temps par un plan d'étude d'une semaine, un bref relevé de sa mise à l'essai, et une révision rattachée à ce qui s'est passé ; l'IA peut suggérer des options de planification après que l'étudiant a identifié les contraintes.

Les mises en garde propres au guide s'appliquent : la vidéo enregistrée, les réflexions et les journaux peuvent eux-mêmes être assistés par l'IA, si bien que dans les cours entièrement asynchrones un enregistrement ne devrait pas être traité comme une vérification de la maîtrise indépendante. Deux de ses cadrages — les jumeaux d'évaluation et l'évaluation orale asynchrone comme moyen de dissuasion de la triche — demeurent des cadres en attente de validation ; les études d'évaluation orale asynchrone citées ci-dessus ont mesuré des scores de format et n'ont pas du tout mesuré la triche.

## Concepts liés

- [[pedagogy]] — le parapluie des approches d'enseignement que cette page opérationnalise en séquences
- [[learning-design]] — là où les patrons sont choisis, séquencés et intégrés dans un cours
- [[scaffolding]] — le principe de soutien et d'estompage qui gouverne où appartient l'aide de l'IA
- [[feedback]] — le système que les patrons de rétroaction de cette page instancient
- [[formative-assessment]] — la finalité évaluative que servent la plupart de ces patrons
- [[peer-assessment]] — la moitié humaine des patrons PAIRR et à rétroaction combinée
- [[ai-feedback-quality]] — pourquoi la qualité de la rétroaction seule ne détermine pas la révision
- [[evaluative-judgment]] — l'appréciation que les étudiants doivent exercer sur les productions de l'IA
- [[feedback-literacy]] — la capacité que les étapes d'appréciation critique construisent
- [[human-in-the-loop-ai]] — la structure de supervision des patrons de revue
- [[oral-assessment]] — le format qui sous-tend les patrons de vérification
- [[process-oriented-assessment]] — la logique derrière les points de contrôle échelonnés
- [[productive-failure]] — le concept derrière la tentative avant l'enseignement
- [[retrieval-spacing-interleaving]] — la base de preuves des patrons de récupération espacée
- [[desirable-difficulties]] — pourquoi les séquences effortées surpassent les séquences fluides
- [[misconceptions]] — ce que les patrons de changement conceptuel ciblent
- [[refutation-text]] — la forme textuelle de la confrontation aux idées fausses
- [[learning-by-teaching]] — la pédagogie derrière le patron de l'élève d'IA
- [[socratic-method]] — le patron de questionnement et ses preuves contradictoires
- [[collaborative-learning]] — le contexte du travail avec IA partagée scriptée
- [[cognitive-offloading]] — le risque que chaque patron plaçant l'effort d'abord vise à éviter
- [[metacognition]] — ce que les étapes de réflexion de ces séquences visent à déclencher
- [[prompt-engineering]] — la couche d'étayage dans les patrons d'usage structuré
- [[transfer-of-learning]] — le résultat sur lequel la plupart des patrons sont en fin de compte jugés
- [[assessment-validity]] — la raison pour laquelle les preuves de processus sont proposées
- [[academic-integrity]] — le moteur derrière la vérification orale et de processus
- [[ai-literacy]] — la capacité développée par la critique des productions de l'IA
- [[online-teaching-and-learning]] — le contexte qui rend la séquence porteuse de sens
- [[higher-ed]] — le niveau où l'essentiel de ces preuves a été généré
- [[k-12]] — le niveau des études d'échec productif, de changement conceptuel et d'évaluation orale

## Articles liés

- [[pairr-ai-peer-review-2025]] — Revue par les pairs et par l'IA + Réflexion (PAIRR) : la séquence phare, N = 654 (Sperber et al. 2025)
- [[gift-ai-pairr-business-writing-2025]] — PAIRR appliqué dans un cours d'écriture commerciale (MacArthur et al. 2025)
- [[ai-peer-feedback-l2-writing-engagement-2026]] — La rétroaction intégrée IA-plus-pairs a élevé l'engagement et les quatre dimensions de l'IELTS (Liu 2026)
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — Rétroaction des pairs par IA générative étayée par l'invite dans l'argumentation collaborative (Chang et al. 2026)
- [[rethinking-ai-writing-feedback-literacy|Dai (2026)]] — Former les étudiants à filtrer et apprécier la rétroaction de l'IA : les conditions FRAC et APCA
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Une rétroaction de l'IA de meilleure qualité n'a produit aucun gain de révision supplémentaire (Farrokhnia et al. 2026)
- [[guardrails-ai-teaching-assistants-programming-2026]] — L'assistant socratique avec contexte complet a été jugé pire que toute autre configuration d'assistant (Eastwood et al. 2026)
- [[ai-standardized-patient-scaffolding-medical-2026]] — Étayage socratique déclenché par le besoin dans la formation à l'entretien clinique, N = 100 (Yang et al. 2026)
- [[hashmi-socratic-physics-chatbot-2025]] — Agent conversationnel socratique en mécanique introductoire : la spécificité des questions est passée de 10–15 % à 100 % (Hashmi et al. 2025)
- [[agent-type-feedback-style-self-directed-learning-2026]] — Rétroaction d'agent socratique contre directive, avec un ordre non contrebalancé (Han et al. 2026)
- [[adaptive-pretesting-retention]] — La récupération espacée adaptative a battu l'étude assistée par l'IA dirigée par l'apprenant (Akgun et Toker 2026)
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — L'accès sans restriction à ChatGPT pendant l'étude a abaissé la rétention à 45 jours (Barcaui 2025)
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Les gains du tutorat structuré suivaient les semaines achevées, et non les minutes (Yang et al. 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Les exemples contre la pratique s'inversent selon le type de connaissance (Rachatasumrit et al. 2025)
- [[adaptive-scaffolding-cognitive-engagement-its]] — Exemples guidés et bogués adaptatifs dans un tuteur logique intelligent (Dey Tithi et al. 2026)
- [[structured-reflection-ai-explanatory-feedback-2026]] — Ajouter l'auto-explication à la rétroaction de l'IA a perdu sur toutes les mesures (Asher et al. 2025)
- [[generative-ai-guardrails-harm-learning]] — Le tutorat gardé a supprimé le préjudice à l'examen que GPT non gardé causait, environ 1 000 étudiants (Bastani et al. 2025)
- [[guided-llm-scaffolding-independent-learning]] — Usage guidé contre non restreint des grands modèles de langue en statistiques (Amanlou et al. 2026)
- [[preferred-scaffolding-ai-mathematical-modeling]] — L'étayage à réponse immédiate déprimait l'abstraction de modèles tout en étant préféré (Zhu et al. 2026)
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Piloter un tuteur fondé sur les grands modèles de langue pour qu'il retienne les solutions afin de favoriser l'échec productif (Puech et al. 2025)
- [[pedagogy-ai-mistakes]] — Cycles hebdomadaires de critique et d'affinage bâtis sur des cas délibérés de défaillance de l'IA (Hosseini 2026)
- [[kumar-genai-computing-education-systematic-review-2026]] — L'analyse des erreurs comme compétence distincte, à travers 72 études sur l'enseignement de l'informatique (Kumar et al. 2026)
- [[lukesova-clue-before-correction-2026]] — Des indices guidés plutôt qu'une correction directe des erreurs dans la révision en L2 (Lukešová et Jennings 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Expliquer à un apprenant novice doté d'IAG, N = 68 (Wang et al. 2026)
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Test randomisé de l'enseignement de la programmation à un agent ChatGPT (Chen et al. 2024)
- [[explique-teachable-agent-algorithms-546-students-2026]] — L'apprentissage en enseignant déployé auprès de 546 étudiants sur 11 semaines (Wang et al. 2026)
- [[socrates-students-instructors-llms-lbt-2025]] — Des étudiants concevant des questions auxquelles un grand modèle de langue ne peut répondre (Yang et al. 2025)
- [[code-review-genai-cs1]] — Entretiens oraux obligatoires de revue de code comme réponse à l'IA générative en CS1 (Fowles et al. 2026)
- [[asynchronous-oral-assessment-2026]] — Évaluation orale enregistrée asynchrone contre choix multiple en personne (Pentland et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — La soutenance par conversation a réduit l'anxiété tandis que le face à face était jugé meilleur pour la compréhension (Yusuf et al. 2026)
- [[ai-supported-oral-assessment-tvet-2026]] — L'IA faisant émerger les preuves du barème pour le jugement de l'enseignant dans des ateliers professionnels (Adams 2026)
- [[quantum-education-its]] — Points de contrôle portant sur la production et l'approche dans un cours de niveau diplômé à rythme libre (Elhaimeur et Chrisochoides 2026)
- [[agentic-education-coding]] — Points de contrôle à arrêt bloquant et contrôle préalable à l'avancement, N = 27 (Naboulsi 2026)
- [[pbl-biomedical-engineering-genai-2026]] — Apprentissage par problèmes à quatre modules avec jalons et barèmes (Nnamdi et al. 2026)
- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]] — Une boucle de revue à quatre agents avec des enseignants, et le lieu où l'adéquation à l'intérêt a échoué (Walkington et al. 2026)
- [[zhao-learnlens-feedback-educators-loop]] — Rétroaction avec éducateur dans la boucle et scores de vérificateur (Zhao et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Injections d'invites qui ont changé des notes sans être détectées, laissant l'enseignant comme seul contrôle (Humble 2026)
- [[golrang-propact-pair-programming-2026]] — Une IA partagée prévoyant la défaillance de la collaboration en programmation en binôme (Golrang et al. 2026)
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] — Rôles scriptés de l'apprenant et de l'IA dans la construction collective de connaissances (Cheng et al. 2026)
- [[paratutor-parent-child-tutoring]] — Soutien par l'IA à rôles séparés dans le tutorat parent–enfant (Luo et al. 2026)
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — Le dialogue d'IA personnalisé a battu la réfutation de type manuel immédiatement, convergeant au bout de deux mois (Corbett et Tangen 2026)
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Les textes de changement conceptuel ont battu le dialogue interactif avec l'IA, le résultat inverse (Akdogan 2025)
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — Enquête guidée soutenue par l'IA et compréhension conceptuelle (Aydin 2026)
- [[ai-enhanced-flipped-classroom-three-year-2026]] — Comparaison sur trois cohortes de cours traditionnel, renversé et renversé augmenté par l'IA (Liu et al. 2026)
- [[flipped-learning-genai-design-education-2026]] — Cours de studio renversé avec étayage par invites guidées par les paramètres (Qu et al. 2026)
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — Le modèle d'enseignement modérait les résultats : renversé g = 1,96 contre traditionnel g = 0,46 (Jing et al. 2026)
- [[ai-tutor-statistical-programming-adoption-2026]] — L'usage hebdomadaire d'un tuteur pour les devoirs prédisait les scores aux tâches de transfert dans un cours renversé (Préau et al. 2026)
- [[beck-genai-literacy-economics-hands-on]] — Une discussion de critique de l'IA en cinq étapes bâtie sur une erreur de l'IA (Beck et Brodersen 2025)
- [[ccct-cooperative-learning-technique]] — Une séquence testée d'apprentissage coopératif avec rôles assignés et visite de galerie (Tutal 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Module de séminaire et de discussion entre pairs avec un moteur de recommandation de recherche documentaire par l'IA (Huang 2026)
