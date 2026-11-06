---
title: "Confiance"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-11-05T18:53:37-05:00"
type: concept
foundations: [ai-literacy, critical-thinking, human-ai-collaboration]
technology: [educational-robotics, intelligent-tutoring]
ethics: [trust]
confidence: high
translation_of: concepts/trust
source_updated: "2026-11-04T15:40:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-01"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Confiance (Trust)** — la disposition des apprenants, des éducateurs et des institutions à s'en remettre à une personne ou à un système d'IA pour l'apprentissage, le jugement et la prise de décision. Dans l'[[ai-education|IA en éducation]], la confiance s'étend sur deux domaines liés mais distincts : la **confiance en l'IA** (l'assurance dans la compétence, la transparence, la fiabilité et la bienveillance d'un système ou d'un agent d'IA) et la **confiance interpersonnelle** (la confiance relationnelle entre étudiants et enseignants, entre apprenants et pairs, et à l'échelle de l'institution). Toutes deux sont à double tranchant : une confiance appropriée permet un [[student-engagement|engagement]] productif, tandis qu'une confiance excessive invite à la [[cognitive-offloading|sur-dépendance]] et qu'une confiance insuffisante bloque les usages bénéfiques. L'enjeu central est la **calibration** — aligner la confiance sur la fiabilité réelle, que cette fiabilité appartienne à un modèle ou à une personne.

## Questions à examiner

- Lorsque vous dites avoir « confiance » en un outil d'IA plutôt qu'en un enseignant ou un collègue, décrivez-vous la même chose ? Qu'y a-t-il de commun, et qu'y a-t-il de foncièrement différent, entre accorder sa confiance à un système et l'accorder à une personne ?
- Il existe un « écart confiance-utilité » documenté : la compétence apparente d'un outil dépasse souvent sa fiabilité réelle. Évoquez un outil qui avait l'air impressionnant mais vous a laissé tomber, ou un autre qui semblait limité mais s'est révélé fiable. Qu'est-ce qui a façonné l'écart entre son apparence et ce qu'il pouvait réellement faire ?
- Imaginez une IA qui est toujours d'accord avec vous et ne remet jamais vos idées en question. Elle peut sembler confortable et digne de confiance — mais l'accord est-il la même chose que la fiabilité ? Que pourriez-vous perdre si l'outil sur lequel vous vous appuyez ne vous contredit jamais ?
- La page soutient que la confiance d'un enseignant envers l'IA façonne la confiance que les étudiants accordent à cette IA — les deux domaines interagissent. Dans un cours que vous connaissez bien, de quelle manière l'enthousiasme ou le scepticisme d'un enseignant à l'égard de l'IA influencerait-il le fait que les étudiants acceptent ou questionnent l'outil ?
- Les étudiants décident souvent de divulguer ou non leur usage de l'IA en fonction de leur aisance avec leur enseignant davantage qu'en fonction de la politique en vigueur. Si vous étiez (ou si vous êtes) étudiant, qu'est-ce qui vous rendrait disposé à être honnête au sujet de votre usage de l'IA — et qu'est-ce qui vous le ferait cacher ? Qu'est-ce que cela dit de la manière dont la confiance se construit réellement dans une salle de classe ?
- Un constat : un tuteur IA qui prévient « je peux faire des erreurs » a conduit les étudiants à chercher davantage d'aide, et non moins. Qu'est-ce que cela suggère quant au fait que reconnaître ses limites mine ou renforce la confiance qui soutient un apprentissage réel ?

## Introduction

La confiance en l'IA est façonnée par la compétence perçue, la transparence, la cohérence, et par le fait que le système apparaisse aligné sur les objectifs de l'apprenant ; elle est étroitement liée à la [[ai-literacy|littératie en IA]] (savoir à quoi se fier), à la [[critical-thinking|pensée critique]] (évaluer les productions) et à la conception d'une IA responsable. La confiance interpersonnelle, à l'inverse, se construit par les relations, la divulgation, la rétroaction et l'attention [[pedagogy|pédagogique]] — les qualités sur lesquelles les étudiants s'appuient pour décider si un enseignant ou une IA est une source de guidance digne de confiance. Les deux domaines interagissent de plus en plus : l'IA étant tissée dans les relations enseignant-étudiant, la manière dont les étudiants font confiance à leur enseignant façonne la façon dont ils font confiance (ou non) aux outils d'IA que cet enseignant cautionne.

La confiance est aussi une victime mesurée, et pas seulement un principe. Dans [[gillette-partnership-ethics-genai-higher-education-2026|Gillette et al. (2026)]], des étudiants ont déclaré faire moins confiance à leurs camarades après avoir découvert un usage non divulgué de l'IA générative dans un [[group-work|travail de groupe]], le jugeant « préjudiciable à la confiance et à l'éthique du monde académique », tandis que quelques-uns soupçonnaient des enseignants d'y recourir sans le dire à leurs étudiants.

## La confiance dans les systèmes d'IA

La [[research-methods-aied|recherche]] de cette base de connaissances examine dans quelles conditions les apprenants accordent une confiance appropriée aux recommandations produites par l'IA. Les [[ai-fallibility-warning-help-seeking|avertissements sur la faillibilité de l'IA]] peuvent améliorer la calibration : une simple intervention de transparence indiquant aux étudiants qu'un tuteur IA peut se tromper a accru la [[help-seeking|recherche d'aide]] dans un système de tutorat intelligent en mathématiques, ce qui suggère que l'honnêteté sur les limites favorise plutôt qu'elle ne mine la dépendance appropriée. La [[calibrating-trustworthiness-llm-education-2026|co-conception de métriques de fiabilité]] avec des ingénieurs de l'apprentissage montre que la confiance se construit le mieux sur des critères observables et convenus que sur une capacité supposée. Les études sur la [[fouad-bentley-trust-utility-gap-physics-2026|physique]] et sur la [[t2i-competence-paradox-2026|génération d'images]] révèlent un *écart confiance-utilité* persistant — les utilisateurs doivent peser la compétence apparente d'un outil contre sa fiabilité réelle dans une tâche donnée. Chez les plus jeunes utilisateurs, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]] ont constaté que 52 % des enfants (de 6 à 14 ans) faisaient généralement confiance à un agent conversationnel adapté à leur âge et que 35 % lui faisaient confiance comme à un enseignant ou à un ami, environ un tiers étant disposés à se confier à lui ; les enfants ont aussi activement testé sa crédibilité par des questions dont ils connaissaient la réponse, et la confiance ne montrait aucune différence statistiquement significative selon le niveau scolaire — ce qui illustre comment une confiance précoce peut se former en amont de toute évaluation critique.

La transparence sur *ce qu'un système est* — et pas seulement sur ce qu'il peut faire — façonne également la calibration : le prototype d'accompagnement Amico rendait explicites son identité et ses limites, et son pilote Italie-Chine a montré que les apprenants le reconnaissaient comme un outil de soutien borné plutôt que comme un tuteur autonome ou un substitut relationnel, évitant ainsi la sur-confiance anthropomorphique ([[ai-pedagogical-accompaniment-amico|Benedetti (2026)]]).

Dans les établissements d'enseignement supérieur, le levier est peut-être l'utilité plutôt que les règles : parmi 2 121 étudiants, personnels académiques et administratifs interrogés dans une seule université, l'[[technology-acceptance-model|utilité perçue]] l'emportait sur la clarté des politiques comme corrélat de la confiance en l'IA (β = 0,402 contre 0,223) ([[ai-adaptation-gap-higher-education-2026|Braun & Khafizov, 2026]]).
**La méfiance à l'égard de l'exactitude peut coexister avec la confiance dans sa capacité à maîtriser l'outil.** Dans une enquête menée auprès de 8 021 étudiants de quatre universités australiennes, 51 % se méfiaient de l'exactitude factuelle de l'IA générative tandis que 76 % avaient confiance en leur capacité à obtenir les productions souhaitées, et c'est l'utilité — plutôt que la confiance ou le respect des règles — qui guidait leur usage ([[genai-use-usefulness-student-experience-australia-2026|Chung et al., 2026]]).

La [[ai-overreliance-complex-adaptive-system-2026|modélisation de la sur-dépendance à l'IA comme système adaptatif complexe]] recadre la confiance comme un processus au niveau de la population : le fait que les gens fassent confiance à un assistant quand il a raison et le vérifient quand il a tort dépend de dynamiques sociales et de boucles de rétroaction, et pas seulement du jugement individuel. La complaisance menace la calibration depuis l'autre direction — [[ai-sycophancy|une IA toujours d'accord]] peut sembler digne de confiance précisément parce qu'elle ne contredit jamais l'utilisateur, invitant à une acceptation acritique ([[contextual-sycophancy-ai-literacy|complaisance contextuelle]] et [[sycophantic-ai-social-interaction-2026|IA complaisante dans l'interaction sociale]]). Dans des contextes [[embodied-learning|incarnés]] comme la [[educational-robotics|robotique éducative]], la confiance est davantage façonnée par ce que le robot fait que par son apparence ([[task-context-trust-educational-hri-2026|contexte de la tâche et confiance dans l'interaction homme-robot éducative]]), et [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|l'identité de l'avatar]] façonne la confiance épistémique que les apprenants accordent aux contenus produits par l'IA. La confiance dans les outils d'[[learning-analytics|analytique]] est elle aussi dépendante du contexte. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] ont constaté que les préoccupations des enseignants et les freins à l'adoption divergeaient fortement selon le contexte d'apprentissage : les enseignants de classe inversée (université) s'inquiétaient surtout de l'anonymisation des données et de la possibilité pour les étudiants de se retirer, tandis que les enseignants d'écriture réflexive (formation professionnelle) craignaient le mauvais usage de l'outil par leurs collègues éducateurs et insistaient sur la nécessité de contextualiser les données — alors même que les deux groupes faisaient état d'une [[self-efficacy|auto-efficacité]] et d'avantages perçus similaires dans une enquête sur la confiance envers l'IA. Le constat que la confiance dans l'outil est découplée de la confiance dans sa gouvernance des données et ses usages sociaux souligne que construire une confiance appropriée dans l'analytique exige de prendre en compte des préoccupations propres au contexte, et pas seulement la compétence apparente du système.

La manière dont un système est explicable — et en quels termes — façonne aussi la confiance des enseignants dans ses recommandations. Dans une expérience en plan intra-sujet menée auprès de 41 enseignants de [[chemistry-education|chimie]] en exercice utilisant l'outil de recommandation de groupes fondé sur l'IA [[xai-teachers-trust-edtech-recommendations-2026|GrouPer]], [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] ont constaté que l'[[explainable-ai|IA explicable]] construit la confiance indirectement, en augmentant la *compréhensibilité* de la performance du système, et que des explications **pilotées par le domaine**, formulées dans un langage [[curriculum-design|curriculaire]] et pédagogique, favorisaient une compréhensibilité et une confiance apprise significativement plus grandes que des explications purement **pilotées par les données** (importance des variables). Fait notable, la compréhensibilité seule ne suffisait pas pour certains enseignants — ils ont déclaré avoir besoin d'une véritable expérience de classe avec l'outil avant de s'y fier pleinement — ce qui renforce l'idée que la confiance en l'IA est dynamique et se valide par l'usage [[situated-learning|situé]], et ne s'obtient pas par la seule explication.

**La perception du risque et la confiance ne sont pas des opposés.** Une étude de perception menée auprès de 130 étudiants sur l'IA générative [[agentic-ai|agentique]] dans l'[[higher-ed|enseignement supérieur]] a montré un risque perçu modérément élevé (M = 3,33, SD 0,89) parallèlement à une confiance et à une intention d'adoption plus favorables (M = 3,62, SD 0,81), et — contrairement à une attente simple de dissuasion — une association *positive* entre le risque perçu et l'intention d'usage continu (ρ de Spearman = 0,317, p < 0,001) ([[ilieva-agentic-genai-higher-education-2026|Ilieva et al. 2026]]). Les auteurs y lisent une adoption informée plutôt qu'une indifférence : les utilisateurs engagés ou expérimentés reconnaissent à la fois la valeur et les limites de la technologie, et seulement 45,4 % ont déclaré faire confiance aux agents sous la conduite d'un enseignant. Pour la [[trust-calibration|calibration de la confiance]], l'implication est que la conscience du risque n'est pas l'absence de confiance — elle peut en être une composante — tandis que le plan transversal laisse indistinguables la conscience, l'exposition et l'auto-sélection.


La confiance envers l'IA se comporte comme un cheminement allant de l'évaluation à la dépendance plutôt que comme une attitude unique : l'autonomisation perçue liée à l'IA et la menace perçue liée à l'IA étaient presque indépendantes (r = 0,030) mais faisaient pourtant évoluer la confiance dans des directions opposées (β = 0,576 et β = −0,328), et la confiance portait des associations indirectes significatives avec la dépendance à l'IA générative dans les deux sens ([[ai-empowerment-threat-genai-dependence-2026|Zhu et al. (2026)]]).

Un modèle structural donne à ce rôle de pont un test empirique. Dans l'enquête de [[trust-calibration-genai-collaborative-regulation-2026|Bu & Li (2026)]] auprès de 642 étudiants universitaires, le soutien contextuel prédisait la calibration de la confiance (β = 0,56), la calibration de la confiance prédisait la [[regulation|régulation]] [[collaborative-learning|collaborative]] (β = 0,49) et les gains de [[transfer-of-learning|transfert]] perçus (β = 0,22), et le chemin direct du soutien contextuel vers les gains n'était pas significatif.

**La confiance prime sur toute voie d'adoption classique.** [[zhu-creative-agency-trust-genai-art-2026|Zhu (2026)]] a ajouté la confiance à l'UTAUT dans une enquête auprès de 450 étudiants en art et en design du Zhejiang et a constaté qu'elle était le prédicteur direct le plus fort de l'intention d'utiliser l'[[generative-ai|IA générative]] (β = 0,425). L'influence sociale (0,155), le contrôle métacognitif (0,146) et l'attente de performance (0,128) suivaient. L'influence sociale portait aussi le plus grand chemin vers la confiance (β = 0,262), et 42,1 % de son association totale avec l'intention passait par la confiance.

Le construit est plus mince que ne le laisse entendre le coefficient. Il mesure la confiance technologique instrumentale avec un supplément de valeur artistique — une confiance déclarée plutôt qu'une fiabilité calibrée — et les deux items d'autorialité ont été retirés après avoir formé leur propre facteur dans un pilote mené auprès de 121 étudiants. Un étudiant peut faire confiance à ce modèle de manière appropriée ou indistincte, et l'instrument ne peut pas distinguer les deux.

[[student-perspectives-ai-writing-grading-2026|AlGhamdi (2026)]] soutient une conception de la confiance dans les algorithmes **propre à chaque fonction plutôt que globale** : ni l'aversion pour les algorithmes ni l'appréciation pour les algorithmes ne décrivaient ces 13 étudiants, qui faisaient simultanément confiance à ChatGPT pour une rétroaction de surface et s'en méfiaient comme correcteur. Leur confiance était conditionnée par la supervision de l'enseignant, et leur scepticisme provenait des limites contextuelles de l'IA — la mauvaise lecture d'une écriture manuscrite numérisée (« it spelled my last name wrong and it thinks I made mistakes in my spelling when I didn't »), l'ignorance du barème de l'enseignant, et un optimisme chronique — plutôt que d'une technophobie, ce qui suggère que les mesures de confiance devraient être décomposées selon la fonction qu'une IA remplit et les enjeux qui s'y rattachent.


Les trois dimensions de la crédibilité de la source peuvent se dissocier : dix-sept étudiants de premier cycle en anglais langue étrangère ont accordé à un assistant d'écriture IA une large expertise, ont douté surtout de sa fiabilité quant à ce que la plateforme conservait, et ont jugé sa bienveillance la plus faible — le plafond de leur dépendance résidait dans le soin, non dans la compétence ([[bounded-reliance-ai-writing-feedback-2026|Serpil & Mor, 2026)]]).

Les indices de crédibilité peuvent accroître la dépendance à l'égard de réponses fausses : l'ajout de citations et de signaux d'autorité à une interface de débat a fait passer l'abandon d'un jugement correct au profit de la position de l'IA de 15,0 % à 31,8 %, tandis que le fait de retenir une position recommandée ramenait ce basculement à 5,7–8,2 % ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

La confiance en l'IA ne suit pas davantage l'adoption nationale : les Roumains, avec 17,8 % d'usage de l'IA générative contre 48,4 % au Danemark, évaluaient leur confiance en l'IA légèrement plus haut (4,1 contre 3,8 sur une échelle de sept points), tandis que la confiance institutionnelle se répartissait à l'inverse, de 28 à 45 points ([[lucau-uneven-use-similar-trust-genai-2026|Lucau, Voicu & Christensen (2026)]]).

## La confiance envers l'IA suit l'état psychologique, et non la catégorie démographique

[[trust-in-ai-psychological-profiles-ml-2026|Kumar et al. (2026)]] ont constitué des profils sur 107 étudiants d'une université publique historiquement noire (HBCU) à partir de la résilience, du stress perçu et de la confiance envers l'IA, et ont trouvé trois profils dans lesquels la **confiance en l'IA se dissociait de la confiance en soi** : un groupe à forte résilience et faible stress avec une confiance favorable envers l'IA, un groupe modérément stressé affichant la confiance envers l'IA la *plus élevée* des trois malgré la tension, et un groupe psychologiquement résilient, presque aussi résilient que les adoptants, mais nettement plus bas en confiance envers l'IA. Le stress et la confiance envers l'IA séparaient le plus fortement les groupes (eta carré partiel de 0,528 et 0,521 contre 0,315 pour la résilience), et le genre était la seule variable démographique significativement associée à l'appartenance, l'affiliation aux [[stem-education|disciplines STEM]], le niveau académique, le statut d'emploi et la tranche d'âge étant tous non significatifs. Deux implications importent pour cette page : d'abord, une faible confiance envers l'IA n'est pas un indicateur indirect d'une faible confiance en soi ni d'une faible familiarité technique, puisque les sceptiques étaient le groupe le plus résilient et le plus fortement ancré dans les STEM, ce que les auteurs lisent comme un scepticisme calibré plutôt que comme une résistance ; ensuite, parce que les groupes n'étaient que faiblement séparés (silhouette de 0,288, l'indice de Calinski-Harabasz préférant deux groupes), ils doivent être traités comme des profils qui se recouvrent plutôt que comme des types d'étudiants distincts. Les constats proviennent d'un seul établissement et d'une enquête transversale par [[self-report-measures|auto-déclaration]], si bien qu'ils établissent que la confiance varie avec l'état psychologique, et non pourquoi.

## La confiance interpersonnelle en éducation

La confiance est aussi fondamentalement relationnelle. L'écart de confiance en salle de classe est documenté dans [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai|les points de vue des enseignants et des étudiants sur le contrôle et l'autonomie dans l'IA de classe au K-12]] : les étudiants souhaitent davantage d'[[agency|autonomie]] et de flexibilité tandis que les enseignants priorisent la supervision et le suivi, un décalage que les deux camps doivent apprivoiser pour que l'adoption de l'IA réussisse. [[qu-wang-disclose-or-not-genai-2026|Pourquoi les étudiants divulguent ou dissimulent leur usage de l'IA]] montre que la divulgation est moins guidée par la politique que par des facteurs relationnels — les normes perçues chez les pairs et le **confort avec les enseignants** en sont les prédicteurs les plus forts, ce qui renvoie à une faible confiance interprétative dans les cadres [[governance|institutionnels]]. [[vetter-hidden-cost-disclosure-genai-2026|Les coûts cachés de la divulgation]] ajoutent des nuances quant au moment où l'honnêteté a un coût social.

Une réponse qui privilégie la détection agit à l'inverse : des détecteurs peu fiables, qui signalent de manière disproportionnée les locuteurs non natifs, font capoter les procédures pour faute de preuve, produisant un « soupçon sans recours », tandis que des entretiens de vérification de cinq à dix minutes, annoncés comme de la pédagogie plutôt que comme de la surveillance, ont restauré l'autorité des enseignants et attiré davantage de divulgations ouvertes sur l'usage de l'IA ([[best-response-student-ai-dialog-2026|Mandernach, 2026]]).

Le recours aux détecteurs et à la surveillance, soutiennent [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]], nourrit un climat de suspicion qui érode la confiance des étudiants envers l'évaluation et l'institution — l'inverse de la confiance que les dispositifs d'intégrité sont censés protéger.

La rétroaction est un lieu clé de la confiance interpersonnelle. [[genai-teacher-feedback-comparison|Les perceptions par les étudiants de la rétroaction de l'IA générative comparée à celle de l'enseignant]] montrent que les deux répondent à des besoins différents — complémentaires mais non interchangeables — les étudiants accordant leur confiance à la rétroaction enseignante pour le jugement relationnel et personnalisé, et à l'[[generative-ai|IA générative]] pour la rapidité et l'[[accessibility|accessibilité]]. [[care-full-feedback-genai|Un récit « care-full » de la rétroaction]] soutient qu'une rétroaction digne de confiance est une pratique [[ethics|éthique]] et relationnelle : elle construit des relations éducatives et est respectée comme un art professionnel, des valeurs qu'une IA ne peut simplement répliquer. C'est pourquoi la confiance entre enseignant et étudiant — bâtie sur le soin et le jugement professionnel — reste centrale même lorsque l'IA entre dans la boucle de rétroaction.


La confiance entre pairs passe par un canal différent : parmi 406 étudiants universitaires évaluant un camarade de classe remémoré, l'usage de l'IA générative par ce camarade était associé à une confiance interpersonnelle plus faible, portée par la chaleur et la compétence perçues, et l'association négative ne valait que lorsque la [[ai-literacy|littératie en IA]] perçue était faible — elle était non significative lorsque celle-ci était élevée ([[observer-perceptions-genai-interpersonal-trust-2026|Zhang et al., 2026]]).

## Calibration et les deux domaines réunis

L'enjeu unificateur est la **calibration** : faire correspondre la confiance à la fiabilité réelle, que la partie à qui on se fie soit un modèle ou une personne. La [[trust-calibration|calibration de la confiance]] est la capacité [[metacognition|métacognitive]] de savoir quand se fier et quand questionner. Les études sur la [[feedback|rétroaction]] et le [[intelligent-tutoring|tutorat intelligent]] par IA examinent dans quelles conditions les apprenants s'appuient de manière appropriée sur les recommandations de l'IA ou les contestent, tandis que la littérature interpersonnelle montre que la confiance des étudiants envers un enseignant dépend de la confiance relationnelle construite au fil du temps. À mesure que l'IA s'ancre dans l'[[teacher-role|enseignement]], ces domaines convergent : un enseignant qui explique avec transparence ce qu'un outil d'IA peut et ne peut pas faire, et qui fait la démonstration de la fiabilité de son propre jugement, construit le type de confiance qui se transfère aux outils qu'il cautionne. Construire une confiance appropriée — envers l'IA comme envers autrui — est un objectif central de la conception responsable de l'IA en éducation.

La calibration est aussi mise à l'épreuve par les incitations du système auquel on se fie. Lorsque des personnels sceptiques à l'égard de l'adoption de l'IA consultent une [[conversational-ai|IA conversationnelle]] — construite par des organisations ayant un intérêt commercial à cette adoption — il y a un risque que le système soit prédisposé à l'encourager. Un audit de dix modèles de pointe a montré que la plupart reconnaissaient les préoccupations d'un membre du personnel d'une école du [[k-12]] en zone rurale (la menace sur l'emploi, le sentiment de ne pas être « fait pour des gens comme moi ») avant de le réorienter vers l'engagement. Cela met en cause la confiance naïve et souligne l'importance de la [[human-in-the-loop-ai|supervision humaine]] et d'une [[ai-ed-evaluation|évaluation indépendante de l'IA]].

## Idées fausses courantes

**« La confiance et la méfiance occupent les deux extrémités d'une même échelle. »** Elles sont séparables, et les confondre fait mal lire ce que les étudiants déclarent réellement. **La perception du risque et la confiance ne sont pas des opposés :** une étude de perception menée auprès de 130 étudiants sur l'IA générative [[agentic-ai|agentique]] dans l'[[higher-ed|enseignement supérieur]] a trouvé un risque perçu modérément élevé (M = 3,33, SD 0,89) *parallèlement* à une confiance et à une adoption plus favorables. Un apprenant peut porter les deux à la fois, ce qui explique qu'un score de confiance unique ne puisse pas dire si sa dépendance est appropriée.

**« Se méfier de l'exactitude de l'IA signifie que les étudiants ne s'appuieront pas sur elle. »** Les étudiants distinguent la production de leur capacité à la piloter. Dans une enquête auprès de **8 021 étudiants de quatre universités australiennes, 51 % se méfiaient de l'exactitude factuelle de l'IA générative tandis que 76 % avaient confiance en leur capacité à obtenir les productions souhaitées.** C'est le second chiffre qui prédit le comportement : la confiance dans l'extraction coexiste avec le doute sur la vérité, et un seul des deux est une propriété de sûreté.

**« Ce sont des règles et des politiques plus claires qui bâtissent la confiance des étudiants. »** L'utilité l'emporte. Une enquête auprès de 2 121 étudiants, enseignants et personnels d'une université a trouvé l'utilité perçue **comme le corrélat le plus fort de la confiance en l'IA (β = 0,402)**, la clarté perçue des politiques venant derrière. Les établissements qui investissent dans l'élaboration de règles tout en livrant des outils que personne ne juge utiles ont visé le levier le plus faible.

**« Si les apprenants lui font davantage confiance, ils l'utiliseront plus prudemment — ou du moins de manière appropriée. »** C'est l'inverse que documentent les données. Parmi 432 étudiants de premier cycle résolvant des problèmes Python avec des suggestions exactes et délibérément trompeuses, une confiance plus grande prédisait une dépendance appropriée **plus faible** (r = −0,42), et les étudiants acceptaient 86,03 % des suggestions trompeuses. La confiance n'est pas un indicateur indirect de la calibration ; voir la [[trust-calibration|calibration de la confiance]].

**« Des avertissements honnêtes sur la faillibilité mineraient la confiance dans un tuteur. »** Ils améliorent le comportement. Les [[ai-fallibility-warning-help-seeking|avertissements sur la faillibilité de l'IA]] dans un système de tutorat intelligent en mathématiques ont accru la [[help-seeking|recherche d'aide]] au lieu de réduire l'usage, ce qui suggère qu'énoncer les limites favorise une dépendance appropriée plutôt qu'elle ne l'érode.

## Implications pour la pratique

**Pour les enseignants**

- Mesurer deux choses, et non une : ce que les étudiants croient de l'exactitude de l'IA, et ce qu'ils croient de leur propre capacité à l'utiliser. Le partage 51 %/76 % montre que ces deux croyances divergent fortement et que seule la seconde pilote le comportement.
- Énoncer d'emblée les limites de l'outil. Les avertissements de faillibilité ont augmenté la recherche d'aide dans les données sur le tutorat intelligent, si bien que la divulgation est un outil de calibration plutôt qu'un risque pour la confiance.
- Surveiller la confiance élevée associée à une vérification superficielle ; cette combinaison est le mode de défaillance de la calibration, et non un signal de réussite.

**Pour les développeurs**

- Bâtir la confiance sur des critères observables et convenus plutôt que sur une capacité apparente, en suivant les travaux de co-conception de la fiabilité menés avec des ingénieurs de l'apprentissage. La fluidité n'est pas un signal de fiabilité, et les étudiants la lisent comme tel.
- Prioriser l'utilité dans l'accueil plutôt que le texte des politiques, puisque l'utilité est le corrélat de confiance le plus fort mesuré.
- Ne pas traiter une confiance élevée comme un succès d'engagement ; associer toute mesure de confiance à une mesure de dépendance appropriée.

**Pour les chercheurs**

- Rapporter la confiance, la perception du risque et la dépendance appropriée comme des construits distincts, car ils covarient dans des directions non évidentes — y compris négatives.
- Rapporter le résultat comportemental (taux d'acceptation des suggestions fausses) à côté de la confiance auto-déclarée ; les échelles de confiance seules inversent la conclusion.

## Concepts liés

- [[explainable-ai]]
- [[trust-calibration]]
- [[ai-literacy]]
- [[critical-thinking]]
- [[cognitive-offloading]]
- [[educational-robotics]]
- [[ethics]]
- [[intelligent-tutoring]]
- [[ai-sycophancy]]
- [[human-ai-collaboration]]
- [[remote-proctoring]]
- [[social-norms-ai-use]] — le risque social sur lequel reposent les normes et la divulgation

## Articles liés
- [[lucau-uneven-use-similar-trust-genai-2026]] — Un usage inégal, une confiance similaire : l'IA générative au Danemark et en Roumanie (Lucau, Voicu & Christensen 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — Le risque perçu corrèle positivement avec l'intention d'usage continu : une adoption informée (Ilieva et al. 2026)
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — L'écart de confiance entre enseignants et étudiants sur le contrôle et l'autonomie dans l'IA de classe au K-12
- [[qu-wang-disclose-or-not-genai-2026]] — La divulgation de l'usage de l'IA est guidée par des facteurs relationnels et par le confort avec les enseignants, non par la politique
- [[genai-teacher-feedback-comparison]] — La rétroaction de l'IA générative et celle de l'enseignant répondent à des besoins de confiance différents et complémentaires
- [[care-full-feedback-genai]] — La rétroaction digne de confiance comme pratique « care-full » et relationnelle
- [[ai-fallibility-warning-help-seeking]] — L'avertissement sur la faillibilité de l'IA accroît la recherche d'aide dans un système de tutorat intelligent
- [[calibrating-trustworthiness-llm-education-2026]] — Co-conception de métriques et de visualisations de fiabilité pour les LLM en éducation
- [[ai-overreliance-complex-adaptive-system-2026]] — La sur-dépendance à l'IA modélisée comme système adaptatif complexe
- [[fouad-bentley-trust-utility-gap-physics-2026]] — L'écart confiance-utilité dans les outils d'IA pour la physique
- [[t2i-competence-paradox-2026]] — Le paradoxe de la compétence dans la génération d'images par IA
- [[task-context-trust-educational-hri-2026]] — Le contexte de la tâche façonne la confiance dans les robots éducatifs plus que l'apparence
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — L'identité de l'avatar et la confiance épistémique dans l'apprentissage médiatisé par l'IA
- [[contextual-sycophancy-ai-literacy]] — La complaisance contextuelle et ses limites pour la calibration de la confiance
- [[sycophantic-ai-social-interaction-2026]] — L'IA complaisante rend l'interaction humaine moins satisfaisante au fil du temps
- [[ai-pedagogical-accompaniment-amico]] — Médiation pédagogique responsable et confiance dans les systèmes enrichis par l'IA
- [[best-response-student-ai-dialog-2026]] — La confiance dans le dialogue étudiant-IA
- [[ai-adaptation-gap-higher-education-2026]] — L'utilité perçue comme prédicteur le plus fort de la confiance en l'IA dans l'enseignement supérieur
- [[bassett-ai-detectors-education-2026]] — Confiance et défiance à l'égard des systèmes de détection de l'IA
- [[genai-use-usefulness-student-experience-australia-2026]] — L'expérience étudiante de l'utilité de l'IA générative dans l'enseignement supérieur australien (Chung et al. 2026)
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Rendre les résultats de l'apprentissage automatique accessibles aux enseignants en classe hybride
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-perspectives-ai-writing-grading-2026]] — Qui devrait noter mon travail ? Le point de vue des étudiants sur une évaluation transparente de l'écriture assistée par l'IA dans l'enseignement supérieur
- [[trust-in-ai-psychological-profiles-ml-2026]] — Trois profils d'étudiants où la confiance envers l'IA suit la résilience et le stress plutôt que la démographie (Kumar et al. 2026)
- [[bounded-reliance-ai-writing-feedback-2026]] — Une confiance bornée : l'engagement des étudiants d'anglais langue étrangère avec la rétroaction d'écriture générée par l'IA, du point de vue de la crédibilité de la source

- [[ai-empowerment-threat-genai-dependence-2026]] — Les évaluations d'autonomisation et de menace faisaient évoluer la confiance dans des directions opposées, portant la dépendance à l'IA générative
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Les indices de crédibilité augmentaient le basculement vers une position incorrecte de l'IA ; retenir une recommandation le supprimait
- [[trust-calibration-genai-collaborative-regulation-2026]] — Un modèle structural donne à ce rôle de pont un test empirique
- [[zhu-creative-agency-trust-genai-art-2026]] — La confiance instrumentale comme prédicteur le plus fort de l'intention d'utiliser l'IA générative pour les étudiants en art
- [[observer-perceptions-genai-interpersonal-trust-2026]] — L'usage de l'IA générative par les pairs abaisse la confiance interpersonnelle via la chaleur et la compétence perçues, atténué par la littératie en IA
