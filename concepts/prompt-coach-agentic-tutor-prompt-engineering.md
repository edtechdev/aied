---
title: "Prompt Coach: An Empirical Evaluation of an Agentic Tutor for Learning Prompt Engineering in Software Development"
created: 2026-07-08
updated: 2026-07-08
type: concept
tags: [llm, intelligent-tutoring, feedback-loop, scaffolding, cs-education, formative-assessment, professional-training]
sources: [raw/papers/2607.06074.md]
confidence: high
---

# Prompt Coach: An Empirical Evaluation of an Agentic Tutor for Learning Prompt Engineering in Software Development

**Rohit Mehra et al. (2026)** — IBM Research / International Institute of Information Technology. arXiv.

📄 [Full text (arXiv)](https://arxiv.org/abs/2607.06074)

Prompt engineering is a critical yet undertaught skill for software developers, poorly served by traditional instruction because of its evolving, interactive, context-dependent nature. The authors introduce **Prompt Coach (PC)**, an agentic tutor embedded in-flow within a developer's IDE that teaches prompt crafting through Socratic guidance. PC scores prompt quality across multiple dimensions and surfaces targeted questions that guide self-correction, grounded in the developer's codebase and the target LLM's behavior. An early empirical study with 15 professional developers showed statistically significant improvements after a single 60-minute session, with the largest gains on dimensions developers commonly overlook, plus strong trust and adoption readiness.

## Key Contributions
- **In-flow Socratic tutoring:** PC delivers [[scaffolding]] and [[feedback-loop]] support directly inside the IDE, contextualized to the developer's code and the target model.
- **Empirical gains:** Statistically significant prompt-quality improvement after one 60-minute session, aligning with findings in [[prompt-based-programming-lesson]] about prompt fluency as a learnable skill.
- **Self-correction emphasis:** Targeted Socratic questions steer developers to repair their own prompts rather than receive answers, consistent with [[formative-assessment]] practice.
- **Professional context:** Extends [[cs-education]] and [[professional-training]] beyond novices to working developers.
- **Trust and adoption:** Participants reported high trust and unanimous belief PC improved their skills, contributing to [[ai-literacy]] for practitioners.

## Related Pages
- [[prompt-based-programming-lesson]] — Teaching prompt construction as a programming skill
- [[scaffolding]] — Socratic guidance and in-flow support
- [[feedback-loop]] — Prompt-quality scoring and targeted correction
- [[cs-education]] — Computing education and developer skills
- [[formative-assessment]] — Self-correction oriented tutoring

## Citation
**APA:** Mehra, R., Singi, K., Kaulgud, V., Sharma, V. S., & Choudhury, S. G. (2026). *Prompt Coach: An Empirical Evaluation of an Agentic Tutor for Learning Prompt Engineering in Software Development*. arXiv:2607.06074.
