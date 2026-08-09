import { getCollection } from 'astro:content';

export async function GET() {
  const concepts = await getCollection('concepts');
  const index = concepts
    .filter(c => c.data.type === 'concept')
    .map(c => ({
      slug: c.id.replace('.md', ''),
      title: c.data.title,
      created: c.data.created,
      tags: c.data.tags || [],
      body: (c.body || '').slice(0, 300).replace(/\n/g, ' '),
    }));
  
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}