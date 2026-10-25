---
title: "Using Large Language Models to Detect Socially Shared Regulation of Collaborative Learning"
created: "2026-10-24T05:52:00-04:00"
updated: "2026-10-24T05:52:00-04:00"
type: article
authors: ["Zhang, J.", "Borchers, C.", "Cohn, C.", "Srivastava, N.", "Snyder, C.", "Guo, S.", "Ashwin T S", "Mohammed, N.", "Noh, H.", "Biswas, G."]
published: "2026-04-27"
venue: "LAK26: 16th International Learning Analytics and Knowledge Conference"
source_url: https://doi.org/10.1145/3785022.3785083
foundations: [human-ai-collaboration]
pedagogy: [collaborative-learning, self-regulated-learning, metacognition]
technology: [learning-analytics, llm, multimodal, educational-nlp]
research_method: [process-outcome modeling, interviews]
discipline: [science education, cs education]
level: [secondary]
audience: [researchers, learning analytics designers, instructors]
sources: ['raw/papers/zhang-llm-detection-ssrl-collaborative-modeling-2026.md']
confidence: high
methods: [mixed-methods-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Zhang and colleagues (2026) ask whether the regulation a pair of students performs together can be detected from their conversation and their clicks in a modeling environment, and the answer their comparison gives is narrower and more useful than a single accuracy figure: student talk alone carries most of the signal, and log data adds value only for the constructs students do not say out loud. Working in C2STEM, a block-based environment where high schoolers model the motion of a truck, they used GPT-3.5-Turbo as a summarizer rather than a classifier, generated a task-context-aware summary of each segment of collaborative work, labeled 394 of those segments with seven [[collaborative-learning|socially shared regulation]] codes, and then trained embedding-based models on five feature configurations. [[self-regulated-learning|Regulation]] that takes the form of enacting, planning-and-enacting, or asking for help was detected well from utterances (ROC AUC 0.67 to 0.73), off-topic talk very well (0.82), and plain log features alone detected almost nothing (mean 0.53). Planning and reflecting behaved differently: planning rose from 0.50 to 0.67 once the surrounding two segments of talk were concatenated, and reflecting was best when the logs were added. The paper's contribution to [[learning-analytics|learning analytics]] is that the honest answer depends on the construct, and that a text-only model is a strong, cheap baseline rather than a straw man.

## Key Findings

- **Utterances beat logs for most codes, but not all.** Aggregated mean ROC AUC was 0.650 (95% CI [0.615, 0.685]) for text-only embeddings, 0.640 with the surrounding-context window, 0.526 for log-derived features alone, 0.613 for text plus logs, and 0.623 for text plus logs with context.
- **The largest single gain came from conversational context on planning.** Planning scored 0.5036 from the current segment's text alone, 0.6711 when the two preceding and two following segments were concatenated (95% CI [0.6058, 0.7230]), and 0.6269 in the multimodal version with the same window. Planning is the construct a model cannot see in one turn of talk.
- **Reflecting is where the environment logs earned their place.** Reflecting scored 0.5862 as text plus logs against 0.5158 from text alone and 0.4735 from logs alone, matching the authors' reading that some regulation is enacted in the model rather than narrated.
- **Off-topic talk was the easiest behavior to detect, and only from talk.** Text-only reached 0.8247 (95% CI [0.7396, 0.9008]) while log features alone managed 0.4462, essentially chance.
- **Enactment-family codes were strong from text and slightly hurt by a wide context window.** Enacting scored 0.6745 text-only and 0.6113 with the window; enacting-and-planning scored 0.7285 text-only; enacting-and-monitoring scored 0.6796 text-only but 0.6080 in the multimodal version with context, which the authors attribute to diluting a temporally tight coupling between action and label.
- **Assistance, the rarest and most socially situated code, was the hardest to learn.** Its best configuration reached 0.6235, and every multimodal variant was at or below that.
- **Four teachers reviewed a worked segment, and disagreed in an instructive way.** Three said the labels matched behavior they recognized in the discourse and logs and two asked for a visual timeline or dashboard; one objected that a segment carrying two labels obscures the behavioral signal, which the authors accept as a real obstacle to practitioner use.

## How the detection pipeline was built

The data come from two C2STEM studies, 2021 and 2022, with 36 high school sophomores working in pairs through an eight-week and a six-week kinematics and computing curriculum. Audio and screen capture produced roughly 189 hours of collaborative discourse and 5,575 transcribed utterances; actions in the block-based model were logged as abstract syntax tree changes and mapped onto five low-level actions, of which adjusting (32%) and executing (32%) dominated, followed by building (18%), visualizing (9%) and drafting (9%). Segments, 394 of them, were cut at shifts between task-context categories rather than at fixed time windows, so each segment stays inside one part of the model: initializing variables, updating variables each simulation step, updating them under conditions, or conditional statements.

GPT-3.5-Turbo, chosen for cost and performance, summarized each segment from its discourse plus its task context, and every summary was checked by a researcher against the underlying actions and talk. A seven-code scheme from earlier work (planning, enacting, reflecting, enacting-and-planning, enacting-and-monitoring, assistance, off-topic) was applied to the summaries, with two researchers reaching Cohen's kappa of at least 0.7 before one labeled the rest; the codes ranged from 7% to 22% of segments. Utterances were embedded with all-MiniLM-L6-v2, models were feed-forward networks in TensorFlow with two hidden layers, and evaluation used nested three-fold cross-validation with GroupKFold so no session's segments appeared on both sides of a split.

## What this means for practice

- **Teams building classroom detectors.** Start with a text-only baseline before adding sensors or interaction logs: on this data it beat every multimodal combination overall, and adding a context window is not free.
- **Designers choosing which behaviors to surface first.** Off-topic talk and the enactment codes are close to usable now. Planning and reflecting are the ones that need context and logs, which also means they are the ones that break first in a different environment.
- **Anyone planning a teacher-facing view.** The most specific piece of feedback in this study came from the review, not the model: two labels on one segment confused a 20-year teacher. A single dominant label, or an explicit hierarchy, is a design decision worth making early.
- **Researchers reusing the method.** The pipeline is reusable and the supplementary prompt is published, but [[multimodal]] fusion here is mid-fusion of text and log features, so the result says more about features than about architectures.

## Limitations

- The models were trained on a single task in a single environment with 36 students. Transfer across domains, tasks and populations is untested, and the authors list it first.
- Accuracy is modest in absolute terms: apart from off-topic talk, no code cleared 0.73, and three codes sat between 0.50 and 0.63 in their best configuration.
- Each segment carries one label, though the authors note that regulation behaviors often co-occur; that choice simplifies training and, as one teacher pointed out, complicates interpretation.
- Teacher feedback came from four teachers reviewing one segment by email, in a study designed for modeling rather than evaluation, so it is a usability signal, not evidence of classroom impact.
- The label set itself was applied to LLM summaries rather than to raw transcripts, so an error in summarization is inherited by everything downstream.
- No real-time intervention was tested. The paper argues the detectors could support adaptive scaffolding; it does not show one.

## Citation

Zhang, J., Borchers, C., Cohn, C., Srivastava, N., Snyder, C., Guo, S., Ashwin T S., Mohammed, N., Noh, H., & Biswas, G. (2026). [*Using Large Language Models to Detect Socially Shared Regulation of Collaborative Learning*](https://doi.org/10.1145/3785022.3785083). In *LAK26: 16th International Learning Analytics and Knowledge Conference* (pp. 883-890). ACM.
