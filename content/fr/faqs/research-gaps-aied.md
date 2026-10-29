---
title: "Quelles lacunes notables existe-t-il dans la littérature de recherche sur l'IA en éducation ?"
created: "2026-09-22T19:10:56-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
source_updated: "2026-10-28T11:47:13-04:00"
translation_of: faqs/research-gaps-aied
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

Une échéance de subvention tombe dans huit jours et la section contextuelle a besoin d'une phrase sur ce que ce domaine ne sait pas encore. Ou un collègue a affirmé devant une commission que le tutorat par IA fait progresser les résultats, en citant une expérience de deux ans menée dans 18 collèges, et c'est vous qui devez dire ce que cette étude peut réellement porter. Ou vous choisissez un sujet de thèse et toutes ses versions semblent déjà avoir été traitées.

Les lacunes qui comptent portent sur la force, la spécificité et l'applicabilité. L'IA peut accomplir des tâches éducatives ; les questions ouvertes sont de savoir si une conception particulière produit un bénéfice durable, pour qui, par quel mécanisme et sous quelles conditions. Cette distinction décide de deux choses sur votre bureau : ce qu'il faut étudier ensuite, et ce qu'il faut cesser d'affirmer en attendant. [[limitations-in-aied-research|Limitations de la recherche en IAED]] est le catalogue qui sous-tend cette page. Les preuves concernant les [[intelligent-tutoring|systèmes de tutorat intelligent]], les [[learning-analytics|analytiques]] prédictifs, l'[[generative-ai|IA générative]] et les agents autonomes ne sont pas interchangeables non plus, et la recherche sur l'usage de l'IA pour soutenir l'apprentissage diffère de la recherche sur l'enseignement de l'IA aux personnes, comme l'explique la vue d'ensemble [[ai-education|IA en éducation]].

## La version courte

**1.** Comparez l'IA à une alternative non-IA solide qui maintient constants le programme, la pratique et l'accompagnement, et dites ce que l'IA a ajouté.

**2.** Mesurez la performance différée et sans aide, et affirmez que la performance assistée n'est pas un gain d'apprentissage.

**3.** Indiquez quelle composante de l'ensemble a fait le travail et quel mécanisme vous invoquez.

**4.** Validez chaque score automatisé et chaque apprenant simulé par rapport à de vrais apprenants, y compris des apprenants extérieurs à votre échantillon de développement.

**5.** Énoncez la frontière de population, car une moyenne regroupée ne répond pas à une question d'équité.

**6.** Décrivez le dispositif assez précisément pour qu'une autre personne puisse le reconstruire.

## Choisir une comparaison qui isole l'IA

Des expériences rigoureuses en classe existent, si bien que « il nous faut des essais randomisés » ne nomme plus la lacune. La question plus fine est de savoir si la composante d'IA ajoute de la valeur au-delà d'une pratique supplémentaire, de meilleurs supports, une rétroaction opportune ou un accompagnement pédagogique accru.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] rapporte des gains de résultats modestes dans 18 collèges, accompagnés d'un engagement substantiel limité avec le tuteur, et les auteurs notent que ces gains ressemblaient à ceux d'une pratique structurée sans IA. Il s'agit de preuves sur un dispositif mis en œuvre, qui ne peuvent pas isoler ce que l'IA à l'intérieur y a ajouté.

Le problème sous-jacent est conceptuel autant qu'empirique. « ChatGPT » nomme un outil, pas une méthode. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] ont audité 19 comparaisons de ChatGPT en éducation : seules 4 (21%) précisaient les trois éléments à la fois — un traitement réplicable, un contrôle opérationnalisé et une mesure valide de l'apprentissage (74% de traitements bien définis, 42% de contrôles bien définis, 53% avec un résultat d'apprentissage). Quand une nouvelle IA arrive en même temps que de nouvelles activités, une nouvelle rétroaction ou une nouvelle conception d'interface, le moyen et la méthode se confondent et aucun effet n'appartient à l'IA.

Ce qui trancherait : des comparaisons avec des alternatives non-IA réalistes, à programme, occasions de pratique et accompagnement aussi constants que possible, plus des réplications indépendantes à travers établissement, enseignant, discipline et modèle. Les méthodes répondent ici à des questions différentes. Les travaux [[qualitative-research|qualitatifs]] et de [[design-based-research|recherche fondée sur la conception]] expliquent la mise en œuvre, tandis que des expériences bien conçues portent les affirmations causales, comme l'expose [[research-methods-aied|Méthodes de recherche sur l'efficacité]].

## Mesurer l'apprentissage une fois l'outil retiré

Un travail amélioré pendant l'usage de l'IA n'est pas la preuve d'un apprentissage qui survit à la fin de l'assistance. Les synthèses [[learning-gains|Gains d'apprentissage]] et [[cognitive-offloading|Décharge cognitive]] tracent sans cesse la même ligne entre performance assistée, connaissances retenues, raisonnement indépendant et transfert.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] montre le problème de mesure dans une expérience randomisée portant sur plus de 6 000 élèves de collège. Une règle de maîtrise fondée sur trois bonnes réponses consécutives a augmenté la réussite telle que définie par la plateforme sans, à elle seule, produire de gains d'apprentissage détectables une semaine plus tard. Les preuves les plus solides au test différé sont apparues lorsque l'IA était insérée dans le flux de travail de maîtrise et concentrée sur la matière déjà pratiquée.

La lacune restante concerne les trajectoires de compétence, et un post-test supplémentaire ne la comble pas. Personne n'a établi la rétention sur plusieurs mois, le transfert entre tâches, la performance après retrait, ni l'exactitude avec laquelle les apprenants jugent ce qu'ils savent, et le domaine n'a pas séparé l'échec à acquérir une compétence de la détérioration d'une compétence déjà établie. La recherche sur la décharge cognitive doit encore montrer quand la délégation soutient ces trajectoires et quand elle déplace la pratique qui les construit.

## Déterminer quelle partie de l'ensemble a fait le travail

« Apprentissage soutenu par l'IA » regroupe généralement plusieurs changements : nouvelle rétroaction, réflexion ajoutée, discussion entre pairs, séquences de tâches différentes, incitations d'évaluation modifiées. Un ensemble qui réussit ne vous dit pas quelles composantes étaient nécessaires.

[[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design]] constitue une avancée réelle sur cette question. Parmi 1 176 étudiants de première année, les conceptions réflexives et hybrides ont surpassé la [[ai-feedback-quality|rétroaction par IA]] directe sur le transfert différé sans IA. La condition hybride combinait auto-évaluation, [[peer-assessment|rétroaction par les pairs]] et critique par IA. Cela sépare la manière dont la rétroaction est organisée et utilisée de la question de savoir si les étudiants y ont accès.

Reste ouvert : la contribution et le moment des tentatives indépendantes initiales, de l'auto-explication, de l'apport des pairs, de la rétroaction corrective, des indices et de l'estompage de l'aide, et la façon dont chacun interagit avec les [[prior-knowledge|connaissances préalables]] et la difficulté de la tâche.

La lacune théorique va de pair. Nommer une [[learning-theories|théorie de l'apprentissage]] n'est pas la tester. Une étude a besoin d'une prédiction théorique liée à un comportement précis du système et d'une mesure d'un processus d'apprentissage, et la médiation statistique éclaire cette explication sans établir un mécanisme causal. [[theory-development-aied|Développement théorique en IA en éducation]] et [[scaffolding]] poussent l'argument plus loin.

## Valider la mesure avant de l'interpréter

Des construits tels que l'engagement, la [[critical-thinking|pensée critique]], la littératie en IA et la [[personalized-learning|personnalisation]] sont mesurés de manière incohérente dans cette littérature. Les auto-déclarations décrivent des perceptions ; elles ne peuvent pas tenir lieu de compétence démontrée. L'exactitude technique, la qualité de la production évaluée par des experts et l'apprentissage des étudiants sont trois cibles d'évaluation différentes. [[educational-measurement|Mesure en éducation]] et [[ai-ed-evaluation|Évaluation en IA et éducation]] traitent ces distinctions comme fondatrices.

Une lacune se situe à l'intérieur du problème de mesure : des [[ai-technologies|systèmes d'IA]] servant à évaluer d'autres systèmes d'IA. Dans [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]], les [[simulating-students|étudiants simulés]] abandonnaient souvent les [[misconceptions|conceptions erronées]] qui leur étaient assignées après une rétroaction corrective, que cette rétroaction traitât ou non de la conception erronée, si bien que leurs réponses pouvaient faire passer un enseignement inefficace pour une réussite. Un entraînement ciblé a amélioré la mesure de fidélité de l'étude, et l'amélioration de cette mesure n'est pas une validation par rapport à l'apprentissage humain.

Ce qui manque, c'est la validation de toute la chaîne d'évaluation, du comportement du modèle au jugement [[pedagogy|pédagogique]], puis à la réponse de l'apprenant et au résultat éducatif, sur des apprenants et dans des contextes non utilisés pendant le développement. Le jugement humain exige le même examen, car l'accord entre évaluateurs n'est pas la preuve que le bon construit a été mesuré.

## Décider ce qu'une évaluation peut encore certifier

L'IA crée deux problèmes d'évaluation liés : elle aide à produire le travail évalué, et elle peut influencer la manière dont ce travail est noté.

L'[[ai-agents-complete-lms-assessment-validity-2026|étude de la base de connaissances sur des agents d'IA accomplissant des tâches évaluées dans un LMS]] documente des agents naviguant dans un cours de licence en direct et terminant des activités évaluées. Cela démontre une capacité qui remet en cause les hypothèses sur les preuves produites par les étudiants. Cela n'établit pas la fréquence de tels usages, et cela n'invalide pas l'évaluation asynchrone comme catégorie.

La question de recherche est de savoir quelles conceptions soutiennent encore des conclusions défendables sur l'apprenant. Les [[eportfolio|portfolios]], les réflexions, les remises par étapes et les journaux d'activité doivent être validés comme preuves plutôt que présumés établir la paternité ou la compréhension. Les études devraient tester des combinaisons de preuves contre une compétence observée indépendamment, en tenant compte de l'accessibilité, de la charge de travail, de la vie privée et de l'anxiété des étudiants. [[assessment-validity|Validité de l'évaluation]] contient le détail.

Pour la [[automated-assessment|notation automatisée]], [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] rapporte un désaccord systématique entre modèles prêts à l'emploi et évaluateurs humains. Les résultats dépendent de la configuration, et ils montrent pourquoi la cohérence interne ne peut pas porter une affirmation de validité.

[[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] propose d'évaluer séparément ce que les apprenants doivent faire seuls, ce qu'ils peuvent accomplir avec l'IA, et ce qu'ils doivent vérifier et défendre. C'est un cadre qui attend une validation empirique.

La détection est l'impasse la plus claire dans ce domaine. [[karr-ai-detection-humanization-2026|Karr et al. (2026)]] ont fait tourner deux détecteurs commerciaux à τ = 0.50 sur 642 résumés anglais publiés. Une édition légère par IA conforme aux recommandations était signalée dans 38-80% des cas. Les originaux 2023-25 non modifiés étaient signalés dans 9-15% des cas, les travaux hors [[stem-education|STEM]] bien au-dessus des travaux STEM, à p < 0.001. Après humanisation, les outils repéraient moins de 4% des réécritures étiquetées comme produites par IA, soit un taux de faux négatifs supérieur à 96%. Un score qui punit une assistance honnête et manque l'évitement ne peut pas fonder une conclusion sur un apprenant.

## Cesser de lire les scores de littératie comme des preuves de comportement

La recherche sur les interventions de littératie en IA est assez substantielle pour être synthétisée. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education]] couvre 59 études et 7 211 participants, rapporte un effet moyen positif, et rapporte aussi une variation substantielle avec un intervalle de prédiction large qui traverse zéro. Les résultats centrés sur les connaissances ressortent plus forts que ceux sur les compétences, les attitudes ou l'éthique.

La lacune plus fine est de savoir si l'enseignement de la littératie change ce que les gens font lorsqu'ils utilisent l'IA, et un cadre de compétences supplémentaire ne la comblerait pas. Les apprenants peuvent-ils reconnaître des affirmations non étayées, vérifier des sources, rejeter des suggestions trompeuses, remarquer un accord inapproprié et choisir quand ne pas déléguer ? Cela tient-il sous pression temporelle, et cela se transfère-t-il à des systèmes et des disciplines inconnus ?

Trancher cela exige une évaluation fondée sur la performance combinée à l'observation des décisions réelles et à un suivi différé, en gardant séparés plutôt que regroupés les connaissances conceptuelles, la maîtrise opérationnelle et le jugement critique. [[ai-literacy|Littératie en IA]] et [[trust-calibration|Calibration de la confiance]] fournissent les distinctions.

## Indiquer qui le résultat laisse de côté

Les résultats issus d'un cours, d'un établissement, d'une langue ou d'une population d'apprenants autorisent rarement des décisions ailleurs, un problème que la synthèse [[limitations-in-aied-research|Limitations de la recherche en IAED]] traite comme récurrent. La manière dont les effets varient selon le stade de développement, la discipline, les connaissances préalables, le handicap, la langue et les conditions de ressources reste largement non mesurée.

La recherche sur l'équité doit aussi séparer accès, compétences et résultats. La synthèse [[digital-divide|Fracture numérique]] est claire : les appareils et l'accès aux outils n'établissent pas une capacité égale d'en bénéficier. [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] a suivi 752 élèves du secondaire inférieur à Hong Kong : les écarts de préparation psychologique se sont réduits tandis que les différences à un test objectif de littératie en IA persistaient. Tous les groupes se sont améliorés, et les inégalités ne se sont pas refermées. Les profils d'apprentissage antérieur n'étaient pas assignés au hasard, si bien que leur rôle causal reste inconnu.

La couverture est mince à des endroits précis. [[differential-effects-across-learner-groups|Effets différenciés entre groupes d'apprenants]] compte la littérature par population : les apprenants de langue seconde et multilingues et les étudiants en situation de handicap constituent les filons les plus profonds, le genre et la neurodiversité viennent ensuite, les étudiants de première génération et internationaux ont une étude chacun dans ce corpus, les étudiants doués et à haut rendement sont pratiquement non étudiés, et les apprenants réfugiés, immigrés et déplacés n'apparaissent dans aucune. Une base de preuves de cette forme ne peut pas répondre à une question d'équité par agrégation.

La capacité varie aussi à l'intérieur d'un même système national. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] ont noté l'intégration de l'IA dans 45 universités nigérianes et trouvé une adoption globale modérée (M = 4.79, étendue 1.83-7.83 sur une échelle de 10 points), le type d'établissement ne prédisant pas l'intégration une fois l'âge et la géographie contrôlés (âge β = 0.43 ; localisation au Sud-Ouest β = 0.31). Les capacités internes étaient corrélées entre elles à r = 0.79-0.80 et les collaborations internationales avec les partenariats industriels à r = 0.74, si bien que les établissements connectés accumulent des avantages cumulatifs. Quelles conceptions de renforcement des capacités changent les résultats dans des établissements plus récents et moins connectés n'a pas été testé.

La priorité de recherche est d'identifier des conceptions qui réduisent les différences de compétence démontrée, de participation et d'[[agency|autonomie]], en rapportant les résultats et les charges par sous-groupe à côté des gains moyens. L'accessibilité porte sa propre question non résolue : une conception supprime-t-elle un obstacle à la participation ou remplace-t-elle une capacité que l'apprenant est censé développer ? Voir [[equity-in-ai-education|Équité en IA et éducation]] et [[accessibility]].

## Dire qui détient le contrôle, et quand il change

À mesure que les systèmes planifient, engagent des actions, conservent de la mémoire et coordonnent des outils, la question éducative devient celle de savoir qui devrait contrôler quelles parties du processus d'apprentissage, et quand ce contrôle devrait se déplacer.

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] cartographie 474 études et trouve une validation longitudinale limitée, une concentration en [[higher-ed|enseignement supérieur]] et en STEM, et une faible intégration de la théorie éducative : seules 29% des études examinées s'appuyaient explicitement sur une théorie éducative, un résultat qui concerne ce corpus et non l'ensemble des travaux en IAED.

Des questions ouvertes s'ensuivent. L'aide initiée par l'apprenant produit-elle des résultats différents de l'aide initiée par l'agent ? L'accompagnement peut-il être retiré à mesure que la compétence se développe sans perte ? Les apprenants conservent-ils la capacité de contester le système ? Les synthèses [[agentic-ai|IA agentique]] et [[human-ai-collaboration|Collaboration humain-IA]] ajoutent l'intervention et la responsabilité des [[teacher-role|enseignants]] dans les dispositifs multi-agents, où personne n'a établi qui répond de la décision d'un agent. Une plus grande autonomie est un choix de conception pédagogique dont la base de preuves reste à construire.

## Tester les défaillances de sécurité face à de vrais apprenants

La sécurité éducative dépasse l'exactitude factuelle et les demandes interdites. Un tuteur peut donner une réponse correcte tout en supprimant l'occasion pour l'apprenant de raisonner, en renforçant une conception erronée ou en créant une dépendance. [[pedagogical-safety|Sécurité pédagogique]] couvre ce construit.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] identifie des défaillances, dont la divulgation excessive de réponses et l'abandon de l'étayage, avec nettement plus de défaillances lors de tests multi-tours. Ce sont des résultats de [[benchmark|référentiel]] dans des conditions spécifiées, pas des estimations de la fréquence des préjudices en classe.

Ce qui se passe lorsque ces défaillances rencontrent de vrais apprenants sur un usage prolongé est inconnu. Lesquelles produisent une confusion temporaire, lesquelles des conceptions erronées persistantes, lesquelles réduisent la motivation et lesquelles affaiblissent la capacité indépendante n'a pas été mesuré. Personne n'a établi non plus quelles protections réduisent ces risques sans produire de refus excessif ni de frustration. Les travaux de plus long terme doivent aussi traiter comme résultats la confiance, la volonté de demander de l'aide humaine, l'[[agency|autonomie de l'apprenant]] et les relations avec les pairs et les enseignants. Pour les enfants, cela exige des études adaptées au développement qui relient le comportement du système à des résultats éducatifs et relationnels.

## Séparer l'adoption de la mise en œuvre

La capacité technique n'établit pas qu'un outil est bien utilisé, et le développement professionnel n'atteint pas automatiquement les étudiants. Le maillon manquant va généralement de la formation des enseignants, à la pratique de classe modifiée, aux résultats des étudiants.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]] est une étude multiniveau portant sur 46 enseignants et 2 832 étudiants. Les connaissances pédagogiques de l'IA étaient associées aux perceptions et intentions des étudiants, et aucune des composantes mesurées des connaissances enseignantes n'était directement associée aux gains de connaissances des étudiants en IA. Des associations de ce type n'établissent pas qu'une intervention de formation causerait un meilleur apprentissage.

La question ouverte est de savoir quelles combinaisons d'accompagnement individualisé, d'[[curriculum-design|alignement curriculaire]], de routines de relecture, de planification et de soutien institutionnel produisent une amélioration durable, et les études doivent observer l'enseignement réellement mis en œuvre plutôt que la confiance ou l'intention d'adopter des enseignants. [[teacher-ai-competency|Compétence des enseignants en IA]] et [[educational-development|Développement éducatif]] couvrent le terrain.

La rentabilité comparative est une seconde lacune. Les évaluations devraient compter la vérification, la correction, la formation, la supervision, la maintenance et le temps de mise en œuvre à côté des coûts d'abonnement et d'usage des modèles, et comparer une offre soutenue par l'IA avec des alternatives réalistes. La question qui vaut d'être tranchée est quel bénéfice éducatif le dispositif complet apporte pour les ressources qu'il consomme.

## Compter les documents de gouvernance comme des intentions

Les principes [[ethics|éthiques]] et les cadres de gouvernance sont nécessaires, et leur existence n'établit pas qu'ils changent les pratiques ni qu'ils protègent les apprenants.

[[agarwal-ethical-values-norms-aied-2026|Agarwal et al.]] ont examiné 25 articles et trouvé les utilisateurs finaux largement passifs dans la littérature éthique, les voix étudiantes étant pratiquement absentes, aux côtés de tensions entre valeurs et d'asymétries de pouvoir entre parties prenantes. Cela décrit la littérature examinée. Ce n'est pas une affirmation que les étudiants ne participent jamais à la conception en IAED.

Ce qui manque, ce sont des preuves sur les dispositifs de gouvernance qui font une différence mesurable. La participation des étudiants et des enseignants change-t-elle les achats, la conception des outils, les règles d'évaluation ou les réparations après une erreur ? Les procédures de relecture humaine repèrent-elles les erreurs lourdes de conséquences ? Des alternatives à l'usage de l'IA sont-elles réellement disponibles pour les personnes à qui l'on dit de l'utiliser ? La recherche sur la vie privée présente une lacune parallèle : la valeur éducative d'une collecte de données supplémentaire est généralement présumée, et les conceptions minimisant les données ont rarement été comparées à des conceptions plus intrusives sur l'apprentissage comme sur l'autonomie de l'apprenant. Voir [[governance|Gouvernance de l'IA]] et [[privacy]].

## Rendre l'étude reconstructible

L'IAED a un problème de reproductibilité exceptionnellement difficile. Les études omettent les invites, les versions de modèle, les paramètres, le code et les détails pédagogiques, et les systèmes propriétaires peuvent changer pendant ou après une intervention. [[limitations-in-aied-research|Limitations de la recherche en IAED]] documente ce schéma.

Reconstruire une étude signifie décrire le dispositif pédagogique autant que le modèle : tâches d'apprentissage, sources de contenu, actions autorisées, interface, accompagnement enseignant, conditions d'évaluation et tout ce qui a changé pendant le déploiement. Reproduire une configuration et tester si son principe pédagogique se transfère à une autre sont deux accomplissements distincts, et les recommandations de reporting de [[research-methods-aied|Méthodes de recherche sur l'efficacité]] traitent les deux.

La synthèse demande le même soin. [[meta-analysis-systematic-review|Méta-analyse et revue systématique]] liste les études primaires faibles, le biais de publication, l'hétérogénéité des interventions et l'incompatibilité des résultats comme limites aux conclusions regroupées, et un « effet IA » moyen unique masque les distinctions dont les éducateurs ont besoin. Les revues devraient séparer la performance assistée de l'apprentissage indépendant, distinguer les types d'intervention et les conditions de comparaison, et rendre les décisions de codage auditables.

La littérature de synthèse est elle-même une lacune. L'[[oneill-presumed-effective-meta-analysis-2026|audit forensique d'O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|méta-analyses]] à fort impact a trouvé qu'aucune ne fournissait une base valide pour ses affirmations. Aucun construit cohérent : un outil traité comme une intervention, des résultats multidimensionnels regroupés. Le biais de publication a été évalué de façon invalide dans les 14. L'I² rapporté allait de 77.2% à 94.4% dans chaque analyse qui le rapportait, avec 12 des 13 au-dessus de 80%. 61% des études primaires vérifiées au hasard présentaient des réserves de validité. Ces 14 analyses ont recueilli plus de 2 000 citations en environ 16 mois, et une méta-analyse rétractée était encore citée comme faisant autorité dans 60% des articles citants postérieurs à la rétractation, sans mention. Sur 14 articles citant une autre méta-analyse auditée dont le résumé annonçait un effet important de « l'éducation à l'IA » qui mesurait en fait l'enseignement de l'IA aux étudiants, seuls 2 la citaient de façon appropriée, 8 la lisaient comme une preuve que l'intégration de l'IA améliore l'apprentissage, et 4 se trompaient d'autres manières. L'audit demande aux revues d'exiger une transparence complète des données pour les méta-analyses (protocoles de recherche, caractéristiques des études codées, statistiques extraites, code analytique), demande aux rédacteurs en chef de ne pas traiter un historique de publication comme une preuve de compétence en évaluation, et demande que les rétractations soient visibles partout où un article est découvert, exporté ou cité. La reproductibilité couvre la chaîne de synthèse, pas seulement l'étude individuelle.

Les enseignants qui veulent la version au niveau de la classe peuvent suivre [[evaluating-ai-interventions-methods]].

## Ce que les chercheurs et les enseignants comprennent mal ici

**Le domaine manque d'études.** Il manque d'études spécifiées. Il existe des expériences multisites, des essais randomisés portant sur des milliers d'étudiants et 14 méta-analyses à fort impact. Seules 21% des comparaisons auditées définissaient le traitement, le contrôle et le résultat assez bien pour attribuer un effet.

**Nommer une théorie la teste.** Citer une théorie de l'apprentissage est une décision de cadrage. Un test exige une prédiction, un comportement du système qui la met en œuvre et une mesure de processus qui pourrait sortir dans l'autre sens.

**Un score automatisé validé est un résultat validé.** L'accord avec des codeurs humains établit la cohérence avec ces codeurs. Des étudiants simulés se sont améliorés sur une mesure de fidélité sans être validés par rapport à l'apprentissage humain, et la chaîne du comportement du modèle au résultat reste inconstruite.

**L'accès, c'est l'équité.** Dans l'étude de Hong Kong, les écarts de préparation psychologique se sont réduits tandis que les différences au test objectif se maintenaient, et tous les groupes se sont améliorés sans que les inégalités se referment. Les appareils et les licences changent qui peut atteindre l'outil.

**Plus d'autonomie, c'est du progrès.** Une plus grande indépendance des agents est un choix de conception. Avec 29% des 474 études sur les agents s'appuyant sur une théorie éducative et une validation longitudinale limitée, personne n'a montré que déplacer le contrôle vers le système améliore l'apprentissage.

## Les objections que vous entendrez

**« La lacune, c'est simplement qu'il nous faut plus d'essais randomisés. »** Il en existe beaucoup désormais, et le problème se situe en amont des étiquettes de conception : un essai d'un ensemble qui réunit nouvelle rétroaction, nouvelles tâches et nouvelle interface ne peut rien attribuer à l'IA. C'est la condition de comparaison qui demande le travail.

**« Je ne peux pas mener un suivi sur plusieurs années. »** Alors mesurez une occasion différée et sans aide et dites quel intervalle elle couvre. Une semaine est un résultat réel, et l'étude sur la règle de maîtrise a obtenu son résultat à une semaine en intégrant l'IA dans le flux de travail et en se concentrant sur la matière pratiquée.

**« La randomisation est impossible dans mon cours. »** Les travaux fondés sur la conception et qualitatifs répondent à des questions de mise en œuvre auxquelles les essais ne peuvent pas répondre, et le domaine a besoin des deux. Là où l'assignation aléatoire est possible, elle porte encore l'affirmation causale.

**« La taille d'effet regroupée me dit déjà ce qui marche. »** Les 14 méta-analyses auditées définissaient le traitement comme un outil, regroupaient des résultats incompatibles et rapportaient un I² supérieur à 80% dans 12 des 13 analyses qui le donnaient. Le nombre regroupé décrit un ensemble d'études avec un problème de construit.

**« Les étudiants simulés coûtent moins cher, leur validation peut attendre. »** Dans l'étude sur la sycophancie, les étudiants simulés abandonnaient leurs conceptions erronées que la rétroaction les traitât ou non, ce qui est précisément le mode de défaillance qui fait passer un tuteur inefficace pour efficace.

## À faire cette semaine

**1.** Écrivez en une phrase la condition de comparaison de l'étude que vous préparez. Si c'est le statu quo, révisez-la avant de réviser quoi que ce soit d'autre.

**2.** Ajoutez une mesure différée et sans aide à la conception et nommez l'intervalle dans la section méthode.

**3.** Écrivez la frontière de population dans l'énoncé de conception, puis dans le résumé, afin que l'affirmation ne puisse pas voyager plus loin que l'échantillon.

**4.** Prenez l'affirmation la plus forte de votre brouillon actuel et supprimez la version que votre mesure ne peut pas porter. Gardez la phrase sur le plafond.

**5.** Pour chaque score automatisé ou apprenant simulé de l'étude, nommez la référence humaine et l'arbitre avant le début de la collecte de données.

## Où aller ensuite

[[reporting-interpreting-aied-research]] est le pendant de cette page sur le reporting, et [[research-methods-aied|Méthodes de recherche en IA en éducation]] couvre les choix de conception derrière chaque lacune. [[evaluating-ai-interventions-methods]] traite des mesures et des conceptions de comparaison, [[checking-whether-educational-ai-works]] est la version courte de la question de l'efficacité, et [[does-ai-help-students-learn]] rassemble ce que l'on sait de l'apprentissage durable. [[theory-development-aied]] et [[equity-ethics-pedagogical-safety-research]] poussent plus loin les fils théoriques et celui de l'équité.
