---
title: "Amplify GenAI"
created: "2026-11-12T11:25:00-05:00"
updated: "2026-11-12T11:25:00-05:00"
type: resource
summary: "ヴァンダービルト大学による MIT ライセンスのエンタープライズ生成 AI プラットフォーム。機関自身の AWS アカウントに展開し、ローカル文書に基づくカスタムアシスタント、検索拡張された回答、組織内での共有、メッセージ単位までのコスト計測を提供します。"
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/amplify-genai
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

Amplify GenAI は、商用アシスタントの全学ライセンスとは逆の賭けです。機関がプラットフォーム自体を、自らの Amazon Web Services アカウントの中で運用し、使った分だけ支払います。ヴァンダービルト大学が自組織のために作り、MIT ライセンスで三つのリポジトリとして公開し、今は席単位のエンタープライズ契約の代替として他の組織に提供しています。高価なのは席数ではなくモデルのほうであるべきだ、という主張です。

## できること

利用者は文書をアップロードするかデータソースに接続してカスタムアシスタントを作り、アシスタントは一般的な学習だけに頼らず、その資料に対する[[rag|検索拡張生成]]で答えます。アシスタントは組織内で共有でき、一つの会話につなげられ、プロンプトテンプレートを与えられます。プラットフォームは PowerPoint や Word ファイル、図、可視化も生成します。管理者には共有サービスに必要なものが揃います。メッセージ単位までのコスト計測、利用者ごとの上限、フォルダとワークスペース、SSO で、すべて機関が管理する展開の中にあります。

[[higher-ed|大学]]にとって最も重要な設計上の判断は課金モデルです。ヴァンダービルト大学は、パイロット利用者 1,300 人で AWS を含む利用者あたり月約 \$3、その半数はトークン費用が月 \$1 未満だったと報告しています。これは同大学がケーススタディとして示す数字で、監査済みのベンチマークではありません。従量課金は、少数の利用者が作業の大半を行うキャンパスに向いており、それは AI 導入の普通の形です。そして財務部門の問い（「学生一人あたりいくらか」）を、契約書ではなくログから答えられるようにします。

## 対象となる人

すでに AWS でワークロードを運用し、商用エンタープライズアシスタントに代わる、コミュニティに支えられた選択肢を求める中央 IT と CIO オフィス。コース資料に基づくアシスタントを、ベンダーの消費者向け製品に送らずに必要とする教員。人々がモデルで何をしているかを一か所で見たい機関。機関自身のアカウントに展開されるため、データの所在という問いは、ベンダーの約束ではなく展開そのものが答えます。

## 注記と注意点

ライセンスは無料ですが、運用は無料ではありません。機関が AWS とモデル提供者に支払います。モデルの選択は Amazon Bedrock（Anthropic、Mistral）または OpenAI と Microsoft Azure を通じ、自前のローカルモデルの運用は実装されていません。プロジェクトは個別の展開を支援できないと明言し、組織を商用パートナーに紹介しています。したがって現実的なコストには職員か委託先が含まれます。三つのリポジトリ（フロントエンド、バックエンド、インフラ）からなる展開で、星の数は数千ではなく数十であり、上のコスト比較は対照研究ではなくヴァンダービルト大学自身の経験です。推論を自前のハードウェアに留めたい機関は [MindRouter](/aied/resources/mindrouter/) も見て、二つを並べて読むとよいでしょう。Amplify はベンダーモデルの上のアプリケーション層、MindRouter は自前の GPU の上のゲートウェイです。

## 関連する概念

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
