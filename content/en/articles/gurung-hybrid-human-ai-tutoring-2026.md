---
title: Improving hybrid human-AI tutoring by differentiating human tutor roles based on student needs
created: "2026-10-10T18:56:00-04:00"
updated: "2026-10-16T13:51:50-04:00"
type: article
foundations: [ai-education]
technology: [intelligent-tutoring]
assessment: [feedback]
ethics: [equity-in-ai-education]
audience: [researchers, administrators]
level: [k 12]
sources: ['raw/papers/gurung-hybrid-human-ai-tutoring-2026.md']
confidence: high
research_method: [quasi-experiment]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This study tests a differentiated human-AI tutoring policy: lower-performing students (below the within-grade median on prior state tests) get **proactive** tutoring — the human tutor initiates support — while higher-performing students get **reactive**, on-demand support. Using a difference-in-discontinuities design (fall AI-only period vs. spring hybrid period, 635 students in grades 5–8, IXL as the AI tutor), the authors find that hybrid human-AI tutoring produces large overall gains over the AI-only baseline: **25% more time on task, 36% higher skill proficiency, and 61% greater academic growth** (standardized MAP). Crucially, proactive and reactive tutoring produce *comparable* time-on-task and skill-proficiency gains — the two groups achieve similar outcomes through different support mechanisms — and no significant MAP-growth difference at the cutoff itself, though proactive tutoring shows marginally higher average growth (75%, p = .065) concentrated among students farther below the cutoff, i.e., it narrows achievement gaps rather than just raising averages. The policy implication is a cost-scaling lever: one tutor per session can serve more students if the high performers opt into reactive support, without sacrificing their outcomes.

The mechanism story is coherent with the prior evidence the paper builds on: automated tutors (ITS) are less effective for lower-performing students (Steenbergen-Hu & Cooper meta-analysis) because some needs — accountability, motivation — exceed what software provides, while higher performers are better equipped to use adaptive systems independently. Proactive support supplies exactly the motivational/accountability dimension for the students who need it; reactive support preserves pace and autonomy for those who don't. The result also replicates Borchers et al.'s engagement findings (25% time-on-task, 38% skill proficiency) but adds the differentiated-policy contrast. The honest limits are the design: DiDC is quasi-experimental (the authors name an RCT of policy vs. business-as-usual as the stronger test, complicated ethically once you know proactive support helps), the allocation is dichotomous (a single median cutoff misses within-group nuance), and the 75% proactive advantage is marginal (p = .065). A secondary finding worth noting: students showed greater benefits with female tutors, pointing at relational dynamics that neither the policy nor the platform currently models.

## Key findings

- **Hybrid tutoring beats AI-only substantially:** +25% time on task, +36% skill proficiency, +61% MAP growth vs. the fall AI-only baseline, within the Imbens-Kalyanaraman bandwidth.
- **The differentiated policy doesn't trade one group off for the other:** proactive (below-median) and reactive (at/above-median) students achieved comparable time-on-task and skill-proficiency gains through different support mechanisms — proactive sustained engagement for strugglers; reactive preserved independent pacing for strong students.
- **No cutoff discontinuity in MAP growth** between the two arms, but proactive tutoring averaged marginally higher growth (75%, p = .065), concentrated below the cutoff — the gap-narrowing pattern the authors highlight.
- **Consistent with Borchers et al.** (25% time-on-task, 38% skill proficiency from human-AI access) — this study's contribution is the *differentiation*, not the hybrid effect itself.
- **Tutor demographics matter:** students showed greater benefits paired with female tutors, an unexploited relational variable in current allocation policies.

## What this means for practice

- **For tutoring program designers:** differentiated allocation is the cost lever. Proactive support for below-median students, reactive for above — one tutor session can serve more students without measurable loss for the reactive group.
- **For equity arguments:** the proactive arm's gap-narrowing pattern (larger effects farther below the cutoff) is the evidence that hybrid tutoring can compress achievement gaps, not just lift averages.
- **For measurement design:** the DiDC design (compare the spring discontinuity to the fall null discontinuity) is a reusable quasi-experimental template when randomizing support allocation is ethically blocked.
- **For future platform work:** the dichotomous cutoff is the acknowledged weak point — within-group need variation, tutor-student relational fit, and demographic differential effects are all open for personalization.

## Limitations

- Quasi-experimental DiDC with national growth norms as reference rather than a matched control; the authors themselves call for an RCT of the policy against business-as-usual.
- Dichotomous allocation (single median cutoff) misses within-group heterogeneity in need.
- The proactive advantage is marginal (p = .065) and average-level; the "narrowing gaps" claim rests on the below-cutoff concentration, not a significant cutoff interaction.
- One tutoring provider, one platform (IXL), grades 5–8 math — domain and platform generality untested.
- Tutor demographic effects are reported as an observation, not analyzed with the design's inferential machinery.

## Citation

Gurung, A., Gao, G., Gutterman, J., Thomas, D. R., Gupta, S., Branstetter, L., Brunskill, E., Aleven, V., & Koedinger, K. R. (2026). [*Improving hybrid human-AI tutoring by differentiating human tutor roles based on student needs*](https://arxiv.org/abs/2605.11155). *arXiv:2605.11155v1* [cs.CY].
