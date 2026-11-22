
title: "A Configurational Approach to Investigating the Use of Artificial Intelligence in Self-Regulated Learning From Needs Satisfaction, Learning Environments and Perceived Affordances"
created: "2026-11-11T07:41:43-05:00"
updated: "2026-11-14T10:00:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
audience: [researchers, instructors]
sources: ['raw/papers/wu-configurational-ai-srl-2026.md']
source_url: "https://doi.org/10.1002/jcal.70371"
source_depth: full text
confidence: high
pedagogy: [self-regulated-learning, motivation]
technology: [generative-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** There is no single recipe for getting students to regulate their own learning with [[generative-ai|generative AI]]. In a survey of 248 students analyzed by [[qualitative-research|set-theoretic]] configurational methods, no motivational or technology belief was necessary on its own, and a dozen different combinations were enough. The most common combination was support, not ease: students who felt connected to peers and teachers and who had training, access and guidance reported high [[self-regulated-learning|self-regulation]] even when the tool itself felt effortful. A second common route was agentic — autonomy, relatedness and a tool that felt easy. The practical implication is that demanding tools can work when the surrounding [[scaffolding|support]] is strong, and that no campus should assume one pathway fits all students.

## Key Findings

1. **No single condition was necessary.** Every [[self-determination-theory|motivational need]] and every [[technology-acceptance-model|technology-acceptance]] belief, present or absent, fell short of the consistency threshold, so high self-regulation cannot be attributed to one factor.
2. **A dozen combinations were sufficient.** Twelve pathways together covered a little over half the students, and each is a different route to the same outcome rather than a variation on one theme.
3. **The most common route ran through support, not ease.** The highest-coverage combination paired relatedness satisfaction and facilitating conditions with the absence of effort expectancy: students who found AI hard to use still regulated well when they had training, access and guidance and felt connected to peers and instructors.
4. **A second route was agentic.** Autonomy, relatedness and ease of use, with competence and usefulness in the background, describe students using AI because they chose to and found it manageable.
5. **A third route was instrumental and did not require confidence.** Usefulness, ease and social influence carried self-regulation even where competence satisfaction was absent and the tool's affordances were not recognized — compliance and convenience can produce the behavior without the belief.
6. **The follow-up regression did not agree with the ranking.** A Tobit model found some configurations significant and others not, including one of the highest-coverage pathways, so coverage and statistical significance diverge.
7. **The pattern survived looser thresholds.** Lowering the consistency cutoff and splitting the sample in half reproduced the broad picture with somewhat lower coverage, which the authors read as reasonable robustness.

## What the study did

Participants were 248 undergraduate and graduate students — 163 women and 85 men, aged 18 to 22 — from [[cs-education|computer science]], finance, economics, art, foreign languages and business. Eligibility required at least one use of an AI tool in [[self-directed-learning|self-directed]] or [[teacher-role|teacher]]-directed learning in the previous six months, and recruitment ran through class announcements and student forums as a convenience sample. The survey was administered online in April 2024 over two weeks, used scales with acceptable internal consistency and forced completion, so the analyzed data had no missing values.

The outcome was an overall self-regulated learning score built from eight dimensions of the SRL-O framework: [[self-efficacy|academic self-efficacy]], intrinsic motivation, [[motivation|extrinsic motivation]], goal setting and time management, [[metacognition|metacognition]], effort regulation, social support and task strategies. Eight antecedent conditions were calibrated into fuzzy sets, and each of the 256 logically possible configurations was tested against a frequency cutoff of one and a consistency cutoff of 0.8. That the design uses eight conditions on 248 cases is a deliberate theoretical choice by the authors, who report sensitivity checks on the calibration anchors.

## How to read the pathways

The value of the analysis is the equifinality, not any single solution. The same outcome arrives by routes that look psychologically opposite: one pathway reaches high self-regulation through usefulness, ease and social pressure while competence and perceived affordance are absent, whereas another reaches it through autonomy, relatedness and ease. The support-heavy pathway is the clearest compensatory case. Effort expectancy is core-absent, yet relatedness and facilitating conditions are core-present, which the authors read as training, troubleshooting and relational support offsetting the cost of a demanding tool.

Two cautions follow from the authors' own tables. First, the abstract and conclusion name autonomy satisfaction, relatedness satisfaction and performance expectancy as the pivotal combination, but the highest-coverage solution does not contain autonomy or performance expectancy at its core, and the second contains effort expectancy rather than performance expectancy at its core. The three-factor summary is the authors' interpretation, not a direct reading of the coverage column. Second, the paper describes perceived affordances as mediators and moderators, but the design is a cross-sectional survey analyzed with set relations plus a Tobit regression on solution membership; neither tests a mediation or moderation model. Those claims are theoretical framing, and the authors acknowledge that SEM or regression would be needed to test them.

## What this means for practice

- **Instructors.** Do not treat ease of use as a precondition for AI-supported regulation. The highest-coverage pathway had effort expectancy absent at its core, so pair demanding tools with training, [[rubrics|exemplars]] of [[prompt-engineering|prompting]] and verification, and help-desk support rather than withdrawing the tool.
- **Instructors.** Offer choices over how AI is used — brainstorming, self-testing, feedback-based revision — and structure peer discussion of prompts and evaluation criteria. Relatedness satisfaction is a core condition in both of the highest-coverage pathways, and autonomy is core in one of them.
- **Designers.** Build for strategy enactment, not just satisfaction: transparent options, editable steps, and prompts that ask students what the AI helped them do and what they will verify. Perceived affordance was core-absent in the instrumental pathway where self-regulation still occurred.
- **Administrators.** Treat unequal access to devices, subscriptions and guidance as an [[equity-in-ai-education|equity]] problem. Facilitating conditions carry the largest compensatory role in the solution set, and the authors tie their uneven distribution to uneven benefits.
- **Researchers.** Report solution coverage and consistency alongside regression results, and expect the two to disagree. Here the second-ranked pathway on coverage was non-significant in the Tobit model, which a single-pathway study would have hidden.

## Limitations

The sample is 248 students who had already used AI tools, recruited by convenience sampling, so the configurations describe experienced users rather than novices and may not transfer to other institutions, disciplines, educational levels or policy environments. Every construct is [[self-report-measures|self-reported]], which invites common-method bias, and the design is cross-sectional, so temporal ordering and reciprocal relations among needs, acceptance beliefs and self-regulation go untested. Calibration against sample quartiles also makes membership scores relative to this distribution, which limits comparison with other samples. Finally, the post hoc Tobit results are inconsistent with the coverage ranking, and no effect sizes or confidence intervals for the configurations themselves are reported beyond coverage and consistency.

## Citation

Wu, X.-Y., Xia, Q., Ahmad, Z., & Chiu, T. K. F. (2026). [A Configurational Approach to Investigating the Use of Artificial Intelligence in Self-Regulated Learning From Needs Satisfaction, Learning Environments and Perceived Affordances](https://doi.org/10.1002/jcal.70371). *Journal of Computer Assisted Learning, 42*, e70371. https://doi.org/10.1002/jcal.70371
