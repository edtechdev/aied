---
title: "Students Learn to Use Generative AI Before Learning to Question It: Ordinal Trajectories of Academic Use and Caution from Adolescence to University"
created: "2026-11-09T09:21:50-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey]
evidence_context: educational
level: [secondary, undergraduate]
audience: [instructors, researchers, administrators]
sources: ['raw/papers/cuenca-rodriguez-genai-use-caution-trajectories-2026.md']
source_url: "https://osf.io/preprints/edarxiv/cm438_v1/"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy]
pedagogy: [student-ai-interaction, self-regulated-learning]
methods: [quantitative-research]
ethics: [trust-calibration]
---
> **Synthesis:** Students start using [[generative-ai|generative AI]] for schoolwork years before they start questioning it. Across 1,598 students aged 12 to 25, use rose every year of secondary school while judgments of AI reliability did not move; the two trajectories separated at 14-15 and widened by 16-17. At university, use leveled off but shifted from exam study and question-answering toward translation and language correction. Only in the final year did caution rise, and mostly on research tasks such as citations and method. Caution here means believing output is unreliable, not checking it, so what students need is calibrated verification, taught early.

## Key Findings

1. **Use grew with age; caution did not.** Each additional year of secondary school brought more reported use and no meaningful change in how reliable students judged AI output to be.
2. **The gap opened in the middle of secondary school.** Use was already higher at 14-15 than at 12-13 and higher again at 16-17, while caution stayed flat in both bands.
3. **University use leveled off but changed character.** Overall frequency stopped rising with age, while exam study and quick question-answering declined and translation and grammar correction increased.
4. **Caution appeared late, in the final year.** Fourth-year students were more likely than those in earlier years to report strong caution, and the share of activities they treated cautiously was roughly double.
5. **Research tasks drove the late caution.** The final-year difference was concentrated in citation, sourcing and method decisions, while the everyday activities showed no reliable difference.
6. **Starting university did not raise caution.** Students who had just entered higher education used AI less than secondary students of the same age but judged its reliability in the same way.
7. **Caution is not verification.** The measure records whether students think output is reliable, not whether they check sources, catch errors or reach [[trust-calibration|calibrated trust]].

## Design, sample, and what "caution" measures

The study is a cross-sectional [[quantitative-research|survey]] using two coordinated online questionnaires adapted to each stage. Both asked how often students used GenAI for 11 common academic activities, on five ordered categories from "not at all" to "very much," and how reliable they judged AI output for the same activities, from "very reliable and always helpful" to "always providing incorrect answers." Seven research-oriented activities, from citation assistance and bibliographic searching to methodological design and discussion writing, appeared only in the higher-education version. Categories were scored 0 to 4 for descriptive summaries but treated as ordinal in cumulative-logit models that included activity fixed effects, participant clustering and robust standard errors.

The exact-age sample is 1,598: 1,167 secondary students aged 12-17 and 431 higher-education students aged 18-25. The course analysis used 380 students, 352 for caution. Three institutions took part; participation was voluntary, uncompensated, and took less than five minutes. Caution is a perception measure: the paper separates perceived reliability from calibrated trust, verification behavior and observed critical thinking, and the survey captures only the first.

## The adolescent divergence

Descriptively, average use on the 0-4 scale rose from 1.24 at age 12 to 1.77 at age 17, and the number of activities used "quite a lot" or "very much" rose from 1.76 to 3.48. Low use at 12 does not mean absent exposure: only 2.7% answered "not at all" across the activity set, and 64.5% used AI "quite a lot" or "very much" for at least one activity, with "resolving specific questions" the most frequent at 12.

The models confirm two different slopes. Use climbed steadily with each year of age, while the caution trend was slightly negative and not distinguishable from zero. The gap was already visible at 14-15 and more than doubled by 16-17 relative to the youngest band, which is the pattern the paper's title describes: students learn what the tool is for before they learn when to doubt it. Because the models treat the answer categories as ordered without assuming equal spacing, the estimates describe movement up the scale rather than an average score difference. The practical reading is that by the middle of secondary school, frequent use has become normal while skeptical appraisal has not kept pace.

## What changes at university

In [[higher-ed|higher education]] neither quantity moved with age: overall use was flat, and so was caution. What changed was the composition of use. Task-specific models showed declining odds per year for studying for examinations and resolving specific questions, and rising odds for translation and grammar and spelling correction. As students moved through university, translation and language polishing rose while exam study and question-answering fell, so the tool was used less as an answer machine for set work.

The course comparison locates caution at the end of the degree rather than the start. There was no uniform shift across the caution scale, but a fourth-year effect appeared at the top of it: 23.3% of advanced-activity responses in the fourth year expressed strong caution, against 10.1% in first year, 13.7% in second and 10.4% in third. Common-task caution moved from 8.6% in Years 1-3 to 14.3% in the fourth year, a difference that fell short of significance. Students who were cautious on advanced tasks were also more cautious on common ones, so the late shift looks like a broadening disposition rather than a narrow research-only habit.

## What the authors recommend

The recommendations follow the timing of the divergence. [[ai-literacy|Critical AI literacy]] should begin before the gap emerges, ideally by ages 13-14, and be reinforced through 14-17, teaching calibrated reliance — accepting useful outputs, rejecting incorrect ones, and recognizing when evidence is insufficient — rather than general suspicion. Because trust is task-dependent, instruction should separate low-risk, verifiable functions from high-risk ones involving factual claims, citations, theoretical synthesis or methodological decisions.

The paper sketches a classroom sequence: two plausible AI responses with short source passages, individual judgment followed by paired comparison, a revised unsupported claim, and annotated evidence, so that justified acceptance is rewarded alongside justified rejection. It also recommends formative assessment of the reasoning and recurring [[self-regulated-learning|self-regulation]] prompts such as "What evidence supports this answer?" The authors call this a teaching proposal, not a developmental sequence their survey demonstrated.

## What this means for practice

- **Instructors:** put explicit evaluation instruction in front of students at 13-14, before use habits consolidate, and make the task category the unit of the rule: citation and synthesis work warrants different scrutiny than translation. Pair assisted work with a short unassisted explanation.
- **Designers:** build assignments that require students to justify acceptance and rejection — two plausible AI answers with source passages, a revised unsupported claim, annotated evidence — rather than asking only whether AI was used.
- **Administrators:** coordinate the response across stages rather than waiting for final-year work to produce caution indirectly, since the first clear correction signal appears only near degree completion.
- **Researchers:** pair perception measures with behavioral trials that embed correct and incorrect outputs; [[student-ai-interaction|student-AI interaction]] research relying on self-reported reliability cannot separate informed caution from unfamiliarity.

## Limitations

- The design is cross-sectional, so age and year-of-study differences cannot establish individual developmental change; the fourth-year effect may reflect cohort or institutional composition.
- Caution is perceived reliability, not error detection, source checking or appropriate reliance.
- Ages 17 and 18 confound age with educational stage, and the comparison between secondary students aged 18 or older (47 of them) and university students aged 18-19 is quasi-experimental because the secondary category is not an exact age.
- The secondary questionnaire had no equivalent of the university option for non-use, which reduced ambiguity in one sample but not the other.
- Fifth-year students were excluded from the main course comparison as a small and heterogeneous group, including double-degree programs.
- Data come from three institutions in one national context.

## Citation

Cuenca-Rodríguez, M. E., Martínez-Rodríguez, M., Pérez-Eizaguirre, M., & Gómez-Moñivas, S. (2026). [*Students Learn to Use Generative AI Before Learning to Question It: Ordinal Trajectories of Academic Use and Caution from Adolescence to University*](https://osf.io/preprints/edarxiv/cm438_v1/). EdArXiv preprint. https://doi.org/10.35542/osf.io/cm438_v1
