---
title: "Clarity"
created: "2026-10-10T22:07:00-04:00"
updated: "2026-10-10T22:07:00-04:00"
type: resource
summary: "「読み手に見合う書き方」の 18 のルールを、原稿の下書き・書き直し・レビューというモードに変える、オープンソースの Agent Skill とローカル動作のブラウザエディタ。"
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Clarity** は、Agent Skill とブラウザエディタを組み合わせたもので、どちらも「読み手の時間に報いる書き方」の 18 のルールを中心に作られています。このスキルは `npx skills add addyosmani/clarity` で Claude Code や Codex のようなコーディングエージェントにインストールでき、3 つのモードで動作します。review モードは下書きを批評してファイルには手を加えず、rewrite モードは下書きをその場で書き直し、interview モードはまず執筆者に質問し、その答えから共に書いていきます。執筆者が受け取る [[feedback|フィードバック]] は、スタイルよりもまず中身に向けられています。ルールは「この文章は誰のためにあるか、その人はすでに何を知っているか」を問い、トピックではなく主張を、抽象ではなく具体を求め、「埋め草（padding）」を語彙の問題ではなく、文章の目的が分かっていないことの表れとして扱います。

ブラウザエディタはページ内でローカルに動作し、下書きをアップロードしません。機械が書いたような文章の癖、読みやすさ、そして内容の欠落を報告するため、[[generative-ai|生成 AI]] が作った文章を読み手に届ける前に点検するのに役立ちます。このプロジェクトは、目的が [[ai-detection|AI 検出]] をかいくぐるよう設計された文章ではなく、読み手に「著者本人のもの」と分かる文章であり続けることであると明言しています。AI 支援による [[writing-education|ライティング]] について方針を決める教員にとって、この区別は見覚えのあるものです。

## 導入前に知っておくこと

リポジトリには評価プロトコル、`samples/` 内のビフォーアフターの見本、そしてスキルの背後にあるリファレンスファイルが公開されているため、レビューする人は主張を鵜呑みにせず、ルールがどう振る舞うかを確かめられます。ここで紹介しているページは、測定された結果を繰り返し述べることはしません。著者は Addy Osmani、ライセンスは MIT で、特定の機関の製品ではなく独立した作品です。若く活発なプロジェクトで、2026 年 8 月の開始以降 54 コミット、3 回のリリース（最新は同年 9 月のバージョン 0.2.1）、2026 年 9 月時点でスターは約 250、変更を送り込んだ貢献者は 3 名です。スキルの指示は、読み手がすでに使っているエージェントの中に読み込まれるため、[[prompt-engineering|プロンプト設計]] に関するいつもの注意が当てはまります。批評の質は、渡された下書きの質に依存します。

## 関連する概念
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
