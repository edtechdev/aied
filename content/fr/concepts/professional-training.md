---
connected_resources: [master-instructional-design]
title: Apprentissage en milieu professionnel
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-10T03:24:46-04:00"
type: concept
foundations: [ai-literacy, educational-development]
technology: [generative-ai, llm, simulation]
pedagogy: [lifelong-learning]
audience: [instructors, administrators, learners]
level: [adult learning, higher ed]
confidence: high
translation_of: concepts/professional-training
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Apprentissage en milieu professionnel** — l'usage de l'IA pour le développement des compétences professionnelles, l'apprentissage en entreprise et l'acquisition de compétences professionnelles. La formation professionnelle étend l'[[ai-education|IA en éducation]] au-delà de la scolarisation formelle vers les contextes professionnels et de [[lifelong-learning|formation tout au long de la vie]].

## Questions à examiner

- Pensez à une compétence que vous avez apprise sur le tas plutôt qu'en salle de classe. Qu'est-ce qui a rendu cet apprentissage en milieu professionnel efficace, et comment un coach IA pourrait-il le reproduire ou l'améliorer ?
- Le cadre de niveaux [[career-development-and-readiness|Préparation au monde du travail]] suggère que les stades de compétence les plus élevés sont « conditionnés par une expérience intégrée au secteur plutôt que par des cours ». Qu'est-ce que cela implique quant à la manière dont nous devrions former les gens — et quant aux limites de la [[simulation]] par l'IA ?
- Les patients virtuels et les simulateurs de formation permettent aux professionnels de s'entraîner en sécurité. Quels types de jugement et de compétences interpersonnelles un simulateur pourrait-il peiner à capter, aussi réaliste soit-il ?
- Le « Dual Train Problem » est la tension entre l'évolution rapide des compétences en IA et le rythme plus lent des politiques et du [[curriculum-design|programme]]. Si vous pouviez choisir des compétences durables à prioriser pour les apprenants d'aujourd'hui, quelles seraient-elles ?
- Les apprenants adultes concilient travail et études, souvent à travers des écrans. Comment une formation professionnelle assistée par l'IA peut-elle à la fois faciliter et compliquer cet équilibre — en particulier autour des données, de la confiance et du temps ?

## Introduction

### L'IA dans la formation professionnelle

- **Simulation et pratique :** la [[adaptive-virtual-patient-psychotherapy-training|formation par patient virtuel]] et les [[astra-atco-training-simulator|simulateurs de formation ATCO]] créent des environnements de pratique professionnelle propulsés par l'IA. Dans la [[teacher-education|formation des enseignants]], la simulation de jeu de rôle par l'IA l'étend à un enseignement fondé sur la pratique : [[zhuang-zhang-chatgpt-math-teacher-education-2026|Student GPT]] simulait un élève de mathématiques de collège [[misconceptions|porteur d'une idée fausse]] afin que les enseignants en formation initiale puissent s'entraîner à diagnostiquer et à remédier aux erreurs des élèves, en phase avec les « approximations de la pratique » de l'apprentissage [[teacher-role|enseignant]] fondé sur la pratique, comme complément abordable à des plateformes coûteuses comme TeachLivE.

[[ai-coaching-rl-skill-development|Wang et al. (2026)]] ajoutent une leçon sur les politiques d'accompagnement : l'estompement de l'assistance ajusté à la compétence estimée de l'apprenant a réduit de 27,9 % le temps par tour de simulateur (p = 0,005) et les échecs de 3,52 par tour, tandis qu'un estompement fondé sur des règles suivant un calendrier fixe n'a produit aucun changement fiable du temps par tour.
- **Intégration de la formation tout au long de la vie :** la [[lifelong-learning]] et la [[research-methods-aied|recherche]] sur l'[[adult-learning]] relient la formation professionnelle à l'éducation continue.
- **Secteur public :** l'[[ai-adoption-training-public-sector|adoption de l'IA dans le secteur public]] examine la formation dans les contextes gouvernementaux.
- **Cadres de préparation à l'emploi :** [[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al.]] proposent un cadre de Workforce Readiness Level (WRL) qui adapte l'échelle Technology Readiness Level en neuf stades de compétence évalués sur quatre piliers (littératie numérique/[[ai-literacy|IA]], maîtrise cyber-physique, collaboration [[human-ai-collaboration|humain–machine]], prise de décision fondée sur les données), sous une règle de « pas de pilier faible ». Les données issues des projets de fin d'études en fabrication intelligente montrent que les stades de préparation les plus élevés sont conditionnés par une expérience intégrée au secteur plutôt que par des cours — ce qui désigne l'apprentissage intégré au travail comme essentiel à la formation professionnelle à l'IA.
- **Les priorités des enseignants et des employeurs divergent.** Une enquête menée auprès de 500 enseignants américains et d'un panel d'employeurs s'est accordée sur l'importance d'une seule des 26 compétences en IA — fixer des attentes réalistes quant au travail augmenté par l'IA — et seulement trois des 26 étaient enseignées par la moitié ou plus des enseignants ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).
- **Les données probantes [[discipline-specific-aied|propres à chaque domaine]] sur le développement professionnel sont maigres.** Une [[li-language-educators-genai-review-2026|revue systématique portant sur les enseignants de langues]] (Li et al. 2026) a constaté que seulement trois des 23 études rapportaient un [[educational-development|développement professionnel]] structuré, mais que celles qui le faisaient convergeaient vers des gains de connaissances, de confiance et d'identité — la preuve qu'une formation structurée et propre au domaine (associant la compétence technique à la sagesse pratique) est à la fois rare et efficace, et que le développement professionnel devrait passer de la sensibilisation et de l'éthique à la maîtrise pratique des outils, puis à la co-conception de leçons augmentées par l'IA.
- **Le développement professionnel des formateurs d'enseignants comme construction de modèle :** [[adaptive-ai-model-teacher-educators-2025|Eyal (2025)]] a mené un cours annuel de 180 heures au cours duquel 22 formateurs d'enseignants de l'enseignement supérieur ont co-conçu le Modèle de littératie en intelligence artificielle adaptative, remplaçant des échelles de compétences fixes par trois axes interreliés (adéquation au contexte, besoins professionnels, développement dynamique) et un questionnaire réflexif d'auto-évaluation de 20 items. Le postulat de conception est que la littératie IA est situationnelle : un enseignant en formation initiale dans un contexte aux ressources limitées, un enseignant de discipline et un proviseur ont besoin de compétences différentes ; le développement professionnel devrait donc cibler un jugement propre au rôle plutôt qu'une grille standardisée.
- **Ce que la formation devrait cibler :** la base de mesure du domaine est à la traîne de la technologie qu'elle décrit. Dans une revue systématique de 33 instruments de littératie IA pour enseignants, [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore et Maat (2026)]] ont constaté que 29 (87,9 %) ciblaient des concepts généraux d'IA, tandis que seulement quatre (12,1 %), tous publiés en 2025, portaient sur l'IA générative. Si les instruments suivent ce que la formation est censée bâtir, cette distribution fait de la compétence en IA générative pour l'enseignement la cible la moins mesurée et la plus urgente pour le développement professionnel.
- **Prévision de la main-d'œuvre :** [[ai-engineering-computing-workforce-grey-literature-2026|Fletcher et al.]] passent en revue la littérature grise américaine sur l'IA et la main-d'œuvre en ingénierie et informatique, en formulant le « Dual Train Problem » (changement rapide contre urgence politique) et en recommandant que l'[[higher-ed|enseignement supérieur]] priorise les compétences durables en IA, l'[[ethics|éthique]] et la [[governance]], ainsi que des certifications fondées sur les compétences alignées sur les rôles émergents (par ex., le [[prompt-engineering]], l'audit d'IA, la politique de l'IA dans l'éducation ([[educational-policy-ai]])) pour soutenir un travail centré sur l'humain dans une économie automatisée.
- **Les conceptions de maintien des compétences perdent sous des métriques de débit.** [[skill-sustaining-reliance-reflective-ai-engagement-2026|de Jong (2026)]] soutient que l'interaction réflexive contredit la promesse de décisions plus rapides et de débit plus élevé qui pilote l'adoption de l'IA dans le travail professionnel : une étude contrôlée peut absorber la friction, un environnement mesurant la performance par la vitesse ou la quantité ne le peut pas, et lorsque des concurrents offrent un soutien équivalent sans friction, les conceptions de maintien des compétences deviennent un désavantage concurrentiel — un problème qui, selon l'article, relève peut-être de la politique organisationnelle ou publique plutôt que de la conception de l'interaction.
- **Évaluation orale des capacités professionnelles.** Une étude de conception en enseignement et formation techniques et professionnels (EFTP) traite un décalage de longue date entre une évaluation fortement textuelle et les capacités verbales et situationnelles que certifient les qualifications professionnelles, en utilisant un [[llm]] pour soutenir une évaluation orale interactive. Sur quatre cohortes, le format vocal a été jugé réaliste par 21 des 33 apprenants, sans aucune réponse dissidente quant à son avantage sur un [[eportfolio|portfolio]] écrit, et le système a fonctionné entièrement hors ligne sur un seul ordinateur portable pour jusqu'à 12 apprenants simultanés, supprimant les enregistrements au bout de 90 jours et laissant la notation aux évaluateurs ([[ai-supported-oral-assessment-tvet-2026]]). C'est un exemple concret d'IA élargissant la gamme des compétences évaluables dans la formation professionnelle, plutôt qu'elle n'automatise les formats écrits existants. Ses cohortes étaient cependant des classes de mécanique automobile et d'ingénierie de niveau 3, si bien que les données probantes relèvent de la [[vocational-education|formation professionnelle initiale]] plutôt que du développement des compétences en milieu de travail que couvre cette page.

- **Ce sont les conditions institutionnelles, et non le contexte national, qui expliquent les écarts de préparation.** Une enquête comparative menée auprès de 568 enseignants-chercheurs dans
  des centres de développement pédagogique chinois (n = 340) et kazakhs (n = 228) ([[faculty-development-centers-genai-training-optimization-2026|Bi, Araily, Lyu et Xiu, 2026]])
  a constaté que les enseignants kazakhs devançaient leurs homologues sur les sept dimensions de préparation à l'[[generative-ai|IA générative]] dès le départ, avec les écarts les plus importants en
  transfert disciplinaire, conception de consignes et évaluation assistée par l'IA. Une régression hiérarchique a démantelé l'explication nationale : la
  différence entre pays a chuté fortement dès lors que l'usage antérieur de l'IA générative et la formation récente entraient dans le modèle, et elle est devenue non significative — une réduction de
  80 % — une fois ajoutés le soutien institutionnel, la permission perçue d'expérimenter, l'accès à des ressources [[multilingual-learning|multilingues]],
  la clarté des politiques et la sensibilité au risque. L'exposition était inégalement distribuée (une nette majorité des enseignants kazakhs avait suivi une formation à l'IA
  au cours des six derniers mois, contre environ un quart des enseignants chinois), et les enseignants chinois ont rapporté à la fois une plus grande clarté des
  politiques et une plus grande sensibilité au risque. Une formation structurée aux tâches de formulation de consignes a surpassé la familiarisation classique à l'IA générative sur la conception de consignes en post-test par une large marge. La préparation du corps enseignant, selon ces données, est produite par l'offre et la permission — ce qu'un centre propose
  et ce qu'il autorise — plutôt que par le système national dans lequel il s'inscrit.

- **Une brève formation déplace les jugements, pas les intentions.** Un pilote pré–post de trois heures auprès de 100 enseignants allemands ([[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller et Böhme, 2026]]) a constaté que l'utilité perçue (d = .32) et la facilité d'utilisation perçue (d = .25) augmentaient significativement après une courte séance pratique sur l'IA au service de la différenciation, tandis que l'intention comportementale ne bougeait pas d'une ligne de base déjà élevée (M = 3,07). Les auteurs interprètent cet écart comme le signe que l'acceptation dépend de conditions qu'une séance ne peut fournir, telles que le temps, les infrastructures et des règles institutionnelles claires. Les formats courts méritent d'être menés, mais les associer à ces conditions est ce qui transforme un jugement favorable en usage.
- **Un suivi soutenu, plutôt que des ateliers ponctuels, pour la formation initiale.** Une revue systématique de 11 études sur l'IA dans la formation initiale des enseignants de mathématiques du primaire ([[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto et al., 2026]]) a constaté que neuf interventions consistaient en une séance unique ou en quelques séances intégrées à des cours existants, que les attitudes étaient généralement échantillonnées une seule fois a posteriori, et que l'éthique n'apparaissait que dans trois études. Les auteurs soutiennent que la compétence en IA doit se développer tout au long de la séquence de formation, d'une phase préparatoire au stage pratique puis aux premières années d'exercice, avec un suivi qui accompagne cette progression.
- **L'exposition et la répétition, et non la démographie, suivent les perceptions favorables.** Dans une étude mixte portant sur 302 enseignants turcs de mathématiques du primaire ([[cigerci-primary-teachers-perceptions-ai-mathematics-2026|Ciğerci et Uygun, 2026]]), la formation antérieure à l'IA (t = 3,661) et la fréquence d'usage de l'IA (F = 41,280) étaient les variables le plus constamment associées à des vues positives, tandis que la disposition (M = 3,98) et les attitudes (M = 3,82) se situaient bien au-dessus de l'expérience personnelle (M = 3,00). Les auteurs traitent la formation antérieure comme le levier le plus clair sur lequel les établissements peuvent agir, ce qui plaide pour un usage répété et soutenu plutôt que pour une introduction unique.
- **La rotation des rôles comme structure porteuse.** Une étude fondée sur la conception menée auprès de 62 psychologues de l'éducation en formation initiale au Kazakhstan ([[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al., 2026]]) a fait tourner les étudiants sur quatre positions professionnelles pendant huit semaines, l'IA générative fournissant des idées préliminaires. Les auteurs soutiennent que la valeur résidait dans la rotation plutôt que dans l'outil, puisque chaque rôle cadrait le même cas différemment, et que les cycles ultérieurs ont montré davantage de demandes de justification théorique. Ils rapportent de l'engagement plutôt que des gains mesurés, n'ayant collecté aucune mesure de compétence pré–post.

### Distinct de l'éducation académique

La formation professionnelle diffère de l'éducation académique par son accent sur les compétences appliquées, la pertinence immédiate pour le lieu de travail et les caractéristiques des apprenants adultes. La théorie de l'[[adult-learning]] et les principes de l'[[adult-learning]] éclairent la conception de la formation professionnelle à l'IA. Son autre frontière est l'[[vocational-education|enseignement et formation techniques et professionnels]] : l'EFTP admet des personnes qui n'exercent pas encore le métier et s'achève par un titre professionnel ou technique ; il porte donc la préparation professionnelle initiale et les cadres de qualification qui la certifient, tandis que la formation professionnelle part d'un rôle existant — reconversion, formation professionnelle continue ou certification d'un fournisseur — et présuppose la compétence que décerne l'EFTP.

**La régénération de l'expertise comme enjeu de formation.** Le cadre Cognitive Commons ([[cognitive-commons-ai-expertise-regeneration|Lovett 2026]]) soutient que le développement des ressources humaines doit aller au-delà de la reconversion organisationnelle vers une gestion à l'échelle de la profession : éliminer les postes de développement de début de carrière dans les secteurs exposés à l'IA peut appauvrir le socle d'expertise partagé dont dépendent toutes les organisations, avec un effet différé dans le temps qui n'apparaît qu'au bout de 5–20 ans. Cela reformule la formation professionnelle comme passant du développement de compétences individuelles à l'entretien d'un bien commun collectif.
**Associer la production par l'IA à une vérification, et chercher des mesures extérieures.** [[crewscaler-ai-upskilling-framework|Nguyen et al. (2026)]] intercalent des contrôles automatiques d'hallucination et un audit par des experts entre la rédaction et la diffusion dans un pipeline de développement des compétences en cinq étapes, et fondent les affirmations les plus fortes du cadre sur une accréditation NASBA CPE et un examen de certification d'un fournisseur plutôt que sur des mesures de réussite auto-définies.

## Concepts liés
- [[lifelong-learning]]
- [[adult-learning]]
- [[vocational-education]]
- [[educational-development]]
- [[ai-literacy]]
- [[simulation]]
- [[higher-ed]]
- [[generative-ai]]
- [[llm]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[virtual-and-augmented-reality]] — là où la pratique immersive est la mieux établie

## Articles liés
- [[ai-engineering-computing-workforce-grey-literature-2026]] — L'IA et l'avenir de la main-d'œuvre en ingénierie et informatique
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Le cadre Workforce Readiness Level pour la fabrication intelligente à l'ère de l'IA
- [[crewscaler-ai-upskilling-framework]]
- [[ai-coaching-rl-skill-development]]
- [[adaptive-virtual-patient-psychotherapy-training]]
- [[astra-atco-training-simulator]]
- [[ai-adoption-training-public-sector]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Le cadre de compétences en IA HiBob validé avec des enseignants et des employeurs
- [[cognitive-commons-ai-expertise-regeneration]] — La tragédie du commun cognitif : l'IA et la régénération de l'expertise
- [[li-language-educators-genai-review-2026]] — Les pratiques et le développement des enseignants de langues avec l'IA générative
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[faculty-development-centers-genai-training-optimization-2026]] — Enquête comparative montrant que les conditions institutionnelles, et non le contexte national, expliquent les écarts de préparation du corps enseignant à l'IA générative (Bi et al. 2026)
- [[adaptive-ai-model-teacher-educators-2025]] — Des formateurs d'enseignants co-conçoivent un modèle de littératie IA adaptative et un questionnaire réflexif (Eyal 2025)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Revue montrant que les instruments de littératie IA pour enseignants sont à la traîne de l'IA générative, désignant la cible de formation (Zainal et al. 2026)
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]] — Un développement professionnel de trois heures a accru l'utilité perçue et la facilité d'utilisation perçue des enseignants allemands, mais pas leur intention d'utiliser l'IA pour la différenciation
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — Revue de l'IA dans la formation initiale des enseignants de mathématiques du primaire : une brève formation centrée sur les outils ne suffit pas
- [[cigerci-primary-teachers-perceptions-ai-mathematics-2026]] — Enquête reliant la formation antérieure à l'IA et la fréquence d'usage aux perceptions positives des enseignants turcs de mathématiques du primaire
- [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026]] — La rotation des rôles comme mécanisme structurant la préparation professionnelle assistée par l'IA
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Open Questions Towards Skill-Sustaining Reliance in Reflective AI Engagement
