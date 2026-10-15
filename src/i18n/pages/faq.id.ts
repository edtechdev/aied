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
}

const id: FaqStrings = {
  title: 'FAQ',
  h1: 'Pertanyaan yang Sering Diajukan',
  introHtml:
    'Bagian ini menjawab pertanyaan-pertanyaan umum tentang <strong>AI dalam pendidikan</strong> — apa yang dikatakan riset tentang bagaimana AI memengaruhi pengajaran dan pembelajaran, serta bagaimana pendidik, pengajar, dan perancang pembelajaran dapat menerapkan bukti tersebut dalam praktik. Setiap jawaban mereduksi temuan dari riset yang diringkas di seluruh basis pengetahuan ini, menghubungkan pertanyaannya dengan konsep dan artikel yang relevan untuk bacaan lebih mendalam.',
  assistantHtml:
    'Punya pertanyaan yang belum terjawab di sini? Tanyakan kepada asisten AI Anda sendiri melalui halaman <a href="/aied/ai">Gunakan Basis Pengetahuan Ini dengan Asisten AI Anda Sendiri</a>, yang menunjukkan cara mengarahkan sebuah agen ke katalog lengkap untuk memperoleh jawaban yang berbasis dan menyitir sumber.',
  empty: 'Belum ada FAQ.',
};

export default id;
