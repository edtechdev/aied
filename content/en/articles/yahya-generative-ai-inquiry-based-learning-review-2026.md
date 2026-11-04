---
title: "How Does Generative AI Support Inquiry-Based Learning? A Systematic Review"
created: "2026-11-01T09:08:21-05:00"
updated: "2026-11-01T09:08:21-05:00"
type: article
sources: ['raw/papers/yahya-generative-ai-inquiry-based-learning-review-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [literature review]
discipline: [science education, language learning]
level: [higher ed, teacher education, secondary]
audience: [instructors, curriculum designers, researchers]
technology: [generative-ai, llm, prompt-engineering]
pedagogy: [inquiry-based-learning, scaffolding, metacognition, socratic-method]
foundations: [cognitive-offloading, limitations-in-aied-research]
assessment: [self-report-measures]
methods: [meta-analysis-systematic-review]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Yahya and colleagues coded 66 empirical studies of [[generative-ai|generative AI]] in [[inquiry-based-learning|inquiry-based learning]] against the five phases of Pedaste and colleagues. The map is lopsided: GenAI appears most often during investigation, reached as an information source through an unmodified [[conversational-ai|chatbot]], and least often during orientation, where learners frame the question. Thirty-two studies reported perceptions and eight measured inquiry skills. The review is version 1 and awaiting peer review, so the counts are the authors' own coding, not a referee-checked verdict.

## Key Findings
1. Scopus was searched on 6 October 2026 and returned 267 records. Screening excluded 157 at title and abstract, 110 reports were sought, 89 were assessed in full text, 21 could not be retrieved and 66 studies were included, each reported in a single article.
2. GenAI support was reported most often in investigation (45 studies, 68.2%), then conclusion (29, 43.9%), discussion (28, 42.4%) and conceptualization (27, 40.9%); orientation came last (20, 30.3%). Eleven studies covered all five phases, 19 covered one only and nine named none.
3. Science supplied 31 studies (47.0%) and language and literacy 11, so more than half the corpus came from outside science. Undergraduates (20) and pre-service teachers (14) made up 51.5%, school levels accounted for 22 and no study addressed [[early-childhood-elementary-ai-education|early childhood]].
4. ChatGPT or another OpenAI GPT model appeared in 47 studies (71.2%), and 44 (66.7%) used a general-purpose chatbot unmodified. The most common [[pedagogy|pedagogical]] role was information source (40, 60.6%), ahead of inquiry-process scaffold (22) and feedback provider (20).
5. User perceptions were the most reported outcome domain (32, 48.5%), followed by affective outcomes (25); 19 studies each reported cognitive outcomes and [[critical-thinking|higher-order thinking]], and only 8 (12.1%) measured inquiry skills, of which 4 had a comparison condition.
6. Thirty-three studies (50.0%) reported positive outcomes, 21 mixed, one negative and 11 descriptive only. Thirteen of the 14 comparisons with instruction without AI were positive, while comparisons between GenAI designs split five positive and five mixed.
7. The authors did not appraise study quality, did not assess reporting bias and did not rate the certainty of evidence, so the directions above are the study authors' claims rather than an effectiveness verdict.

## How the review was built

The protocol was not registered, but reporting follows [[meta-analysis-systematic-review|PRISMA]] 2020 with a completed checklist deposited as extended data. Eligibility required a large language or [[multimodal]] generative model, an explicitly described inquiry approach (guided or open inquiry, 5E or 7E, historical or scientific inquiry, or GenAI used to plan inquiry lessons), and a primary empirical study in an English-language journal from 2022 onward. No comparison group was required and outcomes were not an eligibility criterion, because the aim was mapping rather than effect estimation. Scopus was the single source, chosen for breadth; conference papers, book chapters, theses and preprints were excluded, and 21 of the 110 reports sought could not be retrieved.

Extraction used a 29-variable codebook organized by research question, covering year, country, level, discipline, design, participants, duration and instruments; tools, implementation, users, roles and control of use; inquiry framework, level of openness and phases with supporting evidence; outcome domains, direction and comparison condition; and challenges plus supportive design conditions. One reviewer extracted and recorded evidence for each code, two verified every row, and two others checked every number in the tables against the matrix.

Phase coding followed the five phases of Pedaste and colleagues, with 5E, 7E, POE and POEE stages mapped onto them by the rules in the paper's Table 2, and study-specific activities coded by function rather than label. A phase was coded yes, no or unclear. Discussion was the exception: because communication and [[reflection]] can accompany any phase, it was coded whenever learners or teachers used GenAI for communication, reflection or evaluation, whatever the timing. Screening used a verification design rather than independent double screening, with senior reviewers adjudicating and consensus reached by discussion.

## GenAI is placed where inquiry asks least and is thinnest where inquiry theory says it is hardest

Investigation is the most supported phase, or tied for most, in every discipline with more than two studies. Within it, the dominant use is retrieval: 40 of 66 studies cast GenAI as an information source, and 32 of those 40 used an unmodified chatbot, which by default answers questions rather than asking them. Orientation, where a topic becomes a question, received the least support at 20 studies, and the roles that would serve it were rare: seven studies used GenAI to generate questions, and four to help interpret data, although interpretation is what investigation is meant to teach. That is the review's central warning, that inquiry can collapse into the step GenAI performs most fluently.

The other half of the pattern is silence. For orientation, conceptualization, conclusion and discussion, between 50% and 55% of studies never said whether GenAI was involved, so the low counts are not evidence of deliberate restraint. The framework a study named shaped what it could report: 5E studies placed GenAI across more phases (investigation 13 of 17, conclusion 12, discussion 13) than studies with no named model, which clustered on conceptualization (10 of 16) and investigation (9 of 16). Part of the distribution is therefore a reporting convention, and the review reads the staged frameworks as helping researchers say, phase by phase, where the tool entered.

## Most studies report how learners felt about inquiry, not whether they inquired

The outcome table is dominated by measures that cannot detect inquiry. [[self-report-measures|User perceptions]] were reported in 32 studies and affective outcomes in 25, against eight studies that measured inquiry or science process skills. Questionnaires were the instrument in 39 studies; tests appeared in 22. Only 24 studies used quasi-experimental or randomized designs, and only three randomized assignment. Twenty-five studies analyzed logs of interaction with GenAI, the one instrument that can see process rather than impression, and the review treats those logs as the way forward.

Direction of outcome compounds the problem. Half the corpus was positive, but 37 studies had no comparison group, and within that group the 14 positive findings rested mainly on perceptions or uncontrolled pre-to-post change. The authors counted direction at study level and say plainly that this ignores sample size and effect magnitude, and they did not pool effect sizes because designs and measures varied too widely, an omission they tie to [[limitations-in-aied-research|the absence of any quality appraisal]]. A reader can take from this that GenAI-supported inquiry is usually liked. What the corpus does not yet show is whether learners inquire better, since the studies able to answer that question number eight.

## Ten design comparisons carry the argument about configuration

The headline comparison is the one against teaching without AI: 14 studies, 13 positive, including a GPT-4-based 5E coach at d = 0.68 and argumentative writing at η2 = .43. The authors decline to read that as an effect of GenAI, because those comparisons confound the tool with added structure, novelty and, in several cases, the inquiry design itself. The informative comparisons are the ten that hold the task constant and vary the GenAI design, and they split five positive and five mixed.

Where configuration helped, it helped in recognizable ways: InquiryGPT, which withheld direct answers, beat unrestricted ChatGPT; a chatbot with [[metacognition|metacognitive]] scaffolding beat the same chatbot without it; multimodal beat text-only. Where it did not, the counterexamples matter. A 5E-based agent did no better than a conventional agent, cognitive scaffolding raised argumentation quickly but the gains faded while metacognitive scaffolding held, and 5E-based prompts beat metacognitive scaffolding on vocabulary at d = 0.50. Only 18 studies configured the tool at all and three prevented direct answers, so most of the evidence describes GenAI with almost no built-in guidance. The same pull shows in lesson design: only 5 of 60 plans generated with ChatGPT-4o reached 75% of the maximum quality score, and most were weak in their conception of student inquiry. The challenges studies named cluster with this reading: inaccuracy or [[hallucination-risk|hallucination]] in 21 studies (31.8%) and over-reliance or [[cognitive-offloading|cognitive offloading]] in 16 (24.2%), while 23 studies reported none at all.

## What this means for practice

- **Teachers designing inquiry units.** Assign GenAI a named phase before the lesson, and withhold answers in the phases where learners must reason. The corpus supports [[scaffolding|scaffolds]], stage-specific prompts and [[socratic-method|Socratic]] configurations over open chat, and it shows the least use in orientation and question formulation, which are the phases a [[teacher-role|teacher]] can plan deliberately.
- **[[curriculum-design|Curriculum]] and instructional designers.** Build verification and reflection into the task, not into the tool: 14 studies named checking GenAI output against data, literature or other tools as a supportive condition, and 26 named alignment with a pedagogical framework. Treat generated lesson plans as drafts to be revised against an explicit inquiry framework, since most of the plans evaluated were accurate on content and weak on inquiry.
- **Researchers.** Report the phases GenAI supports, measure inquiry skills directly and compare GenAI designs with one another. Eight studies measured inquiry skills and four of those had a comparison, so the design conditions that make GenAI support inquiry rather than replace it are still inferred from ten comparisons.

## Limitations

- The article is version 1 and awaiting peer review, so the screening counts, the phase coding and the outcome directions have not been checked by referees.
- One database (Scopus), English only, journal articles only, 2022 onward: work indexed elsewhere, published in other languages or reported at conferences is absent by design.
- Twenty-one of the 110 reports sought could not be retrieved, which the authors say may have biased the included set.
- Phase coding depends on how explicitly each study described its design; for most phases about half the studies did not say whether GenAI was used, and discussion was coded whenever communication or reflection occurred regardless of timing.
- No quality appraisal, no reporting-bias assessment and no certainty rating; positive findings may reflect publication bias and novelty effects, and counting direction by study ignores sample size and effect size.
- Screening and extraction used a verification design rather than independent double coding, and verifiers saw the original decisions and rationales, which may have made disagreement less likely.

## Citation

Yahya, F., Rusijono, R., Dewi, U., Khasanah, S. U., Rusdi, L. B., Amalia, D., Hamdiah, M., & Nisak, N. S. (2026). [*How does generative AI support inquiry-based learning? A systematic review*](https://doi.org/10.12688/f1000research.192825.1) (version 1; awaiting peer review). *F1000Research*, 15, 1780.
