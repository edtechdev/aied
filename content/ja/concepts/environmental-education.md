---
title: 環境教育
created: "2026-10-10T22:31:14-04:00"
updated: "2026-10-10T22:31:14-04:00"
type: concept
foundations: [ai-education]
pedagogy: [inquiry-based-learning, situated-learning, critical-pedagogy]
technology: [generative-ai, llm, open-source]
ethics: [sustainability, ethics, global-south]
institutions: [educational-policy-ai, governance]
discipline: [environmental education]
confidence: medium
translation_of: concepts/environmental-education
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "英語ページの自動翻訳です。母語話者による確認はまだ行われていません。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*英語ページの自動翻訳です。母語話者による確認はまだ行われていません。*

## 検討すべき問い

- 「AI と環境教育」は、まったく異なる二つのことを意味しえます。気候と持続可能性について*教える*ために AI を使うことと、教室で AI を*使うこと*の環境的コストを減らすことです。あなたの機関ではどちらを耳にするでしょうか——そしてどちらに予算の項目が付いているでしょうか。
- 大学が、学生のノートパソコン一台一台でエネルギー集約的な[[llm|大規模言語モデル]]を使って気候科学を教えるとしたら、それは環境教育を進めたことになるでしょうか、それとも損なったことになるでしょうか。答えが「両方」になるために、何が真でなければならないでしょうか。
- [[ai-assisted-inquiry-ssi-climate|一つの実験]]は、AI に支援された探求が、探求のみに比べて気候に関する意思決定を改善することを見出しました。その向上は最も弱い段階に集中していました。あなたは自分の教室で AI に支援された気候の単元を信頼するでしょうか、そしてまず何を見る必要があるでしょうか。
- [[ai-education|AIED]]の論文で、計算資源や炭素のフットプリントを報告しているものはほぼありません。報告されない[[sustainability]]の影響は、研究上の問題でしょうか、調達上の問題でしょうか、教育上の問題でしょうか、それともそのいずれでもないでしょうか。

## はじめに

**環境教育**は、生態系、気候、人間と環境の相互依存についての学習者の理解を発達させるとともに、それに基づいて行動するための性向と能力を育てます——制度的には持続可能な開発のための教育（ESD）や「グリーン教育」として枠づけられることが多いものです。AI 教育の文脈では、この用語は、コーパスが必ずしも名指しせずに出会う緊張を帯びています。すなわち、**環境教育のための道具としての AI**（生成的ツールで気候と持続可能性の内容を教えること）と、**AI 自身の環境的フットプリント**（機関が展開するモデルの炭素、水、エネルギーのコスト）です。これらは異なる証拠、行為者、救済策を持つ異なる問いです。それらを混同することは——いくつかの論文やほとんどの戦略文書がそうしているように——誰が何について責任を負うのかを言えなくしてしまいます。（[[daniel-ai-sustainability-scoping-review-2026]]）（[[aied-carbon-footprint-reporting]]）

## 「AI を用いた環境教育」と呼ばれる二つのもの

- **環境教育のための AI**——環境に関する内容を教え、持続可能性の意識を育て、グリーンスキルを支えるために AI を用いること。この半分には、フレームワーク、[[teacher-role|教員]]調査に基づく研究、そして一つの教室実験があります。
- **教育における AI のフットプリント**——科目に関係なく、教育に用いられるモデルとインフラの排出と資源使用。この半分には、報告の実践についての一つのレビュー、工学上の一つの[[benchmark|ベンチマーク]]、そして一つの小さなインターフェース研究があります——そして、環境教育のために用いられる AI のフットプリントについては何もありません。

第三の、より弱い流れは、「持続可能な学習」を環境的なものではなく[[pedagogy|教育学的]]な性質として扱います。すなわち、[[cognitive-offloading|認知的オフローディング]]によって短絡されるのではなく、持続し転移する学習です。それは持続可能性の語彙を共有しますが、環境的な主張ではありません。（[[zhu-e3-hot-embodied-intelligence-sustainable-learning]]）

## AI による環境と気候のトピックの教育

最も強い証拠は、気候変動を社会科学的論争問題として用いた三群の準実験です。構造化された[[inquiry-based-learning|探求]]の課題の中で AI のパートナーと働いた学生は、探求のみの仲間（d = 0.69）と従来の指導（d = 1.88）を意思決定のルーブリックで上回り、最も大きな向上は、学生が最も弱い状態で入った段階——監視と適応的な管理、そして代替案の生成——に見られました。AI 条件は、探求の*代替ではなく追加*であり、データの収集と分析は群をまったく区別しませんでした。これは、AI が証拠の収集ではなくトレードオフについての推論を支えたことを示唆しています。（[[ai-assisted-inquiry-ssi-climate]]）

[[curriculum-design|カリキュラム]]の水準では、AI-SEE フレームワークは、持続可能性のモジュールを後付けするのではなく、四つの柱（知能駆動、グリーンによる力づけ、責任による主導、実践との統合）にわたって AI を[[engineering-education|工学のカリキュラム]]全体に統合します。144 名の学生によるパイロットは、個人的、学問的、職業的、社会的な水準にわたって、持続可能性の意識と行動的な[[student-engagement|関与]]の向上を報告しました。著者たちは、これが単一機関の、自己報告による、単一時点のインタビュー証拠であり、中国の一つの交通プログラムからのものであると注意しています。（[[liu-ai-sustainable-engineering-education-2026]]）

二つの小さな研究が設計面を扱っています。持続可能な開発の教育学の制約のもとでの AI に支援された[[learning-design|指導設計]]は、ありそうにないほど大きな効果（d = 2.80、28 チーム、対照群なし）で、養成段階の教員の授業計画を改善しました。別に、122 名の現職教員を対象とした構造方程式の研究は、科学とグリーンエネルギーの課題における*実践的な* AI の利用と、ESD に沿った教材開発への参加が AI 統合能力を予測する一方、抽象的な AI の知識と態度は予測しないことを見出しました——ただし、二分法的な[[self-report-measures|質問紙]]と弱い知識の構成要素が、その及ぶ範囲を制限しています。（[[talebzadeh-ai-green-education-2026]]）（[[riandi-teacher-ai-green-energy-education-2026]]）

## 教育における AI の環境的フットプリント

この半分は、コーパスが最も薄いところです。AIED 2025 の proceedings の全 396 本の論文のレビューは、「開示なき LLM の採用」を見出しました。ほとんどのプロジェクトは[[llm|LLM]]を用い、85 本の論文がいかなる計算コストも報告し、わずか 57 本だけが環境への影響に言及しました——互換性のない指標を用いているため、この分野は自分自身の証拠を集計できません。著者たちは、環境コストを報告しないこと自体が[[ethics|倫理的]]な懸念であると論じ、独自モデル向けの二パラメータ FLOPs 推定を伴う CodeCarbon という[[open-source|オープンソース]]の方法を提案しています。（[[aied-carbon-footprint-reporting]]）

学習者側では、ライブの LLM 利用中の遅延と炭素のトレードオフを露出するエコフィードバックのインターフェースが、コンピューティング倫理のコースの 89 名のコンピュータサイエンスの学部生を対象に研究されました。学生は低遅延のやり取りのおおよそ 45% で低炭素モードを選びましたが、高遅延では 5% 未満でした。そして持続可能性の意識はその選択を有意に高めました。標本は小さく、技術的に異常に通じた集団ですが、それは、フットプリントの情報が学習者を動かすということについてのコーパスで唯一の直接的な証拠です——そしてそれは、拘束条件が価値観ではなく忍耐であることを示唆しています。（[[llm-environmental-impact-student-usage-2026]]）

緩和の証拠は、単一の民生用 GPU（12 GB VRAM）上に、オープンにライセンスされた内容とともに設置されたオンプレミスの[[cs-education|CS]]ナレッジベースアシスタントから来ています。最も良い場合でクエリあたり 1.8 mWh——30 名のクラスがそれぞれ 10 件のクエリを送る場合、およそ 0.54 Wh——であり、量子化を意識したファインチューニングが、圧縮のみによって生じた正確性の低下と[[hallucination-risk|幻覚]]の増加の両方を抑えていました。それは学習研究ではなく工学上のベンチマークですが、フットプリントの問題が設計上の梃子（接地、量子化、展開の場所）を持つことを示しています。利用の節制という梃子だけでなく。（[[shen-sustainable-ai-knowledge-base-cs-education-2026]]）

## グリーンスキル、持続可能性の意識、教員の能力

まとめると、これらの研究は不均等に提供されるグリーンスキルの課題を記述しています。カリキュラムの成果としての持続可能性の意識、教員能力の仕組みとしての ESD に沿った教材開発、そして測りうる推論技能としての気候に関する意思決定。価値批判的な流れは次の注意を供給します。概念的な分析は、AI の持続可能な教育への貢献は**条件的で統治を媒介する**ものであり、採用が明示的な教育的価値と人間中心の目的に従属させられるときにのみ持続可能性を支えると論じます——これは[[governance|統治]]と[[critical-pedagogy|批判的教育学]]を、環境教育の傍らではなく内側に置くものです。（[[alsuhaymi-sustainable-education-ai-digitalization-2026]]）

この文献を組織する[[meta-analysis-systematic-review|スコーピングレビュー]]は、規模についてこの分野自身の評決を供給します。応用はエネルギー管理、気候の監視、グリーンキャンパスのプログラムを中心に集まっていますが、規模が限られ、倫理的または環境的な指針を欠いていることが多く、研究の多くは概念的または小規模なパイロットのままです。カバレッジは北米とヨーロッパに偏り、少数の南アフリカの研究を除き[[global-south|グローバルサウス]]からはほぼ何もありません。（[[daniel-ai-sustainability-scoping-review-2026]]）

## 証拠がまだ確立していないこと

- **環境教育に特有のフットプリントの証拠がない。** 炭素とエネルギーの数値は、一般的な LLM の研究と CS の文脈のベンチマークから来ており、AI に支援された気候または ESD のカリキュラムの環境コストを測るものは何もありません。
- **フットプリント介入に関する学習向上の証拠がない。** エコフィードバックは実験室的な研究で選択を変えましたが、それが習慣、評価の成果、あるいは調達を変えることを示すものは何もありません。
- **カリキュラムのフレームワークに関する因果的な証拠がない。** AI-SEE は単一地点の自己報告の事例であり、E3-HOT は実装された研究のない設計の青写真です。SDP の授業設計の結果には対照群がありません。
- **大規模または横断的な文脈の証拠がない。** ここでのすべての実証的な結果は単一地点のものであり、教員の研究は弱い道具立てを用いた小さな目的抽出の標本に依っています。
- **二つの半分が共に研究されることはまれです**。両方が同じ教室に関わるにもかかわらず。

## AI 教育への示唆

1. **自分がどの問いに答えているのかを名指ししてください。** 「AI による気候の教育」と「AI 自身のフットプリント」の両方に「持続可能性」を用いる戦略は、[[daniel-ai-sustainability-scoping-review-2026|Daniel et al. (2026)]] が特定する説明責任のギャップを隠します。アジェンダを分けて保ち、所有者も分けてください。
2. **フットプリントの開示を分野のインフラとして扱ってください。** 正確さの隣に計算資源と炭素を報告すること——測定が不完全なときにも持続可能性の記述を添えること——が、互換性のない指標という問題からの唯一の出口です。
3. **忍耐できない学習者のために設計してください。** 低炭素の選択肢が知覚される遅延のコストを伴うなら、ほとんどの学生はそれを選びません。遅延を低く保ち、制御を露出させ、そして影響を抽象的な炭素の単位ではなく具体的な成果の言葉で記述してください。
4. **教育法が許す限り、より軽い展開を好んでください。** モデルをライセンスされたローカルのコーパスに接地し、ファインチューニングを伴って量子化することで、エネルギーのごく一部で使える正確性が得られました。クラウド推論を拡大する前に、そのパターンを再利用してください。
5. **意識啓発キャンペーンではなく教材開発を通じて教員の能力を育ててください**。そして北米とヨーロッパの文脈から証拠を輸入するのではなく、[[global-south|グローバルサウス]]のギャップを埋めてください。

## 関連する概念

- [[sustainability]]
- [[global-south]]
- [[critical-pedagogy]]
- [[inquiry-based-learning]]
- [[science-education]]
- [[engineering-education]]
- [[teacher-education]]
- [[curriculum-design]]
- [[ethics]]
- [[governance]]

## 関連する論文

- [[daniel-ai-sustainability-scoping-review-2026]] — Separates AI for sustainability from sustainable AI; Global South gap
- [[ai-assisted-inquiry-ssi-climate]] — AI-assisted climate inquiry, d = 0.69 over inquiry alone
- [[aied-carbon-footprint-reporting]] — AIED 2025 disclosure review plus an open-source footprint method
- [[llm-environmental-impact-student-usage-2026]] — Eco-feedback on latency–carbon trade-offs with 89 CS students
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — On-premise quantized assistant at 1.8 mWh per query
- [[liu-ai-sustainable-engineering-education-2026]] — AI-SEE: sustainability consciousness in engineering education
- [[riandi-teacher-ai-green-energy-education-2026]] — Practical AI use and ESD material development predict integration
- [[talebzadeh-ai-green-education-2026]] — AI-assisted design under Sustainable Development Pedagogy constraints
- [[alsuhaymi-sustainable-education-ai-digitalization-2026]] — AI's contribution to sustainable education as governance-mediated
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — "Sustainable learning" as durable cognitive agency, not an environmental claim
