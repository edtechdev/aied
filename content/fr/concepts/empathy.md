---
title: "Empathie"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: concept
foundations: [ai-literacy]
pedagogy: [professional-training, experiential-learning, social-emotional-learning]
technology: [affective-computing, affective-tutoring, generative-ai, simulation, sensor-and-gaze-analytics]
ethics: [pedagogical-safety, privacy]
audience: [instructors, medical educators, curriculum designers, researchers]
level: [higher ed, k 12]
confidence: medium
source_updated: "2026-11-10T21:10:00-05:00"
translation_of: concepts/empathy
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

> **Synthèse :** L'empathie entre en éducation par trois voies à la fois : comme résultat que les éducateurs cherchent à enseigner, comme construit qu'ils cherchent à mesurer, et comme quelque chose que les systèmes d'IA sont de plus en plus censés manifester. Les données probantes sont inégales sur les trois. Enseigner l'empathie fonctionne — le jeu de rôle, la RV et le dialogue avec un LLM produisent tous des gains mesurables avant-après — mais l'effet diminue à mesure que l'expérience devient moins incarnée, et les études comparatives confondent la modalité avec le temps de travail. Mesurer l'empathie est plus difficile que l'enseigner : les évaluations par observation tiennent ensemble, tandis que les proxies de vision par ordinateur s'accordent sur le contact physique, divergent sur le contact visuel et s'inversent sur le sourire. L'IA peut faire répéter une conversation empathique à grande échelle, mais l'étude la mieux contrôlée montre une compétence auto-évaluée qui progresse sans contrôle de la performance observée. Et la préoccupation la plus récente va dans l'autre sens : croire que l'IA peut fournir de l'empathie rend les personnes moins disposées à en fournir elles-mêmes ([[shastry-gray-empathy-offloading-2026|Shastry et Gray, 2026]]).

## Questions à examiner

- Si le jeu de rôle, la RV et un agent conversationnel font tous monter les scores d'empathie, la différence est-elle de l'apprentissage ou du temps de travail ?
- Une étudiante en soins infirmiers sourit à un patient qui souffre : les observateurs y lisent une incongruence, un détecteur de sourire y lit de la chaleur. Auquel une évaluation devrait-elle se fier ?
- La plupart des études sur l'entraînement à l'empathie assisté par l'IA mesurent la confiance plutôt que le comportement observé. Si la confiance monte mais que le comportement ne suit pas, l'entraînement a-t-il échoué ou n'a-t-il simplement pas été testé ?
- Quand un agent conversationnel répond avec chaleur, les étudiants disent se sentir compris. Est-ce de l'empathie, une performance de l'empathie, ou quelque chose qui compte indépendamment du cas ?
- Si les personnes se déchargent de la responsabilité empathique dès qu'elles croient que l'IA peut l'assumer, qu'est-ce que cela implique pour un programme qui enseigne l'empathie en partie par la pratique avec l'IA ?
- Qui devrait décider si l'empathie est un résultat pouvant être noté — et qu'arrive-t-il aux étudiants exacts mais froids ?

## Introduction

L'empathie se décompose généralement en au moins deux composantes : une composante cognitive, la prise de perspective, et une composante affective, le partage du sentiment d'autrui, certains auteurs ajoutant une composante motivationnelle, l'impulsion à aider. La détresse personnelle — la réaction aversive à la souffrance d'autrui — est souvent mesurée en parallèle et se comporte différemment du reste. Cela compte pour l'éducation parce que les composantes sont enseignables de manières différentes et mesurables avec des degrés de succès différents.

L'IA intervient en trois points distincts, et les confondre est la principale source de confusion dans la littérature.

1. **L'IA comme méthode d'enseignement de l'empathie humaine.** Simulations, incarnation en RV, jeu de rôle avec des personnages générés par LLM et imagerie générative utilisée pour rendre l'expérience d'autrui vivante.
2. **L'IA comme instrument de mesure.** Vision par ordinateur notant le langage corporel dans des simulations enregistrées, ou échelles qui traitent l'empathie comme une disposition exprimée dans l'interaction avec l'IA.
3. **L'IA comme acteur empathique.** Agents conversationnels qui jouent des patients, des coachs ou des compagnons et sont conçus pour sembler compréhensifs, ce qui soulève la question de savoir si l'empathie est réelle, jouée ou un substitut au contact humain.

Les deux premiers concernent les apprenants ; le troisième concerne les systèmes. Une page qui les mélange produira des affirmations comme « l'IA améliore l'empathie » qui signifient trois choses différentes.

## L'empathie peut-elle s'enseigner ?

La comparaison directe est d'une conception inhabituellement propre et d'une exécution inhabituellement confondue. [[zwolinski-teaching-empathy-real-virtual-ai-2026|Zwoliński et al. (2026)]] ont assigné au hasard 64 étudiants de master d'un cours d'accessibilité à un jeu de rôle en situation réelle avec fauteuils roulants, combinaisons de vieillissement et simulateurs de grossesse ; au même équipement dans un laboratoire de RV ; ou à la construction de personnages en dialogue avec ChatGPT-4.0. Les trois groupes se sont améliorés significativement à l'Indice de réactivité interpersonnelle de Davis. Le jeu de rôle a gagné 13.2%, la RV 11.6% et la condition IA 8.8%. Seule la détresse personnelle différait significativement entre les groupes.

L'ordre est intuitif et l'interprétation ne l'est pas. Les trois conditions ont duré environ 125, 87 et 42 minutes, si bien que l'étude compare modalité et dosage ensemble. Il est juste de dire qu'un dialogue de 42 minutes avec un LLM a produit un gain plus faible qu'un exercice incarné de deux heures ; il n'est pas juste de dire que l'incarnation vaut trois fois plus par minute. Les auteurs sont explicites sur ce biais de confusion, et la recommandation de leurs propres étudiants — combiner la répétabilité de la RV, la richesse sensorielle du monde réel et l'adaptabilité du LLM — est une lecture raisonnable des données.

La littérature des professions de santé ajoute de l'ampleur mais guère de clarté causale. [[ismail-affective-domain-ai-healthcare-review-2026|Ismail et Zafira (2026)]] ont passé en revue 17 études sur l'IA pour le développement du domaine affectif et ont trouvé des interventions concentrées sur la formation à la communication, les patients virtuels, la rétroaction réflexive, la simulation d'annonce de mauvaise nouvelle et l'évaluation de type ECOS. La plupart rapportaient des gains de confiance, de sentiment d'efficacité personnelle, d'engagement réflexif ou de compétence communicationnelle perçue. Les preuves concernant l'empathie elle-même, la réactivité émotionnelle, l'authenticité relationnelle et la communication non verbale restaient limitées. C'est le constat central : un champ qui entend enseigner l'empathie mesure surtout le confort.

Une quatrième veine rend l'ambiguïté explicite : des capteurs d'activation portables et l'imagerie générée par IA peuvent rendre vivantes les circonstances d'autrui, mais une hausse de la conductance cutanée est une preuve d'activation, non d'empathie, et les études de cette ligne s'arrêtent souvent là ([[lim-ai-wearables-environmental-empathy-2024|Lim et al., 2024]]).

## L'empathie peut-elle se mesurer ?

Les évaluations par observation sont ce qui s'approche le plus d'un étalon de référence, et elles se comportent raisonnablement. Dans [[nissan-nursing-empathy-computer-vision-2026|Nissan et al. (2026)]], deux membres du corps enseignant ont évalué 37 étudiantes en soins infirmiers lors d'une simulation enregistrée avec un inventaire de 12 items (α = 0.91) et une échelle à six gestes (α = 0.93), et les notes de gestes corrélaient avec l'inventaire à 0.41–0.63.

Les algorithmes racontent une histoire plus intéressante. La détection du contact physique concordait avec quatre mesures d'observateurs à 0.46–0.54. La détection du contact visuel et des cartes de chaleur ne montrait aucune association significative avec les jugements des observateurs. Et le détecteur de sourire corrélait *négativement* avec trois mesures d'observateurs, et avec l'empathie totale à r = −0.322, parce que les observateurs voyaient une étudiante sourire à un patient qui souffre et l'interprétaient comme de la nervosité ou une incongruence. Le signal était réel ; l'interprétation était inversée. C'est le même écart inférentiel que celui documenté dans [[sensor-and-gaze-analytics|l'analytique des capteurs et du regard]], dans un contexte où l'enjeu est une note clinique.

Les échelles auto-déclarées occupent l'autre extrémité. L'Échelle d'empathie de l'IA pour l'interaction avec l'IA générative traite l'empathie comme une disposition humaine exprimée pendant l'usage de l'IA et interroge les répondants sur leurs propres réponses cognitives, affectives et motivationnelles ; sa structure factorielle préliminaire ne reproduisait pas les six dimensions prévues ([[ai-empathy-scale-psychometric-evaluation-2026|Kang et al., 2026]]). Un questionnaire de disposition et une observation comportementale ne sont pas interchangeables, et aucun ne remplace l'appréciation par les patients de la dimension attentionnée de la rencontre.

## L'IA peut-elle faire répéter l'empathie ?

Oui, au moins pour la partie répétition. [[muller-role-prompted-gpt-empathetic-communication-2026|Müller et al. (2026)]] ont donné à 162 étudiants en médecine une conversation avec un GPT-4o guidé par un rôle dans l'un de quatre scénarios — décision partagée, entretien motivationnel, consultation IST, annonce d'une mauvaise nouvelle — et la compétence communicationnelle auto-évaluée est passée de 5.89 à 6.83 sur une échelle de 0 à 10 (d = 0.58) après 13 échanges en moyenne. Les étudiants ont jugé la rétroaction de l'IA utile à 7.92 sur 10, mais l'adéquation de la rétroaction ne prédisait pas le gain (r = 0.08). Il n'y avait pas de groupe témoin.

Le schéma se répète : une répétition courte et à faible enjeu produit un gain important de sentiment d'efficacité personnelle, et le mécanisme tient plus probablement à la répétition qu'à la critique du modèle. Ce n'est pas une raison de jeter l'outil. Les patients standardisés sont coûteux, rares et planifiés ; un agent conversationnel n'est rien de tout cela, et un étudiant qui a déjà traversé une conversation d'annonce de mauvaise nouvelle une fois utilisera différemment une séance avec un patient standardisé. C'est une raison d'arrêter d'appeler ce gain une preuve de compétence.

Là où l'empathie est une qualité conversationnelle plutôt qu'une compétence, les données portent sur la perception. [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] ont maintenu constants le modèle, la plateforme et la température et n'ont changé que le rôle et les mouvements conversationnels de l'invite, produisant une différence importante d'empathie perçue (21.27 contre 18.24, r = 0.53). L'empathie, au sens où les étudiants la vivent, peut être scénarisée. Savoir si la scénariser est pédagogiquement bon est une autre question.

## Le problème de la substitution

La veine la plus récente demande ce que l'empathie de l'IA fait à l'empathie humaine. Sur quatre études réunissant 249, 494, 743 et 737 participants, [[shastry-gray-empathy-offloading-2026|Shastry et Gray (2026)]] ont constaté que plus les personnes croient l'IA capable de fournir un soutien émotionnel, moins elles sont disposées à le fournir elles-mêmes — un délestage de l'empathie — en contrôlant l'empathie de trait et l'usage antérieur de l'IA. Quand la source de soutien du destinataire était nommée, les participants disaient qu'ils se déchargeraient moins sur l'IA que sur des amis ou des thérapeutes, parce qu'ils jugeaient sa capacité empathique plus faible. Sur une mesure comportementale, les mêmes participants qui disaient ne pas vouloir se décharger choisissaient moins de mots d'empathie et plus de mots d'indifférence.

Pour l'éducation, cela coupe dans deux sens. Un programme qui utilise l'IA pour pratiquer l'empathie construit peut-être la compétence ; une culture de campus qui oriente le soutien émotionnel vers des agents conversationnels érode peut-être la motivation à l'utiliser. Les deux effets sont compatibles, et rien dans la littérature actuelle ne les mesure ensemble.

## Ce que cela signifie pour la pratique

- **Séparez les trois questions.** Quand quelqu'un affirme que l'IA améliore l'empathie, demandez s'il entend enseigner aux humains, mesurer les humains ou simuler l'empathie. Les données diffèrent pour chacune.
- **N'acceptez pas le sentiment d'efficacité personnelle comme résultat d'empathie.** La confiance est bon marché et monte après presque n'importe quelle répétition ; l'observation, les patients standardisés ou l'appréciation des patients sont les mesures qui comptent.
- **Traitez les scores de vision comme des seconds lecteurs.** La détection du contact physique est utilisable pour une rétroaction formative ; la détection du sourire et du contact visuel ne l'est pas, sans le contexte de scénario qu'un modèle n'a pas.
- **Budgétez du temps, pas seulement une modalité.** Les études comparatives confondent les deux, et une méthode moins chère qui prend un quart du temps peut rester le meilleur choix — simplement pas un choix équivalent.
- **Surveillez le délestage.** Si l'IA devient le canal par défaut du soutien émotionnel, l'empathie que vous cherchez à enseigner peut être discrètement externalisée.

## Idées fausses courantes

- **« L'IA peut enseigner l'empathie. »** L'IA peut soutenir la répétition et la réflexion ; la revue la plus solide trouve peu de preuves de l'empathie comme résultat, et l'étude d'entraînement la mieux contrôlée mesure l'auto-évaluation.
- **« L'empathie, c'est un langage chaleureux. »** L'empathie perçue peut être produite par la seule conception de l'invite, ce qui est une preuve sur la perception, pas sur la compréhension.
- **« Un sourire signifie de la chaleur. »** Dans une rencontre clinique pénible, les observateurs lisent le sourire comme une incongruence, et un détecteur d'action faciale le lit comme un affect positif. Le contexte est la variable manquante.
- **« Les échelles auto-déclarées mesurent l'empathie. »** Elles mesurent une disposition ou un concept de soi ; elles ne mesurent pas le comportement dans une rencontre.
- **« Plus immersif, c'est toujours mieux. »** Les méthodes immersives montrent des gains plus importants, mais à plusieurs fois le coût et la durée, et les comparaisons n'égalisent pas l'exposition.

## Concepts liés

- [[affective-tutoring]]
- [[affective-computing]]
- [[social-emotional-learning]]
- [[professional-training]]
- [[simulation]]
- [[medical-education]]
- [[nursing-education]]
- [[sensor-and-gaze-analytics]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[human-ai-collaboration]]
- [[ai-sycophancy]]
- [[pedagogical-safety]]
- [[well-being]]
- [[arts-design-and-media-education]]

## Articles liés

- [[zwolinski-teaching-empathy-real-virtual-ai-2026]] — Jeu de rôle 13.2%, RV 11.6%, dialogue IA 8.8% à l'IRI, avec un temps d'exposition confondu (Zwoliński et al., 2026)
- [[nissan-nursing-empathy-computer-vision-2026]] — La détection du contact physique concordait avec les observateurs ; la détection du sourire était négative (Nissan et al., 2026)
- [[muller-role-prompted-gpt-empathetic-communication-2026]] — La compétence auto-évaluée a progressé de d = 0.58 après 13 échanges, sans groupe témoin (Müller et al., 2026)
- [[ismail-affective-domain-ai-healthcare-review-2026]] — 17 études ; gains de confiance fréquents, preuves d'empathie limitées (Ismail et Zafira, 2026)
- [[lim-ai-wearables-environmental-empathy-2024]] — L'EDA et l'imagerie générative comme chaîne d'activation, l'empathie étant affirmée plutôt que mesurée (Lim et al., 2024)
- [[shastry-gray-empathy-offloading-2026]] — La croyance en la capacité empathique de l'IA prédisait une moindre disposition à fournir du soutien (Shastry et Gray, 2026)
- [[ai-empathy-scale-psychometric-evaluation-2026]] — Une échelle de disposition à 42 items dont la structure factorielle ne correspondait pas à sa conception (Kang et al., 2026)
- [[empathy-coaching-chatbot]] — Un langage empathique augmentait le sentiment d'être compris, qui prédisait l'engagement plutôt qu'un changement de comportement (Siyan et al., 2026)
- [[wang-teacher-student-centered-agents-physics-2026]] — Un rôle et des mouvements spécifiés dans l'invite produisaient une différence importante d'empathie perçue (Wang et al., 2026)
- [[akbaba-nursing-ai-experiences-tam-2026]] — Des étudiantes en soins infirmiers décrivaient l'IA comme un soutien émotionnel pendant le stress clinique (Akbaba et al., 2026)
