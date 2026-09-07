---
title: "Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise"
created: "2026-09-07T10:00:00-04:00"
updated: "2026-09-07T10:00:00-04:00"
type: article
tags: [intelligent-tutoring, human-ai-collaboration, human-in-the-loop-ai, teacher-role, k-12, equity-in-ai-education]
research_method: [randomized controlled trial]
discipline: [learning sciences]
audience: [researchers, edtech designers, policymakers, educators]
level: [k 12]
category: [evaluation, equity]
sources: ['raw/papers/2410.03017.md']
confidence: high
---

> **Synthesis:** Wang, Ribeiro, Robinson, Loeb, and Demszky (2024) introduce **Tutor CoPilot**, a human-AI system that gives novice [[k-12|K-12]] tutors real-time, expert-like guidance drawn from a model of experienced tutors' reasoning, and report the first [[rct|randomized controlled trial]] of a human-AI system in live tutoring. Across 900 tutors and roughly 1,800 students from historically under-served communities, students of tutors randomly assigned access to Tutor CoPilot were **4 percentage points more likely to master topics** (exit-ticket pass, p < 0.01), with the largest gains — **9 p.p.** — among students of lower-rated tutors, whose outcomes rose to match those of higher-rated tutors in the control group. The system cost only about **$20 per tutor annually**, and an analysis of 550,000+ tutoring messages showed treatment tutors shifted toward high-quality strategies (asking guiding questions, prompting students to explain) and away from giving away answers. The result positions AI as an augmentation of the [[teacher-role|teacher]] rather than a replacement, echoing the "teacher augmentation" strand of AI-in-education [[research-methods-aied|research]].

## Background: Scaling expert guidance to novice tutors

Training novice educators with expert guidance is effective but expensive — [[educational-development|professional development]] programs can cost $3,300+ per teacher annually — and is often misaligned with the practical, in-the-moment needs of part-time tutors. This disproportionately harms students in under-served communities, who are most likely to be taught by inexperienced educators and stand to gain most from high-quality instruction. Rather than replacing tutors, Tutor CoPilot aims to scale the *expertise* itself: it generates actionable, real-time suggestions that tutors can immediately apply, improving the live learning interaction.

Out-of-the-box LLMs struggle in real K-12 settings because they are trained on web text rather than authentic classroom interaction, and conventional adaptation (fine-tuning, [[prompt-engineering]]) captures surface language patterns rather than the latent reasoning experts use to decide how to respond. Tutor CoPilot instead builds on the **Bridge method** (Wang et al., 2024), which uses think-aloud protocols to extract experienced educators' verbalized reasoning and adapts an [[llm]] to generate expert-like suggestions from it.

## System design

Tutor CoPilot sits alongside the tutor's chat interface and, when activated, pulls in the ongoing conversation context, lesson topic, and the tutor's chosen [[pedagogy|pedagogical]] strategy (e.g., "provide a hint") to generate guidance. Key design features:

- **Privacy and safety.** Student and tutor names are automatically de-identified (via Edu-ConvoKit) using placeholders, and only the 10 most recent messages are shared with external LM services to limit data exposure.
- **Expert-like guidance.** The Bridge method generates suggestions that lighten tutors' [[cognitive-offloading|cognitive load]] — they need not figure out how to prompt the model themselves.
- **Tutor autonomy.** Tutors can edit, regenerate, or switch the strategy behind a suggestion; available strategies include providing a solution, a worked example, a minor correction, a similar problem, simplifying the question, affirming a correct answer, or encouraging the student. Rather than offering a single autocomplete, the system presents options across strategies, preserving tutor judgment.

## Study design

The [[rct|randomized controlled trial]] ran for two months starting in late March 2024, in partnership with FEV Tutor and a large southern U.S. school district (30,000+ students, mostly from ethnic/racial minority and economically disadvantaged backgrounds). Nine schools participated, serving students in grades 3–8 who had scored below grade level on the prior state test (80% Hispanic, 67% economically disadvantaged). Randomization was at the tutor level: 900 tutors were initially assigned (450 treatment / 450 control), with 782 at launch (386 treatment / 396 control) after attrition; balance checks showed no baseline differences between conditions. The primary analysis was a preregistered intention-to-treat (ITT) regression on session-level outcomes, with student covariates and school × grade fixed effects. The final sample included 4,136 sessions and 550,000+ chat messages.

## Key Findings

1. **Students of treated tutors were 4 p.p. more likely to pass their exit ticket** (62% → 66%, p < 0.01), the study's primary mastery outcome; they were also 2 p.p. more likely to attempt it (p < 0.1) and, conditional on attempting, 3 p.p. more likely to pass (p < 0.01). The instrumental-variable estimate among tutors who actually used the tool was larger: students were 14 p.p. more likely to pass.
2. **The largest benefits went to the least-effective tutors.** Students of lower-rated tutors improved mastery by 9 p.p. (56% → 65%) and of lower-experienced tutors by 7 p.p. (61% → 68%); treated students of lower-rated/experienced tutors performed at or above the level of higher-rated/experienced tutors' students in the control group.
3. **Tutoring language shifted toward high-quality strategies.** Treatment tutors were roughly 2 standard deviations more likely (log-odds) to prompt students to explain and ask questions to guide thinking, and less likely to give away the answer — a mechanism consistent with the [[learning-gains|learning gains]].
4. **Extremely low cost.** Tutor CoPilot cost only ~$20 per tutor annually based on usage during the study — orders of magnitude below traditional training programs.
5. **No significant change in student survey outcomes** (perceived care, mindset, ratings) — the effects concentrated in the proximal mastery measure.
6. **Proximal gains did not translate to end-of-year test scores.** No statistically significant improvement appeared on year-end math assessments, which the authors attribute to limited treatment exposure over the short (two-month) window.

## Tutor perceptions and limitations

In post-study interviews (~20 treatment tutors), tutors found Tutor CoPilot helpful for well-phrased explanations and breaking down difficult concepts on the spot, but flagged that suggestions were occasionally not grade-level appropriate — sometimes perceived as "too smart," requiring the tutor to simplify. Limitations include: the sample is a single southern U.S. district of novice tutors and under-served students (generalizability limited); proximal (exit-ticket) but not distal (test) gains; a chat-only modality (future work should add vision/speech); and residual privacy concerns (non-name identifying information, and a performance–safety trade-off in how much conversation context to share).

## Connected Concepts

- [[intelligent-tutoring]]
- [[human-ai-collaboration]]
- [[human-in-the-loop-ai]]
- [[teacher-role]]
- [[k-12]]
- [[equity-in-ai-education]]

## Connected Articles

- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT-generated help equivalent to human tutor-authored help (Pardos & Bhandari 2024)
- [[lodge-loble-cognitive-offloading-2026]] — Teacher augmentation as the promising equitable path for AI (Lodge & Loble 2026)
- [[access-not-enough-ai-tutoring-2026]] — Access to AI tutoring tools alone does not close gaps

## Citation

Wang, R. E., Ribeiro, A. T., Robinson, C. D., Loeb, S., & Demszky, D. (2024). [Tutor CoPilot: A human-AI approach for scaling real-time expertise](https://arxiv.org/abs/2410.03017). arXiv:2410.03017 (v2, January 2025).
