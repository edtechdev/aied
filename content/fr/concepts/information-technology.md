---
title: "Technologies de l'information"
created: "2026-09-17T14:06:00-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
ethics: [equity-in-ai-education]
pedagogy: [professional-training]
discipline: [information technology, cs education]
audience: [administrators, curriculum designers, instructional designers, instructors, learners, policymakers]
level: [higher ed, adult learning]
confidence: high
institutions: [governance]
translation_of: concepts/information-technology
source_updated: "2026-09-17T14:06:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Enseignement des technologies de l'information** — la branche de l'enseignement de l'informatique qui prépare les praticiens à sélectionner, déployer, sécuriser, administrer et gouverner les systèmes sociotechniques que les organisations font réellement fonctionner, plutôt qu'à étudier le calcul comme une discipline à part entière. Sa voisine la plus proche, et la source de la majeure partie des confusions de frontière, est l'[[cs-education|enseignement de l'informatique]] : l'enseignement de l'informatique est centré sur les algorithmes, la programmation et les fondements formels, tandis que l'enseignement des technologies de l'information est centré sur la configuration appliquée, la cybersécurité, la gestion des données et de l'information, et la [[governance|gouvernance]] organisationnelle de ces systèmes. L'[[generative-ai|IA générative]] atteint le domaine à double titre — comme un objet que les étudiants doivent apprendre à évaluer, sécuriser et réguler, et comme un instrument qui les tutorise, classe leurs questions et réécrit silencieusement les parcours [[professional-training|professionnels]] pour lesquels ils sont préparés.

## Questions à examiner

- Si l'IA comprime les cycles de construction-échec-débogage qui ont historiquement produit l'expertise en technologies de l'information, quelles compétences fondamentales un programme devrait-il délibérément protéger, et lesquelles peuvent être déléguées à l'outil ?
- Les étudiants connaissent les règles de leur établissement et ne peuvent toujours pas dire si leur propre usage s'y conforme. Est-ce un échec de communication, ou un instrument fondé sur des règles est-il le mauvais levier pour une pratique qui se déroule en privé sur des comptes personnels ?
- L'enseignement des technologies de l'information se situe entre l'informatique, la gestion et la formation professionnelle. Qui devrait détenir la compétence de gouvernance de l'IA — un cours, un fil de programme, ou un résultat au niveau du programme ?
- Si un classifieur à transformeurs sépare les questions d'apprenants d'ordre supérieur avec une précision d'environ 79%, les programmes de technologies de l'information devraient-ils automatiser la rétroaction formative sur le questionnement ?
- La plupart des modèles mentaux qu'ont les étudiants de l'IA générative sont déclaratifs et superficiels. Cela prédit-il les [[ai-misuse-learning-harm|usages abusifs]], ou seulement une incapacité à expliquer des décisions que les étudiants prennent en fait correctement ?

## Introduction

L'enseignement des technologies de l'information est l'aile appliquée de l'informatique. Il forme des personnes à faire fonctionner des systèmes au sein des organisations — réseaux, bases de données, opérations de sécurité, gestion de l'information sanitaire, services d'administration en ligne — et ses diplômés sont généralement évalués par des organismes professionnels et des employeurs, et pas seulement par le monde académique. Sa distinctivité par rapport à l'[[cs-education|enseignement de l'informatique]] tient à l'unité d'analyse. L'enseignement de l'informatique prend le programme et l'algorithme comme objets ; l'enseignement des technologies de l'information prend le système déployé et le jugement que le praticien porte sur lui. Là où l'informatique se demande si la génération de code par l'IA érode la compétence de programmation, les technologies de l'information se demandent si le dépannage par l'IA érode la compétence de diagnostic, si les documents de politique rédigés par l'IA engagent quiconque, et si les diplômés peuvent gouverner les systèmes de données qu'ils administrent.

Les disciplines voisines se recouvrent de manières différentes. L'enseignement des [[stem-education|STIM]] est la catégorie parente et partage ses instruments, mais l'enseignement des technologies de l'information est plus souvent un master professionnel ou un diplôme de premier cycle appliqué dont les diplômés entrent dans des lieux de travail régulés. L'[[business-education|enseignement de la gestion]] lui est adjacent par les systèmes d'information et les programmes d'administration en ligne, qui partagent fréquemment des cours et des étudiants avec les programmes de technologies de l'information. L'[[vocational-education|enseignement et la formation professionnels]] sont l'autre voisin professionnel : les deux domaines forment à la pratique, mais les programmes professionnels visent une compétence de niveau technicien dans des métiers définis, tandis que l'enseignement des technologies de l'information présuppose un raisonnement sur des systèmes abstraits et produit les personnes qui rédigent les documents de gouvernance autant que celles qui les suivent. L'[[higher-ed|enseignement supérieur]] nomme le niveau plutôt que le domaine, et le domaine porte une surface d'accréditation et de conformité — l'accréditation en informatique de santé, les obligations HIPAA et FERPA relatives aux données que les étudiants manipulent — qui façonne ce qui compte comme programme légitime.

Ce qui est distinctif au sujet de l'IA dans ce domaine, c'est que la même technologie est à la fois le contenu du programme et la pédagogie. Les données probantes rassemblées convergent vers un thème inconfortable : l'agenda actuel de l'IA dans l'enseignement des technologies de l'information est dominé par l'intégrité et l'adoption des outils, tandis que les compétences de gouvernance, de sécurité et d'éthique des données qu'exigent les propres lieux de travail du domaine apparaissent pour l'essentiel en dehors des documents que les étudiants reçoivent réellement.

### Comment l'IA apparaît dans l'enseignement des technologies de l'information

- **La formation à la cybersécurité par le jeu.** Li et ses collègues ont construit plusieurs jeux courts et adaptés au mobile couvrant la sécurité des mots de passe jusqu'à la reconnaissance des escroqueries par SMS et par téléphone, associant des conceptions fondées sur le questionnaire, la narration et la [[simulation|simulation]] à des formats interactifs comme les TikTok Mini-Games, motivés par le faible engagement et l'efficacité limitée des formations vidéo classiques ([[ai-gamification-security-education-2026]]). Leur évaluation à deux niveaux menée auprès de 59 étudiants de l'enseignement supérieur (9 experts techniques, 50 utilisateurs généraux) fait état d'un potentiel d'amélioration de l'engagement et de l'attention à la cybersécurité, plutôt que de gains d'apprentissage démontrés.
- **L'IA générative comme étayage ou comme raccourci dans l'apprentissage autorégulé.** Une étude à méthodes mixtes portant sur 267 étudiants de deuxième cycle en technologies de l'information en Australie distingue le [[cognitive-offloading|délestage cognitif]] étayé (les apprenants clarifient leurs objectifs, génèrent des idées, obtiennent une [[feedback|rétroaction]] qu'ils critiquent ensuite et adaptent, de sorte que l'[[agency|autonomie]] leur reste) du délestage substitutionnel (les productions sont acceptées avec une vérification minimale, le contrôle se déplaçant vers l'outil) ([[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]]). La confiance a façonné l'orientation : les étudiants confiants exerçaient leur autonomie dans la fixation d'objectifs et le suivi, tandis que leurs pairs moins confiants lisaient l'IA générative comme un raccourci ou comme un [[academic-integrity|manquement]]. La cohorte était différenciée, et non uniformément lettrée en IA ; les auteurs recommandent d'exiger des étudiants qu'ils justifient ou adaptent les productions de l'IA comme un geste explicite de [[learning-design|conception pédagogique]].
- **Les parcours d'expertise comprimés dans la pratique professionnelle.** Quatorze entretiens semi-directifs menés auprès de professionnels des technologies de l'information ont montré l'IA générative agissant à la fois comme un tuteur semblable à un mentor et comme un outil de raccourcissement d'échelle dans le dépannage, l'écriture de scripts et la vérification de systèmes ([[genai-expertise-pathways-sysadmin]]). L'accélération des performances dans des domaines inconnus réduit l'exposition aux cycles de construction-échec-débogage qui ont historiquement construit l'expertise ; la vitesse assistée par l'IA redéfinit aussi les attentes d'équipe et personnelles, produisant une culture à deux vitesses et une culpabilité de productivité. L'étude porte en [[professional-training|formation professionnelle]] et en [[lifelong-learning|apprentissage au travail]] les préoccupations de classe relatives au coût [[metacognition|métacognitif]] et à l'érosion des compétences.

### L'évaluation et le versant apprenant de l'usage de l'IA en technologies de l'information

- **Les questions des apprenants comme signaux diagnostiques.** Lee, Atif et Kang ont classé 434 requêtes authentiques d'étudiants issues de 12 cours de technologies de l'information selon trois rôles pédagogiques constructivistes — transmetteur de savoir, facilitateur et co-apprenant — atteignant un étiquetage consensuel avec une revue [[human-in-the-loop-ai|humaine dans la boucle]] (kappa de Fleiss 0,60 montant à 0,83) et augmentant le corpus à 582 questions équilibrées ([[lee-learner-question-types-ai-education-2026]]). DeBERTa est arrivé en tête avec 86,36% d'exactitude et 96,67% de précision sur les questions factuelles, mais la précision sur les questions de facilitateur est tombée à 78,79%, et BERT ajusté a atteint 92,00% de rappel sur les items de co-apprenant pour seulement 74,19% de précision. Les erreurs provenaient de la similarité conceptuelle entre les rôles, de l'intention ambiguë de l'apprenant, et de formulations disciplinaires mal lues comme une profondeur cognitive ; les auteurs avertissent que l'augmentation a pu introduire des raccourcis lexicaux, et que le corpus de 11 étudiants, propre aux seules technologies de l'information, ne peut pas encore se généraliser à d'autres domaines.
- **Des modèles mentaux larges mais superficiels.** À partir de 64 cartes conceptuelles utilisables dessinées par 86 étudiants de premier cycle dans un cours obligatoire d'éthique des technologies, cinq catégories de modèles mentaux ont émergé : fondées sur le processus technique, fondées sur l'outil éducatif, transitionnelles, conscientes des conséquences et intégrées ([[student-mental-models-genai]]). Chaque carte montrait des connaissances déclaratives, 25 des connaissances procédurales, 17 des connaissances conditionnelles, et seulement 9 intégraient les trois. Les grappes technique et socio-réglementaire étaient très éloignées, ce que les auteurs lisent comme le développement séparé de la [[ai-literacy|littératie en IA]] et de la conscience [[ethics|éthique]] ; les lignes directrices centrées sur l'intégrité, soutiennent-ils, ne traitent qu'une seule dimension de la manière dont les étudiants conceptualisent l'outil.
- **Des règles connues, une conformité incertaine.** Une enquête menée auprès de 151 étudiants de premier cycle en systèmes d'information d'entreprise et en programmes d'administration en ligne a montré que la plupart des étudiants employaient activement l'IA générative, mais que plus de la moitié ne savaient pas si leur usage était conforme à la réglementation institutionnelle, avec seulement des associations faibles à modérées entre la conscience [[regulation|réglementaire]] et le comportement réel, et une dépendance portant surtout sur des outils accédés de manière privée plutôt que sur des outils institutionnels ([[student-regulatory-awareness-genai]]). Connaître les règles ne prédisait pas fortement ce que faisaient les étudiants.

### La politique institutionnelle et le déficit de gouvernance

- **Des indications, pas une politique.** Un balayage de l'environnement de l'ensemble des 48 masters accrédités en informatique de santé et en gestion de l'information sanitaire a montré que 40 (83%) disposaient d'au moins un document public sur l'IA, mais l'artefact le plus fréquent était une recommandation consultative (21, 53%) plutôt qu'une politique formelle (7, 18%) ([[institutional-ai-policy-health-informatics-2026]]). L'intégrité académique dominait le vocabulaire (n = 139), devant la citation (n = 59) et l'[[assessment|évaluation]] (n = 50), tandis que HIPAA (n = 5), FERPA (n = 11), l'accès équitable (n = 2) et les obligations de déclaration (n = 1) étaient presque absents, et les dossiers de santé électroniques n'étaient pas mentionnés du tout. L'allocation latente de Dirichlet a produit quatre thèmes autour de l'intégrité, de l'usage de l'IA générative par les étudiants, des outils de recherche universitaires et de l'usage de ChatGPT. Parce que seuls les documents publics ont été analysés, les auteurs traitent l'absence de langage relatif à la vie privée et à l'équité comme un constat sur les recommandations publiées, et non sur la pratique institutionnelle.
- **L'angle mort de l'équité.** L'inclusion (n = 9), l'accessibilité (n = 9), les aménagements (n = 4) et l'accès équitable (n = 2) apparaissent à des taux qui ne peuvent étayer aucune affirmation selon laquelle l'[[equity-in-ai-education|équité dans l'IA en éducation]] a été traitée, alors même que plusieurs programmes exigent l'usage de l'IA dans les travaux de cours. Associé au traitement mince de la compétence de [[governance|gouvernance]] professionnelle, c'est la tâche de conception la plus claire que ce corpus laisse ouverte : relier les règles d'intégrité aux dispositions d'accès, de vie privée et de gouvernance des données que ces diplômés seront chargés de faire appliquer.

## Concepts liés

- [[cs-education]]
- [[stem-education]]
- [[business-education]]
- [[vocational-education]]
- [[higher-ed]]
- [[professional-training]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[governance]]
- [[cognitive-offloading]]
- [[equity-in-ai-education]]

## Articles liés

- [[ai-gamification-security-education-2026]]
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]]
- [[genai-expertise-pathways-sysadmin]]
- [[institutional-ai-policy-health-informatics-2026]]
- [[lee-learner-question-types-ai-education-2026]]
- [[student-mental-models-genai]]
- [[student-regulatory-awareness-genai]]
