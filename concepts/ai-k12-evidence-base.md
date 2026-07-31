---
title: AI in K-12 Evidence Base
created: 2026-05-07
updated: 2026-05-22
type: concept
tags: [k-12, RCT, efficacy-study, learning-gains, llm, adaptive-learning]
confidence: medium
sources: [raw/papers/stanford-evidence-base-ai-k12-2026.md]
---
> 📄 Full text: [Stanford SCALE](https://scale.stanford.edu/sites/default/files/The%20Evidence%20Base%20on%20AI%20in%20K-12%20Report.pdf) · [local](raw/papers/stanford-evidence-base-ai-k12-2026.md)




# AI in K-12 Evidence Base

> As of October 2025, only **20 of 818 papers** in the AI Hub Research Repository meet standards for strong causal inference (RCTs or QEDs) on AI in education — and **zero** examine U.S. K-12 student settings.^[[stanford-evidence-base-ai-k12-2026]]

## The Evidence Gap

The field is growing explosively (from 28 relevant papers in Jan 2023 to 818 by Oct 2025) but remains thin on causal evidence:

- 87% of repository papers are arXiv preprints
- 64% of all papers study postsecondary settings
- Only 8% use RCTs; 5% use quasi-experimental designs (QEDs)
- Most causal studies are international, short-term (e.g., single 20-minute sessions), and focused on immediate outcomes

The review authors (Stanford SCALE, 2026) applied *What Works Clearinghouse (2025)* standards for quality review, using a two-step LLM pre-screening followed by human review.

## What the Causal Literature Says

Out of 20 high-quality causal papers, outcomes break down as:
- 35% math
- 25% other academic
- 20% literacy
- 15% social-emotional

Education levels in causal papers:
- ~45% high school (international)
- ~5% postsecondary
- **0% U.S. K-12 students**

## Learning Science Lens

The review frames findings through six established principles. See [[ai-learning-transfer]] for the critical tension between immediate performance and durable learning.

| Principle | Implication for AI Tools |
|---|---|
| Cognitive load | AI reduces extraneous load but may also suppress *germane* (productive) load. |
| Zone of proximal development | General-purpose AI often operates *outside* the ZPD by completing work for students. [[tutoring-specific-vs-general-ai|Tutoring-specific scaffolds]] target readiness more precisely. |
| Transfer | Unclear whether AI-assisted practice produces durable knowledge or merely tool-dependent performance. |
| Metacognition | AI completing tasks reduces opportunities for students to monitor their own understanding. |
| Expertise reversal | Novices need guidance; experts need independence. Effective AI must adapt to learner expertise. |
| Desirable difficulties | Easier practice with AI feels better but may weaken long-term retention. |

## Key Open Questions

1. Do AI-assisted gains persist when the tool is removed?
2. Does general-purpose chatbot use widen achievement gaps?
3. What pedagogical guardrails are necessary to preserve [[metacognition]]? See the new evidence from Scheu et al. (2026) that structured courses increase metacognitive competence while raw LLM assistants do not.
4. When will the first U.S. K-12 RCTs on LLM tools emerge?

## Related Pages
- [[ai-enabled-serious-games]] — Highlights critical gap in empirical evidence for long-term learning outcomes in AI-enabled games
- [[xai-education-framework]]
- [[ai-changing-teaching-workflows]]
- [[ai-lifelong-learning-policy]]
- [[teacher-student-agency-orchestration]]
- [[ai-pedagogical-accompaniment-amico]]
- [[genai-architecture-education]]
- [[code-review-genai-cs1]]
- [[engagement-forecasting-its]] — Feature-based engagement forecasting reduces MAE 22-33% vs heuristics; effort dr
- [[socraticode-k12-programming-tutor]] — Towards SocratiCode: Designing a Generative AI-Based Programming Tutor for K-12 Students through a 4-Week Participatory Design Study
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: multi-dimensional evaluation methodology models rigorous benchmark design for AI-in-education
- [[nsmq-riddles-science-math-benchmark]] — African educational content addresses geographic bias in AI evidence
- [[llm-educational-simulation-adhd]] — Highlights evidence gap for special education populations in AI research
- [[ecnuclaw-k12-personalized-companion]] — Chinese educational framework extends geographic scope of K-12 AI evidence
- [[ground-truth-reliability-aied]] — Thomas et al.: complementary framework for measurement quality in AIED research — what the SCALE review's 20 rigorous studies also need
-
- [[awareness-technological-isomorphism]] — Empirical case study of AI integration in fifth-grade mathematics
- [[culturally-aware-aied-community-learning]] — Community-based AIED framework for cultural contexts- [[aied-carbon-footprint-reporting]] — Environmental cost reporting as an evidence dimension for AIED deployment
