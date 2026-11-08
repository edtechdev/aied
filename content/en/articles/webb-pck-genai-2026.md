---
title: "Revisiting Pedagogical Content Knowledge (PCK) development for the age of generative AI"
created: "2026-11-08T09:30:00-05:00"
updated: "2026-11-08T09:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [theoretical analysis]
evidence_context: educational
level: [k 12, primary education, secondary]
audience: [instructors, researchers, faculty developers]
sources: ['raw/papers/webb-pck-genai-2026.md']
source_url: "https://doi.org/10.1016/j.caeo.2026.100428"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-08"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [theory-development-aied, teacher-ai-competency, teacher-role]
pedagogy: [reflection]
technology: [generative-ai]
assessment: [feedback]
ethics: [culturally-relevant-pedagogy, equity-in-ai-education]
methods: []
---

> **Synthesis:** Webb et al. (2026), a team of eleven researchers and teacher educators, analyzed three researcher-constructed vignettes through the Refined Consensus Model (RCM) of pedagogical content knowledge: a Year 5 (9–10) science lesson in New Zealand, a Year 10 (14–15) history chatbot activity, and a Year 11 (15–16) English marking task in the United Kingdom. They argue that [[generative-ai|GenAI]] can amplify teachers' PCK when its output is critically evaluated, but that it also manufactures *pseudo-cPCK*: output that resembles collectively validated professional knowledge while lacking the community validation that defines it. The distinction that makes the paper worth a page is that the risk is not primarily factual error but a corrupted boundary between personal and collectively warranted knowledge — and it falls hardest on novices, whose personal PCK is still forming.

## Key Findings

- **Three use cases, one frame.** The vignettes cover planning, classroom interaction and assessment — selected as high-impact K-12 applications reflecting the dominant approaches in the literature and in UNESCO's AI Competency Framework for Teachers — set in Year 5 (9–10 years old), Year 10 (14–15), and Year 11 (15–16). Eleven researchers built them, with settings spanning the UK, New Zealand, Portugal, Norway, Ireland, Australia, the USA and North Africa.
- **GenAI amplifies and filters in the same move.** In the planning vignette the tool returned a differentiated plan within seconds, but its experiment used dry ice, barred by school safety protocols, and its mātauranga Māori content amounted to translated words and generic statements about kaitiakitanga. The tool is a filter that narrows what reaches planning, not only a speed-up.
- **The collective realm is where the damage concentrates.** A generated plan may resemble collective PCK (cPCK), but cPCK is "collectively developed and validated" while GenAI outputs are "statistical aggregations" lacking pedagogical judgment or contextual understanding. Circulated uncritically, they become pseudo-cPCK and put the personal–collective boundary at risk.
- **Assessment is the best case, and still not a saving.** In the Year 11 English vignette GenAI drafts formative comments against GCSE criteria, and a cited meta-analysis found "no significant difference" in learning outcomes between AI-generated and human-provided feedback. Yet marking runs to over 150 essays per cycle and nearly a thousand per year, and checking the output can consume the time it saves.
- **Experience decides which effect dominates.** An experienced teacher can turn a hallucinated quotation into a lesson on how historical myths form; a novice cannot hold content accuracy, student responses and pedagogical decisions in mind at once. Uncritical use, the authors write, "could stifle pPCK and ePCK development."
- **AI literacy is placed as a filter, not a component.** The paper defines it as a set of teacher capacities "rather than a form of PCK" and positions it at the interface between GenAI and the three knowledge realms, where it governs whether the model's influence is productive or harmful.

## Why a model built for human colleagues needs a new kind of interlocutor

In the RCM, the learning-context layer holds policy, classroom environment and student attributes. It shapes the flows among personal, collective and enacted PCK but does not intervene. GenAI does: it generates the draft that enters planning, produces utterances students answer, and writes the comments a teacher returns. The paper's extension moves GenAI from background condition to "active mediating agent" with AI literacy as the filter on its influence. This is a [[theory-development-aied|theory development]] move, not a new taxonomy: the elements stay and one changes status.

The sharper claim concerns warrant. cPCK is not merely shared knowledge; it is knowledge legitimated through community consensus — curriculum documents, exemplars, teacher networks. A model trained on them can produce something that reads like consensus; it cannot produce the accountability that makes consensus knowledge. The authors call the result pseudo-cPCK and warn that its uncritical incorporation "risks corrupting" rather than enriching the knowledge flows the RCM describes. Unlike a [[hallucination-risk|hallucination]], which is a false claim a teacher can check against the subject, pseudo-cPCK is a plausible claim that arrives with the social authority of shared practice and no responsible community behind it; the check is procedural rather than factual: who validated this, and on what warrant?

That distinction is why the paper treats [[tpack]] as insufficient: its technology is an inert resource, and even AI extensions add knowledge domains without asking what happens to collective knowledge when a machine can imitate it. The RCM's unit — movement between realms — is where a generated artifact does its damage.

## Why the same tool helps experts and harms novices

The amplifier/filter split is not a property of the model but of the teacher's existing personal PCK. Amira catches the dry ice because she knows her school's safety protocols and her learners; Ms Clarke turns "Let them eat cake" into a lesson on how historical myths form because she knows the historiography. Both correct output a novice would accept; in both, the corrective move, not the generation, is the pedagogical event.

For novices the sequence inverts. Their PCK components are fragmented, so the evaluation that would turn an error into a teachable moment is precisely the capacity they lack. GenAI then supplies a complete plan or a complete set of comments, and the task collapses into acceptance or rejection without the knowledge base needed to decide. The warning is developmental: overreliance while PCK forms can leave a fluent workflow over a thinner knowledge base. The equity consequence follows — teachers with well-developed personal PCK can combine expertise with GenAI efficiency, while novices may let the tool carry assessment, producing feedback insensitive to individual needs and "potentially exacerbating existing inequalities" (see [[equity-in-ai-education]]).

The remedy is correspondingly collective: mentoring relationships, departmental collaboration and shared evaluation practices, because a novice cannot bootstrap the cPCK that would let them judge alone. That is a different prescription from individual AI-literacy training, and it is the paper's most transferable design claim for [[teacher-education]]. It also fits the RCM's logic: if personal knowledge grows through the plan–teach–reflect cycle and exchange with collective knowledge, the fastest protection is a functioning collective, not a better tool.

## Where AI literacy belongs matters more than what it contains

If AI literacy is one more competency beside technical and pedagogical knowledge, it can be trained as an add-on. The paper's placement makes it conditional: it sits between the model and the knowledge realms and determines whether the same output amplifies or corrupts. On that reading, a teacher who can prompt well but cannot warrant an output has not built the filter, and a department that circulates generated plans without review has built the opposite of cPCK. The placement also explains the novice asymmetry: novices are not simply less skilled, they are missing the knowledge the filter must work on.

The cost is that AI literacy now carries explanatory weight without a measure: the paper does not say what counts as an adequate filter, how it would be observed, or how much of it a teacher-education sequence builds. Those are targets for the empirical work the authors call for, and they matter for [[teacher-ai-competency]] frameworks that list critical evaluation as a dimension without specifying the knowledge it must be exercised against.

## What this means for practice

- **Give every generated artifact a named warrant before it circulates.** A shared drive of AI-drafted lesson plans is pseudo-cPCK until a named teacher has checked each against the curriculum, safety rules and local knowledge. The reviewer's name belongs on the artifact.
- **Separate drafting from verification and budget the second step.** The marking vignette shows that efficiency is not guaranteed: at over 150 essays per cycle and nearly a thousand per year, review time has to be scheduled, or drafting time returns as unreviewed feedback.
- **Put local constraints in the prompt, then check them item by item.** The planning vignette failed on a safety rule and on cultural depth the teacher could see was missing. Ask for the constraints explicitly, then inspect the output against them rather than against its fluency.
- **Pair a novice with a reviewer, not only with a tool.** The paper's remedy for the developmental risk is a functioning collective — a mentor, a department, a shared standard — not more solo experimentation with a capable model.

## Limitations

- **No empirical data.** The three vignettes are hypothetical but plausible scenarios, explicitly not accounts of observed classroom events. No classrooms were observed and no teachers or students were followed, so claims about enacted PCK are analytical propositions, not findings.
- **The enacted-PCK claims are the weakest.** The authors concede that hypothetical constructions cannot replicate real-time classroom dynamics, "particularly for ePCK", and call for longitudinal ethnographic studies of actual teacher–GenAI interactions.
- **Researcher-constructed and researcher-analyzed.** The same team drafted and interpreted the vignettes, which the authors name as "an inherent risk" of reflecting their existing theoretical commitments. Validation rested on "researcher judgement" rather than external practitioner review, and consensus review mitigates but cannot eliminate it.
- **Teachers only.** How students' own GenAI interactions shape classroom dynamics and teachers' enacted PCK is "beyond its scope", as are data protection, institutional accountability and ethical governance beyond the marking vignette.
- **Three subjects, three settings.** Science, history and English in New Zealand and the United Kingdom. The authors note that every topic carries pedagogical considerations the analysis cannot fully capture, so transfer to mathematics, the arts or vocational education is untested.
- **A proposal, not a tested model.** The RCM extension and pseudo-cPCK are offered as theoretical contributions. The paper offers analytical propositions rather than testable predictions and presents no evidence that pseudo-cPCK circulates in real departments, leaving the central construct awaiting the empirical test the authors recommend.

## Citation

Webb, M. E., MacCallum, K., Torrington, J., Butler, D., Shelton, C., Lee, J., et al. (2026). [*Revisiting Pedagogical Content Knowledge (PCK) development for the age of generative AI*](https://doi.org/10.1016/j.caeo.2026.100428). *Computers and Education Open*, 11, 100428.
