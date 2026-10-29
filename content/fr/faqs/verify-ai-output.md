---
title: "Comment apprendre aux étudiants à vérifier les productions de l'IA ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
source_updated: "2026-10-28T11:43:14-04:00"
translation_of: faqs/verify-ai-output
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

C'est la semaine avant la remise des notes et deux copies citent des sources qui n'existent pas. Les deux étudiants affirment avoir vérifié. L'un a ouvert le lien. L'autre a lu le paragraphe et a décidé que cela sonnait juste. Vous avez déjà dit à cette classe de vérifier ce que le chatbot lui donne, et le fait de le dire n'a pas produit le comportement.

La vérification est une séquence que vous pouvez intégrer à un devoir. Décidez de ce qui compte comme correct avant que la tâche commence, faites consigner à l'étudiant une attente par écrit, renvoyez-le au document de référence plutôt qu'à son impression de la prose, et évaluez la trace qu'il produit. Une ligne de barème qui dit « sources vérifiées » ne mesure rien de tout cela.

## La version courte

**1.** Rédigez d'abord le corrigé de référence. Une vérification a besoin de quelque chose à quoi se rapporter, et la plupart des devoirs de vérification ne définissent jamais ce que correct signifie.

**2.** Exigez une prédiction avant que la production apparaisse, afin que le raisonnement de l'étudiant existe sur papier avant que l'outil puisse l'écraser.

**3.** Nommez la cible de chaque vérification : la liste des auteurs, le lieu de publication, l'année, le nombre précis, l'étape précise. « Assurez-vous que c'est juste » n'est pas une vérification.

**4.** Séparez la vérification qu'une machine peut exécuter du jugement que seul un lecteur peut porter, et apprenez aux étudiants laquelle des deux ils font.

**5.** Évaluez la trace par rapport au corrigé, non l'effort, afin que la mise en scène de la vérification ne rapporte rien.

**6.** Inscrivez la vérification dans la tâche. La pression du temps est une raison documentée pour laquelle les étudiants la sautent.

## Décidez de ce que correct signifie avant que quiconque vérifie quoi que ce soit

[[verification-quality-reliance-calibration-genai-2026|Wei et Shang (2026)]], à partir de 493 enregistrements dédoublonnés et de la cartographie de 14 études empiriques prioritaires, séparent sept choses que l'« usage critique de l'IA » réduit à une seule : l'évaluation épistémique, l'engagement de la vérification, la qualité du processus, le succès de la vérification, les décisions de s'appuyer sur la production, la performance immédiate à la tâche et l'apprentissage indépendant. Votre barème dit « sources vérifiées », ce qui se situe à la deuxième étape et ne vous dit rien sur la compétence de la vérification ni sur la question de savoir si elle a changé la réponse de l'étudiant. Engager une vérification n'est pas réussir une vérification. Un processus solide peut finir sans conclusion, un processus faible peut tomber sur la bonne réponse, et un étudiant qui a lancé une recherche et est resté dans la confusion obtient le même score que celui qui a résolu la question.

La même revue trace une seconde ligne, entre la [[trust|confiance]] et le fait de s'appuyer sur la production. La [[trust-calibration|calibration de la dépendance]] demande si une décision de s'appuyer sur la production était appropriée compte tenu de la qualité réelle de cette production, ce qui lie le jugement à une décision et à une production. Une étude auditée a constaté que de fausses informations de ChatGPT modifiaient la confiance déclarée des participants, sans jamais consigner s'ils avaient ensuite accepté ou rejeté une recommandation précise. Une autre a enregistré les décisions d'acceptation et de rejet sur la [[feedback|rétroaction]] de ChatGPT pour 78 étudiants en traduction, mais sans évaluation indépendante par un expert, une acceptation ne peut pas être dite appropriée et un rejet ne peut pas être dit justifié. Sans vérité de terrain sur la qualité de la production, la dépendance ne peut pas être classée du tout.

Voilà la conséquence pour la conception, et c'est la première chose à corriger. Avant de fixer une tâche de vérification, écrivez deux courtes descriptions : à quoi ressemble une production correcte pour cette tâche, et à quoi ressemble une production plausible mais fausse. Une de chaque suffit. Les étudiants disposent alors d'une norme à laquelle se rapporter, et vous avez de quoi évaluer la vérification autrement qu'en jugeant si l'étudiant semble prudent.

## Faites-les s'engager avant que l'outil réponde

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] construit un dispositif de mesure autour du principe *prédire avant d'exécuter* : l'apprenant énonce ce qui devrait se produire, puis le comportement de l'artefact est jugé par rapport à cette prédiction sur des critères de domaine plutôt que sur sa capacité à s'exécuter. Le raisonnement existe avant la production, et c'est ce qui le rend évaluable.

Son audit de 24 études a trouvé le même outil produisant des résultats opposés selon la structure de la tâche. Un dispositif ChatGPT classique aboutissait à des niveaux significativement plus bas de réussite, d'[[self-efficacy|auto-efficacité]] et de flow, tandis qu'une condition ajoutant des exigences de vérification et des modules de réflexion sur l'erreur montrait une [[critical-thinking|pensée d'ordre supérieur]] plus forte. L'outil était constant entre ces conditions. Ce qui variait, c'était que la tâche demande ou non à l'étudiant de tenir une position que l'outil pouvait contredire.

En pratique, cela tient en une ligne sur la consigne : avant d'ouvrir l'outil, écrivez ce que vous attendez qu'il dise et pourquoi. Puis comparez. Deux étudiants peuvent produire le même paragraphe et un seul d'entre eux peut expliquer en quoi ce paragraphe s'écarte de ce qu'il avait prédit.

## Renvoyez-les au document de référence

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] ont suivi 113.588 références issues de 5.225 articles d'enseignement de l'informatique publiés depuis 2021 et vérifié manuellement 828 notices suspectes. Ils ont trouvé 30 notices contenant des informations bibliographiques fabricables de manière vérifiable, réparties sur 14 articles, toutes de 2025 et 2026. Treize étaient entièrement inventées. Les 17 autres combinaient un titre réel avec une paternité, un lieu de publication ou une année fabriqués ou inexacts. Au SIGCSE Technical Symposium, le compte est passé de 3 dans les actes de 2025 à 17 dans ceux de 2026, soit 2.3% des articles de ces actes.

Les champs d'auteur échouent plus souvent que toute autre partie d'une référence générée. Ce seul résultat vous dit quoi demander. « Ouvrez la source et lisez la liste des auteurs » vise le champ le plus susceptible d'être faux, et produit un fait que l'étudiant possède ou ne possède pas. « Assurez-vous que les sources sont réelles » produit une assurance. Demandez aux étudiants de confirmer les auteurs, le lieu de publication et l'année par rapport au document de référence lui-même. L'article demande que tout travail cité soit vérifié et que tout vérificateur automatisé reste [[human-in-the-loop-ai|dans la boucle humaine]], ce qui est exactement l'habitude qu'une exigence de citation fait répéter.

## Séparez la vérification qu'une machine peut exécuter du jugement que seul un lecteur peut porter

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] fixe un seuil défendable pour ce qui peut être vérifié mécaniquement : des critères documentés, une comparaison à un savoir établi sans jugement interprétatif, et une réponse unique correcte ou des variantes acceptables spécifiées d'avance. Les dates, les formules, les citations et les calculs franchissent ce seuil. Tout ce qui est interprétatif échoue, et là, la lecture de l'étudiant est elle-même l'instrument de la vérification.

Gousopoulos formalise la même séparation comme un problème de détection du signal à deux paramètres indépendants. La sensibilité est la capacité de distinguer une production correcte d'une production défectueuse ; le critère est l'endroit où l'apprenant place le seuil de rejet. La dépendance excessive se divise le long de cette ligne. Les avertissements, les listes de contrôle et les rappels sur les hallucinations déplacent le critère, en changeant le moment où un étudiant rejette. L'enseignement disciplinaire, les comparaisons sur des exemples traités et la pratique sur erreurs introduites augmentent la sensibilité, parce que l'apprenant peut alors faire la différence. Un étudiant qui accepte une production défectueuse peut avoir un problème de critère ou un problème de sensibilité, et les deux appellent un enseignement différent.

Le prérequis est inconfortable. Un enseignement de la vérification n'est éducatif que là où la sensibilité peut dépasser zéro, ce qui exige assez de connaissances disciplinaires pour distinguer une production correcte d'une production incorrecte. Dans le même audit, des novices à qui l'on demandait d'expliquer du code généré par un [[llm]] réussissaient environ un tiers des tâches ; juger une rétroaction ou du code d'IA à l'aune de son propre raisonnement n'est donc une véritable vérification que là où ce raisonnement a de la substance. Si vos étudiants ne savent pas encore mener la pensée disciplinaire seuls, davantage d'avertissements n'achètent rien. Enseignez le contenu et rattachez-y la vérification.

Un avertissement de plus a sa place dans la conception : les interventions qui réduisent l'acceptation inappropriée doivent aussi être examinées pour le rejet involontaire d'une assistance correcte. Laissez à un étudiant la place d'accepter une bonne production pour une raison énoncée.

## Évaluez la vérification sans en faire une surveillance

Gousopoulos en tire directement la conséquence. Si l'IA peut produire l'artefact, l'artefact ne peut pas être l'évaluation ; l'évaluation se déplace donc vers la spécification, le raisonnement de validation et l'interprétation. Son construit de paternité du modèle comporte quatre facettes (spécification, modèle conceptuel, vérification et interprétation) réparties sur quatre niveaux ordonnés, de la délégation à la paternité assumée. Le niveau de paternité exige une spécification vérifiable avant la première invite, un rejet de la production fondé sur des raisons de domaine avec motif énoncé, et une interprétation qui va au-delà du rapport que l'artefact fait de lui-même.

Le barème s'appuie sur des matériaux qu'une tâche de construction génère déjà : le même instrument est donc à la fois une [[formative-assessment|évaluation formative]] et une mesure de recherche. Cela répond à l'inquiétude du travail inutile : vous notez un sous-produit d'un devoir que vous avez déjà posé. Deux limites vont avec. Aucune étude parmi les 14 cas prioritaires de Wei et Shang n'a mesuré ensemble le succès de la vérification et la décision de dépendance qui suit, et peu ont suivi la performance immédiate d'une rétention différée ou d'un [[transfer-of-learning|transfert]] ; le barème repose donc sur une carte analytique plutôt que sur une séquence causale validée.

Trois décisions empêchent que cela devienne une surveillance. Évaluez la vérification par rapport à une qualité établie par arbitrage plutôt que par rapport à l'effort, sinon vous créez une incitation à jouer la comédie de la vérification. Énoncez la provenance, comme l'exige Venetsanos : les étudiants doivent savoir quelles parties de la rétroaction qu'ils reçoivent ont été vérifiées par une machine, lesquelles ont été jugées par évaluation, et que le jugement humain a la primauté, car ils ne peuvent pas peser une rétroaction qu'ils ne peuvent pas situer. Et tenez les outils de détection hors du dispositif. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] soutiennent que [[ai-detection|la détection par IA]] ne devrait pas être utilisée du tout en éducation : ses estimations sont probabilistes et ne peuvent pas être vérifiées indépendamment puisque l'origine réelle des textes est inconnue, ses scores ne satisfont pas la norme de la balance des probabilités qu'exigent les enquêtes d'intégrité, et la dichotomie humain contre IA n'a pas de sens pour un travail créé avec l'IA plutôt que par elle. Leur conclusion est que la détection « ne protège pas l'intégrité académique ; elle la sape ». Les régimes de surveillance nourrissent la suspicion et érodent la [[trust|confiance]] des étudiants. Gardez séparés les deux sens du mot détection. Détecter un texte généré par IA n'a ici aucun rôle probatoire défendable ; apprendre aux étudiants à détecter les erreurs dans la production de l'IA, c'est tout l'exercice.

La séparation est architecturale, et elle vaut la peine d'être expliquée aux étudiants. [[vetting-dual-llm-safety-education|Li, Zhang et Botelho (2026)]] vérifient la production avec un second modèle plutôt que d'intégrer la vérification au générateur. Un étudiant qui comprend pourquoi comprend pourquoi « l'outil a dit que c'était juste » n'est pas un argument de vérification.

## Si vous concevez le cours plutôt que de l'enseigner

Trois résultats ci-dessus relèvent de la construction du cours, là où un enseignant travaillant seul ne les atteindra pas.

Le premier est un diagnostic. Lancez une tâche à erreurs introduites : vingt items, dont huit comportent une erreur de niveau disciplinaire. Elle vous dit si les étudiants peuvent discriminer, avant que vous passiez un semestre à enseigner un critère qu'ils ne peuvent pas utiliser. Une classe qui manque les erreurs introduites a besoin d'une révision du contenu, quoi que le plan de cours dise sur l'usage critique.

Le second est le placement de l'avertissement. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings et Park (2026)]] ont présenté un message d'avertissement générique juste avant deux tâches à 100 étudiants aux États-Unis, 40 natifs et 60 apprenants d'anglais langue étrangère. Les étudiants « inoculés » étaient significativement plus susceptibles de vérifier la tâche de résumé de source académique (M = 0.34 contre 0.18), tandis que les intentions de vérification déclarées ne bougeaient pas. L'effet dépendait aussi de la tâche : il apparaissait pour la tâche de résumé de source mais pas uniformément pour un questionnaire de mathématiques sur les exposants et la multiplication de grands nombres. Placez l'avertissement au point d'usage, par type de tâche, plutôt qu'une fois dans le plan de cours ou le module d'accueil.

Le troisième est le calendrier. Un plan de cours qui laisse la vérification non planifiée dit qu'elle est facultative, et la pression du temps est une raison documentée pour laquelle les étudiants sautent les vérifications. Une vérification qui vit dans la tâche, avec une trace notée qui y est attachée, a lieu. Une vérification qui vit dans un paragraphe de politique n'a pas lieu.

## Si vous êtes l'étudiant qui lit cette page

Quatre gestes couvrent l'essentiel de ce que la recherche vous demande.

Écrivez votre attente avant d'envoyer l'invite. Une phrase sur ce que la réponse devrait être, puis comparez la production à cette phrase.

Ouvrez la source. Lisez la liste des auteurs, le lieu de publication et l'année par rapport au document de référence, car le champ des auteurs est celui où les références générées échouent le plus souvent.

Pour tout ce qui est interprétatif, écrivez la raison dans vos propres mots. Une raison fabriquée est aussi visible qu'une citation fabriquée.

Méfiez-vous du sentiment que la prose se lit bien. Des novices à qui l'on demandait d'expliquer du code généré par un LLM réussissaient environ un tiers des tâches, et une étude de terrain sur des conversations de questionnaire entre étudiants et ChatGPT a constaté que suivre des indications correctes produisait tout de même une réponse fausse. Ce que vous pouvez vérifier est plus étroit que ce que vous pouvez lire.

## Ce que les enseignants comprennent mal ici

**« Je leur ai déjà dit de vérifier leurs sources. »** Un avertissement demande une disposition. Les étudiants soigneux l'ont, les pressés non, et il n'y a rien dans cette phrase sur quoi un étudiant puisse agir à 23 heures avec à l'écran une production qui se lit parfaitement bien.

**« Une ligne de barème sur la vérification des sources couvre le sujet. »** Cette ligne se situe à l'engagement et ne dit rien de la qualité du processus ni de sa réussite. Un étudiant qui a lancé une recherche et abandonné obtient le même score que celui qui a résolu la question : le barème récompense donc le geste.

**« S'ils lisent attentivement, ils repéreront les erreurs. »** La fluidité emporte le jugement. La littérature auditée montre des novices à environ un tiers de réussite pour expliquer du code généré, et l'étude de terrain a enregistré une réponse fausse arrivée par des indications correctes.

**« Les étudiants qui disent qu'ils vérifieront le font. »** Dans l'étude de Vu, Cummings et Park, les intentions déclarées ne bougeaient pas alors que le comportement effectif changeait (M = 0.34 contre 0.18). Évaluez le comportement, qui a bougé.

**« Les étudiants qui sautent la vérification sont ceux qui s'en fichent. »** [[trust-calibration-chatbots-design-problem-2026|Jaidka et Cai (2026)]] croisent la capacité de vérifier avec la motivation de vérifier, et ces profils appellent des remèdes différents. L'étudiant à forte capacité et faible motivation est enclin à une confiance excessive par négligence. L'étudiant à faible capacité et faible motivation est le plus exposé. Deux étudiants qui échouent à la même vérification peuvent avoir besoin d'enseignements opposés, et les [[prior-knowledge|connaissances préalables]] décident lequel vous avez devant vous.

**« Davantage d'avertissements corrigeront les étudiants qui ne savent pas faire la différence. »** Les avertissements déplacent le critère. Ils n'augmentent pas la sensibilité, et c'est la sensibilité qui sépare l'étudiant capable de repérer le défaut de celui qui ne l'est pas.

**« Un détecteur appuie la politique. »** Au vu des preuves ci-dessus, un score de détecteur échoue à la norme qu'exige un dossier d'intégrité, la séparation humain contre IA ne tient pas pour un travail fait avec l'IA, et le régime vous coûte la [[trust|confiance]] dont vous avez besoin pour que les étudiants déclarent quoi que ce soit.

## Les objections que vous entendrez

**« Ils peuvent très bien le faire juste pour la note. »** En partie vrai : évaluez donc des matériaux que l'IA ne peut pas produire à la place de l'étudiant. Une spécification écrite avant la première invite, une prédiction consignée avant l'exécution de l'artefact, une liste de sources vérifiée par rapport au document de référence, une raison disciplinaire énoncée pour un rejet : chacune exige de l'étudiant qu'il tienne une position que le générateur ne peut pas fournir. Une raison fabriquée est aussi visible qu'une citation fabriquée. Là où un étudiant n'a pas de connaissances disciplinaires pour vérifier, la vérification est du théâtre et aucun barème ne la sauve, ce qui plaide pour enseigner d'abord le contenu.

**« Il n'y a pas de temps dans le plan de cours. »** L'avertissement préalable est un message avant la tâche. La tâche à erreurs introduites réutilise un questionnaire que vous donnez déjà. Le barème s'appuie sur des matériaux que la tâche génère déjà : il coûte donc du temps de correction sur des preuves que vous n'auriez pas eues autrement. L'alternative coûte plus cher : des copies non vérifiées, des références fabriquées et les conversations sur l'intégrité qui s'ensuivent.

**« L'outil a généralement raison. »** Alors la vérification est peu coûteuse et les exceptions sont tout l'enjeu. Les champs d'auteur échouent plus souvent que toute autre partie d'une référence générée, 17 des 30 notices fabriquées associaient un titre réel à une paternité, un lieu de publication ou une année erronés, et 17 sont apparues dans les actes d'un seul symposium annuel. La justesse sur les parties que vous remarquez ne dit rien des parties que vous ne remarquez pas.

**« Mes étudiants n'en savent pas assez pour juger la production. »** C'est le seuil de sensibilité, et il est réel. Gousopoulos prédit que l'enseignement de la vérification échoue sous un plancher de connaissances disciplinaires, et note que certains domaines fournissent un critère externe — la physique, la chimie, l'écologie et l'épidémiologie notamment — tandis que l'histoire, la littérature et l'[[ethics|éthique]] ne le font guère. Enseignez la discipline et rattachez-y la vérification, ou attendez-vous à ce que la vérification devienne un rituel.

**« C'est de la surveillance. »** Cela en est, si vous notez l'effort ou si vous observez la manière dont les étudiants travaillent. Évaluez l'artefact par rapport au corrigé, indiquez quelle rétroaction a été vérifiée par une machine et laquelle a été jugée par une personne, et laissez les détecteurs en dehors de tout cela.

## À faire cette semaine

**1.** Rédigez les deux descriptions pour votre prochain devoir : une production correcte, et une production fausse mais plausible. C'est le corrigé auquel la vérification se rapporte.

**2.** Ajoutez la ligne de prédiction. Une phrase, écrite avant l'ouverture de l'outil, comparée ensuite sur des critères de domaine.

**3.** Remplacez « vérifiez vos sources » par « ouvrez le document de référence et confirmez les auteurs, le lieu de publication et l'année ».

**4.** Introduisez huit erreurs dans un questionnaire que vous donnez déjà, et regardez quels étudiants les trouvent.

**5.** Évaluez une trace de vérification par rapport au corrigé, et dites à l'étudiant quelle partie de la vérification a échoué : la norme, le processus ou la décision.

## Où aller ensuite

[[incorporating-ai-literacy]] traite de la construction de la compréhension que cette page met en œuvre, et [[ai-literacy-evidence]] traite de ce que vaut ce travail de littératie. [[reducing-over-reliance]] traite du versant conceptuel pour les étudiants qui s'appuient sur l'outil, [[study-with-ai]] est le compagnon destiné aux étudiants, et [[asynchronous-online-courses-ai]] couvre la version de ce problème sans séance de cours où inscrire une vérification. Sur la rétroaction que les étudiants vérifient, voyez [[ai-feedback-quality]] et [[hallucination-risk]].
