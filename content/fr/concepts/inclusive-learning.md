---
connected_resources: [mglearn]
title: "Apprentissage inclusif"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T03:27:22-04:00"
type: concept
foundations: [ai-education, learning-design]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, higher ed]
confidence: high
translation_of: concepts/inclusive-learning
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

> **Apprentissage inclusif** — la conception et la dispense d'expériences éducatives qui prennent en compte la diversité des besoins des apprenants, qu'il s'agisse de différences physiques, cognitives, sensorielles ou situationnelles. Dans le champ de l'IA en éducation, la [[research-methods-aied|recherche]] sur l'apprentissage inclusif examine à la fois comment les outils d'IA peuvent lever les obstacles pour les apprenants handicapés et neurodivergents, et comment les [[ai-technologies|systèmes d'IA]] eux-mêmes doivent être conçus pour éviter de créer de nouveaux écarts d'accessibilité.

## Questions à examiner

- Un outil accessible ne garantit pas un enseignement inclusif, et une technologie d'assistance ne garantit pas une autonomie réelle. Quelle est la différence entre lever un obstacle lié à un format et concevoir une éducation où chacun peut participer de manière signifiante ?
- La page distingue apprentissage inclusif, accessibilité, technologie d'assistance, éducation spécialisée et conception universelle. Où se situe l'IA en éducation dans votre propre contexte — et à quelle question cherchez-vous réellement à répondre ?
- Une étude a montré que des vidéos segmentées par l'IA avec des pauses fixes supprimaient l'écart de performance entre apprenants TDAH et non-TDAH. Comment la conception pour les besoins d'un groupe peut-elle améliorer l'apprentissage de tout le monde ?
- Les systèmes d'IA sont décrits comme risquant de créer de nouveaux écarts d'accessibilité alors même qu'ils en suppriment d'anciens. Quel type d'apprenant un outil d'IA textuel, visuel et toujours en ligne pourrait-il silencieusement exclure ?
- La recherche sur l'évaluation inclusive met au jour une tension entre les mesures anti-tricherie et la prise en compte des apprenants ayant des besoins de traitement visuel. Lorsque sécurité et accessibilité s'opposent, comment ce compromis devrait-il être tranché — et par qui ?
- Plusieurs outils renversent l'hypothèse selon laquelle les [[edtech-platform|technologies éducatives]] doivent être visuelles — par exemple, des compagnons vocaux pour les apprenants malvoyants. Quelles hypothèses sur l'apprenant « par défaut » vos propres outils ou supports pourraient-ils véhiculer ?

## Introduction

L'apprentissage inclusif est l'engagement de conception selon lequel l'éducation devrait être construite de sorte que tous les apprenants puissent participer de manière signifiative, plutôt que d'être adaptée après coup pour ceux qui peinent. Il fonctionne ici comme un parapluie au-dessus de concepts adjacents mais distincts — [[accessibility|l'accessibilité]] (chacun peut-il percevoir et utiliser le format ?), [[assistive-technology|la technologie d'assistance]] (quels outils comblent l'[[digital-divide|écart d'accès]] d'un individu ?), [[universal-design-for-learning|la conception universelle de l'apprentissage]] (comment la conception devrait-elle anticiper la variabilité ?) — et il engage [[neurodiversity|la neurodiversité]] et [[special-education|l'éducation spécialisée]] comme des contextes de conception plutôt que comme des exceptions. L'IA intervient à la fois comme une promesse (personnalisation, adaptation, traduction) et comme une nouvelle source d'exclusion (coût, données, couverture linguistique, et les hypothèses intégrées aux modèles).

## Comment les concepts apparentés s'articulent

L'apprentissage inclusif est le concept **parapluie** ; les pages ci-dessous se situent à l'intérieur, chacune répondant à une question différente. Elles se recouvrent mais ne sont pas interchangeables — savoir à laquelle appartient une affirmation garde la base de connaissances précise :

| Concept | Question centrale à laquelle il répond | Focale typique |
|---|---|---|
| **Apprentissage inclusif** *(cette page)* | Comment concevoir l'éducation pour que tous les apprenants puissent participer de manière signifiante ? | La conception globale de l'enseignement face à la variabilité des apprenants |
| **[[accessibility]]** | Chacun peut-il percevoir et utiliser le *format/le support* ? | Sous-titres, texte alternatif, transcriptions, contraste, compatibilité clavier/lecteur d'écran, WCAG |
| **[[assistive-technology]]** | Quels outils/équipements comblent l'écart d'accès d'un individu ? | Lecteurs d'écran, synthèse et reconnaissance vocales, braille/tactile, sous-titrage, adaptations par l'IA |
| **[[special-education]]** | Comment dispenser un enseignement à des apprenants ayant un handicap diagnostiqué ? | PEI, adaptations individualisées, tutorat spécifique au handicap — **terme relevant avant tout du [[k-12|K-12]] (IDEA/droit à l'accompagnement)** |
| **[[universal-design-for-learning]]** | Comment intégrer proactivement la flexibilité dès le départ ? | Moyens multiples d'[[student-engagement|engagement]], de représentation, d'action et d'expression |

En pratique : la **conception universelle de l'apprentissage (UDL)** est la philosophie de conception qui *prévient* les obstacles ; l'**accessibilité** est la propriété qui supprime les obstacles de *format* ; la **technologie d'assistance** est la couche d'*outils* que les individus utilisent ; l'**éducation spécialisée** est le domaine *pédagogique* des handicaps diagnostiqués — et c'est avant tout un terme du **K-12**, tandis que dans l'[[higher-ed|enseignement supérieur]] (et de plus en plus aussi au K-12), le cadre le plus courant est celui de la [[universal-design-for-learning|conception universelle de l'apprentissage]]. L'**apprentissage inclusif** est le parapluie qui les réunit autour de l'objectif partagé d'une participation équitable. Un outil accessible ne garantit pas un enseignement inclusif, et une technologie d'assistance ne garantit pas une autonomie réelle — c'est pourquoi le parapluie doit les embrasser tous.

L'apprentissage inclusif se situe à l'intersection de [[equity-in-ai-education|l'équité dans l'IA en éducation]], du [[learning-design|design de l'apprentissage]] et de [[special-education|l'éducation spécialisée]], et s'appuie sur la couche d'outils concrets que constituent [[assistive-technology|les technologies d'assistance]] ainsi que sur la propriété de conception qu'est [[accessibility|l'accessibilité]]. À la différence d'aménagements étroits qui rajoutent l'accès à des systèmes existants, la perspective de l'apprentissage inclusif — ancrée dans la [[universal-design-for-learning|conception universelle de l'apprentissage]] — soutient que les environnements devraient être conçus d'emblée pour toute l'étendue de la diversité humaine. Les articles de cette base de connaissances explorent comment l'IA peut le permettre, par la transformation automatisée des contenus, des interfaces d'évaluation adaptatives, et des outils conçus à partir de l'expérience vécue des utilisateurs [[neurodiversity|neurodivergents]] comme point de départ.

### Thèmes de recherche clés

**L'accessibilité des contenus par l'IA** montre comment des pipelines automatisés peuvent réduire les obstacles. **[[adhd-video-segmentation-computing-education|Pimenova et al.]]** ont montré que des [[video-education|vidéos pédagogiques]] segmentées par l'IA avec des pauses fixes supprimaient l'écart de performance entre apprenants TDAH et non-TDAH — un argument fort en faveur de la conception universelle de l'apprentissage par la transformation automatisée des contenus. L'étude rejoint la recherche sur les [[neurodivergent-computing-students|étudiants neurodivergents en informatique]] quant à l'effet des structures de [[collaborative-learning|apprentissage collaboratif]] sur le confort des neurodivergents. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** ont conçu un système de génération de questions fondé sur un [[llm|LLM]] pour les apprenants sourds et malentendants, en introduisant des stratégies de questions visuelles et émotionnelles ciblant les moments de difficulté visuelle ou émotionnelle dans la vidéo — tout en révélant le décalage persistant entre les consignes textuelles de l'IA et les premières langues signées des apprenants sourds et malentendants, ce qui souligne la nécessité d'une conception de l'IA sensible à la langue et à la culture. **[[text-simplification-its|MuTSE]]** s'attaque à un obstacle complémentaire — le niveau de lecture — en évaluant la simplification de textes par LLM pour l'[[intelligent-tutoring|tutorat intelligent]], en ajustant la complexité des contenus au niveau actuel de chaque apprenant via un cadre d'évaluation [[human-in-the-loop-ai|avec un humain dans la boucle]] plutôt qu'en s'appuyant sur des métriques linguistiques qui manquent la qualité [[pedagogy|pédagogique]].

Les vidéos riches en équations peuvent être rendues accessibles plutôt que transcrites manuellement : un pipeline Gemini + LuaLaTeX a converti 16 vidéos de physique pédagogiques en PDF qui ont passé la validation PDF/UA-2 et ISO 32005, une seule vidéo ayant nécessité une seconde tentative ([[gemini-lualatex-physics-video-transcription-2026|Looney & Duston (2026)]]).

**Accessibilité sensorielle : apprenants aveugles, malvoyants et sourds.** Plusieurs articles renversent l'hypothèse selon laquelle les technologies éducatives doivent être visuelles. **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** fait de la conversation parlée la modalité principale et suffisante pour les enfants malvoyants — la détection en temps réel des difficultés, l'appariement des réponses [[multilingual-learning|multilingues]] et la reconnaissance vocale embarquée fonctionnant d'abord hors ligne suppriment à la fois la dépendance visuelle et l'exigence de connectivité. **[[tactile-statistical-graphs-accessibility|Obiuwevwi et al.]]** ont construit un pipeline réutilisable qui génère des graphiques statistiques en 3D imprimés et tactiles pour les étudiants aveugles et malvoyants en moins de 250ms, avec extraction optionnelle des graphiques depuis des images par LLM. **[[pepper-robot-sign-language-lis-2025|Bolla et al.]]** ont exploré si le robot social Pepper peut produire une langue des signes italienne intelligible, en co-concevant 52 signes avec un étudiant sourd et une interprète experte — étendant la [[educational-robotics|robotique éducative]] à l'accessibilité communicative des apprenants sourds, tout en mettant en lumière la difficulté de reproduire les composantes non manuelles (expression faciale, posture) cruciales pour le sens. **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** prolongent cette ligne de travail dans l'enseignement supérieur, constatant dans une étude de cas [[qualitative-research|qualitative]] portant sur 21 étudiants malvoyants de premier cycle en Palestine que l'IA générative adapte le rythme, les contenus et la dispense aux profils individuels et convertit des textes académiques complexes d'une modalité à l'autre — les apprenants considérant l'IA générative comme un complément à l'enseignant plutôt qu'un substitut, préservant le lien humain tout en rendant la participation possible.

**La conception d'une évaluation inclusive** se confronte à la tension entre sécurité et accessibilité. **[[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]]** propose un cadre théorique pour une diversion visuelle adaptative qui résiste à la tricherie par capture d'écran tout en prenant en compte les apprenants ayant des besoins de traitement visuel — modélisant explicitement le compromis entre mesures anti-tricherie et principes d'apprentissage inclusif. Cela rejoint les préoccupations plus larges d'[[academic-integrity|intégrité académique]] et d'[[assessment|évaluation]].

**Les expériences des apprenants neurodivergents** placent au centre les voix des étudiants handicapés et neurodivergents. **[[neurodivergent-computing-students|Zastudil et al.]]** ont constaté que les étudiants neurodivergents en informatique ont besoin de devoirs structurés, de petites équipes stables et de définitions de rôle explicites — des préférences auxquelles le [[intelligent-tutoring|tutorat par IA]] et les outils de collaboration doivent s'adapter. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** a analysé les discussions de forum d'apprenants dyslexiques, révélant que s'ils valorisent l'IA pour le soutien à la littératie, ils se heurtent à d'importants obstacles d'accessibilité dus à l'incohérence de la qualité des productions et à l'absence d'aménagements équitables. Les deux rejoints [[special-education|l'éducation spécialisée]] et [[student-experience|l'expérience étudiante]].

**[[cognitive-offloading|Le délestage cognitif]] et le compromis entre accès et développement.** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]] montrent que pour les étudiants ayant des troubles de l'apprentissage, la même IA générative qui abaisse les obstacles à l'accès à la lecture et à l'écriture (ajustement du niveau de texte, résumé, aide à la rédaction) peut, si rien ne l'encadre, se substituer à l'entraînement à la compréhension, à la planification et à la surveillance dont ces apprenants ont le plus besoin — une tension d'équité centrale pour l'apprentissage inclusif. La conception inclusive doit donc considérer non seulement si un outil est *accessible*, mais aussi s'il préserve la possibilité pour l'apprenant de développer les compétences mêmes que l'accès est censé rendre possible.

**L'IA pour la dyslexie : détection, soutien et [[personalized-learning|apprentissage personnalisé]].** Une [[meta-analysis-systematic-review|revue systématique]] interdisciplinaire de 2026 (Dabaghi, D'Urso & Sciarrone, guidée par PRISMA, 2018–2024, n=72) constate que l'IA soutient les étudiants dyslexiques dans la détection, le soutien assistif et l'apprentissage personnalisé — mais que ces axes évoluent en parallèle plutôt qu'en intégration, davantage mus par l'opportunité technologique que par une théorie éducative consolidée. Les outils d'aide à l'éducation fondés sur l'apprentissage automatique couvrent cinq domaines (applications spécifiques, engagement, personnalisation, recommandation, soutien générique) tout en privilégiant la performance technique et l'exactitude de classification, au détriment de la validité écologique et du déploiement pratique en classe. La recherche sur la détection (EEG, oculométrie, modèles d'apprentissage automatique) montre un potentiel diagnostique prometteur pour l'intervention précoce mais exige souvent un équipement spécialisé et des environnements contrôlés, ce qui limite la passage à l'échelle et l'accessibilité dans les cadres scolaires ordinaires. Les défis ouverts incluent la validation expérimentale limitée, le passage à l'échelle, les préoccupations d'[[ethics|éthique]]/confidentialité liées aux données sensibles sur les étudiants, le soutien et la formation limités des [[teacher-role|enseignants]], et les barrières linguistiques et culturelles (la plupart des recherches ciblent des populations anglophones) — ce qui souligne que l'apprentissage inclusif doit associer capacité technique et déploiement validé, scalable et éthiquement fondé.

**La critique de l'IA centrée sur le handicap** examine comment les systèmes d'IA peuvent marginaliser plutôt qu'inclure. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** soutient que les systèmes d'[[generative-ai|IA générative]] dans l'enseignement supérieur marginalisent activement les savoirs centrés sur le handicap en raison de données d'entraînement anglophones et occidentalo-centrées — ce qui rejoint les préoccupations d'[[equity-in-ai-education|équité]] relatives à la justice épistémique.

**Le filtrage par diagnostic formel exclut les apprenants qu'un outil prétend servir.** Dans la revue de portée de [[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al. (2026)]] portant sur 40 études de technologies d'assistance numériques pour des étudiants neurodivergents, 28 faisaient du diagnostic formel une condition de participation, et trois seulement traitaient l'environnement plutôt que l'étudiant.

**Des outils accessibles en pratique** montrent comment l'IA peut élargir la participation. **[[suacode-african-students-motivations|SuaCode]]** a démontré que des cours de programmation sur smartphone atteignent des étudiants dans des contextes africains à faibles ressources où moins de 1% disposent de compétences en programmation. **[[embodied-string-learning-blindness-low-vision-musicians|Pimenova et al.]]** ont travaillé avec des musiciens aveugles et malvoyants pour développer des stratégies d'apprentissage non visuelles, en plaçant au centre un [[embodied-learning|design incarné]] guidé par le handicap. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** fournit un partenaire de réflexion par IA gratuit, privé et multilingue reliant les enseignants aux principes de la conception universelle de l'apprentissage. **[[special-r1-rl-special-education|Special-R1]]** étend l'[[reinforcement-learning|apprentissage par renforcement]] à la modélisation de la diversité cognitive et communicative à travers les profils de handicap.

### Connexions avec les concepts voisins

L'apprentissage inclusif est profondément relié à [[equity-in-ai-education|l'équité dans l'IA en éducation]] — l'accessibilité n'est pas seulement une préoccupation technique mais la question de savoir qui peut participer à l'apprentissage. Il se relie à [[accessibility|l'accessibilité]] comme couche d'accès concrète et à [[assistive-technology|la technologie d'assistance]] comme couche d'outils, à [[universal-design-for-learning|la conception universelle de l'apprentissage]] comme fondement théorique, à [[special-education|l'éducation spécialisée]] pour les approches spécifiques au handicap, au [[learning-design|design de l'apprentissage]] pour la structuration des cours et des outils, et à [[neurodiversity|la neurodiversité]] comme grille de lecture qui recadre la différence comme diversité plutôt que comme déficit. Les travaux sur les robots en langue des signes et les outils tactiles relient l'accessibilité à la [[educational-robotics|robotique éducative]] et à [[educational-nlp|l'nlp éducative]], tandis que la simplification de textes la relie aux [[sociocultural-learning|apprentissages socioculturels]] et à l'[[adaptive-learning|apprentissage adaptatif]]. Les liens avec l'[[ai-education|IA en éducation]] et l'[[generative-ai|IA générative]] mettent en lumière à la fois la promesse (l'adaptation automatisée des contenus) et le péril (des systèmes d'IA qui reproduisent l'exclusion).

## Implications pour les enseignants qui conçoivent un apprentissage inclusif

- **Concevoir d'abord pour la modalité exclue, pas en dernier.** Construire dès le départ pour les utilisateurs aveugles et malvoyants ([[kutti-ai-voice-first-learning-companion|Kutti AI]], [[tactile-statistical-graphs-accessibility|graphiques tactiles]]) produit des outils qui fonctionnent aussi hors ligne et dans des contextes à faibles ressources — l'accessibilité comme catalyseur, non comme rattrapage.
- **Co-concevoir avec la communauté cible.** Les [[pepper-robot-sign-language-lis-2025|robots en langue des signes]] et la [[llm-question-generation-deaf-hard-of-hearing-2026|génération de questions pour les sourds et malentendants]] montrent que l'implication de la communauté fait émerger des obstacles (par exemple, les premières langues signées) que les concepteurs ne peuvent pas anticiper — associez apprenants et communautés à la conception.
- **Évaluer la qualité pédagogique, pas seulement des métriques linguistiques.** [[text-simplification-its|MuTSE]] montre que la variabilité des productions des LLM exige une évaluation avec un humain dans la boucle, afin que la simplification aide plutôt qu'elle ne simplifie à l'excès.
- **Utiliser l'IA pour combler les écarts de performance.** Les [[adhd-video-segmentation-computing-education|vidéos segmentées par l'IA]] ont supprimé l'écart de performance lié au TDAH — déployez l'IA adaptative là où les preuves montrent qu'elle égalise les résultats.
- **Traiter explicitement le compromis sécurité/accessibilité.** [[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]] modélise comment les mesures anti-tricherie peuvent exclure par inadvertance des apprenants ayant des besoins de traitement visuel — pesez l'intégrité face à l'accès.
- **L'accès peut tenir à la formulation, pas seulement au format.** La tâche sous-jacente étant maintenue fixe, l'exactitude du modèle est passée de 82.4% pour une formulation à faible littératie à 83.4% pour une formulation experte ; exiger des étudiants qu'ils formulent mieux ajoute donc une nouvelle exclusion, tandis qu'un réécrivain côté système qui normalise les requêtes a supprimé l'écart significatif sans altérer le contenu ([[prompt-privilege-equitable-ai-access-2026|Jin et al. (2026)]]).
- **Se garder d'une IA qui reproduit l'exclusion.** La [[genai-minoritized-knowledges-disability|critique centrée sur le handicap]] avertit que des données d'entraînement anglophones et occidentalo-centrées marginalisent les savoirs du handicap — auditez les outils d'IA au regard de la justice épistémique, en lien avec [[equity-in-ai-education|l'équité dans l'IA en éducation]].

## Concepts liés

- [[differential-effects-across-learner-groups]]
- [[equity-in-ai-education]]
- [[accessibility]] — la couche d'accès concrète (sous-titres, texte alternatif, compatibilité avec les technologies d'assistance)
- [[assistive-technology]] — la couche d'outils que les étudiants utilisent pour accéder aux contenus
- [[special-education]]
- [[learning-design]]
- [[universal-design-for-learning]]
- [[neurodiversity]]
- [[student-experience]]
- [[ai-literacy]]
- [[higher-ed]]
- [[k-12]]
- [[cs-education]]
- [[assessment]]
- [[academic-integrity]]
- [[privacy]]
- [[generative-ai]]
- [[ai-education]]
- [[educational-robotics]]
- [[educational-nlp]]
- [[sociocultural-learning]]
- [[adaptive-learning]]
- [[speech-and-voice-technologies]]

## Articles liés

- [[prompt-privilege-equitable-ai-access-2026]] — Privilège de formulation : mesurer et atténuer les disparités d'accessibilité dans l'accès aux LLM
- [[adhd-video-segmentation-computing-education]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Génération de questions fondée sur les LLM pour les apprenants sourds et malentendants
- [[text-simplification-its]] — Simplification de textes pour le tutorat intelligent
- [[kutti-ai-voice-first-learning-companion]] — Kutti AI : compagnon d'apprentissage vocal pour les enfants malvoyants
- [[tactile-statistical-graphs-accessibility]] — Graphiques statistiques imprimés en 3D et tactiles
- [[pepper-robot-sign-language-lis-2025]] — Robot Pepper soutenant la communication en langue des signes
- [[behaviorally-adaptive-visual-diversion-assessment-2026]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[neurodivergent-computing-students]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[suacode-african-students-motivations]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[special-r1-rl-special-education]]
- [[gemini-lualatex-physics-video-transcription-2026]] — Transcription de vidéos de physique accessible en mathématiques par Gemini + LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — IA générative d'assistance pour les apprenants malvoyants
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — IA générative, réalité virtuelle et au-delà : une revue de portée des technologies d'assistance numériques pour les étudiants neurodivergents dans l'enseignement supérieur
