---
title: When Should Teachers Control AI Generation for Mathematics Visuals?
created: "2026-05-12T04:33:04-04:00"
updated: "2026-09-20T08:50:26-04:00"
type: article
foundations: [agentic-ai, ai-education, curriculum-design, teacher-role]
pedagogy: [pedagogy]
technology: [generative-ai]
research_method: [theoretical analysis]
discipline: [stem education, math education]
audience: [instructors]
sources: ['raw/papers/2605.10672.md']
confidence: high
---

> **Synthesis:** Generative AI can help teachers rapidly create classroom-ready visual materials, particularly in [[math-education|mathematics]] where diagrams and visual representations must be **pedagogically meaningful and instructionally correct**. This paper investigates when and how teachers should control AI generation of mathematical visuals.
> The study identifies key decision points where teacher input is essential: ensuring [[pedagogy|pedagogical]] correctness of visual representations, alignment with [[curriculum-design|curriculum]] goals, and appropriateness for student levels. The authors propose a framework for teacher-AI collaboration in visual material creation that balances AI efficiency with pedagogical control.
## Connections to AIED

This work connects to [[teacher-role]] by showing how teachers remain essential as pedagogical validators of AI-generated content. It intersects with [[stem-education]] since mathematics visual generation is a core need in STEM teaching.

The findings also relate to [[generative-ai]] and [[finkelstein-principled-ai-education-2025]], suggesting that principled AI use in education requires [[human-in-the-loop-ai|human oversight]] for pedagogically sensitive outputs. The teacher control framework connects to [[agentic-workflows-education]] where [[agentic-ai|AI agents]] assist but humans direct.

## What this means for practice

- **Instructors.** Judge a visual tool by where correction happens, not by how polished the output looks. In this study, manual verification of the 90 images generated under pre-generation control found only 11 with the correct number of objects (12.2% accuracy), rising to 70 of 117 under mid-generation control (59.83%) and only 2 of 93 incorrect under post-generation control (97.85%).
- **Instructors.** Prefer workflows that let you edit the generated image directly when a visual must encode an exact quantity or structure; post-generation editing removed the hidden transformations that made errors hard to localize and cost bounded and predictable to fix.
- **Instructors.** Budget verification time for prompt-only generation in [[math-education|mathematics]]. Seventeen of the 24 teachers reported that highly automated generation produced visually appealing but numerically incorrect images, and 11 abandoned otherwise promising images once they spotted an inconsistency.
- **Instructors.** Brief students and colleagues on the account of authorship this creates: teachers in the study said post-generation editing increased their sense of accountability for the final representation, so [[human-ai-collaboration|human-AI collaboration]] here means owning the artifact, not approving it.
- **Administrators.** Choose tooling that keeps structure inspectable rather than optimizing for one-click creation. The paper's core claim is that control timing shifts risk between interpreting intent, translating intermediate structure, and managing local refinement — a procurement question, not just a preference.

## Limitations

- The study is a single-session, controlled, remote Zoom experiment with 24 primary mathematics teachers recruited via Prolific, roughly 70 minutes total with about 12 minutes per condition, so it captures first-use experience rather than adoption into real lesson-planning workflows.
- Tasks were limited to generating visuals for primary-level arithmetic, which the authors say constrains generalizability; interaction preferences and correctness sensitivities may differ at other grade levels or in other subjects.
- The study measures teacher perceptions, observed workflows, and image accuracy, not downstream outcomes — the authors state they cannot determine whether the observed differences produce higher-quality instructional materials or improved student understanding.
- Verification depended on teachers' own manual inspection, which places sustained cognitive demands on them, and the researchers had no automated correctness check to fall back on.

## Connected Concepts

- [[teacher-role]]
- [[stem-education]]
- [[generative-ai]]
- [[math-education]]
- [[curriculum-design]]
- [[human-ai-collaboration]]
## Connected Articles

- [[finkelstein-principled-ai-education-2025]]
- [[agentic-workflows-education]]
## Citation

Li, Z., Wang, J., & Wang, A. Y. (2026). [When should teachers control AI generation for mathematics visuals?](https://arxiv.org/abs/2605.10672). Proceedings of the Thirteenth ACM Conference on Learning @ Scale (L@S 2026), Seoul, Republic of Korea.
