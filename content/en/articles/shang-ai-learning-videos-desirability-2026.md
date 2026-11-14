---
title: "Impacts of AI-Generated Learning Videos on Learning Outcomes: The Mediating Roles of Perceived Desirability and Perceived Feasibility"
created: "2026-11-11T07:41:53-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Every AI video format beat a conventional instructional video on enjoyment, test performance and willingness to continue, but which format learners received mattered less than how manageable it felt. Shang, Chen and You compared four versions of one short video on Chinese traditional motifs with 221 participants: a conventional video, an AI-generated situated video, an interactive version where multiple-choice answers branched the story, and a version where learners generated a scene of their own with a [[generative-ai|generative tool]]. More [[student-engagement|learner involvement]] did not produce a tidy ladder: the branching version was not better than the situated one, and the co-created version's only clear advantage was on test performance. Perceived feasibility carried every outcome; perceived desirability moved enjoyment and the intention to keep learning but not performance. Appeal recruits; manageability teaches.

## Key Findings

1. **All three AI formats beat the traditional video.** Students watching the situated, branching or co-created versions enjoyed the lesson more, scored better on the comprehension test and were more willing to keep learning this way than students watching the conventional [[video-education|instructional video]].
2. **More involvement did not mean better outcomes.** Most comparisons among the three AI formats were non-significant. The situated video beat the branching one on enjoyment, while the co-created video beat the situated one on test performance — a pattern that fits no single ladder of interactivity.
3. **Every AI format raised both appraisals by about the same amount.** The three AI groups rose above the control on perceived desirability and perceived feasibility without separating among themselves, so the appraisals did not track how much the learner did.
4. **Feasibility, not appeal, tracked performance.** Perceived feasibility predicted enjoyment, test performance and the intention to continue, and it carried part of every format's effect on every outcome. Students who felt they could follow the steps learned more.
5. **Appeal predicted enjoyment and persistence only.** Perceived desirability raised enjoyment and the intention to keep learning but had no effect at all on test performance, and its indirect effect on performance was likewise null.
6. **One format worked only through how it felt.** For the branching video, the direct effect on enjoyment disappeared once both appraisals entered the model. Its advantage over the traditional video was entirely a matter of appearing desirable and manageable.

## What the study did

The experiment used learning videos on Chinese traditional motifs, chosen because people often recognize motif names without knowing their cultural meaning, which limited bias from [[prior-knowledge|prior knowledge]]. Four conditions ran between subjects: a traditional online instructional video as control; an AI-generated situated video showing motif formation through dynamic 3D visuals with no interaction; a multiple-choice interactive version where answers determined which follow-up content played; and an AI–learner co-created version where, at the decision point, learners followed a link to the generation platform, produced a scene of their own and uploaded it with a short explanatory text. All four videos carried identical content, ran 3 min and 30 s, and used a speech rate of 240 words per minute.

A total of 249 participants were recruited through an online survey platform and 221 valid responses remained after an attention check. Participants were randomly assigned, and the authors report no group differences in gender, age, education level, familiarity or prior interest. Participants in the situated and interactive conditions were not told the videos were AI-generated, and the co-creation group completed a familiarization session with the tool one day before the experiment to blunt the novelty effect.

Measures were seven-point Likert scales adapted from prior instruments. Learning performance was the exception: two fill-in-the-blank items on the bat-peach and heron-lotus motifs, scored by teachers not involved in the experiment. Analysis used ANOVA with post hoc comparisons and partial least squares structural equation modeling with bootstrapped indirect effects, and significance was evaluated at the 10% level because the authors frame the comparison of novel video types as exploratory.

## Why feasibility carried the performance gain

The two mediators behave like different kinds of judgment. Perceived desirability raised enjoyment (β = 0.422, p < 0.001) and [[lifelong-learning|continuous learning]] intention (β = 0.398, p < 0.001) but had no effect on [[learning-gains|learning performance]] (β = 0.004, p = 0.966), and its indirect effect on performance was null for all three formats. Perceived feasibility, by contrast, raised enjoyment (β = 0.201, p = 0.006), performance (β = 0.245, p = 0.002) and continuance intention (β = 0.214, p = 0.003), with indirect effects from 0.078 to 0.123.

The paper's explanation follows construal level theory. Desirability is a high-level construal — why the activity is worth doing — so it feeds anticipation, enthusiasm and persistence, which show up in enjoyment and in the intention to continue. Feasibility is a low-level construal — how the activity is done — so it feeds processing fluency, stepwise integration and use of feedback, which is what a two-item comprehension test captures.

The co-creation condition is the interesting anomaly. It produced the highest mean learning performance (6.481, against 6.109 for the situated video) while showing the weakest feasibility path of the three formats (0.387, against 0.504 for the interactive video). The authors argue that generating a scene made the value of the task self-referential, strengthening distal cues, but imposed operational demands that offset the gain in concreteness; learners also knew they were relying on a tool rather than a [[teacher-role|teacher]], which may have made the steps feel less dependable. That reading is post hoc, and the study did not measure cognitive load, so the burden explanation is inference rather than a tested mechanism.

Two design limits matter for interpretation. The structural model codes the three formats as dummy variables against the control, so it tests each format against the traditional video but never compares the formats with one another; those comparisons rest on the ANOVA post hoc tests. And situational interest, the construct supposed to link design features to the two appraisals, was not measured, so the first half of the theoretical chain is assumed rather than observed.

## What this means for practice

- **Instructors:** Choose the format against the outcome you want. Co-created videos produced the highest test performance while holding enjoyment and continuance intention at levels comparable to the other formats, so they suit tasks where ownership and knowledge construction matter.
- **Instructors:** Use the structured formats when the goal is to lower the barrier. The branching and situated videos were perceived as more feasible, even though the differences among the three AI conditions did not reach significance.
- **Designers:** [[scaffolding|Scaffold]] co-creation rather than dropping learners into the generator. Break the task into manageable steps, supply templates or prompt guides, and build in feedback so the technical burden does not consume the gain in concreteness.
- **Designers:** Do not trade feasibility for desirability. High appeal without a clear path through the task leaves students motivated but without the performance gain.
- **Administrators:** Fund AI video production as a design capability, not a replacement for teaching. The authors warn that heavy reliance on AI content risks losing emotional connection and eroding the teacher's role as facilitator.

## Limitations

The study measures outcomes immediately after a single 3 min and 30 s exposure, so it cannot show retention or [[transfer-of-learning|transfer]], and learning performance rests on two fill-in-the-blank items about two motifs, a narrow cognitive measure. Perceived desirability and perceived feasibility were measured in general terms rather than tied to the specific video task, and other plausible mechanisms — cognitive load, [[self-efficacy|self-efficacy]], situational interest — were not measured, leaving the theoretical chain partly untested. The three formats are not exhaustive; adaptive narrative or VR/AR-enhanced AI videos may behave differently. All participants shared one cultural background and the sample came from a single online platform, and the analysis threshold of 10% is lenient by conventional standards, which raises the risk of false positives among the many comparisons.

## Citation

Shang, S., Chen, H., & You, X. (2026). [Impacts of AI-Generated Learning Videos on Learning Outcomes: The Mediating Roles of Perceived Desirability and Perceived Feasibility](https://doi.org/10.1002/jcal.70374). *Journal of Computer Assisted Learning, 42*, e70374. https://doi.org/10.1002/jcal.70374
