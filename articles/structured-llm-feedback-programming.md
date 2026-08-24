---
title: The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
created: "2026-05-19T04:33:04-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [llm, generative-ai, feedback, higher-ed, scaffolding, efficacy-study, stem-education, socratic-questioning, desirable-difficulties, rag]

sources: ['raw/papers/2605.16933.md']
confidence: high
---

## Synthesis

> This study provides empirical evidence on how the *structure* of LLM-generated feedback shapes programming students' problem-solving efficiency. In an online introductory Web Development course, three LLM feedback types varying in guidance level (General, Single-Issue, Diagnostic) were compared against a compiler-error-only baseline using mixed-effects models on time-to-solution and attempts-to-success. All LLM feedback conditions led to faster time-to-solution, but counterintuitively the less guided formats showed stronger effects: constraining feedback to fewer issues or to diagnostic identification alone generally produced more efficient progress than more directive, explanation-heavy variants. This aligns with [[socratic-method]] questioning and the [[desirable-difficulties]] framework — too much hand-holding may short-circuit productive struggle — and echoes the discovery-based logic of the [[codify-socratic-tutoring-programming]] approach. Effects did not differ significantly by expertise, and guidance-heavy feedback degraded on course content released after the model's training cutoff, surfacing [[hallucination-risk]]. Combined with [[ai-tutor-behavioral-evaluation]], which found behavioral engagement metrics outweigh feedback-quality ratings, this paper strengthens the case for LLM feedback that prompts student action rather than passive consumption, and motivates [[adaptive-learning]] feedback calibrated to task, history, and behavior.

## Key Findings

1. All three LLM-generated feedback structures produced faster time-to-solution than the compiler-only baseline, with Single-Issue Feedback showing the largest reduction (β = −0.214 on log time), followed by Diagnostic (β = −0.194) and General Feedback (β = −0.122).
2. Diagnostic Feedback drove both fewer attempts and faster completion, indicating the most efficient iteration — likely by helping students localize errors — whereas Single-Issue Feedback sped up completion without consistently reducing the number of submissions.
3. Less-guided formats outperformed more directive ones: limiting feedback to fewer issues or to problem identification alone was generally associated with more efficient progress, supporting [[prior-knowledge]]-motivated [[desirable-difficulties]] logic that detailed guidance does not necessarily improve short-term performance.
4. Hint-type effects did not differ significantly between novice and advanced students, though predicted trends suggested feedback was more beneficial for advanced students, indicating large individual differences outweigh coarse [[self-regulated-learning|self-reported expertise]] measures.
5. Course content released after the model's knowledge cutoff degraded guidance-heavy feedback; Diagnostic Feedback performed better on this newer material while hallucinated or outdated references emerged, motivating retrieval-grounded generation.

## Background: Programming Feedback at Scale

When students submit incorrect programming solutions, automated [[automated-assessment|assessment systems]] typically return compiler diagnostics, failed test cases, or static-analysis warnings — feedback that is often difficult for novices to interpret because it relies on professional terminology and assumed [[prior-knowledge]]. Human instructors can give targeted, contextualized [[feedback]], but this does not [[higher-ed|scale to large courses]]. Recent advances in [[llm|large language models]] and [[generative-ai]] enable automated feedback generation at scale, yet prior classroom studies report that generic LLM feedback can be overly detailed, provide complete solutions, or contain inaccuracies. Such output risks pushing students toward immediate [[help-seeking]] rather than deeper [[self-regulated-learning]] and [[metacognition]]. The quality and usefulness of generated feedback also depend strongly on [[prompt-engineering]] strategy and task difficulty, with substantial variation across zero-, one-, and few-shot configurations.

## Feedback Structures

The study designed three prompt variants (generated with GPT-4o) that differ in the amount of guidance and information provided, ranging from detailed explanations to constrained, diagnostic hints:

- **General Feedback** — identifies up to three issues in the code, each with a description, explanation, and hints for next steps.
- **Single-Issue Feedback** — surfaces only one error with its description, explanation, and guidance toward resolution, motivated by evidence that novices can be overwhelmed by feedback complexity.
- **Diagnostic Feedback** — reports up to three issues but gives only descriptions with no fix hints, motivated by the expertise-reversal effect in which more advanced programmers perform better with more limited guidance.

A control (No Feedback) condition saw only compiler error messages; students were informed the messages were AI-generated and could vote each message Good or Poor.

## Methods: Mixed-Effects Modeling

The study ran in an online introductory Web Development course over two months. Each student was randomly assigned a feedback type per assignment (so no student faced a single type throughout), and submissions over 2000 characters were excluded. Analysis focused on engaged sessions (≤30 minutes, ~95% of solved assignments), yielding 3,153 assignment–user pairs: 1,228 No Feedback, 665 General, 639 Single-Issue, and 621 Diagnostic. Students were split into 111 Novice and 38 Advanced by self-reported years of experience. Because observations within student–assignment pairs are non-independent, the authors used linear mixed-effects models (LMMs) on log-transformed time-to-success and negative binomial generalized linear mixed-effects models (NB-GLMMs) on overdispersed attempts-to-success, with random intercepts for students and assignments and student-level random slopes for hint type. This quantitative, observational design addresses three research questions on feedback structure, expertise, and content recency.

## Results

Across the course, students receiving LLM-generated feedback reached correct solutions faster than those with compiler output alone, and all hint types credibly reduced attempts relative to baseline. On attempts, the largest reduction came from Diagnostic Feedback (β = −0.200), while Single-Issue Feedback showed the smallest improvement, plausibly because focusing on a single issue requires more iterations. Beyond average effects, models showed substantial between-student and between-exercise variability: random slopes for hint type varied widely, so a smaller subset of students saw little or no benefit. No significant interaction emerged between hint type and expertise, though predicted trends favored advanced students. For newer (post-cutoff) course content, Diagnostic Feedback performed better — the model could still identify errors even when it could not safely suggest fixes — whereas guidance-heavy formats were more sensitive to outdated model knowledge. Sparse student votes (14 Good, 31 Poor) and thematic analysis of Poor feedback revealed repeated failure modes: references to outdated technology versions (n=12), reported issues that were not actual errors (n=12), missed real issues (n=4), and hallucinated problems (n=7), underscoring the importance of mitigating [[hallucination-risk]].

## Discussion

Feedback structure influenced efficiency (time and attempts) rather than final success, since solution rates were high in every condition. Overall, more detailed guidance did not necessarily improve short-term performance; constraining feedback to fewer issues or to problem identification alone was generally more efficient. Large individual differences between students outweighed coarse measures like years of experience, and feedback effectiveness varied by content recency, suggesting that a single fixed feedback strategy is unlikely to be optimal for all students or tasks. This motivates [[adaptive-learning]] and [[personalized-learning]] approaches that adjust feedback structure based on student behavior and task characteristics, rather than fixed formats.

## Limitations

Assignment–user pairs are non-independent because students saw different hint types across assignments; proficiency was self-reported rather than measured; the study ran in a single course and excluded long submissions, limiting generalizability; and outcomes capture short-term performance rather than long-term learning.

## Implications

- Design LLM feedback to limit cognitive load: constrain output to fewer issues and diagnostic identification rather than complete solutions, supporting productive struggle over over-scaffolding.
- Ground feedback in current course materials via retrieval-augmented generation ([[rag]]) and include compiler error output as context, to counter outdated model knowledge and reduce [[hallucination-risk]].
- Move toward adaptive feedback calibrated to task, history, and behavior instead of fixed formats, drawing on [[student-modeling]] and diagnostics rather than self-reported expertise.
- Treat short-term efficiency cautiously: longitudinal evaluation of long-term learning outcomes is needed before claiming genuine learning gains.
- For educators and tool builders, prioritize formats that prompt student action and iteration — a pattern consistent with [[socratic-method]] and discovery-based tutoring.

## Connected Concepts

- [[socratic-method]]
- [[desirable-difficulties]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[automated-assessment]]
- [[cs-education]]
- [[scaffolding]]
- [[formative-assessment]]
## Connected Articles

- [[codify-socratic-tutoring-programming]]
- [[ai-tutor-behavioral-evaluation]]
- [[knowledge-tracing-irt]]
- [[programming-its]]
- [[llm-feedback-programming-classroom]]
## Citation

Mihaylova, T., Logacheva, E., Hellas, A., Fan, J., Castro, F., Akram, B., Norouzi, N., Brusilovsky, P., & Leinonen, J. (2026). [The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance](https://arxiv.org/abs/2605.16933).
