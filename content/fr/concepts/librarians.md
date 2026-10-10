---
title: "Bibliothécaires"
created: "2026-09-20T12:40:00-04:00"
updated: "2026-10-10T04:00:01-04:00"
type: concept
foundations: [ai-literacy, critical-thinking, academic-integrity, human-ai-collaboration]
pedagogy: [scaffolding, inquiry-based-learning, collaborative-learning, metacognition]
technology: [generative-ai, llm, knowledge-graph, recommender-systems-and-learning-paths, human-in-the-loop-ai, educational-nlp]
ethics: [trust, trust-calibration, ethics]
institutions: [governance, educational-policy-ai]
audience: [librarians, learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/librarians
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Bibliothécaires (Librarians)** — les professionnelles et professionnels de la bibliothèque et de l'information qui enseignent la littératie informationnelle, tiennent les consultations de recherche, construisent les collections et les systèmes de découverte, et siègent de plus en plus comme la contrepartie humaine des outils d'IA de recherche et de recommandation. Dans la recherche de la base de connaissances, ils apparaissent comme les personnes qui traitent la question de crédibilité qu'un modèle ne peut trancher — si un brevet, une norme technique ou un rapport sectoriel mérite d'être cru — et comme partenaires de la co-conception des cours et des politiques. Leur place dans l'[[ai-education|IA en éducation]] est donc double : comme éducateurs qui enseignent l'évaluation des sources et la stratégie de recherche, et comme la [[human-in-the-loop-ai|couche humaine]] à l'intérieur des systèmes construits autour de la recherche documentaire par l'IA.

## Questions à examiner

- L'IA peut désormais répondre en quelques secondes à la question de référence factuelle qu'un bibliothécaire traitait autrefois. Quelle part de ce travail a jamais consisté en *la réponse* — et quelle part en le jugement sur le point de savoir si une source méritait d'être crue ?
- Dans l'étude sur le bibliothécaire intégré, les questions d'évaluation des sources dominaient les consultations (38,5 %) précisément dans les cas où l'IA était la moins sûre d'elle. S'agit-il d'une défaillance de conception à corriger, ou d'un indice que le jugement de crédibilité résiste à l'automatisation ?
- [[genai-academic-search-workshop|L'atelier CHIIR 2026]] a rapporté un fossé de confiance — les étudiants [[trust-calibration|surent trop]] l'IA générative tandis que le corps professoral s'en méfiait. Qui comble un fossé de ce genre : un bibliothécaire, un enseignant, ou une interface qui montre ses sources et son niveau de confiance ?
- [[ithaka-sr-ai-skills-college-graduates-2026|Ithaka S+R]] a constaté que les institutions n'ont ni consensus sur ce que sont les compétences en IA, ni cadre pour les évaluer. L'enseignement de la littératie informationnelle est-il le lieu naturel pour ce travail — et le dire ainsi demande-t-il aux bibliothèques de porter une charge que leurs effectifs ne permettent pas d'assumer ?

## Introduction

Les bibliothécaires sont les professionnels qui se situent entre la question d'un apprenant et le corpus scientifique : bibliothécaires de référence et de liaison, spécialistes par discipline, bibliothécaires enseignants qui dispensent l'enseignement de la littératie informationnelle, et le personnel qui gère les collections et les dépôts. Dans l'[[ai-education|IA en éducation]], ils sont nommés bien moins souvent que les [[teacher-role|enseignants]] et les [[administrator|administrateurs]], et pourtant le corpus leur attribue un rôle spécifique et vérifiable. Ils sont la réponse humaine au problème de crédibilité que crée l'[[generative-ai|IA générative]], les instructeurs qui enseignent l'[[evaluative-judgment|jugement évaluatif]] et la stratégie de recherche plutôt que de se contenter de fournir des sources, et — dans le cas le plus fort de la base de connaissances — un composant conçu d'un système d'IA plutôt qu'un service situé à côté de lui.

Cette page traite le rôle comme distinct de ses voisins. Les [[educational-technology-developers|concepteurs de technologies éducatives]] construisent les systèmes de recherche et de recommandation ; les bibliothécaires décident ce à quoi ces systèmes ne devraient pas être crus habilités à conclure. L'[[academic-integrity|intégrité académique]] cadre l'usage de l'IA en termes d'autorship et de divulgation ; le cadrage du bibliothécaire — attribution, provenance, accès — en est adjacent mais plus concret.

## La littératie informationnelle comme enseignement, et pas seulement comme assistance

Les données probantes les plus détaillées de la base de connaissances sur ce rôle proviennent de [[ai-assisted-seminar-learning-information-literacy-2026|la plateforme de séminaire à bibliothécaire intégré de Huang]], construite pour des équipes de recherche en ingénierie dans une quasi-expérience menée auprès de 60 étudiants répartis dans trois programmes sur huit semaines (30 sur la plateforme intégrée, 30 dans un enseignement bibliothécaire classique). Le groupe intégré a gagné 0,78 point sur un instrument de littératie informationnelle en cinq points fondé sur l'ACRL, contre 0,25 pour le groupe témoin, avec les plus forts gains au sein du groupe en compétences de recherche (+0,87) et en évaluation des sources (+0,83), suivis par la synthèse d'information (+0,73) et la sensibilisation à l'usage éthique (+0,70). Fait notable, les items fondés sur la performance à eux seuls produisaient encore des effets importants, si bien que les gains ne sont pas purement de la confiance. Ce qui était enseigné recoupe le travail de bibliothèque : la formation d'une stratégie de recherche, l'appréciation des sources, la citation et la navigation dans les dépôts — les quatre catégories qui dominèrent ensuite les journaux de consultation.

Le corpus élargi ajoute une question d'effectifs et de diffusion. [[genai-academic-search-workshop|Le rapport de l'atelier CHIIR 2026]] décrit le [[curriculum-design|programme]] de littératie numérique de quinze semaines d'un bibliothécaire, construit sur une enquête menée auprès de 2 076 étudiants et de 101 bibliothécaires, et consigne le jugement des présentateurs selon lequel les ateliers à séance unique laissent les étudiants avec des fondations mal comprises ; le même rapport évalue la portée d'enseignement d'un seul bibliothécaire à environ 1 700 étudiants de première année.

## Là où l'IA était la plus faible, le bibliothécaire portait la charge

La plateforme de séminaire répartissait le travail délibérément : les algorithmes traitaient la recherche documentaire à grande échelle, les humains traitaient l'évaluation dans l'incertitude — et les journaux montrent que cette répartition fonctionnait. Sur 312 consultations (10,4 par participant), l'évaluation des sources et la qualité en représentaient 38,5 %, la formation d'une stratégie de recherche 29,2 %, la gestion des citations 18,6 %, et la navigation dans les dépôts 13,7 %, et 73,4 % recevaient une réponse dans les six heures. Les auteurs relient cela directement à la performance du modèle : le [[recommender-systems-and-learning-paths|moteur de recommandation]] atteignait une précision de 0,68 et un rappel de 0,61, en hausse par rapport à une référence par mots-clés booléens (0,52 et 0,48) mais encore insuffisants pour les jugements de crédibilité sur les brevets et les normes, et le traitement des requêtes en langage naturel répondait correctement à 72,8 % des requêtes spécifiques à l'ingénierie. La satisfaction suivait le même ordre — l'assistance du bibliothécaire la plus élevée à 4,3 sur 5,0, devant les recommandations (4,1), l'interrogation (3,9), les séminaires (3,8), les parcours d'apprentissage (3,6), et le [[knowledge-graph|graphe de connaissances]] (3,4) — et les entretiens ont consigné que 21 étudiants sur 30 citaient la confiance que leur inspirait la présence des bibliothécaires. L'usage était hétérogène — 11 sur 30 s'appuyaient sur l'IA, 8 sur les bibliothécaires, et 11 utilisaient les deux.

La tension joue dans les deux sens. Les cas que l'IA traitait le plus mal étaient des questions de crédibilité, et les propres auteurs de la plateforme concluent que maintenir un expert humain au point de décision sur la crédibilité est la leçon pratique. Mais l'étude est menée sur un seul site et n'est pas randomisée, ses trois composantes n'ont jamais été isolées, et les auteurs qualifient les résultats de « simplement préliminaires », relevant que la persistance après le retrait du soutien du bibliothécaire n'a jamais été testée. La question de savoir si la couche humaine était la cause des gains ou le filet de sécurité autour d'un moteur de recommandation à 0,68 de précision reste ouverte.

## Co-conception, partenariat, et qui paie la vérification

Les bibliothécaires apparaissent aussi comme co-concepteurs plutôt que comme fournisseurs de services. [[maybee-disruptive-partnerships-sap-2025|Maybee, LeGrand et Fundator]] documentent Partners for Algorithmic Literacy à Purdue — une communauté d'apprentissage de six semaines réunissant étudiants et corps professoral, animée par des bibliothécaires universitaires, où étudiants de premier cycle et corps professoral coproduisent des [[educational-policy-ai|politiques]] de cours relatives à l'IA et des [[group-work|projets de groupe]] intégrant l'IA. Les auteurs la présentent comme une alternative aux récits déficitaires sur l'[[ai-misuse-learning-harm|usage abusif de l'IA]] par les étudiants, et les réflexions des étudiants du programme SPIRaL montrent que la littératie informationnelle est réapprise : les participants l'assimilaient initialement à l'évaluation des sources, puis se sont déplacés vers une lecture qui en fait une pratique savante stratifiée liée à l'[[agency|autonomie]]. Ce déplacement — de la vérification des sources au jugement sur la production du savoir — est celui que le bibliothécaire est positionné pour produire.

Deux autres fils fixent les limites du rôle. [[pearls-epistemic-verification-2026|Le cadre PEARLS]] nomme l'Accès, la Légitimité et la Source parmi ses six dimensions de vérification et relève que la vérification consomme de l'accès aux bases de données, du langage disciplinaire, et parfois des outils payants — si bien que les apprenants disposant de moins de ressources portent une charge plus lourde pour prouver un usage responsable, et les bibliothécaires sont nommés parmi les parties dont la co-conception a besoin. [[aarc-ai-research-competency-2026|Le cadre AARC]] rend l'objectif pédagogique explicite : vérifier, citer et réfléchir comme engagements récurrents, évalués à travers le processus de recherche — y compris la détection de la fabrication et des biais — plutôt qu'à travers le produit. [[hingle-collaborative-ai-literacy-2025|La revue de Hingle et Johri]] montre que les mêmes dispositifs que les bibliothèques utilisent déjà se transfèrent : les bénéfices du travail de groupe pour la littératie informationnelle se généralisent à l'apprentissage de l'[[ai-literacy|littératie en IA]], y compris avec des [[agentic-ai|agents d'IA]] comme partenaires.

## Implications pour l'IA en éducation

- **Garder un humain au point de décision sur la crédibilité.** Une précision autour de 0,68 laissait environ un tiers du matériel remonté sans correspondance, et l'évaluation des sources était le type de consultation le plus demandé — un indice de conception pour toute couche de recherche ou de recommandation par l'IA.
- **Traiter la littératie informationnelle comme un enseignement.** Les gains qui ont tenu sur les items fondés sur la performance étaient la stratégie de recherche et l'appréciation des sources, que les bibliothécaires enseignants enseignent déjà et qu'exigent aussi l'attribution et la vérification des productions de l'IA ([[academic-integrity]], [[critical-thinking]]).
- **Concevoir pour des parcours hétérogènes.** Avec des groupes à peu près égaux préférant l'IA, les bibliothécaires, ou les deux, l'acheminement des consultations par discipline et par charge de travail a absorbé 312 d'entre elles à 10,4 par participant ; un parcours unique imposé laissera mal servis certains apprenants.
- **Rendre visibles la confiance et les sources.** Le fil « recherche comme apprentissage » de l'atelier demande quels processus cognitifs ne devraient pas être délestés et appelle à des interfaces qui préservent les points de décision — un [[scaffolding|étayage]] que les bibliothécaires peuvent spécifier à partir de leur norme de travail ordinaire qu'est la visibilité des sources.
- **Budgéter la couche humaine, pas seulement le modèle.** Les consultations ont reçu une réponse en quelques heures, à grande échelle, parce que le personnel était acheminé délibérément ; supposer que les apprenants assumeront seuls le jugement de crédibilité transfère ce coût aux personnes les moins outillées pour le payer.

## Concepts liés

- [[ai-literacy]]
- [[evaluative-judgment]]
- [[critical-thinking]]
- [[academic-integrity]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[recommender-systems-and-learning-paths]]
- [[knowledge-graph]]
- [[scaffolding]]
- [[inquiry-based-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[learners]]

## Articles liés

- [[ai-assisted-seminar-learning-information-literacy-2026]] — Plateforme de séminaire à bibliothécaire intégré ; 312 consultations dominées par l'évaluation des sources
- [[genai-academic-search-workshop]] — Atelier CHIIR 2026 sur l'IA générative et la recherche académique ; le fossé de confiance entre bibliothécaires
- [[maybee-disruptive-partnerships-sap-2025]] — Des bibliothécaires universitaires co-concevant la littératie en IA avec les étudiants comme partenaires
- [[aarc-ai-research-competency-2026]] — Vérifier, citer, réfléchir comme engagements de recherche enseignables
- [[pearls-epistemic-verification-2026]] — Protocole de vérification à six dimensions ; l'accès et la légitimité comme filtres
- [[hingle-collaborative-ai-literacy-2025]] — Apprentissage collaboratif pour la littératie en IA ; les bénéfices de la littératie informationnelle se transfèrent
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Les enseignants classent l'attribution et l'usage responsable au premier rang, mais enseignent peu des 26 compétences
- [[bird-multimodal-educational-literature-2026]] — Outil de complexité textuelle construit pour des utilisateurs non techniques tels que les enseignants d'anglais et les bibliothécaires
- [[cognitive-offloading-llm-synthesis-writing]] — Ce que les apprenants délestent lorsque l'IA synthétise les sources à leur place
- [[citation-errors-hallucinations-computing-education-2026]] — Les citations fabriquées et erronées comme problème de vérification
