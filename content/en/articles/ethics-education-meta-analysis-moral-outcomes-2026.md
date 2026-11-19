---
title: "Education is effective in improving students' ethical and moral outcomes: a systematic review and meta-analysis"
created: "2026-11-19T10:02:00-05:00"
updated: "2026-11-19T10:02:00-05:00"
type: article
evidence_context: educational
source_url: "https://osf.io/bdn2u"
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
verified: [citation, numbers, links]
pedagogy: [active-learning, case-based-learning, reflection]
ethics: [ethics]
methods: [meta-analysis-systematic-review]
audience: [curriculum designers, instructors, researchers]
research_method: [literature review]
sources: ['raw/papers/ethics-education-meta-analysis-moral-outcomes-2026.md']
confidence: medium
page_kind: [synthesis]
---

> **Adjacent research — no AI in the study.** Basarkod and colleagues synthesized 66 studies (9,978 students) of ethics education and found that **ethics interventions work**: compared with control conditions, they raised ethical and moral outcomes by g = 0.55 (95% CI [0.39, 0.70]). The finding matters for an AI-in-education corpus because [[ethics|AI ethics]] and [[ai-literacy|AI literacy]] teaching is usually justified on the assumption that ethics instruction changes anything at all — and, more usefully, because the moderation results say *how* it changes: **discussion-based delivery worked, lecture-only delivery did not** (g = 0.56 and g = 0.68 for discussion and discussion-plus-didactic, against g = 0.10 for didactic alone, which was not distinguishable from zero). Nothing in this paper concerns AI; the bridge to AI ethics education is drawn below and flagged as interpretation.

## Key Findings

- **Ethics education works.** Across 45 controlled comparisons and 133 effects, ethics interventions raised ethical and moral outcomes by g = 0.55 against control conditions.
- **73% of true effects were meaningfully helpful and 2% meaningfully harmful**, using the protocol's pre-specified thresholds of g > 0.2 and g < −0.2.
- **How ethics is taught moderates the effect more than what is taught**: discussion-based and discussion-plus-didactic formats worked, lecture-only delivery did not differ from zero.
- **Content transfers across disciplines.** General and domain-specific ethics interventions performed similarly, and intervention duration did not moderate the effect.
- **Online delivery was statistically indistinguishable from in-person**, on four studies, all university nursing and pharmacy courses.

## What the study did

The authors ran a pre-registered systematic review and three-level meta-analysis (OSF registration [osf.io/bdn2u](https://osf.io/bdn2u)), following PRISMA, with Cochrane RoB2 risk-of-bias assessment. They included 66 studies drawn from 64 articles, covering **9,978 students** at primary, secondary and tertiary levels in naturalistic educational settings — classrooms and lectures, not contrived laboratory tasks — with interventions of 10 minutes or longer.

The primary contrast (45 studies, 133 effects) compared ethics interventions against waitlist, inactive or active control groups. A second subset (38 studies, 113 effects) compared one intervention format against another, which is where the delivery-format findings come from.

The sample is heavily Western: 36 studies from the USA, 5 from Canada, 5 from European countries, 1 from Australia, 18 from Asian countries (10 in the Middle East), 1 from Central America — and **none from South America or Africa**, roughly 71% Western overall.

## The pooled effect

Ethics education produced a **medium-sized improvement**: g = 0.55, 95% CI [0.39, 0.70], p < 0.001 (reported as g = 0.54 in the abstract and discussion). Converting the aggregate into a distribution rather than a point estimate is the paper's most decision-relevant move: **73% of true effects exceeded the pre-registered helpful threshold** (g > 0.2, 95% CI [59%, 84%]) and **2% exceeded the harmful threshold** (g < −0.2, 95% CI [0%, 8%]).

Heterogeneity was substantial, and mostly between studies rather than within them: total I² = 87.71%, of which I²between = 72.38% and I²within = 15.34%. That decomposition is what justifies looking for moderators rather than reporting one pooled number.

## How ethics is taught matters more than what is taught

The clearest moderator is delivery style:

- **Discussion only**: g = 0.56, 95% CI [0.29, 0.84], p < 0.001.
- **Discussion plus didactic**: g = 0.68, 95% CI [0.45, 0.90], p < 0.001 — the largest pooled effect.
- **Didactic only**: g = 0.10, 95% CI [−0.18, 0.39], not significant.

The moderation test was significant (F(2,124) = 5.95, p = 0.003), and the head-to-head trials agree: adding discussion to an ethics intervention beat lecture-based or independent-study delivery by g = 0.67, 95% CI [0.22, 1.11] (9 studies, 21 effects).

Other moderators came back null, which is its own kind of result:

- **Outcome type** made no difference (F(2,126) = 0.38, p = .69) — though the majority of studies measured moral judgment and reasoning (34 studies, 92 effects), mostly with dilemma-based instruments such as the Defining Issues Test and Moral Judgment Interview; moral character was tested in a single study.
- **Follow-up lag** did not moderate (F(1,131) = 0.18, p = .67).
- **General versus domain-specific content** did not differ (F(1,131) = 0.57, p = .45), nor did specific domain (F(12,74) = 1.07, p = .40), nor duration (F(1,100) = 0.27, p = .61).
- **Online versus in-person** delivery was statistically indistinguishable (g = 0.08, 95% CI [−0.16, 0.32], p = .29), but on only four studies, all university nursing and pharmacy courses.

Education level is the one place the authors ask for caution. Primary-school interventions showed g = 0.94, 95% CI [0.55, 1.32] against tertiary g = 0.48, 95% CI [0.28, 0.67] — a difference of 0.46 (95% CI 0.03–0.89) — yet the overall moderation by level was **not** significant (F(3,129) = 1.57, p = .20), and the authors describe the difference estimate as imprecise.

Robustness checks held: without outliers g = 0.54 [0.39, 0.68], without imputed standard deviations g = 0.52 [0.36, 0.68]. Egger's test was significant (F(1,131) = 12.60, p < 0.001) but the three-parameter selection model was not (χ²(1) = 0.04, p = .83), and risk of bias (F(1,131) = 1.91, p = 0.17) and peer-review status (F(1,131) = 1.44, p = .23) did not moderate the effect.

## Why this belongs in an AI-education corpus

This is the editor's framing, not the paper's claim, and it should be read as such. Three transfers are defensible:

- **The delivery-format result is directly transferable.** AI ethics modules delivered as lectures about bias, privacy and academic integrity are, on this evidence, the weakest format available. The finding argues for [[case-based-learning|case discussion]] and structured deliberation over didactic coverage — the same conclusion the AI-ethics literature reaches independently, now with 45 controlled comparisons behind it.
- **The null moderators cut against curriculum anxiety.** General and domain-specific ethics content performed alike, and duration did not matter, which suggests that embedding AI ethics into disciplinary courses is not obviously worse than building a separate module — and that adding weeks to a syllabus is not where the effect lives.
- **The effect size sets an expectation.** Roughly half a standard deviation from a well-run intervention is a realistic target. Claims that a short module will transform students' ethical behavior should be treated sceptically, and the paper's outcome measures — moral reasoning, not conduct — cannot support behavioral claims at all.

The transfer has a limit worth stating plainly: the outcome measures are internal moral processes, and **behavior could precede reasoning** rather than follow it. Nothing here shows that ethics instruction changes what students do with a chatbot at 2am.

## What this means for practice

- **Build structured discussion into every ethics unit.** Lecture-only delivery did not reliably improve moral outcomes (g = 0.10, not distinguishable from zero).
- **Pair short didactic framing with discussion rather than choosing between them** — the combined format produced the largest pooled effect (g = 0.68).
- **Treat ethics content as portable across disciplines.** General and domain-specific interventions performed similarly, so ethics can be embedded in any subject without losing effect.
- **Use online or blended delivery where scale matters**, noting the evidence for equivalence comes only from university nursing and pharmacy courses.
- **Start early where you can.** Primary-school interventions showed the largest effects (g = 0.94) against tertiary (g = 0.48), with the caveat that the difference is imprecise and the overall moderation was not significant.

## Limitations

- **Only one included study was at low overall risk of bias** (23 some concerns, 21 high), and few reported randomization procedures that keep facilitators blind to allocation and hypotheses.
- **Under 25% of included studies were pre-registered**, raising the risk that post-hoc analytic choices inflated effect sizes.
- **Western-centric evidence base** (about 71%): 36 US studies, none from South America or Africa, which limits generalization across ethical traditions.
- **Substantial unexplained heterogeneity** (total I² = 87.71%) remains; student-level moderators such as age or cognitive ability could not be tested, and the authors call for individual-participant-data meta-analysis.
- **Outcomes are moral reasoning, not behavior**, so causal claims about conduct cannot be made — and behavior may precede rather than follow reasoning.
- **The online-versus-in-person null** rests on four university nursing and pharmacy studies and may not generalize to other levels or fields.

## Citation

Basarkod, G., Cahill, L. S., Burston, A., Barnett, D., Mahoney, J., Griffith, S., Swaryandini, G., Bradshaw, E. L., Devine, E. K., Akhtaruzzaman, M., Wilks, M., Slattery, P., Saeri, A. K., Grundy, E. A. C., Lonsdale, C., Dicke, T., Marsh, H. W., Chambers, S. K., & Noetel, M. (2024). Education is effective in improving students' ethical and moral outcomes: A systematic review and meta-analysis [Preprint]. *PsyArXiv*. https://osf.io/bdn2u
