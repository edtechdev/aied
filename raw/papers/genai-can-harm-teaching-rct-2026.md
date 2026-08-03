---
source_url: https://ssrn.com/abstract=7007339
ingested: 2026-08-03
sha256: 9d901c398e3d0b1a8c83f0129a5dd0ab7f192d7dd860ac6e138728e84d7389c6
---

# Generative AI Can Harm Teaching

Alp Sungu, Benjamin Lira, Angela L. Duckworth (Operations, Information and Decisions, University of Pennsylvania). SSRN Working Paper 7007339, June 25, 2026.

## Design

Randomized field experiment across a network of 24 K-12 schools in Turkey. Randomization at the school-department level. 538 teachers randomized (156 AI Access, 182 AI Access+Reminder, 200 Control); analytical sample 193 teachers, 2,816 students, 14,198 student-course observations, 14 schools, 85 school-department clusters, 11 subjects. Treatment: custom GPT-4o chatbot with curated Turkish Ministry of Education curriculum database + one-hour training; Reminder arm added weekly emails with individualized usage statistics. Control: business-as-usual PD. Pre-registered (aspredicted). Semester-length intervention (spring 2025). ITT with school-department clustered SEs; baseline (Term 1) score covariate for performance; no baseline for student motivation/confidence (no pre-survey).

## Main results

- **Student intrinsic motivation: −0.111 SD** (95% CI [−0.199, −0.023], p = 0.015). All five survey items negative; four significant at p<0.10; largest: subject importance β = −0.170 (p = 0.008).
- **Student confidence: −0.090 SD** (95% CI [−0.196, +0.016], p = 0.097, marginal).
- **Academic performance: null on average** (β = −0.019 SD, 95% CI [−0.088, +0.050], p = 0.58) — but masks strong heterogeneity:
  - Students of **below-median-performing teachers: −0.129 SD (p = 0.005)**; above-median teachers: +0.054 (p = 0.14).
  - Ceiling compression limits power: control mean 89.2/100; 47% of control scores ≥95; 12% exactly 100.
- **Heterogeneity on motivation:** teachers with above-median pre-intervention AI use show bigger motivation decline (β = −0.182, p = 0.015 vs −0.052, p = 0.40; interaction p = 0.10). Confidence declines driven by lower-performing teachers (β = −0.183, p = 0.012 vs −0.022, p = 0.73; interaction p = 0.061).
- **Teacher beliefs about AI's impact on student learning: null on average** (β = +0.126, p = 0.50), but heavy prior AI users became **more pessimistic** (β = −0.379) while light prior users became **more optimistic** (β = +0.458; interaction p = 0.053). Contradicts "familiarity breeds acceptance"; suggests an arc from initial awe to awareness of unintended effects.
- Robustness: negative motivation estimates survive covariate/FE/clustering specs; Lee (2009) bounds uniformly negative; survey response balanced.

## Teacher usage patterns

- 66% of conversations: teaching material preparation (lecture prep 32%, homework/exam creation 22%, syllabus design 9%); 16% instructional support (differentiation, misconception correction, feedback, stress management); 18% general use.
- Shallow interaction: median 2 user prompts, mean 4.7 messages per session. Teachers accepted outputs with minimal iteration — task delegation rather than iterative collaboration; limits pedagogical reflection (augmentation vs substitution).

## Interpretation

- **Principal–agent problem**: teachers (agents) benefit from AI labor savings, but students (principals) bear the cost of reduced relational/affective teaching and scaffolding.
- **Skill-substitution hypothesis**: lower-performing teachers delegate more (AI as task generator), displacing the scaffolding and feedback through which student self-efficacy is built.
- **Cognitive offloading**: AI-generated materials may converge on generic style, lacking the teacher's signature pedagogical reasoning.
- Challenge to the assumption that productivity-enhancing AI tools automatically benefit instruction.
