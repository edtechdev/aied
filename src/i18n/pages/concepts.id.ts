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

const id: ConceptsStrings = {
  title: 'Konsep',
  h1: 'Konsep',
  introHtml:
    'Semua halaman konsep di situs ini, dalam bagian yang sama dengan bilah sisi kiri. Setiap halaman menjelaskan apa arti sebuah gagasan dalam AI dan pendidikan, apa yang ditemukan riset tentangnya, dan studi mana yang menjadi dasarnya. <a href="/aied/concepts/ai-education/">AI dalam Pendidikan</a> adalah payung yang menyatukannya.',
  browseHtml:
    'Halaman konsep juga tersedia sebagai <a href="/aied/aied.epub">EPUB</a> atau <a href="/aied/aied.pdf">PDF</a> untuk dibaca offline. Untuk berangkat dari sebuah pertanyaan, makalah, alat, pencarian, atau asisten Anda sendiri, lihat <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">jurnal</a>, <a href="/aied/resources">sumber daya</a>, <a href="/aied/search">pencarian</a>, atau <a href="/aied/ai">halaman AI</a>.',
  countTemplate: '{count} halaman konsep, dikelompokkan menjadi {strands} bagian.',
  empty: 'Belum ada halaman konsep.',
};

export default id;
