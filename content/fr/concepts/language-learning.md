---
connected_resources: [mglearn]
title: "Apprentissage des langues"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T03:05:35-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [equity-in-ai-education]
discipline: [language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/language-learning
source_updated: "2026-10-04T09:35:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Apprentissage des langues** — l'étude de la manière dont l'IA soutient l'acquisition d'une seconde langue (L2), le développement de l'écriture et la diversité linguistique en contexte éducatif. Les recherches sur l'[[ai-education|IA en éducation]] et les [[research-methods-aied|recherches]] menées dans cette base de connaissances couvrent les interlocuteurs d'IA pour le dialogue oral, l'[[automated-essay-scoring|évaluation automatisée de l'écriture]] pour les apprenants de L2, le soutien à la lecture et les préoccupations concernant les biais linguistiques dans les systèmes de correction par l'IA.

## Questions à examiner

- La langue est intrinsèquement interactive, ce qui la rend bien adaptée à l'[[conversational-ai|IA conversationnelle]] — mais les capacités linguistiques de l'IA soulèvent aussi des risques de biais à l'encontre des formes non natives. Où avez-vous vu cette tension entre opportunité et risque se manifester ?
- Une étude a montré que la correction par l'IA sous-estime systématiquement les élèves les plus faibles en langue, tandis qu'une autre proposait de comparer les élèves à leurs propres travaux antérieurs plutôt qu'à des normes de locuteurs natifs. Comment le « point de référence » de l'évaluation change-t-il le fait que la [[ai-feedback-quality|rétroaction par l'IA]] aide ou pénalise un apprenant ?
- Les interlocuteurs d'IA peuvent étendre la pratique communicative à l'échelle, mais la page avertit qu'ils doivent être associés à l'interaction humaine pour que la fluidité se transfère à la conversation réelle. Que pourriez-vous gagner à vous entraîner avec une IA qu'un partenaire humain ne peut vous donner — et que perdriez-vous ?
- Il a été démontré que c'est le soutien de l'enseignant — et pas seulement l'outil d'IA — qui déterminait l'engagement dans l'apprentissage des langues assisté par l'IA, par l'intermédiaire des objectifs de réussite des élèves. Comment le contexte social et [[pedagogy|pédagogique]] façonne-t-il la question de savoir si les apprenants continuent de s'engager avec un outil de pratique en IA ?
- Une [[meta-analysis-systematic-review|méta-analyse]] a trouvé des gains faibles à modérés, dépendant du niveau, liés aux technologies émergentes, les compétences productives (oral, écriture) progressant davantage que les compétences réceptives. Pourquoi l'oral et l'écriture pourraient-ils bénéficier davantage des outils d'IA que la compréhension orale et la lecture ?
- Si l'IA privilégie l'anglais standard et peut pénaliser les formes non natives ou les langues diverses, comment les enseignants de langue devraient-ils concevoir l'évaluation et la rétroaction pour que l'IA soutienne la diversité linguistique au lieu de l'effacer ?

## Introduction

L'apprentissage des langues est devenu un domaine significatif de l'IA en éducation parce que la langue est intrinsèquement interactive — ce qui la rend bien adaptée à l'IA conversationnelle — et parce que les capacités linguistiques de l'IA soulèvent à la fois des opportunités (une [[personalized-learning|pratique langagière personnalisée]] à l'échelle) et des risques (un biais systématique à l'encontre des formes langagières non natives). Les articles de cette base de connaissances explorent les deux faces de cette équation. Lorsque la langue cible est **l'anglais en particulier** — notamment l'[[english-education|anglais à visée académique (EAP)]] et l'[[teacher-role|enseignement]] de l'anglais EFLE/ESLE/L2 — voir la page de concept dédiée à l'[[english-education]], qui distingue les recherches propres à l'anglais de l'acquisition générale d'une L2 et de l'écriture générale.

**L'IA comme tuteur de langue et interlocuteur** est le thème le plus développé. **[[ai-interlocutor-l2-spoken-dialogue|What Changes When the Interlocutor Is an AI?]]** examine la fluidité interactionnelle et l'appropriation linguistique lorsque des apprenants de L2 conversent avec une IA plutôt qu'avec des humains. **[[tact-pedagogically-adaptive-esl-tutoring|TACT]]** fournit un tutorat d'anglais ESLE pédagogiquement adaptatif. **[[llm-children-reading-story-generation]]** explore les histoires générées par l'IA pour le développement de la lecture chez les enfants. Ces travaux se rattachent à l'[[intelligent-tutoring]] et à l'[[generative-ai]]. **[[llm-agents-5e-esl-grammar-2026|Yang, Weng et Yang (2026)]]** ont conçu deux agents fondés sur des [[llm]] — un enseignant d'anglais IA conventionnel et un autre utilisant le **cadre 5E** (engage, explore, explain, elaborate, evaluate) pour un apprentissage de la grammaire fondé sur l'enquête. Sur **37 étudiants d'anglais ESLE** dans une comparaison randomisée, **les étudiants les plus performants ont réagi positivement à l'enseignant IA**, tandis que les étudiants les moins performants ont montré des attitudes mitigées, et les conditions différaient en motivation intrinsèque, en changement cognitif et en performance — ce qui indique que la conception des agents LLM doit être assortie au niveau de compétence de l'apprenant.

Pour les tuteurs physiquement incarnés, une méta-analyse de 11 études sur l'apprentissage des langues assisté par robots (N = 595) a trouvé un effet regroupé important sur l'apprentissage d'une L2 (g = 0.83) avec une forte hétérogénéité, et seul le format d'interaction le modérait — les formats en groupe l'emportaient sur le tutorat individuel, tandis que la morphologie du robot, la modalité, l'autonomie et le rôle social n'avaient pas d'effet ([[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang & Zou (2026)]]).

**L'IA dans l'évaluation des langues** émerge à mesure que les LLM soutiennent la [[automated-question-generation|génération d'items]] et l'évaluation. **[[gpt-item-generation-l2-listening-2026|Aryadoust et Wong (2026)]]** ont comparé l'[[prompt-engineering|ingénierie des invites]] à l'ajustement fin (fine-tuning) pour la génération automatique d'items dans l'évaluation de la compréhension orale en L2 : l'affinement itératif des invites améliorait la qualité des items mais atteignait un plateau, tandis que l'**ajustement fin de GPT-4.1 sur l'invite optimisée** (en maintenant constante la conception de l'invite) produisait des gains supplémentaires — un modèle indiquant quand les concepteurs d'évaluations devraient investir dans l'adaptation du modèle plutôt que dans l'itération des invites.

Une comparaison de 52 tâches d'évaluation d'anglais langue étrangère notées par 20 enseignants expérimentés n'a trouvé aucune différence de qualité significative dans l'ensemble entre les items générés par l'IA et les items élaborés par des humains, mais une division claire du travail : l'IA était préférée pour la grammaire et le vocabulaire (69%) et l'élaboration humaine pour la lecture, l'écriture, la compréhension orale et l'expression orale (75–83%) ([[ai-vs-human-assessment-efl-tpck-2026|Nourashrafi, Alavinia et Darvishi (2026)]]).

**L'évaluation automatisée de l'écriture pour les apprenants de L2** évalue la capacité de l'IA à évaluer des écrits non natifs. **[[self-referential-l2-writing-llm-assessment|Bannò et al.]]** ont proposé une approche autoréférentielle comparant l'écrit d'un étudiant à ses propres travaux antérieurs plutôt qu'à des normes de locuteurs natifs. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** ont constaté que la correction par l'IA sous-estime systématiquement les élèves faibles en langue — un constat qui rejoint les préoccupations relatives à l'[[assessment-validity]] et à l'[[bias-mitigation]]. **[[genai-linguistic-diversity-academic-writing]]** explore la manière dont l'IA affecte la diversité linguistique dans les contextes académiques.
 Un système au niveau du discours va plus loin en nommant le défaut plutôt qu'en notant le texte : la classification des relations entre paires de phrases localisait les ruptures de cohérence — sauts logiques, connecteurs manquants, référence ambiguë — et le taux d'adoption de la rétroaction générée, jugé par les enseignants, allait de 71.2% à 88.4% ([[bert-discourse-english-teaching-2026|Wang et al., 2026]]).

**L'[[accessibility]] pour les apprenants de langue** se rattache à l'[[inclusive-learning]] : **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** a analysé la manière dont les apprenants dyslexiques utilisent l'IA pour un soutien à la littératie, et **[[ai-tools-arab-english-classrooms]]** a exploré les outils d'IA dans des contextes de classe arabe-anglais. Ces études relient l'apprentissage des langues à l'[[equity-in-ai-education]] et à l'[[special-education]].

**Les mécanismes motivationnels dans l'apprentissage des langues assisté par l'IA** examinent pourquoi les apprenants s'engagent avec l'IA pour la pratique des langues. **[[wang-goal-setting-ai-engagement-2026|Wang & Wang (2026)]]** ont utilisé la théorie de la fixation d'objectifs auprès de 758 apprenants universitaires chinois d'anglais pour montrer que le **soutien de l'enseignant** renforce l'engagement dans l'apprentissage assisté par l'IA par l'intermédiaire des objectifs de maîtrise et des objectifs de performance des élèves (et non des objectifs d'évitement) — ce qui montre que le contexte pédagogique et social, et pas seulement l'outil d'IA, détermine si les apprenants restent engagés dans une pratique langagière assistée par l'IA. Cela relie l'apprentissage des langues à la [[motivation]] et à l'[[student-engagement]].

[[chatgpt-english-language-learning-malaysia|Annamalai et al. (2026)]] ajoutent une étude de cas qualitative sur l'autodétermination : dans des entretiens menés auprès de 25 étudiants de premier cycle malaisiens, ChatGPT a soutenu la compétence et l'autonomie, et sa réactivité conversationnelle a produit un sentiment d'être entendu — une « écologie motivationnelle médiatisée par l'IA » dans laquelle le sentiment d'appartenance est en partie satisfait par l'outil, bien que des références inexactes exigeassent vérification et complément humain.

La qualité de la conception, et non la fréquence d'usage, a porté l'effet motivationnel dans un tuteur construit par l'enseignant : sur 74 étudiants de premier cycle utilisant un GPT japonais cantonné au cours, la fréquence d'usage hors classe ne montrait aucune corrélation significative avec l'autonomie, la compétence ou le sentiment d'appartenance, tandis que les apprenants évaluaient très positivement le tuteur pour l'apprentissage autodirigé (M = 4.39) et citaient la sécurité affective (60.8%) ([[instructor-designed-ai-tutors-foreign-language-sdt-2026|Lee & Kwon, 2026]]).

**L'écriture soutenue par l'IA générative au niveau du primaire.** [[genai-writing-program-primary-l2-motivation-engagement|Lu et al. (2026)]] ont mené un programme d'écriture d'opinion de neuf semaines auprès de 301 élèves de 5e et 6e année de l'Est de la Chine, huit classes intactes ayant été attribuées aléatoirement au programme ou à un enseignement conventionnel. Le programme a élevé le soi idéal en écriture L2 des apprenants (différence moyenne ajustée de 0.20) et leur résilience scolaire (0.17), et a accru l'engagement comportemental et émotionnel, mais il n'a pas modifié l'état d'esprit de croissance, ni l'engagement cognitif ou métacognitif, ni l'organisation évaluée par grille — parmi les dimensions de l'écriture, seul l'usage de la langue s'est amélioré. Deux traits de la conception importent pour les enseignants de langue : la sollicitation était enseignée explicitement, par une banque d'invites catégorisées rattachées à des objectifs d'écriture spécifiques, et la rétroaction de l'IA générative était utilisée conjointement à une comparaison avec la rétroaction de l'enseignant et à des révisions répétées. Les gains d'auctorialité que les apprenants ont rapportés reposaient sur cette structure pédagogique plutôt que sur l'outil seul, et les auteurs désignent la réduction de l'[[metacognition|autosurveillance]] et les stratégies orientées vers le raccourci comme les risques permanents.

## Implications pour les enseignants de langue

- **Les [[ai-technologies|technologies]] émergentes produisent des gains faibles à modérés, dépendant du niveau.** Une [[liu-emerging-tech-tefl-review-2026|méta-analyse de 33 études en enseignement de l'anglais langue étrangère]] (N = 3,181) trouve un effet global de g de Hedges = 0.38 qui croît avec le niveau d'éducation (primaire 0.29, secondaire 0.35, supérieur 0.44), la RV et la RA produisant les effets les plus importants et les compétences productives (oral, écriture) progressant davantage que les compétences réceptives — ce qui soutient l'usage des technologies émergentes, en particulier au niveau supérieur, tout en maintenant des attentes réalistes.
- **Une revue systématique cartographie là où l'éducation langagière élémentaire assistée par l'IA est mince.** Sur 31 études (2013-2025), les travaux menés dans les classes de langue du primaire se concentraient sur l'oral, la littératie et le vocabulaire, tandis que la grammaire, la compréhension orale et la langue des signes étaient à peine étudiés, et la plupart des conceptions n'étaient pas spécifiques au niveau scolaire ([[ai-elementary-language-education-review-2026|Hamasha et al., 2026]]).
- **Utiliser l'IA pour étendre la pratique communicative, et non pour la remplacer.** Les [[ai-interlocutor-l2-spoken-dialogue|interlocuteurs d'IA]] et les [[tact-pedagogically-adaptive-esl-tutoring|tuteurs d'anglais ESLE adaptatifs]] élargissent la pratique interactionnelle à l'échelle — associez-les à l'interaction humaine pour que la fluidité et l'appropriation se transfèrent à la conversation réelle.

- **Surveiller dans les sorties de l'IA les erreurs pragmatiques, et pas seulement grammaticales.** Des enseignants de cinq méthodes d'enseignement des langues en ligne ont désigné la cécité pragmatique, situation où une sortie d'IA est grammaticalement correcte mais erronée sur le ton, la formalité ou la culture ([[ai-ethics-tensions-online-pedagogy-2026|Baoyi et Khan (2026)]]).
- **Privilégier la qualité de la rétroaction à sa quantité dans l'oral assisté par la reconnaissance automatique de la parole.** [[asr-english-speaking-feedback-metacognition-2026|Chen et al. (2026)]] constatent qu'une correction d'erreur précise et des tâches structurées de réflexion améliorent l'internalisation de la [[feedback]] et le comportement réflexif dans l'oral d'anglais universitaire, tandis qu'un usage fréquent de la reconnaissance automatique et la précision de reconnaissance ne stimulent la motivation ou la réflexion que partiellement — la seule précision technique ne produit pas un engagement cognitif plus profond, et la compétence en langue module les gains (les apprenants les plus forts internalisent la rétroaction plus efficacement). Cela plaide pour une rétroaction pédagogiquement fondée (par exemple des explications articulatoires plutôt que de simples signalements d'erreur), une réflexion étayée et un soutien différencié selon la compétence.

- **Donner des indices avant les corrections.** Une tâche ChatGPT d'« indice avant correction », dans laquelle les apprenants déduisent les corrections à partir d'indices guidés plutôt que de recevoir des corrections directes, a réduit la charge cognitive et soutenu la révision personnalisée — mais le bénéfice s'est maintenu principalement chez les apprenants qui disposaient déjà de connaissances antérieures suffisantes (58 étudiants, CECRL A1–B1) ([[lukesova-clue-before-correction-2026|Lukešová & Jennings (2026)]]).
- **Fournir une rétroaction sur la prononciation qui localise la différence à combler.** Profy apprend le niveau de compétence à partir de parole largement non annotée et montre *où* un apprenant s'écarte des distributions des locuteurs natifs ; ses intervalles de confiance d'intelligibilité avant et après ne se recoupaient pas, contrairement à une référence fondée sur l'imitation suscitée — ce qui montre qu'une pratique de l'imitation peut être soutenue sans experts évaluateurs ([[ai-guided-learning-audiovideo-2026|Kawamura (2026)]]).
- **Soutenir l'adaptation psychologique des apprenants à l'étude assistée par l'IA.** [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]] suit des apprenants de japonais sur un semestre et constate qu'ils se répartissent en profils d'adaptation inadaptés, modérés et positifs, déterminés par l'équilibre entre technostress et résilience, la plupart des apprenants évoluant progressivement vers une adaptation positive et rapportant une [[self-efficacy]] plus élevée et un épuisement professionnel plus faible — un signal pour concevoir une pratique langagière médiatisée par l'IA qui gère la tension technologique, et pas seulement l'accès aux outils.
- **Rester attentif aux biais de correction et de rétroaction à l'encontre des apprenants.** La [[ai-scoring-language-bias-physics|correction par l'IA]] peut pénaliser les formes non natives ; les recherches sur la [[genai-linguistic-diversity-academic-writing|diversité linguistique]] avertissent que l'IA privilégie l'anglais standard — utilisez une évaluation autoréférentielle ou modérée par des humains.
- **Soutenir le plein éventail des apprenants.** Les études sur la [[dyslexlens-dyslexic-learners-ai|dyslexie et l'accessibilité]] et la conception [[culturally-relevant-pedagogy|culturellement adaptée]] ([[ai-tools-arab-english-classrooms|contextes arabe-anglais]]) montrent que l'IA doit être adaptée à des besoins d'apprenants divers, et non présumée universelle.

- **C'est l'infrastructure, et pas seulement la correction, qui exclut des langues.** Le bengali représente moins de 0.5% du contenu web mondial, face à un déficit de jetons d'entraînement anglais-bengali de 67 pour 1 et à un écart de connectivité entre zones rurales et urbaines (36.5% contre 71.4% de pénétration d'internet), de sorte qu'une conception en langue native et fonctionnant d'abord hors ligne est une condition d'accès plutôt qu'un confort ([[structural-silence-underrepresented-language-ai-2026|Roy et Roy (2026)]]).
- **Les enseignants prisent l'IA générative pour le travail préparatoire, non pour l'usage direct en classe.** Une [[li-language-educators-genai-review-2026|revue systématique PRISMA de 23 études]] (Li et al. 2026) constate que les enseignants de langue prisent surtout l'IA générative pour la préparation en coulisses — [[curriculum-design|planification de leçons]], création de supports et soutien à l'écriture et rétroaction — tout en restant hésitants quant à une mise en œuvre directe face à la classe, ce qui reflète un écart entre théorie et pratique entre approuver l'IA en principe et l'utiliser en direct. L'adoption est façonnée par des facteurs d'identité professionnelle, pédagogiques, techniques, [[governance|institutionnels]] et d'[[academic-integrity]], les enseignants se répartissant sur un spectre allant de la non-adoption à l'intégration complète ; les attitudes tendent à évoluer d'une insécurité initiale vers un usage confiant et sélectif avec l'exposition.
- **Préparer la [[ai-literacy|littératie en IA]] des enseignants de langue.** Des [[governing-unseen-ai-literacy-language-teachers-2026|revues systématiques]] constatent que la littératie en IA chez les enseignants de langue constitue une lacune clé — investissez dans le [[educational-development|développement professionnel]] des enseignants parallèlement à l'adoption des outils. À mesure que l'IA reconfigure l'éducation langagière, la littératie en IA est aussi cruciale pour que les enseignants s'engagent de manière critique avec la technologie : l'échelle de littératie en IA des enseignants (TAILS) a été élaborée pour la [[teacher-education|formation des enseignants de langue]], en opérationnalisant le cadre ED-AI à six dimensions (connaissances, évaluation, collaboration, contextualisation, [[agency|autonomie]], [[ethics]]) et en la validant auprès d'enseignants d'anglais langue étrangère en formation initiale.

- **Quatre profils d'interaction dans une tâche bilingue à forte pression.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li et Weng (2026)]] ont utilisé l'oculométrie, l'enregistrement au stylo et l'enregistrement vocal auprès de 22 stagiaires en interprétation pour montrer que les élèves répartissent leur attention entre les sorties de l'IA et leur propre prise de notes de quatre manières distinctes — Engagers intensifs, Scanners rapides, Traditionalistes et Basculeurs fréquents — et que 58.3% des observations au niveau de l'étape changeaient de profil entre les étapes de compréhension et de production de la même tâche. Seuls les profils de l'étape de compréhension prédisaient la qualité du produit, et le groupe le plus dépendant de l'IA obtenait les scores les plus faibles en fluidité de la prestation et en qualité de la langue cible, ce qui plaide pour apprendre aux apprenants à décrire leur propre stratégie et à réfléchir à son sujet, plutôt que pour prescrire une seule manière de travailler avec l'outil.
- **Faire passer l'ensemble de la boucle des quatre compétences par le coût et la connectivité.** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]] publient LLMersion-1, un prototype fonctionnant d'abord en local, qui travaille la compréhension orale, la lecture, l'expression orale et l'écriture sur le document propre de l'apprenant, sur du matériel grand public — un tuteur de 1B se quantise en 808 Mo et l'ensemble de la pile résidente reste sous 4 Go — et chiffre cinq ans de pratique quotidienne à environ 18 $ d'électricité, contre 1,200 $ pour un abonnement infonuagique. Aucun résultat d'apprentissage n'est rapporté et la rétroaction sur la prononciation est seulement segmentale.

## Concepts liés

- [[eportfolio]]
- [[writing-education]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[special-education]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[speech-and-voice-technologies]]

## Articles liés

- [[student-ai-interaction-consecutive-interpreting-2026]] — Student-AI Interaction in Computer-Assisted Consecutive Interpreting
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Profils et transitions de l'adaptation psychologique dans l'apprentissage du japonais assisté par l'IA
- [[llm-agents-5e-esl-grammar-2026]] — Agents LLM avec le cadre 5E pour l'acquisition de la grammaire anglaise ESLE (Yang, Weng & Yang 2026)
- [[gpt-item-generation-l2-listening-2026]] — Sollicitation et ajustement fin de GPT pour la génération d'items de compréhension orale en L2 (Aryadoust & Wong 2026)
- [[bert-discourse-english-teaching-2026]] — Classification du discours par BERT pour l'enseignement de l'anglais
- [[alharbi-ethical-genai-eap-2026]]
- [[sutama-chatgpt-eportfolio-speaking-2026]]
- [[ni-lam-multiliteracies-ai-portfolio-2026]]
- [[llms-text-linguistics-teaching-2026]] — Les LLM dans l'enseignement de la linguistique textuelle
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tâches d'évaluation générées par l'IA et élaborées par des humains en anglais langue étrangère
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Governing the unseen : la littératie en IA chez les enseignants de langue
- [[ai-guided-learning-audiovideo-2026]]
- [[ai-interlocutor-l2-spoken-dialogue]]
- [[robot-assisted-language-learning-meta-analysis-2026]] — Méta-analyse de l'apprentissage des langues assisté par robots incarnés et renforcé par l'IA
- [[self-referential-l2-writing-llm-assessment]]
- [[ai-scoring-language-bias-physics]]
- [[genai-linguistic-diversity-academic-writing]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[ai-tools-arab-english-classrooms]]
- [[structural-silence-underrepresented-language-ai-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Instructor-Designed AI Tutors in University Foreign Language Education: A Mixed-Methods Study of Learner Motivation and Reflective Learning Experience Based on Self-Determination Theory
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Language Learning
- [[chatgpt-english-language-learning-malaysia]] — Students' ChatGPT experiences in English language learning
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Caractéristiques des apprenants × interactions sur le format de dialogue en synthèse vocale
- [[liu-emerging-tech-tefl-review-2026]] — Méta-analyse des technologies émergentes pour l'anglais langue étrangère
- [[wang-goal-setting-ai-engagement-2026]] — Théorie de la fixation d'objectifs : soutien de l'enseignant, objectifs de réussite et engagement dans l'apprentissage de l'anglais assisté par l'IA (758 étudiants chinois)
- [[li-language-educators-genai-review-2026]] — Pratiques et développement des enseignants de langue avec l'IA générative
- [[asr-english-speaking-feedback-metacognition-2026]] — La technologie de reconnaissance automatique de la parole dans l'oral d'anglais universitaire : internalisation de la rétroaction et stratégies métacognitives
- [[genai-writing-program-primary-l2-motivation-engagement]] — Un programme d'écriture soutenu par l'IA générative pour des apprenants de L2 au primaire (Lu et al. 2026)

- [[llmersion-local-first-language-learning-2026]] — LLMersion: A Local-First AI Agent Framework for Low-Cost Home Language Learning toward Educational Equity

- [[ai-ethics-tensions-online-pedagogy-2026]] — Cécité pragmatique : une sortie langagière de l'IA peut être grammaticalement correcte mais culturellement erronée
