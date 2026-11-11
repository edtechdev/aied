---
title: "Métaphores et analogies"
created: "2026-11-07T12:10:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking, misconceptions]
pedagogy: [student-engagement]
technology: [generative-ai]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
updated: "2026-11-11T07:40:00-05:00"
translation_of: "concepts/metaphors-and-analogies"
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Synthèse** : Les métaphores et les analogies remplissent deux fonctions dans l'[[ai-education|éducation à l'IA]]. Ce sont des dispositifs de mise en sens par lesquels les éducateurs et les étudiants décident de ce que l'IA *est* (un outil, un assistant, une boîte noire, un oracle), et des dispositifs pédagogiques qui projettent un domaine source familier sur un concept cible peu familier. La recherche rassemblée dans cette base de connaissances montre que ces deux fonctions sont liées : les métaphores que les gens portent façonnent ce qu'ils attendent de l'IA, les caractéristiques qu'ils remarquent, et s'ils lui font confiance ou la craignent. La même logique de projection structurelle explique pourquoi une analogie peut rendre une idée technique mémorable tout en la représentant faussement, sans bruit. Une analogie imparfaite générée par l'IA générative peut être plus utile qu'une analogie policée lorsque les étudiants connaissent assez bien le domaine source pour auditer la projection et la réparer. La leçon pratique est de choisir les métaphores en fonction de la caractéristique enseignée, de vérifier l'adéquation structurelle et l'accessibilité culturelle, et de traiter la comparaison comme un objet de critique plutôt que comme une explication achevée. Les preuves sont surtout qualitatives, conceptuelles et à petite échelle ; le champ dispose de peu de preuves causales montrant qu'un enseignement fondé sur les métaphores améliore l'apprentissage.

## Questions à examiner

- Quelle métaphore utilisez-vous pour l'[[generative-ai|IA générative]] lorsque vous ne faites pas attention, et que rend-elle facile à voir ou facile à ignorer ?
- Quand une analogie familière aide-t-elle un étudiant à comprendre un concept technique, et quand installe-t-elle une [[misconceptions|idée fausse]] que l'enseignement ultérieur doit défaire ?
- Quels domaines sources passent pour familiers ? Si une analogie repose sur le sport, le jeu vidéo ou un appareil de cuisine, qui est inclus et qui est laissé de côté ?
- Un [[intelligent-tutoring|tuteur d'IA]] devrait-il générer des analogies pour les étudiants, ou leur donner des analogies à critiquer ? Qu'est-ce qui change lorsque l'analogie est personnalisée selon les centres d'intérêt déclarés d'un étudiant ?
- Une analogie mémorable n'est pas nécessairement exacte. Que demanderiez-vous aux étudiants de faire pour montrer qu'ils savent faire la différence ?
- Quelles preuves vous convaincraient qu'une leçon fondée sur les métaphores a amélioré la littératie en IA plutôt que simplement rendu la leçon plus attrayante ?

## Introduction

Une métaphore dit qu'une chose en est une autre : l'IA est une boîte noire, une aide, un miroir, une carte. Une analogie rend généralement la comparaison plus explicite : une liste chaînée fonctionne comme une chaîne, la récursion comme un ensemble de boîtes emboîtées, ou l'usage de l'IA comme la cuisine avec un Thermomix. Les deux se recouvrent en pratique. Toutes deux demandent à l'apprenant de transporter des relations d'un domaine source familier vers un domaine cible moins familier, et toutes deux deviennent trompeuses lorsque la projection est étendue au-delà des relations qu'elle préserve réellement.

Cela en fait davantage qu'une décoration rhétorique. La recherche sur la métaphore conceptuelle traite la métaphore comme une structure de la pensée, et pas seulement du langage : les comparaisons dont disposent les personnes façonnent les aspects d'un système qui leur paraissent saillants et les explications qui leur paraissent naturelles. En éducation à l'IA, les enjeux sont pratiques. Un étudiant qui se représente un [[llm|LLM]] comme un moteur de recherche peut s'attendre à ce qu'il récupère des faits stockés et peut ne pas chercher les faits fabriqués. Un membre du corps professoral qui le représente comme un étudiant avancé peut s'attendre à un jugement et à une expertise disciplinaire que le modèle n'a pas. Une discussion politique cadrée autour d'une « catastrophe naturelle » ou d'un « concurrent » soutient des réponses différentes de celles qu'appelle un cadrage autour d'une « calculatrice à mots ».

Cette page couvre les deux faces de ce double rôle : la métaphore comme fenêtre sur la manière dont les éducateurs et les étudiants comprennent l'IA, et l'analogie comme technique d'enseignement dans la littératie en IA et les explications générées par l'IA. Elle relie les travaux sur les conceptualisations des enseignants et des étudiants, les ateliers de métaphores en classe, les analogies générées par l'IA générative, la [[learning-design|conception pédagogique]] fondée sur l'analogie et la littératie critique en IA. Elle ne traite pas « métaphore » et « analogie » comme des synonymes exacts, mais elle les garde ensemble parce que les problèmes de conception sont partagés : choix de la source, adéquation structurelle, accès culturel et critique.

## Pourquoi les métaphores et les analogies importent

Le point de départ théorique est la théorie de la métaphore conceptuelle, associée à Lakoff et Johnson. Son affirmation centrale est que les personnes comprennent les domaines abstraits par des projections depuis des domaines plus concrets, et que ces projections peuvent devenir si familières qu'elles cessent de ressembler à des comparaisons. « Le voyage de la vie » n'est pas seulement une façon de parler ; il porte des présupposés sur la direction, le progrès, les obstacles et les destinations. Il en va de même de « l'assistant IA » ou de « la boîte noire IA ».

Pour l'éducation, la conséquence utile est que la métaphore peut faire un travail conceptuel avant qu'un [[teacher-role|enseignant]] n'offre une définition. Elle donne aux apprenants un point d'appui. Elle peut aussi porter toute une théorie de l'agentivité : un « assistant » implique un utilisateur aux commandes, tandis qu'un « agent » implique l'initiative, et une « boîte noire » implique que l'explication est impossible ou inutile. Ce ne sont pas des descriptions neutres. Elles distribuent la responsabilité et fixent des attentes de confiance.

Les analogies ajoutent une seconde couche : la correspondance structurelle. Une bonne analogie pédagogique préserve les relations qui comptent pour le concept cible, et pas seulement une ressemblance de surface. Une chaîne peut illustrer une liste chaînée parce que les deux impliquent des nœuds reliés en séquence. Un ensemble de boîtes emboîtées peut illustrer la récursion parce que chaque niveau contient une version plus petite de la même structure. La comparaison est toujours partielle. La question [[pedagogy|pédagogique]] est de savoir si les relations préservées sont celles dont l'apprenant a besoin, et si l'apprenant peut voir où la projection s'arrête.

Cette question sépare cette page de l'[[explainable-ai|IA explicable]]. L'IA explicable demande comment les décisions d'un système peuvent être rendues lisibles pour les parties prenantes. Une analogie pédagogique demande comment un apprenant peut construire un modèle mental utilisable d'un processus. Une explication de la raison pour laquelle un modèle a signalé un étudiant n'est pas la même chose qu'une analogie de la manière dont un modèle génère du texte, et ni l'une ni l'autre ne remplace l'autre.

## Comment les éducateurs et les étudiants décrivent l'IA

La base de connaissances dispose désormais de plusieurs fenêtres sur les métaphores réellement employées. Elles ne convergent pas vers une seule image, ce qui fait partie du propos.

[[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson et Casey (2025)]] ont animé des ateliers d'analyse de métaphores avec des étudiants, des universitaires et du personnel de soutien pédagogique. Les métaphores des participants se regroupaient en quatre grandes catégories : *Fonctions* (comparaisons de type outil, comme un couteau suisse), *Rôles* (relations de type humain, comme aide, compagnon d'étude ou ami-ennemi), *Qualités* (comparaisons peu fiables ou inconnaissables, comme une boîte noire ou une pente glissante) et *Agentivité* (comparaisons autonomes ou menaçantes, comme un concurrent ou un robot sinistre). Deux tensions traversaient l'ensemble : l'agentivité humaine contre l'agentivité de la machine, et le connu contre l'inconnaissable. L'atelier n'a pas résolu ces tensions. Il les a rendues disponibles à la discussion, ce qu'une intervention fondée sur les métaphores peut réalistement faire.

[[engineering-faculty-metaphors-ai-understanding-2026|Gerhardt et ses collègues (2026)]] ont interrogé 57 enseignants d'ingénierie de diverses disciplines et universités et ont analysé les analogies qu'ils proposaient spontanément. Les enseignants cadraient surtout l'IA générative soit comme un être social ou un agent de type humain (un assistant, un doctorant), soit comme un objet technique (un moteur de recherche, un outil). Peu la cadraient comme une force environnementale ou systémique. Les auteurs organisent les réponses selon cinq dimensions : ontologie, épistémologie, fonctionnement, relation, et pouvoir ou capacité. Leur préoccupation n'est pas que les enseignants recourent à des métaphores, mais que des collègues d'un même département puissent en porter d'incompatibles tout en supposant qu'ils partagent un langage. Cela fait de l'élicitation de métaphores un diagnostic de développement professionnel, et pas seulement une technique de classe.

Les étudiants montrent une amplitude semblable. [[genai-professionalization-metaphors-2026|Bohmer et ses collègues (2026)]] ont trouvé que des étudiants conceptualisaient l'IA générative comme un acteur social, une technique, un support d'apprentissage ou une structure, les cadrages socio-émotionnels et techniques étant tous deux saillants. [[ai-engineering-education-balancing-act|Kudina (2026)]] décrit les cadrages dominants des étudiants en ingénierie comme ceux de l'« oracle » et du « tuteur », qui tous deux attribuent au LLM une autorité et une [[personalized-learning|personnalisation]] au-delà de ce que l'outil fournit de façon fiable. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman et ses collègues (2026)]] traitent la « machine distributrice de rétroaction » d'un étudiant comme un artefact de littératie plus utile que le vocabulaire policé du tuteur, parce qu'elle rend la transaction visible : insérer un travail, recevoir une production, sans relation ni agentivité.

Le constat transversal est que la métaphore est un diagnostic de l'attente. Un étudiant qui appelle un LLM un oracle n'emploie pas simplement un mot coloré. L'étiquette prédit ce que l'étudiant fera lorsque le modèle se trompe, et ce que l'étudiant croira au sujet de la vérification. Un membre du corps professoral qui l'appelle un moteur de recherche n'est pas simplement imprécis. L'étiquette prédit ce qu'il demandera aux étudiants d'en faire. C'est pourquoi les programmes de [[educational-development|développement pédagogique]] peuvent recourir à l'élicitation de métaphores avant de redessiner une politique ou une évaluation, et pourquoi l'[[engineering-education|formation en ingénierie]] et l'[[cs-education|enseignement de l'informatique]] ont besoin de [[discipline-specific-aied|conversations propres à chaque discipline]] plutôt que d'une définition unique à l'échelle de l'établissement.

Un courant [[philosophy-of-ai-in-education|philosophique]] pousse la métaphore dans une autre direction : [[daoism-ai-education-philosophy-2026|Xie (2026)]] propose « Zhenren » comme contre-idéal de l'apprenant géré par algorithme, et traite cette image comme un moyen de débattre des finalités éducatives plutôt que d'expliquer un processus technique.

## Les analogies comme technique d'enseignement

Les preuves de classe les plus solides du corpus proviennent de l'usage de l'analogie dans l'enseignement de l'informatique. [[student-reception-genai-analogies-computing-2026|Bernstein et Sibia (2026)]] ont donné à des étudiants de premier cycle des analogies générées par l'IA générative pour les listes chaînées et la récursion, puis leur ont demandé d'annoter et de discuter les productions. Les étudiants n'ont pas jugé les analogies globalement bonnes ou mauvaises. Ils ont séparé l'exactitude structurelle, la clarté, la pertinence et la confiance, et ont nommé des défaillances précises : un itinéraire en boucle décrit une liste circulaire, et non une liste simplement chaînée ; un échange de badminton n'offre aucune entrée qui rétrécit de façon garantie pour la récursion ; une référence fondée sur un centre d'intérêt peut supposer des connaissances que l'étudiant n'a pas.

La contribution de l'article est l'idée d'un **audit bidirectionnel des analogies**. La connaissance du concept cible indique à l'étudiant quelles relations une analogie doit préserver. La connaissance du domaine source lui indique si la source possède réellement ces relations. Les auditeurs les plus perspicaces n'étaient pas toujours les étudiants dont les centres d'intérêt correspondaient à l'analogie. C'étaient les étudiants qui connaissaient assez bien le domaine source pour l'inspecter. Cela a une implication de conception : une source familière peut transformer un étudiant de destinataire en auditeur expert. Les auteurs recommandent de confier des analogies imparfaites comme objets à inspecter et à réparer, plutôt que de les filtrer. L'analogie imparfaite devient une [[desirable-difficulties|difficulté productive]].

Ce constat complique l'hypothèse habituelle selon laquelle les explications générées par l'IA devraient être policées avant que les étudiants ne les voient. Une analogie propre peut encore encoder une projection erronée, et une analogie imparfaite peut être plus instructive si la tâche est la critique. La condition importante est que les étudiants aient assez de connaissances du concept cible pour savoir ce que l'analogie doit préserver, et assez de connaissances de la source pour vérifier qu'elle le fait. Sans l'une ou l'autre, l'analogie peut être mémorable pour la mauvaise raison.

[[anvil-ai-educational-animations|ANVIL]] montre le versant de la génération. ANVIL part d'une définition de concept, génère une analogie textuelle, la compile en scénario, produit du code d'animation et répare les échecs dans une boucle bornée. Le système a été évalué avec des enseignants en informatique, qui ont jugé la plupart des analogies adéquates et ont apprécié l'outil comme collaborateur créatif pour la planification initiale de leçons. Les auteurs ont aussi constaté que le contrôle de l'enseignant, la possibilité d'édition et l'adéquation pédagogique comptaient davantage que la qualité brute de la génération. ANVIL rappelle qu'une analogie générée par l'IA est un artefact candidat, et non une explication achevée : l'enseignant doit encore décider si la projection est structurellement solide et appropriée pour la classe.

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall et Panadero]] font de l'analogie l'argument lui-même. Le Thermomix, un appareil de cuisine guidée, suscite un enthousiasme et des critiques semblables à ceux que l'IA générative provoque en éducation. En projetant des scénarios de cuisine sur des scénarios d'apprentissage, ils déplacent la discussion de « l'IA est-elle bonne ou mauvaise » vers « quelle part du travail est déléguée, et qu'est-ce que cela fait à l'apprenant ? ». L'analogie n'est pas une preuve ; c'est un dispositif pour rendre visible un continuum de conception. C'est un usage légitime de l'analogie dans un article conceptuel, mais il ne faut pas le confondre avec une intervention testée.

[[code-anchor-multi-view-visualization|Le code comme ancrage]] ajoute une mise en garde de conception. Les étudiants ont utilisé plusieurs représentations, dont une vue métaphorique, mais ont passé l'essentiel de leur temps de regard sur le code et seulement une petite part sur la vue métaphorique. Certains ont perçu les [[scaffolding|étayages métaphoriques]] comme puérils ou comme un dispositif de rattrapage. Une métaphore qu'un enseignant trouve éclairante peut se lire, pour un étudiant, comme un marqueur de faible capacité. La légitimité fait partie de l'utilité pédagogique, et ne constitue pas une préoccupation séparée.

## La métaphore comme littératie critique en IA

Le cadre le plus direct pour enseigner avec des métaphores vient de [[roe-perkins-furze-metaphors-critical-ai-literacy-2025|Roe, Perkins et Furze (2025)]]. Ils définissent la littératie critique en IA comme la compréhension du fonctionnement des systèmes d'IA, doublée de l'examen de leurs conséquences sociales, environnementales et culturelles. Partant d'une liste de 13 métaphores courantes de l'IA, ils en retiennent quatre pour la classe et évaluent chacune selon quatre critères : l'accessibilité, la puissance explicative, le potentiel de littératie critique en IA et l'utilité pédagogique.

Les quatre sont :

- **L'IA comme miroir déformant**, pour la distorsion et les biais dans les productions générées.
- **L'IA comme carte**, pour la représentation, la sélection et le savoir de qui est inclus.
- **L'IA comme chambre d'écho**, pour les [[feedback|boucles de rétroaction]], les bulles de filtre et le renforcement des schémas existants.
- **L'IA comme boîte noire**, pour l'opacité et les limites de l'explication.

Chacune est associée à une courte activité et à une discussion animée par l'enseignant. La leçon du miroir déformant fait tester des invites par les étudiants pour repérer les biais ; celle de la chambre d'écho leur fait observer comment des invites répétées et des données limitées renforcent des schémas ; celle de la carte demande ce que la représentation d'une IA inclut et omet ; celle de la boîte noire recourt à la génération probabiliste pour rendre visibles des processus cachés. Les auteurs rattachent les activités au cadre de compétences en IA de l'UNESCO pour les étudiants, ce qui donne au cadre un [[curriculum-design|accrochage curriculaire]] plutôt que de le laisser comme une exhortation générale à parler des métaphores.

Le geste le plus important du cadre est de traiter les métaphores comme des objets de critique. Une métaphore est utile parce qu'elle est partielle, et elle devient dangereuse lorsqu'elle est présentée comme complète. Le miroir déformant montre la distorsion mais pas l'algorithme qui la produit. La carte montre la représentation mais peut laisser croire à une intention cohérente que le système n'a pas. La boîte noire montre l'opacité mais peut encourager la conclusion que rien ne peut être connu. La leçon devrait se terminer par la question de savoir où la comparaison se rompt.

C'est aussi ce qui relie le travail sur les métaphores à la [[ai-literacy|littératie en IA]] au sens large. Un atelier de métaphores est un moyen peu technologique de faire émerger des présupposés avant une leçon technique. La critique d'une analogie générée par l'IA est un moyen d'évaluer si un étudiant comprend le concept cible. La métaphore propre à un étudiant, comme la machine distributrice, peut être plus révélatrice qu'un item d'enquête standardisé. Ce sont toutes des formes de [[critical-thinking|pensée critique]] sur l'IA, et pas seulement des exercices d'écriture créative.

## Concevoir un enseignement fondé sur les métaphores

- **Partir de la caractéristique, pas de l'image.** Décidez de ce que les étudiants doivent comprendre, puis demandez quel domaine source préserve les relations qui comptent. Une comparaison mémorable qui pointe vers la mauvaise caractéristique est pire qu'une explication simple.
- **Vérifier l'adéquation structurelle avant la personnalisation.** L'appariement des centres d'intérêt peut accroître l'engagement, mais il ne garantit pas que le domaine source possède la bonne structure. Vérifiez la projection d'abord, puis personnalisez.
- **Auditer le domaine source du point de vue de l'accès culturel.** Les miroirs déformants, les cartes, le sport et les appareils de cuisine ne sont pas également familiers à tous les apprenants. Demandez ce que la comparaison suppose et proposez des alternatives.
- **Rendre les limites explicites.** Demandez aux étudiants de nommer ce que la métaphore préserve, ce qu'elle déforme et ce qu'elle ne peut pas expliquer. La critique est l'apprentissage évalué, et non une discussion facultative.
- **Utiliser plusieurs métaphores partielles.** Un miroir déformant, une carte et une chambre d'écho peuvent coexister parce que chacune éclaire une dimension différente. Une seule métaphore totalisante a plus de chances de devenir une idée fausse.
- **Garder l'explication technique à portée de main.** Une analogie peut ouvrir un sujet, mais elle ne doit pas remplacer un enseignement sur les données d'entraînement, la génération probabiliste ou la différence entre une production fluide et un savoir vérifié.
- **Évaluer l'activité, pas seulement l'engagement.** Le corpus ne montre pas encore que les leçons fondées sur les métaphores améliorent la littératie en IA ou les résultats d'apprentissage. Traitez les activités comme des conceptions à tester, et mesurez ce que les étudiants savent faire ensuite.

## Idées fausses courantes

- **« Une métaphore mémorable est une bonne métaphore. »** Le caractère mémorable n'est pas la puissance explicative. Les étudiants peuvent retenir une analogie vivante et mal comprendre le concept qu'elle devait clarifier.
- **« Les métaphores sont des illustrations neutres. »** Toute métaphore sélectionne certains traits et en cache d'autres. Le choix porte des présupposés sur l'agentivité, la confiance et la responsabilité.
- **« Les analogies générées par l'IA sont prêtes à l'emploi. »** Les analogies générées peuvent être structurellement fausses, culturellement étroites ou pédagogiquement inadéquates. Elles exigent une relecture de l'enseignant ou une tâche de critique par les étudiants.
- **« Si les étudiants aiment l'analogie, ils ont appris le concept. »** L'engagement et l'apprentissage sont des résultats distincts. La base de preuves ici est surtout qualitative et n'établit pas de gain d'apprentissage.

## Limites et lacunes des preuves

La littérature de cette base de connaissances est inégale. Les études sur les métaphores des enseignants et des étudiants sont [[qualitative-research|qualitatives]] et souvent de petite taille. L'étude sur les enseignants d'ingénierie analyse les réponses à une seule question d'entretien. L'étude sur la professionnalisation traite les décomptes de métaphores comme exploratoires. L'étude de classe sur les analogies compte dix étudiants de premier cycle et un facteur de confusion entre la personnalisation et le format de l'explication. Le cadre de Roe et al. est conceptuel et ses activités n'ont pas été testées avec des étudiants. ANVIL est une évaluation de système menée avec des enseignants, et non une étude d'apprentissage.

Cela ne rend pas ces travaux inutiles. Cela rend les affirmations justement modestes. L'élicitation de métaphores peut révéler des présupposés que les enquêtes manquent. La critique d'analogies peut rendre visible la compréhension structurelle. Une métaphore bien choisie peut donner à une classe un objet commun de discussion. Mais le champ a encore besoin d'études qui comparent un enseignement fondé sur les métaphores à un enseignement ordinaire, qui mesurent le transfert plutôt que le rappel de la métaphore, et qui testent si l'approche se transpose entre les cultures et les disciplines.

Le risque de surinterprétation est réel dans les deux sens. Un enseignant qui traite une métaphore comme une explication complète peut installer une idée fausse. Un chercheur qui traite la métaphore comme une simple décoration peut manquer un mécanisme par lequel les étudiants construisent, ou échouent à construire, un modèle mental. La position productive est de traiter la métaphore comme une représentation conçue, partielle et critiquable, et d'étudier ce que les apprenants en font.

## Concepts liés

- [[ai-literacy]] — le parapluie de la littératie critique en IA et de l'enseignement fondé sur les métaphores.
- [[critical-thinking]] — la critique d'analogies comme forme de raisonnement structurel.
- [[misconceptions]] — les analogies imparfaites comme source d'idées fausses durables.
- [[student-ai-interaction]] — comment les étudiants interprètent et auditent les explications de l'IA.
- [[pedagogical-agent]] — les tuteurs d'IA qui génèrent des explications ou des analogies.
- [[learning-design]] — choisir et séquencer des matériaux fondés sur des analogies.
- [[educational-development]] — l'élicitation de métaphores dans le développement professionnel des enseignants.
- [[engineering-education]] — les métaphores des enseignants et des étudiants en ingénierie.
- [[cs-education]] — l'usage et la critique d'analogies dans l'enseignement de l'informatique.
- [[cognitive-offloading]] — les métaphores de l'outil et de l'assistant, et leurs risques.
- [[trust-calibration]] — les rôles anthropomorphes et la confiance mal placée.
- [[equity-in-ai-education]] — quels domaines sources passent pour familiers.
- [[teacher-role]] — le jugement de l'enseignant sur les explications générées par l'IA.
- [[explainable-ai]] — l'explication système par opposition à l'analogie pédagogique.
- [[student-engagement]] — les effets d'engagement des analogies personnalisées.
- [[higher-ed]] — le cadre de la plupart des études de ce groupe.

## Articles liés

- [[roe-perkins-furze-metaphors-critical-ai-literacy-2025]] — Quatre métaphores et des critères pour enseigner la littératie critique en IA
- [[student-reception-genai-analogies-computing-2026]] — Des étudiants auditent des analogies générées par l'IA et réparent les projections défaillantes
- [[fear-awe-genai-metaphor-workshops-2025]] — Des ateliers d'analyse de métaphores avec des étudiants, des universitaires et du personnel
- [[engineering-faculty-metaphors-ai-understanding-2026]] — Les métaphores du corps enseignant en ingénierie construisent et contraignent la compréhension de l'IA
- [[genai-professionalization-metaphors-2026]] — Les conceptualisations métaphoriques de l'IA générative et de l'apprentissage professionnel chez les étudiants
- [[thermomix-genai-education-analogy-2026]] — Une analogie d'appareil de cuisine pour la délégation et l'apprentissage avec l'IA
- [[anvil-ai-educational-animations]] — Des analogies et des animations pédagogiques générées par l'IA pour l'informatique
- [[ai-engineering-education-balancing-act]] — Les métaphores de l'« oracle » et du « tuteur » chez les étudiants dépassent les capacités des LLM
- [[code-anchor-multi-view-visualization]] — Les étayages de visualisation métaphorique et leur problème de légitimité
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — La métaphore de la « machine distributrice de rétroaction » d'un étudiant comme preuve de littératie
- [[daoism-ai-education-philosophy-2026]] — « Zhenren » comme contre-métaphore de l'IA en éducation
