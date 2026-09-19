---
title: "Gen-Mentor: A Human-in-the-Loop Instructional Framework for Dental Radiography Using Generative AI"
created: "2026-09-01T09:45:00-04:00"
updated: "2026-09-19T08:23:28-04:00"
type: article
technology: [generative-ai, human-in-the-loop-ai, llm, simulation]
research_method: [design and evaluation study]
audience: [medical educators, researchers, designers]
level: [higher ed]
sources: ["raw/papers/gen-mentor-dental-radiography-2026.md"]
confidence: high
discipline: [medical education]
page_kind: [framework]
---

> **Synthesis:** Dong, Peng, Wu, Shen, Sun, Chen, Guan, Wang, Ni, Huang, and Tao (2026) present Gen-Mentor, a human-in-the-loop instructional framework that integrates a DentDiff-VLM backbone into a dental-radiography workflow. The backbone uses Faster R-CNN to localize four target radiographic findings (Filling, Implant, Impacted Tooth, and Cavity), a conditional diffusion model supports [[curriculum-design|curriculum]] expansion by generating class-specific synthetic ROI candidates, a vision-language model (VLM) generates evidence-linked caption candidates, and a large language model (LLM) reformats them into candidate case descriptions, comparisons, and quiz prompts. Selected candidate instructional assets undergo structured expert review. Evaluated across technical performance, expert review, and learner acceptance among dental students (N = 45), the framework achieved a mean System [[usability-research|Usability]] Scale score of 72.7, with improvements in case diversity and immediate-feedback support.

## Key Findings

- Gen-Mentor integrates a DentDiff-VLM backbone into a dental-radiography workflow for instructional asset generation.
- Faster R-CNN localizes four target radiographic findings: Filling, Implant, Impacted Tooth, and Cavity.
- A conditional diffusion model generates class-specific synthetic ROI candidates for curriculum expansion.
- A VLM generates evidence-linked caption candidates, which an LLM reformats into case descriptions, comparisons, and quiz prompts.
- Selected instructional assets undergo structured expert review; the framework achieved a mean SUS score of 72.7 among dental students (N = 45), with improvements in case diversity and immediate-feedback support.

## What this means for practice

- **Instructors.** Gate every AI-generated radiograph caption, case description, and quiz prompt through structured expert review before it reaches students: the framework's five-expert panel withheld items that failed terminology-accuracy and visual-evidence alignment checks rather than shipping them.
- **Instructors.** Adopt the [[human-in-the-loop-ai|human-in-the-loop]] pattern this framework demonstrates for [[medical-education|health-professions education]] — AI generates candidate assets that expand case diversity and support immediate feedback, while the educator keeps the interpretive authority that diagnosis-only models lack.
- **Designers.** Split deployment into two stages: run Faster R-CNN localization and BLIP caption generation for learner-facing interaction, and perform class-conditioned diffusion ROI synthesis offline during case-bank construction, because diffusion training and generation costs remain high.
- **Designers.** Position generated material as a study aid rather than a clinical reference, and make that boundary explicit in the learner-facing interface as the study did in its consent form.
- **Researchers.** Treat a screening pass as a floor, not an audit: report the fraction of LLM outputs rejected or revised, since this study's post-revision acceptance rate was never quantified.

## Limitations

- The learner study drew a total of N = 45 dental students from a single institution, and usability rested on the 23 experimental-group participants (mean SUS 72.7, SD = 20.4, range 30.0–97.5), with 15 of those 23 rating the system at or above the "Good" band.
- Radiographs came from a single publicly available corpus with acquisition equipment, patient age range, ethnicity, and setting undocumented at the per-image level, so the reported detection, generation, and caption scores are in-distribution upper bounds rather than externally validated results.
- Expert review covered 64 synthetic ROIs and 100 LLM-generated textual items scored by five experts (three board-certified dental radiologists with more than eight years of clinical experience), with inter-rater agreement of ICC(2,5) = 0.82 and 0.80 respectively, and class-specific confidence intervals rested on only n = 16 ROI samples per class.
- The study measured perceived instructional support, not learning: it included no baseline knowledge test, objective radiograph-reading task, blinded performance scoring, or delayed-retention measure, and questionnaire items Q18–Q20 were worded differently across the experimental and control groups.

## Connected Concepts
- [[medical-education]]
- [[generative-ai]]
- [[human-in-the-loop-ai]]
- [[discipline-specific-aied]]
- [[simulation]]
- [[llm]]
- [[ai-education]]

## Connected Articles
- [ai-teammate-task-distribution-medical-training-2026] — SCAN framework for AI task distribution in medical training
- [genai-simulate-patient-history-pbl-2026] — GenAI-simulated patient histories in PBL
- [medgame-llm-medical-education-gamification] — gamified LLM learning for medical education
- [hdr-brachytherapy-agentic-ai-simulation-2026] — agentic AI simulation for brachytherapy training

## Citation
Dong, Y., Peng, C., Wu, Y., Shen, S., Sun, X., Chen, T., Guan, S., Wang, C., Ni, E., Huang, T., & Tao, J. (2026). [Gen-Mentor: A human-in-the-loop instructional framework for dental radiography using generative AI](https://doi.org/10.1016/j.caeai.2026.100641). *Computers and Education: Artificial Intelligence, 11*, 100641.
