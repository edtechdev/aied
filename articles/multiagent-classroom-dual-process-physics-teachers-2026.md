---
title: "A multi-agent AI classroom based on dual-process reasoning hazards: a pilot with prospective physics teachers"
created: "2026-08-07T04:33:04-04:00"
updated: "2026-08-24T11:00:00-04:00"
type: article
tags: [agentic-ai, physics-education, teacher-education, simulation, stem-education, higher-ed]
research_method: [experiment]
discipline: [physics education, stem education]
level: [teacher training, higher ed]

sources: ['raw/papers/2608.05820.md']
confidence: medium
---

> **Synthesis:** Tufino (2026) pilots a simulated [[agentic-ai|multi-agent]] AI classroom where five AI students each enact distinct dual-process theory (DPT) reasoning hazards, giving prospective [[physics-education|physics]] teachers rare practice in responding to authentic student reasoning. Fifteen graduate students showed significant improvement in diagnostic scores (p=0.014, r=0.79), but during the [[simulation]] itself used predominantly uniform guiding questions — revealing a knowing-doing gap on the developmental trajectory toward responsive [[pedagogy|teaching]].

Responding productively to authentic student reasoning is among the most difficult [[teacher-role|teaching]] skills to develop, and prospective teachers get few opportunities to practice it. This pilot study created a [[simulation|simulated]] class of five AI students, each consistently enacting a distinct dual-process theory reasoning hazard. Fifteen graduate students in a [[physics-education|physics]] [[teacher-education|teacher preparation]] course diagnosed vignettes before/after interacting with the simulated class, showing significant diagnostic improvement — but their actual questioning during the simulation revealed a gap between knowing DPT vocabulary and applying it in real-time.

## The dual-process hazards framework

The design grounds simulated student behaviour in a [[discipline-specific-aied|discipline-specific]] cognitive framework rather than generic chatbot personality. [[learning-theories|Dual-process theories]] describe reasoning as the interplay of a fast, automatic, intuitive process and a slow, effortful, analytical one; physics education [[research-methods-aied|research]] has mapped the points where reasoning can fail into four "hazards." Intuition may supply an incorrect provisional model (hazard A); a confident reasoner may accept it without scrutiny, a manifestation of cognitive frugality (hazard B); analysis may be engaged but biased toward rationalising the initial answer (hazard C); or analysis runs in good faith while the required [[prior-knowledge|knowledge]] — the mindware — is insufficient to detect the error (hazard D).

To each hazard the course matched a [[socratic-method|questioning]] strategy drawn from the Investigative Science Learning Environment (ISLE) approach: [[scaffolding|guiding questions]] push the student forward to the next reasoning step, falling-back questions return to simpler familiar ground, and for entrenched rationalisation teachers create a conflict between the student's formula and a known result. [[inquiry-based-learning|Inquiry-based]] and [[active-learning]] principles underpin this repertoire, which teachers use rather than explanations to elicit and move students' ideas.

## The simulated classroom

The [[simulating-students|simulated class]] runs as a Python application on the Hugging Face Spaces platform, powered by a [[llm|large language model]] via a [[conversational-ai|web chat]] interface, with five student personas defined entirely in the system prompt. Davide embodies hazards A+B (an appealing wrong intuition accepted without scrutiny), Elena hazard C (analytical reasoning recruited to defend an intuitive answer), Tommaso hazard D (insufficient knowledge), with Chiara a student in transition and Andrea a near-expert peer. The class discusses a static-friction problem engineered so the intuitive and formula-based errors converge on the same wrong answer. The author stresses that these hazards are failure points of a reasoning process, not stable student types — reifying them as characters is a deliberate [[pedagogy|pedagogical]] simplification.

Each participant pair, in the teacher's role, interacts with the class in written chat, and the full [[learning-analytics|conversation log]] is exported for analysis — giving [[teacher-education|teacher preparation]] a low-stakes environment for [[professional-training|deliberate practice]] that, unlike a real classroom, leaves a complete transcript of every exchange available for [[feedback]] and debrief.

## Key Findings

1. Diagnostic scores on written vignettes improved significantly from PRE to POST (n=11 paired, Wilcoxon p=0.014, r=0.79, a large effect on a 0–18 scale), with the gain concentrated in formulating appropriate next questions (+1.45/9, p=0.031) rather than in diagnosis itself.
2. During the simulation, questioning was strongly undifferentiated: 69% of the 71 substantive teacher turns were guiding questions, while the conflict and falling-back strategies the framework prescribes for specific hazards together accounted for only 28.2% and were rarely matched to the hazard of the agent addressed.
3. The DPT lexicon — hazard, process 1/2, bias, intuition — appeared in only 2 of 71 substantive teacher turns during the simulation, even though it came readily in writing (7 of 13 POST sheets, and 7 of 14 hypotheses sheets minutes before the interaction), a knowing–doing gap that tracks distance from the live action.
4. The simulation locates each participant on the developmental trajectory of responsiveness to student ideas with transcript-level granularity, and the collective debrief appears to reconnect practice to the framework: four participants spontaneously classified the new vignette characters by hazard at POST, something no one had done at PRE.

## The knowing–doing gap

The sharpest contrast sits within the simulation day itself: minutes before interacting, participants described the agents' expected reasoning in DPT terms; in the interaction that followed, the vocabulary appeared in 2 of 71 turns. This dissociation between paper and practice is bidirectional — in the fastest-converging session, a pair dismantled a formula-based rationalisation with a single elegant stepping-back question without yet having the words to name what the move did, suggesting strategies discovered mid-interaction rather than planned in advance. The author reads the gap not as instructional failure but as an accurate snapshot of where each participant stands on the developmental trajectory of [[transfer-of-learning|responsive]] teaching, a trajectory the simulation renders visible at [[learning-analytics|transcript-level]] granularity.

A recurrent practical cue emerged: when a session was going well, Davide would verbally accept the teacher's argument while signalling residual doubt ("ok… but it still feels weird"). This happened in seven of the eight sessions, and all seven converged; in the single failed session it never occurred, and the teacher endorsed his wrong answer. The resulting rule of thumb — if the student concedes but hesitates, guiding questions will move them forward; if there is no hesitation at all, the teacher must first create doubt — offers an explicit target for future debriefs.

## Implications

For physics teacher preparation, the work suggests that a multi-agent simulated classroom grounded in a cognitive framework can surface the hard skill of responding to student reasoning in real time far earlier in a teacher's trajectory than the practicum, with complete, analysable transcripts. The pilot's central lesson is that knowing a framework and teaching with it are distinct competences that develop at different rates — so instruction should treat the observed knowing–doing gap as diagnostic rather than deficit, using it to locate learners on a [[teacher-ai-competency|developmental]] path rather than to judge them.

The design also carries implications for [[generative-ai|generative AI]] in education more broadly. Rather than serving the learner, the AI here plays the student, enabling [[pedagogical-agent|human]] practice of [[teacher-role|teaching]] itself — a role reversal that leverages LLMs for authentic, low-stakes [[simulation]]. [[inquiry-based-learning|Inquiry]] scaffolds and [[formative-assessment|diagnostic]] tasks can be embedded in such environments, and the transcript data make [[student-modeling|student reasoning]] and teacher moves jointly analysable. Limitations temper the claims: a small single-rater sample (n=11), a design that cannot separate simulation from debrief and surrounding instruction, hazards reified into characters, and keyword-based vocabulary counts. Future work plans to place the simulation later in the course after extended practice, extend interaction over multiple sessions, and observe whether teachers experienced in frameworks such as ISLE question the simulated class differently.

## Connected Concepts

- [[physics-education]]
- [[agentic-ai]]
- [[professional-training]]
- [[simulation]]
- [[stem-education]]
- [[higher-ed]]
- [[teacher-role]]
## Connected Articles

- [[hashmi-socratic-physics-chatbot-2025]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]

## Citation

Tufino, E. (2026). [A multi-agent AI classroom based on dual-process reasoning hazards: a pilot with prospective physics teachers](https://arxiv.org/abs/2608.05820).
