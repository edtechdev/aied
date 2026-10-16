---
title: Self-efficacy and favorability shape learning from tutoring systems and paper practice
created: "2026-10-10T19:04:00-04:00"
updated: "2026-10-16T13:51:50-04:00"
type: article
pedagogy: [learning-theories, self-regulated-learning]
technology: [intelligent-tutoring]
assessment: [formative-assessment]
audience: [researchers, instructional designers]
level: [k 12]
sources: ['raw/papers/cen-self-efficacy-favorability-2026.md']
confidence: high
research_method: [experiment]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This paper asks a deceptively simple question with a nuanced answer: do motivational profiles determine whether students learn more from [[intelligent-tutoring|ITS]]-based or paper-based practice? Using a counterbalanced within-subject design (97 ninth-graders, seven classes, three teachers; graph interpretation and graph construction units, each ~40 minutes, content-matched across formats), the authors find three things. First, tutor-based practice beats paper overall (t(62.30) = 2.38, p = .020). Second — and counterintuitively — students with **lower baseline self-efficacy gained more** regardless of format (t(98.40) = −2.14, p = .035), the usual regression-to-the-mean-flavored pattern where lower starters have more room to grow. Third, the interesting interaction: a significant three-way self-efficacy × favorability × format effect (t(99.84) = −2.58, p = .011) means that among low-self-efficacy students, **favorability toward the tutor predicts larger gains in tutor practice specifically** — the students who like the tutor benefit most from it — while the pattern differs in paper practice. Finally, a sobering null: ITS practice did **not** significantly improve post-training self-efficacy relative to paper, despite the theory that step-level success feedback should build mastery experiences. The authors attribute this to the short intervention (two 40-minute sessions), but it stands against the common assumption that tutor practice is motivationally self-reinforcing.

The design strength is content-matching: both formats practiced the same skills with matched problem sets, so the format effect isn't confounded by difficulty differences, and counterbalancing controls order. The practical upshot is format-tailoring: a student's baseline self-efficacy and attitude toward the technology are actionable signals for format assignment — low-self-efficacy students who are favorable toward the tutor are the highest-leverage group for tutor-based practice, and the null self-efficacy result warns against expecting tutor practice to *build* motivation in the short run; it capitalizes on existing favorability rather than creating it. The honest limits: n = 97 in one suburban school, two math units, two short sessions — the self-efficacy-change null could easily be a dose problem rather than a real absence, and the three-way interaction is the kind of higher-order effect that small samples render fragile.

## Key findings

- **Tutor-based practice beats paper overall:** learning-gain difference significant (t(62.30) = 2.38, p = .020), with matched content and counterbalanced order.
- **Lower baseline self-efficacy → greater gains, both formats:** t(98.40) = −2.14, p = .035 — consistent with more headroom for lower starters.
- **The three-way interaction is the contribution:** self-efficacy × favorability × practice format, t(99.84) = −2.58, p = .011 — among low-self-efficacy students, tutor favorability predicts larger tutor-practice gains specifically.
- **No self-efficacy improvement from ITS practice:** post-training self-efficacy did not significantly differ by format; short duration (two ~40-min sessions) is the authors' leading explanation.
- **Favorability alone doesn't predict gains** (p = .494 main effect) — it matters *conditionally*, interacting with self-efficacy and format.

## What this means for practice

- **For format assignment:** baseline self-efficacy and technology favorability are cheap, measurable signals — students low in self-efficacy but favorable toward the tutor are the strongest candidates for tutor-based practice.
- **For expectations:** don't count on short tutor interventions to build self-efficacy; expect them to leverage existing favorability. Motivation-building needs a longer arc.
- **For research design:** the content-matched counterbalanced format comparison is the right template for format-effect questions; the three-way interaction shows why main-effect-only analyses of motivational moderators will miss the structure.

## Limitations

- Small single-site sample (97 students, one suburban school, three teachers); two math units only.
- Short intervention (two ~40-minute sessions per student) — the self-efficacy null may be a dose artifact rather than a real absence.
- Higher-order three-way interaction on n = 97 — directionally interesting but fragile; the paper itself frames it as groundwork.
- Counterbalancing controls order but can't rule out carryover between the two topics.
- Self-efficacy measured as a trait-like baseline plus post-training change; no process measures of engagement or help use to explain the interaction.

## Citation

Cen, X., Aleven, V., Koedinger, K. R., Borchers, C., & Carvalho, P. F. (2026). [*Self-efficacy and favorability shape learning from tutoring systems and paper practice*](https://arxiv.org/abs/2606.17470). *arXiv:2606.17470v1* [cs.CY, cs.HC].
