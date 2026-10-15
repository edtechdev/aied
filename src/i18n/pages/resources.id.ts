/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const id: ResourcesStrings = {
  title: 'Sumber Daya',
  h1: 'Alat Gratis dan Sumber Daya',
  introHtml: [
    'Kumpulan kurasi <strong>alat gratis, koleksi, instrumen, dan format</strong> untuk AI dalam pendidikan — hal-hal yang bisa langsung Anda gunakan hari ini, bukan riset yang harus Anda baca lebih dulu. Sebagian besar dibuat oleh pendidik, perancang pembelajaran, pustakawan, dan peneliti, dan banyak di antaranya dibangun dengan bantuan AI oleh orang yang bukan pengembang profesional.',
    'Tidak semua yang ada di sini bersifat interaktif. Di samping alat peramban dan tutor AI, Anda akan menemukan perpustakaan prompt dan "gem" siap pakai, koleksi aktivitas kelas, dokumen singkat dan kebijakan, instrumen asesmen, serta format berkas terbuka. Setiap entri adalah ringkasan singkat yang menautkan ke sebuah halaman yang menyebutkan pembuatnya, jenisnya, ketersediaan kode sumber, biaya penggunaannya, dan kapan tautannya terakhir diperiksa.',
    'Setiap entri menautkan ke situs eksternal yang tidak dikendalikan oleh basis pengetahuan ini, dan tautannya diperiksa kembali secara berkala — setiap halaman menampilkan tanggal terakhir konfirmasi tautannya. Bila sebuah alat telah pindah, ditutup, atau layak ada di sini namun belum tercantum, jalan tercepat adalah membuka isu di repositori.',
  ],
  empty: 'Belum ada sumber daya.',
  groupLabels: {
    software: 'Perangkat lunak',
    'ai tutor': 'Tutor AI',
    'agent skill': 'Keterampilan Agen',
    'prompt or gem library': 'Perpustakaan Prompt dan Gem',
    'collection of tools': 'Koleksi Alat',
    'collection of activities': 'Koleksi Aktivitas',
    'assessment instrument': 'Instrumen Asesmen',
    'open format or specification': 'Format dan Spesifikasi Terbuka',
    'ebook or guide': 'Ebook dan Panduan',
    'case study collection': 'Koleksi Studi Kasus',
    'dataset or benchmark': 'Kumpulan Data dan Benchmark',
  },
};

export default id;
