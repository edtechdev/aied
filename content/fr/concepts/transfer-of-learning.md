---
title: "Transfert des apprentissages"
created: "2026-05-07T18:02:28-04:00"
updated: "2026-10-10T03:26:18-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [desirable-difficulties, metacognition, scaffolding, transfer-of-learning]
technology: [intelligent-tutoring]
level: [k 12]
confidence: high
translation_of: concepts/transfer-of-learning
source_updated: "2026-10-01T09:59:06-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Transfert des apprentissages** — la mesure dans laquelle des connaissances ou des compétences acquises dans un contexte (par exemple, la pratique avec un outil d'IA) persistent et s'appliquent dans un contexte différent (par exemple, une performance indépendante sans l'outil). Dans l'[[ai-education|IA en éducation]], le transfert est la question ouverte centrale : les gains de performance que les étudiants montrent *avec* les outils d'IA se traduisent-ils en apprentissages durables qu'ils peuvent démontrer *sans* eux.

## Questions à examiner

- Voici un schéma frappant que la page documente : les étudiants montrent souvent des gains immédiats sur des tâches assistées par IA, mais ces gains peuvent s'évanouir — voire s'inverser — lorsque l'IA est retirée. Avant de lire les explications, pourquoi, selon vous, un outil qui aide clairement sur le moment pourrait-il finalement laisser les étudiants plus mal lotis sans lui ?
- Rappelez-vous quelque chose que vous avez appris à faire avec un tuteur, une calculatrice ou un assistant, puis que vous avez dû faire seul. La compétence s'est-elle transférée, ou vous sentiez-vous dépendant de l'aide ? Qu'est-ce qui différenciait les expériences qui se transféraient bien de celles qui ne se transféraient pas ?
- Une intuition courante veut que « la pratique est la pratique » — que faire une tâche avec de l'aide développe la même compétence que la faire seul. En quoi cette intuition peut-elle induire en erreur, surtout lorsque l'aide est une IA qui accomplit le raisonnement à votre place au lieu de vous y guider ?
- La page établit une distinction entre les « effets avec » une technologie et les « effets de » celle-ci — mieux performer en utilisant l'outil, par opposition à devenir plus capable sans lui. Si vous êtes enseignant, concepteur ou étudiant, lequel de ces deux est votre véritable objectif, et comment sauriez-vous que vous l'avez atteint ?
- Les données suggèrent que la quantité de travail cognitif que vous déléguez importe : délester les tâches de surface comme la grammaire nuit moins au transfert que délester le raisonnement profond et la structure. Pensez à la dernière fois que vous avez utilisé l'IA sur un devoir. Quelle « couche » avez-vous déléguée, et que prédit votre choix sur ce que vous retiendriez ?
- La page propose des conditions susceptibles de favoriser un transfert positif — des [[pedagogy|garde-fous pédagogiques]] ([[guardrails|garde-fous]]), un soutien qui s'estompe, une calibration à la préparation de l'apprenant. Si vous conceviez (ou étiez l'utilisateur d') un outil d'apprentissage par IA, qu'exigeriez-vous pour que les gains obtenus en l'utilisant deviennent une capacité durable sans lui ?

## Introduction

Le transfert des apprentissages est une préoccupation fondamentale en éducation [[research-methods-aied|recherche]], et les outils d'IA l'ont rendue urgente. Le schéma empirique déterminant documenté à travers les études sur l'IA en éducation est un **paradoxe du transfert** : les étudiants qui utilisent l'IA montrent typiquement des gains immédiats et mesurables sur les tâches où l'IA est disponible, mais ces gains échouent souvent à persister — voire s'inversent — lorsque l'IA est retirée et que les étudiants doivent démontrer leur compréhension de manière indépendante. Ce schéma met en cause le [[cognitive-offloading|sur-appui]], la théorie de la charge cognitive et la [[metacognition]] comme mécanismes à l'œuvre, et il se rattache directement aux débats sur la conception de l'[[intelligent-tutoring|tutorat par IA]].

L'état de préparation n'est pas le transfert : la pratique orale assistée par IA a été associée à une anxiété à l'oral plus faible et à une plus grande volonté de communiquer avec des humains, mais aucune des deux études n'a observé de prise de parole humaine réelle, laissant la voie qui mène de la répétition avec l'IA à la capacité communicative humaine à l'état de proposition pédagogique non testée ([[ai-speaking-practice-communicative-readiness-2026|Wang & Li (2026)]]).

### Le paradoxe du transfert

Les étudiants qui utilisent l'IA montrent typiquement des **gains immédiats et mesurables** sur les tâches où l'IA est disponible. Pourtant, lorsque l'IA est retirée :

- Les effets deviennent **mitigés ou négatifs**
- Les gains **ne se transfèrent souvent pas** à des contextes non évalués
- Les étudiants peuvent devenir **dépendants de l'outil** au détriment du raisonnement indépendant

Le corpus de données probantes, synthétisé dans la revue [[stanford-evidence-base-ai-k12-2026|Stanford Evidence Base on AI in K-12]], est cohérent d'un domaine à l'autre :

| Étude | Contexte | Effet immédiat | Effet de transfert | Mécanisme |
|---|---|---|---|---|
| Bastani et al. (2025) | Mathématiques au lycée | Notes de pratique plus élevées | **~17% moins bien** aux examens finaux à livre fermé | Le chatbot généraliste faisait le travail |
| Chen et al. (2025) | Devoirs de programmation | Scores de devoirs plus élevés | **Aucune amélioration** aux examens sans assistance | Le tuteur [[llm]] résolvait les problèmes à la place des étudiants |
| Lehmann et al. (2025) | Programmation | Davantage de sujets couverts | **Compréhension dégradée** ; écarts creusés | IA générale pour des apprenants à faibles connaissances préalables |
| Stadler et al. (2024) | Recherche académique | Accomplissement plus rapide des tâches | **Raisonnement de moindre qualité** que la recherche | Engagement cognitif [[student-engagement|réduit]] |
| Kosmyna et al. (2025) | Rédaction de dissertation | Qualité de dissertation plus élevée | **83% n'ont pas pu se rappeler** leurs propres citations | Auteur externalisé |

Les cinq études montrent un schéma de **transfert négatif ou nul** lorsque l'intervention est une IA généraliste.

### Mécanismes qui minent le transfert

**Déplacement métacognitif.** Le fait que l'IA accomplisse le raisonnement réduit les occasions pour les étudiants de surveiller leur propre compréhension et de choisir des stratégies. Les étudiants qui avaient utilisé l'IA étaient moins capables d'expliquer leurs réponses lorsqu'on les interrogeait. Cela rejoint la recherche sur la [[metacognition]] en matière d'auto-surveillance et les [[vibe-compiler-metacognition-genai-agency-2026|données montrant que les cours structurés augmentent la compétence métacognitive, contrairement aux assistants LLM bruts]].

**Suppression de la charge germane.** L'IA généraliste réduit non seulement la charge cognitive extrinsèque (distrayante), mais aussi la charge *germane* — l'effort mental productif qui encode une connaissance durable. Une pratique plus facile procure un meilleur ressenti mais laisse des traces plus faibles. Voir la théorie de la charge cognitive et la distinction entre le [[stanford-evidence-base-ai-k12-2026|tutorat spécifique et l'IA généraliste]].

**Sur-appui / effet d'expertise inversé.** Des novices à qui l'on donne des réponses ne construisent pas de schémas. L'IA généraliste fournit des réponses ; le tutorat efficace fournit des guidances structurées. Lorsque des novices reçoivent des raccourcis de niveau expert, l'apprentissage est perturbé — le principe des [[desirable-difficulties]] à l'envers.

**Performance dépendante de l'outil.** Les étudiants peuvent optimiser pour les affordances spécifiques de l'outil d'IA ([[prompt-engineering|l'ingénierie des invites]], la dépendance à la structure de code générée) plutôt que de bâtir une généralisation disciplinaire — une forme de [[cognitive-offloading-speedup-illusion|délestage cognitif]] qui semble productive mais qui déplace l'apprentissage durable.

Une classe protégée peut aussi inculquer une mauvaise habitude : [[shi-genai-experiential-learning-management-education-2026|Shi, Dai & Zhang (2026)]] avertissent que les simulations dont les règles sont fixées à l'avance filtrent l'incertitude et renforcent le respect des règles, de sorte que les habitudes de décision qui s'y forment peuvent devenir un handicap cognitif lorsque les étudiants rencontrent des intérêts concurrents et une information incomplète dans des contextes réels.

**Délestage sensible à la couche et transfert.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] teste directement la distinction « effets avec / effets de la technologie » de Salomon, Perkins & Globerson dans la rédaction assistée par [[generative-ai|IA générative]] : une quasi-expérience de huit semaines a montré que la collaboration ouverte avec l'IA maximisait la performance de rédaction assistée, mais produisait les *plus faibles* résultats de transfert proche indépendant, sans IA, tandis qu'un soutien borné accompagné de réflexion préservait la compétence indépendante. Les couches de délestage plus profondes (raisonnement, structure) prédisaient un transfert moins bon que les couches de surface (grammaire). C'est la preuve directe, en classe, que les gains de performance obtenus *avec* le soutien de l'IA ne se transfèrent pas à la performance indépendante obtenue *sans* ce soutien — et que la profondeur de la délégation, et pas seulement le fait d'utiliser l'IA, façonne le transfert.

Un exemple complémentaire, bien que confondu, vient de la [[physics-education|physique]] : la refonte par l'université de la Ruhr à Bochum d'un cours d'introduction à la physique nucléaire et des particules ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al., 2026]]) a permis à des étudiants de mener à bien, avec l'aide de l'IA, des problèmes de recherche collaboratifs et riches en ressources, mais ces mêmes étudiants obtenaient en moyenne 20,6/80 à un examen écrit conventionnel sans aide, plusieurs tentatives sérieuses n'ayant pas pu mener à bien des calculs standard. Les auteurs y lisent la preuve que la performance assistée ne se transfère pas automatiquement à la performance non sollicitée, et leur remède est un choix délibéré de conception : faire de l'examen écrit le seul déterminant de la note, publier à l'avance les problèmes de tutorat pour que le temps de cours devienne une discussion préparée, et ajouter une préparation préalable, des exemples résolus et de la consolidation autour du travail exploratoire où l'IA est permise.

## Conditions favorisant un transfert positif

Les données limitées suggèrent que le transfert est possible lorsque :

- **Des garde-fous pédagogiques sont présents** — indices étape par étape, ciblage des [[misconceptions|idées fausses]], [[socratic-method|questionnement socratique]] (variante tutorat de Bastani et al., 2025)
- **Les stratégies traditionnelles sont préservées** — la prise de notes associée à l'usage de l'IA a amélioré la rétention (Kreijkes et al., 2026)
- **L'IA est utilisée pour la pratique [[formative-assessment|formative]], et non [[summative-assessment|sommative]]** — de l'étayage pendant l'apprentissage, pas pendant l'évaluation
- **Le format de pratique correspond à la connaissance transférée.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] constatent que les gains de la pratique par récupération échouent fréquemment à se transférer à des problèmes non familiers — ils renforcent la mémoire d'une procédure sans permettre son emploi dans de nouveaux contextes — et qu'une généralisation durable à des applications nouvelles exige d'associer la pratique à des exemples résolus qui soutiennent l'induction de la compétence ; le ratio optimal exemples–problèmes dépend donc de savoir si le contenu est un fait littéral ou une compétence généralisable.
- **L'expertise de l'apprenant est calibrée** — l'outil adapte le soutien à la préparation, au lieu de fournir par défaut une assistance complète

- **Le transfert comme critère qui sépare l'apprentissage de l'assistance.** [[yan-agentivism-learning-theory-ai-2026|Yan et Gašević (2026)]] bâtissent leur théorie de l'apprentissage humain-IA autour du transfert sous soutien réduit : la performance assistée ne compte comme apprentissage que si la capacité persiste une fois le soutien retiré, ce qui fait du transfert le test plutôt qu'un résultat parmi d'autres. Leur proposition est directionnelle : exiger la vérification des sources ou une justification pendant le travail assisté par IA devrait améliorer la performance différée, tandis qu'une délégation répétée à faible friction, sans reconstruction, devrait affaiblir la calibration par les apprenants de leur propre compétence.

- **Le guidage est colocalisé avec le travail.** En contraste avec le schéma de transfert négatif du tableau ci-dessus, une comparaison portant sur 36 participants a montré que les apprenants assistés par un robot de bureau maintenaient leur score à 7,0/10 une fois l'aide retirée, tandis que les apprenants assistés par ChatGPT chutaient à 4,4/10, soit un score de transfert à court terme supérieur de 60% ([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). Le résultat porte sur un transfert à court terme mesuré environ 35 minutes après la tâche, sans test de rétention différée, auprès de 36 participants sur un seul campus.

Cela rejoint la recherche sur l'[[intelligent-tutoring|tutorat par IA]] montrant que les outils spécifiques au tutorat, dotés de garde-fous pédagogiques, surpassent les [[conversational-ai|chatbots]] généralistes, ainsi que les principes de [[scaffolding|étayage]] concernant l'estompage du soutien à mesure que la compétence grandit.

### Questions sans réponse

1. **Échelle de temps :** le transfert s'améliore-t-il au fil de semaines ou de mois d'utilisation, ou la dépendance s'aggrave-t-elle ?
2. **Différences entre domaines :** le transfert est-il meilleur dans les domaines bien structurés (mathématiques) que dans les domaines mal structurés (rédaction) ?
3. **Différences individuelles :** les étudiants à [[prior-knowledge|connaissances préalables]] élevées souffrent-ils moins d'une perte de transfert que les novices ?
4. **Remédiation des compétences :** des séances de pratique explicitement « sans IA » peuvent-elles inverser la dépendance à l'outil ?

### Connexions avec les concepts liés

Le transfert des apprentissages est lié à la [[metacognition]] (auto-surveillance de la compréhension), à la théorie de la charge cognitive (charge germane vs extrinsèque), aux [[desirable-difficulties|difficultés souhaitables]] (lutte productive), à l'[[scaffolding|étayage]] (soutien qui s'estompe), au [[cognitive-offloading|sur-appui]] (dépendance à l'outil) et à l'[[sociocultural-learning|apprentissage socioculturel]] (l'IA généraliste opère en dehors de la ZPD en accomplissant le travail à la place des étudiants). Il est le pont entre la performance assistée et l'apprentissage authentique — la distinction entre le [[stanford-evidence-base-ai-k12-2026]] et la question centrale de l'efficacité de l'[[intelligent-tutoring|tutorat par IA]].

## Concepts liés

- [[pedagogical-patterns]] — Le résultat auquel ces séquences sont en fin de compte jugées
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[self-regulated-learning]]
- [[learning-theories]]
- [[productive-failure]] — Échec productif
## Articles liés
- [[yan-agentivism-learning-theory-ai-2026]] — Une théorie d'apprentissage de niveau intermédiaire pour l'interaction humain-IA, avec quatre mécanismes et six propositions testables (Yan et Gašević 2026)

- [[layer-sensitive-cognitive-offloading-writing-2026]] — Délestage cognitif sensible à la couche dans la rédaction assistée par IA générative (Chen 2026)
- [[stanford-evidence-base-ai-k12-2026]]
- [[educational-llm-alignment]]
- [[cognitive-offloading-speedup-illusion]]
- [[vibe-compiler-metacognition-genai-agency-2026]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Distinction performance-apprentissage et transfert durable
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pilotage pédagogique des LLM pour l'échec productif
- [[rachatasumrit-example-problem-ratio-2026]]
- [[ai-particle-physics-education-redesign-2026]] — L'IA dans l'enseignement de la physique des particules : problèmes de recherche et compétences fondamentales
- [[shi-genai-experiential-learning-management-education-2026]] — soutient que des simulations de classe protégées peuvent former des habitudes de décision qui échouent en dehors d'elles

- [[ai-speaking-practice-communicative-readiness-2026]] — La pratique orale assistée par IA a accru la volonté de communiquer avec des humains, mais aucune étude n'a observé de prise de parole humaine
- [[aifred-desk-robotic-ai-guidance-2026]] — AIfred : apprentissage augmenté par incarnation robotique fonctionnelle au bureau
