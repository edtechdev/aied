---
title: "Évaluation orale"
created: "2026-09-23T08:35:38-04:00"
updated: "2026-10-10T04:00:01-04:00"
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale]
type: concept
foundations: [academic-integrity, critical-thinking]
pedagogy: [scaffolding, metacognition]
technology: [generative-ai, llm, speech-and-voice-technologies]
assessment: [assessment, assessment-validity, authentic-assessment, automated-assessment, ai-detection]
ethics: [trust]
audience: [instructors, administrators]
level: [higher ed]
confidence: medium
contributors: [editor]
translation_of: concepts/oral-assessment
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Évaluation orale (Oral assessment)** — une évaluation dans laquelle un apprenant doit expliquer, défendre ou démontrer sa compréhension par la parole, en direct ou enregistrée : la soutenance orale, l'examen oral, la défense orale, l'entretien de revue de code, la consultation clinique. Parce que l'échange est en temps réel et que les questions n'ont pas besoin d'être connues à l'avance, le format résiste à la substitution de texte généré à la compréhension d'une manière que les tâches [[authentic-assessment|authentiques]] à faire chez soi ne peuvent pas. Il porte aussi un problème de validité distinctif : les oraux mesurent la fluidité et la confiance aux côtés des connaissances, si bien que ce qu'ils certifient dépend fortement de la manière dont ils sont conçus, de qui pose les questions, et de la façon dont la parole de l'apprenant est traitée comme une preuve.

## Questions à examiner

- Les oraux sont promus à l'ère de l'IA parce qu'une machine ne peut pas s'asseoir dans la salle et répondre à votre place. Pourtant, le corpus qui avance cet argument ne contient aucun essai randomisé comparant l'oral à l'écrit. Que vous faudrait-il voir avant de traiter cet argument comme tranché ?
- Le même ensemble de travaux rapporte deux mécanismes différents de réduction de l'anxiété : le retrait de l'observation en direct par l'enseignant, et la familiarisation avec le format par la pratique. Celles-ci impliquent des conceptions différentes. Laquelle correspond à votre contexte, et à laquelle feriez-vous confiance pour se généraliser ?
- La notation fondée sur la seule parole peut confondre la fluidité verbale et la compréhension conceptuelle. Si un apprenant fait le bon geste mais dit le mauvais mot, ou dit le bon mot sans le comprendre, qu'est-ce que votre évaluation mesure exactement ?
- Chaque conception orale de ce corpus se heurte au même mur : le temps du personnel et des salles. Si la contrainte est de vingt-huit heures de contact par semestre pour quinze étudiants, la réponse honnête est-elle un plus petit nombre de devoirs défendus, une équipe enseignante plus grande, ou un format différent ?

## Introduction

L'évaluation orale est l'un des plus anciens formats d'évaluation et, pendant l'essentiel du siècle dernier, l'un des moins à la mode : difficile à passer à l'échelle, difficile à standardiser, difficile à défendre dans une procédure d'appel. L'IA générative a renversé sa fortune. Lorsqu'une remise écrite peut être produite à la demande par un modèle, la valeur évaluative de l'artefact s'effondre, et l'attention se déplace vers l'évaluation de la personne. Un apprenant qui doit répondre à voix haute, en temps réel, à une question qui lui est inconnue est au moins manifestement présent et pensant.

Ce renversement est désormais visible à travers le corpus de recherche, mais de manière inégale. Certains travaux traitent l'examen oral comme une réponse politique à l'[[academic-integrity|intégrité académique]], certains conçoivent un système automatisé pour délivrer ou noter la performance orale à grande échelle, et certains demandent ce que la parole elle-même peut et ne peut pas montrer de la compréhension. Les pages reliées ci-dessous ne s'accordent pas sur ce que les oraux prouvent réellement. Lues ensemble, elles étayent une affirmation plus étroite et plus défendable que celle qu'on avance habituellement pour eux.

## Ce qu'une performance en direct peut certifier

[[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] avance la forme la plus forte de l'argument. S'appuyant sur la littérature sur l'[[authentic-assessment|évaluation authentique]], le plaidoyer de l'article pour l'examen oral repose sur son interactivité : les questions peuvent être retenues jusqu'au moment de l'examen, les questions de suivi peuvent être improvisées, et l'apprenant ne peut pas répéter une réponse à une question qu'il n'a pas vue. Le format bloque aussi la mémorisation par cœur, parce que la remémoration est contrôlée par l'explication plutôt que par la reproduction. L'article est une revue et un texte de position dans *Educational Researcher*, et non une étude empirique, et il se conclut par treize recommandations de mise en œuvre numérotées plutôt que par des preuves de résultats améliorés.

La version honnête de l'affirmation sur l'intégrité est plus étroite qu'on ne l'énonce souvent. Les oraux rendent la substitution plus difficile à cacher ; le corpus ne montre pas qu'ils réduisent l'usage de l'IA. Dans [[code-review-genai-cs1|l'étude de revue de code orale en CS1]], des entretiens hebdomadaires de quinze minutes portaient soixante-dix pour cent de la note de chaque devoir, et le rapport des caractères collés au total a malgré tout augmenté de 61,0 pour cent à 68,1 pour cent (p < 0,0001) sur trois semestres, tandis que les scores à l'examen ne se déplaçaient que de deux pour cent, statistiquement non significatif. Quatre-vingt-dix pour cent des étudiants ont dit que les revues les motivaient à mieux comprendre leur code et soixante-cinq pour cent qu'elles les aidaient à éviter une dépendance excessive à l'IA, mais le comportement mesuré n'a pas suivi. L'évaluation orale a changé ce qui pouvait être caché, et non ce que les étudiants faisaient.

## L'espace de conception que le corpus couvre réellement

Les formats du corpus s'étendent sur un large éventail d'automatisation et de synchronie, et chacun résout une partie différente du problème.

**En direct, humain, synchrone.** La soutenance examinée par [[aivaluate-anxiety-assessment-2026|une étude de soutenance orale menée auprès de trente-cinq étudiants préuniversitaires]] est la référence : même enseignant, mêmes questions, une passation en face à face et l'autre médiée par un système d'IA. La soutenance doctorale apparaît dans [[pgr-students-genai-uses-qualitative-2026|une étude qualitative de quinze chercheurs diplômés]], où les participants plaidèrent pour y déplacer le poids de l'évaluation au motif qu'une thèse est plus facile à falsifier et que la soutenance doit se dérouler en personne. Les auteurs n'acceptent ce raisonnement qu'en partie, puisqu'une soutenance n'est pas intrinsèquement une preuve contre l'assistance par l'IA.

**Enregistrée et asynchrone.** [[asynchronous-oral-assessment-2026|Les évaluations orales asynchrones]] remplacent la salle par une réponse par webcam limitée dans le temps et non révisable, avec environ trente secondes de préparation et deux à trois minutes de parole. Dans le pilote rapporté, les scores ont dépassé ceux des tests à choix multiples en personne : médiane de mi-parcours 92,5 contre 70 (p < ,001) et médiane finale 94,2 contre 86,4 (p = ,002), avec seulement des corrélations modérées entre formats. Les auteurs attribuent explicitement la différence au format plutôt qu'à l'apprentissage, et la conception portait 7,5 pour cent de la note du cours.

**Délivrance et notation automatisées.** [[ai-supported-oral-assessment-tvet-2026|Un système vocal mis à l'essai dans des classes professionnelles d'automobile et d'ingénierie]] a évalué trente-trois apprenants, dont vingt et un ont jugé réaliste la tâche vocale en direct et aucun n'a contesté que parler en temps réel convenait mieux à la tâche qu'un portfolio écrit. Les décomptes de mots pour des questions identiques variaient d'un facteur cinq à huit entre apprenants, la fluidité ne conférait aucun avantage d'exactitude sur les items fermés, et une note préliminaire d'un agent égalait celle du tuteur humain dans quatre-vingt-quinze pour cent des essais adjacents en horticulture et en laiterie. [[socratic-tests-conversational-assessment|Un test socratique conversationnel]] prend la voie de conception inverse, visant l'interrogation conceptuelle ; ses preuves consistent en une enquête par auto-déclaration de quatre-vingt-dix-huit étudiants, dans laquelle 80,6 pour cent convenaient que l'IA étayait efficacement et cinquante-deux pour cent rapportaient un stress plus faible qu'aux examens traditionnels. Les deux articles mesurent l'acceptation plutôt que l'apprentissage.

**La preuve orale comme défense plutôt que comme examen.** [[tool-invariant-framework-agentic-ai|Un cadre d'évaluation invariant à l'outil]] associe des quiz en classe sans IA à des défenses orales de dix minutes de travaux assistés par l'IA dont les commentaires ont été retirés, notées sur la compréhension du code, la compréhension de la méthode, la terminologie, l'interprétation et la vérification, la vérification étant exigée pour réussir quel que soit le total. La conception est argumentée plutôt que validée ; l'arithmétique propre à l'article pour quinze étudiants est de deux heures et demie de contact par devoir et d'environ vingt-huit heures de contact par semestre sur onze devoirs défendus.

## Anxiété, biais, et qui le format désavantage

Les oraux sont plaidés sur des bases d'inclusion, parce qu'une réponse parlée est plus difficile à acheter qu'une réponse écrite, et contestés sur les mêmes bases. [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton]] catalogue directement les défis : la charge de planification, l'anxiété, et les biais selon le genre, l'origine ethnique, la langue et la vitesse de réponse, ainsi que les effets de la notation non anonyme. En face, les preuves que cite l'article suggèrent que les oraux peuvent être aussi inclusifs que les examens écrits, y compris pour les étudiants dyslexiques, et que c'est l'inhabituel, plutôt que le format lui-même, qui alimente l'essentiel de l'anxiété rapportée ; les étudiants d'une étude citée étaient moins anxieux à leurs examens oraux ultérieurs.

Là où l'anxiété baisse réellement, la raison importe. Dans la soutenance médiée par l'IA, le calme auto-déclaré était significativement plus élevé que dans la version en face à face (moyennes 6,50 contre 5,86, t(34) = −1,97, p = ,028), et l'utilisabilité était jugée bonne. Mais la condition en face à face obtenait un score significativement plus élevé sur l'aide à la compréhension de leur propre travail par les étudiants (p = ,004). Retirer l'observation en direct par l'enseignant a rendu les étudiants plus calmes et, d'après leur propre rapport, moins éclairants pour eux-mêmes.

Ce qui compte comme preuve orale est aussi plus étroit qu'il n'y paraît. [[multimodal-embodied-cognition-oral-explanations-2026|Une étude de la preuve incarnée dans les explications orales]] soutient que noter la seule parole confond la fluidité verbale et la connaissance conceptuelle et désavantage les apprenants ayant des difficultés liées au langage, puisque le geste porte une compréhension que la transcription perd. Sa démonstration est petite : deux étudiants en ingénierie expliquant des concepts statistiques, avec des gestes de haute confiance se regroupant sur des idées particulières, des formes carrées et en boîte à environ cinquante-quatre à soixante et un pour cent, et une coordination geste–parole plus serrée accompagnant des explications plus cohérentes.

## Notation, validité et problème d'échelle

Trois constats militent contre la lecture des scores oraux comme des gains d'apprentissage. [[asynchronous-oral-assessment-2026|L'étude du format asynchrone]] se défend d'attribuer des gains d'apprentissage à son propre avantage de score, et rapporte un accord de renotation entre enseignant et modèle de CCI 0,73 à mi-parcours et 0,60 à la finale, ce qui borne la confiance qu'on peut accorder à la notation par machine. Dans [[ai-standardized-patient-scaffolding-medical-2026|un ECR portant sur cent étudiants en médecine de troisième année]] comparant un système de patient simulé à des matériels de cas à divulgation progressive, la performance à l'examen final a augmenté (71,8 contre 55,6 pour cent, g de Hedges = −0,81) et les notations de communication à l'ECOS ont augmenté (3,53 contre 2,64 sur une échelle en cinq points), tandis que l'exactitude diagnostique binaire était statistiquement identique (84 contre 86 pour cent, P = 1,000). Une lecture centrée sur la seule exactité qualifierait l'intervention de nulle ; une lecture centrée sur la seule communication la qualifierait de transformative.

La contrainte déterminante est le personnel et le matériel plutôt que la pédagogie, et le corpus est exceptionnellement franc sur l'arithmétique : vingt-huit heures de contact par semestre pour quinze étudiants, onze assistants d'enseignement pour une classe de plus de cent dans la conception CS1, et un ordinateur portable servant douze apprenants simultanés dans le déploiement professionnel hors ligne. Aucun essai randomisé comparant l'oral à l'écrit n'existe dans l'ensemble de ces travaux, et chaque étude qui mesure la différence est une conception mono-institution sans groupe témoin. L'évaluation orale est bien étayée comme réponse à la substitution assistée par l'IA, et faiblement étayée comme amélioration de l'apprentissage.

- **Le plafond d'échelle est la contrainte de conception.** Dans un atelier réunissant 73 éducateurs en [[cs-education|informatique]], l'évaluation orale et interactive a été rapportée comme la meilleure preuve disponible de la compréhension individuelle et le remède le moins extensible ; les atténuations que les participants décrivaient étaient la distribution et l'échantillonnage — des viviers partagés d'assistants d'enseignement, une évaluation par les pairs pondérée sous un examen final, et le fait d'interpeller un sous-ensemble tournant d'étudiants ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026]]).

## Concepts liés

- [[pedagogical-patterns]] — Les séquences de vérification orale et de soutenance, et ce qu'elles démontrent ou non
- [[assessment]] — le champ plus large dans lequel ce format s'inscrit
- [[authentic-assessment]] — la tradition de conception qui fonde le plaidoyer pour l'intégrité
- [[assessment-validity]] — ce qu'un format peut et ne peut pas prétendre mesurer
- [[academic-integrity]] — la pression qui a rendu aux oraux leur proéminence
- [[automated-assessment]] — la délivrance et la notation par machine de la performance orale
- [[ai-detection]] — la réponse alternative, et pourquoi elle est plus faible
- [[speech-and-voice-technologies]] — le pipeline de la parole sur lequel tourne un système oral
- [[multimodal]] — le geste et la parole comme preuves combinées
- [[anxiety-and-stress]] — le coût affectif de la performance en direct
- [[feedback]] — ce qu'une soutenance apprend à un apprenant sur sa propre compréhension
- [[higher-ed]] — le contexte dont provient la quasi-totalité de ces preuves

## Articles liés

- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidérer l'usage des examens et évaluations oraux (Fenton 2025)
- [[asynchronous-oral-assessment-2026]] — Évaluations orales asynchrones : intégrité, engagement et communication professionnelle
- [[ai-supported-oral-assessment-tvet-2026]] — Concevoir l'évaluation orale assistée par l'IA dans l'enseignement professionnel
- [[aivaluate-anxiety-assessment-2026]] — Anxiété et expérience dans l'évaluation de la performance médiée par l'IA
- [[code-review-genai-cs1]] — Entretiens oraux de revue de code dans un cours d'introduction à la programmation
- [[multimodal-embodied-cognition-oral-explanations-2026]] — Le geste comme preuve dans l'évaluation des explications orales
- [[socratic-tests-conversational-assessment]] — Le test conversationnel automatisé comme évaluation orale
- [[tool-invariant-framework-agentic-ai]] — Les défenses orales de travaux assistés par l'IA
- [[ai-standardized-patient-scaffolding-medical-2026]] — Les entretiens cliniques oraux sous un système de patient simulé
- [[pgr-students-genai-uses-qualitative-2026]] — La soutenance doctorale à l'ère de l'IA générative
- [[computing-assessment-genai-workshop-report-2026]] — L'IA peut faire vos devoirs. Et maintenant ? Compte rendu d'un atelier en ligne sur l'évaluation en informatique à l'ère de l'IA générative
