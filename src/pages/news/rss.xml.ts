import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { renderMarkdown } from '../../lib/markdown';
import siteConfig from '../../config/siteConfig';

// The newsletter-only feed: /aied/news/rss.xml. One item per issue, dated by the
// issue date. Kept separate from /aied/rss.xml, which carries every new article
// summary as it is ingested, so a reader can subscribe to either rate.
//
// Each item carries the WHOLE issue in `<content:encoded>`, not just the summary
// line: a newsletter is written to be read, and a subscriber who has to click
// through for every paragraph is paying for the content twice. The body goes
// through the same renderer the page uses, so headings, wikilinks and maths come
// out the way they do on /news/<date>/. `description` keeps the one-sentence
// summary for readers that show a teaser instead of the body.
//
// Same pubDate handling as the main feed: @astrojs/rss reformats a Date to UTC,
// which shifts an Eastern-evening timestamp to the next calendar day, so the
// RFC-822 string is injected through customData with its own offset preserved.
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function toRfc822Local(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}:?\d{2}|Z)?/.exec(iso);
  if (!m) return iso;
  const [, y, mo, d, hh, mi, ss, offset] = m;
  const tz = !offset || offset === 'Z' ? 'GMT' : offset.replace(':', '');
  const weekday = DAYS[new Date(+y, +mo - 1, +d).getDay()];
  return `${weekday}, ${String(d).padStart(2, '0')} ${MONTHS[+mo - 1]} ${y} ${hh}:${mi}:${ss} ${tz}`;
}

export async function GET() {
  const issues = (await getCollection('newsletters'))
    .filter((n) => n.data.status !== 'draft')
    .sort((a, b) => b.data.created.localeCompare(a.data.created));

  // The renderer resolves [[wikilinks]] against the collections, exactly as the
  // issue page does, so the feed body cannot link somewhere the page would not.
  const [articles, concepts, faqs, resources] = await Promise.all([
    getCollection('articles'),
    getCollection('concepts'),
    getCollection('faqs'),
    getCollection('resources'),
  ]);
  const titles: Record<string, string> = {};
  for (const list of [articles, concepts, faqs, resources]) {
    for (const p of list) titles[p.id.replace('.md', '')] = p.data.title;
  }
  const slugs = (list: { id: string }[]) => new Set(list.map((p) => p.id.replace('.md', '')));
  const articleSlugs = slugs(articles);
  const conceptSlugs = slugs(concepts);
  const faqSlugs = slugs(faqs);
  const resourceSlugs = slugs(resources);

  const items = await Promise.all(
    issues.map(async (n) => {
      const { html: rawHtml } = renderMarkdown(n.body ?? '', {
        pageTitle: n.data.title,
        articleSlugs,
        conceptSlugs,
        faqSlugs,
        resourceSlugs,
        titles,
      });
      return {
        title: n.data.title,
        link: `${siteConfig.basePath}/news/${n.id.replace('.md', '')}/`,
        pubDate: new Date(n.data.created),
        customData: `<pubDate>${toRfc822Local(n.data.created)}</pubDate>`,
        description: n.data.summary,
        content: rawHtml
          .replaceAll('{{editor.name}}', siteConfig.editor.name)
          .replaceAll('{{editor.contactUrl}}', siteConfig.editor.contactUrl),
      };
    })
  );

  return rss({
    title: `${siteConfig.name} — AIEd Research Weekly Update`,
    description: `The weekly newsletter of ${siteConfig.name}: what new research means for instructors, developers, researchers, and administrators.`,
    site: siteConfig.url,
    items,
    customData: `<language>en-us</language>`,
  });
}
