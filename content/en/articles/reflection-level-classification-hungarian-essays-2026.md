---
title: "Automatic Reflection Level Classification in Hungarian Student Essays"
created: "2026-09-27T07:21:21-04:00"
updated: "2026-09-27T07:21:21-04:00"
type: article
sources: ['raw/papers/reflection-level-classification-hungarian-essays-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [writing education]
level: [higher ed, teacher education]
audience: [researchers, instructors]
pedagogy: [metacognition, professional-training]
technology: [educational-nlp, machine-learning]
assessment: [automated-assessment, automated-essay-scoring]
methods: [quantitative-research, ai-ed-evaluation]
ethics: [privacy, multilingual-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Reflective writing is a core competency in [[teacher-education|teacher training]], but scoring it by hand does not scale. This paper reports the first comprehensive study of automatic reflection level classification for Hungarian student essays, using 1,954 expert-annotated essays written over four consecutive years by students in an Early Childhood Education programme. The authors compare classical [[machine-learning|machine learning]] on TF-IDF features and Qwen3 semantic embeddings against two fine-tuned Hungarian transformers, hubert-base-cc and PULI-BERT-Large. The corpus is severely skewed, with 68% of essays at level 3 and 1.8% at level 0, so much of the paper is an ablation study of imbalance handling. Shallow models reached up to 71% overall score averaged over accuracy, F1 and ROC AUC, while transformers reached 68% but handled minority classes better. The authors frame the payoff practically for [[teacher-role|teachers]]: preliminary [[feedback]] and workload relief, with final [[assessment]] kept by educators. The lesson is that more imbalance machinery is not automatically better: model choice should follow the metric you care about.

## Key Findings

1. On 1,954 Hungarian essays, the best shallow model reached an overall score of 0.7176 and the best transformer 0.6872, averaged over accuracy, F1 and ROC AUC.
2. The best shallow configuration was SMOTEBoost with Qwen3 embeddings and a decision tree of depth 12: 0.7089 accuracy, 0.6808 F1 and 0.7633 ROC-AUC over 5 folds.
3. The best transformer was PULI-BERT-Large with cross-entropy loss and backtranslation: 0.7095 accuracy, 0.6762 F1 and 0.6760 ROC-AUC.
4. Reflection levels are heavily skewed: 68% at level 3, 27.4% at level 2, 2.8% at level 1 and 1.8% at level 0, and most models classified the minority levels poorly while favoring the majority.
5. Class balancing reduced every metric (0.6672 accuracy without it against 0.6408 with it); oversampling raised F1 (0.6358 against 0.6294) but not accuracy.
6. Statistical tests found no significant difference between the model families for accuracy and weighted F1, so transformers earn their place through minority-class sensitivity.

## Why reflective writing is hard to score at scale

Reflective thinking is named as a core competency in international frameworks such as the Tuning project, the OECD Learning Compass 2030 and the EU Key Competences. Reflective essays make that process visible and can be assessed by teachers with rubrics, but the evaluation is manual, hard to scale and subjective. Earlier work classified reflection automatically in several settings: Ullmann (2019) reached 70% to 90% accuracy over 76 student essays (Cohen's K = 0.53-0.85), roughly 10% below manual annotation, and Alrashidi et al. (2022) reached 75% to 96% over 74 essays and 1,113 annotated sentences. That work concentrates mainly on English, German or multilingual corpora. Hungarian, a morphologically rich language, had not been studied extensively at document level, and closing that gap is the point of this study.

## How the 1,954-essay corpus was built

Education experts at a large public university in Central Europe collected essays from students who completed their studies over 4 consecutive years. The students were in the Early Childhood Education programme, whose six semesters include pedagogical practice placements in nurseries; at the end of each semester they wrote a reflective essay answering guiding questions about their placements. The dataset contains almost 1,954 annotated essays from roughly 450 students. Raters scored several dimensions, but only reflection level is used here, from 0 (no reflection) to 3 (high reflection). Essays arrived as docx, pdf and txt files, so text was extracted with python-docx and PdfPlumber, and personal information was stripped with huspacy named entity recognition, regular expressions and a manual check. The dataset is not publicly available because of [[privacy]] and ethical considerations.

## What the models did, and where they failed

The shallow models (Random Forest, XGBoost, CatBoost and RidgeClassifier) used TF-IDF features and Qwen3-4B document embeddings, a fixed-length 2560-dimensional vector, trained with 5-fold cross-validation, seed 42 and an 80% training and 20% testing split. Imbalance handling covered class weighting, SMOTE, ADASYN and RandomOverSampling, plus ensembles such as EasyEnsemble. Both transformers, hubert-base-cc and PULI-BERT-Large, cap at a 512-token context window, so essays were chunked (128 tokens, 64 tokens of overlap) and chunk predictions aggregated by average pooling.

Where they failed is instructive: confusion matrices show shallow models learned the majority class well and misclassified minority samples, so a high ROC-AUC could coexist with weak accuracy. One RidgeClassifier configuration reached 0.7131 ROC-AUC but only 0.5162 accuracy. The authors call this a trade-off between aggregate and minority-class performance, the profile you would expect when 68% of essays sit at one level.

## What this means for practice

- **Instructors.** Treat it as triage rather than a grade: the authors position these systems for preliminary feedback and workload support, with final assessment kept by educators.
- **Instructors.** If your rubric concentrates most essays at one level, expect the classifier to mirror that, since models scored minority levels poorly.
- **Assessment designers.** Choose the model family by the metric you care about: shallow models gave the best aggregate scores, transformers better sensitivity to underrepresented reflection levels.
- **Assessment designers.** Do not default to aggressive rebalancing, because class balancing lowered every metric in the ablation and the other techniques traded one metric for another.
- **Developers and administrators.** Language coverage is a constraint: morphologically rich languages need their own resources before [[automated-assessment|automated reflection scoring]] can be assumed to transfer.

## Limitations

- The corpus is not publicly available because of privacy and ethical considerations, so others cannot reproduce these results on the same 1,954 essays.
- Class skew remains a bottleneck: even with oversampling, most models struggled on minority classes and could reach high accuracy by favoring majority-class predictions.
- Both transformers capped at a 512-token context window, so long essays had to be chunked and averaged, which can weaken document-level coherence signals.
- Results come from one Hungarian corpus in a single Early Childhood Education programme, so performance depends on that class distribution and may not transfer to other writing tasks or languages.

## Citation

Csibi, Fenech, Sándor, Serfőző & Gyöngy (2026). [*Automatic Reflection Level Classification in Hungarian Student Essays*](https://arxiv.org/abs/2605.02402).