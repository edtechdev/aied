---
title: "How Can AI Support Disabled and Neurodivergent Learners in My Course?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-10-28T11:39:28-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, reducing-over-reliance]
weight: 65
type: faq
methods: [meta-analysis-systematic-review]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
research_method: [case study]
audience: [instructors, instructional designers]
level: [higher ed, k 12, special education]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

The accommodation letter names a student, a course and a tool you have never heard of. Or a student has asked, reasonably, whether they can keep using their speech-to-text software in a timed exam, and your course AI rule says no AI of any kind. Or the accessibility office wants an answer by Friday on whether to license a reading tool, and the vendor's evidence is a testimonial from another campus.

The answer that survives all three: start from the barrier the task creates, use the tools that were actually measured, and teach whatever you adopt. Two rules matter more than any product choice. Name transcription and OCR in your AI policy as accommodations in their own right, and give the assignment structure instead of asking students to infer it. Be clear-eyed about the evidence: the strongest number on this page comes from PK-12 special-education settings using mostly pre-generative AI, and the higher-education literature is a map of what has been tried.

## The short version

**1.** Write the functional barrier on the accommodation letter before the tool name: reading and writing, study management, attention, or social communication.

**2.** Start with structured instructional software, which has the measured effect, and read its confidence label before you buy the chatbot you were pitched.

**3.** Decide whether this is a design change or a personal accommodation. Where the barrier is shared, change the design, because that removes the disclosure step.

**4.** Teach the tool. An accommodation supplied without instruction is the failure mode the case law punishes.

**5.** Name transcription and OCR explicitly in the AI rule, so a prohibition written against generative drafting does not withdraw a student's means of producing legible work.

**6.** Run the trial against the barrier rather than against a satisfaction survey, and say in advance what you will count as working.

## Start with the barrier the task creates

Most of what goes wrong for disabled and neurodivergent students happens at the level of a task: a reading that assumes print, a video that assumes sustained attention, a group project that assumes unspoken social rules. Those barriers recur across diagnoses, so the useful question is which functional barrier a tool removes, and a procurement question should be phrased the same way.

Diagnostic categories hide this. The scoping review below finds the literature dominated by individual accommodations and single-neurotype tools organized around formal diagnosis, while the functional differences they address cut across neurotypes. Dyslexic students tend to benefit from reduced reliance on written-only material. Autistic students and students with ADHD can both experience frequent fluctuation in focus, which makes performance sensitive to consistent structure and enough time for task switching. A tool matched to a label can miss the barrier the student in your section actually has.

The same caution applies to group statistics. [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]] reports a considerably larger effect for students with specific learning disabilities, intellectual and developmental disabilities, or who are deaf, than for students with autism spectrum disorder, and that difference was not statistically significant across the effect sizes.

## Use what has been measured, and read the label

The strongest quantitative result on this page is also the most general, and it comes with limits you should carry into the purchase decision.

[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang, Carter, Liu and Peng (2024)]] synthesized 29 (quasi-)experimental studies of AI-based interventions for students with disabilities: 239 effect sizes from 41 independent samples, a statistically significant medium overall effect on learning outcomes of Hedges' g = 0.588 (95% CI [0.349, 0.826], p < .01), and high between-study heterogeneity. Academic performance was the largest outcome subgroup (k = 80, g = 0.929) and social-emotional skills the smallest (k = 144, g = 0.382). Computer software, meaning speech recognition, expert systems and [[intelligent-tutoring|intelligent tutoring systems]], performed strongly (k = 74, g = 0.959) and [[educational-robotics|robots]] moderately (k = 144, g = 0.509), while intelligent VR (g = 0.528) was not significant. Publication bias was present (Egger's β = 2.837, p < .001); trim-and-fill reduced the estimate to g = 0.269, still significant.

Every study was PK-12. 96.6% used step-based instruction in special-education or clinical settings, and most used older rule-based AI rather than [[generative-ai|generative AI]]. That supports cautious adoption of structured instructional software. It does not transfer to a general-purpose chatbot, and treating it as though it does is the most expensive mistake available on this page.

Three smaller results show what a single tool can do when the barrier is narrow. Each was tested on a handful of learners, so treat them as low-cost reversible experiments rather than infrastructure.

For attention, [[adhd-video-segmentation-computing-education|Pimenova, Begel and colleagues (2026)]] segmented instructional videos after the fact into single-instruction chunks with fixed pauses. With 17 learners with ADHD and 10 without, it improved everyone and brought the ADHD participants' errors and hesitations to parity. The equalizing effect came from a lightweight transformation of the material.

For language access, [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al. (2026)]] added Visual questions (timestamps where visual information is likely to be misread) and Emotion questions (timestamps where prior Deaf and Hard of Hearing learners reported frustration) to an [[llm]] baseline set, producing 30 questions, ten per strategy. With 16 learners, self-efficacy averaged 5.70 (SD = 1.12) on a seven-point scale, and visual questions were chosen more often by Deaf than by hard-of-hearing participants.

For reading and writing, [[dyslexlens-dyslexic-learners-ai|Rezazadegan et al. (2026)]] mined dyslexic learners' own forum discussions. Those learners valued AI for literacy support and reported uneven output quality and a lack of equitable accommodations. The inconsistency is itself a barrier: a tool that cannot be relied on adds work instead of removing it.

The [[higher-ed|higher education]] picture is the weakest part of the evidence and the part closest to your job. [[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel, Heimann and Prilop (2026)]] screened 766 records from five databases down to 40 included studies published between 2015 and 2025. Generative AI appeared in 15 of the 40 and [[virtual-and-augmented-reality|virtual reality]] in 11. Barrier coverage was uneven: reading and writing (n = 13) and study management (n = 12) dominated, attention (n = 4) and social communication (n = 5) were neglected, and only 6 studies addressed more than one barrier. The review excluded [[k-12]] and specialized-institution settings by design, so it says nothing about younger learners. Use it to see which barriers have been addressed at your level, and which have barely been touched.

## Decide whether you are changing the design or the accommodation

Universal design removes the need for a student to identify themselves as needing special provision. Accommodation requires exactly that, and the stigma is part of the cost. So when a barrier turns out to be shared, the design change is the better buy: it reaches the students who never disclose.

The segmentation result is the clearest case. A video cut into single-instruction chunks with fixed pauses improved all learners in the study, not only those with ADHD, and brought the ADHD participants' errors and hesitations to parity. That is the universal-design outcome, achieved with an edit rather than a product.

The honest limit: that is 17 learners with ADHD and 10 without, in one study, and nothing in this literature tells you how far to generalize from one classroom result, or when a student's need is distinct enough to require an individual arrangement. That judgment stays with you and the accessibility office.

## Teach the tool, and put someone's name against the teaching

The documented failure is an accommodation supplied without instruction. In *W.A. v. Clarksville/Montgomery County School System* (2024), a student given AI as an accommodation graduated unable to read, and the court found that a free, appropriate public education had not been provided.

Two things make that failure likely, and both are institutional. [[shin-ai-policies-sld-2026|Shin et al. (2026)]] used LLM-based topic modeling and two rounds of Delphi surveys with 17 experts across 12 U.S. AI-in-education policy documents from 2015 to 2025. Educator preparation is one of their five validated themes, carrying 4 of 36 items, and the experts ranked student empowerment and AI literacy as most essential: these students should learn to use AI responsibly and independently, with guarding against over-reliance taught as part of the same skill. [[ludia-udl-ai-thought-partner-2026|LUDIA]]'s authors name the obstacle as the "knowing-doing divide": guidance exists in abundance, is written in general terms, and a barrier is always particular to this room, this week.

What the page cannot give you is a training protocol. No formal evidence-based guidelines exist to help educators or families implement AI for these learners, so the amount of instruction, its sequencing and who delivers it are judgment calls. The case law sets the floor rather than the standard: the student has to end up able to do the thing, and someone has to be accountable for getting them there.

## Write transcription and OCR into the AI rule by name

[[wright-transcription-not-generation-2026|Wright (2026)]] argues that rules treating all "AI use" alike are over-inclusive, because they do not separate speech-to-text transcription and OCR from generative drafting. Students with conditions affecting fine motor control, handwriting legibility or typing accuracy have relied on standalone voice-to-text products such as Dragon NaturallySpeaking and standalone OCR, several of which have been discontinued or degraded, with AI-powered transcription filling the functional gap.

A rule written as "no AI" can therefore withdraw the student's primary means of producing legible work. Nobody has measured the scale of that displacement yet, which is a reason to be explicit rather than to wait for the number. Name transcription and OCR as accommodations in the policy, alongside the drafting prohibitions, so the two questions are decided separately. The exposure this creates for the institution belongs with [[legal-issues-and-risks]].

This is a one-line fix in most documents and it is the highest-consequence line on the page.

## Give structure where the assignment assumes it

Structure is the cheapest intervention here and the one most often left out of the plan. [[neurodivergent-computing-students|Zastudil et al. (2026)]] surveyed 24 neurodivergent computing students (autistic and/or ADHD) and 20 neurotypical peers, with four follow-up interviews. The neurodivergent group was uncomfortable with unstructured or ambiguous assignments and strongly preferred smaller teams that work together consistently with explicitly defined roles, coping by self-selecting roles and disclosing strategically.

That is preference data, not an effect study, and it is also the design brief students wrote for themselves. [[agentic-ai|AI]]-mediated work carries a specific version of the risk, because a tool's interaction model can reproduce the same structural ambiguity the assignment already had. Check what the tool asks the student to decide alone before you add it to a task.

## Run the trial against the barrier, and write down what you counted

Aggregate effects give you a direction. They do not tell you whether the tool works for the student in your section next week, so any trial needs a measure chosen before it starts.

Three cautions should shape that measure. The first is that subgroup ordering is suggestive rather than established: no moderator of any kind reached significance in the 2024 meta-analysis, so rankings such as teachable agents (g = 1.100) ahead of social-emotional coaches (g = 0.336), or dyadic interaction ahead of triadic (g = 0.973 versus g = 0.385), should not be treated as settled. The direction of effect is supported; the size, the design optimum and the durability of any gain are not.

The second is that this corpus describes deployments and perceptions more than measured learning. Attention (n = 4) and social communication (n = 5) are the least-studied barriers, and the scarcity of (quasi-)experimental and longitudinal designs is why the higher-education work is a scoping review rather than a meta-analysis. Coverage skews undergraduate and Global North, the search was English-language peer-reviewed work, and postgraduate students are under-represented. Engagement and satisfaction are weak indicators.

The third is that a tool which fixes one barrier may leave another. Check the tool against the specific difficulty the student reports, whether that is reading and writing, study management, attention or social communication, and evaluate against that difficulty rather than against how the student felt about the product. Ask the student what to count. Zastudil et al.'s participants and Rezazadegan et al.'s forum posters both describe their needs more precisely than the products built for them do.

What you will not find here is a validated instrument for measuring a barrier in a single course, or evidence on how long a trial should run. Both are gaps in the literature rather than failures of your search, and they are worth writing down in the review notes.

## Buy for the barrier, and refuse the expensive default

Two procurement requirements come straight out of the review: state universal design and participatory development as conditions, and build tools with neurodivergent students rather than for them. The review's own sample shows how rare that is, with only 3 of 40 studies treating the environment or neurotypical peers as the object of intervention.

Then budget honestly. Assistive technology needs devices and connectivity, and tools that are free in a pilot routinely move behind a paywall. [[virtual-and-augmented-reality|Virtual reality]] is the most resource-intensive option in the set, and the field is concentrated in the Global North, so its most immersive tools are the least scalable. [[shin-ai-policies-sld-2026|Shin et al.]] flag the [[digital-divide|digital divide]] directly: the price of advanced AI tools can widen disparities between wealthier and poorer schools, alongside algorithmic bias and teacher-training gaps.

LUDIA is one worked version of the low-cost alternative, and its authors are unusually plain about what they have not shown. It connects educators with [[universal-design-for-learning|Universal Design for Learning]] while a design decision is still open, and removes access barriers by architecture: no cost, no accounts or stored chats, WCAG 2.2 Level AA conformance, and 13 machine-translated languages, though non-English versions may carry the assumptions of the English they came from. It is a thought partner rather than a solution engine, and the authors state that they hold no evidence it improves learning. They also name a limit that belongs on every deployment plan: automation bias means the educator most likely to accept a poor suggestion is the one who trusts the tool knows Universal Design for Learning. Nobody has tested its outputs for cultural or linguistic bias either.

Keep a second failure in view. Chatbot over-reliance and the cognitive overload of immersive environments are documented as inversion effects, where adding the technology lowers learning. A tool that only reproduces existing teaching in digital form should be expected to yield limited [[learning-gains|learning gains]].

## What instructors get wrong about this

A diagnosis tells me which tool to buy. The barriers cross diagnoses, and a tool matched to a label can miss the barrier in the room. Ask what the task assumes: print, sustained attention, unspoken social rules, a particular way of producing text.

An accommodation is a personal arrangement, so the fix belongs to the student. Some are, and the ones worth generalizing are the ones you would have designed in anyway. Segmentation helped every learner in its study. Design changes remove the disclosure step, and with it the stigma.

Engagement and satisfaction show the tool worked. They show the student liked it. This corpus is mostly deployments and perceptions, and only 6 of 40 higher-education studies served more than one barrier, so a satisfied student is not yet evidence that a barrier came down.

The tool carries the support, and teaching is an extra. The case law treats an untaught tool as the failure, and the policy experts ranked student empowerment and AI literacy as their most essential theme. Budget the teaching time with the license.

## What will come back at you

**"We cannot require a tool for everyone."** Where the tool is a design feature, requiring it is the point. Video segmentation with fixed pauses improved all learners and brought the ADHD participants' errors and hesitations to parity, which is the universal-design outcome that removes the need for disclosure. Accessible defaults carry the same logic: read-aloud, OCR and text-leveling tools recur in Shin et al.'s validated policy items. Their corpus also shows how far policy has to travel, since only 2 of the 12 documents specifically address learning disabilities while 18 topics present in general AI or other-disability policy, data protection, legal risk management and ethical guidelines among them, are missing from specific-learning-disability policy.

**"Captioning and translation are not academic support."** Captioning is a start, not the whole of language access. Chen et al.'s Visual and Emotion questions exist because a transcript alone leaves a Deaf learner reconstructing context the video never stated. The policy experts' ranking disagrees with the objection too. Their 36 validated items spread across five themes, with inclusive and personalized learning the largest at 11 (30.56%) and ethics, equity and inclusion at 9 (25.00%), and educator preparation at 4 (11.11%), yet the experts ranked student empowerment and AI literacy most essential of the five, at 6 items (16.67%), level with assessment and research.

**"Students must be independent."** Independence is what the instruction is for, which is why the tool without the teaching is the failure. Shin et al.'s educator-preparation theme exists for the same reason. The scale of need is easy to understate: roughly 240 million children worldwide live with disability, about half of them out of school in low- and middle-income countries, and about a third of teachers across OECD systems report lacking the competencies to support students with specific needs. In the United States, the Assistive Technology Act (2004) and IDEA (2004) place assistive-technology evaluation inside each Individualized Education Program and require a free, appropriate public education, yet no formal evidence-based guidelines help educators or families implement AI for these learners. Independence built on an untaught tool is what the case law punishes.

**"We cannot afford it."** Then refuse the expensive default. Virtual reality is the most resource-intensive option in the set, and the field's most immersive tools are the least scalable. A free, privacy-preserving tool that improves the design conversation, with its authors' caveats read first, is a better opening purchase than a headset.

**"The evidence is too thin to act on."** Thin, and not empty. The 2024 meta-analysis gives you a direction with a wide interval and a publication-bias correction that cuts the estimate by more than half, the three single-tool studies are small, and the higher-education review measures coverage rather than effect. What that supports is the cheap and reversible move: a design change, a named accommodation, a trial with a measure agreed in advance. Deferring the decision is also a decision, and it leaves the student in front of you with whatever the default arrangement provides.

## What to do this week

**1.** For each accommodation request on your desk, write the functional barrier beside the tool name, and check that the tool addresses that barrier rather than the diagnosis.

**2.** Ask whether the barrier is shared by the whole class. If it is, change the design: chunk the video, cut the ambiguity, turn on read-aloud, and give the assignment structure it was missing.

**3.** Add transcription and OCR to the AI rule by name, so the prohibition on generative drafting and the accommodation for producing text are decided separately.

**4.** Put a name and a date against the teaching: who shows the student the tool, when, and who checks that it is working.

**5.** Agree the measure with the student before the trial starts, and record the result in the review notes, including the case where the answer is that it did not help.

## Where to go next

[[universal-design-for-learning]] covers the design approach that prevents barriers before they appear, [[assistive-technology]] the tool layer a student uses, [[accessibility]] whether a format can be perceived and operated at all, and [[neurodiversity]] the lens that treats difference as diversity rather than deficit, all within the umbrella of [[inclusive-learning]]. [[reducing-over-reliance]] covers the over-reliance and inversion effects that decide whether a tool keeps helping, and [[equity-ethics-pedagogical-safety-research|incorporating equity, accessibility, privacy, ethics and pedagogical safety into AIED research]] covers the research-side obligations.
