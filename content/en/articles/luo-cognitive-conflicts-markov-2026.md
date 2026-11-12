---
title: "Student Responses to Cognitive Conflicts in GenAI-Assisted Learning: A Covariate-Dependent Markov Chain Analysis on Human-AI Interactions"
created: "2026-11-11T07:41:44-05:00"
updated: "2026-11-11T08:09:35-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
audience: [researchers, instructors]
sources: ['raw/papers/luo-cognitive-conflicts-markov-2026.md']
source_url: "https://doi.org/10.1002/jcal.70366"
source_depth: full text
confidence: high
foundations: []
pedagogy: [scaffolding, metacognition, self-regulated-learning]
technology: [generative-ai, llm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Luo and colleagues treat each exchange in a student's session with a GenAI writing assistant as a possible cognitive conflict and model the next response. Twenty-one undergraduates at two English-medium universities in China produced 411 coded response states — negative, neutral or positive — while using a ChatGPT-4o interface to write a data-science essay. Conflict intensity was coded low, medium or high from the discrepancy between AI output and the student's beliefs and the output's conceptual complexity. A covariate-dependent Markov chain showed that intensity significantly reshaped transition probabilities: low performers' odds of leaving a negative state fell by about 91.7% per intensity unit, and high performers' odds of staying positive fell by 98.2%. At high intensity both groups converged on rejection, a pattern the authors read as nonlinear regulation of [[metacognition|metacognitive]] response rather than a dose-response curve.

## Key Findings

1. **Conflict intensity significantly changed response-state transitions.** The multinomial models reported Pseudo R² values between 0.08 and 0.34. In the low-performing group all three models were significant (LLR p < 0.05); in the high-performing group the negative model was not significant (LLR p = 0.274) while the neutral and positive models were significant (p < 0.01).
2. **High performers held positive states far more persistently.** Transitions from positive to positive accounted for 67.1% of all positive transition categories in the high-performing group, against 18.5% in the low-performing group. High performers also rarely jumped directly from a negative to a positive state.
3. **Low performers' exits from negative states collapsed as intensity rose.** The coefficient for moving from negative to neutral was −2.493 (OR = 0.083, 95% CI [0.021, 0.325], p < 0.001) and for negative to positive −2.468 (OR = 0.085, 95% CI [0.020, 0.359], p = 0.001), described by the authors as 91.7% and 91.5% lower odds per unit increase in intensity. Students stayed where they were.
4. **Low performers also became more conservative from neutral and positive states.** Neutral to neutral was −1.316 (OR = 0.268, 95% CI [0.099, 0.729], p = 0.010) and neutral to positive −1.301 (OR = 0.272, 95% CI [0.077, 0.961], p = 0.043); positive to neutral was −2.034 (OR = 0.131, 95% CI [0.026, 0.654], p = 0.013), while positive to positive was not significant (p = 0.303).
5. **High performers' positive persistence collapsed under high intensity.** The coefficient for positive to positive was −3.999 (OR = 0.018, 95% CI [0.002, 0.175], p = 0.001), an estimated 98.2% decrease in odds per unit of intensity; positive to neutral was not significant (−1.765, OR = 0.171, p = 0.121).
6. **High performers' negative states were insensitive to intensity.** Negative to neutral was 0.457 (OR = 1.579, 95% CI [0.710, 3.512], p = 0.262) and negative to positive 1.459 (OR = 4.3, 95% CI [0.411, 44.984], p = 0.223). Once these students had rejected the output, more conflict did not move them.
7. **The pattern was phased, not linear.** At moderate intensity transitions increased across a range of states; at high intensity both groups' probability of moving from a neutral or positive state to a negative one reached its highest value, and state changes became conservative. The authors describe the trajectory as moving from fluctuation to inertia or convergence.

## What the study did

The study recruited 21 first- to third-year undergraduates from two English-medium universities in China (52.4% male, N = 11; 61.9% from Science and Technology, 28.6% from Business Management, the remainder from Humanities and Social Sciences). Participants worked individually in a laboratory: they explored an educational dataset derived from a public Kaggle student-performance file and wrote a 1,000 or 2,000-word academic essay with GenAI assistance.

The platform was built on the ChatGPT-4o API with no [[llm-training-and-fine-tuning|fine-tuning]] and no pre-prompts, a deliberately neutral starting point. Training consisted of a 45-minute lecture on the tool and a 20-minute practical exercise. Chat logs and screen recordings captured every prompt and image the student sent; after the session each student sat a semi-structured stimulated-recall interview in which they watched their recording and explained their thinking at points of conflict.

Two doctoral students coded conflict intensity on two dimensions, each scored 1 to 3: the discrepancy between AI output and the student's existing beliefs, and the conceptual complexity of the output. The two scores were multiplied and the product banded as low (1–2), medium (3–4) or high (5–9), with Cohen's κ = 0.71. Response states were defined by four experts as negative (pointing out errors, rejecting, criticizing), neutral (no clear tendency, uncertainty, re-[[prompt-engineering|prompting]] or regenerating) and positive (acceptance, praise, revising one's own view, continuing with instructions); 84 segments from 5 students (20.43%) were discussed to fix the definitions, the remaining 79.57% were coded independently, and Fleiss's κ across all codes was 0.795.

Task performance was grouped after coding with K-means clustering (K = 2) on rubric scores for content, analysis, organization, [[writing-education|writing quality]] and word limit; a non-parametric test reported U = 0.17, p < 0.01 between clusters. Coders did not know the group when coding.

## How the model reads a transition

The model assumes that the probability of the next response state depends only on the current state and the current conflict intensity, not on the full history of the conversation. Multinomial logistic regression with a softmax function estimates those probabilities, with the negative state as the baseline because it was the largest category. Each coefficient describes how one unit of conflict intensity shifts the log-odds of a particular transition, and the odds ratios show the size of that shift.

The authors also give the transition matrix an educational reading. Stability shows up as high diagonal probabilities — a student who stays positive or stays negative. Volatility shows up as low diagonal and high off-diagonal probabilities, meaning the student moves among states without settling. They treat volatility as a possible sign that a student lacks stable metacognitive strategies, which is why the same surface behavior can mean different things.

That ambiguity is the paper's most important caveat. A negative state can be a student correctly catching a [[hallucination-risk|hallucination]] — the exercise of critical judgment the task is meant to elicit — or a student who is frustrated and out of cognitive resources for evaluating anything. The coding scheme cannot tell these apart, and the authors say so directly: acceptance and rejection at the behavioral level do not by themselves indicate the quality of learning.

Their interpretation of the high-intensity convergence draws on cognitive closure and [[trust-calibration|authority]] effects. When conflict exceeds what a student can process, maintaining the existing stance becomes the least effortful option, and GenAI's fluent delivery can make its output feel authoritative even as the student's capacity to check it declines. The moment students most need critical distance is the moment they are least able to hold it.

## What this means for practice

- **Designers:** Detect conflict while it is happening. The authors propose system responses to frustration — for example, prompting a student to try a different topic while more information is gathered — to break a negative loop before it hardens.
- **Instructors:** Teach the anticipation of conflict, not just its resolution. Asking students to predict where they will get confused, and to plan what they will do when they do, is presented as a way to protect [[metacognition|metacognitive]] capacity during [[generative-ai|GenAI]] use.
- **Designers:** Differentiate by response pattern. Students who oscillate need [[scaffolding|scaffolding]] that stabilizes their judgment; students who hold a view too confidently need prompts that require them to criticize their own position.
- **Administrators:** Treat conflict handling as part of [[ai-literacy|AI literacy]] and [[self-regulated-learning|self-regulated learning]], not as a support service bolted onto tool access. The authors argue policy should move past access and output accuracy toward the cognitive and affective demands of sustained interaction.
- **Researchers:** Separate critical rejection from emotional rejection in the coding scheme. Until that distinction exists, negative states cannot be read as evidence of thinking either way.

## Limitations

The task was confined to a STEM-domain writing exercise in a controlled laboratory, so the transition probabilities may not transfer to humanities tasks, ordinary classrooms or [[self-directed-learning|self-directed]] use. There is no longitudinal data across longer interaction cycles, which likely understates cumulative effects such as growing familiarity with the tool. The coding captures emotional and behavioral responses but not the reasoning behind them, so a correct rejection of a hallucination and a frustrated shutdown are recorded identically. The study also did not verify GenAI output accuracy, so the same response could be right or wrong in ways the analysis cannot see. Twenty-one students generated the 411 states, and the group split came from K-means clustering of rubric scores rather than a designed contrast; the probabilities describe this sample, not other populations.

## Citation

Luo, Y. T., Liu, T., Pang, P., & Hu, X. (2026). [Student Responses to Cognitive Conflicts in GenAI-Assisted Learning: A Covariate-Dependent Markov Chain Analysis on Human-AI Interactions](https://doi.org/10.1002/jcal.70366). *Journal of Computer Assisted Learning*, 42, e70366. DOI: 10.1002/jcal.70366.
