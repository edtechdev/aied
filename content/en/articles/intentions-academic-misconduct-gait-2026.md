---
title: A preliminary investigation of intentions to engage in academic misconduct using generative artificial intelligence tools
created: "2026-10-10T14:10:00-04:00"
updated: "2026-10-10T14:10:00-04:00"
type: article
foundations: [academic-integrity]
ethics: [ethics]
pedagogy: [motivation]
technology: [generative-ai]
assessment: [ai-detection]
audience: [instructors, administrators]
level: [higher ed]
sources: ['raw/papers/intentions-academic-misconduct-gait-2026.md']
confidence: medium
methods: [benchmark]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This study is the first to examine student intentions to engage in [[academic-integrity|academic misconduct]] using [[generative-ai|generative AI]] tools (GAITs) through the lens of the [[technology-acceptance-model|Theory of Planned Behavior]]. Maha Baig and Josephine Paparo (Macquarie University) surveyed 186 undergraduate students, measuring attitudes toward academic misconduct and toward AI, subjective norms, perceived behavioral control, and beliefs about the likelihood of [[ai-detection|detection]]. A bootstrapped hierarchical regression found that positive attitudes toward academic misconduct and subjective norms about it predicted greater intention to use GAITs for misconduct, and that higher perceived likelihood of detection was associated with lower intention. Notably, positive attitudes toward AI also predicted intention, while negative attitudes toward AI did not — students apparently acknowledge AI's drawbacks yet do not prioritize them over perceived benefits.

The findings have a practical edge that pushes against common institutional reflexes. Because awareness of AI's drawbacks was unrelated to misconduct intention, the authors argue that [[educational-policy-ai|policies]] and interventions emphasizing AI's negative consequences for students' [[higher-ed|graduate]] capability attainment may be misguided. Instead, they suggest fostering a mindset in which GAITs are viewed as supplemental rather than replacements for students' own knowledge and skills. The detection finding is double-edged: perceived likelihood of detection is a genuine deterrent, but the authors note that research casts significant doubt on the accuracy and reliability of even state-of-the-art [[ai-detection|AI detection]] tools, and that awareness of those limitations can itself erode students' perceived risk — potentially creating a contagion effect in which non-engaging students who feel disadvantaged begin to cheat too.

The work connects to [[reducing-ai-misuse|reducing AI misuse]] by specifying the attitudinal levers that actually move intention, and to [[academic-integrity]] governance by showing that [[ai-use-disclosure|disclosure]]-focused and [[ai-literacy|literacy]]-focused strategies target different constructs. Its TPB framing adds a behavioral-science layer to a literature otherwise dominated by detection and format redesign, and its undergraduate psychology sample situates it within [[motivation|student motivation]] and [[ethics|ethical]] decision-making research.

## What this means for practice

- **Higher-education institutions and [[teacher-role|instructors]].** Interventions that emphasize the harms of AI (detriment to graduate capabilities, ethical breaches) may not move the needle, because this study found no relationship between negative attitudes toward AI and misconduct intention. Target the constructs that did predict intention: attitudes toward misconduct itself and the surrounding norms.
- Address perceived norms, not just attitudes. Subjective norms about misconduct predicted intention alongside attitudes, which points to classroom-level norms work — making acceptable AI use explicit and collectively owned — rather than individual sanction messaging.
- Do not rely on detection as the deterrent. Perceived likelihood of detection does lower intention, but the authors flag that detection tools' accuracy and reliability are widely doubted and that savvy students know it; leaning on detection risks both false confidence and a contagion effect among students who feel disadvantaged.
- Frame GAITs as supplemental to student capability rather than as replacements for it. The authors' recommended mindset — students using AI to support rather than substitute their own knowledge — is the lever their data supports.

## Limitations

- The study is explicitly preliminary: a single online survey of 186 undergraduate psychology students at one Australian university, with no follow-up measurement of actual misconduct behavior — the outcome is self-reported intention, not observed behavior.
- Self-report intentions are vulnerable to [[academic-integrity|social desirability bias]], which the analysis controls for statistically (social desirability was itself a significant negative predictor) but which cannot be eliminated from [[self-report-measures|self-report data]].
- The correlational regression design cannot establish causation among attitudes, norms, perceived control, and intention, and the authors note violations of linearity and homoscedasticity assumptions, addressed with bootstrapping rather than a different modeling approach.
- The findings are specific to GAIT-based academic misconduct intentions among undergraduate psychology students; generalization to other disciplines, levels, or national contexts is untested.

## Citation

Baig, Maha, and Josephine Paparo (2026). [A preliminary investigation of intentions to engage in academic misconduct using generative artificial intelligence tools](https://doi.org/10.1080/13562517.2026.2663440). *Teaching in Higher Education*, 31:7, 1327–1345.
