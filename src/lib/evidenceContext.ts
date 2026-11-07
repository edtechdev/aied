/**
 * Reader-facing context for articles whose evidence was not collected in an
 * educational setting. The value is a controlled frontmatter field on article
 * pages only; legacy pages may omit it, which means "not yet classified" rather
 * than "educational".
 */
export const EVIDENCE_CONTEXTS = ['educational', 'non_educational', 'mixed'] as const;

export type EvidenceContext = (typeof EVIDENCE_CONTEXTS)[number];

export type EvidenceContextNote = {
  title: string;
  body: string;
};

export function evidenceContextNote(value?: string | null): EvidenceContextNote | null {
  if (value === 'non_educational') {
    return {
      title: 'Research conducted outside educational settings',
      body:
        'The findings below describe the original study. Educational implications are research-informed applications, not directly measured classroom outcomes unless otherwise stated.',
    };
  }
  if (value === 'mixed') {
    return {
      title: 'Research conducted in educational and non-educational settings',
      body:
        'The findings below describe the settings the original study actually examined. Treat claims about other educational settings as research-informed applications unless the page states that they were measured.',
    };
  }
  return null;
}
