---
title: "Quelles sont les bonnes pratiques pour rapporter et interpréter la recherche sur l'IA en éducation ?"
created: "2026-09-22T19:14:36-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
source_updated: "2026-10-28T11:43:14-04:00"
translation_of: faqs/reporting-interpreting-aied-research
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

Votre manuscrit affiche un chiffre vedette dans le résumé, et un évaluateur vient de demander ce que le groupe de contrôle a réellement fait. Ou bien c'est vous l'évaluateur, avec entre les mains une méta-analyse dont l'effet combiné est de 0.67 et dont la section des méthodes fait une page et demie. Ou bien votre département rédige des recommandations sur la manière dont le personnel doit rendre compte des études sur l'IA et veut quelque chose de plus précis que « suivez les normes ».

Six omissions décident de la plupart de ces cas : quel système d'IA a été utilisé, à quoi il était configuré, quel rôle pédagogique il jouait, si des humains ont conçu ou relu sa production, ce que la mesure de résultat capturait réellement, et ce que les auteurs ont fait du biais, du coût et des limites. « Non évaluable » est le verdict honnête quand elles manquent, et c'est un verdict différent de « réfuté ».

## La version courte

**1.** Décrivez l'IA comme un traitement, non comme un fournisseur. Modèle, version, configuration, invites, rôle, et qui a conçu ou relu la production.

**2.** Nommez la justification pédagogique et la comparaison active. Un nom de produit n'est pas une méthode, et l'enseignement habituel n'est pas un contrôle équitable.

**3.** Faites correspondre la mesure à l'affirmation, y compris pour dire si le résultat était différé et sans aide.

**4.** Rapportez l'incertitude que l'analyse comporte réellement : effets dépendants, variance inter-études, intervalles de prédiction, tailles des sous-groupes, biais de publication.

**5.** Validez chaque jugement automatisé, avec un étalon de référence nommé et un arbitre nommé.

**6.** Déclarez les contrepoids : gouvernance, coût de calcul, votre propre usage de l'IA, résultats nuls, et uniquement les citations que vous avez vérifiées.

## Décrire l'IA comme un traitement que quelqu'un pourrait reconstruire

C'est la vérification que la plupart des manuscrits échouent. Le cadre RAISE (*Reporting AI Studies in Education*, Allison 2026) est une liste de contrôle de 30 éléments répartis en dix domaines thématiques, et son constat diagnostique est précis : les manuscrits omettent régulièrement quel modèle a été utilisé, comment il était configuré, quel rôle il jouait et si des acteurs humains ont conçu ou relu ses productions. Les évaluateurs restent alors avec quatre questions sans réponse. Que faisait exactement l'IA ? Était-elle nécessaire ? Est-ce reproductible ? Les affirmations sur l'apprentissage sont-elles crédibles ?

RAISE va de la justification éducative à la spécification au niveau de l'API, en passant par l'interaction apprenant-IA, l'accessibilité et l'adéquation culturelle, les participants et le contexte, l'implication humaine, la conception, l'éthique, la transparence et la reproductibilité, jusqu'aux limites. Sa matrice complémentaire d'éthique et de risque couvre les risques pour l'[[agency|autonomie]] de l'apprenant, l'[[equity-in-ai-education|équité]], la [[governance|gouvernance]] des données et la transparence algorithmique. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah et Gašević (2026)]] proposent une alternative allégée. TEP-AIED replie Transparence, Éthique et Pédagogie en une seule structure interdépendante, fournit un tableau de lignes directrices aligné sur sept sections d'article, et demande aux auteurs d'ajouter une sous-section de méthode intitulée « Transparency, Ethics, and Pedagogy Considerations ». Leur raison est pratique : RAISE est exhaustif et trop granulaire pour un usage empirique courant. La déclaration relève de [[ai-use-disclosure]] et c'est elle qui rend vérifiables les affirmations sur la [[privacy|vie privée]] et l'[[ethics|éthique]].

La justification éducative vient en premier dans RAISE parce que l'IA n'est pas un outil neutre. La valeur dépend de l'alignement entre le problème d'apprentissage, une justification théorique et la correspondance entre objectifs et mesures de résultat. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] a constaté que, sur 14 méta-analyses auditées, toutes sauf deux définissaient le traitement comme un outil, ChatGPT, l'IA générative ou « l'IA » en général. Un nom de produit n'est pas une [[pedagogy|pédagogie]]. Traiter l'exposition à ChatGPT comme une intervention commune revient à méta-analyser les effets du « papier ».

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] font le même argument pour les études primaires. En auditant un sous-ensemble des comparaisons derrière une méta-analyse de premier plan, ils ont trouvé que seuls 21% avaient un traitement bien défini, un groupe de contrôle et une mesure d'apprentissage valide. La taille d'effet rapportée (g = 0.7) dépassait aussi celle des [[intelligent-tutoring|systèmes de tutorat intelligent]] conçus à cette fin (0.66), et cet écart est un signal d'alerte : un traitement qui surpasse un tutorat conçu à cette fin est probablement un ensemble de choses différentes portant une seule étiquette.

Le test tient en une question : un lecteur compétent pourrait-il reconstruire votre intervention à partir de la seule section des méthodes et obtenir la même chose ?

## Décider ce que votre mesure vous autorise à affirmer

Dans l'audit de preuves d'O'Neill portant sur 46 études primaires choisies au hasard, 28 (61%) présentaient des problèmes de validité. L'inadéquation de la variable dépendante était la plus fréquente (n = 15), suivie de l'inadéquation de la variable indépendante (n = 11), des problèmes de plan expérimental (n = 7), des problèmes d'extraction de données (n = 6), de l'absence de groupe de contrôle (n = 6) et de l'assignation non aléatoire des groupes (n = 6). Les résultats multidimensionnels étaient régulièrement combinés comme s'ils étaient interchangeables, les notes de test, la qualité des devoirs, la [[motivation]], le [[self-efficacy|sentiment d'efficacité personnelle]], les attitudes et l'[[student-engagement|engagement]] étant fondus en un seul chiffre de « réussite scolaire ».

Deux habitudes de rédaction l'évitent. Énoncez quel construit l'instrument mesure et qu'il a été validé pour cette population ; [[self-report-measures]] montre où les mesures fondées sur la perception divergent du comportement, et [[assessment-validity]] couvre la validité de construit. Rapportez ensuite un résultat qui ne dépende pas de la croyance de l'apprenant sur l'aide. La performance immédiate à la tâche sous assistance n'est pas un [[learning-gains|gain d'apprentissage]], et la [[cognitive-offloading|décharge cognitive]] est le mécanisme qui sépare le plus plausiblement les deux. La [[verification-quality-reliance-calibration-genai-2026|mini-revue 2026 de 493 enregistrements et 14 études prioritaires]] a constaté qu'aucune ne mesurait ensemble la réussite de la vérification et la décision de s'y fier qui suit, par rapport à un standard de qualité de production arbitré indépendamment, et que peu regardaient au-delà de la performance immédiate vers la rétention différée ou le [[transfer-of-learning|transfert]].

Énoncez explicitement le plafond dans la discussion. Une étude qui a mesuré un questionnaire passé avec l'outil ouvert peut étayer une affirmation sur la performance assistée. Elle ne peut pas étayer une affirmation sur ce que les étudiants ont appris, et cette phrase coûte une ligne.

## Rapporter l'incertitude que votre analyse comporte réellement

Pour les synthèses, rapportez le traitement des effets dépendants, la variance inter-études, les intervalles de prédiction et l'évaluation du biais de publication. L'I² seul ne suffira pas. O'Neill a trouvé une hétérogénéité rapportée sévère partout où elle était donnée, de 77.2% à 94.4% sur 13 méta-analyses, avec 12 au-dessus de 80%, et jamais résolue : aucune analyse de modérateurs n'atteignait la taille minimale de sous-groupe de dix études. Douze méta-analyses traitaient des tailles d'effet dépendantes issues de la même étude comme indépendantes, ce qui gonfle les preuves apparentes. Seules quatre rapportaient la variance inter-études (τ²) et seulement deux un intervalle de prédiction, et les deux intervalles incluaient zéro. Le biais de publication n'a été validé nulle part dans l'ensemble.

Les chiffres d'hétérogénéité ont besoin de leur modèle, car l'I² dépend de la précision. [[limitations-in-aied-research|Limitations de la recherche en IA en éducation]] documente une synthèse à I² = 82.98% sous un modèle à effets fixes et 15.75% sous effets aléatoires. Un lecteur qui ne reçoit que le premier chiffre ne peut pas dire à quel point le corpus est incohérent. Rapportez τ² et un intervalle de prédiction à côté, ce qui est aussi la convention que demande [[meta-analysis-systematic-review|la littérature de synthèse]].

Remisez ensuite votre propre chiffre vedette. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] ont combiné 1.840 tailles d'effet issues de 67 méta-analyses et ont trouvé qu'une fois le biais de publication modélisé, l'effet moyen tombe à environ un tiers de la médiane publiée (SMD = 0.196 contre 0.67), avec un intervalle de prédiction de -1.521 à +1.908. Cet intervalle va d'un préjudice substantiel à un bénéfice substantiel pour une étude nouvelle hypothétique. C'est le chiffre le plus utile de l'article et le plus susceptible d'être retiré du résumé.

## Dire jusqu'où porte l'affirmation

L'équité et la portée échouent de la même manière : un effet important qui signifie moins qu'il n'y paraît. Onze des 14 méta-analyses auditées ne fixaient aucune frontière de population, si bien que « les étudiants » allaient des enfants aux internes en médecine. Un seul cours, un seul établissement, une seule discipline ou un seul pays n'autorisent pas une affirmation générale, et les résultats obtenus avec un outil se transfèrent rarement à un autre.

Trois explications rendent compte de la plupart des effets importants, et chacune est déclarable. La nouveauté en est une. Le temps supplémentaire passé sur la tâche en est une autre. La troisième est une condition de comparaison qui recevait un enseignement habituel plutôt qu'un contrôle actif. Rapportez ce que le contrôle a réellement fait, combien de temps chaque bras a passé, et à quel point l'outil était nouveau. Énoncez aussi la frontière de population, car les effets diffèrent selon les groupes d'apprenants et c'est une frontière non énoncée qui permet à un chiffre combiné de tenir lieu de tous ; [[differential-effects-across-learner-groups|Effets différenciés selon les groupes d'apprenants]] expose cette variation.

Traitez l'outil comme une cible mouvante. Les systèmes propriétaires changent sans préavis, si bien qu'un résultat est lié à une version de modèle, et le [[benchmark|banc d'essai]] qui enthousiasmait dans une version peut ne plus tenir dans la suivante. La version et la date d'accès ont leur place dans la section des méthodes pour cette raison, et pas seulement pour la reproductibilité.

## Valider les jugements automatisés

[[ai-ed-evaluation|L'évaluation en IA en éducation]] délègue de plus en plus la notation aux modèles, ce qui fait de la procédure de validation une partie du résultat plutôt qu'une annexe. Le compte rendu de Khan Academy sur les métriques de son [[intelligent-tutoring|tuteur IA]] indique que l'engagement cognitif est noté par un juge [[llm|LLM]] calibré contre des experts pédagogiques humains à F1 0.83, et que les mouvements de ces métriques venaient de plus de 40 expériences en production en cinq mois plutôt que d'une évaluation hors ligne ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] montrent que le désaccord homme-machine sur la qualité des [[formative-assessment|questions de pré-test]] est systématique et non aléatoire, et que l'opérationnalisation de la grille compte plus que l'invite qui commence par la justification.

L'accord avec des codeurs humains est une chose distincte de la qualité, et le rapporter comme s'il s'agissait de la qualité est une cible pour les évaluateurs. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] ont fait juger par un expert indépendant 855 ensembles de codes par paires, à l'aveugle de leur source. L'accord humain-LLM s'établissait à un indice de Jaccard moyen de 0.30 contre 0.52 pour l'accord entre humains, tandis que le vérificateur à l'aveugle préférait le codage humain et le codage machine à des taux indiscernables (51.5% contre 48.5%, p = 0.537). Rapportez la cible de calibration, l'étalon de référence et qui a arbitré le désaccord. Ces trois éléments sont ce qui permet à un lecteur de décider quel poids le score automatisé peut porter.

## Déclarer les coûts et votre propre usage

Une revue de l'ensemble des articles de la conférence AIED 2025 a trouvé un schéma d'adoption des LLM sans déclaration : la plupart des projets utilisaient des LLM, et moins d'une poignée rapportaient une consommation de ressources ou une empreinte carbone. Cet article fournit une méthode open source avec des outils de mesure pour le matériel local et en nuage, plus une formule pour estimer le coût computationnel de modèles de pointe dont le nombre de paramètres n'est pas divulgué. Son argument est que ne pas rapporter ces coûts est en soi une préoccupation éthique. La gouvernance des données, le consentement, l'accessibilité et l'adéquation culturelle appartiennent au même paragraphe (éléments RAISE ; [[universal-design-for-learning]], [[accessibility]]). [[equity-ethics-pedagogical-safety-research]] porte le traitement plus complet.

Votre propre usage de l'IA dans le processus de recherche exige la même déclaration. L'[[prisma-llm-ai-assisted-systematic-reviews-2026|analyse PRISMA-LLM de Zabaleta et Lin]] portant sur 888 articles d'automatisation de revues montre à quel point cette déclaration est inégale. Depuis 2023, 38.0% des articles sur des logiciels et des produits ne rapportaient aucune évaluation, contre 9.3% des articles sur les LLM. La richesse de déclaration moyenne était de 6.3 pour les articles sur les LLM et de 3.3 pour les articles sur des logiciels et des produits. 84.1% de l'usage des LLM reposait sur des systèmes propriétaires ou hébergés, avec seulement 4.9% en poids ouverts. Leur cadre sépare la déclaration de mise en œuvre de l'évaluation sensible aux conséquences en cinq niveaux de déclaration, ce qui constitue un modèle utilisable pour décrire ce qu'un outil a fait à l'intérieur d'une revue.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai et Chan (2026)]] ajoutent le tableau côté auteur. Sur 28 chercheurs de troisième cycle, 27 utilisaient l'IA générative pour l'idéation, la revue de littérature, l'explication, le traitement des données, la programmation, la [[writing-education|rédaction académique]], l'édition et la traduction. Ils calibraient leur usage selon les enjeux et les normes disciplinaires. Les politiques de leurs établissements portaient sur l'enseignement et l'évaluation plutôt que sur la pratique de la recherche, ce qui laisse la décision de déclaration à l'auteur.

## Publier les résultats nuls, et vérifier chaque citation

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] ont vérifié 30 références fabriquées dans 14 articles, le compte dans un colloque technique passant de 3 en 2025 à 17 en 2026, soit 2.3% des articles de ce recueil cette année-là. La rédaction assistée par LLM rend une citation inventée plausible peu coûteuse à produire, et c'est pourquoi la vérification doit se faire avant la soumission plutôt qu'après l'acceptation.

Les contrepoids de cet audit comptent quand vous le citez. La plupart des références signalées étaient bénignes : 229 étaient des inadéquations de métadonnées ACM où le PDF était correct, et 188 étaient des variantes bibliographiques valides. Le compte des fabrications est délibérément une borne inférieure, et la majorité bénigne n'est pas une erreur d'arrondi. Vérifiez chaque entrée que vous ne pouvez pas contrôler vous-même.

Rapporter les résultats nuls et négatifs est l'autre moitié d'une base de preuves honnête. Bartoš et al. ont trouvé des preuves solides de résultats nuls supprimés (tous les tests d'Egger p < .0001) et une hétérogénéité extrême (τ = 0.869), aucun sous-groupe par résultat, domaine, niveau ou rôle de l'IA ne montrant de gains cohérents. Ils n'ont pas non plus trouvé de différence entre les études publiées avant et après janvier 2023, ce qui affaiblit l'affirmation selon laquelle les outils génératifs modernes produisent spécifiquement des gains.

## Ce que les chercheurs comprennent mal ici

**« Une taille d'effet est une propriété de la modalité. »** Il n'y a pas d'effet de l'IA en éducation à rapporter. Toutes les méta-analyses auditées sauf deux définissaient le traitement par un nom d'outil, seuls 21% des comparaisons auditées avaient un traitement défini, un contrôle et une mesure valide, et le g = 0.7 combiné se situait au-dessus du tutorat intelligent conçu à cette fin, à 0.66. Une taille d'effet appartient à un dispositif, à une population et à une occasion de mesure.

**« La moyenne combinée est ce qui arrivera à mes étudiants. »** La moyenne décrit l'ensemble des études, et rien en elle ne fixe une salle de classe particulière. La moyenne ajustée du biais est SMD = 0.196 et son intervalle de prédiction va de -1.521 à +1.908. L'hétérogénéité rapportée dépasse 80% dans 12 des 13 méta-analyses, et aucun sous-groupe du plus grand ensemble ne montrait de gains cohérents. Un changement au niveau de l'étudiant n'est identifiable à partir d'aucun des deux chiffres.

**« Un résultat nul signifie que l'outil ne fonctionne pas. »** Un résultat nul est une affirmation sur un dispositif à une précision donnée, et l'absence d'effet détectable dans une étude est un fait sur cette étude. Le SMD = 0.196 ajusté du biais vient d'une littérature où chaque test d'Egger était significatif, si bien que la lecture défendable du corpus est une moyenne faible et incertaine. Aucun sous-groupe par résultat, domaine, niveau ou rôle de l'IA du plus grand ensemble ne montrait non plus de gains cohérents. Le problème documenté dans cette littérature est la suppression.

**« Une étude tranche la question. »** Les taux de base disent le contraire. 61% des études primaires vérifiées présentaient des problèmes de validité, un cours ou un établissement n'autorise pas une affirmation générale, et un système propriétaire est une cible mouvante liée à une version de modèle. Une étude isolée est un point de données avec un dispositif attaché.

**« Un accord élevé avec des codeurs humains signifie que le modèle note la bonne chose. »** L'accord humain-LLM était de 0.30 contre 0.52 entre humains, et le vérificateur à l'aveugle ne pouvait pas distinguer les deux ensembles de codage, à 51.5% contre 48.5%. L'accord mesure la cohérence avec un codeur, et la qualité est une question distincte qui exige un étalon de référence et un arbitre.

## Les objections que vous entendrez

**« Les évaluateurs veulent de la nouveauté, pas des détails de méthode. »** Les revues vont dans l'autre sens. RAISE et TEP-AIED donnent aux rédacteurs en chef un construit à exiger, et la sous-section de méthode de TEP-AIED est un point d'entrée peu coûteux. Le détail de méthode est ce qui transforme un article non évaluable en article citable.

**« Nous n'avons pas la place. »** Les cinq niveaux de déclaration sont des niveaux de rapport et non des niveaux de risque, si bien que la profondeur d'évaluation peut tenir en une ou deux phrases. Version, invites et rôle tiennent dans un court paragraphe. Coût et gouvernance tiennent dans une phrase de limites.

**« Tout le monde le rapporte ainsi. »** Les chiffres disent que la norme est le problème : 61% des études primaires vérifiées présentant des problèmes de validité, 12 des 13 méta-analyses au-dessus de 80% d'hétérogénéité, 38.0% des articles sur des logiciels et des produits sans aucune évaluation.

**« Notre outil est propriétaire, nous ne pouvons donc pas déclarer le modèle. »** Déclarez la version, la date d'accès, la configuration, les invites que vous avez fournies, le rôle et les garde-fous. Si le fournisseur ne veut rien dire, cette contrainte appartient aux limites comme borne de l'affirmation.

**« Rapporter les résultats nuls nous nuira. »** Les résultats nuls supprimés sont le mécanisme documenté derrière la moyenne ajustée du biais de SMD = 0.196. Les publier est ce qui garde votre résultat positif lisible.

## À faire cette semaine

**1.** Relisez votre résumé à la lumière de votre section des méthodes et supprimez toute affirmation que la méthode ne peut pas étayer. Une phrase sur le plafond de la mesure suffit généralement.

**2.** Ajoutez le paragraphe de spécification : modèle, version, date d'accès, configuration, invites, rôle, et qui a conçu ou relu la production.

**3.** Sortez le τ², l'intervalle de prédiction et l'évaluation du biais de publication de l'annexe et mettez-les dans les résultats, ou dites clairement que vous ne les avez pas calculés.

**4.** Écrivez la frontière de population et la condition de contrôle dans l'énoncé du dispositif, y compris le temps passé par chaque bras.

**5.** Vérifiez chaque référence que vous n'avez pas lue personnellement, et contrôlez d'abord le champ des auteurs.

## Où aller ensuite

[[research-methods-aied|Méthodes de recherche en IA en éducation]] couvre les choix de dispositif qui sous-tendent ces décisions de déclaration, et [[limitations-in-aied-research|Limitations de la recherche en IA en éducation]] est le catalogue des modes de défaillance avec les chiffres attachés. [[interpreting-and-applying-aied-research|Interpréter et appliquer la recherche en IA en éducation]] est le versant lecteur du même problème, [[does-ai-help-students-learn|les preuves sur l'apprentissage durable]] sont ce que la plupart de ces mesures tentent d'atteindre, [[evaluating-ai-interventions-methods]] couvre les mesures et les dispositifs de comparaison, et [[checking-whether-educational-ai-works]] est la version courte de la question. Pour les lacunes que cette littérature n'a pas comblées, voir [[research-gaps-aied]].
