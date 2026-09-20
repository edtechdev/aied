---
title: Confidence-Aware Automated Assessment of Student-Drawn Scientific Models
created: "2026-06-19T04:33:04-04:00"
updated: "2026-09-20T08:08:49-04:00"
type: article
assessment: [assessment-validity, automated-assessment, formative-assessment]
research_method: [experiment]
discipline: [stem education]
level: [k 12]
sources: ['raw/papers/2606.20264.md']
confidence: high
audience: [teachers, assessment designers, researchers]
page_kind: [evaluation]
---

> **Synthesis:** A Vision Transformer (ViT) with LoRA adaptation for [[automated-assessment|automated scoring]] of student-drawn scientific models on six NGSS-aligned middle school [[k-12|assessment]] items. A confidence-aware framework derives response-level confidence from test-time predictive distributions, enabling **selective automation**: high-confidence responses are auto-scored, uncertain cases are deferred for human review. Improves [[assessment-validity|scoring reliability]] while supporting a practical trade-off between automated coverage and scoring risk.

## Key Findings

- **Problem:** Automated scoring of student-drawn scientific models lacks reliability indicators, leaving teachers unable to decide when to trust scores.
- **Method:** Vision Transformer (ViT) with LoRA + confidence-aware framework using test-time perturbations.
- **Dataset:** Six NGSS-aligned middle school [[k-12|assessment]] items (477-816 responses each, scored Beginning/Developing/Proficient).
- **Key innovation:** Response-level confidence enables selective automation — high-confidence auto-scored, uncertain cases deferred for human review.
- **Implication:** confidence-aware [[formative-assessment|assessment]] enables practical triage between automation and [[human-in-the-loop-ai|human oversight]] in educational assessment.

## What this means for practice

- **Instructors.** Auto-score only the drawings the model is confident about and route the rest to review: the selective strategy defers low-confidence responses to human graders, so teacher time goes to the visually ambiguous or unconventional drawings that automated scoring handles worst.
- **Teachers.** Report a confidence value alongside every score instead of a bare proficiency label. Mean confidence correlated positively with scoring accuracy (r = 0.649, p < 0.01), which is what makes a score actionable for deciding when to trust it.
- **Assessment designers.** Budget for per-item models: the ViT + LoRA scorer trains 0.6M parameters on an 86.4M backbone and scores a response in 1.0355 ms, while the confidence-aware variants take 20.532 ms — all far below LLM-based scoring approaches.
- **Assessment designers.** Tune the confidence threshold to the risk you can absorb rather than maximizing coverage, since varying it controls the trade-off between automated coverage and scoring risk in [[automated-assessment|automated scoring]].
- **Researchers.** Demand confidence-accuracy evidence before calling a scorer classroom-ready: the authors were still conducting expert review to verify the qualitative validity of the confidence results.

## Limitations

- Six NGSS-aligned middle school items with 477, 538, 520, 772, 453, and 816 responses respectively, all collected from science classrooms in one region of the United States, so students' representational practices may reflect local curricular and classroom contexts.
- Expert-provided rubric scores serve as the reference, so any systematic tendencies in human scoring may also be reflected in model performance.
- Models are trained independently for each assessment item, so nothing here shows a single scorer transferring across items or subjects.
- The confidence metric is validated by a correlation with accuracy (r = 0.649) with expert review still under way, and the zero-shot comparison against Qwen3-VL-8B-Instruct is summarized only as lower agreement with details kept in the project repository.

## Connected Concepts

- [[automated-assessment]]
- [[assessment-validity]]
- [[k-12]]
- [[formative-assessment]]

## Connected Articles

- [[cong-confidence-asag-2026]] — Confidence-aware automatic short answer grading
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: rubric-aware concept bottleneck models for grading
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: FERPA-compliant local-LLM autograder

## Citation

Fang, L., Zhang, Y., Park, J., Wang, Z., Ma, P., & Zhai, X. (2026). [*Confidence-Aware Automated Assessment of Student-Drawn Scientific Models*](https://arxiv.org/abs/2606.20264). arXiv cs.AI preprint.
