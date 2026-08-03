---
source_url: https://doi.org/10.1186/s40561-026-00459-9
ingested: 2026-08-03
sha256: 3a2eba12e86ced3d9424cb47569b632896cbef51cb7468572214ba47558a3c44
---
# Advancing diagram-based reasoning in AI tutoring systems: a structural approach for STEM education

Yicheng Sun, Yihan Liao & Xiaoxue Ma (City University of Hong Kong; Hong Kong Metropolitan University)

Smart Learning Environments (Springer), Article in Press, accepted 04 Jul 2026. Open Access (CC BY 4.0). doi:10.1186/s40561-026-00459-9

The rapid advancement of AI-powered tutoring systems has transformed educational environments, yet these systems still face signiﬁcant challenges in
accurately interpreting complex engineering diagrams commonly encountered
in STEM ﬁelds, such as circuit schematics and network topologies. Current
methods often struggle to recognize spatial relationships and detect missing connections, primarily due to the inherent complexity of real-world diagrams, which
limits their eﬀectiveness in diagram-based assessments. To address this, we propose StructRAG, a framework that combines visual parsing with pattern-level
structural reasoning to enhance diagram interpretation. Our approach integrates OCR-based visual recognition, large language models, and graph pattern
retrieval, enabling the system to identify missing connections, correct structural
inaccuracies, and provide structure-aware feedback. We evaluate StructRAG on
a dataset of 1,650 STEM-related questions. The results show a macro-average
question-level accuracy of 89.3% and a micro-averaged edge-level F1 score of
93.0%, outperforming OCR+CV, GPT-4 graph-only, direct-image GPT-4o, and
ablated StructRAG variants. Paired bootstrap tests with Holm–Bonferroni correction indicate that these improvements are statistically signiﬁcant at p < 0.01.
These ﬁndings suggest that StructRAG provides more reliable diagram interpretation for complex and ambiguous diagram types, such as mesh and hybrid
graphs. Overall, the framework shows potential as a structure-aware support tool
for diagram-based assessment and feedback in STEM education.

Keywords: STEM Education; AI Tutoring Systems; Diagram Interpretation;
Structural Reasoning; Pattern-Level Retrieval

1 Introduction
Artiﬁcial Intelligence (AI) tutoring systems (Lin et al., 2023) have rapidly evolved into
a transformative component of modern educational ecosystems (Alam, 2023; Basri,
2024; Khine, 2024). By integrating technologies such as natural language processing, computer vision, and adaptive feedback mechanisms, these systems are capable
of automatically analyzing student inputs, generating step-by-step explanations, and
delivering customized learning support (Baig et al., 2024; Mounkoro et al., 2024;

D. Zhang et al., 2024). With the recent proliferation of large language models (LLMs)
such as GPT-4, the quality, ﬂuency, and contextual appropriateness of AI-generated
responses have dramatically improved (Sun et al., 2025). As a result, AI tutoring systems are now widely adopted in intelligent learning environments (Tseng et al., 2024),
where they have demonstrated measurable improvements in student engagement,
learning eﬃciency, and instructional scalability across diverse subjects.
One particularly impactful advancement in AI tutoring systems is their increasing ability to handle multimodal inputssuch as handwritten or image-based questions
submitted by studentsenabling automated and on-demand responses in a variety of
formats (Cosentino et al., 2025; Z. Liu et al., 2024). This capability has substantially
improved accessibility, especially in remote and self-paced learning contexts (Damasceno et al., 2020; Mota & Martins, 2023). However, despite their success with textual
and symbolic content, current systems encounter serious limitations when confronted
with diagrammatic questions commonly found in STEM education. Domains such as
electrical engineering, computer networking, and control systems rely heavily on structural diagramse.g., circuit schematics, network topologies, and block ﬂowchartswhere
accurate interpretation hinges on recognizing spatial relationships and structural connectivity. Unfortunately, existing AI systems often struggle to parse such diagrams
eﬀectively (Rao et al., 2024; Villegas-Ch et al., 2025), leading to partial understanding,
misinterpretation of connections, and ultimately, incorrect solutions.
This gap in structural diagram understanding arises primarily from the diﬃculty
of transforming complex visual inputs into semantically rich, graph-based representations and subsequently reasoning over these representations in a pattern-aware
manner. Traditional OCR and basic visual parsing pipelines tend to fall short when
dealing with real-world diagrams that include curved lines, overlapping elements, disconnected components, or partially occluded labels (Das & Pal, 2024; Gates, 2017;
Patil et al., 2024). These systems often fail to accurately capture topological relationshipssuch as node adjacency or edge directionalityresulting in incomplete or distorted
structures.
Figure 1 presents three representative examples of diagram-recognition failures,
including a shortest-path network, a common-emitter ampliﬁer circuit, and a hierarchical network topology. For instance, in shortest-path network diagrams such as those
used to teach Dijkstras algorithm (Figure 1a), AI systems frequently misidentify or
omit edges due to curved or intersecting connections. In one observed case, node u was
intended to connect with nodes v, w, and x; however, the model failed to detect the
edge between u and x, resulting in an incomplete graph structure. This misrepresentation undermines the correctness of algorithmic reasoning and may lead to incorrect
shortest-path calculations, thereby misleading students in understanding core concepts. Similarly, in electronic circuit diagrams such as the common-emitter ampliﬁer
conﬁguration (Figure 1b), LLM-based systems often struggle to interpret component
relationships correctly. They may overlook the presence of key components such as
transistors, or misattribute their terminal connectionsmistaking a capacitor-resistor
sequence for a linear standalone chain. Such misinterpretations compromise the circuits functional semantics and propagate errors into downstream tasks like automated
grading or waveform prediction (Anselmo et al., 2024; Boltsi et al., 2024).

(a) Recognition error in a shortest-path network diagram. The left side shows the
system’s output, which omits the edge between node u and node x. The right side
presents the ground-truth structure, where all connections are complete.

(b) Misinterpretation of a common-emitter ampliﬁer circuit. The model fails to
detect the presence of the transistor and misclassiﬁes terminal connections. The
ground-truth diagram (right) correctly illustrates the functional path.

(c) Flattening error in a hierarchical network topology. The model output (left)
collapses intermediate routing nodes, resulting in incorrect host-router assignments.
The correct version (right) preserves the intended multi-layer routing hierarchy.

Fig. 1: Representative examples of diagram-recognition failures: (a) shortest-path
network with a missed connection, (b) common-emitter ampliﬁer circuit with misclassiﬁed component connections, and (c) hierarchical network topology with ﬂattened
routing structure.

Comparable issues arise in network topology diagrams involving hierarchical
routers and subnet clusters (Figure 1c). A typical failure mode involves structural
ﬂattening, where multilayered routing elements are collapsed into single nodes, or
host nodes are misassigned to incorrect routers. These errors obscure logical subnet
boundaries and impede the systems ability to support network conﬁguration exercises or teach addressing schemes. Such omissions not only compromise the factual

accuracy of generated answers but also erode student trust in AI-assisted educational
tools. More critically, current LLMs lack an intrinsic mechanism to verify whether a
given diagram adheres to valid structural logic (Guo et al., 2025; N. Liu, 2024)such
as whether all components are functionally connected or whether a topology exhibits
expected properties like centrality, symmetry, or completeness. This limitation underscores the need for structural reasoning mechanisms tailored to the unique demands
of STEM diagram interpretation.
To address these challenges, we propose StructRAG, a pattern-aware AI framework designed to enhance structural diagram interpretation in AI tutoring systems.
StructRAG integrates OCR-based visual recognition, graph abstraction, and patternguided structural reasoning to overcome the limitations of traditional diagram parsing.
The core idea is to shift from surface-level recognition to pattern-level validation by:
(1) converting diagram images into graph-structured representations, (2) retrieving
structurally similar patterns from a curated library, and (3) prompting large language models (LLMs) to evaluate the plausibility and completeness of the recognized
structure.
At the heart of our framework is the concept of structural pattern reasoninga
process that involves abstracting topological patterns from recognized diagram structures (e.g., star, tree, or chain formations), retrieving semantically similar patterns,
and guiding LLMs to reason about potential omissions or misinterpretations based
on structural logic rather than direct node comparisons. This abstraction enables the
system to identify anomalies such as missing connections or inconsistent topology,
even in the presence of noisy visual input or incomplete recognition.
By combining pattern-level retrieval with LLM-guided reasoning, StructRAG
equips AI tutoring systems with the capability to interpret complex visual content
more robustly. This not only improves answer accuracy but also enhances the pedagogical reliability of AI feedback in STEM education scenarios, where structural
correctness is essential for conceptual understanding.
Based on this framework, our research is guided by the following questions:

• RQ1: To what extent does the proposed StructRAG framework improve the
accuracy of AI tutoring systems in interpreting student-uploaded engineering
diagrams?
• RQ2: How eﬀective is StructRAG in detecting and correcting missing connections
in circuit and topology diagrams?
• RQ3: Does pattern-level retrieval outperform node-level or example-based retrieval
in guiding structural reasoning?

2 Methodology
In this section, we present the technical design of StructRAG, the proposed
framework aimed at enhancing the structural interpretation of engineering diagrams within AI-driven tutoring systems. An overview of the system architecture is
shown in Figure 2. StructRAG is composed of four main components: (1) Diagramto-Graph Conversion, (2) Structural Pattern Retrieval, (3) Pattern-Aware Prompt
Construction, and (4) LLM-Guided Structural Reasoning and Correction.

Fig. 2: Overview of the StructRAG framework for structure-aware AI diagram interpretation.

2.1 Diagram-to-Graph Conversion

The ﬁrst step in StructRAG is converting a student-uploaded diagram image into a
structured graph representation. This task poses a signiﬁcant challenge in the STEM
education context, where diagrammatic problems often contain curved lines, unaligned
labels, scanning noise, and non-standard symbols. To address this issue, we combine
OCR (Chaudhuri et al., 2017; Mithe et al., 2013) with classical computer vision techniques, including the Hough Line Transform (Mukhopadhyay & Chaudhuri, 2015) and
contour detection (Gong et al., 2018). The module was implemented in Python using
OpenCV 4.8.0 and Tesseract OCR 5.3.0. Before recognition, each image is converted
to grayscale and resized so that its longer side contains 1,600 pixels while preserving
its aspect ratio. A 3 × 3 Gaussian ﬁlter is then applied, followed by adaptive Gaussian
thresholding with a block size of 31 pixels and a constant of 11. Finally, morphological
closing with a 3 × 3 kernel is used to reconnect small gaps caused by scanning noise
or faint handwriting.
Nodes correspond to labeled or unlabeled components, such as resistors, junctions,
and routers. Tesseract is conﬁgured using its LSTM engine and sparse-text segmentation mode (OEM=3 and PSM=11). OCR is conducted at three image scales, namely
1.0, 1.5, and 2.0, and detections with conﬁdence scores below 60 are removed. Bounding boxes produced at diﬀerent scales are clustered when their intersection-over-union
exceeds 0.5. The ﬁnal label is determined by majority voting, with the mean OCR

conﬁdence used to resolve ties. Component contours are detected using their area,
circularity, aspect ratio, and polygonal shape. Filled circular contours are treated as
junctions, whereas rectangular, elliptical, or zigzag contours are treated as generic
device nodes. Because StructRAG focuses on graph topology, the detected component
type is retained as metadata but does not directly aﬀect pattern retrieval.
Edges are inferred from the lines or curves connecting the detected nodes. Straight
connections are extracted using the probabilistic Hough Line Transform with ρ = 1
pixel, θ = 1◦ , an accumulator threshold of 30, a minimum line length of 25 pixels,
and a maximum line gap of 8 pixels. Two detected segments are merged when their
orientation diﬀerence is no greater than 10◦ , the distance between their closest endpoints is at most 12 pixels, and their perpendicular separation is at most 5 pixels. To
detect curved connections, OCR regions and accepted straight segments are removed
from the binary image. The remaining foreground is reduced to a one-pixel skeleton
using Zhang–Suen thinning (T.Y. Zhang & Suen, 1984), after which eight-connected
paths are traced between candidate node boundaries. A curved path is retained when
both endpoints are within 12 pixels of detected nodes and its geodesic-to-Euclidean
length ratio is below 2.5. Unless an explicit arrowhead is detected, connections are
represented as undirected edges. The arrow notation used in the illustrative example
indicates a detected connection rather than an inferred direction.
For each candidate edge between nodes vi and vj , we calculate four normalized
scores. The continuity score scont measures the proportion of sampled path points
located within three pixels of foreground pixels. The proximity score sprox decreases
exponentially with the distance between the path endpoints and the two node boundaries. The alignment score salign measures the cosine similarity between the local
path direction and the direction toward the associated node. Finally, snode represents
the mean OCR or contour-detection reliability of the two connected nodes. The edge
conﬁdence is calculated as

Cij = 0.45scont + 0.25sprox + 0.20salign + 0.10snode
(1)
Candidate edges with Cij ≥ 0.65 are inserted into the initial graph. Candidates
with 0.40 ≤ Cij < 0.65 are stored in the uncertain-edge set U and passed to the
structural pattern retrieval module for further validation, whereas candidates with
Cij < 0.40 are removed as visual noise. During post-processing, nodes are merged
when their bounding-box intersection-over-union exceeds 0.5 or when their centroid
distance is less than 0.75 times the median character height. When multiple line
candidates connect the same node pair, the candidate with the highest conﬁdence
is retained. This process produces a reﬁned graph G = (V, E), where V represents
the detected node entities and E contains the accepted structural connections. The
uncertain set is represented as U = {(vi , vj , Cij )}. Algorithm 1 summarizes the complete procedure. All parameters were ﬁxed for the complete evaluation and were not
adjusted for individual diagrams or topology types.
Consider the simpliﬁed illustrative network diagram shown in Table 1. This example is provided only to demonstrate the conversion procedure and is not part of the
1,650-question evaluation dataset. Node u is centrally located and connected to nodes
v, w, and x. If the connection u → x is curved or partially occluded, the initial visual

Algorithm 1 Diagram-to-Graph Conversion in StructRAG

Require: Diagram image I
Ensure: Initial graph G = (V, E) and uncertain-edge set U
1: Resize I, convert it to grayscale, and apply Gaussian ﬁltering
2: Apply adaptive thresholding and morphological closing
3: Perform OCR at scales 1.0, 1.5, and 2.0
4: Remove OCR results with conﬁdence below 60
5: Cluster overlapping labels and determine labels by majority voting
6: Detect component contours and construct the node set V
7: Detect straight segments using the probabilistic Hough transform
8: Merge collinear segments using the distance and orientation thresholds
9: Remove OCR regions and accepted straight segments
10: Extract curved paths using skeletonization and path tracing
11: Construct candidate edges between nearby node boundaries
12: Initialize E ← ∅ and U ← ∅
13: for all candidate edges eij do
14:
Calculate scont , sprox , salign , and snode
15:
Calculate Cij using Equation 1
16:
if Cij ≥ 0.65 then
17:
E ← E ∪ {eij }
18:
else if Cij ≥ 0.40 then
19:
U ← U ∪ {(eij , Cij )}
20:
end if
21: end for
22: Merge duplicated nodes and connections
23: return G = (V, E) and U

parser may fail to accept it. For illustration, suppose that this candidate produces
scont = 0.22, sprox = 0.70, salign = 0.55, and snode = 0.68. Its resulting conﬁdence is
0.45(0.22) + 0.25(0.70) + 0.20(0.55) + 0.10(0.68) = 0.452, which is rounded to 0.45.
The edge is therefore excluded from E, but retained in U for pattern-level validation.

Table 1: A Simpliﬁed Illustrative Example of Diagram-to-Graph Conversion
Stage
Raw
Diagram

PostProcessed
Graph
Final
Structured
Output

Input
Image of a 4-node topology: Node
u at the center connected to v, w,
and x through three lines, one of
which is curved
Intermediate node positions and
line detections reﬁned
Graph data and uncertain-edge
metadata

Output
OCR-detected
nodes:
{u, v, w, x};
accepted edges: u → v, u → w
(missed u → x)
Graph G: V
= {u, v, w, x}, E =
{(u, v), (u, w)}; conﬁdence(u → x) = 0.45
(retained as an uncertain edge)
JSON format: {"nodes": ["u", "v",
"w", "x"],
"edges": [["u", "v"], ["u", "w"]]};
U = {(u, x, 0.45)}

The main failure cases observed during conversion include severely occluded connections, overlapping lines without explicit junction markers, OCR confusion between
visually similar characters, and non-standard component symbols. In these cases, the
system retains a connection as uncertain when partial visual evidence remains, allowing the subsequent retrieval module to determine whether it is structurally plausible.
However, when both the connection trace and one of its endpoints are absent, the
visual module may still produce an incomplete graph. Similarly, dense mesh diagrams
may contain crossings that cannot be reliably distinguished from actual junctions.
These unresolved cases explain why the diagram-to-graph output is treated as an
initial, potentially incomplete structure rather than as the ﬁnal interpretation.

2.2 Structural Pattern Retrieval
Once the graph G is constructed, the second module retrieves structurally similar
patterns from a curated library of graph templates. These templates serve as abstract
references representing typical engineering structures that commonly appear in STEM
education, such as star networks, cascaded ﬁlters, ring topologies, bridge circuits, and
bus-based interconnections.
To construct this library, we collaborated with 12 STEM educators from the
departments of Electrical Engineering, Computer Science, and Systems Engineering.
Each educator was asked to identify representative diagrams from printed undergraduate teaching materials, including textbooks, laboratory manuals, course handouts, and
archived examination materials. This process resulted in a collection of 375 canonical
diagrams. The template library was constructed through an independent sourcecollection process and was ﬁnalized before the evaluation began. None of its diagrams
was drawn from or adapted from the questions subsequently used for evaluation, and
the library remained ﬁxed throughout all experiments.
The educators manually analyzed each source diagram and abstracted its structure into an unlabeled graph template Ti = (Vi , Ei ). During this process, question
text, node labels, numerical values, component types, annotations, and visual layout information were removed. The resulting templates therefore retain only abstract
connectivity information, namely how nodes are connected independently of their
identities, semantic meaning, or geometric arrangement. The library consequently
contains neither original diagram images nor corresponding question answers. These
templates cover a wide range of structural patterns, as summarized in Table 2.
The retrieval process is designed to eﬃciently identify which pattern best resembles
the student-submitted diagram, based on structure alone. The algorithm follows two
stages:

1. Coarse Filtering: For each graph G and template Ti , we compute high-level
structural features such as number of nodes, degree distribution, number of leaf
nodes, clustering coeﬃcient, and average shortest path length. These features are
normalized and compared using cosine similarity to retain the ﬁve templates with
the highest feature-level similarity.

Table 2: Distribution of Canonical Diagram Templates by Topology Type
Type
Star
Ring
Chain / Bus
Bridge / Mesh
Other

Description
One central node connects directly to multiple peripheral nodes
(common in networking).
Nodes form a closed loop, each connected to two neighbors (used in
synchronous systems).
Nodes arranged in a linear or single-path sequence (seen in resistor
chains or signal pipelines).
More complex forms with redundant connections (typical in faulttolerant circuits).
Irregular or hybrid patterns, including trees, cross-connected layouts, and custom domain-speciﬁc structures.

Total

Count

2. Fine-Grained Matching: The ﬁltered templates undergo structural alignment
with G using a modiﬁed graph edit distance (GED) (Gao et al., 2010). GED quantiﬁes the cost of transforming G into Ti through a series of edit operationsadding
or removing nodes or edges. We penalize transformations that break structural
continuity (e.g., removing central hubs) more heavily.
The selected pattern T ∗ is the candidate with the lowest normalized graph edit
distance among the ﬁve templates retained during coarse ﬁltering. The edge diﬀerence
∆E = E(T ∗ ) − E(G) identiﬁes connections that are present in the retrieved template but absent from the accepted graph, thereby highlighting potentially missing or
misrecognized edges. Let UE = {(vi , vj ) | (vi , vj , Cij ) ∈ U } denote the node pairs associated with uncertain visual connections. An edge appearing in both ∆E and UE is
supported by the retrieved structural pattern as well as partial visual evidence, while
an edge appearing only in ∆E is supported solely by structural similarity. All candidate edges in ∆E, together with the available conﬁdence scores for those overlapping
with UE , are passed to the LLM-guided structural validation stage rather than being
automatically inserted into the graph.

Table 3: Example of Structural Pattern Retrieval Process
Stage
Graph
from
Diagram
Template
Library
Matching
Graph
Comparison

Input
Diagram-derived graph G: V =
{u, v, w, x}; E = {(u, v), (u, w)}

Output
Graph missing one edge (u → x) due to
OCR error or occlusion. Detected by analyzing radial symmetry and node spacing.
Best match: star pattern T ∗ with center node
connected to v, w, and x. Structure assumes
uniform spacing around center node.

Library of 375 abstract graph
templates
with
star,
ring,
chain/bus, bridge/mesh, and
other topology patterns.
Compute ∆E = E(T ∗ ) − E(G)
using GED with structure-aware
penalties.

Edge u → x identiﬁed as missing with high
conﬁdence. Flagged as candidate correction
and passed to next module.

As shown in Table 3, the retrieval module can compensate for partial visual parsing failures by leveraging structural priors. Even when the visual connection (u, x)
is not accepted into the initial graph because of curvature, occlusion, or noise, the
matched template identiﬁes it as a plausible missing edge. This pattern-aware retrieval
mechanism reduces reliance on pixel-perfect input and provides candidate structural
corrections for subsequent validation by the language model.
Computational complexity and runtime considerations.
The computational cost of StructRAG mainly comes from three stages: diagram-tograph conversion, structural retrieval, and LLM-based reasoning. Let n = |V | and
m = |E| denote the number of nodes and edges in the extracted graph, M the number
of templates in the library, d the dimension of the structural feature vector, and K the
number of candidates retained after coarse ﬁltering. The diagram-to-graph conversion
stage is approximately linear in the number of foreground pixels for image preprocessing and line tracing, with additional OCR cost depending on the OCR engine.
For retrieval, computing structural feature vectors requires O(n + m) for degree-based
features and up to O(n(n + m)) for shortest-path features when using breadth-ﬁrst
search from each node. Coarse retrieval over the template library requires O(M d)
cosine-similarity comparisons. Since the template library contains 375 preprocessed
templates, their feature vectors are computed oﬄine and reused during inference.
The most expensive symbolic operation is graph edit distance, which is generally
NP-hard for unrestricted graphs. To make this step practical, StructRAG does not
apply GED to the full template library. Instead, it ﬁrst performs feature-level ﬁltering
and applies normalized GED only to the top K = 5 candidates. In addition, the
educational diagrams considered in this study are relatively small after abstraction,
and all semantic labels and visual layout details are removed before matching. This
bounded candidate set substantially reduces the retrieval cost in practice. As a result,
graph matching is not the dominant runtime bottleneck in our pipeline.
The main runtime cost comes from LLM inference. StructRAG submits three
completions for each question using the ﬁxed decoding conﬁguration described in
Section 3.2, and the ﬁnal graph is obtained through output aggregation. Therefore,
the LLM stage scales linearly with the number of evaluated questions and the number of completions per question. In practical deployment, this cost can be reduced
by caching retrieved templates, reusing parsed graphs, batching non-interactive evaluations, or using a smaller local model for preliminary validation before invoking
GPT-4 on ambiguous cases. These considerations suggest that StructRAG is suitable
for oﬄine assessment and semi-real-time tutoring scenarios, while large-scale real-time
deployment would require additional engineering optimizations.

2.3 Pattern-Aware Prompt Construction
Based on the retrieved structural template T ∗ and the partially recognized input
graph G, we construct a pattern-aware prompt (J. Zhang et al., 2024; Y. Zhang et al.,
2024) designed to elicit accurate and logic-driven responses from the large language
model (LLM). The goal of this step is to explicitly highlight structural discrepancies

while providing the LLM with enough context to reason beyond superﬁcial symbol
recognition.
Unlike traditional prompting strategies that rely heavily on predeﬁned node labels
or keyword matching, our approach emphasizes abstract topology (Hocking &
Young, 2012)the structural conﬁguration that underlies the diagram. This strategy
encourages the language model to analyze the input holistically, focusing on patterns
of connectivity rather than on speciﬁc symbolic entities or labels. As illustrated in
Figure 3, each pattern-aware prompt consists of four distinct components. We deﬁne
each component and provide a representative example.

Fig. 3: Components of a pattern-aware prompt used to guide the LLM in structural
reasoning.

To operationalize this approach, we utilize GPT-4 accessed via the OpenAI API,
which has demonstrated superior capabilities in reasoning over structured inputs and
providing consistent natural language justiﬁcations. The input prompt is constructed
dynamically and sent through secure HTTPS requests to the GPT-4 endpoint using
Python-based API calls. The model is conﬁgured with a low temperature to promote
deterministic reasoning, and outputs are ﬁltered to ensure structural relevance. We
chose GPT-4 due to its high contextual understanding and its ability to follow multistep instructions based on structured content like JSON and graph abstractions.
This pattern-aware prompting approach oﬀers signiﬁcant advantages over traditional, label-based prompting methods. In typical OCR+QA systems, the LLM may

be prompted with: "What does node u connect to in this diagram?" or "Is the answer
5 Ohms or 10 Ohms?", often without context of the overall structure. This makes
the model vulnerable to errors caused by misrecognized text or incomplete data. In
contrast, our prompts are grounded in veriﬁed patterns, shifting the reasoning focus
from superﬁcial label accuracy to topological completeness. For instance, even if the
node label x is misread as z, the model can infer that the central hub u should have
three connections, not two, based on the reference template.
By emphasizing pattern-centric reasoning, the model achieves stronger generalizability across diverse STEM domains. Grounding the reasoning process in abstract
graph structuresrather than domain-speciﬁc labelsallows the approach to handle a
wide range of diagram types, including circuits, ﬂowcharts, and network topologies,
regardless of labeling styles or visual variations. This structural abstraction also
enhances robustness to OCR errors, partial occlusions, and inconsistent symbol naming, maintaining interpretive accuracy under imperfect input conditions. Moreover,
by anchoring prompts in canonical structural templates, the approach reduces the
likelihood of hallucinations and encourages the generation of logically coherent and
pattern-consistent outputs.

2.4 LLM-Guided Structural Reasoning and Correction
The ﬁnal module leverages a large language modelspeciﬁcally, GPT-4to process the
pattern-aware prompt and output structured reasoning results. This response typically includes three key components: (1) a binary assessment of whether the diagram
appears structurally complete; (2) a list of inferred missing or incorrect edges, such as
u → x; and (3) a natural language explanation justifying the inference based on topological reasoning. Each component plays a crucial role: the binary assessment ﬁlter
identiﬁes and ﬂags diagrams that exhibit structural faults; the inferred edges provide
actionable corrections; and the explanation enhances interpretability, enabling both
students and instructors to understand the underlying logic. For each topology type,
we designed a structured prompt template that integrates a customized pattern-aware
component tailored to its speciﬁc structural features. Taking the star topology as an
example, the representative prompt submitted to the LLM is as follows:

Input Graph:
{
"nodes": ["u", "v", "w", "x"],
"edges": [["u", "v"], ["u", "w"]]
}
Reference Pattern:
{
"edges": [["u", "v"], ["u", "w"], ["u", "x"]]
}
Question: In the input graph, node u connects to v and w, but is not connected to x. Based
on the reference pattern, this edge may be missing.
Analyze whether the structure is complete. Are there missing or incorrect connections?
Justify your reasoning based on the overall pattern.
If you believe there is an error in the input graph, please provide the correct result.

The following is an example output produced by the large language model in
response to the constructed prompt:
The node u is a central hub and is expected to connect to v, w, and x. However, the input
graph suggests that node u is connected to nodes v and w, but not to node x. Based on
the reference pattern, u is expected to connect to v, w, and x, forming a star-like topology.
Therefore, the edge u → x appears to be missing. If the input graph is accurate, then this
indicates an incomplete structure. However, if the edge between u and x was simply missed
during extraction (e.g., due to OCR or visual errors), the corrected graph should include the
edge ["u", "x"]. The complete structure would then be:
{
"status": "error",
"nodes": ["u", "v", "w", "x"],
"edges": [["u", "v"], ["u", "w"], ["u", "x"]]
}

This correction aligns with the structural pattern and ensures topological completeness.

To enhance the reliability of these predictions while maintaining reproducibility,
we use a ﬁxed decoding conﬁguration rather than varying temperature settings. For
each question, the same prompt is submitted three times using the same model version
and decoding parameters reported in Section 3.2. Each response is parsed into a
canonical JSON graph by normalizing node identiﬁers, sorting node and edge lists,
and treating edges as undirected unless an arrow is explicitly present in the diagram.
The ﬁnal prediction is selected by majority voting over the parsed graph outputs. If
no complete graph receives a majority vote, we apply edge-level voting and retain
edges that appear in at least two of the three parsed outputs. This procedure replaces
the earlier temperature-sweep strategy and avoids using soft conﬁdence scores that
are not directly comparable across completions.
Finally, if the aggregated output status is "ok", the input graph is considered structurally complete, and no further action is taken. In contrast, if the aggregated output

status is "error", the corrected graphaugmented with inferred links and annotated
justiﬁcationsis returned to the tutoring system. This output can be utilized in multiple downstream applications, including automatic grading of student submissions,
real-time hint generation, and step-by-step feedback visualization. By closing the loop
between visual perception and intelligent reasoning, StructRAG serves as a robust,
explainable, and scalable solution for diagram understanding in STEM-oriented AI
tutoring environments.

3 Empirical Setup
3.1 Data Collection
To evaluate the performance of our proposed StructRAG framework in real-world educational scenarios, we constructed a diverse diagram-based question dataset centered
on topological reasoning tasks in STEM education. The dataset includes annotated
diagrams across multiple structural types and academic domains.
In April 2024, we launched a campus-wide question submission campaign through
a structured questionnaire. STEM faculty and students were invited to contribute original practice or assessment questions that contained topological diagrams. To ensure
suﬃcient complexity, submissions were required to include at least one diagram image
with a minimum combined count of 8 nodes and edges. The data collection spanned
four months, during which we received 2,047 unique submissions. To ensure data quality, 12 experienced STEM educators independently reviewed the submitted questions.
The following criteria were applied to ﬁlter the dataset: (1) Removal of duplicates or
near-duplicates (e.g., questions that only diﬀered in node label formatting but were
otherwise structurally identical). (2) Elimination of trivial or invalid entries (e.g.,
text-only questions or diagrams with fewer than 8 elements).
We additionally conducted a data-separation audit to examine possible overlap
between the template library and the evaluation dataset. First, the provenance records
of the two collections were compared to conﬁrm that no evaluation question originated
from the printed materials used to construct the template library. Second, the original
images and normalized OCR text were compared to identify identical or near-duplicate
content. No identical diagram image, question text, or source document was shared
between the two collections. Third, the diagrams were compared after removing node
labels and component annotations to distinguish direct instance overlap from general
topological similarity. This audit showed that the two collections were independent
at the source, image, and question levels. Broad topology categories and structurally
similar variants were retained because StructRAG is designed to retrieve canonical
structural patterns. However, the evaluation questions were independently submitted
and were not generated from or adapted from the 375 library diagrams. Thus, the
template library functions as a collection of abstract structural priors rather than as
a repository of evaluation questions or corresponding answers.
After applying these ﬁlters, a total of 1,650 valid and structurally meaningful
questions were retained for further experimentation. These questions span various
STEM disciplines such as electrical engineering, computer science, and systems analysis, and encompass a wide range of canonical diagram types. As shown in Table 4,

our dataset encompasses a broad spectrum of structural conﬁgurations and academic
disciplines. Canonical patterns such as star and mesh topologies are prevalent in traditional domains like network design and computer architecture. In contrast, more
complex patternsincluding tree-like, hybrid, and layered diagramsreﬂect the increasing intricacy of real-world STEM problems, particularly within interdisciplinary ﬁelds
such as cyber-physical systems and IoT architectures (Shongwe, 2024). This structural diversity ensures that StructRAG is evaluated across a wide range of diﬃculty
levels, from foundational exercises to advanced reasoning tasks.

Table 4: Distribution of Diagram Templates by Topology Type and Discipline
Topology Type
Star
Ring
Chain / Bus
Bridge / Mesh
Tree (in Other)
Hybrid Graph (in Other)
Cross-Layer / Layered (in Other)
Unclassiﬁed / Irregular (in Other)
Total

Primary Discipline(s)
Network Engineering, Distributed Systems
Control Systems, Embedded Automation
Electrical Circuits, Signal Processing
Computer Architecture, Fault-Tolerant Design,
Sensor Networks
Hierarchical Systems, Power Distribution
Cyber-Physical Systems, Industrial Process
Control
Network Protocol Design, IoT Architectures
Interdisciplinary Problems, Custom Layouts

Count
1,650

3.2 Baselines, Ablations, and Implementation Details.

We compared StructRAG with three baseline methods and one ablated version of the
proposed framework. All methods were evaluated on the same 1,650 questions using
the same ground-truth graphs and evaluation metrics. Except for the direct-image
multimodal baseline, all methods received outputs derived from the same diagramto-graph conversion module. The output of each method was normalized into the
same JSON format containing a node list and an edge list before evaluation. Table 5
summarizes the inputs and components of the compared methods.
The OCR+CV Only baseline represents the visual parsing component without
structural retrieval or LLM-based reasoning. It includes all procedures described in
Section 2.1, including image normalization, OCR, contour-based component detection,
straight- and curved-line extraction, node consolidation, and edge-conﬁdence calculation. Candidate edges with conﬁdence scores of at least 0.65 are included in the ﬁnal
graph, while uncertain edges are not automatically added. This baseline excludes the
template library, structural pattern retrieval, pattern-aware prompt construction, and
LLM-guided correction. Its output is therefore the initial graph G = (V, E) produced
solely from visual evidence.
The GPT-4 Graph-Only baseline evaluates whether GPT-4 can correct an
incomplete graph without access to the structural template library. It receives the
same accepted graph G and uncertain-edge set U produced by the visual parsing module, represented in JSON format. It does not receive a retrieved template, graph edit

Table 5: Inputs and components of the compared methods.
Method

Primary Input

OCR+CV Only
GPT-4 Graph-Only
Direct-Image GPT-4o
StructRAG without LLM
StructRAG

Diagram image
G and U
Diagram image
G, U , and T ∗
G, U , T ∗ , and ∆E

Visual
Parsing
✓
✓
–
✓
✓

Retrieval

LLM

–
–
–
✓
✓

–
✓
✓
–
✓

Image
Input
✓
–
✓
–
–

diﬀerences, topology labels, or examples from the template library. The prompt states:
“Given the graph extracted from a STEM diagram, determine whether its structure is
complete. Identify any missing or incorrect connections using only the provided nodes,
edges, and uncertain-edge information. Return the corrected graph in JSON format
and brieﬂy justify each change.” This setting isolates the contribution of general LLM
reasoning from that of pattern-level retrieval.
The Direct-Image GPT-4o baseline evaluates end-to-end multimodal diagram
understanding without using the proposed visual parsing or retrieval modules. It
receives the original diagram image, resized to a maximum side length of 1,600 pixels, together with the prompt: “Inspect the STEM diagram and identify all visible
nodes or components and the connections between them. Return the resulting graph
in JSON format with separate node and edge lists. Do not add a connection unless it
is supported by the diagram.” This baseline does not receive OCR output, the initial
graph G, uncertain edges, retrieved templates, or topology labels. It therefore provides a stronger comparison with a general-purpose multimodal model that directly
processes diagram images.
The StructRAG without LLM baseline retains visual parsing and patternlevel retrieval but removes LLM-guided structural reasoning. It retrieves the most
similar template T ∗ , calculates ∆E = E(T ∗ ) − E(G), and identiﬁes the uncertainedge pairs UE . A missing connection is added only when it appears in both ∆E
and UE , indicating that it is supported by both the retrieved structural pattern and
partial visual evidence. Formally, the corrected edge set is E ′ = E(G) ∪ (∆E ∩ UE ).
This deterministic baseline examines whether template matching alone is suﬃcient or
whether LLM-based validation provides an additional beneﬁt.
The complete StructRAG method receives G, U , the retrieved template T ∗ , and
the candidate edge diﬀerences ∆E. GPT-4 then determines whether each candidate
connection is structurally plausible and returns a corrected JSON graph together with
a short justiﬁcation. Both GPT-4 Graph-Only and StructRAG use gpt-4-0613, while
the direct-image multimodal baseline uses gpt-4o-2024-05-13. All API calls were
conducted from April to July 2025, and the same model versions were used throughout
the experiments. For all LLM-based methods, the temperature is set to 0.2, top-p to
1.0, and the maximum output length to 800 tokens. Three independent completions
are generated for each question, and the ﬁnal graph is selected by majority voting. If a
response does not conform to the required JSON schema, one formatting-only retry is
performed; responses that remain invalid are counted as incorrect. No method-speciﬁc
prompt tuning is conducted for individual topology categories.

For RQ3, we further compare node-level, example-based, and pattern-level retrieval
under controlled conditions. All three strategies use the same query, the same 375template candidate library, and the same GPT-4 conﬁguration and output schema;
only the retrieval signal diﬀers. Node-level retrieval represents each graph using the
number of nodes and the frequencies of labeled nodes, unlabeled junctions, and generic
components, while ignoring all edges. Candidate similarity is calculated using cosine
similarity, and the highest-scoring template is selected. Example-based retrieval uses
the CLIP ViT-B/32 image encoder (Radford et al., 2021). Because the retrieval library
contains abstract graphs rather than original source images, each template is rendered
as a 224 × 224-pixel diagram using a ﬁxed spring layout and random seed of 42.
The query diagram and rendered templates are encoded into 512-dimensional vectors,
and the template with the highest cosine similarity is selected. The original printed
diagrams used to construct the library are not used in this baseline.
Pattern-level retrieval uses the structural features described in Section 2.2, including the number of nodes, degree distribution, number of leaf nodes, clustering
coeﬃcient, and average shortest-path length. Cosine similarity over these features is
ﬁrst used to retain the top ﬁve candidates. The ﬁnal template is then selected using
normalized graph edit distance, with unit costs for node and edge insertion or deletion and an additional penalty for operations that remove a highest-degree hub. This
two-stage procedure is applied identically to every evaluation question. By holding the
candidate library, downstream prompt, language model, and generation parameters
constant, the RQ3 comparison isolates the eﬀect of the retrieval strategy.

3.3 Evaluation Metrics

We adopt two primary metrics for quantitative evaluation. The ﬁrst is question-level
recognition accuracy (Acc), which, in our study, is deﬁned at the question level. Specifically, a diagram is considered correctly recognized only if all edges in the predicted
graph exactly match those in the ground truth. Thus, accuracy reﬂects the proportion
of fully correct diagram interpretations across the dataset. Formally, it is computed
as:

|Number of Correctly Recognized Diagrams|
(2)
|Total Number of Diagrams|
The second metric is the edge-level F1 score, denoted as F 1edge , which provides
a ﬁner-grained view by evaluating the precision and recall of edge-level predictions,
even when the overall diagram is not entirely correct. Unlike question-level accuracy,
which requires the entire predicted graph to match the ground truth, F 1edge measures
how well the predicted edge set recovers the ground-truth edge set. It is deﬁned as:

Acc =

Precision · Recall
Precision + Recall
with precision and recall computed as:

(3)

|True Positive Edges|
|Predicted Edges|

(4)

F 1edge = 2 ·

Precision =

Recall =

|True Positive Edges|
|Ground Truth Edges|

(5)

In particular, the model faces greater challenges in achieving high Acc than high
F 1edge , since Acc requires a complete match between the predicted and ground-truth
graphs, whereas F 1edge captures partial correctness by evaluating edge-level precision and recall. For example, consider a case where the reference diagram contains 5
edges, and the model correctly identiﬁes 4 of them but misses 1. In this scenario, the
prediction would be marked incorrect under the Acc metric:
Acc = 0
(6)
However, F 1edge would still reﬂect substantial edge-level recovery, computed as:
Precision · Recall
Precision + Recall
4 4
·
= 2 · 44 54
4 + 5
1.0 · 0.8
=2·
1.0 + 0.8
= 0.89

F 1edge = 2 ·

(7)
(8)
(9)
(10)

This example illustrates how even minor omissions in diagram recognition can
severely penalize the Acc score, while F 1edge provides a more nuanced evaluation
of edge-level structural recovery. By combining both metrics, we achieve a balanced
view of system performance, capturing both full-pattern ﬁdelity and incremental
improvements in edge-level reasoning. For RQ1, we primarily evaluate the full-graph
recognition performance of StructRAG using Acc, which reﬂects whether all predicted
nodes and edges precisely match the ground-truth structure. For RQ2, we focus on
the system’s ability to detect and recover missing connections, measured using F 1edge
computed over individual edges.
A total of 12 experienced STEM educators were recruited to manually assess the
two evaluation metrics: Acc and F 1edge . Before annotation, all evaluators received the
same rubric, including examples of fully correct graphs, missing-edge errors, extraedge errors, and ambiguous junction cases. A prediction was marked as correct for
Acc only when the predicted graph contained exactly the same nodes and edges as the
ground-truth topology. For F 1edge , evaluators assessed each predicted edge against the
ground-truth graph and recorded true positives, false positives, and false negatives.
These edge-level decisions were then used to compute precision, recall, and F 1edge .
To avoid the ambiguity caused by a fully disjoint review process, we used a partially
overlapping two-stage annotation protocol. The 12 educators were divided into two
panels of six. Most samples were assigned to one panel for primary review, while a
stratiﬁed subset covering all topology categories was independently reviewed by both
panels. Within each panel, every assigned sample was ﬁrst checked independently by
two educators. A case was ﬂagged as inconsistent if the two educators disagreed on

whether the whole graph was correct, or if they assigned diﬀerent edge-level labels to
any connection. The overlapping subset was used to measure whether the two panels
applied the rubric consistently. Before consensus adjudication, inter-rater reliability
was assessed using Fleiss’ κ, which reached 0.82, indicating substantial agreement
among the educators.
All ﬂagged cases were then resolved through a consensus review. The educators
jointly re-examined the original diagram, the ground-truth graph, and the predicted
graph, and the ﬁnal label was recorded only after agreement was reached. The ﬁnal
reported Acc and F 1edge were computed from these adjudicated labels. To quantify
statistical uncertainty, we estimated 95% conﬁdence intervals using 10,000 bootstrap
resamples at the question level. For Acc, each bootstrap sample recomputed the
proportion of fully correct predictions. For F 1edge , each bootstrap sample recomputed edge-level precision, recall, and F 1edge from the resampled questions. We also
tested the diﬀerence between StructRAG and each baseline using paired comparisons on the same questions: McNemar’s test for Acc and paired bootstrap tests for
F 1edge . The resulting p-values were corrected using the Holm–Bonferroni procedure,
and the improvements of StructRAG remained statistically signiﬁcant after correction
(p < 0.01).

4 Results and Analysis
4.1 Diagram Interpretation Accuracy with StructRAG (RQ1)

We evaluated the overall diagram interpretation accuracy of StructRAG across our
full dataset of 1,650 STEM diagram-based questions. Each question was processed
through the complete StructRAG pipeline, and its predicted graph was compared
with the annota
