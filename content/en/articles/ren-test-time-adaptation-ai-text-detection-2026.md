---
title: "Hitting a Moving Target: Test-Time Adaptation for AI Text Detection under Continual Distribution Shift"
created: "2026-10-18T13:52:00-04:00"
updated: "2026-10-18T13:52:00-04:00"
type: article
sources: ['raw/papers/2606.25152.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, administrators]
foundations: [academic-integrity]
technology: [generative-ai, llm, machine-learning]
assessment: [ai-detection, assessment-validity]
ethics: [equity-in-ai-education]
methods: [benchmark]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-18"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Ren, Raghavan and Garg (2026) argue that the [[ai-detection|AI-text detection]] problem is not separability but motion. Their supervised baselines separate human from machine prose almost perfectly in distribution, yet the flagship commercial detector Pangram drops to a balanced accuracy of 63.5% and an AI recall of 27% against a rewriting prompt built to evade it — compared with a 93.3% detection rate for the authors' test-time adaptation approach on the same text. Because a published detector is a Stackelberg leader that an evader can probe in real time, the paper reframes detection as an adaptation problem: a positive-unlabeled classifier updated on unlabeled inference-time batches holds a balanced accuracy of 94.4% and an AI recall of 99% at the final round of the authors' adversarial game, where supervised retraining holds 69.3% and 49.2%. For [[academic-integrity]] the paper cuts both ways — it shows detection can be made more robust, and it shows that the error it fixes, labeling real human writing as machine-written, is the one that harms students.

## Key Findings

1. Naive AI text is easy to detect; shifted AI text is not. In distribution the authors' detectors separate human from machine text almost perfectly even at one sentence, and Pangram reaches a balanced accuracy of 98% with an AI recall of 96%.
2. A black-box evader can defeat the recognized commercial leader. A rewriting prompt produced by an [[agentic-ai|agentic]] autoresearch loop leaves Pangram detecting 27.0% of adversarial AI text against 93.3% for the authors' test-time approach, with Pangram's balanced accuracy falling to 63.5%.
3. Test-time adaptation survives repeated rounds. At the final iteration PU + TTA holds a balanced accuracy of 94.4% and an AI recall of 99%, where supervised learning holds 69.3% and 49.2%.
4. New model releases break supervised detectors. A detector trained on Llama 3.3 70B Instruct reaches only 55% AI recall on gpt-oss-120b abstracts, and Pangram called GPT 5.4 abstracts human most of the time after that model shipped on March 5, 2026 (34.0% predicted fully or assisted AI).
5. Drift in human writing produces the harmful error. Simulating LLM adoption after 2010, a fixed supervised detector's recall on human text decays from 85.9% to 73.4% across the decade while test-time models hold 90.2% and 91.1% down to 89.8% and 85.9%; the widely used prevalence estimator of Liang et al. grows biased by 11.4%.
6. A small unlabeled test-time batch is enough. Sensitivity analysis shows modest amounts of in-distribution AI text in the unlabeled set suffice, and a streaming self-supervised variant adapts without full-model retraining.
7. The task has a stated expiry condition. Balanced accuracy cannot exceed half of one plus the total-variation distance between the human and AI distributions, so convergence of the two would defeat every learning-based detector.

## The detector moves first

The paper imports its framing from strategic classification. A detector publishes a classifier, through an API or open weights, and then stops changing between retraining runs, while the evader can rewrite text and re-check the score in real time. The detector, the authors write, "moves first" and is therefore at a disadvantage; what it needs is to move last, adapting to the evader's latest response at test time. That asymmetry is why the arms race reads as unwinnable from the institution's side. Transfer learning and domain adaptation both assume a fixed target domain, but humanization is not a domain — it is a response to one particular deployed model, and it can be developed against nothing more than black-box access. The authors demonstrate rather than assume this, using an agentic loop to develop humanizer prompts that beat each successive detector, and reporting that later rounds took more attempts without ever failing.

## Three shifts, one failure mode

The paper separates shifts usually discussed together. The first is adversarial: humanizers, which the authors optimize themselves. The second is natural, as new [[llm|LLMs]] arrive after a detector is trained, so a model learns one system's output distribution and meets another's. The third is the one the authors say has been overlooked — human writing itself changes once LLMs are widespread, so pre-2022 human text becomes out of distribution, precisely the training data that no longer reflects the writing being judged. Their simulation of this, pretending adoption began after 2010, is the only experiment here that produces systematic false positives, because it makes detectors read contemporary human abstracts as machine-written. The paper is careful to separate the error types: adversarial and model-release shifts mostly move AI detection rates, while drift in human writing moves the error that treats people as cheaters.

## What test-time adaptation changes

The method draws on inference-time homogeneity — the observation that machine outputs resemble one another in ways human responses do not — and on positive-unlabeled learning. Instead of acquiring labels it cannot get, the authors adapt a (TED)n classifier on unlabeled batches drawn from the test-time mixture, with a variant that also uses labeled negatives from the source domain (PNU), plus a streaming self-supervised alternative that needs no full-model retraining. The gain is not marginal: adaptation restores in-distribution-level performance against text designed to defeat the previous round's detector, and the authors' theory (Observation 2.3) supplies conditions under which a test-time objective's population minimizers separate human text from both naive and humanized machine text using labeled human text and unlabeled data alone. Two limits are the authors' own: the guarantee needs a separability assumption, and the accuracy ceiling depends on how far apart the distributions remain.

## The data problem no method solves

Even a working detector depends on data that is going away. Responding to a new model is tractable — the authors generate "mirrors" with it and retrain. Responding to drift in human writing is not, because the fix requires verified contemporary human text and there is no cheap way to confirm that recent writing is human. Their conclusion is blunt: no solution is known except to pay writers to produce verifiable human text, and paid writing is itself a biased sample of human writing. The authors also decline to apply their detector to any individual text, reporting prevalence estimates only, and they name the asymmetry that matters for institutions. Their own experiments show that the distribution shift which produces false accusations is the human-drift one, which means the remedy they propose should be judged partly on whether it reduces exactly that error.

## What this means for practice

- **Instructors.** Never treat a detector score as a finding about a student: the paper's strongest commercial baseline misses roughly three-quarters of adversarially humanized text, and its residual errors land on authentic human writing.
- **Administrators.** Ask vendors for error rates measured under shift — a newly released model, a publicly available humanizer — rather than a headline accuracy on last year's AI output, and require that false-positive rates on human text be reported separately.
- **Researchers.** Treat detection as an adaptation problem: evaluate per shift, report human-text recall alongside AI recall, and use unlabeled inference-time batches rather than assuming a fixed target domain.
- **Educational technology developers.** Where a detector is retrained on generated mirrors, add a test-time adaptation stage, since the paper's streaming variant shows adaptation is possible without full-model retraining.

## Limitations

- All experiments use arXiv scientific abstracts (2010–2025) and the RAID [[benchmark]], not student writing, so the setting is publishing rather than coursework and the error rates are not transferable to a classroom unexamined.
- Adversarial prompts were developed against one detector at a time and then held constant while being defeated, a setup the authors call conservative because a continuously adapting target would be harder to beat.
- Pangram's vendor-reported AI recall on GPT 5.4 was 99.5% at the same time this study measured 34.0% detection; the authors could not explain the gap and list text length and out-of-distribution prompts as candidates.
- The temporal-drift experiment is a simulation rather than a measurement: LLM adoption is pretended to begin after 2010 because verified post-2022 human text is unavailable.
- The authors state that test-time adaptation is not a panacea, and that long-term convergence of human and AI writing distributions would invalidate any learning-based detector.
- The project used API credits provided by Pangram, the commercial detector serving as the strongest supervised baseline, and the authors list further funding from Google, Amazon, Mastercard and the Cornell Tech Urban Tech Hub.

## Citation

Ren, K., Raghavan, M. & Garg, N. (2026). [*Hitting a Moving Target: Test-Time Adaptation for AI Text Detection under Continual Distribution Shift*](https://arxiv.org/abs/2606.25152). arXiv:2606.25152. NeurIPS 2026.
