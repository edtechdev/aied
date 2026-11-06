---
title: "Today's Work, Tomorrow's Workforce: Incentivizing Learning in AI-Assisted Work"
published: "2026-11-06"
created: "2026-11-06T09:05:00-05:00"
updated: "2026-11-06T09:05:00-05:00"
type: article
sources: ['raw/papers/diener-incentivizing-learning-ai-assisted-work-2026.md']
source_url: "https://arxiv.org/abs/2611.06346"
confidence: high
page_kind: [framework]
research_method: [theoretical analysis]
level: [adult learning]
audience: [researchers, policymakers, educational technology developers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4-flash-0731
    role: drafting
    date: "2026-11-06"
    agent: hermes-agent
source_depth: full text
pedagogy: [motivation, professional-training]
technology: [human-in-the-loop-ai]
foundations: [cognitive-offloading, agency]
---

> **Synthesis:** Diener, Hendriks, Spitzer, Satzger, Holstein, and Sun (2026) model a hidden cost of AI assistance: the effort that AI saves is the very effort through which workers learn. They extend an accept-or-solve model to a sequence of tasks in which skill evolves through independent practice and reliance on AI, comparing myopic workers, who maximize immediate utility, with strategic workers, who also value future skills. The model shows that novices can become trapped at low skill and experts may lose skill even as AI-assisted outcome accuracy stays high, while strategic workers may solve independently even when the AI is more accurate because of the future value of their skill. The authors then study incentives for correct independent work, characterizing the payments needed to encourage skill acquisition and retention, and they reframe [[cognitive-offloading|reliance]] as an organizational design problem in [[professional-training|training]] in which organizations pay for the practice that AI no longer provides.

## Key Findings
1. **Accepting AI saves effort but displaces practice.** Accepting submits the AI's answer without effort; only solving independently lets the worker acquire skill and prevent decay.
2. **Strategic workers may solve even when AI is more accurate.** Valuing future skill can make independent work rational below the AI's accuracy, which the model labels underreliance.
3. **Novices can become trapped at low skill.** Anna at .40 and .50 accepts with the competent AI (PAI = .62), and output accuracy stays at .62.
4. **Experts can lose skill with performance hidden.** Sam (.80) accepts every task because his .03 advantage over the near-expert AI (.77) falls short of the .05 effort cost; skill falls a level after 100 accepted tasks.
5. **Learning incentives close the accuracy gap.** θmin(p) = [λ + γ(PAI − p)]+/p compensates effort and forgone answers; Anna needs .27 at .40, .17 at .50, and .07 at .60.

## AI assistance displaces the practice that builds skill

At work, people develop skills through experience: novices acquire skill by completing tasks, while experts retain theirs through continued practice. AI assistance offers workers a choice between solving independently and accepting the AI's answers. Relying on AI saves immediate effort, but that effort is the very effort through which workers learn; the authors cite novices who relied on AI while learning a new programming library acquiring less skill, and endoscopists who detected fewer adenomas once AI was withdrawn. Workers also need skill to oversee the AI itself — to detect errors and take over when it fails — which the EU AI Act legally requires for high-risk systems. This makes the accept-or-solve choice a [[human-in-the-loop-ai|human-in-the-loop]] decision whose consequences unfold over many tasks.

## The accept-or-solve model with evolving skill

The authors extend the accept-or-solve model of Bansal et al. from a single task to a sequence, representing skill as a finite set of ordered levels. When accepting, the worker submits the AI's answer, correct with probability PAI, and skill decays one level with probability ϕd; when solving, the worker spends effort λ, answers correctly with probability p, and rises one level with probability ϕu. A myopic worker maximizes current-task utility, solving only when the accuracy advantage outweighs the effort cost, while a strategic worker discounts future utility and weighs today's effort against future skill. Anna the novice finds bugs in 40% of tasks and Sam the expert in 80%, on a grid of .40 to .80 with ϕu = .02 and ϕd = .01.

## Traps and erosion at high outcome accuracy

Even strategic behavior does not prevent the low-skill trap or expert deskilling. For every finite horizon there is a range of AI accuracies in which independent work would pay at the top level yet a novice accepts; expert deskilling starts as PAI > aN − λ/γ, whatever the horizon. output accuracy stays at the AI.s level while unaided accuracy declines, so the erosion can be invisible: appropriate reliance scores a novice's acceptances as appropriate. Sam is still at .80 with probability one half after 69 tasks while output accuracy stays at .77. The authors call for extending appropriate reliance to account for how decisions change future skill, and for evaluations that track [[cognitive-offloading|unaided accuracy]] alongside output accuracy.

## Incentives for learning

Because strategic behavior alone does not guarantee skill acquisition or retention, the paper studies incentives paid for correct independent answers. The effort incentive of Holstein et al. — paying λ/p — restores appropriate reliance, since a myopic worker solves whenever p ≥ PAI, but it does not induce learning: a worker less accurate than the AI never starts to practice. The derived learning incentive θmin(p) also compensates the accuracy gap, so novices begin to practice; it is largest for novices and shrinks as skill is acquired. A target of .60 bridges Anna at expected spending of 25.50, after which independent work is self-sustaining, while retaining a nonpaying level needs continuous incentives; keeping Sam at .80 costs .02 per task versus .04 for .70.

## What this means for practice

- **Instructors.** In AI-assisted learning and training, schedule independent practice deliberately: the effort AI saves is the effort through which learners acquire skill.
- **Software developers.** Build human-in-the-loop systems that reward correct independent work.
- **Policymakers.** Treat oversight as retention: the EU AI Act requires overseers to have competence and support, but leaves open how skill is retained once AI-assisted work stops exercising it.
- **Senior practitioners.** Track unaided accuracy alongside output accuracy; output-only evaluations can miss decay.

## Limitations

- The work is theoretical — no human participants, no deployed system — and its examples use illustrative values.
- The examples do not establish how often the low-skill trap occurs, how long learning takes, or which payments workers would require.
- Skill is acquired only through independent solving; if workers also learn through engaged AI use, the trap may weaken.
- Acquiring a target assumes indefinitely continuing tasks, so results do not guarantee reaching it within a fixed period.
- The model analyzes one worker and measures the organization only through incentive spending.

## Citation

Diener, M., Hendriks, D., Spitzer, P., Satzger, G., Holstein, J., & Sun, W. (2026). [*Today's Work, Tomorrow's Workforce: Incentivizing Learning in AI-Assisted Work*](https://arxiv.org/abs/2611.06346). arXiv preprint, arXiv:2611.06346.
