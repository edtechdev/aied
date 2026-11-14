---
title: "Histoire de l'IA en éducation"
created: "2026-08-23T13:00:00-04:00"
updated: "2026-11-13T19:05:00-05:00"
type: concept
foundations: [agency, ai-education, history-of-aied]
pedagogy: [constructivist, learning-theories]
technology: [generative-ai, intelligent-tutoring]
confidence: high
translation_of: concepts/history-of-aied
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-01"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Histoire de l'[[ai-education|IA en éducation]]** — l'étude de la manière dont l'intelligence artificielle et l'éducation ont coévolué depuis le milieu du XXe siècle, et dont les choix conceptuels, terminologiques et de conception du passé continuent de façonner les débats d'aujourd'hui sur l'IA dans l'apprentissage. Plutôt que de traiter l'IA générative comme une force soudaine et sans précédent, une lentille historique révèle des tensions récurrentes — contrôle contre autonomie, standardisation contre [[creativity|créativité]], automatisation contre augmentation — qui structurent l'IA en éducation depuis ses origines.

## Questions à examiner

- L'IA générative d'aujourd'hui est souvent décrite comme une révolution sans précédent. Comment ce cadrage (le « chronocentrisme ») pourrait-il nous empêcher de voir les schémas récurrents qui se trouvent derrière elle ?
- Le domaine a failli s'appeler « cybernétique » plutôt qu'« intelligence artificielle ». Comment ce seul choix de dénomination aurait-il pu façonner la question de savoir si nous voyons les machines comme des intelligences indépendantes ou comme des éléments de systèmes de rétroaction interconnectés ?
- L'histoire de l'AIED est une tension entre le contrôle (les tuteurs cognitifs d'Anderson optimisant l'instruction) et l'autonomie (le constructionnisme de Papert donnant du pouvoir aux apprenants). Où se situent vos propres choix en matière d'IA en éducation sur ce spectre — et pourquoi ?
- La personnalisation a deux sens : varier le chemin vers un même résultat, ou permettre des résultats divers et dirigés par l'apprenant. Quel type de personnalisation votre établissement poursuit-il réellement, et lequel pensez-vous qu'il devrait poursuivre ?
- Si les débats actuels sur l'IA générative « reflètent » ces tensions historiques, quelles erreurs passées pourrions-nous être en train de répéter — et qu'est-ce que nous pourrions éviter en nous en souvenant ?
- Les choix de conception technique intègrent des jugements de valeur sur la finalité de l'apprentissage. Pouvez-vous identifier une décision de conception dans un outil d'IA éducative que vous avez employé, qui ait discrètement favorisé la standardisation au détriment de l'[[agency|autonomie de l'apprenant]] — ou l'inverse ?

## Introduction

L'histoire du domaine n'est pas une progression linéaire, mais une série de décisions contingentes dont les effets résonnent encore. Comprendre cette histoire met en garde contre le « chronocentrisme » (le biais consistant à traiter les développements actuels comme uniques en leur genre révolutionnaires), aide à éviter de répéter les erreurs passées, et révèle comment les choix de cadrage et de terminologie — et pas seulement la technologie — orientent la trajectoire de l'IA en éducation.

### Les fils historiques clés

**De la cybernétique à l'« intelligence artificielle ».** Lorsque John McCarthy a planifié le Dartmouth Summer Research Project de 1956, il a délibérément choisi le terme *intelligence artificielle* plutôt que *cybernétique* — en partie pour distancier le domaine de Norbert Wiener et de son intérêt pour la rétroaction analogique. Cette décision de dénomination a cadré les capacités des machines en comparaison directe avec la cognition humaine (cadrage anthropomorphique), orientant les priorités de recherche, la perception publique et le débat éthique pendant des décennies. Si le domaine avait conservé le cadrage cybernétique, l'article imagine que nous parlerions aujourd'hui de « systèmes d'apprentissage cybernétiques », mettant l'accent sur la rétroaction et l'interconnexion plutôt que sur des « tuteurs IA » positionnant la machine comme une source indépendante d'intelligence.

**La révolution cognitive et les racines des systèmes de tutorat intelligent.** Les pionniers — Herbert Simon, Allen Newell, Marvin Minsky, John Anderson — ne faisaient pas que modéliser la cognition ; ils étudiaient des questions fondamentales sur l'apprentissage et l'instruction. Leurs travaux ont produit des modèles de traitement de l'information de la cognition humaine devenus fondateurs pour la psychologie de l'éducation, et ont conduit aux [[intelligent-tutoring|systèmes de tutorat intelligent (ITS)]], ancrés dans les paradigmes de la recherche heuristique et des systèmes experts de l'IA des années 1960–70. Ces systèmes s'alignaient naturellement sur les structures existantes d'évaluation et de standardisation, et ont fini par coalescer en la communauté AIED.

**Contrôle contre autonomie : Anderson et Papert.** Deux visions concurrentes ont émergé, [[embodied-learning|incarnées]] par John Anderson et Seymour Papert. Les [[intelligent-tutoring|tuteurs cognitifs]] d'**Anderson** (théorie ACT/ACT-R) décomposaient le savoir en règles de production, fournissaient une rétroaction individualisée précise, et renforçaient les structures éducatives traditionnelles — une vision de l'IA comme outil d'optimisation de l'instruction. Le **[[constructivist|constructionnisme]]** de **Papert** (Logo, les « micromondes », le débogage comme apprentissage) voyait les ordinateurs comme des environnements où les enfants construisent le savoir par l'expérimentation créative — une vision de l'IA comme instrument d'autonomisation intellectuelle qui défiait les hiérarchies institutionnelles. Cette « tension essentielle » entre contrôle et autonomie est le fil conducteur de l'histoire du domaine.

**Deux formes de personnalisation.** La [[personalized-learning|personnalisation]] a deux interprétations distinctes qui se calquent sur ces visions. La première maintient des résultats uniformes tout en variant le chemin (enracinée dans les machines à enseigner de Skinner ; la vision de Khan Academy d'un tutorat menant à la maîtrise). La seconde embrasse des résultats divers — les apprenants poursuivant des intérêts et des talents individuels, sans être contraints par les frontières du [[curriculum-design|programme]] standard (Zhao, 2024). Le modèle des systèmes de tutorat intelligent soutient la première ; le constructionnisme, la seconde.

**Leçons pour l'ère de l'IA générative.** Les débats d'aujourd'hui sur l'IA générative reflètent étroitement ces tensions historiques. L'IA générative est souvent positionnée comme un tuteur intelligent de nouvelle génération (prolongeant Anderson), soulevant des inquiétudes quant à la surveillance, la collecte de données et la standardisation. Alternativement, elle peut être un outil d'autonomie créative (prolongeant Papert), nous obligeant à repenser l'évaluation et à accepter des résultats plus ambigus. Comme le concluent [[mishra-control-vs-agency-history-2025|Mishra et coll.]], les forces institutionnelles favorisent à répétition les approches qui renforcent les structures existantes — et le langage et les métaphores que nous choisissons façonneront les possibilités futures. Le cadre AI×Ed de [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian et Doroudi]] donne un ancrage empirique à cette intuition : en situant des articles des actes de l'AIED (1985, 1993, 2021, 2024) et de l'IJAIED (2004, 2014, 2021) selon deux axes — le rôle de l'IA (outil appliqué contre analogie de l'intelligence humaine) et l'utilisateur final — ils retracent un domaine passé d'un mélange diversifié, comportant au début une recherche substantielle employant l'IA comme analogie de l'intelligence humaine (modèles computationnels de l'apprentissage, micromondes de Papert, modèles à base d'agents de l'acquisition de connaissances), vers un intérêt quasi exclusif pour les usages appliqués et instrumentaux dans les années 2000. Fait notable, l'ère de l'IA générative semble inverser partiellement cette trajectoire : à l'AIED 2024, trois des quatre articles du quadrant « l'IA comme analogie » du domaine reposaient sur les grands modèles de langue, y compris des travaux récompensés du meilleur article sur les [[learning-by-teaching|agents enseignables]] fondés sur les grands modèles de langue.

**Les archives de la revue basculent deux fois.** Un modèle thématique structurel portant sur 5 387 articles de *Computers & Education* (1976–2026) a trouvé l'IA dans 390 enregistrements (7.2%), répartis sur 17 de ses 18 thèmes. La probabilité annuelle qu'un article porte sur l'IA a augmenté de 21.8% par an jusqu'en 1989, a baissé de 3.7% par an jusqu'en 2018, puis a grimpé de 40.1% par an jusqu'en 2025 ([[wu-fifty-years-ai-reach-computers-education-2026|Wu et al., 2026]]). Le basculement de 2018 précède ChatGPT de quatre ans : l'ère générative a donc accéléré une tendance déjà en cours plutôt que d'en amorcer une.

## L'impact récent de l'IA générative

L'arrivée de l'[[generative-ai|IA générative]] — une large famille qui inclut les [[llm|grands modèles de langue]] (texte), ainsi que des générateurs d'images, d'audio et de vidéo — marque le point d'inflexion le plus lourd de conséquences dans l'histoire de l'AIED depuis la fondation du domaine. Les grands modèles de langue en sont le membre le plus en vue et le moteur de la majeure partie de l'impact en classe, mais l'IA générative dans son ensemble (capable de produire des textes, des images, des sons et du code inédits) est la force plus large qui refaçonne l'éducation. Elle se comprend le mieux au regard de l'histoire de l'AIED plutôt que comme une rupture nette. Plusieurs traits distinguent l'ère de l'IA générative :

**L'échelle et la portée.** À la différence des tuteurs cognitifs et des systèmes de tutorat intelligent des décennies antérieures, qui opéraient dans des cadres contrôlés de laboratoire et de classe, les grands modèles de langue ont atteint des centaines de millions d'apprenants et d'éducateurs en quelques mois après leur sortie, entrant presque immédiatement dans l'écriture quotidienne, les devoirs et l'instruction. Le débat sur l'IA générative est passé des revues spécialisées aux salles de classe, aux conseils d'administration et aux assemblées législatives à une vitesse sans précédent.

**Un nouveau type de capacité.** Les systèmes d'AIED antérieurs modélisaient la cognition et délivraient une instruction structurée (la tradition d'Anderson). Les grands modèles de langue accomplissent une génération ouverte — produisant dissertations, explications, code et dialogues — ce qui met au premier plan l'autonomie et la créativité de l'apprenant (la tradition de Papert) d'une manière dont les systèmes de tutorat intelligent antérieurs étaient incapables. C'est pourquoi le moment présent ravive si fortement la tension contrôle-autonomie : le même outil peut être déployé comme un tuteur intelligent de nouvelle génération (contrôlant les résultats) ou comme un co-rédacteur créatif et un partenaire de réflexion (amplifiant l'autonomie).

**Une inversion de l'équation d'accès.** Historiquement, le tutorat personnalisé était rare et coûteux ; l'IA générative a rendu le soutien individuel adaptatif presque gratuit et universel — abaissant fortement les barrières d'accessibilité et de coût qui structuraient l'AIED antérieure. Mais elle a aussi introduit de nouveaux risques : [[bias-mitigation|biais algorithmiques]], [[hallucination-risk|hallucination]], surveillance, collecte de données, et déqualification des éducateurs.

**Un regain d'intérêt pour la littératie en IA et les usages abusifs.** L'ère de l'IA générative a rendu la [[ai-literacy|littératie en IA]] urgente et recadré les débats sur l'[[academic-integrity|intégrité académique]] (détection contre dialogue), tout en ranimant des préoccupations de longue date sur l'automatisation, la standardisation et la dépendance épistémique. Ce sont là les expressions modernes des tensions originelles du domaine.

**Le risque du chronocentrisme.** Comme l'avertissent [[mishra-control-vs-agency-history-2025|Mishra et coll.]], l'emballement autour de l'IA générative manque souvent de conscience historique, laissant les évangélistes de la technologie dominer la conversation. Comprendre que les débats actuels sur l'IA générative font écho au clivage Anderson–Papert et à la décision de dénomination de 1955 sur la cybernétique nous aide à faire des choix délibérés plutôt qu'à traiter le présent comme inévitable. La vraie question n'est pas de savoir ce que les outils d'IA générative peuvent faire, mais ce que nous voulons qu'ils fassent — une décision façonnée par le chemin parcouru.

## Implications

- **Lisez l'emballement historiquement.** Reconnaissez que chaque nouvelle vague d'IA est cadrée comme révolutionnaire ; la conscience historique révèle la continuité et aide à résister à la domination de la conversation par les entreprises.
- **Voyez les choix de conception comme des choix de valeur.** Les décisions techniques relatives à l'IA en éducation intègrent des positions idéologiques sur la finalité de l'apprentissage — mettez-les au jour et interrogez-les.
- **Pesez délibérément le contrôle contre l'autonomie.** La question de savoir si l'IA devrait optimiser vers des résultats standards ou permettre des résultats divers et dirigés par l'apprenant est un choix authentique, aux conséquences institutionnelles et politiques, et non une donnée technique.
- **Préservez l'autonomie de l'apprenant.** La résistance récurrente à la standardisation et au contrôle en faveur d'approches ouvertes et centrées sur l'apprenant est un fil durable qui vaut la peine d'être défendu.

## Idées fausses courantes

**« L'IA en éducation a commencé avec ChatGPT. »** Non, et cette croyance coûte cher parce qu'elle rend invisible tout ce que les périodes antérieures ont appris. Les [[intelligent-tutoring|tuteurs intelligents]] descendent des travaux de recherche heuristique et de systèmes experts des années 1960 et 1970, et la communauté AIED s'est constituée autour d'eux des décennies avant les [[llm|grands modèles de langage]]. [[mishra-control-vs-agency-history-2025|Mishra et al.]] montrent que les débats actuels reproduisent une division déjà explicite chez les tuteurs cognitifs d'Anderson et le constructionnisme de Papert : un lecteur qui date le champ de 2022 redécouvrira des arguments que le champ avait tranchés, abandonnés ou perdus une première fois.

**« Le champ a progressivement abandonné l'IA-comme-analogie au profit d'outils appliqués, et l'IA générative prolonge cette tendance. »** La trajectoire est réelle mais non monotone, ce qui en fait la correction la plus instructive. L'analyse positionnelle de [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian et Doroudi]] portant sur AIED 1985, 1993, 2021 et 2024 et sur IJAIED 2004, 2014 et 2021 montre bien une dérive d'un champ mixte vers une instrumentalité appliquée quasi exclusive dans les années 2000. Mais à AIED 2024, trois des quatre communications du quadrant IA-comme-analogie reposaient sur des LLM, dont un travail primé sur des agents enseignables fondés sur les LLM. L'IA générative **inverse** en partie la tendance plutôt qu'elle ne la prolonge, ce qui explique pourquoi la traiter comme « le prochain tuteur intelligent » se trompe sur l'endroit où la frontière de la recherche s'est réellement déplacée.

**« La personnalisation signifie adapter la difficulté à chaque apprenant. »** Ce n'est que l'un de deux sens incompatibles, et les confondre masque un choix politique. Dans le premier sens, le résultat est tenu fixe et seul le chemin varie, lignée qui va des machines à enseigner de Skinner aux tuteurs fondés sur la maîtrise. Dans le second, les résultats eux-mêmes se diversifient, les apprenants poursuivant des intérêts individuels sans être contraints par un programme standard (Zhao, 2024). Un [[intelligent-tutoring|STI]] met en œuvre le premier ; le [[constructivist|constructionnisme]] le second. Un outil décrit comme « personnalisé » ne vous a rien dit tant que vous ignorez lequel des deux il désigne.

**« Le terme "intelligence artificielle" était simplement le nom évident du champ. »** Ce fut un choix délibéré. Lorsque McCarthy prépara le projet de Dartmouth en 1956, il préféra *intelligence artificielle* à *cybernétique*, en partie pour distancier ces travaux de la tradition du retour analogique de Wiener. Cette décision unique a cadré les machines en comparaison directe avec la cognition humaine, et le cadrage anthropomorphique qu'elle a installé façonne encore les priorités de recherche, le langage des produits et les questions éthiques que pose le public.

## Mettre en pratique

**Pour les enseignants et les concepteurs pédagogiques**

- Nommez la tradition à laquelle appartient votre outil avant de l'adopter. Demandez-vous s'il optimise vers des résultats fixes ou s'il ouvre la direction à l'apprenant, car c'est cette réponse, et non la liste des fonctionnalités, qui déterminera ce qu'il fera à votre [[assessment|conception de l'évaluation]].
- Interrogez le mot « personnalisé » dans chaque argumentaire de fournisseur, et exigez une réponse en termes des deux sens ci-dessus. Un produit qui fait varier le rythme vers un standard commun et un produit qui laisse les étudiants diverger ne sont pas substituables.
- Quand les étudiants présentent l'IA générative comme inouïe, l'histoire est elle-même un contenu enseignable. Le cadrage Anderson-Papert leur donne un vocabulaire pour discuter de l'IA plutôt que seulement l'utiliser.

**Pour les développeurs**

- Le langage de l'interface est une décision de conception qui a une lignée. Appeler votre système un « tuteur IA » hérite du cadrage d'Anderson et de l'attente d'optimisation vers des résultats standard ; l'appeler un « micro-monde » ou un « environnement d'apprentissage » hérite de celui de Papert. Aucun n'est neutre : choisissez délibérément.
- Si vous construisez dans la tradition de l'analogie (modèles de l'apprentissage, agents enseignables, [[simulation|simulations]] de l'acquisition de connaissances), dites-le. Ce quadrant est resté presque vide pendant deux décennies et se repeuple ; ce positionnement est un facteur de différenciation et les critères d'évaluation sont différents.

**Pour les chercheurs**

- Utilisez les actes historiques comme référence plutôt que de traiter le présent comme la seule comparaison disponible. Les actes d'AIED pour 1985, 1993, 2021 et 2024 et ceux d'IJAIED pour 2004, 2014 et 2021 constituent un échantillon longitudinal tout prêt des propres affirmations du champ.
- Citez la lignée lorsque vous revendiquez une nouveauté. Une affirmation selon laquelle un système « personnalise l'apprentissage » ou « modélise l'apprenant » n'est nouvelle que par rapport à une tradition antérieure précise, et cette tradition est documentée.

## Concepts liés

- [[ai-education]]
- [[intelligent-tutoring]]
- [[constructivist]]
- [[agency]]
- [[personalized-learning]]
- [[generative-ai]]
- [[learning-theories]]
- [[adaptive-learning]]
- [[ai-literacy]]
- [[creativity]]
- [[teacher-role]]
- [[ethics]]

## Articles liés

- [[mishra-control-vs-agency-history-2025]] — Contrôle contre agentivité : explorer l'histoire de l'IA en éducation
- [[prezenski-human-centered-ai-aided-learning]] — Apprentissage assisté par IA centré sur l'humain (prolonge l'héritage d'Anderson)
- [[cognitive-commons-ai-expertise-regeneration]] — Les communs cognitifs et l'expertise en IA (cadrage historique)
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[lak2026-hint-button-unproductive-use]] — Revisiter le bouton d'indice dans les tuteurs cognitifs
- [[socrates-students-instructors-llms-lbt-2025]] — L'apprentissage par l'enseignement avec les LLM (la lignée constructiviste de Papert)
- [[rismanchian-ai-education-four-decades-aixed-2026]]

- [[wu-fifty-years-ai-reach-computers-education-2026]] — Cinquante ans de thématiques de Computers & Education : la prévalence de l'IA a basculé à la hausse après 2018, quatre ans avant ChatGPT
