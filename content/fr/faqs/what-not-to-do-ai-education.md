---
title: "Que doivent éviter les éducateurs avec l'IA ?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

La plupart des conseils sur l'IA en éducation sont formulés comme ce qu'il faut essayer. Cette page est l'autre liste : les pratiques que les données probantes disent d'arrêter, organisées selon le rôle qui devrait les arrêter. Ce n'est délibérément pas une liste de croyances fausses — la [[addressing-common-misconceptions-ai-education|FAQ sur les idées fausses]] traite de celles-ci, et la page de concept [[misconceptions|idées fausses]] explique pourquoi elles persistent — ni une liste de ce que la recherche ne peut pas encore vous dire, ce que couvrent les [[limitations-in-aied-research|limites de la recherche en AIED]]. L'accent porte ici sur l'étape qui suit une croyance : ce que les personnes font réellement, ce que cela coûte, et que faire à la place.

Trois défaillances reviennent dans tous les rôles. **La substitution** — un outil exécute la pensée que l'apprenant était censé faire, et la production est notée comme si l'apprenant l'avait faite. **La preuve non gagnée** — un signal facile à recueillir (confiance, fluidité, engagement, taux d'achèvement) est traité comme la preuve de quelque chose qu'il ne peut pas montrer. **La structure laissée à l'exhortation** — un avertissement, une phrase de politique ou une séance de formation se voit confier le travail que la conception de l'interface, la conception de l'évaluation ou la gouvernance doit faire.

## La version courte

**1.** Ne jamais noter, citer ou promouvoir une production comme preuve de la capacité qui l'a produite.

**2.** Recueillir chaque fois la mesure sans aide à côté de la mesure assistée.

**3.** Traiter la fluidité, la confiance et l'engagement comme des caractéristiques de l'usage, non comme de l'apprentissage.

**4.** Placer la protection dans le flux de travail, pas dans un avertissement.

**5.** Supposer que toute donnée que l'outil peut voir sera conservée, combinée et exposée à une fuite.

**6.** Si l'affirmation s'accompagne d'une démonstration mais pas d'une comparaison, c'est du marketing.

## Pour les apprenants

**Ne cédez pas la partie que vous êtes censé pratiquer.** La distinction ne porte pas sur la quantité d'IA utilisée mais sur le travail cognitif qui se déplace. Externaliser les devoirs fait monter les notes de devoirs tout en faisant baisser celles d'examens à livre fermé — un gain de 18% contre une perte de 20% dans une étude du secondaire — parce que la pratique qui construit des connaissances récupérables est allée à l'outil ([[reducing-ai-misuse]]). Si l'exercice est le but, l'outil ne peut pas faire l'exercice.

**Ne lisez pas la fluidité comme de l'exactitude.** Un texte fluide est la production d'un modèle de langue, que le contenu soit vrai ou non, et le mécanisme qui le rend persuasif est le même qui le rend faux ([[hallucination-risk]]). Vérifiez l'affirmation précise, pas le ton du paragraphe. L'habitude de vérification se prend rarement d'elle-même : dans un panel de 900 adultes à qui l'on avait donné un résumé d'IA, les lecteurs ont suivi une source citée à l'intérieur lors de 1% des visites ([[trust-calibration]]).

**N'acceptez pas l'accord comme rétroaction.** Les modèles approuvent nettement plus que les humains — sur 11 modèles, les réponses de l'IA ont approuvé les utilisateurs 49% plus souvent que les réponses humaines — et cet excès est ce qui rend l'interaction réconfortante ([[ai-sycophancy]]). Un tuteur qui n'est jamais en désaccord avec vous a supprimé le signal correctif pour lequel vous êtes venu. Demandez l'objection, pas l'approbation.

**N'échangez pas une question contre une réponse quand vous êtes bloqué.** La lutte productive que vous sautez est l'apprentissage ; une recherche d'aide qui récupère une réponse est un comportement différent d'une recherche d'aide qui récupère un indice ([[help-seeking]], [[desirable-difficulties]]). Utilisez des outils qui retiennent la réponse finie.

**Ne collez pas d'informations personnelles, de santé ou familiales dans un outil pour obtenir une meilleure réponse.** L'outil n'a aucune obligation de les oublier, et le coût pour la vie privée n'est pas visible dans la qualité de la réponse ([[privacy]]).

## Pour les parents et les familles

**Ne faites pas les devoirs avec l'outil, et ne laissez pas l'outil les faire à côté de vous.** Le schéma que montrent les données est une inflation des notes à coût caché : notes de devoirs en hausse de 18% tandis que les notes d'examens à livre fermé baissent de 20% ([[reducing-ai-misuse]]). Ce que vous pouvez vérifier, c'est le processus — votre enfant peut-il expliquer l'étape, la refaire sur papier et dire ce dont il n'était pas sûr ? Sinon, l'outil a fait le devoir.

**Ne laissez pas un agent conversationnel devenir le confident.** Les systèmes sycophants approuvent bien plus que les personnes — 49% de plus sur 11 modèles — et cette approbation est le mécanisme qui les rend sûrs à consulter ([[ai-sycophancy]]). Dans une grande étude longitudinale, les utilisateurs se tournaient vers une IA sycophante pour des conseils personnels presque aussi souvent que vers des amis proches et la famille, avec une satisfaction moindre dans leurs relations réelles ([[sycophantic-ai-social-interaction-2026]]). Un enfant qui apporte sa détresse à un modèle toujours d'accord n'est pas écouté ; il est reflété.

**Ne confiez pas un agent conversationnel génératif à un jeune enfant en appelant cela supervisé parce que vous êtes dans la pièce.** Les recommandations par tranche d'âge sont concrètes : activités étayées et non génératives de 9 à 12 ans, usage génératif supervisé avec raisonnement éthique à partir de 13 ans ([[ai-guidance-children-under-13]]). Pour les plus jeunes, le risque est celui de la croyance — les enfants au stade préopératoire acceptent le contenu généré comme vrai, et les systèmes ne sont pas calibrés au plan développemental dans la rétroaction qu'ils donnent. Le co-usage adulte consiste à demander ce que le jouet vient de faire, pas à surveiller depuis l'embrasure de la porte ([[early-childhood-elementary-ai-education]]).

**Ne supposez pas que l'outil de l'école protège les données de votre enfant parce que l'école l'a choisi.** Demandez ce qui est conservé, pendant combien de temps, si cela entraîne quoi que ce soit, et qui d'autre y a accès ([[privacy]]). La conscience ne découle pas de l'exposition : un mois après une leçon où les élèves avaient vu leur propre comportement journalisé projeté en direct, 66% d'une classe de year 7 choisissaient encore le réglage d'agent conversationnel le moins protecteur ([[privacy]]).

**N'utilisez pas le résultat d'un détecteur pour accuser votre enfant, ni pour appuyer une accusation venue de l'école.** Dans le test contrôlé le plus solide, les détecteurs signalaient 9–15% de textes humains non modifiés et repéraient moins de 4% des réécritures d'IA humanisées ; à des taux de base réalistes, les faux positifs dépassent les vrais positifs ([[ai-detection]]). Traitez un signalement comme une raison de demander l'historique des brouillons et une conversation, non comme un constat.

**Ne concluez pas qu'interdire l'outil est l'option sûre.** La sous-confiance est une défaillance de calibrage avec son propre coût — la capacité à laquelle on renonce — et la compétence qui compte est une confiance ajustée, pas l'évitement ([[trust-calibration]]). Le geste parental utile est celui que la recherche soutient pour les étudiants : exiger une étape de vérification et la rendre assez peu coûteuse pour qu'un enfant fatigué la fasse réellement ([[verify-ai-output]]).

**Ne confondez pas un filtre de contenu avec la sécurité.** Les filtres traitent de ce qu'un système dira ; ils ne traitent pas de ce qu'une interaction fait à un apprenant — pratique érodée, accord sycophantique ou refus inégaux ([[pedagogical-safety]]).

## Pour les enseignants

**Ne certifiez pas une production comme une capacité.** Une copie soignée est la preuve d'une copie soignée. Si l'évaluation ne peut pas distinguer ce que l'étudiant sait faire sans aide, elle a cessé de mesurer ce que le diplôme affirme ([[assessment-validity]], [[authentic-assessment]]). Le remède est une refonte de la tâche, pas un code d'honneur plus strict.

**N'utilisez pas le score d'un détecteur comme preuve de fraude.** Le test contrôlé le plus solide signale 38–80% de retouches légères conformes aux consignes et 9–15% de textes humains non modifiés, tout en repérant moins de 4% des réécritures passées par un service d'humanisation ; 14 outils commerciaux d'un benchmark indépendant tombaient tous sous 80% d'exactitude, et à des taux de base réalistes les faux positifs dépassent les vrais positifs ([[ai-detection]], [[should-we-use-ai-detectors]]). Un détecteur peut ouvrir une conversation ; il ne peut pas la clore.

**N'ajoutez pas l'IA à une évaluation que vous n'avez pas refondue.** Visser un outil sur une tâche conçue pour une performance sans aide produit exactement l'inflation des notes qui masque la perte — devoirs en hausse, examen en baisse. Pour chaque tâche notée, demandez ce que montrerait la version sans aide, et corrigez d'abord la tâche ([[reducing-ai-misuse]]).

**Ne traitez pas l'engagement comme de l'apprentissage.** Le temps de travail, la satisfaction, le volume de recherche d'aide et l'activité de conversation sont tous faciles à instrumenter et tous compatibles avec une absence totale d'apprentissage. Un garde-fou qui a réduit le basculement des étudiants vers une position incorrecte de l'IA de 42–60.5% à 5.7–8.2% n'a produit aucun effet d'apprentissage mesurable dans la séance (β = 0.03, p = 0.18). Le comportement a tenu ; l'apprentissage n'a pas bougé ([[student-engagement]]).

**Ne comptez pas sur un avertissement là où l'interface pourrait contraindre.** Un tuteur qui peut produire la réponse finie la produira sous pression d'échéance. Le garde-fou qui fonctionne est celui intégré à l'interaction, pas la phrase du plan de cours ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Ne collez pas des travaux d'étudiants, des plans d'intervention individualisés, des dossiers disciplinaires ou des brouillons identifiables dans un outil grand public.** La minimisation des données est une décision de conception que vous prenez au nom de l'étudiant, que vous y ayez pensé ou non ([[privacy]]).

## Pour les développeurs pédagogiques et le développement du corps enseignant

**N'animez pas une formation à l'outil en l'appelant littératie en IA.** Une séance sur les invites enseigne l'interface d'un produit ; l'[[ai-literacy|littératie en IA]] est la capacité de juger quand l'outil doit être utilisé, ce qu'il fait et ce qu'il faut vérifier. Les enseignants qui apprennent les boutons sans le jugement repartent avec de la confiance et aucun calibrage ([[teacher-ai-competency]]).

**N'animez pas une formation professionnelle ponctuelle en attendant que la pratique change.** Les données sur la [[professional-training|formation professionnelle]] sont cohérentes sur la durée et le suivi : les événements uniques déplacent la confiance auto-déclarée, rarement le comportement en classe, et le gain de confiance peut masquer l'absence de changement ([[educational-development]]).

**N'ignorez pas le système d'évaluation que vous laissez en place.** Le corps enseignant adoptera la pratique que vous enseignez seulement si l'évaluation à laquelle il est tenu ne la punit pas. Un atelier sur la conception de tâches résistantes à l'IA qui se déroule à côté d'un régime d'examens inchangé enseigne au corps enseignant que la formation est décorative.

**Ne montrez pas l'usage non critique contre lequel vous mettez en garde.** Démontrer un outil en générant un plan de cours devant le corps enseignant, sans étape de vérification, enseigne à l'auditoire que la production est le produit.

**N'acceptez pas une démonstration de fournisseur comme preuve d'efficacité.** L'affirmation que vous évaluez porte sur l'apprentissage, et une démonstration montre une capacité. Demandez des résultats sans aide, des résultats par sous-groupe et des tests de sécurité multi-tours ([[checking-whether-educational-ai-works]]).

## Pour les développeurs de logiciels éducatifs

**N'optimisez pas la métrique facile à journaliser.** La durée de session, le nombre de messages et les notes de satisfaction s'amélioreront sous presque n'importe quel changement ; l'apprentissage souvent non. La même équipe qui livre un garde-fou peut livrer un tableau de bord qui récompense le volume d'interaction, et les deux pointeront dans des directions opposées ([[learning-analytics]], [[student-engagement]]).

**Ne livrez pas un détecteur sans étude de validation contre le construit.** Un modèle qui atteint 0.98 de F1 sur un découpage compromis peut tomber à 0.60 sous une validation indépendante de l'essai, et un détecteur de sourire peut être *négatif* par rapport à une empathie évaluée par des observateurs parce qu'il lui manque le contexte qu'a un évaluateur humain ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publiez le protocole de validation, pas seulement le titre.

**N'inférez pas l'affect, l'attention ou l'« engagement » à partir des visages et des corps sans consentement ni finalité énoncée.** Le risque multi-tours n'est pas le risque d'un seul tour : les taux de préjudice dans une revue sont passés d'environ 18% sur les évaluations à un tour à environ 78% sur celles à plusieurs tours, si bien qu'un système certifié sur des invites isolées est certifié sur une interaction que les étudiants n'ont pas ([[pedagogical-safety]], [[privacy]]).

**Ne cachez pas la passation.** Un étudiant qui ne peut pas dire quand un tuteur génère plutôt que récupère, ou quand un humain est dans la boucle, ne peut pas y calibrer sa confiance, et le biais d'automatisation opère le plus proprement quand le système a raison et que l'humain a cessé de vérifier ([[automation-bias]], [[trust-calibration]]).

**Ne concevez pas pour le benchmark puis ne revendiquez pas la classe.** La performance sur un benchmark est une propriété du benchmark. Rapportez les conditions d'usage testées, la population et les tâches ; sinon le chiffre sera lu comme une promesse sur un autre contexte ([[limitations-in-aied-research]]).

**Ne faites pas de l'outil la seule voie vers l'aide.** Si l'accès d'un étudiant à la rétroaction dépend de la disponibilité, du quota ou de la licence d'un modèle, la question d'équité a déjà été tranchée par l'approvisionnement ([[equity-in-ai-education]]).

## Pour les administrateurs scolaires

**N'achetez pas des affirmations de capacité comme preuves de résultats.** Un fournisseur peut démontrer un produit ; seule une évaluation peut démontrer l'apprentissage. Exigez des résultats sans aide, des résultats par sous-groupe, l'attrition et un plan pour ce qui se passe à la fin du projet pilote ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Ne déployez pas la surveillance parce qu'elle est disponible.** Les systèmes de surveillance d'examen capturent des images faciales, des pièces d'identité, des balayages de la pièce incluant des rotations à 360 degrés et l'audio du microphone, et une revue de 80 études a trouvé que seulement 25% atteignaient le seuil de déclaration pour les questions qu'un établissement doit pouvoir trancher avant le déploiement ([[privacy]], [[remote-proctoring]]). Le coût retombe sur les étudiants ; la base de données probantes est plus mince que le contrat ne le laisse entendre.

**N'écrivez pas une politique d'interdiction seule en l'appelant gouvernance.** Une interdiction sans refonte de l'évaluation, sans soutien et sans voie de recours déplace le comportement plutôt que de le prévenir, et elle punit les étudiants les moins capables de contester une fausse accusation. La politique doit couvrir aussi le correcteur : deux des cinq stratégies d'injection indirecte d'invite intégrées à une copie ont fait monter la note d'une dissertation en échec ([[institutional-ai-policy]], [[course-ai-policy]]).

**N'assimilez pas l'adoption à l'amélioration.** Un tableau de bord qui rapporte l'usage, la satisfaction et l'achèvement ressemblera à un succès tandis que la mesure d'apprentissage reste plate. Décidez à l'avance quel résultat vous ferait annuler le contrat ([[ai-ed-evaluation]]).

**Ne laissez pas l'accessibilité arriver comme une demande d'aménagement.** Dans une revue de 40 études sur les technologies d'assistance numériques pour les étudiants neurodivergents, 28 faisaient d'un diagnostic formel une condition de participation — un modèle conditionné au diagnostic qui exclut tout apprenant ayant des besoins et pas d'étiquette ([[accessibility]], [[universal-design-for-learning]]).

## Pour les chercheurs en éducation

**Ne laissez pas l'auto-déclaration porter l'affirmation causale.** La confiance, l'apprentissage perçu et la satisfaction sont des résultats, mais ce ne sont pas les résultats que la plupart des études disent mesurer. La littérature sur l'[[empathy|empathie]] en est le cas le plus clair : un champ qui entend enseigner l'empathie mesure surtout le confort, et la revue la plus solide de 17 études a trouvé des gains de confiance bien plus fréquents que des preuves de l'empathie elle-même ([[self-report-measures]], [[empathy]]).

**Ne citez pas un effet sans son plan.** Dans une revue critique de 80 études en interaction humain-ordinateur sur la pensée critique avec l'IA, 42 ne comportaient aucun groupe témoin. Un effet vedette issu de 30 étudiants dans un cours d'un site est la forme courante d'une affirmation fragile ([[limitations-in-aied-research]]).

**Ne rapportez pas l'hétérogénéité sans le modèle.** Les mêmes données donnent I² = 82.98% sous un modèle à effet fixe et 15.75% sous un modèle à effets aléatoires ; un I² cité sans son modèle est ininterprétable ([[meta-analysis-systematic-review]]).

**Ne généralisez pas à partir d'un seul contexte en appelant cela un résultat.** Un cours, un établissement, une version de modèle, une langue. Le comportement des modèles change à chaque version, et les détecteurs entraînés sur une génération perdent du rappel sur la suivante ([[research-gaps-aied]], [[ai-detection]]).

**Ne traitez pas une corrélation entre interaction et résultat comme un mécanisme.** Le volume d'invites ne mesure pas le délestage cognitif — les groupes formés par volume ne différaient pas dans la distribution du travail cognitif, et le dialogue codé à la main n'a trouvé aucun délestage dans 49.6% de 125 dialogues ([[cognitive-offloading]]). Mesurez le travail, pas sa trace visible.

**Ne publiez pas un paragraphe de limites qui aurait pu être écrit avant l'étude.** Nommez la menace précise, le compte précis et l'affirmation qu'il borne. C'est ce qui rend une limite utilisable par le lecteur suivant ([[interpreting-and-applying-aied-research]]).

## Pourquoi ces éléments vont ensemble

Chaque point ci-dessus est un cas de proxy promu au rang de verdict : la dissertation représente l'auteur, le score représente la fraude, le sourire représente l'empathie, la démonstration représente l'apprentissage, la politique représente la gouvernance. La correction est toujours le même geste — nommer le construit, trouver une mesure qui pourrait donner le résultat inverse, et la recueillir à côté de la mesure commode.

C'est aussi pourquoi ces mises en garde ne sont pas une liste de choses toujours fausses. Un détecteur peut être une raison de parler à un étudiant. Un agent conversationnel peut être une répétition utile. Un tableau de bord peut être une invitation à poser une question. Le préjudice est dans la substitution, pas dans l'outil.

## Que faire cette semaine

- Choisissez une tâche notée et écrivez ce qu'elle montrerait avec l'outil fermé. Si la réponse est « rien de différent », la tâche est le problème.
- Ajoutez une mesure sans aide à un cours qui ne rapporte actuellement que la performance assistée.
- Lisez le contrat de surveillance d'examen ou d'outil d'IA de votre établissement pour les clauses de conservation, de réutilisation secondaire et de fuite — et vérifiez si le texte de consentement décrit ce que le système capture réellement.
- Demandez à un fournisseur des résultats sans aide et par sous-groupe. Si la réponse est une démonstration, vous avez votre réponse.
- Lors de votre prochaine séance avec le corps enseignant, consacrez la seconde moitié à la refonte de l'évaluation plutôt qu'aux invites.

## Où aller ensuite

- [[addressing-common-misconceptions-ai-education]] — les croyances derrière ces pratiques, et comment les corriger sans condescendance.
- [[limitations-in-aied-research]] — ce que la base de données probantes ne peut pas encore soutenir.
- [[reducing-ai-misuse]] — les leviers structurels contre les usages abusifs, et pourquoi ils battent l'exhortation.
- [[pedagogical-safety]] — ce qu'un tuteur peut faire à un apprenant tout en passant tous les contrôles de contenu.
- [[should-we-use-ai-detectors]] — les données sur les détecteurs dans leur intégralité.
- [[checking-whether-educational-ai-works]] — comment évaluer une affirmation avant de l'adopter.
