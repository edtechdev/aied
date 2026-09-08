---
title: "What Platform Scores Miss: Multidimensional Evaluation of AI Teaching Agents in Medical Education"
created: "2026-09-08T02:39:20-04:00"
updated: "2026-09-08T02:39:20-04:00"
type: article
tags: [medical-education, pedagogical-agent, ai-ed-evaluation, assessment, intelligent-tutoring, generative-ai, llm, simulation]
sources: ['raw/papers/zhang-platform-scores-miss-ai-teaching-agents-2026.md']
research_method: [quantitative, design and evaluation study]
discipline: [medical education]
audience: [medical educators, researchers, assessment designers, edtech designers]
level: [higher ed]
category: [evaluation]
confidence: high
---

Eight AI teaching agents covering an endocrinology curriculum were deployed across four role-play paradigms (patient, student, expert, family) on a commercial platform. Twenty-two medical students generated 167 dialogues scored both by the platform's undisclosed algorithm and by an independently applied, expert-validated 8-dimension teaching-quality rubric (100 points). Platform and rubric rankings diverged for most agents — the agent ranked third by the platform ranked last on rubric quality, and the fourth-ranked rose to first — indicating platform scores index student performance, not agent teaching quality. Agents differed most on knowledge dimensions and shared a weakness in adaptive difficulty calibration; an empathic agent attained high role-play quality yet the lowest knowledge coverage.

**Relevance to [[ai-education|AI in Education]]:** This is a direct demonstration that the metric an educator happens to have at hand can mislead which [[pedagogical-agent|AI teaching agents]] get adopted or refined. It contributes a transparent, reusable evaluation framework and cautions against treating [[ai-ed-evaluation|platform-generated scores]] as proxies for teaching quality, connecting to [[assessment-validity]] and LLM-as-evaluator concerns.

## Key Findings

- **Platform scores diverge from rubric-measured teaching quality.** Agent rankings reversed for most agents (third-by-platform ranked last on rubric quality; fourth-ranked rose to first). The two capture different constructs — student performance during the interaction versus the agent's own teaching behavior — and are complementary, not interchangeable.
- **An 8-dimension rubric as a transparent external standard.** Dimensions weighted by teaching function: medical knowledge accuracy and pedagogical guidance (20 pts each), knowledge coverage and role-play quality (15), adaptive difficulty and medical safety (10), student engagement and feedback quality (5). Validated against multiple LLM evaluators and a blinded medical-education expert (total-score ICC = 0.51; r = 0.61).
- **Agents differ mainly in knowledge, not role performance.** Between-agent variation was largest on knowledge coverage (CV=27.3%) and knowledge accuracy (18.5%), and smallest on role-play quality (5.7%). Adaptive difficulty calibration was a shared weakness across agents.
- **Empathy did not ensure knowledge coverage.** An agent deliberately revised to strengthen an empathic family persona attained among the highest role-play quality yet the lowest knowledge coverage and total score — affective and cognitive teaching functions do not move together.
- **LLM-as-evaluator requires calibration.** Three LLMs (Claude, DeepSeek, Qwen) agreed on agent ranking (rho=0.64-0.71) but differed markedly in leniency and discrimination; some were too lenient to discriminate (Qwen, DeepSeek ceiling effects). Automated scoring aligned with expert judgment on cognitive-process dimensions but poorly on subjective and affective ones.
- **No detectable gender effect** (male vs female students), though the analysis was underpowered and should not be read as evidence of equitable delivery.

## Connected Concepts

- [[medical-education]]
- [[pedagogical-agent]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[assessment]]
- [[simulation]]
- [[generative-ai]]
- [[llm]]
- [[assessment-validity]]

## Connected Articles

- [[jiang-ai-powered-simulation-nursing-education-2026]] — AI simulation in nursing education
- [[llm-detecting-llm-generated-content-education]] — LLMs evaluating generated content
- [[genai-scenario-based-healthcare-education-2026]] — GenAI in scenario-based healthcare education
- [[pedagogy-ai-mistakes]] — Pedagogical quality of AI output
- [[ai-learning-tools-engineering-education-needs]] — Needs- and attention-aware AI learning tools

## Citation

Zhang, H., Qu, L., Zheng, J., Xiong, Y., Bai, H., Ji, R., Liu, G., Chen, W., Cheng, Z., Chen, Y., & Yang, C. (2026). [What Platform Scores Miss: Multidimensional Evaluation of AI Teaching Agents in Medical Education](https://doi.org/10.2196/96819). *JMIR Medical Education, 12*, e96819.
