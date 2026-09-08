---
title: Explainable AI
created: "2026-09-07T10:15:00-04:00"
updated: "2026-09-08T13:30:42-04:00"
type: concept
tags: [ai-literacy, trust-calibration, learning-analytics, automated-assessment, bias-mitigation, intelligent-tutoring, human-in-the-loop-ai, pedagogical-safety, metacognition, student-modeling]
audience: [learners, researchers, designers, educators]
confidence: high
---

> **Explainable AI (XAI) in education** is the design and study of making an AI system's decisions legible to its educational stakeholders — learners, teachers, administrators, parents, [[research-methods-aied|researchers]], and policymakers. The central distinction the field insists on: explaining **subject matter** (why a fact is true) is not the same as explaining an **AI system's decision** (why this learner was assigned this activity, why this response was marked incorrect, what evidence supports a risk prediction). Education brings distinctive explainability needs — noisy learning data, explanations that can directly support [[metacognition]] and [[self-regulated-learning]], and stakeholders who require fundamentally different explanation types. The operative design question is **explanation quality**, not mere explanation availability: an explanation that is technically present but unreadable, misleading, or misaligned to its audience can do more harm than no explanation at all.

## Questions to Consider

- When an [[intelligent-tutoring|AI tutor]] tells you why a hint was given, is that explaining the *subject matter* or explaining the *system's decision*? Can you name three examples of each in your own use of educational AI?
- Who needs explanations in education — and do learners, teachers, and policymakers need the *same* kind? What would each use an explanation for?
- An AI flags a student as at-risk for dropping out. What does a teacher need to know to act on that, versus what the student needs to know? Is the same explanation appropriate for both?
- The page argues explanation *quality* matters more than explanation *availability*. What makes a technically present explanation fail — can you think of a time an explanation was there but useless, or worse, misleading?
- [[trust-calibration|Trust]] and explanation are linked but not identical. Why might a confident, fluent explanation create *false* confidence in a flawed system — and how would you detect that happening?

## Introduction

Explainable [[ai-education|AI in education]] names the growing expectation that AI systems in classrooms should not be black boxes. Because AI in education affects consequential decisions — grades, risk flags, learning paths, resource recommendations — stakeholders increasingly demand to know not just *what* the system concluded but *why*. Education sharpens this into two distinct questions: explaining the subject matter being learned, and explaining the AI system's own decision-making. Conflating them is a category error with practical consequences: an AI that explains a [[physics-education|physics]] answer perfectly still gives a student and teacher no insight into why the *system* ranked them at-risk, recommended a certain activity, or marked a response incorrect.

## Explaining subject matter vs. explaining the system's decision

The field's founding contribution — the [[xai-education-framework|XAI-ED framework]] (Khosravi et al., 2022) — insists education has *distinctive* explainability needs beyond general-purpose XAI. Chief among them is the split between two explanation targets:

- **Subject-matter explanations** clarify *content*: why a hint addresses a [[misconceptions|misconception]], why an answer is incorrect, how a physics result follows from principles. These are [[pedagogy|pedagogical]] explanations that support [[scaffolding]], [[feedback]], and [[metacognition]].
- **System-decision explanations** clarify *the model*: why this learner was assigned this activity, why the system predicts this student is at risk, what evidence supports a knowledge-tracing or [[learning-analytics]] prediction. These are transparency explanations that support [[trust-calibration]], [[bias-mitigation]], and accountability.

The distinction matters because they serve different stakeholders and different purposes. A learner answering "why is this marked wrong?" mostly needs the *subject-matter* explanation; a teacher deciding whether to act on a risk flag, or a policymaker auditing for bias, needs the *system-decision* explanation. Designing a single explanation that serves both is rarely possible — which is why multi-stakeholder design is a core XAI-ED theme.

## Who needs explanations: multi-stakeholder design

- **Learners** need explanations that support their own learning and self-regulation — why a hint was given, why their answer was marked incorrect, why this resource is recommended (supporting [[self-regulated-learning]]). The [[who-should-grade-my-work-ai-writing-assessment-2026|student-perspective evidence]] shows learners draw a sharp line between accepting AI *feedback* (useful for revision) and ceding *grading authority* (reserved for the human instructor) — a calibrated, function-matched stance activated by transparency about AI involvement. [[ko-hughes-vsd-student-centered-its-2026|Value-sensitive design work with community college students]] sharpens the point: students preferred *collaborative, humanized* explanations (e.g., "the AI might be uncertain here, so let's check this together") over raw model confidence or technical transparency, because transparency alone has little value unless it directly supports their learning. The study surfaced a transparency-vs.-interpretability tension that pushes explanation design toward learner-facing semantics rather than feature-importance output.
- **Teachers** need explanations that inform intervention — which students are at risk and *why*, on what evidence. [[xai-teachers-trust-edtech-recommendations-2026|Explainability studies with teachers]] show [[discipline-specific-aied|domain-specific]], [[curriculum-design|curricular]]-language explanations build acceptance and calibrated trust more effectively than generic feature-importance ones, yet teachers still want real classroom experience before full reliance — explanation alone does not confer [[trust-calibration|calibration]].
- **Developers and researchers** need explanations to debug model behavior and detect [[bias-mitigation|bias]] — surfacing which features drive predictions.
- **Administrators and policymakers** need explanations for accountability, [[privacy]], and [[regulation]] compliance (e.g. the right to explanation), and to audit whether AI-driven decisions are fair and [[equity-in-ai-education|equitable]].

## Approaches and formats

The XAI-ED framework catalogs the main explanation modalities: **visual** (heatmaps, decision trees), **textual** (natural-language justifications), **example-based** (counterfactuals, nearest neighbors), **feature-importance** rankings, **rule extraction**, and **model simplification**. It also maps approaches to model classes:

- **White-box** models (decision trees, linear models, rule-based) are inherently interpretable.
- **Black-box** models (neural networks, ensembles) require post-hoc explanation methods.
- **Glass-box** approaches try to balance accuracy with transparency.

The concrete AIED evidence base spans all of these. **Interpretable [[knowledge-tracing|knowledge tracing]]** makes learner-knowledge models inspectable directly ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). **Self-explaining surrogates** distill a black-box model into a small, interpretable language model for [[learning-analytics]] ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Counterfactual explanations** — "what would need to change for a different outcome" — support educational decision support and recourse ([[sc2r-counterfactual-recourse-educational-2026]]). **Federated + explainable learning analytics** shows explanation quality can drift (calibration degrades) even when ranking stability holds, underlining that explanations are not a fixed property but a system output to be measured ([[villegas-ch-federated-explainable-learning-analytics-2026]]). And **interpretable [[affective-computing|affective]] ITS** demonstrates explanations in [[affective-tutoring|emotion-aware]] tutoring ([[multimodal-affective-its-presentation]]).

## Explanation quality, not availability

A recurring lesson across the evidence: **having an explanation is not enough**; the explanation must be right for its audience, accurate, and calibrated to stakes. The XAI-ED framework names the pitfalls explicitly:

- **Explanation overload** — too much information overwhelms the user and negates the benefit.
- **Misleading explanations** — post-hoc explanations may not reflect the model's actual reasoning, giving false confidence.
- **Confirmation bias** — users selectively attend to explanations that confirm existing beliefs.
- **Over-trust** — fluent explanations can create false confidence in flawed systems, feeding [[cognitive-offloading|over-reliance]] (the obverse of [[trust-calibration]]).
- **Gaming the system** — students may exploit explanations to circumvent actual learning.

Explanation quality also has an equity dimension: an explanation that is technically present but unreadable to a given stakeholder — or that obscures the [[bias-mitigation|bias]] in a prediction — fails its purpose. This is why the design question is *quality and fit*, and why human-centred, stakeholder-specific explanation design is inseparable from the technical generation of explanations. Effective XAI is a communication act designed for the recipient's cognitive needs, not merely a technical artifact.

## Connected Concepts
- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]

## Connected Articles
- [[ko-hughes-vsd-student-centered-its-2026]] — Value-sensitive design of student-centered ITS (collaborative vs. raw explanations)
- [[xai-education-framework]] — XAI-ED: the foundational framework for explainable AI in education (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Domain-specific explanations build teachers' trust and acceptance (Feldman-Maggor et al. 2025)
- [[who-should-grade-my-work-ai-writing-assessment-2026]] — Student perspectives on transparent AI-assisted assessment (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[explainable-probabilistic-kt]] — Explainable knowledge tracing via probabilistic embeddings
- [[neural-symbolic-knowledge-tracing]] — Neural-symbolic knowledge tracing
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling black-box models into self-explaining LMs for learning analytics
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving risk modeling
- [[sc2r-counterfactual-recourse-educational-2026]] — Semantics-constrained counterfactual recourse for educational decision support
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations
- [[multimodal-affective-its-presentation]] — Interpretable closed-loop ITS for multimodal affective feedback
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Explaining ChatGPT adoption in higher education

## Citation

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.
