---
title: "AI-Mediated Input Transformation in Medical English: Speech Recognition and Transcript Reliability"
created: "2026-09-23T09:22:41-04:00"
updated: "2026-09-23T09:41:47-04:00"
type: article
published: "2026-09-17"
sources: ['raw/papers/ai-mediated-input-medical-english-asr-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [medical education, language learning]
level: [higher ed]
audience: [instructors, curriculum designers, administrators]
pedagogy: [scaffolding, professional-training]
technology: [speech-and-voice-technologies, educational-nlp, human-in-the-loop-ai]
assessment: [educational-measurement, assessment-validity]
methods: [ai-ed-evaluation, benchmark, quantitative-research]
ethics: [trust-calibration]
foundations: [critical-thinking, ai-literacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
---

> **Synthesis:** Can a commercial transcript of [[speech-and-voice-technologies|text-to-speech]] audio be handed to [[learners]] in [[language-learning|English for Specific Purposes]] classes as it comes? A 2,692-token coursebook passage was rendered once by NaturalReader and submitted unchanged to four ASR services. The two free services returned near-complete transcripts — 2,368 and 2,378 words, coverage 87.96% and 88.34%, WER 15.23% and 15.00% — while the two paid services returned previews covering 32.76% and 55.35%, pushing WER to 73.21% and 48.77% through missing text rather than misheard words. Deletions dominated; rare meaning-altering substitutions were the [[pedagogy|pedagogical]] hazard. Coverage belongs beside WER, the authors argue, and [[human-in-the-loop-ai|targeted human verification]] protects terminological precision.

## Key Findings
1. **Four ASR services, one shared input.** Identical synthetic audio — NaturalReader, female Canadian voice, 15:27, recorded in Audacity at 44.1 kHz, 16-bit PCM, mono — went to Turboscribe, Riverside, 1transcribe and Smartnote AI.
2. **The freely accessible plans produced near-complete transcripts.** Turboscribe returned 2,368 words (87.96% coverage) and Riverside 2,378 (88.34%), with WERs of 15.23% and 15.00%, driven mainly by omissions.
3. **The paid plans returned fragments.** 1transcribe covered 32.76% of the reference with 822 words (WER 73.21%), Smartnote AI 55.35% with 1,490 words (WER 48.77%), each exporting only a preview.
4. **Coverage, not transcription quality, inflated those error rates.** The high WERs came from missing tokens, so ranking on WER alone would treat an export restriction as a transcription failure.
5. **Deletions dominated everywhere.** Turboscribe's alignment gave D=339, S=66, I=5 and Riverside's D=341, S=42, I=22; deletions ran about 12.6% of reference tokens, roughly 22% of them on structural markers.
6. **Rare substitutions carried the pedagogical risk.** Meaning-altering swaps stayed below 1% of tokens but included imino → amino, cystine → cysteine, protonated → protonatid and pH → phase, each changing a biochemical fact.

## One voice, four services: how the comparison was built
The reference was a 2,692-token coursebook chapter excerpt on proteins, dense in domain terminology, figure references, page numbers, numerals and chemical nomenclature. One text-to-speech rendering produced a 15:27 audio file that every service received unchanged, removing speaker variability so that differences reflect service behavior rather than human prosody. Turboscribe and Riverside ran on free plans and returned near-complete transcripts; 1transcribe and Smartnote AI ran on paid plans yet supplied only partial or preview output, retained verbatim for coverage. After light normalization, a Levenshtein dynamic program produced deletion, substitution and insertion counts. WER was (D + S + I) / N with N = 2,692; coverage was hypothesis word count divided by N.

## Why WER on its own misranks a service
The paper's central [[educational-measurement|measurement]] argument is that a transcript can fail in two distinct ways, and WER carries only one of them. The higher WERs of 73.21% and 48.77% came almost entirely from tokens never returned rather than tokens misheard. WER therefore conflates unavailable text with inaccurate text, ranking an export restriction as a transcription failure. Coverage separates the two quantities — 32.76% and 55.35% against 87.96% and 88.34% — so the authors join recent work on WER estimation in recommending that coverage be reported alongside the error rate, a [[benchmark|benchmarking]] discipline that matters whenever [[ai-ed-evaluation|automatic evaluation]] stands in for classroom behavior.

## What the errors are made of
Deletions were the most frequent error category on all four services and clustered around structural markers and small function words: figure references, page numbers, articles, prepositions. Those omissions remove navigational and syntactic material rather than propositional content, so the authors judge ordinary deletion tolerable for comprehension, though it degrades alignment with visual materials. Semantic substitutions behaved differently: each identified instance rewrote a biochemical fact — imino → amino, cystine → cysteine, protonated → protonatid, pH → phase. Where cystine and cysteine name different molecules, transcription error becomes conceptual distortion, so [[assessment-validity|validity]] here is a property of the transcript's knowledge structure, not its error count.

## From raw transcript to verified classroom artifact
For [[medical-education|medical English]] teaching the paper proposes a three-stage workflow: generate text-to-speech or recorded lecture input, produce a full-export ASR transcript, then verify domain-specific terminology before materials reach learners. Transcripts already support note-taking, listening comprehension and the acquisition of domain vocabulary, so using one as [[scaffolding]] without that check moves unverified terminology into the lesson. In advanced ESP contexts the authors propose turning ASR error analysis into a metalinguistic activity, with learners locating discrepancies between audio and transcript. That reframes the output as a pedagogical artifact rather than a definitive textual authority, a [[trust-calibration|calibration]] exercise that builds [[critical-thinking|critical digital literacy]].

## What this means for practice
- **Instructors.** Read the technical vocabulary before class: substitutions stayed under 1% of tokens, but imino → amino and cystine → cysteine each inverted a biochemical distinction, so a terminology pass is the cheapest guardrail.
- **Instructors.** In advanced groups, hand learners the audio beside the transcript and ask them to find the discrepancies; the paper calls that comparison a metalinguistic activity, not a defect to hide.
- **[[curriculum-design|Curriculum]] designers.** Bake the three-stage workflow into materials preparation — generate the input, export the full transcript, verify the terminology — and admit only the corrected transcript to a course archive.
- **Administrators.** Test export rights before buying: the free plans returned 87.96% and 88.34% of the reference, the paid plans 32.76% and 55.35% previews, so preview-only services are diagnostic tools, not production ones.

## Limitations
- One 2,692-token passage and a single synthetic voice (NaturalReader, female Canadian, 15:27) carry the comparison, so the prosodic and disfluency effects the design removed remain untested.
- No learners were studied; the classroom claims follow from transcript quality, not from measured comprehension, note-taking or [[learning-gains|learning gains]].
- Two of the four services were capped at preview output, so their coverage figures measure export restrictions as much as transcription ability.
- The abstract's rounded values (WER 15.02%, 47.77%, 72.14%; coverage 30.1%, 54.6%) differ from Table 1 (15.00%, 48.77%, 73.21%; 32.76%, 55.35%).

## Connected Concepts
- [[speech-and-voice-technologies]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[language-learning]]
- [[medical-education]]
- [[human-in-the-loop-ai]]
- [[educational-nlp]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[trust-calibration]]
- [[critical-thinking]]
- [[professional-training]]
- [[ai-literacy]]
- [[quantitative-research]]

## Connected Articles
- [[asr-english-speaking-feedback-metacognition-2026]] — ASR Technology in College English Speaking Instruction: The Role of Feedback Internalization and Metacognitive Strategies
- [[wright-transcription-not-generation-2026]] — Transcription is not generation: Distinguishing non-generative AI tool use from academic misconduct in higher education assessment
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Interaction Effects Between Learner Characteristics and Dialogue Format in TTS Dialogue-Based Lessons
- [[llm-tts-dialogue-lesson-generation]] — A Semi-Automated System for Generating Dialogue-Based TTS Lessons Using Large Language Models: An Exploratory Study of Educational Potential
- [[gemini-lualatex-physics-video-transcription-2026]] — Using Gemini and LuaLaTeX to transcribe physics videos into PDF/UA-2 and ISO 32005 math-accessible PDFs
- [[ai-guided-learning-audiovideo-2026]] — AI-Guided Learning: Research on Knowledge and Skill Acquisition Support Methods Using Deep Learning Audio-Video Processing Techniques
- [[voice-text-prompt-problems-computing-education]] — Say What? Examining Text and Voice Input Modalities for Prompt-Based Programming in Computing Education

## Citation
Stanchev, E. (2026). [AI-Mediated Input Transformation in Medical English: Speech Recognition and Transcript Reliability](https://osf.io/f38mr). EdArXiv preprint.