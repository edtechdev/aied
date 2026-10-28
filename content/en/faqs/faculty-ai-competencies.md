---
title: "What Competencies Do Faculty Need in Regard to AI?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-28T11:29:19-04:00"
connected_faqs: [faculty-development-ai, ai-save-instructor-time, top-10-findings-ai-education-instructors]
weight: 70
foundations: [ai-literacy, educational-development, teacher-role, teacher-ai-competency]
audience: [faculty developers, instructors]
level: [adult learning]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

The faculty development committee has one slot in January and the provost wants it to be about AI. Or you run the teaching center, and three departments have asked for "an AI workshop" that turns out to mean three different things. Or you have been using these tools for a year and want to know what you are still missing before you rebuild a course around them.

The bottom line: prompt technique is the smallest part of this. Faculty need to judge what a model can and cannot do, design tasks and assessments around that judgment, and know when to keep it out of a course entirely. Confidence is a poor proxy for any of it, so build the program around performance and around disciplines rather than around a tool demonstration.

## The short version

**1.** Define the competency in four dimensions, and add a teaching layer for anyone who assesses students.

**2.** Assess with performance rather than with a survey. Self-rated literacy and demonstrated capability diverge.

**3.** Put disciplines in the room. Subject expertise does not carry over into technology integration.

**4.** Teach the technology domains explicitly, because those are the ones that measure low even in confident faculty.

**5.** Treat "when not to use this" as a competency, and give faculty cover to decline.

## Define the competency before you book the room

The knowledge base's [[ai-literacy|AI Literacy]] synthesis identifies four dimensions, and they are a useful agenda because each one needs a different kind of session:

- **Foundational understanding** of AI capabilities and limitations.
- **Practical competence** using AI tools.
- **[[critical-thinking|Critical evaluation]]** of accuracy, bias, appropriateness, and uncertainty.
- **[[ethics|Ethical]] and institutional awareness** involving issues such as integrity, privacy, [[equity-in-ai-education|equity]], and [[governance]].

For instructors, those dimensions need a pedagogical layer on top. Faculty should be able to decide what cognitive work students must retain, select AI uses that serve the learning objectives, design valid AI-era assessment, teach students to verify and regulate their own use, recognize [[hallucination-risk|hallucination]], overreliance and [[ai-sycophancy|sycophancy]], and know when [[human-in-the-loop-ai|human judgment]] should override automation.

They also need enough systems understanding to evaluate how [[generative-ai|generative AI]]-supported workflows fit together. A workshop that teaches one tool in isolation produces faculty who can demo the tool and cannot tell you what breaks when it is wired into a marking workflow. [[teacher-ai-competency|Teacher AI Competency]] and [[educational-development|Faculty Development]] hold the longer version of that argument.

Write the list down before you plan the sessions. Four dimensions plus a teaching layer is enough to justify four sessions instead of one, and enough to tell a department chair which of the four their request is actually about.

## Assess performance rather than confidence

[[self-report-measures|Self-reported]] AI literacy can diverge substantially from demonstrated capability, which is the single most practical warning in this literature for anyone who runs faculty development. A confidence survey at the end of a workshop measures how the workshop felt.

Teacher [[agentic-ai|multi-agent]] workflow research adds a second reason to test rather than ask: systems thinking, pedagogical beliefs and [[self-efficacy]] interact in AI integration, so the same session lands differently on two faculty members with the same subject background. That argues for differentiated programming, and against the one-size-fits-all tool workshop that most institutions run.

The cheap version of performance assessment is a task, not an instrument. Ask each participant to bring one assignment, revise it with the model during the session, and then defend the revision to a colleague: what changed, what it now assesses, what the student can no longer be graded on. That takes twenty minutes and tells you more than any end-of-day rating scale.

## Expect the weak spot to be integration

Recent higher-education research puts numbers on where faculty competency is strong and where it breaks down. [[sutedjo-faculty-genai-tpack-21-2026|A survey of 127 faculty at a large U.S. research university]] using the [[tpack]]-21 instrument found self-perceived [[pedagogy|pedagogical]] content knowledge high (M = 4.70) and [[tpack|content knowledge]] near ceiling (M = 5.15). The technology-integrated domains were markedly lower: technological pedagogical knowledge (M = 2.62), technological content knowledge (M = 2.75), and holistic TPACK (M = 2.55, the lowest of seven).

Read the gap correctly. These are people who know their subject and know how to teach it, and who do not know how to make a model part of either. Content expertise did not predict GenAI-integration knowledge (CK correlations r = .11 to .15, all non-significant), so a program cannot assume subject-matter mastery transfers. It has to build competence through deliberate, [[discipline-specific-aied|discipline-specific]] work.

One more finding shapes the design. The three technology-integrated domains correlated r = .81 to .91, which suggests they may function as a single GenAI-integration capacity. If that holds, teach it as one shared foundation rather than as three separate skills with three separate sessions.

## Design sessions around a real course

What training can and cannot do shows up clearly in a [[pishtari-teacher-ai-training-learning-design-2026|within-subjects study with 13 higher-education teachers]]. Giving teachers a [[conversational-ai|chatbot]] significantly improved the quality of their [[learning-design|learning design]], with the share attaining two or more higher-order Bloom tasks rising from **41.7% to 91.7%** (p = .01). Perceived cognitive effort fell sharply, median 6.33 to 3.33 (p = .004). The pedagogical [[prompt-engineering|prompting]] training layered on top **did not further improve quality** and slightly raised effort.

Three things follow, and the third is the one programs skip.

Access changes [[teacher-role|teaching behavior]] readily. Hand faculty a capable model and a real task and the work in front of them improves within one session.

Deeper capability takes more than a workshop. The prompting layer added effort and no measured quality. Teaching people to write better prompts is a skill, and on this evidence it is not the constraint on better design.

Quality gains do not prove the practice was internalized. Thirteen teachers redesigned one task well with the tool open. Whether they could do it a term later, without the tool, is a different question, and the study does not answer it. Build a follow-up into the program rather than assuming the gain persisted.

## Cover the parts of the role beyond teaching

Competency is also an institutional question, and most frameworks answer only part of it. [[crompton-faculty-technology-integration-standards-2026|Design-based research with 114 participants across 28 U.S. institutions and 11 countries]] produced six faculty technology standards spanning the full academic role: Instructor, Coordinator, Leader, Researcher, Learner and Contributor. The authors' reason for building them is the useful part. Existing frameworks ([[tpack]], [[samr-model|SAMR]]) and educator standards (ISTE, UNESCO, DigCompEdu) address [[k-12]] teachers or cover only the teaching dimension.

For a faculty developer, that reframes the request. A department asking for an AI workshop for its instructors is asking about one of six roles. The same department's coordinators are making program-level decisions, its researchers are writing with these tools, and its leaders are approving purchases. One session cannot serve all of them, and pretending otherwise is how a program ends up with high attendance and no change in practice.

## Make room for declining

Adoption resists a purely technical framing, and the resistance is often a judgment rather than a gap. [[dai-genai-frenemy-teaching-autonomy-2026|A survey of 287 teachers across 27 countries]] found a refined model explaining **79.8% of the variance** in behavioral intention. Perceived artificial [[agency|autonomy]] influenced intention only indirectly, through usefulness. **Risk aversion was a significant negative predictor** (−.163), and teachers worried far more about students' [[cognitive-offloading|overreliance]] and [[academic-integrity|integrity]] risks than about their own use.

[[ai-integrated-teaching-identity-tensions|Interviews with two experienced academics]] describe what that worry feels like from inside: recurring **identity tensions** between pedagogy and platform, educator and facilitator, care and compliance, navigated through principled selectivity grounded in [[pedagogy|pedagogical]] values.

So competency includes professional judgment about when not to use AI, and a program that cannot say so out loud will read as a sales pitch to exactly the faculty whose judgment you most want in the room. Two experienced academics is a small evidence base for a large claim; treat the identity finding as a description of a real tension rather than as a measured effect, and let it shape the tone of the sessions.

## What faculty developers get wrong

A prompt workshop is an AI competency program. It covers one of four dimensions, and in the 13-teacher study the prompting layer added effort without adding measured quality.

Confident faculty are competent faculty. Self-report diverges from demonstrated capability, and the 127-faculty survey found content knowledge near ceiling beside holistic TPACK at 2.55. Confidence tracks subject expertise, which is the thing these faculty already have.

Content experts will work out the integration themselves. Content knowledge did not predict integration knowledge in that survey. The correlation was non-significant, which is the finding that justifies discipline-specific programming rather than a general invitation.

One framework will cover everyone. The six-role standard exists because TPACK, SAMR and the major educator standards cover K-12 teachers or the teaching dimension alone.

Resistance is a knowledge gap to be filled. Risk aversion predicted intention negatively, and the identity work describes faculty reasoning from pedagogical values. Some of what looks like reluctance is a defensible position about student overreliance.

## What will come back at you

**"We do not have the staff time for performance-based development."** Then do not build a program. Build one task-level exercise: bring an assignment, revise it with the model, defend the revision. That is the twenty-minute version, and it produces evidence of capability that a satisfaction survey does not.

**"Our faculty already use these tools, so the training is behind them."** Use is not the construct. The 127-faculty survey describes people with high content and pedagogical knowledge and low technology-integrated knowledge, and the 13-teacher study shows design quality moving with access while the prompting layer added nothing. Neither result says the faculty in front of you have integrated anything.

**"This is an IT training problem."** The intention model puts usefulness, not technical capability, on the path to adoption, and risk aversion runs alongside it. The obstacle is judgment about students and about the discipline, which is why the sessions belong to the teaching center.

**"Competency frameworks are bureaucratic overhead."** They are a map for one slot in January. The four dimensions tell you what to leave out, and the six roles tell you which audience a request is really for.

## What to do this week

**1.** Write the four dimensions and the teaching layer on one page, and mark which of them your current offering covers.

**2.** Replace the end-of-session satisfaction form with one task: an assignment revised and defended.

**3.** Ask two departments for a real course and a real assignment to work on, rather than a general invitation.

**4.** Add one segment on when to keep AI out of a task, and say plainly that declining a specific use is a legitimate professional judgment.

**5.** Decide which of the six roles your next session serves, and name the audience in the invitation.

## Where to go next

The student-facing counterpart is [[incorporating-ai-literacy]], and [[ai-literacy-evidence]] covers how strong that literacy evidence base is. For the instructor-facing summary of the research, see [[top-10-findings-ai-education-instructors]]; [[teacher-ai-competency|Teacher AI Competency]] and [[educational-development|Faculty Development]] carry the framework material, and [[course-ai-policy]] is the document most of this development work eventually produces.
