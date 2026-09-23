---
title: "Comment puis-je réduire la triche par IA dans mon cours ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-09-22T19:10:56-04:00"
weight: 88
foundations: [academic-integrity, ai-literacy, reducing-ai-misuse]
assessment: [assessment]
translation_of: faqs/reduce-ai-cheating
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---
*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Comment puis-je réduire la triche par IA dans mon cours ?


**L'orientation la plus forte de la base de connaissances est de s'appuyer moins sur la détection et davantage sur une [[assessment|conception structurelle de l'évaluation]], des attentes explicites, la vérification de l'apprentissage et la [[ai-literacy|littératie de l'IA]].** La synthèse [[academic-integrity|Academic Integrity]] signale des limites substantielles de la détection des textes d'IA et soutient que l'intégrité académique à l'ère de l'[[generative-ai|IA générative]] est de plus en plus un problème de conception de l'évaluation plutôt que simplement un problème de détection. Les outils de détection ne sont pas fiables et sont injustes sur le plan procédural. Dans une étude contrôlée portant sur 642 résumés anglais publiés, deux détecteurs commerciaux ont signalé une légère *révision* par IA conforme aux consignes à un taux de 38–80%, et ont signalé des originaux non modifiés de 2023–25 dans 9–15% des cas (les disciplines non [[stem-education|STEM]] bien plus que les STEM, p<0.001) et, après une « humanisation » par IA, ont attrapé moins de 4% des réécritures étiquetées comme produites par IA, un catch-22 de l'intégrité qui punit l'aide honnête tout en permettant l'évitement délibéré.([[karr-ai-detection-humanization-2026]]) Dans une étude de terrain dissimulée, 94% des copies entièrement générées par l'IA et injectées dans des examens en ligne en direct dans cinq modules de psychologie sont passées inaperçues, et le travail de l'IA a en moyenne dépassé les vrais étudiants ; l'université Vanderbilt a désactivé son détecteur sous licence après n'avoir pas réussi à valider un taux de faux positifs annoncé de 1% qui impliquait environ 750 étudiants mal étiquetés parmi 75,000 copies annuelles.([[teichmann-detecting-undetectable-misconduct-2026]]) La détection seule est donc un levier faible ; le levier plus fort est l'argument de conception de l'évaluation exposé en détail dans [[redesign-assessment-ai-era]]. Voici des approches concrètes et exploitables, classées approximativement par force des preuves.

## 1. Des outils d'IA encadrés : « suggérer, ne pas répondre »

Configurez tout usage de l'IA par les [[simulating-students|étudiants]] de manière à ce qu'elle [[scaffolding|étaye]] plutôt qu'elle ne révèle. Le résultat causal le plus solide de la base de connaissances est un [[rct|essai contrôlé randomisé]] de terrain où un tuteur de style ChatGPT **non encadré** a augmenté la performance en pratique assistée de **+48%** mais a *réduit* les scores à l'examen sans aide de **−17%** ; un tuteur **encadré** (des indices au lieu de réponses, plus des informations sur les problèmes rédigées par l'[[teacher-role|enseignant]]) a entièrement éliminé le préjudice.([[generative-ai-guardrails-harm-learning]]) Une vaste étude portant sur 26,811 étudiants a constaté que l'externalisation des devoirs augmentait les scores des devoirs de 18% mais *abaissait* les scores aux [[summative-assessment|examens sans notes ni documents]] de 20% en six mois, soit exactement le préjudice que les [[guardrails|garde-fous]] et les mesures sans aide visent à prévenir.([[stromberg-generative-ai-learning-penalty-secondary-2026]])

**Exemples concrets :**
- Configurez le tuteur pour qu'il donne des indices [[socratic-method|socratiques]] progressifs plutôt que l'étape de réponse suivante.
- Alimentez l'IA avec des solutions correctes *et* des [[misconceptions|idées fausses]] courantes afin qu'elle puisse cibler les erreurs.
- Exigez une tentative de l'étudiant *avant* que l'IA ne révèle sa sortie (« montrez d'abord votre tentative »).
- Considérez tout outil qui rend la tâche sans effort comme mal placé, selon la règle du [[brcic-effortless-trap-productive-struggle-2026|« si laisser entrer l'IA rend la tâche sans effort, elle est au mauvais endroit »]].

## 2. Refonte de l'évaluation : faire apparaître la triche (et la dissuader) par la conception

Parce que le préjudice de l'usage abusif dépend de l'évaluation, changez ce qui compte comme réussite. La synthèse [[reducing-ai-misuse|Reducing AI Misuse]] classe cette approche au Tier-1 parce qu'elle fonctionne que l'étudiant choisisse ou non le bon comportement : elle contraint l'environnement au lieu de dépendre de la motivation. L'[[ai-assessment-scale-reform|AI Assessment Scale (AIAS)]] est un cadre structuré à cette fin : étiquetez chaque travail selon son niveau d'usage de l'IA (par exemple « aucune IA », « IA pour le remue-méninges uniquement », « assistance d'IA avec attribution », « usage complet de l'IA ») afin que les attentes soient explicites et applicables.([[ai-assessment-scale-reform]])

Une [[meta-analysis-systematic-review|revue systématique]] de 72 études sur l'IA générative en [[cs-education|enseignement de l'informatique]] aboutit à la même conclusion à partir d'une base de preuves différente : elle juge la **refonte** à la fois réalisable et à plus fort levier, en désignant l'ajout d'un élément oral ou autrement visible dans le processus à au moins une évaluation à fort enjeu par cours comme l'intervention la plus efficace à elle seule, et elle note que la détection est le domaine le plus *mince* de toute la revue, avec seulement 3 études, malgré sa place dominante dans le débat institutionnel ([[kumar-genai-computing-education-systematic-review-2026]]). La même revue rapporte que 60–80% des étudiants en informatique utilisaient l'IA générative dans leurs travaux, généralement sans autorisation explicite de l'enseignant, et que 70% d'un échantillon national d'enseignants demandaient explicitement une formation à la conception d'évaluations résistantes à l'IA.

**Exemples concrets :**
- **Évaluations sans aide, en classe et sans notes ni documents** : examens surveillés, questionnaires ou travaux écrits chronométrés où les étudiants travaillent sans outils. Accordez-leur un poids plus important, car c'est le travail à la maison que l'IA gonfle.
- **Examens et soutenances orales** : demandez aux étudiants d'expliquer ou de défendre leur travail à voix haute ; le dialogue en temps réel résiste par nature à l'IA.([[fenton-oral-exams-ai-authentic-assessment-2025]])
- **Traces du processus** : exigez des brouillons, des traces de raisonnement, des annotations « montrez votre réflexion » ou des journaux de réflexion afin que le *processus* soit visible, et pas seulement le produit.([[authentic-products-authenticated-processes-2026]])
- **Tâches authentiques et contextualisées** : utilisez des invites du monde réel, riches en données ou personnelles, difficiles à déléguer et significatives pour l'étudiant (par exemple appliquer un concept à un cas local, à un stage ou aux propres données de l'étudiant).([[kirsanov-beyond-detection-ai-online-assessments-2026]])
- **Zones sans IA** : désignez des parties du cours (ou des travaux précis) où la capacité autonome est réellement le construit évalué.
- **Variation de la tâche par étudiant** : donnez à chaque étudiant une version superficiellement distincte mais équivalente sur le plan du construit de la même tâche, afin que la copie soit structurellement inutile ; traitez cela comme conditionnel à la capacité, puisque [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]] a constaté que les générateurs de pointe n'atteignent que 0.81–0.88 sur un score conjoint d'intégrité, tandis que les modèles non de pointe s'effondrent à 0.50–0.55.

## 3. Vérification de l'apprentissage : vérifier la compréhension, pas la provenance

Plutôt que de tenter de prouver *comment* un travail a été produit, demandez parfois aux étudiants de *démontrer* ce qu'ils ont appris. [[best-response-student-ai-dialog-2026|« The Best Response to Student AI Use Is Not Detection, It Is Dialog »]] décrit de courtes conversations de vérification, des brouillons précoces, des réflexions et des vidéos d'étudiants comme mécanismes pratiques.

**Exemples concrets :**
- Une explication de 2 minutes en tête-à-tête ou enregistrée d'un travail remis.
- Un questionnaire de suivi sur la même matière, réalisé sans outils.
- Demander aux étudiants de réviser un échantillon de leur travail et d'expliquer les changements.

*Note :* cette source est un témoignage de praticien, elle est donc mieux traitée comme une pratique prometteuse que comme une preuve causale définitive.

**La vérification est aussi ce qui rend une procédure de faute défendable.** [[munoz-misconduct-allegation-evidence-2026|Munoz et ses collègues (2026)]] ont analysé des dossiers réels d'allégations de faute liée à l'IA générative et ont constaté que les principes de justice naturelle exigent qu'un étudiant soit informé de l'allégation et ait la possibilité de répondre *avant* toute décision ; cette possibilité de réponse prend généralement la forme d'une réunion d'enquête ou d'un entretien devant un comité, et tout ce que l'étudiant dit fait partie du dossier probatoire. Leurs catégories de preuves expliquent aussi pourquoi la vérification doit être intégrée au cours plutôt qu'improvisée pendant l'enquête : les traces comportementales enregistrées par le système n'existent que dans l'évaluation surveillée, et les preuves de processus plus faibles (brouillons, réunions de supervision, présentations) n'existent que là où ces pratiques étaient déjà en place. Une routine de vérification est une preuve de processus sur laquelle vous pouvez ensuite vous appuyer. La règle elle-même doit aussi être précise : [[wright-transcription-not-generation-2026|Wright (2026)]] montre que les interdictions qui traitent la transcription vocale et la rédaction générative comme un même « usage de l'IA » sont trop larges et risquent de sanctionner des étudiants qui n'ont pas fait la chose interdite, ce qui est un problème d'équité avant d'être un problème juridique ([[legal-issues-and-risks]]).

## 4. Séquences d'usage étayées : « réfléchir d'abord, l'IA ensuite, réviser en troisième lieu »

Plutôt que d'interdire l'IA, enseignez aux étudiants un flux de travail structuré qui les maintient dans la boucle cognitive. La synthèse [[reducing-ai-misuse|Reducing AI Misuse]] expose huit principes de conception : préserver la [[desirable-difficulties|friction cognitive]], positionner l'IA comme un partenaire de réflexion *provisoire* (et non une autorité), intégrer des points de contrôle de l'évaluation et exiger une tenue de journal [[metacognition|métacognitive]] et des journaux d'invites.

**Exemple de séquence concrète :**
1. **Réfléchir d'abord** : les étudiants font un remue-méninges, un plan ou un brouillon de façon autonome avant tout usage de l'IA.
2. **L'IA ensuite** : ils utilisent l'IA pour critiquer, prolonger ou générer des solutions de rechange par rapport à leur propre réflexion.
3. **Réviser en troisième lieu** : ils consignent ce pour quoi ils ont utilisé l'IA, ce qu'ils ont accepté ou rejeté et pourquoi (un journal des invites et des révisions).

## 5. Déclarations d'usage de l'IA propres à chaque tâche

Remplacez les cases génériques « J'ai utilisé l'IA ☐ » par des **cadres de déclaration [[discipline-specific-aied|propres au domaine]]** qui rattachent l'usage de l'IA à des étapes cognitives (par exemple la planification structurelle contre la génération de contenu).([[genai-declaration-frameworks-higher-education]]) Cela oblige les étudiants à réfléchir à *comment* ils ont utilisé l'IA et clarifie la frontière entre une aide acceptable et une faute. Associez cela à des attentes explicites et à l'assurance qu'une déclaration honnête ne sera pas pénalisée : les politiques punitives ou vagues poussent activement à la dissimulation.([[gonsalves-student-non-compliance-ai-declarations-2025]])([[chang-should-i-tell-my-teacher-ai-disclosure-2026]])

La modélisation de la conception de l'évaluation proposée par [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed et Temimi]] explique le mécanisme derrière ce conseil. La déclaration ne devient l'option attrayante que lorsque le coût de l'honnêteté reste faible ; et comme les faux positifs d'un détecteur retombent aussi sur des étudiants honnêtes, **une surveillance plus forte peut rendre la dissimulation relativement plus attrayante** chaque fois qu'une sensibilité accrue produit plus de nouveaux faux positifs que de nouveaux vrais positifs. Lisez une déclaration d'usage comme un contexte plutôt que comme un aveu, et concevez pour l'étudiant le plus tenté de dissimuler plutôt que pour l'étudiant moyen.

**Exemple concret :** une page de garde qui demande aux étudiants de préciser, pour chaque travail : *Avez-vous utilisé l'IA ? Pour quelles étapes (remue-méninges / rédaction / révision / vérification) ? Quel outil et quelles invites avez-vous utilisés ? Comment avez-vous évalué la sortie ?*

## 6. Développer la littératie de l'IA et des attentes honnêtes

La synthèse [[reducing-ai-misuse|Reducing AI Misuse]] classe l'enseignement de la littératie de l'IA et du [[prompt-engineering|promptage]] au Tier-2 : un module [[k-12]] utilisant une pratique d'invites fondée sur des scénarios avec un correcteur automatique [[llm|LLM]] a amélioré les compétences réelles de promptage et augmenté la confiance dans l'usage de l'IA pour apprendre de **+10.4%**, 87% des participants déclarant avoir appris à utiliser l'IA de façon responsable.([[aaai2026-prompting-literacy-k12]]) Énoncez clairement ce qui compte comme triche, *pourquoi* cela nuit à l'apprentissage (l'[[ai-misuse-learning-harm|écart entre performance et apprentissage]]) et comment les étudiants peuvent utiliser l'IA de façon productive : cela répond aux problèmes de norme de pair (« tout le monde le fait ») et de rationalisation documentés dans [[ai-tools-academic-work-cheating-2026]] et [[student-rationalization-ai-writing]].

Les enquêtes auprès des étudiants appuient ce cadrage. Parmi 504 étudiants de sociologie, 65% avaient utilisé l'IA générative pour leurs travaux mais seulement 3% pour générer le texte d'un devoir et 2% pour générer un brouillon complet ; par ailleurs, 81% avaient reçu des indications sur l'IA mais seulement 46% les trouvaient très claires ([[student-genai-use-views-writing]]). L'ambiguïté, et non la désobéissance, est le problème pratique, ce qui explique pourquoi le volet de la capacité pédagogique de cette FAQ rejoint [[ai-literacy-evidence]] et le classement des interventions de [[top-10-findings-ai-education-instructors]]. Les étudiants ne décrivent pas les outils dans les mêmes termes que la politique : [[mulisa-students-genai-integrity-perspectives-2026|Mulisa et Mezgebu (2026)]] ont constaté que la question que se posent les étudiants est de savoir si l'IA générative est un outil qui facilite la triche ou un partenaire qui soutient l'apprentissage, et leur compte rendu de la tension entre les règles institutionnelles d'intégrité et les besoins d'apprentissage des étudiants est plus utile pour cadrer les attentes qu'un avertissement supplémentaire sur les sanctions.

## L'essentiel

Combinez un **plancher structurel** (garde-fous et refonte de l'évaluation qui rendent la triche difficile indépendamment de la motivation) avec un **renforcement éducatif des capacités** (littératie de l'IA, déclarations, séquences « réfléchir-IA-réviser »). La détection seule est le levier le plus faible ; l'objectif est de faire de l'usage honnête et productif de l'IA la voie de moindre résistance.
