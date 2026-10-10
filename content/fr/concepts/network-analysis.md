---
title: "Analyse de réseaux"
created: "2026-08-22T01:40:00-04:00"
updated: "2026-10-10T04:00:01-04:00"
type: concept
technology: [knowledge-graph, learning-analytics]
confidence: high
methods: [network-analysis, research-methods-aied]
translation_of: concepts/network-analysis
source_updated: "2026-10-04T10:50:04-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Analyse de réseaux (Network analysis)** — la famille de [[research-methods-aied|méthodes de recherche]] qui modélisent des entités (personnes, concepts, actions ou codes) comme des **nœuds** reliés par des **arêtes** représentant des relations ou des transitions, puis analysent la structure et la dynamique du réseau résultant pour révéler des régularités invisibles aux décomptes de fréquences ou aux comparaisons par paires. Dans la recherche sur l'IA en éducation, l'analyse de réseaux sert à cartographier les régularités d'interaction entre apprenants et outils d'IA, à modéliser la manière dont des éléments de connaissance ou de discours cooccurrent, et à retracer des séquences temporelles de comportement. Elle comprend des variantes distinctes — l'**analyse de réseaux épistémiques** (ENA, modélisant la cooccurrence de codes/construits), l'**analyse de réseaux sociaux** (SNA, modélisant les relations entre personnes), et l'**analyse des réseaux de transition** (TNA, modélisant les séquences temporelles d'états) — chacune opérationnalisant différemment « l'apprentissage comme connexion ». ([[tracing-genai-literacy-interaction-patterns]]) ([[penny-transition-network-analysis-efl-writing-2026]]) ([[misiejuk-cognitive-offloading-prompting-2026]])

## Questions à examiner

- Quand vous entendez « analyse de réseaux » en éducation, quelles images vous viennent à l'esprit — des cartes d'amitié entre étudiants, des liens entre idées, ou autre chose ? En quoi diffèrent-elles du simple fait de compter combien de fois les choses se produisent ?
- Supposez que vous vouliez savoir si les étudiants s'engagent réellement avec la rétroaction d'un outil d'écriture assisté par IA, ou s'ils se contentent d'obtenir des réponses. Pourquoi une métrique du type « combien de fois ont-ils cliqué » pourrait-elle manquer l'histoire qu'une séquence d'actions (par exemple, une boucle de révision contre une boucle de conversation) révélerait ?
- La page distingue l'analyse de réseaux épistémiques, l'analyse de réseaux sociaux et l'analyse des réseaux de transition. Sans connaître les détails, pouvez-vous deviner quelle variante vous utiliseriez pour étudier (a) la manière dont les gens collaborent, (b) quelles idées cooccurrent dans le raisonnement des étudiants, et (c) la manière dont les apprenants se déplacent entre des états au fil du temps ?
- Un chercheur constate que des apprenants de littératie élevée et faible utilisent le même outil d'IA mais produisent des structures de réseaux de raisonnement très différentes. Qu'est-ce que cela vous apprend sur l'évaluation des outils d'IA par un score moyen unique ?
- Des métriques de réseau comme la « densité » et la « centralité » décrivent si l'interaction est aléatoire ou organisée autour de pivots. Quand un réseau organisé centré sur un apprenant serait-il le signe d'une bonne collaboration — et quand le signe d'un problème ?

## Introduction

Les méthodes d'analyse de réseaux partagent un principe central : c'est la structure des connexions — et pas seulement leur présence ou leur fréquence — qui porte du sens. Plutôt que de demander « quelle quantité de X s'est produite », elles demandent « comment les éléments sont-ils connectés, et que révèle cette connectivité sur la [[metacognition|cognition]], l'[[collaborative-learning|collaboration]] ou les processus d'apprentissage ? » Cela les rend particulièrement précieuses dans l'IA en éducation, où les chercheurs veulent de plus en plus comprendre le *processus* de l'interaction apprenant–[[student-ai-interaction|IA]] (la manière dont les apprenants naviguent la [[feedback|rétroaction]], le dialogue et la révision) plutôt que le seul produit (scores finaux, taux d'erreurs).

## Variantes utilisées dans le corpus de la base de connaissances

- **L'analyse de réseaux épistémiques (ENA)** — la variante la plus courante dans la base de connaissances (abordée dans environ 24 articles). L'ENA modélise la cooccurrence de codes ou de construits au sein de segments de discours ou d'activité, produisant des réseaux qui montrent quelles idées, compétences ou actions épistémiques tendent à être connectées dans un contexte donné. Elle sert à comparer la manière dont différents groupes (par exemple, des apprenants de littératie élevée contre faible, des collaborateurs humains contre IA) structurent leur cognition. ([[tracing-genai-literacy-interaction-patterns]]) ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **L'analyse de réseaux sociaux (SNA)** — modélise les relations entre personnes (apprenants, enseignants, agents) pour révéler les structures de collaboration, l'influence, la centralité et la communauté. Utile pour étudier l'apprentissage [[collaborative-learning|collaboratif]] et par les pairs. ([[misiejuk-cognitive-offloading-prompting-2026]])
- **L'analyse des réseaux de transition (TNA)** — modélise des séquences temporelles d'états discrets (par exemple, les actions d'un apprenant dans une séance de tutorat) comme un réseau orienté, en quantifiant la probabilité de passer d'un état à l'autre. La TNA sert à révéler les boucles comportementales, les trajectoires et les dynamiques d'appropriation dans l'interaction apprenant–IA. ([[penny-transition-network-analysis-efl-writing-2026]])

Celles-ci se distinguent d'un **[[knowledge-graph|graphe de connaissances]]**, qui est une structure de données pour représenter et raisonner sur des faits (un entrepôt d'ontologie/de triplés), et non une méthode analytique pour étudier un processus ou une structure de relations.

## L'analyse de réseaux dans la recherche sur l'IA en éducation

Les méthodes de réseau sont utilisées à travers le corpus de données probantes de la base de connaissances pour répondre à des questions que les métriques agrégées ne peuvent pas traiter :

- **Ouvrir la « boîte noire » de l'interaction apprenant–IA.** La TNA révèle le *processus* — les boucles et trajectoires comportementales que les apprenants empruntent lorsqu'ils utilisent des outils d'IA (par exemple, une « boucle de révision » contre une « boucle de conversation » dans l'[[writing-education|écriture]] étayée par un [[conversational-ai|agent conversationnel]]) plutôt que la seule production finale. ([[penny-transition-network-analysis-efl-writing-2026]])
- **Comparer la structuration cognitive entre groupes.** L'ENA montre comment différents groupes connectent différemment les construits — par exemple, comment la [[metacognition|métacognition]] cooccurrent avec la délégation contre le raisonnement humain dans la collaboration humain–IA, révélant différents modes de collaboration. ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Retracer les signatures de littératie en IA et d'interaction.** L'ENA appliquée aux journaux d'interaction identifie des régularités distinctes d'usage des [[llm|grands modèles de langue]] (affinage stratégique itératif contre commandes linéaires), distinguant la [[ai-literacy|compétence]] et le développement de l'apprenant. ([[tracing-genai-literacy-interaction-patterns]])
- **Analyser le discours et le cadrage.** L'ENA est appliquée à des données [[qualitative-research|qualitatives]] et [[multimodal|multimodales]] (par exemple, les cadrages de ChatGPT sur YouTube dans l'éducation) pour révéler la structure du discours public ou disciplinaire. ([[youtube-frames-chatgpt-education]])
- **Compléter l'auto-déclaration et les métriques de produit.** Parce que les méthodes de réseau utilisent des données comportementales observées, elles peuvent exposer les écarts entre ce que les apprenants affirment et ce qu'ils font réellement — un constat récurrent dans la littérature de la base de connaissances sur l'appropriation de la rétroaction.

- **La structure de graphe comme quantité de validation, et non comme résumé descriptif.** [[synthetic-educational-data-structural-fidelity-2026|Inoue et Yasutake (2026)]] suivent β0 — le nombre de composantes connexes d'un graphe de proximité hebdomadaire entre apprenants à un seuil euclidien fixe — pour tester si des cohortes synthétiques reproduisent les cohortes réelles, le préférant parce qu'il est fixé par le graphe seul, ne nécessite ni optimisation ni germe aléatoire contrairement à la maximisation de la modularité, et reste défini lorsqu'un septième à un tiers des apprenants se retrouvent seuls dans une composante.

## Considérations méthodologiques

- **Le codage est le fondement.** Toutes les variantes de réseau dépendent d'un codage fiable des données brutes (énoncés, événements, relations) en nœuds/codes discrets ; le codage automatisé fondé sur les grands modèles de langue est de plus en plus utilisé, mais exige une validation humaine (par exemple, un κ de Fleiss de 0,70 à 0,71 dans les études de TNA). ([[penny-transition-network-analysis-efl-writing-2026]])
- **Traiter l'accord entre codeurs comme un contrôle continu, et non comme une statistique ponctuelle.** [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] ont codé 304 énoncés de repérage (noticing) à un α de Krippendorff de ,803 et ont surveillé l'accord tout au long de l'étude, recodant les énoncés contestés chaque fois que le κ regroupé tombait sous leur seuil de recalibration de ,85 (aux Cas 18 et 27) et n'ayant plus besoin d'aucune recalibration aux Cas 36 à 51. La séquence est le point central : une fiabilité mesurée seulement à la fin aurait laissé les premiers modèles de transition reposer sur une dérive des codeurs, puisque ces régularités de transition hebdomadaires constituaient le constat de l'étude.
- **Les métriques au niveau du réseau résument la structure.** La densité, la réciprocité, la centralisation et les forces entrante/sortante décrivent si l'interaction est aléatoire ou organisée autour de pivots « gravitationnels », et à quel point l'échange est réciproque.
- **La comparaison statistique est nécessaire pour les différences entre groupes.** Des tests du khi-deux ou des tests par permutation sont utilisés pour établir que les différences de réseau observées (par exemple, selon la compétence) ne sont pas dues au hasard. [[caeai-response-length-ai-ethics-education-2026|Shao et al. (2026)]] montrent que l'hypothèse nulle doit être construite pour correspondre au texte. Dans une discussion de cas avec vingt étudiants diplômés de disciplines mixtes de l'[[higher-ed|enseignement supérieur]], la part de termes partagés de taille 3 est passée de 5,2 % à 8,0 % tandis que les jetons de contenu tombaient à environ 0,65 fois leur niveau d'après lecture. Un test de permutation sur l'ensemble du sac de mots aurait qualifié cette hausse de significative ; leur test de permutation des jetons conditionné par la longueur ne l'a pas fait (Q6 p = ,62, Q7 p = ,15).
- **Valider l'instrument avant de lire son réseau.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai et Alshahri (2026)]] ont construit l'échelle AI-STEM-MLCS à 45 items par la voie complète de développement d'échelle — rapports de validité de contenu par des experts, analyse factorielle exploratoire puis confirmatoire (CFI = 0,983, RMSEA = 0,019), ω de McDonald de 0,888 à 0,905, et coefficients de corrélation intraclasse test-retest à deux semaines de 0,751 à 0,900 — avant de modéliser les quatre dimensions par analyse graphique exploratoire. Dériver une structure d'un réseau dont les nœuds sont des scores d'échelle non validés est précisément ce que cet ordre évite, et les auteurs désignent la validation propre au contexte saoudien comme la limite au transfert de la structure.
- **Interpréter avec prudence.** La granularité des nœuds (par exemple, un nœud « conversation » grossier) peut masquer l'intention ; la classification automatisée comporte une certaine ambiguïté ; et la structure de réseau transversale n'établit pas la causalité.
- **Des réseaux qui exposent ce qu'un agrégat masque.** [[genai-social-annotation-epistemic-network-analysis-2026|Pan et al. (2026)]] ont constaté que la classe annotant avec l'IA générative surpassait son groupe témoin et s'y engageait davantage, puis ont scindé la classe expérimentale par la performance médiane et ont montré que le gain n'était pas partagé : les groupes à haute performance initiaient 60,7 pour cent des demandes de rétroaction dans leurs annotations, contre 34,0 pour cent pour les groupes à faible performance, qui restaient dans une boucle autoréférentielle (séparation des groupes significative sur l'axe X de l'ENA, U = 25,00, p = 0,01). La leçon de conception est qu'un effet au niveau du groupe peut résumer deux structures d'interaction différentes — et les deux groupes étaient des classes intactes, si bien que la comparaison identifie la régularité sans l'attribuer causalement.

## Implications pour la recherche sur l'IA en éducation

1. **Préférer les méthodes de processus aux métriques centrées sur le seul produit.** Pour évaluer si les outils d'IA soutiennent l'apprentissage, modélisez la manière dont les apprenants s'engagent réellement (appropriation, dialogue, révision) avec des méthodes de séquence/réseau plutôt que de vous appuyer sur les seuls scores finaux.
2. **Utiliser l'ENA pour comparer la structuration cognitive.** Lorsqu'on demande comment différents apprenants ou modes (humain contre IA) structurent leur raisonnement, l'ENA fournit une comparaison directe et visuelle des réseaux de cooccurrence — une technique bien adaptée à la [[student-modeling|modélisation de l'apprenant]] de la manière dont les apprenants connectent les idées.
3. **Valider le codage automatisé.** Avec de grands jeux de données de journaux, la classification fondée sur les [[llm|grands modèles de langue]] est puissante, mais doit être confrontée au codage humain (rapporter l'accord inter-juges) avant d'interpréter la structure du réseau.
4. **Concevoir pour la différenciation.** L'analyse de réseaux révèle souvent que le *même* outil d'IA produit des régularités d'interaction différentes selon les sous-groupes d'apprenants — ce qui éclaire une conception adaptative plutôt qu'une évaluation uniforme.

## Validation par ENA du dialogue collaboratif simulé

- **L'ENA comme validation du dialogue simulé.** Fang (2026) applique l'analyse de réseaux épistémiques pour évaluer si des agents fondés sur des grands modèles de langue ajustés reproduisent la structure du véritable dialogue de résolution collaborative de [[problem-solving|problèmes]]. En comparant les vecteurs d'adjacence simulés au réseau empirique, il rapporte une distance ENA de 0,17 — dans le seuil du 95e centile de la distribution nulle, avec une valeur p de permutation de 0,65 — ce qui démontre la puissance de l'ENA comme contrôle [[quantitative-research|quantitatif]] de la fidélité des [[simulation|simulations]] génératives du discours, aux côtés d'autres applications de l'ENA/SNA/TNA dans la recherche en éducation.

## Concepts liés

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## Articles liés

- [[caeai-response-length-ai-ethics-education-2026]] — La longueur de la réponse, et non l'alignement lexical, pilote les statistiques de termes partagés dans les réseaux participant–morphème (Shao et al. 2026)

- [[penny-transition-network-analysis-efl-writing-2026]] — TNA des interactions apprenant–agent conversationnel dans l'écriture en anglais langue étrangère étayée
- [[tracing-genai-literacy-interaction-patterns]] — ENA des régularités d'interaction de littératie en IA générative
- [[hao-human-ai-collaborative-problem-solving-cognition]] — ENA de la résolution collaborative de problèmes humain–IA
- [[misiejuk-cognitive-offloading-prompting-2026]] — Le délestage cognitif et la sollicitation (SNA/méthodes de réseau)
- [[youtube-frames-chatgpt-education]] — ENA des cadrages de ChatGPT sur YouTube dans l'éducation
- [[agency-gap-ai-writing]] — L'écart d'autonomie dans l'écriture assistée par IA (ENA)
- [[synthetic-educational-data-structural-fidelity-2026]] — Ce que les métriques de fidélité manquent : un contrôle structurel des données éducatives synthétiques
