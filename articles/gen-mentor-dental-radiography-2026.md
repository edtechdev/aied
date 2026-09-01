---
title: "Gen-Mentor: A Human-in-the-Loop Instructional Framework for Dental Radiography Using Generative AI"
created: "2026-09-01T09:45:00-04:00"
updated: "2026-09-01T09:45:00-04:00"
type: article
tags: ["medical-education", "generative-ai", "human-in-the-loop-ai", "discipline-specific-aied", "simulation", "llm"]
research_method: ["design and evaluation study"]
audience: ["medical educators", "researchers", "designers"]
level: ["higher ed"]
sources: ["raw/papers/gen-mentor-dental-radiography-2026.md"]
confidence: high
---

> **Synthesis:** Dong, Peng, Wu, Shen, Sun, Chen, Guan, Wang, Ni, Huang, and Tao (2026) present Gen-Mentor, a human-in-the-loop instructional framework that integrates a DentDiff-VLM backbone into a dental-radiography workflow. The backbone uses Faster R-CNN to localize four target radiographic findings (Filling, Implant, Impacted Tooth, and Cavity), a conditional diffusion model supports [[curriculum-design|curriculum]] expansion by generating class-specific synthetic ROI candidates, a vision-language model (VLM) generates evidence-linked caption candidates, and a large language model (LLM) reformats them into candidate case descriptions, comparisons, and quiz prompts. Selected candidate instructional assets undergo structured expert review. Evaluated across technical performance, expert review, and learner acceptance among dental students (N = 45), the framework achieved a mean System [[usability-research|Usability]] Scale score of 72.7, with improvements in case diversity and immediate-feedback support.

## Key Findings

- Gen-Mentor integrates a DentDiff-VLM backbone into a dental-radiography workflow for instructional asset generation.
- Faster R-CNN localizes four target radiographic findings: Filling, Implant, Impacted Tooth, and Cavity.
- A conditional diffusion model generates class-specific synthetic ROI candidates for curriculum expansion.
- A VLM generates evidence-linked caption candidates, which an LLM reformats into case descriptions, comparisons, and quiz prompts.
- Selected instructional assets undergo structured expert review; the framework achieved a mean SUS score of 72.7 among dental students (N = 45), with improvements in case diversity and immediate-feedback support.

## Implications for AI in Education

Gen-Mentor exemplifies a [[human-in-the-loop-ai|human-in-the-loop]] approach to [[generative-ai|generative AI]] in [[medical-education|health-professions education]], where AI generates candidate instructional assets that undergo structured expert review before use. The framework addresses a key limitation of existing models — that they automate diagnosis but lack the interpretive depth needed for comprehensive student training. For medical educators, the approach offers a model for using AI to expand case diversity and provide immediate feedback while retaining expert oversight. The study connects to [[discipline-specific-aied]], [[simulation]], and [[llm]] [[research-methods-aied|research]] in medical education.

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
