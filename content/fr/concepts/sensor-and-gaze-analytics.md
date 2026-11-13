---
title: "Analyse par capteurs et suivi du regard"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-12T23:30:00-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/sensor-and-gaze-analytics
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Analyse par capteurs et suivi du regard** — l'usage de l'oculométrie, de l'électroencéphalographie, de l'activité électrodermale, de la variabilité de la fréquence cardiaque et de la posture dérivée d'une caméra pour inférer des états de l'apprenant tels que l'attention, l'engagement, la charge cognitive et l'affect. En [[ai-education|IA en éducation]], ces signaux promettent une vue continue et non verbale de l'apprentissage que les quiz et les auto-déclarations ne peuvent fournir. Ils se situent aussi au centre du problème d'inférence le plus difficile du domaine : un capteur enregistre un corps, pas un esprit, et toute affirmation sur ce qu'un apprenant pense ou ressent est une interprétation superposée à cet enregistrement ([[kim-ai-embodied-learning-review-2026|Kim et Han, 2026]]).

## Questions à examiner

- Une webcam peut montrer que vos yeux sont restés dans le lecteur vidéo pendant tout un cours. Cela signifie-t-il que vous étiez attentif ?
- Si un tuteur pouvait estimer votre charge cognitive en temps réel, devrait-il agir sur cette estimation sans vous demander d'abord ?
- Le regard d'un étudiant peut quitter l'écran à cause d'un tic, d'une déficience visuelle ou d'une norme culturelle. Que signifie un signalement « faible attention » pour cet étudiant ?
- Une université devrait-elle être autorisée à collecter des données cérébrales et cardiaques pour améliorer ses cours, et que demanderait un consentement réel ?
- Un chiffre comme « 75 % d'exactitude sur l'engagement » semble précis. Quelle couche de l'engagement le capteur a-t-il réellement atteinte, et laquelle a-t-il manquée ?
- La surveillance lit désormais la posture et les mouvements de tête. Où passe la ligne entre détecter une fraude et juger un corps ?

## Introduction

L'analyse par capteurs et le suivi du regard désignent une famille de méthodes qui transforment des mesures physiques d'un apprenant en inférences éducatives. Les mesures incluent où les yeux se posent et pour combien de temps, l'activité électrique du cuir chevelu, les réponses sudoripares, la variation battement à battement du rythme cardiaque, et la position et le mouvement de la tête et du tronc. Les inférences comprennent l'attention, l'engagement, la charge cognitive, la confusion, le stress et, dans les contextes d'évaluation, le soupçon. Cette page porte spécifiquement sur cette couche de mesure : pour le programme plus large et ses prétentions, voir [[affective-computing]] ; pour la manière dont un tuteur devrait agir sur une inférence une fois qu'il en dispose, voir [[affective-tutoring]].

L'attrait est simple. Les [[self-report-measures|auto-déclarations]] sont rétrospectives et grossières, et les quiz échantillonnent l'apprentissage à quelques moments. Les capteurs fonctionnent en continu et coûtent peu d'effort conscient à l'apprenant. Cette combinaison a rendu la captation centrale pour l'[[learning-analytics|analytique de l'apprentissage]] et la [[student-modeling|modélisation de l'étudiant]], et produit une vaste littérature où la captation est techniquement impressionnante et l'interprétation mince.

Une [[meta-analysis-systematic-review|revue systématique]] de 23 études associant l'IA à l'[[embodied-learning|apprentissage incarné]] rend ce déséquilibre concret : l'analyse et l'évaluation représentaient 40.0 % des rôles d'IA codés, la reconnaissance et la détection 22.5 %, la rétroaction et l'accompagnement 15.0 %. Les rôles de captation constituaient 62.5 % des étiquettes de rôle contre 35.0 % pour les rôles participatifs ([[kim-ai-embodied-learning-review-2026|Kim et Han, 2026]]). Le domaine est meilleur pour observer les apprenants que pour changer ce qui arrive ensuite.

## Ce que chaque signal mesure réellement

**Le regard et la fixation.** Les oculomètres rapportent où l'œil pointe, combien de temps il s'attarde, quand il fait une saccade et sa dispersion. Les systèmes à l'écran comme WebGazer estiment le regard à partir d'une webcam, tandis que des lunettes suivent l'œil directement. TutorLoop convertit le regard en deux quantités : l'attention comme pourcentage de points de regard dans la zone de contenu, et la charge de travail comme entropie du regard, en partant du principe qu'un regard dispersé traduit la charge cognitive ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Ollie, un assistant informé par le regard destiné aux enfants, définit plutôt des zones d'intérêt dans une image et déclenche une narration lorsqu'un enfant en regarde une ([[gaze-informed-ai-children|Wu et coll., 2026]]).

**L'électroencéphalographie.** L'EEG enregistre les fluctuations de tension à travers le cuir chevelu à haute résolution temporelle. C'est le seul signal de cette famille qui atteint directement l'activité corticale, ce qui explique l'intérêt de la recherche en évaluation. Les systèmes éducatifs utilisent des électrodes sèches et peu de canaux : E3Sense a pris quatre canaux EEG secs à 125 Hz et en a analysé deux frontaux ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et coll., 2026]]). Les dispositifs de recherche font l'inverse : Kosmyna et coll. (2025) ont utilisé un EEG à 32 canaux pour comparer des étudiants écrivant avec un [[llm|LLM]], un moteur de recherche ou aucun outil, et ont trouvé la connectivité neuronale la plus faible dans le groupe LLM ([[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna et coll., 2025]]). Cette étude est aussi l'avertissement le plus clair sur les preuves à canal unique : son affirmation centrale repose sur une session croisée facultative à laquelle 18 des 54 participants seulement ont assisté.

**L'activité électrodermale.** L'EDA mesure la conductance des glandes sudoripares, un indice de l'activation sympathique. Elle répond au stress, à l'effort et à l'intensité émotionnelle, et elle ne peut les distinguer. Le même construit apparaît dans des bracelets et dans des électrodes frontales fixées à quelques centimètres l'une de l'autre par un cadre d'oculomètre ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et coll., 2026]]).

**La fréquence cardiaque et sa variabilité.** La fréquence cardiaque suit l'activation, et la variabilité entre battements indexe la récupération autonome. Dans une étude d'un an portant sur 458 étudiants portant des bagues Oura, le langage d'épuisement émotionnel suivait une efficacité de sommeil plus faible et une variabilité cardiaque plus faible ([[affective-text-wearable-student-health|Texte affectif et captation portable, 2026]]). Aucune des deux mesures n'identifie une cause.

**La posture et le mouvement issus d'une caméra.** Un système de surveillance peut extraire dix-sept points de repère corporels par image et en dériver une déviation posturale, une tendance des mouvements de tête et un mouvement du haut du corps ([[arif-automated-online-proctoring-yolov11-2026|Arif et coll., 2026]]). Cela mesure un mouvement. L'appeler comportement suspect est une étape distincte et non étayée.

Ces signaux diffèrent par leur fréquence d'échantillonnage, leur bruit et leur instrumentation. E3Sense a aligné douze fenêtres EEG, six fenêtres oculaires et trois fenêtres EDA dans une représentation partagée de 120 secondes à 166 dimensions ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et coll., 2026]]). EduGage a fait fonctionner sept types d'appareils en même temps et a conclu que les combinaisons légères portaient l'essentiel du signal utilisable ([[engagement-assessment-video|Leng et coll., 2026]]).

## À quoi servent les signaux

**La détection de l'engagement en [[video-education|apprentissage vidéo]].** E3Sense a demandé à 30 étudiants d'évaluer cinq segments par vidéo, soit 450 évaluations. Un modèle fusionné a atteint 75.0 % d'exactitude équilibrée à un niveau près contre une base de 63.0 % sur des participants tenus à l'écart ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et coll., 2026]]). EduGage a rapporté une MAE de 0.81 et 83.75 % d'exactitude à un niveau près sur 16 participants et 715 fenêtres de sondage ([[engagement-assessment-video|Leng et coll., 2026]]). Les deux traitent l'estimation comme approximative.

**L'estimation de l'attention en classe.** Un [[multimodal|transformeur multimodal]] a fusionné des images faciales avec des signaux portables sur DIPSER, un jeu de données naturaliste de 57 sujets, et atteint une MAE de 0.283. Son avantage sur une base purement visuelle était modeste, et les auteurs concluent que les traits faciaux constituaient la source d'information principale ([[student-attention-estimation-fairness-2026|Fragkiadakis et coll., 2026]]).

**La charge cognitive et le moment de la rétroaction.** TutorLoop a utilisé l'attention et la charge de travail dérivées du regard pour choisir parmi quatre [[feedback|types de rétroaction]] avec un agent d'[[reinforcement-learning|apprentissage par renforcement]]. Sur 187 participants, le système complet est intervenu moins souvent que les bases de référence tout en améliorant l'attention et en réduisant la charge de travail ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**La surveillance et l'intégrité.** La surveillance fondée sur la pose rapporte des performances proches du plafond sur son propre jeu de scénarios étiquetés : 99.56 % d'exactitude et une AUC de 0.9957 ([[arif-automated-online-proctoring-yolov11-2026|Arif et coll., 2026]]). L'IA portable change le même problème par l'autre bout. Les lunettes intelligentes suppriment la baisse du regard et le changement de posture sur lesquels repose la surveillance, une condition que Corbin et ses collègues appellent double transparence ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et coll., 2026]]).

**L'affect et le [[well-being|bien-être]].** Des signaux physiologiques collectés pendant des examens ont prédit des catégories de notes, la forêt aléatoire atteignant une moyenne de 0.96 sur 30 réplications ([[physiological-signals-exam-outcomes-ml|Yamazaki et Rimal, 2026]]). Les prédicteurs principaux étaient l'activité électrodermale, le mouvement de l'accéléromètre et la température cutanée. C'est de l'activation et du mouvement, pas de la compréhension.

**La recherche en évaluation.** L'EEG a été testé comme mesure directe de la familiarité et de la représentation mentale. Les deux pistes sont prometteuses et les deux restent exploratoires, ce dont traite la section suivante.

## L'écart inférentiel

Chaque usage ci-dessus dépend d'une chaîne : un événement physiologique ou comportemental, une caractéristique calculée à partir de lui, un modèle entraîné sur des étiquettes et une affirmation sur un état mental. Chaque maillon fuit.

L'étiquette est souvent le maillon le plus faible. E3Sense prédisait les évaluations de segments des apprenants eux-mêmes, et 63 % de ces évaluations se situaient aux deux niveaux d'engagement. Un modèle peut obtenir un bon score en apprenant la distribution plutôt que l'état. Lorsque les chercheurs ont ajouté les définitions de l'engagement données par les apprenants, l'exactitude est passée de 64.6 % à 71.5 %, ce qui suggère que les étiquettes et les signaux mesuraient en partie des choses différentes ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et coll., 2026]]).

La [[assessment-validity|validation]] peut gonfler le modèle. Un banc d'essai de quinze modèles pour la prédiction de la familiarité à partir de l'EEG a atteint 0.9853 de F1 en validation croisée stratifiée. Le Group K-Fold indépendant des essais, qui respecte la structure temporelle, a fait chuter le pic à 0.6038 de F1 contre 25 % de hasard ([[eeg-familiarity-automated-assessment-2026|Nanayakkara et Halloluwa, 2026]]). Le premier chiffre décrit une fuite ; le second décrit un apprentissage.

Un corrélat neuronal n'est pas une note. Des images reconstruites à partir de l'EEG corrélaient avec la performance au test à R² = 0.79 sur 55 observations participant-vidéo. Les items correctement répondus montraient aussi une similarité sémantique plus élevée que les items incorrects. Pourtant, un participant a produit des reconstructions de haute qualité et répondu incorrectement, si bien que la qualité de reconstruction ne peut être lue comme une exactitude ([[seeing-cognitive-representations-eeg-reconstruction|Su et coll., 2026]]).

L'attention n'est pas l'apprentissage. Dans TutorLoop, l'attention corrélait avec l'apprentissage à r = 0.017, tandis que la charge de travail corrélait négativement à r = -0.168 ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Un système qui maximiserait le signal d'attention aurait optimisé du bruit.

Un signal peut aussi inverser le construit. Dans 37 [[simulation|simulations]] infirmières enregistrées, un détecteur de sourire corrélait négativement avec l'[[empathy|empathie]] évaluée par des observateurs (r = −0.322), tandis que la détection de contact physique s'accordait avec quatre mesures d'observateurs de 0.46 à 0.54 ; les observateurs lisaient un sourire adressé à un patient souffrant comme une incongruité, et le modèle lisait une action faciale ([[nissan-nursing-empathy-computer-vision-2026|Nissan et coll., 2026]]).

Un capteur peut enregistrer une co-présence là où une étude affirme une interaction : [[hur-computational-analysis-teacher-group-interactions-2026|Hur et al. (2026)]] ont constaté qu'un détecteur de pose n'atteignait qu'un rappel de 55 %, repérant 11 des 20 événements identifiés par des codeurs humains dans les interactions enseignant-étudiant de groupe. L'[[teacher-role|enseignant]] était présent dans les limites du groupe dans 49.2 % des segments codés, les étudiants ne regardant l'enseignant que dans 25.4 % des segments, et aucune caractéristique audio ne changeait dans les deux comparaisons : le pipeline enregistrait une co-présence spatiale, non une interaction soutenue.

Un profil physiologique n'est pas un diagnostic. Les modèles de stress d'examen prédisent une catégorie de note à partir de l'activation et du mouvement, et les auteurs insistent : la sortie appartient aux côtés des circonstances personnelles et du contexte de santé mentale, non à une décision à enjeux élevés ([[physiological-signals-exam-outcomes-ml|Yamazaki et Rimal, 2026]]).

Enfin, collecter n'est pas intégrer. Kim et Han ont trouvé que la plupart des études multimodales recueillaient les flux en parallèle, qu'une seule alignait l'affect facial, le regard et la détection de visage après coup, et qu'aucune ne fusionnait ses entrées en direct pendant qu'un apprenant utilisait le système ([[kim-ai-embodied-learning-review-2026|Kim et Han, 2026]]). Une page de canaux synchronisés peut ressembler à un modèle de l'apprenant alors qu'elle n'est qu'un enregistrement.

## L'éthique de la captation des apprenants

**Le consentement est affaibli par le pouvoir institutionnel.** Un étudiant qui doit assister à un cours ou passer un examen ne peut refuser librement une caméra ou un objet portable. Les attributs démographiques peuvent même ne pas être déclarés : les étiquettes de genre, d'âge et d'ethnicité de DIPSER ont été inférées des images par des modèles de vision par ordinateur plutôt que fournies par les participants ([[student-attention-estimation-fairness-2026|Fragkiadakis et coll., 2026]]). Inférer qui est quelqu'un pour tester si un modèle le traite équitablement est en soi un acte de profilage.

**Les données biométriques ne sont pas des données analytiques ordinaires.** L'EEG, l'EDA et la variabilité cardiaque touchent à la santé et, dans de nombreuses juridictions, relèvent des données de catégorie particulière. Elles peuvent révéler le sommeil, le stress et des conditions médicales au-delà de ce dont un cours a besoin. Un système informé par le regard destiné aux enfants a suscité une objection de [[privacy|vie privée]] de la part d'un parent, même dans un petit pilote ([[gaze-informed-ai-children|Wu et coll., 2026]]).

**La dérive fonctionnelle est la trajectoire normale.** La surveillance du bien-être devient un signalement de risque, et le signalement de risque devient une preuve de notation. Corbin et ses collègues montrent la version évaluative de cette dérive : quand l'exclusion physique échoue, l'inspection passe des artefacts aux corps, et les étudiants doivent prouver que leurs lunettes sont correctrices et leurs appareils thérapeutiques ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et coll., 2026]]).

**Les défaillances d'[[equity-in-ai-education|équité]] se concentrent sur les corps qui diffèrent.** L'estimation de l'attention par le visage dépend du teint de peau, des lunettes et de l'éclairage. L'attention fondée sur le regard pénalise les apprenants qui évitent le contact visuel, dont certains étudiants autistes et [[neurodiversity|neurodivergents]]. La surveillance fondée sur la pose signale les tics, l'autostimulation et les normes culturelles de mouvement. L'étude de surveillance ne teste pas si une posture signalée correspond à une fraude, ni si le détecteur traite équitablement les [[inclusive-learning|étudiants en situation de handicap]] ou les différences culturelles de regard ([[arif-automated-online-proctoring-yolov11-2026|Arif et coll., 2026]]). La réglementation n'est pas un remède ici ; c'est une manière de blanchir l'erreur en règle.

**Les affirmations d'équité exigent des preuves au niveau des sujets.** Un régularisateur ciblant le genre a réduit l'écart de MAE de validation de 0.02 à 0.005, puis a augmenté l'écart et l'erreur du groupe le plus mal servi sur des sujets tenus à l'écart ([[student-attention-estimation-fairness-2026|Fragkiadakis et coll., 2026]]). Rapporter une seule découpe comme preuve d'équité est une défaillance de conception avec un coût d'équité.

**La vie privée peut être intégrée dès la conception.** TutorLoop a fait tourner WebGazer côté client, si bien que le regard brut ne quittait jamais le navigateur ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Ce choix montre qu'une partie du coût est architecturale plutôt qu'inhérente. La question plus difficile est de savoir si l'inférence devrait exister du tout.

## Idées fausses courantes

**« L'oculométrie dit où est l'attention. »** Elle dit où pointent les yeux. Le regard peut rester sur une diapositive pendant que l'apprenant pense à autre chose, et il peut quitter l'écran pour des raisons sans rapport avec l'attention. La mesure d'attention de TutorLoop corrélait avec l'apprentissage à r = 0.017, ce qui est proche de l'absence de relation ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**« Un signal physiologique est une lecture directe d'un état mental. »** L'EDA indexe l'activation sympathique, et la variabilité cardiaque indexe la récupération autonome. Ni l'une ni l'autre ne distingue le stress de l'effort ou de l'excitation. Un modèle qui prédit des notes d'examen à partir de l'EDA, du mouvement et de la température cutanée a appris la signature d'activation du corps, pas la compréhension de l'étudiant ([[physiological-signals-exam-outcomes-ml|Yamazaki et Rimal, 2026]]).

**« Une exactitude de classification élevée signifie que le système détecte l'état. »** L'exactitude dépend des étiquettes, de la découpe et du taux de base. La prédiction de familiarité par EEG est tombée de 0.9853 à 0.6038 de F1 lorsque la validation a respecté les frontières entre essais ([[eeg-familiarity-automated-assessment-2026|Nanayakkara et Halloluwa, 2026]]). Les 99.56 % de la surveillance décrivent un jeu de scénarios étiquetés sur mesure, pas des examens en direct ([[arif-automated-online-proctoring-yolov11-2026|Arif et coll., 2026]]).

**« L'engagement est une seule chose, donc un seul score peut le représenter. »** Le construit comporte trois volets, et un capteur n'atteint surtout que le premier. E3Sense a trouvé que les apprenants le définissaient par des indicateurs cognitifs, comportementaux et émotionnels dans des proportions différentes, et que ces définitions changeaient la prédiction ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et coll., 2026]]). Un nombre unique cache quelle couche a été mesurée.

**« Si le modèle est équitable sur la découpe de validation, il l'est en classe. »** Un régularisateur qui égalisait l'erreur de validation entre les groupes de genre a aggravé l'écart sur les sujets tenus à l'écart ([[student-attention-estimation-fairness-2026|Fragkiadakis et coll., 2026]]). L'équité est une propriété d'un déploiement, non d'un point de contrôle.

## Concepts liés
- [[student-modeling]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
- [[student-engagement]]
- [[self-regulated-learning]]
- [[embodied-learning]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[academic-integrity]]
- [[privacy]]
- [[bias-mitigation]]
- [[neurodiversity]]
- [[equity-in-ai-education]]
- [[accessibility]]
- [[machine-learning]]
- [[cognitive-psychology]]
- [[intelligent-tutoring]]

## Articles liés

- [[nissan-nursing-empathy-computer-vision-2026]] — la détection de contact physique suivait l'empathie évaluée par des observateurs, la détection de sourire l'inversait, le contact visuel et les cartes de chaleur étaient nuls (Nissan et coll. 2026)
- [[gaze-informed-ai-children]] — la narration par LLM déclenchée par le regard a retenu les enfants sur une zone narrée 6.48 s contre 1.67 s, mais l'étude a mesuré l'attention plutôt que la compréhension (Wu et coll., 2026)
- [[e3sense-multimodal-learner-engagement-sensing-2026]] — EEG porté sur la tête, oculométrie et EDA frontale ont prédit l'engagement auto-évalué à 75.0 % d'exactitude à un niveau près contre une base de 63.0 % (Anupkrishnan et coll., 2026)
- [[engagement-assessment-video]] — EduGage a fusionné sept flux portables et de caméra en estimations d'engagement par segment (MAE 0.81) et plaide pour une instrumentation plus légère (Leng et coll., 2026)
- [[student-attention-estimation-fairness-2026]] — un modèle d'attention multimodal a atteint une MAE de 0.283, et ses gains d'équité en validation se sont inversés sur des sujets tenus à l'écart (Fragkiadakis et coll., 2026)
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — l'IA portable est doublement transparente, si bien que l'exclusion physique échoue et que l'application dérive vers l'arbitrage des corps des étudiants (Corbin et coll., 2026)
- [[eeg-familiarity-automated-assessment-2026]] — quinze modèles de prédiction de familiarité par EEG sont tombés de 0.9853 à 0.6038 de F1 en validation indépendante des essais (Nanayakkara et Halloluwa, 2026)
- [[seeing-cognitive-representations-eeg-reconstruction]] — des images reconstruites par EEG suivaient la performance au test à R² = 0.79, avec un participant à forte reconstruction répondant incorrectement (Su et coll., 2026)
- [[physiological-signals-exam-outcomes-ml]] — une forêt aléatoire a prédit des catégories de notes d'examen à partir de l'EDA, du mouvement et de la température cutanée, signaux qui indexent l'activation plutôt que la compréhension (Yamazaki et Rimal, 2026)
- [[affective-text-wearable-student-health]] — chez 458 étudiants portant une bague Oura, le registre émotionnel plutôt que le sujet de préoccupation suivait le sommeil et la variabilité cardiaque (2026)
- [[tutorloop-sensor-cognitive-feedback-2026]] — le regard par webcam a piloté une rétroaction par apprentissage par renforcement pour 187 apprenants ; l'attention corrélait avec l'apprentissage à r = 0.017 tandis que la charge de travail corrélait négativement (2026)
- [[arif-automated-online-proctoring-yolov11-2026]] — des caractéristiques de pose YOLOv11 ont signalé un comportement suspect à 99.56 % sur un ensemble étiqueté sur mesure, sans tester la fraude ni l'équité (Arif et coll., 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]] — la connectivité EEG diminuait avec le soutien externe à l'écriture chez 54 participants, cadrant la dépendance comme une dette cognitive accumulée (Kosmyna et coll., 2025)
- [[kim-ai-embodied-learning-review-2026]] — sur 23 études, les rôles de captation dominaient avec 62.5 % des étiquettes et aucun système recensé ne fusionnait des flux multimodaux en direct (Kim et Han, 2026)
