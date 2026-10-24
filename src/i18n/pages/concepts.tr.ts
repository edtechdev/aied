/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const tr: ConceptsStrings = {
  title: 'Kavramlar',
  h1: 'Kavramlar',
  introHtml:
    'Sitedeki tüm kavram sayfaları, sol kenar çubuğundaki bölümlerle aynı bölümlerde. Her biri YZ ve eğitimdeki bir fikrin ne anlama geldiğini, araştırmanın bu konuda ne bulduğunu ve hangi çalışmalara dayandığını anlatır. <a href="/aied/concepts/ai-education/">Eğitimde Yapay Zeka</a>, bunları bir arada tutan şemsiye sayfadır.',
  browseHtml:
    'Kavram sayfaları çevrimdışı okumak için <a href="/aied/aied.epub">EPUB</a> veya <a href="/aied/aied.pdf">PDF</a> olarak da yayımlanır. Bir sorudan, makaleden, araçtan, aramadan ya da kendi asistanınızdan başlamak isterseniz <a href="/aied/faq">SSS</a>, <a href="/aied/journal">günlük</a>, <a href="/aied/resources">kaynaklar</a>, <a href="/aied/search">arama</a> veya <a href="/aied/ai">YZ sayfası</a> sayfalarına bakın.',
  countTemplate: '{count} kavram sayfası, {strands} bölümde gruplanmış.',
  strandBlurbs: {
    'Foundations of AI in education':
      'Alanın kendisine şemsiye bakış: eğitimde YZ’nin ne olduğu, nasıl evrildiği ve diğer her kolu biçimlendiren yatay temalar (YZ okuryazarlığı, insan ile YZ işbirliği, eylemlilik).',
    'Learning and instruction':
      'YZ’nin öğretme ve öğrenmeyi nasıl desteklediği: YZ’nin içinde işlediği pedagojiler, öğrenme teorileri ve öğrenene dönük süreçler üzerinden.',
    'Technologies and techniques':
      'Teknik katman: eğitim teknolojisini besleyen YZ modelleri ve yöntemleri ile bunların üzerine kurulu öğrenen modelleme ve birebir öğretim sistemleri.',
    'AI in the disciplines':
      'YZ’nin akademik konular ve eğitim seviyeleri genelinde nasıl uygulandığı: alanın konu kapsamı.',
    'Assessment and measurement':
      'YZ’nin hem öğrenenleri değerlendirmesi hem de YZ sistemlerini ve etkilerini nasıl değerlendirdiğimizi değiştirmesi.',
    'Equity, ethics, and responsible use':
      'Adalet, erişim ve sorumluluk, eğitimde YZ’nin merkezinde yer alır.',
  },
  empty: 'Henüz kavram sayfası yok.',
};

export default tr;
