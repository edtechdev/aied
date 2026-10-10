---
title: "Questions juridiques et risques"
created: "2026-09-18T05:40:00-04:00"
updated: "2026-10-10T04:00:01-04:00"
type: concept
foundations: [academic-integrity, reducing-ai-misuse]
assessment: [ai-detection, assessment-validity, remote-proctoring]
institutions: [educational-policy-ai, governance, regulation]
ethics: [accessibility, ai-use-disclosure, equity-in-ai-education, hallucination-risk, privacy]
pedagogy: [professional-training]
discipline: [legal education]
level: [higher ed]
audience: [administrators, policymakers, institutions, researchers]
page_kind: [synthesis]
confidence: medium
translation_of: concepts/legal-issues-and-risks
source_updated: "2026-09-30T07:29:37-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Questions juridiques et risques (Legal Issues and Risks)** — l'exposition que subissent les institutions, le personnel et les étudiants lorsque l'[[generative-ai|IA générative]] est mal encadrée en éducation : un étudiant accusé à tort de fraude sur la foi du score d'un détecteur, un système de surveillance d'examen qui observe et enregistre plus que l'évaluation ne l'exige, une règle trop large qui pénalise un outil d'assistance, ou une politique trop vague pour être appliquée de manière cohérente. Le risque n'est pas une seule question juridique mais plusieurs, qui arrivent ensemble — probatoire (l'accusation peut-elle être étayée), contractuelle et procédurale (l'institution a-t-elle suivi ses propres règles et accordé à l'étudiant une procédure équitable), fondée sur l'égalité de traitement (la règle pénalise-t-elle les étudiants handicapés ou non locuteurs natifs), et relative à la protection des données (ce que la surveillance a collecté et où cela a été stocké). Cela se distingue de l'[[academic-integrity|intégrité académique]], qui est le cadre déontologique appliqué : cette page traite de ce qui se produit lorsque cette application est contestée.

## Questions à examiner

- Les outils de détection ne peuvent pas identifier de manière fiable l'auteur. Si l'instrument ne peut établir le fait en question, sur quoi repose réellement une affaire de faute ?
- Les données de surveillance d'examen et de détection par l'IA sont produites à grande échelle et conservées indéfiniment. Qui assume l'exposition juridique liée à ces données, l'institution ou son fournisseur ?
- Lorsqu'une politique interdit « l'usage de l'IA » sans distinguer la [[wright-transcription-not-generation-2026|transcription de la génération]], la règle protège-t-elle l'intégrité ou pénalise-t-elle un aménagement pour handicap ?

## Introduction

Les données probantes de la base de connaissances sur ce sujet sont de nature procédurale plutôt que juridique. Elles documentent ce que les institutions considèrent comme des preuves, comment fonctionnent les procédures d'accusation, à quel point les instruments sont peu fiables, et ce que la surveillance collecte ; elles ne documentent pas encore les issues contentieuses. Cette lacune doit être énoncée clairement plutôt que comblée par des affirmations assurées : les affaires qui trancheraient ces questions sont pour la plupart non rapportées, réglées à l'amiable, ou encore en cours de procédures internes à l'institution.

Ce que la littérature permet d'étayer, c'est une description des modes de défaillance qui créent une exposition juridique. Le schéma récurrent est que ce sont les propres instruments et procédures de l'institution, et non un accusateur malveillant, qui la mettent en danger : un score probabiliste traité comme un constat, une règle plus claire dans son intention que dans sa portée, un système qui a collecté des données que personne n'avait demandées, et une audience qui a supposé que la preuve technique n'avait pas besoin d'être examinée.

## Où le risque se concentre

### Accusation infondée et preuve défectueuse

[[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] ont analysé des dossiers réels d'allégations de faute liée à l'IA générative et ont classé en catégories les preuves utilisées par les institutions : les traces comportementales enregistrées par le système, disponibles uniquement dans une évaluation surveillée ou supervisée ; les preuves de processus telles que les brouillons, les réunions de supervision et les exposés, lorsque ces pratiques existent ; et les preuves générées par l'enquête elle-même. Deux conséquences en découlent pour l'exposition juridique. Premièrement, dans les travaux remis sans surveillance, la catégorie des traces enregistrées par le système est vide, ce qui reporte les affaires sur des catégories plus faibles. Deuxièmement, ils relèvent que les principes de justice naturelle exigent qu'un étudiant soit informé de l'allégation et reçoive la possibilité de répondre avant toute décision, obligations codifiées dans les normes réglementaires australiennes (Department of Education, 2021 ; TEQSA, 2025) ainsi que dans les politiques d'intégrité académique reconnues. La possibilité de réponse prend généralement la forme d'une réunion d'enquête ou d'un entretien devant une commission, et ce que dit l'étudiant devient partie intégrante du dossier probatoire — ce qui signifie que les défaillances procédurales, et pas seulement probatoires, sont le point où une affaire devient vulnérable.

Le problème probatoire se situe en dessous. La sortie d'un détecteur est la preuve la plus souvent sollicitée et la moins capable d'en supporter le poids. [[hadra-ai-detector-accuracy-efl-2026|Hadra et al. (2026)]] ont testé Turnitin et Originality sur un corpus équilibré de 192 textes et ont trouvé une précision globale de 0,69 et 0,61 respectivement, tous deux fonctionnant mal sur les écritures hybrides humain-IA — la forme la plus susceptible d'apparaître dans une allégation réelle — la précision baissant davantage avec la longueur du texte, sur les écrits scientifiques, et avec une tendance limite à classer à tort comme IA des travaux rédigés par un humain lorsque l'auteur était un étudiant en anglais langue étrangère. [[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer et al. (2026)]] parviennent à la même conclusion à partir d'un corpus et d'un ensemble d'outils différents, et [[bassett-ai-detectors-education-2026|Bassett et al.]] formulent l'argument structurel selon lequel aucun seuil ne résout le problème : un détecteur réglé pour attraper les usages de l'IA signalera des travaux humains, et un détecteur réglé pour épargner les travaux humains manquera des usages de l'IA ; tout score unique est donc un choix quant à l'erreur à commettre. [[karr-ai-detection-humanization-2026|La revue de Karr]] sur les raisons de l'échec de la détection aboutit au même point du côté de l'humanisation de l'écriture, et [[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al. (2026)]] soutiennent que le cadre procédural lui-même doit désormais être réexaminé, car l'ère des fautes indétectables brise l'hypothèse selon laquelle une faute peut être prouvée par l'artefact remis.

### Vie privée et surveillance

[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana et al. (2026)]] cartographient la [[remote-proctoring|surveillance à distance des examens]] dans l'évaluation en soins infirmiers et font ressortir la vie privée et la surveillance parmi leurs préoccupations principales, aux côtés de l'impact émotionnel sur les étudiants et des effets sur l'[[equity-in-ai-education|équité]]. [[automated-online-exam-proctoring-decade-review-2026]] et [[academic-dishonesty-automated-proctoring-ai-2026]] documentent les mêmes [[ai-technologies|technologies]] sur une fenêtre plus longue, et les questions de protection des données qu'elles soulèvent sont des questions ordinaires aux conséquences juridiques : ce qui est capté (vidéo, audio, frappes au clavier, regard, scans de la pièce), sa durée de conservation, son lieu de stockage, qui peut y accéder, si le fournisseur le traite ultérieurement, et si les étudiants y ont consenti comme condition de l'évaluation. Les institutions opérant dans des environnements de données réglementés assument des obligations légales bien avant qu'un procès n'apparaisse, et le travail de la base de connaissances sur les systèmes d'IA locaux et hébergés par des fournisseurs, attentif à la FERPA et au RGPD, montre comment les mêmes questions s'appliquent aux outils d'enseignement et pas seulement à la surveillance d'examen.

### Accessibilité et handicap

[[wright-transcription-not-generation-2026|Wright (2026)]] soutient que les interdictions générales de « l'usage de l'IA » sont trop inclusives parce qu'elles ne distinguent pas la transcription de la parole en texte et l'OCR de la rédaction générative, et que les étudiants atteints de troubles affectant le contrôle de la motricité fine, la lisibilité de l'écriture manuscrite ou la précision de la frappe ont historiquement reposé sur exactement ces outils — y compris des produits autonomes de conversion de la voix en texte tels que Dragon NaturallySpeaking, dont plusieurs ont été abandonnés ou dégradés, la transcription assistée par l'IA comblant le manque fonctionnel. Wright relève que l'intersection du handicap, des technologies d'assistance et des politiques de faute liée à l'IA est peu explorée et que l'ampleur de ce déplacement n'a pas été mesurée empiriquement. L'exposition est simple dans sa forme : une règle qui retire à un étudiant son principal moyen de produire un travail lisible est une règle qui pourrait avoir besoin d'un processus d'aménagement pour être défendable. [[shin-ai-policies-sld-2026]] documente le même vide du côté des politiques pour les étudiants ayant des troubles spécifiques des apprentissages, et le travail de la base de connaissances sur les [[assistive-technology|technologies d'assistance]] et la [[neurodiversity|neurodiversité]] fournit les termes environnants.

### Équité linguistique et frontière entre soutien et substitution

[[li-genai-assessment-language-equity-2026|Li (2026)]] fournit la version fondée sur l'égalité de traitement de l'argument pour les étudiants qui utilisent l'anglais comme langue additionnelle. Parce qu'une même interface remplit désormais à la fois la relecture autorisée et la rédaction interdite, une règle qui traite l'[[generative-ai|IA générative]] comme une catégorie unique d'assistance non autorisée impose des charges de conformité plus élevées aux étudiants les plus susceptibles d'avoir besoin d'un soutien linguistique légitime, concentre le soupçon sur les auteurs dont la fluidité de surface a changé, et rend possible une application sélective sur des preuves fragiles — les allégations entraînant des conséquences réputationnelles, académiques et parfois sur le visa ou le plan financier. Le remède est une frontière définie par la fonction et par le construit évalué plutôt que par le nom de l'outil, séparant les interventions de surface qui n'ajoutent aucune idée, source ou structure analytique de la substitution qui crée ou refaçonne matériellement le travail intellectuel, avec une [[ai-use-disclosure|divulgation]] calibrée afin que la traduction et la relecture courantes n'entraînent pas des coûts de conformité supérieurs à ceux supportés par les pairs monolingues. La structure juridique est le raisonnement en matière de discrimination indirecte — identifier la charge biaisée par cohorte que produit une règle neutre en apparence, puis se demander si un objectif légitime est poursuivi par des moyens proportionnés et pratiquement applicables — renforcé par l'attente du droit administratif selon laquelle un décideur peut énoncer la règle appliquée, les preuves retenues, et pourquoi l'issue était proportionnée, ce qui rend la décision susceptible de recours et le processus légitime. La [[ai-detection|détection]] est reléguée au rang de signal de triage, les historiques de brouillons, les remises échelonnées et un court entretien aligné sur le construit étant préférés comme preuves, si bien que l'exposition court dans les deux sens : celle d'une contestation pour discrimination ou en révision, et celle de la fragilité d'un constat reposant sur des substituts tels qu'un langage poli ou des formulations de non-locuteur.

### Règles peu claires, application incohérente

[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski et Hurley (2025)]] traitent la clarté comme la condition préalable à une application défendable plutôt que comme une courtoisie, et rapportent que les politiques des écoles de droit vont d'une [[governance|gouvernance]] complète à l'absence de politique déclarée, la plupart laissant aux enseignants individuels le soin d'interpréter et d'appliquer les règles. [[qian-governing-genai-higher-ed-policy-2026|Qian (2026)]] relève la même variation dans les universités américaines, accompagnée d'écosystèmes de soutien qui diffèrent tout autant, et [[crompton-governing-genai-higher-ed-delphi-2026]] rapporte le consensus des experts selon lequel la gouvernance est fragmentée. Un étudiant sanctionné en vertu d'une règle que personne ne peut énoncer précisément fait l'objet d'un différend sur la procédure et l'équité avant d'être un différend sur l'IA, et [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] soutient que le remède est une [[assessment|conception de l'évaluation]] qui rende le jugement et la responsabilité visibles plutôt qu'une surveillance qui les infère. L'enquête de [[watson-rainie-ai-challenge-faculty-survey-2026|Watson et Rainie (2026)]] auprès de 1 057 enseignants américains montre la même incohérence dans l'autre direction : 87 % des répondants rédigeaient leurs propres règles au niveau du devoir, tandis que seulement 48 % indiquaient que leur institution avait des lignes directrices écrites et 35 % que leur département en avait, si bien que les étudiants d'une même institution rencontrent un patchwork de politiques rédigées individuellement. La réponse structurelle sous ces documents est mince — un groupe de travail ou une instance de supervision dans 55 % des cas, mais la [[ai-literacy|littératie en IA]] adoptée comme résultat de formation générale dans seulement 13 % des cas — et cela importe juridiquement parce qu'appliquer une règle que l'institution n'a jamais adoptée est difficile à défendre.

[[coates-governing-academic-integrity-indicators-2025|Coates, Croucher et Calderon (2025)]] situent la faiblesse plus en amont, dans la gouvernance plutôt que dans la conduite des étudiants ou la qualité des instruments. Leur cadre d'indicateurs d'intégrité académique — 130 items répartis en huit dimensions allant de la conception et du développement à l'analyse, la communication des résultats, l'évaluation et l'amélioration — est rédigé sous forme de questions de gouvernance à l'intention des conseils et des commissions : si le conseil le plus élevé de l'institution reçoit des mises à jour sur les processus et les résultats de l'évaluation, si les indicateurs clés de performance couvrent la qualité de l'évaluation, si l'initiation et l'orientation incluent l'intégrité académique, et s'il existe une voie simple pour signaler les affaires de tricherie contractuelle. Leur programme de réforme cible les architectures de gouvernance, les personnes occupant des rôles de gouvernance, ainsi que les technologies et ressources soutenant l'évaluation, et ils soutiennent qu'un tel développement a peu de chances de porter ses fruits sans un apport extérieur venant de la [[regulation|réglementation]], de l'[[benchmark|évaluation comparative]] et de la concurrence interinstitutionnelle. Pour l'exposition juridique, l'implication est qu'une position défendable repose sur la connaissance et la documentation de sa propre pratique — la même information dont une institution a besoin lorsqu'une décision est contestée.

### Attaquer le correcteur automatisé

Une exposition différente se situe à l'intérieur des instruments eux-mêmes. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] a caché cinq injections indirectes d'invites dans les fichiers d'une dissertation synthétique qu'un outil institutionnel de [[automated-assessment|correction par IA]] (Microsoft Copilot, GPT-5.2) avait notée comme insuffisante lors de six exécutions de référence sur six. Deux stratégies ont fait monter la note sans avertissement visible pour l'utilisateur, avec des taux de réussite d'attaque rapportés de 100 % (9 itérations sur 9) et 94 % (17 sur 18), en combinant manipulation d'instructions, jeu de rôle et obscurcissement ; l'outil a désactivé silencieusement un fil de discussion après avoir bloqué l'attaque la plus simple, et lors d'une itération il a annoncé qu'il ne suivrait jamais les instructions intégrées, puis a relevé la note à chacune des six exécutions suivantes. Une note obtenue par une instruction cachée ne peut prétendre à aucune [[assessment-validity|validité]], et la même technique pourrait être utilisée pour dégrader un travail sans laisser de trace durable dans la production — ce qui signifie que le dossier d'appel d'une décision automatisée contestée peut être vide, et qu'un constat de faute (ou de mérite) ne peut être prouvé par l'artefact. Les demandes de Humble au niveau du secteur sont claires : une [[educational-policy-ai|politique d'IA]], un [[educational-development|développement professionnel]] et des tests de résilience standardisés et indépendants du domaine, afin que la surface d'attaque soit mesurée plutôt que supposée, avec un usage restreint de l'IA et une [[human-in-the-loop-ai|revue humaine]] réservés aux travaux à enjeux élevés.

### Au-delà de la porte du campus

Pour les programmes professionnels, l'exposition ne s'arrête pas à l'obtention du diplôme. Gutowski et Hurley rapportent que les règles de déontologie professionnelle liant les juristes en exercice — le devoir de compétence technologique, la confidentialité, la supervision des personnes utilisant les outils, la franchise envers le tribunal — s'attachent déjà à l'usage de l'IA, et qu'une autorité [[hallucination-risk|hallucinée]] a entraîné des sanctions pour des praticiens ayant déposé des affaires fabriquées. La même logique de transfert s'applique partout où une licence, un enregistrement ou un devoir légal suit le diplômé, ce qui explique pourquoi les pages disciplinaires de l'[[legal-education|enseignement du droit]] et des [[medical-education|professions de santé]] se situent à côté de celle-ci.

## Questions ouvertes

- Lequel de ces risques a effectivement produit un contentieux ou des constats réglementaires ? La base de connaissances dispose de procédures, de politiques et d'évaluations techniques, mais d'aucune issue d'affaire, et elle ne doit pas être lue comme si c'était le cas.
- La sortie d'un détecteur subsiste-t-elle comme preuve de quoi que ce soit une fois qu'une institution concède ses taux d'erreur lors d'une audience, ou cette concession transforme-t-elle l'affaire en différend sur l'équité procédurale ?
- Qui est le responsable du traitement des données, le fournisseur ou l'institution, lorsque la surveillance d'examen et la détection passent par une plateforme tierce, et cela change-t-il les conseils donnés aux institutions ?
- Les institutions devraient-elles publier les normes de preuve qu'elles appliquent aux fautes liées à l'IA, de la manière dont les seuils probatoires sont publiés ailleurs, comme un moyen de réduire à la fois les accusations infondées et l'exposition juridique ?

## Concepts liés

- [[academic-integrity]] — le cadre déontologique dont l'application porte le risque
- [[ai-detection]] — l'instrument au cœur des affaires d'accusation infondée
- [[remote-proctoring]] — la surveillance dans l'évaluation et ses questions de protection des données
- [[assessment-validity]] — si la preuve peut établir l'affirmation qu'on en tire
- [[privacy]] — collecte, conservation et traitement ultérieur des données des étudiants
- [[regulation]] — les obligations légales et réglementaires que les institutions doivent respecter
- [[governance]] — conception de la politique interne et cohérence de son application
- [[educational-policy-ai]] — la politique institutionnelle en matière d'IA comme source d'exposition involontaire
- [[ai-use-disclosure]] — les attentes de divulgation et leurs limites inapplicables
- [[accessibility]] — l'aménagement raisonnable lorsqu'une règle retire un outil d'assistance
- [[assistive-technology]] — les outils au cœur du problème d'inclusion excessive
- [[neurodiversity]] — les étudiants les plus exposés aux interdictions trop larges
- [[equity-in-ai-education]] — la charge différenciée de la détection et de la surveillance
- [[student-experience]] — le coût humain qui précède le coût juridique
- [[hallucination-risk]] — l'autorité fabriquée comme responsabilité professionnelle et institutionnelle
- [[reducing-ai-misuse]] — l'alternative de la prévention à l'accusation

## Articles liés

- [[munoz-misconduct-allegation-evidence-2026]] — Ce que contiennent réellement les dossiers d'allégation de faute, et l'exigence de justice naturelle
- [[hadra-ai-detector-accuracy-efl-2026]] — Précision des détecteurs, échec sur les textes hybrides et risque d'erreur de classement en anglais langue étrangère
- [[van-vlasselaer-ai-detector-reliability-2026]] — Fiabilité des outils de détection sur un second corpus
- [[bassett-ai-detectors-education-2026]] — Pourquoi aucun seuil de détection ne peut être le bon : l'argument du compromis sur l'erreur
- [[teichmann-detecting-undetectable-misconduct-2026]] — Les procédures de faute réexaminées lorsque la preuve est devenue indétectable
- [[wright-transcription-not-generation-2026]] — Règles d'IA trop inclusives, aménagement pour handicap et ajustement raisonnable
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — La surveillance à distance des examens cartographiée, avec ses préoccupations de vie privée et de surveillance
- [[automated-online-exam-proctoring-decade-review-2026]] — Une décennie de recherche sur la surveillance automatisée des examens
- [[academic-dishonesty-automated-proctoring-ai-2026]] — La malhonnêteté académique et la surveillance d'examen à l'ère de l'IA
- [[gutowski-hurley-genai-policy-legal-education-2025]] — La clarté des politiques comme condition préalable à une application défendable
- [[qian-governing-genai-higher-ed-policy-2026]] — Les politiques et écosystèmes de soutien dans des universités américaines novatrices
- [[crompton-governing-genai-higher-ed-delphi-2026]] — Consensus d'experts sur une gouvernance fragmentée
- [[sharma-judgment-visible-genai-assessment-2026]] — L'intégrité par un jugement visible plutôt que par la surveillance
- [[shin-ai-policies-sld-2026]] — Le vide de politiques pour les étudiants ayant des troubles spécifiques des apprentissages
- [[li-genai-assessment-language-equity-2026]] — L'équité linguistique comme problème de conception de règles : la frontière entre soutien et substitution, la discrimination indirecte et la révisabilité (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Des étudiants attaquant les correcteurs d'IA par injection indirecte d'invites, avec des notes modifiées sans être détectées (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Indicateurs de gouvernance et programme de réforme pour authentifier l'évaluation (Coates, Croucher & Calderon 2025)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 1 057 enseignants américains : les politiques individuelles dépassent de loin les politiques institutionnelles, la réponse structurelle est mince (Watson & Rainie 2026)
