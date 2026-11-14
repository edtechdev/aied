---
title: "Student Responses to Cognitive Conflicts in GenAI-Assisted Learning: A Covariate-Dependent Markov Chain Analysis on Human-AI Interactions"
created: "2026-11-11T07:41:44-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Luo and colleagues tracked exchanges between 21 undergraduates and a GenAI writing assistant, coding each reply as a negative, neutral or positive response to a [[metacognition|cognitive conflict]], and modeled what students did next. The pattern depended on how far the AI's output departed from what the student believed and could handle. Low performers, once negative, tended to stay negative as conflict grew; high performers stayed positive until conflict became severe, then joined the same retreat. At the highest intensity both groups converged on rejection and stopped moving. The practical reading is that conflict is neither something to maximize nor to eliminate: the same avoidance can mark either critical judgment or overload, and the authors argue the support has to differ by student and by moment.

## Key Findings

1. **Conflict intensity changed what students did next.** Whether a student's next reply was negative, neutral or positive depended on how much the AI's output clashed with their beliefs and how complex it was, not only on the state they were already in.
2. **High performers stayed positive; low performers did not.** Students whose essays scored better were far more likely to move from one positive response to another, and they rarely jumped straight from rejecting the AI to accepting it.
3. **Low performers froze once negative.** As conflict intensity rose, their chances of moving from a negative state to a neutral or positive one dropped sharply. They stayed where they were instead of re-engaging.
4. **High performers' confidence collapsed only at high intensity.** Their tendency to remain positive fell steeply as conflict rose, so the group that usually self-corrected ended up rejecting too.
5. **Once high performers rejected an output, more conflict changed nothing.** Their negative states were insensitive to intensity, which suggests a settled judgment rather than an ongoing struggle.
6. **The pattern was phased, not gradual.** Moderate conflict produced movement among states; severe conflict produced the highest chance of tipping into a negative state and then inertia.
7. **A negative response is ambiguous.** The coding cannot distinguish a student catching a [[hallucination-risk|hallucination]] from a student shutting down in frustration, and the authors say that acceptance and rejection on their own do not indicate the quality of learning.

## What the study did

The study recruited 21 first- to third-year undergraduates from two English-medium universities in China, most of them in science and technology majors. Participants worked individually in a laboratory: they explored an educational dataset derived from a public Kaggle student-performance file and wrote a short academic essay with GenAI assistance.

The platform was built on the ChatGPT-4o API with no [[llm-training-and-fine-tuning|fine-tuning]] and no pre-prompts, a deliberately neutral starting point. Training consisted of a short lecture on the tool and a practical exercise. Chat logs and screen recordings captured every prompt and image the student sent; after the session each student sat a semi-structured stimulated-recall interview in which they watched their recording and explained their thinking at points of conflict.

Two doctoral students coded conflict intensity on two dimensions, each scored 1 to 3: the discrepancy between the AI output and the student's existing beliefs, and the conceptual complexity of the output. The two scores were multiplied and the product banded as low, medium or high, with acceptable agreement between the coders. Response states were defined by four experts as negative (pointing out errors, rejecting, criticizing), neutral (no clear tendency, uncertainty, re-[[prompt-engineering|prompting]] or regenerating) and positive (acceptance, praise, revising one's own view, continuing with instructions). A subset of segments was discussed to fix the definitions and the rest were coded independently, again with acceptable agreement. Task performance was grouped after coding by clustering rubric scores for content, analysis, organization, [[writing-education|writing quality]] and word limit; the coders did not know the group when they coded.

## How the model reads a transition

The model assumes that the probability of the next response state depends only on the current state and the current conflict intensity, not on the full history of the conversation. Multinomial logistic regression estimates those probabilities, with the negative state as the baseline because it was the largest category. Each coefficient describes how one unit of conflict intensity shifts the odds of a particular transition, so the odds ratios show how much a given move became more or less likely as the AI's output became harder to reconcile with what the student believed.

That is where the two headline estimates belong. In the fitted model, one unit of additional conflict was associated with roughly 91.7% lower odds that a low performer would leave a negative state, and roughly 98.2% lower odds that a high performer would stay positive. Read together, they describe the same end point reached from opposite directions.

The authors also give the transition matrix an educational reading. Stability shows up as high diagonal probabilities — a student who stays positive or stays negative. Volatility shows up as low diagonal and high off-diagonal probabilities, meaning the student moves among states without settling. They treat volatility as a possible sign that a student lacks stable metacognitive strategies, which is why the same surface behavior can mean different things for different students.

That ambiguity is the paper's most important caveat. A negative state can be a student correctly catching a fabricated claim that the tool presented confidently — the exercise of critical judgment the task is meant to elicit — or a student who is frustrated out of cognitive resources for evaluating anything. The coding scheme cannot tell these apart, and the authors say so directly: acceptance and rejection at the behavioral level do not by themselves indicate the quality of learning.

Their interpretation of the high-intensity convergence draws on cognitive closure and [[trust-calibration|authority]] effects. When conflict exceeds what a student can process, maintaining the existing stance becomes the least effortful option, and GenAI's fluent delivery can make its output feel authoritative even as the student's capacity to check it declines. The moment students most need critical distance is the moment they are least able to hold it.

## What this means for practice

- **Instructors:** Teach students to anticipate conflict, not just resolve it. Asking them to predict where they will get confused, and to plan what they will do when they do, is presented as a way to protect [[metacognition|metacognitive]] capacity during [[generative-ai|GenAI]] use.
- **Designers:** Detect conflict while it is happening. The authors propose system responses to frustration — for example, prompting a student to try a different topic while more information is gathered — to break a negative loop before it hardens.
- **Designers:** Differentiate by response pattern. Students who oscillate need [[scaffolding|scaffolding]] that stabilizes their judgment; students who hold a view too confidently need prompts that require them to criticize their own position.
- **Administrators:** Treat conflict handling as part of [[ai-literacy|AI literacy]] and [[self-regulated-learning|self-regulated learning]], not as a support service bolted onto tool access. The authors argue policy should move past access and output accuracy toward the cognitive and affective demands of sustained interaction.
- **Researchers:** Separate critical rejection from emotional rejection in the coding scheme. Until that distinction exists, a negative state cannot be read as evidence of thinking either way.

## Limitations

The task was confined to a STEM-domain writing exercise in a controlled laboratory, so the transition probabilities may not transfer to humanities tasks, ordinary classrooms or [[self-directed-learning|self-directed]] use. There is no longitudinal data across longer interaction cycles, which likely understates cumulative effects such as growing familiarity with the tool. The coding captures emotional and behavioral responses but not the reasoning behind them, so a correct rejection of a hallucination and a frustrated shutdown are recorded identically. The study also did not verify GenAI output accuracy, so the same response could be right or wrong in ways the analysis cannot see. Twenty-one students generated the 411 coded states, and the group split came from clustering rubric scores rather than a designed contrast; the probabilities describe this sample, not other populations.

## Citation

Luo, Y. T., Liu, T., Pang, P., & Hu, X. (2026). [Student Responses to Cognitive Conflicts in GenAI-Assisted Learning: A Covariate-Dependent Markov Chain Analysis on Human-AI Interactions](https://doi.org/10.1002/jcal.70366). *Journal of Computer Assisted Learning*, 42, e70366. DOI: 10.1002/jcal.70366.
