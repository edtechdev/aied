---
title: "Comment concevoir un développement professionnel sur l'IA qui change réellement les pratiques enseignantes ?"
created: "2026-09-22T19:14:36-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 65
type: faq
foundations: [educational-development, teacher-role, tpack, teacher-ai-competency]
methods: [mixed-methods-research]
research_method: [survey, case study]
audience: [faculty developers, administrators]
level: [higher ed, teacher education, k 12]
institutions: [change-management]
source_updated: "2026-10-28T11:39:29-04:00"
translation_of: faqs/faculty-development-ai
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

C'est février. Votre vice-recteur a annoncé une initiative sur l'IA avec une ligne budgétaire, et vous avez un semestre pour qu'elle se voie dans les salles de cours. Ou bien vous avez animé six ateliers l'automne dernier, les salles étaient pleines, et l'enseignement auquel vous assistez n'a pas changé. Ou bien un doyen pose la question simple au moment du budget : qu'est-ce que l'argent a acheté ?

Les trois situations viennent du même défaut de conception. Un atelier montre aux gens ce qu'un outil fait. La pratique change quand un enseignant consacre un temps structuré et accompagné à un problème de son propre cours, assez longtemps pour qu'une habitude nouvelle en déplace une ancienne, l'établissement disant oui à l'expérimentation au lieu de simplement la tolérer.

L'essentiel pour la réunion : standardisez un cycle de séances où chaque participant apporte un artefact réel de son cours et repart avec une version révisée, placez la vérification, la déclaration et la maîtrise des risques à l'intérieur du document de travail plutôt que dans un discours final sur l'éthique, étirez le programme au-delà d'une seule journée et associez-y du mentorat, constituez des cohortes par discipline, et rendez compte des artefacts produits lors d'un suivi plutôt que du sentiment de confiance du dernier après-midi.

## La version courte

**1.** Ancrez chaque séance dans un artefact du cours du participant lui-même, et terminez la séance avec cet artefact révisé.

**2.** Placez la vérification, la déclaration et la maîtrise des risques dans le modèle de travail, là où elles servent, pour qu'un participant inquiet ait un endroit où déposer son inquiétude.

**3.** Consacrez les heures à l'évaluation et aux grilles d'évaluation, le domaine le plus faible au départ et celui où le gain mesuré est le plus grand.

**4.** Constituez des cohortes [[discipline-specific-aied|propres à chaque discipline]], puis différenciez à l'intérieur selon l'expérience.

**5.** Sécurisez les conditions : une autorisation explicite d'expérimenter, du temps protégé, des supports dans les langues dans lesquelles vos enseignants travaillent.

**6.** Évaluez les artefacts révisés à distance, plus un indicateur relationnel, et traitez les scores de satisfaction comme du bruit.

## Menez chaque séance sur le cours du participant

La comparaison la plus propre ici est celle de [[faculty-development-centers-genai-training-optimization-2026|Bi et al. (2026)]], qui ont interrogé 568 enseignants de cinq universités et mené une quasi-expérience avec 160 d'entre eux. Les deux bras ont reçu quatre ateliers de 90 minutes sur des semaines consécutives, avec un temps de contact, une plateforme et un accompagnement de facilitateur identiques. Le contenu différait. Un bras a reçu une formation facultaire conventionnelle à l'IA générative, l'autre un cycle structuré de formulation d'invite, de revue de la sortie, de révision du matériel de cours et de réflexion écrite selon un modèle à sept composantes couvrant les objectifs, les contraintes de tâche, les critères d'évaluation, la vérification, la déclaration et la maîtrise des risques.

Le bras structuré a obtenu de meilleurs scores sur les sept dimensions de préparation. Son avantage le plus net portait sur la conception d'invites, à environ deux écarts-types, et c'était le seul bras dont le gain en conception d'invites survivait au test différé ; le gain plus modeste du bras conventionnel était retombé sous la ligne de départ au suivi.

Deux autres résultats expliquent pourquoi les démonstrations ne voyagent pas. Dans [[pishtari-teacher-ai-training-learning-design-2026|une étude intra-sujets auprès de 13 enseignants du supérieur]], l'accès à un agent conversationnel a fait passer la part d'activités atteignant au moins deux tâches cognitives de Bloom d'ordre supérieur de 41.7% à 91.7% (p = .01) et réduit l'effort cognitif perçu d'une médiane de 6.33 à 3.33 (p = .004). La formation au [[prompt-engineering|prompting]] pédagogique ajoutée par-dessus n'a pas amélioré davantage la qualité de conception, et elle a légèrement augmenté l'effort. Par ailleurs, dans [[teachers-collaborative-evaluation-ai-content-2026|un atelier avec 60 enseignants de sciences du secondaire]], l'élément productif a été la revue collaborative de questions d'évaluation générées par ChatGPT, qui est ce qui a fait apparaître les problèmes de précision conceptuelle et le risque de renforcer les [[misconceptions|conceptions erronées]].

Ce que ces études ont en commun : l'apprentissage venait de la critique et de la révision du matériel. Les gens améliorent la chose qui est devant eux, et ils l'améliorent plus vite quand un collègue la lit aussi.

## Cessez de traiter la compétence comme la pièce manquante

Le diagnostic tentant est celui d'un déficit de capacité, que l'on comble par un meilleur enseignement. [[ai-teaching-innovation-ai-tpack-2026|Bai et Hsieh (2026)]] ont interrogé 898 enseignants universitaires sur des échelles [[tpack|AI-TPACK]] et constaté que les enseignants qui comprenaient le fonctionnement des outils génératifs, ou savaient les utiliser avec compétence, n'étaient pas plus susceptibles de déclarer inventer et mettre en œuvre de nouvelles pratiques pédagogiques que ceux qui ne le pouvaient pas. Le construit intégré AI-TPACK n'avait aucun chemin direct vers le comportement innovant. Son influence passait entièrement par la [[ai-literacy|littératie en IA]], le [[self-efficacy|sentiment d'efficacité personnelle]] pédagogique et l'identité professionnelle.

Cela change la finalité d'une séance. Une démonstration d'outil ne touche aucune de ces trois choses. Une séance où un enseignant réécrit son propre devoir, défend le changement et entend un collègue convenir qu'il est meilleur touche les trois à la fois, ce qui explique pourquoi le cycle d'artefacts surpasse la démonstration même quand le contenu est plus mince.

L'implication pour la conception est inconfortable pour quiconque a un diaporama : vous ne pouvez pas faire la leçon à un enseignant pour qu'il se voie comme le genre d'enseignant qui travaille ainsi. Vous pouvez le placer dans une situation où il agit ainsi une fois, avec du soutien, et laisser les preuves s'accumuler.

## Mettez les parties difficiles dans le modèle qu'ils utilisent

[[designing-ai-professional-development-itpack-2026|Le cadre i-TPACK de Dogan (2026)]] vient d'une revue PRISMA du développement professionnel sur l'IA, complétée par une recherche qui a fait émerger 17 études supplémentaires. Il aligne cinq domaines de connaissance (connaissance technologique intelligente, connaissance technologique du contenu, connaissance technologique pédagogique, i-TPACK intégré et éthique de l'IA) sur quatre voies fondées sur des preuves : [[active-learning|apprentissage actif]], modèles et exemples, coaching et soutien d'expert, et [[feedback|rétroaction]] et réflexion, gouvernés par cinq principes allant de la synergie collective plutôt que les silos à la flexibilité dans la structure.

La critique la plus acérée que ce cadre adresse au domaine est que l'éthique est traitée superficiellement ou totalement absente dans beaucoup de programmes existants, et que le correctif tient à l'emplacement. La vérification, la déclaration et la maîtrise des risques appartiennent au document que les participants utilisent toute la semaine, non aux vingt dernières minutes de la dernière séance. Un modèle avec une colonne de maîtrise des risques se remplit ; un segment final sur l'usage responsable, on l'approuve de la tête.

La limite du cadre est qu'il est conceptuel, sans données de résultat à l'échelle d'un programme. Utilisez-le comme liste de contrôle de conception, non comme preuve que la conception fonctionne. Les preuves de résultat sont dans les études ci-dessus et ci-dessous.

## Consacrez les heures à l'évaluation

Si votre programme a de la place pour un seul sujet approfondi, choisissez l'évaluation. Dans [[genai-pd-ai-pck-learning-gain-2026|le programme de huit heures de Talebzadeh (2026)]], quatre séances de deux heures avec 163 enseignants et futurs enseignants, le score total d'AI-PCK est passé de 151.65 à 220.14 (*d* = 2.36, *p* < .001). L'effet le plus fort portait sur les grilles d'évaluation (*d* = 2.19), qui étaient aussi le domaine le plus faible au prétest. Le gain était plus étroit en méthode pédagogique qu'en évaluation.

Les grilles d'évaluation sont aussi l'endroit où l'anxiété de la salle peut être mise au travail. Un participant mal à l'aise à l'idée que des étudiants s'appuient sur un modèle peut écrire une ligne de grille qui rend le raisonnement visible, ce qui convertit une inquiétude en décision de conception datée.

Budgétez au-delà de la journée unique. Dans ce même programme, les futurs enseignants ont progressé significativement plus que les enseignants expérimentés (*p* = .033), surtout en conception de tâches scénarisées et en conception de grilles. Les enseignants expérimentés ont dit que huit heures étaient trop courtes pour déplacer des habitudes profondément ancrées, et ont demandé un accompagnement de long terme fondé sur le mentorat.

## Constituez des cohortes, puis différenciez à l'intérieur

Animez un atelier universel et vous passerez l'essentiel à servir le participant médian, qui n'existe pas. [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury et Liu (2026)]] ont trouvé, chez 127 répondants, que la connaissance pédagogique du contenu telle que perçue par soi était élevée (M = 4.70) et la connaissance du contenu proche du plafond (M = 5.15), tandis que la connaissance technologique pédagogique (M = 2.62), la connaissance technologique du contenu (M = 2.75) et le TPACK global (M = 2.55) étaient nettement plus faibles. La connaissance du contenu ne montrait aucune corrélation significative avec un domaine intégrant la technologie (r = .11-.15), si bien que la maîtrise de la matière ne se transfère pas.

Ces trois domaines faibles étaient corrélés entre eux à r = .81-.91, ce qui signifie plausiblement une seule capacité d'enseigner avec ces outils plutôt que trois compétences séparées. Enseignez-la comme un socle commun et vous économisez deux séances.

Différenciez ensuite selon l'expérience. [[ai-teaching-innovation-ai-tpack-2026|Bai et Hsieh]] ont constaté que l'identité professionnelle prédisait le comportement innovant presque deux fois plus fortement chez les utilisateurs peu fréquents de l'IA que chez les utilisateurs quotidiens, un résultat limite mais un repère utile : le travail sur l'identité paie le plus auprès des personnes qui touchent à peine aux outils, tandis que les utilisateurs fréquents tirent davantage de projets interdisciplinaires que d'un accompagnement fondamental. [[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]] plaide pour des cohortes par discipline comme cadre de cette conversation précisément, au motif qu'un physicien et un historien ne résolvent pas le même problème.

## Ouvrez par la question que posent les sceptiques

Le récit autoethnographique de [[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]] soutient que la résistance n'est pas un déficit de compétences. Les enseignants qui demandent à quoi sert d'enseigner dans un monde d'IA générative ne demandent pas comment utiliser un outil en sécurité ; la question est ontologique. Elle lit l'IA générative comme un concept seuil (transformateur, dérangeant, irréversible, intégrateur, borné) et conclut que l'anxiété, la résistance et la confusion sont des parties nécessaires de sa traversée plutôt que des défauts à corriger. Ses recommandations inversent l'atelier standard : ouvrir par des questions d'identité plutôt que par des démonstrations, mener des cohortes par discipline, autoriser des temporalités différentes, et traiter une non-adoption fondée sur des valeurs disciplinaires comme légitime. Elle avertit aussi que communiquer des règles peut glisser vers une « illusion d'application » qui remplace le soutien par des messages de conformité.

La culpabilité est mesurable, et elle n'est pas répartie également. [[vassallo-ai-guilt-complex-faculty-2026|Vassallo (2026)]] a interrogé 109 universitaires et identifié un « complexe de culpabilité lié à l'IA » : 35% craignaient que l'usage de l'IA ne nuise à leur crédibilité et 26% déclaraient avoir l'impression de « tricher », la culpabilité anticipée liée à la crédibilité dépassant le remords après usage, si bien que la détresse est socio-professionnelle plutôt que privée. Quatre profils se dégagent : les adoptants à l'aise (27%), les non-utilisateurs coupables (29%), les utilisateurs prudents (28%) et les éviteurs en détresse morale (16%). Un programme traite donc quatre problèmes différents, et les 29% qui éprouvent de la culpabilité sans utiliser les outils ont besoin d'autre chose que d'une démonstration.

L'ampleur de la tâche est visible dans [[watson-rainie-ai-challenge-faculty-survey-2026|l'enquête AAC&U/Elon auprès de 1.057 enseignants (Watson et Rainie, 2026)]] : 68% ont déclaré que leur établissement n'avait pas préparé les enseignants à utiliser l'IA générative pour l'enseignement et le mentorat, avec une proportion similaire pour la recherche. 26% des répondants n'utilisent pas du tout les outils, dont 40% des enseignants d'arts et de lettres, et 82% citent la résistance des collègues comme obstacle à l'adoption dans leur département.

## Corrigez les conditions que le programme d'études ne peut pas corriger

C'est le résultat à apporter en réunion de direction. Dans l'enquête auprès de 568 enseignants qui sous-tend la comparaison ci-dessus, les enseignants kazakhstanais déclaraient une préparation initiale supérieure à celle de leurs homologues chinois sur les sept dimensions, les écarts les plus larges portant sur le transfert disciplinaire, la conception d'invites et la compréhension de base. En régression hiérarchique, le coefficient du Kazakhstan, clairement significatif seul, est devenu non significatif une fois entrés dans le modèle l'usage antérieur de l'IA générative, une formation récente à l'IA, le soutien institutionnel, l'autorisation perçue, l'accès à des ressources multilingues, la clarté des politiques et la sensibilité au risque. Soit une réduction d'environ quatre cinquièmes. Le soutien institutionnel et l'autorisation perçue portaient le poids positif le plus fort, et la sensibilité au risque était le seul prédicteur allant contre la préparation. Plus de deux fois plus d'enseignants kazakhstanais que chinois déclaraient une formation liée à l'IA dans les six mois précédents.

Donc les leviers dont dispose un responsable de programme sont locaux et proches : la pratique guidée, une autorisation explicite d'expérimenter, des supports dans les langues dans lesquelles les enseignants travaillent réellement, un soutien visible de leur unité. Le cadrage politique national ne porte pas la préparation à lui seul. Là où la sensibilité au risque mord, la réponse est de lui donner un lieu où s'exercer plutôt que de minimiser la prudence, et la conception de grilles d'évaluation et les routines de vérification sont ce lieu.

Deux frictions pratiques appartiennent à la même conversation. L'intention de continuer à utiliser l'outil était la dimension de satisfaction la mieux notée chez [[faculty-development-centers-genai-training-optimization-2026|Bi et al. (2026)]], tandis que l'ergonomie de l'outil était la plus faible, si bien qu'une partie de ce qui se lit comme de la réticence est de la friction de plateforme. Et [[ai-emotional-intelligence-teacher-development-2026|Aponte et al. (2026)]] situent la limite dure : l'IA ne peut pas compenser une surcharge chronique, des cultures de redevabilité punitives, un leadership faible ou l'absence de temps protégé. Ils soutiennent qu'elle ne contribue au développement socio-émotionnel des enseignants que comme infrastructure relationnelle (temps protégé pour le mentorat, le dialogue entre pairs, les communautés de pratique) et proposent la *densification relationnelle* comme norme, en comptant la confiance, la continuité du soutien et la co-régulation plutôt que les heures de contact. Deux affirmations se traduisent en conception de programme : le temps libéré se réabsorbe en demande supplémentaire à moins que l'établissement n'exige formellement qu'il soit réinvesti, et les agents conversationnels peuvent se substituer discrètement aux négociations humaines difficiles qui produisent la croissance. Leur cadre est une heuristique, non une affirmation causale testée.

Si ces conditions sont les vôtres, un meilleur atelier ne les corrigera pas, et le dire est plus utile que promettre le contraire.

## Rendez compte des artefacts à distance

L'échafaudage institutionnel auquel il vaut la peine de s'aligner est celui de [[crompton-faculty-technology-integration-standards-2026|Crompton, Burke et Nickel (2026)]], dont la recherche fondée sur la conception, sur deux macrocycles et 114 participants (enseignants de 28 établissements états-uniens et de 11 pays, plus des directeurs de centres pédagogiques et des coordonnateurs d'accréditation), a produit six standards couvrant tout le rôle universitaire : enseignant, coordonnateur, dirigeant, chercheur, apprenant et contributeur. Les cadres et standards existants visent les enseignants du [[k-12|primaire et secondaire]] ou ne traitent que l'enseignement, si bien qu'un centre qui aligne son offre sur ceux-ci peut être aligné sur l'évaluation professionnelle et l'accréditation, ce qui est aussi l'argument qui survit à une revue budgétaire.

Soyez ensuite prudent dans l'évaluation, parce que l'essentiel de cette littérature mesure des impressions [[self-report-measures|auto-déclarées]]. Bi et al. ont mesuré une préparation auto-déclarée plutôt qu'un enseignement effectif, et leurs groupes se sont formés par inscription volontaire plutôt que par randomisation ; les résultats sont donc des associations. [[ai-teaching-innovation-ai-tpack-2026|Bai et Hsieh]] est transversal, auto-sélectionné, issu de huit universités d'un seul pays, et mesure chaque construit auprès des mêmes répondants à un seul moment. [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo et ses collègues]] ne peuvent pas établir le sens de la causalité, ce qui compte parce que leur affirmation la plus forte, que la connaissance technologique agit comme une porte d'entrée, est précisément ce qu'un plan transversal ne peut pas trancher. [[genai-pd-ai-pck-learning-gain-2026|Talebzadeh]] rapporte des effets très grands sans randomisation, sans suivi ni ventilation par discipline, si bien que *d* = 2.36 se lit comme un effet à court terme. [[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw]] est autoethnographique, et [[ai-emotional-intelligence-teacher-development-2026|Aponte et al.]] indiquent que leur cadre est conceptuel.

Une évaluation défendable mesure donc le matériel de cours qu'un participant a révisé, les grilles écrites, les tâches conçues. Elle teste à distance, parce que l'écart chez Bi et al. n'est apparu qu'au suivi, où le groupe conventionnel avait régressé et le groupe structuré non. Elle traite la satisfaction et la confiance comme des signaux faibles, puisque [[pishtari-teacher-ai-training-learning-design-2026|Pishtari et ses collègues (2026)]] notent que des gains de qualité seuls ne prouvent pas l'intériorisation : une qualité de conception qui monte peut tout aussi bien refléter une délégation du travail routinier ou l'acceptation d'une structure générée par l'IA. Et elle ajoute au moins un indicateur relationnel, à la suite d'Aponte et al., parce qu'améliorer des artefacts en isolant les participants n'est pas ce que le programme prétendait faire.

## Ce que les responsables de programme comprennent mal

Une meilleure démonstration fait un meilleur atelier. Le temps de contact était maintenu constant à quatre séances de 90 minutes dans la comparaison de Bi et al., et le bras qui révisait des artefacts a battu le bras qui apprenait à connaître les outils sur chaque dimension de préparation, un seul des deux gains étant encore visible au suivi.

La confiance est le résultat qui compte. C'est la chose la plus facile à déplacer et la moins prédictive. Dans l'étude auprès de 13 enseignants, l'effort perçu a baissé tandis que la couche de prompting n'ajoutait aucune qualité de conception mesurée, et des notes de fin de journée auraient enregistré les deux comme un succès.

L'éthique est un segment final. La revue de Dogan a trouvé l'éthique traitée superficiellement ou absente dans beaucoup d'offres, et la différence entre une colonne de modèle et une dernière diapositive tient à ce que quelqu'un l'utilise ou non en semaine trois.

Un seul programme peut servir toute la faculté. L'enquête auprès de 127 enseignants décrit une connaissance du contenu proche du plafond à côté d'un TPACK global à 2.55, et les quatre profils de Vassallo incluent 29% de personnes qui éprouvent de la culpabilité sans utiliser les outils. Une séance unique traite quatre publics comme un seul.

Les sceptiques sont l'obstacle à gérer. Le récit de Laidlaw place la résistance au niveau de l'identité, et Bai et Hsieh ont trouvé que l'identité prédit l'innovation presque deux fois plus fortement chez les utilisateurs peu fréquents. Les personnes que vous voulez le plus dans la salle sont celles qu'une démonstration confirme dans leur soupçon.

Un mandat institutionnel portera le programme. Le coefficient du Kazakhstan s'est effondré d'environ quatre cinquièmes dès que le soutien institutionnel et l'autorisation perçue sont entrés dans le modèle, et ces deux variables portaient le poids positif le plus fort. Un mandat n'est pas le même signal qu'une autorisation.

## Ce qui va vous revenir dessus

**« Nous n'avons pas les heures. »** Alors dépensez-les autrement plutôt que d'en ajouter. Six heures organisées en cycle d'artefacts ont battu six heures de démonstrations à temps de contact identique, et un format plus court consacré aux grilles d'évaluation vise le domaine le plus faible des données de prétest de Talebzadeh.

**« Nos enseignants ne viendront pas, ou les sceptiques feront dérailler le tout. »** Recruter les sceptiques dans une démonstration confirme le soupçon qui les y a amenés. Ouvrez par des questions d'identité, menez des cohortes par discipline, autorisez des temporalités différentes, et dites à voix haute qu'une non-adoption fondée sur des principes est une position légitime. C'est la recommandation de Laidlaw, et elle retire l'argument de conformité de la table. Attendez-vous à ce que le travail sur l'identité compte le plus auprès des utilisateurs peu fréquents, selon Bai et Hsieh.

**« Nous ne pouvons pas obliger les gens à agir ensuite. »** En grande partie non, et vous pouvez changer ce que l'institution signale. L'autorisation perçue et le soutien institutionnel portaient le poids positif le plus fort après l'effondrement de l'effet du contexte national, donc les gestes utiles sont les moins chers : énoncer que l'expérimentation est sanctionnée, protéger le temps formellement pour qu'il ne se réabsorbe pas, fournir des supports dans les langues de travail des enseignants, et retirer la friction de plateforme, qui était la dimension la moins bien notée dans cette même étude.

**« Notre enquête de sortie est solide. »** La satisfaction est la mesure la plus susceptible de monter pendant que rien d'autre ne bouge. Demandez plutôt les artefacts de la dernière cohorte et recontactez ces participants un trimestre plus tard ; l'écart de Bi et al. n'existait qu'au suivi.

## À faire cette semaine

**1.** Réécrivez l'invitation pour que la participation exige d'apporter un artefact de cours : un objectif, une grille d'évaluation ou une tâche d'évaluation.

**2.** Réécrivez l'ordre du jour pour que la première séance parte de cet artefact, et ajoutez la vérification, la déclaration et la maîtrise des risques comme colonnes du modèle que les participants gardent toute la semaine.

**3.** Déplacez une séance vers la conception de grilles et d'évaluation, et faites repartir les participants avec la grille écrite.

**4.** Obtenez une phrase écrite du doyen ou du vice-recteur attestant que l'expérimentation est sanctionnée, puis protégez formellement les heures pour qu'elles ne se réabsorbent pas.

**5.** Configurez l'évaluation pour recueillir les artefacts révisés et recontacter les participants un trimestre plus tard, avec une question sur les personnes avec qui ils travaillent désormais.

## Où aller ensuite

[[faculty-ai-competencies]] couvre la cible de compétences elle-même, et [[teacher-ai-competency|Teacher AI Competency]] et [[educational-development|Faculty Development]] portent le matériau de cadre qui la sous-tend. Pour structurer l'IA dans un cours plutôt que dans un atelier, voir [[designing-ai-into-learning]] ; pour le tableau institutionnel plus large, [[top-10-findings-ai-education-instructors]] et [[institutional-ai-policy]].
