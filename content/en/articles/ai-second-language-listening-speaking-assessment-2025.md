---
title: "Developing and assessing second language listening and speaking: Does AI make it better?"
created: "2026-10-23T09:40:33-04:00"
updated: "2026-10-23T09:40:33-04:00"
type: article
sources: ['raw/papers/10.1017_S0267190525100111.md']
confidence: high
technology: [conversational-ai, speech-and-voice-technologies, generative-ai, multimodal]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
assessment: [oral-assessment, assessment-validity, formative-assessment, automated-question-generation]
ethics: [privacy, hallucination-risk]
research_method: [literature review]
discipline: [language learning]
audience: [instructors, assessment designers, researchers]
page_kind: [synthesis]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
---

> **Synthesis:** Goh and Aryadoust review what AI, and especially generative AI, can do for second language listening and speaking, and their answer is deliberately uneven: speaking has a real evidence base, listening much less so. Their method is to state the construct first — decoding and inferencing for listening, conceptualization, formulation and articulation for speaking — and then judge each technology against it, which is why they treat non-branching AI dialogue tasks and AI-written multiple-choice items as weak [[oral-assessment]] rather than as innovations. The review's stronger claim is normative: [[conversational-ai]] and [[speech-and-voice-technologies]] shift assessment away from rank-ordering and toward [[formative-assessment]], assessment for and as learning, where individualized feedback and repeated practice matter more than standardization. Most reported benefits are affective — lower anxiety, greater willingness to communicate — and the authors say so, while flagging [[hallucination-risk]] and student voice-data [[privacy]] as unresolved conditions of use.

## Key Findings
1. **Speaking evidence is stronger than listening evidence.** A meta-analysis of spoken dialogue systems found a significant medium effect on language learning across 11 studies, and willingness-to-communicate gains recur across the speaking literature.
2. **Listening research mostly reports null results.** Reviews of intelligent personal assistants found mainly an absence of significant comprehension outcomes; Tai and Chen's experiment with 92 high school students is the notable exception.
3. **AI-written listening items hold up unevenly.** ChatGPT-4 generated 96 scripts at four proficiency levels and 384 multiple-choice questions; the stems were well built, but most options could be eliminated through world knowledge alone.
4. **Non-branching dialogue limits validity.** Runge et al.'s Duolingo English Test tasks (713 tasks, pilot) forced answer selection rather than reactive talk, which the authors say misaligns cognitive demands with real target-language use.
5. **Benefits concentrate in affect, not proficiency.** Anxiety reduction, confidence and practice volume are well documented; few studies isolate which listening, speaking or interaction skills actually improved.
6. **The authors argue for assessment as learning.** They contend GenAI's value lies in real-time individualized feedback and self-regulation, and that idiographic methods, not item response theory alone, should evaluate that growth.

## What GenAI can assess, and what it only appears to assess

The review's sharpest move is to separate generation from evaluation. GenAI is genuinely useful for producing listening material at scale: Aryadoust et al.'s progressive-hint prompting produced scripts calibrated to four proficiency levels, and Runge et al. used a human-in-the-loop workflow to build 713 interactive listening tasks for a large-scale test. Both are production successes. Neither is an assessment success, because the resulting tasks still elicit the cognitive processes of option selection rather than of comprehension. Multiple-choice items remain multiple-choice items whether a person or a model wrote them, and the authors point to a long-standing objection: such formats sample a narrow slice of what listeners do in target-language use.

Where GenAI does something new is the feedback loop. An LLM examiner can ask questions, transcribe responses in real time and return qualitative and quantitative comment, and a text-to-speech system can vary accent and delivery. That supports [[automated-question-generation]] and rapid item revision, and it makes [[assessment-validity]] a design question rather than a fixed psychometric constraint. The authors are explicit that this is an argument, not a demonstrated finding: they propose rethinking authenticity and validity for GenAI-designed tasks instead of forcing them into conventional psychometric standards, and they note that no study has yet shown the resulting scores behave as claimed.

## Why listening and speaking are different problems for AI

Speaking attracts the technology because conversation is the product. Dialogue systems give learners unlimited turns, tolerate repetition, and never tire of the same topic — conditions that support task repetition, fluency development and reduced anxiety. The evidence reflects that affordance: gains in willingness to communicate appear consistently, and learners report chatbots as acceptable interlocutors. The gap is that willingness to communicate is a disposition, not a skill. Whether AI practice develops the interactional repertoire — turn-taking, clarification requests, negotiation of meaning, responding to a conversational partner's adjustment — remains untested, and the authors say the systems mostly do not yet make the interactional adjustments that would push learners toward comprehensible output.

Listening is harder to simulate and harder to score. Comprehension depends on bottom-up decoding and top-down inferencing working together, and on multimodal cues that GenAI can now supply but that research has not yet shown to help in a controlled way. Learners also need help at the precise point of breakdown — attention failure, failed segmentation, an unparsed construction — and no reviewed system diagnoses that. Hence the asymmetry: speaking tools are ahead because the modality is easier to fake, not because the learning is better understood. For [[oral-assessment]] this matters, since a system that only generates talk can look like it is teaching interaction while leaving the listening side of the exchange untouched.

## From rank-ordering to assessment as learning

The review's prescription is that listening and speaking assessment should stop being only a ranking device. GenAI can attach feedback to process — transcribe, highlight key terms, explain context, ask a follow-up question, adjust difficulty to proficiency and interest — which is what assessment for and as learning requires. The authors link this to [[metacognition]]: learners need to recognize comprehension gaps, interpret feedback and act on it, and repeated AI practice gives them a low-stakes venue for exactly that, with [[scaffolding]] available on demand rather than only when a teacher circulates.

They are candid that the measurement machinery does not yet match the ambition. Group-based psychometric models such as item response theory answer population questions, while assessment as learning asks whether an individual changed; latent Markov models and idiographic approaches are named as the alternatives. This is a proposal. No reviewed study implemented that analytic shift, and the authors present it as a research direction rather than a result. Their practical floor is more modest and more defensible: teachers should decide how often AI serves as a thinking and practice companion, keep human judgment in the loop, and develop their own AI literacy before adopting commercial tools that, in their assessment, have rarely been rigorously evaluated.

## What this means for practice

- **Instructors.** Use AI conversation partners for volume and confidence — repeated practice, pre-task planning help, low-anxiety rehearsal — and keep face-to-face communicative work for the interactional skills the systems cannot yet push, rather than treating AI practice as a substitute for it.
- **Assessment designers.** Justify every AI-generated task against the construct it is meant to sample; if the task reduces to selecting an option, say so and treat it as a measure of decoding, not of interactive listening.
- **Researchers.** Report which listening, speaking or interaction skills changed, not only test totals or willingness to communicate, and test whether AI interlocutors make the interactional adjustments that negotiation of meaning requires.

## Limitations

- The review is conceptual and synthesizes others' studies; it reports no new data and performs no meta-analysis of its own.
- Listening assessment is covered through two studies in detail (Runge et al.; Aryadoust et al.), so the listening conclusions rest on a narrow base.
- Much of the speaking evidence is affective and self-report — willingness to communicate, anxiety, perceived usefulness — which the authors acknowledge does not establish linguistic development.
- Several cited works are forthcoming at the time of writing, including key sources on GPT-based examiners and task design.
- Commercial tools are discussed as a category; the authors state that rigorous evaluation of them is largely absent.
- The proposed idiographic analytic approach (latent Markov models) is a recommendation, not something the reviewed studies tested.

## Citation

Goh, C. C. M., & V. Aryadoust (2025). [*Developing and assessing second language listening and speaking: Does AI make it better?*](https://doi.org/10.1017/S0267190525100111). Annual Review of Applied Linguistics, 45, 179-199.
