---
title: "The Offloading Ladder: How Experience Changes What Learners and Practitioners Should Hand to Artificial Intelligence"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Akcaoglu, M."]
published: "2026-10-27"
venue: "EdArXiv preprint"
source_url: https://osf.io/preprints/edarxiv/ys2fu_v1/
foundations: [cognitive-offloading, cognitive-surrender, theory-development-aied]
pedagogy: [desirable-difficulties, scaffolding, prior-knowledge]
technology: [generative-ai, llm]
assessment: [process-oriented-assessment, authentic-assessment]
methods: [research-methods-aied]
ethics: [ai-misuse-learning-harm, guardrails]
research_method: [theoretical analysis]
discipline: [learning sciences]
level: [higher ed, k 12]
audience: [instructors, learners, educational technology developers]
page_kind: [framework]
sources: ['raw/papers/akcaoglu-offloading-ladder-experience-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Akcaoglu argues that "what may a learner hand to AI?" has no task-level answer, because a task's order — whether it demands working out what to do or merely following steps already known — belongs to the person doing it and shifts with experience. Building on [[theories-and-frameworks|Bloom's taxonomy]], he calls a task low order for someone who already has the knowledge or procedure it needs and high order for someone who must construct it, then proposes the *offloading ladder*: as [[prior-knowledge|experience]] accumulates, more of a task's steps become routine and can be offloaded, freeing time for the high-order work that education values and labor markets pay for, until the ladder stops at the **core**, the part a person must keep doing to [[evaluative-judgment|judge the tool's output]]. Offloading a step that is still high order risks never-skilling — in one cited study of roughly 1,000 high school students, GPT-4 access raised practice scores by 48% but left those students 17% lower on a closed-book exam — and offloading past the core produces deskilling and the "experienced nonexpert." The paper is a conceptual argument, and no study has yet measured a task's order for a particular person.

## Key Findings

1. **Task order belongs to the person, not the task.** A simple task can be high order for someone lacking a procedure for it; a complex one is low order for someone who has one.
2. **Offloading high-order work costs skill and persistence.** Students with GPT-4 practice support scored 48% higher in practice but 17% lower on a closed-book exam, and one 10–15 minute session sufficed to lower later performance.
3. **Offloading low-order work buys back valued capacity.** Across 19 developed countries, a one-standard-deviation rise in abstract task content carried a 3.3-log-point wage premium; routine and manual content carried penalties of 2.6 to 2.9.
4. **The ladder stops at the core because offloading routine work still deskills.** Among endoscopists with over 2,000 colonoscopies each, unaided detection fell from 28.4% to 22.4% once AI assistance arrived.
5. **Task-level AI rules miss the person.** Frameworks marking whole tasks red or green treat an original essay as uniformly off-limits, though parts of it are routine for an experienced writer.
6. **Confidence is a poor check that the core survived.** Knowledge workers reporting more confidence in AI also reported less critical thinking, and people using AI on reasoning problems overestimated their own scores.
7. **Offloading past the core splits experience from expertise.** The person keeps accumulating time on the work while capability at the core stalls, becoming what Bereiter and Scardamalia call an experienced nonexpert.

## Why struggle is the mechanism

The argument rests on a specific reading of [[desirable-difficulties|desirable difficulties]]. Storage strength is how entrenched a memory is; retrieval strength is how accessible it is right now. A difficulty slows visible performance while building storage strength, so learners can look worse during practice and still learn more. Removing the effort reverses the machinery: look up an answer, or accept one that could have been worked out from available cues, and the practice that would have built the skill never happens. Applied to [[cognitive-offloading|cognitive offloading]] — using a tool to reduce the thinking a task demands — this means help can look effective and build nothing lasting, and it costs [[metacognition|accurate self-knowledge]] along with the skill. The [[scaffolding|zone of proximal development]] sharpens the point: tasks a learner can do with help but not alone are exactly the tasks AI over-guides when it produces the answer, so the learner never reaches independent performance. Fraction arithmetic and reading comprehension can feel delegable yet remain prerequisites for algebra and critical reasoning.

## What the ladder's rungs represent

The model has two axes: the person's experience with the task, running from learner to experienced, and the complexity of the task's steps. A stair line marks where the person currently stands. Steps below the line have become low order and may be offloaded; steps above it are still high order and stay with the person. Each rise marks another part of the work that repetition has made routine — the shift from facts held in working memory to compiled procedures, or from novices sorting physics problems by surface features to experts sorting them by underlying principle. The ladder is bounded twice. It stops at a dashed line below a hatched band, the core, and a dotted box near the top represents the leaky-abstraction case in which steps the person had offloaded fall back to them because the tool cannot handle an unusual instance.

## Where offloading past the core goes wrong

Two failure modes are distinguished. Never-skilling is the failure to develop a competency at all, visible as a performance drop once the AI is removed. Deskilling is the erosion of a competency the person already had, and it can affect experts: the endoscopy finding is the paper's cleanest example, because the assisted rate of 25.3% concealed a fall in the unaided rate. When deskilling reaches the skill needed to check the tool, the person is still nominally in charge but no longer able to evaluate what they oversee — the paper's NASA example, where a shift to "insight/oversight" of contractor design work was identified as a root cause of major project failures. Beyond that point sits [[cognitive-surrender|cognitive surrender]], deferring judgment, effort, and responsibility to a system and adopting its output as one's own, an outcome fluent output makes more likely by lowering scrutiny.

## Designing assignments and tools around the core

The practical claim is that the core of an assignment — the step the learner is still learning — must be identified and stated, and that [[process-oriented-assessment|assessing process rather than product]] protects it. Akcaoglu's middle school water-quality example makes this concrete: a worksheet asking students to measure pH rewards the finished artifact, while a version asking them to sample a nearby creek, compare readings against city data, and present to the local council keeps the core (deciding where to sample and what the readings mean) with the students while handing AI the charting. [[human-ai-collaboration|Human-AI collaboration]] should follow the same logic. Study modes that walk a user through a problem are a first step, but they are switches the user must turn on; the ladder calls for responsiveness that adapts to the user's experience, with the learning-protective setting as the default for learners.

## What this means for practice

- **Instructors.** Write the core of each assignment into the prompt students see — the step they are still learning — and grade the process, because an unstated core is the easiest thing for a student to hand to a model.
- **Learners.** Offload steps you could already do without thinking, keep the steps you still have to work out, and treat effort as the check: a task that felt effortless probably took more from you than it gave.
- **Developers.** Build responsiveness settings that scale how much work the tool does to the user's demonstrated experience, and make the hint-giving configuration the default for learner accounts rather than an optional toggle.
- **Researchers.** Start by operationalizing task order for a given person; every downstream claim about where to stop offloading depends on being able to measure whether a task has become low order.

## Limitations

- The central claim is conceptual and untested: no study has measured the order of a task for a particular person, so the ladder is an argument from converging evidence rather than a validated model.
- The paper leaves open how to tell expertise from mere experience and how to locate the core of a person's work, which the author notes can be hard to pin down and may shift as AI absorbs more tasks.
- The evidence base is still emerging: several studies cited are preprints, most observe people over minutes or weeks while expertise forms over years, and reading low ownership as low self-relatedness is the author's own interpretation of one study.
- Scope is limited to fields where tasks recur — medicine, programming, research writing — and to LLM use on writing, coding, and reasoning tasks; multimedia, design work, and manual trades are outside the argument.

## Citation

Akcaoglu, M. (2026). [*The Offloading Ladder: How Experience Changes What Learners and Practitioners Should Hand to Artificial Intelligence*](https://osf.io/preprints/edarxiv/ys2fu_v1/). EdArXiv preprint.
