---
title: "AI-powered conversational interfaces in higher education: an experimental comparison of chatbots and traditional websites for information seeking"
created: "2026-11-19T10:16:00-05:00"
updated: "2026-11-19T10:16:00-05:00"
type: article
evidence_context: educational
source_url: "https://doi.org/10.3390/educsci16111966"
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
verified: [citation, numbers, links]
technology: [conversational-ai, technology-acceptance-model, llm]
pedagogy: [student-support-and-success]
foundations: [information-and-media-literacy]
audience: [administrators, institutions, educational technology developers]
research_method: [experiment]
level: [higher ed]
sources: ['raw/papers/ai-conversational-interfaces-information-seeking-2026.md']
confidence: medium
page_kind: [evaluation]
---

> **Synthesis:** Goebert, Johnson and Chung (2026) randomly assigned 299 adults aged 18–25 to find five pieces of university program information through either a traditional website or a [[conversational-ai|conversational interface]] built on GPT-4o and answering only from uploaded program PDFs. The chatbot group solved the tasks **faster** (312 s vs. 505 s, d = −0.73) and **more accurately** (95.6% vs. 78.5% of answers correct, OR = 7.84), and rated it easier, more useful, more enjoyable and more recommendable. But the advantage was **task-dependent**: on the one question tied to a named person — who to contact about a course override — the website won, 96.5% to 85.2%.

## Key Findings

- **A grounded chatbot answered program questions faster and more accurately than the website**: 312 s against 505 s, and 95.6% against 78.5% of submitted answers correct (OR = 7.84).
- **The advantage was task-dependent.** On the one question tied to a named person — who to contact about a course override — the website won, 96.5% to 85.2%.
- **Every perceptual outcome favored the chatbot except behavioral intention**, which did not differ significantly (p = 0.058) despite higher ease, usefulness, attitude, hedonic value and word-of-mouth ratings.
- **Technology readiness moderated the advantage**: users high in optimism and innovativeness gained most, which means the users least comfortable with technology are the ones the chatbot helps least.
- **The sample was not a student sample**: participants were 18–25-year-old panel workers, and university enrollment was neither required nor assessed.

## What the study did

The experiment had two between-subjects conditions and a post-test-only design. Participants were recruited through Prolific and compensated; 302 took part and 3 were removed, leaving 299 — 144 on the website and 155 on the chatbot. Mean age was 22.87 (SD 1.79, range 18–25); 173 were women and 126 men.

An important caveat sits in the sample description rather than in the limitations alone: **current university enrollment was neither required nor assessed**. These are 18–25-year-old Prolific workers, not a student sample, and the authors say so explicitly.

The chatbot was built on Landbot with OpenAI's GPT-4o, constrained to answer only from uploaded study-specific PDFs. Each participant completed the same five information-seeking tasks in their assigned interface, with no time limit; elapsed time included pauses and answer entry. Outcomes were tested with one-way MANOVA, Welch t-tests with Holm adjustment, mixed-effects logistic regression for answer accuracy (task as fixed effect, participant random intercept), and moderated regression for technology readiness. Coders scoring accuracy were blind to condition.

## Speed and accuracy

The performance results are consistent and large:

- **Task completion time**: 312.05 s (SD 212.37) for the chatbot against 505.22 s (SD 310.01) for the website, t(250.64) = −6.24, p < 0.001, d = −0.73; mean difference −193.18 s, 95% CI [−254.15, −132.21]. Medians were 261.71 s against 406.22 s, and the difference survived log transformation (t(296.90) = −8.13, p < 0.001).
- **Answer accuracy**: 95.6% correct (741/775) against 78.5% (565/720), a 17.1 percentage-point gap, OR = 7.84, 95% CI [4.95, 12.42], p < 0.001 across 1,495 responses.

Accuracy here refers to the participants' submitted answers, not to the chatbot's generated responses — a distinction the authors make and one that matters for interpretation.

## The task-dependence result is the interesting part

The interface-by-task interaction was significant (χ²(4) = 109.85, p < 0.001), and the per-task pattern is where the design lesson lives:

- Internship hours: 38.9% website vs. 98.1% chatbot (+59.2 points).
- Program completion hours: 77.1% vs. 96.8% (+19.7 points).
- Majors club contact: 87.5% vs. 98.7% (+11.2 points).
- Maximum attempts allowed: 92.4% vs. 99.4% (+7 points).
- **Course override contact: 96.5% website vs. 85.2% chatbot (−11.3 points).**

The authors' reading is that traditional websites may retain an advantage where the answer is tied to a specific person or office — the kind of information a navigation-structured page encodes well and a generated answer can elide.

## Acceptance, with one exception

Every perceptual outcome favored the chatbot except one:

- **Perceived ease of use**: 5.76 (SD 1.00) vs. 4.91 (SD 1.32), t(266.36) = 6.24, p < 0.001, d = 0.73.
- **Perceived usefulness**: 5.31 (1.25) vs. 4.77 (1.28), t = 3.72, p < 0.001, d = 0.43.
- **Attitude toward use**: 4.79 (1.58) vs. 3.62 (1.55), t = 6.43, p < 0.001, d = 0.74 — the largest mean gap.
- **Behavioral intention**: 5.00 (1.52) vs. 4.69 (1.39), t = 1.90, p = 0.058, d = 0.22 — **not significant**.
- **Utilitarian value**: 5.44 (1.19) vs. 4.98 (1.39), t = 3.07, p = 0.005, d = 0.36.
- **Hedonic value**: 4.29 (1.50) vs. 3.29 (1.58), t = 5.60, p < 0.001, d = 0.65.
- **Word of mouth**: 4.74 (1.58) vs. 4.14 (1.54), t = 3.29, p = 0.003, d = 0.38.

The MANOVA omnibus was significant (Wilks' Λ = 0.758, F(7, 291) = 13.24, p < 0.001, partial η² = 0.242), though normality and equal-covariance assumptions were violated (Shapiro–Wilk all p < 0.01; Box's M approximate χ²(28) = 65.03, p < 0.001), so the authors interpret it cautiously.

The behavioral-intention null is the one that should travel with the rest: participants judged the chatbot better after one experience but did not express more intention to use it again. Favorable evaluation after a single task, the authors argue, is not the same as a habit.

Technology readiness moderated the result in a way that should shape expectations: **optimism amplified the chatbot's advantage on all four acceptance outcomes** (PEOU B = 0.342, p = 0.016; PU B = 0.615, p < 0.001; attitude B = 0.708, p < 0.001; intention B = 0.788, p < 0.001), and **innovativeness on three of four** (PEOU B = 0.235, p = 0.067, not significant), all Holm-adjusted. The chatbot's advantage grew with how optimistic the user already was.

## What this means for practice

- **Layer the assistant on the site; do not replace the site.** The website kept a real advantage on person- and office-linked information, so it remains the canonical source.
- **Include the source link in every answer**, especially for requirements, policies, deadlines and anything where being wrong has consequences.
- **Pilot first on navigation-heavy, high-volume questions** — internship and credit requirements, completion rules — where the accuracy gain was largest (+59.2 points on internship hours).
- **Keep contact information reachable by normal navigation**, since the chatbot lost on the course-override contact question (85.2% vs. 96.5%).
- **Evaluate with objective measures** — completion time and answer accuracy — alongside acceptance surveys; a satisfaction score alone would have hidden the contact-question failure.

## Limitations

- **One program, five questions.** The evidence comes from a single university sport management program, and websites vary considerably in complexity, organization and quality.
- **Not a student sample.** Participants were 18–25-year-old Prolific workers, and enrollment was not required or assessed; results may differ for enrolled or prospective students seeking personally consequential information.
- **System-level comparison.** The chatbot-versus-website contrast bundles the conversational interaction with the underlying model and the information organization, so the difference cannot be attributed to conversational form alone.
- **Between-subjects, single time point.** The study cannot show which interface users would choose when both are available, nor whether performance differences explain acceptance; novelty and prior AI experience were uncontrolled.
- **Measurement caveats**: no invariance testing across conditions, and the innovativeness factor's average variance extracted was slightly below threshold (0.477).

## Citation

Goebert, C., Johnson, J. D., & Chung, K.-s. (2026). [AI-powered conversational interfaces in higher education: An experimental comparison of chatbots and traditional websites for information seeking](https://doi.org/10.3390/educsci16111966). *Education Sciences*, 16, 1966.
