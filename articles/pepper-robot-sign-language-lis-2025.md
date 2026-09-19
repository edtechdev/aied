---
title: "Using the Pepper Robot to Support Sign Language Communication"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
technology: [educational-robotics, multimodal]
ethics: [accessibility, inclusive-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
research_method: [user study]
level: [special education]
sources: ['raw/papers/bolla-pepper-robot-sign-language-2025.md']
confidence: medium
audience: [designers, educators]
---
> **Synthesis:** Bolla et al. (2025) investigate whether the commercial Pepper social robot can produce intelligible Italian Sign Language (LIS) signs and short signed sentences, addressing the underexplored [[accessibility]] of social robots for Deaf users. With the help of a Deaf student and an expert interpreter, they co-designed and implemented 52 LIS signs on Pepper using either manual animation techniques or a MATLAB-based inverse kinematics solver. An exploratory user study with 12 participants proficient in LIS (both Deaf and hearing) assessed the intelligibility of the robot's signs.
## Key Findings
- Social robots are increasingly used in public and assistive settings, but their **accessibility for Deaf users remains underexplored**.
- Italian Sign Language (LIS) is a fully-fledged natural language with complex **manual and non-manual components**, posing a challenge for robot communication.
- The team **co-designed and implemented 52 LIS signs on Pepper** using manual animation techniques or a MATLAB-based inverse kinematics solver.
- An exploratory user study with **12 participants proficient in LIS (Deaf and hearing)** assessed sign intelligibility, with the aim of fostering more inclusive human-robot interaction in social environments (hospitals, airports, educational settings).
## Study Design & Method
This is an **exploratory design and user-study** in human-robot interaction. The [[research-methods-aied|researchers]] co-designed 52 Italian Sign Language signs with a Deaf student and an expert interpreter, implementing them on the Pepper platform using two techniques (manual animation and MATLAB-based inverse kinematics). An exploratory user study with 12 LIS-proficient participants (both Deaf and hearing) evaluated the intelligibility of the produced signs and short signed sentences, examining the feasibility of robot-mediated sign-language communication.
## What this means for practice

- **Designers.** Screen every candidate sign against the platform's kinematics before adding it: Pepper cannot move fingers independently, and constrained wrist and elbow range plus the chest tablet distorted close-body signs in the 52-sign set.
- **Designers.** Start a vocabulary with iconic, simplified-motion signs, which reached 100% recognition (Dimenticare, Finire/Fatto, Shampoo, Università), and rework or drop those that failed (Insegnare 33.3%, Chiedere 41.7%, Profumo 0%).
- **Designers.** Do not promise sentence-level signing yet: only 1 of 12 participants correctly read the three-sign sentence meaning "I ate an apple," so pair individual signs with other modalities for full utterances.
- **Instructors.** Co-design the vocabulary with Deaf students and interpreters and pre-test it with Deaf signers, since regional variation and false recognitions shaped performance on the 15 signs tested.
- **Researchers.** Report sign-level recognition against chance (25%): the 15 signs were tested with one-tailed binomial tests in a 12-participant sample, and several did not exceed the chance baseline.


## Limitations
The user study was exploratory with a small sample (12 participants), and the intelligibility of robot-produced LIS was partial and context-dependent. The technical implementation (52 signs) covers a limited vocabulary, and the non-manual components of LIS (facial expression, body posture) that are crucial to meaning were challenging for the robot to reproduce. Findings are specific to the Pepper platform and Italian Sign Language.
## Connected Concepts
- [[educational-robotics]]
- [[special-education]]
- [[equity-in-ai-education]]
- [[inclusive-learning]]

## Connected Articles
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[social-robot-study-companions]] — Social Robots as Study Companions
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo: Digital Storytelling Robots and Motivation
## Citation

Bolla, G., Bolla, M., Gena, C., Mazzei, A., Donini, M., & Lillo, A. (2025). [*Using the Pepper robot to support sign language communication*](https://arxiv.org/abs/2509.09889).
