---
title: "Students Learn to Use Generative AI Before Learning to Question It: Ordinal Trajectories of Academic Use and Caution from Adolescence to University"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T10:20:00-05:00"
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
verified: [citation, numbers, links]
foundations: [ai-literacy]
pedagogy: [student-ai-interaction, self-regulated-learning]
methods: [quantitative-research]
ethics: [trust-calibration]
---
> **Synthesis:** Between ages 12 and 17, students' academic use of [[generative-ai]] rose steadily while their caution toward it did not. Cuenca-Rodríguez, Martínez-Rodríguez, Pérez-Eizaguirre, and Gómez-Moñivas surveyed 1,598 students in an exact-age sample — 1,167 secondary students aged 12-17 and 431 higher-education students aged 18-25 — about the same 11 academic activities, plus seven research-oriented activities for the university group. Each additional year of age was associated with 17% greater possibilities of reporting a higher use category (OR = 1.17, 95% CI [1.12, 1.22]) while caution showed no significant change (OR = .96, p = .128), and the two trajectories diverged first at ages 14-15 and more strongly at 16-17. University use stabilized, but the functions delegated to AI shifted away from examination study and immediate question resolution toward translation and linguistic revision. Fourth-year students had greater odds of strong caution than those in Years 1-3 (OR = 1.70), concentrated in advanced research tasks (OR = 2.32). Caution here means perceived reliability, not observed verification.

## Key Findings

1. **Use climbed through secondary school; caution did not.** Each additional year brought 17% greater possibilities of higher use (OR = 1.17, 95% CI [1.12, 1.22]); caution showed no significant change (OR = .96, p = .128).
2. **The trajectories diverged at 14-15 and widened at 16-17.** Against ages 12-13, use was higher at 14-15 (OR = 1.36) and at 16-17 (OR = 1.85) while caution rose in neither band, giving relative odds ratios of 1.40 and 2.12.
3. **University use stabilized while its functions were redistributed.** Overall use showed no age trend (OR = 1.01, p = .767), but examination study (OR = .83) and question resolution (OR = .86) declined while translation (OR = 1.19) and grammar correction (OR = 1.15) rose.
4. **Strong caution concentrated in the fourth year.** Fourth-year students had greater odds of strong caution than those in Years 1-3 (OR = 1.70, 95% CI [1.09, 2.65]); strong caution covered 19.1% of used activities against 9.8%.
5. **Advanced research tasks carried the effect.** For the seven research-oriented activities, fourth-year students had more than twice the odds of strong caution (OR = 2.32, 95% CI [1.40, 3.83]); the 11 common activities showed a non-significant effect (OR = 1.32, p = .323).
6. **The stage transition changed use but not caution.** University students aged 18-19 had lower odds of higher use than secondary students aged 18 or older (OR = .67, 95% CI [.47, .97]), with a virtually identical caution distribution (OR = .99).
7. **Caution is perceived reliability, not verification.** The authors define it as more negative judgments about AI output reliability; it does not measure error detection, source checking, or [[trust-calibration|calibrated trust]].

## Design, sample, and what "caution" measures

The study is a cross-sectional [[quantitative-research|survey]] using two coordinated online questionnaires adapted to each stage. Both asked how often students used GenAI for 11 common academic activities, on five ordered categories from "not at all" to "very much," and how reliable they judged AI output for the same activities, from "very reliable and always helpful" to "always providing incorrect answers." Seven research-oriented activities, from citation assistance and bibliographic searching to methodological design and discussion writing, appeared only in the higher-education version. Categories were scored 0 to 4 for descriptive summaries but treated as ordinal, with cumulative-logit generalized estimating equations including activity fixed effects, participant clustering, and sandwich standard errors. The exact-age sample is 1,598: 1,167 secondary students aged 12-17 (M = 14.41, SD = 1.60) and 431 higher-education students aged 18-25 (M = 20.62, SD = 2.05); the course analysis used 380 students, 352 for caution. Three institutions took part; participation was voluntary, uncompensated, and took less than five minutes. Caution is a perception measure: the paper separates perceived reliability from calibrated trust, verification behavior, and observed critical thinking.

## The adolescent divergence

Descriptively, average use on the 0-4 scale rose from 1.24 at age 12 to 1.77 at age 17, and the number of activities used "quite a lot" or "very much" rose from 1.76 to 3.48. Low use at 12 does not mean absent exposure: only 2.7% answered "not at all" across the activity set, and 64.5% used AI "quite a lot" or "very much" for at least one activity, with "resolving specific questions" most frequent at 12. The ordinal models confirm the increase (beta = .155, SE = .022, p < .001) alongside a caution trend that was negative but not significant (beta = -.038, OR = .96, p = .128). Stacking the models shows use rising faster than caution (beta difference = .193, relative OR = 1.21, 95% CI [1.13, 1.30]); the age-band models give relative OR = 1.40 between 12-13 and 14-15 (95% CI [1.06, 1.85]) and 2.12 between 12-13 and 16-17 (95% CI [1.57, 2.85]). The ordinal models assume no equal intervals between categories.

## What changes at university

In [[higher-ed|higher education]] neither quantity moved with age: use gave OR = 1.01 (p = .767) and caution OR = .99 (p = .848). What changed was the composition of use. Task-specific models showed declining odds per year for studying for examinations (OR = .83, q < .001) and resolving specific questions (OR = .86, q = .002), and rising odds for translation (OR = 1.19, q < .001) and grammar and spelling correction (OR = 1.15, q = .006), with Benjamini-Hochberg correction across tasks. The course analysis found no uniform shift across the caution scale (OR = 1.33, p = .125) but a fourth-year effect at the top of the distribution (OR = 1.70, p = .019). Strong caution in advanced activities rose from 10.1% in first year, 13.7% in second, and 10.4% in third to 23.3% in fourth, while common-task caution moved from 8.6% in Years 1-3 to 14.3% in fourth year (p = .096). Students cautious on advanced tasks were also more cautious on common ones (Spearman ρ = .341, p < .001).

## What the authors recommend

The recommendations follow the timing of the divergence. [[ai-literacy|Critical AI literacy]] should begin before the gap emerges, ideally by ages 13-14, and be reinforced through 14-17, teaching calibrated reliance — accepting useful outputs, rejecting incorrect ones, and recognizing when evidence is insufficient — rather than general suspicion. Because trust is task-dependent, instruction should separate low-risk, verifiable functions from high-risk ones involving factual claims, citations, theoretical synthesis, or methodological decisions. The paper sketches a classroom sequence: two plausible AI responses with short source passages, individual judgment followed by paired comparison, a revised unsupported claim, and annotated evidence, so justified acceptance is rewarded alongside justified rejection. It also recommends formative assessment of the reasoning and recurring [[self-regulated-learning|self-regulation]] prompts such as "What evidence supports this answer?" The authors call this a teaching proposal, not a developmental sequence their survey demonstrated.

## What this means for practice

- **Instructors.** Put explicit evaluation instruction in front of students at 13-14, before use habits consolidate, and make the task category the unit of the rule: citation and synthesis work warrants different scrutiny than translation. Pair assisted work with a short unassisted explanation.
- **Administrators.** Coordinate the response across stages rather than waiting for final-year work to produce caution indirectly, since the first clear correction signal appears only near degree completion.
- **Researchers.** Pair perception measures with behavioral trials embedding correct and incorrect outputs; [[student-ai-interaction|student-AI interaction]] research relying on self-reported reliability cannot separate informed caution from unfamiliarity.

## Limitations

- The design is cross-sectional, so age and year-of-study differences cannot establish individual developmental change; the fourth-year effect may reflect cohort or institutional composition.
- Caution is perceived reliability, not error detection, source checking, or appropriate reliance.
- Ages 17 and 18 confound age with educational stage, and the comparison between secondary students aged 18 or older (n = 47) and university students aged 18-19 is quasi-experimental because the secondary category is not an exact age.
- The secondary questionnaire had no equivalent of the university option for non-use, which reduced ambiguity in one sample but not the other.
- Fifth-year students were excluded from the main course comparison as a small and heterogeneous group, including double-degree programs.
- Data come from three institutions in one national context.

## Citation

Cuenca-Rodríguez, M. E., Martínez-Rodríguez, M., Pérez-Eizaguirre, M., & Gómez-Moñivas, S. (2026). [*Students Learn to Use Generative AI Before Learning to Question It: Ordinal Trajectories of Academic Use and Caution from Adolescence to University*](https://osf.io/preprints/edarxiv/cm438_v1/). EdArXiv preprint. https://doi.org/10.35542/osf.io/cm438_v1
