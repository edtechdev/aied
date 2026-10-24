/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so an Indonesian visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
export interface NewsStrings {
  /** <title> and the page heading. The newsletter's name, printed verbatim. */
  title: string;
  /** Meta description. */
  description: string;
  /** What the newsletter is and who it is for. May contain inline HTML. */
  introHtml: string;
  /** The two feeds, and how they differ. May contain inline HTML. */
  feedsHtml: string;
  /** How to get the newsletter by email, through a feed-to-email service. */
  emailHtml: string;
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const id: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Newsletter mingguan Basis Pengetahuan AI dalam Pendidikan: apa arti riset baru bagi pengajar, pengembang, peneliti, dan administrator.',
  introHtml:
    'Ringkasan mingguan dari <a href="/aied/">Basis Pengetahuan AI dalam Pendidikan</a> tentang apa arti riset yang terbit pekan ini bagi pengajar, pengembang, peneliti, dan administrator. Setiap terbitan menautkan makalah di balik setiap klaim, dan bagian internal di bawah memantau apa yang berubah di situs ini sendiri.',
  feedsHtml:
    'Dua feed RSS membawanya. <a href="/aied/news/rss.xml">Feed newsletter</a> hanya memuat terbitan, satu entri per pekan. <a href="/aied/rss.xml">Feed basis pengetahuan</a> memuat setiap ringkasan artikel baru begitu ditambahkan, yaitu materi yang sama dengan sumber terbitan, dengan laju yang jauh lebih tinggi.',
  emailHtml:
    'Agar setiap terbitan sampai ke email Anda, tempelkan feed newsletter ke <a href="https://blogtrottr.com/">Blogtrottr</a>, layanan gratis pihak ketiga yang mengirim feed ke kotak masuk sesuai jadwal yang Anda pilih. Pesannya memuat iklan.',
  empty: 'Belum ada terbitan yang diterbitkan.',
  allIssues: 'Semua terbitan',
  otherIssuesAria: 'Terbitan lain',
  issueLabel: 'Terbitan {issue}',
};

export default id;
