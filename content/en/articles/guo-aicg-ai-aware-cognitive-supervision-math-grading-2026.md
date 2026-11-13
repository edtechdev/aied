---
title: "Beyond Response Scoring: An AI-aware Cognitive Supervision Framework for Automated Mathematical Short Answer Grading"
published: "2026-10-30"
created: "2026-11-02T09:12:23-05:00"
updated: "2026-11-02T10:15:00-05:00"
type: article
sources: ['raw/papers/guo-aicg-ai-aware-cognitive-supervision-math-grading-2026.md']
source_url: "https://arxiv.org/abs/2610.41215"
confidence: high
page_kind: [evaluation]
research_method: [system development]
level: [higher ed]
audience: [assessment designers, researchers, educational technology developers]
contributors: [editor]
technology: [student-modeling, knowledge-tracing, machine-learning]
assessment: [automated-assessment, assessment-validity, ai-detection]
pedagogy: [problem-solving]
methods: [benchmark]
discipline: [math education]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Most [[automated-assessment]] systems for [[math-education|mathematical]] short answers learn one thing: the scalar score an instructor assigned. Guo, Chi, Qiao, and Patwardhan argue this compresses distinct reasoning states into one label — a student who applies conditional independence twice but never reaches Bayes' rule earns 0.60, exactly like a student who erred differently. AICG adds a second signal: an expert Q-matrix maps items to ten skills, and a G-DINA [[cognitive-diagnosis]] model derives pretest mastery, posttest mastery, and learning gain that the shared encoder must also predict. Because [[generative-ai]] makes a fluent high-scoring answer ambiguous evidence of mastery, a separately trained detector estimates assistance and converts it into soft reliability weights on cognitive evidence only. Across 49,402 instructor-graded responses spanning nineteen semesters, this [[assessment-validity]]-minded design cuts mean absolute error by 50.3% against RoBERTa regression and raises quadratic weighted kappa from .798 to .927.

## Key Findings

1. AICG reaches MAE .0434 and QWK .927 on post-Gen-AI semesters, against .0873 and .798 for a score-only RoBERTa grader — a 50.3% error reduction.
2. Against the strongest baseline, rubric-optimizing GradeOpt (.0788 MAE, .842 QWK), AICG cuts MAE by 44.9% and gains 8.7–15.7 points of tolerance-based and exact accuracy.
3. Q-matrix cognitive supervision, not the extra scoring heads, drives the gain: ordinal and categorical heads move MAE from .0873 to .0823, while mastery and gain targets reach .0453.
4. Mastery states carry more signal than learning gain: Full Scoring + State reaches .0527 MAE and .906 QWK, while gain alone reaches only .0715 and .871.
5. AI-aware weighting lowers MAE by 4.2% over the unweighted cognitive model and improves QWK in four of five semesters, with the semester MAE reduction growing from 0.8% in F22 to 3.6–6.6% later.
6. The Gen-AI detector reaches .959 accuracy and .960 F1 within semester (N = 1,004) and .951 accuracy and .950 F1 across semesters (N = 11,458), flagging 2,896 of 13,874 post-Gen-AI responses (20.87%) as potentially assisted.

## Two branches over one encoder

AICG's individual-response branch runs regression, ordinal, and categorical heads on a shared RoBERTa representation, so each answer is modeled as a continuous score, an ordered band, and a five-way category at once. The cognitive branch pools only those responses the Q-matrix marks as assessing a given skill, then predicts G-DINA-derived pretest mastery, posttest mastery, and the difference between them. Both branches update the same encoder, but predicted grades never enter the cognitive branch, so skill targets cannot simply echo the score. Loss weights keep grading primary at 0.50, 0.35, and 0.15, with each cognitive term at 0.10. Because the Q-matrix is an expert artifact rather than a learned latent space, the [[student-modeling]] is auditable: an instructor can read which skill a response was meant to evidence.

## Manufacturing a detector without real AI-use labels

The most contestable design choice is also the most practical. Because the corpus contains no ground truth about which historical responses were assisted, the team built a [[machine-learning]] detector from synthetic pairs: they masked 30%–50% of each authentic response and had an offline DeepSeek model reconstruct the masked tokens, preserving 50%–70% of the student text. Originals are labeled human-written; partly and fully generated correct responses form the assisted class, matched by item, score, and length. Training used 28,088 balanced examples from 14,044 authentic answers, with contrastive [[llm-training-and-fine-tuning|pretraining]], a frozen linear classifier, and temperature calibration; variants stayed inside one partition. This is reasonable [[ai-detection]] hygiene, but the target learned is "text a particular rewriter produced," not observed student behavior.

## What ten years of grading windows show

The evaluation uses an expanding window: each post-Gen-AI semester is graded by a model trained only on earlier semesters, with the test semester excluded from optimization and model selection. In F22 the unweighted cognitive model still edges AICG on QWK (.922 versus .918); by F24 AICG leads on every reported metric (.0379 versus .0402 MAE). Reliability weighting has little to bite on when few responses look assisted, which is why the F22 margin is thin. The [[benchmark]] spans nineteen observed semesters of one course sequence.

## Weighting evidence, not punishing use

AICG never changes a grade because a detector suspected assistance. The calibrated probability enters only as a reliability weight, `max(δ, 1 − pAI)`, applied to G-DINA targets and pooled skill embeddings, so a likely-assisted response still counts toward the score it earned while contributing less to the mastery estimate. The authors frame this as reducing noise in cognitive supervision rather than policing [[academic-integrity]], which is what makes it usable in an [[assessment]] workflow: an instructor can accept the assigned score and still distrust the inference drawn from it.

## What this means for practice

- **Assessment designers.** Specify the skill structure before choosing a model. The gap between score-only grading (.0873 MAE) and Q-matrix supervision (.0453) dwarfs anything the extra scoring heads buy.
- **Assessment designers.** Treat AI assistance as a reliability problem, not a misconduct problem. Down-weighting assisted responses for mastery inference preserves the grade earned and avoids the false-positive costs of hard filtering.
- **Instructors.** Read partial credit as reasoning evidence. The 0.60 that records two correct conditional-independence steps and a missing Bayes step is precisely what a score-only grader cannot carry into [[feedback]].
- **Educational technology developers.** Budget for detector calibration and a weight floor: the effect is 0.8% MAE when assistance is rare and 3.6–6.6% once it passes twenty percent.

## Limitations

- All 49,402 responses and 3,861 student–semester records come from one course sequence at one institution, with a fixed assessment of eight pretest and eight posttest items mapped to ten skills; the Q-matrix is expert-designed and fixed, and cross-course evaluation is left to future work.
- The Gen-AI detector is trained on synthetic rewrites from one offline model family, and its .959 within-semester accuracy is measured against that synthetic ground truth, not observed [[student-ai-interaction|student AI use]].
- Assisted responses are a minority (20.87%), which the authors give as the reason the aggregate weighting gain is moderate; no classroom deployment or instructor-in-the-loop study is reported.

## Citation

Guo, S., Chi, M., Qiao, F., & Patwardhan, V. (2026). [*Beyond Response Scoring: An AI-aware Cognitive Supervision Framework for Automated Mathematical Short Answer Grading*](https://arxiv.org/abs/2610.41215). arXiv preprint arXiv:2610.41215.
