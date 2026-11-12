---
title: "Access Timing as Scaffolding: A Reinforcement Learning Approach to GenAI in Education"
created: "2026-11-11T07:37:53-05:00"
updated: "2026-11-11T07:53:16-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/rotter-access-timing-scaffolding-2026.md']
source_url: "https://arxiv.org/abs/2605.15850"
source_depth: full text
confidence: high
foundations: [cognitive-offloading]
pedagogy: [scaffolding, productive-failure, metacognition, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, adaptive-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Rotter and colleagues built a [[reinforcement-learning]] agent that decides, question by question, when a student may open an off-the-shelf [[llm]], then tested it against unrestricted and fully withheld access in a controlled lab study with 105 university students in Barcelona. Timed access scored 5.11 on an unassisted post-test against 4.03 with unrestricted access (t(71) = 2.51, p = .014, d = 0.59) and matched full restriction at 5.25. It also produced more accurate self-assessment (5.95 against 5.17, p = .023) without any explicit prompts to reflect. [[self-report-measures|Self-reported]] metacognitive awareness did not move. The study treats access timing itself as an implicit [[scaffolding|scaffold]]: a low-cost alternative to bans or open access that keeps some [[productive-failure|productive struggle]] while limiting [[cognitive-offloading|cognitive offloading]].

## Key Findings

1. **Timed access beat unrestricted access.** The RL condition scored 5.11 (SD 1.85) on the unassisted post-test against 4.03 (1.83) for Always, t(71) = 2.51, p = .014, d = 0.59.
2. **It matched full restriction.** Against Never, which scored 5.25 (2.00) to the RL condition's 5.11, the difference was t(67) = -0.30, p = .762, d = -0.07. The authors therefore partially accept their first hypothesis.
3. **[[self-assessment|Self-assessment accuracy]] moved the same way.** Metacognitive accuracy was 5.95 (1.51) in RL against 5.17 (1.36) in Always, t(71) = 2.32, p = .023, d = 0.54, and 5.84 (1.37) in Never, t(67) = 0.29, p = .769, d = 0.07. The second hypothesis is also partially accepted.
4. **Declared metacognitive awareness did not move.** On the MAI-AI, the effect of condition was not significant for overall gain, F(2, 87) = 0.86, p = .425, ηp² = 0.02, for knowledge of cognition, p = .678, or for regulation of cognition, p = .427. The third hypothesis is rejected.
5. **The agent rationed access rather than enabling it.** Students in the RL condition made 2.46 (3.20) AI requests on average against 11.25 (6.42) in Always, and 43.2% of the RL group never used [[generative-ai|GenAI]] at all, while every Always participant used it at least once.
6. **Exploratory error and time advantages were fragile.** Against Never, RL participants made fewer mistakes per question, t(67) = 2.05, p = .047, d = 0.51, and took marginally less time per question, t(67) = 1.94, p = .058, d = 0.47; both differences lost significance after controlling for gender (b = 0.46, p = .513 and b = 2.74, p = .769).
7. **Students described both the mechanism and the loophole.** RL participants valued access after failing; Always participants reported feeling "lazier" and "more dependent"; one RL participant said they were tempted to answer wrong on purpose to unlock the AI sooner.

## What the study did

The design was a 3x1 between-subjects experiment with policy type as the independent variable: an RL agent decides when GenAI becomes available, the learner is never allowed to use it, or the learner is always allowed to use it. The final sample was 105 university students (Always n = 36, RL n = 37, Never n = 32), recruited in Barcelona and run in nine workshop sessions of 8 to 21 participants (mean 12.33, SD 5.07). Sessions lasted between 34.81 and 74.08 minutes (mean 54.39, SD 6.24).

Participants worked through a custom [[intelligent-tutoring|intelligent tutoring system]] on text comprehension, with three tasks on social media and self-image. Each task paired a text of roughly 650 words with three multiple-choice questions that had two or three correct answers, and a correct answer unlocked the next question so that progress was strictly linear. After the three tasks, a distractor drawing activity occupied the retention interval, and then participants took an unassisted test of nine similar questions, one of which was later dropped for an error, leaving a score range of 0 to 8. For each question they also judged whether they had answered correctly, which yielded a metacognitive accuracy score from 0 to 8. The MAI-AI, a 19-item instrument with knowledge and regulation subscales, was given before and after.

The GenAI available inside the system was Mistral 3 14B 2512, reached through the OpenRouter API. Participants in the RL and Always conditions were strongly encouraged at the start to use it in any way they found helpful. Assignment to condition was by session, not by individual, to keep completion times comparable.

## How the agent decided when to allow access

The agent saw four state variables at each decision: the number of failed attempts on the current question, time on the current task, a record of whether GenAI had been used in each previous task, and an aggregate of failed attempts standing in for current understanding. Its action space had two options, allow AI use or continue denying it, and access, once granted, remained open for the rest of that task.

The reward was a sum of five pedagogically labeled terms. Task completion earned a large positive reward and each step carried a small time penalty. A [[metacognition]] term rewarded alternating between AI and no-AI across tasks. A productive-failure term penalized allowing AI at zero failed attempts, rewarded it after one or two failures in proportion to time on task, and used a separate weight for more than two. A cognitive-load term penalized allowing AI before a time threshold early in the task. The weights were tuned through offline simulation and a second pilot with 7 participants.

Training used proximal policy optimization against [[simulating-students|simulated students]] from [[knowledge-tracing|Bayesian knowledge tracing]], with parameters drawn from a truncated normal distribution centered on estimates from a pilot of 9 participants. The authors report that PPO outperformed DQN and A2C in this setting. The resulting policy is the treatment: it decides when the interface unlocks the model, and the paper evaluates the effect of that policy on later unassisted performance.

## What this means for practice

- **Instructors:** a rule such as "AI unlocks after two genuine attempts" reproduces the logic of the agent without any infrastructure, and it outperformed leaving the tool open in this study. Tell students the rule in advance, because some will otherwise treat failed attempts as a currency.
- **Designers:** the decision rests on signals a tutor already logs — failed attempts, elapsed time and prior AI use in the session — so an access gate is cheap to add to an existing tutor or quiz.
- **Administrators:** the result argues against both blanket bans and unrestricted defaults. Timing is a middle policy that needs no custom model and works with off-the-shelf tools.
- **Researchers:** the fact that 43.2% of the RL group never used AI means part of the effect may be withholding rather than timing, and the paper's own next step is an ablation of the reward terms.

## Limitations

The study is a single laboratory session on one topic, text comprehension about social media and self-image, so transfer to other content and to real courses is untested. The agent was trained against simulated students whose parameters came from a pilot of 9 participants; the authors report moderate deviations for some parameters after re-estimation, though they argue the policy was buffered against them. Most participants spoke a Romance language other than English as a first language while the experiment ran in English. The MAI-AI is still under validation at the authors' institution, so the null result on metacognitive awareness may reflect the instrument. Nothing tracks learning over time, and the paper notes that familiarity could teach students to game the unlock rule, a risk one participant described directly. Gender distribution also differed across conditions (χ²(2) = 7.82, p = .020), which is why the exploratory results are reported with and without that control.

## Citation

Rotter, J., Benazet i Montobbio, P., & Hernández-Leo, D. (2026). [*Access Timing as Scaffolding: A Reinforcement Learning Approach to GenAI in Education*](https://arxiv.org/abs/2605.15850). arXiv preprint.
