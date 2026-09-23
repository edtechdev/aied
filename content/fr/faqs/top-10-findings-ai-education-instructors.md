---
title: "Quels sont les 10 principaux résultats de la recherche sur l'IA en éducation que les enseignants devraient connaître ?"
created: "2026-09-22T19:14:36-04:00"
updated: "2026-09-22T19:14:36-04:00"
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
translation_of: faqs/top-10-findings-ai-education-instructors
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Quels sont les 10 principaux résultats de la recherche sur l'IA en éducation que les enseignants devraient connaître ?

On ne vous demande pas de devenir chercheur en IA. On vous demande de prendre des décisions pédagogiques ordinaires (ce qu'il faut autoriser dans un travail, ce qu'une note est censée prouver, ce que vos étudiants devraient savoir faire sans l'outil), et vous souhaitez qu'elles reposent sur autre chose que des opinions et les arguments de fournisseurs.

L'essentiel, à travers les recherches rassemblées dans cette base de connaissances : **la manière dont l'IA est intégrée à l'activité d'apprentissage décide si elle renforce la réflexion ou la remplace.** Il ne s'agit pas simplement d'« utiliser l'IA » ou d'« interdire l'IA », et les études qui sous-tendent ces résultats sont récentes, souvent à court terme et liées à des cours précis. Considérez-les comme les conseils les plus solides disponibles, et non comme une loi établie.

## La version courte

- Déterminez quelle réflexion la tâche doit construire, puis confiez à l'IA un rôle qui n'accomplit pas cette réflexion à la place de l'étudiant.
- Jugez la réussite à ce que les étudiants savent faire **plus tard, sans l'outil**, et non à la qualité apparente du travail maintenant.
- Utilisez l'IA comme tuteur, entraîneur ou critique bien plus que comme machine à réponses.
- Traitez une copie soignée comme une preuve faible d'apprentissage et recueillez aussi des preuves du processus.
- Fixez une règle explicite sur l'IA pour chaque travail important et dites **pourquoi** c'est cette règle.
- Apprenez aux étudiants à vérifier, questionner et contester les productions de l'IA. Cela ne se développe pas par la seule exposition.

## 1. Un travail qui semble meilleur avec l'IA ne prouve pas un meilleur apprentissage

Les étudiants peuvent produire un travail plus solide et finir plus vite avec l'[[generative-ai|IA générative]] tout en apprenant moins par eux-mêmes. La [[cognitive-offloading|décharge cognitive]] est le risque : elle nuit le plus à l'apprentissage lorsque l'IA effectue le raisonnement que l'étudiant était censé exercer. La distinction qui compte est celle entre *la performance en situation d'assistance* et *l'apprentissage démontré plus tard, sans assistance*.

L'ancrage le plus solide est une [[kumar-genai-computing-education-systematic-review-2026|revue systématique de 72 études évaluées par les pairs en enseignement de l'informatique]] : l'IA générative augmentait de façon fiable l'achèvement à court terme et réduisait le temps passé sur la tâche dans 36 études, le résultat le mieux répliqué de tout le corpus, mais ces gains d'efficacité « ne se transfèrent pas à une performance autonome » dans 21 études. Une [[yan-cognitive-outsourcing-genai-assessments-2026|étude menée auprès de 38 étudiants de premier cycle à l'aide d'entretiens de pensée à voix haute]] a constaté la même coupure dans leur façon réelle de travailler : 76.32% restaient dans un schéma à un seul tour du type demander–répondre–arrêter, et seulement 21.06% alternaient usage de l'IA et lecture et rédaction autonomes. Une [[critical-thinking-paradox-genai-learning-2026|étude de cadrage de 2026]] nomme ce schéma un paradoxe de la pensée critique : les notes et les productions peuvent monter alors que le travail mental qui produit un apprentissage durable diminue.

**En classe :** prévoyez au moins une tâche par unité où les étudiants récupèrent, expliquent, résolvent ou défendent des idées sans aucune IA, et notez ce travail.

## 2. L'IA mérite sa place comme tuteur, et non comme machine à réponses

Des décennies de [[intelligent-tutoring|recherche sur le tutorat intelligent]] pointent dans la même direction : diagnostiquer ce que l'étudiant comprend, poser des questions, donner des indices gradués, lui demander d'expliquer, fournir une rétroaction, au lieu de livrer la solution. Les travaux actuels sur les [[pedagogical-agent|agents pédagogiques]] tracent la même ligne entre *comportement d'enseignement* et *production de réponses*. L'[[thermomix-genai-education-analogy-2026|analogie de la machine de cuisine Thermomix]] rend cela concret : un même appareil peut soit faire la cuisine à votre place, et vous perdez alors la compétence, soit servir de partenaire d'essai pour des idées qu'il vous reste à comprendre. Ces modes correspondent au [[icap-framework|cadre ICAP]], qui prédit des apprentissages différents selon un usage passif, actif, constructif ou interactif.

Des travaux plus récents montrent le même principe à l'intérieur d'un outil étroit. Un [[structrag-diagram-reasoning-ai-tutoring|tuteur qui lit structurellement des schémas d'ingénierie]] a atteint un F1 de 93.0% au niveau des arêtes contre 89.3% d'exactitude sur le schéma entier, ce qui signifie qu'il peut nommer les connexions précises manquantes ou mal lues même lorsque le schéma entier est faux : une rétroaction sur laquelle l'étudiant peut agir, plutôt qu'un simple succès ou échec.

**En classe :** demandez aux étudiants de réclamer « un seul indice », « pose-moi des questions » ou « critique mon raisonnement », et faites de « résous ceci » le cas rare.

## 3. Ne lissez pas l'effort productif

L'[[productive-failure|échec productif]] est le résultat selon lequel les apprenants retiennent souvent davantage lorsqu'ils tentent un problème avant qu'on leur montre comment faire. Rendre l'apprentissage sans friction peut supprimer exactement le travail qui crée l'apprentissage. Dans l'[[yan-cognitive-outsourcing-genai-assessments-2026|étude par entretiens auprès de 38 étudiants]], le groupe le plus nombreux (n = 31) décrivait des objectifs de maîtrise mais travaillait par tours uniques et fragmentés, puis rapportait une sur-dépendance, une complaisance mentale et un oubli rapide ; un participant l'a formulé ainsi : « la vitesse à laquelle on l'oublie est elle aussi très rapide ». L'[[thermomix-genai-education-analogy-2026|analogie du Thermomix]] comprime le risque en cinq mots : avec un Thermomix, vous perdez la capacité de cuisiner.

**En classe :** utilisez une séquence **tentative → aide de l'IA → révision → réflexion** plutôt que d'ouvrir l'outil à la première seconde de chaque tâche.

## 4. Une rétroaction ne compte que lorsque l'étudiant en fait quelque chose

La [[ai-feedback-quality|rétroaction par IA]] peut être rapide, précise, extensible et acceptable pour les étudiants, y compris dans l'[[higher-ed|enseignement supérieur]]. Savoir si elle *enseigne* dépend de son exactitude, de son adéquation [[pedagogy|pédagogique]] et de la [[feedback-literacy|littératie de la rétroaction]] des étudiants, c'est-à-dire de leur capacité à juger une rétroaction et à agir en conséquence. Une [[mcinnes-salvaging-constructive-alignment-genai-2026|analyse critique de 14 documents d'orientation institutionnels]] avertit que les invites génériques produisent des acquis, des activités et des évaluations isolés les uns des autres : comme l'outil ne peut pas savoir à quel point un sujet est interconnecté, sa rétroaction reste générale au lieu d'être diagnostiquement précise.

Deux études de 2026 montrent à quel point les entrées influent sur la sortie. Dans une [[teacher-ai-literacy-prompt-feedback-quality-2026|étude sur la rétroaction par IA portant sur des objectifs d'apprentissage]], le modèle expliquait à lui seul 26.9% de la variation de la qualité de la rétroaction, et l'ajout de l'invite faisait monter ce chiffre à 42.8%, soit 15.9% de plus. La seule caractéristique d'invite qui comptait était la terminologie propre à la matière ; la remplacer par des paraphrases courantes dégradait nettement la rétroaction. Le choix du modèle comptait aussi : Claude 3 et Gemini Advanced produisaient une rétroaction nettement moins bien notée que ChatGPT-4. Par ailleurs, une [[llm-automated-grading-programming-comparison-2026|comparaison de 18 modèles de langue notant 6,081 copies de programmation]] a trouvé des notes moyennes allant de 0.290 à 0.608 selon le modèle, avec des taux d'accord exact aussi faibles que 0.20 pour certains et 0.74 au mieux.

**En classe :** demandez aux étudiants de confronter la rétroaction de l'IA à votre grille d'évaluation, de décider ce qu'ils acceptent ou rejettent, et d'expliquer ce qu'ils ont modifié.

## 5. La conception pédagogique compte plus que le modèle utilisé

Une comparaison entre un chatbot informé par la théorie qui étayait les explications des étudiants, d'une part, et ChatGPT ordinaire et un enseignement habituel, d'autre part, n'a trouvé aucune différence immédiate significative, mais quatre semaines plus tard, le groupe étayé retenait davantage de connaissances conceptuelles. C'est une seule étude, et non un effet universel, mais c'est l'illustration la plus claire du fait que **la conception peut l'emporter sur la capacité du modèle**. La [[kumar-genai-computing-education-systematic-review-2026|revue de 72 études]] aboutit à la même couche de conception : elle qualifie l'engagement critique envers les productions de l'IA de « mécanisme commun reliant chaque intervention efficace du corpus » et recommande un [[scaffolding|accès gradué]], c'est-à-dire l'introduction de l'IA générative seulement après démonstration d'une compétence de base.

**En classe :** concevez les activités d'IA autour de l'auto-explication, de la récupération en mémoire, de la comparaison, de l'argumentation, de l'enseignement ou de la critique plutôt que de la génération de contenu.

## 6. Cessez d'essayer de prendre l'IA en flagrant délit ; produisez plutôt des preuves d'apprentissage

Les détecteurs d'IA ont des problèmes de fiabilité et d'équité bien documentés, et le problème plus profond est celui de la [[assessment-validity|validité]] : une production soignée réalisée à la maison ne montre plus que la personne qui l'a rendue possède la compétence. Une politique pensée en termes de détection refroidit aussi les usages légitimes. Dans une [[zou-is-this-a-trap-student-teachers-genai-2026|étude à méthodes mixtes menée auprès de 85 futurs enseignants]], 62.4% refusaient d'utiliser l'IA générative même là où elle était autorisée, 41.5% de ceux qui refusaient citaient la peur d'être accusés de [[academic-integrity|plagiat]], et 9 interviewés sur 11 lisaient la politique permissive elle-même comme un piège.

De nouvelles données élèvent les enjeux du jugement automatisé. Dans une [[llm-grading-self-preference-bias-2026|étude portant sur 1,426 mémoires de psychologie couvrant dix années universitaires]], les quatre correcteurs automatiques ont tous attribué les notes les plus basses aux travaux rédigés par des étudiants et les plus hautes aux travaux rédigés par l'IA : 10 des 16 comparaisons atteignaient une ampleur telle que des écarts de cette taille sont rares dans la recherche en éducation, jusqu'à l'écart le plus grand observé. Le biais était le plus fort pour le texte entièrement produit par l'IA, ce qui signifie qu'un correcteur peut récompenser un texte pour son caractère machinique même lorsque ses consignes demandent de juger le contenu.

**En classe :** évaluez le processus en même temps que le produit : brouillons, raisonnements, critiques, soutenances orales, démonstrations, réflexions.

## 7. Une règle unique sur l'IA pour tous les travaux ne tiendra pas

Un cadre d'évaluation utile distingue trois cas : **restreindre l'IA** lorsque c'est la compétence autonome que vous mesurez, **étayer par l'IA** lorsqu'une aide bornée ne compromet pas cette compétence, et **exiger l'IA** lorsque la collaboration compétente entre humain et IA est elle-même ce que les étudiants doivent apprendre. L'[[zou-is-this-a-trap-student-teachers-genai-2026|étude sur les futurs enseignants]] montre pourquoi ces conditions doivent être explicites et cohérentes : seuls 37.6% des étudiants utilisaient l'IA générative autorisée, leurs choix suivaient la culture du programme et la [[assessment|conception de l'évaluation]] plus que l'autorisation d'un cours particulier, et leurs propres déclarations de divulgation sous-estimaient l'usage réel dans tous les cours.

**En classe :** énoncez la condition d'usage de l'IA pour chaque évaluation importante et expliquez pourquoi ce travail a cette règle.

## 8. La littératie en IA est bien plus que la rédaction de bonnes invites

Les cadres de l'enseignement supérieur traitent désormais la [[ai-literacy|littératie en IA]] comme une compréhension conceptuelle, une compétence opérationnelle, une [[critical-thinking|évaluation critique]], un jugement [[ethics|éthique]] et une conscience des limites, et non comme la seule [[prompt-engineering|ingénierie d'invites]]. Les étudiants doivent apprendre quand se méfier de l'outil, vérifier les affirmations, repérer les biais, reconnaître l'incertitude et rester responsables de leurs conclusions. La [[kumar-genai-computing-education-systematic-review-2026|revue sur l'enseignement de l'informatique]] est précise à ce sujet : l'ingénierie d'invites, la vérification des productions et l'analyse des erreurs de l'IA sont des compétences qui s'enseignent et qui ne se développent pas par simple exposition, et la vérification est la première de ses trois exigences de conception.

Deux études de 2026 menées auprès d'éducateurs montrent combien cela est loin d'être automatique. Chez des [[science-educators-ai-literacy-postqualification-2026|enseignants de sciences ayant déjà suivi une formation à l'IA]], la littératie en IA moyenne était de 16.7 sur 30, en dessous des 18.79 de l'échantillon de référence, et elle n'était liée ni à l'âge, ni au genre, ni aux années de service, ni à l'intensité de leur usage de l'IA. Une [[ai-tpack-mathematics-teacher-education-2026|enquête auprès de 412 futurs enseignants de mathématiques]] a trouvé une préparation à un stade précoce : les convictions pédagogiques obtenaient les scores les plus élevés (moyenne de 5.24 sur une échelle de 7 points) tandis que les connaissances techniques de l'IA obtenaient les plus faibles (4.23).

**En classe :** donnez aux étudiants des productions d'IA délibérément imparfaites et évaluez leur capacité à les vérifier, à les critiquer, à les améliorer et à les replacer dans leur contexte.

## 9. L'IA peut creuser les écarts même lorsque tout le monde y a accès

La [[digital-divide|fracture numérique]] suit désormais au moins trois lignes de partage : l'accès aux outils, la compétence à les utiliser, et le fait de savoir qui obtient réellement un résultat utile. La seule compétence d'invite crée un « privilège d'invite » où les utilisateurs plus expérimentés obtiennent de meilleures sorties du même système. La [[kumar-genai-computing-education-systematic-review-2026|revue de 72 études]] distingue deux mécanismes : un **écart de compétences**, où les étudiants dotés de [[prior-knowledge|connaissances préalables]] plus solides convertissent l'aide en gains durables tandis que les étudiants moins préparés la substituent à la pratique, et un **écart de ressources**, où un internet fiable et un accès payant soutiennent un meilleur usage des outils d'un établissement à l'autre. Seules six études du corpus examinaient directement l'équité, ce que les auteurs considèrent comme le problème.

Une [[co-learning-ai-agent-hidden-rules-2026|étude en quatre expériences sur des apprenants découvrant des règles cachées avec l'aide d'un agent d'IA]] a constaté que l'aide réduisait de 33–52% les coups nécessaires, mais que le bénéfice se concentrait chez les apprenants les plus faibles : les apprenants plus forts étaient largement inchangés. L'aide peut donc réduire un écart, mais seulement pour les étudiants qui s'y engagent, et non pour ceux qui n'en avaient déjà pas besoin.

**En classe :** ne laissez pas l'expérience préalable de l'IA devenir un prérequis caché. Assurez un accès [[equity-in-ai-education|équitable]], des exemples travaillés, un enseignement explicite, des alternatives et des aménagements.

## 10. Le jugement humain reste la part qui ne s'automatise pas

L'intégration de l'IA soulève des questions liées entre elles : biais, vie privée, transparence, [[agency|autonomie]] de l'apprenant, responsabilité et [[pedagogical-safety|sécurité pédagogique]]. Les enseignants ont donc besoin d'une [[teacher-ai-competency|compétence pédagogique en IA]] plutôt que d'une simple familiarité technique ; les revues sur la formation des éducateurs la décrivent comme un raisonnement pédagogique doublé d'un jugement critique et éthique. L'[[mcinnes-salvaging-constructive-alignment-genai-2026|analyse des documents d'orientation]] propose une réponse de conception concrète : un agent [[rag|augmenté par la recherche documentaire]], borné et configuré par l'institution, qui guide la réflexion sans fournir de réponses, signale les désalignements et passe la main à une personne dans les cas limites, une autorité « dérivée et bornée » plutôt qu'autonome.

Il existe désormais des preuves directes qu'il vaut mieux garder les personnes dans la boucle, et pas seulement devant elle. Un [[instructional-agents-multi-agent-course-gen|système de génération de supports de cours]] obtenait de meilleurs résultats lorsque des personnes restaient impliquées : le mode comportant le plus d'apports humains améliorait les scores des relecteurs de 0.5–0.9 points par rapport au mode entièrement autonome. Ses évaluateurs autonomes se comportaient aussi différemment des humains : les évaluateurs automatiques se regroupaient étroitement autour de 2.9–3.1 tandis que les évaluateurs humains se dispersaient davantage et discriminaient plus finement, si bien que les auteurs ont conservé le jugement humain comme signal de qualité principal.

**En classe :** maintenez les décisions pédagogiques et évaluatives lourdes de conséquences sous une [[human-in-the-loop-ai|supervision humaine]] réelle, en particulier lorsque l'exactitude, l'équité, la vie privée ou la progression des étudiants sont en jeu.

## Le schéma qui sous-tend les 10 résultats

**Une IA qui remplace la réflexion → plus risquée pour l'apprentissage.**
**Une IA qui suscite la réflexion → potentiellement précieuse pour l'apprentissage.**

Donc, au lieu de demander *« Les étudiants devraient-ils utiliser ChatGPT ? »*, posez trois meilleures questions :

**Quelle réflexion mes étudiants doivent-ils exercer ? → Quel rôle l'IA doit-elle jouer sans accomplir cette réflexion ? → Quelles preuves me montreront que l'étudiant l'a apprise ?**

Cela conduit à des activités telles que **essayer avant l'IA, l'IA comme tuteur [[socratic-method|socratique]], critiquer l'IA, comparer les solutions humaines et celles de l'IA, la rétroaction de l'IA complétée par le jugement de l'étudiant, les [[eportfolio|portfolios]] de processus et de courtes soutenances orales**, et cela éloigne du faux choix entre usage libre et interdiction générale.

## Ce que vous pouvez faire cette semaine

Choisissez un travail qui vous met mal à l'aise et apportez-lui deux changements : énoncez explicitement la règle d'usage de l'IA avec une justification en une ligne, et ajoutez un élément court, en classe ou enregistré, qui montre le raisonnement de l'étudiant en l'absence de toute IA. Cette paire suffit généralement à trancher la question de savoir si le travail mesure bien ce que vous vouliez mesurer, et elle ne vous coûte presque aucun temps de cours.

## Les objections que vous entendrez probablement

- **« Mes étudiants disent que l'IA les aide. »** Elle aide généralement pour le travail en cours ; le résultat porte sur ce qui reste après. Demandez-leur ce qu'ils savent encore faire sans aide et vous obtiendrez une autre réponse.
- **« Les outils de détection sont tout ce que nous avons. »** Ils sont peu fiables, ils jugent mal des travaux légitimes, et la peur qu'ils inspirent freine les usages autorisés : 41.5% des non-adoptants d'une étude citaient cette peur. Les preuves issues du processus sont plus solides et plus équitables.
- **« J'enseigne à 200 étudiants ; je ne peux pas lire les brouillons. »** Vous n'êtes pas obligé de tout lire. De courts contrôles oraux, des écrits en classe et des notes de réflexion sur l'interaction avec l'IA coûtent moins cher qu'une relecture complète des brouillons et sont bien plus diagnostiques.
- **« Je n'enseigne pas l'IA ; ce n'est pas ma matière. »** Les résultats présentés ici portent sur votre matière : c'est exactement lorsque l'IA effectue l'exercice que votre cours existe pour offrir qu'elle interfère.
- **« L'interdire est plus simple. »** Plus simple, et cela échoue généralement : dans une étude, l'adoption suivait la culture du programme plutôt que la politique d'un cours donné, et les déclarations de divulgation sous-estimaient l'usage réel dans tous les cours.

Pour la version de ces malentendus déclinée par partie prenante, voir [[addressing-common-misconceptions-ai-education|Comment aborder les idées fausses courantes sur l'IA en éducation ?]] ; pour les exigences de conception qu'impliquent les résultats 9 et 10, voir [[equity-ethics-pedagogical-safety-research|Comment la recherche sur l'IA en éducation doit-elle intégrer l'équité, l'accessibilité, la vie privée, l'éthique et la sécurité pédagogique ?]] et [[redesign-assessment-ai-era|Comment repenser l'évaluation à l'ère de l'IA ?]].

Une réserve importante : le corpus de preuves sur l'IA générative évolue rapidement. Il se compose en grande partie d'interventions courtes, d'études [[self-report-measures|autodéclarées]], d'une seule discipline ou de travaux émergents de 2025–2026, et les résultats issus de la recherche mature sur le [[intelligent-tutoring|tutorat intelligent]] sont en général plus solides que les affirmations concernant des [[conversational-ai|chatbots]] généralistes sans restriction. Méfiez-vous particulièrement des résultats qui ne montrent que **la satisfaction des étudiants, la vitesse d'exécution, la qualité de la production ou la performance immédiate en situation d'assistance** sans mesurer un apprentissage différé ou non assisté.
