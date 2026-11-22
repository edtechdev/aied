---
title: "Next-Gen Literature Reviews: A Practical AI Guide for New Scholars"
created: "2026-11-16T07:34:23-05:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Maitra, D.", "Gong, J."]
published: "2026-08-21"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B49A-99-29312
foundations: [ai-literacy, critical-thinking, human-ai-collaboration, academic-integrity]
pedagogy: [scaffolding, inquiry-based-learning, self-directed-learning, project-based-learning]
technology: [generative-ai, llm, rag, visualization, prompt-engineering]
ethics: [hallucination-risk, ai-use-disclosure]
research_method: [case study]
discipline: [engineering education, science education]
level: [undergraduate, higher ed]
audience: [instructors, researchers, librarians]
sources: ['raw/papers/maitra-next-gen-literature-reviews-ai-guide-2026.md']
confidence: low
methods: [qualitative-research, design-based-research, ai-assisted-educational-research]
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
evidence_context: educational
---
> **Synthesis:** Maitra and Gong (2026) set out to answer a question faculty actually ask — how should a novice researcher be taught to run a literature review with [[generative-ai|generative AI]], step by step, without being taught to trust it — and answer it with a worked demonstration rather than an experiment. The paper walks the conventional seven-step review process (define scope, learn the disciplinary style, search, manage references, analyze, synthesize, write), and at each step shows the manual workflow beside an AI-assisted one, with the exact prompt used and a critique of what came back. The case is perovskite solar cell research, chosen because the second author works in it and could therefore catch errors that a novice could not. That choice produces the paper's most useful evidence: mind maps and citation maps were largely accurate and genuinely helped structure an unfamiliar field, and reference generation was not. A request for an IEEE-style reference list returned entries that were mostly [[hallucination-risk|hallucinated]] or wrongly cited, including one attributed to a research group that never did the work, while the same tool reliably reformatted a list of already-verified citations into APA. The authors conclude that AI belongs at the [[scaffolding|scaffolding]] end of the process and that human judgment has to hold the analytic middle.

*No primary data: this is a conceptual/design contribution.*

## Key Findings

- **The framework is seven steps, and each one is documented as a pair of workflows.** Identify the topic, review the discipline's publication norms, search the literature, manage references, analyze and evaluate, synthesize, and write. For each, the paper describes what researchers did before generative AI, what the tool was asked to do, and how the output held up. That pairing, rather than the tool list, is what makes the guide teachable.
- **Visual tools did real work at the front of the process, with visible omissions.** A mind map generated in Map This from the authors' draft manuscript organized stability, machine learning, applications and manufacturing, and made relationships legible — how stability concerns bear on space applications, how machine learning might optimize manufacturing. A word cloud from the same draft surfaced "PSC," "stability," "PCE," "phase" and "challenges" prominently, but under-weighted "space applications," "manufacturing" and "device modeling," and included non-technical words such as "can," "one" and "type." The omissions are the teaching point: the visualization reports frequency, not significance.
- **Citation maps produced analysis a novice could not easily do by hand.** A Litmaps map of perovskite work in space environments showed no direct citation link between two papers while both drew on the same foundational references, and identified a single earlier study as the most influential node feeding five subsequent ones. The authors used that structure to explain shared thematic threads around radiation hardness and degradation.
- **Reference generation is the consistent failure mode.** Asked to "create a reference list in IEEE style with important articles on perovskite solar cell (PSC)," ChatGPT returned a list the authors found to be mostly hallucinated or incorrectly cited on fact-checking. The paper reproduces the errors: wrong author initials, wrong year, wrong volume and pages, and in one case a plausible-looking article attributed to a research group that "never did this work."
- **Reformatting works where generating does not.** When the first author asked the same tool to convert a set of already-identified, correctly sourced references into APA style, it did so accurately and saved substantial time. The distinction — formatting existing verified content versus producing new bibliographic content — is the most transferable rule in the paper.
- **Step five is reserved for people.** The authors state plainly that AI cannot and should not play a dominant role in critical analysis, because evaluating methodological rigor, theoretical alignment and evidentiary support depends on [[critical-thinking|critical judgment]] and domain expertise the model does not have and the student is still building.
- **The access argument is about institutional resources, not convenience.** The authors frame AI-assisted review as a way to lower the entry barrier for students at institutions with limited research support, while noting that the more capable tools sit behind subscriptions and that students gravitate to paid versions.
- **Copyright constrains the workflow.** The guide instructs researchers to upload only publicly available material — abstracts, references, open-access articles — and not full copyrighted papers, a rule the authors applied to their own study.

## How the study was done

The work is informed by [[design-based-research|design-based research]] principles rather than constituting a full design-based research study. The authors borrow problem-centered design, iterative refinement, and evaluation of instructional artifacts, and they say explicitly that the purpose was to develop and document a framework, not to evaluate learner outcomes across implementation cycles.

The artifacts — citation maps, summaries, mind maps, reference lists, word clouds and generated visuals — were treated as qualitative data and examined through qualitative content analysis against five criteria: accuracy of facts and citations, completeness of coverage of major themes in the field, transparency of sources and reasoning, coherence of structure, and reliability across repeated prompts. Each output was checked by a human observer, sometimes a student and sometimes faculty. Prompts were repeated for selected tasks so that output variability and hallucination tendencies could be observed, though the authors note that limited replication, not a controlled trial, is what this provides. Work proceeded in three phases: exploratory prompting, systematic evaluation of outputs against the criteria, and refinement through revised prompts and cross-tool comparison.

The tool set is dated to 2024 and listed precisely: ChatGPT on GPT-3.5 and GPT-4 for text generation, summarization and citation testing; Perplexity's academic version for retrieval-augmented answers; Elicit for structured extraction and comparison; DALL·E3 inside ChatGPT for visuals; Litmaps for citation mapping; frequency-based word cloud tools; and the 2024 desktop versions of Zotero and EndNote for reference organization. The authors justify the dating as a reproducibility measure, since the behaviors documented are version-specific.

Perovskite solar cells were selected because the second author has an established publication record on thin-film solar cells and could verify outputs against domain knowledge; the framework itself is presented as discipline-general, with the PSC case as the demonstration. The authors also note that the topic was already defined before the process began, and that in a real student project step one would involve more exploratory work.

## What this means for practice

- **Use the seven steps as a syllabus, not a slogan.** The value for a mentor is that each step has a described manual version, a described AI-assisted version, and a stated failure mode. An undergraduate research course can adopt the sequence directly and assess each step's artifact.
- **Instructors.** Separate formatting from sourcing in every instruction you give students. Reformatting a verified reference list is safe and fast. Asking a model to produce the list of what should be cited is where fabricated citations appear. Write that distinction into the assignment [[rubrics|rubric]] rather than hoping students infer it.
- **Make verification a deliverable.** The paper's own method — five criteria applied to each output, with a human observer recording errors — is assignable. A student who must submit the AI output alongside a verification table has done assessable work; a student who submits only the synthesized paragraph has not. The same discipline applies to figures: word clouds and mind maps look authoritative and omit what matters but appears rarely, so ask students to state what the figure leaves out.
- **Instructors.** Reserve the analytic step for supervised human work. If step five is delegated, the review has no argument of its own. The authors' position is that this is where mentorship is irreplaceable, and the design implication is to schedule faculty or peer review at that step rather than at the end.
- **Set the copyright rule before the first prompt.** Uploading a PDF a library paid for is a different act from pasting an abstract. The guide's restriction to public material is a policy a course can state in one sentence and enforce in the assignment instructions.

## Limitations

- The study is illustrative rather than experimental. The outputs analyzed came from specific prompts run in 2024, not from controlled repeated trials or parameter manipulation, and the authors state this themselves.
- No student learning outcomes were measured, and no comparison between AI-assisted and traditional instruction was run. The claim that the framework helps novices is an instructional argument, not a demonstrated effect.
- The platforms are treated as black boxes. The authors used free or standard configurations without access to architecture, version-locked environments or system parameters, so the failure patterns reported cannot be attributed to specific model properties.
- Verification depended on the authors' own expertise. That is what makes the PSC case credible and also what makes it unrepeatable by a novice: the errors were caught by a domain expert, which is precisely the resource the guide is meant to compensate for.
- One case domain, one topic, one team. The framework is presented as transferable across disciplines, but transfer was not tested, and the paper acknowledges that additional validation across fields would strengthen the claim.
- The study does not complete a design-based research cycle, since the framework was not implemented and evaluated across multiple instructional settings with learners; the authors list classroom-based implementation and iterative redesign as future work.

## Citation

Maitra, D., & Gong, J. (2026). [*Next-Gen Literature Reviews: A Practical AI Guide for New Scholars*](https://doi.org/10.18260/B49A-99-29312). *ASEE Computers in Education, 15*(3).
