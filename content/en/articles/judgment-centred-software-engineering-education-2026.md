---
title: "Judgment-Centred Software Engineering Education: A Post-Hype Review and Framework for AI-Augmented Learning"
created: "2026-09-25T09:40:00-04:00"
updated: "2026-09-25T09:40:00-04:00"
type: article
sources: ['raw/papers/judgment-centred-software-engineering-education-2026.md']
confidence: high
page_kind: [framework]
research_method: [literature review]
discipline: [cs education, engineering education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers, faculty developers, researchers]
assessment: [evaluative-judgment, assessment-validity, assessment]
foundations: [academic-integrity, agentic-ai, ai-literacy, cognitive-offloading, curriculum-design, human-ai-collaboration]
pedagogy: [scaffolding, help-seeking, transfer-of-learning, prior-knowledge]
technology: [llm, generative-ai]
ethics: [trust-calibration]
methods: [meta-analysis-systematic-review]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Mahmoud's structured integrative review surveys research and practice from 2023 through 23 September 2026 and argues that [[cs-education|software engineering education]] should move from a production-centered to a judgment-centered model. The evidence is conditional rather than universal: a STEM [[meta-analysis-systematic-review|meta-analysis]] reports extreme heterogeneity (I² = 96.32%) and loses its pooled benefit once publication bias is corrected, while syntheses of 76, 72, and 64 studies converge on short-term efficiency gains that do not [[transfer-of-learning|transfer]] to independent performance. Because generated artifacts enter shared repositories and client systems, the paper extends comprehension debt — the deferred learning and maintenance cost incurred when AI-assisted production outpaces a learner's ability to explain, test, modify, and justify the software — into an [[assessment]] lens, and refines the AI-Augmented Software [[engineering-education|Engineering Education]] (AASEE) framework into five non-linear integration levels crossed by four evidence obligations: explain, verify, modify, and account. Student [[help-seeking]] and instructor [[evaluative-judgment|judgment]] are one design question.

## Key Findings

1. [[generative-ai|GenAI]] learning benefits are conditional, not universal: effects depend on [[prior-knowledge|prior knowledge]], [[scaffolding]], verification, and task design, and short-term completion gains are weak proxies for durable competence.
2. Recent syntheses covering 76, 72, and 64 studies, and broader computing-education reviews, report efficiency gains alongside over-reliance, verification gaps, and weak transfer, with the best evidence favoring assessment redesign.
3. Comprehension debt, grounded in 621 reflective diaries from 207 students, names the gap between what AI-assisted teams can produce and what they can later explain, test, modify, and justify; AI-use frequency is not a proxy.
4. Four cross-cutting obligations — explain, verify, modify, and account — make retained human competence visible at every level, shifting assessment from visible authorship toward visible judgment.
5. [[agentic-ai|Agentic]] capability moves the educational target to supervision: task contracts, permission boundaries, sandboxes, evaluation harnesses, diff review, rollback, and human accountability.

## A conditional evidence base

The review is a structured integrative review rather than a registered systematic review or statistical meta-analysis, drawing on controlled and quasi-experimental studies, surveys, observational and capstone work, design prototypes, and recent systematic reviews published between January 2023 and 23 September 2026. Sources were identified through ACM Digital Library, IEEE Xplore, SpringerLink, ScienceDirect, Google Scholar, arXiv, and citation chaining. Because the working review did not retain a database-by-database screening trail, the paper states its search window and search [[parents-and-families|families]] instead of claiming a PRISMA flow or exhaustive retrieval, and it separates educational evidence from technical capability evidence. The substantive finding is conditional: the STEM meta-analysis by Boolzen and colleagues found a positive pooled effect on externally assessed cognitive outcomes with extreme heterogeneity (I² = 96.32%) and a prediction interval spanning negative, null, and positive results, while a Bayesian analysis adjusted for publication bias favored no overall effect.

## Comprehension debt as a curriculum and assessment lens

Comprehension debt is credited to Ahmad's study of 621 reflective diaries from 207 students, which identifies black-box acceptance, context mismatch, dependency-induced atrophy, and verification bypass, along with a mitigating pattern in which AI serves as a comprehension scaffold. This review operationalizes the construct as the deferred learning, maintenance, and accountability cost incurred when AI-assisted artifact production outpaces a learner's or team's ability to explain, test, modify, and justify the artifact. Frequency of AI use is a poor proxy: aggressive delegation with active verification can keep debt low, while a single opaque but critical component can raise it. Conventional activities can serve as debt probes — delayed change requests, code walkthroughs, independently designed tests, defect localization, live debugging, and cross-member explanation — by comparing what was produced with what can later be demonstrated. The paper calls the construct a research agenda rather than a validated scalar metric, distinct from technical debt, misconduct, or low code quality.

## AASEE: five levels and four obligations

AASEE complements rather than replaces earlier frameworks — Kumar's VIE framework, Guide-AI-Ed, Alzahrani and Alghamdi's maturity model, and the ASE-26 agentic [[curriculum-design|curriculum]] — by connecting the scope of delegated engineering work to observable evidence of retained competence. Five non-linear integration levels run from tool awareness through guardrailed AI-assisted development, AI-collaborative engineering, AI [[governance]], and agentic and AI systems engineering; a course selects a level from its learning objective, so a first-year tracing exercise may remain AI-restricted beside a capstone that requires agent supervision. Four design propositions support the structure: delegation must not outrun verification; generated artifacts require transfer evidence; responsibility expands with lifecycle coupling; and independent fluency remains a prerequisite for judgment. Four obligations — explain, verify, modify, and account — cut across all levels, and the capability–risk–safeguard rule asks an instructor to name a capability, the risk it creates, and the evidence that keeps responsibility intact.

## What this means for practice

- **Instructors.** State the learning objective before choosing a tool, name the specific risk an AI capability creates, and grade the analysis and transfer rather than the volume of generated artifacts.
- **Program leads.** Replace institution-wide allow-or-ban rules with assessment [[eportfolio|portfolios]]: protected tasks for independent fluency, AI-permitted tasks with process evidence, AI-required tasks for critique and [[governance]], and oral or live components.
- **Assessment designers.** Repurpose delayed change requests, code walkthroughs, independent test design, and defect localization as comprehension-debt probes that compare what was produced with what can later be demonstrated.
- **Faculty developers.** Build [[trust-calibration|calibrated reliance]] through repeated encounters with correct, subtly wrong, and contextually inappropriate output, and treat process-evidence inspection as a real implementation constraint rather than free labor.

## Limitations

- It is a structured integrative review, not a registered systematic review: the original screening log was not retained, so no PRISMA flow or prevalence estimate is claimed and relevant work may be missing.
- The search window runs from January 2023 to 23 September 2026 with no database-specific hit counts, and the synthesis is by a single author.
- AASEE is normative and untested — an evidence-informed design hypothesis rather than a validated causal model — and the most SE-specific evidence, including the capstone and comprehension-debt studies, dates from 2026.

## Connected Concepts

- [[cs-education]]
- [[engineering-education]]
- [[evaluative-judgment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[human-ai-collaboration]]
- [[scaffolding]]
- [[help-seeking]]
- [[prior-knowledge]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[curriculum-design]]
- [[meta-analysis-systematic-review]]

## Connected Articles

- [[kumar-genai-computing-education-systematic-review-2026]] — Generative AI in computing education: A systematic review and a framework for responsible integration
- [[ase-26-agentic-software-engineering-curriculum]] — ASE-26: A Curriculum for Agentic Software Engineering as a Discipline
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[spec-driven-development-ai-agents-sdpbl-2026]] — Practical Implementation Report on Introducing Spec-Driven Development Using AI Agents in Software Development PBL
- [[llm-programming-support-governance-cs-education]] — Exploring the Design Space of LLM-Based Programming Support in CS Education
- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom
- [[genai-social-bias-software-engineering-education-2026]] — Generative AI May Reinforce Social Biases in Software Engineering Education
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named

## Citation

Mahmoud, Q. H. (2026). [*Judgment-Centred Software Engineering Education: A Post-Hype Review and Framework for AI-Augmented Learning*](https://arxiv.org/abs/2609.29473). arXiv preprint.