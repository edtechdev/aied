---
title: "Examining Student Use of Generative AI Through User-Input Data in an Engineering Statics Course"
created: "2026-11-16T09:30:00-04:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Wyszynski, J.", "Barry, M.", "Dosse, L. A."]
published: "2026-09-30"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B4B8-9A-63670
foundations: [academic-integrity, human-ai-collaboration]
pedagogy: [student-ai-interaction, self-regulated-learning, help-seeking]
technology: [generative-ai, conversational-ai, learning-analytics, technology-acceptance-model]
assessment: [assessment]
ethics: [privacy, ai-misuse-learning-harm]
research_method: [quasi-experiment, secondary analysis]
discipline: [engineering education]
level: [undergraduate, higher ed]
audience: [instructors, learning analytics designers, administrators]
sources: ['raw/papers/wyszynski-genai-user-input-engineering-statics-2026.md']
confidence: medium
methods: [quantitative-research, mixed-methods-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
evidence_context: educational
---
> **Synthesis:** Wyszynski, Barry and Dosse (2026) did something rare in the [[generative-ai|generative AI]] literature: instead of asking students what they do, they read what students actually typed. Across three sections of a 215-student Statics and Mechanics of Materials course, every prompt to Ace — the ChatGPT-backed assistant embedded in the Top Hat textbook — was logged, timestamped and anonymized. Of 215 students, 194 (90.23%) used it at least once, and the coded prompts show the tool was overwhelmingly a study aid: method questions (33.92%) and conceptual questions (28.19%) account for over 62% of the 227 coded prompts, while prompts that simply pasted a homework problem in accounted for 4.85%, and fewer than 1.5% of the more than 5,000 prompts were clearly solution-seeking. Usage clustered on Sunday and Monday and in a bimodal daily pattern peaking between 4 pm and 10 pm and again between 1 am and 3 am — the hours when office hours are closed. The intervention test is a clean null: an ethical-use module that every student passed at 100% correctness, with or without an additional lecture on using Ace well, produced no significant difference in the proportion of students seeking solutions. Knowing the rule and following it are different outcomes, and this study measures both.

## Key Findings

- **Nearly universal adoption, uneven intensity.** 194 of 215 students used Ace at least once. Median prompts per student were 18 in the no-intervention section, 29 in the section with both the ethics module and the effective-use lecture, and 20 in the module-only section; interquartile ranges were 25, 43.50 and 23.25.
- **A small group of heavy users drives the tail.** The section that received both interventions had roughly six [[student-ai-interaction|superusers]] by an outlier bound based on the third quartile and interquartile range, and its third quartile was 55 prompts against 32 and 30.25 in the other two sections. The authors suggest the effective-use lecture raised comfort enough to create them.
- **Most use was for method and concept, not for answers.** Of the 227 coded prompts, Methodology (asking how to approach a Statics problem) was 33.92% and Conceptual Understanding 28.19%; Reference Textbook — finding formulas, equations or definitions — and Error Checking were 11.45% each; Summarization 3.95%; Find Solution 4.85%. Two of those categories describe [[help-seeking|help-seeking]] of exactly the kind instructors want.
- **The similarity analysis agrees with the codes but on a different measure.** Only 121 of over 5,000 student prompts scored above the 75 similarity threshold against a bank of 572 homework questions, and researcher review classified 74 of those as genuinely solution-seeking. By section, 14 students in the no-intervention section (0.20), 15 in the module-plus-lecture section (0.22) and 6 in the module-only section (0.11) engaged in it.
- **The intervention comparison is null.** A Pearson chi-squared test of independence found no significant association between section and solution-seeking, so the three groups — no intervention, ethics module only, ethics module plus effective-use lecture — did not differ detectably. The authors emphasize that the module achieved 100% correctness on its knowledge check, which makes the null a statement about behavior rather than about comprehension.
- **Students noticed when the tool was wrong, and said so more often than they asked it for answers.** The Unreliable code — students commenting that the AI was not always correct, failed to understand the problem, or answered confusingly — was 6.19%, higher than Find Solution's 4.85%. That is a small but pointed result: some critical appraisal of output was happening in the same conversations.
- **Usage tracked the calendar.** Prompts peaked on Sundays and Mondays, matching reading and homework due dates; a rise on October 13, four days before the first midterm on October 17, was a 150% increase over the previous day; a smaller rise preceded the second midterm on November 21. Early-semester peaks on September 8 and September 17 coincide with the ethics module assignment and an in-class introduction to a separate GenAI study, which the authors read through the [[technology-acceptance-model|technology acceptance model]] as the point of highest perceived usefulness and ease of use.
- **The daily pattern is the case for AI as after-hours support.** Use was bimodal, concentrated between 4 pm and 10 pm and again between 1 am and 3 am, while lectures ran from 11 am to 1:50 pm and usage dropped between 7 am and 10 am. Coursework deadlines were midnight for homework and video questions and the start of lecture for readings and worksheets, so the evening peak is deadline-driven and the early-morning peak is not — it is students working when nothing else is open.

## How the study was done

The course is a large-enrollment Statics and Mechanics of Materials sequence taught from an instructor-authored digital textbook, "Statics and Mechanics of Materials: An Example-based Approach," hosted on Top Hat. Three sections ran in the same semester: 1020, 1030 and 1040, totaling 215 students, taught by the two instructors who wrote the textbook and the curriculum, with one teaching 1020 and 1030 and the other teaching 1040. The sample was 66.5% male, 66% White, 64.7% sophomores and 56.7% mechanical engineering majors.

Ace is a chatbot embedded in the textbook and on assignment pages. It makes a stateless API call to OpenAI's GPT API: each prompt carries only the current page's content and that student's chat history, with no cross-user retrieval or persistent state and weights fixed at deployment. Participation was voluntary and students were told that using or not using Ace would not affect their standing. Prompt text and replies were provided to the researchers by Top Hat under a research agreement, stored on a network-attached drive behind university credentials and a separate password, and anonymized with per-student identifiers before analysis.

The three sections differed in intervention. Section 1020 received nothing and served as the control. Sections 1030 and 1040 both completed an ethical AI module built on excerpts from the NSPE position statement on AI, the UNESCO recommendation on AI ethics, IBM's principles for trust and transparency and a case study on IBM Watson, followed by five multiple-choice questions on AI definitions, ethics and fairness with four attempts each: 52 students completed it in 1030 (74.28%) and 47 in 1040 (75.81%), both at 100% correctness. Section 1030 additionally received an in-class lecture on effective Ace use — prompt writing, the chatbot's Socratic behavior, its Summarization, Practice and Reference features, and how to read the LaTeX in its output.

Solution-seeking was detected by computing, for every student prompt, a similarity score against each of 572 homework questions using the ratio command in the rapidfuzz library, which is based on Levenshtein distance, then keeping the maximum score per prompt and extracting everything at or above 75 for researcher review. Analysis was in R: a Pearson chi-squared test on a contingency table at alpha .05, with independence and expected-count assumptions checked; the framing was the [[technology-acceptance-model|technology acceptance model]]. A subset of prompts was also coded thematically following Creswell: all prompts from the heaviest user in each section plus all prompts from the three lightest, 227 prompts from 12 students, double-coded with arbitration, using a schema from the authors' earlier study of the same course.

## What this means for practice

- **Behavioral logs answer a question surveys cannot.** Self-report on [[academic-integrity|academic integrity]] is exactly the topic where students have reason to under-report, and this dataset sidesteps that. Any course on a platform that logs prompts can run a version of this: compare a sample of prompts to the assignment bank, review the high-similarity matches by hand, and count students rather than prompts.
- **A single ethics module will not change behavior, and departments should stop assuming it will.** The module moved knowledge to 100% correctness and left the solution-seeking rate statistically indistinguishable from the no-intervention section. The authors' own recommendation is the right one: build ethics and effective use across the term rather than as one assignment.
- **Paste-detection has a known blind spot that students will find.** A Levenshtein threshold of 75 catches verbatim copying and misses paraphrased or truncated problem statements. Reading the code frequencies alongside the similarity results makes this visible: 4.85% of coded prompts were outright Find Solution, but only 74 prompts in the whole corpus crossed the threshold. A department relying on one automated check is measuring the least sophisticated cheaters.
- **The support gap is at night and on weekends, and it is schedulable.** The bimodal pattern and the Sunday and Monday peaks say students reach for help when office hours, tutoring centers and email are unavailable. The authors suggest moving deadlines when instructors cannot staff those hours — a cheap intervention that follows from the timestamp data.
- **The heavy-user tail is where the design question lives.** Six students in one section accounted for a large share of prompts. Whether that is engagement or dependence is not answerable from counts, so a follow-up pairing logs with outcomes for those students is the obvious next study.

## Limitations

- **One institution, one course, small sections, quasi-experimental design.** Section assignment was not random, and section-level differences in instructor, schedule and cohort are confounded with the interventions. The authors list this directly.
- **The detection method undercounts the behavior it is designed to find.** Only verbatim and near-verbatim copying crosses the threshold; paraphrasing or dropping the problem statement evades it, which biases the between-section comparison toward the null and understates the base rate.
- **The coded subset is deliberately unrepresentative.** 227 prompts from 12 students, chosen as the heaviest and lightest users in each section, cannot support claims about the distribution of prompt types across the course — and the reported code percentages are from that subset, not the full corpus.
- **Activity outside Ace is invisible.** The platform logs only Ace. A 2025 survey in the same course found ChatGPT used by narrowly more students than Ace, so these conversations are a fraction of students' actual AI use, and any inference about how much AI assistance the course involves is a lower bound.
- **Prior knowledge was not measured.** None of the interventions controlled for prior Statics knowledge, so the null could reflect students who did not need solutions rather than students who chose not to ask for them.
- **The prompt data are prompts, not learning.** Frequency, timing and topic say nothing about whether the answers helped, and no performance measure is linked to usage here.

## Citation

Wyszynski, J., Barry, M., & Dosse, L. A. (2026). [*Examining Student Use of Generative AI Through User-Input Data in an Engineering Statics Course*](https://doi.org/10.18260/B4B8-9A-63670). *ASEE Computers in Education, 15*(4), 49–66.
