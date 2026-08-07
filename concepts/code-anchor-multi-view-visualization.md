---
title: "Code as Anchor, Memory and Metaphor as Support: Learner Experiences with Multi-View Visualizations"
created: 2026-06-19
updated: 2026-06-19
type: concept
tags: [cs-education, student-experience, scaffolding, active-learning, feedback-loop]
sources: [raw/papers/2606.19570.md]
confidence: high
---

# Code as Anchor, Memory and Metaphor as Support: Learner Experiences with Multi-View Visualizations

**Naaz Sibia, Jessica Wen, Amber Richardson, Yashika Jain, Khushi Malik, Bogdan Simion, Carolina Nobre, Angela Zavaleta Bernuy, Andrew Petersen, Michael Liut** (2026). ICER 2026
📄 [Full text (arXiv)](https://arxiv.org/abs/2606.19570)

## Overview

Students spent ~47% of gaze time on code despite visual scaffolds. Three factors shape selective engagement with multi-representational tools: Agency (students want control over cognitive effort), Representational Fit (same design feels helpful to some, overwhelming to others), and Legitimacy (metaphorical scaffolds perceived as childish at university level).

## Key Contributions

### Paper 1: Code as Anchor, Memory and Metaphor as Support: Learner Experiences with Multi-View Visualizations
- **Problem:** Students often ignore well-designed program visualizations; existing cognitive design principles don't explain learner engagement/disengagement.
- **Method:** Within-subjects study (N=19 undergraduates, post-CS1/CS2) using think-aloud, interviews, and webcam gaze tracking with a multi-representational probe.
- **Gaze finding:** ~47% of time on code despite visual scaffolds; students without prior experience anchored more in code and ignored metaphor views.
- **Three engagement themes:** Agency (control over cognitive effort), Representational Fit (wide individual variation), Legitimacy (metaphors seen as childish at university level).
- **Implication:** [[multi-representational-tools]] need attention to affective and social factors, not just cognitive design.

### Paper 2: Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring
- **Problem:** Static-prompt LLM tutoring systems fail to adapt across diverse academic disciplines.
- **Solution:** Subject-aware prompt routing using 14 pedagogical features extracted from transcripts; contextual bandit formulation with 20 pedagogical prompts.
- **Simulation:** Router achieves 0.694 vs 0.647/0.64 static baselines (p<0.001).
- **Real-world A/B test:** N=656 conversations, 359 Dutch high-school students. Stochastic router achieves 28.1% exercise conversion rate vs 19.6% baseline.
- **Implication:** [[adaptive-prompt-routing]] with stochastic sampling improves both efficiency and engagement in real-world tutoring.

### Paper 3: Confidence-Aware Automated Assessment of Student-Drawn Scientific Models
- **Problem:** Automated scoring of student-drawn scientific models lacks reliability indicators, leaving teachers unable to decide when to trust scores.
- **Method:** Vision Transformer (ViT) with LoRA + confidence-aware framework using test-time perturbations.
- **Dataset:** Six NGSS-aligned middle school assessment items (477-816 responses each, scored Beginning/Developing/Proficient).
- **Key innovation:** Response-level confidence enables selective automation — high-confidence auto-scored, uncertain cases deferred for human review.
- **Implication:** [[confidence-aware-ai-assessment]] enables practical triage between automation and human oversight in educational assessment.

### Paper 4: PsyScore: A Psychometrically-Aware Framework for Trait-Adaptive Essay Scoring and ZPD-Scaffolded Feedback
- **Problem:** AES systems treat scoring and feedback as separate; neural scoring lacks interpretability; LLM feedback is ability-agnostic.
- **Solution:** Unified psychometric latent space (θ) via Neural GPCM Trait-Adaptive Scorer.
- **Scoring performance:** QWK 0.747 (besting prior SOTA 0.722); 1st in 6/8 ASAP++ prompts and 10/11 trait dimensions.
- **Feedback quality:** ZPD-based strategy mapping (Explicit Correction for θ<-1, Scaffolding for -1<θ<1, Socratic for θ>1). Multi-agent fusion from Llama-4-Scout, Qwen3-235B, GPT-4o.
- **Evaluation:** >90% win rate in Actionability vs GPT-4o, Llama-4-Scout, Qwen3.
- **Implication:** [[psychometrically-aware-ai]] can unify assessment and instruction, transforming automated essay scoring from summative to formative.

## Related Pages
- [[cs-education]]
- [[student-experience]]
- [[scaffolding]]
- [[active-learning]]
- [[feedback-loop]]
- [[personalized-learning]]

## Citation

Naaz Sibia, Jessica Wen, Amber Richardson, Yashika Jain, Khushi Malik, Bogdan Simion, Carolina Nobre, Angela Zavaleta Bernuy, Andrew Petersen, Michael Liut (2026). *Code as Anchor, Memory and Metaphor as Support: Learner Experiences with Multi-View Visualizations*. arXiv:2606.19570. ICER 2026.
