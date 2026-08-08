---
title: AI Peer Feedback Systems
created: 2026-05-07
updated: 2026-05-07
type: concept
tags: [edtech-platform, feedback-loop, formative-assessment, teacher-role, higher-ed, learning-analytics, llm]
confidence: medium
sources: [raw/papers/becerra-aicofe-feedback-2026.md]
---

# AI Peer Feedback Systems

> Student peer feedback is often superficial or inconsistent. **AICoFe** (AI-based Collaborative Feedback) uses a multi-LLM pipeline (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) to generate diverse perspectives on student presentations, but the critical design feature is **teacher-in-the-loop mediation**—educators curate and compose final feedback before delivery.^[[becerra-aicofe-feedback-2026]]

## The Problem

Peer feedback develops critical reflection and evaluative judgment, yet:
- Students have limited **feedback literacy**
- Generated comments are often superficial or lack actionability
- Quality is inconsistent across evaluators

AI-generated feedback alone risks replacing shallow peer comments with shallow AI comments. AICoFe addresses this by treating AI as a **draft generator**, not a final deliverer.

## System Architecture

**Four components:**^[[becerra-aicofe-feedback-2026]]

| Module | Purpose |
|--------|---------|
| **Visualization** | Role-specific dashboards (student, teacher, evaluator) |
| **Management** | Hybrid SQL + MongoDB data infrastructure |
| **Feedback Generation** | Multi-LLM pipeline synthesizing rubric scores + qualitative comments |
| **Recording** | Video/audio capture of student presentations (opt-in, GDPR-compliant) |

## The Multi-LLM Pipeline

Three independently fine-tuned models receive:
- Quantitative rubric scores
- Validated qualitative observations from evaluators
- Rubric level descriptions
- Instructional materials for the assessed skill

Each model produces an independent draft. The diversity of models is intentional—GPT, Gemini, and Llama have different stylistic biases and blind spots; teacher curation selects the best fragments.^[[becerra-aicofe-feedback-2026]]

## Teacher-in-the-Loop Mediation

The Teacher Dashboard is the central mediation interface:

- **Inspect** scores, comments, and videos from all evaluators
- **Review** drafts from all three LLMs
- **Compose** final feedback by selecting individual sentences or paragraphs from AI outputs
- **Visual legend** shows proportion of content contributed by each LLM
- **Track** extent of teacher modification/curation
- **Audio review** via text-to-speech for long comments

This preserves pedagogical authority while reducing teacher workload.^[[becerra-aicofe-feedback-2026]]

## Transparency & Analytics

- **Feedback history log:** Every sent feedback entry displays LLM contribution proportions and teacher modification levels
- **Dual purpose:** Supports (1) teacher reflection on curation patterns and (2) large-scale analysis of how teacher mediation shapes feedback quality

## Student Experience

- View video recordings of own presentations
- Complete self-evaluations using the same rubric
- See visual comparisons of self vs. external evaluations
- Receive **teacher-curated** (not raw AI) feedback
- Rate perceived agreement and usefulness^[[becerra-aicofe-feedback-2026]]

## Relationship to Human-in-the-Loop AI

AICoFe represents a **human-centered AI** paradigm for education: AI augments rather than replaces human judgment. This contrasts with fully automated grading or feedback systems that remove the teacher from the loop. The key insight is that **pedagogical authority resides with the teacher**, and AI's role is to expand the range and depth of actionable comments they can craft.^[[becerra-aicofe-feedback-2026]]

## Citation

Summer, V.A.A.L.S.A., |, M.P., |, M.R.L.A.D.F., |, M.H.D.I.M., |, G.M.M.P.F.P.F.S., |, M.V.C.O.S.P., 3.1, M.U.G.G.F.L., & providers, P.A.D.A.B.T.T.C.L. (2026). [*AI Peer Feedback Systems*](https://arxiv.org/abs/2605.04740)

## Related Pages
- [[mindcopilot-llm-co-writing]] — Hierarchical acceptance rates offer template for evaluating collaborative feedback
- [[moodle-ai-tutoring-deep-learning]] — Shares strategy of embedding AI tools into existing educational workflows
- [[multimodal-ai-feedback-learning]] — Zhao et al.: extends feedback systems to multimodal delivery with equivalent learning outcomes
- [[sequenced-ai-feedback-learning]] — Cao et al. RCT: feedback sequencing matters — layered hints can induce gaming behavior
- [[psyscore-essay-scoring-zpd-feedback]] -- PsyScore: A Psychometrically-Aware Framework for Trait-Adaptive Essay Scoring and ZPD-Scaffolded Feedback
- [[student-perception-ai-use-collaboration]] -- Misalignment in partners' beliefs about each other's AI use early in a project predicts lower final scores — especially for low-performing teams — and face-to-face sessions don't fix it.
- [[aicode-collaborative-feedback-system]] — Multi-LLM deployed system with teacher-in-the-loop- [[llm-reasoning-traces-metacognition]] — AI feedback traces may inflate confidence without improving performance
- [[humanlike-ai-collaborative-writing]] — Social dynamics of humanlike AI in writing feedback
- [[codify-socratic-programming-tutor]] — Codify complements feedback systems with Socratic discovery approach
