---
title: Online Teaching and Learning
created: "2026-08-20T04:20:00-04:00"
updated: "2026-09-26T07:13:32-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading, learning-design]
pedagogy: [online-teaching-and-learning, pedagogy]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_resources: [liascript, claw-ed]
connected_faqs: [asynchronous-online-courses-ai]
reviewed_by: [editor]
---

> **Online teaching and learning** — the pedagogy and practice of teaching and learning that happens through digital, network-mediated environments rather than in a shared physical classroom. It spans fully online courses, Massive Open Online Courses (MOOC), blended and hybrid formats, and distance education. For the knowledge base, the central question is how [[generative-ai]] reshapes the opportunities, challenges, and recommended practices of teaching at a distance — from scalable [[personalized-learning|personalization]] to new [[academic-integrity]] and [[cognitive-offloading]] risks.

## Questions to Consider

- You've likely taken an online course or taught one. What did you lose and what did you gain when the physical classroom was removed—and how did that reshape what instructors could rely on?
- The page argues online teaching is a distinct pedagogy, not just a delivery mechanism. In what concrete ways does the online medium change which teaching strategies are even possible or effective?
- An [[rct]] found unguarded AI assistance raised practice performance but lowered unassisted exam scores, while a 'hint-not-answer' tutor removed the harm. Before reading further, can you explain why giving students the answer might inflate immediate performance yet erode durable learning?
- Online assessment can't always tell assisted from independent work. If detection tools are a 'partial, contested response,' what alternative assessment designs might reveal genuine understanding instead?
- How does the perceived availability of an effortless AI shortcut reshape student motivation in a self-paced, screen-based course? What might you design to counter it?
- An autonomous agent can now log into a learning management system, read the material, answer the quiz and post to the discussion. If producing the artifact no longer demonstrates learning, what would you need to see instead?
- AI can now generate a MOOC-equivalent course in minutes at a fraction of the cost. What are the pedagogical trade-offs of 'N agents for one student' versus 'one video for N students'?

## Introduction

Online teaching and learning is a distinct [[pedagogy|pedagogical]] context, not merely a delivery mechanism. It removes the physical co-presence that scaffolds attention, [[motivation]], and informal interaction, and it substitutes structured digital interaction — discussion forums, asynchronous materials, video, [[intelligent-tutoring|tutoring agents]] — for face-to-face contact. This changes what instructors can rely on, what students can access, and how learning is designed and assessed. As an umbrella concept in the [[pedagogy]] landscape, it sits alongside [[active-learning]], [[collaborative-learning]], and [[self-regulated-learning]] but is distinguished by the medium: the constraints and affordances of the online environment shape which strategies are viable.

The rise of generative AI lands directly in this context. Online learners already work through screens and software, so AI tools are natural neighbors; at the same time, online assessment is harder to invigilate, making misuse easier and the stakes higher. The evidence in this knowledge base shows that AI can be a powerful ally for online teaching and learning — and, configured poorly, a significant source of learning harm.

[[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga & Johnson (2025)]]'s critical literature review (63 citations across 32 countries) organizes this landscape into four interconnected themes that recur throughout the page below: the types and purposes of AI integration, pedagogical approaches (AI literacy, self-regulated learning), benefits, and challenges. Their central caution — that these themes *overlap* and that online AI integration is a sociotechnical undertaking anchored in pedagogy and human relationships rather than technology adoption alone — aligns with the page's framing of online teaching as a distinct pedagogy. Notably, they report that students using ChatGPT *alongside* teacher tutoring perceived greater [[learning-gains]] than those using it alone, reinforcing the hybrid human–AI collaboration emphasis threaded through this page.

The development that moved this from a design question to an urgent one is that generative AI no longer only writes text a student could have written. Autonomous [[agentic-ai|agents]] now log into a learning management system, read the course materials, answer the quizzes, read classmates' posts, and submit the work. Three demonstrations on a live undergraduate psychology course show what that means in practice: two quiz completions, one in roughly **12 minutes** and one in **under 5 minutes**, both scoring **10/10**, and a discussion post in which the agent mined its peers' posts and then fabricated a credible first-person life history to answer them — against a public record of at least **15 documented agent runs** across Canvas, Moodle and Brightspace using **seven agent tools**. [[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou and El-Haddad (2026)]] argue this is an [[assessment-validity]] problem before it is an integrity one: what agent completion removes is the assumption that the submitted work was produced by the person whose learning is being assessed. The design question for online teaching therefore shifts from how to detect misuse to what evidence of learning an online course can still produce, which is the thread running through the sections below.

## Formats and settings

Online teaching and learning takes several related forms that share the medium but differ in reach and structure:

- **Blended and hybrid learning.** Models that combine in-person and online components, intentionally integrating digital activities, materials, and interactions with face-to-face teaching. Blended formats ask instructors to decide what is best done synchronously vs. asynchronously and online vs. in person — decisions that [[learning-design]] principles organize and that AI both supports and complicates. In the blended context, AI tools offer opportunities for [[personalized-learning|personalization]] and always-on support while raising integrity and offloading risks that span both the online and in-person portions. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] illustrate this in two blended settings — flipped university classrooms and reflective writing in vocational education — where a learning analytics dashboard (DashED) communicated ML-derived [[self-regulated-learning]] profiles to teachers. Adoption concerns diverged by context: flipped-classroom (university) teachers worried most about data anonymization and student opt-out, whereas reflective-writing (vocational) teachers feared misuse of the tool by fellow educators and stressed the need to contextualize data. In use, flipped-classroom teachers followed a sequential exploration and favored course-level adaptation and showing dashboards in class, while vocational teachers revisited summary pages and used the tool mainly for individual coaching sessions — evidence that blended analytics design must be context-aware.
- **Synchronous versus asynchronous design.** The distinction matters more than the delivery medium, because the two formats make opposite demands on the learner. Synchronous sessions carry attention, pacing and accountability inside the session itself; asynchronous courses have to design them in, since the learner alone decides when to work and receives no ambient accountability from a room. The research base often blurs this: the knowledge base's review of AI and [[student-engagement|engagement]] in online learning (24 studies) treats engagement alone and explicitly conflates synchronous with asynchronous contexts, so its conclusions should not be read as asynchronous-specific. What is asynchronous-specific is the evidence on how self-paced learners lose focus and pace — self-regulated behaviors such as goal setting, environment structuring and time management coincide most with low digital distraction ([[decreasing-digital-distraction-college-online-learning-2026|Shi et al. 2026]], 530 students), while metacognitive knowledge and [[well-being]] decline across a term in step with clustered assessment deadlines ([[song-genai-learning-partner-srl-over-time-2026|Song et al. 2026]], 75 students). The practical counterpart is the FAQ on [[asynchronous-online-courses-ai|designing and facilitating asynchronous courses when AI can do the work]].
- **Distance education.** Programs designed for learners who study remotely, often at scale and across regions (e.g., the Open University's 200K+ learners). Distance learning is where 24/7, context-embedded AI support and the impossibility of in-person invigilation are most salient. Comparative evidence from South African teacher preparation shows the medium itself is associated with preparedness: [[ai-training-science-teacher-tpack-distance-2026|Mnguni et al. (2026)]] found self-reported TPACK for AI-integrated science teaching higher among final-year student teachers at a campus-based university (64.0%) than at a distance education university (47.4%), with the weakest reported domain in both settings being Pedagogical Knowledge. The pattern warns that distance programs cannot assume that the same AI training produces the same readiness, and that the design of the training, not its presence, is what differs.

## Opportunities and benefits of AI for online teaching and learning

- **Scalable personalization.** Traditional MOOCs excel at reach but struggle to adapt — "one video for N students." [[llm]]-driven agent systems ([[mooc-to-maic|MAIC]]) invert this to "N agents for 1 student," using specialized Teacher, Assistant, Classmate, and Analyzer agents to deliver [[adaptive-learning|adaptive instruction]], personalized feedback, and dynamic learning paths at MOOC scale. Systems like [[learnmate2-llm-adaptive-learning|LearnMate²]] address the "personalization gap" in open online learning with personalized study plans, real-time contextual assistance, and [[adaptive-learning|adaptive]] activities. Personalized video is a concrete route to this goal: [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] found students in a large online course preferred AI-generated personalized videos over non-personalized human-recorded ones — a preference whose personalization effect outweighed the value placed on a human presenter — suggesting scalable, [[generative-ai]]-produced personalized media can close the "one video for N students" gap in online instruction.
- **Always-on, context-embedded support.** In distance and [[adult-learning|adult learning]] contexts where learners study at work or at home, 24/7 support embedded in the course is a major benefit. The [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Open University's AIDA assistant]] found purpose-built, in-environment GenAI support increased [[student-engagement|engagement]] (doubled usage time in an exploratory trial), with 96% of students wanting it in their formal studies.
- **Conversational, dialogic tutoring at scale.** [[conversational-ai]] tutors built on proven [[intelligent-tutoring]] technology ([[conversational-ai-tutors-framework|keep/change/center/study framework]]) promise high-quality, dialogue-based tutoring — engaging students' thoughts, questions, and [[misconceptions]] — that is far more scalable than human tutoring.
- **Facilitation and analytics.** AI can support [[collaborative-learning|online discussions]] and [[learning-analytics]], forecasting engagement, and helping instructors allocate attention. [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao & Cukurova (2026)]] add that LLM-generated discussion summaries can act as navigational [[scaffolding|scaffolds]] in large asynchronous forums — broadening students' peer exposure and the network conditions for bridging social capital without burdening students or instructors with the summarizing workload.
- **Early-warning analytics for at-risk online learners.** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] show that interpretable [[reinforcement-learning|machine learning]] on content-interaction logs predicts module-level progress and flags dropout ("No submission") outcomes in large-scale online [[cs-education|programming]] courses up to 7–8 days before module deadlines, giving online instructors a concrete window to [[teacher-role|intervene]] with disengaged students rather than discovering failure only after the fact.
- **Affordability and speed.** AI can generate course materials at a fraction of traditional cost — MAIC reduced MOOC course production from ~\$25K/60 hours to under \$2/30 minutes.

## Challenges of online teaching in the AI era

The online medium and generative AI combine to intensify a specific cluster of challenges that instructors must confront head-on. Where face-to-face teaching can rely on presence, immediate accountability, and invigilation, online teaching must design explicitly for them.

### Academic integrity and cheating

Online courses already present invigilation challenges — in-person proctoring is often unfeasible for distributed, asynchronous learners. Generative AI compounds this by making AI-generated work indistinguishable from student work and by enabling contract-cheating style shortcuts at scale. The knowledge base's evidence on [[academic-integrity]] and [[ai-misuse-learning-harm]] shows that misuse is driven less by AI errors than by students copying answers instead of learning. Because online assessment frequently cannot distinguish assisted from independent work, misuse can inflate immediate grades while eroding durable knowledge — a perceived-vs-actual gap that is especially dangerous at a distance where instructors have less visibility into student process. Detection tools are a partial, contested response ([[ai-detection|AI plagiarism detection]], [[remote-proctoring]]), and the knowledge base's stance favors [[authentic-assessment|authentic]], [[process-oriented-assessment|process-revealing]] assessment over detection arms races.

### AI misuse and cognitive offloading

The most serious risk is that online learners outsource the very cognitive work that builds understanding. The [[genai-performance-vs-learning|performance–learning gap]] shows generative AI easily boosts immediate performance while bypassing the deep processing required for durable learning. Field evidence is direct:

- A causal RCT (~1,000 high-school math students) found unguarded AI assistance raised practice performance **+48%** but reduced unassisted, closed-book exam scores **−17%** — the students who never had AI access outperformed those who did. A [[guardrails|guardrailed]] hint-not-answer tutor eliminated the harm.
- Population-scale behavioral data (3.2M ALEKS interactions) found study time on AI-susceptible problems fell **−26.9%** after ChatGPT's release, with a **−25% decline in odds of correct proctored retention items** — an effect that vanished under proctoring, pinning it on off-platform AI use.

Online learning is particularly vulnerable: the medium already distances learners from immediate accountability, and self-paced, screen-based work invites the "ask for the answer" shortcut that [[cognitive-offloading]] [[research-methods-aied|research]] identifies as the core harm mechanism. The response is not to ban AI but to apply [[guardrails]] — hint-not-answer scaffolding, knowledge grounding, and [[human-in-the-loop-ai|human oversight]] — so that AI augments rather than replaces learner cognitive work.

### Other challenges

- **Over-eager AI facilitation.** LLM facilitators are excessively eager to intervene in online discussions, which can irritate participants and derail good conversation; human caution is the better model ([[llm-facilitation-timing-online-discussions|Tsirmpas et al.]]).
- **Motivation erosion.** The perceived availability of an effortless AI shortcut reduces autonomous [[motivation]] and persistence, compounding learning harm.
- **Equity and the digital divide.** Access to reliable devices, connectivity, and high-quality AI varies; online learning with AI can widen rather than narrow [[equity-in-ai-education]] gaps ([[digital-divide]]).
- **Data privacy and trust.** Online platforms collect rich learner data; AI systems raise transparency and privacy concerns ([[privacy]]), especially for adults balancing work and study.
- **Organizational readiness.** The demise of KhanMigo — learners not actually engaging with the chatbot, with limited evidence of gains — cautions that technical capability must be matched with [[governance]] and organizational readiness.

### Assessment validity when a submission can be produced without the learner

If invigilation is unfeasible and an agent can complete the work, the response the knowledge base favors is to change what counts as evidence rather than to police harder. Four design responses recur across the recent literature.

**Pair the vulnerable task with a twin.** [[roe-assessment-twins-2026|Roe, Perkins and Giray (2026)]] keep the pedagogically valuable but AI-vulnerable assessment — the take-home essay or case analysis — and add a second, less vulnerable task that assesses the *same* [[learning-gains|learning outcomes]], scheduled closely enough for cross-verification and marked interdependently. Their mapping runs across Messick's six strands of validity evidence, and the design process is three steps: identify the vulnerabilities, align outcomes and choose the twin, then develop marking that connects the two. A short case variation, an explanation of one key decision, or a brief oral defense can serve as the twin.

**Target ownership rather than authorship.** [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani and Buckingham Shum]] argue that blended human–AI authorship undermines several forms of validity evidence, and propose **coauthorship integrity** as validity evidence in its own right: violated when a student submits AI-generated content they do not understand. To check understanding at scale they report an **AI Viva**, a conversational agent that runs a hybrid viva voce with comprehension questions of controllable type and complexity, validated by expert educators and assessment specialists. For online courses this is a genuinely scalable form of verification, and it produces evidence about comprehension rather than about who was in the room.

**Move the oral exam online.** [[asynchronous-oral-assessment-2026|Pentland, Lowenthal and Krier (2026)]] deliver prompts just in time and have students record brief, time-limited webcam responses they cannot revisit, graded against embedded rubrics with transcripts generated automatically. Across two studies — an intermediate accounting pilot and a data analytics course — students scored higher on these assessments than on in-person multiple-choice exams (significant in the second study, a positive trend in the first), with moderate cross-format correlations supporting convergent validity; students reported preparing differently and using more active study strategies. The format addresses the async problem directly: the thinking is performed live at a time of the student's choosing, at administrative cost that does not scale with cohort size.

**Sequence the work so the reasoning is committed first.** [[brcic-effortless-trap-productive-struggle-2026|Brcic and Frljic (2026)]] frame the design question as **placement** rather than permission, and the causal evidence they assemble shows the outcome flipping on placement alone — the same unguarded helper that left high-school students about **17% worse** on an unaided exam did no harm once rebuilt to withhold answers, while a well-engineered [[intelligent-tutoring|tutor]] roughly **doubled** learning. Their diagnostic is the one to keep: *if letting AI in makes the task feel effortless, it is in the wrong place.* Operationally that yields a sequence an online course can write into the assignment — think, commit, use AI, critique, revise, explain — where the commitment step is what makes the rest assessable, because an artifact produced from scratch has no revision history to interrogate. Underneath sits a state this knowledge base names [[metacognitively-discordant-completion-genai-2026|metacognitively discordant completion]]: correct, complete work submitted by a student who knows the understanding never arrived, which in an asynchronous course is indistinguishable from success unless the design asks for something more.

Whatever combination an instructor chooses, one constraint should shape it. Online study is frequently the only accessible option — students choose it because of employment, caregiving responsibilities, disabilities or geography — so verification has to be **small and proportionate**: a short recorded explanation, a personalized application, a response to an instructor-selected question, an annotated decision trail, a low-stakes individual check. Detection carries its own equity costs here, since tools that flag non-native writers disproportionately generate false positives ([[ai-detection]], [[digital-divide]]).

## Recommended pedagogical strategies for online teaching and learning

- **Active and interactive learning.** Prefer strategies that keep students doing and thinking rather than passively receiving — [[active-learning]], interactive exercises, and [[socratic-method|Socratic]] dialogue. AI that prompts reasoning (rather than supplying answers) preserves the productive struggle and [[desirable-difficulties]] that build durable learning.
- **Scaffolded, guided support.** Use [[scaffolding]] that fades as learners progress, and design [[self-regulated-learning]] supports so learners direct their own learning rather than depending on the tool.
- **Collaborative and discussion-based learning.** Structure online discussions and group work deliberately; use [[collaborative-learning]] activities and, when AI participates, calibrate its facilitation and its role as a peer.
- **Authentic, process-revealing assessment.** Shift toward [[authentic-assessment]] and assessments that capture process — drafts, oral defenses, self-explanation, reflective [[eportfolio|portfolios]] — which are more AI-resistant and reveal genuine understanding.
- **Personalized and adaptive paths.** Use AI-enabled [[personalized-learning|personalization]] and [[adaptive-learning|adaptive]] activities to tailor pacing and difficulty, while keeping personalization deep (task sequencing, difficulty calibration) rather than merely surface-level (custom examples).
- **Social presence and community-building.** Deliberately cultivate social presence and [[collaborative-learning|community]] — the core of the [[community-of-inquiry]] framework — through companion AI, synchronous check-ins, and peer interaction, since online isolation is a key barrier to [[student-engagement|engagement]] and belonging. In the AI era this means curating the three presences (cognitive, social, teaching) even as machine-generated discourse complicates who is "present" (see [[community-of-inquiry]]).
- **Blended [[design-thinking]].** For hybrid formats, apply [[learning-design]] principles to decide what is best done synchronously vs. asynchronously and online vs. in person, and how AI supports each.
- **Name the AI's role, and check the student still has one.** "Students may use AI" is too broad to design against. Roles carry different pedagogical consequences — a study of generative AI in marketing education distinguishes **tutor, teammate and tool** and shows each shaping teaching, social and cognitive presence differently ([[genai-marketing-education-roles-2026|GenAI in Marketing Education]]) — so an online activity should be able to state its division of labor: the AI's job here is X, the student's job is Y. If Y contains little thinking, the activity needs redesigning rather than a stricter policy.
- **Sequence discussion as position, challenge, reconsideration.** The conventional asynchronous formula of posting once and replying twice is both superficial and agent-completable. A stronger structure asks students to commit to an interpretation, meet a counterexample or critique, then explain how their reasoning moved; what is graded is the movement between ideas rather than the post count. This also relocates teaching presence: replying mechanically to dozens of posts is the least valuable form of it, while synthesizing patterns across the discussion — the assumptions that keep recurring, the disagreements worth naming, the counterexample that unsettles a consensus — is the part no agent in this literature performs.
- **Human-in-the-loop governance.** Keep educators and [[teacher-role|instructors]] in the loop over AI tools, grounded in [[tpack|pedagogical content knowledge]], so pedagogical intent — not the tool's default — drives design.

## Implications for online instructors and instructional designers

- **Guardrail the AI, don't just supply it.** Use hint-not-answer [[scaffolding]] that keeps learner cognitive work in the loop; the [[guardrails|guardrailed]]-tutor RCT shows this eliminates the exam penalty that unguarded access causes. See the [[guardrails]] concept for the full design layer ([[prompt-engineering|prompting]], [[rag]] grounding, training, QA).
- **Design AI-resistant and proctored/unassisted assessments.** Because online grading often can't distinguish assisted from independent work, include closed-book, proctored, or process-revealing assessments to surface and discourage misuse ([[ai-misuse-learning-harm]]).
- **Teach AI literacy explicitly.** Help students recognize reliance patterns and calibrate trust ([[ai-literacy]]); build [[self-regulated-learning|self-regulation]] and [[metacognition]] to counter offloading.
- **Embed AI in the learning environment, not as an external bolt-on.** Purpose-built, contextually-tuned assistants embedded in the course (like [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]]) outperform generic external chatbots and increase acceptance.
- **Calibrate AI facilitation toward human caution.** When using AI to moderate discussions, prefer settings that intervene sparingly ([[llm-facilitation-timing-online-discussions|Tsirmpas et al.]]).
- **Design for adult life constraints.** For adult and distance learners, prioritize mobile access, offline capability, and asynchronous availability ([[ai-adult-learning-guidelines-dis2026|AI-ALOE guidelines]]).
- **Co-design with students and staff, and build governance.** Participatory development, senior sponsorship, cross-unit collaboration, and robust [[governance]] are enabling factors for responsible GenAI adoption.
- **Assume an agent will attempt every unproctored activity, and design from that assumption.** The three-question test is quick and exposes weak activities: could an AI system complete this without the student understanding the material; what cognitive activity is supposed to produce the learning; what evidence will show the student performed it. When the first answer is yes and the other two are hard to answer, the problem is the learning design rather than the AI policy.
- **Keep verification proportionate to the risk.** Where competence must be certified, prefer a twin task, an asynchronous oral defense or a short comprehension check over blanket monitoring; keep the rest of the course flexible for the learners who depend on that flexibility.
- **Use analytics to support, not replace, teaching.** Leverage [[learning-analytics]] to forecast engagement and target support, but keep [[human-in-the-loop-ai|human oversight]] central.

## Connected Concepts
- [[assessment-validity]] — validity of the inference from submitted work to learning
- [[agentic-ai]] — autonomous systems that operate tools and platforms, including an LMS
- [[community-of-inquiry]] — Community of Inquiry
- [[pedagogy]]
- [[learning-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[ai-misuse-learning-harm]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[student-engagement]]
- [[digital-divide]]
- [[governance]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[authentic-assessment]]
- [[guardrails]]
- [[ai-detection]]

## Connected Articles
- [[ai-agents-complete-lms-assessment-validity-2026]] — Autonomous agents completed unproctored LMS assessments end to end: an assessment-validity problem (Hadjisolomou & El-Haddad 2026)
- [[roe-assessment-twins-2026]] — Assessment twins: pairing a GenAI-vulnerable task with a closely scheduled, less vulnerable one on the same outcomes
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Coauthorship integrity as validity evidence, and the AI Viva as scalable verification
- [[asynchronous-oral-assessment-2026]] — Asynchronous oral assessments: time-limited unrevised recordings graded against embedded rubrics
- [[brcic-effortless-trap-productive-struggle-2026]] — The effortless trap: placement of AI rather than permission or prohibition
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitively discordant completion: correct work submitted without understanding
- [[decreasing-digital-distraction-college-online-learning-2026]] — Which self-regulated strategies coincide with low digital distraction (530 students)
- [[song-genai-learning-partner-srl-over-time-2026]] — SRL as stable aptitude and fluctuating state; metacognition and well-being declining across a term
- [[genai-marketing-education-roles-2026]] — AI as tutor, teammate and tool: roles and their effects on presence
- [[kirsanov-beyond-detection-ai-online-assessments-2026]] — Beyond detection: assessment design for online settings
- [[reconceptualizing-community-inquiry-generative-ai]] — Reconceptualizing Community of Inquiry in the age of generative AI
- [[ai-student-engagement-online-learning-review-2025]]
- [[lock-integrating-ai-online-learning-higher-ed-2025]] — Integrating AI in online learning in higher education: a four-theme critical literature review
- [[ai-online-education-engagement-satisfaction-2026]]
- [[ai-distance-education-systematic-review-2026]]
- [[ai-decision-support-online-learning-assessment-2026]]
- [[mooc-to-maic]] — From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents
- [[learnmate2-llm-adaptive-learning]] — LearnMate²: Personalized and Adaptive Support System for Online Learning
- [[llm-facilitation-timing-online-discussions]] — Human and LLM Facilitator Tendencies in Online Discussions
- [[elevate-genai-virtual-tutors]] — ELEVATE: Human-Centered GenAI Virtual Tutors
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — Implementing AIDA at the Open University
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[deeptutor]] — DeepTutor: Toward Agentic Personalized Tutoring
- [[educasim-cs1-instructional-practice]] — EducaSim: scalable role play for massive online courses
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
- [[zhang-ml-student-progress-programming-2026]]
- [[personalized-ai-generated-videos-preference-2026]] — Students prefer personalized AI-generated videos over non-personalized human-recorded ones (Tomlinson et al. 2026)
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — AI-Generated Summary-Driven Learning Design in Online Discussion Forums
- [[ai-training-science-teacher-tpack-distance-2026]] — Campus-based student teachers reported higher TPACK for AI-integrated science teaching than distance education peers (64.0% versus 47.4%)
