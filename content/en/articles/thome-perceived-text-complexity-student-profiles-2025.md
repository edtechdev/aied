---
title: "Predicting Perceived Text Complexity: The Role of Person-Related Features in Profile-Based Models"
created: "2026-11-05T19:50:53-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/thome-perceived-text-complexity-student-profiles-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [survey]
audience: [researchers, curriculum designers, educational technology developers]
level: [secondary]
technology: [educational-nlp, machine-learning, llm, student-modeling, simulating-students]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Thome, Hertweck and Conrad report an empirical study in which 193 German high-school students annotated 3,954 sentences drawn from official career-guidance study guides and Wikipedia, and machine-learning models trained on those ratings together with person-related features predicted how complex each student found a sentence. Students rated the texts far easier than the Flesch-Reading-Ease score suggested — 72.8% of annotations were very easy or easy — and reader characteristics carried much of the signal, with the best profile-based ensemble (KNN plus XGBoost, weights 0.55 and 0.45) reaching an RMSE of 0.822 against a mean baseline of 1.070. Role-play-prompted large language models failed to match student perception even with labeled examples, and the [[reading-education|text-complexity]] dataset is public in the boshl/studentannotations repository on GitHub. The authors' approach is a case of [[student-modeling|modeling the reader]] rather than the text, and of [[simulating-students|simulating students]] with LLMs that did not hold.

## Key Findings

1. **A teenager-annotated German corpus.** 193 high school students each rated 20 sentences on a 5-point scale, producing 3,954 annotations of 1,697 unique sentences — 1,143 from official study guides and 554 from Wikipedia articles of the Text Complexity DE Challenge — with an average of 2.33 annotations per sentence and low inter-annotator agreement (Krippendorff's alpha = 0.23).
2. **Students found the texts easier than the readability formula did.** Students rated 46.7% of the sentences very easy, 26.1% easy, 18.1% medium, 6.5% difficult and 2.6% very difficult; 72.8% of labels were very easy or easy despite the sentences' low Flesch-Reading-Ease scores.
3. **Person-related features lifted prediction above every baseline.** All trained regressors beat the mean baseline (RMSE 1.070) and the average-complexity baseline built from BERT predictions (RMSE 1.036); KNN and MLP were the best single models (RMSE 0.836, R2 = 0.375), and the best voting ensemble of KNN and XGBoost reached RMSE 0.822 and R2 = 0.396.
4. **SHAP analysis: reader traits shape perception.** Language spoken at home was the most influential person-related feature (importance 0.09), ahead of gender (0.08) and self-estimated German skill (0.07), and second only to the TCDE average-complexity predictions (0.13).
5. **Role-play-prompted LLMs could not emulate student ratings.** In zero-shot role play, ChatGPT and Claude reached RMSE 1.961 and 1.864; with 12 revealed labels they improved to 1.171 and 1.252, still worse than the mean baseline of 1.070.
6. **The dataset is public.** All annotations are released in the studentannotations repository on GitHub, enabling further profile-based work on perceived text complexity.

## Students rated official guidance texts

The text corpus combined two sources: sentences extracted from the "Study and Career Choice" guides that the German Federal Employment Agency has distributed to high school students since 1971, which are written for teenagers aged 16 to 19, and sentences from the Text Complexity DE Challenge 2022 (TCDE), drawn from German Wikipedia articles rated by non-native speakers. Sentences were grouped into five Flesch-Reading-Ease bands and sampled to balance difficulty, yielding a corpus of 1,697 unique sentences — 1,143 from the study guides and 554 from Wikipedia. The final dataset comprises 3,954 annotated sentences: 794 from the TCDE challenge and 3,160 from the study guides.

Annotations were collected at five classroom sessions held at the end of a lecture on generative AI in education, a topic deliberately unrelated to text complexity so that anchoring effects would not bias the ratings. Each student answered eight questions on age, gender, language spoken at home, self-stated German skills, plans after high school, and grades in German and Maths, then rated twenty sentences one at a time on a 5-point Likert scale. Annotations from students below the age of 16 and from those who did not consent were removed, and five volunteers annotated additional sentence sets. The sample of 193 students was diverse: 92 identified as female (47.67%), 91 as male (47.15%), 6 as non-binary (3.11%) and 4 gave no answer (2.07%); 52.85% spoke only German at home, 32.62% spoke German and another language, and 14.51% spoke no German at home; ages split 33.16% at 16, 36.79% at 17 and 30.05% at 18 or older, and 39.9% attended academic-track schools. Inter-annotator agreement was low (Krippendorff's alpha = 0.23), which the authors attribute to the very heterogeneity the profile-based models are designed to exploit.

## Person features beat linguistic baselines

The regression models used twelve features: two average-complexity predictions from fine-tuned BERT models, the share of out-of-vocabulary words in each sentence, and person-related features covering age, gender, language at home, self-stated German skill, school type, desired training, desired field, and grades in German and Maths. The out-of-vocabulary ratio came from vocabulary sets of 31,600, 36,324 and 36,531 lemmas built from German final-exam essays in the GraphVar corpus, assigned to students according to their German grade.

The average-complexity features were produced by fine-tuning bert-base-german-cased (RMSE 0.931) and distilbert-base-german-cased (RMSE 0.927); the DistilBERT predictions were used as the regression feature. The perceived-complexity models split the data into 80% training and 20% test data, tuned hyperparameters with 5-fold cross-validation, and were evaluated by RMSE with bootstrapped uncertainty. Every model that included person-related features outperformed the baselines: linear regression reached RMSE 0.965 (R2 = 0.168), support vector regression 0.866 (0.329), XGBoost 0.855 (0.348), and KNN and MLP tied at 0.836 (0.375). Ensembling helped further — the voting regressor combining KNN (weight 0.55) and XGBoost (weight 0.45) achieved RMSE 0.822 and R2 = 0.396, the best result in the table, and most ensembles beat the best single model.

## SHAP shows reader traits shape perception

The SHAP analysis of the best model ranked the TCDE average-complexity predictions first at 0.13, which the authors relate to the TCDE sentences being annotated about 9.5 times on average against 2.33 for their own student dataset. Language spoken at home followed at 0.09: students who speak only German at home perceive the texts as less complex, while students who speak another language, or German and another language, perceive them as more complex — with the effect most pronounced for students who report speaking no German at home. Gender had an importance of 0.08, with the model rating sentences as less complex when the reader is male, an effect the authors connect to overconfidence among male teenagers; the 10 students who were non-binary or gave no answer form a small group in the analysis. Self-estimated German skill (0.07) ran almost linearly with perception — students who rate their own German better perceive texts as easier — and mattered more than the students' actual German grade. The out-of-vocabulary feature had the lowest importance (0.02) but still improved most models when included.

## LLMs cannot yet rate like students

The authors tested whether state-of-the-art LLMs can annotate from a student's point of view. The eight survey answers of each of the 193 students were parsed into German persona descriptions — for example, a 17-year-old boy who mainly speaks a language other than German at home and rates his German skills as average — and ChatGPT-4o (version gpt-4o-2024-08-06) and Claude Sonnet 3.5 (version claude-3-5-sonnet-20240620) were asked, at temperature 0, to rate the same twenty sentences the student had seen. In the zero-shot scenario no student labels were revealed; the process was then repeated revealing 2, 4, 6, 8, 10 and 12 labeled sentences per survey as few-shot examples.

Both models improved with more examples — ChatGPT's RMSE fell by 0.79 from zero-shot to 12 revealed labels and Claude's by 0.61 — and ChatGPT outperformed Claude in every few-shot condition. Yet neither model ever surpassed the simplest baseline: with 12 revealed labels their RMSEs of 1.171 and 1.252 were still worse than the mean baseline of 1.070. The label distributions expose the failure: students assigned very easy to 45.27% of the test sentences, while both LLMs peaked at the easy label, and the models' average ratings (ChatGPT 2.30, Claude 2.44) sat well above the students' average of 1.93. The authors conclude the LLMs cannot adjust to the dataset's skew or to the demographic and linguistic diversity of the annotators.

## What this means for practice

- **Writers of student-facing materials.** Formula scores misjudge the target audience here: students rated 72.8% of the sentences very easy or easy even though the corpus was sampled to include highly complex Flesch-Reading-Ease bands, so readability scores should be checked against the perceptions of the actual readers.
- **Model builders.** Person-related features are cheap to collect and materially improve prediction — every model using them beat the mean baseline, and the best ensemble reached RMSE 0.822 and R2 = 0.396 — with language at home (0.09), gender (0.08) and self-estimated German skill (0.07) carrying the most weight.
- **Teams using LLMs as proxy annotators.** Even with authentic student profiles and up to 12 revealed labels, ChatGPT-4o and Claude Sonnet 3.5 finished worse than a mean baseline (RMSE 1.171 and 1.252 vs 1.070), so LLM role play is not yet a substitute for gathering target-audience ratings.
- **Counseling and equity.** Students who do not speak German at home perceive guidance texts as more complex, and the authors argue that adjusting informational texts is low-cost and may help attract underrepresented groups to particular fields of study and occupations.

## Limitations

- The study measures perceived complexity, not comprehension: a text may be perceived as complex yet still be understood effectively, or vice versa, and no comprehension assessment was included.
- The data come from 193 German high school students, with German-language texts, prompts and models, so the results may not generalize to other languages, cultural settings or demographic groups, and interactions between demographic features remain unexplored.
- The same prompts were used for both ChatGPT and Claude to keep the comparison clean, although prior work suggests model-specific prompt engineering matters for LLM performance.
- Perception is self-reported, and the authors note that students tend to overestimate how well they understand texts, a known bias in metacognition.

## Citation

Thome, B., Hertweck, F., & Conrad, S. (2025). *Predicting Perceived Text Complexity: The Role of Person-Related Features in Profile-Based Models*. *Journal of Educational Data Mining*, 17(1), 276-307.
