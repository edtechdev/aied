---
title: 'From Surface Learning to Deep Understanding: A Grounded AI Tutoring System for Moodle'
created: 2026-05-07
updated: 2026-05-11
type: concept
tags: [intelligent-tutoring, higher-ed, edtech-platform, llm, scaffolding]
sources: [raw/papers/2605.06963.md]
confidence: medium
---

# AI Tutoring for Moodle: Surface to Deep Learning

## Core Contribution

Ostrowska, Kukla & Majstrak (2026) present an AI tutoring system **integrated into the Moodle LMS** designed to scaffold students from surface-level fact recall to deep conceptual understanding through adaptive questioning and feedback.

## How It Works

The system operates within Moodle's existing infrastructure, using LLM-based tutoring to:
- Detect the **depth of student understanding** from their responses
- Adaptively scaffold toward deeper comprehension via [[scaffolding]] techniques
- Move students through [[formative-assessment]] cycles that promote conceptual mastery

This **grounded approach** — embedding AI tutoring in an existing LMS rather than building standalone tools — addresses deployment barriers identified in the [[ai-tutor-effectiveness-review]]. Many intelligent tutoring systems fail to achieve real-world impact because they require new infrastructure; Moodle integration lowers the adoption threshold.

## Connections to the Wiki

The system's focus on deep vs. surface learning connects to [[metacognition]] research — students must recognize when they have only surface understanding. The adaptive approach aligns with [[adaptive-learning-systems]] but emphasizes **qualitative shifts** in understanding rather than quantitative difficulty adjustment. The Moodle deployment strategy echoes lessons from [[ai-peer-feedback-systems]] (AICoFe) about integrating AI tools into existing educational workflows.

Unlike [[tutoring-specific-vs-general-ai]] debates about specialized tutors, this system shows how general LLMs can be **scaffolded into tutoring roles** within familiar platforms. The focus on deep understanding complements [[pedagogy-ai-mistakes]] work on using AI errors for higher-order thinking.

## Open Questions

- How does in-LMS tutoring compare to standalone systems in learning outcomes?
- Can the deep learning scaffolding generalize across disciplines beyond the tested contexts?
- What is the instructor's role when AI handles adaptive questioning within Moodle?

## Related Pages
- [[codify-socratic-tutoring-programming]] — Web-based ITS platform with integrated adaptive assessment and analytics
- [[taklif-ai-interest-based-personalized-assignments]] — AI integration in LMS assignment workflows
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[formative-assessment]]
- [[adaptive-learning-systems]]
- [[ai-tutor-effectiveness-review]]
- [[ai-peer-feedback-systems]]
- [[tutoring-specific-vs-general-ai]]
- [[metacognition]]
- [[pedagogy-ai-mistakes]]
- [[edtech-platform]]