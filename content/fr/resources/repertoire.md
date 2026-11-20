---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Une application web pour construire des tâches d'IA étape par étape, dans lesquelles l'enseignant définit le rôle du modèle et les verrous sur l'usage par l'étudiant, et l'identité de l'étudiant reste hors du contexte du modèle."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

Un constructeur de tâches intégrant l'IA, créé par Joseph Slade à Oregon State University et exploité par AI Education Labs, Inc. Le postulat est que l'alternative à un chatbot sans règles n'est pas l'interdiction mais la structure : l'enseignant définit les étapes que l'étudiant traverse, décide quel rôle le modèle joue à chaque étape et fixe jusqu'où l'étudiant peut s'appuyer sur lui. La tâche est ensuite publiée sous forme de lien d'accès plutôt que distribuée comme un document de prompts.

## Ce que vous pouvez en faire

- **Définissez le rôle du modèle par tâche.** Le constructeur propose des préréglages tuteur, questionneur socratique, fournisseur de feedback et assistant de recherche, plus un prompt personnalisé, pour que l'assistant se comporte comme la tâche l'exige.
- **Placez des verrous entre les étapes.** Une étape peut exiger que l'étudiant explique son raisonnement avant d'avancer, et l'aide de l'IA peut être plafonnée par étape — l'interface affiche un compteur d'utilisations restantes plutôt qu'un accès illimité.
- **Choisissez la surface de travail.** Les étudiants écrivent sur une page de document avec des commentaires en marge, des agencements chat et carnet disponibles lorsqu'elles conviennent mieux à la tâche qu'une page.
- **Publiez et observez le raisonnement, pas seulement le résultat.** Un lien d'accès inscrit les étudiants, la progression s'enregistre au fur et à mesure, et l'enseignant peut lire la transcription de chaque étudiant et l'exporter en CSV ou Markdown.
- **Ébauchez avec l'IA, puis affinez.** La configuration peut partir de quelques questions, d'une tâche existante téléversée ou d'une tâche précédente, avec un assistant côté enseignant qui remplit une première ébauche.

Les exemples publiés suggèrent l'étendue visée : une tâche de physique portant sur preuves et témoignages, un exercice de biologie diagnostiquant l'erreur de raisonnement dans l'explication d'un stagiaire IA, et une tâche de psychologie vérifiant si un article de presse décrit la conception d'une étude.

## À qui cela s'adresse

Les enseignants de l'enseignement supérieur qui veulent que la [[learning-design|conception pédagogique]] porte la politique d'IA — c'est-à-dire qui préfèrent contraindre la manière dont un modèle peut être utilisé dans une tâche plutôt que de surveiller s'il a été utilisé. Les verrous et les réglages de rôle sont une expression au moment de la conception des [[guardrails|garde-fous]], et l'application vise le travail de cours plutôt qu'un déploiement institutionnel de chat.

## Remarques et réserves

- **Phase pilote.** Les conditions indiquent que le service est actuellement fourni gratuitement pour des pilotes et que des offres payantes pourront être introduites avec préavis, et que les fonctionnalités peuvent changer ou être retirées. Il n'y a pas de page publique de tarifs ; on n'accède aux tarifs qu'après connexion.
- **L'affirmation de confidentialité est architecturale, et mérite une lecture attentive.** Chaque étudiant reçoit un identifiant de session aléatoire par tâche, la correspondance entre le compte de l'étudiant et la session reste sur le serveur de Repertoire, et le modèle reçoit la session anonyme, le contexte de la tâche et le texte de l'étudiant. La réserve est dans la politique elle-même : un texte saisi par l'étudiant qui l'identifie est envoyé comme n'importe quel autre texte, et l'enseignant du cours peut lire les transcriptions.
- **Inférence tierce.** Les réponses sont générées via l'API Claude d'Anthropic avec l'API d'OpenAI en secours, selon des conditions commerciales dont la politique dit qu'elles excluent l'entraînement sur les entrées et sorties de l'API depuis septembre 2026. Un établissement devrait le confirmer via son propre accord plutôt que via une page web.
- **Ce n'est pas un correcteur.** La politique et les conditions décrivent toutes deux les jugements de l'assistant, tels que « objectif atteint », comme des aides pour l'enseignant ; les notes et les décisions académiques restent à l'enseignant et à l'établissement, et les décisions sur la [[ai-use-disclosure|divulgation de l'usage de l'IA]] aux étudiants sont laissées à l'enseignant.
- **Hébergé aux États-Unis.** Les données résident dans Google Cloud Firestore avec un hébergement Vercel, et la politique traite les obligations FERPA lorsque le service manipule des dossiers éducatifs ; les utilisateurs hors des États-Unis sont informés que leurs données y sont traitées.
