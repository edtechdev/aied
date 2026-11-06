// Reviewed search aliases for FAQ pages.
//
// FAQs are drafted from the questions readers actually ask, but the page title
// is a formal restatement. These aliases keep the reader's wording searchable
// without changing the visible title. Keep the list short and reviewed; do not
// generate variants or add every paraphrase of a question.
//
// Concept aliases come from concepts.registry.yaml (generated into
// conceptAliases.ts), not from this file.

export const FAQ_SEARCH_ALIASES: Record<string, string[]> = {
  'ai-grading-fairness-reliability': [
    'AI grading',
    'automated grading fairness',
    'grade student writing with AI',
    'grading student writing',
  ],
  'developing-ai-tutor': [
    'build an AI tutor',
    'create an AI tutor',
    'AI tutor design',
  ],
};
