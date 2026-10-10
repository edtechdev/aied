---
title: "Éducation à l'environnement"
created: "2026-09-20T12:40:00-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
foundations: [ai-education]
pedagogy: [inquiry-based-learning, situated-learning, critical-pedagogy]
technology: [generative-ai, llm, open-source]
ethics: [sustainability, ethics, global-south]
institutions: [educational-policy-ai, governance]
discipline: [environmental education]
confidence: medium
translation_of: concepts/environmental-education
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

## Questions à examiner

- « L'IA et l'éducation à l'environnement » peut recouvrir deux choses très différentes : utiliser l'IA pour enseigner *au sujet du* climat et du développement durable, et réduire le coût environnemental de *l'usage de* l'IA dans les salles de classe. Laquelle entendez-vous dans votre établissement — et laquelle dispose d'une ligne budgétaire ?
- Si une université enseigne les sciences du climat avec un [[llm|grand modèle de langue]] énergivore sur l'ordinateur portable de chaque étudiant, a-t-elle fait progresser l'éducation à l'environnement ou l'a-t-elle sapée ? Que faudrait-il pour que la réponse soit « les deux » ?
- [[ai-assisted-inquiry-ssi-climate|Une expérience]] a montré que l'enquête assistée par IA améliorait la prise de décision en matière de climat par rapport à l'enquête seule, les gains se concentrant sur les étapes les plus faibles. Feriez-vous confiance à une séquence sur le climat assistée par IA dans votre classe, et que voudriez-vous constater au préalable ?
- Presque aucun article d'[[ai-education|AIED]] ne rend compte de son empreinte de calcul ou de carbone. Un impact [[sustainability|de durabilité]] non déclaré est-il un problème de recherche, d'approvisionnement, d'enseignement, ou aucun des trois ?

## Introduction

L'**éducation à l'environnement** développe la compréhension qu'ont les apprenants des systèmes écologiques, du climat et de l'interdépendance entre l'humain et son environnement, ainsi que les dispositions et les compétences pour agir en conséquence — souvent désignée institutionnellement comme l'éducation au développement durable (EDD) ou l'« éducation verte ». Dans un contexte d'IA en éducation, le terme porte une tension que le corpus rencontre sans toujours la nommer : **l'IA comme outil pour l'éducation à l'environnement** (enseigner les contenus sur le climat et le développement durable au moyen d'outils génératifs) et **l'empreinte environnementale de l'IA elle-même** (le coût en carbone, en eau et en énergie des modèles que les établissements déploient). Ce sont des questions distinctes, avec des données probantes, des acteurs et des remèdes différents ; les confondre — comme le font plusieurs articles et la plupart des documents stratégiques — rend impossible de dire qui est responsable de quoi.([[daniel-ai-sustainability-scoping-review-2026]])([[aied-carbon-footprint-reporting]])

## Deux choses appelées « éducation à l'environnement avec l'IA »

- **L'IA pour l'éducation à l'environnement** — utiliser l'IA pour enseigner des contenus environnementaux, développer une conscience du développement durable ou soutenir les compétences vertes. Cette moitié compte des cadres d'analyse, une étude par questionnaire auprès des [[teacher-role|enseignants]] et une expérience de classe.
- **L'empreinte de l'IA dans l'éducation** — les émissions et l'usage des ressources des modèles et de l'infrastructure employés pour l'enseignement, quelle que soit la matière. Cette moitié compte une revue des pratiques de déclaration, un [[benchmark|repère de référence]] d'ingénierie et une petite étude d'interface — et rien sur l'empreinte de l'IA employée spécifiquement pour l'éducation à l'environnement.

Un troisième volet, plus faible, traite l'« apprentissage durable » comme une propriété [[pedagogy|pédagogique]] plutôt qu'environnementale : un apprentissage qui persiste et se transfère plutôt que d'être court-circuité par le [[cognitive-offloading|délestage cognitif]]. Il partage le vocabulaire de la durabilité mais n'est pas une affirmation environnementale.([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])

## Enseigner les sujets environnementaux et climatiques avec l'IA

La donnée probante la plus solide est une quasi-expérience à trois groupes utilisant le changement climatique comme question socio-scientifique. Les étudiants qui travaillaient avec un partenaire d'IA au sein d'une tâche d'[[inquiry-based-learning|enquête]] structurée ont surpassé leurs camarades en enquête seule (d = 0.69) et ceux suivant un enseignement traditionnel (d = 1.88) sur une grille de prise de décision, avec les gains les plus importants sur les étapes où les étudiants entraient les plus faibles — le suivi et la gestion adaptative, et la production d'alternatives. La condition IA était *additionnelle* à l'enquête plutôt qu'un remplacement, et le recueil et l'analyse des données n'ont pas séparé les groupes du tout, ce qui suggère que l'IA a soutenu le raisonnement sur les compromis plutôt que la collecte de preuves.([[ai-assisted-inquiry-ssi-climate]])

Au niveau du [[curriculum-design|programme]], le cadre AI-SEE intègre l'IA dans un [[engineering-education|programme d'ingénierie]] selon quatre piliers (piloté par l'intelligence, renforcé par le vert, porté par la responsabilité, intégré à la pratique) plutôt que comme un module de durabilité rapporté ; un pilote mené auprès de 144 étudiants a rapporté des gains de conscience du développement durable et d'[[student-engagement|engagement]] comportemental aux niveaux personnel, académique, professionnel et social. Les auteurs mettent en garde : il s'agit de données d'entretien issues d'un seul établissement, auto-déclarées, recueillies à un seul moment, dans un seul programme chinois des transports.([[liu-ai-sustainable-engineering-education-2026]])

Deux études plus modestes portent sur le volet conception. Une [[learning-design|conception pédagogique]] assistée par IA sous contraintes de pédagogie du développement durable a amélioré les plans de cours d'enseignants en formation initiale avec un effet invraisemblablement élevé (d = 2.80, 28 équipes, pas de groupe témoin). Par ailleurs, une étude par équations structurelles portant sur 122 enseignants en poste a montré que l'usage *pratique* de l'IA sur des tâches scientifiques et d'énergie verte, ainsi que la participation à l'élaboration de matériels alignés sur l'EDD, prédisaient la capacité d'intégration de l'IA, tandis que les connaissances abstraites sur l'IA et les attitudes ne le faisaient pas — bien qu'un [[self-report-measures|questionnaire]] dichotomique et un construit de connaissance faible limitent la portée de ces résultats.([[talebzadeh-ai-green-education-2026]])([[riandi-teacher-ai-green-energy-education-2026]])

## L'empreinte environnementale de l'IA dans l'éducation

C'est ici que le corpus est le plus mince. Une revue de l'ensemble des 396 articles des actes de l'AIED 2025 a mis au jour une « adoption des grands modèles de langue sans déclaration » : la plupart des projets utilisent des [[llm|grands modèles de langue]], 85 articles ont déclaré un coût de calcul, et seulement 57 ont mentionné un impact environnemental — en employant des métriques incompatibles, de sorte que le domaine ne peut pas agréger ses propres données probantes. Les auteurs soutiennent que le fait de ne pas déclarer le coût environnemental constitue en soi une préoccupation [[ethics|éthique]], et proposent une méthode [[open-source|open source]] (CodeCarbon associée à une estimation des FLOPs à deux paramètres pour les modèles propriétaires).([[aied-carbon-footprint-reporting]])

Du côté de l'apprenant, une interface de rétroaction écologique exposant le compromis latence-carbone pendant l'usage en direct d'un grand modèle de langue a été étudiée auprès de 89 étudiants de premier cycle en informatique dans un cours d'éthique du calcul : les étudiants ont choisi le mode le moins carboné dans environ 45% des interactions à faible latence, mais dans moins de 5% des cas à latence élevée, et la conscience du développement durable a augmenté significativement ce choix. L'échantillon est petit et inhabituellement bien informé sur le plan technique, mais c'est la seule donnée probante directe du corpus montrant que l'information sur l'empreinte fait bouger les apprenants — et elle suggère que la contrainte déterminante est la patience, non les valeurs.([[llm-environmental-impact-student-usage-2026]])

Les données probantes sur l'atténuation proviennent d'un assistant de base de connaissances en [[cs-education|informatique]] déployé sur site, sur un seul GPU grand public (12 Go de VRAM), avec des contenus sous licence ouverte : 1.8 mWh par requête au mieux — environ 0.54 Wh pour une classe de 30 étudiants soumettant dix requêtes chacun — avec un ajustement fin conscient de la quantification qui contient à la fois la perte de précision et l'augmentation de l'[[hallucination-risk|hallucination]] que la seule compression avait provoquée. C'est un repère de référence d'ingénierie, non une étude d'apprentissage, mais il montre que la question de l'empreinte a des leviers de conception (ancrage, quantification, lieu de déploiement), et pas seulement des leviers de discipline d'usage.([[shen-sustainable-ai-knowledge-base-cs-education-2026]])

## Compétences vertes, conscience du développement durable et capacité des enseignants

Ensemble, ces études décrivent un agenda de compétences vertes mis en œuvre de manière inégale : la conscience du développement durable comme résultat curriculaire, l'élaboration de matériels alignés sur l'EDD comme mécanisme de développement de la capacité des enseignants, et la prise de décision climatique comme compétence de raisonnement mesurable. Le volet critique en valeurs fournit la mise en garde : une analyse conceptuelle soutient que la contribution de l'IA à une éducation durable est **conditionnelle et médiée par la gouvernance**, ne soutenant la durabilité que lorsque l'adoption est subordonnée à des valeurs éducatives explicites et à des finalités centrées sur l'humain — ce qui place la [[governance|gouvernance]] et la [[critical-pedagogy|pédagogie critique]] à l'intérieur de l'éducation à l'environnement plutôt qu'à côté d'elle.([[alsuhaymi-sustainable-education-ai-digitalization-2026]])

La [[meta-analysis-systematic-review|revue de cadrage]] qui organise cette littérature fournit le propre verdict du champ sur l'échelle : les applications se concentrent autour de la gestion de l'énergie, du suivi du climat et des programmes de campus vert, mais sont limitées en ampleur, manquent souvent de lignes directrices éthiques ou environnementales, et une grande partie de la recherche reste conceptuelle ou à l'état de petit pilote. La couverture est biaisée en faveur de l'Amérique du Nord et de l'Europe, avec presque rien du [[global-south|Sud global]] au-delà de quelques études sud-africaines.([[daniel-ai-sustainability-scoping-review-2026]])

## Ce que les données probantes n'établissent pas encore

- **Aucune donnée probante sur l'empreinte propre à l'éducation à l'environnement.** Les chiffres du carbone et de l'énergie proviennent d'études générales sur les grands modèles de langue et d'un repère de référence en contexte informatique ; rien ne mesure le coût environnemental d'un programme sur le climat ou d'EDD assisté par IA.
- **Aucune donnée probante sur les gains d'apprentissage liés aux interventions sur l'empreinte.** La rétroaction écologique a changé les choix dans une étude de type laboratoire ; rien ne montre qu'elle change les habitudes, les résultats d'évaluation ou l'approvisionnement.
- **Aucune donnée probante causale pour les cadres de programme.** AI-SEE est une étude de cas auto-déclarée sur un seul site et E3-HOT un schéma de conception sans étude de mise en œuvre ; le résultat de conception de leçon en SDP n'a pas de groupe témoin.
- **Aucune donnée probante à grande échelle ou intercontextes.** Chaque résultat empirique présenté ici provient d'un seul site, et les études sur les enseignants reposent sur de petits échantillons raisonnés avec des instruments faibles.
- **Les deux moitiés sont rarement étudiées ensemble**, bien que toutes deux concernent la même salle de classe.

## Implications pour l'IA en éducation

1. **Nommez la question à laquelle vous répondez.** Les stratégies qui emploient le mot « durabilité » à la fois pour l'IA au service de l'enseignement du climat et pour l'empreinte propre de l'IA masquent le déficit de responsabilité que relèvent [[daniel-ai-sustainability-scoping-review-2026|Daniel et coll. (2026)]] ; gardez les agendas séparés, avec des responsables distincts.
2. **Traitez la déclaration d'empreinte comme une infrastructure de champ.** Déclarer le calcul et le carbone aux côtés de la précision — avec un énoncé de durabilité même lorsque la mesure est imparfaite — est la seule issue au problème des métriques incompatibles.
3. **Concevez pour l'apprenant impatient.** Si l'option la moins carbonée coûte de la latence perçue, la plupart des étudiants ne la prendront pas : maintenez la latence basse, exposez les contrôles et décrivez l'impact en termes de résultats concrets, non en unités de carbone abstraites.
4. **Préférez un déploiement plus léger là où la pédagogie le permet.** Ancrer un modèle dans un corpus local sous licence et le quantifier avec ajustement fin a donné une précision utilisable pour une fraction de l'énergie — réutilisez ce schéma avant de passer à l'inférence en nuage à grande échelle.
5. **Développez la capacité des enseignants par l'élaboration de matériels, non par des campagnes de sensibilisation,** et comblez le manque de données du [[global-south|Sud global]] plutôt que d'importer des données probantes des contextes nord-américain et européen.

## Concepts liés

- [[sustainability]]
- [[global-south]]
- [[critical-pedagogy]]
- [[inquiry-based-learning]]
- [[science-education]]
- [[engineering-education]]
- [[teacher-education]]
- [[curriculum-design]]
- [[ethics]]
- [[governance]]

## Articles liés

- [[daniel-ai-sustainability-scoping-review-2026]] — Separates AI for sustainability from sustainable AI; Global South gap
- [[ai-assisted-inquiry-ssi-climate]] — AI-assisted climate inquiry, d = 0.69 over inquiry alone
- [[aied-carbon-footprint-reporting]] — AIED 2025 disclosure review plus an open-source footprint method
- [[llm-environmental-impact-student-usage-2026]] — Eco-feedback on latency–carbon trade-offs with 89 CS students
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — On-premise quantized assistant at 1.8 mWh per query
- [[liu-ai-sustainable-engineering-education-2026]] — AI-SEE: sustainability consciousness in engineering education
- [[riandi-teacher-ai-green-energy-education-2026]] — Practical AI use and ESD material development predict integration
- [[talebzadeh-ai-green-education-2026]] — AI-assisted design under Sustainable Development Pedagogy constraints
- [[alsuhaymi-sustainable-education-ai-digitalization-2026]] — AI's contribution to sustainable education as governance-mediated
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — "Sustainable learning" as durable cognitive agency, not an environmental claim
