---
title: "Leveling the Playing Field: Temporal Video Segmentation for Individuals with ADHD in Computing Education"
created: "2026-07-28T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
foundations: [learning-design]
technology: [llm]
ethics: [inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
research_method: [experiment]
discipline: [cs education]
sources: ['raw/papers/2607.24612.md']
confidence: high
audience: [instructional designers, instructors]
level: [special education]
---

> **Synthesis:** Pimenova, Begel and colleagues evaluate a post-hoc video processing intervention that segments [[video-education|instructional videos]] into single-instruction chunks with fixed pauses, reducing extraneous [[cognitive-offloading|cognitive load]] for learners with ADHD. In a within-participants study (17 ADHD, 10 non-ADHD), the intervention improved everyone but had an equalizing effect: ADHD participants' errors and hesitations fell to parity with non-ADHD peers. This is strong evidence for [[universal-design-for-learning|Universal Design for Learning]] via automated content transformation — a task well-suited to AI pipelines. It extends [[neurodivergent-computing-students]] and [[inclusive-learning]], complements [[simulation]] work like [[llm-educational-simulation-adhd]], informs video-based learning design in [[engagement-assessment-video]] and [[learning-design]], within [[cs-education]].

## Key Findings

- A post-hoc video processing intervention segmented instructional videos into single-instruction chunks with fixed pauses to reduce extraneous cognitive load for learners with ADHD.
- In a within-participants study (17 ADHD, 10 non-ADHD), the segmentation improved outcomes for everyone.
- The intervention had an equalizing effect: ADHD participants' errors and hesitations fell to parity with their non-ADHD peers, not merely improving but closing the gap.
- The work is presented as evidence for Universal Design for Learning achieved through automated content transformation, a task well-suited to AI/[[llm]] pipelines.

## What this means for practice

- **Instructors.** Split instructional videos at each single instruction and insert pauses rather than playing them straight through: on medium and hard Scratch tasks, participants with ADHD produced roughly 87% fewer errors on segmented versions of the same audiovisual content (β = −2.05, IRR = 0.128, p < .001).
- **Instructors.** Apply the treatment most aggressively to the hardest content, because effects grew with task difficulty: rate ratios reached 7.75 (errors) and 4.70 (hesitations) for the ADHD group, against 3.33 and 2.71 for non-ADHD peers.
- **Instructors.** Do not lean on re-watching as the accessibility strategy. Several participants described repeat-the-steps tasks as an implicit "test of memory" and asked for instruction to pause until the learner completes the corresponding action in the workspace.
- **Designers.** Ship segmentation as a post-hoc transformation of existing videos — nothing needs re-recording — with pauses held near 4 seconds, the duration a 13-participant pilot identified as long enough for mental rehearsal in Scratch's spatial-logical mapping while avoiding the engagement drops and mind-wandering seen at 6 seconds.

## Limitations

- The sample is 27 participants (17 with ADHD, 10 without) recruited through campus flyers and non-computer-science faculty email at one university, all with no prior programming experience; the authors state that the sample and the Scratch block-coding environment may limit generalizability.
- Cognitive load was operationalized behaviorally only — errors and hesitations, where a hesitation is a 3-second pause or a verbal expression of confusion — with no physiological or dual-task measures (pupillometry, EEG, secondary-task interference) and no standardized working-memory assessment such as an n-back test.
- The segmentation-by-ADHD interaction terms were not statistically significant (errors p = .232; hesitations p = .242), and the authors state the study was underpowered to distinguish the groups statistically, so the equalizing claim rests on effect-size magnitude (ADHD d = 1.14 vs control d = 0.72).
- The 4-second pause is a fixed, pilot-derived parameter from a 13-participant pilot, and the segments were added manually in Final Cut Pro and agreed on by the authors, not generated automatically.

## Connected Concepts

- [[inclusive-learning]]
- [[cs-education]]
- [[learning-design]]
- [[neurodiversity]]
- [[llm]]
- [[universal-design-for-learning]]
- [[special-education]]
- [[learning-analytics]]
- [[student-experience]]
## Connected Articles

- [[neurodivergent-computing-students]]
- [[llm-educational-simulation-adhd]]
- [[engagement-assessment-video]]
- [[savvy-student-attention-video-learning]]
- [[ai-generated-instructional-videos-computing-ed]]
## Citation

Veronica Pimenova, Chris Lee, Baramee Bhakdibhumi, Simon Chu, Andrew Begel (2026). [Leveling the Playing Field: Temporal Video Segmentation for Individuals with ADHD in Computing Education](https://arxiv.org/abs/2607.24612).
