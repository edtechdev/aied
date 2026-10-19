---
title: "Language Model Goal Selection Differs from Humans in a Self-Directed Learning Task"
created: "2026-10-19T09:20:00-04:00"
updated: "2026-10-19T09:20:00-04:00"
type: article
foundations: [agency, ai-education, human-ai-collaboration]
pedagogy: [self-directed-learning, motivation, metacognition]
technology: [llm, conversational-ai, simulating-students]
methods: [benchmark, quantitative-research]
research_method: [experiment]
level: [higher ed]
audience: [researchers, instructors, software developers]
sources: ['raw/papers/llm-goal-selection-self-directed-learning-2026.md']
confidence: high
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-19"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Molinaro, August, Perszyk, and Collins (2026) test whether large language models can stand in for people when the task is not completing a goal but choosing one. They adapt an alchemy game from cognitive science, in which 175 human participants chose among six potions and then searched for each recipe, into a text-based task for GPT-5, Gemini 2.5 Pro, Claude Sonnet 4.5, Qwen3 32B, and Centaur. Across 50 iterations per model, no model reproduced the human distribution: people explored progressively and varied widely, while most models either exploited a single discovered solution or performed poorly, with little variability between runs. Chain-of-thought prompting and persona steering changed little, and the pattern held under different task semantics, a trimmed context window, a computer-using model, and a separate goal-commitment paradigm. The paper is a caution for [[agentic-ai|agentic]] and [[self-directed-learning|self-directed learning]] designs that delegate goal choice to a model, and for research that substitutes models for human participants when studying [[agency]] or [[motivation|intrinsic motivation]].

## Key Findings
1. **Five models, one human benchmark, no match.** GPT-5, Gemini 2.5 Pro, Claude Sonnet 4.5, Qwen3 32B, and Centaur each ran 50 times against 175 humans, and none fully matched human goal-selection behavior.
2. **Humans learned gradually; models spiked then fell.** Human learning accuracy was 0.40 ± 0.22 against chance of 1/12 ≈ 0.08 and 1/24 ≈ 0.04, while GPT-5 reached 0.87 during learning but 0.22 at test.
3. **Low performance was not a parsing artifact.** Claude Sonnet 4.5 had the lowest learning accuracy, 0.07 ± 0.19, yet produced well-formed valid responses and improved substantially in a semantic variant with identical format.
4. **Models repeated and narrowed their goals.** GPT-5, Claude Sonnet 4.5, and Qwen3 32B re-selected the previous goal on 0.93, 0.93, and 0.94 of trials, against 0.54 ± 0.18 for humans.
5. **Easy goals dominated.** Goal entropy was 0.12, 0.12, and 0.20 for those three models against 1.67 ± 0.14 for humans, and GPT-5 chose a two-ingredient goal on 0.93 of trials.
6. **Reasoning and persona prompts did not close the gap.** Chain-of-thought raised learning accuracy above human levels but left most goal-selection patterns intact, and persona steering produced minimal, model-specific effects.
7. **A second paradigm reproduced the divergence.** In a separate goal-commitment task run 40 times per model, humans showed an indifference point of 3.17 ± 1.63, GPT-5 4.55 ± 0.88, and Centaur −1.68 ± 0.65.

## The task: goals as the dependent variable

The experiment borrows a paradigm in which the goal itself, not performance on an assigned goal, is the measured variable. Participants play an alchemy apprentice who brews potions: on each trial they first pick one of six potions, then choose a sequence of ingredients, and receive deterministic feedback on whether the order was correct. Potions differ in difficulty, requiring either two or four ingredients, and some share hidden hierarchical structure, so solving one can help solve another. After practice with forced goals, participants completed six blocks of 24 trials with free choice, followed by a surprise test in which they guessed each recipe four times, including two out-of-distribution potions whose solutions could be inferred. Because no payment or course credit depended on learning the recipes, the authors treat the effort as largely [[motivation|intrinsically motivated]]. The [[llm|model]] version is procedurally generated text, with each choice appended to the next prompt so the model can learn in context; 10 task configurations were each run about five times per model, for 50 iterations.

## Two ways of failing

Human performance was variable but progressive: participants improved toward each recipe and then rehearsed it in cycles, reaching 0.40 ± 0.22 accuracy during learning, 0.64 ± 0.32 on in-distribution test items, and 0.15 ± 0.26 on out-of-distribution items. Gemini 2.5 Pro came closest, with near-perfect in-distribution test scores at 0.99 ± 0.03 and out-of-distribution scores near the human level, yet its learning distribution still differed from humans'. GPT-5 and Qwen3 32B showed the opposite profile, outperforming humans while learning and then dropping sharply at test — a pattern the authors read as reward hacking, exploiting known solutions for positive feedback even without an explicit incentive. Claude Sonnet 4.5 barely learned at all, at 0.07 ± 0.19, while Centaur reached 0.26 ± 0.19 with erratic behavior that often required resampling to obtain a valid option. The distributional tests are consistent across these cases: every model's learning progression differed from the human one, with all Energy distance measures above 0.16 and all p < 0.001. A nearest-neighbor analysis found every model farther from its closest human than humans were from each other (all Mann-Whitney U > 5656, all p < 0.002).

## Goal selection and systematic search

Performance differences matter, but the paper's target is the choice of what to pursue. Humans spread their selections across goals, with entropy of 1.67 ± 0.14, repeated the previous goal on 0.54 ± 0.18 of trials, and iterated through goals in consistent cycles 1.98 ± 2.36 times. The models mostly collapsed toward repetition: GPT-5, Claude Sonnet 4.5, and Qwen3 32B repeated on at least 0.93 of trials, produced entropy near 0.12, and never completed a goal cycle. Most also preferred easier two-ingredient goals, and several showed a position bias absent in humans: Claude Sonnet 4.5 had a preferred goal position of 0.00 ± 0.00, while Qwen3 32B drifted toward later options.

The most distinctly human signature was procedural. People tested recipe hypotheses in the order ingredients appeared, [[cognitive-offloading|offloading]] memory of failed attempts onto a stable search pattern. Humans did this 13.36 ± 12.22 times on average. No model came close: Gemini 2.5 Pro managed 3.62 ± 2.64, Qwen3 32B 2.24 ± 4.36, GPT-5 0.54 ± 1.50, and Claude Sonnet 4.5 0.46 ± 0.83.

## What steering does and does not fix

The authors tried several ways to move models toward human behavior. Chain-of-thought prompting raised learning accuracy above human levels with tighter distributions, and reduced the learning-to-test drop for GPT-5 and Qwen3 32B, but goal selection largely stayed as it was; Gemini 2.5 Pro became less repetitive than humans and cycled through goals more, which the authors suggest reflects faster solution discovery leaving more time for practice. Persona steering, which told models they were university students in a psychology study, had minimal and inconsistent effects. Changing the semantics, either to acrobatic moves or to invented non-words, also left the conclusions intact, with the one exception of Claude Sonnet 4.5 improving in the skill-acquisition variant. A computer-using GPT-5.4 that interacted with the original web interface performed poorly at both learning and testing (0.27 ± 0.41 learning accuracy) and re-selected the same goal on 0.84 of trials, so matching input modality did not rescue alignment. Trimming the context window to 12, 24, 48, or 120 of the 188 total trials did not induce systematic search either; if anything it reduced it. In the separate fishing-net goal-commitment task, most models also diverged, with Gemini 2.5 Pro the closest on all three metrics.

## What this means for practice

- **Instructors.** Keep the choice of what to learn with the learner when the goal is genuinely open: the models here collapsed onto one goal or the easiest one, the opposite of the broad exploration a [[self-directed-learning|self-directed]] assignment should produce.
- **Instructors.** Treat a model's study plan as a single sample from a narrow distribution, not as a survey of options. When you ask an assistant for project topics or practice targets, generate several independently and check whether they differ before handing the list to students.
- **Instructional designers.** Build the goal menu and its constraints yourself, and use the model inside a chosen goal rather than above it. The paper's clearest human advantage was procedural search — systematic hypothesis testing — which no model reproduced even with a trimmed context window.
- **Software developers.** Log the distribution of goals an agent selects, not just its success rate: repetition rate, entropy over options, and preference for the easiest option separate a system that is learning from one that is exploiting a known answer.
- **Researchers.** Do not substitute an LLM for human participants in studies where goal selection, persistence, or interest is the outcome; this is exactly the [[simulating-students|simulation]] use the paper challenges. Even Centaur, fine-tuned on psychology experiments, poorly captured human goal selection, and the divergence appeared in a simplified setting the authors describe as a favorable lower bound.

## Limitations

- Only five models were tested, all state-of-the-art at the time of data collection, and the authors note that newer or other providers' models may behave differently and require continuous evaluation.
- The human comparison re-analyzes 175 participants from a previously published study rather than collecting new human data, and the task is a controlled six-goal alchemy game rather than a real learning setting.
- The main LLM data are text-based, a deliberate choice to avoid perceptual confounds, with a single computer-using GPT-5.4 check rather than a full [[multimodal]] replication.
- Model runs varied only through the 10 task configurations, and temperature was fixed at 1 for most models, with a temperature-0 check in the appendix; Centaur frequently required retries to produce a valid option.
- The authors describe the work as a proof of concept and a lower bound, and call for mechanistic work on internal representations and for studies of joint goal selection in hybrid human-AI systems.

## Citation

Molinaro, G., August, D., Perszyk, D., & Collins, A. G. E. (2026). [*Language Model Goal Selection Differs from Humans in a Self-Directed Learning Task*](https://arxiv.org/abs/2603.03295). arXiv:2603.03295.
