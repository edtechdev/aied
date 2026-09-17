---
title: "Learning Sciences"
created: "2026-09-17T14:12:00-04:00"
updated: "2026-09-17T14:12:00-04:00"
type: concept
tags: [learning-sciences, learning-theories, learning-design, cognitive-psychology, pedagogy, research-methods-aied, intelligent-tutoring, learning-analytics]
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
assessment: [research-methods-aied]
discipline: [learning sciences]
audience: [researchers, instructional designers, learning designers, educators, policymakers]
level: [k 12, higher ed, adult learning]
category: [synthesis, framework]
confidence: high
---

> **Learning sciences** — the interdisciplinary research field that studies how people learn and how to design environments in which learning happens, drawing on [[cognitive-psychology|cognitive psychology]], [[learning-theories|learning theory]], computer science and linguistics, and judging its designs with empirical evidence rather than theory alone. In this knowledge base it is the research field around [[ai-education|AI in education]] rather than one of the school subjects: it supplies the mechanisms that AI systems operationalise (knowledge components, [[mastery-learning|mastery thresholds]], [[transfer-of-learning|transfer]]), the design objects they are embedded in ([[learning-design|planned course sequences]], [[intelligent-tutoring|tutors]], [[feedback]] regimes) and the standards by which they are judged ([[learning-gains]], [[assessment-validity]], [[equity-in-ai-education|equity]]). Its organising question is not whether a tool performs well but whether a learner changed.

## Questions to Consider

- A learner passes every practice item, so the mastery threshold ends the set — then misapplies the rule where the action should be withheld. Whose error is that: the learner's, the model's, or the stopping rule's?
- Sequence mining can describe 554 courses as patterns without observing a classroom. What does the field gain, and lose, by studying designed intentions instead of enacted activity?
- Demographic sensitivity in an LLM's feedback looks like adaptation when it tracks a learner's stated education level and like bias when it shifts sentiment. Should a field that cannot separate the two keep using open-ended models to assess?
- Does the learning sciences' appetite for causal design — randomised assignment, counterfactual audits, executable models of the learner — narrow what counts as evidence in AI in education?

## Introduction

The learning sciences study learning and the design of learning environments, and they are defined by their methods as much as their topics: experiments, classroom trials, [[quantitative-research|quantitative]] modelling of student data, [[qualitative-research|qualitative]] analysis of designs and contexts, and design-based research that builds an intervention and revises it in use. That breadth separates this page from [[learning-theories]], which covers the explanatory frameworks as lenses for reading AI, and from [[pedagogy]] and [[learning-design]], which cover teaching practice and the craft of sequencing outcomes, activities and assessment. The learning sciences study those from the outside, as objects of description, modelling and evaluation.

[[research-methods-aied]] is the sharpest contrast: that page covers instrument choice and inference, while this page covers the substantive knowledge such methods have produced — what learners do with a generative model, which arrangements change outcomes, and where the field's own instruments fail. [[discipline-specific-aied]] takes the opposite cut, holding that subject matter changes what support should do; the learning sciences take the cross-cutting view, and [[cognitive-psychology]] supplies the mechanisms they test.

### How AI appears in the learning sciences

- **Mechanism first, then the model.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren and Stamper (2026)]] ran eleven experiments (N = 192) with [[intelligent-tutoring]] systems for Riichi Mahjong and showed that learners who compiled an overgeneralised production — the action without its application constraint — misapplied it on the first "do-not-act" item at 61.5%–100%, against 12% expected error under [[knowledge-tracing|Bayesian knowledge tracing]]. With a 95% mastery threshold the system stopped practice before learners met a case requiring the action to be withheld, so the defect went undetected. Short do-not-act practice with [[feedback]] naming the missing constraint cut misapplication to 0.0%–23.1% (Cohen's h 1.70–2.44), and a secondary analysis of thirteen K-12 *Decimal Point* datasets found the same structure in whole-number bias (84%–88% of comparison errors).

- **The optimum depends on the content.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger and Carvalho (2025)]] treat the example–problem ratio as a content–treatment interaction: in a 2×2 experiment with 95 participants on geometry-area material, practice-only training produced larger [[learning-gains|learning gains]] for verbatim facts while example-integrated training produced larger gains for generalisable skills (β = 0.41, p = .038, d = 0.38). A simulated learner (Apprentice Learner) reproduced the crossover only when given an ACT-R-style [[cognitive-psychology|memory-and-forgetting mechanism]]. More practice is not uniformly better: memory-oriented content warrants retrieval, and induction-oriented skills warrant integrated examples.

- **Design as an analysable object.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec and Horvat (2026)]] turned [[learning-analytics]] on [[learning-design]] itself, coding 29,064 activities across 554 courses planned in a free course-design tool. Acquisition was the most common learning type and the most common entry point; the strongest Markov transition was Assessment → Discussion (0.332) and the highest-confidence rule was Acquisition → Assessment → Practice → Practice (0.743, lift 1.45). Learning type tracked intended outcome level, Acquisition falling from about 50% of activities at Bloom level 1 to around 20% at level 6. The authors stress these are pre-implementation designs: resemblance to flipped, [[inquiry-based-learning|inquiry-based]] or [[project-based-learning|project-based]] sequences is not evidence of intent.

- **Auditing the models that assess.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto and Hovy (2026)]] audited six [[llm|LLMs]] across [[automated-essay-scoring|essay scoring]], [[formative-assessment|formative feedback]] and question answering, holding the task input fixed while varying only demographic context (192,480 calls). Scoring was stable under explicit personas, but Llama-70B inflated its own scores by 1.57 points under implicit conversational history (p < 0.001), and higher education drew less readable and more positive responses — a sentiment gap of roughly four standard deviations. Readability effects shrank while length effects grew, and some coefficients changed sign between conditions. The authors offer it as an audit instrument, not a deployment verdict, and read the entanglement of demographic and topical signal as a threat to [[assessment-validity|validity]] and [[equity-in-ai-education|equity]].

- **Measuring competence, and its limits.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]] organises instruments for competent [[generative-ai]] use into four domains — knowledge and use, epistemic oversight, reliance calibration, and control of tool-using agents — refusing to collapse them into one proficiency continuum. Three same-sample correlations between self-rated and demonstrated [[ai-literacy|AI literacy]] pooled to r = .055 (95% CI [-.047, .156], reported N = 2,765), which the author reads as enough to reject treating [[self-report-measures|self-ratings]] as interchangeable with performance scores, though not enough to set a cutoff. No validated instrument covered the full set of decisions that tool-using agents create; the proposed layered battery is a design hypothesis.

- **Self-report about the learner's own offloading.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]] translates the [[cognitive-offloading]] literature into PAUSE, a browser-only self-check with four domains, every LLM-era item anchored to a source, no composite, no storage and no model in production; its bands are descriptive rather than normed, and a reading must not justify assessment, admissions or hiring decisions. Its stated limits matter: self-report of offloading is vulnerable to the faculty it concerns, a respondent who deliberately uses AI as a [[scaffolding|scaffold]] reads as offloading on several items, and whether AI-associated offloading is distinct from general technology dependence remains open.

- **Where human expertise sits.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] report the clearest division of labour: in a two-month [[rct|randomised controlled trial]] with about 900 novice K-12 tutors and roughly 1,800 students, real-time suggestions drawn from experienced tutors' reasoning raised topic mastery by 4 percentage points (62% to 66%, p < 0.01), and by 9 points for lower-rated tutors, at about $20 per tutor per year, shifting tutoring toward guiding questions. Gains were proximal — year-end tests did not move. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] find teachers arriving at the same position by design: six secondary teachers prototyping chatbots specified a bounded expert, holding authority boundaries (responsibility for learning and safety is not delegable) and expertise boundaries (the model lacks their knowledge of individual students), and delegating content presentation, practice and corrective [[feedback]] while reserving objective-setting and [[summative-assessment|summative assessment]].

- **Capability at the level of the field.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury and Liu (2026)]] surveyed 127 faculty with a [[tpack|TPACK]] instrument adapted for generative AI: strong content and pedagogical content knowledge (M = 4.70–5.15) beside markedly lower technology-integrated knowledge, with holistic TPACK lowest at 2.55, content knowledge uncorrelated with any technology-integrated domain, and the three integrated domains correlating so highly (r = .81–.91) that they may function as one factor. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] reads the governance layer through a discontinued UK civil-service prototype whose codebase was a system prompt plus a retrieval pipeline over commercial models, arguing that the generality of foundation models both enables rapid repurposing into [[educational-policy-ai|policy]] tools and makes aberrant output a permanently only-mitigable risk — oversight that peers over the loop rather than sitting inside it.

## Connected Concepts

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## Connected Articles

- [[competent-generative-ai-use-measures-review-2026]] — Review and exploratory meta-analysis of measures for competent generative-AI use (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Correctness masking an incomplete rule: mastery stopping rules in adaptive learning (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Counterfactual audit of demographic signals in LLM student assessment (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Markov chains and pattern mining over 29,064 activities in 554 courses (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — A privacy-preserving, non-diagnostic self-check for AI-associated offloading (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Zero-shot governance: general-purpose AI in policy, read through the Redbox codebase (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Why the best example–problem ratio depends on content (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Teachers design bounded-expert chatbots, with selective delegation of instruction (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — Faculty GenAI TPACK: strong content knowledge, weak technology-integrated knowledge (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: a randomised trial of human–AI live tutoring at scale (Wang et al. 2024)