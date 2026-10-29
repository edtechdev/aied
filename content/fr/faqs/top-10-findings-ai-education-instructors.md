---
title: "Quels sont les 10 principaux résultats de la recherche sur l'IA en éducation que les enseignants devraient connaître ?"
created: "2026-09-22T19:14:36-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
source_updated: "2026-10-28T11:06:17-04:00"
translation_of: faqs/top-10-findings-ai-education-instructors
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

C'est la semaine avant la rentrée, ou la semaine qui suit le premier gros rendu, et quelqu'un vous a posé une question à laquelle votre expérience ne suffit pas à répondre : ce que les étudiants peuvent faire avec l'IA pour ce devoir, et ce que la note prouve alors. Peut-être qu'un essai rédigé à la maison est revenu si soigné qu'il ne correspond pas au travail antérieur de l'étudiant. Peut-être que votre département rédige une politique sur l'IA et veut que votre cours s'y conforme d'ici vendredi. Peut-être qu'un étudiant conteste une note et que vous ne pouvez pas montrer ce que le travail démontre.

L'essentiel, tiré de la recherche rassemblée dans cette base de connaissances : la façon dont vous intégrez l'[[generative-ai|IA générative]] dans l'activité décide si elle renforce la réflexion ou la remplace. Le levier que vous contrôlez, c'est la conception de la tâche. Le test de toute conception, c'est ce que les étudiants savent encore faire quand l'outil n'est plus là. Les dix constats auxquels cette page doit son titre figurent ci-dessous, classés selon la décision que chacun éclaire.

## La version courte

**1.** Nommez la réflexion que le devoir a pour but de produire, puis confiez à l'IA une tâche qui n'accomplit pas cette réflexion.

**2.** Fixez la règle sur l'IA devoir par devoir plutôt que cours par cours, et écrivez la raison à côté, là où les étudiants la liront.

**3.** Placez au moins une étape notée dans chaque unité, que l'étudiant réalise sans aucune IA présente.

**4.** Jugez l'activité sur ce que les étudiants savent faire des semaines plus tard, sans aide, et non sur la qualité de ce qu'ils rendent.

**5.** Demandez comment les étudiants ont utilisé l'outil, et notez la vérification plutôt que les connexions.

**6.** Regardez quels étudiants le dispositif aide, car une moyenne cache ceux qu'elle laisse de côté.

## Décider à quoi sert le devoir

Écrivez une phrase qui nomme la capacité avant de toucher à l'outil : que devrait savoir faire un étudiant à la fin de cette unité qu'il ne savait pas faire au début ? La réponse peut être : construire un argument à partir de preuves, rédiger une démonstration, poser un diagnostic, prendre une décision de conception sous contraintes. Si vous ne pouvez pas la nommer, la règle sur l'IA sera arbitraire et les étudiants le remarqueront.

Deux courants de travail expliquent pourquoi cela vient en premier. L'[[productive-failure|échec productif]] est le constat selon lequel les apprenants retiennent souvent davantage lorsqu'ils tentent un problème avant qu'on leur montre comment faire : la friction est donc parfois le mécanisme, et non un obstacle à supprimer. Le [[icap-framework|modèle ICAP]] prédit des apprentissages différents selon un usage passif, actif, constructif ou interactif du même matériau. Les deux convergent vers une seule question de conception : que fait l'étudiant pendant que l'outil est ouvert ?

L'illustration la plus nette du corpus vient d'une comparaison entre un chatbot informé par la théorie, qui étayait les explications des étudiants, un ChatGPT ordinaire et un enseignement habituel. Les différences immédiates n'étaient pas significatives. Quatre semaines plus tard, le groupe étayé retenait davantage de connaissances conceptuelles. C'est une seule étude et non un effet universel, et son contenu utile est la forme du résultat : la conception peut peser plus que la capacité du modèle, car ce qui séparait les conditions, c'était ce que l'activité demandait aux étudiants de faire.

La [[kumar-genai-computing-education-systematic-review-2026|revue systématique de 72 études évaluées par les pairs en enseignement de l'informatique]] arrive à la même couche par l'autre bout. Elle qualifie l'engagement critique envers la production de l'IA de « mécanisme commun reliant toutes les interventions efficaces du corpus » et recommande un [[scaffolding|accès progressif]], en n'introduisant l'IA générative qu'après la démonstration d'une compétence de base. Aucune des deux affirmations ne porte sur le produit que vous achetez.

## Donner à l'IA une tâche qui n'est pas la réflexion que vous évaluez

Des décennies de [[intelligent-tutoring|recherche sur le tutorat intelligent]] décrivent le schéma qui fonctionne : diagnostiquer ce que l'étudiant comprend, poser des questions, donner des indices progressifs, lui demander d'expliquer, fournir une rétroaction. Tout, sauf livrer la solution. Les travaux actuels sur les [[pedagogical-agent|agents pédagogiques]] tracent la même frontière entre comportement d'enseignement et production de réponses, et l'[[thermomix-genai-education-analogy-2026|analogie du Thermomix]] la rend concrète. Un même appareil peut cuisiner à votre place, et vous perdez alors la compétence, ou servir de partenaire d'essai pour des idées qu'il vous reste à comprendre. Ces modes se superposent à l'ICAP : passif, actif, constructif, interactif.

Les outils étroits montrent le même principe. Un [[structrag-diagram-reasoning-ai-tutoring|tuteur qui lit structurellement des schémas d'ingénierie]] atteint 93.0% de F1 au niveau des arêtes, contre 89.3% d'exactitude sur le schéma entier, ce qui signifie qu'il peut nommer les connexions précises manquantes ou mal lues même lorsque le schéma global est faux. C'est une rétroaction sur laquelle un étudiant peut agir, et non un simple admis ou refusé.

La question plus difficile est ce que le tuteur a le droit de recommander. Lorsqu'un [[tuo-armada-multi-agent-debate-overreliance-2026|débat multi-agents]] a remplacé « voici la réponse de l'IA » par une discussion dont la position préférée était tue, le basculement préjudiciable vers une position incorrecte de l'IA est passé de 42-60.5% à 5.7-8.2%. L'adoption d'une position correcte de l'IA a également baissé, de 61.1-72.3% à 22.1-33.3%. Taire une recommandation protège le jugement initial de l'étudiant et laisse la correction à la délibération : le dispositif échange donc de la correction d'erreurs contre moins de fausses routes assurées. Décidez laquelle de ces deux choses vous voulez de l'échange avant d'écrire l'invite.

En classe, la mise en œuvre coûte peu. Une séquence [[socratic-method|socratique]] est le schéma à viser, l'outil questionnant plutôt que répondant. Demandez aux étudiants de réclamer « un indice », « pose-moi des questions » ou « critique mon raisonnement », et faites de « résous ceci » le cas inhabituel. Vous changez le verbe par défaut de l'interaction, c'est-à-dire la part que les étudiants contrôlent réellement.

Une limite qu'il vaut la peine d'énoncer clairement. L'essentiel de ces preuves provient de tâches courtes dans une poignée de cours, et rien n'y garantit qu'un tuteur qui donne des indices relèvera les notes d'examen dans votre groupe. Pour cette question, il faut l'essai randomisé discuté plus bas, et son résultat est sobre.

## Fixer la règle au niveau du devoir, et en donner la raison

Un cadre utile distingue trois cas. Restreignez l'IA lorsque c'est la compétence autonome que vous mesurez. Encadrez-la lorsqu'une aide bornée ne compromet pas cette compétence. Exigez-la lorsque la collaboration experte entre humain et IA est elle-même ce que les étudiants doivent apprendre. La plupart des cours contiennent les trois, à des semaines différentes, et c'est pourquoi une règle unique au niveau du cours échoue toujours aux marges.

L'[[zou-is-this-a-trap-student-teachers-genai-2026|étude à méthodes mixtes portant sur 85 futurs enseignants]] montre ce que produit une règle sans raison. 62.4% de l'échantillon ont refusé d'utiliser l'IA générative même là où elle était autorisée, et 41.5% de ceux qui refusaient ont invoqué la crainte d'être accusés de [[academic-integrity|plagiat]]. 9 des 11 personnes interrogées lisaient la politique permissive elle-même comme un piège. Dans la même étude, seuls 37.6% ont utilisé l'IA générative autorisée, leurs choix suivaient la culture du programme et la [[assessment|conception de l'évaluation]] plus que l'autorisation d'un cours particulier, et leurs propres déclarations de divulgation sous-estimaient l'usage réel dans chaque cours.

Lisez ces chiffres comme un cahier des charges. Une autorisation sans but énoncé ressemble à un guet-apens, et une interdiction sans but énoncé ressemble à un obstacle à contourner. Ce à quoi les étudiants réagissent, c'est le raisonnement attaché à cette tâche. Inscrivez la règle dans la consigne du devoir, en une ligne, et rendez cette ligne assez précise pour qu'un étudiant puisse dire si l'aide qu'il s'apprête à accepter sape ce que vous évaluez.

## Évaluer quelque chose que l'étudiant a produit sans l'outil

C'est l'étape qui fait le travail, et les preuves sont ici les moins ambiguës de la page.

La revue de 72 études a constaté que l'IA générative augmentait de façon fiable l'achèvement à court terme et réduisait le temps de tâche dans 36 études, ce que les auteurs traitent comme le résultat le mieux répliqué du corpus, et que ces gains d'efficacité « ne se transfèrent pas à la performance autonome » dans 21 études. Une [[yan-cognitive-outsourcing-genai-assessments-2026|étude par verbalisation portant sur 38 étudiants de premier cycle]] montre comment cela se produit dans le cas ordinaire. La [[cognitive-offloading|décharge cognitive]] nuit le plus à l'apprentissage lorsque l'IA accomplit le raisonnement que l'étudiant était censé pratiquer. Là, 76.32% sont restés dans un schéma à un seul tour — demander, obtenir la réponse, s'arrêter — et seuls 21.06% ont alterné usage de l'IA et lecture et rédaction autonomes. Le groupe le plus nombreux, 31 étudiants sur 38, déclarait des objectifs de maîtrise, travaillait en tours uniques fragmentés, puis rapportait une dépendance excessive, une complaisance mentale et un oubli rapide ; l'un d'eux l'a formulé ainsi : « la vitesse à laquelle on oublie est elle aussi très rapide ». Un [[critical-thinking-paradox-genai-learning-2026|article de cadrage de 2026]] donne un nom au schéma. Les notes et les productions montent tandis que le travail mental qui produit un apprentissage durable baisse.

L'essai randomisé tranche le débat pour au moins un contexte. Un [[bassner-performance-learning-dissociation-ai-programming-2026|essai contrôlé randomisé à trois bras portant sur 275 étudiants de CS1]] a comparé un tuteur donnant des indices et retenant les solutions complètes, un ChatGPT sans restriction et des ressources web classiques. Les scores aux exercices se séparent nettement : 71.84% pour ChatGPT contre 29.85% pour le groupe de contrôle sans IA, le tuteur à indices se situant à 57.50%. Les gains de connaissances conceptuelles ne diffèrent pas du tout entre les trois bras, à 0.83, 0.71 et 0.85 points (temps × groupe p = .773). Les deux conditions avec IA réduisaient la frustration et la charge extrinsèque, et seul le tuteur à indices augmentait la motivation intrinsèque. L'outil que les étudiants jugeaient plus utile et plus facile était aussi celui qui réduisait le plus le traitement qui produit l'apprentissage.

Notez ce que ce dispositif ne peut pas étayer. C'est un cours, un semestre, une langue, et les scores aux exercices sont par construction une performance assistée, précisément la mesure dont l'étude déconseille de se fier. Cela ne montre pas que les tuteurs sont inutiles. Cela montre que le résultat que vous choisissez de mesurer décide de la réponse que vous obtenez, et que la préférence des étudiants n'est pas une mesure d'apprentissage.

Évaluez donc la version sans aide. Une tâche par unité où les étudiants restituent, expliquent, résolvent ou défendent des idées sans aucune IA présente, et attribuez-y de vrais points. L'argument de validité qui sous-tend cela se trouve dans la [[assessment-validity|validité de l'évaluation]] : une production soignée réalisée à la maison ne montre plus que la personne qui l'a remise possède la compétence que cette production affiche. [[redesign-assessment-ai-era]] déroule toute l'architecture, y compris l'étape authentifiée peu coûteuse pour les grands effectifs.

## Modifier le devoir que vous avez déjà, pas tout le cours

La plupart des enseignants qui posent cette question ne construisent pas un nouveau cours. Ils ont un mémoire, un rapport de laboratoire ou une série d'exercices qui fonctionne depuis des années, et ils veulent savoir où placer la couture. Démontez le devoir étape par étape, demandez pour chaque étape ce que vous y évaluez, et laissez la réponse fixer la frontière. C'est la méthode au niveau de la tâche documentée dans [[mccorkle-aligned-genai-course-policy-2025|les travaux de McCorkle sur la politique de cours alignée]], et une seule passe sur votre devoir le plus contesté suffit généralement à en voir la forme.

Un mémoire de dix pages se sépare typiquement ainsi. Le choix du sujet et la recherche des sources sont là où réside le jugement : un outil qui propose une thèse ou assemble la bibliographie a donc accompli la part que vous évaluez. La synthèse et l'argumentation sont le construit lui-même. Le formatage des citations, la vérification des références et l'édition linguistique sont des étapes où l'usage d'un outil est invisible pour votre construit, et l'interdire là ne vous rapporte rien sinon du ressentiment. Dites-le dans la consigne, étape par étape, dans un petit tableau si vous voulez.

Rendez ensuite l'étape du milieu visible. Demandez une justification annotée d'une page, remise avec le travail, qui nomme deux sources que l'étudiant a écartées et pourquoi, une affirmation qu'il a révisée après vérification, et les endroits où il a choisi de ne pas suivre une suggestion. Notez-la avec la même exigence de précision que la prose. Une justification ne pèse que si l'étudiant qui la saute perd plus qu'il ne gagne à la sauter : accordez-lui donc assez de points pour que l'arithmétique soit évidente.

Une série d'exercices est plus simple et la couture se situe ailleurs. Les réponses ne sont pas le construit ; le choix de la méthode et le diagnostic des erreurs le sont. Exigez la première étape de chaque problème, dans les mots de l'étudiant, avant l'ouverture de tout outil, et faites un problème de la série en classe sans rien à disposition. C'est un changement plus petit qu'il n'y paraît, et il convertit la série d'un produit que vous ne pouvez pas vérifier en une trace de la façon dont l'étudiant a raisonné.

Pour un rapport de laboratoire, la couture se situe généralement dans l'interprétation des données et l'analyse des erreurs. Laissez l'outil mettre le tableau en forme et vérifier les unités. Gardez dans les mains de l'étudiant l'interprétation, le choix de ce qui compte comme anomalie et l'explication de l'écart avec le résultat attendu, et notez ces éléments avec des points attachés.

Le schéma se généralise : repérez l'étape où réside la compétence, protégez cette étape, libérez le reste, et placez les preuves du processus là où sont les points. Ce que vous évitez, c'est la refonte qui change la façon dont le travail est produit sans changer ce que la note peut étayer.

## Juger les outils de rétroaction et de notation sur la performance ultérieure

[[ai-feedback-quality|La rétroaction par IA]] peut être opportune, précise, extensible et acceptable pour les étudiants, y compris dans [[higher-ed|l'enseignement supérieur]]. Qu'elle enseigne dépend de son exactitude, de son adéquation [[pedagogy|pédagogique]] et de la [[feedback-literacy|littératie en rétroaction]] des étudiants, c'est-à-dire de leur capacité à juger une rétroaction et à agir dessus. Si vous l'évaluez pour la rétroaction ou la notation, les chiffres ci-dessous sont ceux à apporter à la discussion d'achat.

Une [[mcinnes-salvaging-constructive-alignment-genai-2026|analyse critique de 14 documents d'orientation institutionnels]] a constaté que des invites génériques produisent des résultats d'apprentissage, des activités et des évaluations isolés. L'outil ne peut pas savoir à quel point un sujet est interconnecté, si bien que sa rétroaction reste générale au lieu d'être diagnostiquement précise.

La configuration fait effectivement bouger la qualité, de façon mesurable. Dans une [[teacher-ai-literacy-prompt-feedback-quality-2026|étude de la rétroaction par IA sur des objectifs d'apprentissage]], le modèle seul expliquait 26.9% de la variation de la qualité de la rétroaction et l'ajout de l'invite la portait à 42.8%, soit 15.9% de plus. La seule caractéristique d'invite qui comptait était la terminologie propre à la discipline ; la remplacer par des paraphrases courantes rendait la rétroaction nettement moins bonne. Le choix du modèle comptait aussi : Claude 3 et Gemini Advanced produisaient une rétroaction nettement moins bien notée que ChatGPT-4.

La notation est plus fragile encore. Une [[llm-automated-grading-programming-comparison-2026|comparaison de 18 modèles de langue notant 6.081 soumissions de programmation]] a trouvé des notes moyennes allant de 0.290 à 0.608 selon le modèle, avec des taux d'accord exact descendant jusqu'à 0.20 pour certains et 0.74 au mieux. Deux étudiants au travail identique peuvent être notés différemment selon le modèle que le département a acheté.

Vient ensuite la question qui intéresse les étudiants : la rétroaction change-t-elle ce qu'ils savent faire plus tard ? Un [[llm-feedback-handwritten-mathematics-exam-performance-2026|déploiement d'un semestre dans un cours de mathématiques de premier cycle]] auprès de 343 étudiants anglophones et 236 néerlandophones a généré des commentaires individualisés et des exercices d'entraînement à partir de copies photographiées. Les évaluateurs jugeaient les exercices d'entraînement les plus solides et la spécificité diagnostique comme la clarté les plus faibles. Le croisement randomisé sur des questions d'examen liées n'a trouvé aucune différence statistiquement significative après ajustement (pHolm = 0.104), et l'assiduité suivait les notes d'examen bien plus nettement que l'exposition à la rétroaction (ρ = 0.49 et 0.54, tous deux p < 0.001). Une rétroaction que les étudiants apprécient et utilisent n'est pas la même chose qu'une rétroaction qui produit un apprentissage mesurable.

Il y a un piège de plus si vous laissez un modèle noter. Dans une [[llm-grading-self-preference-bias-2026|étude de 1.426 mémoires de psychologie couvrant dix années universitaires]], les quatre correcteurs IA ont noté le travail rédigé par des étudiants le plus bas et le travail rédigé par l'IA le plus haut. 10 des 16 comparaisons étaient assez grandes pour que des différences de cette taille soient rares en recherche en éducation, jusqu'au plus grand écart observé, et le biais était le plus fort pour le texte entièrement généré par IA. Un correcteur peut récompenser un texte pour son caractère machinal même quand ses instructions disent de juger le contenu.

## Distinguer les étudiants que le dispositif aide de ceux qu'il laisse de côté

Une amélioration moyenne peut cacher un cours où les forts se renforcent et où les faibles sont moins bien servis. La [[digital-divide|fracture numérique]] suit désormais au moins trois lignes : l'accès aux outils, l'habileté à s'en servir, et qui obtient réellement un résultat utile. L'habileté à formuler des invites produit à elle seule un « privilège d'invite » où les utilisateurs plus expérimentés obtiennent de meilleures sorties du même système.

La revue de 72 études distingue deux mécanismes. Un écart de compétence apparaît lorsque les étudiants dotés de [[prior-knowledge|connaissances préalables]] plus solides convertissent l'aide en gains durables tandis que les étudiants moins préparés la substituent à la pratique. Un écart de ressources apparaît lorsqu'une connexion internet fiable et un accès payant soutiennent un meilleur usage des outils d'un établissement à l'autre. Seules six études du corpus examinaient directement l'équité, ce que les auteurs traitent comme le problème et non comme une note de bas de page ; c'est dans [[equity-in-ai-education|l'équité en éducation avec l'IA]] que cet argument est développé.

L'aide peut combler un écart lorsque les étudiants qui en ont besoin sont ceux qui s'y engagent. Une [[co-learning-ai-agent-hidden-rules-2026|étude en quatre expériences sur des apprenants découvrant des règles cachées avec l'aide d'un agent IA]] a trouvé que l'aide réduisait le nombre de coups nécessaires de 33-52%, et que le bénéfice se concentrait chez les plus faibles tandis que les apprenants plus forts étaient largement inchangés. C'est la version optimiste, et elle dépend de ce que les étudiants qui ont le plus besoin de l'aide soient ceux qui l'utilisent bien, ce que l'écart de compétence suggère qu'ils n'y parviendront pas sans qu'on le leur enseigne.

## Laisser les décisions lourdes de conséquences à une personne

La littératie en IA des enseignants n'est pas là où la conversation politique suppose qu'elle est. Parmi des [[science-educators-ai-literacy-postqualification-2026|enseignants de sciences ayant déjà suivi une formation à l'IA]], la littératie en IA moyenne était de 16.7 sur 30, en dessous des 18.79 de l'échantillon de référence, et elle était sans lien avec l'âge, le genre, les années de service ou l'ampleur de leur usage de l'IA. Une [[ai-tpack-mathematics-teacher-education-2026|enquête auprès de 412 futurs enseignants de mathématiques]] a trouvé une préparation à un stade précoce, les croyances pédagogiques étant les plus hautes avec une moyenne de 5.24 sur une échelle en 7 points et les connaissances techniques de l'IA les plus basses à 4.23.

C'est un argument pour des outils bornés, non autonomes. L'analyse des documents d'orientation propose un agent [[rag|à récupération augmentée]] configuré par l'établissement, qui guide la réflexion sans fournir de réponses, signale les désalignements et escalade vers une personne aux marges, avec une autorité décrite comme « dérivée et bornée ». Il existe des preuves directes qu'il faut garder les personnes dans la boucle plutôt que devant elle : un [[instructional-agents-multi-agent-course-gen|système de génération de matériel de cours]] obtenait de meilleurs scores lorsque des personnes restaient impliquées, le mode comportant le plus d'apport humain améliorant les scores des évaluateurs de 0.5-0.9 points par rapport au mode entièrement autonome. Ses évaluateurs autonomes se regroupaient étroitement autour de 2.9-3.1 tandis que les évaluateurs humains se dispersaient et discriminaient davantage, si bien que les auteurs ont retenu le jugement humain comme signal de qualité principal.

La version pratique pour un cours : laissez l'IA rédiger des brouillons, trier et signaler. Gardez l'exactitude, l'équité, la vie privée et toute décision sur la progression d'un étudiant sous une [[human-in-the-loop-ai|supervision humaine significative]]. Les risques qui rendent cela nécessaire sont l'ensemble familier : biais, vie privée, transparence, [[agency|autonomie]] de l'apprenant, responsabilité et [[pedagogical-safety|sécurité pédagogique]]. Cette liste explique pourquoi la [[teacher-ai-competency|compétence pédagogique en IA]] compte plus que la familiarité technique.

## Ce que les enseignants comprennent mal ici

**« Le travail soigné que j'ai devant moi prouve que l'étudiant sait le faire. »** Il prouve que le travail est soigné. L'écart de 71.84% contre 29.85% aux scores d'exercices, avec des gains conceptuels plats dans le même essai, et les 36 études de la revue qui trouvent de l'efficacité sans transfert, décrivent tous la distance entre performance assistée et capacité. Si la production est la seule chose que vous notez, la production est tout ce que vous avez mesuré.

**« Si l'IA est un tuteur, elle est du bon côté de la ligne. »** L'étiquette ne porte pas la garantie. Dans l'essai CS1, le tuteur à indices évitait les dégâts que causait un ChatGPT sans restriction sur les exercices, et ne produisait toujours aucun avantage conceptuel par rapport à l'absence d'IA. Retenir la réponse finale n'est pas la même chose que retenir le raisonnement, et un tuteur peut faire la seconde tout en semblant ne faire que la première.

**« Un détecteur, ou une règle plus stricte, résout le problème d'intégrité. »** La détection traite une réponse parmi plusieurs. L'étude sur les futurs enseignants a trouvé que la crainte d'être accusé supprimait l'usage autorisé, que la culture du programme prédisait le comportement mieux que toute politique de cours, et que les auto-déclarations sous-estimaient l'usage dans chaque cours. Une règle plus stricte change ce que les étudiants dissimulent, pas ce qu'ils apprennent.

**« Une règle unique à l'échelle du cours est plus juste et plus simple. »** Plus simple, oui. Les preuves favorisent des règles fixées devoir par devoir, parce que les trois cas — restreindre, encadrer et exiger — coexistent dans la plupart des cours et que la même autorisation ne signifie pas la même chose dans un rapport de laboratoire et dans une réflexion. Les positions uniformes sont aussi celles que les étudiants contournent le plus facilement.

**« Les étudiants qui disent que l'outil aide apprennent grâce à lui. »** La satisfaction est une [[self-report-measures|mesure d'auto-déclaration]], et dans l'essai CS1 la condition la mieux notée était celle qui réduisait le plus le traitement derrière l'apprentissage. Le déploiement en mathématiques a trouvé la même séparation : une rétroaction appréciée, aucune différence significative à l'examen.

**« La littératie en IA, c'est l'habileté à formuler des invites, et les étudiants l'acquièrent en utilisant l'outil. »** Les cadres traitent la [[ai-literacy|littératie en IA]] comme une compréhension conceptuelle, une habileté opérationnelle, une [[critical-thinking|évaluation critique]], un jugement [[ethics|éthique]] et une conscience des limites. La revue dit explicitement que l'[[prompt-engineering|ingénierie des invites]], la vérification des sorties et l'analyse des erreurs de l'IA sont des compétences enseignables qui ne se développent pas par simple exposition. Les enseignants de sciences formés qui obtiennent 16.7 sur 30 sont la version empirique de cette affirmation.

**« Le problème d'équité, c'est l'accès. »** L'accès est une des trois lignes. L'habileté et qui obtient un résultat utile sont les deux autres, et seules six études du corpus en examinaient une directement. Donner une licence à chaque étudiant règle le tiers le plus facile.

## Les objections qui vous reviendront

**« Mes étudiants disent que l'IA les aide. »** Elle aide généralement avec le travail qu'ils ont devant eux, et le constat porte sur ce qui reste après. Demandez-leur ce qu'ils savent encore faire sans aide et vous obtenez une autre réponse, ce qui est la raison d'être de l'étape notée sans IA.

**« J'enseigne à 200 étudiants. Je ne peux pas lire des brouillons ni mener des vérifications orales. »** Vous n'avez pas à tout lire. Une application en classe ou une courte explication enregistrée dans le devoir le plus lourd, plus une vérification par échantillon sur les travaux qui semblent incohérents avec les remises antérieures, couvre l'essentiel du risque. Les remises par étapes, les justifications annotées et les [[eportfolio|portfolios]] de processus passent à l'échelle ; la notation de la vérification d'une production d'IA délibérément défectueuse aussi.

**« La détection est tout ce que nous avons. »** Les détecteurs ont des problèmes documentés de fiabilité et d'équité, et la validité est le problème plus difficile : un produit soigné réalisé à la maison ne montre plus que la personne qui l'a remis possède la compétence. Les preuves de processus coûtent moins qu'une course aux armements et produisent quelque chose que vous pouvez défendre en appel.

**« L'interdire est plus simple. »** Plus simple, et cela échoue généralement. L'adoption dans l'étude sur les futurs enseignants suivait la culture du programme plutôt que la politique d'un cours particulier, et la divulgation sous-estimait l'usage réel dans chaque cours. Une interdiction vous retire aussi la possibilité de voir comment les étudiants utiliseraient l'outil une fois partis.

**« Je n'enseigne pas l'IA. Ce n'est pas ma discipline. »** Les constats portent sur votre discipline. Quand l'IA accomplit la pratique que votre cours existe pour fournir, c'est exactement là qu'elle interfère, et l'interférence apparaît dans vos évaluations, que vous mentionniez l'outil ou non.

**« Les preuves sont trop récentes pour agir. »** En partie vrai, et cela joue dans les deux sens. Une grande partie du corpus est faite d'interventions courtes, d'études en [[self-report-measures|auto-déclaration]], d'une seule discipline, ou de travaux de 2025 et 2026, et les affirmations issues de la recherche mûre sur le [[intelligent-tutoring|tutorat intelligent]] sont plus solides que celles qui portent sur des [[conversational-ai|chatbots]] généralistes sans restriction. Là où une affirmation a désormais un essai randomisé derrière elle — la dissociation entre performance et apprentissage dans l'essai CS1 et le résultat sur la rétroaction dans le déploiement en mathématiques —, cet essai est cité ici. Là où elle n'en a pas, traitez le constat comme la meilleure orientation disponible plutôt que comme une loi établie, et soyez le plus sceptique envers les résultats qui ne montrent que la satisfaction, la vitesse d'exécution, la qualité de la production ou une performance assistée immédiate.

## À faire cette semaine

**1.** Choisissez le devoir que vous êtes le moins à l'aise de défendre. Écrivez la phrase de capacité en tête de la consigne.

**2.** Ajoutez une étape qui se déroule sans aucune IA présente : une application de cinq minutes en classe, une courte explication enregistrée, ou un paragraphe rédigé en salle. Donnez-lui de vrais points.

**3.** Énoncez la condition d'usage de l'IA pour ce devoir et ajoutez une ligne de justification. Si le devoir mélange des étapes, dites lesquelles sont lesquelles.

**4.** Réécrivez une invite que vous donnez aux étudiants, de « résous ceci » à « donne-moi un indice et pose-moi une question », et dites-leur pourquoi.

**5.** Avant le début du semestre, portez le changement à votre responsable de programme et à qui approuve les aménagements, pour que le premier appel ne soit pas aussi la première conversation.

## Où aller ensuite

Pour la version de ces malentendus, acteur par acteur, voir [[addressing-common-misconceptions-ai-education]]. Pour les exigences de conception qu'impliquent les constats sur l'équité et le jugement humain, voir [[equity-ethics-pedagogical-safety-research]]. [[redesign-assessment-ai-era]] pousse plus loin la moitié « évaluation », et [[does-ai-help-students-learn]] est la revue de preuves qui sous-tend les affirmations de cette page. Si vous hésitez entre refonte et application, [[reduce-ai-cheating]] et [[course-ai-policy]] sont les pages complémentaires.
