import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// The @astrojs/rss library always reformats a passed `pubDate` to UTC/GMT
// (it calls `.toUTCString()`), which shifts an Eastern-evening timestamp to
// the NEXT calendar day. We instead inject the `<pubDate>` via per-item
// `customData`, preserving the local Eastern offset (-04:00 EDT / -05:00 EST).
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function toRfc822Local(iso: string): string {
  // e.g. 2026-08-16T20:02:54-04:00  ->  "Sun, 16 Aug 2026 20:02:54 -0400"
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}:?\d{2}|Z)?/.exec(iso);
  if (!m) return iso;
  const [, y, mo, d, hh, mi, ss, offset] = m;
  // RFC-822 timezone designator: keep the offset as-is, just drop the colon
  // (-04:00 -> -0400). Do NOT recompute to minutes.
  const tz = !offset || offset === 'Z' ? 'GMT' : offset.replace(':', '');
  const weekday = DAYS[new Date(+y, +mo - 1, +d).getDay()];
  return `${weekday}, ${String(d).padStart(2, '0')} ${MONTHS[+mo - 1]} ${y} ${hh}:${mi}:${ss} ${tz}`;
}

export async function GET() {
  const articles = await getCollection('articles');
  const pages = articles
    .sort((a, b) => b.data.created.localeCompare(a.data.created))
    .slice(0, 40);

  return rss({
    title: 'AIEd KB',
    description: 'AI in Education Research — research article summaries and concept syntheses',
    site: 'https://edtechdev.github.io',
    items: pages.map(a => ({
      title: a.data.title,
      link: `/aied/articles/${a.id.replace('.md', '')}`,
      pubDate: new Date(a.data.created),
      customData: `<pubDate>${toRfc822Local(a.data.created)}</pubDate>`,
      description: (a.body || '').split('\n').filter(l => l.startsWith('>')).join(' ').slice(0, 500)
        || (a.body || '').split('\n').slice(0, 5).join(' ').slice(0, 400),
    })),
    customData: `<language>en-us</language>`,
  });
}
