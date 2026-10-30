---
title: "Puis-je utiliser l'IA pour noter le travail des étudiants de façon équitable et fiable ?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Vous avez une grille à laquelle vous croyez, plus de copies que d'heures, et un outil qui rend une note et plusieurs paragraphes assurés dans le temps qu'il faut pour lire une seule copie. Vous l'essayez sur des travaux que vous avez déjà notés. La moitié des notes semble juste. Une est étrangement généreuse, une autre étrangement sévère, et vous ne savez pas encore si c'est l'outil ou la copie.

Réponse courte à donner à un collègue : la notation par IA gagne sa place comme assistante supervisée ou comme second lecteur, sur des tâches où vous l'avez vérifiée contre des travaux que vous avez déjà notés. La concordance ne se transfère pas d'un type d'évaluation à l'autre. Dans un examen de pharmacie portant sur seize étudiants, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] ont trouvé une concordance quasi parfaite sur les types d'items objectifs et une concordance non fiable sur les réponses ouvertes. Dans trois universités anglaises, [[opraise-automated-marking-ai-assessment-2026|le projet OpRaise]] a trouvé que les évaluateurs IA et humains s'accordaient sur la classe de diplôme entre 35% et 65% du temps selon l'établissement, avec des notes comprimées vers le milieu. Une justification fluide n'est pas la preuve que vos critères ont été appliqués. La question de savoir si le résultat est [[assessment-validity|valide pour votre décision]] est une question locale que vous devez trancher vous-même, et [[human-in-the-loop-ai|une personne reste responsable]] de tout ce qui devient une note consignée.

## La version courte

**1.** Nommez le rôle avant de lancer quoi que ce soit : assistante de rétroaction, second lecteur ou noteur principal. Ils exigent des quantités de preuves différentes.

**2.** Commencez par le rôle le moins lourd de conséquences qui résout votre vrai problème. Si une clé déterministe suffirait, un LLM ajoute du risque plutôt que de la valeur.

**3.** Calibrez sur des travaux que vous avez déjà notés, en incluant des copies fortes, faibles, limites et de structure inhabituelle. Des exemples commodes ne prouvent rien.

**4.** Gardez l'ensemble de calibration et l'ensemble de test séparés, sinon vous mesurez la qualité de votre réglage de l'outil sur des copies familières.

**5.** Rapportez la concordance exacte, les écarts de notes et la direction du biais, pas une corrélation. Vérifiez spécifiquement les frontières réussite/échec.

**6.** Dites aux étudiants quel rôle joue l'outil, qui décide de la note et comment demander une révision.

## Décider ce que l'IA est autorisée à faire

Trois arrangements sont appelés « notation par IA » et ils portent des obligations différentes.

Une **assistante de rétroaction** rédige des commentaires ou signale des omissions possibles que vous acceptez, réécrivez ou écartez. Le risque se limite à la qualité des commentaires, et vous lisez tout avant que cela n'atteigne un étudiant. Un **second lecteur** propose des notes par critère ou signale des désaccords pour structurer votre propre notation. Ses erreurs doivent être utiles plutôt que simplement fausses : un signalement qui vous renvoie à une copie que vous auriez notée sans attention vaut la peine. Un **noteur principal** produit des notes qui deviennent des résultats consignés. C'est l'arrangement que les preuves de cette base de connaissances ne soutiennent pas au-delà de cas étroits et validés localement.

Choisissez l'échelon le plus bas qui répond à votre contrainte réelle. Si votre charge de notation vient de la vérification d'un corrigé fixe, une notation déterministe ordinaire est plus transparente et plus auditable qu'un modèle de langue, et l'étude en pharmacie suggère que l'avantage du LLM sur les items objectifs était en partie un artefact du fait qu'on lui fournissait les bonnes réponses pendant la notation. Réservez le modèle aux travaux qui demandent de l'interprétation, puis vérifiez cette interprétation.

[[automated-assessment|L'évaluation automatisée]] couvre la machinerie plus large de la notation, de la modération et de la génération de rétroaction. Cette page traite la question de jugement qui se trouve en dessous.

## Ce que montrent réellement les preuves

La concordance dépend du type d'item. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] ont noté un examen de pharmacie à format mixte passé par 16 étudiants et rapporté une concordance avec la notation des enseignants entre 0.935 et 1.000 pour les items à choix multiple, à sélection multiple et à texte à trous. La concordance sur les réponses ouvertes subjectives était non fiable. Deux détails comptent plus que le titre. Les bonnes réponses étaient fournies pendant la notation, ce qui flatte les résultats sur items objectifs, et l'ajout d'une grille n'améliorait pas systématiquement la concordance, ce qui affaiblit l'hypothèse courante qu'une bonne grille transforme un LLM en correcteur cohérent. Seize étudiants ne peuvent pas soutenir une affirmation sur votre cours. La variation à l'intérieur d'un même examen est le résultat transférable : un système qui gère votre section de choix multiple ne dit rien de vos dissertations.

La concordance de classe est modérée et inégale. [[opraise-automated-marking-ai-assessment-2026|Le rapport OpRaise]] a examiné de vraies dissertations de psychologie de licence et trouvé une concordance entre évaluateurs IA et humains sur la classe de diplôme britannique de 63% à Cambridge, 53% à Nottingham et 35% à Manchester Metropolitan. Les notes étaient comprimées vers le milieu, les extrémités étant les moins bien notées : une dissertation notée 75 par un humain recevait plusieurs points de moins de chaque système d'IA, et une dissertation notée 50 plusieurs points de plus. Cette compression est la défaillance à surveiller, parce qu'elle pénalise exactement les étudiants du haut et du bas de votre distribution tout en laissant le milieu paraître correct. Il s'agit d'un rapport de projet et non d'un essai évalué par les pairs, et c'est l'avertissement le plus utile de la base de preuves.

Vos propres notes sont une référence imparfaite. Les enseignants ne sont pas d'accord entre eux, et votre note antérieure sur une dissertation semblable est un jugement, pas une vérité de référence. La concordance avec un seul correcteur établit une cohérence avec ce correcteur, ce qui n'est pas la même chose que l'équité. Là où les enjeux le justifient, faites appel à un second lecteur qualifié pour arbitrer les cas difficiles, et traitez un désaccord entre l'IA et un correcteur humain comme une invitation à relire le travail plutôt que comme un verdict sur la partie qui a raison.

Cohérence et jugement solide divergent. Un modèle peut rendre des notes quasi identiques à la relance tout en appliquant mal vos critères, parce que la répétabilité mesure la stabilité, pas la validité. Les extrémités d'OpRaise montrent le schéma : le système était stable et faux sur les dissertations qui comptaient le plus.

## Valider la procédure avant qu'elle ne touche une note

Faites cet exercice sur des copies déjà évaluées et protégées de façon appropriée, qui couvrent les réponses que vous recevez réellement : fortes, faibles, limites, incomplètes, de structure inhabituelle, et des réponses correctes exprimées d'une manière inhabituelle.

**1. Spécifiez les critères et exigez des preuves.** Donnez le devoir, la grille, les règles de notation et des exemples de la façon dont des réponses alternatives légitimes obtiennent des points. Demandez des justifications concises au niveau du critère, rattachées à des passages identifiables. Puis vérifiez vous-même ces justifications contre la copie.

**2. Séparez la calibration de l'évaluation.** Réglez sur un ensemble, testez sur un autre. Sans cette séparation, vous ne pouvez pas distinguer une procédure validée d'une procédure bien ajustée.

**3. Mesurez les décisions qui comptent.** Consignez la concordance exacte, la taille et la direction des écarts de notes, et le point de savoir si le modèle accorde systématiquement des notes plus hautes ou plus basses. Examinez séparément les frontières réussite/échec et les autres frontières conséquentes. Une corrélation élevée peut reposer sur un décalage systématique.

**4. Testez la répétabilité et le comportement par sous-groupe.** Relancez un sous-ensemble dans des conditions identiques. Cherchez les erreurs au niveau du critère et les cas où la langue, le formatage ou un style légitime sont pris pour une compréhension plus faible. De petits effectifs de sous-groupes soutiennent la prudence, pas une affirmation d'équité.

**5. Écrivez la règle d'escalade.** Décidez quels cas sont toujours notés par un humain et comment les désaccords sont résolus. Ne laissez pas la confiance déclarée par le modèle décider ; la confiance doit être validée contre les erreurs observées avant de porter du poids.

**6. Protégez le flux de travail.** Utilisez un environnement approuvé, minimisez les informations identifiantes et gardez la grille et les consignes séparées du contenu soumis. Cette séparation rend la manipulation plus difficile à cacher. Elle ne la rend pas impossible.

**7. Consignez ce qui invaliderait la vérification.** Gardez le modèle et sa version, l'invite, la grille et les paramètres. Une mise à jour du modèle ou une révision de la grille est une raison de refaire les vérifications représentatives plutôt que de supposer une continuité.

## Rendre le dispositif visible aux étudiants

Les étudiants ont le droit de savoir quel rôle joue l'outil, qui décide et comment contester un résultat. Une divulgation vague produit de la suspicion ; des précisions produisent une relation praticable. Quelque chose comme : « Un outil d'IA approuvé peut rédiger des commentaires de grille sur votre brouillon. Je révise chaque commentaire et je détermine votre note. Contactez-moi si un commentaire déforme votre travail. » Puis rendez cela vrai.

Deux directions de défaillance demandent une attention séparée. Les déductions excessives sont celles que les étudiants signalent, et elles dominent les recours. Le crédit non mérité est celle dont personne ne parle et qui corrompt discrètement le dossier. Échantillonnez les deux, et incluez vos heures de vérification quand vous jugez si le flux de travail vous a fait gagner quoi que ce soit.

## Ce qui va vous revenir dessus

**« Les humains sont biaisés eux aussi. »** Ils le sont, et c'est pourquoi la comparaison a besoin de critères explicites plutôt que de la note d'un seul correcteur comme étalon. L'écart entre établissements d'OpRaise est ici l'argument : si des correcteurs humains de trois universités produisaient des concordances de classe si différentes avec les mêmes systèmes, la référence humaine fait partie de ce qui doit être spécifié, elle n'est pas une règle fixe.

**« La grille rend la notation objective. »** Une grille rend les attentes explicites. Son application reste de l'interprétation, et l'étude en pharmacie a trouvé que fournir une grille n'améliorait pas systématiquement la concordance. Ce que la grille vous achète, c'est un standard vérifiable pour les justifications, pas une garantie sur les notes.

**« Il faudrait tout vérifier, ce qui annule l'intérêt. »** Pour certaines tâches, c'est la bonne conclusion, et la réponse est de rétrécir le travail. Rédiger des commentaires à partir de vos propres notes de notation laisse le jugement entre vos mains et supprime la frappe. Les signalements de second lecteur sur les copies limites concentrent votre attention là où cela change un résultat.

**« Mon collègue l'a essayé et cela a bien marché. »** Demandez-lui ce qu'il a mesuré. Des évaluations positives coexistent régulièrement avec des erreurs dans cette littérature, et un collègue qui a lu quelques sorties sensées a fait une démonstration, pas une validation. La question est ce que sa procédure ferait aux dissertations que vous remarqueriez en dernier.

## À faire cette semaine

**1.** Choisissez une évaluation et écrivez le rôle unique que l'IA y jouerait. Écrivez quelles preuves vous permettraient de le monter d'un échelon.

**2.** Lancez-la sur cinq copies que vous avez déjà notées, choisies pour inclure une copie forte, une faible, une limite et une de structure inhabituelle mais légitime.

**3.** Consignez chaque désaccord avec le travail et le critère, et nommez les erreurs que vous jugeriez inacceptables plutôt que simplement fausses.

**4.** Testez si les écarts de notes vont dans une direction cohérente, et vérifiez séparément votre frontière réussite/échec.

**5.** Rédigez le paragraphe de divulgation destiné aux étudiants et la voie de recours, puis comparez votre temps de vérification au temps de notation que vous avez évité.

## Où aller ensuite

[[assessment-validity|La validité de l'évaluation]] est le concept qui tranche ces questions : les preuves soutiennent-elles l'inférence que vous voulez faire. [[automated-assessment]] couvre la technologie et ses performances mesurées selon les formats, et [[ai-feedback-at-scale]] traite le problème voisin des commentaires générés et de la question de savoir si les étudiants les utilisent.

Pour ce qu'une note devrait représenter une fois que les étudiants utilisent l'IA, y compris la substitution de construit et les preuves de processus authentifiées, voir [[redesign-assessment-ai-era|repenser l'évaluation à l'ère de l'IA]]. Pour savoir si la détection peut remplacer une conception de tâche défendable, voir [[should-we-use-ai-detectors|faut-il utiliser des détecteurs d'IA]]. Pour la question d'évaluation qui se trouve sous tout cela, voir [[checking-whether-educational-ai-works|vérifier si une IA éducative fonctionne]].
