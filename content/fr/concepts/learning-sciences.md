---
title: "Sciences de l'apprentissage"
created: "2026-09-17T14:12:00-04:00"
updated: "2026-10-10T03:05:35-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/learning-sciences
source_updated: "2026-09-17T14:48:59-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Sciences de l'apprentissage** — le champ de recherche interdisciplinaire qui étudie comment les gens apprennent et comment concevoir des environnements dans lesquels l'apprentissage a lieu, en s'appuyant sur la [[cognitive-psychology|psychologie cognitive]], la [[learning-theories|théorie de l'apprentissage]], l'informatique et la linguistique, et en jugeant ses conceptions à l'aune de données empiriques plutôt qu'au seul motif de la théorie. Dans cette base de connaissances, c'est le champ de recherche qui entoure l'[[ai-education|IA en éducation]] plutôt qu'une des matières scolaires : il fournit les mécanismes que les systèmes d'IA opérationnalisent (composantes de connaissances, [[mastery-learning|seuils de maîtrise]], [[transfer-of-learning|transfert]]), les objets de conception dans lesquels ils s'insèrent ([[learning-design|progressions de cours planifiées]], [[intelligent-tutoring|tuteurs]], régimes de [[feedback]]) et les normes selon lesquelles ils sont jugés ([[learning-gains|gains d'apprentissage]], [[assessment-validity|validité de l'évaluation]], [[equity-in-ai-education|équité]]). Sa question organisatrice n'est pas de savoir si un outil performe bien, mais si un apprenant a changé.

## Questions à examiner

- Un apprenant réussit chaque item de pratique, de sorte que le seuil de maîtrise met fin à la série — puis applique mal la règle là où l'action devrait être retenue. À qui est l'erreur : à l'apprenant, au modèle ou à la règle d'arrêt ?
- L'exploration de séquences peut décrire 554 cours sous forme de patrons sans observer une seule classe. Que gagne, et que perd, le champ à étudier les intentions conçues plutôt que l'activité effectivement déployée ?
- La sensibilité démographique dans la rétroaction d'un LLM ressemble à de l'adaptation quand elle suit le niveau d'éducation déclaré par un apprenant, et à un biais quand elle déplace le sentiment exprimé. Un champ qui ne peut pas distinguer les deux devrait-il continuer d'utiliser des modèles ouverts pour évaluer ?
- L'appétit des sciences de l'apprentissage pour la conception causale — affectation aléatoire, audits contrefactuels, modèles exécutables de l'apprenant — restreint-il ce qui compte comme donnée probante dans l'IA en éducation ?

## Introduction
Les sciences de l'apprentissage étudient l'apprentissage et la conception des environnements d'apprentissage, et elles sont définies par leurs méthodes autant que par leurs sujets : expérimentations, essais en classe, modélisation [[quantitative-research|quantitative]] des données d'étudiants, analyse [[qualitative-research|qualitative]] des conceptions et des contextes, et recherche fondée sur la conception, qui construit une intervention et la révise en usage. Cette ampleur sépare cette page des pages voisines qui fournissent les cadres, la pratique et les instruments ; la section ci-dessous expose chaque frontière et ce que le champ a établi de l'autre côté.

Cette page couvre les connaissances substantielles que ces méthodes ont produites — ce que les apprenants font d'un modèle génératif, quels dispositifs changent les résultats, et là où les propres instruments du champ échouent. La page [[discipline-specific-aied]] opère la coupe inverse, soutenant que la matière enseignée change ce que le soutien devrait faire ; les sciences de l'apprentissage adoptent le point de vue transversal, et les mécanismes qu'elles testent sont rassemblés sous la [[cognitive-psychology]].

### Comment l'IA apparaît dans les sciences de l'apprentissage

- **Le mécanisme d'abord, le modèle ensuite.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren et Stamper (2026)]] ont mené onze expérimentations (N = 192) avec des systèmes d'[[intelligent-tutoring]] pour le mahjong Riichi et ont montré que les apprenants qui avaient compilé une production surgénéralisée — l'action sans sa contrainte d'application — l'appliquaient mal au premier item de type « ne pas agir » dans 61.5% à 100% des cas, contre 12% d'erreur attendue selon le [[knowledge-tracing|traçage bayésien des connaissances]]. Avec un seuil de maîtrise de 95%, le système interrompait la pratique avant que les apprenants ne rencontrent un cas exigeant de retenir l'action, de sorte que le défaut passait inaperçu. Une brève pratique sur les cas de non-action, avec une [[feedback]] nommant la contrainte manquante, a ramené la mauvaise application à 0.0%–23.1% (h de Cohen 1.70–2.44), et une analyse secondaire de treize ensembles de données K-12 de *Decimal Point* a retrouvé la même structure dans le biais des nombres entiers (84%–88% des erreurs de comparaison).

- **L'optimum dépend du contenu.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger et Carvalho (2025)]] traitent le rapport exemples–problèmes comme une interaction contenu–traitement : dans une expérimentation 2×2 réunissant 95 participants sur un matériel de géométrie et d'aires, l'entraînement fondé sur la seule pratique produisait des [[learning-gains|gains d'apprentissage]] plus importants pour les faits littéraux, tandis que l'entraînement intégrant des exemples produisait des gains plus importants pour les compétences généralisables (β = 0.41, p = .038, d = 0.38). Un apprenant simulé (Apprentice Learner) ne reproduisait le croisement que s'il était doté d'un mécanisme de mémoire et d'oubli de type ACT-R, au sens de la [[cognitive-psychology|psychologie cognitive]]. Davantage de pratique n'est pas uniformément meilleur : un contenu orienté vers la mémoire appelle la récupération, et des compétences orientées vers l'induction appellent des exemples intégrés.

- **La conception comme objet analysable.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec et Horvat (2026)]] ont tourné la [[learning-analytics]] vers la [[learning-design]] elle-même, en codant 29,064 activités réparties sur 554 cours planifiés dans un outil libre de conception de cours. L'acquisition était le type d'apprentissage le plus fréquent et le point d'entrée le plus fréquent ; la transition de Markov la plus forte allait de l'Évaluation à la Discussion (0.332) et la règle de plus haute confiance allait de l'Acquisition à l'Évaluation, puis à la Pratique, puis à la Pratique (0.743, lift 1.45). Le type d'apprentissage suivait le niveau de résultat visé, l'Acquisition passant d'environ 50% des activités au niveau 1 de Bloom à environ 20% au niveau 6. Les auteurs soulignent qu'il s'agit de conceptions antérieures à la mise en œuvre : la ressemblance avec des progressions de classe inversée, [[inquiry-based-learning|fondées sur l'enquête]] ou [[project-based-learning|fondées sur les projets]] ne constitue pas une preuve d'intention.

- **Auditer les modèles qui évaluent.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto et Hovy (2026)]] ont audité six [[llm|LLM]] sur l'[[automated-essay-scoring|correction de dissertations]], la rétroaction [[formative-assessment|formative]] et les questions-réponses, en maintenant l'entrée de la tâche fixe tout en ne faisant varier que le contexte démographique (192,480 appels). La correction était stable sous des personas explicites, mais Llama-70B gonflait ses propres notes de 1.57 points sous un historique conversationnel implicite (p < 0.001), et un niveau d'éducation plus élevé produisait des réponses moins lisibles et plus positives — un écart de sentiment d'environ quatre écarts-types. Les effets de lisibilité se réduisaient tandis que les effets de longueur s'accroissaient, et certains coefficients changeaient de signe d'une condition à l'autre. Les auteurs proposent ce dispositif comme un instrument d'audit, et non comme un verdict sur le déploiement, et lisent l'imbrication du signal démographique et du signal thématique comme une menace pour la [[assessment-validity|validité]] et l'[[equity-in-ai-education|équité]].

- **Mesurer la compétence, et ses limites.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]] organise les instruments de mesure de l'usage compétent de l'[[generative-ai]] en quatre domaines — connaissances et usage, supervision épistémique, calibrage du recours et contrôle des agents utilisant des outils — refusant de les fondre en un unique continuum de compétence. Trois corrélations sur un même échantillon entre littératie en [[ai-literacy|IA]] autoévaluée et démontrée donnent r = .055 (IC à 95% [-.047, .156], N rapporté = 2,765), ce que l'auteur lit comme suffisant pour rejeter le traitement des [[self-report-measures|auto-évaluations]] comme interchangeables avec les scores de performance, mais insuffisant pour fixer un seuil. Aucun instrument validé ne couvrait l'ensemble des décisions que créent les agents utilisant des outils ; la batterie multicouche proposée est une hypothèse de conception.

- **L'auto-déclaration à propos du délestage propre de l'apprenant.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]] traduit la littérature sur le [[cognitive-offloading]] en PAUSE, un auto-contrôle fonctionnant uniquement dans le navigateur, comportant quatre domaines, dont chaque item de l'ère des LLM est rattaché à une source, sans score composite, sans stockage et sans modèle en production ; ses paliers sont descriptifs plutôt que normés, et une lecture ne doit pas justifier des décisions d'évaluation, d'admission ou de recrutement. Ses limites déclarées importent : l'auto-déclaration du délestage est vulnérable à la faculté qu'elle concerne, un répondant qui utilise délibérément l'IA comme [[scaffolding|étayage]] apparaît comme délestant sur plusieurs items, et la question de savoir si le délestage associé à l'IA se distingue d'une dépendance technologique générale reste ouverte.

- **Là où se situe l'expertise humaine.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] rapportent la division du travail la plus nette : dans un [[rct|essai contrôlé randomisé]] de deux mois réunissant environ 900 tuteurs novices du primaire et du secondaire et quelque 1,800 élèves, des suggestions en temps réel tirées du raisonnement de tuteurs expérimentés ont fait progresser la maîtrise des sujets de 4 points de pourcentage (de 62% à 66%, p < 0.01), et de 9 points pour les tuteurs les moins bien notés, pour environ 20 $ par tuteur et par an, en déplaçant le tutorat vers des questions guidantes. Les gains étaient proximaux — les tests de fin d'année n'ont pas bougé. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] constatent que les enseignants parviennent à la même position par la conception : six enseignants du secondaire prototypant des chatbots ont spécifié un expert borné, en tenant des frontières d'autorité (la responsabilité de l'apprentissage et de la sécurité n'est pas délégable) et des frontières d'expertise (le modèle ne possède pas leur connaissance des élèves pris individuellement), et en déléguant la présentation de contenu, la pratique et la rétroaction corrective [[feedback]], tout en réservant la fixation des objectifs et l'[[summative-assessment|évaluation sommative]].

- **La compétence au niveau du champ.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury et Liu (2026)]] ont enquêté auprès de 127 enseignants avec un instrument [[tpack|TPACK]] adapté à l'IA générative : de solides connaissances du contenu et des connaissances pédagogiques du contenu (M = 4.70–5.15) aux côtés de connaissances intégrant la technologie nettement plus faibles, le TPACK holistique étant le plus bas à 2.55, les connaissances du contenu n'étant corrélées à aucun domaine intégrant la technologie, et les trois domaines intégrés corrélant si fortement (r = .81–.91) qu'ils pourraient fonctionner comme un seul facteur. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] lit la couche de gouvernance à travers un prototype abandonné de la fonction publique britannique, dont la base de code était une invite système plus un pipeline de recherche documentaire sur des modèles commerciaux, soutenant que la généralité des modèles de fondation permet à la fois un réemploi rapide en outils d'[[educational-policy-ai|action publique]] et fait de la sortie aberrante un risque seulement atténuable de façon permanente — une supervision qui plane au-dessus de la boucle plutôt qu'elle ne siège en son intérieur.

## Comment les sciences de l'apprentissage se rapportent à leurs voisines

La [[design-based-research|recherche fondée sur la conception]] est la méthode que ce champ a développée plutôt qu'empruntée : une intervention est construite et révisée à l'intérieur d'une classe en fonctionnement, son rationale théorique étant révisée en même temps, de sorte qu'une seule étude produit à la fois un artefact et un principe de conception. C'est ce qui la sépare d'une expérimentation de laboratoire, qui isole une cause en maintenant le contexte immobile, et c'est pourquoi les résultats du champ arrivent comme des connaissances de conception plutôt que comme des tailles d'effet. La page [[research-methods-aied]] opère la coupe inverse : elle passe en revue tout le répertoire — expérimentations, enquêtes, travaux qualitatifs, repères de référence, revues, méthodes de consensus — comme un choix parmi des instruments, soupesés selon la validité de l'affirmation que chacun peut soutenir. Cette page lit le même corpus du côté substantif, en demandant ce que le répertoire a établi à propos de l'apprentissage et en jugeant une méthode selon que son ambition de conception survit au contact des apprenants.

La page [[learning-theories]] rassemble les cadres candidats — behaviorisme, cognitivisme, constructivisme, approches socioculturelles, motivation et autorégulation — comme des lunettes pour lire l'IA. Les sciences de l'apprentissage partagent ce vocabulaire mais pas cette posture : ici, une théorie est une affirmation sur le mécanisme qu'une conception doit soit instancier, soit réfuter, et la position du champ repose sur un travail empirique et de conception plutôt que sur la cohérence d'un cadre. La page des théories est celle à ouvrir pour savoir ce qu'un cadre affirme ; cette page est celle des données probantes qu'un cadre a accumulées.

Le champ construit aussi de la théorie, au lieu de seulement tester des cadres empruntés : la page [[theory-development-aied]] couvre le travail conceptuel qui explique comment les apprenants, les enseignants et les systèmes d'IA interagissent, et c'est là que les propres constructions du champ sont argumentées avant d'être mesurées. Ce que ses conceptions sont le plus souvent sommées de produire est le [[transfer-of-learning|transfert]] — la connaissance et la compétence qui survivent au-delà du tuteur, de la matière ou de la tâche où elles ont été acquises — c'est pourquoi un gain mesuré à l'intérieur d'un outil compte comme une affirmation plus faible qu'un gain mesuré sans lui. Et parce qu'un environnement conçu est une intervention composée, l'attribution d'un résultat à une seule composante est le problème de mesure permanent du champ : la page [[educational-measurement]] fournit l'appareil psychométrique qui rend cette attribution seulement arguable, ce qui explique pourquoi les questions de mesure arrivent tôt ici plutôt qu'après coup.

La [[cognitive-psychology]] est la discipline du niveau du mécanisme dont le champ s'inspire le plus massivement, fournissant la mémoire de travail bornée, l'encodage et la récupération, les composantes de connaissances décomposables et le langage diagnostique de la modélisation de l'apprenant. Les sciences de l'apprentissage utilisent ces mécanismes sans s'y réduire : leur unité d'analyse est un environnement conçu portant des variables sociales, motivationnelles et contextuelles qu'un compte rendu de laboratoire de la mémoire ne porte pas, et leurs tests sont menés sur des interventions entières plutôt que sur des effets cognitifs isolés.

La [[pedagogy]] et la [[learning-design]] couvrent la pratique — quelle stratégie d'enseignement utiliser, et comment ordonnancer les objectifs, les activités et l'évaluation en un cours. Toutes deux sont ce que les sciences de l'apprentissage étudient de l'extérieur, comme objets de description et d'évaluation ; le champ ne dit pas à un enseignant quelle tactique adopter ensuite, il rapporte ce que les tactiques ont montré faire. La conception de l'apprentissage est la parente la plus proche, puisque toutes deux produisent quelque chose qui peut être mis en œuvre et testé, mais la production du concepteur est un cours enseignable, tandis que la production du champ est une connaissance sur les conceptions en général.

Les résultats n'importent qu'une fois parvenus à l'enseignement, et ce parcours passe par trois pages. L'[[educational-development]] est la pratique institutionnelle qui les porte — développement du corps professoral, standards, politique et travail sur l'identité décident si une conception validée atteint jamais une classe, ce qui explique pourquoi les données probantes du champ devancent régulièrement ce que les institutions ont mis en œuvre. La [[teacher-education]] est l'endroit où la connaissance doit atterrir avant qu'un enseignant n'entre dans la classe, et le [[teacher-role]] est l'endroit où elle atterrit ensuite, dans le jugement instant après instant sur le moment d'intervenir, l'instrument à utiliser, et le moment de laisser un apprenant tranquille. Aucune des trois ne produit des résultats de sciences de l'apprentissage ; toutes trois décident si ces résultats changent la pratique.

## Concepts liés

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## Articles liés

- [[competent-generative-ai-use-measures-review-2026]] — Revue et méta-analyse exploratoire des instruments de mesure de l'usage compétent de l'IA générative (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — L'exactitude masquant une règle incomplète : les règles d'arrêt par maîtrise dans l'apprentissage adaptatif (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Audit contrefactuel des signaux démographiques dans l'évaluation des étudiants par LLM (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Chaînes de Markov et exploration de patrons sur 29,064 activités réparties sur 554 cours (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — Un auto-contrôle préservant la vie privée et non diagnostique du délestage associé à l'IA (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Zero-shot governance : l'IA à usage général dans l'action publique, lue à travers la base de code de Redbox (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Why the best example–problem ratio depends on content (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Les enseignants conçoivent des chatbots experts bornés, avec délégation sélective de l'enseignement (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — TPACK et IA générative chez les enseignants : solides connaissances du contenu, faibles connaissances intégrant la technologie (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot : un essai randomisé de tutorat en direct humain–IA à l'échelle (Wang et al. 2024)
