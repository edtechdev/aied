---
title: "Towards Responsible and Trustworthy Educational Data Mining: Comparing Symbolic, Sub-Symbolic, and Neural-Symbolic AI Methods"
created: "2026-11-01T09:08:04-05:00"
updated: "2026-11-01T09:16:20-05:00"
type: article
sources: ['raw/papers/hooshyar-responsible-trustworthy-educational-data-mining-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [learning sciences]
level: [primary education, middle school]
audience: [researchers, educational technology developers, learning analytics designers]
technology: [machine-learning, learning-analytics, student-modeling]
methods: [quantitative-research]
pedagogy: [self-regulated-learning, metacognition, motivation]
assessment: [educational-measurement]
ethics: [explainable-ai, bias-mitigation]
contributors: [editor]
source_depth: full text
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
---

> **Synthesis:** There are two ways to read a model's accuracy: how many students it sorts correctly, and which students it can still find once low performers become rare. On balanced labels the three families of educational data mining were interchangeable. On labels that look like a real classroom, only the model carrying self-regulated learning theory inside it kept finding the struggling students, and its reasons looked more like the theory it was given.

## Key Findings

1. The sample was 453 Estonian students (225 boys) from 33 schools. Their self-regulated learning (SRL) indicators came from a Grade-3 web-based assessment run in 2018 in about 45 minutes; the target was their Grade-7 national mathematics test in 2022, 48 tasks split into 31 factual and 17 conceptual.
2. Seven models represented three families: decision trees, rule induction and random forests as symbolic; kernel logistic regression, a Bayesian network and a deep neural network as sub-symbolic; KBANN as neural-symbolic.
3. The authors built two datasets from the same collection. The balanced set split at the mean (205 low and 248 high on factual knowledge; 223 low and 230 high on conceptual). The imbalanced set split at the first quartile, leaving 125 low performers against 328 others, with cutoffs of 14 and 6 points.
4. On balanced data the families were comparable: AUC ran from 51% to 70%, and differences lay mostly in where errors fell. Low-performer recall on factual knowledge was 46% for the decision tree, 46% for rule induction, 54% for logistic regression and 41% for the Bayesian network; the neural network reached 66% at 59% precision.
5. NSAI was the strongest balanced compromise on factual knowledge: 71% recall for low performers at 60% precision, 66% accuracy, AUC of 66%. On conceptual knowledge it reported 69% for AUC, accuracy, recall and precision.
6. Under imbalance the picture broke. Apart from NSAI, no model reached 50% recall for low performers on either knowledge type. The decision tree found 8% of low performers on conceptual knowledge, the random forest 16% on factual, rule induction 32% on factual, and the Bayesian network 12% on conceptual.
7. NSAI held: AUC of 79% on factual and 71% on conceptual, the highest on both, with 84% accuracy and 68% recall for low performers on factual, and 76% recall on conceptual. The authors credit the injected SRL rules, an implicit regularization mechanism.
8. Explanations diverged. The Bayesian network's strongest direct influences on factual knowledge were attention (0.75), heterogeneous thinking level (0.73) and growth mindset (0.67). The neural network's SHAP ranking put gender first, and gender added +0.19 to a low performer misclassified as high. Both largely overlooked [[metacognition]], while NSAI ranked learned knowledge, metacognition and motivation above cognition, six of its top ten global features being motivational or metacognitive.

## How the study was built

This is a secondary analysis. The Grade-3 SRL assessment was organized by the Estonian Education and Youth Board (HARNO) in 2018; the national test followed in 2022. An authorized HARNO representative merged the two files, and the researchers, who took no part in collection or integration, received the result fully anonymized. A confidentiality agreement bars sharing it.

The instrument is not a single questionnaire. It mixes self-report with tasks: a calculation puzzle that recorded whether students chose to continue and how often they clicked a Help button, a photo-categorization task scored for heterogeneous and scientific thinking, a word search, two memorization rounds with recall and strategy ratings, and a short text with comprehension questions. The authors are explicit that these capture self-perceptions measured before the math task, "not actual SRL knowledge and skills that were used during the math task".

The target was discretized twice. Splitting at the mean produced balanced labels; splitting at the first quartile produced imbalanced ones, where the low class marks the tail. The authors declined resampling, arguing that undersampling loses data in an already small set and oversampling introduces redundancy and dataset shift. Data were split 80/20 with stratification, normalized after the split, trained with 10-fold cross-validation, and scored on accuracy, AUC, recall and precision at a 0.5 threshold.

The three [[machine-learning]] families follow a knowledge-representation view rather than an explainability view, so random forests count as symbolic and Bayesian networks as sub-symbolic. KBANN was initialized from five Horn clauses mapping the SRL framework onto topology, with antecedents as inputs, constructs as hidden units and rules re-extracted after training. Explanations came from each model's intrinsic output where one exists and from SHAP for the neural network, limited to models whose generalization was good enough that their patterns were not majority-class artifacts.

## A balanced test cannot tell you which model will find the student who is rare

The two experiments differ only in where the cut falls, not in which students were measured. Balance comes from a threshold at the mean, leaving roughly half the cohort on each side; imbalance comes from the first quartile, leaving 125 low performers among 453. The first is a psychometric convenience, the second closer to the shortlist a school needs.

That reframing changes the verdict. On balanced labels, decision trees and rule induction looked unremarkable rather than broken: 63% and 67% accuracy on factual knowledge, AUC of 53% and 65%. Their low-performer recall was already 46%, a poor triage rate, but the metric usually reported barely moved. On imbalanced labels the same models posted 78% and 76% accuracy, apparently an improvement, while low-performer recall fell to 48% and 32%. Accuracy rose because the majority class grew.

The paper's reading is that most models optimize for the majority class, and that models which look effective under balanced evaluation can underperform exactly where identification matters most. Imbalance did not create the failure so much as remove the cover balance provided.

## Two families kept producing triage lists that were mostly right about the wrong students

The recall figures under imbalance are the sharpest result. The decision tree found 8% of low performers on conceptual knowledge, the Bayesian network 12%, the random forest 16% on factual knowledge at 80% precision, and rule induction 32%. High-performer recall sat between 89% and 98%. A model can post 74% to 78% accuracy while missing almost every student the intervention was built for.

This is where [[bias-mitigation]] stops being an abstract fairness concern and becomes a design question. The bias is not a stray coefficient; it is the loss function doing what it was asked under a distribution that rewards ignoring the minority. Symbolic models commit to explicit splits that favor the larger branch; sub-symbolic models pick up whatever correlates with the majority, including demographic variables. NSAI keeps minority-relevant constructs in play through prior structure, a claim about regularization as much as ethics.

The consequence is that [[differential-effects-across-learner-groups]] has to be asked per subgroup, at the threshold a school would use rather than at 0.5 by default. The authors fix 0.5 for comparability and note that threshold adjustment buys recall at the cost of false positives. That trade is a policy decision, and it belongs to the people who act on the list.

## "Aligned with learning theory" is a claim about attributions, and attributions move

Each family tells a different story about why a student scores as they do, and the stories are not equally checkable. For symbolic models the story is the tree or rule set, readable but coarse. For the Bayesian network it is a graph, led by attention (0.75), heterogeneous thinking (0.73) and growth mindset (0.67). For the neural network it arrives through SHAP, which ranked gender first and which the authors distrust as a window on decision mechanisms.

That contradiction is the interesting part. A model whose top feature is gender, and which adds +0.19 of gender to a low performer misclassified as high, is not describing learning. It is describing who sits in the majority of a small Estonian cohort.

NSAI's explanation differs in kind. Its weights map onto named constructs because the topology was built from them, and rule extraction returns IF-THEN statements in the vocabulary of [[self-regulated-learning]]. Learned knowledge, metacognition and motivation outranked cognition for factual knowledge in the balanced condition. The model also surfaced a latent unit the injected theory lacked, which the authors named "thinking level and information processing".

Two cautions follow. The ranking of constructs was not stable: under imbalance, cognition led and metacognition and motivation fell to the bottom, because the same inputs were optimized against differently defined classes. So "aligned with theory" holds for a model, a label definition and a dataset at once, not for a method. And alignment is judged by people reading attributions against a framework, not by an index: no number scores theoretical fidelity, and no stakeholder study tests whether teachers find the extracted rules usable.

## What this means for practice

- **Learning-analytics teams and platform vendors.** Report recall for the low-performing class at the threshold you will deploy, next to accuracy, and state the evaluation sample's class balance. A model tuned on a rebalanced file, as [[learning-analytics]] pipelines often are, has not met the case that matters.
- **Researchers evaluating models.** Treat feature attributions as part of the evaluation, not a postscript. Compare the intrinsic explanation with the post-hoc one; the gap between a KBANN rule set and a SHAP ranking is itself evidence about the model.
- **School and system decision makers.** Ask what a shortlist misses before asking how accurate the model is. A 78% accurate classifier finding 8% of the lowest quartile will not support early intervention, and [[explainable-ai]] dashboards alone will not show the gap.

## Limitations

- One national cohort: 453 students in 33 Estonian schools, one target test, one four-year gap. Nothing here shows the ranking of families transfers to another country or subject.
- The outcome was binarized. The authors concede this lost information and that regression would fit the continuous Grade-7 scores better.
- The data cannot be shared or reproduced: a confidentiality agreement with the Estonian Education and Youth Board covers them, and no public version exists.
- One neural-symbolic implementation was tested. The authors call for other injection routes, through inputs or loss functions, and a broader comparison across families.
- Interpretability was assessed by the authors reading model outputs; no teachers judged whether the explanations helped, which the paper lists as future work.
- The text is an accepted pre-proof. Copyediting is still to come, so wording may change before the Version of Record, and this page cites the version it read.

## Citation

Hooshyar, D., Kikas, E., Yang, Y., Šír, G., Hämäläinen, R., Kärkkäinen, T., & Azevedo, R. (2026). [Towards responsible and trustworthy educational data mining: Comparing symbolic, sub-symbolic, and neural-symbolic AI methods](https://doi.org/10.1016/j.ijaied.2026.100016). *International Journal of Artificial Intelligence in Education*, 100016. https://doi.org/10.1016/j.ijaied.2026.100016

This page cites the accepted pre-proof version, since no volume or page range has been assigned yet.
