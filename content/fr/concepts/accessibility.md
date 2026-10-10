---
connected_resources: [drawsplat, fpds-apps-and-resources, id-toolbox, idstack]
title: Accessibilité
created: "2026-08-23T12:00:00-04:00"
updated: "2026-10-10T02:07:46-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, ai-disabled-neurodivergent-learners]
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, universal-design-for-learning]
level: [special education]
confidence: high
translation_of: concepts/accessibility
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Accessibilité** — la conception des technologies éducatives, des contenus et des interfaces afin qu'ils puissent être perçus, utilisés et compris par les personnes en situation de handicap et présentant des besoins variés. Dans le champ de l'[[ai-education|IA dans l'éducation]], l'accessibilité recouvre des obstacles concrets et opérationnels au *support* de l'apprentissage : sous-titres de vidéos, textes alternatifs, transcriptions, compatibilité avec les lecteurs d'écran et la navigation au clavier, contraste des couleurs, simplification des textes, sortie tactile, prise en charge des langues des signes et compatibilité avec les [[ai-technologies|technologies]] d'assistance.

## Questions à examiner

- Lorsque vous avez conçu ou choisi pour la dernière fois un outil d'apprentissage numérique, avez-vous vérifié que ses sous-titres, ses textes alternatifs, sa navigation au clavier et son contraste de couleurs fonctionnaient avant même d'examiner sa [[pedagogy|pédagogie]] ? Pourquoi cet ordre pourrait-il avoir de l'importance ?
- Une vidéo dotée de sous-titres exacts est « accessible », tandis qu'un cours qui structure la discussion autour des besoins de communication d'un apprenant sourd « accompagne cet apprenant ». Où placeriez-vous la frontière entre la suppression d'un obstacle technique et le fait de servir véritablement un étudiant ?
- La [[research-methods-aied|recherche]] montre que des [[video-education|vidéos pédagogiques]] segmentées par l'IA, avec des pauses fixes, ont éliminé l'écart de performance entre les [[neurodiversity|élèves TDAH]] et les [[learners|élèves]] non TDAH. Vous souvenez-vous d'un « correctif conçu pour un seul apprenant » qui a fini par profiter à toute une classe dont vous faisiez partie ?
- Certains soutiennent que l'accessibilité est nécessaire mais non suffisante — un outil accessible n'est pas automatiquement un outil inclusif ou équitable à l'égard du handicap. Quelle différence y a-t-il entre pouvoir utiliser un outil et être réellement servi par lui ?
- De nombreux outils d'IA sont entraînés très largement sur des données anglophones et à dominante occidentale. Comment cela peut-il limiter la qualité du service rendu aux apprenants dont la première langue est une langue des signes, ou dont les façons de connaître diffèrent de la culture dominante ?
- L'IA peut automatiser l'accessibilité à grande échelle — produire des sous-titres, simplifier des textes, générer des sorties tactiles. Que voudriez-vous vérifier à la main avant d'accorder votre confiance à une accessibilité automatisée, et pourquoi ?

## Introduction

L'accessibilité se distingue de trois concepts voisins de cette base de connaissances, tout en leur étant étroitement liée. **[[inclusive-learning|L'apprentissage inclusif]]** constitue le parapluie le plus large pour concevoir une éducation prenant en compte toute la variabilité des apprenants (physique, cognitive, sensorielle, situationnelle). **[[special-education|L'enseignement spécialisé]]** est le domaine pédagogique destiné aux apprenants présentant un handicap diagnostiqué, y compris les aménagements individualisés. **[[universal-design-for-learning|La conception universelle de l'apprentissage]]** est le cadre de conception proactive (moyens multiples d'[[student-engagement|engagement]], de représentation, d'action et d'expression). **L'accessibilité** se situe à l'intérieur de cette constellation comme la *couche technique et procédurale* : supprimer les obstacles à la perception et à l'utilisation du format, plutôt que repenser la pédagogie. Les deux peuvent être distinguées selon un spectre — l'accessibilité demande « tout le monde peut-il accéder à ce contenu et à cet outil ? », tandis que l'accompagnement des élèves handicapés demande « l'enseignement sert-il véritablement chaque apprenant, y compris par des aménagements et un soutien propre au handicap ? ». Les deux importent, et l'IA croise les deux.

### Pourquoi la distinction importe

Une vidéo dotée de sous-titres exacts et d'une transcription correctement balisée est *accessible* ; un cours qui structure la discussion afin d'inclure les préférences de communication d'un apprenant sourd *accompagne cet apprenant*. Les deux se recouvrent — un média accessible est un préalable à un enseignement inclusif — mais ils exigent des choix de conception différents et s'appuient sur des données probantes distinctes. L'accessibilité est ancrée dans des normes et dans le droit (WCAG, l'[[assistive-technology|Assistive Technology Act]] américain et l'IDEA), tandis que l'apprentissage accessible et l'enseignement spécialisé sont ancrés dans la pédagogie et dans l'[[student-experience|expérience vécue par l'apprenant]].

### Principaux thèmes de recherche

**Accessibilité du format : sous-titres, transcriptions et texte.** Les **[[adhd-video-segmentation-computing-education|vidéos pédagogiques segmentées par l'IA]]** avec des pauses fixes ont éliminé l'écart de performance entre élèves TDAH et non TDAH — l'accessibilité comme catalyseur qui profite à tout le monde. **[[text-simplification-its|MuTSE]]** évalue la [[intelligent-tutoring|simplification de texte]] fondée sur [[llm]] pour ajuster la complexité du contenu au niveau de lecture de chaque apprenant, une couche d'accessibilité [[human-in-the-loop-ai|avec intervention humaine]]. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** mettent en œuvre la [[automated-question-generation|génération de questions]] par LLM pour les apprenants sourds et malentendants, affrontant le décalage entre les invites textuelles de l'IA et des premières langues fondées sur la langue des signes.

**Accès sensoriel : sorties non visuelles et tactiles.** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** fait de la conversation orale la modalité principale pour les enfants déficients visuels, supprimant la dépendance au visuel. Les **[[tactile-statistical-graphs-accessibility|graphes statistiques tactiles imprimés en 3D]]** transforment des données statistiques visuelles en sorties palpables pour les étudiants aveugles et malvoyants. Les **[[pepper-robot-sign-language-lis-2025|robots langue des signes]]** étendent la [[educational-robotics|robotique éducative]] à l'accessibilité communicationnelle des apprenants sourds.

**L'[[generative-ai|IA générative]] au service des apprenants déficients visuels.** **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** — une étude de cas [[qualitative-research|qualitative]] portant sur 21 [[higher-ed|étudiants de premier cycle]] déficients visuels dans trois universités palestiniennes — montrent que l'IA générative adapte le rythme, le contenu et la présentation aux profils d'apprentissage individuels, simplifie les textes académiques complexes et convertit les contenus d'une modalité à l'autre (texte, audio, visuel), rendant ainsi utilisables des supports auparavant inaccessibles. Les apprenants ont présenté l'immédiateté comme une exigence d'accessibilité fondamentale plutôt que comme un simple confort, et six attributs technologiques interdépendants — l'interactivité, la facilité d'utilisation, l'abordabilité, la multimodalité, l'intégration et l'évolutivité — ont déterminé si l'IA générative était réellement accessible dans un [[global-south|contexte à faibles ressources]], avec une [[usability-research|utilisabilité]], une abordabilité et une accessibilité qui se renforcent mutuellement plutôt que des considérations de conception séparées.

**Politiques publiques et aménagements pour les élèves handicapés.** **[[shin-ai-policies-sld-2026|Shin et al.]]** analysent des documents américains de politique publique relatifs à l'IA pour mettre au jour un vide d'orientation concernant les élèves présentant des troubles spécifiques de l'apprentissage, et proposent des aménagements et des recommandations de [[educational-policy-ai|politique publique]] fondés sur l'[[assistive-technology|Assistive Technology Act]] et sur l'IDEA. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]** réalisent une méta-analyse de 29 études portant sur des interventions fondées sur l'IA auprès d'élèves handicapés, et constatent un effet positif moyen sur les [[learning-gains|résultats d'apprentissage]] (g = 0.588) — tout en soutenant que l'IA doit faire davantage que garantir l'accessibilité : elle doit permettre une participation [[agency|agente]].

**Interdictions excessivement larges de l'IA et transcription assistive.** **[[wright-transcription-not-generation-2026|Wright (2026)]]** soutient que les interdictions générales de « l'usage de l'IA » sont excessivement inclusives, parce qu'elles ne distinguent pas la transcription de la parole en texte et l'OCR de la rédaction générative : les technologies de reconnaissance convertissent le format d'un contenu que l'élève a déjà produit, au lieu de produire un contenu nouveau, alors qu'une politique rédigée autour de l'identité de la plateforme englobe les deux de la même manière. Les élèves présentant des troubles affectant le contrôle de la motricité fine, la lisibilité de l'écriture manuscrite ou la précision de la frappe — notamment les troubles du spectre de l'autisme, la dyspraxie, l'infirmité motrice cérébrale et les troubles musculosquelettiques dus à des mouvements répétitifs — ont compté sur des outils autonomes de dictée vocale et d'OCR, et plusieurs signalements laissent penser que des produits autonomes de dictée vocale ont été abandonnés ou dégradés, laissant à la transcription assistée par l'IA le soin de combler ce manque fonctionnel. Traiter cette substitution comme une faute soulève des inquiétudes d'équité au regard de l'obligation d'aménagements raisonnables prévue par l'Equality Act 2010 au Royaume-Uni, de l'obligation préventive du Public Sector Equality Duty, de l'Americans with Disabilities Act aux États-Unis et du Disability Discrimination Act 1992 en Australie, bien que l'article n'affirme pas que cette qualification ait été mise à l'épreuve devant une juridiction. Il relève que l'intersection du handicap, des technologies d'assistance et des politiques de lutte contre les mauvais usages de l'IA reste insuffisamment explorée, que l'ampleur de ce déplacement n'est pas mesurée, et que cette même imprécision produit un risque différentiel de faux positifs, puisque les détecteurs interprètent le texte à faible perplexité des rédacteurs non natifs de l'anglais comme une production machinique. L'exposition juridique que crée cette inclusion excessive est cartographiée sur [[legal-issues-and-risks|la page Questions juridiques et risques]].

**L'IA et la dyslexie : détection, accompagnement et [[personalized-learning|apprentissage personnalisé]].** Une [[meta-analysis-systematic-review|revue systématique]] interdisciplinaire de 2026 (Dabaghi, D'Urso & Sciarrone, conduite selon PRISMA, 2018–2024, n=72) constate que l'IA accompagne les élèves dyslexiques dans la détection, le soutien assistif et l'apprentissage personnalisé — mais que ces volets évoluent en parallèle plutôt qu'en intégration, davantage sous l'effet des opportunités technologiques que d'une théorie éducative consolidée. Les outils d'aide à l'éducation fondés sur l'apprentissage automatique couvrent cinq domaines (applications spécifiques, engagement, personnalisation, recommandation, soutien générique) tout en privilégiant la performance technique et la précision du classement, au détriment de la validité écologique et du déploiement pratique en classe. La recherche sur la détection (EEG, oculométrie, modèles d'apprentissage automatique) fait état d'un potentiel diagnostique prometteur pour une intervention précoce, mais exige souvent un équipement spécialisé et des environnements contrôlés, ce qui limite l'évolutivité et l'accessibilité dans les contextes scolaires ordinaires. Les défis ouverts incluent une validation expérimentale limitée, l'évolutivité, des préoccupations d'[[ethics|éthique]] et de [[privacy|confidentialité]] concernant les données sensibles des élèves, un soutien et une formation insuffisants des [[teacher-role|enseignants]], ainsi que des barrières linguistiques et culturelles (la plupart des recherches ciblent des populations anglophones) — ce qui confirme que l'accessibilité doit être validée, évolutive et fondée sur l'éthique, et pas seulement démontrée sur le plan technique.

**Les limites de l'accessibilité seule.** Des **[[genai-minoritized-knowledges-disability|travaux critiques]]** avertissent qu'une IA entraînée sur des données anglophones et à dominante occidentale peut marginaliser les façons de connaître centrées sur le handicap. Des formats accessibles ne garantissent ni un enseignement inclusif ni un enseignement juste — ce qui confirme que l'accessibilité est nécessaire mais non suffisante, et qu'elle doit être reliée à l'[[equity-in-ai-education|équité dans l'IA éducative]].

**Ce sont les outils centrés sur l'aménagement et conditionnés au diagnostic qui dominent.** Une revue exploratoire de 40 études portant sur des technologies d'assistance numériques destinées à des élèves neurodivergents a constaté que 28 faisaient d'un diagnostic formel une condition de participation et que trois seulement portaient sur les camarades neurotypiques plutôt que sur l'élève, tout en rapportant des effets inversés — surcharge cognitive, fatigue, distraction et dépendance excessive à l'égard de l'IA générative.([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al. (2026)]])

## Implications pour la pratique

- **Traiter d'abord la barrière du format.** Les sous-titres, les transcriptions, les textes alternatifs, le contraste et l'opérabilité au clavier constituent la couche qui conditionne l'accès — sans eux, rien d'autre ne compte pour les apprenants qui en ont besoin.
- **Utiliser l'IA pour automatiser l'accessibilité à grande échelle.** L'IA peut générer des sous-titres, simplifier des textes, produire des alternatives tactiles ou audio et adapter la présentation — mais évaluez la qualité des productions au moyen de vérifications avec intervention humaine.
- **Considérer l'accessibilité comme nécessaire mais non suffisante.** Un outil accessible n'est pas automatiquement un outil inclusif ou équitable à l'égard du handicap ; associez l'accessibilité à une conception de l'[[inclusive-learning|apprentissage inclusif]] et à un accompagnement relevant de l'[[special-education|enseignement spécialisé]].
- **Fonder les aménagements sur le droit et les politiques publiques.** Référez-vous à des normes (WCAG) et à des textes législatifs (Assistive Technology Act, IDEA) lorsque vous concevez ou achetez des outils d'IA.

- **Transcription mathématiquement accessible de vidéos de [[physics-education|physique]] (2026) :** un flux de travail fondé sur l'IA, utilisant Gemini (audio et échantillonnage vidéo à 1 image par seconde) et LuaLaTeX, compile des vidéos pédagogiques de physique en PDF mathématiquement accessibles aux formats PDF/UA-2 et ISO 32005, qui passent régulièrement les contrôles d'accessibilité — une voie concrète et gratuite pour rendre lisibles par lecteur d'écran des contenus vidéo très riches en équations à destination des étudiants aveugles et malvoyants ([[gemini-lualatex-physics-video-transcription-2026]]).

## Concepts liés
- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]] — parapluie plus large pour concevoir l'éducation face à la variabilité des apprenants
- [[special-education]] — domaine pédagogique destiné aux apprenants présentant un handicap diagnostiqué
- [[universal-design-for-learning]] — cadre de conception proactive
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[learning-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]
- [[virtual-and-augmented-reality]] — le casque, le mal des transports et l'accès aux appareils déterminent qui peut l'utiliser
- [[speech-and-voice-technologies]]
- [[legal-issues-and-risks]] — la page parapluie sur les règles trop larges, les preuves défectueuses et les aménagements raisonnables
- [[arts-design-and-media-education]]
## Articles liés
- [[shin-ai-policies-sld-2026]] — Politiques en matière d'IA et aménagements pour les élèves présentant des troubles spécifiques de l'apprentissage
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Méta-analyse des interventions fondées sur l'IA auprès d'élèves handicapés
- [[adhd-video-segmentation-computing-education]] — Vidéos segmentées par l'IA avec pauses fixes
- [[text-simplification-its]] — Simplification de texte par LLM pour le tutorat intelligent
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Génération de questions par LLM pour les apprenants sourds et malentendants
- [[kutti-ai-voice-first-learning-companion]] — Compagnon d'apprentissage axé sur la voix pour les enfants déficients visuels
- [[tactile-statistical-graphs-accessibility]] — Graphes statistiques tactiles imprimés en 3D
- [[pepper-robot-sign-language-lis-2025]] — Robot Pepper prenant en charge la langue des signes
- [[genai-minoritized-knowledges-disability]] — Perspective critique sur l'IA et les savoirs centrés sur le handicap
- [[gemini-lualatex-physics-video-transcription-2026]] — Transcription de vidéos de physique mathématiquement accessible par Gemini et LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — IA générative d'assistance pour les apprenants déficients visuels
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
- [[wright-transcription-not-generation-2026]] — Transcription is not generation: over-inclusive AI prohibitions and the assistive tools they capture
