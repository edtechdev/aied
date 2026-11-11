---
title: "Avatars IA et instructeurs synthétiques"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-11T07:40:00-05:00"
type: concept
foundations: [human-ai-collaboration, teacher-role, academic-integrity]
pedagogy: [professional-training, experiential-learning, situated-learning, video-education]
technology: [generative-ai, llm, pedagogical-agent, simulation, simulating-students, virtual-and-augmented-reality, conversational-ai]
assessment: [automated-assessment, assessment-validity, feedback]
ethics: [trust, ai-use-disclosure, bias-mitigation, inclusive-learning]
discipline: [medical education]
level: [higher ed, teacher education]
audience: [instructors, instructional designers]
confidence: medium
translation_of: concepts/ai-avatars-and-synthetic-instructors
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Avatars IA et instructeurs synthétiques** — des systèmes d'[[generative-ai|IA]] à apparence humaine qui occupent un [[teacher-role|rôle d'enseignement]], qu'il s'agisse d'un conférencier enregistré, d'un tuteur parlant, d'un [[pedagogical-agent|agent pédagogique]], d'un patient ou d'un étudiant simulé, d'un partenaire de jeu de rôle ou d'un examinateur. La catégorie se définit par un visage et une voix qui tiennent lieu de personne, non par une technologie unique. Cette surface est ce qui rend ces systèmes engageants, et c'est aussi là que se concentrent leurs problèmes distinctifs : la [[trust|confiance]] s'attache aux indices d'identité, le réalisme ne suit pas l'efficacité, et les apprenants peuvent ignorer qu'un humain est simulé.

## Questions à examiner

- Si une [[video-education|vidéo de cours]] est présentée par un visage dont vous apprenez ensuite qu'il a été synthétisé à partir de la ressemblance de votre enseignant, qu'est-ce qui change pour vous — le contenu, votre sentiment sur qui l'a enseigné, ou rien du tout ?
- Un [[simulating-students|étudiant simulé]] fluide, coopératif et qui ne fait jamais dérailler la leçon est facile à qui parler. À quoi cette répétition vous a-t-elle préparé, et qu'a-t-elle discrètement laissé de côté ?
- Voudriez-vous être informé, avant une rencontre, que le patient a été généré ? Comment le découvrir après coup changerait-il ce que vous retirez de la séance ?
- Quel est le plus grand risque d'intégrité : un apprenant qui trompe un examinateur IA, ou un examinateur IA qui lit mal un apprenant ?
- Le [[collaborative-learning|jeu de rôle entre pairs]] est gratuit, familier et socialement exigeant. Qu'est-ce qu'un avatar devrait apporter pour que vous le choisissiez à sa place ?

## Introduction

Un avatar IA est une représentation humaine rendue ou animée par un modèle ; un instructeur synthétique est cette représentation placée dans un rôle d'enseignement. Les deux ne se confondent pas avec un agent. [[theelen-classroom-simulations-four-layer-framework-2026|Theelen et coll. (2026)]] séparent la représentation de l'[[agency|agentivité]] : l'avatar est ce qu'un participant voit, tandis que l'acteur derrière lui peut être un pair, un spécialiste de la simulation, un script, un système à règles ou un [[llm|LLM]]. Deux étudiants virtuels identiques peuvent donc offrir des rencontres entièrement différentes.

Cette page est organisée par rôle : quel rôle l'humain synthétique occupe, quelles preuves existent pour lui, et ce que la surface fait à la relation de l'apprenant avec le système. La littérature ci-dessous couvre la vidéo de cours, le tutorat, la simulation clinique, la répétition d'enseignement, le jeu de rôle et l'évaluation.

## Six rôles qu'un humain synthétique peut occuper

**Enseignant à l'écran.** Un présentateur cloné délivre une vidéo enregistrée. Dans un grand cours universitaire en ligne, [[personalized-ai-generated-videos-preference-2026|Tomlinson et coll. (2026)]] ont produit trois variantes adaptées au domaine de chaque sujet avec un avatar HeyGen cloné à partir de l'enseignant, relues avant publication et poussées vers le LMS.

**Tuteur ou agent pédagogique.** [[elevate-genai-virtual-tutors|ELEVATE]] construit un tuteur avatar en 3D qui tourne entièrement sur du matériel local, avec une couche destinée à l'enseignant contrôlant la persona, la voix, la posture et le rythme. [[aclime-pedagogical-agents-extended-reality-2026|ACLIME]] décrit le même rôle dans les médias immersifs : un agent qui guide, questionne et explique.

**Patient ou client simulé.** [[sophie-clinical-communication-ai-assessment-2026|SOPHIE 2.0]] propose 24 scénarios cliniques dans le navigateur avec un patient avatar parlant. [[ai-psychotherapy-training-avatars|Riachi et coll. (2026)]] appliquent le schéma à la thérapie d'acceptation et d'engagement, en notant la fidélité du stagiaire tour de parole par tour de parole.

**Étudiant simulé.** [[hauk-student-avatars-dialogue-teacher-education-2026|Hauk et coll. (2026)]] ont donné à 21 [[teacher-education|enseignants en formation]] une conversation vocale de dix minutes avec « Marco », un élève du secondaire inférieur qui fait une remarque désobligeante sur les immigrés.

**Partenaire de jeu de rôle.** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] fait manipuler par des enfants un avatar robotique pour répéter l'intervention du témoin. ACLIME appelle cela le second mode d'interaction : un agent tenant un rôle défini pour un dialogue [[situated-learning|situé]].

**Interlocuteur d'évaluation.** Le juge de SOPHIE note des transcriptions selon une grille de communication. [[voice-based-ai-feedback-interviews-higher-ed-2026|Tamme et coll. (2026)]] proposent un agent vocal qui interroge les étudiants sur un cours au lieu d'administrer une [[self-report-measures|enquête écrite]].

## Ce que les preuves soutiennent, rôle par rôle

Les preuves sont les plus solides là où l'humain synthétique est un *partenaire de pratique* et les plus faibles là où il est un *substitut à l'apprentissage*.

Pour l'enseignement enregistré, le résultat mesuré est la préférence, non la réussite. Sur deux sessions et 493 répondants, les vidéos personnalisées générées par IA ont été mieux classées que les vidéos non personnalisées enregistrées par un humain (rang moyen 2.26 contre 2.69, p < .001). La condition la mieux classée, la vidéo personnalisée enregistrée par un humain, n'a jamais existé, si bien que ce classement mêle expérience et imagination. Les auteurs annoncent des résultats d'apprentissage objectifs comme à venir.([[personalized-ai-generated-videos-preference-2026]])

Pour le tutorat, les preuves concernent la faisabilité technique. ELEVATE atteint environ cinq à six secondes avant le premier son sur du matériel grand public en diffusant la parole en flux, ce qui masquait l'essentiel de la latence perçue. Aucune étude utilisateur contrôlée n'a été menée, si bien que les effets sur l'apprentissage et la [[help-seeking|recherche d'aide]] restent ouverts.([[elevate-genai-virtual-tutors]])

Pour la communication clinique, les preuves sont les plus développées et s'arrêtent encore avant le [[transfer-of-learning|transfert]]. Le juge de SOPHIE, lisant les seules transcriptions, atteint un Pearson de 0.759 et un ICC(A,1) de 0.746 contre le consensus d'évaluateurs humains — à l'intérieur de la dispersion des humains individuels plutôt qu'en dehors. Dans une étude à distance portant sur 59 cliniciens et étudiants, 92 % l'ont trouvé engageant et 83 % l'ont jugé cliniquement pertinent. Les scores ont augmenté entre deux rencontres, mais sans bras de contrôle, cette hausse ne peut être attribuée à la formation.([[sophie-clinical-communication-ai-assessment-2026]])

Pour les [[simulating-students|étudiants simulés]], les preuves portent sur la qualité de l'interaction plutôt que sur les résultats. Les participants de Hauk ont jugé le dialogue nettement fonctionnel (M = 5.37) et seulement modérément authentique (M = 3.71), un écart que les transcriptions reproduisaient à 87.1 % contre 37.4 % de couverture. L'avatar portait le travail de défi, à 51.1 % de son texte, tandis que les enseignants développaient et justifiaient. Vingt et un volontaires dans un programme, une séance, aucune comparaison avec un jeu de rôle en direct.([[hauk-student-avatars-dialogue-teacher-education-2026]])

Pour le jeu de rôle, REMind rapporte un gain significatif avant-après dans l'[[self-efficacy|auto-efficacité]] perçue des enfants à se défendre, avec des croyances mieux calibrées sur le fait que confronter un harceleur l'arrête. Cela représente 18 enfants de neuf à dix ans dans un contexte de test de jeu, ce qui soutient une promesse plutôt qu'un changement de comportement durable.([[remind-robot-mediated-roleplay-antibullying-2026]])

Pour l'évaluation, le juge de SOPHIE est le résultat le plus clair et l'intervieweur vocal le moins. La proposition de Tamme rapporte un pilote technique et des données pas encore analysées formellement ; toute affirmation sur ce que la voix suscite reste une hypothèse.([[voice-based-ai-feedback-interviews-higher-ed-2026]])

## La confiance passe par le visage

Un visage n'est pas un contenant neutre pour le contenu [[pedagogy|pédagogique]]. Dans deux expériences totalisant 396 participants, [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Anthis et Kyriakidou-Zacharoudiou (2026)]] ont trouvé que les indices d'identité des avatars façonnaient à la fois l'évaluation et l'adoption effective. Les avatars blancs, et les avatars d'hommes asiatiques dans les contextes STIM, ont été jugés plus crédibles et plus compétents. Les avatars de femmes noires âgées subissaient des pénalités cumulées sur toutes les mesures. Les participants adoptaient plus volontiers les conseils d'avatars correspondant à leur endogroupe racial ou à leur stéréotype de l'expertise.

Deux détails font de cela un problème de conception. Le domaine modérait l'effet : les tâches STIM et procédurales amplifiaient le biais, tandis que les tâches réflexives et interpersonnelles l'atténuaient. Et le biais opérait sur le comportement, non seulement sur les attitudes déclarées, ce qui signifie qu'une [[trust-calibration|confiance]] auto-déclarée l'aurait manqué. Les auteurs recommandent des avatars stylisés ou moins anthropomorphes, une rotation d'avatars divers entre les tâches, et une évaluation de l'adoption plutôt que de la satisfaction.([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]])

L'autorité arrive aussi par le corps. Les concepteurs d'ELEVATE avertissent que le corps et la voix amplifient l'autorité d'un tuteur. Ils recommandent que l'avatar signale l'incertitude et invite à vérifier dans les notes ou les manuels.([[elevate-genai-virtual-tutors]]) SOPHIE ajoute une complication : derrière le même avatar, un modèle auparavant jugé plus humain a perdu cet avantage, et la performance de communication était identique entre les backends (0.437 contre 0.438). La ressemblance humaine appartenait à l'interaction — voix, latence, tours de parole — non au modèle.([[sophie-clinical-communication-ai-assessment-2026]])

La contre-preuve est que l'on peut apprendre aux étudiants à retenir le cadre humain même lorsqu'une consigne le fournit. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman et coll. (2026)]] ont demandé à 654 étudiants en écriture si le [[conversational-ai|chatbot]] ressemblait à un tuteur, à un collaborateur ou à autre chose, et seulement environ la moitié (51.7 %) ont choisi l'une des options anthropomorphiques. Les étudiants le nommaient outil ou programme, le comparaient à un robot ou à un ordinateur, ou inventaient des [[metaphors-and-analogies|métaphores]] comme un distributeur de rétroaction qui délivre du texte contre des données. Les auteurs traitent ce refus du cadre humain comme le résultat de littératie, ce qui date l'effet à l'enseignement plutôt qu'à l'interface.

## Présence, réalisme et étrangeté

Le réalisme n'est pas une échelle. [[aclime-pedagogical-agents-extended-reality-2026|ACLIME]] traite le réalisme comportemental comme le prédicteur décisif de la [[community-of-inquiry|présence sociale]] et avertit qu'une fidélité visuelle plus élevée risque la vallée de l'étrange, où un agent presque humain déclenche un rejet soudain. Il chiffre aussi le compromis : l'immersion et le réalisme de l'agent augmentent la charge cognitive extrane, tandis que l'interaction peut réduire la charge intrinsèque par la mémoire de travail collective. Sa mise en garde principale est brutale — environ 42 % des utilisateurs de casques VR rapportent un cybermalaise, et les effets secondaires vont d'une dizaine de minutes à plusieurs heures.([[aclime-pedagogical-agents-extended-reality-2026]])

Les études de pratique soutiennent surtout la version modeste de cette affirmation. Les auteurs de Hauk lisent l'authenticité modérée comme une fidélité ajustée à la fonction. Une répétition dyadique et purement vocale stabilise les routines des novices, et la dynamique entre pairs et les indices non verbaux peuvent être ajoutés plus tard.([[hauk-student-avatars-dialogue-teacher-education-2026]]) Dans SOPHIE, 47 % des participants trouvaient encore difficile d'éprouver une [[empathy|empathie]] réelle envers un patient IA, même si 66 % trouvaient qu'il était moins stressant de parler à un tel patient qu'à une personne.([[sophie-clinical-communication-ai-assessment-2026]])

Les apprenants ne veulent pas uniformément plus de réalisme. Dans l'étude exploratoire de [[trikonet-trivalence-co-creativity-2026|TriKoNet]], les étudiants ont unanimement rejeté la représentation photoréaliste. Ils ont utilisé un espace de conception modulaire pour créer leurs propres concepts de rôle au lieu d'adopter une persona fournie.([[trikonet-trivalence-co-creativity-2026]]) ELEVATE note que l'incarnation est une barrière pour certains apprenants, comme ceux qui ont une sensibilité sensorielle ou un malaise face aux agents anthropomorphes, ce qui fait de la configuration des avatars une exigence plutôt qu'une préférence.([[elevate-genai-virtual-tutors]])

## Consentement, divulgation et risque de deepfake

Dans ces récits, la divulgation apparaît comme une décision de conception plutôt que comme une variable mesurée. Le scénario de Hauk se situait à la limite du discours haineux, et ses garde-fous étaient procéduraux. La conception comprenait une orientation, des consignes de modération, une surveillance continue de l'enseignant, une option d'arrêt immédiat, un débriefing structuré et une analyse agrégée pseudonymisée.([[hauk-student-avatars-dialogue-teacher-education-2026]]) Le cadre de Theelen demande que les apprenants et les formateurs d'enseignants sachent quelles parties d'une [[simulation|simulation]] sont contrôlées par des personnes, des scripts ou l'IA, et traite cette transparence comme une condition d'une adaptation défendable.([[theelen-classroom-simulations-four-layer-framework-2026]])

La question plus difficile est de savoir si simuler une personne est en soi une petite tromperie. Un apprenant qui croit qu'un patient en difficulté est réel peut investir un soin qu'une simulation divulguée n'aurait pas suscité, puis se sentir trompé une fois informé. Les notes d'authenticité modérées de Hauk suggèrent que les participants n'étaient pas dupes de la nature de l'avatar ; les 47 % d'empathie de SOPHIE suggèrent que certains étaient engagés tout en sachant. Aucune des deux études ne teste la divulgation directement.

La [[ai-use-disclosure|divulgation]] a aussi un versant de production. Le pipeline de Tomlinson a cloné la ressemblance et la voix de l'enseignant. Une partie des étudiants a soulevé des objections de principe à l'IA générative — coût environnemental, travail, automatisation, intégrité — auxquelles un meilleur rendu ne répondrait pas.([[personalized-ai-generated-videos-preference-2026]]) Le consentement d'un enseignant à être cloné est une question distincte du consentement d'un étudiant à être enseigné par le clone, et aucune étude ici ne mesure l'un ou l'autre.

La littératie des deepfakes est la face inverse de la même capacité. Dans un échantillon secondaire australien de 199 étudiants, les garçons étaient significativement plus susceptibles d'avoir créé ou partagé du contenu deepfake (23.2 % contre 10.0 %). Les auteurs plaident pour une éducation à la sécurité qui leur soit explicitement destinée.([[gender-differences-ai-literacy-deepfake]]) Dès qu'une institution peut générer un enseignant convaincant, un patient convaincant ou un étudiant convaincant, la vérification de qui parle devient une question d'[[academic-integrity|intégrité académique]] autant que de littératie. Les soutenances orales et les preuves de processus, que les auteurs d'ELEVATE recommandent dès qu'un tutorat à la demande est disponible, traitent le même problème de fond.([[elevate-genai-virtual-tutors]])

## L'état honnête des preuves

Presque toutes les études ici sont petites et courtes. Hauk compte 21 volontaires et une séance. SOPHIE compte 59 participants ayant terminé et aucun bras de contrôle. L'évaluation en psychothérapie compte deux psychologues, environ 90 minutes chacun. Le pilote PBL compte 26 étudiants et un cas. ACLIME et Theelen sont des [[theories-and-frameworks|cadres conceptuels]], et la base de TriKoNet est de huit groupes en séances uniques.([[genai-simulate-patient-history-pbl-2026]])([[ai-psychotherapy-training-avatars]])([[aclime-pedagogical-agents-extended-reality-2026]])([[theelen-classroom-simulations-four-layer-framework-2026]])([[trikonet-trivalence-co-creativity-2026]])

Les grands échantillons concernent les attitudes et les préférences — 396 participants sur l'identité des avatars, 493 répondants sur la préférence vidéo — et les deux sont des populations de convenance ou d'un seul cours. Aucune étude de cet ensemble ne démontre qu'un instructeur synthétique produit un meilleur apprentissage qu'un humain. L'affirmation défendable est plus étroite : ces systèmes peuvent approcher une rencontre de pratique, peuvent être notés contre des évaluateurs humains avec un accord acceptable dans un domaine, et peuvent modifier la manière dont les apprenants évaluent la source de l'enseignement.

Cette étroitesse compte. Les auteurs de Theelen le disent directement : la fluidité et un sentiment de présence ne sont pas des [[assessment-validity|preuves de validité]].([[theelen-classroom-simulations-four-layer-framework-2026]]) Avoir l'air d'un enseignant franchit la barre la plus facile de la salle.

## Idées fausses courantes

**« Un avatar plus réaliste enseigne mieux. »** Réalisme et efficacité se séparent partout où les deux ont été mesurés. Les deux backends de SOPHIE produisaient des scores de communication identiques derrière le même avatar, et les étudiants de TriKoNet ont rejeté d'emblée les personas photoréalistes.

**« Si l'avatar est convaincant, les apprenants le traiteront comme une personne. »** Des étudiants en médecine ont interrogé un patient d'IA générative comme une base de questions interrogeable, surtout par des requêtes fermées, tout en évaluant très favorablement l'expérience.([[genai-simulate-patient-history-pbl-2026]]) La conviction et le style d'interaction sont des résultats distincts.

**« Les instructeurs synthétiques sont une seule technologie, donc les résultats se transfèrent. »** Un conférencier cloné optimisé pour la préférence, un tuteur pour la latence et un patient pour la fidélité clinique sont des artefacts différents avec des modes de défaillance différents. Les preuves d'un rôle n'autorisent pas d'affirmations sur un autre.

**« L'apparence de l'avatar est cosmétique. »** Les indices d'identité changeaient les notes de crédibilité et l'adoption effective des conseils, les pénalités se cumulant pour les avatars de femmes noires âgées.([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]) La configuration est une décision pédagogique et d'[[equity-in-ai-education|équité]].

**« Un patient simulé est un patient standardisé, moins le coût. »** Des psychologues en formation ont trouvé leur patient virtuel coopératif et déjà avancé en thérapie, un cas « idéal » qui sous-représente l'inflexibilité comportementale.([[ai-psychotherapy-training-avatars]]) Le coût baisse ; la validité du cas ne suit pas automatiquement.

## Concepts liés

- [[simulating-students]]
- [[pedagogical-agent]]
- [[simulation]]
- [[virtual-and-augmented-reality]]
- [[trust]]
- [[trust-calibration]]
- [[human-ai-collaboration]]
- [[ai-use-disclosure]]
- [[academic-integrity]]
- [[teacher-education]]
- [[teacher-role]]
- [[professional-training]]
- [[medical-education]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[embodied-learning]]
- [[video-education]]
- [[generative-ai]]
- [[llm]]
- [[conversational-ai]]
- [[intelligent-tutoring]]
- [[self-efficacy]]

## Articles liés

- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — les indices d'identité des avatars déplacent la crédibilité et l'adoption des conseils (Anthis & Kyriakidou-Zacharoudiou 2026)
- [[hauk-student-avatars-dialogue-teacher-education-2026]] — des avatars d'étudiants dans un dialogue de formation pratique des enseignants (Hauk et coll. 2026)
- [[gender-differences-ai-literacy-deepfake]] — création et signalement de deepfakes selon le genre dans un atelier de littératie en IA
- [[elevate-genai-virtual-tutors]] — des tuteurs avatars 3D locaux avec une couche de gouvernance enseignante (ELEVATE)
- [[sophie-clinical-communication-ai-assessment-2026]] — des patients avatars avec un juge LLM pour la communication clinique
- [[genai-simulate-patient-history-pbl-2026]] — un avatar de patient d'IA générative dans un tutoriel d'anamnèse en APP
- [[ai-psychotherapy-training-avatars]] — des avatars de patients pour la pratique de la fidélité ACT en formation psychothérapeutique
- [[aclime-pedagogical-agents-extended-reality-2026]] — des agents pédagogiques en réalité étendue : présence, réalisme et charge (ACLIME)
- [[remind-robot-mediated-roleplay-antibullying-2026]] — un jeu de rôle médié par robot avec un avatar manipulé pour l'intervention du témoin
- [[personalized-ai-generated-videos-preference-2026]] — personnalisation vidéo par clone d'enseignant et préférence des étudiants
- [[theelen-classroom-simulations-four-layer-framework-2026]] — un cadre à quatre couches séparant représentation et agentivité dans la simulation de classe
- [[voice-based-ai-feedback-interviews-higher-ed-2026]] — un agent vocal conversationnel proposé pour des entretiens de rétroaction sur les cours
- [[trikonet-trivalence-co-creativity-2026]] — des avatars pédagogiques co-créatifs dans des réseaux sociotechniques (TriKoNet)
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — seuls 51.7 % de 654 étudiants ont pris les rôles anthropomorphiques proposés ; l'un l'a appelé distributeur de rétroaction
