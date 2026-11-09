---
title: Metaphors and Analogies
created: "2026-11-07T12:10:00-05:00"
updated: "2026-11-09T09:39:27-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [misconceptions, student-engagement]
technology: [generative-ai]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
---

> **Synthesis**: Metaphors and analogies do two jobs in AI education. They are sense-making devices through which educators and students decide what AI *is* (a tool, an assistant, a black box, an oracle), and they are instructional devices that map a familiar source domain onto an unfamiliar target concept. Research in this knowledge base shows that those two jobs are connected: the metaphors people hold shape what they expect from AI, which features they notice, and whether they trust or fear it. The same structure-mapping logic explains why an analogy can make a technical idea memorable while quietly misrepresenting it. A flawed GenAI-generated analogy can be more useful than a polished one when students know the source domain well enough to audit the mapping and repair it. The practical lesson is to choose metaphors for the feature being taught, check structural fit and cultural accessibility, and treat the comparison as an object of critique rather than a finished explanation. The evidence is mostly qualitative, conceptual, and small-scale; the field has little causal evidence that metaphor-based teaching improves learning.

## Questions to Consider

- What metaphor do you use for generative AI when you are not being careful, and what does that metaphor make easy to see or easy to ignore?
- When does a familiar analogy help a student understand a technical concept, and when does it install a misconception that later instruction has to undo?
- Whose source domains count as familiar? If an analogy depends on sports, gaming, or a kitchen appliance, who is included and who is left out?
- Should an AI tutor generate analogies for students, or should it give students analogies to critique? What changes when the analogy is personalized to a student's stated interests?
- A memorable analogy is not necessarily an accurate one. What would you ask students to do to show that they can tell the difference?
- What evidence would convince you that a metaphor-based lesson improved AI literacy rather than just made the lesson more engaging?

## Introduction

A metaphor says that one thing is another: AI is a black box, a helper, a mirror, a map. An analogy typically makes the comparison more explicit: a linked list works like a chain, recursion works like a set of nested boxes, or using AI is like cooking with a Thermomix. The two overlap in practice. Both ask a learner to carry relations from a familiar source domain into a less familiar target domain, and both become misleading when the mapping is extended past the relations it actually preserves.

That makes them more than rhetorical decoration. Conceptual metaphor research treats metaphor as a structure of thought, not just language: the comparisons available to people shape which aspects of a system feel salient and which explanations feel natural. In AI education, the stakes are practical. A student who frames an LLM as a search engine may expect it to retrieve stored facts and may not look for fabricated ones. A faculty member who frames it as an advanced student may expect judgment and subject expertise that the model does not have. A policy discussion framed around a "natural disaster" or a "competitor" supports different responses than one framed around a "calculator for words."

This page covers both sides of that double role: metaphor as a window into how educators and students understand AI, and analogy as a teaching technique in AI literacy and AI-generated explanations. It connects work on faculty and student conceptualizations, classroom metaphor workshops, GenAI-generated analogies, analogy-based instructional design, and critical AI literacy. It does not treat "metaphor" and "analogy" as exact synonyms, but it keeps them together because the design problems are shared: source selection, structural fit, cultural access, and critique.

## Why metaphors and analogies matter

The theoretical starting point is Conceptual Metaphor Theory, associated with Lakoff and Johnson. Its central claim is that people understand abstract domains through mappings from more concrete ones, and that those mappings can become so familiar that they stop looking like comparisons. "The journey of life" is not only a way of speaking; it carries assumptions about direction, progress, obstacles, and destinations. The same is true of "the AI assistant" or "the AI black box."

For education, the useful consequence is that metaphor can do conceptual work before a teacher offers a definition. It gives learners a place to stand. It can also carry a whole theory of agency: an "assistant" implies a user in control, while an "agent" implies initiative, and a "black box" implies that explanation is impossible or unnecessary. These are not neutral descriptions. They distribute responsibility and set expectations for trust.

Analogies add a second layer: structural correspondence. A good instructional analogy preserves the relations that matter for the target concept, not just surface similarity. A chain can illustrate a linked list because both involve nodes connected in sequence. A nested set of boxes can illustrate recursion because each level contains a smaller version of the same structure. The comparison is always partial. The pedagogical question is whether the preserved relations are the ones the learner needs, and whether the learner can see where the mapping stops.

That question separates this page from [[explainable-ai|Explainable AI]]. Explainable AI asks how a system's decisions can be made legible to stakeholders. A pedagogical analogy asks how a learner can build a usable mental model of a process. An explanation of why a model flagged a student is not the same as an analogy for how a model generates text, and neither substitutes for the other.

## How educators and students describe AI

The knowledge base now has several windows into the metaphors people actually use. They do not converge on one image, which is part of the point.

[[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson and Casey (2025)]] ran metaphor-analysis workshops with students, academics, and educational support staff. Participant metaphors clustered into four broad categories: *Functions* (tool-like comparisons such as a Swiss army knife), *Roles* (human-like relationships such as helper, study buddy, or frenemy), *Qualities* (unreliable or unknowable comparisons such as a black box or a slippery slope), and *Agency* (autonomous or threatening comparisons such as a competitor or a sinister robot). Two tensions ran through the set: human versus machine agency, and the known versus the unknowable. The workshop did not resolve those tensions. It made them available for discussion, which is what a metaphor-based intervention can realistically do.

[[engineering-faculty-metaphors-ai-understanding-2026|Gerhardt and colleagues (2026)]] interviewed 57 engineering instructors across disciplines and universities and analyzed the analogies they volunteered. The instructors mostly framed generative AI as either a human-like social being or agent (an assistant, a PhD student) or a technical object (a search engine, a tool). Few framed it as an environmental or systemic force. The authors organize the responses along five dimensions: ontology, epistemology, operation, relationship, and power or capability. Their concern is not that instructors use metaphors, but that colleagues in the same department can hold incompatible ones while assuming they share a language. That makes metaphor elicitation a faculty-development diagnostic, not just a classroom technique.

Students show a similar range. [[genai-professionalization-metaphors-2026|Bohmer and colleagues (2026)]] found students conceptualizing GenAI as a social actor, a technique, learning material, or a structure, with socio-emotional and technical frames both salient. [[ai-engineering-education-balancing-act|Kudina (2026)]] describes engineering students' dominant frames as the LLM "oracle" and "tutor," both of which attribute authority and personalization beyond what the tool reliably supplies. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman and colleagues (2026)]] treat one student's "vending machine of feedback" as a more useful literacy artifact than the polished tutor vocabulary, because it makes the transaction visible: insert work, receive output, no relationship and no agency.

The cross-cutting finding is that metaphor is diagnostic of expectation. A student who calls an LLM an oracle is not simply using a colorful word. The label predicts what the student will do when the model is wrong, and what the student will believe about verification. A faculty member who calls it a search engine is not simply being imprecise. The label predicts what they will ask students to do with it. That is why [[educational-development]] programs can use metaphor elicitation before policy or assessment redesign, and why [[engineering-education]] and [[cs-education]] need discipline-specific conversations rather than one institution-wide definition.

A philosophical strand pushes metaphor in a different direction: [[daoism-ai-education-philosophy-2026|Xie (2026)]] proposes "Zhenren" as a counter-ideal to the algorithm-managed learner, treating the image as a way to argue about educational aims rather than to explain a technical process.

## Analogies as a teaching technique

The strongest classroom evidence in the corpus comes from analogy use in computing education. [[student-reception-genai-analogies-computing-2026|Bernstein and Sibia (2026)]] gave undergraduates GenAI-generated analogies for linked lists and recursion, then asked them to annotate and discuss the outputs. Students did not judge the analogies as global good or bad. They separated structural accuracy, clarity, appropriateness, and trust, and named specific breakdowns: a looping route describes a circular list, not a singly linked one; a badminton rally has no guaranteed shrinking input for recursion; an interest-based reference can assume knowledge the student lacks.

The paper's contribution is the idea of **two-sided analogy auditing**. Target-concept knowledge tells a student which relations an analogy must preserve. Source-domain knowledge tells them whether the source actually has those relations. The sharpest auditors were not always the students whose interests matched the analogy. They were the students who knew the source domain well enough to inspect it. That has a design implication: a familiar source can turn a student from a recipient into an expert auditor. The authors recommend assigning flawed analogies as objects to inspect and repair, rather than filtering them out. The flawed analogy becomes a [[desirable-difficulties|productive difficulty]].

That finding complicates the usual assumption that AI-generated explanations should be polished before students see them. A clean analogy can still encode a wrong mapping, and a flawed one can be more instructive if the task is critique. The important condition is that students have enough target knowledge to know what the analogy must preserve, and enough source knowledge to check whether it does. Without either, the analogy may be memorable for the wrong reason.

A three-week EAP intervention puts that auditing stance into a revision sequence. Students wrote a metaphor for recursion aimed at a non-specialist, revised it against three angles (limit testing, structural fit, audience fit), and then wrote a fresh post-test metaphor; one group did the revision in an AI dialogue platform with peer feedback, the other independently ([[xing-ai-recursion-explanatory-competence-2026|Xing et al., 2026]]). The AI group reported slightly higher perceived clarity, accuracy and audience adaptation (4.15 against 3.93 on one item), but the difference was not significant and the outcomes were self-reported. The more useful evidence is in the dialogue logs: the model named the recursive components the metaphor had to carry, and students kept their image while making its structure explicit. The design lesson is to treat the AI turn as a prompt to revise the mapping, not to generate a better metaphor.

[[anvil-ai-educational-animations|ANVIL]] shows the generation side. It takes a concept definition, generates a textual analogy, compiles it into a screenplay, produces animation code, and repairs failures in a bounded loop. The system was evaluated with computer science educators, who rated most analogies as adequate and valued the tool as a creative collaborator for early lesson planning. The authors also found that instructor control, editability, and pedagogical fit mattered more than raw generation quality. ANVIL is a reminder that an AI-generated analogy is a candidate artifact, not a finished explanation: the teacher still has to decide whether the mapping is structurally sound and appropriate for the class.

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall and Panadero]] use an analogy as the argument itself. The Thermomix, a guided cooking appliance, provokes enthusiasm and criticism similar to generative AI in education. By mapping cooking scenarios onto learning scenarios, they move the discussion from "is AI good or bad" toward "how much of the work is delegated, and what does that do to the learner?" The analogy is not evidence; it is a device for making a design continuum visible. That is a legitimate use of analogy in a conceptual paper, but it should not be mistaken for a tested intervention.

[[code-anchor-multi-view-visualization|Code as Anchor]] adds a design caution. Students used multiple representations, including a metaphor view, but spent most of their gaze time on code and only a small share on the metaphor view. Some saw the metaphorical scaffolds as childish or remedial. A metaphor that an instructor finds illuminating can read as a marker of low ability to a student. Legitimacy is part of pedagogical utility, not a separate concern.

## Metaphor as critical AI literacy

The most direct framework for teaching with metaphors comes from [[roe-perkins-furze-metaphors-critical-ai-literacy-2025|Roe, Perkins and Furze (2025)]]. They define critical AI literacy as understanding how AI systems work while also examining their social, environmental, and cultural consequences. Starting from a list of 13 common AI metaphors, they select four for classroom use and assess each against four criteria: accessibility, explanatory power, critical AI literacy potential, and pedagogical utility.

The four are:

- **AI as a funhouse mirror**, for distortion and bias in generated output.
- **AI as a map**, for representation, selection, and whose knowledge is included.
- **AI as an echo chamber**, for feedback loops, filter bubbles, and the reinforcement of existing patterns.
- **AI as a black box**, for opacity and the limits of explanation.

Each is paired with a short activity and a teacher-facilitated discussion. The funhouse mirror lesson has students test prompts for bias; the echo chamber lesson has them observe how repeated prompts and limited data reinforce patterns; the map lesson asks what an AI's representation includes and omits; the black box lesson uses probabilistic generation to make hidden processes visible. The authors map the activities to UNESCO's AI competency framework for students, which gives the framework a curriculum hook rather than leaving it as a general exhortation to discuss metaphors.

The framework's most important move is to treat metaphors as objects of critique. A metaphor is useful because it is partial, and it becomes dangerous when it is presented as complete. The funhouse mirror shows distortion but not the algorithm that produces it. The map shows representation but can imply a coherent intention that the system does not have. The black box shows opacity but can encourage the conclusion that nothing can be known. The lesson should end with the question of where the comparison breaks.

That is also what connects metaphor work to [[ai-literacy]] more broadly. A metaphor workshop is a low-technology way to surface assumptions before a technical lesson. A critique of an AI-generated analogy is a way to assess whether a student understands the target concept. A student's own metaphor, such as the vending machine, can be more revealing than a standardized survey item. These are all forms of [[critical-thinking]] about AI, not just exercises in creative writing.

## Designing metaphor-based instruction

- **Start from the feature, not the image.** Decide what students need to understand, then ask which source domain preserves the relations that matter. A memorable comparison that points at the wrong feature is worse than a plain explanation.
- **Check structural fit before personalization.** Interest matching can increase engagement, but it does not guarantee that the source domain has the right structure. Verify the mapping first, then personalize.
- **Audit the source domain for cultural access.** Funhouse mirrors, maps, sports, and kitchen appliances are not equally familiar to all learners. Ask what the comparison assumes and offer alternatives.
- **Make the limits explicit.** Ask students to name what the metaphor preserves, what it distorts, and what it cannot explain. The critique is the assessed learning, not an optional discussion.
- **Use multiple partial metaphors.** A funhouse mirror, a map, and an echo chamber can coexist because each illuminates a different dimension. A single totalizing metaphor is more likely to become a misconception.
- **Keep the technical account nearby.** An analogy can open a topic, but it should not replace instruction about training data, probabilistic generation, or the difference between fluent output and verified knowledge.
- **Evaluate the activity, not just the engagement.** The corpus does not yet show that metaphor-based lessons improve AI literacy or learning outcomes. Treat the activities as designs to test, and measure what students can do afterward.

## Common Misconceptions

- **"A memorable metaphor is a good metaphor."** Memorability is not explanatory power. Students can remember a vivid analogy and still misunderstand the concept it was meant to clarify.
- **"Metaphors are neutral illustrations."** Every metaphor selects some features and hides others. The choice carries assumptions about agency, trust, and responsibility.
- **"AI-generated analogies are ready to use."** Generated analogies can be structurally wrong, culturally narrow, or pedagogically mismatched. They need teacher review or a student critique task.
- **"If students enjoy the analogy, they learned the concept."** Engagement and learning are separate outcomes. The evidence base here is mostly qualitative and does not establish a learning gain.

## Limits and evidence gaps

The literature in this knowledge base is uneven. The faculty and student metaphor studies are qualitative and often small. The engineering faculty study analyzes responses to a single interview question. The professionalization study treats metaphor counts as exploratory. The classroom analogy study has ten undergraduates and a confound between personalization and explanation format. The Roe et al. framework is conceptual and its activities have not been tested with students. ANVIL is a system evaluation with educators, not a learning study.

That does not make the work useless. It makes the claims appropriately modest. Metaphor elicitation can reveal assumptions that surveys miss. Analogy critique can make structural understanding visible. A well-chosen metaphor can give a class a shared object to argue about. But the field still needs studies that compare metaphor-based instruction with ordinary instruction, measure transfer rather than recall of the metaphor, and test whether the approach travels across cultures and disciplines.

The risk of overclaiming is real in both directions. A teacher who treats a metaphor as a complete explanation can install a misconception. A researcher who treats metaphor as mere decoration can miss a mechanism by which students build or fail to build a mental model. The productive position is to treat metaphor as a designed, partial, and criticizable representation, and to study what learners do with it.

## Connected Concepts

- [[ai-literacy]] — the umbrella for critical AI literacy and metaphor-based teaching.
- [[critical-thinking]] — analogy critique as a form of structural reasoning.
- [[misconceptions]] — flawed analogies as a source of durable misconceptions.
- [[student-ai-interaction]] — how students interpret and audit AI explanations.
- [[pedagogical-agent]] — AI tutors that generate explanations or analogies.
- [[learning-design]] — selecting and sequencing analogy-based materials.
- [[educational-development]] — metaphor elicitation in faculty development.
- [[engineering-education]] — faculty and student metaphors in engineering.
- [[cs-education]] — analogy use and critique in computing education.
- [[cognitive-offloading]] — tool and assistant metaphors and their risks.
- [[trust-calibration]] — anthropomorphic roles and misplaced trust.
- [[equity-in-ai-education]] — whose source domains count as familiar.
- [[teacher-role]] — instructor judgment over AI-generated explanations.
- [[explainable-ai]] — system explanation versus pedagogical analogy.
- [[student-engagement]] — engagement effects of personalized analogies.
- [[higher-ed]] — the setting of most studies in this cluster.

## Connected Articles

- [[roe-perkins-furze-metaphors-critical-ai-literacy-2025]] — Four metaphors and criteria for teaching critical AI literacy
- [[student-reception-genai-analogies-computing-2026]] — Students audit GenAI-generated analogies and repair broken mappings
- [[fear-awe-genai-metaphor-workshops-2025]] — Metaphor-analysis workshops with students, academics, and staff
- [[engineering-faculty-metaphors-ai-understanding-2026]] — Engineering faculty metaphors construct and constrain AI understanding
- [[genai-professionalization-metaphors-2026]] — Students' metaphorical conceptualizations of GenAI and professional learning
- [[thermomix-genai-education-analogy-2026]] — A kitchen-machine analogy for delegation and learning with AI
- [[anvil-ai-educational-animations]] — AI-generated analogies and instructional animations for computing
- [[ai-engineering-education-balancing-act]] — Students' "oracle" and "tutor" metaphors exceed LLM capabilities
- [[code-anchor-multi-view-visualization]] — Metaphorical visualization scaffolds and their legitimacy problem
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — A student's "vending machine of feedback" metaphor as literacy evidence
- [[daoism-ai-education-philosophy-2026]] — "Zhenren" as a counter-metaphor for AI in education
