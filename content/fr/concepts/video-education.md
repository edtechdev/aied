---
title: "La vidéo en éducation"
created: "2026-09-05T01:05:00-04:00"
updated: "2026-11-06T04:16:35-05:00"
type: concept
pedagogy: [online-teaching-and-learning, student-engagement, video-education]
technology: [adaptive-learning, generative-ai, learning-analytics, llm, multimodal, personalized-learning]
audience: [instructors, instructional designers]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/video-education
source_updated: "2026-11-05T23:00:00-05:00"
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

> **La vidéo en éducation (Video in education)** — l'usage de la vidéo comme médium d'[[teacher-role|enseignement]] et d'apprentissage, et la manière dont l'[[generative-ai|IA générative]] le reconfigure : vidéos pédagogiques générées par l'IA et [[personalized-learning|personnalisées]] par elle, [[ai-avatars-and-synthetic-instructors|avatar]]s et présentateurs IA, génération vidéo adaptative, [[learning-analytics|analytiques de l'apprentissage]] fondées sur la vidéo et détection de l'attention et de l'[[student-engagement|engagement]], et soutien de l'IA à la consommation des vidéos de cours. La base de connaissances traite la vidéo à la fois comme un médium établi de l'apprentissage en ligne et comme un site d'innovation en évolution rapide sous l'effet de l'IA, couvrant l'enseignement [[online-teaching-and-learning|en ligne]], hybride et en présentiel.

## Questions à examiner

- La vidéo éducative a longtemps été une ressource « universelle » — un contenu identique pour chaque apprenant. L'IA générative rend aujourd'hui faisable la vidéo par apprenant, et les [[research-methods-aied|recherches]] suggèrent que les étudiants valorisent fortement cette personnalisation. Qu'ajoute la personnalisation au-delà de la pertinence — et que pourrait-elle coûter ?
- Les étudiants disent souvent accorder encore du prix à la présence et à l'authenticité d'un enseignant humain dans la vidéo. Pourtant, en comparaison directe des préférences, la vidéo IA personnalisée peut battre des cours magistraux humains génériques. Quels compromis les apprenants font-ils réellement, et quelle est leur durabilité ?
- Les avatars IA clonés à partir d'enseignants peuvent générer de la vidéo à grande échelle — mais ils peuvent aussi déclencher un malaise lié à la « vallée de l'étrange » et des objections [[ethics|éthiques]] (impact environnemental, travail, intégrité académique). Quand un présentateur IA est-il acceptable, et quand franchit-il une limite qu'aucune solution technique ne corrige ?
- Une grande partie de la recherche sur la vidéo s'appuie sur les préférences des étudiants et sur l'[[self-report-measures|auto-déclaration]]. Dans quelle mesure les préférences déclarées prédisent-elles les [[learning-gains|résultats d'apprentissage]] réels — et quand une vidéo qui « fait du bien » pourrait-elle enseigner moins bien qu'une qui n'en fait pas ?
- Les analytiques vidéo peuvent détecter l'attention, l'engagement et les points d'abandon. Quelles sont les implications [[pedagogy|pédagogiques]] et de [[privacy|vie privée]] d'une instrumentation aussi fine de l'apprentissage vidéo ?

## Introduction

La vidéo est une pierre angulaire de l'éducation contemporaine — en particulier de l'[[online-teaching-and-learning|apprentissage en ligne et hybride]] — prisée pour sa flexibilité, son évolutivité et sa consistance. Pourtant, la vidéo pédagogique conventionnelle est produite comme un artefact universel, présentant un contenu identique à chaque apprenant quels que soient ses intérêts, son parcours ou ses [[prior-knowledge|connaissances antérieures]]. L'IA générative fait passer la vidéo d'un médium de diffusion statique à un médium dynamique et individuellement ajusté, et soulève aussi de nouvelles questions sur la présence, la [[trust|confiance]], la [[privacy|vie privée]] et la mesure.

### Comment se regroupent les recherches de la base de connaissances

- **La vidéo pédagogique générée et personnalisée par l'IA.** Un fil central demande si les étudiants acceptent la vidéo produite par l'IA et comment elle se compare aux contenus enregistrés par des humains. Les [[ai-generated-instructional-videos-computing-ed|enquêtes d'étudiants en enseignement de l'informatique]] sondent les perceptions et les préférences relatives à la vidéo pédagogique générée par l'IA. Dans un grand déploiement sur le terrain, [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] ont constaté que les étudiants préféraient les vidéos *personnalisées* générées par l'IA aux cours magistraux non personnalisés enregistrés par des humains — une préférence dans laquelle l'effet de personnalisation l'emportait sur la valeur accordée à un présentateur humain. Les [[ai-video-dual-gatekeeping-2026|recherches sur la double supervision]] montrent comment la supervision de l'enseignant (« gatekeeping ») aux deux étapes de la production vidéo par l'IA produit des sorties plus ancrées dans la pédagogie, en lien avec la conception [[human-in-the-loop-ai|humaine dans la boucle]].
- **La génération vidéo adaptative et structurée.** [[courseblueprint-adaptive-video-generation|CourseBlueprint]] offre un pipeline structuré qui génère une vidéo pédagogique adaptative ancrée dans les corpus de cours, montrant qu'une structure pédagogique explicite — et pas seulement la [[ai-literacy|fluidité en IA]] — pilote une vidéo IA efficace. [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] applique la même logique à l'échelle du cours entier : à partir de 31 cours magistraux de deuxième cycle, il a généré 209 vidéos pour des publics de la santé, de la finance, de l'énergie et un public générique, et 25 experts appariés au domaine en notant 92 ont placé 87% au niveau ou au-dessus du point médian formulé comme « la qualité d'un cours MOOC standard » (moyenne 3.42 sur 5), pour un coût d'API d'environ \$0.22 par minute — la voix, le minutage des diapositives et la mise en page étant les défauts récurrents.
- **Une boucle d'apprentissage bat un meilleur rendu.** [[pivot-generative-video-tutors-stem-2026|Ma et al. (2026)]] planifient chaque vidéo comme un storyboard d'objectifs, d'activation des prérequis, d'exemples travaillés et de sondages diagnostiques, associé à un quiz évitant les exemples de la vidéo et à une remédiation pour chaque mauvaise option ; 96.9% des 32 enseignants ont jugé la boucle plus efficace qu'une vidéo autonome.
- **Les analytiques vidéo et l'attention.** Instrumenter la vidéo révèle la manière dont les apprenants s'engagent. L'[[engagement-assessment-video|évaluation de l'engagement dans l'apprentissage vidéo]] et [[savvy-student-attention-video-learning|SAVVY]] visualisent l'attention des étudiants pendant l'apprentissage fondé sur la vidéo, soutenant les [[learning-analytics|analytiques de l'apprentissage]], l'[[self-regulated-learning|autorégulation]] et l'alerte précoce en cas de désengagement. Les travaux de segmentation (par exemple la [[adhd-video-segmentation-computing-education|segmentation vidéo temporelle]]) ajustent la vidéo aux différences individuelles.
- [[zhou-gaiva-human-ai-video-analysis-2026|Zhou, Kang et Nguyen (2026)]] couplent dans GAIVA transcription par MLLM et codage par LLM textuel pour amener l'analyse de vidéos de classe à une fiabilité de niveau humain. Les invites d'attribution de rôles ont donné les transcriptions les plus équilibrées (exactitude M = 3,24, complétude M = 3,86), le double codage atteignant des ICC de 0,89 à 0,99, et GPT-4o, codant à partir des transcriptions, a atteint κ = 0,91 pour Coordinated Collaboration — au-dessus du κ = 0,83 entre humains.
- **Une lecture neuronale de l'encodage vidéo.** Les reconstructions [[sensor-and-gaze-analytics|EEG]] d'images vidéo visionnées étaient sémantiquement plus similaires pour les questions répondues correctement (M = 71.43) que pour les questions incorrectes (M = 62.30, p < .001), et un désalignement temporel systématique, des reconstructions ressemblant à des images antérieures, était quantifiable comme mesure de dispersion associée à la performance ([[seeing-cognitive-representations-eeg-reconstruction|Su et al. (2026)]]).
- **Les avatars et la présence.** Les avatars IA — présentateurs virtuels et agents pédagogiques — soulèvent des questions d'identité, de [[community-of-inquiry|présence sociale]] et de confiance. [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|L'identité de l'avatar et la confiance épistémique]] examine comment l'identité apparente d'un présentateur façonne la confiance des apprenants, tandis que les [[ai-psychotherapy-training-avatars|avatars IA en formation]] prolongent le schéma à la pratique professionnelle.
- **Les commentaires d'étayage dans la vidéo — et ce que l'IA rate encore.** [[wang-chatgpt-comments-video-learning-scaffolding-2026|Wang, Du et Jin (2026)]] génèrent des *i-Comments*, des messages d'[[scaffolding|étayage]] rendus à l'intérieur du cadre vidéo et synchronisés sur le contenu, en calculant l'entropie au niveau de l'image et en insérant du soutien uniquement dans les intervalles à faible information. Comparés aux commentaires de 120 commentaires d'enseignants expérimentés, les 1,000 commentaires de ChatGPT étaient plus denses, bien moins variés sur le plan structurel (diversité des POS 3-grammes de 5.5–6.2% contre 25.1–38.5%), plus difficiles à lire sur tous les indices de lisibilité, et moins alignés sur le plan thématique (BERTScore de soutien émotionnel 0.317 contre 0.574) ; 40 apprenants ont noté les commentaires humains significativement plus élevés sur le minutage et l'utilité, bien qu'un modèle plus récent ait réduit cet écart. L'argument est autant un argument de conception qu'un argument d'automatisation : le soutien intégré au média évite le coût attentionnel et cognitif de la mise en pause pour interroger un [[conversational-ai|agent conversationnel]] distinct ([[ai-feedback-quality|qualité de la rétroaction]], soutien [[social-emotional-learning|socioémotionnel]]).
- **Le soutien de l'IA à la consommation des vidéos de cours.** Au-delà de la génération, l'IA aide les apprenants et les enseignants à travailler avec la vidéo existante : les [[bilingual-llm-lecture-companion-srl-2026|compagnons de cours LLM bilingues]] soutiennent l'apprentissage autorégulé avec les cours enregistrés, et les [[gemini-lualatex-physics-video-transcription-2026|pipelines de transcription]] convertissent la vidéo de cours en texte accessible.
- **La fidélité de la transcription détermine ce que le texte peut remplacer de la vidéo.** [[wang-educational-video-transcripts-llm-analysis-2026|Wang, Pritchard et Rosenberg (2026)]] ont évalué cinq systèmes ASR contre une transcription humaine de référence sur des épisodes de Crash Course U.S. History, avec des taux d'erreur sur les mots de 2,43 % (TurboScribe) à 15,32 % (Vosk). Le codage par GPT-5.5 des 48 transcriptions a fait de PERSON l'entité nommée la plus fréquente (2 033 au total ; M = 42,35 par épisode), et une recherche K prédéfinie a retenu K = 5, l'expansion de référence par LLM séparant mieux les thèmes que la référence ASR.
- **Le zoom au niveau de la région est la couche qui manquait aux diapositives narrées.** Une étude intra-sujets avec 24 spectateurs a constaté que le zoom automatique accompagné de surlignages synchronisés réduisait la charge de travail NASA-TLX de 5.74 à 4.53 (d = 0.84) et augmentait la compréhension immédiate (d = 0.46), bien que l'avantage à 24 heures ait manqué la significativité (p = .054) ([[lian-guideslide-narrated-slides-visual-guidance-2026|Lian et al., 2026]]).

### La personnalisation contre la présence humaine

Une tension récurrente porte sur la question de savoir si la valeur de la [[personalized-learning|personnalisation]] peut l'emporter sur la valeur d'un enseignant humain visible. [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] cadrent la personnalisation et la présence sociale comme des *signaux partiellement substituables de sollicitude pédagogique* : la délivrance humaine améliore l'expérience [[affective-computing|affective]] et l'authenticité, tandis que la personnalisation améliore la pertinence — et les étudiants sont disposés à échanger l'une contre l'autre. Leurs données de classement issues d'un grand cours (88.4% préféraient une forme ou une autre de vidéo personnalisée ; seulement 73.8% préféraient l'enregistrement humain) suggèrent que la personnalisation est désormais souvent le facteur le plus influent, ce qui pointe vers un modèle complémentaire où les enseignants humains fournissent l'expertise et le lien social, tandis que l'IA étend leur portée par des médias individuellement ajustés.

### Conception, éthique et mesure

Produire une vidéo IA efficace exige une structure pédagogique et une supervision humaine, et soulève des préoccupations distinctes : les présentateurs IA peuvent évoquer un malaise ou de la méfiance (la « vallée de l'étrange ») ; la vidéo générative risque l'inexactitude factuelle que les apprenants peuvent ne pas repérer ; mettre la personnalisation à l'échelle exige de collecter ou d'inférer des attributs de l'apprenant, avec les préoccupations corrélatives de [[privacy|vie privée]], de biais et de [[governance|gouvernance]] ; et un sous-ensemble d'apprenants s'opposent par principe à l'instruction générée par l'IA (impact environnemental, travail, automatisation, [[academic-integrity|intégrité académique]]). La mesure est également en mouvement — une grande partie des données probantes repose sur les préférences déclarées et la valeur perçue plutôt que sur des résultats d'apprentissage objectifs, si bien que les données de préférence doivent être lues parallèlement à des données de résultats (souvent à venir).

## Idées fausses courantes

**« Les étudiants ont préféré la vidéo IA, donc elle enseigne mieux. »** La préférence et l'apprentissage sont des mesures distinctes, et une grande partie de cette littérature repose sur la première. Dans un grand cours en ligne (493 répondants), les étudiants ont classé les vidéos personnalisées générées par l'IA au-dessus des cours magistraux non personnalisés enregistrés par des humains (rang moyen 2,26 contre 2,69) et 88,4 % ont classé une vidéo personnalisée en premier — un résultat de préférence net. La prudence que la page énonce elle-même s'applique : les preuves ici reposent largement sur les préférences déclarées et la valeur perçue plutôt que sur des [[learning-gains|résultats d'apprentissage]] objectifs, si bien que les données de préférence doivent être lues parallèlement aux données de résultats, et non à leur place. Une vidéo qui semble mieux ajustée n'enseigne pas davantage pour autant.

**« Les commentaires d'étayage générés par l'IA peuvent se substituer à ceux d'un enseignant. »** Ils diffèrent d'une manière qui compte pour l'enseignement. Comparés aux commentaires de 120 enseignants expérimentés, les 1 000 commentaires de ChatGPT étaient *plus denses* mais bien moins variés sur le plan structurel (diversité des POS 3-grammes de 5,5–6,2 %), et 40 apprenants ont noté les commentaires humains significativement plus élevés sur le minutage et l'utilité — bien qu'un modèle plus récent ait réduit cet écart. Le volume et la densité ne sont pas la même chose que le commentaire varié et rythmé que produit un bon enseignant, et l'écart qui se réduit est une tendance à suivre plutôt qu'une équivalence acquise.

**« Cloner un enseignant en avatar met la présence humaine à l'échelle. »** Cela met la production à l'échelle et change ce qui est délivré. Les avatars IA clonés à partir d'enseignants peuvent générer de la vidéo à l'échelle, mais ils déclenchent aussi le malaise de la vallée de l'étrange et soulèvent des objections [[ethics|éthiques]] portant sur l'impact environnemental, le travail et l'[[academic-integrity|intégrité]]. La présence mise à l'échelle est une simulation de l'enseignant, et les coûts s'attachent à la simulation.

**« Générer de nombreuses variantes d'un même cours, c'est de la personnalisation. »** Le nombre de variantes est un chiffre de production, non un chiffre pédagogique. [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] a généré 209 vidéos à partir de 31 cours magistraux de deuxième cycle pour la santé, la finance, l'énergie et un public générique, ce qui démontre la capacité du pipeline ; savoir si une variante correspondait aux besoins d'un apprenant donné est une question distincte à laquelle le nombre de générations ne peut pas répondre.

## Implications pour la pratique

**Pour les enseignants**

- Demandez si les preuves derrière un produit de vidéo personnalisée portent sur la préférence ou sur la réussite. Les chiffres les plus forts de cette littérature sont des rangs et des notes, et les deux types de preuves pointent assez souvent dans des directions différentes pour qu'il vaille de les garder séparés.
- Réservez le commentaire humain aux moments qui demandent du rythme et de la sélectivité. L'étude sur les commentaires a trouvé les commentaires humains plus forts sur le minutage et l'utilité : gardez donc la voix de l'enseignant pour les images où le minutage porte du sens.
- Traitez les avatars comme une décision de production avec des coûts (travail, environnement, intégrité) plutôt que comme un gain d'efficacité neutre.

**Pour les développeurs**

- Instrumentez la compréhension, et pas seulement le visionnage complet et la satisfaction. Si vous livrez dix variantes, rapportez lesquelles ont amélioré la compréhension sans aide.
- Alignez la *structure* des commentaires sur la référence enseignante dans votre évaluation, et pas seulement la pertinence sémantique ou la densité — c'est sur l'écart de diversité que le commentaire généré échoue visiblement.
- Exposez le statut génératif des avatars et des variantes personnalisées ; présenter une présence synthétique comme une présence d'enseignant est une question d'intégrité avant d'être une question de conception.

**Pour les chercheurs**

- Rapportez ensemble les mesures de préférence et de résultat, et dites clairement quand une étude ne dispose que de la première.
- Rapportez explicitement l'alignement temporel, étant donné que le désalignement entre le contenu vidéo et le [[cognitive-psychology|traitement cognitif]] apparaît dans les données neuronales.

## Concepts liés

- [[online-teaching-and-learning]] — la vidéo comme médium central de l'enseignement en ligne et hybride
- [[generative-ai]] — le moteur de la vidéo générée et personnalisée par l'IA
- [[personalized-learning]] — la personnalisation comme moteur de l'attrait de la vidéo IA
- [[adaptive-learning]] — la génération vidéo adaptative et le rythme
- [[multimodal]] — la vidéo combinant modalités visuelles, audio et textuelles
- [[learning-analytics]] — les analytiques sur l'engagement et l'attention en vidéo
- [[student-engagement]] — l'engagement que la personnalisation vidéo vise à stimuler
- [[pedagogical-agent]] — les avatars et présentateurs IA comme agents pédagogiques virtuels
- [[llm]] — les grands modèles de langue sous-tendant la génération de scripts et de vidéo
- [[trust]] — la confiance de l'apprenant dans les présentateurs et les contenus IA

## Articles liés

- [[bespoke-industry-personalized-lecture-videos-2026]] — Bespoke : générer à l'échelle des vidéos de cours personnalisées par secteur et de qualité MOOC (Puech et al. 2026)
- [[wang-chatgpt-comments-video-learning-scaffolding-2026]] — ChatGPT-generated in-video comments: entropy timing, quality gaps vs. human comments (Wang, Du & Jin 2026)
- [[personalized-ai-generated-videos-preference-2026]] — Students prefer personalized AI-generated videos over non-personalized human-recorded ones (Tomlinson et al. 2026)
- [[ai-generated-instructional-videos-computing-ed]] — Perceptions et préférences des étudiants à l'égard des vidéos pédagogiques générées par IA en enseignement de l'informatique
- [[ai-video-dual-gatekeeping-2026]] — Dual gatekeeping for pedagogically grounded AI video creation
- [[courseblueprint-adaptive-video-generation]] — CourseBlueprint: adaptive pedagogical video generation
- [[engagement-assessment-video]] — Engagement assessment in video learning
- [[savvy-student-attention-video-learning]] — Student attention visualization for video-based learning
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — Comment l'identité de l'avatar façonne la confiance épistémique dans l'apprentissage médié par l'IA
- [[bilingual-llm-lecture-companion-srl-2026]] — Bilingual LLM lecture companions for self-regulated learning
- [[adhd-video-segmentation-computing-education]] — Temporal video segmentation for individual differences
- [[ai-psychotherapy-training-avatars]] — AI avatars in psychotherapy training
- [[gemini-lualatex-physics-video-transcription-2026]] — Transcrire une vidéo de cours de physique en texte accessible
- [[pivot-generative-video-tutors-stem-2026]] — De la génération de contenus au soutien à l'apprentissage : des tuteurs vidéo génératifs guidés par la pédagogie pour l'apprentissage STIM
- [[lian-guideslide-narrated-slides-visual-guidance-2026]] — Look Over There! Dynamic Visual Guidance for AI-Narrated Slides
