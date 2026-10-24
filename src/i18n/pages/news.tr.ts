/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy.
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
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const tr: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Eğitimde Yapay Zeka Bilgi Tabanı’nın haftalık bülteni: yeni araştırmanın öğretmenler, geliştiriciler, araştırmacılar ve yöneticiler için ne anlama geldiği.',
  introHtml:
    'O hafta yayımlanan yeni araştırmanın öğretmenler, geliştiriciler, araştırmacılar ve yöneticiler için ne anlama geldiğine dair <a href="/aied/">Eğitimde Yapay Zeka Bilgi Tabanı</a>’ndan haftalık bir özet. Her sayı her iddianın arkasındaki makaleye bağlantı verir; sondaki iç çalışmalar ise sitenin kendisinde nelerin değiştiğini izler.',
  feedsHtml:
    'Bülteni iki RSS akışı taşır. <a href="/aied/news/rss.xml">Bülten akışı</a> yalnızca sayıları içerir, haftada bir kayıt. <a href="/aied/rss.xml">Bilgi tabanı akışı</a> eklenen her yeni makale özetini içerir; bu, sayıların derlendiği malzemenin aynısıdır, çok daha yüksek bir hızda.',
  empty: 'Henüz hiç sayı yayımlanmadı.',
  allIssues: 'Tüm sayılar',
  otherIssuesAria: 'Diğer sayılar',
  issueLabel: 'Sayı {issue}',
};

export default tr;
