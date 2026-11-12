---
title: "Amplify GenAI"
created: "2026-11-12T11:12:00-05:00"
updated: "2026-11-12T11:12:00-05:00"
type: resource
summary: "La plateforme d'IA générative d'entreprise de Vanderbilt, sous licence MIT, déployée dans le compte AWS de l'établissement : assistants personnalisés sur des documents locaux, réponses augmentées par récupération, partage dans l'organisation et comptabilisation des coûts jusqu'au message individuel."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

Amplify GenAI est le pari inverse d'une licence à l'échelle du campus pour un assistant commercial : l'établissement exploite lui-même la plateforme, dans son propre compte Amazon Web Services, et paie ce qu'il utilise. Vanderbilt l'a construite pour sa propre communauté, l'a publiée sous MIT dans trois dépôts, et la propose désormais à d'autres organisations comme alternative aux contrats d'entreprise par siège — l'argument étant que la partie coûteuse devrait être les modèles, pas le nombre de sièges.

## Ce que vous pouvez en faire

Les utilisateurs construisent des assistants personnalisés en téléversant des documents ou en connectant des sources de données, et les assistants répondent par [[rag|génération augmentée par récupération]] sur ce matériel plutôt qu'à partir de l'entraînement général seul. Les assistants peuvent être partagés dans toute l'organisation, enchaînés dans une même conversation et dotés de modèles d'invite ; la plateforme produit aussi des fichiers PowerPoint et Word, des diagrammes et des visualisations. Les administrateurs obtiennent ce dont un service partagé a besoin : comptabilisation des coûts jusqu'au niveau du message, limites par utilisateur, dossiers et espaces de travail, et SSO, le tout dans un déploiement que l'établissement contrôle.

Le choix de conception qui compte le plus pour un [[higher-ed|établissement d'enseignement supérieur]] est le modèle de comptabilisation. Vanderbilt rapporte qu'avec 1 300 utilisateurs pilotes, son coût par utilisateur était d'environ \$3 par mois, AWS inclus, et que la moitié de ces utilisateurs consommaient moins de \$1 par mois en jetons — des chiffres que l'université présente comme une étude de cas, non comme une référence auditée. La facturation à l'usage récompense un campus où une minorité d'utilisateurs fait l'essentiel du travail, ce qui est la forme normale de l'adoption de l'IA, et elle permet de répondre à la question du service financier (« combien cela coûte-t-il par étudiant ? ») à partir des journaux plutôt que d'un contrat.

## À qui cela s'adresse

Les services informatiques centraux et les directions des systèmes d'information qui exploitent déjà des charges de travail dans AWS et veulent une alternative soutenue par la communauté à un assistant d'entreprise commercial ; les enseignants qui ont besoin d'assistants ancrés dans le matériel de cours sans l'envoyer au produit grand public d'un fournisseur ; et les établissements qui veulent un lieu unique pour voir ce que les gens font avec les modèles. Comme elle se déploie dans le compte de l'établissement, la question de la résidence des données est réglée par le déploiement plutôt que par la promesse d'un fournisseur.

## Remarques et réserves

Gratuite à licencier, pas gratuite à exploiter : l'établissement paie AWS et les fournisseurs de modèles. Le choix de modèle passe par Amazon Bedrock (Anthropic, Mistral) ou OpenAI et Microsoft Azure, et l'exploitation de modèles locaux n'est pas implémentée. Le projet déclare clairement qu'il ne peut pas prendre en charge les déploiements individuels et renvoie les organisations vers des partenaires commerciaux — le coût réaliste inclut donc du personnel ou un prestataire. C'est un déploiement en trois dépôts (frontend, backend, infrastructure) avec des dizaines d'étoiles plutôt que des milliers, et la comparaison de coûts ci-dessus est l'expérience de Vanderbilt plutôt qu'une étude contrôlée. Les établissements qui préfèrent garder l'inférence sur du matériel qu'ils possèdent devraient regarder [MindRouter](/aied/resources/mindrouter/) et lire les deux ensemble : Amplify est une couche applicative au-dessus de modèles de fournisseurs, MindRouter est une passerelle au-dessus de vos propres GPU.

## Concepts liés

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
