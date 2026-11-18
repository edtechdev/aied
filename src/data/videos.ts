/**
 * Explainer videos, hosted on YouTube and embedded on the pages they explain.
 *
 * These are a different medium from the episodes: one narrator, no dialogue, the
 * same research written as a script. They live here as data rather than as a
 * collection because a video has no page of its own -- it is a thing a page shows,
 * not a destination -- and because the metadata has to be pinned: the title, the
 * runtime and the id are read from YouTube by hand and checked at build time, so a
 * video that gets renamed or removed upstream shows up as a broken build rather than
 * as a hole in a page.
 *
 * Each entry names the pages it belongs to, and each of those pages names the video
 * back in `connected_videos`. The build fails if only one side says so.
 */

export interface Video {
  /** Stable id used in frontmatter and in Connected Videos anchors. */
  slug: string;
  /** The YouTube id; the embed URL is built from it. */
  youtubeId: string;
  title: string;
  /** One sentence, shown under the title in the Connected Videos list. */
  summary: string;
  seconds: number;
  concepts: string[];
  faqs: string[];
}

export const VIDEOS: Video[] = [
  {
    slug: 'rethinking-ai-in-education',
    youtubeId: 'BcrzLIAyEIY',
    title: 'Rethinking AI in Education',
    summary:
      'Why the question is not whether students use AI but whether the use leaves them able to do the work without it.',
    seconds: 528,
    concepts: ['framing-ai-use-for-students'],
    faqs: [],
  },
  {
    slug: 'rethinking-academic-integrity',
    youtubeId: '16rc2Y9h0GM',
    title: 'Rethinking Academic Integrity',
    summary:
      'Detection, proctoring and false positives among students writing in a second language, and what a defensible integrity policy looks like instead.',
    seconds: 422,
    concepts: ['academic-integrity'],
    faqs: [],
  },
  {
    slug: 'ai-myths-in-education',
    youtubeId: 'rrLTrG0Z5Kk',
    title: 'AI Myths in Education',
    summary:
      'The beliefs that survive contact with the evidence: that AI makes students smarter, that it democratizes learning, that detectors work.',
    seconds: 589,
    concepts: ['misconceptions'],
    faqs: ['addressing-common-misconceptions-ai-education'],
  },
  {
    slug: 'cognitive-offloading-vs-surrender',
    youtubeId: 'k2V5gaQ3jLc',
    title: 'Cognitive Offloading vs Cognitive Surrender',
    summary:
      'Where handing a task to a tool stops being a trade-off and starts being an abdication, and what that distinction asks of an assignment.',
    seconds: 382,
    concepts: ['cognitive-offloading', 'cognitive-surrender'],
    faqs: [],
  },
  {
    slug: 'ai-as-pedagogical-partner',
    youtubeId: 'XRZ-vINuSMg',
    title: 'AI as Pedagogical Partner',
    summary:
      'Agents that plan, simulate and interrupt: what changes when the system acts over time rather than answering once.',
    seconds: 531,
    concepts: ['agentic-ai'],
    faqs: [],
  },
  {
    slug: 'a-new-ai-literacy',
    youtubeId: 'Vn_4vBLp-4s',
    title: 'A New AI Literacy',
    summary:
      'Why prompt skill is the least interesting part of AI literacy, and evaluative judgment the most.',
    seconds: 516,
    concepts: ['ai-literacy'],
    faqs: [],
  },
  {
    slug: 'redefining-educator-roles',
    youtubeId: 'KbZch_iR_Go',
    title: 'Redefining Educator Roles',
    summary:
      'What a teacher is for once the explanation, the practice set and the feedback can all be generated.',
    seconds: 526,
    concepts: ['teacher-role'],
    faqs: [],
  },
];

export const VIDEO_BY_SLUG = new Map(VIDEOS.map(v => [v.slug, v]));

/** Slugs only, for the frontmatter validator in content.config.ts. */
export const VIDEO_SLUGS = new Set(VIDEOS.map(v => v.slug));

export function youtubeWatchUrl(video: Video): string {
  return `https://www.youtube.com/watch?v=${video.youtubeId}`;
}

/**
 * hq720 is the 1280x720 still, so the poster is sharp on a retina screen. It is not
 * guaranteed by YouTube, but it exists for all seven videos here; hqdefault (480x360,
 * letterboxed) is the fallback if a future upload lacks it.
 */
export function youtubeThumbnailUrl(video: Video): string {
  return `https://i.ytimg.com/vi/${video.youtubeId}/hq720.jpg`;
}

/**
 * The build-time half of the relation: a page must name every video that names it,
 * and may not name a video that does not name it back. Called from the concept and
 * FAQ pages, which have the page's own frontmatter in hand.
 */
export function checkVideoPairing(pageSlug: string, folder: 'concepts' | 'faqs', named: string[]): void {
  for (const slug of named) {
    const video = VIDEO_BY_SLUG.get(slug);
    if (!video) continue;
    const side = folder === 'concepts' ? video.concepts : video.faqs;
    if (!side.includes(pageSlug)) {
      throw new Error(
        `connected_videos on ${folder}/${pageSlug}.md names "${slug}", but that video lists [${side.join(', ')}]`,
      );
    }
  }
  for (const video of VIDEOS) {
    const side = folder === 'concepts' ? video.concepts : video.faqs;
    if (side.includes(pageSlug) && !named.includes(video.slug)) {
      throw new Error(
        `video "${video.slug}" names ${folder}/${pageSlug}, but that page does not name it in connected_videos`,
      );
    }
  }
}
