---
title: "From Surface Learning to Deep Understanding: A Grounded AI Tutoring System for Moodle"
created: "2026-05-07T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
pedagogy: [metacognition, scaffolding]
technology: [adaptive-learning, intelligent-tutoring, llm, edtech-platform]
assessment: [formative-assessment]
research_method: [system development]
level: [higher ed]
sources: ['raw/papers/2605.06963.md']
confidence: medium
audience: [instructional designers, educators, software developers]
---

> **Synthesis:** Ostrowska, Kukla & Majstrak (2026) present an AI tutoring system **integrated into the Moodle LMS** designed to scaffold students from surface-level fact recall to deep conceptual understanding through adaptive questioning and feedback.
## How It Works

The system operates within Moodle's existing infrastructure, using [[llm]]-based tutoring to:
- Detect the **depth of student understanding** from their responses
- Adaptively scaffold toward deeper comprehension via [[scaffolding]] techniques
- Move students through [[formative-assessment]] cycles that promote conceptual mastery

This **grounded approach** — embedding AI tutoring in an existing LMS rather than building standalone tools — addresses deployment barriers identified in the [[zerkouk-comprehensive-review-its-2025]]. Many [[intelligent-tutoring|intelligent tutoring systems]] fail to achieve real-world impact because they require new infrastructure; Moodle integration lowers the adoption threshold.

## Connections to the Knowledge Base

The system's focus on deep vs. surface learning connects to [[metacognition]] [[research-methods-aied|research]] — students must recognize when they have only surface understanding. The adaptive approach aligns with [[adaptive-learning]] but emphasizes **[[qualitative-research|qualitative]] shifts** in understanding rather than [[quantitative-research|quantitative]] difficulty adjustment. The Moodle deployment strategy echoes lessons from [[becerra-aicofe-feedback-2026]] (AICoFe) about integrating AI tools into existing educational workflows.

Unlike [[stanford-evidence-base-ai-k12-2026]] debates about specialized tutors, this system shows how general LLMs can be **scaffolded into tutoring roles** within familiar platforms. The focus on deep understanding complements [[pedagogy-ai-mistakes]] work on using AI errors for [[critical-thinking|higher-order thinking]].

## Open Questions

- How does in-LMS tutoring compare to standalone systems in [[learning-gains|learning outcomes]]?
- Can the deep learning scaffolding generalize across disciplines beyond the tested contexts?
- What is the instructor's role when AI handles adaptive questioning within Moodle?

## What this means for practice

- **Instructors.** Keep every AI-generated quiz or study guide in the "Unapproved" state until a teacher reviews it; participants rated the system's resistance to hallucination at 4.44/5 precisely because nothing reached students without human sign-off.
- **Instructional designers.** Tune retrieval to the discipline instead of using one default: 512-character chunks with a temperature of 0.3 reached a RAGAS faithfulness of 0.97 on STEM material, while humanities material needed 1000-character chunks at 0.1 to hold a context recall of 1.00 and an average faithfulness of 0.98.
- **Software developers.** Hold retrieval at Top-K = 10 — raising it to 15 gained no recall and significantly worsened context precision through irrelevant-material distraction — and evaluate a Socratic "deep understanding" mode on context recall (0.98) rather than answer relevancy, which it scores low by design.
- **Instructors.** Ground the assistant strictly in teacher-verified course documents and use the dashboard logs to see which topics students actually query, letting the tutor carry the [[formative-assessment]] workload that 14 out of 18 users named, with the chat interface, as the system's most useful features.

## Limitations

- The human evaluation rests on 18 participants from the authors' own university, of whom 83.3% were students and 11.1% instructors — a single-site usability sample, not a representative or multi-institutional one.
- Outcomes are self-reported: a 1–5 Likert survey plus open-ended questions, with an overall recommendation of 4.00/5 and relevance-and-accuracy rating of 4.06/5. There is no control group, no comparison with Moodle without the tutor, and no measure of [[learning-gains|learning gains]].
- The shift from "surface learning" to deep conceptual understanding is the system's design goal, not a tested result: the automated scores (Ragas LLM-as-a-judge faithfulness of 0.97 and 0.98) judge grounding rather than correctness, and the human side measured usability and perceived utility rather than understanding.
- All configuration findings come from one deployment on a single Moodle server using NLP and Machine Learning course notes and three specific models (Gemini Flash 2.0, GPT-4o-mini, Llama 3.1), so the optimal chunk size and temperature may not transfer to other courses or models.

## Connected Concepts

- [[scaffolding]]
- [[formative-assessment]]
- [[metacognition]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[edtech-platform]]
- [[higher-ed]]
## Connected Articles

- [[zerkouk-comprehensive-review-its-2025]]
- [[becerra-aicofe-feedback-2026]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[pedagogy-ai-mistakes]]
## Citation

Ostrowska, A., Kukla, M., Majstrak, G., Opala, J., Pergała, S., Skwarek, J., & Wróblewska, A. (2026). [*From Surface Learning to Deep Understanding: A Grounded AI Tutoring System for Moodle*](https://arxiv.org/abs/2605.06963).
