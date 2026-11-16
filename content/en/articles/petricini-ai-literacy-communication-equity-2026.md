---
title: "AI Literacy in a Basic Communication Course: Insights on Equity, Motivation, and Reducing Uncertainty"
created: "2026-11-16T09:00:00-04:00"
updated: "2026-11-16T09:00:00-04:00"
type: article
evidence_context: educational
authors: ["Petricini, T.", "Cruz, L."]
published: "2026-01-09"
venue: "Journal of Teaching and Learning with Technology"
source_url: https://doi.org/10.14434/jotlt.v12i1.41702
foundations: [ai-literacy, theories-and-frameworks, curriculum-design]
pedagogy: [motivation, anxiety-and-stress, scaffolding, self-determination-theory, student-experience]
technology: [generative-ai, conversational-ai]
assessment: [self-report-measures]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
methods: [quantitative-research]
research_method: [survey]
discipline: [humanities education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers, faculty developers]
sources: ['raw/papers/petricini-ai-literacy-communication-equity-2026.md']
confidence: medium
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Petricini and Cruz (2026) embedded ten low-stakes [[ai-literacy|AI literacy activities]] across weeks 2 to 11 of an asynchronous online section of CAS 100A Effective Speech, a general education public speaking course, and measured students' [[motivation|motivation]] before and after with an adapted Intrinsic Motivation Inventory. The analysis rests on 133 usable responses from 200 enrolled students (66.5%) across four sections taught by one instructor between fall 2024 and spring 2025. Interest in the course rose, the value students placed on learning AI held steady at a high level, and [[anxiety-and-stress|anxiety about using AI]] fell. [[self-efficacy|Perceived competence]] fell too, and the authors read that decline as a productive recalibration rather than a loss: students who began overconfident learned, through authentic use, what they did not yet know. The subgroup results are the part a practitioner should sit with — female-identifying students lost more confidence than their male peers, and students from racially minoritized groups did not show the drop in AI-related stress that White students did.

## Key Findings

- **Enjoyment and relevance rose across the semester.** On a 1–7 scale, agreement that the course would be enjoyable moved from 5.09 to 5.55 and the gain held on the Wilcoxon test, while interest in using new technologies rose from 5.46 to 5.57 without reaching significance. Value items started high and stayed high; one, on the course being valuable for personal development, reached significance on the t test but not on the Wilcoxon.
- **[[anxiety-and-stress|Pressure and tension]] were low at the start and fell further.** Worry about not performing well once AI tools were involved dropped from 2.63 to 2.16 (p = .04). Feeling anxious about using the tools went from 3.25 to 2.86, and feeling stressed at the thought of learning about AI from 2.52 to 2.17; neither reached significance on the Wilcoxon test.
- **[[self-efficacy|Perceived competence]] declined, and the authors argue that is the point.** Confidence in mastering the skills taught fell from 5.63 to 5.12 (p < .01), and belief in being capable of doing well from 6.02 to 5.51 (p = .03). Encountering boundary cases — emotional tone, audience nuance, copyright — tempered initial overconfidence, which the authors treat as maturing judgment rather than a failure of the intervention.
- **The benefit was not evenly distributed by gender identity.** One posttest difference reached significance: male-identifying students rated themselves higher than female-identifying peers on being able to use any new tools in the course (p = .02). Female-identifying students registered significant pre-to-post declines on two competence items; male-identifying students declined on one and gained on the value of the course for personal development.
- **Students from racially minoritized groups did not get the same stress relief.** White-identifying students dropped significantly on all three pressure and tension items, including worry about performance (2.67 to 1.90) and stress at the thought of learning AI (2.59 to 1.88). Students of other racial, ethnic or heritage identities showed no significant change on any of the three, and their worry if anything rose slightly (2.54 to 2.65).
- **The intervention was discipline-specific rather than generic.** Each week's activity was tied to a speech assignment already in the course: prompting Copilot for a travel plan with deliberate "plot twists," comparing AI-generated speech topics with students' own, condensing a full speech into a 50-word elevator pitch, uploading an outline for structural feedback, generating an image and taking up copyright, and having the model build an audience profile for a persuasive speech.
- **The authors describe a learning arc rather than a single effect.** Value and interest rose first because the tasks were relevant and authentic; pressure fell because contact began with low-stakes exploration; competence dropped when students met cases the model handled badly. Designing for that sequence, they argue, matters more than maximizing early [[self-efficacy|self-efficacy]] scores.

## How the study was done

The course is a required general education public speaking class at a large, public, research-intensive university, delivered asynchronously online and enrolling a mix of students in fully online degree programs and campus students taking the online section for scheduling reasons. One instructor taught all four sections between fall 2024 and spring 2025. Because every section must use the same instructional design, materials and assessment, a control group was not possible, and the authors are explicit that this is a pre-post survey design rather than a quasi-experiment.

A total of 136 students consented, three surveys were removed for noncompletion, and the final sample is 133 of 200 enrolled. Participants were recruited and surveyed by a member of the research team who was not the instructor, under a pre-existing exempt Institutional Review Board protocol for general education courses; participation earned low-stakes extra credit, with an alternative assignment for students who declined. The instrument was the Intrinsic Motivation Inventory, grounded in [[self-determination-theory|self-determination theory]], with three interest/enjoyment items, three perceived competence items, three pressure/tension items and four value items, lightly reworded to refer to AI tools, rated 1 (strongly disagree) to 7 (strongly agree). The perceived choice and relatedness subscales were dropped as inapplicable.

Identifiers were not collected, so responses could not be paired across administrations; the two semesters were combined and compared as pre- and posttest groups, using Wilcoxon signed rank tests and descriptive statistics, with analysis of variance for the gender and race/ethnicity subgroups. Only those two demographic variables produced groups large enough to compare. Analysis was done in R.

## What this means for practice

- **Put the low-stakes contact first.** Pressure fell in a course where students met the tool through exploration, not assessment. The sequence the authors describe — exploratory prompting, then critique of poor output, then use on real assignments — is a design any course can copy without new software.
- **Do not read a competence dip as failure, and measure practice rather than attitude.** An initiative that makes students more accurate about their own skill will often lower self-ratings. Judging it by whether confidence rose would reward the overconfidence the course was trying to correct; the more useful question is whether students can now say what the tool does badly. The authors name the next step as practice: whether students disclose AI assistance, justify it, and accept or reject suggestions in drafts. Attitude gains are a leading indicator, not evidence of capability.
- **Build in the equity check.** The subgroup results are the actionable finding: a single intervention produced different confidence and stress trajectories for different groups. Slowing down at the point where competence drops, making room for students to describe their own prior experience with technology, and diversifying the examples are the remedies the authors propose.
- **[[scaffolding|Scaffold]] against the syllabus you already have.** Ten short activities, each attached to an existing speech assignment, is a lighter lift than a new module, and it avoids the add-on framing that leaves AI literacy as an elective topic.
- **A communication course is a good host for this work.** Audience analysis, message design, evidence quality and ethical reasoning are the same questions GenAI raises, so the literacy work lands inside the discipline instead of beside it.

## Limitations

- The paper states that a pre-post design without a control group cannot account for history, maturation or other confounds, and that initially high item scores create regression-to-the-mean problems that weaken tests of difference.
- Because responses could not be paired, the analysis compares two groups rather than measuring change in individuals, which the authors say limits statistical power, and the comparison groups were unequal in size.
- The population is one instructor at one institution over one academic year, so replication across instructors, modalities and institutions is needed before the pattern can be treated as general.
- The instrument measures motivation and self-reported confidence, not learning; the paper is explicit that it is not a direct measure of what students can do with AI.
- The subgroup analyses rest on small cells — 43 male and 34 female respondents at posttest, 51 White and 26 of other identities — so the differences are suggestive rather than stable estimates.
- The equity finding is reported without a mechanism: the paper can show that female-identifying and racially minoritized students fared differently but cannot say why, and its remedies are proposals rather than tested adjustments.

## Citation

Petricini, T., & Cruz, L. (2026). [*AI Literacy in a Basic Communication Course: Insights on Equity, Motivation, and Reducing Uncertainty*](https://doi.org/10.14434/jotlt.v12i1.41702). *Journal of Teaching and Learning with Technology, 14*(Special Issue), 164–185.
