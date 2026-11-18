import { getCollection } from 'astro:content';
import {
  PODCAST_OWNER_EMAIL,
  PODCAST_COVER_URL,
  PODCAST_DESCRIPTION,
  PODCAST_SUBTITLE,
  PODCAST_TITLE,
  NEWSLETTER_AUDIO,
  audioAssetUrl,
  clockDuration,
  transcriptAssetUrl,
  newsletterAudioUrl,
} from '../../data/podcast';
import { toRfc822Local, xmlEscape } from '../../lib/feedDates';
import siteConfig from '../../config/siteConfig';

// The podcast feed: /aied/audio/rss.xml.
//
// Written by hand rather than through @astrojs/rss because the iTunes namespace is
// where a podcast lives or dies: `<enclosure>`, `<itunes:duration>` and
// `<itunes:image>` are not expressible as plain RSS items, and the channel needs
// `<itunes:explicit>`, `<itunes:category>` and `<itunes:type>`. Hand-writing keeps
// those in view instead of hidden behind a `customData` string.
//
// Two kinds of item share the feed: the long-form episodes (each attached to a
// concept page, with a transcript) and the audio readings of the weekly update
// (the issue itself, minus its table of contents). Both are spoken audio from the
// same show, so one subscription covers both, and the titles say which is which.
type Item = {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  description: string;
  enclosure: string;
  bytes: number;
  duration: number;
  episode?: number;
  /** Standalone .txt transcript; the Podcasting 2.0 tag points a host at it. */
  transcript?: string;
  kind: 'episode' | 'reading';
};

export async function GET() {
  const base = siteConfig.basePath;
  const site = 'https://edtechdev.github.io';

  const episodes = (await getCollection('audio')).filter(e => e.data.status !== 'draft');
  const issues = (await getCollection('newsletters')).filter(n => n.data.status !== 'draft');
  // An episode is dated by the pages it is attached to, not by the day the mp3 was
  // cut: the concept page it discusses is revised as new research lands, and an
  // episode whose page has just changed is the one worth surfacing. Falling back to
  // the episode's own `updated`/`created` keeps an episode with no linked page in
  // the feed at the right place.
  const concepts = await getCollection('concepts');
  const conceptStamp = new Map(
    concepts.map(c => [c.id.replace('.md', ''), c.data.updated || c.data.created]),
  );
  const episodeDate = (e: (typeof episodes)[number]) => {
    const stamps = e.data.concepts.map(c => conceptStamp.get(c)).filter((d): d is string => Boolean(d));
    return stamps.length ? stamps.sort().at(-1)! : e.data.updated || e.data.created;
  };

  const items: Item[] = [
    ...episodes.map(e => {
      const slug = e.id.replace('.md', '');
      return {
        title: e.data.title,
        link: `${site}${base}/audio/${slug}/`,
        guid: `aied-episode-${slug}`,
        pubDate: episodeDate(e),
        description: `${e.data.summary} Transcript and the concept pages this episode discusses: ${site}${base}/audio/${slug}/`,
        enclosure: audioAssetUrl(e.data.audio_file),
        bytes: e.data.audio_bytes,
        duration: e.data.duration,
        episode: e.data.episode,
        transcript: transcriptAssetUrl(e.data.transcript_file),
        kind: 'episode' as const,
      };
    }),
    ...issues.flatMap(n => {
      const slug = n.id.replace('.md', '');
      const audio = NEWSLETTER_AUDIO[slug];
      if (!audio) return [];
      return [
        {
          title: `${n.data.title} (audio reading)`,
          link: `${site}${base}/news/${slug}/`,
          guid: `aied-reading-${slug}`,
          pubDate: n.data.created,
          description: `A reading of ${n.data.title}, ${n.data.summary}`,
          enclosure: newsletterAudioUrl(audio.file),
          bytes: audio.bytes,
          duration: audio.duration,
          kind: 'reading' as const,
        },
      ];
    }),
  ].sort((a, b) => (Date.parse(b.pubDate) || 0) - (Date.parse(a.pubDate) || 0));

  const itemXml = items
    .map(
      item => `    <item>
      <title>${xmlEscape(item.title)}</title>
      <link>${xmlEscape(item.link)}</link>
      <guid isPermaLink="false">${xmlEscape(item.guid)}</guid>
      <pubDate>${toRfc822Local(item.pubDate)}</pubDate>
      <description>${xmlEscape(item.description)}</description>
      <enclosure url="${xmlEscape(item.enclosure)}" length="${item.bytes}" type="audio/mpeg"/>
      <itunes:duration>${clockDuration(item.duration)}</itunes:duration>
      <itunes:explicit>false</itunes:explicit>
      ${item.transcript ? `<podcast:transcript url="${xmlEscape(item.transcript)}" type="text/plain" />` : ''}
      ${item.kind === 'episode' ? `<itunes:episode>${item.episode}</itunes:episode><itunes:episodeType>full</itunes:episodeType>` : '<itunes:episodeType>bonus</itunes:episodeType>'}
    </item>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:podcast="https://podcastindex.org/namespace/1.0">
  <channel>
    <title>${xmlEscape(PODCAST_TITLE)}</title>
    <link>${site}${base}/audio/</link>
    <atom:link href="${site}${base}/audio/rss.xml" rel="self" type="application/rss+xml"/>
    <description>${xmlEscape(PODCAST_DESCRIPTION)}</description>
    <language>en-us</language>
    <copyright>CC0 1.0 Universal (public domain)</copyright>
    <lastBuildDate>${toRfc822Local(items[0]?.pubDate ?? new Date().toISOString())}</lastBuildDate>
    <itunes:title>${xmlEscape(PODCAST_TITLE)}</itunes:title>
    <itunes:subtitle>${xmlEscape(PODCAST_SUBTITLE)}</itunes:subtitle>
    <itunes:summary>${xmlEscape(PODCAST_DESCRIPTION)}</itunes:summary>
    <itunes:author>${xmlEscape(siteConfig.editor.name)}</itunes:author>
    <itunes:type>episodic</itunes:type>
    <itunes:explicit>false</itunes:explicit>
    <itunes:owner>
      <itunes:name>${xmlEscape(siteConfig.editor.name)}</itunes:name>
      <itunes:email>${xmlEscape(PODCAST_OWNER_EMAIL)}</itunes:email>
    </itunes:owner>
    <itunes:image href="${xmlEscape(PODCAST_COVER_URL)}"/>
    <itunes:category text="Education">
      <itunes:category text="Technology"/>
    </itunes:category>
    <image>
      <url>${xmlEscape(PODCAST_COVER_URL)}</url>
      <title>${xmlEscape(PODCAST_TITLE)}</title>
      <link>${site}${base}/audio/</link>
    </image>
${itemXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
