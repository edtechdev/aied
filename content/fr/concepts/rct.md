---
title: ECR (essai contrôlé randomisé)
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/rct
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'essai contrôlé randomisé (RCT)** — un dispositif de recherche dans lequel les participants sont répartis au hasard entre une condition expérimentale et une condition témoin afin d'estimer l'effet causal d'une intervention sur un résultat. Dans l'[[ai-education|IA dans l'éducation]], les ECR constituent l'étalon-or pour établir si un outil d'IA ou une approche [[pedagogy|pédagogique]] *cause* des [[learning-gains|gains d'apprentissage]], des changements d'engagement ou d'autres résultats, plutôt que de simplement leur être corrélée.

## Questions à examiner

- Si une école vous dit que « les étudiants qui ont utilisé l'outil d'IA ont obtenu de meilleurs scores », pourquoi cela pourrait-il encore ne pas prouver que l'outil a causé le gain — même si la différence est importante ?
- La randomisation équilibre les facteurs de confusion connus *et inconnus* entre les groupes. Avant de lire, qu'accomplit l'affectation aléatoire que la simple comparaison de deux classes intactes ne peut accomplir, aussi bien appariées qu'elles paraissent ?
- La page qualifie l'ECR d'étalon-or mais énumère de réels coûts : des cadres artificiels, une IA en évolution rapide qui vieillit les essais, de petits échantillons sous-dimensionnés et des contraintes [[ethics|éthiques]] sur le fait de priver les étudiants d'outils utiles. Lequel de ces arbitrages pensez-vous qu'on ignore le plus souvent dans les titres de la recherche en éducation ?
- Un ECR réunissant 1 174 participants a constaté que l'[[generative-ai|IA générative]] comblait environ les trois quarts d'un écart de productivité lié à la formation. Mais un ECR bien mené peut tout de même porter sur une tâche étroite dans un cadre artificiel. Que devriez-vous vérifier au sujet de la *mesure du résultat* avant de faire confiance à l'affirmation causale ?
- Considérez directement le problème éthique : si vous aviez de bonnes raisons de croire qu'un [[intelligent-tutoring|tuteur IA]] aide les étudiants à apprendre, est-il défendable de le refuser au hasard à la moitié d'une classe pendant un semestre ? Comment concevriez-vous une étude éthiquement irréprochable qui isole tout de même la cause ?

## Introduction

La randomisation est ce qui distingue un ECR des autres dispositifs : en répartissant au hasard les apprenants entre les conditions, un ECR équilibre les facteurs de confusion connus et inconnus entre les groupes, de sorte que toute différence observée dans les résultats peut être attribuée à l'intervention avec une forte validité interne.

### Comment les ECR apparaissent dans la recherche

- **Les micro-ECR comme réponse à une technologie en évolution rapide :** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et coll. (2026)]] soutiennent que les grands essais conventionnels ne peuvent suivre le rythme des [[edtech-platform|plateformes]] de tutorat qui changent sensiblement au cours d'une étude, et utilisent des micro-essais contrôlés randomisés menés par des [[teacher-role|enseignants]] dans des établissements secondaires anglais (644 des 929 étudiants ayant passé le post-test, g = 0,33) pour garder l'estimation causale reproductible. Les arbitrages sont énoncés dans leur propre dispositif : 30,7% d'attrition, des résultats alignés sur le [[curriculum-design|curriculum]] plutôt que standardisés de manière indépendante, et seulement quatre semaines de suivi.
- **Affirmations d'efficacité causale :** les ECR en AIED testent si un tuteur d'IA, un outil ou un traitement pédagogique améliorent les résultats. [[generative-ai-education-productivity-gaps|Une expérience randomisée sur l'IA générative]] réunissant 1 174 participants a constaté que l'IA générative réduit substantiellement les écarts de productivité liés à la formation, comblant environ les trois quarts de la différence de performance initiale — une estimation causale claire de l'effet de l'IA.
- **Comparaison à l'étalon-or :** la page sur les [[research-methods-aied|méthodes de recherche]] situe les ECR comme le dispositif le plus solide du point de vue de la validité interne, tout en notant leurs arbitrages — coût, conditions artificielles, évolution rapide de l'IA, petits échantillons souvent sous-dimensionnés et limites éthiques au fait de priver un groupe témoin d'une IA potentiellement utile.

- **Un essai conçu pour l'équivalence, et non pour la différence.** [[studentbench-ai-human-tutoring-gre-2026|Northcutt et coll. (2026)]] ont réparti au hasard 2 383 adultes entre tutorat par IA, tutorat humain en direct ou un témoin vidéo, ont rédigé de nouveaux items de GRE avec d'anciens concepteurs d'épreuves de l'ETS et de Kaplan pour écarter la contamination par des tests publiés, ont contrebalancé les deux formes et ont testé l'équivalence par deux tests unilatéraux contre ±0,25 écart-type plutôt que la différence — les choix de dispositif qui font qu'un « aucune différence significative » devient un résultat interprétable.
- **Randomisation par groupe, faible adoption, et ce que signifie alors une estimation en intention de traiter.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et coll. (2026)]] ont randomisé 2 379 étudiants de premier cycle répartis en 13 blocs en affectant les *enseignants* plutôt que les étudiants, de sorte que chaque étudiant d'une section héritait de la condition de son enseignant — le dispositif qui rend faisable un essai de déploiement multi-sections, et celui qui crée les problèmes d'inférence que l'étude documente ensuite. Seuls environ 15% des étudiants des sections traitées ont un jour utilisé l'outil, de sorte que les effets rapportés estiment l'*offre* d'accès plutôt que son usage ; les auteurs lisent l'intervention comme l'usage plus large de l'IA que son introduction a induit, et traitent les sessions individuelles comme une question distincte. Parce que le traitement était affecté au niveau de l'enseignant, l'inférence repose sur 34 grappes — un cadre dans lequel des erreurs-types robustes en grappes exagèrent la précision — de sorte que l'article rend compte d'une inférence par randomisation en regard de celles-ci et conclut que ses résultats sont robustes. Les deux effets phares — une chute de 0,37 écart-type des notes finales dans l'échantillon à correspondance exacte et une chute de 0,90 écart-type de la participation enregistrée sur la plateforme dans les deux échantillons — sont des conséquences au niveau de la section qu'une randomisation par étudiant du même outil n'aurait pas pu isoler sans contamination entre camarades traités et témoins.
- **L'adoption borne ce qu'un essai peut tester, et le soutien à l'engagement n'est pas un dosage.** [[access-not-enough-ai-tutoring-2026|Robinson et coll. (2026)]] ont mené deux ECR sur une plateforme de lecture dans lesquels seuls 60,7% et 53,3% des étudiants témoins ont un jour utilisé la plateforme ; un tuteur d'engagement a augmenté de 71 à 80% le nombre d'histoires lues sans produire de gain de réussite, ce qui correspond aux 2 à 5 minutes par semaine atteintes.
- **Une échelle qui convertit les résultats nuls en preuves.** [[mata-sustaining-ai-enabled-student-support-2026|Mata et coll. (2026)]] ont suivi 8 708 étudiants sur huit semestres avec une puissance permettant de détecter des effets de 0,05 écart-type et ont trouvé des mouvements importants et immédiats sur des tâches binaires datées — 34 points de pourcentage d'inscriptions supplémentaires avant le 16 août après un unique rappel — tandis que la performance académique, la persévérance et l'obtention du diplôme ne montraient aucun effet détectable. L'échelle est la leçon de conception : à cet N, les résultats nuls académiques sont des résultats précis plutôt que des échecs de détection, ce qui autorise la conclusion qu'un outil de communication influe sur ce qu'il peut adresser et non sur des résultats d'apprentissage cumulatifs.
- **Une moyenne nulle peut masquer une hétérogénéité qui se compense.** Un ECR pré-enregistré randomisant 538 enseignants dans 24 écoles turques au niveau du département de l'établissement a constaté que la réussite chutait de 0,129 écart-type parmi les enseignants en dessous de la médiane tandis qu'elle montait de 0,054 parmi ceux au-dessus, et que la motivation chutait de 0,111 écart-type, un examen comprimé par un effet plafond (moyenne du groupe témoin 89,2/100) limitant la puissance. ([[genai-can-harm-teaching-rct-2026|Sungu, Lira et Duckworth (2026)]])
- **Un pré-enregistrement qui fixe la question et l'effet détectable.** [[chatbot-outreach-course-performance-2026|Meyer et coll. (2026)]] ont enregistré les deux essais de cours auprès du Registry of Efficacy and Effectiveness Studies, s'engageant par avance sur une estimation en intention de traiter et sur une taille d'effet minimale détectable d'environ 0,157, et ont randomisé les étudiants consentants à chaque trimestre avec une seconde vague lors de la période d'ajout/abandon, de sorte que les inscrits tardifs entraient dans le dispositif plutôt que dans l'échantillon d'analyse par défaut. En regroupant 2 483 étudiants sur deux cours, l'effet se situe au seuil du test A/B (quatre points de pourcentage), tandis que le changement de note numérique regroupé ne survit pas à la correction des comparaisons multiples — un rappel qu'un critère d'évaluation principal pré-enregistré discipline lequel, parmi plusieurs résultats corrélés, est cru.
- **Randomisation à l'intérieur de sections intactes, avec une mesure de référence avant traitement.** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni et Fryer (2026)]] ont randomisé 454 étudiants de premier cycle au sein de trois sections intactes de marketing après la période d'ajout/abandon et ont mesuré les quatre résultats à T1, avant qu'aucun étudiant n'ait accès à l'agent conversationnel, de sorte que la comparaison sur tout le trimestre repose sur une référence mesurée plutôt que supposée. Le résultat plat (aucune interaction groupe × temps n'a atteint la significativité ; le plus fort effet rapporté était d = 0,050, sur l'intérêt) est rendu compte aux côtés de l'adoption — 0,89 connexions par semaine pour une consigne d'une par semaine — ce qui empêche qu'un résultat nul portant sur un traitement faiblement utilisé soit lu comme un résultat nul portant sur l'outil.
- **Croisement intra-sujet, et un groupe témoin placé au meilleur niveau de pratique.** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et coll. (2025)]] ont fait travailler chacun des 194 étudiants en sciences de la vie de Harvard sur deux leçons de physique — une fois lors d'une séance d'[[active-learning|apprentissage actif]] en classe et une fois avec le tuteur d'IA du cours, dans un ordre contrebalancé avec des pré- et post-tests autour de chacune — de sorte que chaque étudiant sert de son propre témoin et que la comparaison des *modes de dispensation* n'est pas confondue avec l'affectation de chacun. Le second choix du dispositif compte autant : le comparateur était l'apprentissage actif fondé sur la recherche plutôt qu'un cours magistral, de sorte que l'avantage (médiane du post-test 4,5 contre 3,5) est mesuré par rapport à la meilleure pratique actuelle et ne peut être lu comme « l'IA bat l'enseignement ».

### Forces et limites

- **Forces :** l'inférence causale la plus solide ; une mesure nette des résultats ; le soutien à l'estimation des tailles d'effet ; l'équilibrage des facteurs de confusion par la randomisation.
- **Limites :** coûteux et lent ; des cadres artificiels peuvent réduire la validité écologique ; les outils d'IA évoluent plus vite que les essais ne peuvent être menés ; de petits échantillons sous-dimensionnent souvent la détection d'effets significatifs ; des contraintes éthiques pèsent sur le fait de priver un groupe témoin d'une IA potentiellement bénéfique. Deux de ces limites changent de forme lorsque l'affectation est en grappes : l'échantillon effectif devient le nombre de *grappes* plutôt que le nombre d'étudiants, de sorte qu'un essai peut être grand en effectif et mince selon cette mesure — les 2 379 étudiants de Liu et coll. reposent sur 34 grappes au niveau de l'enseignant — et lorsque l'adoption est volontaire et faible, une estimation en intention de traiter répond à la question de savoir si l'offre de l'outil a changé les résultats, et non à celle de savoir si son usage l'a fait.

Pour un traitement plus complet du dispositif expérimental dans l'IA éducative — y compris sur les cas où un ECR convient plutôt qu'un dispositif quasi expérimental, par enquête ou computationnel — voir [[research-methods-aied]].

## Concepts liés

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]
- [[student-support-and-success]] — le dispositif derrière les preuves les plus solides en matière de soutien aux étudiants

## Articles liés

- [[generative-ai-education-productivity-gaps]] — L'IA générative comble-t-elle les écarts de productivité liés à la formation ? Données issues d'une expérience randomisée
- [[genai-can-harm-teaching-rct-2026]] — L'IA générative peut nuire à l'enseignement : un ECR
- [[access-not-enough-ai-tutoring-2026]] — L'accès ne suffit pas : le soutien humain améliore l'engagement envers le tutorat par IA
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Évaluer le tutorat par IA au rythme de l'innovation : micro-essais randomisés menés par des praticiens d'une plateforme de tutorat par IA en sciences (GCSE)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench : le tutorat par IA et le tutorat humain produisent des gains d'apprentissage équivalents au GRE
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Randomisation par groupe selon l'enseignant : une chute de 0,37 écart-type des notes finales et de 0,90 écart-type de la participation sur la plateforme, avec 15% d'adoption et une inférence sur 34 grappes (Liu et coll. 2026)
