---
title: "Changes in pre-service physics teachers' TPACK and collaborative problem solving associated with an AI-supported CTD-PBL module: A quasi-experimental study"
created: "2026-09-18T05:10:00-04:00"
updated: "2026-09-19T10:43:18-04:00"
type: article
foundations: [ai-literacy, curriculum-design, teacher-role, tpack]
pedagogy: [collaborative-learning, problem-based-learning, scaffolding, self-efficacy]
technology: [generative-ai, prompt-engineering]
assessment: [formative-assessment, group-work, self-report-measures]
methods: [quantitative-research]
stakeholders: [learners, teacher-ai-competency]
ethics: [guardrails]
research_method: [quasi-experiment]
discipline: [physics education, science education]
level: [higher ed, teacher education]
audience: [teacher educators, researchers, instructors]
sources: ['raw/papers/chen-osman-preservice-physics-tpack-ctd-pbl-2026.md']
confidence: high
---

> **Synthesis:** Chen and Osman evaluated an eight-week AI-supported Collaborative TPACK Competency Development module based on [[problem-based-learning|problem-based learning]] (CTD-PBL) with 130 third-year pre-service physics teachers at a public [[higher-ed|university]] in western China, using an intact-class quasi-experimental pre-test/post-test design (65 participants per condition). [[generative-ai|Generative AI]] functioned as a bounded scaffold inside the module: groups used DeepSeek through task-specific prompt templates for lesson idea generation, resource organization, explanation comparison, feedback [[prompt-engineering|prompting]], and revision planning, and every AI output had to pass human verification before entering an instructional artifact. The CTD-PBL group reported higher post-test [[tpack|TPACK]] (M = 4.04 vs. M = 3.40, p < 0.001, d = 1.02) and higher perceived [[problem-solving|collaborative problem solving]] process scores (M = 3.62 vs. M = 3.05, p < 0.001, d = 0.88) than the conventional group, with larger pre-post gains on both outcomes and the clearest dimensional differences in integrative TPACK domains and in collaborative knowledge building and social regulation. The authors frame the results as associations with an integrated instructional condition rather than as evidence that AI alone produced the gains.

## Key Findings

1. **Both primary outcomes favored the CTD-PBL condition, with large post-test effects.** At post-test the CTD-PBL group scored 4.04 (SD 0.75) on self-reported TPACK against 3.40 (SD 0.61) for conventional instruction, t(128) = −5.842, p < 0.001, Cohen's d = 1.02, and 3.62 (SD 0.65) on perceived CPS against 3.05 (SD 0.66), t(128) = −5.024, p < 0.001, d = 0.88.
2. **The differential change was tested as an interaction, not just a post-test gap.** The mixed repeated-measures ANOVA showed significant group × time interactions for TPACK, F(1,128) = 41.787, p < 0.001, partial η² = 0.139, and for CPS, F(1,128) = 46.882, p < 0.001, partial η² = 0.152. Estimated mean change was 0.24 [95% CI: 0.08, 0.40] in the conventional group versus 1.03 [0.82, 1.24] in the CTD-PBL group for TPACK (difference in change 0.79 [0.55, 1.03]), and 0.06 [0.00, 0.12] versus 0.50 [0.34, 0.66] for CPS (difference in change 0.44 [0.31, 0.57]).
3. **Both groups improved, but the conventional group's gain was small.** Paired-samples tests were significant on both outcomes in both conditions: TPACK t(64) = −2.98, p = 0.004 and CPS t(64) = −2.08, p = 0.041 for conventional instruction, against t(64) = −9.84, p < 0.001 and t(64) = −6.34, p < 0.001 for CTD-PBL. The conventional gain in CPS was 0.06 points on a five-point scale.
4. **The strongest TPACK dimensional evidence sat with integrated knowledge.** Post-test differences were significant for all seven domains, with the largest effects for TPCK (d = 1.21), PCK (d = 1.06) and TPK (d = 0.95), and the largest mean difference for TCK (1.27 points [0.78, 1.76]). Secondary dimensional models found significant group × time interactions for PK, CK, TK, PCK, TCK and TPCK; TPK improved over time and differed at post-test but its interaction did not separate the two conditions, so the authors advise reporting it cautiously.
5. **CPS differentiated across all five dimensions.** Group × time interactions were significant for Participation, F(1,128) = 24.736; Perspective Taking, F(1,128) = 4.818, p = 0.029; Social Regulation, F(1,128) = 118.447; Task Regulation, F(1,128) = 55.706; and Learning and Knowledge Building, F(1,128) = 157.494, all p < 0.001 except Perspective Taking. Post-test effect sizes ranged from d = 0.72 (Participation) to d = 0.86 (Learning and Knowledge Building), and the authors read the largest interaction effects as the module's particular association with shared knowledge construction and regulation of group process.
6. **Baseline comparability was checked and no attrition occurred.** No significant pre-test differences were found on overall TPACK, t(128) = −1.102, p = 0.273, or overall CPS, t(128) = −0.928, p = 0.320, nor on any domain or dimension. All 130 matched cases were retained from pre-test to post-test, and implementation fidelity records showed the planned sequence (problem launch, analysis, investigation, solution construction, presentation, reflection) was delivered with no session excluded.

## How the module was designed and delivered

The CTD-PBL module was developed within a doctoral dissertation project through a systematic design, development and validation process informed by ADDIE, and the paper reports the implementation and outcome-evaluation phases. It ran for eight instructional weeks per group, organized around a problem-based task chain, with six task modules: a safe low-voltage DC power supply box, RC transient and sensor logging, magnetic field and force mapping, electromagnetic induction and energy conversion, AC-to-DC transformation for classroom sensors, and an electromagnetic compatibility survey. Each module required a group output (design plan, data-logging task, mapping activity, demonstration plan, instructional product, or mini inquiry report) plus process evidence such as planning sheets, calibration data, peer-feedback forms and reflection notes.

Because the same instructor taught both intact classes, implementation was spread across 16 calendar weeks with the two groups taught in alternating weeks, so instructor, content and time differences were reduced while each group still received the same eight-week sequence. Six instructional techniques structured the module: [[active-learning|active learning]], [[collaborative-learning|collaborative learning]], [[inquiry-based-learning|inquiry-based learning]], technological integration, [[formative-assessment|formative assessment]], and scaffolded support. Development work included a needs analysis survey, consultation with five physics [[teacher-role|teacher]] educators, and content and language validity checks in which all 33 content-validity items scored at least four on a five-point scale; the resulting revisions fixed ambiguous data-sheet instructions, rubric alignment, tool-selection confusion, terminology inconsistency across modules, and low engagement with peer review.

The conventional group received the regular lecture-based, demonstration-oriented teaching of the same physics content. Its students also worked in small groups with ordinary non-AI resources (online searching, short [[video-education|instructional videos]], peer discussion, instructor consultation), but AI tools were not permitted, which the authors describe as representing regular classroom learning rather than a no-support control.

## What the AI component actually did

DeepSeek was chosen because it was publicly accessible without institutional software, supported Chinese-language interaction, and suited bounded [[scaffolding]] tasks. Participants reached it through the same web interface and worked from task-specific prompt templates rather than unrestricted use. The paper lists five bounded uses: generating initial lesson ideas, refining tasks (missing steps, unclear instructions, feasibility for classroom implementation), producing peer-feedback prompts rather than accepting [[ai-feedback-quality|AI feedback]] as authoritative, organizing resources and background material, and checking [[pedagogy|pedagogical]] appropriateness, including whether an explanation was pitched at learners' [[prior-knowledge|prior knowledge]] or risked creating [[misconceptions]].

The governing rule was that all AI output was provisional and required human verification against four criteria: physics content accuracy, pedagogical appropriateness, classroom feasibility, and ethical or safety acceptability. Unsupported or overly generic responses had to be rejected, revised or verified using course materials, measurement evidence, group discussion, peer review or instructor feedback, and AI use was confined to designated task phases and tied to each module's required outputs. DeepSeek was not used for data generation, statistical analysis, scoring or conclusion-making, and the authors state explicitly that AI was a regulated [[curriculum-design|curriculum]] scaffold rather than an autonomous instructional agent. This boundary is also a limitation: complete raw [[student-ai-interaction|AI interaction]] logs were not systematically archived, so the analysis cannot reconstruct prompt sequences, rejected outputs or revision decisions at the level of individual AI conversations.

## What this means for practice

- **Teacher educators.** Organize AI-supported teacher education around authentic instructional problems instead of isolated tool training, so that pre-service teachers use technology while designing explanations, representations, demonstrations, assessment tasks and revision plans for concrete [[physics-education|physics teaching]] situations.
- **Teacher educators.** Introduce generative AI with explicit pedagogical boundaries, including trained verification against accuracy, suitability, feasibility, safety and ethics, because AI-generated physics explanations can be fluent and still conceptually inaccurate or pedagogically inappropriate.
- **Instructors.** Structure collaborative learning deliberately through role allocation, peer review, shared artifact production and reflection rather than leaving it as informal [[group-work|group work]].
- **Teacher educators.** Supply module materials, prompt templates, verification checklists, assessment rubrics and guidance on [[ethics|ethical AI]] use, [[privacy|data privacy]] and [[hallucination-risk|hallucination]] handling.
- **Teacher educators.** Prepare teacher educators to monitor AI-supported tasks and evaluate artifacts that combine human and AI contributions.

## Limitations

- The design was an intact-class quasi-experiment, so despite baseline comparability and a shared instructor, individual random assignment was not possible and selection effects or unmeasured class-level differences cannot be ruled out; the gains are reported as differential change associated with the instructional condition.
- AI was never isolated as an independent variable, so nothing here separates the contribution of AI from problem-based tasks, structured collaboration, technological activities, instructor scaffolding, [[peer-assessment|peer feedback]] or reflective revision.
- Both outcomes were [[self-report-measures|questionnaire]]-based — TPACK through a 28-item self-assessment and CPS through perceived processes aligned with the OECD PISA framework — so neither is evidence of demonstrated classroom competence or observed collaborative behavior, and AI process evidence was incomplete.
- The study took place with third-year pre-service physics teachers at one public university in western China, leaving transferability to other institutions, regions, subjects, year levels and [[teacher-education|teacher education]] systems untested; the instruments came from validated sources but were translated into Chinese without construct adaptation and the platform is reported as DeepSeek rather than a fixed model version, which the authors flag as a limit on exact technical reproducibility.

## Connected Concepts

- [[tpack]] — the outcome construct, measured across seven domains with the strongest gains in integrated TPCK, TCK and PCK
- [[collaborative-learning]] — collaboration was designed into the module through roles, shared artifacts and peer review rather than left informal
- [[problem-based-learning]] — the pedagogical architecture that gave direction to the AI-supported scaffold
- [[scaffolding]] — AI use was operationalized as bounded scaffolding, not as an autonomous solution provider
- [[self-efficacy]] — TPACK and CPS were self-reported, so the gains describe perceived competence rather than observed performance
- [[generative-ai]] — DeepSeek served idea generation, resource organization, explanation comparison and revision planning
- [[prompt-engineering]] — task-specific prompt templates standardized how groups used the platform
- [[teacher-ai-competency]] — the module targets discipline-specific AI-supported instructional design competence
- [[physics-education]] — tasks were bound to specific physics content from DC circuits to electromagnetic compatibility
- [[self-report-measures]] — the primary limitation is that both outcomes are questionnaire-based perceptions
- [[group-work]] — CPS dimensions cover participation, perspective taking, regulation and shared knowledge building
- [[guardrails]] — human verification, prompt templates and artifact checks govern what AI output may enter instruction

## Connected Articles

- [[ai-tpack-mathematics-teacher-education-2026]] — AI-TPACK development in another subject-specific teacher education setting
- [[ai-tpack-preservice-math-teachers]] — pre-service teachers' AI-TPACK, comparably measured through self-report
- [[ai-training-science-teacher-tpack-distance-2026]] — TPACK-focused AI training for science teachers in a distance format
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]] — AI scaffolding examined against collaborative problem solving
- [[tpack-genai-inservice-teachers-mediation-2026]] — generative AI's mediating role in teachers' TPACK
- [[pre-service-science-teachers-ai-perceptions-2026]] — perception-focused evidence of the kind this study moves beyond
- [[teacher-educators-ai-integration-preservice-2026]] — teacher educators' role in integrating AI into pre-service preparation
- [[wang-teacher-student-centered-agents-physics-2026]] — physics teaching with AI agents, a more agentic design contrast

## Citation

Chen, Q., & Osman, K. (2026). [*Changes in pre-service physics teachers' TPACK and collaborative problem solving associated with an AI-supported CTD-PBL module: A quasi-experimental study*](https://doi.org/10.3390/info17070688). *Information*, 17(7), 688.
