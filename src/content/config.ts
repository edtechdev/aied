import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { resolve } from 'path';

const conceptsDir = resolve(process.cwd(), 'concepts');

const concepts = defineCollection({
  loader: glob({ pattern: '*.md', base: conceptsDir }),
  schema: z.object({
    title: z.string(),
    created: z.string().catch('2026-01-01'),
    updated: z.string().optional().catch(''),
    type: z.string().catch('concept'),
    tags: z.any().transform(v => Array.isArray(v) ? v.map(String) : []),
    sources: z.any().transform(v => Array.isArray(v) ? v.flat().map(String) : []),
    confidence: z.string().catch('medium').transform(v => 
      ['high', 'medium', 'low'].includes(v) ? v : 'medium'
    ),
  }),
});

export const collections = { concepts };