---
title: Agentic AI
created: "2026-08-01T04:07:54-04:00"
updated: "2026-09-04T14:18:00-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
tags: [agentic-ai, generative-ai, llm, intelligent-tutoring, higher-ed, scaffolding, student-experience, ai-literacy, k-12, stem-education, human-in-the-loop-ai, agency, cognitive-offloading]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: high
---

> **Agentic [[ai-education|AI in education]]** — AI systems that autonomously plan, execute, and adapt multi-step workflows to achieve learning goals, going beyond single-turn Q&A to act as persistent, goal-directed collaborators: [[intelligent-tutoring|AI tutors]] that scaffold over extended interactions, multi-agent systems that orchestrate instructional designs, and agents that co-regulate learning. This paradigm shift from a prompt-responding tool to an active collaborator carries both promise and risk: agentic AI can personalise and deepen learning, but it also threatens [[agency|learner agency]], [[cognitive-offloading|cognitive effort]], and control. The knowledge base's [[agentic-ai-education-scoping-review|scoping review]], [[tool-invariant-framework-agentic-ai|tool-invariant framework]], and [[agentic-ai-pedagogical-best-practice-2026|pedagogical best-practice]] articles examine this tension.

## Questions to Consider

- Agentic AI doesn't just answer questions — it plans, executes, and adapts multi-step workflows toward a goal, acting as a persistent collaborator. How is learning with a proactive agent different from learning with a tool you have to prompt?
- The field draws a line between "conversational" and "agentic" AI (a system qualifies only if it meets several criteria such as planning, memory, autonomy, and goal-directed action). Where is that line in practice — and does calling every chatbot "agentic" hide more than it reveals?
- The more an agent automates, the less cognitive work the learner does. Where is the line between an AI that scaffolds your learning and one that does your learning for you?
- A [[meta-analysis-systematic-review|scoping review]] found only 29% of agentic AI studies grounded their systems in educational theory. If most systems aren't theory-based, what should make you skeptical when evaluating an 'intelligent' tutoring agent?
- Multi-agent systems orchestrate specialized agents with distinct roles. When several agents work together in a classroom, who is accountable — and where should a human intervene?
- The field's central tension is personalization versus learner agency and cognitive effort. If a tutor becomes so good at adapting that you never have to struggle, what learning are you actually getting?
- Where on the Copilot-to-Autopilot spectrum should a given task sit — and does moving a task from "agent proposes, learner disposes" to "agent owns it" ever serve learning rather than just efficiency?
- Hybrid agents grounded in established design theory outperformed pure prompting. Why might a theoretically-grounded system beat raw prompt-engineering — and what does that say about how an agent's 'smartness' is measured?

## Introduction

Agentic AI refers to artificial intelligence systems that can autonomously plan, execute, and adapt multi-step workflows to achieve learning goals — going beyond single-turn question-answering to act as persistent, goal-directed collaborators in educational contexts. In education, agentic AI manifests as AI tutors that scaffold learning over extended interactions, multi-agent systems that orchestrate complex [[learning-design|instructional designs]], and autonomous agents that adapt their [[pedagogy|pedagogical]] strategies based on learner needs. This emerging paradigm shifts AI from a tool that responds to prompts to a collaborator that actively guides, adapts, and co-regulates learning processes.

## Defining and classifying agentic AI

[[kostopoulos-agentic-ai-education-2025|Kostopoulos et al. (2025)]] supply an operational definition the field otherwise lacks. They propose a **six-criteria checklist** — a system counts as agentic if it meets at least four: autonomy (action independent of continuous human intervention), reasoning/planning, memory/context-awareness, goal-directed action toward [[learning-gains|learning outcomes]], adaptability, and dynamic collaboration/initiative. The ≥4 threshold deliberately **excludes reactive chatbots** (a static FAQ bot without planning or persistence does not qualify) while accommodating diverse architectures. They also organise the space along three axes: **pedagogical role** (tutor, learning coach/mentor, companion, instructor's assistant, [[curriculum-design|curriculum]] planner), **autonomy level** (reactive → adaptive → proactive → collaborative), and **embodiment** (text-based, avatar/graphical, [[embodied-learning|embodied]]/robotic). This taxonomy — particularly the autonomy spectrum and the checklist's exclusion of reactive tools — gives researchers and designers shared vocabulary for classifying agentic systems and distinguishing genuinely agentic from merely conversational AI.

A worked discriminator makes the line concrete. A static FAQ chatbot that can only answer a fixed set of questions meets **zero** criteria (no planning, no persistence, no initiative) and is plainly not agentic. A [[conversational-ai|conversational]] tutor that remembers the current session but never acts unless prompted, holds no cross-session [[student-modeling|learner model]], and cannot set sub-goals may meet only one or two (memory, some reasoning) — conversational, not agentic. By contrast, a tutor that plans multi-turn lessons, stores learner progress in a persistent profile, **proactively** fires a hint when a learner stalls, and re-plans the next step based on that profile satisfies planning, memory, autonomy, and goal-directed interaction — at least four criteria, so it qualifies as agentic. The value of running this test is not pedantry: labelling every LLM chat interface "agentic" blurs the very design question — what the system initiates versus what the learner must initiate — that determines whether it scaffolds or supplants learning.

## The field: rapid expansion and current shape

The knowledge base's [[agentic-ai-education-scoping-review|scoping review]] — the most comprehensive synthesis of the field to date, mapping **474 studies (2020–2026)** — documents a field that has grown **explosively since 2025**, but whose literature is still dominated by conference papers concentrated in [[higher-ed|higher education]], [[stem-education|STEM disciplines]], and text-based tutoring scenarios. The review analyzes publication characteristics, study designs, agent roles, AI models and architectures, six dimensions of agentic capability, and the extent of educational-theory integration, providing a roadmap for the field's frontiers and gaps. Notably, only **29% of the reviewed studies** (138 of 474) explicitly grounded their systems in educational theory, exposing a disciplinary divide between technically oriented and pedagogically oriented work.

## A role-based map of the field

Where [[agentic-ai-education-scoping-review|the 474-study scoping review]] and [[kostopoulos-agentic-ai-education-2025|Kostopoulos et al.'s conceptual survey]] map research breadth and capability, [[baradziej-agentic-ai-higher-education-2026|Baradziej (2026)]] organises agentic AI by the **role it plays** — an [[governance|institutional]] framing for deciding where to deploy and govern these systems. Across 48 higher-education studies, six roles emerge in order of evidential weight: personalised learning and adaptive tutoring (18/48), [[automated-assessment|automated assessment]] and feedback (12), teaching assistance and augmentation (11), administrative and student support (8), curriculum design and workforce alignment (5), and research support and academic operations (4). The role lens foregrounds a design choice that recurs in every deployment: how much moment-to-moment control the human retains (a "Copilot" relation) versus how much the agent owns (an "Autopilot" relation) — the autonomy axis that determines whether an agent scaffolds learning or supplants it.

## Design and evaluation of agentic systems

[[research-methods-aied|Research]] in the knowledge base spans design and evaluation:

- **Hybrid agents grounded in theory outperform pure [[prompt-engineering|prompting]]:** [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]], a benchmark of **25,795 instructional-design scenarios**, finds the best-performing approach integrates classical ISD frameworks (ADDIE, Dick & Carey, Rapid Prototyping) with modern ReAct-style reasoning — hybrid (theory + technique) > pure theory > technique-only. Grounding [[llm]] agents in established educational-design theory provides a structural advantage raw prompting cannot replicate.
- **Assessment frameworks for agentic tools:** [[tool-invariant-framework-agentic-ai|The tool-invariant framework]] proposes [[teacher-role|teaching]] and assessing computational methods in a way that does not depend on any specific AI tool, emphasizing [[computational-thinking]] fundamentals, [[authentic-assessment|authentic assessment]] via oral defense, and verification — relevant to [[cognitive-offloading|Over-Reliance]] concerns.
- **Adversarial robustness testing:** [[adversarial-stress-testing-role-playing-agents|Multi-agent stress testing]] coordinates Interrogator, Target, and Judge agents to reveal failure modes invisible to single-strategy testing, reducing robustness scores by 0.17–0.20 points — critical for persona consistency and [[pedagogical-safety|safe deployment]] with learners.
- **Domain applications:** agentic systems appear across domains, including [[learnmate2-llm-adaptive-learning|adaptive learning agents]], [[educlaw-bench-pedagogical-llm-agents-2026|pedagogical LLM agents]], [[guided-llm-scaffolding-independent-learning|guided LLM scaffolding]], [[cyberagents-gamified-cybersecurity-learning-2026|gamified cybersecurity learning agents]], and [[hdr-brachytherapy-agentic-ai-simulation-2026|clinical simulation agents]].

### Multi-agent systems

A growing and distinct strand of agentic AI involves **multi-agent systems** that orchestrate multiple specialized agents with distinct roles. The knowledge base documents several architectures: [[code-gen|CODE-GEN]] pairs a generator agent with a validator agent for human-in-the-loop [[automated-question-generation|question generation]]; [[adversarial-stress-testing-role-playing-agents|adversarial testing]] coordinates Interrogator/Target/Judge agents; multi-agent classrooms (e.g., [[human-in-the-loop-ai|MAIC]] with teacher, TA, and classmate archetypes) create varied peer-learning dynamics; and [[multi-agent-llm-social-learning|multi-agent social learning]] explores how interacting agents shape learning. Multi-agent design raises distinctive questions about [[human-in-the-loop-ai|human oversight]] (which agent is accountable, and where does a human intervene?), coordination costs, and how role differentiation supports or complicates [[scaffolding]].

- **Participant-specific LLM agents for collaborative problem solving.** Fang (2026) fine-tunes individual LLM agents on real participants' dialogue data to represent each participant in collaborative problem solving simulations, with probabilistic speaker and thematic-code selection and sliding-window plus summarised memory. Validated with [[network-analysis|Epistemic Network Analysis]], the simulated dialogues are statistically indistinguishable from real ones (ENA distance 0.17, permutation p = 0.65) — a demonstration of agentic AI reproducing authentic collaborative discourse.
- **Socially intelligent multi-agent tutoring.** Socially intelligent multi-agent tutoring prototypes such as ASTRA study how learners coordinate with AI in dyads, using differentiated Tutor and Facilitator agents to prompt coordination and balanced participation. The framework's trace-based evaluation enables reproducible analysis of interaction, participation balance, and verification in introductory programming.

## The central tension: automation vs. learning

The [[agentic-ai-pedagogical-best-practice-2026|pedagogical best-practice]] work articulates the field's defining tension: as education AI shifts from passive [[conversational-ai|chatbots]] to **proactive agents** that initiate and pursue goals, personalization improves but **learner [[agency]] and cognitive effort** are at risk. The more an agent automates, the less [[cognitive-offloading|cognitive work]] the learner does. The design response — **intentional friction, dynamic [[scaffolding]], [[human-in-the-loop-ai|human-in-the-loop]] oversight, and considered AI utilisation** — acts as a principled guardrail. This connects to [[desirable-difficulties]], [[sociocultural-learning]], and the risk of [[cognitive-offloading|Over-Reliance]], and to the broader theme of preserving [[agency]] in AI-mediated learning.

The survey literature turns these principles into **measurable design [[guardrails]]** rather than vague intentions. On scaffolding, [[kostopoulos-agentic-ai-education-2025|Kostopoulos et al. (2025)]] recommend **fading protocols** — gradually reduce hint frequency after each successful attempt — and targeting a **[[help-seeking]] ratio (AI-initiated hints ÷ total student actions) below 0.3**, so the agent is not the one driving most of the interaction. They pair this with **reflective checkpoints** (e.g., ask the learner to explain their reasoning before the agent offers the next cue) and adaptive fading curves whose intervention likelihood drops as proficiency rises. On transparency, agents should expose a "Why this suggestion?" rationale and keep **timestamped decision-traceability logs** (agent rationale, data sources, decisions) available for instructional auditing. On [[bias-mitigation|fairness]], they advise pre-deployment **disparate-impact testing across at least three demographic groups** (e.g., gender, language, geography) and involving diverse teachers in design. These metrics give an instructor or designer an audit lever: rather than asking "is the agent too helpful?", measure whether hints are fading, whether the learner is initiating, and whether the agent's reasoning is inspectable.

A complementary vocabulary for the autonomy question comes from the aviation analogy surfaced in [[baradziej-agentic-ai-higher-education-2026|Baradziej's (2026)]] synthesis: how far a deployment sits on the **Copilot-to-Autopilot spectrum** — from an agent that assists a human retaining moment-to-moment control, to one that owns the whole task with the human only supervising. The same underlying system can be configured toward either end, and the choice is pedagogical before it is technical. Copilot-style configurations (agent proposes, learner disposes, human retains final say) tend to preserve [[agency]] and support the effortful processes that build learning; Autopilot-style configurations maximise task completion and efficiency but shift the cognitive load off the learner. Selecting a position on this spectrum — per task, not once globally — is a concrete way to operationalise the field's "intentional friction" principle.

## Positive implications of AI agents for education

When designed well, agentic AI offers substantial benefits:

- **Deeper, more adaptive personalization.** Persistent agents can sustain a learning conversation over many turns, tracking what a learner knows, adapting difficulty, and sequencing multi-step [[scaffolding]] — going beyond the one-shot responses of earlier chatbots. This supports [[adaptive-learning|adaptive]] and [[personalized-learning|personalized]] learning at scale. In [[baradziej-agentic-ai-higher-education-2026|Baradziej's (2026)]] synthesis the strongest evidence for this role reports academic gains of **15–25%** and engagement increases of up to **+40%**, with particular potential for learners historically ill-served by one-size-fits-all instruction (first-generation students, learning differences, second-language learners).
- **Unburdening routine instructional work.** Agents can plan lessons, generate and validate questions, draft feedback, and orchestrate specialized sub-agents (e.g., generator + validator for question creation), freeing teachers for higher-value interaction. This is the promise of [[ai-tpack-teacher-multi-agent-workflow|teacher-facing multi-agent workflows]]. Assessment agents in particular report **90–95% agreement with human graders and 50–70% reductions in grading time**, though the same evidence flags [[bias-mitigation|bias]] and the [[metacognition|metacognitive]] cost of instant, unreflective feedback.
- **Rich, varied interaction.** Multi-agent classrooms and simulated peers create diverse interaction dynamics (peer-like discourse, constructive disagreement, role-play) that single-agent systems cannot, supporting [[collaborative-learning|collaborative learning]], [[socratic-method|Socratic-style probing]], and [[simulation]].
- **Productive friction.** Agents designed to challenge rather than agree can push learners toward deeper reconsideration. [[ai-agents-constructive-conflict-design-education-2026|Research on adversarial design agents]] shows that constructive-conflict agents prompted significantly more design iterations, broader exploration, and higher-rated final designs (N=48) — a form of [[desirable-difficulties|desirable difficulty]].
- **Scalable practice and simulation.** Agent-based simulations (simulated students, [[medical-education|clinical]] scenarios) let learners practise in low-risk environments before real-world application, as in [[hdr-brachytherapy-agentic-ai-simulation-2026|clinical simulation]] and [[simulating-students|simulated learners]].
- **Evidence-aware scaffolding.** Well-grounded agents can apply [[learning-theories|learning theory]] and known pedagogy in their interactions, and [[benchmark|benchmarks]] show theory-grounded agents outperform raw prompting.

## Negative implications and risks of AI agents for education

The same autonomy that enables these benefits also creates significant risks:

- **Erosion of learner agency and cognitive effort.** The more an agent automates, the less cognitive work the learner does. Proactive agents that initiate, plan, and complete tasks can leave learners as passive consumers, hollowing out the effortful processes — drafting, recalling, revising — that build durable learning. This is the core [[cognitive-offloading|Over-Reliance]] and [[agency]] concern. The effect is measurable: in [[baradziej-agentic-ai-higher-education-2026|Baradziej's (2026)]] synthesis, passive learners in agentic-tutoring environments underperformed [[active-learning]] students by **8.7%** — evidence that the harm follows deployment design (letting the agent do the cognitive work) more than the technology itself.
- **Over-automation of the learning process.** If an agent optimises for task completion rather than learning, it can produce "answers" that bypass understanding — the very risk the [[tool-invariant-framework-agentic-ai|tool-invariant framework]] warns about, where the artifact no longer certifies the learner.
- **Reduced metacognitive and self-regulated [[student-engagement|engagement]].** When agents handle planning and monitoring, learners may not develop the [[metacognition]] and [[self-regulated-learning|self-regulation]] that education aims to build. Agents must be designed to elicit, not replace, these processes.
- **Misplaced trust and verification gaps.** Autonomous agents can produce plausible but unvalidated output; learners and teachers may [[trust-calibration|over-trust]] it. The need for robust verification and [[ai-literacy]] grows as agents take on more autonomy.
- **Opacity, coordination, and accountability.** Multi-agent systems complicate [[human-in-the-loop-ai|human oversight]]: which agent is accountable for an error, and where does a human intervene? Coordination failures, persona drift, and emergent behaviours can undermine reliability and [[pedagogical-safety]].
- **Bias and equity.** Agents trained on data that encode bias can reproduce it at scale, and unequal access to capable agentic systems can widen [[equity-in-ai-education|educational inequity]]. Bias operates at multiple levels — training data, architecture, evaluation criteria, and test populations — so it needs institutional mitigation (bias audits, diverse datasets, transparent documentation, stakeholder involvement), not one-time checks. A subtler, culturally specific form is **epistemic hegemony**: because most agentic systems are trained on English, Western-produced data, they embed particular assumptions about knowledge, argumentation, and academic register. [[baradziej-agentic-ai-higher-education-2026|Synthesis evidence]] documents language-education tools marginalising non-Western rhetorical traditions and penalising linguistic features of non-English academic cultures, and [[global-south|Global South]] analyses show agentic pedagogies reproducing inequity when they ignore epistemological diversity and infrastructure constraints.
- **Assessment integrity and skill decay.** When agents can generate work on demand, assessing genuine learning becomes harder, and over-reliance can erode foundational skills — the "comprehension debt" and certification problem the field flags.
- **Ghost students and the verification gap.** [[bozkurt-ghost-students-agentic-ai-2026|Bozkurt, Crompton & Fell Kurban (2026)]] describe the **"ghost student"** — a digital surrogate created by coupling LLMs (the "mind") with agentic AI browsers (the "body") that can navigate Learning Management Systems, engage with content, and complete assessments with human-like mimicry, making the actual learner's presence optional. This creates a **verification gap** that traditional [[ai-detection|proctoring and detection]] tools are structurally unable to close, and it accumulates **cognitive debt** in the learner who is bypassed. As AI shifts from generative to agentic, this integrity and [[academic-integrity|verification]] threat grows — an agentic-specific risk beyond those of single-turn [[generative-ai|GenAI]].

## AI agents and academic integrity

Agentic AI poses distinctive integrity threats that go beyond the single-turn GenAI cases the field already struggles with. Because agents act autonomously over long horizons — and because "ghost students" (LLM "minds" coupled with agentic browser "bodies") can navigate [[online-teaching-and-learning|Learning Management Systems]], engage content, and complete assessments with human-like mimicry — they make the learner's genuine presence optional and create a **verification gap** that [[ai-detection|proctoring and detection]] cannot close. Several integrity implications follow:

- **The artifact no longer certifies the learner.** When an agent can generate, plan, and execute an entire submission, the product's quality reflects the agent's capability, not the learner's. This is the [[tool-invariant-framework-agentic-ai|tool-invariant]] certification problem at its extreme — traditional "submit the work" assessment loses its evidential value.
- **Verification, not detection, is the only viable response.** Detection-based policing is structurally unable to keep up with autonomous agents. The integrity question shifts from "can we catch AI agents?" to "can we verify what the learner can actually do?" — favouring [[authentic-assessment|process-based]], interactive, and [[human-in-the-loop-ai|human-in-the-loop]] verification.
- **Accountability is diffused.** In multi-agent systems, when an autonomous agent produces problematic output, it is unclear who is accountable — the learner, the system, or the institution. This blurs the attribution that academic-integrity processes assume.
- **Cognitive debt accumulates silently.** Ghost students let learners bypass the effortful processes that build understanding, accruing [[cognitive-offloading|cognitive debt]] that surfaces only when independent performance is required. Integrity is thus tied to genuine learning, not just rule-compliance.
- **It widens equity gaps.** Learners with access to more capable agentic systems gain an outsized advantage, and automated support may erode help for those who need it most — an [[equity-in-ai-education|equity]] dimension of integrity.

This connects the agentic-AI discussion to the knowledge base's [[academic-integrity]] coverage, which frames the response as assessment redesign and [[ai-literacy]] rather than detection alone.

## Productive friction and social interaction

Not all agentic behavior need be smooth assistance. [[ai-agents-constructive-conflict-design-education-2026|Research on adversarial design agents]] shows that agents enacting **constructive conflict** prompted significantly more design iterations, broader exploration of alternatives, and higher-rated final designs among novice interaction designers (N=48) — a *productive friction* dynamic, where the conflict agent was frustrating but ultimately helpful. This connects to [[socratic-method|Socratic questioning]] and [[design-thinking]], and illustrates how agentic AI can support deep reconsideration rather than passive acceptance.

## Implications for instructors and instructional designers

For teachers, faculty, and [[learning-design|instructional designers]], agentic AI changes both what is possible and what must be guarded:

- **Reallocate effort to higher-value work.** Agents can take over lesson planning, question generation and validation, feedback triage, and resource retrieval. Instructors should treat these as automatable scaffolds that free time for what agents cannot do: relational teaching, contextual judgement, and the design of learning experiences. Teacher-facing [[ai-tpack-teacher-multi-agent-workflow|multi-agent workflows]] are a promising model.
- **Keep the learner's cognitive work front and centre.** The central design question is not "what can the agent do?" but "what must the *learner* do?" Instructional designers should configure agentic systems so they scaffold rather than replace learner planning, monitoring, and effort — using dynamic [[scaffolding]] and [[desirable-difficulties|intentional friction]] to protect [[agency]] and avoid [[cognitive-offloading|over-reliance]].
- **Design for verification and process, not just output.** When agents can generate work on demand, the artifact no longer certifies learning. Instructors should pair agentic tools with [[authentic-assessment|process-based assessment]] (oral defense, [[tool-invariant-framework-agentic-ai|tool-invariant]] tasks, verification checks) so that understanding — not just production — is measured.
- **Curate and ground agents in pedagogy.** Benchmark evidence shows theory-grounded agents outperform raw prompting. Designers should ground agent behaviour in established instructional frameworks (e.g., gradual release, Socratic questioning, [[learning-theories|learning theory]]) rather than defaulting to generic tool-chaining.
- **Retain human oversight and judgement.** Multi-agent and autonomous systems make [[human-in-the-loop-ai|human-in-the-loop]] design essential: decide where a human intervenes, who is accountable, and how failures are caught. Adversarial testing helps surface failure modes before deployment.
- **Build instructor [[ai-literacy]].** Teachers and designers need accurate mental models of agentic AI to configure, monitor, and critique these systems — and to model responsible use for learners. This links to [[teacher-ai-competency|teacher AI competency]] and [[educational-development|faculty development]].
- **Watch for equity.** Agentic tools risk widening gaps if access is unequal or if automation erodes support for the learners who need it most; design with [[equity-in-ai-education|equity]] in mind.
- **Stand up institutional scaffolding before scaling.** The deployment question is not only design-level but institution-level. [[baradziej-agentic-ai-higher-education-2026|Baradziej's (2026)]] synthesis condenses the governance evidence into three pillars: develop [[ai-literacy]] among students *and* staff; build [[ethics|ethical]] infrastructure (data-protection policies, algorithmic-accountability and academic-integrity frameworks) *before* large-scale deployment; and deliver competence-based [[educational-development|educator training]] that goes beyond tool familiarisation to pedagogical frameworks preserving human agency. Given only ~6.5% of faculty in some national contexts report direct AI use, the training gap is a binding constraint on responsible adoption.

### Techniques for ensuring academic integrity with agentic AI

Because autonomous agents make detection futile, instructors should focus on techniques that **verify learning** and **make honest work visible**, rather than on policing:

- **Prefer verification over detection.** Replace or supplement "submit the work" with interactions that require the learner to demonstrate understanding they cannot outsource: oral defenses, [[tool-invariant-framework-agentic-ai|tool-invariant]] tasks, live [[problem-solving]], and [[authentic-assessment|process-based]] assessment. The goal is to establish what the learner can do independently, not to catch an agent.
- **Use interactive and staged assessment.** Require staged submissions (drafts, revisions, reflections) and follow-up [[conversational-ai|conversational]] checks that probe whether students understand their submitted work — the "AI Viva" and cognitive-stewardship approaches. Ghost students cannot sustain a live interrogation they did not perform.
- **Set clear, purpose-driven expectations.** Ground integrity expectations in the course's purpose — what AI use is allowed, when, and why — rather than abstract rules. [[educational-policy-ai|Policy]] clarity that is aligned with pedagogy reduces the ambiguity students exploit and the misjudgements documented in integrity research.
- **Make AI use visible and declared.** Structured, task-specific AI-use declarations (mapping use to cognitive stages) force reflection and normalise honest disclosure, shifting the culture from concealment to transparency.
- **Build AI literacy as integrity education.** Teach students how to use agents responsibly and to judge output critically, framing integrity as genuine learning rather than rule-following. This includes [[ai-literacy]], understanding what agents can and cannot do, and the [[cognitive-offloading|learning cost]] of bypassing effort.
- **Keep humans in the loop.** Maintain [[human-in-the-loop-ai|human oversight]] of assessment decisions, verify high-stakes submissions interactively, and design agentic tools so an instructor can always intervene.
- **Close the verification gap with interaction.** For fully online or asynchronous contexts, use proctored or interactive components that require live presence, addressing the [[bozkurt-ghost-students-agentic-ai-2026|ghost-student]] threat directly rather than assuming detection will catch it.

## A balanced takeaway

Agentic AI is neither a panacea nor an inevitable harm: its value depends on design. Used to scaffold learner agency, ground in pedagogy, and keep humans in the loop, agents can personalise and deepen learning; used to maximise automation and task completion, they can erode the very effort that produces learning. The recurring design principle is **intentionality** — deciding explicitly what the agent does and what it deliberately leaves for the learner.

## Connected Concepts

- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[curriculum-design]]
- [[metacognition]]
- [[rag]]
- [[student-experience]]
- [[adaptive-learning]]
- [[educational-development]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[agency]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]
- [[sociocultural-learning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[simulation]]
- [[pedagogical-safety]]
- [[ai-education]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, [[pedagogical-llm-training|LLM training]], robotics, RAG, agentic)
- [[equity-in-ai-education]]
- [[authentic-assessment]]
- [[teacher-role]]
- [[learning-design]]
- [[teacher-ai-competency]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[online-teaching-and-learning]]
- [[educational-policy-ai]]

## Connected Articles
- [[baradziej-agentic-ai-higher-education-2026]] — Systematic review of the roles of agentic AI in higher education (48 studies; six roles; tripartite responsible-integration framework)
- [[kostopoulos-agentic-ai-education-2025]] — Agentic AI in education: state of the art and future directions (IEEE Access survey; operational definition + taxonomy)
- [[jin-emergent-learner-agency-implicit-hai-2026]] — Emergent learner agency in implicit human-AI collaboration: supportive vs. contrarian personas
- [[genai-counter-learner-groupthink-2025]]
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration

- [[agentic-ai-education-scoping-review]] — Scoping review of agentic AI in education (474 studies)
- [[agentic-ai-pedagogical-best-practice-2026]] — The tension between automation and learning
- [[agentic-literacy-debt]] — Agentic literacy debt: the structural AI-literacy gap from autonomous agents (Nama 2026)
- [[tool-invariant-framework-agentic-ai]] — Teaching and assessing computational methods in the age of agentic AI
- [[jeon-isd-agent-bench-2026]] — ISD-Agent-Bench: benchmarking instructional-design agents
- [[adversarial-stress-testing-role-playing-agents]] — Adversarial stress testing of role-playing agents
- [[ai-agents-constructive-conflict-design-education-2026]] — Constructive conflict AI agents in design education
- [[ai-adoption-training-public-sector]] — AI adoption and training in the public sector
- [[ai-enabled-serious-games]] — AI-enabled serious games
- [[ai-tpack-teacher-multi-agent-workflow]] — Teacher TPACK and multi-agent workflows
- [[antiskillbench-persona-skills-privacy-2026]] — Persona skills and privacy benchmarking
- [[ase-26-agentic-software-engineering-curriculum]] — Agentic software engineering curriculum
- [[code-gen]] — Code generation agents
- [[deeptutor]] — DeepTutor
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Pedagogical LLM agent benchmark
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM scaffolding for independent learning
- [[learnmate2-llm-adaptive-learning]] — LearnMate-2 adaptive learning agents
- [[pchl-he-framework-genai-content-creation-2026]] — GenAI content creation framework in higher ed
- [[cyberagents-gamified-cybersecurity-learning-2026]] — Gamified cybersecurity learning agents
- [[hdr-brachytherapy-agentic-ai-simulation-2026]] — Agentic AI in clinical simulation
- [[educasim-cs1-instructional-practice]] — EducaSim: generative agents simulate a CS1 section
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation

- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent (DBagent) in CS education

- [[ba-ai-agents-cscl-review-2026]] — AI agents in computer-supported collaborative learning review
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[credentials-carry-evidence-ai-agents-2026]] — Credentials that carry their evidence for AI-agent work
- [[bozkurt-ghost-students-agentic-ai-2026]] — Ghost students and the agentic-AI verification gap (Bozkurt et al. 2026)

- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
