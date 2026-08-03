---
source_url: https://www.tandfonline.com/doi/full/10.1080/02602938.2026.2638920
ingested: 2026-08-03
sha256: cdf4e89fcbb219309bbaedd852718aef8b7633b8ebc5e8b062030bf4bd684046
---
# Enhancing learner-centered feedback with AI: teachers' practices and perceptions

Ahmad Ari Aldino, Bhagya Maheshi, Yuheng Li, Ying Zhou, Yi-Shan Tsai, Dragan Gašević & Guanliang Chen (Monash University; Universitas Teknokrat Indonesia)

Assessment & Evaluation in Higher Education, 51(5), 892-910, published online 11 Mar 2026. Open Access (CC BY 4.0). doi:10.1080/02602938.2026.2638920

ABSTRACT

Learner-centered feedback, emphasising future improvement, sensemaking, and student agency, has been increasingly recognised
as effective, yet remains challenging for educators to offer in large
classes with diverse learner needs. Recent advances in generative
artificial intelligence (GenAI) offer new ways to support feedback
practice, but limited research has examined how teachers use and
perceive GenAI in real-world feedback practices, particularly for
learner-centered feedback. Twenty-one higher education teachers
were recruited to provide written feedback on a student presentation and then use a GenAI-powered feedback tool to analyse their
feedback to identify learner-centered components (using BERT)
and to generate enhanced drafts (using ChatGPT), and to explore
their perceptions of its use. We analysed how teachers engaged
with the BERT’s classification of teacher-written feedback text into
learner-centered components, its suggestions to address missing
components (which teachers could adopt or reject), and how
teachers revised ChatGPT-enhanced feedback text. Findings indicated that teachers frequently adopted BERT’s suggestions and
extensively revised ChatGPT outputs, often moderating praise,
encouragement, and relationship-building statements. Interviews
indicated that teachers valued GenAI for identifying missing components, improving language and structure, and promoting reflection, while also noting concerns about tone, trust, and the need
for human editing.

KEYWORDS

Learner-centered
feedback; AI-powered
feedback; generative
artificial intelligence;
higher education

1. Introduction
Feedback is recognised as one of the most important factors in promoting student
learning in higher education (Hattie and Timperley 2007). Traditionally, feedback
has been conceptualised as a one-way transmission of information from teachers to
students, focusing on the delivery of comments rather than fostering dialogue or
CONTACT Guanliang Chen
Clayton, Australia.

Faculty of Information Technology, Monash University,

This is an Open Access article distributed under the terms of the Creative Commons Attribution License (http://creativecommons.
org/licenses/by/4.0/), which permits unrestricted use, distribution, and reproduction in any medium, provided the original work is
properly cited. The terms on which this article has been published allow the posting of the Accepted Manuscript in a repository
by the author(s) or with their consent.

student engagement (Carless and Boud 2018; Sadler 2014). Although there is broad
agreement on its importance, effective feedback provision remains challenging due
to large class sizes, heavy workloads, and diverse student needs (Boud and Molloy
2013). Recent work has called for a shift from viewing feedback as a one-way
transmission of information to conceptualising it as a learner-centered, dialogic
process in which meaning is co-constructed rather than delivered (Carless and Boud
2018; Ryan et al. 2021). It positions feedback as an ongoing process that helps
students interpret, act upon, and learn from feedback interactions (Carless and Boud
2018; Ryan et al. 2021). Building on this reconceptualisation, the learner-centered
feedback framework by Ryan et al. (2023) conceptualises feedback across three
dimensions: Future Impact, Sensemaking, and Agency. Future Impact focuses on
helping students improve future work through guiding future work and developing
skills. Sensemaking involves supporting students in understanding their current
performance through evaluating strengths and weaknesses and summarising performance. Agency emphasises motivating and empowering students through encouraging
active learning, acknowledging accomplishments, and building student–teacher relationships. However, many feedback practices remain information-focused, with limited
attention to process, agency, and forward-looking guidance (Winstone and Boud 2022).
To address this gap, this study draws on recent advances in GenAI, particularly
large language models (LLMs) such as ChatGPT, to explore how it can support the
provision of learner-centered feedback in higher education (Lee and Moore 2024).
GenAI offers not only efficiency benefits but also new ways to help teachers provide
feedback that is more dialogic, personalised, and oriented towards student understanding and action (Kinder et al. 2025; Lee and Moore 2024; Pozdniakov et al.
2025). Prior research has shown that GenAI can reduce instructor workload, deliver
more timely and personalised feedback, and produce responses that students perceive
as prompt and engaging (Dennison et al. 2025; Lee and Moore 2024). Moreover,
studies indicate that ChatGPT can improve the clarity and constructiveness of feedback and highlight gaps in student work to make comments more actionable (Lee
and Moore 2024; Pozdniakov et al. 2025). In addition to GenAI, machine learning
(ML) models have been used to analyse teacher feedback and identify missing
learner-centered components (Aldino et al. 2024), offering a complementary approach
to improving feedback quality. However, little is known about how teachers engage
with these AI tools in authentic contexts and how they perceive their usefulness
and limitations. While recent studies have begun to examine AI-driven feedback
tools (Xavier, da Costa, et al. 2025; Xavier, Rodrigues, et al. 2025), they mainly
focus on AI-generated feedback itself rather than on how teachers adopt, reject, and
revise AI suggestions when crafting their own feedback. This study addresses this
gap by investigating teacher–AI interaction in learner-centered feedback provision.
Understanding these human–AI interactions is essential for designing systems that
effectively augment, rather than replace, teachers’ pedagogical judgments.
The current study aimed to investigate the potential of AI-powered tools – including an ML model for detecting missing learner-centered feedback components and
ChatGPT for enhancing teacher-written feedback – to support the provision of
learner-centered feedback in higher education. Specifically, it examines how teachers
interact with AI-powered feedback tools when drafting, editing, and revising

feedback, and how they perceive the benefits and challenges of integrating such
tools into their feedback practices. By focusing on teacher–AI interaction, rather
than AI-generated feedback in isolation, this study contributes to ongoing discussions
about the role of AI in educational contexts and the conditions under which AI
may effectively augment rather than replace human feedback practices.

2. Literature review
2.1. Effective feedback
Feedback is recognised as an important process that supports learning by helping
students bridge the gap between their current and desired performance (Hattie and
Timperley 2007). Classic work emphasises that effective feedback clarifies standards,
provides information about how current work relates to those standards, and indicates concrete actions for improvement (Sadler 2014). More recent work emphasises
a learner-centered view, where feedback is understood as a dialogic process in which
learners interpret, evaluate, and act on information through interaction with teachers
and peers (Nicol 2014; Nicol, Thomson, and Breslin 2014; Winstone and Carless
2019). Recent research syntheses similarly argue that impact depends less on the
provision of comments and more on learners’ active engagement in seeking,
sense-making, and using feedback (Carless and Boud 2018; Henderson et al. 2019).
Despite these conceptual advances, many feedback practices remain rooted in information transmission, resulting in comments that are often too general, surface-focused,
or difficult for students to apply to future tasks (Mulliner and Tucker 2017; Winstone
and Carless 2019). Large cohorts and workload pressures further constrain opportunities for two-way feedback discussions between teachers and students that help
learners interpret and act on comments (Nicol 2014; Winstone et al. 2017). As a
result, much feedback remains information-focused or grade-oriented, reducing its
developmental value and weakening its feed-forward potential (Mulliner and Tucker
2017; Winstone and Carless 2019).
In light of the issues above, prior scholarship has advocated for a shift towards
learner-centered feedback, where the focus is not only on the teacher’s message but
also on how students interpret, use, and act on it (Carless and Boud 2018; Winstone
and Carless 2019). Learner-centered feedback is conceptualised as a process that
empowers students to take responsibility for their learning by engaging actively with
comments, developing evaluative judgements, and building the capacity to apply
feedback across contexts (Henderson et al. 2019; Tai et al. 2018). Ryan et al. (2023)
further operationalise this orientation through three broad dimensions – Future
Impact, Sensemaking, and Agency – each encompassing specific components of
effective feedback. Future Impact refers to comments that look forward and provide
actionable guidance to help students improve on upcoming tasks, such as directing
attention to transferable skills or strategies for tackling similar assignments.
Sensemaking emphasises on helping students interpret and understand their performance by clarifying expectations, explaining strengths and weaknesses, and offering
summaries that connect current work to standards or criteria. Agency highlights
the relational and motivational aspects of feedback, aiming to encourage students’

active engagement, build confidence, acknowledge their accomplishments, and foster
constructive relationships between teachers and students. Despite increasing recognition of learner-centered feedback principles, current feedback practices in higher
education continue to prioritise correcting errors and justifying grades, often providing limited support for students’ understanding or future improvement (Winstone
et al. 2022; Winstone and Boud 2022).
2.2. Feedback and artificial intelligence
Machine learning (ML) is one branch of artificial intelligence (AI) that has been
employed to analyse and classify feedback, with studies showing its potential to
detect missing components and highlight overlooked aspects of feedback practices
(Aldino et al. 2024; Cavalcanti et al. 2019, 2020). These tools do not replace teacher
feedback but instead act as diagnostic assistants, offering prompts for teachers to
consider when drafting or revising their comments. Alongside these approaches,
recent advances in GenAI such as ChatGPT have introduced new opportunities
and challenges in the provision of feedback. GenAI is increasingly positioned as
an assistive tool to help teachers refine, paraphrase, or expand their feedback rather
than to replace them by generating feedback independently (Dai et al. 2023; Kasneci
et al. 2023). GenAI can generate personalised, fluent, and detailed feedback at
scale, with early studies suggesting benefits in terms of speed, linguistic quality,
and accessibility (Kasneci et al. 2023; Lee and Moore 2024). For example, AI-assisted
feedback has been shown to scaffold learning in writing tasks, provide immediate
formative input, and support student reflection (Kinder et al. 2025). However,
researchers caution that such feedback may be inflated, generic, or misleading if
not carefully moderated, raising concerns about authenticity, accuracy, tone, and
additional workload for teachers (Albadarin et al. 2024; Dai et al. 2023; Lee and
Moore 2024). Moreover, feedback that lacks a teacher’s personal voice and contextual sensitivity may undermine relational aspects of feedback, particularly in
building trust and sustaining student–teacher relationships (Winstone et al.
2022, 2017).
Although the above-mentioned studies demonstrate the potential of ML and
GenAI to enhance feedback practices, existing research has primarily focused on
the quality and accuracy of AI-generated feedback itself, with limited attention
to how teachers interact with these tools when drafting, editing, and revising
their own feedback (Dai et al. 2023). Teachers play a crucial role in shaping
feedback, ensuring its alignment with pedagogical goals, and maintaining authenticity in communication. Understanding how teachers use AI tools to support
learner-centered feedback is therefore essential to evaluate the pedagogical value
of such systems. Against this backdrop, the current study addressed two research
questions:
• RQ1: How do teachers interact with AI-powered feedback tools when providing
learner-centered feedback?
• RQ2: How do teachers perceive the role of AI-powered feedback tools in supporting
the provision of learner-centered feedback?

By examining both interaction patterns (RQ1) and teacher perceptions (RQ2),
this study contributes to the growing body of work on AI in education by shifting
the focus from what AI produces to how teachers engage with, adapt, and evaluate
AI-powered feedback systems so as to deepen understanding of how human–AI
collaboration can meaningfully enhance learner-centered feedback practices.

3. Methodology
3.1. Data collection
The study used PolyFeed, an AI-powered feedback tool designed to help teachers
provide learner-centered feedback by integrating a BERT-based Machine Learning
(ML) model that was developed in a previous study (Aldino et al. 2024) to detect
missing learner-centered feedback components and suggest their inclusion, along
with the ChatGPT-4o mini model to enhance teacher-written text by incorporating
the model’s suggestions and any additional input provided by the teacher, as shown
in Figure 1. This study involved 21 teachers with varying education levels, faculties,
and teaching experience, who used PolyFeed in a controlled environment to support
their feedback provision. Teachers were shown a video of a student delivering a
three-minute self-introduction simulating a job interview and were asked to provide
feedback afterwards. Teachers drafted their feedback manually based on their evaluation of the student’s work (Figure 1(1)). After this initial drafting stage, the ML

Figure 1. Functionality of the AI-powered feedback tool. (1) Teachers drafted feedback manually
based on their evaluation of the student’s work. (2) The ML model analysed the feedback to
detect learner-centered components. (3) When components were missing, such as
relationship-building comments, the system suggested adding them. (4) Teachers then refined
their feedback using ChatGPT, which rephrased it based on the selected suggestions and optional
prompts.

model in PolyFeed analysed the feedback to identify whether learner-centered components were present (Figure 1(2)). If certain elements were missing, such as comments that build student–teacher relationships, the system provided relevant
suggestions to include them (Figure 1(3)). The full details of learner-centered feedback components can be seen in Appendix Table A1. Teachers could choose whether
to include or reject these suggestions according to their professional judgement.
After that, teachers polished their feedback using the ChatGPT feature which then
rephrased the teacher’s feedback based on the selected suggestions and any optional
prompting they provided (Figure 1(4)), with the following prompt used in ChatGPT
to improve teacher feedback.
Improve the following feedback text from a teacher in the course < course name>. You
need to include the tips to make it more learner-centric. The text provided by the
teacher should also be used when improving this feedback text. Feedback text: <Feedback
Text>. Tips: <ML Model Tips from ML model>. Text: <Teacher additional prompt>.

Teachers could further edit the ChatGPT-enhanced feedback to better reflect their
intentions or maintain consistency with their voice. The dataset for analysis included
the ML prediction logs (showing detected and missing learner-centered components
and teachers’ inclusion or rejection of suggested ones), the original feedback drafts,
the ChatGPT-enhanced feedback, and the teacher-revised ChatGPT enhanced feedback for those who made edits. Following the completion of the feedback task, all
teachers took part in a semi-structured interview to share their experiences and
views on using the AI-powered feedback tools. This study was approved by Monash
university’s Human Research Ethics Committee (Project ID: 38407) and conducted
in accordance with institutional ethical standards, with informed consent obtained
from all participants.
3.2. Data analysis
3.2.1. RQ1. How do teachers interact with AI-powered feedback tools?
To answer RQ1, we analysed the data using a three-step approach. First, we compared the ML model’s detection of missing learner-centered feedback components
with teachers’ acceptance of the ML-generated suggestions. Second, we analysed how
teachers modified ChatGPT-enhanced text to capture how they revise feedback at
the sentence level. A coding scheme (see Appendix Table A2) was inductively developed through iterative reading and comparison of teacher revision data, allowing
categories to emerge directly from the observed revision behaviours. The coding
scheme included codes for the type of action taken such as add, edit, or remove
content (code: interaction); tonal changes such as praise, encouragement, and politeness (code: tone); content revisions such as elaboration, correction, and suggestion
(code: content); and structural changes like simplification (code: brevity). Each
revision was first coded for its interaction type (add, edit, or remove) and then for
the revision dimension affected (tone, content, or brevity). For example, a teacher
changed ‘First of all, I want to congratulate you on completing your assignment!’ to
‘Well done on completing your assignment,’. This change was coded as Edit–Praise,
reflecting the teacher’s action of moderating tone. All data were anonymised prior

to analysis. Two rounds of inter-rater reliability testing were conducted between two
coders, resulting in Cohen’s kappa scores of 0.48 and 0.82, respectively, for the
overall coding scheme. The final score indicates a ‘near perfect agreement’ (28). The
two coders discussed and improved the code descriptions for clarity prior to each
round. The revision patterns represent combinations of the type of action (add, edit,
or remove) and the feedback element being changed (e.g. tone, content, or brevity).
In this step, we calculated counts (f) of these revision patterns (e.g. Edit–Praise,
Remove–Encouragement) to identify how teachers modified different aspects of
ChatGPT’s feedback. In the third step, we examined how these revision actions
related to specific learner-centered feedback components by mapping the second-stage
codes (e.g. Edit–Praise) onto the corresponding components (e.g. Student-Teacher
Relationship). This allowed us to see which learner-centered components teachers
most frequently adjusted when revising ChatGPT’s feedback. All counts (f) reported
in this analysis are descriptive and should not be interpreted as inferential statistics.
3.2.2. RQ2. How do teachers perceive the role of AI-powered feedback tools?
To answer RQ2, we conducted a thematic analysis of the interview transcripts from
all 21 teachers. A coding scheme (see Appendix Table A3) was inductively developed
to guide the analysis, with categories for benefits and challenges. The coding scheme
contained codes to analyse teachers’ perceptions in terms of benefits and challenges.
The benefit codes included identifying missing content, improves language and
structure, promotes reflection, and saves time. The challenge codes included inconsistent tone, need for human editing, potential misinformation, and trust issues.
Each interview excerpt was coded to indicate whether it reflected a benefit or a
challenge, and then further categorised under the corresponding subcodes. All data
were anonymised prior to analysis. Two rounds of inter-rater reliability test was
conducted between two coders, resulting in Cohen’s kappa scores of 0.21, and 1.0,
respectively, for the overall coding scheme. The final round of score indicates a
‘perfect agreement’ (28). The two coders discussed and improved the code descriptions for clarity prior to each round. In the results, we report the number of teachers
(n) whose responses were associated with each code.

4. Results
4.1. RQ1: teachers’ interactions with AI-powered feedback
The results for RQ1 are organised into three parts. First, we show how teachers
identified missing learner-centered feedback components, the extent to which they
accepted suggestions generated by the ML model, and how ChatGPT further enhanced
their feedback (see Section 4.1.1). Second, we report how teachers interacted with
the ChatGPT-enhanced feedback itself, focusing on the specific actions they performed such as adding, editing, or removing content (see Section 4.1.2). Finally, we
describe how these teacher interactions related to particular learner-centered feedback
components, highlighting which dimensions were most frequently adjusted (see
Section 4.1.3).

4.1.1. How teachers missed learner-centered feedback component and accepted
ML suggestions
Table 1 summarises the analysis of teachers’ missing learner-centered feedback components and their acceptance of ML-generated suggestions. The ML model most
frequently identified omissions in Meeting Learning Objective and Student–Teacher
Relationship. Specifically, 20 teachers omitted the Meeting Learning Objective component, with 16 accepting the ML-generated suggestion, and 14 omitted Student–
Teacher Relationship, with 12 accepting the suggestion. High acceptance was also
observed for Affirmation and Encouragement, which was missing in 6 cases but
accepted by all teachers.
4.1.2. How teachers interacted with ChatGPT-enhanced feedback
After receiving AI-enhanced feedback, 12 of the 21 teachers made further revisions
at the sentence level, while the remainder left the text unchanged. As shown in
Table 2, the most common action was editing (f = 32), followed by removing information (f = 27).
The most frequent type of editing teachers performed was simplifying and calibrating ChatGPT’s positive feedback (code: Edit–Praise, f = 11). For instance, PT03
revised ChatGPT’s feedback from ‘First of all, I want to congratulate you on completing your assignment!’ to ‘Well done on completing your assignment’. Another
frequent type of editing involved correcting ChatGPT’s feedback (code:
Edit–Correction, f = 9). For example, PT15 revised ‘Good: Your content was largely
Table 1. Learner-centered feedback components identified by the ML model and accepted by
teachers at the sentence level.
The number of
The number of
Acceptance rate (of
teachers with
teachers accepting missing components)
Dimension
Component
missing component
ML suggestion
(%)
Future impact Upcoming similar tasks
100%
Future impact Meeting learning objective
80%
Sensemaking Strengths and weaknesses
0%
Sensemaking Performance summary
66.7%
Agency
Active role
0%
Agency
Affirmation and encouragement
100%
Agency
Student-teacher relationship
85.7%
Note. Percentages are calculated as the number of teachers accepting the ML suggestion divided by the number
of teachers with a missing component.

Table 2. Revision actions taken by teachers on ChatGPT-enhanced feedback (number and percentage of feedback sentences coded for each action type).
Code
Brevity
Content

Sub-code
Simplification
Correction
Elaboration
Suggestion
Encouragement
Politeness
Praise

Add
Edit
0 (0%)
3 (9.4%)
0 (0%)
9 (28.1%)
5 (62.5%)
2 (6.3%)
1 (12.5%)
1 (3.1%)
Tone
0 (0%)
3 (9.4%)
0 (0%)
3 (9.4%)
2 (25.0%)
11 (34.4%)
Total
8 (100%)
32 (100%)
Note. Percentages are calculated within each action type (Add, Edit, Remove).

Remove
0 (0%)
0 (0%)
3 (11.1%)
9 (33.3%)
8 (29.6%)
1 (3.7%)
6 (22.2%)
27 (100%)

clear and relevant to the topic’ to ‘Good: Your content was clear and relevant to
the topic’.
The most frequent removal teachers performed was deleting suggestions generated
by ChatGPT (code: Remove–Suggestion, f = 9). For example, PT21 revised the feedback
from ‘Continue to leverage this approach, but also think about how you can use
visuals to create a seamless narrative throughout your presentation’. to ‘Continue to
leverage this approach’. Another frequent removal involved adjusting ChatGPT’s
motivational statements (code: Remove–Encouragement, f = 8). For example, PT03
revised ‘It’s always commendable to see you putting in the effort, and I appreciate
the thought you put into your presentation’. to ‘It’s always commendable to see you
putting in the effort’. Another common removal was deleting overly positive praise
generated by ChatGPT (code: Remove–Praise, f = 6). For example, PT15 revised
‘You’ve made significant progress, and I can see your passion for the subject shining
through your presentation!’ to ‘You’ve made significant progress!’
4.1.3. How teachers interacted with ChatGPT-enhanced feedback in relation to
different learner-centered feedback components
As shown in Table 3, teachers’ interactions with AI-powered feedback most often
concerned Student–Teacher Relationship (f = 24), particularly through encouragement
(Student–Teacher Relationship–Encouragement, f = 11). For example, to remove overly
general encouragement, PT05 removed ‘Remember, every presentation is a learning
opportunity, and you’re already on the right track!’
4.2. RQ2. Teachers’ perception of the role of AI-powered feedback tools?
As shown in Table 4, the most widely acknowledged benefit was that the ML analysis
promoted reflection on feedback practices (code: promotes reflection, n = 14).
Improvements in language and structure were the second most frequently reported
benefit (code: language and structure, n = 11), and nearly half noted the tool’s ability
to help them identify missing feedback components (n = 10). Only two teachers explicitly mentioned time-saving as a benefit (n = 2). On the other hand, challenges were
less commonly raised, with the need for further human editing (n = 9), inconsistent
tone (n = 7), potential misinformation (n = 5), and trust issues (n = 5). Overall, all 21
teachers reported benefits, compared with 11 who described challenges. This suggests
that while teachers recognised the usefulness of the ML analysis and ChatGPT in
refining and reflecting on their feedback, concerns about authenticity, accuracy, and
alignment with personal teaching styles tempered their overall enthusiasm.
4.2.1. Teachers’ perceptions of the benefits of using AI-powered feedback tools
The most widely cited benefit was that the ML analysis promoted reflection on
teachers’ feedback practices (code: Promotes Reflection, n = 14). For example, PT15
noted, ‘I miss that part of affirmation and encouragement… this part of the encouragement is quite important for students, so they don’t feel disappointed… and then
the learning objectives, yeah, I think that I also missed that bit… but yeah, it totally
makes sense to have at least one line: OK, this is for a presentation and then we

Dimension
Component
Simplification
Correction
Elaboration
Suggestion
Encouragement
Future Impact
Upcoming similar tasks
0 (0%)
3 (21.4%)
3 (21.4%)
8 (57.1%)
0 (0%)
Future Impact
Meeting learning objective
0 (0%)
0 (0%)
1 (100.0%)
0 (0%)
0 (0%)
Sensemaking
Strengths and weaknesses
0 (0%)
3 (30.0%)
0 (0%)
0 (0%)
0 (0%)
Sensemaking
Performance summary
0 (0%)
0 (0%)
0 (0%)
0 (0%)
0 (0%)
Agency
Active role
0 (0%)
0 (0%)
0 (0%)
1 (100.0%)
0 (0%)
Agency
Affirmation and encouragement
2 (40.0%)
0 (0%)
0 (0%)
0 (0%)
1 (20.0%)
Agency
Student-teacher relationship
1 (4.2%)
0 (0%)
1 (4.2%)
1 (4.2%)
11 (45.8%)
Note. Percentages are calculated within each learner-centered component (row), using the row total as the denominator.

Politeness
0 (0%)
0 (0%)
1 (10.0%)
0 (0%)
0 (0%)
0 (0%)
3 (12.5%)

Praise
0 (0%)
0 (0%)
6 (60.0%)
2 (100.0%)
0 (0%)
2 (40.0%)
7 (29.2%)

Table 3. Teachers’ interactions with AI-powered feedback tools in relation to learner-centered feedback components at the sentence level.
Total
14 (100%)
1 (100%)
10 (100%)
2 (100%)
1 (100%)
5 (100%)
24 (100%)

Table 4. Teacher perceptions of AI-powered feedback tools.
Sub-code
Count (n)
Teaching > 5 Years
Teaching ≤ 5 Years
Identifying missing content
10 (47.6%)
4 (19.0%)
6 (28.6%)
Improves language and structure
11 (52.4%)
7 (33.3%)
4 (19.0%)
Promotes reflection
14 (66.7%)
7 (33.3%)
7 (33.3%)
Saves time
2 (9.5%)
0 (0.0%)
2 (9.5%)
Total number of teachers
21 (100%)
12 (57.1%)
9 (42.9%)
Challenge
Inconsistent tone
7 (63.6%)
6 (54.5%)
1 (9.1%)
Need for human editing
9 (81.8%)
7 (63.6%)
2 (18.2%)
Potential misinformation
5 (45.5%)
4 (36.4%)
1 (9.1%)
Trust issues
5 (45.5%)
5 (45.5%)
0 (0.0%)
Total number of Teachers
11 (100%)
8 (72.7%)
3 (27.3%)
Note. Percentages are calculated using the total number of teachers within each category as the denominator
(Benefit: n = 21; Challenge: n = 11).
Code
Benefit

are giving you feedback so you can improve your presentation skills when you go
and then try to find a job’. The second most widely reported benefit was that
ChatGPT improved the language and structure of teachers’ feedback (code: Improves
Language and Structure, n = 11). For example, PT10 reflected that, ‘…the artificial
intelligence tools will help me improve my language and make my feedback easy
to understand, because [it] can paraphrase my thinking and analyse what I want to
[express] to students’. Another widely recognised benefit was that the ML analysis
helped teachers identify missing learner-centered feedback components (code:
Identifying Missing Component, n = 10). For example, PT15 noted, ‘I miss that part
of affirmation and encouragement… this part of the encouragement is quite important for students, so they don’t feel disappointed… and then this part of the student
relationship that is also good because it’s true when we write this we always regard
to tell the students, OK, if you have any questions… please come and ask me’.
Finally, two teachers (n = 2) explicitly mentioned that the tool saved them time in
drafting their feedback, though this was less commonly reported compared to other
benefits.
4.2.2. Teachers’ perceptions of the challenges of using AI-powered feedback
tools
The most frequently reported challenge was that ChatGPT’s output often required
some degree of human editing (code: Need Human Editing, n = 9). For example,
PT06 stated, ‘OK, so like normal chatGPT, it tends to inflate it. I will be editing.
Yeah. While it’s it’s there as a tool to help me, but it’s not there to finalise everything that I have’. Another frequently reported challenge was inconsistency of tone
in ChatGPT-enhanced feedback (code: Inconsistent Tone, n = 7). For example, PT07
noted, ‘Because it changes it into its own speaking style, and it’s a very recognisable
speaking style… I think the teacher voice really, really needs to come through very
strongly… and it will be noticeable [for students] if you don’t sound like yourself ’.
When comparing teaching experience, teachers were grouped as early-career (≤5 years
of experience) or more experienced (>5 years of experience), following a distinction
commonly used in prior research (29, 30). Teachers with more than five years of
experience reported challenges more frequently than those with less experience,
particularly in relation to inconsistent tone and the need for further human editing,
as shown in Table 4. This suggests that more experienced teachers may be more

attuned to issues of voice, accuracy, and authenticity in AI-generated feedback,
whereas less experienced teachers expressed fewer concerns overall.

5. Discussion
First, our findings suggest that AI-powered feedback tools supported teachers in identifying missing learner-centered feedback components while simultaneously encouraging
reflection on their feedback practices. In RQ1, the ML model most frequently flagged
omissions in Meeting Learning Objective and Student–Teacher Relationship (see Table 1),
both of which were often accepted by teachers to be incorporated into their feedback
with support from ChatGPT. In RQ2, teachers described these prompts as beneficial
under the codes Identifying Missing Components and Promotes Reflection (see Table 4),
emphasising that such suggestions encouraged them to reconsider aspects of their feedback practice in need of improvement. These findings suggest that the tools were most
valuable as reflective prompts that surfaced overlooked aspects of feedback, rather than
as providers of finalised text (Albadarin et al. 2024; Carless and Boud 2018). These
findings indicate that AI-powered systems can prompt teachers to evaluate and refine
their feedback, aligning with the notion of feedback as a dialogic and iterative process
of sensemaking and action rather than a one-way transmission of information (Carless
and Boud 2018; Winstone and Carless 2019). In this study, the ML model and ChatGPT
within the AI-powered feedback system made invisible gaps visible by highlighting
missing elements and providing suggestions, thereby functioning as scaffolds for teachers’
evaluative judgement (Tai et al. 2018).
Second, teachers engaged heavily in calibrating tone, especially around praise and
encouragement. In RQ1, this was most evident in the high frequency of Edit–Praise,
Remove–Encouragement, and Remove–Praise codes (see Table 2), where teachers systematically moderated exaggerated or overly personal language. In RQ2, these revisions were
mirrored in interview responses coded as Inconsistent Tone (see Table 4), where teachers
described ChatGPT’s phrasing as overly effusive, inconsistent with their professional
voice, or even patronising. This supports earlier findings that praise is effective only
when it is specific and realistic (Hyland and Hyland 2001). The results show a consistent
pattern: teachers’ interactions with AI output often involved reducing stylistic excess
and modulating tone to preserve authenticity and credibility in their teaching voice
(Albadarin et al. 2024; Ji et al. 2023), with broader evidence that the relational/affective
dimensions of feedback require human oversight (Dai et al. 2023). Extending this literature, our findings illustrate how teachers operationalise this oversight in practice by
selectively retaining, editing, or removing AI-generated praise, revealing the specific
actions teachers take to maintain a professional and relationally appropriate tone when
working with GenAI feedback tools.
Third, teachers consistently used post-editing to correct terminology, reduce exaggeration, adjust structure, or delete generic content. In RQ1, these actions were captured
most clearly in the Edit–Correction and Remove–Suggestion codes (see Table 2), where
teachers refined ChatGPT’s draft to improve precision, remove redundancy, or add
necessary detail. In RQ2, similar concerns were reflected in interview responses coded
as Need Human Editing (see Table 4), where teachers reported that revising AI output
often required as much time and attention as writing feedback from scratch. These

findings illustrate an ‘assist but verify’ pattern: while GenAI accelerates drafting, it does
not replace the evaluative and contextual expertise of teachers (Kasneci et al. 2023).
This mirrors known limitations of large language models – including hallucination,
verbosity, and stylistic inflation (Ji et al. 2023; Kasneci et al. 2023) – and supports
arguments that GenAI is most effective when positioned as a collaborator under critical
oversight (Albadarin et al. 2024). Extending this literature, our analysis reveals how
teachers exercise this oversight by actively reshaping AI-generated feedback through
targeted correction and removal actions, demonstrating that professional judgement
remains central to ensuring accuracy, contextual relevance, and pedagogical appropriateness in feedback supported by GenAI tools.
Fourth, teachers’ revisions clustered most strongly in the Agency dimension, particularly around student–teacher relationship building. In RQ1, this was evident in the high
frequency of Encouragement, Praise, and Politeness (see Table 3, where teachers edited
or deleted AI-generated motivational statements they perceived as excessive or inappropriate. In RQ2, interview responses coded as Inconsistent Tone and Trust Issues (see
Table 4) confirmed these concerns, with teachers describing such statements as overly
personal, unrealistic, or misaligned with their professional stance. These results confirm
that the affective dimension of feedback cannot be easily delegated to AI (Carless and
Boud 2018; Winstone and Boud 2022). As Carless and Boud (2018) emphasise, trust
and relational coherence are central to feedback, while Winstone and Boud (2022) frame
feedback as deeply relational. Teachers’ selective filtering of AI-generated relational
elements thus reflects a deliberate effort to preserve authenticity and coherence in their
professional identity (Boud and Molloy 2013; Carless and Boud 2018; Nicol, Thomson,
and Breslin 2014).
Finally, teaching experience emerged as an important lens through which teachers
evaluated the tools. In RQ2, teachers with more than five years of experience raised
a broader set of challenges across all relevant codes – including Need Human Editing,
Inconsistent Tone, Trust Concerns, and Risk of Misinformation (see Table 4). They
emphasised the burden of revising AI-assisted feedback text, concerns about stylistic
inflation, and the potential risks of relying on outputs that might be inaccurate or
misaligned with professional standards. By contrast, less experienced teachers more
often highlighted benefits such as Identifying Missing Components and Saves Time,
indicating that they valued AI as a scaffold for surfacing overlooked elements and
streamlining their workflow. This contrast suggests that teaching experience strengthens evaluative judgement, heightening sensitivity to issues of authenticity, reliability,
and pedagogical alignment, echoing arguments that experienced teachers develop
more nuanced feedback judgement and a stronger orientation towards relational
authenticity (Carless and Boud 2018; Nicol, Thomson, and Breslin 2014). For less
experienced teachers, GenAI appeared to function primarily as a scaffold that helped
them identify missing components in their feedback and save time when drafting
responses. These benefits were viewed as efficiency gains and practical supports,
contrasting with the broader range of challenges emphasised by experienced teachers
(Boud and Molloy 2013; Kasneci et al. 2023). These findings indicate that teaching
experience significantly shaped how teachers perceived the affordances and limitations of AI-powered feedback tools (Kasneci et al. 2023). Extending the current
literature, our results also highlight a potential developmental risk: if novice teachers

increasingly defer to AI suggestions, their opportunities to build independent feedback judgement may be reduced. Future research should therefore investigate how
sustained use of AI-supported feedback tools shapes teachers’ professional development over time, particularly through longitudinal designs.

6. Implications
First, the findings suggest that AI-powered feedback tools should be positioned as
scaffolds rather than replacements for teacher judgement. While teachers valued prompts
and suggestions, they systematically intervened to recalibrate tone, relational language,
and content accuracy. This highlights a critical risk: if positioned as autonomous feedback providers, AI systems may erode teacher authority, diminish relational authenticity,
or normalise generic and misleading feedback (Selwyn 2019). Institutions should therefore
frame AI as an assistant that stimulates reflection and accelerates drafting, while making
clear that accountability and ethical responsibility for feedback rest with teachers
(Winstone and Carless 2019). Professional development must move beyond basic tool
training to include critical engagement with the risks of over-reliance, de-skilling, and
erosion of professional voice (Boud and Molloy 2013; Winstone and Carless 2019).
Second, the results raise design implications for AI-powered feedback tools.
Although teachers appreciated the ML model’s detection of missing components,
ChatGPT’s outputs often contained inflated tone, generic phrasing, or relational
claims that clashed with teachers’ professional norms. This reflects a broader tension
between fluency and appropriateness: highly polished text can mask inaccuracy, bias,
or pedagogical misalignment, thereby increasing rather than reducing workload
(Holmes, Bialik, and Fadel 2019; Kasneci et al. 2023). Design improvements should
therefore prioritise transparency and teacher control over automation (Holmes, Bialik,
and Fadel 2019). Adjustable tone parameters, discipline-specific templates, and filters
for exaggeration may help (Kasneci et al. 2023), but only if they demonstrably reduce
cognitive load rather than shift hidden labour back onto teachers (Selwyn 2019).
Without careful design features such as transparency controls, adjustable tone settings, and discipline-specific templates, there is a risk that AI adoption could exacerbate rather than alleviate workload pressures, echoing concerns about implementation
of AI in education (Selwyn 2019).
Third, the study highlights broader implications for practice and research. Our findings indicate that the usefulness of AI tools is mediated by teaching experience: novice
teachers valued efficiency gains such as identifying missing components and saving time,
whereas experienced teachers reported a wider range of challenges, including concerns
about tone consistency and the need for extensive human editing. This contrast suggests
that professional experience strengthens teachers’ evaluative judgement, making them
more attentive to authenticity, reliability, and pedagogical alignment (Carless and Boud
2018; Winstone and Boud 2022). Without attention to these differences, institutional
adoption risks privileging convenience over authenticity and reinforcing inequities in
teacher development (Selwyn 2019; Williamson and Piattoeva 2022). Future research
should therefore move beyond surface measures of linguistic quality to critically examine
whether AI sustains – or diminishes – the relational, pedagogical, and ethical dimensions
of feedback (Luckin et al. 2016). To understand how teacher-facing AI-supported

feedback practices affect students’ experiences with feedback, future research should also
incorporate student perspectives to examine how AI-assisted feedback is perceived in
terms of usefulness, clarity, and usability, and whether such perceptions translate into
meaningful improvements in students’ feedback engagement and learning. Longitudinal
and cross-disciplinary studies are needed to determine whether repeated reliance on AI
strengthens teachers’ evaluative judgement or gradually displaces it (Luckin et al. 2016).

7. Conclusion
This study investigated how teachers interact with and perceive AI-powered feedback
tools when providing learner-centered feedback. By analysing both the revisions
teachers made to AI-enhanced feedback and their reflections in interviews, the
findings demonstrate that AI can play a supportive role in prompting teachers to
identify missing components, refine language and structure, and reflect on their
feedback practices. The ML model was particularly effective at drawing attention to
overlooked elements such as learning objectives and relational aspects, while ChatGPT
often contributed fluency and organisation. However, teachers exercised strong professional agency throughout the process, frequently editing or removing AI-generated
content to maintain authenticity, balance, and alignment with their pedagogical
stance. These patterns reveal that AI can scaffold feedback design, but the responsibility for ensuring appropriateness, credibility, and relational sensitivity remains
firmly with teachers.
Overall, the findings underscore the dual nature of AI assistance in feedback
provision. On the one hand, AI tools can enhance efficiency, surface overlooked
components, and support reflection, particularly for less experienced teachers. On
the other hand, challenges such as inconsistent tone, exaggerated praise, generic
suggestions, and the need for post-editing demonstrate that AI outputs cannot be
adopted uncritically. More experienced teachers in particular highlighted concerns
around authenticity and professional voice, suggesting that AI’s effectiveness is shaped
by teachers’ evaluative judgement. These insights highlight the importance of designing AI feedback tools that are customisable, transparent, and sensitive to different
pedagogical contexts. When framed and used as scaffolds rather than replacements,
such tools have the potential to extend rather than undermine the human dimensions of feedback.

Disclosure statement
No potential conflict of interest was reported by the author(s).

Ahmad Ari Aldino
Bhagya Maheshi
Yuheng Li
Yi-Shan Tsai

Dragan Gašević
Guanliang Chen
