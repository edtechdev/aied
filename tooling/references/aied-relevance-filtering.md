# Two-Stage AIED Relevance Filtering

A proven pattern for filtering large arXiv listing dumps (100-150 papers) down to genuinely AIED-relevant papers:

## Stage 1: Title Keyword Scan (fast, coarse)

Scan all paper titles for AIED-relevant keywords. Use inclusive + exclusive keyword lists:

```python
AIED_TITLE_KW = [
    "education", "learning", "student", "teacher", "classroom", "tutor", "tutoring",
    "school", "curriculum", "pedagog", "pedagogy", "grading", "feedback",
    "literacy", "assessment", "metacognit", "knowledge tracing",
    "synthesis writing", "programming", "instructional", "scaffolding",
    "learn", "teach", "course", "training", "academia", "academic",
    "learner", "cognitive offloading", "science museum",
    "collaborative learning", "writing", "math", "stem",
]

EXCLUDE_ON_TITLE = [
    "political", "election", "news", "journalism", "disinformation",
    "biosecurity", "ghg", "carbon", "climate", "graphics cards",
    "ad delivery", "advertising", "brand recommendation",
    "mining safety", "athletic performance", "food science",
    "privacy leakage", "latency", "network", "internet quality",
    "cryptocurrency", "blockchain", "protein", "drug",
    "biomedical", "radiology", "hospital", "patient",
    "autonomous vehicle", "sticker economics", "naming policies",
    "motion tracking", "genomics", "facerec",
]
```

Rule: paper must have ≥1 inclusive keyword AND the inclusive count must exceed any exclusive count. This reduces ~120 candidates to ~30-40.

## Stage 2: Abstract Verification (targeted, fine)

For each Stage-1 candidate, fetch the full abstract from `arxiv.org/abs/ID` (via `web_extract` or curl). Apply a semantic filter:

**INGEST if abstract mentions any of:**
- AI/LLM/GenAI applied to education, learning, or teaching
- Intelligent tutoring systems, AI feedback, automated grading
- AI literacy, AI in classrooms, student-AI interaction
- Learning analytics with AI, knowledge tracing, student modeling
- AI-generated educational content or assessment
- AI safety/harms in educational contexts
- Training programs, professional education, or skill development using AI

**SKIP if abstract is about:**
- Pure CS/ML (LoRA, RL theory, federated learning without education)
- General AI fairness without education context
- Non-AI education research
- Domain-specific AI applications without learning context (e.g., UX feedback classification, academic search without learning angle)

**When in doubt: INGEST.** The user prefers broad interpretation.

## Typical yield

| Stage | Candidates | Reduction |
|-------|-----------|-----------|
| Raw listing (2 cats, 3 pages each) | ~120 | — |
| After title scan | ~30-40 | ~75% removed |
| After abstract verification | ~10-15 | ~60% of title-scan passes |
| After dedup with existing wiki | ~10-15 | Usually none if date window is narrow |

## Pitfalls

- **False positive: "teacher" in ML fine-tuning** — "teacher" in titles about "Pareto-Guided Teacher Alignment" or "teacher-forcing" is about model training, not education. The exclusion list catches some but not all; abstract verification is the safety net.
- **False negative: short cryptic titles** — Some AIED papers have titles that don't contain obvious education keywords (e.g., "AVP: A New Approach"). The title scan misses these. If the listing page shows cross-listings to cs.CY, treat the category as a signal and include even without keyword matches.
- **Cross-listed papers** — Papers in cs.CL or cs.AI that are cross-listed to cs.CY won't appear in the cs.CY listing if you're filtering by primary listing only. Always check both the primary AND cross-listed categories in the listing page.