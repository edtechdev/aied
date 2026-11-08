---
title: "Public AI Libraries"
created: "2026-11-05T02:58:35-05:00"
type: resource
summary: "米国の公共図書館に共有の Public AI ワークステーションを設置する2025〜2026年の全国パイロット事業です。チャット、画像・音楽・動画の生成、コード用IDE、教育ガイドを備え、利用者ごとにプライベートなアカウントが用意されます。"
url: https://libraries.publicai.co/
source_code: https://github.com/forpublicai/libraries-kiosk
author: "Public AI"
author_url: https://libraries.publicai.co/
resource_type: [software, collection of tools]
access: [freemium]
license: "GPL-3.0 (kiosk site); MIT (inference utility)"
last_verified: "2026-11-05"
foundations: [ai-literacy]
technology: [llm, generative-ai]
ethics: [digital-divide, equity-in-ai-education]
level: [adult learning]
audience: [librarians, administrators, learners]
confidence: high
updated: "2026-11-07T20:36:28-05:00"
translation_of: "resources/public-ai-libraries"
source_updated: "2026-11-05T07:06:00-05:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Public AI Libraries** は、米国の[[libraries|公共図書館]]に、キオスクと呼ばれる共有のAIワークステーションを設置する2025〜2026年の全国パイロット事業です。米国議会図書館、Metagov、Public Knowledgeの提携に、ユタ州とニュージャージー州の州立図書館が加わっています。プログラムのページを最後に読んだ時点では、5州の8館がキオスクを運用していました。その前提は訓練ではなく供給です。個々の利用者が買えないアクセスを[[digital-divide|図書館が提供する]]という、誰かが助けられる常駐スタッフのいる場所です。

## できること

各キオスクは、図書館がすでに所有するコンピューター上で動くクラウドホスト型のワークステーションです。調査、学習、一般的な質問のためのチャットアシスタント、画像・音楽・動画の生成、コーディングや小規模なアプリ制作のためのオンラインIDE、インタラクティブな学習ガイドと図書館が審査した教材を備えた教育エリアを提供します。利用者ごとに別のアカウントが与えられるため、共有端末上でも作業と履歴はプライベートです。プログラムは、利用者の会話や生成されたコンテンツを自社プラットフォームに保存しないと述べています。

## 対象となる人

キオスクを設置したい公共図書館（プログラムはパイロットサイトの応募を受け付けています）と、それを利用する利用者を支えるスタッフです。公開されているユースケースは、求職活動、事業計画、課程の学習、創造的なプロジェクトです。コードは、公共の利益のためのAIサービスを構築する人にとっても読む価値があります。プログラムのサイトとキオスクのフロントエンドは [libraries-kiosk](https://github.com/forpublicai/libraries-kiosk) で GPL-3.0、チャットサービスは[[open-source|オープンソース]]の Public AI Inference Utility（MIT）で [chat.publicai.co](https://github.com/forpublicai/chat.publicai.co) にあり、誰でも無料アカウントで使える Open WebUI の配備です。

## 注記と注意点

- 参加する図書館は、**キオスク1台の設置につき年間1,000ドル**を負担します。パイロット自体は応募したサイトに限られます。
- プライバシー声明はプログラムの主張であり、監査された発見ではありません。図書館は、自らのデータ処理契約において保存期間と子どもの安全に関する条件を確認すべきです。
- ロードマップの第2段階と第3段階——図書館が地域のアーカイブを取り込み、その結果生じるシステムを統治できるようにする——は、出荷済みではなく計画段階です。

## 関連する概念

- [[libraries]]
- [[digital-divide]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[open-source]]
- [[lifelong-learning]]
- [[llm]]
