---
title: Socially fluent AI decouples conversational signals from source identity in online interaction
created: "2026-05-25T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading]
technology: [affective-computing, intelligent-tutoring, llm, rag]
stakeholders: [student-experience]
research_method: [experiment, survey]
audience: [researchers]

sources: ['raw/papers/2605.23426.md']
confidence: high
---

> **Synthesis:** This study embedded undisclosed [[agentic-ai|AI agents]] as teammates in synchronous text-based group interactions across analytical, creative, and [[ethics|ethical]] tasks with 786 participants making 1,572 identity judgments. The central finding is striking: **humans cannot distinguish AI from human teammates above chance levels**. This failure is not due to a lack of identity-relevant information — computational models could accurately classify AI vs. human from conversational behavior — but because participants relied on **flawed suspicion heuristics** (response speed, fluency, perceived scriptedness) that were only weakly correlated with actual identity.

The implications for education are significant. As AI agents increasingly participate in [[student-experience|student group work]], online discussions, and peer learning environments, students may interact with AI without awareness. This creates vulnerabilities explored in [[eduframetrap-llm-sycophancy-educational-safety]] — if students cannot detect AI teammates, [[ai-sycophancy|sycophantic]] AI could reinforce [[misconceptions]] unchallenged. The findings also complicate [[hybrid-human-ai-tutoring-differentiated]] models that rely on transparent role differentiation. The work underscores the urgent need for [[ai-literacy]] curricula that teach not just how to use AI, but how to recognize when one is interacting with it. The dissociation between behavioral truth and human perception suggests that [[cognitive-offloading|Over-Reliance]] on AI may be exacerbated when source identity is concealed.

## What this means for practice

- **Researchers.** Report signal-detection sensitivity rather than raw accuracy: explicit identity judgments performed near chance (AUC = 0.527, 95% CI [0.48, 0.57]) while the same interactional cues classified ground-truth identity at mean AUC = 0.983 under group-wise cross-validation.
- **Instructors.** Disclose AI teammates in the assignment itself instead of expecting students to detect them, since the suspicion heuristics students use — response latency and perceived fluency — were only weakly aligned with actual identity.
- Shift [[ai-literacy]] work away from detection training toward source verification and disclosure norms, because even participants who formed coherent social impressions of their teammates did not convert those impressions into correct identity judgments.
- Design group work for the social consequences of undisclosed agents rather than for detectability: participants calibrated perceived trust and humanness to conversational stance even while identity inference failed.

## Limitations

- 786 of the 905 initially enrolled participants were retained, nested in 471 collaborative groups, producing 1,572 identity judgments.
- The core result is a null (chance-level discrimination), which under these conditions cannot establish that AI is undetectable in general.
- Each interaction was a single 10-minute text-only discussion built from three controlled task types (analytical, creative, ethical), so the design says nothing about longer exposure or multimodal channels.
- Participants were heterogeneous adult online users recruited for English fluency, and AI teammates operated inside a fixed 2H+1AI triadic structure rather than a real classroom group.

## Connected Concepts

- [[student-experience]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[trust]]
- [[human-ai-collaboration]]
## Connected Articles

- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[hybrid-human-ai-tutoring-differentiated]]
- [[humanlike-ai-collaborative-writing]]
## Citation

Lixiang Yan, Yueqiao Jin, Xibin Han, Dragan Gasevic (2026). [Socially fluent AI decouples conversational signals from source identity in online interaction](https://arxiv.org/abs/2605.23426). arXiv preprint (cs.HC, cs.AI).
