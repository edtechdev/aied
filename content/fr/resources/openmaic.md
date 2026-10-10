---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-10-10T04:00:00-04:00"
type: resource
summary: "La publication open source de MAIC : une classe multi-agents qui transforme un sujet ou un document en diapositives, quiz, simulations interactives et activités par projet, animée par des enseignants et des camarades d'IA."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

**OpenMAIC** est la publication open source de la classe multi-agents MAIC décrite dans [[intelligent-tutoring|l'étude MAIC]] : décrivez un sujet ou joignez vos propres matériels et elle génère une leçon complète — diapositives, quiz, simulations HTML interactives et activités par projet — puis l'anime à travers des enseignants d'IA et des camarades d'IA qui parlent, dessinent sur un tableau blanc et prennent part à la discussion. C'est le code derrière une classe que l'on peut faire tourner, et non pas seulement lire à son sujet.

## Ce que vous pouvez en faire

La génération en un clic produit une leçon en quelques minutes à partir d'une invite ou d'un document, d'un fichier audio ou vidéo téléversé. La couche multi-agents ajoute une discussion de classe à laquelle l'apprenant peut se joindre ou être appelé, des débats en table ronde entre personas avec illustrations au tableau blanc, et des questions-réponses en forme libre où l'enseignant répond par des diapositives ou des schémas. Les sessions prennent en charge jeux de diapositives, quiz, simulations interactives et apprentissage par projet, et s'exportent en `.pptx` modifiable ou en `.html` interactif. La version 1.0.0 (août 2026) a ajouté un établi d'agent : un espace de travail axé sur le dialogue qui planifie et révise des cours entiers, des sessions durables côté serveur que l'on peut annuler, reprendre ou réorienter, et 24 compétences intégrées couvrant diapositives, quiz, interactifs, images, vidéo et voix. Un paquet `SKILL.md` permet à un harnais d'agent de construire des classes depuis une application de messagerie.

## À qui cela s'adresse

Aux enseignants et équipes de cours qui veulent des matériels générés qu'ils peuvent encore modifier, aux concepteurs pédagogiques qui prototypent des activités multi-agents, et aux développeurs qui ont besoin d'une classe auto-hébergeable plutôt qu'un produit hébergé. Les écoles peuvent la déployer sur Vercel ou avec Docker, et le projet fournit une démo hébergée sur open.maic.chat.

## Remarques

Sous licence MIT, avec un guide utilisateur en anglais et en chinois et une communauté active sur Discord et Feishu. Elle est neutre du point de vue des modèles : vous fournissez au moins une clé de fournisseur de LLM, et des composants locaux optionnels (Lemonade pour les modèles locaux, FunASR pour la reconnaissance vocale) vous permettent de faire tourner une plus grande partie de la pile hors ligne — si bien que « gratuit » décrit le logiciel, pas la facture d'inférence. L'article qui la sous-tend est paru dans le *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), et le dépôt comptait plus de 38 000 étoiles en septembre 2026.

## Concepts liés
[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]]
