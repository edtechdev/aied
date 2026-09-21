---
title: "Designing Against Deskilling: Metacognitive Feedback Reduces Cognitive Offloading to LLM Assistants"
created: "2026-09-21T09:21:46-04:00"
updated: "2026-09-21T09:21:46-04:00"
type: article
sources: ['raw/papers/metacognitive-feedback-anti-deskilling-offloading-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
level: [higher ed]
audience: [instructors, software developers, researchers]
foundations: [cognitive-offloading]
pedagogy: [metacognition, self-regulated-learning]
technology: [llm, generative-ai]
assessment: [learning-gains]
methods: [rct]
---

> **Synthesis:** A preregistered online experiment with 704 participants tested two ways of reducing [[cognitive-offloading]] to an [[llm|LLM]] assistant without restricting access to it. [[metacognition|Metacognitive]] feedback, which made the consequences of offloading explicit, reduced answer offloading (OR = 0.47) and raised the odds of answering a later unaided test item correctly (OR = 1.51); an effort-based reward changed neither outcome. Because a ten-percentage-point rise in offloading was associated with 32% lower odds of unaided success, the feedback intervention worked on the mechanism that matters, and it did so as a design choice rather than a rule.

## Key Findings
1. **Metacognitive feedback reduced offloading and improved unaided performance.** Odds of offloading an answer fell to OR = 0.47 (95% CI [0.22, 1.00], p = .026) and odds of answering a later unaided test item correctly rose to OR = 1.51 (95% CI [0.98, 2.33], p = .030).
2. **The effort-based reward changed neither outcome.** Offloading under the reward condition was not significantly lower (OR = 0.66, 95% CI [0.31, 1.40], p = .139) and unaided test performance was not higher.
3. **Offloading tracked deskilling dose-responsively.** A 10-percentage-point increase in offloaded learning items was associated with 32% lower odds of answering a test item correctly (OR = 0.68, 95% CI [0.62, 0.74], p < .001).
4. **Offloading momentum is real.** After offloading one item, participants offloaded the next in 69.7% of cases without metacognitive feedback and 55.9% with it.
5. **Nobody was worse off for using AI.** Participants in the AI-only condition did not have significantly lower odds of answering a final-test item correctly than the no-AI control (OR = 0.80, 95% CI [0.42, 1.51], p = .244).
6. **The intervention changed how much was offloaded, not whether AI was used.** Both conditions used the assistant at nearly identical rates (66.7% vs. 68.6% used it at least once; 38.2% vs. 39.4% requested at least one complete answer).
7. **The design was a preregistered 2×2 plus control.** 704 UK participants on Prolific practiced fraction arithmetic with an assistant that returned solutions only on explicit request, then took an unaided test.

## Metacognitive feedback as a design choice, not a restriction
The paper's contribution is the comparison between two interventions that both leave the assistant available. Metacognitive feedback told participants what offloading implies for their own learning before they chose; the reward paid them for using less extensive assistance. Only the feedback moved behavior, and it moved the outcome that matters, unaided [[problem-solving|problem solving]] on the final test. That pattern is consistent with [[self-regulated-learning]] accounts, in which the learner needs a reason to monitor their own use rather than an incentive to ration it, and it connects to the broader finding that making the costs of [[cognitive-offloading|assistance]] salient changes use without producing refusal.

## Why the incentive failed
The reward condition requested help on 77.1% as many learning items as the AI-only condition, yet its estimates never reached significance, and the authors report no evidence that the reward affected either preregistered outcome. The likely reading is that the reward competed with the immediate value of getting the answer correct during practice. For tool designers, the practical lesson is that a point system bolted onto an AI assistant is not a substitute for telling learners, in the moment of choice, what the shortcut costs them — an argument that lands on the [[feedback]] and [[motivation]] literature rather than on incentive design.

## Offloading momentum
The momentum result is the most actionable number in the paper: once a participant offloaded one item, they offloaded the next roughly seven times in ten without metacognitive feedback, and a little over half the time with it. Offloading therefore behaves like a sticky behavior pattern within a session rather than an independent decision per item, which suggests that interventions aimed at the first few items of a practice sequence will have outsized effect. It also means measurement at a single point in a session will understate or overstate a learner's typical reliance.

## What this means for practice
- **Instructors.** Put the consequence in front of the choice: a short statement of what asking the assistant for a full solution does to later unaided performance reduced offloading in this experiment, and it does not require banning the tool.
- **Software developers.** Treat the first items of a practice sequence as the intervention point, since offloading compounds once it starts, and prefer in-context messages about learning consequences over reward mechanics.
- **Researchers.** Report offloading and unaided performance together; a study that measures only AI use or only test scores cannot see the trade-off this design isolates.

## Limitations
- Participants were 704 UK Prolific adults meeting strict approval-rate and first-language criteria, practicing fraction arithmetic, so both the task and the population are narrower than classroom learners.
- The intervention was tested in a single short session with one immediate unaided test; no delayed retention or transfer measure was collected.
- The reward manipulation produced a directionally consistent but non-significant effect, so it is not evidence that incentives cannot work, only that this one did not.
- Outcomes are single-item offloading and test decisions aggregated to proportions, measured online without supervision of how the assistant was actually consulted.

## Connected Concepts
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[llm]]
- [[generative-ai]]
- [[learning-gains]]
- [[motivation]]
- [[desirable-difficulties]]
- [[student-ai-interaction]]

## Connected Articles
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — Metacognitive Training Facilitates Optimal Cognitive Offloading
- [[cognitive-offloading-metacognitive-review-2026]] — Meta-Cognitive Insights into Cognitive Offloading
- [[student-cognitive-offloading-ai-higher-ed-2026]] — Patterns of Student Cognitive Offloading to AI in Higher Education
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — PAUSE: A Privacy-Preserving Self-Reflection Tool for AI-Associated Cognitive Offloading
- [[nesnin-cognitive-offloading-ai-students-2026]] — Cognitive Offloading in the Age of AI
- [[thinking-with-ai-reasoning-without-it-2026]] — Thinking with AI, reasoning without it
- [[cognitive-offloading-speedup-illusion]] — Cognitive offloading and the speedup illusion in human-AI interaction
- [[efficiency-gain-illusion-ai-overreliance]] — The efficiency gain illusion and AI over-reliance

## Citation
Maier, S., Schwabe, K., Schneider, M., & Feuerriegel, S. (2026). [Designing Against Deskilling: Metacognitive Feedback Reduces Cognitive Offloading to LLM Assistants](https://arxiv.org/abs/2609.20143). arXiv:2609.20143.
