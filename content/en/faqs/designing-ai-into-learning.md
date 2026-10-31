---
title: "How Should AI Be Designed Into the Learning Experience?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-31T10:40:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-31"
    agent: hermes-agent
---

The module outline has a line that says "AI activity" and nobody can say what it replaces. Or an instructor has asked to add a chatbot to a course that already works, and your job is to place it without breaking the part that made the course work.

Start from the learning goal and from the activity that produces it. The same model can be a scaffold, a [[socratic-method|Socratic]] partner, a reader of drafts, a [[simulation]], or an answer machine, and which one you get depends on the design rather than the model. Name the mode you are building, put the learner's attempt before any help appears, and keep at least one route through the course that runs without the tool.

## The short version

**1.** Write the sentence about what learners can do afterward without the tool, and check every AI feature against it.

**2.** Sequence the interaction: learner attempts, AI supports, learner evaluates or revises, learner demonstrates.

**3.** Name the mode on the ICAP ladder. Bypass and scaffold can be the same tool at different rungs.

**4.** Place the AI where the course sequence already intends a specific activity, not at the end as a bonus.

**5.** Withhold the tool while a capacity is forming, then restore it at a checkpoint the student cannot fake.

## Decide what the learner does without the tool

The knowledge base's [[pedagogy|Pedagogies and Teaching Strategies]] concept supplies the test: does the configuration preserve the activity that produces the intended learning? Answer that on paper, before anyone picks a feature.

[[finkelstein-principled-ai-education-2025|The Principled AI Education Framework]] states the general rule: technology should augment rather than displace the human capabilities that education intends to develop. Written as a test for a module, that means naming the capability, naming the activity that builds it, and asking whether the AI sits inside that activity or beside it.

Apply it per task rather than once per tool. Across four teacher-facing cases automation and augmentation co-occurred: replacement stayed inside bounded analytical subtasks, and augmentation appeared in what the teacher did with the output, which is why the same tool can automate one step and augment another ([[horvers-hybrid-intelligence-automation-augmentation-2026|Horvers et al. (2026)]]).

## Put the attempt before the help

The default pattern that survives contact with a real class: **learner attempts, AI supports, learner evaluates or revises, learner demonstrates understanding.**

In practice that means asking for an initial prediction or solution before any assistance appears, and favoring questions, hints, examples, counterarguments and [[feedback]] over immediate completion. Preserve [[productive-failure|productive failure]] where it serves the learning. Require verification of consequential claims, build in explanation and [[learning-by-teaching|teach-back]], and fade the support as competence grows. Keep some AI-free work so learners can calibrate what they can do alone.

The [[reducing-ai-misuse|Reducing AI Misuse]] synthesis recommends the same shape as a think-first, AI-second, reflect sequence with deliberate evaluation checkpoints.

## Name the mode you are designing for

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall and Panadero's kitchen-machine analogy]] reframes the question from whether learners use [[generative-ai|generative AI]] to how that use shapes what they become. Mapped onto [[icap-framework|ICAP]] and [[samr-model|SAMR]], it gives a ladder. Fully outsourcing an assignment with no revision or [[critical-thinking|critical engagement]] is Passive substitution, and it risks [[cognitive-offloading|skill loss and over-reliance]]. [[prompt-engineering|Refining prompts]] and cross-checking outputs takes [[prior-knowledge|prior knowledge]] and [[self-regulated-learning|self-regulation]], which is Active or Augmentation. Using AI to brainstorm, outline and evaluate original work is Constructive or Modification. AI as a real dialogue partner for co-construction and adaptive feedback is Interactive or Redefinition.

The implication is direct. The same tool is a bypass at one rung and a [[scaffolding|scaffold]] at the next, so the design document should name the intended mode.

## Place it where the sequence intends an activity

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec and Horvat]] analyzed the planned sequence of 29,064 teaching and learning activities across 554 courses and found a visible design grammar. Acquisition-type activities are the most common entry point and the largest single type, above 20%. Learning type tracks the intended Bloom level, with Acquisition falling from about 50% at level 1 to about 20% at level 6 and Production rising above 20% at levels 5 and 6. The strongest transition in the data is Assessment to Discussion, at 0.332.

Two lessons follow for AI design. Put the tool where the sequence intends an activity type. And because feedback clustered with [[collaborative-learning|collaboration]], [[group-work|group work]] and [[teacher-role|teacher]] presence, peer and synchronous structures are where AI support should plug in, not where it should substitute.

## Decide what to withhold, and when to restore it

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli and colleagues' "refrain, then amplify" framework]] moves this to program level. Withhold a generative tool while a capacity is forming, then restore it once the student can direct it, judge what it returns, and answer for it, with a hard-to-fake checkpoint at each hinge.

Devices are governed by a forming-versus-[[cognitive-offloading|offloading]] criterion: allowed where they support engaged work, excluded where they drain attention. That turns offloading decisions into a [[curriculum-design|curriculum]] and [[governance]] question that comes before course-level design rather than after it.

## Check that the alignment is real

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes and colleagues' discourse analysis]] of 14 pieces of higher-education guidance warns that efficiency-framed advice, such as using generative AI to draft outcomes, rubrics and course outlines, produces [[assessment|alignment]] that looks aligned while neglecting the constructive half. Outcomes, activities and assessments get generated as discrete items rather than interdependent ones.

Their remedy is re-sequencing. Educators should understand constructive alignment well enough to direct, interrogate and reject AI output before delegating any part of it, because accepting a plausible surface is the same evaluative failure instructors warn students against. Where AI is used, they argue for institutionally bounded, [[rag|retrieval-augmented]] systems configured around local policy and quality standards rather than generic internet-trained defaults.

## What instructional designers get wrong

Adding the AI counts as the intervention. What changes learning is the activity the student performs, and the AI is one part of the setting for it. A well-placed hint and a well-placed answer can run on the same model and produce opposite learning.

Writing the permission is the design work. A permission sets what is allowed. It does not set the sequence, the mode, or the checkpoint, and those three decide whether the activity survives.

Efficiency is the goal of the redesign. Drafting outcomes and rubrics with a model is fast, and the 14-document analysis found the result can look aligned while the parts stop supporting each other.

## What will come back at you

**"The students will use it anyway, so designing around it is naive."** They will, which is the argument for specifying the mode and teaching it. A module that names the mode gives a student something to comply with.

**"We do not have time to re-sequence a whole course."** Then re-sequence one module and one assessment. The refrain-then-amplify hinge is one checkpoint, and the think-first sequence is three instructions on a handout.

**"Our AI feature already includes guardrails."** Guardrails constrain what the model says. They do not decide whether the learner attempted first, whether support fades, or whether an AI-free path exists. Those are design decisions in your course, not settings in the product.

## What to do this week

**1.** Write the unaided-performance sentence for the module and put it above the activity list.

**2.** Mark the intended ICAP mode beside every AI activity in the outline.

**3.** Move one AI activity so the learner attempts the problem first.

**4.** Pick one AI-free path through the module and label it for students.

**5.** Name one hinge where the tool is withheld, and the checkpoint that restores it.

## Where to go next

[[learning-design|Instructional Design]], [[active-learning|Active Learning]] and [[scaffolding]] carry the design vocabulary. For the interaction-level defaults that decide whether a designed activity preserves learning, see [[reduce-ai-cheating]] and [[redesign-assessment-ai-era]]. [[designing-educational-ai-software]] covers how the same principles constrain the software itself, and [[developing-ai-tutor]] translates them into a tutor's architecture.
