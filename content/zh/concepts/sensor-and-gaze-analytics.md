---
title: 传感器与注视分析
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
translation_of: concepts/sensor-and-gaze-analytics
source_updated: "2026-11-04T16:09:41-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **传感器与注视分析** —— 使用眼动追踪、脑电图、皮肤电活动、心率变异性以及由摄像头推导的姿态，来推断注意、参与、认知负荷与情感等学习者状态。在[[ai-education|教育中的 AI]]里，这些信号承诺提供测验与自我报告无法给出的、连续的、非言语的学习视角。它们也处在这一领域最难的推断问题的中心：传感器记录的是身体，不是心智，而每一项关于学习者思考或感受的主张，都是叠在那份记录之上的一种解释（[[kim-ai-embodied-learning-review-2026|Kim 与 Han，2026]]）。

## 值得思考的问题

- 一个网络摄像头可以显示你的眼睛在整堂课期间都停留在视频播放器内。这是否意味着你在注意？
- 如果一个导师能实时估计你的认知负荷，它应当不问你就据此行动吗？
- 学生的注视可能因为抽动、视觉障碍或文化规范而离开屏幕。对这名学生来说，一个“低注意”标记意味着什么？
- 大学是否应被允许为改进课程而收集大脑与心脏数据，而真正的知情同意需要什么？
- “75% 的参与度准确率”听起来很精确。传感器实际触及了参与的哪一层，又漏掉了哪一层？
- 监考如今读取姿态与头部运动。检测不当行为与评判一具身体之间的界线在哪里？

## 引言

传感器与注视分析描述了一类把学习者的物理测量转化为教育推断的方法。这些测量包括眼睛停留的位置与时长、头皮的脑电活动、汗腺反应、心率逐拍变化，以及头部与躯干的位置和运动。这些推断包括注意、参与、认知负荷、困惑、压力，以及在评估情境中的疑点。

其吸引力很直接。[[self-report-measures|自我报告]]是回溯性的且粗糙，测验只在少数时刻采样学习。传感器连续运行，且几乎不占用学习者的意识努力。这种组合使传感成为[[learning-analytics|学习分析]]与[[student-modeling|学生建模]]的核心，也催生了大量文献 —— 其中传感在技术上令人印象深刻，而解释却很单薄。

一项把 AI 与[[embodied-learning|具身学习]]配对的、涵盖 23 项研究的[[meta-analysis-systematic-review|系统综述]]把这种失衡具体化。分析与评价占编码 AI 角色的 40.0%，识别与检测占 22.5%，而反馈与教练仅占 15.0%。传感类角色占角色标签的 62.5%，参与式角色占 35.0%（[[kim-ai-embodied-learning-review-2026|Kim 与 Han，2026]]）。这一领域更擅长观察学习者，而非改变接下来发生的事。

## 每种信号实际测量什么

**注视与注视停留。** 眼动仪报告眼睛指向何处、停留多久、何时扫视，以及分散得多广。WebGazer 这类基于屏幕的系统从网络摄像头估计注视，而眼镜式设备直接追踪眼球。TutorLoop 把注视转化为两个量：注意是内容区域内注视点的百分比，工作负荷是注视熵，其理由在于分散的注视反映认知负荷（[[tutorloop-sensor-cognitive-feedback-2026|TutorLoop，2026]]）。面向儿童的注视感知助手 Ollie 则在一幅图中定义兴趣区域，当孩子看向其中之一时触发叙述（[[gaze-informed-ai-children|Wu 等人，2026]]）。

**脑电图。** EEG 以高时间分辨率记录头皮上的电压波动。它是这一族信号中唯一直接触及皮层活动的信号，这也是它吸引评估研究的原因。实用的教育系统使用干电极与少量通道：E3Sense 采用四个 125 Hz 的干式 EEG 通道，并分析其中两个额部通道（[[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan 等人，2026]]）。研究级设备走相反的路：Kosmyna 等人（2025）使用 32 通道 EEG，比较学生用[[llm|大语言模型]]、搜索引擎或不使用工具写作的情形，发现 LLM 组的神经连接最弱（[[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna 等人，2025]]）。该研究也是对单通道证据最清晰的警告，因为其核心主张依赖于一次可选的分组交叉环节，而 54 名参与者中只有 18 人参加。

**皮肤电活动。** EDA 测量汗腺导电率，是交感唤起的指标。它对压力、努力与情绪强度都有反应，却无法在它们之间区分。同一构念出现在腕带中，也出现在由眼动仪框架固定、相距几厘米的额部电极中（[[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan 等人，2026]]）。

**心率与心率变异性。** 心率反映唤起，逐拍变异则标示自主神经恢复。在一项 458 名学生佩戴 Oura 戒指的为期一年的研究中，情绪耗竭式的语言与较低的睡眠效率和较低的心率变异性相关（[[affective-text-wearable-student-health|情感文本与可穿戴传感，2026]]）。两项测量都不能确定原因。

**基于摄像头的姿态与运动。** 监考系统可以逐帧提取十七个身体关键点，并推导姿态偏离、头部运动趋势与上半身运动（[[arif-automated-online-proctoring-yolov11-2026|Arif 等人，2026]]）。这测量的是运动。把它称为可疑行为，是另一个缺乏支持的步骤。

这些信号在采样率、噪声与仪器负担上各不相同。E3Sense 把十二个 EEG 窗口、六个眼动窗口与三个 EDA 窗口对齐为一个 166 维的共享 120 秒表征（[[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan 等人，2026]]）。EduGage 同时运行七类设备，并得出结论：轻量化的组合承载了大部分可用信号（[[engagement-assessment-video|Leng 等人，2026]]）。

## 这些信号被用来做什么

**[[video-education|视频学习]]中的参与检测。** E3Sense 让 30 名大学生为每个视频的五个片段评分，共产生 450 个评分。一个融合模型在留出的参与者上达到 75.0% 的“差一级以内”平衡准确率，而众数基线为 63.0%（[[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan 等人，2026]]）。EduGage 在 16 名参与者和 715 个探测窗口上报告 MAE 为 0.81、差一级以内准确率 83.75%（[[engagement-assessment-video|Leng 等人，2026]]）。两者都把这些估计视为近似值。

**课堂中的注意估计。** 一个[[multimodal|多模态]] Transformer 在 DIPSER 这个包含 57 名受试者的自然情境数据集上融合面部图像与可穿戴信号，达到 MAE 0.283。它相对纯视觉基线的优势并不大，作者得出结论：面部特征是主要的信息来源（[[student-attention-estimation-fairness-2026|Fragkiadakis 等人，2026]]）。

**认知负荷与反馈时机。** TutorLoop 使用由注视推导的注意与工作负荷，通过一个强化学习智能体在四种[[feedback|反馈类型]]中选择。在 187 名参与者中，完整系统比基线介入得更少，却提升了注意并降低了工作负荷（[[tutorloop-sensor-cognitive-feedback-2026|TutorLoop，2026]]）。

**监考与诚信。** 基于姿态的监考在其自建的标注场景集上报告了接近天花板的成绩：99.56% 的准确率与 0.9957 的 AUC（[[arif-automated-online-proctoring-yolov11-2026|Arif 等人，2026]]）。可穿戴 AI 从另一侧改变了同一问题。智能眼镜消除了监考所依赖的注视下垂与姿态移动，Corbin 及其同事把这一状况称为双重透明（[[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin 等人，2026]]）。

**情感与[[well-being|福祉]]。** 考试期间收集的生理信号能预测成绩类别，随机森林在 30 次重复中达到 0.96 的均值（[[physiological-signals-exam-outcomes-ml|Yamazaki 与 Rimal，2026]]）。最强的预测因子是皮肤电活动、加速度计运动与皮肤温度。那是唤起与运动，不是理解。

**评估研究。** EEG 已被检验为熟悉度与心理表征的直接测量。两条路线都有前景，也都仍属探索性，下一节将讨论这一点。

## 推断的缺口

上述每一种用途都依赖一条链：一个生理或行为事件、由它计算出的特征、在标签上训练的模型，以及一项关于心理状态的主张。每一环都在漏。

标签往往是最弱的一环。E3Sense 预测的是学习者自己的片段评分，而其中 63% 的评分落在两个“投入”层级上。模型可以通过学习分布而非状态来取得好成绩。当研究者加入学习者自己对参与的定义后，准确率从 64.6% 升至 71.5%，这说明标签与信号部分测量的是不同的东西（[[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan 等人，2026]]）。

[[assessment-validity|效度验证]]可以把模型抬高。一项针对 EEG 熟悉度预测的十五个模型的基准，在分层交叉验证下达到 0.9853 F1。而尊重时间结构的、与试次无关的 Group K-Fold 把峰值降至 0.6038 F1，对照的是 25% 的机会水平（[[eeg-familiarity-automated-assessment-2026|Nanayakkara 与 Halloluwa，2026]]）。第一个数字描述的是泄漏；第二个描述的是学习。

神经相关物不是分数。由 EEG 重建的图像在 55 个参与者—视频观测上与测验成绩相关，R² = 0.79。正确作答的项目也比错误项目表现出更高的语义相似度。然而有一名参与者产出了高质量的重建却作答错误，因此重建质量不能被读作正确性（[[seeing-cognitive-representations-eeg-reconstruction|Su 等人，2026]]）。

注意不是学习。在 TutorLoop 中，注意与学习的相关为 r = 0.017，而工作负荷呈负相关，r = -0.168（[[tutorloop-sensor-cognitive-feedback-2026|TutorLoop，2026]]）。一个最大化注意信号的系统所优化的东西，接近于噪声。

生理剖面不是诊断。考试压力模型从唤起与运动预测成绩类别，而作者坚持：输出应当与个人处境和心理健康背景并列，而不是进入高风险决策（[[physiological-signals-exam-outcomes-ml|Yamazaki 与 Rimal，2026]]）。

最后，采集不是整合。Kim 与 Han 发现，多数多模态研究并行收集数据流，只有一项在事后对齐了面部情感、注视与人脸检测，而没有任何一项在学习者使用系统时实时融合其输入（[[kim-ai-embodied-learning-review-2026|Kim 与 Han，2026]]）。一页同步的通道看起来可以像学习者的模型，而它只是一份记录。

## 感知学习者的伦理

**同意被制度权力削弱。** 必须上课或必须参加考试的学生无法自由拒绝摄像头或可穿戴设备。人口学属性甚至可能不是自愿提供的：DIPSER 的性别、年龄与族裔标签是由计算机视觉模型从图像推断的，而非参与者提供（[[student-attention-estimation-fairness-2026|Fragkiadakis 等人，2026]]）。为了检验模型是否公平地对待某人而推断此人是谁，本身就是一种画像行为。

**生物特征数据不是普通的分析数据。** EEG、EDA 与心率变异性都与健康相邻，在许多司法辖区属于特殊类别数据。它们能揭示睡眠、压力与医疗状况，远远超出课程所需。一个面向儿童的注视感知系统，即便在小型先导中也引来了一位家长的[[privacy|隐私]]异议（[[gaze-informed-ai-children|Wu 等人，2026]]）。

**功能蔓延是常态路径。** 福祉监测变成风险标记，风险标记变成评分证据。Corbin 及其同事展示了这种漂移的评估版本：一旦物理隔离失效，检查就从作品转向身体，学生必须证明自己的眼镜是矫正性的、设备是治疗性的（[[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin 等人，2026]]）。

**公平性失败聚集在彼此不同的身体上。** 基于面部的注意估计依赖肤色、眼镜与光照。基于注视的注意惩罚回避目光接触的学习者，包括一些自闭症与[[neurodiversity|神经多样性]]学生。基于姿态的监考会标记抽动、自我刺激行为与文化性的运动规范。那项监考研究并未检验被标记的姿态是否对应不当行为，也未检验检测器是否公平地对待[[special-education|残障学生]]或注视上的文化差异（[[arif-automated-online-proctoring-yolov11-2026|Arif 等人，2026]]）。在这里，监管不是修复；它是把错误洗白成规则的一种方式。

**公平性主张需要受试者层面的证据。** 一个针对性的性别正则项把验证 MAE 差距从 0.02 降到 0.005，随后却在留出的受试者上同时提高了差距与最差组误差（[[student-attention-estimation-fairness-2026|Fragkiadakis 等人，2026]]）。把单次划分报告为公平性的证明，是一种带有公平代价的设计失败。

**隐私可以被设计进去。** TutorLoop 在客户端运行 WebGazer，使原始注视数据从不离开浏览器（[[tutorloop-sensor-cognitive-feedback-2026|TutorLoop，2026]]）。这一选择表明，部分成本是架构性的而非固有的。更难的问题是：这种推断是否应当存在。

## 常见误解

**“眼动追踪告诉了你注意在哪里。”** 它告诉你眼睛指向哪里。注视可以停留在幻灯片上，而学习者在想别的事；它也可以因为与注意无关的原因离开屏幕。TutorLoop 的注意测量与学习的相关为 r = 0.017，这接近于毫无关系（[[tutorloop-sensor-cognitive-feedback-2026|TutorLoop，2026]]）。

**“生理信号是心理状态的直接读数。”** EDA 标示交感唤起，心率变异性标示自主神经恢复。两者都不区分压力、努力与兴奋。一个从 EDA、运动与皮肤温度预测考试成绩的模型，学到的是身体的唤起签名，而不是学生的理解（[[physiological-signals-exam-outcomes-ml|Yamazaki 与 Rimal，2026]]）。

**“高分类准确率意味着系统检测到了该状态。”** 准确率取决于标签、划分与基准率。当验证尊重试次边界时，EEG 熟悉度预测从 0.9853 跌至 0.6038 F1（[[eeg-familiarity-automated-assessment-2026|Nanayakkara 与 Halloluwa，2026]]）。监考的 99.56% 描述的是一个专门构建的标注场景集，而不是真实考试（[[arif-automated-online-proctoring-yolov11-2026|Arif 等人，2026]]）。

**“参与是一件事，所以一个分数就能代表它。”** 这一构念有三条脉络，而传感器主要触及第一条。E3Sense 发现学习者以不同比例通过认知、行为与情绪指标来定义它，而这些定义改变了预测（[[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan 等人，2026]]）。单一数字掩盖了被测量的是哪一层。

**“如果模型在验证划分上公平，它在课堂上就公平。”** 一个在性别组之间拉平验证误差的正则项，让留出集上的差距变得更糟（[[student-attention-estimation-fairness-2026|Fragkiadakis 等人，2026]]）。公平性是部署的属性，不是检查点的属性。

## 关联概念
- [[student-modeling]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
- [[student-engagement]]
- [[self-regulated-learning]]
- [[embodied-learning]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[academic-integrity]]
- [[privacy]]
- [[bias-mitigation]]
- [[neurodiversity]]
- [[equity-in-ai-education]]
- [[accessibility]]
- [[machine-learning]]
- [[cognitive-psychology]]
- [[intelligent-tutoring]]

## 关联文章
- [[gaze-informed-ai-children]] — 注视触发的 LLM 叙述让儿童在有叙述的区域停留 6.48 秒，对照为 1.67 秒，但该研究测量的是注意而非理解（Wu 等人，2026）
- [[e3sense-multimodal-learner-engagement-sensing-2026]] — 头戴式 EEG、眼动追踪与额部 EDA 以 75.0% 的差一级以内准确率预测自评参与，基线为 63.0%（Anupkrishnan 等人，2026）
- [[engagement-assessment-video]] — EduGage 把七路可穿戴与摄像头数据流融合为片段级参与估计（MAE 0.81），并主张更轻量的仪器（Leng 等人，2026）
- [[student-attention-estimation-fairness-2026]] — 一个多模态注意模型达到 MAE 0.283，其验证集上的公平性增益在留出受试者上反转（Fragkiadakis 等人，2026）
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — 可穿戴 AI 具有双重透明性，因此物理隔离失效，执法漂向裁决学生的身体（Corbin 等人，2026）
- [[eeg-familiarity-automated-assessment-2026]] — 十五个 EEG 熟悉度预测模型在与试次无关的验证下从 0.9853 跌至 0.6038 F1（Nanayakkara 与 Halloluwa，2026）
- [[seeing-cognitive-representations-eeg-reconstruction]] — EEG 重建的图像在 R² = 0.79 上追踪测验表现，其中一名高重建质量的参与者作答错误（Su 等人，2026）
- [[physiological-signals-exam-outcomes-ml]] — 随机森林从 EDA、运动与皮肤温度预测考试成绩类别，这些信号标示的是唤起而非理解（Yamazaki 与 Rimal，2026）
- [[affective-text-wearable-student-health]] — 在 458 名佩戴 Oura 的学生中，情感语域而非关切主题追踪了睡眠与心率变异性（2026）
- [[tutorloop-sensor-cognitive-feedback-2026]] — 网络摄像头注视驱动了面向 187 名学习者的强化学习反馈；注意与学习的相关为 r = 0.017，工作负荷呈负相关（2026）
- [[arif-automated-online-proctoring-yolov11-2026]] — YOLOv11 姿态特征在专门构建的标注集上以 99.56% 标记可疑行为，未检验不当行为或公平性（Arif 等人，2026）
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]] — 在 54 名参与者中，EEG 连接随外部写作支持而下降，把依赖框定为累积的认知债务（Kosmyna 等人，2025）
- [[kim-ai-embodied-learning-review-2026]] — 在 23 项研究中，传感类角色以 62.5% 的标签占主导，且没有受综述的系统实时融合多模态数据流（Kim 与 Han，2026）
