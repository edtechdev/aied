---
title: "When Do Undergraduate Students Prefer AI? Insights into AI Scoring and Feedback"
created: "2026-09-30T13:46:36-04:00"
updated: "2026-09-30T13:46:36-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071196.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, thematic analysis]
discipline: [writing education]
level: [undergraduate, higher ed]
audience: [instructors, assessment designers, researchers]
foundations: [ai-education, human-ai-collaboration, teacher-role, ai-literacy]
pedagogy: [student-experience, student-ai-interaction]
technology: [generative-ai, llm, technology-acceptance-model]
assessment: [automated-essay-scoring, ai-feedback-quality, feedback, feedback-literacy, formative-assessment, summative-assessment]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
ethics: [trust, explainable-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Yildirim-Erbasli and colleagues surveyed 93 undergraduates at one Canadian university in Fall 2025, combining Likert-type items, scenario-based choices, two ordinal logistic regressions, and an activity in which participants ran a short-answer response through ChatGPT and then reflected on its score and feedback. This is a preference and perception survey, not an outcome study: it records what students say they want from AI scoring and feedback, not whether AI improves their learning. Students preferred structured, moderately detailed, grammar-focused [[ai-feedback-quality|AI feedback]] and favored human evaluation for high-stakes and subjective work, with hybrid arrangements in which AI assists rather than replaces the human grader as the dominant preference. The single most important qualification is that all of this is [[self-report-measures|self-reported]] preference from a convenience sample that was mostly psychology majors and mostly women, so it describes one [[learners|student population]] rather than students in general.

## Key Findings

- **Students wanted adaptable, structured feedback rather than a fixed style.** The most chosen tone was a task-dependent mix (n = 39, 41.9%), the most chosen length a combination of concise and detailed feedback (n = 34, 36.6%), the most chosen format bulleted points (n = 40, 43.0%), and the most chosen timing feedback at multiple stages (n = 32, 34.4%); grammar and mechanics was the most preferred focus (n = 35, 37.6%). Preferences differed from an equal distribution for tone (χ2 (3) = 15.86, p = 0.001), length (χ2 (3) = 11.65, p = 0.009), format (χ2 (3) = 30.40, p < 0.001) and focus (χ2 (3) = 18.27, p < 0.001), but not for timing (χ2 (3) = 6.57, p = 0.087).

- **Human scoring and feedback dominated, and the stakes moved the choice.** For a final paper worth 40% of the course grade, 76 of 93 participants (81.7%) preferred human scoring and feedback against 4 (4.3%) who chose AI for both. Method preference varied significantly across ten assessment scenarios (χ2 (27) = 134.57, p < 0.001, Cramér's V = 0.22) and across five assignment types (χ2 (12) = 35.19, p < 0.001, Cramér's V = 0.16). AI-only scoring and feedback was the least preferred option in most scenarios; the highest AI-only preference was the near-deadline option (n = 35, 37.6%).

- **AI was trusted for mechanics and doubted for interpretation.** Seventy-three participants agreed (against 20 disagreeing) that AI can accurately grade grammar and mechanics, but only 31 agreed (against 62) that it can grade complex or creative writing, and 82 agreed (against 11) that it might overlook important aspects and struggle to interpret tone or emotion. For feedback, 77 agreed it is easy to understand, yet 68 agreed (against 25) that it is repetitive and 79 (against 14) that it sometimes contradicts itself.

- **Students wanted transparency, control, and a [[human-in-the-loop-ai|human in the loop]].** Eighty-eight agreed (against 5) that they want to opt in or out of AI scoring, 83 (against 9) want a breakdown of how AI grades each part of their writing, 81 (against 12) want feedback on both strengths and weaknesses, and 67 (against 26) want AI decision-making to be fully transparent. Seventy-five (against 18) preferred that AI assist human graders rather than replace them, and 69 (against 24) that AI scoring and feedback always be reviewed by a human.

- **Familiarity with AI did not predict preference; experience with feedback and comfort with technology did.** In the ordinal regression on AI preference, only rarely-or-never AI use was significant (B = 2.11, SE = 1.03, t = 2.05, p = 0.040, OR = 8.24). In the regression on preference for AI relative to human grading, being somewhat uncomfortable with technology lowered the odds of a higher AI-preference category (B = −1.37, SE = 0.68, t = −2.01, p = 0.045, OR = 0.26), while receiving human feedback frequently raised them (B = 1.24, SE = 0.58, t = 2.13, p = 0.033, OR = 3.45).

- **After running ChatGPT themselves, most reflections still cast AI as a formative aid.** Of the 63 participants who answered the reflection, the largest theme was AI as a formative learning aid (n = 32), followed by skepticism about its educational impact (n = 18), preference for human authority (n = 17), and context-dependent acceptance (n = 9). Sentiment scores were positive for all three topic-model topics: usefulness and clarity 71, accuracy of scoring and feedback 70, and detailed feedback and examples 30.

## What the survey measured, and what it did not

The design is a single cross-sectional, self-administered survey. Participants were recruited by convenience from the university's research participation pool for one percent extra course credit, and data were collected online through Qualtrics in Fall 2025. The sample of 93 was 78% female (n = 73), 19.3% male (n = 18) and 2.2% non-binary (n = 2); ages ran from 17 to 40 (M = 22.06, SD = 5.33); the largest major group was psychology (n = 70). Retained subscales had Cronbach's alpha of 0.73 for AI scoring perceptions, 0.78 for AI feedback perceptions, 0.74 for AI preferences, and 0.77 for AI versus human preferences.

The survey mixed four strands: Likert-type perception and preference items, scenario-based choices among human and AI scoring/feedback combinations, the two ordinal regressions, and a [[generative-ai]] activity in which participants copied a question, a rubric, and a short response into ChatGPT (GPT-4o/GPT-5-class) and reflected on the output. The reflection data were analyzed with thematic analysis, Latent Dirichlet Allocation topic modeling, and a researcher-built sentiment lexicon. Because the design is cross-sectional and self-report, no causal direction is established, and the authors frame the regression associations as exploratory.

## What this means for practice

- **Instructors.** Treat the human grader as the default for final judgment and position AI where students already accept it: [[formative-assessment]], drafting, and revision. Students preferred a task-dependent tone, bulleted formatting, a mix of concise and detailed feedback, and feedback at multiple stages rather than at one endpoint.
- **Assessment designers.** Keep AI on lower-order work. Grammar and mechanics was the most preferred focus (n = 35), and AI scoring was seen as accurate there (73 agree) but not for complex or creative writing (31 agree). Build the human review step in, since 69 of 93 wanted AI scoring and feedback reviewed by a human.
- **Instructors.** Make the process visible and optional. The strongest preference signals were wanting to opt in or out of AI scoring (88 agree), a breakdown of how AI grades each part (83 agree), and fully transparent decision-making (67 agree). A one-off AI score with no rubric justification is the configuration students least wanted.
- **Faculty developers.** Do not assume familiarity with AI drives acceptance. General familiarity with AI and frequency of AI use were not significant predictors of preference, while comfort with technology and prior experience of human feedback were. Support students who are uneasy with technology, and preserve instructor feedback rather than substituting for it.

## Limitations

- The sample is a convenience sample from one university, mostly psychology majors and mostly female, so the authors state the findings reflect this specific student population and may not generalize across disciplines, institutions, or demographics.
- The study measured self-reported preferences and perceptions rather than behavioral outcomes, so it cannot show whether AI scoring or feedback changes learning, and sustained exposure across a semester was not examined.
- Participants evaluated AI-generated responses to a common prompt rather than receiving feedback on their own writing, and the ordinal regressions had a small sample and many parameters, which the authors call exploratory and vulnerable to inflated Type I error across the many comparisons.
- The [[qualitative-research|qualitative]] coding was done by a single researcher with no inter-coder reliability, and the [[affective-computing|sentiment analysis]] used a researcher-developed lexicon, so those patterns are exploratory.

## Citation

Yildirim-Erbasli, S. N., Ilgun Dibek, M., Thomas, M. L., & Lesoway, N. (2026). [When Do Undergraduate Students Prefer AI? Insights into AI Scoring and Feedback](https://doi.org/10.3390/bs16071196). *Behavioral Sciences*, 16(7), 1196.