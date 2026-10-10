---
title: "Idées fausses sur l'IA"
created: "2026-08-12T19:08:47-04:00"
updated: "2026-10-10T04:00:01-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading, teacher-role]
pedagogy: [metacognition]
technology: [generative-ai]
ethics: [trust-calibration]
audience: [learners, instructors]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education]
translation_of: concepts/misconceptions
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Idées fausses sur l'IA (Misconceptions about AI)** — les croyances inexactes que les gens entretiennent au sujet de ce que sont les systèmes d'IA, de ce qu'ils font, et de ce que leur usage signifie pour l'apprentissage et le travail. Les idées fausses ne sont pas une seule fausseté mais une famille d'erreurs de calibration qui se regroupent autour de deux erreurs centrales : mal juger ce qu'est le modèle (autorité contre outil, neutre contre biaisé, compréhension contre génération) et mal juger ce que l'apprentissage exige (production contre processus). Elles ne sont pas seulement le fait des étudiants, mais aussi des enseignants, des administrateurs, des décideurs publics et du grand public — et les corriger est un objectif central de l'éducation à l'[[ai-literacy|littératie en IA]] et à la [[trust-calibration|calibration de la confiance]].

## Questions à examiner

- Beaucoup de gens croient que la réponse d'un agent conversationnel d'IA est un fait vérifié parce qu'elle semble assurée et fluide. La page appelle cela le « sophisme de l'autorité ». Quand vous lisez une explication générée par l'IA, comment décidez-vous de l'accepter — et à quelle fréquence la vérifiez-vous réellement ?
- L'idée fausse « l'apprentissage égale la production » est la croyance que produire un travail avec l'IA revient à l'avoir appris. Avez-vous déjà eu le sentiment d'« avoir appris » quelque chose en laissant un outil faire la rédaction ? Que manquait-il réellement après coup ?
- Les gens supposent souvent que l'IA est objective et sans biais. La page appelle cela l'« illusion de neutralité » — les modèles encodent les biais des données d'entraînement, ce qui, dans les contextes d'écriture, peut homogénéiser les idées de toute une classe. Où le biais pourrait-il se cacher dans un outil qui semble neutre ?
- Les idées fausses sur l'intégrité académique se regroupent à deux extrêmes : certains étudiants traitent la production de l'IA comme « ne pas copier une personne » et donc comme permise, tandis que d'autres pensent que tout usage est de la triche. Où, à votre avis, la frontière devrait-elle tomber, et qui devrait la décider ?
- Une croyance courante est qu'une seule requête suffit et que la production de l'IA est déterministe — la même question donnant toujours la même réponse. La page décrit cela comme l'erreur de déterminisme. Comment cette idée fausse pourrait-elle conduire quelqu'un à trop se fier à une production isolée ?
- Les idées fausses sont décrites comme stables, plausibles et résistantes à la correction — un peu comme les idées fausses dans tout domaine. Si dire simplement la vérité aux gens change rarement leur esprit, comment l'éducation à l'IA devrait-elle réellement être enseignée ?

## Introduction

Les idées fausses sur l'IA importent parce qu'elles sont le précurseur cognitif des comportements nuisibles que la base de connaissances documente sous les rubriques de la [[cognitive-offloading|dépendance excessive]] et des préoccupations relatives à l'[[academic-integrity|intégrité académique]]. Les gens se mettent rarement à [[ai-misuse-learning-harm|abuser]] de l'IA à dessein ; ils le font parce que des modèles mentaux inexacts les conduisent à mal placer leur confiance, à sauter la vérification, et à traiter la production comme de la compréhension. En éducation, ces erreurs façonnent tout, de la manière dont les étudiants étudient à la façon dont les enseignants et les institutions conçoivent les programmes, l'[[assessment|évaluation]] et les politiques.

### Ce que sont les idées fausses sur l'IA

Une idée fausse n'est pas ici une simple ignorance du fonctionnement d'un modèle — c'est une croyance activement entretenue, souvent auto-renforçante, qui produit des erreurs systématiques dans la manière dont les étudiants interagissent avec l'IA. Elles sont directement analogues aux idées fausses sur un domaine étudiées dans les [[learning-sciences|sciences de l'apprentissage]] : stables, plausibles, et résistantes à la correction jusqu'à ce qu'on les confronte. Les corriger est un objectif central de l'éducation à l'[[ai-literacy|littératie en IA]] et à la [[trust-calibration|calibration de la confiance]].

### Idées fausses courantes dans les contextes académiques

- **Le sophisme de l'autorité** — traiter la production d'un [[llm|grand modèle de langue]] comme un fait vérifié plutôt que comme un achèvement probabiliste. Cela nourrit l'acceptation acritique et le schéma de recherche de réponses plutôt que de compréhension documenté dans la recherche sur le [[intelligent-tutoring|tutorat par IA]], où les apprenants acceptent la réponse d'un modèle sans la confronter au [[hallucination-risk|risque d'hallucination]].
- **L'illusion de la vérification indépendante** — traiter la rétroaction de l'IA comme une correction extérieure alors que le modèle reflète votre propre raisonnement. L'exactitude de référence des utilisateurs était le prédicteur dominant de la performance finale, et des invites spécifiques à la flagornerie ont réduit le mimétisme positionnel (OR = 0,26) mais ont laissé intacte la propagation des erreurs, si bien que la formation des apprenants n'est pas la garantie ([[contextual-sycophancy-ai-literacy|Koyuturk et al. (2026)]]).
- **L'apprentissage égale la production** — croire que produire un travail *avec* l'IA revient à l'avoir appris. C'est l'erreur exacte qui sous-tend la [[cognitive-offloading|dépendance excessive]] : les processus de rédaction, de remémoration et de révision qui construisent une connaissance durable sont externalisés.
- **L'illusion de neutralité** — supposer que l'IA est objective et sans biais. Les étudiants ne voient souvent pas que les modèles encodent les biais des données d'entraînement et que, dans les contextes d'[[writing-education|écriture]], cela produit une homogénéisation des idées au sein d'une cohorte.
- **La zone grise de l'intégrité** — mal juger si l'[[academic-integrity|usage de l'IA est acceptable]]. Certains étudiants considèrent la production de l'IA comme « ne pas copier une personne » et donc comme permise ; d'autres surcorrigent et pensent que *tout* usage est de la triche. L'incohérence [[governance|institutionnelle]] nourrit les deux erreurs.
- **L'anthropomorphisme** — croire que le modèle a une intention, une mémoire et une compréhension de *leur* contexte. Cette confiance excessive est particulièrement risquée sur le plan académique, parce que les étudiants peuvent s'appuyer sur des explications plausibles que le modèle ne peut en fait pas fonder.
- **L'erreur de déterminisme** — s'attendre à ce qu'une seule requête suffise et ne pas réaliser que la production est non déterministe et sensible aux invites. Sous-estimer cela produit le « fossé de l'[[prompt-engineering|ingénierie des invites]] », où les étudiants prennent des résultats superficiels pour le plafond de l'outil.
- **La mauvaise calibration de la [[ai-detection|détection]]** — sous-estimer à la fois la détection institutionnelle et, plus important encore, le préjudice qu'ils se causent eux-mêmes en remettant un travail qu'ils ne pourront ensuite ni expliquer ni défendre.
- **L'illusion d'efficience** — traiter le temps gagné comme un gain pur, en manquant que les compétences fondamentales non exercées s'étiolent et que les novices ne peuvent pas encore distinguer une bonne production d'une mauvaise.
- **L'illusion de l'amicalité-sécurité (enfants)** — croire qu'une IA à l'air amical est intrinsèquement sûre et moins susceptible d'espionner. [[open-source|Open source]]. [[children-ai-safety-misconceptions-2026|Leisten et al. (2026)]] ont interrogé 71 enfants âgés de 10 à 16 ans (*M*âge = 12,90) et mené six groupes de discussion (n = 36) autour du robot social à code source ouvert Blossom, constatant que les connaissances fondamentales sur l'IA augmentaient de manière fiable avec l'âge (*M* = 4,41 sur 6 ; β = 0,17) tandis que les attitudes en matière de sécurité restaient ambivalentes (importance *M* = 2,51, sécurité actuelle *M* = 2,77 sur une échelle de 1 à 4), ce que résume la croyance d'un enfant de 12 à 13 ans selon laquelle « peut-être que s'ils sont de bons amis il n'espionne pas tant » — aux côtés de la croyance que les connaissances de l'IA peuvent être supprimées d'une simple pression sur un bouton, que le piratage mène à l'enlèvement, et que « le wifi irradie dans le cerveau ».

### Mythes institutionnels et publics sur l'IA

Les idées fausses ne se limitent pas aux étudiants — elles saturent le discours institutionnel et public sur l'IA que les étudiants héritent. [[rudolph-ai-myths-critical-higher-ed|Rudolph et al. (2025)]] déconstruisent huit « mythes » enracinés qui façonnent la politique et l'enseignement dans l'enseignement supérieur : que l'IA est véritablement « artificielle » (plutôt que construite à partir d'un travail humain exploité), qu'elle est réellement « intelligente » et [[agentic-ai|agentique]], qu'elle « rendra le monde meilleur » sans problème, qu'elle est « objective et sans biais », que les États-Unis détiennent un monopole de superpuissance exclusive, qu'elle ne perturbera pas le marché du travail, qu'elle « révolutionne l'[[higher-ed|enseignement supérieur]] », et que les enseignants peuvent détecter de manière fiable les travaux générés par l'IA. Ces mythes institutionnels sont la source amont de nombreuses idées fausses d'étudiants documentées plus haut — le plus directement l'[[trust|illusion de neutralité]] (« l'IA est objective ») et le [[trust-calibration|sophisme de l'autorité]] (« l'IA est intelligente »), ainsi que la mauvaise calibration de la détection qui conduit les étudiants à supposer qu'un usage indétectable et invérifiable est sûr. Là où les étudiants absorbent et mettent en actes des mythes répétés institutionnellement, les corriger exige de confronter non seulement la croyance de l'apprenant, mais le discours qui la nourrit.

### Pourquoi les idées fausses comptent pour l'apprentissage

Les idées fausses se traduisent directement en comportements qui causent un préjudice pour l'apprentissage. La croyance que « l'IA a toujours raison » supprime la vérification ; la croyance que « utiliser l'IA, c'est apprendre » supprime le traitement efforté ; la croyance que « ce n'est pas de la triche » contourne la reprise métacognitive qui consolide la compréhension. En ce sens, les idées fausses sont en amont de l'[[ai-misuse-learning-harm]] documentée à travers le corpus de données probantes de la base de connaissances.

### Les idées fausses au-delà des étudiants : enseignants, institutions et public

Les idées fausses sur l'IA ne se limitent pas aux apprenants — elles sont répandues parmi les adultes qui façonnent l'éducation :

- Les **enseignants et le corps professoral** peuvent surestimer la capacité de l'IA à noter de manière fiable ou à détecter les usages abusifs, ou sous-estimer ses biais, ce qui conduit soit à une adoption acritique, soit à une interdiction réflexe. Cette supposition de fiabilité est en partie vérifiable et en partie fausse : [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] a soumis à un exercice d'équipe rouge un flux de travail ordinaire de [[automated-assessment|notation par IA]] et a constaté que des instructions cachées dans un fichier remis faisaient monter la note d'une dissertation insuffisante sans avertissement visible, dans 9 itérations sur 9 pour une stratégie et 17 sur 18 pour une autre. Lorsque les enseignants entretiennent le [[trust|sophisme de l'autorité]] au sujet des productions de l'IA, ils modélisent la même posture acritique qu'ils devraient corriger chez les étudiants. Préparer les [[teacher-role|éducateurs]] avec des modèles mentaux exacts de l'IA est une condition préalable à l'[[teacher-ai-competency|intégration responsable de l'IA]] et à une [[pedagogical-safety|pédagogie sûre]].
- Les **administrateurs et les décideurs publics** héritent des mythes institutionnels et les propagent — que l'IA est « objective », qu'elle va « révolutionner » l'éducation, ou que les outils de détection sont dignes de confiance — ce qui façonne ensuite l'[[educational-policy-ai|élaboration des politiques]], les achats et les règles d'évaluation. La [[trust-calibration|confiance]] que les étudiants développent est en partie le produit du cadrage institutionnel qu'ils héritent.
- **Le grand public** absorbe les récits médiatiques et commerciaux sur les capacités et les risques de l'IA. Parce que les étudiants apprennent à l'intérieur de ce discours, les mythes publics deviennent le substrat à partir duquel les idées fausses des étudiants se développent. Corriger les idées fausses sur l'IA est donc une tâche d'[[ai-literacy|littératie en IA]] visant tout l'écosystème éducatif, et pas seulement les apprenants.

Cette ampleur explique pourquoi la base de connaissances traite les idées fausses comme un thème fondateur transversal plutôt que comme un thème purement tourné vers les étudiants : les mêmes erreurs de calibration reviennent chez les apprenants, les enseignants, les institutions et le public, et les corriger exige de confronter à la fois les croyances individuelles et le discours qui les nourrit.

### Corriger les idées fausses

La correction n'est pas une divulgation ponctuelle mais un processus continu d'[[ai-literacy|IA literacy]] qui développe la [[metacognition|métacognition]] et l'[[self-regulated-learning|apprentissage autorégulé]] : aider les étudiants (et les adultes qui les entourent) à surveiller leur dépendance, à calibrer quand se fier à un modèle et quand le questionner, et à voir le coût du contournement de leur propre [[cognitive-offloading|travail cognitif]]. Parce que les idées fausses sont résistantes, elles se traitent le mieux par une confrontation directe avec les preuves — y compris le constat que les étudiants ne *perçoivent souvent pas* le préjudice pour l'apprentissage que cause l'usage abusif de l'IA.

**Le texte de réfutation est une technique de correction centrale.** Parce que les idées fausses sont activement entretenues et résistantes, la stratégie la plus directement fondée sur les preuves est le [[refutation-text|texte de réfutation]] — un texte pédagogique qui énonce l'idée fausse, la réfute explicitement, et présente la conception correcte. C'est la même famille de technique que celle utilisée pour corriger les idées fausses sur un domaine étudiées en sciences de l'apprentissage, appliquée ici aux croyances des étudiants sur l'IA elle-même. La page de concept [[refutation-text]] de la base de connaissances synthétise comment cela se joue dans l'[[ai-education|IA en éducation]] de trois manières complémentaires :

- **L'IA comme correcteur.** Les tuteurs en [[conversational-ai|IA conversationnelle]] peuvent délivrer une réfutation *personnalisée*, en adaptant la réfutation à l'idée fausse spécifique d'un apprenant à la volée. [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett et Tangen (2026)]] ont constaté que le dialogue personnalisé avec l'IA produisait des réductions de croyance plus importantes et plus rapides qu'une réfutation statique de type manuel, avec un [[student-engagement|engagement]] et une confiance plus élevés — bien que l'avantage se soit estompé au bout de deux mois sans renforcement.
- **L'IA comme générateur de contenu de réfutation.** [[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan (2025)]] a constaté que le texte de changement conceptuel/de réfutation généré par l'IA égalait la qualité de celui écrit par des experts (et que tous deux surpassaient un dialogue interactif sollicité dans ce contexte scientifique), ce qui montre que l'IA peut produire des supports de correction efficaces à grande échelle.
- **Les idées fausses générées par l'IA comme ressource d'apprentissage.** Plutôt que de traiter les idées fausses générées par l'IA comme simplement nuisibles, [[llms-misconception-collaborative-learning-healthcare-2026|Cheah et al. (2026)]] proposent de générer des idées fausses et de les traiter par une discussion structurée entre pairs — une forme [[collaborative-learning|collaborative]] de réfutation qui favorise le changement conceptuel et la [[critical-thinking|pensée critique]].

Pour les idées fausses sur l'IA, cela signifie que la correction devrait combiner la **confrontation directe** (des supports de type réfutation qui nomment et réfutent des mythes spécifiques) avec une **pratique étayée** — en utilisant l'enseignement de l'[[ai-literacy|littératie en IA]] et la [[metacognition|métacognition]] pour aider les gens à voir à la fois la croyance fausse et le modèle correct. Les preuves avertissent que le *format* importe : la correction personnalisée et interactive est plus engageante et initialement plus efficace, mais a besoin d'être renforcée pour persister ; et le résultat mesuré (connaissances contre attitudes contre compétences) façonne l'ampleur apparente d'un effet de correction. Parce que les idées fausses s'étendent des apprenants aux adultes qui façonnent l'apprentissage, une correction efficace doit atteindre les [[teacher-role|enseignants]], les [[administrator|administrateurs]] et les [[educational-policy-ai|décideurs publics]] autant que les étudiants.

Bernstein et Sibia (2026) montrent que les analogies générées par l'[[generative-ai|IA générative]] introduisent des idées fausses structurelles que seule une connaissance du domaine source permet de repérer ([[student-reception-genai-analogies-computing-2026]]) : une analogie de trajet circulaire pour une liste chaînée implique un retour au point de départ, et une analogie d'échange de badminton pour la récursivité ne porte aucune garantie de réduction de l'entrée. Les étudiants qui connaissaient le domaine source ont identifié ces défauts et proposé des correctifs, tandis que des participants notaient qu'une analogie défectueuse pouvait néanmoins rester mémorable — ce qui indique qu'une source d'analogie familière peut aider les apprenants à détecter, plutôt qu'à absorber, une idée fausse produite par l'IA, et que présenter les défauts comme des artefacts délibérés destinés à la critique transforme le risque en opportunité d'évaluation.

**Les idées fausses générées par des modèles sont une capacité mesurable, et non un accident.** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] ont construit SocraticTrap-CS, qui demandait à sept modèles à poids ouverts d'écrire un « [[socratic-method|piège socratique]] » pour 35 concepts fondamentaux d'informatique — une explication fluide et assurée qui repose pourtant sur une erreur subtile et propre au domaine. Sur 241 segments sollicités, 221 (91,7 %) ont été confirmés comme des idées fausses stratégiques par un vote majoritaire d'experts (κ de Fleiss = 0,9487), sans différence significative entre les domaines d'informatique ; 66,5 % des erreurs confirmées étaient conceptuelles plutôt que factuelles et aucune n'était purement logique. La fluidité est le mécanisme plutôt qu'une défense : le caractère convaincant atteignait en moyenne 3,71 sur une échelle en cinq points et dépendait fortement du modèle, et la fréquence et la gravité se dissociaient, les deux modèles qui produisaient le plus souvent des pièges étant aussi jugés les plus convaincants. Parce qu'une question mal formulée d'un étudiant peut elle-même agir comme une invite adverse, les auteurs traitent le taux comme une capacité sous sollicitation adverse plutôt que comme un taux de base pour des séances d'étude ordinaires — et soutiennent que la tâche de l'[[ai-literacy|littératie en IA]] se déplace de la vérification factuelle d'affirmations isolées vers la vérification conceptuelle et la validation des modèles mentaux. C'est la face sombre de l'usage génératif décrit plus haut : la même capacité qui peut ensemencer une discussion productive entre pairs peut aussi enraciner une erreur que l'apprenant était déjà en train de former.

### Corrections de type réfutation pour les idées fausses courantes sur l'IA

Parce que les idées fausses sont activement entretenues et résistantes, la manière la plus directe de les traiter — y compris sur cette page — est la structure du [[refutation-text|texte de réfutation]] : **nommer l'idée fausse, la réfuter explicitement, et énoncer la conception correcte.** Les entrées ci-dessous appliquent cette structure aux idées fausses les plus lourdes de conséquences sur l'IA et sur l'apprentissage, l'enseignement et l'éducation :

**« L'IA a toujours raison. »** *C'est une idée fausse.* La production de l'IA est un achèvement probabiliste, et non un fait vérifié. *La correction :* les grands modèles de langue génèrent un texte plausible à partir de régularités statistiques ; ils peuvent [[hallucination-risk|halluciner]], être biaisés et être assurément dans l'erreur. Traitez la production comme un brouillon à confronter à des sources, et non comme une autorité à accepter. C'est le cœur de la [[trust-calibration|calibration de la confiance]] et la raison pour laquelle « toujours vérifier » vaut mieux que « toujours se fier ».

**« Utiliser l'IA, c'est apprendre. »** *C'est une idée fausse.* Produire un travail *avec* l'IA ne revient pas à acquérir la connaissance ou la compétence que ce travail est censé démontrer. *La correction :* l'apprentissage durable se produit à travers les processus effortés de rédaction, de remémoration, de révision et de reprise métacognitive — exactement les processus que le [[cognitive-offloading|délestage]] vers l'IA court-circuite. Utilisez l'IA comme un outil aux côtés de cet effort, et non comme un substitut.

**« L'IA est neutre et objective. »** *C'est une idée fausse.* Les modèles héritent des biais, des lacunes et des perspectives de leurs données d'entraînement. *La correction :* l'IA peut reproduire et amplifier les [[bias-mitigation|biais]] ; traitez ses productions avec le même examen critique des sources que vous appliqueriez à tout autre texte. La conscience de ce fait fait partie de l'[[ai-literacy|littératie en IA]] et aide à contrecarrer les préjudices pour l'[[equity-in-ai-education|équité]] d'une adoption acritique.

**« L'IA va remplacer les enseignants. »** *C'est une idée fausse.* L'IA augmente mais ne déplace pas le travail [[pedagogy|pédagogique]] des [[teacher-role|enseignants]] — le jugement, la mise en contexte, et les dimensions relationnelles et [[ethics|éthiques]] de l'enseignement. *La correction :* l'IA accroît le besoin de médiation pédagogique et de jugement critique ; les enseignants qui comprennent l'IA deviennent plus efficaces, et non obsolètes. Ce recadrage importe parce qu'il détermine si les institutions investissent dans la [[teacher-ai-competency|compétence des enseignants en IA]] ou résistent réflexivement ou sur-adoptent.

**« L'IA comprend comme une personne. »** *C'est une idée fausse.* Les modèles n'ont aucune intention, aucun souvenir de vous, ni de compréhension véritable de votre contexte. *La correction :* anthropomorphiser l'IA conduit à une confiance excessive et à un appui sur des explications que le modèle ne peut en fait pas fonder. Gardez la frontière claire : l'IA est un outil puissant, et non un esprit.

**« L'IA va transformer l'éducation automatiquement. »** *C'est une idée fausse.* La technologie seule ne change pas l'apprentissage ; c'est la pédagogie qui l'entoure qui le fait. *La correction :* les bénéfices de l'IA dépendent d'une [[learning-design|conception pédagogique]] intentionnelle, de la préparation des enseignants et du soutien institutionnel — et non du simple déploiement de l'outil. C'est pourquoi les [[ai-ed-evaluation|preuves]] et une [[research-methods-aied|évaluation rigoureuse]] importent, et pourquoi la base de connaissances cadre l'usage responsable de l'IA comme une question de [[governance|gouvernance]] et d'[[educational-policy-ai|élaboration de politiques]] plutôt que comme une question purement technique.

**« Une seule invite devrait me donner la réponse. »** *C'est une idée fausse.* La production est non déterministe et sensible aux invites. *La correction :* attendez-vous à itérer, affiner et recouper ; le « fossé de l'ingénierie des invites » — prendre des premiers résultats superficiels pour le plafond de l'outil — est un problème de compétence, et non une limite de l'outil. Le développer fait partie de l'[[prompt-engineering|ingénierie des invites]].

**« Ce n'est pas de la triche si une personne ne l'a pas écrit. »** *C'est une idée fausse.* L'intégrité académique porte sur la production honnête et attribuable d'un travail, et pas seulement sur le fait de ne pas copier une personne. *La correction :* une remise non divulguée produite par l'IA peut violer l'[[academic-integrity|intégrité académique]] même quand aucun humain n'a été copié ; la question est de savoir si le travail est véritablement celui de l'apprenant. En cas de doute, divulguez et vérifiez la politique de votre institution.

Ces réfutations sont délibérément écrites sous la forme du [[refutation-text|texte de réfutation]] afin de pouvoir elles-mêmes être utilisées (ou adaptées en un [[conversational-ai|dialogue d'IA]] interactif) pour confronter et corriger les idées fausses sur l'IA — et, plus largement, sur l'apprentissage, l'enseignement et l'éducation.

## Concepts liés

- [[pedagogical-patterns]] — Les séquences de changement conceptuel qui confrontent une croyance spécifiquement entretenue
- [[learners]] — Les apprenants : le parapluie des concepts du côté de l'apprenant
- [[ai-literacy]]
- [[trust-calibration]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[generative-ai]]
- [[student-experience]]
- [[framing-ai-use-for-students]]
- [[refutation-text]]
- [[teacher-role]]
- [[educational-policy-ai]]
- [[trust]]

## Articles liés

- [[rudolph-ai-myths-critical-higher-ed]] — Ne croyez pas le battage médiatique : huit mythes sur l'IA et la nécessité d'une approche critique dans l'enseignement supérieur
- [[student-rationalization-ai-writing]] — La rationalisation par les étudiants de l'écriture assistée par IA
- [[genai-skill-bypass-literacy]] — Le contournement des compétences par l'IA générative et la littératie
- [[trust-reliance-ai-education-2026]] — Confiance et dépendance dans l'éducation à l'IA
- [[contextual-sycophancy-ai-literacy]] — La flagornerie contextuelle et la littératie en IA
- [[sycophantic-ai-social-interaction-2026]] — L'IA flagorneuse dans l'interaction sociale
- [[llm-fallacy-misattribution]] — L'attribution erronée de sophismes aux grands modèles de langue (Kim et al.)
- [[student-reception-genai-analogies-computing-2026]] — Défectueuses mais mémorables : la réception critique par les étudiants d'analogies générées par l'IA générative et personnalisées selon leurs intérêts en enseignement de l'informatique
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS : des explications fluides et assurées qui sont fausses conceptuellement plutôt que factuellement (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Des instructions cachées dans un fichier remis peuvent faire monter une note attribuée par l'IA sans avertissement visible (Humble 2026)
- [[children-ai-safety-misconceptions-2026]] — Les idées fausses des enfants sur la sécurité de l'IA : l'amitié avec un robot mal interprétée comme une garantie de vie privée (Leisten et al. 2026)
