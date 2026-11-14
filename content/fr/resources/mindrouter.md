---
title: "MindRouter"
created: "2026-11-12T11:16:00-05:00"
updated: "2026-11-13T20:20:00-05:00"
type: resource
summary: "Une passerelle d'inférence Apache-2.0 de l'université de l'Idaho qui place un cluster de campus de nœuds GPU vLLM et Ollama derrière une API compatible OpenAI, en ajoutant un ordonnancement équitable, des quotas de jetons par utilisateur, le SSO, la journalisation d'audit et une surveillance en direct des GPU et de l'énergie."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
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

La plupart des discussions sur l'IA à l'échelle du campus commencent par le modèle à acheter et s'arrêtent avant la question plus difficile : où il tourne, qui le mesure et qui peut voir les journaux. MindRouter est une réponse à cette seconde question. C'est une passerelle auto-hébergée qui se place devant un cluster hétérogène de serveurs [[llm|LLM]] — des nœuds vLLM et Ollama sur des GPU que l'établissement possède — et expose une API qui parle les dialectes OpenAI, Anthropic et Ollama, en traduisant entre eux pour que le code client existant continue de fonctionner.

## Ce que vous pouvez en faire

Pointez un outil vers la passerelle plutôt que vers un point de terminaison de fournisseur. Derrière elle, MindRouter gère les parties dont un déploiement partagé a besoin : ordonnancement équitable avec weighted deficit round robin, quotas de jetons et de requêtes par utilisateur, accès fondé sur les rôles avec SSO optionnel via Azure AD/Entra, Google, tout fournisseur OIDC ou SAML 2.0, et journalisation d'audit complète des invites, des réponses et des artefacts. Un agent sidecar GPU rapporte l'utilisation, la mémoire, la température et la puissance par nœud, si bien qu'un administrateur peut voir le coût énergétique par requête et drainer proprement un backend quand une maintenance approche. Elle couvre plus que le chat — embeddings, vision, génération d'images et de vidéos, synthèse et reconnaissance vocales, OCR de documents — et fournit des serveurs MCP et des compétences d'agent pour les assistants de codage.

La raison pour laquelle un établissement s'y intéresserait est celle que le projet nomme : la [[institutional-ai-infrastructure|souveraineté institutionnelle de l'IA]]. Les invites et les documents restent sur une infrastructure que l'établissement exploite plutôt que de passer par un cloud tiers, ce qui est plus facile à défendre devant un sénat académique ou un service de [[privacy|protection des données]] qu'un accord de traitement des données avec un fournisseur. La solidité de cet argument dépend de la présence des GPU, de l'électricité et du personnel — la passerelle rend l'hébergement local gérable, pas bon marché.

## À qui cela s'adresse

Les groupes de calcul de recherche et d'informatique centrale disposant déjà de capacité GPU, les centres d'enseignement et d'apprentissage qui veulent un lieu unique pour mesurer l'usage des enseignants et des étudiants, et les administrateurs qui pèsent les plateformes d'entreprise hébergées contre l'exploitation de l'inférence eux-mêmes. C'est un déploiement Docker Compose avec configuration SSO documentée et image de marque personnalisée, maintenu à l'université de l'Idaho, où l'auteur l'a présenté à PEARC '26 ; le projet comptait 22 étoiles et 3 forks en novembre 2026.

## Remarques et réserves

Gratuit et open source sous Apache-2.0, mais le coût se déplace plutôt qu'il ne disparaît : matériel, électricité et temps de personnel pour exploiter un cluster. Le logiciel est jeune selon les normes de l'infrastructure — trois contributeurs, une seule institution d'origine et des versions dont les étiquettes se comptent par centaines — si bien qu'un établissement devrait le piloter à côté d'un service existant plutôt que comme seul chemin vers un modèle. Aucune évaluation publiée du comportement d'ordonnancement et de quota sous une charge réelle de campus ne figure dans le dépôt ; l'article PEARC est l'endroit où chercher le récit des auteurs.

## Concepts liés

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
