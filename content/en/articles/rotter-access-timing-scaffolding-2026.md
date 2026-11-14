---
title: "Access Timing as Scaffolding: A Reinforcement Learning Approach to GenAI in Education"
created: "2026-11-11T07:37:53-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Always-on access to a chatbot may be the wrong default. Rotter and colleagues built a [[reinforcement-learning|reinforcement learning]] agent that decides, question by question, when a student may open an off-the-shelf [[llm|LLM]], and compared it with unrestricted and fully withheld access in a lab study with 105 university students in Barcelona. Students under timed access scored higher on an unassisted post-test than those with unrestricted access, and matched students who never had the tool at all. They also judged their own answers more accurately, without any prompt to reflect, though [[self-report-measures|self-reported]] metacognitive awareness did not move. The authors treat access timing as an implicit [[scaffolding|scaffold]]: cheaper than a ban, and it keeps some [[productive-failure|productive struggle]] while limiting [[cognitive-offloading|cognitive offloading]].

## Key Findings

1. **Timed access beat open access on the unassisted test.** Students whose bot unlocked only at the agent's discretion scored higher afterwards than students who could use it whenever they liked.
2. **It matched a full ban.** Students under timed access performed about as well as students who never had the tool, so the restriction cost them nothing in learning.
3. **Students judged their own answers better.** [[self-assessment|Self-assessment accuracy]] was higher under timed access than under open access and equal to the no-tool group, and no explicit reflection prompt was involved.
4. **Declared metacognitive awareness did not change.** A self-report inventory found no gain in knowledge about cognition or in its regulation, so the accuracy gain did not show up as a change in what students believed about their own thinking.
5. **The agent rationed access rather than enabling it.** Students under timed access made far fewer requests for [[generative-ai|GenAI]] — 2.46 on average against 11.25 — and 43.2% never used it at all, while every open-access student used it at least once.
6. **Error and speed advantages were fragile.** Timed access produced fewer mistakes and somewhat faster work than the no-tool group, but both differences disappeared once gender was controlled.
7. **Students described both the mechanism and the loophole.** Timed-access students valued getting the bot after failing; open-access students reported feeling "lazier" and "more dependent"; one timed-access student was tempted to answer wrong on purpose to unlock the AI sooner.

## What the study did

The design was a 3x1 between-subjects experiment with policy type as the independent variable: an RL agent decides when GenAI becomes available, the learner is never allowed to use it, or the learner is always allowed to use it. The final sample was 105 university students, recruited in Barcelona and run in workshop sessions of 8 to 21 participants, with assignment by session rather than by individual so that completion times stayed comparable.

Participants worked through a custom [[intelligent-tutoring|intelligent tutoring system]] on text comprehension, with three tasks on social media and self-image. Each task paired a text of roughly 650 words with three multiple-choice questions that had two or three correct answers, and a correct answer unlocked the next question so that progress was strictly linear. After the tasks, a distractor drawing activity occupied the retention interval, and then participants took an unassisted test of nine similar questions, one of which was later dropped for an error, leaving a score range of 0 to 8. For each question they also judged whether they had answered correctly, which yielded a self-assessment accuracy score on the same range. A 19-item inventory of metacognitive awareness was given before and after.

On the unassisted test, timed access averaged 5.11 against 4.03 with unrestricted access and 5.25 with no access at all; self-assessment accuracy was 5.95, 5.17 and 5.84 in the same order. The GenAI available inside the system was Mistral 3 14B 2512, reached through the OpenRouter API, and participants in the timed-access and always-on conditions were strongly encouraged at the start to use it in any way they found helpful.

## How the agent decided when to allow access

The agent saw four state variables at each decision: the number of failed attempts on the current question, time on the current task, a record of whether GenAI had been used in each previous task, and an aggregate of failed attempts standing in for current understanding. Its action space had two options, allow AI use or continue denying it, and access, once granted, remained open for the rest of that task.

The reward was a sum of five pedagogically labeled terms. Task completion earned a large positive reward and each step carried a small time penalty. A [[metacognition|metacognition]] term rewarded alternating between AI and no-AI across tasks. A productive-failure term penalized allowing AI at zero failed attempts, rewarded it after one or two failures in proportion to time on task, and used a separate weight for more than two. A cognitive-load term penalized allowing AI before a time threshold early in the task. The weights were tuned through offline simulation and a second pilot with 7 participants.

Training used proximal policy optimization against [[simulating-students|simulated students]] from [[knowledge-tracing|Bayesian knowledge tracing]], with parameters drawn from a truncated normal distribution centered on estimates from a pilot of 9 participants. The authors report that PPO outperformed DQN and A2C in this setting. The resulting policy is the treatment: it decides when the interface unlocks the model, and the paper evaluates the effect of that policy on later unassisted performance.

## What this means for practice

- **Instructors:** A rule such as "AI unlocks after two genuine attempts" reproduces the logic of the agent without any infrastructure, and it outperformed leaving the tool open in this study. Tell students the rule in advance, because some will otherwise treat failed attempts as a currency.
- **Designers:** The decision rests on signals a tutor already logs — failed attempts, elapsed time and prior AI use in the session — so an access gate is cheap to add to an existing tutor or quiz.
- **Administrators:** The result argues against both blanket bans and unrestricted defaults. Timing is a middle policy that needs no custom model and works with off-the-shelf tools.
- **Researchers:** The fact that 43.2% of the timed-access group never used AI means part of the effect may be withholding rather than timing, and the paper's own next step is an ablation of the reward terms.

## Limitations

The study is a single laboratory session on one topic, text comprehension about social media and self-image, so transfer to other content and to real courses is untested. The agent was trained against simulated students whose parameters came from a pilot of 9 participants; the authors report moderate deviations for some parameters after re-estimation, though they argue the policy was buffered against them. Most participants spoke a Romance language other than English as a first language while the experiment ran in English. The metacognitive inventory is still under validation at the authors' institution, so the null result on metacognitive awareness may reflect the instrument. Nothing tracks learning over time, and the paper notes that familiarity could teach students to game the unlock rule, a risk one participant described directly. Gender distribution also differed across conditions (χ²(2) = 7.82, p = .020), which is why the exploratory results are reported with and without that control.

## Citation

Rotter, J., Benazet i Montobbio, P., & Hernández-Leo, D. (2026). [*Access Timing as Scaffolding: A Reinforcement Learning Approach to GenAI in Education*](https://arxiv.org/abs/2605.15850). arXiv preprint.
