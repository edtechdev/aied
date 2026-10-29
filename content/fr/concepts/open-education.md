---
title: "Éducation ouverte"
created: "2026-10-28T20:30:00-04:00"
updated: "2026-10-28T23:20:00-04:00"
type: concept
technology: [open-source, generative-ai]
pedagogy: [active-learning, collaborative-learning]
foundations: [curriculum-design]
institutions: [educational-policy-ai, governance]
ethics: [equity-in-ai-education]
audience: [instructors, administrators, policymakers, curriculum designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [okstate-ai-oer-case-studies-doers-2026]
translation_of: concepts/open-education
source_updated: "2026-10-28T21:15:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Éducation ouverte** — le mouvement et la pratique d'un enseignement fondé sur des contenus sous licence ouverte, et la pédagogie qui tient les étudiants pour producteurs de ces contenus plutôt que pour consommateurs. Ses deux artefacts sont la ressource éducative ouverte et le devoir de pédagogie ouverte ; sa licence est ce qui rend la réutilisation licite, et sa thèse est que l'une comme l'autre réduisent le coût et élargissent l'autorat. L'IA générative pèse désormais sur ces trois fronts : elle effondre le coût de fabrication des contenus, elle brouille l'identité de l'auteur d'une ressource remixée, et elle offre aux institutions une alternative bon marché aux communs qu'on leur demandait de financer.

## Questions à examiner

- Si un modèle peut rédiger une unité de cours en quelques minutes, qu'est-ce qui justifie encore la licence, la chaîne d'attribution et le processus de révision qu'un contenu ouvert emporte avec lui ?
- Une ressource peut être ouverte par sa licence et fermée en pratique : le fichier se télécharge, mais le cours qui l'entoure suppose un laboratoire, une langue ou une connexion dont les étudiants ne disposent pas. Quelle ouverture mesurez-vous lorsque vous rendez compte de l'adoption ?
- La pédagogie ouverte demande aux étudiants de publier leur travail. À qui appartient ce qu'un étudiant produit avec un outil génératif, qui consent à sa diffusion, et qui supporte le coût lorsqu'il est erroné ?
- La littératie en IA des enseignants prédit la pratique d'enseignement ouverte, mais la relation s'affaiblit à mesure que le soutien institutionnel augmente. Qu'implique cette inversion pour des programmes de formation bâtis sur l'hypothèse que le soutien ne peut qu'aider ?
- Si un texte généré par IA n'est pas protégeable par le droit d'auteur, un manuel écrit par une machine est-il automatiquement ouvert, et qu'est-ce que cela change au plaidoyer pour le financement public des ressources éducatives ouvertes ?

## Introduction

L'éducation ouverte n'est pas l'open source, et la confusion coûte aux deux. L'open source porte sur **les artefacts qu'un développeur livre et licence**, surtout du code, des poids de modèles et des jeux de données, afin qu'un système puisse être licencié, audité, modifié et redéployé. L'éducation ouverte porte sur **ce qu'un enseignant prescrit et ce qu'un étudiant produit**, et sa licence existe pour qu'une seconde institution puisse substituer, traduire, remixer ou corriger une ressource sans demander d'autorisation. Les deux partagent une mécanique juridique (Creative Commons pour l'éducation, licences permissives pour le code), un modèle de production (communautés bénévoles et financées par subventions) et désormais un adversaire commun, l'IA générative, dont la capacité à produire l'artefact presque gratuitement ébranle l'argument économique de l'une comme de l'autre.

Elles divergent là où cela compte. Une publication open source se juge à la possibilité de reconstruire et d'inspecter le système ; une ressource ouverte se juge à la possibilité, pour un enseignant ayant d'autres étudiants, une autre langue et un autre budget, de l'utiliser réellement. C'est une affirmation pédagogique et non technique : d'où l'argument de pratique que l'éducation ouverte a toujours porté à côté de celui de la licence. [[deimann-rethinking-openness-ai-2026|Deimann et Lukács (2026)]] en donnent la version la plus nette : après vingt-cinq ans de plaidoyer pour l'ouverture, le régime institutionnel au cœur de l'éducation est resté intact, le mouvement s'étant concentré sur des déclarations et des projets de niche.

La littérature de l'ère de l'IA rassemblée dans cette base de connaissances porte sur trois choses à la fois : la ressource, la pratique, et leur survie quand la génération est quasi gratuite. Sur la ressource : qui la fabrique, qui la licence, et si une ressource écrite par une IA compte. Sur la pratique : ce que la pédagogie ouverte demande aux étudiants et ce qu'elle leur apprend de mesurable.

### Ce que recouvre réellement l'ouverture

Une ressource éducative ouverte (REO) est un contenu publié sous une licence qui autorise la réutilisation, la révision, le remixage et la redistribution. Tout le reste du champ découle de cette autorisation et de l'obligation d'en attribuer la paternité. [[gonzalez-miy-active-learning-mentoring-ai-oer-2026|González Miy (2026)]] montre cette obligation à l'œuvre dans un petit projet : onze participants travaillant en ligne pendant deux semaines ont produit un site de six pages, un agent conversationnel, un manuel et cinq tutoriels vidéo publiés sous CC BY-NC-SA, et l'ensemble a obtenu un score élevé en transparence mais seulement moyen en licence, reproductibilité, adaptabilité et accessibilité. Ouvert de nom, partiellement ouvert à l'usage.

La littérature sur les licences est granulaire parce que les défaillances le sont. [[ryu-developing-ai-literacy-oer-2026|Ryu (2026)]] construit une grille de sept principes pour évaluer des ressources de littératie en IA sous licence ouverte, à partir d'un corpus raisonné de seize articles centraux, de dix-sept articles complémentaires et de trente-six références ciblées. [[atenas-oer-digital-public-goods-2026|Atenas, Farrow, Caldwell, Costello et Havemann (2026)]] soutiennent que l'unité de gouvernance devrait passer de la ressource à l'infrastructure qui l'héberge : un commun de fichiers isolés sans plateforme maintenue relève de la fragmentation, non du commun.

### L'effondrement de la génération et le tournant des biens publics numériques

La production de cours est le lieu où le basculement se mesure déjà : [[mooc-to-maic|MAIC]] fait passer la production d'un MOOC d'environ 25 000 \$ et 60 heures par cours à moins de 2 \$ et 30 minutes grâce à une génération multi-agents pilotée par LLM. Si le coût de production tend vers zéro, l'argument selon lequel les REO font économiser de l'argent perd sa force ; restent la liberté de licence, la vérifiabilité et l'assurance qualité.

[[tlili-double-edged-sword-oer-generative-ai-2026|Tlili, Farrow, Bozkurt, Amiel, Wiley et Downes (2026)]] organisent ce basculement autour de cinq questions de cadrage et aboutissent à une lecture juridique dérangeante. Comme le Copyright Office des États-Unis juge que les invites seules ne suffisent pas à établir une paternité, une ressource purement générée par IA peut tomber dans le domaine public et, en lecture stricte, être ouverte par défaut. Leur terme pour la défaillance inverse est l'*openwashing* : un artefact présenté comme ouvert alors que ses données d'entraînement, sa chaîne de traitement ou sa licence ne le sont pas. La paternité est aussi une question juridique avant d'être une question de licence, et [[legal-issues-and-risks|le versant juridique et le droit d'auteur]] traverse les manquements autant que la propriété.

La réponse politique de cette littérature consiste à reclasser. Atenas et ses collègues proposent de traiter les REO comme des biens publics numériques, ce qui déplace le remède : non plus produire davantage de contenus, mais bâtir une infrastructure publique, gouvernée et non commerciale. Ils la mesurent aux principes ROAM-X et aux normes de données FAIR, et décrivent un paysage comptant déjà plus de deux milliards d'œuvres sous licence ouverte et 303 indicateurs d'universalité d'Internet. Réorientation défendable pour un mouvement qui a passé deux décennies à produire des contenus.

L'argument institutionnel en faveur de l'ouverture est aussi un argument d'autonomie. [[panda-editorial-digital-transformation-open-education-2026|Panda (2026)]] soutient dans un éditorial que la transformation numérique de l'apprentissage ouvert et flexible est une transformation pédagogique et non une adoption technologique, et qu'une technologie ne gagne en crédibilité que lorsqu'elle s'aligne sur une pédagogie appropriée dans un contexte local. [[rodes-paragarino-oer-generative-ai-framework-2026|Rodés-Paragarino et Atenas (2026)]] en tirent un cadre à sept piliers pour l'intégration responsable des REO et de l'IA générative, construit à partir d'une analyse documentaire, d'une validation d'experts et d'un atelier participatif réunissant 81 participants à Bilbao en décembre 2025.

### La pédagogie ouverte et le tournant de la pratique

La pédagogie ouverte fait passer l'étudiant de consommateur à contributeur : un devoir produit quelque chose qui est publié, placé sous licence et réutilisable. [[clinton-lisell-open-pedagogy-ai-tools-2026|Clinton-Lisell (2026)]] en fournit le test le plus propre. Deux sections d'un cours d'introduction au développement de l'enfant ont mis à jour le même manuel, l'une avec des outils d'IA générative. Sur 113 devoirs, les étudiants des deux sections font état d'un gain de compétences en littératie de l'information, statistiquement indiscernable entre elles : un effet du temps de F(1, 84) = 47.30, p < 0.001, η2 partiel = 0.36, contre une interaction temps × section de F(1, 84) = 0.04, p = 0.85. La section avec IA a accompli davantage de travail et obtenu des notes légèrement inférieures, 174,73 contre 173,86 sur 180.

La pratique a sa propre littérature de maturité. [[duan-open-educational-practices-evolution-2026|Duan (2026)]] a criblé 540 enregistrements pour retenir quatorze modèles de pratique éducative ouverte selon PRISMA 2020, les a comparés sur trois dimensions et conclut que l'IA générative se loge sous les modèles établis sans les supplanter, argument que l'article situe face au TPACK. [[ahmadfard-interactive-oer-review-2026|Ahmadfard (2026)]] aboutit à une conclusion voisine sur l'interactivité dans une revue structurée qui remonte à 1970 : les dispositifs interactifs relèvent d'un argument de conception plus que d'un effet démontré, et les tailles d'effet les plus fortes qu'il rapporte proviennent de travaux antérieurs en didactique de la physique, non de mesures dans des REO.

Deux autres études montrent la vitesse à laquelle la pratique devient gouvernance. [[patino-ai-international-cooperation-open-education-2026|Patiño, Martínez-Pérez, Ramírez-Montoya et Miranda (2026)]] documentent une résidence UNESCO–ICDE réunissant 110 participants de 13 pays en 10 équipes, mais leur enquête compte 72 réponses de 54 établissements sans taux de réponse : appui mince pour une feuille de route visant l'Agenda 2030 de l'ONU. Et [[guo-teachers-ai-literacy-open-education-practices-2026|Guo, Lu et Gao (2026)]] ont interrogé 512 enseignants de 30 provinces chinoises sur la manière dont la littératie en IA se traduit en pratique d'enseignement ouverte : ils trouvent un chemin indirect par le comportement innovant de 0,218 lorsque le soutien institutionnel est faible, qui tombe à 0,042 non significatif lorsque le soutien est élevé.

### Équité, durabilité et Sud global

L'argument d'équité en faveur des contenus ouverts est le plus ancien : une ressource sans prix ne peut être exclue pour des raisons financières. C'est aussi le plus volontiers affirmé et le plus rarement éprouvé. Les versions de l'ère de l'IA sont plus prudentes. Atenas et ses collègues présentent les REO comme un levier pour les communautés marginalisées et pour une participation significative à la collecte de données, en avertissant qu'une dépendance excessive aux ressources générées risque de dévaloriser la créativité et le jugement humains. Tlili et ses collègues nomment les mécanismes par lesquels la génération affaiblit ce levier : erreur de traduction, biais des données d'entraînement, et boucle d'hallucination où le contenu généré est recyclé dans les corpus qui entraînent le modèle suivant.

La durabilité intervient deux fois, comme financement et comme énergie. L'argument des biens publics numériques est essentiellement un argument de durabilité : un commun fragmenté de fichiers financés par subventions ne survit pas à ses subventions, alors qu'une infrastructure gouvernée publiquement le pourrait. Le volet environnemental apparaît dans la littérature plus large sur l'ouverture et dans le concept de [[sustainability|durabilité]] de cette base de connaissances, où le coût d'inférence des modèles est déclaré comme une obligation de la pratique ouverte, non comme un supplément d'attention.

C'est sur la dimension du [[global-south|Sud global]] que les preuves s'amincissent le plus. Les cas non occidentaux du lot sont réels mais peu nombreux : une résidence de coopération latino-américaine, des enseignants d'universités ouvertes chinoises, et un cadrage de l'infrastructure comme condition préalable de la participation. Les affirmations selon lesquelles l'ouverture redistribue automatiquement les capacités ne sont pas étayées par ces études, et plusieurs d'entre elles le disent.

### Là où l'écriture et les systèmes de recommandation rejoignent l'argument

Deux articles de ce lot portent sur des systèmes de production plutôt que sur des politiques. [[peng-personalized-recommendation-oer-2026|Peng (2026)]] développe un recommandeur profond hybride pour les REO et rapporte une exactitude de 93,6 pour cent, une précision de 92,5 pour cent, un rappel de 91,0 pour cent et un score F1 de 90,2 sur 2 400 enregistrements d'interaction. Son propre tableau comparatif montre une référence BERT4Rec à 90,8 de F1 avec un rappel égal, et la section sur le jeu de données laisse utilisateurs, items et parcimonie en variables réservées. L'affirmation de modélisation est modeste ; le schéma est familier : le gain sur une référence solide est plus petit que le titre.

Le second rappelle qu'un système génératif peut être ouvert et son contenu fermé. OATutor associe une base de code du MIT à des manuels d'algèbre OpenStax sous CC BY : les licences du code et du contenu doivent donc rester compatibles par conception. Cette unique obligation technique est la forme pratique la plus claire du rapport entre open source et éducation ouverte : des objets différents, la même mécanique juridique, et une contrainte de compatibilité qui pèse sur celui qui assemble les deux.

## Idées fausses courantes

**« L'éducation ouverte et l'open source sont la même ouverture. »** Elles partagent une mécanique de licences et un modèle de production, et ne sont pas interchangeables. L'open source est une affirmation sur un système reconstructible et inspectable ; l'éducation ouverte est une affirmation sur une ressource pédagogique utilisable et adaptable. Une école peut tourner entièrement sous logiciel libre avec un manuel fermé, et beaucoup le font.

**« Ouvert veut dire gratuit pour l'étudiant, et c'est là tout le bénéfice. »** Le coût est la moitié mesurable. L'autre moitié est la permission : une ressource révisable est une ressource qu'un second établissement peut corriger, traduire et localiser. Les études de ce lot rapportent bien plus souvent l'achèvement et la satisfaction que l'adaptation, et c'est pourquoi l'affirmation sur l'adaptation reste largement non testée.

**« L'IA rend le contenu si bon marché que les REO deviennent obsolètes. »** Une lecture inverse existe et elle est mieux étayée. Si la génération est quasi gratuite, les biens rares deviennent la licence, la chaîne d'attribution, le processus de révision et la plateforme maintenue. C'est pourquoi cette littérature converge vers la gouvernance et l'infrastructure plutôt que vers la production.

**« Ajouter des outils d'IA à un devoir ouvert améliore l'apprentissage. »** Le seul test quasi expérimental disponible ici trouve une progression perçue des compétences dans les deux bras sans différence décelable entre eux, avec un achèvement plus élevé et des notes légèrement inférieures dans la section avec IA. L'IA a changé ce que les étudiants produisaient, non ce qu'ils déclaraient avoir appris.

## Concepts liés

- [[open-source]]
- [[legal-issues-and-risks]]
- [[regulation]]
- [[generative-ai]]
- [[educational-policy-ai]]
- [[governance]]
- [[equity-in-ai-education]]
- [[curriculum-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[authentic-assessment]]
- [[sustainability]]
- [[global-south]]
- [[ai-literacy]]
- [[digital-divide]]
- [[accessibility]]
- [[change-management]]

## Articles liés

- [[tlili-double-edged-sword-oer-generative-ai-2026]] — Cinq cadrages pour les REO dès lors que l'IA générative entre en production (Tlili et al., 2026)
- [[atenas-oer-digital-public-goods-2026]] — Les REO comme biens publics numériques et l'argument d'une infrastructure gouvernée (Atenas et al., 2026)
- [[deimann-rethinking-openness-ai-2026]] — Pourquoi vingt-cinq ans d'ouverture ont laissé le cœur institutionnel intact (Deimann et Lukács, 2026)
- [[clinton-lisell-open-pedagogy-ai-tools-2026]] — Pédagogie ouverte avec et sans outils d'IA dans deux sections de cours (Clinton-Lisell, 2026)
- [[duan-open-educational-practices-evolution-2026]] — Quatorze modèles de pratique éducative ouverte et la place de l'IA parmi eux (Duan, 2026)
- [[guo-teachers-ai-literacy-open-education-practices-2026]] — Littératie en IA des enseignants et pratique ouverte dans 30 provinces chinoises (Guo et al., 2026)
- [[rodes-paragarino-oer-generative-ai-framework-2026]] — Un cadre à sept piliers pour une intégration responsable des REO et de l'IA (Rodés-Paragarino et Atenas, 2026)
- [[gonzalez-miy-active-learning-mentoring-ai-oer-2026]] — Mentorat et production de REO assistée par IA dans un laboratoire virtuel (González Miy, 2026)
- [[ryu-developing-ai-literacy-oer-2026]] — Une grille de sept principes pour évaluer des REO de littératie en IA (Ryu, 2026)
- [[ahmadfard-interactive-oer-review-2026]] — L'interactivité des REO comme argument de conception plutôt que comme résultat (Ahmadfard, 2026)
- [[patino-ai-international-cooperation-open-education-2026]] — La coopération internationale en éducation ouverte comme cas instrumental (Patiño et al., 2026)
- [[peng-personalized-recommendation-oer-2026]] — Un recommandeur hybride pour les REO face à une référence plus solide qu'annoncé (Peng, 2026)
- [[panda-editorial-digital-transformation-open-education-2026]] — La transformation numérique de l'apprentissage ouvert comme transformation pédagogique (Panda, 2026)
