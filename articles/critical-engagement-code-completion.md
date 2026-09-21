---
title: "To Tab or Not to Tab: Measuring Critical Engagement in AI Code Completion Tools Using Behavioral Signals and Attention Checks"
created: "2026-06-30T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
technology: [llm]
assessment: [formative-assessment]
research_method: [instrument development, user study]
discipline: [stem education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2606.30549.md']
confidence: high
---

> **Synthesis:** Hutchison et al. (2026) develop and validate a method for measuring critical [[student-engagement|engagement]] with AI code completion tools in educational settings. Using behavioral signals (time-to-accept, edit distance from suggestion) and embedded attention checks, they find that the majority of students accept AI code suggestions passively, without critically evaluating correctness or appropriateness. This 'tab-and-go' behavior directly threatens the development of programming skills, as students bypass the cognitive effort required for [[transfer-of-learning]]. The work provides a [[research-methods-aied|methodological]] toolkit for [[formative-assessment]] in AI-augmented programming courses, enabling instructors to detect when students are [[cognitive-offloading|over-reliant]] on AI. The findings connect to [[student-experience]] research in [[stem-education]] by showing that the mere availability of AI tools does not lead to productive learning — structured [[pedagogy|pedagogical]] interventions are required to ensure students engage critically rather than deferring to AI output.

## What this means for practice

- **Instructors.** Judge critical engagement from behavior, not from whether work looks finished. Students in this study tab-accepted an average of 17.1 suggestions, and only 22 of 55 passed all 26 test cases — a completed solution is not evidence that the suggestion was evaluated.
- **Instructors.** Read dwell time and accept-then-modify rates as early warning signals. Average dwell time before first interaction with a suggestion was 12.2 seconds, and code execution was the strongest single correlate of task performance (ρ = 0.26), so students who never run or revise what they accepted are the ones to check on.
- **Instructors.** Use deliberately incorrect suggestions as a teaching device rather than only as an assessment trap. Clover's injected errors functioned as an attention check in this study, but they can equally be turned into a [[formative-assessment]] moment with immediate feedback.
- **Designers.** Surface reliance signals in the tool itself — dwell time, edits after acceptance, deletions — so students can see their own [[cognitive-offloading|offloading]] patterns while they can still change them.
- **Instructors.** Set explicit norms for the lab before students open the tool, since the course normally prohibited [[generative-ai|generative AI]] and the exception itself may have shaped how students treated the suggestions.

## Limitations

- 56 students consented across four lab sections of one Java course at a single university; one was dropped after a dwell time more than three standard deviations from the mean, leaving 55 in the analysis.
- The task was a single 60-minute session on the rainfall problem, and task performance had limited variability: some students submitted non-compiling solutions while others passed all 26 test cases, with little in between; the system also used one [[llm|AI model]] in one tool (Clover), though model choice affects both suggestion quality and latency.
- Attention checks injected deterministic incorrect suggestions, which the authors note do not replicate the spontaneous hallucinations students face in real coding work, and suggestion type or complexity was not recorded.
- Interaction logging stops at the first action after a suggestion appears, so engagement that continues after acceptance (or deletion) was not measured, and participation credit did not depend on performance, so the authors cannot rule out students using external tools such as Google or ChatGPT.

## Connected Concepts

- [[cognitive-offloading]]
- [[critical-thinking]]
- [[formative-assessment]]
- [[cs-education]]
- [[stem-education]]
- [[student-engagement]]
- [[student-experience]]
- [[transfer-of-learning]]
## Connected Articles

## Citation

Jessica Hutchison, Ian Tyler Applebaum, Kenneth Angelikas, Kush Rakesh Patel, Phuoc Nguyen, Antonio Lazaro, Nicholas Rucinski, Rahad Arman Nabid, Stephen MacNeil (2026). [To Tab or Not to Tab: Measuring Critical Engagement in AI Code Completion Tools Using Behavioral Signals and Attention Checks](https://arxiv.org/abs/2606.30549). cs.HC (ITiCSE 2026).
