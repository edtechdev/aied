---
connected_resources: [vibes-diy]
title: "Le vibe coding"
created: "2026-09-08T01:30:00-04:00"
updated: "2026-10-10T03:41:12-04:00"
type: concept
foundations: [agentic-ai, ai-literacy, computational-thinking, human-ai-collaboration, teacher-role]
technology: [generative-ai, llm, prompt-engineering]
audience: [instructors, curriculum designers, researchers, software developers]
level: [higher ed, k 12]
confidence: high
discipline: [cs education, writing education]
translation_of: concepts/vibe-coding
source_updated: "2026-10-04T16:17:27-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Le vibe coding** — construire un logiciel en interrogeant itérativement un grand modèle de langue et en jugeant le comportement qui en résulte, sans lire ni éditer directement le code source sous-jacent. Popularisé par Andrej Karpathy en 2025 comme le flux de travail où l'on « oublie jusqu'à l'existence du code », le vibe coding est la réalisation native en LLM de la programmation en langage naturel et du développement par l'utilisateur final — des cadrages désormais traités comme des synonymes dans cette base de connaissances — dans lesquels la prose devient l'interface de programmation principale.

## Questions à examiner

- Le cadrage originel de Karpathy disait qu'il fallait « oublier jusqu'à l'existence du code ». Avant de poursuivre votre lecture, demandez-vous : ne pas voir le code est-il un atout (il abaisse les barrières) ou un risque (on ne peut ni vérifier ni corriger ce qu'on ne voit pas) ? Qu'implique la réponse quant aux personnes auxquelles il devrait être permis de faire du vibe coding ?
- Les recherches sur ceux qui réussissent le vibe coding ont montré que la réussite traditionnelle en [[cs-education|informatique]] prédit encore le succès, même lorsque l'utilisateur ne touche jamais au code. Si cela vous surprend, quelle compétence cachée la formation en informatique pourrait-elle développer, que la prose seule ne capte pas ?
- La même étude a montré que la compétence rédactionnelle prédit la performance en vibe coding largement *parce qu'elle* produit des invites de meilleure qualité. Si les invites constituent vraiment le goulot d'étranglement, la bonne solution est-elle d'[[prompt-engineering|apprendre aux gens à mieux formuler leurs invites]] — ou de repenser les outils pour qu'ils exigent moins de compétence en prose ?
- Le vibe coding est souvent célébré comme rendant « chacun » développeur. Mais si la compétence rédactionnelle et le savoir en informatique façonnent tous deux les résultats, le vibe coding élargit-il l'accès à la construction de logiciels, ou ne fait-il que déplacer la barrière de compétence du code vers la prose ?
- Certains développeurs distinguent le vibe coding « pur » (ne jamais lire le code) de la programmation assistée par l'IA, où l'on examine et l'on édite ce que le modèle a écrit. Où pensez-vous que l'apprentissage authentique — plutôt que la [[cognitive-offloading|dépendance excessive]] — est le plus susceptible de se produire, et pourquoi ?

## Introduction

Le vibe coding décrit un style d'interaction rendu possible par les plateformes de développement intégrant les LLM (Replit, Lovable, Cursor et d'autres) : l'utilisateur spécifie un programme en langage naturel, le modèle génère un système fonctionnel, et l'utilisateur itère à partir du comportement observé plutôt qu'en éditant la source. Le terme a été forgé par le cofondateur d'OpenAI Andrej Karpathy en février 2025 pour capter l'expérience qui consiste à s'appuyer sur le modèle à un point tel que « le code » s'efface de la conscience. Le vibe coding se situe au confluent de plusieurs fils que cette base de connaissances suit déjà — c'est de l'[[generative-ai|IA générative]] appliquée à la [[cs-education|programmation]], une forme extrême de travail [[prompt-engineering|piloté par les invites]], une instance concrète de la [[human-ai-collaboration|collaboration humain-IA]], et la voie la plus claire encore permettant à des [[teacher-role|non-programmeurs]] et à des utilisateurs finaux de construire leur propre logiciel (développement par l'utilisateur final).

Il a aussi de profondes racines. L'idée de programmer en langage ordinaire précède de loin les LLM — de l'aspiration de COBOL à être « un système de programmation en langue anglaise pour les programmeurs non professionnels », en passant par la programmation lettrée de Donald Knuth, jusqu'aux recherches sur la programmation en langage naturel avec des sous-ensembles contraints d'anglais. C'est seulement avec les LLM qu'il est devenu faisable de faire correspondre des instructions véritablement conversationnelles et sous-spécifiées à du code exécutable. Le vibe coding est la variante particulière dans laquelle l'utilisateur ne délibère pas inspecter ni éditer la source générée, s'appuyant entièrement sur l'invite itérative et l'évaluation comportementale.

### Définir le construit : le vibe coding « pur » contre le vibe coding à code visible

La définition du vibe coding est encore en mouvement. Certains emploient le terme au sens large pour désigner toute programmation guidée par l'IA ; d'autres soutiennent qu'il se réfère strictement au fait de « construire un logiciel avec un LLM sans examiner le code qu'il écrit ». Google Cloud distingue une version « pure » sans code (conforme à la définition de Karpathy) d'une version où l'utilisateur comprend et affine le code généré. Cette distinction importe pour la [[research-methods-aied|recherche]] : une étude contrôlée de la maîtrise du vibe coding exige un construit bien défini. L'étude CHI 2026 sur les prédicteurs de la maîtrise du vibe coding a délibérément ciblé la variante « pure », sans code — les participants ne pouvaient ni voir ni éditer la source générée, si bien que la performance mesurée reflétait l'aptitude à spécifier, affiner et déboguer un comportement par la seule prose et la seule production observée (voir [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al.]]).

### Qui réussit le vibe coding : les données probantes

Une étude transversale préenregistrée (N = 100 étudiants du supérieur) fournit les premières données probantes contrôlées, au niveau du participant, sur les compétences qui prédisent le succès en vibe coding. Tant la maîtrise de la [[writing-education|communication écrite]] (r = .29) que la réussite en informatique (r = .39) prédisaient significativement la performance sur des tâches de vibe coding orientées vers l'interface graphique et validées par des experts, la réussite en informatique demeurant significative après contrôle des compétences cognitives générales (r partiel = .281). Dans un modèle conjoint, la réussite en informatique contribuait environ deux fois la variance unique de la compétence rédactionnelle, mais les deux ajoutaient une valeur prédictive indépendante. Fait crucial, la qualité des invites notée par des humains faisait médiation dans le lien écriture → performance, fournissant une preuve fondée sur le processus de réponse selon laquelle une prose claire opère en produisant de meilleures invites. Parce que l'environnement masquait le code source, le savoir en informatique ne pouvait aider qu'indirectement (par la décomposition des problèmes, la pensée algorithmique et les modèles mentaux du flux de contrôle) — les auteurs soutiennent donc que leur estimation en informatique est une *borne inférieure* pour la programmation assistée par l'IA, où les utilisateurs peuvent aussi éditer directement le code ([[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al., 2026]]).

### Le vibe coding comme développement par l'utilisateur final et outillage pour les enseignants

Une promesse majeure du vibe coding est qu'il permet aux non-programmeurs — y compris les [[teacher-role|enseignants]] et les experts du domaine — de construire leur propre logiciel, une forme propre à l'ère des LLM de développement par l'utilisateur final. Une [[gaide-vibe-coding-k12-teachers|étude du cadre GAIDE]] a montré des enseignants du primaire et du secondaire (non-programmeurs) utilisant le vibe coding dans un atelier de huit semaines pour créer des outils d'apprentissage propulsés par l'IA, élevant leur [[ai-literacy|littératie en IA]] et démontrant l'« apprendre en créant » comme modèle de développement professionnel. Dans l'enseignement supérieur, un enseignant a rapidement construit en quelques jours un [[vibe-coding-programming-process-visualizer|visualiseur de processus de programmation à partir des journaux d'activité de l'EDI]] par vibe coding, rendant visibles les processus de programmation des étudiants pour l'enseignement et l'examen d'[[academic-integrity|intégrité académique]]. Ces cas positionnent le vibe coding non pas seulement comme une compétence de l'apprenant, mais comme une capacité de création qui [[educational-development|reconfigure qui peut créer les technologies éducatives]].

### L'homogénéisation de la conception : l'accès sans la diversité

La promesse de développement par l'utilisateur final du vibe coding porte sur qui peut construire, non sur ce qui est construit. Dans un déploiement de cours, 73 étudiants construisant des sites pour des entreprises distinctes sur une seule plateforme de vibe coding ont produit une douzaine de conceptions distinctes environ, et le sentiment d'autorialité ne suivait pas l'originalité mesurée ([[vibe-coding-design-diversity-2026|Boussioux et al. (2026)]]). Abaisser la barrière à la construction peut standardiser la production — un coût que la promesse d'accès ne met pas en avant.

### Apprentissage, agentivité et risque de dépendance excessive

Le vibe coding rouvre des questions centrales sur ce qui est appris lorsque l'IA automatise l'implémentation. Parce que l'utilisateur ne lit pas le code, il doit se fier au comportement du modèle — ce qui fait du vibe coding un cas à fort enjeu de la tension entre l'[[agency|agentivité]] et la [[cognitive-offloading|dépendance excessive]] qui traverse la programmation assistée par l'IA. Les programmes d'études réagissent en se déplaçant de l'enseignement de l'implémentation vers l'enseignement de la manière de diriger, vérifier et auditer les artefacts générés par l'IA (voir la [[reshaping-cs-education-genai|refonte de l'informatique de premier cycle]] et l'[[agentic-ai|ingénierie logicielle agentique]]). Le vibe coding change aussi la position épistémique de l'apprenant : le succès dépend moins de l'écriture du code que de l'expression précise de l'intention et de l'évaluation du comportement au regard des objectifs, des compétences plus proches de la [[computational-thinking|pensée computationnelle]] et de l'écriture structurée que de la maîtrise traditionnelle de la syntaxe.

Une seconde limite apparaît dans la construction elle-même : supprimer la barrière du codage peut laisser intact le fardeau du diagnostic. Deux études de cas en ingénierie ont vu un enseignant construire en quelques heures, par des invites en langage ordinaire à Gemini, des simulations web fonctionnelles d'un système de gestion thermique de batterie et de trois protocoles ARQ ([[caee-vibe-coding-simulation-development-engineering-education-2026|Tarasak et al. (2026)]]). Une erreur de duplication de paquets a ensuite survécu à des invites répétées, dont l'une énonçait le comportement requis. Elle n'a été corrigée que lorsque l'enseignant a raisonné à partir du comportement du protocole jusqu'à un intervalle de temporisation insuffisant, un paramètre que l'interface n'exposait jamais. L'effet d'aucune des deux simulations sur l'apprentissage n'ayant été mesuré, ce récit établit la faisabilité plutôt que l'efficacité.

### Connexions avec les concepts liés

Le vibe coding se relie naturellement à l'[[prompt-engineering|ingénierie des invites]] (la qualité des invites est le mécanisme du développement piloté par la prose), à l'[[cs-education|enseignement de l'informatique]] (comme domaine où la technique est la plus utilisée et la plus contestée), à la [[computational-thinking|pensée computationnelle]] (la modélisation mentale qui prédit le succès même sans accès au code), à l'[[writing-education|enseignement de l'écriture]] (l'écriture devenant une compétence de programmation), et à l'[[agentic-ai|IA agentique]] (diriger un modèle vers un artefact plutôt que le construire à la main). Il recoupe aussi la [[ai-literacy|littératie en IA]] et le [[teacher-role|rôle de l'enseignant]], puisque la capacité de construire ses propres outils change ce que les enseignants et les apprenants peuvent faire. Enfin, il soulève des questions d'[[academic-integrity|intégrité académique]] et d'évaluation identiques à celles que la génération de code par l'IA soulève dans l'ensemble de l'enseignement de l'informatique.

Une étude de cas au niveau du corps enseignant dans cette base de connaissances fournit la couche organisationnelle. [[zimmer-ai-intrapreneurship-faculty-innovation-2026|Zimmer (2026)]] décrit l'*intrapreneuriat en IA* — des éducateurs construisant leurs propres outils au lieu d'attendre l'approvisionnement institutionnel — y compris un auteur qui ne code pas et utilise Claude Code pour construire un vérificateur de 321 liens de cours. Les facteurs habilitants décisifs étaient organisationnels plutôt que techniques : la latitude dans le travail, les récompenses et la disponibilité de temps, cette dernière étant décrite comme la plus évidemment déficitaire dans les milieux académiques et minée par la promotion et la titularisation. Le tableau sécuritaire demeurait sobre, l'analyse de Veracode de 2025 ayant montré que seulement 55% du code généré par l'IA était sûr, si bien que les outils de classe produits par vibe coding exigent encore un passage de révision avant de manipuler des données d'étudiants ou de se connecter à un LMS.

## Concepts liés

- [[generative-ai]]
- [[llm]]
- [[prompt-engineering]]
- [[cs-education]]
- [[computational-thinking]]
- [[writing-education]]
- [[agentic-ai]]
- [[human-ai-collaboration]]
- [[ai-literacy]]
- [[teacher-role]]
- [[cognitive-offloading]]

## Articles liés

- [[vibe-coding-writing-cs-achievement-2026]] — Computer Science Achievement and Writing Skills Predict Vibe Coding Proficiency (CHI 2026 empirical study)
- [[gaide-vibe-coding-k12-teachers]] — A Guiding Framework for K-12 Teachers in Creating AI-powered Learning Technologies through Vibe Coding
- [[vibe-coding-programming-process-visualizer]] — From Idea to Classroom in Days: Using "Vibe Coding" to Create a Programming Process Visualizer from IDE Activity Logs
- [[caee-vibe-coding-simulation-development-engineering-education-2026]] — Vibe coding built two engineering simulations in hours; diagnosing a protocol error still needed the instructor
- [[prompt-problems-nl-programming-mistakes]] — Understanding Student Perceptions, Mistakes, and Debugging Approaches when Solving Natural Language Programming Tasks
- [[code-to-learn-genai-artifact-construction-2026]] — Code to Learn with Generative AI: A Theoretically Grounded Framework for Artifact Construction in Upper-Secondary Education
- [[reshaping-cs-education-genai]] — Reshaping Undergraduate CS Education for Generative AI
- [[flowcode-ai-creative-coding]] — Flowcode: An AI-Powered Programming Environment for Scaffolding Iteration in Creative Computing Education
- [[zimmer-ai-intrapreneurship-faculty-innovation-2026]] — AI intrapreneurship: faculty building their own tools, and the organizational enablers that decide whether the impulse survives (Zimmer 2026)
- [[vibe-coding-design-diversity-2026]] — One Tool, One Taste? How Vibe Coding Trades Collective Diversity for Individual Creativity
