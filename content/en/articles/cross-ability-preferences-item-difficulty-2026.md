---

title: CAP - Cross-Ability Preferences to Align Student Simulators for Item Difficulty Prediction
created: "2026-10-10T13:45:00-04:00"
updated: "2026-10-10T13:45:00-04:00"
type: article
technology: [llm, simulation, student-modeling, reinforcement-learning]
assessment: [assessment, formative-assessment]
audience: [researchers, software developers]
level: [higher ed]
sources: ['raw/papers/cross-ability-preferences-2026.md']
confidence: medium
methods: [benchmark]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
---

> **Synthesis:** This paper presents CAP (Cross-Ability Preferences), a method that aligns an [[llm]] student simulator for predicting the difficulty of open-ended [[assessment]] items using direct preference optimization. The core insight is that a simulator finetuned only to imitate real student responses (supervised finetuning) conditions only weakly on the prompted ability, because its objective rewards reproducing response text rather than tying response quality to ability. CAP instead forms [[reinforcement-learning|preference]] pairs directly from students' [[desirable-difficulties|ability]] gaps: conditioned on a student's ability, that student's real response is preferred over a response by a student of a sufficiently different ability on the same item. On the CodeWorkout [[cs-education|programming]] dataset, CAP surpasses all direct text-based difficulty-prediction baselines, and at the 1B scale it outperforms the state-of-the-art simulator SMART on every difficulty metric while generating more distributionally realistic responses; at 3B it performs comparably.

The method matters most in the low-resource setting, where an item must be calibrated before any student has answered it — the [[formative-assessment|cold-start]] problem that makes traditional field testing inapplicable. By coupling the item's content with simulated response behavior, [[simulation]]-based methods recover difficulty even when only a handful of labeled items exist, which direct text-based methods cannot do because their only training signal is the observed item difficulties. The work advances [[simulating-students|student simulation]] as a [[research-methods-aied|methodological]] tool and connects to [[student-modeling|student modeling]], where tying a simulated response's quality to the prompted ability is the central validity requirement. It also bears on [[adaptive-learning|adaptive testing]] and item recommendation, where more faithful difficulty estimates underpin downstream decisions.

The authors are careful that distributional realism and ability alignment are distinct axes: the unaligned SFT simulator is the most realistic of all yet conditions poorly on ability, while among the aligned simulators CAP trades a small amount of ability alignment for realism at 1B and attains the highest ability alignment at 3B. The finding that cross-ability pairing helps most at the smaller model scale points to a regularization effect — the few, gentle contrasts at one rejected response per chosen response suit the smaller model, whereas the 3B model benefits from more pairs.

## What this means for practice

- **[[educational-measurement|Educational measurement]] researchers.** When predicting [[item-response-theory|item difficulty]] from few labeled examples, prefer a simulator aligned by preference pairs over one finetuned only to imitate real responses: SFT conditions weakly on ability because its objective rewards reproducing response text, not tying quality to ability.
- Do not read the large-model result as a free win. CAP's advantage is specific to the few-pair regime at the smaller scale; at 3B, with more rejected responses per chosen response, it is comparable to SMART rather than clearly better.
- Treat realism and ability alignment as separate goals when validating a simulator: check aggregate distributional metrics (MAUVE, FID, KL divergence) alongside the ability-alignment metric, because a simulator can be realistic in aggregate yet poorly tied to the prompted ability.
- Build preference pairs from the ability gap directly rather than from scoring likelihood. CAP selects each pair because one response comes from a student of a sufficiently different ability, which needs no extra machinery beyond the ability labels and the IRT scoring already in the pipeline.

## Limitations

- The experiments run only on the CodeWorkout programming dataset at 1B and 3B parameters, so the results do not establish that the method generalizes to other domains, item formats, or larger student simulators — the authors leave exactly those extensions to future work.
- With only about ten test items per fold, the per-fold standard deviation is large and the authors state that none of the reported differences is statistically significant; the comparisons are means over five cross-validation folds, not significant effects.
- The simulator is trained and evaluated on Llama-3.2-Instruct as both the simulator and the scorer, so the method has not been shown to transfer across model families or to a separately trained scorer.
- The approach still depends on IRT scoring of simulated responses to recover difficulty, inheriting whatever assumptions the IRT model makes about the response-score relationship, and the study does not test against alternative difficulty-recovery frameworks.

## Citation

Fernandez, Nigel, Alexander Scarlatos, Christopher Ormerod, and Andrew Lan (2026). [CAP: Cross-Ability Preferences to Align Student Simulators for Item Difficulty Prediction](pdf-sources/2026.aimecon-main.37.pdf). AIED/AIMECON 2026.
