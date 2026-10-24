---
title: "Analyzing embodied learning in classroom settings: A human-in-the-loop AI approach for multimodal learning analytics"
created: "2026-10-23T22:28:31-04:00"
updated: "2026-10-23T22:28:31-04:00"
type: article
foundations: [human-ai-collaboration]
pedagogy: [embodied-learning, self-regulated-learning, collaborative-learning, metacognition]
technology: [multimodal, learning-analytics, llm]
methods: [mixed-methods-research]
ethics: [privacy]
research_method: [system development]
discipline: [learning sciences]
level: [primary education]
audience: [researchers, learning analytics designers]
page_kind: [framework]
sources: ['raw/papers/10.1016_j.learninstruc.2025.102274.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Fonteles and colleagues (2026) build a [[human-in-the-loop-ai|human-in-the-loop]] pipeline that converts raw classroom video, speech, motion and simulation logs into timed labels for students' [[self-regulated-learning|self-regulated learning]] (SRL) and socially shared regulation, and test it on two enactment sessions of a [[virtual-and-augmented-reality|mixed-reality]] photosynthesis simulation in a fourth-grade science classroom. Deep-learning models process each modality; a late-fusion [[llm|LLM]] then segments the timeline and sorts every segment into Planning, Enacting, Monitoring, Reflecting or Interacting, with a written justification a researcher can check. Across 40 min of video from four focal students the LLM produced 470 segments, 453 after discarding 17 whose end time preceded their start. [[embodied-learning|Enacting]] dominated at 66.4%, Interacting followed at 15.5%, and Reflecting was rarest at 3.3%. Against 75 human-validated segments the labels agreed 74.67% of the time (95% CI [63.8%, 83.1%]), but that average conceals the paper's most useful result: Enacting and Interacting each reached 93.3% while Planning fell to 46.7%. The contribution is therefore less a working classifier than a demonstration that [[multimodal]] [[learning-analytics|learning analytics]] of regulation is now dependable for frequent, physically visible actions and unreliable for the rare, inferred ones that theory cares most about.

## Key Findings

- **How much the pipeline found:** 470 segments across 40 min of video from two enactments of the photosynthesis scenario; 17 were discarded for negative durations, leaving 453 in the analyses. Enacting accounted for 66.4% (M = 6.52 s, SD = 7.71), Interacting 15.5%, Monitoring 8.6%, Planning 6.2%, and Reflecting 3.3%.
- **Duration runs opposite to frequency:** Reflecting episodes were the longest on average (M = 9.07 s) and Interacting the shortest (M = 0.27 s). Summed with overlaps counted, the labels covered 43 min 41 s, more than the 40 min of video, because behaviors co-occur.
- **Overall agreement with human coders:** 74.67% accuracy over 75 stratified, consensus-coded segments (95% confidence interval [63.8%, 83.1%]).
- **Agreement splits sharply by category:** Enacting 93.3% and Interacting 93.3%, Monitoring 80%, Reflecting 60%, and Planning 46.7%. The framework is reliable for high-frequency, concrete behaviors and unreliable for categories that are conceptually nuanced or thinly evidenced in the data.
- **Two coder communities converged:** Cohen's κ = 0.703 between the learning-sciences coders and the computer-science coders on a balanced 20-segment subset, substantial agreement despite different expertise.
- **Where the errors came from:** thematic coding of the 19 segments rated false or maybe produced six themes, led by timing and segmentation errors (8 cases) and mislabeling (6, most often Planning against Reflecting), then insufficient evidence (5), transcript and audio quality (3), diarization errors (2), and other (2).
- **The domain experts' own audit:** the learning-science researchers' SWOT credited automated tracking of multimodal data and surfacing of learning moments, faulted Planning and Interacting confusions and error propagation from a single modality such as speech-transcript timing, and flagged two threats: over-reliance on AI without human validation, and [[privacy]] lapses in de-identification.
- **Two students, two regulatory strategies:** on Day 1 Rose produced 40 enactments totaling 602 s against DaPaw's 20 totaling 104 s; on Day 2 DaPaw's 46 enactments ran 387 s while Rose's 97 ran 446 s, the difference between few-and-long and many-and-short engagement. Interacting behaviors rose on Day 2.

## Study Design & Method

- **Setting:** a two-month study in a fourth-grade science classroom of 43 students, focused on embodied activities about matter rearrangement and energy transfer. Four fully consented students supplied the analyzed data.
- **The environment:** students wore motion-tracking tags on a Pozyx indoor positioning system that sent their coordinates to a projection screen, where agents representing them moved through a [[simulation]]. Groups of 6 to 8 worked at a time, half enacting and half observing and advising, then switching roles; the teacher and facilitators guided with questions and prompts to reflect.
- **The task:** a photosynthesis game in mixed reality, in which students navigated a model and manipulated its objects with their bodies.
- **The codebook:** the team adapted SRL and SSRL definitions, mapped modalities onto them in a table of features, and refined the categories through iterative coding in MaxQDA before any model ran.
- **The pipeline:** computer-vision analysis of video, audio processing into diarized transcripts, and processing of in-game logs fed a late-fusion LLM that segmented the timeline, classified each segment into one of the five behaviors, and wrote a justification naming the multimodal cues behind the label.
- **The human loop:** a timeline tool synchronized video, color-coded labels and justifications. Two learning-science researchers who co-developed the codebook evaluated a balanced 20-segment subset; two computer-science researchers coded the same 20 (κ = 0.703), and the evaluation was then expanded to 75 segments sampled 15 per behavior.
- **Ethics:** IRB approval with student assent and guardian consent; students chose their own pseudonyms, which the research artifacts use throughout.

## How far the labels hold

The aggregate accuracy figure is the least informative number in the paper. Planning is the behavior a learning scientist would most want automated, because a stalled plan is what a teacher could act on, and it is the behavior the pipeline labels least reliably at 46.7%, close to what a two-way guess would produce. Enacting, a physically visible and frequent action, is close to solved at 93.3%.

The error analysis explains the shape of that gap rather than treating it as noise. Timing and segmentation errors mean the boundaries, not only the labels, were wrong; mislabeling clustered between Planning and Reflecting, two behaviors that share stillness and inward attention; insufficient evidence marks the segments where speech and movement were too sparse to justify any label; and transcript and diarization problems show a single weak modality propagating into the final decision. The learning-science researchers' recommendation follows directly: give the codebook logical conditions (AND/OR) so overlapping behaviors can be defined explicitly, and widen the analysis window so a segment is judged against what came before and after it.

That matters for how such a system could ever be used. The authors note that the tool surfaced extended Planning as a moment warranting intervention, which is exactly the kind of signal a teacher-facing system would need and exactly the label this pipeline gets wrong most often. The case study makes the interpretive stakes concrete: identical counts would read as equal engagement, while Rose's many short enactments and DaPaw's few long ones describe different strategies of understanding the model.

## What this means for practice

- **Learning analytics designers.** Publish accuracy per behavior category, not as an aggregate. A pipeline that reports 74.67% overall while sitting at 46.7% on the category an instructor cares about is not ready to feed a dashboard, and the per-category number is the one that decides deployment.
- **Researchers running multimodal studies.** Build the validation timeline into the design from the start, with synchronized video, labels and machine justifications, because that interface is what let domain experts judge segment boundaries as well as labels. Budget for two coder teams: the learning-science coders supplied the codebook's intent, the computer-science coders supplied the pipeline's assumptions, and their disagreement was itself a finding.
- **Instructors.** Treat this as research instrumentation, not a classroom tool. The authors' own next step is an online deployment that generates enactment summaries for teachers and students, which does not exist yet, and the threat they name first is over-reliance on AI output without human validation.
- **Institutions handling classroom video.** Pseudonyms are not anonymity when the data are video and diarized speech. The learning-science researchers listed lapses in de-identification protocols among the framework's threats, which is a governance question as much as a technical one.

## Limitations

- Four fully consented students out of a 43-student class, and 40 min of video from two enactments of one scenario, all analyzed as a single case.
- Each category's accuracy rests on 15 segments, and the overall interval is wide (63.8% to 83.1%), so per-category figures should be read as provisional.
- Segment boundaries and justifications were judged by small coder teams in one classroom, with the learning-science to computer-science agreement measured on only 20 segments.
- The codebook and prompts were built for this photosynthesis scenario in one fourth-grade classroom; transfer to other behaviors, subjects and settings is untested, which the authors name as future work.

## Citation

Fonteles, J. H., Cohn, C., Ayalon, E., Zhou, M., Ashwin, T. S., Davalos, E., Li, Z., Rayala, S., Mereddy, D., Coursey, A., Jain, S., Zhang, Y., Enyedy, N., Danish, J., & Biswas, G. (2026). [*Analyzing embodied learning in classroom settings: A human-in-the-loop AI approach for multimodal learning analytics*](https://doi.org/10.1016/j.learninstruc.2025.102274). *Learning and Instruction*, 103, 102274.
