---
title: Research Methods in AIED
created: "2026-08-13T05:48:37-04:00"
updated: "2026-08-22T07:08:19-04:00"
type: concept
tags: [ai-education, educational-measurement, efficacy-study, rct, benchmark, methodology, evaluation, higher-ed]
confidence: high
---

> **Research methods in AIED** — the set of empirical designs, data-collection strategies, and analytic techniques researchers use to study AI in education: whether and how AI tools support (or harm) learning, and under what conditions. The wiki's corpus spans experimental, survey, qualitative, design-based, computational-benchmark, and review methods. Each has distinct strengths and limitations, and choosing among them involves trade-offs among internal validity (confidence in causal claims), external validity (generalizability), ecological validity (real-world authenticity), and the feasibility of studying fast-moving AI tools.

The central tension in AIED research is that the strongest designs for causal inference — randomized experiments — are often the hardest to run with authentic AI tools in real classrooms, while the most authentic settings (field deployments, case studies, log-data analyses) offer weaker causal control. No single method resolves this; the field advances by triangulating across methods, and by being explicit about what kind of claim each design can support. Every method also carries cross-cutting limitations — generalizability, measurement validity, the fast pace of AI change, reproducibility, and weak theory use — that readers must weigh; see [[limitations-in-aied-research]].

### Experimental and quasi-experimental designs

An **efficacy study** tests whether an intervention produces its intended learning effect, typically using experimental or quasi-experimental designs that compare outcomes with and without the intervention. Experiments randomly assign learners to conditions (e.g., AI tutor vs. human tutor, or AI-scaffolded vs. unassisted) to estimate causal effects on outcomes like learning gains, engagement, or motivation. **Randomized controlled trials** are the gold standard for internal validity. [[access-not-enough-ai-tutoring-2026|A randomized field study of human support plus AI tutoring]] and [[genai-can-harm-teaching-rct-2026|an RCT on generative AI in teaching]] use assignment to isolate causal effects. **Quasi-experimental** designs (pre/post, between-subjects, or matched groups without randomization) are more feasible in intact classrooms but weaker on causal claims.

- **Strengths:** strongest causal inference; clean outcome measurement; supports effect-size estimation and efficacy claims.
- **Limitations:** costly and slow; artificial conditions can reduce ecological validity; fast-changing AI tools make long experiments date quickly; small samples often underpower detection of meaningful effects; ethical constraints on withholding potentially helpful tools.
- **Exemplars:** [[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]], [[agent-voice-accents-k12-group-learning]], [[ai-use-critical-thinking-medical-students-2026]].

### Survey and structural-equation-modeling studies

Cross-sectional surveys measure self-reported attitudes, perceptions, motivation, [[self-efficacy]], and technology acceptance, often modeled with regression or structural equation modeling (SEM/PLS-SEM) to test hypothesized relationships and mediators. These dominate the wiki's corpus, particularly for acceptance, motivation, and psychological-mechanism questions.

- **Strengths:** large samples; broad, low-cost coverage; can test complex mediational models of psychological mechanisms; feasible for studying attitudes that are hard to observe.
- **Limitations:** cross-sectional data cannot establish causation; common-method/self-report bias; convenience sampling limits generalizability; mediators inferred from covariance, not manipulation.
- **Exemplars:** [[acceptance-ai-english-tools-2026]], [[genai-motivation-engagement-2026]], [[ai-autonomous-learning-accomplishment-2026]], [[genai-over-reliance-learning-2026]], [[ai-use-critical-thinking-medical-students-2026]].

### Qualitative methods

Interviews, focus groups, and thematic analysis produce rich, contextual accounts of how students and teachers experience AI tools, the meanings they attach to them, and the tensions and harms that standardized measures miss. [[ai-tutor-safety-harms|Research on AI tutor safety]] and [[ai-changing-teaching-workflows|how AI changes teaching workflows]] rely heavily on qualitative evidence.

- **Strengths:** deep ecological and conceptual insight; surfaces unexpected phenomena, risks, and mechanisms; essential for theory-building and for studying contested constructs like trust, autonomy, and authorship.
- **Limitations:** limited generalizability; interpretive and researcher-dependent; small samples; weaker support for causal claims; findings can be hard to synthesize across studies.
- **Exemplars:** [[ai-tutor-safety-harms]], [[ai-changing-teaching-workflows]], [[ai-education-global-capacity]], [[scaffolding-critical-engagement-genai-minority-students]].

### Mixed-methods designs

Mixed-methods studies combine quantitative and qualitative strands — often sequentially (e.g., QUAL→QUAN→qual) — so that qualitative data explains or contextualizes quantitative findings. [[genai-over-reliance-learning-2026|A mixed-method study of GenAI and sustainable learning]] pairs three-wave surveys with educator interviews; [[t2i-competence-paradox-2026|the competence-paradox study]] uses instructor focus groups, a student survey, and follow-up interviews.

- **Strengths:** triangulation increases confidence; quantitative breadth plus qualitative depth; can explain unexpected results and bridge mechanism and magnitude.
- **Limitations:** complex, resource-intensive, and methodologically demanding; integration can be shallow if not carefully designed; still inherits the weaknesses of each strand (e.g., self-report).
- **Exemplars:** [[genai-over-reliance-learning-2026]], [[t2i-competence-paradox-2026]], [[same-ai-different-pathways]], [[fouad-bentley-trust-utility-gap-physics-2026]].

### Design-based research (DBR)

DBR iteratively designs, implements, and refines an educational intervention in authentic contexts, cycling between theory, design, and real-world practice. It is prominent in the wiki for developing AI learning environments and pedagogical models. A canonical AIEd example is the AI-Assisted Collaborative Learning model study ([[ai-assisted-collaborative-learning-model-dbr|Putra et al.]]), which ran a four-phase DBR cycle — needs analysis, model design, eight-week classroom implementation, and model refinement — iterating on a four-stage learning cycle (problem identification → AI-assisted collaborative inquiry → collaborative problem-solving → reflection and presentation). Other exemplars develop AI-literacy teacher training ([[genai-literacy-training-teacher-education-dbr-2026]]) and GenAI scaffolding for critical thinking ([[critical-thinking-genai-scaffolding]]).

- **Strengths:** high ecological validity and practical relevance; produces both usable artifacts and theory; responsive to the complexity of real classrooms and evolving AI tools; well-suited to developing a model and refining it based on authentic implementation evidence.
- **Limitations:** weak internal validity (few/no control groups); findings are context-bound and hard to generalize; long timelines; difficult to isolate which design element caused an outcome — DBR demonstrates feasibility and improvement but cannot attribute learning gains to a specific mechanism.
- **Exemplars:** [[ai-assisted-collaborative-learning-model-dbr]], [[genai-literacy-training-teacher-education-dbr-2026]], [[critical-thinking-genai-scaffolding]], [[human-centered-ai-teacher-educators-2026]].

DBR trades the causal control of [[rct|experiments]] for ecological authenticity and iterative refinement: it is the right tool for "how do we design this AI learning environment to work in practice?" questions, and its evidence is strongest as proof-of-concept and design guidance rather than causal efficacy. Reading DBR learning gains requires the same [[limitations-in-aied-research|caution]] as other designs — without an unassisted, controlled outcome measure, gains can reflect the same AI-inflated-performance confound documented under [[learning-gains|learning gains]].

### Systematic reviews and meta-analyses

Reviews synthesize the evidence base rather than running a new experiment. Systematic and scoping reviews apply a transparent protocol to search, screen, appraise, and synthesize a body of studies; meta-analyses additionally pool effect sizes across studies to produce a weighted summary estimate and test moderators. [[zerkouk-comprehensive-review-its-2025|A comprehensive ITS review]] and [[genai-higher-education-systematic-review-2026|a systematic review of GenAI in higher education]] exemplify the approach.

- **Strengths:** efficient synthesis of a large, fragmented literature; meta-analysis yields pooled effect estimates and detects moderators; essential for evidence-based practice and identifying gaps.
- **Limitations:** depend on the quality of included studies (garbage-in/garbage-out); publication bias; heterogeneous methods and outcome measures make synthesis hard; rapidly aging given the speed of AI change.
- **Exemplars:** [[zerkouk-comprehensive-review-its-2025]], [[genai-higher-education-systematic-review-2026]], [[chatgpt-critical-creative-thinking-review]], [[ai-tutor-effectiveness-review]], [[agentic-ai-education-scoping-review]].

See the dedicated [[meta-analysis-systematic-review]] concept page for a fuller treatment of systematic review and meta-analysis in AI in education — including their relationship to primary designs, PRISMA reporting, and their strengths and limitations.

### Computational and benchmark evaluation

Computational evaluation assesses AI systems directly — against benchmarks, ground-truth labels, or human judgments — rather than studying human learners. This includes [[benchmark|benchmarks]], [[automatic-short-answer-grading|grading accuracy]], [[teachbench-llm-teaching-evaluation|teaching-ability evaluation]], and LLM-as-judge approaches. This is the closest method to [[ai-ed-evaluation]] (see the distinction below).

- **Strengths:** fast, scalable, reproducible; enables head-to-head comparison of models and system versions; essential for system development and quality assurance.
- **Limitations:** measures system output, not learning — high benchmark accuracy does not entail educational effectiveness; ground-truth and rubric quality are themselves contested; can miss pedagogical quality that humans perceive.
- **Exemplars:** [[teachbench-llm-teaching-evaluation]], [[jeon-isd-agent-bench-2026]], [[ground-truth-reliability-aied]], [[automatic-short-answer-grading]], [[educational-vlm-evaluation]].

### Other designs: longitudinal, case, and simulation studies

Beyond the major families, the wiki uses **longitudinal** designs that track learners over time ([[ai-lms-middle-school-longitudinal|a longitudinal LMS study]]), **case and in-the-wild** studies of authentic usage ([[ai-in-the-wild-college|large-scale analysis of real student interactions]]), and **simulation** studies in which LLMs stand in for students or patients ([[llm-student-simulation-teacher-insights|LLMs as simulated learners]], [[simulation]]). These trade breadth or control for realism and for access to phenomena that are otherwise hard to observe.

### Expert-consensus methods: the Delphi technique

The Delphi method is a structured technique for establishing **expert consensus** on a question where the answer is not yet known empirically — most often used in the wiki to develop frameworks, competency lists, and definitions that practitioners and researchers can agree on. In a Delphi study, a panel of experts responds to successive rounds of questionnaires; after each round, an anonymized summary of the group's responses is fed back, and experts revise their answers until the group converges on agreement (typically defined by a pre-set threshold, e.g., 75%). It is a way to build construct validity and professional consensus through iterative, anonymized consultation rather than a single survey or vote.

- **Strengths:** produces consensus from a diverse expert panel without in-person group pressures (anonymity reduces dominance effects); well-suited to defining constructs, competencies, and frameworks when no validated measure exists; iterative rounds let experts refine and converge; feasible where full experiments or large samples are impractical.
- **Limitations:** consensus reflects expert judgment, not empirical evidence — it establishes agreement, not effect; results depend on panel composition and the (subjective) consensus threshold; can be slow across multiple rounds; a single panel's judgement may not generalize.
- **Exemplars:** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|the SAIL framework study]] (three rounds, 17 experts, refining AI-literacy competency levels), [[hcap-human-centric-ai-pedagogy-framework-2026|the HCAP framework study]] (three rounds, 30 teachers, defining 25 AI-teacher competencies), [[ai-literacy-heptagon-2026|the AI Literacy Heptagon]] (which used expert input/consensus alongside a PRISMA-guided review), and [[brookings-ai-students-report|the Brookings students-and-AI report]].

Delphi is often combined with other methods — for example, expert consensus can be used to validate a framework (as in SAIL and HCAP) that is then tested or implemented via design-based research or survey studies. It sits alongside qualitative and expert-judgment approaches and contributes to the [[educational-measurement|validity]] of framework-based instruments.

### Research vs. evaluation: connections and distinctions

Research and evaluation are closely related but distinct. **Research** asks generalizable questions about how AI affects learning — "does scaffolding improve learning outcomes?" — and aims to build theory and evidence that transfers beyond the specific study. **Evaluation** (see [[ai-ed-evaluation]]) assesses whether a *specific* AI tool or system works — is accurate, reliable, pedagogically sound, and fit for purpose — against benchmarks, rubrics, or stakeholder-defined criteria. Research emphasizes internal validity and generalization; evaluation emphasizes system quality and local decision-making.

The boundaries blur: benchmark studies are evaluation that can feed research, and evaluation instruments (rubrics, ground-truth sets, validity frameworks) depend on the [[educational-measurement]] and [[assessment-validity]] concerns that research clarifies. Conversely, research findings on what supports learning should inform how AI tools are [[ai-ed-evaluation|evaluated]]. The wiki treats them as complementary: computational and benchmark evaluation ([[benchmark]], [[ai-ed-evaluation]]) tells us whether an AI system is technically sound, while efficacy and survey research ([[rct]]) tells us whether it helps people learn.

### Choosing among methods

Method choice follows the research question. Causal-effect questions favor experiments ([[rct]]); mechanism and perception questions favor surveys and qualitative work; system-quality questions favor computational evaluation ([[benchmark]], [[ai-ed-evaluation]]); synthesis questions favor reviews and meta-analyses; design questions favor DBR; and questions about what experts agree a construct, competency, or framework should contain favor expert-consensus methods like the Delphi technique. Given the field's heterogeneity and the speed of AI change, the wiki's corpus reflects a deliberate move toward triangulation — combining computational evaluation with efficacy, qualitative, and expert-consensus evidence to judge both whether a tool works and whether it helps learning.

Equally important is reading any single study with awareness of the **cross-cutting limitations** that affect AIED research as a whole — methodological constraints, the fast pace of AI change versus slow publication, reproducibility and FAIR-practice gaps, reliance on proprietary tools, and weak or uncritical theory use. See [[limitations-in-aied-research]].

## Connected Concepts

- [[ai-ed-evaluation]]
- [[rct]]
- [[benchmark]]
- [[meta-analysis-systematic-review]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[simulation]]
- [[ai-education]]
- [[higher-ed]]
- [[limitations-in-aied-research]]
- [[learning-gains]]
- [[theory-development-aied]] — Theory Development in AI in Education
## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[genai-can-harm-teaching-rct-2026]] — Generative AI Can Harm Teaching
- [[genai-over-reliance-learning-2026]] — From Enhancement to Over-Reliance: A Mixed-Method Study
- [[acceptance-ai-english-tools-2026]] — Acceptance of AI-Assisted English Language Learning Tools
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[zerkouk-comprehensive-review-its-2025]] — Comprehensive Review of Intelligent Tutoring Systems
- [[ai-assisted-collaborative-learning-model-dbr]] — Design-Based Research for an AI-Assisted Collaborative Learning Model
- [[teachbench-llm-teaching-evaluation]] — TeachBench: Evaluating LLM Teaching Ability
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Reliability and Validity
- [[llm-student-simulation-teacher-insights]] — Can LLMs Effectively Simulate Human Learners?
- [[ai-lms-middle-school-longitudinal]] — AI-Integrated Learning Management System: A Longitudinal Study
- [[ai-in-the-wild-college]] — AI in the Wild: Large Scale Analysis of Authentic Interactions
- [[same-ai-different-pathways]] — Same AI, Different Pathways: Unpacking Mechanisms
- [[t2i-competence-paradox-2026]] — The Competence Paradox: Text-to-Image GenAI in Art and Design
