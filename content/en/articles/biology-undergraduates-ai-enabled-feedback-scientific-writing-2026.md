---
title: "Biology Undergraduates' Use of AI-Enabled Feedback to Revise Scientific Writing: Recipience and Barriers"
created: "2026-10-26T09:30:00-04:00"
updated: "2026-10-26T09:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/biology-undergraduates-ai-enabled-feedback-scientific-writing-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [case study]
discipline: [biology education, writing education]
audience: [instructors, faculty developers, instructional designers, researchers]
level: [undergraduate, higher ed]
pedagogy: [student-ai-interaction, help-seeking]
technology: [generative-ai, llm]
assessment: [feedback, feedback-literacy, ai-feedback-quality, formative-assessment, self-report-measures]
methods: [qualitative-research]
institutions: []
ethics: []
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Weston and Long (2026) report a two-case study of [[higher-ed|undergraduate]] biology teams revising a research proposal introduction after receiving [[feedback]] developed by their instructor with a custom [[llm|GPT]] tool. Across both teams, 10 of the 22 comments were fully or partially addressed, and both teams left the same demanding categories unused. The authors conclude that [[generative-ai|generative AI]] supported revision mainly through the content of the feedback, while barriers to implementing it persisted.

## Key Findings

1. **Half of the feedback was taken up.** Across both teams, 10 of the 22 comments were fully or partially addressed, leaving more than half unaddressed.
2. **Revision work was meaning-based, not surface editing.** Across both teams, deletions were the most frequent operation (14 of 31 changes), followed by additions (10 of 31 changes).
3. **The teams took different revision routes.** Team 1 primarily deleted content and moved text; Team 2 made more additions than deletions and expanded substantive content.
4. **Prescriptive comments were used more than demanding ones.** Team 2 fully or partially addressed 6 of the 9 paragraph-specific comments but none of the 4 whole-proposal comments.
5. **Students avoided new research.** Neither team added new citations: both teams removed citations from their first drafts, and Team 1 deleted 5 citations that were essential for supporting claims.
6. **Self-evaluation feedback was largely ignored.** Neither team addressed the "Flow of Writing" or "Claims Are Supported" comments, which required judging the coherence of the proposal or the adequacy of support for claims.
7. **One team shrank its draft.** Team 1's word count fell from 465 words in the first draft to 292 words in the final draft, tightening prose while omitting rubric-relevant detail.

## The tool: instructor-configured feedback

The instructor developed [[formative-assessment|formative feedback]] with a specialized [[llm|GPT]] (model 4o) configured with detailed instructions and a curated knowledge base, so it could query course-relevant documents and incorporate them into its responses. The setting was the laboratory component of a combined lecture and laboratory course in introductory [[biology-education|organismal biology]], at a STEM-focused residential college within a large Midwest research university. The instructor reviewed the feedback for accuracy and quality and edited it before students saw it, and opted not to use follow-up prompts to refine the output. This is the instructor-side of [[teacher-role|teacher oversight]] that [[human-in-the-loop-ai|human-in-the-loop]] feedback design requires, and the paper treats it as part of what makes the feedback [[ai-feedback-quality|AI-enabled feedback]] rather than raw [[generative-ai|generative AI]] output. The GPT was intentionally grounded in [[learning-theories|learning theory]] and course-specific supports: the [[scaffolding|rubric]] incorporated the Claim, Evidence, and Reasoning framework used throughout the course, and a [[scaffolding|scaffolding tool]] specified the content expected in each of the four required paragraphs. This is the human-centered design the authors call AI-enabled feedback, and it matters for how [[ai-feedback-quality|feedback quality]] should be judged. Student data was protected by written consent, anonymizing proposals before they reached the GPT, and ensuring the proposals were not retained or used to train or improve its models.

## What the revision analysis showed

The authors adapted a revision operations coding scheme to categorize meaning-based revisions as additions, deletions, moves, and substitutions; surface-level changes such as spelling or grammar corrections were excluded, so the analysis isolates substantive [[writing-education|writing]] revision rather than copyediting. Across both teams all four types of meaning-based revision were observed, which is notable given well-documented challenges students face in using feedback to make substantive changes. Team 1 primarily deleted content and moved text, whereas Team 2 made more additions than deletions. One exception shaped the analysis: Team 1's first draft was missing one required paragraph, so the corresponding final paragraph was not coded, and they therefore had fewer comments in the analysis. Notably, both teams removed citations from their first drafts and did not introduce any new citations in their final drafts.

## Why uptake was uneven

The clearest pattern is that comments requiring students to identify new information or conduct additional research were typically only partially addressed or left unaddressed. Comments requiring common knowledge were more likely to be addressed than those requiring information that must be researched. Team 2 added details such as a description of the local food bank and the qualifier "limited" in its explanation of healthcare access, additions that involved general knowledge; Team 1's only addition was a transition sentence responding to a relatively prescriptive suggestion. The authors read the missing revisions as evidence that students opted to work with existing material over conducting additional research, suggesting either difficulty researching requested information or a reluctance to do so. The second pattern is that feedback requiring self-evaluation, whether judging the coherence of the proposal, evaluating claims, or recognizing gaps in reasoning, was also largely unused. Incorporating new information would have required finding sources, assessing their relevance and quality, and integrating and citing them, and neither team demonstrated this type of engagement.

## Within the two cases

The two teams read the same feedback differently, and the contrast shows that [[student-ai-interaction|tool use]] is not the same as [[learning-gains|learning]]. Team 1 investigated the relationship between tree density and median income, asthma frequency, and UV exposure in previously redlined communities, and responded by improving conciseness and organization more than substantive content: although comments consistently requested additional information, explanation, reasoning, and evidence, the team made only one addition, a transition sentence. Its deletions sometimes worked against the assignment, removing an explanation that historically lower tree density had resulted from redlining and disinvestment, and cutting details needed to meet rubric requirements. Team 2, which investigated how redlining affected community garden quality and obesity, selectively expanded substantive content by adding the explanations comments requested, including a description of the local food bank's role. The team also showed a telling asymmetry in what it could follow: it incorporated an addition immediately after a scaffolding tip that supplied a suggested sentence starter, suggesting students found prescriptive or highly structured feedback easier to follow, whereas more open-ended feedback left them unable to identify what substantive information to include next.

## The design conditions that shaped uptake

Three conditions in the assignment and the course explain why some comments were taken up and others were not. The first is the division of labor: each student was responsible for writing one or two paragraphs, and students may have focused only on the feedback corresponding to the paragraphs they authored, which would explain why none of the 4 whole-proposal comments was addressed. The authors note that each whole-proposal suggestion included examples tied to specific paragraphs, and students still did not revise accordingly, so the explanation is not complete. The second condition is the feedback's own structure: each rubric section included identified strengths, suggestions for improvement, and examples intended to scaffold those improvements, and strengths were excluded from the uptake analysis because they did not require revision. The third condition is effort and affect, which the authors treat as volition: self-evaluation and finding new information typically require more effort than responding to prescriptive comments, and students may use an informal cost-benefit analysis when deciding how much effort to invest in responding to different feedback comments. That reading is consistent with established accounts of [[self-regulated-learning|self-regulated learning]], in which willingness to invest effort shapes whether feedback is implemented at all.

## What this means for practice

- **Instructors.** Build a revision opportunity into every assignment that carries feedback, so students must act on comments rather than file them.
- **Instructors.** Require students to explain in writing how they used each feedback comment or why they did not, making their decision-making visible.
- **Instructors.** Configure and review the feedback-producing tool before students see it, grounding it in the course rubric and knowledge base rather than using a bare [[prompt-engineering|prompt]].
- **Faculty developers.** Teach [[feedback-literacy|feedback literacy]] alongside scientific writing, since uptake depended on [[self-assessment]] skills, disciplinary understanding, and willingness to invest effort.
- **Instructional designers.** Preserve whole-proposal feedback as a distinct section and scaffold the self-evaluation it demands, because paragraph-specific comments were taken up far more often.

## Limitations

- The study includes only two cases, each a team of three students, at one STEM-focused residential college within a single introductory organismal biology laboratory course, so the patterns are not generalizable.
- Both teams revised only the introduction section of the research proposal: time constraints shortened the assignment, so the analysis covers a narrower genre than a full proposal or journal-style paper.
- The analysis is [[qualitative-research|qualitative]] and interpretive, with no comparison group, no outcome measure of writing quality, and no quantification of how much each revision improved the drafts.
- The instructor reviewed the AI-generated feedback but did not use follow-up prompts to refine it, so the study does not test whether iterative prompting would have produced feedback students acted on more fully.
- The authors did not compare the time required to produce AI-enabled feedback with traditional feedback, so the efficiency argument rests on two cases rather than workload data.
- The findings rest on students' revisions alone: no interviews or [[self-report-measures|written reflections]] captured students' perceptions of the AI-enabled feedback or their reasons for leaving comments unaddressed.

## Citation

Weston, M., & Long, T. M. (2026). [Biology Undergraduates' Use of AI-Enabled Feedback to Revise Scientific Writing: Recipience and Barriers](https://doi.org/10.64898/2026.10.19.760216). *bioRxiv preprint*.
