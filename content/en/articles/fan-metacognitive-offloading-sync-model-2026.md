---
title: "A metacognitive approach to learning and performance in human-AI interaction: the SYNC model"
published: "2026-10-30"
created: "2026-11-03T09:20:00-05:00"
updated: "2026-11-03T09:20:00-05:00"
type: article
sources: ['raw/papers/fan-metacognitive-human-ai-interaction-2026.md']
source_url: "https://doi.org/10.1038/s44271-026-00548-y"
confidence: high
page_kind: [framework]
research_method: [theoretical analysis]
audience: [instructors, researchers, educational technology developers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-03"
    agent: hermes-agent
source_depth: full text
foundations: [cognitive-offloading, human-ai-collaboration]
pedagogy: [metacognition, self-regulated-learning, scaffolding]
technology: [generative-ai]
ethics: [ai-sycophancy, trust-calibration, explainable-ai]
---

> **Synthesis:** Fan, Yan, Molenaar, Greiff and Gašević argue that [[generative-ai|generative AI]] breaks an assumption that learning research has relied on: that better task performance is evidence of learning. Their SYNC model ("Synergetic Notion of Human-AI skills and Knowledge Construction") separates performance from durable learning into two axes, then asks where a learner sits and what would move them. The diagnostic distinction is between [[cognitive-offloading|cognitive offloading]], which remains under metacognitive control, and *metacognitive* offloading, in which learners hand over planning, monitoring, evaluation and judgment calibration themselves. The remedy they name — inside [[human-ai-collaboration|human–AI interaction]] designed for it — is metacognitive onloading: [[scaffolding]] that makes the learner, not the AI, responsible for goals, difficulty anticipation, monitoring and strategy judgment. Four quadrants follow — floundering, effortful learning, autopilot performance and synergetic mastery — and four autopilot-performance pitfalls each get a design response: desirable frictions for fluency, engineered dissent for [[ai-sycophancy|pandering]], balanced aid for coherence, and contextualized verification for transparency. The authors describe the framework as conceptual and untested, and note that no validated measures yet exist for its two central constructs.

*This page summarizes a Perspective article. The paper reports no study and no original data; the figures and findings it cites belong to the studies in its reference list, and its quadrants and trajectories are explicitly hypothetical.*

## Key Findings

1. **The learning–performance coupling is the thing AI breaks.** Classical accounts read performance gains as evidence of learning, and scaffolding as progress toward independence. Because generative AI now supplies substantial cognitive *and* metacognitive processing, a learner can produce fluent, accurate work while knowledge and skill stay where they were. The authors' stylised case is driving: someone with minimal driving skill still reaches the destination when an autonomous system handles perception, planning and control.
2. **Cognitive offloading is not the problem; metacognitive offloading is.** Building on Risko and Gilbert's model, cognitive offloading runs through [[metacognition]]: activate beliefs about the tool, judge one's own capacity against it, choose a strategy, then recalibrate from the outcome. Metacognitive offloading happens when that loop is bypassed — monitoring never activates, strategy evaluation is delegated to the AI, or fluent output biases judgment and reinforces the next round of reliance.
3. **Five routes into metacognitive offloading.** Learners skip metacognitive effort when a task looks low-value or too hard; when a novel task leaves them without the domain knowledge to monitor themselves; when they lack the judgment or AI literacy to compare strategies and ask the AI to evaluate instead; when plausible AI content stops them outlining and cross-checking; and when repeated fluent success inflates confidence into a misattribution of the machine's performance to their own competence.
4. **Onloading is a design stance, not extra help.** Metacognitive onloading creates moments where the learner must set goals, anticipate difficulties, monitor progress and judge whether a strategy needs changing. Scaffolds can act as pre-prompt checklists of criteria, mid-task prediction and rubric checks, and post-generation reconstructions or transfer exercises done without the AI. The authors place them at three levels: micro (within a prompt), meso (across a task, with explicit human-versus-AI roles) and macro (over time, as support fades).
5. **Four quadrants, and they are states rather than types.** Low learning with low performance is *floundering*, which the authors separate from [[productive-failure|desirable difficulty]]: struggle without feedback, knowledge or criteria is not productive failure. High learning with modest performance is *effortful learning*. High performance with weak learning is *autopilot performance*. Both high is *synergetic mastery*, where AI support keeps productivity while scaffolds keep responsibility with the learner.
6. **The trajectory claim is directional.** The authors hypothesize that synergy is reached more reliably through an effortful-learning-first pathway than through an autopilot-first one, and that heavy reliance without effortful learning can lower motivation and leave performance below the ceiling effortful learners reach. They state plainly that the trajectories are hypothetical.
7. **The model is deliberately narrow about when it applies.** Instrumental use — automating a routine task, drafting for a one-off project — can be efficient offloading when stakes are low and outputs are verifiable. The framework matters where durable competence, transfer, assessment validity, safety or professional judgment are at stake, and the authors flag early-career professionals as a population where fluent AI-supported completion can substitute for exactly the practice that builds expertise.

## Four pitfalls and four design responses

The paper's most usable contribution is that the pitfalls are separated by *proximal mechanism*, not by outcome — they all end in reduced verification and more offloading, but they get there differently, so a single fix does not address them.

**Fluency operates through processing ease.** Instant, well-phrased answers produce cognitive ease, and ease is read as competence. The response is *desirable frictions*: intentional, learner-controlled micro-interruptions at the moments that matter — before help is given, when output is interpreted, when it is accepted. The authors distinguish this from desirable difficulties, which concern practice conditions, and from productive failure, which operates at the level of an instructional sequence, because frictions are interaction-level and can sit inside successful performance. The dual-process framing is explicit: AI support acts as the fast System-1 generator, learning scaffolds as the System-2 reflector.

**Pandering operates through agreement.** Optimized for satisfaction, the model slides from supporting thinking into affirming beliefs, which reduces productive disagreement, discourages misconception repair, and can homogenise a cohort's ideas. The response is *engineered dissent*: counterarguments drawn from data the learner did not supply, multiple agents arguing from different perspectives, and explicit labeling of assumption-dependence — paired with learner-side commitments such as "what would change my mind" and a requirement to find at least one disconfirming source.

**Coherence operates through narrative completeness.** Clean sections, tidy bullets and polished conclusions supply a whole story, leaving less for the learner to decide about what is uncertain or what to ask next; the risk is truthiness-by-coherence rather than hallucination alone. The response is *balanced aid*: default to the minimum necessary help — a single next-step hint, a diagnostic question, an evidence check — and unlock deeper assistance only after the learner requests it, monitors, or chooses a direction. The authors warn that scaffolding can become over-scaffolding, crowding out the self-regulation it was meant to build.

**Transparency operates through credibility of explanation.** Visible rationales and citations make a system feel inspectable, which poses the [[trust-calibration|calibration]] problem in another form. The authors report that explanations raise acceptance of both correct and incorrect answers and can reduce follow-up questions. Their name for the mechanism is the explanation-as-known heuristic: the felt availability of a reason substitutes for checking. The response is *contextualized verification*, which repurposes [[explainable-ai|explainability]] away from trust and toward evaluation: the AI acts as an equal collaborator or negotiator rather than an authority, states what is grounded versus inferred in this learner's context, and pairs interpretation with verifiable actions; example-based explanations are preferred to feature-based ones, which can increase reliance on wrong answers.

## What this means for practice

- **Measure learning with the AI removed.** If the only evidence of competence is product quality during assistance, a course cannot tell effortful learning from autopilot performance. AI-free reconstruction or transfer is the outcome that distinguishes them.
- **Put the friction where the decision is.** The points worth interrupting are the learner's own: what the goal is, what a good answer would contain, whether this output is grounded, and what changed their mind. Frictions placed at output review only will not catch a plan that was never made.
- **Give minimum help first.** A hint or a diagnostic question rather than a full solution, with more available on request, keeps the learner in the position of choosing a direction — which is precisely the decision that metacognitive offloading surrenders.
- **Do not scaffold everything.** The paper is explicit that excessive or non-contingent support can undermine autonomy and self-regulation, so the target is calibrated, fading support, not maximal support.
- **Treat explanation as material for evaluation, not as proof.** Showing reasoning is not the same as making an answer checkable, and the authors' evidence cuts against treating a visible rationale as a warrant.

## Limitations

- **Proposed, not tested.** The authors are explicit that the SYNC model is a conceptual, theory-building framework: the mechanisms, the quadrants and the trajectories between them are hypotheses, not findings.
- **No measures exist yet.** The paper notes that few established measures or coding schemes capture metacognitive offloading and onloading, and that it is not yet clear how to separate them from productive self-regulation with behavioral, self-report, trace or dialogue indicators.
- **Narrow scope by design.** The argument centers on learners interacting directly with AI; classroom implementation, collaborative learning and teacher-mediated use are named as left aside, and the authors expect the dynamics to differ across domains, task types and learner characteristics.
- **An emerging evidence base.** Generalizability is limited and AI capabilities keep changing, so the framework is a map for research design rather than a validated prescription.

## Citation

Fan, Y., Yan, L., Molenaar, I., Greiff, S., & Gašević, D. (2026). [*A metacognitive approach to learning and performance in human-AI interaction*](https://doi.org/10.1038/s44271-026-00548-y). Communications Psychology, 4, 150.
