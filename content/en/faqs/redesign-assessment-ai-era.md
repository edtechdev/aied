---
title: "How Do I Redesign Assessment So That a Grade Still Tells Me Something Defensible About What the Student Knows or Can Do?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-28T10:31:49-04:00"
connected_faqs: [should-we-use-ai-detectors, reduce-ai-cheating, writing-instruction-ai-best-practices, course-ai-policy]
weight: 84
audience: [instructors, assessment designers]
foundations: [academic-integrity]
assessment: [assessment, assessment-validity, authentic-assessment]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

You are probably holding an assignment that worked for years and now returns work you cannot defend. The grade says A; the artifact may be mostly the tool's. Or a student is contesting a low mark on grounds you cannot check, or your program is rewriting its assessment policy and asking you what should change in your course by next term.

The short answer: decide what the grade is meant to be evidence **of**, put at least one step in the assignment that the student completes without the tool, and make the rubric pay for the reasoning rather than only the product. Redesign that skips the second and third steps changes how work is produced without changing what the grade can support.

## The short version

**1.** Write down which capability the grade represents. Independence, appropriate use of AI, or the ability to direct and judge AI are three different constructs, and one artifact cannot be evidence of all three.

**2.** Add one authenticated step to every high-stakes assignment: a short oral check, an in-class application, a live demonstration, or an annotated rationale. One is usually enough.

**3.** Set the AI boundary per task step, not per course. Inventory what the student does at each step and ask what specifically you are assessing there.

**4.** Put process evidence in the rubric with real points. If the rubric still rewards only the artifact, students will optimize for the artifact.

**5.** Assume the student most tempted to conceal, not the most conscientious one, and check that your rules make the honest path the cheapest path.

## Decide what the grade is evidence of

Begin by stating explicitly what capability the grade is supposed to represent. Are you assessing what a student can do independently, what they can accomplish appropriately with AI, their ability to evaluate and direct AI, or some combination of these? The knowledge base's [[assessment-validity|Assessment Validity]] treats this as a validity problem: a polished artifact is no longer sufficient evidence that the student possesses the capability apparently demonstrated by that artifact. This is the assessment-side half of the same argument; the enforcement-side half is in [[reduce-ai-cheating]], and the general validity framing runs through [[evaluating-ai-interventions-methods]].

Say the answer in the syllabus, in the assignment sheet, and in the rubric. Students read three documents and comply with the one that is most specific. "AI use is permitted with acknowledgment" is not a statement of what you are measuring, and it gives a student no way to know whether the permitted use undercuts the thing you are grading.

## The risk of construct substitution

The article [[authentic-products-authenticated-processes-2026|From Authentic Products to Authenticated Processes]] calls the resulting risk **construct substitution**: the assessor attributes an AI-mediated product to the student and inadvertently measures the tool's capabilities rather than the student's. Its recommended response is to make the student's reasoning, judgment, verification, iteration, and responsibility visible through such approaches as staged submissions, annotated decision rationales, process records, feedback-use statements, oral defenses, and other forms of authenticated process evidence.

That list is a menu, and the cheapest useful item on it depends on your class size. For a section of 25, a five-minute oral check per student per major assignment is roughly two hours of marking you may already be spending. For a lecture of 300, staged submissions and annotated rationales scale where oral defenses do not, and a sampled oral check on the work that looks anomalous is what remains practical. Choose by what you can sustain in week ten, not week one.

## Put one authenticated step in every assignment

In practice, a strong assessment architecture often combines an **AI-enabled authentic task** with some form of **independent verification**. Depending on the discipline, that might include a brief oral explanation, in-class application, live demonstration, annotated [[eportfolio|portfolio]], short unassisted component, or questioning about key decisions.

The [[authentic-assessment|Authentic Assessment]] concept also stresses realistic intellectual work, cognitive challenge, student agency, feedback, and social or professional authenticity, not merely making conventional assignments harder for AI to complete. A task made harder to automate without becoming more worth doing is not a better assessment; it is the same assessment with a tax on it.

## Walk the assignment step by step and set the boundary there

The task-level method that makes this tractable is the one [[mccorkle-aligned-genai-course-policy-2025|McCorkle]] documents: inventory every step a student performs, ask of each step "what, specifically, am I assessing?", and derive the AI boundary from the answer, which is also how the expectations behind [[reduce-ai-cheating]] become explicit and enforceable.

Run it once on your most contested assignment and write the output into the assignment sheet. A typical result separates cleanly: the early retrieval and drafting steps are where the construct lives and where the tool does the damage, while formatting, reference checking, and language editing are steps where tool use is invisible to your construct and probably should be allowed outright. Blanket permissions and blanket bans both fail because the answer genuinely differs by step.

## Make the rubric pay for the process

[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed and Temimi]] reframe the same problem as one of **imperfect information** rather than morality: the student knows how the work was produced and the institution sees only the artifact plus partial traces, so the design question becomes *which student response each assessment environment makes most attractive*. Their response-region model compares three choices, no AI use, [[ai-use-disclosure|disclosed]] use, and hidden use, and shows that rules, monitoring, disclosure, and redesign operate through different channels and succeed only when the most attractive response aligns with the assessment's purpose.

Two results bear directly on architecture. Deterrence runs through a detector's **discrimination** between hidden use and legitimate work, not its raw catch rate, so when false positives rise faster than true positives stronger monitoring can make concealment relatively *more* attractive. And redesign moves students toward responsible use only when the rubric actually rewards process evidence; otherwise it stays cosmetic. Their practical rule is to design for the student most tempted to conceal rather than the most conscientious one.

The rubric is where this becomes real. If a rationale paragraph, a revision log, or a reflection on a rejected AI suggestion carries no points, it will be written in five minutes and read by nobody. Give the process evidence enough weight that a student who skips it loses more than they gain by skipping it, and describe what good process evidence looks like with the same specificity you use for the product.

## Per-student task variation is capability-conditional, not free

One popular no-surveillance architecture is **per-student task variation**, where each examinee gets a surface-distinct but construct-equivalent version of the same task so answers cannot usefully be shared. [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]], a [[benchmark]] of 600 generated variants across 60 condition cells, found frontier models clustering tightly on a joint integrity score (0.81–0.88) while non-frontier references collapse to 0.50–0.55, and that no single [[prompt-engineering|prompting]] strategy optimizes surface diversity and construct equivalence at once. Variation at scale cannot be assumed from prompting alone, so an institution should validate its own model and prompt pair before treating the guarantee as real.

For a course-level decision that means one test before you commit: generate a set of variants from one of your own tasks, have a colleague mark two of them for the same capability, and compare. If the marks diverge on the variants, the equivalence claim is not holding for your task and the shared-answer protection is paid for with unfairness.

## Redesign rarely happens assignment by assignment

In a [[qualitative-research|qualitative]] study of 12 academics and 17 students at a large Australian university, [[nicola-richmond-programwide-assessment-genai-2025|Nicola-Richmond et al.]] found both groups agreed assessment must change but stressed systemic friction such as long lead times, large-cohort accreditation constraints, workload and cost, and concluded that redesign *takes a village*: a program-wide team combining assessment-design, [[generative-ai|generative AI]], subject-matter, industry and evidence expertise, with GenAI-literacy and assurance-of-learning points placed strategically across a qualification. If you are one instructor with one course, that finding is a warning about what will slow you down and a reason to bring the program lead into the first conversation rather than the last one.

The purpose matters as much as the mechanics. [[ai-agents-joyful-assessment-third-space-2026|El Khoury and Ma]] argue that reform organized only around preventing misconduct is too defensive and propose **joyful assessment**, safe, emotionally responsive, empowering and supportive of student [[agency]], in which integrity is a *consequence* of good design rather than its starting point. Their worked example uses an instructor-built [[agentic-ai|AI agent]] to rehearse students before judgment and to produce a rubric-aligned evidence report, but the division of labor is stated plainly: the AI organizes evidence, the instructor interprets it.

## What will come back at you

**"I do not have the hours for oral checks."** Then do not run them on everything. One authenticated component in the highest-stakes assignment, plus a sampled check on work that looks inconsistent with earlier submissions, addresses most of the risk at a fraction of the cost. The scalable items are staged submissions and annotated rationales.

**"Accreditation and program approval will not move that fast."** The study above names long lead times and large-cohort accreditation constraints as the central friction. A single course can change what happens inside an existing assessment without changing its name, its weight or its learning outcomes, and that is usually enough to start.

**"This penalizes anxious students and students with disabilities."** It can. Live oral components need accommodations planned in advance, a choice of format where the construct allows it, and attention to linguistic difference and assessor bias. Verify the capability, not the performance conditions.

**"We should just buy a detector."** The discrimination result argues against it as the spine of the design: if false positives rise faster than true positives, stronger monitoring makes concealment relatively more attractive. Detection may have a place in a response that also redesigns the task, and [[should-we-use-ai-detectors]] covers that argument.

**"Students will use AI anyway."** They will, and the design question is whether the honest path is the cheapest one. If disclosure costs nothing and the rubric pays for process, most students take it; if disclosure invites suspicion, the rational choice is concealment.

## What to do this week

**1.** Write one sentence naming the capability your next major assignment grades. Put it on the assignment sheet.

**2.** Pick the single cheapest authenticated step you can sustain, and add it to that assignment.

**3.** Inventory the assignment's steps and mark each one as construct-bearing or not. Allow AI where it is not, restrict it where it is.

**4.** Add process evidence to the rubric with points attached, and say what good looks like.

**5.** Take the change to your program lead and to whatever office approves accommodations, before the term starts rather than after the first appeal.

## Where to go next

For the validity argument behind the whole page, read [[assessment-validity]]. For the enforcement-side companion, see [[reduce-ai-cheating]] and [[course-ai-policy]]. For rewriting the assignment instructions themselves, [[writing-instruction-ai-best-practices]] covers what wording students actually follow. For the question of whether the tool you are designing around works at all, [[evaluating-ai-interventions-methods]].
