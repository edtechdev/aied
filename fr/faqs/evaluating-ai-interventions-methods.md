---
title: "Quelles mesures et méthodes de recherche un enseignant peut-il utiliser pour évaluer les interventions liées à l'IA ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-09-22T19:10:56-04:00"
weight: 55
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/evaluating-ai-interventions-methods
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Quelles mesures et méthodes de recherche un enseignant peut-il utiliser pour évaluer les interventions liées à l'IA ?

**Faites correspondre la méthode à la conclusion revendiquée.** Si vous voulez savoir si les étudiants ont *aimé* une activité d'IA, une enquête peut aider. Si vous voulez savoir s'ils ont *appris*, utilisez des mesures de performance. Une enquête est une [[self-report-measures|mesure auto-déclarée]] : c'est le bon instrument pour les attitudes et le mauvais pour l'apprentissage, pour les raisons rassemblées sur cette page. Si vous voulez savoir si l'IA a *causé* une amélioration, il vous faut une condition de comparaison crédible et, de préférence, une répartition aléatoire.

## Options de méthode

La page [[research-methods-aied|Méthodes de recherche en IAED]] distingue plusieurs options utiles :

- **Les expériences randomisées** offrent l'inférence causale la plus solide.
- **Les plans quasi expérimentaux** avant/après ou avec groupes appariés sont souvent plus réalisables dans des classes intactes, mais ils étayent des affirmations causales plus faibles.
- **Les entretiens, groupes de discussion, observations et analyses d'artefacts [[qualitative-research|qualitatifs]]** révèlent des mécanismes et des expériences inattendues.
- **L'analyse qualitative assistée par IA** peut réorganiser en quelques minutes des corpus d'entretiens ou d'observations, de sorte que la [[chain-behind-claim-warrantability-2026|justifiabilité]] compte autant que l'exactitude ou la divulgation : consignez les réorganisations documentées qui permettent à un lecteur d'inspecter, de contester et de réviser le chemin qui mène des données à la conclusion.
- **Les [[mixed-methods-research|méthodes mixtes]]** combinent des preuves de résultats avec des explications des raisons pour lesquelles les effets se sont produits.
- **La [[design-based-research|recherche fondée sur la conception]]** est utile lorsque des enseignants développent et affinent une intervention de manière itérative dans un cours authentique.

Quel que soit le canal utilisé, trois conditions seulement rendent une affirmation causale interprétable : un **traitement décrit avec précision**, une **condition de comparaison bien définie** et une **mesure valide d'un apprentissage durable**. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] examinent 19 comparaisons « ChatGPT en éducation » exactement selon ces critères et constatent que 4 seulement (21%) satisfont aux trois : 74% avaient un traitement bien défini, 42% un groupe témoin bien défini et 53% un résultat qui pouvait être qualifié d'apprentissage. Un [[generative-ai|outil polyvalent]] introduit en même temps que de nouvelles activités, de la rétroaction ou une conception d'interface confond le médium avec la méthode, si bien qu'un résultat significatif ne peut pas être attribué à l'IA.

## Une évaluation de classe gérable

Pour une évaluation de classe gérable, un minimum utile consiste en une **mesure de référence, l'intervention, une mesure immédiate après l'intervention et une mesure ultérieure sans assistance**. Dans la mesure du possible, incluez une condition de comparaison, comme la pratique existante, l'absence d'IA, un accès libre à l'IA face à une IA étayée, ou deux conceptions alternatives. Mesurez séparément la performance assistée et l'apprentissage indépendant.

La synthèse [[ai-ed-evaluation|Évaluation en IAED]] recommande des résultats tels que le gain d'apprentissage sans assistance, la rétention différée, le transfert vers une nouvelle tâche, la qualité du raisonnement, les [[misconceptions|conceptions erronées]], l'adoption de la rétroaction et la performance des sous-groupes. L'engagement, la satisfaction, les journaux d'usage de l'IA, le sentiment d'efficacité personnelle et l'[[technology-acceptance-model|utilité perçue]] peuvent être de précieuses mesures secondaires, mais ne doivent pas être traités comme des substituts de l'apprentissage. La charge de travail des enseignants et le temps gagné sont aussi des résultats de mise en œuvre légitimes.

Deux mises en garde s'appliquent à la lecture des résultats. Premièrement, un effet moyen tiré de la littérature guide faiblement une classe particulière : l'[[oneill-presumed-effective-meta-analysis-2026|audit d'O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|méta-analyses]] à fort impact a constaté qu'aucune ne fournissait une base valide pour ses affirmations. Les résultats regroupés de [[learning-gains|« réussite scolaire »]] mélangeaient les scores aux tests, la motivation, le [[self-efficacy|sentiment d'efficacité personnelle]] et les attitudes en une seule estimation ; l'hétérogénéité rapportée était extrême (l'I² allait de 77.2% à 94.4% dans les 13 analyses qui le rapportaient, et 12 de ces 13 dépassaient 80%), les 14 évaluations du [[limitations-in-aied-research|biais de publication]] étaient invalides, 61% des études primaires vérifiées au hasard présentaient des problèmes de validité, et les statistiques qui auraient montré à quel point les résultats individuels se dispersaient réellement étaient largement absentes (quatre analyses seulement rapportaient la variance entre études et deux seulement un intervalle de prédiction, tous deux incluant zéro). Deuxièmement, un score commode peut mesurer le mauvais construit : dans [[zhang-platform-scores-miss-ai-teaching-agents-2026|une évaluation de huit agents d'enseignement par IA]], l'agent classé troisième selon le score propre à la plateforme arrivait dernier sur une grille validée par des experts, parce que les scores de la plateforme indexaient la performance des étudiants pendant l'interaction plutôt que la qualité de l'enseignement de l'agent. Traitez toute métrique de tableau de bord comme une hypothèse à valider par une mesure liée à la capacité que vous cherchez à développer.

Pour ce que les preuves actuelles montrent et ne montrent pas, et pour ce qui reste peu documenté, voir [[does-ai-help-students-learn]] et [[research-gaps-aied]].