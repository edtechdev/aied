/**
 * Günlük sayfasının (`/aied/journal`) metni: bilgi tabanına eklenen her şeyin
 * ters kronolojik dizini. Girdiler içerik koleksiyonlarından gelir; sayılar,
 * etiketler ve RSS satırı burada.
 */
import type { JournalStrings } from './journal.en';

const tr: JournalStrings = {
  title: 'Günlük',
  h1: 'Günlük',
  introTemplate:
    'Bilgi tabanındaki tüm {articles} makalenin, {concepts} kavramın, {faqs} SSS’nin ve {resources} kaynağın ters kronolojik dizini. {rss}',
  rssLabel: 'Son eklemeler için RSS beslemesine abone olun.',
  pageSingular: 'sayfa',
  pagePlural: 'sayfa',
};

export default tr;
