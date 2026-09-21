---
title: "Distinguishing performance gains from learning when using generative AI"
created: "2026-05-14T04:33:04-04:00"
updated: "2026-09-20T08:50:39-04:00"
type: article
foundations: [cognitive-offloading, critical-thinking]
pedagogy: [metacognition, self-regulated-learning, scaffolding, motivation, self-efficacy, transfer-of-learning]
technology: [generative-ai, llm]
assessment: [learning-gains, assessment]
research_method: [position paper]
level: [higher ed, k 12]
sources: ['raw/papers/2605.13731.md']
confidence: high
audience: [researchers, instructors, instructional designers]
---

> **Synthesis:** Yan, Greiff, Lodge and Gašević argue that the field is measuring the wrong thing. [[generative-ai|Generative AI]] reliably raises *performance* — the observable output of a task carried out with the tool's support — while the evidence that it produces *learning*, an enduring change evidenced by independent retention and transfer, is largely missing. Their worked example is the literature's own headline number: a meta-analysis of 69 experimental studies reported that ChatGPT and similar tools improve student "[[learning-gains|academic performance]]" with a large effect of *g* = 0.7, yet the outcomes pooled were immediate task success rather than delayed, unassisted measures of what [[learners]] retained. They then walk through the three psychological processes that durable learning depends on — cognitive load, [[metacognition]], and [[self-efficacy]] — and show that generative AI can reduce the first, displace the second, and inflate the third while leaving learning untouched. The piece is a two-page comment in *Nature Reviews Psychology*, so it contributes framing rather than new data: a vocabulary for the conflation, and a research agenda built on process-oriented assessment.

## Core Argument

**Performance and learning are distinct constructs, and the distinction is well established outside [[ai-education|AIED]].** Performance is observable behavior during task execution, and it is sensitive to external support — a learner's output can improve because a tool supplied something, not because the learner changed. Learning is an enduring change in knowledge or behavior that follows from experience, and it is demonstrated by *independently retaining and transferring* what was learned (Soderstrom & Bjork, 2015 — the piece's central citation). Their illustration is pre-AI and deliberately mundane: a student can perform well on a test after cramming the night before and still fail to retain or apply the knowledge a week later. Performance was high; learning did not happen.

**The AIED literature mostly reports performance while calling it learning.** The paper's indictment is specific. A [[meta-analysis-systematic-review|meta-analysis]] of 69 experimental studies of ChatGPT and other generative AI tools in [[k-12]] and tertiary education set out to measure the impact on "student learning" — and reported that the tools improve student "academic performance" with a Hedge's *g* of 0.7 (Deng et al., 2025). The effect size is large, and the authors' reading is that it "probably reflects immediate task success rather than learning." The conflation is not a wording slip: it is in the outcome measures, in the labels attached to them, and in how the magnitude is then reported onward.

**Where the same study measured what happens after the tool is taken away, the gains shrink.** A study of [[higher-ed|undergraduates]] giving quality [[peer-assessment|peer feedback]] with generative AI assistance found significant performance boosts; the improvements *diminished once the assistance was removed* (Darvishi et al., 2024). That is the signature the distinction exists to catch — a gain that lives in the tool, not in the learner, and that therefore cannot be attributed to learning at all.

## The three processes durable learning depends on

The piece organizes its argument around cognitive load, metacognition and self-efficacy, and shows generative AI cutting a different way in each.

**Cognitive load: reduced load is not the same as deeper processing.** Students who used ChatGPT to research socio-scientific issues reported significantly *lower* cognitive load than students using traditional research tools such as web search engines (Stadler et al., 2024). Through the lens of cognitive load theory, offloading domain-specific work to a model frees working-memory resources. The paper's move is to refuse the next step: freed capacity is only useful if it is spent on the processing that produces encoding. In the same research, undergraduates who relied heavily on ChatGPT for information gathering showed **weaker argumentation and reasoning than those who used traditional, cognitively demanding research methods**. Ease of processing and depth of processing are separate variables, and GenAI moves them in opposite directions.

**Metacognition: the evaluative loop gets offloaded rather than exercised.** A randomized controlled study of argumentative essay writing found that frequent generative AI use fostered **"metacognitive laziness"** in undergraduates (Fan et al., 2024): learners handed the evaluative tasks to the tool — reviewing task criteria, checking their drafts against the rubric, reflecting critically on the material — rather than doing that work themselves. These are exactly the operations that let a learner judge the quality of their own work, locate what needs improving, and [[self-regulated-learning|regulate their own learning]]; offloading them short-circuits the planning–monitoring–evaluating cycle at the point where it would otherwise be doing its work. The paper links this to the [[cognitive-offloading|over-reliance]] literature showing that external tools can displace internal cognitive effort and reduce the ability to retain and transfer knowledge independently (Zhai et al., 2024).

**Motivation: delegating the metacognitive work removes the learner from the task.** If a learner's role in completing a task diminishes, [[motivation|intrinsic motivation]] follows it down. From [[self-determination-theory|self-determination theory]], intrinsic motivation depends on [[agency|autonomy]] and [[active-learning|active engagement]] (Ryan & Deci, 2020); delegating planning, monitoring and evaluating to a model reduces participation and the sense of control. The supporting evidence is a review finding that undergraduates who interacted frequently with generative-AI [[conversational-ai|chatbots]] for domain knowledge reported **lower learning autonomy** than students who used them infrequently (Zhai et al., 2024).

**Self-efficacy: confidence rises while independence erodes.** The sharpest of the three paradoxes. Among university students, frequent generative AI use raised perceived confidence and efficiency on academic tasks *and* increased technological dependence in the same learners (Zhang & Xu, 2025). The paper's concern is the long tail: dependence of that kind erodes the capacity for independent learning and reduces resilience when a new challenge arrives without the tool. A self-efficacy measure taken during AI-assisted work therefore reads high at the moment the underlying capability may be declining — which makes it a poor outcome variable for studies claiming that AI improves learning.

## Theoretical Framework

Generative AI can act as a **cognitive tool** that amplifies thinking or a **cognitive crutch** that replaces it, and the difference is not the model but what the learner is still doing while it operates. Mapped onto the [[self-regulated-learning]] cycle, performance gains without metacognitive engagement describe a specific failure: the loop is short-circuited before planning, monitoring and evaluating are exercised, so nothing in the learner's own repertoire develops. The paper's framing also explains why this is hard to see from the outside — an AI-assisted and a genuinely learned performance can look identical on the artifact, and only diverge on the unassisted measure, which is usually not collected.

## Research Agenda

The authors propose a [[cognitive-psychology]]-informed agenda with three moves.

1. **Differentiate learning from performance in the measures themselves** — use process-oriented [[assessment]] such as [[transfer-of-learning|retention and transfer tests]], and testing-effect or delayed-recall designs, to separate genuine learning from task performance in AI-supported contexts.
2. **Clarify how generative AI affects encoding, consolidation and retrieval.** The relationship between cognitive load and deep encoding is unresolved; paradigms from cognitive load theory can be used to probe it, and identifying the mechanisms is what would let a claim about learning be mechanistic rather than correlational.
3. **Study long-term effects** — knowledge retention and skill development over time, and how AI-assisted learning interacts with [[prior-knowledge|prior knowledge]], which the authors flag as unexamined.

## Implications for AIED design and evidence

The distinction changes what a study has to measure, and the knowledge base already contains the causal demonstration the comment asked for. [[generative-ai-guardrails-harm-learning]] reports a field [[rct]] in which an unguarded GPT-4 style tutor raised assisted practice performance while *reducing* later unassisted exam scores, and a [[guardrails|guardrailed]] 'hint-not-answer' tutor eliminated the harm — the performance/learning gap measured on both sides, in one design. [[metacognitively-discordant-completion-genai-2026]] documents the metacognitive failure in its most uncomfortable form: learners who notice they do not understand and submit the AI-assisted answer anyway. [[absent-cognitive-baseline-2026]] gives the classroom-level version of the self-efficacy paradox, [[cognitive-offloading-llm-synthesis-writing]] shows the offloading profile differing by what is offloaded rather than how much, and [[shaw-nave-cognitive-surrender-2026]] names the disposition that makes delegation habitual. For designers, the practical consequence is that optimizing for task success is not a neutral objective — a system tuned on assisted performance can be working against the outcome its own evaluation claims.

## What this means for practice

- **Instructors.** Score an unassisted version of the task. Undergraduates who produced quality peer feedback with generative AI assistance showed significant performance boosts that *diminished once the assistance was removed* — the gain lived in the tool, not in the learner.
- **Instructors.** Require learners to do the rubric-checking, draft-evaluation and reflection themselves. In a randomized controlled study of argumentative essay writing, frequent generative AI use fostered "metacognitive laziness" in undergraduates, who handed the evaluative work to the tool instead of [[metacognition|doing it]].
- **Instructors.** Spend the working memory that offloading frees on deeper processing rather than on finishing faster: undergraduates who relied heavily on ChatGPT for information gathering showed weaker argumentation and reasoning than those who used traditional, cognitively demanding research methods.
- **Designers.** Do not tune a system on assisted task success. Perceived confidence and efficiency measured during AI-assisted work read high while technological dependence rises in the same learners, so an evaluation run inside the tool can certify the outcome it is eroding.
- **Researchers.** Label and measure the two constructs separately: a [[meta-analysis-systematic-review|meta-analysis]] of 69 studies reported that generative AI improves student "academic performance" with a Hedge's *g* of 0.7 while pooling immediate task success, and only [[transfer-of-learning|retention and transfer]] measures taken after the tool is gone can support a learning claim.

## Limitations

- **The piece reports no primary data.** It is a comment in *Nature Reviews Psychology* (4, 435–436) that re-reads others' results, so it can reframe a literature but cannot establish that the performance/learning gap holds in any particular course.
- **Its central claim is an argument from what was measured.** The indictment that the field reports performance and calls it learning is inferred from the pooled outcome measures — immediate task success across the 69 studies — not from a delayed unassisted measure that failed.
- **The mechanism claims lean on a small set of cited results.** The cognitive load, metacognition, motivation and self-efficacy arguments each rest on one or two studies, so they function as framing for future tests rather than as demonstrated effects.
- **The authors state the evidence base is incomplete.** How generative AI influences encoding, consolidation and retrieval is unresolved, and the interaction between AI-assisted learning and prior knowledge "remain[s] to be examined" — the agenda is a call for research, not a settled finding.

## Connected Concepts

- [[cognitive-offloading]] — the displacement of internal cognitive effort
- [[metacognition]] — the evaluative reflection generative AI may bypass
- [[self-regulated-learning]] — the planning–monitoring–evaluating loop at risk
- [[self-efficacy]] — confidence that can rise as capability declines
- [[motivation]] — intrinsic motivation and the learner's diminished role
- [[self-determination-theory]] — autonomy and engagement as motivational preconditions
- [[transfer-of-learning]] — the durable-knowledge criterion
- [[prior-knowledge]] — an interaction the authors flag as unexamined
- [[scaffolding]] — design that preserves cognitive engagement
- [[socratic-method]] — dialogue that promotes elaboration
- [[assessment]] — the measures that decide what counts as learning
- [[learning-gains]] — the outcome the performance/learning distinction refines
- [[generative-ai]] — the technology under analysis
- [[theory-development-aied]] — theory development in AI in education
- [[research-methods-aied]] — the methodological conflation the piece diagnoses

- [[cognitive-offloading]] — the displacement of internal cognitive effort
- [[metacognition]] — the evaluative reflection generative AI may bypass
- [[self-regulated-learning]] — the planning–monitoring–evaluating loop at risk
- [[self-efficacy]] — confidence that can rise as capability declines
- [[motivation]] — intrinsic motivation and the learner's diminished role
- [[self-determination-theory]] — autonomy and engagement as motivational preconditions
- [[transfer-of-learning]] — the durable-knowledge criterion
- [[prior-knowledge]] — an interaction the authors flag as unexamined
- [[scaffolding]] — design that preserves cognitive engagement
- [[socratic-method]] — dialogue that promotes elaboration
- [[assessment]] — the measures that decide what counts as learning
- [[learning-gains]] — the outcome the performance/learning distinction refines
- [[generative-ai]] — the technology under analysis
- [[theory-development-aied]] — theory development in AI in education
- [[research-methods-aied]] — the methodological conflation the piece diagnoses
- [[cognitive-surrender]]

## Connected Articles

- [[generative-ai-guardrails-harm-learning]] — The causal demonstration that guardrails removed the assisted-practice harm
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitive laziness in its most visible form: aware pass-through of non-understanding
- [[absent-cognitive-baseline-2026]] — Why AI-native students cannot locate their own cognitive boundary
- [[cognitive-offloading-llm-synthesis-writing]] — Profiling what gets offloaded in LLM-mediated writing
- [[shaw-nave-cognitive-surrender-2026]] — Cognitive surrender as a disposition, not an accident
- [[weidlich-chatgpt-effect-search-cause-2025]] — An effect in search of a cause: the same critique of headline effect sizes
- [[pedagogy-ai-mistakes]] — Using AI errors as learning opportunities rather than outsourcing judgment
- [[zerkouk-comprehensive-review-its-2025]] — Intelligent tutoring evidence that conflates task success with learning

## Citation

Yan, L., Greiff, S., Lodge, J. M., & Gašević, D. (2025). [*Distinguishing performance gains from learning when using generative AI*](https://doi.org/10.1038/s44159-025-00467-5). *Nature Reviews Psychology, 4*, 435–436.
