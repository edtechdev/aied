---
title: "Analyse des profils latents"
created: "2026-09-20T12:39:59-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
methods: [quantitative-research, research-methods-aied]
confidence: high
translation_of: concepts/latent-profile-analysis
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Analyse des profils latents (LPA)** — une méthode centrée sur la personne qui trie un échantillon en sous-groupes (profils) inobservés lorsque chaque cas est décrit par plusieurs variables à la fois. C'est le membre à indicateurs continus de la famille de la modélisation par mélange ; son pendant, l'**analyse des classes latentes (LCA)**, applique la même logique à des indicateurs catégoriels. Les deux posent une question différente de celle des modèles [[quantitative-research|centrés sur les variables]] qui dominent la recherche sur l'IA en éducation : non pas « dans quelle mesure X prédit-il Y en moyenne », mais « combien de types différents d'apprenants, d'[[teacher-role|enseignants]] ou de gestionnaires se cachent sous cette moyenne ». Dans cette base de connaissances, la méthode montre qu'un même outil d'IA a des effets très différents selon les sous-groupes — cinq profils de conscience éthique parmi des étudiants de premier cycle ghanéens, six typologies de préparation parmi des gestionnaires de l'éducation ukrainiens, quatre profils d'acceptation de l'[[generative-ai|IA générative]] parmi des enseignants taïwanais en formation initiale.

## Questions à examiner

- Une étude rapporte que le confort moyen des étudiants avec l'IA est de 3,8 sur 5. Que pourrait dissimuler cette moyenne si un groupe est enthousiaste et un autre, silencieusement réticent ?
- La LPA modélise des scores continus ; la LCA modélise des catégories. Si vous codez des réponses d'entretien comme « mentionne le [[cognitive-offloading|fait de trop s'appuyer sur l'IA]] : oui/non », laquelle vous faut-il ?
- Une solution à cinq profils rapporte une entropie de 0.816 ; une solution rivale à quatre profils obtient 0.929 mais décrit les données de manière moins riche. Laquelle publieriez-vous ?
- Les profils sont descriptifs, non causaux. Si un profil de « sceptiques réticents » montre une forte facilité d'usage perçue mais une faible intention d'adoption, qu'est-ce que cela étaye, et qu'est-ce que cela n'étaye pas ?

## Introduction

La majeure partie des données probantes sur l'IA en éducation est centrée sur les variables : elle estime des relations moyennes, et les moyennes présupposent l'homogénéité. Les méthodes centrées sur la personne prennent au contraire la personne comme unité d'analyse et demandent combien de configurations distinctes d'attributs existent dans l'échantillon. La LPA appartient à cette famille, et son apport ici est qu'elle convertit la diversité des apprenants d'une affirmation rhétorique en un résultat mesurable : lorsque les profils de conscience éthique s'étendent de 26.1 pour cent à 4.5 pour cent malgré une moyenne d'échantillon confortable, la différenciation cesse d'être une préférence de conception.

## Ce que fait la méthode, et quand elle est le bon outil

La LPA présuppose que l'échantillon est tiré d'un mélange de sous-groupes, chacun ayant ses propres moyennes et variances sur les indicateurs. Le chercheur fournit les indicateurs et le nombre de groupes ; l'algorithme estime pour chaque cas la probabilité d'appartenance et affecte selon la probabilité la plus élevée, renvoyant un profil moyen par groupe, une taille par profil, et un résumé de la netteté avec laquelle les cas se séparent. Le membre de la famille que vous employez suit les indicateurs, et non la question de recherche :

- **La LCA — indicateurs catégoriels.** Becker et ses collègues ont converti des catégories de réponses codées issues des réponses ouvertes de 1 189 étudiants de physique en variables indicatrices, et ont retenu deux classes : les utilisateurs pragmatiques (70 pour cent) et les non-utilisateurs sceptiques (30 pour cent) ; parce qu'un sujet non mentionné compte comme une « non-adhésion », les auteurs signalent une inflation de zéros dans le tableau de données analysé.
- **La LPA — indicateurs continus** tels que les scores d'échelle et les moyennes de construits. Chen et ses collègues ont profilé 128 enseignants taïwanais en formation initiale sur cinq construits de [[technology-acceptance-model|TAM]]/UTAUT2 ; Acquah et ses collègues ont profilé 509 étudiants de premier cycle ghanéens sur trois dimensions de conscience éthique ; Schweder et ses collègues ont profilé 2 464 étudiants sur la satisfaction des besoins [[motivation|motivationnels]].
- **L'analyse des transitions (de profils) latentes** étend la famille dans le temps, estimant les profils par vague et la probabilité de passer de l'un à l'autre. Liang et ses collègues ont suivi la motivation d'apprentissage de l'IA de 2 086 étudiants sur un an ; Wu a suivi 457 apprenants de japonais sur trois vagues, le profil inadapté se réduisant de 26.48 à 17.74 pour cent.

Le regroupement ordinaire ([[machine-learning|les k-moyennes]] et le regroupement hiérarchique) poursuit la même intention centrée sur la personne, mais partitionne les cas selon la distance géométrique plutôt qu'en estimant un modèle de probabilité. Recourez à la LPA ou à la LCA lorsque la question porte sur les sous-groupes — sur la question de savoir si « l'apprenant » est une fiction au niveau d'agrégation de votre échantillon, et si les sous-groupes diffèrent par la forme autant que par le niveau. N'y recourez pas lorsque vous avez besoin d'un effet moyen d'un traitement : une solution à cinq profils au sein d'un [[rct|essai randomisé]] portant sur un tuteur [[intelligent-tutoring|adaptatif]] a prédit des différences au post-test (η² partiel = .27) mais n'a trouvé aucune interaction condition × profil (ps ≥ .198).

## Comment le corpus l'emploie

Trois usages reviennent.

- **Établir l'hétérogénéité avant de concevoir pour elle.** L'enquête de Kremen et ses collègues menée auprès de 395 gestionnaires de l'éducation ukrainiens a employé la LCA centrée sur la personne pour montrer que « le gestionnaire » est une fiction : six typologies vont du profil contraint par les compétences (25.6 pour cent, disposé mais incompétent) aux sceptiques sans entraves (la préparation la plus élevée, avec 74 pour cent de défiance envers l'IA), et les auteurs y lisent un mandat en faveur d'une formation différenciée.
- **L'alignement entre systèmes comme vérification de stabilité.** [[teachers-ai-belief-profiles-talis-2024-2026|Fang et Jin (2026)]] ont retenu quatre profils de croyances parmi 40 680 enseignants répartis sur 49 systèmes éducatifs (Indifférents 6.13% à Adhésion mesurée 56.29%), et le changement de référence d'alignement a laissé l'accord de classification à 99.62% — tandis que l'utilité ordonnait les profils de manière identique dans les 49 systèmes, ce que le risque ne faisait pas.
- **Recouvrer des sous-groupes qu'une moyenne cache.** Acquah et ses collègues ont retenu cinq profils de conscience éthique allant de « très élevée et globale » (26.1 pour cent) à « faible conscience éthique » (4.5 pour cent, bienfaisance 2.06), une étendue allant d'un peu plus d'un quart de l'échantillon à moins d'un vingtième. Chen et ses collègues ont montré que les sceptiques réticents déclaraient une forte facilité d'usage perçue mais une très faible intention comportementale — la démonstration la plus claire, dans ce corpus, que le paradoxe facilité d'usage/intention est invisible à un modèle au niveau des moyennes.
- **Profiler la calibration plutôt que le niveau.** L'étude sur la littératie en IA des enseignants a appliqué la LPA à l'accord entre l'[[self-report-measures|auto-déclaration]] et les mesures objectives, produisant six profils : la surestimation, la sous-estimation, l'alignement, et un groupe bas/bas concentré parmi les enseignants sans expérience préalable de la [[ai-literacy|littératie en IA]]. Ici, les profils décrivent un schéma entre instruments, non une bande de scores.

Les profils servent alors de variable indépendante : la discipline a façonné l'appartenance parmi les enseignants en formation initiale (V de Cramér = 0.532, les étudiants en STIM étant concentrés dans les pionniers de la technologie), et l'appartenance a prédit ultérieurement le [[self-efficacy|sentiment d'efficacité personnelle]], l'épuisement professionnel et l'[[anxiety-and-stress|anxiété liée à l'IA]] ailleurs dans le corpus.

## Choisir le nombre de profils

Aucune statistique unique ne sélectionne la solution ; le corpus traite la rétention comme un jugement porté à partir de plusieurs critères réunis.

- **Les critères d'information (BIC, AIC).** Plus faible est généralement meilleur, mais un déclin monotone signale un problème plutôt qu'un vainqueur. Dans l'étude sur les gestionnaires ukrainiens, le BIC a décliné de manière monotone sur toute la plage allant de deux à six classes, sans minimum clair, et les auteurs qualifient leur solution à six classes d'exploratoire sur cette base.
- **L'entropie.** Un résumé de la certitude de la classification, plus proche de 1 signifiant une affectation plus nette. Chen et ses collègues rapportent 0.985 pour quatre profils ; Acquah et ses collègues rapportent 0.816 pour cinq profils contre 0.929 pour quatre, et suggèrent eux-mêmes de consolider pour obtenir un regroupement plus stable.
- **L'[[explainable-ai|interprétabilité]] et la taille des profils.** L'étude de profilage de la confiance envers l'IA a conservé trois grappes bien que l'indice de Calinski–Harabasz en préférât deux, parce que trois étaient interprétables, et elle note qu'un coefficient de silhouette de 0.288 signale une séparation faible ou limite. Chen et ses collègues avertissent que leur plus petit profil (14.06 pour cent des 128 cas) peut être instable, et le plus petit profil de l'étude ghanéenne ne compte que 23 étudiants, ce que ses auteurs proposent de fusionner.
- **La stabilité par rééchantillonnage.** La stabilité bootstrap est la vérification honnête de la question de savoir si les profils se reproduiraient dans un nouvel échantillon : l'indice de Rand ajusté moyen était de 0.385 pour la solution ukrainienne à six classes, mais de 0.989 sur 100 initialisations aléatoires dans l'étude sur la confiance envers l'IA — la même conception nominale, mais un poids probant très différent.
- **Les tests de rapport de vraisemblance bootstrap (BLRT)** et le test de Lo–Mendell–Rubin sont des compagnons standard du BIC et de l'entropie dans la littérature plus large sur la modélisation par mélange, mais les études de profilage de cette base de connaissances ne les rapportent pas. Lorsqu'une page ne rapporte que le BIC et l'entropie, traitez le nombre de classes comme provisoire.


- **La vérification par rapport de vraisemblance que ce corpus omet par ailleurs.** [[ai-attitude-latent-profiles-career-development-2026|Song et coll. (2026)]] ont retenu quatre profils (entropie 0.824) parmi 379 étudiants en gestion et ont rapporté la décision de Lo–Mendell–Rubin : significative à quatre (p = 0.035) et non significative à cinq (p = 0.376).
- **Rétention défendue avec la solution rivale et un test de rapport de vraisemblance.** [[suria-martinez-academic-self-efficacy-motor-disabilities-2026|Suriá-Martínez et coll. (2026)]] rapportent qu'une solution à quatre profils s'ajustait légèrement mieux aux 102 étudiants, mais ne s'améliorait pas significativement et laissait une plus petite classe à 12.7 pour cent ; ils retiennent donc trois profils (entropie .89) plutôt que le modèle numériquement mieux ajusté. Rapporter la solution perdante et ce qui l'a disqualifiée est ce qui fait du nombre de classes retenu un jugement que les lecteurs peuvent vérifier, et la mesure d'usage de l'IA à 12 items construite spécialement pour l'étude — validée sur un échantillon séparé de 85 personnes que les auteurs qualifient de préliminaire — marque l'autre limite de ses données probantes.

Rapportez les comparaisons, et pas seulement le vainqueur : une page qui dit « nous avons retenu cinq profils » sans la solution rivale, les valeurs d'entropie et la taille du plus petit profil ne donne aux lecteurs aucun moyen de juger le choix.

## Lire et rapporter les résultats, et là où ils se trompent

Lisez un profil par sa forme autant que par son niveau. Dans l'étude ghanéenne, les profils diffèrent par la configuration de l'autonomie, de la bienfaisance et de l'équité — le plus grand associant une forte adhésion à l'autonomie à une bienfaisance plus faible — de sorte que deux profils peuvent se situer à des niveaux globaux similaires et appeler malgré tout des enseignements différents.

Quatre mises en garde, chacune énoncée dans les pages sources :

1. **Les profils sont descriptifs.** Ils disent qui est dans l'échantillon, non pourquoi, et les dispositifs transversaux ne peuvent montrer ni la stabilité ni le mouvement (les études sur les enseignants en formation initiale, au Ghana et en physique). Seules les analyses longitudinales — une étude de transition sur un an et les trois vagues de Wu — étayent des affirmations sur le mouvement, et même là, le mouvement est une association, non un effet d'intervention.
2. **L'appartenance est estimée, non observée.** Les cas sont affectés selon la probabilité postérieure la plus élevée, de sorte que les individus proches d'une frontière sont classés avec une incertitude réelle ; une entropie faible et des valeurs de silhouette faibles signifient que les frontières doivent être lues comme souples.
3. **Le choix des indicateurs définit la réponse.** Les profils dépendent entièrement des variables qui entrent dans le modèle, de sorte qu'une hétérogénéité que l'étude ne mesure pas est une hétérogénéité qu'elle ne peut pas trouver — l'étude ghanéenne n'a collecté que le genre parmi les variables de contexte et ne peut donc pas dire ce qui prédit l'appartenance.
4. **Une hétérogénéité détectée n'est pas une causalité détectée.** Le résultat nul profil × condition de l'essai sur le tuteur en est le rappel : profiler un résultat au sein d'un essai n'est pas un test de modération du traitement.

## Implications pour l'IA en éducation

1. **Mesurez l'hétérogénéité avant de recommander une intervention.** Les profils de ce corpus placent à répétition un quart ou plus d'un échantillon sous la moyenne-phare ; concevez pour les profils qui existent plutôt que pour la moyenne.
2. **Préférez les méthodes centrées sur la personne lorsque le livrable est la différenciation.** Les études sur les enseignants en formation initiale et sur les gestionnaires présentent toutes deux ce déplacement comme leur contribution méthodologique, parce que des prédicteurs moyens ne peuvent révéler les configurations qui justifient un soutien différencié.
3. **Rapportez intégralement les données probantes de rétention.** Publiez les comparaisons de BIC/AIC, l'entropie, les tailles des profils et une vérification de stabilité, et dites franchement lorsqu'un nombre de classes est exploratoire.
4. **Traitez les profils comme des diagnostics, non comme des étiquettes.** Un profil est un construit de recherche doté d'une frontière estimée, de sorte qu'un outil qui affecte des individus à des catégories nommées porte la mise en garde de tout instrument de [[educational-measurement|mesure]] — et les [[differential-effects-across-learner-groups|effets différenciés selon les groupes d'apprenants]] méritent l'examen réservé à toute analyse de sous-groupes.

## Concepts liés

- [[quantitative-research]]
- [[mixed-methods-research]]
- [[research-methods-aied]]
- [[machine-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[differential-effects-across-learner-groups]]
- [[technology-acceptance-model]]

## Articles liés

- [[ai-attitude-latent-profiles-career-development-2026]] — Lo–Mendell–Rubin retention evidence for four AI-attitude profiles in 379 business students

- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Three-wave latent profile transition analysis of psychological adaptation
- [[liang-ai-learning-motivation-sdt-2026]] — Latent transition analysis of three motivation profiles over a year
- [[trust-in-ai-psychological-profiles-ml-2026]] — K-means profiles; silhouette vs. Calinski–Harabasz disagreement; ARI 0.989
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Hierarchical and k-means clustering into four GenAI adoption personas

- [[teachers-ai-belief-profiles-talis-2024-2026]] — Four teacher AI-belief profiles from 40,680 teachers in 49 systems, with alignment stability
