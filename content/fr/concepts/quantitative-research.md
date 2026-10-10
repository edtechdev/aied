---
title: Recherche quantitative
created: "2026-08-24T02:05:00-04:00"
updated: "2026-10-10T03:24:46-04:00"
type: concept
assessment: [educational-measurement]
research_method: [survey, experiment]
confidence: high
methods: [quantitative-research, research-methods-aied]
translation_of: concepts/quantitative-research
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Recherche quantitative** — la famille des méthodes empiriques qui recueillent et analysent des données *numériques* pour décrire des régularités, tester des relations et estimer des effets causaux. Dans l'[[ai-education|IA en éducation]], les méthodes quantitatives quantifient si et comment les outils d'IA affectent les [[learning-gains|résultats d'apprentissage]], l'[[student-engagement|engagement]], la [[motivation]] et l'[[self-efficacy]], et modélisent les mécanismes psychologiques et comportementaux de l'usage de l'IA. Elles fournissent l'ampleur, la précision et la puissance inférentielle causale que les [[qualitative-research|méthodes qualitatives]] échangent contre la profondeur et le contexte.

## Questions à examiner

- « Les étudiants qui utilisent un tuteur IA obtiennent de meilleurs scores » — avant de lire, s'agit-il d'une affirmation sur la causalité ou sur la corrélation, et quel élément de preuve unique convertirait l'une en l'autre ?
- Une enquête transversale peut tester un modèle médiationnel complexe sans jamais établir de causalité. Pourquoi deux variables pourraient-elles être corrélées dans une enquête même lorsque aucune des deux ne cause l'autre ? Pouvez-vous imaginer une manière d'être réellement induit en erreur par une telle corrélation en éducation ?
- Les instruments quantitatifs ne valent que ce qu'ils mesurent — et cette page note que des instruments peuvent mesurer le mauvais construit. Lorsque vous remplissez un questionnaire d'auto-déclaration sur la « confiance » ou l'« engagement », que pourrait-il capter à la place, et comment le découvririez-vous ?
- Un essai randomisé assigne aléatoirement des apprenants à des conditions pour estimer un effet causal. Qu'est-ce qui rend l'assignation aléatoire puissante, et quels problèmes pratiques et éthiques surgissent lorsque le « traitement » est un outil d'IA potentiellement utile que l'on refuse à certains étudiants ?
- Les conceptions longitudinales suivent les mêmes apprenants dans le temps — essentiel pour distinguer la performance gonflée par l'IA de l'apprentissage durable. Pourquoi un instantané unique de scores élevés ne révélerait-il pas si l'apprentissage a réellement eu lieu ?
- Le travail quantitatif fournit l'ampleur et la puissance causale ; le travail qualitatif fournit la profondeur et le sens. Avant de lire l'appariement, où pensez-vous que les nombres seuls vous ont le plus vraisemblablement induit en erreur sur une affirmation d'apprentissage, et quelle méthode ajouteriez-vous pour le vérifier ?

## Introduction

La recherche quantitative couvre les conceptions descriptives (mesurer la prévalence et les régularités), les conceptions corrélationnelles/observationnelles (tester des relations entre variables) et les conceptions expérimentales et quasi-expérimentales (estimer des effets causaux). Ce qui les unifie est la réduction systématique des observations à des nombres, analysés par la statistique, et la priorité accordée à la **fiabilité, la validité et la généralisabilité** — les préoccupations centrales de l'[[educational-measurement]].

## Les principales approches quantitatives

### L'enquête et la recherche corrélationnelle
Les enquêtes transversales mesurent les attitudes auto-déclarées, les perceptions, la motivation, l'[[self-efficacy]] et l'acceptation technologique, souvent modélisées par régression ou par modélisation par équations structurelles (SEM/PLS-SEM) pour tester des relations et des médiateurs hypothétiques. Celles-ci dominent le corpus de la base de connaissances, en particulier pour les questions d'acceptation, de motivation et de mécanismes psychologiques. [[acceptance-ai-english-tools-2026|L'acceptation des outils d'anglais assistés par l'IA]] s'appuie sur le [[technology-acceptance-model|TAM]] avec la SEM ; [[tian-genai-learning-adoption-pathways-2026|les trajectoires d'adoption de l'IA générative]] utilisent la PLS-SEM, la fsQCA et la cartographie importance-performance ; la [[teacher-education-ai-literacy-sdt-2026|littératie IA des enseignants]] utilise des enquêtes validées factoriellement fondées sur la [[self-determination-theory]].

- **Forces :** de grands échantillons ; une couverture large et peu coûteuse ; le test de modèles médiationnels complexes ; la faisabilité pour des attitudes difficiles à observer.
- **Limites :** les données transversales ne peuvent établir de causalité ; le biais d'auto-déclaration ; l'échantillonnage de commodité limite la généralisabilité ; les médiateurs sont inférés de la covariance, non de la manipulation. Voir [[self-report-measures]] pour le traitement côté instrument de ces limites.

### La recherche expérimentale et quasi-expérimentale
Les expériences assignent aléatoirement des apprenants à des conditions (par ex., tuteur IA contre tuteur humain, ou assisté par l'IA contre non assisté) pour estimer des effets causaux sur les résultats. Les **essais contrôlés randomisés ([[rct]])** constituent l'étalon-or pour la validité interne. [[access-not-enough-ai-tutoring-2026|Une étude de terrain randomisée sur le soutien humain associé au tutorat par IA]] et [[genai-can-harm-teaching-rct-2026|un essai randomisé sur l'IA générative dans l'enseignement]] utilisent l'assignation pour isoler des effets causaux. Les conceptions **quasi-expérimentales** (pré/post, groupes appariés sans randomisation) sont plus faisables dans des classes intactes mais plus faibles sur les affirmations causales.
 [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] adoptent à la place un croisement intra-sujet : chaque étudiant rencontre le même contenu de physique deux fois, une fois dans une leçon d'apprentissage actif en classe et une fois par le biais du propre tuteur IA du cours, avec des pré- et post-tests autour de chacune, si bien que chaque apprenant sert de propre témoin et que les différences interindividuelles s'annulent.

- **Forces :** l'inférence causale la plus forte ; une mesure nette des résultats ; le soutien à l'estimation des tailles d'effet et aux affirmations d'efficience.
- **Limites :** coûteuses et lentes ; des conditions artificielles réduisent la validité écologique ; des outils d'IA évoluant rapidement datent rapidement les expériences ; de petits échantillons sous-alimentent la détection d'effets ; des contraintes éthiques sur le retrait d'outils utiles.

### La recherche longitudinale
Les conceptions longitudinales suivent les mêmes apprenants dans le temps, captant le changement, la croissance et l'apprentissage durable que la mesure à un instant unique manque. [[ai-lms-middle-school-longitudinal|Une étude longitudinale sur un LMS]] suit des étudiants sur une année scolaire. Les conceptions longitudinales sont essentielles pour distinguer la performance gonflée par l'IA de l'[[genai-performance-vs-learning|apprentissage durable]].


Les comparaisons entre jeux de données ont besoin d'un point de travail fixe : un contrôle structurel de données éducatives synthétiques a constaté qu'analyser chaque jeu de données à son propre seuil inversait un contraste qui tenait à un point partagé, et que sa comparaison par substitut n'exigeait que les données synthétiques et des permutations d'elles-mêmes — un nul fondé sur les permutations plutôt qu'un seuil absolu ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).

### La quantification computationnelle et psychométrique
Les méthodes quantitatives incluent aussi la mesure directe des construits par des instruments — le domaine de l'[[educational-measurement]] et de l'[[item-response-theory]]. Le [[jin-glat-genai-literacy-assessment|GLAT]] de la base de connaissances est un instrument quantitatif de 20 items validé par la TRI ; les [[educational-measurement|instruments de mesure]] portant sur l'[[ai-literacy|littératie en IA]], l'acceptation et l'[[self-efficacy]] fournissent les échelles validées dont dépendent la recherche par enquête et par expérience.

## Comment la recherche quantitative apparaît dans la base de connaissances

- **Efficience et affirmations causales.** Les essais randomisés et les quasi-expériences testent si les outils d'IA améliorent l'apprentissage ([[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]]).

- **Pré-enregistrement et réplication.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] énoncent leurs hypothèses et leur plan d'analyse avant l'essai et regroupent la comparaison randomisée sur deux semestres et deux grands cours asynchrones, si bien que l'estimation repose sur un plan fixe et sur une réplication plutôt que sur un échantillon unique.
- **Modélisation des mécanismes.** La SEM/PLS-SEM teste les médiateurs et modérateurs de l'adoption de l'IA et de l'apprentissage ([[tian-genai-learning-adoption-pathways-2026]], [[acceptance-ai-english-tools-2026]], [[teacher-education-ai-literacy-sdt-2026]]).

- **Modèles de panel qui séparent les effets intra-personne des effets inter-personnes.** [[genai-reliance-human-agency-collaborative-learning-2026|Wu et Lu (2026)]] estiment un modèle de panel à effets aléatoires croisés sur trois vagues de données d'écriture collaborative, ce qui sépare les différences stables entre étudiants de l'ordre temporel intra-personne — la distinction qui autorise à lire l'accroissement de la dépendance comme précédant une chute de l'agence perçue plutôt que comme l'accompagnant simplement.
- **Mesure et développement d'échelles.** La base de connaissances documente le développement et la validation d'instruments quantitatifs ([[jin-glat-genai-literacy-assessment|GLAT]], [[educational-measurement]]).

- **Performance contre apprentissage durable.** [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui (2025)]] randomise 120 étudiants vers une étude assistée par l'IA ou traditionnelle et mesure la rétention par un test surprise de 20 questions 45 jours après l'intervention, si bien que le résultat est ce qui a survécu au délai plutôt que ce qui est apparu à la fin de la séance.

## Forces et limites

- **Forces :** la précision et la puissance statistique ; la généralisabilité à des populations définies ; l'inférence causale (avec les conceptions expérimentales) ; une couverture efficiente sur de grands échantillons ; un caractère cumulatif et comparable d'une étude à l'autre.
- **Limites :** elle capte ce qui est mesurable, manquant souvent le processus, le sens et le contexte (voir [[qualitative-research]]) ; le biais d'auto-déclaration ; les instruments peuvent mesurer le mauvais construit (voir [[educational-measurement|les problèmes de mesure]]) ; la corrélation sans causalité ; un caractère artificiel et lent relativement au changement de l'IA.

Les méthodes quantitatives et [[qualitative-research|qualitatives]] sont complémentaires — le travail quantitatif fournit l'ampleur et la puissance causale, le travail qualitatif fournit la profondeur et le sens. Les [[mixed-methods-research|conceptions mixtes]] les combinent. Voir [[research-methods-aied]] pour la comparaison complète des méthodes et les contrastes entre les conceptions expérimentales, par enquête, qualitatives et autres.

## Concepts liés
- [[research-methods-aied]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[rct]]
- [[learning-gains]]
- [[student-engagement]]
- [[self-efficacy]]
- [[technology-acceptance-model]]
- [[self-report-measures]]

## Articles liés

- [[access-not-enough-ai-tutoring-2026]] — Une étude de terrain randomisée sur le soutien humain associé au tutorat par IA
- [[genai-can-harm-teaching-rct-2026]] — L'IA générative peut nuire à l'enseignement : un essai randomisé
- [[acceptance-ai-english-tools-2026]] — L'acceptation des outils d'apprentissage de l'anglais assistés par l'IA
- [[tian-genai-learning-adoption-pathways-2026]] — Les trajectoires d'adoption de l'IA générative (PLS-SEM, fsQCA)
- [[teacher-education-ai-literacy-sdt-2026]] — La littératie IA des enseignants par la théorie de l'autodétermination
- [[jin-glat-genai-literacy-assessment]] — GLAT : un test de littératie en IA générative validé par la TRI
- [[ai-lms-middle-school-longitudinal]] — Une étude longitudinale sur un LMS intégrant l'IA au collège
- [[adaptive-pretesting-retention]] — Le pré-test adaptatif et la rétention
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
