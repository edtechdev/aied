---
connected_resources: [vibes-diy]
title: "Le vibe coding"
created: "2026-09-08T01:30:00-04:00"
updated: "2026-11-05T18:23:46-05:00"
type: concept
foundations: [agentic-ai, ai-literacy, computational-thinking, human-ai-collaboration, teacher-role]
technology: [generative-ai, llm, prompt-engineering]
audience: [instructors, curriculum designers, researchers, software developers]
level: [higher ed, k 12]
confidence: high
discipline: [cs education, writing education]
translation_of: concepts/vibe-coding
source_updated: "2026-11-04T12:05:00-05:00"
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

> **Le vibe coding** — construire un logiciel en interrogeant itérativement un [[llm|grand modèle de langue]] et en jugeant le comportement qui en résulte, sans lire ni éditer directement le code source sous-jacent. Popularisé par Andrej Karpathy en 2025 comme le flux de travail où l'on « oublie jusqu'à l'existence du code », le vibe coding est la réalisation native en LLM de la programmation en langage naturel et du développement par l'utilisateur final — des cadrages désormais traités comme des synonymes dans cette base de connaissances — dans lesquels la prose devient l'interface de programmation principale.

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

Une promesse majeure du vibe coding est qu'il permet aux non-programmeurs — y compris les [[teacher-role|enseignants]] et les experts du domaine — de construire leur propre logiciel, une forme propre à l'ère des LLM de développement par l'utilisateur final. Une [[gaide-vibe-coding-k12-teachers|étude du cadre GAIDE]] a montré des enseignants [[k-12|du primaire et du secondaire]] (non-programmeurs) utilisant le vibe coding dans un atelier de huit semaines pour créer des outils d'apprentissage propulsés par l'IA, élevant leur [[ai-literacy|littératie en IA]] et démontrant l'« apprendre en créant » comme modèle de développement professionnel. Dans l'[[higher-ed|enseignement supérieur]], un enseignant a rapidement construit en quelques jours un [[vibe-coding-programming-process-visualizer|visualiseur de processus de programmation à partir des journaux d'activité de l'EDI]] par vibe coding, rendant visibles les processus de programmation des étudiants pour l'enseignement et l'examen d'[[academic-integrity|intégrité académique]]. Ces cas positionnent le vibe coding non pas seulement comme une compétence de l'apprenant, mais comme une capacité de création qui [[educational-development|reconfigure qui peut créer les technologies éducatives]].

### L'homogénéisation de la conception : l'accès sans la diversité

La promesse de développement par l'utilisateur final du vibe coding porte sur qui peut construire, non sur ce qui est construit. Dans un déploiement de cours, 73 étudiants construisant des sites pour des entreprises distinctes sur une seule plateforme de vibe coding ont produit une douzaine de conceptions distinctes environ, et le sentiment d'autorialité ne suivait pas l'originalité mesurée ([[vibe-coding-design-diversity-2026|Boussioux et al. (2026)]]). Abaisser la barrière à la construction peut standardiser la production — un coût que la promesse d'accès ne met pas en avant.

### Apprentissage, agentivité et risque de dépendance excessive

Le vibe coding rouvre des questions centrales sur ce qui est appris lorsque l'IA automatise l'implémentation. Parce que l'utilisateur ne lit pas le code, il doit se fier au comportement du modèle — ce qui fait du vibe coding un cas à fort enjeu de la tension entre l'[[agency|agentivité]] et la [[cognitive-offloading|dépendance excessive]] qui traverse la programmation assistée par l'IA. Les programmes d'études réagissent en se déplaçant de l'enseignement de l'implémentation vers l'enseignement de la manière de diriger, vérifier et auditer les artefacts générés par l'IA (voir la [[reshaping-cs-education-genai|refonte de l'informatique de premier cycle]] et l'[[agentic-ai|ingénierie logicielle agentique]]). Le vibe coding change aussi la position épistémique de l'apprenant : le succès dépend moins de l'écriture du code que de l'expression précise de l'intention et de l'évaluation du comportement au regard des objectifs, des compétences plus proches de la [[computational-thinking|pensée computationnelle]] et de l'écriture structurée que de la maîtrise traditionnelle de la syntaxe.

Une seconde limite apparaît dans la construction elle-même : supprimer la barrière du codage peut laisser intact le fardeau du diagnostic. Deux études de cas en ingénierie ont vu un enseignant construire en quelques heures, par des invites en langage ordinaire à Gemini, des [[simulation|simulations]] web fonctionnelles d'un système de gestion thermique de batterie et de trois protocoles ARQ ([[caee-vibe-coding-simulation-development-engineering-education-2026|Tarasak et al. (2026)]]). Une erreur de duplication de paquets a ensuite survécu à des invites répétées, dont l'une énonçait le comportement requis. Elle n'a été corrigée que lorsque l'enseignant a raisonné à partir du comportement du protocole jusqu'à un intervalle de temporisation insuffisant, un paramètre que l'interface n'exposait jamais. L'effet d'aucune des deux simulations sur l'apprentissage n'ayant été mesuré, ce récit établit la faisabilité plutôt que l'efficacité.

### Connexions avec les concepts liés

Le vibe coding se relie naturellement à l'[[prompt-engineering|ingénierie des invites]] (la qualité des invites est le mécanisme du développement piloté par la prose), à l'[[cs-education|enseignement de l'informatique]] (comme domaine où la technique est la plus utilisée et la plus contestée), à la [[computational-thinking|pensée computationnelle]] (la modélisation mentale qui prédit le succès même sans accès au code), à l'[[writing-education|enseignement de l'écriture]] (l'écriture devenant une compétence de programmation), et à l'[[agentic-ai|IA agentique]] (diriger un modèle vers un artefact plutôt que le construire à la main). Il recoupe aussi la [[ai-literacy|littératie en IA]] et le [[teacher-role|rôle de l'enseignant]], puisque la capacité de construire ses propres outils change ce que les enseignants et les apprenants peuvent faire. Enfin, il soulève des questions d'[[academic-integrity|intégrité académique]] et d'évaluation identiques à celles que la génération de code par l'IA soulève dans l'ensemble de l'enseignement de l'informatique.

Une étude de cas au niveau du corps enseignant dans cette base de connaissances fournit la couche organisationnelle. [[zimmer-ai-intrapreneurship-faculty-innovation-2026|Zimmer (2026)]] décrit l'*intrapreneuriat en IA* — des éducateurs construisant leurs propres outils au lieu d'attendre l'approvisionnement institutionnel — y compris un auteur qui ne code pas et utilise Claude Code pour construire un vérificateur de 321 liens de cours. Les facteurs habilitants décisifs étaient organisationnels plutôt que techniques : la latitude dans le travail, les récompenses et la disponibilité de temps, cette dernière étant décrite comme la plus évidemment déficitaire dans les milieux académiques et minée par la promotion et la titularisation. Le tableau sécuritaire demeurait sobre, l'analyse de Veracode de 2025 ayant montré que seulement 55% du code généré par l'IA était sûr, si bien que les outils de classe produits par vibe coding exigent encore un passage de révision avant de manipuler des données d'étudiants ou de se connecter à un LMS.

## Idées fausses courantes

**« Le vibe coding abaisse la barrière des compétences : c'est donc surtout une question de bien écrire. »** La maîtrise de la communication écrite aide et ne porte pas seule le résultat. Dans une étude transversale préenregistrée (N = 100 étudiants du supérieur), tant la [[writing-education|maîtrise de la communication écrite]] (r = .29) que la réussite en informatique (r = .39) prédisaient significativement la performance sur des tâches de vibe coding orientées interface graphique et validées par des experts, et dans un modèle conjoint la réussite en informatique apportait environ **deux fois la variance unique** de la compétence rédactionnelle, les deux conservant une valeur prédictive indépendante. La barrière s'est déplacée, elle n'a pas disparu, et une part en reste technique.

**« Puisque chacun peut désormais construire des logiciels, ce qui sera construit deviendra plus diversifié. »** L'accès et la diversité sont des résultats distincts, et l'accès peut même comprimer le second. Les preuves d'homogénéisation de la conception rassemblées dans ce corpus décrivent exactement ce schéma : une population plus large de constructeurs travaillant à partir des mêmes modèles, des mêmes conventions de composants et des mêmes réglages d'invite par défaut tend vers des conceptions convergentes. Démocratiser l'écriture ne diversifie pas automatiquement les artefacts.

**« Le vibe coding "pur" est ce que le terme désigne, donc la distinction n'a pas d'importance. »** Elle en a pour l'évaluation et pour la sécurité. La page distingue le vibe coding pur, où l'utilisateur n'inspecte ni ne modifie délibérément le source généré et se fie entièrement à l'invite itérative et à l'évaluation comportementale, du travail à code visible dans lequel l'utilisateur lit ce qui a été produit. Ce sont des activités différentes avec des profils d'erreur différents, et une étude de l'une n'autorise pas d'affirmation sur l'autre.

**« Si l'application fonctionne, le code généré est correct. »** Le fonctionnement est un test faible. L'analyse de Veracode de 2025 a montré que seulement 55 % du code généré par l'IA était sûr, si bien que les outils de classe produits par vibe coding exigent encore un passage de révision avant de manipuler des données d'étudiants ou de se connecter à un système qui vaut la peine d'être protégé. L'évaluation comportementale confirme les chemins que l'utilisateur emprunte par hasard et ne dit rien de ceux qu'il n'emprunte pas.

## Mettre le vibe coding en pratique

**Pour les enseignants et les formateurs d'enseignants**

- Enseignez explicitement la différence entre vibe coding pur et vibe coding à code visible, et exigez le second pour tout ce qui manipulera des données d'étudiants. La distinction est une habitude enseignable, pas une subtilité [[philosophy-of-ai-in-education|philosophique]].
- Maintenez un fil de programmation réelle à côté du travail de vibe coding, car la réussite en informatique apportait environ deux fois la variance prédictive unique. Traiter la spécification en langage naturel comme un substitut complet écarte le prédicteur le plus fort.
- Faites évaluer l'artefact de façon comportementale *et* inspecter le source de tout ce que les étudiants déploient. Lire du code généré est une compétence de revue, et elle n'est pas automatique chez les étudiants qui savent formuler des invites.

**Pour les développeurs et les administrateurs**

- Faites passer une revue de sécurité à tout outil produit par vibe coding avant qu'il ne touche aux dossiers étudiants, conformément au constat des 55 % de code sûr.
- Budgétez l'homogénéisation : si plusieurs membres du personnel produisent par vibe coding le même type d'outil à partir des mêmes réglages par défaut, attendez-vous à des résultats similaires et prévoyez comment la différenciation sera obtenue délibérément.
- Privilégiez les flux à code visible pour les outils maintenus et réservez le vibe coding pur aux prototypes jetables.

**Pour les chercheurs**

- Rapportez la condition de vibe coding (pur ou à code visible) avec les résultats, et utilisez des tâches orientées interface graphique validées par des experts plutôt que le succès [[self-report-measures|auto-déclaré]], afin que les résultats soient comparables d'une étude à l'autre.
- Mesurez la diversité des artefacts, et pas seulement leur nombre ou celui des constructeurs, si l'argument de l'accès est mis à l'épreuve.

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

- [[vibe-coding-writing-cs-achievement-2026]] — La réussite en informatique et les compétences rédactionnelles prédisent la maîtrise du vibe coding (étude empirique CHI 2026)
- [[gaide-vibe-coding-k12-teachers]] — Un cadre d'orientation pour les enseignants du primaire et du secondaire qui créent des technologies d'apprentissage propulsées par l'IA par le vibe coding
- [[vibe-coding-programming-process-visualizer]] — De l'idée à la classe en quelques jours : créer un visualiseur de processus de programmation à partir des journaux d'activité de l'EDI par le « vibe coding »
- [[caee-vibe-coding-simulation-development-engineering-education-2026]] — Le vibe coding a produit deux simulations d'ingénierie en quelques heures ; diagnostiquer une erreur de protocole exigeait encore l'enseignant
- [[prompt-problems-nl-programming-mistakes]] — Comprendre les perceptions, les erreurs et les approches de débogage des étudiants dans des tâches de programmation en langage naturel
- [[code-to-learn-genai-artifact-construction-2026]] — Coder pour apprendre avec l'IA générative : un cadre théoriquement fondé pour la construction d'artefacts dans l'enseignement secondaire supérieur
- [[reshaping-cs-education-genai]] — Refonte de l'informatique de premier cycle pour l'IA générative
- [[flowcode-ai-creative-coding]] — Flowcode : un environnement de programmation propulsé par l'IA pour étayer l'itération dans l'enseignement de la programmation créative
- [[zimmer-ai-intrapreneurship-faculty-innovation-2026]] — L'intrapreneuriat en IA : des enseignants qui construisent leurs propres outils, et les leviers organisationnels qui décident si l'élan survit (Zimmer 2026)
- [[vibe-coding-design-diversity-2026]] — Un outil, un seul goût ? Comment le vibe coding échange la diversité collective contre la créativité individuelle
