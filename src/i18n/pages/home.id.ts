/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const id: HomeStrings = {
  title: 'Beranda',
  h1: 'Basis Pengetahuan AI dalam Pendidikan',
  introHtml: `Selamat datang di <strong>Basis Pengetahuan AI dalam Pendidikan</strong> — sumber daya domain publik dan gratis tentang <a href="/aied/concepts/ai-education/">kecerdasan buatan dalam pendidikan</a>, untuk para pengajar, pelajar, perancang, atau pengelolanya. Basis ini mereduksi riset akses terbuka terkini menjadi halaman-halaman singkat dan terstruktur yang bisa Anda baca dan terapkan. Catatan tentang cara penyusunannya: halaman-halaman dihasilkan dan diperbarui oleh agen AI, dengan panduan editorial dari pengembang situs. Setiap klaim menyebut makalah pendasarannya, sehingga sumbernya bisa Anda periksa.`,
  navHeading: 'Menavigasi situs ini',
  navHtml: `Telusuri indeks per jalur di bilah sisi kiri untuk melihat bagaimana bidang ini disusun, atau <a href="/aied/search">cari</a> seluruh basis pengetahuan jika Anda sudah punya topik tertentu. Halaman artikel meringkas satu makalah menjadi tujuan, metode, dan temuannya, dengan kutipan lengkap dan tautan ke karya terkait; halaman konsep menghimpun apa yang dikatakan riset tentang satu gagasan dan menautkan studi-studi di baliknya. Jika Anda lebih suka berangkat dari sebuah pertanyaan, <a href="/aied/faq">indeks FAQ</a> menghimpun pertanyaan yang paling sering diajukan pengunjung, mulai dari kebijakan AI untuk mata kuliah hingga apakah perlu menggunakan detektor AI; jika Anda lebih suka berangkat dari sebuah alat, <a href="/aied/resources">halaman sumber daya</a> menampilkan alat-alat gratis, koleksi, dan instrumen yang bisa langsung Anda gunakan, masing-masing menyebutkan pembuatnya dan biayanya. Peta konsep di atas menunjukkan apa yang terhubung dengan apa; <a href="/aied/concepts/ai-education/">AI dalam Pendidikan</a> adalah halaman peta di baliknya, mengelompokkan konsep-konsep menjadi sekitar selusin jalur payung.`,
  chatHeading: 'Mengobrol dengan basis pengetahuan',
  chatHtml: `Semua yang ada di sini juga diterbitkan sebagai berkas yang dapat dibaca mesin, sehingga Anda bisa mengarahkan chatbot atau agen AI pilihan Anda ke basis pengetahuan ini dan memperoleh jawaban yang menyitirnya, bukan menebak — <a href="/aied/ai">prompt-nya ada di sini</a>. Halaman baru muncul di <a href="/aied/journal">jurnal</a>, yang memiliki <a href="/aied/rss.xml">umpan RSS</a> bila Anda ingin mengikuti perkembangannya. Untuk membaca offline, ambil <a href="/aied/aied.epub">EPUB</a> atau <a href="/aied/aied.pdf">PDF</a>-nya.`,
  startingHeading: 'Titik awal yang direkomendasikan menurut audiens',
  startingIntro: 'Berikut beberapa konsep yang direkomendasikan untuk mulai belajar di basis pengetahuan ini.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Konsep esensial',
      html: `<a href="/aied/concepts/ai-literacy/">Literasi AI</a>, <a href="/aied/concepts/misconceptions/">salah paham tentang AI</a>, <a href="/aied/concepts/agentic-ai/">AI agenik</a>, <a href="/aied/concepts/cognitive-offloading/">pembongkaran kognitif</a>, dan <a href="/aied/concepts/interpreting-and-applying-aied-research/">cara menafsirkan dan menerapkan riset ini</a>: apa yang bisa dan tidak bisa didukung oleh temuannya, serta mengapa satu studi jarang menyelesaikan sebuah pertanyaan.`,
    },
    {
      id: 'instructors',
      heading: 'Pengajar',
      html: `<a href="/aied/concepts/teacher-role/">Peran mengajar yang berubah</a>, <a href="/aied/concepts/learning-design/">desain pembelajaran</a>, <a href="/aied/concepts/assessment/">asesmen</a>, <a href="/aied/concepts/feedback/">umpan balik</a>, <a href="/aied/concepts/academic-integrity/">integritas akademik</a>, <a href="/aied/concepts/framing-ai-use-for-students/">pembingkaian penggunaan AI</a> dan <a href="/aied/concepts/reducing-ai-misuse/">mengurangi penyalahgunaan</a>. Untuk alat, bukti, dan contoh di bidang studi Anda sendiri, lihat <a href="/aied/concepts/discipline-specific-aied/">AI di disiplin Anda sendiri</a>.`,
    },
    {
      id: 'developers',
      heading: 'Pengembang',
      html: `<a href="/aied/concepts/educational-technology-developers/">Membangun untuk pendidikan</a>, <a href="/aied/concepts/ai-technologies/">teknologi yang mendasarinya</a>, <a href="/aied/concepts/intelligent-tutoring/">tutor cerdas</a>, <a href="/aied/concepts/multimodal/">AI multimodal</a>, <a href="/aied/concepts/student-modeling/">pemodelan peserta didik</a>, dan <a href="/aied/concepts/llm-training-and-fine-tuning/">melatih dan menyesuaikan model untuk mengajar</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administrator',
      html: `<a href="/aied/concepts/administrator/">Peran administrator</a>, <a href="/aied/concepts/governance/">tata kelola AI</a>, <a href="/aied/concepts/educational-policy-ai/">kebijakan institusional</a>, <a href="/aied/concepts/legal-issues-and-risks/">isu hukum dan risiko</a>, dan <a href="/aied/concepts/change-management/">manajemen perubahan</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Peneliti',
      html: `<a href="/aied/concepts/research-methods-aied/">Metode penelitian dalam AIEd</a>, <a href="/aied/concepts/theories-and-frameworks/">teori dan kerangka</a>, <a href="/aied/concepts/ai-ed-evaluation/">mengevaluasi intervensi AI dalam pendidikan</a>, <a href="/aied/concepts/educational-measurement/">pengukuran pendidikan</a>, <a href="/aied/concepts/learning-gains/">mengukur peningkatan pembelajaran</a>, dan <a href="/aied/concepts/limitations-in-aied-research/">keterbatasan lintas-bidang dari basis bukti ini</a>.`,
    },
  ],
  statsHeading: 'Apa saja yang terdapat dalam basis pengetahuan',
  statsIntro:
    'Setiap halaman di sini memiliki tanggal, dan basis pengetahuan ini bertambah seiring terbitnya riset akses terbuka yang direview. Angka-angka di bawah dibaca dari isi terkini; tanggalnya adalah pembaruan halaman paling baru.',
  conceptMap: {
    title: 'Peta konsep AI dalam Pendidikan',
    desc:
      'Peta radial dengan AI dalam Pendidikan di tengah, terhubung ke dua belas konsep tingkat atas: ' +
      'Pemodelan, Pembelajaran, Kesetaraan, Umpan balik, Literasi AI, Asesmen, Disiplin, Pedagogi, ' +
      'Etika, Teknologi, Evaluasi, dan Riset. Pilih simpul mana pun untuk membuka halamannya.',
    navLabel: 'Konsep AI dalam Pendidikan',
    center: 'AI dalam Pendidikan',
    nodes: {
      'student-modeling': 'Pemodelan',
      'learning-theories': 'Pembelajaran',
      'equity-in-ai-education': 'Kesetaraan',
      feedback: 'Umpan balik',
      'ai-literacy': 'Literasi AI',
      assessment: 'Asesmen',
      'discipline-specific-aied': 'Disiplin',
      pedagogy: 'Pedagogi',
      ethics: 'Etika',
      'ai-technologies': 'Teknologi',
      'ai-ed-evaluation': 'Evaluasi',
      'research-methods-aied': 'Riset',
    },
  },
  toc: [
    { text: 'Menavigasi situs ini', slug: 'navigating-the-site', depth: 2 },
    { text: 'Mengobrol dengan basis pengetahuan', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Titik awal yang direkomendasikan menurut audiens', slug: 'starting-points', depth: 2 },
    { text: 'Konsep esensial', slug: 'essential-concepts', depth: 3 },
    { text: 'Pengajar', slug: 'instructors', depth: 3 },
    { text: 'Pengembang', slug: 'developers', depth: 3 },
    { text: 'Administrator', slug: 'administrators', depth: 3 },
    { text: 'Peneliti', slug: 'researchers', depth: 3 },
    { text: 'Apa saja yang terdapat dalam basis pengetahuan', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default id;
