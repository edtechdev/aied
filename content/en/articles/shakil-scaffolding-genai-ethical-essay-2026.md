---
title: "Scaffolding GenAI Use in Ethical Essay Writing: A Three-Year Experience Report in Introductory Computing"
published: "2026-11-06"
created: "2026-11-06T09:05:00-05:00"
updated: "2026-11-06T09:05:00-05:00"
type: article
sources: ['raw/papers/shakil-scaffolding-genai-ethical-essay-2026.md']
source_url: "https://arxiv.org/abs/2611.08431"
confidence: high
page_kind: [evaluation]
research_method: [survey]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4-flash-0731
    role: drafting
    date: "2026-11-06"
    agent: hermes-agent
source_depth: full text
pedagogy: [scaffolding]
technology: [generative-ai, llm]
assessment: [assessment]
ethics: [ethics, ai-use-disclosure]
foundations: [academic-integrity, framing-ai-use-for-students]
---

> **Synthesis:** Shakil, Denny, Seo, Hirani, Ma, and Brabrand (2026) report three years of [[generative-ai|GenAI]] use in ethical essay writing in a large first-year [[cs-education|computer systems]] course, analyzing 1,894 responses across six post-essay surveys from 2024 to 2026. Under voluntary-use policies, AI adoption held steady at around two-thirds of students, rising above 90% once a scaffolded responsible-use workflow was introduced in 2026. Students mainly used AI for grammar and style help, tool use diversified beyond ChatGPT, and grade-linked analyses in 2025 and 2026 both showed that AI use did not independently predict essay quality, while marker evaluations indicated high levels of critical engagement when use was scaffolded. The authors conclude that GenAI's pedagogical value depends on how [[assessment]] design guides students to evaluate and critically engage with AI-generated suggestions, positioning [[scaffolding]], [[ai-use-disclosure|disclosure]], and [[framing-ai-use-for-students|framing]] as the levers that shape [[academic-integrity|academic integrity]] in [[higher-ed|higher education]] [[writing-education|essay writing]] — a lesson with direct implications for policy and practice.

## Key Findings
1. **Adoption responded to policy, not time.** Voluntary use held at 59% to 64% (Essay 1) and 69% to 68% (Essay 2) in 2024–2025, reaching 93% for both essays in 2026 (both p < .001 vs. 2025).
2. **Use concentrated on form, not content.** 65% of AI users in 2024 and 61% in 2025 used AI for style, grammar, and form, rising to 91% in 2026; brainstorming fell from 47% to 15%.
3. **Tool use diversified beyond ChatGPT.** Its primary-tool share dropped from roughly 90% in 2024–2025 to 64% and 59% in 2026.
4. **AI use did not predict essay quality.** Once prior writing ability was controlled, ANCOVA found no independent effect (Phase 2: β = 0.051, p = .60; Phase 3: β = 0.350, p = .30, 95% CI [−0.32, +1.02]).
5. **Scaffolded students engaged critically.** Rejection or modification of AI suggestions was reported by 81% of Essay 1 and 84% of Essay 2 AI users, and positive AI tone rose from 47% to 66% (both p < .0001).

## The design problem in a technical first-year course

Ethical essays are common in computing because they require applying normative theories, identifying stakeholders, and justifying positions on contentious issues, and GenAI heightens their relevance through concerns such as algorithmic bias and misinformation. In this course, two short essays (400–500 words) were the only assessment for the [[ethics]] learning outcome, worth 8% of the final grade. The puzzle that motivated the study was behavioral: with roughly 570 students expressly allowed to use GenAI in Semester 1, 2024, under mandatory disclosure, many reported not using it at all. That gap between permission and uptake drove the study's question — how students actually engage with GenAI when free to use it — across three phases: exploration (2024), measurement (2025), and scaffolded redesign (2026).

## Adoption and use across three years

The surveys show stability followed by sudden change. Under voluntary policy, adoption did not change significantly: 59% to 64% for Essay 1 and 69% to 68% for Essay 2 from 2024 to 2025, roughly two-thirds of students. In 2026 it reached 93% for both essays (both p < .001 vs. 2025), which the authors attribute to assessment design and policy framing rather than organic growth. ChatGPT's share of primary tool use dropped to 64% and 59% in 2026 while Claude and Gemini each captured roughly one-tenth of users and Grammarly rose to around 7%. Students mainly used AI for writing support, with brainstorming falling from 47% to 15%, while trust in AI output rose from 7.9% of AI users in 2024 to 22% and held.

## The 2026 scaffolded responsible-use workflow

The redesign required students to write a complete draft independently with a four-item checklist at its top — own words, at least two stakeholders, one counterargument, claims flagged for evidence — then ask an AI tool of their choice, using their own prompt, to refine rather than rewrite the draft, rejecting suggestions that changed their argument. A separate AI disclosure form was required, and a missing draft or form resulted in zero marks. The combined submission had four parts: final essay (50% mark), pre-AI draft (mandatory but unmarked), a structured reflection of 100–200 words (25%), and an IEEE-formatted reference list (25%), so markers could compare draft, reflection, and final essay side by side.

## Grades, trajectories, and critical engagement

The grade-linked analyses separated engagement from outcome. ANCOVA modeled Essay 2 scores with Essay 1 as covariate: prior writing ability was a strong predictor in both phases (β = 0.245 and 0.290, both p < .0001), but AI use had no independent effect (Phase 2: β = 0.051, p = .60; Phase 3: β = 0.350, p = .30, 95% CI [−0.32, +1.02]). Adoption trajectories — Always, Never, Adopt, Abandon — also failed to explain score changes. Behavioral evidence was stronger: students preserved their own ideas (E1: 39%, E2: 34%) and caught fabricated references, and markers coded 77–81% of submissions for critical engagement, with positive AI tone rising from 47% to 66%.

## What this means for practice

- **Instructors.** Frame AI use in the assessment: a draft-before-AI step, checklist, marked reflection, and disclosure form moved adoption above 90% where voluntary permission left it near two-thirds.
- **Instructors.** Judge engagement, not usage: neither AI use nor adoption trajectory predicted essay quality once prior writing ability was controlled.
- **Curriculum designers.** Reuse the core scaffold — draft-before-AI, refine-not-rewrite prompting, marked reflection, disclosure — adapting topics and weightings.

## Limitations

- The repeated cross-sectional design cannot track how individual students' practices evolved across the three cohorts.
- One first-year course at one institution, enrolling approximately 500–600 students in the first semester and 200–300 in the second, limits generalization.
- The analysis relies largely on self-reported AI use, prone to recall and social desirability bias.
- Both 2026 essays used the scaffolded workflow, so there was no unscaffolded control, and Phases 2 and 3 used different score scales.
- The engagement codes lack reliability testing; high Phase 3 scores (about 14.8/16) suggest ceiling effects.

## Citation

Shakil, A., Denny, P., Seo, J., Hirani, G., Ma, S. L., & Brabrand, C. (2026). [*Scaffolding GenAI Use in Ethical Essay Writing: A Three-Year Experience Report in Introductory Computing*](https://arxiv.org/abs/2611.08431). arXiv preprint, arXiv:2611.08431.
