/**
 * podcast.ts - where the episode audio lives, and the small formatting helpers
 * every audio surface shares.
 *
 * The mp3s are release assets, not repository files. A 20-minute episode is about
 * 15 MB, so committing them would put hundreds of megabytes in a clone that only
 * ever renders links to them. They are uploaded to one long-lived release
 * (`audio-latest`) that is replaced in place, which keeps the URL of an episode
 * stable forever: the feed, the concept pages and the newsletter issues all point
 * at the same address.
 *
 * `audio_file` in an episode's frontmatter is the asset name inside that release.
 */
export const AUDIO_RELEASE_TAG = 'audio-latest';
export const AUDIO_RELEASE_URL = `https://github.com/edtechdev/aied/releases/tag/${AUDIO_RELEASE_TAG}`;
export const AUDIO_ASSET_BASE = `https://github.com/edtechdev/aied/releases/download/${AUDIO_RELEASE_TAG}`;

/** Public URL of one asset in the audio release. */
export function audioAssetUrl(file: string): string {
  return `${AUDIO_ASSET_BASE}/${encodeURIComponent(file)}`;
}

/** Cover art, served from public/ (i.e. /aied/audio/cover.jpg). */
export const PODCAST_COVER_PATH = '/aied/audio/cover.jpg';
export const PODCAST_COVER_URL = 'https://edtechdev.github.io/aied/audio/cover.jpg';

/** "18 min" / "1 hr 4 min" — the length a card or a player label prints. */
export function formatRuntime(seconds: number): string {
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins} min`;
  const hours = Math.floor(mins / 60);
  const rest = mins % 60;
  return rest ? `${hours} hr ${rest} min` : `${hours} hr`;
}

/** "18:32" — the form a feed's <itunes:duration> expects. */
export function clockDuration(seconds: number): string {
  const total = Math.max(0, Math.round(seconds));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(h ? 2 : 1, '0');
  return h ? `${h}:${mm}:${String(s).padStart(2, '0')}` : `${mm}:${String(s).padStart(2, '0')}`;
}

/** The show describes itself the same way everywhere it is offered. */
export const PODCAST_TITLE = 'AIEd Audio';
export const PODCAST_SUBTITLE = 'Conversations on AI in education, drawn from the knowledge base';
export const PODCAST_DESCRIPTION =
  'Discussions of one idea in AI and education, grounded in the research summarized in the AI in Education Knowledge Base. Each episode is attached to the concept page it grew out of, with a full transcript.';

/** Newsletter readings are a separate track: no transcript, no show notes. */
export const NEWSLETTER_AUDIO_BASE = AUDIO_ASSET_BASE;

export interface NewsletterAudio {
  /** Release asset name inside the audio release. */
  file: string;
  duration: number;
  bytes: number;
  /** The spoken text is the issue itself, minus its navigation. */
  kind: 'reading';
}

/**
 * One entry per published issue, keyed by the issue slug (its date). A missing
 * entry simply means that issue has no reading yet, so the page prints no player.
 * `bytes` is what the feed's <enclosure length> needs: podcast apps use it to show
 * the download size, and a wrong value can make a player refuse the file.
 */
export const NEWSLETTER_AUDIO: Record<string, NewsletterAudio> = {
  '2026-10-23': { file: 'aied-weekly-2026-10-23.mp3', duration: 590, bytes: 7075361, kind: 'reading' },
  '2026-10-24': { file: 'aied-weekly-2026-10-24.mp3', duration: 1129, bytes: 13545996, kind: 'reading' },
  '2026-10-31': { file: 'aied-weekly-2026-10-31.mp3', duration: 1680, bytes: 20164275, kind: 'reading' },
  '2026-11-07': { file: 'aied-weekly-2026-11-07.mp3', duration: 1532, bytes: 18386904, kind: 'reading' },
  '2026-11-14': { file: 'aied-weekly-2026-11-14.mp3', duration: 1465, bytes: 17575645, kind: 'reading' },
};

export function newsletterAudioUrl(file: string): string {
  return `${NEWSLETTER_AUDIO_BASE}/${encodeURIComponent(file)}`;
}
