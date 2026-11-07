/**
 * One JSON file per locale: the full concept tree and FAQ list used by the
 * left sidebar's on-demand disclosures.
 *
 * Ordinary pages carry only the ten strand headings and a compact FAQ teaser.
 * When a reader expands a strand or opens the FAQ tab, this file supplies the
 * titles already localized for that locale. The file is fetched once per locale
 * and cached by the browser; it is never inlined into page HTML.
 *
 * The endpoint deliberately uses the same registry and FAQ comparator as the
 * server-rendered sidebar. A separate ordering path would make the five compact
 * FAQs change when the full list arrives.
 */
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import siteConfig from '../../config/siteConfig';
import { conceptIndex } from '../../data/conceptIndex';
import { faqIndex } from '../../data/faqIndex';
import { strings } from '../../i18n';
import { hasTranslation, localeHref, taxonomyHeading, translationMapFrom } from '../../i18n/config';
import { localizedTitles, localizedTitle } from '../../i18n/localizedTitles';
import { orderFaqsForSidebar, sectionAnchor } from '../../lib/compactNav';

export async function getStaticPaths() {
  return siteConfig.i18n.locales.map((l) => ({ params: { locale: l.code } }));
}

export async function GET({ params }: APIContext) {
  const locale = params.locale ?? siteConfig.i18n.defaultLocale;
  const [concepts, faqs, translations] = await Promise.all([
    getCollection('concepts'),
    getCollection('faqs'),
    getCollection('translations'),
  ]);
  const localized = await localizedTitles(locale);
  const translationMap = translationMapFrom(translations as any);

  // Same fallback rule as localizeHref(), but with an explicit map: a static
  // endpoint may render locales concurrently, so it must not mutate the
  // build-wide active map.
  const localHref = (href: string): string => {
    if (locale === siteConfig.i18n.defaultLocale) return href;
    if (!href.startsWith(`${siteConfig.basePath}/`)) return href;
    const route = href.slice(siteConfig.basePath.length).replace(/\/+$/, '') || '/';
    return hasTranslation(route, locale, translationMap) ? localeHref(route, locale) : href;
  };

  const conceptTitles = new Map(
    concepts.map((entry) => {
      const slug = entry.id.replace(/\.md$/, '');
      return [slug, localizedTitle(localized, 'concepts', slug, entry.data.title)];
    }),
  );

  const sections = conceptIndex.map((section) => ({
    anchor: sectionAnchor(section.heading),
    heading: taxonomyHeading(section.heading, locale),
    groups: section.groups
      .map((group) => ({
        label: taxonomyHeading(group.label, locale),
        items: group.items
          .filter((slug) => conceptTitles.has(slug))
          .map((slug) => ({
            slug,
            title: conceptTitles.get(slug) ?? '',
            href: localHref(`${siteConfig.basePath}/concepts/${slug}/`),
          })),
      }))
      .filter((group) => group.items.length > 0),
  }));

  const faqItems = orderFaqsForSidebar(faqs).map((entry) => {
    const slug = entry.id.replace(/\.md$/, '');
    return {
      slug,
      title: localizedTitle(localized, 'faqs', slug, entry.data.title),
      href: localHref(`${siteConfig.basePath}/faqs/${slug}/`),
    };
  });

  // FAQ groups use the same authored sections as /faq, with localized headings.
  // Any FAQ the registry has not filed yet goes into a trailing section instead
  // of disappearing from the sidebar.
  const faqCopy = strings(locale).faq;
  const faqBySlug = new Map(faqItems.map((item) => [item.slug, item]));
  const listed = new Set(faqIndex.flatMap((section) => section.items));
  const faqSections = faqIndex
    .map((section) => ({
      anchor: sectionAnchor(section.heading),
      label: faqCopy.sectionHeadings?.[section.heading] ?? section.heading,
      items: section.items
        .map((slug) => faqBySlug.get(slug))
        .filter((item): item is (typeof faqItems)[number] => !!item),
    }))
    .filter((section) => section.items.length > 0);
  const unlistedFaqs = faqItems.filter((item) => !listed.has(item.slug));
  if (unlistedFaqs.length > 0) {
    const heading = 'More questions';
    faqSections.push({
      anchor: sectionAnchor(heading),
      label: faqCopy.sectionHeadings?.[heading] ?? heading,
      items: unlistedFaqs,
    });
  }

  return new Response(JSON.stringify({ locale, sections, faqs: faqItems, faqSections }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
