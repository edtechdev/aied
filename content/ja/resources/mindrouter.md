---
title: "MindRouter"
created: "2026-11-12T11:29:00-05:00"
updated: "2026-11-12T11:29:00-05:00"
type: resource
summary: "アイダホ大学による Apache-2.0 の推論ゲートウェイ。vLLM と Ollama の GPU ノードからなるキャンパスクラスタを、OpenAI 互換の単一 API の背後に置き、公平シェアのスケジューリング、利用者ごとのトークンクォータ、SSO、監査ログ、GPU とエネルギーのリアルタイム監視を加えます。"
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/mindrouter
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

キャンパスの AI 議論は、どのモデルを買うかから始まり、より難しい問いの手前で止まります。どこで動かすのか、誰が計量するのか、誰がログを見られるのか。MindRouter はその二つ目の問いへの答えです。異種の[[llm|LLM]]サーバー群——機関が所有する GPU 上の vLLM と Ollama ノード——の前に置かれるセルフホスト型ゲートウェイで、OpenAI、Anthropic、Ollama の方言を話す一つの API を公開し、それらの間を変換して既存のクライアントコードを動かし続けます。

## できること

ツールをベンダーのエンドポイントではなくゲートウェイに向けます。その背後で MindRouter は、共有展開に必要な部分を担います。重み付きデフィシット・ラウンドロビンによる公平シェアのスケジューリング、利用者ごとのトークンとリクエストのクォータ、役割ベースのアクセス（Azure AD/Entra、Google、任意の OIDC プロバイダー、SAML 2.0 による SSO は任意）、プロンプト、応答、成果物の完全な監査ログです。GPU のサイドカーエージェントがノードごとの利用率、メモリ、温度、電力を報告するので、管理者はリクエストあたりのエネルギーコストを見て、保守の際にバックエンドを穏当にドレインできます。チャットにとどまらず、埋め込み、画像理解、画像と動画の生成、音声合成と音声認識、文書 OCR を覆い、コーディングアシスタント向けの MCP サーバーとエージェントスキルも同梱します。

大学が気にする理由は、プロジェクトが名指しするものです。[[institutional-ai-infrastructure|機関の AI 主権]]。プロンプトと文書は第三者クラウドを通らず、機関が運用するインフラに留まります。これは教員評議会や[[privacy|プライバシー]]担当にとって、ベンダーとのデータ処理契約より弁護しやすいものです。その主張が成り立つかは、機関に GPU、電力、職員があるかによります。ゲートウェイはローカルホスティングを管理可能にしますが、安くはしません。

## 対象となる人

既存の GPU 容量を持つ研究計算部門と中央 IT、教員と学生の利用を一か所で計量したい教育学習センター、ホスト型エンタープライズプラットフォームと自前の推論を天秤にかける管理者。Docker Compose での展開で、SSO 設定とカスタムブランディングが文書化されており、アイダホ大学でメンテナンスされており、作者は PEARC '26 で発表しました。2026 年 11 月時点で 22 のスターと 3 のフォークがあります。

## 注記と注意点

Apache-2.0 で無料かつオープンソースですが、コストは消えずに移ります。ハードウェア、電気代、クラスタを運用する職員の時間です。インフラの基準ではこのソフトウェアは若く、貢献者は 3 人、起源は単一の機関、リリースは数百のタグで数えられています。だから大学は、モデルへの唯一の経路としてではなく、既存サービスと並べてパイロットすべきです。実際のキャンパス負荷におけるスケジューリングとクォータの挙動について、公開された評価はリポジトリにありません。PEARC の論文が、著者自身の説明を探す場所です。

## 関連する概念

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
