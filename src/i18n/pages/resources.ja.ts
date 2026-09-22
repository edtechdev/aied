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

const ja: ResourcesStrings = {
  title: 'リソース',
  h1: '無料のツールとリソース',
  introHtml: [
    '教育におけるAIのための、厳選された<strong>無料のツール、コレクション、計測手法、形式</strong>のセットです。まず研究を読むのではなく、今日そのまま使えるものを集めています。多くは教育者、インストラクショナルデザイナー、図書館員、研究者が作ったもので、その多くはプロの開発者ではない人々がAIの支援を受けて作っています。',
    'ここにあるものがすべて対話型というわけではありません。ブラウザーツールやAIチューターに加えて、すぐに使えるプロンプトや「Gem」のライブラリ、授業活動のコレクション、ブリーフィング文書やポリシー文書、評価用の計測ツール、オープンなファイル形式もあります。各項目は短い要約で、誰が作ったか、どのような種類のものか、ソースコードが入手できるか、使うのにいくらかかるか、リンクが最後に確認されたのはいつかを示すページにリンクしています。',
    'どの項目も、このナレッジベースが管理していない外部サイトにリンクしており、リンクは定期的に再確認されています。各ページにはリンクが最後に確認された日付が表示されています。ツールが移転した、クローズドになった、あるいはここに載るべきなのに抜けている場合は、リポジトリでissueを立てるのが最も早い方法です。',
  ],
  empty: 'リソースはまだありません。',
  groupLabels: {
    software: 'ソフトウェア',
    'ai tutor': 'AIチューター',
    'agent skill': 'エージェントスキル',
    'prompt or gem library': 'プロンプトとGemのライブラリ',
    'collection of tools': 'ツールのコレクション',
    'collection of activities': '活動のコレクション',
    'assessment instrument': '評価用の計測ツール',
    'open format or specification': 'オープンな形式と仕様',
    'ebook or guide': '電子書籍とガイド',
    'case study collection': '事例集',
    'dataset or benchmark': 'データセットとベンチマーク',
  },
};

export default ja;
