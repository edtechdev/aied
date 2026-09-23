---
title: "School network reorganization under educational and spatial constraints using classical and quantum optimization"
created: "2026-08-09T07:09:19-04:00"
updated: "2026-09-19T10:56:42-04:00"
type: article
foundations: [ai-education]
technology: [learning-analytics, simulation]
ethics: [equity-in-ai-education]
research_method: [system development, case study]
level: [k 12]
sources: ['raw/papers/2608.05427v1.md']
confidence: high
audience: [policymakers, administrators, institutions]
page_kind: [framework]
methods: [meta-analysis-systematic-review]
institutions: [educational-policy-ai]
---

> **Synthesis:** This paper develops an optimization framework for school network reorganization that integrates geographic, administrative, and educational criteria into an Integer Linear Programming formulation. Applied to the complete public school network of Calabria, Italy, and extended to a hybrid quantum optimization setting, the approach identifies optimal school aggregation plans under different policy scenarios while preserving [[equity-in-ai-education]] and accessibility. The framework serves as a decision-support tool for sustainable educational planning in the era of [[ai-education|AI-enhanced operations research]].

## Key Findings

1. **Unified optimization framework:** An Integer Linear Programming model jointly integrates institutional compatibility, administrative boundaries, road-network travel-time accessibility, capacity, and [[curriculum-design|curricular]] compatibility — a departure from prior models that handled only subsets of these [[network-analysis|school network]] planning dimensions.
2. **Geographical coherence and enrollment thresholds dominate:** Across all synthetic instance sizes, inter-municipality aggregation penalties are the strongest drivers of cost, while the autonomy threshold is the only parameter negatively correlated with the objective; [[accessibility]] and territorial-protection weights rarely bind.
3. **Quantum-ready formulation:** Reformulated as a Constrained Quadratic Model and solved on a hybrid quantum-classical sampler, the framework reproduces the classical optimum in every tested configuration with a 0% optimality gap, though at higher execution times.
4. **Structurally robust plans:** Optimal aggregation plans vary little with policy weights, so decision-makers can explore trade-offs between cost, accessibility, and educational quality without destabilizing the network.

## Optimization Framework

The framework models school dimensioning as a constrained combinatorial problem that balances [[stakeholders|multiple, often conflicting]] policy objectives. Because Italian school dimensioning policies consolidate autonomous institutions to improve administrative efficiency while still preserving equitable access, the model integrates six primary dimensions:

- **Administrative geography and context:** Aggregations are restricted within provincial borders (provincial coherence), with a penalty applied to cross-municipal consolidations that weaken local [[governance]].
- **Institutional compatibility:** Only same-category institutions (Comprehensive Institutes with CIs, Upper Secondary Institutes with USIs) may merge, and curricular-track mismatches within USIs are penalized as a soft constraint.
- **Territorial fragility:** A criticality index (0–4) built from income, education, labor-market, and institutional-fragility indicators penalizes aggregation involving schools in the most vulnerable municipalities.
- **Differentiated dimensional requirements:** Enrollment thresholds for retaining autonomy are asymmetric — 1000 students in stable areas dropping to 400 in the most fragile — so small schools in isolated territories can preserve their independence.
- **Spatial accessibility:** Aggregation feasibility is based on actual road-network travel times rather than geometric distance, with stricter thresholds for younger (CI) students and wider catchments for USI students.
- **Operational feasibility:** Balanced aggregation (flows only from smaller to equal-or-larger schools), capacity limits that prevent oversized mega-institutions, and a global reorganization target define a managerially sustainable outcome.

## Mathematical Formulation

The problem is formulated in two equivalent variants. The baseline model uses binary variables for each school that remains active as a hub and for each aggregation arc, enforcing compatibility through explicit constraints. A more compact variant reformulates the problem as a [[benchmark|capacitated facility location problem]], embedding institutional and provincial compatibility directly into the assignment-variable domain, which reduces the constraint structure and improves solver scalability.

## Computational Study

Because no public [[benchmark]] dataset exists for school dimensioning under territorial constraints, the authors built a synthetic instance generator that reproduces a hierarchical settlement geography with provinces, municipalities (capital, large, medium, small), school types, tracks, enrollments, and criticality levels. Four sizes were tested — n ∈ {250, 500, 750, 1000} — with over a thousand parameter configurations. The classical solver (Gurobi) reached proven optimality in every case, with average runtimes rising from 0.032 s to only ~0.11 s at n = 1000, demonstrating that the sparsity of the feasible assignment graph keeps the model highly scalable. A Pearson-correlation sensitivity analysis showed that geographical-coherence penalties (r ≈ 0.45) and the autonomy threshold γ (r ≈ −0.37) drive the optimization, while accessibility thresholds and territorial-protection weights were statistically negligible across all sizes.

## Quantum Optimization

The model was reformulated as a Constrained Quadratic Model and submitted to D-Wave's Leap hybrid quantum-classical service (LeapHybridCQMSampler) on the n = 500 instance. Across all 32 configurations (each run five times), the quantum solver reproduced the classical optimum exactly — a 0% optimality gap with zero standard deviation — confirming correctness, robustness, and reproducibility. Execution times (11.4–12.8 s) remain well above Gurobi's sub-second performance, so the authors frame the work as a validation of quantum applicability and a benchmark for evolving [[simulation|hybrid quantum]] hardware rather than evidence of computational superiority.

## Calabria Case Study

The real-world validation uses the complete public school network of Calabria, Italy, for the 2025/2026 school year across five provinces (Catanzaro, Cosenza, Crotone, Reggio Calabria, Vibo Valentia) under 64 policy configurations. The classical solver found optimal solutions below 0.20 s in every case; the hybrid quantum solver again matched the classical optimum with a 0% gap. The province of Cosenza — geographically large and municipally fragmented — generates the most cross-municipality aggregations and educational hubs, while Vibo Valentia produces none. Aggregation plans proved structurally robust to policy-parameter changes, indicating that the framework supports [[educational-policy-ai|evidence-based planning]] without amplifying territorial imbalances.

## What this means for practice

- **Policymakers.** Set and publish the enrollment threshold for retaining autonomy deliberately: in the Calabria run it was the only parameter negatively correlated with the objective value (r = −0.60), so it governs how many aggregations occur, while [[accessibility|accessibility thresholds]] and territorial-protection weights rarely bind.
- **Policymakers.** Base catchment feasibility on road-network travel time rather than geometric distance, and hold younger students in Comprehensive Institutes to stricter thresholds than upper-secondary students.
- **Administrators.** Explore trade-offs by re-running the model across policy weights instead of negotiating one plan: aggregation plans proved structurally robust across the 64 policy configurations tested, so relative weights can shift without destabilizing the network.
- **Administrators.** Apply the territorial criticality index (0–4) and the asymmetric autonomy thresholds — 1000 students in stable areas down to 400 in the most fragile — so consolidation does not concentrate in the most vulnerable municipalities.
- **Administrators.** Treat hybrid quantum solving as a watch item rather than a procurement case: on the Calabria instance it reproduced the classical optimum at a 0% optimality gap but with execution times well above Gurobi's sub-second solves.

## Limitations

- The synthetic instances at n ∈ {250, 500, 750, 1000} abstract away geography: inter-school travel time is computed as Euclidean distance divided by a fixed speed (v = 1), so no synthetic instance exercises a real road network.
- The hybrid quantum campaign covers only the n = 500 instance; the authors restricted it because available hybrid quantum resources cannot efficiently solve substantially larger sizes, making it a single-size proof of concept.
- No public benchmark dataset exists for school dimensioning under territorial constraints, and the real-world validation is a single region (Calabria, Italy, 190 binary decision variables) in a single school year (2025/2026); the model optimizes a policy-weighted proxy objective, not measured learning or [[equity-in-ai-education|equity]] outcomes.
- The territorial-protection coefficient C4 was never exercised: the Calabrian dataset contains no institutions classified as at risk of dimensioning under the adopted regulatory framework, so that penalty term remained inactive.

## Connected Concepts

- [[equity-in-ai-education]]
- [[ai-education]]
- [[k-12]]
## Connected Articles

- [[white-wu-robotics-ai-education-2026]] — Robotics and Artificial Intelligence in Education: Transformations, Challenges, and Future Directions
- [[ai-uk-higher-education-policy-2026]] — Artificial Intelligence in UK Higher Educational Policy and Institutional Decision Making
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[elevate-genai-virtual-tutors]] — ELEVATE: Designing Human-Centered GenAI Virtual Tutors for Scalable and Inclusive Education
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module

## Citation

Ciacco, A., Di Puglia Pugliese, L., & Guerriero, F. (2026). [*School network reorganization under educational and spatial constraints using classical and quantum optimization*](https://arxiv.org/abs/2608.05427v1). v1.
