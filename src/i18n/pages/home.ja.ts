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

const ja: HomeStrings = {
  title: 'ホーム',
  h1: '教育におけるAIナレッジベース',
  introHtml: `<strong>教育におけるAIナレッジベース</strong>へようこそ。これは<a href="/aied/concepts/ai-education/">教育における人工知能</a>に関する無料のパブリックドメインのリソースで、教育・学習・設計・運営に携わる方々に向けたものです。近年のオープンアクセス研究を、読んですぐに役立てられる短く構造化されたページにまとめています。作り方について少しお話しします。ページはAIエージェントが生成・更新し、サイト開発者が編集面で助言しています。すべての記述には根拠となる論文名を挙げているので、出典はご自分で確認できます。`,
  navHeading: 'サイトの見方',
  navHtml: `左のサイドバーにある分野ごとの索引を見れば、この分野がどのように整理されているかがわかります。すでに知りたいテーマがある場合は、<a href="/aied/search">ナレッジベース全体を検索</a>してください。記事ページは1本の論文を目的・手法・知見に凝縮し、完全な書誌情報と関連研究へのリンクを添えています。概念ページは1つの考えについて研究が述べていることを集め、その根拠となる研究にリンクしています。質問から始めたい場合は、<a href="/aied/faq">FAQ索引</a>が、コースのAIポリシーからAI検出ツールを使うべきかどうかまで、訪問者がまず尋ねる疑問を集めています。ツールから始めたい場合は、<a href="/aied/resources">リソースページ</a>に、そのまま使える無料のツール・コレクション・計測手法が並んでおり、それぞれ誰が作ったか、いくらかかるかが書かれています。上の概念マップは何と何がつながっているかを示しています。<a href="/aied/concepts/ai-education/">教育におけるAI</a>はその背後にあるマップのページで、概念を十数ほどの大きな分野にまとめています。`,
  chatHeading: 'ナレッジベースとチャットする',
  chatHtml: `ここにあるものはすべて機械可読なファイルとしても公開されていますので、お使いのAIチャットボットやエージェントをこのナレッジベースに向ければ、推測ではなく出典を示した答えを得られます。<a href="/aied/ai">プロンプトはこちら</a>にあります。新しいページは<a href="/aied/journal">ジャーナル</a>に掲載され、フォローしたい場合は<a href="/aied/rss.xml">RSSフィード</a>もあります。オフラインで読むなら、<a href="/aied/aied.epub">EPUB</a>または<a href="/aied/aied.pdf">PDF</a>をご利用ください。`,
  startingHeading: '対象読者別のおすすめの出発点',
  startingIntro:
    'このナレッジベースで最初に読むことをおすすめする概念を、以下にいくつか挙げます。',
  groups: [
    {
      id: 'essential-concepts',
      heading: '必須の概念',
      html: `<a href="/aied/concepts/ai-literacy/">AIリテラシー</a>、<a href="/aied/concepts/misconceptions/">AIに関する誤解</a>、<a href="/aied/concepts/agentic-ai/">エージェント型AI</a>、<a href="/aied/concepts/cognitive-offloading/">認知のオフローディング</a>、そして<a href="/aied/concepts/interpreting-and-applying-aied-research/">この研究をどう解釈し応用するか</a>。知見が支えられることと支えられないこと、そして1つの研究だけでは問いに決着がつかない理由を扱います。`,
    },
    {
      id: 'instructors',
      heading: '教員',
      html: `<a href="/aied/concepts/teacher-role/">変化する教える役割</a>、<a href="/aied/concepts/learning-design/">学習設計</a>、<a href="/aied/concepts/assessment/">評価</a>、<a href="/aied/concepts/feedback/">フィードバック</a>、<a href="/aied/concepts/academic-integrity/">学問的誠実性</a>、<a href="/aied/concepts/framing-ai-use-for-students/">AI利用の位置づけ</a>、<a href="/aied/concepts/reducing-ai-misuse/">不正利用の削減</a>。ご自身の教科におけるツール・根拠・事例については、<a href="/aied/concepts/discipline-specific-aied/">自分の専門分野におけるAI</a>をご覧ください。`,
    },
    {
      id: 'developers',
      heading: '開発者',
      html: `<a href="/aied/concepts/educational-technology-developers/">教育のための開発</a>、<a href="/aied/concepts/ai-technologies/">基盤となる技術</a>、<a href="/aied/concepts/intelligent-tutoring/">知的個別指導システム</a>、<a href="/aied/concepts/multimodal/">マルチモーダルAI</a>、<a href="/aied/concepts/student-modeling/">学習者モデリング</a>、<a href="/aied/concepts/pedagogical-llm-training/">教育向けにモデルを訓練し適応させること</a>。`,
    },
    {
      id: 'administrators',
      heading: '管理者',
      html: `<a href="/aied/concepts/administrator/">管理者の役割</a>、<a href="/aied/concepts/governance/">AIガバナンス</a>、<a href="/aied/concepts/educational-policy-ai/">機関のポリシー</a>、<a href="/aied/concepts/legal-issues-and-risks/">法的問題とリスク</a>、<a href="/aied/concepts/change-management/">チェンジマネジメント</a>。`,
    },
    {
      id: 'researchers',
      heading: '研究者',
      html: `<a href="/aied/concepts/research-methods-aied/">AIEDの研究方法</a>、<a href="/aied/concepts/theories-and-frameworks/">理論と枠組み</a>、<a href="/aied/concepts/ai-ed-evaluation/">教育におけるAIの介入を評価する</a>、<a href="/aied/concepts/educational-measurement/">教育測定</a>、<a href="/aied/concepts/learning-gains/">学習効果の測定</a>、そして<a href="/aied/concepts/limitations-in-aied-research/">この根拠基盤に共通する限界</a>。`,
    },
  ],
  statsHeading: 'ナレッジベースに含まれるもの',
  statsIntro:
    'ここにあるページにはすべて日付が付いており、新しいオープンアクセス研究が発表・レビューされるにつれてナレッジベースは成長します。以下の件数は現在の内容から読み取ったもので、日付は最も新しいページ更新日です。',
  conceptMap: {
    title: '教育におけるAIの概念マップ',
    desc:
      '教育におけるAIを中心に据え、12の最上位概念：' +
      'モデリング、学習、公平性、フィードバック、AIリテラシー、評価、専門分野、教授法、' +
      '倫理、技術、検証、研究をつないだ放射状のマップです。任意のノードを選ぶと、そのページが開きます。',
    navLabel: '教育におけるAIの概念',
    center: '教育におけるAI',
    nodes: {
      'student-modeling': 'モデリング',
      'learning-theories': '学習',
      'equity-in-ai-education': '公平性',
      feedback: 'フィードバック',
      'ai-literacy': 'AIリテラシー',
      assessment: '評価',
      'discipline-specific-aied': '専門分野',
      pedagogy: '教授法',
      ethics: '倫理',
      'ai-technologies': '技術',
      'ai-ed-evaluation': '検証',
      'research-methods-aied': '研究',
    },
  },
  toc: [
    { text: 'サイトの見方', slug: 'navigating-the-site', depth: 2 },
    { text: 'ナレッジベースとチャットする', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: '対象読者別のおすすめの出発点', slug: 'starting-points', depth: 2 },
    { text: '必須の概念', slug: 'essential-concepts', depth: 3 },
    { text: '教員', slug: 'instructors', depth: 3 },
    { text: '開発者', slug: 'developers', depth: 3 },
    { text: '管理者', slug: 'administrators', depth: 3 },
    { text: '研究者', slug: 'researchers', depth: 3 },
    { text: 'ナレッジベースに含まれるもの', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default ja;
