---
title: "The New Kid on the Tutoring Block: Definitions, Developments, and Future Directions for Hybrid Human-AI Tutoring"
created: "2026-11-09T06:41:06-05:00"
updated: "2026-11-09T06:41:06-05:00"
type: article
page_kind: [framework]
research_method: [position paper]
evidence_context: educational
level: [k 12]
audience: [researchers, administrators, policymakers, instructional designers]
sources: ['raw/papers/wu-hybrid-human-ai-tutoring-architecture-2026.md']
source_url: "https://doi.org/10.26300/bph4-wr91"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [human-ai-collaboration, ai-education]
pedagogy: [scaffolding, student-engagement]
technology: [intelligent-tutoring, adaptive-learning, llm, human-in-the-loop-ai]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups, sustainability]
institutions: [educational-policy-ai]
---

> **Synthesis:** Wu, Gurung, Koedinger and Thomas (2026) treat hybrid human-AI tutoring as a redesign of the division of labor in tutoring rather than a new kind of tool, and organize the field around an "iron triangle" of effectiveness, affordability and scalable reach. They distinguish four emerging architectures — AI-delivered with [[human-in-the-loop-ai|human review]] (Eedi + LearnLM), AI-delivered with human support (an AI literacy tutor; PLUS), alternating human and AI sessions (Saga Technology), and human-delivered with AI augmentation (Tutor CoPilot) — and show through five examples that similar overall levels of human involvement can conceal very different assignments of tutoring functions. The essay's evidence review is sobering: [[intelligent-tutoring|tutoring]] costs run from about \$1,022 to \$3,100 per student for human models against \$15 per student annually for Khanmigo, while only 20 of 800 papers on [[llm|LLM]]-based K–12 tutoring provided strong causal evidence and none did so in U.S. K–12 settings. The authors' conclusion is conditional: AI can make instructional functions abundant, but [[student-engagement|engagement]] and relationships remain the binding constraint, and the [[equity-in-ai-education|equity]] risk is tiered tutoring in which the least advantaged students receive the most AI and the least human attention.

## Key Findings

1. **The contribution is a taxonomy of four architectures, not a new intervention.** The architectures differ in who delivers instruction and who reviews, supports, alternates with or is augmented by AI; they are conceptual starting points, not an exhaustive classification.
2. **Overall human involvement is the wrong summary statistic.** The AI Literacy Tutor and PLUS sit at similar points on a one-dimensional human-involvement spectrum, yet the former uses humans only for engagement and accountability while the latter also directs targeted instruction — so "how much human" misses "which functions."
3. **Human tutoring is effective and expensive.** Recent meta-analyses put effects at roughly 0.29 to 0.40 SD; personnel accounted for 83% of one national scaling blueprint's expenditures at about \$1,022 per student per year, and Saga Education's high-dosage model cost about \$3,100 per student from 2015 to 2019.
4. **AI tutoring is cheaper but its evidence base is thin.** ITS meta-analyses range from effect sizes of 0.01–0.09 and non-significant to 1.07 and significant depending on system and comparison, and a 2026 Stanford SCALE review found only 20 of 800 LLM-tutoring papers with strong causal evidence, none in U.S. K–12.
5. **Access does not produce use.** In a randomized evaluation of Khanmigo, the median student used it on one-third of practice days and in 17% of sessions in which they made a mistake; human tutors' support raised platform use by 71–80%, yet usage stayed low and [[learning-gains|achievement]] did not improve.
6. **The equity risk is structural, not incidental.** If human attention becomes a selectively allocated resource, students with fewer resources may spend more of their tutoring time with AI while advantaged peers retain sustained human relationships, creating tiers rather than closing gaps.

## The iron triangle, and why the division of labor is the lever

The paper's framing device is deliberately borrowed from project management: effectiveness, affordability and scalable reach trade against one another, and the tradeoffs rest on implementation capacity such as protected school time and attendance. Bloom's two-sigma claim supplies the aspiration, but the contemporary numbers are more modest — 0.29 to 0.40 SD — and effect sizes attenuate as programs scale. Cost is the binding constraint behind that attenuation: tutors must be recruited, trained, supervised and paid, and high dosage with ratios of no more than 4:1 multiplies the hours required. A four-year [[rct]] of "short burst tutoring" at \$416 per student annually produced smaller effects than intensive models, which the authors read as the triangle operating in plain sight.

AI enters as a way to change which functions consume human time. Instructional functions — adapting difficulty, giving just-in-time hints, selecting practice — can be delivered at near-zero marginal cost once a system exists, which is why Khanmigo's \$15 per student annually matters more than any single effect size. What AI does not obviously supply is the relational and accountability work: motivation, belonging, monitoring disengagement and following up. The essay's argument is that the interesting design question is therefore not "human or AI" but which functions are assigned where, and how the handoffs are coordinated.

## Four architectures, five examples

In **AI-delivered, human-reviewed tutoring**, AI generates the tutoring and humans act as a quality-control layer. Eedi + LearnLM reviewed every message in its 2025 evaluation; the current version replaces per-message review with a trained model that releases, regenerates or escalates each response. In **AI-delivered, human-supported tutoring**, AI carries ongoing instruction while humans support it: the [[ai-literacy|AI Literacy Tutor]] uses humans purely for engagement and productive platform use, whereas PLUS has virtual tutors read learning data and intervene selectively with explanation, instruction or [[motivation|motivational]] support. **Alternating human-AI tutoring** divides the work across time — in Saga Technology, students rotate on a fixed schedule between a [[adaptive-learning|CAL or ITS platform]] and small-group human instruction. **Human-delivered, AI-augmented tutoring** reverses the arrangement: Tutor CoPilot has an LLM generate real-time [[pedagogy|pedagogical]] suggestions for the human tutor, who remains the student's interlocutor.

The examples do different things to the triangle. Reviewing rather than generating lets a fixed tutor workforce cover more students; human support concentrates scarce attention on motivation and targeted help; alternation cuts human instructional minutes per student while preserving recurring contact; and tutor-facing AI lowers preparation and training costs, widening the pool of people who can tutor. The authors add a second dimension — student-facing versus tutor-facing AI — because the newest PLUS and Saga versions combine both, which is precisely where a one-dimensional spectrum stops describing the design.

## What the evidence can and cannot support

The essay is unusually explicit that the effectiveness side of the triangle is unsettled. ITS estimates vary with comparison condition and outcome measure, and effects are typically smaller on independent or standardized tests than on measures aligned with the system. For LLM tutors the causal base is thinner still: the SCALE review's 20-of-800 finding is the headline, and the absence of U.S. K–12 causal studies means claims about the newest systems rest on pilots, quasi-experiments and vendor evaluations.

Engagement is the mechanism the paper keeps returning to. Making a tutor available does not make students use it at the dosage associated with gains — the "5% problem" in educational technology — and the Khanmigo figures show the gap inside a well-designed product: one-third of practice days, 17% of error sessions. Human support moved platform use by 71–80% without moving achievement, which cuts both ways. It suggests that human attention can affect engagement, and that engagement alone is not sufficient for learning. That is the empirical warrant for hybrid models, and also the reason the authors refuse to claim that any architecture resolves the triangle.

## An agenda at three levels

At the micro level the questions concern the interaction itself: which pedagogical moves AI performs well, when human involvement adds value, how human roles should change as models improve, and which moments — repeated errors, idleness — most reward scarce human attention. The essay also insists that belonging, confidence, [[trust|trust]] and feeling known by a consistent adult are outcomes in their own right, not merely instruments for platform usage. At the meso level the issues are generalization across subjects, grades and populations; durability of benefits; [[privacy|data privacy]]; and integration into schedules, staffing and technology systems, where hybrid models inherit the dosage problems that already afflict school-based human tutoring. At the macro level the questions are [[equity-in-ai-education|equity]] and [[sustainability|sustainability]]: who receives human support, whether allocation follows need or reinforces disparity, and whether AI, tutor time, infrastructure and funding remain viable after pilot money ends.

The methodological precondition is comparability. Cost estimates in the reviewed studies use different denominators and include different components, and effectiveness ranges from topic mastery to [[transfer-of-learning|transfer]], so districts cannot currently compare architectures on the dimensions that decide adoption. The authors call for common effectiveness and cost metrics and for reporting which functions humans and AI actually performed — a modest ask that would make the next generation of studies usable.

## What this means for practice

- **Describe a hybrid model by its function assignments, not its human-to-AI ratio.** Two programs with similar overall human involvement can differ completely in who motivates, who diagnoses and who instructs; ask for the function-by-function division before comparing outcomes.
- **Budget the human layer as an engagement intervention with its own target.** Human support raised AI platform use by 71–80% but did not raise achievement in the cited study, so specify what the human is supposed to change and measure that, rather than assuming contact is sufficient.
- **Treat \$15-per-student AI as a complement, not a substitute, in the cost model.** The gap between AI licensing and \$1,022–\$3,100 human tutoring is real, but the cheap tier is the one with the weakest causal evidence and the lowest observed dosage.
- **Require function-level and cost-denominator reporting in procurement.** Without common metrics, a district cannot tell whether a quoted per-session price covers software, tutor time or both.
- **Screen for tiering before scaling.** If human minutes fall fastest for the students with the least need met elsewhere, a hybrid model can widen gaps while raising average performance.

## Limitations

- This is a conceptual essay, not an empirical study: it introduces a framework and reviews existing evidence, and reports no new outcome data of its own.
- The four architectures are illustrative rather than exhaustive; the authors say the taxonomy should evolve, and the newest programs already combine student-facing and tutor-facing AI in ways the one-dimensional spectrum cannot place.
- Cost figures are drawn from different studies with different denominators and components, which the authors identify as the central obstacle to comparing architectures.
- The AI-tutoring evidence base is thin and uneven — only 20 of 800 LLM-tutoring papers offered strong causal evidence, and none of those was in U.S. K–12 — so claims about effectiveness are provisional.
- The equity and sustainability arguments are predictions about allocation and funding, not measured consequences of existing hybrid programs.
- It is an EdWorkingPaper (No. 26-1633) and has not been peer reviewed; the authors also disclose that [[generative-ai|ChatGPT]] and Gemini assisted with literature discovery and proofreading.

## Citation

Wu, T., Gurung, A., Koedinger, K. R., & Thomas, D. R. (2026). [*The New Kid on the Tutoring Block: Definitions, Developments, and Future Directions for Hybrid Human-AI Tutoring*](https://doi.org/10.26300/bph4-wr91). EdWorkingPaper No. 26-1633. Annenberg Institute at Brown University.
