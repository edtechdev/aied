---
title: "Impacts of AI-Generated Learning Videos on Learning Outcomes: The Mediating Roles of Perceived Desirability and Perceived Feasibility"
created: "2026-11-11T07:41:53-05:00"
updated: "2026-11-11T07:53:29-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [instructors, researchers]
sources: ['raw/papers/shang-ai-learning-videos-desirability-2026.md']
source_url: "https://doi.org/10.1002/jcal.70374"
source_depth: full text
confidence: high
pedagogy: [student-engagement]
technology: [generative-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Shang, Chen and You compare three AI-generated video formats against a traditional instructional video in a four-condition between-subjects experiment with 221 valid responses. The formats escalate [[student-engagement|learner involvement]]: watching a situated video, answering multiple-choice questions that branch the video, and co-creating a scene with a [[generative-ai|generative tool]]. All three beat the traditional video on enjoyment, performance and continuance intention, but involvement did not produce a clean gradient. Perceived feasibility mediated every outcome, while perceived desirability mediated only enjoyment and continuance intention. Value made students want to keep watching; only manageability moved [[learning-gains|test performance]], which is the practical hinge of the study.

## Key Findings

1. **Every AI-generated format outperformed the traditional video.** One-way ANOVAs showed main effects of video type on learning enjoyment (F(3, 217) = 25.65, p < 0.001, η2 = 0.262), perceived feasibility (F(3, 217) = 19.76, p < 0.001, η2 = 0.215), perceived desirability (F(3, 217) = 20.46, p < 0.001, η2 = 0.220), continuous learning intention (F(3, 217) = 24.84, p < 0.001, η2 = 0.256) and learning performance (F(3, 217) = 17.25, p < 0.001, η2 = 0.193), with all three experimental groups above the control on each measure.
2. **The predicted ascending gradient was only partly supported.** Most contrasts among the three AI conditions were non-significant. Two comparisons departed from a strict gradient: the situated video beat the multiple-choice interactive video on enjoyment (6.018 versus 5.497, p = 0.011), and the AI–learner co-created video beat the situated video on learning performance (6.481 versus 6.109, p = 0.010).
3. **Both appraisals rose, but not with involvement.** All three video types significantly increased perceived desirability and perceived feasibility relative to the traditional video — direct path coefficients ranged from 0.387 to 0.504 — yet the differences among the three AI conditions on either mediator were non-significant, so Hypotheses 2 and 3 were only partially supported.
4. **Desirability predicted affect and persistence, not performance.** Perceived desirability raised learning enjoyment (β = 0.422, p < 0.001) and continuous learning intention (β = 0.398, p < 0.001) but had no effect on learning performance (β = 0.004, p = 0.966), and its indirect effect on performance was likewise null (0.002, p = 0.967) for all three video types.
5. **Feasibility predicted all three outcomes.** Perceived feasibility raised learning enjoyment (β = 0.201, p = 0.006), learning performance (β = 0.245, p = 0.002) and continuous learning intention (β = 0.214, p = 0.003), and mediated every video type's effect on every outcome, with indirect effects from 0.078 to 0.123.
6. **Every mediation path was complementary except one.** Desirability carried enjoyment (indirect effects 0.212, 0.180 and 0.193, all p < 0.001) and continuance intention (0.200, 0.170 and 0.182), and feasibility carried performance (0.110, 0.123 and 0.095). The one indirect-only case was the multiple-choice interactive video's effect on enjoyment, where the direct path fell to 0.097 (p = 0.209) once both mediators were included.

## What the study did

The experiment used learning videos on Chinese traditional motifs, chosen because people often recognize motif names without knowing their cultural meaning, which limited bias from [[prior-knowledge|prior knowledge]]. Four conditions were run between subjects: a traditional online instructional video as control; an AI-generated situated video showing motif formation through dynamic 3D visuals with no interaction; a multiple-choice interactive situated version where answers determined which follow-up content played; and an AI–learner co-created version where, at the decision point, learners followed a link to the generation platform, produced a scene of their own and uploaded it with a short explanatory text. All four videos carried identical content, ran 3 min and 30 s, and used a speech rate of 240 words per minute.

A total of 249 participants were recruited through an online survey platform and 221 valid responses remained after an attention check. Participants were randomly assigned, and the authors report no group differences in gender (χ2(3, N = 221) = 0.049, p = 0.997), age (χ2(12, N = 221) = 10.981, p = 0.531), education level (χ2(12, N = 221) = 7.418, p = 0.829), familiarity (F(3, 217) = 0.208, p = 0.891) or interest (F(3, 217) = 0.951, p = 0.417). Participants in the situated and interactive conditions were not told the videos were AI-generated, and the co-creation group completed a familiarization session with the tool one day before the experiment to blunt the novelty effect.

Measures were seven-point Likert scales adapted from prior instruments, with composite reliability from 0.810 to 0.881 and average variance extracted from 0.588 to 0.711. Learning performance was the exception: two fill-in-the-blank items on the bat-peach and heron-lotus motifs, scored by teachers not involved in the experiment. Analysis used ANOVA with Tukey HSD comparisons and PLS-SEM in SmartPLS 3.3.9 with 5000 bootstrap subsamples, and significance was evaluated at the 10% level because the authors frame the comparison of novel video types as exploratory.

## Why feasibility carried the performance gain

The two mediators behave like different kinds of judgment, and the paper's explanation follows construal level theory. Desirability is a high-level construal — why the activity is worth doing — so it feeds anticipation, enthusiasm and persistence, which show up in enjoyment and in the intention to continue. Feasibility is a low-level construal — how the activity is done — so it feeds processing fluency, stepwise integration and use of feedback, which is what a two-item comprehension test captures.

The co-creation condition is the interesting anomaly. It produced the highest mean learning performance (6.481) while showing the weakest feasibility path of the three formats (0.387, against 0.504 for the interactive video). The authors argue that generating a scene made the value of the task self-referential, strengthening distal cues, but imposed operational demands that offset the gain in concreteness; learners also knew they were relying on a tool rather than a teacher, which may have made the steps feel less dependable. That reading is post hoc, and the study did not measure cognitive load, so the burden explanation is inference rather than a tested mechanism.

Two design limits matter for interpretation. The PLS model codes the three formats as dummy variables against the control, so it tests each format against the traditional video but never compares the formats with one another; those comparisons rest on the ANOVA post hoc tests. And situational interest, the construct that is supposed to link design features to the two appraisals, was not measured, so the SIT half of the SIT–CLT chain is assumed rather than observed.

## What this means for practice

- **Instructors:** Choose the format against the outcome you want. Co-created videos produced the highest learning performance (6.481) while holding desirability and continuance intention at levels comparable to the other formats, so they suit tasks where ownership and knowledge construction matter.
- **Instructors:** Use structured formats when the goal is to lower the barrier. The multiple-choice interactive and situated videos were descriptively perceived as more feasible, even though the differences among the three AI conditions did not reach significance.
- **Designers:** [[scaffolding|Scaffold]] co-creation rather than dropping learners into the generator. Break the task into manageable steps, supply templates or prompt guides, and build in feedback so the technical burden does not consume the gain in concreteness.
- **Designers:** Do not trade feasibility for desirability. High desirability without feasibility leaves students motivated but without the performance gain, since desirability's path to learning performance was 0.004 (p = 0.966).
- **Administrators:** Fund AI video production as a design capability, not a replacement for teaching. The authors warn that heavy reliance on AI content risks losing emotional connection and eroding the teacher's role as facilitator.

## Limitations

The study measures outcomes immediately after a single 3 min and 30 s exposure, so it cannot show retention or [[transfer-of-learning|transfer]], and learning performance rests on two fill-in-the-blank items about two motifs, a narrow cognitive measure. Perceived desirability and perceived feasibility were measured in general terms rather than tied to the specific video task, and other plausible mechanisms — cognitive load, self-efficacy, situational interest — were not measured, leaving the SIT–CLT chain partly untested. The three formats are not exhaustive; adaptive narrative or VR/AR-enhanced AI videos may behave differently. All participants shared one cultural background and the sample came from a single online platform, and the analysis threshold of 10% is lenient by conventional standards, which raises the risk of false positives among the many comparisons.

## Citation

Shang, S., Chen, H., & You, X. (2026). [Impacts of AI-Generated Learning Videos on Learning Outcomes: The Mediating Roles of Perceived Desirability and Perceived Feasibility](https://doi.org/10.1002/jcal.70374). *Journal of Computer Assisted Learning, 42*, e70374. https://doi.org/10.1002/jcal.70374
