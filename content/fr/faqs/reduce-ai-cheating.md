---
title: "Comment puis-je réduire la triche par IA dans mon cours ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 88
audience: [instructors, assessment designers]
foundations: [academic-integrity, ai-literacy, reducing-ai-misuse]
assessment: [assessment]
source_updated: "2026-10-28T11:06:17-04:00"
translation_of: faqs/reduce-ai-cheating
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

C'est la sixième semaine. Une dissertation à faire à la maison revient fluide et creuse, et vous ne pouvez pas dire si l'étudiant l'a écrite. Ou bien quatre copies partagent une forme que personne dans la salle n'a produite en septembre, et le bureau d'intégrité veut un compte rendu écrit de ce que le devoir mesurait. Ou encore votre département a voté le mois dernier de restreindre la [[generative-ai|IA générative]] dans les cours de tronc commun et vous a laissé le soin de donner un sens à cette restriction.

La réponse à donner à un collègue : cessez d'essayer de prouver qui a écrit le travail et changez les conditions dans lesquelles il est écrit. La détection est le levier le plus faible dont vous disposez. Les leviers qui tiennent sont une tâche où le raccourci laisse une trace, une étape unique sans assistance que vous pouvez observer, et une courte séquence enseignée qui maintient les étudiants à l'intérieur du travail cognitif.

## La version courte

**1.** Retirez la détection du chemin critique. Les données ci-dessous montrent qu'elle se déclenche à tort sur une révision permise et qu'elle manque une dissimulation délibérée.

**2.** Insérez une étape sans assistance et observable dans chaque [[assessment|évaluation]] à enjeu élevé, et donnez-lui un poids réel.

**3.** Fixez la frontière de l'IA par étape de tâche, non par cours, pour qu'elle suive ce que vous notez.

**4.** Si l'IA est permise, configurez-la pour donner des indices plutôt que des réponses, et exigez une tentative de l'étudiant avant qu'elle ne réponde.

**5.** Rendez la divulgation précise et exempte de sanction. Les règles vagues comme les règles punitives poussent les étudiants vers la dissimulation.

## La détection ne portera pas la cause

La synthèse [[academic-integrity|Intégrité académique]] signale des limites substantielles dans la détection de textes produits par l'IA et soutient que l'intégrité à l'ère de l'IA générative est de plus en plus un problème de conception de l'évaluation plutôt qu'un simple problème de détection. Emportez les chiffres à la réunion où vous justifiez cela devant quelqu'un qui a déjà acheté une licence.

Dans une étude contrôlée portant sur 642 résumés scientifiques publiés en anglais, deux détecteurs commerciaux ont signalé comme suspects 38-80% des textes ayant fait l'objet d'une *révision* légère par l'IA conforme aux consignes. Ils ont signalé 9-15% des originaux 2023-25 non modifiés, les travaux hors [[stem-education|STIM]] étant bien au-dessus des STIM avec p<0.001. Après une « humanisation » par IA, les mêmes outils n'ont attrapé que moins de 4% des réécritures étiquetées comme produites par l'IA ([[karr-ai-detection-humanization-2026]]). Lisez ces trois résultats dans l'ordre. L'usage permis était signalé plus souvent que l'usage interdit, et l'usage interdit était largement invisible dès que quelqu'un le passait dans un paraphraseur. C'est le paradoxe de l'intégrité : le détecteur punit l'assistance honnête tout en rendant possible la dissimulation délibérée.

Les données de terrain vont dans le même sens. Dans une étude clandestine, 94% des copies entièrement générées par IA, injectées dans des examens en ligne réels répartis sur cinq modules de psychologie, sont passées inaperçues, et les travaux produits par l'IA ont en moyenne obtenu de meilleurs résultats que les vrais étudiants ([[teichmann-detecting-undetectable-misconduct-2026]]). L'université Vanderbilt a désactivé son détecteur sous licence après n'avoir pas réussi à valider un taux de faux positifs annoncé de 1%, un taux qui impliquerait environ 750 étudiants mal étiquetés sur 75.000 copies annuelles.

Rien de tout cela n'établit que la détection ne fonctionne jamais. Cela établit le profil d'erreur avec lequel vous devez vivre. Un étudiant signalé est une personne qui a droit à un recours, et le résultat des 642 résumés indique que le signalement frappe le plus durement les étudiants qui ont fait la chose permise. L'argument complet sur ce que cette situation change pour ce qu'une note peut attester se trouve dans [[redesign-assessment-ai-era|Repenser l'évaluation à l'ère de l'IA]].

## Changez ce que le devoir rend facile

La synthèse [[reducing-ai-misuse|Réduire le mésusage de l'IA]] classe la refonte au niveau 1 pour une raison structurelle : elle fonctionne que l'étudiant choisisse ou non le bon comportement, parce qu'elle contraint l'environnement au lieu de dépendre de la motivation.

Commencez par une étiquette. L'[[ai-assessment-scale-reform|échelle d'évaluation de l'IA (AIAS)]] attribue à chaque devoir un niveau d'usage de l'IA, depuis « aucune IA » en passant par « IA pour le remue-méninges seulement » et « assistance de l'IA avec attribution » jusqu'à « usage complet de l'IA », de sorte que l'attente soit explicite et opposable plutôt que devinée.

Puis changez l'artefact. Une [[meta-analysis-systematic-review|revue systématique]] de 72 études sur l'IA générative en [[cs-education|enseignement de l'informatique]] juge la refonte à la fois faisable et la plus rentable, et isole un geste : ajouter un élément oral ou autrement visible dans le processus à au moins une évaluation à enjeu élevé par cours. Elle le qualifie d'intervention la plus efficace du corpus. La détection est le domaine le plus mince couvert par la revue, avec seulement 3 études, face à 60-80% des étudiants en informatique qui déclarent utiliser l'IA générative dans leurs travaux, généralement sans autorisation explicite de l'enseignant, et 70% d'un échantillon national d'enseignants qui demandent explicitement une formation à la conception d'évaluations résistantes à l'IA ([[kumar-genai-computing-education-systematic-review-2026]]).

Le menu, à peu près dans l'ordre de ce qui survit le mieux à une grande classe.

Sans assistance, en classe, à livre fermé : examens surveillés, questionnaires, rédaction chronométrée. Donnez-leur plus de poids qu'avant, car les devoirs à la maison sont l'artefact que l'IA gonfle. Les examens oraux et les soutenances fonctionnent pour la même raison, le dialogue en temps réel étant difficile à externaliser ([[fenton-oral-exams-ai-authentic-assessment-2025]]).

Les artefacts de processus : brouillons, traces de raisonnement, annotations « montrez votre raisonnement », journaux de révision, afin que le *processus* soit visible et non seulement le produit ([[authentic-products-authenticated-processes-2026]]). Les tâches authentiques les accompagnent : cas locaux, matériel de stage, données propres à l'étudiant, tout ce qui est difficile à déléguer ([[kirsanov-beyond-detection-ai-online-assessments-2026]]).

La variation de tâche par étudiant, où chacun reçoit une version distincte en surface mais équivalente sur le plan du construit, rend la copie structurellement inutile. Traitez la garantie comme conditionnelle à la capacité : [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]] a constaté que les générateurs de pointe n'atteignaient que 0.81-0.88 sur un score d'intégrité conjoint, tandis que les modèles non de pointe s'effondrent à 0.50-0.55. Si vos variantes ne sont pas équivalentes, vous avez acheté une protection contre le partage au prix d'une injustice entre étudiants.

## Comblez l'écart entre la pratique et l'examen

C'est la partie que les enseignants sautent, et c'est là que les preuves causales sont les plus solides.

Dans un [[rct|essai contrôlé randomisé]] sur le terrain, un tuteur de style ChatGPT sans garde-fou a augmenté la performance en pratique assistée de 48% et réduit les scores d'examen sans assistance de 17%. Une version avec garde-fous, donnant des indices au lieu de réponses et amorcée avec des informations sur les problèmes rédigées par l'[[teacher-role|enseignant]], a éliminé entièrement le préjudice ([[generative-ai-guardrails-harm-learning]]). À plus grande échelle, une étude portant sur 26.811 étudiants a constaté que l'externalisation des devoirs augmentait les scores de devoirs de 18% tout en abaissant les scores d'[[summative-assessment|examens à livre fermé]] de 20% en six mois ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).

Notez la forme des deux résultats. Le gain et la perte portent sur des mesures différentes, et une seule des deux est celle que vous certifiez. Un seul essai contrôlé randomisé ne peut pas vous donner la taille de l'effet dans votre cours. Il vous donne la direction, et les deux études pointent dans le même sens.

Si vous allez laisser les étudiants utiliser un tuteur, configurez-le avant le trimestre plutôt qu'après la première plainte :

**1.** Réglez-le pour qu'il donne des indices [[socratic-method|socratiques]] progressifs plutôt que l'étape de réponse suivante.

**2.** Amorcez-le avec des solutions correctes et les [[misconceptions|idées fausses]] courantes, afin qu'il cible les erreurs au lieu de reformuler le contenu.

**3.** Exigez une tentative avant que la moindre sortie n'apparaisse.

**4.** Appliquez la règle du [[brcic-effortless-trap-productive-struggle-2026|piège de l'effort sans peine]] : si laisser entrer l'IA rend la tâche facile au point de ne plus demander d'effort, elle est au mauvais endroit.

Cette dernière règle est aussi ce qui donne leur valeur à l'[[scaffolding|étayage]] et aux [[guardrails|garde-fous]], et ce qui rend un [[simulating-students|étudiant simulé]] utile pour tester votre propre prompt avant que de vrais étudiants ne le rencontrent.

## Demandez aux étudiants de montrer ce qu'ils savent faire

Vous n'établirez jamais comment un fichier a été produit. Vous pouvez établir, à peu de frais, si l'étudiant sait faire ce que le fichier semble démontrer.

[[best-response-student-ai-dialog-2026|« La meilleure réponse à l'usage de l'IA par les étudiants n'est pas la détection, c'est le dialogue »]] décrit les mécanismes : une explication de deux minutes en tête-à-tête ou enregistrée d'un travail remis, un court questionnaire de suivi sur la même matière passé sans outils, une demande de réviser un échantillon de son propre travail et d'expliquer les changements. La source est un témoignage de praticien, alors traitez-la comme une pratique prometteuse plutôt que comme une preuve d'effet.

La vérification décide aussi si votre procédure d'inconduite survit à un recours. [[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] ont analysé des dossiers réels d'allégations d'inconduite liées à l'IA générative et ont constaté que la justice naturelle exige que l'étudiant soit informé de l'allégation et ait la possibilité de répondre *avant* toute détermination, habituellement lors d'une réunion d'enquête ou d'un entretien devant un comité, tout ce qu'il dit entrant au dossier de preuve. Leurs catégories de preuves expliquent pourquoi cela doit être intégré au cours : les traces comportementales enregistrées par le système n'existent que dans les évaluations surveillées, et les preuves de processus plus faibles, comme les brouillons, les réunions de supervision et les présentations, n'existent que là où ces pratiques étaient déjà courantes. Une habitude de vérification devient une preuve sur laquelle vous pourrez vous appuyer plus tard.

Rédigez la règle avec précision, aussi. [[wright-transcription-not-generation-2026|Wright (2026)]] montre que les interdictions qui traitent la transcription de la parole en texte et la rédaction générative comme le même « usage de l'IA » sont trop inclusives et risquent de sanctionner des étudiants qui n'ont pas fait la chose interdite. C'est un problème d'équité avant d'être un problème juridique, et [[legal-issues-and-risks|Questions et risques juridiques]] couvre le reste.

## Gardez les étudiants dans la boucle pendant qu'ils travaillent

Interdire l'outil et le permettre sans structure produisent le même résultat : des étudiants qui se tiennent à l'extérieur du travail cognitif.

La synthèse Réduire le mésusage de l'IA expose huit principes de conception pour la version permise, dont : préserver la [[desirable-difficulties|friction cognitive]], positionner l'IA comme partenaire de réflexion provisoire plutôt que comme autorité, intégrer des points de contrôle de l'évaluation, et exiger un journal [[metacognition|métacognitif]] et des journaux de prompts.

La séquence qui porte ces principes est assez courte pour être imprimée sur une feuille de devoir :

**1.** Penser d'abord. Les étudiants font un remue-méninges, un plan ou un brouillon de façon autonome avant d'ouvrir quoi que ce soit.

**2.** L'IA ensuite. Ils l'utilisent pour critiquer, prolonger ou générer des solutions de rechange à partir d'une réflexion qu'ils ont déjà.

**3.** Réfléchir enfin. Ils notent à quoi ils l'ont utilisée, ce qu'ils ont accepté et rejeté, et pourquoi. Un prompt et un journal de révision suffisent.

## Rendez la déclaration précise, et peu coûteuse à remplir

Remplacez la case à cocher générique « j'ai utilisé l'IA » par un cadre de déclaration [[discipline-specific-aied|propre à la discipline]] qui rattache l'usage à des étapes cognitives, par exemple la planification structurelle par rapport à la génération de contenu ([[genai-declaration-frameworks-higher-education]]). Une page de garde qui demande quelles étapes, quel outil, quels prompts et comment la sortie a été évaluée fait plus de travail qu'un oui ou non.

Deux conditions la rendent honnête. La divulgation doit être sans danger, car les politiques punitives ou vagues poussent activement à la dissimulation ([[gonsalves-student-non-compliance-ai-declarations-2025]]), et les étudiants pèsent le risque de vous le dire contre le risque de ne pas le dire ([[chang-should-i-tell-my-teacher-ai-disclosure-2026]]).

L'arithmétique doit aussi favoriser l'aveu. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed et Temimi]] modélisent cela comme un problème d'information imparfaite plutôt que de moralité. La divulgation n'est attrayante que tant que le coût de l'honnêteté reste bas, et comme les faux positifs d'un détecteur frappent aussi les étudiants honnêtes, une surveillance renforcée peut rendre la dissimulation relativement plus attrayante chaque fois que la sensibilité accrue produit plus de nouveaux faux positifs que de nouveaux vrais positifs. Lisez un usage déclaré comme un contexte plutôt que comme un aveu, et concevez pour l'étudiant le plus tenté de dissimuler.

## Enseignez la littératie que vous notez

La synthèse Réduire le mésusage de l'IA classe l'enseignement de la [[ai-literacy|littératie en IA]] et du [[prompt-engineering|prompting]] au niveau 2, en dessous du changement structurel.

L'exemple mesuré est un module de [[k-12|maternelle à la 12e année]] utilisant une pratique de prompts fondée sur des scénarios avec un correcteur automatique par [[llm|grand modèle de langage]]. Il a amélioré la compétence réelle en prompting et augmenté de 10.4% la confiance dans l'usage de l'IA pour apprendre, 87% déclarant avoir appris à utiliser l'IA de manière responsable ([[aaai2026-prompting-literacy-k12]]).

Ce que les étudiants croient réellement est moins cynique que la panique ne le suggère. Parmi 504 étudiants en sociologie, 65% avaient utilisé l'IA générative pour leurs travaux, mais seulement 3% pour générer le texte d'un devoir et 2% pour générer un brouillon complet. 81% avaient reçu des consignes sur l'IA et seulement 46% les trouvaient très claires ([[student-genai-use-views-writing]]). L'ambiguïté, et non la défiance, est le problème pratique, ce qui explique qu'une règle claire plus une séquence enseignée modifie plus de comportements qu'un avertissement. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa et Mezgebu (2026)]] décrivent des étudiants qui se demandent si l'IA générative est un outil qui facilite la tricherie ou un partenaire qui soutient l'apprentissage, et c'est à cette question que vos attentes doivent répondre.

Le préjudice qu'il vaut la peine d'enseigner explicitement est l'[[ai-misuse-learning-harm|écart performance-apprentissage]] : la performance monte maintenant, l'apprentissage baisse plus tard, et l'étudiant ne vit que le premier. [[ai-tools-academic-work-cheating-2026]] et [[student-rationalization-ai-writing]] couvrent le versant des normes entre pairs et de la rationalisation, y compris la défense du « tout le monde le fait » qu'une norme claire désamorce. Pour savoir à quel point cette base est solide, voir [[ai-literacy-evidence]] et [[top-10-findings-ai-education-instructors|Les 10 principales conclusions de la recherche sur l'IA en éducation]].

## Ce que les enseignants se trompent là-dessus

Un détecteur, c'est une assurance. Comptez ce que la prime couvre : au taux que Vanderbilt n'a pas pu valider, 1% de 75.000 copies annuelles représente 750 étudiants mal étiquetés, et l'étude des 642 résumés montre que les signalements se concentrent sur la révision permise.

Une interdiction règle la question. Une interdiction rédigée dans la langue de l'« usage de l'IA » attrape la transcription en même temps que la rédaction, ce qui signifie que vous pouvez sanctionner un étudiant pour avoir dicté sa propre phrase ([[wright-transcription-not-generation-2026|Wright, 2026]]). Elle ne vous dit rien non plus sur ce que cet étudiant sait faire.

La tricherie est un problème de motivation, donc les sanctions sont l'outil. La motivation est réelle, et ce n'est pas le levier le mieux étayé. La refonte est classée au niveau 1 parce qu'elle n'exige pas que l'étudiant choisisse bien, et le modèle de la région de réponse dit de concevoir pour l'étudiant le plus tenté de dissimuler.

Si je permets l'IA, le mésusage cesse d'être mon problème. La permission sans garde-fou a produit le gain de 48% en pratique et la perte de 17% à l'examen dans la même étude. Remettez le garde-fou et le préjudice a disparu.

Les étudiants savent déjà où est la ligne. 81% avaient des consignes et moins de la moitié les trouvaient claires. Les chiffres de 3% et 2% disent que la plupart ne génèrent pas des devoirs entiers ; le 46% dit qu'ils devinent pour le reste.

Une case à cocher est une déclaration. Une case à cocher atteste qu'un étudiant a cliqué. Une déclaration par étapes vous dit ce qu'il a fait à chaque étape, et c'est la seule version qui vous aide, lui ou elle.

## Ce qui vous reviendra dessus

**« Je n'ai pas le temps de refondre un cours ce trimestre. »** Ne refondez pas le cours. Refondez un devoir : une étape sans assistance, une ligne de grille avec des points. C'est un changement de deux heures, et c'est celui que la revue de 72 études isole.

**« Les soutenances orales sont impossibles avec 300 étudiants. »** Alors n'en faites pas 300. Donnez du poids à la composante à livre fermé, exigez des artefacts de processus, et faites des vérifications orales par échantillon sur les copies qui semblent incompatibles avec le travail antérieur. Trois cents étudiants n'ont pas besoin de 300 conversations pour changer le calcul.

**« Il me faut quelque chose à montrer au bureau d'intégrité. »** Une preuve de processus est plus solide qu'un score de détecteur, car Munoz et al. ont constaté que la possibilité de répondre et les dossiers propres au cours sont ce sur quoi repose le dossier. Un pourcentage de signalements est une allégation. Une explication enregistrée est une pièce au dossier.

**« Exiger des déclarations ne fait que pénaliser les honnêtes. »** C'est vrai si la divulgation invite au soupçon. Gardez le coût de l'honnêteté proche de zéro : aucune sanction pour un usage déclaré, et une déclaration lue comme un contexte. Le modèle prédit la dissimulation précisément quand l'honnêteté devient coûteuse.

**« Les étudiants utiliseront l'IA de toute façon. »** Ils le feront, et la question utile est de savoir à quelle réponse votre devoir rend la tâche la plus facile. Dans une classe où 65% déclarent un usage et 2% la génération d'un brouillon complet, l'essentiel du trafic est une assistance que vous pourriez enseigner plutôt qu'une fraude que vous devez attraper.

**« Resserrer les règles attrapera des étudiants qui n'ont rien fait de mal. »** C'est le mode de défaillance documenté, pas une hypothèse. La précision est la protection : nommez l'acte interdit, pas l'outil.

## Quoi faire cette semaine

**1.** Réécrivez la clause sur l'IA de votre devoir le plus contesté pour qu'elle nomme des étapes et des actes précis, et abandonnez la formulation générale.

**2.** Ajoutez une étape sans assistance à ce devoir et donnez-lui assez de poids pour compter.

**3.** Inscrivez un artefact de processus dans la grille d'évaluation avec des points attachés, et décrivez ce qui est réussi avec autant de précision que le produit.

**4.** Si vous autorisez un tuteur, vérifiez sa configuration cette semaine par rapport aux quatre réglages ci-dessus.

**5.** Dites aux étudiants, par écrit, qu'un usage déclaré ne sera pas sanctionné, et tenez parole.

## Où aller ensuite

[[redesign-assessment-ai-era|Repenser l'évaluation à l'ère de l'IA]] est le compagnon sur la conception de l'évaluation, et le point de départ si votre question est de savoir ce que la note atteste. [[should-we-use-ai-detectors|Devons-nous utiliser des détecteurs d'IA ?]] traite directement la décision sur les détecteurs, [[course-ai-policy|politique d'usage de l'IA pour un cours]] couvre la formulation que les étudiants lisent réellement, et [[ai-assessment-scale-reform|la réforme de l'échelle d'évaluation de l'IA]] fournit le schéma d'étiquetage. Côté enseignement, [[ai-literacy-evidence]] et [[ai-misuse-learning-harm]] couvrent ce que vaut le travail de littératie et pourquoi le préjudice se produit.
