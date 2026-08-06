---
source_url: "https://doi.org/10.1145/3800645.3813102"
ingested_date: 2026-08-06
sha256: 60481730b9990c961d383653853dd3da875c685170a6f05fea9b2619a4104bed
---

# Guidelines for Designing AI Technologies to Support Adult Learning

**Authors:** Jennifer Reddig, Glen R Smith Jr, Sanaz Ahmadzadeh Siyahrood, Wesley G Morris, Yoojin Bae, Kaitlyn Crutcher, John Kos, Rahul K Dass, Jinho Kim, Momin Naushad Siddiqui, Daniel Weitekamp, Ploy Thajchayapong, Sandeep Kakar, Alex Endert, Scott Crossley, Min Kyu Kim, Chris Dede, Ashok K. Goel, Christopher J. MacLellan
**Venue:** DIS 2026, June 13-17, Singapore
**DOI:** https://doi.org/10.1145/3800645.3813102

## Full Text

Guidelines for Designing AI Technologies to Support Adult
Learning
Jennifer Reddig∗

Interactive Computing
Georgia Institute of Technology
Atlanta, Georgia, USA
jreddig3@gatech.edu

Wesley G Morris

Peabody College
Vanderbilt University
Nashville, Tennessee, USA
wesley.g.morris@vanderbilt.edu

John Kos

Designing Intelligence Lab
Georgia Institute of Technology
Atlanta, Georgia, USA
jkos3@gatech.edu

Momin Naushad Siddiqui

Georgia Institute of Technology
Atlanta, Georgia, USA
msiddiqui66@gatech.edu

Sandeep Kakar

Georgia Institute of Technology
Atlanta, Georgia, USA
skakar6@gatech.edu

Min Kyu Kim

Learning Sciences
Georgia State University
Atlanta, Georgia, USA
mkim120@gsu.edu

Glen R Smith Jr∗

School of Interactive Computing
Georgia Institute of Technology
Atlanta, Georgia, USA
glensmith@gatech.edu

Yoojin Bae

Learning Sciences
Georgia State University
Atlanta, Georgia, USA
ybae11@student.gsu.edu

Rahul K Dass

Georgia Institute of Technology
Atlanta, Georgia, USA
rdass7@gatech.edu

Daniel Weitekamp

School of Interactive Computing
Georgia Institute of Technology
Atlanta, Georgia, USA
weitekamp@gatech.edu

Alex Endert

Georgia Institute of Technology
Atlanta, Georgia, USA
endert@gatech.edu

Chris Dede

Graduate School of Education
Harvard University
Cambridge, Massachusetts, USA
chris_dede@harvard.edu

Sanaz Ahmadzadeh Siyahrood
Georgia Institute of Technology
Atlanta, Georgia, USA
ssiyahrood3@gatech.edu

Kaitlyn Crutcher

Georgia Institute of Technology
Atlanta, Georgia, USA
kcrutcher3@gatech.edu

Jinho Kim

Learning Sciences
Georgia State University
Atlanta, Georgia, USA
jkim485@student.gsu.edu

Ploy Thajchayapong

Georgia Institute of Technology
Atlanta, Georgia, USA
ploy@gatech.edu

Scott Crossley

Vanderbilt University
Nashville, Tennessee, USA
scott.crossley@vanderbilt.edu

Ashok K. Goel

School of Interactive Computing
Georgia Institute of Technology
Atlanta, Georgia, USA
goel@cc.gatech.edu

Christopher J. MacLellan

School of Interactive Computing
Georgia Institute of Technology
Atlanta, Georgia, USA
cmaclell@gatech.edu

Abstract
∗ Both authors contributed equally to this research.

This work is licensed under a Creative Commons Attribution 4.0 International License.
DIS ’26, Singapore, Singapore
© 2026 Copyright held by the owner/author(s).
ACM ISBN 979-8-4007-2563-0/26/06
https://doi.org/10.1145/3800645.3813102

2474

AI-powered educational technologies have demonstrated measurable benefits for learners, but their design and evaluation have
largely centered on K-12 contexts. As a result, many AI-supported
learning systems remain poorly aligned with the needs, constraints,
and goals of adult learners. To better understand how AI systems function in adult education, this paper examines the deployment of several AI learning technologies developed within
a multidisciplinary, national research institute in the United States

DIS ’26, June 13–17, 2026, Singapore, Singapore

Reddig and Smith et al.

focused on adult learning and online education. Drawing on longitudinal deployment data, we conducted a reflexive thematic analysis to identify recurring challenges and design considerations
across systems. These insights were synthesized into a set of 19
design guidelines intended to inform future AI-supported adult
learning technologies. We demonstrate the utility of these guidelines through a heuristic evaluation of the deployed systems. Lastly,
we present a guideline exploration tool that aids in the ideation
of technologies by connecting the guidelines to stakeholder statements surfaced in the analysis process.

CCS Concepts
• Human-centered computing → Heuristic evaluations.

Keywords
Artificial Intelligence, Design Guidelines, Adult Learning, Andragogy, Educational Technology
ACM Reference Format:
Jennifer Reddig, Glen R Smith Jr, Sanaz Ahmadzadeh Siyahrood, Wesley G
Morris, Yoojin Bae, Kaitlyn Crutcher, John Kos, Rahul K Dass, Jinho Kim,
Momin Naushad Siddiqui, Daniel Weitekamp, Ploy Thajchayapong, Sandeep
Kakar, Alex Endert, Scott Crossley, Min Kyu Kim, Chris Dede, Ashok K.
Goel, and Christopher J. MacLellan. 2026. Guidelines for Designing AI
Technologies to Support Adult Learning. In Designing Interactive Systems
Conference (DIS ’26), June 13–17, 2026, Singapore, Singapore. ACM, New York,
NY, USA, 23 pages. https://doi.org/10.1145/3800645.3813102

1

goals, or stable instructional environments. Consequently, learning
technologies intended for adult learners must account for the contextual conditions under which learning takes place, rather than
inheriting design patterns optimized for K-12 settings.
This paper examines these challenges through an empirical investigation of AI-powered learning technologies deployed in adult
education contexts. Our analysis focuses on a set of systems developed and deployed within the National AI Institute for Adult
Learning and Online Education (AI-ALOE) in the United States [30].
Even though these technologies were implemented and deployed
across diverse adult learning environments, stakeholders like learners, instructors, administrators, and technology development teams
repeatedly surfaced similar needs, challenges, and design considerations. The presence of these patterns across otherwise distinct
deployments motivated a more systematic, cross-technology synthesis of findings.
Drawing on longitudinal deployment data—including focus
groups with instructors and learners, technical artifacts, and
progress reports—we analyze how these technologies were designed, implemented, and experienced in practice. Using reflexive
thematic analysis [9], we synthesize themes and insights from these
deployments into a set of 19 design guidelines. We then demonstrate
the applicability of these guidelines by evaluating them against the
same set of technologies, highlighting opportunities for improvement and the trade-offs that emerge in real-world adult learning
environments. Collectively, this work contributes:
(1) An empirically grounded set of 19 guidelines for AI-powered
adult learning technologies,
(2) A method for conducting heuristic evaluations of adult learning technologies using these guidelines, and
(3) A guideline exploration tool that informs meaningful
ideation and technology refinement by linking guidelines to
stakeholder statements surfaced during our analysis.

Introduction

AI-powered educational technologies enable adaptive, data-driven
instruction across a wide range of learning contexts and have
demonstrated measurable benefits for learner engagement, personalization, and instructional efficiency at scale [14]. Although
recent trends in educational technology research reflect a growing emphasis on higher education and adult learning populations
[6, 43], many AI-supported systems continue to be designed and
evaluated within K-12 settings, where learning typically occurs
in formal classrooms with relatively stable schedules, curricula,
and support structures. A systematic review by Bernacki et al. [5]
suggests that research on personalized learning has largely overlooked adult learning and workplace training populations. As a
result, prevailing design knowledge, assumptions, and system evaluation criteria are tightly coupled to the needs and constraints
of younger learners and traditional schooling contexts [23]. This
renders many AI-supported learning technologies poorly aligned
with the needs of adult learners, who increasingly pursue education
through professional training and informal learning pathways [56].
Adult learners differ from younger learners not only demographically, but motivationally and contextually, with learning situated
within the broader constraints of their daily lives. Adult learning is
often self-directed and goal-oriented, shaped by immediate needs
such as career advancement, credentialing, or reskilling [44, 45].
At the same time, adult learners must balance education alongside
employment, family responsibilities, and other social obligations,
which constrains when, where, and how learning occurs. These
conditions shape patterns of technology use and challenge design
assumptions that presuppose continuous participation, uniform

2475

We begin by situating this work within prior research on adult
education and AI-supported learning technologies. We then describe the learning technologies examined in this study and the
adult learning contexts in which they were deployed. Next, we
detail our research methodology, including data sources and analytic procedures. We subsequently present the resulting design
guidelines, followed by a discussion of their implications for the
design and evaluation of learning technologies for adult learners
and directions for future research.

2

Related Work

Knowles [44] introduces andragogy, the theory of adult learning,
which points out that adults are independent, self-directed learners
with years of life experience who require meaningful, problemoriented teaching strategies. In contrast, Knowles describes pedagogy, the theory of child learning, as being characterized by a more
dependent relationship between instructor and child, where the
instructor largely shapes the direction and content of the curriculum. According to Knowles, adults require instructional strategies
that are collaborative and demonstrate how content supports their
learning goals. Adults exist in a different social and cultural space
than children, distinguished by a greater degree of self-directed
decision-making. Educational technology for adults must support a

Guidelines for Designing AI Technologies to Support Adult Learning

DIS ’26, June 13–17, 2026, Singapore, Singapore

different set of needs than tools designed for children [80]. Though
recent efforts have explored AI tools in higher education [52], these
technologies do not take into account the unique social contexts
and outside demands placed on adult learners.
While andragogy characterizes adult learners, pedagogy offers
many well-established instructional strategies and cognitive principles that are also applicable to adult learning, such as scaffolding
[85], formative feedback [73], guided reflection and experimentation [60], and structured learning activities [7]. These practices
are general across both K12 and adult learner contexts. When applied to adult learning, pedagogical strategies should be adapted
to respect learner autonomy, leverage prior experience, and align
with goal-oriented motivations [44, 80]. In this way, pedagogy is
a foundational set of instructional design principles that can be
translated to adult learning contexts.
Particularly relevant to adult online learning, Garrison et al. [27]
introduced the Community of Inquiry (CoI) framework to investigate online learning environments, which suggests that a meaningful educational experience occurs through the interaction of
teaching presence, social presence, and cognitive presence. Cognitive presence is the learner’s internal engagement with the learning
experience. Social presence is the group collaboration and discussion toward learning outcomes, and allowing learners to project
their authentic selves. Teaching presence is the organizational structure, design, and facilitation of the learning environment. Social
presence is particularly critical in online contexts, where asynchronous and distributed interaction can inhibit the development
of interpersonal relationships. Unlike face-to-face settings where
social connections form naturally, online learning environments
require deliberate design to foster social presence, as its absence
has been linked to learner isolation and disengagement [29]. The
three presences are interconnected: teaching presence creates the
conditions for social and cognitive presence to develop and interact,
cognitive presence is deepened by collaborative inquiry, and social
presence builds motivation and trust for sustained effort. Adult
and online learning environments require intentional design and
support for these elements, since adult learners often engage in distributed, asynchronous, and professional learning contexts [28, 56].
The technologies developed by AI-ALOE are designed to support
different elements and combinations of elements within the CoI
framework. By looking at the seven tools developed within the institute collectively, we offer a view into how meaningful learning can
be supported by an ecosystem of online educational technologies.
Adult learning in online environments involves challenges related to sustained engagement, feedback, and facilitation interaction across distributed and asynchronous contexts. Artificial intelligence has increasingly been explored as a way to support teaching
and learning [12, 14]. Prior research shows that AI-supported educational tools can assist with individualized feedback, content
adaptation, and instructional coordination across pedagogical theories [22]. However, empirical studies have also identified several
challenges with AI-supported learning, including learner frustration and tools that are difficult to understand or use effectively
[15, 86]. In response, several frameworks have been proposed to
guide the use of AI in education, including pedagogically oriented
classifications [22] and principle-based approaches focused on
transparency, agency, and accountability [24]. Despite their contributions, these frameworks often remain high-level and offer limited

2476

guidance for translating pedagogical principles into the design of
AI-supported tools, particularly in adult learning contexts. Efforts
to adapt broader educational design frameworks, such as Universal
Design for Learning, to AI-supported contexts have faced similar
challenges related to complexity and limited empirical support [89].
The tools developed within AI-ALOE span several established
categories of educational technology. Intelligent tutoring systems
have been widely studied, with learning gains approaching those
of one-on-one human tutoring [81]. Interactive video platforms embed questions and tasks into educational videos, which improves
learning outcomes over passive viewing [71]. AI-powered chatbots
have grown substantially by applying large language models to
provide on-demand instructional support and personalized feedback, though there are ongoing concerns around reliability and
academic integrity [48]. Intelligent textbooks also have integrated
large language models to generate formative feedback, assessment
questions, and interactive dialog grounded in textbook content
[77]. Scientific modeling tools allow students to construct, test, and
revise hypotheses through interactive simulations [19, 31]. Social
agents are a more recent innovation, designed to combat student
isolation in online learning by suggesting potential collaborators
with shared interests and goals [82]. Since the suite of AI-ALOE
tools spans a broad range of techniques, learning goals, and strategies, examining the constraints and impacts of the tools collectively
provides a more well-rounded perspective of AI-supported learning
tools.
Within human–AI interaction research, design frameworks and
guidelines have played an important role in translating high-level
principles into actionable support for system design. For example,
the human-AI interaction guidelines proposed by [1] demonstrates
how empirical evidence can be consolidated into reusable guidelines
that informs evaluation and design practice. More recent research
has emphasized the value of design artifacts like toolkits, cards, and
structured resources to support ideation and collaboration when
designing AI systems [88]. A growing body of work in AI and
education has proposed guidelines and frameworks to support the
responsible and effective use of AI in learning and assessment [65,
66, 68]. Recent synthesis shows that much of this guidance is framed
at the policy level, rather than system guidance [26]. This literature
highlights the importance of empirically grounded design guidance
that connects pedagogical theory with the practical realities of
designing, evaluating, and iterating on AI-powered educational
systems for adult learners.

3 Background
3.1 AI-ALOE
The National AI Institute for Adult Learning for Online Education
(AI-ALOE) is a large, interdisciplinary research institute formed
through a diverse coalition of research-intensive and regional universities, and community and technical college systems. The institute brings together researchers from artificial intelligence, learning sciences, cognitive science, education, linguistics, and humancomputer interaction around a shared mission of improving the
quality and accessibility of online and hybrid education for adult
learners. AI-ALOE focuses specifically on adults engaged in reskilling, up-skilling, or continuing education [30]—learners whose
educational experiences are shaped by limited time, varying prior

DIS ’26, June 13–17, 2026, Singapore, Singapore

Reddig and Smith et al.

knowledge, and the need to integrate learning into complex personal and professional lives. In pursuit of this mission, the institute
develops and studies AI-driven learning technologies intended to
support flexible, self-directed learning pathways, while accounting
for the social, cognitive, and institutional constraints that characterize adult education contexts.
We selected AI-ALOE technologies for investigation because they
offer a combination of contextual diversity and functional breadth.
First, the institute’s technologies span a wide range of adult learning
contexts and populations, including rural and urban settings, community colleges and research universities, and disciplines across
STEM and the humanities. Second, the portfolio of tools reflects
broad coverage of instructional roles and AI capabilities, ranging
from tutoring and feedback to social support, metacognitive scaffolding, conceptual modeling, and instructor-facing analytics. This
diversity enables analysis across multiple forms of adult learning
support. Lastly, these technologies have been examined through
sustained, longitudinal studies in authentic adult learning environments, generating rich data from learners, instructors, and design
teams over time. Together, these characteristics make AI-ALOE an
especially well-suited setting for synthesizing design guidelines
that are grounded in practice and sensitive to the realities of adult
learning rather than isolated or short-term laboratory studies.

3.2

AI Technologies

In this section, we describe each AI technology we examined as part
of this study. The technologies were developed by research teams
from several academic institutions, including Georgia Institute of
Technology, Georgia State University, Harvard University, University of North Carolina at Greensboro, and Vanderbilt University.
3.2.1 Apprentice Tutors. A web-based, intelligent tutoring system (ITS) platform designed to support adult learners in practicing
domain-specific procedural skills through interactive problem solving [34]. Tutors can be created in one of two ways: (1) manually, by
conducting a cognitive task analysis [50] with instructors to inform
the design of each tutor, or (2) through a tutor builder component
that enables educators to construct interfaces via drag-and-drop
interactions and generate expert models with the support of an AI
agent [76]. As learners engage with dynamically generated problems, the system provides real-time correctness feedback, allowing
them to iteratively refine their understanding and skills. Instructorand learner-facing dashboards further support the learning process by visualizing skill mastery and progress over time, helping
users monitor performance and make informed instructional or
self-regulatory decisions.
3.2.2 iTELL. Intelligent Texts for Enhanced Lifelong Learning
(iTELL) is an AI-powered platform that helps adult learners practice active and metacognitive reading strategies by paraphrasing
and reflecting on key ideas from the material [61]. iTELL ingests instructional text in PDF format and transforms it into an interactive
web application that includes content such as short constructedresponse questions, page-level summaries, and end-of-page cloze
test activities. iTELL’s AI module provides formative feedback for
learners [62, 63] and its analytics dashboard provides actionable insights for educators to aid in instructional decision-making [16, 17].

2477

3.2.3 Ivy. An interactive video-based AI coaching system embedded in online courses to support procedural skill learning [18, 51].
Ivy generates structured explanations about “how” and “why” procedural steps work by integrating symbolic representations of goals
and problem decompositions, and states and causal transitions, with
LLM-based synthesis of explanations. These representations act as
active scaffolds that shape both what is explained and how explanations are organized, supporting adult learners’ understanding of
complex, multi-step procedures.
3.2.4 Jill Watson. A retrieval-augmented generation powered
generative-AI-based teaching assistant and cognitive partner that
converses with learners using instructor-approved course materials [32, 39]. It aims to help adult learners access instructional
support anytime, anywhere by increasing teacher presence [49]
and to deepen cognitive engagement with course content by offering a conversational interface for clarification and reinforcement
[53]. It supports both retrieval of text and images in response to
content-based and logistical queries in both text and audio formats [79]. The system has been deployed across multiple courses
in different subjects and has been integrated with existing learning
management systems [39].
3.2.5 SAMI. A social agent embedded within online discussion
platforms to encourage class participation and social interaction
[83]. It reads students’ posts on the discussion forum, uses LLMs to
build knowledge graphs based on student attributes, and uses graph
matching to generate recommendations for social connections [38].
It also provides explanations of its reasoning and recommendations.
The tool is designed to increase a learner’s sense of social belonging
and is used to support emotional well-being and self-efficacy. It
aims to help adult learners feel more connected to their peers and
instructors.
3.2.6 SMART. Student Mental Model Analyzer for Research and
Teaching (SMART) provides AI-powered formative feedback on
learner-generated summaries and supports iterative revision at a
learners’ own pace [20]. It integrates knowledge-based AI with generative AI to deliver multi-modal feedback, including a visualized
knowledge map that highlights key concepts learners have identified or omitted [36, 42]. Through this AI-augmented summarization
process, adult learners are better supported in comprehending core
concepts of the material [4, 41].
3.2.7 VERA. A conceptual modeling tool that guides learners
through the process of building, simulating, and revising scientific
models [2, 3]. It provides a visual modeling interface connected
to a backend simulation engine and is supported by AI-generated
coaching and feedback [10]. The tool is used in courses that emphasize systems thinking and inquiry-based learning. It aims to
support adult learners by helping them understand and manipulate complex systems through hands-on model construction and
experimentation, scaffolding them through any missing domain
knowledge they may have [46, 47].

Guidelines for Designing AI Technologies to Support Adult Learning

3.3

DIS ’26, June 13–17, 2026, Singapore, Singapore

AI Technology Deployments

The AI-ALOE technologies were deployed across a diverse set of
adult learning environments, spanning credit-bearing and noncredit courses offered in fully online, hybrid, and in-person formats.
These deployments took place across multiple academic institutions
and disciplinary contexts, including nursing, algebra, computer science, ecology, web development, and research methods. Table 1
summarizes the subjects, learner age ranges, and geographic contexts of each technology’s deployments, and Figure 1 illustrates how
institution types connect to technologies and delivery modalities.
Several deployments focused on supporting social engagement
and community building in online courses, where adult learners
may experience isolation or reduced opportunities for peer interaction. For example, SAMI was embedded within online discussion
platforms in self-paced courses to encourage participation, foster
social connection, and support learners’ sense of belonging [38]. In
contrast, tools such as VERA and IVY were deployed in classroombased and hybrid courses to support conceptual understanding
and procedural learning through modeling, simulation, and structured explanation [18, 72]. Apprentice Tutors was integrated into
mathematics and nursing courses to provide targeted, on-demand
practice problems with immediate feedback, enabling learners to
develop problem mastery outside of limited class time [35]. iTELL
was used in web development and research methods courses to support active reading, comprehension, and metacognitive strategies
as learners engaged with complex instructional texts [17]. Across
deployments, instructional goals included strengthening teaching
presence, increasing learner engagement, improving feedback quality, and supporting self-regulated learning.
A defining characteristic of these deployments was the close
collaboration between research teams, instructors, and learners
throughout design and refinement. Many teams adopted participatory and iterative approaches, working directly with faculty to
align system behavior with instructional goals. For instance, the
Apprentice Tutors team met regularly with instructors to conduct
cognitive task analyses and identify domain-specific tutoring needs,
resulting in tutors that were tightly aligned with course content and
instructional intent [35]. The SMART team introduced automated
feedback tools to instructors who were new to AI-assisted instruction, providing structured onboarding and continuing support as
instructors gradually integrated AI-generated feedback into their
courses [41]. These collaborations allowed instructors to shape how
AI features were introduced and framed for learners, while enabling
research teams to adapt system designs in response to instructional
constraints.
Across multiple deployments, the technologies demonstrated
measurable improvements in learner outcomes and stakeholder
adoption. Use of Jill Watson was associated with higher average
course grades and improved retention compared to control sections
[39]. Deployments of SMART showed that learners receiving AIsupported concept feedback produced higher-quality written work
[4]. Apprentice showed higher in-class assessment performance
after using the tutor [33]. iTELL demonstrated improvements in
summary writing quality and sustained engagement across diverse
adult learner populations in both hybrid and online contexts [16].
Lastly, results from VERA suggested gains in the complexity of

2478

learners’ mental models, though outcomes varied by course structure and instructional emphasis [47].
Viewed collectively, the deployments surfaced a set of recurring
themes that appeared across technologies, disciplines, and instructional formats. Instructors and learners consistently highlighted
similar challenges and points of friction during use, regardless of the
specific system involved. The presence of these patterns across otherwise distinct deployments suggested that they reflected broader
features of adult learning experiences. These observations motivated the cross-technology analysis presented in this paper, forming
the empirical foundation for the design guidelines articulated in
the following sections.

4

Methodology

To conduct our synthesis, we performed a reflexive thematic analysis [8, 9] of user and stakeholder feedback. The goal was to support
future development of AI-powered education tools by highlighting
common design considerations, user needs, and contextual factors
that emerged across our multiple technologies and deployments.
This section details how we compiled the relevant data and performed the analysis.

4.1

Data Source Collection

We began our analysis by assembling a corpus of qualitative data
that captured how the AI-ALOE technologies were designed, deployed, and experienced in adult learning contexts. These data
were drawn from multiple sources to reflect both the intentions
of research teams and the usage experiences of learners and instructors. Specifically, we collected a total of 15 presentations from
the research and development teams of the technologies that documented design rationales, relevant learning science frameworks,
and instructional considerations; transcripts from 17 focus groups
conducted with learners, instructors, and administrators; and 3 sets
of cross-team feedback from NSF program committee meetings.
To support a systematic, cross-technology analysis, we transformed these heterogeneous materials into a standardized data
format. From presentations, reports, and design documents, we
extracted discrete statements reflecting educational concepts such
as learning science theories and design considerations articulated
by research teams. From focus group transcripts, we extracted individual thoughts, experiences, and reflections expressed by learners,
instructors, and administrators, preserving the original phrasing to
maintain context. Each extracted item was entered as a single row
in a digital spreadsheet and annotated with metadata including the
associated technology, the raw text excerpt, and the source context
(e.g., “SMART - Instructor Focus Group”, “iTELL - Design Presentation”, etc.). This standardized representation enabled us to assign
unique identifiers to each data item (e.g., “SMART-Learner Focus
Group-299”), allowing insights to be traced back to their original
source throughout analysis if additional context was required. This
structured dataset formed the foundation for the reflexive thematic
analysis described in the following section.

4.2

Reflexive Thematic Analysis

We conducted a reflexive thematic analysis [8, 9] to synthesize
patterns across the collected data. The analysis was carried out

DIS ’26, June 13–17, 2026, Singapore, Singapore

Reddig and Smith et al.

Technology

Subjects

Apprentice
iTELL

Algebra, Nursing
Employment Regulations, Intro to Programming,
Learning Analytics, Mobile App Dev, NLP, Pharmacology, Research Methods in Psychology
Knowledge-based AI
Accounting, Computer Science, English, Information
Technology, Leadership & Management, Medicine for
Business, Mobile App Dev, Nursing
Computer Science
Biology, Computer Science, Education, English, Nursing
Biology, Cognitive Science, Computer Science, Ecology, Wildlife Management

Ivy
Jill Watson
SAMI
SMART
VERA

Age Range

Geographic Context

21–65
18–50

Online
Online, Urban

21–65
20–35

Online
Online, Rural, Urban

20–50
∼20s

Online, Urban
Online, Urban/Suburban

18–65

Online, Rural, Urban

Table 1: Deployment contexts of AI-ALOE technologies, summarizing the subjects, learner age ranges, and geographic settings
in which each technology was used.

Figure 1: Connections between institution types (research universities and technical colleges), AI-ALOE technologies, and
delivery modalities (online, in-person, hybrid).
by a deliberately diverse research team that included at least one
representative from each of the technology design teams, one researcher who led and conducted the focus groups, and 3 additional
HCI researchers who were not part of the development or focus
group teams. To ensure a comprehensive overview, all team members participated in a collaborative synthesis process to analyze all
of the data following the procedure of Holtzblatt [37]. Team members represented over five institutions and brought complementary

2479

perspectives from computer and learning sciences, educational technology, and human-computer interaction. This composition was
intended to ensure a plurality of perspectives informed the analysis,
spanning design intent, deployment experience, and learner- and
instructor-facing observations. Through iterative discussion and
debate, the team collaboratively identified, refined, and synthesized
themes, drawing on both the data and their situated expertise with
adult learning technologies. As a result, we acknowledge that it is
possible another research team, drawing on different experiences

Guidelines for Designing AI Technologies to Support Adult Learning

DIS ’26, June 13–17, 2026, Singapore, Singapore

Affinity Diagramming Process
AI tools should be
accessible and fit
into the busy lives
of instructors and
learners.

Guideline

Needs
Statement

I should be able to
access AI help on a
phone, with or
without internet,
and it should be
aﬀordable

Sub-theme

I want to
access the
technologies
anywhere

Stakeholder
Quote

Apprentice- Student
Focus Group-85:
...if a student is having
like trouble with a math
problem or something
and needs help, it can be
like [accessed] at any
time.

I think AI's ability
to provide extra
help anytime
anywhere makes
it "super human"

I want to
access the
technologies
anytime

JillWatson- Learners Focus
Group-35:
I might be up at 3:00 AM
and if I post a question on
the discussion, you'd
usually have to wait until
like 8:00 AM 9:00 AM to get
a response 'cause of no
one's up at 3:00 AM

I (an adult) have
limited time and
resources, and
learning needs to
to fit into my life

My tools should
adopt good design
principles that
make learning
accessible to
everyone

My parents
can't
help me with my
homework,
maybe AI can

The tool can
provide
"superhuman"
help that the
teacher can't.

JillWatson- Learners
Focus Group-70:
...I'm in India right
now... there are a lot of
time zone challenges,
and I had to [wait]
couple of hours

Apprentice- Teacher
Focus Group-47:
I study late at night and
there's nobody around to
help me, you know, well
we've got these exponent
tutors that can help you
at that hour as well

Figure 2: Affinity diagramming process used to derive design guidelines from qualitative data. Stakeholder quotes (yellow
notes) were clustered into sub-themes (blue notes) capturing recurring perspectives. Sub-themes were synthesized into needs
statements (pink notes) spanning multiple stakeholder groups. Finally, needs statements informed distilled design guidelines
(green notes).
and values, might arrive at an alternate set of themes or guidelines
when analyzing the same dataset. Indeed, we selected this approach
because the goal of this study was not to establish a single objective
account of stakeholder experiences, but to surface recurring design
considerations grounded in the situated experiences of learners,
instructors, and technology developers across multiple AI systems
and contexts.
All extracted data items—approximately 1,600 individual
statements—were imported into Miro1 and initially organized by
technology. Each item was represented as a yellow sticky note containing a verbatim quote, observation, or design insight from the
dataset. Following an affinity diagramming process, the team collaboratively grouped related yellow notes into first-level thematic
clusters, each labeled with a blue sticky note (See Figure 2). These
blue notes captured shared patterns across small sets of related
items (typically four to six) and were framed in the first-person (“I”)
perspective to reflect the dominant stakeholder voice represented
in the underlying data (e.g., learner, instructor, or developer). For
example, a blue note such as “I want students to develop transferable critical thinking skills” reflected a recurring instructor-oriented
concern present across multiple data sources.
Next, the team grouped related blue notes into higher-level pink
notes, also written in the “I” perspective, but reframing broader
1 https://miro.com/

2480

concerns of multiple stakeholders as desired features. For instance,
a pink theme such as “I want to design AI tools that are intuitive,
easy to use, and promote natural interactions to avoid confusion
over the interface and expectations of the tool” encompassed learner
anxieties about data deletion ("I’m afraid of accidentally deleting
my work"), instructor concerns about usability ("I make mistakes
because of the design of the UI "), and developer reflections on overall
interface design. Throughout this process, themes were iteratively
discussed, merged, split, or reframed as the team revisited the data
and reflected on alternative interpretations.
Finally, the pink themes were synthesized into a set of design
guidelines, represented as green sticky notes and framed as actionable statements beginning with “AI tools should...”. This synthesis
involved a collaborative review where the entire research team
examined each thematic group of pink notes, proposed candidate
guidelines, and iteratively revised the wording until reaching a
consensus that each guideline accurately reflected the consolidated
stakeholder voice. Each guideline was accompanied by a detailed
description and further annotated along several dimensions, including the primary stakeholders affected, the types of technology problems addressed (e.g., access, trust, engagement), and the
Community of Inquiry dimensions—cognitive, teaching, and social

DIS ’26, June 13–17, 2026, Singapore, Singapore

Reddig and Smith et al.

presence [27]—that the guideline supports. These annotations supported later analysis and application of the guidelines, including
the heuristic evaluation described in Section 6.

5

Design Guidelines

Table 2 shows the 19 guidelines that resulted from our analysis.
Each guideline represents a systematic distillation of the multi-level
thematic groupings described in our methodology, moving from
specific stakeholder concerns to higher-order design principles.
By grounding each guideline in the recurring needs and friction
points surfaced across various adult learning contexts, we ensure
they remain actionable and relevant to the practical challenges
of educational technology design. As described earlier, AI-ALOE
adopted Garrison et al. [27]’s Community of Inquiry as a core
framework to guide the design of its learning tools. Accordingly,
these guidelines are labeled according to the associated Community
of Inquiry element. Each guideline is also labeled by the stakeholder
most directly affected if it is not satisfied, as well as by the potential
technological issues that could be mitigated through its application.
Figure 3 illustrates how the guidelines overlap with Community of
Inquiry dimensions. In the supplementary materials, we provide the
full affinity diagram, including the stakeholder needs statements
and supporting themes behind each guideline.
We only labeled the stakeholders who would experience an immediate impact if the guideline is not addressed. For example, guideline G4 says that “AI tools should be easy to understand and frictionless to use”. Making a tool easy to understand will be an immediate
benefit to the end users, the learners and instructors. If the tool
is not easy to understand, users may stop engaging with the tool.
Though the researcher is not immediately impacted by this issue,
they will be affected in the future when they are unable to collect
research data due to low engagement and adoption. We chose not
to include the researcher in the stakeholders because, with downstream effects, nearly every stakeholder could be impacted by every
guideline which would lead to a trivial taxonomy. To preserve the
usefulness and clarity of the guidelines, we labeled each guideline
with only the immediately impacted stakeholders.
In our supplementary materials, we also present the low-level
themes and mid-level themes that support each design guideline in
the full affinity diagram. We believe that by reviewing the themes
surfaced from concerns of stakeholders, future researchers and developers can generate practical solutions to meet the guidelines
based on specific real-world concerns. In addition, reviewing the
supporting themes could help apply the guidelines to broader contexts, beyond the ones from which they were derived.
Across the 19 guidelines, we observed clear differences in how
concerns were distributed among stakeholder groups (Figure 4).
Instructors most frequently commented on the usability of AI tools
(G4) and students most frequently commented on the amount of educational support provided (G13), but both stakeholders commented
heavily on these two dimensions. Instructors also frequently highlighted the alignment of AI tools with their personal instructional
approach (G16) because using AI tools with contrasting approaches
can be a challenge. Student comments were also particularly concentrated on guidelines addressing building community (G19) and
social competencies (G18), indicating a strong concern for how AI

2481

will shape peer and professor interaction. In contrast, researcher
comments were more prominent in guidelines tied to instructional
best practices (G8, G9, G10) and using data for learning engineering
(G14). The category of Learning Theories (G3) was also only a concern for researchers and not mentioned by the other stakeholders.
While several guidelines received equal attention from all three
groups (G2, G4, G5, G13), the uneven distribution demonstrates
that different stakeholders prioritize different dimensions of AIsupported learning. The guidelines collectively provide a broad
representation of the concerns raised across all stakeholder groups.
Guideline G1 (Data Practices) was not assigned a Community of
Inquiry component. This guideline was derived mainly from student
concerns about not knowing what data is being collected, how it
is stored, and who can access it. Since aligning AI technologies
with G1 would not increase student cognitive, social, or teaching
presence, we elected not to force G1 into the Community of Inquiry
framework. Students expressed a desire to have meaningful control
over their data, to review, manage, or delete it. AI technologies
that use third-party Large-Language Models need to be transparent
with users in an educational setting on what data is being sent,
who has access to their data, and what they are using their data
for (“If I have to share some sensitive data, where is the data going
to? Who has access to it? So that’s completely unknown currently.
That information [is] not available anywhere. And moving forward
as we are integrating chatGPT with it, it’ll be going to again a third
party vendor.” ). Higher education students have an implicit trust in
their institution to handle data ethically [75], but that trust does
not extend to data collected by a third-party educational tool [69].
Clear communication about data use can build trust, reduce user
anxiety, and empower students as active stakeholders in how their
information is being handled [64].

5.1

Cognitive Presence

Sustained engagement in an educational experience allows learners
to construct meaning, and is a core component of cognitive presence.
Adult students and instructors need technologies that allow them
to engage in educational experiences despite the constraints of their
daily responsibilities. Accessibility and flexibility (G2) emerged
as concerns for adults, as both learners and instructors juggle limited time, resources, and devices. Students emphasized the need for
tools that accommodate learning differences, are mobile-friendly,
and are usable without strong internet access. These features let
adults fit learning into their busy lives instead of fitting their life
around learning. Instructors similarly reported limited class time
and highlighted the value of AI for providing on-demand support,
especially outside normal hours (“I might be up at 3:00 AM and if
I post a question on the discussion board but you’d usually have to
wait until like 8:00 AM 9:00 AM to get a response ‘cause no one’s up
at 3:00 AM”). By aligning with universal design principles to make
technology accessible, AI tools can make learning more flexible,
inclusive, and sustainable for everyone.
Building technologies with a strong Theoretical Foundation
(G3) was a concern voiced entirely by the research teams. The development teams behind the AI technologies aimed to ground their
tools in established theories, such as self-determination theory—to

Guidelines for Designing AI Technologies to Support Adult Learning

DIS ’26, June 13–17, 2026, Singapore, Singapore

Figure 3: Design guidelines organized across three overlapping Community of Inquiry dimensions: Cognitive (learner experience
and understanding), Teaching (instructional design and alignment), and Social (community and interpersonal development).
Shared regions indicate principles that bridge domains, while G1 (Data Practices) sits outside the CoI framework.
maintain motivation through autonomy, competence, and relatedness [21]—or multimedia learning theory—to improve engagement
and retention by using multiple representations of content [55].
Although other stakeholder groups mentioned motivation, critical thinking, or active engagement, instructors and students never
explicitly discussed the importance of theoretical or empirical evidence for the effectiveness of an educational intervention. Nevertheless, AI technologies should be grounded in evidence to ensure they
effectively support desirable outcomes, such as comprehension,
motivation, and knowledge construction.
Learning already demands substantial cognitive effort, making
it important for learning technologies themselves to be easy to use.
Guideline G4 (Frictionless) strives to make AI tools intuitive, so
students and instructors can focus on learning. Brief, just-in-time
onboarding (e.g., tooltips, short videos, examples) should supplement the user interface to clarify expectations and common actions
(“As funny as that might sound, whether there be a video, maybe like
an instructional video, just more information on it because I think
there was some confusion on how to actually use [the tutor].” ). Adults
need brief, contextual, and action-oriented onboarding to support
confidence and rapid sense-making [78]. Importantly, this guideline
addresses usability-related friction rather than eliminating productive struggle that supports learning. Reducing friction in how a
tool is accessed and operated builds confidence and trust in the
AI technology. According to the Technology Acceptance Model,

2482

perceived ease of use is a primary predictor of users’ confidence,
trust, and willingness to adopt new technologies [54].
Students heavily commented on the need for Transparency
(G5) in AI learning tools. Learners wanted explanations for why
they received the guidance they did, especially when AI tools tell
them they are wrong. The tools should provide support for learners
to construct mental models for how the tool operates (“I would like
to see the inner workings or...what are the data points that essentially
are being used to make these recommendations.”). Prior work on
explainable AI in education shows that explanations enable learners
to understand how AI systems work, judge the credibility of their
outputs, and regulate their own learning [40]. Encouraging selfregulation is essential for adult and self-directed learners [58].
Along with designing tools that are backed by learning science
theories, researchers also stressed the importance of designing for
Cognitive Load Management (G6). Learners benefit when tools
reduce distractions and focus attention on what matters most. Irrelevant or incongruent information places unnecessary demands on
working memory and can impair comprehension, problem solving,
and memory, particularly for older adults who are more susceptible
to distraction [84]. Tools that align design features to instructional
content and assessment can reduce extraneous demands on working
memory to allow more cognitive resources directed toward learning. At the same time, certain design elements, like interactivity
in digital environments, may introduce extraneous demands while

DIS ’26, June 13–17, 2026, Singapore, Singapore

Reddig and Smith et al.

ID
G1

Guideline
CoI
AI tools should be open about data practices and share governance with learners.

G2

AI tools should be accessible and fit into the busy lives
of instructors and learners.
AI tools should be informed by learning science and
learning theories.
AI tools should be easy to understand and frictionless to
use.
AI tools should be transparent and explainable.
AI tools should minimize cognitive load by presenting
essential information clearly and simply.
AI tools should provide learners with agency over their
learning.
AI tools should cultivate learners’ metacognitive and
critical thinking skills.
AI tools should support learners’ motivation and cultivate self-efficacy.
AI tools should encourage active, constructive, and interactive engagement over passive consumption.
AI tools should personalize learning based on learners’
knowledge, skills, and abilities.
AI tools should offer meaningful challenges that are
aligned with learners’ context, goals, and career.
AI tools should provide accurate, contextualized help
when learners need it.
AI tools should provide actionable insights to instructors,
learners, and researchers.

G3
G4
G5
G6
G7
G8
G9
G10
G11
G12
G13
G14
G15
G16
G17

AI tools should integrate with users’ existing educational
technology ecosystem.
AI tools should align with instructional practices and
course content.
AI tools should maintain the human touch and supplement rather than replace human instructors.

Cognitive
Cognitive

Stakeholder
Developer,
Researcher,
Learner
Teacher,
Learner
Researcher,
Developer
Teacher,
Learner
Learner
Developer

Cognitive

Learner

Cognitive

Learner,
searcher
Learner

Cognit
