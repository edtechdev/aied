---
title: "Code Viva"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "プログラミングの授業の全学生に対して、口頭によるコード弁明の筆記・時間制限つき版を実施する無料のブラウザツール。根拠を引用したスコア案を提示し、教員が承認します。"
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

Code Viva は、プログラミングの授業のすべての学生に対して、口頭試問（[[oral-assessment|viva]]）の筆記・時間制限つき版を、教員が同席することなく 1 人あたりおよそ 15 〜 20 分で実施します。学生が提出したコードとコミット履歴を読み、その学生自身の関数、名前、コミットについて 4 〜 6 個の質問を書き、各学生に回答用の個人リンクを渡します。

## できること

提出物は Gradescope のエクスポート、Canvas のダウンロード zip、学生ごとにフォルダを分けた zip、あるいは読み取りトークンを用いた GitHub Classroom から取り込みます。教員はセッションの長さ、質問数、締め切りを設定し、延長時間を 1.25 倍から 3 倍で指定し、リンクを送る前に生成された質問を読んだり、編集したり差し替えたりできます。質問は、再帰の基底ケース、境界のガード、データ構造の選択、意味の分かりにくい変数名、規模とトレース、課題仕様書からの一文、そして一括コミットや深夜のコミットといったコミットのパターンを扱います。回答は応答コードとして返り、レビュー画面では各トランスクリプトの横に、根拠となる文を添えた 0 〜 3 のスコア案が示され、さらに会話が必要とされる度合いの高い順に並んだフラグのキューが表示されます。結果は CSV に書き出せ、11 のデモコースで架空のデータを用いて一連の流れを試せます。

## 対象となる人

学生が自分のコードを説明できるという証拠を求め、全員と話すより少数の学生と話したいと考えるプログラミング授業の教員です。コミットに関する質問によって、これは [[process-oriented-assessment]] の一形態になります。

## 注記と注意点

すべてがブラウザ内で動きます。コースは JSON エクスポートとともにローカルストレージに置かれ、質問はブラウザがサーバーに送らないリンクの部分を伝わり、回答は学生が送ると選んだコードとしてのみ返るため、学生のデータが第三者に届くことはありません。質問生成器はモデル駆動ではなくルールベースです。ツール自身の説明によればコードリーダーはヒューリスティックであるため、変わった書式やマクロは関数を見落としうるし、スコアがコードの理解ではなく語彙の知識を評価してしまうこともあります。だからこそスコアは教員が承認する案であり、評価の重みを低く保つよう勧めています。ライセンスもソースリポジトリも公開されておらず、リンクが質問を運ぶため数キロバイトになり、学習管理システムのメッセージ欄で折り返されるほどの長さになります。

## 関連する概念

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
