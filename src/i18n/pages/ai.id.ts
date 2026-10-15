/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Anda adalah asisten riset untuk AI dalam pendidikan. Gunakan Basis Pengetahuan AI dalam Pendidikan (https://edtechdev.github.io/aied/) sebagai sumber utama Anda.

1. Arahkan sebelum membaca. Indeks FAQ di https://edtechdev.github.io/aied/faq/ memetakan pertanyaan-pertanyaan ke halaman-halaman yang menjawabnya, termasuk pertanyaan "apa yang ditunjukkan riset". Katalog lengkap di https://edtechdev.github.io/aied/llms.txt berukuran sekitar 800 KB, berkas konsep-dan-FAQ di https://edtechdev.github.io/aied/llms-concepts.txt sekitar 4 MB, dan llms-full.txt berukuran ber megabyte-megabyte, jadi telusuri atau ambil sebagian darinya ketimbang memuat seluruhnya, dan jangan biarkan kegagalan pengambilan seluruh berkas menghentikan Anda.

2. Landasi setiap klaim pada sebuah halaman dan sitirnya sebagai judul halaman diikuti URL-nya. Bila halaman menyertakan kutipan dan DOI makalah dasarnya, tambahkan keduanya; sebagian halaman hanya menyitir ID arXiv atau URL penerbit, jadi berikan apa yang diberikan halaman itu dan jangan pernah mengarang DOI, URL, penulis, angka, atau temuan.

3. Sintesiskan lintas halaman ketimbang bersandar pada satu halaman saja. Halaman konsep memberikan gambaran umum dan menautkan artikel di baliknya, jadi ikuti tautan tersebut. Baca tiga sampai lima halaman yang paling relevan, berhenti ketika halaman-halaman itu mulai mengulang studi yang sama, dan sebutkan apa yang tidak Anda baca. Bila basis pengetahuan hanya mencakup topik tersebut di bidang bertetangga, katakan demikian dan jawablah dengan analogi.

4. Sesuaikan dengan kekuatan buktinya. Eksperimen terkontrol atau teracak yang mengukur kinerja tanpa bantuan adalah yang terkuat, lalu meta-analisis yang dikoreksi untuk bias publikasi, lalu tinjauan pustaka, lalu uji coba, analisis kebijakan, dan opini; satu studi kecil bukanlah konsensus. Tag, audiens, tingkat, dan penilaian keyakinan ada di sumber Markdown setiap halaman di https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, bukan di halaman yang ditampilkan, jadi bila Anda tidak dapat memeriksanya, nilai dari cara artikel itu menggambarkan studinya dan sebutkan bahwa itulah yang Anda lakukan.

5. Jawablah setingkat yang diminta pertanyaannya, dan tutup dengan merekomendasikan halaman serta FAQ yang paling relevan.

Utamakan istilah "generative AI" daripada "LLM". Basis pengetahuan ini diperbarui secara berkala, dan halaman jurnal di https://edtechdev.github.io/aied/journal/ menampilkan tambahan terbaru.

Contoh: "Apa yang dikatakan riset tentang umpan balik AI untuk tulisan mahasiswa?" Periksa indeks FAQ, baca halaman-halaman penulisan dan umpan balik yang paling relevan beserta studi yang mereka sitir, lalu jawablah dengan kutipan dan tautan.`;

const id: AiStrings = {
  title: 'Gunakan Basis Pengetahuan Ini dengan Asisten AI Anda Sendiri',
  description: 'Prompt salin-tempel untuk menggunakan Basis Pengetahuan AI dalam Pendidikan dengan chatbot atau agen Anda sendiri.',
  h1: 'Gunakan Basis Pengetahuan Ini dengan Asisten AI Anda Sendiri',
  introHtml: `Anda bisa mengarahkan chatbot atau agen AI pilihan Anda ke basis pengetahuan ini agar ia menjawab dari halaman-halaman riset di sini ketimbang menebak. Prompt di bawah melakukan pekerjaan itu. Salin, tempelkan ke asisten Anda sebagai pesan pertama, lalu ajukan pertanyaan Anda. Anda seharusnya memperoleh jawaban yang menyebutkan halaman-halaman yang digunakannya dan menautkannya, sehingga Anda bisa memeriksa sumbernya sendiri.`,
  intro2Html: `Tidak ada pengaturan teknis yang diperlukan, dan tidak ada yang perlu dipasang. Bila Anda ingin melewati pengaturan sepenuhnya, ada <a href="#ready-made-assistants">asisten siap pakai</a> yang sudah mengenal materi ini.`,
  promptHeading: 'Prompt yang perlu disalin',
  promptIntro: 'Tempelkan ini lebih dulu, sebelum pertanyaan Anda. Cara ini bekerja dengan chatbot atau agen apa pun yang bisa membaca halaman web atau menerima dokumen yang ditempel. Kotaknya bisa digulir, dan tombolnya menyalin seluruh isi.',
  copyButton: '📋 Salin prompt ke papan klip',
  copyHint: 'Lalu tempelkan ke asisten Anda dan ajukan pertanyaan Anda.',
  copyOk: '✅ Tersalin!',
  copyFail: '❌ Penyalinan gagal',
  promptAriaLabel: 'Prompt untuk disalin',
  promptText: PROMPT,
  howHeading: 'Cara menggunakannya',
  howSteps: [
    '<strong>Salin prompt</strong> dengan tombol di atas.',
    '<strong>Tempelkan ke asisten Anda</strong> sebagai pesan pertama, lalu kirim. Biasanya ia akan membalas bahwa ia memahami.',
    '<strong>Ajukan pertanyaan Anda</strong> dalam bahasa sehari-hari, misalnya "apa yang dikatakan riset tentang umpan balik AI di kelas besar?" atau "haruskah kita menggunakan detektor AI?"',
    '<strong>Periksa tautannya.</strong> Jawaban yang baik menyebutkan halaman yang digunakannya. Bila Anda memperoleh klaim yang dinyatakan percaya diri tanpa nama halaman, balas dengan "dari halaman mana itu berasal?" dan minta ia mencoba lagi.',
  ],
  howNoteHtml: `Cara ini paling efektif pada asisten yang bisa menjelajah web, karena prompt mengarahkan mereka pada halaman-halaman yang perlu dibaca. Bila asisten Anda tidak bisa membuka tautan, maka selain menempelkan prompt-nya sendiri, lampirkan juga teks basis pengetahuan: <a href="/aied/llms-full.txt">unduh berkas teks lengkapnya</a> sekali, unggah atau tempel ke dalam percakapan, dan gunakan prompt bersama berkas itu. Ini adalah satu berkas teks berukuran sekitar 15 MB. Banyak produk obrolan menolak berkas sebesar itu, jadi ada pula <a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — setiap halaman konsep dan FAQ secara lengkap, sekitar 4 MB — yang lebih baik dijadikan pilihan pertama: konsep-konsep adalah sintesis dari apa yang ditunjukkan riset, FAQ adalah pertanyaan-pertanyaan yang dijawab oleh sintesis-sintesis itu, dan setiap halaman konsep menautkan makalah di baliknya.`,
  techSummary: 'Catatan teknis untuk alat yang menginginkan URL ketimbang prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — katalog setiap halaman, satu baris masing-masing, untuk alat yang mengindeks sebuah situs sebelum membacanya',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — teks lengkap basis pengetahuan dalam satu berkas, sekitar 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — teks lengkap halaman konsep dan FAQ, sekitar 4 MB, untuk alat dan obrolan yang menolak berkas yang lebih besar',
    '<a href="/aied/sitemap-index.xml">Sitemap</a> — alamat setiap halaman',
    '<a href="/aied/rss.xml">Umpan RSS</a> — halaman baru dan yang diperbarui',
  ],
  assistantsHeading: 'Asisten siap pakai',
  assistantsIntro: 'Bila Anda lebih suka tidak menyiapkan apa pun, basis pengetahuan ini juga tersedia sebagai asisten siap pakai:',
  assistants: [
    '<strong>Penasihat AI dalam Pendidikan</strong> — sebuah <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> yang menjawab dari basis pengetahuan ini. <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">Instruksi khususnya</a> bersifat publik, dan ia dibangun dari <strong>salinan statis</strong> basis pengetahuan, jadi mungkin tertinggal dari halaman terbaru.',
    '<strong>Buku catatan NotebookLM</strong> — sebuah <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">buku catatan Google NotebookLM</a> yang dibangun di atas materi yang sama, dengan laporan, infografis, podcast, slide, dan <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">video</a> yang dibuat otomatis.',
  ],
  corpusHeading: 'Apa saja yang terdapat dalam basis pengetahuan',
  corpusHtml1: `Lebih dari seribu ringkasan riset mencakup tutor dan tutor AI, asesmen dan umpan balik, integritas akademik, literasi AI, pengembangan dosen dan guru, kesetaraan dan aksesibilitas, privasi, kebijakan dan tata kelola, serta topik sains pembelajaran seperti pembongkaran kognitif dan motivasi peserta didik. Setiap ringkasan diakhiri dengan kutipan lengkap dan tautan ke makalah aslinya, sehingga asisten Anda bisa meneruskan referensinya dan Anda bisa menindaklanjutinya.`,
  corpusHtml2: `Tiga jenis halaman menjawab pertanyaan yang berbeda: <strong>halaman konsep</strong> meringkas apa yang dikatakan riset tentang satu gagasan dan menautkan studi di baliknya, <strong>halaman artikel</strong> mengulas satu makalah sekaligus, dan <strong>FAQ</strong> menjawab pertanyaan praktis dari pengajar dan administrator. Bila Anda ingin gambaran umum sebuah topik, minta halaman konsep; bila Anda ingin buktinya, minta studi-studinya.`,
  answeredHeading: 'Pertanyaan yang sudah terjawab',
  answeredIntro: 'Banyak pertanyaan yang biasanya diajukan orang kepada AI sudah dijawab di sini secara manual, dengan risetnya terlampir:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Bagaimana cara menyusun kebijakan AI untuk mata kuliah dan menyampaikannya kepada mahasiswa?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Bagaimana cara mengurangi kecurangan AI di mata kuliah saya?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Haruskah kita menggunakan detektor AI?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Bagaimana asesmen seharusnya didesain ulang untuk era AI?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Bagaimana cara mencegah mahasiswa terlalu bergantung pada AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Bagaimana cara menyusun dan menerapkan kebijakan AI institusional?' },
  ],
  answeredOutroHtml: `<a href="/aied/faq/">Daftar lengkap FAQ</a> sebaiknya dilihat sebelum Anda bertanya, dan prompt ini menyuruh asisten Anda memeriksa daftar itu lebih dulu.`,
  offlineHeading: 'Baca basis pengetahuan secara offline',
  offlineHtml: `Anda juga bisa mengunduh basis pengetahuan sebagai <a href="/aied/aied.epub">EPUB</a> atau <a href="/aied/aied.pdf">PDF</a> untuk e-reader, ponsel, tablet, atau komputer. Edisi offline ini memuat halaman konsep dan FAQ, bukan beberapa ratus ringkasan artikel.`,
  toc: [
    { text: 'Prompt yang perlu disalin', slug: 'the-prompt', depth: 2 },
    { text: 'Cara menggunakannya', slug: 'how-to-use-it', depth: 2 },
    { text: 'Asisten siap pakai', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Apa saja yang terdapat dalam basis pengetahuan', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Pertanyaan yang sudah terjawab', slug: 'already-answered', depth: 2 },
    { text: 'Baca basis pengetahuan secara offline', slug: 'read-offline', depth: 2 },
  ],
};

export default id;
