---
title: "Type de question Texte IA pour Moodle"
created: "2026-11-12T11:18:00-05:00"
updated: "2026-11-13T20:20:00-05:00"
type: resource
summary: "Un type de question Moodle open source (GPL v3) qui note des réponses en texte libre avec un grand modèle de langage selon une invite par question et un barème facultatif, en utilisant OpenAI, Azure ou un modèle Ollama auto-hébergé et en montrant le retour de l'IA à un correcteur humain."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

La plupart des intégrations de quiz IA envoient chaque réponse à un appel de notation fixe. Ce type de question Moodle fait l'inverse : l'enseignant écrit le barème. Chaque question porte une **invite** indiquant au modèle comment évaluer la réponse et un **barème** facultatif décrivant comment les points sont attribués, si bien qu'un item « écrire une phrase au passé » peut préciser dix points sans erreur, zéro pour une grammaire cassée et un point retiré par faute d'orthographe. Le modèle renvoie une note et un [[feedback|retour]], et un enseignant peut voir ce retour à côté de la réponse lorsqu'il corrige à la main.

## Ce que vous pouvez en faire

Ajoutez une question AIText à n'importe quel quiz Moodle, écrivez l'invite et le barème, et testez les invites avec un **testeur d'invite** AJAX dans le formulaire d'édition plutôt qu'en enchaînant les tentatives en aperçu. La notation passe par deux comportements de question compagnons (immédiat et différé) qui doivent être installés avec le type de question, ce qui garde la notation IA isolée des comportements du cœur de Moodle ; les tentatives existantes qui utilisaient l'ancien comportement `interactivecountback` migrent lors de la mise à jour. Si le modèle est injoignable, la notation se dégrade au lieu de produire une erreur, si bien qu'une tentative n'est pas perdue. Parce que la question est un type de quiz natif, les résultats arrivent dans le carnet de notes comme n'importe quel autre item — ce dont une équipe de cours a besoin avant de pouvoir traiter la [[automated-assessment|notation automatisée]] comme un pilote plutôt qu'une démonstration.

La conception place aussi le barème là où se décide la [[ai-feedback-quality|qualité du retour]] : dans l'invite, écrite par l'enseignant, plutôt que dans un réglage par défaut du fournisseur. C'est l'usage honnête de l'outil — des critères que vous pouvez inspecter et réviser — même si cela signifie aussi que le plafond de qualité est le barème, et qu'une invite vague produit une notation vague. Les établissements y recourent pour les vérifications fréquentes à faible enjeu dont dépend l'[[formative-assessment|évaluation formative]], là où un humain lirait sinon quarante réponses courtes par nuit.

## À qui cela s'adresse

Aux administrateurs et développeurs Moodle qui exploitent déjà le site, aux enseignants qui veulent une notation IA sans plateforme séparée ni licence commerciale, et aux chercheurs qui ont besoin d'une chaîne de notation contrôlable à étudier. Il exige Moodle 4.5 ou ultérieur et un accès API à un modèle — OpenAI ou Azure via le sous-système IA de Moodle, ou une instance Ollama auto-hébergée via Local AI Manager, ce qui garde le texte des étudiants sur une infrastructure locale. Le plugin est maintenu par Marcus Green, figure sur la place de marché des plugins Moodle, et comptait 33 étoiles et 36 forks lors de la vérification de cette page.

## Remarques et réserves

Open source sous GPL v3 ou ultérieur, mais gratuit ne veut pas dire gratuit à exploiter : quelqu'un paie l'API du modèle, et la qualité de la notation dépend du choix du modèle et de la conception de l'invite. Les réponses en texte libre quittent le serveur Moodle lorsqu'un fournisseur distant est utilisé, si bien que l'accord sur les données de l'établissement régit ce qui peut être envoyé ; la voie Ollama auto-hébergée existe pour les sites qui ne peuvent pas envoyer le travail des étudiants à l'extérieur. Le dépôt ne mentionne aucune étude publiée de précision ou de concordance, si bien que le plugin ne devrait pas être adopté en supposant qu'une notation par LLM équivaut à une notation humaine — la [[assessment-validity|validité]] doit être établie localement contre des notes humaines avant qu'une note porte du poids. Les comportements compagnons sont une dépendance stricte : installer le type de question seul laisse des questions impossibles à noter.

## Concepts liés

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
