/**
 * Copy for the 404 page (`/aied/404.html`). The page is otherwise the search
 * page, so the only strings it adds are the heading and the two ways out.
 */
export interface NotFoundStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** First paragraph. May contain inline HTML and links. */
  messageHtml: string;
  /** Second paragraph, pointing at the search form below. */
  searchHtml: string;
}

const id: NotFoundStrings = {
  title: 'Halaman Tidak Ditemukan',
  h1: 'Halaman Tidak Ditemukan',
  messageHtml:
    'Kami tidak dapat menemukan halaman yang Anda minta. Tautan yang membawa Anda ke sini mungkin sudah kedaluwarsa, atau halamannya mungkin telah diganti namanya. Anda bisa memulai lagi dari <a href="/aied/">beranda</a>.',
  searchHtml:
    'Atau cari di seluruh basis pengetahuan di bawah ini. Setiap artikel, konsep, FAQ, dan sumber daya telah diindeks, dan filternya mempersempit pencarian menurut disiplin, tingkat, audiens, atau metode riset.',
};

export default id;
