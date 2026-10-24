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
  empty: 'Henüz kavram sayfası yok.',
};

export default tr;
