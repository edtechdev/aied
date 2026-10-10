---
title: "Risque d'hallucination"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T03:41:06-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **Risque d'hallucination** — le danger que des systèmes d'IA produisent, dans des contextes éducatifs, des contenus plausibles mais factuellement incorrects ou fabriqués, là où de telles erreurs peuvent tromper les [[learners|apprenants]], éroder la [[trust|confiance]] et produire des évaluations invalides. L'hallucination est particulièrement lourde de conséquences en éducation parce que les étudiants peuvent manquer des connaissances disciplinaires nécessaires pour détecter les erreurs de l'IA, et que les enseignants peuvent s'appuyer sur des diagnostics ou des rétroactions générés par l'IA qui semblent faire autorité mais sont infondés.

## Questions à examiner

- Les étudiants manquent souvent des connaissances disciplinaires pour repérer une erreur de l'IA, et les enseignants peuvent faire confiance à des diagnostics d'IA au ton autoritaire. Comment cette asymétrie de savoirs entre l'IA et l'apprenant rend-elle l'hallucination particulièrement dangereuse en éducation ?
- Une étude a montré qu'une IA diagnostiquant les mathématiques écrites à la main par des étudiants pouvait fabriquer des citations de preuves qui n'y figuraient pas, tout en affichant sa confiance. Lorsqu'une IA semble certaine et cite des « preuves », qu'est-ce qui devrait vous faire pause et vous inciter à vérifier ?
- Si un [[intelligent-tutoring|tuteur par IA]] survalide des solutions incorrectes et rejette à l'excès des raisonnements valables mais sous-optimaux, quel serait l'effet à long terme sur les étudiants et les enseignants qui lui font confiance ?
- Cette page suggère la revue humaine dans la boucle, la calibration de la confiance sensible aux preuves et l'ancrage dans des sources vérifiées comme mesures d'atténuation. Laquelle vous semble la plus réalisable dans votre propre contexte, et que pourrait-elle encore ne pas attraper ?
- Comment l'hallucination pourrait-elle interagir avec la dépendance excessive : pourquoi une erreur de l'IA est-elle plus dangereuse lorsque les utilisateurs font confiance à la production sans examen critique que lorsqu'ils sont sceptiques ?
- Si vous conceviez un outil de [[ai-feedback-quality|rétroaction par IA]] pour vos étudiants, quelles garanties spécifiques exigeriez-vous pour vous protéger des productions plausibles mais fausses — et comment sauriez-vous qu'elles fonctionnent ?

## Introduction

L'hallucination dans l'IA éducative prend plusieurs formes documentées dans les articles de cette base de connaissances : des preuves fabriquées dans l'[[assessment|évaluation des étudiants]], un mauvais diagnostic trop sûr des connaissances de l'apprenant, et des explications au ton plausible mais incorrectes que les étudiants acceptent comme vraies. Le risque est amplifié en éducation parce que l'asymétrie de savoirs entre l'IA et l'apprenant place ce dernier en mauvaise posture pour vérifier les productions de l'IA. Un contexte supplémentaire est celui des lectures de cours générées par l'IA qui se substituent à un manuel : dans un cours de deuxième cycle qui a ainsi remplacé son manuel commercial, seulement environ 0.80% des 4 487 pages journalisées portaient une citation dans le texte de style APA et les chaînes DOI étaient pratiquement absentes, de sorte que la plupart des affirmations ne pouvaient être auditées de l'intérieur de l'artefact ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]). Ce déficit de traçabilité est distinct d'une réponse fausse, parce que le texte se lit comme faisant autorité tout en offrant des moyens internes de confirmation limités.

Une revue de 125 études donne une fourchette pour la prévalence et l'écart de détection : des taux d'hallucination de 10–40%, les étudiants en médecine ne détectant les erreurs de l'IA que 44–55% du temps ([[genai-higher-education-systematic-review-2026|Rathnayake (2026)]]).

L'**hallucination dans l'évaluation** est particulièrement dommageable. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** a montré que les grands modèles de langue fabriquent des citations de preuves absentes de l'écriture manuscrite des étudiants lorsqu'ils diagnostiquent des compétences cognitives, 58.5% des diagnostics incorrects s'accompagnant de fausses déclarations de confiance probatoire. **[[llm-fallacy-misattribution]]** a documenté la sur-attribution systématique de preuves dans le raisonnement des [[llm|grands modèles de langue]] — les modèles affirment un soutien probatoire là où il n'existe pas. Les deux phénomènes rejoignent les préoccupations d'[[ai-ed-evaluation|évaluation d'une intervention d'IA en éducation]] et de [[knowledge-tracing|traçage des connaissances]] concernant l'[[assessment-validity|validité de l'évaluation]]. [[ivory-psychology-assessment-integrity-2026|Ivory et coll. (2026)]] ajoutent deux modes de défaillance visibles lorsque la production de l'IA est notée plutôt qu'inspectée : des particularités fabriquées qui survivent à la notation — un article évalué par les pairs qui n'existe pas, complet avec un DOI insoluble, et une taille d'échantillon rapportée à 378 là où la source disait 329 — et l'auto-contradiction à l'intérieur d'une seule réponse, où le modèle a raisonné jusqu'à l'option correcte puis en a rapporté une autre dans son résumé final. Parce que les listes de références sont actuellement notées pour leur mise en forme plutôt que pour leur exactitude, cette classe d'erreurs atteint la note de passage tout en trompant l'étudiant qui emploie le même outil pour réviser.

Dans un pilote de conception d'évaluation, [[authentic-assessments-generative-ai-pilot-2026|Paula et coll. (2026)]] ont trouvé des références fabriquées et des estimations de temps irréalistes qui ont survécu à des invites répétées et ont requis une révision académique substantielle — une hallucination dans un outil de rédaction destiné aux éducateurs plutôt que dans les travaux des étudiants.

Les **[[misconceptions|idées fausses]] stratégiques** sont un parent plus subtil de l'hallucination ouverte. [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et coll. (2026)]] ont invité sept modèles ouverts à produire un « piège [[socratic-method|socratique]] » pour 35 concepts fondamentaux d'informatique — une explication fluide et autoritaire reposant sur une erreur subtile, propre au domaine — et trois experts du domaine ont confirmé 221 des 241 segments produits sur invite (91.7%) comme des idées fausses stratégiques, sans différences significatives entre les domaines de l'informatique. Les erreurs étaient conceptuelles plutôt que factuelles de manière prédominante (66.5% contre 33.5%), aucune n'était purement logique, et elles ont été jugées modérément à fortement persuasives (M = 3.71 sur une échelle à cinq points), l'identité du modèle expliquant 43% de la variance. Parce que des énoncés individuels peuvent être corrects tandis que la relation entre eux est fausse, la vérification factuelle est insuffisante ; les auteurs soutiennent que les [[ai-literacy|apprenants]] ont besoin d'une vérification conceptuelle et d'une validation des modèles mentaux. Ils mettent aussi en garde : le taux mesure une capacité sous [[prompt-engineering|ingénierie des invites]] adversariale plutôt que la prévalence de telles erreurs dans un usage ordinaire, et aucun étudiant n'a été testé, de sorte qu'aucune tromperie ni aucun résultat d'apprentissage n'a été mesuré.

**Des preuves manipulées plutôt que fabriquées.** Un mode de défaillance apparenté dans la [[automated-assessment|notation automatisée]] est la production déplacée depuis l'extérieur. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] a soumis à un test d'intrusion un flux de travail de notation par IA ordinaire et a montré que des instructions cachées à l'intérieur du fichier soumis augmentaient la note d'une dissertation en échec, sans avertissement visible, dans 9 itérations sur 9 pour une stratégie et 17 sur 18 pour une autre. Deux détails importent pour la [[trust-calibration|confiance]] : une injection détectée a été bloquée en désactivant silencieusement le dialogue, et n'a jamais été signalée à l'utilisateur ; et, lors d'une exécution où l'outil avait annoncé qu'il ne suivrait que les consignes officielles du travail, six nouvelles exécutions du même fichier ont malgré tout augmenté la note. Une note obtenue de cette manière n'emporte aucune revendication d'[[assessment-validity|validité]], et, parce que la manipulation ne laisse aucune trace durable, l'[[human-in-the-loop-ai|enseignant]] reste le seul véritable contrôle sur des productions conçues pour ne pas être visibles.

Les défenses contre une telle manipulation portent leur propre compromis : un pipeline de garde-fous multicouche a laissé 46.34% des injections réussir et Prompt Guard 38.48%, tandis que NeMo Guardrails a bloqué chaque attaque mais a signalé 16.22% des requêtes d'étudiants inoffensives — un taux de faux positifs qui constitue en soi un préjudice pédagogique dans un tuteur ([[prompt-injection-defenses-educational-llm-tutors|Maiorano (2026)]]).

L'**hallucination dans le tutorat** affecte directement l'apprentissage. **[[yasir-llm-tutoring-agents-2026]]** a montré que les grands modèles de langue survalidaient des solutions incorrectes tout en rejetant à l'excès des raisonnements valables mais sous-optimaux — des défaillances systémiques qui tromperaient à la fois les étudiants et les enseignants. **[[eduframetrap-llm-sycophancy-educational-safety]]** et **[[eduguard-safe-rag-llm-tutor]]** traitent des mécanismes de sécurité pour les grands modèles de langue éducatifs. Ces risques rejoignent les exigences de [[pedagogical-safety|sécurité pédagogique]] et d'[[human-in-the-loop-ai|IA avec intervention humaine]].

Les **approches d'atténuation** incluent les conceptions d'[[human-in-the-loop-ai|IA avec intervention humaine]], où l'IA soutient plutôt qu'elle ne remplace le jugement de l'[[teacher-role|enseignant]], les architectures sensibles aux preuves qui calibrent la confiance sur la qualité probatoire (comme le préconise MathCog), et l'ancrage fondé sur la [[rag|génération augmentée par la recherche documentaire]] qui contraint les productions des grands modèles de langue à des sources vérifiées. Le concept de [[cognitive-offloading|dépendance excessive]] lui est étroitement lié — l'hallucination est plus dangereuse lorsque les utilisateurs font confiance aux productions de l'IA sans examen critique. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]] ajoute un mode de défaillance que la pile d'atténuation ne couvre pas entièrement : des affirmations institutionnelles trop spécifiques, avec environ 1.03% des pages journalisées associant un campus nommé tel que « Sacramento State » à des verbes de politique assertifs portant sur des règles révisées de rétention, de titularisation et de promotion ou sur des décrets exécutifs du système CSU, aucune d'elles n'étant vérifiable à partir du texte. La spécificité est ce qui rend cela coûteux, puisqu'un détail local fabriqué paraît assez exact pour survivre au contrôle de plausibilité d'un lecteur, et le remède que propose l'étude est procédural plutôt que technique : traiter la génération comme une production de brouillon sous revue de l'enseignant, puis organiser les sources en une conception augmentée par la recherche documentaire.

## Concepts liés

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]

## Articles liés

- [[ivory-psychology-assessment-integrity-2026]] — Fabricated citations and self-contradicting outputs inside passable student work (Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: fluently plausible explanations that are wrong at the conceptual level (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Hidden prompt injections raise AI-graded marks undetected, and detected attacks go unreported (Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — Designing Authentic Assessments with Generative AI: A Pilot Study of Assessment Authentifire in Higher Education
