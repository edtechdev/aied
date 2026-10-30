---
title: "Agentic University: Collaborative Agents for Personalized Learning"
created: "2026-10-30T10:05:00-04:00"
updated: "2026-10-30T10:05:00-04:00"
type: article
authors: ["Fan, J.", "Zhou, T.", "Zhou, Y.", "He, Z.", "Zhou, Y.", "Wu, K.", "Zheng, X.", "Wang, X.", "Wang, Y.", "Li, Z.", "Liu, S.", "E, W.", "Qian, C."]
published: "2026-10-29"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.40492
foundations: [agentic-ai, human-ai-collaboration, learning-design]
pedagogy: [self-directed-learning, scaffolding, self-regulated-learning, student-engagement]
technology: [generative-ai, llm, personalized-learning, adaptive-learning]
assessment: [assessment, assessment-validity, formative-assessment, authentic-assessment]
methods: [design-based-research, mixed-methods-research]
research_method: [interviews, experiment]
level: [higher ed]
audience: [researchers, instructors, instructional designers, administrators]
page_kind: [framework]
sources: ['raw/papers/jingru-fan-agentic-university-collaborative-agents-2026.md']
confidence: low
source_depth: full text
verified: [citation, quotes, numbers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
---

> **Synthesis:** Fan and colleagues (2026) argue that personalized tutoring and generated materials are only part of what a learner needs, because a capability develops only when goals, activities and assessment form a coherent program that the learner can revise. Their system, Agentic University, is an organization of specialized agents plus a "Human Node" in which the learner is a member rather than a customer, and the artifact that persists is a Capability Program linking personal goals to multimodal activities and layered assessment evidence. Three studies support it: an LLM-judged comparison against three baselines on 96 simulated learner cases, an evidence-conditioned revision benchmark of 128 matched case pairs, and a randomized 32-learner study against the strongest baseline. The learning-outcome result is the headline, and it comes from an objective 50-point test rather than self-report. Confidence stays low because the case-count studies were scored by a language model.

## Key Findings

1. **The formative study identified four failures that a tutoring tool does not address.** Seven purposively sampled participants, five primary learners plus one technical practitioner and one data structures instructor, described learner context that was fragmented and sometimes inaccurate, learning routes with gaps in action and completion criteria, capability judgments that depended on which task and support happened to be available, and difficulty interpretation that never fed forward into the next choice (interviews in Mandarin, 40 to 60 minutes each, 22 codes across four themes).
2. **Program structure, not personalization, was where the gain concentrated.** Against GenMentor, the closest system-level baseline, AU scored 19.32 points higher on Assessment Validity (95% CI [17.55, 21.04]), 10.52 higher on Program Quality ([9.27, 11.77]) and 5.89 higher on Capability Coverage ([2.99, 8.50]), all surviving Holm correction across 96 simulated learner-goal cases. Learner Personalization was the one outcome that did not separate: 88.75 against 87.40, a paired difference of 1.35 points whose interval crossed zero (Holm p = .090).
3. **The submetrics locate the advantage in task design.** AU exceeded GenMentor by 23.54 points on Applied Practice Validity, 22.50 on Integrated Transfer Validity and 27.29 on Success Criteria Clarity. The comparison is between output structures rather than content quality: the baselines emitted plan text or per-session documents and quizzes, while AU linked teaching materials, assessments, practice tasks and integrative projects across capability, stage and program levels.
4. **Evidence-conditioned revision improved programs more, and both systems aligned revisions to the evidence.** Across 128 matched case pairs, AU scored 8.01 points higher on Program Improvement, 5.78 on Revision Decision Appropriateness and 2.19 on Post-Revision Path Coherence, with all three bootstrap intervals above zero. Evidence-Revision Alignment was effectively tied at 94.06 against 95.00, so the difference is in what the systems did with the same evidence rather than in how faithfully they cited it.
5. **The learner study found a larger knowledge gain from an objective test.** Thirty-two learners aged 18 to 30, 16 per group, pursuing the same researcher-assigned goal, rose from 21.88 to 34.06 on a 50-point Objective Capability test under AU and from 24.73 to 30.33 under GenMentor. Mean gains were 12.19 against 5.61 points, a 6.58-point difference (U = 184.5, raw p = .035, rank-biserial r = .44). Self-efficacy gains (15.30 against 8.77) and metacognition gains (15.10 against 7.29) pointed the same way without reaching significance.
6. **Only one experience measure separated the groups after correction.** Cognitive Support was 78.13 against 65.63, a 12.50-point difference that held after Holm correction (U = 190.5, p = .048, r = .49). Instructional Alignment, Learner Agency and Engagement, and Learning Efficiency all had higher means under AU but Holm-adjusted p values of .193, .126 and .193.
7. **Learner agency tracked metacognitive growth inside AU and not in the baseline.** Among AU participants, stronger reported Learner Agency and Engagement was associated with larger pre-post metacognition gain (rho = .557, p = .025), while GenMentor showed no such relationship (rho = -.343, p = .194). The authors label it exploratory, and the six AU interviews do describe choosing between video and text, replaying a difficult section and revising submitted work after feedback.

## What this means for practice

- **Instructional designers**: The transferable object is the Capability Program, not the agent roster. What the rated advantage rests on is that practice and assessment sit inside the plan at capability, stage and program levels, with success criteria written down. A program that names activities but not the evidence that would show a capability was reached reproduces the gap the formative study found.
- **Learning-technology teams**: The Human Node is the design commitment worth copying: learner correction is a first-class state update rather than a support ticket, and it is what keeps revision accountable to the person rather than to the model's inference about them.
- **Administrators and program leads**: The comparison to notice is that the baseline systems promised personalization and scored equal on it, while losing on assessment validity. If procurement is scored on personalization claims, it will not separate these systems.
- **Researchers**: The measurement design is reusable. Objective pre and post forms built from job-interview decision contexts, a gain-score comparison with rank-biserial effect sizes, and experience ratings corrected as a separate family is a template for evaluating agentic learning systems that generate their own content.

## Limitations

- Studies 1 and 2 were scored by a language model under one fixed configuration, on simulated and controlled cases rather than real learners. Expert and model composites agreed at Spearman rho = .721 on a 24-case subset, which is a correlation between raters rather than validation of the judge.
- The case-count studies compare complete system configurations, so the advantage cannot be attributed to the organizational mechanisms as against content formats or practice requirements. The authors call for component studies and for comparisons that account for actual learning time.
- The learner study is 32 people aged 18 to 30, recruited through online channels from university students, with one researcher-assigned goal. All three interview and survey instruments are Chinese-language, and the sample cannot support claims about other age groups or cultural settings.
- The revision benchmark used two preselected low-performance levels (20/100 and 50/100) and revisions that mostly added support inside an existing path. Changing direction, reducing workload or returning after an interruption were not evaluated.
- Correctness of generated materials and assessment feedback propagates into subsequent teaching, and the paper says how well learner correction resolves those errors across agent roles is still unstudied.

## Citation

Fan, J., Zhou, T., Zhou, Y., He, Z., Zhou, Y., Wu, K., Zheng, X., Wang, X., Wang, Y., Li, Z., Liu, S., E, W., & Qian, C. (2026). [*Agentic University: Collaborative Agents for Personalized Learning*](https://arxiv.org/abs/2610.40492). arXiv preprint arXiv:2610.40492.
