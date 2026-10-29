---
title: "Comment la recherche sur l'IA en éducation doit-elle intégrer l'équité, l'accessibilité, la confidentialité, l'éthique et la sécurité pédagogique ?"
created: "2026-09-22T19:14:45-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 60
audience: [researchers, instructors, instructional designers]
ethics: [accessibility, digital-divide, equity-in-ai-education, ethics, privacy, pedagogical-safety]
methods: [research-methods-aied]
source_updated: "2026-10-28T11:47:13-04:00"
translation_of: faqs/equity-ethics-pedagogical-safety-research
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Le protocole est à rendre vendredi. La section 7, sur l'éthique, dit que les risques seront surveillés. Le recrutement passe par un cours de première année existant, et le paragraphe sur les limites note que les résultats ne seront peut-être pas généralisables. Le comité d'évaluation demandera qui est susceptible d'en bénéficier, si des étudiants handicapés peuvent utiliser la chose, ce qu'il advient des journaux d'interaction, et à quoi ressemble une réponse nuisible de tuteur dans les données. Quatre questions, et aucune n'a encore de section.

La réponse à donner au comité : l'équité, l'accessibilité, la confidentialité et la sécurité [[pedagogy|pédagogique]] appartiennent à la conception et aux mesures de résultats dès le premier jet. Chacune change ce que vous recrutez, instrumentez et rapportez, donc attachez-la à une décision pendant que le protocole est encore modifiable.

## La version courte

**1.** Nommez la comparaison entre sous-groupes avant de collecter les données, et inscrivez-la dans le plan d'analyse.

**2.** Mettez des apprenants handicapés dans la séance de conception et testez l'interface réelle.

**3.** Écrivez le compromis de confidentialité, y compris qui l'a décidé et qui peut l'inverser.

**4.** Testez la sécurité sur des conversations entières, dans les scénarios de votre propre discipline.

**5.** Combinez les données de résultats avec des entretiens, et laissez une trace qu'un lecteur peut inspecter.

## Demander à qui profite le bénéfice

Le concept de [[digital-divide|fracture numérique]] sépare les fractures d'accès, de compétences et de résultats, ce qui signifie que retirer la barrière d'accès avec un [[conversational-ai|chatbot]] ne produit pas un bénéfice [[equity-in-ai-education|équitable]]. Concevez pour la troisième fracture. Rapportez les résultats par sous-groupe et testez l'efficacité différentielle au lieu de vous fier à la moyenne globale ([[differential-effects-across-learner-groups]]).

Une [[adeniranye-ai-integration-nigerian-higher-education-2026|étude comparative de 45 universités nigérianes]] (15 fédérales, 15 d'État, 15 privées) montre comment elles se cumulent. L'intégration globale de l'[[ai-education|IA]] était modérée, M = 4.79 sur une échelle de 10, étendue 1.83-7.83. Le type de [[governance|gouvernance]] ne la prédisait pas (F(2,42) = 1.01, p = 0.372). L'âge de l'établissement (β = 0.43, p = 0.016) et la localisation au Sud-Ouest (β = 0.31, p = 0.029) la prédisaient. Les capacités internes se renforçaient mutuellement (r = 0.79-0.80), et les collaborations internationales et les partenariats industriels se cumulaient (r = 0.74), ce que les auteurs résument par « les connexions engendrent les connexions ». Les cadres politiques étaient les plus faibles (M = 4.09 ; seuls 27% des établissements obtenaient 6 ou plus), laissant un écart entre la stratégie formelle et l'activité opérationnelle de [[curriculum-design|conception curriculaire]].

Deux implications de conception en découlent. Ciblez les établissements plus récents et les régions mal desservies, puisque la catégorie ne détermine pas la capacité. Et tenez compte des contextes des [[global-south|pays du Sud]] que la base de données probantes plus large omet encore.

## Mettre les apprenants handicapés dans la salle de conception

Incluez les apprenants handicapés dans la conception et l'évaluation, testez les interfaces réelles contre les exigences d'accessibilité, et offrez des voies équivalentes pour participer et pour démontrer ses apprentissages. La conformité technique et l'enseignement inclusif sont deux tests distincts, et [[accessibility|Accessibilité]] couvre les deux.

Une [[ko-hughes-vsd-student-centered-its-2026|étude de conception sensible aux valeurs]] menée avec des étudiants de community college, des enseignants et des développeurs montre le travail en pratique. Elle a produit 16 fonctionnalités alignées sur des valeurs réparties entre l'[[explainable-ai|explicabilité]] (E1-E5), le contrôle [[human-in-the-loop-ai|humain dans la boucle]] (H1-H9) et la [[privacy|confidentialité]] (P1-P4), et a fait apparaître des tensions plutôt que des réponses nettes : la transparence contre l'interprétabilité, la confidentialité contre la connaissance pédagogique, l'[[agency|autonomie]] de l'apprenant contre l'[[scaffolding|étayage]] guidé par le système. Attendez-vous à devoir arbitrer ces tensions, et notez dans quel sens vous avez tranché.

## Décider le compromis de confidentialité, et nommer qui décide

Collectez les données dont l'objectif pédagogique a besoin, rendez transparents l'usage des données et les limites du système, et gardez une responsabilité humaine concrète. L'équité, le consentement, les biais, l'explicabilité, l'autonomie de l'apprenant et les conséquences des décisions médiées par l'IA sont des dimensions centrales de l'[[ethics|éthique]], et elles entrent en conflit en pratique. Les étudiants voulaient le contrôle sur l'[[learning-analytics|analytique de l'apprentissage]] et sur les données affectives ; les enseignants voulaient de la visibilité pour soutenir l'apprentissage. Les deux positions sont défendables, et c'est pourquoi la décision a besoin d'un responsable nommé.

À mesure que les systèmes prennent de l'[[agency|autonomie]], la question devient structurelle. [[beyond-agent-label-agentic-ai-governance-2026|Une revue critique de la gouvernance de l'IA agentique]] soutient que l'autonomie ne devrait pas dépasser la maturité des preuves ni la solidité d'un contrôle humain responsable. Elle propose un langage de reporting partagé : niveaux d'autonomie A0-A4, niveaux de supervision O0-O4, stades de maturité des preuves M0-M5. Les usages à conséquences (A4 : admission, notation, progression) exigent une validation répliquée et pertinente au contexte ainsi qu'une autorité humaine continue, et un score élevé à un [[benchmark|banc d'essai]] ne remplace ni l'une ni l'autre.

## Tester les préjudices que les bancs d'essai manquent

La sécurité pédagogique, c'est mesurer ce qu'un banc d'essai ne mesurera pas : la [[cognitive-offloading|dépendance excessive]], la divulgation excessive de réponses, le renforcement des [[misconceptions|conceptions erronées]], la perte d'autonomie, la suppression de la [[metacognition|métacognition]], le traitement inéquitable, le préjudice [[motivation|motivationnel]] et le désalignement pédagogique. Testez des interactions multi-tours dans des scénarios [[discipline-specific-aied|propres à la discipline]]. La synthèse sur la [[pedagogical-safety|sécurité pédagogique]] et le banc d'essai [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] montrent pourquoi un système qui semble exact peut malgré tout nuire à l'apprentissage.

Les praticiens convergent vers une conception compatible. Dans une [[reichert-human-centered-llm-chatbot-design-teachers-2026|étude de conception participative avec six enseignants du secondaire]], les enseignants ont conçu indépendamment des « experts bornés » plutôt que des [[agentic-ai|agents autonomes]] : un domaine étroit, une supervision humaine et trois couches protectrices dans les frontières du domaine, le filtrage des contenus et la reprise en main par le [[teacher-role|professeur]]. Ils accueillaient l'IA pour présenter des contenus, fournir de l'entraînement et donner une [[formative-assessment|évaluation formative]] et de la [[feedback|rétroaction]], et refusaient de lui déléguer la fixation des objectifs ou l'[[summative-assessment|évaluation sommative]]. Ils concevaient la supervision comme une responsabilité professionnelle.

## Combiner les méthodes, et montrer le chemin de la donnée à l'affirmation

Des résultats [[quantitative-research|quantitatifs]] désagrégés peuvent révéler des [[differential-effects-across-learner-groups|effets différentiels]]. Les entretiens, observations, groupes de discussion et co-conceptions font apparaître les barrières, les préjudices, les présupposés culturels et l'expérience des apprenants que les scores agrégés manquent. La synthèse sur les [[research-methods-aied|méthodes de recherche en AIED]] traite la triangulation comme nécessaire parce qu'aucune méthode unique, [[qualitative-research|qualitative]] ou quantitative, ne maximise à la fois l'inférence causale, la validité écologique, la compréhension contextuelle et la généralisabilité.

Votre propre analyse demande la même discipline. [[chain-behind-claim-warrantability-2026|La proposition de « warrantability »]] soutient qu'une interprétation assistée par l'IA reste inspectable, contestable et révisable lorsqu'elle est livrée avec des artefacts comme des tableaux de thèmes liés aux sources, des empilements de perspectives et des « rivières de preuves ». Un résumé fluide ne devrait pas cacher le chemin qui l'a produit.

Distinguez aussi les niveaux de résultats. La [[beyond-agent-label-agentic-ai-governance-2026|revue sur l'IA agentique]] sépare les résultats d'artefact, comme l'exactitude et la [[ai-feedback-quality|qualité de la rétroaction]], du bénéfice pour l'apprenant. Les résultats d'artefact peuvent être nécessaires et ne sont jamais suffisants, et c'est sur l'équité et les résultats institutionnels que les preuves sont les plus minces.

## Ce que ce public comprend mal

L'équité, c'est l'accès. Le concept de fracture numérique place les compétences et les résultats sur la même liste que l'accès, et l'étude d'Adeniranye a trouvé une capacité variant selon l'âge et la région de l'établissement tandis que le type de gouvernance ne prédisait rien.

L'accessibilité est une liste de contrôle sur l'interface. L'étude de conception sensible aux valeurs a fait apparaître des tensions entre explicabilité et interprétabilité qu'aucune liste de contrôle ne résout.

La confidentialité est un formulaire de consentement. L'étude de conception a trouvé des étudiants et des enseignants voulant des choses opposées à partir des mêmes données, et la revue de gouvernance lie l'autonomie à la maturité des preuves.

La sécurité, c'est le refus du modèle face à des demandes nuisibles. La sécurité pédagogique couvre la dépendance excessive, le renforcement des conceptions erronées et la perte d'autonomie, que ne touche pas un test de refus.

Une seule méthode répond à la question. La synthèse méthodologique est explicite : ces quatre propriétés se compensent l'une l'autre.

## Ce qui va vous revenir dessus

**« Nous traiterons l'équité dans la discussion. »** Alors votre plan d'analyse ne peut pas la tester. Nommez la comparaison entre sous-groupes maintenant, sinon le résultat arrive après la fermeture des données.

**« Notre échantillon est trop petit pour une analyse par sous-groupe. »** Alors dites ce qu'il permet de soutenir et rapportez qui en faisait partie. Un résultat nul sur un sous-groupe issu d'un échantillon sous-dimensionné n'est pas une preuve d'équité.

**« Les tests d'accessibilité, c'est le travail du service handicap. »** Leur revue couvre la conformité. Savoir si un apprenant peut démontrer ce qu'il sait à l'intérieur de votre activité est une question de conception, et l'étude de conception ci-dessus a mis des étudiants dans la salle pour cette raison.

**« Les données sont anonymisées, donc la confidentialité est réglée. »** Les tensions de l'étude de conception portaient sur le contrôle et la visibilité, pas sur les identifiants. Les étudiants voulaient savoir qui voit leurs données affectives et pourquoi.

**« Notre suite de tests de sécurité passe. »** Sur quels tours ? SafeTutors a trouvé que les modèles pédagogiques se dégradent au fil de longues conversations, et c'est la longueur que vos étudiants utiliseront réellement.

## À faire cette semaine

**1.** Ajoutez un paragraphe sur les sous-groupes au plan d'analyse, en nommant quels groupes et quel résultat.

**2.** Réservez une séance de conception avec des apprenants handicapés ou le personnel qui les accompagne, avant que l'interface soit définitive.

**3.** Écrivez la décision de confidentialité comme une phrase avec un responsable : ce qui est collecté, qui le voit, qui peut l'arrêter.

**4.** Rédigez dix tours de conversation adversariaux dans votre matière et faites-les passer contre le système.

**5.** Ajoutez un artefact inspectable, comme un tableau lié aux sources ou un jeu d'extraits codés, au dossier d'analyse.

## Où aller ensuite

[[evaluating-ai-interventions-methods|Évaluer les interventions d'IA : méthodes]] est la page complémentaire sur les mesures et la conception. [[top-10-findings-ai-education-instructors|Les 10 principaux résultats pour les enseignants]] porte ces contraintes dans les résultats 9 et 10, [[addressing-common-misconceptions-ai-education|Répondre aux idées fausses courantes sur l'IA en éducation]] traite les objections des parties prenantes, et [[research-gaps-aied|Lacunes de la recherche en AIED]] liste où les preuves manquent.
