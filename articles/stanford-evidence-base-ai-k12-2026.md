---
title: "The Evidence Base on AI in K-12: A 2026 Review"
created: "2026-07-29T04:33:04-04:00"
updated: "2026-08-25T07:30:00-04:00"
type: article
tags: [k-12, ai-literacy, evidence, sociocultural-learning, intelligent-tutoring, scaffolding]

sources: ['raw/papers/stanford-evidence-base-ai-k12-2026.md']
confidence: medium
---

> **Stanford Evidence Base: AI in K-12 Education** — A 2026 [[meta-analysis-systematic-review|systematic review]] from the Stanford SCALE Initiative analyzing 818 papers on AI in K-12 education. The central finding is that [[learning-gains|learning outcomes]] studies provide strong causal evidence for only 20 of 818 papers, and zero high-quality causal studies examine U.S. K-12 student settings. The evidence that exists reveals a consistent pattern — AI improves performance during use but gains frequently fail to persist or transfer, and general-purpose AI tools can actively harm learning outcomes compared to pedagogically designed alternatives.

**Stanford SCALE Initiative, AI Hub for Education** — Published 2026. Analysis of repository spanning through October 2025.

## Key Findings

**The Evidence Gap.** Of 818 papers in the AI Hub Research Repository, only 20 met What Works Clearinghouse (2025) standards for strong causal inference (RCTs or quasi-experimental designs). Zero high-quality causal studies examine U.S. K-12 *student* settings; very few exist for U.S. K-12 *educators*. Most causal research is international, conducted in [[higher-ed|postsecondary]] settings, short-term (often single 20-minute sessions), and focused on immediate outcomes. The repository grew from 28 relevant papers in January 2023 to over 800 by October 2025, but [[research-methods-aied|methodological]] rigor has not kept pace with volume.

**Immediate Gains, Uncertain Transfer.** AI significantly improves performance *while students use it* — math proofs, programming, economics exams, [[physics-education|physics]], and argumentative writing all show gains during AI-supported practice. However, effects are mixed or negative when AI is removed. Bastani et al. (2025) found high schoolers using a general-purpose chatbot for math practice performed **~17% worse** on closed-book final exams than peers with no AI access, despite higher practice grades. Chen et al. (2025) found [[llm]]-Tutor improved homework scores but did not improve unassisted exam scores. Lehmann et al. (2025) found general-purpose AI for programming increased topics covered but harmed understanding and widened achievement gaps for low-[[prior-knowledge]] students. Kosmyna et al. (2025) found AI essay assistance led to **83% of participants failing to recall a quote** from their own essay, versus 11% for non-AI users. This pattern — performance boost during use, learning loss after removal — is the central empirical finding of the review and directly implicates [[transfer-of-learning]] as the most critical open question in AI education research.

**Easier Doesn't Mean Better.** Students consistently report greater enjoyment and reduced cognitive burden when using AI tools. However, reduced effort can undermine deeper learning. Kreijkes et al. (2026) found retention improved only when AI use was paired with traditional strategies like note-taking. Stadler et al. (2024) found general-purpose AI reduced cognitive load but produced lower-quality reasoning and argumentation compared to traditional search. This aligns with [[desirable-difficulties]] research: making practice easier often harms long-term retention and transfer, even when it feels better in the moment.

**[[pedagogy|Pedagogical]] Design Matters.** The most actionable finding: tutoring-specific tools consistently outperform general-purpose [[pedagogical-agent|chatbots]]. Bastani et al. found that a tutoring-specific chatbot with pedagogical guardrails (hints, step-by-step reasoning, refusal to give direct answers) mitigated the exam score drop, while general-purpose GPT Base *caused* it. This suggests that [[intelligent-tutoring|AI Tutoring]] effectiveness depends critically on pedagogical design, not just model capability. The review interprets findings through a [[learning-theories|learning science]] framework spanning [[sociocultural-learning]] (general-purpose AI may operate outside the ZPD by doing work for students), the expertise reversal effect (novices need guidance, experts need independence), and [[metacognition]] (AI completing tasks reduces opportunities for students to monitor their own understanding).

**Educator Evidence.** While the student-focused causal evidence is thin, the educator evidence base is even sparser. Very few high-quality studies examine how AI affects teacher practice, workload, or [[faculty-development|professional development]] — a gap that is particularly concerning given the rapid push to deploy AI tools in classrooms and the documented [[genai-can-harm-teaching-rct-2026|risks of AI harming teaching quality]].

## Implications for AI in Education

This review is a watershed document for the field. It establishes that the evidence base for AI in K-12 education is not merely thin — it is *absent* for the populations and contexts where deployment is most aggressively pursued (U.S. K-12 classrooms). The finding that zero high-quality causal studies exist for U.S. K-12 students should give pause to every district [[administrator]], edtech vendor, and policy maker advocating for rapid AI adoption.

The consistent pattern of immediate gains without durable transfer challenges the prevailing assumption that AI assistance automatically improves learning. It suggests that many AI education tools may function as **performance prosthetics** — helping students complete tasks in the moment without building the underlying knowledge that enables independent performance later. This distinction between assisted performance and genuine learning is well-established in [[rct|RCT-based education research]] but has been largely overlooked in the AI education hype cycle.

The superiority of pedagogically designed tools over general-purpose AI is actionable: it implies that simply giving students access to ChatGPT or similar chatbots is not merely suboptimal but potentially harmful. Effective [[ai-education|AI in education]] requires deliberate instructional design — [[scaffolding]], [[sociocultural-learning|ZPD]]-aligned support, refusal to bypass student thinking, and integration with established learning activities. This connects to broader work on [[ai-pedagogical-orientation]] and the growing recognition that [[access-not-enough-ai-tutoring-2026|access to AI tutoring is not enough]] without thoughtful pedagogical integration.

For the research community, the review functions as both a wake-up call and a roadmap. It identifies urgent priorities: long-term studies with delayed post-tests, research in authentic U.S. K-12 settings, studies of educator use and impact, and research designs that disentangle assisted performance from durable learning. The [[k-12]] field urgently needs to move beyond descriptive and technical-computational papers (which together constitute 92% of the repository) toward rigorous causal designs.

## Tutoring-Specific vs. General-Purpose AI

The single most consistent finding across the review is that **pedagogically designed, tutoring-specific AI consistently outperforms general-purpose chatbots** (e.g., ChatGPT, Gemini) on durable learning outcomes. The mechanism is preservation of learning work: tutoring-specific tools retain [[desirable-difficulties|productive struggle]] via graduated hints, avoid suppressing [[metacognition]], and calibrate to the [[sociocultural-learning|learner's zone of proximal development]] — where general-purpose AI that simply completes tasks short-circuits all three.

| Dimension | General-Purpose AI (e.g., ChatGPT, Gemini) | Tutoring-Specific AI |
|---|---|---|
| **Interaction model** | Open-ended Q&A; completes tasks on request | Structured hints, [[socratic-method|Socratic questioning]], step-by-step [[scaffolding|scaffolds]] |
| **Cognitive load** | Reduces *all* load, including germane (productive) load | Reduces extraneous load while preserving productive struggle |
| **ZPD targeting** | Often operates outside the [[sociocultural-learning|zone of proximal development]] | Explicitly calibrated to learner readiness |
| **Metacognitive demand** | Low — AI does the reasoning | High — learner must reason with guidance |
| **[[transfer-of-learning|Transfer]] evidence** | Mixed to negative when tool is removed | More promising (limited causal data) |

**Why this happens (learning-science mechanisms):** (1) **Desirable difficulties** — general-purpose AI removes productive struggle; tutoring tools preserve it via graduated hints. (2) **Germane load** — effective learning requires processing that feels effortful, which general AI short-circuits ([[cognitive-offloading|cognitive load / offloading]]). (3) **Metacognition suppression** — when AI completes reasoning, students lose practice in monitoring their own understanding. (4) **Expertise reversal** — novices need scaffolding, not answers; general AI gives answers while tutoring AI gives scaffolds.

**Caveats:** The causal comparison base is tiny (most studies are single-condition AI-access vs. no-access, not head-to-head tutoring vs. general); "tutoring-specific" is not yet a standardized design category; and long-term transfer data (months or years out) is essentially absent.

## Connected Concepts

- [[intelligent-tutoring]] — the tutoring-specific tools that outperform general chatbots
- [[desirable-difficulties]] — the mechanism preserving productive struggle
- [[k-12]] — the review's focal education level
- [[metacognition]] — reduced when AI completes reasoning
- [[rct]] — the causal study designs the evidence base lacks
- [[scaffolding]] — the graduated-support mechanism of tutoring tools
- [[sociocultural-learning]] — ZPD-aligned support
- [[ai-literacy]] — the framing for responsible K-12 AI use
- [[transfer-of-learning]] — the critical open question (durable vs tool-dependent gains)
- [[meta-analysis-systematic-review]] — the review methodology
- [[socratic-method]] — a tutoring-specific interaction mode
- [[generative-ai]] — the general-purpose tools compared
- [[cognitive-offloading]] — the risk of AI reducing productive cognitive load
- [[self-regulated-learning]] — the learner agency tutoring tools preserve
- [[adaptive-learning]] — the personalization tutoring tools employ
## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[genai-can-harm-teaching-rct-2026]] — Generative AI Can Harm Teaching
- [[ai-pedagogical-orientation]] — Faculty Orientations Shape Adoption of AI in Research and Teaching
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning

## Citation

Stanford SCALE Initiative, AI Hub for Education. (2026). [*The Evidence Base on AI in K-12: A 2026 Review*](https://scale.stanford.edu/sites/default/files/The%20Evidence%20Base%20on%20AI%20in%20K-12%20Report.pdf). Stanford University.
