---
source_url: https://doi.org/10.1016/j.caeai.2026.100572
ingested: 2026-05-10
sha256: fa6d7991e9cc7f9e884d61609589afce0117b7b3a85447e8270d6240a11a2cd3
---

Contents lists available at ScienceDirect

Computers and Education: Artificial Intelligence
journal homepage: www.sciencedirect.com/journal/computers-and-education-artificial-intelligence

Scaffolding critical thinking with generative AI: Design principles for
integrating large language models in higher education
Mireia Vendrell a,* , Samantha-Kaye Johnston b
a
b

Multiagent Systems, Artificial Intelligence Research Institute - Spanish National Research Council (IIIA-CSIC), Barcelona, Spain
Assessment and Evaluation Research Centre (AERC), University of Melbourne, Melbourne, Australia

A R T I C L E I N F O

A B S T R A C T

Keywords:
Generative AI
Large language models
Critical thinking
Higher education
Epistemic agency
Pedagogical design
Learning technology

The rapid adoption of Large Language Models (LLMs) such as GPT-4 and DeepSeek R1 is transforming learning in
higher education, yet unstructured use can weaken critical thinking by encouraging cognitive offloading, met­
acognitive disengagement, and reduced epistemic agency. This paper presents a conceptual and normative
analysis that synthesises research from cognitive psychology, educational theory, and AI ethics to develop a
design-oriented pedagogical framework for integrating LLMs in ways that strengthen, rather than displace,
higher-order thinking. Grounded in design-based research principles, the framework identifies six essential
processes that underpin critical engagement: conceptual interpretation, inferential reasoning, evaluative
judgement, metacognitive regulation, intellectual curiosity, and epistemic integrity. These processes are trans­
lated into eight actionable design principles, including preserving cognitive friction, positioning LLMs as pro­
visional thinking partners, embedding evaluation throughout learning, and sequencing AI-mediated with AI-free
phases. Two illustrative classroom scenarios showcase practical application. The framework offers educators a
theoretically grounded and practically applicable model for cultivating critical thinking and epistemic re­
sponsibility in AI-rich learning environments, contributing to emerging new systems of learning in higher
education.

1. Introduction
Generative AI tools such as GPT-4 and DeepSeek R1 have moved
rapidly from experimental novelties to everyday academic companions.
A recent global survey reports that 86% of university students now use
AI in their studies, with more than half engaging with these tools
weekly, primarily to summarise documents, check grammar, para­
phrase, and generate first drafts (Digital Education Council, 2024).
While often perceived as convenient (though this perception is con­
tested; see Selwyn, 2025), these tools are not designed with educational
goals in mind. Large Language Models (LLMs) generate responses using
probabilistic language modeling, predicting likely word sequences from
training data, rather than through conceptual understanding or
reasoning. This distinction has significant pedagogical implications.
Without careful integration, widespread adoption risks cognitive off­
loading, diminished metacognitive engagement, and weakened
epistemic agency, which we define as the learner's capacity to critically
evaluate, justify, and take ownership of knowledge.

This paper advances the position that LLMs are not educationally
neutral; their effects are contingent rather than fixed. While emerging
research has documented both beneficial and harmful outcomes (e.g.,
Deng et al., 2024; Gerlich, 2025), their ultimate impact depends on how
they are designed, including what they afford, obscure, or prioritise, and
on the pedagogical context in which they are implemented. These fac­
tors jointly influence how they are used, what forms of learning they
support or constrain, and whose epistemic values they reflect or exclude.
In response to this complexity, we propose a normative, design-oriented
pedagogical framework for the intentional integration of LLMs into
higher education, with the specific goal of fostering critical thinking.
Rather than banning or embracing these tools wholesale, we argue that
educators must cultivate learning environments in which students
engage critically with AI, using it to extend their reasoning rather than
to replace it.
To understand the educational implications of LLMs, it is essential to
examine how they work. Models such as GPT-4 and DeepSeek R1 are
built on transformer architectures, which use self-attention mechanisms

This article is part of a special issue entitled: GenAI for Higher Edu published in Computers and Education: Artificial Intelligence.
* Corresponding author. Campus UAB Carrer de Can Planas, Zona 2, Bellaterra, 08193, Barcelona, Spain.
E-mail address: mireia.vendrell@iiia.csic.es (M. Vendrell).
https://doi.org/10.1016/j.caeai.2026.100572
Received 11 August 2025; Received in revised form 8 January 2026; Accepted 3 March 2026
Available online 7 March 2026
2666-920X/© 2026 The Authors. Published by Elsevier Ltd. This is an open access article under the CC BY license (http://creativecommons.org/licenses/by/4.0/).

to weigh contextual relationships between words (see Vaswani et al.,
2017). Their training occurs in two stages. First, during pre-training, the
model is exposed to a massive corpora of text to optimise parameters for
probabilistic word prediction. The result is a base model: a system with
broad linguistic knowledge and the ability to predict likely next words in
a sequence. Second, fine-tuning techniques such as instruction tuning
and Reinforcement Learning from Human Feedback (RLHF) align the
model's outputs with human preferences and task-specific formats
(Casper et al., 2023). The result is an assistant model capable of coherent
and contextually appropriate interaction. However, these systems still
lack intentionality, comprehension, or reasoning. They simulate un­
derstanding but do not embody it; an epistemic distinction with critical
implications for their use in educational settings.
Without deliberate integration, students may conflate linguistic
fluency with epistemic validity; that is, they may mistake well-formed
language for justified or reliable knowledge. When learners rely on
LLMs to produce responses without engaging in the underlying
reasoning, critical thinking is at risk of becoming attenuated. Ennis
(1985) defines critical thinking as “reflective and reasonable thinking
that is focused on deciding what to believe or do” (p. 45), a formulation
that emphasises its practical orientations and its role in guiding action.
The Delphi Report (Facione, 1990) elaborates this definition by dis­
tinguishing between cognitive skills, such as interpreting evidence and
drawing inferences, and intellectual dispositions, including
open-mindedness, curiosity, and humility. This distinction underscores
that critical thinking is not only a matter of analytical ability but also of
cultivating habits of mind that sustain inquiry over time. Halpern (2014)
adds that critical thinking is not domain-specific but must be transfer­
able and practiced deliberately across varied contexts, highlighting the
need for intentional and repeated application if it is to become a durable
competency. Importantly, these capacities do not emerge spontaneously
but are cultivated through structured learning, authentic
problem-solving, and dialogic engagement (Abrami et al., 2015; Dwyer,
2023; van Brussel et al., 2020). From a broader perspective, Barnett's
(1997, 2015) notion of criticality extends this view by integrating
thinking, being, and acting. In this formulation, critical thinking is not
confined to the evaluation of arguments or the solving of problems in
isolation. It also involves developing a reflective understanding of
oneself as a learner and a citizen, recognising the values and assump­
tions that shape one's perspectives, and applying the awareness to
engage constructively with the world. Critical thinking reaches its fullest
potential when sound reasoning is linked to ethical commitment and
translated into meaningful action in professional, social, and civic life.
This orientation positions critical thinking as both an intellectual and
moral endeavour, where the goal is not only to reason well but also to act
with integrity and responsibility in the face of complex and contested
issues.
Emerging research supports the concern that LLM use may disrupt
this process. Stadler et al. (2024) found that students who relied on LLMs
for inquiry-based tasks reported significantly lower cognitive load and
produced weaker arguments compared to peers who used traditional
search engines. Complementing these findings, Kosmyna et al. (2025)
recently demonstrated that passive interaction with LLMs is associated
with diminished attentional engagement and reduced cognitive modu­
lation, indicating a measurable decline in sustained mental effort. Ger­
lich (2025) observed a negative correlation between frequent AI use and
critical thinking performance, particularly among younger students,
who showed higher reliance on AI-generated outputs and reduced ca­
pacity for independent evaluation. Similarly, Lee et al. (2025) found that
confidence in AI tools was associated with lower levels of critical
engagement, while self-confidence predicted more thoughtful
reasoning. Yatani et al. (2024) noted that over-reliance on LLMs may
reduce users' tendency to scrutinize content, increasing susceptibility to
misinformation and hallucinated claims. Darvishi et al. (2024)
concluded that repeated use of generative AI as a substitute for effortful
thinking can diminish students' initiative and epistemic agency over

time. Fisher et al. (2025) added that interacting with politically biased
LLMs can shift users' attitudes and decisions toward the model's stance,
even when the bias opposes their prior views, and that such influence
occurs regardless of whether users recognise the bias. A large-scale
systematic review by Zhai et al. (2024) further synthesised these con­
cerns, showing that over-reliance on AI dialogue systems, particularly
those embedded with generative models, can impair critical thinking,
decision-making, and analytical reasoning across higher education
contexts. These findings collectively suggest that unstructured AI use
may erode not only reasoning capacity but also the inclination to reason
at all.
This trajectory, however, is not inevitable. Under thoughtfully scaf­
folded conditions, generative AI has demonstrated the potential to
enhance cognitive development. Studies report improvements in aca­
demic performance (Deng et al., 2024), creativity and problem-solving
(Pardos & Bhandari, 2024), language development (Karataş et al.,
2024), and student motivation (Heung & Chiu, 2025). Critically, Kos­
myna et al. (2025) found that when students first engaged with a task
independently before consulting an LLM, their outputs were signifi­
cantly stronger. This underscores the importance of sequencing and
instructional framing. These results parallel earlier technology in­
tegrations, such as calculators and search engines, which yield learning
gains when embedded in pedagogical designs that preserve key cogni­
tive processes. The question, then, is not whether LLMs support or
hinder learning, but under what conditions they do so.
Answering that question requires more than reactive policy or shortterm restrictions. Generative AI is not a passing disruption but a struc­
tural shift in academic and professional practice. Limiting access may
delay misuse, but does little to cultivate the skills and dispositions stu­
dents need to think and act critically in AI-rich environments. LLMs
challenge educators to rethink how critical thinking, intellectual au­
tonomy, and epistemic responsibility are taught. The ability to collab­
orate with AI systems without surrendering cognitive agency is fast
becoming a core competency in higher education (Lokesh et al., 2024).
This paper, therefore, does not advocate uncritical adoption of LLMs,
nor their exclusion. Instead, it develops a theoretically grounded,
pedagogically actionable framework for scaffolding critical thinking in
AI-enhanced learning environments. To guide the development of the
proposed pedagogical model, this paper adopts a design-oriented con­
ceptual synthesis methodology grounded in the logics of Design-Based
Research (DBR) and instructional-design theory; that is, a normative,
theory-informed approach that prescribes how instruction should be
structured to promote specific educational goals (Reigeluth, 2013).
While it does not report an empirical study, it draws from the episte­
mological commitments of DBR, particularly its emphasis on
theory-informed design, practical relevance, and iterative refinement
(McKenney & Reeves, 2018). Rather than using formal conjecture
mapping (see Sandoval, 2014), the framework advances a set of design
principles explicitly aligned with specific cognitive, metacognitive, and
epistemic processes that support critical thinking in AI-mediated envi­
ronments. It also draws on considerations from AI ethics and on tradi­
tions of critical pedagogy, particularly the Freirean view of education as
a dialogic, emancipatory practice aimed at fostering reflection, action,
and social transformation (Freire, 1970, 1972). This positions the
framework not only as a heuristic guide for instructional design but also
as a normative intervention aimed at preserving epistemic agency and
intellectual autonomy in higher education.
Guided by this position, the aim of the study is to develop a
conceptually grounded, design-oriented pedagogical framework for
integrating LLMs into higher education in ways that preserve and extend
critical thinking.
To this end, the paper addresses the following research questions:
(Sub-RQ1) How does unstructured student interaction with LLMs affect
students' engagement and the development of critical thinking?

(Sub-RQ2) What aspects of students' thinking and learning should be
preserved or enhanced when integrating LLMs into educational practice?

growth. As Facione (1990) emphasises, critical thinking includes not
only cognitive skills but also dispositions such as curiosity, humility, and
intellectual perseverance. These traits are cultivated through sustained
engagement with complexity. Yet these very conditions are often cir­
cumvented when students rely on AI outputs designed to maximize
fluency and minimize friction. Without pedagogical scaffolding, LLMs
risk encouraging a style of engagement that prioritises immediacy over
inquiry, gradually eroding the habits of mind that critical thinking and
meaningful learning demand.

(Sub-RQ3) What pedagogical design principles can guide the use of LLMs
to scaffold critical thinking effectively?
2. Unstructured use of LLMs and its impact on the development
of critical thinking
(Sub-RQ1) How does unstructured student interaction with LLMs affect
students' engagement and the development of critical thinking?

2.2. Metacognitive disengagement: how LLMs undermine self-regulation

To identify the functions that should be preserved when integrating
LLMs into education (explored in Section 3), we must first examine how
unstructured use affects students’ thinking and engagement with
knowledge. This section addresses three interconnected risks: cognitive
offloading, metacognitive disengagement, and epistemic narrowing.
Cognitive refers to effortful processes of interpreting, reasoning, and
evaluating information, metacognitive refers to the monitoring and
regulation of those processes, and epistemic refers to the norms and re­
sponsibilities governing how knowledge claims are evaluated, justified,
and ethically engaged with. Each presents a distinct challenge to the
cultivation of critical thinking in higher education.

Beyond reducing cognitive effort, unstructured AI use weakens stu­
dents’ capacity to monitor and regulate their thinking. This meta­
cognitive disengagement is particularly concerning in settings where
students accept fluent outputs without reflection or verification.
Because these systems generate linguistic fluent and contextconditioned responses, students may mistake surface-level fluency for
conceptual accuracy. This reflects the fluency heuristic, a cognitive bias
in which ease of processing is misinterpreted as truth (Oppenheimer,
2008). Without instructional scaffolding, students may accept
AI-generated outputs at face value, bypassing the reasoning and verifi­
cation that critical thinking requires. This weakens epistemic vigilance,
a key component of reflective judgement.
LLMs also obscure their own reasoning. Their explanations are
generated using the same probabilistic methods as their answers, of­
fering no genuine logic or traceable evidence. Repeated exposure to such
black-box outputs can, therefore, normalise a cognitive style that values
fluency over justification and closure over critical inquiry.
Fan et al. (2024) describe a resulting pattern of metacognitive laziness,
where students not only generate content with LLMs but also defer
judgement about its quality. This often manifests in classroom contexts
as passive acceptance of feedback or resistance to revision. From the
standpoint of critical thinking, it diminishes reflective doubt and itera­
tive reasoning. From a design ethics perspective, it shows how systems
built for convenience discourage sustained mental effort. Ultimately,
these tendencies can lead to epistemic automation. LLMs become default
authorities, even when their claims are opaque or unjustified. The
deeper risk, therefore, is not just poor reasoning but the loss of the
disposition to think critically at all.

2.1. Cognitive offloading: how LLMs diminish effortful thought
LLM tools offer linguistic fluency and rapid responses, but their
convenience introduces a fundamental pedagogical tension: they may
displace the cognitive effort essential to deep learning. When students
rely on LLMs to summarise texts, generate ideas, or explain complex
concepts, they often bypass the productive struggle that underpins
critical thinking. For example, when prompted to explain philosophical
theories or scientific principles, LLMs produce fluent summaries that
mask ambiguity, historical context, or conceptual nuance. The result is a
shift from process to product; a form of what Morozov (2013) critiques
as technological solutionism, where education becomes a matter of effi­
ciency rather than intellectual engagement.
This concern spans disciplines. In STEM fields, students may use
LLMs to generate code or solve equations without engaging with un­
derlying principles. Neurocognitive studies (e.g., Kosmyna et al., 2025)
show that such passive interaction reduces sustained attention and
mental effort. These effects are analogous to the decline in spatial
memory observed with habitual GPS use (Dahmani & Bohbot, 2020).
Over-reliance on LLMs can erode the capacity to construct argu­
ments, interrogate assumptions, and navigate conceptual uncertainty
(Darvishi, 2024; Lee et al., 2025; Stadler et al., 2024), key skills for
sustained inquiry and independent thought. These cognitive and
epistemic dispositions are often bypassed when students default to the
fluency and immediacy of AI-generated responses. The risk is especially
acute among younger learners who may lack the epistemic norms and
metacognitive strategies needed to critically assess AI content. For these
students, LLMs can function as epistemic surrogates, appearing authori­
tative while offering conclusions without justification (Gerlich, 2025).
Cognitive Load Theory helps explain this dynamic. While LLMs
reduce extraneous load by handling surface-level tasks, they may also
suppress germane load, which is the effort involved in constructing
meaning and engaging in deep reasoning (Jose et al., 2025). Stadler
et al. (2024) found that students using LLMs for inquiry-based tasks
reported lower cognitive effort and produced weaker arguments, sug­
gesting a trade-off between fluency and depth. Yet it is precisely this
cognitive friction, involving engagement with ambiguity and
complexity, that fosters deeper learning (D'Mello & Graesser, 2014;
Kapur, 2008).
This trade-off underscores a broader concern: generating coherent
text is not equivalent to critical thought. LLMs streamline superficial
effort but may inhibit the kind of friction necessary for epistemic

2.3. Epistemic narrowing: how LLMs constrain intellectual diversity
In addition to diminishing cognitive and metacognitive engagement,
unstructured LLM use contributes to epistemic narrowing, a process that
constrains the conditions for critical thinking by reducing students’
exposure to diverse, ambiguous, or contested forms of knowledge. These
systems are typically optimised for convergence, producing singular,
self-contained answers that prioritise fluency and coherence over
exploration and uncertainty. As a result, learners are less likely to face
conceptual ambiguity, provisional reasoning, and dialogic exploration,
all of which are essential for inquiry and intellectual growth (Dwyer,
2023).
This narrowing of thought is compounded by hallucination, the
tendency of LLMs to generate fluent but inaccurate or fabricated infor­
mation. Students lacking domain expertise may accept these outputs
uncritically. As McClure et al. (2024) warns, rhetorical fluency can mask
factual weakness. Seamless interfaces further obscure uncertainty,
encouraging passive trust rather than active questioning.
Even when accurate, LLM outputs typically reinforce dominant
knowledge structures. Trained on large-scale internet corpora, they
reproduce mainstream viewpoints while marginalising counterhegemonic or underrepresented perspectives. Much of the training
data originates from Euro-American sources, embedding dominant cul­
tural, linguistic, and epistemic norms, and thereby creating an uneven
landscape of knowledge. For example, students from underrepresented

backgrounds, this limits the visibility of their ways of knowing and
narrows the horizon of whose knowledge is valued. For students situated
within mainstream viewpoints, the risk is enclosure within familiar
worldviews, where alignment with dominant narratives goes unchal­
lenged, reducing opportunities for critical questioning, cultural aware­
ness, or engagement with alternative perspectives. This runs counter to
the aims of critical thinking, which include the ability to ask: Whose
knowledge is represented? What assumptions are embedded in the framing?
What perspectives are excluded? (Kudina et al., 2025). In this way, LLMs
influence not only access to information but also the boundaries of what
is considered legitimate knowledge (i.e., what is considered worth
knowing, questioning, or reimagining). This concern is compounded by
the fact that, to date, many of the most widely used models in education,
including versions of ChatGPT, are not open source; their foundational
architectures, training data, and design choices remain largely inac­
cessible. As a result, these systems not only mediate access to knowledge
but also obscure how content is selected, shaped or silenced.
As Ozalp et al. (2022) argue, this opacity reflects a broader strategy
through which dominant technology platforms consolidate control over
knowledge infrastructures, especially in regulated domains like educa­
tion. Komljenovic et al. (2023) further argue that venture capital-funded
edtech companies are not neutral service providers, but political and
economic actors whose priorities increasingly shape public education
policy. This convergence of platform dominance and investor influence
risks subordinating educational values to commercial logics, with sig­
nificant consequences for critical thinking. When access to knowledge is
governed by proprietary systems aligned with market interests, oppor­
tunities for open inquiry, pluralism, and democratic deliberation are
systematically constrained.
These issues, therefore, are not only cognitive but also ethical and
educational. Critical thinking entails more than analytical skill; it in­
volves intellectual honesty, reflective judgment, and a willingness to
question the foundations of knowledge itself (Paul & Elder, 2007). When
students default to AI-generated answers, they risk bypassing this re­
sponsibility, opting for efficiency over reflection and surface fluency
over meaningful understanding. This shift encourages a pattern of un­
critical acceptance, where the ease of automated outputs displaces the
struggle and curiosity that authentic learning requires. More deeply, it
raises urgent questions about the values we encode into our learning
environments: Are we fostering independent thinkers equipped to question
dominant and commercially driven narratives, or are we conditioning passive
users to accept inherited assumptions without critique? Importantly, the way
we integrate LLMs into education will shape not only how students
learn, but who they become as knowers, questioners, and participants in
a shared intellectual and civic life.

Table 1
Framework integration: from risks and theory to pedagogical design.
Risks of unstructured
LLM use

Intellectual
processes at risk

Educational &
theoretical
foundations

Ethical/
Normative
foundations

Cognitive offloading:
Offloading effort;
skipping deep
engagement

(1) Conceptual
interpretation

Human agency
& Thinking as
part of being

Cognitive offloading:
Accepting fluent but
unexamined
responses

(2) Inferential
reasoning

Metacognitive
disengagement:
Uncritical
acceptance of AI
content

(3) Evaluative
judgement

Metacognitive
disengagement:
Diminished
reflective selfmonitoring

(4)
Metacognitive
regulation

Epistemic narrowing:
Over-reliance on
convergent outputs
→ curiosity erosion
Epistemic narrowing:
Reproduction of bias
and reduction of
perspective diversity

(5) Intellectual
curiosity

Bloom:
Understand,
Analyse
Facione:
Interpretation
Halpern: Verbal
reasoning
Bloom: Analyse,
Evaluate, Create
Facione:
Inference
Halpern:
Hypothesis
testing
Bloom: Evaluate
Facione:
Evaluation,
Explanation
Halpern:
Decision-making
Bloom:
Metacognitive
layer
Facione: Selfregulation
Halpern:
Monitoring
Facione:
Inquisitiveness
Halpern: Flexible
thinking
Facione: Truthseeking, Fairmindedness
Halpern: Ethical
reasoning

(6) Epistemic
integrity

Epistemic
agency
& Interrogation
of knowledge

Epistemic
responsibility
& Reflexivity

Self-directed
learning
& Critical selfunderstanding

Equitable
exploration
& Questioning
norms
Inclusive
participation
& Social
critique and
justice

these processes also speak to broader aims of education, including per­
sonal autonomy, social participation, and ethical knowledge production.
Beyond cognitive performance, these processes contribute to what
Davies and Barnett (2015) describe as criticality: a broader educational
aim encompassing thinking, being, and acting in the world. From this
perspective,
critical
thinking
includes
the
capacity
for
self-understanding, social critique, and principled action. Cultivating
these processes is therefore not only a cognitive task, but also an ethical
and political imperative, especially in the context of AI systems that may
entrench dominant norms and obscure epistemic pluralism.

3. Essential cognitive and metacognitive processes
(Sub-RQ2) What aspects of students' thinking and learning should be
preserved or enhanced when integrating LLMs into educational practice?

3.1. Conceptual interpretation
Conceptual interpretation is the ability to actively construct meaning
by selecting, organising, and integrating information into coherent
mental models. It involves clarifying concepts, discerning relationships,
and translating complex ideas into one's own understanding. This pro­
cess aligns with Bloom's “Understand” and “Analyse” levels (Anderson &
Krathwohl, 2001) and is foundational in Facione's (1990) taxonomy,
where interpretation entails decoding significance and articulating
meaning with precision. Unlike passive comprehension, conceptual
interpretation requires the learner to distinguish core ideas from pe­
ripheral details, reconcile competing views, and connect new input to
prior knowledge. As Dwyer (2017) emphasises, it is through this
constructive engagement that understanding becomes robust, trans­
ferrable, and epistemically grounded. In AI-mediated environments,
where outputs may offer polished explanations without revealing con­
ceptual nuance or complexity, fostering interpretation ensures that
learners remain actively engaged in making meaning rather than

If Section 2 examined how unstructured use of LLMs can attenuate
critical thinking, this section identifies the specific intellectual processes
that must be deliberately supported in AI-enhanced learning environ­
ments. Drawing from Bloom's revised taxonomy (Anderson & Krath­
wohl, 2001), Halpern's psychological model of critical thinking (2014),
and the APA Delphi Report (Facione, 1990), we articulate six essential
and interrelated processes: conceptual interpretation, inferential
reasoning, evaluative judgement, metacognitive regulation, intellectual
curiosity, and epistemic integrity (see Table 1).
Each process underpins higher-order thinking and critical engage­
ment and is increasingly relevant as learners navigate the epistemic
affordances and limitations of AI systems. These capacities are not only
cognitive but also dispositional, as critical thinking involves habits of
inquiry, intellectual humility, and epistemic responsibility. Aligning
with UNESCO's (2023) guidance on digital learning and human agency,

deferring to surface-level coherence.

ask questions, and pursue knowledge beyond instrumental goals.
Although not explicitly listed in Bloom's taxonomy, it is a core disposi­
tion in both Facione's (1990) concept of inquisitiveness and Halpern's
(2014) discussion of flexible, open-minded thinking. Curiosity fuels
cognitive persistence and epistemic openness, prompting learners to
seek novelty, tolerate ambiguity, and explore alternative perspectives.
Ennis (1985) positions it as the drive that sustains inquiry beyond im­
mediate answers. In digitally mediated learning, where LLMs often offer
polished but singular responses, curiosity must be cultivated through
tasks that encourage divergence, dialogic inquiry, and iterative explo­
ration. Ultimately, curiosity is central not only to academic growth but
also to democratic participation and lifelong learning.

3.2. Inferential reasoning
Inferential reasoning refers to the disciplined process of generating
warranted conclusions from evidence. It involves identifying assump­
tions, discerning logical relationships, and predicting implications.
Bloom's taxonomy situates it across the “Analyse”, “Evaluate”, and
“Create” levels (Anderson & Krathwohl, 2001), while Facione (1990)
defines it as securing relevant elements to draw reasoned conclusions.
For Halpern (2014), inference is essential to adaptive decision-making,
particularly when reasoning under uncertainty. Effective inferential
reasoning goes beyond recognising plausible answers; it entails con­
structing arguments, identifying causal links, and testing hypotheses
across contexts. As Ennis (1985) notes, inference is the cognitive bridge
between information and action; a skill that must be practised through
intentional, evidence-based tasks rather than substituted by automated
outputs. In AI-mediated learning, where models can produce convincing
yet unfounded responses, inferential reasoning is critical for helping
students assess the strength of connections, evaluate plausibility, and
resist uncritical acceptance of generated conclusions.

3.6. Epistemic integrity
Epistemic integrity is the ethical orientation to seek truth, evaluate
knowledge claims fairly, and engage with complexity conscientiously. It
combines intellectual honesty with critical reflexivity and aligns closely
with Facione's (1990) traits of truth-seeking and fair-mindedness, as
well as Halpern's (2014) framing of ethical reasoning. While epistemic
agency involves constructing and defending knowledge claims, integrity
governs the values that shape those claims, such as humility, justice, and
respect for difference. This orientation is especially critical in contexts
where LLMs reproduce dominant discourses, conceal provenance, or
obscure bias. As Davies and Barnett (2015) argue, safeguarding
epistemic integrity requires that learners not only analyse content, but
interrogate systems of knowledge production, asking whose voices are
amplified or excluded. In this sense, epistemic integrity is both a per­
sonal commitment and a democratic imperative.
Together, these six processes provide a foundation for rethinking
how critical thinking can be cultivated in AI-mediated learning envi­
ronments. They clarify not only the cognitive skills and dispositions at
risk when LLMs are used uncritically, but also the developmental ca­
pacities that must be intentionally scaffolded through pedagogy. Rather
than framing AI tools as replacements for reasoning, this framework
positions them as prompts for deeper engagement; tools that must be
situated within learning designs that preserve interpretation, foster
inference, demand evaluation, support self-regulation, stimulate curi­
osity, and uphold ethical inquiry. In the next section, we translate these
processes into pedagogical principles that can guide educators in
designing learning environments that integrate LLMs without compro­
mising the intellectual and moral aims of higher education.

3.3. Evaluative judgement
Evaluative judgement is the ability to assess the credibility, coher­
ence, and evidentiary basis of information and arguments. It corre­
sponds to the “Evaluate” level in Bloom's taxonomy and is central in both
Facione's (1990) and Halpern's (2014) models of critical thinking. It
entails scrutinising claims, comparing competing interpretations, and
determining whether conclusions follow logically from premises.
Importantly, it also involves judging the quality and relevance of sour­
ces, a process that Paul and Elder (2019) link to intellectual fairness and
humility. In AI-mediated environments, evaluative judgement becomes
essential for interrogating the reliability of outputs that may appear
fluent but lack transparency. As UNESCO (2025) warns, cultivating
evaluative capacity is vital to resisting epistemic passivity and sustain­
ing critical engagement in digital learning ecosystems.
Evaluative judgment thus functions as the core process by which
learners assess the quality, credibility, and warrant of specific claims in
AI-mediated environments. Epistemic vigilance operates alongside the
process by sensitising learners to when evaluation is necessary, partic­
ularly in relation to issues of source reliability, bias, and omission.
Epistemic agency then shapes how learners respond to these judgments,
shaping whether and how evaluations are acted upon their ongoing
engagement with knowledge, reasoning practices, and epistemic tools.

4. A pedagogical model for AI-enhanced critical thinking
(Sub-RQ3) What pedagogical design principles can guide the use of LLMs
to scaffold critical thinking effectively?

3.4. Metacognitive regulation

Building on the six intellectual processes outlined in Section 3, this
section proposes a pedagogical model for integrating LLMs into higher
education in ways that strengthen, rather than diminish, cognitive
effort, metacognitive regulation, and epistemic integrity. Rather than
advocating blanket policies for or against LLM use, this model empha­
sises deliberate orchestration: the intentional sequencing of pre-AI, dur­
ing-AI, and post-AI learning activities designed to scaffold critical
engagement and preserve core intellectual processes.
Central to this model is a rejection of AI as a pedagogical default.
LLMs are positioned not as authoritative sources, but as conditional tools,
activated at the right moment for the right learning purpose. The goal is
to preserve the learner's role as an agentive, reflective thinker; someone
who uses AI to deepen inquiry rather than shortcut it.

Metacognitive regulation involves the monitoring, evaluation, and
strategic control of one's cognitive processes during learning and
reasoning. It represents the metacognitive dimension of Bloom's revised
taxonomy and is a key element in both Facione's (1990) emphasis on
self-regulation and Halpern's (2014) focus on adaptive cognition.
Effective regulation allows learners to assess task demands, recognise
cognitive biases, and modify their approach when errors or gaps are
detected. This process transforms critical thinking from an episodic act
into a sustained, self-directed practice. As Dwyer (2017) argues, meta­
cognitive oversight is indispensable in complex, ill-structured tasks
where solutions are not predefined. In AI-rich environments, it em­
powers students to maintain epistemic agency by continuously interro­
gating their own reasoning, rather than defaulting to automated
outputs.

4.1. Core design principles

3.5. Intellectual curiosity

The following eight principles offer actionable guidelines for inte­
grating LLMs into learning environments without undermining the

Intellectual curiosity is the motivational disposition to explore ideas,

development of critical thinking. Each principle is directly aligned with
one or more of the six foundational processes defined in Section 3 and is
supported by evidence from educational research on AI, cognition, and
instructional design (See Table 2).
P1. Preserve cognitive friction. Critical thinking develops through
effortful engagement with ambiguity, contradiction, and complexity
(Jaramillo Gómez et al., 2025). As outlined in Section 2.1, LLMs often
reduce cognitive load but also risk bypassing the very friction that
stimulates deep understanding. Therefore, instructional designs should
intentionally preserve productive struggle by requiring students to
formulate hypotheses, analyse problems, or generate arguments inde­
pendently before consulting AI tools.
Friction should also be sustained during and after interaction with
LLMs. AI can be used to generate friction by introducing counterargu­
ments, flawed logic, or alternative interpretations that prompt critical
response. After engagement, learners should be encouraged to evaluate
AI-generated content, compare it against their own reasoning, and revise
their conclusions where necessary. This ongoing challenge maintains
cognitive effort and supports epistemic agency.
This dialogic tension, akin to Socratic questioning (see Paul & Elder,
2007), fosters deeper inquiry and metacognitive reflection. Friction, in
this sense, is not a barrier but a condition for cultivating epistemic vir­
tues (Bowell & Kingsbury, 2015) and supporting what Barnett (2015)
calls critical being; that is, the capacity to think, reflect, and act with
integrity in uncertain contexts.
P2. Scaffold LLMs as thinking partners. To support critical
thinking without displacing it, LLMs should be positioned as provisional
collaborators, not authoritative sources (UNESCO, 2023). Their role is to
assist students in breaking down tasks, exploring alternatives, and
clarifying reasoning, while ensuring that learners retain cognitive
ownership.
Scaffolding should guide students through structured inquiry,
prompting them to actively question, compare, and revise ideas rather
than accept AI outputs at face value. Within this framework, LLMs can
model argument structures, suggest counterpoints, or simulate dialogue
that stimulates reflection. Aligned with the 3H model: helpful, harmless,
and honest (Askell et al., 2021), LLMs function best when used to extend
thinking, not shortcut it.
Following UNESCO's AI literacy progression (2024), students should

first understand how LLMs generate content, then critically engage with
their outputs, and finally apply them in creating original responses. Used
in this way, LLMs can prompt deeper reasoning and foster metacognitive
awareness.
P3. Embed evaluation as standard practice. Critical thinking de­
pends not only on generating ideas but on evaluating them rigorously.
To cultivate evaluative judgement, learners must be consistently
required to assess the credibility, coherence, and evidentiary support of
both human-derived and AI-generated claims (Facione, 1990; Ennis,
1985).
Rather than treating evaluation as a final step, instructional design
should embed it throughout the learning process. This includes inte­
grating checkpoints where students cross-reference AI outputs with
diverse sources, apply structured criteria (e.g., relevance, bias, fal­
lacies), and articulate reasons for accepting or rejecting claims.
Such habits cultivate what Bielik and Krell (2025) describe as
epistemic vigilance: the capacity to critically assess both the credibility of
information sources and the validity of their claims, using structured
reasoning and scientific heuristics. They also reflect what Bailin and
Battersby (2015) describe as the dialectical nature of critical thinking:
an iterative process of weighing alternatives, responding to objections,
and refining judgements in light of new evidence. Evaluation, in this
sense, becomes a norm, not an exception, within AI-supported learning.
P4. Activate metacognitive self-regulation. In AI-supported
learning, students must remain in control of their thinking processes
rather than outsourcing them to the system. To sustain metacognitive
regulation, tasks should incorporate tools such as planning templates,
reflective journals, and AI prompt logs that make thinking explicit and
subject to review (Teng & Yue, 2023).
Explicit instruction and repeated practice in applying these strate­
gies, especially in authentic, complex tasks, reinforce students' ability to
monitor, evaluate, and direct their own thinking (Manalo et al., 2015).
This helps preserve agency and fosters deliberate, critical engagement
with both their ideas and AI-generated content.
P5. Encourage intellectual humility and curiosity. Developing
critical thinkers demands openness to complexity and a willingness to
question one's own assumptions (Halpern, 1998; Paul & Elder, 2007).
Tasks should prompt students to examine the limitations of AI output by
generating alternative perspectives, simulating counterfactuals, or
identifying omissions. This practice cultivates both intellectual humility
and epistemic curiosity, dispositions essential for navigating uncertainty
and resisting overconfidence in algorithmic authority.
By positioning the learner in active epistemic dialogue with AI, ed­
ucators help students internalise habits of questioning, thereby deep­
ening their understanding and strengthening critical judgement.
P6. Foster epistemic integrity. Tasks should be designed to rein­
force the ethical and epistemic responsibilities of learners. This includes
justifying claims, considering multiple perspectives, and reasoning
under uncertainty; core aspects of what Paul and Elder (2007) call
fair-minded critical thinking. Barnett (2015) emphasises that critical
being requires coherence between thought and action, linking formal
critique with ethical engagement in the world.
In AI-supported contexts, maintaining epistemic integrity involves
resisting the temptation to accept plausible output uncritically and
instead cultivating the disposition to question, verify, and take owner­
ship of one's thinking.
P7. Align assessment with intended cognition. Assessment should
prioritise the quality of reasoning over the surface fluency of AI-assisted
outputs. Rubrics must explicitly reward higher-order skills such as
analysis, evaluation, and reflection, core components of critical thinking
across disciplines (Ennis, 1991; Halpern, 2014). To support deep
learning, it is essential that instructional goals are closely aligned with
assessment criteria. This alignment not only promotes meaningful
cognitive engagement but also facilitates the transfer of critical thinking
skills beyond isolated tasks. By assessing the reasoning behind students’
judgements, including how they interpret, question, and integrate

Table 2
Design principles and the cognitive or epistemic processes they support.
Design principle

Main supported processes

Justification

P1. Preserve
cognitive friction

(1) Conceptual
interpretation, (2)
Inferential reasoning

P2. Scaffold LLMs as
partners

(2) Inferential reasoning,
(5) Intellectual curiosity,
(6) Epistemic integrity
(2) Inferential reasoning,
(3) Evaluative judgement

Reinforces deep engagement
before using AI, supporting
reasoning and conceptual
construction.
Positions AI as a dialogic tool
that fosters exploration and
reflective thinking.
Encourages justification and
structured comparison of
claims.
Supports monitoring and selfadjustment through explicit
strategies and cognitive tools.
Fosters open-ended inquiry
and critical questioning of
knowledge.
Reinforces ethical reasoning
and critical awareness in AI
interaction.
Rewards quality of reasoning
and supports critical
engagement with AI tools.
Develops independent
reasoning before using AI,
strengthening agency and
self-regulation.

P3. Embed
evaluation as
standard practice
P4. Activate
metacognitive
regulation
P5. Encourage
humility and
curiosity
P6. Foster epistemic
integrity

(4) Metacognitive
regulation
(5) Intellectual curiosity,
(6) Epistemic integrity
(6) Epistemic integrity

P7. Align assessment
with thinking

(3) Evaluative judgement

P8. Balance AImediated and AIfree phases

(1) Conceptual
interpretation, (4)
Metacognitive regulation

AI-generated content, educators reinforce epistemic responsibility and
reduce incentives for superficial engagement.
P8. Balance AI-mediated and AI-free task phases. Effective crit­
ical thinking pedagogy requires a deliberate integration of AI-supported
and AI-free phases. Tasks involving hypothesis generation, argument
construction, or self-regulated planning are best performed without AI
to preserve cognitive autonomy and avoid overreliance. These “AI-free
zones” cultivate original reasoning and metacognitive control before
learners engage with AI. Subsequent AI use should serve as a reflective
extension, supporting critique, revision, or comparison, not as a sub­
stitute for thinking.
This sequencing fosters independent judgement and reinforces the
learner's role as an active epistemic agent. Table 2 presents each design
principle alongside the specific cognitive and epistemic processes it is
intended to support, with pedagogical justifications for each alignment.
From a learning science perspective, these principles draw on wellestablished mechanisms such as self-regulated learning cycles of plan­
ning, monitoring, and evaluation (Panadero, 2017; Zimmerman, 2000),
as well as feedback literacy, which emphasises learners' capacity to
judge the quality of feedback and decide how to act on it (Carless &
Boud, 2018; Hopfenbeck, 2020; Nicol & Macfarlane-Dick, 2007). This
structure highlights the framework's dual commitment to instructional
intentionality and the cultivation of critical thinking capacities in
AI-mediated learning environments.

Table 3
Scenario A. Processes activated and design principles enacted.

4.2. Practical scenarios and applications
To operationalise the design principles outlined in Section 4.1, this
section presents two scaffolded activities that integrate generative AI in
ways that preserve students' cognitive ownership, promote epistemic
integrity, and foster critical engagement with both knowledge and
technology. These scenarios are not only technical exercises; they are
designed to cultivate thinking that is self-aware, world-aware, and
action-oriented, as well as a capacity to interrogate and shape technol­
ogy's role in knowledge production. Importantly, the scenarios are
offered not as fixed templates or “best practices”, but as situated ex­
amples intended to provoke adaptation, critique, and redesign in
response to local pedagogical and institutional conditions.
Each scenario activates the six essential intellectual processes out­
lined in Section 3 (i.e., conceptual interpretation, inferential reasoning,
evaluative judgement, metacognitive regulation, intellectual curiosity,
and epistemic integrity) while reflecting all eight pedagogical design
principles articulated in Section 4.1. Taken together, they demonstrate
how structured engagements with LLMs can move beyond efficiencyoriented use toward the cultivation of thoughtful and ethically groun­
ded inquiry.

Processes activated

Design principles
enacted

Illustrative operational
moves

Conceptual interpretation is
required to distill the
essence of the topic into
an effective, purposeful
prompt.
Inferential reasoning is
developed as students
anticipate how LLMs may
interpret or misinterpret
their queries.

P1. Preserve friction

Evaluative judgement
emerges in assessing the
completeness and validity
of AI-generated responses.

P3. Embed
evaluation as
standard practice

Metacognitive regulation is
engaged through iterative
revision and strategic
questioning.

P4. Activate
metacognitive
regulation

Intellectual curiosity is
fostered by exploring
alternative framings and
possible answers.

P5. Foster curiosity
and humility

Epistemic integrity is
supported as students
examine biases in both
prompts and outputs.

P6. Reinforce
epistemic integrity

1-Students draft prompts
individually without AI
access and briefly justify
why each prompt is expected
to elicit depth or complexity.
2-Before submitting
prompts, students predict
possible AI responses and
identify potential
assumptions or
simplifications the model
might make.
3-Students analyse AI
outputs using guiding
questions such as: Which
perspectives are prioritised?
Which are absent? What
claims lack justification?
4-Students revise at least one
prompt and provide a short
ref
