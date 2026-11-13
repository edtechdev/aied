---
title: "Tutorat affectif"
created: "2026-05-07T10:44:35-04:00"
updated: "2026-11-12T23:30:00-05:00"
type: concept
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [adaptive-learning, affective-computing, generative-ai, intelligent-tutoring, llm]
audience: [learners]
level: [k 12, higher ed]
confidence: medium
translation_of: concepts/affective-tutoring
source_updated: "2026-11-04T13:20:00-05:00"
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

> Intégrer la conscience émotionnelle aux systèmes de [[intelligent-tutoring|tutorat par IA]] peut produire des gains [[pedagogy|pédagogiques]] mesurables, mais la même sophistication [[affective-computing|affective]] risque d'amplifier les préjudices si l'autonomie de l'apprenant est érodée par une automatisation qui semble empathique.([[kar-mathbuddy-affective-math-tutoring-2025]])([[favero-critical-ai-tutors-empower-enslave-2025]])

## Questions à examiner

- Un tuteur affectif qui perçoit vos émotions et y répond peut améliorer les résultats — une étude a gagné un taux de victoire supérieur de 23 points face à un tuteur non affectif. Mais que pourrait coûter cette réactivité émotionnelle à l'autonomie propre de l'apprenant ?
- L'empathie d'un tuteur peut sembler bienveillante, mais elle peut aussi créer une dépendance parasociale ou masquer un désengagement [[metacognition|métacognitif]]. Comment savoir si se sentir compris par une machine vous aide à apprendre ou vous rend dépendant d'elle ?
- Un tutorat trop bienveillant peut supprimer la frustration qui alimente les [[desirable-difficulties|difficultés souhaitables]] et la lutte productive. Quand le réconfort émotionnel aide-t-il l'apprentissage, et quand le court-circuite-t-il ?
- Le suivi facial signale l'attention, mais soulève de véritables inquiétudes en matière de vie privée. Que voudriez-vous savoir avant qu'un tuteur ne suive vos expressions faciales pendant votre apprentissage ?
- Les principes de conception suggèrent que les données affectives doivent informer, et non remplacer, l'autonomie de l'apprenant — vous devriez contrôler ce que vous divulguez et savoir quand vos émotions sont inférées. Comment vous sentiriez-vous si un tuteur changeait discrètement de stratégie d'après votre humeur détectée ?
- Les étudiants peuvent attribuer le soutien émotionnel d'un tuteur d'IA à une véritable relation, ce qui renforce la dépendance à son égard. Quelle différence y a-t-il entre un tuteur qui se soucie réellement et un qui est conçu pour donner l'impression de s'en soucier ?

## Introduction

Le tutorat affectif constitue la moitié pédagogique de l'[[affective-computing|informatique affective]] : une fois qu'un système dispose d'une certaine lecture de l'état émotionnel d'un apprenant, que doit-il faire de cette lecture ? La question de conception n'est pas de savoir comment détecter la frustration, mais ce qu'il faut changer une fois que l'on croit l'avoir détectée — le rythme, le niveau des indices, le ton de la rétroaction, ou l'opportunité de s'arrêter pour traiter l'émotion elle-même. Cette page traite de cette couche décisionnelle : les stratégies sur lesquelles les tuteurs projettent l'affect, les preuves de leur utilité et les raisons pour lesquelles elles peuvent se retourner. Elle ne porte pas sur l'empathie propre de l'apprenant, qui est un résultat différent reposant sur des preuves différentes ([[empathy]]), ni sur la manière dont l'affect est perçu ([[sensor-and-gaze-analytics|analyse des capteurs et du regard]]).

MathBuddy modélise dynamiquement l'affect de l'étudiant à partir de deux modalités :

- **Texte conversationnel** — indices sémantiques de frustration, de confusion, de confiance
- **Expressions faciales** — capture vidéo en temps réel de l'état émotionnel

Les émotions sont agrégées à partir des deux modalités et rattachées à des stratégies pédagogiques pertinentes avant la [[prompt-engineering|rédaction des invites]] adressées au tuteur fondé sur les [[llm|LLM]], produisant des réponses conscientes des émotions.

**Résultats :**
- Amélioration du **taux de victoire de 23 points** par rapport à la ligne de base non affective
- Gain de **3 points au score DAMR** au niveau global
- Évaluation selon **huit dimensions pédagogiques**, complétée par des études d'usagers

Le constat valide une hypothèse de longue date en psychologie de l'éducation : les états émotionnels positifs et négatifs ont un impact sur la capacité d'apprentissage, et en tenir compte améliore les résultats du tutorat.

MathBuddy est un système parmi d'autres, et non la définition de l'approche ; les sections suivantes généralisent à partir de lui. Pour ce que les signaux sous-jacents peuvent et ne peuvent pas mesurer, voir [[sensor-and-gaze-analytics]].

## Le risque : l'empathie comme piège

Favero et al. (2025) avertissent que l'[[student-engagement|engagement]] émotionnel envers les tuteurs d'IA comporte des risques sous-estimés :

| Bénéfice du tutorat affectif | Risque correspondant |
|---|---|
| Les réponses conscientes des émotions semblent bienveillantes | Les étudiants peuvent développer des **dépendances parasociales** au tuteur |
| L'empathie réduit l'[[anxiety-and-stress|anxiété]] | L'[[anxiety-and-stress|anxiété]] réduite peut masquer un **désengagement métacognitif** |
| La calibration affective personnalise le rythme | Une [[personalized-learning|personnalisation]] profonde peut **réduire le transfert** vers des contextes non adaptatifs |
| Le suivi facial signale l'attention | La capture vidéo continue soulève des **inquiétudes en matière de vie privée** |

Les auteurs soutiennent que les risques émotionnels s'inscrivent dans une tendance plus large d'**érosion du [[self-efficacy|sentiment d'efficacité personnelle]], de l'[[agency|autonomie]] et du [[well-being|bien-être]]** lorsque l'usage de l'IA n'est pas encadré.

**Le risque pèse aussi sur des personnes qui n'ouvrent jamais le tuteur.** [[shastry-gray-empathy-offloading-2026|Shastry et Gray (2026)]] constatent que la disposition à fournir soi-même un soutien émotionnel décline à mesure que l'on croit qu'un système peut le fournir, et cette croyance était causale dans leur deuxième expérimentation : la lecture d'une couverture médiatique ordinaire sur l'IA empathique suffisait à élever le délestage, entièrement par la capacité perçue. Leur quatrième étude ajoute un coût social que le cadrage individuel manque. Informés qu'un étudiant s'était tourné vers un [[conversational-ai|agent conversationnel]] pour obtenir du soutien, les participants déclaraient qu'ils délesteraient moins que si l'étudiant s'était tourné vers un ami. Ils écrivaient ensuite moins de mots d'empathie et plus de mots d'indifférence à propos de cet étudiant, et le jugeaient plus étranger et plus désespéré. L'offre [[social-emotional-learning|socio-émotionnelle]] peut donc s'amincir autour du tuteur alors même que personne qui l'utilise ne signale de changement.

## Principes de conception

1. **Les données affectives doivent informer, et non remplacer, l'autonomie de l'apprenant** — le tuteur adapte sa stratégie ; l'étudiant conserve le contrôle sur ce qu'il divulgue
2. **Transparence sur la détection de l'affect** — les étudiants doivent savoir quand et comment leurs émotions sont inférées
3. **L'affect comme un signal parmi d'autres** — le combiner à l'état cognitif (par exemple [[huang-interpretable-knowledge-tracing-2026]]) et à l'engagement comportemental
4. **Vie privée par défaut pour les capteurs [[multimodal|multimodaux]]** — les données faciales et vidéo exigent des protections plus fortes que l'inférence fondée sur le seul texte
5. **Se déclencher sur des trajectoires, et non sur des estimations ponctuelles** — l'affect ordonné montre une persistance à courte portée et des transitions directionnelles, et les rapports saisis au moment de la sonde (boucles auto-entretenues autour de la curiosité et de la confusion) sont une mesure différente de ceux saisis spontanément (frustration, surprise, conflit) ; les interventions doivent donc s'appuyer sur la séquence plutôt que sur des fréquences résumées ([[epistemic-emotions-collaborative-problem-solving|Anindho et al. (2026)]]).

Une limite à l'inférence de l'affect à partir du dialogue : [[ecnuclaw-k12-personalized-companion|Zhou, Li et Zhang (2026)]] actualisent à chaque tour un profil d'apprenant à cinq dimensions — dont une dimension émotionnelle — mais extraient les signaux à l'aide de dictionnaires de mots-clés, si bien qu'un étudiant qui exprime sa frustration sans employer les mots-clés prédéfinis n'est pas profilé, et la précision du profil n'a pas été validée par confrontation au jugement d'experts.

## Rapport avec la sécurité au sens large

Le tutorat affectif recoupe les [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] dans la dimension des préjudices [[motivation|motivationnels]] et affectifs. Un tuteur affectif « trop bienveillant » peut supprimer la frustration qui alimente la lutte productive et l'[[self-regulated-learning|autorégulation]]. Voir aussi [[llm-fallacy-misattribution]] — les étudiants peuvent attribuer le soutien émotionnel à une véritable relation, ce qui renforce la dépendance.

## Idées fausses courantes

**« Le taux de victoire de +23 points montre que les tuteurs affectifs enseignent mieux. »** Il montre quelque chose de plus étroit. La comparaison est un taux de victoire contre une ligne de base non affective pour un seul système, MathBuddy, noté sur huit dimensions pédagogiques et des études utilisateurs ; un taux de victoire est un résultat de préférence, non une mesure d'apprentissage durable dans un cours réel. L'affirmation honnête est que la sélection de stratégie sensible à l'affect a battu la sélection aveugle à l'affect sur la qualité jugée des réponses, ce qui est un résultat solide sur l'interaction et faible sur les [[learning-gains|gains d'apprentissage]].

**« Si le tuteur paraît empathique, l'étudiant est aidé. »** Se sentir compris et être enseigné sont séparables, et l'écart entre les deux est là où réside le dommage. [[favero-critical-ai-tutors-empower-enslave-2025|Favero et coll.]] identifient la dépendance parasociale comme l'échec caractéristique : un étudiant peut nouer une relation avec un système conçu pour paraître bienveillant tandis que son engagement [[metacognition|métacognitif]] baisse discrètement, et l'empathie elle-même rend ce désengagement plus difficile à remarquer. La littérature sur la [[llm-fallacy-misattribution|mauvaise attribution]] constitue l'autre tranchant de la même lame, lorsque les étudiants créditent le système d'une relation authentique.

**« Plus de soutien émotionnel est toujours plus sûr que moins. »** Au-delà d'un certain point, le soutien devient une interférence. Un tuteur qui supprime régulièrement la frustration peut supprimer la [[desirable-difficulties|lutte productive]] dont dépend l'[[self-regulated-learning|autorégulation]], et c'est pourquoi [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] traite le dommage motivationnel-affectif comme une dimension de sécurité distincte plutôt que comme une absence de bénéfice.

**« Un tuteur qui détecte l'émotion sur un visage connaît l'état de l'étudiant. »** L'affect est inféré, non observé, et l'inférence est la plus faible précisément là où les enjeux sont les plus élevés. [[ecnuclaw-k12-personalized-companion|Zhou, Li et Zhang (2026)]] maintiennent une dimension émotionnelle dans un profil d'apprenant à cinq dimensions mais la peuplent de dictionnaires de mots-clés : un étudiant qui exprime sa frustration avec des mots absents du dictionnaire n'est simplement pas profilé, et le profil n'a pas été validé contre un jugement d'expert. La capture faciale ajoute un flux vidéo continu et une exposition à la vie privée que l'inférence textuelle ne comporte pas.

**« Des mesures émotionnelles prises à des moments différents sont interchangeables. »** [[epistemic-emotions-collaborative-problem-solving|Anindho et coll. (2026)]] constatent que l'affect ordonné montre une persistance à courte portée et des transitions directionnelles, et que les rapports saisis par sonde, les boucles réflexives autour de la curiosité et de la confusion, constituent une mesure différente de ceux saisis spontanément, comme la frustration et la surprise. Faire la moyenne des deux en une fréquence résumée écarte la séquence qui porte le signal.

## Mettre le tutorat affectif en pratique

**Pour les enseignants**

- Traitez l'empathie comme un mécanisme de livraison, non comme une preuve d'apprentissage. Associez tout outil sensible à l'affect à un contrôle cognitif que vous pouvez voir, comme des productions de travail ou la sortie de [[knowledge-tracing|traçage des connaissances]], et ne laissez pas l'expérience ressentie d'un étudiant tenir lieu de preuve diagnostique.
- Divulguez l'inférence explicitement. Les étudiants doivent savoir qu'un état émotionnel est estimé, à partir de quelles entrées, et pouvoir refuser la caméra sans perdre l'accès au tutorat.
- Surveillez l'étudiant qui déclare que l'outil le « comprend » et dont le travail autonome ne progresse pas. Cette combinaison est la signature parasociale, non une réussite.

**Pour les développeurs**

- Faites de l'affect un signal parmi plusieurs. Le combiner à l'état cognitif et à l'engagement comportemental empêche le système de réoptimiser une leçon autour d'une expression mal lue.
- Déclenchez les interventions sur des trajectoires plutôt que sur des estimations ponctuelles, en vous appuyant sur la séquence des états, puisque la persistance et les transitions directionnelles sont la partie informative.
- Privilégiez par défaut un traitement protecteur des capteurs, et traitez l'entrée faciale ou vidéo comme un palier strictement supérieur à l'inférence textuelle, exigeant sa propre justification et son propre consentement.
- Ne livrez pas une couche affective à dictionnaire de mots-clés comme s'il s'agissait de détection. Si vous ne pouvez valider le classifieur contre un jugement d'expert, exposez-le comme un indicateur grossier plutôt que d'étiqueter un étudiant « frustré ».

**Pour les chercheurs**

- Rapportez la ligne de base contre laquelle votre taux de victoire est mesuré, et indiquez clairement qu'il s'agit d'un jugement comparatif. Mesurez ensuite ce dont le champ a réellement besoin : le transfert vers des contextes non adaptatifs, la rétention après retrait du tuteur, et la persistance des gains lorsque le canal émotionnel est coupé.
- Validez les profils affectifs contre un jugement d'expert avant de les utiliser comme variables indépendantes.

## Concepts liés

- [[llm-training-and-fine-tuning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[student-modeling]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[collaborative-learning]]
- [[human-in-the-loop-ai]]
- [[knowledge-tracing]]
- [[socratic-method]]

## Articles liés

- [[ecnuclaw-k12-personalized-companion]]
- [[epistemic-emotions-collaborative-problem-solving]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[shastry-gray-empathy-offloading-2026]] — On déleste l'empathie dès qu'on pense que l'IA peut la fournir (Shastry & Gray 2026)
