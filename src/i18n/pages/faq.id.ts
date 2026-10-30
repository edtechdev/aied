/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const id: FaqStrings = {
  title: 'FAQ',
  h1: 'Pertanyaan yang Sering Diajukan',
  introHtml:
    'Bagian ini menjawab pertanyaan-pertanyaan umum tentang <strong>AI dalam pendidikan</strong> — apa yang dikatakan riset tentang bagaimana AI memengaruhi pengajaran dan pembelajaran, serta bagaimana pendidik, pengajar, dan perancang pembelajaran dapat menerapkan bukti tersebut dalam praktik. Setiap jawaban mereduksi temuan dari riset yang diringkas di seluruh basis pengetahuan ini, menghubungkan pertanyaannya dengan konsep dan artikel yang relevan untuk bacaan lebih mendalam.',
  assistantHtml:
    'Punya pertanyaan yang belum terjawab di sini? Tanyakan kepada asisten AI Anda sendiri melalui halaman <a href="/aied/ai">Gunakan Basis Pengetahuan Ini dengan Asisten AI Anda Sendiri</a>, yang menunjukkan cara mengarahkan sebuah agen ke katalog lengkap untuk memperoleh jawaban yang berbasis dan menyitir sumber.',
  empty: 'Belum ada FAQ.',
  sectionHeadings: {
    "Start here": "Mulai di Sini",
    "Course and institutional policy": "Kebijakan Mata Kuliah dan Institusi",
    "Designing courses and activities": "Merancang Mata Kuliah dan Aktivitas",
    "Assessment, feedback and integrity": "Penilaian, Umpan Balik dan Integritas",
    "How students learn and use AI": "Cara Siswa Belajar dan Menggunakan AI",
    "Particular learners, access and wellbeing": "Pembelajar Beragam, Akses dan Kesejahteraan",
    "Careers and AI literacy": "Karier dan Literasi AI",
    "Building and evaluating educational AI": "Membangun dan Menilai AI untuk Pendidikan",
    "Research practice": "Praktik Penelitian",
  },
  sectionBlurbs: {
    "Start here": "Dua pertanyaan luas yang layak dibaca sebelum pertanyaan yang lebih spesifik, apa pun peran Anda.",
    "Course and institutional policy": "Untuk pengajar yang menulis aturan yang akan dibaca siswa, serta administrator dan pengembang akademik yang menetapkannya di tingkat program.",
    "Designing courses and activities": "Untuk siapa pun yang memutuskan di mana AI masuk ke dalam suatu tugas, semester atau mata kuliah daring, dan untuk pengajar yang ingin waktu mereka kembali seperti yang seharusnya diberikan AI.",
    "Assessment, feedback and integrity": "Ini adalah kelompok terbesar, karena di sinilah buktinya paling tajam dan di sinilah konsekuensinya sampai ke catatan siswa.",
    "How students learn and use AI": "Untuk pertanyaan tentang apa yang sebenarnya diperoleh siswa, apa yang berisiko mereka hilangkan, dan bagaimana menjaga pembelajaran tetap bersama mereka.",
    "Particular learners, access and wellbeing": "Untuk pengajar dan staf pendukung yang menyesuaikan desain dengan siapa yang benar-benar ada di ruang kelas, dan untuk administrator yang memikirkan siapa yang tidak ada.",
    "Careers and AI literacy": "Untuk perancang kurikulum dan pimpinan program yang menjawab siswa yang bertanya untuk apa semua ini.",
    "Building and evaluating educational AI": "Untuk pengembang, perancang pembelajaran dan peneliti yang menghadirkan tutor, simulasi atau platform ke dalam mata kuliah nyata.",
    "Research practice": "Untuk peneliti yang melaporkan, meninjau atau merencanakan pekerjaan di bidang ini.",
  },
};

export default id;
