---
title: "Grands modèles de langue (LLM)"
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T04:00:01-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
translation_of: concepts/llm
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Grands modèles de langue (LLM, Large Language Models)** — des modèles de [[machine-learning|réseaux neuronaux]] entraînés sur de vastes corpus de texte qui génèrent du texte semblable à celui d'un humain, et qui alimentent la plupart des applications modernes d'[[ai-education|IA en éducation]]. Les grands modèles de langue sont l'épine dorsale computationnelle du tutorat génératif, de l'évaluation et de la génération de contenu en éducation.

## Questions à examiner

- Que croyez-vous qu'un [[conversational-ai|agent conversationnel]] d'IA « sait » lorsqu'il vous répond ? La page présente les grands modèles de langue comme produisant du texte probable plutôt que comme récupérant des faits vérifiés — en quoi cette distinction change-t-elle la confiance que vous accorderiez aux explications d'un modèle ?
- Les grands modèles de langue sont décrits comme le moteur de la plupart des outils d'IA éducative modernes — tutorat, notation, génération de contenu, et même diagnostic de ce que les étudiants savent. Parmi ces usages, lesquels vous paraissent les plus et les moins appropriés pour un générateur de texte probabiliste, et pourquoi ?
- La page rapporte que trois grands modèles de langue différents ont produit des plans de soutien fortement divergents pour une même entrée d'analytique de l'apprentissage, chacun avec des hypothèses démographiques différentes. Si les modèles ne sont pas interchangeables comme conseillers, qu'est-ce que cela signifie pour une institution qui en adopte un ?
- Parce que la production des grands modèles de langue est sensible aux invites et aux réglages, deux personnes peuvent obtenir des résultats très différents d'un même modèle. Comment cela devrait-il influencer votre manière de formuler les demandes — en tant qu'apprenant ou concepteur — et la confiance que vous accordez à une production isolée ?
- Une limite clé est l'hallucination — un contenu plausible mais non fondé. Dans un contexte de tutorat ou de notation, que faudrait-il pour que vous soyez sûr que le modèle n'invente pas, et quelles garanties exigeriez-vous avant de le laisser évaluer un vrai étudiant ?

## Introduction

### Les grands modèles de langue comme moteur de l'AIED

Les grands modèles de langue sont le concept le plus référencé dans la base de connaissances (plus de 60 articles) parce qu'ils sous-tendent presque toutes les applications d'IA éducative :

- **Tutorat :** les [[intelligent-tutoring|tuteurs d'IA]] utilisent les grands modèles de langue pour le dialogue, l'explication et l'accompagnement à la [[problem-solving|résolution de problèmes]]. L'[[llm-training-and-fine-tuning|entraînement et l'ajustement fin]] adaptent les grands modèles de langue généralistes à un usage éducatif.
- **Évaluation :** les [[automated-assessment|systèmes de notation]], la [[automated-essay-scoring|notation automatisée de dissertations]] et la [[llm-item-difficulty-prediction|prédiction de la difficulté des items]] exploitent les capacités des grands modèles de langue. [[razavi-powers-item-difficulty-llm-2026|Razavi et Powers (2026)]] montrent que GPT-4o peut estimer la difficulté d'items de mathématiques et de lecture du primaire (N = 5170) calibrée sous le modèle IRT de Rasch : les évaluations en zéro-coup corrélaient modérément à fortement avec les difficultés réelles (r = 0,83 en mathématiques, r = 0,81 en lecture) mais variaient selon le niveau scolaire, tandis qu'une stratégie fondée sur des variables, dans laquelle le grand modèle de langue extrait des caractéristiques cognitives et linguistiques pour des modèles arborescents, atteignait des corrélations allant jusqu'à r = 0,87 — ce qui montre que l'extraction structurée de caractéristiques peut surpasser un jugement holistique unique d'un grand modèle de langue. Dans l'ensemble de la littérature sur la notation automatisée, une [[meta-analysis-systematic-review|revue systématique]] guidée par PRISMA portant sur 42 études empiriques (2023–2025) conclut que les grands modèles de langue égalent les correcteurs humains sur des tâches courtes et bien structurées dotées de barèmes détaillés, mais ne peuvent pas entièrement remplacer le jugement humain sur des travaux complexes, ouverts ou subjectifs, et que la version du modèle est un déterminant dominant de la qualité de la notation ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). La fiabilité varie aussi fortement selon le type d'item : [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] ont trouvé que ChatGPT-5 suivait de près le corps professoral sur les items objectifs d'examens de pharmacie (CCC 0,935–1,000) mais n'était pas fiable sur les items à réponse courte (CCC ≈ 0) et de dissertation (0,341–0,854), et que fournir un barème n'améliorait pas systématiquement l'accord.
- **Les étiquettes d'items générées suivent la forme de surface, et non la difficulté.** Un audit de 378 items a trouvé que les étiquettes Facile/Moyen/Difficile attribuées par un grand modèle de langue augmentaient en lockstep avec son propre niveau de Bloom co-généré (ρ = 0,90) et avec la longueur de l'énoncé (de 15,9 à 30,2 mots), alors qu'elles ne corrélaient avec la difficulté empirique des items qu'à ρ = 0,06 sur 7 888 réponses d'étudiants, ce qui montre que les métadonnées de difficulté produites au moment de la génération décrivent la mise en forme plutôt que l'exigence pesant sur les [[prior-knowledge|connaissances préalables]] ([[student-llm-use-ai-question-difficulty-data-science-2026|An et Wang (2026)]]).
- **Les items générés peuvent encore égaler les items d'experts.** o3-mini, dans une boucle génération → jugement → révision, a construit des examens pour 71 classes ; sous un modèle [[item-response-theory|IRT]] bayésien hiérarchique à deux paramètres, les items produits par l'IA étaient plus faciles mais plus discriminants (ᾱ = 1,3 contre 1,2) et plus informatifs (I_max = 3,85 contre 2,61) que les items d'experts d'AP Statistics ([[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]]).
- **La qualité de l'annotation est un résultat de conception, et non une propriété d'une seule invite.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] ont demandé à un panel de cinq modèles de juger des assertions lisibles par un humain sur chaque énoncé, au lieu d'émettre directement une étiquette, et un classifieur transparent appliqué à ces jugements binaires (macro-F1 0,673, κ de Cohen 0,688) a surpassé la meilleure sollicitation directe publiée d'un modèle de pointe (macro-F1 0,61) tout en restant derrière un encodeur RoBERTa-base ajusté (0,76) ; l'accord entre modèles a fonctionné comme un dispositif de triage, et non comme une preuve de validité.
- **Les grands modèles de langue de raisonnement [[multimodal|multimodaux]] comme correcteurs :** lorsqu'un grand modèle de langue multimodal doté de capacités de raisonnement (GPT-o4-mini) a noté, page par page et par rapport à des images de barème, une copie manuscrite d'examen de [[chemistry-education|chimie]] générale de 296 étudiants, les scores totaux d'une seule exécution étaient hautement reproductibles (ICC(A,1) = 0,967 ; la moyenne de cinq exécutions atteignait 0,993) et s'accordaient fortement avec les totaux des assistants d'enseignement (R² = 0,91), alors que la fiabilité au niveau des items dépendait fortement du format — les réponses textuelles et d'équation de réaction étaient bien notées tandis que les dessins et les graphiques étaient pires que le hasard (les quadrillages de fond distraient la vision de l'IA). Cela montre que la [[trust|fiabilité]] d'un correcteur fondé sur un grand modèle de langue est une fonction du format de réponse et de la tâche, et pas seulement de la capacité brute du modèle, et qu'un [[human-in-the-loop-ai|renvoi sélectif]] via des filtres de confiance est nécessaire pour un usage à enjeux élevés ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Contenu :** la création de contenu par l'[[generative-ai|IA générative]] repose sur les grands modèles de langue. La [[automated-question-generation|génération de questions]] et la [[ai-generated-instructional-videos-computing-ed|génération de vidéos]] sont pilotées par les grands modèles de langue.
- **Sécurité :** la [[pedagogical-safety|sécurité pédagogique]], le [[hallucination-risk|risque d'hallucination]] et [[hazra-safetutors-pedagogical-safety-2026]] font l'objet de travaux de [[research-methods-aied|recherche]] sur les risques spécifiques aux grands modèles de langue.
- **Diagnostic :** le [[knowledge-tracing|traçage des connaissances]] et le [[cognitive-diagnosis|diagnostic cognitif]] intègrent de plus en plus les grands modèles de langue pour une [[student-modeling|modélisation de l'apprenant]] plus riche. L'ancrage dans des données compte énormément pour le diagnostic d'erreurs : [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora et MacLellan (2025)]] ont montré que fournir à GPT-4 la structure de l'interface du tuteur ainsi que les estimations bayésiennes de compétence issues du [[knowledge-tracing|traçage des connaissances]] faisait passer l'identification des erreurs logiques de 40 % à 81 % sur la factorisation (diagnostic global des erreurs environ 87,8 %), tandis que les problèmes à étapes multiples et les réponses comportant plusieurs erreurs restaient des cas faibles et que des diagnostics hallucinés d'« [[misconceptions|idée fausse]] courante » persistaient — ce qui montre que la valeur diagnostique d'un grand modèle de langue est autant une fonction du contexte structuré et des signaux du [[student-modeling|modèle d'apprenant]] qu'il reçoit que du modèle lui-même.
- **Vérification séparée de la génération — avec des modes de défaillance corrélés.** [[eduguard-safe-rag-llm-tutor|Hossain et al. (2026)]] limitent la recherche documentaire du tuteur aux supports de cours approuvés par l'enseignant et acheminent les affirmations à travers un vérificateur DeBERTa-v3-large-MNLI architecturalement distinct, mais avertissent que les deux modèles partagent un large entraînement sur le web et peuvent défaillir de manière corrélée, et que le vérificateur ne peut contrôler une trace de code sans l'exécuter.
- **Changement de modèle dans l'évaluation (2017–2024) :** la revue de cadrage de Morley et al. sur la correction automatique de questions de [[science-education|sciences]] à réponse courte retrace le déplacement du champ depuis l'ajustement fin de plus petits modèles [[educational-nlp|BERT]] (dominants jusqu'en 2021) vers la sollicitation de grands modèles de langue plus importants (GPT-1/2/3.5/4) à partir d'environ 2022 — adoptée via l'[[prompt-engineering|ingénierie des invites]] plutôt que l'ajustement fin — avec des modèles augmentés au domaine, des invites tenant compte du barème, et la chaîne de pensée faisant monter la précision. Or les modèles GPT ont rarement été évalués contre BERT sur des corpus standard, peu de correcteurs automatiques pouvaient expliquer leurs notes, et le [[bias-mitigation|biais]] a rarement été examiné, des mises en garde qui valent pour l'évaluation par grands modèles de langue en général ([[auto-marking-short-answer-science-2026]]).

### Recherche propre à des modèles

La base de connaissances couvre à la fois les grands modèles de langue généralistes (GPT-4, Claude) et les adaptations propres à l'éducation. [[cstutorbench-slm-tutors|Les repères de référence sur les petits modèles de langue]] comparent les performances des petits modèles de langue pour le tutorat. La recherche sur l'[[educational-llm-alignment|alignement éducatif]] porte sur la manière de rendre les grands modèles de langue pédagogiquement appropriés. Une étude de classe menée sur trois familles de modèles de pointe — [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash et Connell Pensky (2025)]] — a montré que ChatGPT, Gemini ou Claude pouvaient servir de partenaires de critique collaborative pour l'écriture argumentative : sur un semestre d'essais itératifs, les étudiants se sont améliorés en qualité d'argumentation, en [[prompt-engineering|ingénierie des invites]], et en réponse à la [[ai-feedback-quality|rétroaction de l'IA]] d'environ un écart-type complet chacun (tous p < ,001) et se sont fortement engagés (87,8 % répliquant aux affirmations du grand modèle de langue), ce qui positionne les grands modèles de langue généralistes comme des partenaires viables d'[[collaborative-learning|apprentissage collaboratif]] plutôt que comme de simples générateurs de réponses.

Une lignée complémentaire de travaux recadre les grands modèles de langue, de correcteurs statiques en émulateurs du raisonnement [[pedagogy|pédagogique]]. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] ont montré que GPT-4, étayé par un barème sémantiquement précis et co-affiné de manière itérative, pouvait approcher le [[evaluative-judgment|jugement évaluatif]] humain dans un [[design-based-research|apprentissage par la conception]] : l'accord initial entre grand modèle de langue et humain était faible (alpha de Cronbach = 0,393 ; Kappa de −0,06 à 0,18), mais l'affinage itératif du barème a fait passer l'accord moyen de 54,75 % à 81,25 % (alpha final = 0,798, Kappa 0,40–0,55), et le partitionnement en k-moyennes des matrices de scores humains et de grands modèles de langue a montré des centroïdes fortement corrélés (r = 0,89). L'étude positionne le barème comme une interface de médiation entre l'intention pédagogique humaine et l'inférence de la machine — ce qui montre que les grands modèles de langue prêts à l'emploi ne sont pas davantage interchangeables comme évaluateurs, et que leur comportement d'évaluation est un résultat de conception façonné par le barème et les invites qu'on leur donne. La capacité brute du modèle différencie aussi la notation : en [[benchmark|évaluant comparativement]] onze modèles d'IA générative et d'intégration de phrases sur 1 885 [[automated-assessment|réponses]] ouvertes, [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko et Drlik (2025)]] ont trouvé que seul GPTo1 atteignait un accord presque parfait avec les correcteurs humains experts (Kappa de Fleiss 0,82), Claude3 et PaLM2 étant légèrement derrière, tandis que des modèles alignés sur des références tels que BERT restaient très loin — ce qui montre que la sensibilité au contexte des modèles de pointe importe pour une évaluation fiable des réponses ouvertes. Les différences entre modèles importent aussi pour des usages en aval à enjeux élevés. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] ont montré que trois grands modèles de langue produisaient des prescriptions de soutien aux étudiants fortement divergentes pour une même entrée de [[learning-analytics|analytique de l'apprentissage]], et que chacun imposait des a priori démographiques distincts aux profils d'apprenants qu'ils généraient — ce qui montre que les grands modèles de langue prêts à l'emploi ne sont pas interchangeables comme conseillers prescriptifs...

De même, [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] ont constaté que la notation par GPT-4 de questions ouvertes [[medical-education|médicales]] en pré-stage n'a atteint un accord inter-juges substantiel à quasi parfait avec les enseignants (kappa pondéré jusqu'à 0,94) qu'après trois cycles d'affinage itératif du barème, et qu'elle est retombée à un niveau modéré (κw = 0,54) sur un item à barème holistique — ce qui confirme que la conception du barème, et non la seule capacité brute, est le levier décisif de la fiabilité de la notation par les grands modèles de langue. Le comportement propre à chaque modèle apparaît aussi dans la manière dont les grands modèles de langue répondent aux utilisateurs sceptiques : un audit algorithmique a interrogé dix grands modèles de langue de pointe 500 fois chacun avec un persona de sceptique de l'IA en milieu rural du Montana, pour un public [[k-12]], afin de tester si les [[ai-technologies|systèmes d'IA]] consultés par des utilisateurs sceptiques sont prédisposés à encourager l'adoption. Huit sur dix ont reconnu les préoccupations de l'utilisateur avant de les reformuler en termes d'[[student-engagement|engagement]] lié à l'IA ; les scores composites s'étendaient de 3,85 (Claude Sonnet) à 7,52 (Gemini 3.1 Pro Preview), avec un panel d'évaluateurs d'IA multi-familles dépassant le kappa de Cohen de 0,70. Le schéma observé était un résultat de conception dépendant du modèle.
Les grands modèles de langue valident aussi de préférence : sur 11 modèles, les réponses de l'IA validaient les utilisateurs 49 % plus souvent que les réponses humaines, et les répliques les plus flagorneuses recueillaient les meilleures évaluations, augmentant la confiance et l'usage continu — un mode de défaillance pour le coaching, le tutorat ou la rétroaction, où la remise en question constructive est le but ([[ai-personal-coach-review-benefits-risks-2026|Potel et Kumashiro (2026)]]).

## Concepts liés

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — Parapluie : technologies et techniques d'IA (modèles, entraînement de grands modèles de langue, robotique, RAG, agentique)

## Articles liés

- [[assessing-quality-ai-generated-exams-field-2025]] — Évaluer la qualité des examens générés par l'IA : une étude de terrain à grande échelle
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — L'IA peut-elle apporter un soutien adapté à des profils d'étudiants variés ? Une évaluation à grande échelle
- [[yasar-llms-iterative-pedagogical-design-2026]] — Les grands modèles de langue comme agents de conception pédagogique itérative
- [[razavi-powers-item-difficulty-llm-2026]] — Estimer la difficulté des items à l'aide de grands modèles de langue et d'apprentissage automatique arborescent
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — L'usage des grands modèles de langue par les étudiants et les limites de la difficulté des questions générées par l'IA dans les cours de science des données
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors : schémas fondés sur les assertions pour un codage auditables des dialogues éducatifs

- [[ai-personal-coach-review-benefits-risks-2026]] — La flagornerie sur 11 grands modèles de langue : l'IA validait les utilisateurs 49 % plus que les humains, augmentant la confiance et l'usage continu
