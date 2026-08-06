---
source_url: "https://aclanthology.org/2026.eacl-long.191"
ingested_date: 2026-08-06
sha256: 030e535ebdd7b1e06950efb922e14138c7a3dcee14a5673314c9777b8ce641d2
---

# Instructional Agents: Reducing Teaching Faculty Workload through Multi-Agent Instructional Design

**Authors:** Huaiyuan Yao, Wanpeng Xu, Justin Turnau, Nadia Kellam, Hua Wei (Arizona State University)
**Venue:** EACL 2026, March 24-29
**DOI:** https://aclanthology.org/2026.eacl-long.191

## Full Text

Instructional Agents: Reducing Teaching Faculty Workload
through Multi-Agent Instructional Design
Huaiyuan Yao* , Wanpeng Xu* , Justin Turnau, Nadia Kellam, Hua Wei
Arizona State University
{huaiyuan, wanpeng.xu, jturnau, nadia.kellam, hua.wei}@asu.edu
*
Equal Contribution

Abstract
Preparing high-quality instructional materials
remains a labor-intensive process that often
requires extensive coordination among teaching faculty, instructional designers, and teaching assistants. In this work, we present Instructional Agents, a multi-agent large language model framework designed to automate
end-to-end course material generation, including syllabi creation, LaTeX-based slides, lecture scripts, and assessments. Unlike prior
tools focused on isolated tasks, Instructional
Agents simulates role-based collaboration to
ensure pedagogical coherence. The system operates in four modes: Autonomous, CatalogGuided, Feedback-Guided, and Full Co-Pilot
mode, enabling flexible control over the degree of human involvement. We evaluate Instructional Agents across five university-level
courses and show that it produces high-quality
instructional materials that are reviewed and
refined by teaching faculty prior to use, while
significantly reducing the time required to prepare classroom-ready content. By supporting
institutions with limited instructional design capacity, Instructional Agents provides a scalable
and cost-effective framework to democratize
access to high-quality education, particularly
in underserved or resource-constrained settings.
The project website, including source code,
is available at https://darl-genai.github.
io/instructional_agents_homepage/

1

Introduction

The preparation of instructional materials is a
fundamental but labor-intensive aspect of education (Merritt, 2016; Gavin and McGrath-Champ,
2024). Instructors must design syllabi, create slides,
and develop teaching notes, which often require
coordination among faculty, instructional designers, and teaching assistants. Despite its pedagogical importance, the process is manual and timeconsuming, limiting scalability. The absence of

instructional design support exacerbates these challenges, often resulting in high preparation costs
even for routine course development.
Recent advances in large language models
(LLMs) have sparked growing interest in AIassisted education (Wang et al., 2024; Baig and
Yadegaridehkordi, 2024). While AI tools have addressed isolated tasks such as tutoring and grading (Zhai, 2023), they lack end-to-end workflows
for instructional design. As a result, instructors
still invest substantial effort in producing coherent course materials, often resulting in fragmented
alignment between objectives, assessments (e.g.,
quizzes, exams, and peer-reviewed assignments),
and content (Biggs, 1996; Wang et al., 2013; Biggs
et al., 2022).
To address these challenges, we introduce Instructional Agents, a multi-agent LLM framework
for automated course material generation. Unlike single-model approaches, Instructional Agents
simulates collaborative workflows among a comprehensive group of educational roles, including
Teaching Faculty, Instructional Designer, Teaching Assistant, Course Coordinator, and Program
Chair. These agents interact guided by the instructional design framework, ADDIE (Gagne et al.,
2005; Branch and Varank, 2009), ensuring alignment across learning objectives, assessments, and
content. Instructional Agents also supports four
modes: Autonomous, Catalog-Guided, FeedbackGuided, and Full Co-Pilot. These modes allow
for a balance between automation and human involvement. By mimicking real-world instructional
collaboration, the system aims to preserve instructional coherence while scaling the design process.
This paper investigates whether multi-agent
LLM systems can support instructional material
generation in higher education. We evaluate how
interaction modes impact output quality, efficiency,
and scalability, with a focus on reducing faculty workload while preserving pedagogical rigor.

4087
Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics
Volume 1: Long Papers, pages 4087–4109
March 24-29, 2026 ©2026 Association for Computational Linguistics

Figure 1: Overview of Instructional Agents. (Left) Inputs and outputs in Instructional Agents. Educator input and human
feedback guide the generation of key instructional materials, including learning objectives, syllabi, slides, slide scripts, and
assessments. (Right) Instructional Agents framework showing the overall workflow based on the first three phases of the ADDIE
instructional design framework (Gagne et al., 2005; Branch and Varank, 2009): Analyze, Design, and Develop. Within each
phase, multiple role-specialized agents (Teaching Faculty, Instructional Designer, Teaching Assistant, Course Coordinator, and
Program Chair) collaborate through structured prompt exchanges to complete subtasks and refine outputs in an iterative workflow.
Appendix F provides the specific prompts used for each type of agent. Each prompt includes a tailored background context and
clearly defines the agent’s goals, tasks, and responsibilities to ensure coherent and role-aligned response generation. Avatars are
illustrative and designed for diversity without implying real demographic proportions or stereotypes.

Rather than student outcomes, we assess the revision effort required by teaching faculty. In summary, our contributions are as follows:
• We present Instructional Agents, a multi-agent
LLM framework for automated course material
generation, structured around the ADDIE instructional design framework.
• We introduce role-based collaboration among
educational agents with different levels of human involvement to ensure coherent, pedagogically
aligned content. Specifically, Instructional Agents
supports comprehensive roles in instructional design and operational modes to flexibly balance automation and human oversight.
• We evaluate Instructional Agents on five courses
using both human and automated reviewers, showing that it reduces educator workload and preserves
rigor and coherence, while also revealing trade-offs
between automation, quality, and scalability.

2

Background and Related Work

LLM Agents and Role Collaboration Large
Language Models have enabled the creation of
multi-agent systems where model instances assume
distinct roles to collaborate on complex tasks (Yao
et al., 2025a; Zhao et al., 2025). These systems
have been applied to domains such as scientific research (Ma et al., 2024; Schmidgall et al., 2025),
web automation (Yang et al., 2024), and interactive
behavior simulation (Park et al., 2023; Yao et al.,
2025b), demonstrating that structured agent interaction improves task consistency and division of
labor (Wang et al., 2025; Rasal and Hauer, 2024).

However, most applications optimize for factual
correctness or task success, without addressing pedagogical alignment or coherence. The education domain presents distinct challenges, requiring collaboration across instructional roles and consistency
among diverse outputs, which are not addressed by
typical LLM agent pipelines (Chu et al., 2025).
LLMs in Education In education, recent studies
have focused on classroom simulation and taskspecific automation. For example, LLM agents
have been used to emulate teacher-student dialogues for training and research (Zhang et al., 2024;
Hao et al., 2025; Hu et al., 2025). Others target
automation of instructional tasks such as syllabus
drafting, lesson planning, or content review (Davis
and Lee, 2023; Fan et al., 2024; Roodsari and Ghanbari, 2024). While these systems show promise,
they often operate in isolation and lack integration
into broader instructional pipelines. Current applications often fall short in ensuring educational
rigor and alignment with pedagogical goals (Kasneci et al., 2023). Recent work continues to critique
AI applications in education for their limited pedagogical grounding and lack of integration with
established instructional frameworks (ZawackiRichter et al., 2024).
Instructional Design and Automation Instructional design frameworks such as ADDIE (Gagne
et al., 2005; Branch and Varank, 2009) emphasize
structured development across phases: Analyze,
Design, Develop, Implement, and Evaluate. These
frameworks offer a clear structure, but their realworld adoption is limited. Many instructors strug-

4088

gle to translate such models into practice due to
time constraints and lack of support (Bennett et al.,
2017). Others point to deeper institutional barriers,
including insufficient incentives and tensions with
professional identity (Brownell and Tanner, 2012).
While recent LLM-based tools have shown potential to automate isolated instructional tasks, they are
typically single-pass and operate without reference
to instructional design frameworks or cross-role
coordination. Our approach embeds the ADDIE
structure into a multi-agent LLM framework that
simulates collaboration among instructional roles
and supports pedagogically aligned material generation across the full course development pipeline.

3

Method: System Design and Workflow

To support collaborative instructional design, we
propose Instructional Agents, a multi-agent LLM
system that automates course content generation
through role-specialized collaboration. The system simulates common educational roles involved
in course development, including Teaching Faculty, Instructional Designer, Teaching Assistant,
Course Coordinator, and Program Chair. Among
these roles, the Teaching Faculty agent serves as the
primary authority and maintains continuous oversight throughout the entire workflow, while other
agents provide complementary support for structure, implementation, validation, and feedback. Together, these agents operate within a structured
workflow inspired by the ADDIE instructional design framework to produce a coherent and instructionally aligned course package, including learning
objectives, syllabi, assessments, slide content, and
slide scripts.
3.1 Workflow Overview
Figure 1 illustrates the overall end-to-end workflow
of the system. To clarify how the workflow operates in practice, we first summarize the full process
before describing individual components in detail.
The workflow consists of three sequential phases:
Analyze, Design, and Develop, corresponding to
the first three stages of the ADDIE framework.
In the Analyze phase, the Teaching Faculty agent
leads the formulation of instructional objectives
and instructional intent. The Course Coordinator
agent supports this process by providing courselevel context, constraints, and background information, such as student characteristics and resource
limitations. Together, these activities result in an

Instructional Foundation Report, which serves as a
shared grounding artifact for all subsequent phases.
In the Design phase, the Teaching Faculty agent
continues to guide pedagogical decisions, ensuring
alignment between objectives, content, and assessments. The Instructional Designer agent supports
this phase by structuring the syllabi, organizing
instructional flow, and refining assessment plans.
The outputs of this phase include structured syllabi,
key instructional points, and draft assessments that
define the course’s pedagogical plan.
In the Develop phase, the Teaching Assistant
agent generates concrete instructional materials,
including slides, slide scripts, and finalized assessments, under the guidance of the Teaching Faculty agent. The Program Chair agent then reviews
the generated materials from a broader programlevel perspective to provide validation and suggestions, and the Test Student agent supplies simulated
learner feedback to support iterative refinement.
The final outputs of this phase are refined instructional objectives, syllabi, slides, slide scripts, and
assessments, forming a cohesive and instructionally
aligned course package.
While the ADDIE framework formally includes
additional Implement and Evaluate phases, this
work focuses on the first three phases due to practical and ethical considerations, including the need
for human oversight before deploying AI-generated
instructional materials to real students.
3.2

Analyze Phase

The Analyze phase focuses on understanding the
instructional goals, learner profiles, and logistical
constraints. It consists of three subtasks:
Objectives Definition In this subtask, the Teaching Faculty and Instructional Designer collaborate
to define competency-aligned course objectives.
The Teaching Faculty agent initiates goal proposals
based on domain knowledge, while the Instructional Designer ensures alignment with accreditation standards and instructional best practices.
Audience Analysis In the Audience Analysis subtask, the Teaching Faculty agent works with the
Course Coordinator agent to build a learner profile
by analyzing student backgrounds, prior knowledge, and challenges. This helps shape prerequisites and instructional strategies.
Resource Assessment In this subtask, the Teaching Faculty agent assesses teaching needs, and the

4089

Instructional Designer evaluates institutional constraints (e.g., platform compatibility). Together,
they define feasible instructional strategies.

Slide & Assessment Generation Workflow
Develop: Materials Generation

Design: Slide Planning
Slide
Key Points

>

Text Draft

>

Final Slides

>

Slide Scripts

3.3 Design Phase
The Design phase organizes the course structure
and assessment strategy. Agents collaborate to create syllabi with weekly topics, outline instructional
methods, and align assessments with learning objectives. Feedback to support formative evaluation
is also planned in this phase.
Syllabus Design As shown in Figure 1, in the Syllabus Design subtask, the Teaching Faculty and Instructional Designer agents jointly develop course
syllabi, including weekly topics, readings, and assignments. This subtask uses the previously defined objectives and learner profile to structure the
course timeline. The output is syllabi that specify
content coverage, assessment milestones, and delivery modes, which can be used for subsequent
content development.
Slide Planning In this subtask, the Teaching Faculty and Instructional Designer agents co-develop
the instructional flow for each weekly topic. The
process begins with identifying key concepts and
logical sequences based on the previously defined
objectives and learner profile. The Teaching Faculty agent drafts initial slide content, including
conceptual explanations, technical examples, and
transitional narratives. The Instructional Designer
agent then refines this content by structuring it
for clarity, pedagogical flow, and visual coherence.
The result is a slide content plan that serves as the
foundation for material development in the subsequent phase. This process is visually summarized
in the instructional workflow diagram shown in Figure 2, which bridges the planning and generation
stages across the Design and Develop phases.
Assessment Planning During the Assessment
Planning stage, the Teaching Faculty and Instructional Designer agents collaboratively define assessment strategies that align with course objectives. They design a multi-stage capstone project
to replace traditional summative exams, incorporating deliverables such as a proposal, progress
report, and final submission. Additionally, they establish formative feedback mechanisms, including
peer review checkpoints, integrity guidelines, and
grading rubrics. These assessments are integrated
into the course timeline to ensure alignment with

Design: Assessment Planning
Assessment
Assessment Plan

>

Final Assessments

Figure 2: Workflow of slide and assessment generation from
key points and drafts to final slides, slide scripts, and assessments across the Design and Develop phases.

instructional goals and provide ongoing support for
student learning. The output informs material generation and provides guidance for classroom use by
Teaching Faculty.
3.4

Develop Phase

The Develop phase transforms the instructional
plans from the Design phase into complete,
classroom-ready materials. To ensure that the instructional outputs are pedagogically aligned, accurate, and usable, as shown in Figure 1, we design
three interconnected stages:
Materials Generation In this subtask, the Teaching Faculty, Instructional Designer, and Teaching
Assistant collaborate to generate all core instructional materials. For each chapter derived from
the syllabi, the agents produce final LaTeX-based
slides, slide scripts, and assessments.
The process begins by transforming slide planning outputs (i.e., key points and text drafts) into
final slides and scripts. The Teaching Faculty agent
expands the content with technical explanations
and examples, the Instructional Designer structures the materials for pedagogical flow, and the
Teaching Assistant formats them into LaTeX documents. Similarly, assessment plans from the Design
phase are converted into final assessments, including quizzes, milestones, and grading rubrics.
Once all content materials are finalized, the system performs a LaTeX compilation step to render
the materials into publishable PDF packages. This
integration process is handled by a dedicated LaTeX Compiler module, which ensures consistent
layout and formatting.
Validation The validation subtask involves expert review by the Teaching Faculty and Program
Chair agents. All generated materials, including
slides, slide scripts, and assessments, are reviewed
for pedagogical alignment, content accuracy, and
compliance with institutional expectations. The

4090

Program Chair agent provides suggestions and approval notes, which are incorporated by the Teaching Faculty or Instructional Designer agents before finalization. This ensures the materials meet
program-level quality standards. This step models how real instructors would revise and approve
materials before using them in the classroom. No
generated material is assumed ready for deployment without human oversight.
Pilot Testing To further evaluate usability, the
system performs a pilot testing stage involving simulated student agents. These test agents engage
with instructional materials under controlled scenarios. The Teaching Faculty, Instructional Designer, and Teaching Assistant agents monitor the
interactions and identify issues such as confusing
phrasing, misaligned pacing, or missing prerequisite knowledge. Feedback collected during this
stage informs final refinements before deployment.
3.5 Modes of Operation
Instructional Agents supports multiple modes of
operation, each designed to accommodate different
levels of human involvement and prior knowledge
integration. The system can operate in four different modes, each with a different level of human
input: Autonomous Mode (Auto), Catalog-Guided
Mode (Cat), Feedback-Guided Mode (Feed), and
Full Co-Pilot Mode (Pilot). These abbreviations
are used in figures, tables, and other space-limited
contexts for clarity.
Autonomous Mode In this mode, the system proceeds through all deliberations and content generation steps without human intervention beyond the
initial course name or topic input. Each agent executes its role, moving from one subtask to the next
upon completion. The agents autonomously generate learning objectives, syllabi, assessments, slides,
and slide scripts. This mode is fully automated
and suitable for baseline benchmarking or rapid
prototyping of course content.
Catalog-Guided Mode Under this mode, the
system incorporates pre-existing institutional or
instructor-provided data as Educator_Catalog to
guide the deliberations. For example, predefined
course structures, institutional policies, prior student feedback, and teaching constraints can be included in the Educator_Catalog and passed to
agents during initialization. These inputs inform
agents’ decisions, enabling the system to align out-

puts with existing curricula or departmental guidelines. This mode ensures continuity with institutional practices and reduces the risk of generating
content that conflicts with prior standards. A sample catalog is provided in Appendix C.
Feedback-Guided Mode This mode aims to enable retrospective correction and refinement of generated outputs. After a deliberation is completed,
a human reviewer can inspect the results and provide targeted suggestions for improvement. The
system supports rerunning individual deliberations
with the new suggestions appended to the original
context. This mode allows for iterative revision of
specific materials, such as modifying assessment
plans, without restarting the entire pipeline.
Full Co-Pilot Mode To simulate a collaborative
workflow between the human teaching faculty and
the agent system, in Full Co-Pilot Mode, the system pauses at the end of each subtask to solicit
user feedback before proceeding. The user can approve the current outputs, request modifications,
or provide guidance for the next steps. In addition to real-time feedback, this mode also incorporates structured preferences through the same
Educator_Catalog used in Catalog-Guided Mode.
These catalog entries allow the system to maintain
alignment with institutional policies and instructor
intent across multiple subtasks, such as emphasizing specific topics in the syllabi, adjusting slide
content focus, or altering assessment styles. By
combining catalog initialization and human-in-theloop feedback, Full Co-Pilot Mode closely mirrors
real-world curriculum development, where iterative human review and prior knowledge are both
integral to quality assurance.
3.5.1

Summary of Modes

These modes provide flexible control over the instructional design pipeline, ranging from fully autonomous execution to human-in-the-loop collaboration. Importantly, in all human-in-the-loop
modes, Teaching Faculty retain control over final approval, ensuring that AI-generated content
serves as a draft for human refinement. By enabling initialization from prior teaching artifacts,
post-generation feedback integration, and interactive human collaboration, Instructional Agents supports a wide range of content development scenarios across instructional contexts.

4091

Quality Score

5
4
3

Backend Models |

2
1

bjectives Syllab)i
Learning(LOO)
(SY

Cost

| Success Rate

gpt-4o
| 2.50/1M tokens |
gpt-4o-mini| 0.15/1M tokens |
o1-preview | 15.00/1M tokens |

ents
Asses(Asm
S)

l Slides
Fina(S
L)

98.88%
98.36%
97.78%

ts
ge Average
Slide(SSCcri) p Instructional Packa
)
(IP

Figure 3: (RQ1) Quality evaluation of generated instructional
materials across different model backends with their costs
Material
and success rates. This table reports the adapted QM-based rubric scores for course materials generated by Instructional Agents
using three LLM backends: gpt-4o, gpt-4o-mini, and o1-preview. The evaluation is on six instructional outputs Instructional
Agents generated: Learning Objectives (LO), Syllabi (SY), Assessments (AS), Final Slides (SL), Slide Scripts (SC), and the
overall Instructional Package (IP). Scores are averaged over five human evaluators for each of the five courses. Each cell
represents a score on a 1–5 Likert scale, where higher is better. gpt-4o-mini achieves a performance level and success rate
comparable to gpt-4o and o1-preview, while offering the lowest cost. Detailed numbers are provided in Appendix D.1.

4

Experiments

In this section, we present our experimental evaluation around three research questions:
• RQ1: How should we evaluate the quality of
AI-generated instructional materials? How do
human evaluations compare to LLM-based automated assessments?
• RQ2: How do different operational modes (Autonomous, Catalog-Guided, Feedback-Guided,
Full Co-Pilot) affect instructional quality and instructor workload?
• RQ3: What are the runtime and cost trade-offs
across different operational modes?
In this section, we additionally report ablations
on different agent roles as well as success rate
across different procedures. Further experimental
results, including the influence of additional backend model evaluations (e.g., LLaMA, Qwen) and
an ethics evaluation, are provided in Appendix D.
4.1 Experimental Settings
Model Backends We test the following model
backends for content generation: gpt-4o (OpenAI, 2024a), gpt-4o-mini (OpenAI, 2024b), o1preview (OpenAI, 2024c). To evaluate the framework, we apply Instructional Agents to five
university-level courses that vary in structure and
depth. The courses include Data Mining, Foundations of Machine Learning, Data Processing at
Scale, Introduction to Artificial Intelligence, and
Topics in Reinforcement Learning. Detailed hyperparameters are reported in Appendix A. We also
test open-source models and report their results
in Appendix D.2 and do not find that open-source
models show superior performance. Therefore, in

later parts of this paper, we primarily test using the
above three GPT models.
Evaluation Criteria We adapt the Quality Matters (QM) Higher Education Rubric, Seventh Edition (Quality Matters, 2023), a widely used framework for quality assurance in online and hybrid
course design, to evaluate instructional materials at
the component level. While the original QM Rubric
emphasizes holistic course structure, our version is
guided by domain experts in instructional design
and higher education and customizes selected QM
dimensions to assess six key outputs generated by
Instructional Agents: Learning Objectives (LO),
Syllabi (SY), Assessments (AS), Final Slides (SL),
Slide Scripts (SC), and the overall Instructional
Package (IP). Each output is evaluated using a set
of tailored metrics, such as clarity, alignment, and
variety, which are designed to reflect its specific
pedagogical role. Human evaluators rate each item
on a 5-point Likert scale based on the revision effort
required. The full scoring criteria, along with the
mapping from Quality Matters (QM) dimensions
to our adapted evaluation metrics, are provided in
Appendix B.
Evaluator We apply two kinds of evaluators:
(1) Human Reviewer. For each course, we recruit
five expert instructors to serve as human evaluators. These include faculty members and senior
PhD students with prior teaching experience. Each
evaluator rates the instructional package using six
adapted criteria described above. (2) Automated
Reviewer. In addition to human evaluation, we
employ different LLMs (gpt-4o, gpt-4o-mini, and
o1-preview) as automated reviewers to evaluate the
generated materials using a rubric-based prompt
aligned with the adapted QM-inspired metrics.

4092

gpt-4o
gpt-4o

gpt-4o-mini
gpt-4o-mini

o1-preview
o1-preview

(a)
(a) Comparison
Comparison of
of evaluation
evaluation scores
scores (Human
(Human reviewer
reviewer vs.
vs.Automated
Automated reviewer)
reviewer)

(b)
Automated LLM
scores
(b)
LLM reviewer
reviewerscores
scores
(b)Automated
Automated LLM
reviewer

(c)
scores
(c)Human
Humanreviewer
reviewer
(c)
Human
reviewerscores
scores

(a) Comparison of evaluation score distribution

Figure 4: Comparison of evaluation scores (Human reviewer vs. Automated reviewer). (a) The distribution of scores generated
by human reviewer and automated reviewer. (b) The scores of LLMs evaluating their own generated instructional materials.
Each cell shows the mean (standard deviation) over five courses. Scores are on a 1–5 scale, where higher is better. (c) The scores
of human reviewers evaluating instructional materials generated different LLMs. Human reviewers tend to have more diverse
evaluations while automated reviewers tend to give mediocre scores.

4.2

Evaluating Instructional Quality: Human
vs. LLM Reviewers (RQ1)

We begin by addressing foundational questions
about how to evaluate instructional content quality (RQ1), since this choice affects all subsequent
experiments on comparisons of models and operational modes. We analyze how different LLM
backends influence the quality of generated materials and examine the alignment between automated
LLM evaluations and human assessments. We report the following observations:
• Influence of Backend Model: Figure 3 presents
the evaluation results for six instructional materials and shows that all three backends produce
high-quality content, with gpt-4o-mini matching
the performance of gpt-4o and o1-preview while
offering the lowest cost. A Friedman test confirmed
no significant differences among the models (test
statistic Q = 0.473, p-value = 0.789), supporting our conclusion (Friedman, 1937). Given this
and the substantially lower computational cost and
inference time of gpt-4o-mini, we use it as the default backend model in the remainder of this paper.
Detailed statistics are provided in Appendix D.1.
• Human vs. LLM Evaluations: Figure 4 compares the distribution of overall evaluation scores
assigned by automated LLM reviewers and human
evaluators. LLMs consistently assign moderate
and tightly clustered scores (typically between 2.9
and 3.1) while human evaluators produce a broader
range of scores, demonstrating greater sensitivity to
instructional effectiveness. This discrepancy highlights the limited capacity of LLM-based evaluators
in distinguishing between higher and lower quality outputs (Hong et al., 2026). Therefore, in the
remainder of our experiments, we rely on human
assessments as the primary reference for instructional quality. We also conducted the automated
reviews across different LLMs, and the results are
consistent with Figure 4. Their detailed results can

be found in Appendix D.3.
4.3

Impact of Operational Modes (RQ2)

We examine how different operational modes in
Instructional Agents influence instructional quality
and human workload. The four operational modes
differ in how they balance automation with human
oversight. For each of the five courses, we generate
instructional materials under all four modes and
collect human ratings based on the adapted QM
rubric. In addition to quantitative scores, we also
collect open-ended qualitative feedback from evaluators, summarized in Appendix D.7. The results
are shown in Table 1, Figure 5, and Figure 6 . We
present our key findings as follows:
• Overall Comparison Across Modes: In Table 1 and Figure 5, Full Co-Pilot Mode consistently
achieves the highest quality, improving scores by
0.5 to 0.9 points over Autonomous Mode, especially in Learning Objectives (LO), Slide Scripts
(SC), and overall Instructional Packages (IP).
Feedback-Guided Mode strikes a good balance between quality and efficiency, with stronger performance on content-rich components like Assessments (AS) and Slides (SL). In contrast, CatalogGuided Mode outperforms Feedback-Guided Mode
in components related to structure and administrative clarity, including Learning Objectives (LO)
and syllabi (SY). This can be attributed to the use
of pre-loaded templates and institutional guidelines,
which support consistency but may limit depth and
adaptability. These results highlight that human involvement improves quality, and each mode offers
trade-offs between refinement and effort.
• Material-level Trends: As shown in Figure 6,
all materials achieve average scores above 3.0, indicating generally acceptable quality across modes.
Learning Objectives (LO) and Slides (SL) receive
the highest ratings on average, while Slide Scripts
(SC) tend to score slightly lower. Notably, Slides
(SL) also show lower variance across modes, sug-

4093

Table 1: (RQ2) Human evaluation on instructional materials across operational modes. This table reports human ratings for
course materials generated by Instructional Agents under four operational modes: Autonomous Mode (Auto), Catalog-Guided
Mode (Cat), Feedback-Guided Mode (Feed), and Full Co-Pilot Mode (Pilot). Six key outputs generated by Instructional Agents
are evaluated: Learning Objectives (LO), syllabi (SY), Assessments (AS), Final Slides (SL), Slide Scripts (SC), and the overall
Instructional Package (IP). Each cell presents the mean rating averaged over five expert instructors per course. Scores are on a
1–5 scale, where the higher the better (Ratings reflect estimated instructor revision effort before classroom deployment). With
greater human involvement, the material quality is better, and Full Co-Pilot mode consistently achieves the best performance.
Course 1

Course 2

Course 3

Course 4

Course 5

Auto

Cat

Feed

Co-Pilot

Auto

Cat

Feed

Co-Pilot

Auto

Cat

Feed

Co-Pilot

Auto

Cat

Feed

Co-Pilot

Auto

Cat

Feed

Co-Pilot

LO
SY
AS
SL
SC
IP

3.73
3.10
3.10
2.87
3.20
3.33

4.13
3.65
3.45
3.20
3.47
3.87

3.87
3.40
3.55
3.27
3.67
3.87

4.40
4.05
3.70
3.80
3.80
4.13

3.87
2.90
2.95
3.00
3.67
3.07

4.07
3.85
3.45
3.13
3.73
3.40

4.20
3.60
3.45
3.40
4.13
3.87

4.27
4.05
3.70
3.67
4.07
3.80

3.42
2.81
2.81
3.00
3.17
2.75

4.17
3.44
3.31
3.17
3.58
3.50

3.75
3.25
3.31
3.25
3.42
3.08

4.17
3.62
3.38
3.42
3.83
3.50

3.17
2.94
2.38
2.58
3.08
2.25

3.75
3.38
3.31
3.42
3.25
3.58

3.33
2.75
2.88
3.25
3.25
3.17

3.75
3.75
3.31
3.33
3.33
3.83

3.58
2.94
2.31
2.50
3.25
2.50

3.92
3.19
3.12
3.08
3.25
3.58

3.75
3.56
3.00
3.42
3.42
3.50

4.08
3.56
3.31
3.33
3.50
3.67

Avg

3.22

3.63

3.60

3.98

3.24

3.61

3.78

3.93

2.99

3.53

3.34

3.65

2.73

3.45

3.10

3.55

2.85

3.36

3.44

3.58

Assessments
(AS)

slightly while requiring 10–30 minutes of teaching faculty effort. Full Co-Pilot Mode achieves
the highest quality but requires the highest computational and human cost. These results highlight
trade-offs between automation and quality: humanin-the-loop modes offer better instructional design
outputs at the expense of time and effort.

Syllabi
(SY)
4.0
3.0
2.0

Final
Slides
(SL)

1.0

Slide Scripts
(SC)
Autonomous
Catalog-Guided

Learning
Objectives
(LO)

Instructional Package
(IP)
Feedback-Guided
Full Co-Pilot

Quality Score

Figure 5: Radar chart analysis on the performance of generating materials at different modes. Each axis represents scores
evaluated by human reviewers on one kind of material. Full
Co-Pilot mode consistently performs the best.
4.5
4
3.5
3
2.5
2
1.5
1

Data Distribution
Mean Value

Table 2: (RQ3) Runtime and cost analysis across operational modes. This table presents the runtime, token usage,
human effort, and estimated compute cost for Instructional
Agents using gpt-4o-mini across four operational modes. The
values are averaged over five courses. Inference time and
token usage reflect resource consumption, while human time
reflects instructor involvement for review or co-pilot interaction. Lower values are better for time, token usage, and cost.
Metric

Auto

Cat

Feedback

Co-Pilot

Token Usage (millions)
Inference Time (hrs)
Human Time (mins)
Compute Cost (USD)

1.46
2.23
0
0.22

2.05
3.73
10-15
0.31

1.93
2.51
20-30
0.29

2.42
4.73
30-45
0.36

4.5

Overall Mean (3.43)

s (SL)
s (AS)
s (SC)
ctives Y)
ckage
g Obje yllabi (SAssessment Final Slide Slide Script tructional) Pa
Learnin (LO) S
(IP
Ins

Figure 6: Rating distribution over instructional material types.

gesting that they are more robust to changes in
workflow configuration.
4.4 Runtime and Cost Analysis (RQ3)
We evaluate the runtime efficiency and computational cost of Instructional Agents under different
operational modes. The evaluation tracks four key
metrics: Token Usage, Inference Time, Human
Time, and Compute Cost. Human Time reflects
instructor involvement for review or co-pilot interaction. All values are averaged across five courses
using the gpt-4o-mini backend. Table 2 summarizes the results. Autonomous Mode is the most efficient with lower-quality outputs. Catalog-Guided
and Feedback-Guided Modes increase token usage

Ablation Studies on Different Agents

To assess the contribution of each agent to the overall instructional design pipeline, we conduct detailed ablation studies by systematically removing
individual roles from the multi-agent framework.
As shown in Table 3, the single-agent baseline performs the worst overall (Avg = 2.33), highlighting
the benefit of role specialization. Removing the
Teaching Faculty notably decreases syllabi (SY)
and slide (SL) quality, since this agent provides domain knowledge and contextual grounding during
the early stages of Analyze and Design. Eliminating the Teaching Assistant results in a moderate
quality drop in structural components such as slides
and scripts, reflecting this agent’s critical role in
formatting and LaTeX consistency. The absence of
the Instructional Designer causes a sharp decline
in learning objectives (LO) and syllabi (SY) clarity,
as this agent ensures pedagogical alignment and
instructional structure across materials.

4094

Together, these results demonstrate that role specialization is not merely an implementation choice,
but a necessary design component for maintaining
instructional coherence and quality across artifacts.
Table 3: Ablation study on the role of agents.
Method

LO

SY

AS

SL

SC

IP

Avg

Single Agent (GPT-4o-mini)
w/o Teaching Faculty
w/o Teaching Assistant
w/o Instructional Designer
Ours (Full, Auto)
Ours (Full, Co-Pilot)

3.48
3.53
3.57
3.02
3.55
4.13

2.44
2.12
2.63
2.14
2.93
3.80

2.06
2.83
2.67
2.75
2.71
3.48

1.23
1.67
1.83
2.85
2.79
3.51

2.54
3.83
2.87
2.85
3.27
3.71

2.24
2.50
3.86
3.18
2.78
3.79

2.33
2.75
2.91
2.80
3.01
3.74

4.6 Success Rate Analysis
Detailed numbers on the distribution of success
rates across different procedure can be found in
Table 4. Overall, gpt-4o demonstrates better reliability compared to gpt-4o-mini and o1-preview.
Model
gpt-4o
gpt-4o-mini
o1-preview

Learning Objectives
(LO)

Syllabi
(SY)

Final Slides
(SL)

Slide Scripts
(SC)

Assessments
(AS)

Avg

100%
100%
100%

100%
100%
100%

94.4%
91.8%
88.9%

100%
100%
100%

100%
100%
100%

98.88%
98.36%
97.78%

Table 4: Success rates (%) of different models across various
instructional design stages. Failures primarily stem from the
generation of a small number of invalid or overly complex
LaTeX codes, which lead to pdflatex compilation errors
(although compilation often succeeds in Overleaf).

5

Discussion

In this section, we reflect the implications of Instructional Agents. For extended analysis, see Appendix E. Instructional Agents demonstrates that
high-quality instructional materials can be generated with minimal human input and further enhanced through human-in-the-loop modes. Full
Co-Pilot yields the best quality but requires more
time and cost, while gpt-4o-mini is the most efficient backend. These results support the system’s
scalability in resource-constrained settings.
Ethical considerations are central to deployment. While LLMs may introduce bias, human review in Feedback-Guided and Full Co-Pilot modes
helps ensure pedagogical soundness. Instructional
Agents is designed to support, not replace, Teaching Faculty. Future work should address accessibility, originality verification, and inclusive content
design. While it streamlines drafting, final content
decisions rely on faculty judgment. Our evaluation
quantifies the time Teaching Faculty are likely to
save per component.

6

Conclusion

This paper presents Instructional Agents, a multiagent LLM framework for automating the genera-

tion of instructional materials—syllabi, slides, slide
scripts, and assessments—through simulated collaboration among educational roles. Evaluations
across five courses show that while autonomous
workflows reduce time and cost, incorporating human input, especially in Full Co-Pilot mode, improves quality and usability. Catalog-Guided and
Feedback-Guided modes offer additional benefits
in structural consistency and content depth.
Instructional Agents lowers the barrier to producing materials and enables scalable curriculum
development in resource-constrained institutions.
Reducing reliance on specialized support promotes
broader access to instructional design. This is particularly impactful for community colleges, international programs, and underserved populations,
where instructional capacity is limited. Through
this work, we aim to support more inclusive, equitable, and globally accessible education systems.

7

Limitations

While our work demonstrates the potential of multiagent LLM systems for automating instructional
material generation, several limitations remain.
First, the current framework primarily focuses on
the Analyze, Design, and Develop phases of the
ADDIE model, without fully addressing Implementation and Evaluation, which require real-world
classroom deployment and longitudinal assessment.
Second, the current system has limited support for
rich visual and interactive elements, which are important for modern pedagogy. Third, we do not
treat bias analysis as a primary evaluation objective in this work. Although all generated materials
are subject to faculty oversight, we only conduct
an auxiliary bias evaluation using CEAT in Appendix D.5. Finally, the current system incorporates human feedback primarily through regeneration, rather than enabling fine-grained, targeted
editing of specific content, which we leave for future work.

8

Acknowledgments

The work was partially supported by NSF award
#2442477. We thank Amazon Research Awards,
Cisco Research Awards, Google, and OpenAI for
providing us with API credits. The authors acknowledge Research Computing at Arizona State
University for providing computing resources. The
views and conclusions in this paper should not be
interpreted as representing any funding agencies.

4095

References
Maria Ijaz Baig and Elaheh Yadegaridehkordi. 2024.
Chatgpt in the higher education: A systematic literature review and research challenges. International
Journal of Educational Research, 127:102411.
Sue Bennett, Shirley Agostinho, and Lori Lockyer. 2017.
The process of designing for learning: Understanding university teachers’ design work. Educational
Technology Research and Development, 65:125–145.
John Biggs. 1996. Enhancing teaching through constructive alignment. Higher education, 32(3):347–
364.
John Biggs, Catherine Tang, and Gregor Kennedy.
2022. Teaching for quality learning at university
5e. McGraw-hill education (UK).
Robert Maribe Branch and İlhan Varank. 2009. Instructional design: The ADDIE approach, volume 722.
Springer.
Sara E Brownell and Kimberly D Tanner. 2012. Barriers to faculty pedagogical change: Lack of training,
time, incentives, and. . . tensions with professional
identity? CBE—Life Sciences Education, 11(4):339–
346.
Zhendong Chu, Shen Wang, Jian Xie, Tinghui Zhu,
Yibo Yan, Jinheng Ye, Aoxiao Zhong, Xuming Hu,
Jing Liang, Philip S Yu, et al. 2025. Llm agents
for education: Advances and applications. arXiv
preprint arXiv:2503.11733.
Robert O Davis and Yong Jik Lee. 2023. Prompt: Chatgpt, create my course, please! Education Sciences,
14(1):24.
Haoxiang Fan, Guanzheng Chen, Xingbo Wang, and
Zhenhui Peng. 2024. Lessonplanner: Assisting
novice teachers to prepare pedagogy-driven lesson
plans with large language models. In Proceedings of
the 37th Annual ACM Symposium on User Interface
Software and Technology, pages 1–20.
Milton Friedman. 1937. The use of ranks to avoid the
assumption of normality implicit in the analysis of
variance. Journal of the American Statistical Association, 32(200):675–701.
Robert M Gagne, Walter W Wager, Katharine C Golas,
John M Keller, and James D Russell. 2005. Principles of instructional design.
Mihajla Gavin and Susan McGrath-Champ. 2024.
Teacher workload and the organisation of work: a
research agenda for a post-pandemic future. Labour
and Industry, 34(1):88–99.
Zhanxin Hao, Fei Qin, Jianxiao Jiang, Jie Cao, Jifan
Yu, Zhiyuan Liu, and Yu Zhang. 2025. Ai as learning partners: Students’ interactions and perceptions
in a simulated classroom with multiple llm-powered
agents. In Proceedings of the 19th International
Conference of the Learning Sciences-ICLS 2025, pp.

1789-1793. International Society of the Learning Sciences.
Yihan Hong, Huaiyuan Yao, Bolin Shen, Wanpeng Xu,
Hua Wei, and Yushun Dong. 2026. Rulers: Locked
rubrics and evidence-anchored scoring for robust llm
evaluation. arXiv preprint arXiv:2601.08654.
Bihao Hu, Jiayi Zhu, Yiying Pei, and Xiaoqing Gu. 2025.
Exploring the potential of llm to enhance teaching
plans through teaching simulation. npj Science of
Learning, 10(1):7.
Enkelejda Kasneci, Kathrin Seßler, Stefan Küchemann,
Maria Bannert, Daryna Dementieva, Frank Fischer,
Urs Gasser, Georg Groh, Stephan Günnemann, Eyke
Hüllermeier, et al. 2023. Chatgpt for good? on opportunities and challenges of large language models
for education. Learning and individual differences,
103:102274.
Pingchuan Ma, Tsun-Hsuan Wang, Minghao Guo,
Zhiqing Sun, Joshua B Tenenbaum, Daniela Rus,
Chuang Gan, and Wojciech Matusik. 2024. Llm and
simulation as bilevel optimizers: A new paradigm to
advance physical scientific discovery. arXiv preprint
arXiv:2405.09783.
Eileen G Merritt. 2016. Time for teacher learning, planning critical for school reform. Phi delta kappan,
98(4):31–36.
OpenAI. 2024a. Gpt-4o model card. https://
platform.openai.com/docs/models/gpt-4o.
OpenAI. 2024b.
Introducing gpt-4o-mini.
https://platform.openai.com/docs/models/
gpt-4o-mini. Accessed: 2025-08-01.
OpenAI. 2024c.
Introducing o1-preview.
https://platform.openai.com/docs/models/
o1-preview. Accessed: 2025-08-01.
Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy Liang, and Michael S Bernstein. 2023. Generative agents: Interactive simulacra
of human behavior. In Proceedings of the 36th annual acm symposium on user interface software and
technology, pages 1–22.
Jingyang Peng, Wenyuan Shen, Jiarui Rao, and Jionghao Lin. 2025. Automated bias assessment in aigenerated educational content using ceat framework.
Preprint, arXiv:2505.12718.
Quality Matters. 2023.
Higher Education
Rubric, Seventh Edition. MarylandOnline, Inc.
Available
at
https://www.qualitymatters.
org/sites/default/files/PDFs/
StandardsfromtheQMHigherEducationRubric.
pdf.
Sumedh Rasal and EJ Hauer. 2024. Navigating complexity: Orchestrated problem solving with multiagent llms. arXiv preprint arXiv:2402.16713.

4096

Sam Toorchi Roodsari and Shahram Azizi Ghanbari.
2024. Instructional design and ai in learning environments: Developing competency-validated adaptive
feedback for higher education. In London International Conference On Education.

Lina Zhao, Jiaxing Bai, Zihao Bian, Qingyue Chen,
Yafang Li, Guangbo Li, Min He, Huaiyuan Yao, and
Zongjiu Zhang. 2025. Autonomous multi-modal llm
agents for treatment planning in focused ultrasound
ablation surgery. Preprint, arXiv:2505.21418.

Samuel Schmidgall, Yusheng Su, Ze Wang, Ximeng
Sun, Jialian Wu, Xiaodong Yu, Jiang Liu, Zicheng
Liu, and Emad Barsoum. 2025. Agent laboratory:
Using llm agents as research assistants. https://
arxiv.org/abs/2501.04227.
Shen Wang, Tianlong Xu, Hang Li, Chaoli Zhang,
Joleen Liang, Jiliang Tang, Philip S. Yu, and Qingsong Wen. 2024. Large language models for education: A survey and outlook. ArXiv, abs/2403.18105.
Xiaoyan Wang, Yelin Su, Stephen Cheung, Eva Wong,
and Theresa Kwong. 2013. An exploration of biggs’
constructive alignment in course design and its impact on students’ learning approaches. Assessment &
Evaluation in Higher Education, 38(4):477–491.
Yaoxiang Wang, Zhiyong Wu, Junfeng Yao, and Jinsong
Su. 2025. Tdag: A multi-agent framework based on
dynamic task decomposition and agent generation.
Neural Networks, page 107200.
Ke Yang, Yao Liu, Sapana Chaudhary, Rasool Fakoor,
Pratik Chaudhari, George Karypis, and Huzefa Rangwala. 2024. Agentoccam: A simple yet strong
baseline for llm-based web agents. arXiv preprint
arXiv:2410.13825.
Huaiyuan Yao, Longchao Da, Vishnu Nandam, Justin
Turnau, Zhiwei Liu, Linsey Pang, and Hua Wei.
2025a. Comal: Collaborative multi-agent large language models for mixed-autonomy traffic. In Proceedings of the 2025 SIAM International Conference
on Data Mining (SDM), pages 409–418. SIAM.
Huaiyuan Yao, Pengfei Li, Bu Jin, Yupeng Zheng,
An Liu, Lisen Mu, Qing Su, Qian Zhang, Yilun Chen,
and Peng Li. 2025b. Lilodriver: A lifelong learning framework for closed-loop motion planning in
long-tail autonomous driving scenarios. Preprint,
arXiv:2505.17209.
Olaf Zawacki-Richter, John YH Bai, Kyungmee Lee,
Patricia J Slagter van Tryon, and Paul Prinsloo. 2024.
New advances in artificial intelligence applications
in higher education? International Journal of Educational Technology in Higher Education, 21(1):32.
Xiaoming Zhai. 2023. Chatgpt for next generation science learning. XRDS: Crossroads, The ACM Magazine for Students, 29(3):42–46.
Zheyuan Zhang, Daniel Zhang-Li, Jifan Yu, Linlu Gong,
Jinchang Zhou, Zhanxin Hao, Jianxiao Jiang, Jie
Cao, Huiqin Liu, Zhiyuan Liu, et al. 2024. Simulating classroom education with llm-empowered agents.
arXiv preprint arXiv:2406.19226.

4097

A

Hyperparameters

Table B.1 shows the mapping between each evaluation metric and the original QM standard catTable A.1 summarizes the key hyperparameters
egories. The rubric is customized for each outadopted in our system of Instructional Agents. The
put type to reflect its instructional function and
hyperparameters are grouped into two categories: expected pedagogical alignment.
(i) Foundation Model, which controls the generThe evaluation dimensions were designed in colative behavior of the underlying large language
laboration with domain experts in instructional demodel (e.g., sampling temperature and token penalsign and higher education. The expert helped select
ties), and (ii) Application, which specifies taskand adapt relevant elements from the official QM
level settings such as the number of deliberation
rubric, ensuring that each metric is pedagogically
rounds and the default length of generated slides.
grounded and practical for evaluating generated
These parameters were chosen empirically based
content. For each output type (e.g., syllabi, assesson preliminary experiments to balance generation
ments), we identified key quality indicators that are
diversity, reliabi