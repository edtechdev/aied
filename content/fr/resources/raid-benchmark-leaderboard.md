---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Un classement public de détecteurs de texte IA évalués sur RAID, un benchmark conçu pour tester la robustesse face aux modèles, aux domaines, aux réglages de décodage et aux attaques adverses."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

RAID est le benchmark derrière la plupart des revendications sérieuses sur la [[ai-detection|détection de texte IA]], et son classement est l'endroit où vérifier si la précision publiée d'un détecteur survit à un changement de modèle, de domaine, de réglage de décodage ou à une attaque délibérée. Les entrées sont notées sur l'ensemble de test et peuvent être soumises par quiconque suit le processus de soumission du dépôt.

## Ce que vous pouvez en faire

Filtrez par domaine — résumés, livres, actualités, poésie, recettes, Reddit, avis, wiki — par stratégie de décodage (glouton ou échantillonnage), par pénalité de répétition et par attaque adverse, y compris les espaces, les homoglyphes, la substitution de synonymes, la paraphrase, les espaces de largeur nulle et la suppression d'articles. Comparez ensuite un détecteur sur plusieurs métriques : AUROC, TPR à un taux de faux positifs de 5 %, et TPR à 1 %.

Cet ensemble de filtres est l'essentiel. Un détecteur qui approche 1,000 en agrégé peut s'effondrer une fois le texte paraphrasé ou le modèle source changé, et le classement vous permet de voir la chute avant qu'un établissement ne fonde une affaire de [[academic-integrity|fraude]] dessus. La colonne des faux positifs à 1 % compte le plus dans l'éducation, car à l'échelle d'un établissement un taux d'erreur de 1 % signifie des centaines d'étudiants accusés à tort.

## À qui cela s'adresse

Les chercheurs qui évaluent des méthodes de détection, les administrateurs qui rédigent des politiques susceptibles de faire référence à un détecteur, et les enseignants qui veulent une réponse concrète à « peut-on détecter cela ? » avant de l'affirmer dans un plan de cours.

## Remarques et réserves

Le benchmark mesure la détection de texte généré par machine, pas la fraude : un étudiant qui utilise l'IA pour planifier, structurer ou réviser produit un texte que les détecteurs n'ont pas été conçus pour attraper, et un étudiant [[language-learning|qui écrit dans une seconde langue]] est un risque connu de faux positif qu'un classement ne peut pas montrer. RAID est un artefact de recherche maintenu par une équipe académique ; la couverture suit les modèles générateurs de son ensemble de test, si bien que les modèles plus récents peuvent être sous-représentés jusqu'à ce que le benchmark soit actualisé. Le classement classe les détecteurs, pas les pratiques de traitement des données de leurs fournisseurs, et un AUROC élevé ne dit rien sur la légalité ou l'éthique, dans votre juridiction, du fait de soumettre les travaux d'étudiants à ce service.
