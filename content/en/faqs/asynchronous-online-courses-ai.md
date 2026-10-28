---
title: "How Should We Design and Facilitate Asynchronous Online Courses When AI Can Do the Work?"
created: "2026-09-17T03:40:00-04:00"
updated: "2026-10-28T11:34:12-04:00"
connected_faqs: [reducing-over-reliance, course-ai-policy, verify-ai-output, group-work-ai]
weight: 68
type: faq
foundations: [academic-integrity, cognitive-offloading, learning-design]
pedagogy: [community-of-inquiry, online-teaching-and-learning, self-regulated-learning, student-engagement]
technology: [generative-ai]
assessment: [assessment]
methods: [meta-analysis-systematic-review, rct, mixed-methods-research, design-based-research]
ethics: [guardrails]
audience: [instructors, instructional designers]
level: [higher ed, adult learning]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-10-28"
    agent: hermes-agent
---

The term opens and nothing happens at a set hour. You post week one's reading, the discussion prompt, the first case, and then you wait to see what comes back. What comes back is fluent, on topic, and tells you nothing about the student who submitted it. There is no room to walk into, no face to read at 10:15 on a Tuesday, and no follow-up question you can ask while the student is still standing in front of you.

The answer to give a colleague: in an asynchronous course, everything a classroom supplies for free has to be built on purpose. Put the grade on the process instead of the finished file, keep one measurement the student produces with no tools and no help, constrain whatever AI you hand out and keep it inside the course, and treat the calendar as a design decision. For any assignment, ask what a student would still have to do if a model produced the artifact for them.

## The short version

**1.** Grade the process. A decision log, a staged draft, or a paragraph of self-explanation shows reasoning that a final submission hides.

**2.** Keep one unassisted measurement on any assessment that certifies competence. The retention gap in the population data below closes once proctoring is in place.

**3.** Use [[asynchronous-oral-assessment-2026|asynchronous oral assessment]] where the stakes justify the production work: just-in-time prompts, short recordings the student cannot revise, rubrics embedded, transcripts generated automatically.

**4.** Configure any AI you supply to hint instead of answer, and embed it in the course rather than linking out to something generic.

**5.** Space the major deadlines, and open a 7-8 day window before each one. That is how much warning the interaction data gives you.

**6.** Grade the movement in a discussion: a committed position, a challenge, a documented reconsideration.

## Decide what your assignment is evidence of

An asynchronous course is exposed for a structural reason. Its evidence of learning is the submission, and submissions are now cheap to produce.

The demonstrations take the student out of the picture entirely. On a live undergraduate psychology course, autonomous agents logged into the learning management system, read the course materials, and completed unproctored assessed work with no student involved. Two quizzes finished in about **12 minutes** and in **under 5 minutes**, both scoring **10/10**. A discussion post had the agent mine its peers' posts and then fabricate a credible first-person life history to answer them. The authors' wider record covers at least **15 documented agent runs** across Canvas, Moodle and Brightspace, using **seven agent tools**. Their framing matters for your syllabus: this is an [[assessment-validity]] problem before it is an [[academic-integrity|integrity]] problem, because agent completion removes the assumption that the submitted work came from the person whose learning is being assessed ([[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou and El-Haddad, 2026]]).

The causal evidence on what the tool does to learning is equally direct. In a randomized trial with roughly 1,000 high-school mathematics students, unguarded AI assistance raised practice performance by **48%** and reduced unassisted, closed-book exam scores by **17%**. Students with no access outperformed students with access. A [[guardrails|guardrailed]] tutor that gave hints instead of answers eliminated the harm. The constraint decided the outcome.

Population data run the same way. Across **3.2 million ALEKS interactions**, study time on AI-susceptible problems fell **26.9%** after ChatGPT's public release, with a **25% decline in the odds of answering proctored retention items correctly**. The effect vanished once proctoring was in place. That disappearance is the useful part for course design, since it locates the shortcut off-platform and shows the harm living in conditions you set.

There is a quieter failure to design against. [[metacognitively-discordant-completion-genai-2026|Metacognitively discordant completion]] names the state of submitting correct, complete work while privately knowing that understanding never arrived. In a classroom you might catch it in a student's hesitation. In an asynchronous course the submission is the only channel, and a correct submission reads as success. [[assessment]] design is your first lever.

## Put the evidence in the process

If the finished product proves nothing, the evidence has to come from how the work was made or from a condition the student cannot delegate.

**Process-revealing artifacts** are the cheapest change, and they work at scale: staged submissions with a required intermediate decision log, a one-paragraph self-explanation attached to each answer, an annotation of a source, a plan revised after feedback. These capture [[cognitive-offloading|the reasoning]] rather than its residue, and they cost the instructor comparatively little to scan.

**Asynchronous oral assessment** carries the most weight where competence must be certified. [[asynchronous-oral-assessment-2026|Pentland, Lowenthal and Krier (2026)]] evaluated web-based assessments that deliver prompts just in time, have students record brief, time-limited webcam responses they cannot revisit, and grade against embedded rubrics while transcripts generate automatically. Across two studies, an intermediate accounting pilot and a data analytics course, students scored higher than on in-person multiple-choice exams. The difference was significant in the second study and a positive but non-significant trend in the first, with moderate cross-format correlations supporting convergent [[assessment-validity|validity]]. Students reported preparing differently, using more [[active-learning|active]] study strategies, and treating the format as professionally relevant. For a course with no shared hour this is the closest structural equivalent: the thinking happens live, at a time and place the student chooses, at an administrative cost that does not grow with cohort size.

**One unassisted measurement** belongs in any course whose grade certifies knowledge. The ALEKS result is the argument: with proctoring in place, the retention gap disappeared. Tell students why the condition exists. That reasoning belongs in [[course-ai-policy|your course AI policy]].

## Decide where the tool sits in the sequence

Once the product is unreliable evidence, the order of the work becomes part of the assessment design.

[[brcic-effortless-trap-productive-struggle-2026|Brcic and Frljic (2026)]] put placement at the center of the argument: allow-or-ban is a false choice, and the design question that matters is **where the tool sits**. The causal evidence they collect shows the outcome flipping on placement alone. The same unguarded helper that left high-school students about **17% worse** on an unaided exam did no harm once rebuilt to withhold answers, and a well-engineered [[intelligent-tutoring|tutor]] roughly **doubled** learning. Their six-move frame for placing the tool (prime, probe, point, attach, strengthen, test) is one usable menu. Keep their diagnostic: *if letting AI in makes the task feel effortless, it is in the wrong place.* Poor placement leaves an illusion of learning that collapses on the unaided task, the state [[metacognitively-discordant-completion-genai-2026|metacognitively discordant completion]] describes.

Written into an assignment, that gives you a sequence you can print on the sheet:

**Think, commit, use AI, critique, revise, explain.**

Students attempt the intellectual work and commit to an initial interpretation, prediction, outline or decision. Then the model enters, for feedback, alternatives, counterarguments or critique. Then students judge what it produced, revise, and explain what changed and why. The commitment step is what makes the rest assessable. An uncommitted student has nothing to revise, and an artifact a model wrote from scratch has no revision history at all.

The overcorrection to avoid: collecting every prompt and documenting every keystroke produces workload without evidence. Ask for the decision points you would actually read, which evidence was selected, which alternative rejected, what changed after critique.

## Pair the task you cannot defend with a twin

The structural option here is to stop choosing between a pedagogically sound task and a defensible one. [[roe-assessment-twins-2026|Roe, Perkins and Giray (2026)]] propose **assessment twins**: pair the AI-vulnerable task, a take-home essay or analysis, with a second, less vulnerable task that assesses the *same* outcomes, scheduled closely enough for cross-verification, and marked interdependently. Their mapping runs across Messick's six strands of validity evidence, and their design process has three steps: identify the vulnerabilities, align outcomes and choose the twin, then develop marking that connects the two. The take-home analysis keeps its value for extended inquiry. The twin might be a short case variation, an explanation of one key decision, or a brief oral or multimedia defense.

The companion question is ownership. [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani and Buckingham Shum]] argue that coauthorship with generative AI undermines several forms of validity evidence, and propose **coauthorship integrity** as a source of validity evidence in its own right, violated when a student submits AI-generated content they do not understand. To check ownership at scale they report work on an **AI Viva**: a conversational agent that runs a hybrid viva voce, asking comprehension questions of controllable type and complexity, validated in depth by expert educators and assessment specialists. Weigh that against proctoring everything. A spoken defense of one's own reasoning scales where room monitoring does not, and it produces evidence about understanding.

## Decide what the AI you supply is allowed to do

What matters is the difference between embedded, constrained AI and an unattached chatbot. The two produce different results.

The [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Open University's AIDA assistant]] is the best-documented embedded case: six iterative design-based studies over 18 months with 498 students and 20 staff, at an institution serving 200,000-plus learners across more than 50 countries. In an exploratory randomized trial, students using AIDA spent **twice as long** and visited more pages in their course than the control group, and **96%** wanted the assistant available in their formal studies. The same institution's experience with an external, unattached chatbot went the other way.

[[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga and Johnson's (2025) review]], 63 citations across 32 countries, adds a social condition: students who used ChatGPT *alongside* teacher tutoring perceived greater [[learning-gains]] than those who used it alone. An assistant supplements the instructor or it replaces the relationship, and only one of those is a course design.

Two cautions deserve weight. KhanMigo's failure was not technical. Learners did not engage with the chatbot and evidence of gains was limited, which points at [[governance|organizational readiness]] and instructional fit. The instructor side is not ready either: in a comparison of South African teacher preparation, self-reported TPACK for AI-integrated science teaching was **64.0%** at a campus-based university against **47.4%** at a distance university, with pedagogical knowledge the weakest domain in both ([[online-teaching-and-learning]]). Deploying an assistant into an asynchronous course does not train the people who must judge its output.

## Grade the movement in a discussion

Discussion forums are where an asynchronous course builds [[community-of-inquiry|community]] or quietly becomes a submission box. Two findings should shape what you automate there.

Timing is the hard part. [[llm-facilitation-timing-online-discussions|Tsirmpas and colleagues]] built the PEFK corpus to compare facilitation datasets, then ran the first survey of facilitation *timing* with expert human facilitators and LLM judges. Humans were more cautious about intervening. LLMs were excessively eager. Both were more certain when judging that facilitation was **not** needed than when judging that it was. Trained classifier models outperformed the LLM setups, and even then the existing datasets capped performance. Practical reading: keep autonomous moderation off the critical path, and if you use AI in a discussion at all, configure it to stay quiet by default.

Summaries help students navigate a forum without making them participate. With 128 university students across three iterations, [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao and Cukurova (2026)]] found AI-generated discussion summaries broadened exposure to peers' contributions and strengthened network connectedness, the weak ties social-capital theory calls bridging, by lowering the effort of finding meaningful posts. They did not stop viewing activity declining across the course. Summarization is a navigational [[scaffolding|scaffold]].

The structure that holds up is a sequence rather than a thread: **position, challenge, reconsideration.** Students commit to an interpretation grounded in the course material, then meet another perspective, counterexample or critique, then explain whether and how their reasoning moved. What you grade is the movement between ideas. A submitted post plus two replies stopped demonstrating it the moment an agent could mine a peer's posts and impersonate a classmate's life history to order.

Because what an agent imitates is surface behavior, your own contributions become the scarce resource. Replying mechanically to dozens of individual posts is the weakest form of teaching presence; synthesizing across the discussion is the most: *three assumptions keep appearing in your analyses; several of you read this evidence differently; this argument is convincing until we introduce this counterexample.* That is [[teacher-role|orchestration]] rather than message production.

The framework question underneath both is accountability. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim and Anderson (2026)]] argue that generative AI unsettles the [[community-of-inquiry]] assumption that presence indicators can be attributed to humans at all. They treat GenAI as an epistemic condition and presences as sociotechnical accomplishments whose relationship to inquiry quality depends on where human accountability sits. Concretely, decide and state who is accountable for what in each exchange instead of assuming presence arises because a forum exists.

## Keep the term moving without a room to walk into

Self-paced formats assume [[self-regulated-learning|self-regulation]] and rarely teach it. The evidence on which behaviors actually correlate with staying on task is unusually practical.

Surveying 530 college students with association-rule mining and clustering, [[decreasing-digital-distraction-college-online-learning-2026|Shi et al. (2026)]] found that self-regulated learning behaviors, **goal setting, environment structuring and time management**, co-occurred most consistently with low digital distraction, along with learner-instructor and learner-content [[student-engagement|engagement]] and technical competence. Reliance on peer help-seeking and learner-learner engagement appeared *less* often in the low-distraction profiles. Structure the environment and the schedule before you design another group activity.

Self-regulation is also not a fixed trait. Across a full semester with 75 first-year students, [[song-genai-learning-partner-srl-over-time-2026|Song et al. (2026)]] found it functioning as both a stable aptitude and a fluctuating state. Individual baselines held steady while metacognitive knowledge and [[well-being]] declined systemically across the term, driven by curriculum demands such as major assessment deadlines. Clustering deadlines may be an efficient administrative choice, and it is also a measurable tax on the regulation your format depends on.

The intervention window is knowable. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries and Koprinska (2025)]] showed that interpretable machine learning on content-interaction logs predicts module-level progress and flags dropout outcomes up to **7-8 days before module deadlines** in large-scale online programming courses. That is enough notice to send a specific nudge to a specific student, which beats discovering the failure at grading time. For [[adult-learning|adult]] and distance learners, the AI-ALOE design guidelines add the constraint that matters most: mobile access, offline capability, and genuine asynchronous availability, since these learners study in fragments of time between other obligations.

## Decide what to automate in production

Two uses have reasonable evidence behind them, and both target instructor workload.

**Production cost.** [[mooc-to-maic|MAIC]] reframes the MOOC's "one video for N students" broadcast as "N agents for one student," using specialized teacher, assistant, classmate and analyzer agents on a shared model foundation. Its authors report collapsing course production from roughly **\$25,000 and 60 hours** per MOOC to **under $2 and 30 minutes**, piloted at Tsinghua across two courses with **100,000+ learning records from 500+ students**, and released as open-source OpenMAIC. Personalized media is the same idea at the asset level: in a large online course, [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] found students preferred AI-generated personalized videos over non-personalized human-recorded ones, with the personalization effect outweighing the value placed on a human presenter.

**Forum navigation.** The summary scaffold above reduced the cost of locating good contributions without adding to the instructor's reading load.

Three tasks stay with you: deciding whether a piece of writing is the student's own thinking, judging whether a discussion needs intervention, and calibrating difficulty. Generated material also needs pedagogical review before it carries credit. Cheap production is a separate question from sound design.

## Name the AI's role and check the student still has one

"Students may use AI" is too broad a specification to design against. Naming the role is what makes an activity designable, and roles carry consequences for presence: a study of generative AI in marketing education distinguishes **tutor, teammate and tool**, shows each influencing teaching, social and cognitive presence differently, and lists the familiar ethical exposures of data privacy, plagiarism, dependency and assessment fairness ([[genai-marketing-education-roles-2026|GenAI in Marketing Education]]). The same model can be a Socratic questioner before an assignment, a critic after a first draft, a simulated stakeholder during a case analysis, an opponent whose argument must be rebutted, a hint-giving tutor during practice, or an editor brought in after the substantive reasoning exists. Those are different activities, and conflating them is how "AI is allowed" comes to mean "nothing was designed."

[[scaffolding]] supplies the test. Support should help learners do what they cannot yet do alone, and should fade as competence develops. A model that keeps supplying complete solutions is doing the task. For every AI-enabled activity, you should be able to finish this sentence without hesitation:

*The AI's job here is _____, while the student's job is ________.*

If the second blank contains little thinking, the activity needs redesigning.

## Ask them to judge an answer they did not write

[[ai-literacy]] covers critical evaluation, [[metacognition|metacognitive]] judgment and knowing when to skip the tool. Self-reported confidence is a poor proxy for demonstrated competence.

One change any asynchronous course can adopt immediately: **sometimes give students the AI output yourself.** Hand over two competing answers and ask which is stronger and why. Ask for the weakest claim, the missing assumption, the unverifiable source, the plausible explanation that is nonetheless wrong. Ask what evidence would change their mind.

Framed that way, the capability being graded is whether a student can recognize an answer that deserves trust, which is closer to what the discipline requires and far harder to delegate. The [[verify-ai-output|verification practices]] are where the technique lives. What matters here is putting evaluation inside the graded task instead of leaving it as advice in a module announcement.

## What instructional designers get wrong about asynchronous courses

The submission is the problem, so the submission is what needs fixing. It is also the only channel you have, which is why tightening the artifact alone changes little. Add a second channel: a process record, a recorded explanation, one unaided measurement.

Flexibility means the student owns the pacing. The format assumes self-regulation, and the 75-student semester study shows metacognitive knowledge and well-being declining as deadlines cluster. Pacing is a design decision you make for them.

A forum is participation, so I count posts. The agent demonstration above produced a post that mined peers and invented a life history; a count cannot distinguish it from a good one. The Hao and Cukurova summaries improved navigation and left viewing activity declining anyway.

Adding an assistant makes the course AI-integrated. AIDA was purpose-built, embedded and iterated over six studies; an external chatbot at the same institution went the other way, and KhanMigo's learners simply did not engage.

Process evidence means documenting everything. Collecting every prompt and every keystroke produces paperwork and little else. The version worth grading asks for a few decision points: which evidence was selected, which alternative rejected, what changed after critique.

## What will come back at you

**"These are adults who chose an asynchronous course. If they let AI write it, that is their decision."** The choice argument would hold if the course certified nothing. It does. The ALEKS evidence shows a shortcut producing an appearance of competence that does not survive a proctored check, and the cost lands later, in the next course, the licensure exam or the job. There is an equity edge: the learners most likely to offload are often those with the least time, the group an asynchronous course exists to serve.

**"Detection is the answer."** Detection is contested, and the proctoring result shows why design beats policing: the harm disappeared when the conditions changed. Detection also carries false-positive costs and turns instruction into an arms race. Redesign the task and keep one unassisted measurement. See [[reduce-ai-cheating]] and [[redesign-assessment-ai-era]].

**"Teaching presence is impossible at a distance, so async is inherently inferior."** Presence in an asynchronous course is designed. The CoI reconceptualization above says its indicators are sociotechnical accomplishments in the GenAI era, and the AIDA trial doubled time on task in a course with no synchronous meetings at all.

**"Proctoring is surveillance and I will not impose it."** A defensible position, and it leaves options open. Process-revealing artifacts, asynchronous oral assessment and the AI Viva capture reasoning without monitoring anyone's room. If you do use a proctored condition, put it in the syllabus, explain the reasoning, and keep it to the assessments that certify competence.

**"Then make it all synchronous and proctored."** Many students choose asynchronous study because of employment, caregiving responsibilities, disabilities or geography. Detection carries its own equity costs too: tools that flag non-native writers disproportionately produce false positives that penalize honest work ([[ai-detection]]). The proportionate alternative is a small number of verification moments inside an otherwise flexible course: a short recorded explanation, a personalized application, a response to an instructor-selected question, an annotated decision trail, a low-stakes individual check. Verification should raise the validity of your evidence and keep the flexibility that made the format worth offering.

## What the evidence does not settle

The [[ai-distance-education-systematic-review-2026|systematic review of AI in distance education]] (56 articles, 2020-2025) covers personalization (24 studies), assessment and feedback (19), human-AI interaction (17) and governance and equity, and concludes that the base is short-term and cross-sectional, with little longitudinal work. The [[ai-student-engagement-online-learning-review-2025|review of AI and student engagement in online learning]] (24 studies) is limited to one database, treats engagement only, and conflates synchronous with asynchronous contexts, so its conclusions are not asynchronous-specific. Asynchronous oral assessment rests on two studies in two courses. MAIC is a pilot. Facilitation-timing datasets cap performance even with trained classifiers. No study here follows an asynchronous cohort long enough to show whether redesigned assessment produces durable learning or only better evidence of it. All of it is strong enough to change your next course and too thin to justify a policy claim.

## What to do this week

**1.** Pick your highest-stakes assessment and add one condition the student completes unassisted. Tell them why it exists.

**2.** Take the assignment AI now completes end-to-end and rewrite it so the process is the artifact: a decision log, a staged draft, a self-explanation, a comparison of two attempts.

**3.** Convert one major assessment to an asynchronous oral defense with embedded rubrics, and set the AI permission per task in the syllabus where students will actually read it.

**4.** Space the major deadlines, and block a 7-8 day pre-deadline window for contacting students whose interaction data has gone quiet.

**5.** Run three questions over your weakest assignment. Could an AI system complete this activity without the student understanding the material? What cognitive activity is supposed to produce the learning here? What evidence will show that the student actually performed that activity? If the first answer is yes and the other two are hard to answer, the problem sits in the learning design, and no wording of the policy will fix it.

**Where to go next:** the course-level rules belong in [[course-ai-policy]]; the assessment rebuild is covered in [[redesign-assessment-ai-era]]; the reliance problem underneath it in [[reducing-over-reliance]]; instructor workloads and what AI realistically removes in [[ai-save-instructor-time]]; and the design-level view of embedding AI into a learning experience in [[designing-ai-into-learning]].
