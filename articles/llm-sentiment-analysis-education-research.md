---
title: "LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments"
created: "2026-05-28T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-literacy]
technology: [generative-ai, learning-analytics, llm, edtech-platform]
assessment: [automated-assessment, formative-assessment]
stakeholders: [student-experience]
research_method: [mixed methods, case study]
audience: [researchers]
level: [higher ed]

sources: ['raw/papers/2605.27403.md']
confidence: medium
discipline: [language learning]
page_kind: [framework, evaluation]
---

> **Synthesis:** **[[llm]]-Assisted Sentiment Analysis for [[mixed-methods-research|Mixed-Methods]] Education Research** demonstrates how LLMs can serve as scalable [[qualitative-research|qualitative research]] assistants, enabling researchers to investigate multiple demographic variables simultaneously rather than being limited to simple binary comparisons. Using 151 longitudinal written reflections from a study abroad program, the authors show that LLM-assisted sentiment analysis combined with statistical testing can uncover granular patterns: prior experience living abroad was the only personal variable that significantly impacted students' sentiments about their language and communication behaviors. This workflow bridges computational and qualitative methods, suggesting that LLMs can reduce the bottleneck of manual qualitative coding without replacing the interpretive depth of thematic analysis. The approach has implications for [[higher-ed]] research methodology, complementing existing [[learning-analytics]] pipelines and extending mixed-methods capabilities beyond what has been possible with [[automated-assessment|Automated Grading]] and [[formative-assessment]] systems alone. The paper connects to discussions about [[educational-development]] in equipping researchers with AI literacy for [[research-methods-aied|methodological]] innovation, and relates to [[ai-literacy]] as both a tool for researchers and a consideration in how computational methods change the practice of qualitative inquiry.

- LLM-assisted sentiment analysis enables comparison across 7 identity/lived-experience variables simultaneously
- Only prior experience living abroad significantly impacted students' communication sentiments
- The workflow preserves qualitative depth while adding statistical power
- Implications for [[learning-analytics]] and [[student-experience]] research methodology

## What this means for practice

- **Researchers.** Treat the model as an additional rater rather than ground truth: label a sample by hand as well, compute Cohen's kappa against the LLM at each time point (this study reported κ = 0.52 to 0.67), and reexamine quotations where the two disagree.
- **Researchers.** Partition sentiment counts by each identity and lived-experience variable and run the tests per partition (Shapiro-Wilk for normality, then Student's t-test or the Wilcoxon rank-sum test) instead of reporting one pooled trend — only prior experience living abroad produced statistically significant differences across all three reflection time points.
- **Researchers.** Keep manual quote extraction in the pipeline and delegate only the well-scoped labeling task; the LLM produced irrelevant quote lists here, so all analyzed quotations were extracted by hand.
- **Researchers.** Budget for prompt iteration, output filtering, and the scripting and data-management setup before promising laboratory efficiencies — the study's prompts needed repeated tuning, the model produced extraneous commentary and duplicate labels for single quotes, and the authors question the payoff for small or one-off datasets.
- **Researchers.** Use human–LLM divergence as an analytic resource: here the model assigned affect to statements the human coder read as neutral and descriptive, and those disagreements drove inter-rater discussion that sharpened coding criteria.

## Limitations

- The 151 reflections came from 51 of 80 students at a single large, research-intensive institution in the southwestern United States.
- Measured effects were small to medium (Glass rank biserial coefficients from -.289 to .383 for the significant comparisons), so findings may not extend to other study abroad programs, particularly language immersion programs or longer stays.
- The program was a month-long condensation of a semester-long course, and the analysis used three of the four reflection time points (two students omitted Reflection 3), with free time and pre-program arrival in Japan likely shaping what students wrote.
- Model agreement was weakest at the first time point: 20% of Llama3's sentiment labels for Reflection 1 were not identified by the human coder, compared with 8% for Reflection 3 and 7% for Reflection 4.

## Connected Concepts

- [[higher-ed]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[educational-development]]
- [[ai-literacy]]
- [[student-experience]]
- [[educational-nlp]]
- [[research-methods-aied]]
## Connected Articles

- [[llm-student-misconception-identification]] — What Don't You Understand? Using Large Language Models to Identify and Characterize Student Misconceptions About Challenging Topics
- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive Offloading in Student–AI Collaboration: A Longitudinal Analysis of Prompting Strategies
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple Domains
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis

## Citation

Xiomara Gonzalez, Gabriella Coloyan Fleming, Andrew Katz, Maya Denton, Jessica Deters (2026). [LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments](https://arxiv.org/abs/2605.27403). arXiv preprint.
