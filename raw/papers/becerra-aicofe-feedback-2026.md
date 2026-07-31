---
source_url: https://arxiv.org/abs/2605.04740
ingested: 2026-05-07
sha256: b61bc0b8b2d8446c1cd25b29e352dc5a02bceb7069fa81f1f2f58f9b7313b2e9
---

# AICoFe: AI-Based Collaborative Feedback System for Higher Education

**Source:** arXiv:2605.04740
**Authors:** Alvaro Becerra*, Alejandra Palma, Ruth Cobos (GHIA Group, Universidad Autónoma de Madrid, Spain)
**Venue:** Accepted at LASI Spain 26 (Learning Analytics Summer Institute Spain 2026)

---

## Problem & Contribution

Peer feedback is essential for developing **critical reflection, active learning, and evaluative judgment**, yet student-generated comments are often superficial, inconsistent, or lack actionability due to limited feedback literacy.

**AICoFe** (AI-based Collaborative Feedback) combines multi-LLM generation with **teacher-in-the-loop mediation**. Three independently fine-tuned LLMs produce diverse perspectives, while preserving pedagogical authority via Learning Analytics dashboards.

---

## System Architecture (Four Components)

| Module | Purpose |
|--------|---------|
| **Visualization Module** | Role-specific Learning Analytics dashboards (Dash framework) |
| **Management Module** | Hybrid data infrastructure (SQL + MongoDB) |
| **Feedback Generation Module** | Multi-LLM pipeline for personalized feedback synthesis |
| **Recording Module** | Video/audio capture of student presentations |

## Multi-LLM Pipeline

**Models used:** GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1

**Input data:**
- Quantitative rubric scores
- Validated qualitative observations from evaluators
- Rubric level descriptions
- Instructional materials

**Privacy:** All data anonymized before transmission to commercial LLM providers.

## Teacher Dashboard (Mediation Workflow)

The central interface where educators:
- Inspect scores and qualitative comments from all evaluators
- Review independent feedback drafts from all three LLMs
- **Compose final feedback by selecting individual sentences or paragraphs** from AI outputs
- View visual legend indicating proportion of content contributed by each LLM
- Track extent of teacher modification/curation
- Use text-to-speech (Google TTS) for audio review

**Dual purpose of transparency:**
1. Supports teacher reflection on personal curation patterns
2. Provides data for large-scale analysis of teacher mediation's role

## Student Dashboard
- Access video recordings of own presentations
- Complete self-evaluations using same rubric
- View visual comparisons self vs. external evaluations
- Receive teacher-curated AI feedback
- Rate perceived agreement and usefulness of feedback

## Data Infrastructure
- **SQL:** Structured academic data (courses, groups, rubrics, accounts, scores, comments)
- **MongoDB:** Semi-structured data (feedback versions, drafts, curations, metadata, ratings)
- **GDPR compliance:** Opt-in recording; informed consent

> **Note:** This extraction was truncated by the web extraction service.
