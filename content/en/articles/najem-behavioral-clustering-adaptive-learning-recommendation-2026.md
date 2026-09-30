---
title: "Behavioral clustering for adaptive learning object recommendation in higher education using learning analytics for personalized student success"
created: "2026-09-30T06:50:00-04:00"
updated: "2026-09-30T06:50:00-04:00"
type: article
sources: ['raw/papers/10.1007_s44217-026-02181-7.md']
confidence: medium
published: "2026"
page_kind: [framework]
research_method: [secondary analysis]
discipline: [learning sciences]
level: [higher ed]
audience: [learning analytics designers, instructional designers, researchers, administrators]
pedagogy: [motivation, student-engagement]
technology: [adaptive-learning, learning-analytics, machine-learning, personalized-learning, recommender-systems-and-learning-paths, student-modeling]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Najem, Zaoui Seghroucheni and Ziti cluster 14,003 anonymized student records into six behavioral learner profiles and map those profiles onto a proposed [[recommender-systems-and-learning-paths|learning-object recommendation]] framework. K-Means++ with k = 6 was chosen through the Elbow Method and Silhouette Analysis and benchmarked against four competing algorithms, reaching the best separation of the five (Silhouette = 0.62, Davies-Bouldin = 0.47, Calinski-Harabasz = 78.62). The clusters span from Highly Engaged Achievers to At-Risk Learners and separate sharply on outcomes: a mean exam-score gap of 40.17 points between the highest and lowest clusters, with ANOVA on final grade at F(5, 13,997) = 9365.49, p < 0.001, η² = 0.770. The recommendation half of the paper is explicitly conceptual — an affinity-scoring model combined with a Felder-Silverman mapping matrix and diversity regularization (λ = 0.30) — and the authors state that it awaits validation in live [[learning-analytics|LMS]] environments. The caveat that matters most is stated in the abstract: the clustering inputs are [[self-report-measures|self-reported]] behavioral and psychological proxies rather than [[student-modeling|LMS interaction traces]].

## Key Findings
1. The dataset contains 14,003 anonymized student records with 16 attributes, of which 12 behavioral, psychological and environmental variables served as clustering inputs; the study is a secondary analysis of existing records rather than a deployment in a live course.
2. K-Means++ with k = 6 was selected through the Elbow Method (elbow at k = 6, where within-cluster sum-of-squares reduction slows) and Silhouette Analysis (highest score at k = 6), then benchmarked against four competing algorithms on Silhouette, Davies-Bouldin, Calinski-Harabasz and Dunn indices; the chosen configuration produced the highest Silhouette (0.62), the lowest Davies-Bouldin (0.47) and the highest Calinski-Harabasz (78.62).
3. Six distinct learner profiles emerged, spanning Highly Engaged Achievers to At-Risk Learners, and cluster distinctiveness was characterized by ANOVA on Final Grade (F(5, 13,997) = 9365.49, p < 0.001, η² = 0.770), with an exam-score sensitivity analysis giving F(5, 13,997) = 6822.77, p < 0.001, η² = 0.709, plus Tukey HSD post hoc tests and chi-square analysis with Cramér's V.
4. The mean exam-score difference between the highest- and lowest-performing clusters was 40.17 points.
5. The recommendation component is a conceptual framework: an affinity-scoring model that combines cluster membership with a Felder-Silverman Learning Style Model (FSLSM) mapping matrix and diversity regularization (λ = 0.30) to produce cluster-specific learning-object recommendations.
6. The authors state the central methodological limit themselves: because the clustering inputs are self-reported proxies rather than direct LMS interaction traces, validation against LMS data remains necessary to assess whether the profiles describe observed learning behavior.
7. The paper's framing claim is that one-size-fits-all content delivery in [[higher-ed|higher-education]] [[edtech-platform|platforms]] leaves heterogeneity in student [[student-engagement|engagement]], [[motivation|motivation]] and performance unaddressed, and that behaviorally derived profiles can route learning objects to students rather than exposing everyone to the same sequence.

## Clustering students from what they report about themselves

The technical result is a clean instance of a familiar pattern in learning analytics: a modest, interpretable algorithm applied to a large dataset, validated with several internal indices, producing segments that separate strongly on the outcome variable. The separation is large — η² = 0.770 on final grade — which is what makes the profiles useful for routing content and also what should make a reader cautious. When clusters are derived from behavioral and psychological self-reports that include motivation, engagement and environmental conditions, and those same constructs plausibly predict [[learning-gains|academic performance]], strong cluster separation is partly a restatement of the inputs rather than an independent discovery. The paper is explicit that the inputs are proxies, and the authors frame the framework as a hypothesis-generating step whose recommendation logic still needs to be tested where the behavior actually happens.

The choice of learning style as a mapping layer will also be familiar to anyone who has followed the learning-styles debate. FSLSM appears in the recommendation matrix as the mechanism that matches learner type to object type, and the authors acknowledge the criticism that self-reported style instruments are subjective and hard to reproduce; the diversity regularization is their guard against a recommender that collapses into recommending only the format a profile already prefers. That is a sensible design instinct — a purely affinity-driven recommender reinforces existing preferences — but it is also an admission that the mapping needs a corrective term rather than resting on the style construct itself.

## What the framework would need to demonstrate

Read as a pipeline proposal rather than a result, the paper's contribution is the combination: cluster first on behavioral proxies, then constrain the recommendation with a style mapping plus a diversity term, and evaluate against outcome measures. The unvalidated half is the part that matters for students — whether the recommended learning objects actually change engagement or performance — and the authors do not claim otherwise. A live deployment would also need to answer questions the clustering cannot: what happens when a profile is wrong, whether students can see and contest their assignment, and whether routing content by cluster narrows the range of material a student encounters rather than widening it.

## What this means for practice

- **Treat profile assignment as a hypothesis, not a label.** With clusters derived from self-reports, an assignment is a prediction about behavior; validate it against actual LMS activity before letting it shape what a student sees, and give students a way to correct it.
- **Audit the recommender for narrowing.** The diversity regularization (λ = 0.30) exists because affinity scoring alone would keep recommending what a profile already prefers. Check the same failure mode in any deployed version, including whether the lowest-performing cluster receives more of the same material rather than a different route.
- **Report the outcome measure you intend to change.** The paper's evidence is cluster separation on final grade, which is not the same as a demonstrated effect of recommendations on learning; evaluate the intervention on the outcome it claims to improve.
- **Be careful with learning-style layers.** FSLSM is the mapping mechanism here, and the authors note the criticism that such self-report instruments are subjective and not easily reproducible; if a framework depends on style matching, the construct needs its own validation.

## Limitations

- The clustering inputs are self-reported behavioral, psychological and environmental proxies rather than LMS interaction traces, so the profiles may describe what students report about themselves rather than what they do; the authors call for validation against LMS data.
- The recommendation framework is conceptual: no deployment, no recommendation outcome measures, and no evidence that the affinity-scoring model with FSLSM mapping and diversity regularization improves engagement or performance.
- Strong cluster separation on final grade (η² = 0.770) is measured on the same dataset the clusters were derived from, so it is an internal-validity result rather than a demonstration that the profiles predict outcomes in a new cohort.
- The study is a secondary analysis of anonymized records from an unspecified institutional context, which limits what can be said about transfer to other institutions or course designs.

## Citation

Najem, K., Zaoui Seghroucheni, Y., & Ziti, S. (2026). [Behavioral clustering for adaptive learning object recommendation in higher education using learning analytics for personalized student success](https://doi.org/10.1007/s44217-026-02181-7). *Discover Education, 5*, 994.