---
title: "Moodle AI テキスト問題タイプ"
created: "2026-11-12T11:31:00-05:00"
updated: "2026-11-12T11:31:00-05:00"
type: resource
summary: "自由記述の解答を、問題ごとのプロンプトと任意の採点基準に照らして大規模言語モデルで採点する、オープンソースの Moodle 問題タイプ（GPL v3）。OpenAI、Azure、またはセルフホストの Ollama モデルを使い、AI のフィードバックを人間の採点者に示します。"
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/moodle-qtype-aitext
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

ほとんどの AI クイズ連携は、すべての解答を固定の採点呼び出しに送ります。この Moodle 問題タイプは逆を行きます。ルーブリックを教員が書くのです。各問題には、応答をどう評価するかをモデルに伝える**プロンプト**と、点数の与え方を記述する任意の**採点基準**が付きます。たとえば「過去形で一文を書く」問題では、誤りなしで 10 点、文法が崩れていれば 0 点、つづりの誤りごとに 1 点減点、と指定できます。モデルは点数と[[feedback|フィードバック]]を返し、教員は手作業で採点するときにそのフィードバックを解答の横で見られます。

## できること

Moodle の任意のクイズに AIText 問題を追加し、プロンプトと採点基準を書き、編集フォーム内の AJAX **プロンプトテスター**でプロンプトを試します。プレビューの試行を繰り返す必要はありません。採点は二つのコンパニオン問題ビヘイビア（即時と遅延）を通じて実行され、これらは問題タイプと一緒にインストールする必要があります。これにより AI 採点は Moodle の中核ビヘイビアから切り離されます。旧来の `interactivecountback` ビヘイビアを使った既存の試行は、アップグレード時に移行されます。モデルに到達できない場合、採点はエラーではなく縮退するので、試行は失われません。問題がネイティブのクイズタイプなので、結果は他の項目と同じように成績表に入ります。コースチームが[[automated-assessment|自動採点]]をデモではなくパイロットとして扱うには、それが必要です。

この設計は、[[ai-feedback-quality|フィードバックの質]]が決まる場所にルーブリックを置きます。ベンダーの既定値ではなく、教員が書くプロンプトの中です。それがこのツールの誠実な使い方であり、基準を点検し改訂できます。ただし、質の上限がルーブリックになることも意味し、曖昧なプロンプトは曖昧な採点を生みます。機関は、[[formative-assessment|形成的評価]]が依存する低リスクで頻繁な確認にこれを使います。そうでなければ、誰かが夜に短い解答を 40 本読むことになる場面です。

## 対象となる人

すでにサイトを運用している Moodle 管理者と開発者、別のプラットフォームや商用ライセンスなしで AI 採点を望む教員、統制可能な採点パイプラインを研究に必要とする研究者。Moodle 4.5 以降と、モデルへの API アクセスが必要です。Moodle の AI サブシステムを通じた OpenAI か Azure、または Local AI Manager を通じたセルフホストの Ollama で、後者は学生のテキストをローカルインフラに留めます。プラグインは Marcus Green がメンテナンスしており、Moodle プラグインマーケットプレイスに掲載され、このページの確認時点で 33 のスターと 36 のフォークがありました。

## 注記と注意点

GPL v3 以降のオープンソースですが、無料は運用が無料という意味ではありません。モデル API の費用は誰かが払い、採点の質はモデルの選択とプロンプトの設計に依存します。リモートの提供者を使うと自由記述の解答は Moodle サーバーを離れるので、何を送ってよいかは機関のデータ契約が決めます。学生の作業を外に出せないサイトのために、セルフホストの Ollama 経路があります。リポジトリは公開された精度や一致の研究を示していないため、LLM の採点が人間の採点と同等だと仮定して採用すべきではありません。成績に重みを持たせる前に、[[assessment-validity|妥当性]]を人間の評点に対して現場で確立する必要があります。コンパニオン問題ビヘイビアは必須の依存関係で、問題タイプだけをインストールすると問題は採点できません。

## 関連する概念

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
