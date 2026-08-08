---
source_url: https://doi.org/10.1007/s10639-026-14082-1
ingested: 2026-08-08
sha256: be82aa6fd89bdbff247a48ec5aebf25e06aaa173e29e6294fe7eb9f6063ada6f
---

Education and Information Technologies
https://doi.org/10.1007/s10639-026-14082-1

Interactive learning dashboards: rethinking learning
visualisations as engagement tools
Laura Graf1 · Patrick Bassner2 · Maximilian Anzinger2 · Felix Dietrich2 ·
Stephan Krusche2 · Oleksandra Poquet1
Received: 6 March 2025 / Accepted: 24 June 2026
© The Author(s) 2026

Abstract
Learning Analytics Dashboards (LADs) have shown limited impact on student
outcomes, often functioning as static visualizations. In this paper, we present a
case study reimagining LADs as interactive tools that promote student engagement.
Namely, we extend a conventional LAD with a Large Language Model (LLM)powered pedagogical agent and an interactive Judgement of Learning (JoL) feature to support students’ awareness of their study progress. The pedagogical agent
engaged students in conversations about their learning data, while the JoL feature
required self-assessment before viewing system metrics, encouraging learners’ calibration of their judgement. This interactive LAD (ILAD) was implemented in a
university programming course with three randomly assigned conditions: no agent,
a “telling” agent providing information about learner data, and an “eliciting” agent
asking questions about learner data. The case study reports on the data collected
over five weeks from thirty students paid to regularly use the ILAD within their
computer science course. Data analysis from this small sample showed that the
students in the “elicit” condition engaged in more reflection and more accurately
judged their own mastery. This study highlights ILADs’ potential to foster student
engagement with learning data and improve metacognitive outcomes, offering new
directions for learning dashboard design.
Keywords Learning analytics · Case study · Learning analytics dashboards ·
Judgement of learning · Pedagogical use of LLMs · Large language models ·
Interactivity · Metacognition

Extended author information available on the last page of the article

Education and Information Technologies

1 Introduction
Learning Analytics Dashboards (LADs) are digital tools that present data and feedback about student learning. They typically aggregate indicators about learners’
progress, engagement, and context into visualizations (Shum & Crick, 2012). Studentfacing LADs—the focus of this study—aim to facilitate learners’ self-reflection and
decision-making (Jivet et al., 2020). As learning becomes increasingly self-directed
and supported by diverse digital resources (Bates, 2015), LADs have been shown to
play an important role in providing personalized support (Wang et al., 2024) and can
further support strategic learning behaviors, leveraging the wealth of data collected
in modern learning environments.
Despite the great promise, the evidence of LADs’ effectiveness remains mixed.
Most studies only show moderate impact on learning outcomes (Kaliisa et al., 2024).
An important aspect of making LADs more effective is to design them from the perspective of pedagogy (Paulsen & Lindsay, 2024). Among key pedagogical principles
is the premise that in order to learn, individuals need to integrate new information
into their existing knowledge, rather than solely be exposed to new information (Chi,
2021). Most LADs, however, use principles of visualization to improve exposure
to information, but do not use the principles of pedagogy to improve how learners
engage with analytics to learn from them (Jovanovic, 2024).
Interactivity is among pedagogical principles known to improve engagement. Here
we define interactivity as a tool’s affordance to engage learners in two-way actions
that build on each other reciprocally. Intelligent tutoring systems (ITS) researchers
have thoroughly investigated the integration of interactivity into learning technologies, positioning interactivity as a key mechanism for deeper cognitive engagement
with domain-specific content (Chi & Wylie, 2014; Chi et al., 2009). When applied
correctly, in tutoring contexts, interactivity can improve learning gains by prompting
critical thinking, decomposition of problems, recall, and self-explanation (VanLehn,
2011). The use of interactivity could also be extended from domain-specific tutoring
contexts to LADs. In this different context, interactivity could help learners cognitively engage with the data about their learning, as they calibrate own perceptions of
the study progress.
Interactivity has been introduced to LADs but mostly with the focus on improving
data presentation or narrating content (He et al., 2024; Han et al., 2023; Yan et al.,
2024; Pozdniakov et al., 2023). For instance, Yan et al. (2024) developed a chatbot
to provide context-specific explanations and summaries of the LAD data, to support
understanding of visualizations (Pozdniakov et al., 2023). However, a mere understanding of visualisations is only one potential outcome. Beyond understanding the
visualisations, learners further need to interpret them in relation to own study experiences and draw conclusions about how they want to study that would shape their
future actions. Not much research thus far has focused on examining how LADs can
facilitate cognitive processes to support such takeaways.
To explore how such cognitive engagement can be facilitated with a LAD, the
study describes the development of a pedagogically informed interactive LAD
(ILAD) and investigates how its interactive features facilitate cognitive engagement
with data. To this end, we drew on intelligent tutoring research and psychological

13

Education and Information Technologies

research to embed two interactive features within an existing dashboard. First, we
integrated a pedagogical agent, i.e. a chatbot with access to learning analytics and
context knowledge, based on a Large-Language-Model (LLM) to help students discuss their dashboard insights via interactions. We evaluated how this agent facilitates
learner engagement with data under two prominent theoretically grounded pedagogical strategies in tutoring research (Chi, 2009): asking learners questions about data
on a LAD (elicit condition) vs. providing learners salient information about data on a
LAD (tell condition). Secondly, drawing on psychological research, we integrated an
interactive feature that, instead of just presenting progress of learners in the course,
required students to self-assess their learning before presenting the corresponding
metrics on the LAD. This self-assessment is premised on the metacognition research
around Judgement of Learning (JoL), shown to improve self-regulation in multiple
psychological studies (Hartwig et al., 2012; Mengelkamp & Bannert, 2010; Rhodes,
2015). The integration of these two pedagogical strategies has not been applied to a
LAD, and our study explores its potential.
To examine the integration of interactivity within a LAD, the study reports on a
theoretically grounded case study describing triangulated patterns of student ILAD
use in a naturalistic setting. Data were collected from thirty computer science students incentivized to use the ILAD within their authentic course context. Using these
data, we conducted an in-depth examination of how students engaged with the interactive LAD system over five weeks. Dashboard interactivity was implemented with
(1) a JoL prompt followed by learning analytics feedback and (2) an agent that either
elicits or tells learners about their learning to foster engagement with the LAD. To
explore the potential of ILAD, we analysed learner engagement in both elicit and
tell condition, namely (1) how students calibrated their JoL in these two scenarios,
and (2) if students interacted with these two agents differently. The trends observed
in our analysis suggest that the pedagogical strategy to elicit answers from students
about their learning data facilitated reflective thinking and a better calibration of JoL,
signaling meta-cognitive activity that can support transfer of information to student
future behavior. As a case study prioritizing ecological validity (Yin, 2018), this work
produces empirically observed hypotheses about how LADs might be redesigned
beyond visualizing data, toward supporting students’ engagement with learning analytics through pedagogical interactivity. In its contribution, the paper advances the
state of the art in how LADs are conceptualized to actively engage learners with
LAD content.

2 Literature review
This section reviews prior work on LADs and interactive LADs and the limitations in
their conceptualization. We first discuss that LADs over-rely on one-way broadcasting of information, which is problematic as it does not support learning from data. We
then summarize existing LAD designs that use interactivity, such as user-adaptable
views and explanations. We then problematize the current state of LAD interactivity
by arguing that this interactivity is focused on making information accessible but
insufficient to promote learning from data. To address this problem, we propose to

13

Education and Information Technologies

also consider interactivity that supports reciprocal engagement where learners relate
the data to their experience. We propose to design interactive LAD features that build
on (1) the pedagogical strategies for interactivity from intelligent tutoring research,
known to enhance cognitive engagement with subject matter content and (2) the
judgement of learning process from the metacognitive research.
2.1 Research problem
Learning Analytics Dashboards (LADs) are increasingly recognized as tools for supporting student learning, yet their potential as interactive pedagogical instruments
remains under-explored. Traditionally, LADs have been designed as static visualizations of learner data and feedback. Evidence suggests that static designs have had
limited impact on learning outcomes (Kaliisa et al., 2024). A recent systematic review
by Paulsen and Lindsay (2024) reinforces this point, showing that most LAD implementations merely inform students of their progress with fewer than 1% designed to
foster cognitive engagement. This finding is critical because learning sciences consistently demonstrate that features promoting cognitive engagement are more effective in supporting learning than simply displaying information (Paulsen & Lindsay,
2024). When students cognitively engage, they integrate presented information into
own mental models and evaluate its relevance and consequences for their studies
(Moreno & Mayer, 2007). Given such importance of active engagement, strategies to
transform LADs into tools that engage students, rather than only showing static data,
remain underdeveloped.
2.2 Prior work on interactive lads does not tackle cognitive engagement
In response to the problem of static LADs, recent research has focused on improving
interactivity of LAD interfaces, particularly to support users with lower visualization
and data literacy. Recent research has added options for narrating the visualizations
via text or personalizing their presentation. This allows learners to engage with the
LAD interface and modify content and format of the data presentation based on their
priorities and preferences. LAD customization is implemented through options for
data filtering, zooming, or selection functionalities (Barbé et al., 2024) and is crucial
for learners with different data literacy since LAD presentation affects cognitive load
of viewing the dashboard (Pozdniakov et al., 2023).
Alongside these personalization options, recent work has introduced LLMs to support interface interactivity in LADs (e.g. Yan et al., 2025). LLM integration in LADs
marks a significant technical advancement in how interactivity can be implemented.
LLMs can dynamically interpret diverse data sources and generate context-sensitive,
natural language explanations for any request, unlike earlier approaches that relied
on predefined scripts or static templates. Therefore, they act as a powerful tool to
reduce high cognitive load and accommodate users with low visualization literacy. A
prominent example is that of Yan et al. (2024) who implemented a LAD that dynamically generates additional explanations of dashboard content for learners who need
it. A further study of this integration showed the positive effect of the dialogue-based
interactions on visualization comprehension (Jin et al., 2025).

13

Education and Information Technologies

As can be seen from this brief overview, LAD research continues to focus on interactivity of an interface to aid data comprehension, which is undoubtedly important,
yet limited in supporting learners to integrate this information into their experiences
of learning. The current approaches to LAD interactivity are premised on the visualization and human-computer interaction (HCI) literature where interactivity serves
to improve ease of viewing data (Dimara & Perin, 2019). Interactivity in HCI often
refers to a user’s ability to manipulate visual representations of the data the user is
exploring (e.g. filtering, zooming, details-on-demand) (Dimara & Perin, 2019). To
further extend and advance this approach, we draw attention to the meaning of interactivity as defined by the learning sciences: involving students in reciprocal actions
that promote engagement and deeper learning (Chi & Wylie, 2014). Hence, interface
in LADs needs to be re-imagined to include interactivity in a pedagogical sense, the
one that promotes deeper cognitive engagement with LAD data.
2.3 Pedagogical strategies to promote engagement with LADs
Strategies that promote cognitive engagement with LAD data through interactivity
are underexplored in prior LAD research. To address this problem, this study presents
an interactive LAD that cognitively engages students with the data on a LAD in a
way that allows learners to make connections between data and their own experiences, i.e., to effectively learn from data (Wehlage et al., 1992). For this, we draw on
insights from educational research. We draw on (1) research on ITS interactivity for
more effective engagement with learning content and (2) psychological judgement of
learning research that can facilitate monitoring and evaluation processes.
Research in ITS has thoroughly examined the effect of interactions to promote
cognitive engagement. Pedagogically founded interactive strategies to promote
meaningful cognitive engagement with given information in ITS are well grounded
in existing theoretical and empirical work in cognitive sciences. The ICAP framework (Interactive, Constructive, Active, Passive; Chi & Wylie, 2014) categorises
learning activities according to the level of cognitive engagement they require.
Within this framework, interactive activities produce the deepest learning outcomes.
Elicitation strategies that prompt students to respond can promote deeper engagement with the material, integration with prior knowledge, and metacognitive monitoring of comprehension (Chi & Wylie, 2014). The seminal work of Chi et al. (2001)
offered extensive evidence that eliciting student responses, such as reasoning about
presented information, is more effective than merely telling them the information.
Evidence about the effectiveness of such tutoring strategies only relates to learning
subject matter content, not information on a LAD. Our study investigates whether
this principle is also applicable in the context of LADs. This would point to new ways
for LADs to support students’ understanding about their learning.
In addition to the aforementioned tutoring strategies, interactivity could also
be implemented by prompting for students to self-assess their progress on a topic
or skill. This strategy has high potential to be pedagogically effective, given that
research shows judgement of learning is effective for activating monitoring and evaluation processes that guide future study decisions (Hartwig et al., 2012; Mengelkamp
& Bannert, 2010; Rhodes, 2015). On a LAD, the analytics generated from logs and

13

Education and Information Technologies

performance metrics could serve for feedback to students’ subjective judgements.
This feedback could help reveal perception discrepancies and thereby trigger cognitive conflict that stimulates reflection (Mezirow, 1998) and adaptation of learning
strategies. Training students’ judgement accuracy is critical for their study skills. If
their judgement is inaccurate, they will spend time studying what they already know
or not restudy something they should. By embedding a JoL feature on the dashboard,
a LAD can potentially provide an effective reflective exercise rather than just display
information. Hiding the system data about student mastery until the student submits
their JoL could serve as a natural motivation to submit the JoL.
2.4 This study’s focus
We have outlined two approaches for introducing pedagogical interactivity into
LADs: a pedagogical agent and a JoL feature. At the moment of this writing, we are
not aware of other studies that have evaluated how these two pedagogical approaches
on a LAD support student engagement with it. To evaluate the relationship between
different pedagogical strategies and engagement, we randomly assign students to one
of three implementations of the LAD: LAD with no pedagogical agent, LAD with
a pedagogical agent that elicits information from a dashboard from the learner, and
a pedagogical agent that tells learner information on a dashboard. We then describe
student behaviour across these groups, to gain insight into how the pedagogical strategies might differ as per their potential for student engagement.
To describe cognitive engagement with the ILAD, we analyse the process of
learner interaction with it. The case study therefore presents exploratory analysis of
the trends in content of learner-LLM interactions with different pedagogical agents
attached to the LAD (RQ1). Further, we analysed patterns of cognitive engagement
with the dashboard data with the focus on the change in the accuracy of students’
judgement of learning as they made sense of data using different randomly assigned
pedagogical agents (elicit, tell, and control) (RQ2). The change of accuracy is a major
outcome of LAD’s use, as it is a LAD’s core purpose to help students gain an accurate
understanding of their learning so they can adapt it accordingly. This focus differs
from the ones taken up in mainstream research on AI-driven educational tools such
as AI-supported conversational tutors and feedback systems (Holmes et al., 2019;
Zheng et al., 2025). That research explicitly focuses on using AI to provide feedback
on the domain-specific content. However, a dearth of work, if any, has examined if
LLMs can be configured to target metacognitive outcomes through cognitive engagement with one’s own learning data. Our study contributes to this emerging space by
examining how indicators related to metacognitive engagement (rather than contentknowledge gains) differ across conditions with varying pedagogical configurations of
an LLM agent on a LAD.
An exploratory case study presented in this paper examines a student cohort interacting with an interactive dashboard, collecting chat interactions and JoL accuracy
data to understand in-depth how the ILAD conditions may be affecting student learning. A real course serves as the setting to explore trends in student ILAD interactions
in relation to the different agent strategies. These trends could serve as hypotheses
for larger-scale studies of how future learning analytics dashboards can move beyond

13

Education and Information Technologies

information delivery toward pedagogically meaningful interaction. Our study contributes a conceptualization, implementation and evaluation of a LAD with pedagogically designed interactive features and evaluates students’ engagement with
it in a real course under the different conditions, answering the following research
questions:
RQ1 What differences are observed in the patterns of learners’ interactions with different LAD-embedded pedagogical agents?
RQ2 How did students’ accuracy of judgement of learning evolve and how did this
vary across pedagogical strategies of the LAD-embedded agent?

3 Methods
3.1 Context
This study adopts an embedded single-case design (Yin, 2018) in which an introductory course on algorithms and data structures of a highly competitive computer
science university programme in a European university constitutes the bounded
case. This design allows investigation of how LAD interactivity operates in practice,
which would be difficult to observe in laboratory settings. In line with the principles
of case studies, which are often used when exploring naturalistic phenomena (Cohen
et al., 2017), we consider both process and outcome of ILAD use. Describing patterns
within a real course setting is the primary analytical goal at this stage of research
where the priority is understanding how pedagogical agent strategies affect engagement with a LAD that is embedded in a real learning context, rather than establishing effect sizes. The case study serves to explore the potential of our theoretically
grounded implementation, since it allows in-depth examination of process data
(interaction logs, JoL trajectories, and self-reports) in an authentic setting that a lab
study or large-scale survey could not capture. Longitudinal data collection and randomly assigned conditions, following an embedded single-case design (Yin, 2018),
offer insights to trends of how students interact with the ILAD in a real course and
what processes may be triggered via the interactions.
Thirty students of this course volunteered to participate in our study and were
compensated through a payment. They were assigned to one of three LAD conditions (telling, eliciting, or no agent), forming embedded sub-units of analysis within
the case. Their interactions were recorded over five weeks. The ILAD was made
available to the students from week eight of the course. This period was chosen
since the students have already gotten into their course activity and still had mandatory exercise submissions. We stopped collecting the data once the exam phase has
commenced. JoL functionality and the LAD were available to all students. Surveys
were used to control for individual characteristics of the students across different
conditions, which is important in evaluating our intervention. Interactive features
were integrated into an existing dashboard of a custom-made LMS where instructors
upload weekly assignments that are assessed automatically. This was a mature LMS,

13

Education and Information Technologies

used by thousands of students across several universities. It already included an LLM
as support for programming concepts.
The study was implemented in this authentic setting where one instructor teaches
large groups of students while introducing many challenging exercises and concepts.
In such a setting, it was essential to reduce the disturbance of teaching activities,
hence only volunteering students were asked to participate in the data collection and
compensated with payment. Given the demanding nature of the study programme, no
special arrangements were made to introduce the features to the students. To make
the use of the ILAD more visible to the students, it was made central to the students’
study experience in this course. ILAD was set as a landing page of this heavily used
platform and not an external tool or tab. The use of the added features was briefly
explained in an email sent to the recruited participants. The instructions they received
were minimal: they were only requested to use the ILAD at least once a week for any
three weeks during the five-week study. These instructions minimised the constraints
of student behaviour, allowing us to explore how students would naturally interact
with the tool. Such focus on natural, diverse interactions with the ILAD mitigates
aspects of student self-selection into participation and financial compensation. Students used the dashboard in relation to their course activities, offering a more authentic view of ILAD affordances than from a lab study.
Data collection has been approved by the Data Protection Office at the BLINDED.
In addition, the study has been approved by Ethics Committee at the BLINDED
(#nmFG_2024-48-NM-BA). The invitation to the study informed potential participants about the commitment required, payment, use of their data, options to revoke
consent, and contact details of the researchers and data protection offices. The LMS
also provided an option in the settings called ’Activity tracking’, where all students
could deactivate sharing their data about the use of the platform.
3.2 Description of the interactive features of a student-facing LAD
The dashboard (Fig. 1a) consisted of the common form of visualization of students’
learning analytics (LA) in a line graph, a section showing performance metrics for
particular competencies defined as learning outcomes for the course and, for the two
thirds of students not in a control group, a chat section.
3.2.1 LA metrics, competencies, and JoL feature
The analytics on a LAD presented to the students were chosen after a literature review
on learning metrics and cluster analysis of learning logs in previous courses. Timeliness, i.e. how timely the submissions were, often characterised successful students,
hence, submission lateness visualisation was added to the LAD. Other LA metrics
included previous performance and class average over ten most recent exercises.
Competency in the custom-made LMS represents a thematic section comprised of
topics and skills matched to the materials that the students needed to study within
recommended dates each.
Figure 1c provides an overview of competencies, with indicators for how many of
the respective exercises and lecture materials the student has completed or viewed.

13

Education and Information Technologies

Fig. 1 Overview of interactive dashboard with its segments: a) total dashboard view, b) LLM segment
presented in more detail, c) JoL segment presented in more detail (a question mark next to the progress
bar informs the user that they can judge their learning for that competency. Once the self-assessment is
done, the system rating is shown in the form of the stars, complemented with the ring with red indicative of mastery and green of progress, d) LA segment presented in more detail

The icons in front of each competency indicate Bloom’s taxonomy, i.e. remember,
understand, apply, analyse, evaluate, or create (Krathwohl, 2002). Initially, the dashboard hides mastery level and progress analytics, estimated by the LMS.
Equation 1 describes the computation of the progress (P), Confidence (C), and
mastery (M) for each competency. The progress is calculated from the weighted
absolute progress for exercises (E) and lectures (L) associated with that competency.
The absolute progress for exercises (Pe) is the number of achieved points over the
maximum achievable points, and for lectures (Pl), the number of viewed lectures (Lc)
divided by the number of available lectures (L). The system’s confidence (C) is based
on three heuristics: the student’s improvement over time (hrecency ∈ [− 0.25,0.25]), the
difficulty level of the achieved points (hdifficulty ∈ [− 0.25,0.25]), and how fast students
have solved the exercises (there is no penalty for slow submission) (hspeed ∈ [0,0.25]).
The mastery level (M) is the progress multiplied by the confidence factor. Those metrics already had been part of what was displayed on the LMS previous to the study.

13

Education and Information Technologies

The interface hides the system’s rating of a competency until the students make
their JoL for it. When the student’s progress on a competency is over 80% of their
average progress or it is the day before the recommended completion date, the student is prompted by the UI to rate their mastery of the competency. They can re-rate
themselves whenever they have made additional progress. Once a student submits
their 5-step scale JoL, the system’s estimations of mastery and progress become visible. The LAD includes learning material recommendations to improve the mastery
of the respective competency below the rating interface, with an option to view all
exercises and material related to the competency. While the competency rating is hidden while the student judges their learning, the line graph of their exercise scores and
lateness is always visible on the page, so students can regard those metrics in the process of making their judgement. The option to chat about their studies also remains
when students are prompted to submit their judgement. While the interactions with
the dashboard (JoL, chatting) were recorded via system logs, the viewing of the static
LA visualisation had to be evaluated via participants’ self-reports.
3.2.2 LLM implementation
The learner and course data-informed LLM chatbot is powered by OpenAI’s GPT 4o.
We adopted the ReAct approach proposed by Yao et al. (2023), combining the Chain
of Thought (CoT) approach and tool use. Guardrails to prevent students requesting
solutions to their exercises or wasting server capacity by misusing the LLM were also
implemented (Authors).
Chain of Thought Prompt. The agent uses a CoT approach, where it iteratively
performs small thinking steps to answer a message. CoT has shown increased performance compared to traditional prompting (Wei et al., 2024).
Agentic tool use. The agent did not receive all LMS data in a single prompt to
ground conversations in course-specific evidence; instead, it retrieved the specific
learner or course information through predefined tools. Tool use with LLMs has
proven effective (Parisi et al., 2022) and allows the agent to load data on demand,
ensuring that the final prompt only includes required context, as LLMs perform
better with lower context lengths (Liu et al., 2023). We created a tool-using agent
with LangChain. The tools of our agent include (1) Retrieving a list of exercises, (2)
Accessing exercise scores and submission timestamps, (3) Fetching a list of competencies, including the users’ progress, mastery, and Judgements of Learning (JoL)
values, and (4) Retrieving lecture content from slides if specialised knowledge is
needed. The number of requests made to the LLM per user message can differ, ranging from a single request for straightforward questions to up to ten requests for more
complex thought processes involving multiple tool calls.
Role Prompting. The LLM is assigned the role of a tutor assisting students. Role
prompting increases the output quality compared to standard zero-shot prompting
(Kong et al., 2023; Wu et al., 2023) while also enabling the chatbot to explain its
purpose to students who inquired about it. The initial system prompt instructs the
LLM to take on the role of helping students reflect on their study behaviour, strategies, and progress.

13

Education and Information Technologies

We created two versions of the role: the eliciting agent, which primarily asks questions to provoke thought about the data, and the tell agent, which provides information directly and instead answers the student’s questions about their data. The two
role prompts were kept identical and differed only in the phrasing of pedagogical
strategy (asking questions vs. providing information). Both follow educational best
practices, such as avoiding providing solutions to exercises or code. The agent admits
gaps in their knowledge rather than giving wrong answers.
LLM Behaviour Configuration. Each day, when a student logged into the LMS
for the first time, the LLM chatbot sent them a message based on the student’s data,
offering relevant insights or questions to encourage reflection and engagement. Additionally, the system automatically approached the student with a message after they
submit a JoL rating to help them reflect on their performance immediately. Other
than that, the bot responded to students’ messages with answers, further questions or
further related information.
Prompting included specified instructions on using learner data: “Do not make
suggestions of what the student should do, because learning is complex and individually different. Your task is simply to ask questions (text for the elicit condition)/tell
the student (text for the tell condition) about their studies”. Instructions further
included a reminder not to give potentially wrong information. A system prompt with
course information was added, giving information on dates and content of the course
as context for conversations. However, dates for the specific exercises and more were
in the database of the course that the agent accessed independently when relevant.
3.2.3 Rationale for the deployment of large language models and ethical
considerations
The decision to utilize LLMs to implement a LAD interactivity feature to address the
research gap of how learner interactions vary between different pedagogical strategy
conditions stems from the unique affordances of the LLMs for this. Namely, LLMs
can interpret broad context information and generate natural language responses for
any request. They act as a powerful tool to implement responses following a pedagogical strategy prompting and allow a scalable way to add tutor-like interaction to
the platform.
However, deploying LLM-based interactive dashboards at scale introduces several
practical and ethical considerations that institutions must address before widespread
adoption. From an efficiency standpoint, LLM inference imposes computational
costs that increase with user numbers and interaction frequency. In our deployment,
each student message triggered between one and ten API calls, depending on query
complexity and the number of tools invoked. For large cohorts engaging on a weekly
basis, these costs compound rapidly and raise concerns about the environmental
impact associated with increased energy consumption. Beyond efficiency, accuracy
and helpfulness of answers are probabilistic (quantified in Sect. 3.2.4). This inherent
limitation of LLM-based pedagogical agents could be mitigated in future deployments through stricter output validation. Responsible deployment of interactive
learning analytics dashboards requires continuous monitoring and iterative refine-

13

Education and Information Technologies

ment informed by user feedback concerning student welfare, data privacy, and educational equity.
3.2.4 System evaluation
We conducted an evaluation of the agent response quality. We evaluated 284 randomly sampled LLM responses in terms of their sensibility. The proportion of faulty
LLM messages decreased in later weeks, likely because students learned to leverage the agent effectively. Overall, 13% of the randomly sampled LLM responses
were labelled as faulty (not fully matching the request by human common sense or
containing false or misleading claims). 37% of them were rated as likely very useful for the student. There is a shift of this ratio over time of use, indicating students’
improved understanding of what the chatbot is useful for: For interactions within the
first two of the five weeks of the study, the ratio of faulty LLM messages comprised
37%, and only 27% of LLM responses could be considered very useful in the context
of the conversation. Faulty responses often occurred when students made requests
outside the agent’s intended capabilities. Once students identified where the agent
interaction was more useful to them, they proceeded to use it in the manner that was
helpful.
To validate our design choice of hiding some analytics prior to students submitting their JoL, we asked about their motivation to use the JoL feature. Indeed, 83%
of the participants reported they were curious to learn how the system rated them
and submitted their JoL to see the system’s rating. An interesting additional insight
was that 70% of participants did not actively pay attention to the LA metrics on the
dashboard when judging their learning. This information is important in the context
of how an interactive LAD improves students’ judgement of their learning: Even with
little consideration of the actual LA graphs, students calibrate their judgement when
they were shown a system-generated rating after submitting their JoL.
Finally, reports of students’ perceptions of the opportunities for learning were positive. Students reported that both features made them reflect, the LLM feature more
so (78%) than the JoL feature (68%). 79% students reported changing their behaviour
after judging their learning, and only 47% adapted behaviour due to agent interactions, according to self-reports.
3.3 Analysis strategy
To evaluate potential differences in how pedagogical strategies support students’
engagement, we randomly assigned each student to one of three pedagogical agent
conditions. We then compared their engagement across the conditions, evaluating the
process across the 5 weeks rather than just an outcome to strengthen insights despite
the small size of the observed cohort. To ensure that the differences in their engagement are actually related to the pedagogical agent influence and not unequal characteristics of the students, we statistically examined whether the groups were balanced
in student characteristics. Prior to the deployment of the ILAD, we collected student
characteristics through the Motivated Strategies for Learning Questionnaire (Pintrich
& De Groot, 1990), specifically the sub-scales on Resource management, extrinsic

13

Education and Information Technologies

and intrinsic motivation. The resource management scale describes study habits like
regular study times and place. We used one-way MANOVA to test for statistical differences in the characteristics captured by MSLS, performance indicators and chatbot-use-related self-reports among experimental groups. We furthermore evaluated
whether certain student characteristics were related to feature usage patterns by looking at correlations among the characteristics and usage counts. These checks allow
us to interpret the observed trends as potentially reflecting the influence of the agents
rather than other confounding factors.
The first research question asks: What differences are observed in the patterns of
learners’ interactions with different LAD-embedded pedagogical agents? Although
the situated nature of the context limits statistical generalizability, we aimed for an
in-depth examination of how and why the agents’ pedagogical strategies affected
learners within this setting, generating empirically grounded hypotheses for future
investigation. To this end, we used log data from student-LLM interactions to investigate how they engage with the agent. For this purpose, we analysed a random sample
of learner-LLM interactions. We conducted an open bottom-up coding of 20% (over
300 messages) drawn one month into the study. Codes were assigned to two thirds
of the interactions, whereas the remainder could not be clearly labelled as the messages could not be unambiguously described by any category. The messages were
annotated by the first author with the conditions blinded. The coding categories for
messages were: directly exercise related messages, requests for external resources,
repeated clarification requests, course organization matters, planning and reflection. A second researcher unfamiliar with the study, was instructed about the coding
framework and coded a random sample of 15% of the messages previously assigned
a category. This inter-rater reliability check resulted in a Cohen’s Kappa = 0.8. The
number of learner messages in the ‘reflection’ category was compared across the two
chatbot conditions with a z-test to evaluate whether the pedagogical strategies of the
chatbot could scaffold students to reflect more.
The second research question asks: How did students’ accuracy of judgement of
learning evolve and how did this vary across pedagogical strategies of the LADembedded agent? To address this question, we (a) examined the change in how students judged their learning over the time of intervention. We then (b) looked at how
the judgement of learning ratings evolved for students who were exposed to different
pedagogical strategies. For a) we compared how students judged their learning differently throughout the intervention. Students submitted one or multiple JoLs per week,
for competencies that were related to the recently viewed lectures and submitted
exercises. Overall, 482 JoLs were submitted by participants. To evaluate students’
consistency, we compared the variance among three subsequent JoLs of a student
in the beginning, middle and end of the intervention. A change in consistency over
the time of ILAD use indicates a change in the cognitive processes related to how
the student evaluates their learning. This indicator cannot unambiguously show an
improvement in students’ understanding of their learning or another key outcome of
the ILAD, but it serves our understanding how students changed how they evaluated
their learning and thereby provided context for the interpretation of changes in JoL
accuracy.

13

Education and Information Technologies

For b), we compare the accuracy of students’ judgement of learning ratings across
the three pedagogical agent strategy conditions. Differences in accuracy improvements among the conditions indicate whether the pedagogical strategy applied in
the condition supports students’ cognitive engagement with their learning data in a
way that improves their judgement of their learning. Accuracy is measured as the
correlation of student to system ratings, as common for JoL accuracy calculation
(Mengelkamp & Bannert, 2010). We evaluated the correlation of JoL with all system
metrics of student learning, i.e. students’ progress, confidence and mastery—a combined metric considering both progress and confidence (see Sect. 3.2.1 for details
on system metrics). Random assignment of conditions allows evaluation of trends in
students’ JoL accuracy improvements in relation to the pedagogical agent condition.
Together with the process measures described in the section on RQ1, these trend
provide insights into the potential of the proposed pedagogical agents for meaningful
engagement with LADs.

4 Results
4.1 Individual differences between the students using ILAD
First, we analysed the data collected through the survey about student characteristics prior to the study, to rule out that differences observed in student behaviour
in different conditions were due to differences in student characteristics. One-way
MANOVA revealed no significant differences in self-reported MSLQ motivation
and resource management scores among the students assigned to different conditions
(Wilks′ Λ = 0.85, F(6,80) = 1.10, p = 0.367). Furthermore, there were no significant differences among condition groups in mean exercise scores of the period before the
intervention (F = 1.17, p = 0.33). Overall, the test for balance of student characteristics across the groups allowed us to interpret the outcome differences among the
conditions as effects of the pedagogical strategies, although sample size limited the
ability to claim significant differences in cognitive engagement outcomes, as elaborated in the Discussion section.
We also checked if items from the pre-study survey correlated with particular
engagement behaviour. The number of chats with the agent was higher among students who had reported high interest in learning strategy improvement, while their
number or messages per session was lower. The number of messages students wrote
was positively correlated with their mean mastery score (nStudents = 24, r = 0.47,
p = 0.04) and negatively correlated to students’ self-reported tendencies to work on
non-graded exercises (r=-0.59, p = 0.008). In sum, this confirms that self-regulated
students would exhibit specific use of interactive learning dashboards. In our case
these differences did not vary across the condition, but they do show a relationship between ILAD usage and individual characteristics to consider in future LAD
evaluations.

13

Education and Information Technologies

4.2 RQ1: What differences are observed in the patterns of learners’ interactions
with different LAD-embedded pedagogical agents?
To explore indicators of learners’ cognitive engagement across different agent strategies, namely elicit and tell, we analysed learner interactions, labelling them in an
open bottom-up coding process. Emergent categories in learner-agent interactions
were labelled as related to:
● Exercise: Interaction related to a concrete exercise the students were trying to
solve, e.g.: “So my problem is how to change a function to be used in the double
hashing” (To remind, this LLM was not designed to help them in solving exercises, as there is a separate LLM on the platform that tutors students on the
exercise page.)
● Organisation: Questions related to the course outside the study content, e.g.: “Do
you know where i can find example exams from past years or can you provide
them here?”
● Planning: Interactions related to student planning study activities, e.g.: “What
should i do today”.
● Reflection: Interactions with observations and feelings on past topics and activities., e.g.: “What’s the correlation between my time investment and scores?”
● Clarification: Interactions where students clarified their understanding for the
dashboard features or agent messages, e.g.: “What is the difference between the
competencies and the mastery?”
● External resources: Interactions where students asked for study resources, e.g.:
“Could you provide links to external sources to have an overview of the topic? I
prefer videos.”
Figure 2 presents the counts of messages for each of these categories, differentiated
by the pedagogical agent strategy conditions. Descriptive patterns indicate that with
the eliciting agent, students wrote more messages that contained reflection on their

Fig. 2 Number of messages students sent to the agent for each of the two pedagogical agent strategy
conditions (Elicit and Tell)

13

Education and Information Technologies

study activity. A two-proportion z-test was conducted to clarify if the difference in
the frequency of a reflection between the tell and elicit condition was statistically
significant (p < 0.05), revealing a z-statistic of 2.47 and a p-value of 0.013. Figure 2
further shows that students asked clarifying questions more in the tell version, and
used it more often to ask organisational details. The pattern of interactions with the
telling agent is straightforward and clearly indicates that the agent was used to seek
information, often followed by more questions.
4.3 RQ2: How did students’ accuracy of judgement of learning evolve and how
did this vary among pedagogical strategy conditions?
4.3.1 General evolution of JoL accuracy
JoL accuracy was analysed as an indicator of how students calibrated their understanding of their learning over time. The repeated JoL measures provided a processoriented perspective on students’ cognitive engagement with the ILAD. Concretely,
we explored students’ consistency in their judgement of learning over time and if this
judgement became more accurate. As shown in Fig. 3a, the variance among subsequent JoLs submitted by a student decreased over time, meaning consistency in how
the students rated themselves increased. This was calculated as the average of variance of each three subsequent JoL ratings of a student within a given time window,
averaged over all students. This suggests that students at first underwent a calibration
process and after some time judged their learning more consistently.
Figure 3b; Table 1 show how students’ ratings differed from the system mastery
rating for different competencies and different JoL values. To remind, the course is
structured into material related to a set of competencies, which get added weekly.
Therefore, student JoLs in a given week were a judgement for the competencies
mapped to the lectures and exercises they had recently studied. Figure 3b shows the
distribution of over- and under-confidence in students’ JoLs over different competencies. Most students are accurate in their self-judgement. For the first two competencies, i.e. the JoLs made early in the study, students primarily under-rate their mastery.
For the last two competencies, i.e. JoLs in the later study period, most of the ratings
were accurate. For the ratings from third to fifth competency, students tend to overrate themselves. Hence, we can see an evolution from under- to over-rating to accurate judgement over the time of the study.
Table 1 shows that students who rated their learning low, tended to under-estimate
their learning: In the row of JoL value 1 and 2, there is a high percentage of cases
where the system gave the student a higher score than that rating. However, most students in the course rated their learning very highly. This table, together with Fig. 3b,
give us an indication of which rating values had most impact on the statistics presented later on.

13

Education and Information Technologies

Fig. 3 Overview of judgement of learning ratings. a) Between-JoL variance over three time periods.
Mean and standard error of variance between each three JoL ratings made by a student during a specific time period, averaged over all students. The decrease in variance shows that student JoLs became
more consistent over time. b) Differences between a student’s JoL and LMS rating of student mastery,
aggregated for different competencies. Competency sequence aligns with progressive course topics

4.3.2 How did students’ accuracy of judgement of learning evolve differently for
different ILAD versions?
The second research question focused on the accuracy of Judgement of Learning
(JoL) ratings across different pedagogical strategy conditions to understand how JoL
accura
