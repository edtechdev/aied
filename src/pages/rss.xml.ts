import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const concepts = await getCollection('concepts');
  const pages = concepts
    .filter(c => c.data.type === 'concept' && (c.data.sources || []).length > 0)
    .sort((a, b) => b.data.created.localeCompare(a.data.created))
    .slice(0, 40);

  return rss({
    title: 'AI Ed Wiki',
    description: 'AI in Education Research Wiki — synthesized concept pages from the latest research',
    site: 'https://edtechdev.github.io',
    items: pages.map(c => ({
      title: c.data.title,
      link: `/aied/pages/${c.id.replace('.md', '')}`,
      pubDate: new Date(c.data.created),
      description: (c.body || '').split('\n').filter(l => l.startsWith('>')).join(' ').slice(0, 500)
        || (c.body || '').split('\n').slice(0, 5).join(' ').slice(0, 400),
    })),
    customData: `<language>en-us</language>`,
  });
}