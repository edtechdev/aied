---
title: "Does Using AI Actually Help My Students Learn?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
weight: 90
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [active-learning]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation]
reviewed_by: [editor]
---

# Does Using AI Actually Help My Students Learn?

**Yes, it can—but better work produced with AI is not necessarily evidence of better learning.** Research documents genuine learning benefits, negligible effects, and learning harms. The important question is not simply whether students use AI, but **what the AI helps them do, what thinking remains their responsibility, and what they can do afterward**.

The knowledge base calls the distinction between successful AI-assisted work and acquired capability the **performance–learning gap**. A student might submit a stronger essay or solve more practice problems with AI while becoming no better—and sometimes worse—at doing comparable work independently. Conversely, well-designed AI feedback, examples, and tutoring can improve subsequent performance without AI. See [[learning-gains|Learning Gains]] and [[cognitive-offloading|Cognitive Offloading]]. 

## What does the research actually show?

### Some AI-supported interventions improve learning

A broad starting point is [[burneo-can-edtech-close-learning-gaps-2026|Can EdTech Close Learning Gaps? Global Evidence from Digital Interventions]]. This World Bank synthesis of 14 randomized studies across ten economies estimated a positive average learning effect of **0.125 standard deviations** for adaptive and AI-enabled educational technology. However, it combined earlier [[adaptive-learning|adaptive systems]] with [[generative-ai]] tools. It found no statistically established advantage for the newer generative tools, while acknowledging considerable uncertainty in that comparison. The result supports the potential of these interventions—not a claim that any [[conversational-ai|chatbot]] will improve learning. 

More specific evidence shows why [[learning-design|instructional design]] matters. In [[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design in higher education]], a multisite randomized study involving 1,176 first-year undergraduates compared [[peer-assessment|peer feedback]], direct AI feedback, self-evaluation followed by AI feedback, and a hybrid sequence combining self-evaluation, peer feedback, and AI critique.

The reflective and hybrid designs produced stronger **delayed AI-free transfer** than direct AI feedback. Students subsequently performed better on a new scientific argumentation task, not merely on the assignment being revised. However, those conditions also required additional evaluative activity and potentially more time. The study supports the **complete feedback design**, rather than proving that one component or the AI itself caused the advantage.

### AI can improve practice performance while harming learning

The clearest caution comes from [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning: Evidence from high school mathematics]].

In this randomized field experiment with nearly 1,000 students, a general-purpose-style AI interface increased assisted practice scores by **48% relative to the control group**, but students subsequently scored **17% lower on unassisted exams**. A tutor configured with teacher-designed guidance and hints largely avoided that penalty. Crucially, it **did not produce a statistically significant improvement in unassisted exam performance over the control group**. Avoiding harm is not the same as demonstrating additional learning. These percentages describe this particular intervention and setting, not universal effects of AI use.

The implication is practical: judging an AI tool by completed homework, correct practice answers, or student satisfaction can give a misleading picture of its educational value. Satisfaction and perceived learning are [[self-report-measures|self-report measures]], and the knowledge base documents how far they can drift from measured learning.

A larger, longer field study points the same way at scale. [[stromberg-generative-ai-learning-penalty-secondary-2026|The Generative AI Learning Penalty]] followed 26,811 Chinese secondary students (grades 7–12) over 30 months using staggered AI adoption. Homework scores rose **18%** and completion time fell **30%** (from 64 to 45 minutes), while closed-book monthly exam scores fell **20%** within six months and high-stakes entrance-exam scores fell **18–24%** of baseline — but only after about two years. The losses were concentrated among the roughly **81%** of AI users whose behavior indicated homework outsourcing; users who kept homework time comparable to non-users learned about as efficiently. The divergence between homework and exam performance is the performance–learning gap written across a national cohort, and the two-year lag means short evaluations systematically underestimate the cost.

### Access and safeguards are not enough

A two-year randomized school experiment, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away: AI Tutoring with Khanmigo]], found modest [[math-education|mathematics]] achievement gains across 18 middle schools. Yet students rarely engaged in substantive tutoring conversations. The authors noted that the gains resembled those associated with structured practice without AI. Because the intervention combined individualized practice and [[intelligent-tutoring|AI tutoring]], it did not cleanly isolate the AI component’s additional contribution. A capable tutor being available is different from students using it productively.

The newer [[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] experiment offers a related lesson. Among more than 6,000 middle-school students using NUMI, AI support improved recovery after mistakes but slowed progress through questions. A three-correct-in-a-row mastery rule increased platform-defined success without, by itself, improving learning one week later. The strongest delayed-learning signal appeared when AI was embedded in the mastery workflow, but the gains were **marginally statistically significant and concentrated on particular practiced material**. This working paper provides suggestive evidence for a carefully structured approach, not a broadly proven recipe.

### How students use the tool, not just access to it, determines the outcome

The same technology produces different learning depending on how the interaction is structured. In [[yan-cognitive-outsourcing-genai-assessments-2026|a qualitative study of 38 undergraduates]] in unsupervised essay assessments, engagement spanned a spectrum from [[cognitive-offloading|cognitive outsourcing]] to **cognitive reallocation** — shifting effort from low-level retrieval to [[critical-thinking|critical evaluation]]. Most students (n = 31) intended to use generative AI as a learning assistant, yet **76.32%** relied on single-turn ask–get answer–stop dialogue and **78.94%** used the tool before or after drafting rather than through the task, producing an efficiency paradox: convenience gained at the cost of the cognitive work that builds schemas ("the speed at which you forget it is also very fast"). Only 8 students worked as cognitive partners through sustained, iterative dialogue.

The [[pedagogy|pedagogical]] lesson is that blanket permissions or prohibitions both leave students to guess. What changed behavior was task-specific guidance about which cognitive work students must retain and which AI assistance was appropriate — the design direction developed in [[reduce-ai-cheating]].

### Less effort does not automatically mean less learning

It would also be a mistake to conclude that AI helps only when it makes students work harder or never shows a complete example.

In the preregistered experiments reported in [[coach-not-crutch-ai-writing|Coach not crutch]], adults who practiced revising cover letters with AI subsequently produced better no-AI writing than those who practiced alone, despite expending less effort. Benefits persisted at a one-day follow-up. Another experiment found that viewing an AI-revised example produced comparable benefits to practicing with the tool. These were brief, bounded writing tasks—not evidence of lasting improvement across all kinds of writing—but they show that examples can support learning rather than necessarily replace it.

**The goal is therefore not maximum difficulty. It is to preserve or improve the learning activity that develops the intended capability.**

### The pattern repeats in computing education

[[kumar-genai-computing-education-systematic-review-2026|A systematic review of 72 studies in computing education]] finds the same structure in its most robust result. Generative AI reliably raises short-term completion and reduces time-on-task (36 studies), and not a single study in the corpus documents a negative effect on immediate performance — yet those gains "do not transfer to independent performance" (21 studies). Codex-assisted students completed twice as many tasks during learning but performed no better than controls on post-tests without AI. [[prior-knowledge|Prior knowledge]] moderates everything: well-prepared students convert assistance into durable skill, while under-prepared students risk using it as a crutch that removes the practice they need. The review's central design requirement is **verification** — reading, testing, modifying, explaining, and critiquing AI output — made a graded, observable component of the work rather than an aspiration left to discretion.

## A useful design principle: scaffold, do not substitute

The knowledge base’s [[scaffolding]] and [[active-learning|Active Learning]] syntheses emphasize support that helps learners understand, practice, evaluate, and eventually perform with less assistance.

“Scaffold, do not substitute” is a useful principle, but it needs to be applied to the **learning objective**, not mechanically to every AI feature. A complete worked example can be something students learn from; a sequence of hints can still become something they click through without thinking. The important distinction is what the learner does with the assistance. See [[cognitive-offloading|Cognitive Offloading]] and [[help-seeking]].

For an activity intended to develop independent capability, a reasonable starting routine is:

1. **Establish the learner’s thinking.** Ask for an initial attempt, prediction, draft, explanation, or interpretation of an appropriate example.
2. **Provide targeted assistance.** Use AI for a hint, explanation, contrasting example, or focused feedback on the difficulty.
3. **Require a response to the assistance.** Have the student explain, revise, verify, or justify accepting or rejecting the suggestion.
4. **Check a new application with less support.** Ask the student to solve a comparable problem or apply the idea in a different context.

This is an instructional starting point, not a universally validated sequence. The amount and timing of support should reflect students’ prior knowledge and the task. See [[reducing-ai-misuse|Reducing AI Misuse]] and [[prior-knowledge|Prior Knowledge]].

### Make the retained thinking explicit

For mathematics, an instructor might ask students to submit their attempted solution before requesting help, then use a prompt such as: “Identify the first step I should reconsider, give me one useful hint, and ask me to try again.” The subsequent check should require a new solution and an explanation—not reproduction of the AI’s answer. This applies the guidance in [[scaffolding]] and [[help-seeking]].

For writing, an instructor might have students assess their draft against a rubric before receiving AI critique, then explain which suggestions they accepted, modified, or rejected. If argument construction is the objective, AI-generated prose should not substitute for evidence that the student can construct an argument. If evaluating alternative revisions is the objective, comparing complete examples may be appropriate. See [[writing-education|Writing Education]] and [[feedback-literacy|Feedback Literacy]].

These are design applications of the evidence. They should still be evaluated in the course rather than assumed to work because they sound pedagogically sensible.

## How can I tell whether AI is helping in my course?

The [[ai-ed-evaluation|AI Ed Evaluation]] page recommends separating the quality of the AI’s output, students’ experience using it, and students’ actual learning. A practical evaluation needs more than a satisfaction survey or comparison of assignment grades.

**Specify the capability first.** Decide what students should understand or be able to do after the activity. “Produce a polished report” is different from “select appropriate evidence,” “explain a causal relationship,” or “detect an unsupported conclusion.” The assessment should reveal the capability you intend to develop. See [[educational-measurement|Educational Measurement]].

**Measure before, after, and later.** Use a brief baseline task, an immediate learning check, and a delayed application. Include both a comparable task and, where appropriate, one that changes the context or requires a different application. When the objective is independent competence, remove the AI assistance that could perform that competence for the student. A successful check immediately after practice is useful, but does not establish retention over months or transfer across domains. See [[learning-gains|Learning Gains]] and [[transfer-of-learning|Transfer of Learning]].

**Use a meaningful comparison.** Where feasible, compare the AI-supported activity with a well-designed non-AI alternative using similar content, instructional time, and practice opportunities. A simple before-and-after improvement cannot establish that AI caused the gain; students might improve through the rest of the [[teacher-role|teaching]]. For stronger causal claims, consult [[research-methods-aied|Efficacy Research Methods]] when designing the comparison.

**Observe how students use the help.** Look for explanations, attempts to correct errors, justified revisions, and verification—not just logins, message counts, or completed questions. These observations can help explain a result, but should not replace a learning measure. See [[help-seeking]] and [[student-ai-interaction|Student–AI Interaction]].

**Check what a dashboard actually measures.** In [[zhang-platform-scores-miss-ai-teaching-agents-2026|an evaluation of eight AI teaching agents]] in [[medical-education|medical education]], agent rankings by the platform's own score diverged from an expert-validated teaching-quality rubric — the agent ranked third by the platform ranked last on rubric quality — because the platform score tracked student performance during the interaction, not the agent's teaching behavior. A built-in metric is a hypothesis to validate, not evidence of learning. See [[evaluating-ai-interventions-methods]] for the measures and comparison designs that make such a check credible.

An important qualification is that **not every legitimate learning outcome must be demonstrated without AI**. A course may deliberately teach effective AI-supported work. In that case, assess students’ ability to select, verify, revise, and defend their use of AI, alongside whatever independent foundations the discipline requires. [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] proposes this distinction between independent capability, AI-augmented performance, and verification responsibility. It is a conceptual assessment framework, not a validated solution for every course.

## Check who benefits—and what the benefit costs

An average improvement can conceal students who receive little benefit or encounter new barriers. The [[digital-divide|Digital Divide]] synthesis distinguishes access to a tool from the skills needed to use it and the outcomes ultimately obtained.

For a classroom evaluation, examine results by relevant starting points such as prior knowledge, language needs, and accessibility requirements. Provide guidance rather than assuming students already know how to obtain and evaluate useful feedback. When assessing independent learning, remove assistance that supplies the target thinking—not accommodations needed to access the task. See [[ai-literacy|AI Literacy]], [[equity-in-ai-education|Equity in AI Education]], and [[accessibility]].

Also inspect the feedback students actually receive. A fluent response can misdiagnose their difficulty, reinforce an error, or offer an answer when a different kind of support was needed. Use course-aligned materials, retain a route to human help, and avoid collecting more student information than the activity requires. These concerns connect directly to [[ai-feedback-quality|AI Feedback Quality]], [[pedagogical-safety|Pedagogical Safety]], and [[privacy]].

## Bottom line

**AI can help students learn, but neither access, polished output, nor a “tutor” label establishes that it does.** The evidence is strongest when a specified instructional design is evaluated against a meaningful alternative using measures of the capabilities students are supposed to develop. Long-term retention, broad transfer, and generalization across learners and settings remain important uncertainties. See [[limitations-in-aied-research|Limitations in AIEd Research]].

The most useful question for an instructor is:

> **After this AI-supported activity, what can my students understand, explain, judge, or do that they could not do before—and what evidence shows that improvement?**
