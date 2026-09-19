---
title: Bridging Artificial Intelligence and Power Systems Education Using a Hands-On Executable Framework
created: "2026-08-04T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [ai-education, curriculum-design]
technology: [llm, rag, open-source]
research_method: [survey]
discipline: [stem education]
sources: ['raw/papers/2608.02599.md']
confidence: high
audience: [instructors, curriculum designers]
level: [higher ed]
stakeholders: [professional-training]
---

> **Synthesis:** **Junjie Yin, Buxin She, Xinyu Feng, Fangxing Li** — arXiv (cs.AI / eess.SY) preprint, 2026 (University of Tennessee, IEEE PES).

## Synthesis

Community survey of [[research-methods-aied|researchers]] and practitioners: 92% report at least one barrier before running an [[ai-education|AI]] model and 94% want a power-specific hands-on course.

Framework is a progressive difficulty ladder mapping core AI concepts onto representative power-system tasks: DNN function approximation/load-curve fitting, domain-coupled CNN power-flow surrogate (5-bus), DNN-assisted optimization, DRL for battery storage control, and PINNs for the swing equation.

All modules are Jupyter notebooks running locally or on Google Colab, delivered through an [[open-source|IEEE online course]] and IEEE PES webinar series.

Webinar drew 590+ live attendees (top-10 most-attended IEEE PES webinars) and 344+ repository visits within two weeks.

Argues for engineering-grounded AI (EGAI): AI workflows should follow established engineering and power-system domain rules rather than acting as task-agnostic black boxes, supporting [[professional-training|professional training]] and [[curriculum-design|curriculum design]].

## What this means for practice

- **Instructors.** Structure AI instruction as a difficulty ladder — function approximation, surrogate modeling, optimization, control, physics-informed learning — so each method arrives attached to a power-system task rather than a generic dataset.
- **Instructors.** Have students run and modify the notebooks locally or in Colab instead of reading them, addressing the barrier the community survey found most binding: 92 percent of the 52 respondents reported at least one obstacle, chiefly getting a model to start (48.1 percent) and hardware limits.
- **Designers.** Pair every model with the domain rule it serves — a 5-bus power-flow surrogate, DRL for battery storage control, a PINN for the swing equation — so the engineering constraint in [[curriculum-design|curriculum design]] stays visible and verifiable.
- **Faculty developers.** Reuse the webinar-plus-notebook format for [[professional-training|professional training]]; 590 or more live attendees and 344 or more repository visits within two weeks indicate the format reaches and engages practitioners.

## Limitations

- The modules are stated to be intentionally lightweight, with small demonstration settings chosen for speed rather than realism, so they teach workflow patterns rather than scale to realistic grid systems.
- No formal classroom evaluation of learning outcomes was conducted; the evidence is a targeted community survey, webinar attendance, and repository-visit counts, and the authors name a controlled classroom study as future work.
- The motivation survey rests on 52 self-selected respondents from the IEEE power and energy community, so the reported barrier rates describe that professional population rather than educators broadly.

## Connected Concepts

- [[open-source]]
- [[cs-education]]
- [[curriculum-design]]
- [[stem-education]]
- [[professional-training]]
## Connected Articles

- [[drawedumath-vlm-struggling-students-2026]] — Educational VLM Evaluation
- [[vocabulary-difficulty-prediction]] — What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
- [[structrag-diagram-reasoning-ai-tutoring]] — Advancing diagram-based reasoning in AI tutoring systems: a structural approach for STEM education
- [[cogtax-cognitive-taxonomy]] — CogTax: A Four-Level Cognitive Taxonomy for Command-Line Computing Education
- [[teacher-control-ai-generation-math-visuals]] — When Should Teachers Control AI Generation for Mathematics Visuals?
- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): An Experience Report on LLM Integration in CS2

## Citation

Junjie Yin, Buxin She, Xinyu Feng, Fangxing Li (2026). [Bridging Artificial Intelligence and Power Systems Education Using a Hands-On Executable Framework](https://arxiv.org/abs/2608.02599). arXiv (cs.AI / eess.SY) preprint.
