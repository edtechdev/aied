---
title: "The Impact of Explainable AI on Teachers' Trust and Acceptance of AI EdTech Recommendations: The Power of Domain-specific Explanations"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
foundations: [ai-education, teacher-role]
technology: [machine-learning, edtech-platform, technology-acceptance-model]
stakeholders: [teacher-ai-competency]
ethics: [trust, trust-calibration]
audience: [instructors, researchers, edtech designers]
research_method: [mixed methods, experiment]
level: [k 12]
sources: ['raw/papers/xai-teachers-trust-edtech-recommendations-2026.md']
confidence: high
discipline: [chemistry education, science education]
page_kind: [framework, evaluation]
methods: [mixed-methods-research, qualitative-research]
---

> **Synthesis:** **The Impact of Explainable AI on Teachers' Trust and Acceptance of AI EdTech Recommendations: The Power of Domain-specific Explanations** — Feldman-Maggor, Cukurova, Kent, and Alexandron (2025) adapt Hoff and Bashir's "trust in automation" model to AI in education, proposing that explainable AI (XAI) builds [[trust]] in AI [[edtech-platform|EdTech]] recommendations indirectly by increasing their *understandability*. In a mixed-methods, within-subject experiment with 41 in-service chemistry teachers using the AI [[machine-learning|recommendation tool]] GrouPer, they find that understandability, trust, and acceptance of AI recommendations are positively correlated and that *domain-driven* explanations — framed in curricular/pedagogical language — foster greater understandability and trust than purely *data-driven* (feature-importance) explanations. The authors also surface two situational factors shaping acceptance beyond trust: pedagogical alignment and workload-reduction potential.

## Key Findings

- **Understandability is the bridge between XAI and trust.** Adapting Hoff and Bashir's (2013, 2015) model, the paper positions explainable AI as a *design feature* whose effect on dynamic, learned [[trust]] is mediated by users' understandability of the system's performance — explainability raises trust by letting teachers validate AI outputs against expectations. All correlations among understandability, trust, and acceptance were positive and mostly strong (r > 0.5, one moderate r = 0.439), strengthening after domain-driven explanations were added ([[trust-calibration]]).

- **Domain-driven explanations outperform data-driven ones.** Moving teachers from feature-importance ("data-driven") explanations to semantic, curricular-language ("domain-driven") explanations significantly increased understandability (W = 80.5, p = 0.005), learned trust (W = 52, p = 0.002), and acceptance (W = 22.5, p = 0.003). All seven think-aloud teachers reported domain-driven explanations as more influential for building their trust than data-driven ones — evidence that explanations should "speak" the teacher's [[teacher-role|pedagogical language]], not just expose model internals.

- **Trust is dynamic and requires validation, not just explanation.** Qualitative analysis showed that for some teachers, understandability alone was insufficient to establish trust — several stressed that real classroom experience with the tool was needed before they would fully rely on it, highlighting the situated, dynamic nature of learned [[trust]] rather than a one-shot transparency effect.

- **Acceptance also depends on situational factors beyond trust.** Bottom-up analysis of think-aloud protocols revealed two additional factors influencing teachers' willingness to accept AI recommendations: **pedagogical considerations** (whether the tool aligns with their approach to differentiating instruction, reported by 8 of 11) and the **workload-reduction potential** of the tool (reported by 6 of 11), which the authors treat as acceptance drivers not directly tied to trust and grounded in exploratory [[qualitative-research|qualitative]] evidence.

## What this means for practice

- **EdTech designers.** Ship domain-driven explanations in curricular language, not only feature importance. Moving teachers from data-driven to domain-driven explanations significantly increased understandability (W = 80.5, p = 0.005), learned [[trust]] (W = 52, p = 0.002), and acceptance (W = 22.5, p = 0.003).
- **EdTech designers.** Design explanations to support validation rather than persuasion: five of the eleven think-aloud teachers used them to check the tool's groupings against statistics or their own subject expertise.
- **Instructors.** Expect trust to accrue through classroom use, not from a single walkthrough. Three think-aloud teachers reported that understandability alone was insufficient and that real experience with the tool was required before they would rely on it.
- **EdTech designers.** Do not optimize for trust alone. Pedagogical alignment with the teacher's approach to differentiating instruction (reported by 8 of 11) and workload-reduction potential (reported by 6 of 11) emerged as separate acceptance drivers.
- **Instructors.** Pair AI training with data-fluency development so you can interrogate technical, data-driven explanations instead of relying only on the semantic layer.

## Limitations

- The study is small and single-context: 41 in-service high-school chemistry teachers (37 female, 4 male) working with one tool (GrouPer) in one national setting, and the authors state that the small sample size limits the generalizability of the results.
- The within-subject staged design carries a carryover risk, since the second stage may be affected by the first; the authors explain that counterbalancing across groups was not feasible because the authenticity requirement limited the number of suitable subjects.
- Understandability, [[trust]], and acceptance were each measured with a single 5-point item — a deliberate trade-off to keep a protocol of roughly 45 minutes from fatiguing participants — and understandability was captured as teachers' perception of a system attribute rather than the attribute itself.
- The [[qualitative-research|qualitative]] findings come from 11 of the 41 teachers who completed a semi-structured think-aloud protocol, and the authors report only insights observed in at least three teachers, noting that teachers who did not speak to an issue may still hold an opinion.

## Connected Concepts

- [[trust]]
- [[trust-calibration]]
- [[teacher-role]]
- [[teacher-ai-competency]]
- [[technology-acceptance-model]]
- [[edtech-platform]]
- [[ai-education]]
- [[recommender-systems-and-learning-paths]]
## Connected Articles

- [[intelligent-tpack-ethics-teachers-trust-distrust-2026]]
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]]
- [[activity-theory-teachers-adoption-ai-sem-2026]]
- [[xai-education-framework]]
- [[mejia-domenzain-ml-findings-teachers-blended-2026]]

## Citation

Feldman-Maggor, Y., Cukurova, M., Kent, C., & Alexandron, G. (2025). [The Impact of Explainable AI on Teachers' Trust and Acceptance of AI EdTech Recommendations: The Power of Domain-specific Explanations](https://doi.org/10.1007/s40593-025-00486-6). *International Journal of Artificial Intelligence in Education*, 35, 2889–2922.
