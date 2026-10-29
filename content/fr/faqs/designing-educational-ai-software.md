---
title: "Quelles sont les bonnes pratiques et les conseils pour concevoir un logiciel éducatif d'IA efficace ?"
created: "2026-09-22T19:14:36-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
source_updated: "2026-10-28T11:39:29-04:00"
translation_of: faqs/designing-educational-ai-software
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

Votre équipe a un prototype de tuteur qui fonctionne et une démonstration devant un district dans trois semaines. Ou bien une école partenaire vous a demandé de poser une interface de discussion au-dessus de son lecteur de cours, et quelqu'un dit que c'est un travail de deux semaines. Ou bien un évaluateur des achats a renvoyé la section sécurité avec une seule ligne : qu'avez-vous testé exactement ?

La réponse est plus étroite que ne le supposent la plupart des spécifications produit. L'IA éducative fonctionne comme un expert borné sous supervision humaine : capacité confinée à un domaine défini, ancrée dans un contenu approuvé par l'enseignant plutôt que dans la mémoire du modèle, co-conçue avec les enseignants et les apprenants qui l'utilisent, évaluée sur une interaction multi-tours soutenue. C'est cette dernière clause que la plupart des équipes sautent. Un préjudice pédagogique est apparu dans chaque modèle testé dans le banc d'essai ci-dessous, et les taux d'échec sont passés de 17.7% en interaction à un seul tour à 77.8% en conversation multi-tours.

## La version courte

**1.** Écrivez ce que le système décide et ce qu'un enseignant décide. Cette frontière devient l'architecture.

**2.** Évaluez l'interaction multi-tours et sensible à la discipline contre un vrai programme, pas des prompts isolés contre une grille de sécurité générique.

**3.** Ancrez les réponses dans un contenu approuvé, et gardez le composant de vérification séparé du composant conversationnel.

**4.** Traitez chaque copie d'étudiant comme une entrée non fiable, y compris quand le système la note.

**5.** Construisez la barrière d'essai, le chemin d'escalade et la possibilité d'intervention de l'enseignant avant le pilote.

**6.** Mettez l'accessibilité et les tests d'équité désagrégés dans la spécification plutôt que dans le carnet de backlog.

## Décidez ce que le système a le droit d'être

L'[[reichert-human-centered-llm-chatbot-design-teachers-2026|étude de conception participative de Reichert et de ses collègues]] avec six enseignants du secondaire corrige l'hypothèse selon laquelle l'IA éducative devrait être un agent autonome. Invités à prototyper sur papier des [[conversational-ai|agents conversationnels]] de classe, tous les enseignants ont décrit un expert borné selon deux dimensions. Les frontières d'autorité maintenaient les enseignants aux commandes, parce que la responsabilité de l'apprentissage et de la sécurité des étudiants ne peut pas être déléguée. Les frontières d'expertise reflétaient le manque de connaissances contextuelles de l'IA sur les étudiants individuels, la dynamique de classe et les normes institutionnelles.

L'architecture qu'ils ont esquissée comportait quatre composants (délimitation du contenu, présentation du contenu, adaptation à l'étudiant, supervision par l'[[teacher-role|enseignant]]) sur trois couches protectrices : des frontières de domaine qui restreignent le périmètre, un filtrage du contenu qui permet une [[personalized-learning|personnalisation]] sûre, et une intervention de l'enseignant pour les cas ambigus. La délégation était sélective. Rapportée aux neuf événements d'instruction de Gagné, elle accueillait l'IA pour présenter le contenu, fournir des problèmes d'entraînement et offrir une [[formative-assessment|évaluation formative]] sous forme de [[feedback|rétroaction]], et la refusait pour fixer les objectifs ou conduire l'[[summative-assessment|évaluation sommative]], c'est-à-dire l'[[assessment|évaluation]] qui certifie.

Deux réglages par défaut ont leur place dans la même spécification : aligner le système sur des objectifs d'apprentissage explicites, et le régler vers des réponses bienveillantes mais exactes plutôt que vers l'accord avec la personne qui tape. Un tuteur qui flatte une mauvaise réponse a enseigné à l'étudiant que la réponse était juste.

Un détail coûte peu maintenant et cher plus tard : ces enseignants voulaient une transparence comportementale, des limites visibles et des indices d'incertitude, plus que des explications du raisonnement du modèle. Tous les six demandaient une journalisation complète des conversations, des alertes en temps réel et une capacité d'intervention, présentées comme une responsabilité professionnelle plutôt que comme une méfiance. Concevez cela dès le premier sprint, car rétro-ajuster une journalisation dans un tuteur construit pour paraître invisible revient à une réécriture.

## Testez-le en conversation, pas en un seul tour

La synthèse sur la [[pedagogical-safety|sécurité pédagogique]] soutient que les tests de sécurité conventionnels ne suffisent pas pour l'éducation. Un système peut éviter les contenus toxiques et causer malgré tout un préjudice en divulguant trop tôt les réponses, en renforçant les [[misconceptions|conceptions erronées]], en supprimant la réflexion, en favorisant la dépendance ou en dérivant des objectifs pédagogiques.

Le travail [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] apporte un [[benchmark|banc d'essai]] qui met des chiffres sur cette affirmation. Sur tous les modèles testés, des modèles à poids ouverts de 3.8B à GPT-5-mini, le préjudice [[pedagogy|pédagogique]] était universel, l'échelle n'améliorait pas la sécurité de façon fiable, et les taux d'échec montaient de 17.7% en interaction à un seul tour à 77.8% en conversation multi-tours. Les schémas de violation variaient selon la matière. Sa taxonomie à 11 dimensions et 48 sous-risques couvre les catégories cognitive, épistémique, [[metacognition|métacognitive]], [[motivation|motivationnelle-affective]], développementale, d'équité et d'alignement pédagogique, et elle fonctionne comme liste de contrôle de conception autant que comme suite de tests.

Lisez le chiffre de l'escalade comme une affirmation sur votre plan de test. Un tuteur qui passe mille sondes à un seul tour peut échouer à quatre conversations sur cinq dès qu'un étudiant conteste ou redemande une troisième fois. Construisez le banc multi-tours avant la démonstration.

## Ancrez le contenu et séparez le vérificateur

L'ancrage est une décision d'architecture. [[eduguard-safe-rag-llm-tutor|EduGuard]], un tuteur sûr à [[rag|génération augmentée par récupération]] pour la [[cs-education|programmation en initiation]], associe une récupération de cours approuvée par l'enseignant à un vérificateur d'affirmations architecturalement distinct, à un contrôle explicite de la [[cognitive-offloading|dépendance excessive]] et à un banc d'essai de 600 requêtes écrit par l'enseignant, couvrant les conceptions erronées, le débogage, les requêtes en code mixte et les prompts adversariaux demandant directement la réponse. Il faisait mieux que les références GPT-4o-mini et que les tuteurs [[socratic-method|socratiques]] basés sur Llama.

La partie transférable est la séparation : les composants qui vérifient ne conversent pas, et le banc d'essai inclut des prompts écrits pour extraire des réponses plutôt que pour tester la politesse. Le [[hallucination-risk|risque d'hallucination]] couvre le mode de défaillance que la récupération approuvée est censée borner.

## Traitez le travail de l'étudiant comme une entrée non fiable

Le modèle de menace que la plupart des conseils de conception omettent se trouve à l'intérieur de l'artefact évalué. [[humble-prompt-injection-ai-grading-red-team-2026|L'évaluation adversariale en équipe rouge de Humble (2026)]] a testé si des étudiants pouvaient manipuler un correcteur fondé sur un LLM par injection de prompt dans leurs copies, et la manipulation a fonctionné : les injections qui donnent des instructions au correcteur, le recadrent ou lui font jouer un rôle déplacent la note sans changer le travail.

Gardez la grille et les instructions en dehors de la fenêtre de contexte contrôlée par l'étudiant, retirez ou signalez le contenu qui ressemble à des instructions, ne laissez jamais une copie fixer ses propres critères, et gardez une décision humaine sur toute note lourde de conséquences. Un correcteur qui lit ses instructions dans le texte qu'il juge a remis la grille au candidat.

## Étayez le travail au lieu de l'accomplir

Un système qui répond met fin à la réflexion pour laquelle il a été acheté. Deux pièces ont leur place dans le ticket : une barrière d'essai, pour qu'aucune production n'apparaisse avant que l'étudiant se soit engagé sur quelque chose, et un [[human-in-the-loop-ai|chemin d'escalade humaine]] avec une destination nommée, ce qui, pour un produit de classe, signifie l'enseignant, sous une forme que l'enseignant peut traiter. Le [[scaffolding|étayage]] et le schéma [[socratic-method|socratique]] sont les versions produit de ce qu'un plan de leçon fait à la main ; [[developing-ai-tutor]] couvre le diagnostic, les échelles d'indices et la rétroaction en détail.

## Mettez l'accessibilité et l'équité dans la spécification

Les exigences d'accessibilité sont assez concrètes pour un sprint : utilisation au clavier, compatibilité avec les lecteurs d'écran, sous-titres et transcriptions, contraste approprié, alternatives textuelles utilisables et compatibilité avec les [[ai-technologies|technologies d'assistance]]. Les fonctionnalités d'accessibilité générées par l'IA ont encore besoin d'un contrôle de qualité. Voir [[accessibility]].

Les tests d'équité devraient examiner l'ensemble de la chaîne et désagréger le comportement selon la langue, le handicap, la culture et d'autres caractéristiques pertinentes des apprenants, plutôt que de s'appuyer sur une exactitude agrégée. Un système qui obtient un bon score en moyenne et un mauvais score pour un groupe a livré l'échec à ce groupe. Voir [[bias-mitigation]] et [[equity-in-ai-education|Equity]].

## Concevez avec les personnes qui l'utiliseront

[[ko-hughes-vsd-student-centered-its-2026|Ko et Hughes]] ont appliqué la conception sensible aux valeurs à un [[intelligent-tutoring|système de tutorat intelligent]] avec des étudiants et des enseignants d'un community college, un groupe historiquement laissé de côté dans la conception des plateformes d'apprentissage. Ils ont trouvé des tensions de valeurs à gérer plutôt qu'à résoudre : transparence contre interprétabilité, [[privacy|vie privée]] contre connaissance pédagogique, et [[agency|autonomie de l'étudiant]] contre [[scaffolding|étayage]] guidé par le système. Les étudiants préféraient des explications collaboratives et humanisées à la transparence brute du modèle, et le prototype encodait 16 fonctionnalités alignées sur des valeurs dans les contrôles d'[[explainable-ai|IA explicable]], de boucle humaine et de confidentialité.

[[wang-teacher-ai-co-design-review-2026|La revue de Wang, Liu et Islam]] de 28 études empiriques ajoute un vocabulaire pour choisir les outils. L'[[generative-ai|IA générative]] sert principalement à la planification de leçons, à la génération de prompts et à l'idéation créative, l'IA agissant comme assistante ou génératrice de contenu bien plus souvent que comme co-conceptrice, et quatre affordances — efficacité, réactivité, [[creativity|créativité]] et [[equity-in-ai-education|équité]] — que les enseignants peuvent utiliser pour juger quel outil convient à quel problème de conception.

Les deux études traitent la conception comme une [[human-in-the-loop-ai|collaboration avec l'humain dans la boucle]] et une [[human-ai-collaboration|collaboration humain-IA]], et comme une [[usability-research|recherche sur l'utilisabilité]] plutôt que comme une action de sensibilisation. Les deux ont trouvé que les parties prenantes faisaient émerger des exigences qu'aucun banc d'essai d'exactitude ne capturerait, ce qui est l'argument pratique pour financer ces séances : les exigences que vous rencontreriez sinon pendant le pilote.

## Ce que les équipes de conception ratent

La sécurité, c'est la modération des contenus. Le préjudice, dans un produit éducatif, arrive souvent sous la forme d'une réponse utile au mauvais moment. SafeTutors a trouvé un préjudice pédagogique dans chaque modèle testé et un échec montant à 77.8% au fil d'une conversation, ce qui n'est pas une catégorie que les filtres de contenu sont construits pour voir.

Un modèle plus gros corrigera la pédagogie. L'échelle n'a pas amélioré la sécurité de façon fiable sur la plage allant des modèles à poids ouverts de 3.8B à GPT-5-mini.

Un bon index de récupération signifie que le contenu est maîtrisé. EduGuard associe la récupération à un vérificateur distinct et teste des prompts adversariaux demandant directement la réponse, parce qu'une récupération ancrée laisse encore un chemin vers la divulgation excessive.

L'enseignant est le recours. Les six enseignants de l'étude de conception demandaient tous une journalisation, des alertes et une capacité d'intervention comme condition de leur responsabilité professionnelle. Un ticket au support n'est pas une capacité d'intervention.

L'accessibilité est un ticket pour plus tard. Elle figure dans la spécification ou elle devient une réécriture, et les textes alternatifs et les sous-titres générés ont encore besoin d'un contrôle humain.

## Ce qui va vous revenir dessus

**« Nous ne pouvons pas construire un banc d'essai d'évaluation avant le lancement. »** Construisez-en un petit. La première affirmation dont vous avez besoin concerne ce qui se passe sur cinq tours. Prenez 40 questions réelles du programme, faites de chacune une conversation de cinq tours avec un étudiant qui résiste à l'indice, et notez selon les 11 dimensions. Voilà une section sécurité défendable, et elle tient dans un sprint.

**« Les enseignants veulent modifier les prompts, et nous ne pouvons pas garantir ce qu'ils écrivent. »** Alors restreignez la surface qu'ils modifient. Le prompt système reste le vôtre ; les objectifs, le contenu approuvé, l'échelle d'indices et le contact d'escalade sont les leurs. L'architecture d'expert borné existe pour que la configuration reste dans un périmètre que vous pouvez tester.

**« Nos scores au banc d'essai sont élevés. »** L'exactitude sur des réponses à un seul tour ne prédit pas le comportement au fil d'une conversation, et le banc d'essai qui mesure la seconde chose a trouvé 77.8% d'échec en situation multi-tours sur chaque modèle testé. Rapportez les deux chiffres, sinon le premier sera lu comme le second.

**« La journalisation complète pose un problème de vie privée. »** C'est vrai, ce qui appelle une limitation des finalités plutôt qu'une absence de journalisation. Journalisez ce dont un enseignant a besoin pour agir, minimisez le reste, restreignez l'accès, et dites dans le produit ce qui est conservé et pour combien de temps.

## Quoi faire cette semaine

**1.** Écrivez la frontière d'autorité sur une page : ce que le système décide, ce que l'enseignant décide, et ce que vous défendriez dans un examen des achats.

**2.** Transformez la taxonomie à 11 dimensions en plan de test et exécutez-le en multi-tours sur 40 questions réelles d'un cours.

**3.** Séparez le vérificateur du générateur dans le document de conception, même si la première version les fait tourner dans un seul processus.

**4.** Ajoutez la barrière d'essai, la destination d'escalade et la capacité d'intervention de l'enseignant à la file de travail, avec des noms attachés.

**5.** Mettez la liste d'accessibilité et une exigence de désagrégation dans les critères d'acceptation de cette version.

## Où aller ensuite

[[developing-ai-tutor]] couvre la construction, et [[designing-ai-into-learning]] couvre les réglages pédagogiques par défaut qui l'entourent. Pour savoir si la chose fonctionne une fois déployée, voir [[checking-whether-educational-ai-works]] ; pour les concepts de sécurité derrière le plan de test, [[pedagogical-safety]] et [[hallucination-risk]] ; pour le contexte des achats, [[legal-issues-and-risks]].
