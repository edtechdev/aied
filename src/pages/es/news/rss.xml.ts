import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { renderMarkdown } from '../../../lib/markdown';
import siteConfig from '../../../config/siteConfig';

// Spanish newsletter-only feed: /aied/es/news/rss.xml. It carries the Spanish
// translations of the issues, links to their Spanish detail pages, and keeps the
// English newsletter feed and archive separate.
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
  const issues = (await getCollection('newsletterTranslations'))
    .filter((n) => n.data.status !== 'draft' && n.id.startsWith('es/'))
    .sort((a, b) => b.data.created.localeCompare(a.data.created));

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
      const slug = n.id.split('/').pop()!.replace(/\.md$/, '');
      return {
        title: n.data.title,
        link: `${siteConfig.basePath}/es/news/${slug}/`,
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
    title: 'AIEd Research Weekly Update: Edición en español',
    description:
      'La edición en español del boletín semanal de la base de conocimiento sobre IA en la educación: qué significa la nueva investigación para docentes, desarrolladores, investigadores y administradores.',
    site: `${siteConfig.url}/es/`,
    items,
    customData: `<language>es</language>`,
  });
}
