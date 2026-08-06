---
source_url: "https://doi.org/10.1145/3816046.3816288"
ingested_date: 2026-08-06
sha256: 387c6f7ffa2067f1212ea953938d4514f22bc1067a6b9044def7398287870358
---

# From Confusion to Consolidation: A Staged Conversational Workflow for Post-Lecture Review

**Authors:** Mengqi Fang, Dennis Reidsma
**Venue:** CUI 2026, July 21-24, 2026, Bremen, Germany
**DOI:** https://doi.org/10.1145/3816046.3816288

## Full Text (truncated to 50k)

From Confusion to Consolidation: A Staged Conversational
Workflow for Post-Lecture Review
Mengqi Fang

Stockholm University
Stockholm, Sweden
University of Twente
Enschede, Netherlands
mefa2953@student.su.se

Abstract
Post-lecture review involves clarifying confusion and consolidating understanding, yet existing AI tools typically support these
processes separately, often as reactive question-answering or isolated reflective prompts, without grounding review in what learners
found confusing during the lecture. We present a staged conversational workflow grounded in learners’ in-situ confusion across three
stages: Recognize, Resolve, and Consolidate. We operationalize this
workflow in KnowLoop, a dual-agent system where the Teaching
Assistant supports targeted clarification and the Peer scaffolds reflective teach-back. We report findings from a user study with 22
participants. Results show that confusion points served as personalized anchors for review, that clarification grounded in lecture
context enabled more targeted support than general-purpose AI,
and that teach-back prompted learners to explain their understanding, reveal conceptual gaps, and connect ideas across the lecture.
Together, these findings suggest that post-lecture review can be
structured as a staged conversational workflow grounded in learners’ in-situ confusion.

CCS Concepts
• Human-centered computing → Human computer interaction (HCI); • Applied computing → Interactive learning
environments.

Keywords
Personalized Learning, Post-Lecture Review, Learning by Teaching,
Conversational Agents
ACM Reference Format:
Mengqi Fang and Dennis Reidsma. 2026. From Confusion to Consolidation:
A Staged Conversational Workflow for Post-Lecture Review. In ACM Conversational User Interfaces 2026 (CUI ’26), July 21–24, 2026, Bremen, Germany.
ACM, New York, NY, USA, 5 pages. https://doi.org/10.1145/3816046.3816288

1

Introduction

In higher education, lecture-based instruction remains a central
mode of knowledge delivery [6]. Post-lecture review is an important part of this learning process, and students increasingly turn
to AI tools for support [19]. In practice, learners often use large

This work is licensed under a Creative Commons Attribution 4.0 International License.
CUI ’26, Bremen, Germany
© 2026 Copyright held by the owner/author(s).
ACM ISBN 979-8-4007-2741-2/26/07
https://doi.org/10.1145/3816046.3816288

Dennis Reidsma

Human Media Interaction
University of Twente
Enschede, Netherlands
d.reidsma@utwente.nl
language models as question-answering tools when reviewing after
the lecture [17]. However, such review often starts only after the
lecture has ended, detached from the moments when understanding
originally broke down. Research shows that learners frequently
misremember or reinterpret their difficulties after the lecture [4].
Confusion is highly individualized and temporally situated [13],
which means generic review materials and generic AI explanations
may miss the specific breakdowns that matter most to each learner.
Addressing this requires support for two distinct cognitive processes in post-lecture review: clarification, which resolves specific
points of confusion through targeted explanation, and consolidation, which deepens understanding through active sense-making.
Learning by teaching is a well-studied mechanism for consolidation, as explaining concepts to others helps learners reorganize
knowledge, surface hidden gaps, and achieve deeper understanding
[1, 5, 14]. Recent work has begun to apply AI to both processes:
AI tutors and chatbot systems support clarification by responding
to learner queries [8, 10], while teachable-agent designs support
consolidation by prompting learners to explain concepts to an LLM
[11, 14]. Yet broader GenAI tools for learning still often function
as reactive information providers, with documented risks of overreliance and limited support for reflective articulation [3, 12]. A
review workflow that links learners’ in-situ confusion to both clarification and consolidation remains absent.
Recent research has explored multi-agent educational systems
as a direction for role-based support. Some systems deploy rolespecific agents to decompose instructional tasks or adapt feedback
to learner needs [7, 16, 20]; others distinguish between tutor-like
and peer-like agents to provide different forms of learner support
[3, 9, 15]. However, these roles are typically treated as functional
system components rather than interactional scaffolds for distinct
cognitive transitions. Nor are they anchored in learners’ own in-situ
confusion to structure movement from expert-guided clarification
to peer-elicited consolidation within a single review session.
We address this gap with KnowLoop, a dual-role conversational
system for post-lecture review organized around learners’ in-situ
confusion as a shared anchor. Because clarification requires expertguided input and consolidation requires learners to articulate understanding outward, these stages call for distinct conversational
relationships and motivate the use of separate agents. This distinction draws on scaffolding theory, which suggests that different
cognitive tasks require qualitatively different forms of interactional
support [18]. KnowLoop implements three stages: Recognize, where
learners mark confusion during lectures; Resolve, where a Teaching
Assistant provides context-grounded clarification; and Consolidate,

CUI ’26, July 21–24, 2026, Bremen, Germany

Mengqi Fang and Dennis Reidsma

Figure 1: System flow of KnowLoop illustrating the Recognize–Resolve–Consolidate review workflow. (a) Learners first
recognize in-situ confusion points during lecture viewing. (b) In post-lecture review, they resolve specific confusion points
through dialogue with the Teaching Assistant grounded in the marked lecture context. (c) Finally, learners consolidate their
understanding through teach-back with the Peer, supporting reflection at both the confusion-point level and the lecture level.
where a Peer scaffolds reflective teach-back. We report findings
from a formative study with 22 participants. Formally, our investigation was guided by the following research question: RQ) How does
a staged conversational workflow, spanning confusion recognition, resolution, and consolidation, shape learners’ postlecture review experiences? Our findings show that structuring
review around in-situ confusion supports personalized clarification
and prompts reflective articulation, offering design directions for
how role-based conversational agents can scaffold distinct phases
of post-lecture learning.

2

KnowLoop System

KnowLoop operationalizes the staged conversational workflow
proposed in this paper by organizing post-lecture review around
learners’ in-situ confusion.
Starting from confusion moments marked during lectures, the
system supports post-lecture review through two complementary
agents. The Teaching Assistant provides targeted clarification, while
the Peer scaffolds reflective teach-back for consolidation. Because
these activities require different conversational relationships, they
are implemented through separate agents rather than a single conversational partner.

As illustrated in Figure 1, the workflow consists of three stages:
Recognize, Resolve, and Consolidate. Recognize takes place during
lecture viewing, while Resolve and Consolidate structure the postlecture review process.
Recognize: During lecture viewing, learners indicate moments
of confusion by pressing a capture button whenever they feel their
understanding break down. The system records the timestamp of
each button press and marks it as a confusion point.
These timestamps are then aligned with the lecture transcript and
expanded to include the surrounding instructional content on the
same topic. This allows each confusion point to be situated within
its original narrative context, rather than treated as an isolated
moment. During post-lecture review, learners can revisit these
preserved moments of confusion without having to reconstruct
their questions from memory.
Resolve: In the post-lecture review phase, previously marked
confusion points are automatically presented in the interface together with the associated transcript segment, a short summary
of the surrounding content, and related keywords. Learners then
select a specific confusion point and pose questions to the Teaching
Assistant (referred to as Eva in the system interface). The Teaching
Assistant uses the associated lecture transcript to ground its clarification in the original instructional content. In our implementation,

From Confusion to Consolidation: A Staged Conversational Workflow for Post-Lecture Review

this role is powered by GPT-4o. Rather than treating the confusion
point as an isolated moment, the Teaching Assistant draws on the
surrounding lecture context linked to that point, so the response
can clarify what was unclear.
To maintain focus, the interaction is constrained to address one
confusion point at a time, preventing the clarification from expanding beyond the learner’s original point of difficulty.
Consolidate: After resolving all confusion points, learners enter
a teach-back module by clicking into the Peer interaction stage.
The Peer (referred to as Peter in the system interface) then initiates
a dialogue, revisiting the previously marked confusion points in the
order they were recorded during the lecture and asking learners to
explain how they now understand each one. Using short follow-up
questions, the Peer encourages learners to reflect, articulate their
thinking, and refine their explanations. The goal is not to provide
further answers, but to help learners externalize and consolidate
their understanding by working through previously confusing concepts. In our implementation, the Peer is also powered by GPT-4o.
This stage guides learners through two levels of teach-back. First,
they explain the concepts associated with their confusion points.
After completing this confusion-focused articulation, they move to
a lecture-level articulation, where they summarize the main idea of
the lecture. This progression is intended to help learners integrate
concepts across the review process, moving from working through
local breakdowns to forming a more coherent understanding of the
whole lecture.

3

Method

Participants: Twenty-two participants (13 male, 9 female; age
range 20–32, M=26.0, SD=2.9) with STEM-related academic backgrounds were recruited from a university community through
posted notices and word of mouth. Participants reported frequent
use of AI tools for study support (AI familiarity M=4.00/5; 83%
reported using AI tools for post-lecture review), but limited prior
knowledge of the lecture content (M=2.45/5) and low engagement in
self-explanation after lectures (M=2.68/5), providing a realistic context for studying both confusion-driven clarification and reflective
teach-back. The study was approved by the Ethics Committee of
the authors’ institution. All participants provided informed consent
prior to participation.
Procedure: Participants used KnowLoop in a simulated individual study setting. They watched an 18-minute pre-recorded
introductory lecture on reinforcement learning1 , which was an
unfamiliar topic for most participants, and marked moments of
confusion during viewing using the capture button. After viewing,
they reviewed their marked confusion points by posing questions
to the Teaching Assistant, then engaged in the Consolidate stage
through two teach-back activities: explaining the concepts associated with their confusion points and summarizing the main idea of
the lecture to the peer.
Data Collection and Analysis: We collected confusion logs
and dialogue transcripts from the Resolve and Consolidate stages.
We used the confusion logs to characterize marking patterns and
the transcripts to calculate the mean and standard deviation of interaction length across the two stages. Participants engaged in fewer
1 https://www.youtube.com/watch?v=Z-T0iJEXiwM&t=37s

CUI ’26, July 21–24, 2026, Bremen, Germany

Figure 2: Each row represents a participant, with color intensity reflecting the normalized density of confusion markers
aggregated locally. The visualization shows that confusion
occurred at different moments for different learners, with
no lecture segment consistently eliciting confusion across
participants.

dialogue turns in Resolve (M=3.18, SD=1.14) than in Consolidate
(M=16.36, SD=5.29). Semi-structured interviews were conducted
after each session, focusing on participants’ experiences with the
workflow and role transitions. Interview transcripts were analyzed
using reflexive thematic analysis [2].

4

Findings

Our analysis identified three themes that describe how the staged
workflow shaped learners’ post-lecture review experiences.
Confusion points functioned as learner-defined anchors
for post-lecture review, rather than shared indicators of lecture difficulty. Across participants, confusion density varied substantially over time, with no single lecture segment consistently
eliciting confusion (Figure 2). This indicates that moments of breakdown did not converge temporally across learners, highlighting
the highly personalized nature of confusion during lecture viewing.
Participants described the marking action as low-effort and helpful
for preserving moments of breakdown without disrupting the flow
of watching the lecture.
Rather than reconstructing questions after the fact, learners used
confusion points to capture their understanding at the moment difficulty occurred. As one participant noted, “When I didn’t understand
something, I didn’t need to write it down. I could just capture it
directly.” (P7) Beyond capturing moments of misunderstanding,
several participants also repurposed confusion points as personal
review markers for important concepts. For these learners, marking was not limited to confusion but also served as a way to flag
key ideas for later review. As one participant explained, “It wasn’t
confusion—I clicked because it was an important formula to review
later.” (P15)
Grounding clarification in learners’ marked confusion
and lecture context enabled focused, low-effort clarification
aligned with the course. Participants consistently described the
Teaching Assistant as providing clear, course-aligned explanations.

CUI ’26, July 21–24, 2026, Bremen, Germany

Because each confusion point was presented together with its associated transcript segment, learners could engage directly with
the specific moment of difficulty they had marked rather than first
establishing context. As one participant explained, “The biggest
difference is that GPT has no idea what happened in the lecture
. . . but this system knows the entire lecture.” (P18) Another noted
that this allowed them to “ask questions much more concisely.” (P9)
Beyond reducing interaction costs, the Teaching Assistant actively managed instructional relevance rather than simply responding to questions. When one participant asked about the translation
of a minor name mentioned in the lecture, the agent provided the
translation but noted it was not a key point and suggested moving
on to the content below. As the participant reflected, “I felt it had
a very clear grasp of what was important and what was not in
the lecture, which helped improve my review efficiency.” (P5) The
agent also situated explanations within the instructional logic of
the lecture rather than offering standalone definitions. As another
participant noted, “When I asked about a term, it did not just give
me a definition. It explained how it was used in the lecture and why
the instructor brought it up.” (P11)
This contextual grounding further positioned the Teaching Assistant as an epistemic reference point for learners. Participants
actively compared the agent’s interpretation with their own, treating discrepancies as cues to update their understanding. As one
participant described, “After listening to the explanation, I compared it with my own understanding . . . I checked whether there
was a discrepancy. If the Teaching Assistant’s understanding was
correct and mine was wrong, I would just follow its interpretation.
But if I believed I was right, I would engage in a deeper exchange.”
(P22)
At the same time, this lecture-grounded design introduced tensions. When learners attempted to extend beyond the course content, the Teaching Assistant often redirected discussion back to
what had been taught, which some found overly conservative. As
one participant noted, “It kept pulling things back to the course
content; I wanted to understand the broader framework, but it always redirected me to what was in the lecture.” (P14) Others found
responses too long and text-heavy: “The explanation was clear, but
really too long; reading it was tiring. If it could be more concise,
the user experience would be much better.” (P6)
Requiring learners to articulate understanding through
teach-back surfaced conceptual gaps and prompted connections that clarification alone had not revealed. The Consolidate
stage required learners to externalize their understanding, consistently exposing a gap between what they believed they knew and
what they could actually articulate. As one participant reflected,
“Understanding something in your head is one thing; saying it
out loud is another. The act of explaining is what truly tests your
understanding.” (P3) This gap became concrete in practice. One participant described how, after clarifying with the Teaching Assistant
that repeatedly visiting a low-reward restaurant indicated a low
learning rate, teach-back revealed a flawed inference they had not
examined: “I started wondering: does that mean always visiting a
good restaurant means a high learning rate? Peter reminded me
the reverse is not necessarily true. I had to think it through and
realised I was wrong.” (P10)

Mengqi Fang and Dennis Reidsma

The Peer’s follow-up questions further surfaced blind spots learners had not anticipated. As one participant noted, “When he asked
me questions I realised: wait, do I actually know this?” (P14) Several
participants also described how the Peer prompted them to connect
concepts in ways that deepened, rather than simply repeated, what
had been addressed during Resolve.
At the same time, the transition into teach-back introduced friction. Participants described the shift as abrupt and cognitively demanding: “Watching the video felt easy because I was just passively
taking it in. Asking the AI was smooth too, and I felt like I was in
control. But once teach-back started, I realised I could not actually
say it out loud, and that made me anxious.” (P2) As another noted,
“I understood it, but when I tried to say it, I couldn’t — and that
made me anxious.” (P17)
The absence of correctness feedback compounded this uncertainty. Some found the Peer’s questioning repetitive without clear
direction, and several wished to re-engage the Teaching Assistant
when new gaps emerged mid-session: “I hope the TA and teachback modes can switch back and forth; in situations like that, it
would be much more friendly.” (P8) The Peer’s lack of evaluative
feedback, while reducing pressure, also limited learners’ ability to
calibrate whether their revised understanding was accurate.

5

Discussion

This work suggests that post-lecture review can be structured as a
staged conversational workflow anchored in learners’ confusion.
Across the study, confusion points supported individualized review,
while the shift from clarification with the Teaching Assistant to
teach-back with the Peer scaffolded different cognitive activities
within a single session. More broadly, these findings suggest that
role-based conversational framing can support distinct transitions
across stages of review. This principle is not tied to a specific capture
method: whether confusion is marked manually, inferred from
pauses, or detected through other signals, the key is to anchor AI
support in learners’ own difficulties across stages.
Participants also revealed tensions in how they navigated the
staged workflow. Several wanted to move more fluidly between
clarification and consolidation, especially when teach-back surfaced new gaps they wanted to resolve before continuing. This
suggests that learners may experience Resolve and Consolidate as
interleaved rather than strictly sequential processes, pointing to a
need for more flexible review workflows. One possible direction is
to let learners summon the Teaching Assistant during teach-back
when new questions arise. Another is to support multi-agent conversations in which both roles remain available and learners decide
when to shift between expert-guided input and peer-elicited articulation. More broadly, these tensions connect to questions of agency
and identity in human-AI interaction: the Teaching Assistant and
the Peer scaffolded different cognitive activities, while learners
exercised agency in deciding how to move between them.
These design directions raise ethical considerations around learner
agency and control. Structuring review around learners’ self-identified
moments of confusion helps preserve learner control, since AI support is triggered by expressed difficulty rather than imposed by
the system. Distinguishing clarification from consolidation through

From Confusion to Consolidation: A Staged Conversational Workflow for Post-Lecture Review

separate agents may also reduce overly directive instruction and encourage active sense-making. At the same time, such designs should
avoid making learners feel pushed through predefined stages or
overly dependent on agent guidance. Future extensions that infer
confusion automatically may introduce additional risks, including
surveillance and misinterpretation of learner states. If such signals
are used, they should complement, rather than replace learners’
own judgments.

6

Conclusion

In this study, we investigated post-lecture review as a staged conversational workflow that guides learners from confusion recognition
through clarification to consolidation. We implemented this workflow in KnowLoop and conducted a user study with 22 participants
to understand how learners experienced this design. Our findings
suggest that anchoring review in learners’ confusion supported personalized clarification, while the shift from the Teaching Assistant
to the Peer prompted learners to explain their understanding, reveal
conceptual gaps, and integrate ideas across the lecture. Together,
these results show the value of structuring post-lecture review as a
staged conversational workflow grounded in learners’ confusion.
This work is exploratory and has several limitations. The study
focused on a single 18-minute lecture and short-term review interactions, without measuring long-term learning outcomes. With 22
participants and a single topic, generalizability is limited. Future
work should examine how this workflow performs across different lecture formats and subject areas, whether transitions between
stages can be made more adaptive to learners’ emerging needs,
and how individual differences in metacognitive ability influence
confusion-marking behavior and workflow engagement.

Acknowledgments
Large language models were used during manuscript preparation
for language refinement. The authors reviewed and take full responsibility for the final content.

References
[1] Carl A. Benware and Edward L. Deci. 1984. Quality of Learning With an Active
Versus Passive Motivational Set. American Educational Research Journal 21, 4
(1984), 755–765. doi:10.3102/00028312021004755
[2] Virginia Braun and Victoria Clarke. 2006. Using thematic analysis in psychology. Qualitative Research in Psychology 3, 2 (2006), 77–101. doi:10.1191/
1478088706qp063oa
[3] Zhendong Chu, Shen Wang, Jian Xie, Tinghui Zhu, Yibo Yan, Jinheng Ye, Aoxiao
Zhong, Xuming Hu, Jing Liang, Philip S. Yu, and Qingsong Wen. 2025. LLM
Agents for Education: Advances and Applications. arXiv:2503.11733 [cs.CY]
https://arxiv.org/abs/2503.11733
[4] Sidney D’Mello and Arthur Graesser. 2012. Dynamics of affective states during
complex learning. Learning and Instruction 22, 2 (2012), 145–157.
[5] David Duran. 2016. Learning-by-teaching. Evidence and implications as a pedagogical mechanism. Innovations in Education and Teaching International 54, 5
(2016), 476–484. doi:10.1080/14703297.2016.1156011
[6] Scott Freeman, Sarah L. Eddy, Miles McDonough, Michelle K. Smith, Nnadozie
Okoroafor, Hannah Jordt, and Mary Pat Wenderoth. 2014. Active learning increases student performance in science, engineering, and mathematics. Proceedings of the National Academy of Sciences 111, 23 (2014), 8410–8415. doi:10.1073/
pnas.1319030111
[7] Jana Gonnermann-Müller, Jennifer Haase, Konstantin Fackeldey, and Sebastian Pokutta. 2025. FACET: Teacher-Centred LLM-Based Multi-Agent SystemsTowards Personalized Educational Worksheets. arXiv:2508.11401 [cs.HC] https:
//arxiv.org/abs/2508.11401

CUI ’26, July 21–24, 2026, Bremen, Germany

[8] Arthur C. Graesser, Sha Lu, G. Tanner Jackson, Heather H. Mitchell, Maxine
Ventura, Andrew Olney, and Max M. Louwerse. 2004. AutoTutor: A tutor with dialogue in natural language. Behavior Research Methods, Instruments, & Computers
36, 2 (2004), 180–192. doi:10.3758/BF03195563
[9] Ryan Hare and Ying Tang. 2025. Toward Generalized Autonomous Agents: A
Neuro-Symbolic AI Framework for Integrating Social and Technical Support in
Education. arXiv:2508.18406 [cs.MA] https://arxiv.org/abs/2508.18406
[10] Wei Huang, Khe Foon Hew, and Daniel Gonda. 2023. How to design an educational chatbot: Insights from experienced teachers and developers. In Proceedings
of EdMedia + Innovate Learning, Theo Bastiaens (Ed.). Association for the Advancement of Computing in Education (AACE), Vienna, Austria, 1339–1351.
[11] Hyoungwook Jin, Seonghee Lee, Hyungyu Shin, and Juho Kim. 2024. Teach AI
How to Code: Using Large Language Models as Teachable Agents for Programming Education. In Proceedings of the 2024 CHI Conference on Human Factors in
Computing Systems (CHI ’24). Association for Computing Machinery, New York,
NY, USA, Article 652, 28 pages. doi:10.1145/3613904.3642349
[12] Abdessalam Ouaazki, Kristoffer Bergram, Juan Carlos Farah, Denis Gillet, and
Adrian Holzer. 2024. Generative AI-Enabled Conversational Interaction to Support Self-Directed Learning Experiences in Transversal Computational Thinking.
In Proceedings of the 6th ACM Conference on Conversational User Interfaces (CUI
’24). Association for Computing Machinery, New York, NY, USA, Article 13,
12 pages. doi:10.1145/3640794.3665542
[13] David N. Perkins. 1992. Smart Schools: Better Thinking and Learning for Every
Child. Free Press, New York, NY, USA.
[14] Kantwon Rogers, Michael Davis, Mallesh Maharana, Pete Etheredge, and Sonia Chernova. 2025. Playing Dumb to Get Smart: Creating and Evaluating an
LLM-based Teachable Agent within University Computer Science Classes. In
Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems
(CHI ’25). Association for Computing Machinery, New York, NY, USA, Article
126, 22 pages. doi:10.1145/3706598.3713644
[15] Narek Shamamyan, Man Su, and Tomohiro Nagashima. 2025. Co-Designing
Trustworthy Peer Agents with Middle-School Students. In Proceedings of the 24th
Interaction Design and Children (IDC ’25). Association for Computing Machinery,
New York, NY, USA, 535–544. doi:10.1145/3713043.3728847
[16] Jiayi Wang, Ruiwei Xiao, Xinying Hou, and John Stamper. 2025. Enabling MultiAgent Systems as Learning Designers: Applying Learning Sciences to AI Instructional Design. doi:10.48550/arXiv.2508.16659
[17] Shen Wang, Tianlong Xu, Hang Li, Chaoli Zhang, Joleen Liang, Jiliang Tang,
Philip S. Yu, and Qingsong Wen. 2024. Large Language Models for Education: A
Survey and Outlook. arXiv abs/2403.18105 (2024). doi:10.48550/arXiv.2403.18105
[18] David Wood, Jerome S. Bruner, and Gail Ross. 1976. The role of tutoring in
problem solving. Journal of Child Psychology and Psychiatry 17, 2 (1976), 89–100.
doi:10.1111/j.1469-7610.1976.tb00381.x
[19] Lixiang Yan, Lele Sha, Linxuan Zhao, Yuheng Li, Roberto Martínez Maldonado,
Guanliang Chen, Xinyu Li, Yueqiao Jin, and Dragan Gašević. 2023. Practical
and ethical challenges of large language models in education: A systematic
scoping review. British Journal of Educational Technology 55 (2023), 90–112.
doi:10.1111/bjet.13370
[20] Huaiyuan Yao, Wanpeng Xu, Justin Turnau, Nadia Kellam, and Hua Wei. 2025.
Instructional Agents: LLM Agents on Automated Course Material Generation
for Teaching Faculties. arXiv:2508.19611 [cs.AI]


