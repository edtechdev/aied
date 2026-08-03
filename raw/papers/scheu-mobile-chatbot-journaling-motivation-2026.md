---
source_url: https://link.springer.com/content/pdf/10.1186/s41239-026-00589-7.pdf
ingested: 2026-05-07
updated: 2026-08-03
sha256: fed3744e60ca045b63cade332c5cee8c92120cd15367f401e13007a58228cb3a
---
# Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement

Sven Scheu, Simone N. Loeffler & Alexander Maedche (Karlsruhe Institute of Technology)

International Journal of Educational Technology in Higher Education (Springer), 23:15, accepted 30 Mar 2026. Open Access (CC BY 4.0). doi:10.1186/s41239-026-00589-7

Abstract
Journaling enables students to reflect on their learning processes and thereby
strengthen their self-regulation, a key competency for meeting academic goals.
Previous work has shown that students benefit from digital support when creating
learning journals, such as through mobile learning journaling systems. Yet, a major
issue with such systems is the rapid decline in user motivation and engagement,
often occurring after only a brief period of use. To address this challenge, we present
a mobile chatbot-based learning journaling system that guides students through
structured reflective journal entries and supports writing through an LLM-based
journaling assistant. The novel system combines (1) an example-based built-in course
that teaches reflective journaling through modeled responses with (2) an interactive
journaling assistant that scaffolds students’ entries by generating follow-up questions
and rewrite suggestions. In a randomized field experiment with 179 students using
the system over 22 days, we examined the impact of both design principles on
intrinsic motivation and behavioral engagement. While our results indicate that the
built-in course can increase intrinsic motivation, we find no evidence that the LLMbased journaling assistant improves intrinsic motivation. Regarding engagement,
both design principles provide benefits in different ways: the course shows a rather
constant positive influence, whereas the LLM-based assistant appears to form a
feedback loop with continued use, increasing engagement over time.
Keywords Self-regulated learning, Journaling, Chatbot, Motivation, Engagement
Introduction
Learning journals are a promising approach for engaging students in critical reflective
activities regarding self-regulated learning (SRL) and increasing the awareness of their
learning processes (Hiemstra, 2001; Hubbs & Brand, 2005; Luft et al., 2026; Nückles
et al., 2020). SRL describes learners as active participants in their learning processes
that can shape and develop their cognitive and behavioral actions in a successful way
(Boekaerts, 1999; Efklides, 2011; Schunk & Greene, 2018). Proficient self-regulated
learners employ cognitive strategies to improve their success in learning (Zimmerman
& Pons, 1986) and utilize metacognition to refine their learning processes continuously
© The Author(s) 2026. Open Access This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use,
sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the
source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article
are included in the article’s Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the
article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to
obtain permission directly from the copyright holder. To view a copy of this licence, visit http://creativecommons.org/licenses/by/4.0/.

Scheu et al. International Journal of Educational Technology in Higher Education

(Schunk & Greene, 2018). In practice, students often struggle with self-regulating their
learning, and only a fraction of learners are competent self-regulators (Barnard-Brak et
al., 2010; Ning & Downing, 2014; Valenzuela et al., 2020). Consequently, many students
fail to convert their intellectual capacities into academic achievement (Bjork et al., 2013;
Boekaerts & Cascallar, 2006).
Self-reflection is regarded as a prerequisite for students to effectively evaluate their
strengths and weaknesses and adapt their learning behavior accordingly. During SRL,
self-monitoring and self-reflection processes are crucial for the selection of appropriate
SRL strategies; They depend on individual characteristics, the subject manner, the current individual situation, and external circumstances (Broadbent et al., 2020; Schmitz
& Wiese, 2006). Learning journals are considered useful tools for engaging in SRL, foster self-reflective activities, and allow the writers to increase metacognitive activities
in their learning processes (Wallin & Adawi, 2018). However, to take full advantage of
these benefits, students need guidance accompanying the creation of their learning journals (Dörrenbächer & Perels, 2016; Fabriz et al., 2014; Lu & Wang, 2022; Pesonen et al.,
2020). Previous work has shown that students benefit from digital support when creating learning journals, such as through mobile learning journaling systems (e.g., Nepal
et al., 2024). Yet, a major issue with such systems is the rapid decline in user motivation
and engagement, often occurring after only a brief period of use (e.g., Wong et al., 2026).
In this work, we explore how mobile learning journaling systems should be designed
to better assist students in creating learning journals, especially by strengthening their
intrinsic motivation and maintaining engagement over time. Prior studies have explored
the potential of structured learning diaries for prompting the application of SRL strategies revealing that this approach alone cannot replace SRL trainings (see, e.g., Ewijk et
al. 2015; Fabriz et al., 2014; Perels et al. 2007; Schmitz & Wiese, 2006). We build on the
ideas of scaffolding and structured learning diaries by designing a mobile chatbot-based
journaling system that guides students through their journaling process. We argue that
chatbots are a natural advancement of the previous structured approaches because of
their adaptability, their role as a form of social support, and their ability to guide users
through their individual reflection processes (Brandtzæg et al., 2021; Feine et al., 2019;
Kocielnik et al., 2018; Lee et al., 2021).
A major advantage of mobile learning journaling systems lies in their seamless integration in daily life and their scalability. However, a well-known critical issue regarding their
voluntary use is the fading of engagement and subsequent dropout of the participants
after a few usage days (Baumeister & Vohs, 2007; Baumel et al., 2019). Thus, to address
this challenge, we articulated and implemented two design principles: (a) An examplebased built-in course and (b) a journaling assistant leveraging large language models
(LLMs) to support students in maintaining their intrinsic motivation and engagement to
keep their learning journals. In the present study, we evaluate the impact of the proposed
design principles and their instantiation on subjective and behavior-related motivational
constructs aiming to answer the following superordinate research question: What is the
effect of the proposed design principles implemented in a mobile chatbot-based learning
journaling system on students’ intrinsic motivation and engagement in keeping a learning
journal?.

Scheu et al. International Journal of Educational Technology in Higher Education

To investigate this question, we implement a fully functional system and perform a
randomized field experiment to explore the effects of the two proposed design principles
on intrinsic motivation and engagement as well as on SRL.

Background and related work
Learning journals

Journal writing emerged as a promising method to support self-reflection processes,
identifying behavioral patterns, cognitive organization, and processing of experiences,
as well as emotion regulation and stress management (Alt & Raichel, 2020; Greenleaf
Brown et al., 2022; Nepal et al., 2024; Nückles et al., 2020; Smyth et al., 2018). A learning journal is a tool for students to record their “thoughts, reflections, feelings, personal
opinions, and even hopes or fears during an educational experience” (Hiemstra, 2001,
p. 20) and by doing so, the learning journal helps students to reflect on their learning
(Hubbs & Brand, 2005; Miller, 2017). In the long run, journaling supports students in
becoming more aware of their learning practices (Broadbent et al., 2020) and enables
them to identify their learning gaps and comprehension difficulties (Luft et al., 2026;
Nückles et al., 2020). However, it should be noted that a learning journal is not a simple
recollection of past events like a learning diary. Instead, the defining element of learning
journals is that they include reflection as part of the creation process (Fabriz et al., 2014;
Park, 2003). In addition, the creation of a learning journal is not a single reflective action
but the cumulation of many reflective entries about the entire learning process of the
writer over multiple learning sessions (Moon, 2019; Nückles et al., 2009). The journal’s
creation can help students become more cognitively aware of their actions during learning (Lindroth, 2015) by supporting the learners to connect their “thoughts, feelings, and
actions” (Hubbs & Brand, 2005, p. 62) retrospectively, without being pressured to act on
practical issues immediately (Morrison, 1996).
Journaling methods have been used frequently and successfully with nursing students to promote reflection, clinical judgment, and emotional competence (Greenleaf
Brown et al., 2022). Moreover, in recent years, reflective journaling has been applied in
combination with wearable devices to record physiological parameters, in some cases
also with integrated LLMs, aiming to promote mental and physical health (Nepal et al.,
2024; Ren et al., 2025; Zhao et al., 2026). However, there have been few new developments regarding reflective writing journals promoting SRL in higher education that have
been systematically evaluated in adequate longitudinal studies during SRL processes
in daily learning routines. An exception is the Freiburg Self-Regulated Journal Writing
Approach; in that context, various instructional methods to support SRL by optimizing
cognitive load through journal writing were developed and tested in the laboratory and
in the field (Nückles et al., 2020).
Like any learning strategy, the skill to write a learning journal is not inherent to students but requires training and feedback to develop (Bain et al., 2002; Hume, 2009).
For example, students who are unfamiliar with the creation of a learning journal might
be unsure about what to write in their learning journal (Dincel & Savur, 2019; Jarvis &
Baloyi, 2020; Kasprabowo et al., 2021).
Previous studies have focused on a spectrum of strategies to support the creation of
learning journals. The most open strategy is allowing users to create their learning journal freely and provide a complementary SRL training (see, e.g., Broadbent et al., 2020;

Scheu et al. International Journal of Educational Technology in Higher Education

Dörrenbächer & Perels, 2016). A more structured approach is to utilize explicit prompts
that serve as a foundation for a journal entry (see, e.g., Berthold et al. 2007; Hübner et
al. 2010; Nückles et al. 2009). The most restricted approach is the usage of standardized
diaries based on questionnaires on SRL, in which users self-assess various aspects of
their SRL mostly by providing ratings on Likert scales (see, e.g., Ewijk et al., 2015; Fabriz
et al.,2014; Perels et al., 2007; Schmitz & Wiese, 2006).
In their review article based on 16 experimental and 4 correlative studies, Nückles
et al. (2020) show that from the perspective of cognitive load theory, journal writing
is promising, since it can serve as an adequate scaffold for promoting SRL by offering
the following advantages: Writing gives learners the opportunity to externalize their
own thoughts, reread them, and develop them further, with the written text acting as
memory aid or feedback. Externalizing thoughts reduces the cognitive processing load,
allowing more cognitive activity to be devoted to germane processing, such as metacognitive reflection (see also Luft et al., 2026). However, to benefit adequately from these
advantages, journaling needs to be supported by instructions, as unguided learners do
not engage sufficiently in germane processes, tending to keep the mental effort during
journaling to a minimum. In the SRL context, prompting proved to be the most important support method; the best learning outcomes were achieved with prompting of all
main SRL sub-components (Nückles et al., 2020).
In our view, chatbots are the natural extension of prompt-based journaling scaffolds
and standardized learning diaries because they can provide assessments and serve as
an interactive platform for prompts (Schick et al., 2022). These benefits have long been
used in mental health to provide chatbots that supply users with assessment, treatment,
and journaling capabilities (Abd-Alrazaq et al., 2020; Kawasaki et al., 2020). For example,
Kawasaki et al. (2020) and Lee et al. (2021) built a chatbot enabling users to create their
journals by chatting with a chatbot and showed that users react similarly to the guidance of a chatbot and humans. This guidance can even be effective if it is static or mostly
static and does not rely on natural language understanding to steer a dynamic conversation but presents a set of prompts (Kocielnik et al., 2018; Wolfbauer et al., 2022, 2020).
Engagement, self-determination, and intrinsic motivation

Learners’ engagement is essential for the learning process and learning success. Academic task engagement has been conceptualized as a multidimensional construct
involving affective, behavioral, and cognitive dimensions (Ben-Eliyahu et al., 2018). In
the present work, we focus on the behavioral dimension of engagement during journal writing. Behavioral engagement refers to active involvement and persistence in task
completion. In the context of writing tasks, students’ behavioral engagement has been
commonly operationalized as time investment and writing productivity (Bråten et al.,
2022; Fleckenstein et al., 2024; Namkung & Kim, 2024). Bråten et al. (2022) confirmed
significant relationships between engagement, motivation, cognition and performance
showing that in student post-reading written reports behavioral engagement (writing
time and length of the written responses) predicted comprehension performance, and
that behavioral engagement mediated the effects of cognitive prerequisites and intrinsic
reading motivation on comprehension performance.
Moreover, engagement is often a concern for mobile systems that target a change
in behavior or acquisition of new behavior, like starting to journal regularly, because

Scheu et al. International Journal of Educational Technology in Higher Education

engagement naturally declines over time (Baumel et al., 2019). This is especially an issue
for long-term engagement, or “the degree of involvement a user chooses to have with
a system over time” (Bickmore et al., 2010, p. 649) (Baumel et al., 2019; Lipschitz et al.,
2023).
In a recent study, Wong et al. (2026) applied learning analytics to identify user profiles
from log data collected through the voluntary use of a mobile learning app offering multiple-choice questions during a nine-week undergraduate university course and to examine differences in exam grades. Disengaged users (n = 54) started using the app early
(18.5 days before the exam), but stopped prematurely (8.5 days before the exam) and
answered few questions. Utilitarian users (n = 57) only answered multiple-choice questions two days before the exam for immediate preparation. Active users (n = 82) worked
the most with the questions, started the app early (17.5 days before the exam) and continued until one day before the exam. 117 students did not try the app at all (non-users).
Whereas active and utilitarian users achieved significantly better exam grades than the
non-users, there were no differences between the disengaged users and the non-users.
One approach to promote engagement is to motivate the user in some form, as motivation is the fundamental driver of action (Achtziger & Gollwitzer, 2018; Deci & Ryan,
2000). Consequently low motivation may result in the remaining motivation not being
able to overcome the mental barrier that is a result of the effort required to engage in
a task (Baumel et al., 2019). This motivation can be either extrinsic or intrinsic to an
action, and any action might have both extrinsic and intrinsic motivational components
(Ryan & Deci, 2000). Examples of extrinsic motivated action include tasks that are coupled to a reward like money or food, while in intrinsically motivated action the activity
itself is rewarding to the individual (Ryan & Deci, 2000).
According to self-determination theory the most important drivers for intrinsic motivation are that the activity satisfies the human needs for autonomy, competence, and
relatedness (Deci & Ryan, 2000). In this context, autonomy refers to the perception that
the outcome of any event depends on the person’s actions instead of being outside of
his or her control (Deci & Ryan, 1985), whereas competence is related to how effective
a person perceives oneself at performing a non-trivial task (Deci & Ryan, 1985). Relatedness is the “desire to feel connected to others–to love and care, and to be loved and
cared for” (Deci & Ryan, 1985, p. 231).
Chatbots promoting SRL and motivation

In almost all previous work on promoting SRL through chatbots, the completion of tasks
generated specifically for the study was supported by a few task-oriented cognitive or
metacognitive strategies conveyed through very specific instructions (Guan et al., 2025).
Moreover, educational chatbots rarely took motivational aspects into account. When
motivational constructs were considered, motivation was usually assessed only once,
typically at the beginning of the study, based on self-reports (Guan et al., 2025; Huang et
al., 2025). An exception is the study of Liu and Reinders (2025) that compares two chatbot versions (a pre-scripted chatbot and a chatbot powered with ChatGPT) designed
to promote SRL skills through reflection depicting the entire SRL cycle. The chatbot
serving as a learning coach showed a more positive impact on motivational development. The following reasons were suggested: meeting of basic psychological needs as
the generative AI-model was instructed to converse in a friendly and constructive way,

Scheu et al. International Journal of Educational Technology in Higher Education

novelty effect, adaptability and flexibility. Although chatbots generally have the potential
to boost motivation, empirical results to date have been rare and heterogeneous (Huang
et al., 2025).
In the context of higher education, the active role of students is critical, as the environment is characterized by considerable degrees of freedom and flexibility in the organization of learning processes. Consequently, there is a lack of chatbots that provide
comprehensive SRL support to help students achieve their individual learning goals in
their daily study routine considering dynamics and behavioral measures of motivation
and engagement (cf., Guan et al., 2025; Huang et al., 2025).
AI-based support in this context should be understood as a form of scaffolding or
co-regulation rather than as a replacement for student self-regulation. The system can
prompt, summarize, and reformulate, but the student remains responsible for selecting
goals, evaluating suggestions, and deciding what to write. This distinction is important
because external support can also lead to cognitive offloading, i.e., the use of external
tools or actions to reduce cognitive demand (Risko & Gilbert, 2016). Such offloading can
be beneficial when it frees resources for higher-order reflection, but it can also become
maladaptive when users overly rely on external support (Fröscher et al., 2022; Gilbert,
2015).

A chatbot-based learning journaling system
In order to contribute by bridging the research gap described above (cf. Guan et al.,
2025; Huang et al., 2025), we designed and implemented a mobile chatbot-based system that supports students to achieve their personal learning goals by creating an individual learning journal. Therefore, we prompted active reflective processes on SRL and
explicitly foster motivation and engagement. In the following, we describe the underlying design principles and hypothesize their effects. We also detail their implementation
and integration into a fully functional mobile app.
Design

While existing examples of chatbots show promise using prompting to assist the creation of learning journals, current approaches appear to have potentially negative motivational effects on learning and journaling itself; e.g., a loss of motivation after a short
time or time-consuming activities with the learning systems (Fabriz et al., 2014; Luft
et al., 2026; Wolfbauer et al., 2022). This presents an issue, as motivation is crucial for
maintaining and creating a learning journal (García & Pintrich, 1991). Consequently,
a sufficient degree of motivation is inherently required to engage in any self-regulation process (Zimmerman, 2008; Zimmerman & Moylan, 2009); and self-evaluation
during SRL influences the motivation to learn and engage in further self-regulation
processes(Zimmerman, 2008; Zimmerman & Moylan, 2009). However, to the best of
our knowledge, no previous work addresses the question of how to design a chat-based
learning journaling system to increase the motivation and engagement of students.
Example-based course (design principle 1)

The first step of SRL skill acquisition is the observation and imitation of a proficient
model (Schunk & Zimmerman, 1997; Zimmerman, 2000). In addition to providing practical guidance on how to implement SRL, a model like a peer or an instructor is also a

Scheu et al. International Journal of Educational Technology in Higher Education

primary source of motivation to continue engaging with the self-regulation cycle (Zimmerman, 2000, 2013). This is important because motivation and SRL are “reciprocally
interactive” (Zimmerman, 2008), meaning a certain level of motivation is required for
SRL, but successful SRL also improves motivation. Before this reciprocal relationship
becomes self-sustaining, an initial external motivational source is usually required (Zimmerman, 2008). However, since a mobile chatbot-based system is inherently individualistic, external motivational resources and human models are unavailable. We argue that
addressing these shortcomings requires both an alternative model and a motivational
source to help users initiate the SRL process.
The role of providing guidance on how to self-regulate one’s learning traditionally
falls to teacher and peers that can provide instructions on how to self-regulate (Carr,
1996; Hofer et al., 1998). Following this approach, a chatbot could also provide learning material on how to self-regulate and how to write a learning journal. E.g., in our
chatbot-solution, we prompted metacognitive strategies (self-reflection, self-monitoring, self-regulation, self-evaluation, and, in some cases, strategy application) regarding
all SRL main constructs (motivation, requirement level, goal setting, planning, time
management, situational interest, resource-management, learning emotions, cognitive
learning strategies, peer-learning, and satisfaction with learning outcomes) to support
the participants in reaching their personal learning goals (cf., Nückles et al., 2020; Zimmerman, 2002). But, since this does not necessarily imply the presence of a model, we
decided to complement the chatbot-solution with a model-based approach borrowed
from general education by making meaningful application examples available to the students and to allow them to use these examples as a model for their journaling (Atkinson
et al., 2000). Combining these approaches leads us to our first design principle: include
a course in the journaling system with a course structure of seven days and providing
examples of how the prompts could be answered. The examples fill the role of a model
providing users with a basis for imitation to satisfy the observational level of regulation.
Moreover, the course offered metacognitive background knowledge about the reflective
prompts and their value, which has been shown to improve motivation to engage in SRL
(Schunk & Greene, 2018; Schunk & Rice, 1987) and thereby supporting perceived competence (Deci & Ryan, 2000).
Journaling assistant (design principle 2)

Learning requires students to perform a task that has some challenging aspects (Bjork,
1994). At the same time, the task should not be experienced as too challenging, since
self-determination theory tells us that perceived competence would then lead students
to avoid the task altogether. The appropriate level of challenge depends on the learner;
while some students might find the task trivial, other students might be unsure about
what to write (Dincel & Savur, 2019; Jarvis & Baloyi, 2020; Kasprabowo et al., 2021). In
such cases where students feel unprepared, providing scaffolding during the creation of
journal entries could help them in this initial phase, increasing their perceived competence and, in turn, engagement by providing an adequate challenge (Deci & Ryan1985;
Järvelä 1995). Especially adaptive scaffolding has been shown to support students in
their learning (Azevedo et al., 2005, 2004). This dynamic matching of difficulty with the
current competence of the user should also help in sustaining motivation (Bandura &
Schunk, 1981; Bjork & Bjork, 2011; Bjork et al., 2013). New large language model based

Scheu et al. International Journal of Educational Technology in Higher Education

AI tools could provide scaffolding in a way that takes into account the current competence of the user while affording users with the autonomy to apply these tools as they
see fit. However, such support must remain bounded. If the system begins to formulate,
structure, or organize reflection on behalf of the student, it risks encouraging cognitive
offloading rather than reflective self-regulation (Risko & Gilbert, 2016). We thus propose
our second design principle: the inclusion of an AI-based assistant to support the creation of a learning journal, while encouraging reflective action by the student.
Hypotheses

We assume that providing the example-based course and the journaling assistant should
increase intrinsic motivation and engagement. Building on this conceptualization and
the proposed design, we articulate the following hypotheses:
H1 Providing users an example-based course leads to greater intrinsic motivation for
creating a learning journal compared to users without the course.
H2 Providing users a journaling assistant leads to greater intrinsic motivation for creating a learning journal compared to users without the assistant.
H3 Providing users a example-based course leads to more engagement with the learning
journal compared to users without the course.
H4 Providing a journaling assistant leads to more engagement with the learning journal
compared to users without the assistant.
Implementation

The foundational application used to evaluate our hypotheses is part of the Amsl project
(Scheu et al., 2023). This study forms another iteration in the overarching design science
research (DSR) project (Peffers et al., 2007; Vaishnavi & Kuechler, 2008). To instantiate
the proposed design principles, we reused the core frontend and backend of the application including the overall design aesthetic but removed all functionality that was not
needed for the newly designed journaling process. The resulting mobile chatbot-based
learning journaling system is depicted in Fig. 1.
The design of the journaling process is comparable to publicly available commercial
mobile applications for journaling with the additional features instantiating the design
principles described above. The home screen, depicted in the leftmost screenshot,

Fig. 1 Screenshots

Scheu et al. International Journal of Educational Technology in Higher Education

prominently contains a button to start new journal entries (or the introduction, if it has
not been completed yet), a list of past journal entries, and a quick overview of the participant’s journaling activity over the last five days. From the home screen, users can view
their past journal entries (cf. the right-most screenshot) or start a new journaling session
based on a template. To keep the journal creation predictable and comparable, the chatbot was rule-based, with a primarily linear conversation flow following said template. All
non-journaling-related conversation elements, like greetings, were handled using predefined reply buttons, while the journaling prompts allowed for full free text entry. To
get the users into a reflective mindset and to promote a sense of relatedness in users with
the chatbot, each journaling session started with a short greeting and a question about
their current mood and what they focused on during the day. To assess mood, we used a
5-point scale from very bad to excellent. The available focuses were pre-set (e.g., studying
or fitness), but users could easily add new ones in case they did not like the pre-set ones.
All application versions, including the baseline version, comprised seven topic-based
journal templates, a general template, and optional daily summaries. The topic-based
journaling templates were centered around specific topics related to SRL, for example,
learning strategies or motivation. The general template was meant as a fallback in case
the users did not want to create a journal entry for a specific topic and contained two
prompts: (a) “What are your thoughts about your day in general?” and (b) “What are
your thoughts about your learning progress today?”.
Design instantiation

The design principles we derived were instantiated as follows.
Example-based course The example-based course was designed as a direct adaptation
of the journaling templates. Each template, except for the general one, was converted into
exactly one session in the course by extending it with information about why the prompt
is relevant context and examples of possible responses to the prompts. For example, the
mood prompt is contextualized in the course with “Many factors influence your motivation. For example, your mood”. The example responses were designed to nudge the users
to elaborate on their responses instead of providing short answers. In particular, they
were formulated in complete sentences and slightly longer than expected for users to
write naturally. For example, the model response for the prompt “Were you motivated in
the courses?” was “Yes, I was motivated to attend the courses despite the less interesting
content. My motivation comes more from the desire to get good grades. Even if the topics
aren’t always super exciting, I try to listen actively and take notes to understand the material”. The course was also designed to teach users the daily habit of creating a journal
entry. To do so, we allowed users only to do a single course session per day.
To keep the course and non-course versions as compatible as possible, the course contained the same prompts, in the same order, as the corresponding template, with the
explanations and examples weaved in between the prompts. Each session in the course
was time-gated to allow only a single entry per day to prevent users from rushing
through the course and to encourage the habituation of journal entry creation.
Journaling assistant The assistant was implemented as a writing aid that asks followup questions to encourage deeper reflection. We implemented this in a way that is fully

Scheu et al. International Journal of Educational Technology in Higher Education

user-initiated: After the journal presented a prompt to the user and they wrote a preliminary response, they could ask the assistant to help them write a response. The assistant indicated its understanding of the preliminary response by summarizing it. Subsequently, the assistant asked a clarifying question in order to let the user elaborate on
the original response. For example, if the user answered the prompt “Were the course
contents interesting today?” with “Yes”, the assistant could then ask “Why did you think
the course contents were interesting today?”. The assistant would then generate up to three
new responses based on the original prompt, the original answer, the inquiry, and the
response to the inquiry. If the response to the previous example inquiry was “Because it
was very math-heavy, and I like math”, the assistant might suggest “The courses were very
interesting today because they were very math-centric” as one of the possible responses to
the original prompt. Finally, the users could select one of the suggested responses or keep
their own. In addition, the whole process could be repeated until the user was satisfied
with the response, and users could always edit the final answer before submitting it.
The journaling assistant utilized OpenAI’s (2023) gpt−3.5-turbo-1106 model using
zero-shot, instruction-based prompting with schema-constrained function calling (cf.,
Reynolds & McDonell, 2021). More specifically, the model received the current journal
prompt(s), the user’s unfinished response, and explicit instructions to (1) summarize the
response briefly, and (2) generate a single follow-up question. No exemplar input–output
pairs were included in the prompt; instead, the output format was constrained through a
predefined function schema. In the second step, the model received the original promptanswer pair and the follow-up question-answer-pair. From this it was tasked with generating two to three alternative formulations of a possible journal entry in the first person.
Other components

In addition, at the start of every journal entry, the user was asked whether the chatbot
should summarize their last journal entries. This feature was added to motivate the usage
of the application beyond what is possible on paper. Furthermore, rereading a learning
journal can be productive work in itself (Moon, 2019). By reflecting on previous journal
entries (meta-reflection), students can look for patterns and changes in their thinking
over time (Stevens & Cooper, 2009). At the same time, engaging in rereading large portions of the journal is bound to take a long time and ties up the cognitive resources of
the learner (Barrouillet et al., 2007; Nückles et al., 2020). However, current generative
AI models can easily generate automated summaries and offer a lightweight alternative
to re-reading the full journal entries while supporting users to get a better overview and
reflect on their previous journal entries (Siriwardhana et al., 2023). In our implementation, we added a summary of the last five journal entries before every new journal entry.
The summary included both a general summary as well as highlighted 5 topics the user
focused on in their recent journal entries.
This feature also utilized OpenAI’s (2023) gpt−3.5-turbo-1106 model. To steer the format and style of the generated summaries, the summary feature used instruction-based
prompting with schema-constrained function calling. In addition, the schema descriptions contained short examples of acceptable summaries and focus topic summaries,
which provided exemplar-based guidance for the model outputs.
To help students remember to fill in their learning journal, we provided notifications
because an important factor in adopting a new behavior is applying it consistently (Lally

Scheu et al. International Journal of Educational Technology in Higher Education

& Gardner, 2013). In the context of using learning journals to investigate and support
learning processes in higher education, this means that students must consistently create journal entries. A common tool to help attain this consistency is to provide users
with reminders (Oinas-Kukkonen & Harjumaa, 2009). In the case of our system, we
implemented notifications that reminded users that they had not created a journal entry
for the day at 9 P.M. The notification was skipped if a user had already completed a journal entry for that day. Based on the work on time logging by Tabuenca et al. (2015) most
users should have already completed their entry by this time, and based on the work by
Schlarb and Kulessa (2012) the time should still be early enough that those that didn’t
create an entry yet had enough time to complete their journal entry before they went to
bed.

Method
We conducted a three-week randomized field experiment to investigate the effectiveness
of our mobile chatbot-based learning journaling system with the implemented design
principles introduced above. We aimed to test our hypotheses using a randomized field
experiment with a 2×2 full factorial design.
Study procedure

The participants for this study were students from many different study programs at a
technical university in Germany who had native or near-native German-speaking proficiency and could utilize a personal smartphone to install the application. To recruit
these participants, we utilized a panel of students at the university. The panel consists
of students at our university who voluntarily sign up to be invited to participate in monetarily or tangibly compensated studies. We aimed at 200 total individuals split into four
groups, with an equal distribution of males and females.
The invitations included general information on the procedure, incentives, and a link
to join the study. Before participants could join the study, they were re-informed about
participation requirements and that participation was entirely voluntary. In addition,
they were provided information about the minimum requirements to receive compensation and data protection procedures. They were then informed of the entire study procedure and terms. All participants had to agree to these terms before they were able to
participate.
To ensure an equal gender representation, we sent out two identical surveys and
closed them each as soon as 100 complete responses were received. As participants
who started their survey before it was closed were still allowed to finish it before the
announced signup period was up, we ended up with slightly more participants. Invitations to participate in the study were sent to 751 males and 449 females. Overall, we
received 210 complete responses to the pre-survey (108 males & 102 females). After the
pre-survey, the participants were assigned to one of the four groups, which each group
presenting one feature combination of our 2×2 design. The assignment was done using
stratified randomization, based on gender (male/female) (χ2 = 6.24, df = 9, p = 0.72),
age (F = 0.76, p = 0.52), and the four scales of the LIST-K (Klingsieck, 2018) (cognition,
F = 0.35, p = 0.79; metacognition, F = 0.34, p = 0.80; strategies for internal resources,
F = 0.32, p = 0.81; strategies for external resources, F = 0.21, p = 0.89). As a result, 53
of the 210 participants were assigned to the baseline (B) group that did not receive any of

Scheu et al. International Journal of Educational Technology in Higher Education

the support features, 53 to the assistant supported (A) group, 52 to the course supported
(C) group, and 52 to the course and assistant supported (CA) group.
After the pre-survey, the participants were invited to install the application on their
private smartphones and complete the ∼ 10-minute in-app onboarding within the next
two days. The participants who completed the onboarding within the set timeframe
could use the application for the next 22 days. After the usage period, participants had
to fill out a post-survey. For their participation in the study, all participants who fulfilled
the requirements were compensated with €25. The requirements to receive the incentive
were that the participants had to fill out the pre- and post-experiment surveys, install
the application on their smartphones, and finish the application onboarding process
within the two-day cutoff window. The application usage after the initial onboarding was
completely voluntary and not tied to any compensation. All participants were informed
about the study procedure and the requirements to receive the compensation in the
study invitation and again before starting the pre-survey. Participants who could no longer receive the compensation (e.g., because they did not install the application in the said
timeframe) were excluded from the study from that point forward and are not included
in our evaluation. To test the stability of the effects, a follow-up survey was conducted
12 weeks after the post-survey. Participants were only invited to the follow-up survey if
they completed the post-survey and were incentivized with an additional €4.
An overview of the full study procedure can be seen in Fig. 2.
Measures

We used validated scales from the literature to measure the treatments’ effects on participants’ intrinsic motivation for creating a learning journal with the application and
their usage of SRL strategies. SRL was assessed in all three surveys (pre-, post-, followup) using the LIST-K questionnaire (Klingsieck, 2018). It is the short version of the LIST
questionnaire (Lernstrategien im Studium, German for learning strategies in academic
studying) inventory, a German adaptation of the commonly used MSLQ questionnaire
(Pintrich et al., 1991; Schiefle & Wild, 1994). This scale measures SRL by assessing the
use of SRL strategies for cognition, metacognition, and internal and external resource
utilization. Intrinsic motivation was evaluated in the post-survey using the 22-item version of the Intrinsic Motivation Inventory (IMI) (Center for Self-Determination Theory,
n.d.). The IMI measures self-reported intrinsic motivation (as enjoyment) and the subdimensions of perceived autonomy (as perceived choice and pressure), perceived competence, and effort.
We collected the following log data to complement the self-reports with behavioral
data: we tracked the creation time of journal entries, the responses to all prompts, and
which assistance features were used during the journaling process. Based on this data,
we operationalized the engagement with the learning journal through the amount of

Introduction

Free Usage

Pre Survey

Post Survey
Course Groups

Course

3 week usage period

Fig. 2 Study overview

12 weeks
Follow-up Survey

Scheu et al. International Journal of Educational Technology in Higher Education

writing the participants did per prompt (measured in characters) in their learning journal (cf., Bråten et al., 2022). Number of characters was chosen as a measure for behavioral engagement instead of the total number of journal entries per participant because
we suspected it should be less susceptible to external motivational factors like the daily
notifications. In addition, we captured when each journal entry was created and which
assistant features were used during its creation.

Results
In total, 200 participants installed the application on their smartphones and completed
the onboarding session within the set timeframe. The post-survey questionnaire was
completed by 179, and the follow-up questionnaire by 120 participants. The following
analyses only include participants who completed the steps required for study inclusion,
namely the pre-survey, the onboarding, and the post-survey.
Overall, the participants created 1904 journal entries using the application during
the three-week study period. On average, each participant created 10.64 journal entries
(SD = 6.46). While creating their journal entries, the participants with access to the
assistant (groups A and CA) utilized it for every 0.23 of their journal entries. The course
was completed by 75.58% of users with the course (groups C and CA).
In addition to the two major design principles, our application included some additional features. We evaluated the impact of the notifications and summaries by applying an exploratory approach combining quantitative and qualitative analyses. For the
qualitative analyses, we included open questions in the follow-up survey. A single coder
initially labeled the responses to these questions using open coding. After agreeing on
category codes, two coders (including the original coder) re-coded the answers using
categorical coding. Finally, we consolidated disagreements and settled on the final coding system. The mean Cohen’s Kappa for the independent coding done by the two coders
was 0.81 (SE = 0.05).
Intrinsic motivation

To test the influence of our design on the intrinsic motivation to create a learning journal (H1 & H2), we used self-reported data for intrinsic motivation that were measured
through the enjoyment scale of the IMI. To ensure that we evaluated the actual effect
of using the system, we did this analysis by excluding the participants who did not sufficiently use the system. But in order to avoid a potential selection bias, we also repeated
the analysis with all participants included. We defined insufficient usage as having less
than 4 days with journal entries, which coincides with the 15% quantile. This corresponded to the exclusion of 22 participants, leaving 157 active participants in the analyses presented here.
To test the effect of our design on intrinsic motivation, we employed a typeII ANOVA. This revealed a small significant effect (η 2 = 0.03) of the course
(F (1, 153) = 4.81, p < 0.05), thus confirming H1. Regarding H2, no significant effects
could be found for the assistant (F (1, 153) = 0.18, p = 0.67). There were also no significant interaction effects between the features (F (1, 153) = 0.09, p = 0.77). The results
over all participants were similar for the course (η 2 = 0.03, F (1, 175) = 5.96, p < 0.05),
assistant (F (1, 175) = 0.48, p = 0.49) and interaction (F (1, 175) = 0.40, p = 0.53).

Scheu et al. International Journal of Educational Technology in Higher Education

Perceived competence and autonomy

We employed an ANOVA to analyze the difference in perceived competence between
active participants based on the features the participants had access to. The treatmentbased comparison indicated a small (η 2 = 0.04) but significant effect of the course on
perceived competence (F (1, 154) = 5.77, p < 0.05). There was no significant difference
in perceived competence between users who had access to the assistant and those who
had not(F (1, 154) = 0.00, p = 0.95). As with enjoyment, the results for competence
over all participants were similar for the course (η 2 = 0.05, F (1, 176) = 9.26, p < 0.01)
and the assistant (F (1, 176) = 0.37, p = 0.54).
Because the assistant was used by only 55.91% of the participants after the onboarding
session, we investigated whether actual usage of the assistant would lead to a difference
in perceived competence. To investigate this, we modeled perceived competence dependent on the number of days the assistant was used and the number of days a journal
entry was created. This revealed no significant impact of the number of days the assistant was used (t = 1.95, p = 0.054) on the perceived competence, and no significant
effect on the number of days a journal entry was created at (t = 0.18, p = 0.86).
The ANOVAs for choice were not significant for both the course
(F (1, 154) = 0.05, p = 0.83) and the assistant (F (1, 154) = 0.70, p = 0.40). Here again
the results were similar for the course (F (1, 176) = 0.01, p = 0.92) and the assistant
(F (1, 176) = 0.68, p = 0.41), when all participants were included.
We also could not find any significant impact of the course (F (1, 154) = 0.13, p = 0.72)
or the assistant (F (1, 154) = 0.38, p = 0.54) on pressure. When including all participants,
we again observed similar results for the course (F (1, 176) = 0.18, p = 0.67) and the
assistant (F (1, 176) = 0.09, p = 0.77).
The number of days the assistant was used had an impact on choice (t = 2.05, p < 0.05)
but not on pressure (t = −1.36, p = 0.18).
Effects of notifications

As external triggers can influence action, we explored the behavioral impact of the notifications on the participants (Papies & Aarts, 2016). We investigated whether the participants relied on the notifications as an external trigger to create their journal entries
or whether they did so without a reminder. Our initial assumption was that some users
would create their journal entries without relying on the notifications, and some users
would only create their entries after they received a notification reminding them to do
so. For this analysis, we categorized users as generally early or late journal entry writers. Early users, in this case, were all who created their journal entries more than 50 % of
the time before they received the notification that reminded them to create their journal
entries; other users were late users. The contingency tables for early and late users with
the course and assistant features can be seen in Table 1a and b respectively.

Table 1 Early/Late users contingency tables based on feature access
(a) By course access
Early
No course
Course
Total

Late

Total

(b) By assistant access
Early
No assistant
Assistant
Total

Late

Total

Scheu et al. International Journal of Educational Technology in Higher Education

Fisher exact tests revealed that users with the course were significantly more
often early (OR = 3.45, p < 0.001). The assistant users’ results were not significant
(OR = 1.55, p = 0.11).
To supplement these findings qualitatively, we asked the participants in the follow-up
survey how they reacted to the notifications. As expected, most (84) users indicated that
the notifications caused them to open the app and create their journal entries. In contrast, only a comparatively small group (23) indicated that the notifications generally had
no effect and only very few participants (9) felt stressed by the notifications.
Behavioral engagement

To analyze the engagement with our system, we ran a multiple regression analysis modeling the numbe
