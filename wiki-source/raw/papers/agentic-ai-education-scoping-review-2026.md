---
source_url: https://doi.org/10.1016/j.caeai.2026.100653
ingested: 2026-07-29
sha256: 0d033756e20cb916ed989226789799055c452ac1c502dca26ad3edd303a9107c
---
# A Scoping Review of Generative AI-Powered Agentic AI in Education: Research Landscape, Agentic Capabilities, and Insights from the Frontier Agent Paradigm, Exemplified by OpenClaw

Ningxia Wang, Di Zou, Haoran Xie, S. Joe Qin

*Computers and Education: Artificial Intelligence*, accepted 27 July 2026. doi:[10.1016/j.caeai.2026.100653](https://doi.org/10.1016/j.caeai.2026.100653)

ABSTRACT

Keywords:
agentic AI
education
scoping review
generative AI

Generative AI-powered agentic systems are increasingly proposed for educational applications.
However, the research landscape remains fragmented, and the relationship between technical
capabilities and pedagogical design remains poorly understood. To address this gap, this scoping
review systematically mapped 474 studies published between January 2020 and May 2026.
Guided by three research questions, we analysed publication characteristics, study designs, agent
roles, AI models and architectures, six dimensions of agentic capability, and the extent to which
educational theory was incorporated.
The results show that the field has expanded rapidly, particularly since 2025. At the
same time, the literature is dominated by conference papers and is primarily concentrated in
higher education, STEM disciplines, and text-based tutoring scenarios. In terms of technical
implementation, GPT-series models and LangChain are the most widely adopted technologies,
whereas OpenClaw and other frontier agent paradigms remain largely absent. Across the
reviewed studies, agentic capabilities tend to remain at relatively modest levels: although many
systems demonstrate single-task autonomy, sequential planning, and, increasingly, multi-agent
collaboration, they rarely exhibit strong tool orchestration or robust embedded governance.
From an educational perspective, theoretical grounding remains limited. Only 138 studies
explicitly drew on educational theory, revealing a clear disciplinary divide between technically
oriented research and pedagogically oriented work. Methodologically, empirical evaluations are
also limited, with most studies relying on small-scale and short-term designs. Accordingly,
the gaps identified across the literature converge on several priorities: longitudinal and realworld validation, stronger pedagogical grounding, more governed adoption of emerging agent
infrastructures, and more systematic integration of ethics and human oversight.
Overall, this review provides researchers, developers, and educators with an evidence-based
map of the current capabilities and limitations of agentic AI in education, while also highlighting
concrete directions for its more responsible and educationally meaningful development.

1. Introduction
1.1. Agentic AI in Education: Concepts, Characteristics, and Terminology
Agentic artificial intelligence (AI) has recently emerged as a prominent development in AI, but its boundaries
are not always defined consistently across technical and educational literature. There is a general consensus that
generative AI (an umbrella term for all models and systems that can generate text, code, images, audio and other multimedia content, including large language models (LLMs), vision-language models (VLMs) and additional generative
foundation models) constitutes the technological precursor to agentic AI. Acharya et al. (2025) identified three core
characteristics that distinguish agentic AI from earlier rule-based or machine-learning-based agents, i.e., goal-directed
behaviour, contextual adaptation, and autonomous decision-making. Sapkota et al. (2026) further differentiated AI
agents from agentic AI, describing AI agents as isolated intelligent systems with task-specific autonomy, reactivity, and
adaptation, while positioning agentic AI as a shift towards coordinated systems that exhibit multi-agent collaboration,
communication, task decomposition, and enhanced reasoning and memory capabilities. Despite these conceptual
distinctions, existing educational research has not consistently maintained a strict separation between the two terms
(Acharya et al., 2025; Kostopoulos et al., 2025).
Drawing on these contributions, this review defines agentic AI as a class of AI systems, powered by generative
AI, that exhibit goal-directed autonomy: they can perceive their environment, reason about goals, formulate and
execute multi-step plans, adapt their behaviour to changing contexts, and coordinate with tools, other agents, or human
stakeholders (Russell and Norvig, 2022; Acharya et al., 2025; Sapkota et al., 2026). In the educational domain, a

generative AI-powered agentic AI system embeds these capabilities within an intentionally designed workflow to serve
educational purposes such as teaching, learning support, academic advising, and curriculum development.
Three core characteristics distinguish such systems from general-purpose AI tools that merely generate text or
handle isolated single prompts. More advanced features, such as multi-step planning and multi-agent collaboration,
may be present but are not treated as necessary conditions for inclusion.
1. Task autonomy. The system can initiate, plan, and complete tasks in pursuit of a learning or teaching goal
without requiring continuous real-time human control. For instance, an agentic AI tutor might independently
sequence a set of practice problems, monitor learner progress, and decide when to introduce a new concept.
2. Goal-directed reasoning and adaptive decision-making. The system selects, modifies, or adjusts its strategies
in response to learner needs, task demands, or environmental changes. An agent that adapts its scaffolding level
when a student shows signs of struggle or mastery exemplifies this characteristic.
3. Memory- and context-aware interaction. The system uses prior interaction history, learner profiles, and
contextual data to deliver coherent, personalised support across sessions. This includes remembering a student’s
misconceptions, preferred modalities, or past performance when providing feedback.
Concrete examples of such systems include: an adaptive tutor that diagnoses misconceptions through dialogue
and tailors explanations accordingly (Liu et al., 2025); a role-playing simulator that adopts the persona of a patient,
a historical figure, or a client to allow learners to practise professional skills (Chu et al., 2025); a curriculum curator
that autonomously designs learning sequences aligned with institutional standards (Kostopoulos et al., 2025); and a
multi-agent orchestration in which specialist agents (e.g., tutor, assessor, reflection coach) coordinate under human
oversight (Li et al., 2026).
Throughout this article, we standardise terminology as follows. The overarching paradigm is referred to as
generative AI-powered agentic AI, often shortened to agentic AI when the technological foundation is clear. When
referring to a concrete system implementation, we may use the terms agentic system or agentic AI system. The term
AI agent, abbreviated as agent, is reserved for cases where we discuss a specific software component or entity within
a larger architecture, or when the reviewed literature itself employs that label. We avoid the undefined use of “GenAI
agent” and similar ambiguous expressions to maintain conceptual clarity. It should be noted, however, that during
the literature search phase, we intentionally included such terms, along with “AI agent”, “intelligent tutor”, and other
synonyms, as search keywords to maximise recall.

1.2. Frontier Agentic AI Paradigms and the Role of OpenClaw as an Analytical Lens
To understand agentic AI in education, it is necessary to situate them within the broader development of agentic
AI since 2022. The trajectory of agentic AI has been marked by rapid infrastructural maturation and a progressive
expansion of agentic capabilities, moving from conversational chatbots to orchestrated, tool-using, and multi-agent
systems.
In late 2022, the launch of ReAct (Yao et al., 2023), LangChain (Chase, 2022), and Generative Pre-trained
Transformer (GPT) established both conceptual and engineering foundations for the first generation of large language
model-based agents. ReAct introduced a reasoning-acting loop that allowed agents to interleave thought and action,
while LangChain provided a composable framework for chaining LLM calls with external tools. By 2023, AutoGPT
(Significant Gravitas, 2023) emerged as the first widely recognised open-source autonomous agent project, bringing
widespread attention to agentic AI through its demonstration of goal-driven, multi-step task execution with minimal
human intervention. The year 2024 witnessed rapid infrastructure maturation: LangGraph (LangChain, 2023) advanced
agent orchestration from linear chains to stateful graph-based workflows, enabling branching, looping, and persistent
state management; low-code platforms such as Dify and Coze accelerated prototyping and deployment, lowering the
barrier to entry for non-specialist developers; and the open-sourcing of the model context protocol (MCP) (Hou et al.,
2025) fundamentally reduced the cost of tool integration by standardising how agents discover and invoke external
resources.
In 2025, multi-agent coordination became a central theme. CrewAI 2.0 (CrewAI, 2023) proposed role specialisation
combined with task assignment for multi-agent systems, allowing agents with distinct personas and responsibilities
to collaborate on complex workflows. Google contributed the Agent-to-Agent (A2A) protocol (Ray, 2025) to
the Linux Foundation, promoting cross-platform interoperability and establishing a common language for agent

communication. At the model level, inference-time scaling—exemplified by the GPT o-series and subsequent reasoning
models—significantly improved complex task decomposition and long-horizon planning, enabling agents to reason
through multi-step problems with greater reliability. Deployment platforms such as Microsoft Copilot Studio and
Google Gemini Enterprise Agent Platform began enabling enterprise-grade multi-agent systems with governance and
observability support, signalling a shift from research prototypes to production-ready infrastructure.
By early 2026, OpenClaw (Steinberger, 2026) had become the fastest-growing open-source AI project, epitomising a frontier where agents are no longer single-purpose chatbots but orchestrated, tool-using, multi-agent, and
operationally governed entities. OpenClaw integrates several of the developments described above: it is built on
MCP, supports hot-swappable skills through the ClawHub marketplace, and enables persistent memory, long-horizon
planning, and auditable action. Its rapid adoption across both research and industry contexts reflects the growing
expectation that agentic AI should function as an extensible, interoperable, and governable infrastructure rather than
as isolated, single-purpose tools.
Parallel to these infrastructural advances, the research community has pushed the boundaries of what agentic AI
can achieve. For example, several studies (Wang et al., 2025c; Feng et al., 2026; Wang et al., 2023) have demonstrated
the feasibility of self-evolving behaviours, where agents improve their own strategies through iterative self-reflection
and environmental feedback. Yin et al. (2025) further explored self-referential reasoning, enabling agents to reason
about their own reasoning processes. For planning and causal reasoning, Li et al. (2025a) and Gendron et al. (2025)
have begun to construct causal world models and generate counterfactual trajectories, suggesting a trajectory towards
deeper reasoning capabilities. In memory management, Tang et al. (2025) introduced cross-agent shared memory
infrastructures, allowing multiple agents to access and update a common knowledge base over extended interactions.
Multi-agent collaboration has also advanced significantly: Bolleddu (2025) reported over 94% consensus rates in multiagent negotiations, while Quan et al. (2025) addressed dynamic conflict resolution in agent teams, illustrating the
potential for ecosystem-level coordination. Robustness and governance have similarly attracted attention, with selfhealing proposals (Desai, 2025) and autonomous red-teaming architectures (Park et al., 2025) demonstrating early
approaches to self-repair and adversarial robustness.
This rapid evolution raises important questions for educational research and practice. While general-purpose
agentic AI has moved swiftly towards orchestrated, multi-agent, and governed systems, it is not yet clear to what
extent these frontier paradigms have been adopted, adapted, or remain absent in educational contexts. Educational
adoption is shaped by distinct constraints: pedagogy, learner development, assessment, institutional infrastructure,
ethics, and classroom ecologies all mediate how and whether a technically possible form of agency becomes an
educationally appropriate one (Slimi and Carballido, 2023). Moreover, the gap between rapid technological innovation
and educational research and practice is not merely one of lag; it reflects fundamentally different priorities, evidence
standards, and design values.
Given this context, OpenClaw is used in this review as an illustrative and time-sensitive example of a broader
frontier-agent paradigm. The purpose of using an OpenClaw-informed lens is not to treat it as a gold standard, benchmark, or normative target that educational systems should necessarily emulate. Rather, it serves as a contemporary
reference point against which to examine whether current educational agentic systems are beginning to incorporate
capabilities that are increasingly salient in general-purpose agentic AI, such as governed tool orchestration, persistent
memory, long-horizon planning, multi-agent coordination, and auditable action. This lens is especially useful for
identifying technology–application gaps, but it is applied with the recognition that educational systems must be
evaluated on their own terms, with pedagogical effectiveness and learner wellbeing as primary criteria.

1.3. Previous Reviews and Remaining gaps
Several prior reviews have contributed foundational groundwork in adjacent areas. Within the broader domain of
generative AI in education, Shan Li and Juan Zheng (2026) conducted a scoping review of LLM-based pedagogical
agents, analysing 52 studies and proposing a four-dimensional analytical framework encompassing interaction
approach, domain scope, role complexity, and system integration. While their review captures the technological shift
toward LLM-empowered agents, it does not systematically examine characteristics, such as autonomous planning,
reasoning, memory, and tool orchestration, that distinguish agentic AI from earlier pedagogical agent paradigms.
Similarly, Brito et al. (2025) provided an overview of LLMs and intelligent agents in education, comparing multiagent platforms and demonstrated through a Crew AI case study how agents can autonomously orchestrate personalised
learning pathways. However, their analysis remains introductory and does not offer a systematic synthesis of the broader
research landscape.

Several reviews have focused more directly on agentic AI in educational contexts. Kostopoulos et al. (2025)
provided a narrative synthesis of agentic AI in education, offering a taxonomy based on pedagogical role, autonomy
level, and embodiment, alongside an analysis of technological foundations including LLMs, planning mechanisms,
and memory management. Shanthi et al. (2026) surveyed agentic AI-powered adaptive learning platforms, tracing
the evolution from rule-based systems to LLM-integrated multi-agent architectures and identifying key challenges
including cold-start problems, hallucination, bias, and the need for standardised evaluation frameworks.
Additional specialised reviews have addressed specific facets of AI agents in education. Latif et al. (2026)
systematically reviewed intelligent tutoring systems (ITS) and robot tutoring systems (RTS), applying latent class
analysis to identify three distinct categories and highlighting the complementary strengths of cognitive and socioemotional engagement strategies. Ba et al. (2026) examined AI agents in computer-supported collaborative learning
through the lens of the Community of Inquiry (CoI) framework, revealing balanced distributions of agent functions
across cognitive, social, and teaching presences. Sun (2026) conducted a systematic review of human-agent interaction
in education, identifying that disembodied and virtual agents predominantly serve as assistants or tutors in one-to-one
learning scenarios. Marquez-Carpintero et al. (2025) reviewed LLM-based student simulation, analysing cognitive
architectures, memory management mechanisms, and knowledge modelling strategies. Zhang (2025) provided a comprehensive survey of multi-agent systems for learning assessment, categorising applications into personalised formative
assessment, collaborative learning assessment, and summative assessment with academic integrity monitoring, while
identifying persistent challenges in explainability, bias, privacy, and scalability. Córdova-Esparza (2025) systematically
reviewed AI-powered educational agents, synthesising 82 studies into six thematic clusters and emphasising the
superiority of hybrid human-AI workflows over fully autonomous tutoring systems.
Notwithstanding these contributions, considerable gaps still exist. First, few reviews have systematically mapped
the research landscape of generative AI-powered agentic AI in education as a whole. Prior reviews have either
focused on specific agent types, specific technological architectures, or specific application domains, without offering
a comprehensive, cross-cutting synthesis that captures the field’s breadth, disciplinary diversity, and methodological
heterogeneity. Moreover, the existing reviews are based on relatively small corpora: most have synthesised between 30
and just over 100 studies. While these sample sizes are appropriate for their focused scopes, they limit the capacity to
capture the full disciplinary diversity and rapid expansion of the field, particularly the surge of publications since 2025.
Second, the relationship between agentic technical capabilities and pedagogical design remains poorly understood.
While several reviews describe what agentic systems can do technologically, few have systematically examined how
these capabilities are operationalised in educational contexts, what educational theories inform their design, and
whether technical sophistication translates into pedagogical effectiveness. Third, prior reviews have not systematically
analysed differences across study orientations and study types. Educational research and computer science research
often adopt different publication practices, evidence standards, and design priorities. A synthesis that examines these
differences is needed to understand what kinds of evidence are being produced, where, and by whom, and to identify
disciplinary gaps and methodological blind spots. Fourth, no review has examined the extent to which frontier agentic
AI paradigms, particularly those involving governed tool orchestration, persistent memory, long-horizon planning,
multi-agent coordination, and auditable action, are being adopted, adapted, or largely absent in educational research.
The rapid evolution of general-purpose agentic frameworks, exemplified by OpenClaw and related developments, has
outpaced educational adoption and analysis, leaving a substantial gap between technological possibility and educational
practice.

1.4. Objectives and Research Questions
Accordingly, this scoping review systematically delineates the current research landscape of generative AI-powered
educational agentic systems. The review has three complementary objectives. First, it maps the field descriptively
by identifying where, how, and for whom agentic AI are being studied. Second, it compares patterns across study
orientations and study types because disciplinary and methodological differences shape both system design and the
evidence that becomes visible. Third, it identifies capability, design, and governance gaps between current agentic AI
in education and broader frontier developments in agentic AI in order to outline future directions that are technically
informed but educationally appropriate.
The review is guided by the following research questions:
RQ1. What are the key characteristics of research on generative AI-powered educational agents?
RQ2. How do research characteristics differ across disciplinary orientations and study types?

Figure 1: PRISMA-ScR flow diagram

RQ3. What capability, design, and governance gaps are evident between current agentic systems in education and
broader frontier developments in agentic AI, and what future directions do these gaps suggest for education?
Each research question serves a distinct objective. RQ1 maps the overall research landscape because the field is new,
rapidly expanding, and methodologically diverse. RQ2 examines differences across study orientations and study types
because educational and computer-science communities often adopt different publication practices, evidence standards,
and design priorities. RQ3 focuses on capability and infrastructure gaps because frontier agentic AI is introducing new
possibilities and risks that have not yet been systematically analysed in educational research.
The remainder of this paper is organised as follows. Section 2 presents the review methodology, including the search
strategy, eligibility criteria, screening procedures, and data extraction and analysis framework. Section 3 synthesises the
characteristics of the included literature in relation to the research questions. Section 4 interprets these findings with
particular attention to educational theory, agentic capability, governance, and future design implications. Section 5
summarises the review and discusses its limitations.

2. Methods
This scoping review was conducted in accordance with the Preferred Reporting Items for Systematic Reviews and
Meta-Analyses extension for Scoping Reviews (PRISMA–ScR) (Tricco et al., 2018). A scoping review approach was
selected because the purpose of this study was to map the breadth, characteristics, and emerging trends of research on
generative AI-powered agentic systems in education, rather than to evaluate the effectiveness of a single intervention or
to conduct a meta-analysis. The overall literature identification, screening, eligibility assessment, and inclusion process
is presented in Figure 1.

2.1. Search Strategy and Information Sources
A systematic literature search was conducted across the following professional databases: Scopus, ACM Digital
Library, IEEE Xplore, Web of Science Core Collection, ERIC via EBSCOhost, and APA PsycINFO via ProQuest. The
search covered publications from 2020 to May 2026. Eligible document types included journal articles, conference
papers, and review papers. To capture rapidly emerging work in this fast-developing field, short surveys, extended
abstracts, and early access articles published between 2025 and 2026 were also considered. In addition to the
database search, arXiv and Google Scholar were used as supplementary sources for grey literature searches. These
supplementary searches aimed to identify relevant preprints, early-stage studies, and recent publications that may not
yet have been indexed in the professional databases. Only English-language publications were included.
The search strategy was designed to capture studies at the intersection of three core constructs: generative AI, AI
agent, and education. To achieve this, a comprehensive set of keywords was developed for each construct, drawing
on common terminology from the literature (see Table 1). The three groups of keywords were combined using the
Boolean operator AND to ensure that only records addressing all three dimensions were retrieved. Where supported
by the database interface, proximity operators (e.g., NEAR/n or W/n) were applied to constrain the distance between
generative AI terms and agent-related terms to within five words (e.g., “generative NEAR/5 agent”). All searches

Table 1
Search terms used in article retrieval
Topic

Search terms

Generative AI

("language model*" OR LLM OR VLM OR "generative AI" OR GenAI OR "AI teacher" OR
"agentic AI" OR "AI assistant" OR "AI agent" OR "AI tutor" OR "intelligent tutor" OR "AI
companion")
("assistant*" OR "agent*" OR "tutor*" OR "companion" OR "support" OR "curriculum design"
OR "AI teacher" OR "agentic AI" OR "AI assistant" OR "AI agent" OR "AI tutor" OR
"intelligent tutor" OR "AI companion")
(education* OR teaching OR student* OR classroom OR pedagog* OR curriculum)

AI Agent

Education

were limited to titles, abstracts, and keywords to maintain relevance while keeping the screening workload manageable.
The final search was completed on 13 May 2026.

2.2. Eligibility Criteria
The central concept of this review is generative AI-powered agentic AI in education. As defined in the Introduction,
this term refers to the broader technological paradigm in which generative AI is embedded within systems that exhibit
core agentic characteristics such as task autonomy, goal-directed reasoning, adaptive decision-making, and memoryand context-aware interaction. Because the terminology surrounding AI agents, agentic AI, and generative AI tools
remains inconsistent across technical and educational literature, the conceptual boundaries of this review were defined
primarily by functional characteristics rather than by author-provided labels alone (Sapkota et al., 2026; Acharya et al.,
2025; Kostopoulos et al., 2025).
A study was eligible when the system was designed for an educational purpose and demonstrated at least one of
the following characteristics: task autonomy, goal-directed reasoning, adaptive decision-making, memory- or contextaware interaction, tool or environment interaction, or multi-agent coordination. The review did not require systems to
be fully autonomous. Rather, agentic capability was treated as a matter of degree. Conversely, studies were excluded
when generative AI was used only as a general-purpose text-generation or prompt-response tool without a designed
educational agent workflow. For example, studies in which students simply prompted ChatGPT for learning assistance,
without any purpose-built educational agent design or agentic functionality, were outside the scope of this review. By
contrast, studies were included when generative AI served as the backend of a designed educational agent, such as an
adaptive tutor, role-playing simulator, peer learner, assessment assistant, or instructional planning agent, and when the
system exhibited identifiable agentic characteristics.
The detailed inclusion and exclusion criteria are presented in Table 2.

2.3. Screening Process
As shown Figure 1, database searches retrieved a total of 8,595 records from seven data sources. Following the
removal of duplicate records, 6,165 entries were retained for title and abstract screening.

2.3.1. Title and abstract screening
Given the large volume of records and the expected imbalance between relevant and irrelevant studies, title and
abstract screening was conducted using an LLM-assisted dual-reviewer strategy proposed by Scherbakov et al. (2025).
The procedure is illustrated in Figure 2.

Calibration sampling. To mitigate potential bias arising from the low anticipated proportion of eligible studies, we
first performed an LLM-powered preliminary binary classification using DeepSeek-V4-Flash. The model was prompted
with the following instruction: “Based on the supplied title and abstract, should this article be incorporated into the
scoping review on agentic AI in education? Respond exclusively with either Yes or No.” These preliminary predictions
were used only for stratified sampling and were not used to determine study eligibility.
Fifty records were randomly sampled from each of the LLM-predicted relevant and irrelevant groups to form an
initial 100-record calibration set. Two human reviewers independently screened these records against the eligibility
criteria. The initial inter-rater reliability was substantial, with Cohen’s kappa = 0.760 (observed agreement = 93.5%;
expected agreement = 55.2%).

Table 2
Inclusion and exclusion criteria
Inclusion criteria

Exclusion criteria

• Generative AI-powered agentic AI, or agentic system
• At least one core agentic characteristic: task autonomy,
goal-directed reasoning, adaptive decision-making, and
memory-aware and context-aware interaction
• Designed for, applied to, or evaluated in an educational
context or for an educational purpose
• Educational context involving human learners, teachers, instructors, or other educational stakeholders
• Examines a designed educational agentic AI system or
agentic workflow (e.g., adaptive tutor, role-playing simulator, peer learner, assessment assistant, instructional
planning agent)
• English-language publications
• Published since 2020
• Publication type: journal article, conference paper,
review paper, short survey, extended abstract, early
access article, preprint

• Rule-based or traditional non-generative machine learning approaches only
• Generative AI used only as a static tool for content generation, prompt-based assistance, or general-purpose
interaction, without any agentic characteristics
• Education not the primary context; mentioned only as
future application or peripheral example
• Target audience non-human (e.g., a “teaching agent”
aimed at improving another ML model’s performance
rather than human learning)
• Focuses only on generative AI models themselves (e.g.,
model benchmarking, prompt comparison, technical
evaluation) without an agentic design in education
• Non-English publications
• Published before 2020

Figure 2: The procedure of LLM-assisted dual-reviewer title and abstract screening

Criteria refinement and recalibration. Disagreements between the two reviewers were discussed, and the screening
criteria were refined accordingly. The revised criteria are summarised in Table 2. A second calibration round was then
conducted using a new stratified sample of 200 records, consisting of 100 records from the LLM-predicted relevant
group and 100 records from the LLM-predicted irrelevant group. In this round, the two reviewers achieved a higher
level of agreement, with Cohen’s kappa = 0.855, indicating strong consistency in the application of the revised criteria.

Prompt design and validation. Based on the refined eligibility criteria, a prompt was designed for the LLM-assisted
title and abstract screening task. Instead of directly asking for a classification, the prompt instructed the model to

answer a series of pre-defined questions about each record (e.g., “does the title_abstract explicitly indicate that the
study focuses on agentic AI in education as a primary theme”). Small-sample validation was conducted to confirm that
the LLM correctly interpreted the eligibility criteria and followed the question-answering protocol.

Multiple inference and majority voting. For each question, the LLM performed three independent inference runs.
The final answer was determined by majority vote. The model’s answers to these questions were then used to derive a
final decision of “include”, “exclude”, or “borderline”. The final prompt and a decision-making flowchart are included
in Appendix B.

Human–LLM consensus building. A human–LLM consensus procedure was conducted using the 300-record
calibration set. The decisions of one human reviewer were compared with the LLM majority-vote classifications, and
discrepant cases were examined to identify potential false positives and false negatives. This process was used both to
evaluate LLM performance and to inform the subsequent targeted manual verification stage.
During this stage, two LLMs, GPT-5-Mini and DeepSeek-V4-Flash, were compared. DeepSeek-V4-Flash was
selected for the final screening procedure because it showed stronger agreement with the human reviewer, with Cohen’s
kappa = 0.80.

Targeted manual verification. For each record requiring manual verification, one human reviewer was assigned to

verify and, where necessary, correct the LLM screening results for categories expected to have lower precision. The
sampling strategy was as follows:
• a random sample of 10% of excluded records (𝑛 = 570);
• all borderline records (𝑛 = 43);
• all included records published before 2023 (𝑛 = 2);
• a random sample of 10% of included records (𝑛 = 43).
To minimise the risk of excluding potentially relevant studies, any record labelled as “borderline” by the LLM, as
well as any record that remained doubtful after manual verification, was automatically retained for full-text screening.
After this process, 593 records passed the title and abstract screening stage.

2.3.2. Full-text screening
Of the 593 records, 10 could not be accessed in full text. Thus, 583 entries underwent full-text screening.
Two reviewers independently evaluated half of the full-text articles based on the inclusion and exclusion criteria.
During full-text screening, reviewers were permitted to use LLMs for assistance when uncertain about their judgments.
To check consistency, we randomly selected 20% of all articles for cross-verification. Finally, 474 studies were included
in this scoping review.

2.4. Data Charting and Synthesis
2.4.1. Coding scheme
We developed a standardised data charting form as in Appendix C. To define valid values for each field, we adopted
LLMs to extract initial field values from the eligible studies. The coding scheme was developed iteratively, guided by
both deductive and inductive reasoning. Deductively, we drew on established taxonomies and evaluation methods
from computer science and educational theories, as elaborated in subsection 2.4.3, to define initial coding categories.
Inductively, we first used a LLM (DeepSeek-V4-Flash) to extract preliminary field values from a stratified sample of
the included studies. Subsequent analysis of the extracted data revealed emerging categories and helped define relevant
candidate values. Through iterative discussion and refinement, we merged, split, or added categories until saturation
was reached. This hybrid approach ensured that the final coding scheme aligned with both classic educational theories
and our research questions.
The final charting form captured the following fields, which were divided into four major categories.
• For publication and contexts, there are unique id (generated by Zotero), publication year, country of the first
author’s institution, publication type (e.g., conference, journal), study type (e.g., empirical, theoretical, conceptual, review), study orientation (e.g., education-oriented, computer science/AI-oriented), target population (e.g.,

K–12 students), educational stage (e.g., K–12, higer education), subject domain (e.g., mathematics), educational
context (e.g., online learning);
• For research design and evidence, sample size, evidence forms (e.g., experimental or quasi-experimental
evidence, literature synthesis);
• For agentic roles, technologies and capabilities, there are agent roles (e.g., tutor, assessor), generative AI models
used (e.g., GPT), agentic frameworks/platforms/architectures used (e.g., LangChain, AutoGen, Coze), sixdimensional agentic capabilities (1-5 scale) including autonomy and proactivity, planning and reasoning depth,
memory and context management, tool and environment interaction, multi-agent collaboration, and robustness,
explainability and governance;
• For educational theories, there is the educational theory referenced (e.g., scaffolding);
We also briefly documented other textual information, including research questions, self-identified gaps, and agent
description.

2.4.2. Development of the six-dimensional agentic capability framework
The six dimensions of agentic capabilities were selected according to three criteria. First, they recur across
foundational and contemporary accounts of agentic AI (Russell and Norvig, 2022; Gignac and Szodorai, 2024;
Morris et al., 2025; Hendrycks et al., 2025; Kostopoulos et al., 2025), representing capabilities widely recognised
as constitutive of agentic systems. Second, they are observable from the kinds of reporting typically available in
empirical studies, system-implementation papers, conceptual articles, and reviews; each dimension can be rated from
information about agent architecture, interaction design, and evaluation setup without requiring fine-grained interaction
logs or proprietary benchmarks. Third, they are directly relevant to educational deployment and are grounded in the
educational theories discussed in the subsequent subsection.
A 1–5 ordinal scale was adopted for each dimension to capture meaningful qualitative thresholds (e.g., the leap
from non-agentic to partially agentic and then to fully agentic behaviour) while remaining feasible for scoping-review
coding, where information must be extracted from highly heterogeneous reporting formats. The five-point ladder also
maps readily onto widely used progressions in automation and intelligence research, such as the ten-level scale of
Sheridan and Verplank (Sheridan, 1992) and the four-stage typology of Parasuraman et al. (Parasuraman et al., 2000);
by consolidating the finer gradations, the scale retains conceptual richness while keeping the coding task manageable.
Pilot testing confirmed that five levels provided sufficient resolution to discriminate between the capabilities reported
in empirical, design, and review papers without introducing the instability that finer scales would cause across such
diverse studies.
Initial level descriptors for each dimension were drafted by two researchers based on existing automation, agent, and
trustworthy AI literature. These draft descriptors were then refined with the assistance of a large language model, which
was used to review wording consistency and identify ambiguous boundary cases. The descriptors were subsequently
tested in a pilot coding exercise on 20 randomly selected studies that had not been part of the calibration set. Two
coders independently applied the rubric, and discrepancies were discussed to further clarify the anchors.
It should be noted that this framework constitutes an analytic coding rubric developed specifically for the current
scoping review, and is not a psychometric measurement tool. Formal external expert validation was not conducted, and
the capability scores should be interpreted with this in mind. Future work could subject the rubric to a more rigorous
validation process involving a larger, independent panel of raters.
The complete level descriptors is provided in Appendix C.2.
2.4.3. Theoretical frameworks
The coding scheme of this scoping review rests on a three-layer design in which each component plays a distinct
role: the Population-Concept-Context (PCC) framework (Peters et al., 2020) provides a descriptive scaffold, activity
theory (Engeström, 2014) furnishes the core educational rationale for the six agentic capability dimensions, and
scaffolding theory supplements the interpretation of instructionally salient dimensions.

PCC as a descriptive scaffold. To systematically map the breadth and characteristics of the included literature, we
adopted the PCC framework recommended by the Joanna Briggs Institute for scoping reviews (Peters et al., 2020).
The PCC framework is specifically designed to structure descriptive research questions by decomposing the scope

Table 3
Operational definitions of the six agentic capability dimensions and their alignment with activity theory
Capability dimension

Operational definition

Activity-theory element

Autonomy & Proactivity

Ability to initiate, advance, and complete tasks
without human intervention

Subject – the agent as an active participant

Planning
Depth

Reasoning

Ability to decompose tasks, make plans, reason
logically, and adjust dynamically

Object – the goal that must be hierarchically
transformed

Memory & Context Management

Ability to store, retrieve, and use historical
information and context

Historicity & Division of labour – shared
representations across time and agents

Tool & Environment Interaction

Ability to call external tools, operate in digital/physical environments, and close the loop

Instruments/Tools – material and symbolic
artefacts that mediate action

Multi-Agent Collaboration

Ability to communicate, divide labour, and
coordinate with other agents

Community & Division of labour – multiple
interacting participants

Robustness, Explainability
& Governance

Ability to handle exceptions, explain actions,
and ensure safety/compliance

Rules – norms, standards, and ethical constraints

&

into three complementary facets: Population (who the study is about), Concept (what is being studied), and Context
(where, when, and how the study is situated). This tripartite structure is well suited to the present review, whose first
two research questions (RQ1 and RQ2) ask about the key characteristics of the research landscape and how they differ
across study orientations and types.
Each PCC dimension was operationalised through a set of concrete coding fields extracted from every included
study.
• Population captures the human stakeholders involved in or affected by the agentic system and is recorded through
three fields: target_population, educational_stage, and sample_size. Together, these fields reveal who
is being studied, at what level of education, and with what empirical scale.
• Concept delineates the core technological and functional characteristics of the agentic AI being investigated. It
is captured through ai_models, agent_role, and agent_frameworks. These fields specify what constitutes
the agentic system under study.
• Context encompasses the settings, disciplines, and methodological conditions in which the research was
conducted. It includes publication_year, first_author_country, publication_type, study_type,
study_orientation, discipline, educational_context, and evidence_form. This set of fields describes the temporal, geographic, disciplinary, and evidential landscape within which generative AI-powered
agentic AI in education is being examined.
Importantly, PCC serves exclusively as a descriptive organiser. It does not interpret agentic capabilities or make value
judgments about educational quality. The framework provides the baseline answers to RQ1 and RQ2 by mapping what
exists in the literature, while the capability dimensions and educational theories that follow address how agentic and
pedagogically grounded the reported systems are.

Activity theory as the core educational lens. To provide a systematic educational interpretation of the six
capability dimensions (which themselves are derived from agentic AI scholarship; see Section 2.4.2), we employ
Engeström’s (Engeström, 2014) human activity system model. This model comprises six interrelated elements, i.e.,
subject, object, instruments/tools, rules, community, and division of labour, plus the principle of historicity. These
elements collectively describe the systemic structure of any goal-directed, tool-mediated, socially distributed practice,
including technology-enhanced learning. Table 3 presents the operational definitions, maps them to activity-theory
elements, and thus anchors the technical yardstick in educational theory.

Scaffolding theory as a supplementary lens. Scaffolding theory (Wood et al., 1976) describes the temporary,

contingent support that enables learners to accomplish tasks beyond their current independent ability, with support
gradually withdrawn as competence grows. This dynamic is anchored in Vygotsky’s (Vygotsky, 1978) zone of proximal
development (ZPD), which defines the region between unaided performance and performance under guidance.
While activity theory explains why the six capability dimensions are structurally necessary, scaffolding theory
focuses on how these same capabilities are pedagogically regulated during instructional interaction. Specifically, three

of the six dimensions receive this supplementary interpretation. Planning & Reasoning Depth is the means through
which task decomposition is regulated: a scaffolded agent breaks complex tasks into manageable sub-goals calibrated
to the learner’s ZPD, adapting the level of decomposition as competence increases. Memory & Context Management
enables the ongoing diagnostic assessment that regulates the timing and intensity of scaffolding: by tracking the
learner’s history and current state, the agent determines when to intervene, when to hold back, and when to fade
support. Robustness, Explainability & Governance regulates the safety and trustworthiness of scaffolding: the agent’s
actions must remain reliable, interpretable, and within ethically bounded limits so that instructional support does not
inadvertently harm or mislead. These pedagogical interpretations are applied at the synthesis stage of the review and
do not introduce additional coding fields.

2.4.4. Workflow
Data extraction followed a LLM-assisted strategy similar to that used in the title and abstract screening phase.
To ensure coding consistency, a calibration exercise was conducted on 20 randomly selected studies prior to formal
extraction. During formal extraction, two human reviewers each independently extracted data for half of the included
studies, while the LLM extracted all fields for the entire set of included studies. For each field of each study, the
human and LLM extractions were compared. When the two sources agreed, the value was accepted directly. When
disagreement arose, the two human reviewers jointly re-examined the full original text and reached a consensus. This
approach reduced manual workload while maintaining a quality assurance mechanism. The complete coding results
for all included studies can be accessed here on the Open Science Framework (OSF).
Data synthesis combined descriptive statistics with thematic aggregation. For quantitative variables (e.g., publication year, distribution of intelligence levels, dimension scores, frequencies of study types), we calculated frequencies,
percentages, means, and medians, and presented results using charts (e.g., bar, doughnut, radar) and tables. For
qualitative variables (e.g., educational theories, agentic frameworks, research gaps), we adopted a thematic analysis
approach. Concretely, two reviewers independently performed open or semi-open coding of the extracted text,
discussed and consolidated similar codes into subthemes, and then aggregated these into core thematic categories.
All synthesis results were organised around the three research questions and reported in the Results section. No metaanalysis was conducted, and the risk of bias for individual studies was not assessed, consistent with the objectives and
scope of a scoping review.

3. Results
3.1. Publication-Related Characteristics
Figure 3 presents the distribution of various publication-related and contextual characteristics across the 474
included studies, as detailed below.

Temporal distribution. As shown in Figure 3a, the annual number of publications exhibits a clear upward trend.

While our literature search spanned the years 2020 to 2026, no relevant works from 2020 and 2021 were included in
the final dataset. This is unsurprising: general generative AI models rose to widespread prominence and practical use
only after the release of OpenAI ChatGPT in late 2022, and AI agents built on these models attracted even less attention
beforehand. Only one study (0.2%) was published in 2022, followed by eight (1.7%) in 2023 and 41 (8.6%) in 2024.
From 2025 onward, the field entered a phase of rapid expansion: 278 studies (58.6%) were published in 2025, and 146
(30.8%) were already included for January–May 2026. This pattern indicates that generative AI–powered agentic AI
has emerged as a hotspot within educational technology, with research activity accelerating markedly over the past two
years. This trajectory largely follows the broader diffusion of agentic AI technology outside education (see Section 1),
suggesting that educational research is responding to, rather than building on a mature, cumulative literature.

Geographic distribution. Figure 3b presents the geographic distribution of first authors’ institutional affiliations.
The top five countries by first-author affiliation are China (150, 31.6%), the United States (93, 19.6%), India (31,
6.5%), Germany (18, 3.8%), and the United Kingdom (14, 3.0%). Australia, Indonesia, South Korea, Taiwan, and Spain
each contributed between eight and eleven publications. Overall, Asia, North America, and Europe are the principal
producing regions. China and the United States together account for just over half of the corpus (51.2%), underscoring
their leading roles in this area. Such concentration may reflect differential research investment and infrastructure, but
it also raises questions about the generalizability of findings across diverse educational agentic systems Xiao et al.
(2025).

(a) Publication year distribution

(b) Top 10 countries by first author affiliation

(d) Study orientation
(c) Publication type
Figure 3: Statistics on publication characteristics

Publication types and study orientations. As illustrated in Figure 3c, conference papers dominate publication
types (330, 69.6%), followed by journal articles (95, 20.0%), preprints (45, 9.5%), and book chapters (4, 0.8%). This
indicates that the latest research results in this field are disseminated primarily through conferences, with preprints also
serving as an important early-release channel.
We also categorised the articles based on their domain orientation into computer science/AI-oriented (237 articles,
accounting for 50%), education-oriented (170 articles, 35.9%), and interdisciplinary (67 articles, 14.1%).
A closer examination of publication type by study orientation reveals that the predominance of conference papers is
primarily driven by computer science/AI-oriented studies. Among computer science/AI-oriented studies, 78.5% were
conference papers, whereas education-oriented studies showed a more b

[... truncated to 50K chars ...]
