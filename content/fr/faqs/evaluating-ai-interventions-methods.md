---
title: "Quelles mesures et méthodes de recherche un enseignant peut-il utiliser pour évaluer les interventions liées à l'IA ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 55
audience: [instructors, researchers, faculty developers]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
source_updated: "2026-10-28T11:47:13-04:00"
translation_of: faqs/evaluating-ai-interventions-methods
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Vous avez mené le pilote dans deux groupes, recueilli un sondage de fin d'unité, et vous avez une réunion de faculté dans trois semaines où quelqu'un demandera si cela a fonctionné. Ou bien un évaluateur vous a demandé quelle était votre condition de comparaison, et l'autre groupe a fait quelque chose de différent. Dans un cas comme dans l'autre : qu'est-ce qui compterait comme preuve ici ?

Adaptez la méthode à l'affirmation. Un sondage vous dit si les étudiants ont aimé l'activité. Savoir s'ils ont appris exige une mesure de performance, et savoir si l'IA est à l'origine du gain exige une condition de comparaison.

## La version courte

**1.** Écrivez l'affirmation en une phrase, en nommant le résultat visé. « Les étudiants qui ont utilisé le tuteur ont obtenu de meilleurs résultats à l'examen sans assistance » est testable.

**2.** Réalisez une mesure de base, l'intervention, une post-mesure immédiate et une mesure ultérieure prise sans IA.

**3.** Décrivez la condition de comparaison aussi soigneusement que le traitement, même lorsqu'il s'agit de votre pratique habituelle.

**4.** Mesurez séparément la performance assistée et l'apprentissage autonome, et traitez toute moyenne publiée comme une hypothèse sur votre classe.

## Choisissez la méthode à laquelle votre question peut survivre

La page [[research-methods-aied|Méthodes de recherche en IAED]] expose ce que chaque option apporte. Les expériences randomisées offrent l'inférence causale la plus solide. Les plans quasi expérimentaux pré/post ou à groupes appariés conviennent à des classes intactes et étayent des affirmations plus faibles. Les entretiens [[qualitative-research|qualitatifs]], les groupes de discussion, les observations et l'analyse d'artefacts révèlent des mécanismes et une expérience imprévue. Les [[mixed-methods-research|méthodes mixtes]] associent des preuves de résultats à une explication. La [[design-based-research|recherche fondée sur la conception]] convient à un enseignant qui affine une intervention au fil des itérations.

L'analyse qualitative assistée par l'IA mérite sa place dans cette liste, avec une condition. Elle réorganise en quelques minutes un corpus d'entretiens, de sorte que la [[chain-behind-claim-warrantability-2026|justifiabilité]] compte autant que l'exactitude : consignez les réorganisations documentées qui permettent à un lecteur d'inspecter, de contester et de réviser le chemin qui mène des données à l'affirmation.

Un sondage est une [[self-report-measures|mesure d'auto-déclaration]] : juste pour les attitudes, faux pour l'apprentissage.

## Donnez un nom à la condition de comparaison

Trois conditions rendent une affirmation causale interprétable : un traitement décrit avec précision, une condition de comparaison bien définie et une mesure valide d'un apprentissage durable. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] ont audité 19 comparaisons portant sur ChatGPT en éducation à l'aune de ces critères. Quatre (21%) satisfaisaient les trois. Le traitement était bien défini dans 74% des cas, le groupe témoin dans 42%, et le résultat pouvait être qualifié d'apprentissage dans 53%.

Le mode de défaillance est facile à reproduire. Un [[generative-ai|outil polyvalent]] introduit en même temps que de nouvelles activités, un nouveau retour d'information ou une interface repensée confond le support avec la méthode, et le résultat significatif revient à la refonte.

## Mesurez les résultats qui vous importent réellement

La synthèse [[ai-ed-evaluation|Évaluation en IA éducative]] recommande le gain d'apprentissage sans assistance, la rétention différée, le transfert à une nouvelle tâche, la qualité du raisonnement, les [[misconceptions|conceptions erronées]], l'appropriation du retour d'information et la performance des sous-groupes. L'engagement, la satisfaction, les journaux d'utilisation de l'IA, le [[self-efficacy|sentiment d'efficacité personnelle]] et l'[[technology-acceptance-model|utilité perçue]] sont des mesures secondaires raisonnables et de piètres substituts à l'apprentissage. La charge de travail et les gains de temps relèvent des résultats de mise en œuvre, ce qui est une autre question.

Le minimum à l'échelle de la classe comprend une mesure de base, l'intervention, une post-mesure immédiate et une mesure ultérieure sans assistance. Ajoutez une condition de comparaison lorsque vous le pouvez : la pratique habituelle, l'absence d'IA, une IA sans encadrement opposée à une IA étayée, ou deux conceptions alternatives. Notez la performance assistée et la performance non assistée sur des instruments distincts, car une seule grille d'évaluation les mélangera.

## Lisez tout chiffre comme une hypothèse

Un effet moyen tiré de la littérature guide mal une classe particulière. [[oneill-presumed-effective-meta-analysis-2026|L'audit d'O'Neill (2026)]] portant sur 14 [[meta-analysis-systematic-review|méta-analyses]] à fort impact a constaté qu'aucune ne fournissait une base valide pour ses affirmations. Les [[learning-gains|« résultats scolaires »]] regroupés mêlaient notes d'examen, motivation, [[self-efficacy|sentiment d'efficacité personnelle]] et attitudes en une seule estimation. L'hétérogénéité était extrême : I² allait de 77.2% à 94.4% dans les 13 analyses qui le rapportaient, et 12 d'entre elles se situaient au-dessus de 80%. Les 14 analyses évaluaient le [[limitations-in-aied-research|biais de publication]] de manière invalide, et 61% des études primaires vérifiées au hasard présentaient des problèmes de validité. Quatre analyses rapportaient la variance inter-études, deux rapportaient un intervalle de prédiction, et les deux intervalles incluaient zéro.

Un score commode peut mesurer le mauvais construit. Dans [[zhang-platform-scores-miss-ai-teaching-agents-2026|une évaluation de huit agents d'enseignement par IA]], l'agent classé troisième selon le score propre à la plateforme arrivait dernier à une grille validée par des experts, parce que les scores de la plateforme indexaient la performance des étudiants pendant l'interaction. Traitez toute métrique de tableau de bord comme une hypothèse.

## Ce que les enseignants comprennent mal

Un sondage de satisfaction mesure l'apprentissage. Il mesure la satisfaction, que la synthèse Évaluation en IA éducative classe comme mesure secondaire à côté des résultats d'apprentissage.

Un gain pré/post montre que l'intervention a fonctionné. Il montre que les scores ont augmenté. Savoir si la mesure comptait comme apprentissage est une question distincte, et l'audit a trouvé un résultat d'apprentissage admissible dans 53% des comparaisons qu'il a examinées.

Les tailles d'effet publiées se transfèrent à ma classe. Les 14 méta-analyses d'O'Neill ne pouvaient pas étayer les affirmations construites sur elles, et les deux intervalles de prédiction rapportés incluaient zéro.

Les analyses de plateforme mesurent la qualité de l'enseignement. L'agent classé troisième par Zhang était dernier à une grille d'experts.

## Ce qui vous reviendra dessus

**« Nous avons déjà les évaluations de fin de cours. »** Elles mesurent le cours, et elles ont lieu après le trimestre où il vous fallait la réponse.

**« Un groupe de comparaison est impossible dans un cours intact. »** Comparez avec la version de l'an dernier du même devoir, ou avec un second groupe, et décrivez la différence honnêtement. Les plans quasi expérimentaux sont plus faibles, et restent informatifs quand l'alternative est une affirmation sans comparaison.

**« La taille d'effet de la méta-analyse est grande. »** Sur quel résultat, dans la classe de qui ? Les deux intervalles de prédiction trouvés par O'Neill incluaient zéro.

**« Notre tableau de bord montre un fort engagement. »** L'engagement est une mesure secondaire dans la liste de l'Évaluation en IA éducative. Placez la mesure d'apprentissage sans assistance à côté.

## Quoi faire cette semaine

**1.** Écrivez votre affirmation en une phrase et soulignez le résultat visé.

**2.** Ajoutez la mesure ultérieure sans assistance au calendrier, après l'intervention et non la même semaine.

**3.** Rédigez un paragraphe décrivant la condition de comparaison, avec le même niveau de détail que le traitement.

**4.** Récupérez les chiffres de plateforme dont vous disposez déjà et marquez chacun comme résultat d'artefact ou résultat d'apprentissage.

**5.** Demandez à un collègue de lire le plan et de dire ce qui d'autre a changé pendant le trimestre.

## Où aller ensuite

[[does-ai-help-students-learn|L'IA aide-t-elle les étudiants à apprendre ?]] résume ce que montrent les preuves de résultats, et [[research-gaps-aied|Lacunes de recherche en IAED]] couvre les endroits où elles s'amenuisent. [[checking-whether-educational-ai-works|Comment savoir si une IA éducative fonctionne correctement ?]] est la version de cette question destinée à ceux qui construisent ou achètent un système.
