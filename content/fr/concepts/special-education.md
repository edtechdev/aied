---
title: "Éducation spécialisée"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T03:05:58-04:00"
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
translation_of: concepts/special-education
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Éducation spécialisée (Special Education)** — la conception et la mise en œuvre de l'enseignement destiné aux apprenants en situation de handicap, couvrant les différences cognitives, physiques, sensorielles et neurodéveloppementales. La [[research-methods-aied|recherche]] sur l'[[ai-education|IA en éducation]] de cette base de connaissances explore comment les outils d'IA peuvent répondre aux besoins variés des apprenants par la [[personalized-learning|personnalisation]], l'[[scaffolding|étayage adaptatif]] et des interfaces accessibles — tout en examinant aussi les risques que présentent des [[ai-technologies|systèmes d'IA]] qui ignorent ou marginalisent les apprenants handicapés.

> ⚠️ **L'« éducation spécialisée » est avant tout un terme du [[k-12]].** Il est ancré dans l'Individuals with Disabilities Education Act (IDEA) des États-Unis et dans le système fondé sur l'ouverture de droits des Individualized Education Programs (IEP) qui régit les services d'éducation spécialisée dans l'enseignement primaire et secondaire. Dans l'[[higher-ed|enseignement supérieur]] — et de plus en plus aussi au K-12 — le cadrage le plus courant est celui de l'**[[universal-design-for-learning|Universal Design for Learning]]** (un cadre de conception proactive qui profite à tous les apprenants), associé à l'[[accessibility|accessibilité]] et aux [[assistive-technology|technologies d'assistance]] plutôt qu'à l'« éducation spécialisée ». Un article sur l'éducation spécialisée au K-12 et un texte sur la conception universelle de l'apprentissage à l'université portent sur des contextes qui se recouvrent mais restent distincts ; la base de connaissances conserve les deux parce que la littérature de recherche couvre les deux. Lorsqu'une source porte sur l'enseignement supérieur et les apprenants handicapés, il est généralement préférable de la relier à [[universal-design-for-learning]], [[accessibility]] ou [[inclusive-learning]] plutôt qu'à l'éducation spécialisée.

## Questions à examiner

- La page souligne que l'« éducation spécialisée » est avant tout un terme du K-12, fondé sur l'ouverture de droits, ancré dans l'IDEA et les IEP, tandis que l'enseignement supérieur parle plus souvent de conception universelle de l'apprentissage et d'accessibilité. Selon vous, pourquoi ces contextes diffèrent-ils, et qu'est-ce que cette différence révèle ?
- La promesse de personnalisation portée par l'IA semble taillée sur mesure pour les apprenants aux besoins variés. Mais si un système peut s'adapter à des « profils cognitifs individuels », que peut-il se passer quand le modèle d'un handicap est trop grossier — ou tout simplement absent ?
- La recherche inclut des outils d'IA conçus pour des profils de handicap spécifiques (par exemple des apprenants dyslexiques ou sourds et malentendants). Quels risques voyez-vous à concevoir pour des profils étroits plutôt que de concevoir universellement, dès le départ, pour tous les apprenants ?
- Comment des systèmes d'IA conçus pour l'apprenant « moyen » peuvent-ils finir par ignorer ou marginaliser les apprenants handicapés, même involontairement — et à qui revient la responsabilité de l'empêcher ?
- Que faudrait-il pour qu'un outil d'IA intègre réellement, plutôt qu'il ne se contente d'« accommoder », un apprenant en situation de handicap — et comment reconnaîtriez-vous cette différence dans la pratique ?

## Introduction

L'éducation spécialisée est un domaine où la capacité de l'IA à personnaliser et à s'adapter est particulièrement prometteuse. Contrairement à un enseignement uniforme, les [[intelligent-tutoring|tuteurs IA]] peuvent en théorie s'adapter aux profils cognitifs individuels, aux besoins de communication et aux rythmes d'apprentissage. Les articles de cette base de connaissances couvrent l'IA appliquée à des profils de handicap spécifiques, l'expérience des apprenants neurodivergents et les perspectives critiques sur l'IA et le handicap.

**Le tutorat par IA spécifique à un handicap** adapte l'IA à des besoins d'apprenants particuliers. **[[special-r1-rl-special-education|Special-R1]]** étend l'[[reinforcement-learning|apprentissage par renforcement]] à la modélisation de la diversité cognitive et communicative à travers cinq profils de handicap, en utilisant des prompts sensibles à la persona et des récompenses de raisonnement pour façonner les réponses du tuteur à chaque apprenant. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** a analysé la manière dont les apprenants dyslexiques vivent les outils d'IA, révélant à la fois la valeur de l'IA pour le soutien à la littératie et des obstacles d'accessibilité persistants. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** ont conçu un système de génération de questions fondé sur un [[llm|LLM]] pour les [[accessibility|apprenants sourds et malentendants]], en introduisant des stratégies de questions visuelles et émotionnelles et en affinant itérativement les questions avec la communauté cible, afin de surmonter le décalage entre les prompts d'IA fondés sur le texte et les premières langues fondées sur le signe. **[[embodied-string-learning-blindness-low-vision-musicians]]** a mis au point des stratégies d'apprentissage non visuelles avec des musiciens aveugles et malvoyants, en plaçant au centre la conception [[embodied-learning|incarnée]] portée par le handicap. Ces travaux rejoignent [[inclusive-learning]] et [[neurodiversity]].

**L'expérience des apprenants neurodivergents** se concentre sur les élèves autistes et atteints de TDAH. **[[neurodivergent-computing-students|Zastudil et al.]]** ont constaté que les étudiants en informatique neurodivergents ont besoin de devoirs structurés, d'équipes restreintes et stables, et de définitions explicites des rôles — des exigences de conception auxquelles les outils de [[collaborative-learning|apprentissage collaboratif]] doivent répondre. **[[adhd-video-segmentation-computing-education]]** a montré que des vidéos segmentées par l'IA éliminaient l'écart de performance lié au TDAH. Ces deux travaux rejoignent [[learning-design]] et [[universal-design-for-learning]].

**Les perspectives critiques** examinent comment l'IA peut marginaliser les apprenants handicapés. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** soutient que les systèmes d'IA marginalisent activement les savoirs centrés sur le handicap en raison de données d'entraînement à dominance occidentale — ce qui rejoint les préoccupations d'[[equity-in-ai-education|équité]] en matière de justice épistémique.

**L'IA au service de la dyslexie, entre détection, soutien et apprentissage personnalisé.** Une [[meta-analysis-systematic-review|revue systématique]] interdisciplinaire de 2026 (Dabaghi, D'Urso & Sciarrone, guidée par PRISMA, 2018–2024, n = 72) cartographie la manière dont l'IA aide les élèves dyslexiques dans le cadre éducatif et constate que l'IA est utilisée pour la détection, le soutien assistif et l'apprentissage personnalisé — mais que ces axes évoluent en parallèle plutôt qu'en intégration, davantage poussés par l'opportunité technologique que par une théorie éducative consolidée. Les outils d'aide à l'éducation fondés sur l'apprentissage automatique se répartissent en cinq domaines (applications spécifiques, engagement, personnalisation, recommandation, soutien générique) mais privilégient la performance technique et la précision du classement tout en négligeant la validité écologique et le déploiement pratique en classe. La recherche sur la détection (EEG, oculométrie, modèles d'apprentissage automatique) privilégie l'intervention précoce et montre un potentiel diagnostique prometteur, mais exige souvent un équipement spécialisé et des environnements contrôlés, ce qui limite l'extensibilité et l'accessibilité dans les contextes scolaires ordinaires. Les défis ouverts incluent une validation expérimentale limitée, l'extensibilité, les préoccupations d'[[ethics|éthique]] et de confidentialité liées aux données sensibles des élèves, un soutien et une formation insuffisants des enseignants, et les obstacles linguistiques et culturels (la plupart des recherches ciblent des populations anglophones).

**Le délestage cognitif chez les élèves ayant des troubles de l'apprentissage (SWLDs).** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]], une revue conceptuelle parue dans une série spéciale de *Learning Disability Quarterly* consacrée à l'IA pour les élèves présentant des troubles de l'apprentissage, recadrent l'usage de l'[[generative-ai|IA générative]] par les SWLDs à travers la grille du [[cognitive-offloading|délestage cognitif]]. Ils soutiennent que l'IA générative peut être une **aide compensatoire ou un raccourci** selon la manière dont les décisions de délestage interagissent avec les profils cognitifs et [[motivation|motivationnels]] des SWLDs (difficultés de fonctions exécutives et de mémoire de travail, charge cognitive accrue, buts de performance évitant l'effort, auto-efficacité académique plus faible et attentes exagérées envers l'IA générative) et avec la conception pédagogique. Pour la lecture et l'écriture, l'IA générative peut étayer l'accès (nivellement des textes, résumé, productions [[multimodal|multimodales]], planification, rédaction, rétroaction sur la révision) tout en préservant l'[[student-engagement|engagement]] d'ordre supérieur — mais un délestage excessif risque de court-circuiter les processus de compréhension, de planification et de contrôle, déjà fragiles chez ces apprenants, en favorisant une « [[metacognition|paresse métacognitive]] » et en aggravant les difficultés de littératie dans tous les domaines. L'article positionne les **[[guardrails|garde-fous]] pédagogiques** comme le facteur modérateur clé et recommande d'[[teacher-role|enseigner]] un délestage stratégique, de développer l'[[ai-literacy|littératie en IA]] afin de calibrer la confiance accordée aux outils, d'ordonnancer les expériences de maîtrise pour construire l'[[self-efficacy|auto-efficacité]], et d'aligner les tâches et l'évaluation sur les objectifs des IEP en privilégiant le développement des compétences plutôt que la substitution. Cet article étend la couverture de l'éducation spécialisée dans la base de connaissances à la dimension d'équité du délestage : l'outil même qui abaisse les obstacles à l'accès peut, faute de garde-fous, se substituer à la pratique dont les SWLDs ont le plus besoin.

**Le contenu d'intervention généré par l'IA a besoin de contrôles en amont de la génération, et pas seulement d'une relecture.** [[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]] ont constaté que les praticiens jugeaient l'outil Social Story co-conçu très utilisable (SUS 86,8) tout en qualifiant ses images de génériquement occidentales et son suivi comportemental de déconnecté du jugement clinique rattaché aux objectifs — des contraintes qu'ils auraient posées avant la génération.

## Implications pour les enseignants du spécialisé

- **Co-concevoir l'IA avec les apprenants cibles et leur communauté.** La [[llm-question-generation-deaf-hard-of-hearing-2026|génération de questions pour les apprenants sourds et malentendants]] montre l'intérêt d'affiner itérativement l'IA avec la communauté pour combler le fossé entre les prompts fondés sur le texte et les premières langues fondées sur le signe — impliquez les apprenants et leurs communautés dans la conception plutôt que de supposer que l'IA leur convient.
- **Adosser l'IA à des profils de handicap spécifiques, et non à une accessibilité générique.** [[special-r1-rl-special-education|Special-R1]] modélise la diversité cognitive et communicative à travers les profils de handicap ; [[dyslexlens-dyslexic-learners-ai|DysLexLens]] documente à la fois la valeur en matière de littératie et les obstacles d'accessibilité persistants que rencontrent les apprenants dyslexiques — choisissez des outils alignés sur le profil de chaque apprenant et restez attentif aux obstacles non levés.
- **Structurer la collaboration pour les apprenants neurodivergents.** Les [[neurodivergent-computing-students|étudiants en informatique neurodivergents]] ont besoin de devoirs structurés, d'équipes restreintes et stables et de rôles explicites — appliquez ces exigences de conception à toute activité collaborative médiatisée par l'IA.
- **Utiliser l'IA pour réduire (et non creuser) les écarts de performance.** Les [[adhd-video-segmentation-computing-education|vidéos segmentées par l'IA]] ont éliminé l'écart de performance lié au TDAH — déployez une IA adaptative là où les données montrent qu'elle égalise les résultats, et non là où elle se contente d'automatiser.
- **Placer au centre la conception incarnée portée par le handicap.** La recherche sur les [[embodied-string-learning-blindness-low-vision-musicians|musiciens aveugles et malvoyants]] montre que les stratégies non visuelles, portées par le handicap, surpassent les interfaces visuelles par défaut — construisez et adaptez l'IA avec l'expertise des apprenants handicapés.
- **Se prémunir contre la marginalisation épistémique.** Les [[genai-minoritized-knowledges-disability|perspectives critiques]] avertissent que des données d'entraînement à dominance occidentale peuvent marginaliser les savoirs centrés sur le handicap — auditez les contenus et outils d'IA au regard de la justice épistémique, en lien avec l'[[equity-in-ai-education|équité]].

## Connected Concepts

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## Connected Articles
- [[seung-basham-cognitive-offloading-swld-2026]] — Délestage cognitif de l'IA générative chez les élèves ayant des troubles de l'apprentissage
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Génération de questions par LLM pour les apprenants sourds et malentendants
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories
