---
title: "Turning 500+ Students into Teachers: A Semester-Long Study of an AI Teachable Agent in an Undergraduate Algorithms Course"
created: "2026-08-14T10:45:34-04:00"
updated: "2026-09-01T19:06:21-04:00"
type: article
tags: [learning-by-teaching, intelligent-tutoring, generative-ai, cs-education, cognitive-psychology, scaffolding, higher-ed]
research_method: [system development]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/raw-wang-epfl-explique.md']
confidence: high
---

> **Synthesis:** Wang et al. (2026) present **Explique**, a platform integrating an AI teachable agent (Algorithm Apprentice) into an undergraduate algorithms course to operationalize [[learning-by-teaching]] (LBT) at scale. In an 11-week field deployment with **546 students** and 3,809 student–agent LBT dialogues, they find that explanation-oriented dialogue behaviors (elaboration, showing reasoning) are associated with fewer incorrect quiz submissions, while external-content reuse is associated with more repeated attempts. The LBT condition corresponded to a modest reduction in expected quiz attempts versus a baseline reading activity — the largest longitudinal, in-situ evidence to date that LLM teachable agents can sustain learning-by-[[teacher-role|teaching]] in a real high-enrollment course.

## The Need for Large-Scale LBT Evidence

[[llm]] tools give students rapid solutions but may reduce opportunities for [[desirable-difficulties|productive struggle]] and explanation generation that support conceptual learning — and, when an LLM supplies completed reasoning, it can displace the learner's own self-explanation. Learning-by-teaching offers an alternative by positioning students as tutors: prior work shows teaching benefits learners by [[prompt-engineering|prompting]] knowledge organization and [[metacognition|metacognitive monitoring]]. Yet sustaining LBT at scale is hard — in a lecture hall of 500+, it is rarely feasible for each student to regularly teach a human partner. LLM-based teachable agents promise a path, but evidence remained limited to short-term or lab-based studies, leaving open how interactions evolve over a long semester and whether they connect to conceptual understanding in authentic courses.

## Study Design

- **Explique platform** built on GPT-4o, with the agent in the role of an **Algorithm Apprentice** (a novice student, explicitly *not* a tutor) integrated into the EPFL digital learning platform.
- **Three engineered prompt constraints** govern the apprentice: (a) always maintain the stance of a novice, (b) persistently request questions/clarifications until the student gives a satisfactory, accurate explanation, and (c) **never reveal, hint at, or generate the target explanation** — students who tried to have the apprentice explain the algorithm back were met with resistance.
- **Weekly after-class exercise** covering a course-aligned algorithm (e.g., Insertion Sort, DFS, Bellman–Ford), co-designed with the instructor and followed by a 3–5 item MCQ quiz.
- **Quiz-gatekeeper design:** completing the LBT exercise unlocks the quiz; quizzes were autograded and counted for an optional 5% of the grade ([[motivation|extrinsic motivation]]), with unlimited attempts and a one-minute lockout after incorrect submissions.
- **Crossover design:** 546 students randomly split into groups A and B; each week one group did the LBT exercise and the other a baseline reading activity on the algorithm, then swapped — yielding 22 exercises and 22 quizzes per student, half under each condition.
- **Data:** 456 of 546 consented; after excluding two weeks with a technical issue, **3,809 LBT dialogues from 453 students** (35,702 messages) were analyzed with generalized linear mixed-effects models.

## Key Findings

- **Explanation-oriented dialogue predicts success.** Each additional "deep learning" act (showing reasoning, providing elaboration, giving examples) during an LBT dialogue was associated with a **2.7% decrease in the expected number of quiz attempts** (IRR 0.973, p < .001); both Show Reasoning (β = −0.059) and Provide Elaboration (β = −0.049) were individually significant.
- **External-content reuse hurts.** Direct reuse of externally sourced content (detected via word-per-minute and LLM coding) was associated with more repeated attempts.
- **Interactions cluster into three patterns that shift over the semester.** Overall, 53.3% of dialogues were **Detailed**, 19.5% **Minimal**, and 27.2% **External Content Use**. Detailed interactions were highest early (~75% in Week 1) and declined to 45–55% by the later weeks, while External Content Use rose from under 15% to roughly **30–35% by Weeks 10–11** — a circumvention problem the design must counter.
- **Sustained but variable [[student-engagement|engagement]].** Students averaged about **eight conversational turns per activity** each week (range 6.8–9.7), and average message length rose from ~31 to over 70 words across the semester (though this is partly confounded by rising content reuse). Dialogue acts: Provide Elaboration 27.2%, Produce Basic Info 23.4%, External Content Use 15.9%, Show Reasoning 15.4%, Provide Acknowledgment 13.4%, Give Examples 3.5%, with active [[help-seeking]] acts (Seek Elaboration 0.8%, Seek Answer 0.2%) rare.
- **Modest LBT benefit vs. reading.** Compared to a baseline reading activity, the LBT condition corresponded to a modest reduction in expected quiz attempts (β = −0.050, p = .012), though the comparison is confounded by substantial differences in time-on-task.

## Implications

1. **LBT with LLM teachable agents scales** to authentic, large-enrollment courses and produces sustained multi-turn teaching interactions across a full semester.
2. **Design for productive struggle, not content-dumping.** The quality of the teaching interaction — elaboration and reasoning vs. reuse — predicts learning; systems should enforce the apprentice's refusal to give answers and monitor for copy-paste circumvention, which rises over time.
3. **Sustaining cognitive effort is a core design challenge.** The decline in Detailed interactions and rise in External Content Use toward semester's end shows engagement must be actively managed, not assumed.
4. **Connect LBT behavior to conceptual understanding** at scale is feasible with platform-based measurement (dialogue coding + quiz performance).

## Connected Concepts

- [[learning-by-teaching]]
- [[generative-ai]]
- [[cs-education]]
- [[desirable-difficulties]]
- [[scaffolding]]
- [[higher-ed]]
- [[metacognition]]

## Connected Articles

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[ai-tutor-safety-harms]] — Safety and harms of AI tutoring
- [[curiobot-llm-tutoring-exploratory-learning]] — LLM tutoring for exploratory learning

## Citation

Wang, C., Petrie, C., Stouras, M., Ettlin, N., George, A., Mejia-Domenzain, P., Swamy, V., Käser, T., & Svensson, O. (2026). [*Turning 500+ Students into Teachers: A Semester-Long Study of an AI Teachable Agent in an Undergraduate Algorithms Course*](https://doi.org/10.1145/3774398.3811623). In *Proceedings of the Thirteenth ACM Conference on Learning @ Scale (L@S '26)*.
