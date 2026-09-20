---
title: "When AI Is Wrong on Purpose: How Students Respond to Buggy GenAI Code"
created: "2026-07-07T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [metacognition]
technology: [generative-ai]
assessment: [formative-assessment]
stakeholders: [student-experience]
research_method: [design-based research]
discipline: [cs education]
audience: [learners]
level: [higher ed]

sources: ['raw/papers/2607.05068.md']
confidence: high
---

> **Synthesis:** As generative AI becomes central to software development, CS education is shifting toward prompt-centered workflows where students describe intended behavior in natural language to elicit code. But professional practice demands careful review of GenAI output that may look correct yet harbor subtle faults — a challenge in CS1, where current models solve tasks correctly and dull students' incentive to inspect generated code. Padurean et al. (2026) investigate how prompt-centered programming activities can be designed to deliberately surface buggy GenAI code, forcing students to practice verification rather than blind trust. The work speaks directly to the [[cognitive-offloading|Over-Reliance]] problem and the [[cognitive-offloading]] temptation of strong code models, and complements [[code-review-genai-cs1]], which found oral code review preserves [[learning-gains|learning outcomes]] under rising AI use. By intentionally injecting faults, the approach reframes [[generative-ai]] in [[cs-education]] as a metacognitive training ground rather than an answer engine, reinforcing [[ai-literacy]] and [[metacognition]]. Implications for [[student-experience]] and [[formative-assessment]] design suggest that 'wrong-on-purpose' perturbations are a scalable way to build debugging habits in an era where [[reshaping-cs-education-genai]] is already underway.

## What this means for practice

- **Instructors.** Inject validated, runnable near-miss bugs into otherwise correct generated code so that students have something to verify; correct output alone removed the incentive to inspect it.
- **Instructors.** Expect and name two different repair routes: injected bugs were more often repaired by direct code edits with higher next-attempt success, while natural prompt-related failures more often led students to refine the prompt by clarifying constraints, updating signatures, adding edge cases, or reframing the task.
- **Designers.** Keep both failure sources in one workflow, with hidden tests and an editor, so students alternate between specification refinement and debugging rather than practicing only one.
- **Instructors.** Ask students to reflect on what the repair demanded: their reflections described practice in code understanding, code review, and debugging along with a more careful verification mindset.
- **Instructors.** Pair bug injection with [[metacognition|metacognitive]] prompts about trust, because students' stated gains centered on awareness of [[generative-ai|GenAI]] limitations rather than on scores alone.

## Limitations

- This was an in-class deployment rather than a controlled comparison: differences observed between bug sources may reflect course context and platform choices, not only the bug source.
- The analysis covers 2,636 sessions from 917 students in one introductory C course with five platform problems, of which only two were required for credit, so replication across languages, institutions, and open-ended tasks is untested.
- Follow-up actions are shaped by the platform's prompt-and-test workflow with hidden tests and its particular feedback; the authors call for varying feedback, letting students write their own tests, and adding debugging support to see whether the same bug-source patterns hold.
- Bug source was not disclosed to students and no pre/post or delayed measure was collected, so how transparency affects trust, and whether these workflows produce measurable [[learning-gains|learning]], remains unknown.

## Connected Concepts

- [[cognitive-offloading]]
- [[generative-ai]]
- [[cs-education]]
- [[ai-literacy]]
- [[metacognition]]
- [[student-experience]]
- [[formative-assessment]]
- [[critical-thinking]]
## Connected Articles

- [[code-review-genai-cs1]]
- [[reshaping-cs-education-genai]]
## Citation

Victor-Alexandru Padurean, Kaitlin Riegel, Alkis Gotovos, Jyotika Mahapatra, Ahana Ghosh, Adish Singla (2026). [When AI Is Wrong on Purpose: How Students Respond to Buggy GenAI Code](https://arxiv.org/abs/2607.05068). .
