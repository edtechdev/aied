# Tag Consolidation — Session 2026-08-01

Full merge map applied to the AI Ed Wiki, reducing 200 → 151 unique tags through 67 replacements across 619 concept pages.

## Merge Map

| Old Tag | → Canonical Tag | Reason |
|---------|----------------|--------|
| `higher-education` | `higher-ed` | Plain duplicate (216 articles vs 1) |
| `teacher-ai-competency` | `teacher-professional-development` | 4 fragmented teacher tags |
| `teacher-competency` | `teacher-professional-development` | Merged |
| `teacher-development` | `teacher-professional-development` | Merged |
| `automated-essay-scoring` | `automated-grading` | All grading subtypes |
| `automated-assessment` | `automated-grading` | Merged |
| `automated-question-generation` | `automated-grading` | Merged |
| `automatic-short-answer-grading` | `automated-grading` | Merged |
| `short-answer-grading` | `automated-grading` | Merged |
| `question-generation` | `automated-grading` | Merged |
| `stem` | `stem-education` | Plain duplicate |
| `ai-classroom` | `ai-education` | AI-edu fragmentation |
| `ai-era` | `ai-education` | Merged |
| `ai-in-education` | `ai-education` | Merged |
| `ai-assessment` | `ai-ed-evaluation` | AI-edu fragmentation |
| `ai-safety` | `pedagogical-safety` | Safety consolidation |
| `ai-feedback-quality` | `feedback-loop` | Feedback consolidation |
| `cognitive-load-theory` | `cognitive-offloading` | Related concept |
| `reinforcement-learning-education` | `reinforcement-learning` | Subset |
| `socratic-ai-dialogue` | `socratic-method` | Same concept |
| `human-in-the-loop-ai` | `human-in-the-loop` | Duplicate |
| `human-oversight` | `human-in-the-loop` | Merged |
| `equity-in-ai-education` | `equity` | Subset |
| `multi-agent-instructional-design` | `multi-agent` | Page slug as tag |
| `educational-measurement` | `educational-theory` | Too narrow |
| `educational-nlp` | `educational-theory` | Too narrow |
| `critical-pedagogy` | `critical-thinking` | Related |
| `collaboration` | `human-ai-collaboration` | Too generic |
| `learning-theory` | `educational-theory` | Merged |
| `validity` | `assessment-validity` | Merged |
| `xai-education-framework` | `ai-education` | Too narrow |
| `student-motivation` | `student-experience` | Subset |
| `instructional-video` | `instructional-design` | Merged |
| `multimodal-learning` | `multimodal` | Duplicate |
| `institutional-barriers` | `institutional-change` | Related |
| `engagement-assessment` | `engagement-metrics` | Subset |
| `dialogue` | `socratic-method` | Merged |
| `prompt-based-programming-lesson` | `prompt-engineering` | Too narrow |
| `academic-writing` | `writing-education` | Merged |
| `affective-tutoring` | `affective-computing` | Subset |
| `adaptive-learning-systems` | `adaptive-learning` | Duplicate |
| `knowledge-graph` | `knowledge-tracing` | Related |
| `pedagogical-ai` | `pedagogical-safety` | Merged |
| `self-reported-vs-performance` | `self-regulated-learning` | Too narrow |
| `systematic-review` | `scoping-review` | Merged |
| `open-systems` | `open-source` | Merged |
| `evaluation` | `ai-ed-evaluation` | Merged |
| `framework` | `instructional-design` | Too generic |
| `accessibility` | `accessible-learning` | Merged |
| `access` | `accessible-learning` | Merged |

## Page-Slug-as-Tag Fixes

These concept page slugs were being used as tag values on other pages, causing tag/article page path collisions:

| Slug used as tag | Fixed to |
|-----------------|----------|
| `agentic-workflows-education` | `agentic-ai` |
| `agentic-workflows` | `agentic-ai` + kept `agentic-workflows` where appropriate |
| `multi-agent-instructional-design` | `multi-agent` |

## Concept Stubs Created

For tags with ≥5 articles but no matching concept page (needed for tag page summaries):

| Concept Stub | Tag | Articles |
|-------------|-----|----------|
| `concepts/agentic-ai.md` | `agentic-ai` | 15 |
| `concepts/ai-tutoring.md` | `ai-tutoring` | 5 |

## Detection Script

```python
# Find tags with shared prefixes and low usage
from collections import defaultdict
prefix_groups = defaultdict(list)
for tag in all_tags:
    parts = tag.split('-')
    for i in range(1, len(parts)+1):
        prefix = '-'.join(parts[:i])
        prefix_groups[prefix].append(tag)

# Merge candidates: tags sharing a prefix with 2+ children, each with <5 articles
for prefix, members in prefix_groups.items():
    children = [m for m in members if m != prefix]
    if len(children) >= 2:
        for child in children:
            if len(all_tags[child]) < 5:
                print(f"  {child} → {prefix}")
```