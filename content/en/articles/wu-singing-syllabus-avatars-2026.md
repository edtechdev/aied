---
title: "Designing singing syllabi with virtual avatars: AI-assisted syllabus reauthoring"
created: "2026-11-16T09:00:00-04:00"
updated: "2026-11-16T09:00:00-04:00"
type: article
authors: ["Wu, X."]
published: "2026-09-10"
venue: "Open Scholarship of Teaching and Learning"
source_url: https://doi.org/10.56230/osotl.176
foundations: [curriculum-design, learning-design]
pedagogy: [motivation, student-engagement, video-education]
technology: [ai-avatars-and-synthetic-instructors, generative-ai, multimodal]
methods: [design-based-research]
discipline: [cs education]
evidence_context: educational
level: [higher ed, undergraduate]
audience: [curriculum designers, instructional designers, instructors]
sources: ['raw/papers/wu-singing-syllabus-avatars-2026.md']
confidence: medium
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Wu (2026) treats the course syllabus as a [[learning-design|communication design problem]] rather than a compliance document and documents a reproducible pipeline that turns a text syllabus into a sung, [[video-education|video-based]] artifact performed by a [[ai-avatars-and-synthetic-instructors|virtual avatar]]. The argument starts from a familiar complaint — students skim or ignore syllabi, then ask about deadlines and grading policies that were written down — and from an observation about media habits: students already attend to short, emotionally designed, [[multimodal|multimodal]] content. The pipeline has seven stages, from an initial lyric draft produced with ChatGPT, through human revision and music generation with Suno AI, a [[generative-ai|generative]] music model, to lip-synchronized avatar synthesis in Google Colab using an open-source framework called HeyGem, ending in an MP4 that can be embedded in a learning management system. The single case is an Introduction to Computer Science syllabus for first-year undergraduates, and the worked example shows the grading scheme rewritten as rhymed verse. Wu is explicit that this is a design case with no student data, that the sung syllabus supplements rather than replaces the official document, and that empirical evaluation remains future work.

*No primary data: this is a design case documenting a workflow. It reports no survey, no course-evaluation data, and no human-subject data of any kind, so the [[student-engagement|engagement]] and recall benefits it argues for are hypotheses, resting on the [[motivation|motivational]] case for music rather than on measurement.*

## Key Findings

- **The reusable contribution is the workflow, not the artifact.** Wu specifies four inputs — the original syllabus, a refined lyric script, an audio file, and a reference avatar video — and one output, an MP4 in which an avatar performs the syllabus. The seven stages are lyric generation, script formatting and manual refinement, music generation with Suno AI, input preparation, Colab environment setup, avatar video generation, and export. This is the part another instructor can follow.
- **Human revision sits between every model and the next stage.** ChatGPT produces only a first draft of the lyrics, which the author then checks for informational clarity, accuracy, musical coherence and rhythm before any audio is generated. The stated design principle is that accuracy takes priority over rhyme, which is a deliberate inversion of what a generative model optimizes for.
- **The lyric adaptation is where fidelity can be lost, and the paper shows the trade.** The grading scheme appears in the song as five rhymed lines: labs and assignments at fifty points, project at twenty, attendance at ten, exam at twenty, and up to twenty more in challenges, summing to one hundred twenty. The table pairs each original value with the line that carries it, so the compression is visible and checkable.
- **The avatar layer is an extension with a pedagogical rationale and an unresolved cost.** HeyGem performs lip synchronization, facial animation and expression alignment against the supplied audio, and Wu argues that the face adds social presence and a sense of welcome at the start of a course. The same paragraph names the open questions: tone, realism, accessibility and instructor comfort.
- **A browser demo exists as an optional playback layer, not part of the pipeline.** A prototype built with MediaPipe maps hand landmarks to media controls: a thumb-index pinch toggles play and pause, and a two-hand gesture moves, scales and rotates a floating video panel over the webcam feed. Wu presents it as a way to let students call up short policy videos on demand, and separates it clearly from the core generation workflow.
- **Five design principles are stated as transferable guidance.** Accuracy over rhyme; chunk important policies into short segments rather than compressing them into one dense verse; make visuals reinforce rather than distract; set an emotional tone that invites students in without trivializing institutional expectations; keep the sung syllabus a supplement to the official written syllabus.
- **The framing is deliberately modest about effect.** Wu describes the project as documenting an implementation pathway and a reflective framework, states that it does not claim empirical effects on students, and calls for ethically approved studies of comprehension, recall, engagement and perception across syllabus formats.

## How the study was done

This is a [[design-based-research|design-oriented case study]], and the author uses the term precisely: the paper documents concept, implementation and pedagogical rationale, and treats the resulting artifact as a worked example rather than an intervention with measured outcomes. The case context is a single syllabus for Introduction to Computer Science, a first-year undergraduate course covering learning objectives, weekly topics, assessment criteria, scoring guidelines, grading policies, academic integrity expectations and instructor contact information.

The technical work was done with off-the-shelf and open-source components. Suno AI generated the song from the finalized lyrics in MP3 or WAV. Clipchamp assembled a basic music video with course-relevant icons, thematic illustrations and animated lyric text. Avatar synthesis ran in Google Colab on Python 3.8 with an A100 GPU, PyTorch and FFmpeg, with Google Drive mounted for input and output; the Colab notebook and the broader implementation are public in the author's GitHub repository. The reference video supplying appearance, facial features, head pose and motion style can be an instructor recording, an AI-generated template, or an open-source example clip.

The design rationale is drawn from literature on syllabus engagement, music and memory, and AI-generated educational media. Wu cites work showing that students respond to interactive or personalized [[curriculum-design|syllabus formats]], that melody and rhythm can support verbal memory and recall, and that music has been used to teach anatomy, legal terminology and mathematics. The paper is explicit that the pilot did not attempt to map musical features to specific learning outcomes; the goal was an approachable and memorable presentation.

## What this means for practice

- **Budget the verification time, not the generation time.** The models are fast; the accuracy check is not. Anyone adopting this should plan to check every transformed line against the official syllabus, keep the mapping table the paper models, and preserve a link back to the formal text at every point where a policy is paraphrased.
- **Chunk by decision, not by section.** The design principle worth copying is that policies students actually need at the moment of action — grading weights, submission dates, integrity rules — become short segments rather than verses inside a long song. That also makes each segment reusable on its own.
- **Keep the accessibility layer non-negotiable.** Wu states that captions, transcripts and the original syllabus document should remain available, and that not all students prefer, benefit from, or can reliably access audio-video material. A sung syllabus that exists only as video excludes students it was meant to welcome.
- **Check institutional tone before publishing.** The paper flags alignment with institutional policy, tone and course communication norms as a design constraint. A joke that lands in one department reads as trivializing a conduct policy in another.
- **Treat the avatar as optional, and the claim as unproven.** The pipeline works without the face: the lyric video is the core and the avatar an enhancement whose value depends on learner comfort. If a course team pilots the fuller version, the honest evaluation compares comprehension and recall against a text syllabus, including whether students open it after week one.

## Limitations

- **No student data, by design.** There is no survey, no course evaluation, no measure of attention, comprehension or recall. The hypothesis that singing avatars improve retention of course information is motivated by literature on music and memory, not tested here.
- **One syllabus, one course, one instructor.** A first-year introductory course with a light policy load is close to the easiest possible case; a program with complex progression rules, accreditation language or legal wording may not compress into lyrics at all.
- **Fidelity risk is acknowledged rather than solved.** Wu concedes that rhythm, rhyme and brevity can cost precision and assigns the burden of validation to the adopting instructor.
- **The toolchain is fragile in ways the paper does not measure.** Results depend on Suno AI, HeyGem, Clipchamp and a Colab GPU runtime, each of which can change or disappear; reproducibility here means the same documented procedure, not the same output.
- **The gesture demo needs a webcam and a modern browser**, and browser autoplay restrictions require an explicit sound-enable step, so the most engaging layer is also the least accessible one.
- **Avatar acceptance is untested.** Uncanny-valley effects, instructor discomfort with a synthetic face, and student reaction to an avatar delivering grading policy are named as considerations and left unexamined.

## Citation

Wu, X. (2026). [*Designing singing syllabi with virtual avatars: AI-assisted syllabus reauthoring*](https://doi.org/10.56230/osotl.176). *Open Scholarship of Teaching and Learning, 5*(2), 10–25.
