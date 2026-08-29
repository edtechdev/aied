---
title: "Thinking Through AI: Advancing Cognitive and Collaborative Research for AI in Education"
created: "2025-01-26T08:44:33-04:00"
updated: "2026-08-24T09:30:00-04:00"
type: article
tags: [ai-education, writing-education, k-12, ai-literacy, cognitive-offloading, intelligent-tutoring, collaborative-learning]
discipline: [writing education]
level: [k 12]
sources: ['raw/papers/tzirides-thinking-through-ai-2025.md']
confidence: high
---

> **Synthesis:** Tzirides, Galla, Cope & Kalantzis (2025) introduce the "Thinking Through AI" framework, a methodological approach that fuses cognitive labs, think-aloud protocols, and cyber-social research to study how learners engage with AI tools. Built on three core dimensions—students' cognitive engagement, educators' pedagogical strategies, and the concurrent design of AI tools and learning experiences via Learning Experience Research (LXR)—the framework positions educators, learners, and developers as co-creators in AI tool design. A one-time implementation of the CGScholar AI Helper with 30 middle school students at a rural Alaska school demonstrated how rubric-based AI feedback can enhance [[writing-education]] while actively engaging students in the refinement of AI systems rather than passively offloading cognition to them.

## Key Findings

1. Students positioned as active co-creators—providing feedback to improve AI systems—engaged more meaningfully with both the learning task and the underlying technology, with several thanking the AI for helpful feedback and requesting further explanations.
2. Rubric-based, criterion-by-criterion AI feedback motivated students to revise; one student added five more sentences and sought a second round of feedback to track her improvement, linking [[formative-assessment]] directly to revision effort.
3. Students valued the interactive, conversational quality of the feedback ("the feedback is like a friend talking to me") and the star-rating system tied to teacher rubric criteria, which scaffolded [[self-regulated-learning]] and motivation.
4. Usability gaps surfaced through think-aloud sessions—challenging vocabulary, delays in feedback generation, and interface issues—demonstrating how [[human-in-the-loop-ai|human-in-the-loop]] methods reveal concrete refinements for AI writing tools.

## The Thinking Through AI Framework

The framework integrates principles of cyber-social research with cognitive labs and think-aloud protocols to create continuous feedback loops in the development and implementation of [[ai-education|AI-driven educational tools]]. It is structured around three core dimensions. The first emphasizes students' [[student-engagement|cognitive engagement]] with AI, encouraging them to think critically about AI processes and provide feedback that refines the system. The second centers on educators' [[instructional-design|instructional strategies]], integrating rubrics and knowledge bases so AI tools align with specific learning objectives. The third advances beyond traditional [[usability-research|user experience research (UXR)]] through Learning Experience Research (LXR), promoting the concurrent design of AI tools and learning experiences in collaboration between students, teachers, and developers.

At its heart, the framework treats AI-mediated learning as a [[human-ai-collaboration]] rather than a one-way consumption of outputs, directly addressing concerns about [[cognitive-offloading]] by designing for active engagement instead of passive reliance. The authors position [[ai-literacy]] as a co-design process, where learners and educators shape the very tools they use.

## Cognitive Labs and Think-Aloud Protocols

Cognitive labs are a [[qualitative-research|qualitative research]] method that reveals the mental processes individuals use while completing tasks. Verbal reports come in two forms: concurrent verbal reports, where participants think aloud as they work, and retrospective verbal reports, where they describe their thought processes afterward. Because all cognitive activity passes through short-term memory, the think-aloud method offers a direct glimpse into conscious thought without the distortions of long-term memory retrieval.

Combining think-alouds with behavioral observation provides a robust, qualitative foundation for developing and evaluating AI-enabled educational tools. Within the Thinking Through AI framework, moderated think-aloud sessions use a semi-structured guide covering preparation, session flow, and post-session reflection, with minimal prompts such as "What do you think?" to capture authentic student responses.

## Cyber-Social Research

The cyber-social research approach treats humans and digital systems as mutually constitutive, emphasizing the active involvement of educators, learners, and developers in the co-design and co-evolution of AI-driven systems. Drawing inspiration from agile software development, it favors short, incremental cycles of design and refinement over the linear "waterfall" model typical of traditional education research. The approach is notable for its commitment to inclusivity, valuing the input of outliers and edge cases in the design of contextually relevant AI tools. It has been applied across the CGScholar ecosystem, where [[peer-review]], [[formative-assessment]], and reflexive pedagogy are supported by iterative learning experiences.

## Alaska Case Study

The study was a one-time implementation at a rural middle school in Alaska, a "mid-poverty" institution serving roughly 64 students in grades 6–8 with a student-to-teacher ratio of 15:1. Nearly 59% of students identify as American or Alaska Native, situating the pilot within an underserved, resource-constrained community where AI could help bridge gaps in access to high-quality [[writing-education]]. Seventeen 7th- and 8th-grade students initially expressed interest; four participated in think-aloud sessions and eight completed all phases of data collection. The writing task drew on *The Book of the Unknown Americans* and prompted students to reflect on belonging across self, family, community, and spirituality, guided by a structured four-point writing rubric.

## The CGScholar AI Helper

The CGScholar AI Helper is a cloud-based web application with a split-screen interface: a [[multimodal]] text editor on the left and an AI/teacher/peer feedback pane on the right. The writing workflow moves through drafting with rubric-guided support, AI feedback with automatic version tracking, revision, optional [[peer-review]], reflection, and publication to portfolios. AI feedback is delivered one rubric criterion at a time using [[prompt-engineering]] and chain-of-thought approaches, while [[rag|Retrieval-Augmented Generation (RAG)]] prioritizes teacher-approved knowledge-base materials over the foundation [[llm|large language models]] for factual accuracy. The system supports multiple LLMs (Meta Llama 3.3 70B, GPT-4, Claude 3.5 Sonnet, Gemini Experimental), with all interactions anonymized to protect [[privacy|student data]].

## Findings

Students engaged directly with the AI, reading suggestions carefully and conversing with the tool for further explanation. Teacher observations and student reflections highlighted an intuitive interface, with one student calling it "self-explanatory" and another appreciating its "chronological order" and "basic bullet points." The star-rating system tied to teacher rubric criteria proved motivating. However, think-aloud sessions surfaced usability challenges: some students struggled with the vocabulary of AI feedback, initial text-recognition errors had to be fixed, and feedback generation delays required optimization. These findings underscore the value of iterative [[usability-research|usability]] testing in refining AI writing tools for diverse learners.

## Discussion

The framework bridges [[usability-research|user experience]] and educational design by emphasizing participatory design principles, ensuring AI tools are both pedagogically effective and user-friendly. Grounding the research in a rural, underserved setting highlights AI's potential to provide [[equity-in-ai-education|equitable access]] to high-quality learning experiences. The authors position the methodology as advancing both theory and practice in [[ai-education]], with students' active participation in iterative design yielding real-time, evidence-based refinement of AI tools.

## Implications

For educators, the AI Helper's rubric-based feedback enables effective [[scaffolding]] of student writing while reducing teacher workload, providing immediate feedback that motivates deeper engagement with revision. The study argues for [[professional-training|professional development]] focused on [[ai-literacy]] so teachers gain ownership and confidence in implementing AI tools. For developers, the cognitive-lab and think-aloud methods revealed concrete improvements—simplifying language, reducing feedback delays, and enhancing interface intuitiveness—supporting more accessible, [[human-in-the-loop-ai|human-in-the-loop]] design. For policymakers, the findings point to investments that promote [[equity-in-ai-education|equitable access]] to AI tools in rural and resource-constrained settings, alongside [[ai-literacy]] training and attention to [[privacy|data privacy]], [[bias-mitigation|algorithmic bias]], and transparent [[governance|decision-making]] in AI deployment. The study also raises ethical questions about [[ethics|AI use in education]] that should inform guidelines and regulations.

## Connected Concepts

- [[ai-education]]
- [[writing-education]]
- [[k-12]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[collaborative-learning]]
- [[human-ai-collaboration]]
- [[student-engagement]]
- [[instructional-design]]

## Connected Articles

- [[agency-gap-ai-writing]]
- [[cstutorbench-slm-tutors]]
- [[code-anchor-multi-view-visualization]]

## Citation

Tzirides, A., Galla, M., Cope, B., & Kalantzis, M. (2025). [*Thinking Through AI: Advancing Cognitive and Collaborative Research for AI in Education*](https://doi.org/10.35542/osf.io/s8hqe_v1). EdArXiv. doi:10.35542/osf.io/s8hqe_v1.
