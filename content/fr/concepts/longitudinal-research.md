---
title: Recherche longitudinale
created: "2026-11-12T14:28:00-05:00"
updated: "2026-11-13T19:05:00-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [longitudinal-research, research-methods-aied, quantitative-research]
contributors: [editor]
translation_of: concepts/longitudinal-research
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **La recherche longitudinale** — les conceptions qui mesurent les mêmes unités de façon répétée dans le temps, afin que le changement *à l'intérieur* d'une personne, d'une classe ou d'un établissement puisse être séparé des différences *entre* eux. Dans l'[[ai-education|IA en éducation]], le travail longitudinal est ce qui transforme les affirmations sur l'adoption, la croissance des compétences et l'engagement d'instantanés en trajectoires : quatre semestres d'enquêtes en formation des enseignants montrant une hausse de l'usage de l'[[generative-ai|IA générative]], un semestre de données d'autorégulation montrant une baisse des connaissances [[metacognition|métacognitives]] sous la pression de l'évaluation, cinq vagues de données d'engagement dont les pentes évoluent ensemble. Sa valeur n'est pas qu'elle mesure davantage, mais qu'elle peut poser une question à laquelle une mesure unique ne peut répondre — qu'est-ce qui change, pour qui, et à quel rythme.

## Questions à examiner

- Une enquête transversale constate que les étudiants qui utilisent davantage l'IA rapportent une auto-efficacité plus élevée. Qu'est-ce qui pourrait expliquer cela autrement, et quelle conception séparerait les explications ?
- Le terme « longitudinal » sert souvent pour toute étude comportant deux points de mesure. Qu'établit une paire pré/post, et qu'est-ce qu'elle laisse ouvert ?
- Le modèle de panel de Xu sépare un trait stable d'une fluctuation propre à l'occasion. Pourquoi cela importe-t-il pour une affirmation selon laquelle la littératie de la rétroaction cause l'engagement ?
- Les outils d'IA changent pendant une étude : les modèles sont mis à jour, des fonctionnalités apparaissent, des licences expirent. Qu'est-ce que cela fait à une conception qui suppose un traitement constant ?
- L'attrition n'est pas aléatoire. Comment une étude devrait-elle rendre compte d'un semestre où un cinquième de l'échantillon a abandonné ?
- Un semestre est long pour un cours et court pour un développement. Quelles affirmations sur l'IA exigent des années, et lesquelles se règlent en semaines ?

## Introduction

La recherche longitudinale est une famille de conceptions plutôt qu'une méthode : enquêtes répétées sur la même cohorte, études de panel, modèles de courbes de croissance, comparaisons de cohortes, échantillonnage d'expériences et analyses de données de journal qui s'accumulent sur un semestre. Ce qui les unit est l'unité d'analyse — le même apprenant, la même classe ou le même établissement observé plus d'une fois — et le gain inférentiel qui en découle.

Ce gain est souvent surestimé. Le corpus contient une centaine d'articles qui se décrivent comme longitudinaux, et ils vont d'analyses de tendance sur quatre semestres à une seule comparaison pré/post. L'étiquette est devenue un signal de qualité, ce qui rend utile la précision sur ce que chaque conception soutient. Une enquête répétée peut montrer qu'une distribution s'est déplacée. Un modèle de panel peut montrer qu'une personne s'est déplacée par rapport à sa propre ligne de base. Un modèle de croissance peut montrer que le rythme du déplacement diffère entre les personnes et que deux processus évoluent ensemble. Seules certaines conceptions dotées d'une mesure de résultat aux deux extrémités peuvent commencer à traiter la question de savoir si l'outil a causé le changement.

Les études les plus solides établissent moins que leurs étiquettes ne le suggèrent, et les familles de conceptions diffèrent par ce que chacune peut soutenir.

## Changement intra-individuel et différence inter-individuelle

La distinction qui fait le plus de travail est celle entre un trait stable et un état propre à l'occasion. Xu (2026) a mesuré la [[feedback-literacy|littératie de la rétroaction par l'IA]] et l'[[student-engagement|engagement agentique]] chez 480 étudiants de premier cycle chinois à trois reprises, à six semaines d'intervalle, et a utilisé un modèle de panel croisé à intercept aléatoire pour séparer les deux niveaux. La corrélation des traits stables était de r = 0.315 (p < 0.001) ; les chemins croisés intra-individuels racontaient une autre histoire sur le construit qui bougeait en premier. Sans cette séparation, une corrélation transversale entre les deux aurait été rapportée comme preuve d'une relation, et elle aurait été ambiguë : les personnes globalement plus littératiées en rétroaction peuvent aussi être globalement plus engagées, sans que l'une change l'autre.

C'est la contribution centrale de la conception. La plupart des questions de cette littérature — la rétroaction par l'IA construit-elle l'engagement, la dépendance érode-t-elle l'autorégulation, l'usage prédit-il le bien-être — sont des questions sur le changement, et une mesure unique ne peut répondre à une question sur le changement, quelle que soit la taille de l'échantillon.

## Trajectoires et ce qui covarie avec elles

La modélisation de la croissance pose une autre question : non pas si une personne diffère de son niveau habituel, mais quelle forme prend le changement et si deux processus de changement sont liés. Zhang et Tang ont interrogé 850 étudiants de premier cycle en musique dans quatre universités chinoises à cinq reprises au cours d'un semestre, en mesurant l'engagement en classe, le flow et l'intelligence émotionnelle musicale auto-perçue dans des classes assistées par l'IA. Les trois ont progressé au fil des cinq vagues, et les pentes ont évolué ensemble : la pente de l'engagement corrélait à 0.39 avec celle du flow et à 0.22 avec celle de l'intelligence émotionnelle.

Le résultat est corrélationnel sur les pentes, non causal sur les outils, et les auteurs le présentent ainsi. Sa valeur est qu'il situe le changement dans un rythme plutôt que dans un niveau, ce qui est le type d'affirmation sur laquelle un concepteur de curriculum peut agir : si l'engagement monte plus vite là où le flow monte plus vite, la question de conception devient ce qui produit le flow au départ.

## Tendances d'adoption et d'attitude

Une troisième famille suit une population plutôt qu'un processus de croissance. Parker, Loper, Carter, Hayes et Karakas ont analysé quatre semestres de données d'enquête auprès de plus de 300 étudiants d'un programme américain du Midwest de [[teacher-education|formation des enseignants]], en retraçant l'usage de l'IA générative et les perceptions éthiques après le lancement de ChatGPT. L'usage a nettement augmenté — la préparation aux évaluations de 57 % à 83 %, l'étude de 44 % à 76 % — tandis que les positions éthiques sont devenues plus incertaines plutôt que de se stabiliser, et que les perceptions différaient selon les sous-groupes.

Il s'agit d'une conception transversale répétée : le même programme, pas nécessairement les mêmes étudiants. Elle établit une tendance dans une population, ce qui est exactement ce dont une question de politique a besoin, et elle ne peut établir le changement individuel. La distinction importe lorsque la tendance est lue comme un développement : une hausse de l'usage déclaré d'un semestre à l'autre peut refléter l'arrivée de nouvelles cohortes dotées de normes différentes autant que le changement des mêmes étudiants.

## État, trait et la forme d'un semestre

L'étude de Song et coll. sur un semestre auprès de 75 étudiants universitaires de première année montre pourquoi la question intra-individuelle mérite d'être posée pour des construits habituellement traités comme des aptitudes. Les lignes de base individuelles des étudiants en [[self-regulated-learning|apprentissage autorégulé]] étaient stables, mais leurs connaissances métacognitives et leur [[well-being|bien-être]] ont décliné systématiquement au fil du semestre, suivant les exigences du curriculum telles que les échéances des évaluations majeures. Une preuve de concept a montré qu'un [[llm|LLM]] pouvait recevoir un contexte propre à chaque étudiant pour soutenir la régulation au moment où elle était nécessaire.

La lecture pratique est qu'un trait mesuré une seule fois aurait masqué le déclin. La lecture méthodologique est que « stable » et « inchangé » sont des affirmations différentes, et que seule la mesure répétée les distingue.

## Les familles de conceptions et ce que chacune coûte

- **Enquête répétée sur une cohorte.** Les mêmes étudiants, plusieurs vagues. Établit le changement individuel ; vulnérable à l'attrition et aux effets de test.
- **Transversale répétée (tendance).** La même population, un nouvel échantillon à chaque vague. Établit le changement de population ; ne peut suivre les individus.
- **Modèle de panel à effets décalés.** Vagues espacées pour modéliser l'ordre, avec séparation du trait et de l'état. Établit la préséance temporelle ; exige un espacement et une taille d'échantillon adéquats.
- **Modèle de courbe de croissance.** Trois vagues ou plus modélisant l'ordonnée à l'origine et la pente. Établit la forme et le rythme du changement, ainsi que la covariation entre processus.
- **Quasi-expérience longitudinale.** Conditions comparées sur des mesures répétées, comme dans l'étude de neuf semaines de Melanou et coll. auprès de 87 étudiants dans trois conditions d'IA, où les connaissances ont progressé dans tous les groupes (F(1, 50) = 29.8) et où le niveau antérieur modérait le bénéfice. Établit si une condition modifie une trajectoire ; toujours pas d'assignation aléatoire.
- **Échantillonnage d'expériences et panels de journaux.** Mesures fréquentes in situ ou données de traces. Établit des dynamiques fines ; faible pour les construits exigeant de la réflexion.

## Les menaces qui mordent dans les études sur l'IA

Quatre problèmes reviennent, et les deux derniers sont propres à ce domaine.

**L'attrition.** Les étudiants qui se désengagent quittent l'étude, si bien que les vagues ultérieures surreprésentent les engagés. Une trajectoire estimée à partir des survivants peut pencher vers le haut alors que la cohorte dans son ensemble ne le fait pas.

**Les effets de test et d'instrumentation.** L'exposition répétée au même instrument modifie les réponses, en particulier pour les mesures auto-déclarées d'attitudes et d'usage.

**La dérive des outils.** Un outil d'IA n'est pas un traitement fixe. Les modèles sont mis à jour, les interfaces changent, les licences institutionnelles sont retirées en cours de semestre. Une étude qui couvre un semestre mesure un objet en mouvement, et peu d'articles rapportent les changements de version.

**La performance assistée prise pour de l'apprentissage.** Un gain mesuré avec l'outil disponible peut montrer ce que l'apprenant sait faire avec un soutien, non ce qu'il a intériorisé. La distinction est la même que celle qui sépare l'[[scaffolding|étayage]] du développement, et les conceptions longitudinales ne la résolvent pas, sauf si les vagues ultérieures incluent une mesure non assistée.

## Implications pour la pratique

Les enseignants peuvent cesser de lire une enquête unique de fin de semestre comme la preuve qu'un changement a fonctionné. Une distribution qui s'est déplacée entre deux semestres peut refléter une nouvelle cohorte, un nouveau régime d'évaluation ou un instrument qui a perdu sa nouveauté. Une comparaison des mêmes étudiants avec leurs propres scores antérieurs répond à une question plus étroite et plus utile.

Les responsables de programme peuvent planifier l'évaluation par vagues. Trois mesures ou plus sur un programme permettent à un département d'estimer une pente plutôt que de comparer deux points, et rapporter l'attrition à chaque vague empêche une moyenne en hausse de masquer les étudiants qui sont partis.

Les responsables du développement pédagogique peuvent évaluer le développement professionnel de la même manière, avec des mesures répétées et au moins une tâche réalisée sans l'outil. Une série d'ateliers qui élève la confiance et l'usage tout en laissant la performance non assistée inchangée a montré quelque chose sur les attitudes, et la distinction mérite d'être rapportée aux personnes qui financent la série suivante.

Les administrateurs peuvent consigner ce qui a changé pendant une étude ou un projet pilote : versions de modèles, changements de licence, mises à jour d'interface. Un semestre suffit pour que l'outil devienne un autre traitement, et la documentation coûte peu face à l'explication d'un saut inexpliqué.

Les chercheurs peuvent maintenir deux affirmations distinctes dans leurs propres écrits. L'ordre temporel étaye la préséance, non la causalité, et une paire pré/post est un plan à mesures répétées plutôt qu'une trajectoire.

## Ce que les conceptions longitudinales ne peuvent pas faire

Elles n'établissent pas la causalité à elles seules. L'ordre temporel est nécessaire mais non suffisant : une variable non mesurée qui change selon le même calendrier — un nouveau régime d'évaluation, une réforme du curriculum, un effet de cohorte — peut produire le même schéma. Elles coûtent cher en temps des participants, ce qui plafonne la taille des échantillons et impose souvent l'auto-déclaration. Et un semestre est court : les questions développementales, au sens où la [[developmental-psychology|psychologie du développement]] emploie le terme, exigent des années, et presque rien dans cette littérature ne les couvre.

## Comment cela apparaît dans la recherche

Les exemples les plus solides se concentrent dans l'enseignement supérieur, où un semestre fournit un cadre naturel : le panel à trois vagues de Xu, le modèle de croissance à cinq vagues de Zhang et Tang, le semestre de données d'autorégulation de Song, la quasi-expérience de neuf semaines de Melanou. La formation des enseignants apporte l'étude de tendance. Le travail longitudinal au niveau scolaire est plus mince, et l'article sur le LMS au collège qui porte « longitudinal » dans son identifiant est une proposition de conception plutôt qu'une étude longitudinale — un rappel que l'étiquette dans un titre n'est pas la conception.

## Relation avec les autres méthodes

Les conceptions longitudinales s'inscrivent dans la [[quantitative-research|recherche quantitative]] et partagent ses problèmes de mesure. Elles sont souvent associées aux [[mixed-methods-research|méthodes mixtes]] lorsque la question est de savoir pourquoi une trajectoire s'est infléchie. Elles diffèrent des [[rct|expériences randomisées]] en ce qu'elles observent une variation naturelle dans le temps plutôt que de l'assigner, et de la [[design-based-research|recherche fondée sur la conception]] en ce qu'elles n'itèrent pas sur une intervention — la DBR explique comment faire fonctionner quelque chose dans un contexte, le travail longitudinal explique ce qui a changé et quand. L'[[learning-analytics|analyse de l'apprentissage]] fournit les données de traces qui rendent possible une analyse longitudinale fine sans enquêtes répétées.

## Idées fausses courantes

- **« Deux points de mesure font d'une étude une étude longitudinale. »** Une paire pré/post est une conception à mesures répétées ; elle ne peut estimer une trajectoire, et elle ne peut généralement pas séparer le changement des effets de test.
- **« Longitudinal signifie causal. »** L'ordre dans le temps est nécessaire mais non suffisant ; les effets de cohorte, les réformes concurrentes et les mises à jour d'outils produisent tous du changement sans que le traitement en soit la cause.
- **« Un grand échantillon corrige une fenêtre courte. »** La taille de l'échantillon concerne la précision, non le temps nécessaire à un processus développemental ou institutionnel pour se déployer.
- **« Même programme signifie mêmes personnes. »** Les transversales répétées suivent une population, non des individus ; les deux soutiennent des affirmations différentes.
- **« Les tendances auto-déclarées sont des tendances d'attitude. »** L'usage déclaré et la position déclarée évoluent avec les normes et avec l'instrument autant qu'avec le comportement.

## Concepts liés

- [[research-methods-aied]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[rct]]
- [[design-based-research]]
- [[learning-analytics]]
- [[self-report-measures]]
- [[limitations-in-aied-research]]
- [[interpreting-and-applying-aied-research]]
- [[developmental-psychology]]
- [[self-regulated-learning]]
- [[student-engagement]]

## Articles liés

- [[ai-feedback-literacy-agentic-engagement-panel-2026]] — Un panel à trois vagues séparant le trait de l'état (Xu)
- [[zhang-tang-ai-music-classroom-engagement-longitudinal-2026]] — Modèle de croissance à cinq vagues de l'engagement, du flow et de l'intelligence émotionnelle
- [[longitudinal-ai-usage-ethics-policy-teacher-education-2026]] — Quatre semestres d'usage de l'IA générative et de perceptions éthiques en formation des enseignants
- [[song-genai-learning-partner-srl-over-time-2026]] — Étude d'autorégulation sur un semestre montrant un déclin sous la pression de l'évaluation
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — Quasi-expérience longitudinale de neuf semaines dans trois conditions d'IA
- [[ai-lms-middle-school-longitudinal]] — Proposition de LMS intégrant l'IA au collège (conception, non étude longitudinale)
