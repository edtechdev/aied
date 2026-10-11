---
title: "Skills for Real Engineers"
created: "2026-10-10T22:03:49-04:00"
updated: "2026-10-10T22:03:49-04:00"
type: resource
summary: "Matt Pocock による小規模で合成可能なエージェントスキルのオープンソースコレクション。複数セッションにまたがる教育スキル、容赦ない問いかけスキル、エージェントが従える文書の書き方の指針を含みます。"
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

**Skills for Real Engineers** は、Matt Pocock が公開しているエージェントスキルのディレクトリです。Claude Code、Codex、その他のエージェントにインストールされる小規模で合成可能な指示ファイルであり、丸ごと採用されるのではなく、書き換えて使うことを前提に書かれています。コレクションの大部分はソフトウェア開発向けですが、いくつかのスキルはコードではなく教育と問いかけのために作られた教育用ツールです。

最も明確な例は `teach` で、これは複数のセッションにまたがって動作し、作業ディレクトリを状態を持つ教育用ワークスペースとして扱います。そのため学習者の進捗と未解決の問いは、毎回最初からやり直すのではなく会話をまたいで保持されます。`grill-me` とその基盤となる `grilling` プリミティブは、すべての分岐が解消されるまで計画についてユーザーを容赦なく問い詰めます。これは会話の雰囲気ではなく、再利用可能な手順としての [[socratic-method|ソクラテス式問答]]です。`wait-what` は、メッセージが伝わらなかった瞬間に、欠けている文脈とともに平易な言葉で言い直して対応します。これは、説明が 1 回目に外れたときに誰もが見覚えのある動きです。`writing-for-agents` は、[[prompt-engineering|エージェント]]が従える文書の書き方を扱っており、[[pedagogical-agent|AI]] コース教材のための指示の書き方の現在の実践的な形です。`to-questionnaire` は意思決定を、答えられる人向けの質問票に変換し、`handoff` は会話を別のエージェントが引き継げる文書に圧縮し、`wizard` は人にしか実行できない手順のための対話型ウォークスルーを生成します。

## 導入前に知っておくべきこと

すべてが MIT のもとで [[open-source|オープンソース]]であり、地域の [[ai-literacy|AI リテラシー]]や [[self-directed-learning|自主学習]]の出発点として無料で使えます。採用の規模は大きく動きも速く、2026 年 9 月の確認時点でおよそ 270,000 スターと 23,000 フォークがあり、最新のコミットは 2026 年 9 月 18 日です。注意点は範囲です。これらのスキルは [[human-ai-collaboration|エンジニア]]の作業環境を前提としており、エンジニアリング、生産性、非推奨、制作中のカテゴリに整理されているため、エントリの中には明示的に未完成または退役済みのものがあり、README はニュースレター登録の窓口も兼ねています。教育と問いかけのスキルを応用可能な部分と捉え、学生の前に置く前に必ず書き換えることを想定してください。

## 関連する概念

[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
