---
title: "Taklif.AI: LLM-Powered Platform for Interest-Based Personalized College Assignments"
created: "2026-05-15T04:33:04-04:00"
updated: "2026-09-20T08:56:47-04:00"
type: article
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning, edtech-platform]
assessment: [automated-question-generation]
ethics: [culturally-relevant-pedagogy]
research_method: [system development, user study]
level: [higher ed]
sources: ['raw/papers/2605.05842.md']
confidence: medium
audience: [instructors, instructional designers]
---

> **Synthesis:** Kurdya and colleagues (2026) present **Taklif.AI**, a platform that uses [[llm|large language models]] to generate [[personalized-learning|personalized]] college assignments from students' own interests and cultural contexts rather than from academic-performance metrics alone. The stated problem is educators' difficulty in producing engaging assignments that fit diverse interests and cognitive abilities: traditional one-size-fits-all tasks are linked in the paper to reduced engagement and increased reliance on unethical practices such as [[academic-integrity|plagiarism]]. The platform uses a structured [[prompt-engineering]] pipeline with input and output [[guardrails]], a serverless AWS architecture with a Next.js frontend, **Llama 3.3 70B** as the primary model via LiteLLM for multi-provider load balancing, and LangChain for prompt orchestration. Preliminary user-acceptance testing with 68 participants (65 students and three educators) found positive reception, with **84%** rating the personalization feature as beneficial; the authors treat rigorous empirical evaluation of learning outcomes as future work.

Taklif.AI differs from performance-driven personalization by incorporating students' **extracurricular interests and cultural contexts** into assignment generation — an approach aligned with [[culturally-relevant-pedagogy]] principles and with the wider [[personalized-learning]] literature on interest-based task design.

**System architecture highlights:**
- Primary LLM: **Llama 3.3 70B** via LiteLLM for multi-provider load balancing
- Prompt orchestration: **LangChain** with structured [[prompt-engineering|prompt engineering]] pipeline
- Quality control: Input and output **[[guardrails]]** to ensure assignment quality
- Infrastructure: **AWS serverless** with Next.js frontend

**User testing results (n=68):**
- 65 students and 3 educators participated
- **84%** rated the personalization feature as beneficial
- Strong user acceptance overall

The platform represents a shift from **one-size-fits-all** assignments toward interest-driven [[student-engagement|engagement]], potentially reducing [[academic-integrity]] concerns like plagiarism. However, the paper acknowledges the need for **rigorous empirical evaluation of [[learning-gains|learning outcomes]]** beyond user acceptance — echoing the [[genai-performance-vs-learning]] distinction between engagement gains and actual learning improvements.

This work connects to the broader [[automated-question-generation]] literature and the [[edtech-platform]] ecosystem. The use of open-weight models (Llama 3.3 70B) aligns with the trend toward institution-controlled AI deployment seen in [[lata-ferpa-compliant-local-llm-autograder]] and [[moodle-ai-tutoring-deep-learning]].

## What this means for practice

- **Instructors.** Collect students' extracurricular interests and cultural contexts at the start of a term and use them as the context for [[personalized-learning|personalized]] assignments: in the platform's user acceptance test, 84% of participants (57/68) rated the personalization feature as beneficial and 91% (62/68) rated the interface as intuitive.
- **Instructors.** Cap how far a personalized rewrite may drift from the original task — Taklif.AI's prompt restricts generated content to a 50% increment over the length of the source assignment, which keeps interest-based framing a change of context rather than of [[learning-gains|learning objectives]].
- **Instructors.** Grade the output yourself against a shared objective-based rubric: the platform does not evaluate or assess student submissions, and each personalized assignment produces a different problem statement, which complicates cross-student comparison.
- **Designers.** Build input and output [[guardrails]] before scaling up. Against approximately 200 development test inputs, the interest guardrails rejected about 12% of submitted interests, the assignment guardrails rejected about 8% of input documents, and the output guardrails flagged about 3% of generated assignments for out-of-scope or potentially hallucinated content.
- **Designers.** Budget for generation latency inside the class period: under a simulated load of 100 concurrent users generating assignments, end-to-end response time averaged 30 seconds per request.

## Limitations

- No controlled experiment: the user acceptance test measured perceived benefit only, and the paper reports no comparison of grades, comprehension, or plagiarism rates against standard or manually personalized assignments.
- Small, single-site sample: all 68 participants (65 undergraduate students and 3 educators) came from the Faculty of Information Technology at the Islamic University of Gaza, so the results may not generalize to other institutions or disciplines.
- Self-report instrument: four 5-point Likert items plus one open-ended question, administered in sessions of about 12 minutes each, capture perceived engagement and ease of use rather than [[learning-gains|learning gains]].
- The guardrail rates (12%, 8%, 3%) come from development-phase testing with approximately 200 test inputs and were not validated against labeled ground truth; the authors also report no systematic human evaluation of output quality and no comparison baselines.

## Connected Concepts

- [[personalized-learning]]
- [[culturally-relevant-pedagogy]]
- [[academic-integrity]]
- [[automated-question-generation]]
- [[edtech-platform]]
- [[student-engagement]]
- [[higher-ed]]
- [[motivation]]
## Connected Articles

- [[genai-performance-vs-learning]]
- [[lata-ferpa-compliant-local-llm-autograder]]
- [[moodle-ai-tutoring-deep-learning]]
## Citation

Kurdya, Z., Zuqlam, M., Amassi, S., Telbany, S., & Saad, M. (2026). [Taklif.AI: LLM-powered platform for interest-based personalized college assignments](https://arxiv.org/abs/2605.05842).
