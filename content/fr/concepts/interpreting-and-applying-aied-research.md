---
title: "Interpréter et appliquer la recherche sur l'IA en éducation"
created: "2026-09-19T05:41:27-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied, how-can-ai-assist-with-educational-research]
translation_of: concepts/interpreting-and-applying-aied-research
source_updated: "2026-10-05T11:23:36-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Interpréter et appliquer la recherche sur l'IA en éducation** — comment décider si un résultat sur l'IA en éducation mérite qu'on agisse en conséquence, que vous enseigniez, dirigiez un programme, conceviez un cours ou construisiez un logiciel. Vous n'avez pas besoin de statistiques pour utiliser cette page. Elle part de la question qu'un praticien se pose réellement — *devrais-je faire cela ?* — passe en revue les quelques éléments qui y répondent, et réserve le détail technique à une section ultérieure, pour ceux qui le souhaitent ou en ont besoin. La version courte : un résultat mérite qu'on agisse en conséquence lorsque vous savez ce qui a été comparé, ce qui a été mesuré, qui a été étudié, et si l'outil existe encore sous la forme étudiée. La plupart des affirmations qui parviennent aux enseignants, aux administrateurs et aux développeurs échouent à l'un de ces quatre tests.

## Questions à examiner

- Un fournisseur, un article de presse ou un collègue affirme qu'un outil d'IA a amélioré l'apprentissage. Quelle est la première chose que vous voudriez voir avant de l'essayer dans votre propre cours — et sauriez-vous où la chercher ?
- Chaque page d'article de cette base de connaissances comporte désormais une section **Ce que cela signifie pour la pratique**, et la plupart une section **Limites**. En lisant les deux ensemble, que vous apprend chacune que l'autre ne vous apprend pas ?
- Les étudiants s'exercent avec un outil d'IA et font mieux sur le travail pratique, puis font moins bien à l'[[summative-assessment|examen à livre fermé]]. Lequel de ces nombres est le résultat d'apprentissage qui importe à votre cours — et vos évaluations actuelles attraperaient-elles la différence ?
- Une étude promet une forte amélioration, mais elle a suivi 30 étudiants dans un cours d'un seul établissement, et la version de l'outil étudiée n'est plus celle que personne n'utilise. Lequel de ces deux faits vous inquiète le plus, et pourquoi ?
- Beaucoup d'outils d'IA augmentent la fréquence d'usage qu'en font les étudiants sans augmenter ce qu'ils apprennent. S'il fallait choisir entre un outil qui accroît l'engagement et un outil qui accroît la performance sans assistance, quelle donnée probante trancherait la question ?
- On vous demande d'approuver ou d'acheter un outil sur la foi des chiffres d'efficacité du fournisseur lui-même. Que voudriez-vous voir divulguer sur la manière dont ces chiffres ont été produits ?

## Introduction

Cette page s'adresse aux personnes qui doivent décider quelque chose : un enseignant qui se demande s'il doit modifier un travail, un [[administrator|administrateur]] qui pèse un pilote, un concepteur pédagogique qui construit un cours, un développeur de logiciels qui décide de ce qu'une fonctionnalité doit faire, ou un chercheur qui explique un résultat à l'un d'entre eux.

Deux habitudes font la différence, et aucune n'exige de formation à la recherche.

**Lisez d'abord les deux sections écrites pour vous.** Chaque page d'article comporte désormais une section **Ce que cela signifie pour la pratique** — généralement trois à cinq actions concrètes dérivées de cette étude — et la plupart comportent une section **Limites** énonçant ce que l'étude ne peut pas étayer. Lisez-les avant les résultats de l'étude, et non après. La section pratique vous dit à quoi l'étude est bonne ; la section des limites vous dit où elle s'arrête. Si la section pratique est absente ou vague, traitez cette page comme inachevée plutôt que comme une donnée probante.

**Jugez l'affirmation, et non la confiance avec laquelle elle est formulée.** Les affirmations sur l'[[ai-education|IA en éducation]] sont généralement exactes sur *quelque chose* et trompeuses sur la chose qui vous importe, parce qu'une étude et votre salle de classe diffèrent par quatre aspects : ce à quoi elle a été comparée, ce qu'elle a mesuré, qui y a participé, et quelle version de l'outil a été employée. Le reste de cette page vous donne les vérifications en langage clair, puis les données probantes qui les étayent, pour les lecteurs qui le souhaitent.

Ce qui suit ne remplace pas non plus ses pages voisines. Les [[research-methods-aied|méthodes de recherche en IA en éducation]] couvrent la manière dont les dispositifs sont construits, les [[limitations-in-aied-research|limites de la recherche en AIED]] répertorient les faiblesses récurrentes de la littérature, l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]] couvre la manière dont les systèmes et les productions sont évalués, et les [[differential-effects-across-learner-groups|effets différenciés selon les groupes d'apprenants]] couvrent la question de savoir qui un résultat inclut et n'inclut pas.

## Quatre questions qui tranchent la plupart des affirmations

Posez-les avant de dépenser du temps, de l'argent ou un semestre pour quelque chose.

**1. À quoi a-t-elle été comparée, et cette comparaison était-elle équitable ?** « Les étudiants qui ont utilisé l'IA ont fait mieux que ceux qui ne l'ont pas fait » ne vous apprend quelque chose que si les autres étudiants faisaient quelque chose de réel. Si la comparaison était le train-train ordinaire — ou rien — alors le résultat agrège l'outil avec du temps supplémentaire, une attention supplémentaire et la nouveauté. Ce qu'il faut chercher : un **groupe témoin** qui a reçu une alternative crédible, et une affectation aléatoire aux deux conditions.

**2. Qu'ont-ils mesuré exactement ?** C'est ici que la plupart des affirmations enthousiasmantes échouent silencieusement. Les notes aux tests, la qualité des devoirs, la [[motivation|motivation]], les attitudes et l'[[student-engagement|engagement]] sont regroupés en un unique chiffre de « réussite », ou une mesure de la performance *avec l'outil présent* est rapportée comme un apprentissage. Un apprentissage qui dépend de la présence de l'outil n'est pas la même chose qu'un apprentissage qui dure. Ce qu'il faut chercher : ce que l'instrument a mesuré, s'il a été validé pour cette population, et si un résultat a été mesuré **sans** l'IA dans la salle.

**3. Qui a été étudié, combien, et pendant combien de temps ?** Trente étudiants dans un cours constituent un signal, non un résultat. Une intervention de quatre semaines ne peut rien vous dire d'une année. Et une étude portant sur des étudiants différents des vôtres reste utile — c'est une hypothèse sur votre contexte, non une prédiction. Ce qu'il faut chercher : la taille de l'échantillon, la manière dont les participants ont été recrutés, le site unique, la durée, et si un sous-groupe était assez large pour être analysé.

**4. L'outil est-il toujours celui qui a été étudié ?** La capacité de l'IA évolue plus vite que la publication. Un résultat de 2025 décrit la génération de modèles de 2025 — parfois une version spécifique, parfois une configuration que plus personne n'emploie aujourd'hui. Cela ne rend pas le résultat faux ; cela le rend daté, et cela signifie que l'affirmation devrait être revérifiée plutôt qu'héritée. Ce qu'il faut chercher : la version du modèle et la fenêtre de collecte des données.

## Ce que les données probantes disent des affirmations sur l'IA en général

Si vous ne retenez qu'une chose de cette page, retenez que le chiffre-phare est généralement gonflé et que la comparaison est généralement faible. Ce n'est pas une vue marginale — c'est ce que rapportent les audits du domaine lui-même. Plusieurs études bien conçues montrent de véritables gains ; l'enjeu est que la charge de la preuve incombe à l'affirmation.

- **Environ les deux tiers de l'effet moyen disparaissent** une fois que vous corrigez le fait que les résultats impressionnants sont publiés et que ceux qui ne le sont pas ne le sont pas. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et coll. (2026)]] ont regroupé 1 840 tailles d'effet issues de 67 revues et ont montré que la moyenne corrigée valait environ un tiers de la médiane publiée — DMS 0.196 contre 0.67.
- **Un nom de produit n'est pas une méthode d'enseignement.** En auditant les comparaisons qui sous-tendent une méta-analyse éminente, [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et coll. (2025)]] ont montré que seulement **21%** comportaient un traitement bien défini, un groupe témoin et une mesure valide de l'apprentissage — et l'avantage rapporté pour « l'usage de ChatGPT » est ressorti plus grand que pour des [[intelligent-tutoring|systèmes de tutorat intelligent]] conçus à cet effet (g = 0.7 contre 0.66), ce qui est un signal d'alerte plutôt qu'un triomphe.
- **La performance avec l'outil est régulièrement prise pour de l'apprentissage.** Dans une étude de mathématiques en contexte [[k-12|primaire et secondaire]], des étudiants s'exerçant avec un [[conversational-ai|agent conversationnel]] à usage général ont obtenu de meilleures notes de pratique, puis ont obtenu un score **environ 17% inférieur** à celui de camarades sans accès à l'IA à l'épreuve finale à livre fermé ([[stanford-evidence-base-ai-k12-2026|le corpus de données probantes de Stanford sur l'IA dans l'enseignement primaire et secondaire]]).
- **Les propres revues du domaine ne survivent pas à l'audit.** [[oneill-presumed-effective-meta-analysis-2026|L'audit d'O'Neill (2026)]] portant sur **14 méta-analyses évaluées par les pairs** affirmant que l'IA améliore l'éducation a montré qu'**aucune** ne fournissait de base valide aux affirmations qu'elle avançait, et que, parmi 46 études primaires choisies au hasard, **61%** présentaient des problèmes de validité. Le problème n'est pas un seul mauvais article ; c'est une culture du reporting.
- **Les auto-déclarations flattent tout le monde.** Les personnes évaluent leurs propres compétences en [[ai-literacy|IA]] environ **40%** plus haut que ne le montrent les mesures de performance, ce qui explique que les enquêtes de satisfaction et de confiance soient les données probantes les plus faibles sur lesquelles agir ([[self-report-measures|les mesures auto-déclarées]], la [[educational-measurement|mesure en éducation]]).
- **La plupart des produits déjà présents dans les salles de classe n'ont aucune donnée probante indépendante.** [[instruction-partners-ai-in-action-learning-tour-2026|La tournée d'apprentissage 2025-26 d'Instruction Partners]] a profilé 20 produits d'IA destinés aux étudiants et a montré que, sur les 16 disposant de profils complets, seulement sept avaient fait l'objet d'une évaluation indépendante examinant la réussite des étudiants à travers les groupes d'étudiants aux États-Unis ; deux n'avaient été étudiés qu'à l'étranger, quatre avaient des études en cours et trois reposaient sur des données internes uniquement. Les auteurs soutiennent que des études causales indépendantes couvrant les groupes prioritaires devraient être l'attente pour tous les produits destinés aux étudiants — ce qui n'est pas encore la norme pour des outils que les écoles emploient déjà.

## Transformer un résultat en décision

La séquence qui fait économiser le plus d'efforts gaspillés, dans l'ordre.

1. **Écrivez d'abord votre résultat.** Pas « utiliser davantage l'IA », mais « les étudiants peuvent faire X sans l'outil ». Si votre résultat est la performance sans assistance, alors une étude qui a mesuré la performance assistée est une donnée probante adjacente, non directe.
2. **Trouvez la comparaison et la mesure** — dans l'étude, ou dans la section pratique de sa page d'article. Si l'un des deux manque, traitez l'affirmation comme une démonstration plutôt que comme un résultat.
3. **Lisez la section des limites comme des instructions, non comme des mises en garde.** « Un seul cours, résultats auto-déclarés, quatre semaines » vous dit exactement lesquelles de vos hypothèses l'étude ne couvre pas.
4. **Vérifiez la version et la date.** Si l'étude a employé une génération de modèles vieille de deux ans, prévoyez de refaire le test plutôt que de présumer.
5. **Nommez les conditions habilitantes.** Le coût, les licences, le temps du personnel, les règles relatives aux données, et la question de savoir si les étudiants doivent payer l'offre qui fonctionne réellement. Les études les emportent rarement, et elles décident si une intervention survit à un semestre. Dans [[chick-faculty-development-ethical-ai-2026|une étude de développement pédagogique du corps enseignant portant sur dix participants]], tout le monde a dit qu'il continuerait à utiliser l'IA, tandis que les mêmes personnes décrivaient des abonnements personnels pour l'accès aux outils et aucune allocation de temps pour les refontes qu'elles avaient planifiées.
6. **Pilotez à petite échelle, et mesurez la condition sans soutien.** Un court pré/post avec une épreuve passée sans l'outil vaut mieux qu'une enquête de satisfaction. Petit et honnête vaut mieux que grand et rhétorique. Voir la [[learning-design|conception pédagogique]] pour savoir où cela s'insère dans la conception d'un cours.
7. **Notez une date de revue, et soyez prêt à abandonner l'affirmation.** Lorsque le présupposé d'une étude est une capacité qui n'existe plus, le geste honnête est de retirer l'affirmation plutôt que de la citer indéfiniment — la même discipline que cette base de connaissances applique à ses propres pages.

## Les mots que vous rencontrerez dans la recherche

Des traductions en langage clair, afin que vous puissiez parcourir une étude ou une page de fournisseur sans bagage méthodologique.

- **Taille d'effet** — l'ampleur de la différence, sur une échelle où 0 ne signifie rien. Traitez les petites valeurs comme « une incitation », non comme « une transformation ».
- **Statistiquement significatif** — improbable d'être dû au seul hasard *dans cet échantillon*. Cela ne dit rien de la question de savoir si l'effet est grand, ou s'il se produira dans votre classe.
- **Intervalle de confiance** — la plage de résultats que les données ne permettent pas d'exclure. Si la plage inclut zéro, le résultat peut n'être rien du tout, quel que soit l'intérêt du chiffre-phare.
- **[[meta-analysis-systematic-review|Méta-analyse]]** — une étude qui regroupe de nombreuses études. Puissante, et seulement aussi bonne que ce qu'elle a regroupé, ce qui explique que les revues fassent l'objet d'audits.
- **Biais de publication** — les résultats intéressants sont publiés et les résultats ternes ne le sont pas, de sorte que la moyenne de la littérature paraît plus rose que la réalité.
- **Auto-déclaration** — des personnes qui se décrivent elles-mêmes. Utile pour les attitudes, faible pour la compétence ou le comportement.
- **Groupe témoin** — la condition de comparaison. La chose la plus importante à chercher.
- **Pré/post** — mesuré avant et après sans groupe de comparaison. Suggestif, jamais concluant.
- **Analyse de sous-groupes** — des résultats pour une tranche de l'échantillon. Généralement sous-puissante, aussi traitez-la comme une hypothèse.
- **Réplication** — quelqu'un d'autre a obtenu le même résultat. Rare, et la donnée probante la plus forte disponible.
- **[[benchmark|Repère de référence]]** — un ensemble fixe de tâches pour noter des systèmes. Les scores bougent lorsque la cible bouge, aussi vérifiez la date.

## Quand ralentir malgré tout

- **L'affirmation vient du fournisseur, sur les métriques du fournisseur.** Cela peut rester informatif — un fournisseur de [[intelligent-tutoring|tutorat par IA]] rapporte une métrique d'engagement calibrée par des experts humains à F1 0.83, les améliorations provenant de plus de 40 expériences en cinq mois ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et coll., 2026]]) — mais le construit, les évaluateurs et la métrique sont les choix du fournisseur. Demandez le groupe de comparaison et le résultat sans assistance.
- **La notation automatisée est traitée comme un problème résolu.** Une forte concordance avec des évaluateurs humains est de la fiabilité, non de la qualité. Dans une étude de notation, les évaluateurs humains s'accordaient avec le consensus multi-évaluateurs à environ r = 0.88, de sorte que des scores automatisés proches de r = 0.85 atteignaient déjà le plafond de mesure propre à la tâche ([[know-when-to-trust-ai-scoring-reliability-2026|Quand faire confiance à la notation par IA]]).
- **La liste de références fait un travail trop lourd.** Trente entrées de référence contenant des informations bibliographiques vérifiablement fabriquées ont été confirmées dans 14 articles d'[[cs-education|enseignement de l'informatique]], tous de 2025 et 2026 ([[citation-errors-hallucinations-computing-education-2026|Denny et coll., 2026]]). Si une affirmation repose sur une citation, vérifiez la citation.
- **Personne n'a mesuré le comportement dont dépend votre politique.** Sur 493 fiches dédupliquées et 14 études prioritaires, aucune étude n'a mesuré si la vérification réussissait *et* ce que l'apprenant faisait ensuite de son résultat, jugé au regard d'une norme indépendante de qualité des productions ([[verification-quality-reliance-calibration-genai-2026|vérification et calibration de la dépendance]]). Les politiques de cours dépendent exactement de ce comportement.

## Si vous construisez ou achetez un outil

Les mêmes vérifications s'inversent en exigences de conception, et les pages d'évaluation de la base de connaissances en portent le détail (l'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]], l'[[automated-assessment|évaluation automatisée]]).

- **Faites de la comparaison une partie du cahier des charges de la fonctionnalité.** Décidez ce qu'un apprenant ferait autrement, et soyez capable de dire pourquoi votre outil vaut mieux que cela — et non pourquoi il vaut mieux que rien.
- **Mesurez la condition sans soutien.** Si votre résultat est l'apprentissage, incluez une tâche accomplie sans l'outil ; la performance assistée seule vous trompera autant qu'elle trompe vos acheteurs.
- **Rapportez comment vos jugements automatisés ont été validés** — l'étalon-or, la cible de calibration, qui a tranché les désaccords — et rapportez-le comme de la fiabilité, non comme de la qualité.
- **Nommez la version et la date** dans toute affirmation d'efficacité, parce que votre prochaine version l'invalidera.
- **Montrez les contreparties :** le coût par étudiant, l'[[accessibility|accessibilité]], le traitement des données, et ce qui advient des apprenants sur l'offre gratuite. Voir la [[ai-use-disclosure|déclaration des usages de l'IA]], la [[privacy|vie privée]] et la [[governance|gouvernance]].

## Pour les lecteurs qui veulent les données probantes

Les vérifications ci-dessus ne sont pas une sagesse populaire ; elles proviennent de défaillances documentées dans cette littérature. Cette section réserve le détail à toute personne qui examine un article, défend une décision, ou soutient qu'un outil devrait être évalué correctement.

**Les défaillances de validité ont une distribution, et pas seulement une présence.** Dans les 46 études auditées par [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]], l'inadéquation de la variable dépendante était le problème le plus fréquent (n = 15) — la mesure ne capturait pas ce que l'affirmation soutenait — suivie de l'inadéquation de la variable indépendante (n = 11), des problèmes de dispositif expérimental (n = 7), des problèmes d'extraction des données (n = 6), de l'absence de groupe témoin (n = 6) et de l'affectation non aléatoire aux groupes (n = 6). Sur les 14 méta-analyses, douze traitaient comme indépendantes plusieurs tailles d'effet issues d'une même étude primaire, ce qui gonfle l'apparent corpus de données probantes.

**Les affirmations portant sur des sous-groupes sont généralement indécidables dans les études qui les formulent.** Le [[ai-tutoring-micro-rct-gcse-science-2026|micro-essai contrôlé randomisé en sciences du GCSE]] rapporte une interaction traitement par statut de **0,57 points (IC à 95 % -2.25 à 3.39)**, avec des estimations stratifiées de **g = 0.28 (IC à 95 % -0.04 à 0.59)** pour un groupe et **g = 0.35 (IC à 95 % 0.18 à 0.52)** pour l'autre. Un intervalle qui croise zéro n'est pas un résultat d'[[equity-in-ai-education|équité]] ; c'est une question pour un pilote local.

**Une synthèse peut satisfaire son propre protocole et regrouper pourtant une qualité non pondérée.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan et coll. (2026)]] énoncent franchement qu'ils n'ont employé aucun outil formel d'appréciation de la qualité, traitant leurs critères d'inclusion comme le seuil de rigueur, de sorte qu'une étude quasi expérimentale et une étude randomisée y contribuaient également — et leur hétérogénéité se lit **I² = 82.98% sous un modèle à effets fixes, mais 15.75% sous un modèle à effets aléatoires**, ce qui explique qu'un chiffre d'hétérogénéité cité sans son modèle ne puisse pas vous dire à quel point le corpus est incohérent.

**La [[assessment-validity|validation]] du jugement automatisé fait partie du résultat.** L'accord avec des codeurs humains est une déclaration de fiabilité, et le plafond ci-dessus montre pourquoi elle ne vaut pas qualité ([[machines-misread-pedagogical-quality|les machines lisent mal la qualité pédagogique]]).

**La génération de l'outil est une limite de premier ordre.** Une revue de l'évaluation assistée par IA note que ses propres résultats reflètent des versions spécifiques de modèles à des moments spécifiques, et que le mouvement du domaine rend tout compte des capacités des modèles potentiellement obsolète en quelques mois ([[ai-assisted-assessment-instruction-higher-ed-2026|l'évaluation et l'enseignement assistés par l'IA dans l'enseignement supérieur]]). Cantonnez les affirmations de portée à leur génération : « l'[[generative-ai|IA générative]] a amélioré X » n'est pas portable, tandis que « des outils de l'ère de GPT-4, dans cette tâche, avec cet [[scaffolding|étayage]] » l'est.

**Les cibles des repères de référence bougent**, de sorte qu'un résultat qu'un système sature ou rate aujourd'hui peut s'inverser avec la prochaine version ; les vérifications de saturation et de contamination ont leur place à côté de toute affirmation fondée sur un repère de référence.

**Lire cette littérature aux côtés de ses propres critiques est une pratique normale ici.** Les listes de contrôle du côté du reporting, à l'intention des auteurs et des évaluateurs, se trouvent dans [[reporting-interpreting-aied-research|la FAQ sur le reporting et l'interprétation de la recherche sur l'IA]], et les habitudes d'appréciation de cette page s'associent au [[theory-development-aied|développement théorique en IA en éducation]] lorsqu'une affirmation est théorique plutôt qu'empirique.

## Une courte liste de contrôle

1. Énoncez votre résultat en une phrase, en précisant si l'outil y est présent.
2. Trouvez la comparaison. Sans comparaison crédible, pas de décision.
3. Faites correspondre la mesure à votre affirmation, et préférez un résultat sans assistance.
4. Dégonflez le chiffre : lisez la taille d'effet corrigée des biais, non le chiffre-phare.
5. Vérifiez la version du modèle et les dates de l'étude.
6. Lisez la section des limites comme des instructions sur ce que vous ignorez encore.
7. Chiffrez-le : licences, offres, temps du personnel, règles relatives aux données.
8. Pilotez à petite échelle avec une mesure sans assistance, puis décidez.
9. Notez une date de revue à un an, et soyez prêt à retirer l'affirmation.

## Concepts liés

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]

## Articles liés

- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Publication-bias-adjusted AI effects about one-third of reported size
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inclusion criteria used as the rigor threshold, and heterogeneity that changes with the model
- [[know-when-to-trust-ai-scoring-reliability-2026]] — When automated scoring reliability meets the task's measurement ceiling
- [[verification-quality-reliance-calibration-genai-2026]] — What the verification and reliance literature does not measure
- [[citation-errors-hallucinations-computing-education-2026]] — Fabricated references that reached print in 2025–2026
- [[stanford-evidence-base-ai-k12-2026]] — Practice gains, exam losses: the assistance-removal problem in K-12 math
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Subgroup effects whose confidence intervals cross zero
- [[chick-faculty-development-ethical-ai-2026]] — Enabling conditions: policy signals, personal subscriptions, no time
- [[ai-tutoring-quality-k12-methodologies-2026]] — Vendor metrics with their calibration and experiment count disclosed
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Findings tied to model versions, and the field's churn
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Independent-evidence counts for 16 student-facing AI products already in use
