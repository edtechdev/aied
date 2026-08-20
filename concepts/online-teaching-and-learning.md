---
title: Online Teaching and Learning
created: "2026-08-20T04:20:00-04:00"
updated: "2026-08-20T04:35:00-04:00"
type: concept
tags: [online-education, online-learning, distance-learning, mooc, blended-learning, pedagogy, instructional-design, generative-ai, higher-ed, academic-integrity, cognitive-offloading, ai-literacy]
confidence: high
---

> **Online teaching and learning** — the pedagogy and practice of teaching and learning that happens through digital, network-mediated environments rather than in a shared physical classroom. It spans fully online courses, Massive Open Online Courses (MOOC), blended and hybrid formats, and distance education. For the wiki, the central question is how [[generative-ai|generative AI]] reshapes the opportunities, challenges, and recommended practices of teaching at a distance — from scalable [[personalized-learning|personalization]] to new [[academic-integrity|academic integrity]] and [[cognitive-offloading]] risks.

Online teaching and learning is a distinct [[pedagogy|pedagogical]] context, not merely a delivery mechanism. It removes the physical co-presence that scaffolds attention, [[motivation]], and informal interaction, and it substitutes structured digital interaction — discussion forums, asynchronous materials, video, [[intelligent-tutoring|tutoring agents]] — for face-to-face contact. This changes what instructors can rely on, what students can access, and how learning is designed and assessed. As an umbrella concept in the [[pedagogy|pedagogies and teaching strategies]] landscape, it sits alongside [[active-learning]], [[collaborative-learning]], and [[self-regulated-learning]] but is distinguished by the medium: the constraints and affordances of the online environment shape which strategies are viable.

The rise of generative AI lands directly in this context. Online learners already work through screens and software, so AI tools are natural neighbors; at the same time, online assessment is harder to invigilate, making misuse easier and the stakes higher. The evidence in this wiki shows that AI can be a powerful ally for online teaching and learning — and, configured poorly, a significant source of learning harm.

## Formats and settings

Online teaching and learning takes several related forms that share the medium but differ in reach and structure:

- **Massive Open Online Courses (MOOC).** Large-scale courses designed for open, unlimited participation, typically delivered through a platform to thousands of learners. MOOCs excel at reach and scalability but have historically struggled to [[personalized-learning|personalize]] instruction. Generative AI and [[agentic-ai|agentic AI]] systems (see [[mooc-to-maic|MAIC]]) are being explored as a way to combine MOOC scalability with [[adaptive-learning|adaptive]], personalized support, shifting from "one video for N students" toward "N agents for 1 student." MOOC learners' [[academic-integrity|academic integrity]] and [[cognitive-offloading|cognitive offloading]] risks are heightened by the self-paced, often unproctored nature of the medium. Technical and structural factors — instability, limited offline functionality, unclear pricing, regional payment restrictions — also shape [[beyond-moocs-how-technical-and-structural-factors-shape-learner-engagement-reten|engagement, retention, and inclusivity]] across online platforms.
- **Blended and hybrid learning.** Models that combine in-person and online components, intentionally integrating digital activities, materials, and interactions with face-to-face teaching. Blended formats ask instructors to decide what is best done synchronously vs. asynchronously and online vs. in person — decisions that [[instructional-design]] principles organize and that AI both supports and complicates. In the blended context, AI tools offer opportunities for [[personalized-learning|personalization]] and always-on support while raising integrity and offloading risks that span both the online and in-person portions.
- **Distance education.** Programs designed for learners who study remotely, often at scale and across regions (e.g., the Open University's 200K+ learners). Distance learning is where 24/7, context-embedded AI support and the impossibility of in-person invigilation are most salient.

## Opportunities and benefits of AI for online teaching and learning

- **Scalable personalization.** Traditional MOOCs excel at reach but struggle to adapt — "one video for N students." LLM-driven agent systems ([[mooc-to-maic|MAIC]]) invert this to "N agents for 1 student," using specialized Teacher, Assistant, Classmate, and Analyzer agents to deliver [[adaptive-learning|adaptive instruction]], personalized feedback, and dynamic learning paths at MOOC scale. Systems like [[learnmate2-llm-adaptive-learning|LearnMate²]] address the "personalization gap" in open online learning with personalized study plans, real-time contextual assistance, and [[adaptive-learning|adaptive]] activities.
- **Always-on, context-embedded support.** In distance and [[adult-learning|adult learning]] contexts where learners study at work or at home, 24/7 support embedded in the course is a major benefit. The [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Open University's AIDA assistant]] found purpose-built, in-environment GenAI support increased [[student-engagement|engagement]] (doubled usage time in an exploratory trial), with 96% of students wanting it in their formal studies.
- **Social presence and companionship.** Online learning often lacks the social warmth of a classroom. Identity-anthropomorphised virtual companion AI ([[enhancing-online-learning-outcomes-through-virtual-companion-ai-the-role-of-iden|Xia, Tan & Guo 2026]]) improved online learning outcomes to levels comparable to human companionship, mediated by increased social presence and positive [[affective-computing|emotion]] — evidence that AI can partly counter the isolation of online study.
- **Conversational, dialogic tutoring at scale.** Conversational AI tutors built on proven [[intelligent-tutoring|intelligent tutoring]] technology ([[conversational-ai-tutors-framework|keep/change/center/study framework]]) promise high-quality, dialogue-based tutoring — engaging students' thoughts, questions, and misconceptions — that is far more scalable than human tutoring.
- **Facilitation and analytics.** AI can support [[collaborative-learning|online discussions]] and [[learning-analytics|learning analytics]], forecasting engagement, and helping instructors allocate attention.
- **Affordability and speed.** AI can generate course materials at a fraction of traditional cost — MAIC reduced MOOC course production from ~$25K/60 hours to under $2/30 minutes.

## Challenges and risks of AI in online teaching and learning

### Academic integrity and cheating

Online courses already present invigilation challenges — in-person proctoring is often unfeasible for distributed, asynchronous learners. Generative AI compounds this by making AI-generated work indistinguishable from student work and by enabling contract-cheating style shortcuts at scale. The wiki's evidence on [[academic-integrity]] and [[ai-misuse-learning-harm]] shows that misuse is driven less by AI errors than by students copying answers instead of learning. Because online assessment frequently cannot distinguish assisted from independent work, misuse can inflate immediate grades while eroding durable knowledge — a perceived-vs-actual gap that is especially dangerous at a distance where instructors have less visibility into student process.

### Cognitive offloading and learning harm

The most serious risk is that online learners outsource the very cognitive work that builds understanding. The [[genai-performance-vs-learning|performance–learning gap]] shows generative AI easily boosts immediate performance while bypassing the deep processing required for durable learning. Field evidence is direct:

- A causal RCT (~1,000 high-school math students) found unguarded AI assistance raised practice performance **+48%** but reduced unassisted, closed-book exam scores **−17%** — the students who never had AI access outperformed those who did. A guardrailed hint-not-answer tutor eliminated the harm.
- Population-scale behavioral data (3.2M ALEKS interactions) found study time on AI-susceptible problems fell **−26.9%** after ChatGPT's release, with a **−25% decline in odds of correct proctored retention items** — an effect that vanished under proctoring, pinning it on off-platform AI use.

Online learning is particularly vulnerable: the medium already distances learners from immediate accountability, and self-paced, screen-based work invites the "ask for the answer" shortcut that [[cognitive-offloading|cognitive offloading]] research identifies as the core harm mechanism.

### Other risks

- **Over-eager AI facilitation.** LLM facilitators are excessively eager to intervene in online discussions, which can irritate participants and derail good conversation; human caution is the better model ([[llm-facilitation-timing-online-discussions|Tsirmpas et al.]]).
- **Motivation erosion.** The perceived availability of an effortless AI shortcut reduces autonomous [[motivation]] and persistence, compounding learning harm.
- **Equity and the digital divide.** Access to reliable devices, connectivity, and high-quality AI varies; online learning with AI can widen rather than narrow [[equity-in-ai-education|equity]] gaps ([[digital-divide]]).
- **Data privacy and trust.** Online platforms collect rich learner data; AI systems raise transparency and privacy concerns ([[privacy]]), especially for adults balancing work and study.
- **Organisational readiness.** The demise of KhanMigo — learners not actually engaging with the chatbot, with limited evidence of gains — cautions that technical capability must be matched with [[governance]] and organizational readiness.

## Tips and strategies for online instructors and instructional designers

- **Guardrail the AI, don't just supply it.** Use hint-not-answer [[scaffolding]] that keeps learner cognitive work in the loop, rather than answer-generating chatbots. The guardrailed-tutor RCT shows this eliminates the exam penalty that unguarded access causes.
- **Design AI-resistant and proctored/unassisted [[assessment|assessments]].** Because online grading often can't distinguish assisted from independent work, include closed-book, proctored, or process-revealing assessments to surface — and discourage — misuse (see [[ai-misuse-learning-harm|AI misuse and learning harm]]).
- **Teach AI literacy explicitly.** Help students recognize reliance patterns, calibrate trust, and understand the cost of bypassing their own cognitive work ([[ai-literacy]]). Training that builds [[self-regulated-learning|self-regulation]] and [[metacognition]] directly counters offloading.
- **Embed AI in the learning environment, not as an external bolt-on.** Purpose-built, contextually-tuned assistants embedded in the course (like AIDA) outperform generic external chatbots, and increase acceptance.
- **Co-design with students and staff, and build governance.** Participatory development, senior sponsorship, cross-unit collaboration, and robust [[governance]] are enabling factors for responsible GenAI adoption.
- **Calibrate AI facilitation toward human caution.** When using AI to moderate or facilitate online discussions, prefer settings that intervene sparingly; humans are the better model for when to step in.
- **Use analytics to support, not replace, teaching.** Leverage [[learning-analytics]] to forecast engagement and target support, but keep [[human-in-the-loop-ai|human oversight]] central.
- **Design for adult life constraints.** For adult and distance learners, prioritize mobile access, offline capability, and asynchronous availability (AI-ALOE guidelines).

## Recommended pedagogical strategies for online teaching and learning

- **Active and interactive learning.** Prefer strategies that keep students doing and thinking rather than passively receiving — [[active-learning]], interactive exercises, and [[socratic-method|Socratic]] dialogue. AI that prompts reasoning (rather than supplying answers) preserves the productive struggle and [[desirable-difficulties|desirable difficulties]] that build durable learning.
- **Scaffolded, guided support.** Use [[scaffolding]] that fades as learners progress, and design [[self-regulated-learning|self-regulated learning]] supports so learners direct their own learning rather than depending on the tool.
- **Collaborative and discussion-based learning.** Structure online discussions and group work deliberately; use [[collaborative-learning]] activities and, when AI participates, calibrate its facilitation and its role as a peer.
- **Authentic, process-revealing assessment.** Shift toward [[authentic-assessment|authentic assessment]] and assessments that capture process — drafts, oral defenses, self-explanation, reflective portfolios — which are more AI-resistant and reveal genuine understanding.
- **Personalized and adaptive paths.** Use AI-enabled [[personalized-learning|personalization]] and [[adaptive-learning|adaptive]] activities to tailor pacing and difficulty, while keeping personalization deep (task sequencing, difficulty calibration) rather than merely surface-level (custom examples).
- **Social presence and community-building.** Deliberately cultivate social presence and [[collaborative-learning|community]] (companion AI, synchronous check-ins, peer interaction), since online isolation is a key barrier to [[student-engagement|engagement]] and belonging.
- **Blended design thinking.** For hybrid formats, apply [[instructional-design]] principles to decide what is best done synchronously vs. asynchronously and online vs. in person, and how AI supports each.
- **Human-in-the-loop governance.** Keep educators and [[teacher-role|instructors]] in the loop over AI tools, grounded in [[tpack|pedagogical content knowledge]], so pedagogical intent — not the tool's default — drives design.

## Connected Concepts

- [[remote-proctoring]]
- [[pedagogy]]
- [[instructional-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[ai-misuse-learning-harm]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[adult-learning]]
- [[higher-ed]]
- [[student-engagement]]
- [[digital-divide]]
- [[privacy]]
- [[governance]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[authentic-assessment]]

## Connected Articles

- [[ai-student-engagement-online-learning-review-2025]]
- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[ai-online-education-engagement-satisfaction-2026]]
- [[interactive-online-learning-ai-2025]]
- [[ai-communities-of-inquiry-2026]]
- [[ai-distance-education-systematic-review-2026]]
- [[ai-decision-support-online-learning-assessment-2026]]
- [[chatgpt-perception-online-learning-engagement-2026]]
- [[mooc-to-maic]] — From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents
- [[learnmate2-llm-adaptive-learning]] — LearnMate²: Personalized and Adaptive Support System for Online Learning
- [[enhancing-online-learning-outcomes-through-virtual-companion-ai-the-role-of-iden]] — Enhancing online learning outcomes through virtual companion AI
- [[llm-facilitation-timing-online-discussions]] — Human and LLM Facilitator Tendencies in Online Discussions
- [[beyond-moocs-how-technical-and-structural-factors-shape-learner-engagement-reten]] — Beyond MOOCs: Learner engagement, retention, inclusivity
- [[elevate-genai-virtual-tutors]] — ELEVATE: Human-Centered GenAI Virtual Tutors
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — Implementing AIDA at the Open University
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[engagement-forecasting-its]] — Forecasting Effort and Progress in Online Learning
- [[critical-thinking-biological-sciences-ai-2025]] — Promoting Critical Thinking in the Era of AI
- [[deeptutor]] — DeepTutor: Towards Agentic Personalized Tutoring
