---
title: "Technologies d'assistance"
created: "2026-08-23T12:00:00-04:00"
updated: "2026-10-10T03:05:33-04:00"
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education]
confidence: high
translation_of: concepts/assistive-technology
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Les technologies d'assistance** — des dispositifs, des logiciels et des services qui aident les personnes en situation de handicap à percevoir, à agir, à communiquer et à participer à l'apprentissage comme à la vie quotidienne. Dans le champ de l'[[ai-education|IA en éducation]], les technologies d'assistance couvrent les lecteurs d'écran, la reconnaissance et la synthèse vocales, le sous-titrage, le braille et les sorties tactiles, les outils de langue des signes, et de plus en plus des aménagements fondés sur l'IA qui adaptent le contenu et l'interaction aux besoins de chacun.

## Questions à examiner

- Les technologies d'assistance constituent la couche d'outils de l'accessibilité — les dispositifs et logiciels précis que les individus utilisent pour combler les écarts d'accès. Avant de lire, considériez-vous l'accessibilité et les technologies d'assistance comme une seule et même chose ? En quoi les traiter comme distinctes pourrait changer votre façon de concevoir des environnements d'apprentissage ?
- La [[research-methods-aied|recherche]] montre que les interventions fondées sur l'IA produisent un effet positif moyen sur les [[learning-gains|résultats d'apprentissage]] des étudiants en situation de handicap (g = 0.588). Or la page avertit que les outils d'accès ne garantissent pas à eux seuls un enseignement inclusif ni l'autonomie de l'apprenant. Quelle est la différence entre donner accès à un étudiant et réellement l'inclure ?
- La page note que les documents américains de politique en matière d'IA n'abordent guère les technologies d'assistance ni les aménagements pour les étudiants présentant des troubles spécifiques de l'apprentissage. Pourquoi, à votre avis, les aménagements passent-ils si facilement à travers les mailles des politiques d'IA — et qui y perd ?
- L'[[generative-ai|IA générative]] peut sous-titrer automatiquement, simplifier des textes et produire des alternatives tactiles — ce qui réduit le coût de l'adaptation. Mais la page invite à évaluer la qualité des alternatives produites par l'IA du point de vue de l'exactitude [[pedagogy|pédagogique]]. Que pourrait-il arriver de fâcheux si une version « simplifiée » ou « tactile » déformait le contenu qu'elle est censée rendre accessible ?
- L'IA étend les outils d'assistance, des compagnons d'apprentissage vocaux aux graphiques tactiles en passant par les outils de langue des signes. En tant qu'éducateur ou concepteur, quel obstacle propre à un apprenant voudriez-vous traiter en premier avec l'IA — et que vous faudrait-il savoir sur cet apprenant avant de choisir un outil ?

## Introduction

Les technologies d'assistance forment la *couche d'outils* concrète de l'[[accessibility|accessibilité]]. Là où l'accessibilité est la propriété de conception d'un environnement (tout le monde peut-il y accéder ?), la technologie d'assistance est l'équipement et le logiciel précis que les individus utilisent pour combler les écarts d'accès. Elles sont fondamentales pour l'[[special-education|éducation spécialisée]] et l'[[inclusive-learning|apprentissage inclusif]] — les élèves présentant des troubles spécifiques de l'apprentissage, une déficience visuelle ou auditive et des difficultés motrices comptent sur des outils d'assistance pour accéder au [[curriculum-design|programme d'études]]. Aux États-Unis, l'[[educational-policy-ai|Assistive Technology Act (2004)]] et l'Individuals with Disabilities Education Improvement Act (IDEA, 2004) fournissent le fondement juridique de la fourniture de ces outils aux élèves en situation de handicap.

### Key research themes

**L'IA étend les technologies d'assistance.** L'IA générative et les grands modèles de langue transforment les outils d'assistance — la [[text-simplification-its|simplification de textes par LLM]] adapte le niveau de lecture dans le [[intelligent-tutoring|tutorat intelligent]], l'[[kutti-ai-voice-first-learning-companion|IA à commande vocale]] supprime la dépendance visuelle pour les apprenants aveugles et malvoyants, et les [[tactile-statistical-graphs-accessibility|graphiques statistiques tactiles générés par l'IA]] convertissent des données visuelles en sorties palpables. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]** constatent que les interventions fondées sur l'IA (robots, logiciels, réalité virtuelle intelligente) produisent un effet positif moyen sur les résultats d'apprentissage des élèves en situation de handicap (g = 0.588). **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** ajoutent une étude de cas [[qualitative-research|qualitative]] portant sur 21 étudiants malvoyants de premier cycle en Palestine, montrant que l'IA générative fonctionne comme une couche d'assistance qui ajuste le rythme, le contenu et le mode de diffusion, simplifie les textes complexes et convertit le contenu d'une modalité à l'autre — les apprenants la considérant systématiquement comme un complément aux enseignants plutôt qu'un substitut.

**Politiques et offre d'outils.** **[[shin-ai-policies-sld-2026|Shin et al.]]** documentent le fait que les documents américains de politique en matière d'IA n'abordent guère les technologies d'assistance ni les aménagements pour les élèves présentant des troubles spécifiques de l'apprentissage, et appellent à des lignes directrices ancrées dans l'Assistive Technology Act et l'IDEA.

**L'IA au service de la dyslexie, de la détection au soutien jusqu'à l'[[personalized-learning|apprentissage personnalisé]].** Une [[meta-analysis-systematic-review|revue systématique]] interdisciplinaire de 2026 (Dabaghi, D'Urso & Sciarrone, guidée par PRISMA, 2018–2024, n=72) cartographie le soutien apporté par l'IA aux élèves dyslexiques et constate que l'IA est utilisée pour la détection, le soutien assistif et l'apprentissage personnalisé — mais que ces trois volets évoluent en parallèle plutôt qu'en intégration, davantage sous l'effet des opportunités technologiques que d'une théorie éducative consolidée. Les outils d'aide à l'éducation fondés sur l'apprentissage automatique se répartissent en cinq domaines (applications spécifiques, [[student-engagement|engagement]], personnalisation, recommandation, soutien générique) mais privilégient la performance technique et l'exactitude de classification en négligeant la validité écologique et le déploiement concret en classe. La recherche sur la détection (EEG, oculométrie, modèles d'apprentissage automatique) montre un potentiel diagnostique prometteur pour l'intervention précoce, mais exige souvent un équipement spécialisé et des environnements contrôlés, ce qui limite l'extensibilité et l'accessibilité dans les écoles ordinaires. Les défis ouverts incluent la validation expérimentale limitée, l'extensibilité, les préoccupations d'[[ethics|éthique]] et de protection de la vie privée concernant les données sensibles des élèves, le soutien et la formation limités des [[teacher-role|enseignants]], et les obstacles linguistiques et culturels (la plupart des recherches visent des populations anglophones) — un rappel que les outils d'assistance doivent être validés, extensibles et fondés éthiquement pour combler véritablement les écarts d'accès.

**Les limites des outils d'assistance.** La technologie d'assistance permet l'accès mais ne garantit pas en soi un enseignement inclusif ni l'[[agency]]. La [[genai-minoritized-knowledges-disability|recherche critique]] et la promotion de rôles [[agency|agentiques]] pour les élèves en situation de handicap nous rappellent que l'accès doit aller de pair avec une participation significative.

Une revue de cadrage de 2026 portant sur les [[ai-technologies|Technologies de l'IA]] d'assistance numériques destinées aux élèves [[neurodiversity|neurodivergents]] dans l'[[higher-ed|enseignement supérieur]] dresse la carte de la production de la décennie : 766 références examinées dans cinq bases de données, 40 études retenues, dont 15 portant sur des outils fondés sur l'IA et 11 sur la [[virtual-and-augmented-reality|réalité virtuelle]]. Son constat organisateur est un décalage entre ce que les outils visent et l'endroit où se situent réellement les obstacles : 27 études soutenaient directement l'apprentissage, 13 portaient sur la lecture et l'écriture et 12 sur la gestion des études, tandis que l'attention (n = 4) et la communication sociale (n = 5) étaient relativement délaissées et que seulement 6 traitaient de plusieurs obstacles à la fois ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]).

## Implications for practice

- **Assortir l'outil à l'apprenant et à la tâche.** Les lecteurs d'écran, les sous-titres, la parole et les sorties tactiles traitent chacun des obstacles différents — choisissez en fonction des besoins de la personne et du format du contenu.
- **Exploiter l'IA pour réduire le coût des adaptations d'assistance.** L'IA peut sous-titrer automatiquement, simplifier des textes et produire des alternatives, mais évaluez la qualité des productions du point de vue de l'exactitude pédagogique.
- **Ancrer l'offre dans les politiques.** Référez-vous à l'Assistive Technology Act, à l'IDEA et aux WCAG lorsque vous achetez ou construisez des outils d'IA.

## Concepts liés

- [[accessibility]] — la propriété de conception que les technologies d'assistance opérationnalisent
- [[inclusive-learning]]
- [[special-education]]
- [[universal-design-for-learning]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[learning-design]]
- [[speech-and-voice-technologies]]
## Articles liés

- [[shin-ai-policies-sld-2026]] — Politiques d'IA et aménagements pour les élèves présentant des troubles spécifiques de l'apprentissage
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Méta-analyse des interventions d'IA pour les élèves en situation de handicap
- [[kutti-ai-voice-first-learning-companion]] — IA à commande vocale pour les enfants malvoyants
- [[tactile-statistical-graphs-accessibility]] — Graphiques statistiques tactiles générés par l'IA
- [[text-simplification-its]] — Simplification de textes par LLM pour le tutorat intelligent
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Génération de questions par LLM pour les apprenants sourds ou malentendants
- [[gemini-lualatex-physics-video-transcription-2026]] — Transcription de vidéos de physique accessible aux mathématiques avec Gemini+LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — IA générative d'assistance pour les apprenants malvoyants
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — IA générative, réalité virtuelle et au-delà : une revue de cadrage des technologies d'assistance numériques pour les élèves neurodivergents dans l'enseignement supérieur
