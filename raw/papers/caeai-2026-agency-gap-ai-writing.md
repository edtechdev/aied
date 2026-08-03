---
source_url: https://doi.org/10.1016/j.caeai.2026.100655
ingested: 2026-08-03
sha256: 641393849fa6134720887baa8b9707b7bc46eb3bb317e08215022ed4ffe04df9
---
# The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning

Yueqiao Jin, Kaixun Yang, Roberto Martinez-Maldonado, Dragan Gašević & Lixiang Yan (Monash University; Tsinghua University; University of Hong Kong)

Computers and Education: Artificial Intelligence (Elsevier), Article in Press, accepted 29 Jul 2026. Open Access (CC BY 4.0). doi:10.1016/j.caeai.2026.100655

Generative AI is becoming part of academic writing, but its educational value depends on how
control is shared between learner and system. This study examined an agency gap: performance
differences that may arise when AI agent initiative is misaligned with learners’ generative AI
literacy. Seventy-nine medical and nursing students completed two multimodal analytical writing
tasks using healthcare simulation data visualisations. They were randomly assigned to a reactive
agent that responded only when prompted or a proactive agent that provided sequenced questions
and feedback. Generative AI literacy was measured using the validated 20-item Generative AI
Literacy Assessment Test. Epistemic network analysis showed that proactive interaction created
stronger links among conceptual reasoning, evidence use, and constructive engagement, whereas
reactive interaction was more factual and procedural. Ordinal regression showed that generative
AI literacy predicted immediate independent writing performance after support was removed,
particularly for visual data integration, critical thinking, and overall quality. Condition-specific
mediation estimates showed a literacy–performance association in the reactive condition but not
in the proactive condition; however, the indirect effects and literacy-by-design interactions were
not significant. This pattern is consistent with smaller literacy-related performance differences
under proactive scaffolding, but it does not establish a compensatory causal effect. Learner
reflections indicated that effective AI writing support requires contextual feedback, dialogic
scaffolding, and calibration of initiative to learner needs and task complexity. These findings
position interaction design as a potential mechanism for supporting equitable and agencysupportive educational AI agents.

1. Introduction
Generative artificial intelligence (GenAI) is rapidly transforming how students learn, create, and communicate in
higher education. Tools such as ChatGPT and Gemini now act as conversational collaborators capable of generating
text, interpreting visuals, and providing feedback across academic disciplines (Kim, Yu, Detrick and Li, 2025; Nguyen,
Hong, Dang and Huang, 2024; Belkina, Daniel, Nikolic, Haque, Lyden, Neal, Grundy and Hassan, 2025). This
development has shifted the focus of educational technology research from algorithmic performance to the quality
of human-AI interaction, how learners engage with, respond to, and learn from AI agents (Akpan, Kobara, Owolabi,
Akpan and Offodile, 2024; Bozkurt, 2023; Song, Huang, Zheng, Fan and Liu, 2025). These interactions are not neutral:
they influence students’ motivation, self-efficacy, and agency in ways that can either extend or constrain meaningful
learning (Bozkurt, 2024; Wu, Li and Gwendoline Quek, 2025; Pan, Lai and Guo, 2025). In academic writing, a
cornerstone of higher education, GenAI has introduced new opportunities for scaffolding reasoning and expression,
yet it also raises a central question: do such tools cultivate independent writing competence, or do they risk creating
dependency on AI-generated guidance? (Zhai, Wibowo and Li, 2024; Yang, Raković, Liang, Yan, Zeng, Fan, Gašević
and Chen, 2025; Wang, 2025)
A key determinant of these outcomes lies in the interaction design. AI agents can be configured as reactive,
responding only when prompted, or proactive, taking the initiative to scaffold understanding through questions
and feedback (Park, O’Brien, Cai, Morris, Liang and Bernstein, 2023; Lee, Gero, Chung, Shum, Raheja, Shen,
Venugopalan, Wambsganss, Zhou, Alghamdi et al., 2024). Reactive designs foreground student autonomy but
require prompting skill and metacognitive awareness, while proactive designs reduce cognitive demand by steering
engagement, yet may over-structure learning if applied too rigidly (Yan, Zhao, Echeverria, Jin, Alfredo, Li, Gaševi’c
and Martinez-Maldonado, 2024b; Bai, Lo and Yang, 2024; Yan, Martinez-Maldonado, Jin, Echeverria, Milesi, Fan,
Zhao, Alfredo, Li and Gašević, 2025). Research on conversational support in educational technology indicates that
the nature of interaction design can shape learner engagement, agency, and feedback uptake in both positive and

The Agency Gap in AI-Supported Writing

unintended ways (Oertel, Castellano, Chetouani, Nasir, Obaid, Pelachaud and Peters, 2020; Looi and Jia, 2025; An,
Zhang, Guo, Lu, Zhang and Cai, 2025). Despite the growing integration of AI agents into higher education, empirical
evidence remains scarce regarding how these different interaction designs influence students’ reasoning, feedback
use, and learning transfer, particularly in multimodal academic writing, where visual interpretation and synthesis are
central to meaning-making (Ye, Hao, Hou, Wang, Xiao, Luo and Zeng, 2024; Fernandez-Nieto, Martinez-Maldonado,
Echeverria, Kitto, Gašević and Buckingham Shum, 2024; Milesi and Martinez-Maldonado, 2024).
Beyond AI agent interaction design, the learner’s own GenAI literacy, knowledge of how generative agents
function, skill in prompting and evaluating outputs, and awareness of ethical and contextual limitations, plays a
decisive role in determining the success of human-AI collaboration (Jin, Martinez-Maldonado, Gašević and Yan, 2024;
Annapureddy, Fornaroli and Gatica-Perez, 2024; Bozkurt, 2024). Recent frameworks conceptualise GenAI literacy as
a multidimensional construct encompassing technical understanding, evaluative judgment, and critical awareness of
the social implications of AI tools (Stolpe and Hallström, 2024; Ng, Leung, Chu and Qiao, 2021; Celik, 2023). Students
with higher GenAI literacy often use AI strategically to enhance conceptual understanding, sustain learning outcomes,
and transfer knowledge beyond the mediated environment (Fan, Tang, Le, Shen, Tan, Zhao, Shen, Li and Gašević, 2025;
Yang et al., 2025; Wu et al., 2025). Conversely, those with lower literacy may struggle to engage effectively without
continuous scaffolding and may be more susceptible to overreliance or superficial engagement with AI-generated
outputs (Stadler, Bannert and Sailer, 2024; Zhai et al., 2024; Abbas, Jam and Khan, 2024).
This study addresses these gaps by examining how interaction design (reactive vs. proactive) and GenAI literacy
jointly shape multimodal analytical writing. We use the term agency gap as a relational conceptualisation of a mismatch
between the initiative demanded by an AI agent (e.g., designed to be reactive or proactive) and the learner’s capacity
to initiate, monitor, evaluate, and internalise AI-supported reasoning. The concept therefore concerns the alignment of
learner capability and AI agent interaction design rather than an individual deficit or a fixed property of either party. By
analysing student–AI dialogue, writing performance, and reflective accounts, the study examines observable process
and outcome patterns that are consistent with this mismatch (Chi and Wylie, 2014; Fan et al., 2025; Xie, Wu and
Xie, 2024). The study’s primary theoretical contribution is to identify the distribution of initiative as a design-level
boundary condition, specifying when and for whom AI interaction designs may support or constrain learner agency. It
connects three levels that are often studied separately: AI agent initiative, learner GenAI literacy, and the organisation
of epistemic work during and immediately after AI-supported writing. This framing advances prior work by asking not
only whether AI support improves an outcome, but also for whom a particular initiative structure creates opportunities
to exercise agency, engage in reasoning, and perform independently once support is removed.

2. Background
2.1. Human-AI Interaction in Academic Writing
Academic writing is a high-level cognitive activity that requires students to synthesise ideas, interpret evidence,
and construct coherent arguments. It demands self-regulation, reflection, and the capacity to translate conceptual
understanding into structured expression (Lea and Street, 2006; Wingate, 2012; Kuhn, 2005). Within higher education,
writing is not only a means of assessment but also a process through which disciplinary knowledge is built,
negotiated, and communicated (Swales and Feak, 1994; Paltridge, 2004; Hyland, 2021). Students must navigate
between abstract reasoning and concrete representation, often integrating multimodal information, such as data charts,
network diagrams, or visual analytics, into their textual arguments (Jewitt, 2006; Fernandez-Nieto, Echeverria, Shum,
Mangaroska, Kitto, Palominos, Axisa and Martinez-Maldonado, 2021; Ye et al., 2024). Mastery of such multimodal
analytical writing represents a synthesis of visual literacy, critical thinking, and rhetorical awareness (Felten, 2008;
Facione, 2000; Arneson and Offerdahl, 2018).
The emergence of GenAI has reshaped this process in both practice and pedagogy. AI-driven writing agents now
act as dynamic collaborators that can analyse visuals, generate textual summaries, and scaffold students’ reasoning
through conversational interaction (Lee, Liang and Yang, 2022; Nguyen et al., 2024; Kim et al., 2025). Rather than
functioning as static tools, these AI agents mediate cognitive and linguistic processes by offering feedback, language
models, and adaptive prompts that resemble elements of peer review and mentoring (Lee et al., 2024, 2022; Cardon,
Fleischmann, Aritz, Logemann and Heidewald, 2023). This shift has prompted renewed attention to the interaction
process, how students communicate with AI agents, regulate their thought processes through dialogue, and integrate
generated content into authentic writing tasks (Yang et al., 2025; Shibani, Rajalakshmi, Mattins, Selvaraj and Knight,
2023; Akpan et al., 2024).

The Agency Gap in AI-Supported Writing

Research on human-AI collaboration in educational settings suggests that effective learning derives less from model
accuracy than from the quality of engagement achieved during interaction (Yang, Cheng, Zhao, Raković, Swiecki,
Gašević and Chen, 2024; Wu et al., 2025; Fan et al., 2025). Students who iteratively prompt, critique, and refine
AI-generated outputs often demonstrate more metacognitive awareness and deeper reasoning than those who adopt
AI responses uncritically (Yan, 2023; Zhai et al., 2024; Yang et al., 2025). This aligns with evidence from studies
of human-AI agent interaction showing that active participation and reflection mediate the benefits of intelligent
feedback agents (Oertel et al., 2020; Bai et al., 2024; Pan et al., 2025). However, most existing research still privileges
surface metrics, such as perceived writing quality, productivity, or satisfaction, while neglecting the underlying sociocognitive mechanisms that drive effective co-creation between humans and AI agents (Zhai et al., 2024; Jin, Yang,
Yan, Echeverria, Zhao, Alfredo, Milesi, Fan, Li, Gašević and Martinez-Maldonado, 2025; Li, Sha, Yan, Lin, Raković,
Galbraith, Lyons, Gašević and Chen, 2023).
Despite this growing body of work, substantial gaps remain regarding how specific AI interaction designs influence
learning dynamics. In particular, few empirical studies have compared the consequences of reactive versus proactive AI
agent designs for students’ reasoning, metacognition, and sense of authorship (Yan et al., 2024b; Park et al., 2023; Hou,
Mettille, Man, Li, Zastudil and MacNeil, 2024). As the boundaries between learner, tool, and feedback source continue
to blur, understanding how interaction design shapes the depth of reasoning, self-regulation, and long-term knowledge
transfer becomes critical for developing evidence-based frameworks for AI-assisted writing in higher education (Yan
et al., 2025; Ng et al., 2021; Belkina et al., 2025). Accordingly, the present study shifts the unit of explanation from
the quality of an AI output to the organisation of epistemic processes within the interaction: who initiates inquiry, who
monitors progress, and how observations are connected to concepts and evidence.

2.2. Reactive and Proactive AI Interaction Designs
In the context of this paper, the concept of interaction design refers to how the initiative, timing, and depth of
AI responses are structured to support the learner. Regarding AI-assisted writing, two contrasting paradigms can be
identified: reactive and proactive interaction designs (Jin et al., 2025). These modes differ not only in conversational
dynamics but also in how they distribute cognitive responsibility and agency between the learner and the AI agent
(Park et al., 2023; Lee et al., 2024; Yan et al., 2024b).
Reactive AI agents are designed to adopt a low-initiative stance: they wait for the learner’s input and respond
only when prompted. This design positions the student as the principal driver of interaction, encouraging autonomy
and active regulation of the learning process (Ait Baha, El Hajji, Es-Saady and Fadili, 2023; Song et al., 2025; Wu
et al., 2025). Empirical research suggests that reactive agents can foster deeper engagement and critical reflection
when learners demonstrate strong metacognitive awareness and the ability to formulate purposeful prompts (Nguyen
et al., 2024; Yang et al., 2025; Fan et al., 2025). They promote ownership of learning by requiring students to define
rhetorical goals, articulate uncertainties, and assess the adequacy of AI-generated responses. However, this approach
presupposes a certain level of GenAI literacy and confidence in navigating conversational parameters. Learners with
limited prompt literacy or lower technological self-efficacy may struggle to elicit meaningful feedback, resulting
in surface-level revisions or unproductive cognitive load (Ng, Tan and Leung, 2024; Bozkurt, 2024; Annapureddy
et al., 2024). Consequently, while reactive AI agents can strengthen self-direction among experienced users, they
risk amplifying existing inequities by privileging those already equipped with advanced digital and metacognitive
competencies (Jin et al., 2024; Celik, 2023; Belkina et al., 2025).
Proactive AI agents, by contrast, are designed to draw on principles of guided scaffolding and formative
assessment to take a more directive role in supporting the learner’s cognitive and linguistic process. Grounded in
Vygotskian theories of mediated learning and the zone of proximal development (Vygotsky and Cole, 1978; Gibbons,
2002), proactive AI agents initiate questions, propose directions, and strategically sequence tasks to sustain learner
engagement. This approach mirrors tutor-led feedback cycles that diagnose gaps, prompt reflection, and model expert
reasoning without completely removing the learner’s agency (Hattie and Timperley, 2007; Pan et al., 2025; Bai et al.,
2024). Empirical studies show that proactive AI scaffolding can improve comprehension of complex materials, sustain
self-regulated learning, and enhance reasoning depth during ill-structured or analytical writing tasks (Yan et al., 2025;
Looi and Jia, 2025; Hou et al., 2024). Through adaptive dialogue and timely intervention, proactive designs help reduce
cognitive load and maintain motivation, particularly for novices or students who encounter conceptual uncertainty (Lyu,
Wang, Chung, Sun and Zhang, 2024; Akpan et al., 2024; An et al., 2025).

The Agency Gap in AI-Supported Writing

Nevertheless, proactive designs carry notable trade-offs. When the AI’s feedback becomes overly prescriptive,
it may inadvertently constrain exploration, diminish the learner’s agency, and encourage overreliance on machinegenerated direction (Stadler et al., 2024; Zhai et al., 2024; Wu et al., 2025). Evidence from studies on scaffolding
and feedback also indicates that too much structure can restrict students’ capacity for independent reasoning and limit
the desirable difficulty needed for durable learning (Soderstrom and Bjork, 2015; Chi and Wylie, 2014; Bjork, 1994).
Balancing guidance and autonomy therefore remains a central pedagogical and ethical design challenge. Understanding
when to give initiative to the learner and when to prompt with supportive interventions is essential for developing AI
agents that enhance learning rather than replace it. Future comparative research should investigate how reactive and
proactive modes differentially affect engagement patterns, cognitive strategies, and knowledge transfer in authentic
higher education contexts such as multimodal analytical writing (Yan, Martinez-Maldonado and Gasevic, 2024a; Jin
et al., 2025; Belkina et al., 2025). In this study, reactive and proactive AI agent designs are therefore treated as different
allocations of conversational initiative rather than as simple low- and high-support conditions. This distinction allows
the analysis to separate the amount of assistance from the locus of regulation and to examine whether a fixed level of
initiative fits learners with different capabilities.

2.3. Generative AI Literacy and Learner Agency
Interaction design alone cannot fully account for the wide variation in learning outcomes; equally important is
the learner’s competence in navigating and utilising GenAI tools effectively. This competence, termed generative AI
literacy, extends beyond general digital or information literacy to encompass conceptual understanding, procedural
skill, and critical awareness of generative technologies (Jin et al., 2024; Bozkurt, 2024; Ng et al., 2021). It involves
understanding how large language models are trained and fine-tuned, recognising the probabilistic nature of their
outputs, crafting effective prompts to elicit accurate responses, and evaluating those responses with an awareness of
ethical, epistemological, and contextual implications (Zhao, Cox and Cai, 2024; Annapureddy et al., 2024; Stolpe and
Hallström, 2024). In this way, GenAI literacy integrates cognitive, technical, and socio-ethical dimensions that shape
how students perceive, interpret, and employ AI as a learning collaborator rather than merely a knowledge source (Ooi,
Tan, Al-Emran, Al-Sharafi, Capatina, Chakraborty, Dwivedi, Huang, Kar, Lee et al., 2023; Celik, 2023; Akpan et al.,
2024).
Students with high levels of GenAI literacy are more likely to approach AI tools strategically, using them to test
conceptual hypotheses, seek clarification, explore alternative framings, and refine arguments grounded in their own
reasoning processes (Yan et al., 2024b; Yang et al., 2025; Wu et al., 2025). They engage in reflective prompting,
critiquing, rewording, and validating AI suggestions against disciplinary standards, behaviours associated with higherorder metacognition and agency (Fan et al., 2025; Li et al., 2023; Yang et al., 2024). In contrast, learners with lower
literacy may rely passively on AI-generated text, misinterpret probabilistic outputs as definitive answers, or withdraw
when AI feedback conflicts with prior understanding (Chiu, 2024; Zhai et al., 2024; Abbas et al., 2024). Such disparities
mirror broader findings that technological proficiency amplifies differential learning gains in digital environments,
creating what is sometimes termed an “agency gap” between adaptive and dependent users (Bozkurt, 2024; Jin et al.,
2024; Belkina et al., 2025).
GenAI literacy may also support learners’ capacity to apply AI-supported reasoning when assistance is reduced or
removed. Students with stronger literacy may be better positioned to evaluate and internalise useful reasoning strategies,
whereas students with weaker literacy may find independent application more difficult (Xie et al., 2024; Ng et al., 2024;
Yan et al., 2025; Stadler et al., 2024; Zhai et al., 2024; An et al., 2025). However, the present study assesses performance
only on an immediate task completed after agent removal, which examines near-term independent application rather
than durable learning transfer. This distinction positions GenAI literacy as a potentially important instructional target
while avoiding claims about retention or transfer that require delayed assessment.
Despite emerging conceptual frameworks and measurement instruments such as the Generative AI Literacy
Assessment Test (GLAT) (Jin et al., 2024), the dynamic interplay between literacy and AI agent design remains
underexplored. Most current research treats AI literacy as a static trait, overlooking how learners’ competences evolve
through interaction with varying pedagogical affordances of reactive and proactive agent designs (Bozkurt, 2024; Ng
et al., 2021; Yan et al., 2024a). Understanding how literacy modulates the cognitive and motivational impact of these
designs is essential for tailoring GenAI-integrated educational agents that promote both equity and productive agency
in learners. Within the framework, GenAI literacy is not synonymous with learner agency. Rather, it is a capability that
may enable agency to be exercised effectively when the interaction design requires the learner to formulate requests,
evaluate outputs, and decide how AI contributions should enter the writing process.

The Agency Gap in AI-Supported Writing

2.4. Interaction Design, Equity, and the “Agency Gap”
Interaction design and GenAI literacy jointly shape how agency is distributed within human–AI partnerships,
extending existing accounts of learner control and regulation beyond purely human learning contexts (Bandura, 2001;
siri Nopas, 2025). Learner agency refers to the capacity to act intentionally and make informed choices, whereas
self-regulated learning describes the processes through which learners set goals, monitor progress, select strategies,
and evaluate outcomes (Panadero, 2017). Co-regulation and shared regulation further extend this perspective by
describing how regulatory responsibility can be supported by, or distributed across, interaction partners (Hadwin,
Järvelä and Miller, 2018). Adaptive scaffolding provides an instructional mechanism for adjusting support to learner
needs (Van de Pol, Volman and Beishuizen, 2010), while the expertise reversal effect suggests that guidance beneficial
for less experienced learners may become redundant or constraining as expertise increases (Kalyuga, 2009).
The agency gap construct captures a specific design–learner mismatch in AI-mediated activity rather than replacing
established theories of agency, regulation, or scaffolding (Bandura, 2001). It describes situations in which an AI
agent requires more self-initiation and evaluative control than a learner can currently exercise, or alternatively, where
excessive AI agent initiative reduces opportunities for a capable learner to direct and test their own reasoning (Bandura,
2001; Kim, So and Park, 2026). The former represents under-support, such as when learners with lower GenAI literacy
interact with strongly reactive environments; the latter represents over-direction, such as when highly capable learners
engage with rigidly proactive environments (Kim et al., 2026; Pozdniakov, Martinez-Maldonado, Tsai, Srivastava, Liu
and Gasevic, 2023). Because task complexity and disciplinary expectations shape the demands placed on learners,
neither agent design is assumed to be universally superior.
The agency gap perspective proposes that alignment between AI initiative and learner capability influences how
epistemic work is distributed during human–AI interaction (Bandura, 2001; Kim et al., 2026). Specifically, interaction
design and GenAI literacy may jointly shape who initiates questions, interprets evidence, monitors understanding,
and evaluates feedback, with consequences for dialogue structures and immediate independent writing performance
(Kim et al., 2026). Alignment should preserve meaningful learner control while providing sufficient support, whereas
misalignment may create unequal opportunities for learners to exercise agency (Bandura, 2001; Kim et al., 2026). The
present study does not conceptualise the agency gap as an established or directly measured latent construct; instead, it
examines this emerging conceptualisation through converging evidence from discourse networks, writing outcomes,
and learner reflections. Figure 1 summarises the framework tested in the study by positioning agent initiative and GenAI
literacy as inputs, the allocation of epistemic work and opportunities for learner agency as mechanisms, and reasoning,
engagement, and writing performance as observable consequences. Thus, the contribution is not a new general theory
of agency, but a testable account of how human–AI design alignment may shape participation and performance.

2.5. Research Questions
To advance this line of inquiry, the present study investigates how interaction design and GenAI literacy jointly
shape learning processes and outcomes in multimodal analytical writing. Specifically, we examine (1) how different
human-AI interaction designs influence epistemic reasoning and engagement, (2) how GenAI literacy predicts
performance during and after AI-assisted writing, and (3) how learners experience these designs as supportive or
constraining. Through an integrated mixed-method approach combining discourse analysis, regression and mediation
modelling, and thematic analysis of learner reflections, the study addresses the following research questions:
• RQ1: How do reactive and proactive human-AI interaction designs differ in the network structure of epistemic
reasoning and learner engagement during multimodal analytical writing?
• RQ2: To what extent does GenAI literacy predict learning outcomes under different interaction designs (reactive
vs. proactive), both during AI-supported writing and after AI is withdrawn?
• RQ3: Does GenAI literacy exert its influence directly on independent writing performance, or indirectly through
AI-supported task performance, and how is this relationship moderated by interaction design?
• RQ4: What interaction design heuristics can be derived from learners’ experiences with reactive and proactive AI
agents to guide the development of equitable and autonomy-supportive multimodal writing systems?
Together, these questions seek to bridge the conceptual and empirical divide between human-AI interaction research
and educational design. By analysing how design features and learner competencies jointly shape both process and
outcome, the study aims to generate actionable insights for developing interaction models that promote meaningful
engagement, equitable support, and sustainable learning in higher education.

The Agency Gap in AI-Supported Writing

Figure 1: Relational model of the agency gap in AI-supported writing. Interaction design and GenAI literacy are theorised
to shape how epistemic and regulatory work is allocated between learner and system. Alignment and misalignment are
expected to affect opportunities for learner agency and, in turn, the organisation of dialogue and immediate writing
outcomes. Learner agency is represented as a theoretical mechanism and was not measured as a standalone scale in this
study.

3. Methods
3.1. Learning Contexts
The learning context focused on writing based on visual information, a critical component of academic literacy and
analytical communication. The task was modelled after visual interpretation exercises such as the IELTS Academic
Writing Task 1 (IELTS, 2025). Participants were presented with three distinct visual representations, a bar chart,
a network diagram, and a ward map (described in detail in Section 3.3.1), and were instructed to compose a short
analytical response of approximately 150 words. Each task prompt asked them to interpret the visuals and address a
question about team performance (e.g., "How did the two nurses manage the primary patient (Amy) while attending to
other beds, focusing on their task prioritisation, verbal communication, and stress levels?"). The visuals were generated
from authentic data collected in healthcare simulation scenarios, ensuring realism while preventing prior familiarity
effects. Consequently, participants’ understanding and interpretation relied solely on the information provided within
the task. All activities were conducted through a purpose-built online platform (see Section 3.3.2).

3.2. Participants
A total of 81 university students participated in the study. Two were excluded from analysis because their written
responses contained fewer than 20 words, resulting in a final sample of 79 participants. Recruitment was conducted
via Prolific Academic, and participants were compensated £8 for approximately one hour of engagement. An a priori
power analysis for the primary two-condition comparison indicated a minimum of 72 participants (36 per condition)
for a medium effect (𝑓 = 0.25), power of 0.80, and 𝛼 = 0.05. This calculation was used to plan the primary comparison
and should not be interpreted as guaranteeing adequate power for every secondary model. The ENA and ordinal
regression analyses therefore used prespecified, parsimonious models together with nonparametric tests, effect sizes,
and diagnostic checks. The condition-specific mediation analyses involved 39 and 40 participants, respectively, and
were treated as exploratory; their uncertainty was evaluated using 5,000-resample bootstrap confidence intervals rather
than significance alone.
Participants were randomly assigned to the reactive agent (𝑛 = 39) or proactive agent (𝑛 = 40) condition. All
were current students or recent graduates from medical or nursing programs. The sample comprised 45 females and

The Agency Gap in AI-Supported Writing

Figure 2: Three visuals showing (i) team behaviours (bar chart), (ii) team communication patterns (network diagram),
and (iii) movement, communication intensity, and physiological responses (ward heatmap).

34 males, primarily aged 18–24 (𝑛 = 28) and 25–34 (𝑛 = 31). Geographically, participants were distributed across
North/Central America (𝑛 = 34), Europe (𝑛 = 21), Africa (𝑛 = 15), Australia (𝑛 = 4), South America (𝑛 = 2),
and other regions (𝑛 = 3). Educational backgrounds included Bachelor’s degrees (𝑛 = 36), high school diplomas or
equivalents (𝑛 = 18), Master’s degrees (𝑛 = 11), vocational diplomas or training (𝑛 = 7), Doctoral degrees (𝑛 = 4), and
other qualifications (𝑛 = 3). Familiarity with GenAI tools was reported as intermediate (𝑛 = 42), beginner (𝑛 = 25),
advanced (𝑛 = 9), expert (𝑛 = 2), and none (𝑛 = 1).

3.3. Materials and Apparatus
3.3.1. Learning Materials
The three visual representations used in the learning tasks were generated from multimodal data collected during a
high-fidelity healthcare simulation, where teams of four nursing students (two primary and two secondary nurses)
managed acute clinical scenarios in a realistic ward environment. The simulation aimed to develop prioritisation,
communication, and teamwork skills, with data captured from multiple sources: positional tracking (x–y coordinates
and body orientation), audio interactions via wireless headsets, and physiological measures (heart rate) using Fitbit
Sense wristbands. These data produced three progressively complex visualisations (Figure 2): (i) a bar chart showing
time spent on different behaviours, reflecting team-level resource allocation and prioritisation; (ii) a communication
network combining positional and audio data to visualise the frequency and direction of verbal interactions among
team members; and (iii) a ward map integrating positional, audio, and physiological data through heatmap techniques
to depict communication intensity, spatial movement, and areas of peak physiological arousal (Goldsberry, 2012).

3.3.2. Research Platform
The academic writing tasks were conducted using a custom-built online platform comprising three components.
The first component, the display area (Figure 3), presented one visual analytic at a time to minimise visual clutter
and prevent information overload (Ellis and Dix, 2007). Participants could navigate between the three visuals using
arrows on either side of the display. The second component, the writing space, provided an area for composing

The Agency Gap in AI-Supported Writing

Figure 3: Research platform showing (i) visual information display, (ii) academic writing space, and (iii) either AI-supported
chat function (reactive or proactive) or (iv) standard task instruction (AI-removal condition).

analytical responses by synthesising information from the visuals. The third component varied by condition: in the
AI-supported tasks, participants accessed a chat interface offering real-time support from AI agents, which responded
either reactively or proactively; in the non-AI condition, this component was replaced by static task instructions. The
overall platform was intentionally minimalist (Stone, Jarrett, Woodroffe and Minocha, 2005), allowing participants to
focus on interpreting the visual information and completing the writing tasks without distraction from unnecessary
interface complexity.

3.3.3. Agent Interaction Design
Two AI agents were developed, reactive and proactive, to manipulate conversational initiative while holding other
AI agent features constant (Figure 4). Both conditions used the same online interface, visual inputs, task instructions,
VizChat architecture, Retrieval-Augmented Generation pipeline, visualisation knowledge base, and multimodal GPT4o model (Yan et al., 2024b; Gao, Xiong, Gao, Jia, Pan, Bi, Dai, Sun and Wang, 2023). The intended experimental
contrast was therefore not model capability or access to information, but whether the learner or the agent initiated and
sequenced the support. Both agents began with the same welcome and task-orientation message.
In the reactive condition, generation was triggered only by a learner message. The agent answered the request
using the current visual and retrieved task context, but it did not introduce an unsolicited question, initiate a followup sequence, or determine the next visual to inspect (Ma, Ding, Wang, Han and Zhang, 2023; Yan et al., 2024b).
Responsibility for identifying uncertainty, formulating a useful prompt, deciding whether further help was needed,
and moving between visuals therefore remained with the learner.
In the proactive condition, intervention was governed by an expert-authored scaffold represented as a simple
conversational state sequence rather than by a numerical learner model. The state variables were (a) the visual currently
displayed and (b) which guiding questions for that visual had already been covered. When a participant entered a visual,
the agent initiated a one-sentence orientation and the next ordered guiding question. After each learner response, it
generated task- or process-level feedback with reference to the corresponding expert-authored “knowledge to convey”
statement: it confirmed an interpretation that was aligned with the visual evidence, clarified a missing visual cue
or relationship, or corrected an interpretation that contradicted the displayed evidence. It then advanced to the next
non-repeated question. The prompt prohibited asking about a visual that was not currently displayed and prohibited
repeating the same guiding question. After the prescribed questions for a visual were completed, the agent prompted
the participant to move to the next visual; after all visuals were completed, it issued a final synthesis prompt for the
written paragraph. Thus, the when of intervention was determined by visual entry and completion of each learner turn,

The Agency Gap in AI-Supported Writing
Table 1
Proactive agent intervention logic and prompt structure
Interaction state
Visual entry

Trigger/criterion
A new visualisation is
displayed

Learner response

The learner submits a
response to the current
question

Within-visual progression

The current question
has been addressed

Between-visual
progression

All questions for the
current visual are completed

Task completion

All three visual sequences are complete

Agent action and design purpose
Provide a one-sentence description and initiate the
first unanswered guiding question to orient attention
to task-relevant features.
Use the expert “knowledge to convey” statement
to generate confirmatory, clarifying, or corrective
feedback grounded in the visual evidence; do not
compose the learner’s final paragraph.
Advance to the next unanswered question for that
visual. Each question is asked once, and questions
about non-displayed visuals are withheld.
Ask the learner to navigate to the next visual. The
sequence contained one question for the bar chart,
two for the communication network, and three for
the ward map.
Prompt the learner to synthesise task prioritisation,
communication, and stress evidence in a cohesive
analytical paragraph.

Figure 4: AI agent interaction design contrasting a reactive agent (red; right) responding only upon learner query and a
proactive agent (blue; left) scaffolding learning through structured questioning and iterative feedback.

while the what was determined by a fixed sequence of descriptions, guiding questions, target knowledge, and transition
instructions (Appendix E).
The proactive prompt was designed from Hattie and Timperley’s task- and process-feedback principles (Hattie and
Timperley, 2007) and a conceptual approach to visual interpretation (Xun and Land, 2004). The sequence moved from
noticing a visual feature, to interpreting its meaning, to connecting evidence across visuals, and finally to synthesis.
Generated wording could vary with the learner’s response, but the triggering events, question order, target knowledge,
and completion rules were fixed across participants.

The Agency Gap in AI-Supported Writing

3.4. Measures and Instruments
3.4.1. Generative AI Literacy Measurement (GLAT)
Learners’ generative AI literacy was measured using the Generative AI Literacy Assessment Test (GLAT; Jin et al.
2024), a performance-based 20-item multiple-choice instrument. The items cover four dimensions represented in the
full instrument, understanding, applying, creating with, and making ethical judgements about GenAI, and each item has
four response options. A corrected total score was calculated, with higher scores indicating stronger GenAI literacy.
The GLAT was selected instead of a self-report confidence scale because it assesses demonstrated knowledge and
judgement relevant to prompting, evaluating, and using generative systems.
Published validation evidence includes expert review for face validity and a 204-participant study of item relevance,
comprehensiveness, and clarity. Structural validity and internal consistency were examined using classical test theory
and item response theory, supporting a stable two-parameter logistic model (Cronbach’s 𝛼 = 0.76; 𝜒 2 (133) = 135.06,
𝑝 > .05; RMSEA = 0.007, 90% CI [0, 0.035]). Because the 2PL model accounts for item difficulty and discrimination
but not guessing, the present study applied the published correction-for-guessing formula (Thorndike, Cunningham,
Thorndike and Hagen, 1991):
𝐶𝑆 = 𝑅 −

𝑊
(𝐶 − 1)

(1)

where 𝐶𝑆 is the corrected score, 𝑅 the number of correct responses, 𝑊 the number of incorrect responses, and 𝐶
the number of choices per item (four in the GLAT). The present analysis treated the corrected total as an observed
continuous predictor and relied on the instrument’s published validation evidence; no new factor validation was
attempted in the current modest sample. The complete item set and dimension labels are provided in Appendix B.

3.4.2. Domain Knowledge Measurement (VLAT)
Visualisation literacy, an essential component of domain knowledge for effective multimodal writing (Felten, 2008;
Lee, Kim and Kwon, 2016), was measured using the Visualisation Literacy Assessment Test (mini-VLAT; Pandey and
Ottley 2023). This 12-item multiple-choice instrument offers validity and reliability comparable to the original 53item VLAT (Lee et al., 2016) while providing a concise format suitable for extended experimental tasks. Its brevity
helped minimise cognitive load during assessment. Prior studies have confirmed the instrument’s structural validity
and internal consistency (Pandey and Ottley, 2023). To control for potential guessing effects, participants’ scores were
adjusted using the correction-for-guessing formula (Thorndike et al., 1991). The visualisation types and corresponding
questions are detailed in Appendix C.
3.4.3. Academic Writing Assessment Rubric
A comprehensive assessment rubric was developed to evaluate participants’ academic writing performance in tasks
involving visual data analysis. Grounded in prior literature and established frameworks in academic writing research,
five distinct evaluation criteria were identified (Table 2): Insightfulness, Visual Data Integration, Organisation and
Coherence, Linguistic Quality, and Critical Thinking. Each criterion was rated on a five-point Likert scale (Level 1,
Poor to Level 5, Excellent), with detailed descriptors and exemplar responses provided in the full rubric (Appendix D).
3.4.4. Scoring Procedures and Inter-Rater Reliability
Two independent coders evaluated each participant’s writing samples across the AI-support and AI-removal phases
using the rubric in Appendix D. Before formal scoring, the coders completed iterative training with 10 sample
responses, compared criterion-level decisions, and discussed the interpretation of descriptors and exemplars until a
common scoring protocol was established. All study essays were then rated independently without consultation during
the initial scoring pass.
Inter-rater consistency was assessed using Spearman’s rank correlations because each criterion was scored on an
ordered five-level scale. Correlations were high across all dimensions (𝑟𝑠 ≥ .75, 𝑝 < .001; Table 2). Disagreements
were handled by aggregation rather than by replacing one rater’s judgement with a post hoc consensus score: the two
independent criterion ratings were averaged to produce the final score for each dimension, and these dimension scores
were then combined to form the overall Composite Score. This procedure preserves information from both raters while
reducing the influence of any single judgement. Exemplar excerpts for every scoring level are included in Appendix D
to support transparency and replication.

The Agency Gap in AI-Supported Writing
Table 2
Assessment Metrics for Academic Writing with Visual Data
Metric

Description

Reliability
(𝑟𝑠 )
0.82

Insightfulness

Assesses the originality, depth, and relevance of insights. High-quality
responses identify subtle patterns, offer holistic interpretations, and provide
conclusions that extend beyond obvious points. Low-quality responses
are surface-level observations or simplistic interpretations (Kuhn, 2005;
Chanock, 2000).

Visual Data Integration

Measures the effectiveness and clarity with which visual data (charts,
graphs, communication networks, heart rate information) is explicitly
interpreted, combined, and connected into the written analysis. Highquality responses synthesize multiple visual data sources cohesively, while
low-quality responses merely mention data without synthesizing or miss
integrating data entirely (Jewitt, 2006).

0.85

Organisation and
Coherence

Evaluates the clarity, logical structure, and connectedness of ideas presented in the writing. High-quality responses have logical structure,
smooth transitions between points, and clearly organised arguments. Lowquality responses lack clarity, exhibit abrupt transitions, or are disorganised
(Paltridge, 2004).

0.75

Linguistic Quality

Reflects grammar accuracy, vocabulary appropriateness, sentence fluency,
and overall clarity of written expression. High-quality responses utilize
clear, precise, and varied language with minimal errors, while low-quality
responses contain grammatical errors, limited vocabulary, or unclear
expression (Biber and Gray, 2010).

0.89

Critical Thinking

Evaluates the level of careful thought, complexity, consideration of alternative viewpoints, and strength of conclusions and recommendations. Highquality responses deeply analyze complexities and implications, considering
broader contexts, contingencies, or solutions. Low-quality responses show
limited or superficial analytical engagement and fail to address alternative
perspectives or implications (Facione, 2000; Moon, 2007).

0.80

3.4.5. Epistemic Quality and ICAP Engagement
Two complementary frameworks were applied to characterise the human-AI dialogues: the epistemic dimension
of the argumentation knowledge construction framework (Weinberger and Fischer, 2006) and the ICAP engagement
framework (Chi and Wylie, 2014). The Epistemic Dimension captured the quality and correctness of reasoning
expressed in each utterance, while the ICAP framework indicated the depth of cognitive engagement of human learners
(Table 3). All utterances were segmented at the message level. The Epistemic Dimension was applied to every utterance
(human and AI), and the ICAP framework only to learner utterances. Two trained coders independently coded an
initial random sample of 25% of the data to establish reliability. After satisfactory agreement was reached, both coders
coded the remaining 75% of the corpus independently, with discrepancies resolved through discussion. In total, 554
utterances (310 AI and 244 human) were coded for epistemic quality, and 244 human utterances for engagement.
Cohen’s 𝜅 coefficients were calculated for each code (Table 3). Overall, inter-rater agreement was almost perfect for
both frameworks (𝜅 = .88 for Epistemic, 𝜅 = .91 for ICAP), indicating a high level of consistency across coders.

3.5. Study Procedure
We conducted a two-phase, mixed-method experimental study to examine how GenAI literacy and AI interaction
type (reactive vs. proactive agent) influenced participants’ academic writing performance with visual information.

The Agency Gap in AI-Supported Writing
Table 3
Epistemic Dimension and ICAP Engagement: Coding Scheme with Reliability
Code
EP-PS

EP-CS
EP-CP-Adeq

EP-CP-Inad

EP-PK

EP-OFF
I-PAS
I-ACT
I-CON

I-INT

Definition / Example
Problem Space: describes case facts or observations without invoking theoretical principles. Example: “The nurses spent more time on
tasks for Amy.”
Conceptual Space: introduces or defines a general concept or principle. Example: “Effective teamwork improves task management.”
Adequate Concept: correctly applies a principle to interpret the case.
Example: “Because they collaborated on Amy’s tasks, they managed
stress more effectively.”
Inadequate Concept: misapplies a concept or provides flawed
reasoning. Example: “They should have worked alone to finish
faster.”
Prior-Knowledge Relation: uses everyday or intuitive reasoning
unrelated to domain theory. Example: “Chocolate keeps you warm
because sugar gives energy.”
Off-task: social or procedural statements not tied to the task.
Example: “ok,” “thanks.”

𝜅
.87

𝑁

.70

.89

.86

.71

.92

Passive: minimal acknowledgment, no new content. Example:
“Okay.”
Active: repeats or queries factual information. Example: “What is
the heart rate?”
Constructive: adds new inference or explanation beyond given
content. Example: “That suggests they coordinated to reduce
stress.”
Interactive: builds upon or challenges AI reasoning collaboratively.
Example: “So if that’s true, the secondary nurse must have handled
communication more.”

.97

.89

.88

—

Participants were recruited via Prolific and directed to a Qualtrics1 survey, where they provided informed consent,
demographics, and completed literacy assessments (GLAT and mini-VLAT). After reviewing contextual information
on the healthcare simulation (Section 3.3.1), they were randomly assigned to either the reactive or proactive agent
assistance condition. In the AI-supported phase, participants composed a 150-word written response interpreting
the provided multimodal visuals with real-time agent support. Subsequently, in the AI-removal phase, participants
completed a similar task with new visual data from a different simulation scenario without agent access (Figure 5).
After completing both writing phases, participants answered a short post-task reflection questionnaire consisting of
three Likert-type items and one open-ended question on their experiences with the agent (see Section 3.6.4). The
open-ended responses provided the qualitative dataset for the thematic analysis addressing RQ4. The study lasted
approximately one hour. Ethical approval was obtained from [Anonymised] University (Project Number: Anonymised).

3.6. Analytical Procedures
3.6.1. Epistemic network analysis (RQ1)
To examine how human–AI interaction design shaped the relational organisation of reasoning and engagement
within dialogue, we applied epistemic network analysis (ENA; Shaffer, Collier and Ruis 2016). ENA was selected
because RQ1 concerned how coded ideas were connected within local conversational contexts, not only how frequently
each code occurred. Frequency analysis would identify the prevalence of categories but not their patterned cooccurrence, while an immediate-transition approach would answer a different question about one-step sequence. ENA
instead represents the structure of associations among discourse elements within a specified temporal window and
permits comparison of participant-level networks between conditions.
1 https://www.qualtrics.com/

The Agency Gap in AI-Supported Writing

Figure 5: Experimental procedure consisting of two phases: (1) AI-supported writing task with either reactive or proactive
agent assistance, and (2) AI-removal writing task without agent support.

We first modelled epistemic reasoning using the epistemic codes (EP-PS, EP-CS, EP-CP-Adeq, EP-CP-Inad, EPPK, EP-OFF) across all human and AI utterances. A second model added ICAP engagement codes (I-PAS, I-ACT,
I-CON, I-INT) for learner utterances to examine how engagement depth intersected with epistemic quality. Each
utterance was represented as a binary vector indicating the presence or absence of each code. Each participant (𝑛 = 79)
served as the u
