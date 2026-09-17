---
title: "Educational Technology Developers"
created: "2026-09-17T15:20:00-04:00"
updated: "2026-09-17T15:20:00-04:00"
type: concept
tags: [educational-technology-developers, edtech-platform, learning-design, educational-development, design-based-research, open-source, learning-analytics]
foundations: [educational-development, learning-design]
technology: [learning-analytics]
assessment: [design-based-research]
stakeholders: [edtech-platform, educational-technology-developers, open-source]
audience: [edtech designers, software developers, designers, learning analytics designers, instructional designers, institutions]
page_kind: [evaluation]
confidence: high
---

> **Educational Technology Developers** — the people and organisations that build educational technology: product designers, software developers, learning engineers, learning-analytics designers, and the edtech companies, university labs and [[open-source]] projects they work in. In AI in education this is the role that turns a model capability into something a teacher or learner can actually use, and it carries decisions no later stage can undo: what evidence a design claim rests on, how far a [[learning-analytics|analytics]] pipeline or a [[intelligent-tutoring|tutoring]] system is grounded in the institution's own licensed material, whether teachers and learners are included in design, which [[learning-design|instructional design]] assumptions are baked into the defaults, and what happens to the product after the funding stops. Across the knowledge base's system reports and deployment studies, the recurring lesson is that the deployment context, not the model, is usually the binding constraint.

## Questions to Consider

- If the meta-analyses claiming that "AI improves learning" rest on invalid methodology, as the audit in [[oneill-presumed-effective-meta-analysis-2026]] found, what evidence is a product roadmap actually allowed to build on?
- Should an algorithm's explanations be written in the teacher's curricular language even when that costs more design effort than exposing feature importances — and who pays for that effort?
- When a tool is co-designed with students, whose verdict decides: measured learning gains, or the 96% who said they wanted it kept?
- Is on-premise, open-licensed deployment a technical choice or a governance one — and should transparency requirements become a condition of purchase?
- What does a developer owe an institution when the grant ends: a maintained product, a forkable repository, or a candid statement that the system was never a validated intervention?

## Introduction

The developer sits one level below the platform. [[edtech-platform]] describes the deployed system and the stakeholder it becomes once it is in a school or university; this page is about the people who decide what that system does. The distinction matters because platform-level findings — low take-up, equity skew, procurement friction — are usually consequences of design choices made earlier, by someone who never met the learners.

The role is also distinct from its neighbours. [[learning-design]] and [[curriculum-design]] design a course for a known cohort; a technology developer designs a product that many courses, taught by people they have never met, will use — which is why defaults, configurability and documentation carry pedagogical weight. [[educational-development]] supports the teaching staff of an institution from inside it; developers sit outside or alongside, supplying the tools those staff are then asked to adopt. And [[design-based-research]] is the evidence standard such developers are increasingly asked to meet: iterative, contextual, and reported with its own limitations.

### Who builds educational AI

**Research labs building public infrastructure.** [[oatutor-open-source-adaptive-tutor-2023|OATutor]] was built at UC Berkeley as the first fully open-source adaptive tutoring system on [[intelligent-tutoring|ITS]] principles: an MIT-licensed codebase with a Creative Commons algebra library, [[knowledge-tracing|Bayesian Knowledge Tracing]] mastery estimation, A/B testing infrastructure and LTI support. Its reason for existing is a design decision — proprietary platforms had confined [[adaptive-learning]] research to closed systems — and its authoring route is another: 16 creators produced a College Algebra course in six months after 2.27 hours of training.

**Model builders.** [[learnlm-improving-gemini-learning]] reframes improving a model for learning as [[prompt-engineering|pedagogical instruction following]]: behaviour is set per application through system instructions rather than one fixed definition of [[pedagogy]], and expert reviewers preferred it by +31% over GPT-4o and +13% over base Gemini. The practical point is that pedagogy is too context-dependent to define globally; the useful capability is adherence to the instructions a developer writes, measured by conversation-level scenarios rather than single-turn [[benchmark|benchmarks]].

**Architects of knowledge models.** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] argues [[personalized-learning]] needs more than a static ontology, proposing systems of mapped ontologies plus rules and analytics in place of the classic four-model ITS architecture, and a reuse framework of eight metadata classes that aims to cut the cost of each new build.

**Infrastructure and measurement engineers.** [[a4l-analytics-pipeline]] describes a modular, domain-agnostic pipeline for learner interaction data validated across three educational AI assistants, where methods built for one domain extended to another — reusable [[learning-analytics]] infrastructure rather than a one-course dashboard. [[stanbkt-bayesian-knowledge-tracing]] shows the complementary case: a Bayesian reimplementation produced *identical* prediction to the established point-estimate tool (AUC 0.711), differing only in cost and in credible intervals that make a condition comparison interpretable.

**Builders inside institutions.** [[moodle-ai-tutoring-deep-learning]] embeds LLM tutoring in an existing LMS rather than shipping a standalone tool, lowering the adoption threshold the ITS literature names as a reason systems fail in practice. [[savvy-student-attention-video-learning]] turns multimodal attention signals into an interface teachers can read before releasing a video. [[instructional-agents-multi-agent-course-gen|Instructional Agents]] automates ADDIE's first three phases with role-specialised agents, and its ablation is a design lesson: the single-agent baseline scored worst, Full Co-Pilot beat Autonomous by 0.5–0.9 points, and no quality difference between backends made the cheapest the default.

### What a design claim can rest on

**The evidence base is weaker than it looks.** [[oneill-presumed-effective-meta-analysis-2026]] audited 14 meta-analyses claiming that AI improves education and found none justified its claims: all but two defined the treatment as a tool rather than a pedagogical intervention, 61% of 59 vetted primary studies had validity problems, heterogeneity was high wherever reported, moderator analyses were underpowered, and publication bias was never validly assessed. A retracted meta-analysis was still cited as authoritative by 60% of sampled later papers. For a developer, "AI improves learning" is a product-category claim, not a design input.

**Report uncertainty and full cost, not just accuracy.** For [[stanbkt-bayesian-knowledge-tracing|StanBKT]], Bayesian inference buys nothing in prediction and everything in being able to say which effects were credible. [[shen-sustainable-ai-knowledge-base-cs-education-2026]] reports retrieval ablations, quantization-aware fine-tuning, VRAM, energy per query and hallucination measured against retrieved open resources — with the authors' own caveat that the system is not a validated tutor. That is the [[ai-ed-evaluation|evaluation]] discipline that makes a deployment claim checkable.

### Co-design with teachers and learners

**Explanations must speak the teacher's language.** [[xai-teachers-trust-edtech-recommendations-2026]] ran a within-subject experiment with 41 chemistry teachers on an ML recommendation tool: understandability, [[trust]] and acceptance correlated positively, and domain-driven explanations in curricular language produced significantly higher understandability, learned [[trust-calibration|trust]] and acceptance than feature-importance explanations. Trust was also dynamic — several teachers said only classroom experience would settle it — and acceptance depended on pedagogical alignment and workload reduction.

**Co-design at institutional scale.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]] at the Open University was built through six design-based studies over 18 months with 498 students and 20 staff. About 20% were initially skeptical; after hands-on use 96% wanted it kept, and an exploratory RCT found twice the usage time but no significant differences on learning process data. The enabling factors were organisational — senior sponsorship, cross-unit collaboration, data-informed iteration — with gaps in systems-thinking capacity.

### Procurement, openness and after the funding stops

[[shen-sustainable-ai-knowledge-base-cs-education-2026]] supplies the inputs a procurement decision needs: a 12 GB VRAM hardware floor, an accuracy ceiling for a 7B-class model, per-query energy, and an ordering of choices — retrieval first (without it the model scored 52.3%, below a TF-IDF baseline), then fine-tuning, then quantization-aware compression; open licensing is the precondition for serving a corpus locally. [[reclaiming-epistemic-agency-co-agency-2026]] frames the same decision as governance: transparency requirements turn purchasing into epistemological governance, contestability and provenance become conditions, and districts with the least capacity face the highest bar. [[credential-cognitive-stewardship-ai-assessment]] adds that vendor governance appeared in only 29% of 30 audited policy packages, which specified what AI may do far more readily than what evidence of learning remained. [[genai-mindtool-generative-learning]] poses the design question — does the product encourage learning *with* the tool or offload cognitive work — and [[vocabulary-difficulty-prediction]] shows the trade in miniature: the top-scoring black-box model (r > 0.91) was less explainable than the interpretable one (r > 0.77).

## Connected Concepts

- [[edtech-platform]]
- [[learning-design]]
- [[curriculum-design]]
- [[design-based-research]]
- [[educational-development]]
- [[open-source]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[teacher-ai-competency]]
- [[technology-acceptance-model]]
- [[universal-design-for-learning]]
- [[assessment-validity]]
- [[ai-ed-evaluation]]
- [[governance]]
- [[educational-policy-ai]]
- [[sustainability]]
- [[privacy]]

## Connected Articles

- [[oatutor-open-source-adaptive-tutor-2023]]
- [[moodle-ai-tutoring-deep-learning]]
- [[learnlm-improving-gemini-learning]]
- [[savvy-student-attention-video-learning]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[oneill-presumed-effective-meta-analysis-2026]]
- [[a4l-analytics-pipeline]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[instructional-agents-multi-agent-course-gen]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]]
- [[credential-cognitive-stewardship-ai-assessment]]
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[genai-mindtool-generative-learning]]
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]]
- [[vocabulary-difficulty-prediction]]
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]]