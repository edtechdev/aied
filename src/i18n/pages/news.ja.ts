/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Japanese visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const ja: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    '教育におけるAIナレッジベースの週刊ニュースレター。新しい研究が教員、開発者、研究者、管理者にとって何を意味するかを伝えます。',
  introHtml:
    '<a href="/aied/">教育におけるAIナレッジベース</a>からの週ごとの概要です。その週に発表された新しい研究が教員、開発者、研究者、管理者にとって何を意味するかを扱います。各号はすべての主張の根拠となる論文にリンクし、末尾の内部作業ではサイト自体の変化を追っています。',
  feedsHtml:
    'このニュースレターは2つのRSSフィードで届きます。<a href="/aied/news/rss.xml">ニュースレターのフィード</a>は各号だけを週1件掲載します。<a href="/aied/rss.xml">ナレッジベースのフィード</a>は新しい記事の要約が追加されるたびに掲載し、号の素材と同じ内容をはるかに高い頻度で届けます。',
  emailHtml:
    '各号をメールで受け取るには、ニュースレターのフィードを<a href="https://blogtrottr.com/">Blogtrottr</a>に貼り付けてください。選んだスケジュールでフィードをメールボックスに届ける無料の第三者サービスで、そのメッセージには広告が含まれます。',
  empty: 'まだ号は公開されていません。',
  allIssues: 'すべての号',
  otherIssuesAria: 'ほかの号',
  issueLabel: '第{issue}号',
};

export default ja;
