---
title: "A Framework for Considering Exploration, Interpretation, and Confirmation During Data Analysis: Computationally Assisted Analysis of Teacher–Group Interactions"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/hur-computational-analysis-teacher-group-interactions-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, learning analytics designers, educational technology developers]
level: [k 12]
discipline: [math education]
technology: [multimodal, learning-analytics, llm, machine-learning]
methods: [ai-assisted-educational-research, mixed-methods-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Hur, Palaguachi, Machaka, Krist, Dyer, D'Angelo and Bosch propose a framework for analytic agency that classifies each of three stages of data analysis — exploration, interpretation, and confirmation — as primarily human- or computer-led, giving [[ai-assisted-educational-research|computationally assisted research]] a vocabulary for naming who shapes what becomes detectable and meaningful. They demonstrate it in a multimodal case study of teacher–student group interactions in 15 high-school mathematics classroom videos: a pose-based detector surfaced 317 interaction events, yet mixed-effects models found significant change almost exclusively in the pose keypoints the detector privileged, plus a decrease in [[llm|LLM]]-marked confusion after interactions (β = -0.061, p = .049), with no audio feature shifting. Qualitative coding of 63 video segments suggests the pipeline captured spatial co-presence — the teacher present in 49.2% of segments — more than sustained interaction, at-teacher gaze in 25.4%, illustrating how computer-led exploration shapes what [[learning-analytics|learning analytics]] interpretation can later find.

## Key Findings

1. **The framework classifies analytic agency by stage.** Exploration, interpretation, and confirmation are each classed as primarily human- or computer-led; profiling common methods this way turns a researcher's position into specific, nameable leadership choices. In the case study the first two stages ran computer-led, and no formal confirmation stage existed.
2. **The detector surfaced 317 teacher–group interaction events** across the 21 student groups, averaging 15.10 events per group (SD = 12.42) with a range from 1 to 46; mean event duration was 32.73 seconds (SD = 29.35), ranging from 10.08 to 230.36 seconds.
3. **Ground-truth recall was 55%.** Manual coding of one group per teacher's video identified 20 true interactions; the detector found 11. Of the 9 missed events, 3 fell outside the group's spatial boundary box, 4 involved visual obstruction or crouching, and 2 had no clear cause.
4. **LLM indicators agreed with humans most on objective constructs.** Across 200 randomly sampled dialogue instances, agreement reached κ = .778 for explicit questions and .722 for discussing math, but only .562 for need help and .531 for might be confused.
5. **Audio features showed no significant change in either comparison**, while mixed-effects models found significant shifts in 11 keypoint coordinates for before versus during and 5 for before versus after, alongside a decrease in the confusion transcript indicator after interactions (β = -0.061, p = .049).
6. **The clips read as co-presence rather than interaction.** In 63 coded segments, students looked at task materials in 30 (47.6%) and at the teacher in 16 (25.4%); the teacher was present inside the group boundary in 31 segments (49.2%), while overt help-seeking appeared in just 1 (1.6%).

## The analytic agency framework

The motivating problem is a "second black box": beyond the model itself sits the researcher's interpretive pipeline — which features to engineer, which data points to label, which clips to keep — and it is rarely reported as a sequence of decisions. The authors distinguish human-in-the-loop practice, which emphasizes interaction opportunities, from stage leadership, which asks who sets the questions, notices the patterns, and decides which results count. They read common methods through the typology: statistical hypothesis testing is human exploration with computer confirmation, supervised machine learning outsources interpretation to pre-existing labels, and computational grounded theory is computer exploration with human interpretation. The case study sits at computer-led exploration and interpretation with no formal confirmation stage.

The framework also gives algorithms their own kind of positionality. OpenPose was trained on COCO and MPII with predefined keypoints and thresholds, and those assumptions about which bodily configurations are detectable carried into the events the pipeline surfaced. Similarly, clustering and optimization methods assume particular shapes of structure in data, which the no-free-lunch theorem makes explicit: any lens, human or algorithmic, leads astray in contrasting contexts. Naming that is the point of the paper — stage-level agency is presented as a design choice researchers can make deliberately, not a default to absorb.

## A multimodal pipeline for classroom video

The data come from a 2013–2014 project on high school mathematics teaching in the United States: 15 fixed-angle videos of roughly 90 minutes each, recorded at 1080p and 30 frames per second, across three teachers (six, five, and four videos respectively). The authors selected 21 student groups of at least three students (nine, seven, and five per teacher) that were unobscured and spatially discrete, and each group table carried its own audio recorder.

Three low-level representations fed the pipeline. OpenPose, in its 25-keypoint body configuration, produced frame-level pose estimates, which were tracked across frames with the Euclidean-distance postprocessing of Hur and Bosch (2022). openSMILE extracted the 88 eGeMAPS acoustic and prosodic features, computed over 25 ms frames every 10 ms. WhisperX transcribed the group audio with word-level timestamps. A final layer asked an on-premises Mistral-Small-3.2-24B-Instruct-2506, run locally to keep identifying metadata off cloud services, to judge four binary constructs in each dialogue window — explicit question, might be confused, need help, and discussing math — with temperature 0.6, top-k 40, and top-p .95.

Interaction detection itself was a deliberately simple heuristic: a presumed teacher's head centroid, weighted from nose, neck, eyes, and ears, had to be vertically dominant and spatially close to the seated group. A 10-second rolling window smoothed the binary sequence, and only continuous episodes of at least 10 seconds (about 300 frames) were retained. Every detected window was then aligned to its audio features and transcript words, and before, during, and after segments were matched within each event so that the same amount of time was compared in each condition.

## What the computer-led analysis found

The headline result is that the analysis found what its exploration designed it to find. Paired t-tests on loudness, pitch, jitter, shimmer, and MFCC1, and on the four transcript indicators, showed no significant differences for before versus during or before versus after. Linear mixed-effects models, with a random intercept per group recording, did find significant shifts — but concentrated in the pose keypoints that the detection heuristic itself used: nose, eye, and ear coordinates moved before versus during (11 keypoint coordinates), and before versus after (5), while the LLM-marked confusion indicator decreased after interactions (β = -0.061, p = .049), which the authors read as teachers helping groups overcome impasses. No audio feature changed in either comparison.

A ground-truth check and a qualitative pass sharpened the interpretation. Human coding of one video per teacher found 20 true pedagogical interactions, of which the detector caught 11 (55%); performance depended heavily on visual conditions, and the misses included the teacher calling on a group from across the room. Coding a random sample of 63 segments (21 events by three time windows) showed students most often looking at task materials (47.6%), the teacher present within the boundary in 49.2% of segments, and overt help-seeking nearly absent (1.6%). Two contrasting episode types emerged — joint attention to a piece of student work versus parallel presence where teacher and students occupied the same space without shared focus — leading the authors to conclude that the detector is better described as detecting co-presence, and that its spatial patterns are an incomplete and sometimes misleading proxy for teacher–student interaction.

The discussion then runs counterfactual designs over the same data: human-led exploration with computer-led interpretation would quantify whatever an expert already deemed salient (such as help-seeking rising before the teacher arrives), computer-led exploration with human-led interpretation would hand the 317 clips to qualitative analysis as a pre-filtered sample, and an iterative hybrid partnership would cycle human labels back into a refined detector. The hybrid option mirrors computational grounded theory, and the authors cite Barany et al. (2024), whose comparison of four codebook workflows found that alternating human and AI agency produced the highest-quality codebooks.

## What this means for practice

- **Researchers** should name stage leadership in methods sections: in this case the pose heuristic and the 10-second minimum decided which of the 317 events existed to interpret, and the tool's training data and thresholds functioned as analytic choices worth disclosing.
- **Learning analytics designers** should validate event detectors against human coding — recall was 55% here — and audit which modality the design privileges, since significant findings concentrated in the pose keypoints the detector used while audio features stayed flat.
- **Tool developers** should build hybrid, iterative pipelines that cycle human interpretation back into detection, following computational grounded theory and the Barany et al. (2024) result that alternating human–AI agency yields the best codebooks.
- **Reviewers and journals** should treat exploration-stage defaults the way the qualitative tradition treats positionality statements, so that computer-led choices in one study do not silently shape findings that are compared across studies.

## Limitations

- The pose-based heuristic is a coarse proxy for co-presence rather than a validated interaction construct: recall was 55% (11 of 20 events), with false positives like walk-bys and procedural check-ins alongside missed seated or across-room exchanges.
- The statistical analysis applied no corrections for multiple comparisons, so individual findings may not be reliable; the authors frame the overall patterns as the contribution.
- The qualitative appraisal used a single coder on 63 segments with no inter-coder agreement, by design descriptive rather than predictive.
- LLM transcript indicators agreed with humans only moderately on subjective constructs (κ = .562 for need help, .531 for confusion), the transcripts were not manually cleaned, and the detector never used the transcript or audio streams it had aligned.
- The three-stage framework is a simplification of research that is often iterative and recursive, and its authors do not offer it as a prescription for how analysis should be led.

## Citation

Hur, P., Palaguachi, C., Machaka, N., Krist, C., Dyer, E. B., D'Angelo, C., & Bosch, N. (2026). A Framework for Considering Exploration, Interpretation, and Confirmation During Data Analysis: Computationally Assisted Analysis of Teacher–Group Interactions. *Journal of Educational Data Mining*, 18(1), 180-207.
