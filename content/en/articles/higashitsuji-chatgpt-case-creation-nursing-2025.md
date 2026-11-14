---
title: "Impact of ChatGPT on case creation efficiency and learning quality in case-based learning for undergraduate nursing students"
created: "2026-11-07T09:26:35-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
published: "2025"
source_url: "https://doi.org/10.1016/j.teln.2024.10.002"
sources: ['raw/papers/higashitsuji-chatgpt-case-creation-nursing-2025.md']
confidence: medium
page_kind: [synthesis]
research_method: [quasi-experiment]
discipline: [nursing education]
level: [higher ed]
audience: [instructors, researchers]
pedagogy: [case-based-learning, problem-based-learning]
technology: [generative-ai, llm]
assessment: [group-work]
ethics: [hallucination-risk]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** A feasibility study at one Japanese university tested whether [[generative-ai|ChatGPT]] could write the clinical cases that drive [[case-based-learning|case-based learning]] in [[nursing-education|nursing education]], and whether students noticed. Eight faculty members each created a case by hand and with ChatGPT; nine fourth-year students then discussed the resulting cases in a blinded nonrandomized crossover. Case creation time fell from a median of 106.0 minutes to 71.0 minutes, while measured discussion quality showed no significant difference. The study is small and underpowered, so it establishes a plausible time saving rather than an equivalence between generated and hand-written cases.

## Key Findings

1. **The design is two studies in one.** Eight faculty members served as their own controls in a single-group pre-post comparison, and nine students discussed manual and ChatGPT cases in a blinded crossover with order counterbalanced across three groups.
2. **Case creation time fell significantly.** Median time was 106.0 minutes for manual cases and 71.0 minutes for ChatGPT cases, a substantial saving, although the confidence interval was wide enough that the size of the saving for any given instructor remains uncertain.
3. **Perceived burden fell but not significantly.** The four-item Perceived Burden Scale score dropped from 15.0 to 11.5, a 23% decrease that did not reach statistical significance.
4. **Discussion quality showed no detectable difference on any indicator.** Speaking frequency, speaking time, speaking density and conversation occupancy were all similar across the two case types, as were subjective ratings of the discussion.
5. **More experienced instructors reported more burden with ChatGPT.** Self-rated teaching behaviors correlated strongly with perceived burden of AI case creation, which the authors read as experienced instructors holding generated cases to a higher standard rather than working more slowly.
6. **Student participation tracked motivation, not case origin.** Speaking density correlated with self-efficacy and self-regulation of learning, and subjective ratings tracked conversation occupancy; group assignment correlated with neither.

## What the two designs were asked to show

The study did not run one clean experiment. Faculty members created cases twice, once manually and once with ChatGPT, in a single-group sequence the authors chose because ChatGPT use cannot be blinded and because writing speed varies by person, so each instructor had to serve as their own baseline. Students then discussed one manual and one ChatGPT case in three groups of three, with odd-numbered groups taking the manual case first and even-numbered groups taking the generated case first. Each discussion lasted 30 minutes, a 15-minute washout separated them, and no facilitator was present. Group membership followed the dates students could attend rather than randomization, which places the comparison among quasi-experiments, not [[rct|randomized trials]]. Six cases were checked for validity by three researchers before use, and the free ChatGPT 3.5 was the model throughout. Reading every result below requires holding both halves in view: the faculty comparison is within-person and uncontrolled for order, while the student comparison controls order but not who was in each group.

## The saving is real; its size is not pinned down

Median creation time dropped from 106.0 minutes to 71.0 minutes, a statistically significant reduction that held across the eight instructors. The confidence interval around it is wide, and it is the most informative number in the paper: with eight faculty members the study establishes that the saving is probably positive, not how large a saving any given instructor should expect. Perceived burden moved the same way, from 15.0 to 11.5 on a scale built for this study, a 23% drop that did not reach significance.

The correlation analysis complicates the story. Faculty with higher self-rated teaching behaviors reported more burden when using ChatGPT, which the authors read as experienced instructors holding generated cases to a higher standard rather than working more slowly. The participants also entered with no prior educational use of ChatGPT (0%) and low computer anxiety, so the saving was not the product of an unusually technical group. A short usage guide was supplied, which is the study's practical precondition for the result. The honest takeaway for a department is that drafting with the tool is faster, and that the review time it frees up is where the value has to be realized.

## Discussion quality did not move, and the null is underpowered

The objective indicators all leaned toward ChatGPT cases and none came close to significance: speaking turns, seconds of speaking time, speaking density and conversation occupancy were nearly identical between the two conditions. Subjective ratings were also level. The tempting reading is that generated cases are equivalent for discussion. The study cannot support that word. Nine students in three groups give little room to detect anything but a large difference, and the authors' own power calculation puts the sample needed at 70. What the data do support is narrower: no detectable drop in the quality of a single 30-minute, facilitator-free discussion when the case was generated and then verified by three researchers. The broader claim in the title, that learning quality held, is a claim about discussion behavior in one session, not about learning.

## Speaking density tracks motivation, not case origin

The student correlations are the more interesting secondary result. Speaking density correlated with self-efficacy and self-regulation of learning, and subjective ratings of the group work correlated with conversation occupancy. Group membership correlated with neither. Read together, who spoke and how highly they rated the session depended on students' [[self-efficacy|self-efficacy]] and [[self-regulated-learning|self-regulated learning]], not on where the case came from. That fits [[group-work|group work]] research in which participation follows confidence, and it warns against crediting a case-writing tool for dynamics it never touched.

It also marks the study's largest gap: students never operated ChatGPT. The tool stayed on the faculty side of the workflow, behind researcher verification, a choice the authors defend on [[hallucination-risk|hallucination risk]] grounds but concede left students unmotivated by the technology itself. The saved faculty time, on this evidence, buys reviewed cases rather than a richer student encounter with AI. A program that wants the latter has to design a student-facing task, not assume it from the faculty workflow.

## What this means for practice

- **Instructors:** Draft cases with ChatGPT, then read every one for clinical accuracy and the complexity a course needs before students see it; the time saved per case is worth spending on that review, not on adding more cases.
- **Faculty developers:** Issue a short usage guide before expecting a time saving; these instructors had never used ChatGPT for teaching and still cut median creation time from 106.0 minutes to 71.0 minutes.
- **Curriculum designers:** Do not bank the saved time as capacity. The study's quality result covers discussion in one session, so redirect the time into case review, facilitator training, and follow-up assessment.
- **Researchers:** Plan for 70 participants, replace the bespoke burden scale with a validated measure, and test student-facing AI use as a separate condition rather than inferring it from faculty time savings.

## Limitations

- The sample is 8 faculty members and 9 students at one Japanese university, and the authors' power calculation puts the required sample at 70, so every null result is underpowered.
- Students were assigned to discussion dates by availability rather than randomly, and the three groups were self-selected, so group composition is uncontrolled.
- The Perceived Burden Scale was created for this study; its internal consistency was acceptable but it has no cutoff values and was intended only for pre-post comparison.
- Discussion quality was measured through the Method for Visualizing Group Work Activities in one 30-minute session per case, with no follow-up on learning outcomes, skill retention, or transfer to clinical practice.
- The tool was the free ChatGPT 3.5, which the authors note is already obsolete; results may not transfer to later models with stronger reasoning and source retrieval.
- Faculty were recruited by snowball sampling, all students were female fourth-year students, and no facilitator ran the discussions, so selection and setting effects are unaddressed.

## Citation

Higashitsuji, A., Otsuka, T., & Watanabe, K. (2025). [*Impact of ChatGPT on case creation efficiency and learning quality in case-based learning for undergraduate nursing students*](https://doi.org/10.1016/j.teln.2024.10.002). *Teaching and Learning in Nursing, 20*, e159-e166.
