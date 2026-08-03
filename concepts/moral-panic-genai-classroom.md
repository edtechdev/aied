---
title: "Navigating the moral panic: encouraging appropriate use of GenAI in the classroom rather than condemning innovation as disruption"
created: 2026-07-19
updated: 2026-07-19
type: concept
tags: [generative-ai, higher-ed, academic-integrity, authentic-assessment, over-reliance, ai-literacy, "assessment"]
sources: [raw/papers/tandf-2026-moral-panic-genai.md]
confidence: high
---

# Navigating the moral panic: encouraging appropriate use of GenAI in the classroom rather than condemning innovation as disruption

**Jennifer M. Krebsbach & Victoria L. Cross (University of California, Davis)** — *Assessment & Evaluation in Higher Education* (Taylor & Francis). Open Access, CC BY 4.0. doi:10.1080/02602938.2026.2686727.

📄 [Full text (Taylor & Francis, OA)](https://www.tandfonline.com/doi/full/10.1080/02602938.2026.2686727) — open data on [GitHub (jenniferkrebsbach/moralpanic)](https://github.com/jenniferkrebsbach/moralpanic)

## Summary

A **natural-experiment / design-based study** tracking eight iterations of a lower-division *Data Visualisation in the Social Sciences* course (n = 921 across six years) to test whether — and how — GenAI changes student learning. The authors frame faculty anxiety about GenAI as the latest in a series of "moral panics" (calculators, word processors, search engines, e-learning) and argue the productive response is to **teach and embed GenAI use**, not ban it. They compare three instructional conditions on two quiz types (knowledge vs. applied):
- **pre-GenAI** (2019–2020, n = 3 cohorts)
- **GenAI-available** (2023–2024, n = 3) — GenAI present but no pedagogical adaptation; some students used it, often ineffectively/unethically
- **GenAI-integrated** (2025, n = 2) — explicit instruction + encouragement to use GenAI on the *applied* portion; GenAI banned on the *knowledge* portion (paper quiz)

## Method (key design)
- Quizzes 3–6 analysed (first two dropped as orientation; Quiz 7 dropped as low-stakes). Item-level performance (% correct = difficulty; SD = variability) from the LMS.
- **3 × 4 mixed-design ANOVA**: AI-availability (between, 3 levels) × quiz number (within, 4 levels). Small per-condition N (2–3 cohorts), so effect sizes (ω²) reported as the primary evidence.^[raw/papers/tandf-2026-moral-panic-genai.md]

## Key Findings

### Applied questions — "available" hurt, "integrated" recovered
- **Main effect of GenAI availability:** F(2,5) = 5.85, p = 0.049, **ω² = 0.35** (GenAI availability accounts for 35% of variance in applied-question performance).
- In the **GenAI-available** condition, applied performance was **significantly lower** than baseline on Quizzes 4, 5, 6. Because applied questions could *not* be answered directly by GenAI, the drop indicates students were **less prepared** — either unable to use GenAI effectively or unable to critically evaluate its output.
- In the **GenAI-integrated** condition, applied performance **returned to ~pre-GenAI levels** (and exceeded baseline on one harder quiz). Teaching students to use GenAI for data summarising levelled the field.^[raw/papers/tandf-2026-moral-panic-genai.md]

### Knowledge questions — availability masked cheating; paper quiz revealed a deficit
- Same main effect, **ω² = 0.35**. Knowledge performance stayed at baseline during GenAI-available, then **dropped below baseline** once delivered on paper in the integrated condition.
- The authors interpret the *stable central tendency but elevated variability* during GenAI-available as evidence that **some students unethically used GenAI** to boost knowledge scores (heterogeneous use masked underlying learning differences). Moving knowledge quizzes to paper removed that opportunity and exposed that integrated-cohort students were **less prepared** — plausibly from over-reliance on GenAI to summarise content.^[raw/papers/tandf-2026-moral-panic-genai.md]

### Variability — the headline signal
- **Applied-question variability:** F(2,5) = 64.84, p < 0.001, **ω² = 0.88** — GenAI availability accounted for **88%** of variability. Variability spiked in the GenAI-available condition, returned to baseline under integration.
- **Knowledge-question variability:** availability × time interaction F(6,15) = 11.65, p < 0.001, ω² = 0.57; main effect ω² = 0.78. GenAI availability accounted for **78%** of the increase. Paper delivery produced the **lowest, most stable variability** → read as greater **equity** in the classroom.^[raw/papers/tandf-2026-moral-panic-genai.md]

### Student feedback (pilot, n = 28/149 responded)
Mixed: 53% preferred the new split format (paper knowledge + take-home applied); common praise was reduced stress and more active calculation. Others preferred the old 25-min efficiency.

## Interpretation: design beats ban
The integrated redesign **resolved both academic-integrity and authenticity concerns** by splitting the quiz: a high-integrity paper knowledge test + a high-authenticity, open-resource applied task where GenAI use was taught. The authors caution they likely over-learned the "moral panic" lesson — assuming universal, effective GenAI adoption — when in reality uptake was partial and often ineffective. Their conclusion: monitor our own hypotheses about student GenAI use, keep learning objectives central, and **design authentic assessments for the new environment** rather than condemn the technology.

## Connections to the wiki
- A rare **natural-experiment** counterpart to the RCTs: it shows *unequal, undirected* GenAI access widens score variability (equity loss) and depresses applied performance, while *taught, structured* use restores parity — directly extending [[generative-ai-guardrails-harm-learning]] (design is decisive) and [[ai-generated-feedback-higher-ed]] (well-architected AI use matches/exceeds baseline).
- Reinforces [[over-reliance]] (the integrated cohort's below-baseline knowledge scores are attributed to over-reliance) and [[cognitive-offloading]] / [[ai-making-us-stupid]] (offloading summarisation → less preparation).
- Strong [[authentic-assessment]] and [[academic-integrity]] contribution: the split-format (paper knowledge + open applied) is a concrete, replicable design pattern.
- Ties to [[ai-literacy]] (teaching use is the intervention) and [[equity]] (variability as an equity proxy).

## Related Pages
- [[generative-ai-guardrails-harm-learning]] — PNAS RCT: unguarded AI tutoring harms learning; guardrails neutralize it (design decisive)
- [[ai-generated-feedback-higher-ed]] — Well-architected AI feedback matched teacher feedback (same "coach not crutch" logic)
- [[over-reliance]] — Below-baseline knowledge scores attributed to GenAI over-reliance
- [[cognitive-offloading]] — Offloading summarisation reduces hands-on preparation
- [[ai-making-us-stupid]] — Cognitive offloading → skill decay framework (Cash et al. 2026)
- [[authentic-assessment]] — Split-format (paper knowledge + open applied) as an authenticity/integrity design
- [[academic-integrity]] — Cheating masked by GenAI availability; paper delivery restores integrity
- [[ai-literacy]] — Teaching students to use GenAI is the active intervention
- [[equity]] — Score variability as an equity signal; taught use reduced the gap
- [[higher-ed]] — Deployment context (university)

## Citation
**APA:** Krebsbach, J. M., & Cross, V. L. (2026). Navigating the moral panic: encouraging appropriate use of GenAI in the classroom rather than condemning innovation as disruption. *Assessment & Evaluation in Higher Education*. https://doi.org/10.1080/02602938.2026.2686727
