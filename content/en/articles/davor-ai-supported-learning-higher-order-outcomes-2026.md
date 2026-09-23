---
title: "Artificial intelligence-supported learning and higher-order cognitive outcomes: the mediating role of metacognitive self-regulation"
created: "2026-09-23T12:30:00-04:00"
updated: "2026-09-23T13:15:00-04:00"
type: article
pedagogy: [metacognition, self-regulated-learning, scaffolding, problem-solving]
foundations: [cognitive-offloading, critical-thinking, ai-literacy]
technology: [generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [global-south]
audience: [researchers, instructors]
level: [higher ed]
research_method: [survey, structural equation modeling]
page_kind: [evaluation]
sources: ['raw/papers/davor-ai-supported-learning-higher-order-outcomes-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Davor, Larbi, and Boateng (2026) ask whether the educational value of AI-supported learning lies in how students engage with AI rather than in the presence of the tool. Surveying 533 university students in Ghana and estimating a structural equation model with bias-corrected bootstrapping in AMOS, the authors model three interaction mechanisms: AI task scaffolding, AI verification literacy, and [[cognitive-offloading|cognitive offloading]] tendency, with [[metacognition|metacognitive self-regulation]] as mediator. AI task scaffolding positively predicted both [[critical-thinking|critical thinking]] (β = .185) and [[problem-solving|technical problem-solving]] (β = .170), while cognitive offloading tendency was a strong negative predictor of both outcomes (−.240 and −.312) and of metacognitive self-regulation (−.294). AI verification literacy had no significant direct effect on either outcome but showed significant indirect effects through metacognitive self-regulation, a full mediation pattern. The model explained 51.7% of the variance in critical thinking and 50.8% in technical problem-solving. The authors frame this as a duality: AI can strengthen higher-order thinking through structured guidance, or weaken it when learners delegate reasoning to the system.

## Key Findings

- **AI task scaffolding was positively associated with both outcomes.** Standardized paths were .185 for critical thinking and .170 for technical problem-solving, with a weaker path to metacognitive self-regulation (.102, p = .027).
- **Cognitive offloading predicted the reverse.** Delegating thinking to AI was associated with lower critical thinking (−.240), lower technical problem-solving (−.312), and lower metacognitive self-regulation (−.294), all at p < .001.
- **AI verification literacy had no direct effect.** Its paths to critical thinking (.076, p = .090) and technical problem-solving (.043, p = .385) were nonsignificant, while its path to metacognitive self-regulation was .167 (p < .001).
- **All six hypothesized indirect paths were significant.** Bootstrapped 95% confidence intervals excluded zero for every mediation path, with positive indirect effects from .012 to .018 and negative ones of −.031 and −.035.
- **The model explained substantial outcome variance.** R² values were 51.7% for critical thinking, 50.8% for technical problem-solving, and 30.7% for metacognitive self-regulation, with strong measurement fit (CFI = .983, RMSEA = .026).

## What the study tested

This cross-sectional, [[quantitative-research|quantitative]] study surveyed 533 university students in Ghana, a setting of rapid generative AI adoption in West African higher education. The authors step away from perception-based, technology-acceptance models and instead specify a process model in which three forms of AI interaction predict two higher-order cognitive outcomes through one regulatory mechanism. AI task scaffolding is defined as the extent to which an AI system breaks complex processes into simpler steps; AI verification literacy as the learner's capacity to question, assess, and validate AI-generated information; and cognitive offloading tendency as the habit of delegating cognitive processes to AI rather than reasoning independently. Paths were estimated with structural equation modeling in AMOS (version 23) using bias-corrected bootstrapping with 5,000 resamples. The measurement model held up, with Cronbach's alpha values from .801 to .924 and HTMT ratios between 0.514 and 0.755.

## Scaffolding helps, offloading hurts

The clearest signal is directional. When AI structured the task, students reported more [[critical-thinking|critical thinking]] and better [[problem-solving|technical problem-solving]], suggesting that well-designed AI scaffolding promotes active cognitive processing rather than mere task completion. The effect on metacognitive self-regulation was real but modest (.102), and the authors are explicit about the limit: scaffolding alone is probably insufficient to build strong regulatory habits, since prior metacognitive ability, motivation, and [[self-efficacy|self-efficacy]] also shape how students plan, monitor, and evaluate their work. The reverse pathway is steeper. Cognitive offloading was the strongest negative predictor in the model and also depressed metacognitive self-regulation, which the authors treat as a structural constraint on cognitive development rather than a harmless study preference. All measures were self-reported, not objective tests.

## Why verification literacy needs metacognition

The most theoretically interesting result concerns [[ai-literacy|AI verification literacy]]. Questioning and validating AI output did not, on its own, predict higher critical thinking or problem-solving in this sample. It mattered only through metacognitive self-regulation, a full mediation pattern the authors call a metacognitive activation mechanism. The practical reading is that teaching students to fact-check AI is not enough by itself, since evaluative habits pay off when embedded in planning, monitoring, and reflection during the task. The authors conclude that cognitive gains depend on regulatory engagement rather than on AI use as such, so systems and assignments should prompt students to justify reasoning and track their own understanding rather than simply verify outputs after the fact.

## What this means for practice

- **Design the task, not the ban.** Where AI scaffolds a task, breaking a complex problem into steps and prompting reasoning at each stage, students reported higher [[critical-thinking|critical thinking]] and [[problem-solving|problem-solving]]; where the prevailing habit is delegation, the coefficients run the other way.
- **Require the reasoning, not just the product.** Tasks that ask learners to justify their reasoning, show intermediate steps, and [[evaluative-judgment|evaluate]] AI output before accepting it move cognitive work back onto the student, while tasks that reward only the finished product invite [[cognitive-offloading|offloading]] and erode [[self-regulated-learning|self-regulation]].
- **Build in planning, monitoring and reflection.** Because verification literacy mattered only through [[metacognition|metacognitive self-regulation]], instructors should design prompts and checkpoints for each, and assess the process as well as the artifact.
- **Target regulation in AI-literacy programmes, not tool fluency alone.** The authors' institutional recommendation is specific: aim [[metacognition|regulation]] and [[self-regulated-learning|self-regulated learning]] work at students rather than training more tool features.

## Limitations

- **Cross-sectional design, so association rather than causation.** The model supports statistical relationships between scaffolding, offloading and outcomes, not causal claims about what changed them.
- **All six constructs were self-reported**, leaving social desirability and response inflation possible, and the outcomes capture perceived rather than demonstrated critical thinking and problem-solving.
- **A single national sample of Ghanaian university students**, so extension to other countries, systems and cultures needs caution; the authors call for cross-context validation alongside attention to fairness, bias and privacy.

## Connected Concepts

* [[critical-thinking]] — Critical thinking and reasoning in the age of generative AI
* [[cognitive-offloading]] — Cognitive offloading when learners delegate thinking to AI
* [[self-regulated-learning]] — Self-regulated learning and metacognitive control
* [[metacognition]] — Metacognition and monitoring in learning with AI

## Connected Articles

- [[gerlich-ai-tools-cognitive-offloading-critical-thinking]]: Cognitive offloading and critical thinking under AI tool use
- [[misiejuk-cognitive-offloading-prompting-2026]]: Cognitive offloading in student-AI collaboration
- [[ai-cognitive-partner-co-regulation-learning]]: Human-AI co-regulation in learning

## Citation

Davor, I., Larbi, E., & Boateng, F. O. (2026). [*Artificial intelligence-supported learning and higher-order cognitive outcomes*](https://doi.org/10.3389/feduc.2026.1855869). Frontiers in Education, 11.
