---
title: "conText"
created: "2026-11-12T11:14:00-05:00"
updated: "2026-11-13T20:20:00-05:00"
type: resource
summary: "Un tuteur gratuit dans le navigateur qui lit la photo d'un cahier, un PDF ou un texte, puis accompagne l'étudiant par un dialogue socratique en anglais ou en espagnol tout en dessinant un graphe vivant des idées qu'il relie en parlant."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
source_updated: "2026-11-13T12:50:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

conText est la plus nette des petites démonstrations d'une direction dont le [[intelligent-tutoring|tutorat par IA]] parle beaucoup et qu'il met rarement en œuvre : le modèle ne répond pas à la question de l'étudiant, il pose la suivante, et les idées de l'étudiant sont dessinées sous forme de graphe pendant qu'il parle. Téléversez la photo d'une page de cahier, un PDF ou un texte, et l'outil dit d'abord ce qu'il a compris, puis engage un dialogue [[socratic-method|socratique]] parlé. Chaque idée nommée par l'étudiant apparaît comme un nœud dans un [[knowledge-graph|graphe de connaissances]] vivant ; les arêtes apparaissent à mesure que la conversation les relie, et le panneau indique combien d'idées restent non reliées.

## Ce que vous pouvez en faire

La boucle est délibérément courte. Le matériel entre (jusqu'à 10 Mo, huit pages PDF ou 15 000 caractères de texte), le tuteur le relit, et la conversation se fait par la voix — le site indique que le tuteur ne note pas et n'écrit pas à la place de l'étudiant. Le graphe est l'artefact qui donne sa valeur à la séance après coup : il montre quelles idées l'étudiant a réellement mises en relation et lesquelles sont restées flottantes, ce qui est bien plus précis à examiner qu'une transcription de conversation. La séance peut être exportée en fichier XML de graphe et rechargée un autre jour pour continuer, et le bouton de suppression l'efface immédiatement ; sinon, le serveur la supprime au bout d'une heure.

Cette combinaison — un tuteur qui retient la réponse, plus une trace visuelle du raisonnement — relève pleinement de ce que l'[[scaffolding|étayage]] et la réflexion [[metacognition|métacognitive]] cherchent à obtenir, et elle donne à l'enseignant quelque chose de concret à interroger plutôt qu'une dissertation finie ou un nombre correct. La formulation du site est qu'un résultat correct ne prouve plus la compréhension dès lors que l'IA générative peut le produire, si bien que le processus doit être visible.

## À qui cela s'adresse

Les étudiants qui travaillent sur une lecture ou une série d'exercices et veulent qu'on les interroge plutôt qu'on réponde à leur place, les enseignants qui veulent une vérification à faible enjeu de la capacité d'un étudiant à relier des idées, et les développeurs pédagogiques qui cherchent un exemple concret de preuve du processus. Les enseignants disposent d'un guide aligné sur le programme en anglais, espagnol, portugais et français ; l'outil lui-même fonctionne en anglais et en espagnol, et la vidéo de démonstration est en espagnol.

## Remarques et réserves

Aucun prix ni compte n'est publié pour l'outil destiné aux étudiants, tandis que le déploiement institutionnel — cloud, sur site ou hybride — est proposé sur devis et après un entretien ; considérez « gratuit » comme l'état de la démo publique en novembre 2026, non comme une garantie. Le texte et les images vont à un service hébergé alimenté par Claude, et le site lui-même demande aux utilisateurs de retirer noms, montants, adresses et noms d'entreprises avant de téléverser, ce qui déplace la charge de la désidentification vers la personne qui téléverse plutôt que vers la plateforme. Les séances se suppriment d'elles-mêmes après une heure sauf export. L'entreprise sous-jacente commercialise aussi une plateforme d'évaluation par graphes de raisonnement plus large auprès des établissements, et ses affirmations sur la distinction entre graphes déductifs, inductifs, abductifs et analogiques proviennent de quatre textes de référence — le site parle d'une démonstration, la validation à l'échelle restant à venir.

## Concepts liés

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
