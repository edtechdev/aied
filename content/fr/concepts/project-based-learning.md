---
title: Apprentissage par projets
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
pedagogy: [active-learning, collaborative-learning, project-based-learning]
technology: [educational-robotics]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/project-based-learning
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'apprentissage par projets (PjBL)** — une [[pedagogy|pédagogie]] active et centrée sur l'apprenant dans laquelle les étudiants apprennent en s'engageant dans des projets étendus et ancrés dans le monde réel, qui exigent investigation, résolution de problèmes et application des connaissances pour produire des résultats tangibles. Le PjBL met l'accent sur l'[[agency|autonomie]] de l'étudiant, la collaboration et les [[authentic-assessment|tâches authentiques]], et est largement utilisé avec la technologie — notamment la [[educational-robotics|robotique éducative]] et l'IA — pour offrir aux apprenants des projets concrets et porteurs de sens. Il s'oppose à un enseignement purement théorique ou magistral.

## Questions à examiner

- Pensez à la dernière fois où vous avez véritablement « appris en faisant » — en construisant, concevant ou créant quelque chose de réel. Qu'est-ce qui a fait que cette expérience vous est restée, comparée à un cours magistral que vous avez subi la même semaine ? En quoi cette différence pourrait-elle se transposer à la manière dont les étudiants apprennent l'IA ou la robotique ?
- Le PjBL et l'apprentissage par problèmes sont fréquemment confondus, alors qu'ils diffèrent : l'un se centre sur la production d'un projet tangible, l'autre sur la résolution d'un problème mal structuré. Avant de lire, comment distingueriez-vous les deux — et votre réponse importe-t-elle pour la manière dont un cours devrait être conçu ?
- Une étude en robotique s'est attaquée à un « écart théorie-pratique » par un projet agile s'étendant sur un semestre. En pensant à votre propre domaine, où l'écart entre ce qui est enseigné aux étudiants et ce qu'ils savent réellement faire a-t-il tendance à s'ouvrir — et que faudrait-il à une approche par projets pour le combler ?
- Le PjBL met l'accent sur l'autonomie de l'étudiant, la collaboration et les tâches authentiques. Mais les apprenants diffèrent dans leur disposition à se diriger eux-mêmes. Que pourrait-il mal se passer si vous introduisiez des projets étendus dans une classe sans soutien à l'autodirection, et qui en souffrirait le plus ?
- Le PjBL est largement associé à la ludification et à la robotique éducative dans la recherche. D'après votre expérience, le plaisir et l'[[student-engagement|engagement]] constituent-ils toujours un indicateur fiable de l'apprentissage profond, ou un « jeu » bien noté peut-il masquer une compréhension superficielle ?
- Avant de poursuivre, demandez-vous : quelle preuve concrète vous convaincrait que l'apprentissage par projets surpasse réellement l'enseignement magistral pour un résultat d'apprentissage donné — et cette preuve est-elle difficile à réunir dans un cours réel ?

## Introduction

Le PjBL est étroitement apparenté à l'[[active-learning|apprentissage actif]], à l'[[experiential-learning|apprentissage expérientiel]], à l'[[collaborative-learning|apprentissage collaboratif]] et à la pédagogie [[constructivist|constructiviste]]. Il est particulièrement précieux pour la formation en IA et en robotique, car ces domaines sont intrinsèquement appliqués : les apprenants comprennent le mieux les robots, les algorithmes et les systèmes en les construisant et en les testant dans des contextes de projet. Le PjBL favorise également la [[computational-thinking|pensée computationnelle]], la résolution de problèmes et l'[[self-regulated-learning|autodirection]].

L'apprentissage par projets est étroitement apparenté à — mais distinct de — l'[[problem-based-learning|apprentissage par problèmes]] : tous deux sont centrés sur l'apprenant et mus par le contexte, mais l'apprentissage par problèmes se centre sur un *problème* mal structuré dont la solution exige investigation et construction de connaissances, là où l'apprentissage par projets se centre sur la production d'un *projet* ou d'un artefact tangible. Les deux sont fréquemment confondus, et de nombreux cadres de l'IA dans l'éducation puisent aux deux sources (voir la page [[problem-based-learning|apprentissage par problèmes]] pour le traitement propre à l'ère de l'IA).

### Comment le PjBL apparaît dans les recherches de la base de connaissances

- **Projets de robotique :** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] présente une approche agile de type apprentissage par projets, s'étendant sur un semestre, pour enseigner la robotique dans un programme appliqué de [[cs-education|sciences informatiques]], en répondant à l'écart théorie-pratique.
- **L'Approche par projet dans la petite enfance avec des agents d'IA :** [[creative-project-approach-ai-early-childhood-2025|Yang, Li et Lee (2025)]] étendent la forme fondatrice du PjBL — l'Approche par projet (Katz et Chard), une investigation collaborative étendue sur un sujet du monde réel — à la [[early-childhood-elementary-ai-education|petite enfance]], en proposant une **Creative Project Approach** en cinq étapes qui intègre des [[agentic-ai|agents d'IA]] et des [[educational-robotics|robots]] (robots programmables et robots sociaux génératifs) dans des projets pour favoriser l'[[creativity|apprentissage créatif]] des jeunes enfants. Les cinq étapes — identifier les besoins d'apprentissage, faciliter l'interaction enfant-robot guidée par l'[[teacher-role|enseignant]], situer l'IA dans des contextes, calibrer l'équilibre automatisation/créativité et évaluer les résultats — maintiennent l'enseignant comme facilitateur guidant l'investigation, positionnant le PjBL comme le véhicule naturel d'un usage de l'IA adapté au développement des plus jeunes apprenants.
- **Couplage avec la ludification :** [[game-based-gamified-robotics-education-review-2026|une revue systématique]] a constaté que la [[game-based-learning|ludification]] dans l'enseignement de la robotique favorisait fortement l'apprentissage par projets (p = 0,009).

La seule méta-analyse à trois niveaux de ce couplage regroupe 22 études contrôlées (66 tailles d'effet, de janvier 2023 à avril 2026) et estime un effet important du PjBL soutenu par l'IA générative, g = 0,819, IC à 95% [0,655, 0,983], bien que l'analyse de sensibilité PET-PEESE des auteurs réduise l'estimation à g = 0,378, de sorte que le chiffre phare doit être lu comme potentiellement gonflé ([[chen-pbl-pjbl-genai-meta-analysis-2026|Chen et coll. 2026]]). Le type d'outil modérait significativement l'effet (QM = 14,301, p < 0,001) : un agent conversationnel général utilisé directement obtenait une valeur regroupée plus élevée (g = 0,970) que les systèmes personnalisés en plateformes de cours, patients virtuels ou agents (g = 0,455), ce qui suggère que la manière dont un outil est intégré compte davantage que le choix du modèle.
- **Littératie en IA et co-conception :** le PjBL sous-tend de nombreuses interventions de [[ai-literacy|littératie en IA]] et de [[teacher-education|formation des enseignants]], où les apprenants co-créent des outils ou des ressources d'IA.
- **PjBL logiciel soutenu par des agents d'IA :** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka et coll. (2026)]] ont intégré le Spec-Driven Development avec des [[agentic-ai|agents d'IA]] dans un cours de PjBL logiciel en équipe de premier cycle, structurant les projets en phases d'investigation, de planification, de mise en œuvre et de revue, assorties de contrôles de compréhension menés par l'enseignant.
- **Studios VR immersifs avec un agent d'enseignement intégré :** [[ai-ive-pbl-vocational-design-creativity-2026|Jin et coll. (2026)]] spécifient le modèle **AI-IVE-PBL** pour l'enseignement du design en filière professionnelle, associant le PjBL à un environnement virtuel immersif doté d'IA (casques [[virtual-and-augmented-reality|VR]] et assistant pédagogique adossé à un [[llm|LLM]]). Les contraintes coutumières du PjBL pour les apprenants de filière professionnelle — équipement limité, scénarios difficiles à reproduire, [[scaffolding|étayage]] tardif de l'enseignant — sont absorbées par l'immersion et par un agent présent en séance, et le modèle est énoncé comme une boucle en cinq phases (découverte, envisagement, modélisation, communication, raffinement) avec un acteur et un artefact nommés par phase, mue par un discours soutenu de développement d'idées. Dans une quasi-expérience de 12 semaines (n = 63), la condition a accru la capacité de design et la capacité créative et a relevé l'[[student-engagement|engagement]] cognitif et comportemental, tout en laissant inchangée la nouveauté idéationnelle (pensée innovante) et l'engagement affectif — un rappel que les volets propres au design et les volets idéationnels de la valeur d'un projet n'évoluent pas de concert.

Le PjBL se relie à l'[[active-learning|apprentissage actif]], à l'[[experiential-learning|apprentissage expérientiel]], à l'[[collaborative-learning|apprentissage collaboratif]], à la [[educational-robotics|robotique éducative]], à l'[[game-based-learning|apprentissage par le jeu]], à la [[computational-thinking|pensée computationnelle]] et aux pédagogies de l'[[higher-ed|enseignement supérieur]] et de l'[[k-12|enseignement primaire et secondaire]].

- **Le PjBL soutient l'apprentissage de la robotique assistée par IA.** Les [[educational-robotics-pathways-2026|recherches Pathways]] montrent que les programmes de robotique et d'IA fondés sur le projet laissent les lycéens apprendre par l'engagement dans une pratique réelle, la conception et l'expression créative ludique.

## Le PjBL dans les cours de littératie en IA

- **Mesurer le PjBL dans les cours de littératie en IA.** Zhu et Kong (2026) ont développé et validé une échelle d'apprentissage par projets en IA (AI-PBLS) ancrée dans les expériences d'étudiants du secondaire et de l'université de Hong Kong, et l'ont utilisée pour montrer que le PjBL perçu favorise la satisfaction à l'égard des cours de littératie en IA par les mécanismes médiateurs de l'autonomisation dans la [[problem-solving|résolution de problèmes]] par l'IA et de la [[ethics|conscience éthique]] liée à l'IA. L'échelle offre aux [[research-methods-aied|chercheurs]] un instrument validé, et le constat de médiation renforce le cas du PjBL comme véhicule qui construit la confiance et le raisonnement éthique — et pas seulement des contenus — dans l'[[ai-education|éducation à l'IA]].

### Le PjBL avec la narration numérique à l'ère de l'IA

- L'apprentissage par projets associé à la [[storytelling-in-education|narration numérique]] offre une réponse pédagogique à l'[[generative-ai|IA générative]] dans la formation artistique et en design. Une étude de cas intégrée de 15 semaines menée auprès de 426 étudiants de premier cycle a mis en œuvre un cadre PjBL-DS dans lequel la narration numérique servait de méthodologie principale permettant aux étudiants de traduire le patrimoine culturel local en récits [[multimodal|multimodaux]] chargés d'émotion, en cultivant les capacités créatives qui font défaut à l'IA.

## Concepts liés

- [[problem-based-learning]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[computational-thinking]]
- [[higher-ed]]
- [[pedagogy]] — Ensemble : pédagogies et stratégies d'enseignement dans l'éducation à l'IA
- [[arts-design-and-media-education]]
## Articles liés
- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — L'apprentissage par problèmes et par projets comme cadres prometteurs pour l'éducation soutenue par l'IA générative : données émergentes d'une revue systématique et d'une méta-analyse à trois niveaux
- [[pbl-structural-conditions-ai-2026]]
- [[genai-counter-learner-groupthink-2025]]
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[game-based-gamified-robotics-education-review-2026]] — Enseignement de la robotique par le jeu et ludifié
- [[genai-literacy-training-teacher-education-dbr-2026]] — Formation à la littératie en IA pour les enseignants
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[white-wu-robotics-ai-education-2026]] — Robotique et IA dans l'éducation
- [[educational-robotics-pathways-2026]] — Chemins vers l'apprentissage de la robotique éducative assistée par IA (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — Le PjBL est une stratégie dominante d'apprentissage de la pensée computationnelle
- [[creative-project-approach-ai-early-childhood-2025]] — La Creative Project Approach : agents d'IA et robotique au sein de l'Approche par projet dans la petite enfance (Yang, Li et Lee 2025)
- [[spec-driven-development-ai-agents-sdpbl-2026]] - SDD avec agents d'IA dans le PjBL logiciel en équipe
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL : un studio de design VR immersif doté d'un agent d'enseignement intégré, évalué par rapport au PjBL traditionnel (Jin et coll. 2026)
