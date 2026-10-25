---
title: "Leading Continuous Improvement: Generative Artificial Intelligence and Assessment in Higher Education"
created: "2026-10-25T08:30:00-04:00"
updated: "2026-10-25T08:30:00-04:00"
type: article
published: 2026
sources: ['raw/papers/aalhe-genai-assessment-continuous-improvement-2026.md']
confidence: high
page_kind: [framework]
research_method: [position paper]
discipline: []
level: [higher ed]
audience: [assessment professionals, administrators, faculty developers, researchers, curriculum designers]
pedagogy: [scaffolding, metacognition, self-regulated-learning]
technology: [generative-ai, llm, rag, prompt-engineering]
assessment: [assessment, assessment-validity, formative-assessment, process-oriented-assessment, summative-assessment]
methods: [meta-analysis-systematic-review, ai-assisted-educational-research]
institutions: [governance, change-management]
ethics: [ai-sycophancy, ai-misuse-learning-harm, privacy, trust-calibration]
foundations: [limitations-in-aied-research, critical-thinking, teacher-ai-competency, learning-design]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Jenkins and de Mello-e-Souza Wildermuth (2026) argue that [[generative-ai]] can make program-level [[assessment]] feasible without displacing the [[human-in-the-loop-ai|human judgment]] it requires. Their premise is that assessment fails in most programs [[motivation]]: assembling evidence, maintaining a curriculum map, and synthesizing findings cost more coordination than faculty can sustain, so assessment drifts into compliance. They position AI inside a three-level framework — individual and course, program, and institutional — and illustrate it with six practice-based use cases drawn from leadership education: an AI second evaluative voice that resists grade drift, scaffolded assignments that make reasoning visible, an AI-populated [[curriculum-design|curriculum alignment]] matrix built in minutes for [[higher-ed]], a program-level [[critical-thinking|critical thinking]] assessment, a proposed pre- and post-2022 validity comparison, and an AI-assisted synthesis of external review notes. The paper is explicit about what it cannot do: contamination from AI-generated student work, the [[assessment-validity|reliability-validity tradeoff]], unreliable [[ai-detection|AI detection]] with [[legal-issues-and-risks|legal exposure]], and the faculty development gap.

## Key Findings

1. **The bottleneck is coordination, not motivation.** The authors argue that the gap between assessment aspiration and practice is a problem of process and resources — time, infrastructure, and coordination — that rarely matches the demands placed on faculty and staff, so assessment too often becomes compliance rather than inquiry.
2. **AI adds value in three historically expensive functions.** Synthesizing large bodies of evidence, detecting patterns across complex documents, and drafting structured outputs from human-generated inputs; these matter most at the program and institutional levels, where the volume of evidence exceeds the time available.
3. **AI can act as a second evaluative voice that resists grade drift.** A Canvas feature that generates suggested rubric-based scores proved substantially tougher than a typical end-of-semester human grader, holding the line on rubric criteria without the softening that exhaustion invites; the authors note rising grades account for most of the increase in college graduation rates since 1990.
4. **Scaffolded, process-visible assignments are the strongest defense.** Requiring an annotated outline, a partial draft with feedback incorporated, and a final version with a reflective memo produces a documentary trail of reasoning that is far more resistant to AI substitution than a paper submitted in a single file.
5. **An alignment matrix can be populated in minutes.** Using Claude Sonnet in a persistent Claude Project with the University of Southern Maine LOS program's outcomes and five core syllabi, the authors generated a 12-outcome by five-course A/X/— matrix that a faculty member with direct program knowledge confirmed as accurate; it surfaced that social responsibility is never formally assessed and that two outcomes are assessed only in the final required course.
6. **The contamination problem is the central validity threat.** If students use AI to produce the work faculty grade, grades become evidence of AI output quality rather than student learning, and a model grading a model's output is "a hall of mirrors"; a pre- and post-2022 comparison against the same rubric is proposed as a way to investigate it.
7. **The literature is thin exactly where AI could help most.** A scoping review the authors cite found most scholarship addresses the student and [[teacher-role|teacher]] levels, while institutional-level applications receive comparatively little attention — the gap these use cases target.

## Assessment as a leadership-driven cycle

The paper reframes assessment as a leadership-driven process of continuous improvement rather than a technical or compliance function, drawing on leadership education scholarship and the ILA General Principles for Leadership Programs. Assessment in this view is an iterative cycle of planning, evidence collection, analysis, and action that feeds back into itself, and its value depends on the relationship between evidence and improvement: without honest and rigorous [[educational-measurement]] Brown and Varghese's argument, institutions cannot make consistent progress in developing leaders. The framework operates at three levels. At the individual and course level, the challenge is alignment — ensuring that what is assessed reflects what was intended to be learned, rather than conflating timely submission with critical thinking. At the program level, the challenge is coordination: producing and maintaining an accurate curriculum alignment matrix [[collaborative-learning]] across courses, and that cost is what most programs find prohibitive. At the institutional level, the work expands to program reviews, accreditation, benchmarking, and longitudinal tracking, and requires political navigation and stakeholder engagement. Brown's Dimensions-Sources-Timeframes framework supplies the triangulation principle: no single assessment captures the full picture, so evidence must be gathered across outcome types, sources, and timeframes.

## Six use cases across three levels

The paper's evidence is a set of worked examples rather than a study. At the course level, a Canvas feature that generates suggested rubric-based scores when an assignment description and rubric are present produced grades the authors describe as substantially tougher than a typical end-of-semester human grader, with rationales traceable to rubric language rather than impressionistic judgment; they pair this with the observation that faculty evaluations are lower for those who grade more harshly. Their preferred response is design: scaffolded assignments requiring an annotated outline, a partial draft with instructor feedback incorporated, and a final version with a reflective memo. At the program level, they built a curriculum alignment matrix for the University of Southern Maine's Bachelor of Science in Leadership and Organizational Studies using Claude Sonnet in a persistent Claude Project, uploading the program's published outcomes and five core syllabi (LOS 300, 301, 304, 350, 440) plus a Kansas State University matrix as a format template; a faculty member with direct program knowledge confirmed the cell designations. A follow-up prompt asked the model to assess critical thinking across the program and to be rigorous rather than affirming, and it flagged a possible [[scaffolding]] gap in the cognitive complexity demanded across courses. At the institutional level, three reviewers' notes from a two-day external program review — several thousand words of observations and quotes — were uploaded into a persistent project alongside the self-study, and the resulting synthesis became the first draft of the closing presentation and the formal report, which the team then revised substantively.

## Tensions: contamination, reliability, and detection

The authors are explicit that their use cases are optimistic by design. The contamination problem is that AI-assisted program assessment may be evaluating work AI produced: if students generate assignments that faculty grade, the grades are evidence of AI output quality, and a program reporting that 92% of students demonstrated proficiency in critical thinking may be reporting something with no relationship to cognitive development. Because the contamination is invisible in aggregate data — a rise in mean rubric scores between 2021 and 2024 could reflect improvement, a changed [[learners|student population]], grade inflation, or AI use — they propose classifying tasks with the Artificial Intelligence Assessment Scale rather than pursuing forensic detection of individual students. Reliability without validity is worse than useless, they argue, citing Campbell's Law: programs may build highly reliable systems that consistently measure proficiency at using AI. Detection tools compound the problem, since commercially available detectors show significant false-positive rates that disproportionately affect non-native English speakers, and a federal lawsuit alleging discrimination in a detection-triggered disciplinary action has made [[administrator]] to let detector output serve as the evidentiary basis for misconduct findings. The remaining caution is the faculty [[educational-development|professional development]] gap: the faculty who would benefit most are often the least prepared, and investment in tools must be paired with investment in the formation that makes their use judgment-based.

## What the cited literature adds

The [[meta-analysis-systematic-review|literature review]] is candid about unevenness: much early scholarship was speculative, and the gap between what is technically possible and what has been rigorously studied remains wide. At the student level, the authors report a scoping review finding both productive uses — personalized feedback, formative support, adaptive pathways — and integrity challenges including AI-generated submissions and differential impact on students from non-English-speaking backgrounds. At the teacher level, they document AI-assisted rubric design, feedback generation, and workload reduction alongside concerns about deskilling. Two effect-size claims are cited rather than produced: a meta-analysis of 85 [[quantitative-research|quantitative]] studies reporting a very large overall effect of AI on [[learning-gains|learning achievement]] (Hedges' g = 1.10, p < .001), and a study of 455 students across four countries finding that AI tools influenced learning experiences, autonomy, and critical thinking. The authors' caution is that [[self-report-measures|self-reported]] gains in motivation are not evidence that learning occurred, so leadership educators should require direct evidence — demonstrated performance, behavioral change, integrated application of theory — rather than student satisfaction as a proxy.

## What this means for practice

- **Assessment professionals.** Compile the assessment artifact base before deploying AI: program learning outcomes, course syllabi, prior alignment matrices, and accreditation or program review frameworks in one persistent project environment, so the model can reason across the full corpus rather than treating each query as independent.
- **Assessment professionals.** Use AI for synthesis and reserve human judgment for interpretation — treat the first-pass matrix or draft as a starting point, then correct errors and make the interpretive and improvement decisions yourself.
- **[[teacher-role]]** Redesign assignments so reasoning is visible — iterative drafts, annotated sources, reflective commentaries — because that evidence is both more resistant to AI substitution and more useful for developmental formative assessment.
- **Faculty developers.** Treat AI assessment literacy as professional expertise requiring deliberate cultivation, and put the development investment before rather than after the technology deployment.
- **Administrators.** Ask the validity question at the level of outcome data rather than adjudicating individual students, and pair any pre- and post-2022 comparison with an AIAS classification of the assignment.

## Limitations

- The paper is a conceptual framework illustrated with practice-based use cases, not an empirical study; the authors state that validity studies of AI-rubric grading at the program level are still needed.
- Use Case E, the pre- and post-2022 comparison, is explicitly proposed rather than completed; the authors offer it as a methodology, not a result.
- The alignment matrix was reviewed and confirmed by a single faculty member with direct program knowledge, and the authors note that cell designations reflect the model's reading of documented syllabi rather than verified evidence of the enacted curriculum.
- The program review use case involves a single small, research-intensive doctoral program at one mid-sized public university, and the resulting synthesis required substantial human revision.
- The evidence cited for AI's effects on learning comes from other studies (for example, a meta-analysis of 85 quantitative studies reporting Hedges' g = 1.10), not from the authors' own data.

## Citation

Jenkins, D., & de Mello-e-Souza Wildermuth, C. (2026). [Leading Continuous Improvement: Generative Artificial Intelligence and Assessment in Higher Education](https://doi.org/10.61669/001c.172639). *Intersection: A Journal at the Intersection of Assessment and Learning*, *7*(5), 92–114.
