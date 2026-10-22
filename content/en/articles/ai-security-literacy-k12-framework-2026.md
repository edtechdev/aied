---
title: "AI Security Literacy: Ecosystem-based Competency Framework and K-12 Learning Platform"
created: "2026-10-22T09:28:00-04:00"
updated: "2026-10-22T09:28:00-04:00"
type: article
foundations: [ai-literacy, curriculum-design]
technology: [ai-technologies, llm]
methods: [benchmark, design-based-research]
research_method: [design and evaluation study, secondary analysis]
ethics: [guardrails, privacy, pedagogical-safety, legal-issues-and-risks]
institutions: [governance, educational-policy-ai, regulation]
level: [k 12]
audience: [administrators, curriculum designers, policymakers, researchers]
page_kind: [framework]
sources: ['raw/papers/ai-security-literacy-k12-framework-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-22"
    agent: hermes-agent
---

> **Synthesis:** Eric Yocam, Varghese Vaidyan and Paris Kalathas (2026) argue that [[ai-literacy|AI literacy]] frameworks teach understanding and use while cybersecurity frameworks predate AI-specific threats, so neither treats operating securely in an AI-mediated school as a competency domain in its own right. They propose a six-dimension AI Security Literacy framework — Permission & Norms, Data & Privacy Security, Threat & Manipulation Recognition, Trust Calibration & Verification, Adversarial & Technical Understanding, and Disposition & Agency — with three progression levels and role and [[ethics]] as cross-cutting strands. Technical dimensions are grounded in public [[benchmark|benchmarks]] and a reproducible multi-seed adversarial evaluation, attitudinal ones in weighted RAND and Pew survey micro-data, where only 34.5% of teachers report a school AI policy and 72.5% expect their own AI use to ease teaching while 61.9% expect students' use to make it harder. NeuralFortify, a browser-based platform running real models client-side, is offered as an existence proof; no learner data were collected.

## Key Findings
1. **Most teachers work without a rule they can state.** Only 34.5% report a school AI policy, 25.8% do not know whether one exists, and just 36.2% of those with a policy call it very or extremely clear.
2. **Teachers split AI by role.** 72.5% expect teachers' own use to make teaching easier; 61.9% expect students' use to make it harder.
3. **A moderation label is a threshold decision.** Raising the cutoff from 0.3 to 0.7 moved the share of prompts labeled toxic from 35.62% to 12.4%, a 23.2-point swing.
4. **A strong scam detector still forces an error choice.** Average precision reached 0.976, but at a 0.3 threshold it raised 15 false alarms and missed 18 scams; at 0.7, 2 and 36.
5. **Robustness depends on the attack.** At 8/255 the single-step attack left the classifier at 2.3% accuracy from 79.3% clean, while the ten-step attack left no test image correct.
6. **It depends as much on the trained model.** Across 3 seeds at 8/255 accuracy ranged 1.4–3.1%, roughly five times the width of the pooled interval (2.1–2.4).
7. **A fluent model barely beats guessing on false answers.** gpt2 chose the true answer on 27.7% of 817 TruthfulQA questions against a 22.6% chance level.

## A framework derived by consolidation, not clustering
The six dimensions came from deductive synthesis, the method the authors argue fits a construct with no instrument to factor-analyze. They extracted every competency statement bearing on risk, trust, or security from K–12 [[ai-literacy]] frameworks, from the cybersecurity frameworks schools already map against, and from the adversarial [[machine-learning|machine learning]] literature, then consolidated the pool under three inclusion rules. A candidate survived only if the parent literacies did not already cover it, if it was teachable and observable at grades 6–8, and if it could be instantiated against a real model or real policy artifact. Anything whose meaning shifted across student, [[teacher-role|teacher]], and [[administrator]] became a cross-cutting strand, which is how role and ethics came to sit outside the six. D1, D2, and D6 concern the learner's relationship to a system and are largely dispositional; D3, D4, and D5 concern the system's behavior and are largely analytic. Levels describe depth within a dimension, and no dimension precedes another, so the [[curriculum-design]] sequence is a local choice.

## Survey micro-data locate the problem around the student
Tier 1 maps items from four nationally representative files — the Fall 2025 RAND American Teacher Panel survey and three Pew American Trends Panel waves — onto the dimensions, yielding 21 estimates from 4 sources, with the teacher estimates resting on up to n = 1,987 public school teachers. Each is a weighted share excluding item non-response, with a 95% interval from the Kish effective sample size. For [[educational-policy-ai]], alongside the 34.5% who report a policy, 30.1% cannot say whether their school is adopting AI too quickly or too slowly. On [[privacy]], 70.9% of adults are extremely or very concerned about misuse of their personal information and 59.3% feel little or no control over whether AI is used in their lives — concern without control. Scam exposure is routine: 79.5% call online scams a major problem, 63.9% receive scam texts at least weekly, and 20.8% have lost money, yet 71.0% say they know a great deal or a fair amount about protecting themselves. None of it measures a learner; the authors report prevalence, not measurement.

## Benchmarks show the phenomena are measurable
Tier 2 asks what public [[benchmark|benchmarks]] can establish, and the authors keep the claim narrow: phenomenon-level construct relevance, not validation of dimensional structure. RealToxicityPrompts was built by sampling sentences equally from four toxicity bands, yet the prompt halves — the fragment a reader encounters first — concentrated heavily in the lowest band, far from the 25% design target, so an opening fragment can understate a passage's harmfulness. Within the same corpus, 10.47% of prompts fell in the ambiguous 0.4–0.6 band around the conventional cutoff. TruthfulQA's 817 questions across 38 categories make [[misconceptions|misconception]] susceptibility enumerable, and scoring gpt2 by mean per-token log-likelihood on the multiple-choice configuration put it at 27.7% correct (95% CI 24.7–30.8) against 22.6% chance given a mean of five options — the [[hallucination-risk|fluency-as-reliability]] error [[trust-calibration]] names. BBQ's 58,492 items across 11 social-attribute categories make bias decomposable, though unevenly: the two largest categories hold 46.4% of all items.

## The adversarial demonstration and NeuralFortify
The authors trained a convolutional classifier on CIFAR-10 for 15 epochs across 3 independently initialized runs, reaching 79.3% mean clean accuracy (SD 0.45 percentage points), then attacked the same models two ways at shared budgets. At 8/255 the single-step fast gradient sign method cut accuracy to 2.3%; the ten-step projected gradient descent attack, given the identical budget, left no test image correct. The seed spread carries the second lesson: at 8/255 the range across the three trained models was 1.4–3.1%, roughly five times the width of the pooled interval, so the dominant uncertainty is which model was trained, not how many images were tested. NeuralFortify turns this into curriculum. The browser-based [[k-12]] platform for grades 6–8 runs a MobileNetV2 emoji classifier and a 473-word scam-text classifier client-side; its Defender level re-attacks a defense with an adaptive attacker. Building it forced a revision: the Practitioner descriptor now requires stating the attack and evaluation beside any robustness figure. The platform is at [cyberneuralfortify.com](https://cyberneuralfortify.com/).

## What this means for practice
- **Instructors.** Make learners set the operating point themselves and defend the trade-off, because a 0.3 threshold bought 15 false alarms and 18 missed scams while 0.7 bought 2 and 36 — no cutoff removes both.
- **Instructors.** Require every robustness claim to name the attack and evaluation beside the number, since the same models scored 2.3% under a single-step attack and 0.0% under a ten-step one at that budget.
- **Administrators.** Publish a policy teachers can restate, because 25.8% do not know whether their school has one and only 36.2% of the rest find it very or extremely clear.
- **Teacher educators.** Treat teachers as learners of the same six dimensions, not only as deliverers of student competencies, given the 72.5% to 61.9% asymmetry in what they expect their own and students' AI use to do.
- **Researchers.** Build the pre/post [[educational-measurement|instrument]] and the discriminant-validity comparison this paper leaves undone; no dimension here carries construct-validation evidence.

## Limitations
- No learner data were collected or analyzed: the framework is grounded, not validated, and no psychometric evaluation was conducted, so the dimensional structure remains untested.
- Tier 1 rests on a few single items from separate cross-sectional samples, so no reliability or factor structure is estimated, and the item-to-dimension mapping is face validity judged from questionnaire wording; respondents are adults and teachers, not students.
- The failure rate comes from gpt2 scored by mean per-token log-likelihood on 817 multiple-choice questions, measuring discrimination among supplied options rather than truthfulness of open-ended generation.
- The adversarial demonstration is a small convolutional network trained for 15 epochs on CIFAR-10 under two gradient-based attack families; it makes a phenomenon legible at classroom scale, and standardized robustness measurement is deferred to RobustBench.
- RealToxicityPrompts is stratified for toxicity by design, so it cannot estimate prevalence in ordinary web text, and its Perspective scores are model-derived and carry documented biases.
- NeuralFortify is illustrative only: the authors developed it and offer it to schools on a paid subscription, and no efficacy or learning claim is made for it.

## Citation
Yocam, E., Vaidyan, V., & Kalathas, P. (2026). [*AI Security Literacy: Ecosystem-based Competency Framework and K-12 Learning Platform*](https://arxiv.org/abs/2610.28859). arXiv preprint arXiv:2610.28859.
