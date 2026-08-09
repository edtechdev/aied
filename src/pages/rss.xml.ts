import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const articles = await getCollection('articles');
  const pages = articles
    .sort((a, b) => b.data.created.localeCompare(a.data.created))
    .slice(0, 40);

  return rss({
    title: 'AI Ed Wiki',
    description: 'AI in Education Research — research article summaries and concept syntheses',
    site: 'https://edtechdev.github.io',
    items: pages.map(a => ({
      title: a.data.title,
      link: `/aied/articles/${a.id.replace('.md', '')}`,
      pubDate: new Date(a.data.created),
      description: (a.body || '').split('\n').filter(l => l.startsWith('>')).join(' ').slice(0, 500)
        || (a.body || '').split('\n').slice(0, 5).join(' ').slice(0, 400),
    })),
    customData: `<language>en-us</language>`,
  });
}