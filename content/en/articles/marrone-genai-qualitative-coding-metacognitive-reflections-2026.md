---
title: "Evaluating Generative AI as a Supportive Analytic Partner in Qualitative Coding of Metacognitive Student Reflections"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/marrone-genai-qualitative-coding-metacognitive-reflections-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [case study]
pedagogy: [metacognition, reflection]
technology: [generative-ai, llm-training-and-fine-tuning, human-in-the-loop-ai]
methods: [ai-assisted-educational-research, qualitative-research]
audience: [researchers, instructors, educational technology developers]
level: [secondary]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Marrone, Barthakur, Randall, Mottaghi, Kovanovic and De Laat report a multi-stakeholder case study in which a fine-tuned [[generative-ai|generative AI]] model classified sub-elements of [[metacognition]] in 14,100 natural classroom reflections from a South Australian secondary school. Built from 4,631 manually coded reflection artifacts (18,883 training samples) through a nine-stage co-design process with educators and state education department staff, the fine-tuned GPT-4o-mini model reached 81.94% overall accuracy on the held-out test set, yet it detected the presence of metacognitive constructs without assessing their quality or relevance. The authors argue that GenAI should be positioned not as a replacement for human judgment nor as a mere [[human-in-the-loop-ai|human-in-the-loop]] assistant, but as a supportive analytic partner whose outputs surface boundary cases that provoke renewed human interpretation.

## Key Findings

1. **A large naturalistic corpus, coded by hand at sentence level.** The dataset held 14,100 reflections written between 2018 and 2023 by students aged 15-18; after preprocessing (38 exact duplicate rows removed), the research team manually coded 4,631 reflection artifacts into 18,883 labeled samples, 96.1% single-label and 3.9% multi-label, distributed as None (47.4%), Strategy Choice (18.9%), Reflection on Learning (16.5%), Goal Setting (12.4%) and Effort Regulation (8.7%).
2. **Strong overall accuracy, uneven across constructs.** On the final split (80% training, 10% validation, 10% testing) the fine-tuned GPT-4o-mini model reached 81.94% overall accuracy, while the abstract and conclusion report 80.98%. Full-dataset per-construct accuracy ranged from Goal Setting at 91.28% and No metacognition at 88.24% to Strategy Choice at 81.16%, Reflection on Learning at 67.44% and Effort Regulation at 60.74%.
3. **More training data helped overall, but not every construct.** Overall accuracy rose from 71.62% with 100 samples to 78.78% with 500 and 79.90% with 1,000. Reflection on Learning never exceeded 72% accuracy even with the full dataset, while Effort Regulation was most accurate on only 100 samples (69.49%).
4. **Model quality was downstream of human reliability.** In the first round of independent double coding (49 reflections), inter-rater agreement was low to moderate: Strategy Choice κ = 0.51, Effort Regulation κ = 0.44, Goal Setting κ = 0.35, Reflection on Learning κ = 0.32. After a calibration meeting and codebook refinement, a second round (84 reflections) reached Goal Setting κ = 1.00, Strategy Choice κ = 0.58, Effort Regulation κ = 0.57 and Reflection on Learning κ = 0.52, and the third round achieved full agreement across all constructs.
5. **Co-design carried real cost.** The nine-stage workflow ran from May to November 2024 and took approximately 744 hours; nearly 500 hours of specialist labor went to algorithm development alone, and educator feedback renamed Effort Regulation to "Sustained Effort."

## A model trained on negotiated meaning

The coding framework began with theory. Drawing on the [[self-regulated-learning|self-regulated learning]] literature (Zimmerman 2002; Pintrich et al. 2000), the team identified four sub-elements of metacognition — Goal Setting, Strategy Choice, Reflection on Learning and Effort Regulation — and annotated at the sentence level using character-position-based text selection, so that multiple labels could apply to one sentence. One deliberate rule was to code Strategy Choice only when an explicit learning strategy was mentioned, excluding inferred strategies for transparency and replicability.

The base model was GPT-4o-mini (gpt-4o-mini-2024-07-18), chosen because OpenAI's managed service supports supervised fine-tuning with direct weight updates. Hyperparameter tuning focused on the learning rate multiplier (LRM): values of 0.5, 1.0 and 1.5 produced negligibly different Macro-F1 scores (0.7541-0.7552), so LRM 1.0 was selected (Macro-F1 0.7552, overall accuracy 80.40%). The researchers emphasize that the model learned patterns from human-labeled data without the theoretical commitments and contextual judgments that shaped human coding: it never reasoned with theory, engaged in reflexive dialogue, or adjudicated conceptual disagreements.

## Why some constructs resist classification

The accuracy pattern tracks human agreement. The constructs humans found hardest to agree on in round one — Reflection on Learning (κ = 0.32) and Effort Regulation (κ = 0.44) — were the ones the model classified least accurately with the full dataset (67.44% and 60.74%), while Goal Setting, which reached perfect human agreement after calibration (κ = 1.00), also reached the highest model accuracy (91.28%, improving from 84.4% at 100 examples). This leads the authors to argue that accuracy must be understood not as a numerical threshold but as a function of trust, interpretability and contextual alignment, and that some constructs resist "easy" classification, leaving human interpretive insight essential. The model could detect the existence of metacognitive constructs, but it lacked the pedagogical and contextual grounding to assess their quality or relevance and required significant human effort to deploy.

## From human-in-the-loop to supportive analytic partner

The paper's central argument is conceptual: it problematizes the common human-in-the-loop framing, in which the human supervises or validates model decisions, and proposes instead that AI be treated as a supportive analytic partner whose inclusion requires careful epistemic positioning — similar to inducting a new human coder through shared dialogue, theory alignment and critical reflection. In practice, this meant that AI outputs became inputs to human meaning-making: after each round of training, samples of AI classifications were reviewed with particular attention to misclassified or ambiguous cases, and those reviews prompted discussion, refinement of construct definitions, and revisions to the codebook that fed the next round of coding and retraining. The model did not interpret meaning, but its consistent application of learned patterns at scale made latent issues in the coding schema visible. The authors align with hybrid approaches that use AI for initial categorization refined through targeted manual review, and sketch downstream uses: teacher-facing dashboards that summarize metacognitive patterns across a cohort, and student-facing tools that offer real-time, personalized prompts toward more specific goals.

## What this means for practice

- **Researchers.** Treat AI classifications as inputs to interpretation rather than validated findings: the model flagged the presence of metacognitive constructs (91.28% for Goal Setting) but could not judge quality, depth or relevance, so misclassifications and boundary cases should be routed back into human discussion.
- **Instructors.** Sentence-level codes can populate dashboards that summarize metacognitive patterns across a cohort or highlight students with vague goal setting, but judgment about the quality of student reflection stays with the teacher.
- **Educational technology developers.** Budget for the true cost of a trustworthy model: this nine-stage effort took approximately 744 hours, with nearly 500 hours of specialist labor on algorithm development alone, and build explainability in from the start because the model offered no rationales or confidence indicators.
- **Institutions.** Keep educators and education department staff in the design loop from codebook construction through output validation; the rename of Effort Regulation to "Sustained Effort" shows how stakeholder feedback changes what the model is trained to see.

## Limitations

- The model's generalizability to other schools, age groups or educational systems is untested; variability in school-specific language, disciplinary expectations and student writing ability may limit transferability.
- The five metacognitive codes were derived from a specific theoretical framework, and alternative coding schemes could yield different interpretive results.
- The human coding process was theory-driven and therefore subject to bias and interpretive drift, which the AI may have inherited during training.
- The model was not designed to provide qualitative feedback or nuanced explanations of its decisions, so without explainability mechanisms or confidence indicators there is a risk that educators over-rely on AI classifications without adequate critical engagement.
- The choice of model and prompting strategy may have influenced the results; the authors trained the selected model three times with randomly sampled data at each sample size to reduce this risk, but different models or prompt designs could produce substantially different outcomes.

## Citation

Marrone, R., Barthakur, A., Randall, D., Mottaghi, N., Kovanovic, V., & De Laat, M. (2026). Evaluating Generative AI as a Supportive Analytic Partner in Qualitative Coding of Metacognitive Student Reflections. *Journal of Educational Data Mining*, 18(1), 318-340.
