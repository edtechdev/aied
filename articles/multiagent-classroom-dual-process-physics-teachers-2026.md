---
title: "A multi-agent AI classroom based on dual-process reasoning hazards: a pilot with prospective physics teachers"
created: "2026-08-07T04:33:04-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
foundations: [agentic-ai]
technology: [simulation]
research_method: [experiment]
discipline: [physics education, stem education]
level: [teacher education, higher ed]
sources: ['raw/papers/2608.05820.md']
confidence: medium
audience: [teacher educators, researchers]
---

> **Synthesis:** Tufino (2026) pilots a simulated [[agentic-ai|multi-agent]] AI classroom where five AI students each enact distinct dual-process theory (DPT) reasoning hazards, giving prospective [[physics-education|physics]] teachers rare practice in responding to authentic student reasoning. Fifteen graduate students showed significant improvement in diagnostic scores (p=0.014, r=0.79), but during the [[simulation]] itself used predominantly uniform guiding questions — revealing a knowing-doing gap on the developmental trajectory toward responsive [[pedagogy|teaching]].

Responding productively to authentic student reasoning is among the most difficult [[teacher-role|teaching]] skills to develop, and prospective teachers get few opportunities to practice it. This pilot study created a [[simulation|simulated]] class of five AI students, each consistently enacting a distinct dual-process theory reasoning hazard. Fifteen graduate students in a [[physics-education|physics]] [[teacher-education|teacher preparation]] course diagnosed vignettes before/after interacting with the simulated class, showing significant diagnostic improvement — but their actual questioning during the simulation revealed a gap between knowing DPT vocabulary and applying it in real-time.

## The dual-process hazards framework

The design grounds simulated student behavior in a [[discipline-specific-aied|discipline-specific]] cognitive framework rather than generic chatbot personality. [[learning-theories|Dual-process theories]] describe reasoning as the interplay of a fast, automatic, intuitive process and a slow, effortful, analytical one; physics education [[research-methods-aied|research]] has mapped the points where reasoning can fail into four "hazards." Intuition may supply an incorrect provisional model (hazard A); a confident reasoner may accept it without scrutiny, a manifestation of cognitive frugality (hazard B); analysis may be engaged but biased toward rationalizing the initial answer (hazard C); or analysis runs in good faith while the required [[prior-knowledge|knowledge]] — the mindware — is insufficient to detect the error (hazard D).

To each hazard the course matched a [[socratic-method|questioning]] strategy drawn from the Investigative Science Learning Environment (ISLE) approach: [[scaffolding|guiding questions]] push the student forward to the next reasoning step, falling-back questions return to simpler familiar ground, and for entrenched rationalization teachers create a conflict between the student's formula and a known result. [[inquiry-based-learning|Inquiry-based]] and [[active-learning]] principles underpin this repertoire, which teachers use rather than explanations to elicit and move students' ideas.

## The simulated classroom

The [[simulating-students|simulated class]] runs as a Python application on the Hugging Face Spaces platform, powered by a [[llm|large language model]] via a [[conversational-ai|web chat]] interface, with five student personas defined entirely in the system prompt. Davide embodies hazards A+B (an appealing wrong intuition accepted without scrutiny), Elena hazard C (analytical reasoning recruited to defend an intuitive answer), Tommaso hazard D (insufficient knowledge), with Chiara a student in transition and Andrea a near-expert peer. The class discusses a static-friction problem engineered so the intuitive and formula-based errors converge on the same wrong answer. The author stresses that these hazards are failure points of a reasoning process, not stable student types — reifying them as characters is a deliberate [[pedagogy|pedagogical]] simplification.

Each participant pair, in the teacher's role, interacts with the class in written chat, and the full [[learning-analytics|conversation log]] is exported for analysis — giving [[teacher-education|teacher preparation]] a low-stakes environment for [[professional-training|deliberate practice]] that, unlike a real classroom, leaves a complete transcript of every exchange available for [[feedback]] and debrief.

## Key Findings

1. Diagnostic scores on written vignettes improved significantly from PRE to POST (n=11 paired, Wilcoxon p=0.014, r=0.79, a large effect on a 0–18 scale), with the gain concentrated in formulating appropriate next questions (+1.45/9, p=0.031) rather than in diagnosis itself.
2. During the simulation, questioning was strongly undifferentiated: 69% of the 71 substantive teacher turns were guiding questions, while the conflict and falling-back strategies the framework prescribes for specific hazards together accounted for only 28.2% and were rarely matched to the hazard of the agent addressed.
3. The DPT lexicon — hazard, process 1/2, bias, intuition — appeared in only 2 of 71 substantive teacher turns during the simulation, even though it came readily in writing (7 of 13 POST sheets, and 7 of 14 hypotheses sheets minutes before the interaction), a knowing–doing gap that tracks distance from the live action.
4. The simulation locates each participant on the developmental trajectory of responsiveness to student ideas with transcript-level granularity, and the collective debrief appears to reconnect practice to the framework: four participants spontaneously classified the new vignette characters by hazard at POST, something no one had done at PRE.

## The knowing–doing gap

The sharpest contrast sits within the simulation day itself: minutes before interacting, participants described the agents' expected reasoning in DPT terms; in the interaction that followed, the vocabulary appeared in 2 of 71 turns. This dissociation between paper and practice is bidirectional — in the fastest-converging session, a pair dismantled a formula-based rationalization with a single elegant stepping-back question without yet having the words to name what the move did, suggesting strategies discovered mid-interaction rather than planned in advance. The author reads the gap not as instructional failure but as an accurate snapshot of where each participant stands on the developmental trajectory of [[transfer-of-learning|responsive]] teaching, a trajectory the simulation renders visible at [[learning-analytics|transcript-level]] granularity.

A recurrent practical cue emerged: when a session was going well, Davide would verbally accept the teacher's argument while signaling residual doubt ("ok… but it still feels weird"). This happened in seven of the eight sessions, and all seven converged; in the single failed session it never occurred, and the teacher endorsed his wrong answer. The resulting rule of thumb — if the student concedes but hesitates, guiding questions will move them forward; if there is no hesitation at all, the teacher must first create doubt — offers an explicit target for future debriefs.

## What this means for practice

- **Teacher educators.** Give prospective teachers a simulated multi-agent classroom as low-stakes deliberate practice early in their preparation: the sequence produced large diagnostic gains (n = 11 paired, p = 0.014, r = 0.79) and a complete transcript of every exchange for debrief.
- **Teacher educators.** Teach strategy-to-hazard matching explicitly, not just the questioning repertoire: possessing a strategy does not guarantee aiming it correctly, and in one session a falling-back question directed at the rationalizing agent left her more confident in her wrong answer.
- **Teacher educators.** Debrief with the transcripts close at hand: DPT vocabulary appeared in only 2 of 15 reflections immediately after the session but back on 7 of 13 POST sheets after the class re-examined its own logs, and four participants then spontaneously classified new vignette characters by hazard.
- **Teacher educators.** Drill the hesitation cue — when a student concedes while signaling doubt ("ok… but it still feels weird"), guiding questions move them forward; with no hesitation at all, create conflict first. All seven sessions where the cue appeared converged, and the single failed session lacked it.
- **Researchers.** Code for differentiation, not correctness alone: 69% of the 71 substantive teacher turns were guiding questions and only 28.2% used the conflict or falling-back strategies the framework prescribes for specific hazards.

## Limitations

- The paired sample is small (n = 11) from a single physics teacher preparation course and the pilot was powered only for large effects.
- All scoring and coding were performed by a single rater (the author), and the design cannot separate the contributions of the simulation, the debrief, and the surrounding instructional sequence.
- The hazards were reified into stable characters — a pedagogical simplification the framework itself warns against — and the two vignette sets, though parallel, were not formally equated.
- Each pair interacted for a single session (repeated sessions were planned but blocked by scheduling), the log cannot be attributed to individual participants, and the DPT lexicon count is keyword-based, registering the framework's words rather than their application.

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

#

## Citation

Tufino, E. (2026). [A multi-agent AI classroom based on dual-process reasoning hazards: a pilot with prospective physics teachers](https://arxiv.org/abs/2608.05820).
