---
title: "Would You Let a Humanoid Play Storytelling With Your Child? A Usability Study on LLM-Powered Narrative Human-Robot Interaction"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
pedagogy: [storytelling-in-education]
technology: [educational-robotics, llm]
level: [preschool]
research_method: [user study]
sources: ['raw/papers/lombardi-humanoid-storytelling-child-2025.md']
confidence: medium
audience: [researchers, instructional designers]
page_kind: [framework]
methods: [usability-research]
---
> **Synthesis:** Lombardi et al. (2025) present a framework for enhancing the attention and social capability of the iCub humanoid robot by integrating advanced perceptual abilities that recognize social cues, understand surroundings through generative models such as ChatGPT, and respond with contextually appropriate social behavior. They implement an interaction task using a narrative ([[storytelling-in-education|storytelling]]) protocol in which a human and the robot co-create a short imaginary story, exchanging cubes with creative images. Experiments quantify the [[usability-research|usability]] and quality of experience perceived by participants interacting with the LLM-powered narrative human-robot interaction system.
## Key Findings
- A key challenge in human-robot interaction is developing systems that can **perceive and interpret social cues** to enable natural, adaptive interactions.
- The framework integrates **generative models (e.g., ChatGPT)** so the iCub humanoid can understand its surroundings and respond with contextually appropriate social behavior.
- The **storytelling task** has human and robot co-create an imaginary story by exchanging image-cubes, supporting collaborative narrative interaction.
- The study **validates the protocol and framework** through usability and quality-of-experience measurement with participants.
## Study Design & Method
This is a **usability/quality-of-experience study** of an LLM-powered narrative human-robot interaction system built on the iCub humanoid platform. The [[research-methods-aied|researchers]] integrated perceptual capabilities for social-cue recognition with generative-model understanding (ChatGPT) and implemented a storytelling interaction protocol where the human and robot jointly create a story by exchanging cubes with creative images. Participants interacted with the system, and the degree of usability and quality of experience was quantified to validate the framework and protocol.
## What this means for practice

- **Designers.** Cut end-to-end latency before scaling the interaction: Efficiency was the only UEQ scale rated below the benchmark (0.91, versus 1.91 for Attractiveness), which participants attributed to slow motor movement and AI modules running over the network.
- **Designers.** Keep the robot's narrative contribution minimal and non-corrective so co-creation stays with the learner: the LLM added a small element in only 8% of trials and never corrected or polished the human's contribution.
- **Researchers.** Validate with the intended age group before making classroom claims — 68% of participants (χ²(5) = 88.78, p < .001) judged the application suitable mainly for children under 10, yet the usability sample was 26 adults (mean age 39.7 ± 15).
- **Designers.** Budget more turns than the mean 5 ± 0.45 actually used per trial, since 28% of participants wanted additional turns while still accepting the roughly one-hour session length.
- **Researchers.** Report component-level reliability alongside usability scores: VLM sticker agreement was 86% and overall system success 88%, so voice, detection, and LLM failures set the real ceiling on the experience.


## Limitations
The study focuses on usability and perceived quality of experience rather than measured [[learning-gains|learning outcomes]]; sample sizes and context are not specified in the abstract. The iCub platform is research hardware with limited classroom availability, and the generalizability of the LLM-integrated interaction framework to other robot platforms and age groups warrants further study.
## Connected Concepts
- [[early-childhood-elementary-ai-education]]
- [[educational-robotics]]
- [[llm]]
- [[student-engagement]]

## Connected Articles
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy: LLM-Powered Social Robots for Storytelling
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Robot-LLM Integration and Embodiment in Creative Writing
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[social-robot-study-companions]] — Social Robots as Study Companions
## Citation

Lombardi, M., Calabrese, C., Ghiglino, D., Foglino, C., De Tommaso, D., Da Lisca, G., Natale, L., & Wykowska, A. (2025). [*Would you let a humanoid play storytelling with your child? A usability study on LLM-powered narrative human-robot interaction*](https://arxiv.org/abs/2508.02505).
