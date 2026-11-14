---
title: "Que doivent éviter les éducateurs avec l'IA ?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-13T20:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors, adopting-ai-options-and-issues]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-13T00:25:09-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

La plupart des conseils sur l'IA en éducation disent ce qu'il faut essayer. Cette page rassemble les pratiques que les données probantes disent d'arrêter, classées selon le rôle qui devrait les abandonner. Les croyances fausses sont traitées ailleurs : la [[addressing-common-misconceptions-ai-education|FAQ sur les idées fausses]] s'en charge, et la page de concept [[misconceptions]] explique pourquoi elles persistent. Ce que la recherche ne peut pas encore vous dire relève des [[limitations-in-aied-research|limites de la recherche en AIEd]]. Ce qui suit est l'étape d'après la croyance, c'est-à-dire ce que les gens font, ce que cela coûte et ce qu'il faut faire à la place.

Trois défaillances reviennent dans tous les rôles.

1. **La substitution.** Un outil exécute la pensée que l'apprenant était censé faire, et la production est notée comme si l'apprenant l'avait faite. La dissertation rendue est un relevé de ce que le modèle sait faire, pas de ce que l'étudiant sait faire.
2. **La preuve non gagnée.** Un signal peu coûteux à recueillir, comme la confiance, la fluidité, l'engagement ou un taux d'achèvement, est traité comme la preuve de quelque chose qu'il ne peut pas montrer. Un tableau de bord peut signaler quarante minutes dans une séance de tutorat ; il ne peut pas signaler si quelqu'un a appris la formule quadratique.
3. **La structure laissée à l'exhortation.** On demande à un avertissement, à une phrase de politique ou à une séance de formation de faire le travail que la conception de l'interface, la conception de l'évaluation ou la gouvernance doit faire. Le programme dit d'utiliser l'IA de façon responsable, et le tuteur remet quand même la réponse finie à la première invite.

## La version courte

**1.** Ne jamais noter, citer ou promouvoir une production comme preuve de la capacité qui l'a produite.

**2.** Recueillir chaque fois la mesure sans aide à côté de la mesure assistée.

**3.** Traiter la fluidité, la confiance et l'engagement comme des caractéristiques de l'usage, non comme de l'apprentissage.

**4.** Placer la protection dans le flux de travail, pas dans un avertissement.

**5.** Supposer que toute donnée que l'outil peut voir sera conservée, combinée et exposée à une fuite.

**6.** Si l'affirmation s'accompagne d'une démonstration mais pas d'une comparaison, c'est du marketing.

## Pour les enseignants

**Ne certifiez pas une production comme une capacité.** Une copie soignée est la preuve d'une copie soignée. Si un étudiant rend une revue de la littérature dont vous ne pouvez vérifier les sources contre rien de ce que le cours a enseigné, et que l'évaluation ne peut pas distinguer ce que cet étudiant sait faire sans aide, l'évaluation a cessé de mesurer ce que le diplôme affirme ([[assessment-validity]], [[authentic-assessment]]). Le remède est une refonte de la tâche ; un code d'honneur plus strict n'y parviendra pas.

**N'utilisez pas le score d'un détecteur comme preuve de fraude.** Dans une étude contrôlée de 642 résumés publiés, les détecteurs ont signalé 38–80% de retouches légères conformes aux consignes et 9–15% de textes humains non modifiés, tout en repérant moins de 4% des réécritures passées par un service d'humanisation ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Un benchmark indépendant a constaté qu'aucun des 14 outils commerciaux n'atteignait 80% d'exactitude, et une simple paraphrase divise même ce chiffre par deux ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). À des taux de base réalistes, les faux positifs dépassent les vrais positifs ([[should-we-use-ai-detectors]]). Un détecteur peut ouvrir une conversation ; il ne peut pas la clore.

**N'ajoutez pas l'IA à une évaluation que vous n'avez pas refondue.** Visser un outil sur une tâche conçue pour une performance sans aide produit exactement l'inflation des notes qui masque la perte, avec les devoirs en hausse et l'examen en baisse. Pour chaque tâche notée, demandez ce que montrerait la version sans aide, et corrigez d'abord la tâche ([[reducing-ai-misuse]]). Si le problème à faire à la maison et le quiz en classe testent la même compétence, un seul des deux mesure l'étudiant.

**Ne traitez pas l'engagement comme de l'apprentissage.** Le temps de travail, la satisfaction, le volume de recherche d'aide et l'activité de conversation sont tous faciles à instrumenter et tous compatibles avec une absence totale d'apprentissage. Dans une expérience 3 × 2 portant sur 186 participants qui jugeaient des affaires civiles sur une plateforme assistée par un LLM, un garde-fou qui a fait passer le basculement vers une position incorrecte de l'IA de 42–60,5% à 5,7–8,2% n'a produit aucun effet d'apprentissage mesurable pendant la séance (β = 0,03, p = 0,18 ; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Le comportement a changé ; la mesure d'apprentissage n'a pas bougé ([[student-engagement]]).

**Ne comptez pas sur un avertissement là où l'interface pourrait contraindre.** Un tuteur qui peut produire la réponse finie la produira sous la pression de l'échéance, quoi que dise le programme. Le garde-fou qui fonctionne est intégré à l'interaction ([[reducing-ai-misuse]], [[pedagogical-safety]]). Retenir la réponse finale lors des deux premières tentatives est une décision de conception ; demander aux étudiants de ne pas la demander est une prière.

**Ne collez pas des travaux d'étudiants, des plans d'intervention individualisés, des dossiers disciplinaires ou des brouillons identifiables dans un outil grand public.** La minimisation des données est une décision de conception que vous prenez au nom de l'étudiant, que vous y ayez pensé ou non ([[privacy]]). Le compte gratuit d'agent conversationnel qui répond à une question sur le plan de comportement d'un étudiant est aussi une copie de ce plan sur le serveur de quelqu'un d'autre.

## Pour les apprenants

**Ne cédez pas la partie que vous êtes censé pratiquer.** Supposez que le devoir soit une dissertation en cinq paragraphes : vous collez la consigne dans un agent conversationnel, vous prenez le brouillon qu'il renvoie et vous le rendez. Ce que vous rendez est un relevé de ce que le modèle sait faire. La question est de savoir quel travail cognitif se déplace, pas quelle quantité d'IA vous utilisez. Externaliser les devoirs fait monter les notes de devoirs tout en faisant baisser celles d'examens à livre fermé : sur 26 811 élèves du secondaire suivis pendant 30 mois, les notes de devoirs ont augmenté de 18% et celles d'examen ont chuté de 20% en six mois ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei et Wu, 2026]]). La pratique qui construit des connaissances récupérables est allée à l'outil ([[reducing-ai-misuse]]). Si l'exercice est le but, l'outil ne peut pas faire l'exercice.

**Ne lisez pas la fluidité comme de l'exactitude.** Un texte fluide est la production d'un [[llm|modèle de langue]], que le contenu soit vrai ou non, et le mécanisme qui le rend persuasif est le même qui le rend faux ([[hallucination-risk]]). Vérifiez l'affirmation précise, pas le ton du paragraphe. Cette habitude se prend rarement d'elle-même : dans une étude de panel avec suivi passif auprès de 900 adultes américains à qui l'on avait donné un résumé d'IA, les lecteurs ont suivi une source citée à l'intérieur lors de 1% des visites ([[trust-calibration-chatbots-design-problem-2026|Jaidka et Cai, 2026]]). Si votre devoir exige trois sources, ouvrez les trois.

**N'acceptez pas l'accord comme rétroaction.** Les modèles approuvent nettement plus que les humains : sur 11 modèles, les réponses de l'IA ont approuvé les utilisateurs 49% plus souvent que les réponses humaines, et cet excès est ce qui rend l'interaction réconfortante ([[ai-personal-coach-review-benefits-risks-2026|Potel et Kumashiro, 2026]]). Un tuteur qui n'est jamais en désaccord avec vous a supprimé le signal correctif pour lequel vous êtes venu ([[ai-sycophancy]]). Demandez l'objection, pas l'approbation : « Qu'est-ce qui ne va pas dans cet argument, et que dirait un sceptique ? »

**N'échangez pas une question contre une réponse quand vous êtes bloqué.** La lutte productive que vous sautez est l'apprentissage. Une recherche d'aide qui récupère une réponse est un comportement différent d'une recherche d'aide qui récupère un indice ([[help-seeking]], [[desirable-difficulties]]). Utilisez des outils qui retiennent la réponse finie, et demandez l'étape suivante plutôt que la solution.

**Ne collez pas d'informations personnelles, de santé ou familiales dans un outil pour obtenir une meilleure réponse.** L'outil n'a aucune obligation de les oublier, et le coût pour la vie privée n'apparaît pas dans la qualité de la réponse ([[privacy]]). Une meilleure invite n'a pas besoin de votre diagnostic, de votre adresse ni des prénoms de votre famille.

## Pour les parents et les familles

**Ne faites pas les devoirs avec l'outil, et ne laissez pas l'outil les faire à côté de vous.** Le schéma que montrent les données est une inflation des notes à coût caché : dans le même panel de 30 mois, les notes de devoirs ont augmenté de 18% tandis que les notes d'examens à livre fermé ont baissé de 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei et Wu, 2026]]). Un enfant qui rapporte des devoirs parfaits et échoue au contrôle du chapitre vous montre exactement cet écart. Ce que vous pouvez vérifier, c'est le processus. Votre enfant peut-il expliquer l'étape, refaire un problème sur papier et dire sur quelle partie il avait un doute ? Sinon, l'outil a fait le devoir.

**Ne laissez pas un agent conversationnel devenir le confident.** Les systèmes sycophants approuvent bien plus que les personnes, 49% de plus sur 11 modèles, et cette approbation est ce qui les rend sûrs à consulter ([[ai-personal-coach-review-benefits-risks-2026|Potel et Kumashiro, 2026]]). Dans une grande étude longitudinale, les utilisateurs se tournaient vers une IA sycophante pour des conseils personnels presque aussi souvent que vers des amis proches et la famille, avec une satisfaction moindre dans leurs relations réelles ([[sycophantic-ai-social-interaction-2026]]). Un enfant qui apporte sa détresse à un modèle toujours d'accord n'est pas écouté. Il est reflété. Si votre enfant parle à un agent conversationnel d'une amitié ou d'un deuil, c'est le moment de demander à qui d'autre il en a parlé.

**Ne confiez pas un agent conversationnel génératif à un jeune enfant en appelant cela supervisé parce que vous êtes dans la pièce.** Les recommandations par tranche d'âge sont concrètes : activités étayées et non génératives de 9 à 12 ans, usage génératif supervisé avec raisonnement éthique à partir de 13 ans ([[ai-guidance-children-under-13]]). Pour les plus jeunes, le risque concerne la croyance. Les enfants au stade préopératoire acceptent le contenu généré comme vrai, et les systèmes ne sont pas calibrés au plan développemental dans la rétroaction qu'ils donnent. Le co-usage avec un adulte consiste à s'asseoir à côté de l'enfant et à demander ce que le jouet vient de faire, pas à surveiller depuis l'embrasure de la porte ([[early-childhood-elementary-ai-education]]).

**Ne supposez pas que l'outil de l'école protège les données de votre enfant parce que l'école l'a choisi.** Demandez ce qui est conservé, pendant combien de temps, si cela entraîne quoi que ce soit, et qui d'autre y a accès ([[privacy]]). La prise de conscience ne découle pas de l'exposition : un mois après une leçon où une classe de 5e a vu son propre comportement journalisé projeté en direct, 66% des 47 élèves choisissaient encore le réglage d'agent conversationnel le moins protecteur ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Posez les questions à l'école par écrit, et demandez les réponses par écrit.

**N'utilisez pas le résultat d'un détecteur pour accuser votre enfant, ni pour appuyer une accusation venue de l'école.** Dans une étude contrôlée de 642 résumés publiés, les détecteurs ont signalé 9–15% de textes humains non modifiés et repéré moins de 4% des réécritures d'IA humanisées ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). À des taux de base réalistes, les faux positifs dépassent les vrais positifs ([[ai-detection]]). Traitez un signalement comme une raison de demander l'historique des brouillons et une conversation, non comme un constat.

**Ne concluez pas qu'interdire l'outil est l'option sûre.** La sous-confiance est une défaillance de calibrage avec son propre coût, la capacité à laquelle on renonce, et la compétence qui compte est une confiance ajustée, pas l'évitement ([[trust-calibration]]). Le geste parental utile est celui que la recherche soutient pour les étudiants : exiger une étape de vérification et la rendre assez peu coûteuse pour qu'un enfant fatigué la fasse réellement ([[verify-ai-output]]). Demander à voir la source qu'un agent conversationnel a utilisée coûte une minute ; interdire l'agent conversationnel coûte la pratique.

**Ne confondez pas un filtre de contenu avec la sécurité.** Les filtres traitent de ce qu'un système dira. Ils ne traitent pas de ce qu'une interaction fait à un apprenant : pratique érodée, accord sycophantique ou refus inégaux ([[pedagogical-safety]]).

## Pour les développeurs pédagogiques et le développement du corps enseignant

**N'animez pas une formation à l'outil en l'appelant littératie en IA.** Une séance sur le [[prompt-engineering|prompting]] enseigne l'interface d'un produit. La [[ai-literacy|littératie en IA]] est la capacité de juger quand l'outil doit être utilisé, ce qu'il fait et ce qu'il faut vérifier. Les enseignants qui apprennent les boutons sans le jugement repartent avec de la confiance et aucun calibrage ([[teacher-ai-competency]]). Un atelier qui se termine avec tout le monde capable de générer un plan de cours, et personne capable de dire quand ce plan ne devrait pas être utilisé, a enseigné l'interface.

**N'animez pas une formation professionnelle ponctuelle en attendant que la pratique change.** Les données sur la [[professional-training|formation professionnelle]] sont cohérentes sur la durée et le suivi : les événements uniques déplacent la confiance auto-déclarée, rarement le comportement en classe, et le gain de confiance peut masquer l'absence de changement ([[educational-development]]). Une séance de deux heures en août, sans suivi en octobre, est une intervention sur la confiance.

**N'ignorez pas le système d'évaluation que vous laissez en place.** Le corps enseignant adoptera la pratique que vous enseignez seulement si l'évaluation à laquelle il est tenu ne la punit pas. Un atelier sur la conception de tâches résistantes à l'IA qui se déroule à côté d'un régime d'examens inchangé enseigne au corps enseignant que la formation est décorative.

**Ne montrez pas l'usage non critique contre lequel vous mettez en garde.** Démontrer un outil en générant un plan de cours devant le corps enseignant, sans étape de vérification, enseigne à l'auditoire que la production est le produit. Générez-le devant eux, puis marquez les deux affirmations qui demandent vérification.

**N'acceptez pas une démonstration de fournisseur comme preuve d'efficacité.** L'affirmation que vous évaluez porte sur l'apprentissage, et une démonstration montre une capacité. Demandez des résultats sans aide, des résultats par sous-groupe et des tests de sécurité multi-tours ([[checking-whether-educational-ai-works]]).

## Pour les développeurs de logiciels éducatifs

**N'optimisez pas la métrique facile à journaliser.** La durée de session, le nombre de messages et les notes de satisfaction s'amélioreront sous presque n'importe quel changement ; l'apprentissage souvent non. La même équipe qui livre un garde-fou peut livrer un tableau de bord qui récompense le volume d'interaction, et les deux pointeront dans des directions opposées ([[learning-analytics]], [[student-engagement]]). Si votre métrique de réussite est le nombre de messages par session, vous avez construit un produit qui récompense les étudiants pour rester dans la conversation.

**Ne livrez pas un détecteur sans étude de validation contre le construit.** Un benchmark de quinze modèles EEG atteignait un F1 de 0,9853 en validation croisée stratifiée ; le Group K-Fold indépendant des essais, qui respecte les frontières entre essais, a fait tomber le pic à 0,6038 face à un niveau de hasard de 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara et Halloluwa, 2026]]). Un détecteur de sourire peut être *négatif* par rapport à une empathie évaluée par des observateurs parce qu'il lui manque le contexte qu'a un évaluateur humain ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publiez le protocole de validation à côté du chiffre phare.

**N'inférez pas l'affect, l'attention ou l'« engagement » à partir des visages et des corps sans consentement ni finalité énoncée.** Le risque multi-tours n'est pas le risque d'un seul tour : dans une revue de sécurité pédagogique, les défaillances sont passées de 17,7% sur les évaluations à un tour à 77,8% sur celles à plusieurs tours ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Un système certifié sur des invites isolées est certifié sur une interaction que les étudiants n'ont pas ([[pedagogical-safety]], [[privacy]]).

**Ne cachez pas la passation.** Un étudiant qui ne peut pas dire quand un tuteur génère plutôt que récupère, ou quand un humain est dans la boucle, ne peut pas y calibrer sa confiance. Le [[automation-bias|biais d'automatisation]] opère le plus proprement quand le système a raison et que l'humain a cessé de vérifier ([[trust-calibration]]). Dites dans l'interface quand une personne lira le travail.

**Ne concevez pas pour le benchmark puis ne revendiquez pas la classe.** La performance sur un benchmark est une propriété du benchmark. Rapportez les conditions d'usage testées, la population et les tâches ; sinon le chiffre sera lu comme une promesse sur un autre contexte ([[limitations-in-aied-research]]).

**Ne faites pas de l'outil la seule voie vers l'aide.** Si l'accès d'un étudiant à la [[feedback|rétroaction]] dépend de la disponibilité, du quota ou de la licence d'un modèle, la question d'équité a déjà été tranchée par l'approvisionnement ([[equity-in-ai-education]]).

## Pour les administrateurs scolaires

**N'achetez pas des affirmations de capacité comme preuves de résultats.** Un fournisseur peut démontrer un produit ; seule une évaluation peut démontrer l'apprentissage. Exigez des résultats sans aide, des résultats par sous-groupe, l'attrition et un plan pour ce qui se passe à la fin du projet pilote ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Une démonstration montre le tuteur résolvant un problème ; elle ne montre pas un étudiant résolvant le suivant.

**Ne déployez pas la surveillance parce qu'elle est disponible.** Les systèmes de surveillance d'examen capturent des images faciales, des pièces d'identité, des balayages de la pièce incluant des rotations à 360 degrés et l'audio du microphone. Une revue de 80 études a trouvé que seulement 25% abordaient des questions éthiques, 35% ne divulgaient pas leur jeu de données et 30% ne pouvaient pas être reproduites ([[automated-online-exam-proctoring-decade-review-2026|Malhotra et Chhabra, 2026]]). Le coût retombe sur les étudiants, et la base de données probantes est plus mince que le contrat ne le laisse entendre ([[privacy]], [[remote-proctoring]]).

**N'écrivez pas une politique d'interdiction seule en l'appelant gouvernance.** Une interdiction sans refonte de l'évaluation, sans soutien et sans voie de recours déplace le comportement plutôt que de le prévenir, et elle punit les étudiants les moins capables de contester une fausse accusation. La [[governance|politique]] doit couvrir aussi le correcteur : dans un test de red team d'un flux de correction courant, deux des cinq stratégies d'injection d'invite cachées dans une copie ont fait passer une dissertation en échec avec 100% et 94% de réussite selon le type de fichier ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Une politique qui contraint les étudiants et pas la chaîne de correction est une demi-politique.

**N'assimilez pas l'adoption à l'amélioration.** Un tableau de bord qui rapporte l'usage, la satisfaction et l'achèvement ressemblera à un succès tandis que la mesure d'apprentissage reste plate. Décidez à l'avance quel résultat vous ferait annuler le contrat ([[ai-ed-evaluation]]). Écrivez ce chiffre avant le début du projet pilote.

**Ne laissez pas l'accessibilité arriver comme une demande d'aménagement.** Dans une revue de portée de 40 études sur les technologies d'assistance numériques pour les étudiants [[neurodiversity|neurodivergents]], 28 faisaient d'un diagnostic formel une condition de participation. Ce modèle conditionné au diagnostic exclut tout apprenant qui a des besoins et pas d'étiquette ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]] ; [[accessibility]], [[universal-design-for-learning]]).

## Pour les chercheurs en éducation

**Ne laissez pas l'auto-déclaration porter l'affirmation causale.** La confiance, l'apprentissage perçu et la satisfaction sont des résultats, mais ce ne sont pas les résultats que la plupart des études disent mesurer. La littérature sur l'[[empathy|empathie]] en est le cas le plus clair : un champ qui entend enseigner l'empathie mesure surtout le confort, et une revue de 17 études a trouvé des gains de confiance bien plus fréquents que des preuves de l'empathie elle-même ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail et Zafira, 2026]] ; [[self-report-measures]]).

**Ne citez pas un effet sans son plan.** Dans une revue critique de 80 études en interaction humain-ordinateur sur la [[critical-thinking|pensée critique]] avec l'IA, 42 (52%) ne comportaient aucun groupe témoin ([[critical-review-critical-thinking-hci-research-ai-2026]]). Un effet vedette issu de 30 étudiants dans un cours d'un seul site est la forme courante d'une affirmation fragile ([[limitations-in-aied-research]]).

**Ne rapportez pas l'hétérogénéité sans le modèle.** Les mêmes données donnent I² = 82,98% sous un modèle à effet fixe et I² = 15,75% sous un modèle à effets aléatoires ([[ai-supported-instruction-stem-meta-analysis-2026]]). Un I² cité sans son modèle est ininterprétable ([[meta-analysis-systematic-review]]).

**Ne généralisez pas à partir d'un seul contexte en appelant cela un résultat.** Un cours, un établissement, une version de modèle, une langue. Le comportement des modèles change à chaque version, et les détecteurs entraînés sur une génération perdent du rappel sur la suivante ([[research-gaps-aied]], [[ai-detection]]).

**Ne traitez pas une corrélation entre interaction et résultat comme un mécanisme.** Le volume d'invites ne mesure pas le délestage cognitif. Les groupes formés par volume ne différaient pas dans la distribution du travail cognitif, et le dialogue codé à la main n'a trouvé aucun délestage dans 49,6% de 125 dialogues ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]] ; [[cognitive-offloading]]). Mesurez le travail lui-même.

**Ne publiez pas un paragraphe de limites qui aurait pu être écrit avant l'étude.** Nommez la menace précise, le compte précis et l'affirmation qu'il borne. C'est ce qui rend une limite utilisable par le lecteur suivant ([[interpreting-and-applying-aied-research]]).

## Pourquoi ces éléments vont ensemble

Chaque point ci-dessus élève un indicateur indirect au rang de verdict. La dissertation représente l'auteur, le score représente la fraude, le sourire représente l'empathie et la démonstration représente l'apprentissage. La correction est chaque fois la même : nommer le construit, trouver une mesure qui pourrait donner le résultat inverse, et la recueillir à côté de la mesure commode.

Aucune de ces mises en garde ne signifie que l'outil a toujours tort. Un détecteur peut être une raison de parler à un étudiant. Un agent conversationnel peut être une répétition utile. Un tableau de bord peut être une invitation à poser une question. Ce qui cause le préjudice, c'est la substitution.

## Que faire cette semaine

- Choisissez une tâche notée et écrivez ce qu'elle montrerait avec l'outil fermé. Si la réponse est « rien de différent », la tâche est le problème.
- Ajoutez une mesure sans aide à un cours qui ne rapporte actuellement que la performance assistée.
- Lisez le contrat de surveillance d'examen ou d'outil d'IA de votre établissement pour les clauses de conservation, de réutilisation secondaire et de fuite, et vérifiez si le texte de consentement décrit ce que le système capture réellement.
- Demandez à un fournisseur des résultats sans aide et par sous-groupe. Si la réponse est une démonstration, vous avez votre réponse.
- Lors de votre prochaine séance avec le corps enseignant, consacrez la seconde moitié à la refonte de l'évaluation plutôt qu'aux invites.

## Où aller ensuite

- [[addressing-common-misconceptions-ai-education]] : les croyances derrière ces pratiques, et comment les corriger sans condescendance.
- [[limitations-in-aied-research]] : ce que la base de données probantes ne peut pas encore soutenir.
- [[reducing-ai-misuse]] : les leviers structurels contre les usages abusifs, et pourquoi ils battent l'exhortation.
- [[pedagogical-safety]] : ce qu'un tuteur peut faire à un apprenant tout en passant tous les contrôles de contenu.
- [[should-we-use-ai-detectors]] : les données sur les détecteurs dans leur intégralité.
- [[checking-whether-educational-ai-works]] : comment évaluer une affirmation avant de l'adopter.
