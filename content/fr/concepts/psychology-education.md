---
title: "Enseignement de la psychologie"
created: "2026-11-23T14:30:00-05:00"
updated: "2026-11-23T14:30:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [student-ai-interaction]
technology: [generative-ai]
assessment: [assessment-validity]
level: [higher ed, graduate]
confidence: medium
audience: [instructors, curriculum designers, faculty developers]
translation_of: concepts/psychology-education
source_updated: "2026-11-24T18:20:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-23"
    agent: hermes-agent
connected_concepts: [social-sciences-education, humanities-education, ai-literacy, assessment-validity, feedback, self-efficacy, student-ai-interaction]
connected_articles: [richmond-nicholls-genai-psych-feedback-ai-literacies, baudin-ai-generated-mcq-psychology-exams-2025, ai-tutor-statistical-programming-adoption-2026, akkurt-counselor-trainees-chatgpt-simulated-client-2025, armagan-bogatekin-ai-attitudes-psychology-trainees-2026, mental-health-literacy-students-llms-2026, reed-ai-literacy-ethical-judgment-scenarios-2026, critical-genai-use-predictors, hu-psychological-predictors-continued-chatgpt-use-2026, hawkins-feedback-literacy-ai-essay-writing, burke-ai-proliferation-college-students-replication-2026, integrating-generative-ai-in-psychology-courses]
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Enseignement de la psychologie** — l'enseignement de la psychologie comme discipline : le cursus d'introduction et de méthodes, la majeure de premier cycle, et la formation clinique et en counseling qui conduit à la pratique. Elle possède la plus vaste littérature sur l'IA de toutes les disciplines de cette base, et cette littérature, pour l'essentiel, n'étudie pas le curriculum de psychologie. Les étudiants en psychologie sont l'échantillon le plus commode de l'[[higher-ed|enseignement supérieur]]. Ils fournissent les répondants des études génériques sur la [[motivation]] et la rétroaction. Un plus petit ensemble d'études examine les cours eux-mêmes : la conception de l'évaluation dans une unité de deuxième année, un [[intelligent-tutoring|tuteur IA]] dans un cours de statistique, et la formation clinique où l'IA est à la fois un outil et un risque professionnel. La distinction compte, parce qu'un résultat montrant que les étudiants en psychologie utilisent l'[[generative-ai|IA générative]] d'une certaine manière n'est pas un résultat sur l'enseignement de la psychologie.

## Questions à examiner

- Les étudiants en psychologie sont l'échantillon le plus facile à recruter dans l'enseignement supérieur, si bien que la plupart des études sur « les étudiants et l'IA » sont en réalité des études d'étudiants en psychologie. Que peut vous apprendre un résultat issu d'une banque de participants sur votre propre cours, et que ne peut-il pas vous apprendre ?
- Une banque d'items générée peut être fiable selon des standards acceptables tout en ne testant quasiment rien au-delà du rappel. Qu'est-ce qui compte le plus pour la note que vos étudiants obtiennent : que les marques soient cohérentes, ou que les items mesurent ce que le diplôme prétend ?
- L'étude R-Tutor amène un modèle à guider plutôt qu'à répondre au sein d'un cours de statistique. Si le tuteur retient la réponse, qu'enseigne-t-il qu'un [[conversational-ai|agent conversationnel]] qui répond n'enseigne pas ?
- Des stagiaires en counseling se sont entraînés avec un client simulé complaisant, émotionnellement plat et culturellement neutre. De ces trois traits, lequel vous inquiéterait le plus lors de la première séance réelle d'un stagiaire, et pourquoi ?
- La formation clinique est le lieu où un outil devient une affirmation professionnelle, non une aide à l'étude : un système qui recommande un traitement porte un jugement sur une personne. Où traceriez-vous la ligne entre les deux, et qui, dans votre programme, devrait la tracer ?

## Introduction

La psychologie occupe une position inhabituelle dans cette littérature. Elle fournit les méthodes de la discipline, ses construits et la plupart de ses répondants, et elle enseigne aussi un sujet dont les compétences centrales — concevoir une étude, lire une statistique, juger des preuves — sont précisément celles que l'IA générative est le plus souvent accusée de court-circuiter. Cette combinaison fait de l'enseignement de la psychologie à la fois la discipline la mieux documentée de la littérature sur l'IA et l'une des moins étudiées en tant que curriculum.

Séparer les deux représente tout le problème de l'IA pour la discipline. Ce que l'on sait sur l'enseignement de la psychologie elle-même est plus étroit que ne le suggère le volume de la recherche : conception de l'évaluation dans la majeure de premier cycle, tuteur IA dans le cursus de statistique, formation clinique et en counseling où l'IA arrive comme une question professionnelle, et données d'enquête sur ce que savent et croient les étudiants en psychologie. Les études qui utilisent des étudiants en psychologie comme échantillon de commodité pour une question sur les étudiants en général ne constituent pas une preuve sur la discipline, et la différence mérite d'être nommée à chaque fois.

## Pourquoi la psychologie domine la littérature

Trois conditions expliquent le volume. Les départements de psychologie tiennent des banques de participants, si bien que recruter quelques centaines d'étudiants de premier cycle pour un sondage ne coûte presque rien. La scholarship of teaching and learning est bien établie dans la discipline, ce qui offre aux enseignants une voie pour publier des travaux au niveau du cours que la médecine et le droit canalisent surtout par l'agrément. Et les construits que le champ étudie — motivation, auto-efficacité, rétroaction, [[critical-thinking|pensée critique]] — sont les mêmes que la littérature sur l'IA veut mesurer, ce qui fait de la psychologie le lieu naturel pour développer et valider des instruments.

Le résultat est une littérature où la discipline est le décor plutôt que le sujet. Une enquête menée auprès de 991 étudiants de premier cycle de cinq universités, dont 300 en psychologie, vous dit comment les étudiants en général utilisent l'IA ; elle ne vous dit pas si un diplôme de psychologie devrait exiger un cours de statistique dans lequel l'outil est interdit. Ces deux questions méritent d'être posées, et c'est à la seconde que sert la distinction.

## Les preuves au niveau du cours

L'étude de cours la plus claire porte sur la [[assessment|conception de l'évaluation]]. [[richmond-nicholls-genai-psych-feedback-ai-literacies|Richmond et Nicholls]] ont remplacé l'[[peer-assessment|évaluation par les pairs]] par ChatGPT dans un « Media Assignment » de psychologie de deuxième année, où les étudiants traduisent un article publié en communiqué de presse et en vidéo pour un public profane, et la refonte porte sur ce que la tâche demande plutôt que sur l'autorisation de l'outil.

La génération d'évaluations est le second filon. [[baudin-ai-generated-mcq-psychology-exams-2025|Baudin]] a demandé à ChatGPT-4 d'écrire 80 items à choix multiples pour un cours de psychologie expérimentale et leur a fait subir tout l'appareillage psychométrique avec 120 étudiants : cohérence interne acceptable, test-retest modéré, 11,25 % des items peu discriminants, et une distribution de Bloom de 73,75 % de rappel contre 8,75 % d'analyse ou d'évaluation. Ces items constituaient une preuve fiable que les étudiants savaient nommer des choses, et silence sur leur capacité à concevoir une étude.

La statistique est le troisième, et l'intervention la mieux étayée. [[ai-tutor-statistical-programming-adoption-2026|Préau et coll.]] ont déployé un « R-Tutor » construit à cet effet dans un cours de programmation R d'un semestre pour des étudiants de premier cycle en psychologie à Tübingen, dans une [[longitudinal-research|conception longitudinale]] préenregistrée, avec un tuteur invité à guider plutôt qu'à répondre.

Un volume dirigé aborde la même question cours par cours plutôt que étude par étude. [[integrating-generative-ai-in-psychology-courses|Intégrer l'IA générative dans les cours de psychologie]] rassemble vingt et un récits de la Society for the Teaching of Psychology, organisés selon le cours qu'un enseignant s'apprête à donner : fondamentaux et transversaux, cliniques et de counseling, et méthodes de recherche avec statistiques. Ses chapitres sont des comptes rendus de praticiens plutôt que des études, et leur niveau de preuve est inégal. Ils fournissent néanmoins ce que la littérature expérimentale d'ici ne peut pas, à savoir des dispositifs qui ont fonctionné dans des classes particulières. Trois engagements reviennent à travers eux. L'accès est étalé pour que les étudiants aient de quoi juger l'outil. La vérification est exigée et rendue visible. Et le jugement de l'enseignant sur les moments où l'outil ne doit pas être utilisé est considéré comme le résultat visé.

## Formation clinique et counseling

La psychologie clinique est le lieu où l'IA intervient comme une question professionnelle plutôt que comme une aide à l'étude. Les deux études ici se divisent selon cette ligne : l'une sur ce que le client simulé fait au stagiaire, l'autre sur l'ampleur des écarts entre stagiaires.

[[akkurt-counselor-trainees-chatgpt-simulated-client-2025|Akkurt, Maurya et Brown]] ont utilisé GPT-4o comme client simulé pour des stagiaires en counseling. Neuf transcriptions et un groupe de discussion de quatre personnes constituent une preuve mince, mais le schéma est spécifique : le [[simulation|simulateur]] abaissait l'anxiété de performance et construisait la confiance, tandis que le client acquiesçait trop facilement, ne portait aucune nuance émotionnelle et demeurait culturellement neutre — retirant précisément la résistance et les dynamiques identitaires que la formation au counseling existe pour exercer.

[[armagan-bogatekin-ai-attitudes-psychology-trainees-2026|Armagan-Bogatekin]] a modélisé 286 étudiants en psychologie et stagiaires en psychothérapie sur six domaines et trouvé trois à quatre classes latentes dans chacun. Il n'y a pas de stagiaire moyen : scepticisme, anxiété d'apprentissage, anxiété d'emploi et préoccupation du risque forment des profils distincts, et les profils diffèrent selon que l'outil sert d'aide à la rétroaction ou de recommandateur de traitement.

## Ce que les étudiants en psychologie savent, croient et font

Les preuves côté étudiant représentent la plus grande part de la littérature et la moins spécifique à la discipline.

Connaissance et jugement : [[mental-health-literacy-students-llms-2026|Richter et coll.]] ont demandé à 150 étudiants en psychologie de classer 30 énoncés de santé mentale et les ont comparés à quatre LLM sur 80 exécutions chacun ; [[reed-ai-literacy-ethical-judgment-scenarios-2026|Reed et coll.]] ont testé si la [[ai-literacy|littératie en IA]] prédit le jugement éthique appliqué chez 531 étudiants de premier cycle avec six vignettes.

Dispositions : [[critical-genai-use-predictors|Hefter, Paaßen et Berthold]] ont constaté que l'usage critique de GenAI est prédit par la connaissance mesurée à la fois par [[self-report-measures|auto-déclaration]] et par test objectif. L'orientation épistémique et les valeurs intellectuelles portaient le reste ; [[hu-psychological-predictors-continued-chatgpt-use-2026|Hu]] a trouvé l'usage continu médié par la [[trust|confiance]] et l'[[self-efficacy|auto-efficacité]] académique, l'[[anxiety-and-stress|anxiété liée à l'IA]] affaiblissant le premier maillon ; [[hawkins-feedback-literacy-ai-essay-writing|Hawkins et coll.]] ont trouvé la littératie de la rétroaction seul prédicteur significatif de la note de dissertation (β = 0,46) dans une tâche d'écriture assistée par IA simulée.

Usage : [[burke-ai-proliferation-college-students-replication-2026|Burke et coll.]] ont interrogé 991 étudiants de premier cycle de cinq universités et trouvé un usage à 81 %, l'étude déplaçant l'écriture comme tâche la plus fréquente, tandis que 30,2 % des étudiants qualifiant de triche l'usage de l'IA y recourent quand même.

Chacune de ces études porte sur des étudiants qui se trouvent être en psychologie. C'est là l'avantage de la discipline comme site de recherche et sa faiblesse comme littérature.

## La psychologie que la recherche emprunte

La recherche sur l'IA en éducation repose sur un petit ensemble de théories psychologiques antérieures à elle. Les nommer importe, parce que chacune prédit quelque chose de différent sur l'utilité d'un outil.

Le [[cognitive-offloading|délestage cognitif]] dit qu'un outil qui retire l'effort retire l'apprentissage avec lui. L'[[productive-failure|échec productif]] dit que la lutte précédant la réponse est le lieu de l'enseignement. L'[[scaffolding|étayage]] dit que l'aide doit être programmée et retirée, non simplement fournie. Une étude peut citer les trois et pourtant concevoir un outil qui ne satisfait aucune d'elles, raison pour laquelle la théorie appartient à la section méthodes plutôt qu'à l'introduction.

Les cadres qui reviennent le plus ici sont ceux de la cognition individuelle : l'[[self-regulated-learning|apprentissage autorégulé]] et la [[metacognition|métacognition]], l'auto-efficacité, la [[self-determination-theory|théorie de l'autodétermination]] pour la motivation, et le [[feedback|feedback]] dans sa variante [[feedback-literacy|littératie]]. Les études de la section précédente sont typiques du schéma : chacune prend un construit de cette famille, le mesure comme mécanisme, et rapporte dans quel sens va le chemin. Akkurt fait exception, et c'est la plus intéressante : une conception [[situated-learning|située]] dans laquelle un stagiaire répète une pratique plutôt qu'il n'acquiert une proposition.

Deux limites méritent d'être dites. La théorie est habituellement importée comme cadre et rarement confrontée à une rivale, faiblesse que documente le [[theory-development-aied|développement théorique en IA en éducation]]. Et l'unité d'analyse individuelle est contestée : les récits [[sociocultural-learning|socioculturels]] et de la [[activity-theory-aied|théorie de l'activité]], avec la [[distributed-cognition|cognition distribuée]], situent l'apprentissage dans la pièce plutôt que dans la tête, ce qui change ce qu'un agent conversationnel est en train de faire. Les [[learning-theories|théories de l'apprentissage]] tiennent la carte et la [[cognitive-psychology|psychologie cognitive]] la machinerie que la plupart de ces études supposent.

Lorsqu'un article dit « étayage » ou « pensée critique », demandez-vous quelle version de quelle théorie il entend : le mot accomplit un travail différent dans chacune.

## Implications pour les enseignants de psychologie

- **Décidez d'abord ce qu'est censé faire le diplôme, avant de décider ce que l'IA peut faire.** Un diplômé de psychologie doit évaluer des preuves, concevoir une étude et interpréter une statistique. Si tels sont les résultats, la question de l'évaluation est de savoir quelles tâches peuvent encore fournir leur preuve.
- **Faites du cours de statistique le cas d'épreuve.** Il possède les preuves d'intervention les plus solides de la discipline (R-Tutor) et la tentation la plus claire de recourir à l'IA comme calculette plutôt que comme tuteur.
- **Auditez les banques d'items générés au niveau Bloom, non au niveau de la fiabilité.** La banque de Baudin était fiable et essentiellement du rappel.
- **En formation clinique, enseignez l'outil et la limite ensemble.** Les profils de stagiaires diffèrent, et l'outil de recommandation de traitement soulève une question d'identité professionnelle qu'aucune formation aux capacités ne répond.
- **Ne généralisez pas d'échantillons de banque de participants à votre propre cours.** Les résultats génériques décrivent des étudiants ; votre cours est une décision de conception.

## Idées fausses courantes

- **« Les étudiants en psychologie sont représentatifs des étudiants en général. »** Ils sont commodes, non représentatifs, et les études qui les utilisent le disent d'ordinaire.
- **« L'IA dans l'enseignement de la psychologie porte principalement sur les outils cliniques. »** La plus grande part des études concerne l'[[writing-education|écriture]], la rétroaction et les habitudes d'étude ; les outils cliniques sont un filon restreint, récent et distinct.
- **« Des items générés fiables sont des items utilisables. »** La fiabilité sans couverture des résultats d'ordre supérieur produit un test bien mesuré de la mauvaise chose.
- **« Les stagiaires sont soit pour, soit contre l'IA. »** Les preuves de classes latentes indiquent quatre profils ou plus par domaine, différant selon l'outil.
