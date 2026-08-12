import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { resolve } from 'path';

const articlesDir = resolve(process.cwd(), 'articles');
const conceptsDir = resolve(process.cwd(), 'concepts');

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: articlesDir }),
  schema: z.object({
    title: z.string(),
    created: z.union([z.date(), z.string()]).transform(v => {
      if (v instanceof Date) return v.toISOString().split('T')[0];
      if (/^\d{4}-\d{2}-\d{2}/.test(v)) return v;
      return '2026-01-01';
    }),
    updated: z.union([z.date(), z.string()]).optional().transform(v => {
      if (!v) return '';
      if (v instanceof Date) return v.toISOString().split('T')[0];
      return String(v);
    }),
    tags: z.any().transform(v => Array.isArray(v) ? v.map(String) : []),
    sources: z.any().transform(v => Array.isArray(v) ? v.flat().map(String) : []),
    confidence: z.string().catch('medium').transform(v =>
      ['high', 'medium', 'low'].includes(v) ? v : 'medium'
    ),
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: '*.md', base: conceptsDir }),
  schema: z.object({
    title: z.string(),
    created: z.union([z.date(), z.string()]).transform(v => {
      if (v instanceof Date) return v.toISOString().split('T')[0];
      if (/^\d{4}-\d{2}-\d{2}/.test(v)) return v;
      return '2026-01-01';
    }),
    updated: z.union([z.date(), z.string()]).optional().transform(v => {
      if (!v) return '';
      if (v instanceof Date) return v.toISOString().split('T')[0];
      return String(v);
    }),
    tags: z.any().transform(v => Array.isArray(v) ? v.map(String) : []),
    confidence: z.string().catch('medium').transform(v =>
      ['high', 'medium', 'low'].includes(v) ? v : 'medium'
    ),
  }),
});

export const collections = { articles, concepts };