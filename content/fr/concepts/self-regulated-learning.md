---
title: "L'apprentissage autorégulé"
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-10T03:05:31-04:00"
type: concept
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, llm, personalized-learning]
assessment: [formative-assessment]
connected_faqs: [reducing-over-reliance, study-with-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
connected_resources: [process-feedback]
translation_of: concepts/self-regulated-learning
source_updated: "2026-10-07T14:30:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> L'apprentissage autorégulé (self-regulated learning, SRL) décrit les apprenants comme des participants actifs qui peuvent façonner et développer leurs actions cognitives et comportementales avec succès. Les outils d'IA peuvent soit [[scaffolding|étayer]] le développement de l'apprentissage autorégulé, soit involontaireirement le court-circuiter en supprimant les exigences de régulation qui construisent l'expertise. ([[scheu-mobile-chatbot-journaling-motivation-2026]]) ([[stanford-evidence-base-ai-k12-2026]]) Les données probantes longitudinales aiguisent la distinction : l'usage réflexif autour d'un outil d'IA prédisait la pensée critique (β = 0,43) mais non le gain de connaissances, et le seul accès à l'outil ne changeait ni l'un ni l'autre. ([[melanou-genai-learning-dynamics-longitudinal-2026]])

## Questions à examiner

- L'apprentissage autorégulé décrit les apprenants gérant activement leur apprentissage en trois phases : la préparation (fixation d'objectifs, planification, sentiment d'efficacité personnelle), l'exécution (stratégie, auto-observation) et l'autoréflexion (évaluation, adaptation). Avant de lire, laquelle de ces phases faites-vous réellement bien — et laquelle escamotez-vous tout en sachant qu'il ne faudrait pas ?
- La tension centrale de la page : l'IA peut étayer l'autorégulation ou la court-circuiter en supprimant les exigences de régulation qui construisent l'expertise. Comment un outil qui rend une tâche plus facile peut-il aussi faire de vous un régulateur plus faible de votre propre apprentissage — et pouvez-vous ressentir la différence dans votre propre usage ?
- Les étudiants montrent souvent un « déficit de production » : ils possèdent des connaissances en autorégulation mais ne les déploient pas spontanément — demandant à un chatbot d'« extraire les idées principales » et escamotant entièrement la planification et le suivi. Vous êtes-vous surpris à faire l'équivalent cognitif de cela, tout en connaissant la meilleure stratégie ?
- Lorsqu'un soutien est présent, votre propre jugement peut disparaître du tableau : dans une étude de données de traces, c'était le soutien disponible, et non l'exactitude métacognitive de l'apprenant, qui déterminait la stratégie de révision choisie. Si une aide externe supplante votre lecture de votre propre apprentissage, lequel de ces jugements garderiez-vous délibérément entre vos mains ?
- La recherche a mis en évidence un « écart de [[trust-calibration|mauvaise calibration]] » : les étudiants peuvent *percevoir* davantage d'apprentissage avec l'IA générative tout en retenant moins — préférant l'IA à la prise de notes malgré une rétention plus faible. Si vous vous sentez productif en utilisant un outil, comment découvririez-vous jamais que vous n'apprenez pas réellement davantage ?
- Le fait que l'IA générative fonctionne comme un étayage, un raccourci ou un partenaire dépend davantage de la capacité de régulation de l'apprenant que de l'outil lui-même. Mais la page montre aussi que l'autorégulation tamponne — sans l'annuler — le préjudice du délestage cognitif profond. Que signifie cette réserve « tamponne sans annuler » pour la conception de meilleurs outils d'IA ?
- Fixez-vous un objectif avant de lire : choisissez une tâche pour laquelle vous utilisez régulièrement l'IA, et décidez à l'avance laquelle des trois phases d'autorégulation (préparation, exécution, réflexion) vous protégerez délibérément de l'automatisation. Quel résultat vous dira que cela a fonctionné ?

## Introduction

L'apprentissage autorégulé est le processus par lequel les apprenants gèrent activement leur propre apprentissage à travers trois phases interdépendantes :

1. **La préparation :** la fixation d'objectifs, la planification stratégique, les croyances en son [[self-efficacy|efficacité personnelle]]
2. **L'exécution :** le déploiement de stratégies, l'auto-observation, la focalisation de l'[[cognitive-psychology|attention]]
3. **L'autoréflexion :** l'[[self-assessment|auto-évaluation]], l'attribution causale, l'adaptation

Les apprenants autorégulés compétents emploient des stratégies cognitives pour améliorer la réussite et utilisent la [[metacognition|métacognition]] pour affiner continuellement leurs processus d'apprentissage. ([[scheu-mobile-chatbot-journaling-motivation-2026]])


Un travail empirique dans un cours médiatisé par la technologie confirme les liens entre phases : dans une étude de stochastique adaptative de huit semaines (194 étudiants), la valeur de la tâche, le sentiment d'efficacité personnelle, l'orientation vers les objectifs et les émotions positives dans la phase pré-actionnelle prédisaient le comportement de régulation actionnel tandis que les émotions négatives l'entravaient, et la satisfaction post-actionnelle alimentait en retour la phase pré-actionnelle suivante ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh et Fromm (2026)]]).

Une cartographie systématique de 84 études sur l'IA et l'autorégulation a montré que la recherche se concentrait sur les étudiants de l'enseignement supérieur et sur les aspects métacognitifs et cognitifs de l'autorégulation, la dimension motivationnelle étant peu explorée et plus d'un tiers des études ne spécifiant aucune théorie de l'apprentissage autorégulé ([[banihashem-ai-srl-systematic-mapping-review-2025|Banihashem et coll. (2025)]]).

De façon cruciale, l'apprentissage autorégulé autour de l'IA est façonné par la *perception* autant que par le comportement : [[yilmaz-genai-feedback-srl-online-higher-ed-2026|Yilmaz et coll.]] montrent que le fait que les étudiants perçoivent la rétroaction comme provenant de l'IA ou d'un humain affecte significativement leur apprentissage autorégulé et leur comportement de révision — un rappel que le cadrage social de l'IA, et pas seulement son contenu, change la manière dont les apprenants se régulent autour d'elle.


Un mode d'échec siège avant même que la régulation ne commence : la procrastination dans l'apprentissage assisté par l'IA générative — un retard inutile à entamer un travail soutenu par l'IA générative malgré une intention authentique de l'utiliser. Sur 1 243 étudiants chinois de premier cycle, un usage plus fréquent de l'IA générative s'accompagnait d'une moindre procrastination (β = −0,195), et l'anxiété d'apprentissage liée à l'IA générative renforçait le lien intention-retard ([[genai-learning-procrastination-planned-behavior-2026|Li et coll. (2026)]]).

Le point d'entrée de l'IA générative dans le cycle décide de son effet : en cartographiant les phases de préparation, d'exécution et de réflexion de Zimmerman sur des environnements médiatisés par l'IA, un cadre de co-agentivité soutient que le point d'entrée détermine si l'outil amplifie ou érode le sentiment de contrôle de l'apprenant, et que le délestage ne soutient l'apprentissage transformationnel que lorsque la décision est intentionnelle plutôt que routinière ([[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]]).


Un sondage transversal portant sur 434 étudiants de premier cycle en éducation spécialisée mesure une telle chaîne : la littératie à l'[[generative-ai|IA générative]] était positivement associée aux comportements d'apprentissage autorégulé assisté par l'IA générative (B total = 0,701), passant principalement par l'[[agency|agentivité]] d'apprentissage (B = 0,345) plutôt que par les émotions de défi (B = 0,061) ([[genai-literacy-srl-special-education-2026|Yang et coll. (2026)]]).

## Le soutien numérique à l'apprentissage autorégulé

### Les journaux d'apprentissage

Les journaux d'apprentissage sont une intervention prometteuse d'apprentissage autorégulé : en réfléchissant à leurs processus d'apprentissage, les étudiants accroissent la conscience de la cognition et renforcent la capacité de régulation. Considérations clés de conception :

- **La structure importe :** les journaux ouverts produisent souvent des entrées superficielles ; des invites guidées et des modèles d'exemple en améliorent la profondeur
- **La décroissance de la motivation :** les applications mobiles de journalisation voient communément un déclin rapide de l'[[student-engagement|engagement]] après quelques jours
- **Le compromis de l'étayage :** une assistance par IA qui rédige les réflexions à la place des étudiants mine la pratique d'autorégulation ; une assistance qui structure les invites sans rédiger le contenu la préserve

### Les tableaux de bord communiquant les profils d'autorégulation aux enseignants

[[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et coll. (2026)]] étendent le soutien numérique à l'apprentissage autorégulé au côté de l'enseignant : leur tableau de bord d'[[learning-analytics|analytique de l'apprentissage]] (DashED) communique aux enseignants de classes hybrides des profils d'apprentissage autorégulé dérivés de l'apprentissage automatique, et la manière dont les enseignants agissent sur ces profils dépend du contexte. En usage, les enseignants (universitaires) de classe inversée suivaient une exploration séquentielle et privilégiaient l'adaptation au niveau du cours et la présentation des [[visualization|tableaux de bord]] en classe, tandis que les enseignants professionnels revisitaient les pages de résumé et utilisaient l'outil principalement pour des séances de coaching individuel. Les actions que les enseignants proposaient étaient façonnées par le contenu représenté et leur niveau d'enseignement plutôt que par le type de graphique — les enseignants universitaires privilégiaient les tests hebdomadaires et l'adaptation du cours, les enseignants professionnels le coaching individuel direct. Cela positionne le tableau de bord comme un étayage de la régulation par les enseignants de leur enseignement, avec des besoins de conception qui varient selon le contexte plutôt qu'une interface unique optimale.

La contrepartie du côté de l'étudiant est plus clairsemée : un tableau de bord qui montrait à 46 lycéens leurs propres invites à l'IA générative et leur recouvrement textuel avec les réponses du modèle n'a été ouvert que par environ un tiers de la classe, faisant de l'exposition volontaire plutôt que de la visualisation elle-même la contrainte déterminante ([[learning-analytics-genai-secondary-writing-2026|Fong et coll. (2026)]]).

### L'expérience 2×2 de Scheu et coll. (2026)

Dans une expérience de terrain randomisée portant sur 179 étudiants pendant 22 jours, deux principes de conception ont été comparés :

| Principe | Mécanisme | Effet sur l'apprentissage autorégulé | Effet sur la motivation | Effet sur l'engagement |
|---|---|---|---|---|
| **Cours fondé sur l'exemple** | Journalisation réflexive d'un [[curriculum-design|programme]] [[teacher-role|enseignant]] sur 7 jours par des réponses modélisées | Augmentation de la compétence et du plaisir perçus | **Positif** | Positivité constante |
| **Assistant de journalisation à [[llm|grand modèle de langue]]** | GPT-3.5 résume les brouillons, pose des questions de clarification, suggère des reformulations | Aucun effet mesuré sur la compétence d'apprentissage autorégulé | **Aucun effet** | Croissant au fil du temps ([[feedback|boucle de rétroaction]]) |

**Éclairage clé :** le cours a amélioré les compétences d'apprentissage autorégulé *et* la motivation intrinsèque par le [[transfer-of-learning|transfert de compétences]], tandis que l'assistant a amélioré l'engagement sans affecter la motivation. ([[scheu-mobile-chatbot-journaling-motivation-2026]])

## Les outils d'IA et la boucle réciproque apprentissage autorégulé–motivation

Un principe fondamental de la théorie de l'apprentissage autorégulé est que les compétences d'auto-[[regulation|régulation]] et la [[motivation|motivation]] forment une **relation réciproque** :

- Un meilleur apprentissage autorégulé → un apprentissage plus réussi → un sentiment d'efficacité personnelle plus élevé → une motivation plus forte
- Une motivation plus élevée → un engagement plus efforté → une meilleure pratique d'apprentissage autorégulé

Les outils d'IA peuvent entrer dans cette boucle à différents points :

- **La conception mettant l'apprentissage autorégulé d'abord** (par exemple, cours structurés, indices gradués, invites de réflexion) : renforce la boucle en bâtissant une compétence authentique
- **La conception mettant l'engagement d'abord** (par exemple, complétion automatique, génération de contenu) : peut accroître l'engagement comportemental sans entrer dans la boucle de la motivation, risquant la dépendance à l'outil

### La régulation stratégique de l'IA générative comme apprentissage autorégulé

[[ai-anxiety-strategic-regulation-writing-2026|Kim (2026)]] recadre l'usage efficace de l'[[generative-ai|IA générative]] dans l'[[writing-education|écriture académique]] comme une **régulation stratégique** — une pratique d'apprentissage autorégulé mise en œuvre consistant à vérifier, réviser, adopter sélectivement ou rejeter les sorties de l'IA. Dans une étude à [[mixed-methods-research|méthodes mixtes]] portant sur 107 étudiants, une [[anxiety-and-stress|anxiété liée à l'IA]] plus élevée était positivement associée à la vérification et à la révision (β = ,24), tandis que la capacité évaluative prédisait la révision active et l'intégration sélective (β = ,46). Les étudiants se regroupaient en quatre types de régulation — Recours acritique (18,7%), Intégration sélective (34,6%), Transformation évaluative (31,8%) et Rejet stratégique (14,9%) — montrant que l'[[ai-literacy|littératie en IA]] dans l'[[higher-ed|enseignement supérieur]] fonctionne moins comme une acceptation que comme une compétence de régulation ancrée dans l'[[evaluative-judgment|jugement évaluatif]] et la responsabilité [[ethics|éthique]]. Cela positionne l'apprentissage autorégulé comme le mécanisme central distinguant l'usage critique de l'usage acritique de l'IA.

La gouvernance de l'outil est elle-même une facette mesurable : une validation en deux vagues menée auprès d'apprenants chinois d'anglais langue étrangère (EFA N = 305 ; CFA N = 342) sépare six dimensions de régulation et nomme la *régulation environnementale* — vérifier l'exactitude des sorties générées, filtrer les ressources suggérées et fixer des limites à la dépendance — comme une dimension à part entière ([[genai-srl-l2-writing-scale-2026|Wang, Zhang et Zhang (2026)]]).


Classer avant de déléguer : [[scan-framework-task-assignment-generative-ai-2025|Tsim et Gutoreva (2025)]] transforment l'autorégulation en un protocole par tâche — étiqueter chaque sous-tâche Substitute, Complement, Aid ou Non-negotiable, le justifier dans une brève note métacognitive, et conserver une piste d'audit des invites, des brouillons et des révisions humaines — le cycle se répétant de sorte que l'assignation d'une tâche éclaire la suivante.

**L'interaction elle-même comme objet de régulation.** [[brunnstrom-ai-interaction-literacy-srl-2026|Brunnström et Palmqvist (2026)]] documentent la même exigence de régulation dans la direction opposée : dans une démonstration de huit tours employant un chatbot pour préparer la réponse à un [[summative-assessment|examen]] à domicile, la sortie par défaut de l'IA restait à l'extrémité *[[quantitative-research|quantitative]]*, multistructurale de la taxonomie SOLO — polie, prête à être soumise et pédagogiquement mince — et n'atteignait une boucle d'apprentissage utilisable en trois étapes qu'après des interventions répétées au niveau méta (« c'est accablant, peux-tu condenser ? »). Leur conclusion est qu'un usage productif exigeait « les compétences d'autorégulation même que l'outil était censé soutenir » : l'apprenant doit fixer des objectifs incrémentaux, demander des ajustements de difficulté, et réfléchir à ce qui n'est pas encore compris, en plus du contenu disciplinaire lui-même. Ils nomment cette capacité la [[ai-literacy|littératie d'interaction avec l'IA]] et traitent le désengagement de l'outil comme une décision de régulation légitime plutôt que comme un échec de persévérance ([[metacognition|métacognition]]).

- **La satisfaction n'est pas de l'autorégulation.** [[aigc-affordance-student-self-regulation-2026|Liang et coll. (2026)]] ont sondé 689 étudiants de premier cycle dans des programmes d'articulation industrie-éducation et testé un modèle de médiation en série dans lequel les affordances perçues des contenus générés par l'IA accroissent le sentiment d'[[self-efficacy|efficacité personnelle]] à leur égard (beta = 0,583) et, par lui, la [[motivation|motivation]] d'apprentissage (beta = 0,565) et l'apprentissage autorégulé (beta = 0,250), la motivation étant le prédicteur unique le plus lourd de l'apprentissage autorégulé (beta = 0,527). Les résultats négatifs porteurs siègent aux côtés de ces chemins : la qualité de la rétroaction d'évaluation par IA prédisait fortement la satisfaction (beta = 0,712) mais pas le sentiment d'efficacité personnelle (beta = 0,131), et la satisfaction n'avait pas d'effet significatif sur l'apprentissage autorégulé (beta = 0,032). Un assistant bien apprécié et bien fonctionnant n'est donc pas la preuve que la régulation s'est améliorée — le mécanisme passe par la confiance et la motivation, non par l'expérience que l'apprenant a de l'outil.

### La réflexion consciente de l'IA générative comme apprentissage autorégulé

[[5p-reflection-model-genai-2026|Le modèle de réflexion 5P (Kadel et coll. 2026)]] recentre la réflexion structurée à l'ère de l'IA générative comme une pratique d'apprentissage autorégulé mise en œuvre. Parce que les apprenants co-créent de plus en plus le sens avec l'IA, les modèles de réflexion traditionnels peinent à authentifier la réflexion étudiante, si bien que le modèle 5P (Purpose, Process, Product, Pitfalls, Plan) fusionne la fixation d'objectifs menée par la préparation, la réflexion dans l'action (documenter les invites et les itérations), la réflexion sur l'action (valider la sortie probabiliste contre des sources externes), une étape explicite de pièges pour l'[[hallucination-risk|hallucination]], le [[academic-integrity|plagiat]] et la [[cognitive-offloading|dépendance excessive]], et un plan tourné vers l'avenir — en intégrant le suivi émotionnel tout au long. Sa philosophie du « processus plutôt que produit » traite la documentation structurée de l'[[human-ai-collaboration|interaction humain-IA]] comme l'exigence de régulation qui préserve l'authenticité, l'[[agency|autonomie]] et la profondeur [[metacognition|métacognitive]], positionnant la réflexion consciente de l'IA générative comme un étayage de l'autorégulation plutôt qu'un substitut à celle-ci.

## Relation à la conception propre au tutorat

L'outil d'IA propre au tutorat s'aligne sur la conception mettant l'apprentissage autorégulé d'abord : il fournit des étayages gradués qui préservent l'[[agency|autonomie]] et exigent une autorégulation stratégique. L'IA généraliste supprime souvent les exigences de régulation entièrement. ([[stanford-evidence-base-ai-k12-2026]])

Par exemple :
- Le chatbot [[conversational-ai|conversationnel]] propre au tutorat de Bastani et coll. préservait le raisonnement étape par étape (exigence d'autorégulation)
- La variante GPT généraliste fournissait simplement des réponses (contournement de l'autorégulation)

## Données probantes selon les contextes

- **Données probantes mixtes et écart de mauvaise calibration.** Une revue rapide de la recherche sur l'IA générative du préscolaire à la 12e année montre que les gains métacognitifs pendant les tâches soutenues ne persistent souvent pas lorsque le soutien est retiré, et que l'IA générative peut accroître l'[[self-report-measures|apprentissage perçu]] même lorsqu'un apprentissage durable est absent (l'écart de mauvaise calibration — les étudiants préféraient l'IA générative à la prise de notes malgré une rétention plus faible). Les étudiants ont besoin d'une formation explicite et appropriée à leur stade pour décider quoi déléguer et quand l'effort indépendant importe. ([[young-people-learning-generative-ai-rapid-review-2026]])
- **Tension entre initiative [[agentic-ai|agentique]] et autorégulation.** [[agentic-ai-pedagogical-best-practice-2026|Woollaston et coll. (2026)]] notent que, plus les agents automatisent une tâche, moins l'apprenant accomplit de travail cognitif autorégulé — si bien que les conceptions devraient donner aux apprenants le contrôle sur l'initiation des agents (étayage dynamique, à atténuation) pour préserver la capacité d'autorégulation plutôt que de l'externaliser.
- **L'autorégulation façonne l'usage des assistants de codage par IA.** [[computational-thinking-aica-2026|Une étude des assistants de codage par IA]] a montré que les étudiants à haute [[computational-thinking|pensée informatique]] montraient une cohérence autorégulatoire plus forte (planification-exécution-autoréflexion) et employaient l'assistant pour comprendre le code, tandis que les étudiants à faible pensée informatique l'employaient pour la récupération immédiate de réponses.
- **L'apprentissage autorégulé co-advient avec une moindre distraction numérique dans l'[[online-teaching-and-learning|apprentissage en ligne]].** [[decreasing-digital-distraction-college-online-learning-2026|Shi et coll. (2026)]], employant l'exploration de données non supervisée sur 530 étudiants de collège, ont montré que les stratégies d'apprentissage autorégulé — fixation d'objectifs, structuration de l'environnement et gestion du temps — co-advenaient le plus constamment avec une moindre distraction numérique dans l'[[higher-ed|apprentissage en ligne]], aux côtés de l'engagement apprenant-enseignant et apprenant-contenu. Le résultat positionne la formation concrète à l'apprentissage autorégulé comme une intervention à fort levier pour une étude en ligne concentrée.
- **La conscience métacognitive, et non l'accès à l'outil, est le moteur le plus fort de la performance adaptative en STIM.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai et Alshahri (2026)]] ont construit et validé l'AI-STEM-MLCS auprès de 649 lycéens en Arabie saoudite (CFI = 0,983, RMSEA = 0,019 ; ω de McDonald = 0,888 à 0,905) et ont montré que ses quatre dimensions expliquaient 68% de la variance de la performance d'apprentissage autorégulé (R² = 0,68). La conscience métacognitive fondée sur l'IA était le prédicteur le plus fort (β = 0,38, p < 0,001), suivi du transfert cognitif et de l'adaptabilité (β = 0,29, p = 0,008) et de l'apprentissage autorégulé renforcé par l'IA (β = 0,21, p = 0,040), tandis que le raisonnement créatif et critique en STIM ne prédisait pas le critère (β = 0,14, p = 0,135). Les auteurs lisent le schéma comme la preuve qu'une rétroaction [[adaptive-learning|adaptative]] accroît la performance en STIM principalement en poussant les apprenants à examiner les erreurs, à recalibrer et à réutiliser les stratégies, si bien que l'instrument fonctionne mieux comme un diagnostic qui localise les lacunes de méta-apprentissage que comme un score global unique. C'est une mesure d'[[self-report-measures|auto-déclaration]] validée dans un seul système national, si bien que les coefficients sont provisoires.
- **Un soutien externe peut contourner le propre jugement métacognitif de l'apprenant.** [[iqbal-human-genai-support-essay-revision-2026|Iqbal et coll. (2026)]] ont suivi 87 étudiants d'anglais langue étrangère révisant une dissertation sous un soutien d'[[generative-ai|IA générative]] (ChatGPT 4.0), d'expert humain, ou sans soutien. La condition de soutien était de loin le corrélat le plus fort de la stratégie de révision choisie par un étudiant (V de Cramér = 0,668), bien avant le report de la tâche d'écriture précédente (V = 0,333), tandis que l'exactitude du jugement métacognitif (p = 0,172), la compétence rédactionnelle (p = 0,261) et la [[motivation|motivation]] (p = 0,683) n'étaient pas associées. Le jugement métacognitif ne suivait la stratégie que lorsqu'aucun soutien n'était disponible (test de permutation p = 0,0460). Les étudiants bénéficiant du soutien de l'IA générative ont gagné le plus (environ 4 points en moyenne sous la stratégie de recherche d'aide décroissante, contre −0,5 point pour la même stratégie sous soutien d'expert humain), or aucune stratégie de révision n'était associée au changement de score (H(3) = 3,895, p = 0,273), si bien que les gains venaient de l'outil plutôt que d'une meilleure autorégulation. L'orientation des auteurs est que l'IA générative devrait pousser à la réflexion sur sa propre stratégie de révision au lieu de fournir une aide directe.
- **L'usage réflexif suit la pensée critique, non le gain de connaissances.** [[melanou-genai-learning-dynamics-longitudinal-2026|Melanou et coll. (2026)]] ont suivi trois classes parallèles d'étudiants en informatique de gestion (N = 87) sur un cours de neuf semaines, les connaissances augmentant dans chaque groupe (F(1, 50) = 29,87, p < 0,001, η²p = 0,374) sans avantage de l'IA, sans interaction Temps × Groupe, et sans effet Matthieu (F(1, 48) = 2,46, p = 0,124 ; BF01 = 8,70). L'usage réflexif (vérifier les sources et valider les sorties de l'IA avant de les adopter) était nettement plus élevé dans la condition IA (3,72 contre 2,82 ; F(1, 40) = 20,21, p < 0,001) et prédisait la pensée critique (β = 0,43, p < 0,001) mais non le gain de connaissances, que prédisait la charge cognitive pertinente (β = 0,51, p = 0,001). La lecture pratique est que l'accès à l'IA n'est pas en soi une intervention, et que son gain métacognitif apparaît dans la qualité du raisonnement avant d'apparaître dans les scores de test.

## L'apprentissage autorégulé médiatisé par les grands modèles de langue : étayage, raccourci ou partenaire ?

Une grappe d'études Learning Letters (2026) converge vers une tension centrale : l'[[generative-ai|IA générative]] peut étayer, court-circuiter ou faire équipe avec l'autorégulation selon la conception et la manière dont les apprenants régulent son usage. Les données probantes désignent l'apprentissage autorégulé lui-même — non l'outil — comme la variable décisive.

- **[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et coll.]]** montrent que les grands modèles de langue sont tissés dans un *écosystème de [[help-seeking|recherche d'aide]] en couches* plutôt qu'ils ne remplplacent le soutien humain : les étudiants essaient d'abord les tâches de façon indépendante, puis consultent ChatGPT comme première étape à faible barrière, les pairs pour la négociation conceptuelle, et les enseignants pour les questions à fort enjeu. Ils privilégient la **recherche d'aide instrumentale** (indices, guidage étape par étape) à la **recherche d'aide exécutive** (solutions directes), exerçant une [[trust|confiance]] sélective et validant les sorties contre les matériaux de cours — un processus en quatre étapes (décider si une aide est nécessaire, choisir à qui la demander, déterminer le type d'aide, juger l'aide reçue) qui peut être mesuré et enseigné.
- **[[atif-dickson-deane-scaffold-shortcut-genai-srl-2026|Atif et Dickson-Deane]]** cadrent l'usage de l'IA générative comme un [[cognitive-offloading|délestage cognitif]] qui peut être soit *étayé* (les apprenants critiquent et adaptent les sorties de l'IA, conservant l'[[agency|autonomie]] et la construction de sens) soit *substitutif* (les apprenants acceptent les sorties avec une vérification minimale, transférant le contrôle à l'outil). Dans une étude portant sur 267 étudiants de troisième cycle en technologies de l'information, le même outil pouvait étayer ou escamoter l'apprentissage autorégulé selon la stratégie de l'apprenant — les utilisateurs confiants montraient de l'autonomie dans la fixation d'objectifs et le suivi ; les utilisateurs moins confiants voyaient l'IA générative comme un raccourci ou une faute.
- **[[lim-bannert-student-regulation-genai-chatbot-2026|Lim et Bannert]]** montrent concrètement le risque : les étudiants ont volontairement employé un chatbot d'IA générative (73%) et obtenu de meilleures notes aux dissertations, mais ils ont délesté la compréhension et la synthèse (demandant au chatbot d'« extraire uniquement les idées principales ») et ne se sont presque pas livrés à de planification ou de suivi — externalisant des décisions de régulation clés. Cela reflète un **déficit de production** : les étudiants possèdent des connaissances en apprentissage autorégulé mais ne les déploient pas spontanément, si bien que les outils d'IA générative devraient pousser à la réflexion (un étayage de suivi) lorsque les requêtes indiquent un délestage.
- **[[song-genai-learning-partner-srl-over-time-2026|Song et coll.]]** montrent que l'apprentissage autorégulé est à la fois une **aptitude stable et un état dynamique** : les lignes de base individuelles sont constantes, mais les connaissances métacognitives et le [[well-being|bien-être]] déclinent systématiquement au cours d'un semestre, sous l'effet des échéances d'évaluation. Ils montrent que l'IA générative peut agir comme un [[pedagogical-agent|partenaire d'apprentissage]] conscient du contexte lorsqu'on lui fournit des données personnelles, temporelles et contextuelles — soutenant les étudiants sans remplacer leur effort. Cela plaide contre une [[personalized-learning|personnalisation]] « unique pour tous » fondée sur la seule aptitude de référence.
- **[[de-barba-srl-genai-2026|de Barba]]** étend théoriquement l'apprentissage autorégulé, soutenant que le champ s'est rétréci à une régulation centrée sur la tâche et à des substituts comportementaux optimisables dans les technologies éducatives. L'article propose un compte rendu à échelles croisées de l'**autonomie de l'apprenant** — la régulation (au sein des tâches), l'intégration (à travers le temps et les contextes) et le positionnement (de façon critique par rapport aux conditions qui cadrent l'apprentissage) — comme orientation de conception pour les environnements médiatisés par l'algorithme.
- **L'autorégulation tamponne le préjudice du délestage sans l'annuler.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] montre que l'écriture autorégulée atténue — sans l'éliminer — l'association négative entre le [[cognitive-offloading|délestage cognitif]] profond et les résultats indépendants sans IA dans l'écriture assistée par l'IA générative : l'interaction délestage par apprentissage autorégulé était positive (B = 0,22), aplatissant le préjudice d'une pente de −0,54 (faible apprentissage autorégulé) à −0,33 (apprentissage autorégulé élevé) sans l'annuler. Une condition de soutien borné associant des limites de délégation à une réflexion obligatoire a produit la performance indépendante la plus forte, la preuve qu'une régulation métacognitive protège partiellement les apprenants sans pouvoir pleinement compenser la délégation du travail cognitif lui-même.

**Où se situe la « location » dans les modèles de Winne.** [[rented-self-decoupling-performance-becoming-2026|de Barba (2026)]] cartographie le mécanisme sur l'apprentissage autorégulé comme des opérations que le système accomplit à la place de l'apprenant : le repérage, le suivi et le jugement évaluatif sont exercés par l'outil, une impasse est résolue par la recherche plutôt que par le propre choix If-Then, Else de l'apprenant, et les normes par lesquelles l'apprenant juge sont empruntées plutôt que construites. Une capacité qu'un apprenant croit détenir tandis que l'outil la détient — la *location cachée* — supprime le signal d'erreur qui pousserait autrement à la régulation, et dix propositions spécifient ce qu'il faut tester, y compris des coûts plus importants dans l'acclimatation au domaine et une dérive des normes vers les points de référence propres du modèle.

La leçon collective : **l'apprentissage autorégulé est le mécanisme central distinguant l'usage critique de l'usage acritique de l'IA.** Le fait que l'IA générative fonctionne comme un étayage, un raccourci ou un partenaire dépend de la capacité de régulation des apprenants et de la question de savoir si les outils sont conçus pour préserver (plutôt que pour supprimer) les exigences de régulation qui construisent l'expertise.


C'est le soutien en jeu qui décide du médiateur qui porte l'association : sur 3 003 enseignants en formation chinois, le soutien perçu des outils d'IA menait à la compétence innovante principalement par le sentiment d'[[self-efficacy|efficacité personnelle]] à l'égard de l'IA (60,88% de l'effet total de ce chemin), tandis que le soutien perçu de l'environnement intelligent scolaire y menait principalement par l'apprentissage autorégulé (29,64% contre 18,60%) ([[preservice-teachers-ai-support-innovative-competence-2026|Liu et coll. (2026)]]).

## Implications

- **Pour les outils de journalisation et de chatbot :** combiner l'enseignement d'apprentissage autorégulé (en cours) à un soutien rédactionnel facultatif pour obtenir à la fois les gains de motivation et d'engagement
- **Pour les concepteurs d'outils :** faire de l'évaluation une étape obligatoire, et non facultative. Iqbal et coll. ont montré que c'était le soutien disponible, et non le jugement métacognitif de l'apprenant, qui décidait de la stratégie de révision employée par les étudiants et que les gains de score de l'IA générative ne venaient pas d'une meilleure régulation, tandis que Melanou et coll. ont montré que l'usage réflexif prédisait la pensée critique là où le simple accès à l'outil ne le faisait pas. Ce sont les interactions qui demandent aux apprenants de vérifier, comparer et repenser leur stratégie qui portent la valeur d'apprentissage.
- **Pour les enseignants :** traiter la conscience métacognitive fondée sur l'IA comme le premier levier et la vérifier explicitement. Alatoai et Alshahri l'ont trouvée le plus fort prédicteur de la performance adaptative en STIM (β = 0,38) et ont trouvé le transfert et l'adaptabilité en deuxième position (β = 0,29), si bien que les activités qui font examiner les erreurs aux étudiants et portent une stratégie dans un nouveau contexte de problème font davantage qu'une sollicitation générale de raisonnement critique ou créatif.
- **Pour la [[educational-policy-ai|politique d'IA]] :** les critères d'approvisionnement devraient demander si un outil développe ou déplace l'autorégulation
- **Pour les [[research-methods-aied|chercheurs]] :** les études à long terme mesurant les résultats d'apprentissage autorégulé (et pas seulement la performance immédiate) sont essentielles ; Melanou et coll. montrent le gain de cette patience, puisque l'usage réflexif d'un semestre a déplacé la pensée critique (β = 0,43) sans déplacer le gain de connaissances.


## Les agents conversationnels et l'apprentissage autorégulé dans les jeux de simulation

- **Les agents conversationnels soutenant l'apprentissage autorégulé dans les jeux.** Wenzel, Geiger et Liening (2026) montrent qu'un agent conversationnel d'IA (Lara) dans un jeu de [[simulation|simulation]] d'entreprise peut soutenir l'apprentissage autorégulé par une rétroaction formative fondée sur des [[formative-assessment|métriques]], un guidage à la demande et une réflexion structurée — répondant à la limite commune que les jeux de simulation fournissent une rétroaction formative et des invites de réflexion limitées. Les évaluations menées auprès d'étudiants enseignants et de participants au BSG ont rapporté des perceptions positives de la présence cognitive et [[community-of-inquiry|sociale]] de l'agent et de son soutien à l'autorégulation.

## Concepts liés

- [[learners]] — Les apprenants : le parapluie des concepts du côté de l'apprenant
- [[metacognition]] — le suivi cognitif sur lequel s'appuie l'apprentissage autorégulé
- [[self-assessment]]
- [[self-efficacy]] — une croyance de la phase de préparation qui pilote l'effort
- [[scaffolding]] — un soutien gradué qui préserve l'exigence de régulation
- [[feedback]] — l'entrée autour de laquelle les apprenants se régulent
- [[feedback-literacy]] — la capacité d'agir sur la rétroaction
- [[help-seeking]] — un comportement stratégique d'apprentissage autorégulé
- [[motivation]] — le partenaire réciproque de l'autorégulation
- [[cognitive-offloading]] — le risque lorsque l'IA supprime le travail de régulation
- [[generative-ai]] — la technologie qui peut étayer ou court-circuiter l'apprentissage autorégulé
- [[ai-literacy]] — la compétence de régulation dans l'usage de l'IA
- [[self-directed-learning]] — le construit d'autonomie plus large
- [[agency]] — la capacité de l'apprenant d'agir avec intention, centrale pour la régulation, l'intégration et le positionnement
- [[adaptive-learning]] — une personnalisation qui peut soutenir la régulation
- [[formative-assessment]] — une rétroaction continue pour la régulation
- [[learning-by-teaching]] — une stratégie qui construit l'autorégulation
- [[intelligent-tutoring]] — des systèmes qui étayent l'apprentissage autorégulé
- [[llm]] — le modèle sous-jacent des outils d'IA
- [[retrieval-spacing-interleaving]] — la planification, l'auto-évaluation et les choix de stratégie d'étude que font les apprenants
- [[cognitive-surrender]]

## Articles liés
- [[aigc-affordance-student-self-regulation-2026]] — Affordance des contenus générés par IA et autorégulation étudiante
- [[brunnstrom-ai-interaction-literacy-srl-2026]] — Littératie d'interaction avec l'IA : orienter un chatbot exigeait l'apprentissage autorégulé qu'il était censé soutenir (Brunnström et Palmqvist 2026)
- [[5p-reflection-model-genai-2026]] — Le modèle de réflexion 5P pour l'ère de l'IA générative (Kadel et coll. 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Délestage cognitif sensible aux couches dans l'écriture assistée par l'IA générative (Chen 2026)
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[de-barba-srl-genai-2026]] — L'autonomie de l'apprenant à différentes échelles : régulation, intégration, positionnement
- [[rented-self-decoupling-performance-becoming-2026]] — Le soi loué : la location cartographiée sur les modèles d'apprentissage autorégulé de Winne, avec dix propositions et des indices intra-apprenant
- [[song-genai-learning-partner-srl-over-time-2026]] — L'IA générative comme partenaire d'apprentissage conscient du contexte au fil du temps
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — Comment les étudiants régulent l'apprentissage avec un chatbot d'IA générative
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]] — Étayage ou raccourci ? Le double rôle de l'IA générative dans l'apprentissage autorégulé
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — La recherche d'aide médiatisée par les grands modèles de langue en STIM : en couches, instrumentale et validée
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[banihashem-ai-srl-systematic-mapping-review-2025]]
- [[yilmaz-genai-feedback-srl-online-higher-ed-2026]] — Rétroaction par IA générative et apprentissage autorégulé : la source perçue importe
- [[ai-anxiety-strategic-regulation-writing-2026]] — De l'anxiété liée à l'IA à la régulation stratégique
- [[young-people-learning-generative-ai-rapid-review-2026]] — Données probantes mixtes sur la métacognition et l'autorégulation avec l'IA générative
- [[agentic-ai-pedagogical-best-practice-2026]] — L'IA agentique et la tension avec l'autorégulation
- [[decreasing-digital-distraction-college-online-learning-2026]] — L'apprentissage autorégulé et une moindre distraction numérique dans l'apprentissage en ligne (Shi et coll. 2026)
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Rendre les résultats de l'apprentissage automatique accessibles aux enseignants de classes hybrides
- [[scan-framework-task-assignment-generative-ai-2025]] — SCAN : une boucle tournée vers l'apprenant d'identification, de justification et de réflexion post-tâche
- [[learning-analytics-genai-secondary-writing-2026]] — Employer l'analytique de l'apprentissage pour soutenir l'écriture des lycéens avec l'IA générative
- [[alatoai-ai-learning-environments-self-regulation-2026]] — Un instrument validé pour l'autorégulation assistée par IA dans l'apprentissage adaptatif en STIM, avec la conscience métacognitive comme plus fort prédicteur
- [[iqbal-human-genai-support-essay-revision-2026]] — La condition de soutien, et non le jugement métacognitif, a piloté le choix de stratégie de révision dans une expérience de révision de dissertation
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — Longitudinal : l'usage réflexif de l'IA prédisait la pensée critique mais non le gain de connaissances, sans effet Matthieu

- [[genai-literacy-srl-special-education-2026]] — La littératie à l'IA générative liée aux comportements d'apprentissage autorégulé principalement par l'agentivité d'apprentissage
- [[preservice-teachers-ai-support-innovative-competence-2026]] — Le type de soutien inverse le médiateur : sentiment d'efficacité personnelle à l'égard de l'IA contre apprentissage autorégulé
- [[genai-learning-procrastination-planned-behavior-2026]] — La procrastination dans l'apprentissage assisté par l'IA générative : un écart intention-comportement que l'anxiété renforce
- [[genai-srl-l2-writing-scale-2026]] — Une échelle GenAI-SRL validée à six dimensions pour l'écriture en L2, avec la régulation environnementale comme dimension propre et une forme courte de 12 items optimisée par colonies de fourmis
