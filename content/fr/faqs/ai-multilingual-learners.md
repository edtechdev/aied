---
title: "Comment l'IA peut-elle soutenir les apprenants multilingues sans mal juger leurs connaissances ni effacer leur voix ?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-disabled-neurodivergent-learners, writing-instruction-ai-best-practices, redesign-assessment-ai-era, verify-ai-output]
weight: 72
foundations: [ai-literacy, theories-and-frameworks]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, feedback, ai-feedback-quality, evaluative-judgment]
methods: [meta-analysis-systematic-review, quantitative-research]
research_method: [literature review, experiment]
audience: [instructors, instructional designers, assessment designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:30:00-04:00"
translation_of: faqs/ai-multilingual-learners
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Un étudiant comprend le concept et a besoin de quatre minutes de plus pour le dire en anglais. L'IA peut traduire la consigne, définir la terminologie, répéter l'explication avec lui, ou écrire la réponse entière. Trois de ces usages sont de l'enseignement. Un seul fait le devoir.

Réponse courte à donner à un collègue : décidez ce que fait la langue dans cette tâche avant de décider ce que l'outil peut faire. Là où la langue est accessoire, l'IA peut retirer un obstacle qui n'a rien à voir avec votre construit. Là où la langue est le construit, le même outil contourne l'apprentissage. Le risque va dans les deux sens à la fois : le [[multilingual-learning|soutien linguistique]] peut améliorer l'accès, et la notation automatisée peut encore mal lire l'étudiant. Dans une étude de physique, des explications de moindre qualité linguistique ont été systématiquement notées en dessous du jugement d'experts par toutes les approches de notation par IA testées, neuf systèmes d'apprentissage automatique et deux systèmes de modèle de langue, auprès de 116 élèves du secondaire ([[ai-scoring-language-bias-physics|Feser et Tschisgale, 2026]]). La fluidité et la compréhension étaient notées comme une seule chose.

## La version courte

**1.** Énoncez le rôle de la langue dans la tâche : accessoire, central, ou un critère parmi plusieurs.

**2.** Écrivez le soutien autorisé dans les consignes et les critères, et dites ce que les étudiants doivent encore faire eux-mêmes.

**3.** Donnez une aide ciblée avant les réécritures complètes. Demandez à l'outil d'identifier ce qui est obscur et de proposer des options.

**4.** Exigez que l'étudiant compare la formulation suggérée à son propre sens et aux sources du cours.

**5.** Notez séparément le raisonnement conceptuel et la langue quand les deux sont des résultats visés.

**6.** Ne faites jamais d'un outil non testé la seule voie d'accès au soutien.

## Décider ce que fait la langue

Dans une explication de biologie, la grammaire est surtout accessoire au concept évalué. Dans un cours de langue, produire et réviser des structures particulières est l'apprentissage. Dans la communication professionnelle, l'exactitude disciplinaire, le public et le registre comptent tous. Le même outil de traduction est approprié dans le premier cas, discutable dans le second et négociable dans le troisième.

Écrivez la décision là où les étudiants peuvent la lire. Si les étudiants peuvent traduire les consignes mais doivent produire une explication dans la langue cible sans aide, dites-le explicitement. Si le soutien terminologique est autorisé, précisez ce que l'étudiant doit encore expliquer et vérifier. Vérifiez ensuite le dispositif au regard des exigences d'aménagement et de la politique de l'établissement, plutôt que de traiter toute forme d'aide linguistique comme interchangeable. Un étudiant bénéficiant d'un aménagement documenté et un étudiant qui évite la pratique peuvent demander la même chose, et seul le second est votre problème pédagogique.

## Ce que la recherche soutient, et ce qu'elle ne soutient pas

[[genai-chatbots-language-learning-affordances-review-2026|Lopez et Arabadzhy (2026)]] ont passé en revue 24 études empiriques sur les chatbots génératifs en apprentissage des langues. Leur apport est taxonomique : chaque sous-affordance cataloguée pour les chatbots pré-génératifs persiste, et trois sont nouvelles, dont le **translanguaging**, le passage délibéré d'une langue à l'autre comme partie de l'apprentissage. C'est une carte des usages et des expériences rapportés plutôt qu'une estimation regroupée, et le corpus est géographiquement concentré, la Chine, l'Iran, Taïwan et la Turquie représentant 19 des 24 études et toutes sauf une se déroulant dans des institutions formelles. Le soutien à l'usage de l'explication translinguistique comme geste d'apprentissage n'est pas un soutien à la traduction de chaque devoir.

C'est dans l'évaluation que les preuves deviennent plus nettes et les enjeux plus élevés. [[ai-scoring-language-bias-physics|Feser et Tschisgale (2026)]] ont comparé onze approches de notation automatisée aux notes d'experts humains pour les explications de physique de 116 élèves du secondaire et ont trouvé une sous-estimation systématique de la compréhension conceptuelle pour les explications linguistiquement plus faibles, dans chacune des approches. Le plan isole le mécanisme : le même contenu conceptuel, exprimé dans une prose plus faible, obtenait une note plus basse. Ce n'est pas une affirmation sur les étudiants multilingues d'un pays particulier, et c'est exactement le schéma qui fait de la concordance globale de notation un mauvais diagnostic. Un correcteur peut s'accorder en moyenne avec des correcteurs humains tout en se trompant dans une direction cohérente pour les étudiants dont la langue est encore en développement.

La synthèse sur [[multilingual-learning|l'apprentissage multilingue]] décrit des recherches de dépistage de l'écriture montrant des schémas de biais prédictif multilingue qui ressemblent aux biais de notation humaine. Lisez les trois résultats ensemble et la leçon opérationnelle est étroite : ni « l'IA supprime le biais humain » ni « l'IA ajoute un biais linguistique » n'est une règle utile. Ce qu'il vous faut, c'est une vérification de la tâche, de la population et de la langue, au moment où une note devient un résultat.

## Donner à l'outil un rôle de soutien précis

Commencez par les consignes : faites traduire ou reformuler la consigne en langage clair par l'outil, vérifiez la sortie contre l'original, et laissez l'étudiant déterminer ce que la tâche exige et poser ses questions sur toute ambiguïté réelle.

Le vocabulaire disciplinaire fonctionne autrement. Réglez l'outil pour comparer les sens entre langues et générer des exemples contextuels, puis faites expliquer le concept par l'étudiant et identifier les équivalents trompeurs.

La pratique de l'oral demande une répétition bornée avec des reprises, l'étudiant produisant la réponse et démontrant la compétence visée.

Pour la révision d'un texte, demandez quelques problèmes nommés avec des corrections possibles, et laissez à l'étudiant la décision et sa justification.

La lecture des contenus de cours est le cas le plus large. Une explication bilingue ancrée dans les supports approuvés aide, à condition que l'étudiant vérifie les affirmations clés et démontre sa compréhension.

Ce sont des usages à tester, pas des interventions validées. Un outil qui réussit dans une langue ou un genre ne devient pas fiable dans un autre, et la concentration géographique de la revue signifie que votre paire de langues n'est peut-être presque pas représentée dans les preuves.

## Protéger le sens et la voix de l'étudiant

Demandez une aide ciblée avant de demander une réécriture, car une réécriture complète est l'endroit où la pensée de l'étudiant quitte la page. Une demande qui vaut la peine d'être enseignée : « Identifie deux endroits où mon sens est obscur. Explique le problème et propose des options. Garde mes exemples et n'ajoute aucune affirmation. » L'étudiant choisit ensuite.

Une séquence qui garde le travail du côté de l'étudiant :

1. Développer l'explication dans la langue ou le mélange de langues qui permet à l'étudiant de raisonner, là où la tâche le permet.
2. Utiliser le soutien approuvé pour examiner la terminologie ou l'expression.
3. Comparer la formulation suggérée au sens visé et aux sources du cours.
4. Produire l'explication exigée et noter les révisions conséquentes.

Dans un devoir de sociologie, un étudiant pourrait raisonner bilingue sur un conflit de rôles familiaux, vérifier une courte liste de termes du cours, puis rédiger l'analyse soumise dans la langue exigée, l'enseignant évaluant le raisonnement sociologique et tout critère linguistique énoncé séparément. Dans une tâche d'apprentissage des langues, la même séquence donnerait la réponse de l'évaluation, et devrait préserver une production indépendante dans la langue cible.

Évitez de faire de « cela sonne comme un locuteur natif » le standard, puisque cela mesure la relation de l'étudiant à un dialecte plutôt que sa maîtrise de votre matière. Spécifiez plutôt la clarté, l'exactitude, le genre ou le public. Une réécriture polie peut déplacer la position énonciative, supprimer une expression culturellement significative ou ajouter une affirmation que l'étudiant n'a jamais voulue, et c'est l'étudiant qui la signe.

## Vérifier l'outil et l'évaluation

Examinez le sens, pas la fluidité. Échantillonnez les traductions et les explications pour les termes techniques, les omissions, les détails inventés, les présupposés culturels et les variétés de langue que vos étudiants utilisent réellement. Impliquez des collègues linguistes qualifiés ou du personnel de soutien ; ne faites pas des étudiants le seul auditeur d'un outil que vous les obligez à utiliser.

Séparez les critères. Quand le raisonnement et la langue sont tous deux des résultats visés, notez-les séparément et vérifiez si un correcteur assisté par IA pénalise la langue deux fois, ou manque un raisonnement correct exprimé de façon non conventionnelle. C'est la forme pratique de la [[assessment-validity|validité]] pour une cohorte multilingue, et la question de sous-groupe dans les [[differential-effects-across-learner-groups|effets différentiels]].

Gardez une voie vers la clarification. Une brève conversation, un schéma annoté ou l'explication d'une décision clé peuvent montrer ce qu'un étudiant comprend quand la prose ne le porte pas. Choisissez le format qui convient au construit plutôt que celui qui est le plus facile à noter.

Offrez des alternatives praticables. Les étudiants ont besoin d'un chemin clair vers un soutien linguistique humain et vers des ressources de cours accessibles. Exiger un outil non testé peut ajouter un obstacle en visant l'inclusion, ce qui est la même défaillance que doit éviter le [[ai-disabled-neurodivergent-learners|soutien aux apprenants en situation de handicap et neurodivergents]].

## Ce qui va vous revenir dessus

**« Traduire signifie que l'étudiant évite le travail. »** Cela dépend de ce qu'est le travail. La traduction peut permettre l'engagement avec un contenu disciplinaire auquel elle n'a aucun rapport, et elle peut remplacer la pratique quand la production indépendante dans la langue cible est le résultat visé. Décidez ce que vous évaluez et dites-le.

**« L'IA a corrigé la langue sans rien changer d'autre. »** Vérifiez-le. Une réécriture qui améliore la grammaire change souvent l'emphase, atténue une affirmation ou invente un étai. Demandez à l'étudiant de nommer un changement significatif et de dire s'il préserve son point de vue, ce qui vous dit aussi s'il a lu la suggestion.

**« Les correcteurs humains sont plus équitables. »** La notation humaine porte son propre biais lié à la langue, et la recherche sur le dépistage de l'écriture multilingue trouve des systèmes automatisés qui reproduisent ses schémas. L'équité vient ici de critères explicites, de preuves échantillonnées par sous-groupe et d'une vraie possibilité de reconsidérer un jugement, pas de la personne ou de la chose qui tient le stylo.

**« Nos étudiants se débrouillent en anglais, donc cela ne s'applique pas. »** Le résultat qui compte n'est pas une affirmation de déficit sur un groupe. C'est que la compréhension conceptuelle exprimée dans une prose plus faible est systématiquement sous-notée, dans chaque méthode testée. Cela s'applique aux rédacteurs pressés, aux rédacteurs de langue seconde et à quiconque dont le registre diffère de celui de l'examinateur.

## À faire cette semaine

**1.** Prenez un devoir et écrivez une phrase énonçant ce que la langue y fait.

**2.** Réécrivez les consignes pour dire quel soutien est autorisé et ce que les étudiants doivent produire de façon indépendante.

**3.** Testez une traduction et une explication terminologique dans les langues que vos étudiants utilisent réellement, et lisez la sortie pour les détails inventés et le sens perdu.

**4.** Ajoutez une vérification qui consigne le sens ou la décision propre à l'étudiant, par exemple une note de deux phrases sur un changement qu'il a accepté ou refusé.

**5.** Si votre grille note la qualité de l'écriture, séparez ce critère du critère conceptuel et relisez deux copies de chaque avec cette séparation en tête.

## Où aller ensuite

[[multilingual-learning]] est la page de concept pour la langue, le translanguaging et l'évaluation dans un enseignement médié par l'IA, et [[assessment-validity|la validité de l'évaluation]] est le standard pour savoir si une note soutient l'inférence que vous faites. [[differential-effects-across-learner-groups]] couvre la façon de chercher des schémas par sous-groupe plutôt que de les supposer.

Pour le cas de l'enseignement de l'écriture où la langue est le construit, voir [[writing-instruction-ai-best-practices|les bonnes pratiques pour l'enseignement de l'écriture]]. Pour savoir si la notation automatisée peut être fiable dans votre contexte, voir [[ai-grading-fairness-reliability|la notation par IA]] et [[checking-whether-educational-ai-works|vérifier si une IA éducative fonctionne]].
