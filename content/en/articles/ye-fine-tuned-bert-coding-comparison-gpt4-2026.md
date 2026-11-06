---
title: "Automating Self-Affirmation Essay Coding: Fine-Tuned BERT Performance Comparable to Human Coders and Comparison with GPT-4"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/ye-fine-tuned-bert-coding-comparison-gpt4-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, assessment designers]
level: [k 12]
technology: [educational-nlp, llm, llm-training-and-fine-tuning, machine-learning]
methods: [benchmark]
assessment: [automated-assessment]
ethics: [bias-mitigation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Ye, Borman and Borman report an empirical study that automates the [[qualitative-research|coding]] of self-affirmation essays from a large randomized trial with 7th-grade students: a fine-tuned BERT classifier reached Cohen's Kappa of 0.85 against human coders, slightly above the 0.83 agreement between two human coders. GPT-4 evaluated through zero-shot and few-shot prompting stayed below both the fine-tuned model and human-level agreement, and adding example essays did not close the gap. The model's performance held across stereotype-threatened and non-threatened students, generalized to a dataset collected by a different research team (Kappa = 0.86), and is released publicly, making [[machine-learning|automated coding]] of intervention writing a practical option for [[llm-training-and-fine-tuning|fine-tuning]] rather than frontier-model [[prompt-engineering|prompting]].

## Key Findings

1. **A fine-tuned BERT classifier matched human coders.** On the out-of-sample double-coded dataset (N = 134), BERT reached Cohen's Kappa of 0.85 against both the original and the double coders, versus 0.83 between the two human coders, with accuracy 0.93, precision 0.92, recall 0.98 and F1 0.95.
2. **Prompted GPT-4 did not close the gap.** Zero-shot GPT-4 classified the same essays with accuracy 0.90 and F1 0.93 and a Kappa of approximately 0.78 with human coders; adding 2, 4 or 6 example essays left accuracy in the 0.89–0.91 range, and GPT-4's errors mimicked BERT's tendency to read enthusiastic writing as self-affirming.
3. **The classical baseline lagged behind.** A Bernoulli Naive Bayes classifier with TF-IDF features reached accuracy 0.86 and F1 0.88, with Kappa 0.76 against the original coders; McNemar's test found the BERT advantage significant against the double-coder ground truth (chi-square 6.72, p = 0.004) but not against the original coders (chi-square 1.39, p = 0.167).
4. **Performance was consistent across student subgroups.** BERT's accuracy was 0.92 for stereotype-threatened students and 0.94 for non-threatened students with identical recall of 0.98, where Naive Bayes recall fell to 0.87 for threatened students; accuracy clustered at 93–95% across gender and free-or-reduced-price-lunch groups.
5. **The model generalized to an external dataset.** On essays from 4,660 students in a separate study by a different research team, BERT maintained a Cohen's Kappa of 0.86 with human coders (n = 150).

## Data from a large-scale self-affirmation trial

The data come from a large-scale randomized controlled trial of a self-affirmation intervention with three cohorts of 7th-grade students during the 2019–2020, 2020–2021 and 2021–2022 school years, including 12,212 students in 34 schools in 12 districts across 8 states. The final analytical sample covers writing from 7,239 students, with two exercises coming from 3,319 students; the sample was 73% economically disadvantaged, 8% English language learners, 10% students with individualized education plans, 23% African American, 25% Hispanic and 45% white. Treatment students completed three or four 15-minute in-class exercises in which they chose two or three personally important values from a list of 11 and wrote about why they mattered, while control students wrote the same amount about neutral topics; teachers and students were blind to condition. Essays averaged 71 words, and trained coders marked each response as self-affirming or general, with a random subset double-coded to assess reliability, reaching substantial agreement for the construct (Kappa = 0.83, N = 134).

The authors then treated coding itself as a machine-learning problem. They fine-tuned BERT-base (uncased, 12 transformer layers, 768-dimensional hidden size) on an 80/20 stratified split with class weights for imbalance, a learning rate of 2e-6, a batch size of 16 and early stopping on validation loss, keeping the out-of-sample double-coded cases entirely out of development. A Bernoulli Naive Bayes classifier with TF-IDF features served as the classical baseline, and OpenAI's GPT-4 was evaluated as an off-the-shelf classifier through zero-shot and few-shot prompting (2, 4 and 6 examples, temperature 0) because the authors wanted to know whether prompt-based use of a frontier [[llm]] could skip fine-tuning entirely.

## Fine-tuned BERT reaches human reliability

Fine-tuning a mid-sized model outperformed both the classical baseline and prompted GPT-4. Naive Bayes achieved accuracy 0.86 and F1 0.88; GPT-4 with instructions only reached accuracy 0.90 and F1 0.93; BERT reached accuracy 0.93 and F1 0.95. On Cohen's Kappa, the reliability measure the intervention's own coding standard rests on, BERT matched two human coders against each other: 0.85 between machine and either human coder versus 0.83 between the humans, while Naive Bayes sat at 0.76 against the original coders and GPT-4 at roughly 0.78. BERT's errors were asymmetric — false positives at 0.05 versus false negatives at 0.01 for the self-affirming attribute — and in 6 of the 9 disagreement cases the model sided with the double coder against the original coding, which on review the authors judged more reasonable; in the remaining 3 cases the model was wrong on two of the three.

The comparison with GPT-4 is the sharpest for practice. Adding example essays did not appreciably help: accuracy stayed in the 0.89–0.91 range with up to 6 demonstrations, which the authors read as a few-shot plateau consistent with diminishing returns beyond a small number of examples. Similarly, preliminary explorations with GPT-2 reached strong agreement with human coders (Kappa = 0.82), suggesting the result is not unique to BERT but reflects the broad advantage of task-specific fine-tuning over prompting for a well-defined classification construct. The authors note the same pattern in Kakarla et al. (2025), where fine-tuned BERT-based classifiers outperformed GPT-4 on open-response evaluation in an equity-focused tutor training setting.

## Performance holds across subgroups and external data

Model fairness mattered because the intervention's focal comparison groups are Black and Hispanic students, who face stereotype threat. Naive Bayes exhibited a performance gap: for threatened students its recall was 0.87 with accuracy 0.88, while for non-threatened students recall was 0.83 and accuracy 0.86. BERT showed minimal disparity — accuracy 0.92 for threatened and 0.94 for non-threatened students with recall 0.98 in both groups — and accuracy clustered at 0.95 versus 0.93 for female and male students and 0.95 versus 0.94 by free-or-reduced-price-lunch status. Subgroup analysis was not carried out for English learners or students with individualized education plans because the subsamples were too small for reliable comparison.

Generalization held on a genuinely external test: essays from 7th-grade students during the 2023–2024 school year, collected by a different research team, covering 4,660 students from 25 schools in 3 districts across 3 states (47.4% economically disadvantaged in the one district reporting, 12.4% English language learners, 7.3% African American, 41.1% Hispanic, 40.6% white), with essays averaging 66 words. On the reliability-coding subsample (n = 150), the model achieved a Cohen's Kappa of 0.86 with human coders. The authors pair the result with a workflow: train on coded essays, validate reliability on a sample of human coding, apply to new samples with the same validation, and retrain when the context shifts.

## What this means for practice

- **Researchers running value-affirmation interventions** can replace full manual coding with the released model, but should keep human double-coding of a random sample as the reliability check: the protocol that produced Kappa 0.85 against a 0.83 human-human benchmark is exactly the validate-by-sampling workflow the authors recommend, and it keeps automated coding auditable.
- **Educators implementing writing exercises** get a cheaper automation route, because a fine-tuned BERT-base runs on personal computers rather than requiring frontier model APIs, and its parity across threatened and non-threatened students (accuracy 0.92 versus 0.94, recall 0.98 in both) matters for an intervention aimed at Black and Hispanic students.
- **Evaluation researchers choosing between automation routes** should treat prompting as a fast approximation: GPT-4 zero-shot reached accuracy 0.90 but Kappa around 0.78, below the human-human 0.83 benchmark, and few-shot examples plateaued at 0.89–0.91, so for well-defined constructs with labeled data, fine-tuning beats prompting.

## Limitations

- The out-of-sample reliability evidence rests on 134 double-coded essays, a modest subsample from which the Kappa estimates are derived, and the external check on 150 essays.
- The model is tuned for a single construct — self-affirmation in 7th-grade essays — and the coding scheme is tied to the intervention's specific prompt; the authors recommend retraining when the context shifts.
- Fairness analysis could not cover English learners (8% of the sample) or students with individualized education plans (10%) because the subsamples needed for reliable statistical comparison were too small.
- Agreement with human coders is not ground truth: the authors show cases where the model and a second human coder both overruled the original coding, and in the residual disagreements the model misclassified two of the three responses.
- The study never fine-tuned frontier models, so the comparison with GPT-4 is restricted to prompting, and newer architectures beyond GPT-2 were not formally trained.

## Citation

Ye, C., Borman, T. H., & Borman, G. D. (2026). Automating Self-Affirmation Essay Coding: Fine-Tuned BERT Performance Comparable to Human Coders and Comparison with GPT-4. *Journal of Educational Data Mining*, 18(1), 66-88.
