---
title: "Beyond the AI Tutor: Social Learning with LLM Agents"
created: "2026-05-11T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [agentic-ai]
pedagogy: [scaffolding]
technology: [intelligent-tutoring, llm]
research_method: [experiment]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2604.02677.md']
confidence: high
discipline: [math education, writing education]
---

> **Synthesis:** Kumar et al. (2026) test whether moving beyond the one-on-one [[intelligent-tutoring|AI tutor]] toward multi-agent [[llm|LLM]] configurations can capture the [[collaborative-learning|collaborative]] and observational benefits that [[learning-theories|learning science]] attributes to multi-party interaction. In a convergent math study (N=315), learners who worked with both an LLM tutor and error-prone LLM peers achieved the highest unassisted test accuracy; in a divergent composition study (N=247), a two-agent Duo of distinct frontier models matched single-model quality gains while restoring [[creativity|ideational diversity]] to baseline. The core insight — that idea-level [[ai-misuse-learning-harm|homogenization]] is not an inherent cost of AI assistance but a function of how agents are deployed — reframes the design space for [[writing-education]] and AI tutoring systems.

## Summary

Most AI-based educational tools adopt a one-on-one [[intelligent-tutoring|tutoring]] paradigm, pairing a single LLM with a single learner. Yet decades of learning science — from Vygotsky's [[sociocultural-learning|Zone of Proximal Development]] to Bandura's [[self-efficacy|Social Learning Theory]] — suggest that multi-party interaction, through peer modeling, co-construction, and exposure to diverse perspectives, produces learning benefits that dyadic tutoring alone cannot. This paper reports two controlled experiments testing whether [[agentic-ai|multi-agent LLM]] configurations can deliver those collaborative and observational benefits at scale. In a convergent math [[problem-solving]] study (N=315), learners who interacted with both an LLM tutor and error-prone LLM peers achieved the highest unassisted test accuracy. In a divergent composition study (N=247), a two-agent Duo of distinct frontier models matched the quality gains of single-model assistance while restoring ideational diversity to baseline, avoiding the idea-level homogenization that single-model support produced. The findings offer one of the first controlled investigations of multi-agent LLM learning environments.

## Key Contributions

- In a **convergent problem-solving study (N=315)**, participants tackled SAT-level [[math-education|math]] problems in a 2×2 design varying the presence of an LLM tutor and error-prone LLM peers (making conceptual vs. arithmetic errors); those who interacted with **both a tutor and peers achieved the highest unassisted test accuracy**, suggesting [[self-regulated-learning|peer observation]] has independent learning value even when an expert is present.
- In a **divergent composition study (N=247)**, participants wrote argumentative and creative essays with no AI assistance, a single LLM (Claude or ChatGPT), or **both Claude and ChatGPT together**; while both LLM conditions improved essay quality, **only the two-agent condition avoided the idea-level homogeneity** that single-model assistance produced.
- The writing results were statistically robust: an OLS model predicting combined essay quality from condition was significant (F(2,244)=21.91, p<.0001, R²=0.152), with both LLM conditions outperforming control (Control vs. Single: Δ=0.332, t(244)=6.21, p<.0001; Control vs. Duo: Δ=0.234, t(244)=4.21, p=0.0001), while Single and Duo did not differ significantly.
- Idea homogeneity across participants was measured via bootstrapped similarity scores with permutation testing over 1,000 rounds, showing the **multi-model Duo condition restored ideational diversity to baseline levels**.
- Across both studies, **peer-like configurations supported learner [[self-efficacy]] more than single authoritative agents did**, even when they produced lower objective performance — promising for learners whose primary barrier is [[motivation]] rather than knowledge.

## Study Design & Method

The two experiments span the convergent–divergent spectrum of learning tasks (Guilford's distinction between arriving at one correct solution and generating multiple valid ones). **Experiment 1** is a pre-registered 2×2 between-subjects design on SAT-level math, crossing the presence of an LLM tutor with error-prone LLM peers. Three GPT-5.2 agents played distinct roles: **Bob**, a supportive tutor who guided with hints, clarifications, and follow-up questions rather than answers (consistent with [[socratic-method|Socratic tutoring]]); **Alice**, an arithmetic-error peer with strong conceptual understanding; and **Charlie**, a conceptual-error peer with accurate arithmetic. The two peers were designed to reflect the two most common categories of student math mistakes, creating opportunities for the diagnostic reasoning and [[misconceptions|schema conflict]] that [[productive-failure|learning-from-errors]] [[research-methods-aied|research]] predicts should deepen understanding. Each problem used an isomorphic variant in the lesson and test phases to control for item-specific memorization, and the primary outcome was unassisted accuracy on the test variants after a brief distractor. **Experiment 2** contrasts no AI, a single LLM, and a two-agent Duo (GPT-5.2 + Claude Opus 4.6) with complementary role specializations (e.g., one agent emphasizing imagination and voice, the other craft and structure), scoring essays by rubric validated against human raters (r=.87) and computing cross-participant idea similarity via SBERT embeddings with bootstrapped permutation testing.

## What this means for practice

- **Learners.** Work with a tutor agent and error-prone peer agents together rather than the tutor alone: in the convergent math study (N=315), learners who had both achieved the highest unassisted test accuracy on isomorphic test items.
- **Learners.** Treat the peers' mistakes as the material to reason with — the two peer roles were built around arithmetic and conceptual errors, the two most common categories of student math mistakes — and compare your reasoning against theirs instead of asking the tutor for the answer.
- **Learners.** Seek configurations with peer-like agents when confidence rather than knowledge is your barrier: across both studies peer-like agents supported [[self-efficacy]] more than a single authoritative agent did, even where objective performance was lower.
- **Designers.** Run architecturally distinct models side by side instead of one assistant: in the writing study (N=247) both LLM conditions lifted essay quality (Control vs. Single: Δ = 0.332, t(244) = 6.21, p < .0001; Control vs. Duo: Δ = 0.234, t(244) = 4.21, p = 0.0001), yet only the two-model Duo restored [[creativity|ideational diversity]] to baseline — homogenization is a function of deployment, not an inherent cost of AI assistance.
- **Designers.** Choose the error types your peer agents display on purpose, because learners calibrate [[trust]] by how visible an error is rather than how severe it is: participants rated the arithmetic-error peer more harshly than the conceptual-error peer on nearly every dimension.

## Limitations

- Both experiments used Prolific crowdworkers rather than students in classes: Experiment 1 recruited 614 participants and retained 315 after attention and authenticity checks — nearly half lost, leaving the study underpowered against its preregistered targets — and Experiment 2 retained 247 of 419.
- Crowdworkers were paid \$8.17 per hour, so the authors judge compensation rather than learning to be the dominant motivation and treat the reported effect sizes as conservative lower bounds rather than predictions for field deployment.
- Interactions were deliberately time-bounded at five-minute lessons and five-minute writing sessions, on SAT-level math problems and NYT writing prompts chosen for experimental tractability, so whether the peer-modeling and diversity benefits persist or attenuate over semester-length work is untested.
- The two studies capture only two realizations of cognition — unassisted performance on isomorphic math problems and assisted essay quality with confidence, cognitive load, and idea diversity — and the writing study measures no learning transfer, while agent count, error types, role specializations, and interaction structure were each held fixed.

## Connected Concepts

- [[intelligent-tutoring]]
- [[collaborative-learning]]
- [[scaffolding]]
- [[writing-education]]
- [[self-regulated-learning]]
- [[motivation]]

## Connected Articles

- [[golrang-propact-pair-programming-2026]]
- [[self-efficacy-tutoring-learning]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[humanlike-ai-collaborative-writing]]

## Citation

Kumar, H., Mu, Z. K. (J.), Vincentius, J., & Anderson, A. (2026). [*Beyond the AI Tutor: Social Learning with LLM Agents*](https://arxiv.org/abs/2604.02677).
