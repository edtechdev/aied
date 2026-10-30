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

const ja: FaqStrings = {
  title: 'FAQ',
  h1: 'よくある質問',
  introHtml:
    'このセクションでは、<strong>教育におけるAI</strong>についてのよくある質問に答えます。AIが教育と学習にどのような影響を与えるかについて研究が述べていること、そして教育者・教員・インストラクショナルデザイナーがその根拠を実践にどう活かせるかを扱います。各回答は、このナレッジベース全体で要約された研究の知見を凝縮し、質問を関連する概念や記事につないで、さらに深く読めるようにしています。',
  assistantHtml:
    'ここに答えのない質問がありますか。その場合は<a href="/aied/ai">このナレッジベースを自分のAIアシスタントで使う</a>ページを使って、ご自分のAIアシスタントに尋ねてください。このページでは、エージェントを全カタログに向けて、根拠に基づいた出典付きの回答を得る方法を紹介しています。',
  empty: 'FAQはまだありません。',
  sectionHeadings: {
    "Start here": "まずはここから",
    "Course and institutional policy": "コースと機関の方針",
    "Designing courses and activities": "コースと活動の設計",
    "Assessment, feedback and integrity": "評価、フィードバック、誠実性",
    "How students learn and use AI": "学生はAIをどう学び使うか",
    "Particular learners, access and wellbeing": "多様な学習者、アクセシビリティ、ウェルビーイング",
    "Careers and AI literacy": "キャリアとAIリテラシー",
    "Building and evaluating educational AI": "教育AIの構築と評価",
    "Research practice": "研究実践",
  },
  sectionBlurbs: {
    "Start here": "どの立場の方でも、個別の質問の前に読む価値のある二つの大きな問いです。",
    "Course and institutional policy": "学生が読むルールを書く教員と、プログラム全体でそのルールを定める管理者や教員開発担当者のために。",
    "Designing courses and activities": "課題、学期、オンラインコースのどこにAIを入れるかを決めるすべての人と、AIが返してくれるはずだった時間を取り戻したい教員のために。",
    "Assessment, feedback and integrity": "証拠が最も鮮明で、その帰結が学生の成績記録に直接及ぶため、最も大きなまとまりになっています。",
    "How students learn and use AI": "学生が実際に何を得て何を失うおそれがあるのか、学びをどう学生の手元に残すのかについての問いです。",
    "Particular learners, access and wellbeing": "教室に実際にいる学習者に合わせて設計を調整する教員と支援スタッフ、そしてそこにいない学習者を考える管理者のために。",
    "Careers and AI literacy": "「これは何のためにあるのか」と尋ねる学生に答える、カリキュラム設計者とプログラム責任者のために。",
    "Building and evaluating educational AI": "チューター、シミュレーション、プラットフォームを実際のコースに導入する開発者、インストラクショナルデザイナー、研究者のために。",
    "Research practice": "この分野で研究を報告し、査読し、計画する研究者のために。",
  },
};

export default ja;
