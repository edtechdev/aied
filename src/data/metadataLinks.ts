// Field values that have a concept page, for the page metadata table.
// A phrase like 'cs education' or 'systematic review' links to its concept page;
// generated so a renamed concept cannot leave a stale link behind.
// FIELD_UMBRELLAS maps a metadata field to the concept page that reads as the
// umbrella for that whole field - the table links the field label there.
// GENERATED FILE - do not edit by hand.
// Source: tooling/scripts/gen-concept-artifacts.py + src/content.config.ts
//         (vocabularies) + concepts.registry.yaml (aliases)

export const FIELD_UMBRELLAS: Record<string, string> = {
  'research_method': 'research-methods-aied',
  'methods': 'research-methods-aied',
  'discipline': 'discipline-specific-aied',
  'level': 'education-levels',
  'audience': 'stakeholders',
  'stakeholders': 'stakeholders',
  'pedagogy': 'pedagogy',
  'technology': 'ai-technologies',
  'assessment': 'assessment',
  'institutions': 'educational-policy-ai',
  'ethics': 'ethics',
};

export const METADATA_LINKS: Record<string, Record<string, string>> = {
  research_method: {
    'latent profile analysis': 'latent-profile-analysis',
    'network analysis': 'network-analysis',
  },
  discipline: {
    'arts education': 'arts-design-and-media-education',
    'biology education': 'biology-education',
    'business education': 'business-education',
    'chemistry education': 'chemistry-education',
    'cs education': 'cs-education',
    'design education': 'design-education',
    'engineering education': 'engineering-education',
    'english education': 'english-education',
    'environmental education': 'environmental-education',
    'humanities education': 'humanities-education',
    'information technology': 'information-technology',
    'language learning': 'language-learning',
    'legal education': 'legal-education',
    'learning sciences': 'learning-sciences',
    'math education': 'math-education',
    'medical education': 'medical-education',
    'music education': 'arts-design-and-media-education',
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
    'learners': 'learners',
    'librarians': 'librarians',
  },
  level: {
    'adult learning': 'adult-learning',
    'higher ed': 'higher-ed',
    'k 12': 'k-12',
    'special education': 'special-education',
    'teacher education': 'teacher-education',
  },
};