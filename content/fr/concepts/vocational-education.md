---
title: "L'enseignement et la formation professionnels"
created: "2026-09-17T14:04:23-04:00"
updated: "2026-10-10T03:41:12-04:00"
type: concept
technology: [human-in-the-loop-ai, intelligent-tutoring, simulation]
assessment: [authentic-assessment]
pedagogy: [career-development-and-readiness, professional-training]
discipline: [vocational education]
audience: [instructors, curriculum designers, institutions]
level: [adult learning, higher ed]
confidence: high
translation_of: concepts/vocational-education
source_updated: "2026-09-28T21:37:06-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'enseignement et la formation professionnels (Vocational education and training)** — le segment de l'éducation qui prépare les gens à des métiers nommés, à des professions artisanales et à des rôles techniques, organisé autour d'une compétence proche de la pratique plutôt que d'un savoir disciplinaire. Là où l'apprentissage en milieu de travail décrit le renforcement des compétences de personnes déjà employées, l'EFP inclut la préparation initiale à un métier ; là où l'[[higher-ed|enseignement supérieur]] désigne des études diplômantes, l'EFP est souvent non diplômant et encadré par des cadres nationaux de qualifications. Ses traits distinctifs sont que les apprenants sont évalués sur ce qu'ils peuvent faire avec un équipement, que l'instruction se déroule à proximité de l'atelier, du simulateur ou du chantier, et que les formateurs humains qui assurent l'instruction pratique sont fréquemment la contrainte limitante. Dans la recherche sur l'IA, l'EFP apparaît à la fois comme une population d'apprenants distincte — une population dont la confiance académique est liée à la compétence démontrée et à l'identité professionnelle — et comme une base de données probantes distincte, plus mince et plus fragmentée que la littérature scolaire ou universitaire.

## Questions à examiner

- Si une qualification atteste ce qu'un apprenant peut faire, quelle part d'apprentissage assisté par l'IA compte comme pratique authentique, et quelle part se substitue à la répétition qui construit la compétence ?
- Que perd-on lorsqu'un agent IA tient le rôle du contre-interlocuteur — patient, pilote, client — qu'un formateur humain tenait autrefois ? Quels jugements un contre-interlocuteur synthétique ne peut-il pas modéliser ?
- L'évaluation orale passe mal à l'échelle de la taille de la classe. Si l'IA fait apparaître des preuves mais ne juge pas, quelles parts de la capacité d'évaluation sont allégées et lesquelles sont simplement déplacées vers l'enseignant ?
- Aucune étude de la base de données probantes sur l'IA dans l'EFP n'est située sur un lieu de travail, alors que l'EFP se définit par l'apprentissage fondé sur le travail. Qu'exigerait une recherche crédible là où l'apprentissage se déroule ?
- La loi européenne sur l'IA traite comme à haut risque l'IA évaluant les résultats d'apprentissage dans la formation professionnelle, alors que certaines juridictions n'ont aucun cadre. L'approvisionnement devrait-il suivre la norme la plus stricte disponible ?

## Introduction

L'enseignement et la formation professionnels préparent les gens à des professions spécifiques — techniciens automobiles, contrôleurs aériens, designers d'intérieur, personnels d'accompagnement — et leur monnaie est la compétence démontrée plutôt que les crédits accumulés. L'évaluation tend à être fondée sur la performance, l'instruction est liée à l'équipement, et les formateurs qualifiés qui supervisent la pratique sont rares.

Ses voisins dans cette base de connaissances diffèrent principalement par leur portée. La [[professional-training|formation professionnelle continue]] couvre le renforcement des compétences en milieu de travail et en entreprise, surtout pour des personnes déjà employées ; l'EFP couvre aussi la préparation professionnelle initiale. L'[[adult-learning|apprentissage des adultes]] désigne les caractéristiques des apprenants plutôt que la spécificité professionnelle. L'[[higher-ed|enseignement supérieur]] désigne les études menant à un diplôme, alors qu'une grande partie de l'EFP est organisée par des cadres de qualifications tels que les standards d'unité de la NZQA ou le CEC. L'[[stem-education|enseignement des STIM]] et l'EFP se recouvrent dans les domaines techniques, mais l'enseignement des STIM vise la compréhension conceptuelle, tandis que l'EFP vise une procédure utilisable. Le [[career-development-and-readiness|développement de carrière et la préparation à l'emploi]] désigne les dispositions d'employabilité par lesquelles les programmes d'EFP sont jugés ; l'EFP désigne le système pédagogique tenu pour responsable de les produire.

Ce qui est distinctif dans l'IA en EFP est l'écart entre ce que le secteur dit vouloir et ce qu'il construit : la théorie constructiviste est largement proclamée, tandis que les systèmes béhavioristes d'exercices et de pratique dominent et que les conceptions fondées sur l'agentivité de l'apprenant demeurent rares. La question de conception récurrente n'est pas de savoir si l'IA peut délivrer un enseignement, mais si elle peut absorber les parties de l'apprentissage professionnel qui coûtent cher en personnel — scénarios réalistes, rétroaction rapide, contre-interlocuteurs joués, preuves orales — sans déplacer la pratique qui produit la compétence.

### Comment l'IA apparaît dans l'enseignement et la formation professionnels

- **Une base de données probantes jeune, fragmentée et géographiquement concentrée.** La première revue systématique de l'IA dans l'EFP ([[ai-vocational-education-training-review]]) a identifié 26 études empiriques publiées entre 2015 et 2026 via ERIC, Web of Science et Elicit, selon les lignes directrices PRISMA : neuf dans le domaine technique, neuf générales quant au domaine, cinq en administration des affaires et trois en santé. Les cadres étaient six en classe, huit en ligne, quatre hybrides et huit fondés sur la simulation — et aucun sur un lieu de travail, malgré le caractère de l'EFP fondé sur le travail. Dix-sept des 26 provenaient d'Asie ; seulement neuf études partageaient au moins une référence et aucune ne se citait. Cinq étaient des expériences randomisées et 21 recouraient à des dispositifs pré-expérimentaux ou quasi expérimentaux, mesurant surtout les résultats immédiatement après l'intervention, et seulement trois donnaient aux apprenants un rôle actif dans une conception habilitée par l'IA. Les auteurs avertissent d'un « piège de Turing » éducatif — utiliser l'IA pour répliquer l'instruction humaine plutôt que pour augmenter le [[human-in-the-loop-ai|jugement humain]] — et appellent à des cas d'échec et à des conditions aux limites en remplacement du récit de réussite dominant.
- **La simulation absorbe l'interprète rare.** [[astra-atco-training-simulator]] cible une contrainte de capacité dans la formation des contrôleurs aériens : les *simpilotes*, formateurs humains spécialisés qui jouent à la fois les pilotes et les contrôleurs dans un espace aérien simulé. ASTRA substitue des pseudo-pilotes autonomes pilotés par LLM, conservant la complexité des scénarios tout en supprimant le goulot d'étranglement du personnel et en permettant une pratique [[adaptive-learning|adaptative]] à grande échelle. Il s'agit d'une description de système plutôt que d'un essai d'efficacité, mais elle nomme un mécanisme qui revient dans toute l'IA en EFP : là où l'intrant rare est un humain qualifié jouant un contre-interlocuteur, un agent peut tenir le rôle et laisser la pratique s'étendre.
- **Le travail de projet immersif et soutenu par des agents peut élever la capacité de conception — de manière sélective.** [[ai-ive-pbl-vocational-design-creativity-2026]] spécifie l'AI-IVE-PBL, un modèle à quatre dimensions et cinq phases (découverte, projection, modélisation, communication, affinage) mené en réalité virtuelle avec un assistant humain numérique adossé à un LLM dans un cours de première année de design d'intérieur dans un établissement professionnel chinois. Dans une quasi-expérience à deux groupes de 12 semaines (63 réponses valides ; 31 contre 32), la condition immersive-agentique a obtenu des scores plus élevés sur la capacité de conception (η²p = .138) et la capacité créative (η²p = .111) sous ANCOVA, avec un engagement cognitif d = 0.90, un engagement comportemental d = 0.75, une motivation d = 0.74, une satisfaction d = 0.69, et une charge cognitive plus faible (d = −0.52). La pensée innovante et l'engagement affectif n'ont pas atteint la significativité, ce que les auteurs attribuent à des plafonds à court terme sur des configurations cognitives enracinées. Chaque résultat est [[self-report-measures|auto-déclaré]], sans artefacts de conception ni notations d'experts. Confronté à [[genai-xr-architectural-design-education-2026]], où un pipeline GenAI-plus-XR a produit une [[self-efficacy|auto-efficacité]] de conception en déclin et aucun avantage sur un panel en aveugle, la différence ressemble moins à du matériel qu'à la question de savoir qui détient la structure par phases et la rubrique.
- **L'évaluation est le lieu où le problème d'authenticité est le plus aigu.** [[ai-supported-oral-assessment-tvet-2026]] documente AkoVoice, expérimenté dans quatre classes de niveau 3 en automobile et une classe de niveau 3 en ingénierie, conçu pour que l'IA fasse apparaître les preuves liées à la rubrique tandis que l'évaluateur humain juge. Sur 33 apprenants interrogés, 21 (64%) convenaient que la tâche vocale était réaliste et la même proportion disait qu'elle offrait une manière claire de communiquer ce qu'ils savaient ; aucun ne contestait que parler en temps réel convenait mieux à cette [[authentic-assessment|évaluation authentique]] qu'un portfolio écrit. Le nombre de mots pour des questions identiques variait d'un facteur cinq à huit entre les apprenants sans améliorer l'exactitude sur les questions factuelles, et les neuf apprenants répondant en 2 à 13 mots étaient tous notés correctement, le plus court étant de deux mots, « 3500 kgs », apparié sur la valeur. Un cycle complet de capture, de stockage, de rédaction du jugement par l'IA et de reporting par l'enseignant tournait hors ligne sur un seul ordinateur portable Windows doté de 8 Go de mémoire graphique (Mistral 7B via Ollama, faster-whisper, Chatterbox), évaluant jusqu'à 12 apprenants à la fois dans un atelier où la charpente en acier défait le wifi, les enregistrements étant chiffrés et supprimés après 90 jours. L'article note que la loi européenne sur l'IA traite comme à haut risque l'IA évaluant les résultats d'apprentissage dans la formation professionnelle, tandis que la Nouvelle-Zélande n'a aucun cadre propre à l'EFPT.
- **L'accompagnement borné plutôt que la substitution.** [[ai-pedagogical-accompaniment-amico]] soutient que la valeur de l'IA dans les cadres techniques et professionnels dépend d'une médiation [[pedagogy|pédagogique]] responsable plutôt que de la ressemblance avec l'humain. Son prototype Amico associe AmicoMio, orienté vers la clarté technique et le guidage de tâches pas à pas, à AmicoTuo, orienté vers le dialogue réflexif et le questionnement maïeutique. Le principe de conception est un *pont relationnel* : une interaction délibérément temporaire, dirigée vers le contact humain, et bornée par des garde-fous, les adultes conservant la responsabilité humaine du commandement. Les pilotes exploratoires (N = 30, Italie et Chine, 20 séances bornées) ont montré que les participants traitaient le système comme un outil de soutien borné, sans aucune attente rapportée de substitution ni de dépendance.
- **L'apprentissage assisté par l'IA porte un coût psychologique lorsqu'il remplace l'effort.** [[ai-autonomous-learning-accomplishment-2026]] a enquêté sur 1,264 étudiants d'établissements professionnels en Chine par modélisation par équations structurelles et a montré que l'apprentissage autonome assisté par l'IA était associé négativement à la robustesse (engagement, contrôle, défi) et positivement à un accomplissement académique réduit, une dimension d'épuisement professionnel faite d'auto-évaluation négative. La robustesse médiatisait partiellement la relation. La conception est transversale, fondée sur l'auto-déclaration et mono-institutionnelle, si bien que la causalité n'est pas établie, mais le cadrage importe pour l'EFP : là où la confiance se construit par la pratique répétée, l'IA comme substitut peut réduire à la fois la disposition à persévérer et l'expérience ressentie de la maîtrise.
- **Accélérer la production de programmes sans abandonner la vérification.** [[crewscaler-ai-upskilling-framework]] applique l'IA aux cinq étapes du renforcement professionnel des compétences — acquisition de connaissances, développement de contenus, examen et vérification, [[intelligent-tutoring|tutorat]] et développement de l'évaluation — tout en gardant auprès des humains la conception du plan directeur, l'examen par des experts du domaine et la rédaction des idées fausses. Sa validation externe inclut l'accréditation NASBA CPE, trois apprenants sur trois réussissant un examen de certification NVIDIA en utilisant uniquement la base de connaissances du cadre, et une banque de 530 questions étiquetée selon un plan directeur de 53 compétences. Il appartient à cette page parce qu'il traite la vérification comme une étape de premier rang : la détection des [[hallucination-risk|hallucinations]] est largement absente des pipelines éducatifs, et l'article rapporte que le tutorat par LLM par défaut n'atteint que 52–70% d'actions pédagogiques correctes.

## Concepts liés

- [[professional-training]]
- [[adult-learning]]
- [[higher-ed]]
- [[career-development-and-readiness]]
- [[simulation]]
- [[authentic-assessment]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[self-efficacy]]

## Articles liés

- [[ai-vocational-education-training-review]] — First systematic review of AI in VET: purposes, theory and empirical effectiveness
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: immersive project-based learning and design creativity
- [[ai-supported-oral-assessment-tvet-2026]] — AkoVoice: offline AI-supported oral assessment in TVET
- [[ai-pedagogical-accompaniment-amico]] — Amico dual-mode prototype: design principles and observable indicators
- [[ai-autonomous-learning-accomplishment-2026]] — AI-assisted autonomous learning and reduced accomplishment, mediated by hardiness
- [[astra-atco-training-simulator]] — Autonomous sim-pilots for scalable ATCO training
- [[crewscaler-ai-upskilling-framework]] — AI-accelerated end-to-end framework for rapid professional upskilling
- [[genai-xr-architectural-design-education-2026]] — Counter-case: GenAI plus multi-user XR with declining design self-efficacy
