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

const id: ConceptsStrings = {
  title: 'Konsep',
  h1: 'Konsep',
  introHtml:
    'Semua halaman konsep di situs ini, dalam bagian yang sama dengan bilah sisi kiri. Setiap halaman menjelaskan apa arti sebuah gagasan dalam AI dan pendidikan, apa yang ditemukan riset tentangnya, dan studi mana yang menjadi dasarnya. <a href=\"/aied/concepts/ai-education/\">AI dalam Pendidikan</a> adalah payung yang menyatukannya.',
  browseHtml:
    'Halaman konsep juga tersedia sebagai <a href=\"/aied/aied.epub\">EPUB</a> atau <a href=\"/aied/aied.pdf\">PDF</a> untuk dibaca offline. Untuk berangkat dari sebuah pertanyaan, makalah, alat, pencarian, atau asisten Anda sendiri, lihat <a href=\"/aied/faq\">FAQ</a>, <a href=\"/aied/journal\">jurnal</a>, <a href=\"/aied/resources\">sumber daya</a>, <a href=\"/aied/search\">pencarian</a>, atau <a href=\"/aied/ai\">halaman AI</a>.',
  countTemplate: '{count} halaman konsep, dikelompokkan menjadi {strands} bagian.',
  strandBlurbs: {
    'Foundations of AI in education':
      'Pandangan menyeluruh tentang bidang ini sendiri: apa itu AI dalam pendidikan, bagaimana perkembangannya, dan tema-tema lintas-bidang (literasi AI, kolaborasi manusia dan AI, agensi) yang membentuk setiap bagian lainnya.',
    'Learning and instruction':
      'Bagaimana AI mendukung pengajaran dan pembelajaran, melalui pedagogi, teori belajar, dan proses yang berpusat pada peserta didik tempat AI beroperasi.',
    'Technologies and techniques':
      'Lapisan teknis: model dan metode AI yang menggerakkan teknologi pendidikan, serta sistem pemodelan peserta didik dan tutor yang dibangun di atasnya.',
    'AI in the disciplines':
      'Bagaimana AI diterapkan di berbagai bidang studi dan jenjang pendidikan: seberapa luas cakupan bidang studinya.',
    'Assessment and measurement':
      'Bagaimana AI menilai peserta didik sekaligus membentuk ulang cara kita mengevaluasi sistem AI dan dampaknya.',
    'Equity, ethics, and responsible use':
      'Kesetaraan, akses, dan tanggung jawab merupakan hal yang sentral dalam AI di pendidikan.',
  },
  empty: 'Belum ada halaman konsep.',
};

export default id;
