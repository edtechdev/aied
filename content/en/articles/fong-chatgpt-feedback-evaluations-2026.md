---
title: "I'm Sorry, Dave. I'm Afraid This Feedback is not Constructive: Human Perspectives Versus ChatGPT Evaluations of Feedback in an Era of Artificial Intelligence"
created: "2026-10-31T09:25:00-04:00"
updated: "2026-10-31T09:25:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/fong-chatgpt-feedback-evaluations-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [interviews, thematic analysis]
discipline: [writing education]
level: [higher ed]
audience: [instructors, faculty developers, assessment designers]
assessment: [feedback, ai-feedback-quality, feedback-literacy]
methods: [mixed-methods-research, qualitative-research, quantitative-research]
technology: [generative-ai, llm, conversational-ai]
pedagogy: [student-ai-interaction]
ethics: [trust, ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-31"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Fong and colleagues ask whether ChatGPT judges the constructiveness of [[feedback]] the way undergraduates do, and they answer with two linked studies. In Study 1, ChatGPT 3.5-turbo ranked 45 instructor-written feedback statements, and that ordering was compared with one built from 48 undergraduates' 1 to 4 ratings and 392 undergraduates' pairwise choices; the two lists correlated at only .34. The unexpected gap pushed the team into Study 2, five focus groups with 20 students at a large public university in the U.S. southwest in fall 2024. Students' working theory of [[ai-feedback-quality]] matched the model on specificity and actionability but not on encouragement or timeliness, and they read instructor feedback as relational, personalized and expert-driven work, treating purely machine-generated feedback on their essays as impersonal and potentially unfair while accepting [[human-in-the-loop-ai]] arrangements.

## Key Findings

1. Human and machine rankings barely converged. ChatGPT 3.5-turbo's ordering of the 45 statements correlated with the student-derived ordering at .34 (p = .023), sharing approximately 11% of their variance.
2. Specificity drove student judgment, nothing drove ChatGPT's. In the human model specificity predicted constructiveness (b = −17.38, p < .001) with R² = .81; specificity, positivity and word count were all nonsignificant for the model, R² = .09.
3. Students matched the model on two of six definitional aspects. Shown ChatGPT's list (specific, actionable, balanced, focused on behavior, timely, encouraging), they endorsed specificity and actionability and set encouragement and timeliness aside.
4. Praise from a machine was rejected outright. Students said AI encouragement felt fake, wanted to be told what to fix, and several preferred a delay so the relief of finishing was not cut short.
5. Instructor feedback was valued as care and expertise. Being read closely felt like care, machine feedback on paid tuition felt unfair, and instructors restricting student GenAI use while automating grading struck participants as hypocritical.
6. Room for AI was narrow and conditional. Students tolerated AI for grammar and spelling, short low-stakes weekly assignments, and a hybrid model where instructors review and supplement what the model drafts.

## A sequential design built on a surprise

Study 1 reused existing materials. Experienced university instructors had written 45 feedback statements at varying levels of constructiveness for a generic college writing assignment (thesis clarity, organization, supporting evidence), ranging from 12 to 72 words. Forty-eight undergraduates rated each statement for positivity and specificity on a 1 to 4 scale. A second group of 392 undergraduates saw 30 pairs drawn at random from the 45 and picked the more constructive member of each pair; counting wins produced an order from #1 to #45. ChatGPT was prompted to define constructive feedback from the perspective of a college writing instructor, then to rank the same statements, entered in random order in a single session on default free-account settings. The two orderings were correlated, then each was regressed on positivity, specificity and word count. Study 2 followed because that result was strange enough to need explanation, and it asked students what they thought constructive feedback was and what they thought of instructors who generate it with [[generative-ai]].

## What ChatGPT weighted differently

The rank correlation of .34 (p = .023) left the two sources sharing approximately 11% of their variance, which the authors call a modest degree of overlap. The regressions explain why. For the student rankings, specificity carried nearly all the signal (b = −17.38, SE = 1.91, 95% CI [−21.23, −13.53], p < .001), while positivity (b = −0.16, p = .88) and word count (b = −0.14, p = .19) did nothing, and the model accounted for R² = .81, F(3, 41) = 95.62, p < .001. A negative coefficient means a better rank, since rank 1 is most constructive. For the ChatGPT rankings, none of the three predictors reached significance: specificity (b = −6.44, p = .20), positivity (b = 0.76, p = .77), word count (b = 0.23, p = .28), with R² = .09 and F(3, 41) = 1.19, p = .32. The authors read this as evidence that the model ranked on criteria other than the ones it had just named, criteria they could not recover from the output.

## What students valued in instructor feedback

Study 2 put the question to 20 full-time undergraduates at a large public university in the U.S. southwest in fall 2024, in five Zoom focus groups of two to five students lasting about 60 minutes each. Four researchers open-coded transcripts and consolidated the codes into nine themes. The strongest theme was that feedback has to point somewhere. Students wanted the exact locus of a problem and a concrete move to fix it, and in at least three of the five groups they said they would know how to revise if they received a statement like "Your body paragraphs are strong; however, they would be more effective if they were connected to a clear thesis statement." What they did not want was encouragement. Some valued praise for showing what already worked; others resented words spent on it, and praise attributed to a machine drew the sharpest rejection in the data. Timeliness, the selling point of [[automated-essay-scoring]], barely surfaced. Students expressed empathy for busy instructors, and some wanted distance so that finishing an essay still felt finished.

## The relational account of why the source matters

Asked about instructors using AI to produce feedback on their work, most participants objected, and their objections were about relationship rather than accuracy. A comment from an instructor meant someone had read the essay, which several described as evidence of care. Students also described a developmental relationship: an instructor who had tracked their writing across a term could read the current draft against earlier ones. Layered on top was a fairness argument. Participants were paying for instruction by people with subject expertise, and they noted that they could ask an [[llm]] themselves for free, so the value of the class was the human reading. Some called it hypocritical for instructors to automate feedback while restricting student GenAI use. When the conversation turned to conditions, students made room: grammar and spelling were acceptable to hand off, as were short low-stakes weekly assignments, and a hybrid model drew real interest, provided the instructor read the work and added comments of their own. Most wanted that use disclosed, with one participant preferring not to know.

## What this means for practice

- **Instructors.** Write feedback that names the exact sentence, paragraph or move that needs work and the specific revision that would fix it, since specificity was the only predictor that survived in the student model and the idea the focus groups returned to throughout.
- **Instructors.** Do not treat a model's ranking of feedback quality as a proxy for student judgment, because the two orderings in Study 1 shared approximately 11% of their variance even though the model's own definition named the same criteria students used.
- **Instructors.** If you generate a first pass, read the student's work and add substantive comments before sending it, and say that you did, because students accepted [[human-in-the-loop-ai]] feedback only when the instructor's own reading was visibly part of it.
- **Faculty developers.** Build the disclosure conversation into [[feedback-literacy]] programming for staff as well as students, since participants wanted to know when AI was involved and one admitted preferring ignorance.
- **Assessment designers.** Reserve generated feedback for low-stakes and technical work and keep high-stakes, semester-long projects with the instructor, the boundary students themselves drew.

## Limitations

- Study 1 tested one model, ChatGPT version 3.5-turbo on default settings for a free account, accessed on June 26, 2024; the authors report that two years later a newer version, GPT-6 Astra, aligned more closely with student perceptions, so every AI-side result describes that vintage.
- All 45 prompts were entered in a single continuous session, which the authors flag as a limit on reproducibility, and they could not establish that the model ranked on the definition it had produced moments earlier; more broadly, students ranked 30 pairs while ChatGPT ranked all 45 at once.
- The comparison standard is ChatGPT's own output: the six aspects shown to focus groups (specific, actionable, balanced, focused on behavior, timely, encouraging) came from the model, so divergence is measured against the model's framing rather than an independent rubric.
- Study 2 drew 20 full-time undergraduates from four colleges of one large public university in the U.S. southwest in fall 2024, recruited through two instructors of a developmental reading and writing course and library flyers, so the sample is small and single-institution.
- Participants had not actually received AI-generated feedback in a course; they were reasoning about a hypothetical, not reporting an experience, and no classroom learning outcome was measured.
- This is a journal pre-proof version that has not completed final copyediting and typesetting.

## Citation

Fong, C. J., Zarei, P., Schallert, D. L., Mahdavivand Fard, S., & Dezhkameh, A. (2026). [*I'm Sorry, Dave. I'm Afraid This Feedback is not Constructive: Human Perspectives Versus ChatGPT Evaluations of Feedback in an Era of Artificial Intelligence*](https://doi.org/10.1016/j.caeo.2026.100429). *Computers and Education Open*.
