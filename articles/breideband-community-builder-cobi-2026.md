---
title: "A Feasibility and Implementation Integrity Study of the Community Builder (CoBi): An AI-based Collaboration Support System in K-12 Classrooms"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-03T15:00:00-04:00"
type: article
tags:
  - collaborative-learning
  - k-12
  - human-in-the-loop-ai
  - student-ai-interaction
  - edtech-platform
  - teacher-role
  - visualization
  - privacy
  - design-based-research
  - professional-training
sources:
  - raw/papers/breideband-community-builder-cobi-2026.md
confidence: high
---

> **A Feasibility and Implementation Integrity Study of the Community Builder (CoBi): An AI-based Collaboration Support System in K-12 Classrooms** — This paper introduces the Community Builder (CoBi), a classroom-wide AI system that uses speech recognition and language understanding to create non-evaluative, privacy-preserving visualizations of uplifting small-group student discourse, intended to support students' [[collaborative-learning]] skills and community building. Through an interview study with three middle school teachers and 12 students plus two classroom pilots with 61 students across six [[k-12]] classrooms, the authors establish broad student and teacher buy-in, technical feasibility in noisy real-world classrooms, and the central finding that high-integrity use depends on substantial [[professional-training]] for teachers. The work surfaces transferable design principles around [[teacher-role]] facilitation, [[human-in-the-loop-ai]] orchestration, and navigating tensions between privacy, surveillance, and student agency.

## Key Findings

- CoBi detects expressions of "uplifting" discourse (e.g., "that's a great idea!") mapped to Community Agreements (CAs) across four categories—being respectful, being equitable, being committed to community, and moving our thinking forward—and displays aggregated, classroom-level feedback as non-evaluative [[visualization]]s (an organic tree animation, a radar chart, and a sentence cloud), deliberately withholding student- or group-level feedback to protect privacy and build [[trust]].
- In the interview study (Study 1), both students and teachers expressed broad buy-in for an AI system that could support the relational dimension of collaboration; 83.3% of student pairs preferred the qualitative tree over the quantitative radar, students emphasized [[privacy]] concerns (including a desire that CoBi not "snitch" to administrators), and teachers worried about classroom integration and being put "on the spot" by real-time feedback, favoring pre/post-action review over live display.
- The technical feasibility study (Study 2) with CoBi v1 across three classrooms showed the [[edtech-platform]] could be deployed successfully in noisy middle school environments using commodity microphones and a scalable cloud pipeline; however, time constraints and classroom management cut the revisiting phase short, and mismatches between teacher and student interfaces created confusion about whether visualizations were group- or class-level.
- The implementation integrity study (Study 3) with CoBi v2 found teachers pursued diverse adaptations with varying fidelity to design goals: high-integrity engagements used noticings and [[visualization]]s to spark [[metacognition]] and critical reflection about collaboration and the AI's classifications, while low-integrity uses drifted toward using CoBi as a performance-monitoring device or veering into general [[ai-literacy]] discussions.
- CoBi's discourse classification relies on three fine-tuned RoBERTa transformer models trained on human- and Whisper ASR transcripts, achieving AUROCs of 0.84, 0.77, and 0.82 on human transcripts (0.71, 0.67, 0.71 on Whisper transcripts), adequate for [[educational-nlp]]-based class-level feedback via the principle of aggregation.
- The authors identify four transferable design principles: (1) significant [[teacher-role]] professional learning is required for integral use; (2) real-time multi-device feedback must be managed to avoid fragmenting student attention; (3) classroom-level (rather than individual) feedback effectively navigates tensions between [[privacy]], surveillance, and student agency; and (4) positioning ASR imperfections as a feature enables productive discussion of AI's affordances and limitations, supporting [[trust-calibration]].

## Connected Concepts

- [[collaborative-learning]]
- [[k-12]]
- [[human-in-the-loop-ai]]
- [[student-ai-interaction]]
- [[edtech-platform]]
- [[teacher-role]]

## Connected Articles

- [[ai-collaborative-learning-systematic-review]]
- [[ai-assisted-collaborative-learning-model-dbr]]
- [[clara-collaboration-literacy-dashboard]]
- [[privacy-aware-classroom-incident-recognition-2026]]
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]]
- [[teacher-ai-teaming-five-levels]]

## Citation

Breideband, T., Bush, J. B., Reitman, J. G., Rose, S., Weatherley, J., Penuel, W. R., & D'Mello, S. K. (2025). [A Feasibility and Implementation Integrity Study of the Community Builder (CoBi): An AI-based Collaboration Support System in K-12 Classrooms](https://doi.org/10.1007/s40593-025-00509-2). *International Journal of Artificial Intelligence in Education*, 35(4), 3579-3613.
