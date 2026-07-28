---
source_url: https://arxiv.org/abs/2602.10620
ingested: 2026-05-07
sha256: d2e5ecdbc265f0a80940292c1725c520dd1e1644be93496436c0c6f7c31d100c
---

# ISD-Agent-Bench: A Comprehensive Benchmark for Evaluating LLM-based Instructional Design Agents

**arXiv:** 2602.10620v1 [cs.SE] | **Date:** 11 Feb 2026  
**Authors:** YoungHoon Jeon, Suwan Kim, Haein Son, Sookbun Lee, Yeil Jeong, Unggi Lee

---

## Abstract

LLM agents have shown promising potential in automating Instructional Systems Design (ISD), a systematic approach to developing educational programs. However, evaluating these agents remains challenging due to the lack of standardized benchmarks and the risk of LLM-as-judge bias. We present ISD-Agent-Bench, a comprehensive benchmark comprising 25,795 scenarios generated via a Context Matrix framework that combines 51 contextual variables across 5 categories with 33 ISD sub-steps derived from the ADDIE model. To ensure evaluation reliability, we employ a multi-judge protocol using diverse LLMs from different providers, achieving high inter-judge reliability. We compare existing ISD agents with novel agents grounded in classical ISD theories such as ADDIE, Dick & Carey, and Rapid Prototyping ISD. Experiments on 1,017 test scenarios demonstrate that integrating classical ISD frameworks with modern ReAct-style reasoning achieves the highest performance, outperforming both pure theory-based agents and technique-only approaches. Further analysis reveals that theoretical quality strongly correlates with benchmark performance, with theory-based agents showing significant advantages in problem-centered design and objective-assessment alignment.

---

## Key Technical Specifications

| Component | Details |
|-----------|---------|
| **Total Scenarios** | 25,795 |
| **Test Scenarios** | 1,017 |
| **Contextual Variables** | 51 (across 5 categories) |
| **ISD Sub-steps** | 33 (derived from ADDIE) |
| **Framework** | Context Matrix |
| **Evaluation Protocol** | Multi-judge (diverse LLMs from different providers) |
| **Classical Theories Tested** | ADDIE, Dick & Carey, Rapid Prototyping ISD |
| **Modern Technique** | ReAct-style reasoning |

## Core Findings

- **Best-performing approach:** Classical ISD frameworks + modern ReAct-style reasoning
- **Performance hierarchy:** Hybrid (theory + technique) > pure theory-based > technique-only
- **Theoretical quality** strongly correlates with benchmark performance
- **Theory-based agents excel in:** Problem-centered design, Objective-assessment alignment
- **Reliability innovation:** Multi-judge protocol mitigates LLM-as-judge bias
