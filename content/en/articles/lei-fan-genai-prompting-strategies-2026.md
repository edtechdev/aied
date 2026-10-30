---
title: "Generative artificial intelligence prompting strategies among Chinese university students across academic tasks"
created: "2026-10-30T10:35:00-04:00"
updated: "2026-10-30T10:35:00-04:00"
type: article
authors: ["Fan, L.", "Liu, F."]
published: "2026-10-29"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.39571
foundations: [ai-literacy, critical-thinking]
pedagogy: [metacognition, self-regulated-learning, student-ai-interaction]
technology: [generative-ai, conversational-ai, prompt-engineering]
assessment: [self-report-measures, assessment, evaluative-judgment]
methods: [quantitative-research, mixed-methods-research]
research_method: [survey]
level: [higher ed]
audience: [instructors, researchers, curriculum designers, faculty developers]
page_kind: [evaluation]
sources: ['raw/papers/lei-fan-genai-prompting-strategies-2026.md']
confidence: low
source_depth: full text
verified: [citation, quotes, numbers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-30"
    agent: hermes-agent
---

> **Synthesis:** Fan and Liu (2026) surveyed 234 university students in China about how they prompt generative AI, and the result worth carrying is less about skill than about where students say their difficulty lies. Self-reported capability ran from 66.2% to 72.2% endorsement across five items, highest for refining a prompt after seeing the output and lowest for setting output constraints such as role, tone, length or format. Strategy endorsement barely moved between a research assignment and a creative workshop scenario: of four matched strategy pairs, only output-format specification differed after correction. Students endorsed brief instructions and full information at the outset at the same time, which the authors read as evidence that effective brevity is about selecting information rather than prompt length. A fixed template drew the weakest support. The whole study is self-report, and the authors say so at every turn.

## Key Findings

1. **Iterative refinement is what students feel most confident about.** Prompt refinement after reviewing an initial response drew the highest endorsement in the capability set at 72.2%, and modifying prompts when output contained errors or bias followed at 70.5%. Providing task-relevant background was endorsed by 70.9% and breaking complex tasks into steps by 67.1%. The lowest item was setting response constraints, at 66.2% agreement with the largest neutral share, 22.2%.
2. **Prompting strategies are not strongly task-conditional.** In the research-oriented scenario, revising the prompt after an unsatisfactory response led at 74.3% and providing background followed at 68.8%, while requesting a specific output format, step-by-step analysis and a topic-relevant expert role each landed between 58.2% and 59.4%. In the creative scenario every strategy drew higher agreement, led by event background at 75.6%.
3. **Only one matched comparison survived correction.** Across four conceptually matched strategy pairs, output-format specification was endorsed more strongly in the creative scenario, by 0.26 points on the five-point scale (dz = 0.233, BH-adjusted p = .002). Role assignment, background information and iterative revision showed no adjusted difference, so students treated those as broadly applicable rather than task-specific.
4. **Brevity and completeness were endorsed together rather than as a trade-off.** Organizing longer prompts with line breaks, paragraphs or punctuation drew 70.6%, and providing relevant details at the outset rather than opening with a short trial instruction drew 69.2%. Brief and direct instructions were endorsed by 63.7%, while a fixed template such as role-task-output format was lowest at 59.4% with the largest neutral share, 24.4%.
5. **Prompt-intent alignment was the difficulty students named.** Among the 12.8% of respondents who answered the optional open question, prompt-intent alignment appeared in 40.0% of comments, prompt-formulation difficulty in 23.3%, output usefulness or presentation in 20.0%, iteration or conversational context in 16.7% and factual verification in 13.3%. The percentages describe the commenting subset, not the sample, and the authors flag that limitation explicitly.
6. **Adding detail or repeating a revision did not reliably fix a stuck interaction.** Quoted comments include one respondent who described things in great detail and reported that the system still did not understand their meaning, and another who found that repeated revision requests left the assistant confused and the output worse. The authors read this as evidence that refinement requires diagnosing the mismatch first, not supplying more text.
7. **A seven-domain measurement model fit better than one general factor.** The seven correlated-factor model reached chi-square = 538.95, CFI = 0.956, TLI = 0.949, RMSEA = 0.058 and SRMR = 0.036, against CFI = 0.847 and RMSEA = 0.104 for the one-factor model. Perceived cognition showed the clearest unique association with perceived prompting capability, and the authors note that correlated predictors plus 14 adjusted tests left few individually significant paths.

## What this means for practice

- **Instructors and curriculum designers**: Teach intent specification rather than prompt formulas. The strategy students already endorse is revising after a bad output, and the difficulty they name is knowing what to revise. Exercises that make them state the goal, the constraints and what an acceptable answer looks like, then diagnose a mismatch, target the gap the survey identifies.
- **Faculty developers**: Output constraints are the weakest self-reported area at 66.2% with the largest neutral share. That is the cheapest place to start a workshop, and it is also where task-specific value appears, since format specification was the one strategy that varied with the assignment.
- **Assessment designers**: Treat confidence as a claim, not a competence. Every measure here is self-report from one questionnaire, and the authors warn that agreement with a strategy does not establish how often or how well it was used.
- **Researchers**: The gap this study names is measurable: run authentic prompting tasks and record prompts, revisions, verification behavior and final decisions, so perceived capability can be compared against demonstrated competence.

## Limitations

- Everything is self-reported in a cross-sectional questionnaire. Agreement with a strategy does not establish how frequently or effectively students used it, and the two scenarios simplified authentic academic work.
- All principal domains were measured inside the same instrument, so the substantial correlations may partly reflect shared response tendencies and common-method effects. Perceived cognition and perceived prompting capability are also conceptually close, which the authors say may inflate their association.
- The optional comments came from 12.8% of the sample and are illustrative rather than representative, so prompt-intent alignment is a qualitative indication rather than the predominant difficulty across all 234 students.
- Sampling was convenience plus purposive recruitment, combined into a final sample of 234 after excluding straight-lined responses and respondents who had tried no prompting method. Generalization beyond Chinese university students in these disciplines is not established.
- The structural paths are covariance-equivalent to the measurement model and the data are cross-sectional, so the authors explicitly say the estimates should not be read as directional or causal.

## Citation

Fan, L., & Liu, F. (2026). [*Generative artificial intelligence prompting strategies among Chinese university students across academic tasks*](https://arxiv.org/abs/2610.39571). arXiv preprint arXiv:2610.39571.
