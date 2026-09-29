// Locale-aware links to the offline artifacts (EPUB, PDF, llms files).
//
// The copy modules are written once, in the default locale's terms, and every
// translation inherits those URLs. Rather than editing eleven copy files, this
// rewrites each default-locale artifact URL to the locale's own file WHEN THAT FILE
// EXISTS, and leaves it alone otherwise. So:
//
//   * a locale with its own artifacts links its own files;
//   * a locale without them keeps linking the default-locale file rather than 404ing;
//   * adding a language needs no copy edit and no code change - build its artifacts
//     and re-run the manifest generator.
import { offlineArtifacts, defaultLocale } from '../data/offlineArtifacts';

export type ArtifactKind = 'epub' | 'pdf' | 'llms' | 'llmsConcepts' | 'llmsFull';

// The default-locale filenames, as they appear in the copy modules.
const DEFAULT_FILENAMES: Record<ArtifactKind, string> = {
  epub: 'aied.epub',
  pdf: 'aied.pdf',
  llms: 'llms.txt',
  llmsConcepts: 'llms-concepts.txt',
  llmsFull: 'llms-full.txt',
};

/** The URL for one artifact in one locale, or undefined when neither locale has it. */
export function artifactUrl(locale: string, kind: ArtifactKind): string | undefined {
  return (
    offlineArtifacts[locale]?.[kind]?.url ?? offlineArtifacts[defaultLocale]?.[kind]?.url
  );
}

/** True when this locale has its OWN build of an artifact, not the fallback. */
export function hasOwnArtifact(locale: string, kind: ArtifactKind): boolean {
  return Boolean(offlineArtifacts[locale]?.[kind]);
}

/** A human size like "4.1 MB", for the copy's size claims. */
export function artifactSize(locale: string, kind: ArtifactKind): string | undefined {
  const bytes = offlineArtifacts[locale]?.[kind]?.bytes ?? offlineArtifacts[defaultLocale]?.[kind]?.bytes;
  if (!bytes) return undefined;
  // Below a megabyte, say KB: a 57 KB file rendered as "0.1 MB" reads as an error.
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

/**
 * Point a locale's copy at its own artifacts.
 *
 * Also substitutes {epubSize} / {pdfSize} / {llmsSize} / {llmsConceptsSize} /
 * {llmsFullSize} when a copy module uses them, so a translation states the real size
 * of the file it is offering instead of the size of the English one.
 */
export function localizeArtifactLinks(html: string, locale: string): string {
  if (!html) return html;
  let out = html;

  for (const kind of Object.keys(DEFAULT_FILENAMES) as ArtifactKind[]) {
    const own = offlineArtifacts[locale]?.[kind]?.url;
    const fallback = offlineArtifacts[defaultLocale]?.[kind]?.url;
    if (own && fallback && own !== fallback) {
      out = out.split(fallback).join(own);
    }
    const size = artifactSize(locale, kind);
    if (size) {
      out = out.split(`{${kind}Size}`).join(size);
    }
  }

  // A locale whose artifact is absent keeps the default URL, which is written in the
  // copy modules as a bare filename; leave it, and leave any unconsumed token alone
  // rather than printing a placeholder to a reader.
  return out;
}