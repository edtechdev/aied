---
title: "Comment rédiger une politique d'usage de l'IA pour un cours et la communiquer aux étudiants ?"
created: "2026-09-22T19:16:30-04:00"
updated: "2026-10-29T08:08:36-04:00"
weight: 70
type: faq
foundations: [academic-integrity, framing-ai-use-for-students, reducing-ai-misuse]
assessment: [assessment]
ethics: [ai-use-disclosure]
research_method: [literature review, survey]
audience: [instructors, curriculum designers]
level: [higher ed, secondary]
methods: [qualitative-research]
institutions: [educational-policy-ai]
source_updated: "2026-10-28T11:29:19-04:00"
translation_of: faqs/course-ai-policy
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

Trois semaines avant le trimestre, le modèle de plan de cours comporte une ligne « politique d'IA » et elle indique actuellement : voir les règles d'intégrité académique de l'université. Ou bien le cours d'un collègue est revenu avec une série de travaux dont personne ne pense qu'ils ont été écrits dans la salle, et la réunion de programme de jeudi se termine par une demande que chaque cours énonce sa position par écrit. Ou encore la politique est déjà rédigée et la période de notation vous montre lesquelles de ses phrases vous pouvez réellement appliquer.

L'essentiel : nommez les tâches que vous notez, dites ce que l'IA peut faire à chacune, placez la déclaration en un seul endroit, et appliquez la règle avec des preuves que vous pouvez voir. Cinq permissions précises tiennent mieux qu'une page d'interdictions. Une politique qui s'explique fait en même temps un travail de conception de l'évaluation et un travail de communication, ce qui explique qu'elle coûte un après-midi et épargne un trimestre de disputes.

Tout ce qui suit est le document au niveau du cours pour un module, un cours ou un axe de programme. Le postulat est que vous avez décidé ce que vous évaluez ; le travail ici consiste à le dire et à le faire tenir.

## La version courte

**1.** Inventoriez les tâches notées et demandez-vous, pour chacune, ce que vous évaluez précisément. La frontière suit cette réponse.

**2.** Rédigez la règle au niveau de l'étape : remue-méninges permis, rédaction d'objectifs non. Sélection d'images permise, conception du message au niveau de la diapositive non.

**3.** Placez le résumé sur le plan de cours, la formulation opérationnelle sur la feuille de devoir, et énoncez la règle à voix haute une fois, au moment où elle s'applique pour la première fois.

**4.** Nommez un endroit et une forme standard pour la divulgation, et gardez le coût de déclarer inférieur au coût de cacher.

**5.** Appliquez la règle avec du travail que vous pouvez observer : un journal de prompts, un exercice en classe, un compte rendu oral. Les scores des détecteurs restent hors du chemin d'application.

## Partez des tâches que vous notez

La méthode exposée la plus claire est celle de [[mccorkle-aligned-genai-course-policy-2025|McCorkle (2025)]], qui remplaçait une interdiction générale que les étudiants ne croyaient pas applicable à eux. Lisez cet échec correctement : il s'agissait d'un défaut d'alignement plutôt que de défiance, et les étudiants ne se considéraient pas comme malhonnêtes. On ne peut pas discuter une règle qu'ils ont déjà décidé qui ne les concerne pas ; on ne peut que l'ignorer.

La méthode de McCorkle se déroule en quatre passes. Inventorier chaque tâche du projet de trimestre, se demander pour chacune « qu'est-ce que j'évalue précisément ? », associer chaque tâche à un usage professionnel plausible de l'[[generative-ai|IA générative]], puis décider tâche par tâche. Chaque décision pèse le besoin d'évaluer une capacité contre la valeur de développer une compétence que l'étudiant utilisera au travail.

Le résultat est délibérément inégal. Le remue-méninges est permis ; la rédaction d'objectifs d'apprentissage précis et mesurables ne l'est pas. La sélection d'images est permise ; la conception du message au niveau de la diapositive ne l'est pas. Les scripts et la narration sont permis, avec évaluation obligatoire de la sortie de l'IA. Écrite ainsi, la liste paraît arbitraire jusqu'à ce qu'on lise la raison à côté de chaque ligne, ce qui explique que les raisons voyagent avec les règles.

## Décidez du degré de sévérité, en sachant ce que font les autres

Deux points de données vous disent à quoi ressemble une politique normale cette année, et les deux valent d'être emportés à la réunion où quelqu'un propose une interdiction.

Une analyse de contenu de **116 politiques institutionnelles sur l'IA générative** issues de 131 universités américaines de recherche de catégorie R1 et de **98 plans de cours d'informatique** issus de 54 d'entre elles a constaté que les institutions sont largement favorables à l'usage : 63% encouragent l'usage de l'IA générative, 41% offrent des consignes détaillées pour la classe, 27% le découragent. La moitié des plans de cours (50%) l'interdisent purement et simplement, 41% permettent un usage partiel pour des activités précisées, et 7% communiquent un encouragement. [[genai-policies-higher-ed-computing|Ganguly et al. (2026)]] appellent cela l'écart entre l'approche descendante et l'approche ascendante. 92% des plans de cours donnent des lignes directrices explicites, pourtant les règles locales s'écartent des orientations institutionnelles, et seules 47 institutions présentaient les deux niveaux détectables. La citation est la seule exigence sur laquelle les deux niveaux s'accordent, à 83% des plans de cours.

[[chirikov-regulate-ai-syllabi-2026|Chirikov (2026)]] a suivi plus de 31.000 plans de cours dans une grande université publique de recherche du Texas de 2021 à 2025. La réglementation est passée de presque zéro avant ChatGPT à 55% des cours à l'automne 2025, tandis que les politiques entièrement restrictives ont chuté d'environ 5 points de pourcentage par an. À l'automne 2025, les enseignants restreignaient le plus souvent la rédaction et la révision (79%) ainsi que le raisonnement et la [[problem-solving|résolution de problèmes]] (65%). Ils permettaient le plus souvent la correction et la relecture (83%), le soutien à l'étude et la synthèse (80%) et la programmation (75%). L'idéation était l'usage le plus contesté, avec 46% de permission et 54% de restriction.

La formulation a suivi les chiffres. Les mentions d'intégrité académique sont passées de 63% à 49%, les références à l'effet de l'IA sur l'apprentissage de 1% à 29%, et les exigences d'attribution de 16% à 43%. Le domaine glisse de « ne trichez pas » vers « voici pourquoi cette frontière protège votre apprentissage », et c'est la seconde version qu'un étudiant peut mettre en pratique.

Deux conséquences pour votre document. Être plus strict que votre institution est normal, et c'est un engagement que vous prenez seul, car le coût de l'application vous revient. Une exigence de citation est presque gratuite, puisque quatre cinquièmes du domaine la demandent déjà et qu'aucun étudiant n'a à deviner ce que vous voulez dire.

## Placez chaque règle là où l'étudiant la rencontrera

Trois documents, trois fonctions.

**Le plan de cours** porte le résumé court : les tâches, l'usage permis à chacune, le fonctionnement de la divulgation et la conséquence d'une frontière franchie. Un écran, pas de philosophie.

**La feuille de devoir** porte l'encadré. Un résumé unique est trop grossier pour un projet complexe, et c'est là que la formulation de McCorkle a fait son travail, dans une justification adressée aux étudiants à la deuxième personne qui nommait l'évaluation derrière chaque restriction.

**La salle** porte la première énonciation orale. Dites la règle une fois, au moment où elle s'applique pour la première fois, liée au travail qu'ils ont devant eux. Une règle qu'un étudiant rencontre seul est une règle qu'il interprète seul.

Les modalités de divulgation méritent leur propre paragraphe, et ce devrait être le plus concret de la page. Les étudiants qui ont cocréé une politique de cours par questionnement guidé ont priorisé la formation des étudiants et des enseignants, des **procédures de divulgation standardisées**, un soutien institutionnel plus fort et une plus grande participation aux décisions sur l'IA ([[guided-inquiry-genai-course-policy-2026|Hingle et Johri (2026)]]). Dites comment, où et sous quelle forme un étudiant déclare un usage, et dites-le une seule fois.

[[teaching-intro-ai-course-redesign-bill-of-rights-2026|Pisan (2026)]] a trouvé une version plus forte du même geste : faire du journal de prompts l'artefact noté. Quand un modèle fait la production, le prompt et l'enregistrement de l'interaction sont ce qui vaut la peine d'être versionné, de sorte que la déclaration cesse d'être de la paperasse et devient une preuve que l'étudiant construit.

## N'écrivez que des règles applicables en un seul cycle de notation

Une règle qui exige une surveillance tâche par tâche, ou un jugement sur le moment où une évaluation « commence », sera appliquée de façon incohérente d'une classe à l'autre et d'un correcteur à l'autre. L'incohérence est un problème d'équité avant d'être un problème administratif. Un régime fondé sur les détecteurs ajoute un coût de surveillance qui se répartit inégalement, avec des questions de [[remote-proctoring|surveillance à distance]] et de conservation des données auxquelles vous ne pourrez peut-être pas répondre au niveau du cours.

[[nash-preservice-teachers-classroom-ai-policies-2026|Nash et Burriss (2026)]] ont analysé 27 politiques d'IA de classe rédigées par des futurs enseignants d'arts du langage. **26 sur 27 permettaient un certain usage de l'IA**, presque toujours selon des modalités, des moments et des lieux fixés par l'enseignant ; une seule l'interdisait entièrement. L'idéation était l'usage le plus largement permis (22 sur 27) et le plus ambigu. 22 interdisaient ou laissaient flou que l'IA compose des phrases, des paragraphes ou des travaux. 16 permettaient la vérification grammaticale et la relecture, tandis que 16 interdisaient la production de longs textes générés par l'IA. Et **22 sur 27 n'abordaient pas du tout la lecture**.

L'échec récurrent était l'opérationnalisation. Une politique autorisait l'IA « pour lancer votre réflexion » et déclarait « c'est ici qu'il faut tracer la ligne » sans dire où était la ligne. Cette ambiguïté laisse les étudiants incapables de se conformer et vous incapable d'appliquer une norme cohérente. C'est un défaut, pas un compromis.

La constatation de Chirikov d'une variation disciplinaire et par tâche substantielle plaide pour des cadres qui accordent aux enseignants une autonomie dans leur propre domaine plutôt qu'un mandat unique pour tous, ce qui est aussi la description honnête de ce qu'est une politique de cours : un jugement local à l'intérieur d'une règle plus large.

Il y a ici une dimension d'[[equity-in-ai-education|équité]]. Les politiques opaques postulent un savoir partagé sur l'autorialité, l'attribution et les normes du travail universitaire, de sorte qu'elles frappent le plus durement les étudiants qui arrivent sans ce savoir. Le cas de McCorkle montre que la transparence démonte une partie de ce programme caché et réduit la probabilité qu'un échec de politique devienne une affaire disciplinaire.

La version la moins coûteuse de tout cela est courte et précise : les tâches que vous évaluez, les usages permis à chacune, les modalités de divulgation et la conséquence d'une frontière franchie, chacune avec sa raison attachée.

## Dites-la à voix haute, et surveillez ce que vous modélisez

Les règles de divulgation ne fonctionnent pas comme mécanismes de conformité à elles seules, et les traiter comme si c'était le cas est l'erreur de conception la plus courante. Dans une étude à méthodes mixtes portant sur 409 étudiants de premier cycle, [[qu-wang-disclose-or-not-genai-2026|Qu et Wang (2026)]] ont constaté que la non-divulgation était une **adaptation stratégique aux normes perçues des pairs et à une faible [[trust|confiance]] interprétative envers les enseignants** plutôt qu'une négligence morale. La divulgation perçue chez les pairs et le confort avec l'enseignant étaient les meilleurs prédicteurs de la divulgation des étudiants eux-mêmes ; le désengagement moral avait des effets plus faibles.

Cela vous laisse deux leviers que vous contrôlez réellement : ce que les étudiants croient que leurs pairs font, et s'ils vous font confiance pour lire une déclaration équitablement. Les deux réagissent à la façon dont vous parlez de la règle la première semaine. Aucun ne réagit à la sévérité de la formulation.

[[student-rationalization-ai-writing|Kim et al. (2026)]] ont trouvé **cinq lieux distincts** où vit la politique réelle d'un cours : l'intention de l'enseignant, la politique formelle, l'interprétation de l'étudiant, l'auto-politique de l'étudiant et la pratique de l'étudiant. Les écarts entre eux sont systémiques. Ils ont aussi catalogué **23 rationalisations en six classes** que les étudiants utilisaient pour justifier l'usage de l'IA en rédaction universitaire, de « aucune victime humaine » à « indifférence de l'enseignant ». Ces rationalisations étaient ad hoc et a posteriori : les étudiants expliquaient un comportement déjà survenu plutôt que de raisonner à l'avance, ce qui explique qu'une formulation plus claire et une détection plus sévère ne comblent pas l'écart à elles seules.

Un participant qui voulait obéir à une règle stricte d'absence d'IA continuait d'utiliser l'IA et disait que l'interdiction « me crée un conflit, parce que je brise les règles ». L'interdiction a intensifié le conflit moral sans empêcher l'usage. Une règle qui produit de la culpabilité sans conformité érode la relation dont vous avez besoin pour la divulgation.

Surveillez aussi ce que vous modélisez. La plupart des devoirs du cours de Pisan indiquaient le prompt utilisé pour les générer, et un étudiant a lu cette transparence comme une **permission** : « la dépendance à l'IA de l'enseignant pour noter et créer les devoirs rendait aussi difficile de ne pas utiliser l'IA pour les devoirs de la même façon ». Modéliser une norme fait partie de la politique telle que les étudiants la vivent, quoi que dise le plan de cours.

Une déclaration que vous pouvez adapter :

> **L'usage de l'IA dans ce cours.** Je veux que vous quittiez ce cours capables de faire X vous-mêmes, c'est pourquoi j'évalue X directement. Vous pouvez utiliser l'IA pour [usages permis] sur [liste des tâches] ; vous ne pouvez pas l'utiliser pour [usages restreints], parce que c'est ce que je note. Si vous utilisez l'IA quelque part dans votre travail, dites-moi dans [lieu unique nommé, par exemple une ligne de divulgation sur chaque travail remis] à quoi vous l'avez utilisée et collez les prompts. Le déclarer ne baissera jamais votre note. C'est de ne pas déclarer un usage qui entraîne une conséquence. Si vous ne savez pas si un usage est permis, demandez-moi avant de remettre, pas après.

Cette dernière phrase déplace le point de décision avant le travail, qui est le seul moment où la question est peu coûteuse à trancher.

## Prévoyez les quatre conversations avant qu'elles n'aient lieu

**L'étudiant qui a utilisé l'IA sans le dire.** Traitez cela comme une question de processus, non de caractère. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed et Temimi (2026)]] modélisent l'évaluation comme un problème d'information imparfaite : l'étudiant sait comment le travail a été produit, et l'institution voit l'artefact plus des traces partielles. Leur modèle de la région de réponse compare trois réponses, l'absence d'usage de l'IA, l'usage [[ai-use-disclosure|divulgué]] et l'usage caché, et demande laquelle chaque mécanisme rend la plus attrayante. L'interdiction fixe la frontière formelle et laisse l'usage caché attrayant quand les étudiants jugent la détection faible. La surveillance augmente le coût attendu de l'usage caché sans augmenter la divulgation, de sorte que les étudiants deviennent prudents sans devenir transparents. La permission avec divulgation rend le signalement honnête viable seulement tant que le coût de l'honnêteté reste bas.

Dans la salle, cela signifie demander ce que le travail était censé évaluer, demander à l'étudiant de rendre compte de son processus, et lire une déclaration tardive comme une information plutôt qu'un aveu.

**L'étudiant qui cite l'IA pour tout.** C'est habituellement une lacune de compétence déguisée en souci de conformité. Les exigences d'attribution sont passées de 16% à 43% des plans de cours tandis que les mentions d'intégrité académique tombaient de 63% à 49%, de sorte que le domaine demande une citation plutôt qu'un aveu. Précisez le format une fois, sur la feuille de devoir plutôt que dans une note de bas de page du plan de cours. Dites à quoi ressemble une attribution adéquate dans votre discipline et donnez un exemple travaillé. Là où le vrai problème est que l'étudiant ne sait pas encore faire le travail sous-jacent sans le modèle, la réponse relève de la conception de la tâche.

**Le travail en groupe.** Cinq étudiants peuvent entretenir cinq interprétations d'une même phrase, et un seul travail est noté. Pour chaque livrable de groupe, décidez et publiez si l'usage de l'IA est permis, qui le déclare et ce qui se passe quand un membre sort de la règle. Faites-le avant le début du projet, pendant que c'est une question de planification. Si vous ne pouvez pas énoncer la contribution individuelle dont un membre est responsable, notez la tâche comme un travail exclusivement collectif plutôt que de trancher l'autorialité après coup.

**La divulgation que vous ne pouvez pas vérifier.** Certaines déclarations seront incomplètes et certaines omissions infalsifiables. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] soutiennent que la détection par IA ne devrait pas être utilisée en éducation du tout, pour trois raisons qui touchent la formulation. La sortie d'un détecteur est une estimation probabiliste qui ne peut pas être vérifiée indépendamment, parce que l'origine réelle d'un texte est inconnue, si bien que la validation repose sur un raisonnement circulaire. Les scores de détecteur ne satisfont pas la norme de la balance des probabilités qu'exige une enquête d'[[academic-integrity|intégrité]]. Et la dichotomie humain contre IA n'a pas de sens pour un travail créé avec l'IA plutôt que par elle. Leur conclusion est que la détection « ne protège pas l'intégrité académique ; elle la sape ».

Ils signalent un problème de rédaction qui vaut d'être recopié dans votre passe de révision. Les règles restreignant l'usage de l'IA « en évaluation » ne précisent pas quand une évaluation commence, de sorte que la recherche, la planification ou la révision assistées par IA peuvent constituer ou non une infraction selon qui les lit. Nommez plutôt des preuves de processus que vous pouvez observer : un prompt et un journal d'interaction remis, un exercice produit dans la salle, une explication orale. Là où votre institution utilise quand même un détecteur, leurs avertissements sur le stockage des données, leur conservation et l'usage commercial du travail des étudiants s'appliquent, et l'objection relative à la [[privacy|vie privée]] soulevée par deux futurs enseignants est celle que vos étudiants soulèveront.

## Ce que les enseignants se trompent là-dessus

Une politique plus stricte est une politique plus sûre. Être plus strict que votre institution est courant et défendable, mais le coût de l'application est le vôtre, et une règle que vous ne pouvez pas appliquer de façon cohérente sur un cycle de notation est un problème d'équité. Coupez les règles que vous ne pouvez pas faire tourner.

Une interdiction est le message le plus court disponible. Dans les 27 politiques de futurs enseignants, l'ambiguïté résidait surtout dans les permissives, et 22 sur 27 n'abordaient jamais la lecture, laissant les étudiants inférer. Le participant de Kim et al. obéissait à une interdiction en la brisant et en s'en sentant mal.

La divulgation est un mécanisme de conformité. C'est un signal, et les signaux dépendent de la confiance. Qu et Wang ont constaté que les normes des pairs et le confort avec l'enseignant prédisaient mieux la divulgation que le raisonnement moral.

Un score de détecteur tranche un cas contesté. Il n'atteint pas la norme qu'une enquête d'intégrité doit respecter, et il ne peut pas distinguer un travail fait avec l'IA d'un travail fait par l'IA. Construisez le dossier sur du travail que vous avez observé.

Rédiger la politique, c'est la communication. Kim et al. ont trouvé cinq lieux où vit la politique réelle, et votre document est l'un d'eux. La version sur laquelle les étudiants agissent est assemblée à partir de ce que vous dites en classe et de ce que vous faites avec vos propres documents.

## Ce qui vous reviendra dessus

**« Les étudiants vont simplement le cacher. »** Certains le feront, et la question de conception est de savoir quels étudiants votre règle tente. La dissuasion passe par la **discrimination** d'un détecteur entre usage caché et travail légitime plutôt que par son taux de détection brut. Quand une sensibilité accrue produit plus de nouveaux faux positifs que de nouveaux vrais positifs, **une surveillance plus forte peut rendre la dissimulation relativement plus attrayante**, parce que les étudiants honnêtes sont pénalisés plus vite que les utilisateurs cachés ne sont identifiés. La permission et la divulgation sont deux leviers distincts : la permission déplace la frontière de l'usage acceptable, la divulgation change la visibilité. Diagnostiquez où votre tâche attire l'étudiant le plus tenté de dissimuler, et concevez pour cet étudiant.

**« Je ne veux pas interdire des outils que je ne peux pas détecter. »** Vous n'y êtes pas obligé. L'interdiction est l'une des quatre réponses de conception, avec la surveillance, l'usage permis avec divulgation et la refonte. La refonte change ce que la tâche récompense, et reste cosmétique si la grille d'évaluation note encore principalement le produit final. [[teaching-intro-ai-course-redesign-bill-of-rights-2026|Pisan (2026)]] montre les niveaux explicités : l'IA est bannie du cours d'introduction à la programmation, parce qu'externaliser les premières boucles retire ce qui est enseigné ; encouragée sur les projets de structures de données (Copilot permis) et bannie des examens sur papier ; aide à l'étude et à la révision dans le cours de systèmes de niveau supérieur ; et **obligatoire** dans le cours sur l'IA lui-même, où une seule frontière portait l'essentiel du poids. Le modèle peut écrire du code, et les réflexions doivent être dans la voix propre de l'étudiant. Les examens ont été entièrement supprimés, et l'évaluation s'est déplacée vers un travail qu'un modèle ne peut pas écrire en secret.

**« La politique de mon institution couvre déjà cela. »** Moins que vous ne le pensez. L'écart va dans les deux sens : 92% des plans de cours donnent des lignes directrices explicites, les règles locales s'écartent des orientations institutionnelles, et seules 47 institutions présentaient les deux niveaux détectables. Les achats, les données et les cycles de révision relèvent de [[institutional-ai-policy|Comment rédiger et mettre en œuvre une politique institutionnelle sur l'IA ?]], mais la traduction en classe vous revient. Nash et Burriss concluent que les institutions doivent outiller les enseignants pour résister autant que pour adopter, avec les conseils et le [[educational-development|développement professionnel]] qui permettent à un enseignant de refuser un usage précis de l'IA sans être dépeint comme en retard. Le technodéterminisme de leurs participants contredisait leurs propres engagements [[pedagogy|pédagogiques]]. Une politique institutionnelle ne couvre pas votre jugement.

**« Je n'ai pas le temps de réécrire le plan de cours ce mois-ci. »** Faites l'inventaire une fois, sur le devoir qui vous inquiète, et portez directement le résultat dans la feuille de devoir. La phrase du plan de cours peut attendre le prochain cycle de révision. De toute façon, les étudiants agissent sur la feuille de devoir.

## Quoi faire cette semaine

**1.** Inventoriez les tâches notées et écrivez « qu'est-ce que j'évalue précisément ? » à côté de chacune, avant de décider quoi que ce soit sur l'IA.

**2.** Décidez tâche par tâche, et vérifiez quelle réponse chaque décision rend la plus attrayante pour l'étudiant le plus tenté de dissimuler.

**3.** Rédigez la phrase de divulgation : un endroit, un format, un exemple travaillé d'attribution adéquate.

**4.** Nommez la preuve que vous accepterez en cas de litige (journal de prompts, travail en classe, compte rendu oral), et abandonnez toute règle que vous ne pouvez pas tester contre elle.

**5.** Énoncez la règle à voix haute au prochain cours, au moment où elle s'applique pour la première fois, avec une justification à côté de chaque restriction.

## Où aller ensuite

La gouvernance, la politique sur les données, les achats et les cycles de révision relèvent de [[institutional-ai-policy|Comment rédiger et mettre en œuvre une politique institutionnelle sur l'IA ?]] ; les règles institutionnelles et de district imposées se trouvent dans [[educational-policy-ai|Politique éducative et IA]] et [[governance|Gouvernance]]. Reconstruire la tâche pour qu'une note étaye encore une inférence défendable relève de [[redesign-assessment-ai-era|Repenser l'évaluation à l'ère de l'IA]], l'argument sur l'application figure dans [[reduce-ai-cheating|Comment réduire la tricherie par IA dans mon cours ?]], la décision sur les détecteurs dans [[should-we-use-ai-detectors|Devons-nous utiliser des détecteurs d'IA ?]], et le schéma d'étiquetage dans [[ai-assessment-scale-reform|Réforme de l'échelle d'évaluation de l'IA]].
