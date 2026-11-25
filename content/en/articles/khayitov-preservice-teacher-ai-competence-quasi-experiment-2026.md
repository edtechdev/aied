---
title: "Developing pre-service teachers’ AI competence: a quasi-experimental study of a TICII-based methodical system"
created: "2026-11-25T09:24:00-05:00"
updated: "2026-11-25T09:24:00-05:00"
published: "2026-11-24"
type: article
authors: ["Umidjon Khayitov"]
venue: "Frontiers in Education, 11"
evidence_context: educational
foundations: [teacher-ai-competency, ai-literacy]
pedagogy: [tpack, professional-training]
technology: [generative-ai, learning-analytics]
institutions: [educational-policy-ai]
ethics: [privacy]
discipline: [teacher education]
level: [graduate, higher ed]
audience: [faculty developers, instructors, administrators]
page_kind: [evaluation]
research_method: [quasi-experiment, survey]
sources: ["raw/papers/khayitov-preservice-teacher-ai-competence-quasi-experiment-2026.md"]
confidence: low
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Khayitov (2026) reports a multi-institutional quasi-experiment on a methodical system for building [[teacher-ai-competency|AI competence]] in pre-service teachers, organized around a five-part model labeled TICII: transformation, individualization, competence, inclusivity and integration. Across six higher education institutions in Uzbekistan, 283 master's students in AI-related and computer-science programs were split into an experimental group of 144 and a control group of 139, assessed on a three-level competence scale at baseline and at the end of an intervention that ran over three academic years. The experimental group's share at the high level rose from 13.9% to 47.9% while its low-level share fell from 39.6% to 9.7%; the control group moved far less, and the final-stage difference between groups was statistically significant with a medium-sized association. The design is weaker than its headline numbers suggest: outcomes were retained as aggregate group frequencies rather than linked individual records, and the same instructors who taught also assessed, so the direction and size of any rater bias cannot be estimated.

## Key Findings
- **The experimental group's high-level share more than tripled.** It rose from 13.9% to 47.9% against a control group shift from 15.1% to 20.1%.
- **Low-level classification fell sharply in the experimental group.** From 39.6% to 9.7%, compared with 39.6% to 29.5% in the control group.
- **The groups were comparable at baseline.** A chi-square test across the three levels found no detectable difference in distribution before the intervention.
- **The final-stage difference was significant with a medium association.** The between-group test on level distribution gave Cramér's V = 0.332, with the group-level Mann-Whitney analysis reported alongside it.
- **Individual transitions are not shown.** Baseline and final records were kept as aggregate frequencies, so the analysis cannot say that particular students moved up a level.
- **The intervention included engagement monitoring.** An EduAI platform display estimated session-level engagement from video and audio cues processed locally on the instructor's computer, with a weighting scheme that has not been validated.

## What the methodical system contains

The TICII model is an attempt to operationalize what international frameworks leave general. [[tpack|TPACK]], DigCompEdu and the UNESCO AI competency framework for teachers each describe technological-pedagogical integration, and Khayitov argues they do not specify the diagnostic, individualization and ethical dimensions as an integrated instructional and assessment system. The intervention's nine modules were delivered across roughly 30 contact hours in the experimental course, with diagnostic scoring kept separate from the engagement display.

The EduAI platform is still under development. Its planned module for generating individual recommendations from diagnostic results has not been implemented, and the engagement heuristic combines attention at 40%, presence at 25%, activity at 25% and a 10% penalty term, with weights set by the developers rather than derived from a validation study. Privacy handling is described in unusual detail: face detection and recognition ran locally against official identification photographs, raw video was not stored or transmitted, and only an aggregate session-level indicator reached the institutional server.

## Reading the effect honestly

The change in the experimental group is large, and the study is careful about what it demonstrates. Assignment happened at the level of intact academic groups rather than individual students, so the independence assumption behind the student-level chi-square holds only approximately; the authors report a group-level non-parametric analysis to compensate, and note that final-stage high-level proportions were higher in experimental groups across almost all of the 35 intact groups.

The stronger caveat is assessment. Each student was assessed by their own course instructor, the instructors also delivered the instruction, and no independent or blinded rating was used, so inter-rater reliability could not be computed. A move from "low" to "average" or "average" to "high" is a judgment about a student made by the person who taught them, and expectancy effects are the obvious risk. The authors state that the direction and size of such bias cannot be determined from the data, which is accurate and also the reason to treat the effect size as provisional.

## What the study adds despite its limits

The contribution is a worked example of an AI-competence curriculum with assessment attached, in a context that is under-represented in the literature: postgraduate [[teacher-education|teacher education]] in Central Asia, across six institutions and three cohorts. Most [[ai-literacy]] frameworks for teachers stop at describing competencies; this one specifies modules, a diagnostic scheme, and a level structure, and it reports where the implementation is incomplete.

The cohort-level shift is also consistent with what a curriculum can reasonably claim. A methodical system should change what a cohort knows and can do, and the shift in the high-level share is the kind of movement a 30-hour intervention might produce. What it cannot claim is that an individual student moved, because the records do not follow individuals.

## What this means for practice

- **Faculty developers.** Copy the structure, not the effect size. Nine modules over 30 contact hours with a diagnostic before and after is a workable shape for an AI-competence course; the reported gain needs independent assessment before it can be cited.
- **Teacher educators.** Assess AI competence with someone other than the instructor who taught it. The design weakness here is the one most easily fixed and the one that most affects what the result means.
- **Administrators.** Decide early whether engagement monitoring belongs in a competence course. The platform's heuristic weights were developer-chosen and unvalidated, and monitoring students' attention to grade their competence is a different proposition from monitoring it to inform teaching.
- **Researchers.** Keep individual records. Aggregate frequencies turn a longitudinal design into a cross-sectional comparison and cannot support the transition claim a curriculum evaluation wants to make.

## Limitations

- Baseline and final outcomes were retained as aggregate level frequencies rather than individually linked records, so no paired or longitudinal test of within-group change was possible and that comparison is reported descriptively.
- Each student was assessed by their own instructor, who also delivered the instruction, with no independent or blinded assessment; inter-rater reliability could not be estimated.
- Assignment was at the level of intact academic groups, so student-level tests rest on an approximate independence assumption and institution- or cohort-level confounding cannot be excluded.
- The EduAI engagement heuristic's weights were set by the platform's developers rather than derived from a validation study, and the platform remains under development.
- Per-module time allocation was not centrally recorded across all six institutions and three cohorts.
- Competence was classified on a three-level scale, which is coarse relative to the size of the reported shift.

## Citation

Khayitov, U. (2026). [Developing pre-service teachers’ AI competence: a quasi-experimental study of a TICII-based methodical system](https://doi.org/10.3389/feduc.2026.2016883). *Frontiers in Education, 11*.
