// Field values that have a concept page, for the page metadata table.
// A phrase like 'cs education' or 'systematic review' links to its concept page;
// generated so a renamed concept cannot leave a stale link behind.
// GENERATED FILE - do not edit by hand.
// Source: src/content.config.ts (vocabularies) + concepts.registry.yaml (aliases)

export const METADATA_LINKS: Record<string, Record<string, string>> = {
  research_method: {
    'benchmark': 'benchmark',
    'design-based research': 'design-based-research',
    'educational measurement': 'educational-measurement',
    'learning analytics': 'learning-analytics',
    'literature review': 'meta-analysis-systematic-review',
    'meta-analysis': 'meta-analysis-systematic-review',
    'mixed methods': 'mixed-methods-research',
    'qualitative': 'qualitative-research',
    'quantitative': 'quantitative-research',
    'randomized controlled trial': 'rct',
    'research methods': 'research-methods-aied',
    'systematic review': 'meta-analysis-systematic-review',
  },
  discipline: {
    'biology education': 'biology-education',
    'business education': 'business-education',
    'chemistry education': 'chemistry-education',
    'cs education': 'cs-education',
    'design education': 'design-education',
    'engineering education': 'engineering-education',
    'english education': 'english-education',
    'humanities education': 'humanities-education',
    'information technology': 'information-technology',
    'language learning': 'language-learning',
    'legal education': 'legal-education',
    'learning sciences': 'learning-sciences',
    'math education': 'math-education',
    'medical education': 'medical-education',
    'nursing education': 'nursing-education',
    'physics education': 'physics-education',
    'science education': 'science-education',
    'stem education': 'stem-education',
    'vocational education': 'vocational-education',
    'writing education': 'writing-education',
  },
  audience: {
    'administrators': 'administrator',
    'edtech designers': 'educational-technology-developers',
    'educators': 'teacher-role',
    'faculty development': 'educational-development',
    'instructors': 'teacher-role',
    'learners': 'learners',
    'teachers': 'teacher-role',
  },
  level: {
    'adult learning': 'adult-learning',
    'early childhood': 'early-childhood-elementary-ai-education',
    'elementary': 'k-12',
    'higher ed': 'higher-ed',
    'k 12': 'k-12',
    'secondary': 'k-12',
    'special education': 'special-education',
    'teacher training': 'teacher-education',
  },
};
