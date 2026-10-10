---
connected_resources: [drawsplat]
title: "La visualisation"
type: concept
technology: [ai-technologies, learning-analytics, multimodal, visualization]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-10-10T03:41:12-04:00"
translation_of: concepts/visualization
source_updated: "2026-09-30T09:53:03-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La visualisation (Visualization)** — l'usage de visualisations de données, d'infographies, de tableaux de bord, de graphiques, de diagrammes et d'autres représentations graphiques pour rendre l'information compréhensible en vue de l'apprentissage et de l'analyse. Dans l'ensemble de l'éducation, la visualisation est de plus en plus à la fois générée par l'IA (texte-image, analyse de diapositives et de graphiques [[multimodal|multimodale]]) et employée comme l'interface par laquelle les apprenants, les enseignants et les systèmes analytiques raisonnent sur des données partagées.

## Questions à examiner

- Un graphique ou un tableau de bord peut rendre les données claires — mais voir simplement une visualisation est-il la même chose que la comprendre ? Les [[research-methods-aied|recherches]] de la page suggèrent que la manière dont on interagit avec une visualisation compte plus que le graphique lui-même. Rappelez-vous un tableau de bord ou un graphique que vous avez regardé sans réellement en apprendre quelque chose. Que manquait-il au simple affichage ?
- Les tableaux de bord d'apprentissage conventionnels suivent un modèle de type « montrer les données, espérer l'insight ». Le constat présenté ici est que les apprenants qui répondent à des questions sur leurs données *avant* de voir les métriques réfléchissent et se calibrent mieux que ceux qui regardent passivement des graphiques. Pourquoi être contraint de prédire d'abord pourrait-il changer ce que l'on retire de la vue des données réelles ?
- L'IA peut aujourd'hui générer des visualisations exactes de contenus spécialisés de [[stem-education|STM]] — une étude a élevé l'exactitude sur le domaine de 12% à 78% en affinant un modèle texte-image sur des concepts nucléaires. Mais la page constate aussi qu'aucun modèle n'est uniformément compétent. Où feriez-vous confiance à un visuel généré par l'IA, et où insisteriez-vous pour le confronter à un expert humain ?
- Les participants à une étude ont trouvé les bandes dessinées de données générées par l'IA plus engageantes et plus compréhensibles, mais beaucoup ont aussi signalé le risque de désinformation et la surcharge d'information. Comment pesez-vous l'attrait d'un visuel IA convaincant face à son potentiel à tromper — et que vérifieriez-vous avant de lui faire confiance ou de l'utiliser ?
- La page avertit que la *confiance* d'un modèle n'est pas sa *fiabilité* : les systèmes peuvent diverger fortement sur les jugements de gravité tout en réussissant les construits de base. Si vous vous appuyiez sur un outil d'IA pour évaluer des diapositives, des dissertations ou des données, comment découvrirez-vous les endroits où sa confiance dissimule une erreur sérieuse ?
- Une étude a montré que les étudiants portaient l'essentiel de leur regard sur le code malgré des étayages visuels élaborés — les aides visuelles ne captaient simplement pas l'attention de chacun. Qu'est-ce que cela suggère quant à l'hypothèse qu'un beau diagramme ou un beau tableau de bord aidera automatiquement tous les apprenants à s'engager ? Quoi d'autre que les visuels façonne la manière dont les gens utilisent réellement un outil ?

## Introduction

La visualisation est l'usage d'une représentation graphique — tableaux de bord, graphiques, diagrammes, infographies et affichages multimodaux — pour rendre intelligibles l'apprentissage et les données d'apprentissage. Son rôle éducatif le plus établi est le tableau de bord d'[[learning-analytics|analytiques de l'apprentissage]], où le modèle dominant *montrer les données et espérer l'insight* a cédé la place à des conceptions interactives : les données probantes indiquent que la manière dont les apprenants interagissent avec une représentation compte plus que le fait qu'ils la voient, et que les invites d'auto-élicitation et les [[pedagogical-agent|agents pédagogiques]] améliorent le calibrage plus que ne le font les métriques passives. La même question — l'affichage provoque-t-il la pensée ou s'y substitue-t-il ? — relie la visualisation aux [[desirable-difficulties|difficultés désirables]] et à la [[metacognition|métacognition]].

## La visualisation comme interface d'apprentissage

Le rôle le plus établi de la visualisation en éducation est le tableau de bord d'analytiques de l'apprentissage. Les tableaux de bord d'analytiques de l'apprentissage (LAD) conventionnels opèrent sur un modèle « montrer les données → espérer l'insight », présentant des métriques comportementales dans des graphiques que les apprenants regardent passivement. Les recherches sur les [[interactive-learning-dashboards-engagement|tableaux de bord d'apprentissage interactifs]] mettent au défi ce paradigme : lorsqu'un tableau de bord ajoute un [[pedagogical-agent|agent pédagogique]] propulsé par un [[llm|LLM]] et une auto-évaluation interactive du jugement d'apprentissage, la condition d'« élicitation » — où les apprenants répondent à des questions sur leurs données avant de voir les métriques — a produit davantage de réflexion et un calibrage de la maîtrise plus exact que ceux d'un tableau de bord passif ou d'un agent « disant ». La leçon est que la manière dont les apprenants interagissent avec les visualisations compte plus que le simple fait de les voir. Cela se relie aux [[learning-analytics|analytiques de l'apprentissage]] et à l'[[self-regulated-learning|apprentissage autorégulé]], où la rétroaction visuelle soutient le calibrage du jugement [[metacognition|métacognitif]] plutôt que le simple affichage d'informations.

Les tableaux de bord tournés vers les [[teacher-role|enseignants]] ajoutent un ensemble distinct de leçons de conception. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] ont constaté que les enseignants préféraient systématiquement des visualisations plus simples et plus traditionnelles (diagrammes en barres, diagrammes circulaires, légendes), même lorsque des conceptions plus complexes (par exemple les cartes de chaleur) produisaient des insights plus détaillés — la préférence visuelle ne s'alignait pas toujours sur l'informativité, faisant écho aux débats sur la lisibilité comparée des diagrammes circulaires. La littératie en visualisation (VL) ne déterminait pas les préférences de conception, mais les enseignants à VL plus élevée produisaient des interprétations plus profondes et plus détaillées (par exemple, davantage d'entre eux identifiaient les tendances dans les données de séries temporelles), confirmant la VL comme [[research-methods-aied|facteur confondant]] pour évaluer la manière dont les enseignants lisent les conceptions analytiques. Pour la comparaison de groupes, les enseignants privilégiaient fortement la superposition à la juxtaposition, et préféraient les graphiques qui affichaient l'information complète (par exemple en incluant un groupe « étudiants qui n'ont pas regardé ») plutôt qu'un codage explicite des différences, bien que les enseignants plus jeunes classent plus haut les graphiques de différences. Ces constats plaident pour une conception de tableaux de bord qui équilibre les préférences déclarées des enseignants et la profondeur interprétative que permettent des codages plus complexes.

Les tableaux de bord fonctionnent aussi comme des représentations partagées qui jettent un pont entre le raisonnement humain et celui de l'IA. Le système CLARA utilise des artefacts générés par LLM — cartes conceptuelles et évaluations de collaboration à sept dimensions — comme terrain d'entente entre les utilisateurs du tableau de bord et les [[agentic-ai|agents IA]], les indexant dans des collections vectorielles distinctes afin que les deux parties raisonnent sur le même matériau visible et interrogeable. De même, l'Expert Cognition Dashboard recadre les analytiques comme une « intelligence de la cognition », transformant les comportements bruts des apprenants en structures cognitives interprétables aux niveaux individuel, de classe et d'expert jumeau IA. Ces systèmes positionnent la visualisation non comme une sortie, mais comme une infrastructure de raisonnement intégrée au sein d'une éducation native d'[[ai-technologies|IA]].

## Contenus visuels générés par l'IA et multimodaux

Un second volet majeur porte sur l'IA produisant directement des visualisations. [[nuclear-diffusion-text-to-image-learning-2026]] montre que des modèles texte-image adaptés au domaine peuvent générer des illustrations exactes de concepts STEM spécialisés : l'affinage de Stable Diffusion sur des images du domaine nucléaire a élevé l'exactitude sur le domaine de 12% à 78%, permettant aux enseignants de produire à la demande des visualisations correctes de composants de réacteur et de systèmes de sécurité. Cette capacité générative est puissante mais inégale. [[mllm-scientific-visualization-literacy]] compare par [[benchmark|référence]] six grands modèles de langue multimodaux à 485 participants humains sur la littératie en visualisation scientifique, ne trouvant aucune compétence uniforme : Gemini en source fermée dépassait la moyenne humaine sur plusieurs sous-ensembles, tandis que tous les modèles [[open-source|en source ouverte]] tombaient sous celle-ci, avec des faiblesses particulières dans l'estimation [[quantitative-research|quantitative]] fine et dans les visualisations fondées sur la texture ou sur l'intégration. L'IA devrait donc soutenir — et non se substituer à — la littératie en visualisation humaine, un constat aux implications directes pour la [[ai-literacy|littératie en IA]] et l'[[formative-assessment|évaluation formative]].

L'éthique et la fiabilité tempèrent l'enthousiasme pour les contenus visuels générés par l'IA. [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] a montré que les bandes dessinées de données assistées par l'[[generative-ai|IA générative]] amélioraient l'[[student-engagement|engagement]] et la compréhension par rapport aux visualisations conventionnelles, indépendamment de la littératie en visualisation préalable, alors même que les participants soulevaient des préoccupations quant au risque de désinformation et à l'attribution de l'[[academic-integrity|autorialité]], et que deux tiers signalaient des inconvénients tels que la surcharge d'information due à des mises en page trop chargées. La référence contrefactuelle CFES-P24 étend ce scrutin à l'[[cfes-p24-multimodal-slide-auditing-2026|audit de diapositives]], montrant que les LLM multimodaux peuvent reconnaître de manière fiable les construits de [[learning-design|conception pédagogique]] (opérations, principes, localisation des preuves), tout en divergeant fortement sur le jugement comparatif et le calibrage de la gravité — preuve que les scores composites dissimulent quelle capacité échoue et que la confiance n'est pas la fiabilité. Ensemble, ces travaux plaident pour une [[ai-ed-evaluation|évaluation en couches]] des visuels générés par l'IA plutôt que pour des notations holistiques.

## Outils de diapositives, de bandes dessinées et multi-vues en pratique

Des systèmes pratiques appliquent ces principes à l'échelle. AISSA combine la notation par rubrique fondée sur les LLM aux tableaux de bord d'analytiques de l'apprentissage pour fournir une rétroaction automatisée et itérative sur les diapositives de présentation des étudiants, traitant 90 présentations en 1–3 minutes chacune à un coût de quelques centimes par évaluation, avec une [[usability-research|utilisabilité]] perçue élevée — alors même que les étudiants appliquaient la rétroaction de manière sélective, écartant parfois des recommandations qui entraient en conflit avec leur conception visuelle. Dans l'[[cs-education|enseignement de l'informatique]], Flowcode associe un organigramme de structure du code à un chat orienté apprentissage pour aider les codeurs créatifs novices à comprendre et à étendre les exemples trouvés, où la visualisation et la [[desirable-difficulties|friction productive]] orientent l'usage de l'IA vers l'apprentissage plutôt que vers le contournement. Pourtant, les [[scaffolding|étayages]] visuels ne sont pas universellement efficaces : [[code-anchor-multi-view-visualization]] a montré que les étudiants consacraient environ 47% de leur temps de regard au code malgré les étayages visuels, sous l'effet de l'agentivité, de l'adéquation représentationnelle et de la légitimité perçue des vues métaphoriques. Ces constats sur l'[[student-experience|expérience des apprenants]] avertissent que la conception de la visualisation doit prendre en compte des facteurs [[affective-computing|affectifs]] et sociaux, et pas seulement des affordances cognitives.

## Implications

À travers les travaux examinés ici, la visualisation émerge comme un médium à double usage : l'IA génère et interprète de plus en plus les visualisations, tandis que les tableaux de bord et les visuels interactifs servent de surface partagée pour la construction de sens humain-IA. La génération texte-image et l'analyse multimodale étendent la portée de la visualisation aux contenus STEM spécialisés et à la [[ai-feedback-quality|rétroaction automatisée]], mais la compétence inégale des modèles, les échecs de calibrage de la gravité et les préoccupations [[ethics|éthiques]] quant à la désinformation et à l'autorialité exigent une vérification minutieuse et en couches. Pour les concepteurs et les éducateurs, la conclusion la plus forte est que l'interactivité et l'engagement — éliciter le raisonnement de l'apprenant sur les données visuelles, laisser les utilisateurs contrôler l'effort cognitif, et traiter les visuels produits par l'IA comme une infrastructure partagée plutôt que comme des points d'arrivée — importent davantage que la fidélité du graphique lui-même.

## Concepts liés

- [[learning-analytics]]
- [[multimodal]]
- [[generative-ai]]
- [[ai-technologies]]
- [[ai-literacy]]
- [[storytelling-in-education]]
- [[learning-design]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — la représentation spatiale et tridimensionnelle

## Articles liés

- [[interactive-learning-dashboards-engagement]] — Rethinking learning visualizations as engagement tools via pedagogical agents
- [[mllm-scientific-visualization-literacy]] — Benchmarking multimodal LLMs for scientific visualization literacy
- [[nuclear-diffusion-text-to-image-learning-2026]] — Domain-adapted text-to-image models for nuclear concept visualization
- [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] — Effectiveness, benefits, and ethics of AI-assisted data comics
- [[cfes-p24-multimodal-slide-auditing-2026]] — Counterfactual benchmark for multimodal slide auditing
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
