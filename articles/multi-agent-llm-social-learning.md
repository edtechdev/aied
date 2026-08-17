---
title: "Beyond the AI Tutor: Social Learning with LLM Agents"
created: "2026-05-11T04:33:04-04:00"
updated: "2026-08-12"
type: article
tags: [llm, intelligent-tutoring, scaffolding, student-experience, collaborative-ai-tutoring, agentic-ai-ecosystems-higher-education, higher-ed, intelligent-tutoring, agentic-ai]

sources: ['raw/papers/2604.02677.md']
confidence: high
---

## Summary

Most AI-based educational tools adopt a one-on-one tutoring paradigm, pairing a single LLM with a single learner. Yet decades of learning science — from Vygotsky's Zone of Proximal Development to Bandura's Social Learning Theory — suggest that multi-party interaction, through peer modeling, co-construction, and exposure to diverse perspectives, produces learning benefits that dyadic tutoring alone cannot. This paper reports two controlled experiments testing whether multi-agent LLM configurations can deliver those collaborative and observational benefits at scale. In a convergent math problem-solving study (N=315), learners who interacted with both an LLM tutor and error-prone LLM peers achieved the highest unassisted test accuracy. In a divergent composition study (N=247), a two-agent Duo of distinct frontier models matched the quality gains of single-model assistance while restoring ideational diversity to baseline, avoiding the idea-level homogenization that single-model support produced. The findings offer one of the first controlled investigations of multi-agent LLM learning environments.

## Key Contributions

- In a **convergent problem-solving study (N=315)**, participants tackled SAT-level math problems in a 2×2 design varying the presence of an LLM tutor and error-prone LLM peers (making conceptual vs. arithmetic errors); those who interacted with **both a tutor and peers achieved the highest unassisted test accuracy**, suggesting peer observation has independent learning value even when an expert is present.
- In a **divergent composition study (N=247)**, participants wrote argumentative and creative essays with no AI assistance, a single LLM (Claude or ChatGPT), or **both Claude and ChatGPT together**; while both LLM conditions improved essay quality, **only the two-agent condition avoided the idea-level homogeneity** that single-model assistance produced.
- The writing results were statistically robust: an OLS model predicting combined essay quality from condition was significant (F(2,244)=21.91, p<.0001, R²=0.152), with both LLM conditions outperforming control (Control vs. Single: Δ=0.332, t(244)=6.21, p<.0001; Control vs. Duo: Δ=0.234, t(244)=4.21, p=0.0001), while Single and Duo did not differ significantly.
- Idea homogeneity across participants was measured via bootstrapped similarity scores with permutation testing over 1,000 rounds, showing the **multi-model Duo condition restored ideational diversity to baseline levels**.
- Across both studies, **peer-like configurations supported learner self-efficacy more than single authoritative agents did**, even when they produced lower objective performance — promising for learners whose primary barrier is motivation rather than knowledge.

## Study Design & Method

The two experiments span the convergent–divergent spectrum of learning tasks (Guilford's distinction between arriving at one correct solution and generating multiple valid ones). **Experiment 1** is a pre-registered 2×2 between-subjects design on SAT-level math, crossing the presence of an LLM tutor with error-prone LLM peers. Three GPT-5.2 agents played distinct roles: **Bob**, a supportive tutor who guided with hints, clarifications, and follow-up questions rather than answers (consistent with Socratic tutoring); **Alice**, an arithmetic-error peer with strong conceptual understanding; and **Charlie**, a conceptual-error peer with accurate arithmetic. The two peers were designed to reflect the two most common categories of student math mistakes, creating opportunities for the diagnostic reasoning and schema conflict that learning-from-errors research predicts should deepen understanding. Each problem used an isomorphic variant in the lesson and test phases to control for item-specific memorization, and the primary outcome was unassisted accuracy on the test variants after a brief distractor. **Experiment 2** contrasts no AI, a single LLM, and a two-agent Duo (GPT-5.2 + Claude Opus 4.6) with complementary role specializations (e.g., one agent emphasizing imagination and voice, the other craft and structure), scoring essays by rubric validated against human raters (r=.87) and computing cross-participant idea similarity via SBERT embeddings with bootstrapped permutation testing.

## Implications for AI in Education

The findings suggest that one-on-one AI tutoring is not the only effective paradigm: **orchestrating multiple LLM agents — as peers alongside a tutor or as role-specialized collaborators — can add measurable learning value**, particularly by restoring ideational diversity that single-model assistance suppresses. For [[intelligent-tutoring|AI Tutoring]] and [[collaborative-learning]] system design, this points toward multi-agent configurations in which learners observe peer agents struggle, disagree, and co-construct understanding, rather than receiving authoritative answers from a single assistant. Two design-relevant patterns stand out. First, **homogenization is not an inherent cost of AI assistance but a function of how agents are deployed** — a direct implication for [[writing-education]], where offering multiple architecturally distinct models can preserve ideational diversity while maintaining quality. Second, the observed **error-salience asymmetry** — participants rated the arithmetic-error peer (Alice) more harshly than the conceptual-error peer (Charlie) on nearly every dimension, calibrating trust by the observability of errors rather than their severity — is an important consideration for designing pedagogical peer agents. The self-efficacy benefit of peer-like agents also speaks to [[motivation]] and [[self-regulated-learning]]: configurations that support learners whose primary barrier is confidence rather than knowledge.

## Connected Concepts

- [[intelligent-tutoring]]
- [[collaborative-learning]]
- [[scaffolding]]
- [[writing-education]]
- [[self-regulated-learning]]
- [[motivation]]

## Connected Articles

- [[collaborative-ai-tutoring]]
- [[self-efficacy-tutoring-learning]]
- [[ai-tutor-effectiveness-review]]
- [[humanlike-ai-collaborative-writing]]

## Citation

Kumar, H., Mu, Z. K. (J.), Vincentius, J., & Anderson, A. (2026). [*Beyond the AI Tutor: Social Learning with LLM Agents*](https://arxiv.org/abs/2604.02677). arXiv:2604.02677.
