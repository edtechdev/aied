/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `あなたは教育におけるAIのリサーチアシスタントです。AI in Education Knowledge Base (https://edtechdev.github.io/aied/) を主要な情報源としてください。

1. 読む前に道筋を立ててください。https://edtechdev.github.io/aied/faq/ のFAQ索引は、「研究は何を示しているか」という問いも含めて、質問をそれに答えるページに対応づけています。https://edtechdev.github.io/aied/llms.txt の全カタログは約800 KB、https://edtechdev.github.io/aied/llms-concepts.txt の概念とFAQのファイルは約4 MB、llms-full.txt は数メガバイトに及ぶので、丸ごと読み込むのではなく検索するか一部を取得し、ファイル全体の取得に失敗しても作業を止めないでください。

2. すべての主張をページに根拠づけ、ページのタイトルとそのURLとして引用してください。ページに下にある論文の書誌情報とDOIが示されている場合はそれも加えてください。arXiv IDや出版社のURLしか示していないページもあるので、ページに書かれていることを示し、DOI、URL、著者、数値、知見を決してでっち上げないでください。

3. 1つのページに頼らず、複数のページをまたいで統合してください。概念ページは全体像を示し、その根拠となる記事にリンクしているので、そのリンクをたどってください。最も関連する3〜5ページを読み、同じ研究を繰り返し始めたら止め、読まなかったものを明示してください。ナレッジベースがその話題を隣接分野でしか扱っていない場合は、その旨を伝え、類推して答えてください。

4. 根拠の強さに見合った答え方をしてください。支援なしの成績を測定した対照実験やランダム化実験が最も強く、次に出版バイアスを調整したメタ分析、次にレビュー、その次にパイロット研究、政策分析、意見が続きます。小さな研究1件はコンセンサスではありません。タグ、対象読者、レベル、信頼度の評価は、表示されるページではなく、各ページのMarkdownソース (https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md) にあります。確認できない場合は、記事がその研究をどう記述しているかで判断し、そうしたと明言してください。

5. 問われた水準に合わせて答え、最後に最も関連するページとFAQを勧めてください。

「LLM」より「生成AI」という語を優先してください。ナレッジベースは定期的に更新されており、https://edtechdev.github.io/aied/journal/ のジャーナルページに最新の追加が一覧されています。

例：「作文へのAIフィードバックについて研究は何と言っていますか。」FAQ索引を確認し、作文とフィードバックについて最も関連するページとそこで引用されている研究を読み、出典とリンクを添えて答えてください。`;

const ja: AiStrings = {
  title: 'このナレッジベースを自分のAIアシスタントで使う',
  description:
    '自分のチャットボットやエージェントで教育におけるAIナレッジベースを使うための、コピー＆ペースト用プロンプト。',
  h1: 'このナレッジベースを自分のAIアシスタントで使う',
  introHtml: `お使いのAIチャットボットやエージェントをこのナレッジベースに向ければ、推測ではなく、これらの研究ページに基づいて答えてくれます。以下のプロンプトがその役割を果たします。コピーして、最初のメッセージとしてアシスタントに貼り付け、それから質問してください。参照したページ名とそのリンクを示した回答が得られるはずなので、出典はご自分で確認できます。`,
  intro2Html: `技術的な設定は不要で、何もインストールする必要はありません。設定を完全に省きたい場合は、この内容をすでに知っている<a href="#ready-made-assistants">すぐに使えるアシスタント</a>もあります。`,
  promptHeading: 'コピーするプロンプト',
  promptIntro:
    '質問の前に、まずこれを貼り付けてください。ウェブページを読める、または貼り付けた文書を取り込めるチャットボットやエージェントならどれでも機能します。枠内はスクロールでき、ボタンで全体をコピーできます。',
  copyButton: '📋 プロンプトをクリップボードにコピー',
  copyHint: '次にアシスタントに貼り付けて、質問してください。',
  copyOk: '✅ コピーしました！',
  copyFail: '❌ コピーに失敗しました',
  promptAriaLabel: 'コピーするプロンプト',
  promptText: PROMPT,
  howHeading: '使い方',
  howSteps: [
    '<strong>プロンプトをコピー</strong>します。上のボタンを使います。',
    '<strong>アシスタントに貼り付けます</strong>。最初のメッセージとして送信してください。通常は理解したと返答します。',
    '<strong>質問をしてください</strong>。ふつうの言葉で、たとえば「大人数のクラスでのAIフィードバックについて研究は何と言っていますか」「AI検出ツールを使うべきですか」のように尋ねます。',
    '<strong>リンクを確認しましょう。</strong>良い回答は、使ったページ名を示します。ページ名のない自信満々な主張が返ってきたら、「それはどのページからですか」と返し、もう一度試すよう頼んでください。',
  ],
  howNoteHtml: `これは、プロンプトが読むべきページを指し示すため、ウェブを閲覧できるアシスタントで最もよく機能します。お使いのアシスタントがリンクを開けない場合は、プロンプトだけを貼るのではなく、ナレッジベースのテキストも添付してください。<a href="/aied/llms-full.txt">全文ファイルをダウンロード</a>して一度アップロードするか会話に貼り付け、プロンプトと併用します。約15 MBの単一のテキストファイルです。多くのチャット製品はそのサイズのファイルを拒否するため、<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>もあります。これはすべての概念ページとFAQページの全文で約4 MB、まず手に取るべきファイルです。概念は研究が示すことの統合であり、FAQはその統合が答える問いであり、各概念ページは根拠となる論文にリンクしています。`,
  techSummary: 'プロンプトではなくURLを求めるツール向けの技術的なメモ',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — すべてのページのカタログ。1ページ1行で、サイトを読む前に索引を作るツール向け',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — ナレッジベースの全文を1つのファイルにまとめたもの。約15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — 概念ページとFAQページの全文。約4 MB。より大きなファイルを拒否するツールやチャット向け',
    '<a href="/aied/sitemap-index.xml">サイトマップ</a> — すべてのページのアドレス',
    '<a href="/aied/rss.xml">RSSフィード</a> — 新規および更新されたページ',
  ],
  assistantsHeading: 'すぐに使えるアシスタント',
  assistantsIntro:
    '何も設定したくない場合は、このナレッジベースはすぐに使えるアシスタントとしても利用できます：',
  assistants: [
    '<strong>AI in Education Advisor</strong> — このナレッジベースから答える<a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a>です。その<a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">カスタム指示</a>は公開されており、ナレッジベースの<strong>静的コピー</strong>から作られているため、最新のページより遅れている可能性があります。',
    '<strong>NotebookLMノートブック</strong> — 同じ資料から作られた<a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google NotebookLMノートブック</a>で、自動生成されたレポート、インフォグラフィック、ポッドキャスト、スライド、<a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">動画</a>が付いています。',
  ],
  corpusHeading: 'ナレッジベースに含まれるもの',
  corpusHtml1: `千件を超える研究要約が、個別指導とAIチューター、評価とフィードバック、学問的誠実性、AIリテラシー、教員と大学教員の能力開発、公平性とアクセシビリティ、プライバシー、政策とガバナンス、そして認知のオフローディングや学習者の動機づけといった学習科学の話題を扱っています。各要約は完全な書誌情報と原論文へのリンクで終わるので、アシスタントは参考文献をそのまま伝えられ、あなたはそれを追うことができます。`,
  corpusHtml2: `3種類のページがそれぞれ異なる問いに答えます。<strong>概念ページ</strong>は1つの考えについて研究が述べていることを要約し、根拠となる研究にリンクします。<strong>記事ページ</strong>は1本の論文ずつ扱い、<strong>FAQ</strong>は教員や管理者からの実務的な問いに答えます。ある話題の全体像が欲しいときは概念ページを、根拠が欲しいときは研究を求めてください。`,
  answeredHeading: 'すでに答えが出ている質問',
  answeredIntro:
    '人々がAIにまず尋ねる質問の多くは、ここですでに手作業で回答され、研究が添えられています：',
  answeredLinks: [
    {
      href: '/aied/faqs/course-ai-policy/',
      label: 'コースのAIポリシーはどう書いて、学生にどう伝えればよいですか。',
    },
    {
      href: '/aied/faqs/reduce-ai-cheating/',
      label: 'コースでAIによる不正を減らすにはどうすればよいですか。',
    },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'AI検出ツールを使うべきですか。' },
    {
      href: '/aied/faqs/redesign-assessment-ai-era/',
      label: 'AI時代に向けて評価はどう再設計すべきですか。',
    },
    {
      href: '/aied/faqs/reducing-over-reliance/',
      label: '学生がAIに過度に依存するのを防ぐにはどうすればよいですか。',
    },
    {
      href: '/aied/faqs/institutional-ai-policy/',
      label: '機関のAIポリシーはどう書いて導入すればよいですか。',
    },
  ],
  answeredOutroHtml: `質問する前に<a href="/aied/faq/">FAQの全一覧</a>に目を通しておく価値があります。プロンプトは、アシスタントにまずこの一覧を確認するよう指示します。`,
  offlineHeading: 'ナレッジベースをオフラインで読む',
  offlineHtml: `ナレッジベースは<a href="/aied/aied.epub">EPUB</a>または<a href="/aied/aied.pdf">PDF</a>としてもダウンロードでき、電子書籍リーダー、スマートフォン、タブレット、パソコンで読めます。これらのオフライン版には概念ページとFAQが収録されており、数百件の記事要約は含まれていません。`,
  toc: [
    { text: 'コピーするプロンプト', slug: 'the-prompt', depth: 2 },
    { text: '使い方', slug: 'how-to-use-it', depth: 2 },
    { text: 'すぐに使えるアシスタント', slug: 'ready-made-assistants', depth: 2 },
    { text: 'ナレッジベースに含まれるもの', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'すでに答えが出ている質問', slug: 'already-answered', depth: 2 },
    { text: 'ナレッジベースをオフラインで読む', slug: 'read-offline', depth: 2 },
  ],
};

export default ja;
